import * as THREE from 'three';
import { createEngine, buildTown, MOBILE, glowTex } from './world.js';
import { createWarp } from './warp.js';
import { NICHES, NICHE_ORDER, COUNTRIES } from './niches.js';
import { PROPS } from './props.js';

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const REP = window.REP || { cal: 'https://calendly.com/joel-nnamani-bookedjobshq/pilot-chat', base: '' };
const CAL = REP.cal;
$$('.book').forEach(a => a.href = CAL);
const ANY = document.body.dataset.mode === 'any';

/* ---------- personalization: company, town, trade, country ---------- */
const qs = new URLSearchParams(location.search);
let CO = (qs.get('co') || '').trim().slice(0, 30), TOWN = (qs.get('town') || '').trim().slice(0, 30);
let NK = NICHES[qs.get('niche')] ? qs.get('niche') : 'septic', CK = COUNTRIES[qs.get('country')] ? qs.get('country') : 'us';
const N = () => NICHES[NK], C = () => COUNTRIES[CK];
const co = () => CO || (NK === 'septic' ? 'Laney Septic' : 'Your Company'), town = () => TOWN || C().town, townShort = () => town().split(',')[0];
const money = v => C().sym + Math.round(v).toLocaleString('en-US');
const nice = v => { const p = Math.pow(10, Math.max(0, Math.floor(Math.log10(Math.max(1, v))) - 1)); return Math.round(v / p) * p; };
// landing form
if ($('#iNiche')) { $('#iNiche').innerHTML = NICHE_ORDER.map(k => `<option value="${k}">${esc(NICHES[k].name)}</option>`).join(''); $('#iNiche').value = NK; $('#iNiche').onchange = e => { NK = e.target.value; heroName(); }; }
if ($('#iCountry')) { $('#iCountry').innerHTML = Object.entries(COUNTRIES).map(([k, c]) => `<option value="${k}">${esc(c.name)}</option>`).join(''); $('#iCountry').value = CK; $('#iCountry').onchange = e => { CK = e.target.value; $('#iTown').placeholder = 'e.g. ' + C().town; }; }
$('#iCo').value = CO; $('#iTown').value = TOWN; $('#iTown').placeholder = 'e.g. ' + C().town;
function heroName() { $('#hCo').textContent = CO || (ANY ? 'Your business' : 'Your company'); document.title = (CO || 'Your business') + ', 30 Days From Now | Booked Jobs Co.'; const t = $('#hTrade'); if (t) { const n = N().name; t.textContent = /^[A-Z]{2,}/.test(n) ? n : n.toLowerCase(); } }
heroName();
$('#iCo').addEventListener('input', e => { CO = e.target.value.trim(); heroName(); });
$('#iTown').addEventListener('input', e => { TOWN = e.target.value.trim(); });
const TODAY = new Date();
const fmt = d => d.toLocaleDateString(C().locale === 'en-US' || C().locale === 'en-CA' ? 'en-US' : 'en-GB', { weekday: 'short', month: 'short', day: 'numeric' });
const START = new Date(TODAY); START.setDate(START.getDate() + 3);
const dayDate = n => { const d = new Date(START); d.setDate(d.getDate() + n); return d; };
const shareUrl = () => { const u = new URL(location.origin + (REP.base || '') + (ANY ? '/try' : '/demo')); if (CO) u.searchParams.set('co', CO); if (TOWN) u.searchParams.set('town', TOWN); if (ANY || NK !== 'septic') u.searchParams.set('niche', NK); if (CK !== 'us') u.searchParams.set('country', CK); return u.toString(); };

/* ---------- audio: sound effects + pre-recorded narrator ---------- */
let AC = null, muted = false;
const ac = () => { if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { } } if (AC && AC.state === 'suspended') AC.resume(); return AC; };
function tone(f, d, type = 'sine', v = .1, delay = 0) { const a = ac(); if (!a || muted) return; const t = a.currentTime + delay, o = a.createOscillator(), g = a.createGain(); o.type = type; o.frequency.setValueAtTime(f, t); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(v, t + .015); g.gain.exponentialRampToValueAtTime(.0001, t + d); o.connect(g); g.connect(a.destination); o.start(t); o.stop(t + d + .05); }
function noise(dur, f0, f1, vol) { const a = ac(); if (!a || muted) return; const t = a.currentTime, n = a.sampleRate * dur | 0, b = a.createBuffer(1, n, a.sampleRate), d = b.getChannelData(0); for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
  const s = a.createBufferSource(); s.buffer = b; const f = a.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = .8; f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(f1, t + dur * .9);
  const g = a.createGain(); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + dur * .85); g.gain.exponentialRampToValueAtTime(.0001, t + dur); s.connect(f); f.connect(g); g.connect(a.destination); s.start(t); s.stop(t + dur); }
const sfx = {
  warp() { noise(5.4, 160, 3000, .25); const a = ac(); if (!a || muted) return; const t = a.currentTime, o = a.createOscillator(), g = a.createGain(), lp = a.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 500; o.type = 'sawtooth'; o.frequency.setValueAtTime(50, t); o.frequency.exponentialRampToValueAtTime(240, t + 5.3); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.08, t + 4.6); g.gain.exponentialRampToValueAtTime(.0001, t + 5.5); o.connect(lp); lp.connect(g); g.connect(a.destination); o.start(t); o.stop(t + 5.6); },
  arrive() { [392, 523, 659, 784, 1047].forEach((f, i) => tone(f, 1.2, 'sine', .06, i * .07)); },
  tap() { tone(1400, .05, 'square', .03); },
  ping() { tone(880, .25, 'sine', .08); tone(1320, .35, 'sine', .06, .09); },
  chime() { [523, 659, 784, 1047].forEach((f, i) => tone(f, .5, 'sine', .06, i * .08)); },
  whoosh() { noise(.9, 400, 2400, .1); },
  ring() { for (let i = 0; i < 2; i++) { tone(1180, .12, 'square', .025, i * .6); tone(1480, .12, 'square', .025, i * .6 + .14); } },
  engine(d) { const a = ac(); if (!a || muted) return; const t = a.currentTime, o = a.createOscillator(), g = a.createGain(), lp = a.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 260; o.type = 'sawtooth'; o.frequency.setValueAtTime(48, t); o.frequency.linearRampToValueAtTime(70, t + d * .4); o.frequency.linearRampToValueAtTime(52, t + d); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.05, t + .6); g.gain.setValueAtTime(.05, t + d - .8); g.gain.exponentialRampToValueAtTime(.0001, t + d); o.connect(lp); lp.connect(g); g.connect(a.destination); o.start(t); o.stop(t + d + .1); },
  tick() { tone(1900, .03, 'square', .02); },
};
let voiceMap = null, voiceBuf = null, voiceRaw = null, voiceSrc = null, voiceGain = null;
fetch('/x3d/assets/voice.json?v=2').then(r => r.json()).then(j => voiceMap = j).catch(() => { });
fetch('/x3d/assets/voice.mp3?v=2').then(r => r.arrayBuffer()).then(b => { voiceRaw = b; decodeVoice(); }).catch(() => { });
function decodeVoice() { const a = AC; if (!a || !voiceRaw || voiceBuf) return; a.decodeAudioData(voiceRaw.slice(0)).then(b => voiceBuf = b).catch(() => { }); }
function stopVoice() { try { voiceSrc && voiceSrc.stop(); } catch (e) { } voiceSrc = null; try { window.speechSynthesis && speechSynthesis.cancel(); } catch (e) { } }
// plays a narration line; returns its length in ms (0 when silent)
function speak(key, fallbackText) {
  stopVoice(); if (muted || mode !== 'story') return 0;
  const a = ac(); const seg = voiceMap && voiceMap[key];
  if (a && voiceBuf && seg) { const s = a.createBufferSource(); s.buffer = voiceBuf; if (!voiceGain) { voiceGain = a.createGain(); voiceGain.gain.value = 1.15; voiceGain.connect(a.destination); } s.connect(voiceGain); s.start(0, seg[0], seg[1]); voiceSrc = s; return seg[1] * 1000; }
  if (window.speechSynthesis && fallbackText) { const u = new SpeechSynthesisUtterance(fallbackText); u.lang = 'en-US'; u.rate = 1; u.pitch = .92; speechSynthesis.speak(u); return fallbackText.split(' ').length * 380; }
  return 0;
}
$('#mute').onclick = () => { muted = !muted; $('#mute').textContent = muted ? '×' : '♪'; if (muted) stopVoice(); };

