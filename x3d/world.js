// Engine (renderer, sky, time of day, post) + the town.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { makeVehicle, nameTexture } from './truck.js';
import { Person, loadPeople } from './people.js';

export const MOBILE = matchMedia('(max-width:760px), (pointer:coarse)').matches;
const rnd = (() => { let s = 1234567; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
const S = (c, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: .8, metalness: 0 }, o));
const rbox = (w, h, d, r = .12, seg = 2) => new RoundedBoxGeometry(w, h, d, seg, r);
function add(geo, mat, parent, x = 0, y = 0, z = 0, shadow = true) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = shadow; m.receiveShadow = true; parent.add(m); return m; }

/* ---------------- procedural surface textures (near-white, tinted by material color) ---------------- */
const TX = {};
function canvasTex(key, w, h, draw, rx = 1, ry = 1) {
  if (TX[key]) return TX[key]; const c = document.createElement('canvas'); c.width = w; c.height = h; const x = c.getContext('2d'); draw(x, w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry); t.anisotropy = MOBILE ? 2 : 8; return (TX[key] = t);
}
const speck = (x, w, h, n, a, b, sz = 2) => { for (let i = 0; i < n; i++) { const v = a + rnd() * (b - a) | 0; x.fillStyle = `rgb(${v},${v},${v})`; x.fillRect(rnd() * w, rnd() * h, sz, sz); } };
export const sidingTex = () => canvasTex('sid', 256, 256, (x, w, h) => { const n = 14; for (let i = 0; i < n; i++) { const y = i * h / n, g = x.createLinearGradient(0, y, 0, y + h / n); g.addColorStop(0, '#bdbdbd'); g.addColorStop(.12, '#fafafa'); g.addColorStop(.9, '#e9e9e9'); g.addColorStop(1, '#d6d6d6'); x.fillStyle = g; x.fillRect(0, y, w, h / n); } speck(x, w, h, 900, 225, 255, 1); });
export const shingleTex = () => canvasTex('shg', 256, 256, (x, w, h) => { x.fillStyle = '#d8d8d8'; x.fillRect(0, 0, w, h); const rows = 4, cols = 6; // rows run along the canvas x axis (roof slope maps to u)
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols + 1; c++) { const v = 180 + rnd() * 75 | 0; x.fillStyle = `rgb(${v},${v},${v})`; const X = r * w / rows, Y = (c - (r % 2) * .5) * h / cols; x.fillRect(X + 2, Y + 2, w / rows - 3, h / cols - 3); }
  for (let r = 0; r < rows; r++) { x.fillStyle = 'rgba(0,0,0,.35)'; x.fillRect(r * w / rows, 0, 3, h); } speck(x, w, h, 1400, 150, 255, 1); }, .7, .5);
const grassTex = () => canvasTex('grs', 512, 512, (x, w, h) => { x.fillStyle = '#f2f2f2'; x.fillRect(0, 0, w, h);
  for (let i = 0; i < 40; i++) { const r = 20 + rnd() * 70, cx = rnd() * w, cy = rnd() * h, g = x.createRadialGradient(cx, cy, 0, cx, cy, r); const v = rnd() < .5 ? '220,220,220' : '255,255,255'; g.addColorStop(0, `rgba(${v},.6)`); g.addColorStop(1, `rgba(${v},0)`); x.fillStyle = g; x.fillRect(cx - r, cy - r, r * 2, r * 2); }
  for (let i = 0; i < 9000; i++) { const v = 190 + rnd() * 65 | 0; x.strokeStyle = `rgb(${v},${v + (rnd() * 10 | 0) > 255 ? 255 : v},${v})`; const X = rnd() * w, Y = rnd() * h; x.beginPath(); x.moveTo(X, Y); x.lineTo(X + (rnd() - .5) * 3, Y - 3 - rnd() * 4); x.stroke(); } }, 110, 110);
const asphaltTex = () => canvasTex('asp', 256, 256, (x, w, h) => { x.fillStyle = '#e8e8e8'; x.fillRect(0, 0, w, h); speck(x, w, h, 6000, 170, 255, 2); for (let i = 0; i < 6; i++) { x.strokeStyle = 'rgba(40,40,40,.25)'; x.lineWidth = 1.5; x.beginPath(); let X = rnd() * w, Y = rnd() * h; x.moveTo(X, Y); for (let k = 0; k < 6; k++) { X += (rnd() - .5) * 40; Y += (rnd() - .5) * 40; x.lineTo(X, Y); } x.stroke(); } }, 60, 1);
const concreteTex = () => canvasTex('con', 256, 256, (x, w, h) => { x.fillStyle = '#f4f4f4'; x.fillRect(0, 0, w, h); speck(x, w, h, 3000, 205, 255, 2); x.fillStyle = 'rgba(0,0,0,.28)'; x.fillRect(0, 0, w, 3); x.fillRect(0, 0, 3, h); }, 1, 1);

/* ---------------- time of day presets ---------------- */
const TOD = {
  day:   { fill: .25, sun: [ .45, .8, .35], sunC: 0xfff3e2, sunI: 2.8, hemiS: 0xbfd9ff, hemiG: 0x6d8a4f, hemiI: 1.1, top: 0x3d86e0, hor: 0xcfe6ff, bot: 0xdfe9d6, fog: 0xcfe0ee, win: 0, lamps: 0, stars: 0, exp: 1.0, cloud: 0xffffff, cA: .75 },
  dusk:  { sun: [.7, .16, .6], sunC: 0xff9a55, sunI: 2.3, hemiS: 0x9a90d0, hemiG: 0x4a3a2e, hemiI: .85, top: 0x2a3a78, hor: 0xff9a60, bot: 0x5b4250, fog: 0xb08a92, win: 1.2, lamps: 1, stars: .2, exp: 1.08, fill: .7, cloud: 0xffb48a, cA: .8 },
  night: { fill: .5, sun: [-.4, .5, .3], sunC: 0x9db4ff, sunI: .5, hemiS: 0x3a4a80, hemiG: 0x15161f, hemiI: .45, top: 0x060a1c, hor: 0x1d2b5a, bot: 0x0b0f1c, fog: 0x1a2240, win: 1.6, lamps: 1.4, stars: 1, exp: 1.15, cloud: 0x26304e, cA: .45 },
  dawn:  { fill: .4, sun: [.85, .2, .3], sunC: 0xffc38a, sunI: 2.0, hemiS: 0xa9c4ef, hemiG: 0x5a5040, hemiI: .65, top: 0x5c86d0, hor: 0xffd0a0, bot: 0x9c8f8a, fog: 0xdcc3b4, win: .6, lamps: .3, stars: 0, exp: 1.0, cloud: 0xffe0cc, cA: .7 },
};

