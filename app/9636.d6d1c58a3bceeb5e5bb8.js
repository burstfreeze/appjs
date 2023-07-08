/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [9636], {
        727173: (e, t, n) => {
            "use strict";
            var r = n(307914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JobBuilder = void 0, t.definePersistedJob = function() {
                return new c([])
            };
            var u = r(n(46292)),
                s = r(n(889372)),
                i = r(n(605816)),
                a = n(606136),
                o = n(281098),
                c = function() {
                    function e(t) {
                        (0, s.default)(this, e), this.steps = t
                    }
                    return (0, i.default)(e, [{
                        key: "step",
                        value: function(e, t) {
                            return this._stepWithOptions(e, "function" == typeof t ? {
                                code: t
                            } : t)
                        }
                    }, {
                        key: "_stepWithOptions",
                        value: function(t, n) {
                            var r = n.stopRetryIf,
                                s = p(n.requirements, n.code, r);
                            if (r) {
                                var i = r.timePassedSeconds,
                                    c = r.appCrashed,
                                    d = p(null, function(e) {
                                        return function(t, n, r) {
                                            return Promise.resolve(e(t, n, r)).then((function(e) {
                                                return e instanceof a.InterruptJob ? e : new a.InterruptJob(e)
                                            }))
                                        }
                                    }(r.onStopRetry), r);
                                null != i && (s = f((function(e, t, n) {
                                    var r = n.jobStartTime;
                                    return (0, o.happenedWithin)(r, i)
                                }), s, d)), c && (s = f((function(e, t, n) {
                                    return !n.afterCrash
                                }), s, d))
                            }
                            return new e([].concat((0, u.default)(this.steps), [{
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
                return function(r, u, s) {
                    return e(r, u, s) ? t(r, u, s) : n(r, u, s)
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
            t.JobBuilder = c
        },
        336782: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defineWebPersistedJob = function() {
                return (0, r.definePersistedJob)()
            };
            var r = n(727173)
        },
        399636: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setAbout = void 0;
            var u = r(n(887757)),
                s = r(n(348926)),
                i = n(115066),
                a = n(985044),
                o = n(780561),
                c = n(336782),
                f = new o.WapParser("aboutResponse", (function(e) {
                    return e.assertAttr("type", "result"), {
                        id: e.attrInt("id")
                    }
                })),
                p = (0, c.defineWebPersistedJob)().finalStep("sendStanza", function() {
                    var e = (0, s.default)(u.default.mark((function e(t) {
                        var n, r, s;
                        return u.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.content, r = (0, a.wap)("iq", {
                                        to: a.S_WHATSAPP_NET,
                                        type: "set",
                                        xmlns: "status",
                                        id: (0, a.generateId)()
                                    }, (0, a.wap)("status", null, n)), e.next = 4, (0, i.deprecatedSendIq)(r, f);
                                case 4:
                                    if ((s = e.sent).success) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        status: s.errorCode
                                    });
                                case 7:
                                    return e.abrupt("return", {
                                        status: 200
                                    });
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()).end();
            t.setAbout = p
        }
    }
]);