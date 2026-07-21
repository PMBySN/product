/* Shubham Nayak portfolio — site-wide bookmark system.
   Self-contained vanilla script. Include on any page:
     <script src="./bookmarks.js"></script>
   API (window.SNBM):
     has(id) -> bool
     toggle({id,title,url,cat}) -> bool (new saved state)
     remove(id)
     list() -> array
     count() -> number
     open() / close() / toggleDrawer()
   Fires window event 'snbm:change' whenever the set changes so
   framework components can re-render. Auto-injects a floating
   launcher (bottom-right) + a slide-in drawer, unless the <script>
   tag carries a data-no-launcher attribute. */
(function () {
  if (window.SNBM) return;
  var KEY = 'snBookmarks_v1';
  var INK = '#1a1712', CREAM = '#f4f1ea', VIOLET = '#5b2fe0', LIME = '#c6f24e', CORAL = '#ff5a3c';

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; }
  }
  function write(arr) {
    try { localStorage.setItem(KEY, JSON.stringify(arr)); } catch (e) {}
    window.dispatchEvent(new CustomEvent('snbm:change', { detail: { count: arr.length } }));
  }

  var SNBM = {
    list: function () { return read(); },
    count: function () { return read().length; },
    has: function (id) { return read().some(function (b) { return b.id === id; }); },
    remove: function (id) { write(read().filter(function (b) { return b.id !== id; })); render(); },
    toggle: function (item) {
      var arr = read();
      var i = arr.findIndex(function (b) { return b.id === item.id; });
      var nowSaved;
      if (i >= 0) { arr.splice(i, 1); nowSaved = false; }
      else { arr.unshift({ id: item.id, title: item.title, url: item.url, cat: item.cat || '', ts: Date.now() }); nowSaved = true; }
      write(arr); render();
      return nowSaved;
    },
    open: function () { setOpen(true); },
    close: function () { setOpen(false); },
    toggleDrawer: function () { setOpen(!isOpen); },
    setLauncherHidden: function (v) { launcherHidden = !!v; if (launcher) launcher.style.display = launcherHidden ? 'none' : 'flex'; }
  };
  window.SNBM = SNBM;

  /* ---------- UI ---------- */
  var launcher, badge, overlay, drawer, listEl, isOpen = false, built = false, launcherHidden = false;

  function setOpen(v) {
    if (!built) build();
    isOpen = v;
    overlay.style.opacity = v ? '1' : '0';
    overlay.style.pointerEvents = v ? 'auto' : 'none';
    drawer.style.transform = v ? 'translateX(0)' : 'translateX(110%)';
    if (v) render();
  }

  function catColor(cat) {
    var c = (cat || '').toLowerCase();
    if (c.indexOf('rca') > -1) return LIME;
    if (c.indexOf('metric') > -1) return VIOLET;
    if (c.indexOf('guess') > -1) return CORAL;
    if (c.indexOf('improve') > -1) return LIME;
    if (c.indexOf('design') > -1) return CORAL;
    if (c.indexOf('insight') > -1) return VIOLET;
    if (c.indexOf('guide') > -1) return VIOLET;
    return '#fff';
  }
  function catFg(cat) {
    var bg = catColor(cat);
    return (bg === VIOLET || bg === CORAL) ? '#fff' : INK;
  }

  function render() {
    if (!built) return;
    var items = read();
    badge.textContent = items.length;
    badge.style.display = items.length ? 'flex' : 'none';
    if (!items.length) {
      listEl.innerHTML = '<div style="text-align:center;padding:48px 18px;color:#6f6a60;">'
        + '<div style="font-size:40px;margin-bottom:12px;">☆</div>'
        + '<div style="font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:20px;color:' + INK + ';margin-bottom:8px;">Nothing saved yet</div>'
        + '<div style="font-size:14.5px;line-height:1.55;">Hit <b>Bookmark this</b> on any case study, guide or article and it lands right here — your own reading list, ready when you are.</div>'
        + '</div>';
      return;
    }
    listEl.innerHTML = items.map(function (b) {
      var col = catColor(b.cat), fg = catFg(b.cat);
      return '<div style="display:flex;gap:12px;align-items:flex-start;background:#fff;border:1.5px solid ' + INK + ';border-radius:14px;padding:14px 15px;box-shadow:3px 3px 0 ' + INK + ';">'
        + '<a href="' + b.url + '" style="flex:1;text-decoration:none;color:' + INK + ';">'
        + (b.cat ? '<span style="display:inline-block;font-family:\'JetBrains Mono\',monospace;font-size:10px;font-weight:600;background:' + col + ';color:' + fg + ';border:1.5px solid ' + INK + ';border-radius:999px;padding:3px 9px;margin-bottom:8px;">' + esc(b.cat) + '</span>' : '')
        + '<div style="font-size:15px;font-weight:600;line-height:1.35;">' + esc(b.title) + '</div>'
        + '</a>'
        + '<button data-rm="' + esc(b.id) + '" title="Remove" style="flex:none;background:' + CREAM + ';border:1.5px solid ' + INK + ';border-radius:9px;width:30px;height:30px;cursor:pointer;font-size:15px;line-height:1;color:' + INK + ';font-weight:700;">✕</button>'
        + '</div>';
    }).join('');
    Array.prototype.forEach.call(listEl.querySelectorAll('[data-rm]'), function (btn) {
      btn.addEventListener('click', function () { SNBM.remove(btn.getAttribute('data-rm')); });
    });
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function build() {
    if (built) return;
    built = true;
    var noLauncher = document.currentScriptTag && document.currentScriptTag.hasAttribute('data-no-launcher');

    // Launcher (scroll-anchored: absolute in the page, revealed on scroll, auto-hides after idle)
    launcher = document.createElement('button');
    launcher.setAttribute('aria-label', 'Open bookmarks');
    launcher.style.cssText = 'position:fixed;right:22px;top:20px;z-index:9998;display:flex;align-items:center;gap:8px;'
      + 'background:' + LIME + ';color:' + INK + ';border:1.5px solid ' + INK + ';border-radius:999px;'
      + 'padding:12px 18px;font-family:\'JetBrains Mono\',monospace;font-size:13px;font-weight:600;cursor:pointer;'
      + 'box-shadow:3px 3px 0 ' + INK + ';opacity:0;pointer-events:none;transition:opacity .3s ease, top .1s linear;';
    launcher.innerHTML = '★ Bookmarks';
    badge = document.createElement('span');
    badge.style.cssText = 'display:none;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 5px;'
      + 'background:' + VIOLET + ';color:#fff;border:1.5px solid ' + INK + ';border-radius:999px;font-size:11px;font-weight:700;';
    launcher.appendChild(badge);
    launcher.addEventListener('mouseenter', function () { launcher.style.transform = 'translate(-1px,-1px)'; });
    launcher.addEventListener('mouseleave', function () { launcher.style.transform = 'none'; });
    launcher.addEventListener('click', function () { SNBM.toggleDrawer(); });
    if (!noLauncher) document.body.appendChild(launcher);

    // Track scroll progress along the right edge; two-stage decay after scrolling stops.
    var stubT, hideT;
    var fullLabel = function () { var n = SNBM.count(); return '★ Bookmarks' + (n ? ' (' + n + ')' : ''); };
    var reveal = function () {
      if (isOpen) return;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var frac = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      launcher.style.top = (18 + frac * (window.innerHeight - 36 - launcher.offsetHeight)) + 'px';
      launcher.innerHTML = fullLabel();
      launcher.style.padding = '12px 18px';
      launcher.style.opacity = '1';
      launcher.style.pointerEvents = 'auto';
      clearTimeout(stubT); clearTimeout(hideT);
      stubT = setTimeout(function () { launcher.innerHTML = '★'; launcher.style.padding = '12px 15px'; }, 150);
      hideT = setTimeout(function () { launcher.style.opacity = '0'; launcher.style.pointerEvents = 'none'; }, 3150);
    };
    window.addEventListener('scroll', reveal, { passive: true });

    // Overlay
    overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:9998;background:rgba(26,23,18,.45);opacity:0;pointer-events:none;transition:opacity .2s;';
    overlay.addEventListener('click', function () { setOpen(false); });
    document.body.appendChild(overlay);

    // Drawer
    drawer = document.createElement('div');
    drawer.style.cssText = 'position:fixed;top:0;right:0;bottom:0;z-index:9999;width:min(420px,90vw);'
      + 'background:' + CREAM + ';border-left:1.5px solid ' + INK + ';box-shadow:-8px 0 0 rgba(26,23,18,.08);'
      + 'transform:translateX(110%);transition:transform .28s cubic-bezier(.22,1,.36,1);display:flex;flex-direction:column;'
      + 'font-family:\'Manrope\',sans-serif;';
    var head = document.createElement('div');
    head.style.cssText = 'display:flex;align-items:center;justify-content:space-between;gap:12px;padding:22px 22px 16px;border-bottom:1.5px solid ' + INK + ';';
    head.innerHTML = '<div><div style="font-family:\'JetBrains Mono\',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:' + VIOLET + ';margin-bottom:4px;">Your reading list</div>'
      + '<div style="font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:24px;letter-spacing:-.02em;color:' + INK + ';">Bookmarks</div></div>';
    var close = document.createElement('button');
    close.innerHTML = '✕';
    close.setAttribute('aria-label', 'Close');
    close.style.cssText = 'flex:none;background:#fff;border:1.5px solid ' + INK + ';border-radius:10px;width:38px;height:38px;cursor:pointer;font-size:17px;font-weight:700;color:' + INK + ';box-shadow:2px 2px 0 ' + INK + ';';
    close.addEventListener('click', function () { setOpen(false); });
    head.appendChild(close);
    listEl = document.createElement('div');
    listEl.style.cssText = 'flex:1;overflow-y:auto;padding:18px 22px 28px;display:flex;flex-direction:column;gap:12px;';
    drawer.appendChild(head);
    drawer.appendChild(listEl);
    document.body.appendChild(drawer);

    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && isOpen) setOpen(false); });
    render();
  }

  // capture our own script tag (for data-no-launcher)
  document.currentScriptTag = document.currentScript;

  // Build after DOM is ready, and open if URL hash requests it.
  function init() {
    build();
    if (/[#&]bookmarks\b/.test(location.hash)) setOpen(true);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.addEventListener('hashchange', function () {
    if (/[#&]bookmarks\b/.test(location.hash)) setOpen(true);
  });
})();
