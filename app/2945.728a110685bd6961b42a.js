/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [2945], {
        727173: (e, t, n) => {
            "use strict";
            var r = n(263026).default,
                a = n(307914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JobBuilder = void 0, t.definePersistedJob = function() {
                return new f([])
            };
            var s = a(n(46292)),
                u = a(n(889372)),
                i = a(n(605816)),
                c = n(606136),
                o = n(281098),
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
                        value: function(t, n) {
                            var a = n.stopRetryIf,
                                u = l(n.requirements, n.code, a);
                            if (a) {
                                var i = a.timePassedSeconds,
                                    f = a.appCrashed,
                                    p = l(null, function(e) {
                                        return function(t, n, a) {
                                            return r.resolve(e(t, n, a)).then((function(e) {
                                                return e instanceof c.InterruptJob ? e : new c.InterruptJob(e)
                                            }))
                                        }
                                    }(a.onStopRetry), a);
                                null != i && (u = d((function(e, t, n) {
                                    var r = n.jobStartTime;
                                    return (0, o.happenedWithin)(r, i)
                                }), u, p)), f && (u = d((function(e, t, n) {
                                    return !n.afterCrash
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
                return function(r, a, s) {
                    return e(r, a, s) ? t(r, a, s) : n(r, a, s)
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
        182945: (e, t, n) => {
            "use strict";
            var r = n(263026).default,
                a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteReactionsV2 = t.deleteAddOns = void 0;
            var s = a(n(887757)),
                u = a(n(543269)),
                i = a(n(348926)),
                c = n(960710),
                o = n(62141),
                f = n(503520),
                d = n(403849),
                l = n(336782),
                p = n(836714),
                v = a(n(773467)),
                h = n(664439),
                y = (0, l.defineWebPersistedJob)().finalStep("deleteAddOns", function() {
                    var e = (0, i.default)(s.default.mark((function e(t) {
                        var n, a, i, c, o, f;
                        return s.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.chatId, a = t.parentMsgKeys, e.next = 3, r.allSettled([g({
                                        chatId: n,
                                        parentMsgKeys: a
                                    }), k({
                                        chatId: n,
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
            var b = (0, l.defineWebPersistedJob)().finalStep("deleteReactionsV2", (function(e) {
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
                    var n, r, a, u, i, d;
                    return s.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.chatId, r = t.parentMsgKeys, __LOG__(2)`Persisted: deleteReactionsV2 persisted job started for ${n}`, e.next = 4, (0, o.getAllReactionsFromParentMsgs)(r);
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
                                        v.default.fromString(e).fromMe && i.push(e)
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
                                return e.next = 21, (0, p.deleteLastAddOnsPreview)(r);
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
                    var n, r;
                    return s.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.chatId, r = t.parentMsgKeys, (0, h.isPollsReceivingEnabled)()) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                return __LOG__(2)`Persisted: deletePollVotes persisted job started for ${n}`, e.next = 6, (0, d.deleteVotesByParentMsgKeys)(r);
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
        836714: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteLastAddOnsPreview = function() {
                return o.apply(this, arguments)
            };
            var a = r(n(887757)),
                s = r(n(348926)),
                u = n(900390),
                i = r(n(773467)),
                c = n(454185);

            function o() {
                return (o = (0, s.default)(a.default.mark((function e(t) {
                    var n, r, s;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = new Set(t.map((function(e) {
                                    return i.default.fromString(e).remote.toString()
                                }))), e.next = 3, (0, c.bulkGetChatLastAddOnPreviewMap)(Array.from(n));
                            case 3:
                                return r = e.sent, s = new Map, r.forEach((function(e, n) {
                                    t.includes(null == e ? void 0 : e.parentMsgKey) && s.set(n, void 0)
                                })), e.next = 8, (0, u.bulkUpdateChatLastAddOnPreview)(s);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        403849: (e, t, n) => {
            "use strict";
            var r = n(263026).default,
                a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteVotesByParentMsgKeys = function() {
                return f.apply(this, arguments)
            };
            var s = a(n(887757)),
                u = a(n(543269)),
                i = a(n(348926)),
                c = n(503520),
                o = n(452865);

            function f() {
                return (f = (0, i.default)(s.default.mark((function e(t) {
                    var n, a, i, f, d, l, p;
                    return s.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, o.getTable)().anyOf(["parentMsgKey"], t);
                            case 2:
                                if (0 !== (n = e.sent).length) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                return a = n.map((function(e) {
                                    return e.msgKey
                                })), i = n.map((function(e) {
                                    return [e.parentMsgKey, e.sender]
                                })), e.next = 9, r.allSettled([(0, c.removeMessagesFromHistory)(a), (0, o.getTable)().bulkRemove(i)]);
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
        960710: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteReactionsByParentMessageKey = function(e) {
                var t = [];
                return (0, i.getStorage)().lock(["reactions"], function() {
                    var n = (0, u.default)(a.default.mark((function n(r) {
                        var u, i;
                        return a.default.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return u = (0, s.default)(r, 1), i = u[0], n.next = 3, i.equals(["parentMsgKey"], e);
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
                    var n = (0, u.default)(a.default.mark((function n(r) {
                        var u, i, c;
                        return a.default.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return u = (0, s.default)(r, 1), i = u[0], n.next = 3, i.anyOf(["parentMsgKey"], e);
                                case 3:
                                    return (c = n.sent).forEach((function(e) {
                                        return t.push([e.parentMsgKey, e.senderUserJid])
                                    })), n.next = 7, i.bulkRemove(t);
                                case 7:
                                    return n.abrupt("return", c.map((function(e) {
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
                    var t = (0, u.default)(a.default.mark((function t(n) {
                        var r, u;
                        return a.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return r = (0, s.default)(n, 1), u = r[0], t.next = 3, u.bulkRemove(e);
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
                s = r(n(963038)),
                u = r(n(348926)),
                i = n(866462)
        }
    }
]);