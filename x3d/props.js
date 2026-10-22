// The "problem" at Sarah's house for each trade, and how it looks once fixed.
// Sarah's house: center (-20,0,21), back wall z=25, roof ridge y=6.5 over z=21, eaves y=3.6, chimney (-22.6, ~6, 22.4).
import * as THREE from 'three';
import { glowTex } from './world.js';
const S = (c, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: .8 }, o));
const V = (x, y, z) => new THREE.Vector3(x, y, z);
function add(geo, mat, parent, x = 0, y = 0, z = 0, shadow = true) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = shadow; m.receiveShadow = true; parent.add(m); return m; }
const disk = (r, mat, parent, x, y, z, sx = 1, sz = 1) => { const m = new THREE.Mesh(new THREE.CircleGeometry(r, 32), mat); m.rotation.x = -Math.PI / 2; m.position.set(x, y, z); m.scale.set(sx, sz, 1); parent.add(m); m.receiveShadow = true; return m; };
const water = () => S(0x5f87a8, { roughness: .06, metalness: .55, transparent: true, opacity: .9 });
const sprite = (color, s, parent, x, y, z, op = 1) => { const p = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(), color, transparent: true, depthWrite: false, opacity: op })); p.scale.set(s, s, 1); p.position.set(x, y, z); parent.add(p); return p; };
function particles(n, color, size, parent) { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3)); const p = new THREE.Points(g, new THREE.PointsMaterial({ color, size, transparent: true, opacity: .9, depthWrite: false })); parent.add(p); p.userData.v = Array.from({ length: n }, () => Math.random()); return p; }

