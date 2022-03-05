/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [6317], {
        39944: (e, t, n) => {
            "use strict";
            var r = n(21314).default,
                u = n(7914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JobBuilder = void 0, t.definePersistedJob = function() {
                return new c([])
            };
            var i = u(n(46292)),
                s = u(n(89372)),
                o = u(n(5816)),
                a = n(42761),
                f = n(79746),
                c = function() {
                    function e(t) {
                        (0, s.default)(this, e), this.steps = t
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
                                s = p(n.requirements, n.code, u);
                            if (u) {
                                var o = u.timePassedSeconds,
                                    c = u.appCrashed,
                                    l = p(null, function(e) {
                                        return function(t, n, u) {
                                            return r.resolve(e(t, n, u)).then((function(e) {
                                                return e instanceof a.InterruptJob ? e : new a.InterruptJob(e)
                                            }))
                                        }
                                    }(u.onStopRetry), u);
                                null != o && (s = d((function(e, t, n) {
                                    var r = n.jobStartTime;
                                    return (0, f.happenedWithin)(r, o)
                                }), s, l)), c && (s = d((function(e, t, n) {
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
        26317: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(10542),
                u = n(50926),
                i = (0, r.defineWebPersistedJob)().finalStep("deleteReactions", (function(e) {
                    e.chatId;
                    var t = e.parentMsgKeys;
                    return __LOG__(2)`Persisted: deleteReaction persisted job started`, (0, u.deleteReactionsByParentMessageKeys)(t)
                })).end();
            t.default = i
        }
    }
]);