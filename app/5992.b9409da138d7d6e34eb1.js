/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [5992], {
        605992: (e, n, t) => {
            "use strict";
            var r = t(595318);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.impressionOnQuickPromotion = void 0;
            var o = r(t(887757)),
                i = r(t(81109)),
                s = r(t(963038)),
                a = r(t(348926)),
                u = t(127494),
                c = t(336782),
                p = t(110298),
                l = t(779138);

            function d() {
                return (d = (0, a.default)(o.default.mark((function e(n, t) {
                    var r, i, s;
                    return o.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.id, i = t.ts, e.next = 3, (0, u.sendEventRPC)({
                                    eventType: "impression",
                                    eventPromotionId: r,
                                    eventTimestampSec: i,
                                    eventLogdata: ""
                                });
                            case 3:
                                "EventResponseSuccess" !== (s = e.sent).name && (s.name, __LOG__(4, void 0, new Error)`impressionOnQuickPromotion: unable to log`);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var f = (0, c.defineWebPersistedJob)().step("saveToDb", (function(e) {
                var n = e.id,
                    t = e.ts;
                return (0, l.getStorage)().lock(["quick-promotions"], function() {
                    var e = (0, a.default)(o.default.mark((function e(r) {
                        var a, u, c, p, l;
                        return o.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = (0, s.default)(r, 1), u = a[0], e.next = 3, u.get(n);
                                case 3:
                                    if (null != (c = e.sent)) {
                                        e.next = 7;
                                        break
                                    }
                                    return __LOG__(3)`impressionOnQuickPromotion: promotion not found`, e.abrupt("return");
                                case 7:
                                    return p = (0, i.default)((0, i.default)({}, c.tracking), {}, {
                                        impressions: c.tracking.impressions + 1
                                    }), (null == (l = p.lastImpressionTs) || t > l) && (p.lastImpressionTs = t), e.next = 12, u.merge(n, {
                                        tracking: p
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
                }()).then(p.loadQuickPromotions)
            })).finalStep("reportToComms", (function() {
                return d.apply(this, arguments)
            })).end();
            n.impressionOnQuickPromotion = f
        },
        110298: (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.loadQuickPromotions = function() {
                if (!(0, o.qpSDKProcessingEnabled)()) return Promise.resolve();
                return (0, i.getQuickPromotionsTable)().all().then((function(e) {
                    e.sort((function(e, n) {
                        return e.data.qpConfigPriority - n.data.qpConfigPriority
                    })), (0, r.frontendFireAndForget)("loadedQuickPromotions", {
                        promotions: e
                    })
                }))
            };
            var r = t(359385),
                o = t(894995),
                i = t(125901)
        }
    }
]);