// Each prop: spot (Sarah stands), look (what she looks at), front (start at the front door), work (where the pro works),
// ladder (lean point on the wall + climb height), ins (camera for the close-up "insert" shot), build(g) -> { fix(u), update(dt,t,u) }
export const PROPS = {
  soggy: { spot: [-16.7, 32.3], look: [-15.5, 0, 34.5], work: [-16.2, 31.5], ins: [-12.4, 2.2, 37.6],
    build(g, W) { W.soggy.forEach(m => m.visible = true); return { fix(u) { W.soggy.forEach(m => { m.material.opacity = 1 - u * .85; m.material.transparent = true; }); } }; } },
  roof: { spot: [-17.5, 30], look: [-17.6, 5, 23.3], work: [-15.9, 26], ladder: { x: -15.9, z: 25.15, top: 3.1 }, ins: [-13.5, 6.5, 30],
    build(g) { const patch = add(new THREE.BoxGeometry(2.4, .06, 1.7), S(0x2a2420), g, -17.6, 5.08, 23.3); patch.rotation.x = .567;
      const tarp = add(new THREE.BoxGeometry(2.5, .02, 1.8), S(0x5b4636, { roughness: .9 }), g, -17.6, 5.12, 23.3); tarp.rotation.x = .567; tarp.visible = false;
      const bits = []; for (let i = 0; i < 9; i++) { const b = add(new THREE.BoxGeometry(.5, .04, .3), S(0x4a3a30), g, -19 + Math.random() * 4, .05, 27 + Math.random() * 3.5); b.rotation.y = Math.random() * 3; bits.push(b); }
      const drip = particles(30, 0x9cc7ea, .12, g);
      return { fix(u) { tarp.visible = u > .5; patch.visible = u <= .5; bits.forEach((b, i) => b.visible = u < (i + 1) / 10); drip.visible = u < .3; },
        update(dt, t) { const p = drip.geometry.attributes.position; drip.userData.v.forEach((v, i) => { const y = 3.5 - ((t * 2 + v * 3) % 3.4); p.setXYZ(i, -18.6 + v * 2.2, y, 25.7); }); p.needsUpdate = true; } }; } },
  ac: { spot: [-22.4, 28.6], look: [-24.2, .5, 26.6], work: [-23.4, 27.7], ins: [-21, 2.2, 29.6],
    build(g) { const u0 = new THREE.Group(); u0.position.set(-24.2, 0, 26.6); g.add(u0);
      add(new THREE.BoxGeometry(1.1, .95, 1.1), S(0xb9bec3, { roughness: .5, metalness: .3 }), u0, 0, .5, 0); add(new THREE.BoxGeometry(1.2, .08, 1.2), S(0x5d6268), u0, 0, 1.0, 0);
      const fan = new THREE.Group(); fan.position.y = 1.05; u0.add(fan); for (let i = 0; i < 3; i++) { const b = add(new THREE.BoxGeometry(.9, .02, .16), S(0x2c3034), fan); b.rotation.y = i * 2.09; }
      add(new THREE.CylinderGeometry(.06, .06, 1.2, 8), S(0xb87333, { metalness: .7, roughness: .3 }), u0, -.6, .6, -.4).rotation.z = 1.2;
      const heat = sprite(0xff6a2a, 2.4, u0, 0, 1.6, 0, .6), cool = sprite(0x6fd0ff, 2.6, u0, 0, 1.5, 0, 0);
      let fu = 0; return { fix(u) { fu = u; heat.material.opacity = (1 - u) * .6; cool.material.opacity = u * .55; }, update(dt, t) { fan.rotation.y += dt * fu * 25; heat.scale.setScalar(2.2 + Math.sin(t * 6) * .3); } }; } },
  leak: { spot: [-20.3, 28.4], look: [-21.6, .7, 25.3], work: [-21.4, 26.1], ins: [-18.6, 1.6, 29],
    build(g) { const pipe = add(new THREE.CylinderGeometry(.07, .07, 1.6, 10), S(0x9aa1a8, { metalness: .6, roughness: .3 }), g, -21.6, .9, 25.12); pipe.rotation.z = Math.PI / 2;
      const pud = disk(1.4, water(), g, -21.3, .04, 26.6, 1.3, .8); const spray = particles(80, 0xbfe3ff, .09, g);
      let fu = 0; return { fix(u) { fu = u; pipe.material.color.setHex(u > .5 ? 0xb87333 : 0x9aa1a8); spray.visible = u < .5; pud.scale.set(1.3 * (1 - u * .9), .8 * (1 - u * .9), 1); },
        update(dt, t) { const p = spray.geometry.attributes.position; spray.userData.v.forEach((v, i) => { const k = (t * 1.3 + v) % 1; p.setXYZ(i, -21.4 + v * .2, .9 + k * .9 - k * k * 1.6, 25.2 + k * 1.8); }); p.needsUpdate = true; } }; } },
  flicker: { spot: [-18.2, 29.6], look: [-17, 2.2, 25], work: [-15.6, 25.9], ins: [-14.2, 2.4, 29.8],
    build(g) { const wins = [-17, -20, -23].map(x => add(new THREE.PlaneGeometry(1.25, 1.1), new THREE.MeshBasicMaterial({ color: 0xffc77a, transparent: true, opacity: .9 }), g, x, 2.15, 25.12, false));
      const box = add(new THREE.BoxGeometry(.5, .7, .14), S(0x7c8288, { metalness: .4 }), g, -15.6, 1.4, 25.1); const spark = sprite(0xfff1a0, 1, g, -15.6, 1.2, 25.3, 0);
      const newBox = add(new THREE.BoxGeometry(.6, .85, .16), S(0xdfe3e6, { metalness: .3 }), g, -15.6, 1.4, 25.12); newBox.visible = false;
      let fu = 0; return { fix(u) { fu = u; newBox.visible = u > .6; box.visible = !newBox.visible; },
        update(dt, t) { const f = fu > .6 ? 1 : (Math.sin(t * 23) * Math.sin(t * 7.3) > .1 ? 1 : .15); wins.forEach(w => w.material.opacity = f * .85); spark.material.opacity = fu > .6 ? 0 : (Math.random() < .12 ? 1 : 0); } }; } },
  garage: { front: true, spot: [-24.4, 12.6], look: [-27.3, 1.6, 18.2], work: [-27.3, 16.8], ins: [-23.4, 1.8, 12],
    build(g) { const door = add(new THREE.BoxGeometry(3.7, 1.25, .14), S(0xf4f4f0), g, -27.3, 2.6, 18.12); const gap = add(new THREE.BoxGeometry(3.6, 1.6, .05), S(0x15171a), g, -27.3, 1.25, 18.2, false);
      return { fix(u) { const k = Math.min(1, u * 1.4); door.rotation.z = (1 - k) * .14; door.scale.y = 1 + k * .9; door.position.y = 2.6 - k * 1.25; gap.visible = k < .95; } }; } },
  tree: { spot: [-14.8, 30.4], look: [-11.8, 6, 32], work: [-11.2, 31.2], ins: [-9, 3, 37.5],
    build(g) { const tr = new THREE.Group(); tr.position.set(-11, 0, 33); tr.rotation.z = .32; tr.rotation.y = .5; g.add(tr); const bark = S(0x6b5a4a, { roughness: 1 });
      add(new THREE.CylinderGeometry(.35, .55, 9, 9), bark, tr, 0, 4.5, 0); [[1.2, 7, .3, .9], [-1, 6, -.2, -.8], [.5, 8.4, .6, .4]].forEach(b => { const br = add(new THREE.CylinderGeometry(.08, .16, 3, 6), bark, tr, b[0], b[1], b[2]); br.rotation.z = b[3]; });
      const stump = add(new THREE.CylinderGeometry(.55, .6, .5, 10), bark, g, -11, .25, 33); stump.visible = false;
      const logs = []; for (let i = 0; i < 3; i++) { const l = add(new THREE.CylinderGeometry(.35, .35, 1.6, 9), bark, g, -8.4, .35, 31 + i * .8); l.rotation.z = Math.PI / 2; l.visible = false; logs.push(l); }
      return { fix(u) { tr.visible = u < .5; stump.visible = u >= .5; logs.forEach(l => l.visible = u >= .5); } }; } },
  pests: { spot: [-17, 28.8], look: [-18.6, .3, 26.8], work: [-18.2, 27.6], ins: [-16.2, 1.6, 29.6],
    build(g) { const n = 70, ants = new THREE.InstancedMesh(new THREE.SphereGeometry(.05, 6, 4), S(0x1a1410), n); g.add(ants); const d = new THREE.Object3D(); let vis = 1;
      return { fix(u) { vis = 1 - u; }, update(dt, t) { for (let i = 0; i < n; i++) { const k = (t * .08 + i / n) % 1; const show = i / n < vis; d.position.set(show ? -21 + k * 6 : 0, show ? .33 : -5, 26.5 + Math.sin(k * 12 + i) * .25); d.scale.set(1.4, .6, .8); d.updateMatrix(); ants.setMatrixAt(i, d.matrix); } ants.instanceMatrix.needsUpdate = true; } }; } },
  flood: { spot: [-20.6, 29], look: [-22.4, .2, 26], work: [-22.2, 27.3], ins: [-19.4, 2, 30],
    build(g) { add(new THREE.BoxGeometry(1.6, .5, .9), S(0x8f8a82), g, -22.4, .1, 25.5); const well = disk(1, water(), g, -22.4, .3, 25.6, .75, .4); const spread = disk(2.6, water(), g, -21.6, .03, 27.4, 1.4, .8);
      const fan = add(new THREE.BoxGeometry(.7, .6, .5), S(0x2f8f6a, { roughness: .5 }), g, -20.4, .3, 26.8); fan.visible = false;
      return { fix(u) { spread.scale.set(1.4 * (1 - u), .8 * (1 - u), 1); spread.visible = u < .98; well.visible = u < .7; fan.visible = u > .5; } }; } },
  mold: { spot: [-21.2, 28.6], look: [-22.4, 1.5, 25], work: [-22.2, 25.9], ins: [-19.6, 2, 29],
    build(g) { const mm = S(0x1f2a1a, { transparent: true, opacity: .85, roughness: 1 }); const spots = [];
      for (let i = 0; i < 16; i++) { const r = .15 + Math.random() * .35; const m = add(new THREE.CircleGeometry(r, 16), mm, g, -23.8 + Math.random() * 2.6, .7 + Math.random() * 1.6, 25.11, false); spots.push(m); }
      return { fix(u) { mm.opacity = .85 * (1 - u); } }; } },
  crack: { spot: [-16.4, 28.4], look: [-16, 1.2, 25], work: [-16, 25.9], ins: [-14.2, 1.6, 28.8],
    build(g) { const cm = S(0x141414, { transparent: true }); let x = -16.6, y = .25; for (let i = 0; i < 9; i++) { const seg = add(new THREE.BoxGeometry(.06, .34, .02), cm, g, x, y, 25.11, false); seg.rotation.z = (i % 2 ? .5 : -.4); x += (i % 2 ? .12 : .05); y += .26; }
      const patch = add(new THREE.BoxGeometry(.5, 2.5, .03), S(0xcfc9be), g, -16.25, 1.3, 25.12, false); patch.visible = false;
      return { fix(u) { cm.opacity = 1 - u; patch.visible = u > .6; } }; } },
  pooling: { spot: [-23.2, 29.6], look: [-22.9, .1, 26.1], work: [-21.8, 28.0], ins: [-19.6, 2.5, 30.4],
    build(g) { const w = disk(1, water(), g, -22.9, .04, 26.1, 1.9, .95); const spout = add(new THREE.BoxGeometry(.18, 3.4, .14), S(0xf2f2ee), g, -24.75, 1.8, 25.15); const stream = particles(30, 0xbfe3ff, .1, g);
      const drain = add(new THREE.CylinderGeometry(.12, .12, 6, 10), S(0x1d1f22), g, -24.75, .06, 28.4); drain.rotation.x = Math.PI / 2; drain.visible = false;
      let fu = 0; return { fix(u) { fu = u; w.scale.set(1.9 * (1 - u), .95 * (1 - u), 1); w.visible = u < .98; drain.visible = u > .4; },
        update(dt, t) { const p = stream.geometry.attributes.position; stream.userData.v.forEach((v, i) => { const k = (t * 1.5 + v) % 1; p.setXYZ(i, -24.75, fu > .4 ? -5 : .2 + k * .3, 25.4 + k * .9); }); p.needsUpdate = true; } }; } },
  gutter: { spot: [-19, 29.6], look: [-19, 3.6, 25.6], work: [-15.9, 26], ladder: { x: -15.9, z: 25.6, top: 2.6 }, ins: [-15, 3.4, 30.5],
    build(g) { add(new THREE.BoxGeometry(10.6, .22, .3), S(0xf2f2ee), g, -20, 3.62, 25.75); const leaves = []; for (let i = 0; i < 26; i++) { const l = add(new THREE.SphereGeometry(.12, 6, 4), S([0x8a6a2f, 0x5f7a2e, 0xa0522d][i % 3]), g, -25 + Math.random() * 10, 3.78, 25.75, false); l.scale.y = .5; leaves.push(l); }
      const guard = add(new THREE.BoxGeometry(10.6, .03, .34), S(0xd9dde2, { metalness: .6, roughness: .3 }), g, -20, 3.75, 25.75); guard.visible = false; const fall = particles(90, 0xbfe3ff, .1, g);
      let fu = 0; return { fix(u) { fu = u; leaves.forEach((l, i) => l.visible = u < (i + 1) / 27); guard.visible = u > .9; fall.visible = u < .6; },
        update(dt, t) { const p = fall.geometry.attributes.position; fall.userData.v.forEach((v, i) => { const k = (t * .9 + v) % 1; p.setXYZ(i, -24 + v * 8, 3.6 - k * 3.5, 26 + k * .15); }); p.needsUpdate = true; } }; } },
  grime: { front: true, spot: [-24.6, 11.4], look: [-27.3, 0, 12.5], work: [-26.4, 11.8], ins: [-22.6, 2.2, 9.6],
    build(g) { const gm = new THREE.MeshStandardMaterial({ color: 0x2b2a24, transparent: true, opacity: .75, roughness: 1 }); const st = add(new THREE.PlaneGeometry(4.1, 8.8), gm, g, -27.3, .075, 13.8, false); st.rotation.x = -Math.PI / 2;
      return { fix(u) { st.scale.y = Math.max(.001, 1 - u); st.position.z = 13.8 - u * 4.4; } }; } },
  chimney: { spot: [-21, 30], look: [-22.6, 6, 22.4], work: [-21.6, 26], ladder: { x: -21.6, z: 25.4, top: 3.1 }, ins: [-17.5, 6.5, 30],
    build(g) { const smoke = []; for (let i = 0; i < 8; i++) smoke.push(sprite(0x3a3a3a, 1.5, g, -22.6, 6, 22.4, .5));
      const cap = add(new THREE.BoxGeometry(1.1, .12, 1.1), S(0x2d3134, { metalness: .6, roughness: .3 }), g, -22.6, 6.35, 22.4); cap.visible = false;
      const holes = [add(new THREE.BoxGeometry(.3, .2, .05), S(0x1a1a1a), g, -22.4, 5.4, 22.82, false), add(new THREE.BoxGeometry(.25, .18, .05), S(0x1a1a1a), g, -22.9, 5.1, 22.82, false)];
      let fu = 0; return { fix(u) { fu = u; cap.visible = u > .6; holes.forEach(h => h.visible = u < .6); },
        update(dt, t) { smoke.forEach((s, i) => { const k = (t * .25 + i / 8) % 1; s.position.set(-22.6 + Math.sin(k * 5 + i) * .4, 6.2 + k * 4, 22.4 + k * 1.5); s.scale.setScalar(1 + k * 3); s.material.opacity = (1 - k) * .55 * (fu > .6 ? .15 : 1); s.material.color.setHex(fu > .6 ? 0xdddddd : 0x3a3a3a); }); } }; } },
  junk: { spot: [-15.2, 32.6], look: [-12.6, .5, 36], work: [-13.4, 35], ins: [-10, 2.6, 39.6],
    build(g) { const items = []; const mk = (geo, c, x, y, z, ry) => { const m = add(geo, S(c), g, x, y, z); m.rotation.y = ry || 0; items.push(m); };
      mk(new THREE.BoxGeometry(2.2, .8, .9), 0x8b5a3c, -12.6, .4, 36.4, .3); mk(new THREE.BoxGeometry(2, .25, 1.4), 0xe8e2d6, -11.8, .95, 36.2, -.2); mk(new THREE.BoxGeometry(.6, .5, .6), 0xc9a26b, -14, .25, 35.4, .4); mk(new THREE.BoxGeometry(.5, .45, .5), 0xc9a26b, -13.8, .75, 35.5, .1);
      mk(new THREE.CylinderGeometry(.4, .4, .25, 16), 0x1b1b1b, -10.8, .14, 35, 0); mk(new THREE.BoxGeometry(.7, .9, .5), 0x30343a, -11, .45, 37.6, .6); mk(new THREE.BoxGeometry(.6, .4, .8), 0xc9a26b, -13.2, .2, 37.4, .9);
      return { fix(u) { items.forEach((m, i) => m.visible = u < 1 - (i + 1) / (items.length + 1)); } }; } },
  rug: { spot: [-17, 29], look: [-18.6, .3, 27], work: [-18.2, 27.8], ins: [-15.8, 2, 29.8],
    build(g) { const r = add(new THREE.BoxGeometry(2.4, .03, 1.6), S(0xa34a3c, { roughness: 1 }), g, -18.6, .32, 26.9, false); const st = add(new THREE.CircleGeometry(.45, 18), new THREE.MeshStandardMaterial({ color: 0x4a3420, transparent: true, opacity: .85 }), g, -18.3, .34, 26.8, false); st.rotation.x = -Math.PI / 2;
      return { fix(u) { st.material.opacity = .85 * (1 - u); } }; } },
  pool: { spot: [-16.2, 33.4], look: [-14, .2, 37], work: [-15.2, 34.6], ins: [-10.4, 3, 41.4],
    build(g) { add(new THREE.BoxGeometry(7.6, .2, 4.6), S(0xeae6dc), g, -14, .1, 37.2); const wm = S(0x4f7a2a, { roughness: .1, metalness: .3 }); add(new THREE.BoxGeometry(7, .05, 4), wm, g, -14, .19, 37.2, false);
      const green = new THREE.Color(0x4f7a2a), blue = new THREE.Color(0x2fa6d8); return { fix(u) { wm.color.copy(green).lerp(blue, u); } }; } },
  fence: { spot: [-10.4, 33.4], look: [-7.6, .6, 35.6], work: [-8.4, 35], ins: [-10.6, 2.2, 38.6],
    build(g) { const wood = S(0x9c6b42, { roughness: .9 }); const panel = new THREE.Group(); panel.position.set(-7.2, 0, 35.2); g.add(panel);
      for (let i = 0; i < 9; i++) add(new THREE.BoxGeometry(.12, 1.8, .2), wood, panel, 0, .9, -1.6 + i * .4); add(new THREE.BoxGeometry(.06, .1, 3.6), wood, panel, -.08, .5, 0); add(new THREE.BoxGeometry(.06, .1, 3.6), wood, panel, -.08, 1.4, 0);
      [-1.9, 1.9].forEach(z => add(new THREE.BoxGeometry(.16, 2, .16), wood, g, -7.2, 1, 35.2 + z));
      return { fix(u) { panel.rotation.z = (1 - u) * 1.2; panel.position.y = 0; } }; } },
  outage: { spot: [-22.2, 28.8], look: [-20, 2.2, 25], work: [-23.6, 27.2], ins: [-19.6, 2.4, 30.4],
    build(g) { const dark = new THREE.MeshBasicMaterial({ color: 0x0b0d12, transparent: true, opacity: .92 }); [-17, -20, -23].forEach(x => add(new THREE.PlaneGeometry(1.3, 1.15), dark, g, x, 2.15, 25.12, false));
      const gen = new THREE.Group(); gen.position.set(-24.3, 0, 26.7); g.add(gen); add(new THREE.BoxGeometry(1.4, 1, .8), S(0xd5d8db, { metalness: .2 }), gen, 0, .5, 0); for (let i = 0; i < 5; i++) add(new THREE.BoxGeometry(1.1, .04, .02), S(0x7c8288), gen, 0, .3 + i * .12, .41, false);
      const glow = sprite(0x7dffc6, .5, gen, .5, .9, .42, 1); gen.visible = false;
      return { fix(u) { dark.opacity = .92 * (1 - u); gen.visible = u > .3; gen.scale.setScalar(Math.min(1, (u - .3) * 3)); } }; } },
  washer: { spot: [-18.3, 28.6], look: [-20.4, .5, 26.6], work: [-19.6, 27.6], ins: [-17, 1.8, 29.6],
    build(g) { const wsh = new THREE.Group(); wsh.position.set(-20.4, .3, 26.4); g.add(wsh); add(new THREE.BoxGeometry(.75, .9, .7), S(0xf4f6f7, { roughness: .3 }), wsh, 0, .45, 0);
      const drum = add(new THREE.CylinderGeometry(.24, .24, .05, 20), S(0x3a4a5a, { roughness: .1, metalness: .4 }), wsh, 0, .45, .36, false); drum.rotation.x = Math.PI / 2;
      const pud = disk(1.2, water(), g, -20, .33, 27.2, 1.2, .7); let fu = 0;
      return { fix(u) { fu = u; pud.scale.set(1.2 * (1 - u), .7 * (1 - u), 1); pud.visible = u < .98; }, update(dt, t) { drum.rotation.y += dt * fu * 8; } }; } },
};
