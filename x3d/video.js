// Offline-rendered hook videos. Deterministic: frame(t) renders time t.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { makeVehicle } from './truck.js';
import { Person, loadPeople } from './people.js';
import { sidingTex, shingleTex } from './world.js';

// seeded random so every render is identical
let seed = 42; Math.random = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

const W = 1280, H = 720, FPS = 30, DT = 1 / FPS;
const V = new URLSearchParams(location.search).get('v') || 'A';
const S = (c, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: .8, metalness: 0 }, o));
const rbox = (w, h, d, r = .1) => new RoundedBoxGeometry(w, h, d, 2, r);
function add(geo, mat, parent, x = 0, y = 0, z = 0, sh = true) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = sh; m.receiveShadow = true; parent.add(m); return m; }
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const ease = k => { k = clamp(k); return k * k * (3 - 2 * k); };
const lerp = (a, b, k) => a + (b - a) * k;
const V3 = (x, y, z) => new THREE.Vector3(x, y, z);

/* ---------- renderer ---------- */
const gl = document.createElement('canvas'); gl.width = W; gl.height = H;
const renderer = new THREE.WebGLRenderer({ canvas: gl, antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(1); renderer.setSize(W, H, false);
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, W / H, .02, 900);
scene.fog = new THREE.Fog(0xd8e6f0, 60, 260);
const composer = new EffectComposer(renderer); composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(W / 2, H / 2), .4, .45, .93); composer.addPass(bloom); composer.addPass(new OutputPass());

// sky (with soft procedural clouds)
const CLOUDS = `varying vec3 d;float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n2(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
vec3 clouds(vec3 c,vec3 cc,vec3 hor){if(d.y<=0.)return c;vec2 uv=d.xz/(d.y+.15)*1.3;float cl=smoothstep(.5,.78,fbm(uv))*smoothstep(0.,.18,d.y)*.8;float lit=smoothstep(.45,.8,fbm(uv+vec2(.04,.03)));return mix(c,mix(cc*.66+hor*.25,cc*1.04,lit),cl);}
`;
const sky = new THREE.Mesh(new THREE.SphereGeometry(500, 32, 16), new THREE.ShaderMaterial({
  side: THREE.BackSide, depthWrite: false, fog: false,
  vertexShader: 'varying vec3 d;void main(){d=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader: CLOUDS + 'void main(){float y=d.y;vec3 top=vec3(.25,.55,.92),hor=vec3(.86,.93,1.),bot=vec3(.85,.9,.82);vec3 c=y>0.?mix(hor,top,pow(smoothstep(0.,.6,y),.8)):bot;vec3 s=normalize(vec3(.5,.45,.6));c+=vec3(1.,.9,.7)*pow(max(dot(d,s),0.),40.)*.5;c=clouds(c,vec3(1.),hor);gl_FragColor=vec4(c,1.);}'
}));
scene.add(sky);
const hemi = new THREE.HemisphereLight(0xcfe3ff, 0x6d8a4f, 1.15); scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff1dc, 2.7); sun.position.set(14, 18, 12); sun.castShadow = true;
sun.shadow.mapSize.set(4096, 4096); Object.assign(sun.shadow.camera, { left: -11, right: 11, top: 11, bottom: -11, near: 1, far: 80 });
sun.shadow.bias = -.0005; sun.shadow.normalBias = .045; scene.add(sun);
const fill = new THREE.DirectionalLight(0xffe8d0, .55); fill.position.set(-8, 6, 14); scene.add(fill);
const rim = new THREE.DirectionalLight(0xbfd8ff, .8); rim.position.set(-6, 8, -12); scene.add(rim);

/* ---------- stage ---------- */
const glowTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d'); const g = x.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.3, 'rgba(255,255,255,.45)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 128, 128); return new THREE.CanvasTexture(c); })();
let TREES = [];
async function stage() {
  const L = new GLTFLoader(); TREES = (await Promise.all(['Tree_1_A', 'Tree_1_B', 'Tree_1_C', 'Tree_4_A', 'Tree_4_B'].map(n => L.loadAsync('/x3d/assets/nature/' + n + '_Color1.gltf').then(g => g.scene).catch(() => null)))).filter(Boolean);
  TREES.forEach(m => { m.userData.h = new THREE.Box3().setFromObject(m).max.y; m.traverse(o => { if (o.isMesh) o.material.roughness = .9; }); });
  const grassTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 256; const x = c.getContext('2d'); x.fillStyle = '#79ad55'; x.fillRect(0, 0, 256, 256); for (let i = 0; i < 2600; i++) { x.fillStyle = `hsl(${92 + Math.random() * 18},${40 + Math.random() * 20}%,${36 + Math.random() * 16}%)`; x.fillRect(Math.random() * 256, Math.random() * 256, 2, 3); } const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(60, 60); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  add(new THREE.PlaneGeometry(400, 400), S(0xffffff, { map: grassTex, roughness: .95 }), scene, 0, 0, 0).rotation.x = -Math.PI / 2;
  const conc = S(0xcfccc4, { roughness: .9 });
  add(new THREE.BoxGeometry(9, .04, 5), conc, scene, 0, .02, -.5); // driveway pad
  add(new THREE.BoxGeometry(400, .03, 6), S(0x3c3f44, { roughness: .95 }), scene, 0, .015, -9); // street
  for (let i = -20; i < 20; i++) add(new THREE.BoxGeometry(2, .035, .15), S(0xf2d24b), scene, i * 5, .02, -9);
  add(new THREE.BoxGeometry(400, .08, 1.6), conc, scene, 0, .04, -5.6); // sidewalk
  // houses across the street + behind
  const cols = [0xf3e3c3, 0xcfe0e8, 0xf0d0c0, 0xe2e8d0, 0xf5efe6, 0xd8d0e8];
  const roofC = [0x6b4a3a, 0x4a5568, 0x7a3b2e, 0x3f4a3a];
  const house = (x, z, rot, ci) => {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rot; scene.add(g);
    const w = 8 + (ci % 3), d = 6.5, h = 3.2;
    add(rbox(w, h, d, .08), S(cols[ci % cols.length], { roughness: .85, map: sidingTex() }), g, 0, h / 2, 0);
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(.1, d * .62, 2.2, 4, 1), S(roofC[ci % 4], { roughness: .85, map: shingleTex() })); roof.rotation.y = Math.PI / 4; roof.scale.set(w / d * 1.05, 1, 1.05); roof.position.y = h + 1.1; roof.castShadow = true; g.add(roof);
    const win = S(0x30475e, { roughness: .1, metalness: .3 }), trim = S(0xffffff);
    [-w * .3, w * .3].forEach(wx => { add(new THREE.BoxGeometry(1.3, 1.1, .08), trim, g, wx, 1.7, d / 2 + .02, false); add(new THREE.BoxGeometry(1.1, .9, .1), win, g, wx, 1.7, d / 2 + .03, false); });
    add(new THREE.BoxGeometry(1.1, 2.1, .1), S(0x8a4b2f), g, 0, 1.05, d / 2 + .03, false);
    for (let i = 0; i < 3; i++) { const b = add(new THREE.SphereGeometry(.55 + Math.random() * .25, 14, 10), S(0x4f8a3c, { roughness: .9 }), g, -w / 2 + 1 + i * 1.1 + (i > 0 ? w * .45 : 0), .45, d / 2 + .8); b.scale.y = .8; }
  };
  [-26, -13, 0, 13, 26].forEach((x, i) => house(x, -18, 0, i));
  house(-14, 4, Math.PI / 2, 3);
  house(0, 16, Math.PI, 1);
  // trees
  const treeOld = (x, z, s = 1) => { add(new THREE.CylinderGeometry(.18 * s, .25 * s, 2.2 * s, 10), S(0x6b4a33), scene, x, 1.1 * s, z); const c = add(new THREE.SphereGeometry(1.5 * s, 18, 14), S(0x5a9a3e, { roughness: .9 }), scene, x, 3.1 * s, z); c.scale.y = 1.1; add(new THREE.SphereGeometry(1.05 * s, 14, 10), S(0x68a84a, { roughness: .9 }), scene, x + .7 * s, 3.6 * s, z + .3 * s); };
  const tree = (x, z, s = 1, k = 0) => { const src = TREES[k % TREES.length]; if (!src) return treeOld(x, z, s); const m = src.clone(); m.position.set(x, -.15, z); m.scale.setScalar(s * 4.8 / src.userData.h); m.rotation.y = x * 1.7; m.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } }); scene.add(m); };
  tree(-7, -3.5, 1.1, 0); tree(9.5, -3, 1, 1); tree(-19, -13, 1.2, 3); tree(19, -13.5, 1.1, 2); tree(6, -13, .9, 0); tree(-6, -13.5, 1, 1); tree(12, 6, 1.2, 2); tree(-22, 8, 1.3, 3); tree(24, 2, 1.2, 4);
  // fence along the side
  const fm = S(0xf4f1ea);
  for (let i = 0; i < 14; i++) add(new THREE.BoxGeometry(.12, 1, .06), fm, scene, -6.5 + i * .5 + 18, .5, 3.6);
}

