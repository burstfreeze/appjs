/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [3918], {
        39944: (e, t, r) => {
            "use strict";
            var n = r(21314).default,
                a = r(7914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JobBuilder = void 0, t.definePersistedJob = function() {
                return new d([])
            };
            var i = a(r(46292)),
                s = a(r(89372)),
                u = a(r(5816)),
                o = r(42761),
                c = r(79746),
                d = function() {
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
                                s = f(r.requirements, r.code, a);
                            if (a) {
                                var u = a.timePassedSeconds,
                                    d = a.appCrashed,
                                    p = f(null, function(e) {
                                        return function(t, r, a) {
                                            return n.resolve(e(t, r, a)).then((function(e) {
                                                return e instanceof o.InterruptJob ? e : new o.InterruptJob(e)
                                            }))
                                        }
                                    }(a.onStopRetry), a);
                                null != u && (s = l((function(e, t, r) {
                                    var n = r.jobStartTime;
                                    return (0, c.happenedWithin)(n, u)
                                }), s, p)), d && (s = l((function(e, t, r) {
                                    return !r.afterCrash
                                }), s, p))
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

            function l(e, t, r) {
                return function(n, a, i) {
                    return e(n, a, i) ? t(n, a, i) : r(n, a, i)
                }
            }

            function f(e, t, r) {
                var n = {
                    requirements: e,
                    code: t,
                    stopRetryIf: r
                };
                return function() {
                    return n
                }
            }
            t.JobBuilder = d
        },
        21545: (e, t, r) => {
            "use strict";
            var n = r(21314).default,
                a = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.digestKey = function() {
                return _.apply(this, arguments)
            };
            var i = a(r(63038)),
                s = a(r(87757)),
                u = a(r(48926)),
                o = r(18135),
                c = r(78363),
                d = r(84470),
                l = r(34733),
                f = r(26871),
                p = r(357),
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
                                return t = (0, c.wap)("iq", {
                                    xmlns: "encrypt",
                                    type: "get",
                                    to: c.S_WHATSAPP_NET,
                                    id: (0, c.generateId)()
                                }, (0, c.wap)("digest", null)), e.next = 3, (0, l.sendIq)(t, y);
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
                return (h = (0, u.default)(s.default.mark((function e(t) {
                    var r, a, c, d, l, p, y, _, g, h, v, w, b;
                    return s.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n.all([f.waSignalStore.getRegistrationInfo(), f.waSignalStore.getSignedPreKey()]);
                            case 2:
                                if (r = e.sent, a = (0, i.default)(r, 2), c = a[0], d = a[1], c && d) {
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
                                return l = c.identityKeyPair.pubKey, p = d.keyPair.pubKey, y = l.byteLength + p.byteLength + d.signature.byteLength + 32 * t.keys.length, _ = new Uint8Array(y), g = 0, [l, p, d.signature].forEach((function(e) {
                                    _.set(new Uint8Array(e), g), g += e.byteLength
                                })), h = t.keys.map(function() {
                                    var e = (0, u.default)(s.default.mark((function e(t) {
                                        var r;
                                        return s.default.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, f.waSignalStore.getPreKeyById(t);
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
                                if (v = e.sent, w = (0, o.encodeB64)(v), b = (0, o.encodeB64)(t.hash), w === b) {
                                    e.next = 28;
                                    break
                                }
                                throw Error(`validateLocalKeyBundle: hash mismatch remote:${b} local:${w}`);
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
        10542: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defineWebPersistedJob = function() {
                return (0, n.definePersistedJob)()
            };
            var n = r(39944)
        },
        23918: (e, t, r) => {
            "use strict";
            var n = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(r(87757)),
                i = n(r(48926)),
                s = r(78363),
                u = r(84470),
                o = r(34733),
                c = r(73033),
                d = r(10542),
                l = r(21545),
                f = r(14729),
                p = r(26871),
                y = r(90994),
                _ = new u.WapParser("rotateKeyResponseParser", (function(e) {
                    e.assertFromServer()
                })),
                g = (0, d.defineWebPersistedJob)().step("uploadKeys", (0, i.default)(a.default.mark((function e() {
                    var t, r, n, i, u;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, p.waSignalStore.getRegistrationInfo().then((function(e) {
                                    if (!e) throw new Error("No registration info is available");
                                    return p.waSignalStore.rotateSignedPreKey((0, c.toSignalCurveKeyPair)(e.identityKeyPair), f.generateSignedKeyPair)
                                }));
                            case 2:
                                return t = e.sent, __LOG__(2)`rotateKey: signedPreKey uploading`, r = (0, s.wap)("iq", {
                                    xmlns: "encrypt",
                                    type: "set",
                                    to: s.S_WHATSAPP_NET,
                                    id: (0, s.generateId)()
                                }, (0, s.wap)("rotate", null, (0, y.xmppSignedPreKey)(t))), e.next = 7, (0, o.sendIq)(r, _);
                            case 7:
                                if (!(n = e.sent).success) {
                                    e.next = 10;
                                    break
                                }
                                return e.abrupt("return", {
                                    shouldDigestKey: !1
                                });
                            case 10:
                                return i = !1, 406 === (u = n.errorCode) ? __LOG__(3)`rotateKey generated bad key` : 409 === u ? (__LOG__(3)`skey does not pass server validation`, i = !0) : u >= 500 ? __LOG__(2)`rotateKey server error ${u}, wait a day` : (__LOG__(2)`rotateKey unrecognized error ${u}`, i = !0), e.abrupt("return", {
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
            t.default = g
        },
        357: (e, t, r) => {
            "use strict";
            var n = r(21314).default,
                a = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.uploadPreKeys = function() {
                var e = new o.PromiseRetryLoop({
                    name: "uploadPreKeys",
                    timer: b,
                    code: function(e) {
                        return (0, u.default)(s.default.mark((function t() {
                            return s.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return __LOG__(2)`uploadPreKeys: running`, t.next = 3, v();
                                    case 3:
                                        !0 === t.sent.success ? e() : __LOG__(2)`uploadPreKeys: retrying (after delay)`;
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
            var i = a(r(63038)),
                s = a(r(87757)),
                u = a(r(48926)),
                o = r(91048),
                c = r(78363),
                d = r(84470),
                l = a(r(3208)),
                f = r(34733),
                p = r(14729),
                y = r(26871),
                _ = r(90994),
                g = {
                    error: !1,
                    result: !0
                },
                h = new d.WapParser("uploadPreKeyResParser", (function(e) {
                    if (e.assertTag("iq"), e.assertFromServer(), e.attrEnum("type", g)) return {
                        success: !0
                    };
                    var t = e.child("error");
                    return {
                        errorCode: t.attrInt("code"),
                        errorText: t.hasAttr("text") ? t.attrString("text") : ""
                    }
                }));

            function v() {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = (0, u.default)(s.default.mark((function e() {
                    var t, r, a, u, o, d, g, v, w, b, K, P;
                    return s.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n.all([y.waSignalStore.getRegistrationInfo(), y.waSignalStore.getSignedPreKey()]);
                            case 2:
                                if (t = e.sent, r = (0, i.default)(t, 2), a = r[0], u = r[1], a && u) {
                                    e.next = 8;
                                    break
                                }
                                throw new Error("No signal info is available");
                            case 8:
                                return o = a.registrationId, d = a.identityKeyPair, e.next = 11, y.waSignalStore.getOrGenPreKeys(30, p.generatePreKeyPair).then((function(e) {
                                    if (0 === e.length) throw new Error("No preKey is available");
                                    return [(0, c.wap)("iq", {
                                        id: (0, c.generateId)(),
                                        xmlns: "encrypt",
                                        type: "set",
                                        to: c.S_WHATSAPP_NET
                                    }, (0, c.wap)("registration", null, (0, c.BIG_ENDIAN_CONTENT)(o)), (0, c.wap)("type", null, l.default.KEY_BUNDLE_TYPE), (0, c.wap)("identity", null, d.pubKey), (0, c.wap)("list", null, e.map(_.xmppPreKey)), (0, _.xmppSignedPreKey)(u)), e[e.length - 1].keyId]
                                }));
                            case 11:
                                return g = e.sent, v = (0, i.default)(g, 2), w = v[0], b = v[1], e.prev = 15, e.next = 18, (0, f.waitForConnection)().then((function() {
                                    return y.waSignalStore.markKeyAsUploaded(b)
                                })).then((function() {
                                    return (0, f.sendIqWithoutRetry)(w, h)
                                }));
                            case 18:
                                if (!(K = e.sent).success) {
                                    e.next = 22;
                                    break
                                }
                                return y.waSignalStore.setServerHasPreKeys(!0), e.abrupt("return", {
                                    success: !0
                                });
                            case 22:
                                return (P = K.errorCode) >= 500 ? __LOG__(3)`_uploadPreKeys: server requested backoff ${P}` : 406 === P ? __LOG__(3)`_uploadPreKeys: uploaded invalid keys` : __LOG__(3)`_uploadPreKeys: unrecognized error ${P}`, e.abrupt("return", {
                                    errorCode: K.errorCode,
                                    errorText: K.errorText
                                });
                            case 27:
                                return e.prev = 27, e.t0 = e.catch(15), __LOG__(3)`_uploadPreKeys: disconnected, unclear if on server`, e.abrupt("return", void 0);
                            case 31:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [15, 27]
                    ])
                })))).apply(this, arguments)
            }
            var b = {
                algo: {
                    type: "fibonacci",
                    first: 1e3,
                    second: 2e3
                },
                max: 61e4
            }
        }
    }
]);