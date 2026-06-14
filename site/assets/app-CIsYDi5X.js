var e = Object.defineProperty,
  t = (t, n) => {
    let r = {};
    for (var i in t) e(r, i, { get: t[i], enumerable: !0 });
    return (n || e(r, Symbol.toStringTag, { value: `Module` }), r);
  };
function n(e) {
  let t = Object.create(null);
  for (let n of e.split(`,`)) t[n] = 1;
  return e => e in t;
}
var r = {},
  i = [],
  a = () => {},
  o = () => !1,
  s = e =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  c = e => e.startsWith(`onUpdate:`),
  l = Object.assign,
  u = (e, t) => {
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  d = Object.prototype.hasOwnProperty,
  f = (e, t) => d.call(e, t),
  p = Array.isArray,
  m = e => C(e) === `[object Map]`,
  h = e => C(e) === `[object Set]`,
  g = e => C(e) === `[object Date]`,
  _ = e => typeof e == `function`,
  v = e => typeof e == `string`,
  y = e => typeof e == `symbol`,
  b = e => typeof e == `object` && !!e,
  x = e => (b(e) || _(e)) && _(e.then) && _(e.catch),
  S = Object.prototype.toString,
  C = e => S.call(e),
  w = e => C(e).slice(8, -1),
  ee = e => C(e) === `[object Object]`,
  T = e => v(e) && e !== `NaN` && e[0] !== `-` && `` + parseInt(e, 10) === e,
  E = n(
    `,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`
  ),
  te = e => {
    let t = Object.create(null);
    return n => t[n] || (t[n] = e(n));
  },
  ne = /-\w/g,
  D = te(e => e.replace(ne, e => e.slice(1).toUpperCase())),
  re = /\B([A-Z])/g,
  ie = te(e => e.replace(re, `-$1`).toLowerCase()),
  ae = te(e => e.charAt(0).toUpperCase() + e.slice(1)),
  oe = te(e => (e ? `on${ae(e)}` : ``)),
  O = (e, t) => !Object.is(e, t),
  se = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  ce = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n
    });
  },
  le = e => {
    let t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  ue = e => {
    let t = v(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  },
  de,
  fe = () =>
    (de ||=
      typeof globalThis < `u`
        ? globalThis
        : typeof self < `u`
          ? self
          : typeof window < `u`
            ? window
            : typeof global < `u`
              ? global
              : {});
function k(e) {
  if (p(e)) {
    let t = {};
    for (let n = 0; n < e.length; n++) {
      let r = e[n],
        i = v(r) ? ge(r) : k(r);
      if (i) for (let e in i) t[e] = i[e];
    }
    return t;
  } else if (v(e) || b(e)) return e;
}
var pe = /;(?![^(]*\))/g,
  me = /:([^]+)/,
  he = /\/\*[^]*?\*\//g;
function ge(e) {
  let t = {};
  return (
    e
      .replace(he, ``)
      .split(pe)
      .forEach(e => {
        if (e) {
          let n = e.split(me);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function A(e) {
  let t = ``;
  if (v(e)) t = e;
  else if (p(e))
    for (let n = 0; n < e.length; n++) {
      let r = A(e[n]);
      r && (t += r + ` `);
    }
  else if (b(e)) for (let n in e) e[n] && (t += n + ` `);
  return t.trim();
}
var _e = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,
  ve = n(_e);
_e + ``;
function ye(e) {
  return !!e || e === ``;
}
function be(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++) n = xe(e[r], t[r]);
  return n;
}
function xe(e, t) {
  if (e === t) return !0;
  let n = g(e),
    r = g(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
  if (((n = y(e)), (r = y(t)), n || r)) return e === t;
  if (((n = p(e)), (r = p(t)), n || r)) return n && r ? be(e, t) : !1;
  if (((n = b(e)), (r = b(t)), n || r)) {
    if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
    for (let n in e) {
      let r = e.hasOwnProperty(n),
        i = t.hasOwnProperty(n);
      if ((r && !i) || (!r && i) || !xe(e[n], t[n])) return !1;
    }
  }
  return String(e) === String(t);
}
var Se = e => !!(e && e.__v_isRef === !0),
  j = e =>
    v(e)
      ? e
      : e == null
        ? ``
        : p(e) || (b(e) && (e.toString === S || !_(e.toString)))
          ? Se(e)
            ? j(e.value)
            : JSON.stringify(e, Ce, 2)
          : String(e),
  Ce = (e, t) =>
    Se(t)
      ? Ce(e, t.value)
      : m(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (e, [t, n], r) => ((e[we(t, r) + ` =>`] = n), e),
              {}
            )
          }
        : h(t)
          ? { [`Set(${t.size})`]: [...t.values()].map(e => we(e)) }
          : y(t)
            ? we(t)
            : b(t) && !p(t) && !ee(t)
              ? String(t)
              : t,
  we = (e, t = ``) => (y(e) ? `Symbol(${e.description ?? t})` : e),
  M,
  Te = class {
    constructor(e = !1) {
      ((this.detached = e),
        (this._active = !0),
        (this._on = 0),
        (this.effects = []),
        (this.cleanups = []),
        (this._isPaused = !1),
        (this._warnOnRun = !0),
        (this.__v_skip = !0),
        !e &&
          M &&
          (M.active
            ? ((this.parent = M),
              (this.index = (M.scopes ||= []).push(this) - 1))
            : ((this._active = !1), (this._warnOnRun = !1))));
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = !0;
        let e, t;
        if (this.scopes)
          for (e = 0, t = this.scopes.length; e < t; e++)
            this.scopes[e].pause();
        for (e = 0, t = this.effects.length; e < t; e++)
          this.effects[e].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = !1;
        let e, t;
        if (this.scopes)
          for (e = 0, t = this.scopes.length; e < t; e++)
            this.scopes[e].resume();
        for (e = 0, t = this.effects.length; e < t; e++)
          this.effects[e].resume();
      }
    }
    run(e) {
      if (this._active) {
        let t = M;
        try {
          return ((M = this), e());
        } finally {
          M = t;
        }
      }
    }
    on() {
      ++this._on === 1 && ((this.prevScope = M), (M = this));
    }
    off() {
      if (this._on > 0 && --this._on === 0) {
        if (M === this) M = this.prevScope;
        else {
          let e = M;
          for (; e; ) {
            if (e.prevScope === this) {
              e.prevScope = this.prevScope;
              break;
            }
            e = e.prevScope;
          }
        }
        this.prevScope = void 0;
      }
    }
    stop(e) {
      if (this._active) {
        this._active = !1;
        let t, n;
        for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
        for (
          this.effects.length = 0, t = 0, n = this.cleanups.length;
          t < n;
          t++
        )
          this.cleanups[t]();
        if (((this.cleanups.length = 0), this.scopes)) {
          for (t = 0, n = this.scopes.length; t < n; t++)
            this.scopes[t].stop(!0);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !e) {
          let e = this.parent.scopes.pop();
          e &&
            e !== this &&
            ((this.parent.scopes[this.index] = e), (e.index = this.index));
        }
        this.parent = void 0;
      }
    }
  };
function Ee() {
  return M;
}
function De(e, t = !1) {
  M && M.cleanups.push(e);
}
var N,
  Oe = new WeakSet(),
  ke = class {
    constructor(e) {
      ((this.fn = e),
        (this.deps = void 0),
        (this.depsTail = void 0),
        (this.flags = 5),
        (this.next = void 0),
        (this.cleanup = void 0),
        (this.scheduler = void 0),
        M && (M.active ? M.effects.push(this) : (this.flags &= -2)));
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 &&
        ((this.flags &= -65),
        Oe.has(this) && (Oe.delete(this), this.trigger()));
    }
    notify() {
      (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Ne(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      ((this.flags |= 2), Ke(this), Ie(this));
      let e = N,
        t = He;
      ((N = this), (He = !0));
      try {
        return this.fn();
      } finally {
        (Le(this), (N = e), (He = t), (this.flags &= -3));
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let e = this.deps; e; e = e.nextDep) Be(e);
        ((this.deps = this.depsTail = void 0),
          Ke(this),
          this.onStop && this.onStop(),
          (this.flags &= -2));
      }
    }
    trigger() {
      this.flags & 64
        ? Oe.add(this)
        : this.scheduler
          ? this.scheduler()
          : this.runIfDirty();
    }
    runIfDirty() {
      Re(this) && this.run();
    }
    get dirty() {
      return Re(this);
    }
  },
  Ae = 0,
  je,
  Me;
function Ne(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ((e.next = Me), (Me = e));
    return;
  }
  ((e.next = je), (je = e));
}
function Pe() {
  Ae++;
}
function Fe() {
  if (--Ae > 0) return;
  if (Me) {
    let e = Me;
    for (Me = void 0; e; ) {
      let t = e.next;
      ((e.next = void 0), (e.flags &= -9), (e = t));
    }
  }
  let e;
  for (; je; ) {
    let t = je;
    for (je = void 0; t; ) {
      let n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (t) {
          e ||= t;
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ie(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t));
}
function Le(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    let e = r.prevDep;
    (r.version === -1 ? (r === n && (n = e), Be(r), Ve(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = e));
  }
  ((e.deps = t), (e.depsTail = n));
}
function Re(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (ze(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function ze(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === qe) ||
    ((e.globalVersion = qe),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Re(e)))
  )
    return;
  e.flags |= 2;
  let t = e.dep,
    n = N,
    r = He;
  ((N = e), (He = !0));
  try {
    Ie(e);
    let n = e.fn(e._value);
    (t.version === 0 || O(n, e._value)) &&
      ((e.flags |= 128), (e._value = n), t.version++);
  } catch (e) {
    throw (t.version++, e);
  } finally {
    ((N = n), (He = r), Le(e), (e.flags &= -3));
  }
}
function Be(e, t = !1) {
  let { dep: n, prevSub: r, nextSub: i } = e;
  if (
    (r && ((r.nextSub = i), (e.prevSub = void 0)),
    i && ((i.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let e = n.computed.deps; e; e = e.nextDep) Be(e, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ve(e) {
  let { prevDep: t, nextDep: n } = e;
  (t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0)));
}
var He = !0,
  Ue = [];
function We() {
  (Ue.push(He), (He = !1));
}
function Ge() {
  let e = Ue.pop();
  He = e === void 0 ? !0 : e;
}
function Ke(e) {
  let { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    let e = N;
    N = void 0;
    try {
      t();
    } finally {
      N = e;
    }
  }
}
var qe = 0,
  Je = class {
    constructor(e, t) {
      ((this.sub = e),
        (this.dep = t),
        (this.version = t.version),
        (this.nextDep =
          this.prevDep =
          this.nextSub =
          this.prevSub =
          this.prevActiveLink =
            void 0));
    }
  },
  Ye = class {
    constructor(e) {
      ((this.computed = e),
        (this.version = 0),
        (this.activeLink = void 0),
        (this.subs = void 0),
        (this.map = void 0),
        (this.key = void 0),
        (this.sc = 0),
        (this.__v_skip = !0));
    }
    track(e) {
      if (!N || !He || N === this.computed) return;
      let t = this.activeLink;
      if (t === void 0 || t.sub !== N)
        ((t = this.activeLink = new Je(N, this)),
          N.deps
            ? ((t.prevDep = N.depsTail),
              (N.depsTail.nextDep = t),
              (N.depsTail = t))
            : (N.deps = N.depsTail = t),
          Xe(t));
      else if (t.version === -1 && ((t.version = this.version), t.nextDep)) {
        let e = t.nextDep;
        ((e.prevDep = t.prevDep),
          t.prevDep && (t.prevDep.nextDep = e),
          (t.prevDep = N.depsTail),
          (t.nextDep = void 0),
          (N.depsTail.nextDep = t),
          (N.depsTail = t),
          N.deps === t && (N.deps = e));
      }
      return t;
    }
    trigger(e) {
      (this.version++, qe++, this.notify(e));
    }
    notify(e) {
      Pe();
      try {
        for (let e = this.subs; e; e = e.prevSub)
          e.sub.notify() && e.sub.dep.notify();
      } finally {
        Fe();
      }
    }
  };
function Xe(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    let t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let e = t.deps; e; e = e.nextDep) Xe(e);
    }
    let n = e.dep.subs;
    (n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e));
  }
}
var Ze = new WeakMap(),
  Qe = Symbol(``),
  $e = Symbol(``),
  et = Symbol(``);
function tt(e, t, n) {
  if (He && N) {
    let t = Ze.get(e);
    t || Ze.set(e, (t = new Map()));
    let r = t.get(n);
    (r || (t.set(n, (r = new Ye())), (r.map = t), (r.key = n)), r.track());
  }
}
function nt(e, t, n, r, i, a) {
  let o = Ze.get(e);
  if (!o) {
    qe++;
    return;
  }
  let s = e => {
    e && e.trigger();
  };
  if ((Pe(), t === `clear`)) o.forEach(s);
  else {
    let i = p(e),
      a = i && T(n);
    if (i && n === `length`) {
      let e = Number(r);
      o.forEach((t, n) => {
        (n === `length` || n === et || (!y(n) && n >= e)) && s(t);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(et)), t)
      ) {
        case `add`:
          i ? a && s(o.get(`length`)) : (s(o.get(Qe)), m(e) && s(o.get($e)));
          break;
        case `delete`:
          i || (s(o.get(Qe)), m(e) && s(o.get($e)));
          break;
        case `set`:
          m(e) && s(o.get(Qe));
          break;
      }
  }
  Fe();
}
function rt(e, t) {
  let n = Ze.get(e);
  return n && n.get(t);
}
function it(e) {
  let t = P(e);
  return t === e ? t : (tt(t, `iterate`, et), Ut(e) ? t : t.map(Kt));
}
function at(e) {
  return (tt((e = P(e)), `iterate`, et), e);
}
function ot(e, t) {
  return Ht(e) ? qt(Vt(e) ? Kt(t) : t) : Kt(t);
}
var st = {
  __proto__: null,
  [Symbol.iterator]() {
    return ct(this, Symbol.iterator, e => ot(this, e));
  },
  concat(...e) {
    return it(this).concat(...e.map(e => (p(e) ? it(e) : e)));
  },
  entries() {
    return ct(this, `entries`, e => ((e[1] = ot(this, e[1])), e));
  },
  every(e, t) {
    return ut(this, `every`, e, t, void 0, arguments);
  },
  filter(e, t) {
    return ut(this, `filter`, e, t, e => e.map(e => ot(this, e)), arguments);
  },
  find(e, t) {
    return ut(this, `find`, e, t, e => ot(this, e), arguments);
  },
  findIndex(e, t) {
    return ut(this, `findIndex`, e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ut(this, `findLast`, e, t, e => ot(this, e), arguments);
  },
  findLastIndex(e, t) {
    return ut(this, `findLastIndex`, e, t, void 0, arguments);
  },
  forEach(e, t) {
    return ut(this, `forEach`, e, t, void 0, arguments);
  },
  includes(...e) {
    return ft(this, `includes`, e);
  },
  indexOf(...e) {
    return ft(this, `indexOf`, e);
  },
  join(e) {
    return it(this).join(e);
  },
  lastIndexOf(...e) {
    return ft(this, `lastIndexOf`, e);
  },
  map(e, t) {
    return ut(this, `map`, e, t, void 0, arguments);
  },
  pop() {
    return pt(this, `pop`);
  },
  push(...e) {
    return pt(this, `push`, e);
  },
  reduce(e, ...t) {
    return dt(this, `reduce`, e, t);
  },
  reduceRight(e, ...t) {
    return dt(this, `reduceRight`, e, t);
  },
  shift() {
    return pt(this, `shift`);
  },
  some(e, t) {
    return ut(this, `some`, e, t, void 0, arguments);
  },
  splice(...e) {
    return pt(this, `splice`, e);
  },
  toReversed() {
    return it(this).toReversed();
  },
  toSorted(e) {
    return it(this).toSorted(e);
  },
  toSpliced(...e) {
    return it(this).toSpliced(...e);
  },
  unshift(...e) {
    return pt(this, `unshift`, e);
  },
  values() {
    return ct(this, `values`, e => ot(this, e));
  }
};
function ct(e, t, n) {
  let r = at(e),
    i = r[t]();
  return (
    r !== e &&
      !Ut(e) &&
      ((i._next = i.next),
      (i.next = () => {
        let e = i._next();
        return (e.done || (e.value = n(e.value)), e);
      })),
    i
  );
}
var lt = Array.prototype;
function ut(e, t, n, r, i, a) {
  let o = at(e),
    s = o !== e && !Ut(e),
    c = o[t];
  if (c !== lt[t]) {
    let t = c.apply(e, a);
    return s ? Kt(t) : t;
  }
  let l = n;
  o !== e &&
    (s
      ? (l = function (t, r) {
          return n.call(this, ot(e, t), r, e);
        })
      : n.length > 2 &&
        (l = function (t, r) {
          return n.call(this, t, r, e);
        }));
  let u = c.call(o, l, r);
  return s && i ? i(u) : u;
}
function dt(e, t, n, r) {
  let i = at(e),
    a = i !== e && !Ut(e),
    o = n,
    s = !1;
  i !== e &&
    (a
      ? ((s = r.length === 0),
        (o = function (t, r, i) {
          return (
            s && ((s = !1), (t = ot(e, t))),
            n.call(this, t, ot(e, r), i, e)
          );
        }))
      : n.length > 3 &&
        (o = function (t, r, i) {
          return n.call(this, t, r, i, e);
        }));
  let c = i[t](o, ...r);
  return s ? ot(e, c) : c;
}
function ft(e, t, n) {
  let r = P(e);
  tt(r, `iterate`, et);
  let i = r[t](...n);
  return (i === -1 || i === !1) && Wt(n[0])
    ? ((n[0] = P(n[0])), r[t](...n))
    : i;
}
function pt(e, t, n = []) {
  (We(), Pe());
  let r = P(e)[t].apply(e, n);
  return (Fe(), Ge(), r);
}
var mt = n(`__proto__,__v_isRef,__isVue`),
  ht = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter(e => e !== `arguments` && e !== `caller`)
      .map(e => Symbol[e])
      .filter(y)
  );
function gt(e) {
  y(e) || (e = String(e));
  let t = P(this);
  return (tt(t, `has`, e), t.hasOwnProperty(e));
}
var _t = class {
    constructor(e = !1, t = !1) {
      ((this._isReadonly = e), (this._isShallow = t));
    }
    get(e, t, n) {
      if (t === `__v_skip`) return e.__v_skip;
      let r = this._isReadonly,
        i = this._isShallow;
      if (t === `__v_isReactive`) return !r;
      if (t === `__v_isReadonly`) return r;
      if (t === `__v_isShallow`) return i;
      if (t === `__v_raw`)
        return n === (r ? (i ? Ft : Pt) : i ? Nt : Mt).get(e) ||
          Object.getPrototypeOf(e) === Object.getPrototypeOf(n)
          ? e
          : void 0;
      let a = p(e);
      if (!r) {
        let e;
        if (a && (e = st[t])) return e;
        if (t === `hasOwnProperty`) return gt;
      }
      let o = Reflect.get(e, t, F(e) ? e : n);
      if ((y(t) ? ht.has(t) : mt(t)) || (r || tt(e, `get`, t), i)) return o;
      if (F(o)) {
        let e = a && T(t) ? o : o.value;
        return r && b(e) ? zt(e) : e;
      }
      return b(o) ? (r ? zt(o) : Lt(o)) : o;
    }
  },
  vt = class extends _t {
    constructor(e = !1) {
      super(!1, e);
    }
    set(e, t, n, r) {
      let i = e[t],
        a = p(e) && T(t);
      if (!this._isShallow) {
        let e = Ht(i);
        if ((!Ut(n) && !Ht(n) && ((i = P(i)), (n = P(n))), !a && F(i) && !F(n)))
          return (e || (i.value = n), !0);
      }
      let o = a ? Number(t) < e.length : f(e, t),
        s = Reflect.set(e, t, n, F(e) ? e : r);
      return (
        e === P(r) &&
          (o ? O(n, i) && nt(e, `set`, t, n, i) : nt(e, `add`, t, n)),
        s
      );
    }
    deleteProperty(e, t) {
      let n = f(e, t),
        r = e[t],
        i = Reflect.deleteProperty(e, t);
      return (i && n && nt(e, `delete`, t, void 0, r), i);
    }
    has(e, t) {
      let n = Reflect.has(e, t);
      return ((!y(t) || !ht.has(t)) && tt(e, `has`, t), n);
    }
    ownKeys(e) {
      return (tt(e, `iterate`, p(e) ? `length` : Qe), Reflect.ownKeys(e));
    }
  },
  yt = class extends _t {
    constructor(e = !1) {
      super(!0, e);
    }
    set(e, t) {
      return !0;
    }
    deleteProperty(e, t) {
      return !0;
    }
  },
  bt = new vt(),
  xt = new yt(),
  St = new vt(!0),
  Ct = e => e,
  wt = e => Reflect.getPrototypeOf(e);
function Tt(e, t, n) {
  return function (...r) {
    let i = this.__v_raw,
      a = P(i),
      o = m(a),
      s = e === `entries` || (e === Symbol.iterator && o),
      c = e === `keys` && o,
      u = i[e](...r),
      d = n ? Ct : t ? qt : Kt;
    return (
      !t && tt(a, `iterate`, c ? $e : Qe),
      l(Object.create(u), {
        next() {
          let { value: e, done: t } = u.next();
          return t
            ? { value: e, done: t }
            : { value: s ? [d(e[0]), d(e[1])] : d(e), done: t };
        }
      })
    );
  };
}
function Et(e) {
  return function (...t) {
    return e === `delete` ? !1 : e === `clear` ? void 0 : this;
  };
}
function Dt(e, t) {
  let n = {
    get(n) {
      let r = this.__v_raw,
        i = P(r),
        a = P(n);
      e || (O(n, a) && tt(i, `get`, n), tt(i, `get`, a));
      let { has: o } = wt(i),
        s = t ? Ct : e ? qt : Kt;
      if (o.call(i, n)) return s(r.get(n));
      if (o.call(i, a)) return s(r.get(a));
      r !== i && r.get(n);
    },
    get size() {
      let t = this.__v_raw;
      return (!e && tt(P(t), `iterate`, Qe), t.size);
    },
    has(t) {
      let n = this.__v_raw,
        r = P(n),
        i = P(t);
      return (
        e || (O(t, i) && tt(r, `has`, t), tt(r, `has`, i)),
        t === i ? n.has(t) : n.has(t) || n.has(i)
      );
    },
    forEach(n, r) {
      let i = this,
        a = i.__v_raw,
        o = P(a),
        s = t ? Ct : e ? qt : Kt;
      return (
        !e && tt(o, `iterate`, Qe),
        a.forEach((e, t) => n.call(r, s(e), s(t), i))
      );
    }
  };
  return (
    l(
      n,
      e
        ? {
            add: Et(`add`),
            set: Et(`set`),
            delete: Et(`delete`),
            clear: Et(`clear`)
          }
        : {
            add(e) {
              let n = P(this),
                r = wt(n),
                i = P(e),
                a = !t && !Ut(e) && !Ht(e) ? i : e;
              return (
                r.has.call(n, a) ||
                  (O(e, a) && r.has.call(n, e)) ||
                  (O(i, a) && r.has.call(n, i)) ||
                  (n.add(a), nt(n, `add`, a, a)),
                this
              );
            },
            set(e, n) {
              !t && !Ut(n) && !Ht(n) && (n = P(n));
              let r = P(this),
                { has: i, get: a } = wt(r),
                o = i.call(r, e);
              o ||= ((e = P(e)), i.call(r, e));
              let s = a.call(r, e);
              return (
                r.set(e, n),
                o ? O(n, s) && nt(r, `set`, e, n, s) : nt(r, `add`, e, n),
                this
              );
            },
            delete(e) {
              let t = P(this),
                { has: n, get: r } = wt(t),
                i = n.call(t, e);
              i ||= ((e = P(e)), n.call(t, e));
              let a = r ? r.call(t, e) : void 0,
                o = t.delete(e);
              return (i && nt(t, `delete`, e, void 0, a), o);
            },
            clear() {
              let e = P(this),
                t = e.size !== 0,
                n = e.clear();
              return (t && nt(e, `clear`, void 0, void 0, void 0), n);
            }
          }
    ),
    [`keys`, `values`, `entries`, Symbol.iterator].forEach(r => {
      n[r] = Tt(r, e, t);
    }),
    n
  );
}
function Ot(e, t) {
  let n = Dt(e, t);
  return (t, r, i) =>
    r === `__v_isReactive`
      ? !e
      : r === `__v_isReadonly`
        ? e
        : r === `__v_raw`
          ? t
          : Reflect.get(f(n, r) && r in t ? n : t, r, i);
}
var kt = { get: Ot(!1, !1) },
  At = { get: Ot(!1, !0) },
  jt = { get: Ot(!0, !1) },
  Mt = new WeakMap(),
  Nt = new WeakMap(),
  Pt = new WeakMap(),
  Ft = new WeakMap();
function It(e) {
  switch (e) {
    case `Object`:
    case `Array`:
      return 1;
    case `Map`:
    case `Set`:
    case `WeakMap`:
    case `WeakSet`:
      return 2;
    default:
      return 0;
  }
}
function Lt(e) {
  return Ht(e) ? e : Bt(e, !1, bt, kt, Mt);
}
function Rt(e) {
  return Bt(e, !1, St, At, Nt);
}
function zt(e) {
  return Bt(e, !0, xt, jt, Pt);
}
function Bt(e, t, n, r, i) {
  if (
    !b(e) ||
    (e.__v_raw && !(t && e.__v_isReactive)) ||
    e.__v_skip ||
    !Object.isExtensible(e)
  )
    return e;
  let a = i.get(e);
  if (a) return a;
  let o = It(w(e));
  if (o === 0) return e;
  let s = new Proxy(e, o === 2 ? r : n);
  return (i.set(e, s), s);
}
function Vt(e) {
  return Ht(e) ? Vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ht(e) {
  return !!(e && e.__v_isReadonly);
}
function Ut(e) {
  return !!(e && e.__v_isShallow);
}
function Wt(e) {
  return e ? !!e.__v_raw : !1;
}
function P(e) {
  let t = e && e.__v_raw;
  return t ? P(t) : e;
}
function Gt(e) {
  return (
    !f(e, `__v_skip`) && Object.isExtensible(e) && ce(e, `__v_skip`, !0),
    e
  );
}
var Kt = e => (b(e) ? Lt(e) : e),
  qt = e => (b(e) ? zt(e) : e);
function F(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function I(e) {
  return Yt(e, !1);
}
function Jt(e) {
  return Yt(e, !0);
}
function Yt(e, t) {
  return F(e) ? e : new Xt(e, t);
}
var Xt = class {
  constructor(e, t) {
    ((this.dep = new Ye()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = t ? e : P(e)),
      (this._value = t ? e : Kt(e)),
      (this.__v_isShallow = t));
  }
  get value() {
    return (this.dep.track(), this._value);
  }
  set value(e) {
    let t = this._rawValue,
      n = this.__v_isShallow || Ut(e) || Ht(e);
    ((e = n ? e : P(e)),
      O(e, t) &&
        ((this._rawValue = e),
        (this._value = n ? e : Kt(e)),
        this.dep.trigger()));
  }
};
function L(e) {
  return F(e) ? e.value : e;
}
var Zt = {
  get: (e, t, n) => (t === `__v_raw` ? e : L(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    let i = e[t];
    return F(i) && !F(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, r);
  }
};
function Qt(e) {
  return Vt(e) ? e : new Proxy(e, Zt);
}
var $t = class {
  constructor(e) {
    ((this.__v_isRef = !0), (this._value = void 0));
    let t = (this.dep = new Ye()),
      { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
    ((this._get = n), (this._set = r));
  }
  get value() {
    return (this._value = this._get());
  }
  set value(e) {
    this._set(e);
  }
};
function en(e) {
  return new $t(e);
}
function tn(e) {
  let t = p(e) ? Array(e.length) : {};
  for (let n in e) t[n] = on(e, n);
  return t;
}
var nn = class {
    constructor(e, t, n) {
      ((this._object = e),
        (this._defaultValue = n),
        (this.__v_isRef = !0),
        (this._value = void 0),
        (this._key = y(t) ? t : String(t)),
        (this._raw = P(e)));
      let r = !0,
        i = e;
      if (!p(e) || y(this._key) || !T(this._key))
        do r = !Wt(i) || Ut(i);
        while (r && (i = i.__v_raw));
      this._shallow = r;
    }
    get value() {
      let e = this._object[this._key];
      return (
        this._shallow && (e = L(e)),
        (this._value = e === void 0 ? this._defaultValue : e)
      );
    }
    set value(e) {
      if (this._shallow && F(this._raw[this._key])) {
        let t = this._object[this._key];
        if (F(t)) {
          t.value = e;
          return;
        }
      }
      this._object[this._key] = e;
    }
    get dep() {
      return rt(this._raw, this._key);
    }
  },
  rn = class {
    constructor(e) {
      ((this._getter = e),
        (this.__v_isRef = !0),
        (this.__v_isReadonly = !0),
        (this._value = void 0));
    }
    get value() {
      return (this._value = this._getter());
    }
  };
function an(e, t, n) {
  return F(e)
    ? e
    : _(e)
      ? new rn(e)
      : b(e) && arguments.length > 1
        ? on(e, t, n)
        : I(e);
}
function on(e, t, n) {
  return new nn(e, t, n);
}
var sn = class {
  constructor(e, t, n) {
    ((this.fn = e),
      (this.setter = t),
      (this._value = void 0),
      (this.dep = new Ye(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = qe - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !t),
      (this.isSSR = n));
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && N !== this))
      return (Ne(this, !0), !0);
  }
  get value() {
    let e = this.dep.track();
    return (ze(this), e && (e.version = this.dep.version), this._value);
  }
  set value(e) {
    this.setter && this.setter(e);
  }
};
function cn(e, t, n = !1) {
  let r, i;
  return (_(e) ? (r = e) : ((r = e.get), (i = e.set)), new sn(r, i, n));
}
var ln = {},
  un = new WeakMap(),
  dn = void 0;
function fn(e, t = !1, n = dn) {
  if (n) {
    let t = un.get(n);
    (t || un.set(n, (t = [])), t.push(e));
  }
}
function pn(e, t, n = r) {
  let {
      immediate: i,
      deep: o,
      once: s,
      scheduler: c,
      augmentJob: l,
      call: d
    } = n,
    f = e => (o ? e : Ut(e) || o === !1 || o === 0 ? mn(e, 1) : mn(e)),
    m,
    h,
    g,
    v,
    y = !1,
    b = !1;
  if (
    (F(e)
      ? ((h = () => e.value), (y = Ut(e)))
      : Vt(e)
        ? ((h = () => f(e)), (y = !0))
        : p(e)
          ? ((b = !0),
            (y = e.some(e => Vt(e) || Ut(e))),
            (h = () =>
              e.map(e => {
                if (F(e)) return e.value;
                if (Vt(e)) return f(e);
                if (_(e)) return d ? d(e, 2) : e();
              })))
          : (h = _(e)
              ? t
                ? d
                  ? () => d(e, 2)
                  : e
                : () => {
                    if (g) {
                      We();
                      try {
                        g();
                      } finally {
                        Ge();
                      }
                    }
                    let t = dn;
                    dn = m;
                    try {
                      return d ? d(e, 3, [v]) : e(v);
                    } finally {
                      dn = t;
                    }
                  }
              : a),
    t && o)
  ) {
    let e = h,
      t = o === !0 ? 1 / 0 : o;
    h = () => mn(e(), t);
  }
  let x = Ee(),
    S = () => {
      (m.stop(), x && x.active && u(x.effects, m));
    };
  if (s && t) {
    let e = t;
    t = (...t) => {
      let n = e(...t);
      return (S(), n);
    };
  }
  let C = b ? Array(e.length).fill(ln) : ln,
    w = e => {
      if (!(!(m.flags & 1) || (!m.dirty && !e)))
        if (t) {
          let n = m.run();
          if (e || o || y || (b ? n.some((e, t) => O(e, C[t])) : O(n, C))) {
            g && g();
            let e = dn;
            dn = m;
            try {
              let e = [n, C === ln ? void 0 : b && C[0] === ln ? [] : C, v];
              ((C = n), d ? d(t, 3, e) : t(...e));
            } finally {
              dn = e;
            }
          }
        } else m.run();
    };
  return (
    l && l(w),
    (m = new ke(h)),
    (m.scheduler = c ? () => c(w, !1) : w),
    (v = e => fn(e, !1, m)),
    (g = m.onStop =
      () => {
        let e = un.get(m);
        if (e) {
          if (d) d(e, 4);
          else for (let t of e) t();
          un.delete(m);
        }
      }),
    t ? (i ? w(!0) : (C = m.run())) : c ? c(w.bind(null, !0), !0) : m.run(),
    (S.pause = m.pause.bind(m)),
    (S.resume = m.resume.bind(m)),
    (S.stop = S),
    S
  );
}
function mn(e, t = 1 / 0, n) {
  if (
    t <= 0 ||
    !b(e) ||
    e.__v_skip ||
    ((n ||= new Map()), (n.get(e) || 0) >= t)
  )
    return e;
  if ((n.set(e, t), t--, F(e))) mn(e.value, t, n);
  else if (p(e)) for (let r = 0; r < e.length; r++) mn(e[r], t, n);
  else if (h(e) || m(e))
    e.forEach(e => {
      mn(e, t, n);
    });
  else if (ee(e)) {
    for (let r in e) mn(e[r], t, n);
    for (let r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && mn(e[r], t, n);
  }
  return e;
}
function hn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (e) {
    _n(e, t, n);
  }
}
function gn(e, t, n, r) {
  if (_(e)) {
    let i = hn(e, t, n, r);
    return (
      i &&
        x(i) &&
        i.catch(e => {
          _n(e, t, n);
        }),
      i
    );
  }
  if (p(e)) {
    let i = [];
    for (let a = 0; a < e.length; a++) i.push(gn(e[a], t, n, r));
    return i;
  }
}
function _n(e, t, n, i = !0) {
  let a = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: s } =
      (t && t.appContext.config) || r;
  if (t) {
    let r = t.parent,
      i = t.proxy,
      a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      let t = r.ec;
      if (t) {
        for (let n = 0; n < t.length; n++) if (t[n](e, i, a) === !1) return;
      }
      r = r.parent;
    }
    if (o) {
      (We(), hn(o, null, 10, [e, i, a]), Ge());
      return;
    }
  }
  vn(e, n, a, i, s);
}
function vn(e, t, n, r = !0, i = !1) {
  if (i) throw e;
  console.error(e);
}
var yn = [],
  bn = -1,
  xn = [],
  Sn = null,
  Cn = 0,
  wn = Promise.resolve(),
  Tn = null;
function En(e) {
  let t = Tn || wn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Dn(e) {
  let t = bn + 1,
    n = yn.length;
  for (; t < n; ) {
    let r = (t + n) >>> 1,
      i = yn[r],
      a = Nn(i);
    a < e || (a === e && i.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function On(e) {
  if (!(e.flags & 1)) {
    let t = Nn(e),
      n = yn[yn.length - 1];
    (!n || (!(e.flags & 2) && t >= Nn(n)) ? yn.push(e) : yn.splice(Dn(t), 0, e),
      (e.flags |= 1),
      kn());
  }
}
function kn() {
  Tn ||= wn.then(Pn);
}
function An(e) {
  (p(e)
    ? xn.push(...e)
    : Sn && e.id === -1
      ? Sn.splice(Cn + 1, 0, e)
      : e.flags & 1 || (xn.push(e), (e.flags |= 1)),
    kn());
}
function jn(e, t, n = bn + 1) {
  for (; n < yn.length; n++) {
    let t = yn[n];
    if (t && t.flags & 2) {
      if (e && t.id !== e.uid) continue;
      (yn.splice(n, 1),
        n--,
        t.flags & 4 && (t.flags &= -2),
        t(),
        t.flags & 4 || (t.flags &= -2));
    }
  }
}
function Mn(e) {
  if (xn.length) {
    let e = [...new Set(xn)].sort((e, t) => Nn(e) - Nn(t));
    if (((xn.length = 0), Sn)) {
      Sn.push(...e);
      return;
    }
    for (Sn = e, Cn = 0; Cn < Sn.length; Cn++) {
      let e = Sn[Cn];
      (e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), (e.flags &= -2));
    }
    ((Sn = null), (Cn = 0));
  }
}
var Nn = e => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Pn(e) {
  try {
    for (bn = 0; bn < yn.length; bn++) {
      let e = yn[bn];
      e &&
        !(e.flags & 8) &&
        (e.flags & 4 && (e.flags &= -2),
        hn(e, e.i, e.i ? 15 : 14),
        e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; bn < yn.length; bn++) {
      let e = yn[bn];
      e && (e.flags &= -2);
    }
    ((bn = -1),
      (yn.length = 0),
      Mn(e),
      (Tn = null),
      (yn.length || xn.length) && Pn(e));
  }
}
var Fn = null,
  In = null;
function Ln(e) {
  let t = Fn;
  return ((Fn = e), (In = (e && e.type.__scopeId) || null), t);
}
function R(e, t = Fn, n) {
  if (!t || e._n) return e;
  let r = (...n) => {
    r._d && Na(-1);
    let i = Ln(t),
      a;
    try {
      a = e(...n);
    } finally {
      (Ln(i), r._d && Na(1));
    }
    return a;
  };
  return ((r._n = !0), (r._c = !0), (r._d = !0), r);
}
function Rn(e, t) {
  if (Fn === null) return e;
  let n = go(Fn),
    i = (e.dirs ||= []);
  for (let e = 0; e < t.length; e++) {
    let [a, o, s, c = r] = t[e];
    a &&
      (_(a) && (a = { mounted: a, updated: a }),
      a.deep && mn(o),
      i.push({
        dir: a,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: s,
        modifiers: c
      }));
  }
  return e;
}
function zn(e, t, n, r) {
  let i = e.dirs,
    a = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    let s = i[o];
    a && (s.oldValue = a[o].value);
    let c = s.dir[r];
    c && (We(), gn(c, n, 8, [e.el, s, e, t]), Ge());
  }
}
function Bn(e, t) {
  if ($a) {
    let n = $a.provides,
      r = $a.parent && $a.parent.provides;
    (r === n && (n = $a.provides = Object.create(r)), (n[e] = t));
  }
}
function Vn(e, t, n = !1) {
  let r = eo();
  if (r || Ti) {
    let i = Ti
      ? Ti._context.provides
      : r
        ? r.parent == null || r.ce
          ? r.vnode.appContext && r.vnode.appContext.provides
          : r.parent.provides
        : void 0;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
  }
}
var Hn = Symbol.for(`v-scx`),
  Un = () => Vn(Hn);
function Wn(e, t) {
  return Kn(e, null, t);
}
function Gn(e, t, n) {
  return Kn(e, t, n);
}
function Kn(e, t, n = r) {
  let { immediate: i, deep: o, flush: s, once: c } = n,
    u = l({}, n),
    d = (t && i) || (!t && s !== `post`),
    f;
  if (oo) {
    if (s === `sync`) {
      let e = Un();
      f = e.__watcherHandles ||= [];
    } else if (!d) {
      let e = () => {};
      return ((e.stop = a), (e.resume = a), (e.pause = a), e);
    }
  }
  let p = $a;
  u.call = (e, t, n) => gn(e, p, t, n);
  let m = !1;
  (s === `post`
    ? (u.scheduler = e => {
        ra(e, p && p.suspense);
      })
    : s !== `sync` &&
      ((m = !0),
      (u.scheduler = (e, t) => {
        t ? e() : On(e);
      })),
    (u.augmentJob = e => {
      (t && (e.flags |= 4),
        m && ((e.flags |= 2), p && ((e.id = p.uid), (e.i = p))));
    }));
  let h = pn(e, t, u);
  return (oo && (f ? f.push(h) : d && h()), h);
}
function qn(e, t, n) {
  let r = this.proxy,
    i = v(e) ? (e.includes(`.`) ? Jn(r, e) : () => r[e]) : e.bind(r, r),
    a;
  _(t) ? (a = t) : ((a = t.handler), (n = t));
  let o = ro(this),
    s = Kn(i, a.bind(r), n);
  return (o(), s);
}
function Jn(e, t) {
  let n = t.split(`.`);
  return () => {
    let t = e;
    for (let e = 0; e < n.length && t; e++) t = t[n[e]];
    return t;
  };
}
var Yn = Symbol(`_vte`),
  Xn = e => e.__isTeleport,
  Zn = Symbol(`_leaveCb`),
  Qn = Symbol(`_enterCb`);
function $n() {
  let e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map()
  };
  return (
    zr(() => {
      e.isMounted = !0;
    }),
    Hr(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
var er = [Function, Array],
  tr = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: er,
    onEnter: er,
    onAfterEnter: er,
    onEnterCancelled: er,
    onBeforeLeave: er,
    onLeave: er,
    onAfterLeave: er,
    onLeaveCancelled: er,
    onBeforeAppear: er,
    onAppear: er,
    onAfterAppear: er,
    onAppearCancelled: er
  },
  nr = e => {
    let t = e.subTree;
    return t.component ? nr(t.component) : t;
  },
  rr = {
    name: `BaseTransition`,
    props: tr,
    setup(e, { slots: t }) {
      let n = eo(),
        r = $n();
      return () => {
        let i = t.default && dr(t.default(), !0),
          a = i && i.length ? ir(i) : n.subTree ? Wa() : void 0;
        if (!a) return;
        let o = P(e),
          { mode: s } = o;
        if (r.isLeaving) return cr(a);
        let c = lr(a);
        if (!c) return cr(a);
        let l = sr(c, o, r, n, e => (l = e));
        c.type !== H && ur(c, l);
        let u = n.subTree && lr(n.subTree);
        if (u && u.type !== H && !Ia(u, c) && nr(n).type !== H) {
          let e = sr(u, o, r, n);
          if ((ur(u, e), s === `out-in` && c.type !== H))
            return (
              (r.isLeaving = !0),
              (e.afterLeave = () => {
                ((r.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete e.afterLeave,
                  (u = void 0));
              }),
              cr(a)
            );
          s === `in-out` && c.type !== H
            ? (e.delayLeave = (e, t, n) => {
                let i = or(r, u);
                ((i[String(u.key)] = u),
                  (e[Zn] = () => {
                    (t(),
                      (e[Zn] = void 0),
                      delete l.delayedLeave,
                      (u = void 0));
                  }),
                  (l.delayedLeave = () => {
                    (n(), delete l.delayedLeave, (u = void 0));
                  }));
              })
            : (u = void 0);
        } else u &&= void 0;
        return a;
      };
    }
  };
function ir(e) {
  let t = e[0];
  if (e.length > 1) {
    for (let n of e)
      if (n.type !== H) {
        t = n;
        break;
      }
  }
  return t;
}
var ar = rr;
function or(e, t) {
  let { leavingVNodes: n } = e,
    r = n.get(t.type);
  return (r || ((r = Object.create(null)), n.set(t.type, r)), r);
}
function sr(e, t, n, r, i) {
  let {
      appear: a,
      mode: o,
      persisted: s = !1,
      onBeforeEnter: c,
      onEnter: l,
      onAfterEnter: u,
      onEnterCancelled: d,
      onBeforeLeave: f,
      onLeave: m,
      onAfterLeave: h,
      onLeaveCancelled: g,
      onBeforeAppear: _,
      onAppear: v,
      onAfterAppear: y,
      onAppearCancelled: b
    } = t,
    x = String(e.key),
    S = or(n, e),
    C = (e, t) => {
      e && gn(e, r, 9, t);
    },
    w = (e, t) => {
      let n = t[1];
      (C(e, t),
        p(e) ? e.every(e => e.length <= 1) && n() : e.length <= 1 && n());
    },
    ee = {
      mode: o,
      persisted: s,
      beforeEnter(t) {
        let r = c;
        if (!n.isMounted)
          if (a) r = _ || c;
          else return;
        t[Zn] && t[Zn](!0);
        let i = S[x];
        (i && Ia(e, i) && i.el[Zn] && i.el[Zn](), C(r, [t]));
      },
      enter(t) {
        if (S[x] === e) return;
        let r = l,
          i = u,
          o = d;
        if (!n.isMounted)
          if (a) ((r = v || l), (i = y || u), (o = b || d));
          else return;
        let s = !1;
        t[Qn] = e => {
          s ||
            ((s = !0),
            C(e ? o : i, [t]),
            ee.delayedLeave && ee.delayedLeave(),
            (t[Qn] = void 0));
        };
        let c = t[Qn].bind(null, !1);
        r ? w(r, [t, c]) : c();
      },
      leave(t, r) {
        let i = String(e.key);
        if ((t[Qn] && t[Qn](!0), n.isUnmounting)) return r();
        C(f, [t]);
        let a = !1;
        t[Zn] = n => {
          a ||
            ((a = !0),
            r(),
            C(n ? g : h, [t]),
            (t[Zn] = void 0),
            S[i] === e && delete S[i]);
        };
        let o = t[Zn].bind(null, !1);
        ((S[i] = e), m ? w(m, [t, o]) : o());
      },
      clone(e) {
        let a = sr(e, t, n, r, i);
        return (i && i(a), a);
      }
    };
  return ee;
}
function cr(e) {
  if (jr(e)) return ((e = Va(e)), (e.children = null), e);
}
function lr(e) {
  if (!jr(e)) return Xn(e.type) && e.children ? ir(e.children) : e;
  if (e.component) return e.component.subTree;
  let { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && _(n.default)) return n.default();
  }
}
function ur(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), ur(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function dr(e, t = !1, n) {
  let r = [],
    i = 0;
  for (let a = 0; a < e.length; a++) {
    let o = e[a],
      s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
    o.type === V
      ? (o.patchFlag & 128 && i++, (r = r.concat(dr(o.children, t, s))))
      : (t || o.type !== H) && r.push(s == null ? o : Va(o, { key: s }));
  }
  if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
  return r;
}
function z(e, t) {
  return _(e) ? l({ name: e.name }, t, { setup: e }) : e;
}
function fr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + `-`, 0, 0];
}
function pr(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var mr = new WeakMap();
function hr(e, t, n, i, a = !1) {
  if (p(e)) {
    e.forEach((e, r) => hr(e, t && (p(t) ? t[r] : t), n, i, a));
    return;
  }
  if (Or(i) && !a) {
    i.shapeFlag & 512 &&
      i.type.__asyncResolved &&
      i.component.subTree.component &&
      hr(e, t, n, i.component.subTree);
    return;
  }
  let s = i.shapeFlag & 4 ? go(i.component) : i.el,
    c = a ? null : s,
    { i: l, r: d } = e,
    m = t && t.r,
    h = l.refs === r ? (l.refs = {}) : l.refs,
    g = l.setupState,
    y = P(g),
    b = g === r ? o : e => (pr(h, e) ? !1 : f(y, e)),
    x = (e, t) => !(t && pr(h, t));
  if (m != null && m !== d) {
    if ((gr(t), v(m))) ((h[m] = null), b(m) && (g[m] = null));
    else if (F(m)) {
      let e = t;
      (x(m, e.k) && (m.value = null), e.k && (h[e.k] = null));
    }
  }
  if (_(d)) hn(d, l, 12, [c, h]);
  else {
    let t = v(d),
      r = F(d);
    if (t || r) {
      let i = () => {
        if (e.f) {
          let n = t ? (b(d) ? g[d] : h[d]) : x(d) || !e.k ? d.value : h[e.k];
          if (a) p(n) && u(n, s);
          else if (p(n)) n.includes(s) || n.push(s);
          else if (t) ((h[d] = [s]), b(d) && (g[d] = h[d]));
          else {
            let t = [s];
            (x(d, e.k) && (d.value = t), e.k && (h[e.k] = t));
          }
        } else
          t
            ? ((h[d] = c), b(d) && (g[d] = c))
            : r && (x(d, e.k) && (d.value = c), e.k && (h[e.k] = c));
      };
      if (c) {
        let t = () => {
          (i(), mr.delete(e));
        };
        ((t.id = -1), mr.set(e, t), ra(t, n));
      } else (gr(e), i());
    }
  }
}
function gr(e) {
  let t = mr.get(e);
  t && ((t.flags |= 8), mr.delete(e));
}
var _r = !1,
  vr = () => {
    _r ||= (console.error(`Hydration completed but contains mismatches.`), !0);
  },
  yr = e => e.namespaceURI.includes(`svg`) && e.tagName !== `foreignObject`,
  br = e => e.namespaceURI.includes(`MathML`),
  xr = e => {
    if (e.nodeType === 1) {
      if (yr(e)) return `svg`;
      if (br(e)) return `mathml`;
    }
  },
  Sr = e => e.nodeType === 8;
function Cr(e) {
  let {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        createText: i,
        nextSibling: a,
        parentNode: o,
        remove: c,
        insert: l,
        createComment: u
      }
    } = e,
    d = (e, t) => {
      if (!t.hasChildNodes()) {
        (n(null, e, t), Mn(), (t._vnode = e));
        return;
      }
      (f(t.firstChild, e, null, null, null), Mn(), (t._vnode = e));
    },
    f = (n, r, s, c, u, d = !1) => {
      d ||= !!r.dynamicChildren;
      let b = Sr(n) && n.data === `[`,
        x = () => g(n, r, s, c, u, b),
        { type: S, ref: C, shapeFlag: w, patchFlag: ee } = r,
        T = n.nodeType;
      ((r.el = n), ee === -2 && ((d = !1), (r.dynamicChildren = null)));
      let E = null;
      switch (S) {
        case Da:
          T === 3
            ? (n.data !== r.children && (vr(), (n.data = r.children)),
              (E = a(n)))
            : r.children === ``
              ? (l((r.el = i(``)), o(n), n), (E = n))
              : (E = x());
          break;
        case H:
          y(n)
            ? ((E = a(n)), v((r.el = n.content.firstChild), n, s))
            : (E = T !== 8 || b ? x() : a(n));
          break;
        case Oa:
          if ((b && ((n = a(n)), (T = n.nodeType)), T === 1 || T === 3)) {
            E = n;
            let e = !r.children.length;
            for (let t = 0; t < r.staticCount; t++)
              (e && (r.children += E.nodeType === 1 ? E.outerHTML : E.data),
                t === r.staticCount - 1 && (r.anchor = E),
                (E = a(E)));
            return b ? a(E) : E;
          } else x();
          break;
        case V:
          E = b ? h(n, r, s, c, u, d) : x();
          break;
        default:
          if (w & 1)
            E =
              (T !== 1 || r.type.toLowerCase() !== n.tagName.toLowerCase()) &&
              !y(n)
                ? x()
                : p(n, r, s, c, u, d);
          else if (w & 6) {
            r.slotScopeIds = u;
            let e = o(n);
            if (
              ((E = b
                ? _(n)
                : Sr(n) && n.data === `teleport start`
                  ? _(n, n.data, `teleport end`)
                  : a(n)),
              t(r, e, null, s, c, xr(e), d),
              Or(r) && !r.type.__asyncResolved)
            ) {
              let t;
              (b
                ? ((t = q(V)), (t.anchor = E ? E.previousSibling : e.lastChild))
                : (t = n.nodeType === 3 ? Ha(``) : q(`div`)),
                (t.el = n),
                (r.component.subTree = t));
            }
          } else
            w & 64
              ? (E = T === 8 ? r.type.hydrate(n, r, s, c, u, d, e, m) : x())
              : w & 128 &&
                (E = r.type.hydrate(n, r, s, c, xr(o(n)), u, d, e, f));
      }
      return (C != null && hr(C, null, c, r), E);
    },
    p = (e, t, n, i, a, o) => {
      o ||= !!t.dynamicChildren;
      let {
          type: l,
          props: u,
          patchFlag: d,
          shapeFlag: f,
          dirs: p,
          transition: h
        } = t,
        g = l === `input` || l === `option`;
      if (g || d !== -1) {
        p && zn(t, null, n, `created`);
        let l = !1;
        if (y(e)) {
          l = ca(null, h) && n && n.vnode.props && n.vnode.props.appear;
          let r = e.content.firstChild;
          if (l) {
            let e = r.getAttribute(`class`);
            (e && (r.$cls = e), h.beforeEnter(r));
          }
          (v(r, e, n), (t.el = e = r));
        }
        if (f & 16 && !(u && (u.innerHTML || u.textContent))) {
          let r = m(e.firstChild, t, e, n, i, a, o);
          for (r && !Er(e, 1) && vr(); r; ) {
            let e = r;
            ((r = r.nextSibling), c(e));
          }
        } else if (f & 8) {
          let n = t.children;
          n[0] ===
            `
` &&
            (e.tagName === `PRE` || e.tagName === `TEXTAREA`) &&
            (n = n.slice(1));
          let { textContent: r } = e;
          r !== n &&
            r !==
              n.replace(
                /\r\n|\r/g,
                `
`
              ) &&
            (Er(e, 0) || vr(), (e.textContent = t.children));
        }
        if (u) {
          if (g || !o || d & 48) {
            let t = e.tagName.includes(`-`);
            for (let i in u)
              ((g && (i.endsWith(`value`) || i === `indeterminate`)) ||
                (s(i) && !E(i)) ||
                i[0] === `.` ||
                (t && !E(i))) &&
                r(e, i, null, u[i], void 0, n);
          } else if (u.onClick) r(e, `onClick`, null, u.onClick, void 0, n);
          else if (d & 4 && Vt(u.style)) for (let e in u.style) u.style[e];
        }
        let _;
        ((_ = u && u.onVnodeBeforeMount) && Ya(_, n, t),
          p && zn(t, null, n, `beforeMount`),
          ((_ = u && u.onVnodeMounted) || p || l) &&
            wa(() => {
              (_ && Ya(_, n, t),
                l && h.enter(e),
                p && zn(t, null, n, `mounted`));
            }, i));
      }
      return e.nextSibling;
    },
    m = (e, t, r, o, s, c, u) => {
      u ||= !!t.dynamicChildren;
      let d = t.children,
        p = d.length,
        m = !1;
      for (let t = 0; t < p; t++) {
        let h = u ? d[t] : (d[t] = Ga(d[t])),
          g = h.type === Da;
        e
          ? (g &&
              !u &&
              t + 1 < p &&
              Ga(d[t + 1]).type === Da &&
              (l(i(e.data.slice(h.children.length)), r, a(e)),
              (e.data = h.children)),
            (e = f(e, h, o, s, c, u)))
          : g && !h.children
            ? l((h.el = i(``)), r)
            : (m || ((m = !0), Er(r, 1) || vr()),
              n(null, h, r, null, o, s, xr(r), c));
      }
      return e;
    },
    h = (e, t, n, r, i, s) => {
      let { slotScopeIds: c } = t;
      c && (i = i ? i.concat(c) : c);
      let d = o(e),
        f = m(a(e), t, d, n, r, i, s);
      return f && Sr(f) && f.data === `]`
        ? a((t.anchor = f))
        : (vr(), l((t.anchor = u(`]`)), d, f), f);
    },
    g = (e, t, r, i, s, l) => {
      if ((Er(e.parentElement, 1) || vr(), (t.el = null), l)) {
        let t = _(e);
        for (;;) {
          let n = a(e);
          if (n && n !== t) c(n);
          else break;
        }
      }
      let u = a(e),
        d = o(e);
      return (
        c(e),
        n(null, t, d, u, r, i, xr(d), s),
        r && ((r.vnode.el = t.el), Ri(r, t.el)),
        u
      );
    },
    _ = (e, t = `[`, n = `]`) => {
      let r = 0;
      for (; e; )
        if (((e = a(e)), e && Sr(e) && (e.data === t && r++, e.data === n))) {
          if (r === 0) return a(e);
          r--;
        }
      return e;
    },
    v = (e, t, n) => {
      let r = t.parentNode;
      r && r.replaceChild(e, t);
      let i = n;
      for (; i; )
        (i.vnode.el === t && (i.vnode.el = i.subTree.el = e), (i = i.parent));
    },
    y = e => e.nodeType === 1 && e.tagName === `TEMPLATE`;
  return [d, f];
}
var wr = `data-allow-mismatch`,
  Tr = { 0: `text`, 1: `children`, 2: `class`, 3: `style`, 4: `attribute` };
function Er(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(wr); ) e = e.parentElement;
  let n = e && e.getAttribute(wr);
  if (n == null) return !1;
  if (n === ``) return !0;
  {
    let e = n.split(`,`);
    return t === 0 && e.includes(`children`) ? !0 : e.includes(Tr[t]);
  }
}
(fe().requestIdleCallback, fe().cancelIdleCallback);
function Dr(e, t) {
  if (Sr(e) && e.data === `[`) {
    let n = 1,
      r = e.nextSibling;
    for (; r; ) {
      if (r.nodeType === 1) {
        if (t(r) === !1) break;
      } else if (Sr(r))
        if (r.data === `]`) {
          if (--n === 0) break;
        } else r.data === `[` && n++;
      r = r.nextSibling;
    }
  } else t(e);
}
var Or = e => !!e.type.__asyncLoader;
function kr(e) {
  _(e) && (e = { loader: e });
  let {
      loader: t,
      loadingComponent: n,
      errorComponent: r,
      delay: i = 200,
      hydrate: a,
      timeout: o,
      suspensible: s = !0,
      onError: c
    } = e,
    l = null,
    u,
    d = 0,
    f = () => (d++, (l = null), p()),
    p = () => {
      let e;
      return (
        l ||
        (e = l =
          t()
            .catch(e => {
              if (((e = e instanceof Error ? e : Error(String(e))), c))
                return new Promise((t, n) => {
                  c(
                    e,
                    () => t(f()),
                    () => n(e),
                    d + 1
                  );
                });
              throw e;
            })
            .then(t =>
              e !== l && l
                ? l
                : (t &&
                    (t.__esModule || t[Symbol.toStringTag] === `Module`) &&
                    (t = t.default),
                  (u = t),
                  t)
            ))
      );
    };
  return z({
    name: `AsyncComponentWrapper`,
    __asyncLoader: p,
    __asyncHydrate(e, t, n) {
      let r = !1;
      (t.bu ||= []).push(() => (r = !0));
      let i = () => {
          r || n();
        },
        o = a
          ? () => {
              let n = a(i, t => Dr(e, t));
              n && (t.bum ||= []).push(n);
            }
          : i;
      u ? o() : p().then(() => !t.isUnmounted && o());
    },
    get __asyncResolved() {
      return u;
    },
    setup() {
      let e = $a;
      if ((fr(e), u)) return () => Ar(u, e);
      let t = t => {
        ((l = null), _n(t, e, 13, !r));
      };
      if ((s && e.suspense) || oo)
        return p()
          .then(t => () => Ar(t, e))
          .catch(e => (t(e), () => (r ? q(r, { error: e }) : null)));
      let a = I(!1),
        c = I(),
        d = I(!!i),
        f,
        m;
      return (
        Ur(() => {
          (f != null && clearTimeout(f), m != null && clearTimeout(m));
        }),
        i &&
          (m = setTimeout(() => {
            e.isUnmounted || (d.value = !1);
          }, i)),
        o != null &&
          (f = setTimeout(() => {
            if (!e.isUnmounted && !a.value && !c.value) {
              let e = Error(`Async component timed out after ${o}ms.`);
              (t(e), (c.value = e));
            }
          }, o)),
        p()
          .then(() => {
            e.isUnmounted ||
              ((a.value = !0),
              e.parent && jr(e.parent.vnode) && e.parent.update());
          })
          .catch(n => {
            if (e.isUnmounted) {
              l = null;
              return;
            }
            (t(n), (c.value = n));
          }),
        () => {
          if (a.value && u) return Ar(u, e);
          if (c.value && r) return q(r, { error: c.value });
          if (n && !d.value) return Ar(n, e);
        }
      );
    }
  });
}
function Ar(e, t) {
  let { ref: n, props: r, children: i, ce: a } = t.vnode,
    o = q(e, r, i);
  return ((o.ref = n), (o.ce = a), delete t.vnode.ce, o);
}
var jr = e => e.type.__isKeepAlive;
function Mr(e, t) {
  Pr(e, `a`, t);
}
function Nr(e, t) {
  Pr(e, `da`, t);
}
function Pr(e, t, n = $a) {
  let r = (e.__wdc ||= () => {
    let t = n;
    for (; t; ) {
      if (t.isDeactivated) return;
      t = t.parent;
    }
    return e();
  });
  if ((Ir(t, r, n), n)) {
    let e = n.parent;
    for (; e && e.parent; )
      (jr(e.parent.vnode) && Fr(r, t, n, e), (e = e.parent));
  }
}
function Fr(e, t, n, r) {
  let i = Ir(t, e, r, !0);
  Ur(() => {
    u(r[t], i);
  }, n);
}
function Ir(e, t, n = $a, r = !1) {
  if (n) {
    let i = n[e] || (n[e] = []),
      a = (t.__weh ||= (...r) => {
        We();
        let i = ro(n),
          a = gn(t, n, e, r);
        return (i(), Ge(), a);
      });
    return (r ? i.unshift(a) : i.push(a), a);
  }
}
var Lr =
    e =>
    (t, n = $a) => {
      (!oo || e === `sp`) && Ir(e, (...e) => t(...e), n);
    },
  Rr = Lr(`bm`),
  zr = Lr(`m`),
  Br = Lr(`bu`),
  Vr = Lr(`u`),
  Hr = Lr(`bum`),
  Ur = Lr(`um`),
  Wr = Lr(`sp`),
  Gr = Lr(`rtg`),
  Kr = Lr(`rtc`);
function qr(e, t = $a) {
  Ir(`ec`, e, t);
}
var Jr = `components`;
function Yr(e, t) {
  return Qr(Jr, e, !0, t) || e;
}
var Xr = Symbol.for(`v-ndc`);
function Zr(e) {
  return v(e) ? Qr(Jr, e, !1) || e : e || Xr;
}
function Qr(e, t, n = !0, r = !1) {
  let i = Fn || $a;
  if (i) {
    let n = i.type;
    if (e === Jr) {
      let e = _o(n, !1);
      if (e && (e === t || e === D(t) || e === ae(D(t)))) return n;
    }
    let a = $r(i[e] || n[e], t) || $r(i.appContext[e], t);
    return !a && r ? n : a;
  }
}
function $r(e, t) {
  return e && (e[t] || e[D(t)] || e[ae(D(t))]);
}
function ei(e, t, n, r) {
  let i,
    a = n && n[r],
    o = p(e);
  if (o || v(e)) {
    let n = o && Vt(e),
      r = !1,
      s = !1;
    (n && ((r = !Ut(e)), (s = Ht(e)), (e = at(e))), (i = Array(e.length)));
    for (let n = 0, o = e.length; n < o; n++)
      i[n] = t(r ? (s ? qt(Kt(e[n])) : Kt(e[n])) : e[n], n, void 0, a && a[n]);
  } else if (typeof e == `number`) {
    i = Array(e);
    for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
  } else if (b(e))
    if (e[Symbol.iterator])
      i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
    else {
      let n = Object.keys(e);
      i = Array(n.length);
      for (let r = 0, o = n.length; r < o; r++) {
        let o = n[r];
        i[r] = t(e[o], o, r, a && a[r]);
      }
    }
  else i = [];
  return (n && (n[r] = i), i);
}
function B(e, t, n = {}, r, i) {
  if (Fn.ce || (Fn.parent && Or(Fn.parent) && Fn.parent.ce)) {
    let e = Object.keys(n).length > 0;
    return (
      t !== 'default' && (n.name = t),
      U(),
      G(V, null, [q(`slot`, n, r && r())], e ? -2 : 64)
    );
  }
  let a = e[t];
  (a && a._c && (a._d = !1), U());
  let o = a && ti(a(n)),
    s = n.key || (o && o.key),
    c = G(
      V,
      { key: (s && !y(s) ? s : `_${t}`) + (!o && r ? `_fb` : ``) },
      o || (r ? r() : []),
      o && e._ === 1 ? 64 : -2
    );
  return (
    !i && c.scopeId && (c.slotScopeIds = [c.scopeId + `-s`]),
    a && a._c && (a._d = !0),
    c
  );
}
function ti(e) {
  return e.some(e =>
    Fa(e) ? !(e.type === H || (e.type === V && !ti(e.children))) : !0
  )
    ? e
    : null;
}
var ni = e => (e ? (ao(e) ? go(e) : ni(e.parent)) : null),
  ri = l(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => ni(e.parent),
    $root: e => ni(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => fi(e),
    $forceUpdate: e =>
      (e.f ||= () => {
        On(e.update);
      }),
    $nextTick: e => (e.n ||= En.bind(e.proxy)),
    $watch: e => qn.bind(e)
  }),
  ii = (e, t) => e !== r && !e.__isScriptSetup && f(e, t),
  ai = {
    get({ _: e }, t) {
      if (t === `__v_skip`) return !0;
      let {
        ctx: n,
        setupState: i,
        data: a,
        props: o,
        accessCache: s,
        type: c,
        appContext: l
      } = e;
      if (t[0] !== `$`) {
        let e = s[t];
        if (e !== void 0)
          switch (e) {
            case 1:
              return i[t];
            case 2:
              return a[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else if (ii(i, t)) return ((s[t] = 1), i[t]);
        else if (a !== r && f(a, t)) return ((s[t] = 2), a[t]);
        else if (f(o, t)) return ((s[t] = 3), o[t]);
        else if (n !== r && f(n, t)) return ((s[t] = 4), n[t]);
        else si && (s[t] = 0);
      }
      let u = ri[t],
        d,
        p;
      if (u) return (t === `$attrs` && tt(e.attrs, `get`, ``), u(e));
      if ((d = c.__cssModules) && (d = d[t])) return d;
      if (n !== r && f(n, t)) return ((s[t] = 4), n[t]);
      if (((p = l.config.globalProperties), f(p, t))) return p[t];
    },
    set({ _: e }, t, n) {
      let { data: i, setupState: a, ctx: o } = e;
      return ii(a, t)
        ? ((a[t] = n), !0)
        : i !== r && f(i, t)
          ? ((i[t] = n), !0)
          : f(e.props, t) || (t[0] === `$` && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: i,
          appContext: a,
          props: o,
          type: s
        }
      },
      c
    ) {
      let l;
      return !!(
        n[c] ||
        (e !== r && c[0] !== `$` && f(e, c)) ||
        ii(t, c) ||
        f(o, c) ||
        f(i, c) ||
        f(ri, c) ||
        f(a.config.globalProperties, c) ||
        ((l = s.__cssModules) && l[c])
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get == null
          ? f(n, `value`) && this.set(e, t, n.value, null)
          : (e._.accessCache[t] = 0),
        Reflect.defineProperty(e, t, n)
      );
    }
  };
function oi(e) {
  return p(e) ? e.reduce((e, t) => ((e[t] = null), e), {}) : e;
}
var si = !0;
function ci(e) {
  let t = fi(e),
    n = e.proxy,
    r = e.ctx;
  ((si = !1), t.beforeCreate && ui(t.beforeCreate, e, `bc`));
  let {
    data: i,
    computed: o,
    methods: s,
    watch: c,
    provide: l,
    inject: u,
    created: d,
    beforeMount: f,
    mounted: m,
    beforeUpdate: h,
    updated: g,
    activated: v,
    deactivated: y,
    beforeDestroy: x,
    beforeUnmount: S,
    destroyed: C,
    unmounted: w,
    render: ee,
    renderTracked: T,
    renderTriggered: E,
    errorCaptured: te,
    serverPrefetch: ne,
    expose: D,
    inheritAttrs: re,
    components: ie,
    directives: ae,
    filters: oe
  } = t;
  if ((u && li(u, r, null), s))
    for (let e in s) {
      let t = s[e];
      _(t) && (r[e] = t.bind(n));
    }
  if (i) {
    let t = i.call(n, n);
    b(t) && (e.data = Lt(t));
  }
  if (((si = !0), o))
    for (let e in o) {
      let t = o[e],
        i = J({
          get: _(t) ? t.bind(n, n) : _(t.get) ? t.get.bind(n, n) : a,
          set: !_(t) && _(t.set) ? t.set.bind(n) : a
        });
      Object.defineProperty(r, e, {
        enumerable: !0,
        configurable: !0,
        get: () => i.value,
        set: e => (i.value = e)
      });
    }
  if (c) for (let e in c) di(c[e], r, n, e);
  if (l) {
    let e = _(l) ? l.call(n) : l;
    Reflect.ownKeys(e).forEach(t => {
      Bn(t, e[t]);
    });
  }
  d && ui(d, e, `c`);
  function O(e, t) {
    p(t) ? t.forEach(t => e(t.bind(n))) : t && e(t.bind(n));
  }
  if (
    (O(Rr, f),
    O(zr, m),
    O(Br, h),
    O(Vr, g),
    O(Mr, v),
    O(Nr, y),
    O(qr, te),
    O(Kr, T),
    O(Gr, E),
    O(Hr, S),
    O(Ur, w),
    O(Wr, ne),
    p(D))
  )
    if (D.length) {
      let t = (e.exposed ||= {});
      D.forEach(e => {
        Object.defineProperty(t, e, {
          get: () => n[e],
          set: t => (n[e] = t),
          enumerable: !0
        });
      });
    } else e.exposed ||= {};
  (ee && e.render === a && (e.render = ee),
    re != null && (e.inheritAttrs = re),
    ie && (e.components = ie),
    ae && (e.directives = ae),
    ne && fr(e));
}
function li(e, t, n = a) {
  p(e) && (e = _i(e));
  for (let n in e) {
    let r = e[n],
      i;
    ((i = b(r)
      ? `default` in r
        ? Vn(r.from || n, r.default, !0)
        : Vn(r.from || n)
      : Vn(r)),
      F(i)
        ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: e => (i.value = e)
          })
        : (t[n] = i));
  }
}
function ui(e, t, n) {
  gn(p(e) ? e.map(e => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function di(e, t, n, r) {
  let i = r.includes(`.`) ? Jn(n, r) : () => n[r];
  if (v(e)) {
    let n = t[e];
    _(n) && Gn(i, n);
  } else if (_(e)) Gn(i, e.bind(n));
  else if (b(e))
    if (p(e)) e.forEach(e => di(e, t, n, r));
    else {
      let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
      _(r) && Gn(i, r, e);
    }
}
function fi(e) {
  let t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: i,
      optionsCache: a,
      config: { optionMergeStrategies: o }
    } = e.appContext,
    s = a.get(t),
    c;
  return (
    s
      ? (c = s)
      : !i.length && !n && !r
        ? (c = t)
        : ((c = {}), i.length && i.forEach(e => pi(c, e, o, !0)), pi(c, t, o)),
    b(t) && a.set(t, c),
    c
  );
}
function pi(e, t, n, r = !1) {
  let { mixins: i, extends: a } = t;
  (a && pi(e, a, n, !0), i && i.forEach(t => pi(e, t, n, !0)));
  for (let i in t)
    if (!(r && i === `expose`)) {
      let r = mi[i] || (n && n[i]);
      e[i] = r ? r(e[i], t[i]) : t[i];
    }
  return e;
}
var mi = {
  data: hi,
  props: bi,
  emits: bi,
  methods: yi,
  computed: yi,
  beforeCreate: vi,
  created: vi,
  beforeMount: vi,
  mounted: vi,
  beforeUpdate: vi,
  updated: vi,
  beforeDestroy: vi,
  beforeUnmount: vi,
  destroyed: vi,
  unmounted: vi,
  activated: vi,
  deactivated: vi,
  errorCaptured: vi,
  serverPrefetch: vi,
  components: yi,
  directives: yi,
  watch: xi,
  provide: hi,
  inject: gi
};
function hi(e, t) {
  return t
    ? e
      ? function () {
          return l(
            _(e) ? e.call(this, this) : e,
            _(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function gi(e, t) {
  return yi(_i(e), _i(t));
}
function _i(e) {
  if (p(e)) {
    let t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function vi(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function yi(e, t) {
  return e ? l(Object.create(null), e, t) : t;
}
function bi(e, t) {
  return e
    ? p(e) && p(t)
      ? [...new Set([...e, ...t])]
      : l(Object.create(null), oi(e), oi(t ?? {}))
    : t;
}
function xi(e, t) {
  if (!e) return t;
  if (!t) return e;
  let n = l(Object.create(null), e);
  for (let r in t) n[r] = vi(e[r], t[r]);
  return n;
}
function Si() {
  return {
    app: null,
    config: {
      isNativeTag: o,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  };
}
var Ci = 0;
function wi(e, t) {
  return function (n, r = null) {
    (_(n) || (n = l({}, n)), r != null && !b(r) && (r = null));
    let i = Si(),
      a = new WeakSet(),
      o = [],
      s = !1,
      c = (i.app = {
        _uid: Ci++,
        _component: n,
        _props: r,
        _container: null,
        _context: i,
        _instance: null,
        version: yo,
        get config() {
          return i.config;
        },
        set config(e) {},
        use(e, ...t) {
          return (
            a.has(e) ||
              (e && _(e.install)
                ? (a.add(e), e.install(c, ...t))
                : _(e) && (a.add(e), e(c, ...t))),
            c
          );
        },
        mixin(e) {
          return (i.mixins.includes(e) || i.mixins.push(e), c);
        },
        component(e, t) {
          return t ? ((i.components[e] = t), c) : i.components[e];
        },
        directive(e, t) {
          return t ? ((i.directives[e] = t), c) : i.directives[e];
        },
        mount(a, o, l) {
          if (!s) {
            let u = c._ceVNode || q(n, r);
            return (
              (u.appContext = i),
              l === !0 ? (l = `svg`) : l === !1 && (l = void 0),
              o && t ? t(u, a) : e(u, a, l),
              (s = !0),
              (c._container = a),
              (a.__vue_app__ = c),
              go(u.component)
            );
          }
        },
        onUnmount(e) {
          o.push(e);
        },
        unmount() {
          s &&
            (gn(o, c._instance, 16),
            e(null, c._container),
            delete c._container.__vue_app__);
        },
        provide(e, t) {
          return ((i.provides[e] = t), c);
        },
        runWithContext(e) {
          let t = Ti;
          Ti = c;
          try {
            return e();
          } finally {
            Ti = t;
          }
        }
      });
    return c;
  };
}
var Ti = null,
  Ei = (e, t) =>
    t === `modelValue` || t === `model-value`
      ? e.modelModifiers
      : e[`${t}Modifiers`] || e[`${D(t)}Modifiers`] || e[`${ie(t)}Modifiers`];
function Di(e, t, ...n) {
  if (e.isUnmounted) return;
  let i = e.vnode.props || r,
    a = n,
    o = t.startsWith(`update:`),
    s = o && Ei(i, t.slice(7));
  s &&
    (s.trim && (a = n.map(e => (v(e) ? e.trim() : e))),
    s.number && (a = n.map(le)));
  let c,
    l = i[(c = oe(t))] || i[(c = oe(D(t)))];
  (!l && o && (l = i[(c = oe(ie(t)))]), l && gn(l, e, 6, a));
  let u = i[c + `Once`];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[c]) return;
    ((e.emitted[c] = !0), gn(u, e, 6, a));
  }
}
var Oi = new WeakMap();
function ki(e, t, n = !1) {
  let r = n ? Oi : t.emitsCache,
    i = r.get(e);
  if (i !== void 0) return i;
  let a = e.emits,
    o = {},
    s = !1;
  if (!_(e)) {
    let r = e => {
      let n = ki(e, t, !0);
      n && ((s = !0), l(o, n));
    };
    (!n && t.mixins.length && t.mixins.forEach(r),
      e.extends && r(e.extends),
      e.mixins && e.mixins.forEach(r));
  }
  return !a && !s
    ? (b(e) && r.set(e, null), null)
    : (p(a) ? a.forEach(e => (o[e] = null)) : l(o, a), b(e) && r.set(e, o), o);
}
function Ai(e, t) {
  return !e || !s(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, ``)),
      f(e, t[0].toLowerCase() + t.slice(1)) || f(e, ie(t)) || f(e, t));
}
function ji(e) {
  let {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: i,
      propsOptions: [a],
      slots: o,
      attrs: s,
      emit: l,
      render: u,
      renderCache: d,
      props: f,
      data: p,
      setupState: m,
      ctx: h,
      inheritAttrs: g
    } = e,
    _ = Ln(e),
    v,
    y;
  try {
    if (n.shapeFlag & 4) {
      let e = i || r,
        t = e;
      ((v = Ga(u.call(t, e, d, f, m, p, h))), (y = s));
    } else {
      let e = t;
      ((v = Ga(
        e.length > 1 ? e(f, { attrs: s, slots: o, emit: l }) : e(f, null)
      )),
        (y = t.props ? s : Ni(s)));
    }
  } catch (t) {
    ((ka.length = 0), _n(t, e, 1), (v = q(H)));
  }
  let b = v;
  if (y && g !== !1) {
    let e = Object.keys(y),
      { shapeFlag: t } = b;
    e.length &&
      t & 7 &&
      (a && e.some(c) && (y = Pi(y, a)), (b = Va(b, y, !1, !0)));
  }
  return (
    n.dirs &&
      ((b = Va(b, null, !1, !0)),
      (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs)),
    n.transition && ur(b, n.transition),
    (v = b),
    Ln(_),
    v
  );
}
function Mi(e, t = !0) {
  let n;
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    if (Fa(r)) {
      if (r.type !== H || r.children === `v-if`) {
        if (n) return;
        n = r;
      }
    } else return;
  }
  return n;
}
var Ni = e => {
    let t;
    for (let n in e)
      (n === `class` || n === `style` || s(n)) && ((t ||= {})[n] = e[n]);
    return t;
  },
  Pi = (e, t) => {
    let n = {};
    for (let r in e) (!c(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Fi(e, t, n) {
  let { props: r, children: i, component: a } = e,
    { props: o, children: s, patchFlag: c } = t,
    l = a.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return r ? Ii(r, o, l) : !!o;
    if (c & 8) {
      let e = t.dynamicProps;
      for (let t = 0; t < e.length; t++) {
        let n = e[t];
        if (Li(o, r, n) && !Ai(l, n)) return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable)
      ? !0
      : r === o
        ? !1
        : r
          ? o
            ? Ii(r, o, l)
            : !0
          : !!o;
  return !1;
}
function Ii(e, t, n) {
  let r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < r.length; i++) {
    let a = r[i];
    if (Li(t, e, a) && !Ai(n, a)) return !0;
  }
  return !1;
}
function Li(e, t, n) {
  let r = e[n],
    i = t[n];
  return n === `style` && b(r) && b(i) ? !xe(r, i) : r !== i;
}
function Ri({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    let n = t.subTree;
    if (
      (n.suspense &&
        n.suspense.activeBranch === e &&
        ((n.suspense.vnode.el = n.el = r), (e = n)),
      n === e)
    )
      (((e = t.vnode).el = r), (t = t.parent));
    else break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
var zi = {},
  Bi = () => Object.create(zi),
  Vi = e => Object.getPrototypeOf(e) === zi;
function Hi(e, t, n, r = !1) {
  let i = {},
    a = Bi();
  ((e.propsDefaults = Object.create(null)), Wi(e, t, i, a));
  for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
  (n ? (e.props = r ? i : Rt(i)) : e.type.props ? (e.props = i) : (e.props = a),
    (e.attrs = a));
}
function Ui(e, t, n, r) {
  let {
      props: i,
      attrs: a,
      vnode: { patchFlag: o }
    } = e,
    s = P(i),
    [c] = e.propsOptions,
    l = !1;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      let n = e.vnode.dynamicProps;
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (Ai(e.emitsOptions, o)) continue;
        let u = t[o];
        if (c)
          if (f(a, o)) u !== a[o] && ((a[o] = u), (l = !0));
          else {
            let t = D(o);
            i[t] = Gi(c, s, t, u, e, !1);
          }
        else u !== a[o] && ((a[o] = u), (l = !0));
      }
    }
  } else {
    Wi(e, t, i, a) && (l = !0);
    let r;
    for (let a in s)
      (!t || (!f(t, a) && ((r = ie(a)) === a || !f(t, r)))) &&
        (c
          ? n &&
            (n[a] !== void 0 || n[r] !== void 0) &&
            (i[a] = Gi(c, s, a, void 0, e, !0))
          : delete i[a]);
    if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], (l = !0));
  }
  l && nt(e.attrs, `set`, ``);
}
function Wi(e, t, n, i) {
  let [a, o] = e.propsOptions,
    s = !1,
    c;
  if (t)
    for (let r in t) {
      if (E(r)) continue;
      let l = t[r],
        u;
      a && f(a, (u = D(r)))
        ? !o || !o.includes(u)
          ? (n[u] = l)
          : ((c ||= {})[u] = l)
        : Ai(e.emitsOptions, r) ||
          ((!(r in i) || l !== i[r]) && ((i[r] = l), (s = !0)));
    }
  if (o) {
    let t = P(n),
      i = c || r;
    for (let r = 0; r < o.length; r++) {
      let s = o[r];
      n[s] = Gi(a, t, s, i[s], e, !f(i, s));
    }
  }
  return s;
}
function Gi(e, t, n, r, i, a) {
  let o = e[n];
  if (o != null) {
    let e = f(o, `default`);
    if (e && r === void 0) {
      let e = o.default;
      if (o.type !== Function && !o.skipFactory && _(e)) {
        let { propsDefaults: a } = i;
        if (n in a) r = a[n];
        else {
          let o = ro(i);
          ((r = a[n] = e.call(null, t)), o());
        }
      } else r = e;
      i.ce && i.ce._setProp(n, r);
    }
    o[0] &&
      (a && !e ? (r = !1) : o[1] && (r === `` || r === ie(n)) && (r = !0));
  }
  return r;
}
var Ki = new WeakMap();
function qi(e, t, n = !1) {
  let a = n ? Ki : t.propsCache,
    o = a.get(e);
  if (o) return o;
  let s = e.props,
    c = {},
    u = [],
    d = !1;
  if (!_(e)) {
    let r = e => {
      d = !0;
      let [n, r] = qi(e, t, !0);
      (l(c, n), r && u.push(...r));
    };
    (!n && t.mixins.length && t.mixins.forEach(r),
      e.extends && r(e.extends),
      e.mixins && e.mixins.forEach(r));
  }
  if (!s && !d) return (b(e) && a.set(e, i), i);
  if (p(s))
    for (let e = 0; e < s.length; e++) {
      let t = D(s[e]);
      Ji(t) && (c[t] = r);
    }
  else if (s)
    for (let e in s) {
      let t = D(e);
      if (Ji(t)) {
        let n = s[e],
          r = (c[t] = p(n) || _(n) ? { type: n } : l({}, n)),
          i = r.type,
          a = !1,
          o = !0;
        if (p(i))
          for (let e = 0; e < i.length; ++e) {
            let t = i[e],
              n = _(t) && t.name;
            if (n === `Boolean`) {
              a = !0;
              break;
            } else n === `String` && (o = !1);
          }
        else a = _(i) && i.name === `Boolean`;
        ((r[0] = a), (r[1] = o), (a || f(r, `default`)) && u.push(t));
      }
    }
  let m = [c, u];
  return (b(e) && a.set(e, m), m);
}
function Ji(e) {
  return e[0] !== `$` && !E(e);
}
var Yi = e => e === `_` || e === `_ctx` || e === `$stable`,
  Xi = e => (p(e) ? e.map(Ga) : [Ga(e)]),
  Zi = (e, t, n) => {
    if (t._n) return t;
    let r = R((...e) => Xi(t(...e)), n);
    return ((r._c = !1), r);
  },
  Qi = (e, t, n) => {
    let r = e._ctx;
    for (let n in e) {
      if (Yi(n)) continue;
      let i = e[n];
      if (_(i)) t[n] = Zi(n, i, r);
      else if (i != null) {
        let e = Xi(i);
        t[n] = () => e;
      }
    }
  },
  $i = (e, t) => {
    let n = Xi(t);
    e.slots.default = () => n;
  },
  ea = (e, t, n) => {
    for (let r in t) (n || !Yi(r)) && (e[r] = t[r]);
  },
  ta = (e, t, n) => {
    let r = (e.slots = Bi());
    if (e.vnode.shapeFlag & 32) {
      let e = t._;
      e ? (ea(r, t, n), n && ce(r, `_`, e, !0)) : Qi(t, r);
    } else t && $i(e, t);
  },
  na = (e, t, n) => {
    let { vnode: i, slots: a } = e,
      o = !0,
      s = r;
    if (i.shapeFlag & 32) {
      let e = t._;
      (e
        ? n && e === 1
          ? (o = !1)
          : ea(a, t, n)
        : ((o = !t.$stable), Qi(t, a)),
        (s = t));
    } else t && ($i(e, t), (s = { default: 1 }));
    if (o) for (let e in a) !Yi(e) && s[e] == null && delete a[e];
  },
  ra = wa;
function ia(e) {
  return aa(e, Cr);
}
function aa(e, t) {
  let n = fe();
  n.__VUE__ = !0;
  let {
      insert: o,
      remove: s,
      patchProp: c,
      createElement: l,
      createText: u,
      createComment: d,
      setText: f,
      setElementText: p,
      parentNode: m,
      nextSibling: h,
      setScopeId: g = a,
      insertStaticContent: _
    } = e,
    v = (
      e,
      t,
      n,
      r = null,
      i = null,
      a = null,
      o = void 0,
      s = null,
      c = !!t.dynamicChildren
    ) => {
      if (e === t) return;
      (e && !Ia(e, t) && ((r = ve(e)), me(e, i, a, !0), (e = null)),
        t.patchFlag === -2 && ((c = !1), (t.dynamicChildren = null)));
      let { type: l, ref: u, shapeFlag: d } = t;
      switch (l) {
        case Da:
          y(e, t, n, r);
          break;
        case H:
          b(e, t, n, r);
          break;
        case Oa:
          e ?? x(t, n, r, o);
          break;
        case V:
          ie(e, t, n, r, i, a, o, s, c);
          break;
        default:
          d & 1
            ? w(e, t, n, r, i, a, o, s, c)
            : d & 6
              ? ae(e, t, n, r, i, a, o, s, c)
              : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, xe);
      }
      u != null && i
        ? hr(u, e && e.ref, a, t || e, !t)
        : u == null && e && e.ref != null && hr(e.ref, null, a, e, !0);
    },
    y = (e, t, n, r) => {
      if (e == null) o((t.el = u(t.children)), n, r);
      else {
        let n = (t.el = e.el);
        t.children !== e.children && f(n, t.children);
      }
    },
    b = (e, t, n, r) => {
      e == null ? o((t.el = d(t.children || ``)), n, r) : (t.el = e.el);
    },
    x = (e, t, n, r) => {
      [e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
    },
    S = ({ el: e, anchor: t }, n, r) => {
      let i;
      for (; e && e !== t; ) ((i = h(e)), o(e, n, r), (e = i));
      o(t, n, r);
    },
    C = ({ el: e, anchor: t }) => {
      let n;
      for (; e && e !== t; ) ((n = h(e)), s(e), (e = n));
      s(t);
    },
    w = (e, t, n, r, i, a, o, s, c) => {
      if (
        (t.type === `svg` ? (o = `svg`) : t.type === `math` && (o = `mathml`),
        e == null)
      )
        ee(t, n, r, i, a, o, s, c);
      else {
        let n = e.el && e.el._isVueCE ? e.el : null;
        try {
          (n && n._beginPatch(), ne(e, t, i, a, o, s, c));
        } finally {
          n && n._endPatch();
        }
      }
    },
    ee = (e, t, n, r, i, a, s, u) => {
      let d,
        f,
        { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
      if (
        ((d = e.el = l(e.type, a, m && m.is, m)),
        h & 8
          ? p(d, e.children)
          : h & 16 && te(e.children, d, null, r, i, oa(e, a), s, u),
        _ && zn(e, null, r, `created`),
        T(d, e, e.scopeId, s, r),
        m)
      ) {
        for (let e in m) e !== `value` && !E(e) && c(d, e, null, m[e], a, r);
        (`value` in m && c(d, `value`, null, m.value, a),
          (f = m.onVnodeBeforeMount) && Ya(f, r, e));
      }
      _ && zn(e, null, r, `beforeMount`);
      let v = ca(i, g);
      (v && g.beforeEnter(d),
        o(d, t, n),
        ((f = m && m.onVnodeMounted) || v || _) &&
          ra(() => {
            try {
              (f && Ya(f, r, e),
                v && g.enter(d),
                _ && zn(e, null, r, `mounted`));
            } finally {
            }
          }, i));
    },
    T = (e, t, n, r, i) => {
      if ((n && g(e, n), r)) for (let t = 0; t < r.length; t++) g(e, r[t]);
      if (i) {
        let n = i.subTree;
        if (
          t === n ||
          (ma(n.type) && (n.ssContent === t || n.ssFallback === t))
        ) {
          let t = i.vnode;
          T(e, t, t.scopeId, t.slotScopeIds, i.parent);
        }
      }
    },
    te = (e, t, n, r, i, a, o, s, c = 0) => {
      for (let l = c; l < e.length; l++)
        v(null, (e[l] = s ? Ka(e[l]) : Ga(e[l])), t, n, r, i, a, o, s);
    },
    ne = (e, t, n, i, a, o, s) => {
      let l = (t.el = e.el),
        { patchFlag: u, dynamicChildren: d, dirs: f } = t;
      u |= e.patchFlag & 16;
      let m = e.props || r,
        h = t.props || r,
        g;
      if (
        (n && sa(n, !1),
        (g = h.onVnodeBeforeUpdate) && Ya(g, n, t, e),
        f && zn(t, e, n, `beforeUpdate`),
        n && sa(n, !0),
        ((m.innerHTML && h.innerHTML == null) ||
          (m.textContent && h.textContent == null)) &&
          p(l, ``),
        d
          ? D(e.dynamicChildren, d, l, n, i, oa(t, a), o)
          : s || ue(e, t, l, null, n, i, oa(t, a), o, !1),
        u > 0)
      ) {
        if (u & 16) re(l, m, h, n, a);
        else if (
          (u & 2 && m.class !== h.class && c(l, `class`, null, h.class, a),
          u & 4 && c(l, `style`, m.style, h.style, a),
          u & 8)
        ) {
          let e = t.dynamicProps;
          for (let t = 0; t < e.length; t++) {
            let r = e[t],
              i = m[r],
              o = h[r];
            (o !== i || r === `value`) && c(l, r, i, o, a, n);
          }
        }
        u & 1 && e.children !== t.children && p(l, t.children);
      } else !s && d == null && re(l, m, h, n, a);
      ((g = h.onVnodeUpdated) || f) &&
        ra(() => {
          (g && Ya(g, n, t, e), f && zn(t, e, n, `updated`));
        }, i);
    },
    D = (e, t, n, r, i, a, o) => {
      for (let s = 0; s < t.length; s++) {
        let c = e[s],
          l = t[s];
        v(
          c,
          l,
          c.el && (c.type === V || !Ia(c, l) || c.shapeFlag & 198)
            ? m(c.el)
            : n,
          null,
          r,
          i,
          a,
          o,
          !0
        );
      }
    },
    re = (e, t, n, i, a) => {
      if (t !== n) {
        if (t !== r)
          for (let r in t) !E(r) && !(r in n) && c(e, r, t[r], null, a, i);
        for (let r in n) {
          if (E(r)) continue;
          let o = n[r],
            s = t[r];
          o !== s && r !== `value` && c(e, r, s, o, a, i);
        }
        `value` in n && c(e, `value`, t.value, n.value, a);
      }
    },
    ie = (e, t, n, r, i, a, s, c, l) => {
      let d = (t.el = e ? e.el : u(``)),
        f = (t.anchor = e ? e.anchor : u(``)),
        { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
      (h && (c = c ? c.concat(h) : h),
        e == null
          ? (o(d, n, r), o(f, n, r), te(t.children || [], n, f, i, a, s, c, l))
          : p > 0 &&
              p & 64 &&
              m &&
              e.dynamicChildren &&
              e.dynamicChildren.length === m.length
            ? (D(e.dynamicChildren, m, n, i, a, s, c),
              (t.key != null || (i && t === i.subTree)) && la(e, t, !0))
            : ue(e, t, n, f, i, a, s, c, l));
    },
    ae = (e, t, n, r, i, a, o, s, c) => {
      ((t.slotScopeIds = s),
        e == null
          ? t.shapeFlag & 512
            ? i.ctx.activate(t, n, r, o, c)
            : oe(t, n, r, i, a, o, c)
          : O(e, t, c));
    },
    oe = (e, t, n, r, i, a, o) => {
      let s = (e.component = Qa(e, r, i));
      if ((jr(e) && (s.ctx.renderer = xe), so(s, !1, o), s.asyncDep)) {
        if ((i && i.registerDep(s, ce, o), !e.el)) {
          let r = (s.subTree = q(H));
          (b(null, r, t, n), (e.placeholder = r.el));
        }
      } else ce(s, e, t, n, i, a, o);
    },
    O = (e, t, n) => {
      let r = (t.component = e.component);
      if (Fi(e, t, n))
        if (r.asyncDep && !r.asyncResolved) {
          le(r, t, n);
          return;
        } else ((r.next = t), r.update());
      else ((t.el = e.el), (r.vnode = t));
    },
    ce = (e, t, n, r, i, a, o) => {
      let s = () => {
        if (e.isMounted) {
          let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
          {
            let n = da(e);
            if (n) {
              (t && ((t.el = c.el), le(e, t, o)),
                n.asyncDep.then(() => {
                  ra(() => {
                    e.isUnmounted || l();
                  }, i);
                }));
              return;
            }
          }
          let u = t,
            d;
          (sa(e, !1),
            t ? ((t.el = c.el), le(e, t, o)) : (t = c),
            n && se(n),
            (d = t.props && t.props.onVnodeBeforeUpdate) && Ya(d, s, t, c),
            sa(e, !0));
          let f = ji(e),
            p = e.subTree;
          ((e.subTree = f),
            v(p, f, m(p.el), ve(p), e, i, a),
            (t.el = f.el),
            u === null && Ri(e, f.el),
            r && ra(r, i),
            (d = t.props && t.props.onVnodeUpdated) &&
              ra(() => Ya(d, s, t, c), i));
        } else {
          let o,
            { el: s, props: c } = t,
            { bm: l, m: u, parent: d, root: f, type: p } = e,
            m = Or(t);
          if (
            (sa(e, !1),
            l && se(l),
            !m && (o = c && c.onVnodeBeforeMount) && Ya(o, d, t),
            sa(e, !0),
            s && j)
          ) {
            let t = () => {
              ((e.subTree = ji(e)), j(s, e.subTree, e, i, null));
            };
            m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
          } else {
            f.ce &&
              f.ce._hasShadowRoot() &&
              f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
            let o = (e.subTree = ji(e));
            (v(null, o, n, r, e, i, a), (t.el = o.el));
          }
          if ((u && ra(u, i), !m && (o = c && c.onVnodeMounted))) {
            let e = t;
            ra(() => Ya(o, d, e), i);
          }
          ((t.shapeFlag & 256 ||
            (d && Or(d.vnode) && d.vnode.shapeFlag & 256)) &&
            e.a &&
            ra(e.a, i),
            (e.isMounted = !0),
            (t = n = r = null));
        }
      };
      e.scope.on();
      let c = (e.effect = new ke(s));
      e.scope.off();
      let l = (e.update = c.run.bind(c)),
        u = (e.job = c.runIfDirty.bind(c));
      ((u.i = e), (u.id = e.uid), (c.scheduler = () => On(u)), sa(e, !0), l());
    },
    le = (e, t, n) => {
      t.component = e;
      let r = e.vnode.props;
      ((e.vnode = t),
        (e.next = null),
        Ui(e, t.props, r, n),
        na(e, t.children, n),
        We(),
        jn(e),
        Ge());
    },
    ue = (e, t, n, r, i, a, o, s, c = !1) => {
      let l = e && e.children,
        u = e ? e.shapeFlag : 0,
        d = t.children,
        { patchFlag: f, shapeFlag: m } = t;
      if (f > 0) {
        if (f & 128) {
          k(l, d, n, r, i, a, o, s, c);
          return;
        } else if (f & 256) {
          de(l, d, n, r, i, a, o, s, c);
          return;
        }
      }
      m & 8
        ? (u & 16 && _e(l, i, a), d !== l && p(n, d))
        : u & 16
          ? m & 16
            ? k(l, d, n, r, i, a, o, s, c)
            : _e(l, i, a, !0)
          : (u & 8 && p(n, ``), m & 16 && te(d, n, r, i, a, o, s, c));
    },
    de = (e, t, n, r, a, o, s, c, l) => {
      ((e ||= i), (t ||= i));
      let u = e.length,
        d = t.length,
        f = Math.min(u, d),
        p;
      for (p = 0; p < f; p++) {
        let r = (t[p] = l ? Ka(t[p]) : Ga(t[p]));
        v(e[p], r, n, null, a, o, s, c, l);
      }
      u > d ? _e(e, a, o, !0, !1, f) : te(t, n, r, a, o, s, c, l, f);
    },
    k = (e, t, n, r, a, o, s, c, l) => {
      let u = 0,
        d = t.length,
        f = e.length - 1,
        p = d - 1;
      for (; u <= f && u <= p; ) {
        let r = e[u],
          i = (t[u] = l ? Ka(t[u]) : Ga(t[u]));
        if (Ia(r, i)) v(r, i, n, null, a, o, s, c, l);
        else break;
        u++;
      }
      for (; u <= f && u <= p; ) {
        let r = e[f],
          i = (t[p] = l ? Ka(t[p]) : Ga(t[p]));
        if (Ia(r, i)) v(r, i, n, null, a, o, s, c, l);
        else break;
        (f--, p--);
      }
      if (u > f) {
        if (u <= p) {
          let e = p + 1,
            i = e < d ? t[e].el : r;
          for (; u <= p; )
            (v(null, (t[u] = l ? Ka(t[u]) : Ga(t[u])), n, i, a, o, s, c, l),
              u++);
        }
      } else if (u > p) for (; u <= f; ) (me(e[u], a, o, !0), u++);
      else {
        let m = u,
          h = u,
          g = new Map();
        for (u = h; u <= p; u++) {
          let e = (t[u] = l ? Ka(t[u]) : Ga(t[u]));
          e.key != null && g.set(e.key, u);
        }
        let _,
          y = 0,
          b = p - h + 1,
          x = !1,
          S = 0,
          C = Array(b);
        for (u = 0; u < b; u++) C[u] = 0;
        for (u = m; u <= f; u++) {
          let r = e[u];
          if (y >= b) {
            me(r, a, o, !0);
            continue;
          }
          let i;
          if (r.key != null) i = g.get(r.key);
          else
            for (_ = h; _ <= p; _++)
              if (C[_ - h] === 0 && Ia(r, t[_])) {
                i = _;
                break;
              }
          i === void 0
            ? me(r, a, o, !0)
            : ((C[i - h] = u + 1),
              i >= S ? (S = i) : (x = !0),
              v(r, t[i], n, null, a, o, s, c, l),
              y++);
        }
        let w = x ? ua(C) : i;
        for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
          let e = h + u,
            i = t[e],
            f = t[e + 1],
            p = e + 1 < d ? f.el || pa(f) : r;
          C[u] === 0
            ? v(null, i, n, p, a, o, s, c, l)
            : x && (_ < 0 || u !== w[_] ? pe(i, n, p, 2) : _--);
        }
      }
    },
    pe = (e, t, n, r, i = null) => {
      let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
      if (d & 6) {
        pe(e.component.subTree, t, n, r);
        return;
      }
      if (d & 128) {
        e.suspense.move(t, n, r);
        return;
      }
      if (d & 64) {
        c.move(e, t, n, xe);
        return;
      }
      if (c === V) {
        o(a, t, n);
        for (let e = 0; e < u.length; e++) pe(u[e], t, n, r);
        o(e.anchor, t, n);
        return;
      }
      if (c === Oa) {
        S(e, t, n);
        return;
      }
      if (r !== 2 && d & 1 && l)
        if (r === 0)
          l.persisted && !a[Zn]
            ? o(a, t, n)
            : (l.beforeEnter(a), o(a, t, n), ra(() => l.enter(a), i));
        else {
          let { leave: r, delayLeave: i, afterLeave: c } = l,
            u = () => {
              e.ctx.isUnmounted ? s(a) : o(a, t, n);
            },
            d = () => {
              let e = a._isLeaving || !!a[Zn];
              (a._isLeaving && a[Zn](!0),
                l.persisted && !e
                  ? u()
                  : r(a, () => {
                      (u(), c && c());
                    }));
            };
          i ? i(a, u, d) : d();
        }
      else o(a, t, n);
    },
    me = (e, t, n, r = !1, i = !1) => {
      let {
        type: a,
        props: o,
        ref: s,
        children: c,
        dynamicChildren: l,
        shapeFlag: u,
        patchFlag: d,
        dirs: f,
        cacheIndex: p,
        memo: m
      } = e;
      if (
        (d === -2 && (i = !1),
        s != null && (We(), hr(s, null, n, e, !0), Ge()),
        p != null && (t.renderCache[p] = void 0),
        u & 256)
      ) {
        t.ctx.deactivate(e);
        return;
      }
      let h = u & 1 && f,
        g = !Or(e),
        _;
      if ((g && (_ = o && o.onVnodeBeforeUnmount) && Ya(_, t, e), u & 6))
        A(e.component, n, r);
      else {
        if (u & 128) {
          e.suspense.unmount(n, r);
          return;
        }
        (h && zn(e, null, t, `beforeUnmount`),
          u & 64
            ? e.type.remove(e, t, n, xe, r)
            : l && !l.hasOnce && (a !== V || (d > 0 && d & 64))
              ? _e(l, t, n, !1, !0)
              : ((a === V && d & 384) || (!i && u & 16)) && _e(c, t, n),
          r && he(e));
      }
      let v = m != null && p == null;
      ((g && (_ = o && o.onVnodeUnmounted)) || h || v) &&
        ra(() => {
          (_ && Ya(_, t, e),
            h && zn(e, null, t, `unmounted`),
            v && (e.el = null));
        }, n);
    },
    he = e => {
      let { type: t, el: n, anchor: r, transition: i } = e;
      if (t === V) {
        ge(n, r);
        return;
      }
      if (t === Oa) {
        C(e);
        return;
      }
      let a = () => {
        (s(n), i && !i.persisted && i.afterLeave && i.afterLeave());
      };
      if (e.shapeFlag & 1 && i && !i.persisted) {
        let { leave: t, delayLeave: r } = i,
          o = () => t(n, a);
        r ? r(e.el, a, o) : o();
      } else a();
    },
    ge = (e, t) => {
      let n;
      for (; e !== t; ) ((n = h(e)), s(e), (e = n));
      s(t);
    },
    A = (e, t, n) => {
      let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
      (fa(c),
        fa(l),
        r && se(r),
        i.stop(),
        a && ((a.flags |= 8), me(o, e, t, n)),
        s && ra(s, t),
        ra(() => {
          e.isUnmounted = !0;
        }, t));
    },
    _e = (e, t, n, r = !1, i = !1, a = 0) => {
      for (let o = a; o < e.length; o++) me(e[o], t, n, r, i);
    },
    ve = e => {
      if (e.shapeFlag & 6) return ve(e.component.subTree);
      if (e.shapeFlag & 128) return e.suspense.next();
      let t = h(e.anchor || e.el),
        n = t && t[Yn];
      return n ? h(n) : t;
    },
    ye = !1,
    be = (e, t, n) => {
      let r;
      (e == null
        ? t._vnode && (me(t._vnode, null, null, !0), (r = t._vnode.component))
        : v(t._vnode || null, e, t, null, null, null, n),
        (t._vnode = e),
        (ye ||= ((ye = !0), jn(r), Mn(), !1)));
    },
    xe = {
      p: v,
      um: me,
      m: pe,
      r: he,
      mt: oe,
      mc: te,
      pc: ue,
      pbc: D,
      n: ve,
      o: e
    },
    Se,
    j;
  return (
    t && ([Se, j] = t(xe)),
    { render: be, hydrate: Se, createApp: wi(be, Se) }
  );
}
function oa({ type: e, props: t }, n) {
  return (n === `svg` && e === `foreignObject`) ||
    (n === `mathml` &&
      e === `annotation-xml` &&
      t &&
      t.encoding &&
      t.encoding.includes(`html`))
    ? void 0
    : n;
}
function sa({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function ca(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function la(e, t, n = !1) {
  let r = e.children,
    i = t.children;
  if (p(r) && p(i))
    for (let e = 0; e < r.length; e++) {
      let t = r[e],
        a = i[e];
      (a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = i[e] = Ka(i[e])), (a.el = t.el)),
        !n && a.patchFlag !== -2 && la(t, a)),
        a.type === Da &&
          (a.patchFlag === -1 && (a = i[e] = Ka(a)), (a.el = t.el)),
        a.type === H && !a.el && (a.el = t.el));
    }
}
function ua(e) {
  let t = e.slice(),
    n = [0],
    r,
    i,
    a,
    o,
    s,
    c = e.length;
  for (r = 0; r < c; r++) {
    let c = e[r];
    if (c !== 0) {
      if (((i = n[n.length - 1]), e[i] < c)) {
        ((t[r] = i), n.push(r));
        continue;
      }
      for (a = 0, o = n.length - 1; a < o; )
        ((s = (a + o) >> 1), e[n[s]] < c ? (a = s + 1) : (o = s));
      c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), (n[a] = r));
    }
  }
  for (a = n.length, o = n[a - 1]; a-- > 0; ) ((n[a] = o), (o = t[o]));
  return n;
}
function da(e) {
  let t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : da(t);
}
function fa(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function pa(e) {
  if (e.placeholder) return e.placeholder;
  let t = e.component;
  return t ? pa(t.subTree) : null;
}
var ma = e => e.__isSuspense,
  ha = 0,
  ga = {
    name: `Suspense`,
    __isSuspense: !0,
    process(e, t, n, r, i, a, o, s, c, l) {
      if (e == null) va(t, n, r, i, a, o, s, c, l);
      else {
        if (a && a.deps > 0 && !e.suspense.isInFallback) {
          ((t.suspense = e.suspense), (t.suspense.vnode = t), (t.el = e.el));
          return;
        }
        ya(e, t, n, r, i, o, s, c, l);
      }
    },
    hydrate: xa,
    normalize: Sa
  };
function _a(e, t) {
  let n = e.props && e.props[t];
  _(n) && n();
}
function va(e, t, n, r, i, a, o, s, c) {
  let {
      p: l,
      o: { createElement: u }
    } = c,
    d = u(`div`),
    f = (e.suspense = ba(e, i, r, t, d, n, a, o, s, c));
  (l(null, (f.pendingBranch = e.ssContent), d, null, r, f, a, o),
    f.deps > 0
      ? (_a(e, `onPending`),
        _a(e, `onFallback`),
        l(null, e.ssFallback, t, n, r, null, a, o),
        Ta(f, e.ssFallback))
      : f.resolve(!1, !0));
}
function ya(e, t, n, r, i, a, o, s, { p: c, um: l, o: { createElement: u } }) {
  let d = (t.suspense = e.suspense);
  ((d.vnode = t), (t.el = e.el));
  let f = t.ssContent,
    p = t.ssFallback,
    { activeBranch: m, pendingBranch: h, isInFallback: g, isHydrating: _ } = d;
  if (h)
    ((d.pendingBranch = f),
      Ia(h, f)
        ? (c(h, f, d.hiddenContainer, null, i, d, a, o, s),
          d.deps <= 0
            ? d.resolve()
            : g && (_ || (c(m, p, n, r, i, null, a, o, s), Ta(d, p))))
        : ((d.pendingId = ha++),
          _ ? ((d.isHydrating = !1), (d.activeBranch = h)) : l(h, i, d),
          (d.deps = 0),
          (d.effects.length = 0),
          (d.hiddenContainer = u(`div`)),
          g
            ? (c(null, f, d.hiddenContainer, null, i, d, a, o, s),
              d.deps <= 0
                ? d.resolve()
                : (c(m, p, n, r, i, null, a, o, s), Ta(d, p)))
            : m && Ia(m, f)
              ? (c(m, f, n, r, i, d, a, o, s), d.resolve(!0))
              : (c(null, f, d.hiddenContainer, null, i, d, a, o, s),
                d.deps <= 0 && d.resolve())));
  else if (m && Ia(m, f)) (c(m, f, n, r, i, d, a, o, s), Ta(d, f));
  else if (
    (_a(t, `onPending`),
    (d.pendingBranch = f),
    f.shapeFlag & 512
      ? (d.pendingId = f.component.suspenseId)
      : (d.pendingId = ha++),
    c(null, f, d.hiddenContainer, null, i, d, a, o, s),
    d.deps <= 0)
  )
    d.resolve();
  else {
    let { timeout: e, pendingId: t } = d;
    e > 0
      ? setTimeout(() => {
          d.pendingId === t && d.fallback(p);
        }, e)
      : e === 0 && d.fallback(p);
  }
}
function ba(e, t, n, r, i, a, o, s, c, l, u = !1) {
  let {
      p: d,
      m: f,
      um: p,
      n: m,
      o: { parentNode: h, remove: g }
    } = l,
    _,
    v = Ea(e);
  v && t && t.pendingBranch && ((_ = t.pendingId), t.deps++);
  let y = e.props ? ue(e.props.timeout) : void 0,
    b = a,
    x = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: o,
      container: r,
      hiddenContainer: i,
      deps: 0,
      pendingId: ha++,
      timeout: typeof y == `number` ? y : -1,
      activeBranch: null,
      isFallbackMountPending: !1,
      pendingBranch: null,
      isInFallback: !u,
      isHydrating: u,
      isUnmounted: !1,
      effects: [],
      resolve(e = !1, n = !1) {
        let {
            vnode: r,
            activeBranch: i,
            pendingBranch: o,
            pendingId: s,
            effects: c,
            parentComponent: l,
            container: u,
            isInFallback: d
          } = x,
          g = !1;
        if (x.isHydrating) x.isHydrating = !1;
        else if (!e) {
          g = i && o.transition && o.transition.mode === `out-in`;
          let e = !1;
          (g &&
            (i.transition.afterLeave = () => {
              s === x.pendingId &&
                (f(o, u, a === b && !e ? m(i) : a, 0),
                An(c),
                d && r.ssFallback && (r.ssFallback.el = null));
            }),
            i &&
              !x.isFallbackMountPending &&
              (h(i.el) === u && ((a = m(i)), (e = !0)),
              p(i, l, x, !0),
              !g && d && r.ssFallback && ra(() => (r.ssFallback.el = null), x)),
            g || f(o, u, a, 0));
        }
        ((x.isFallbackMountPending = !1),
          Ta(x, o),
          (x.pendingBranch = null),
          (x.isInFallback = !1));
        let y = x.parent,
          S = !1;
        for (; y; ) {
          if (y.pendingBranch) {
            (y.effects.push(...c), (S = !0));
            break;
          }
          y = y.parent;
        }
        (!S && !g && An(c),
          (x.effects = []),
          v &&
            t &&
            t.pendingBranch &&
            _ === t.pendingId &&
            (t.deps--, t.deps === 0 && !n && t.resolve()),
          _a(r, `onResolve`));
      },
      fallback(e) {
        if (!x.pendingBranch) return;
        let {
          vnode: t,
          activeBranch: n,
          parentComponent: r,
          container: i,
          namespace: a
        } = x;
        _a(t, `onFallback`);
        let o = m(n),
          l = () => {
            ((x.isFallbackMountPending = !1),
              x.isInFallback && (d(null, e, i, o, r, null, a, s, c), Ta(x, e)));
          },
          u = e.transition && e.transition.mode === `out-in`;
        (u && ((x.isFallbackMountPending = !0), (n.transition.afterLeave = l)),
          (x.isInFallback = !0),
          p(n, r, null, !0),
          u || l());
      },
      move(e, t, n) {
        (x.activeBranch && f(x.activeBranch, e, t, n), (x.container = e));
      },
      next() {
        return x.activeBranch && m(x.activeBranch);
      },
      registerDep(e, t, n) {
        let r = !!x.pendingBranch;
        r && x.deps++;
        let i = e.vnode.el;
        e.asyncDep
          .catch(t => {
            _n(t, e, 0);
          })
          .then(a => {
            if (e.isUnmounted || x.isUnmounted || x.pendingId !== e.suspenseId)
              return;
            (io(), (e.asyncResolved = !0));
            let { vnode: s } = e;
            (lo(e, a, !1), i && (s.el = i));
            let c = !i && e.subTree.el;
            (t(e, s, h(i || e.subTree.el), i ? null : m(e.subTree), x, o, n),
              c && ((s.placeholder = null), g(c)),
              Ri(e, s.el),
              r && --x.deps === 0 && x.resolve());
          });
      },
      unmount(e, t) {
        ((x.isUnmounted = !0),
          x.activeBranch && p(x.activeBranch, n, e, t),
          x.pendingBranch && p(x.pendingBranch, n, e, t));
      }
    };
  return x;
}
function xa(e, t, n, r, i, a, o, s, c) {
  let l = (t.suspense = ba(
      t,
      r,
      n,
      e.parentNode,
      document.createElement(`div`),
      null,
      i,
      a,
      o,
      s,
      !0
    )),
    u = c(e, (l.pendingBranch = t.ssContent), n, l, a, o);
  return (l.deps === 0 && l.resolve(!1, !0), u);
}
function Sa(e) {
  let { shapeFlag: t, children: n } = e,
    r = t & 32;
  ((e.ssContent = Ca(r ? n.default : n)),
    (e.ssFallback = r ? Ca(n.fallback) : q(H)));
}
function Ca(e) {
  let t;
  if (_(e)) {
    let n = Ma && e._c;
    (n && ((e._d = !1), U()), (e = e()), n && ((e._d = !0), (t = Aa), ja()));
  }
  return (
    p(e) && (e = Mi(e)),
    (e = Ga(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter(t => t !== e)),
    e
  );
}
function wa(e, t) {
  t && t.pendingBranch
    ? p(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : An(e);
}
function Ta(e, t) {
  e.activeBranch = t;
  let { vnode: n, parentComponent: r } = e,
    i = t.el;
  for (; !i && t.component; ) ((t = t.component.subTree), (i = t.el));
  ((n.el = i), r && r.subTree === n && ((r.vnode.el = i), Ri(r, i)));
}
function Ea(e) {
  let t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
var V = Symbol.for(`v-fgt`),
  Da = Symbol.for(`v-txt`),
  H = Symbol.for(`v-cmt`),
  Oa = Symbol.for(`v-stc`),
  ka = [],
  Aa = null;
function U(e = !1) {
  ka.push((Aa = e ? null : []));
}
function ja() {
  (ka.pop(), (Aa = ka[ka.length - 1] || null));
}
var Ma = 1;
function Na(e, t = !1) {
  ((Ma += e), e < 0 && Aa && t && (Aa.hasOnce = !0));
}
function Pa(e) {
  return (
    (e.dynamicChildren = Ma > 0 ? Aa || i : null),
    ja(),
    Ma > 0 && Aa && Aa.push(e),
    e
  );
}
function W(e, t, n, r, i, a) {
  return Pa(K(e, t, n, r, i, a, !0));
}
function G(e, t, n, r, i) {
  return Pa(q(e, t, n, r, i, !0));
}
function Fa(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ia(e, t) {
  return e.type === t.type && e.key === t.key;
}
var La = ({ key: e }) => e ?? null,
  Ra = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == `number` && (e = `` + e),
    e == null ? null : v(e) || F(e) || _(e) ? { i: Fn, r: e, k: t, f: !!n } : e
  );
function K(
  e,
  t = null,
  n = null,
  r = 0,
  i = null,
  a = e === V ? 0 : 1,
  o = !1,
  s = !1
) {
  let c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && La(t),
    ref: t && Ra(t),
    scopeId: In,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: a,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Fn
  };
  return (
    s
      ? (qa(c, n), a & 128 && e.normalize(c))
      : n && (c.shapeFlag |= v(n) ? 8 : 16),
    Ma > 0 &&
      !o &&
      Aa &&
      (c.patchFlag > 0 || a & 6) &&
      c.patchFlag !== 32 &&
      Aa.push(c),
    c
  );
}
var q = za;
function za(e, t = null, n = null, r = 0, i = null, a = !1) {
  if (((!e || e === Xr) && (e = H), Fa(e))) {
    let r = Va(e, t, !0);
    return (
      n && qa(r, n),
      Ma > 0 &&
        !a &&
        Aa &&
        (r.shapeFlag & 6 ? (Aa[Aa.indexOf(e)] = r) : Aa.push(r)),
      (r.patchFlag = -2),
      r
    );
  }
  if ((vo(e) && (e = e.__vccOpts), t)) {
    t = Ba(t);
    let { class: e, style: n } = t;
    (e && !v(e) && (t.class = A(e)),
      b(n) && (Wt(n) && !p(n) && (n = l({}, n)), (t.style = k(n))));
  }
  let o = v(e) ? 1 : ma(e) ? 128 : Xn(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
  return K(e, t, n, r, i, o, a, !0);
}
function Ba(e) {
  return e ? (Wt(e) || Vi(e) ? l({}, e) : e) : null;
}
function Va(e, t, n = !1, r = !1) {
  let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e,
    l = t ? Ja(i || {}, t) : i,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: l,
      key: l && La(l),
      ref:
        t && t.ref
          ? n && a
            ? p(a)
              ? a.concat(Ra(t))
              : [a, Ra(t)]
            : Ra(t)
          : a,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: s,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== V ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Va(e.ssContent),
      ssFallback: e.ssFallback && Va(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
  return (c && r && ur(u, c.clone(u)), u);
}
function Ha(e = ` `, t = 0) {
  return q(Da, null, e, t);
}
function Ua(e, t) {
  let n = q(Oa, null, e);
  return ((n.staticCount = t), n);
}
function Wa(e = ``, t = !1) {
  return t ? (U(), G(H, null, e)) : q(H, null, e);
}
function Ga(e) {
  return e == null || typeof e == `boolean`
    ? q(H)
    : p(e)
      ? q(V, null, e.slice())
      : Fa(e)
        ? Ka(e)
        : q(Da, null, String(e));
}
function Ka(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Va(e);
}
function qa(e, t) {
  let n = 0,
    { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (p(t)) n = 16;
  else if (typeof t == `object`)
    if (r & 65) {
      let n = t.default;
      n && (n._c && (n._d = !1), qa(e, n()), n._c && (n._d = !0));
      return;
    } else {
      n = 32;
      let r = t._;
      !r && !Vi(t)
        ? (t._ctx = Fn)
        : r === 3 &&
          Fn &&
          (Fn.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    _(t)
      ? ((t = { default: t, _ctx: Fn }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Ha(t)])) : (n = 8));
  ((e.children = t), (e.shapeFlag |= n));
}
function Ja(...e) {
  let t = {};
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    for (let e in r)
      if (e === `class`)
        t.class !== r.class && (t.class = A([t.class, r.class]));
      else if (e === `style`) t.style = k([t.style, r.style]);
      else if (s(e)) {
        let n = t[e],
          i = r[e];
        i && n !== i && !(p(n) && n.includes(i))
          ? (t[e] = n ? [].concat(n, i) : i)
          : i == null && n == null && !c(e) && (t[e] = i);
      } else e !== `` && (t[e] = r[e]);
  }
  return t;
}
function Ya(e, t, n, r = null) {
  gn(e, t, 7, [n, r]);
}
var Xa = Si(),
  Za = 0;
function Qa(e, t, n) {
  let i = e.type,
    a = (t ? t.appContext : e.appContext) || Xa,
    o = {
      uid: Za++,
      vnode: e,
      type: i,
      parent: t,
      appContext: a,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Te(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(a.provides),
      ids: t ? t.ids : [``, 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: qi(i, a),
      emitsOptions: ki(i, a),
      emit: null,
      emitted: null,
      propsDefaults: r,
      inheritAttrs: i.inheritAttrs,
      ctx: r,
      data: r,
      props: r,
      attrs: r,
      slots: r,
      refs: r,
      setupState: r,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Di.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
var $a = null,
  eo = () => $a || Fn,
  to,
  no;
{
  let e = fe(),
    t = (t, n) => {
      let r;
      return (
        (r = e[t]) || (r = e[t] = []),
        r.push(n),
        e => {
          r.length > 1 ? r.forEach(t => t(e)) : r[0](e);
        }
      );
    };
  ((to = t(`__VUE_INSTANCE_SETTERS__`, e => ($a = e))),
    (no = t(`__VUE_SSR_SETTERS__`, e => (oo = e))));
}
var ro = e => {
    let t = $a;
    return (
      to(e),
      e.scope.on(),
      () => {
        (e.scope.off(), to(t));
      }
    );
  },
  io = () => {
    ($a && $a.scope.off(), to(null));
  };
function ao(e) {
  return e.vnode.shapeFlag & 4;
}
var oo = !1;
function so(e, t = !1, n = !1) {
  t && no(t);
  let { props: r, children: i } = e.vnode,
    a = ao(e);
  (Hi(e, r, a, t), ta(e, i, n || t));
  let o = a ? co(e, t) : void 0;
  return (t && no(!1), o);
}
function co(e, t) {
  let n = e.type;
  ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, ai)));
  let { setup: r } = n;
  if (r) {
    We();
    let n = (e.setupContext = r.length > 1 ? ho(e) : null),
      i = ro(e),
      a = hn(r, e, 0, [e.props, n]),
      o = x(a);
    if ((Ge(), i(), (o || e.sp) && !Or(e) && fr(e), o)) {
      if ((a.then(io, io), t))
        return a
          .then(n => {
            lo(e, n, t);
          })
          .catch(t => {
            _n(t, e, 0);
          });
      e.asyncDep = a;
    } else lo(e, a, t);
  } else po(e, t);
}
function lo(e, t, n) {
  (_(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : b(t) && (e.setupState = Qt(t)),
    po(e, n));
}
var uo, fo;
function po(e, t, n) {
  let r = e.type;
  if (!e.render) {
    if (!t && uo && !r.render) {
      let t = r.template || fi(e).template;
      if (t) {
        let { isCustomElement: n, compilerOptions: i } = e.appContext.config,
          { delimiters: a, compilerOptions: o } = r;
        r.render = uo(t, l(l({ isCustomElement: n, delimiters: a }, i), o));
      }
    }
    ((e.render = r.render || a), fo && fo(e));
  }
  {
    let t = ro(e);
    We();
    try {
      ci(e);
    } finally {
      (Ge(), t());
    }
  }
}
var mo = {
  get(e, t) {
    return (tt(e, `get`, ``), e[t]);
  }
};
function ho(e) {
  return {
    attrs: new Proxy(e.attrs, mo),
    slots: e.slots,
    emit: e.emit,
    expose: t => {
      e.exposed = t || {};
    }
  };
}
function go(e) {
  return e.exposed
    ? (e.exposeProxy ||= new Proxy(Qt(Gt(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in ri) return ri[n](e);
        },
        has(e, t) {
          return t in e || t in ri;
        }
      }))
    : e.proxy;
}
function _o(e, t = !0) {
  return _(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function vo(e) {
  return _(e) && `__vccOpts` in e;
}
var J = (e, t) => cn(e, t, oo);
function Y(e, t, n) {
  try {
    Na(-1);
    let r = arguments.length;
    return r === 2
      ? b(t) && !p(t)
        ? Fa(t)
          ? q(e, null, [t])
          : q(e, t)
        : q(e, null, t)
      : (r > 3
          ? (n = Array.prototype.slice.call(arguments, 2))
          : r === 3 && Fa(n) && (n = [n]),
        q(e, t, n));
  } finally {
    Na(1);
  }
}
var yo = `3.5.38`,
  bo = void 0,
  xo = typeof window < `u` && window.trustedTypes;
if (xo)
  try {
    bo = xo.createPolicy(`vue`, { createHTML: e => e });
  } catch {}
var So = bo ? e => bo.createHTML(e) : e => e,
  Co = `http://www.w3.org/2000/svg`,
  wo = `http://www.w3.org/1998/Math/MathML`,
  To = typeof document < `u` ? document : null,
  Eo = To && To.createElement(`template`),
  Do = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: e => {
      let t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      let i =
        t === `svg`
          ? To.createElementNS(Co, e)
          : t === `mathml`
            ? To.createElementNS(wo, e)
            : n
              ? To.createElement(e, { is: n })
              : To.createElement(e);
      return (
        e === `select` &&
          r &&
          r.multiple != null &&
          i.setAttribute(`multiple`, r.multiple),
        i
      );
    },
    createText: e => To.createTextNode(e),
    createComment: e => To.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => To.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, ``);
    },
    insertStaticContent(e, t, n, r, i, a) {
      let o = n ? n.previousSibling : t.lastChild;
      if (i && (i === a || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === a || !(i = i.nextSibling));
        );
      else {
        Eo.innerHTML = So(
          r === `svg`
            ? `<svg>${e}</svg>`
            : r === `mathml`
              ? `<math>${e}</math>`
              : e
        );
        let i = Eo.content;
        if (r === `svg` || r === `mathml`) {
          let e = i.firstChild;
          for (; e.firstChild; ) i.appendChild(e.firstChild);
          i.removeChild(e);
        }
        t.insertBefore(i, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild
      ];
    }
  },
  Oo = `transition`,
  ko = `animation`,
  Ao = Symbol(`_vtc`),
  jo = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  },
  Mo = l({}, tr, jo),
  No = (e => ((e.displayName = `Transition`), (e.props = Mo), e))(
    (e, { slots: t }) => Y(ar, Io(e), t)
  ),
  Po = (e, t = []) => {
    p(e) ? e.forEach(e => e(...t)) : e && e(...t);
  },
  Fo = e => (e ? (p(e) ? e.some(e => e.length > 1) : e.length > 1) : !1);
function Io(e) {
  let t = {};
  for (let n in e) n in jo || (t[n] = e[n]);
  if (e.css === !1) return t;
  let {
      name: n = `v`,
      type: r,
      duration: i,
      enterFromClass: a = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: s = `${n}-enter-to`,
      appearFromClass: c = a,
      appearActiveClass: u = o,
      appearToClass: d = s,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: p = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`
    } = e,
    h = Lo(i),
    g = h && h[0],
    _ = h && h[1],
    {
      onBeforeEnter: v,
      onEnter: y,
      onEnterCancelled: b,
      onLeave: x,
      onLeaveCancelled: S,
      onBeforeAppear: C = v,
      onAppear: w = y,
      onAppearCancelled: ee = b
    } = t,
    T = (e, t, n, r) => {
      ((e._enterCancelled = r), Bo(e, t ? d : s), Bo(e, t ? u : o), n && n());
    },
    E = (e, t) => {
      ((e._isLeaving = !1), Bo(e, f), Bo(e, m), Bo(e, p), t && t());
    },
    te = e => (t, n) => {
      let i = e ? w : y,
        o = () => T(t, e, n);
      (Po(i, [t, o]),
        Vo(() => {
          (Bo(t, e ? c : a), zo(t, e ? d : s), Fo(i) || Uo(t, r, g, o));
        }));
    };
  return l(t, {
    onBeforeEnter(e) {
      (Po(v, [e]), zo(e, a), zo(e, o));
    },
    onBeforeAppear(e) {
      (Po(C, [e]), zo(e, c), zo(e, u));
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(e, t) {
      e._isLeaving = !0;
      let n = () => E(e, t);
      (zo(e, f),
        e._enterCancelled ? (zo(e, p), qo(e)) : (qo(e), zo(e, p)),
        Vo(() => {
          e._isLeaving && (Bo(e, f), zo(e, m), Fo(x) || Uo(e, r, _, n));
        }),
        Po(x, [e, n]));
    },
    onEnterCancelled(e) {
      (T(e, !1, void 0, !0), Po(b, [e]));
    },
    onAppearCancelled(e) {
      (T(e, !0, void 0, !0), Po(ee, [e]));
    },
    onLeaveCancelled(e) {
      (E(e), Po(S, [e]));
    }
  });
}
function Lo(e) {
  if (e == null) return null;
  if (b(e)) return [Ro(e.enter), Ro(e.leave)];
  {
    let t = Ro(e);
    return [t, t];
  }
}
function Ro(e) {
  return ue(e);
}
function zo(e, t) {
  (t.split(/\s+/).forEach(t => t && e.classList.add(t)),
    (e[Ao] || (e[Ao] = new Set())).add(t));
}
function Bo(e, t) {
  t.split(/\s+/).forEach(t => t && e.classList.remove(t));
  let n = e[Ao];
  n && (n.delete(t), n.size || (e[Ao] = void 0));
}
function Vo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
var Ho = 0;
function Uo(e, t, n, r) {
  let i = (e._endId = ++Ho),
    a = () => {
      i === e._endId && r();
    };
  if (n != null) return setTimeout(a, n);
  let { type: o, timeout: s, propCount: c } = Wo(e, t);
  if (!o) return r();
  let l = o + `end`,
    u = 0,
    d = () => {
      (e.removeEventListener(l, f), a());
    },
    f = t => {
      t.target === e && ++u >= c && d();
    };
  (setTimeout(() => {
    u < c && d();
  }, s + 1),
    e.addEventListener(l, f));
}
function Wo(e, t) {
  let n = window.getComputedStyle(e),
    r = e => (n[e] || ``).split(`, `),
    i = r(`${Oo}Delay`),
    a = r(`${Oo}Duration`),
    o = Go(i, a),
    s = r(`${ko}Delay`),
    c = r(`${ko}Duration`),
    l = Go(s, c),
    u = null,
    d = 0,
    f = 0;
  t === Oo
    ? o > 0 && ((u = Oo), (d = o), (f = a.length))
    : t === ko
      ? l > 0 && ((u = ko), (d = l), (f = c.length))
      : ((d = Math.max(o, l)),
        (u = d > 0 ? (o > l ? Oo : ko) : null),
        (f = u ? (u === Oo ? a.length : c.length) : 0));
  let p =
    u === Oo &&
    /\b(?:transform|all)(?:,|$)/.test(r(`${Oo}Property`).toString());
  return { type: u, timeout: d, propCount: f, hasTransform: p };
}
function Go(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((t, n) => Ko(t) + Ko(e[n])));
}
function Ko(e) {
  return e === `auto` ? 0 : Number(e.slice(0, -1).replace(`,`, `.`)) * 1e3;
}
function qo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Jo(e, t, n) {
  let r = e[Ao];
  (r && (t = (t ? [t, ...r] : [...r]).join(` `)),
    t == null
      ? e.removeAttribute(`class`)
      : n
        ? e.setAttribute(`class`, t)
        : (e.className = t));
}
var Yo = Symbol(`_vod`),
  Xo = Symbol(`_vsh`),
  Zo = {
    name: `show`,
    beforeMount(e, { value: t }, { transition: n }) {
      ((e[Yo] = e.style.display === `none` ? `` : e.style.display),
        n && t ? n.beforeEnter(e) : Qo(e, t));
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), Qo(e, !0), r.enter(e))
            : r.leave(e, () => {
                Qo(e, !1);
              })
          : Qo(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Qo(e, t);
    }
  };
function Qo(e, t) {
  ((e.style.display = t ? e[Yo] : `none`), (e[Xo] = !t));
}
var $o = Symbol(``),
  es = /(?:^|;)\s*display\s*:/;
function ts(e, t, n) {
  let r = e.style,
    i = v(n),
    a = !1;
  if (n && !i) {
    if (t)
      if (v(t))
        for (let e of t.split(`;`)) {
          let t = e.slice(0, e.indexOf(`:`)).trim();
          n[t] ?? rs(r, t, ``);
        }
      else for (let e in t) n[e] ?? rs(r, e, ``);
    for (let i in n) {
      i === `display` && (a = !0);
      let o = n[i];
      o == null
        ? rs(r, i, ``)
        : ss(e, i, !v(t) && t ? t[i] : void 0, o) || rs(r, i, o);
    }
  } else if (i) {
    if (t !== n) {
      let e = r[$o];
      (e && (n += `;` + e), (r.cssText = n), (a = es.test(n)));
    }
  } else t && e.removeAttribute(`style`);
  Yo in e && ((e[Yo] = a ? r.display : ``), e[Xo] && (r.display = `none`));
}
var ns = /\s*!important$/;
function rs(e, t, n) {
  if (p(n)) n.forEach(n => rs(e, t, n));
  else if (((n ??= ``), t.startsWith(`--`))) e.setProperty(t, n);
  else {
    let r = os(e, t);
    ns.test(n)
      ? e.setProperty(ie(r), n.replace(ns, ``), `important`)
      : (e[r] = n);
  }
}
var is = [`Webkit`, `Moz`, `ms`],
  as = {};
function os(e, t) {
  let n = as[t];
  if (n) return n;
  let r = D(t);
  if (r !== `filter` && r in e) return (as[t] = r);
  r = ae(r);
  for (let n = 0; n < is.length; n++) {
    let i = is[n] + r;
    if (i in e) return (as[t] = i);
  }
  return t;
}
function ss(e, t, n, r) {
  return (
    e.tagName === `TEXTAREA` &&
    (t === `width` || t === `height`) &&
    v(r) &&
    n === r
  );
}
var cs = `http://www.w3.org/1999/xlink`;
function ls(e, t, n, r, i, a = ve(t)) {
  r && t.startsWith(`xlink:`)
    ? n == null
      ? e.removeAttributeNS(cs, t.slice(6, t.length))
      : e.setAttributeNS(cs, t, n)
    : n == null || (a && !ye(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, a ? `` : y(n) ? String(n) : n);
}
function us(e, t, n, r, i) {
  if (t === `innerHTML` || t === `textContent`) {
    n != null && (e[t] = t === `innerHTML` ? So(n) : n);
    return;
  }
  let a = e.tagName;
  if (t === `value` && a !== `PROGRESS` && !a.includes(`-`)) {
    let r = a === `OPTION` ? e.getAttribute(`value`) || `` : e.value,
      i = n == null ? (e.type === `checkbox` ? `on` : ``) : String(n);
    ((r !== i || !(`_value` in e)) && (e.value = i),
      n ?? e.removeAttribute(t),
      (e._value = n));
    return;
  }
  let o = !1;
  if (n === `` || n == null) {
    let r = typeof e[t];
    r === `boolean`
      ? (n = ye(n))
      : n == null && r === `string`
        ? ((n = ``), (o = !0))
        : r === `number` && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(i || t);
}
function ds(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function fs(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
var ps = Symbol(`_vei`);
function ms(e, t, n, r, i = null) {
  let a = e[ps] || (e[ps] = {}),
    o = a[t];
  if (r && o) o.value = r;
  else {
    let [n, s] = gs(t);
    r ? ds(e, n, (a[t] = bs(r, i)), s) : o && (fs(e, n, o, s), (a[t] = void 0));
  }
}
var hs = /(?:Once|Passive|Capture)$/;
function gs(e) {
  let t;
  if (hs.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(hs)); )
      ((e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0));
  }
  return [e[2] === `:` ? e.slice(3) : ie(e.slice(2)), t];
}
var _s = 0,
  vs = Promise.resolve(),
  ys = () => (_s ||= (vs.then(() => (_s = 0)), Date.now()));
function bs(e, t) {
  let n = e => {
    if (!e._vts) e._vts = Date.now();
    else if (e._vts <= n.attached) return;
    let r = n.value;
    if (p(r)) {
      let n = e.stopImmediatePropagation;
      e.stopImmediatePropagation = () => {
        (n.call(e), (e._stopped = !0));
      };
      let i = r.slice(),
        a = [e];
      for (let n = 0; n < i.length && !e._stopped; n++) {
        let e = i[n];
        e && gn(e, t, 5, a);
      }
    } else gn(r, t, 5, [e]);
  };
  return ((n.value = e), (n.attached = ys()), n);
}
var xs = e =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Ss = (e, t, n, r, i, a) => {
    let o = i === `svg`;
    t === `class`
      ? Jo(e, r, o)
      : t === `style`
        ? ts(e, n, r)
        : s(t)
          ? c(t) || ms(e, t, n, r, a)
          : (
                t[0] === `.`
                  ? ((t = t.slice(1)), !0)
                  : t[0] === `^`
                    ? ((t = t.slice(1)), !1)
                    : Cs(e, t, r, o)
              )
            ? (us(e, t, r),
              !e.tagName.includes(`-`) &&
                (t === `value` || t === `checked` || t === `selected`) &&
                ls(e, t, r, o, a, t !== `value`))
            : e._isVueCE &&
                (ws(e, t) ||
                  (e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))))
              ? us(e, D(t), r, a, t)
              : (t === `true-value`
                  ? (e._trueValue = r)
                  : t === `false-value` && (e._falseValue = r),
                ls(e, t, r, o));
  };
function Cs(e, t, n, r) {
  if (r)
    return !!(
      t === `innerHTML` ||
      t === `textContent` ||
      (t in e && xs(t) && _(n))
    );
  if (
    t === `spellcheck` ||
    t === `draggable` ||
    t === `translate` ||
    t === `autocorrect` ||
    (t === `sandbox` && e.tagName === `IFRAME`) ||
    t === `form` ||
    (t === `list` && e.tagName === `INPUT`) ||
    (t === `type` && e.tagName === `TEXTAREA`)
  )
    return !1;
  if (t === `width` || t === `height`) {
    let t = e.tagName;
    if (t === `IMG` || t === `VIDEO` || t === `CANVAS` || t === `SOURCE`)
      return !1;
  }
  return xs(t) && v(n) ? !1 : t in e;
}
function ws(e, t) {
  let n = e._def.props;
  if (!n) return !1;
  let r = D(t);
  return Array.isArray(n)
    ? n.some(e => D(e) === r)
    : Object.keys(n).some(e => D(e) === r);
}
var Ts = {
    esc: `escape`,
    space: ` `,
    up: `arrow-up`,
    left: `arrow-left`,
    right: `arrow-right`,
    down: `arrow-down`,
    delete: `backspace`
  },
  Es = (e, t) => {
    let n = (e._withKeys ||= {}),
      r = t.join(`.`);
    return (
      n[r] ||
      (n[r] = n => {
        if (!(`key` in n)) return;
        let r = ie(n.key);
        if (t.some(e => e === r || Ts[e] === r)) return e(n);
      })
    );
  },
  Ds = l({ patchProp: Ss }, Do),
  Os,
  ks = !1;
function As() {
  return ((Os = ks ? Os : ia(Ds)), (ks = !0), Os);
}
var js = (...e) => {
  let t = As().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = e => {
      let t = Ns(e);
      if (t) return n(t, !0, Ms(t));
    }),
    t
  );
};
function Ms(e) {
  if (e instanceof SVGElement) return `svg`;
  if (typeof MathMLElement == `function` && e instanceof MathMLElement)
    return `mathml`;
}
function Ns(e) {
  return v(e) ? document.querySelector(e) : e;
}
var Ps = e => /^[a-z][a-z0-9+.-]*:/.test(e) || e.startsWith(`//`),
  Fs = e => /^(https?:)?\/\//.test(e),
  Is = e => {
    if (!e || e.endsWith(`/`)) return e;
    let t = e.replace(/(^|\/)README.md$/i, `$1index.html`);
    return (
      t.endsWith(`.md`)
        ? (t = `${t.substring(0, t.length - 3)}.html`)
        : t.endsWith(`.html`) || (t = `${t}.html`),
      t.endsWith(`/index.html`) && (t = t.substring(0, t.length - 10)),
      t
    );
  },
  Ls = `http://.`,
  Rs = (e, t) => {
    if (!e.startsWith(`/`) && t) {
      let n = t.slice(0, t.lastIndexOf(`/`));
      return Is(new URL(`${n}/${e}`, Ls).pathname);
    }
    return Is(e);
  },
  zs = (e, t) => {
    let n = Object.keys(e).sort((e, t) => {
      let n = t.split(`/`).length - e.split(`/`).length;
      return n === 0 ? t.length - e.length : n;
    });
    for (let e of n) if (t.startsWith(e)) return e;
    return `/`;
  },
  Bs = /(#|\?)/,
  Vs = e => {
    let [t, ...n] = e.split(Bs);
    return { pathname: t, hashAndQueries: n.join(``) };
  },
  Hs = [`link`, `meta`, `script`, `style`, `noscript`, `template`],
  Us = [`title`, `base`],
  Ws = ([e, t, n]) =>
    Us.includes(e)
      ? e
      : Hs.includes(e)
        ? e === `meta` && t.name
          ? `${e}.${t.name}`
          : e === `template` && t.id
            ? `${e}.${t.id}`
            : JSON.stringify([
                e,
                Object.entries(t)
                  .map(([e, t]) =>
                    typeof t == `boolean` ? (t ? [e, ``] : null) : [e, t]
                  )
                  .filter(e => e != null)
                  .sort(([e], [t]) => e.localeCompare(t)),
                n
              ])
        : null,
  Gs = e => {
    let t = new Set(),
      n = [];
    return (
      e.forEach(e => {
        let r = Ws(e);
        r && !t.has(r) && (t.add(r), n.push(e));
      }),
      n
    );
  },
  Ks = e => (e.endsWith(`/`) ? e.slice(0, -1) : e),
  qs = e => (e.startsWith(`/`) ? e.slice(1) : e),
  Js = e => Object.prototype.toString.call(e) === `[object Object]`,
  Ys = e => typeof e == `string`,
  Xs = typeof document < `u`;
function Zs(e) {
  return (
    typeof e == `object` ||
    `displayName` in e ||
    `props` in e ||
    `__vccOpts` in e
  );
}
function Qs(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === `Module` ||
    (e.default && Zs(e.default))
  );
}
var X = Object.assign;
function $s(e, t) {
  let n = {};
  for (let r in t) {
    let i = t[r];
    n[r] = tc(i) ? i.map(e) : e(i);
  }
  return n;
}
var ec = () => {},
  tc = Array.isArray;
function nc(e, t) {
  let n = {};
  for (let r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
var rc = Symbol(``);
function ic(e, t) {
  return X(Error(), { type: e, [rc]: !0 }, t);
}
function ac(e, t) {
  return e instanceof Error && rc in e && (t == null || !!(e.type & t));
}
var oc = Symbol(``),
  sc = Symbol(``),
  cc = Symbol(``),
  lc = Symbol(``),
  uc = Symbol(``);
function dc() {
  return Vn(cc);
}
function fc(e) {
  return Vn(lc);
}
var pc = /#/g,
  mc = /&/g,
  hc = /\//g,
  gc = /=/g,
  _c = /\?/g,
  vc = /\+/g,
  yc = /%5B/g,
  bc = /%5D/g,
  xc = /%5E/g,
  Sc = /%60/g,
  Cc = /%7B/g,
  wc = /%7C/g,
  Tc = /%7D/g,
  Ec = /%20/g;
function Dc(e) {
  return e == null
    ? ``
    : encodeURI(`` + e)
        .replace(wc, `|`)
        .replace(yc, `[`)
        .replace(bc, `]`);
}
function Oc(e) {
  return Dc(e).replace(Cc, `{`).replace(Tc, `}`).replace(xc, `^`);
}
function kc(e) {
  return Dc(e)
    .replace(vc, `%2B`)
    .replace(Ec, `+`)
    .replace(pc, `%23`)
    .replace(mc, `%26`)
    .replace(Sc, '`')
    .replace(Cc, `{`)
    .replace(Tc, `}`)
    .replace(xc, `^`);
}
function Ac(e) {
  return kc(e).replace(gc, `%3D`);
}
function jc(e) {
  return Dc(e).replace(pc, `%23`).replace(_c, `%3F`);
}
function Mc(e) {
  return jc(e).replace(hc, `%2F`);
}
function Nc(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent(`` + e);
  } catch {}
  return `` + e;
}
var Pc = /\/$/,
  Fc = e => e.replace(Pc, ``);
function Ic(e, t, n = `/`) {
  let r,
    i = {},
    a = ``,
    o = ``,
    s = t.indexOf(`#`),
    c = t.indexOf(`?`);
  return (
    (c = s >= 0 && c > s ? -1 : c),
    c >= 0 &&
      ((r = t.slice(0, c)),
      (a = t.slice(c, s > 0 ? s : t.length)),
      (i = e(a.slice(1)))),
    s >= 0 && ((r ||= t.slice(0, s)), (o = t.slice(s, t.length))),
    (r = Wc(r ?? t, n)),
    { fullPath: r + a + o, path: r, query: i, hash: Nc(o) }
  );
}
function Lc(e, t) {
  let n = t.query ? e(t.query) : ``;
  return t.path + (n && `?`) + n + (t.hash || ``);
}
function Rc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || `/`;
}
function zc(e, t, n) {
  let r = t.matched.length - 1,
    i = n.matched.length - 1;
  return (
    r > -1 &&
    r === i &&
    Bc(t.matched[r], n.matched[i]) &&
    Vc(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Bc(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Vc(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var n in e) if (!Hc(e[n], t[n])) return !1;
  return !0;
}
function Hc(e, t) {
  return tc(e)
    ? Uc(e, t)
    : tc(t)
      ? Uc(t, e)
      : (e && e.valueOf()) === (t && t.valueOf());
}
function Uc(e, t) {
  return tc(t)
    ? e.length === t.length && e.every((e, n) => e === t[n])
    : e.length === 1 && e[0] === t;
}
function Wc(e, t) {
  if (e.startsWith(`/`)) return e;
  if (!e) return t;
  let n = t.split(`/`),
    r = e.split(`/`),
    i = r[r.length - 1];
  (i === `..` || i === `.`) && r.push(``);
  let a = n.length - 1,
    o,
    s;
  for (o = 0; o < r.length; o++)
    if (((s = r[o]), s !== `.`))
      if (s === `..`) a > 1 && a--;
      else break;
  return n.slice(0, a).join(`/`) + `/` + r.slice(o).join(`/`);
}
var Gc = {
  path: `/`,
  name: void 0,
  params: {},
  query: {},
  hash: ``,
  fullPath: `/`,
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
function Kc(e) {
  if (!e)
    if (Xs) {
      let t = document.querySelector(`base`);
      ((e = (t && t.getAttribute(`href`)) || `/`),
        (e = e.replace(/^\w+:\/\/[^/]+/, ``)));
    } else e = `/`;
  return (e[0] !== `/` && e[0] !== `#` && (e = `/` + e), Fc(e));
}
var qc = /^[^#]+#/;
function Jc(e, t) {
  return e.replace(qc, `#`) + t;
}
function Yc(e, t) {
  let n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  };
}
var Xc = () => ({ left: window.scrollX, top: window.scrollY });
function Zc(e) {
  let t;
  if (`el` in e) {
    let n = e.el,
      r = typeof n == `string` && n.startsWith(`#`),
      i =
        typeof n == `string`
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!i) return;
    t = Yc(i, e);
  } else t = e;
  `scrollBehavior` in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left == null ? window.scrollX : t.left,
        t.top == null ? window.scrollY : t.top
      );
}
function Qc(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
var $c = new Map();
function el(e, t) {
  $c.set(e, t);
}
function tl(e) {
  let t = $c.get(e);
  return ($c.delete(e), t);
}
function nl(e) {
  return typeof e == `string` || (e && typeof e == `object`);
}
function rl(e) {
  return typeof e == `string` || typeof e == `symbol`;
}
function il(e) {
  let t = {};
  if (e === `` || e === `?`) return t;
  let n = (e[0] === `?` ? e.slice(1) : e).split(`&`);
  for (let e = 0; e < n.length; ++e) {
    let r = n[e].replace(vc, ` `),
      i = r.indexOf(`=`),
      a = Nc(i < 0 ? r : r.slice(0, i)),
      o = i < 0 ? null : Nc(r.slice(i + 1));
    if (a in t) {
      let e = t[a];
      (tc(e) || (e = t[a] = [e]), e.push(o));
    } else t[a] = o;
  }
  return t;
}
function al(e) {
  let t = ``;
  for (let n in e) {
    let r = e[n];
    if (((n = Ac(n)), r == null)) {
      r !== void 0 && (t += (t.length ? `&` : ``) + n);
      continue;
    }
    (tc(r) ? r.map(e => e && kc(e)) : [r && kc(r)]).forEach(e => {
      e !== void 0 &&
        ((t += (t.length ? `&` : ``) + n), e != null && (t += `=` + e));
    });
  }
  return t;
}
function ol(e) {
  let t = {};
  for (let n in e) {
    let r = e[n];
    r !== void 0 &&
      (t[n] = tc(r)
        ? r.map(e => (e == null ? null : `` + e))
        : r == null
          ? r
          : `` + r);
  }
  return t;
}
function sl() {
  let e = [];
  function t(t) {
    return (
      e.push(t),
      () => {
        let n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function cl(e, t, n, r, i, a = e => e()) {
  let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () =>
    new Promise((s, c) => {
      let l = e => {
          e === !1
            ? c(ic(4, { from: n, to: t }))
            : e instanceof Error
              ? c(e)
              : nl(e)
                ? c(ic(2, { from: t, to: e }))
                : (o &&
                    r.enterCallbacks[i] === o &&
                    typeof e == `function` &&
                    o.push(e),
                  s());
        },
        u = a(() => e.call(r && r.instances[i], t, n, l)),
        d = Promise.resolve(u);
      (e.length < 3 && (d = d.then(l)), d.catch(e => c(e)));
    });
}
function ll(e, t, n, r, i = e => e()) {
  let a = [];
  for (let o of e)
    for (let e in o.components) {
      let s = o.components[e];
      if (!(t !== `beforeRouteEnter` && !o.instances[e]))
        if (Zs(s)) {
          let c = (s.__vccOpts || s)[t];
          c && a.push(cl(c, n, r, o, e, i));
        } else {
          let c = s();
          a.push(() =>
            c.then(a => {
              if (!a)
                throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
              let s = Qs(a) ? a.default : a;
              ((o.mods[e] = a), (o.components[e] = s));
              let c = (s.__vccOpts || s)[t];
              return c && cl(c, n, r, o, e, i)();
            })
          );
        }
    }
  return a;
}
function ul(e, t) {
  let n = [],
    r = [],
    i = [],
    a = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < a; o++) {
    let a = t.matched[o];
    a && (e.matched.find(e => Bc(e, a)) ? r.push(a) : n.push(a));
    let s = e.matched[o];
    s && (t.matched.find(e => Bc(e, s)) || i.push(s));
  }
  return [n, r, i];
}
var dl = () => location.protocol + `//` + location.host;
function fl(e, t) {
  let { pathname: n, search: r, hash: i } = t,
    a = e.indexOf(`#`);
  if (a > -1) {
    let t = i.includes(e.slice(a)) ? e.slice(a).length : 1,
      n = i.slice(t);
    return (n[0] !== `/` && (n = `/` + n), Rc(n, ``));
  }
  return Rc(n, e) + r + i;
}
function pl(e, t, n, r) {
  let i = [],
    a = [],
    o = null,
    s = ({ state: a }) => {
      let s = fl(e, location),
        c = n.value,
        l = t.value,
        u = 0;
      if (a) {
        if (((n.value = s), (t.value = a), o && o === c)) {
          o = null;
          return;
        }
        u = l ? a.position - l.position : 0;
      } else r(s);
      i.forEach(e => {
        e(n.value, c, {
          delta: u,
          type: `pop`,
          direction: u ? (u > 0 ? `forward` : `back`) : ``
        });
      });
    };
  function c() {
    o = n.value;
  }
  function l(e) {
    i.push(e);
    let t = () => {
      let t = i.indexOf(e);
      t > -1 && i.splice(t, 1);
    };
    return (a.push(t), t);
  }
  function u() {
    if (document.visibilityState === `hidden`) {
      let { history: e } = window;
      if (!e.state) return;
      e.replaceState(X({}, e.state, { scroll: Xc() }), ``);
    }
  }
  function d() {
    for (let e of a) e();
    ((a = []),
      window.removeEventListener(`popstate`, s),
      window.removeEventListener(`pagehide`, u),
      document.removeEventListener(`visibilitychange`, u));
  }
  return (
    window.addEventListener(`popstate`, s),
    window.addEventListener(`pagehide`, u),
    document.addEventListener(`visibilitychange`, u),
    { pauseListeners: c, listen: l, destroy: d }
  );
}
function ml(e, t, n, r = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: i ? Xc() : null
  };
}
function hl(e) {
  let { history: t, location: n } = window,
    r = { value: fl(e, n) },
    i = { value: t.state };
  i.value ||
    a(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
      },
      !0
    );
  function a(r, a, o) {
    let s = e.indexOf(`#`),
      c =
        s > -1
          ? (n.host && document.querySelector(`base`) ? e : e.slice(s)) + r
          : dl() + e + r;
    try {
      (t[o ? `replaceState` : `pushState`](a, ``, c), (i.value = a));
    } catch (e) {
      (console.error(e), n[o ? `replace` : `assign`](c));
    }
  }
  function o(e, n) {
    (a(
      e,
      X({}, t.state, ml(i.value.back, e, i.value.forward, !0), n, {
        position: i.value.position
      }),
      !0
    ),
      (r.value = e));
  }
  function s(e, n) {
    let o = X({}, i.value, t.state, { forward: e, scroll: Xc() });
    (a(o.current, o, !0),
      a(e, X({}, ml(r.value, e, null), { position: o.position + 1 }, n), !1),
      (r.value = e));
  }
  return { location: r, state: i, push: s, replace: o };
}
function gl(e) {
  e = Kc(e);
  let t = hl(e),
    n = pl(e, t.state, t.location, t.replace);
  function r(e, t = !0) {
    (t || n.pauseListeners(), history.go(e));
  }
  let i = X(
    { location: ``, base: e, go: r, createHref: Jc.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(i, 'location', {
      enumerable: !0,
      get: () => t.location.value
    }),
    Object.defineProperty(i, 'state', {
      enumerable: !0,
      get: () => t.state.value
    }),
    i
  );
}
var _l = { type: 0, value: `` },
  vl = /[a-zA-Z0-9_]/;
function yl(e) {
  if (!e) return [[]];
  if (e === `/`) return [[_l]];
  if (!e.startsWith(`/`)) throw Error(`Invalid path "${e}"`);
  function t(e) {
    throw Error(`ERR (${n})/"${l}": ${e}`);
  }
  let n = 0,
    r = n,
    i = [],
    a;
  function o() {
    (a && i.push(a), (a = []));
  }
  let s = 0,
    c,
    l = ``,
    u = ``;
  function d() {
    l &&=
      (n === 0
        ? a.push({ type: 0, value: l })
        : n === 1 || n === 2 || n === 3
          ? (a.length > 1 &&
              (c === `*` || c === `+`) &&
              t(
                `A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`
              ),
            a.push({
              type: 1,
              value: l,
              regexp: u,
              repeatable: c === `*` || c === `+`,
              optional: c === `*` || c === `?`
            }))
          : t(`Invalid state to consume buffer`),
      ``);
  }
  function f() {
    l += c;
  }
  for (; s < e.length; )
    switch (((c = e[s++]), n)) {
      case 0:
        c === `\\`
          ? ((r = n), (n = 4))
          : c === `/`
            ? (l && d(), o())
            : c === `:`
              ? (d(), (n = 1))
              : f();
        break;
      case 4:
        (f(), (n = r));
        break;
      case 1:
        c === `(`
          ? (n = 2)
          : vl.test(c)
            ? f()
            : (d(), (n = 0), c !== `*` && c !== `?` && c !== `+` && s--);
        break;
      case 2:
        c === `)`
          ? u[u.length - 1] == `\\`
            ? (u = u.slice(0, -1) + c)
            : (n = 3)
          : (u += c);
        break;
      case 3:
        (d(), (n = 0), c !== `*` && c !== `?` && c !== `+` && s--, (u = ``));
        break;
      default:
        t(`Unknown state`);
        break;
    }
  return (
    n === 2 && t(`Unfinished custom RegExp for param "${l}"`),
    d(),
    o(),
    i
  );
}
var bl = `[^/]+?`,
  xl = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Sl = /[.+*?^${}()[\]/\\]/g;
function Cl(e, t) {
  let n = X({}, xl, t),
    r = [],
    i = n.start ? `^` : ``,
    a = [];
  for (let t of e) {
    let e = t.length ? [] : [90];
    n.strict && !t.length && (i += `/`);
    for (let r = 0; r < t.length; r++) {
      let o = t[r],
        s = 40 + (n.sensitive ? 0.25 : 0);
      if (o.type === 0)
        (r || (i += `/`), (i += o.value.replace(Sl, `\\$&`)), (s += 40));
      else if (o.type === 1) {
        let { value: e, repeatable: n, optional: c, regexp: l } = o;
        a.push({ name: e, repeatable: n, optional: c });
        let u = l || bl;
        if (u !== bl) {
          s += 10;
          try {
            RegExp(`(${u})`);
          } catch (t) {
            throw Error(
              `Invalid custom RegExp for param "${e}" (${u}): ` + t.message
            );
          }
        }
        let d = n ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
        (r || (d = c && t.length < 2 ? `(?:/${d})` : `/` + d),
          c && (d += `?`),
          (i += d),
          (s += 20),
          c && (s += -8),
          n && (s += -20),
          u === `.*` && (s += -50));
      }
      e.push(s);
    }
    r.push(e);
  }
  if (n.strict && n.end) {
    let e = r.length - 1;
    r[e][r[e].length - 1] += 0.7000000000000001;
  }
  (n.strict || (i += `/?`),
    n.end ? (i += `$`) : n.strict && !i.endsWith(`/`) && (i += `(?:/|$)`));
  let o = new RegExp(i, n.sensitive ? `` : `i`);
  function s(e) {
    let t = e.match(o),
      n = {};
    if (!t) return null;
    for (let e = 1; e < t.length; e++) {
      let r = t[e] || ``,
        i = a[e - 1];
      n[i.name] = r && i.repeatable ? r.split(`/`) : r;
    }
    return n;
  }
  function c(t) {
    let n = ``,
      r = !1;
    for (let i of e) {
      ((!r || !n.endsWith(`/`)) && (n += `/`), (r = !1));
      for (let e of i)
        if (e.type === 0) n += e.value;
        else if (e.type === 1) {
          let { value: a, repeatable: o, optional: s } = e,
            c = a in t ? t[a] : ``;
          if (tc(c) && !o)
            throw Error(
              `Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`
            );
          let l = tc(c) ? c.join(`/`) : c;
          if (!l)
            if (s)
              i.length < 2 &&
                (n.endsWith(`/`) ? (n = n.slice(0, -1)) : (r = !0));
            else throw Error(`Missing required param "${a}"`);
          n += l;
        }
    }
    return n || `/`;
  }
  return { re: o, score: r, keys: a, parse: s, stringify: c };
}
function wl(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    let r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0;
}
function Tl(e, t) {
  let n = 0,
    r = e.score,
    i = t.score;
  for (; n < r.length && n < i.length; ) {
    let e = wl(r[n], i[n]);
    if (e) return e;
    n++;
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (El(r)) return 1;
    if (El(i)) return -1;
  }
  return i.length - r.length;
}
function El(e) {
  let t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
var Dl = { strict: !1, end: !0, sensitive: !1 };
function Ol(e, t, n) {
  let r = X(Cl(yl(e.path), n), {
    record: e,
    parent: t,
    children: [],
    alias: []
  });
  return (t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r);
}
function kl(e, t) {
  let n = [],
    r = new Map();
  t = nc(Dl, t);
  function i(e) {
    return r.get(e);
  }
  function a(e, n, r) {
    let i = !r,
      s = jl(e);
    s.aliasOf = r && r.record;
    let l = nc(t, e),
      u = [s];
    if (`alias` in e) {
      let t = typeof e.alias == `string` ? [e.alias] : e.alias;
      for (let e of t)
        u.push(
          jl(
            X({}, s, {
              components: r ? r.record.components : s.components,
              path: e,
              aliasOf: r ? r.record : s
            })
          )
        );
    }
    let d, f;
    for (let t of u) {
      let { path: u } = t;
      if (n && u[0] !== `/`) {
        let e = n.record.path,
          r = e[e.length - 1] === `/` ? `` : `/`;
        t.path = n.record.path + (u && r + u);
      }
      if (
        ((d = Ol(t, n, l)),
        r
          ? r.alias.push(d)
          : ((f ||= d),
            f !== d && f.alias.push(d),
            i && e.name && !Nl(d) && o(e.name)),
        Ll(d) && c(d),
        s.children)
      ) {
        let e = s.children;
        for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
      }
      r ||= d;
    }
    return f
      ? () => {
          o(f);
        }
      : ec;
  }
  function o(e) {
    if (rl(e)) {
      let t = r.get(e);
      t &&
        (r.delete(e),
        n.splice(n.indexOf(t), 1),
        t.children.forEach(o),
        t.alias.forEach(o));
    } else {
      let t = n.indexOf(e);
      t > -1 &&
        (n.splice(t, 1),
        e.record.name && r.delete(e.record.name),
        e.children.forEach(o),
        e.alias.forEach(o));
    }
  }
  function s() {
    return n;
  }
  function c(e) {
    let t = Fl(e, n);
    (n.splice(t, 0, e), e.record.name && !Nl(e) && r.set(e.record.name, e));
  }
  function l(e, t) {
    let i,
      a = {},
      o,
      s;
    if (`name` in e && e.name) {
      if (((i = r.get(e.name)), !i)) throw ic(1, { location: e });
      ((s = i.record.name),
        (a = X(
          Al(
            t.params,
            i.keys
              .filter(e => !e.optional)
              .concat(i.parent ? i.parent.keys.filter(e => e.optional) : [])
              .map(e => e.name)
          ),
          e.params &&
            Al(
              e.params,
              i.keys.map(e => e.name)
            )
        )),
        (o = i.stringify(a)));
    } else if (e.path != null)
      ((o = e.path),
        (i = n.find(e => e.re.test(o))),
        i &&
          ((a = i.parse(o)),
          (s = i.record.name),
          i.keys.forEach(e => {
            e.optional && !a[e.name] && delete a[e.name];
          })));
    else {
      if (((i = t.name ? r.get(t.name) : n.find(e => e.re.test(t.path))), !i))
        throw ic(1, { location: e, currentLocation: t });
      ((s = i.record.name),
        (a = X({}, t.params, e.params)),
        (o = i.stringify(a)));
    }
    let c = [],
      l = i;
    for (; l; ) (c.unshift(l.record), (l = l.parent));
    return { name: s, path: o, params: a, matched: c, meta: Pl(c) };
  }
  e.forEach(e => a(e));
  function u() {
    ((n.length = 0), r.clear());
  }
  return {
    addRoute: a,
    resolve: l,
    removeRoute: o,
    clearRoutes: u,
    getRoutes: s,
    getRecordMatcher: i
  };
}
function Al(e, t) {
  let n = {};
  for (let r of t) r in e && (n[r] = e[r]);
  return n;
}
function jl(e) {
  let t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Ml(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      `components` in e
        ? e.components || null
        : e.component && { default: e.component }
  };
  return (Object.defineProperty(t, 'mods', { value: {} }), t);
}
function Ml(e) {
  let t = {},
    n = e.props || !1;
  if (`component` in e) t.default = n;
  else for (let r in e.components) t[r] = typeof n == `object` ? n[r] : n;
  return t;
}
function Nl(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Pl(e) {
  return e.reduce((e, t) => X(e, t.meta), {});
}
function Fl(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r; ) {
    let i = (n + r) >> 1;
    Tl(e, t[i]) < 0 ? (r = i) : (n = i + 1);
  }
  let i = Il(e);
  return (i && (r = t.lastIndexOf(i, r - 1)), r);
}
function Il(e) {
  let t = e;
  for (; (t = t.parent); ) if (Ll(t) && Tl(e, t) === 0) return t;
}
function Ll({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function Rl(e) {
  let t = Vn(cc),
    n = Vn(lc),
    r = J(() => {
      let n = L(e.to);
      return t.resolve(n);
    }),
    i = J(() => {
      let { matched: e } = r.value,
        { length: t } = e,
        i = e[t - 1],
        a = n.matched;
      if (!i || !a.length) return -1;
      let o = a.findIndex(Bc.bind(null, i));
      if (o > -1) return o;
      let s = Ul(e[t - 2]);
      return t > 1 && Ul(i) === s && a[a.length - 1].path !== s
        ? a.findIndex(Bc.bind(null, e[t - 2]))
        : o;
    }),
    a = J(() => i.value > -1 && Hl(n.params, r.value.params)),
    o = J(
      () =>
        i.value > -1 &&
        i.value === n.matched.length - 1 &&
        Vc(n.params, r.value.params)
    );
  function s(n = {}) {
    if (Vl(n)) {
      let n = t[L(e.replace) ? `replace` : `push`](L(e.to)).catch(ec);
      return (
        e.viewTransition &&
          typeof document < `u` &&
          `startViewTransition` in document &&
          document.startViewTransition(() => n),
        n
      );
    }
    return Promise.resolve();
  }
  return {
    route: r,
    href: J(() => r.value.href),
    isActive: a,
    isExactActive: o,
    navigate: s
  };
}
function zl(e) {
  return e.length === 1 ? e[0] : e;
}
var Bl = z({
  name: `RouterLink`,
  compatConfig: { MODE: 3 },
  props: {
    to: { type: [String, Object], required: !0 },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: { type: String, default: `page` },
    viewTransition: Boolean
  },
  useLink: Rl,
  setup(e, { slots: t }) {
    let n = Lt(Rl(e)),
      { options: r } = Vn(cc),
      i = J(() => ({
        [Wl(e.activeClass, r.linkActiveClass, `router-link-active`)]:
          n.isActive,
        [Wl(
          e.exactActiveClass,
          r.linkExactActiveClass,
          `router-link-exact-active`
        )]: n.isExactActive
      }));
    return () => {
      let r = t.default && zl(t.default(n));
      return e.custom
        ? r
        : Y(
            `a`,
            {
              'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
              href: n.href,
              onClick: n.navigate,
              class: i.value
            },
            r
          );
    };
  }
});
function Vl(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      let t = e.currentTarget.getAttribute(`target`);
      if (/\b_blank\b/i.test(t)) return;
    }
    return (e.preventDefault && e.preventDefault(), !0);
  }
}
function Hl(e, t) {
  for (let n in t) {
    let r = t[n],
      i = e[n];
    if (typeof r == `string`) {
      if (r !== i) return !1;
    } else if (
      !tc(i) ||
      i.length !== r.length ||
      r.some((e, t) => e.valueOf() !== i[t].valueOf())
    )
      return !1;
  }
  return !0;
}
function Ul(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ``;
}
var Wl = (e, t, n) => e ?? t ?? n,
  Gl = z({
    name: `RouterView`,
    inheritAttrs: !1,
    props: { name: { type: String, default: `default` }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      let r = Vn(uc),
        i = J(() => e.route || r.value),
        a = Vn(sc, 0),
        o = J(() => {
          let e = L(a),
            { matched: t } = i.value,
            n;
          for (; (n = t[e]) && !n.components; ) e++;
          return e;
        }),
        s = J(() => i.value.matched[o.value]);
      (Bn(
        sc,
        J(() => o.value + 1)
      ),
        Bn(oc, s),
        Bn(uc, i));
      let c = I();
      return (
        Gn(
          () => [c.value, s.value, e.name],
          ([e, t, n], [r, i, a]) => {
            (t &&
              ((t.instances[n] = e),
              i &&
                i !== t &&
                e &&
                e === r &&
                (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards),
                t.updateGuards.size || (t.updateGuards = i.updateGuards))),
              e &&
                t &&
                (!i || !Bc(t, i) || !r) &&
                (t.enterCallbacks[n] || []).forEach(t => t(e)));
          },
          { flush: `post` }
        ),
        () => {
          let r = i.value,
            a = e.name,
            o = s.value,
            l = o && o.components[a];
          if (!l) return Kl(n.default, { Component: l, route: r });
          let u = o.props[a],
            d = Y(
              l,
              X(
                {},
                u
                  ? u === !0
                    ? r.params
                    : typeof u == `function`
                      ? u(r)
                      : u
                  : null,
                t,
                {
                  onVnodeUnmounted: e => {
                    e.component.isUnmounted && (o.instances[a] = null);
                  },
                  ref: c
                }
              )
            );
          return Kl(n.default, { Component: d, route: r }) || d;
        }
      );
    }
  });
function Kl(e, t) {
  if (!e) return null;
  let n = e(t);
  return n.length === 1 ? n[0] : n;
}
var ql = Gl;
function Jl(e) {
  let t = kl(e.routes, e),
    n = e.parseQuery || il,
    r = e.stringifyQuery || al,
    i = e.history,
    a = sl(),
    o = sl(),
    s = sl(),
    c = Jt(Gc),
    l = Gc;
  Xs &&
    e.scrollBehavior &&
    `scrollRestoration` in history &&
    (history.scrollRestoration = `manual`);
  let u = $s.bind(null, e => `` + e),
    d = $s.bind(null, Mc),
    f = $s.bind(null, Nc);
  function p(e, n) {
    let r, i;
    return (
      rl(e) ? ((r = t.getRecordMatcher(e)), (i = n)) : (i = e),
      t.addRoute(i, r)
    );
  }
  function m(e) {
    let n = t.getRecordMatcher(e);
    n && t.removeRoute(n);
  }
  function h() {
    return t.getRoutes().map(e => e.record);
  }
  function g(e) {
    return !!t.getRecordMatcher(e);
  }
  function _(e, a) {
    if (((a = X({}, a || c.value)), typeof e == `string`)) {
      let r = Ic(n, e, a.path),
        o = t.resolve({ path: r.path }, a),
        s = i.createHref(r.fullPath);
      return X(r, o, { params: f(o.params), redirectedFrom: void 0, href: s });
    }
    let o;
    if (e.path != null) o = X({}, e, { path: Ic(n, e.path, a.path).path });
    else {
      let t = X({}, e.params);
      for (let e in t) t[e] ?? delete t[e];
      ((o = X({}, e, { params: d(t) })), (a.params = d(a.params)));
    }
    let s = t.resolve(o, a),
      l = e.hash || ``;
    s.params = u(f(s.params));
    let p = Lc(r, X({}, e, { hash: Oc(l), path: s.path })),
      m = i.createHref(p);
    return X(
      { fullPath: p, hash: l, query: r === al ? ol(e.query) : e.query || {} },
      s,
      { redirectedFrom: void 0, href: m }
    );
  }
  function v(e) {
    return typeof e == `string` ? Ic(n, e, c.value.path) : X({}, e);
  }
  function y(e, t) {
    if (l !== e) return ic(8, { from: t, to: e });
  }
  function b(e) {
    return C(e);
  }
  function x(e) {
    return b(X(v(e), { replace: !0 }));
  }
  function S(e, t) {
    let n = e.matched[e.matched.length - 1];
    if (n && n.redirect) {
      let { redirect: r } = n,
        i = typeof r == `function` ? r(e, t) : r;
      return (
        typeof i == `string` &&
          ((i = i.includes(`?`) || i.includes(`#`) ? (i = v(i)) : { path: i }),
          (i.params = {})),
        X(
          {
            query: e.query,
            hash: e.hash,
            params: i.path == null ? e.params : {}
          },
          i
        )
      );
    }
  }
  function C(e, t) {
    let n = (l = _(e)),
      i = c.value,
      a = e.state,
      o = e.force,
      s = e.replace === !0,
      u = S(n, i);
    if (u)
      return C(
        X(v(u), {
          state: typeof u == `object` ? X({}, a, u.state) : a,
          force: o,
          replace: s
        }),
        t || n
      );
    let d = n;
    d.redirectedFrom = t;
    let f;
    return (
      !o && zc(r, i, n) && ((f = ic(16, { to: d, from: i })), ce(i, i, !0, !1)),
      (f ? Promise.resolve(f) : T(d, i))
        .catch(e => (ac(e) ? (ac(e, 2) ? e : se(e)) : oe(e, d, i)))
        .then(e => {
          if (e) {
            if (ac(e, 2))
              return C(
                X({ replace: s }, v(e.to), {
                  state: typeof e.to == `object` ? X({}, a, e.to.state) : a,
                  force: o
                }),
                t || d
              );
          } else e = te(d, i, !0, s, a);
          return (E(d, i, e), e);
        })
    );
  }
  function w(e, t) {
    let n = y(e, t);
    return n ? Promise.reject(n) : Promise.resolve();
  }
  function ee(e) {
    let t = de.values().next().value;
    return t && typeof t.runWithContext == `function`
      ? t.runWithContext(e)
      : e();
  }
  function T(e, t) {
    let n,
      [r, i, s] = ul(e, t);
    n = ll(r.reverse(), `beforeRouteLeave`, e, t);
    for (let i of r)
      i.leaveGuards.forEach(r => {
        n.push(cl(r, e, t));
      });
    let c = w.bind(null, e, t);
    return (
      n.push(c),
      k(n)
        .then(() => {
          n = [];
          for (let r of a.list()) n.push(cl(r, e, t));
          return (n.push(c), k(n));
        })
        .then(() => {
          n = ll(i, `beforeRouteUpdate`, e, t);
          for (let r of i)
            r.updateGuards.forEach(r => {
              n.push(cl(r, e, t));
            });
          return (n.push(c), k(n));
        })
        .then(() => {
          n = [];
          for (let r of s)
            if (r.beforeEnter)
              if (tc(r.beforeEnter))
                for (let i of r.beforeEnter) n.push(cl(i, e, t));
              else n.push(cl(r.beforeEnter, e, t));
          return (n.push(c), k(n));
        })
        .then(
          () => (
            e.matched.forEach(e => (e.enterCallbacks = {})),
            (n = ll(s, `beforeRouteEnter`, e, t, ee)),
            n.push(c),
            k(n)
          )
        )
        .then(() => {
          n = [];
          for (let r of o.list()) n.push(cl(r, e, t));
          return (n.push(c), k(n));
        })
        .catch(e => (ac(e, 8) ? e : Promise.reject(e)))
    );
  }
  function E(e, t, n) {
    s.list().forEach(r => ee(() => r(e, t, n)));
  }
  function te(e, t, n, r, a) {
    let o = y(e, t);
    if (o) return o;
    let s = t === Gc,
      l = Xs ? history.state : {};
    (n &&
      (r || s
        ? i.replace(e.fullPath, X({ scroll: s && l && l.scroll }, a))
        : i.push(e.fullPath, a)),
      (c.value = e),
      ce(e, t, n, s),
      se());
  }
  let ne;
  function D() {
    ne ||= i.listen((e, t, n) => {
      if (!fe.listening) return;
      let r = _(e),
        a = S(r, fe.currentRoute.value);
      if (a) {
        C(X(a, { replace: !0, force: !0 }), r).catch(ec);
        return;
      }
      l = r;
      let o = c.value;
      (Xs && el(Qc(o.fullPath, n.delta), Xc()),
        T(r, o)
          .catch(e =>
            ac(e, 12)
              ? e
              : ac(e, 2)
                ? (C(X(v(e.to), { force: !0 }), r)
                    .then(e => {
                      ac(e, 20) && !n.delta && n.type === `pop` && i.go(-1, !1);
                    })
                    .catch(ec),
                  Promise.reject())
                : (n.delta && i.go(-n.delta, !1), oe(e, r, o))
          )
          .then(e => {
            ((e ||= te(r, o, !1)),
              e &&
                (n.delta && !ac(e, 8)
                  ? i.go(-n.delta, !1)
                  : n.type === `pop` && ac(e, 20) && i.go(-1, !1)),
              E(r, o, e));
          })
          .catch(ec));
    });
  }
  let re = sl(),
    ie = sl(),
    ae;
  function oe(e, t, n) {
    se(e);
    let r = ie.list();
    return (
      r.length ? r.forEach(r => r(e, t, n)) : console.error(e),
      Promise.reject(e)
    );
  }
  function O() {
    return ae && c.value !== Gc
      ? Promise.resolve()
      : new Promise((e, t) => {
          re.add([e, t]);
        });
  }
  function se(e) {
    return (
      ae ||
        ((ae = !e),
        D(),
        re.list().forEach(([t, n]) => (e ? n(e) : t())),
        re.reset()),
      e
    );
  }
  function ce(t, n, r, i) {
    let { scrollBehavior: a } = e;
    if (!Xs || !a) return Promise.resolve();
    let o =
      (!r && tl(Qc(t.fullPath, 0))) ||
      ((i || !r) && history.state && history.state.scroll) ||
      null;
    return En()
      .then(() => a(t, n, o))
      .then(e => e && Zc(e))
      .catch(e => oe(e, t, n));
  }
  let le = e => i.go(e),
    ue,
    de = new Set(),
    fe = {
      currentRoute: c,
      listening: !0,
      addRoute: p,
      removeRoute: m,
      clearRoutes: t.clearRoutes,
      hasRoute: g,
      getRoutes: h,
      resolve: _,
      options: e,
      push: b,
      replace: x,
      go: le,
      back: () => le(-1),
      forward: () => le(1),
      beforeEach: a.add,
      beforeResolve: o.add,
      afterEach: s.add,
      onError: ie.add,
      isReady: O,
      install(e) {
        (e.component(`RouterLink`, Bl),
          e.component(`RouterView`, ql),
          (e.config.globalProperties.$router = fe),
          Object.defineProperty(e.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => L(c)
          }),
          Xs &&
            !ue &&
            c.value === Gc &&
            ((ue = !0), b(i.location).catch(e => {})));
        let t = {};
        for (let e in Gc)
          Object.defineProperty(t, e, {
            get: () => c.value[e],
            enumerable: !0
          });
        (e.provide(cc, fe), e.provide(lc, Rt(t)), e.provide(uc, c));
        let n = e.unmount;
        (de.add(e),
          (e.unmount = function () {
            (de.delete(e),
              de.size < 1 &&
                ((l = Gc),
                ne && ne(),
                (ne = null),
                (c.value = Gc),
                (ue = !1),
                (ae = !1)),
              n());
          }));
      }
    };
  function k(e) {
    return e.reduce((e, t) => e.then(() => ee(t)), Promise.resolve());
  }
  return fe;
}
var Yl = `modulepreload`,
  Xl = function (e) {
    return `/design-system/` + e;
  },
  Zl = {},
  Z = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map(e =>
            Promise.resolve(e).then(
              e => ({ status: `fulfilled`, value: e }),
              e => ({ status: `rejected`, reason: e })
            )
          )
        );
      }
      r = o(
        t.map(t => {
          if (((t = Xl(t, n)), t in Zl)) return;
          Zl[t] = !0;
          let r = t.endsWith(`.css`),
            i = r ? `[rel="stylesheet"]` : ``;
          if (n)
            for (let n = e.length - 1; n >= 0; n--) {
              let i = e[n];
              if (i.href === t && (!r || i.rel === `stylesheet`)) return;
            }
          else if (document.querySelector(`link[href="${t}"]${i}`)) return;
          let o = document.createElement(`link`);
          if (
            ((o.rel = r ? `stylesheet` : Yl),
            r || (o.as = `script`),
            (o.crossOrigin = ``),
            (o.href = t),
            a && o.setAttribute(`nonce`, a),
            document.head.appendChild(o),
            r)
          )
            return new Promise((e, n) => {
              (o.addEventListener(`load`, e),
                o.addEventListener(`error`, () =>
                  n(Error(`Unable to preload CSS for ${t}`))
                ));
            });
        })
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then(t => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  Ql = JSON.parse(`{}`),
  $l = Object.fromEntries([
    [
      `/`,
      {
        loader: () => Z(() => import(`./README-C4Fwi4pl.js`), []),
        meta: { title: `Design System` }
      }
    ],
    [
      `/VUEPRESS_UPGRADE.html`,
      {
        loader: () => Z(() => import(`./VUEPRESS_UPGRADE-DBCfrA0Q.js`), []),
        meta: { title: `Playbook: обновление VuePress до 2 stable` }
      }
    ],
    [
      `/guide/`,
      {
        loader: () => Z(() => import(`./README-_CdPnJBY.js`), []),
        meta: { title: `Introduction` }
      }
    ],
    [
      `/guide/colors.html`,
      {
        loader: () => Z(() => import(`./colors-rbzAhlHz.js`), []),
        meta: { title: `Цвета` }
      }
    ],
    [
      `/guide/getting-started.html`,
      {
        loader: () => Z(() => import(`./getting-started-BifkPC2g.js`), []),
        meta: { title: `Getting Started` }
      }
    ],
    [
      `/guide/shadows.html`,
      {
        loader: () => Z(() => import(`./shadows-D6_RshfH.js`), []),
        meta: { title: `Тени` }
      }
    ],
    [
      `/guide/theming.html`,
      {
        loader: () => Z(() => import(`./theming-C9nfKQzU.js`), []),
        meta: { title: `Темизация` }
      }
    ],
    [
      `/guide/tokens.html`,
      {
        loader: () => Z(() => import(`./tokens-h9lKBXj-.js`), []),
        meta: { title: `Токены` }
      }
    ],
    [
      `/components/Layout.html`,
      {
        loader: () => Z(() => import(`./Layout-BT8rM-or.js`), []),
        meta: { title: `Layout 🧱` }
      }
    ],
    [
      `/components/QAffix.html`,
      {
        loader: () => Z(() => import(`./QAffix-CXC6Ipef.js`), []),
        meta: { title: `QAffix` }
      }
    ],
    [
      `/components/QAlert.html`,
      {
        loader: () => Z(() => import(`./QAlert-BBD41BHa.js`), []),
        meta: { title: `QAlert` }
      }
    ],
    [
      `/components/QAnchor.html`,
      {
        loader: () => Z(() => import(`./QAnchor-DWRiBMq8.js`), []),
        meta: { title: `QAnchor` }
      }
    ],
    [
      `/components/QAutoComplete.html`,
      {
        loader: () => Z(() => import(`./QAutoComplete-Thp3JKi8.js`), []),
        meta: { title: `QAutoComplete` }
      }
    ],
    [
      `/components/QAvatar.html`,
      {
        loader: () => Z(() => import(`./QAvatar-p1bkvXwE.js`), []),
        meta: { title: `QAvatar` }
      }
    ],
    [
      `/components/QBackTop.html`,
      {
        loader: () => Z(() => import(`./QBackTop-DmKdpoa1.js`), []),
        meta: { title: `QBackTop` }
      }
    ],
    [
      `/components/QBadge.html`,
      {
        loader: () => Z(() => import(`./QBadge-qVQBr1aC.js`), []),
        meta: { title: `QBadge` }
      }
    ],
    [
      `/components/QBreadcrumbs.html`,
      {
        loader: () => Z(() => import(`./QBreadcrumbs-DR2dTUiI.js`), []),
        meta: { title: `QBreadcrumbs 🍞` }
      }
    ],
    [
      `/components/QButton.html`,
      {
        loader: () => Z(() => import(`./QButton-BRpzknfe.js`), []),
        meta: { title: `QButton 🆗` }
      }
    ],
    [
      `/components/QCalendar.html`,
      {
        loader: () => Z(() => import(`./QCalendar-VLkC2zlP.js`), []),
        meta: { title: `QCalendar` }
      }
    ],
    [
      `/components/QCard.html`,
      {
        loader: () => Z(() => import(`./QCard-VhQ_nkG1.js`), []),
        meta: { title: `QCard` }
      }
    ],
    [
      `/components/QCarousel.html`,
      {
        loader: () => Z(() => import(`./QCarousel-BuSFQzTf.js`), []),
        meta: { title: `QCarousel` }
      }
    ],
    [
      `/components/QCascader.html`,
      {
        loader: () => Z(() => import(`./QCascader-BsRldrRv.js`), []),
        meta: { title: `QCascader 🪜` }
      }
    ],
    [
      `/components/QCheckbox.html`,
      {
        loader: () => Z(() => import(`./QCheckbox-CX8q-_L7.js`), []),
        meta: { title: `QCheckbox ✔️` }
      }
    ],
    [
      `/components/QCheckboxGroup.html`,
      {
        loader: () => Z(() => import(`./QCheckboxGroup-l7Ykl7im.js`), []),
        meta: { title: `QCheckboxGroup ✔️✔️✔️` }
      }
    ],
    [
      `/components/QCollapse.html`,
      {
        loader: () => Z(() => import(`./QCollapse-h6H8ubmb.js`), []),
        meta: { title: `QCollapse 🪗` }
      }
    ],
    [
      `/components/QColorpicker.html`,
      {
        loader: () => Z(() => import(`./QColorpicker-dgN7qKO-.js`), []),
        meta: { title: `QColorpicker 🎨` }
      }
    ],
    [
      `/components/QContextMenu.html`,
      {
        loader: () => Z(() => import(`./QContextMenu-B9UsQcrM.js`), []),
        meta: { title: `QContextMenu 📎` }
      }
    ],
    [
      `/components/QDatepicker.html`,
      {
        loader: () => Z(() => import(`./QDatepicker-63M0p9cm.js`), []),
        meta: { title: `QDatepicker 📅` }
      }
    ],
    [
      `/components/QDescriptions.html`,
      {
        loader: () => Z(() => import(`./QDescriptions-D_6cWmJq.js`), []),
        meta: { title: `QDescriptions` }
      }
    ],
    [
      `/components/QDialog.html`,
      {
        loader: () => Z(() => import(`./QDialog-D0NRy3pn.js`), []),
        meta: { title: `QDialog` }
      }
    ],
    [
      `/components/QDivider.html`,
      {
        loader: () => Z(() => import(`./QDivider-6wOY6c58.js`), []),
        meta: { title: `QDivider` }
      }
    ],
    [
      `/components/QDrawer.html`,
      {
        loader: () => Z(() => import(`./QDrawer-yjJGvCwx.js`), []),
        meta: { title: `QDrawer` }
      }
    ],
    [
      `/components/QDropdown.html`,
      {
        loader: () => Z(() => import(`./QDropdown-CwuirDrw.js`), []),
        meta: { title: `QDropdown` }
      }
    ],
    [
      `/components/QEmpty.html`,
      {
        loader: () => Z(() => import(`./QEmpty-DhJvL-b8.js`), []),
        meta: { title: `QEmpty` }
      }
    ],
    [
      `/components/QForm.html`,
      {
        loader: () => Z(() => import(`./QForm-BFmup3nn.js`), []),
        meta: { title: `QForm ✉️` }
      }
    ],
    [
      `/components/QIcon.html`,
      {
        loader: () => Z(() => import(`./QIcon-BhZkQqWN.js`), []),
        meta: { title: `QIcon` }
      }
    ],
    [
      `/components/QImage.html`,
      {
        loader: () => Z(() => import(`./QImage-wjWKRwI5.js`), []),
        meta: { title: `QImage` }
      }
    ],
    [
      `/components/QInput.html`,
      {
        loader: () => Z(() => import(`./QInput-CvnhPiNN.js`), []),
        meta: { title: `QInput ⌨️` }
      }
    ],
    [
      `/components/QInputNumber.html`,
      {
        loader: () => Z(() => import(`./QInputNumber-Fq-rqYOF.js`), []),
        meta: { title: `QInputNumber 🔢` }
      }
    ],
    [
      `/components/QLayout.html`,
      {
        loader: () => Z(() => import(`./QLayout-CHnFllnT.js`), []),
        meta: { title: `QLayout` }
      }
    ],
    [
      `/components/QLink.html`,
      {
        loader: () => Z(() => import(`./QLink-BRvWTPHu.js`), []),
        meta: { title: `QLink` }
      }
    ],
    [
      `/components/QList.html`,
      {
        loader: () => Z(() => import(`./QList-CCfLgwcF.js`), []),
        meta: { title: `QList` }
      }
    ],
    [
      `/components/QLoading.html`,
      {
        loader: () => Z(() => import(`./QLoading-CPAtXIAo.js`), []),
        meta: { title: `QLoading` }
      }
    ],
    [
      `/components/QMentions.html`,
      {
        loader: () => Z(() => import(`./QMentions-CBwIM8R6.js`), []),
        meta: { title: `QMentions` }
      }
    ],
    [
      `/components/QMenu.html`,
      {
        loader: () => Z(() => import(`./QMenu-B738FK4K.js`), []),
        meta: { title: `QMenu` }
      }
    ],
    [
      `/components/QMessageBox.html`,
      {
        loader: () => Z(() => import(`./QMessageBox-qCCta44g.js`), []),
        meta: { title: `QMessageBox` }
      }
    ],
    [
      `/components/QNotification.html`,
      {
        loader: () => Z(() => import(`./QNotification-Dci8xexD.js`), []),
        meta: { title: `QNotification` }
      }
    ],
    [
      `/components/QPageHeader.html`,
      {
        loader: () => Z(() => import(`./QPageHeader-fXkGKqMA.js`), []),
        meta: { title: `QPageHeader` }
      }
    ],
    [
      `/components/QPagination.html`,
      {
        loader: () => Z(() => import(`./QPagination-3WC4uuGA.js`), []),
        meta: { title: `QPagination 📖` }
      }
    ],
    [
      `/components/QParagraph.html`,
      {
        loader: () => Z(() => import(`./QParagraph-g7tTNk1x.js`), []),
        meta: { title: `QParagraph` }
      }
    ],
    [
      `/components/QPopover.html`,
      {
        loader: () => Z(() => import(`./QPopover-nPtKzHuh.js`), []),
        meta: { title: `QPopover 💬` }
      }
    ],
    [
      `/components/QProgress.html`,
      {
        loader: () => Z(() => import(`./QProgress-CvEJsrHb.js`), []),
        meta: { title: `QProgress` }
      }
    ],
    [
      `/components/QProgressIndicatior.html`,
      {
        loader: () => Z(() => import(`./QProgressIndicatior-CjAwWU5o.js`), []),
        meta: { title: `QProgressIndicatior` }
      }
    ],
    [
      `/components/QRadio.html`,
      {
        loader: () => Z(() => import(`./QRadio-alrTooiB.js`), []),
        meta: { title: `QRadio 📻` }
      }
    ],
    [
      `/components/QRadioGroup.html`,
      {
        loader: () => Z(() => import(`./QRadioGroup-CsQxkeN-.js`), []),
        meta: { title: `QRadioGroup` }
      }
    ],
    [
      `/components/QRate.html`,
      {
        loader: () => Z(() => import(`./QRate-BiQrvsbH.js`), []),
        meta: { title: `QRate` }
      }
    ],
    [
      `/components/QResult.html`,
      {
        loader: () => Z(() => import(`./QResult-1HI4t30y.js`), []),
        meta: { title: `QResult` }
      }
    ],
    [
      `/components/QScrollbar.html`,
      {
        loader: () => Z(() => import(`./QScrollbar-Cqq157u5.js`), []),
        meta: { title: `QScrollbar 📜` }
      }
    ],
    [
      `/components/QSegmented.html`,
      {
        loader: () => Z(() => import(`./QSegmented-d7yaVbPz.js`), []),
        meta: { title: `QSegmented` }
      }
    ],
    [
      `/components/QSelect.html`,
      {
        loader: () => Z(() => import(`./QSelect-D4vJy2OR.js`), []),
        meta: { title: `QSelect 🔽` }
      }
    ],
    [
      `/components/QSkeleton.html`,
      {
        loader: () => Z(() => import(`./QSkeleton-DrGE4w9t.js`), []),
        meta: { title: `QSkeleton` }
      }
    ],
    [
      `/components/QSlider.html`,
      {
        loader: () => Z(() => import(`./QSlider-C1rUBXi7.js`), []),
        meta: { title: `QSlider 🎚️` }
      }
    ],
    [
      `/components/QSpace.html`,
      {
        loader: () => Z(() => import(`./QSpace-DDrVD0GK.js`), []),
        meta: { title: `QSpace` }
      }
    ],
    [
      `/components/QStatistic.html`,
      {
        loader: () => Z(() => import(`./QStatistic-D7XaWRXa.js`), []),
        meta: { title: `QStatistic` }
      }
    ],
    [
      `/components/QSteps.html`,
      {
        loader: () => Z(() => import(`./QSteps-DU8SuGo9.js`), []),
        meta: { title: `QSteps` }
      }
    ],
    [
      `/components/QSwitch.html`,
      {
        loader: () => Z(() => import(`./QSwitch-COalDyG9.js`), []),
        meta: { title: `QSwitch 🔛` }
      }
    ],
    [
      `/components/QTable.html`,
      {
        loader: () => Z(() => import(`./QTable-Bq1l3_ZI.js`), []),
        meta: { title: `QTable` }
      }
    ],
    [
      `/components/QTabs.html`,
      {
        loader: () => Z(() => import(`./QTabs-Cq7pjx_9.js`), []),
        meta: { title: `QTabs 🗂️` }
      }
    ],
    [
      `/components/QTag.html`,
      {
        loader: () => Z(() => import(`./QTag-Col5XAYm.js`), []),
        meta: { title: `QTag #️⃣` }
      }
    ],
    [
      `/components/QText.html`,
      {
        loader: () => Z(() => import(`./QText-SBHbkXiL.js`), []),
        meta: { title: `QText` }
      }
    ],
    [
      `/components/QTextarea.html`,
      {
        loader: () => Z(() => import(`./QTextarea-C3nuCk0i.js`), []),
        meta: { title: `QTextarea 📝` }
      }
    ],
    [
      `/components/QTimePicker.html`,
      {
        loader: () => Z(() => import(`./QTimePicker-CZT-vW8F.js`), []),
        meta: { title: `QTimePicker` }
      }
    ],
    [
      `/components/QTimeline.html`,
      {
        loader: () => Z(() => import(`./QTimeline-BtKf-cWy.js`), []),
        meta: { title: `QTimeline` }
      }
    ],
    [
      `/components/QTitle.html`,
      {
        loader: () => Z(() => import(`./QTitle-DxXHjlkY.js`), []),
        meta: { title: `QTitle` }
      }
    ],
    [
      `/components/QTooltip.html`,
      {
        loader: () => Z(() => import(`./QTooltip-Dbhab9pA.js`), []),
        meta: { title: `QTooltip` }
      }
    ],
    [
      `/components/QTour.html`,
      {
        loader: () => Z(() => import(`./QTour-DUOCsKSg.js`), []),
        meta: { title: `QTour` }
      }
    ],
    [
      `/components/QTransfer.html`,
      {
        loader: () => Z(() => import(`./QTransfer-CL41r6rb.js`), []),
        meta: { title: `QTransfer` }
      }
    ],
    [
      `/components/QTree.html`,
      {
        loader: () => Z(() => import(`./QTree-CehgPB7q.js`), []),
        meta: { title: `QTree` }
      }
    ],
    [
      `/components/QTreeSelect.html`,
      {
        loader: () => Z(() => import(`./QTreeSelect-DPH-cpBJ.js`), []),
        meta: { title: `QTreeSelect` }
      }
    ],
    [
      `/components/QUpload.html`,
      {
        loader: () => Z(() => import(`./QUpload-BiJGUEFA.js`), []),
        meta: { title: `QUpload 📤` }
      }
    ],
    [
      `/components/QWatermark.html`,
      {
        loader: () => Z(() => import(`./QWatermark-b2JgCwuT.js`), []),
        meta: { title: `QWatermark` }
      }
    ],
    [
      `/404.html`,
      {
        loader: () => Z(() => import(`./404.html-CfbeV7C_.js`), []),
        meta: { title: `` }
      }
    ]
  ]),
  eu = Symbol(``),
  tu = () => {
    let e = Vn(eu);
    if (!e) throw Error(`useClientData() is called without provider.`);
    return e;
  },
  nu = () => tu().pageComponent,
  ru = () => tu().pageData,
  iu = () => tu().pageFrontmatter,
  au = () => tu().pageHead,
  ou = () => tu().pageLang,
  su = () => tu().pageLayout,
  cu = () => tu().routeLocale,
  lu = () => tu().routes,
  uu = () => tu().siteData,
  du = () => tu().siteLocaleData,
  fu = new Set(),
  pu = Symbol(``),
  mu = Jt(Ql),
  hu = Jt($l),
  gu = (e, t) => {
    let n = Rs(e, t);
    if (hu.value[n]) return n;
    let r = encodeURI(n);
    return hu.value[r] ? r : mu.value[n] || mu.value[r] || n;
  },
  _u = (e, t) => {
    let { pathname: n, hashAndQueries: r } = Vs(e),
      i = gu(n, t),
      a = i + r;
    return hu.value[i]
      ? { ...hu.value[i], path: a, notFound: !1 }
      : { ...hu.value[`/404.html`], path: a, notFound: !0 };
  },
  vu = (e, t) => {
    let { pathname: n, hashAndQueries: r } = Vs(e);
    return gu(n, t) + r;
  },
  yu = e => {
    if (
      !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
      !e.defaultPrevented &&
      !(e.button !== void 0 && e.button !== 0) &&
      !(
        e.currentTarget &&
        e.currentTarget.getAttribute(`target`)?.match(/\b_blank\b/i)
      )
    )
      return (e.preventDefault(), !0);
  },
  bu = z({
    name: `RouteLink`,
    props: {
      to: { type: String, required: !0 },
      active: Boolean,
      activeClass: { type: String, default: `route-link-active` }
    },
    slots: Object,
    setup(e, { slots: t }) {
      let n = dc(),
        r = fc(),
        i = J(() =>
          e.to.startsWith(`#`) || e.to.startsWith(`?`)
            ? e.to
            : `/design-system/${vu(e.to, r.path).substring(1)}`
        );
      return () =>
        Y(
          `a`,
          {
            class: [`route-link`, { [e.activeClass]: e.active }],
            href: i.value,
            onClick: (t = {}) => {
              yu(t) && n.push(e.to).catch();
            }
          },
          t.default()
        );
    }
  }),
  xu = z({
    name: `AutoLink`,
    props: { config: { type: Object, required: !0 } },
    slots: Object,
    setup(e, { slots: t }) {
      let n = an(e, `config`),
        r = fc(),
        i = uu(),
        a = J(() => Ps(n.value.link)),
        o = J(() => n.value.target || (a.value ? `_blank` : void 0)),
        s = J(() => o.value === `_blank`),
        c = J(() => !a.value && !s.value),
        l = J(() => n.value.rel || (s.value ? `noopener noreferrer` : null)),
        u = J(() => n.value.ariaLabel ?? n.value.text),
        d = J(() => {
          if (n.value.exact) return !1;
          let e = Object.keys(i.value.locales);
          return e.length
            ? e.every(e => e !== n.value.link)
            : n.value.link !== `/`;
        }),
        f = J(() =>
          c.value
            ? n.value.activeMatch
              ? (n.value.activeMatch instanceof RegExp
                  ? n.value.activeMatch
                  : new RegExp(n.value.activeMatch, `u`)
                ).test(r.path)
              : d.value
                ? r.path.startsWith(n.value.link)
                : r.path === n.value.link
            : !1
        );
      return () => {
        let { before: e, after: r, default: i } = t,
          a = i?.(n.value) ?? [e?.(n.value), n.value.text, r?.(n.value)];
        return c.value
          ? Y(
              bu,
              {
                class: `auto-link`,
                to: n.value.link,
                active: f.value,
                'aria-label': u.value
              },
              () => a
            )
          : Y(
              `a`,
              {
                class: `auto-link external-link`,
                href: n.value.link,
                'aria-label': u.value,
                rel: l.value,
                target: o.value
              },
              a
            );
      };
    }
  }),
  Su = z({
    name: `ClientOnly`,
    setup(e, t) {
      let n = I(!1);
      return (
        zr(() => {
          n.value = !0;
        }),
        () => (n.value ? t.slots.default?.() : null)
      );
    }
  }),
  Cu = e => {
    fu.forEach(t => t(e));
  },
  wu = z({
    name: `Content`,
    props: { path: { type: String, required: !1, default: `` } },
    setup(e) {
      let t = nu(),
        n = J(() => {
          if (!e.path) return t.value;
          let n = _u(e.path);
          return kr(async () => n.loader().then(e => e.default));
        });
      return () =>
        Y(n.value, {
          onVnodeMounted: () => {
            Cu(`mounted`);
          },
          onVnodeUpdated: () => {
            Cu(`updated`);
          },
          onVnodeBeforeUnmount: () => {
            Cu(`beforeUnmount`);
          }
        });
    }
  }),
  Tu = `Layout`,
  Eu = Lt({
    resolveLayouts: e => e.reduce((e, t) => ({ ...e, ...t.layouts }), {}),
    resolvePageHead: (e, t, n) => {
      let r = Ys(t.description) ? t.description : n.description;
      return Gs([
        ...(Array.isArray(t.head) ? t.head : []),
        ...n.head,
        [`title`, {}, e],
        [`meta`, { name: `description`, content: r }]
      ]);
    },
    resolvePageHeadTitle: (e, t) =>
      [e.title, t.title].filter(e => !!e).join(` | `),
    resolvePageLang: (e, t) => e.lang || t.lang || `en-US`,
    resolvePageLayout: (e, t) => {
      let n = Ys(e.frontmatter.layout) ? e.frontmatter.layout : Tu;
      if (!t[n]) throw Error(`[vuepress] Cannot resolve layout: ${n}`);
      return t[n];
    },
    resolveRouteLocale: (e, t) => zs(e, decodeURI(t)),
    resolveSiteLocaleData: ({ base: e, locales: t, ...n }, r) => ({
      ...n,
      ...t[r],
      head: [...(t[r]?.head ?? []), ...n.head]
    })
  }),
  Du = (e = {}) => e,
  Ou = e => (Fs(e) ? e : `/design-system/${qs(e)}`);
(({
  id: `INTERNAL`,
  label: `Internal`,
  keys: [`layouts`, `routes`, `redirects`]
}).id,
  { id: `SITE`, label: `Site`, keys: [`siteData`, `siteLocaleData`] }.id,
  { id: `ROUTE`, label: `Route`, keys: [`routePath`, `routeLocale`] }.id,
  {
    id: `PAGE`,
    label: `Page`,
    keys: [
      `pageData`,
      `pageFrontmatter`,
      `pageLang`,
      `pageHead`,
      `pageHeadTitle`,
      `pageLayout`,
      `pageComponent`
    ]
  }.id);
function ku(e) {
  return Ee() ? (De(e), !0) : !1;
}
function Au(e) {
  return typeof e == `function` ? e() : L(e);
}
var ju = typeof window < `u` && typeof document < `u`;
typeof WorkerGlobalScope < `u` && globalThis instanceof WorkerGlobalScope;
var Mu = Object.prototype.toString,
  Nu = e => Mu.call(e) === `[object Object]`,
  Pu = () => {};
function Fu(e, t) {
  function n(...n) {
    return new Promise((r, i) => {
      Promise.resolve(
        e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })
      )
        .then(r)
        .catch(i);
    });
  }
  return n;
}
var Iu = e => e();
function Lu(e, t = {}) {
  let n,
    r,
    i = Pu,
    a = e => {
      (clearTimeout(e), i(), (i = Pu));
    };
  return o => {
    let s = Au(e),
      c = Au(t.maxWait);
    return (
      n && a(n),
      s <= 0 || (c !== void 0 && c <= 0)
        ? ((r &&= (a(r), null)), Promise.resolve(o()))
        : new Promise((e, l) => {
            ((i = t.rejectOnCancel ? l : e),
              c &&
                !r &&
                (r = setTimeout(() => {
                  (n && a(n), (r = null), e(o()));
                }, c)),
              (n = setTimeout(() => {
                (r && a(r), (r = null), e(o()));
              }, s)));
          })
    );
  };
}
function Ru(e = Iu) {
  let t = I(!0);
  function n() {
    t.value = !1;
  }
  function r() {
    t.value = !0;
  }
  return {
    isActive: zt(t),
    pause: n,
    resume: r,
    eventFilter: (...n) => {
      t.value && e(...n);
    }
  };
}
function zu(e) {
  let t;
  function n() {
    return ((t ||= e()), t);
  }
  return (
    (n.reset = async () => {
      let e = t;
      ((t = void 0), e && (await e));
    }),
    n
  );
}
function Bu(e) {
  return e || eo();
}
function Vu(e, t = 200, n = {}) {
  return Fu(Lu(t, n), e);
}
function Hu(e, t, n = {}) {
  let { eventFilter: r = Iu, ...i } = n;
  return Gn(e, Fu(r, t), i);
}
function Uu(e, t, n = {}) {
  let { eventFilter: r, ...i } = n,
    { eventFilter: a, pause: o, resume: s, isActive: c } = Ru(r);
  return {
    stop: Hu(e, t, { ...i, eventFilter: a }),
    pause: o,
    resume: s,
    isActive: c
  };
}
function Wu(e, t = !0, n) {
  Bu() ? zr(e, n) : t ? e() : En(e);
}
function Gu(e, t, n = {}) {
  let { immediate: r = !0 } = n,
    i = I(!1),
    a = null;
  function o() {
    a &&= (clearTimeout(a), null);
  }
  function s() {
    ((i.value = !1), o());
  }
  function c(...n) {
    (o(),
      (i.value = !0),
      (a = setTimeout(() => {
        ((i.value = !1), (a = null), e(...n));
      }, Au(t))));
  }
  return (
    r && ((i.value = !0), ju && c()),
    ku(s),
    { isPending: zt(i), start: c, stop: s }
  );
}
function Ku(e = !1, t = {}) {
  let { truthyValue: n = !0, falsyValue: r = !1 } = t,
    i = F(e),
    a = I(e);
  function o(e) {
    if (arguments.length) return ((a.value = e), a.value);
    {
      let e = Au(n);
      return ((a.value = a.value === e ? Au(r) : e), a.value);
    }
  }
  return i ? o : [a, o];
}
function qu(e) {
  let t = Au(e);
  return t?.$el ?? t;
}
var Ju = ju ? window : void 0;
ju && window.document;
var Yu = ju ? window.navigator : void 0;
ju && window.location;
function Xu(...e) {
  let t, n, r, i;
  if (
    (typeof e[0] == `string` || Array.isArray(e[0])
      ? (([n, r, i] = e), (t = Ju))
      : ([t, n, r, i] = e),
    !t)
  )
    return Pu;
  (Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]));
  let a = [],
    o = () => {
      (a.forEach(e => e()), (a.length = 0));
    },
    s = (e, t, n, r) => (
      e.addEventListener(t, n, r),
      () => e.removeEventListener(t, n, r)
    ),
    c = Gn(
      () => [qu(t), Au(i)],
      ([e, t]) => {
        if ((o(), !e)) return;
        let i = Nu(t) ? { ...t } : t;
        a.push(...n.flatMap(t => r.map(n => s(e, t, n, i))));
      },
      { immediate: !0, flush: `post` }
    ),
    l = () => {
      (c(), o());
    };
  return (ku(l), l);
}
function Zu() {
  let e = I(!1),
    t = eo();
  return (
    t &&
      zr(() => {
        e.value = !0;
      }, t),
    e
  );
}
function Qu(e) {
  let t = Zu();
  return J(() => (t.value, !!e()));
}
function $u(e, t = {}) {
  let { window: n = Ju } = t,
    r = Qu(() => n && `matchMedia` in n && typeof n.matchMedia == `function`),
    i,
    a = I(!1),
    o = e => {
      a.value = e.matches;
    },
    s = () => {
      i &&
        (`removeEventListener` in i
          ? i.removeEventListener(`change`, o)
          : i.removeListener(o));
    },
    c = Wn(() => {
      r.value &&
        (s(),
        (i = n.matchMedia(Au(e))),
        `addEventListener` in i
          ? i.addEventListener(`change`, o)
          : i.addListener(o),
        (a.value = i.matches));
    });
  return (
    ku(() => {
      (c(), s(), (i = void 0));
    }),
    a
  );
}
function ed(e, t = {}) {
  let { controls: n = !1, navigator: r = Yu } = t,
    i = Qu(() => r && `permissions` in r),
    a,
    o = typeof e == `string` ? { name: e } : e,
    s = I(),
    c = () => {
      a && (s.value = a.state);
    },
    l = zu(async () => {
      if (i.value) {
        if (!a)
          try {
            ((a = await r.permissions.query(o)), Xu(a, `change`, c), c());
          } catch {
            s.value = `prompt`;
          }
        return a;
      }
    });
  return (l(), n ? { state: s, isSupported: i, query: l } : s);
}
function td(e = {}) {
  let {
      navigator: t = Yu,
      read: n = !1,
      source: r,
      copiedDuring: i = 1500,
      legacy: a = !1
    } = e,
    o = Qu(() => t && `clipboard` in t),
    s = ed(`clipboard-read`),
    c = ed(`clipboard-write`),
    l = J(() => o.value || a),
    u = I(``),
    d = I(!1),
    f = Gu(() => (d.value = !1), i);
  function p() {
    o.value && _(s.value)
      ? t.clipboard.readText().then(e => {
          u.value = e;
        })
      : (u.value = g());
  }
  l.value && n && Xu([`copy`, `cut`], p);
  async function m(e = Au(r)) {
    l.value &&
      e != null &&
      (o.value && _(c.value) ? await t.clipboard.writeText(e) : h(e),
      (u.value = e),
      (d.value = !0),
      f.start());
  }
  function h(e) {
    let t = document.createElement(`textarea`);
    ((t.value = e ?? ``),
      (t.style.position = `absolute`),
      (t.style.opacity = `0`),
      document.body.appendChild(t),
      t.select(),
      document.execCommand(`copy`),
      t.remove());
  }
  function g() {
    return (
      (document == null ? void 0 : document.getSelection)
        ?.call(document)
        ?.toString() ?? ``
    );
  }
  function _(e) {
    return e === `granted` || e === `prompt`;
  }
  return { isSupported: l, text: u, copied: d, copy: m };
}
var nd =
    typeof globalThis < `u`
      ? globalThis
      : typeof window < `u`
        ? window
        : typeof global < `u`
          ? global
          : typeof self < `u`
            ? self
            : {},
  rd = `__vueuse_ssr_handlers__`,
  id = ad();
function ad() {
  return (rd in nd || (nd[rd] = nd[rd] || {}), nd[rd]);
}
function od(e, t) {
  return id[e] || t;
}
function sd(e) {
  return e == null
    ? `any`
    : e instanceof Set
      ? `set`
      : e instanceof Map
        ? `map`
        : e instanceof Date
          ? `date`
          : typeof e == `boolean`
            ? `boolean`
            : typeof e == `string`
              ? `string`
              : typeof e == `object`
                ? `object`
                : Number.isNaN(e)
                  ? `any`
                  : `number`;
}
var cd = {
    boolean: { read: e => e === `true`, write: e => String(e) },
    object: { read: e => JSON.parse(e), write: e => JSON.stringify(e) },
    number: { read: e => Number.parseFloat(e), write: e => String(e) },
    any: { read: e => e, write: e => String(e) },
    string: { read: e => e, write: e => String(e) },
    map: {
      read: e => new Map(JSON.parse(e)),
      write: e => JSON.stringify(Array.from(e.entries()))
    },
    set: {
      read: e => new Set(JSON.parse(e)),
      write: e => JSON.stringify(Array.from(e))
    },
    date: { read: e => new Date(e), write: e => e.toISOString() }
  },
  ld = `vueuse-storage`;
function ud(e, t, n, r = {}) {
  let {
      flush: i = `pre`,
      deep: a = !0,
      listenToStorageChanges: o = !0,
      writeDefaults: s = !0,
      mergeDefaults: c = !1,
      shallow: l,
      window: u = Ju,
      eventFilter: d,
      onError: f = e => {
        console.error(e);
      },
      initOnMounted: p
    } = r,
    m = (l ? Jt : I)(typeof t == `function` ? t() : t);
  if (!n)
    try {
      n = od(`getDefaultStorage`, () => Ju?.localStorage)();
    } catch (e) {
      f(e);
    }
  if (!n) return m;
  let h = Au(t),
    g = sd(h),
    _ = r.serializer ?? cd[g],
    { pause: v, resume: y } = Uu(m, () => x(m.value), {
      flush: i,
      deep: a,
      eventFilter: d
    });
  (u &&
    o &&
    Wu(() => {
      (Xu(u, `storage`, C), Xu(u, ld, w), p && C());
    }),
    p || C());
  function b(t, r) {
    u &&
      u.dispatchEvent(
        new CustomEvent(ld, {
          detail: { key: e, oldValue: t, newValue: r, storageArea: n }
        })
      );
  }
  function x(t) {
    try {
      let r = n.getItem(e);
      if (t == null) (b(r, null), n.removeItem(e));
      else {
        let i = _.write(t);
        r !== i && (n.setItem(e, i), b(r, i));
      }
    } catch (e) {
      f(e);
    }
  }
  function S(t) {
    let r = t ? t.newValue : n.getItem(e);
    if (r == null) return (s && h != null && n.setItem(e, _.write(h)), h);
    if (!t && c) {
      let e = _.read(r);
      return typeof c == `function`
        ? c(e, h)
        : g === `object` && !Array.isArray(e)
          ? { ...h, ...e }
          : e;
    } else if (typeof r != `string`) return r;
    else return _.read(r);
  }
  function C(t) {
    if (!(t && t.storageArea !== n)) {
      if (t && t.key == null) {
        m.value = h;
        return;
      }
      if (!(t && t.key !== e)) {
        v();
        try {
          t?.newValue !== _.write(m.value) && (m.value = S(t));
        } catch (e) {
          f(e);
        } finally {
          t ? En(y) : y();
        }
      }
    }
  }
  function w(e) {
    C(e.detail);
  }
  return m;
}
function dd(e) {
  return $u(`(prefers-color-scheme: dark)`, e);
}
function fd(e, t, n = {}) {
  let { window: r = Ju, ...i } = n,
    a,
    o = Qu(() => r && `ResizeObserver` in r),
    s = () => {
      a &&= (a.disconnect(), void 0);
    },
    c = Gn(
      J(() => (Array.isArray(e) ? e.map(e => qu(e)) : [qu(e)])),
      e => {
        if ((s(), o.value && r)) {
          a = new ResizeObserver(t);
          for (let t of e) t && a.observe(t, i);
        }
      },
      { immediate: !0, flush: `post` }
    ),
    l = () => {
      (s(), c());
    };
  return (ku(l), { isSupported: o, stop: l });
}
function pd(e, t = { width: 0, height: 0 }, n = {}) {
  let { window: r = Ju, box: i = `content-box` } = n,
    a = J(() => qu(e)?.namespaceURI?.includes(`svg`)),
    o = I(t.width),
    s = I(t.height),
    { stop: c } = fd(
      e,
      ([t]) => {
        let n =
          i === `border-box`
            ? t.borderBoxSize
            : i === `content-box`
              ? t.contentBoxSize
              : t.devicePixelContentBoxSize;
        if (r && a.value) {
          let t = qu(e);
          if (t) {
            let e = t.getBoundingClientRect();
            ((o.value = e.width), (s.value = e.height));
          }
        } else if (n) {
          let e = Array.isArray(n) ? n : [n];
          ((o.value = e.reduce((e, { inlineSize: t }) => e + t, 0)),
            (s.value = e.reduce((e, { blockSize: t }) => e + t, 0)));
        } else
          ((o.value = t.contentRect.width), (s.value = t.contentRect.height));
      },
      n
    );
  Wu(() => {
    let n = qu(e);
    n &&
      ((o.value = `offsetWidth` in n ? n.offsetWidth : t.width),
      (s.value = `offsetHeight` in n ? n.offsetHeight : t.height));
  });
  let l = Gn(
    () => qu(e),
    e => {
      ((o.value = e ? t.width : 0), (s.value = e ? t.height : 0));
    }
  );
  function u() {
    (c(), l());
  }
  return { width: o, height: s, stop: u };
}
function md(e = {}) {
  let { window: t = Ju, behavior: n = `auto` } = e;
  if (!t) return { x: I(0), y: I(0) };
  let r = I(t.scrollX),
    i = I(t.scrollY),
    a = J({
      get() {
        return r.value;
      },
      set(e) {
        scrollTo({ left: e, behavior: n });
      }
    }),
    o = J({
      get() {
        return i.value;
      },
      set(e) {
        scrollTo({ top: e, behavior: n });
      }
    });
  return (
    Xu(
      t,
      `scroll`,
      () => {
        ((r.value = t.scrollX), (i.value = t.scrollY));
      },
      { capture: !1, passive: !0 }
    ),
    { x: a, y: o }
  );
}
function hd(e = {}) {
  let {
      window: t = Ju,
      initialWidth: n = 1 / 0,
      initialHeight: r = 1 / 0,
      listenOrientation: i = !0,
      includeScrollbar: a = !0
    } = e,
    o = I(n),
    s = I(r),
    c = () => {
      t &&
        (a
          ? ((o.value = t.innerWidth), (s.value = t.innerHeight))
          : ((o.value = t.document.documentElement.clientWidth),
            (s.value = t.document.documentElement.clientHeight)));
    };
  return (
    c(),
    Wu(c),
    Xu(`resize`, c, { passive: !0 }),
    i && Gn($u(`(orientation: portrait)`), () => c()),
    { width: o, height: s }
  );
}
var gd = async (e, t) => {
    let { path: n, query: r } = e.currentRoute.value,
      { scrollBehavior: i } = e.options;
    ((e.options.scrollBehavior = void 0),
      await e.replace({ path: n, query: r, hash: t }),
      (e.options.scrollBehavior = i));
  },
  _d = ({
    headerLinkSelector: e,
    headerAnchorSelector: t,
    delay: n,
    offset: r = 5
  }) => {
    let i = dc();
    Xu(
      `scroll`,
      Vu(() => {
        let n = Math.max(
          window.scrollY,
          document.documentElement.scrollTop,
          document.body.scrollTop
        );
        if (Math.abs(n - 0) < r) {
          gd(i, ``);
          return;
        }
        let a = window.innerHeight + n,
          o = Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight
          ),
          s = Math.abs(o - a) < r,
          c = Array.from(document.querySelectorAll(e)),
          l = Array.from(document.querySelectorAll(t)).filter(e =>
            c.some(t => t.hash === e.hash)
          );
        for (let e = 0; e < l.length; e++) {
          let t = l[e],
            a = l[e + 1],
            o = n >= (t.parentElement?.offsetTop ?? 0) - r,
            c = !a || n < (a.parentElement?.offsetTop ?? 0) - r;
          if (!(o && c)) continue;
          let u = decodeURIComponent(i.currentRoute.value.hash),
            d = decodeURIComponent(t.hash);
          if (u === d) return;
          if (s) {
            for (let t = e + 1; t < l.length; t++)
              if (u === decodeURIComponent(l[t].hash)) return;
          }
          gd(i, d);
          return;
        }
      }, n)
    );
  },
  vd = t({ default: () => Cd }),
  yd = `a.sidebar-item`,
  bd = `.header-anchor`,
  xd = 300,
  Sd = 5,
  Cd = Du({
    setup() {
      _d({
        headerLinkSelector: yd,
        headerAnchorSelector: bd,
        delay: xd,
        offset: Sd
      });
    }
  }),
  wd = e => {
    let t = cu();
    return J(() => e[t.value] ?? {});
  },
  Td = () => {
    let e = lu();
    return J(() => Object.keys(e.value));
  },
  Ed = (e, t) => {
    let n = (t?._instance || eo())?.appContext.components;
    return n ? e in n || D(e) in n || ae(D(e)) in n : !1;
  },
  Dd = e => new Promise(t => setTimeout(t, e));
Array.isArray;
var Od = (e, t) => Ys(e) && e.startsWith(t),
  kd = e => Od(e, `/`),
  Ad = z({
    name: `BackToTop`,
    setup() {
      let e = iu(),
        t = wd({ '/': { backToTop: `Вернуться к началу` } }),
        n = Jt(),
        { height: r } = pd(n),
        { height: i } = hd(),
        { y: a } = md(),
        o = J(() => e.value.backToTop !== !1 && a.value > 100),
        s = J(() => (a.value / (r.value - i.value)) * 100);
      return (
        zr(() => {
          n.value = document.body;
        }),
        () =>
          Y(No, { name: `back-to-top` }, () =>
            o.value
              ? Y(
                  `button`,
                  {
                    type: `button`,
                    class: `vp-back-to-top-button`,
                    'aria-label': t.value.backToTop,
                    onClick: () => {
                      window.scrollTo({ top: 0, behavior: `smooth` });
                    }
                  },
                  [
                    Y(
                      `span`,
                      {
                        class: `vp-scroll-progress`,
                        role: `progressbar`,
                        'aria-labelledby': `loadinglabel`,
                        'aria-valuenow': s.value
                      },
                      Y(
                        `svg`,
                        Y(`circle`, {
                          cx: `26`,
                          cy: `26`,
                          r: `24`,
                          fill: `none`,
                          stroke: `currentColor`,
                          'stroke-width': `4`,
                          'stroke-dasharray': `${Math.PI * s.value * 0.48} ${Math.PI * (100 - s.value) * 0.48}`
                        })
                      )
                    ),
                    Y(`div`, { class: `back-to-top-icon` })
                  ]
                )
              : null
          )
      );
    }
  }),
  jd = t({ default: () => Md }),
  Md = Du({ rootComponents: [Ad] }),
  Nd = /\b(?:Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i,
  Pd = () =>
    typeof window < `u` &&
    window.navigator &&
    `userAgent` in window.navigator &&
    Nd.test(navigator.userAgent),
  Fd = ({
    delay: e = 500,
    duration: t = 2e3,
    locales: n,
    selector: r,
    showInMobile: i
  }) => {
    let { copy: a, copied: o } = td({ legacy: !0, copiedDuring: t }),
      s = wd(n),
      c = ru(),
      l = e => {
        if (!e.hasAttribute(`copy-code-registered`)) {
          let t = document.createElement(`button`);
          ((t.type = `button`),
            t.classList.add(`vp-copy-code-button`),
            (t.innerHTML = `<div class="vp-copy-icon" />`),
            t.setAttribute(`aria-label`, s.value.copy),
            t.setAttribute(`data-copied`, s.value.copied),
            e.parentElement && e.parentElement.insertBefore(t, e),
            e.setAttribute(`copy-code-registered`, ``));
        }
      },
      u = () => {
        En()
          .then(() => Dd(e))
          .then(() => {
            r.forEach(e => {
              document.querySelectorAll(e).forEach(l);
            });
          });
      },
      d = (e, t, n) => {
        let { innerText: r = `` } = t;
        (/language-(shellscript|shell|bash|sh|zsh)/.test(
          e.classList.toString()
        ) && (r = r.replace(/^ *(\$|>) /gm, ``)),
          a(r).then(() => {
            (n.classList.add(`copied`),
              Gn(
                o,
                () => {
                  (n.classList.remove(`copied`), n.blur());
                },
                { once: !0 }
              ));
          }));
      };
    zr(() => {
      let e = !Pd() || i;
      (e && u(),
        Xu(`click`, e => {
          let t = e.target;
          if (t.matches(`div[class*="language-"] > button.copy`)) {
            let e = t.parentElement,
              n = t.nextElementSibling;
            n && d(e, n, t);
          } else if (t.matches(`div[class*="language-"] div.vp-copy-icon`)) {
            let e = t.parentElement,
              n = e.parentElement,
              r = e.nextElementSibling;
            r && d(n, r, e);
          }
        }),
        Gn(
          () => c.value.path,
          () => {
            e && u();
          }
        ));
    });
  },
  Id = t({ default: () => Ld }),
  Ld = Du({
    setup: () => {
      Fd({
        selector: [`.theme-default-content div[class*="language-"] pre`],
        locales: { '/': { copy: `Скопировать код`, copied: `Скопировано` } },
        duration: 2e3,
        delay: 500,
        showInMobile: !1
      });
    }
  }),
  Rd =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  zd = function (e) {
    return e.tagName === `IMG`;
  },
  Bd = function (e) {
    return NodeList.prototype.isPrototypeOf(e);
  },
  Vd = function (e) {
    return e && e.nodeType === 1;
  },
  Hd = function (e) {
    return (e.currentSrc || e.src).substr(-4).toLowerCase() === `.svg`;
  },
  Ud = function (e) {
    try {
      return Array.isArray(e)
        ? e.filter(zd)
        : Bd(e)
          ? [].slice.call(e).filter(zd)
          : Vd(e)
            ? [e].filter(zd)
            : typeof e == `string`
              ? [].slice.call(document.querySelectorAll(e)).filter(zd)
              : [];
    } catch {
      throw TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`);
    }
  },
  Wd = function (e) {
    var t = document.createElement(`div`);
    return (
      t.classList.add(`medium-zoom-overlay`),
      (t.style.background = e),
      t
    );
  },
  Gd = function (e) {
    var t = e.getBoundingClientRect(),
      n = t.top,
      r = t.left,
      i = t.width,
      a = t.height,
      o = e.cloneNode(),
      s =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0,
      c =
        window.pageXOffset ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft ||
        0;
    return (
      o.removeAttribute(`id`),
      (o.style.position = `absolute`),
      (o.style.top = n + s + `px`),
      (o.style.left = r + c + `px`),
      (o.style.width = i + `px`),
      (o.style.height = a + `px`),
      (o.style.transform = ``),
      o
    );
  },
  Kd = function (e, t) {
    var n = Rd({ bubbles: !1, cancelable: !1, detail: void 0 }, t);
    if (typeof window.CustomEvent == `function`) return new CustomEvent(e, n);
    var r = document.createEvent(`CustomEvent`);
    return (r.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), r);
  },
  qd = function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r =
        window.Promise ||
        function (e) {
          function t() {}
          e(t, t);
        },
      i = function (e) {
        var t = e.target;
        if (t === ee) {
          m();
          return;
        }
        y.indexOf(t) !== -1 && h({ target: t });
      },
      a = function () {
        if (!(x || !w.original)) {
          var e =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
          Math.abs(S - e) > C.scrollOffset && setTimeout(m, 150);
        }
      },
      o = function (e) {
        var t = e.key || e.keyCode;
        (t === `Escape` || t === `Esc` || t === 27) && m();
      },
      s = function () {
        var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          t = e;
        return (
          e.background && (ee.style.background = e.background),
          e.container &&
            e.container instanceof Object &&
            (t.container = Rd({}, C.container, e.container)),
          e.template &&
            (t.template = Vd(e.template)
              ? e.template
              : document.querySelector(e.template)),
          (C = Rd({}, C, t)),
          y.forEach(function (e) {
            e.dispatchEvent(Kd(`medium-zoom:update`, { detail: { zoom: T } }));
          }),
          T
        );
      },
      c = function () {
        var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return e(Rd({}, C, t));
      },
      l = function () {
        var e = [...arguments].reduce(function (e, t) {
          return [].concat(e, Ud(t));
        }, []);
        return (
          e
            .filter(function (e) {
              return y.indexOf(e) === -1;
            })
            .forEach(function (e) {
              (y.push(e), e.classList.add(`medium-zoom-image`));
            }),
          b.forEach(function (t) {
            var n = t.type,
              r = t.listener,
              i = t.options;
            e.forEach(function (e) {
              e.addEventListener(n, r, i);
            });
          }),
          T
        );
      },
      u = function () {
        var e = [...arguments];
        w.zoomed && m();
        var t =
          e.length > 0
            ? e.reduce(function (e, t) {
                return [].concat(e, Ud(t));
              }, [])
            : y;
        return (
          t.forEach(function (e) {
            (e.classList.remove(`medium-zoom-image`),
              e.dispatchEvent(
                Kd(`medium-zoom:detach`, { detail: { zoom: T } })
              ));
          }),
          (y = y.filter(function (e) {
            return t.indexOf(e) === -1;
          })),
          T
        );
      },
      d = function (e, t) {
        var n =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return (
          y.forEach(function (r) {
            r.addEventListener(`medium-zoom:` + e, t, n);
          }),
          b.push({ type: `medium-zoom:` + e, listener: t, options: n }),
          T
        );
      },
      f = function (e, t) {
        var n =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return (
          y.forEach(function (r) {
            r.removeEventListener(`medium-zoom:` + e, t, n);
          }),
          (b = b.filter(function (n) {
            return !(
              n.type === `medium-zoom:` + e &&
              n.listener.toString() === t.toString()
            );
          })),
          T
        );
      },
      p = function () {
        var e = (
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          ).target,
          t = function () {
            var e = {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
              },
              t = void 0,
              n = void 0;
            if (C.container)
              if (C.container instanceof Object)
                ((e = Rd({}, e, C.container)),
                  (t = e.width - e.left - e.right - C.margin * 2),
                  (n = e.height - e.top - e.bottom - C.margin * 2));
              else {
                var r = (
                    Vd(C.container)
                      ? C.container
                      : document.querySelector(C.container)
                  ).getBoundingClientRect(),
                  i = r.width,
                  a = r.height,
                  o = r.left,
                  s = r.top;
                e = Rd({}, e, { width: i, height: a, left: o, top: s });
              }
            ((t ||= e.width - C.margin * 2), (n ||= e.height - C.margin * 2));
            var c = w.zoomedHd || w.original,
              l = Hd(c) ? t : c.naturalWidth || t,
              u = Hd(c) ? n : c.naturalHeight || n,
              d = c.getBoundingClientRect(),
              f = d.top,
              p = d.left,
              m = d.width,
              h = d.height,
              g = Math.min(Math.max(m, l), t) / m,
              _ = Math.min(Math.max(h, u), n) / h,
              v = Math.min(g, _),
              y = (-p + (t - m) / 2 + C.margin + e.left) / v,
              b = (-f + (n - h) / 2 + C.margin + e.top) / v,
              x = `scale(` + v + `) translate3d(` + y + `px, ` + b + `px, 0)`;
            ((w.zoomed.style.transform = x),
              w.zoomedHd && (w.zoomedHd.style.transform = x));
          };
        return new r(function (n) {
          if (e && y.indexOf(e) === -1) {
            n(T);
            return;
          }
          var r = function e() {
            ((x = !1),
              w.zoomed.removeEventListener(`transitionend`, e),
              w.original.dispatchEvent(
                Kd(`medium-zoom:opened`, { detail: { zoom: T } })
              ),
              n(T));
          };
          if (w.zoomed) {
            n(T);
            return;
          }
          if (e) w.original = e;
          else if (y.length > 0) w.original = y[0];
          else {
            n(T);
            return;
          }
          if (
            (w.original.dispatchEvent(
              Kd(`medium-zoom:open`, { detail: { zoom: T } })
            ),
            (S =
              window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0),
            (x = !0),
            (w.zoomed = Gd(w.original)),
            document.body.appendChild(ee),
            C.template)
          ) {
            var i = Vd(C.template)
              ? C.template
              : document.querySelector(C.template);
            ((w.template = document.createElement(`div`)),
              w.template.appendChild(i.content.cloneNode(!0)),
              document.body.appendChild(w.template));
          }
          if (
            (w.original.parentElement &&
              w.original.parentElement.tagName === `PICTURE` &&
              w.original.currentSrc &&
              (w.zoomed.src = w.original.currentSrc),
            document.body.appendChild(w.zoomed),
            window.requestAnimationFrame(function () {
              document.body.classList.add(`medium-zoom--opened`);
            }),
            w.original.classList.add(`medium-zoom-image--hidden`),
            w.zoomed.classList.add(`medium-zoom-image--opened`),
            w.zoomed.addEventListener(`click`, m),
            w.zoomed.addEventListener(`transitionend`, r),
            w.original.getAttribute(`data-zoom-src`))
          ) {
            ((w.zoomedHd = w.zoomed.cloneNode()),
              w.zoomedHd.removeAttribute(`srcset`),
              w.zoomedHd.removeAttribute(`sizes`),
              w.zoomedHd.removeAttribute(`loading`),
              (w.zoomedHd.src = w.zoomed.getAttribute(`data-zoom-src`)),
              (w.zoomedHd.onerror = function () {
                (clearInterval(a),
                  console.warn(
                    `Unable to reach the zoom image target ` + w.zoomedHd.src
                  ),
                  (w.zoomedHd = null),
                  t());
              }));
            var a = setInterval(function () {
              w.zoomedHd.complete &&
                (clearInterval(a),
                w.zoomedHd.classList.add(`medium-zoom-image--opened`),
                w.zoomedHd.addEventListener(`click`, m),
                document.body.appendChild(w.zoomedHd),
                t());
            }, 10);
          } else if (w.original.hasAttribute(`srcset`)) {
            ((w.zoomedHd = w.zoomed.cloneNode()),
              w.zoomedHd.removeAttribute(`sizes`),
              w.zoomedHd.removeAttribute(`loading`));
            var o = w.zoomedHd.addEventListener(`load`, function () {
              (w.zoomedHd.removeEventListener(`load`, o),
                w.zoomedHd.classList.add(`medium-zoom-image--opened`),
                w.zoomedHd.addEventListener(`click`, m),
                document.body.appendChild(w.zoomedHd),
                t());
            });
          } else t();
        });
      },
      m = function () {
        return new r(function (e) {
          if (x || !w.original) {
            e(T);
            return;
          }
          var t = function t() {
            (w.original.classList.remove(`medium-zoom-image--hidden`),
              document.body.removeChild(w.zoomed),
              w.zoomedHd && document.body.removeChild(w.zoomedHd),
              document.body.removeChild(ee),
              w.zoomed.classList.remove(`medium-zoom-image--opened`),
              w.template && document.body.removeChild(w.template),
              (x = !1),
              w.zoomed.removeEventListener(`transitionend`, t),
              w.original.dispatchEvent(
                Kd(`medium-zoom:closed`, { detail: { zoom: T } })
              ),
              (w.original = null),
              (w.zoomed = null),
              (w.zoomedHd = null),
              (w.template = null),
              e(T));
          };
          ((x = !0),
            document.body.classList.remove(`medium-zoom--opened`),
            (w.zoomed.style.transform = ``),
            w.zoomedHd && (w.zoomedHd.style.transform = ``),
            w.template &&
              ((w.template.style.transition = `opacity 150ms`),
              (w.template.style.opacity = 0)),
            w.original.dispatchEvent(
              Kd(`medium-zoom:close`, { detail: { zoom: T } })
            ),
            w.zoomed.addEventListener(`transitionend`, t));
        });
      },
      h = function () {
        var e = (
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
        ).target;
        return w.original ? m() : p({ target: e });
      },
      g = function () {
        return C;
      },
      _ = function () {
        return y;
      },
      v = function () {
        return w.original;
      },
      y = [],
      b = [],
      x = !1,
      S = 0,
      C = n,
      w = { original: null, zoomed: null, zoomedHd: null, template: null };
    (Object.prototype.toString.call(t) === `[object Object]`
      ? (C = t)
      : (t || typeof t == `string`) && l(t),
      (C = Rd(
        {
          margin: 0,
          background: `#fff`,
          scrollOffset: 40,
          container: null,
          template: null
        },
        C
      )));
    var ee = Wd(C.background);
    (document.addEventListener(`click`, i),
      document.addEventListener(`keyup`, o),
      document.addEventListener(`scroll`, a),
      window.addEventListener(`resize`, m));
    var T = {
      open: p,
      close: m,
      toggle: h,
      update: s,
      clone: c,
      attach: l,
      detach: u,
      on: d,
      off: f,
      getOptions: g,
      getImages: _,
      getZoomedImage: v
    };
    return T;
  };
function Jd(e, t) {
  t === void 0 && (t = {});
  var n = t.insertAt;
  if (!(!e || typeof document > `u`)) {
    var r = document.head || document.getElementsByTagName(`head`)[0],
      i = document.createElement(`style`);
    ((i.type = `text/css`),
      n === `top` && r.firstChild
        ? r.insertBefore(i, r.firstChild)
        : r.appendChild(i),
      i.styleSheet
        ? (i.styleSheet.cssText = e)
        : i.appendChild(document.createTextNode(e)));
  }
}
Jd(
  `.medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}`
);
var Yd = Symbol(`mediumZoom`),
  Xd = t({ default: () => ef }),
  Zd = `.theme-default-content > img, .theme-default-content :not(a) > img`,
  Qd = {},
  $d = 300,
  ef = Du({
    enhance({ app: e, router: t }) {
      let n = qd(Qd);
      ((n.refresh = (e = Zd) => {
        (n.detach(), n.attach(e));
      }),
        e.provide(Yd, n),
        t.afterEach(() => {
          Dd($d).then(() => n.refresh());
        }));
    }
  }),
  Q = {
    settings: {
      minimum: 0.08,
      easing: `ease`,
      speed: 200,
      trickle: !0,
      trickleRate: 0.02,
      trickleSpeed: 800,
      barSelector: `[role="bar"]`,
      parent: `body`,
      template: `<div class="bar" role="bar"></div>`
    },
    status: null,
    set: e => {
      let t = Q.isStarted();
      ((e = tf(e, Q.settings.minimum, 1)), (Q.status = e === 1 ? null : e));
      let n = Q.render(!t),
        r = n.querySelector(Q.settings.barSelector),
        i = Q.settings.speed,
        a = Q.settings.easing;
      return (
        n.offsetWidth,
        rf(t => {
          (af(r, {
            transform: `translate3d(` + nf(e) + `%,0,0)`,
            transition: `all ` + i + `ms ` + a
          }),
            e === 1
              ? (af(n, { transition: `none`, opacity: `1` }),
                n.offsetWidth,
                setTimeout(() => {
                  (af(n, {
                    transition: `all ` + i + `ms linear`,
                    opacity: `0`
                  }),
                    setTimeout(() => {
                      (Q.remove(), t());
                    }, i));
                }, i))
              : setTimeout(() => t(), i));
        }),
        Q
      );
    },
    isStarted: () => typeof Q.status == `number`,
    start: () => {
      Q.status || Q.set(0);
      let e = () => {
        setTimeout(() => {
          Q.status && (Q.trickle(), e());
        }, Q.settings.trickleSpeed);
      };
      return (Q.settings.trickle && e(), Q);
    },
    done: e => (!e && !Q.status ? Q : Q.inc(0.3 + 0.5 * Math.random()).set(1)),
    inc: e => {
      let t = Q.status;
      return t
        ? (typeof e != `number` &&
            (e = (1 - t) * tf(Math.random() * t, 0.1, 0.95)),
          (t = tf(t + e, 0, 0.994)),
          Q.set(t))
        : Q.start();
    },
    trickle: () => Q.inc(Math.random() * Q.settings.trickleRate),
    render: e => {
      if (Q.isRendered()) return document.getElementById(`nprogress`);
      sf(document.documentElement, `nprogress-busy`);
      let t = document.createElement(`div`);
      ((t.id = `nprogress`), (t.innerHTML = Q.settings.template));
      let n = t.querySelector(Q.settings.barSelector),
        r = e ? `-100` : nf(Q.status || 0),
        i = document.querySelector(Q.settings.parent);
      return (
        af(n, {
          transition: `all 0 linear`,
          transform: `translate3d(` + r + `%,0,0)`
        }),
        i !== document.body && sf(i, `nprogress-custom-parent`),
        i?.appendChild(t),
        t
      );
    },
    remove: () => {
      (cf(document.documentElement, `nprogress-busy`),
        cf(
          document.querySelector(Q.settings.parent),
          `nprogress-custom-parent`
        ));
      let e = document.getElementById(`nprogress`);
      e && uf(e);
    },
    isRendered: () => !!document.getElementById(`nprogress`)
  },
  tf = (e, t, n) => (e < t ? t : e > n ? n : e),
  nf = e => (-1 + e) * 100,
  rf = (function () {
    let e = [];
    function t() {
      let n = e.shift();
      n && n(t);
    }
    return function (n) {
      (e.push(n), e.length === 1 && t());
    };
  })(),
  af = (function () {
    let e = [`Webkit`, `O`, `Moz`, `ms`],
      t = {};
    function n(e) {
      return e.replace(/^-ms-/, `ms-`).replace(/-([\da-z])/gi, function (e, t) {
        return t.toUpperCase();
      });
    }
    function r(t) {
      let n = document.body.style;
      if (t in n) return t;
      let r = e.length,
        i = t.charAt(0).toUpperCase() + t.slice(1),
        a;
      for (; r--; ) if (((a = e[r] + i), a in n)) return a;
      return t;
    }
    function i(e) {
      return ((e = n(e)), (t[e] ??= r(e)));
    }
    function a(e, t, n) {
      ((t = i(t)), (e.style[t] = n));
    }
    return function (e, t) {
      for (let n in t) {
        let r = t[n];
        r !== void 0 &&
          Object.prototype.hasOwnProperty.call(t, n) &&
          a(e, n, r);
      }
    };
  })(),
  of = (e, t) => (typeof e == `string` ? e : lf(e)).indexOf(` ` + t + ` `) >= 0,
  sf = (e, t) => {
    let n = lf(e),
      r = n + t;
    of(n, t) || (e.className = r.substring(1));
  },
  cf = (e, t) => {
    let n = lf(e);
    if (!of(e, t)) return;
    let r = n.replace(` ` + t + ` `, ` `);
    e.className = r.substring(1, r.length - 1);
  },
  lf = e => (` ` + (e.className || ``) + ` `).replace(/\s+/gi, ` `),
  uf = e => {
    e && e.parentNode && e.parentNode.removeChild(e);
  },
  df = () => {
    zr(() => {
      let e = dc(),
        t = new Set();
      (t.add(e.currentRoute.value.path),
        e.beforeEach(e => {
          t.has(e.path) || Q.start();
        }),
        e.afterEach(e => {
          (t.add(e.path), Q.done());
        }));
    });
  },
  ff = t({ default: () => pf }),
  pf = Du({
    setup() {
      df();
    }
  }),
  mf = I(
    JSON.parse(
      `{"navbar":[{"text":"Гайд","link":"/guide/getting-started.html"},{"text":"Components","link":"/components/","children":["/components/Layout.md","/components/QAlert.md","/components/QAutoComplete.md","/components/QAvatar.md","/components/QBadge.md","/components/QBreadcrumbs.md","/components/QButton.md","/components/QCard.md","/components/QCascader.md","/components/QCheckbox.md","/components/QCheckboxGroup.md","/components/QCollapse.md","/components/QColorpicker.md","/components/QContextMenu.md","/components/QDatepicker.md","/components/QDescriptions.md","/components/QDialog.md","/components/QDivider.md","/components/QDrawer.md","/components/QDropdown.md","/components/QEmpty.md","/components/QForm.md","/components/QIcon.md","/components/QImage.md","/components/QInput.md","/components/QInputNumber.md","/components/QLayout.md","/components/QLink.md","/components/QList.md","/components/QLoading.md","/components/QMenu.md","/components/QMessageBox.md","/components/QNotification.md","/components/QPageHeader.md","/components/QPagination.md","/components/QPopover.md","/components/QProgress.md","/components/QProgressIndicatior.md","/components/QRadio.md","/components/QResult.md","/components/QRadioGroup.md","/components/QScrollbar.md","/components/QSegmented.md","/components/QSelect.md","/components/QSpace.md","/components/QSkeleton.md","/components/QSlider.md","/components/QStatistic.md","/components/QSteps.md","/components/QSwitch.md","/components/QTable.md","/components/QTabs.md","/components/QTag.md","/components/QTextarea.md","/components/QTimeline.md","/components/QTimePicker.md","/components/QTooltip.md","/components/QTransfer.md","/components/QTree.md","/components/QTreeSelect.md","/components/QBackTop.md","/components/QCarousel.md","/components/QRate.md","/components/QUpload.md","/components/QAnchor.md","/components/QAffix.md","/components/QTitle.md","/components/QText.md","/components/QParagraph.md","/components/QMentions.md","/components/QCalendar.md","/components/QWatermark.md","/components/QTour.md"]},{"text":"Storybook","link":"/design-system/storybook/"},{"text":"Github","link":"https://github.com/shamilfrontend/design-system"}],"sidebar":{"/components/":[{"text":"Components","children":["/components/Layout.md","/components/QAlert.md","/components/QAutoComplete.md","/components/QAvatar.md","/components/QBadge.md","/components/QBreadcrumbs.md","/components/QButton.md","/components/QCard.md","/components/QCascader.md","/components/QCheckbox.md","/components/QCheckboxGroup.md","/components/QCollapse.md","/components/QColorpicker.md","/components/QContextMenu.md","/components/QDatepicker.md","/components/QDescriptions.md","/components/QDialog.md","/components/QDivider.md","/components/QDrawer.md","/components/QDropdown.md","/components/QEmpty.md","/components/QForm.md","/components/QIcon.md","/components/QImage.md","/components/QInput.md","/components/QInputNumber.md","/components/QLayout.md","/components/QLink.md","/components/QList.md","/components/QLoading.md","/components/QMenu.md","/components/QMessageBox.md","/components/QNotification.md","/components/QPageHeader.md","/components/QPagination.md","/components/QPopover.md","/components/QProgress.md","/components/QProgressIndicatior.md","/components/QRadio.md","/components/QResult.md","/components/QRadioGroup.md","/components/QScrollbar.md","/components/QSegmented.md","/components/QSelect.md","/components/QSpace.md","/components/QSkeleton.md","/components/QSlider.md","/components/QStatistic.md","/components/QSteps.md","/components/QSwitch.md","/components/QTable.md","/components/QTabs.md","/components/QTag.md","/components/QTextarea.md","/components/QTimeline.md","/components/QTimePicker.md","/components/QTooltip.md","/components/QTransfer.md","/components/QTree.md","/components/QTreeSelect.md","/components/QBackTop.md","/components/QCarousel.md","/components/QRate.md","/components/QUpload.md","/components/QAnchor.md","/components/QAffix.md","/components/QTitle.md","/components/QText.md","/components/QParagraph.md","/components/QMentions.md","/components/QCalendar.md","/components/QWatermark.md","/components/QTour.md"]}],"/guide/":[{"text":"Guide","children":["/guide/README.md","/guide/getting-started.md","/guide/colors.md","/guide/shadows.md","/guide/tokens.md","/guide/theming.md"]}]},"locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"logo":null,"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","lastUpdated":true,"lastUpdatedText":"Last Updated","contributors":true,"contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`
    )
  ),
  hf = () => mf,
  gf = Symbol(``),
  _f = () => {
    let e = Vn(gf);
    if (!e) throw Error(`useThemeLocaleData() is called without provider.`);
    return e;
  },
  vf = (e, t) => {
    let { locales: n, ...r } = e;
    return { ...r, ...n?.[t] };
  },
  yf = t({ default: () => bf }),
  bf = Du({
    enhance({ app: e }) {
      let t = hf(),
        n = e._context.provides[eu],
        r = J(() => vf(t.value, n.routeLocale.value));
      (e.provide(gf, r),
        Object.defineProperties(e.config.globalProperties, {
          $theme: {
            get() {
              return t.value;
            }
          },
          $themeLocale: {
            get() {
              return r.value;
            }
          }
        }));
    }
  }),
  xf = z({
    __name: `Badge`,
    props: {
      type: { type: String, required: !1, default: `tip` },
      text: { type: String, required: !1, default: `` },
      vertical: { type: String, required: !1, default: void 0 }
    },
    setup(e) {
      return (t, n) => (
        U(),
        W(
          `span`,
          {
            class: A([`badge`, e.type]),
            style: k({ verticalAlign: e.vertical })
          },
          [B(t.$slots, `default`, {}, () => [Ha(j(e.text), 1)])],
          6
        )
      );
    }
  }),
  Sf = z({
    name: `CodeGroup`,
    slots: Object,
    setup(e, { slots: t }) {
      let n = I([]),
        r = I(-1),
        i = ud(`vuepress-code-group`, {}),
        a = J(() => n.value.map(e => e.innerText).join(`,`));
      zr(() => {
        (Gn(
          () => i.value[a.value],
          (e = -1) => {
            r.value !== e && (r.value = e);
          },
          { immediate: !0 }
        ),
          Gn(r, e => {
            i.value[a.value] !== e && (i.value[a.value] = e);
          }));
      });
      let o = (e = r.value) => {
          (e < n.value.length - 1 ? (r.value = e + 1) : (r.value = 0),
            n.value[r.value].focus());
        },
        s = (e = r.value) => {
          (e > 0 ? (r.value = e - 1) : (r.value = n.value.length - 1),
            n.value[r.value].focus());
        },
        c = (e, t) => {
          e.key === ` ` || e.key === `Enter`
            ? (e.preventDefault(), (r.value = t))
            : e.key === `ArrowRight`
              ? (e.preventDefault(), o(t))
              : e.key === `ArrowLeft` && (e.preventDefault(), s(t));
        };
      return () => {
        let e = (t.default?.() || [])
          .filter(e => e.type.name === `CodeGroupItem`)
          .map(e => (e.props === null && (e.props = {}), e));
        return e.length === 0
          ? null
          : (r.value < 0 || r.value > e.length - 1
              ? ((r.value = e.findIndex(
                  e => e.props.active === `` || e.props.active === !0
                )),
                r.value === -1 && (r.value = 0))
              : e.forEach((e, t) => {
                  e.props.active = t === r.value;
                }),
            Y(`div`, { class: `code-group` }, [
              Y(
                `div`,
                { class: `code-group__nav`, role: `tablist` },
                e.map((e, t) => {
                  let i = t === r.value;
                  return Y(
                    `button`,
                    {
                      ref: e => {
                        e && (n.value[t] = e);
                      },
                      class: {
                        'code-group__nav-tab': !0,
                        'code-group__nav-tab-active': i
                      },
                      role: `tab`,
                      ariaSelected: i,
                      onClick: () => (r.value = t),
                      onKeydown: e => c(e, t)
                    },
                    e.props.title
                  );
                })
              ),
              e
            ]));
      };
    }
  }),
  Cf = z({
    name: `CodeGroupItem`,
    __name: `CodeGroupItem`,
    props: {
      title: { type: String, required: !0 },
      active: { type: Boolean, required: !1, default: !1 }
    },
    setup(e) {
      return (t, n) => (
        U(),
        W(
          `div`,
          {
            class: A([
              `code-group-item`,
              { 'code-group-item__active': e.active }
            ]),
            role: `tabpanel`
          },
          [B(t.$slots, `default`)],
          2
        )
      );
    }
  }),
  wf = () => hf(),
  $ = () => _f(),
  Tf = Symbol(``),
  Ef = () => {
    let e = Vn(Tf);
    if (!e) throw Error(`useDarkMode() is called without provider.`);
    return e;
  },
  Df = () => {
    let e = $(),
      t = dd(),
      n = ud(`vuepress-color-scheme`, e.value.colorMode),
      r = J({
        get() {
          return e.value.colorModeSwitch
            ? n.value === `auto`
              ? t.value
              : n.value === `dark`
            : e.value.colorMode === `dark`;
        },
        set(e) {
          e === t.value ? (n.value = `auto`) : (n.value = e ? `dark` : `light`);
        }
      });
    (Bn(Tf, r), Of(r));
  },
  Of = e => {
    let t = (t = e.value) => {
      window?.document.querySelector(`html`)?.classList.toggle(`dark`, t);
    };
    (zr(() => {
      Gn(e, t, { immediate: !0 });
    }),
      Ur(() => t()));
  },
  kf = `http://.`,
  Af = () => {
    let e = dc(),
      t = fc();
    return n => {
      if (n)
        if (kd(n)) t.path !== n && e.push(n);
        else if (Ps(n)) window && window.open(n);
        else {
          let r = t.path.slice(0, t.path.lastIndexOf(`/`));
          e.push(new URL(`${r}/${encodeURI(n)}`, kf).pathname);
        }
    };
  },
  jf = null,
  Mf = null,
  Nf = {
    wait: () => jf,
    pending: () => {
      jf = new Promise(e => (Mf = e));
    },
    resolve: () => {
      (Mf?.(), (jf = null), (Mf = null));
    }
  },
  Pf = () => Nf,
  Ff = e => {
    let { notFound: t, meta: n, path: r } = _u(e);
    return t ? { text: r, link: r } : { text: n.title || r, link: r };
  },
  If = e =>
    decodeURI(e)
      .replace(/#.*$/, ``)
      .replace(/(index)?\.(md|html)$/, ``),
  Lf = (e, t) => (t.hash === e ? !0 : If(t.path) === If(e)),
  Rf = (e, t) =>
    e.link && Lf(e.link, t)
      ? !0
      : e.children
        ? e.children.some(e => Rf(e, t))
        : !1,
  zf = e =>
    !Fs(e) || /github\.com/.test(e)
      ? `GitHub`
      : /bitbucket\.org/.test(e)
        ? `Bitbucket`
        : /gitlab\.com/.test(e)
          ? `GitLab`
          : /gitee\.com/.test(e)
            ? `Gitee`
            : null,
  Bf = {
    GitHub: `:repo/edit/:branch/:path`,
    GitLab: `:repo/-/edit/:branch/:path`,
    Gitee: `:repo/edit/:branch/:path`,
    Bitbucket: `:repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default`
  },
  Vf = ({ docsRepo: e, editLinkPattern: t }) => {
    if (t) return t;
    let n = zf(e);
    return n === null ? null : Bf[n];
  },
  Hf = ({
    docsRepo: e,
    docsBranch: t,
    docsDir: n,
    filePathRelative: r,
    editLinkPattern: i
  }) => {
    if (!r) return null;
    let a = Vf({ docsRepo: e, editLinkPattern: i });
    return a
      ? a
          .replace(/:repo/, Fs(e) ? e : `https://github.com/${e}`)
          .replace(/:branch/, t)
          .replace(/:path/, qs(`${Ks(n)}/${r}`))
      : null;
  },
  Uf = Symbol(`sidebarItems`),
  Wf = () => {
    let e = Vn(Uf);
    if (!e) throw Error(`useSidebarItems() is called without provider.`);
    return e;
  },
  Gf = () => {
    let e = $(),
      t = iu(),
      n = ru(),
      r = fc();
    Bn(
      Uf,
      J(() => Kf(t.value, e.value, n.value, r.path))
    );
  },
  Kf = (e, t, n, r) => {
    let i = e.sidebar ?? t.sidebar ?? `auto`,
      a = e.sidebarDepth ?? t.sidebarDepth ?? 2;
    return e.home || i === !1
      ? []
      : i === `auto`
        ? Yf(n, a)
        : Array.isArray(i)
          ? Xf(n, r, i, a)
          : Js(i)
            ? Zf(n, r, i, a)
            : [];
  },
  qf = (e, t) => ({ text: e.title, link: e.link, children: Jf(e.children, t) }),
  Jf = (e, t) => (t > 0 && e ? e.map(e => qf(e, t - 1)) : []),
  Yf = (e, t) => [{ text: e.title, children: Jf(e.headers ?? [], t) }],
  Xf = (e, t, n, r) => {
    let i = e.headers ?? [],
      a = e => {
        let n;
        if (((n = Ys(e) ? Ff(e) : e), n.children))
          return { ...n, children: n.children.map(e => a(e)) };
        if (n.link === t) {
          let e = i[0]?.level === 1 ? i[0].children : i;
          return { ...n, children: Jf(e ?? [], r) };
        }
        return n;
      };
    return n.map(e => a(e));
  },
  Zf = (e, t, n, r) => {
    let i = n[zs(n, t)] ?? [];
    return i === `heading` ? Yf(e, r) : Xf(e, t, i, r);
  },
  Qf = { mobile: `719px` },
  $f;
(function (e) {
  e.MOBILE = `mobile`;
})(($f ||= {}));
var ep = { [$f.MOBILE]: Number.parseInt(Qf.mobile?.replace(`px`, ``), 10) },
  tp = (e, t) => {
    let n = ep[e];
    Number.isInteger(n) &&
      (Xu(`orientationchange`, () => t(n), !1),
      Xu(`resize`, () => t(n), !1),
      zr(() => {
        t(n);
      }));
  },
  np = [`href`, `target`, `rel`],
  rp = z({
    __name: `LandingButton`,
    props: { action: {} },
    setup(e) {
      let t = e.action.link.startsWith(`http`);
      return (n, r) => (
        U(),
        W(
          `a`,
          {
            href: e.action.link,
            class: A([`landing-button`, `landing-button--${e.action.type}`]),
            target: L(t) ? `_blank` : void 0,
            rel: L(t) ? `noopener noreferrer` : void 0
          },
          j(e.action.text),
          11,
          np
        )
      );
    }
  }),
  ip = (e, t) => {
    let n = e.__vccOpts || e;
    for (let [e, r] of t) n[e] = r;
    return n;
  },
  ap = ip(rp, [[`__scopeId`, `data-v-577e3b4f`]]),
  op = { class: `orbital-graphic__scene` },
  sp = { class: `orbital-graphic__label-text` },
  cp = ip(
    z({
      __name: `OrbitalGraphic`,
      props: {
        variant: { default: `hero` },
        labels: { default: () => [] },
        size: { default: `lg` }
      },
      setup(e) {
        let t = e,
          n = J(() => (t.variant === `hero` ? 4 : 3)),
          r = J(() =>
            Array.from({ length: n.value }, (e, t) => ({
              index: t,
              size: 100 - t * 18,
              duration: 90 + t * 30,
              reverse: t % 2 == 1
            }))
          ),
          i = J(() =>
            t.variant === `hero`
              ? [
                  { angle: 45, color: `#ff9f43`, ringIndex: 0 },
                  { angle: 160, color: `#7367f0`, ringIndex: 1 },
                  { angle: 280, color: `#9e95f5`, ringIndex: 2 },
                  { angle: 320, color: `#00cfe8`, ringIndex: 3 }
                ]
              : []
          );
        return (t, n) => (
          U(),
          W(
            `div`,
            {
              class: A([
                `orbital-graphic`,
                [`orbital-graphic--${e.variant}`, `orbital-graphic--${e.size}`]
              ]),
              'aria-hidden': `true`
            },
            [
              K(`div`, op, [
                (U(!0),
                W(
                  V,
                  null,
                  ei(
                    r.value,
                    e => (
                      U(),
                      W(
                        `div`,
                        {
                          key: e.index,
                          class: A([
                            `orbital-graphic__ring`,
                            { 'orbital-graphic__ring--reverse': e.reverse }
                          ]),
                          style: k({
                            width: `${e.size}%`,
                            height: `${e.size}%`,
                            animationDuration: `${e.duration}s`
                          })
                        },
                        null,
                        6
                      )
                    )
                  ),
                  128
                )),
                (n[0] ||= K(
                  `div`,
                  { class: `orbital-graphic__planet` },
                  null,
                  -1
                )),
                (U(!0),
                W(
                  V,
                  null,
                  ei(
                    i.value,
                    (e, t) => (
                      U(),
                      W(
                        `div`,
                        {
                          key: `dot-${t}`,
                          class: `orbital-graphic__dot`,
                          style: k({
                            '--dot-angle': `${e.angle}deg`,
                            '--dot-color': e.color,
                            '--dot-radius': `${(100 - e.ringIndex * 18) / 2}%`
                          })
                        },
                        null,
                        4
                      )
                    )
                  ),
                  128
                )),
                (U(!0),
                W(
                  V,
                  null,
                  ei(
                    e.labels,
                    (e, t) => (
                      U(),
                      W(
                        `div`,
                        {
                          key: `label-${t}`,
                          class: `orbital-graphic__label`,
                          style: k({ '--label-angle': `${e.angle}deg` })
                        },
                        [K(`span`, sp, j(e.label), 1)],
                        4
                      )
                    )
                  ),
                  128
                ))
              ])
            ],
            2
          )
        );
      }
    }),
    [[`__scopeId`, `data-v-6ec5a612`]]
  ),
  lp = { class: `landing-hero`, 'aria-label': `Главный экран` },
  up = { class: `landing-hero__inner` },
  dp = { class: `landing-hero__content` },
  fp = { class: `landing-hero__title` },
  pp = { class: `landing-hero__subtitle` },
  mp = { class: `landing-hero__actions` },
  hp = { class: `landing-hero__graphic` },
  gp = ip(
    z({
      __name: `LandingHero`,
      props: { content: {} },
      setup(e) {
        return (t, n) => (
          U(),
          W(`section`, lp, [
            K(`div`, up, [
              K(`div`, dp, [
                K(`h1`, fp, j(e.content.title), 1),
                K(`p`, pp, j(e.content.subtitle), 1),
                K(`div`, mp, [
                  (U(!0),
                  W(
                    V,
                    null,
                    ei(
                      e.content.actions,
                      e => (
                        U(),
                        G(ap, { key: e.text, action: e }, null, 8, [`action`])
                      )
                    ),
                    128
                  ))
                ])
              ]),
              K(`div`, hp, [q(cp, { variant: `hero`, size: `lg` })])
            ])
          ])
        );
      }
    }),
    [[`__scopeId`, `data-v-b346e543`]]
  ),
  _p = {},
  vp = { class: `landing-section-fallback`, 'aria-hidden': `true` };
function yp(e, t) {
  return (
    U(),
    W(`div`, vp, [
      ...(t[0] ||= [
        K(`div`, { class: `landing-section-fallback__shimmer` }, null, -1)
      ])
    ])
  );
}
var bp = ip(_p, [
    [`render`, yp],
    [`__scopeId`, `data-v-5029f0d6`]
  ]),
  xp = { class: `landing-card` },
  Sp = { class: `landing-card__icon` },
  Cp = { class: `landing-card__title` },
  wp = { class: `landing-card__text` },
  Tp = ip(
    z({
      __name: `LandingCard`,
      props: { icon: {}, title: {}, description: {} },
      setup(e) {
        return (t, n) => (
          U(),
          W(`article`, xp, [
            K(`div`, Sp, j(e.icon), 1),
            K(`h3`, Cp, j(e.title), 1),
            K(`p`, wp, j(e.description), 1)
          ])
        );
      }
    }),
    [[`__scopeId`, `data-v-528cedd7`]]
  ),
  Ep = [`id`, `aria-labelledby`],
  Dp = { class: `landing-section__inner` },
  Op = [`id`],
  kp = { key: 0, class: `landing-section__subtitle` },
  Ap = z({
    __name: `LandingSection`,
    props: { title: {}, subtitle: {}, id: {} },
    setup(e) {
      let t = e,
        n = J(() => (t.id ? `${t.id}-title` : void 0));
      return (t, r) => (
        U(),
        W(
          `section`,
          { id: e.id, class: `landing-section`, 'aria-labelledby': n.value },
          [
            K(`div`, Dp, [
              K(
                `h2`,
                { id: n.value, class: `landing-section__title` },
                j(e.title),
                9,
                Op
              ),
              e.subtitle ? (U(), W(`p`, kp, j(e.subtitle), 1)) : Wa(``, !0),
              B(t.$slots, `default`)
            ])
          ],
          8,
          Ep
        )
      );
    }
  }),
  jp = { class: `landing-values` },
  Mp = ip(
    z({
      __name: `LandingValues`,
      props: { content: {} },
      setup(e) {
        return (t, n) => (
          U(),
          G(
            Ap,
            {
              title: e.content.title,
              subtitle: e.content.subtitle,
              id: `values`
            },
            {
              default: R(() => [
                K(`div`, jp, [
                  (U(!0),
                  W(
                    V,
                    null,
                    ei(
                      e.content.items,
                      e => (
                        U(),
                        G(
                          Tp,
                          {
                            key: e.title,
                            class: `landing-values__card`,
                            icon: e.icon,
                            title: e.title,
                            description: e.description
                          },
                          null,
                          8,
                          [`icon`, `title`, `description`]
                        )
                      )
                    ),
                    128
                  ))
                ])
              ]),
              _: 1
            },
            8,
            [`title`, `subtitle`]
          )
        );
      }
    }),
    [[`__scopeId`, `data-v-8261e3b8`]]
  ),
  Np = {
    title: `Анонсы`,
    subtitle: `Последние обновления и планы развития.`,
    items: [
      {
        title: `Vuexy-стиль`,
        description: `Обновлённая flat-палитра и тени в духе Vuexy.`,
        color: `orange`
      },
      {
        title: `Storybook 10`,
        description: `Песочница обновлена до Storybook 10 с Vite.`,
        color: `teal`
      },
      {
        title: `Документация`,
        description: `Новый landing и расширение гайдов — следите за обновлениями.`,
        color: `purple`
      }
    ]
  },
  Pp = {
    buttons: `/landing/buttons.jpg`,
    inputs: `/landing/inputs.gif`,
    tables: `/landing/tables.jpg`,
    icons: `/landing/icons.gif`,
    other: `/landing/other.jpg`
  },
  Fp = {
    hero: {
      title: `Design System`,
      subtitle: `Vue 3 библиотека компонентов с TypeScript, Composition API и единым визуальным языком для веб-продуктов.`,
      actions: [
        {
          text: `Начать работу`,
          link: `/guide/getting-started`,
          type: `primary`
        },
        {
          text: `Storybook`,
          link: `https://github.com/shamilfrontend/design-system`,
          type: `secondary`
        }
      ]
    },
    values: {
      title: `Ценности`,
      subtitle: `Единый набор правил и компонентов, который ускоряет разработку и сохраняет консистентность интерфейсов.`,
      items: [
        {
          icon: `🔩`,
          title: `60+ компонентов`,
          description: `Готовые UI-блоки: формы, таблицы, навигация, оверлеи и многое другое — с единым API и стилями.`
        },
        {
          icon: `🔥`,
          title: `Composition API`,
          description: `Современный подход Vue 3: переиспользуемая логика, читаемый код и полная поддержка TypeScript.`
        },
        {
          icon: `🔑`,
          title: `TypeScript`,
          description: `Типы из коробки для всех компонентов и пропсов — меньше ошибок на этапе разработки.`
        }
      ]
    },
    platforms: {
      title: `Эффективность на всех платформах`,
      subtitle: `Адаптивная сетка и компоненты, которые одинаково хорошо работают в разных контекстах продукта.`,
      labels: [
        { label: `Web`, angle: 0 },
        { label: `Mobile`, angle: 90 },
        { label: `Desktop`, angle: 180 },
        { label: `TV`, angle: 270 }
      ]
    },
    stats: {
      title: `Для кого`,
      subtitle: `Design System помогает командам быстрее выпускать качественные интерфейсы.`,
      items: [
        { value: `60+`, label: `готовых компонентов`, percent: 90 },
        { value: `100+`, label: `иконок в наборе`, percent: 85 },
        { value: `до 40%`, label: `ускорение разработки UI`, percent: 40 },
        { value: `Vue 3`, label: `современный стек`, percent: 100 }
      ]
    },
    customization: {
      title: `Гибкая кастомизация`,
      subtitle: `Токены, темы и компоненты настраиваются под бренд — от цветов до поведения и состояний.`,
      image: Pp.buttons,
      points: [
        `CSS-переменные для цветов, теней и радиусов`,
        `Светлая и тёмная тема через data-theme`,
        `Варианты кнопок, размеров и состояний компонентов`
      ]
    },
    styleGrid: {
      title: `Стиль и основы`,
      subtitle: `Фундамент дизайн-системы: токены, сетка, типографика и визуальные паттерны.`,
      items: [
        {
          title: `Цвета`,
          description: `Палитра primary, semantic и surface-токены`,
          icon: `🎨`,
          link: `/guide/colors`
        },
        {
          title: `Типографика`,
          description: `Шрифт Urbanist и шкала размеров`,
          icon: `Aa`,
          link: `/guide/getting-started`
        },
        {
          title: `Сетка`,
          description: `12-колоночный flex-layout QRow / QCol`,
          icon: `▦`,
          link: `/components/Layout`
        },
        {
          title: `Иконки`,
          description: `100+ иконок в icon font`,
          icon: `◈`,
          link: `https://github.com/shamilfrontend/design-system`,
          external: !0
        },
        {
          title: `Тени`,
          description: `Elevation и box-shadow токены`,
          icon: `◐`,
          link: `/guide/shadows`
        },
        {
          title: `Токены`,
          description: `CSS custom properties в vars.scss`,
          icon: `⚙`,
          link: `/guide/tokens`
        },
        {
          title: `Компоненты`,
          description: `Каталог UI-блоков с примерами`,
          icon: `▣`,
          link: `/components/QButton`
        },
        {
          title: `Формы`,
          description: `Input, Select, Checkbox и валидация`,
          icon: `☰`,
          link: `/components/QForm`
        }
      ]
    },
    tools: {
      title: `Инструменты`,
      subtitle: `Всё необходимое для интеграции и экспериментов с компонентами.`,
      items: [
        {
          name: `npm`,
          description: `Установка через yarn или npm в Vue 3 проект`,
          link: `https://www.npmjs.com/package/design-system`
        },
        {
          name: `Storybook`,
          description: `Песочница с живыми примерами и состояниями`,
          link: `https://github.com/shamilfrontend/design-system`
        },
        {
          name: `GitHub`,
          description: `Исходный код, issues и contributing`,
          link: `https://github.com/shamilfrontend/design-system`
        },
        { name: `Figma`, description: `UI-kit в Figma`, comingSoon: !0 }
      ]
    },
    examples: {
      title: `Примеры`,
      subtitle: `Компоненты Design System в реальных сценариях интерфейса.`,
      items: [
        { title: `Кнопки`, image: Pp.buttons, width: 640, height: 400 },
        { title: `Инпуты`, image: Pp.inputs, width: 640, height: 400 },
        { title: `Таблицы`, image: Pp.tables, width: 640, height: 400 },
        { title: `Иконки`, image: Pp.icons, width: 640, height: 400 },
        { title: `Другое`, image: Pp.other, width: 640, height: 400 }
      ]
    },
    reviews: {
      title: `Отзывы`,
      subtitle: `Что говорят разработчики, которые используют Design System в проектах.`,
      items: [
        {
          name: `Алексей`,
          role: `Frontend-разработчик`,
          quote: `Единый набор компонентов сильно упростил сборку форм и таблиц.`
        },
        {
          name: `Мария`,
          role: `UI-разработчик`,
          quote: `TypeScript-типы и Storybook экономят часы на онбординге.`
        },
        {
          name: `Дмитрий`,
          role: `Tech Lead`,
          quote: `Консистентный UI без дублирования стилей в каждом проекте.`
        },
        {
          name: `Елена`,
          role: `Product Designer`,
          quote: `Компоненты предсказуемы — дизайн и код говорят на одном языке.`
        },
        {
          name: `Игорь`,
          role: `Fullstack`,
          quote: `Быстрый старт: подключил пакет и сразу получил рабочий UI.`
        }
      ]
    },
    team: {
      title: `Команда`,
      subtitle: `Design System развивается командой ShamilFrontend.`,
      items: [
        {
          name: `Tim Bochkarev`,
          role: `Maintainer`,
          quote: `Мы собрали компоненты, которые сами используем каждый день в продуктах.`,
          initials: `TB`
        },
        {
          name: `Viktor Zheleztsov`,
          role: `Maintainer`,
          quote: `Открытый исходный код — способ получить обратную связь и улучшать библиотеку вместе с сообществом.`,
          initials: `VZ`
        }
      ]
    },
    announcements: Np,
    footer: {
      text: `MIT Licensed | ShamilFrontend`,
      netlifyBadge: `https://www.netlify.com/img/global/badges/netlify-color-accent.svg`
    }
  },
  Ip = { class: `landing-page` },
  Lp = z({
    __name: `LandingPage`,
    setup(e) {
      let t = kr(() => Z(() => import(`./LandingPlatforms-DKPRQXiq.js`), [])),
        n = kr(() => Z(() => import(`./LandingStats-CuzocsLF.js`), [])),
        r = kr(() => Z(() => import(`./LandingCustomization-w2Rb-JB4.js`), [])),
        i = kr(() => Z(() => import(`./LandingStyleGrid-DhWNLs6e.js`), [])),
        a = kr(() => Z(() => import(`./LandingTools-l6TEyTUW.js`), [])),
        o = kr(() => Z(() => import(`./LandingExamples-icIqc2pG.js`), [])),
        s = kr(() => Z(() => import(`./LandingReviews-BEc_oKeb.js`), [])),
        c = kr(() => Z(() => import(`./LandingTeam-ByINtCeK.js`), [])),
        l = kr(() => Z(() => import(`./LandingAnnouncements-ChLRpBb5.js`), [])),
        u = kr(() => Z(() => import(`./LandingFooter-D5ScyEt8.js`), []));
      return (e, d) => (
        U(),
        W(`div`, Ip, [
          q(gp, { content: L(Fp).hero }, null, 8, [`content`]),
          q(Mp, { content: L(Fp).values }, null, 8, [`content`]),
          (U(),
          G(ga, null, {
            default: R(() => [
              q(L(t), { content: L(Fp).platforms }, null, 8, [`content`])
            ]),
            fallback: R(() => [q(bp)]),
            _: 1
          })),
          (U(),
          G(ga, null, {
            default: R(() => [
              q(L(n), { content: L(Fp).stats }, null, 8, [`content`])
            ]),
            fallback: R(() => [q(bp)]),
            _: 1
          })),
          (U(),
          G(ga, null, {
            default: R(() => [
              q(L(r), { content: L(Fp).customization }, null, 8, [`content`])
            ]),
            fallback: R(() => [q(bp)]),
            _: 1
          })),
          (U(),
          G(ga, null, {
            default: R(() => [
              q(L(i), { content: L(Fp).styleGrid }, null, 8, [`content`])
            ]),
            fallback: R(() => [q(bp)]),
            _: 1
          })),
          (U(),
          G(ga, null, {
            default: R(() => [
              q(L(a), { content: L(Fp).tools }, null, 8, [`content`])
            ]),
            fallback: R(() => [q(bp)]),
            _: 1
          })),
          (U(),
          G(ga, null, {
            default: R(() => [
              q(L(o), { content: L(Fp).examples }, null, 8, [`content`])
            ]),
            fallback: R(() => [q(bp)]),
            _: 1
          })),
          (U(),
          G(ga, null, {
            default: R(() => [
              q(L(s), { content: L(Fp).reviews }, null, 8, [`content`])
            ]),
            fallback: R(() => [q(bp)]),
            _: 1
          })),
          (U(),
          G(ga, null, {
            default: R(() => [
              q(L(c), { content: L(Fp).team }, null, 8, [`content`])
            ]),
            fallback: R(() => [q(bp)]),
            _: 1
          })),
          (U(),
          G(ga, null, {
            default: R(() => [
              q(L(l), { content: L(Fp).announcements }, null, 8, [`content`])
            ]),
            fallback: R(() => [q(bp)]),
            _: 1
          })),
          (U(),
          G(ga, null, {
            default: R(() => [
              q(L(u), { content: L(Fp).footer }, null, 8, [`content`])
            ]),
            fallback: R(() => [q(bp)]),
            _: 1
          }))
        ])
      );
    }
  }),
  Rp = { class: `home home-page` },
  zp = z({
    __name: `CustomHome`,
    setup(e) {
      return (e, t) => (U(), W(`main`, Rp, [q(Lp)]));
    }
  }),
  Bp = [`aria-hidden`],
  Vp = z({
    __name: `NavbarBrand`,
    setup(e) {
      let t = cu(),
        n = du(),
        r = $(),
        i = Ef(),
        a = J(() => r.value.home || t.value),
        o = J(() => n.value.title),
        s = J(() =>
          i.value && r.value.logoDark !== void 0
            ? r.value.logoDark
            : r.value.logo
        ),
        c = J(() => r.value.logoAlt ?? o.value),
        l = J(
          () =>
            o.value.toLocaleUpperCase().trim() ===
            c.value.toLocaleUpperCase().trim()
        ),
        u = () => {
          if (!s.value) return null;
          let e = Y(`img`, { class: `logo`, src: Ou(s.value), alt: c.value });
          return r.value.logoDark === void 0 ? e : Y(Su, () => e);
        };
      return (e, t) => (
        U(),
        G(
          L(bu),
          { to: a.value },
          {
            default: R(() => [
              q(u),
              o.value
                ? (U(),
                  W(
                    `span`,
                    {
                      key: 0,
                      class: A([`site-name`, { 'can-hide': s.value }]),
                      'aria-hidden': l.value
                    },
                    j(o.value),
                    11,
                    Bp
                  ))
                : Wa(``, !0)
            ]),
            _: 1
          },
          8,
          [`to`]
        )
      );
    }
  }),
  Hp = z({
    __name: `DropdownTransition`,
    setup(e) {
      let t = e => {
          e.style.height = e.scrollHeight + `px`;
        },
        n = e => {
          e.style.height = ``;
        };
      return (e, r) => (
        U(),
        G(
          No,
          { name: `dropdown`, onEnter: t, onAfterEnter: n, onBeforeLeave: t },
          { default: R(() => [B(e.$slots, `default`)]), _: 3 }
        )
      );
    }
  }),
  Up = [`aria-label`],
  Wp = { class: `title` },
  Gp = [`aria-label`],
  Kp = { class: `title` },
  qp = { class: `navbar-dropdown` },
  Jp = { class: `navbar-dropdown-subtitle` },
  Yp = { key: 1 },
  Xp = { class: `navbar-dropdown-subitem-wrapper` },
  Zp = z({
    __name: `NavbarDropdown`,
    props: { item: { type: Object, required: !0 } },
    setup(e) {
      let { item: t } = tn(e),
        n = J(() => t.value.ariaLabel || t.value.text),
        r = I(!1),
        i = fc();
      Gn(
        () => i.path,
        () => {
          r.value = !1;
        }
      );
      let a = e => {
          e.detail === 0 ? (r.value = !r.value) : (r.value = !1);
        },
        o = (e, t) => t[t.length - 1] === e;
      return (e, i) => (
        U(),
        W(
          `div`,
          { class: A([`navbar-dropdown-wrapper`, { open: r.value }]) },
          [
            K(
              `button`,
              {
                class: `navbar-dropdown-title`,
                type: `button`,
                'aria-label': n.value,
                onClick: a
              },
              [
                K(`span`, Wp, j(L(t).text), 1),
                (i[1] ||= K(`span`, { class: `arrow down` }, null, -1))
              ],
              8,
              Up
            ),
            K(
              `button`,
              {
                class: `navbar-dropdown-title-mobile`,
                type: `button`,
                'aria-label': n.value,
                onClick: (i[0] ||= e => (r.value = !r.value))
              },
              [
                K(`span`, Kp, j(L(t).text), 1),
                K(
                  `span`,
                  { class: A([`arrow`, r.value ? `down` : `right`]) },
                  null,
                  2
                )
              ],
              8,
              Gp
            ),
            q(Hp, null, {
              default: R(() => [
                Rn(
                  K(
                    `ul`,
                    qp,
                    [
                      (U(!0),
                      W(
                        V,
                        null,
                        ei(
                          L(t).children,
                          e => (
                            U(),
                            W(
                              `li`,
                              { key: e.text, class: `navbar-dropdown-item` },
                              [
                                e.children
                                  ? (U(),
                                    W(
                                      V,
                                      { key: 0 },
                                      [
                                        K(`h4`, Jp, [
                                          e.link
                                            ? (U(),
                                              G(
                                                L(xu),
                                                {
                                                  key: 0,
                                                  config: e,
                                                  onFocusout: n =>
                                                    o(e, L(t).children) &&
                                                    e.children.length === 0 &&
                                                    (r.value = !1)
                                                },
                                                null,
                                                8,
                                                [`config`, `onFocusout`]
                                              ))
                                            : (U(), W(`span`, Yp, j(e.text), 1))
                                        ]),
                                        K(`ul`, Xp, [
                                          (U(!0),
                                          W(
                                            V,
                                            null,
                                            ei(
                                              e.children,
                                              n => (
                                                U(),
                                                W(
                                                  `li`,
                                                  {
                                                    key: n.link,
                                                    class: `navbar-dropdown-subitem`
                                                  },
                                                  [
                                                    q(
                                                      L(xu),
                                                      {
                                                        config: n,
                                                        onFocusout: i =>
                                                          o(n, e.children) &&
                                                          o(e, L(t).children) &&
                                                          (r.value = !1)
                                                      },
                                                      null,
                                                      8,
                                                      [`config`, `onFocusout`]
                                                    )
                                                  ]
                                                )
                                              )
                                            ),
                                            128
                                          ))
                                        ])
                                      ],
                                      64
                                    ))
                                  : (U(),
                                    G(
                                      L(xu),
                                      {
                                        key: 1,
                                        config: e,
                                        onFocusout: n =>
                                          o(e, L(t).children) && (r.value = !1)
                                      },
                                      null,
                                      8,
                                      [`config`, `onFocusout`]
                                    ))
                              ]
                            )
                          )
                        ),
                        128
                      ))
                    ],
                    512
                  ),
                  [[Zo, r.value]]
                )
              ]),
              _: 1
            })
          ],
          2
        )
      );
    }
  }),
  Qp = [`aria-label`],
  $p = z({
    __name: `NavbarItems`,
    setup(e) {
      let t = () => {
          let e = fc(),
            t = Td(),
            n = cu(),
            r = uu(),
            i = du(),
            a = wf(),
            o = $();
          return J(() => {
            let s = Object.keys(r.value.locales);
            if (s.length < 2) return [];
            let c = e.path,
              l = e.fullPath;
            return [
              {
                text: `${o.value.selectLanguageText}`,
                ariaLabel: `${o.value.selectLanguageAriaLabel ?? o.value.selectLanguageText}`,
                children: s.map(o => {
                  let s = r.value.locales?.[o] ?? {},
                    u = a.value.locales?.[o] ?? {},
                    d = `${s.lang}`,
                    f = u.selectLanguageName ?? d;
                  if (d === i.value.lang)
                    return { text: f, activeMatch: /./, link: e.hash ?? `#` };
                  let p = c.replace(n.value, o);
                  return {
                    text: f,
                    link: t.value.some(e => e === p)
                      ? l.replace(c, p)
                      : (u.home ?? o)
                  };
                })
              }
            ];
          });
        },
        n = () => {
          let e = $(),
            t = J(() => e.value.repo),
            n = J(() => (t.value ? zf(t.value) : null)),
            r = J(() =>
              t.value && !Fs(t.value)
                ? `https://github.com/${t.value}`
                : t.value
            ),
            i = J(() =>
              r.value
                ? e.value.repoLabel
                  ? e.value.repoLabel
                  : n.value === null
                    ? `Source`
                    : n.value
                : null
            );
          return J(() =>
            !r.value || !i.value ? [] : [{ text: i.value, link: r.value }]
          );
        },
        r = e =>
          Ys(e)
            ? Ff(e)
            : e.children
              ? { ...e, children: e.children.map(e => r(e)) }
              : e,
        i = () => {
          let e = $();
          return J(() => (e.value.navbar || []).map(e => r(e)));
        },
        a = I(!1),
        o = i(),
        s = t(),
        c = n(),
        l = J(() => [...o.value, ...s.value, ...c.value]);
      tp($f.MOBILE, e => {
        window.innerWidth < e ? (a.value = !0) : (a.value = !1);
      });
      let u = J(() => $().value.navbarLabel ?? `site navigation`);
      return (e, t) =>
        l.value.length
          ? (U(),
            W(
              `nav`,
              { key: 0, class: `navbar-items`, 'aria-label': u.value },
              [
                (U(!0),
                W(
                  V,
                  null,
                  ei(
                    l.value,
                    e => (
                      U(),
                      W(`div`, { key: e.text, class: `navbar-item` }, [
                        `children` in e
                          ? (U(),
                            G(
                              Zp,
                              {
                                key: 0,
                                item: e,
                                class: A(a.value ? `mobile` : ``)
                              },
                              null,
                              8,
                              [`item`, `class`]
                            ))
                          : (U(),
                            G(L(xu), { key: 1, config: e }, null, 8, [
                              `config`
                            ]))
                      ])
                    )
                  ),
                  128
                ))
              ],
              8,
              Qp
            ))
          : Wa(``, !0);
    }
  }),
  em = [`title`],
  tm = { class: `icon`, focusable: `false`, viewBox: `0 0 32 32` },
  nm = { class: `icon`, focusable: `false`, viewBox: `0 0 32 32` },
  rm = z({
    __name: `ToggleColorModeButton`,
    setup(e) {
      let t = $(),
        n = Ef(),
        r = () => {
          n.value = !n.value;
        };
      return (e, i) => (
        U(),
        W(
          `button`,
          {
            class: `toggle-color-mode-button`,
            title: L(t).toggleColorMode,
            onClick: r
          },
          [
            Rn(
              (U(),
              W(
                `svg`,
                tm,
                [
                  ...(i[0] ||= [
                    Ua(
                      `<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>`,
                      9
                    )
                  ])
                ],
                512
              )),
              [[Zo, !L(n)]]
            ),
            Rn(
              (U(),
              W(
                `svg`,
                nm,
                [
                  ...(i[1] ||= [
                    K(
                      `path`,
                      {
                        d: `M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z`,
                        fill: `currentColor`
                      },
                      null,
                      -1
                    )
                  ])
                ],
                512
              )),
              [[Zo, L(n)]]
            )
          ],
          8,
          em
        )
      );
    }
  }),
  im = [`title`],
  am = z({
    __name: `ToggleSidebarButton`,
    emits: [`toggle`],
    setup(e) {
      let t = $();
      return (e, n) => (
        U(),
        W(
          `div`,
          {
            class: `toggle-sidebar-button`,
            title: L(t).toggleSidebar,
            'aria-expanded': `false`,
            role: `button`,
            tabindex: `0`,
            onClick: (n[0] ||= t => e.$emit(`toggle`))
          },
          [
            ...(n[1] ||= [
              K(
                `div`,
                { class: `icon`, 'aria-hidden': `true` },
                [K(`span`), K(`span`), K(`span`)],
                -1
              )
            ])
          ],
          8,
          im
        )
      );
    }
  }),
  om = z({
    __name: `Navbar`,
    emits: [`toggle-sidebar`],
    setup(e) {
      let t = $(),
        n = I(null),
        r = I(null),
        i = I(0),
        a = J(() => (i.value ? { maxWidth: i.value + `px` } : {})),
        o = (e, t) => {
          let n = e?.ownerDocument?.defaultView?.getComputedStyle(e, null)?.[t],
            r = Number.parseInt(n, 10);
          return Number.isNaN(r) ? 0 : r;
        };
      return (
        tp($f.MOBILE, e => {
          let t = o(n.value, `paddingLeft`) + o(n.value, `paddingRight`);
          window.innerWidth < e
            ? (i.value = 0)
            : (i.value = n.value.offsetWidth - t - (r.value?.offsetWidth || 0));
        }),
        (e, i) => {
          let o = Yr(`NavbarSearch`);
          return (
            U(),
            W(
              `header`,
              { ref_key: `navbar`, ref: n, class: `navbar` },
              [
                q(am, { onToggle: (i[0] ||= t => e.$emit(`toggle-sidebar`)) }),
                K(`span`, { ref_key: `navbarBrand`, ref: r }, [q(Vp)], 512),
                K(
                  `div`,
                  { class: `navbar-items-wrapper`, style: k(a.value) },
                  [
                    B(e.$slots, `before`),
                    q($p, { class: `can-hide` }),
                    B(e.$slots, `after`),
                    L(t).colorModeSwitch
                      ? (U(), G(rm, { key: 0 }))
                      : Wa(``, !0),
                    q(o)
                  ],
                  4
                )
              ],
              512
            )
          );
        }
      );
    }
  }),
  sm = { class: `vp-page-meta` },
  cm = { key: 0, class: `vp-meta-item edit-link` },
  lm = { class: `vp-meta-item git-info` },
  um = { key: 0, class: `vp-meta-item last-updated` },
  dm = { class: `meta-item-label` },
  fm = { class: `meta-item-info` },
  pm = { key: 1, class: `vp-meta-item contributors` },
  mm = { class: `meta-item-label` },
  hm = { class: `meta-item-info` },
  gm = [`title`],
  _m = z({
    __name: `PageMeta`,
    setup(e) {
      let t = () => {
          let e = $(),
            t = ru(),
            n = iu();
          return J(() => {
            if (!(n.value.editLink ?? e.value.editLink ?? !0)) return null;
            let {
              repo: r,
              docsRepo: i = r,
              docsBranch: a = `main`,
              docsDir: o = ``,
              editLinkText: s
            } = e.value;
            if (!i) return null;
            let c = Hf({
              docsRepo: i,
              docsBranch: a,
              docsDir: o,
              filePathRelative: t.value.filePathRelative,
              editLinkPattern:
                n.value.editLinkPattern ?? e.value.editLinkPattern
            });
            return c ? { text: s ?? `Edit this page`, link: c } : null;
          });
        },
        n = () => {
          let e = $(),
            t = ru(),
            n = iu();
          return J(() =>
            !(n.value.lastUpdated ?? e.value.lastUpdated ?? !0) ||
            !t.value.git?.updatedTime
              ? null
              : new Date(t.value.git?.updatedTime).toLocaleString()
          );
        },
        r = () => {
          let e = $(),
            t = ru(),
            n = iu();
          return J(() =>
            (n.value.contributors ?? e.value.contributors ?? !0)
              ? (t.value.git?.contributors ?? null)
              : null
          );
        },
        i = $(),
        a = t(),
        o = n(),
        s = r();
      return (e, t) => {
        let n = Yr(`ClientOnly`);
        return (
          U(),
          W(`footer`, sm, [
            L(a)
              ? (U(),
                W(`div`, cm, [
                  q(
                    L(xu),
                    { class: `label`, config: L(a) },
                    {
                      before: R(() => [
                        ...(t[0] ||= [
                          K(
                            `svg`,
                            { class: `icon`, viewBox: `0 0 1024 1024` },
                            [
                              K(`g`, { fill: `currentColor` }, [
                                K(`path`, {
                                  d: `M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z`
                                }),
                                K(`path`, {
                                  d: `M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z`
                                })
                              ])
                            ],
                            -1
                          )
                        ])
                      ]),
                      _: 1
                    },
                    8,
                    [`config`]
                  )
                ]))
              : Wa(``, !0),
            K(`div`, lm, [
              L(o)
                ? (U(),
                  W(`div`, um, [
                    K(`span`, dm, j(L(i).lastUpdatedText) + `: `, 1),
                    q(n, null, {
                      default: R(() => [K(`span`, fm, j(L(o)), 1)]),
                      _: 1
                    })
                  ]))
                : Wa(``, !0),
              L(s) && L(s).length
                ? (U(),
                  W(`div`, pm, [
                    K(`span`, mm, j(L(i).contributorsText) + `: `, 1),
                    K(`span`, hm, [
                      (U(!0),
                      W(
                        V,
                        null,
                        ei(
                          L(s),
                          (e, t) => (
                            U(),
                            W(
                              V,
                              { key: t },
                              [
                                K(
                                  `span`,
                                  {
                                    class: `contributor`,
                                    title: `email: ${e.email}`
                                  },
                                  j(e.name),
                                  9,
                                  gm
                                ),
                                t === L(s).length - 1
                                  ? Wa(``, !0)
                                  : (U(), W(V, { key: 0 }, [Ha(`, `)], 64))
                              ],
                              64
                            )
                          )
                        ),
                        128
                      ))
                    ])
                  ]))
                : Wa(``, !0)
            ])
          ])
        );
      };
    }
  }),
  vm = [`aria-label`],
  ym = { class: `hint` },
  bm = { class: `link` },
  xm = { class: `hint` },
  Sm = { class: `link` },
  Cm = z({
    __name: `PageNav`,
    setup(e) {
      let t = (e, t) => {
          if (e === !1) return null;
          if (Ys(e)) {
            let { notFound: n, meta: r, path: i } = _u(e, t);
            return n ? { text: i, link: i } : { text: r.title || i, link: i };
          }
          return Js(e) ? { ...e, link: _u(e.link, t).path } : !1;
        },
        n = (e, t, r) => {
          let i = e.findIndex(e => e.link === t);
          if (i !== -1) {
            let t = e[i + r];
            return t?.link ? t : null;
          }
          for (let i of e)
            if (i.children) {
              let e = n(i.children, t, r);
              if (e) return e;
            }
          return null;
        },
        r = iu(),
        i = Wf(),
        a = $(),
        o = fc(),
        s = Af(),
        c = J(() => {
          let e = t(r.value.prev, o.path);
          return e === !1 ? n(i.value, o.path, -1) : e;
        }),
        l = J(() => {
          let e = t(r.value.next, o.path);
          return e === !1 ? n(i.value, o.path, 1) : e;
        }),
        u = J(() => $().value.pageNavbarLabel ?? `page navigation`);
      return (
        Xu(`keydown`, e => {
          e.altKey &&
            (e.key === `ArrowRight`
              ? l.value && (s(l.value.link), e.preventDefault())
              : e.key === `ArrowLeft` &&
                c.value &&
                (s(c.value.link), e.preventDefault()));
        }),
        (e, t) =>
          c.value || l.value
            ? (U(),
              W(
                `nav`,
                { key: 0, class: `vp-page-nav`, 'aria-label': u.value },
                [
                  c.value
                    ? (U(),
                      G(
                        L(xu),
                        { key: 0, class: `prev`, config: c.value },
                        {
                          default: R(() => [
                            K(`div`, ym, [
                              (t[0] ||= K(
                                `span`,
                                { class: `arrow left` },
                                null,
                                -1
                              )),
                              Ha(` ` + j(L(a).prev ?? `Prev`), 1)
                            ]),
                            K(`div`, bm, [K(`span`, null, j(c.value.text), 1)])
                          ]),
                          _: 1
                        },
                        8,
                        [`config`]
                      ))
                    : Wa(``, !0),
                  l.value
                    ? (U(),
                      G(
                        L(xu),
                        { key: 1, class: `next`, config: l.value },
                        {
                          default: R(() => [
                            K(`div`, xm, [
                              Ha(j(L(a).next ?? `Next`) + ` `, 1),
                              (t[1] ||= K(
                                `span`,
                                { class: `arrow right` },
                                null,
                                -1
                              ))
                            ]),
                            K(`div`, Sm, [K(`span`, null, j(l.value.text), 1)])
                          ]),
                          _: 1
                        },
                        8,
                        [`config`]
                      ))
                    : Wa(``, !0)
                ],
                8,
                vm
              ))
            : Wa(``, !0)
      );
    }
  }),
  wm = { class: `page` },
  Tm = { class: `theme-default-content` },
  Em = z({
    __name: `Page`,
    setup(e) {
      return (e, t) => {
        let n = Yr(`Content`);
        return (
          U(),
          W(`main`, wm, [
            B(e.$slots, `top`),
            K(`div`, Tm, [
              B(e.$slots, `content-top`),
              q(n),
              B(e.$slots, `content-bottom`)
            ]),
            q(_m),
            q(Cm),
            B(e.$slots, `bottom`)
          ])
        );
      };
    }
  }),
  Dm = { class: `sidebar-item-children` },
  Om = z({
    __name: `SidebarItem`,
    props: {
      item: { type: Object, required: !0 },
      depth: { type: Number, required: !1, default: 0 }
    },
    setup(e) {
      let { item: t, depth: n } = tn(e),
        r = fc(),
        i = dc(),
        a = J(() => Rf(t.value, r)),
        o = J(() => ({
          'sidebar-item': !0,
          'sidebar-heading': n.value === 0,
          active: a.value,
          collapsible: t.value.collapsible
        })),
        s = J(() => (t.value.collapsible ? a.value : !0)),
        [c, l] = Ku(s.value),
        u = e => {
          t.value.collapsible && (e.preventDefault(), l());
        },
        d = i.afterEach(e => {
          En(() => {
            c.value = s.value;
          });
        });
      return (
        Hr(() => {
          d();
        }),
        (e, r) => {
          let i = Yr(`SidebarItem`, !0);
          return (
            U(),
            W(`li`, null, [
              L(t).link
                ? (U(),
                  G(
                    L(xu),
                    { key: 0, class: A(o.value), config: L(t) },
                    null,
                    8,
                    [`class`, `config`]
                  ))
                : (U(),
                  W(
                    `p`,
                    {
                      key: 1,
                      tabindex: `0`,
                      class: A(o.value),
                      onClick: u,
                      onKeydown: Es(u, [`enter`])
                    },
                    [
                      Ha(j(L(t).text) + ` `, 1),
                      L(t).collapsible
                        ? (U(),
                          W(
                            `span`,
                            {
                              key: 0,
                              class: A([`arrow`, L(c) ? `down` : `right`])
                            },
                            null,
                            2
                          ))
                        : Wa(``, !0)
                    ],
                    34
                  )),
              L(t).children?.length
                ? (U(),
                  G(
                    Hp,
                    { key: 2 },
                    {
                      default: R(() => [
                        Rn(
                          K(
                            `ul`,
                            Dm,
                            [
                              (U(!0),
                              W(
                                V,
                                null,
                                ei(
                                  L(t).children,
                                  e => (
                                    U(),
                                    G(
                                      i,
                                      {
                                        key: `${L(n)}${e.text}${e.link}`,
                                        item: e,
                                        depth: L(n) + 1
                                      },
                                      null,
                                      8,
                                      [`item`, `depth`]
                                    )
                                  )
                                ),
                                128
                              ))
                            ],
                            512
                          ),
                          [[Zo, L(c)]]
                        )
                      ]),
                      _: 1
                    }
                  ))
                : Wa(``, !0)
            ])
          );
        }
      );
    }
  }),
  km = { key: 0, class: `sidebar-items` },
  Am = z({
    __name: `SidebarItems`,
    setup(e) {
      let t = fc(),
        n = Wf();
      return (
        zr(() => {
          Gn(
            () => t.hash,
            e => {
              let n = document.querySelector(`.sidebar`);
              if (!n) return;
              let r = document.querySelector(
                `.sidebar a.sidebar-item[href="${t.path}${e}"]`
              );
              if (!r) return;
              let { top: i, height: a } = n.getBoundingClientRect(),
                { top: o, height: s } = r.getBoundingClientRect();
              o < i
                ? r.scrollIntoView(!0)
                : o + s > i + a && r.scrollIntoView(!1);
            }
          );
        }),
        (e, t) =>
          L(n).length
            ? (U(),
              W(`ul`, km, [
                (U(!0),
                W(
                  V,
                  null,
                  ei(
                    L(n),
                    e => (
                      U(),
                      G(Om, { key: `${e.text}${e.link}`, item: e }, null, 8, [
                        `item`
                      ])
                    )
                  ),
                  128
                ))
              ]))
            : Wa(``, !0)
      );
    }
  }),
  jm = { class: `sidebar` },
  Mm = z({
    __name: `Sidebar`,
    setup(e) {
      return (e, t) => (
        U(),
        W(`aside`, jm, [
          q($p),
          B(e.$slots, `top`),
          q(Am),
          B(e.$slots, `bottom`)
        ])
      );
    }
  }),
  Nm = z({
    __name: `Layout`,
    setup(e) {
      let t = ru(),
        n = iu(),
        r = $(),
        i = J(() => n.value.navbar !== !1 && r.value.navbar !== !1),
        a = Wf(),
        o = I(!1),
        s = e => {
          o.value = typeof e == `boolean` ? e : !o.value;
        },
        c = { x: 0, y: 0 },
        l = e => {
          ((c.x = e.changedTouches[0].clientX),
            (c.y = e.changedTouches[0].clientY));
        },
        u = e => {
          let t = e.changedTouches[0].clientX - c.x,
            n = e.changedTouches[0].clientY - c.y;
          Math.abs(t) > Math.abs(n) &&
            Math.abs(t) > 40 &&
            (t > 0 && c.x <= 80 ? s(!0) : s(!1));
        },
        d = J(() => n.value.externalLinkIcon ?? r.externalLinkIcon ?? !0),
        f = J(() => [
          {
            'no-navbar': !i.value,
            'no-sidebar': !a.value.length,
            'sidebar-open': o.value,
            'external-link-icon': d.value
          },
          n.value.pageClass
        ]),
        p;
      (zr(() => {
        p = dc().afterEach(() => {
          s(!1);
        });
      }),
        Ur(() => {
          p();
        }));
      let m = Pf(),
        h = m.resolve,
        g = m.pending;
      return (e, r) => (
        U(),
        W(
          `div`,
          {
            class: A([`theme-container`, f.value]),
            onTouchstart: l,
            onTouchend: u
          },
          [
            B(e.$slots, `navbar`, {}, () => [
              i.value
                ? (U(),
                  G(
                    om,
                    { key: 0, onToggleSidebar: s },
                    {
                      before: R(() => [B(e.$slots, `navbar-before`)]),
                      after: R(() => [B(e.$slots, `navbar-after`)]),
                      _: 3
                    }
                  ))
                : Wa(``, !0)
            ]),
            K(`div`, { class: `sidebar-mask`, onClick: (r[0] ||= e => s(!1)) }),
            B(e.$slots, `sidebar`, {}, () => [
              q(Mm, null, {
                top: R(() => [B(e.$slots, `sidebar-top`)]),
                bottom: R(() => [B(e.$slots, `sidebar-bottom`)]),
                _: 3
              })
            ]),
            B(e.$slots, `page`, {}, () => [
              L(n).home
                ? (U(), G(zp, { key: 0 }))
                : (U(),
                  G(
                    No,
                    {
                      key: 1,
                      name: `fade-slide-y`,
                      mode: `out-in`,
                      onBeforeEnter: L(h),
                      onBeforeLeave: L(g)
                    },
                    {
                      default: R(() => [
                        (U(),
                        G(
                          Em,
                          { key: L(t).path },
                          {
                            top: R(() => [B(e.$slots, `page-top`)]),
                            'content-top': R(() => [
                              B(e.$slots, `page-content-top`)
                            ]),
                            'content-bottom': R(() => [
                              B(e.$slots, `page-content-bottom`)
                            ]),
                            bottom: R(() => [B(e.$slots, `page-bottom`)]),
                            _: 3
                          }
                        ))
                      ]),
                      _: 3
                    },
                    8,
                    [`onBeforeEnter`, `onBeforeLeave`]
                  ))
            ])
          ],
          34
        )
      );
    }
  }),
  Pm = { class: `theme-container` },
  Fm = { class: `page` },
  Im = { class: `theme-default-content` },
  Lm = z({
    __name: `NotFound`,
    setup(e) {
      let t = cu(),
        n = $(),
        r = n.value.notFound ?? [`Not Found`],
        i = () => r[Math.floor(Math.random() * r.length)],
        a = n.value.home ?? t.value,
        o = n.value.backToHome ?? `Back to home`;
      return (e, t) => (
        U(),
        W(`div`, Pm, [
          K(`main`, Fm, [
            K(`div`, Im, [
              (t[0] ||= K(`h1`, null, `404`, -1)),
              K(`blockquote`, null, j(i()), 1),
              q(
                L(bu),
                { to: L(a) },
                { default: R(() => [Ha(j(L(o)), 1)]), _: 1 },
                8,
                [`to`]
              )
            ])
          ])
        ])
      );
    }
  }),
  Rm = t({ default: () => zm }),
  zm = Du({
    enhance({ app: e, router: t }) {
      (Ed(`Badge`) || e.component(`Badge`, xf),
        Ed(`CodeGroup`) || e.component(`CodeGroup`, Sf),
        Ed(`CodeGroupItem`) || e.component(`CodeGroupItem`, Cf),
        e.component(`NavbarSearch`, () => {
          let t = e.component(`Docsearch`) || e.component(`SearchBox`);
          return t ? Y(t) : null;
        }));
      let n = t.options.scrollBehavior;
      t.options.scrollBehavior = async (...e) => (await Pf().wait(), n(...e));
    },
    setup() {
      (Df(), Gf());
    },
    layouts: { Layout: Nm, NotFound: Lm }
  }),
  Bm = [vd, jd, Id, Xd, ff, yf, Rm].map(e => e.default).filter(Boolean),
  Vm = Jt(
    JSON.parse(
      `{"base":"/design-system/","lang":"ru-RU","title":"Design System","description":"Vue 3 дизайн-система с TypeScript, Composition API и 60+ компонентов","head":[],"locales":{"/":{"lang":"ru-RU","title":"Design System","description":"Vue 3 дизайн-система с TypeScript, Composition API и 60+ компонентов"}}}`
    )
  ),
  Hm = gl,
  Um = () => {
    let e = Jl({
      history: Hm(Ks(`/design-system/`)),
      routes: [
        { name: `vuepress-route`, path: `/:catchAll(.*)`, components: {} }
      ],
      scrollBehavior: (e, t, n) => n || (e.hash ? { el: e.hash } : { top: 0 })
    });
    return (
      e.beforeResolve(async (e, t) => {
        if (e.path !== t.path || t === Gc) {
          let t = _u(e.fullPath);
          if (t.path !== e.fullPath) return t.path;
          let n = await t.loader();
          e.meta = { ...t.meta, _pageChunk: n };
        } else e.path === t.path && (e.meta = t.meta);
      }),
      e
    );
  },
  Wm = e => {
    (e.component(`ClientOnly`, Su),
      e.component(`Content`, wu),
      e.component(`RouteLink`, bu));
  },
  Gm = (e, t, n) => {
    let r = J(() => t.currentRoute.value.path),
      i = en((e, n) => ({
        get() {
          return (e(), t.currentRoute.value.meta._pageChunk);
        },
        set(e) {
          ((t.currentRoute.value.meta._pageChunk = e), n());
        }
      })),
      a = J(() => Eu.resolveLayouts(n)),
      o = J(() => Eu.resolveRouteLocale(Vm.value.locales, r.value)),
      s = J(() => Eu.resolveSiteLocaleData(Vm.value, o.value)),
      c = J(() => i.value.default),
      l = J(() => i.value._pageData),
      u = J(() => l.value.frontmatter),
      d = J(() => Eu.resolvePageHeadTitle(l.value, s.value)),
      f = J(() => Eu.resolvePageHead(d.value, u.value, s.value)),
      p = J(() => Eu.resolvePageLang(l.value, s.value)),
      m = {
        layouts: a,
        pageData: l,
        pageComponent: c,
        pageFrontmatter: u,
        pageHead: f,
        pageHeadTitle: d,
        pageLang: p,
        pageLayout: J(() => Eu.resolvePageLayout(l.value, a.value)),
        redirects: mu,
        routeLocale: o,
        routePath: r,
        routes: hu,
        siteData: Vm,
        siteLocaleData: s,
        frontmatter: u,
        head: f,
        headTitle: d,
        lang: p,
        page: l,
        site: Vm,
        siteLocale: s
      };
    return (
      e.provide(eu, m),
      Object.defineProperties(e.config.globalProperties, {
        $pageFrontmatter: { get: () => u.value },
        $pageHead: { get: () => f.value },
        $pageHeadTitle: { get: () => d.value },
        $pageLang: { get: () => p.value },
        $pageData: { get: () => l.value },
        $routeLocale: { get: () => o.value },
        $withBase: { get: () => Ou },
        $frontmatter: { get: () => u.value },
        $head: { get: () => f.value },
        $headTitle: { get: () => d.value },
        $lang: { get: () => p.value },
        $page: { get: () => l.value },
        $site: { get: () => Vm.value },
        $siteLocale: { get: () => s.value }
      }),
      m
    );
  },
  Km = ([e, t, n = ``]) => {
    let r = `head > ${e}${Object.entries(t)
      .map(([e, t]) =>
        Ys(t) ? `[${e}=${JSON.stringify(t)}]` : t ? `[${e}]` : ``
      )
      .join(``)}`;
    return (
      Array.from(document.querySelectorAll(r)).find(e => e.innerText === n) ??
      null
    );
  },
  qm = ([e, t, n]) => {
    if (!Ys(e)) return null;
    let r = document.createElement(e);
    return (
      Js(t) &&
        Object.entries(t).forEach(([e, t]) => {
          Ys(t) ? r.setAttribute(e, t) : t && r.setAttribute(e, ``);
        }),
      Ys(n) && r.appendChild(document.createTextNode(n)),
      r
    );
  },
  Jm = () => {
    let e = au(),
      t = ou(),
      n = [],
      r = () => {
        e.value.forEach(e => {
          let t = Km(e);
          t && n.push(t);
        });
      },
      i = () => {
        let t = [];
        return (
          e.value.forEach(e => {
            let n = qm(e);
            n && t.push(n);
          }),
          t
        );
      },
      a = () => {
        document.documentElement.lang = t.value;
        let e = i();
        (n.forEach((t, r) => {
          let i = e.findIndex(e => t.isEqualNode(e));
          i === -1 ? (t.remove(), delete n[r]) : e.splice(i, 1);
        }),
          e.forEach(e => document.head.appendChild(e)),
          (n = [...n.filter(e => !!e), ...e]));
      };
    (Bn(pu, a),
      zr(() => {
        (r(), Gn(e, a, { immediate: !1 }));
      }));
  },
  Ym = js,
  Xm = async () => {
    let e = Ym({
        name: `Vuepress`,
        setup() {
          Jm();
          for (let e of Bm) e.setup?.();
          let e = Bm.flatMap(({ rootComponents: e = [] }) => e.map(e => Y(e))),
            t = su();
          return () => [Y(t.value), e];
        }
      }),
      t = Um();
    (Wm(e), Gm(e, t, Bm));
    for (let n of Bm) await n.enhance?.({ app: e, router: t, siteData: Vm });
    return (e.use(t), { app: e, router: t });
  };
Xm().then(({ app: e, router: t }) => {
  t.isReady().then(() => {
    e.mount(`#app`);
  });
});
export {
  j as S,
  Zr as _,
  J as a,
  A as b,
  Wa as c,
  Xm as createVueApp,
  Ha as d,
  q as f,
  Yr as g,
  ei as h,
  V as i,
  W as l,
  U as m,
  cp as n,
  K as o,
  z as p,
  ip as r,
  G as s,
  Ap as t,
  Ua as u,
  R as v,
  k as x,
  L as y
};
