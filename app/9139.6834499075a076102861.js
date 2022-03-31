/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [9139], {
        97629: (e, t, r) => {
            "use strict";
            var n = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.appendPrefilledMsg = E, t.sendOrderDetailsMessageAsMerchant = function() {
                return M.apply(this, arguments)
            }, t.sendOrderStatusMessageAsMerchant = function() {
                return I.apply(this, arguments)
            };
            var a = n(r(87757)),
                i = n(r(81109)),
                l = n(r(48926)),
                o = r(14585),
                u = r(73466),
                s = n(r(90797)),
                d = r(40787),
                c = n(r(67082)),
                f = r(84460),
                p = r(48360),
                h = r(72743),
                m = r(1577),
                g = n(r(90629)),
                v = n(r(23322)),
                b = n(r(11773)),
                x = n(r(57393)),
                y = C(r(70427)),
                j = r(45311),
                S = C(r(6578)),
                _ = r(78383),
                k = r(26237);

            function O(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (O = function(e) {
                    return e ? r : t
                })(e)
            }

            function C(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var r = O(t);
                if (r && r.has(e)) return r.get(e);
                var n = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var l = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                        l && (l.get || l.set) ? Object.defineProperty(n, i, l) : n[i] = e[i]
                    } return n.default = e, r && r.set(e, n), n
            }

            function T(e, t) {
                var r, n;
                if (null == t) return "";
                var a = h.CatalogCollection.get((0, f.createWid)(e)),
                    i = null == a ? void 0 : a.productCollection.get(t),
                    l = null == i || null === (r = i.getProductImageCollectionHead()) || void 0 === r ? void 0 : r.mediaData.preview;
                return l instanceof x.default && null !== (n = l.getBase64()) && void 0 !== n ? n : ""
            }

            function w() {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = (0, l.default)(a.default.mark((function e(t) {
                    var r, n, l, f, p, h, g, b, x, y, j, S;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = t.caption, n = t.chat, l = t.nativeFlowName, f = t.buttonParamsJson, p = t.errorMessage, h = t.thumbnail, g = t.buttonName, b = t.contextInfo, x = (0, m.getMaybeMeUser)(), y = h ? {
                                        title: void 0,
                                        subtitle: void 0,
                                        mediaType: void 0,
                                        hasMediaAttachment: !1,
                                        thumbnail: h
                                    } : void 0, j = (0, i.default)({
                                        type: d.MSG_TYPE.INTERACTIVE,
                                        ack: o.ACK.CLOCK,
                                        from: x,
                                        id: new s.default({
                                            from: x,
                                            to: n.id,
                                            id: s.default.newId(),
                                            participant: void 0,
                                            selfDir: "out"
                                        }),
                                        local: !0,
                                        isNewMsg: !0,
                                        self: "out",
                                        t: u.Clock.globalUnixTime(),
                                        to: n.id,
                                        caption: r,
                                        nativeFlowName: l,
                                        interactiveHeader: y,
                                        interactiveType: v.default.NATIVE_FLOW,
                                        interactivePayload: {
                                            buttons: [{
                                                name: g,
                                                buttonParamsJson: f
                                            }],
                                            messageVersion: 1
                                        }
                                    }, b), !c.default.equals(n.id, x)) {
                                    e.next = 15;
                                    break
                                }
                                return e.prev = 5, e.next = 8, (0, _.addAndSendMsgToChat)(n, j)[0];
                            case 8:
                                return e.abrupt("return");
                            case 11:
                                throw e.prev = 11, e.t0 = e.catch(5), __LOG__(3)`${p}: ${e.t0}`, e.t0;
                            case 15:
                                return e.prev = 15, e.next = 18, (0, _.addAndSendMsgToChat)(n, j)[1];
                            case 18:
                                if ((S = e.sent) && S === k.SendMsgResult.OK) {
                                    e.next = 21;
                                    break
                                }
                                throw new Error("Order message SendMsgResult failure status");
                            case 21:
                                e.next = 27;
                                break;
                            case 23:
                                throw e.prev = 23, e.t1 = e.catch(15), __LOG__(3)`${p}: ${e.t1}`, e.t1;
                            case 27:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [5, 11],
                        [15, 23]
                    ])
                })))).apply(this, arguments)
            }

            function M() {
                return (M = (0, l.default)(a.default.mark((function e(t) {
                    var r, n, i, l, o, u, s, d, c, f, p, h, m;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.order, i = t.chat, l = t.orderNote, o = t.discount, u = t.shipping, s = t.tax, d = t.total, c = t.offset, f = null === (r = n.orderItemCollection.head()) || void 0 === r ? void 0 : r.id, p = T(n.sellerJid, f), h = n.orderItemCollection.map((function(e) {
                                    return {
                                        retailer_id: e.id,
                                        name: e.name,
                                        amount: {
                                            value: e.price,
                                            offset: c
                                        },
                                        quantity: e.quantity,
                                        isCustomItem: e.isCustomItem,
                                        isQuantitySet: e.isQuantitySet
                                    }
                                })), m = {
                                    reference_id: (0, g.default)(),
                                    type: "physical-goods",
                                    payment_configuration: "merchant_categorization_code",
                                    currency: n.currency,
                                    total_amount: {
                                        value: d,
                                        offset: c
                                    },
                                    order: {
                                        status: (0, j.getDefaultOrderStatus)(),
                                        items: h,
                                        subtotal: {
                                            value: Number(n.subtotal),
                                            offset: c
                                        },
                                        tax: null == s ? void 0 : {
                                            value: s,
                                            offset: c
                                        },
                                        shipping: null == u ? void 0 : {
                                            value: u,
                                            offset: c
                                        },
                                        discount: null == o ? void 0 : {
                                            value: o,
                                            offset: c
                                        }
                                    }
                                }, e.next = 7, w({
                                    caption: l,
                                    chat: i,
                                    nativeFlowName: b.default.ORDER_DETAILS,
                                    buttonParamsJson: y.stringify(m),
                                    errorMessage: "Order message send to chat failure",
                                    thumbnail: p,
                                    buttonName: "review_and_pay"
                                });
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function E(e, t) {
                var r = "";
                switch (t) {
                    case j.OrderStatus.Pending:
                        r = p.fbt._("Your order is pending.", null, {
                            hk: "4db7Ml"
                        });
                        break;
                    case j.OrderStatus.Processing:
                        r = p.fbt._("Your order is processing.", null, {
                            hk: "4D5lpu"
                        });
                        break;
                    case j.OrderStatus.PartiallyShipped:
                        r = p.fbt._("Your order has been partially shipped.", null, {
                            hk: "2GKQFn"
                        });
                        break;
                    case j.OrderStatus.Shipped:
                        r = p.fbt._("Your order has been shipped.", null, {
                            hk: "4AfRzr"
                        });
                        break;
                    case j.OrderStatus.Complete:
                        r = p.fbt._("Your order has been completed.", null, {
                            hk: "ZOG5Q"
                        });
                        break;
                    case j.OrderStatus.Canceled:
                        r = p.fbt._("Your order was canceled.", null, {
                            hk: "1dMPFb"
                        })
                }
                return (e || "").trim() ? r.toString() + "\n" + (e || "") : r.toString()
            }

            function I() {
                return (I = (0, l.default)(a.default.mark((function e(t) {
                    var r, n, i, l, o, u, s, d, c, f, p, h;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.chat, n = t.sellerJid, i = t.orderInfo, l = t.orderNote, o = t.orderStatus, u = i.items, s = i.referenceId, d = u[0].id, c = T(n, d), f = {
                                    reference_id: s,
                                    order: {
                                        status: o
                                    }
                                }, p = (0, j.findOrderDetailsMessage)(r, s), h = null == p ? void 0 : p.msgContextInfo(r.id), e.next = 10, w({
                                    caption: E(l, o),
                                    chat: r,
                                    nativeFlowName: b.default.ORDER_STATUS,
                                    buttonParamsJson: S.stringify(f),
                                    errorMessage: "Order message sent to chat failure",
                                    thumbnail: c,
                                    buttonName: "review_order",
                                    contextInfo: h
                                });
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        6578: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.stringify = function(e) {
                return JSON.stringify(e)
            }
        },
        31527: (e, t, r) => {
            "use strict";
            var n = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, u.jsxs)("div", {
                    className: (0, l.default)(s),
                    "data-a8n": a.default.key(e.a8nText),
                    children: [(0, u.jsx)("span", {
                        className: (0, l.default)(c),
                        children: "▾"
                    }), (0, u.jsx)("select", {
                        className: (0, l.default)(d, i.uiPadding.horiz10),
                        onClick: function(e) {
                            e.preventDefault(), e.stopPropagation()
                        },
                        value: e.quantity,
                        onChange: function(t) {
                            var r = t.target;
                            r instanceof HTMLSelectElement && e.onChange(parseInt(r.value, 10))
                        },
                        children: (0, u.jsx)(f, {})
                    })]
                })
            };
            var a = n(r(84646)),
                i = r(71091),
                l = n(r(56720)),
                o = r(7558),
                u = r(85893),
                s = {
                    position: "g0rxnol2",
                    flexGrow: "ggj6brxn",
                    flexShrink: "m0h2a7mj",
                    flexBasis: "l07amlnk",
                    width: "b6qzmhfs"
                },
                d = {
                    fontFamily: "shdiholb"
                },
                c = {
                    position: "lhggkp7q",
                    top: "jgz0asyo",
                    end: "j2mzdvlq",
                    zIndex: "mb8var44",
                    display: "f804f6gw",
                    height: "hpdpob1j",
                    fontSize: "cqiun4t2",
                    lineHeight: "gz7w46tb",
                    color: "hp667wtd",
                    pointerEvents: "m62443ks",
                    backgroundRepeat: "sxl192xd"
                };

            function f() {
                for (var e = [], t = 1; t <= o.MAX_QUANTITY; t++) e.push((0, u.jsx)("option", {
                    value: t,
                    children: t
                }, t));
                return e
            }
        },
        38275: (e, t, r) => {
            "use strict";
            var n = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, o.jsx)(l.default, {
                    "aria-label": a.fbt._("Remove from cart", null, {
                        hk: "9voCj"
                    }),
                    name: "delete",
                    title: a.fbt._("Remove from cart", null, {
                        hk: "9voCj"
                    }),
                    className: (0, i.default)(u),
                    onClick: e.onClick
                })
            };
            var a = r(48360),
                i = n(r(56720)),
                l = n(r(28706)),
                o = r(85893),
                u = {
                    color: "svlsagor",
                    ":hover": {
                        color: "kbf8aj4n"
                    }
                }
        },
        32125: (e, t, r) => {
            "use strict";
            var n = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AddOrderItem = function(e) {
                var t = e.title,
                    r = e.onClick;
                return (0, l.jsx)(a.default, {
                    a8n: "add-order-item-button",
                    image: (0, l.jsx)(i.AddItemIcon, {}),
                    primary: t,
                    theme: "add-order-item",
                    onClick: r
                })
            };
            var a = n(r(88186)),
                i = r(25267),
                l = r(85893)
        },
        56192: (e, t, r) => {
            "use strict";
            var n = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CatalogProductPriceInput = function(e) {
                var t = e.price,
                    r = e.currency,
                    n = e.onPriceChange,
                    h = (0, l.useState)(null != t ? String(t / 1e3) : null),
                    m = (0, a.default)(h, 2),
                    g = m[0],
                    v = m[1],
                    b = (0, l.useState)(null),
                    x = (0, a.default)(b, 2),
                    y = x[0],
                    j = x[1];
                return (0, c.useShowToastErrors)({
                    productPriceError: y
                }), (0, f.jsx)(u.default, {
                    onClick: function(e) {
                        e.stopPropagation(), null == g && v("")
                    },
                    a8nText: "enter-price-button",
                    className: (0, o.default)(p),
                    children: null == g ? i.fbt._("Enter Price", null, {
                        hk: "LKnZv"
                    }) : (0, f.jsx)(d.default, {
                        currency: r,
                        value: g || "",
                        onChange: function(e) {
                            var t = e.value,
                                a = e.error;
                            !1 === Boolean(a) && n(t ? (0, s.valueFromString)(r, t) : null), v(t), j(a)
                        }
                    })
                })
            };
            var a = n(r(63038)),
                i = r(48360),
                l = r(67294),
                o = n(r(56720)),
                u = n(r(51599)),
                s = r(86018),
                d = n(r(20969)),
                c = r(99030),
                f = r(85893),
                p = {
                    color: "o0rubyzf",
                    cursor: "ajgl1lbb",
                    fontWeight: "m1e7cby3",
                    lineHeight: "iq0m558w",
                    letterSpacing: "ysae3w6m"
                }
        },
        20969: (e, t, r) => {
            "use strict";
            var n = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.value,
                    r = e.currency,
                    n = e.onChange,
                    a = e.getErrorMessage,
                    u = f(t, r, a),
                    s = (0, o.default)(u),
                    h = (0, o.default)(t);
                return (0, i.useEffect)((function() {
                    (null == h && null != u || h === t && s !== u) && n({
                        value: t,
                        error: u
                    })
                }), [u]), (0, c.jsx)("div", {
                    className: (0, l.default)(p),
                    children: (0, c.jsx)(d.TextInput, {
                        managed: !0,
                        constrainedWidth: !0,
                        hideFloatingLabel: !0,
                        placeholder: "0",
                        value: t,
                        theme: "small",
                        maxLength: 12,
                        customStyleThemes: ["disabledLabel", "noErrorInfo"],
                        a8n: "order-detail-amount-input",
                        onChange: function(e) {
                            n({
                                value: e,
                                error: f(e, r, a)
                            })
                        },
                        error: u
                    })
                })
            };
            var a = r(48360),
                i = r(67294),
                l = n(r(56720)),
                o = n(r(79787)),
                u = r(86018),
                s = r(89846),
                d = r(68544),
                c = r(85893);

            function f(e, t, r) {
                if (!(0, u.validatePriceString)(t, e)) return a.fbt._("Enter a valid number", null, {
                    hk: "2i2FVR"
                });
                var n = (0, u.valueFromString)(t, e) / s.DEFAULT_OFFSET;
                return n < 0 ? a.fbt._("Enter a positive number", null, {
                    hk: "V2XZe"
                }) : null == r ? void 0 : r(n)
            }
            var p = {
                textAlign: "ljrqcn24",
                width: "mh8l8k0y",
                overflowX: "gfz4du6o",
                overflowY: "r7fjleex",
                marginTop: "obt84bhp"
            }
        },
        99030: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.additionalChargeErrorHandler = function(e) {
                var t = e.label,
                    r = e.currency,
                    a = e.fieldType,
                    i = e.maxFlatValue,
                    l = e.enablePercentValueCheck,
                    s = e.value;
                if (!(0, o.validatePriceString)(r, s)) return c;
                var d = (0, o.valueFromString)(r, s) / u.DEFAULT_OFFSET;
                if (d < 0) return f;
                if (a === u.PERCENTAGE_SYMBOL) {
                    if (Boolean(l) && d > 100) return p(null != t ? t : "")
                } else if ((0, n.isNumber)(i) && d > i) return h(null != t ? t : "");
                return ""
            }, t.negativeNumber = t.invalidNumber = t.errorMessageBigPercentageValue = t.errorMessageBigFlatValue = void 0, t.useShowToastErrors = function(e) {
                (0, i.useEffect)((function() {
                    for (var t in e) {
                        var r = e[t];
                        null != r && l.Cmd.openToast((0, d.jsx)(s.Toast, {
                            duration: 1e4,
                            id: t + r.toString(),
                            msg: r,
                            action: {
                                actionText: a.fbt._("OKAY", null, {
                                    hk: "24jI97"
                                }),
                                dismiss: !0,
                                theme: "success"
                            }
                        }))
                    }
                }), [e])
            };
            var n = r(43393),
                a = r(48360),
                i = r(67294),
                l = r(65901),
                o = r(86018),
                u = r(89846),
                s = r(92428),
                d = r(85893);
            var c = a.fbt._("Enter a valid number", null, {
                hk: "2i2FVR"
            });
            t.invalidNumber = c;
            var f = a.fbt._("Enter a positive number", null, {
                hk: "V2XZe"
            });
            t.negativeNumber = f;
            var p = function(e) {
                return a.fbt._("{input_label} can't be bigger than 100%", [a.fbt._param("input_label", e)], {
                    hk: "48j18J"
                })
            };
            t.errorMessageBigPercentageValue = p;
            var h = function(e) {
                return a.fbt._("{input_label} must be less than subtotal", [a.fbt._param("input_label", e)], {
                    hk: "1UOGGL"
                })
            };
            t.errorMessageBigFlatValue = h
        },
        89846: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PERCENTAGE_SYMBOL = t.DEFAULT_OFFSET = void 0, t.calculateFlatAmounts = function(e) {
                var t = e.orderSubtotal,
                    r = e.discountType,
                    n = e.discountText,
                    o = e.taxType,
                    u = e.taxText,
                    s = e.shippingText,
                    d = l({
                        type: r,
                        value: n,
                        total: t
                    }),
                    c = l({
                        type: o,
                        value: u,
                        total: t - (null != d ? d : 0)
                    }),
                    f = i(s),
                    p = t - (null != d ? d : 0) + (null != f ? f : 0) + (null != c ? c : 0);
                return {
                    total: Math.trunc(p * a),
                    tax: null == c ? null : Math.trunc(c * a),
                    shipping: null == f ? null : Math.trunc(f * a),
                    discount: null == d ? null : Math.trunc(d * a)
                }
            };
            var n = r(86018);
            t.PERCENTAGE_SYMBOL = "%";
            var a = 1e3;

            function i(e) {
                if ("" === e) return null;
                var t = (0, n.valueFromString)("USD", e) / a;
                return Number.isNaN(t) ? 0 : t
            }

            function l(e) {
                var t = e.type,
                    r = e.value,
                    n = e.total,
                    a = i(r);
                return null == a ? null : "%" === t ? a / 100 * n : a
            }
            t.DEFAULT_OFFSET = a
        },
        58636: (e, t, r) => {
            "use strict";
            var n = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.children;
                return (0, o.jsx)(l.FlexColumn, {
                    xstyle: u.container,
                    align: "stretch",
                    children: a.Children.map(t, (function(e, t) {
                        return (0, o.jsxs)(o.Fragment, {
                            children: [0 !== t ? (0, o.jsx)("div", {
                                className: (0, i.default)(u.separator)
                            }) : null, e]
                        })
                    }))
                })
            };
            var a = r(67294),
                i = n(r(56720)),
                l = r(27968),
                o = r(85893),
                u = {
                    container: {
                        gap: "mqqyhd6v"
                    },
                    separator: {
                        height: "bbl9m3t3",
                        borderTop: "iupwfssi"
                    }
                }
        },
        73715: (e, t, r) => {
            "use strict";
            var n = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.orderId,
                    r = e.orderStatus,
                    n = e.sellerWid,
                    c = i.ContactCollection.get(n),
                    f = c ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(o.FlexRow, {
                            children: (0, s.jsx)(l.DetailImage, {
                                id: n,
                                size: 48
                            })
                        }), (0, s.jsxs)(o.FlexColumn, {
                            align: "center",
                            children: [(0, s.jsx)(u.TextDiv, {
                                theme: "large",
                                weight: "medium",
                                children: c.name
                            }), null != t ? (0, s.jsx)(u.TextDiv, {
                                color: "secondary",
                                weight: "medium",
                                xstyle: d.uppercase,
                                children: a.fbt._("order #{order-id}", [a.fbt._param("order-id", t)], {
                                    hk: "83OWH"
                                })
                            }) : null]
                        })]
                    }) : null;
                return (0, s.jsxs)(o.FlexColumn, {
                    align: "center",
                    xstyle: d.container,
                    children: [f, r]
                })
            };
            var a = r(48360),
                i = (n(r(56720)), r(20050)),
                l = r(66834),
                o = r(27968),
                u = r(22552),
                s = r(85893),
                d = {
                    container: {
                        gap: "nypubj7v"
                    },
                    uppercase: {
                        textTransform: "ofejerhi"
                    }
                }
        },
        76834: (e, t, r) => {
            "use strict";
            var n = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.orderStatus,
                    r = void 0 === t ? (0, i.getDefaultOrderStatus)() : t;
                return (0, u.jsxs)(o.TextDiv, {
                    color: c(r),
                    theme: "small",
                    xstyle: s.container,
                    children: [f(r), d(r)]
                })
            };
            var a = r(48360),
                i = (n(r(56720)), r(45311)),
                l = n(r(7665)),
                o = r(22552),
                u = r(85893),
                s = {
                    container: {
                        backgroundColor: "i16jpgpt",
                        display: "i86elurf",
                        alignItems: "gndfcl4n",
                        fontSize: "dsh4tgtl",
                        paddingTop: "i5tg98hk",
                        paddingEnd: "ft2m32mm",
                        paddingBottom: "przvwfww",
                        paddingStart: "k4wy2cgb",
                        borderTopStartRadius: "g130k69c",
                        borderTopEndRadius: "k1a7joe8",
                        borderBottomEndRadius: "dc5qina8",
                        borderBottomStartRadius: "kfr1vweg"
                    },
                    icon: {
                        marginEnd: "mw4yctpw"
                    },
                    iconCipherText: {
                        marginTop: "dwvzf427"
                    }
                };

            function d(e) {
                switch (e) {
                    case i.OrderStatus.Pending:
                        return a.fbt._("Order pending", null, {
                            hk: "48mrpL"
                        });
                    case i.OrderStatus.Processing:
                        return a.fbt._("Order processing", null, {
                            hk: "2FG2h5"
                        });
                    case i.OrderStatus.PartiallyShipped:
                        return a.fbt._("Order partially shipped", null, {
                            hk: "1ml6Tq"
                        });
                    case i.OrderStatus.Shipped:
                        return a.fbt._("Order shipped", null, {
                            hk: "4xQ2oP"
                        });
                    case i.OrderStatus.Canceled:
                        return a.fbt._("Order canceled", null, {
                            hk: "D1VVa"
                        });
                    case i.OrderStatus.Complete:
                        return a.fbt._("Order complete", null, {
                            hk: "1BMhS6"
                        })
                }
            }

            function c(e) {
                switch (e) {
                    case i.OrderStatus.Pending:
                    case i.OrderStatus.Processing:
                    case i.OrderStatus.PartiallyShipped:
                    case i.OrderStatus.Shipped:
                        return;
                    case i.OrderStatus.Canceled:
                        return "danger";
                    case i.OrderStatus.Complete:
                        return "success"
                }
            }

            function f(e) {
                switch (e) {
                    case i.OrderStatus.Pending:
                    case i.OrderStatus.Processing:
                        return (0, u.jsx)(l.default, {
                            width: 12,
                            name: "status-ciphertext",
                            display: "inline",
                            xstyle: [s.icon, s.iconCipherText]
                        });
                    case i.OrderStatus.PartiallyShipped:
                    case i.OrderStatus.Shipped:
                        return (0, u.jsx)(l.default, {
                            width: 12,
                            name: "local-shipping",
                            display: "inline",
                            xstyle: s.icon
                        });
                    case i.OrderStatus.Canceled:
                        return (0, u.jsx)(l.default, {
                            width: 12,
                            name: "alert-error",
                            display: "inline",
                            xstyle: s.icon
                        });
                    case i.OrderStatus.Complete:
                        return (0, u.jsx)(l.default, {
                            width: 12,
                            name: "action-check-circle",
                            display: "inline",
                            xstyle: s.icon
                        })
                }
            }
        },
        25267: (e, t, r) => {
            "use strict";
            var n = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AddItemIcon = function() {
                return (0, o.jsx)("div", {
                    className: (0, a.default)(u),
                    children: (0, o.jsx)(l.default, {
                        className: (0, a.default)(d),
                        name: "add-item"
                    })
                })
            }, t.CustomItemIcon = c, t.OrderItemIcon = function(e) {
                var t = e.mediaData;
                return e.useCustomIcon || null == t ? (0, o.jsx)(c, {}) : (0, o.jsx)(i.ProductThumb, {
                    mediaData: t,
                    theme: "orderSquareThumb"
                })
            };
            var a = n(r(56720)),
                i = r(47576),
                l = n(r(7665)),
                o = r(85893),
                u = {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    width: "dyxdk6fi",
                    height: "m3o1wsh7",
                    borderTopStartRadius: "bbr44loe",
                    borderTopEndRadius: "ooj5yc5b",
                    borderBottomEndRadius: "m8i16etx",
                    borderBottomStartRadius: "cw0ivh8j",
                    backgroundColor: "osuelnrh",
                    boxShadow: "gnkxn0la"
                },
                s = {
                    marginTop: "m3ct2rho",
                    marginEnd: "k1jo73ug",
                    marginBottom: "ec1z5skj",
                    marginStart: "isfiuinm",
                    color: "s4recxw2"
                },
                d = {
                    marginTop: "m3ct2rho",
                    marginEnd: "k1jo73ug",
                    marginBottom: "ec1z5skj",
                    marginStart: "isfiuinm",
                    color: "s4recxw2"
                };

            function c() {
                return (0, o.jsx)("div", {
                    className: (0, a.default)(u),
                    children: (0, o.jsx)(l.default, {
                        className: (0, a.default)(s),
                        name: "list-msg-icon"
                    })
                })
            }
        },
        87855: (e, t, r) => {
            "use strict";
            var n = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OrderItems = F, t.OrderSummaryDrawer = function(e) {
                e.chat;
                var t = e.currency,
                    r = e.priceMap,
                    n = e.orderItems,
                    a = e.orderSubtotal,
                    o = e.flatAdditionalAmounts,
                    u = e.onBack,
                    s = e.onSubmit,
                    d = e.onAddItem,
                    c = e.onEditItem,
                    f = e.onDeleteItem,
                    v = e.onPriceChange,
                    x = e.onAdditionalCharges,
                    y = n.every((function(e) {
                        var t;
                        return Number.isInteger(null !== (t = e.price) && void 0 !== t ? t : r[e.id])
                    })),
                    j = 0 !== n.length;
                return (0, w.jsxs)(p.default, {
                    children: [(0, w.jsx)(m.DrawerHeader, {
                        title: l.fbt._("Create order", null, {
                            hk: "3snLWG"
                        }),
                        onBack: u,
                        type: m.DRAWER_HEADER_TYPE.SMALL
                    }), (0, w.jsxs)(h.default, {
                        children: [(0, w.jsx)(g.default, {
                            xstyle: [i.uiPadding.top20, i.uiPadding.horiz16, i.uiPadding.bottom15],
                            theme: "refresh-padding-title",
                            children: (0, w.jsxs)(S.default, {
                                children: [(0, w.jsx)(_.default, {
                                    sellerWid: (0, b.getMeUser)(),
                                    orderStatus: (0, w.jsx)(k.default, {})
                                }), (0, w.jsx)(F, {
                                    currency: t,
                                    priceMap: r,
                                    items: n,
                                    onClick: c,
                                    onDelete: f,
                                    onPriceChange: v,
                                    onAddItem: d
                                }), (0, w.jsx)(I, {
                                    tax: o.tax,
                                    discount: o.discount,
                                    shipping: o.shipping,
                                    currency: t,
                                    subtotal: a,
                                    displayAdditionalCharges: j,
                                    onAdditionalCharges: x
                                })]
                            })
                        }), (0, w.jsx)(C.OrderTotalPrice, {
                            xstyle: i.uiPadding.all16,
                            visible: j,
                            disabled: !y,
                            a8nButtonText: "send-order-button",
                            totalPrice: E(o.total, t),
                            title: l.fbt._("Total", null, {
                                hk: "1ssp4z"
                            }),
                            onConfirm: s,
                            confirmTitle: l.fbt._("Send Order", null, {
                                hk: "3wTiM3"
                            })
                        })]
                    })]
                })
            }, t.OrderValues = I;
            var a = n(r(63038)),
                i = r(71091),
                l = r(48360),
                o = r(67294),
                u = n(r(56720)),
                s = n(r(51599)),
                d = n(r(88186)),
                c = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = P(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var l = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                            l && (l.get || l.set) ? Object.defineProperty(n, i, l) : n[i] = e[i]
                        } n.default = e, r && r.set(e, n);
                    return n
                }(r(86018)),
                f = n(r(38275)),
                p = n(r(53187)),
                h = n(r(18345)),
                m = r(19288),
                g = n(r(46821)),
                v = r(27968),
                b = r(1577),
                x = r(32125),
                y = r(56192),
                j = r(89846),
                S = n(r(58636)),
                _ = n(r(73715)),
                k = n(r(76834)),
                O = r(25267),
                C = r(68520),
                T = r(22552),
                w = r(85893);

            function P(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (P = function(e) {
                    return e ? r : t
                })(e)
            }
            var M = {
                orderItemsContainer: {
                    marginTop: "jdreu547",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "n5a6z3tu",
                    marginStart: "svoq16ka"
                },
                orderFieldsContainer: {
                    gap: "sxkbojvh"
                },
                clickableText: {
                    color: "o0rubyzf",
                    cursor: "ajgl1lbb",
                    fontWeight: "m1e7cby3",
                    lineHeight: "iq0m558w",
                    letterSpacing: "ysae3w6m"
                },
                productDeleteWrapper: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n"
                }
            };

            function E(e, t) {
                return c.formatAmount(t, e / j.DEFAULT_OFFSET)
            }

            function I(e) {
                var t = e.tax,
                    r = e.discount,
                    n = e.shipping,
                    a = e.currency,
                    o = e.subtotal,
                    d = e.displayAdditionalCharges,
                    c = e.onAdditionalCharges;
                return (0, w.jsxs)(v.FlexColumn, {
                    align: "stretch",
                    xstyle: M.orderFieldsContainer,
                    children: [(0, w.jsxs)(v.FlexRow, {
                        justify: "all",
                        children: [(0, w.jsx)(T.TextSpan, {
                            color: "secondary",
                            size: "16",
                            children: l.fbt._("Subtotal", null, {
                                hk: "4ciFet"
                            })
                        }), (0, w.jsx)(T.TextSpan, {
                            color: "secondary",
                            size: "16",
                            children: E(o, a)
                        })]
                    }), null != r && (0, w.jsxs)(v.FlexRow, {
                        justify: "all",
                        children: [(0, w.jsx)(T.TextSpan, {
                            color: "secondary",
                            size: "16",
                            children: l.fbt._("Discount", null, {
                                hk: "3W4mK5"
                            })
                        }), (0, w.jsx)(T.TextSpan, {
                            color: "secondary",
                            size: "16",
                            children: E(-r, a)
                        })]
                    }), null != n && (0, w.jsxs)(v.FlexRow, {
                        justify: "all",
                        children: [(0, w.jsx)(T.TextSpan, {
                            color: "secondary",
                            size: "16",
                            children: l.fbt._("Shipping", null, {
                                hk: "1xKyVx"
                            })
                        }), (0, w.jsx)(T.TextSpan, {
                            color: "secondary",
                            size: "16",
                            children: E(n, a)
                        })]
                    }), null != t && (0, w.jsxs)(v.FlexRow, {
                        justify: "all",
                        children: [(0, w.jsx)(T.TextSpan, {
                            color: "secondary",
                            size: "16",
                            children: l.fbt._("Tax", null, {
                                hk: "2G3BQt"
                            })
                        }), (0, w.jsx)(T.TextSpan, {
                            color: "secondary",
                            size: "16",
                            children: E(t, a)
                        })]
                    }), Boolean(d) && (0, w.jsx)(v.FlexRow, {
                        justify: "all",
                        align: "center",
                        children: (0, w.jsx)(s.default, {
                            a8nText: "order-details-additional-charges-button",
                            onClick: c,
                            className: (0, u.default)(M.clickableText, i.uiMargin.bottom0),
                            children: l.fbt._("Additional Charges", null, {
                                hk: "3I4vSr"
                            })
                        })
                    })]
                })
            }

            function F(e) {
                var t = e.details,
                    r = e.currency,
                    n = e.priceMap,
                    s = e.items,
                    c = e.onClick,
                    p = e.onDelete,
                    h = e.onAddItem,
                    m = e.onPriceChange,
                    g = (0, o.useState)(null),
                    b = (0, a.default)(g, 2),
                    j = b[0],
                    S = b[1],
                    _ = Boolean(t),
                    k = function(e, t) {
                        var a, l = null != e.price ? E(e.price, r) : null,
                            o = (0, w.jsx)(f.default, {
                                onClick: function(e) {
                                    e.stopPropagation(), null == p || p(t)
                                }
                            }),
                            s = (0, w.jsx)(y.CatalogProductPriceInput, {
                                price: null !== (a = null == n ? void 0 : n[e.id]) && void 0 !== a ? a : null,
                                currency: r,
                                onPriceChange: function(t) {
                                    return null == m ? void 0 : m(t, e.id)
                                }
                            });
                        return j === t ? null != l ? o : (0, w.jsxs)("div", {
                            className: (0, u.default)(M.productDeleteWrapper),
                            children: [s, (0, w.jsx)("div", {
                                className: (0, u.default)(i.uiMargin.start5),
                                children: o
                            })]
                        }) : null != l ? l : s
                    };
                return (0, w.jsxs)(v.FlexColumn, {
                    align: "stretch",
                    xstyle: [i.uiMargin.horiz0, M.orderItemsContainer],
                    children: [!_ && (0, w.jsx)(x.AddOrderItem, {
                        title: l.fbt._("Add item", null, {
                            hk: "3uoH1r"
                        }),
                        onClick: function() {
                            return null == h ? void 0 : h()
                        }
                    }), s.map((function(e, t) {
                        var r, n = l.fbt._("Quantity {item-quantity}", [l.fbt._param("item-quantity", e.quantity)], {
                            hk: "39jSdf"
                        });
                        return (0, w.jsx)(d.default, {
                            a8n: "order-item-cell",
                            className: (0, u.default)(t > 0 && i.uiPadding.top10),
                            image: (0, w.jsx)(O.OrderItemIcon, {
                                mediaData: null !== (r = e.mediaData) && void 0 !== r ? r : null,
                                useCustomIcon: e.isCustomItem
                            }),
                            primary: e.name,
                            secondary: e.isQuantitySet ? n : null,
                            theme: "media",
                            onMouseOver: function() {
                                return _ ? void 0 : S(t)
                            },
                            onMouseLeave: function() {
                                return _ ? void 0 : S(null)
                            },
                            detail: k(e, t),
                            onClick: function() {
                                return null == c ? void 0 : c(t)
                            }
                        }, t)
                    }))]
                })
            }
        },
        68520: (e, t, r) => {
            "use strict";
            var n = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OrderApplyChangesButton = f, t.OrderTotalPrice = function(e) {
                var t = e.title,
                    r = e.xstyle,
                    n = e.visible,
                    i = e.disabled,
                    o = e.totalPrice,
                    d = e.confirmTitle,
                    p = e.a8nButtonText,
                    h = e.onConfirm;
                return n ? (0, s.jsxs)(u.default, {
                    xstyle: r,
                    theme: "refresh-padding-title",
                    children: [(0, s.jsxs)("div", {
                        className: (0, l.default)(c),
                        "data-a8n": a.default.key("total-price-container"),
                        children: [t, (0, s.jsx)("p", {
                            children: o
                        })]
                    }), (0, s.jsx)(f, {
                        title: d,
                        onClick: h,
                        disabled: i,
                        a8nText: p
                    })]
                }) : null
            };
            var a = n(r(84646)),
                i = r(71091),
                l = n(r(56720)),
                o = n(r(51599)),
                u = n(r(46821)),
                s = r(85893),
                d = {
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh",
                    alignItems: "gndfcl4n"
                },
                c = {
                    display: "p357zi0d",
                    flexDirection: "sap93d0t",
                    justifyContent: "o4u7okr9",
                    fontWeight: "nbipi2bn"
                };

            function f(e) {
                var t = e.title,
                    r = e.disabled,
                    n = e.onClick,
                    a = e.a8nText;
                return (0, s.jsx)("div", {
                    className: (0, l.default)(d, i.uiMargin.top16),
                    children: (0, s.jsx)(o.default, {
                        type: "primary",
                        disabled: r,
                        onClick: n,
                        a8nText: a,
                        children: t
                    })
                })
            }
        },
        8352: (e, t, r) => {
            "use strict";
            var n = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onClick,
                    r = e.label,
                    n = e.prefixIcon,
                    c = e.postfixIcon,
                    f = e.xstyle,
                    p = "padded-svg" === e.iconTheme,
                    h = [d.iconSvg, p ? d.paddedSvg : i.uiPadding.all4],
                    m = {
                        width: p ? 20 : 16,
                        height: p ? 20 : 16
                    };
                return (0, s.jsxs)(u.default, {
                    xstyle: [d.container, i.uiPadding.vert8, i.uiPadding.horiz12, null != n && i.uiPadding.start36, null != c && i.uiPadding.end36, f],
                    onClick: t,
                    "aria-label": e["aria-label"],
                    children: [n && (0, s.jsx)(o.default, (0, a.default)({
                        name: n,
                        xstyle: [d.icon, d.prefixIcon, i.uiMargin.start5],
                        iconXstyle: h
                    }, m)), (0, s.jsx)("div", {
                        className: (0, l.default)(d.content),
                        children: r
                    }), c && (0, s.jsx)(o.default, (0, a.default)({
                        name: c,
                        xstyle: [d.icon, i.uiMargin.start5],
                        iconXstyle: h
                    }, m))]
                })
            };
            var a = n(r(81109)),
                i = r(71091),
                l = n(r(56720)),
                o = n(r(7665)),
                u = n(r(76080)),
                s = r(85893),
                d = {
                    container: {
                        position: "g0rxnol2",
                        color: "nuiuantz",
                        backgroundColor: "jvy3y6qh",
                        borderTopStartRadius: "g130k69c",
                        borderTopEndRadius: "k1a7joe8",
                        borderBottomEndRadius: "dc5qina8",
                        borderBottomStartRadius: "kfr1vweg"
                    },
                    content: {
                        display: "l7jjieqr"
                    },
                    icon: {
                        display: "l7jjieqr",
                        position: "lhggkp7q",
                        right: "rsmgdaqi",
                        top: "mvf5n2qr"
                    },
                    iconSvg: {
                        color: "nuiuantz"
                    },
                    prefixIcon: {
                        left: "lidbxt4q"
                    },
                    paddedSvg: {
                        paddingTop: "qbqilfqo",
                        paddingEnd: "iqx13udk",
                        paddingBottom: "a15vwmim",
                        paddingStart: "qiohso4h"
                    }
                }
        }
    }
]);