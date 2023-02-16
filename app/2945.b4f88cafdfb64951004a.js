/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [2945], {
        727173: (e, t, r) => {
            "use strict";
            var n = r(263026).default,
                a = r(307914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JobBuilder = void 0, t.definePersistedJob = function() {
                return new f([])
            };
            var s = a(r(46292)),
                u = a(r(889372)),
                i = a(r(605816)),
                c = r(606136),
                o = r(281098),
                f = function() {
                    function e(t) {
                        (0, u.default)(this, e), this.steps = t
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
                        value: function(t, r) {
                            var a = r.stopRetryIf,
                                u = l(r.requirements, r.code, a);
                            if (a) {
                                var i = a.timePassedSeconds,
                                    f = a.appCrashed,
                                    p = l(null, function(e) {
                                        return function(t, r, a) {
                                            return n.resolve(e(t, r, a)).then((function(e) {
                                                return e instanceof c.InterruptJob ? e : new c.InterruptJob(e)
                                            }))
                                        }
                                    }(a.onStopRetry), a);
                                null != i && (u = d((function(e, t, r) {
                                    var n = r.jobStartTime;
                                    return (0, o.happenedWithin)(n, i)
                                }), u, p)), f && (u = d((function(e, t, r) {
                                    return !r.afterCrash
                                }), u, p))
                            }
                            return new e([].concat((0, s.default)(this.steps), [{
                                stepName: t,
                                info: u
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
                return function(n, a, s) {
                    return e(n, a, s) ? t(n, a, s) : r(n, a, s)
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
            t.JobBuilder = f
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
        182945: (e, t, r) => {
            "use strict";
            var n = r(263026).default,
                a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteReactionsV2 = t.deleteAddOns = void 0;
            var s = a(r(887757)),
                u = a(r(543269)),
                i = a(r(348926)),
                c = r(151598),
                o = r(853595),
                f = r(262363),
                d = r(336782),
                l = r(836714),
                p = a(r(773467)),
                v = r(803233),
                h = r(664439),
                y = (0, d.defineWebPersistedJob)().finalStep("deleteAddOns", function() {
                    var e = (0, i.default)(s.default.mark((function e(t) {
                        var r, a, i, c, o, f;
                        return s.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.chatId, a = t.parentMsgKeys, e.next = 3, n.allSettled([g({
                                        chatId: r,
                                        parentMsgKeys: a
                                    }), k({
                                        chatId: r,
                                        parentMsgKeys: a
                                    })]);
                                case 3:
                                    i = e.sent, c = (0, u.default)(i), e.prev = 5, c.s();
                                case 7:
                                    if ((o = c.n()).done) {
                                        e.next = 13;
                                        break
                                    }
                                    if ("rejected" !== (f = o.value).status) {
                                        e.next = 11;
                                        break
                                    }
                                    throw f.reason;
                                case 11:
                                    e.next = 7;
                                    break;
                                case 13:
                                    e.next = 18;
                                    break;
                                case 15:
                                    e.prev = 15, e.t0 = e.catch(5), c.e(e.t0);
                                case 18:
                                    return e.prev = 18, c.f(), e.finish(18);
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [5, 15, 18, 21]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()).end();
            t.deleteAddOns = y;
            var b = (0, d.defineWebPersistedJob)().finalStep("deleteReactionsV2", (function(e) {
                return g({
                    chatId: e.chatId,
                    parentMsgKeys: e.parentMsgKeys
                })
            })).end();

            function g() {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = (0, i.default)(s.default.mark((function e(t) {
                    var r, n, a, u, i, d;
                    return s.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.chatId, n = t.parentMsgKeys, __LOG__(2)`Persisted: deleteReactionsV2 persisted job started for ${r}`, e.next = 4, (0, o.getAllReactionsFromParentMsgs)(n);
                            case 4:
                                if (a = e.sent, 0 !== (u = a.map((function(e) {
                                        return e.msgKey
                                    }))).length) {
                                    e.next = 9;
                                    break
                                }
                                return __LOG__(2)`Persisted: deleteReactionsV2 finished, no reactionsMsgKeys`, e.abrupt("return");
                            case 9:
                                if (i = [], u.forEach((function(e) {
                                        p.default.fromString(e).fromMe && i.push(e)
                                    })), !(i.length > 0)) {
                                    e.next = 15;
                                    break
                                }
                                return e.next = 15, (0, f.removeMessagesFromHistory)(i);
                            case 15:
                                return d = a.map((function(e) {
                                    return [e.parentMsgKey, e.senderUserJid]
                                })), e.next = 19, (0, c.deleteReactionsByRecords)(d);
                            case 19:
                                return e.next = 21, (0, l.deleteLastAddOnsPreview)(n);
                            case 21:
                                __LOG__(2)`Persisted: deleteReactionsV2 finished`;
                            case 22:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function k() {
                return m.apply(this, arguments)
            }

            function m() {
                return (m = (0, i.default)(s.default.mark((function e(t) {
                    var r, n;
                    return s.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = t.chatId, n = t.parentMsgKeys, (0, h.isPollsReceivingEnabled)()) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                return __LOG__(2)`Persisted: deletePollVotes persisted job started for ${r}`, e.next = 6, (0, v.deleteVotesByParentMsgKeys)(n);
                            case 6:
                                __LOG__(2)`Persisted: deleteReactionsV2 finished`;
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            t.deleteReactionsV2 = b
        },
        836714: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteLastAddOnsPreview = function() {
                return f.apply(this, arguments)
            };
            var a = n(r(887757)),
                s = n(r(348926)),
                u = r(900390),
                i = r(518005),
                c = n(r(773467)),
                o = r(454185);

            function f() {
                return (f = (0, s.default)(a.default.mark((function e(t) {
                    var r, n, s;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ((0, i.showReactionChatListPreview)()) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return r = new Set(t.map((function(e) {
                                    return c.default.fromString(e).remote.toString()
                                }))), e.next = 5, (0, o.bulkGetChatLastAddOnPreviewMap)(Array.from(r));
                            case 5:
                                return n = e.sent, s = new Map, n.forEach((function(e, r) {
                                    t.includes(null == e ? void 0 : e.parentMsgKey) && s.set(r, void 0)
                                })), e.next = 10, (0, u.bulkUpdateChatLastAddOnPreview)(s);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        803233: (e, t, r) => {
            "use strict";
            var n = r(263026).default,
                a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteVotesByParentMsgKeys = function() {
                return f.apply(this, arguments)
            };
            var s = a(r(887757)),
                u = a(r(543269)),
                i = a(r(348926)),
                c = r(262363),
                o = r(73718);

            function f() {
                return (f = (0, i.default)(s.default.mark((function e(t) {
                    var r, a, i, f, d, l, p;
                    return s.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, o.getTable)().anyOf(["parentMsgKey"], t);
                            case 2:
                                if (0 !== (r = e.sent).length) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                return a = r.map((function(e) {
                                    return e.msgKey
                                })), i = r.map((function(e) {
                                    return [e.parentMsgKey, e.sender]
                                })), e.next = 9, n.allSettled([(0, c.removeMessagesFromHistory)(a), (0, o.getTable)().bulkRemove(i)]);
                            case 9:
                                f = e.sent, d = (0, u.default)(f), e.prev = 11, d.s();
                            case 13:
                                if ((l = d.n()).done) {
                                    e.next = 19;
                                    break
                                }
                                if ("rejected" !== (p = l.value).status) {
                                    e.next = 17;
                                    break
                                }
                                throw p.reason;
                            case 17:
                                e.next = 13;
                                break;
                            case 19:
                                e.next = 24;
                                break;
                            case 21:
                                e.prev = 21, e.t0 = e.catch(11), d.e(e.t0);
                            case 24:
                                return e.prev = 24, d.f(), e.finish(24);
                            case 27:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [11, 21, 24, 27]
                    ])
                })))).apply(this, arguments)
            }
        },
        151598: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteReactionsByParentMessageKey = function(e) {
                var t = [];
                return (0, i.getStorage)().lock(["reactions"], function() {
                    var r = (0, u.default)(a.default.mark((function r(n) {
                        var u, i;
                        return a.default.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return u = (0, s.default)(n, 1), i = u[0], r.next = 3, i.equals(["parentMsgKey"], e);
                                case 3:
                                    return r.sent.forEach((function(e) {
                                        return t.push([e.parentMsgKey, e.senderUserJid])
                                    })), r.abrupt("return", i.bulkRemove(t));
                                case 6:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })));
                    return function() {
                        return r.apply(this, arguments)
                    }
                }())
            }, t.deleteReactionsByParentMessageKeys = function(e) {
                var t = [];
                return (0, i.getStorage)().lock(["reactions"], function() {
                    var r = (0, u.default)(a.default.mark((function r(n) {
                        var u, i, c;
                        return a.default.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return u = (0, s.default)(n, 1), i = u[0], r.next = 3, i.anyOf(["parentMsgKey"], e);
                                case 3:
                                    return (c = r.sent).forEach((function(e) {
                                        return t.push([e.parentMsgKey, e.senderUserJid])
                                    })), r.next = 7, i.bulkRemove(t);
                                case 7:
                                    return r.abrupt("return", c.map((function(e) {
                                        return e.msgKey
                                    })));
                                case 8:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })));
                    return function() {
                        return r.apply(this, arguments)
                    }
                }())
            }, t.deleteReactionsByRecords = function(e) {
                return (0, i.getStorage)().lock(["reactions"], function() {
                    var t = (0, u.default)(a.default.mark((function t(r) {
                        var n, u;
                        return a.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = (0, s.default)(r, 1), u = n[0], t.next = 3, u.bulkRemove(e);
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
            var a = n(r(887757)),
                s = n(r(963038)),
                u = n(r(348926)),
                i = r(866462)
        }
    }
]);