/* ---------- engine ---------- */
const canvas = $('#gl');
const eng = createEngine(canvas); const camera = eng.camera; eng.setTOD('dusk');
const warp = createWarp(START, fmt);
let W = null, builtFor = '', adImage = '', extras = null, prop = null, propState = null, fixU = 0, fixGoal = 0;
async function ensureTown() {
  const key = [co(), town(), NK, CK].join('|'); if (W && builtFor === key) return; if (W) W.dispose();
  W = await buildTown(eng, co(), town(), { vehicle: N().vehicle, sub: N().sub, leftDrive: C().leftDrive });
  builtFor = key; buildRoute(); adImage = captureAd(); extras = buildExtras();
}
function resize() { eng.resize(); warp.resize(); }
addEventListener('resize', resize); resize();
function captureAd() {
  try {
    eng.setTOD('day'); eng.update(0); propState && propState.fix(0);
    const cam = camera.clone(); cam.fov = 38; cam.aspect = 1.25; cam.updateProjectionMatrix(); cam.position.set(62.5, 2.2, -3.6); cam.lookAt(74, 2.2, -14.5);
    const r = eng.renderer, size = new THREE.Vector2(); r.getSize(size); const pr = r.getPixelRatio(); r.setPixelRatio(1); r.setSize(1000, 800, false); r.render(eng.scene, cam);
    const shot = r.domElement.toDataURL('image/jpeg', .85); r.setPixelRatio(pr); r.setSize(size.x, size.y, false); eng.setTOD('dusk'); eng.update(0); resize();
    return shot;
  } catch (e) { return ''; }
}

/* ---------- 3D extras ---------- */
function labelSprite(lines, o = {}) {
  o = Object.assign({ bg: '#ffffff', fg: '#0b1a14', sub: '#4a5d55', accent: '#f39a3d', h: .8 }, o);
  const fs = [44, 32, 30], pad = 30, m = document.createElement('canvas').getContext('2d'); let Wd = 0;
  lines.forEach((l, i) => { m.font = `${i ? 600 : 800} ${fs[Math.min(i, 2)]}px Inter, Arial`; Wd = Math.max(Wd, m.measureText(l).width); });
  Wd = Math.ceil(Wd + pad * 2 + 44); const Hh = Math.ceil(pad * 1.5 + lines.reduce((s, l, i) => s + fs[Math.min(i, 2)] * 1.3, 0));
  const c = document.createElement('canvas'); c.width = Wd; c.height = Hh + 12; const x = c.getContext('2d');
  x.shadowColor = 'rgba(0,0,0,.3)'; x.shadowBlur = 12; x.fillStyle = o.bg; x.beginPath(); x.roundRect ? x.roundRect(4, 4, Wd - 8, Hh - 2, 30) : x.rect(4, 4, Wd - 8, Hh - 2); x.fill(); x.shadowColor = 'transparent';
  let y = pad * .75; lines.forEach((l, i) => { const f = fs[Math.min(i, 2)]; x.font = `${i ? 600 : 800} ${f}px Inter, Arial`; x.textBaseline = 'top';
    if (i === 0) { x.fillStyle = o.accent; x.beginPath(); x.arc(pad + 12, y + f * .55, 12, 0, 7); x.fill(); } x.fillStyle = i ? o.sub : o.fg; x.fillText(l, pad + 44, y); y += f * 1.3; });
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false, transparent: true })); s.renderOrder = 20;
  const k = o.h / (Hh + 12) * (lines.length > 1 ? 1.6 : 1); s.userData.base = V(Wd * k, (Hh + 12) * k, 1); s.scale.set(.001, .001, 1); s.userData.on = 0; s.userData.cur = 0; return s;
}
const poppers = [];
function show(s, on) { s.userData.on = on ? 1 : 0; }
function updatePoppers(dt) { poppers.forEach(s => { const u = s.userData; u.cur += (u.on - u.cur) * (1 - Math.exp(-dt * 10)); const k = Math.max(.0001, u.cur * (1 + Math.sin(Math.min(1, u.cur) * Math.PI) * .12 * u.on)); s.scale.set(u.base.x * k, u.base.y * k, 1); s.visible = u.cur > .01; }); }
function buildExtras() {
  poppers.length = 0; const g = new THREE.Group(); W.root.add(g); const E = { g };
  prop = PROPS[N().prop]; const pg = new THREE.Group(); g.add(pg); propState = prop.build(pg, W); propState.fix(0); fixU = 0; fixGoal = 0;
  E.notif = labelSprite(['NEW LEAD · Sarah M.', N().opts[N().pick], townShort() + ' · 0.4 mi away'], { h: 1.1 }); g.add(E.notif); poppers.push(E.notif);
  E.call = labelSprite(['Calling Sarah M.', 'from your business line'], { accent: '#2fbf7f', h: .9 }); g.add(E.call); poppers.push(E.call);
  E.booked = labelSprite(['Job done · Sarah M.', N().done], { accent: '#2fbf7f', h: 1 }); E.booked.position.set(prop.spot[0], 4.4, prop.spot[1]); g.add(E.booked); poppers.push(E.booked);
  E.hose = null;
  // ladder (for roof / gutter / chimney)
  if (prop.ladder) { const L = new THREE.Group(), lm = new THREE.MeshStandardMaterial({ color: 0xd9a441, roughness: .6 }); [-.28, .28].forEach(x => { const r = new THREE.Mesh(new THREE.BoxGeometry(.07, 4.6, .07), lm); r.position.set(x, 2.3, 0); r.castShadow = true; L.add(r); });
    for (let i = 0; i < 12; i++) { const r = new THREE.Mesh(new THREE.BoxGeometry(.56, .05, .05), lm); r.position.y = .3 + i * .36; L.add(r); }
    L.position.set(prop.ladder.x, 0, prop.ladder.z + .9); L.rotation.x = -.2; L.visible = false; g.add(L); E.ladder = L; }
  E.pins = [];
  [[-20, 21], [12, 21], [-12, -21], [44, 21], [-80, 21], [20, -21], [-80, -21], [100, 21], [-112, -21]].forEach(([x, z], i) => {
    const p = new THREE.Group(); p.position.set(x, 0, z); g.add(p);
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(.5, 1.4, 40, 16, 1, true), new THREE.MeshBasicMaterial({ color: 0x5cf0b0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })); beam.position.y = 20; p.add(beam);
    const orb = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(), color: 0x7dffc6, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 })); orb.scale.set(9, 9, 1); orb.position.y = 14; p.add(orb);
    const lab = labelSprite([i === 0 ? 'Sarah M. · booked' : 'Booked job ' + (i + 1)], { accent: '#2fbf7f', h: 1.6 }); lab.position.y = 17; p.add(lab); poppers.push(lab);
    p.userData = { beam, orb, lab, on: 0, cur: 0 }; E.pins.push(p); });
  return E;
}
function makeHose(points) { const E = extras; if (E.hose) { E.g.remove(E.hose); E.hose.geometry.dispose(); }
  const hc = new THREE.CatmullRomCurve3(points); E.hose = new THREE.Mesh(new THREE.TubeGeometry(hc, 180, .08, 8), new THREE.MeshStandardMaterial({ color: 0x2b2e33, roughness: .7 }));
  E.hose.castShadow = true; E.hose.geometry.setDrawRange(0, 0); E.hoseLen = E.hose.geometry.index.count; E.hoseT = .001; E.g.add(E.hose); }