/* ---------- props ---------- */
function makeFirecracker() {
  const g = new THREE.Group();
  add(new THREE.CylinderGeometry(.032, .032, .15, 18), S(0xd8352a, { roughness: .45 }), g, 0, 0, 0);
  add(new THREE.CylinderGeometry(.0335, .0335, .03, 18), S(0xf2c94c, { roughness: .4 }), g, 0, .03, 0);
  add(new THREE.CylinderGeometry(.034, .034, .012, 18), S(0xeeeeee), g, 0, .075, 0);
  const segs = [];
  for (let i = 0; i < 14; i++) { const k = i / 13; const s = add(new THREE.CylinderGeometry(.0045, .0045, .012, 6), S(0x6b5636, { roughness: .9 }), g, Math.sin(k * 3) * .018, .085 + k * .11, Math.cos(k * 2.4) * .01 - .01, false); segs.push(s); }
  const spark = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xffb340, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  spark.scale.setScalar(.09); g.add(spark);
  const bits = []; for (let i = 0; i < 14; i++) { const b = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xffe08a, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true })); b.scale.setScalar(.022); g.add(b); bits.push(b); }
  const smoke = []; for (let i = 0; i < 6; i++) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xbbbbbb, transparent: true, opacity: 0, depthWrite: false })); s.scale.setScalar(.06); g.add(s); smoke.push(s); }
  const light = new THREE.PointLight(0xffa040, 0, 1.2, 2); g.add(light);
  // burn: 1 = full fuse, 0 = gone
  g.userData.set = (burn, t, puff = 0) => {
    const n = Math.round(burn * segs.length); segs.forEach((s, i) => s.visible = i < n);
    const tip = n > 0 ? segs[n - 1].position : V3(0, .08, 0);
    const on = burn > 0.001; const fl = .8 + .4 * Math.sin(t * 61) * Math.sin(t * 23);
    spark.visible = on; spark.position.copy(tip); spark.scale.setScalar(.055 * fl);
    light.position.copy(tip); light.intensity = on ? .18 * fl : 0;
    bits.forEach((b, i) => { b.visible = on; const ph = (t * 3 + i * .37) % 1; const a = i * 2.39; b.position.set(tip.x + Math.cos(a) * ph * .07, tip.y + ph * .05 + Math.sin(a * 1.7) * ph * .03, tip.z + Math.sin(a) * ph * .07); b.material.opacity = 1 - ph; });
    smoke.forEach((s, i) => { const ph = clamp(puff * 1.4 - i * .07); s.visible = puff > 0; s.position.set(tip.x + Math.sin(i) * .03 * ph, tip.y + ph * .25, tip.z); s.scale.setScalar(.05 + ph * .14); s.material.opacity = (1 - ph) * .55 * (ph > 0 ? 1 : 0); });
  };
  return g;
}
// phone with a live canvas screen
const scrC = document.createElement('canvas'); scrC.width = 300; scrC.height = 600;
const scrTex = new THREE.CanvasTexture(scrC); scrTex.colorSpace = THREE.SRGBColorSpace;
const scrMat = new THREE.MeshBasicMaterial({ map: scrTex, toneMapped: false });
function rr(x, X, Y, w, h, r) { x.beginPath(); x.roundRect(X, Y, w, h, r); }
function drawScreen(mode, k, t, amp = 0) {
  const x = scrC.getContext('2d'); const w = 300, h = 600;
  const bg = x.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#13233a'); bg.addColorStop(1, '#0b1422'); x.fillStyle = bg; x.fillRect(0, 0, w, h);
  x.textAlign = 'center'; x.fillStyle = '#fff';
  if (mode === 'off') { x.fillStyle = '#05070a'; x.fillRect(0, 0, w, h); }
  if (mode === 'talk') {
    x.font = '700 26px Inter'; x.fillStyle = '#9fd3ff'; x.fillText('Booked Jobs Co.', w / 2, 120);
    for (let i = 0; i < 9; i++) { const v = amp * (.35 + .65 * Math.abs(Math.sin(t * 9 + i * 1.3))) * (1 - Math.abs(i - 4) / 6); const bh = 14 + v * 230; x.fillStyle = '#ff8a3d'; rr(x, 34 + i * 26, h / 2 - bh / 2, 16, bh, 8); x.fill(); }
    x.font = '600 20px Inter'; x.fillStyle = '#c9d6e6'; x.fillText('talking...', w / 2, 500);
  }
  if (mode === 'ring' || mode === 'lost') {
    const lost = mode === 'lost';
    x.font = '700 22px Inter'; x.fillStyle = lost ? '#ff8f8f' : '#9fd3ff'; x.fillText(lost ? 'Request closed' : 'New job request', w / 2, 90);
    x.fillStyle = lost ? '#3a1c22' : '#1e3a5c'; rr(x, 24, 130, w - 48, 200, 26); x.fill();
    x.fillStyle = '#fff'; x.font = '800 30px Inter'; x.fillText(lost ? 'Booked with' : 'Homeowner', w / 2, 200);
    x.font = '800 30px Inter'; x.fillStyle = lost ? '#ffb3b3' : '#ffd36b'; x.fillText(lost ? 'another company' : 'needs help today', w / 2, 250);
    if (!lost) { const p = .5 + .5 * Math.sin(t * 18); x.fillStyle = `rgba(46,204,113,${.6 + p * .4})`; x.beginPath(); x.arc(w / 2, 450, 48 + p * 6, 0, 7); x.fill(); x.fillStyle = '#fff'; x.font = '800 22px Inter'; x.fillText('ANSWER', w / 2, 458); }
    else { x.font = '700 64px Inter'; x.fillStyle = '#ff6b6b'; x.fillText('✕', w / 2, 470); }
  }
  if (mode === 'text' || mode === 'booked') {
    x.font = '700 20px Inter'; x.fillStyle = '#9fd3ff'; x.fillText('Sarah, homeowner', w / 2, 60);
    const a = ease(k * 3);
    x.globalAlpha = a; x.fillStyle = '#2f8f6a'; rr(x, 50, 100, 226, 150, 22); x.fill();
    x.fillStyle = '#fff'; x.textAlign = 'left'; x.font = '600 19px Inter';
    ['Hi Sarah! Got your', 'request. We can come', 'Tuesday at 9am.', 'Want it?'].forEach((l, i) => x.fillText(l, 66, 135 + i * 27));
    x.globalAlpha = 1; x.textAlign = 'right'; x.font = '600 15px Inter'; x.fillStyle = '#8fb3a6'; if (a > .5) x.fillText('sent in 0:52', 272, 272);
    const b = ease(k * 3 - 1); x.globalAlpha = b; x.textAlign = 'left'; x.fillStyle = '#334155'; rr(x, 24, 300, 170, 60, 22); x.fill(); x.fillStyle = '#fff'; x.font = '600 20px Inter'; x.fillText('Yes please!', 44, 338); x.globalAlpha = 1;
    const c = ease(k * 3 - 2); if (c > 0) { x.globalAlpha = c; x.fillStyle = '#ff8a3d'; rr(x, 30, 400 + (1 - c) * 30, w - 60, 120, 24); x.fill(); x.fillStyle = '#fff'; x.textAlign = 'center'; x.font = '800 30px Inter'; x.fillText('BOOKED', w / 2, 455 + (1 - c) * 30); x.font = '600 19px Inter'; x.fillText('Tue 9:00 AM', w / 2, 490 + (1 - c) * 30); x.globalAlpha = 1; }
  }
  scrTex.needsUpdate = true;
}
function makePhone(scale = 1) {
  const g = new THREE.Group();
  add(rbox(.078, .156, .011, .01), S(0x15181d, { roughness: .3, metalness: .5 }), g);
  const s = new THREE.Mesh(new THREE.PlaneGeometry(.069, .142), scrMat); s.position.z = .0062; g.add(s);
  const glow = new THREE.PointLight(0x7fb8ff, 0, 1.5, 2); glow.position.z = .08; g.add(glow); g.userData.glow = glow;
  g.scale.setScalar(scale); return g;
}

