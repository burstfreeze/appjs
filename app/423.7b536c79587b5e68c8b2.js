/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [423], {
        39944: (e, t, n) => {
            "use strict";
            var r = n(21314).default,
                u = n(7914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JobBuilder = void 0, t.definePersistedJob = function() {
                return new c([])
            };
            var s = u(n(46292)),
                a = u(n(89372)),
                i = u(n(5816)),
                o = n(42761),
                f = n(79746),
                c = function() {
                    function e(t) {
                        (0, a.default)(this, e), this.steps = t
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
                            var u = n.stopRetryIf,
                                a = d(n.requirements, n.code, u);
                            if (u) {
                                var i = u.timePassedSeconds,
                                    c = u.appCrashed,
                                    l = d(null, function(e) {
                                        return function(t, n, u) {
                                            return r.resolve(e(t, n, u)).then((function(e) {
                                                return e instanceof o.InterruptJob ? e : new o.InterruptJob(e)
                                            }))
                                        }
                                    }(u.onStopRetry), u);
                                null != i && (a = p((function(e, t, n) {
                                    var r = n.jobStartTime;
                                    return (0, f.happenedWithin)(r, i)
                                }), a, l)), c && (a = p((function(e, t, n) {
                                    return !n.afterCrash
                                }), a, l))
                            }
                            return new e([].concat((0, s.default)(this.steps), [{
                                stepName: t,
                                info: a
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

            function p(e, t, n) {
                return function(r, u, s) {
                    return e(r, u, s) ? t(r, u, s) : n(r, u, s)
                }
            }

            function d(e, t, n) {
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
        10542: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defineWebPersistedJob = function() {
                return (0, r.definePersistedJob)()
            };
            var r = n(39944)
        },
        60423: (e, t, n) => {
            "use strict";
            var r = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var u = r(n(87757)),
                s = r(n(48926)),
                a = n(78363),
                i = n(84470),
                o = n(34733),
                f = n(10542),
                c = new i.WapParser("aboutResponse", (function(e) {
                    return e.assertAttr("type", "result"), {
                        id: e.attrInt("id")
                    }
                })),
                p = (0, f.defineWebPersistedJob)().finalStep("sendStanza", function() {
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
                                    }, (0, a.wap)("status", null, n)), e.next = 4, (0, o.sendIq)(r, c);
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
            t.default = p
        }
    }
]);