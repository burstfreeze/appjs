/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [2941], {
        127494: (e, r, t) => {
            "use strict";
            var s = t(307914);
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.sendEventRPC = function() {
                return f.apply(this, arguments)
            };
            var n = s(t(157135)),
                a = s(t(311504)),
                u = t(115066),
                i = t(289118),
                c = t(978849),
                o = t(566025),
                l = t(206558),
                v = t(918406);

            function f() {
                return (f = (0, a.default)(n.default.mark((function e(r, t) {
                    var s, a, f, p;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return s = (0, o.makeEventRequest)(r), e.next = 3, (0, u.sendSmaxStanza)(s, t);
                            case 3:
                                if (a = e.sent, !(f = (0, c.parseEventResponseSuccess)(a, s)).success) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", {
                                    name: "EventResponseSuccess",
                                    value: f.value
                                });
                            case 7:
                                if (!(p = (0, i.parseEventResponseError)(a, s)).success) {
                                    e.next = 10;
                                    break
                                }
                                return e.abrupt("return", {
                                    name: "EventResponseError",
                                    value: p.value
                                });
                            case 10:
                                throw new l.SmaxParsingFailure((0, v.errorMessageRpcParsing)("Event", {
                                    Success: f,
                                    Error: p
                                }));
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        289118: (e, r, t) => {
            "use strict";
            var s = t(307914);
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.parseEventResponseError = function(e, r) {
                var t = (0, c.assertTag)(e, "iq");
                if (!t.success) return t;
                var s = (0, c.flattenedChildWithTag)(e, "error");
                if (!s.success) return s;
                var o = (0, i.parseIQErrorResponseMixin)(e, r);
                if (!o.success) return o;
                var l = (0, u.parseIQErrorInternalServerErrorOrRequestTimeoutOrServiceUnavailableMixinGroup)(s.value);
                if (!l.success) return l;
                return (0, a.makeResult)((0, n.default)((0, n.default)({}, o.value), {}, {
                    errorIQErrorInternalServerErrorOrRequestTimeoutOrServiceUnavailableMixinGroup: l.value
                }))
            };
            var n = s(t(73982)),
                a = t(269387),
                u = t(564620),
                i = t(693160),
                c = t(236156)
        },
        978849: (e, r, t) => {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.parseEventResponseSuccess = function(e, r) {
                var t = (0, n.assertTag)(e, "iq");
                if (!t.success) return t;
                var a = (0, s.parseIQResultResponseMixin)(e, r);
                if (!a.success) return a;
                return a
            };
            var s = t(672571),
                n = t(236156)
        },
        676534: (e, r, t) => {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.parseIQErrorInternalServerErrorMixin = function(e) {
                var r = (0, n.assertTag)(e, "error");
                if (!r.success) return r;
                var t = (0, n.literal)(n.attrString, e, "text", "internal-server-error");
                if (!t.success) return t;
                var a = (0, n.literal)(n.attrInt, e, "code", 500);
                if (!a.success) return a;
                return (0, s.makeResult)({
                    text: t.value,
                    code: a.value
                })
            };
            var s = t(269387),
                n = t(236156)
        },
        564620: (e, r, t) => {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.parseIQErrorInternalServerErrorOrRequestTimeoutOrServiceUnavailableMixinGroup = function(e) {
                var r = (0, n.parseIQErrorInternalServerErrorMixin)(e);
                if (r.success) return (0, s.makeResult)({
                    name: "IQErrorInternalServerError",
                    value: r.value
                });
                var t = (0, a.parseIQErrorRequestTimeoutMixin)(e);
                if (t.success) return (0, s.makeResult)({
                    name: "IQErrorRequestTimeout",
                    value: t.value
                });
                var c = (0, u.parseIQErrorServiceUnavailableMixin)(e);
                if (c.success) return (0, s.makeResult)({
                    name: "IQErrorServiceUnavailable",
                    value: c.value
                });
                return (0, i.errorMixinDisjunction)(e, ["IQErrorInternalServerError", "IQErrorRequestTimeout", "IQErrorServiceUnavailable"], [r, t, c])
            };
            var s = t(269387),
                n = t(676534),
                a = t(891120),
                u = t(141724),
                i = t(236156)
        },
        891120: (e, r, t) => {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.parseIQErrorRequestTimeoutMixin = function(e) {
                var r = (0, n.assertTag)(e, "error");
                if (!r.success) return r;
                var t = (0, n.literal)(n.attrString, e, "text", "request-timeout");
                if (!t.success) return t;
                var a = (0, n.literal)(n.attrInt, e, "code", 408);
                if (!a.success) return a;
                return (0, s.makeResult)({
                    text: t.value,
                    code: a.value
                })
            };
            var s = t(269387),
                n = t(236156)
        },
        693160: (e, r, t) => {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.parseIQErrorResponseMixin = function(e, r) {
                var t = (0, a.assertTag)(e, "iq");
                if (!t.success) return t;
                var u = (0, n.attrStringFromReference)(r, ["id"]);
                if (!u.success) return u;
                var i = (0, a.literal)(a.attrString, e, "id", u.value);
                if (!i.success) return i;
                var c = (0, n.attrStringFromReference)(r, ["to"]);
                if (!c.success) return c;
                var o = (0, a.literal)(a.attrString, e, "from", c.value);
                if (!o.success) return o;
                var l = (0, a.literal)(a.attrString, e, "type", "error");
                if (!l.success) return l;
                return (0, s.makeResult)({
                    type: l.value
                })
            };
            var s = t(269387),
                n = t(440884),
                a = t(236156)
        },
        141724: (e, r, t) => {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.parseIQErrorServiceUnavailableMixin = function(e) {
                var r = (0, n.assertTag)(e, "error");
                if (!r.success) return r;
                var t = (0, n.literal)(n.attrString, e, "text", "service-unavailable");
                if (!t.success) return t;
                var a = (0, n.literal)(n.attrInt, e, "code", 503);
                if (!a.success) return a;
                return (0, s.makeResult)({
                    text: t.value,
                    code: a.value
                })
            };
            var s = t(269387),
                n = t(236156)
        },
        672571: (e, r, t) => {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.parseIQResultResponseMixin = function(e, r) {
                var t = (0, a.assertTag)(e, "iq");
                if (!t.success) return t;
                var u = (0, n.attrStringFromReference)(r, ["id"]);
                if (!u.success) return u;
                var i = (0, a.literal)(a.attrString, e, "id", u.value);
                if (!i.success) return i;
                var c = (0, n.attrStringFromReference)(r, ["to"]);
                if (!c.success) return c;
                var o = (0, a.literal)(a.attrString, e, "from", c.value);
                if (!o.success) return o;
                var l = (0, a.literal)(a.attrString, e, "type", "result");
                if (!l.success) return l;
                return (0, s.makeResult)({
                    type: l.value
                })
            };
            var s = t(269387),
                n = t(440884),
                a = t(236156)
        },
        393883: (e, r, t) => {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.mergeBaseIQSetRequestMixin = function(e) {
                var r = (0, s.smax)("iq", {
                    id: (0, a.generateId)(),
                    type: "set"
                });
                return (0, n.mergeStanzas)(e, r)
            };
            var s = t(134131),
                n = t(121011),
                a = t(985044)
        },
        566025: (e, r, t) => {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.makeEventRequest = function(e) {
                var r = e.eventPromotionId,
                    t = e.eventType,
                    u = e.eventTimestampSec,
                    i = e.eventLogdata;
                return (0, n.mergeBaseIQSetRequestMixin)((0, s.smax)("iq", {
                    xmlns: "w:comms",
                    to: a.S_WHATSAPP_NET
                }, (0, s.smax)("event", {
                    promotion_id: (0, a.CUSTOM_STRING)(r),
                    type: (0, a.CUSTOM_STRING)(t),
                    timestamp_sec: (0, a.INT)(u),
                    logdata: (0, a.CUSTOM_STRING)(i)
                })))
            };
            var s = t(134131),
                n = t(393883),
                a = t(985044)
        },
        727173: (e, r, t) => {
            "use strict";
            var s = t(307914);
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.JobBuilder = void 0, r.definePersistedJob = function() {
                return new o([])
            };
            var n = s(t(46292)),
                a = s(t(889372)),
                u = s(t(605816)),
                i = t(606136),
                c = t(281098),
                o = function() {
                    function e(r) {
                        (0, a.default)(this, e), this.steps = r
                    }
                    return (0, u.default)(e, [{
                        key: "step",
                        value: function(e, r) {
                            return this._stepWithOptions(e, "function" == typeof r ? {
                                code: r
                            } : r)
                        }
                    }, {
                        key: "_stepWithOptions",
                        value: function(r, t) {
                            var s = t.stopRetryIf,
                                a = v(t.requirements, t.code, s);
                            if (s) {
                                var u = s.timePassedSeconds,
                                    o = s.appCrashed,
                                    f = v(null, function(e) {
                                        return function(r, t, s) {
                                            return Promise.resolve(e(r, t, s)).then((function(e) {
                                                return e instanceof i.InterruptJob ? e : new i.InterruptJob(e)
                                            }))
                                        }
                                    }(s.onStopRetry), s);
                                null != u && (a = l((function(e, r, t) {
                                    var s = t.jobStartTime;
                                    return (0, c.happenedWithin)(s, u)
                                }), a, f)), o && (a = l((function(e, r, t) {
                                    return !t.afterCrash
                                }), a, f))
                            }
                            return new e([].concat((0, n.default)(this.steps), [{
                                stepName: r,
                                info: a
                            }]))
                        }
                    }, {
                        key: "finalStep",
                        value: function(e, r) {
                            var t = this.step(e, r);
                            return {
                                end: function() {
                                    return t.steps
                                }
                            }
                        }
                    }]), e
                }();

            function l(e, r, t) {
                return function(s, n, a) {
                    return e(s, n, a) ? r(s, n, a) : t(s, n, a)
                }
            }

            function v(e, r, t) {
                var s = {
                    requirements: e,
                    code: r,
                    stopRetryIf: t
                };
                return function() {
                    return s
                }
            }
            r.JobBuilder = o
        },
        336782: (e, r, t) => {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.defineWebPersistedJob = function() {
                return (0, s.definePersistedJob)()
            };
            var s = t(727173)
        }
    }
]);