/* ---------- camera rig ---------- */
const rig = { p: V(-80, 70, 140), t: V(0, 0, 0), shot: null, T: 0, yaw: 0, yawT: 0, pitch: 0, pitchT: 0, fovT: 40, cut: false, shake: 0 };
function setShot(fn, dur = 4, opts = {}) { rig.shot = { fn, dur, t0: rig.T, ease: opts.linear ? (u => u) : ease }; rig.fovT = opts.fov || 40; rig.cut = !!opts.cut; rig.shake = opts.shake || 0; }
const lerpV = (a, b, u) => a.clone().lerp(b, u);
const fly = (p0, t0, p1, t1) => u => [lerpV(V(...p0), V(...p1), u), lerpV(V(...t0), V(...t1), u)];
function pathShot(ps, ts) { const cp = new THREE.CatmullRomCurve3(ps.map(p => p.isVector3 ? p : V(...p))), ct = new THREE.CatmullRomCurve3(ts.map(p => p.isVector3 ? p : V(...p))); return u => [cp.getPoint(u), ct.getPoint(u)]; }
const lookAt = V(0, 0, 0);
function updateCamera(dt) {
  let P = rig.p, T = rig.t;
  if (rig.shot) { const s = rig.shot, u = clamp((rig.T - s.t0) / s.dur, 0, 1); const r = s.fn(s.ease(u), dt); P = r[0]; T = r[1]; }
  rig.yaw += (rig.yawT - rig.yaw) * (1 - Math.exp(-dt * 5)); rig.pitch += (rig.pitchT - rig.pitch) * (1 - Math.exp(-dt * 5));
  if (!drag) { rig.yawT *= Math.exp(-dt * .9); rig.pitchT *= Math.exp(-dt * .9); }
  const off = P.clone().sub(T); const portrait = camera.aspect < .8;
  off.applyAxisAngle(V(0, 1, 0), rig.yaw); off.y *= 1 + rig.pitch;
  const desired = T.clone().add(off);
  if (rig.shake) desired.add(V(Math.sin(rig.T * 1.7) * .03, Math.sin(rig.T * 2.3) * .025, Math.cos(rig.T * 1.3) * .03).multiplyScalar(rig.shake));
  const k = rig.cut ? 1 : 1 - Math.exp(-dt * 7); rig.cut = false;
  camera.position.lerp(desired, k); lookAt.lerp(T, k); camera.lookAt(lookAt);
  const fov = rig.fovT * (portrait ? 1.45 : camera.aspect < 1.2 ? 1.15 : 1);
  if (Math.abs(camera.fov - fov) > .01) { camera.fov += (fov - camera.fov) * Math.max(k, .1); camera.updateProjectionMatrix(); }
  eng.setFocus(T);
}
let drag = null;
canvas.addEventListener('pointerdown', e => { if (mode !== 'story') return; drag = { x: e.clientX, y: e.clientY }; canvas.setPointerCapture(e.pointerId); $('#hint').style.opacity = 0; });
canvas.addEventListener('pointermove', e => { if (!drag) return; rig.yawT = clamp(rig.yawT - (e.clientX - drag.x) * .004, -.9, .9); rig.pitchT = clamp(rig.pitchT + (e.clientY - drag.y) * .003, -.4, .6); drag = { x: e.clientX, y: e.clientY }; });
['pointerup', 'pointercancel'].forEach(ev => canvas.addEventListener(ev, () => drag = null));
const headOf = (p, dy = 1.5) => p.root.position.clone().add(V(0, dy * (p.o.height / 1.75), 0));
const fwd = p => V(Math.sin(p.yaw), 0, Math.cos(p.yaw));
function closeUp(p, dist = 2.6, side = .6, h = 1.55, dy = 1.5) { return () => { const f = fwd(p), s = V(f.z, 0, -f.x); const hd = headOf(p, dy); return [hd.clone().addScaledVector(f, dist).addScaledVector(s, side).add(V(0, h - dy, 0)), hd]; }; }

/* ---------- flow: slideshow-style start ---------- */
let mode = 'landing';
async function start() {
  if (mode !== 'landing') return; mode = 'loading'; ac(); decodeVoice();
  try { const d = document.documentElement; (d.requestFullscreen || d.webkitRequestFullscreen || (() => { })).call(d); } catch (e) { }
  const B = $('#blackout'); B.innerHTML = '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#6d8a7e;font-size:13px;letter-spacing:.2em">LOADING YOUR TOWN</div>'; B.classList.add('on');
  await new Promise(r => setTimeout(r, 480));
  document.body.classList.add('in-show', 'locked'); scrollTo(0, 0);
  await ensureTown();
  B.innerHTML = ''; mode = 'warp'; warp.start(); $('#warpHud').classList.add('on'); sfx.warp(); B.classList.remove('on');
  warp.onDate = (n, d, u) => { $('#wFill').style.width = (u * 100) + '%'; if (d) { $('#wDate').textContent = fmt(d); $('#wDay').textContent = 'DAY ' + n + (n === 30 ? ' · YOUR FUTURE' : ''); } };
  warp.onDone = () => {
    const F = $('#flash'); F.style.transition = 'none'; F.style.opacity = 1; $('#warpHud').classList.remove('on');
    document.body.classList.add('in-story'); mode = 'story'; sfx.arrive(); eng.setTOD('dusk'); perf.t = 0; perf.n = 0;
    requestAnimationFrame(() => { F.style.transition = 'opacity 1.4s ease'; F.style.opacity = 0; });
    try { history.replaceState(null, '', shareUrl().replace(location.origin, '')); } catch (e) { }
    goScene(0, true);
  };
}
$('#start').addEventListener('click', start); $$('[data-start]').forEach(b => b.addEventListener('click', start));
$('#who').addEventListener('submit', e => { e.preventDefault(); start(); });
$('#exit').onclick = () => { stopVoice(); try { document.fullscreenElement && document.exitFullscreen(); } catch (e) { } location.href = shareUrl(); };

