/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [6354], {
        746354: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.dismissQuickPromotion = void 0;
            var s = r(n(887757)),
                o = r(n(81109)),
                i = r(n(963038)),
                a = r(n(348926)),
                u = n(127494),
                c = n(336782),
                d = n(110298),
                l = n(779138);

            function f() {
                return (f = (0, a.default)(s.default.mark((function e(t, n) {
                    var r, o, i;
                    return s.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = n.id, o = n.ts, e.next = 3, (0, u.sendEventRPC)({
                                    eventType: "dismiss",
                                    eventPromotionId: r,
                                    eventTimestampSec: o,
                                    eventLogdata: ""
                                });
                            case 3:
                                "EventResponseSuccess" !== (i = e.sent).name && (i.name, __LOG__(4, void 0, new Error)`dismissQuickPromotion: unable to log`);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var p = (0, c.defineWebPersistedJob)().step("saveToDb", (function(e) {
                var t = e.id,
                    n = e.ts;
                return (0, l.getStorage)().lock(["quick-promotions"], function() {
                    var e = (0, a.default)(s.default.mark((function e(r) {
                        var a, u, c, d, l;
                        return s.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = (0, i.default)(r, 1), u = a[0], e.next = 3, u.get(t);
                                case 3:
                                    if (null != (c = e.sent)) {
                                        e.next = 7;
                                        break
                                    }
                                    return __LOG__(3)`dismissQuickPromotion: promotion not found`, e.abrupt("return");
                                case 7:
                                    return d = (0, o.default)((0, o.default)({}, c.tracking), {}, {
                                        dismisses: c.tracking.dismisses + 1
                                    }), (null == (l = d.lastDismissTs) || n > l) && (d.lastDismissTs = n), e.next = 12, u.merge(t, {
                                        tracking: d
                                    });
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()).then(d.loadQuickPromotions)
            })).finalStep("reportToComms", (function() {
                return f.apply(this, arguments)
            })).end();
            t.dismissQuickPromotion = p
        },
        110298: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.loadQuickPromotions = function() {
                if (!(0, s.qpSDKProcessingEnabled)()) return Promise.resolve();
                return (0, o.getQuickPromotionsTable)().all().then((function(e) {
                    e.sort((function(e, t) {
                        return e.data.qpConfigPriority - t.data.qpConfigPriority
                    })), (0, r.frontendFireAndForget)("loadedQuickPromotions", {
                        promotions: e
                    })
                }))
            };
            var r = n(359385),
                s = n(894995),
                o = n(125901)
        }
    }
]);