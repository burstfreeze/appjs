/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(() => {
    var e = {
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
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createFunctionWithReturnValue = t.getGlobal = t.getCurrentWebContents = t.getCurrentWindow = t.getBuiltin = void 0;
                const r = n(1404),
                    o = n(7531),
                    i = n(8933),
                    s = n(8245),
                    c = n(9589),
                    a = new r.CallbacksRegistry,
                    u = new Map,
                    l = new FinalizationRegistry((e => {
                        const t = u.get(e);
                        void 0 !== t && void 0 === t.deref() && (u.delete(e), i.ipcRenderer.send("REMOTE_BROWSER_DEREFERENCE", f, e, 0))
                    })),
                    d = new WeakMap,
                    p = new WeakSet;
                const f = process.contextId || function() {
                    const e = c.getElectronBinding("v8_util");
                    if (e) return e.getHiddenValue(global, "contextId");
                    throw new Error("Electron >=v13.0.0-beta.6 required to support sandboxed renderers")
                }();
                process.on("exit", (() => {
                    i.ipcRenderer.send("REMOTE_BROWSER_CONTEXT_RELEASE", f)
                }));
                const E = Symbol("is-remote-proxy");

                function R(e, t = new Set) {
                    const n = e => {
                        if (t.has(e)) return {
                            type: "value",
                            value: null
                        };
                        if (e && e.constructor && "NativeImage" === e.constructor.name) return {
                            type: "nativeimage",
                            value: o.serialize(e)
                        };
                        if (Array.isArray(e)) {
                            t.add(e);
                            const n = {
                                type: "array",
                                value: R(e, t)
                            };
                            return t.delete(e), n
                        }
                        if (e instanceof Buffer) return {
                            type: "buffer",
                            value: e
                        };
                        if (o.isSerializableObject(e)) return {
                            type: "value",
                            value: e
                        };
                        if ("object" == typeof e) {
                            if (o.isPromise(e)) return {
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
                            id: a.add(e),
                            location: a.getLocation(e),
                            length: e.length
                        } : {
                            type: "value",
                            value: e
                        }
                    };
                    return e.map(n)
                }

                function b(e, t, n, r) {
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
                                    return y(i.ipcRenderer.sendSync(r, f, n, o.name, R(e)))
                                };
                                let s = g(t, n, o.name);
                                r.get = () => (s.ref = e, s), r.set = e => (s = e, e), r.configurable = !0
                            } else "get" === o.type && (r.get = () => y(i.ipcRenderer.sendSync("REMOTE_BROWSER_MEMBER_GET", f, n, o.name)), o.writable && (r.set = e => {
                                const t = R([e]),
                                    r = i.ipcRenderer.sendSync("REMOTE_BROWSER_MEMBER_SET", f, n, o.name, t);
                                return null != r && y(r), e
                            }));
                            Object.defineProperty(t, o.name, r)
                        }
                }

                function m(e, t, n, r) {
                    if (null === r) return;
                    const o = {};
                    b(e, o, n, r.members), m(e, o, n, r.proto), Object.setPrototypeOf(t, o)
                }

                function g(e, t, n) {
                    let r = !1;
                    const o = () => {
                        if (r) return;
                        r = !0;
                        const o = i.ipcRenderer.sendSync("REMOTE_BROWSER_MEMBER_GET", f, t, n);
                        b(e, e, o.id, o.members)
                    };
                    return new Proxy(e, {
                        set: (e, t, n) => ("ref" !== t && o(), e[t] = n, !0),
                        get: (e, t) => {
                            if (t === E) return !0;
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

                function y(e) {
                    if ("value" === e.type) return e.value;
                    if ("array" === e.type) return e.members.map((e => y(e)));
                    if ("nativeimage" === e.type) return o.deserialize(e.value);
                    if ("buffer" === e.type) return Buffer.from(e.value.buffer, e.value.byteOffset, e.value.byteLength);
                    if ("promise" === e.type) return Promise.resolve({
                        then: y(e.then)
                    });
                    if ("error" === e.type) return v(e);
                    if ("exception" === e.type) throw "error" === e.value.type ? v(e.value) : new Error(`Unexpected value type in exception: ${e.value.type}`); {
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
                                return y(i.ipcRenderer.sendSync(r, f, e.id, R(t)))
                            };
                            t = n
                        } else t = {};
                        return b(t, t, e.id, e.members), m(t, t, e.id, e.proto), t.constructor && t.constructor[E] && Object.defineProperty(t.constructor, "name", {
                                value: e.name
                            }), d.set(t, e.id),
                            function(e, t) {
                                const n = new WeakRef(t);
                                u.set(e, n), l.register(t, e)
                            }(e.id, t), t
                    }
                }

                function v(e) {
                    const t = e.value;
                    for (const {
                            name: n,
                            value: r
                        } of e.members) t[n] = y(r);
                    return t
                }

                function _(e, t) {
                    i.ipcRenderer.on(e, ((n, r, o, ...s) => {
                        0 === n.senderId ? r === f ? t(o, ...s) : i.ipcRenderer.send("REMOTE_BROWSER_WRONG_CONTEXT_ERROR", f, r, o) : console.error(`Message ${e} sent by unexpected WebContents (${n.senderId})`)
                    }))
                }
                const h = process.argv.includes("--enable-api-filtering-logging");

                function O() {
                    const e = {
                        stack: void 0
                    };
                    return h && Error.captureStackTrace(e, O), e.stack
                }
                _("REMOTE_RENDERER_CALLBACK", ((e, t) => {
                    a.apply(e, y(t))
                })), _("REMOTE_RENDERER_RELEASE_CALLBACK", (e => {
                    a.remove(e)
                })), t.require = e => y(i.ipcRenderer.sendSync("REMOTE_BROWSER_REQUIRE", f, e, O())), t.getBuiltin = function(e) {
                    return y(i.ipcRenderer.sendSync("REMOTE_BROWSER_GET_BUILTIN", f, e, O()))
                }, t.getCurrentWindow = function() {
                    return y(i.ipcRenderer.sendSync("REMOTE_BROWSER_GET_CURRENT_WINDOW", f, O()))
                }, t.getCurrentWebContents = function() {
                    return y(i.ipcRenderer.sendSync("REMOTE_BROWSER_GET_CURRENT_WEB_CONTENTS", f, O()))
                }, t.getGlobal = function(e) {
                    return y(i.ipcRenderer.sendSync("REMOTE_BROWSER_GET_GLOBAL", f, e, O()))
                }, Object.defineProperty(t, "process", {
                    enumerable: !0,
                    get: () => t.getGlobal("process")
                }), t.createFunctionWithReturnValue = function(e) {
                    const t = () => e;
                    return p.add(t), t
                };
                s.browserModuleNames.forEach((e => {
                    Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: () => t.getBuiltin(e)
                    })
                }))
            },
            7748: (e, t, n) => {
                e.exports = n(9211)
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
        var e, t = n(8933);
        e = n(3838).SharedMemory;
        var r = n(7748).getCurrentWebContents(),
            o = new Map,
            i = function(e, t) {
                var n = o.get(e) || new Set;
                n.add(t), o.set(e, n)
            },
            s = i,
            c = function(e, t) {
                (o.get(e) || new Set).delete(t)
            },
            a = c,
            u = r.session.cookies.set;
        t.ipcRenderer.on("__electron_event__", (function(e, t) {
            for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
            var s = o.get(t) || new Set;
            s.forEach((function(e) {
                return e.apply(void 0, r)
            }))
        }));
        var l = process;
        process.once("loaded", (function() {
            window.Native = {
                addListener: i,
                removeListener: c,
                addEventListener: s,
                removeEventListener: a,
                setCookie: u,
                ipcRenderer: t.ipcRenderer,
                webFrame: null,
                nativeTheme: null,
                appGetLocale: function() {},
                sysPrefGetMediaAccessStatus: function() {
                    return "not-determined"
                },
                sysPrefAskForMediaAccess: function() {
                    return Promise.resolve(!1)
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
            }, global.process = {}, global.process.platform = l.platform, global.process.mas = l.mas, global.process.env = l.env, global.process.versions = l.versions, global.process.windowsStore = l.windowsStore, global.process.type = l.type
        }))
    })()
})();