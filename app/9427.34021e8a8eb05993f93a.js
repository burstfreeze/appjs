/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [9427], {
        110298: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.loadQuickPromotions = function() {
                if (!(0, o.qpSDKProcessingEnabled)()) return Promise.resolve();
                return (0, i.getQuickPromotionsTable)().all().then((function(e) {
                    e.sort((function(e, t) {
                        return e.data.qpConfigPriority - t.data.qpConfigPriority
                    })), (0, n.frontendFireAndForget)("loadedQuickPromotions", {
                        promotions: e
                    })
                }))
            };
            var n = r(359385),
                o = r(894995),
                i = r(125901)
        },
        729427: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.primaryActionClickInQuickPromotion = void 0;
            var o = n(r(887757)),
                i = n(r(81109)),
                a = n(r(963038)),
                c = n(r(348926)),
                u = r(127494),
                s = r(336782),
                l = r(110298),
                p = r(779138);

            function d() {
                return (d = (0, c.default)(o.default.mark((function e(t, r) {
                    var n, i, a;
                    return o.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r.id, i = r.ts, e.next = 3, (0, u.sendEventRPC)({
                                    eventType: "primary_click",
                                    eventPromotionId: n,
                                    eventTimestampSec: i,
                                    eventLogdata: ""
                                });
                            case 3:
                                "EventResponseSuccess" !== (a = e.sent).name && (a.name, __LOG__(4, void 0, new Error)`primaryActionClickInQuickPromotion: unable to log`);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var f = (0, s.defineWebPersistedJob)().step("saveToDb", (function(e) {
                var t = e.id,
                    r = e.ts;
                return (0, p.getStorage)().lock(["quick-promotions"], function() {
                    var e = (0, c.default)(o.default.mark((function e(n) {
                        var c, u, s, l, p;
                        return o.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return c = (0, a.default)(n, 1), u = c[0], e.next = 3, u.get(t);
                                case 3:
                                    if (null != (s = e.sent)) {
                                        e.next = 7;
                                        break
                                    }
                                    return __LOG__(3)`primaryActionClickInQuickPromotion: promotion not found`, e.abrupt("return");
                                case 7:
                                    return l = (0, i.default)((0, i.default)({}, s.tracking), {}, {
                                        primaryClicks: s.tracking.primaryClicks + 1
                                    }), (null == (p = l.lastPrimaryClickTs) || r > p) && (l.lastPrimaryClickTs = r), e.next = 12, u.merge(t, {
                                        tracking: l
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
                }()).then(l.loadQuickPromotions)
            })).finalStep("reportToComms", (function() {
                return d.apply(this, arguments)
            })).end();
            t.primaryActionClickInQuickPromotion = f
        }
    }
]);