/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [9356], {
        70411: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defineWebPersistedJob = function(e) {
                return (0, i.definePersistedJob)(e)
            };
            var i = r(50210)
        },
        79356: (e, t, r) => {
            "use strict";
            var i = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(18712),
                a = r(4746),
                d = r(70411),
                u = r(14650),
                s = i(r(98112)),
                o = i(r(31368)),
                l = r(29655),
                c = r(19325),
                p = r(75793),
                f = new s.default("productListResponse", (function(e) {
                    e.assertTag("iq"), e.assertFromServer();
                    var t = e.child("product_list"),
                        r = [];
                    return t.forEachChildWithTag("product", (function(e) {
                        var t = e.maybeChild("id");
                        if (t) {
                            var i = e.maybeChild("status");
                            (null == i ? void 0 : i.contentString()) === l.INVALID_PRODUCT_TOKEN ? r.push({
                                id: t.contentString(),
                                status: l.INVALID_PRODUCT_TOKEN
                            }) : r.push((0, o.default)(e))
                        }
                    })), r
                })),
                h = (0, d.defineWebPersistedJob)("queryProductList").finalStep("sendStanza", (function(e) {
                    var t = e.catalogWid,
                        r = e.productIds,
                        i = e.width,
                        d = e.height,
                        s = (0, n.wap)("iq", {
                            to: n.S_WHATSAPP_NET,
                            type: "get",
                            smax_id: "21",
                            xmlns: "w:biz:catalog",
                            id: (0, n.generateId)()
                        }, (0, n.wap)("product_list", {
                            jid: (0, c.USER_JID)((0, p.createWid)(t))
                        }, r.map((function(e) {
                            return (0, n.wap)("product", null, (0, n.wap)("id", null, e))
                        })).concat([(0, n.wap)("width", null, i.toString()), (0, n.wap)("height", null, d.toString())])));
                    return (0, a.sendIq)(s, f).then((function(e) {
                        if (e.success) return e.result;
                        throw new u.ServerStatusCodeError(e.errorCode)
                    }))
                })).end();
            t.default = h
        }
    }
]);