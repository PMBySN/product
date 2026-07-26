// ── View-mode controller (loaded on every page via community.js) ───────────
// Site opens in DESKTOP view everywhere (incl. phones) by default. Phone
// visitors can tap a small toggle to switch to the responsive mobile layout;
// the choice is remembered across pages via localStorage.
(function () {
  if (window.__snViewMode) return;
  window.__snViewMode = true;
  var INK = "#1a1712", KEY = "snViewMode";
  function get() { try { return localStorage.getItem(KEY) === "mobile" ? "mobile" : "desktop"; } catch (e) { return "desktop"; } }
  function apply(mode) {
    var vp = document.querySelector('meta[name="viewport"]');
    if (!vp) { vp = document.createElement("meta"); vp.setAttribute("name", "viewport"); (document.head || document.documentElement).appendChild(vp); }
    if (mode === "mobile") vp.setAttribute("content", "width=device-width, initial-scale=1");
    else vp.setAttribute("content", "width=1200"); // desktop browsers ignore this; phones render the desktop layout zoomed to fit
  }
  apply(get());
  function isTouch() { return ("ontouchstart" in window) || (navigator.maxTouchPoints > 0) || window.matchMedia("(max-width: 900px)").matches; }
  function label(mode) { return mode === "mobile" ? "🖥 Desktop view" : "📱 Mobile view"; }
  function mountToggle() {
    if (document.getElementById("sn-view-toggle")) return;
    if (!isTouch()) return; // desktop users don't need it (viewport meta is a no-op there)
    var btn = document.createElement("button");
    btn.id = "sn-view-toggle";
    btn.type = "button";
    btn.style.cssText = "position:fixed;left:16px;bottom:16px;z-index:80;background:#c6f24e;color:" + INK + ";border:2px solid " + INK + ";border-radius:999px;padding:13px 20px;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:15px;line-height:1;cursor:pointer;box-shadow:4px 4px 0 " + INK + ";-webkit-tap-highlight-color:transparent;";
    btn.textContent = label(get());
    btn.onclick = function () {
      var next = get() === "mobile" ? "desktop" : "mobile";
      try { localStorage.setItem(KEY, next); } catch (e) {}
      apply(next);
      btn.textContent = label(next);
    };
    document.body.appendChild(btn);
  }
  if (document.body) mountToggle(); else document.addEventListener("DOMContentLoaded", mountToggle);
})();

/* Shubham Nayak portfolio — community layer.
   Sign-in + gating + ratings + comments + forum.

   Two modes, same API:
   • DEMO MODE (default): everything is stored in this browser (localStorage).
     Lets you click through every flow right now — nothing shared between users.
   • LIVE MODE: set window.SN_FIREBASE below (Firebase project keys) and the
     SAME code uses Firebase Auth + Firestore, shared across all visitors.

   To go live, paste your Firebase config into window.SN_FIREBASE (see SETUP guide).
   Leaving it blank keeps demo mode on. */

window.SN_FIREBASE = window.SN_FIREBASE || {
  apiKey: "AIzaSyBOKB4KK8Gwz3bM7EKxB-jQ3hWwuSQ9gm4",
  authDomain: "pmbysn.firebaseapp.com",
  projectId: "pmbysn",
  storageBucket: "pmbysn.firebasestorage.app",
  messagingSenderId: "574872695965",
  appId: "1:574872695965:web:0679455c1555d7e89e5074",
  measurementId: "G-WVW24E0DJ2"
};

