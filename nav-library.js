/* Shubham Nayak portfolio — Library hover menu.
   Turns the nav's "Library" link into a hover/click panel of every study topic
   instead of scrolling the reader down to the #resources section.

   Two things this has to survive:
   1. The page framework re-renders the nav and throws away injected nodes —
      so a MutationObserver rebuilds the menu whenever the link loses its wrapper.
   2. Narrow viewports — the panel is positioned against the viewport, not the
      trigger, below 820px, and horizontally clamped above it.

   Include after the nav exists:  <script src="./nav-library.js?v=2"></script>  */
(function () {
  var INK = "#1a1712", CREAM = "#f4f1ea", VIOLET = "#5b2fe0";
  var MOBILE = 820;

  var ITEMS = [
    { href: "RCA.dc.html",                 label: "RCA",                 note: "Find the real cause, calmly",      dot: "#c6f24e" },
    { href: "Metrics.dc.html",             label: "Metrics",             note: "Pick numbers that matter",         dot: "#5b2fe0" },
    { href: "Guesstimates.dc.html",        label: "Guesstimates",        note: "Size anything out loud",           dot: "#ff5a3c" },
    { href: "Product-Improvement.dc.html", label: "Product Improvement", note: "Tear a product down properly",     dot: "#2ee6d6" },
    { href: "Product-Design.dc.html",      label: "Product Design",      note: "Design the answer, not the demo",  dot: "#25D366" },
    { href: "SQL-Bootcamp.dc.html",        label: "SQL Bootcamp",        note: "30 missions, real queries",        dot: "#2ee6d6" },
    { href: "Market-Updates.dc.html",      label: "30-Second Reads",     note: "What moved, why it matters",       dot: "#1a1712" },
    { href: "Personal-Insights.dc.html",   label: "Personal Insights",   note: "What I learned the hard way",      dot: "#c6f24e" },
    { href: "Zero-to-PM.dc.html",          label: "Zero to PM",          note: "The whole roadmap, free",          dot: "#5b2fe0" },
    { href: "Newsletters.dc.html",         label: "Newsletters",         note: "The long-form archive",            dot: "#ff5a3c" }
  ];

  function findLink() {
    var nav = document.querySelector("nav");
    if (!nav) return null;
    var as = nav.querySelectorAll("a");
    for (var i = 0; i < as.length; i++) {
      if ((as[i].textContent || "").trim() === "Library") return as[i];
    }
    return null;
  }

  function build() {
    var link = findLink();
    if (!link) return false;
    /* already wired AND still inside its wrapper? nothing to do */
    if (link._snLib && link.parentNode && link.parentNode._snWrap) return true;

    /* drop any orphaned panel from a previous render */
    var stale = document.querySelectorAll('[data-sn-lib-panel]');
    for (var k = 0; k < stale.length; k++) {
      var host = stale[k].parentNode;
      if (host && host._snWrap && !host.contains(findLink())) host.remove();
      else stale[k].remove();
    }

    link._snLib = true;

    var wrap = document.createElement("div");
    wrap._snWrap = true;
    wrap.style.cssText = "position:relative; display:inline-flex;";
    link.parentNode.insertBefore(wrap, link);
    wrap.appendChild(link);

    var panel = document.createElement("div");
    panel.setAttribute("role", "menu");
    panel.setAttribute("data-sn-lib-panel", "");
    panel.style.cssText = "position:absolute; z-index:120; background:" + CREAM + ";"
      + "border:1.5px solid " + INK + "; border-radius:18px; box-shadow:7px 7px 0 " + INK + ";"
      + "padding:12px; display:none; opacity:0; transform:translateY(-6px);"
      + "transition:opacity .16s ease, transform .16s ease; font-family:'Manrope',sans-serif;"
      + "max-height:72vh; overflow-y:auto; overscroll-behavior:contain;";

    var head = document.createElement("div");
    head.style.cssText = "font-family:'JetBrains Mono',monospace; font-size:10px; font-weight:700;"
      + "letter-spacing:0.14em; color:" + VIOLET + "; padding:6px 10px 10px;";
    head.textContent = "FREE STUDY LIBRARY";
    panel.appendChild(head);

    var grid = document.createElement("div");
    grid.style.cssText = "display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:2px;";
    panel.appendChild(grid);

    ITEMS.forEach(function (it) {
      var a = document.createElement("a");
      a.href = it.href;
      a.style.cssText = "display:flex; align-items:center; gap:11px; padding:9px 10px; border-radius:11px;"
        + "color:" + INK + "; text-decoration:none; transition:background .12s ease;";
      a.addEventListener("mouseenter", function () { a.style.background = "#1a17120f"; });
      a.addEventListener("mouseleave", function () { a.style.background = "transparent"; });

      var dot = document.createElement("span");
      dot.style.cssText = "width:11px; height:11px; border-radius:4px; flex:none; border:1.5px solid " + INK + "; background:" + it.dot + ";";
      a.appendChild(dot);

      var txt = document.createElement("span");
      txt.style.cssText = "display:flex; flex-direction:column; gap:1px; min-width:0;";
      var l1 = document.createElement("span");
      l1.style.cssText = "font-size:14px; font-weight:700; letter-spacing:-0.01em;";
      l1.textContent = it.label;
      var l2 = document.createElement("span");
      l2.style.cssText = "font-size:11.5px; color:#59544a;";
      l2.textContent = it.note;
      txt.appendChild(l1); txt.appendChild(l2);
      a.appendChild(txt);

      grid.appendChild(a);
    });

    var foot = document.createElement("a");
    foot.href = "Portfolio.dc.html#resources";
    foot.style.cssText = "display:block; margin-top:6px; padding:10px; border-top:1.5px solid #ded9cf;"
      + "font-family:'JetBrains Mono',monospace; font-size:11.5px; font-weight:600; color:" + VIOLET + "; text-decoration:none;";
    foot.textContent = "See the full library →";
    panel.appendChild(foot);

    wrap.appendChild(panel);

    /* Position against the VIEWPORT on phones/tablets, against the trigger on desktop —
       then clamp so the right edge can never leave the screen. */
    function place() {
      var narrow = window.innerWidth <= MOBILE;
      var nav = document.querySelector("nav");
      var navBottom = nav ? nav.getBoundingClientRect().bottom : 56;
      if (narrow) {
        panel.style.position = "fixed";
        panel.style.top = Math.round(navBottom + 8) + "px";
        panel.style.left = "12px";
        panel.style.right = "12px";
        panel.style.width = "auto";
        panel.style.maxWidth = "none";
        grid.style.gridTemplateColumns = "minmax(0,1fr)";
      } else {
        panel.style.position = "absolute";
        panel.style.top = "calc(100% + 10px)";
        panel.style.right = "auto";
        panel.style.width = "600px";
        panel.style.maxWidth = "none";
        grid.style.gridTemplateColumns = "repeat(2, minmax(0,1fr))";
        panel.style.left = "0px";
        var r = panel.getBoundingClientRect();
        var over = r.right - (window.innerWidth - 12);
        if (over > 0) panel.style.left = -Math.round(over) + "px";
      }
    }

    /* `display` is the source of truth for open/closed — the fade is decorative only,
       so the menu never depends on a CSS transition actually completing. */
    var hideT, closeT, open = false;
    function show() {
      clearTimeout(hideT); clearTimeout(closeT);
      open = true;
      panel.style.display = "block";
      place();
      setTimeout(function () {
        panel.style.opacity = "1";
        panel.style.transform = "translateY(0)";
      }, 16);
    }
    function hideNow() {
      clearTimeout(hideT); clearTimeout(closeT);
      open = false;
      panel.style.opacity = "0";
      panel.style.transform = "translateY(-6px)";
      closeT = setTimeout(function () { if (!open) panel.style.display = "none"; }, 170);
    }
    function hide() { clearTimeout(hideT); hideT = setTimeout(hideNow, 140); }

    wrap.addEventListener("mouseenter", show);
    wrap.addEventListener("mouseleave", hide);
    link.addEventListener("focus", show);
    wrap.addEventListener("focusout", hide);
    document.addEventListener("click", function (e) { if (!wrap.contains(e.target)) hideNow(); }, true);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") hideNow(); });
    window.addEventListener("resize", function () { if (open) place(); });

    /* the link is a menu trigger, not a scroll jump — the panel's footer link is the
       only route to the full #resources section */
    link.setAttribute("aria-haspopup", "true");
    link.setAttribute("role", "button");
    link.addEventListener("click", function (e) {
      e.preventDefault();
      if (open) hideNow(); else show();
    });
    return true;
  }

  /* the framework re-renders the nav and discards injected nodes — watch and rebuild */
  function watch() {
    var target = document.body;
    if (!target || !window.MutationObserver) return;
    var pending = false;
    new MutationObserver(function () {
      if (pending) return;
      pending = true;
      setTimeout(function () { pending = false; build(); }, 30);
    }).observe(target, { childList: true, subtree: true });
    /* belt and braces: the framework can re-render before the observer is wired,
       so re-assert the menu for the first few seconds regardless */
    var n = 0;
    var iv = setInterval(function () { build(); if (++n > 30) clearInterval(iv); }, 200);
  }

  function boot(tries) {
    if (build()) { watch(); return; }
    if (tries > 0) setTimeout(function () { boot(tries - 1); }, 120);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { boot(40); });
  else boot(40);
})();