/* ---------- cast ---------- */
let owner = null;
const vehicle = makeVehicle('van', 'YOUR COMPANY', 0x2f8f6a, 'HOME SERVICES'); vehicle.position.set(-.5, 0, -.6); scene.add(vehicle);
vehicle.traverse(o => { if (o.isMesh) { o.castShadow = true; } });

/* ---------- camera helpers ---------- */
function cam(p, look, fov = 35) { camera.position.copy(p); camera.fov = fov; camera.updateProjectionMatrix(); camera.lookAt(look); }
const wp = (o, off = V3(0, 0, 0)) => { o.updateMatrixWorld(true); return o.localToWorld(off.clone()); };

/* ---------- overlay ---------- */
const out = document.createElement('canvas'); out.width = W; out.height = H; const ox = out.getContext('2d');
document.body.appendChild(out);
let subs = [], timerFn = null, cardAt = 99, hookText = null, hudFn = null, postFx = null;
function wrap(text, maxW) { const words = text.split(' '); const lines = []; let l = ''; words.forEach(w => { const t = l ? l + ' ' + w : w; if (ox.measureText(t).width > maxW && l) { lines.push(l); l = w; } else l = t; }); if (l) lines.push(l); return lines; }
function overlay(t) {
  ox.drawImage(gl, 0, 0);
  // subtitles
  const s = subs.find(s => t >= s[0] && t < s[1]);
  if (s && t < cardAt) {
    ox.font = '800 38px Inter'; const lines = wrap(s[2], 980); ox.textAlign = 'center'; ox.lineJoin = 'round';
    lines.forEach((l, i) => { const y = H - 70 - (lines.length - 1 - i) * 48; ox.lineWidth = 9; ox.strokeStyle = 'rgba(0,0,0,.75)'; ox.strokeText(l, W / 2, y); ox.fillStyle = '#fff'; ox.fillText(l, W / 2, y); });
  }
  if (hookText) { const h = hookText(t); if (h) { ox.globalAlpha = h.a; ox.font = '900 46px Inter'; ox.textAlign = 'center'; ox.lineWidth = 10; ox.strokeStyle = 'rgba(0,0,0,.7)'; const hx = timerFn ? (W - 320) / 2 : W / 2; ox.font = timerFn ? '900 40px Inter' : ox.font; ox.strokeText(h.s, hx, 92); ox.fillStyle = h.c || '#ffd36b'; ox.fillText(h.s, hx, 92); ox.globalAlpha = 1; } }
  if (timerFn) { const v = timerFn(t); if (v != null) {
    const sec = Math.max(0, Math.ceil(v)); const red = sec <= 10; const str = '0:' + String(sec).padStart(2, '0');
    const pulse = red ? 1 + .06 * Math.sin(t * 20) : 1; ox.save(); ox.translate(W - 170, 110); ox.scale(pulse, pulse);
    ox.fillStyle = red ? 'rgba(200,30,30,.92)' : 'rgba(10,15,25,.82)'; rr(ox, -120, -62, 240, 124, 30); ox.fill();
    ox.fillStyle = '#fff'; ox.textAlign = 'center'; ox.font = '900 70px Inter'; ox.fillText(str, 0, 22);
    ox.font = '700 15px Inter'; ox.fillStyle = 'rgba(255,255,255,.75)'; ox.fillText('TO ANSWER', 0, 48); ox.restore(); } }
  if (hudFn && t < cardAt) hudFn(t);
  if (t >= cardAt) {
    const k = ease((t - cardAt) / .5);
    const g = ox.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#0f2a22'); g.addColorStop(1, '#081510');
    ox.globalAlpha = k; ox.fillStyle = g; ox.fillRect(0, 0, W, H);
    ox.textAlign = 'center'; ox.fillStyle = '#9fe3c4'; ox.font = '700 30px Inter'; ox.fillText('Booked Jobs Co.', W / 2, 200);
    ox.fillStyle = '#fff'; ox.font = '900 78px Inter'; ox.fillText('See your next 30 days', W / 2, 340);
    ox.font = '600 32px Inter'; ox.fillStyle = '#d6e6df'; ox.fillText('Tap the button below to start the demo', W / 2, 410);
    const by = 500 + Math.sin((t - cardAt) * 6) * 14; ox.fillStyle = '#ff8a3d';
    ox.beginPath(); ox.moveTo(W / 2 - 46, by); ox.lineTo(W / 2 + 46, by); ox.lineTo(W / 2, by + 56); ox.closePath(); ox.fill();
    ox.fillRect(W / 2 - 14, by - 60, 28, 62);
    ox.font = '700 32px Inter'; ox.fillStyle = '#ffb766'; ox.fillText('Only one company per area. Claim yours first.', W / 2, 652); ox.globalAlpha = 1;
  }
}

