(function () {
  'use strict';
  var body = document.body;
  var MODE = body.getAttribute('data-mode') || 'septic';
  var REP = window.REP || { key: 'joel', name: 'Joel', cal: 'https://calendly.com/joel-nnamani-bookedjobshq/pilot-chat', email: 'joel.nnamani@bookedjobshq.com', base: '' };
  var CAL = REP.cal;
  var EMAIL = REP.email;
  function siteLink(p) { return REP.link ? REP.link(p) : p; }
  (function () { var nt = document.getElementById('calNewTab'); if (nt) nt.href = CAL; })();

  // average job values per trade (from the demo's niche data)
  var TRADES = {
    septic: ['Septic', 450], roofing: ['Roofing', 9500], hvac: ['HVAC', 650], plumbing: ['Plumbing', 550],
    electrical: ['Electrician', 2800], garage: ['Garage door repair', 450], tree: ['Tree removal', 1800],
    pest: ['Pest control', 300], waterdamage: ['Water damage restoration', 3500], mold: ['Mold remediation', 2500],
    foundation: ['Foundation repair', 6000], waterproofing: ['Basement waterproofing', 4500],
    gutters: ['Gutter cleaning and guards', 1200], pressure: ['Pressure washing', 350], chimney: ['Chimney sweep', 350],
    junk: ['Junk removal', 400], carpet: ['Carpet cleaning', 280], pool: ['Pool service', 400], fencing: ['Fencing', 3500],
    generator: ['Generator installation', 11000], appliance: ['Appliance repair', 250]
  };

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function clean(v) {
    return String(v || '').replace(/[\u0000-\u001f<>{}]/g, '').replace(/\s+/g, ' ').trim().slice(0, 30);
  }

  var qs = new URLSearchParams(location.search);
  var CO = clean(qs.get('co')), TOWN = clean(qs.get('town')), NICHE = clean(qs.get('niche')).toLowerCase();
  if (!TRADES[NICHE]) NICHE = '';

  /* ---------- personalisation ---------- */
  if (CO) {
    var chip = $('#hiChip');
    if (chip) { chip.textContent = 'Made for ' + CO; chip.hidden = false; }
    var f = $('#fBiz'); if (f) f.value = CO;
  }
  if (TOWN) { var a = $('#fArea'); if (a) a.value = TOWN; }

  /* ---------- video slot ---------- */
  (function () {
    var box = $('#trustVideo');
    if (!box) return;
    var own = box.getAttribute('data-src-' + REP.key);
    var src = (own !== null ? own : (REP.key === 'joel' ? box.getAttribute('data-src') : '') || '').trim();
    if (!src) return;
    var el, m;
    if (/\.(mp4|webm|mov|m4v)(\?|$)/i.test(src)) {
      el = document.createElement('video');
      el.src = src; el.controls = true; el.setAttribute('playsinline', ''); el.preload = 'metadata';
      var poster = box.getAttribute('data-poster'); if (poster) el.poster = poster;
    } else {
      var url = src;
      if ((m = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{6,})/))) url = 'https://www.youtube-nocookie.com/embed/' + m[1] + '?rel=0';
      else if ((m = src.match(/loom\.com\/share\/([\w]+)/))) url = 'https://www.loom.com/embed/' + m[1];
      else if ((m = src.match(/vimeo\.com\/(\d+)/))) url = 'https://player.vimeo.com/video/' + m[1];
      el = document.createElement('iframe');
      el.src = url; el.allow = 'autoplay; fullscreen; picture-in-picture'; el.allowFullscreen = true; el.title = REP.name + "'s video";
    }
    box.textContent = '';
    box.appendChild(el);
  })();

  /* ---------- trade select (any trade page) ---------- */
  var tradeSel = $('#fTrade');
  if (tradeSel) {
    var o0 = document.createElement('option'); o0.value = ''; o0.textContent = 'Pick your trade'; tradeSel.appendChild(o0);
    Object.keys(TRADES).forEach(function (k) {
      var o = document.createElement('option'); o.value = k; o.textContent = TRADES[k][0]; tradeSel.appendChild(o);
    });
    if (NICHE) tradeSel.value = NICHE;
    tradeSel.addEventListener('change', function () {
      var t = TRADES[tradeSel.value];
      if (t && jobIn) { jobIn.value = t[1]; calc(); }
      setDemoLinks();
    });
  }

  /* ---------- demo links carry params ---------- */
  function setDemoLinks() {
    $$('a[data-demo]').forEach(function (a) {
      var base = a.getAttribute('data-demo');
      var p = new URLSearchParams();
      if (CO) p.set('co', CO);
      if (TOWN) p.set('town', TOWN);
      var n = (tradeSel && tradeSel.value) || NICHE;
      if (MODE === 'any' && n) p.set('niche', n);
      var s = p.toString();
      a.href = siteLink(base + (s ? '?' + s : ''));
    });
  }
  setDemoLinks();

  /* ---------- multi-step form ---------- */
  var form = $('#applyForm');
  var steps = $$('.step', form);
  var cur = 0;
  var bar = $('#stepBar'), stepN = $('#stepN'), err = $('#formErr');

  function show(i) {
    cur = i;
    steps.forEach(function (s, k) { s.classList.toggle('on', k === i); });
    bar.style.width = ((i + 1) / steps.length * 100) + '%';
    stepN.textContent = 'STEP ' + (i + 1) + ' OF ' + steps.length;
    err.textContent = '';
  }
  function valid(i) {
    var s = steps[i], ok = true, first = null;
    // every radio group must be answered
    var names = {};
    $$('input[type=radio]', s).forEach(function (r) { names[r.name] = true; });
    Object.keys(names).forEach(function (n) {
      if (!$('input[name="' + n + '"]:checked', s)) { ok = false; first = first || $('input[name="' + n + '"]', s); }
    });
    $$('[required]', s).forEach(function (f) {
      if (f.type === 'radio') return;
      if (!f.value.trim() || (f.checkValidity && !f.checkValidity())) { ok = false; first = first || f; }
    });
    if (!ok) {
      err.textContent = 'Please answer everything on this step.';
      if (first) { var q = first.closest('.q,.fld') || first; q.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    }
    return ok;
  }
  $$('[data-next]', form).forEach(function (b) {
    b.addEventListener('click', function () { if (valid(cur)) { show(cur + 1); form.scrollIntoView({ behavior: 'smooth', block: 'start' }); } });
  });
  $$('[data-back]', form).forEach(function (b) {
    b.addEventListener('click', function () { show(cur - 1); });
  });

  function val(name) {
    var r = $('input[name="' + name + '"]:checked', form);
    return r ? r.value : '';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!valid(cur)) return;
    var name = $('#fName').value.trim(), email = $('#fEmail').value.trim();
    var parts = [];
    if (tradeSel) parts.push('Trade: ' + (TRADES[tradeSel.value] ? TRADES[tradeSel.value][0] : tradeSel.value));
    parts.push('Biz: ' + $('#fBiz').value.trim());
    parts.push('Area: ' + $('#fArea').value.trim());
    parts.push('Phone: ' + $('#fPhone').value.trim());
    var site = $('#fSite').value.trim(); if (site) parts.push('Site: ' + site);
    parts.push('Wants: ' + val('want'));
    parts.push('Jobs from: ' + val('source'));
    parts.push('Ads now: ' + val('ads'));
    parts.push('Job value: ' + val('value'));
    parts.push('Capacity: ' + val('capacity'));
    parts.push('Ready: ' + val('ready'));
    var ch = $('#fChallenge').value.trim(); if (ch) parts.push('Challenge: ' + ch);
    var summary = parts.join(' | ').slice(0, 900);

    var p = new URLSearchParams();
    p.set('name', name); p.set('email', email); p.set('a1', summary); p.set('hide_gdpr_banner', '1');
    var calUrl = CAL + '?' + p.toString();

    form.style.display = 'none';
    var done = $('#booked');
    done.classList.add('on');
    var mail = $('#mailFallback');
    if (mail && EMAIL) mail.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Free test application: ' + $('#fBiz').value.trim()) +
      '&body=' + encodeURIComponent(parts.join('\n'));
    var nt = $('#calNewTab'); if (nt) nt.href = calUrl;
    var holder = $('#calHolder');
    holder.textContent = '';
    var w = document.createElement('div');
    w.className = 'calendly-inline-widget';
    w.setAttribute('data-url', calUrl);
    holder.appendChild(w);
    var s = document.createElement('script');
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    s.async = true;
    document.body.appendChild(s);
    done.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  show(0);

  /* ---------- CTA buttons jump to form ---------- */
  $$('a[href="#apply"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      $('#apply').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ---------- calculator (example: extra jobs x job value) ---------- */
  var jobsIn = $('#cJobs'), jobIn = $('#cJob');
  if (tradeSel && tradeSel.value && TRADES[tradeSel.value] && jobIn) jobIn.value = TRADES[tradeSel.value][1];
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function calc() {
    if (!jobsIn || !jobIn) return;
    var jobs = Math.max(0, Number(jobsIn.value) || 0);
    var job = Math.max(0, Number(jobIn.value) || 0);
    var rev = jobs * job;
    $('#oJobsIn').textContent = jobs;
    $('#oJobs').textContent = jobs;
    $('#oJobVal').textContent = money(job);
    $('#oRev').textContent = money(rev);
    $('#oYear').textContent = money(rev * 12);
    $('#oBig').textContent = money(rev * 12);
  }
  [jobsIn, jobIn].forEach(function (el) { if (el) el.addEventListener('input', calc); });
  var reset = $('#cReset');
  if (reset) reset.addEventListener('click', function () {
    jobsIn.value = 4;
    jobIn.value = (tradeSel && TRADES[tradeSel.value]) ? TRADES[tradeSel.value][1] : body.getAttribute('data-job');
    calc();
  });
  calc();
})();
