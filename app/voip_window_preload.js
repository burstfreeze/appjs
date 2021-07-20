/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(() => {
    "use strict";
    var e = {
            5131: (e, t, n) => {
                var r = n(5131).default;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = m;
                var o, i = void 0 !== r ? r : null,
                    l = 0,
                    a = [],
                    s = [],
                    c = [],
                    u = {
                        sentinel: "CONTINUE_AS_IF_NO_HANDLER"
                    },
                    f = {
                        sentinel: "RETRY_ASYNCHRONOUSLY"
                    },
                    h = {
                        sentinel: "TO_STRING"
                    },
                    v = {
                        sentinel: "DID_ERROR"
                    },
                    _ = null,
                    d = [],
                    p = 16,
                    g = 64,
                    y = 128,
                    w = 512;

                function m(e, t) {
                    var n = this;
                    this._flags = 0, this._value = void 0, this._onFulfilled = void 0, this._onRejected = void 0, this._context = void 0, this._resolveLevel = 0, this._control = void 0, this.x = void 0, this._thenableParent = null, this._parent = void 0, this._child = void 0, this._children = void 0, this.control = void 0, t && (this._context = t.this), "function" == typeof e && (this._onFulfilled = e, this._flags |= 4, this._flags |= 256, Q(e, this._context, (function(e) {
                        return U(n, 0, !0, !1, e)
                    }), (function(e) {
                        return U(n, 0, !1, !1, e)
                    })))
                }

                function b(e) {
                    if (void 0 === e) return o;
                    if (M(e)) return e;
                    var t = new m;
                    return U(t, 0, !0, !1, e), K(t, w), t
                }

                function E(e) {
                    var t = new m;
                    return t._value = e, K(t, 514), d.push(t), t
                }

                function R(e) {
                    var t = arguments.length - 1;
                    if (0 === t) return this.then(void 0, e);
                    for (var n = new Array(t), r = 0; r < t; r++) n[r] = H(arguments[r]);
                    var o = q(n, arguments[t]),
                        i = I(this, void 0, o);
                    return i._onRejected && K(i, y), i
                }

                function C(e, t) {
                    this.errors = e || [], this.message = t || `${this.errors.length} errors`
                }

                function j(e) {
                    var t = "";
                    if (e._flags & y) t = (e._onFulfilled || e._onRejected).call(e._context, h);
                    else if (e._control) t = `.addRawControl(${e._control.name}, ${e._control.foo})`;
                    else if (e._flags & p) t = `.endWithControls(${Object.keys(e.control)})`;
                    else if (e._flags & w) t = 1 & e._flags ? `Promise.resolve(${void 0===e._value?"":e._value})` : `Promise.reject(${void 0===e._value?"":e._value})`;
                    else if (256 & e._flags) switch (3 & e._flags) {
                        case 2:
                        case 0:
                        case 1:
                            t = `new Promise(${e._onFulfilled})`
                    } else e._onFulfilled && e._onRejected ? t = `.then(${e._onFulfilled}, ${e._onRejected})` : e._onFulfilled ? t = `.then(${e._onFulfilled})` : e._onRejected && (t = `.catch(${e._onRejected})`);
                    return t
                }

                function $(e) {
                    this.message = e || "StackPromise timed out"
                }

                function S(e, t, n, r) {
                    this.name = e, this.foo = t, this.lightning = !!n, this.canRunMultipleTimes = !!r
                }

                function x(e, t) {
                    return function() {
                        for (var n, r, o = e._parent; o && !(3 & o._flags) && !(o._flags & p); o = o._parent) !o._control || o._control.name !== t || 4 & o._flags || (n = o);
                        if (!n) return m.NO_ACTIVE_CONTROL;
                        if (n._control.canRunMultipleTimes || K(n, 4), arguments.length > 0) {
                            r = new Array(arguments.length);
                            for (var i = 0; i < arguments.length; i++) r[i] = arguments[i]
                        }
                        return n._control.foo.call(n._context, (function(e) {
                            return W(n, n._resolveLevel, !0, !1, e)
                        }), (function(e) {
                            return W(n, n._resolveLevel, !1, !1, e)
                        }), n._parent, r)
                    }
                }

                function T(e) {
                    this.message = e, this.stack = new Error(e || this.name).stack
                }
                m.resolve = b, m.reject = E, m.prototype.then = function(e, t) {
                    "function" != typeof e && (e = void 0), "function" != typeof t && (t = void 0);
                    var n = new m;
                    n._onFulfilled = e, n._onRejected = t, n._context = this._context, this._flags & g && K(n, g);
                    var r = 3 & this._flags;
                    return 0 === r ? A(this, n) : (K(this, 8), (1 === r ? e : t) ? (n._parent = this, s.push(n), L()) : (n._parent = this, K(n, r), n._value = this._value, 2 === r && d.push(n))), n
                }, m.prototype.catch = R, m.prototype.catchType = R, m.prototype.catchTypes = R, m.prototype.catchTypes3 = R, m.prototype.catchEqualTo = R, m.prototype.catchConditional = R, m.prototype.end = function(e) {
                    var t = this.then();
                    if (K(t, p), t.control = {}, t._context = void 0, e) {
                        var n = e.controls;
                        if (n)
                            for (var r = 0; r < n.length; r++) {
                                var o = n[r];
                                t.control[o] = x(t, o)
                            }
                        return t
                    }
                }, m.prototype.endWithControls = function() {
                    var e = this.then();
                    K(e, p), e.control = {}, e._context = void 0;
                    for (var t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        e.control[n] = x(e, n)
                    }
                    return e
                }, m.all = function(e) {
                    return new m((function(t, n) {
                        var r = e.length;
                        if (0 !== r)
                            for (var o = new Array(e.length), i = 0; i < e.length; i++) o[i] = I(e[i], l, n);
                        else t([]);

                        function l(e) {
                            if (0 == --r) {
                                for (var n = [], i = 0; i < o.length; i++) {
                                    var l = o[i];
                                    n.push(l && 3 & l._flags ? l._value : e)
                                }
                                t(n)
                            }
                            return e
                        }
                    }))
                }, m.allSettled = function(e) {
                    return new m((function(t) {
                        var n = Array.from(e),
                            r = n.length;
                        if (0 !== r)
                            for (var o = new Array(n.length), i = s(!1), l = s(!0), a = 0; a < n.length; a++) o[a] = I(n[a], i, l);
                        else t([]);

                        function s(e) {
                            return function(n) {
                                var i = e ? {
                                    status: "rejected",
                                    reason: n
                                } : {
                                    status: "fulfilled",
                                    value: n
                                };
                                if (0 == --r) {
                                    for (var l = [], a = 0; a < o.length; a++) {
                                        var s = o[a];
                                        l.push(s && 3 & s._flags ? s._value : i)
                                    }
                                    t(l)
                                }
                                return i
                            }
                        }
                    }))
                }, m.race = function(e) {
                    var t = F(e);
                    if (M(t)) {
                        var n = t.then((function(e) {
                            return m.race(e)
                        }));
                        return n._context = void 0, n._flags &= -65, n
                    }
                    return new m((function(e, n) {
                        for (var r = 0; r < t.length; r++) {
                            var o = F(t[r]);
                            if (!M(o) || 3 & o._flags)
                                for (e(o), r++; r < t.length; r++) {
                                    var i = t[r];
                                    M(i) && K(i, 8)
                                } else o.then(e, n)
                        }
                    }))
                }, C.prototype = Object.create(Error.prototype, {
                    name: {
                        value: "AggregateError"
                    }
                }), m.AggregateError = C, m.onPossiblyUnhandledRejection = function(e, t) {
                    console.error(`StackPromise did not catch ${e}`, t, e)
                }, m.prototype.toString = function() {
                    for (var e, t = [], n = this, r = !1; n; n = n._parent) {
                        e = n, !r && 3 & n._flags && (r = !0, n._flags & w || (1 & n._flags ? t.push(`[resolved value: ${n._value}]`) : t.push(`[rejected reason: ${n._value}]`)));
                        var o = j(n);
                        1024 & n._flags && (o = `~${o}`), t.push(o)
                    }
                    return t.reverse(), 768 & e._flags || (t[0] = `[Promise]${t[0]}`), t.join("\n")
                }, m.prototype.timeout = function(e, t) {
                    if (0 != (3 & this._flags)) return this.then();
                    var n;

                    function r(r) {
                        return r === h ? `.timeout(${e}, ${t})` : (clearTimeout(n), u)
                    }
                    var o = this.then(r, r);
                    return K(o, 160), n = setTimeout((function(e, t) {
                        3 & e._flags || W(e, 0, !1, !1, t instanceof Error ? t : new $(t))
                    }), e, o, t), o
                }, $.prototype = Object.create(Error.prototype, {
                    name: {
                        value: "TimeoutError"
                    }
                }), m.TimeoutError = $, m.prototype.isFulfilled = function() {
                    return !!(1 & this._flags)
                }, m.prototype.isRejected = function() {
                    return !!(2 & this._flags)
                }, m.prototype.isPending = function() {
                    return !(3 & this._flags)
                }, m.prototype.value = function() {
                    if (1 & this._flags) return this._value;
                    throw new Error(2 & this._flags ? "value() called on StackPromise that was rejected" : "value() called on StackPromise that is pending")
                }, m.prototype.reason = function() {
                    if (2 & this._flags) return this._value;
                    throw new Error(1 & this._flags ? "reason() called on StackPromise that was fulfilled, not rejected" : "reason() called on StackPromise that is pending")
                }, m.prototype.checkpoint = function(e) {
                    function t(t) {
                        return t === h ? `.checkpoint(${e})` : 2 & e._flags ? e : u
                    }
                    e = b(e);
                    var n = this.then(t, t);
                    return K(n, y), n
                }, m.prototype.finally = function(e) {
                    function t(t) {
                        return t === h ? `.finally(${e})` : (e.call(this, t), u)
                    }
                    return K(this.then(t, t), y)
                }, m.prototype.tap = function(e) {
                    return K("function" != typeof e ? this.then(k) : this.then((function(t) {
                        return t === h ? `.tap(${e})` : (e.call(this, t), u)
                    })), y)
                }, m.prototype.spread = function(e) {
                    var t = this.then((function(t) {
                        return t === h ? `.spread(${e})` : e.apply(this, t)
                    }));
                    return K(t, y), t
                }, m.prototype.throw = function(e) {
                    return this.then((function() {
                        return E(e)
                    }))
                }, m.Control = S, m.NO_ACTIVE_CONTROL = new Error("No active control was found."), m.prototype.addControl = function(e) {
                    if (!(e instanceof S)) throw new Error(`addControl must be given Control, but got ${e}`);
                    var t = this.then(e.lightning ? void 0 : k);
                    return t._control = e, t
                }, m.prototype.addRawControl = function(e, t, n, r) {
                    return this.addControl(new S(e, t, n, r))
                }, m.prototype.addResolveControl = function(e, t, n, r) {
                    return this.addControl(new S(e, (function(e, n, r, o) {
                        try {
                            e(t.apply(this, o))
                        } catch (e) {
                            n(e)
                        }
                    }), n, r))
                }, m.prototype.addRejectControl = function(e, t, n, r) {
                    return this.addControl(new S(e, (function(e, n, r, o) {
                        try {
                            n(t.apply(this, o))
                        } catch (e) {
                            n(e)
                        }
                    }), n, r))
                }, T.prototype = Object.create(Error.prototype, {
                    name: {
                        value: "CancellationError"
                    }
                }), m.CancellationError = T;
                var P, O = new S("cancel", (function(e, t, n, r) {
                    t(new T(r && r[0]))
                }), !1, !1);

                function L() {
                    var e, t;
                    0 === l && (s.length || d.length) && (l = 1, P || (t = 0, P = "undefined" == typeof MutationObserver || self && self.navigator && self.navigator.standalone ? i ? function() {
                        i.resolve().then(V)
                    } : "function" == typeof setImmediate ? function() {
                        setImmediate(V)
                    } : function() {
                        setTimeout(V, 0)
                    } : (e = document.createTextNode(""), new MutationObserver(V).observe(e, {
                        characterData: !0
                    }), function() {
                        e.data = t = 1 - t
                    })), P())
                }

                function k(e) {
                    return e === h ? ".tap()" : u
                }

                function A(e, t) {
                    K(e, 8), t._parent = e, e._children ? e._children.push(t) : e._child ? (e._children = [e._child, t], e._child = void 0) : e._child = t
                }

                function N(e) {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var t;
                        try {
                            t = e.then
                        } catch (e) {
                            return _ = e, v
                        }
                        if ("function" == typeof t) return t
                    }
                }

                function F(e) {
                    if (!e || M(e)) return e;
                    var t = N(e);
                    if (t === v) return E(_);
                    if (t) {
                        var n = new m((function(n, r) {
                            t.call(e, n, r)
                        }));
                        return n._thenableParent = e, n
                    }
                    return e
                }

                function M(e) {
                    return e instanceof m
                }

                function I(e, t, n) {
                    var r, o, i, l, a = M(e = F(e)),
                        s = !1;
                    if (a) {
                        if (!(3 & e._flags)) return K(e.then(t, n), 32);
                        K(e, 8), s = !!(e._flags & g), i = e._context, r = 1 & e._flags ? t : n, o = e._value
                    } else r = t, o = e;
                    if (!r) return b(e).then();
                    if ((o = J(r, i, o, !0)) === v) l = E(_);
                    else {
                        if (o === f) return b(e).then(t, n);
                        if (o === u) return a ? e.then() : b(e);
                        l = b(o)
                    }
                    return s && (l = l.cancellable()), void 0 !== i && ((l = l.then())._context = i), l
                }

                function U(e, t, n, r, o) {
                    if (t === e._resolveLevel) {
                        var i = ++e._resolveLevel;
                        if (K(e, 4), e._thenableParent = null, n)
                            if (o === e) e._parent = void 0, G(e, !1, r, new TypeError("promise resolved to itself"));
                            else if (M(o)) {
                            var l = 3 & o._flags;
                            0 === l ? A(o, e) : (e._parent = o, K(e, 1024), K(o, 8), G(e, 1 === l, r, o._value))
                        } else {
                            var a = N(o);
                            a === v ? (e._parent = void 0, G(e, !1, r, _)) : a ? (e._parent = void 0, e._thenableParent = o, Q(a, o, (function(t) {
                                return U(e, i, !0, !1, t)
                            }), (function(t) {
                                return U(e, i, !1, !1, t)
                            }))) : G(e, !0, r, o)
                        } else G(e, !1, r, o)
                    }
                }

                function W(e, t, n, r, o) {
                    t === e._resolveLevel && (D(e), U(e, t, n, r, o))
                }

                function D(e) {
                    if (e._parent) {
                        var t = e._parent;
                        if (e._parent = void 0, t._child === e) t._child = void 0;
                        else if (t._children) {
                            for (var n = t._children, r = 0; r < n.length; r++)
                                if (n[r] === e) {
                                    n.splice(r, 1);
                                    break
                                } 0 === n.length && (t._children = void 0)
                        }
                    }
                }

                function H(e) {
                    if (null == e) throw new Error(`Invalid .catch guard ${e}`);
                    if ("function" == typeof e) return e;
                    if ("object" == typeof e) throw new Error("Object guards in .catch are currently unsupported");
                    return function(t) {
                        return t === e
                    }
                }

                function q(e, t) {
                    return function(n, r) {
                        return n === h ? `.catch(..., ${t})` : e && ! function(e, t) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                if (r === Error || r.prototype instanceof Error) {
                                    if (t instanceof r) return !0
                                } else if (r(t)) return !0
                            }
                            return !1
                        }(e, n) ? u : r ? f : t.call(this, n)
                    }
                }

                function G(e, t, n, r) {
                    if (K(e, 4 | (t ? 1 : 2)), e._value = r, e._child) Y(e._child, t, n, r), e._child = void 0;
                    else if (e._children) {
                        var o = e._children;
                        e._children = void 0;
                        for (var i = 0; i < o.length; i++) Y(o[i], t, n, r)
                    } else t || 8 & e._flags || d.push(e)
                }

                function Y(e, t, n, r) {
                    e._resolveLevel++;
                    var o = z(e, t);
                    if (o && 32 & e._flags) {
                        K(e, 4);
                        var i = J(o, e._context, r, !0);
                        if (i !== f) return void(i === v ? (e._parent = void 0, G(e, !1, n, _)) : i === u ? G(e, t, n, r) : (e._parent = void 0, U(e, e._resolveLevel, !0, n, i)));
                        e._flags &= -5
                    }
                    o ? ((n ? c : s).push(e), L()) : G(e, t, n, r)
                }

                function B(e, t) {
                    for (; 0 !== e.length;) t.push(e.pop())
                }

                function V() {
                    for (; 0 !== a.length || 0 !== s.length;) {
                        0 === a.length && B(s, a);
                        var e = a.pop(),
                            t = e._parent,
                            n = !!(t && 1 & t._flags),
                            r = t && t._value,
                            o = z(e, n);
                        if (K(e, 4), o) {
                            var i = void 0;
                            do {
                                i = J(o, e._context, r, !1)
                            } while (i === f);
                            i === v ? (r = _, n = !1, e._parent = void 0) : i !== u && (r = i, n = !0, e._parent = void 0)
                        }
                        3 & e._flags || (U(e, e._resolveLevel, n, !0, r), B(c, a))
                    }
                    for (l--; 0 !== d.length;) {
                        var h = d.pop();
                        8 & h._flags || m.onPossiblyUnhandledRejection(h._value, h)
                    }
                }

                function Q(e, t, n, r) {
                    try {
                        e.call(t, n, r)
                    } catch (e) {
                        r(e)
                    }
                }

                function z(e, t) {
                    if (!(4 & e._flags)) return t ? e._onFulfilled : e._onRejected
                }

                function J(e, t, n, r) {
                    try {
                        return r ? e.call(t, n, !0) : e.call(t, n)
                    } catch (e) {
                        return _ = e, v
                    }
                }

                function K(e, t) {
                    return e._flags |= t, e
                }
                m.prototype.addCancelControl = function() {
                    return K(this.addControl(O), g)
                }, m.prototype.cancellable = function() {
                    return K(this.then(), g)
                }, m.prototype.uncancellable = function() {
                    var e = this.then();
                    return e._flags &= -65, e
                }, m.prototype.cancel = function(e) {
                    for (var t, n = this; n && !(3 & n._flags); n = n._parent) n._flags & g && (t = n);
                    if (t)
                        if (void 0 === e && (e = new T), z(t, !1)) {
                            var r = new m;
                            D(t), A(r, t), W(r, 0, !1, !1, e)
                        } else W(t, t._resolveLevel, !1, !1, e)
                }, U(o = new m, 0, !0, !1, void 0)
            },
            8933: e => {
                e.exports = require("electron")
            },
            3838: e => {
                e.exports = require("node-shared-mem")
            }
        },
        t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r](i, i.exports, n), i.exports
    }(() => {
        var e, t = n(5131).default,
            r = n(8933);
        e = n(3838).SharedMemory;
        var o = r.remote.getCurrentWebContents(),
            i = new Map,
            l = function(e, t) {
                var n = i.get(e) || new Set;
                n.add(t), i.set(e, n)
            },
            a = l,
            s = function(e, t) {
                (i.get(e) || new Set).delete(t)
            },
            c = s,
            u = o.session.cookies.set;
        r.ipcRenderer.on("__electron_event__", (function(e, t) {
            for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
            var l = i.get(t) || new Set;
            l.forEach((function(e) {
                return e.apply(void 0, r)
            }))
        }));
        var f = process;
        process.once("loaded", (function() {
            window.Native = {
                addListener: l,
                removeListener: s,
                addEventListener: a,
                removeEventListener: c,
                setCookie: u,
                ipcRenderer: r.ipcRenderer,
                webFrame: null,
                nativeTheme: null,
                appGetLocale: null,
                sysPrefGetMediaAccessStatus: function() {
                    return "not-determined"
                },
                sysPrefAskForMediaAccess: function() {
                    return t.resolve(!1)
                },
                openExternalLink: null,
                openSysPrefs: null,
                net: null,
                Buffer,
                path: null,
                Notification: null,
                spellChecker: null,
                UpgradeTestHelper: null,
                DocUtilsPreload: null,
                MacOSNotificationState: null,
                WindowsFocusAssist: null,
                WindowsNotificationState: null,
                WindowsQuiteHours: null,
                SharedMemory: e
            }, global.process = {}, global.process.platform = f.platform, global.process.mas = f.mas, global.process.env = f.env, global.process.versions = f.versions, global.process.windowsStore = f.windowsStore, global.process.type = f.type
        }))
    })()
})();