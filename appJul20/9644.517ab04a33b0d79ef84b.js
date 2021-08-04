/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [9644], {
        70411: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defineWebPersistedJob = function(e) {
                return (0, n.definePersistedJob)(e)
            };
            var n = r(50210)
        },
        29644: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(80206),
                a = r(18712),
                i = r(48935),
                o = r(4746),
                s = r(1018),
                d = r(91056),
                u = r(36918),
                _ = r(5043),
                y = r(70411),
                l = new n.WapParser("rotateKeyResponseParser", (function(e) {
                    e.assertFromServer()
                })),
                f = (0, y.defineWebPersistedJob)("rotateKey").step("uploadKeys", (function() {
                    return s.waSignalStore.getRegistrationInfo().then((function(e) {
                        if (!e) throw new Error("No registration info is available");
                        return s.waSignalStore.rotateSignedPreKey((0, i.toSignalCurveKeyPair)(e.identityKeyPair), d.generateSignedKeyPair)
                    })).then((function(e) {
                        __LOG__(2)`rotateKey: signedPreKey uploading`;
                        var t = (0, a.wap)("iq", {
                            xmlns: "encrypt",
                            type: "set",
                            to: a.S_WHATSAPP_NET,
                            id: (0, a.generateId)()
                        }, (0, a.wap)("rotate", null, (0, u.xmppSignedPreKey)(e)));
                        return (0, o.sendIq)(t, l).then((function(e) {
                            if (e.success) return {
                                shouldDigestKey: !1
                            };
                            var t = !1,
                                r = e.errorCode;
                            return 406 === r ? __LOG__(3)`rotateKey generated bad key` : 409 === r ? (__LOG__(3)`skey does not pass server validation`, t = !0) : r >= 500 ? __LOG__(2)`rotateKey server error ${r}, wait a day` : (__LOG__(2)`rotateKey unrecognized error ${r}`, t = !0), {
                                shouldDigestKey: t
                            }
                        }))
                    }))
                })).finalStep("maybeDigestKey", (function(e) {
                    if (e.shouldDigestKey) return (0, _.digestKey)()
                })).end();
            t.default = f
        }
    }
]);