/* ---------- story framework ---------- */
let sceneI = 0, runId = 0, auto = true, voiceEnd = 0;
const alive = id => id === runId;
const wait = (ms, id) => new Promise(r => setTimeout(() => r(alive(id)), ms));
const waitV = (ms, id) => wait(Math.max(ms, voiceEnd - performance.now() + 350), id);   // waits for the narrator to finish too
function say(meta, text, key) {
  const d = key ? speak(key, text) : 0; voiceEnd = performance.now() + d;
  $('#cMeta').textContent = meta; const el = $('#cText'); el.innerHTML = text.split(' ').map(w => `<span>${esc(w)}</span>`).join(' ');
  const per = d ? Math.min(90, d / Math.max(1, el.children.length) * .85) : 55;
  [...el.children].forEach((s, i) => setTimeout(() => s.classList.add('on'), 60 + i * per));
}
function prompt(t) { const p = $('#prompt'); if (!t) { p.classList.remove('on'); return; } p.textContent = t; p.classList.add('on'); }
let timerV = 0, timerGoal = 0, timerRate = 0;
function timer(on, v, done) { const t = $('#timer'); t.classList.toggle('on', !!on); t.classList.toggle('done', !!done); if (v !== undefined) { timerV = v; timerGoal = v; $('#tClock').textContent = '0:' + String(Math.floor(v)).padStart(2, '0'); } }
function runTimerTo(goal, secs) { timerGoal = goal; timerRate = (goal - timerV) / Math.max(.1, secs); }
function sms(kind, who, text, time) { const d = document.createElement('div'); d.className = 'card ' + kind; d.innerHTML = `<small><span>${esc(who)}</span><span>${esc(time || 'now')}</span></small>${text}`; $('#sms').appendChild(d); while ($('#sms').children.length > 3) $('#sms').firstChild.remove(); }
function panel(html) { const p = $('#panel'); if (!html) { p.classList.remove('on'); return; } p.innerHTML = `<div class="glass">${html}</div>`; p.classList.add('on'); }
const SCENES = [
  { name: 'The problem', run: scene1 }, { name: 'Your ad', run: scene2 }, { name: 'The lead', run: scene3 }, { name: 'She found you', run: scene4 },
  { name: 'Booked', run: scene5 }, { name: 'The job', run: scene6 }, { name: 'Friday report', run: scene7 }, { name: 'Day 30', run: scene8 },
];
SCENES.forEach((s, i) => { const b = document.createElement('button'); b.title = (i + 1) + '. ' + s.name; b.onclick = () => goScene(i); $('#dots').appendChild(b); });
function goScene(i, fromWarp) {
  i = clamp(i, 0, SCENES.length - 1); runId++; const id = runId; stopVoice(); voiceEnd = 0;
  const begin = () => {
    if (!alive(id)) return; sceneI = i;
    $$('#dots button').forEach((b, k) => { b.classList.toggle('on', k === i); b.classList.toggle('past', k < i); });
    $('#bNext').classList.remove('pulse'); $('#bNext').textContent = i === SCENES.length - 1 ? 'Replay ↺' : 'Next scene ▶';
    prompt(''); closePhone(true); panel(''); $('#endcard').classList.remove('on'); $('#sms').innerHTML = ''; timer(false);
    stage(i);
    SCENES[i].run(id, fromWarp).then(done => { if (!alive(id) || !done) return; if (auto && sceneI < SCENES.length - 1) setTimeout(() => alive(id) && goScene(sceneI + 1), 700); else $('#bNext').classList.add('pulse'); });
  };
  if (fromWarp) return begin();
  const D = $('#dip'); D.classList.add('on'); setTimeout(() => { begin(); setTimeout(() => D.classList.remove('on'), 120); }, 320);   // quick dip to black between scenes
}
$('#bNext').onclick = () => goScene(sceneI === SCENES.length - 1 ? 0 : sceneI + 1);
$('#bPrev').onclick = () => goScene(sceneI - 1);
$('#bPlay').onclick = () => { auto = !auto; $('#bPlay').textContent = auto ? '❚❚' : '▶'; $('#bPlay').title = auto ? 'Movie mode on' : 'Movie mode off'; };
addEventListener('keydown', e => { if (mode !== 'story' || e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return; if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goScene(sceneI + 1); } if (e.key === 'ArrowLeft') goScene(sceneI - 1); });

/* ---------- world state per scene ---------- */
const TRUCK_HOME = V(76, 0, -12.5), OWNER_HOME = V(73, 0, -9.4);
let truckCurve = null; const TRUCK_END_U = .985; let truckU = 0, truckDrive = 0;
function buildRoute() { const lz = C().leftDrive ? 1.9 : -1.9; truckCurve = new THREE.CatmullRomCurve3([V(76, 0, -12.5), V(70, 0, -12), V(64, 0, -8.5), V(60, 0, lz - 1.6), V(52, 0, lz), V(10, 0, lz), V(-6, 0, lz), V(-13.5, 0, 1.6), V(-20, 0, 3.4), V(-23, 0, 3.6)]); }
function placeTruck(u) { u = clamp(u, 0, 1); const p = truckCurve.getPointAt(u), q = truckCurve.getPointAt(Math.min(1, u + .004)); W.truck.position.copy(p); const dx = q.x - p.x, dz = q.z - p.z; if (dx * dx + dz * dz > 1e-8) W.truck.rotation.y = Math.atan2(-dz, dx); truckU = u; }
const truckRear = () => { const t = W.truck, f = V(Math.cos(t.rotation.y), 0, -Math.sin(t.rotation.y)); return t.position.clone().addScaledVector(f, (t.userData.rear || -3) + .3).add(V(0, .9, 0)).addScaledVector(V(-f.z, 0, f.x), 0); };
const SIDE_PATH = [V(-12.5, 0, 9), V(-10.8, 0, 21), V(-11.8, 0, 28)];
function sarahStart() { return prop.front ? { p: V(-18.8, 0, 15.6), yaw: Math.PI } : { p: V(-18.6, 0, 26.2), yaw: 0 }; }
function stage(i) {
  const S = W.people.sarah, O = W.people.owner, E = extras;
  S.path = null; O.path = null; S.root.visible = true; O.root.visible = true; O.root.position.y = 0; truckDrive = 0; W.noTraffic = false;
  [E.notif, E.call, E.booked].forEach(s => show(s, 0)); if (E.hose) { E.hose.geometry.setDrawRange(0, 0); E.hoseT = 0; } if (E.ladder) E.ladder.visible = false;
  E.pins.forEach(p => { p.userData.on = 0; show(p.userData.lab, 0); });
  fixGoal = i >= 6 ? 1 : 0; fixU = fixGoal; propState.fix(fixU);
  W.truck.position.copy(TRUCK_HOME); W.truck.rotation.y = Math.PI; truckU = 0;
  O.root.position.copy(OWNER_HOME); O.yaw = O.yawTarget = .5; O.set('idle'); O.setMood('neutral');
  const st = sarahStart(), sp = V(prop.spot[0], 0, prop.spot[1]);
  if (i <= 1) { S.root.position.copy(st.p); S.yaw = S.yawTarget = st.yaw; S.set('idle'); S.setMood('neutral'); }
  if (i >= 2 && i <= 4) { S.root.position.copy(sp); S.face(prop.look[0], prop.look[2]); S.yaw = S.yawTarget; S.set('phoneHappy'); S.setMood('smile'); }
  if (i === 5) { S.root.visible = false; placeTruck(0); }
  if (i >= 6) { S.root.position.copy(sp); S.yaw = S.yawTarget = Math.PI; S.set('idle'); S.setMood('happy'); placeTruck(0); }
  if (i === 6) { O.root.position.set(66, 0, -12); O.yaw = O.yawTarget = .35; O.set('phoneHappy'); O.setMood('happy'); }
}
const meta1 = () => `Day 4 · 7:38 PM · ${townShort()}`;

