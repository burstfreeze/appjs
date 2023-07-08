/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [2945], {
        727173: (e, t, r) => {
            "use strict";
            var n = r(307914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JobBuilder = void 0, t.definePersistedJob = function() {
                return new c([])
            };
            var a = n(r(46292)),
                s = n(r(889372)),
                u = n(r(605816)),
                i = r(606136),
                o = r(281098),
                c = function() {
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
                            var n = r.stopRetryIf,
                                s = d(r.requirements, r.code, n);
                            if (n) {
                                var u = n.timePassedSeconds,
                                    c = n.appCrashed,
                                    l = d(null, function(e) {
                                        return function(t, r, n) {
                                            return Promise.resolve(e(t, r, n)).then((function(e) {
                                                return e instanceof i.InterruptJob ? e : new i.InterruptJob(e)
                                            }))
                                        }
                                    }(n.onStopRetry), n);
                                null != u && (s = f((function(e, t, r) {
                                    var n = r.jobStartTime;
                                    return (0, o.happenedWithin)(n, u)
                                }), s, l)), c && (s = f((function(e, t, r) {
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

            function f(e, t, r) {
                return function(n, a, s) {
                    return e(n, a, s) ? t(n, a, s) : r(n, a, s)
                }
            }

            function d(e, t, r) {
                var n = {
                    requirements: e,
                    code: t,
                    stopRetryIf: r
                };
                return function() {
                    return n
                }
            }
            t.JobBuilder = c
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
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteReactionsV2 = t.deleteAddOns = void 0;
            var a = n(r(887757)),
                s = n(r(543269)),
                u = n(r(348926)),
                i = r(251454),
                o = r(960710),
                c = r(62141),
                f = r(503520),
                d = r(403849),
                l = r(336782),
                p = r(836714),
                v = n(r(773467)),
                h = r(621502),
                y = (0, l.defineWebPersistedJob)().finalStep("deleteAddOns", function() {
                    var e = (0, u.default)(a.default.mark((function e(t) {
                        var r, n, u, i, o, c;
                        return a.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.chatId, n = t.parentMsgKeys, e.next = 3, Promise.allSettled([_({
                                        chatId: r,
                                        parentMsgKeys: n
                                    }), m({
                                        chatId: r,
                                        parentMsgKeys: n
                                    }), k({
                                        chatId: r,
                                        parentMsgKeys: n
                                    })]);
                                case 3:
                                    u = e.sent, i = (0, s.default)(u), e.prev = 5, i.s();
                                case 7:
                                    if ((o = i.n()).done) {
                                        e.next = 13;
                                        break
                                    }
                                    if ("rejected" !== (c = o.value).status) {
                                        e.next = 11;
                                        break
                                    }
                                    throw c.reason;
                                case 11:
                                    e.next = 7;
                                    break;
                                case 13:
                                    e.next = 18;
                                    break;
                                case 15:
                                    e.prev = 15, e.t0 = e.catch(5), i.e(e.t0);
                                case 18:
                                    return e.prev = 18, i.f(), e.finish(18);
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
            var b = (0, l.defineWebPersistedJob)().finalStep("deleteReactionsV2", (function(e) {
                return _({
                    chatId: e.chatId,
                    parentMsgKeys: e.parentMsgKeys
                })
            })).end();

            function _() {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = (0, u.default)(a.default.mark((function e(t) {
                    var r, n, s, u, i, d;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.chatId, n = t.parentMsgKeys, __LOG__(2)`Persisted: deleteReactionsV2 persisted job started for ${r}`, e.next = 4, (0, c.getAllReactionsFromParentMsgs)(n);
                            case 4:
                                if (s = e.sent, 0 !== (u = s.map((function(e) {
                                        return e.msgKey
                                    }))).length) {
                                    e.next = 9;
                                    break
                                }
                                return __LOG__(2)`Persisted: deleteReactionsV2 finished, no reactionsMsgKeys`, e.abrupt("return");
                            case 9:
                                if (i = [], u.forEach((function(e) {
                                        v.default.fromString(e).fromMe && i.push(e)
                                    })), !(i.length > 0)) {
                                    e.next = 15;
                                    break
                                }
                                return e.next = 15, (0, f.removeMessagesFromHistory)(i);
                            case 15:
                                return d = s.map((function(e) {
                                    return [e.parentMsgKey, e.senderUserJid]
                                })), e.next = 19, (0, o.deleteReactionsByRecords)(d);
                            case 19:
                                return e.next = 21, (0, p.deleteLastAddOnsPreview)(n);
                            case 21:
                                __LOG__(2)`Persisted: deleteReactionsV2 finished`;
                            case 22:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function m() {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = (0, u.default)(a.default.mark((function e(t) {
                    var r, n;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.chatId, n = t.parentMsgKeys, __LOG__(2)`Persisted: deletePollVotes job started for ${r}`, e.next = 4, (0, d.deleteVotesByParentMsgKeys)(n);
                            case 4:
                                __LOG__(2)`Persisted: deletePollVotes job finished for ${r}`;
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function k() {
                return M.apply(this, arguments)
            }

            function M() {
                return (M = (0, u.default)(a.default.mark((function e(t) {
                    var r, n;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = t.chatId, n = t.parentMsgKeys, (0, h.isPinnedMessagesM1ReceiverEnabled)()) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                return __LOG__(2)`Persisted deletePins persisted job started for ${r}`, e.next = 6, (0, i.removePinInChatByParentMsgKeys)(n);
                            case 6:
                                __LOG__(2)`Persisted: deletePins finished`;
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
                return c.apply(this, arguments)
            };
            var a = n(r(887757)),
                s = n(r(348926)),
                u = r(712111),
                i = n(r(773467)),
                o = r(454185);

            function c() {
                return (c = (0, s.default)(a.default.mark((function e(t) {
                    var r, n, s;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = new Set(t.map((function(e) {
                                    return i.default.fromString(e).remote.toString()
                                }))), e.next = 3, (0, o.bulkGetChatLastAddOnPreviewMap)(Array.from(r));
                            case 3:
                                return n = e.sent, s = new Map, n.forEach((function(e, r) {
                                    t.includes(null == e ? void 0 : e.parentMsgKey) && s.set(r, void 0)
                                })), e.next = 8, (0, u.bulkUpdateChatLastAddOnPreview)(s);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        403849: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteVotesByParentMsgKeys = function() {
                return c.apply(this, arguments)
            };
            var a = n(r(887757)),
                s = n(r(543269)),
                u = n(r(348926)),
                i = r(503520),
                o = r(452865);

            function c() {
                return (c = (0, u.default)(a.default.mark((function e(t) {
                    var r, n, u, c, f, d, l;
                    return a.default.wrap((function(e) {
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
                                return n = r.map((function(e) {
                                    return e.msgKey
                                })), u = r.map((function(e) {
                                    return [e.parentMsgKey, e.sender]
                                })), e.next = 9, Promise.allSettled([(0, i.removeMessagesFromHistory)(n), (0, o.getTable)().bulkRemove(u)]);
                            case 9:
                                c = e.sent, f = (0, s.default)(c), e.prev = 11, f.s();
                            case 13:
                                if ((d = f.n()).done) {
                                    e.next = 19;
                                    break
                                }
                                if ("rejected" !== (l = d.value).status) {
                                    e.next = 17;
                                    break
                                }
                                throw l.reason;
                            case 17:
                                e.next = 13;
                                break;
                            case 19:
                                e.next = 24;
                                break;
                            case 21:
                                e.prev = 21, e.t0 = e.catch(11), f.e(e.t0);
                            case 24:
                                return e.prev = 24, f.f(), e.finish(24);
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
        960710: (e, t, r) => {
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
                        var u, i, o;
                        return a.default.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return u = (0, s.default)(n, 1), i = u[0], r.next = 3, i.anyOf(["parentMsgKey"], e);
                                case 3:
                                    return (o = r.sent).forEach((function(e) {
                                        return t.push([e.parentMsgKey, e.senderUserJid])
                                    })), r.next = 7, i.bulkRemove(t);
                                case 7:
                                    return r.abrupt("return", o.map((function(e) {
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
                i = r(779138)
        }
    }
]);