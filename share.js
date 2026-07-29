// Auto-generating share widget for Shubham's write-ups (case studies, insights,
// newsletters, market updates). Loads via <script src="./share.js"></script> in <helmet>.
// A page sets window.snShare = { title, accent } when a specific article is open;
// on other views it sets window.snShare = null and no button appears.
// Click → draws a branded 1080x1080 PNG (title in the topic colour, "SN." branding,
// the article link) entirely in-browser, then shares image + caption + link via the
// native share sheet (mobile: Instagram/WhatsApp/etc). Desktop: downloads the image
// and copies the caption+link. No uploads, ever.
(function () {
  if (window.__snShareImg) return;
  window.__snShareImg = true;
  var INK = "#1a1712", CREAM = "#f4f1ea", BG = "#e9e7e2";

  function lum(hex) {
    var h = hex.replace("#", ""); if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
    var r = parseInt(h.substr(0,2),16), g = parseInt(h.substr(2,2),16), b = parseInt(h.substr(4,2),16);
    return (0.299*r + 0.587*g + 0.114*b) / 255;
  }
  function current() {
    var s = window.snShare; if (!s || !s.title) return null;
    return { title: s.title, accent: s.accent || "#5b2fe0", url: location.href };
  }
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x+r, y); ctx.arcTo(x+w, y, x+w, y+h, r); ctx.arcTo(x+w, y+h, x, y+h, r);
    ctx.arcTo(x, y+h, x, y, r); ctx.arcTo(x, y, x+w, y, r); ctx.closePath();
  }
  function wrap(ctx, text, maxW) {
    var words = text.split(/\s+/), lines = [], line = "";
    for (var i = 0; i < words.length; i++) {
      var t = line ? line + " " + words[i] : words[i];
      if (ctx.measureText(t).width > maxW && line) { lines.push(line); line = words[i]; }
      else line = t;
    }
    if (line) lines.push(line);
    return lines;
  }

  async function drawCard(data) {
    var S = 1080, cv = document.createElement("canvas"); cv.width = S; cv.height = S;
    var ctx = cv.getContext("2d");
    try { await document.fonts.load('800 80px "Bricolage Grotesque"'); await document.fonts.load('600 26px "JetBrains Mono"'); await document.fonts.ready; } catch (e) {}

    ctx.fillStyle = BG; ctx.fillRect(0, 0, S, S);
    var m = 66, cw = S - m*2;
    // offset shadow + card
    ctx.fillStyle = INK; roundRect(ctx, m+16, m+16, cw, cw, 40); ctx.fill();
    ctx.fillStyle = CREAM; roundRect(ctx, m, m, cw, cw, 40); ctx.fill();
    ctx.lineWidth = 5; ctx.strokeStyle = INK; roundRect(ctx, m, m, cw, cw, 40); ctx.stroke();

    var pad = m + 62, right = m + cw - 62, top = m + 66;
    // SN. wordmark
    ctx.textBaseline = "alphabetic";
    ctx.font = '800 60px "Bricolage Grotesque", sans-serif';
    ctx.fillStyle = INK; ctx.fillText("SN", pad, top + 44);
    var snW = ctx.measureText("SN").width;
    ctx.fillStyle = "#5b2fe0"; ctx.fillText(".", pad + snW + 2, top + 44);
    // accent pill top-right
    ctx.font = '600 24px "JetBrains Mono", monospace';
    var pill = "FREE READ", pw = ctx.measureText(pill).width, php = 26, pillW = pw + 44, pillH = 52;
    var titleColorLight = lum(data.accent) > 0.6;
    ctx.fillStyle = data.accent; roundRect(ctx, right - pillW, top - 2, pillW, pillH, 26); ctx.fill();
    ctx.lineWidth = 3; ctx.strokeStyle = INK; roundRect(ctx, right - pillW, top - 2, pillW, pillH, 26); ctx.stroke();
    ctx.fillStyle = titleColorLight ? INK : "#ffffff"; ctx.fillText(pill, right - pillW + 22, top + 33);

    // title
    var titleColor = titleColorLight ? INK : data.accent;
    var fs = 84; ctx.font = "800 " + fs + 'px "Bricolage Grotesque", sans-serif';
    var maxTW = cw - 124 - 26;
    var lines = wrap(ctx, data.title, maxTW);
    while (lines.length > 5 && fs > 52) { fs -= 6; ctx.font = "800 " + fs + 'px "Bricolage Grotesque", sans-serif'; lines = wrap(ctx, data.title, maxTW); }
    var lh = fs * 1.06;
    var blockH = lines.length * lh;
    var ty = m + cw/2 - blockH/2 + fs*0.5;
    // accent bar left of title
    ctx.fillStyle = data.accent;
    roundRect(ctx, pad, ty - fs*0.92, 14, blockH + 6, 6); ctx.fill();
    var tx = pad + 40;
    ctx.fillStyle = titleColor;
    for (var i = 0; i < lines.length; i++) ctx.fillText(lines[i], tx, ty + i*lh);

    // link + footer
    var by = m + cw - 66;
    ctx.font = '600 26px "JetBrains Mono", monospace';
    ctx.fillStyle = "#6f6a60";
    var link = data.url.replace(/^https?:\/\//, "");
    if (ctx.measureText(link).width > cw - 124) { while (ctx.measureText(link + "…").width > cw - 124 && link.length > 10) link = link.slice(0, -1); link += "…"; }
    ctx.fillText("\u2197  " + link, pad, by);
    ctx.font = '600 22px "JetBrains Mono", monospace';
    ctx.fillStyle = "#8a8578";
    ctx.fillText("SHUBHAM NAYAK  \u00b7  PM RESOURCE HUB  \u00b7  FREE FOREVER", pad, by - 40);
    return cv;
  }

  function toBlob(cv) { return new Promise(function (res) { cv.toBlob(function (b) { res(b); }, "image/png"); }); }
  function caption(d) { return d.title + "\n\nA free, no-fluff read from my PM resource hub. Dig in \uD83D\uDC47\n" + d.url; }

  async function shareImage(btn) {
    var d = current(); if (!d) return;
    var label = btn.querySelector("span:last-child"); var orig = label ? label.textContent : "";
    if (label) label.textContent = "Building image…";
    var cv = await drawCard(d); var blob = await toBlob(cv);
    var file = new File([blob], "shubham-share.png", { type: "image/png" });
    var text = caption(d);
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file], text: text, title: d.title }); } catch (e) {}
      if (label) label.textContent = orig;
    } else {
      var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "shubham-share.png"; document.body.appendChild(a); a.click(); a.remove();
      try { await navigator.clipboard.writeText(text); } catch (e) {}
      if (label) { label.textContent = "Image saved · caption copied ✓"; setTimeout(function () { label.textContent = orig; }, 2600); }
    }
  }

  function circle(bg, fg, glyph) {
    var c = document.createElement("span"); c.textContent = glyph;
    c.style.cssText = "width:30px;height:30px;flex:none;border-radius:999px;border:1.5px solid " + INK + ";background:" + bg + ";color:" + fg + ";display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;";
    return c;
  }
  function itemBtn(bg, fg, glyph, labelTxt, primary) {
    var b = document.createElement("button"); b.type = "button";
    b.style.cssText = "display:flex;align-items:center;gap:11px;width:100%;background:" + (primary ? "#5b2fe0" : "#fff") + ";color:" + (primary ? "#fff" : INK) + ";border:1.5px solid " + INK + ";border-radius:999px;padding:8px 18px 8px 8px;cursor:pointer;font-family:'Manrope',sans-serif;font-weight:" + (primary ? "800" : "600") + ";font-size:14px;box-shadow:3px 3px 0 " + INK + ";transition:transform .12s ease,box-shadow .12s ease;white-space:nowrap;text-align:left;";
    b.appendChild(circle(bg, fg, glyph));
    var t = document.createElement("span"); t.textContent = labelTxt; b.appendChild(t);
    b.onmouseenter = function () { b.style.transform = "translate(-2px,-2px)"; b.style.boxShadow = "5px 5px 0 " + INK; };
    b.onmouseleave = function () { b.style.transform = ""; b.style.boxShadow = "3px 3px 0 " + INK; };
    return b;
  }

  function mount() {
    if (document.getElementById("sn-share-root")) return;
    var root = document.createElement("div"); root.id = "sn-share-root";
    root.style.cssText = "position:fixed;right:24px;bottom:24px;z-index:70;display:flex;flex-direction:column;align-items:flex-end;gap:12px;font-family:'Manrope',sans-serif;";
    var menu = document.createElement("div");
    menu.style.cssText = "display:none;flex-direction:column;align-items:stretch;gap:10px;background:#f4f1ea;border:1.5px solid " + INK + ";border-radius:20px;padding:16px;box-shadow:6px 6px 0 " + INK + ";min-width:236px;";
    var head = document.createElement("div"); head.textContent = "Share this write-up";
    head.style.cssText = "font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#6f6a60;margin:2px 2px 4px;";
    menu.appendChild(head);

    var open = false;
    function close() { menu.style.display = "none"; open = false; }
    function build() {
      while (menu.childNodes.length > 1) menu.removeChild(menu.lastChild);
      var d = current(); if (!d) return;
      var img = itemBtn("#c6f24e", INK, "\u25A3", "Share as branded image", true);
      img.onclick = function () { shareImage(img); };
      menu.appendChild(img);
      var u = encodeURIComponent(d.url), t = encodeURIComponent(d.title);
      [
        { bg: "#25D366", fg: "#fff", g: "\u2706", l: "WhatsApp", h: "https://wa.me/?text=" + encodeURIComponent(d.title + " \u2014 " + d.url) },
        { bg: "#0a66c2", fg: "#fff", g: "in", l: "LinkedIn", h: "https://www.linkedin.com/sharing/share-offsite/?url=" + u },
        { bg: INK, fg: "#fff", g: "\uD835\uDD4F", l: "X (Twitter)", h: "https://twitter.com/intent/tweet?text=" + t + "&url=" + u },
        { bg: "#1877f2", fg: "#fff", g: "f", l: "Facebook", h: "https://www.facebook.com/sharer/sharer.php?u=" + u }
      ].forEach(function (n) {
        var b = itemBtn(n.bg, n.fg, n.g, n.l);
        b.onclick = function () { window.open(n.h, "_blank", "noopener,width=640,height=560"); close(); };
        menu.appendChild(b);
      });
      var copy = itemBtn("#f4f1ea", INK, "\uD83D\uDD17", "Copy link");
      copy.onclick = function () {
        var s = copy.querySelector("span:last-child");
        var done = function () { if (s) { s.textContent = "Copied!"; setTimeout(function () { s.textContent = "Copy link"; }, 1600); } };
        if (navigator.clipboard) navigator.clipboard.writeText(d.url).then(done, done); else done();
      };
      menu.appendChild(copy);
    }

    var fab = document.createElement("button"); fab.type = "button"; fab.setAttribute("aria-label", "Share this write-up");
    fab.style.cssText = "display:inline-flex;align-items:center;gap:9px;background:#5b2fe0;color:#fff;border:1.5px solid " + INK + ";border-radius:999px;padding:13px 20px;cursor:pointer;font-family:'Manrope',sans-serif;font-weight:800;font-size:15px;box-shadow:4px 4px 0 " + INK + ";transition:transform .12s ease,box-shadow .12s ease;";
    fab.innerHTML = '<span style="font-size:17px;line-height:1;">\u2197</span> Share';
    fab.onmouseenter = function () { fab.style.transform = "translate(-2px,-2px)"; fab.style.boxShadow = "6px 6px 0 " + INK; };
    fab.onmouseleave = function () { fab.style.transform = ""; fab.style.boxShadow = "4px 4px 0 " + INK; };
    fab.onclick = function (e) { e.stopPropagation(); if (open) { close(); } else { build(); menu.style.display = "flex"; open = true; } };
    document.addEventListener("click", function (e) { if (open && !root.contains(e.target)) close(); });

    root.appendChild(menu); root.appendChild(fab); document.body.appendChild(root);
    root.style.display = current() ? "flex" : "none";
    // reflect availability as pages resolve their article
    setInterval(function () { root.style.display = current() ? "flex" : "none"; if (open && !current()) close(); }, 500);
  }
  // expose for preview/testing
  window.__snPreviewCard = async function () { var d = current() || { title: "Preview title goes here", accent: "#5b2fe0", url: location.href }; var cv = await drawCard(d); var im = new Image(); im.onload = function () { document.body.innerHTML = ""; document.body.style.background = "#555"; im.style.cssText = "position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:520px;height:520px;border:1px solid #000;"; document.body.appendChild(im); }; im.src = cv.toDataURL("image/png"); return im; };

  if (document.body) mount(); else document.addEventListener("DOMContentLoaded", mount);
})();