async function scene1(id, fromWarp) {
  eng.setTOD('dusk', fromWarp ? 0 : 1.5); const S = W.people.sarah;
  const sp = V(prop.spot[0], 0, prop.spot[1]), lk = V(...prop.look); const away = sp.clone().sub(V(lk.x, 0, lk.z)).normalize();
  const end = sp.clone().addScaledVector(away, 7).add(V(away.z * 3, 5, -away.x * 3)), mid = sp.clone().lerp(lk, .5).add(V(0, .8, 0));
  setShot(pathShot([V(-95, 62, -70), V(-60, 36, 8), V(-30, 18, prop.front ? -18 : 52), end], [V(-20, 0, 0), V(-18, 2, 22), mid, mid]), fromWarp ? 8 : 6.5);
  say(meta1(), `Meet Sarah. She lives a few streets from ${co()}. She's never heard of you.`, 'g_meet');
  if (!await waitV(fromWarp ? 3800 : 2600, id)) return;
  say(meta1(), 'It\'s a normal Tuesday evening. Dinner is done.', 'g_evening');
  const st = sarahStart(); await S.walkTo([st.p.clone().addScaledVector(V(Math.sin(st.yaw), 0, Math.cos(st.yaw)), 1.6), sp], 1.05); if (!alive(id)) return;
  S.face(lk.x, lk.z); S.set(prop.look === undefined || N().look === 'down' ? 'lookDown' : 'lookUp'); S.setMood('worried');
  await waitV(600, id); if (!alive(id)) return;
  // insert shot: the problem itself
  let ins = V(...prop.ins);
  if (N().look === 'down') { const d = sp.clone().sub(V(lk.x, 0, lk.z)).normalize(), pp = V(d.z, 0, -d.x); ins = V(lk.x, 0, lk.z).addScaledVector(pp, 3.4).addScaledVector(d, 1.6).add(V(0, 1.7 + lk.y * .4, 0)); }
  setShot(fly(ins.toArray(), [lk.x, lk.y, lk.z], ins.clone().lerp(lk, .08).toArray(), [lk.x, lk.y, lk.z]), 4.5, { cut: true, shake: 1 });
  say(meta1(), N().problem, 'p_' + NK);
  if (!await waitV(3800, id)) return;
  // reaction
  setShot(closeUp(S, 2.5, .7, 1.55, 1.45), 3, { cut: true, shake: 1, fov: 36 });
  if (!await wait(1600, id)) return;
  S.set('phone');
  setShot((u) => { const r = S.root, f = fwd(S), side = V(f.z, 0, -f.x); const ph = new THREE.Vector3(); S.phone.getWorldPosition(ph);
    const p = r.position.clone().addScaledVector(f, -2.3 + u * .4).addScaledVector(side, -1).add(V(0, 2.15, 0)); return [p, ph]; }, 4, { cut: true, shake: 1 });
  say(meta1(), 'So she does what everyone does now. She grabs her phone.', 'g_phone');
  return await waitV(3600, id);
}

async function scene2(id) {
  eng.setTOD('dusk', .8); const S = W.people.sarah;
  if (S.state !== 'phone') { S.root.position.set(prop.spot[0], 0, prop.spot[1]); S.face(prop.look[0], prop.look[2]); S.yaw = S.yawTarget; S.set('phone'); S.setMood('worried'); }
  setShot((u) => { const ph = new THREE.Vector3(); S.phone.getWorldPosition(ph); const f = fwd(S), side = V(f.z, 0, -f.x);
    const far = S.root.position.clone().addScaledVector(f, -2).addScaledVector(side, -.9).add(V(0, 2.1, 0)); const near = ph.clone().addScaledVector(f, -.22).addScaledVector(side, -.05).add(V(0, .16, 0));
    return [far.lerp(near, u), ph]; }, 2.2);
  say('7:39 PM · Sarah\'s phone', 'She opens Facebook. She\'s never heard of you. But there you are.', 'g_fb'); sfx.whoosh();
  if (!await wait(2000, id)) return;
  openPhone();
  if (!await wait(1300, id)) return;
  $('#feedIn').style.transform = `translateY(-${$('#adPost').offsetTop - 8}px)`;
  if (!await waitV(2300, id)) return;
  say('Your move', 'This is your ad. Tap it, like Sarah would.', 'g_tap');
  $('#adBtn').classList.add('hl'); $('#pTip').style.visibility = 'visible';
  await waitTap('#adBtn', id, 8000); if (!alive(id)) return;
  sfx.tap(); $('#adBtn').classList.remove('hl'); $('#pTip').textContent = 'Pick what\'s going on.'; $('#sheet').classList.add('on');
  say('The form', 'Three taps. About 20 seconds. That\'s all it takes.', 'g_form');
  const pick = await waitTap('.opt', id, 4800, true); if (!alive(id)) return;
  sfx.tap(); (pick || $$('.opt')[N().pick]).classList.add('sel'); $('#send').classList.add('ok'); $('#pTip').textContent = 'Now send it.';
  await waitTap('#send', id, 3000); if (!alive(id)) return;
  sfx.tap(); $('#done').classList.add('on'); $('#pTip').style.visibility = 'hidden'; sfx.chime();
  say('7:41 PM', 'Request sent. Now watch where it goes.', 'g_sent');
  if (!await waitV(2000, id)) return;
  closePhone(); S.set('phoneHappy'); S.setMood('smile');
  setShot(closeUp(S, 3, -.8, 1.7, 1.45), 2.5, { cut: true });
  return await wait(2200, id);
}

async function scene3(id) {
  eng.setTOD('dusk', .6); const S = W.people.sarah, O = W.people.owner, E = extras;
  const b = beamUp(S, V(73, 2.2, -9.4)); timer(false);
  setShot((u) => [lerpV(V(prop.spot[0] + 10, 14, prop.spot[1] + 16), V(46, 18, 22), u), b.core.position.clone()], 3.6, { linear: true });
  say('7:41 PM · Across town', 'Her request flies across town, straight to you.', 'g_flies'); sfx.whoosh();
  if (!await waitV(3500, id)) return;
  O.set('phone'); O.setMood('neutral'); O.face(66, 0);
  setShot(fly([64.5, 2.4, -2.4], [72.4, 1.6, -9.4], [67.4, 2.15, -5.2], [72.8, 1.75, -9.4]), 4, { cut: true, shake: 1 });
  sfx.ping(); E.notif.position.set(73, 3.3, -9.4); show(E.notif, 1);
  say('7:41 PM · Your phone', 'Name, address, the problem. Right on your phone. A brand-new customer.', 'g_phone2');
  if (!await wait(1200, id)) return; O.setMood('smile');
  return await waitV(4000, id);
}

async function scene4(id) {
  eng.setTOD('dusk', .5); const S = W.people.sarah, O = W.people.owner, E = extras;
  timer(false); S.set('phone'); S.setMood('neutral');
  setShot(closeUp(S, 2.4, .7, 1.6, 1.42), 3, { cut: true, shake: 1 });
  say('7:41 PM · A new customer', 'She\'s not a referral. She\'s not a repeat customer. She found you on her own.', 'g_text');
  if (!await wait(900, id)) return; sfx.ping();
  sms('me', co() + ' (auto-text)', `Hi Sarah, it's ${esc(co())}. Thanks for reaching out about the ${esc(N().opts[N().pick].toLowerCase())}. I'll give you a call shortly.`, '7:41 PM');
  S.setMood('smile');
  if (!await waitV(2600, id)) return;
  sms('', 'Sarah', 'Thank you! So glad I found you 🙏', '7:41 PM'); S.set('phoneHappy'); S.setMood('happy'); sfx.tick();
  if (!await wait(1800, id)) return;
  O.set('call'); O.setMood('smile'); show(E.notif, 0); E.call.position.set(73, 3.2, -9.4); show(E.call, 1); sfx.ring();
  setShot(closeUp(O, 2.6, -.8, 1.7, 1.55), 4, { cut: true, shake: 1 });
  say('Then a real call', 'Then you call her back, and talk about the job.', 'g_call');
  if (!await waitV(4200, id)) return;
  S.set('call'); S.setMood('happy'); show(E.call, 0); timer(false); sfx.chime();
  sms('sys', 'Your phone', '✓ New customer: Sarah M. · found you on Facebook', '7:42 PM');
  setShot(closeUp(S, 2.5, -.6, 1.6, 1.45), 4, { cut: true, shake: 1 });
  say('A fuller calendar', 'That\'s how your calendar fills up. New homeowners finding you, on top of your referrals, every single week.', 'g_52');
  return await waitV(4500, id);
}

