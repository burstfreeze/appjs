/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [6400], {
        727173: (e, t, r) => {
            "use strict";
            var n = r(263026).default,
                a = r(307914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JobBuilder = void 0, t.definePersistedJob = function() {
                return new l([])
            };
            var i = a(r(46292)),
                s = a(r(889372)),
                u = a(r(605816)),
                o = r(606136),
                c = r(281098),
                l = function() {
                    function e(t) {
                        (0, s.default)(this, e), this.steps = t
                    }
                    return (0, u.default)(e, [{
                        key: "step",
                        value: function(e, t) {
                            return this._stepWithOptions(e, "function" == typeof t ? {
                                code: t
                            } : t)
                        }
                    }, {
                        key: "_stepWithOptions",
                        value: function(t, r) {
                            var a = r.stopRetryIf,
                                s = p(r.requirements, r.code, a);
                            if (a) {
                                var u = a.timePassedSeconds,
                                    l = a.appCrashed,
                                    f = p(null, function(e) {
                                        return function(t, r, a) {
                                            return n.resolve(e(t, r, a)).then((function(e) {
                                                return e instanceof o.InterruptJob ? e : new o.InterruptJob(e)
                                            }))
                                        }
                                    }(a.onStopRetry), a);
                                null != u && (s = d((function(e, t, r) {
                                    var n = r.jobStartTime;
                                    return (0, c.happenedWithin)(n, u)
                                }), s, f)), l && (s = d((function(e, t, r) {
                                    return !r.afterCrash
                                }), s, f))
                            }
                            return new e([].concat((0, i.default)(this.steps), [{
                                stepName: t,
                                info: s
                            }]))
                        }
                    }, {
                        key: "finalStep",
                        value: function(e, t) {
                            var r = this.step(e, t);
                            return {
                                end: function() {
                                    return r.steps
                                }
                            }
                        }
                    }]), e
                }();

            function d(e, t, r) {
                return function(n, a, i) {
                    return e(n, a, i) ? t(n, a, i) : r(n, a, i)
                }
            }

            function p(e, t, r) {
                var n = {
                    requirements: e,
                    code: t,
                    stopRetryIf: r
                };
                return function() {
                    return n
                }
            }
            t.JobBuilder = l
        },
        336782: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defineWebPersistedJob = function() {
                return (0, n.definePersistedJob)()
            };
            var n = r(727173)
        },
        951962: (e, t, r) => {
            "use strict";
            var n = r(263026).default,
                a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.digestKey = function() {
                return _.apply(this, arguments)
            };
            var i = a(r(963038)),
                s = a(r(887757)),
                u = a(r(348926)),
                o = r(649745),
                c = r(115066),
                l = r(985044),
                d = r(780561),
                p = r(237723),
                f = r(36539),
                y = new d.WapParser("digestResponseParser", (function(e) {
                    var t = e.child("digest"),
                        r = t.child("skey");
                    return {
                        regId: t.child("registration").contentUint(4),
                        type: t.child("type").contentUint(1),
                        identity: t.child("identity").contentBytes(32),
                        skey: {
                            id: r.child("id").contentUint(3),
                            pubkey: r.child("value").contentBytes(32),
                            signature: r.child("signature").contentBytes(64)
                        },
                        keys: t.child("list").mapChildren((function(e) {
                            return e.contentUint(3)
                        })),
                        hash: t.child("hash").contentBytes(20)
                    }
                }));

            function _() {
                return (_ = (0, u.default)(s.default.mark((function e() {
                    var t, r, n, a;
                    return s.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = (0, l.wap)("iq", {
                                    xmlns: "encrypt",
                                    type: "get",
                                    to: l.S_WHATSAPP_NET,
                                    id: (0, l.generateId)()
                                }, (0, l.wap)("digest", null)), e.next = 3, (0, c.deprecatedSendIq)(t, y);
                            case 3:
                                if (r = e.sent, n = null, !r.success) {
                                    e.next = 17;
                                    break
                                }
                                return e.prev = 6, e.next = 9, g(r.result);
                            case 9:
                                n = !1, e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(6), n = !1;
                            case 15:
                                e.next = 19;
                                break;
                            case 17:
                                404 === (a = r.errorCode) ? (__LOG__(3)`digestKey: no record found for current user`, n = !0) : 406 === a ? (__LOG__(3)`digestKey: malformed request`, n = !1) : 503 === a ? (__LOG__(3)`digestKey: service unavailable`, n = !1) : (__LOG__(3)`digestKey: server error ${a}`, n = !1);
                            case 19:
                                if (null == n || !n) {
                                    e.next = 22;
                                    break
                                }
                                return __LOG__(2)`digestKey: validate key bundle failed, upload prekeys again`, e.abrupt("return", (0, f.uploadPreKeys)());
                            case 22:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [6, 12]
                    ])
                })))).apply(this, arguments)
            }

            function g() {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = (0, u.default)(s.default.mark((function e(t) {
                    var r, a, c, l, d, f, y, _, g, h, v, b, P;
                    return s.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n.all([p.waSignalStore.getRegistrationInfo(), p.waSignalStore.getSignedPreKey()]);
                            case 2:
                                if (r = e.sent, a = (0, i.default)(r, 2), c = a[0], l = a[1], c && l) {
                                    e.next = 8;
                                    break
                                }
                                throw new Error("validateLocalKeyBundle: No registration info is available");
                            case 8:
                                if (t.regId === c.registrationId) {
                                    e.next = 10;
                                    break
                                }
                                throw new Error("validateLocalKeyBundle: registation id mismatch");
                            case 10:
                                return d = c.identityKeyPair.pubKey, f = l.keyPair.pubKey, y = d.byteLength + f.byteLength + l.signature.byteLength + 32 * t.keys.length, _ = new Uint8Array(y), g = 0, [d, f, l.signature].forEach((function(e) {
                                    _.set(new Uint8Array(e), g), g += e.byteLength
                                })), h = t.keys.map(function() {
                                    var e = (0, u.default)(s.default.mark((function e(t) {
                                        var r;
                                        return s.default.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, p.waSignalStore.getPreKeyById(t);
                                                case 2:
                                                    if (r = e.sent) {
                                                        e.next = 5;
                                                        break
                                                    }
                                                    throw Error(`validateLocalKeyBundle: missing prekey record for id ${t}`);
                                                case 5:
                                                    return e.abrupt("return", r.keyPair.pubKey);
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }()), e.next = 19, n.all(h);
                            case 19:
                                return e.sent.forEach((function(e) {
                                    _.set(new Uint8Array(e), g), g += e.byteLength
                                })), e.next = 23, self.crypto.subtle.digest("SHA-1", _);
                            case 23:
                                if (v = e.sent, b = (0, o.encodeB64)(v), P = (0, o.encodeB64)(t.hash), b === P) {
                                    e.next = 28;
                                    break
                                }
                                throw Error(`validateLocalKeyBundle: hash mismatch remote:${P} local:${b}`);
                            case 28:
                                __LOG__(2)`validateLocalKeyBundle: success`;
                            case 29:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        856400: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.rotateKey = void 0;
            var a = n(r(887757)),
                i = n(r(348926)),
                s = r(115066),
                u = r(985044),
                o = r(780561),
                c = r(27531),
                l = r(336782),
                d = r(951962),
                p = r(883223),
                f = r(237723),
                y = r(429047),
                _ = new o.WapParser("rotateKeyResponseParser", (function(e) {
                    e.assertFromServer()
                })),
                g = (0, l.defineWebPersistedJob)().step("uploadKeys", (0, i.default)(a.default.mark((function e() {
                    var t, r, n, i, o;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, f.waSignalStore.getRegistrationInfo().then((function(e) {
                                    if (!e) throw new Error("No registration info is available");
                                    return f.waSignalStore.rotateSignedPreKey((0, c.toSignalCurveKeyPair)(e.identityKeyPair), p.generateSignedKeyPair)
                                }));
                            case 2:
                                return t = e.sent, __LOG__(2)`rotateKey: signedPreKey uploading`, r = (0, u.wap)("iq", {
                                    xmlns: "encrypt",
                                    type: "set",
                                    to: u.S_WHATSAPP_NET,
                                    id: (0, u.generateId)()
                                }, (0, u.wap)("rotate", null, (0, y.xmppSignedPreKey)(t))), e.next = 7, (0, s.deprecatedSendIq)(r, _);
                            case 7:
                                if (!(n = e.sent).success) {
                                    e.next = 10;
                                    break
                                }
                                return e.abrupt("return", {
                                    shouldDigestKey: !1
                                });
                            case 10:
                                return i = !1, 406 === (o = n.errorCode) ? __LOG__(3)`rotateKey generated bad key` : 409 === o ? (__LOG__(3)`skey does not pass server validation`, i = !0) : o >= 500 ? __LOG__(2)`rotateKey server error ${o}, wait a day` : (__LOG__(2)`rotateKey unrecognized error ${o}`, i = !0), e.abrupt("return", {
                                    shouldDigestKey: i
                                });
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).finalStep("maybeDigestKey", (function(e) {
                    if (e.shouldDigestKey) return (0, d.digestKey)()
                })).end();
            t.rotateKey = g
        },
        36539: (e, t, r) => {
            "use strict";
            var n = r(263026).default,
                a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.uploadPreKeys = function() {
                var e = new c.PromiseRetryLoop({
                    name: "uploadPreKeys",
                    timer: K,
                    code: function(e) {
                        return (0, u.default)(s.default.mark((function t() {
                            var r;
                            return s.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return __LOG__(2)`uploadPreKeys: running`, t.next = 3, P();
                                    case 3:
                                        !0 === (null == (r = t.sent) ? void 0 : r.success) ? (__LOG__(2)`uploadPreKeys: done`, e()) : __LOG__(2)`uploadPreKeys: retrying (after delay)`;
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                });
                return e.start(), e.promise()
            };
            var i = a(r(963038)),
                s = a(r(887757)),
                u = a(r(348926)),
                o = r(115066),
                c = r(480114),
                l = r(985044),
                d = r(780561),
                p = a(r(442435)),
                f = r(883223),
                y = r(237723),
                _ = r(429047),
                g = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = h(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var s = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                            s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i]
                        } n.default = e, r && r.set(e, n);
                    return n
                }(r(190955));

            function h(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (h = function(e) {
                    return e ? r : t
                })(e)
            }
            var v = {
                    error: !1,
                    result: !0
                },
                b = new d.WapParser("uploadPreKeyResParser", (function(e) {
                    if (e.assertTag("iq"), e.assertFromServer(), e.attrEnum("type", v)) return {
                        success: !0
                    };
                    var t = e.child("error");
                    return {
                        errorCode: t.attrInt("code"),
                        errorText: t.hasAttr("text") ? t.attrString("text") : ""
                    }
                }));

            function P() {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = (0, u.default)(s.default.mark((function e() {
                    var t, r, a, u, c, d, h, v, P, w, K, k, S;
                    return s.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = g.ServerProps.maxKeys, e.next = 3, n.all([y.waSignalStore.getRegistrationInfo(), y.waSignalStore.getSignedPreKey()]);
                            case 3:
                                if (r = e.sent, a = (0, i.default)(r, 2), u = a[0], c = a[1], u && c) {
                                    e.next = 9;
                                    break
                                }
                                throw new Error("No signal info is available");
                            case 9:
                                return d = u.registrationId, h = u.identityKeyPair, e.next = 12, y.waSignalStore.getOrGenPreKeys(t, f.generatePreKeyPair).then((function(e) {
                                    if (0 === e.length) throw new Error("No preKey is available");
                                    return [(0, l.wap)("iq", {
                                        id: (0, l.generateId)(),
                                        xmlns: "encrypt",
                                        type: "set",
                                        to: l.S_WHATSAPP_NET
                                    }, (0, l.wap)("registration", null, (0, l.BIG_ENDIAN_CONTENT)(d)), (0, l.wap)("type", null, p.default.KEY_BUNDLE_TYPE), (0, l.wap)("identity", null, h.pubKey), (0, l.wap)("list", null, e.map(_.xmppPreKey)), (0, _.xmppSignedPreKey)(c)), e[e.length - 1].keyId]
                                }));
                            case 12:
                                return v = e.sent, P = (0, i.default)(v, 2), w = P[0], K = P[1], e.prev = 16, e.next = 19, (0, o.waitForConnection)().then((function() {
                                    return y.waSignalStore.markKeyAsUploaded(K)
                                })).then((function() {
                                    return (0, o.deprecatedSendIqWithoutRetry)(w, b)
                                }));
                            case 19:
                                if (!(k = e.sent).success) {
                                    e.next = 24;
                                    break
                                }
                                return y.waSignalStore.setServerHasPreKeys(!0), __LOG__(2)`_uploadPreKeys: ${t} keys uploaded, raw stanza size: ${w.toString().length}b`, e.abrupt("return", {
                                    success: !0
                                });
                            case 24:
                                return (S = k.errorCode) >= 500 ? __LOG__(3)`_uploadPreKeys: server requested backoff ${S} (count: ${t}, size: ${w.toString().length}b)` : 406 === S ? __LOG__(3)`_uploadPreKeys: uploaded invalid keys (count: ${t}, size: ${w.toString().length}b)` : __LOG__(3)`_uploadPreKeys: unrecognized error ${S} (count: ${t}, size: ${w.toString().length}b)`, e.abrupt("return", {
                                    errorCode: k.errorCode,
                                    errorText: k.errorText
                                });
                            case 29:
                                return e.prev = 29, e.t0 = e.catch(16), __LOG__(3)`_uploadPreKeys: disconnected, unclear if on server: ${e.t0} (count: ${t}, size: ${w.toString().length}b)`, e.abrupt("return");
                            case 33:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [16, 29]
                    ])
                })))).apply(this, arguments)
            }
            var K = {
                algo: {
                    type: "fibonacci",
                    first: 1e3,
                    second: 2e3
                },
                max: 61e4
            }
        },
        883223: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateIdentityKeyPair = function() {
                return l.apply(this, arguments)
            }, t.generatePreKeyPair = function() {
                return o.apply(this, arguments)
            }, t.generateSignedKeyPair = function() {
                return c.apply(this, arguments)
            };
            var a = n(r(887757)),
                i = n(r(348926)),
                s = r(27531),
                u = r(18196);

            function o() {
                return (o = (0, i.default)(a.default.mark((function e(t) {
                    var r, n, i;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                (0, u.isCryptoLibraryEnabled)(), e.next = 5;
                                break;
                            case 5:
                                return e.next = 7, self.libsignal.KeyHelper.generatePreKey(t);
                            case 7:
                                return r = e.sent, n = r.keyId, i = r.keyPair, e.abrupt("return", {
                                    keyId: n,
                                    keyPair: (0, s.toCurveKeyPair)(i),
                                    isDirectDistribution: 0
                                });
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function c() {
                return (c = (0, i.default)(a.default.mark((function e(t, r) {
                    var n, i, o, c;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                (0, u.isCryptoLibraryEnabled)(), e.next = 5;
                                break;
                            case 5:
                                return e.next = 7, self.libsignal.KeyHelper.generateSignedPreKey(t, r);
                            case 7:
                                return n = e.sent, i = n.keyId, o = n.keyPair, c = n.signature, e.abrupt("return", {
                                    keyId: i,
                                    keyPair: (0, s.toCurveKeyPair)(o),
                                    signature: c
                                });
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function l() {
                return (l = (0, i.default)(a.default.mark((function e() {
                    var t;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                (0, u.isCryptoLibraryEnabled)(), e.next = 2;
                                break;
                            case 2:
                                return e.next = 4, self.libsignal.KeyHelper.generateIdentityKeyPair();
                            case 4:
                                return t = e.sent, e.abrupt("return", (0, s.toCurveKeyPair)(t));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        }
    }
]);