export function createEngine(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !MOBILE, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, MOBILE ? 1.25 : 1.5));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, .1, 2500);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envTex = pmrem.fromScene(new RoomEnvironment(), .04).texture;
  scene.fog = new THREE.Fog(0xcfe0ee, 120, 520);
  // sky dome
  const skyU = { top: { value: new THREE.Color() }, hor: { value: new THREE.Color() }, bot: { value: new THREE.Color() }, sunDir: { value: new THREE.Vector3(0, 1, 0) }, sunC: { value: new THREE.Color() }, stars: { value: 0 }, cloudC: { value: new THREE.Color() }, cA: { value: .7 }, time: { value: 0 } };
  const sky = new THREE.Mesh(new THREE.SphereGeometry(1500, 48, 24), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false, uniforms: skyU,
    vertexShader: 'varying vec3 vD;void main(){vD=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: `uniform vec3 top,hor,bot,sunC,sunDir,cloudC;uniform float stars,cA,time;varying vec3 vD;
      float h(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,45.164)))*43758.5453);}
      float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}
      float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n2(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
      void main(){float y=vD.y;vec3 c=y>0.?mix(hor,top,pow(smoothstep(0.,.55,y),.8)):mix(hor,bot,smoothstep(0.,-.2,y));
      float sd=max(dot(vD,normalize(sunDir)),0.);c+=sunC*(pow(sd,700.)*4.+pow(sd,12.)*.35+pow(sd,3.)*.12)*smoothstep(-.05,.05,y+.02);
      vec3 q=floor(vD*420.);float s=step(.9975,h(q))*stars*smoothstep(.05,.3,y);c+=vec3(s);
      if(y>0.){vec2 uv=vD.xz/(y+.15)*1.3+vec2(time*.006,0.);float f=fbm(uv);float cl=smoothstep(.5,.78,f)*smoothstep(.0,.18,y)*cA;float lit=smoothstep(.45,.8,fbm(uv+normalize(sunDir.xz+.001)*.06));
      vec3 cc=mix(cloudC*.62+hor*.25,cloudC*1.05,lit)+sunC*pow(sd,6.)*.5;c=mix(c,cc,cl);}
      gl_FragColor=vec4(c,1.);}`
  }));
  sky.renderOrder = -1; scene.add(sky);
  // lights
  const hemi = new THREE.HemisphereLight(0xffffff, 0x556644, .8); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffffff, 2); sun.castShadow = true;
  const sm = MOBILE ? 1024 : 2048; sun.shadow.mapSize.set(sm, sm);
  Object.assign(sun.shadow.camera, { left: -45, right: 45, top: 45, bottom: -45, near: 1, far: 400 }); sun.shadow.bias = -.0004; sun.shadow.normalBias = .03;
  scene.add(sun); scene.add(sun.target);
  const fill = new THREE.DirectionalLight(0xfff0e0, .5); scene.add(fill); scene.add(fill.target);
  // post
  let composer = null, bloom = null;
  if (!MOBILE) {
    composer = new EffectComposer(renderer); composer.addPass(new RenderPass(scene, camera));
    bloom = new UnrealBloomPass(new THREE.Vector2(512, 512), .5, .45, .92); composer.addPass(bloom); composer.addPass(new OutputPass());
  }
  const shared = {
    win: S(0x4a6178, { emissive: 0xffb357, emissiveIntensity: 0, roughness: .12, metalness: .55, envMap: envTex, envMapIntensity: .9 }),
    lamp: S(0xfff2cc, { emissive: 0xffd28a, emissiveIntensity: 0 }),
    signGlow: null,
  };
  const cur = JSON.parse(JSON.stringify(TOD.day)); let from = null, to = TOD.day, tt = 1, tdur = 1;
  const col = (a, b, k) => new THREE.Color(a).lerp(new THREE.Color(b), k);
  function applyTOD(k) {
    const A = from || to, B = to; const L = (a, b) => a + (b - a) * k;
    const sd = new THREE.Vector3(...A.sun).lerp(new THREE.Vector3(...B.sun), k).normalize();
    sun.position.copy(focus).addScaledVector(sd, 200); sun.target.position.copy(focus);
    sun.color.copy(col(A.sunC, B.sunC, k)); sun.intensity = L(A.sunI, B.sunI);
    hemi.color.copy(col(A.hemiS, B.hemiS, k)); hemi.groundColor.copy(col(A.hemiG, B.hemiG, k)); hemi.intensity = L(A.hemiI, B.hemiI);
    skyU.top.value.copy(col(A.top, B.top, k)); skyU.hor.value.copy(col(A.hor, B.hor, k)); skyU.bot.value.copy(col(A.bot, B.bot, k));
    skyU.sunDir.value.copy(sd); skyU.sunC.value.copy(col(A.sunC, B.sunC, k)); skyU.stars.value = L(A.stars, B.stars); skyU.cloudC.value.copy(col(A.cloud ?? 0xffffff, B.cloud ?? 0xffffff, k)); skyU.cA.value = L(A.cA ?? .7, B.cA ?? .7);
    scene.fog.color.copy(col(A.fog, B.fog, k));
    shared.win.emissiveIntensity = L(A.win, B.win); shared.lamp.emissiveIntensity = L(A.lamps, B.lamps) * 3;
    if (shared.signGlow) shared.signGlow.emissiveIntensity = L(A.lamps, B.lamps) * 1.2 + .15;
    renderer.toneMappingExposure = L(A.exp, B.exp); fill.intensity = L(A.fill ?? .4, B.fill ?? .4);
    fill.position.copy(camera.position).add(new THREE.Vector3(0, 6, 0)); fill.target.position.copy(focus);
    cur.lamps = L(A.lamps, B.lamps); cur.name = k > .5 ? B.name : A.name;
  }
  Object.keys(TOD).forEach(k => TOD[k].name = k);
  const focus = new THREE.Vector3();
  const eng = {
    renderer, scene, camera, sun, hemi, composer, shared, TOD: cur, envTex,
    setTOD(name, secs = 0) { from = blendSnapshot(); to = TOD[name]; tdur = Math.max(.001, secs); tt = 0; if (!secs) { tt = 1; applyTOD(1); } },
    lamps: () => cur.lamps || 0,
    update(dt) { if (tt < 1) { tt = Math.min(1, tt + dt / tdur); applyTOD(tt * tt * (3 - 2 * tt)); } else applyTOD(1); sky.position.copy(camera.position); skyU.time.value += dt; },
    setFocus(v) { focus.copy(v); },
    resize() { const w = innerWidth, h = innerHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); if (composer) { composer.setSize(w, h); bloom.resolution.set(w / 2, h / 2); } },
    degrade(level) { if (level >= 1 && composer) composer = null; if (level >= 1) renderer.setPixelRatio(1); if (level >= 2) { sun.castShadow = false; } },
    render(sc, cam) { if (sc && sc !== scene) { renderer.render(sc, cam); return; } if (composer) composer.render(); else renderer.render(scene, camera); }
  };
  function blendSnapshot() { // snapshot current applied state into a preset-shaped object
    const sd = skyU.sunDir.value; return { sun: [sd.x, sd.y, sd.z], sunC: sun.color.getHex(), sunI: sun.intensity, hemiS: hemi.color.getHex(), hemiG: hemi.groundColor.getHex(), hemiI: hemi.intensity,
      top: skyU.top.value.getHex(), hor: skyU.hor.value.getHex(), bot: skyU.bot.value.getHex(), fog: scene.fog.color.getHex(), win: shared.win.emissiveIntensity, lamps: cur.lamps || 0, stars: skyU.stars.value, cloud: skyU.cloudC.value.getHex(), cA: skyU.cA.value, exp: renderer.toneMappingExposure, fill: fill.intensity, name: cur.name };
  }
  applyTOD(1);
  return eng;
}

/* ---------------- merge static meshes by material ---------------- */
function bake(group, parent) {
  group.updateMatrixWorld(true); const byMat = new Map();
  group.traverse(o => { if (!o.isMesh) return; const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone(); g.applyMatrix4(o.matrixWorld);
    ['uv1', 'uv2', 'color', 'tangent'].forEach(a => g.deleteAttribute && g.getAttribute(a) && g.deleteAttribute(a));
    if (!g.getAttribute('uv')) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.getAttribute('position').count * 2), 2));
    const k = o.material.uuid + (o.castShadow ? 's' : 'n'); if (!byMat.has(k)) byMat.set(k, { mat: o.material, shadow: o.castShadow, geos: [] }); byMat.get(k).geos.push(g); });
  byMat.forEach(v => { const m = new THREE.Mesh(mergeGeometries(v.geos, false), v.mat); m.castShadow = v.shadow; m.receiveShadow = true; parent.add(m); });
}

/* ---------------- the town ---------------- */
export async function buildTown(eng, company, town, opts = {}) {
  const brand = opts.brand || 0x2f8f6a;
  const scene = new THREE.Group(); eng.scene.add(scene); const W = { people: {}, cars: [], anims: [], root: scene, timers: [] };
  const staticG = new THREE.Group();
  // ground
  const gg = new THREE.PlaneGeometry(900, 900, 40, 40); gg.rotateX(-Math.PI / 2);
  const cols = []; const pa = gg.getAttribute('position'); const c1 = new THREE.Color(0x7fb84e), c2 = new THREE.Color(0x6aa543), c3 = new THREE.Color(0x93c45c);
  for (let i = 0; i < pa.count; i++) { const x = pa.getX(i), z = pa.getZ(i); const d = Math.hypot(x, z); if (d > 170) pa.setY(i, Math.max(0, (Math.sin(x * .02) + Math.cos(z * .017)) * 6 + (d - 170) * .08));
    const n = (Math.sin(x * .09) * Math.cos(z * .07) + Math.sin(x * .023 + z * .031)) * .5 + .5; const c = c1.clone().lerp(n > .5 ? c3 : c2, Math.abs(n - .5) * 1.4); cols.push(c.r, c.g, c.b); }
  gg.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3)); gg.computeVertexNormals();
  const ground = new THREE.Mesh(gg, S(0xffffff, { vertexColors: true, roughness: 1, map: grassTex() })); ground.receiveShadow = true; scene.add(ground);
  // roads
  const asphalt = S(0x3a3e44, { roughness: .92, map: asphaltTex() }), walkM = S(0xc9c4b8, { roughness: .95, map: canvasTex('walk', 256, 256, (x, w, h) => { x.fillStyle = '#f4f4f4'; x.fillRect(0, 0, w, h); speck(x, w, h, 2500, 205, 255, 2); x.fillStyle = 'rgba(0,0,0,.3)'; x.fillRect(0, 0, 4, h); }, 230, 1) }), curbM = S(0xd9d6cf, { roughness: .9 }), paint = S(0xf3d36b, { roughness: .7 }), white = S(0xf2f2ee, { roughness: .7 }), gravel = S(0xb3a68c, { roughness: 1 });
  add(new THREE.BoxGeometry(460, .08, 8), asphalt, staticG, 0, .04, 0, false);
  [1, -1].forEach(sg => { add(new THREE.BoxGeometry(460, .16, .3), curbM, staticG, 0, .08, sg * 4.15, false); add(new THREE.BoxGeometry(460, .12, 1.9), walkM, staticG, 0, .06, sg * 6.15, false);
    const v = add(new THREE.BoxGeometry(300, .12, 1.9), walkM, staticG, -45 + sg * 6.15, .061, 0, false); v.rotation.y = Math.PI / 2; add(new THREE.BoxGeometry(.3, .16, 300), curbM, staticG, -45 + sg * 4.15, .08, 0, false); });
  for (let x = -228; x < 228; x += 6) add(new THREE.BoxGeometry(3, .09, .16), paint, staticG, x, .045, 0, false);
  add(new THREE.BoxGeometry(460, .09, .14), white, staticG, 0, .045, 3.7, false); add(new THREE.BoxGeometry(460, .09, .14), white, staticG, 0, .045, -3.7, false);
  add(new THREE.BoxGeometry(300, .08, 8), asphalt, staticG, -45, .041, 0, false).rotation.y = Math.PI / 2;
  for (let z = -148; z < 148; z += 6) if (Math.abs(z) > 5) add(new THREE.BoxGeometry(.16, .09, 3), paint, staticG, -45, .046, z, false);

  // houses
  const siding = [0xf3e3c3, 0xdfe9ef, 0xf6d6c4, 0xe7efd9, 0xf1efe8, 0xd9dfe8, 0xf4e2b8, 0xe8d6ec];
  const roofs = [0x7a4b3a, 0x4d5d70, 0x5b4636, 0x6b6f75, 0x8a4a3f, 0x3f5547];
  const doors = [0xc0392b, 0x2a6f97, 0x2f7d4f, 0x6c3483, 0x1f3a5f, 0xd68910];
  const trimM = S(0xfbfbf7, { roughness: .6 }), concrete = S(0xcfcac0, { roughness: .95, map: concreteTex() }), lidM = S(0x2e5a43, { roughness: .6 });
  function house(x, z, front, i, opts = {}) {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = front > 0 ? 0 : Math.PI;
    const sid = S(opts.siding || siding[i % siding.length], { roughness: .85, map: sidingTex() }), rf = S(roofs[i % roofs.length], { roughness: .9, map: shingleTex() }), dr = S(doors[i % doors.length], { roughness: .5 });
    const two = opts.two ?? (i % 3 === 1);
    const BW = 10, BD = 8, BH = 3.1;
    add(new THREE.BoxGeometry(BW + .3, .5, BD + .3), concrete, g, 0, .25, 0);
    const body = add(rbox(BW, BH, BD, .1), sid, g, 0, .5 + BH / 2, 0); g.userData.solid = { body, top: two ? 5.4 : 3.2 };
    let roofY = .5 + BH, rw = BW, rd = BD;
    if (two) { add(rbox(BW * .72, 2.8, BD, .1), sid, g, -BW * .14, roofY + 1.4, 0); roofY += 2.8; rw = BW * .72; }
    const sh = new THREE.Shape(); const ov = .55; sh.moveTo(-rd / 2 - ov, 0); sh.lineTo(rd / 2 + ov, 0); sh.lineTo(0, two ? 2.4 : 2.9); sh.closePath();
    const rg = new THREE.ExtrudeGeometry(sh, { depth: rw + ov * 2, bevelEnabled: true, bevelThickness: .08, bevelSize: .08, bevelSegments: 1 }); rg.translate(0, 0, -(rw + ov * 2) / 2); rg.rotateY(Math.PI / 2);
    add(rg, rf, g, two ? -BW * .14 : 0, roofY - .05, 0);
    if (two) { const sh2 = new THREE.Shape(); sh2.moveTo(-rd / 2 - ov, 0); sh2.lineTo(rd / 2 + ov, 0); sh2.lineTo(0, 1.8); sh2.closePath(); const r2 = new THREE.ExtrudeGeometry(sh2, { depth: BW * .3 + ov, bevelEnabled: false }); r2.translate(0, 0, -(BW * .3 + ov) / 2); r2.rotateY(Math.PI / 2); add(r2, rf, g, BW * .36, .5 + BH - .05, 0); }
    // garage
    if (opts.garage !== false) {
      add(rbox(4.6, 2.9, 6.6, .08), sid, g, BW / 2 + 2.3, .5 + 1.45 - .05, -.6);
      const gs = new THREE.Shape(); gs.moveTo(-3.6, 0); gs.lineTo(3.6, 0); gs.lineTo(0, 1.6); gs.closePath(); const gr = new THREE.ExtrudeGeometry(gs, { depth: 5.3, bevelEnabled: false }); gr.translate(0, 0, -2.65); gr.rotateY(Math.PI / 2);
      add(gr, rf, g, BW / 2 + 2.3, .5 + 2.85, -.6);
      add(rbox(3.6, 2.3, .12, .04), trimM, g, BW / 2 + 2.3, .5 + 1.2, 2.72);
      for (let k = 0; k < 4; k++) add(new THREE.BoxGeometry(3.5, .04, .05), S(0xd8d8d2), g, BW / 2 + 2.3, .5 + .4 + k * .55, 2.79, false);
      add(new THREE.BoxGeometry(4.2, .07, 13.6), concrete, g, BW / 2 + 2.3, .035, 2.7 + 6.8, false); // driveway
    }
    // porch + door
    add(new THREE.BoxGeometry(4.2, .45, 1.8), concrete, g, -1.2, .22, BD / 2 + .9);
    add(rbox(4.4, .18, 2.2, .05), trimM, g, -1.2, .5 + BH - .3, BD / 2 + 1);
    [-3.2, .8].forEach(px => add(new THREE.CylinderGeometry(.09, .09, BH - .3, 10), trimM, g, px, .45 + (BH - .3) / 2, BD / 2 + 1.9));
    add(rbox(1.05, 2.15, .12, .03), dr, g, -1.2, .5 + 1.08, BD / 2 + .02);
    add(new THREE.SphereGeometry(.05, 8, 6), S(0xd4af37, { metalness: .8, roughness: .3 }), g, -.82, .5 + 1.05, BD / 2 + .1, false);
    add(new THREE.BoxGeometry(1.3, .08, 8.6), concrete, g, -1.2, .04, BD / 2 + 6.1, false); // walkway
    // windows front & back
    const winAt = (wx, wy, wz, back) => { add(rbox(1.5, 1.35, .1, .03), trimM, g, wx, wy, wz + (back ? -.03 : .03)); add(new THREE.BoxGeometry(1.25, 1.1, .06), eng.shared.win, g, wx, wy, wz + (back ? -.07 : .07), false);
      add(new THREE.BoxGeometry(.06, 1.1, .08), trimM, g, wx, wy, wz + (back ? -.09 : .09), false); add(new THREE.BoxGeometry(1.25, .06, .08), trimM, g, wx, wy, wz + (back ? -.09 : .09), false); };
    [-3.6, 1.7, 3.6].forEach((wx, k) => { if (k === 1 && two === false) {} winAt(wx, .5 + 1.65, BD / 2, false); });
    [-3, 0, 3].forEach(wx => winAt(wx, .5 + 1.65, -BD / 2, true));
    if (two) [-3.2, -.6].forEach(wx => winAt(wx, .5 + BH + 1.4, BD / 2, false));
    // chimney
    if (i % 2 === 0) add(rbox(.8, 2.4, .8, .05), S(0x9a5b46, { roughness: .95 }), g, two ? -3 : 2.6, roofY + 1.2, -1.4);
    // mailbox
    add(new THREE.BoxGeometry(.08, 1.1, .08), S(0x5b4636), g, 2.8, .55, BD / 2 + 9.6); add(rbox(.3, .3, .55, .08), S(0x23272b, { metalness: .4, roughness: .4 }), g, 2.8, 1.2, BD / 2 + 9.6);
    // backyard septic lids
    add(new THREE.CylinderGeometry(.42, .42, .12, 20), lidM, g, -2, .06, -BD / 2 - 7); add(new THREE.CylinderGeometry(.42, .42, .12, 20), lidM, g, -.6, .06, -BD / 2 - 7.2);
    // bushes along front
    for (let k = 0; k < 4; k++) { const b = add(new THREE.IcosahedronGeometry(.55 + rnd() * .25, 1), S([0x3f8a3a, 0x4c9a45, 0x5aa84a][k % 3], { roughness: .9 }), g, -4.4 + k * .9 + (k > 1 ? 4.4 : 0), .5, BD / 2 + .6); b.scale.y = .8; }
    const flowerC = [0xe76f51, 0xf4a261, 0xffffff, 0xd16ba5, 0xffd166][i % 5];
    add(new THREE.BoxGeometry(3, .14, 1.1), S(0x5a3f2b, { roughness: 1 }), g, -4.2, .07, BD / 2 + 1.25, false); add(new THREE.BoxGeometry(2.4, .14, 1.1), S(0x5a3f2b, { roughness: 1 }), g, 2.2, .07, BD / 2 + 1.25, false);
    for (let k = 0; k < 9; k++) { const fx = k < 5 ? -5.4 + k * .6 : 1.4 + (k - 5) * .55; add(new THREE.IcosahedronGeometry(.16 + rnd() * .06, 0), S(k % 3 ? flowerC : 0xfff3b0, { roughness: .7 }), g, fx, .3, BD / 2 + 1.35 + (rnd() - .5) * .4, false); }
    staticG.add(g); return g;
  }
  const H = [];
  const southX = [-150, -112, -80, 12, 44, 100, 135], northX = [-150, -112, -80, -12, 20, 140];
  southX.forEach((x, i) => H.push(house(x, 21, -1, i)));
  northX.forEach((x, i) => H.push(house(x, -21, 1, i + 3)));
  [-40, -75].forEach((z, i) => { const g = house(-62, z, 1, i + 7); g.rotation.y = Math.PI / 2; g.position.set(-62, 0, z); });
  [40, 75].forEach((z, i) => { const g = house(-28, z, 1, i + 9); g.rotation.y = -Math.PI / 2; g.position.set(-28, 0, z); });
  // Sarah's house (hero)
  const sarahHouse = house(-20, 21, -1, 4, { siding: 0xf2e6cf, two: false });
  W.sarahHouse = { pos: new THREE.Vector3(-20, 0, 21), backDoor: new THREE.Vector3(-18.6, 0, 25.6), soggy: new THREE.Vector3(-15.5, 0, 34.5), lids: new THREE.Vector3(-18.7, 0, 32.1), porch: new THREE.Vector3(-18.8, 0, 14.3), drive: new THREE.Vector3(-27.3, 0, 13) };
  // Sarah's back door + patio + fence
  add(rbox(1.05, 2.15, .12, .03), S(0xfbfbf7), staticG, -18.6, .5 + 1.08, 25.03);
  add(new THREE.BoxGeometry(5, .3, 3), S(0xa77a52, { roughness: .9 }), staticG, -18.6, .15, 26.6);
  const fenceM = S(0xfbfbf7, { roughness: .7 });
  const fence = (x1, z1, x2, z2) => { const len = Math.hypot(x2 - x1, z2 - z1), n = Math.floor(len / .35); const ang = Math.atan2(z2 - z1, x2 - x1);
    for (let k = 0; k <= n; k++) { const t = k / n; const p = add(new THREE.BoxGeometry(.1, 1.05, .1), fenceM, staticG, x1 + (x2 - x1) * t, .52, z1 + (z2 - z1) * t, false); p.rotation.y = -ang; }
    [.35, .8].forEach(y => { const r = add(new THREE.BoxGeometry(len, .08, .05), fenceM, staticG, (x1 + x2) / 2, y, (z1 + z2) / 2, false); r.rotation.y = -ang; }); };
  fence(-31, 25, -31, 44); fence(-31, 44, -6, 44); fence(-6, 44, -6, 25);
  // soggy patch: darker wet grass + puddles (dynamic shimmer)
  const wetA = canvasTex('wetA', 128, 128, (x, w, h) => { const g = x.createRadialGradient(64, 64, 10, 64, 64, 64); g.addColorStop(0, '#fff'); g.addColorStop(.55, '#bbb'); g.addColorStop(1, '#000'); x.fillStyle = g; x.fillRect(0, 0, w, h); });
  const wet = new THREE.Mesh(new THREE.CircleGeometry(3.6, 40), S(0x3f5a2a, { roughness: .4, alphaMap: wetA, transparent: true, depthWrite: false })); wet.rotation.x = -Math.PI / 2; wet.position.set(-15.5, .02, 34.5); wet.scale.set(1.3, .9, 1); wet.receiveShadow = true; scene.add(wet); W.soggy = [wet]; wet.visible = false;
  const pudM = S(0x4f6a7e, { roughness: .32, metalness: .2, envMap: eng.envTex, envMapIntensity: .35 });
  [[-15.5, 34.5, 1.4], [-13.6, 35.6, .8], [-17.2, 33.4, .6]].forEach(p => { const m = new THREE.Mesh(new THREE.CircleGeometry(p[2], 28), pudM); m.rotation.x = -Math.PI / 2; m.position.set(p[0], .035, p[1]); m.scale.y = .7; scene.add(m); m.visible = false; W.soggy.push(m); });
  // tree in sarah's yard
  // shop
  const shop = new THREE.Group(); shop.position.set(70, 0, -24); staticG.add(shop);
  const metal = S(0xe9ecef, { roughness: .5, metalness: .3 }), brandM = S(brand, { roughness: .55 });
  add(new THREE.BoxGeometry(30, .1, 20), concrete, shop, 0, .05, 6, false);
  add(rbox(12, 5.6, 11, .1), metal, shop, 5, 2.8, -2);
  add(rbox(12.4, .4, 11.4, .1), brandM, shop, 5, 5.7, -2);
  add(rbox(4.6, 4.4, .15, .05), S(0xcfd4d9, { metalness: .5, roughness: .45 }), shop, 5, 2.3, 3.55);
  for (let k = 0; k < 9; k++) add(new THREE.BoxGeometry(4.5, .04, .06), S(0xb7bec5), shop, 5, .4 + k * .48, 3.65, false);
  add(rbox(9, 3.6, 8, .1), S(0xf4efe6), shop, -6, 1.8, -.5);
  add(rbox(9.4, .35, 8.4, .08), S(0x3b4a44), shop, -6, 3.75, -.5);
  add(rbox(1.1, 2.2, .12, .03), brandM, shop, -8.5, 1.1, 3.52);
  [-5.6, -3.1].forEach(x => { add(rbox(1.8, 1.3, .1, .03), trimM, shop, x, 2, 3.52); add(new THREE.BoxGeometry(1.6, 1.1, .06), eng.shared.win, shop, x, 2, 3.58, false); });
  const signTex = nameTexture(company.toUpperCase(), { w: 1024, h: 200, bg: null, fg: '#ffffff', sub: opts.sub || 'SEPTIC  ·  PUMPING  ·  INSPECTIONS', subFg: '#cfeee0' });
  eng.shared.signGlow = new THREE.MeshStandardMaterial({ color: brand, roughness: .5 });
  add(rbox(10.5, 2.1, .3, .08), eng.shared.signGlow, shop, 2, 6.9, 3.4);
  const signFace = new THREE.Mesh(new THREE.PlaneGeometry(10, 1.95), new THREE.MeshStandardMaterial({ map: signTex, transparent: true, emissive: 0xffffff, emissiveMap: signTex, emissiveIntensity: .6 }));
  signFace.position.set(72, 6.9, -20.43); scene.add(signFace);
  W.shop = { pos: new THREE.Vector3(70, 0, -24), door: new THREE.Vector3(61.5, 0, -19.5), truckSpot: new THREE.Vector3(76, 0, -12.5) };
  // welcome sign
  const ws = new THREE.Group(); ws.position.set(-118, 0, -8.5); ws.rotation.y = .35; staticG.add(ws);
  const wood = S(0x7a5134, { roughness: .9 });
  [-2.6, 2.6].forEach(x => add(new THREE.BoxGeometry(.3, 3, .3), wood, ws, x, 1.5, 0));
  add(rbox(6.2, 2, .3, .08), S(0x2d4b39), ws, 0, 2.2, 0);
  const wTex = nameTexture(town.split(',')[0], { w: 1024, h: 330, fg: '#ffffff', sub: 'WELCOME TO ' + town.toUpperCase(), subFg: '#ffd29a' });
  // reorder: sub on top looks better; draw custom
  const wc = document.createElement('canvas'); wc.width = 1024; wc.height = 330; const wx = wc.getContext('2d'); wx.textAlign = 'center'; wx.fillStyle = '#ffd29a'; wx.font = '700 54px Inter, Arial'; wx.fillText('WELCOME TO', 512, 90);
  let fs = 150; wx.font = `900 ${fs}px Fraunces, Georgia, serif`; const tn = town.split(',')[0]; while (wx.measureText(tn).width > 940 && fs > 40) { fs -= 6; wx.font = `900 ${fs}px Fraunces, Georgia, serif`; } wx.fillStyle = '#fff'; wx.fillText(tn, 512, 225);
  const st = (town.split(',')[1] || '').trim(); if (st) { wx.fillStyle = '#cfe8d8'; wx.font = '600 44px Inter, Arial'; wx.fillText(st.toUpperCase(), 512, 300); }
  const wt = new THREE.CanvasTexture(wc); wt.colorSpace = THREE.SRGBColorSpace;
  const wf = new THREE.Mesh(new THREE.PlaneGeometry(5.9, 1.9), new THREE.MeshStandardMaterial({ map: wt, transparent: true })); wf.position.set(0, 2.2, .16); ws.add(wf);
  for (let k = 0; k < 9; k++) add(new THREE.IcosahedronGeometry(.3, 1), S([0xe76f51, 0xf4a261, 0xe9c46a, 0xffffff][k % 4]), ws, -2.6 + k * .65, .3, .7, false);
  // trees
  const trunkM = S(0x6e4a2e, { roughness: .95 }), leafMs = [0x4f9a3f, 0x3f8a3a, 0x63ad4c, 0x2f7a3a, 0x7bb54e].map(c => S(c, { roughness: .85 }));
  const treeP = (x, z, s = 1, kind = 0) => { const g = new THREE.Group(); g.position.set(x, 0, z); g.scale.setScalar(s); staticG.add(g);
    add(new THREE.CylinderGeometry(.22, .32, 3, 8), trunkM, g, 0, 1.5, 0);
    if (kind === 1) { for (let k = 0; k < 3; k++) add(new THREE.ConeGeometry(2.2 - k * .55, 2.6, 10), leafMs[3], g, 0, 3 + k * 1.4, 0); }
    else { const L = leafMs[(Math.floor(rnd() * 5))]; add(new THREE.IcosahedronGeometry(2, 1), L, g, 0, 4.2, 0); add(new THREE.IcosahedronGeometry(1.4, 1), L, g, 1.2, 3.6, .4); add(new THREE.IcosahedronGeometry(1.5, 1), L, g, -1.1, 3.8, -.5); } };
  // CC0 KayKit forest trees + rocks (falls back to simple shapes if they fail to load)
  const gl = new GLTFLoader(); const loadN = n => new Promise(r => gl.load('/x3d/assets/nature/' + n + '_Color1.gltf', g => r(g.scene), undefined, () => r(null)));
  const TREES = (await Promise.all(['Tree_1_A', 'Tree_1_B', 'Tree_1_C', 'Tree_4_A', 'Tree_4_B'].map(loadN))).filter(Boolean);
  const ROCKS = (await Promise.all(['Rock_1_A', 'Rock_2_A'].map(loadN))).filter(Boolean);
  [...TREES, ...ROCKS].forEach(m => { const b = new THREE.Box3().setFromObject(m); m.userData.h = b.max.y; m.traverse(o => { if (o.isMesh) { o.material.roughness = .92; o.material.metalness = 0; } }); });
  const tree = (x, z, s = 1, kind = 0, shadow = true) => { if (!TREES.length) return treeP(x, z, s, kind); const src = TREES[Math.min(TREES.length - 1, kind === 1 ? 3 + (rnd() * 2 | 0) : (rnd() * 3) | 0)];
    const m = src.clone(); m.position.set(x, -.15, z); m.scale.setScalar(s * (5.2 + rnd() * 2.2) / src.userData.h); m.rotation.y = rnd() * 6.28; m.traverse(o => { if (o.isMesh) o.castShadow = shadow; }); staticG.add(m); };
  const rock = (x, z, s = 1) => { if (!ROCKS.length) return; const m = ROCKS[(rnd() * ROCKS.length) | 0].clone(); m.position.set(x, -.05, z); m.scale.setScalar(s); m.rotation.y = rnd() * 6.28; staticG.add(m); };
  for (let k = 0; k < 75; k++) { const x = (rnd() - .5) * 300, z = (rnd() - .5) * 300; if (Math.abs(z) < 12 || Math.abs(x + 45) < 8) continue;
    const nearHouse = [...southX.map(v => [v, 21]), ...northX.map(v => [v, -21]), [70, -24], [-20, 21], [-62, -40], [-62, -75], [-28, 40], [-28, 75]].some(h => Math.abs(h[0] - x) < 14 && Math.abs(h[1] - z) < 12);
    if (nearHouse) continue; if (x > -32 && x < -5 && z > 24 && z < 45) continue; tree(x, z, .8 + rnd() * .7, rnd() < .35 ? 1 : 0); }
  tree(-28, 40.5, 1.1, 0); tree(-8.5, 41, .9, 1);
  // distant forest ring
  for (let k = 0; k < (MOBILE ? 50 : 90); k++) { const a = rnd() * Math.PI * 2, r = 175 + rnd() * 70; tree(Math.cos(a) * r, Math.sin(a) * r, 1.5 + rnd() * 1.2, rnd() < .5 ? 1 : 0, false); }
  for (let k = 0; k < 26; k++) { const x = (rnd() - .5) * 280, z = (rnd() - .5) * 280; if (Math.abs(z) < 14 || Math.abs(x + 45) < 10) continue; if (x > -34 && x < -4 && z > 8 && z < 46) continue; rock(x, z, 1 + rnd() * 1.6); }
  [[-7.5, 39], [-29, 27.5], [-8, 27]].forEach(p => rock(p[0], p[1], 1.1));
  // simple occluder boxes (house bodies + roofs, shop) for the camera
  W.boxes = []; staticG.updateMatrixWorld(true);
  staticG.traverse(o => { const so = o.userData && o.userData.solid; if (!so) return; const b = new THREE.Box3().setFromObject(so.body); b.max.y += so.top; W.boxes.push(b); });
  W.boxes.push(new THREE.Box3(new THREE.Vector3(58, 0, -32), new THREE.Vector3(81.5, 7, -20.4)));
  bake(staticG, scene);

  // glTF props (CC0 KayKit): streetlights, cars
  const loader = new GLTFLoader(); const load = (n) => new Promise(r => loader.load('/x3d/assets/' + n + '.gltf', g => r(g.scene), undefined, () => r(null)));
  Promise.all(['streetlight', 'car_sedan', 'car_stationwagon', 'car_hatchback', 'firehydrant', 'bush'].map(load)).then(([lamp, sedan, wagon, hatch, hyd, bush]) => {
  const prep = o => { o.traverse(m => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } }); return o; };
  if (lamp) for (let x = -140; x <= 140; x += 32) { const l = prep(lamp.clone()); l.scale.setScalar(6.6); l.position.set(x, 0, -6.2); l.rotation.y = Math.PI; scene.add(l);
    const bulb = add(new THREE.SphereGeometry(.28, 12, 8), eng.shared.lamp, scene, x, 6.15, -4.6, false);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(), color: 0xffcf8a, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 })); glow.scale.set(5, 5, 1); glow.position.copy(bulb.position); scene.add(glow); W.anims.push(() => glow.material.opacity = eng.lamps() * .5);
    const pool = new THREE.Mesh(new THREE.CircleGeometry(5, 24), new THREE.MeshBasicMaterial({ map: glowTex(), color: 0xffc06a, transparent: true, depthWrite: false, opacity: 0, blending: THREE.AdditiveBlending })); pool.rotation.x = -Math.PI / 2; pool.position.set(x, .1, -3.6); scene.add(pool); W.anims.push(() => pool.material.opacity = eng.lamps() * .35); }
  if (hyd) [[-58, 5.6], [-2, -5.6], [36, 5.6], [88, -5.6], [-96, 5.6]].forEach(p => { const h = prep(hyd.clone()); h.scale.setScalar(4); h.position.set(p[0], .12, p[1]); scene.add(h); });
  if (bush) { const bg = new THREE.Group(); [...southX, -20].forEach((x, i) => { if (x === -20 || i % 2) for (let k = 0; k < 4; k++) { const b = bush.clone(); b.scale.setScalar(2.6 + rnd()); b.position.set(x - 4.6 + k * 1.1, 0, 8.4); bg.add(b); } });
    northX.forEach((x, i) => { if (i % 2 === 0) for (let k = 0; k < 4; k++) { const b = bush.clone(); b.scale.setScalar(2.6 + rnd()); b.position.set(x + .5 + k * 1.1, 0, -8.4); bg.add(b); } });
    bg.traverse(m => { if (m.isMesh) m.castShadow = true; }); bake(bg, scene); }
  const carModels = [sedan, wagon, hatch].filter(Boolean);
  [[-27.3, 13, 0], [17.3, 13, 1], [-87.3, 13, 2], [-7, -13, 0], [27, -13, 2], [-105, -13, 1]].forEach(p => { const m = carModels[p[2] % carModels.length]; if (!m) return; const c = prep(m.clone()); c.scale.setScalar(4.6); c.position.set(p[0], 0, p[1]); c.rotation.y = p[1] > 0 ? Math.PI : 0; scene.add(c); });
  // moving car loop
  if (sedan) { const car = prep((wagon || sedan).clone()); car.scale.setScalar(4.6); scene.add(car); let x = -200; W.anims.push((dt) => { if (W.noTraffic) { car.visible = false; return; } car.visible = true; x += dt * 13; if (x > 220) x = -220; car.position.set(x, 0, opts.leftDrive ? -1.9 : 1.9); car.rotation.y = Math.PI / 2; }); }
  });

  // truck
  const truck = makeVehicle(opts.vehicle || 'pump', company, brand, opts.sub || ''); truck.traverse(o => { if (o.isMesh && o.material.metalness > .1) { o.material.envMap = eng.envTex; o.material.envMapIntensity = .45; } }); truck.position.copy(W.shop.truckSpot); truck.rotation.y = Math.PI; scene.add(truck); W.truck = truck;
  truck.traverse(o => { if (o.isMesh) { o.castShadow = true; } });
  // people
  const capTex = nameTexture(company.split(' ')[0].toUpperCase(), { w: 256, h: 128, fg: '#ffffff' });
  const P = W.people;
  await loadPeople(['owner', 'sarah', 'neighbor', 'jogger']);
  P.sarah = new Person({ model: 'sarah', height: 1.66, recolor: [[70, 170, 205, .9, 1]] });
  P.owner = new Person({ model: 'owner', height: 1.8, cap: true, capColor: 0x23302a, capTex });
  P.jogger = new Person({ model: 'jogger', height: 1.7, recolor: [[0, 40, 22, 1.1, 1.05]] });
  P.neighbor = new Person({ model: 'neighbor', height: 1.74 });
  Object.values(P).forEach(p => scene.add(p.root));
  P.sarah.root.position.set(-18.6, 0, 26.2); P.owner.root.position.set(73, 0, -9.4); P.owner.yawTarget = P.owner.yaw = -.6;
  P.neighbor.root.position.set(14.8, 0, -17); P.neighbor.set('wave'); P.neighbor.yawTarget = P.neighbor.yaw = 0;
  let jx = -120, jdir = 1; P.jogger.root.position.set(jx, 0, 6.2); P.jogger.set('run'); P.jogger.speed = 3;
  W.anims.push(dt => { jx += dt * 3 * jdir; if (jx > 120) jdir = -1; if (jx < -120) jdir = 1; P.jogger.root.position.x = jx; P.jogger.root.visible = eng.camera.position.y > 7; /* background extra: wide shots only */ P.jogger.yawTarget = jdir > 0 ? Math.PI / 2 : -Math.PI / 2; P.jogger.phase += dt * 10; });
  W.timers.push(setInterval(() => { P.neighbor.set(P.neighbor.state === 'wave' ? 'idle' : 'wave'); }, 4000));
  W.dispose = () => { W.timers.forEach(clearInterval); eng.scene.remove(scene); };
  W.update = (dt, t) => { Object.values(P).forEach(p => p.update(dt)); W.anims.forEach(a => a(dt, t)); };
  return W;
}
let _glow = null;
export function glowTex() { if (_glow) return _glow; const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d'); const g = x.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.3, 'rgba(255,255,255,.45)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 128, 128); _glow = new THREE.CanvasTexture(c); return _glow; }
