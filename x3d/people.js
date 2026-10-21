// Rigged, animated characters (CC0 KayKit Adventurers models + animations, see assets/LICENSES.txt).
// Same API as the old procedural Person: root, j, state, mood, yaw/yawTarget, walkTo, face, set, setMood, update, phone, phoneScreen.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as SU from 'three/addons/utils/SkeletonUtils.js';

const BASE = '/x3d/assets/people/';
const A = { models: {}, clips: {}, ready: null };
export function loadPeople(models = ['owner', 'sarah', 'neighbor', 'jogger']) {
  const L = new GLTFLoader();
  const need = models.filter(m => !A.models[m]);
  const p = [
    ...need.map(m => L.loadAsync(BASE + m + '.glb').then(g => { A.models[m] = g.scene; })),
    ...(Object.keys(A.clips).length ? [] : ['anim_a', 'anim_b'].map(f => L.loadAsync(BASE + f + '.glb').then(g => g.animations.forEach(c => { A.clips[c.name] = c; }))))
  ];
  return Promise.all(p);
}

// hue-shift a character atlas: rules = [[hueFrom, hueTo, newHue, satMul, lightMul]] (degrees)
const _tex = new Map();
function recolorTex(src, rules, key) {
  if (_tex.has(key)) return _tex.get(key);
  const img = src.image; const c = document.createElement('canvas'); c.width = img.width; c.height = img.height; const x = c.getContext('2d'); x.drawImage(img, 0, 0);
  const d = x.getImageData(0, 0, c.width, c.height), p = d.data;
  for (let i = 0; i < p.length; i += 4) {
    const r = p[i] / 255, g = p[i + 1] / 255, b = p[i + 2] / 255; const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, dd = mx - mn;
    if (dd < .06) continue; const s = dd / (1 - Math.abs(2 * l - 1)); let h = mx === r ? ((g - b) / dd) % 6 : mx === g ? (b - r) / dd + 2 : (r - g) / dd + 4; h = (h * 60 + 360) % 360;
    for (const [h0, h1, nh, sm = 1, lm = 1] of rules) { if (h >= h0 && h <= h1) { const ns = Math.min(1, s * sm), nl = Math.min(1, l * lm); const C = (1 - Math.abs(2 * nl - 1)) * ns, X = C * (1 - Math.abs((nh / 60) % 2 - 1)), m = nl - C / 2;
      const [rr, gg, bb] = nh < 60 ? [C, X, 0] : nh < 120 ? [X, C, 0] : nh < 180 ? [0, C, X] : nh < 240 ? [0, X, C] : nh < 300 ? [X, 0, C] : [C, 0, X]; p[i] = (rr + m) * 255; p[i + 1] = (gg + m) * 255; p[i + 2] = (bb + m) * 255; break; } }
  }
  x.putImageData(d, 0, 0); const t = new THREE.CanvasTexture(c); t.flipY = src.flipY; t.colorSpace = src.colorSpace; t.magFilter = src.magFilter; t.minFilter = src.minFilter; _tex.set(key, t); return t;
}

const CLIP = { idle: 'Idle', walk: 'Walking_A', lookDown: 'Idle', lookUp: 'Idle', phone: 'Holding_A', phoneHappy: 'Holding_A', call: 'Holding_A', wave: 'Idle', happy: 'Cheer', point: 'Idle', hose: 'Holding_B', kneel: 'Working_A', climb: 'Walking_A', work: 'Hammering', carry: 'Holding_B', sit: 'Sit_Chair_Idle', sitPhone: 'Sit_Chair_Idle', sitFloor: 'Sit_Floor_Idle', dig: 'Digging', pickup: 'PickUp', interact: 'Interact', run: 'Running_A' };
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const clampN = (v, a, b) => Math.max(a, Math.min(b, v));
const _v1 = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3(), _q1 = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _q3 = new THREE.Quaternion();

