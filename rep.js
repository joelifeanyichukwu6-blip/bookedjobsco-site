/* Booked Jobs Co. sales rep switch.
   /vera/... (or ?rep=vera) shows Vera's calendar, name and keeps links inside /vera.
   Default is Joel. Load this in <head> before other scripts. */
(function () {
  var JOEL = { key: 'joel', name: 'Joel', cal: 'https://calendly.com/joel-nnamani-bookedjobshq/pilot-chat', email: 'joel.nnamani@bookedjobshq.com', base: '' };
  var REPS = {
    vera: { key: 'vera', name: 'Vera', cal: 'https://calendly.com/omonyevera/job-call-with-vera', email: '', base: '/vera' }
  };
  var k = '';
  try {
    var m = location.pathname.match(/^\/(vera)(\/|$)/);
    if (m) k = m[1];
    else { var q = new URLSearchParams(location.search).get('rep'); if (q && REPS[q]) k = q; }
  } catch (e) { }
  var R = window.REP = REPS[k] || JOEL;
  var de = document.documentElement;
  de.setAttribute('data-rep', R.key);
  if (!R.email) {
    var st = document.createElement('style');
    st.textContent = '.rep-email,a[href^="mailto:"]{display:none!important}';
    (document.head || de).appendChild(st);
  }

  var CAL_RE = /^https:\/\/calendly\.com\/[^?#]+/;
  var ASSET_RE = /\.(css|js|mjs|json|png|jpe?g|gif|svg|ico|webp|mp4|webm|mp3|wav|glb|gltf|webmanifest|woff2?|txt|pdf)(\?|#|$)/i;

  function pagePath(p) {
    // "/septic.html" -> "/septic", "/index.html" or "/" -> ""
    p = p.replace(/\.html(?=$|[?#])/, '');
    if (p === '/' || p === '/index') return '';
    return p.replace(/^\/index(?=[?#])/, '');
  }

  function fixA(a) {
    if (!a || !a.getAttribute) return;
    var h = a.getAttribute('href');
    if (!h) return;
    if (CAL_RE.test(h)) {
      var nh = h.replace(CAL_RE, R.cal);
      if (nh !== h) a.setAttribute('href', nh);
      return;
    }
    if (!R.base) return;
    if (h.charAt(0) !== '/' || h.charAt(1) === '/') return;          // only same-site absolute paths
    if (h.indexOf(R.base + '/') === 0 || h === R.base || h.indexOf(R.base + '?') === 0 || h.indexOf(R.base + '#') === 0) return;
    if (/^\/(x3d|media)\//.test(h) || ASSET_RE.test(h)) return;
    var path = h.replace(/[?#].*$/, ''), rest = h.slice(path.length);
    a.setAttribute('href', R.base + pagePath(path) + rest);
  }
  function fixNames(root) {
    var els = (root || document).querySelectorAll('[data-rep-name]');
    for (var i = 0; i < els.length; i++) els[i].textContent = R.name;
  }
  function fixAll(root) {
    root = root || document;
    var as = root.querySelectorAll ? root.querySelectorAll('a[href]') : [];
    for (var i = 0; i < as.length; i++) fixA(as[i]);
    if (root.tagName === 'A') fixA(root);
    fixNames(root);
  }
  R.fix = fixAll;
  R.link = function (p) { // build a same-site link for this rep, e.g. REP.link('/demo?co=x')
    if (!R.base || !p || p.charAt(0) !== '/') return p;
    var path = p.replace(/[?#].*$/, ''), rest = p.slice(path.length);
    return R.base + pagePath(path) + rest;
  };

  // fix links right before they are followed (covers anything created late)
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (a) fixA(a);
  }, true);

  function start() {
    fixAll(document);
    if (window.MutationObserver) {
      new MutationObserver(function (list) {
        for (var i = 0; i < list.length; i++) {
          var mu = list[i];
          if (mu.type === 'attributes') { if (mu.target.tagName === 'A') fixA(mu.target); continue; }
          for (var j = 0; j < mu.addedNodes.length; j++) { var n = mu.addedNodes[j]; if (n.nodeType === 1) fixAll(n); }
        }
      }).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
