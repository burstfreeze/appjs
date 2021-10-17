/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [423], {
        39090: (e, t, n) => {
            var r = n(15365);
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
            }
        },
        78850: e => {
            e.exports = function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        15929: e => {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        46292: (e, t, n) => {
            var r = n(39090),
                u = n(78850),
                s = n(44595),
                a = n(15929);
            e.exports = function(e) {
                return r(e) || u(e) || s(e) || a()
            }
        },
        39944: (e, t, n) => {
            "use strict";
            var r = n(52108).default,
                u = n(7914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.definePersistedJob = function() {
                return new c([])
            }, t.JobBuilder = void 0;
            var s = u(n(46292)),
                a = u(n(89372)),
                o = u(n(5816)),
                i = n(18824),
                f = n(42761),
                c = function() {
                    function e(t) {
                        (0, a.default)(this, e), this.steps = t
                    }
                    return (0, o.default)(e, [{
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
                                var o = u.timePassedSeconds,
                                    c = u.appCrashed,
                                    l = d(null, function(e) {
                                        return function(t, n, u) {
                                            return r.resolve(e(t, n, u)).then((function(e) {
                                                return e instanceof f.InterruptJob ? e : new f.InterruptJob(e)
                                            }))
                                        }
                                    }(u.onStopRetry), u);
                                null != o && (a = p((function(e, t, n) {
                                    var r = n.jobStartTime;
                                    return (0, i.happenedWithin)(r, o)
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
                o = n(34733),
                i = n(10542),
                f = new(n(84470).WapParser)("aboutResponse", (function(e) {
                    return e.assertAttr("type", "result"), {
                        id: e.attrInt("id")
                    }
                })),
                c = (0, i.defineWebPersistedJob)().finalStep("sendStanza", function() {
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
                                    }, (0, a.wap)("status", null, n)), e.next = 4, (0, o.sendIq)(r, f);
                                case 4:
                                    if ((s = e.sent).success) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        status: s.errorCode
                                    });
                                case 9:
                                    return e.abrupt("return", {
                                        status: 200
                                    });
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
            t.default = c
        }
    }
]);