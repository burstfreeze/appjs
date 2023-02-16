/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [3753], {
        727173: (e, t, n) => {
            "use strict";
            var r = n(263026).default,
                a = n(307914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JobBuilder = void 0, t.definePersistedJob = function() {
                return new f([])
            };
            var u = a(n(46292)),
                s = a(n(889372)),
                i = a(n(605816)),
                o = n(606136),
                c = n(281098),
                f = function() {
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
                            var a = n.stopRetryIf,
                                s = l(n.requirements, n.code, a);
                            if (a) {
                                var i = a.timePassedSeconds,
                                    f = a.appCrashed,
                                    p = l(null, function(e) {
                                        return function(t, n, a) {
                                            return r.resolve(e(t, n, a)).then((function(e) {
                                                return e instanceof o.InterruptJob ? e : new o.InterruptJob(e)
                                            }))
                                        }
                                    }(a.onStopRetry), a);
                                null != i && (s = d((function(e, t, n) {
                                    var r = n.jobStartTime;
                                    return (0, c.happenedWithin)(r, i)
                                }), s, p)), f && (s = d((function(e, t, n) {
                                    return !n.afterCrash
                                }), s, p))
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

            function d(e, t, n) {
                return function(r, a, u) {
                    return e(r, a, u) ? t(r, a, u) : n(r, a, u)
                }
            }

            function l(e, t, n) {
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
        336782: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defineWebPersistedJob = function() {
                return (0, r.definePersistedJob)()
            };
            var r = n(727173)
        },
        593753: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteReations = void 0;
            var a = r(n(887757)),
                u = r(n(348926)),
                s = n(151598),
                i = n(262363),
                o = n(336782),
                c = r(n(773467)),
                f = (0, o.defineWebPersistedJob)().step("deleteReactions", (function(e) {
                    var t = e.chatId,
                        n = e.parentMsgKeys;
                    return __LOG__(2)`Persisted: deleteReaction persisted job started`, {
                        chatId: t,
                        parentMsgKeys: n
                    }
                })).step("deleteReactionsFromReactionsTable", function() {
                    var e = (0, u.default)(a.default.mark((function e(t) {
                        var n, r;
                        return a.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t.chatId, n = t.parentMsgKeys, e.next = 4, (0, s.deleteReactionsByParentMessageKeys)(n);
                                case 4:
                                    if (r = e.sent) {
                                        e.next = 8;
                                        break
                                    }
                                    return __LOG__(2)`Persisted: Deleting reactions from Reactions table returned undefined, parentMsgKeys length ${n.length}`, e.abrupt("return", []);
                                case 8:
                                    return e.abrupt("return", r);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()).finalStep("deleteReactionsFromMessageTable", function() {
                    var e = (0, u.default)(a.default.mark((function e(t, n) {
                        var r, u;
                        return a.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n.chatId, r = n.parentMsgKeys, u = [], t || __LOG__(2)`Persisted: Deleting reactions from Msg table, reactionMsgKeys is undefined, parentMsgKeys length ${r.length}`, t.forEach((function(e) {
                                            c.default.fromString(e).fromMe && u.push(e)
                                        })), !(u.length > 0)) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 8, (0, i.removeMessagesFromHistory)(u);
                                case 8:
                                    return e.abrupt("return", t);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()).end();
            t.deleteReations = f
        },
        151598: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteReactionsByParentMessageKey = function(e) {
                var t = [];
                return (0, i.getStorage)().lock(["reactions"], function() {
                    var n = (0, s.default)(a.default.mark((function n(r) {
                        var s, i;
                        return a.default.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return s = (0, u.default)(r, 1), i = s[0], n.next = 3, i.equals(["parentMsgKey"], e);
                                case 3:
                                    return n.sent.forEach((function(e) {
                                        return t.push([e.parentMsgKey, e.senderUserJid])
                                    })), n.abrupt("return", i.bulkRemove(t));
                                case 6:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function() {
                        return n.apply(this, arguments)
                    }
                }())
            }, t.deleteReactionsByParentMessageKeys = function(e) {
                var t = [];
                return (0, i.getStorage)().lock(["reactions"], function() {
                    var n = (0, s.default)(a.default.mark((function n(r) {
                        var s, i, o;
                        return a.default.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return s = (0, u.default)(r, 1), i = s[0], n.next = 3, i.anyOf(["parentMsgKey"], e);
                                case 3:
                                    return (o = n.sent).forEach((function(e) {
                                        return t.push([e.parentMsgKey, e.senderUserJid])
                                    })), n.next = 7, i.bulkRemove(t);
                                case 7:
                                    return n.abrupt("return", o.map((function(e) {
                                        return e.msgKey
                                    })));
                                case 8:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function() {
                        return n.apply(this, arguments)
                    }
                }())
            }, t.deleteReactionsByRecords = function(e) {
                return (0, i.getStorage)().lock(["reactions"], function() {
                    var t = (0, s.default)(a.default.mark((function t(n) {
                        var r, s;
                        return a.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return r = (0, u.default)(n, 1), s = r[0], t.next = 3, s.bulkRemove(e);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }())
            };
            var a = r(n(887757)),
                u = r(n(963038)),
                s = r(n(348926)),
                i = n(866462)
        }
    }
]);