(function () {
  if (window.SNAuth) return;
  var INK = '#1a1712', CREAM = '#f4f1ea', VIOLET = '#5b2fe0', LIME = '#c6f24e', CORAL = '#ff5a3c';
  var LIVE = !!(window.SN_FIREBASE && window.SN_FIREBASE.apiKey);
  var ADMIN_EMAILS = ['shubham.nayak@scholarin.fyi', 'shubhamnayakximb@gmail.com'];

  /* ------------------------------------------------------------------ */
  /* Tiny event bus                                                      */
  var listeners = [];
  function emit() { listeners.forEach(function (fn) { try { fn(SNAuth.user); } catch (e) {} });
    window.dispatchEvent(new CustomEvent('snauth:change', { detail: { user: SNAuth.user } })); }

  /* ------------------------------------------------------------------ */
  /* Local (demo) storage helpers                                        */
  function lget(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (e) { return d; } }
  function lset(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  /* ================================================================== */
  /* DEMO ADAPTER (localStorage)                                         */
  var demo = {
    init: function () {
      var u = lget('sn_user', null);
      SNAuth.user = u;
    },
    finishSignIn: function (profile) {
      var u = Object.assign({ uid: 'demo-' + (profile.email || Date.now()), provider: profile.provider || 'email' }, profile);
      u.isAdmin = ADMIN_EMAILS.indexOf((u.email || '').toLowerCase()) > -1;
      lset('sn_user', u);
      SNAuth.user = u;
      emit();
    },
    signOut: function () { localStorage.removeItem('sn_user'); SNAuth.user = null; emit(); },
    updateProfile: function (fields) {
      if (!SNAuth.user) return;
      SNAuth.user = Object.assign({}, SNAuth.user, fields);
      lset('sn_user', SNAuth.user); emit();
    },
    // ratings: { [articleId]: { [uid]: stars } }
    getRating: function (articleId) {
      var all = lget('sn_ratings', {});
      var m = all[articleId] || {};
      var vals = Object.keys(m).map(function (k) { return m[k]; });
      var avg = vals.length ? vals.reduce(function (a, b) { return a + b; }, 0) / vals.length : 0;
      var mine = (SNAuth.user && m[SNAuth.user.uid]) || 0;
      return Promise.resolve({ avg: avg, count: vals.length, mine: mine });
    },
    setRating: function (articleId, stars) {
      var all = lget('sn_ratings', {});
      all[articleId] = all[articleId] || {};
      all[articleId][SNAuth.user.uid] = stars;
      lset('sn_ratings', all);
      return Promise.resolve();
    },
    listComments: function (threadId) {
      var all = lget('sn_comments', {});
      return Promise.resolve((all[threadId] || []).slice().sort(function (a, b) { return b.ts - a.ts; }));
    },
    addComment: function (threadId, text) {
      var all = lget('sn_comments', {});
      all[threadId] = all[threadId] || [];
      var c = { id: 'c' + Date.now() + Math.random().toString(36).slice(2, 6), uid: SNAuth.user.uid,
        name: SNAuth.user.name, photo: SNAuth.user.photo || '', role: SNAuth.user.role || '', text: text, ts: Date.now() };
      all[threadId].push(c); lset('sn_comments', all);
      return Promise.resolve(c);
    },
    deleteComment: function (threadId, id) {
      var all = lget('sn_comments', {});
      all[threadId] = (all[threadId] || []).filter(function (c) { return c.id !== id; });
      lset('sn_comments', all); return Promise.resolve();
    },
    // forum
    listThreads: function (cat) {
      var all = lget('sn_forum', []);
      var out = all.filter(function (t) { return !cat || cat === 'all' || t.cat === cat; });
      return Promise.resolve(out.sort(function (a, b) { return (b.lastTs || b.ts) - (a.lastTs || a.ts); }));
    },
    createThread: function (t) {
      var all = lget('sn_forum', []);
      var thread = { id: 'f' + Date.now() + Math.random().toString(36).slice(2, 6), cat: t.cat, title: t.title,
        body: t.body, uid: SNAuth.user.uid, name: SNAuth.user.name, photo: SNAuth.user.photo || '',
        role: SNAuth.user.role || '', ts: Date.now(), lastTs: Date.now(), replies: 0 };
      all.push(thread); lset('sn_forum', all);
      return Promise.resolve(thread);
    },
    getThread: function (id) {
      var all = lget('sn_forum', []);
      return Promise.resolve(all.filter(function (t) { return t.id === id; })[0] || null);
    },
    deleteThread: function (id) {
      lset('sn_forum', lget('sn_forum', []).filter(function (t) { return t.id !== id; }));
      var rep = lget('sn_forum_replies', {}); delete rep[id]; lset('sn_forum_replies', rep);
      return Promise.resolve();
    },
    listReplies: function (id) {
      var rep = lget('sn_forum_replies', {});
      return Promise.resolve((rep[id] || []).slice().sort(function (a, b) { return a.ts - b.ts; }));
    },
    addReply: function (id, text) {
      var rep = lget('sn_forum_replies', {});
      rep[id] = rep[id] || [];
      var r = { id: 'r' + Date.now() + Math.random().toString(36).slice(2, 6), uid: SNAuth.user.uid,
        name: SNAuth.user.name, photo: SNAuth.user.photo || '', role: SNAuth.user.role || '', text: text, ts: Date.now() };
      rep[id].push(r); lset('sn_forum_replies', rep);
      var all = lget('sn_forum', []); all.forEach(function (t) { if (t.id === id) { t.replies = rep[id].length; t.lastTs = Date.now(); } });
      lset('sn_forum', all);
      return Promise.resolve(r);
    },
    deleteReply: function (id, rid) {
      var rep = lget('sn_forum_replies', {});
      rep[id] = (rep[id] || []).filter(function (r) { return r.id !== rid; });
      lset('sn_forum_replies', rep);
      var all = lget('sn_forum', []); all.forEach(function (t) { if (t.id === id) t.replies = rep[id].length; });
      lset('sn_forum', all);
      return Promise.resolve();
    }
  };

  /* ================================================================== */
  /* FIREBASE ADAPTER (loaded only in LIVE mode)                         */
  var fb = { app: null, auth: null, db: null };
  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }
  var fbReady = null;
  function ensureFirebase() {
    if (fbReady) return fbReady;
    fbReady = (async function () {
      var base = 'https://www.gstatic.com/firebasejs/10.12.2/';
      await loadScript(base + 'firebase-app-compat.js');
      await loadScript(base + 'firebase-auth-compat.js');
      await loadScript(base + 'firebase-firestore-compat.js');
      fb.app = firebase.initializeApp(window.SN_FIREBASE);
      fb.auth = firebase.auth();
      fb.db = firebase.firestore();
      try { await fb.auth.getRedirectResult(); } catch (e) { /* ignore redirect errors */ }
      fb.auth.onAuthStateChanged(async function (u) {
        if (!u) { SNAuth.user = null; emit(); return; }
        var doc = await fb.db.collection('users').doc(u.uid).get();
        var prof = doc.exists ? doc.data() : {};
        SNAuth.user = Object.assign({ uid: u.uid, email: u.email, name: u.displayName || prof.name || '',
          photo: u.photoURL || prof.photo || '', provider: (u.providerData[0] || {}).providerId || 'password',
          isAdmin: ADMIN_EMAILS.indexOf((u.email || '').toLowerCase()) > -1 }, prof);
        SNAuth.user.needsProfile = !SNAuth.user.role;
        emit();
      });
    })();
    return fbReady;
  }
  // Firebase implementations mirror the demo API; only wired when LIVE.
  var live = {
    init: function () { ensureFirebase(); },
    _oauth: async function (kind) {
      await ensureFirebase();
      var p = kind === 'github' ? new firebase.auth.GithubAuthProvider() : new firebase.auth.GoogleAuthProvider();
      try {
        await fb.auth.signInWithPopup(p);
      } catch (e) {
        var c = e && e.code;
        if (c === 'auth/popup-blocked' || c === 'auth/popup-closed-by-user' || c === 'auth/cancelled-popup-request' || c === 'auth/operation-not-supported-in-this-environment') {
          await fb.auth.signInWithRedirect(p);
        } else { throw e; }
      }
    },
    emailSignUp: async function (email, pass) { await ensureFirebase(); await fb.auth.createUserWithEmailAndPassword(email, pass); },
    emailSignIn: async function (email, pass) { await ensureFirebase(); await fb.auth.signInWithEmailAndPassword(email, pass); },
    magic: async function (email) {
      await ensureFirebase();
      var settings = { url: location.href, handleCodeInApp: true };
      await fb.auth.sendSignInLinkToEmail(email, settings);
      window.localStorage.setItem('sn_magic_email', email);
    },
    signOut: async function () { await ensureFirebase(); await fb.auth.signOut(); },
    updateProfile: async function (fields) {
      await ensureFirebase();
      await fb.db.collection('users').doc(SNAuth.user.uid).set(fields, { merge: true });
      SNAuth.user = Object.assign({}, SNAuth.user, fields, { needsProfile: false }); emit();
    },
    getRating: async function (articleId) {
      await ensureFirebase();
      var snap = await fb.db.collection('ratings').doc(articleId).collection('votes').get();
      var vals = []; var mine = 0;
      snap.forEach(function (d) { vals.push(d.data().stars); if (SNAuth.user && d.id === SNAuth.user.uid) mine = d.data().stars; });
      var avg = vals.length ? vals.reduce(function (a, b) { return a + b; }, 0) / vals.length : 0;
      return { avg: avg, count: vals.length, mine: mine };
    },
    setRating: async function (articleId, stars) {
      await ensureFirebase();
      await fb.db.collection('ratings').doc(articleId).collection('votes').doc(SNAuth.user.uid).set({ stars: stars, ts: Date.now() });
    },
    listComments: async function (threadId) {
      await ensureFirebase();
      var snap = await fb.db.collection('comments').doc(threadId).collection('items').orderBy('ts', 'desc').get();
      var out = []; snap.forEach(function (d) { out.push(Object.assign({ id: d.id }, d.data())); }); return out;
    },
    addComment: async function (threadId, text) {
      await ensureFirebase();
      var c = { uid: SNAuth.user.uid, name: SNAuth.user.name, photo: SNAuth.user.photo || '', role: SNAuth.user.role || '', text: text, ts: Date.now() };
      var ref = await fb.db.collection('comments').doc(threadId).collection('items').add(c);
      return Object.assign({ id: ref.id }, c);
    },
    deleteComment: async function (threadId, id) { await ensureFirebase(); await fb.db.collection('comments').doc(threadId).collection('items').doc(id).delete(); },
    listThreads: async function (cat) {
      await ensureFirebase();
      var q = fb.db.collection('forum').orderBy('lastTs', 'desc');
      var snap = await q.get(); var out = [];
      snap.forEach(function (d) { var t = Object.assign({ id: d.id }, d.data()); if (!cat || cat === 'all' || t.cat === cat) out.push(t); });
      return out;
    },
    createThread: async function (t) {
      await ensureFirebase();
      var thread = { cat: t.cat, title: t.title, body: t.body, uid: SNAuth.user.uid, name: SNAuth.user.name,
        photo: SNAuth.user.photo || '', role: SNAuth.user.role || '', ts: Date.now(), lastTs: Date.now(), replies: 0 };
      var ref = await fb.db.collection('forum').add(thread); return Object.assign({ id: ref.id }, thread);
    },
    getThread: async function (id) { await ensureFirebase(); var d = await fb.db.collection('forum').doc(id).get(); return d.exists ? Object.assign({ id: d.id }, d.data()) : null; },
    deleteThread: async function (id) { await ensureFirebase(); await fb.db.collection('forum').doc(id).delete(); },
    listReplies: async function (id) {
      await ensureFirebase();
      var snap = await fb.db.collection('forum').doc(id).collection('replies').orderBy('ts', 'asc').get();
      var out = []; snap.forEach(function (d) { out.push(Object.assign({ id: d.id }, d.data())); }); return out;
    },
    addReply: async function (id, text) {
      await ensureFirebase();
      var r = { uid: SNAuth.user.uid, name: SNAuth.user.name, photo: SNAuth.user.photo || '', role: SNAuth.user.role || '', text: text, ts: Date.now() };
      var ref = await fb.db.collection('forum').doc(id).collection('replies').add(r);
      await fb.db.collection('forum').doc(id).update({ lastTs: Date.now(), replies: firebase.firestore.FieldValue.increment(1) });
      return Object.assign({ id: ref.id }, r);
    },
    deleteReply: async function (id, rid) {
      await ensureFirebase();
      await fb.db.collection('forum').doc(id).collection('replies').doc(rid).delete();
      await fb.db.collection('forum').doc(id).update({ replies: firebase.firestore.FieldValue.increment(-1) });
    }
  };

  var A = LIVE ? live : demo;

  /* ================================================================== */
  /* Public API                                                          */
  window.SNAuth = {
    user: null,
    live: LIVE,
    onChange: function (fn) { listeners.push(fn); return function () { listeners = listeners.filter(function (x) { return x !== fn; }); }; },
    isAdmin: function () { return !!(SNAuth.user && SNAuth.user.isAdmin); },
    signOut: function () { return A.signOut(); },
    updateProfile: function (f) { return A.updateProfile(f); },
    openSignIn: function (reason) { openModal(reason || ''); },
    // resolves with the user once signed in (opens modal if needed)
    require: function (reason) {
      return new Promise(function (res) {
        if (SNAuth.user && !SNAuth.user.needsProfile) { res(SNAuth.user); return; }
        pendingResolve = res; openModal(reason || '');
      });
    }
  };
  window.SNData = {
    getRating: function (a) { return Promise.resolve(A.getRating(a)); },
    setRating: function (a, s) { return Promise.resolve(A.setRating(a, s)); },
    listComments: function (t) { return Promise.resolve(A.listComments(t)); },
    addComment: function (t, x) { return Promise.resolve(A.addComment(t, x)); },
    deleteComment: function (t, id) { return Promise.resolve(A.deleteComment(t, id)); },
    listThreads: function (c) { return Promise.resolve(A.listThreads(c)); },
    createThread: function (t) { return Promise.resolve(A.createThread(t)); },
    getThread: function (id) { return Promise.resolve(A.getThread(id)); },
    deleteThread: function (id) { return Promise.resolve(A.deleteThread(id)); },
    listReplies: function (id) { return Promise.resolve(A.listReplies(id)); },
    addReply: function (id, x) { return Promise.resolve(A.addReply(id, x)); },
    deleteReply: function (id, rid) { return Promise.resolve(A.deleteReply(id, rid)); }
  };

  /* ================================================================== */
  /* Sign-in modal + profile capture                                     */
  var pendingResolve = null, modalEl = null;
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function openModal(reason) {
    buildModal();
    modalEl.style.display = 'flex';
    if (SNAuth.user && SNAuth.user.needsProfile) showProfileStep();
    else showAuthStep(reason);
  }
  function closeModal() { if (modalEl) modalEl.style.display = 'none'; }
  function afterSignedIn() {
    if (SNAuth.user && SNAuth.user.needsProfile) { showProfileStep(); return; }
    closeModal();
    if (pendingResolve) { var r = pendingResolve; pendingResolve = null; r(SNAuth.user); }
  }

  function buildModal() {
    if (modalEl) return;
    modalEl = document.createElement('div');
    modalEl.style.cssText = 'position:fixed;inset:0;z-index:10000;display:none;align-items:center;justify-content:center;padding:24px;background:rgba(26,23,18,.55);font-family:\'Manrope\',sans-serif;';
    modalEl.addEventListener('click', function (e) { if (e.target === modalEl) closeModal(); });
    var card = document.createElement('div');
    card.id = 'sn-auth-card';
    card.style.cssText = 'width:100%;max-width:420px;background:' + CREAM + ';border:1.5px solid ' + INK + ';border-radius:22px;box-shadow:10px 10px 0 ' + INK + ';padding:26px 26px 28px;max-height:88vh;overflow-y:auto;';
    modalEl.appendChild(card);
    document.body.appendChild(modalEl);
  }

  function btn(label, bg, fg) {
    return '<button style="width:100%;display:flex;align-items:center;justify-content:center;gap:9px;background:' + bg + ';color:' + fg + ';border:1.5px solid ' + INK + ';border-radius:12px;padding:12px 16px;font-family:\'Manrope\',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:3px 3px 0 ' + INK + ';">' + label + '</button>';
  }

  function showAuthStep(reason) {
    var card = document.getElementById('sn-auth-card');
    card.innerHTML =
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:6px;">'
      + '<div style="font-family:\'JetBrains Mono\',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:' + VIOLET + ';">Free account</div>'
      + '<button data-x style="background:#fff;border:1.5px solid ' + INK + ';border-radius:9px;width:32px;height:32px;cursor:pointer;font-size:15px;font-weight:700;">✕</button></div>'
      + '<div style="font-family:\'Bricolage Grotesque\',sans-serif;font-size:27px;font-weight:800;letter-spacing:-.02em;line-height:1.05;margin-bottom:6px;">Join the community</div>'
      + '<div style="font-size:14.5px;line-height:1.5;color:#4a463d;margin-bottom:18px;">' + (reason ? esc(reason) : "Sign in free to keep reading, rate, comment and join the forum. Takes 10 seconds.") + '</div>'
      + '<div style="display:flex;flex-direction:column;gap:10px;">'
      + '<div data-p="google">' + btn('Continue with Google', '#fff', INK) + '</div>'
      + '<div data-p="github">' + btn('Continue with GitHub', INK, '#fff') + '</div>'
      + '</div>'
      + '<div style="display:flex;align-items:center;gap:10px;margin:16px 0;color:#8a857a;font-size:12px;font-family:\'JetBrains Mono\',monospace;"><span style="flex:1;height:1.5px;background:#1a171225;"></span>OR EMAIL<span style="flex:1;height:1.5px;background:#1a171225;"></span></div>'
      + '<input data-email placeholder="you@email.com" style="width:100%;box-sizing:border-box;border:1.5px solid ' + INK + ';border-radius:11px;padding:11px 13px;font-size:14.5px;margin-bottom:9px;font-family:\'Manrope\',sans-serif;">'
      + '<input data-pass type="password" placeholder="Password" style="width:100%;box-sizing:border-box;border:1.5px solid ' + INK + ';border-radius:11px;padding:11px 13px;font-size:14.5px;margin-bottom:11px;font-family:\'Manrope\',sans-serif;">'
      + '<div style="display:flex;gap:9px;">'
      + '<div data-act="signin" style="flex:1;">' + btn('Sign in', LIME, INK) + '</div>'
      + '<div data-act="signup" style="flex:1;">' + btn('Sign up', VIOLET, '#fff') + '</div>'
      + '</div>'
      + '<button data-act="magic" style="width:100%;margin-top:11px;background:none;border:none;color:' + VIOLET + ';font-family:\'JetBrains Mono\',monospace;font-size:12px;font-weight:600;cursor:pointer;text-decoration:underline;">Email me a magic sign-in link instead</button>'
      + '<div data-msg style="margin-top:12px;font-size:13px;color:' + CORAL + ';min-height:16px;"></div>'
      + (LIVE ? '' : '<div style="margin-top:10px;font-size:11px;color:#8a857a;font-family:\'JetBrains Mono\',monospace;line-height:1.5;">Demo mode — accounts save to this browser only. Add Firebase keys to go live.</div>');

    card.querySelector('[data-x]').onclick = closeModal;
    var msg = card.querySelector('[data-msg]');
    var emailIn = card.querySelector('[data-email]');
    var passIn = card.querySelector('[data-pass]');
    function fail(e) { msg.textContent = (e && e.message) ? e.message : 'Something went wrong. Try again.'; }

    card.querySelector('[data-p="google"]').onclick = function () { oauth('google'); };
    card.querySelector('[data-p="github"]').onclick = function () { oauth('github'); };
    function oauth(kind) {
      if (LIVE) { live._oauth(kind).then(afterSignedIn).catch(fail); return; }
      // demo: pretend, then collect profile
      demo.finishSignIn({ email: kind + '.user@demo', name: '', photo: '', provider: kind, needsProfile: true });
      showProfileStep();
    }
    card.querySelector('[data-act="signin"]').onclick = function () {
      if (!emailIn.value || !passIn.value) { fail({ message: 'Enter email and password.' }); return; }
      if (LIVE) { live.emailSignIn(emailIn.value, passIn.value).then(afterSignedIn).catch(fail); return; }
      var users = lget('sn_demo_users', {}); var rec = users[emailIn.value.toLowerCase()];
      if (!rec) { fail({ message: 'No account for that email — try Sign up.' }); return; }
      demo.finishSignIn(rec); afterSignedIn();
    };
    card.querySelector('[data-act="signup"]').onclick = function () {
      if (!emailIn.value || !passIn.value) { fail({ message: 'Enter email and password.' }); return; }
      if (LIVE) { live.emailSignUp(emailIn.value, passIn.value).then(afterSignedIn).catch(fail); return; }
      var users = lget('sn_demo_users', {});
      users[emailIn.value.toLowerCase()] = { email: emailIn.value, name: '', provider: 'email', needsProfile: true };
      lset('sn_demo_users', users);
      demo.finishSignIn(users[emailIn.value.toLowerCase()]); showProfileStep();
    };
    card.querySelector('[data-act="magic"]').onclick = function () {
      if (!emailIn.value) { fail({ message: 'Enter your email first.' }); return; }
      if (LIVE) { live.magic(emailIn.value).then(function () { msg.style.color = VIOLET; msg.textContent = 'Check your inbox for the sign-in link.'; }).catch(fail); return; }
      msg.style.color = VIOLET; msg.textContent = 'Demo mode: magic links work once live. Signing you in…';
      var users = lget('sn_demo_users', {});
      users[emailIn.value.toLowerCase()] = users[emailIn.value.toLowerCase()] || { email: emailIn.value, name: '', provider: 'magic', needsProfile: true };
      lset('sn_demo_users', users);
      setTimeout(function () { demo.finishSignIn(users[emailIn.value.toLowerCase()]); showProfileStep(); }, 500);
    };
  }

  function showProfileStep() {
    buildModal(); modalEl.style.display = 'flex';
    var card = document.getElementById('sn-auth-card');
    var u = SNAuth.user || {};
    card.innerHTML =
      '<div style="font-family:\'JetBrains Mono\',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:' + VIOLET + ';margin-bottom:6px;">Almost there</div>'
      + '<div style="font-family:\'Bricolage Grotesque\',sans-serif;font-size:26px;font-weight:800;letter-spacing:-.02em;margin-bottom:6px;">Set up your profile</div>'
      + '<div style="font-size:14px;line-height:1.5;color:#4a463d;margin-bottom:18px;">This is how you\'ll show up on comments and the forum.</div>'
      + field('Name', 'name', u.name || '', 'Your name')
      + field('Photo URL (optional)', 'photo', u.photo || '', 'https://…')
      + '<label style="display:block;font-family:\'JetBrains Mono\',monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#6f6a60;margin:2px 0 6px;">Role</label>'
      + '<select data-f="role" style="width:100%;box-sizing:border-box;border:1.5px solid ' + INK + ';border-radius:11px;padding:11px 13px;font-size:14.5px;margin-bottom:11px;font-family:\'Manrope\',sans-serif;background:#fff;">'
      + ['Student', 'Aspiring PM', 'Working PM', 'Other'].map(function (r) { return '<option' + (u.role === r ? ' selected' : '') + '>' + r + '</option>'; }).join('')
      + '</select>'
      + field('Organisation (optional)', 'org', u.org || '', 'Where you study / work')
      + field('Experience (optional)', 'exp', u.exp || '', 'e.g. Fresher, 2 yrs, 5+ yrs')
      + '<div data-save style="margin-top:6px;">' + btn('Save & continue', LIME, INK) + '</div>'
      + '<div data-msg style="margin-top:10px;font-size:13px;color:' + CORAL + ';min-height:16px;"></div>';
    function field(label, key, val, ph) {
      return '<label style="display:block;font-family:\'JetBrains Mono\',monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#6f6a60;margin:2px 0 6px;">' + label + '</label>'
        + '<input data-f="' + key + '" value="' + esc(val) + '" placeholder="' + esc(ph) + '" style="width:100%;box-sizing:border-box;border:1.5px solid ' + INK + ';border-radius:11px;padding:11px 13px;font-size:14.5px;margin-bottom:11px;font-family:\'Manrope\',sans-serif;">';
    }
    card.querySelector('[data-save]').onclick = function () {
      var get = function (k) { var el = card.querySelector('[data-f="' + k + '"]'); return el ? el.value.trim() : ''; };
      if (!get('name')) { card.querySelector('[data-msg]').textContent = 'Please add your name.'; return; }
      SNAuth.updateProfile({ name: get('name'), photo: get('photo'), role: get('role'), org: get('org'), exp: get('exp'), needsProfile: false });
      SNAuth.user.needsProfile = false;
      closeModal();
      if (pendingResolve) { var r = pendingResolve; pendingResolve = null; r(SNAuth.user); }
    };
  }

  /* ================================================================== */
  /* Account chip (bottom-left, every page) + menu                       */
  var acctWrap, acctBtn, acctMenu, acctOpen = false;
  function buildAccount() {
    if (acctWrap) return;
    acctWrap = document.createElement('div');
    acctWrap.style.cssText = 'position:fixed;left:20px;bottom:20px;z-index:9997;font-family:\'Manrope\',sans-serif;';
    acctBtn = document.createElement('button');
    acctBtn.style.cssText = 'display:flex;align-items:center;gap:9px;background:#fff;color:' + INK + ';border:1.5px solid ' + INK + ';border-radius:999px;padding:8px 15px 8px 9px;font-size:13.5px;font-weight:700;cursor:pointer;box-shadow:3px 3px 0 ' + INK + ';font-family:\'Manrope\',sans-serif;';
    acctMenu = document.createElement('div');
    acctMenu.style.cssText = 'position:absolute;left:0;bottom:52px;min-width:190px;background:' + CREAM + ';border:1.5px solid ' + INK + ';border-radius:16px;box-shadow:5px 5px 0 ' + INK + ';padding:8px;display:none;flex-direction:column;gap:2px;';
    acctWrap.appendChild(acctMenu); acctWrap.appendChild(acctBtn);
    document.body.appendChild(acctWrap);
    // If a header slot (#sn-account-slot) exists, keep the chip inside it — re-inserting whenever
    // the host framework re-renders the nav and drops our injected node (otherwise it vanishes after sign-in).
    var usingSlot = false;
    function placeInSlot() {
      var slot = document.getElementById('sn-account-slot');
      if (slot && !slot.contains(acctWrap)) {
        slot.appendChild(acctWrap);
        acctWrap.style.cssText = 'position:relative;z-index:9997;font-family:\'Manrope\',sans-serif;';
        acctMenu.style.cssText = 'position:absolute;left:50%;transform:translateX(-50%);top:52px;min-width:190px;background:' + CREAM + ';border:1.5px solid ' + INK + ';border-radius:16px;box-shadow:5px 5px 0 ' + INK + ';padding:8px;display:none;flex-direction:column;gap:2px;';
        usingSlot = true;
        renderAccount();
      }
    }
    placeInSlot();
    var mo = new MutationObserver(function () { placeInSlot(); });
    mo.observe(document.body, { childList: true, subtree: true });
    // In fixed (bottom-left) mode, don't let the chip cross/overlap the footer.
    var clampFooter = function () {
      if (usingSlot) return;
      var footer = document.querySelector('footer');
      var vh = window.innerHeight;
      var bottom = 20;
      if (footer) {
        var ft = footer.getBoundingClientRect().top;
        if (ft < vh - 20) bottom = Math.max(20, vh - ft + 12);
      }
      acctWrap.style.bottom = bottom + 'px';
    };
    window.addEventListener('scroll', clampFooter, { passive: true });
    window.addEventListener('resize', clampFooter);
    clampFooter();
    acctBtn.addEventListener('click', function (e) { e.stopPropagation(); var signedIn = SNAuth.user && !SNAuth.user.needsProfile; if (!signedIn) { openModal(); return; } acctOpen = !acctOpen; renderAccount(); });
    document.addEventListener('click', function () { if (acctOpen) { acctOpen = false; renderAccount(); } });
    renderAccount();
  }
  function menuItem(label, cb, danger) {
    var b = document.createElement('button');
    b.textContent = label;
    b.style.cssText = 'text-align:left;background:none;border:none;border-radius:10px;padding:10px 12px;font-size:14px;font-weight:600;cursor:pointer;font-family:\'Manrope\',sans-serif;color:' + (danger ? CORAL : INK) + ';';
    b.addEventListener('mouseenter', function () { b.style.background = '#e6e1d6'; });
    b.addEventListener('mouseleave', function () { b.style.background = 'none'; });
    b.addEventListener('click', function (e) { e.stopPropagation(); acctOpen = false; renderAccount(); cb(); });
    return b;
  }
  function renderAccount() {
    if (!acctBtn) return;
    var u = SNAuth.user;
    if (u && !u.needsProfile) {
      var initial = (u.name || '?').trim().charAt(0).toUpperCase();
      var av;
      if (u.photo) {
        av = '<span style="width:28px;height:28px;border-radius:999px;border:1.5px solid ' + INK + ';background:' + LIME + ';display:flex;align-items:center;justify-content:center;font-weight:800;font-family:\'Bricolage Grotesque\',sans-serif;font-size:14px;overflow:hidden;flex:none;"><img src="' + esc(u.photo) + '" alt="" referrerpolicy="no-referrer" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="this.parentNode.textContent=\'' + esc(initial) + '\'"></span>';
      } else {
        av = '<span style="width:28px;height:28px;border-radius:999px;border:1.5px solid ' + INK + ';background:' + LIME + ';display:flex;align-items:center;justify-content:center;font-weight:800;font-family:\'Bricolage Grotesque\',sans-serif;font-size:14px;flex:none;">' + esc(initial) + '</span>';
      }
      acctBtn.innerHTML = av + '<span>' + esc((u.name || '').split(' ')[0]) + '</span>';
    } else {
      acctBtn.innerHTML = '<span style="width:28px;height:28px;border-radius:999px;border:1.5px solid ' + INK + ';background:' + VIOLET + ';color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;">◔</span><span>Sign in</span>';
    }
    acctMenu.innerHTML = ''; acctMenu.style.display = acctOpen ? 'flex' : 'none';
    if (!acctOpen) return;
    if (u && !u.needsProfile) {
      acctMenu.appendChild(menuItem('👤  Edit my profile', function () { if (SNAuth.user) { SNAuth.user.needsProfile = true; openModal(); } }));
      if (SNAuth.isAdmin()) acctMenu.appendChild(menuItem('🛠  Admin', function () { location.href = 'Shubham Nayak Portfolio.dc.html#admin'; }));
      acctMenu.appendChild(menuItem('Sign out', function () { SNAuth.signOut(); }, true));
    }
  }

  /* ================================================================== */
  A.init();
  // expose colors for pages that want to match
  window.SNAuth.colors = { INK: INK, CREAM: CREAM, VIOLET: VIOLET, LIME: LIME, CORAL: CORAL };
  listeners.push(renderAccount);

  // Gate printing behind sign-in (Ctrl/Cmd+P and window.print()).
  window.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
      if (!(SNAuth.user && !SNAuth.user.needsProfile)) {
        e.preventDefault();
        SNAuth.require('Sign in free to print or save this as a PDF.');
      }
    }
  }, true);
  var _print = window.print && window.print.bind(window);
  if (_print) window.print = function () {
    if (SNAuth.user && !SNAuth.user.needsProfile) return _print();
    SNAuth.require('Sign in free to print or save this as a PDF.').then(function () { _print(); });
  };
  // Any element with data-sn-gate="download" (or any value) requires sign-in on click.
  document.addEventListener('click', function (e) {
    var g = e.target.closest && e.target.closest('[data-sn-gate]');
    if (g && !(SNAuth.user && !SNAuth.user.needsProfile)) {
      e.preventDefault(); e.stopPropagation();
      SNAuth.require('Sign in free to download resources.');
    }
  }, true);

  /* ================================================================== */
  /* Floating "Join the Community" button — fixed top-center, every page */
  /* Appears while scrolling, disappears 3s after scrolling stops.       */
  var commBtn;
  function buildCommunity() {
    if (commBtn) return;
    if (/Forum\.dc\.html/i.test(location.pathname + location.href)) return; // skip on the forum itself
    commBtn = document.createElement('button');
    commBtn.setAttribute('aria-label', 'Join the community');
    commBtn.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:9998;'
      + 'display:flex;align-items:center;gap:9px;background:' + LIME + ';color:' + INK + ';border:1.5px solid ' + INK + ';'
      + 'border-radius:999px;padding:11px 24px;font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:16px;'
      + 'letter-spacing:-0.01em;cursor:pointer;box-shadow:3px 3px 0 ' + INK + ';opacity:0;pointer-events:none;transition:opacity .3s ease;';
    commBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="' + INK + '" style="flex:none;">'
      + '<circle cx="8.5" cy="8" r="3.3"/><circle cx="16.5" cy="8.6" r="2.7"/>'
      + '<path d="M3 19c0-3.1 2.5-5.3 5.5-5.3s5.5 2.2 5.5 5.3z"/>'
      + '<path d="M14.6 19c0-2 .8-3.7 2.1-4.6 2.6-.3 4.8 1.7 4.8 4.6z"/></svg>'
      + '<span>Join the Community</span>';
    commBtn.addEventListener('click', function () { location.href = 'Forum.dc.html'; });
    document.body.appendChild(commBtn);
    var hideT;
    var reveal = function () {
      commBtn.style.opacity = '1';
      commBtn.style.pointerEvents = 'auto';
      clearTimeout(hideT);
      hideT = setTimeout(function () { commBtn.style.opacity = '0'; commBtn.style.pointerEvents = 'none'; }, 3000);
    };
    window.addEventListener('scroll', reveal, { passive: true });
  }

  function boot() { buildAccount(); buildCommunity(); emit(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else setTimeout(boot, 0);
})();
