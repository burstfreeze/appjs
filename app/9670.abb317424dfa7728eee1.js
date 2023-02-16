/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [9670], {
        727173: (e, t, n) => {
            "use strict";
            var r = n(263026).default,
                u = n(307914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JobBuilder = void 0, t.definePersistedJob = function() {
                return new d([])
            };
            var i = u(n(46292)),
                s = u(n(889372)),
                a = u(n(605816)),
                o = n(606136),
                c = n(281098),
                d = function() {
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
                                    d = u.appCrashed,
                                    l = p(null, function(e) {
                                        return function(t, n, u) {
                                            return r.resolve(e(t, n, u)).then((function(e) {
                                                return e instanceof o.InterruptJob ? e : new o.InterruptJob(e)
                                            }))
                                        }
                                    }(u.onStopRetry), u);
                                null != a && (s = f((function(e, t, n) {
                                    var r = n.jobStartTime;
                                    return (0, c.happenedWithin)(r, a)
                                }), s, l)), d && (s = f((function(e, t, n) {
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

            function f(e, t, n) {
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
            t.JobBuilder = d
        },
        719670: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.QueryGetPublicKey = void 0;
            var u = r(n(887757)),
                i = r(n(348926)),
                s = n(115066),
                a = n(985044),
                o = n(780561),
                c = n(104010),
                d = n(908112),
                f = n(336782),
                p = n(95422),
                l = new o.WapParser("getPublicKeyResponse", (function(e) {
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
                                    return n = t.businessJid, r = (0, a.wap)("iq", {
                                        to: a.S_WHATSAPP_NET,
                                        type: "get",
                                        smax_id: "52",
                                        xmlns: "w:biz:catalog",
                                        id: (0, a.generateId)()
                                    }, (0, a.wap)("public_key", {
                                        jid: (0, d.USER_JID)((0, p.createWid)(n))
                                    })), e.next = 4, (0, s.deprecatedSendIq)(r, l);
                                case 4:
                                    if ((i = e.sent).success) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new c.ServerStatusCodeError(i.errorCode);
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
        },
        336782: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defineWebPersistedJob = function() {
                return (0, r.definePersistedJob)()
            };
            var r = n(727173)
        }
    }
]);