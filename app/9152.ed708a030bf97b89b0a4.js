/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [9152], {
        39944: (e, t, n) => {
            "use strict";
            var r = n(21314).default,
                u = n(7914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JobBuilder = void 0, t.definePersistedJob = function() {
                return new f([])
            };
            var i = u(n(46292)),
                s = u(n(89372)),
                a = u(n(5816)),
                o = n(42761),
                c = n(79746),
                f = function() {
                    function e(t) {
                        (0, s.default)(this, e), this.steps = t
                    }
                    return (0, a.default)(e, [{
                        key: "step",
                        value: function(e, t) {
                            return this._stepWithOptions(e, "function" == typeof t ? {
                                code: t
                            } : t)
                        }
                    }, {
                        key: "_stepWithOptions",
                        value: function(t, n) {
                            var u = n.stopRetryIf,
                                s = p(n.requirements, n.code, u);
                            if (u) {
                                var a = u.timePassedSeconds,
                                    f = u.appCrashed,
                                    l = p(null, function(e) {
                                        return function(t, n, u) {
                                            return r.resolve(e(t, n, u)).then((function(e) {
                                                return e instanceof o.InterruptJob ? e : new o.InterruptJob(e)
                                            }))
                                        }
                                    }(u.onStopRetry), u);
                                null != a && (s = d((function(e, t, n) {
                                    var r = n.jobStartTime;
                                    return (0, c.happenedWithin)(r, a)
                                }), s, l)), f && (s = d((function(e, t, n) {
                                    return !n.afterCrash
                                }), s, l))
                            }
                            return new e([].concat((0, i.default)(this.steps), [{
                                stepName: t,
                                info: s
                            }]))
                        }
                    }, {
                        key: "finalStep",
                        value: function(e, t) {
                            var n = this.step(e, t);
                            return {
                                end: function() {
                                    return n.steps
                                }
                            }
                        }
                    }]), e
                }();

            function d(e, t, n) {
                return function(r, u, i) {
                    return e(r, u, i) ? t(r, u, i) : n(r, u, i)
                }
            }

            function p(e, t, n) {
                var r = {
                    requirements: e,
                    code: t,
                    stopRetryIf: n
                };
                return function() {
                    return r
                }
            }
            t.JobBuilder = f
        },
        10542: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defineWebPersistedJob = function() {
                return (0, r.definePersistedJob)()
            };
            var r = n(39944)
        },
        69152: (e, t, n) => {
            "use strict";
            var r = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.QueryGetPublicKey = void 0;
            var u = r(n(87757)),
                i = r(n(48926)),
                s = n(78363),
                a = n(84470),
                o = n(84460),
                c = n(34733),
                f = n(10542),
                d = n(15824),
                p = n(59175),
                l = new a.WapParser("getPublicKeyResponse", (function(e) {
                    var t, n;
                    return e.assertTag("iq"), e.assertFromServer(), {
                        certificate: null === (t = e.maybeChild("public_key")) || void 0 === t || null === (n = t.maybeChild("pem")) || void 0 === n ? void 0 : n.contentString()
                    }
                })),
                b = (0, f.defineWebPersistedJob)().finalStep("sendStanza", function() {
                    var e = (0, i.default)(u.default.mark((function e(t) {
                        var n, r, i;
                        return u.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.businessJid, r = (0, s.wap)("iq", {
                                        to: s.S_WHATSAPP_NET,
                                        type: "get",
                                        smax_id: "52",
                                        xmlns: "w:biz:catalog",
                                        id: (0, s.generateId)()
                                    }, (0, s.wap)("public_key", {
                                        jid: (0, d.USER_JID)((0, o.createWid)(n))
                                    })), e.next = 4, (0, c.sendIq)(r, l);
                                case 4:
                                    if ((i = e.sent).success) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new p.ServerStatusCodeError(i.errorCode);
                                case 9:
                                    return e.abrupt("return", i.result);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()).end();
            t.QueryGetPublicKey = b
        }
    }
]);