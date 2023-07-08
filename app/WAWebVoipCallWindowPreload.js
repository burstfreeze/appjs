/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(() => {
    var e = {
            4647: e => {
                e.exports = function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }
            },
            9372: e => {
                e.exports = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
            },
            639: (e, t, n) => {
                var r = n(7276),
                    o = n(7321);

                function i(t, n, s) {
                    return o() ? e.exports = i = Reflect.construct : e.exports = i = function(e, t, n) {
                        var o = [null];
                        o.push.apply(o, t);
                        var i = new(Function.bind.apply(e, o));
                        return n && r(i, n.prototype), i
                    }, i.apply(null, arguments)
                }
                e.exports = i
            },
            9484: (e, t, n) => {
                var r = n(8620),
                    o = n(7321),
                    i = n(7066);
                e.exports = function(e) {
                    var t = o();
                    return function() {
                        var n, o = r(e);
                        if (t) {
                            var s = r(this).constructor;
                            n = Reflect.construct(o, arguments, s)
                        } else n = o.apply(this, arguments);
                        return i(this, n)
                    }
                }
            },
            8620: e => {
                function t(n) {
                    return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, t(n)
                }
                e.exports = t
            },
            4422: (e, t, n) => {
                var r = n(7276);
                e.exports = function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && r(e, t)
                }
            },
            7914: e => {
                e.exports = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
            },
            1021: e => {
                e.exports = function(e) {
                    return -1 !== Function.toString.call(e).indexOf("[native code]")
                }
            },
            7321: e => {
                e.exports = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }
            },
            7066: (e, t, n) => {
                var r = n(1873),
                    o = n(4647);
                e.exports = function(e, t) {
                    return !t || "object" !== r(t) && "function" != typeof t ? o(e) : t
                }
            },
            7276: e => {
                function t(n, r) {
                    return e.exports = t = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    }, t(n, r)
                }
                e.exports = t
            },
            1873: e => {
                function t(n) {
                    return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = t = function(e) {
                        return typeof e
                    } : e.exports = t = function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, t(n)
                }
                e.exports = t
            },
            4885: (e, t, n) => {
                var r = n(8620),
                    o = n(7276),
                    i = n(1021),
                    s = n(639);

                function c(t) {
                    var n = "function" == typeof Map ? new Map : void 0;
                    return e.exports = c = function(e) {
                        if (null === e || !i(e)) return e;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== n) {
                            if (n.has(e)) return n.get(e);
                            n.set(e, t)
                        }

                        function t() {
                            return s(e, arguments, r(this).constructor)
                        }
                        return t.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), o(t, e)
                    }, c(t)
                }
                e.exports = c
            },
            9589: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getElectronBinding = void 0;
                t.getElectronBinding = e => process._linkedBinding ? process._linkedBinding("electron_common_" + e) : process.electronBinding ? process.electronBinding(e) : null
            },
            8245: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.browserModuleNames = t.commonModuleNames = void 0;
                const r = n(9589);
                t.commonModuleNames = ["clipboard", "nativeImage", "shell"], t.browserModuleNames = ["app", "autoUpdater", "BaseWindow", "BrowserView", "BrowserWindow", "contentTracing", "crashReporter", "dialog", "globalShortcut", "ipcMain", "inAppPurchase", "Menu", "MenuItem", "nativeTheme", "net", "netLog", "MessageChannelMain", "Notification", "powerMonitor", "powerSaveBlocker", "protocol", "screen", "session", "ShareMenu", "systemPreferences", "TopLevelWindow", "TouchBar", "Tray", "View", "webContents", "WebContentsView", "webFrameMain"].concat(t.commonModuleNames);
                const o = r.getElectronBinding("features");
                o && !o.isDesktopCapturerEnabled() || t.browserModuleNames.push("desktopCapturer"), o && !o.isViewApiEnabled() || t.browserModuleNames.push("ImageView")
            },
            7531: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.deserialize = t.serialize = t.isSerializableObject = t.isPromise = void 0;
                const r = n(8933);
                t.isPromise = function(e) {
                    return e && e.then && e.then instanceof Function && e.constructor && e.constructor.reject && e.constructor.reject instanceof Function && e.constructor.resolve && e.constructor.resolve instanceof Function
                };
                const o = [Boolean, Number, String, Date, Error, RegExp, ArrayBuffer];

                function i(e) {
                    return null === e || ArrayBuffer.isView(e) || o.some((t => e instanceof t))
                }
                t.isSerializableObject = i;
                const s = function(e, t) {
                    const n = Object.entries(e).map((([e, n]) => [e, t(n)]));
                    return Object.fromEntries(n)
                };
                t.serialize = function e(t) {
                    return t && t.constructor && "NativeImage" === t.constructor.name ? function(e) {
                        const t = [],
                            n = e.getScaleFactors();
                        if (1 === n.length) {
                            const r = n[0],
                                o = e.getSize(r),
                                i = e.toBitmap({
                                    scaleFactor: r
                                });
                            t.push({
                                scaleFactor: r,
                                size: o,
                                buffer: i
                            })
                        } else
                            for (const r of n) {
                                const n = e.getSize(r),
                                    o = e.toDataURL({
                                        scaleFactor: r
                                    });
                                t.push({
                                    scaleFactor: r,
                                    size: n,
                                    dataURL: o
                                })
                            }
                        return {
                            __ELECTRON_SERIALIZED_NativeImage__: !0,
                            representations: t
                        }
                    }(t) : Array.isArray(t) ? t.map(e) : i(t) ? t : t instanceof Object ? s(t, e) : t
                }, t.deserialize = function e(t) {
                    return t && t.__ELECTRON_SERIALIZED_NativeImage__ ? function(e) {
                        const t = r.nativeImage.createEmpty();
                        if (1 === e.representations.length) {
                            const {
                                buffer: n,
                                size: r,
                                scaleFactor: o
                            } = e.representations[0], {
                                width: i,
                                height: s
                            } = r;
                            t.addRepresentation({
                                buffer: n,
                                scaleFactor: o,
                                width: i,
                                height: s
                            })
                        } else
                            for (const n of e.representations) {
                                const {
                                    dataURL: e,
                                    size: r,
                                    scaleFactor: o
                                } = n, {
                                    width: i,
                                    height: s
                                } = r;
                                t.addRepresentation({
                                    dataURL: e,
                                    scaleFactor: o,
                                    width: i,
                                    height: s
                                })
                            }
                        return t
                    }(t) : Array.isArray(t) ? t.map(e) : i(t) ? t : t instanceof Object ? s(t, e) : t
                }
            },
            1404: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CallbacksRegistry = void 0;
                t.CallbacksRegistry = class {
                    constructor() {
                        this.nextId = 0, this.callbacks = {}, this.callbackIds = new WeakMap, this.locationInfo = new WeakMap
                    }
                    add(e) {
                        let t = this.callbackIds.get(e);
                        if (null != t) return t;
                        t = this.nextId += 1, this.callbacks[t] = e, this.callbackIds.set(e, t);
                        const n = /at (.*)/gi,
                            r = (new Error).stack;
                        if (!r) return t;
                        let o, i;
                        for (; null !== (i = n.exec(r));) {
                            const e = i[1];
                            if (e.includes("(native)")) continue;
                            if (e.includes("(<anonymous>)")) continue;
                            if (e.includes("callbacks-registry.js")) continue;
                            if (e.includes("remote.js")) continue;
                            if (e.includes("@electron/remote/dist")) continue;
                            const t = /([^/^)]*)\)?$/gi.exec(e);
                            t && (o = t[1]);
                            break
                        }
                        return this.locationInfo.set(e, o), t
                    }
                    get(e) {
                        return this.callbacks[e] || function() {}
                    }
                    getLocation(e) {
                        return this.locationInfo.get(e)
                    }
                    apply(e, ...t) {
                        return this.get(e).apply(global, ...t)
                    }
                    remove(e) {
                        const t = this.callbacks[e];
                        t && (this.callbackIds.delete(t), delete this.callbacks[e])
                    }
                }
            },
            9211: function(e, t, n) {
                "use strict";
                var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                        void 0 === r && (r = n), Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        })
                    } : function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    }),
                    o = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                    };
                if (Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), "browser" === process.type) throw new Error('"@electron/remote" cannot be required in the browser process. Instead require("@electron/remote/main").');
                o(n(7990), t)
            },
            7990: (e, t, n) => {
                "use strict";
                var r = n(6953).default;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createFunctionWithReturnValue = t.getGlobal = t.getCurrentWebContents = t.getCurrentWindow = t.getBuiltin = void 0;
                const o = n(1404),
                    i = n(7531),
                    s = n(8933),
                    c = n(8245),
                    a = n(9589),
                    l = new o.CallbacksRegistry,
                    u = new Map,
                    f = new FinalizationRegistry((e => {
                        const t = u.get(e);
                        void 0 !== t && void 0 === t.deref() && (u.delete(e), s.ipcRenderer.send("REMOTE_BROWSER_DEREFERENCE", v, e, 0))
                    })),
                    d = new WeakMap,
                    p = new WeakSet;
                const v = process.contextId || function() {
                    const e = a.getElectronBinding("v8_util");
                    if (e) return e.getHiddenValue(global, "contextId");
                    throw new Error("Electron >=v13.0.0-beta.6 required to support sandboxed renderers")
                }();
                process.on("exit", (() => {
                    s.ipcRenderer.send("REMOTE_BROWSER_CONTEXT_RELEASE", v)
                }));
                const _ = Symbol("is-remote-proxy");

                function h(e, t = new Set) {
                    const n = e => {
                        if (t.has(e)) return {
                            type: "value",
                            value: null
                        };
                        if (e && e.constructor && "NativeImage" === e.constructor.name) return {
                            type: "nativeimage",
                            value: i.serialize(e)
                        };
                        if (Array.isArray(e)) {
                            t.add(e);
                            const n = {
                                type: "array",
                                value: h(e, t)
                            };
                            return t.delete(e), n
                        }
                        if (e instanceof Buffer) return {
                            type: "buffer",
                            value: e
                        };
                        if (i.isSerializableObject(e)) return {
                            type: "value",
                            value: e
                        };
                        if ("object" == typeof e) {
                            if (i.isPromise(e)) return {
                                type: "promise",
                                then: n((function(t, n) {
                                    e.then(t, n)
                                }))
                            };
                            if (d.has(e)) return {
                                type: "remote-object",
                                id: d.get(e)
                            };
                            const r = {
                                type: "object",
                                name: e.constructor ? e.constructor.name : "",
                                members: []
                            };
                            t.add(e);
                            for (const t in e) r.members.push({
                                name: t,
                                value: n(e[t])
                            });
                            return t.delete(e), r
                        }
                        return "function" == typeof e && p.has(e) ? {
                            type: "function-with-return-value",
                            value: n(e())
                        } : "function" == typeof e ? {
                            type: "function",
                            id: l.add(e),
                            location: l.getLocation(e),
                            length: e.length
                        } : {
                            type: "value",
                            value: e
                        }
                    };
                    return e.map(n)
                }

                function y(e, t, n, r) {
                    if (Array.isArray(r))
                        for (const o of r) {
                            if (Object.prototype.hasOwnProperty.call(t, o.name)) continue;
                            const r = {
                                enumerable: o.enumerable
                            };
                            if ("method" === o.type) {
                                const t = function(...e) {
                                    let r;
                                    r = this && this.constructor === t ? "REMOTE_BROWSER_MEMBER_CONSTRUCTOR" : "REMOTE_BROWSER_MEMBER_CALL";
                                    return E(s.ipcRenderer.sendSync(r, v, n, o.name, h(e)))
                                };
                                let i = b(t, n, o.name);
                                r.get = () => (i.ref = e, i), r.set = e => (i = e, e), r.configurable = !0
                            } else "get" === o.type && (r.get = () => E(s.ipcRenderer.sendSync("REMOTE_BROWSER_MEMBER_GET", v, n, o.name)), o.writable && (r.set = e => {
                                const t = h([e]),
                                    r = s.ipcRenderer.sendSync("REMOTE_BROWSER_MEMBER_SET", v, n, o.name, t);
                                return null != r && E(r), e
                            }));
                            Object.defineProperty(t, o.name, r)
                        }
                }

                function g(e, t, n, r) {
                    if (null === r) return;
                    const o = {};
                    y(e, o, n, r.members), g(e, o, n, r.proto), Object.setPrototypeOf(t, o)
                }

                function b(e, t, n) {
                    let r = !1;
                    const o = () => {
                        if (r) return;
                        r = !0;
                        const o = s.ipcRenderer.sendSync("REMOTE_BROWSER_MEMBER_GET", v, t, n);
                        y(e, e, o.id, o.members)
                    };
                    return new Proxy(e, {
                        set: (e, t, n) => ("ref" !== t && o(), e[t] = n, !0),
                        get: (e, t) => {
                            if (t === _) return !0;
                            Object.prototype.hasOwnProperty.call(e, t) || o();
                            const n = e[t];
                            return "toString" === t && "function" == typeof n ? n.bind(e) : n
                        },
                        ownKeys: e => (o(), Object.getOwnPropertyNames(e)),
                        getOwnPropertyDescriptor: (e, t) => {
                            const n = Object.getOwnPropertyDescriptor(e, t);
                            return n || (o(), Object.getOwnPropertyDescriptor(e, t))
                        }
                    })
                }

                function E(e) {
                    if ("value" === e.type) return e.value;
                    if ("array" === e.type) return e.members.map((e => E(e)));
                    if ("nativeimage" === e.type) return i.deserialize(e.value);
                    if ("buffer" === e.type) return Buffer.from(e.value.buffer, e.value.byteOffset, e.value.byteLength);
                    if ("promise" === e.type) return r.resolve({
                        then: E(e.then)
                    });
                    if ("error" === e.type) return m(e);
                    if ("exception" === e.type) throw "error" === e.value.type ? m(e.value) : new Error(`Unexpected value type in exception: ${e.value.type}`); {
                        let t;
                        if ("id" in e) {
                            const t = function(e) {
                                const t = u.get(e);
                                if (void 0 !== t) {
                                    const e = t.deref();
                                    if (void 0 !== e) return e
                                }
                            }(e.id);
                            if (void 0 !== t) return t
                        }
                        if ("function" === e.type) {
                            const n = function(...t) {
                                let r;
                                r = this && this.constructor === n ? "REMOTE_BROWSER_CONSTRUCTOR" : "REMOTE_BROWSER_FUNCTION_CALL";
                                return E(s.ipcRenderer.sendSync(r, v, e.id, h(t)))
                            };
                            t = n
                        } else t = {};
                        return y(t, t, e.id, e.members), g(t, t, e.id, e.proto), t.constructor && t.constructor[_] && Object.defineProperty(t.constructor, "name", {
                                value: e.name
                            }), d.set(t, e.id),
                            function(e, t) {
                                const n = new WeakRef(t);
                                u.set(e, n), f.register(t, e)
                            }(e.id, t), t
                    }
                }

                function m(e) {
                    const t = e.value;
                    for (const {
                            name: n,
                            value: r
                        } of e.members) t[n] = E(r);
                    return t
                }

                function R(e, t) {
                    s.ipcRenderer.on(e, ((n, r, o, ...i) => {
                        0 === n.senderId ? r === v ? t(o, ...i) : s.ipcRenderer.send("REMOTE_BROWSER_WRONG_CONTEXT_ERROR", v, r, o) : console.error(`Message ${e} sent by unexpected WebContents (${n.senderId})`)
                    }))
                }
                const w = process.argv.includes("--enable-api-filtering-logging");

                function O() {
                    const e = {
                        stack: void 0
                    };
                    return w && Error.captureStackTrace(e, O), e.stack
                }
                R("REMOTE_RENDERER_CALLBACK", ((e, t) => {
                    l.apply(e, E(t))
                })), R("REMOTE_RENDERER_RELEASE_CALLBACK", (e => {
                    l.remove(e)
                })), t.require = e => E(s.ipcRenderer.sendSync("REMOTE_BROWSER_REQUIRE", v, e, O())), t.getBuiltin = function(e) {
                    return E(s.ipcRenderer.sendSync("REMOTE_BROWSER_GET_BUILTIN", v, e, O()))
                }, t.getCurrentWindow = function() {
                    return E(s.ipcRenderer.sendSync("REMOTE_BROWSER_GET_CURRENT_WINDOW", v, O()))
                }, t.getCurrentWebContents = function() {
                    return E(s.ipcRenderer.sendSync("REMOTE_BROWSER_GET_CURRENT_WEB_CONTENTS", v, O()))
                }, t.getGlobal = function(e) {
                    return E(s.ipcRenderer.sendSync("REMOTE_BROWSER_GET_GLOBAL", v, e, O()))
                }, Object.defineProperty(t, "process", {
                    enumerable: !0,
                    get: () => t.getGlobal("process")
                }), t.createFunctionWithReturnValue = function(e) {
                    const t = () => e;
                    return p.add(t), t
                };
                c.browserModuleNames.forEach((e => {
                    Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: () => t.getBuiltin(e)
                    })
                }))
            },
            7748: (e, t, n) => {
                e.exports = n(9211)
            },
            6953: (e, t, n) => {
                "use strict";
                var r = n(6953).default,
                    o = n(7914);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = x;
                var i, s, c = o(n(9372)),
                    a = o(n(4647)),
                    l = o(n(4422)),
                    u = o(n(9484)),
                    f = o(n(4885)),
                    d = void 0 !== r ? r : null,
                    p = "function" == typeof setImmediate ? setImmediate : null,
                    v = 0,
                    _ = [],
                    h = [],
                    y = [],
                    g = {
                        sentinel: "CONTINUE_AS_IF_NO_HANDLER"
                    },
                    b = {
                        sentinel: "RETRY_ASYNCHRONOUSLY"
                    },
                    E = {
                        sentinel: "TO_STRING"
                    },
                    m = {
                        sentinel: "DID_ERROR"
                    },
                    R = null,
                    w = [],
                    O = 64,
                    S = 128,
                    j = 512,
                    M = "undefined" == typeof self ? void 0 : self;

                function x(e, t) {
                    var n = this;
                    this._flags = 0, this._value = void 0, this._onFulfilled = void 0, this._onRejected = void 0, this._context = void 0, this._resolveLevel = 0, this._control = void 0, this.x = void 0, this._thenableParent = null, this._parent = void 0, this._child = void 0, this._children = void 0, this.control = void 0, t && (this._context = t.this), "function" == typeof e && (this._onFulfilled = e, this._flags |= 4, this._flags |= 256, Q(e, this._context, (function(e) {
                        return F(n, 0, !0, !1, e)
                    }), (function(e) {
                        return F(n, 0, !1, !1, e)
                    })))
                }

                function T(e) {
                    if (void 0 === e) return i;
                    if (I(e)) return e;
                    var t = new x;
                    return F(t, 0, !0, !1, e), J(t, j), t
                }

                function B(e) {
                    var t = new x;
                    return t._value = e, J(t, 514), w.push(t), t
                }

                function N(e) {
                    var t = "";
                    if (e._flags & S) t = (e._onFulfilled || e._onRejected).call(e._context, E);
                    else if (e._control) t = `.addRawControl(${e._control.name}, ${e._control.foo})`;
                    else if (16 & e._flags) t = `.endWithControls(${Object.keys(e.control)})`;
                    else if (e._flags & j) t = 1 & e._flags ? `Promise.resolve(${void 0===e._value?"":e._value})` : `Promise.reject(${void 0===e._value?"":e._value})`;
                    else if (256 & e._flags) switch (3 & e._flags) {
                        case 2:
                        case 0:
                        case 1:
                            t = `new Promise(${e._onFulfilled})`
                    } else e._onFulfilled && e._onRejected ? t = `.then(${e._onFulfilled}, ${e._onRejected})` : e._onFulfilled ? t = `.then(${e._onFulfilled})` : e._onRejected && (t = `.catch(${e._onRejected})`);
                    return t
                }

                function P(e) {
                    this.message = e, this.stack = new Error(e || this.name).stack
                }

                function C() {
                    var e, t;
                    0 === v && (h.length || w.length) && (v = 1, s || (t = 0, s = "undefined" == typeof MutationObserver || M && M.navigator && M.navigator.standalone ? d ? function() {
                        d.resolve().then(H)
                    } : "function" == typeof p ? function() {
                        p(H)
                    } : function() {
                        setTimeout(H, 0)
                    } : (e = document.createTextNode(""), new MutationObserver(H).observe(e, {
                        characterData: !0
                    }), function() {
                        e.data = t = 1 - t
                    })), s())
                }

                function L(e, t) {
                    J(e, 8), t._parent = e, e._children ? e._children.push(t) : e._child ? (e._children = [e._child, t], e._child = void 0) : e._child = t
                }

                function W(e) {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var t;
                        try {
                            t = e.then
                        } catch (e) {
                            return R = e, m
                        }
                        if ("function" == typeof t) return t
                    }
                }

                function k(e) {
                    if (!e || I(e)) return e;
                    var t = W(e);
                    if (t === m) return B(R);
                    if (t) {
                        var n = new x((function(n, r) {
                            t.call(e, n, r)
                        }));
                        return n._thenableParent = e, n
                    }
                    return e
                }

                function I(e) {
                    return e instanceof x
                }

                function A(e, t, n) {
                    var r, o, i, s, c = I(e = k(e)),
                        a = !1;
                    if (c) {
                        if (!(3 & e._flags)) return J(e.then(t, n), 32);
                        J(e, 8), a = !!(e._flags & O), i = e._context, r = 1 & e._flags ? t : n, o = e._value
                    } else r = t, o = e;
                    if (!r) return T(e).then();
                    if ((o = Z(r, i, o, !0)) === m) s = B(R);
                    else {
                        if (o === b) return T(e).then(t, n);
                        if (o === g) return c ? e.then() : T(e);
                        s = T(o)
                    }
                    return a && (s = s.cancellable()), void 0 !== i && ((s = s.then())._context = i), s
                }

                function F(e, t, n, r, o) {
                    if (t === e._resolveLevel) {
                        var i = ++e._resolveLevel;
                        if (J(e, 4), e._thenableParent = null, n)
                            if (o === e) e._parent = void 0, G(e, !1, r, new TypeError("promise resolved to itself"));
                            else if (I(o)) {
                            var s = 3 & o._flags;
                            0 === s ? L(o, e) : (e._parent = o, J(e, 1024), J(o, 8), G(e, 1 === s, r, o._value))
                        } else {
                            var c = W(o);
                            c === m ? (e._parent = void 0, G(e, !1, r, R)) : c ? (e._parent = void 0, e._thenableParent = o, Q(c, o, (function(t) {
                                return F(e, i, !0, !1, t)
                            }), (function(t) {
                                return F(e, i, !1, !1, t)
                            }))) : G(e, !0, r, o)
                        } else G(e, !1, r, o)
                    }
                }

                function $(e, t, n, r, o) {
                    t === e._resolveLevel && (D(e), F(e, t, n, r, o))
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

                function U(e) {
                    if (null == e) throw new Error(`Invalid .catch guard ${e}`);
                    if ("function" == typeof e) return e;
                    if ("object" == typeof e) throw new Error("Object guards in .catch are currently unsupported");
                    return function(t) {
                        return t === e
                    }
                }

                function z(e, t) {
                    return function(n, r) {
                        return n === E ? `.catch(..., ${t})` : e && ! function(e, t) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                if (r === Error || r.prototype instanceof Error) {
                                    if (t instanceof r) return !0
                                } else if (r(t)) return !0
                            }
                            return !1
                        }(e, n) ? g : r ? b : t.call(this, n)
                    }
                }

                function G(e, t, n, r) {
                    if (J(e, 4 | (t ? 1 : 2)), e._value = r, e._child) V(e._child, t, n, r), e._child = void 0;
                    else if (e._children) {
                        var o = e._children;
                        e._children = void 0;
                        for (var i = 0; i < o.length; i++) V(o[i], t, n, r)
                    } else t || 8 & e._flags || w.push(e)
                }

                function V(e, t, n, r) {
                    e._resolveLevel++;
                    var o = X(e, t);
                    if (o && 32 & e._flags) {
                        J(e, 4);
                        var i = Z(o, e._context, r, !0);
                        if (i !== b) return void(i === m ? (e._parent = void 0, G(e, !1, n, R)) : i === g ? G(e, t, n, r) : (e._parent = void 0, F(e, e._resolveLevel, !0, n, i)));
                        e._flags &= -5
                    }
                    o ? ((n ? y : h).push(e), C()) : G(e, t, n, r)
                }

                function q(e, t) {
                    for (; 0 !== e.length;) t.push(e.pop())
                }

                function H() {
                    for (; 0 !== _.length || 0 !== h.length;) {
                        0 === _.length && q(h, _);
                        var e = _.pop(),
                            t = e._parent,
                            n = !!(t && 1 & t._flags),
                            r = t && t._value,
                            o = X(e, n);
                        if (J(e, 4), o) {
                            var i = void 0;
                            do {
                                i = Z(o, e._context, r, !1)
                            } while (i === b);
                            i === m ? (r = R, n = !1, e._parent = void 0) : i !== g && (r = i, n = !0, e._parent = void 0)
                        }
                        3 & e._flags || (F(e, e._resolveLevel, n, !0, r), q(y, _))
                    }
                    for (v--; 0 !== w.length;) {
                        var s = w.pop();
                        8 & s._flags || Y(s, s._value)
                    }
                }
                x.resolve = T, x.reject = B, x.prototype.then = function(e, t) {
                    "function" != typeof e && (e = void 0), "function" != typeof t && (t = void 0);
                    var n = new x;
                    n._onFulfilled = e, n._onRejected = t, n._context = this._context, this._flags & O && J(n, O);
                    var r = 3 & this._flags;
                    return 0 === r ? L(this, n) : (J(this, 8), (1 === r ? e : t) ? (n._parent = this, h.push(n), C()) : (n._parent = this, J(n, r), n._value = this._value, 2 === r && w.push(n))), n
                }, x.prototype.catch = function(e) {
                    var t = arguments.length - 1;
                    if (0 === t) return this.then(void 0, e);
                    for (var n = new Array(t), r = 0; r < t; r++) n[r] = U(arguments[r]);
                    var o = z(n, arguments[t]),
                        i = A(this, void 0, o);
                    return i._onRejected && J(i, S), i
                }, x.all = function(e) {
                    return new x((function(t, n) {
                        var r = e.length;
                        if (0 !== r)
                            for (var o = new Array(e.length), i = 0; i < e.length; i++) o[i] = A(e[i], s, n);
                        else t([]);

                        function s(e) {
                            if (0 == --r) {
                                for (var n = [], i = 0; i < o.length; i++) {
                                    var s = o[i];
                                    n.push(s && 3 & s._flags ? s._value : e)
                                }
                                t(n)
                            }
                            return e
                        }
                    }))
                }, x.allSettled = function(e) {
                    return new x((function(t) {
                        var n = Array.from(e),
                            r = n.length;
                        if (0 !== r)
                            for (var o = new Array(n.length), i = a(!1), s = a(!0), c = 0; c < n.length; c++) o[c] = A(n[c], i, s);
                        else t([]);

                        function a(e) {
                            return function(n) {
                                var i = e ? {
                                    status: "rejected",
                                    reason: n
                                } : {
                                    status: "fulfilled",
                                    value: n
                                };
                                if (0 == --r) {
                                    for (var s = [], c = 0; c < o.length; c++) {
                                        var a = o[c];
                                        s.push(a && 3 & a._flags ? a._value : i)
                                    }
                                    t(s)
                                }
                                return i
                            }
                        }
                    }))
                }, x.race = function(e) {
                    var t = k(e);
                    if (I(t)) {
                        var n = t.then((function(e) {
                            return x.race(e)
                        }));
                        return n._context = void 0, n._flags &= -65, n
                    }
                    return new x((function(e, n) {
                        for (var r = 0; r < t.length; r++) {
                            var o = k(t[r]);
                            if (!I(o) || 3 & o._flags)
                                for (e(o), r++; r < t.length; r++) {
                                    var i = t[r];
                                    I(i) && J(i, 8)
                                } else o.then(e, n)
                        }
                    }))
                }, x.prototype.toString = function() {
                    for (var e, t = [], n = this, r = !1; n; n = n._parent) {
                        e = n, !r && 3 & n._flags && (r = !0, n._flags & j || (1 & n._flags ? t.push(`[resolved value: ${n._value}]`) : t.push(`[rejected reason: ${n._value}]`)));
                        var o = N(n);
                        1024 & n._flags && (o = `~${o}`), t.push(o)
                    }
                    return t.reverse(), 768 & e._flags || (t[0] = `[Promise]${t[0]}`), t.join("\n")
                }, x.prototype.finally = function(e) {
                    function t(t) {
                        return t === E ? `.finally(${e})` : (e.call(this), g)
                    }
                    return J(this.then(t, t), S)
                }, P.prototype = Object.create(Error.prototype, {
                    name: {
                        value: "AbortError"
                    }
                }), x.CancellationError = P, x.prototype.cancellable = function() {
                    return J(this.then(), O)
                }, x.prototype.cancel = function(e) {
                    for (var t, n = this; n && !(3 & n._flags); n = n._parent) n._flags & O && (t = n);
                    if (t)
                        if (void 0 === e && (e = new P), X(t, !1)) {
                            var r = new x;
                            D(t), L(r, t), $(r, 0, !1, !1, e)
                        } else $(t, t._resolveLevel, !1, !1, e)
                };
                var K = null == (null == M ? void 0 : M.dispatchEvent) ? null : function(e) {
                    (0, l.default)(n, e);
                    var t = (0, u.default)(n);

                    function n(e, r) {
                        var o;
                        return (0, c.default)(this, n), o = t.call(this, e, {
                            cancelable: !0
                        }), Object.defineProperties((0, a.default)(o), {
                            promise: {
                                value: r.promise,
                                enumerable: !0
                            },
                            reason: {
                                value: r.reason,
                                enumerable: !0
                            }
                        }), o
                    }
                    return n
                }((0, f.default)(Event));

                function Y(e, t) {
                    if (null != (null == M ? void 0 : M.dispatchEvent)) {
                        var n = new K("unhandledrejection", {
                            promise: e,
                            reason: t
                        });
                        if (M.dispatchEvent(n), !M.PromiseRejectionEvent && M.onunhandledrejection) try {
                            M.onunhandledrejection(n)
                        } catch (e) {}
                    } else "undefined" != typeof process && null != process.emit ? process.emit("unhandledRejection", t, e) : console.error(`StackPromise did not catch ${t}`, e, t)
                }

                function Q(e, t, n, r) {
                    try {
                        e.call(t, n, r)
                    } catch (e) {
                        r(e)
                    }
                }

                function X(e, t) {
                    if (!(4 & e._flags)) return t ? e._onFulfilled : e._onRejected
                }

                function Z(e, t, n, r) {
                    try {
                        return r ? e.call(t, n, !0) : e.call(t, n)
                    } catch (e) {
                        return R = e, m
                    }
                }

                function J(e, t) {
                    return e._flags |= t, e
                }
                F(i = new x, 0, !0, !1, void 0)
            },
            8933: e => {
                "use strict";
                e.exports = require("electron")
            },
            3838: e => {
                "use strict";
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
        return e[r].call(i.exports, i, i.exports, n), i.exports
    }(() => {
        "use strict";
        var e, t = n(6953).default,
            r = n(8933);
        e = n(3838).SharedMemory;
        var o = n(7748).getCurrentWebContents(),
            i = new Map,
            s = function(e, t) {
                var n = i.get(e) || new Set;
                n.add(t), i.set(e, n)
            },
            c = s,
            a = function(e, t) {
                (i.get(e) || new Set).delete(t)
            },
            l = a,
            u = o.session.cookies.set;
        r.ipcRenderer.on("__electron_event__", (function(e, t) {
            for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
            var s = i.get(t) || new Set;
            s.forEach((function(e) {
                return e.apply(void 0, r)
            }))
        }));
        var f = process;
        process.once("loaded", (function() {
            window.Native = {
                addListener: s,
                removeListener: a,
                addEventListener: c,
                removeEventListener: l,
                setCookie: u,
                ipcRenderer: r.ipcRenderer,
                webFrame: null,
                nativeTheme: null,
                appGetLocale: function() {},
                sysPrefGetMediaAccessStatus: function() {
                    return "not-determined"
                },
                sysPrefAskForMediaAccess: function() {
                    return t.resolve(!1)
                },
                openExternalLink: null,
                openSysPrefs: null,
                net: null,
                path: null,
                Notification: null,
                spellChecker: null,
                UpgradeTestHelper: null,
                DocUtilsPreload: null,
                MacOSNotificationState: null,
                WindowsFocusAssist: null,
                WindowsNotificationState: null,
                WindowsQuiteHours: null,
                NativeClientLogHelper: null,
                SharedMemory: e
            }, global.process = {}, global.process.platform = f.platform, global.process.mas = f.mas, global.process.env = f.env, global.process.versions = f.versions, global.process.windowsStore = f.windowsStore, global.process.type = f.type
        }))
    })()
})();