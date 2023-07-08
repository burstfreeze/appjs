/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [4067], {
        414067: (e, r, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.userExposureToQuickPromotion = void 0;
            var o = n(t(887757)),
                s = n(t(348926)),
                u = t(127494);

            function i() {
                return (i = (0, s.default)(o.default.mark((function e(r) {
                    var t, n, s, i;
                    return o.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t = r.id, n = r.ts, 0 !== (s = r.experimentKey).length) {
                                    e.next = 4;
                                    break
                                }
                                return __LOG__(4, void 0, new Error, !0)`userExposureToQuickPromotion: missing experiment key`, SEND_LOGS("user-exposure-quick-promotion-missing-exp-key"), e.abrupt("return");
                            case 4:
                                return e.next = 6, (0, u.sendEventRPC)({
                                    eventType: "exposure",
                                    eventPromotionId: t,
                                    eventTimestampSec: n,
                                    eventLogdata: s
                                });
                            case 6:
                                "EventResponseSuccess" !== (i = e.sent).name && (i.name, __LOG__(4, void 0, new Error)`userExposureToQuickPromotion: unable to log`);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var a = (0, t(336782).defineWebPersistedJob)().finalStep("reportToComms", (function() {
                return i.apply(this, arguments)
            })).end();
            r.userExposureToQuickPromotion = a
        }
    }
]);