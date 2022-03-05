/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [3918], {
        39944: (e, t, r) => {
            "use strict";
            var n = r(21314).default,
                i = r(7914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JobBuilder = void 0, t.definePersistedJob = function() {
                return new f([])
            };
            var a = i(r(46292)),
                s = i(r(89372)),
                u = i(r(5816)),
                o = r(42761),
                d = r(79746),
                f = function() {
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
                            var i = r.stopRetryIf,
                                s = p(r.requirements, r.code, i);
                            if (i) {
                                var u = i.timePassedSeconds,
                                    f = i.appCrashed,
                                    l = p(null, function(e) {
                                        return function(t, r, i) {
                                            return n.resolve(e(t, r, i)).then((function(e) {
                                                return e instanceof o.InterruptJob ? e : new o.InterruptJob(e)
                                            }))
                                        }
                                    }(i.onStopRetry), i);
                                null != u && (s = c((function(e, t, r) {
                                    var n = r.jobStartTime;
                                    return (0, d.happenedWithin)(n, u)
                                }), s, l)), f && (s = c((function(e, t, r) {
                                    return !r.afterCrash
                                }), s, l))
                            }
                            return new e([].concat((0, a.default)(this.steps), [{
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

            function c(e, t, r) {
                return function(n, i, a) {
                    return e(n, i, a) ? t(n, i, a) : r(n, i, a)
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
            t.JobBuilder = f
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
            var i = n(r(87757)),
                a = n(r(48926)),
                s = r(78363),
                u = r(84470),
                o = r(34733),
                d = r(73033),
                f = r(10542),
                c = r(21545),
                p = r(14729),
                l = r(26871),
                y = r(90994),
                _ = new u.WapParser("rotateKeyResponseParser", (function(e) {
                    e.assertFromServer()
                })),
                v = (0, f.defineWebPersistedJob)().step("uploadKeys", (0, a.default)(i.default.mark((function e() {
                    var t, r, n, a, u;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, l.waSignalStore.getRegistrationInfo().then((function(e) {
                                    if (!e) throw new Error("No registration info is available");
                                    return l.waSignalStore.rotateSignedPreKey((0, d.toSignalCurveKeyPair)(e.identityKeyPair), p.generateSignedKeyPair)
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
                                return a = !1, 406 === (u = n.errorCode) ? __LOG__(3)`rotateKey generated bad key` : 409 === u ? (__LOG__(3)`skey does not pass server validation`, a = !0) : u >= 500 ? __LOG__(2)`rotateKey server error ${u}, wait a day` : (__LOG__(2)`rotateKey unrecognized error ${u}`, a = !0), e.abrupt("return", {
                                    shouldDigestKey: a
                                });
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).finalStep("maybeDigestKey", (function(e) {
                    if (e.shouldDigestKey) return (0, c.digestKey)()
                })).end();
            t.default = v
        }
    }
]);