/* ---------- scripts ---------- */
let T = 0; const extras = []; const events = []; const at = (time, fn) => events.push({ time, fn, done: false });
let update = () => {};
const headC = p => wp(p.j.head, V3(0, .5, 0)); // centre of the (big) head
async function setupA() {
  const kid = new Person({ model: 'kid', height: 1.3, recolor: [[190, 260, 22, 1, 1.05]] });
  scene.add(kid.root);
  const fc = makeFirecracker(); fc.scale.setScalar(1.6); scene.add(fc);
  const phone = makePhone(1.4); phone.visible = false; scene.add(phone);
  owner.root.position.set(2.6, 0, 1.6); owner.yaw = owner.yawTarget = Math.PI / 2; owner.set('lookDown');
  kid.root.position.set(-1.2, 0, 1.6); kid.yaw = kid.yawTarget = Math.PI / 2; kid.set('idle'); kid.setMood('happy');
  owner.phoneScreen.material = scrMat;
  let inPocket = false;
  const POCKET = V3(.13, .46, -.27); // owner's back pocket, in his root space
  const pocketW = () => wp(owner.root, POCKET);
  subs = [[11.0, 13.6, "Relax. I'm not a firework. I'm your phone."], [13.9, 18.0, 'Referrals are great. But they only reach people who already know you.'],
    [18.3, 20.4, 'What if new homeowners could find you too?'], [20.6, 25.3, 'We put your business in front of them, for extra jobs on top of your referrals.'],
    [25.5, 29.0, 'I built a 3 minute demo that shows your business, 30 days from now.'], [29.0, 32.2, 'Tap the button below, and watch it.']];
  cardAt = 32.3;
  hookText = t => t > 5.4 && t < 9.4 ? { s: '...', a: 0 } : null;
  at(2.2, () => { kid.walkTo([V3(1.75, 0, 1.6)], .8); });
  at(4.15, () => { kid.set('point'); });
  at(4.7, () => { inPocket = true; kid.set('idle'); });
  at(5.0, () => { kid.walkTo([V3(1.2, 0, -.6), V3(-9, 0, -2.5)], 2.6); });
  at(8.8, () => owner.setMood('worried'));
  at(10.05, () => { fc.visible = false; phone.visible = true; });
  at(10.75, () => { phone.visible = false; owner.set('phone'); owner.setMood('worried'); });
  at(13.8, () => owner.setMood('smile'));
  at(18.6, () => { owner.setMood('happy'); owner.set('phoneHappy'); });
  update = (t) => {
    const burn = t < 9.3 ? 1 - clamp((t - .2) / 9.1) * .995 : 0; const puff = t > 9.3 ? clamp((t - 9.3) / 1.2) : 0;
    // firecracker: in the kid's hand, then sticking out of the back pocket
    if (inPocket) { fc.position.copy(pocketW()).add(V3(0, .05, 0)); fc.rotation.set(0, 0, .1); }
    else { kid.root.updateMatrixWorld(true); fc.position.copy(wp(kid.j.rHand)).add(V3(0, .05, 0)); fc.rotation.set(0, 0, 0); }
    phone.position.copy(pocketW()).add(V3(0, .06, 0)); phone.rotation.set(0, -Math.PI / 2, 0);
    fc.userData.set(t < 9.3 ? Math.max(burn, .01) : 0, t, puff);
    const amp = t < 18.6 ? (t > 11 && t < 13.6 ? 1 : t > 13.9 && t < 18.4 ? 1 : .2) : 0;
    if (t < 10.05) drawScreen('off', 0, t); else if (t < 18.6) drawScreen('talk', 0, t, amp * (.6 + .4 * Math.abs(Math.sin(t * 7)))); else drawScreen('text', (t - 18.8) / 5.5, t);
    phone.userData.glow.intensity = t > 10.05 ? .12 : 0;
    // ---- shots ----
    const pk = pocketW().add(V3(0, .08, 0)), oh = headC(owner);
    const pocketShot = (k, d = 1) => cam(pk.clone().add(V3((-.55 + k * .1) * d, .22 * d, (.85 - k * .1) * d)), pk, 30);
    const scrShot = (dist, fov) => { const sp = wp(owner.phoneScreen); const q = new THREE.Quaternion(); owner.phoneScreen.getWorldQuaternion(q); const dir = V3(0, 0, 1).applyQuaternion(q); cam(sp.clone().addScaledVector(dir, dist).add(V3(0, .02, 0)), sp, fov); };
    const faceShot = (fov = 32) => cam(oh.clone().add(V3(2.3, -.3, .9)), oh.clone().add(V3(0, -.12, 0)), fov);
    owner.model.visible = !((t >= 11 && t < 13.7) || (t >= 18.6 && t < 24.7)); // screen inserts: keep the big head out of the lens
    if (t < 2.2) { // macro on the fuse, kid grinning behind
      const f = fc.position.clone(), kh = headC(kid); const k = t / 2.2; const mid = f.clone().lerp(kh, .35); cam(f.clone().add(V3(.75 - k * .15, .1, .95 - k * .1)), mid, 36);
    } else if (t < 5.2) { // wide sneak
      const k = (t - 2.2) / 3; cam(V3(lerp(4.9, 4.4, k), 1.3, lerp(7.4, 6.8, k)), V3(lerp(.8, 1.9, k), .85, 1.4), 34);
    } else if (t < 6.6) { pocketShot((t - 5.2) / 1.4);
    } else if (t < 7.6) { faceShot();
    } else if (t < 8.8) { pocketShot((t - 7.6) / 1.2, .75);
    } else if (t < 9.3) { faceShot(28);
    } else if (t < 10.75) { pocketShot(.5, .7);
    } else if (t < 11.0) { cam(V3(5.4, 1.6, 4.6), V3(2.6, 1.1, 1.6), 32);
    } else if (t < 13.7) { const k = ease((t - 11) / 2.7); scrShot(lerp(.22, .18, k), 56);
    } else if (t < 18.6) { const k = (t - 13.7) / 4.9; const a = lerp(.25, -.35, k); const c = V3(2.6, 1.05, 1.6); cam(c.clone().add(V3(Math.cos(a) * 4.4, .5, Math.sin(a) * 4.4 + 1.4)), c.clone().add(V3(-.3, 0, -.6)), 34);
    } else if (t < 24.7) { const k = ease((t - 18.6) / 6); scrShot(lerp(.25, .21, k), 56);
    } else { const k = ease((t - 24.7) / 7); cam(V3(lerp(5.4, 9.5, k), lerp(1.4, 2.8, k), lerp(3.6, 9, k)), V3(lerp(2.5, 1.2, k), lerp(1.1, 1.0, k), lerp(1.4, -.2, k)), 34);
    }
  };
  extras.push(kid);
}
async function setupB() {
  const rival = makeVehicle('van', 'RIVAL CO.', 0xc0392b, 'HOME SERVICES'); rival.position.set(-40, 0, -7.7); scene.add(rival);
  // little work table with the phone
  const table = new THREE.Group(); table.position.set(-3.4, 0, 2.6); scene.add(table);
  const wood = S(0xa8794f, { roughness: .7 });
  add(new THREE.BoxGeometry(1.5, .07, .8), wood, table, 0, .82, 0);
  [[-.65, -.33], [.65, -.33], [-.65, .33], [.65, .33]].forEach(p => add(new THREE.BoxGeometry(.07, .82, .07), wood, table, p[0], .41, p[1]));
  add(new THREE.BoxGeometry(.32, .2, .2), S(0xd04a2a), table, .45, .96, -.1); // toolbox
  const phone = makePhone(1.6); phone.rotation.x = -Math.PI / 2; phone.position.set(-.15, .87, .05); table.add(phone);
  // septic lid + hose
  add(new THREE.CylinderGeometry(.45, .45, .06, 28), S(0x2e7d4f, { roughness: .6 }), scene, 6.6, .03, 1.3);
  owner.root.position.set(5.6, 0, 1.3); owner.yaw = owner.yawTarget = Math.PI / 2; owner.set('hose');
  const curve = new THREE.CatmullRomCurve3([V3(-3.1, 1.2, .4), V3(-1, .05, 1.6), V3(3, .05, 2.2), V3(5.3, .3, 1.5), V3(5.95, .95, 1.3), V3(6.4, .25, 1.3)]);
  const hoseM = S(0x1f1f1f, { roughness: .7 }); const hose1 = add(new THREE.TubeGeometry(curve, 80, .04, 8), hoseM, scene);
  const curve2 = new THREE.CatmullRomCurve3([V3(-3.1, 1.2, .4), V3(-1, .05, 1.6), V3(3, .05, 2.2), V3(5.0, .05, 1.9), V3(6.0, .05, 2.3), V3(6.6, .05, 1.8)]);
  const hose2 = add(new THREE.TubeGeometry(curve2, 80, .04, 8), hoseM, scene); hose2.visible = false;
  at(7.9, () => { hose1.visible = false; hose2.visible = true; });
  subs = [[9.0, 14.8, 'Every day, homeowners near you need help. And that job just went to whoever answered first.'],
    [15.1, 18.0, 'What if every one of them got a text from you in under 60 seconds,'], [18.0, 21.0, 'and landed right on your calendar?'],
    [21.3, 24.8, 'I built a 3 minute demo that shows your business, 30 days from now.'], [24.8, 28.1, 'Tap the button below, and watch it.']];
  cardAt = 28.3;
  timerFn = t => t < .4 || t > 9.4 ? null : 60 - (t - .4) / 7.6 * 60;
  hookText = t => t > 1.0 && t < 4.0 ? { s: 'A homeowner needs help. Right now.', a: ease((t - 1) * 3) } : t > 8.0 && t < 9.4 ? { s: 'Too late.', a: 1, c: '#ff7b7b' } : null;
  owner.phoneScreen.material = scrMat;
  at(7.9, () => { owner.set('idle'); owner.face(0, -8); owner.setMood('worried'); });
  at(13.5, () => { owner.set('phone'); owner.face(-2, 6); });
  at(15.0, () => { owner.setMood('happy'); owner.set('phoneHappy'); });
  update = (t) => {
    const ringing = t < 8.0;
    if (t < 8.0) drawScreen('ring', 0, t); else if (t < 15.0) drawScreen('lost', 0, t); else drawScreen('text', (t - 15.2) / 5.5, t);
    phone.userData.glow.intensity = t < 13.5 ? .3 : 0; phone.visible = t < 13.5;
    const buzz = ringing && (t % 1.2) < .7; phone.position.x = -.15 + (buzz ? Math.sin(t * 90) * .006 : 0); phone.rotation.z = buzz ? Math.sin(t * 70) * .05 : 0;
    // rival van passes on the street 7.9..10.5
    const rk = clamp((t - 7.7) / 3.0); rival.position.x = lerp(-9, 24, rk * rk * .4 + rk * .6);
    const ph = wp(phone);
    if (t < 1.9) { const k = t / 1.9; cam(ph.clone().add(V3(.15 - k * .05, .42 - k * .06, .34)), ph.clone().add(V3(0, 0, -.02)), 32);
    } else if (t < 4.6) { const k = (t - 1.9) / 2.7; cam(V3(lerp(-5.4, -5.0, k), 1.25, lerp(4.4, 4.2, k)), V3(lerp(1.5, 2.6, k), .95, .6), 36);
    } else if (t < 6.0) { const h = wp(owner.j.head, V3(0, .1, 0)); cam(h.clone().add(V3(1.05, -.55, .55)), h.clone().add(V3(0, -.1, 0)), 32);
    } else if (t < 7.8) { const k = (t - 6) / 1.8; cam(ph.clone().add(V3(.1, .36 - k * .08, .26)), ph, 32);
    } else if (t < 10.6) { cam(V3(9.5, 1.9, 7.5), V3(1.5, 1.0, -6), 38);
    } else if (t < 13.5) { const h = wp(owner.j.head, V3(0, .1, 0)); const k = (t - 10.6) / 2.9; cam(h.clone().add(V3(-.75 - k * .15, -.12, -1.15 - k * .2)), h, 32);
    } else if (t < 15.0) { cam(V3(9, 1.6, 4.6), V3(5.6, 1.2, 1.3), 32);
    } else if (t < 21.1) { const p2 = wp(owner.phone); const hd = wp(owner.j.head, V3(0, .12, 0)); const k = (t - 15) / 6; const f = p2.clone().sub(hd).setY(0).normalize(); const r = V3(-f.z, 0, f.x); cam(hd.clone().addScaledVector(f, -.42).addScaledVector(r, .6).add(V3(0, .2, 0)), p2, 26 - k * 3);
    } else { const k = ease((t - 21.1) / 7); cam(V3(lerp(9.5, 11, k), lerp(1.6, 3, k), lerp(5, 10, k)), V3(lerp(5.4, 2, k), 1.2, lerp(1.3, -.5, k)), 34); }
  };
}