async function scene5(id) {
  eng.setTOD('night', 2.5); const S = W.people.sarah, O = W.people.owner;
  S.set('call'); S.setMood('happy'); O.set('call'); O.setMood('smile');
  setShot(u => { const a = 2.2 + u * .5; return [V(-20 + Math.cos(a) * 70, 34, 10 + Math.sin(a) * 70), V(10, 0, 0)]; }, 16, { linear: true });
  say('7:44 PM · On the call', `You pick a time together. Drag Sarah's job onto your calendar.`, 'g_drag');
  if (!await wait(1400, id)) return;
  const days = [1, 2, 3, 4, 5].map(n => dayDate(n + 2)); const times = ['8 AM', '10 AM', '1 PM', '3 PM'];
  const names = ['Ellis', 'Park St', 'Gray', 'Webb', 'Diaz', 'Cole', 'Hwy 74', 'Reyes', 'Patel'];
  const keys = ['0,0', '0,2', '1,1', '2,0', '2,3', '3,0', '4,1', '4,2', '1,3'], busy = {}; keys.forEach((k, i) => busy[k] = `${N().busy[i]} · ${names[i]}`);
  let html = `<h3>Your calendar · next week</h3><div class="sub">Busy slots are already blocked. Example jobs.</div>
   <div class="tray"><div class="jobcard" id="job"><span class="dot"></span><div><b>Sarah M. · ${esc(N().job)}</b>${esc(N().opts[N().pick])}</div></div><span class="arrow">← drag onto an open slot</span></div>
   <div class="cal"><div></div>${days.map(d => `<div class="hd">${d.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()} ${d.getDate()}</div>`).join('')}`;
  times.forEach((t, r) => { html += `<div class="tm">${t}</div>`; for (let c = 0; c < 5; c++) { const k = c + ',' + r; html += busy[k] ? `<div class="slot busy">${esc(busy[k])}</div>` : `<div class="slot open" data-k="${k}">open</div>`; } });
  html += '</div>'; panel(html);
  const picked = await dragJob(id, auto ? Math.max(6000, voiceEnd - performance.now() + 1200) : 0); if (!alive(id) || !picked) return;
  const [c, r] = picked.dataset.k.split(',').map(Number); const when = `${days[c].toLocaleDateString('en-US', { weekday: 'long' })} ${times[r].replace(' ', ':00 ')}`;
  picked.classList.add('booked'); picked.textContent = 'Sarah M. ✓'; sfx.chime();
  say('Booked', `Booked for ${when}. She gets a confirmation text right away.`, 'g_booked');
  if (!await wait(1800, id)) return; panel('');
  sms('me', co(), `You're booked for ${esc(when)}. We'll text you when we're on the way.`, '7:45 PM'); sfx.ping();
  S.set('phoneHappy');
  return await waitV(3600, id);
}
function dragJob(id, autoMs) {
  return new Promise(res => {
    const job = $('#job'); let done = false, sx = 0, sy = 0, dragging = false;
    const slots = $$('.slot.open');
    const hit = (x, y) => slots.find(s => { const r = s.getBoundingClientRect(); return x > r.left && x < r.right && y > r.top && y < r.bottom; });
    const finish = (slot) => { if (done || !slot) return; done = true; job.style.visibility = 'hidden'; res(slot); };
    job.addEventListener('pointerdown', e => { dragging = true; sx = e.clientX; sy = e.clientY; job.setPointerCapture(e.pointerId); job.classList.add('drag'); job.style.transition = 'none'; });
    job.addEventListener('pointermove', e => { if (!dragging) return; job.style.transform = `translate(${e.clientX - sx}px,${e.clientY - sy}px) scale(1.05)`; slots.forEach(s => s.classList.toggle('hot', s === hit(e.clientX, e.clientY))); });
    job.addEventListener('pointerup', e => { dragging = false; job.classList.remove('drag'); const s = hit(e.clientX, e.clientY); if (s) { sfx.tap(); finish(s); } else { job.style.transition = 'transform .3s'; job.style.transform = ''; } });
    slots.forEach(s => s.addEventListener('click', () => { sfx.tap(); finish(s); }));
    if (autoMs) setTimeout(() => { if (done || dragging || !alive(id)) return; const target = slots.find(s => s.dataset.k === '3,1') || slots[0]; const jr = job.getBoundingClientRect(), tr = target.getBoundingClientRect();
      job.style.transition = 'transform 1.1s cubic-bezier(.4,0,.2,1)'; job.style.transform = `translate(${tr.left + tr.width / 2 - jr.left - jr.width / 2}px,${tr.top + tr.height / 2 - jr.top - jr.height / 2}px) scale(.8)`; target.classList.add('hot');
      setTimeout(() => finish(target), 1150); }, autoMs);
    const chk = setInterval(() => { if (!alive(id)) { clearInterval(chk); res(null); } else if (done) clearInterval(chk); }, 300);
  });
}

async function scene6(id) {
  eng.setTOD('dawn'); eng.setTOD('day', 9); const S = W.people.sarah, O = W.people.owner, E = extras; W.noTraffic = true;
  const when = dayDate(5); const work = N().work, sp = V(prop.spot[0], 0, prop.spot[1]), wk = V(prop.work[0], 0, prop.work[1]), lk = V(...prop.look);
  say(`${fmt(when)} · 9:48 AM`, 'Thursday morning. You head out.', 'g_morning');
  setShot(fly([66, 3, -1], [74, 1.4, -10], [64, 4, 1], [74, 1.6, -11]), 3);
  await O.walkTo([V(73.5, 0, -10.6)], 1.4); if (!alive(id)) return;
  O.root.visible = false; sfx.engine(9); truckDrive = 1; W.truck.setLights(true);
  setShot(() => { const t = W.truck, f = V(Math.cos(t.rotation.y), 0, -Math.sin(t.rotation.y)); const side = V(-f.z, 0, f.x);
    return [t.position.clone().addScaledVector(f, -13).addScaledVector(side, C().leftDrive ? 6 : -6).add(V(0, 7.5, 0)), t.position.clone().addScaledVector(f, 6).add(V(0, 1.5, 0))]; }, 1);
  await waitV(1200, id); if (!alive(id)) return;
  say(`${fmt(when)} · 9:52 AM`, `Your name on the side, rolling through ${townShort()}.`, 'g_truck');
  while (alive(id) && truckU < TRUCK_END_U) await wait(200, id); if (!alive(id)) return;
  truckDrive = 0; W.truck.setLights(false);
  setShot(fly([-6, 6, 14], [-18, 1.5, 4], [-4, 8, 18], [-14, 1, 14]), 3);
  await waitV(200, id); if (!alive(id)) return;
  say('10:00 AM sharp', 'Right on time. Sarah sees you pull up.', 'g_ontime');
  O.root.visible = true; O.root.position.set(-16.5, 0, 5.4); O.set('idle'); O.setMood('smile');
  const st = sarahStart(); S.root.visible = true; S.root.position.copy(st.p); S.yaw = S.yawTarget = st.yaw;
  const sw = prop.front ? V(-21.5, 0, 12.8) : sp.clone().add(V(1.6, 0, 1.2));
  S.walkTo([st.p.clone().addScaledVector(V(Math.sin(st.yaw), 0, Math.cos(st.yaw)), 1.4), sw], 1.1).then(() => { if (!alive(id)) return; S.face(wk.x, wk.z); S.set('wave'); S.setMood('happy'); });
  if (!await wait(1400, id)) return;
  const route = prop.front ? [wk] : [...SIDE_PATH, wk];
  if (work === 'hose') makeHose([truckRear(), ...(prop.front ? [] : SIDE_PATH.map(p => p.clone().setY(.1))), wk.clone().setY(.15), lk.clone().setY(Math.min(lk.y, .4))]);
  const tgt = prop.ladder ? V(prop.ladder.x, 0, prop.ladder.z + 1.25) : wk;
  const walk = O.walkTo(prop.front ? [tgt] : [...SIDE_PATH, tgt], 1.6);
  setShot(() => { const p = O.root.position; return [p.clone().add(V(7, 6, 6)), p.clone().add(V(0, 1, 0))]; }, 1);
  await walk; if (!alive(id)) return;
  // the work itself
  if (prop.ladder) { E.ladder.visible = true; O.face(prop.ladder.x, prop.ladder.z - 3); O.set('climb'); const y0 = performance.now();
    setShot(fly([prop.ladder.x + 4.5, 3.2, prop.ladder.z + 7], [prop.ladder.x - .8, 3, prop.ladder.z], [prop.ladder.x + 3.6, 4, prop.ladder.z + 6.2], [prop.ladder.x - 1, 3.6, prop.ladder.z]), 6, { shake: 1 });
    while (alive(id) && performance.now() - y0 < 2400) { O.root.position.y = Math.min(prop.ladder.top, (performance.now() - y0) / 2400 * prop.ladder.top); O.root.position.z = prop.ladder.z + 1.25 - O.root.position.y * .2; await wait(40, id); }
    O.set('work');
  } else { O.face(lk.x, lk.z); O.set(work === 'haul' ? 'kneel' : work === 'hose' ? 'kneel' : 'kneel');
    setShot(fly(prop.ins, [lk.x, Math.max(.6, lk.y), lk.z], [prop.ins[0] * .98 + wk.x * .02, prop.ins[1] * .9, prop.ins[2] * .98 + wk.z * .02], [lk.x, Math.max(.6, lk.y), lk.z]), 6, { shake: 1 }); }
  if (!alive(id)) return;
  fixGoal = 1;
  say('10:06 AM', N().work_line, 'w_' + NK);
  if (!await waitV(5200, id)) return;
  if (prop.ladder) { O.set('climb'); const y0 = performance.now(); while (alive(id) && performance.now() - y0 < 1600) { O.root.position.y = Math.max(0, prop.ladder.top * (1 - (performance.now() - y0) / 1600)); await wait(40, id); } O.root.position.y = 0; }
  O.set('idle'); O.face(sw.x, sw.z); O.setMood('happy'); show(E.booked, 1); sfx.chime();
  setShot(closeUp(S, 3.2, .9, 1.7, 1.45), 4, { cut: true, shake: 1 });
  say('10:41 AM', `Job done. And Sarah now has a ${N().trade} company she'll call again, and tell her neighbors about.`, 'g_done');
  return await waitV(4200, id);
}