export class Person {
  constructor(o = {}) {
    this.o = o = Object.assign({ model: o.female ? 'sarah' : 'owner', height: 1.75 }, o);
    const src = A.models[o.model]; if (!src) throw new Error('people not loaded: ' + o.model);
    const root = this.root = new THREE.Group();
    const m = this.model = SU.clone(src); root.add(m);
    m.scale.setScalar(o.height / 2.15); // KayKit rigs are ~2.15 units to the top of the hair
    m.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; c.frustumCulled = false;
      if (o.recolor && c.material.map) { c.material = c.material.clone(); c.material.map = recolorTex(c.material.map, o.recolor, o.model + JSON.stringify(o.recolor)); }
      c.material.roughness = .78; c.material.metalness = 0; } });
    const B = n => m.getObjectByName(n);
    this.b = { hips: B('hips'), spine: B('spine'), chest: B('chest'), head: B('head'), uaR: B('upperarmr'), laR: B('lowerarmr'), wrR: B('wristr'), uaL: B('upperarml'), laL: B('lowerarml'), wrL: B('wristl'), handR: B('handslotr'), handL: B('handslotl') };
    this.j = { hips: this.b.hips, spine: this.b.chest, neck: this.b.head, head: this.b.head, rHand: this.b.handR, lHand: this.b.handL };
    this.rest = ['head', 'chest', 'uaR', 'laR', 'uaL', 'laL'].map(k => [this.b[k], this.b[k].quaternion.clone()]); // bones we layer on: reset each frame (clips may not key them)
    this.mixer = new THREE.AnimationMixer(m); this.actions = {}; this.curClip = null;
    // phone prop in right hand
    const ph = this.phone = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(.075, .15, .012), new THREE.MeshStandardMaterial({ color: 0x111317, roughness: .3, metalness: .4 })); ph.add(body);
    this.phoneScreen = new THREE.Mesh(new THREE.PlaneGeometry(.066, .138), new THREE.MeshBasicMaterial({ color: 0x6f96bb })); this.phoneScreen.position.z = .007; ph.add(this.phoneScreen);
    ph.scale.setScalar(1.5); ph.visible = false; root.add(ph); // placed in the right hand each frame, screen turned to the face
    // optional cap with logo
    if (o.hairStyle === 'cap' || o.cap) this.addCap(o.capColor ?? 0x23302a, o.capTex);
    // legacy fields
    this.mouth = new THREE.Object3D(); this.eyes = []; this.brows = [];
    this.state = 'idle'; this.mood = 'neutral'; this.t = Math.random() * 10; this.phase = 0; this.speed = 0; this.path = null; this.lookYaw = 0; this.yaw = 0; this.yawTarget = 0; this.slump = 0;
    this._w = {}; // override weights
    this.play('idle', 0);
    this.mixer.update(Math.random() * 2);
  }
  addCap(color, tex) {
    const h = this.b.head; const g = new THREE.Group(); g.position.set(0, .84, .03); h.add(g);
    const cm = new THREE.MeshStandardMaterial({ color, roughness: .7 });
    const crown = new THREE.Mesh(new THREE.SphereGeometry(.54, 28, 14, 0, Math.PI * 2, 0, Math.PI * .5), cm); crown.scale.set(1.05, .66, 1.05); g.add(crown);
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(.3, .3, .03, 28, 1, false, 0, Math.PI), cm); brim.rotation.y = Math.PI / 2; brim.rotation.x = .12; brim.position.set(0, .02, .4); brim.scale.set(1.35, 1, 1.55); g.add(brim);
    const btn = new THREE.Mesh(new THREE.SphereGeometry(.04, 10, 8), cm); btn.position.y = .28; g.add(btn);
    if (tex) { const logo = new THREE.Mesh(new THREE.PlaneGeometry(.34, .17), new THREE.MeshBasicMaterial({ map: tex, transparent: true })); logo.position.set(0, .16, .5); logo.rotation.x = -.38; logo.scale.setScalar(1.3); g.add(logo); }
    g.traverse(c => { if (c.isMesh) { c.castShadow = true; } }); this.cap = g;
  }
  play(state, fade = .25) {
    const name = CLIP[state] || 'Idle'; if (this.curClip === name) return; const clip = A.clips[name]; if (!clip) return;
    const a = this.actions[name] || (this.actions[name] = this.mixer.clipAction(clip));
    const prev = this.curClip && this.actions[this.curClip];
    a.reset(); a.enabled = true; a.setEffectiveWeight(1); a.play();
    if (prev && fade) { a.crossFadeFrom(prev, fade, true); } else if (prev) prev.stop();
    this.curClip = name;
  }
  setMood(m) { this.mood = m; }
  set(state) { this.state = state; this.phone.visible = (state === 'phone' || state === 'call' || state === 'phoneHappy' || state === 'sitPhone'); this.play(state); }
  walkTo(points, speed = 1.35, carry) {
    this.path = points.map(p => p.clone ? p.clone() : new THREE.Vector3(p[0], 0, p[1])); this.speed = speed; this.set(carry ? 'carry' : 'walk');
    return new Promise(r => { this._arrive = r; });
  }
  face(x, z) { this.yawTarget = Math.atan2(x - this.root.position.x, z - this.root.position.z); }
  // rotate a bone so the direction to its child points along dir (given in character space), blended by w
  aim(bone, child, dir, w) {
    if (w <= .001) return; bone.updateWorldMatrix(true, false); child.updateWorldMatrix(true, false);
    const p0 = _v1.setFromMatrixPosition(bone.matrixWorld), p1 = _v2.setFromMatrixPosition(child.matrixWorld); const cur = p1.sub(p0).normalize();
    this.root.getWorldQuaternion(_q3); const tgt = dir.clone().normalize().applyQuaternion(_q3);
    _q1.setFromUnitVectors(cur, tgt); if (w < 1) _q1.slerp(_q2.identity(), 1 - w);
    bone.getWorldQuaternion(_q2); _q2.premultiply(_q1); bone.parent.getWorldQuaternion(_q3); bone.quaternion.copy(_q3.invert().multiply(_q2));
  }
  update(dt) {
    this.t += dt; const t = this.t;
    if (this.path && this.path.length) {
      const p = this.root.position, tgt = this.path[0]; const dx = tgt.x - p.x, dz = tgt.z - p.z, d = Math.hypot(dx, dz);
      if (d < .08) { this.path.shift(); if (!this.path.length) { this.path = null; if (this.state !== 'carry') this.set('idle'); this._arrive && this._arrive(); } }
      else { const step = Math.min(d, this.speed * dt); p.x += dx / d * step; p.z += dz / d * step; this.yawTarget = Math.atan2(dx, dz); this.phase += dt * this.speed * 5.2; }
    }
    let dy = this.yawTarget - this.yaw; while (dy > Math.PI) dy -= Math.PI * 2; while (dy < -Math.PI) dy += Math.PI * 2;
    this.yaw += dy * (1 - Math.exp(-dt * 8)); this.root.rotation.y = this.yaw;
    const st = this.state;
    const wa = this.actions[CLIP.walk]; if (wa) wa.timeScale = st === 'walk' ? clampN((this.speed || 1.35) / (1.05 * this.o.height / 2.15), .6, 1.9) : st === 'climb' ? .7 : 1;
    this.rest.forEach(([b, q]) => b.quaternion.copy(q)); this.mixer.update(dt);
    // procedural layers on top of the clip
    const k = 1 - Math.exp(-dt * 7), W = this._w; const tw = (n, v) => { W[n] = (W[n] || 0) + (v - (W[n] || 0)) * k; return W[n]; };
    const hand = this.b.uaR.getWorldPosition(_v1); this.root.worldToLocal(hand); const side = Math.sign(hand.x) || -1;
    const wSP = tw('sp', st === 'sitPhone' || st === 'phone' || st === 'phoneHappy' || st === 'call' ? 1 : 0); if (wSP > .01) { this.aim(this.b.uaR, this.b.laR, V(side * .25, -.8, .55), wSP); this.aim(this.b.laR, this.b.wrR, V(-side * .25, .75, .65), wSP); }
    const wWave = tw('wave', st === 'wave' ? 1 : 0), wCall = tw('call', st === 'call' ? 1 : 0), wPoint = tw('point', st === 'point' ? 1 : 0), wClimb = tw('climb', st === 'climb' ? 1 : 0);
    if (wWave > .01) { this.aim(this.b.uaR, this.b.laR, V(side * .75, .65, .15), wWave); this.aim(this.b.laR, this.b.wrR, V(side * .25 + Math.sin(t * 9) * .45, 1, .2), wWave); }
        if (wPoint > .01) { this.aim(this.b.uaR, this.b.laR, V(side * .35, .15, 1), wPoint); this.aim(this.b.laR, this.b.wrR, V(side * .1, .2, 1), wPoint); }
    if (wClimb > .01) { const c = Math.sin(t * 5); this.aim(this.b.uaR, this.b.laR, V(side * .3, 1, .35 + c * .2), wClimb); this.aim(this.b.uaL, this.b.laL, V(-side * .3, 1, .35 - c * .2), wClimb); }
    // head: look down / up / mood / slump
    const pitch = tw('pitch', (st === 'lookDown' ? .55 : st === 'lookUp' ? -.45 : st === 'phone' || st === 'phoneHappy' || st === 'call' || st === 'sitPhone' ? .3 : 0) + (this.mood === 'worried' ? .14 : 0) + this.slump * .35);
    const roll = tw('roll', st === 'call' ? side * -.12 : 0) + (st === 'idle' ? Math.sin(t * .45) * .03 : 0);
    const yawH = tw('hy', st === 'idle' ? Math.sin(t * .3) * .14 : this.lookYaw);
    if (Math.abs(pitch) + Math.abs(roll) + Math.abs(yawH) > .001) { _q1.setFromEuler(new THREE.Euler(pitch, yawH, roll)); this.b.head.quaternion.multiply(_q1); }
    const sl = tw('slump', this.slump); if (sl > .01) { _q1.setFromAxisAngle(V(1, 0, 0), sl * .35); this.b.chest.quaternion.multiply(_q1); }
    if (this.phone.visible) { // phone sits in the right hand, screen facing the eyes
      const hp = this.b.handR.getWorldPosition(_v1), eye = this.b.head.getWorldPosition(_v2); eye.y += .45 * this.model.scale.y;
      const f = _v3.set(Math.sin(this.yaw), 0, Math.cos(this.yaw)); hp.addScaledVector(f, .05 * this.o.height).lerp(eye, .16); hp.y += .05 * this.o.height;
      this.phone.position.copy(this.root.worldToLocal(hp.clone())); this.phone.lookAt(eye); }
    const bounce = tw('bounce', st === 'phoneHappy' || (this.mood === 'happy' && st === 'idle') ? 1 : 0); if (bounce > .01) this.model.position.y = Math.abs(Math.sin(t * 5)) * .025 * bounce; else this.model.position.y = 0;
  }
}