/* ---------- C: empty calendar (not enough leads) ---------- */
function drawCal(n, t, banner = null, bk = 0, sad = 0) {
  if (scrC.width !== 600) { scrC.width = 600; scrC.height = 1200; }
  const x = scrC.getContext('2d'); x.setTransform(2, 0, 0, 2, 0, 0); const w = 300, h = 600;
  const bg = x.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#162236'); bg.addColorStop(1, '#0d1522'); x.fillStyle = bg; x.fillRect(0, 0, w, h);
  x.fillStyle = '#ffffff'; x.textAlign = 'left'; x.font = '800 30px Inter'; x.fillText('Today', 22, 62);
  x.font = '600 17px Inter'; x.fillStyle = '#93a3b8'; x.fillText('Monday', 22, 88);
  const nn = Math.floor(n + .001);
  x.textAlign = 'right'; x.font = '800 17px Inter'; x.fillStyle = nn ? '#1f8a5b' : '#d0453a';
  rr(x, 176, 44, 104, 34, 17); x.fillStyle = nn ? '#1d5c43' : '#5c2025'; x.fill();
  x.fillStyle = nn ? '#8ff0c0' : '#ff8f86'; x.textAlign = 'center'; x.fillText(nn + (nn === 1 ? ' job' : ' jobs'), 228, 67);
  const hrs = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];
  hrs.forEach((l, i) => { const y = 130 + i * 46; x.strokeStyle = '#26324a'; x.lineWidth = 2; x.beginPath(); x.moveTo(70, y); x.lineTo(286, y); x.stroke(); x.fillStyle = '#7d8ca3'; x.font = '600 13px Inter'; x.textAlign = 'right'; x.fillText(l, 62, y + 5); });
  const jobs = [[1, 'Sarah M.', 'Repair, 2 mi'], [3.5, 'Mike T.', 'Install, 4 mi'], [6, 'Dana R.', 'Service, 3 mi'], [8, 'Luis P.', 'Estimate, 5 mi']];
  jobs.forEach((j, i) => { const a = clamp(n - i); if (a <= 0) return; const y = 130 + j[0] * 46 + 4; const sc = .7 + .3 * ease(a);
    x.save(); x.globalAlpha = ease(a); x.translate(178, y + 38); x.scale(sc, sc); x.translate(-178, -(y + 38));
    x.fillStyle = ['#ff8a3d', '#2f8f6a', '#3a7bd5', '#8e5bd6'][i]; rr(x, 74, y, 210, 76, 12); x.fill();
    x.fillStyle = '#fff'; x.textAlign = 'left'; x.font = '800 19px Inter'; x.fillText(j[1], 88, y + 32); x.font = '600 15px Inter'; x.globalAlpha *= .9; x.fillText(j[2], 88, y + 56); x.restore(); });
  if (nn === 0 && n < .05) { x.fillStyle = '#8a97ab'; x.textAlign = 'center'; x.font = '800 24px Inter'; x.fillText('No jobs booked', w / 2 + 30, 330); x.font = '600 15px Inter'; x.fillText('Nothing on the calendar', w / 2 + 30, 356); }
  if (banner && bk > 0) { const y = -110 + ease(bk) * 120; x.save(); x.shadowColor = 'rgba(0,0,0,.5)'; x.shadowBlur = 18; x.fillStyle = '#f4f6fa'; rr(x, 12, y, w - 24, 92, 18); x.fill(); x.restore();
    x.fillStyle = '#ff8a3d'; rr(x, 26, y + 18, 40, 40, 10); x.fill(); x.fillStyle = '#fff'; x.font = '900 24px Inter'; x.textAlign = 'center'; x.fillText('!', 46, y + 47);
    x.textAlign = 'left'; x.fillStyle = '#1b2a41'; x.font = '800 18px Inter'; x.fillText(banner[0], 78, y + 38); x.fillStyle = '#5b6678'; x.font = '600 15px Inter'; x.fillText(banner[1], 78, y + 64); }
  scrTex.needsUpdate = true;
}
function makeTumbleweed() {
  const g = new THREE.Group(); const m = S(0x9a7b4f, { roughness: 1 });
  for (let i = 0; i < 9; i++) { const r = new THREE.Mesh(new THREE.TorusGeometry(.26 + Math.random() * .08, .012, 5, 26), m); r.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3); r.castShadow = true; g.add(r); }
  return g;
}
async function setupC() {
  // warmer late-afternoon light, fixes face speckle
  sun.color.set(0xffd2a0); sun.intensity = 2.5; sun.position.set(20, 11, 8);
  sun.shadow.bias = -.0012; sun.shadow.normalBias = .08; Object.assign(sun.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16 }); sun.shadow.camera.updateProjectionMatrix();
  hemi.color.set(0xffe6c8); hemi.groundColor.set(0x7a8a50); hemi.intensity = 1.05; fill.color.set(0xffd9b0); fill.intensity = .7;
  renderer.toneMappingExposure = 1.1; const ff = new THREE.DirectionalLight(0xffe6cc, .9); ff.position.set(2, 4, -12); scene.add(ff); scene.fog.color.set(0xf0dcc4);
  sky.material.fragmentShader = CLOUDS + 'void main(){float y=d.y;vec3 top=vec3(.36,.56,.86),hor=vec3(1.,.86,.68),bot=vec3(.85,.82,.7);vec3 c=y>0.?mix(hor,top,pow(smoothstep(0.,.55,y),.75)):bot;vec3 s=normalize(vec3(.8,.4,.35));c+=vec3(1.,.75,.45)*pow(max(dot(d,s),0.),24.)*.7;c=clouds(c,vec3(1.,.88,.76),hor);gl_FragColor=vec4(c,1.);}';
  sky.material.needsUpdate = true;

  const OX = 4.2, OZ = -.2;
  const cooler = new THREE.Group(); cooler.position.set(OX, 0, OZ + .12); scene.add(cooler);
  add(rbox(.62, .4, .42, .05), S(0xd9452e, { roughness: .5 }), cooler, 0, .2, 0); add(rbox(.64, .06, .44, .03), S(0xf2f2f2, { roughness: .5 }), cooler, 0, .42, 0);
  owner.root.position.set(OX, 0, OZ); owner.yaw = owner.yawTarget = Math.PI; owner.set('sitPhone'); owner.setMood('neutral');
  owner.phoneScreen.material = scrMat;
  let sit = 1, slump = 1, seated = true;
  // seated on the cooler: sitting clip while sit > 0, slump bends the chest; stands up at 16.2s
  postFx = (t) => { owner.slump = slump * (sit > 0 ? 1 : 0); if (sit > 0 && !seated) { seated = true; } owner.root.position.y = sit > 0 ? SIT_Y : 0; };

  const rivals = [['RIVAL CO.', 0xc0392b], ['OTHER GUYS', 0x2c6fbb], ['BIG BRAND', 0x7b4bc4]].map(([n, c]) => { const v = makeVehicle('van', n, c, 'HOME SERVICES'); v.position.set(-60, 0, -7.7); v.traverse(o => { if (o.isMesh) o.castShadow = true; }); scene.add(v); return v; });
  const lady = new Person({ model: 'sarah', height: 1.66, recolor: [[70, 170, 335, .9, 1.05]] });
  lady.root.position.set(12.2, 0, -12.6); lady.yaw = lady.yawTarget = 0; lady.set('idle'); lady.setMood('smile'); scene.add(lady.root); extras.push(lady);
  const tw = makeTumbleweed(); scene.add(tw);

  subs = [[.5, 2.4, 'Slow week? Phone not ringing?'], [3.0, 5.4, 'Meanwhile, the other guys are booked solid.'],
    [5.7, 9.9, 'Referrals are great. But they only reach people who already know you.'], [11.1, 14.3, "What if homeowners who've never heard of you could find you too?"],
    [14.5, 19.2, 'We put your business in front of them, for extra jobs on top of your referrals.'],
    [19.4, 22.8, 'I built a 3 minute demo that shows your business, 30 days from now.'], [22.8, 26.1, 'Tap the button below, and watch it.']];
  cardAt = 26.4;
  hookText = null;
  const rivalCount = t => (t > 5.3) + (t > 6.3) + (t > 9.0);
  const youCount = t => (t > 11.5) + (t > 13.9) + (t > 14.9);
  hudFn = t => { if (t < 4.6 || t > 19.3) return; const a = ease((t - 4.6) * 3) * (1 - ease((t - 19.0) * 3));
    const r = rivalCount(t), y = youCount(t); ox.save(); ox.globalAlpha = a; ox.translate(W - 300, 34);
    ox.fillStyle = 'rgba(12,18,28,.82)'; rr(ox, 0, 0, 266, 112, 22); ox.fill();
    ox.textAlign = 'left'; ox.font = '800 15px Inter'; ox.fillStyle = 'rgba(255,255,255,.7)'; ox.fillText('JOBS BOOKED TODAY', 22, 32);
    ox.font = '700 22px Inter'; ox.fillStyle = '#ff9a8a'; ox.fillText('The other guys', 22, 66); ox.fillStyle = '#9fe3c4'; ox.fillText('You', 22, 96);
    const pop = (tt, v) => { const k = clamp(1 - (t - tt) * 4); return 1 + .35 * k; };
    ox.textAlign = 'right'; ox.font = '900 28px Inter'; ox.fillStyle = '#fff';
    const rt = [5.3, 6.3, 9.0][r - 1] || -9, yt = [11.5, 13.9, 14.9][y - 1] || -9;
    ox.save(); ox.translate(240, 66); ox.scale(pop(rt), pop(rt)); ox.fillText(String(r), 0, 0); ox.restore();
    ox.save(); ox.translate(240, 97); ox.scale(pop(yt), pop(yt)); ox.fillStyle = y ? '#9fe3c4' : '#ff7b7b'; ox.fillText(String(y), 0, 0); ox.restore();
    ox.restore(); };

  at(3.0, () => owner.setMood('worried'));
  at(6.4, () => { owner.set('sit'); slump = .35; });
  at(8.6, () => { lady.set('wave'); });
  at(10.2, () => { lady.set('idle'); owner.set('sitPhone'); slump = 1; });
  at(11.4, () => owner.setMood('neutral'));
  at(13.2, () => { owner.setMood('smile'); slump = 0; });
  at(15.0, () => { owner.setMood('happy'); });
  at(15.6, () => { owner.set('sit'); });
  at(16.2, () => { owner.set('idle'); });
    at(16.9, () => { owner.walkTo([V3(2.9, 0, 1.2), V3(1.4, 0, 1.25)], 1.05); });
  at(19.0, () => { owner.set('phoneHappy'); owner.face(5, 4); });

  update = (t) => {
    // seat -> stand
    sit = t < 16.2 ? 1 : 1 - clamp((t - 16.2) / .6); 
    // phone screen
    const n = t < 11.5 ? 0 : t < 13.9 ? clamp((t - 11.5) / .5) : t < 14.9 ? 1 + clamp((t - 13.9) / .5) : t < 15.6 ? 2 + clamp((t - 14.9) / .5) : 3 + clamp((t - 15.6) / .5);
    let ban = null, bk = 0;
    if (t > 11.1 && t < 13.6) { ban = ['New request', 'Sarah, 2 mi away']; bk = clamp((t - 11.1) / .35) * (1 - clamp((t - 13.2) / .4)); }
    else if (t > 13.6 && t < 16.4) { ban = ['3 new leads today', 'Tap to see who wants a visit']; bk = clamp((t - 13.6) / .35) * (1 - clamp((t - 16.0) / .4)); }
    drawCal(n, t, ban, bk);
    // phone buzz on notifications
    const bz = (t > 11.1 && t < 11.6) || (t > 13.6 && t < 14.1); owner.phone.rotation.z = bz ? Math.sin(t * 80) * .06 : 0;
    // rival traffic: near lane, then the third one pulls up across the street
    const drive = (v, t0, dur, x0, x1, z) => { const k = clamp((t - t0) / dur); v.position.set(lerp(x0, x1, k), 0, z); v.visible = k > 0 && k < 1; };
    drive(rivals[0], 4.2, 2.6, -14, 26, -7.7); drive(rivals[1], 5.2, 2.6, -14, 26, -7.7);
    { const k = clamp((t - 7.4) / 1.6); const e = 1 - (1 - k) * (1 - k); rivals[2].position.set(lerp(-6, 10.8, e), 0, -10.4); rivals[2].visible = t > 7.4; }
    if (t > 20) drive(rivals[0], 20.5, 4.2, -14, 30, -7.7);
    // tumbleweed
    { const k = (t - 2.7) / 2.2; tw.visible = k > 0 && k < 1; tw.position.set(lerp(10.5, 1.5, k), .3 + Math.abs(Math.sin(k * 9)) * .25, -2.0); tw.rotation.z = k * 9; tw.rotation.x = k * 2; }
    // ---- shots ----
    const ph = wp(owner.phone), hd = headC(owner);
    const ots = (fov, back = .42, side = .55, up = .2) => { const f = ph.clone().sub(hd).setY(0).normalize(); const r = V3(-f.z, 0, f.x); cam(hd.clone().addScaledVector(f, -back).addScaledVector(r, side).add(V3(0, up, 0)), ph, fov); };
    const face = (dist = 1.0, side = .25, fov = 30) => { dist *= 2.2; side *= 2; const hp = headC(owner).add(V3(0, -.08, 0)); const fwd = V3(Math.sin(owner.yaw), 0, Math.cos(owner.yaw)); const r = V3(-fwd.z, 0, fwd.x); cam(hp.clone().addScaledVector(fwd, dist).addScaledVector(r, side).add(V3(0, -.12, 0)), hp.clone().add(V3(0, -.1, 0)), fov); };
    const scr = (dist, fov, ox2 = 0) => { const sp = wp(owner.phoneScreen); const q = new THREE.Quaternion(); owner.phoneScreen.getWorldQuaternion(q); const dir = V3(0, 0, 1).applyQuaternion(q); const up = V3(0, 1, 0).applyQuaternion(q).lerp(V3(0, 1, 0), .3).normalize(); const r = dir.clone().cross(up).normalize();
      camera.up.copy(up); cam(sp.clone().addScaledVector(dir, dist).addScaledVector(r, ox2), sp, fov); camera.up.set(0, 1, 0); };
    owner.model.visible = !(t < 2.8 || (t >= 11.1 && t < 15.6)); // screen inserts
    if (t < 2.8) { const k = ease(t / 2.8); scr(lerp(.3, .25, k), 52, 0);
    } else if (t < 4.6) { const k = ease((t - 2.8) / 1.8); cam(V3(lerp(8.6, 8.1, k), lerp(1.05, 1.15, k), lerp(-3.4, -3.1, k)), V3(lerp(4.6, 4.2, k), .8, -.3), 33);
    } else if (t < 6.5) { const k = ease((t - 4.6) / 1.9); cam(V3(lerp(1.6, 3.0, k), .55, -4.9), V3(lerp(5, 9, k), 1.25, -8.3), 40);
    } else if (t < 7.9) { const k = ease((t - 6.5) / 1.4); face(lerp(1.15, .95, k), .3, 30);
    } else if (t < 10.2) { const k = ease((t - 7.9) / 2.3); cam(V3(lerp(5.7, 5.9, k), 1.85, lerp(1.5, 1.2, k)), V3(lerp(9.5, 12.2, k), 1.0, lerp(-10.5, -12.6, k)), lerp(30, 24, k));
    } else if (t < 11.1) { const k = ease((t - 10.2) / .9); cam(V3(lerp(7.4, 7.1, k), 1.3, lerp(1.9, 1.6, k)), V3(4.2, .95, -.3), 32);
    } else if (t < 15.6) { const k = ease((t - 11.1) / 4.5); scr(lerp(.28, .25, k), 52, 0);
    } else if (t < 16.4) { face(1.05, .2, 30);
    } else if (t < 19.4) { const k = ease((t - 16.4) / 3); const op = owner.root.position; cam(V3(lerp(7.4, 6.2, k), lerp(1.35, 1.5, k), lerp(3.4, 4.4, k)), V3(op.x - .3, 1.05, op.z - .3), 34);
    } else { const k = ease((t - 19.4) / 7); cam(V3(lerp(5.8, 10.5, k), lerp(1.5, 3.4, k), lerp(4.6, 9.5, k)), V3(lerp(1.8, 2.0, k), lerp(1.2, 1.3, k), lerp(.6, -1.5, k)), 34); }
  };
}

let ready = false;
const SIT_Y = .0;
window.init = async () => {
  await loadPeople(['owner', 'kid', 'sarah']);
  owner = new Person({ model: 'owner', height: 1.82, cap: true, capColor: 0x2f8f6a });
  scene.add(owner.root);
  await stage();
  if (V === 'A') await setupA(); else if (V === 'C') await setupC(); else await setupB();
  [owner, ...extras].forEach(p => p.j.head.traverse(o => { if (o.isMesh) o.receiveShadow = false; }));
  owner.update(DT); ready = true; return true;
};
window.frame = (t) => {
  while (T < t - 1e-6) {
    T += DT; events.forEach(e => { if (!e.done && T >= e.time) { e.done = true; e.fn(); } });
    update(T); owner.update(DT); extras.forEach(p => p.update(DT)); postFx && postFx(T);
  }
  update(T); scene.updateMatrixWorld(true); composer.render(); overlay(T);
  return out.toDataURL('image/jpeg', .9);
};