async function scene7(id) {
  eng.setTOD('day', 1.2);
  setShot(fly([58, 3, 0], [66, 1.6, -12], [61, 2.4, -4.5], [66, 1.7, -12]), 6, { shake: 1 });
  say('Friday · 4:00 PM', 'Every Friday, a plain-English report lands in your inbox. New customers, booked jobs, and what they\'re worth. These are example numbers.', 'g_report');
  if (!await wait(1500, id)) return;
  const wk = [[3, 1], [5, 2], [6, 3], [7, 3]];
  panel(`<h3>${esc(co())} · Pilot report</h3><div class="sub">Weeks 1 to 4 · <b style="color:#ffd29a">Example numbers</b> to show the format</div>
   <div class="kp"><div><b data-n="21">0</b><span>new people reached out</span></div><div><b data-n="9">0</b><span>jobs booked</span></div><div><b data-n="${nice(N().avg * C().mult * 9 * .6)}" data-m="1">0</b><span>revenue booked</span></div><div><b data-n="9">0</b><span>new customers, not referrals</span></div></div>
   <div class="legend"><span><i style="background:#45b386"></i>New requests</span><span><i style="background:#f39a3d"></i>Booked</span></div>
   <div class="bars">${wk.map((w, i) => `<div class="col"><div class="stack" data-h="${w[0] / 7 * 100}"><div class="bk" style="flex:${w[1]}"></div><div class="l" style="flex:${w[0] - w[1]}"></div></div><small>Wk ${i + 1} · ${w[0]} / ${w[1]}</small></div>`).join('')}</div>
   <div class="ex">Your real numbers depend on your area and your prices. You'll see them every Friday, good or bad.</div>`);
  setTimeout(() => { $$('.stack').forEach(s => s.style.height = s.dataset.h + '%'); countUp(); sfx.chime(); }, 300);
  return await waitV(9000, id);
}
function countUp() { $$('[data-n]').forEach(el => { const n = +el.dataset.n, isM = el.dataset.m, s = el.dataset.s || '', t0 = performance.now(); const f = () => { const k = Math.min(1, (performance.now() - t0) / 1400); const v = Math.round(n * ease(k)); el.textContent = isM ? money(v) : v + s; if (k < 1) requestAnimationFrame(f); }; f(); }); }

async function scene8(id) {
  eng.setTOD('dusk', 3); const E = extras; W.noTraffic = false;
  setShot(u => { const a = -.4 + u * 1.2; return [V(-10 + Math.cos(a) * 125, 70 - u * 12, Math.sin(a) * 125), V(-10, 0, 0)]; }, 24, { linear: true });
  say(`Day 30 · ${fmt(dayDate(30))}`, 'Thirty days later. Every light is a booked job from someone who found you on Facebook. People who had never heard your name.', 'g_day30');
  for (let i = 0; i < E.pins.length; i++) { if (!await wait(i ? 650 : 1500, id)) return; E.pins[i].userData.on = 1; show(E.pins[i].userData.lab, 1); tone(660 + i * 60, .3, 'sine', .06); }
  if (!await waitV(1800, id)) return;
  say('Your call', `${co()}, this could be your next 30 days. Extra jobs on top of your referrals, and more money coming in. Keep going, or walk away.`, 'g_final');
  if (!await wait(1800, id)) return;
  const m = C().mult, j0 = nice(N().avg * m);
  panel(`<div class="fin"><div class="kicker">Day 30 · you decide</div><h2>Keep going, or walk away.</h2><div class="sub">No setup fee. No long contract. Play with the numbers:</div></div>
   <div class="roi"><div><label>Extra jobs a month <b id="rb"></b></label><input type="range" id="rB" min="1" max="15" step="1" value="4"><label>Average job value <b id="rj"></b></label><input type="range" id="rJ" min="${nice(j0 * .3)}" max="${nice(j0 * 3)}" step="${nice(j0 * .05)}" value="${j0}"></div>
   <div class="out"><div><b id="oV">0</b><span>extra jobs a year</span></div><div><b id="oJ">0</b><span>extra a month</span></div><div><b id="oR">0</b><span>extra a year</span></div></div></div>
   <div class="ex">Example math only, on top of your referrals. Not a promise. Real results depend on your area and your prices.</div>
   <div class="ctas"><a class="pill-btn big" href="${CAL}" target="_blank" rel="noopener">Book a 15-min call</a><button class="pill-btn ghost big" id="replay">↺ Watch again</button><button class="pill-btn ghost big" id="copy">Copy this demo link</button></div>`);
  const roi = () => { const x = +$('#rB').value, j = +$('#rJ').value; $('#rb').textContent = x; $('#rj').textContent = money(j); $('#oV').textContent = x * 12; $('#oJ').textContent = money(nice(x * j)); $('#oR').textContent = money(nice(x * j * 12)); };
  $('#rB').oninput = roi; $('#rJ').oninput = roi; roi();
  $('#replay').onclick = () => goScene(0); $('#copy').onclick = async () => { try { await navigator.clipboard.writeText(shareUrl()); $('#copy').textContent = 'Link copied ✓'; } catch (e) { prompt(shareUrl()); } };
  return false;
}

