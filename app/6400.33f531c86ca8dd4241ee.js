/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [6400], {
        727173: (e, t, r) => {
            "use strict";
            var n = r(307914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JobBuilder = void 0, t.definePersistedJob = function() {
                return new c([])
            };
            var a = n(r(46292)),
                i = n(r(889372)),
                u = n(r(605816)),
                s = r(606136),
                o = r(281098),
                c = function() {
                    function e(t) {
                        (0, i.default)(this, e), this.steps = t
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
                            var n = r.stopRetryIf,
                                i = l(r.requirements, r.code, n);
                            if (n) {
                                var u = n.timePassedSeconds,
                                    c = n.appCrashed,
                                    p = l(null, function(e) {
                                        return function(t, r, n) {
                                            return Promise.resolve(e(t, r, n)).then((function(e) {
                                                return e instanceof s.InterruptJob ? e : new s.InterruptJob(e)
                                            }))
                                        }
                                    }(n.onStopRetry), n);
                                null != u && (i = d((function(e, t, r) {
                                    var n = r.jobStartTime;
                                    return (0, o.happenedWithin)(n, u)
                                }), i, p)), c && (i = d((function(e, t, r) {
                                    return !r.afterCrash
                                }), i, p))
                            }
                            return new e([].concat((0, a.default)(this.steps), [{
                                stepName: t,
                                info: i
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

            function l(e, t, r) {
                var n = {
                    requirements: e,
                    code: t,
                    stopRetryIf: r
                };
                return function() {
                    return n
                }
            }
            t.JobBuilder = c
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
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.digestKey = function() {
                return _.apply(this, arguments)
            };
            var a = n(r(963038)),
                i = n(r(887757)),
                u = n(r(348926)),
                s = r(649745),
                o = r(115066),
                c = r(985044),
                d = r(780561),
                l = r(237723),
                p = r(36539),
                y = n(r(580845)),
                f = new d.WapParser("digestResponseParser", (function(e) {
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
                return (_ = (0, u.default)(i.default.mark((function e() {
                    var t, r, n, a;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = (0, c.wap)("iq", {
                                    xmlns: "encrypt",
                                    type: "get",
                                    to: c.S_WHATSAPP_NET,
                                    id: (0, c.generateId)()
                                }, (0, c.wap)("digest", null)), e.next = 3, (0, o.deprecatedSendIq)(t, f);
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
                                return __LOG__(2)`digestKey: validate key bundle failed, upload prekeys again`, e.abrupt("return", (0, p.uploadPreKeys)());
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
                return (h = (0, u.default)(i.default.mark((function e(t) {
                    var r, n, o, c, d, p, f, _, g, h, v, b, K;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Promise.all([l.waSignalStore.getRegistrationInfo(), l.waSignalStore.getSignedPreKey()]);
                            case 2:
                                if (r = e.sent, n = (0, a.default)(r, 2), o = n[0], c = n[1], o && c) {
                                    e.next = 8;
                                    break
                                }
                                throw (0, y.default)("validateLocalKeyBundle: No registration info is available");
                            case 8:
                                if (t.regId === o.registrationId) {
                                    e.next = 10;
                                    break
                                }
                                throw (0, y.default)("validateLocalKeyBundle: registation id mismatch");
                            case 10:
                                return d = o.identityKeyPair.pubKey, p = c.keyPair.pubKey, f = d.byteLength + p.byteLength + c.signature.byteLength + 32 * t.keys.length, _ = new Uint8Array(f), g = 0, [d, p, c.signature].forEach((function(e) {
                                    _.set(new Uint8Array(e), g), g += e.byteLength
                                })), h = t.keys.map(function() {
                                    var e = (0, u.default)(i.default.mark((function e(t) {
                                        var r;
                                        return i.default.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, l.waSignalStore.getPreKeyById(t);
                                                case 2:
                                                    if (r = e.sent) {
                                                        e.next = 5;
                                                        break
                                                    }
                                                    throw (0, y.default)(`validateLocalKeyBundle: missing prekey record for id ${t}`);
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
                                }()), e.next = 19, Promise.all(h);
                            case 19:
                                return e.sent.forEach((function(e) {
                                    _.set(new Uint8Array(e), g), g += e.byteLength
                                })), e.next = 23, self.crypto.subtle.digest("SHA-1", _);
                            case 23:
                                if (v = e.sent, b = (0, s.encodeB64)(v), K = (0, s.encodeB64)(t.hash), b === K) {
                                    e.next = 28;
                                    break
                                }
                                throw (0, y.default)(`validateLocalKeyBundle: hash mismatch remote:${K} local:${b}`);
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
                u = r(115066),
                s = r(985044),
                o = r(780561),
                c = r(27531),
                d = r(336782),
                l = r(951962),
                p = r(883223),
                y = r(237723),
                f = r(429047),
                _ = n(r(580845)),
                g = new o.WapParser("rotateKeyResponseParser", (function(e) {
                    e.assertFromServer()
                })),
                h = (0, d.defineWebPersistedJob)().step("uploadKeys", (0, i.default)(a.default.mark((function e() {
                    var t, r, n, i, o;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, y.waSignalStore.getRegistrationInfo().then((function(e) {
                                    if (!e) throw (0, _.default)("No registration info is available");
                                    return y.waSignalStore.rotateSignedPreKey((0, c.toSignalCurveKeyPair)(e.identityKeyPair), p.generateSignedKeyPair)
                                }));
                            case 2:
                                return t = e.sent, __LOG__(2)`rotateKey: signedPreKey uploading`, r = (0, s.wap)("iq", {
                                    xmlns: "encrypt",
                                    type: "set",
                                    to: s.S_WHATSAPP_NET,
                                    id: (0, s.generateId)()
                                }, (0, s.wap)("rotate", null, (0, f.xmppSignedPreKey)(t))), e.next = 7, (0, u.deprecatedSendIq)(r, g);
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
                    if (e.shouldDigestKey) return (0, l.digestKey)()
                })).end();
            t.rotateKey = h
        },
        36539: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.uploadPreKeys = function() {
                var e = new o.PromiseRetryLoop({
                    name: "uploadPreKeys",
                    timer: P,
                    code: function(e) {
                        return (0, u.default)(i.default.mark((function t() {
                            var r;
                            return i.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return __LOG__(2)`uploadPreKeys: running`, t.next = 3, b();
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
            var a = n(r(963038)),
                i = n(r(887757)),
                u = n(r(348926)),
                s = r(115066),
                o = r(480114),
                c = r(985044),
                d = r(780561),
                l = n(r(442435)),
                p = r(821194),
                y = r(883223),
                f = r(237723),
                _ = r(429047),
                g = n(r(580845)),
                h = {
                    error: !1,
                    result: !0
                },
                v = new d.WapParser("uploadPreKeyResParser", (function(e) {
                    if (e.assertTag("iq"), e.assertFromServer(), e.attrEnum("type", h)) return {
                        success: !0
                    };
                    var t = e.child("error");
                    return {
                        errorCode: t.attrInt("code"),
                        errorText: t.hasAttr("text") ? t.attrString("text") : ""
                    }
                }));

            function b() {
                return K.apply(this, arguments)
            }

            function K() {
                return (K = (0, u.default)(i.default.mark((function e() {
                    var t, r, n, u, o, d, h, b, K, P, k, w, S;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = p.ServerProps.maxKeys, e.next = 3, Promise.all([f.waSignalStore.getRegistrationInfo(), f.waSignalStore.getSignedPreKey()]);
                            case 3:
                                if (r = e.sent, n = (0, a.default)(r, 2), u = n[0], o = n[1], u && o) {
                                    e.next = 9;
                                    break
                                }
                                throw (0, g.default)("No signal info is available");
                            case 9:
                                return d = u.registrationId, h = u.identityKeyPair, e.next = 12, f.waSignalStore.getOrGenPreKeys(t, y.generatePreKeyPair).then((function(e) {
                                    if (0 === e.length) throw (0, g.default)("No preKey is available");
                                    return [(0, c.wap)("iq", {
                                        id: (0, c.generateId)(),
                                        xmlns: "encrypt",
                                        type: "set",
                                        to: c.S_WHATSAPP_NET
                                    }, (0, c.wap)("registration", null, (0, c.BIG_ENDIAN_CONTENT)(d)), (0, c.wap)("type", null, l.default.KEY_BUNDLE_TYPE), (0, c.wap)("identity", null, h.pubKey), (0, c.wap)("list", null, e.map(_.xmppPreKey)), (0, _.xmppSignedPreKey)(o)), e[e.length - 1].keyId]
                                }));
                            case 12:
                                return b = e.sent, K = (0, a.default)(b, 2), P = K[0], k = K[1], e.prev = 16, e.next = 19, (0, s.waitForConnection)().then((function() {
                                    return f.waSignalStore.markKeyAsUploaded(k)
                                })).then((function() {
                                    return (0, s.deprecatedSendIqWithoutRetry)(P, v)
                                }));
                            case 19:
                                if (!(w = e.sent).success) {
                                    e.next = 24;
                                    break
                                }
                                return f.waSignalStore.setServerHasPreKeys(!0), __LOG__(2)`_uploadPreKeys: ${t} keys uploaded, raw stanza size: ${P.toString().length}b`, e.abrupt("return", {
                                    success: !0
                                });
                            case 24:
                                return (S = w.errorCode) >= 500 ? __LOG__(3)`_uploadPreKeys: server requested backoff ${S} (count: ${t}, size: ${P.toString().length}b)` : 406 === S ? __LOG__(3)`_uploadPreKeys: uploaded invalid keys (count: ${t}, size: ${P.toString().length}b)` : __LOG__(3)`_uploadPreKeys: unrecognized error ${S} (count: ${t}, size: ${P.toString().length}b)`, e.abrupt("return", {
                                    errorCode: w.errorCode,
                                    errorText: w.errorText
                                });
                            case 29:
                                return e.prev = 29, e.t0 = e.catch(16), __LOG__(3)`_uploadPreKeys: disconnected, unclear if on server: ${e.t0} (count: ${t}, size: ${P.toString().length}b)`, e.abrupt("return");
                            case 33:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [16, 29]
                    ])
                })))).apply(this, arguments)
            }
            var P = {
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
                return c.apply(this, arguments)
            }, t.generateSignedKeyPair = function() {
                return d.apply(this, arguments)
            };
            var a = n(r(887757)),
                i = n(r(348926)),
                u = r(27531),
                s = r(18196),
                o = n(r(286729));

            function c() {
                return (c = (0, i.default)(a.default.mark((function e(t) {
                    var r, n, i, c, d, l, p, y;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(0, s.isCryptoLibraryEnabled)()) {
                                    e.next = 5;
                                    break
                                }
                                return r = o.default.makePreKey(t), n = r.preKeyId, i = r.privKey, c = r.pubKey, d = {
                                    privKey: i,
                                    pubKey: c
                                }, e.abrupt("return", {
                                    keyId: n,
                                    keyPair: d,
                                    isDirectDistribution: 0
                                });
                            case 5:
                                return e.next = 7, self.libsignal.KeyHelper.generatePreKey(t);
                            case 7:
                                return l = e.sent, p = l.keyId, y = l.keyPair, e.abrupt("return", {
                                    keyId: p,
                                    keyPair: (0, u.toCurveKeyPair)(y),
                                    isDirectDistribution: 0
                                });
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function d() {
                return (d = (0, i.default)(a.default.mark((function e(t, r) {
                    var n, i, c, d, l, p, y, f, _, g;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(0, s.isCryptoLibraryEnabled)()) {
                                    e.next = 5;
                                    break
                                }
                                return n = o.default.makeSignedPreKey((0, u.toCurveKeyPair)(t), r), i = n.preKeyId, c = n.privKey, d = n.pubKey, l = n.signature, p = {
                                    privKey: c,
                                    pubKey: d
                                }, e.abrupt("return", {
                                    keyId: i,
                                    keyPair: (0, u.toCurveKeyPair)(p),
                                    signature: l
                                });
                            case 5:
                                return e.next = 7, self.libsignal.KeyHelper.generateSignedPreKey(t, r);
                            case 7:
                                return y = e.sent, f = y.keyId, _ = y.keyPair, g = y.signature, e.abrupt("return", {
                                    keyId: f,
                                    keyPair: (0, u.toCurveKeyPair)(_),
                                    signature: g
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
                                if (!(0, s.isCryptoLibraryEnabled)()) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", o.default.makeKeyPair());
                            case 2:
                                return e.next = 4, self.libsignal.KeyHelper.generateIdentityKeyPair();
                            case 4:
                                return t = e.sent, e.abrupt("return", (0, u.toCurveKeyPair)(t));
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