/* sql-engine.js — a tiny in-browser SQL engine for the SQL Bootcamp page.
   Supports: SELECT/DISTINCT, FROM (table | subquery | CTE), INNER/LEFT/CROSS JOIN,
   WHERE, GROUP BY (incl. select-alias), HAVING, ORDER BY (alias/expr, ASC/DESC),
   LIMIT/OFFSET, aggregates (COUNT/SUM/AVG/MIN/MAX, COUNT DISTINCT), CASE WHEN,
   scalar + IN subqueries, WITH ... AS (multiple CTEs), window functions
   (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, SUM/AVG/COUNT/MIN/MAX OVER),
   functions ROUND/UPPER/LOWER/LENGTH/SUBSTR/COALESCE/ABS, LIKE/IN/BETWEEN/IS NULL.
   No network, no dependencies. window.SQLMini = { run, compare, schema, preview }. */
(function () {
  "use strict";

  function mk(cols, rows) {
    return rows.map(function (r) { var o = {}; cols.forEach(function (c, i) { o[c] = r[i]; }); return o; });
  }

  var COLS = {
    users: ["id", "name", "city", "plan", "signup_date", "age"],
    products: ["id", "name", "category", "price"],
    orders: ["id", "user_id", "product_id", "quantity", "amount", "order_date", "status"],
    reviews: ["id", "product_id", "user_id", "rating", "review_date"]
  };

  var DB = {
    users: mk(COLS.users, [
      [1, "Ayanavo", "Bhubaneswar", "pro", "2025-01-04", 24],
      [2, "Kiara", "Kolkata", "free", "2025-01-11", 25],
      [3, "Aisha", "Cuttack", "team", "2025-02-02", 26],
      [4, "Nilabha", "Bhubaneswar", "free", "2025-02-14", 24],
      [5, "Jagannath", "Puri", "pro", "2025-03-01", 27],
      [6, "Tara", "Kolkata", "pro", "2025-03-09", 23],
      [7, "Shubham", "Bhubaneswar", "free", "2025-03-22", 22],
      [8, "Ishita", "Mumbai", "team", "2025-04-02", 26],
      [9, "Meera", "Delhi", "free", "2025-04-18", 29],
      [10, "Rohan", "Mumbai", "pro", "2025-05-05", 31],
      [11, "Anaya", null, "free", "2025-05-21", 28],
      [12, "Aditya", "Delhi", "team", "2025-06-02", 33]
    ]),
    products: mk(COLS.products, [
      [1, "Query Console", "tools", 1200],
      [2, "Metrics Handbook", "books", 499],
      [3, "RCA Masterclass", "courses", 2999],
      [4, "Guesstimate Deck", "courses", 1499],
      [5, "SQL Bootcamp", "courses", 999],
      [6, "Roadmap Template", "tools", 299],
      [7, "Interview Kit", "books", 799],
      [8, "Analytics Add-on", "tools", 2499]
    ]),
    orders: mk(COLS.orders, [
      [1, 1, 3, 1, 2999, "2025-01-06", "paid"],
      [2, 1, 2, 2, 998, "2025-01-20", "paid"],
      [3, 2, 5, 1, 999, "2025-01-22", "paid"],
      [4, 3, 8, 1, 2499, "2025-02-03", "paid"],
      [5, 3, 1, 3, 3600, "2025-02-11", "paid"],
      [6, 5, 5, 1, 999, "2025-02-18", "refunded"],
      [7, 6, 4, 1, 1499, "2025-02-24", "paid"],
      [8, 7, 6, 2, 598, "2025-03-02", "paid"],
      [9, 8, 3, 1, 2999, "2025-03-05", "paid"],
      [10, 8, 7, 1, 799, "2025-03-12", "paid"],
      [11, 2, 2, 1, 499, "2025-03-15", "pending"],
      [12, 5, 1, 1, 1200, "2025-03-21", "paid"],
      [13, 6, 5, 1, 999, "2025-03-28", "paid"],
      [14, 9, 5, 1, 999, "2025-04-04", "paid"],
      [15, 10, 8, 2, 4998, "2025-04-09", "paid"],
      [16, 10, 3, 1, 2999, "2025-04-16", "refunded"],
      [17, 12, 1, 5, 6000, "2025-04-21", "paid"],
      [18, 12, 7, 3, 2397, "2025-04-29", "paid"],
      [19, 1, 5, 1, 999, "2025-05-03", "paid"],
      [20, 6, 7, 1, 799, "2025-05-11", "paid"],
      [21, 9, 6, 1, 299, "2025-05-19", "pending"],
      [22, 3, 3, 2, 5998, "2025-05-24", "paid"],
      [23, 8, 5, 1, 999, "2025-06-01", "paid"],
      [24, 10, 4, 1, 1499, "2025-06-07", "paid"],
      [25, 12, 8, 1, 2499, "2025-06-12", "paid"],
      [26, 2, 7, 1, 799, "2025-06-18", "paid"]
    ]),
    reviews: mk(COLS.reviews, [
      [1, 3, 1, 5, "2025-01-15"],
      [2, 2, 1, 4, "2025-01-28"],
      [3, 5, 2, 5, "2025-02-02"],
      [4, 8, 3, 3, "2025-02-20"],
      [5, 1, 3, 4, "2025-02-27"],
      [6, 4, 6, 5, "2025-03-04"],
      [7, 6, 7, 2, "2025-03-10"],
      [8, 3, 8, 5, "2025-03-18"],
      [9, 5, 6, 4, "2025-04-02"],
      [10, 5, 9, null, "2025-04-10"],
      [11, 8, 10, 2, "2025-04-20"],
      [12, 1, 12, 5, "2025-04-30"]
    ])
  };

  /* ---------------- tokenizer ---------------- */
  function tokenize(sql) {
    var t = [], i = 0;
    var isDigit = function (c) { return c >= "0" && c <= "9"; };
    var isIdent = function (c) { return /[A-Za-z_]/.test(c); };
    while (i < sql.length) {
      var c = sql[i];
      if (/\s/.test(c)) { i++; continue; }
      if (c === "-" && sql[i + 1] === "-") { while (i < sql.length && sql[i] !== "\n") i++; continue; }
      if (c === "'" || c === '"') {
        var q = c, j = i + 1, s = "";
        while (j < sql.length) {
          if (sql[j] === q && sql[j + 1] === q) { s += q; j += 2; continue; }
          if (sql[j] === q) break;
          s += sql[j++];
        }
        if (j >= sql.length) throw new Error("SYNTAX FAULT — unclosed quote. Every '  needs a partner.");
        t.push({ k: "str", v: s }); i = j + 1; continue;
      }
      if (isDigit(c) || (c === "." && isDigit(sql[i + 1]))) {
        var a = i; while (i < sql.length && /[0-9.]/.test(sql[i])) i++;
        t.push({ k: "num", v: parseFloat(sql.slice(a, i)) }); continue;
      }
      if (isIdent(c)) {
        var b = i; while (i < sql.length && /[A-Za-z0-9_]/.test(sql[i])) i++;
        t.push({ k: "id", v: sql.slice(b, i) }); continue;
      }
      var two = sql.substr(i, 2);
      if (two === "<=" || two === ">=" || two === "<>" || two === "!=" || two === "||") { t.push({ k: "op", v: two }); i += 2; continue; }
      if ("=<>+-*/(),.;".indexOf(c) >= 0) { t.push({ k: "op", v: c }); i++; continue; }
      throw new Error("SYNTAX FAULT — I don't know what to do with the character '" + c + "'.");
    }
    return t;
  }

  var RESERVED = {};
  ("SELECT DISTINCT ALL FROM WHERE GROUP BY HAVING ORDER LIMIT OFFSET JOIN INNER LEFT RIGHT FULL CROSS OUTER ON AND OR NOT IN LIKE BETWEEN IS NULL CASE WHEN THEN ELSE END AS ASC DESC OVER PARTITION WITH UNION USING")
    .split(" ").forEach(function (w) { RESERVED[w] = 1; });

  var AGGS = { COUNT: 1, SUM: 1, AVG: 1, MIN: 1, MAX: 1 };
  var uid = 0;

  /* ---------------- parser ---------------- */
  function Parser(t) { this.t = t; this.i = 0; }
  Parser.prototype = {
    peek: function (k) { return this.t[this.i + (k || 0)] || null; },
    next: function () { return this.t[this.i++]; },
    isKw: function (w) { var x = this.peek(); return !!x && x.k === "id" && x.v.toUpperCase() === w; },
    eatKw: function (w) { if (this.isKw(w)) { this.i++; return true; } return false; },
    needKw: function (w) { if (!this.eatKw(w)) this.err("expected " + w); },
    isOp: function (v) { var x = this.peek(); return !!x && x.k === "op" && x.v === v; },
    eatOp: function (v) { if (this.isOp(v)) { this.i++; return true; } return false; },
    needOp: function (v) { if (!this.eatOp(v)) this.err("expected '" + v + "'"); },
    err: function (m) {
      var x = this.peek();
      throw new Error("SYNTAX FAULT — " + m + (x ? " near '" + x.v + "'" : " at the end of your query") + ".");
    },

    parseStatement: function () {
      var ctes = {};
      if (this.eatKw("WITH")) {
        do {
          var n = this.next();
          if (!n || n.k !== "id") this.err("expected a name after WITH");
          this.needKw("AS"); this.needOp("(");
          var q = this.parseSelect(); this.needOp(")");
          ctes[n.v.toLowerCase()] = q;
        } while (this.eatOp(","));
      }
      var main = this.parseSelect();
      this.eatOp(";");
      if (this.peek()) this.err("unexpected extra input");
      return { query: main, ctes: ctes };
    },

    parseAlias: function () {
      if (this.eatKw("AS")) { var a = this.next(); if (!a) this.err("expected a name after AS"); return String(a.v); }
      var x = this.peek();
      if (x && x.k === "id" && !RESERVED[x.v.toUpperCase()]) { this.i++; return x.v; }
      return null;
    },

    parseTableRef: function () {
      if (this.eatOp("(")) {
        var q = this.parseSelect(); this.needOp(")");
        var al = this.parseAlias();
        return { sub: q, alias: al || "sub" };
      }
      var t = this.next();
      if (!t || t.k !== "id") this.err("expected a table name");
      var alias = this.parseAlias();
      return { name: t.v, alias: alias || t.v };
    },

    parseSelect: function () {
      this.needKw("SELECT");
      var distinct = this.eatKw("DISTINCT"); this.eatKw("ALL");
      var items = [];
      do {
        if (this.isOp("*")) { this.i++; items.push({ star: true, table: null }); continue; }
        var e = this.parseExpr();
        if (e.t === "starcol") { items.push({ star: true, table: e.table }); continue; }
        var alias = this.parseAlias();
        items.push({ e: e, alias: alias });
      } while (this.eatOp(","));

      var n = { distinct: distinct, items: items, from: null, joins: [], where: null, groupBy: [], having: null, orderBy: [], limit: null, offset: null };
      if (this.eatKw("FROM")) {
        n.from = this.parseTableRef();
        for (;;) {
          var kind = null;
          if (this.isKw("LEFT")) { this.i++; this.eatKw("OUTER"); this.needKw("JOIN"); kind = "left"; }
          else if (this.isKw("INNER")) { this.i++; this.needKw("JOIN"); kind = "inner"; }
          else if (this.isKw("CROSS")) { this.i++; this.needKw("JOIN"); kind = "cross"; }
          else if (this.isKw("JOIN")) { this.i++; kind = "inner"; }
          else break;
          var tr = this.parseTableRef(), on = null;
          if (this.eatKw("ON")) on = this.parseExpr();
          n.joins.push({ kind: kind, tr: tr, on: on });
        }
      }
      if (this.eatKw("WHERE")) n.where = this.parseExpr();
      if (this.eatKw("GROUP")) { this.needKw("BY"); do { n.groupBy.push(this.parseExpr()); } while (this.eatOp(",")); }
      if (this.eatKw("HAVING")) n.having = this.parseExpr();
      if (this.eatKw("ORDER")) {
        this.needKw("BY");
        do {
          var oe = this.parseExpr(), dir = "asc";
          if (this.eatKw("DESC")) dir = "desc"; else this.eatKw("ASC");
          n.orderBy.push({ e: oe, dir: dir });
        } while (this.eatOp(","));
      }
      if (this.eatKw("LIMIT")) { n.limit = this.parseExpr(); if (this.eatKw("OFFSET")) n.offset = this.parseExpr(); }
      return n;
    },

    parseExpr: function () { return this.parseOr(); },
    parseOr: function () { var l = this.parseAnd(); while (this.eatKw("OR")) l = { t: "or", l: l, r: this.parseAnd() }; return l; },
    parseAnd: function () { var l = this.parseNot(); while (this.eatKw("AND")) l = { t: "and", l: l, r: this.parseNot() }; return l; },
    parseNot: function () { if (this.eatKw("NOT")) return { t: "not", e: this.parseNot() }; return this.parseCmp(); },
    parseCmp: function () {
      var l = this.parseAdd();
      for (;;) {
        if (this.isOp("=") || this.isOp("<") || this.isOp(">") || this.isOp("<=") || this.isOp(">=") || this.isOp("!=") || this.isOp("<>")) {
          var op = this.next().v; l = { t: "cmp", op: op, l: l, r: this.parseAdd() }; continue;
        }
        if (this.isKw("LIKE")) { this.i++; l = { t: "like", l: l, r: this.parseAdd(), neg: false }; continue; }
        if (this.isKw("NOT") && this.peek(1) && this.peek(1).k === "id") {
          var nx = this.peek(1).v.toUpperCase();
          if (nx === "LIKE") { this.i += 2; l = { t: "like", l: l, r: this.parseAdd(), neg: true }; continue; }
          if (nx === "IN") { this.i += 2; l = this.parseIn(l, true); continue; }
          if (nx === "BETWEEN") { this.i += 2; var a1 = this.parseAdd(); this.needKw("AND"); l = { t: "between", e: l, a: a1, b: this.parseAdd(), neg: true }; continue; }
        }
        if (this.isKw("IN")) { this.i++; l = this.parseIn(l, false); continue; }
        if (this.isKw("BETWEEN")) { this.i++; var a2 = this.parseAdd(); this.needKw("AND"); l = { t: "between", e: l, a: a2, b: this.parseAdd(), neg: false }; continue; }
        if (this.isKw("IS")) { this.i++; var neg = this.eatKw("NOT"); this.needKw("NULL"); l = { t: "isnull", e: l, neg: neg }; continue; }
        break;
      }
      return l;
    },
    parseIn: function (l, neg) {
      this.needOp("(");
      if (this.isKw("SELECT")) { var q = this.parseSelect(); this.needOp(")"); return { t: "insub", l: l, q: q, neg: neg }; }
      var list = [];
      do { list.push(this.parseExpr()); } while (this.eatOp(","));
      this.needOp(")");
      return { t: "inlist", l: l, list: list, neg: neg };
    },
    parseAdd: function () {
      var l = this.parseMul();
      for (;;) {
        if (this.isOp("+") || this.isOp("-") || this.isOp("||")) { var op = this.next().v; l = { t: "bin", op: op, l: l, r: this.parseMul() }; }
        else break;
      }
      return l;
    },
    parseMul: function () {
      var l = this.parseUnary();
      for (;;) {
        if (this.isOp("*") || this.isOp("/")) { var op = this.next().v; l = { t: "bin", op: op, l: l, r: this.parseUnary() }; }
        else break;
      }
      return l;
    },
    parseUnary: function () { if (this.eatOp("-")) return { t: "neg", e: this.parseUnary() }; return this.parsePrimary(); },
    parseCase: function () {
      this.i++;
      var base = null, whens = [], els = null;
      if (!this.isKw("WHEN")) base = this.parseExpr();
      while (this.eatKw("WHEN")) { var c = this.parseExpr(); this.needKw("THEN"); whens.push({ c: c, r: this.parseExpr() }); }
      if (this.eatKw("ELSE")) els = this.parseExpr();
      this.needKw("END");
      if (!whens.length) this.err("a CASE needs at least one WHEN");
      return { t: "case", base: base, whens: whens, els: els };
    },
    parseOver: function () {
      this.needOp("(");
      var w = { part: [], ord: [] };
      if (this.eatKw("PARTITION")) { this.needKw("BY"); do { w.part.push(this.parseExpr()); } while (this.eatOp(",")); }
      if (this.eatKw("ORDER")) {
        this.needKw("BY");
        do { var e = this.parseExpr(), dir = "asc"; if (this.eatKw("DESC")) dir = "desc"; else this.eatKw("ASC"); w.ord.push({ e: e, dir: dir }); } while (this.eatOp(","));
      }
      this.needOp(")");
      return w;
    },
    parsePrimary: function () {
      var x = this.peek();
      if (!x) this.err("your query stops in the middle of something");
      if (x.k === "num" || x.k === "str") { this.i++; return { t: "lit", v: x.v }; }
      if (this.isOp("(")) {
        this.i++;
        if (this.isKw("SELECT")) { var q = this.parseSelect(); this.needOp(")"); return { t: "scalarsub", q: q }; }
        var e = this.parseExpr(); this.needOp(")"); return e;
      }
      if (x.k === "id") {
        var up = x.v.toUpperCase();
        if (up === "CASE") return this.parseCase();
        if (up === "NULL") { this.i++; return { t: "lit", v: null }; }
        if (up === "TRUE") { this.i++; return { t: "lit", v: 1 }; }
        if (up === "FALSE") { this.i++; return { t: "lit", v: 0 }; }
        if (this.peek(1) && this.peek(1).k === "op" && this.peek(1).v === "(") {
          this.i += 2;
          var args = [], distinct = false, star = false;
          if (this.eatOp("*")) star = true;
          else if (!this.isOp(")")) {
            if (this.eatKw("DISTINCT")) distinct = true;
            do { args.push(this.parseExpr()); } while (this.eatOp(","));
          }
          this.needOp(")");
          var over = null;
          if (this.isKw("OVER")) { this.i++; over = this.parseOver(); }
          return { t: "func", name: up, args: args, distinct: distinct, star: star, over: over, id: ++uid };
        }
        this.i++;
        var table = null, col = x.v;
        if (this.isOp(".")) {
          this.i++;
          var c2 = this.next();
          if (c2 && c2.k === "op" && c2.v === "*") return { t: "starcol", table: col };
          if (!c2 || c2.k !== "id") this.err("expected a column name after '.'");
          table = col; col = c2.v;
        }
        return { t: "col", table: table, col: col };
      }
      this.err("unexpected '" + x.v + "'");
    }
  };

  /* ---------------- helpers ---------------- */
  function walk(e, cb) {
    if (!e || typeof e !== "object") return;
    cb(e);
    ["l", "r", "e", "base", "els"].forEach(function (k) { if (e[k]) walk(e[k], cb); });
    ["args", "list"].forEach(function (k) { if (e[k]) e[k].forEach(function (c) { walk(c, cb); }); });
    if (e.whens) e.whens.forEach(function (w) { walk(w.c, cb); walk(w.r, cb); });
    if (e.a) walk(e.a, cb);
    if (e.b) walk(e.b, cb);
  }
  function hasAgg(e) {
    var f = false;
    walk(e, function (n) { if (n.t === "func" && AGGS[n.name] && !n.over) f = true; });
    return f;
  }
  function collectWins(e, out) {
    walk(e, function (n) { if (n.t === "func" && n.over) out.push(n); });
  }
  function num(v) { return typeof v === "number" ? v : (v === null || v === undefined || v === "" ? null : (isNaN(parseFloat(v)) ? null : parseFloat(v))); }
  function truthy(v) { return v !== null && v !== undefined && v !== false && v !== 0; }
  function cmpVals(a, b) {
    if (a === null || a === undefined) return b === null || b === undefined ? 0 : 1;
    if (b === null || b === undefined) return -1;
    if (typeof a === "number" && typeof b === "number") return a < b ? -1 : a > b ? 1 : 0;
    return String(a) < String(b) ? -1 : String(a) > String(b) ? 1 : 0;
  }
  function likeToRe(pat) {
    var s = String(pat).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/%/g, "[\\s\\S]*").replace(/_/g, "[\\s\\S]");
    return new RegExp("^" + s + "$", "i");
  }
  function aggregate(name, vals, star) {
    if (star) return vals.length;
    var clean = vals.filter(function (v) { return v !== null && v !== undefined; });
    switch (name) {
      case "COUNT": return clean.length;
      case "SUM": return clean.length ? clean.reduce(function (a, b) { return a + (num(b) || 0); }, 0) : null;
      case "AVG": return clean.length ? clean.reduce(function (a, b) { return a + (num(b) || 0); }, 0) / clean.length : null;
      case "MIN": return clean.length ? clean.slice().sort(cmpVals)[0] : null;
      case "MAX": return clean.length ? clean.slice().sort(cmpVals)[clean.length - 1] : null;
    }
    return null;
  }

  /* ---------------- evaluation ---------------- */
  function ev(e, s) {
    switch (e.t) {
      case "lit": return e.v;
      case "col": {
        var key = (e.table ? e.table.toLowerCase() + "." : "") + e.col.toLowerCase();
        if (s.row && key in s.row) return s.row[key];
        if (s.outer && key in s.outer) return s.outer[key];
        throw new Error("Unknown column '" + (e.table ? e.table + "." + e.col : e.col) + "'. Check the spelling, or qualify it like users." + e.col + ".");
      }
      case "and": return truthy(ev(e.l, s)) ? (truthy(ev(e.r, s)) ? 1 : 0) : 0;
      case "or": return truthy(ev(e.l, s)) || truthy(ev(e.r, s)) ? 1 : 0;
      case "not": { var v = ev(e.e, s); return v === null ? null : (truthy(v) ? 0 : 1); }
      case "neg": { var n1 = num(ev(e.e, s)); return n1 === null ? null : -n1; }
      case "bin": {
        var a = ev(e.l, s), b = ev(e.r, s);
        if (e.op === "||") return (a === null ? "" : String(a)) + (b === null ? "" : String(b));
        var x = num(a), y = num(b);
        if (x === null || y === null) return null;
        if (e.op === "+") return x + y;
        if (e.op === "-") return x - y;
        if (e.op === "*") return x * y;
        if (e.op === "/") return y === 0 ? null : x / y;
        return null;
      }
      case "cmp": {
        var l = ev(e.l, s), r = ev(e.r, s);
        if (l === null || r === null) return null;
        var c = (typeof l === "number" || typeof r === "number") && num(l) !== null && num(r) !== null ? cmpVals(num(l), num(r)) : cmpVals(l, r);
        switch (e.op) {
          case "=": return c === 0 ? 1 : 0;
          case "!=": case "<>": return c !== 0 ? 1 : 0;
          case "<": return c < 0 ? 1 : 0;
          case ">": return c > 0 ? 1 : 0;
          case "<=": return c <= 0 ? 1 : 0;
          case ">=": return c >= 0 ? 1 : 0;
        }
        return null;
      }
      case "like": {
        var lv = ev(e.l, s), pv = ev(e.r, s);
        if (lv === null || pv === null) return null;
        var m = likeToRe(pv).test(String(lv)) ? 1 : 0;
        return e.neg ? (m ? 0 : 1) : m;
      }
      case "between": {
        var bv = ev(e.e, s), lo = ev(e.a, s), hi = ev(e.b, s);
        if (bv === null || lo === null || hi === null) return null;
        var inr = cmpVals(bv, lo) >= 0 && cmpVals(bv, hi) <= 0 ? 1 : 0;
        return e.neg ? (inr ? 0 : 1) : inr;
      }
      case "isnull": { var iv = ev(e.e, s); var isn = iv === null || iv === undefined; return e.neg ? (isn ? 0 : 1) : (isn ? 1 : 0); }
      case "inlist": {
        var t1 = ev(e.l, s);
        var hit = e.list.some(function (x2) { return cmpVals(t1, ev(x2, s)) === 0; }) ? 1 : 0;
        return e.neg ? (hit ? 0 : 1) : hit;
      }
      case "insub": {
        var t2 = ev(e.l, s);
        var res = execSelect(e.q, s.ctx, s.row);
        var vals = res.rows.map(function (r) { return r[0]; });
        var hit2 = vals.some(function (v2) { return cmpVals(t2, v2) === 0; }) ? 1 : 0;
        return e.neg ? (hit2 ? 0 : 1) : hit2;
      }
      case "scalarsub": {
        var r2 = execSelect(e.q, s.ctx, s.row);
        return r2.rows.length ? r2.rows[0][0] : null;
      }
      case "case": {
        var bv2 = e.base ? ev(e.base, s) : null;
        for (var i = 0; i < e.whens.length; i++) {
          var w = e.whens[i];
          var ok = e.base ? cmpVals(bv2, ev(w.c, s)) === 0 : truthy(ev(w.c, s));
          if (ok) return ev(w.r, s);
        }
        return e.els ? ev(e.els, s) : null;
      }
      case "func": return evFunc(e, s);
      case "starcol": throw new Error("You can only use " + e.table + ".* in the SELECT list.");
    }
    throw new Error("I couldn't evaluate part of your query.");
  }

  function evFunc(e, s) {
    if (e.over) return s.win && (e.id in s.win) ? s.win[e.id] : null;
    if (AGGS[e.name]) {
      var rows = s.rows || (s.row ? [s.row] : []);
      if (e.star) return rows.length;
      if (!e.args.length) throw new Error(e.name + "() needs a column inside the brackets (or use COUNT(*)).");
      var vals = rows.map(function (r) { return ev(e.args[0], { row: r, ctx: s.ctx, outer: s.outer }); });
      if (e.distinct) {
        var seen = {}, out = [];
        vals.forEach(function (v) { var k = JSON.stringify(v); if (!(k in seen)) { seen[k] = 1; out.push(v); } });
        vals = out;
      }
      return aggregate(e.name, vals, false);
    }
    var a = e.args.map(function (x) { return ev(x, s); });
    switch (e.name) {
      case "ROUND": {
        var n2 = num(a[0]); if (n2 === null) return null;
        var d = a.length > 1 ? (num(a[1]) || 0) : 0, p = Math.pow(10, d);
        return Math.round(n2 * p) / p;
      }
      case "ABS": { var n3 = num(a[0]); return n3 === null ? null : Math.abs(n3); }
      case "UPPER": return a[0] === null ? null : String(a[0]).toUpperCase();
      case "LOWER": return a[0] === null ? null : String(a[0]).toLowerCase();
      case "LENGTH": return a[0] === null ? null : String(a[0]).length;
      case "SUBSTR": case "SUBSTRING": {
        if (a[0] === null) return null;
        var str = String(a[0]), st = (num(a[1]) || 1) - 1;
        return a.length > 2 ? str.substr(st, num(a[2])) : str.substr(st);
      }
      case "COALESCE": { for (var i = 0; i < a.length; i++) if (a[i] !== null && a[i] !== undefined) return a[i]; return null; }
      case "IFNULL": return a[0] === null || a[0] === undefined ? a[1] : a[0];
    }
    throw new Error(e.name + "() isn't available in this trainer. Supported: COUNT, SUM, AVG, MIN, MAX, ROUND, ABS, UPPER, LOWER, LENGTH, SUBSTR, COALESCE — plus ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD with OVER().");
  }

  /* ---------------- execution ---------------- */
  function resultToObjects(res) {
    return res.rows.map(function (r) {
      var o = {};
      res.cols.forEach(function (c, i) { o[c] = r[i]; });
      return o;
    });
  }

  function getSource(ref, ctx) {
    if (ref.sub) {
      var res = execSelect(ref.sub, ctx, null);
      return { alias: ref.alias, name: null, cols: res.cols.slice(), rows: resultToObjects(res) };
    }
    var key = String(ref.name).toLowerCase();
    if (ctx.cteDefs && ctx.cteDefs[key]) {
      if (!ctx.cteCache[key]) {
        var r2 = execSelect(ctx.cteDefs[key], ctx, null);
        ctx.cteCache[key] = { cols: r2.cols.slice(), rows: resultToObjects(r2) };
      }
      var c = ctx.cteCache[key];
      return { alias: ref.alias, name: ref.name, cols: c.cols.slice(), rows: c.rows };
    }
    if (DB[key]) return { alias: ref.alias, name: ref.name, cols: COLS[key].slice(), rows: DB[key] };
    throw new Error("Unknown table '" + ref.name + "'. This database has: " + Object.keys(DB).join(", ") + ".");
  }

  function mergeRow(base, src, obj) {
    var out = {};
    for (var k in base) out[k] = base[k];
    src.cols.forEach(function (c) {
      var v = obj ? obj[c] : null;
      var lc = c.toLowerCase();
      out[src.alias.toLowerCase() + "." + lc] = v;
      if (src.name) out[src.name.toLowerCase() + "." + lc] = v;
      if (!(lc in out)) out[lc] = v;
    });
    return out;
  }

  function resolveAlias(e, items) {
    if (e && e.t === "col" && !e.table) {
      for (var i = 0; i < items.length; i++) {
        var it = items[i];
        if (it.alias && it.alias.toLowerCase() === e.col.toLowerCase()) return it.e;
      }
    }
    return e;
  }

  function execSelect(q, ctx, outer) {
    var sources = [], rows = [{}];
    if (q.from) {
      var s0 = getSource(q.from, ctx);
      sources.push(s0);
      rows = s0.rows.map(function (o) { return mergeRow({}, s0, o); });
      q.joins.forEach(function (j) {
        var s = getSource(j.tr, ctx);
        sources.push(s);
        var out = [];
        rows.forEach(function (base) {
          var matched = 0;
          s.rows.forEach(function (o) {
            var cand = mergeRow(base, s, o);
            if (!j.on || truthy(ev(j.on, { row: cand, ctx: ctx, outer: outer }))) { out.push(cand); matched++; }
          });
          if (!matched && j.kind === "left") out.push(mergeRow(base, s, null));
        });
        if (out.length > 20000) throw new Error("That join produced too many rows. Add an ON condition so the tables line up.");
        rows = out;
      });
    }

    if (q.where) rows = rows.filter(function (r) { return truthy(ev(q.where, { row: r, ctx: ctx, outer: outer })); });

    var groupBy = q.groupBy.map(function (g) { return resolveAlias(g, q.items); });
    var orderBy = q.orderBy.map(function (o) { return { e: resolveAlias(o.e, q.items), dir: o.dir }; });

    var aggInSelect = q.items.some(function (it) { return it.e && hasAgg(it.e); }) ||
      (q.having && hasAgg(q.having)) || orderBy.some(function (o) { return hasAgg(o.e); });

    var ctxs;
    if (groupBy.length) {
      var map = new Map();
      rows.forEach(function (r) {
        var key = groupBy.map(function (g) { return JSON.stringify(ev(g, { row: r, ctx: ctx, outer: outer })); }).join("\u0001");
        if (!map.has(key)) map.set(key, { row: r, rows: [] });
        map.get(key).rows.push(r);
      });
      ctxs = Array.from(map.values());
    } else if (aggInSelect) {
      ctxs = [{ row: rows[0] || {}, rows: rows }];
    } else {
      ctxs = rows.map(function (r) { return { row: r, rows: [r] }; });
    }

    if (q.having) ctxs = ctxs.filter(function (c) { return truthy(ev(q.having, { row: c.row, rows: c.rows, ctx: ctx, outer: outer })); });

    var wins = [];
    q.items.forEach(function (it) { if (it.e) collectWins(it.e, wins); });
    orderBy.forEach(function (o) { collectWins(o.e, wins); });
    if (wins.length) computeWindows(wins, ctxs, ctx, outer);

    // output columns
    var cols = [], exprs = [];
    q.items.forEach(function (it) {
      if (it.star) {
        sources.forEach(function (s) {
          if (it.table && it.table.toLowerCase() !== s.alias.toLowerCase() && (!s.name || it.table.toLowerCase() !== s.name.toLowerCase())) return;
          s.cols.forEach(function (c) {
            cols.push(sources.length > 1 && !it.table ? (cols.indexOf(c) >= 0 ? s.alias + "." + c : c) : c);
            exprs.push({ t: "col", table: s.alias, col: c });
          });
        });
        return;
      }
      var name = it.alias || (it.e.t === "col" ? it.e.col : it.e.t === "func" ? it.e.name.toLowerCase() + (it.e.star ? "(*)" : "") : "expr" + (cols.length + 1));
      cols.push(name);
      exprs.push(it.e);
    });

    var outRows = ctxs.map(function (c) {
      var s = { row: c.row, rows: c.rows, ctx: ctx, outer: outer, win: c.win };
      return { vals: exprs.map(function (e) { return ev(e, s); }), c: c };
    });

    if (q.distinct) {
      var seen = {}, dedup = [];
      outRows.forEach(function (r) {
        var k = JSON.stringify(r.vals);
        if (!(k in seen)) { seen[k] = 1; dedup.push(r); }
      });
      outRows = dedup;
    }

    if (orderBy.length) {
      var aliasIdx = {};
      cols.forEach(function (c, i) { aliasIdx[String(c).toLowerCase()] = i; });
      outRows = outRows.map(function (r, i) { return { r: r, i: i }; }).sort(function (A, B) {
        for (var k = 0; k < orderBy.length; k++) {
          var o = orderBy[k], a, b;
          if (o.e.t === "col" && !o.e.table && (o.e.col.toLowerCase() in aliasIdx)) {
            var idx = aliasIdx[o.e.col.toLowerCase()];
            a = A.r.vals[idx]; b = B.r.vals[idx];
          } else {
            a = ev(o.e, { row: A.r.c.row, rows: A.r.c.rows, ctx: ctx, outer: outer, win: A.r.c.win });
            b = ev(o.e, { row: B.r.c.row, rows: B.r.c.rows, ctx: ctx, outer: outer, win: B.r.c.win });
          }
          var cv = cmpVals(a, b);
          if (cv) return o.dir === "desc" ? -cv : cv;
        }
        return A.i - B.i;
      }).map(function (x) { return x.r; });
    }

    var finalRows = outRows.map(function (r) { return r.vals; });
    if (q.limit) {
      var lim = num(ev(q.limit, { row: {}, ctx: ctx })) || 0;
      var off = q.offset ? (num(ev(q.offset, { row: {}, ctx: ctx })) || 0) : 0;
      finalRows = finalRows.slice(off, off + lim);
    }
    return { cols: cols, rows: finalRows };
  }

  function computeWindows(list, ctxs, ctx, outer) {
    list.forEach(function (fn) {
      var w = fn.over;
      var groups = new Map();
      ctxs.forEach(function (c) {
        var key = w.part.map(function (p) { return JSON.stringify(ev(p, { row: c.row, rows: c.rows, ctx: ctx, outer: outer })); }).join("\u0001");
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(c);
      });
      groups.forEach(function (part) {
        var arr = part.slice();
        var keyOf = function (c) {
          return w.ord.map(function (o) { return JSON.stringify(ev(o.e, { row: c.row, rows: c.rows, ctx: ctx, outer: outer })); }).join("\u0001");
        };
        if (w.ord.length) {
          arr = arr.map(function (c, i) { return { c: c, i: i }; }).sort(function (A, B) {
            for (var k = 0; k < w.ord.length; k++) {
              var o = w.ord[k];
              var a = ev(o.e, { row: A.c.row, rows: A.c.rows, ctx: ctx, outer: outer });
              var b = ev(o.e, { row: B.c.row, rows: B.c.rows, ctx: ctx, outer: outer });
              var cv = cmpVals(a, b);
              if (cv) return o.dir === "desc" ? -cv : cv;
            }
            return A.i - B.i;
          }).map(function (x) { return x.c; });
        }
        var vals = arr.map(function (c) {
          return fn.args.length ? ev(fn.args[0], { row: c.row, rows: c.rows, ctx: ctx, outer: outer }) : null;
        });
        var rank = 0, dense = 0, prevKey = null;
        arr.forEach(function (c, i) {
          var k = keyOf(c);
          if (k !== prevKey) { rank = i + 1; dense = dense + 1; prevKey = k; }
          var v = null, off, target;
          switch (fn.name) {
            case "ROW_NUMBER": v = i + 1; break;
            case "RANK": v = rank; break;
            case "DENSE_RANK": v = dense; break;
            case "LAG":
            case "LEAD":
              off = fn.args[1] ? (num(ev(fn.args[1], { row: c.row, rows: c.rows, ctx: ctx, outer: outer })) || 1) : 1;
              target = fn.name === "LAG" ? i - off : i + off;
              v = target >= 0 && target < vals.length ? vals[target] : (fn.args[2] ? ev(fn.args[2], { row: c.row, rows: c.rows, ctx: ctx, outer: outer }) : null);
              break;
            case "COUNT": case "SUM": case "AVG": case "MIN": case "MAX": {
              var frame = w.ord.length ? vals.slice(0, i + 1) : vals;
              v = fn.star ? frame.length : aggregate(fn.name, frame, false);
              break;
            }
            default: throw new Error(fn.name + "() can't be used with OVER() here. Try ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, SUM, AVG, COUNT, MIN or MAX.");
          }
          c.win = c.win || {};
          c.win[fn.id] = v;
        });
      });
    });
  }

  /* ---------------- public API ---------------- */
  function run(sql) {
    if (!sql || !String(sql).trim()) throw new Error("Nothing to run yet — type a query first.");
    var st = new Parser(tokenize(String(sql))).parseStatement();
    var ctx = { cteDefs: st.ctes, cteCache: {} };
    var res = execSelect(st.query, ctx, null);
    if (res.rows.length > 2000) res.rows = res.rows.slice(0, 2000);
    return res;
  }

  function normNum(v) {
    if (v === null || v === undefined) return null;
    if (typeof v === "number") return Math.round(v * 10000) / 10000;
    var n = parseFloat(v);
    return isNaN(n) || String(v).trim() !== String(n) ? String(v).trim().toLowerCase() : Math.round(n * 10000) / 10000;
  }
  function rowKey(r) { return JSON.stringify(r.map(normNum)); }

  function compare(userSql, solutionSql) {
    var got = run(userSql);
    var want = run(solutionSql);
    if (got.cols.length !== want.cols.length) {
      return { ok: false, got: got, reason: "You returned " + got.cols.length + " column" + (got.cols.length === 1 ? "" : "s") + ", but this mission needs exactly " + want.cols.length + "." };
    }
    if (got.rows.length !== want.rows.length) {
      return { ok: false, got: got, reason: "You got " + got.rows.length + " row" + (got.rows.length === 1 ? "" : "s") + ", the answer has " + want.rows.length + ". Check your filters." };
    }
    var ordered = /order\s+by/i.test(solutionSql);
    var a = got.rows.map(rowKey), b = want.rows.map(rowKey);
    if (!ordered) { a = a.slice().sort(); b = b.slice().sort(); }
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return { ok: false, got: got, reason: ordered && got.rows.length > 1
          ? "Right shape, wrong values or wrong order — check your ORDER BY and your columns."
          : "Right shape, but the values don't match. Compare your columns against the mission." };
      }
    }
    return { ok: true, got: got, want: want };
  }

  var schema = Object.keys(DB).map(function (t) {
    return { table: t, cols: COLS[t].slice(), count: DB[t].length };
  });
  function preview(table, n) {
    var key = String(table).toLowerCase();
    if (!DB[key]) return { cols: [], rows: [] };
    return { cols: COLS[key].slice(), rows: DB[key].slice(0, n || 4).map(function (o) { return COLS[key].map(function (c) { return o[c]; }); }) };
  }

  window.SQLMini = { run: run, compare: compare, schema: schema, preview: preview };
})();