function waitTap(sel, id, autoMs, multi) {
  return new Promise(res => { let done = false; const els = multi ? $$(sel) : [$(sel)];
    const fin = (el) => { if (done) return; done = true; els.forEach(e => e.removeEventListener('click', h)); res(el); };
    const h = e => fin(e.currentTarget); els.forEach(e => e.addEventListener('click', h));
    if (auto) setTimeout(() => fin(null), Math.max(autoMs, voiceEnd - performance.now() + 600));
    const chk = setInterval(() => { if (!alive(id)) { clearInterval(chk); fin(null); } else if (done) clearInterval(chk); }, 300); });
}
function openPhone() {
  const ini = co().split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase(), n = N();
  $('#pScreen').innerHTML = `
  <div class="fb-top"><b>facebook</b><span><i></i><i></i></span></div>
  <div class="feed"><div class="feed-in" id="feedIn">
    <div class="post"><div class="ph"><div class="av" style="background:#8e6bbf">${esc(townShort()[0] || 'T')}</div><div><b>${esc(townShort())} Community Board</b><small>2h · Group</small></div></div><div class="pt">Fall festival this Saturday at the park! Bring a chair 🍂</div><div class="pimg" style="background:linear-gradient(135deg,#f6b26b,#e06666)"></div><div class="pact"><span>Like</span><span>Comment</span><span>Share</span></div></div>
    <div class="post"><div class="ph"><div class="av" style="background:#3d85c6">JM</div><div><b>Jen Miller</b><small>5h</small></div></div><div class="pt">First pumpkin pie of the season, if anyone needs me I'll be here.</div><div class="pimg" style="background:linear-gradient(135deg,#ffd966,#e69138)"></div></div>
    <div class="post" id="adPost"><div class="ph"><div class="av" style="background:#2f8f6a">${esc(ini)}</div><div><b>${esc(co())}</b><small>Sponsored</small></div></div>
      <div class="pt">${esc(n.adHead)} ${esc(townShort())} homeowners, we can help this week. Local, licensed, on time.</div>
      <div class="pimg" style="background-image:url(${adImage || ''});background-color:#9fc7e8"></div>
      <div class="adbar"><div><small>${esc(townShort())} · Local ${esc(n.trade)}</small><b>${esc(n.adCta)}</b></div><button class="adbtn" id="adBtn">${esc(n.btn)}</button></div></div>
    <div class="post"><div class="pt" style="padding-top:12px">…</div></div>
  </div></div>
  <div class="sheet" id="sheet"><h4>${esc(co())}</h4><p>${esc(n.adCta)}. We'll text you in under a minute.</p>
    ${n.opts.map(o => `<button class="opt">${esc(o)}</button>`).join('')}
    <div class="fld"><span>Name</span><b>Sarah M.</b></div><div class="fld"><span>Phone</span><b>${esc(C().phone)}</b></div>
    <button class="send" id="send">Send request</button></div>
  <div class="done" id="done"><div class="ck">✓</div><h4>Request sent</h4><p>${esc(co())} will text you in under a minute.</p></div>`;
  $('#pTip').textContent = 'Tap the ad, like Sarah would.'; $('#pTip').style.visibility = 'hidden';
  $('#phoneUI').classList.remove('leave'); $('#phoneUI').classList.add('on'); document.body.classList.add('phone-open');
}
function closePhone(instant) { const p = $('#phoneUI'); document.body.classList.remove('phone-open'); if (!p.classList.contains('on')) return; if (instant) { p.classList.remove('on', 'leave'); return; } p.classList.add('leave'); setTimeout(() => p.classList.remove('on', 'leave'), 650); }

const beams = [];
function beamUp(S, to) {
  const g = new THREE.Group(); eng.scene.add(g);
  const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(), color: 0xffc06a, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); core.scale.set(2.2, 2.2, 1); g.add(core);
  const trail = []; for (let i = 0; i < 24; i++) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(), color: 0xffa64a, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 1 - i / 24 })); s.scale.setScalar(1.6 * (1 - i / 26)); g.add(s); trail.push(s); }
  const p0 = new THREE.Vector3(); S.phone.getWorldPosition(p0); core.position.copy(p0);
  const curve = new THREE.QuadraticBezierCurve3(p0, V(25, 42, 10), to); const b = { g, core, trail, curve, hist: [], t: 0 }; beams.push(b); return b;
}
function updateBeams(dt) { for (let i = beams.length - 1; i >= 0; i--) { const b = beams[i]; b.t += dt / 3.2; const p = b.curve.getPoint(ease(Math.min(1, b.t))); b.core.position.copy(p); b.hist.unshift(p.clone()); b.hist.length = Math.min(b.hist.length, 48);
  b.trail.forEach((s, k) => { const h = b.hist[k * 2]; if (h) s.position.copy(h); }); if (b.t > 1.15) { eng.scene.remove(b.g); beams.splice(i, 1); } } }

/* ---------- main loop ---------- */
const clk = new THREE.Clock(); const perf = { t: 0, n: 0, level: 0 };
function loop() {
  requestAnimationFrame(loop); const raw = clk.getDelta(); const dt = Math.min(raw, qs.has('test') ? .6 : .1); rig.T += dt;
  if (mode === 'landing' || mode === 'loading' || mode === 'warp') { warp.update(dt); eng.renderer.render(warp.scene, warp.cam); return; }
  if (!W) return;
  if (perf.level < 2 && !qs.has('test')) { perf.t += raw; perf.n++; if (perf.t > 4) { const fps = perf.n / perf.t; if (fps < 38) { perf.level++; eng.degrade(perf.level); resize(); } perf.t = 0; perf.n = 0; } }
  updateCamera(dt); W.update(dt, rig.T); updateBeams(dt); updatePoppers(dt); eng.update(dt);
  if (timerV < timerGoal) { timerV = Math.min(timerGoal, timerV + timerRate * dt); $('#tClock').textContent = '0:' + String(Math.floor(timerV)).padStart(2, '0'); }
  if (truckDrive) { const len = truckCurve.getLength(); const prev = truckU; placeTruck(Math.min(TRUCK_END_U, truckU + dt * 12 / len * (truckU < .05 ? .5 : truckU > .92 ? .55 : 1))); W.truck.userData.dist = (W.truck.userData.dist || 0) + (truckU - prev) * len; }
  W.truck.tick(rig.T, !!truckDrive, W.truck.userData.dist || 0); if (!truckDrive) W.truck.setLights(eng.lamps() > .5);
  if (extras) { const E = extras;
    if (E.hose && E.hoseT > 0 && E.hoseT < 1) { E.hoseT = Math.min(1, E.hoseT + dt / 4.5); E.hose.geometry.setDrawRange(0, Math.floor(E.hoseLen * E.hoseT / 3) * 3); }
    if (fixU !== fixGoal) { fixU = fixGoal > fixU ? Math.min(fixGoal, fixU + dt / 4.5) : fixGoal; propState.fix(ease(fixU)); }
    propState.update && propState.update(dt, rig.T, fixU);
    E.pins.forEach((p, i) => { const u = p.userData; u.cur += (u.on - u.cur) * (1 - Math.exp(-dt * 3)); u.beam.material.opacity = u.cur * (.22 + Math.sin(rig.T * 3 + i) * .05); u.orb.material.opacity = u.cur * .9; u.beam.scale.y = Math.max(.01, u.cur); u.beam.position.y = 20 * u.cur; }); }
  eng.render();
}
window.__demo = { goScene: i => goScene(i), get W() { return W; }, setAuto: v => { auto = v; } };
loop();
