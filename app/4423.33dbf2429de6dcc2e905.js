/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [4423], {
        97629: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.appendPrefilledMsg = E, t.sendOrderDetailsMessageAsMerchant = function() {
                return M.apply(this, arguments)
            }, t.sendOrderStatusMessageAsMerchant = function() {
                return N.apply(this, arguments)
            };
            var r = a(n(87757)),
                i = a(n(81109)),
                o = a(n(48926)),
                l = n(14585),
                s = a(n(90797)),
                u = n(40787),
                d = a(n(67082)),
                c = n(84460),
                p = n(48360),
                f = n(72743),
                h = n(10399),
                g = n(1577),
                m = a(n(90629)),
                v = a(n(23322)),
                x = a(n(11773)),
                b = a(n(57393)),
                j = _(n(34640)),
                y = n(45311),
                S = _(n(32403)),
                k = n(78383),
                w = n(26237);

            function O(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (O = function(e) {
                    return e ? n : t
                })(e)
            }

            function _(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = O(t);
                if (n && n.has(e)) return n.get(e);
                var a = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, i, o) : a[i] = e[i]
                    } return a.default = e, n && n.set(e, a), a
            }

            function C(e, t) {
                var n, a;
                if (null == t) return "";
                var r = f.CatalogCollection.get((0, c.createWid)(e)),
                    i = null == r ? void 0 : r.productCollection.get(t),
                    o = null == i || null === (n = i.getProductImageCollectionHead()) || void 0 === n ? void 0 : n.mediaData.preview;
                return o instanceof b.default && null !== (a = o.getBase64()) && void 0 !== a ? a : ""
            }

            function P() {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = (0, o.default)(r.default.mark((function e(t) {
                    var n, a, o, c, p, f, m, x, b, j, y, S;
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.caption, a = t.chat, o = t.nativeFlowName, c = t.buttonParamsJson, p = t.errorMessage, f = t.thumbnail, m = t.buttonName, x = t.contextInfo, b = (0, g.getMaybeMeUser)(), j = f ? {
                                        title: void 0,
                                        subtitle: void 0,
                                        mediaType: void 0,
                                        hasMediaAttachment: !1,
                                        thumbnail: f
                                    } : void 0, y = (0, i.default)({
                                        type: u.MSG_TYPE.INTERACTIVE,
                                        ack: l.ACK.CLOCK,
                                        from: b,
                                        id: new s.default({
                                            from: b,
                                            to: a.id,
                                            id: s.default.newId(),
                                            participant: void 0,
                                            selfDir: "out"
                                        }),
                                        local: !0,
                                        isNewMsg: !0,
                                        self: "out",
                                        t: h.Clock.globalUnixTime(),
                                        to: a.id,
                                        caption: n,
                                        nativeFlowName: o,
                                        interactiveHeader: j,
                                        interactiveType: v.default.NATIVE_FLOW,
                                        interactivePayload: {
                                            buttons: [{
                                                name: m,
                                                buttonParamsJson: c
                                            }],
                                            messageVersion: 1
                                        }
                                    }, x), !d.default.equals(a.id, b)) {
                                    e.next = 15;
                                    break
                                }
                                return e.prev = 5, e.next = 8, (0, k.addAndSendMsgToChat)(a, y)[0];
                            case 8:
                                return e.abrupt("return");
                            case 11:
                                throw e.prev = 11, e.t0 = e.catch(5), __LOG__(3)`${p}: ${e.t0}`, e.t0;
                            case 15:
                                return e.prev = 15, e.next = 18, (0, k.addAndSendMsgToChat)(a, y)[1];
                            case 18:
                                if ((S = e.sent) && S === w.SendMsgResult.OK) {
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
                return (M = (0, o.default)(r.default.mark((function e(t) {
                    var n, a, i, o, l, s, u, d, c, p, f, h, g;
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = t.order, i = t.chat, o = t.orderNote, l = t.discount, s = t.shipping, u = t.tax, d = t.total, c = t.offset, p = null === (n = a.orderItemCollection.head()) || void 0 === n ? void 0 : n.id, f = C(a.sellerJid, p), h = a.orderItemCollection.map((function(e) {
                                    return {
                                        retailer_id: e.id,
                                        name: e.name,
                                        amount: {
                                            value: e.price,
                                            offset: c
                                        },
                                        quantity: e.quantity
                                    }
                                })), g = {
                                    reference_id: (0, m.default)(),
                                    type: "physical-goods",
                                    payment_configuration: "merchant_categorization_code",
                                    currency: a.currency,
                                    total_amount: {
                                        value: d,
                                        offset: c
                                    },
                                    order: {
                                        status: y.OrderStatus.Pending,
                                        items: h,
                                        subtotal: {
                                            value: Number(a.subtotal),
                                            offset: c
                                        },
                                        tax: null == u ? void 0 : {
                                            value: u,
                                            offset: c
                                        },
                                        shipping: null == s ? void 0 : {
                                            value: s,
                                            offset: c
                                        },
                                        discount: null == l ? void 0 : {
                                            value: l,
                                            offset: c
                                        }
                                    }
                                }, e.next = 7, P({
                                    caption: o,
                                    chat: i,
                                    nativeFlowName: x.default.ORDER_DETAILS,
                                    buttonParamsJson: j.stringify(g),
                                    errorMessage: "Order message send to chat failure",
                                    thumbnail: f,
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
                var n = "";
                switch (t) {
                    case y.OrderStatus.Pending:
                        n = p.fbt._("Your order is pending.", null, {
                            hk: "4db7Ml"
                        });
                        break;
                    case y.OrderStatus.Processing:
                        n = p.fbt._("Your order is processing.", null, {
                            hk: "4D5lpu"
                        });
                        break;
                    case y.OrderStatus.PartiallyShipped:
                        n = p.fbt._("Your order has been partially shipped.", null, {
                            hk: "2GKQFn"
                        });
                        break;
                    case y.OrderStatus.Shipped:
                        n = p.fbt._("Your order has been shipped.", null, {
                            hk: "4AfRzr"
                        });
                        break;
                    case y.OrderStatus.Complete:
                        n = p.fbt._("Your order has been completed.", null, {
                            hk: "ZOG5Q"
                        });
                        break;
                    case y.OrderStatus.Canceled:
                        n = p.fbt._("Your order was canceled.", null, {
                            hk: "1dMPFb"
                        })
                }
                return (e || "").trim() ? n.toString() + "\n" + (e || "") : n.toString()
            }

            function N() {
                return (N = (0, o.default)(r.default.mark((function e(t) {
                    var n, a, i, o, l, s, u, d, c, p, f, h;
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.chat, a = t.sellerJid, i = t.orderInfo, o = t.orderNote, l = t.orderStatus, s = i.items, u = i.referenceId, d = s[0].id, c = C(a, d), p = {
                                    reference_id: u,
                                    order: {
                                        status: l
                                    }
                                }, f = (0, y.findOrderDetailsMessage)(n, u), h = null == f ? void 0 : f.msgContextInfo(n.id), e.next = 10, P({
                                    caption: E(o, l),
                                    chat: n,
                                    nativeFlowName: x.default.ORDER_STATUS,
                                    buttonParamsJson: S.stringify(p),
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
        31527: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, l.jsxs)("div", {
                    className: (0, i.default)(s),
                    children: [(0, l.jsx)("span", {
                        className: (0, i.default)(d),
                        children: "▾"
                    }), (0, l.jsx)("select", {
                        className: (0, i.default)(u, r.uiPadding.horiz10),
                        onClick: function(e) {
                            e.preventDefault(), e.stopPropagation()
                        },
                        value: e.quantity,
                        onChange: function(t) {
                            var n = t.target;
                            n instanceof HTMLSelectElement && e.onChange(parseInt(n.value, 10))
                        },
                        children: function() {
                            for (var e = [], t = 1; t <= o.MAX_QUANTITY; t++) e.push((0, l.jsx)("option", {
                                value: t,
                                children: t
                            }, t));
                            return e
                        }()
                    })]
                })
            };
            var r = n(71091),
                i = a(n(56720)),
                o = n(7558),
                l = n(85893),
                s = {
                    position: "g0rxnol2",
                    flexGrow: "ggj6brxn",
                    flexShrink: "m0h2a7mj",
                    flexBasis: "l07amlnk",
                    width: "b6qzmhfs"
                },
                u = {
                    fontFamily: "shdiholb"
                },
                d = {
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
                }
        },
        38275: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, l.jsx)(o.default, {
                    "aria-label": r.fbt._("Remove from cart", null, {
                        hk: "9voCj"
                    }),
                    name: "delete",
                    title: r.fbt._("Remove from cart", null, {
                        hk: "9voCj"
                    }),
                    className: (0, i.default)(s),
                    onClick: e.onClick
                })
            };
            var r = n(48360),
                i = a(n(56720)),
                o = a(n(28706)),
                l = n(85893),
                s = {
                    color: "svlsagor",
                    ":hover": {
                        color: "kbf8aj4n"
                    }
                }
        },
        89846: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PERCENTAGE_SYMBOL = t.DEFAULT_OFFSET = void 0, t.calculateFlatAmounts = function(e) {
                var t = e.orderSubtotal,
                    n = e.discountType,
                    a = e.discountText,
                    l = e.taxType,
                    s = e.taxText,
                    u = e.shippingText,
                    d = o({
                        type: n,
                        value: a,
                        total: t
                    }),
                    c = o({
                        type: l,
                        value: s,
                        total: t - (null != d ? d : 0)
                    }),
                    p = i(u),
                    f = t - (null != d ? d : 0) + (null != p ? p : 0) + (null != c ? c : 0);
                return {
                    total: Math.trunc(f * r),
                    tax: null == c ? null : Math.trunc(c * r),
                    shipping: null == p ? null : Math.trunc(p * r),
                    discount: null == d ? null : Math.trunc(d * r)
                }
            };
            var a = n(71150);
            t.PERCENTAGE_SYMBOL = "%";
            var r = 1e3;

            function i(e) {
                if ("" === e) return null;
                var t = (0, a.valueFromString)("USD", e) / r;
                return Number.isNaN(t) ? 0 : t
            }

            function o(e) {
                var t = e.type,
                    n = e.value,
                    a = e.total,
                    r = i(n);
                return null == r ? null : "%" === t ? r / 100 * a : r
            }
            t.DEFAULT_OFFSET = r
        },
        58636: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.children;
                return (0, l.jsx)(o.FlexColumn, {
                    xstyle: s.container,
                    align: "stretch",
                    children: r.Children.map(t, (function(e, t) {
                        return (0, l.jsxs)(l.Fragment, {
                            children: [0 !== t ? (0, l.jsx)("div", {
                                className: (0, i.default)(s.separator)
                            }) : null, e]
                        })
                    }))
                })
            };
            var r = n(67294),
                i = a(n(56720)),
                o = n(27968),
                l = n(85893),
                s = {
                    container: {
                        gap: "mqqyhd6v"
                    },
                    separator: {
                        height: "bbl9m3t3",
                        borderTop: "iupwfssi"
                    }
                }
        },
        73715: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.orderId,
                    n = e.orderStatus,
                    a = e.sellerWid,
                    c = i.ContactCollection.get(a),
                    p = c ? (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(l.FlexRow, {
                            children: (0, u.jsx)(o.DetailImage, {
                                id: a,
                                size: 48
                            })
                        }), (0, u.jsxs)(l.FlexColumn, {
                            align: "center",
                            children: [(0, u.jsx)(s.TextDiv, {
                                theme: "large",
                                weight: "medium",
                                children: c.name
                            }), null != t ? (0, u.jsx)(s.TextDiv, {
                                color: "secondary",
                                weight: "medium",
                                xstyle: d.uppercase,
                                children: r.fbt._("order #{order-id}", [r.fbt._param("order-id", t)], {
                                    hk: "83OWH"
                                })
                            }) : null]
                        })]
                    }) : null;
                return (0, u.jsxs)(l.FlexColumn, {
                    align: "center",
                    xstyle: d.container,
                    children: [p, n]
                })
            };
            var r = n(48360),
                i = (a(n(56720)), n(20050)),
                o = n(66834),
                l = n(27968),
                s = n(22552),
                u = n(85893),
                d = {
                    container: {
                        gap: "nypubj7v"
                    },
                    uppercase: {
                        textTransform: "ofejerhi"
                    }
                }
        },
        76834: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.orderStatus,
                    n = void 0 === t ? (0, i.getDefaultOrderStatus)() : t;
                return (0, s.jsxs)(l.TextDiv, {
                    color: c(n),
                    theme: "small",
                    xstyle: u.container,
                    children: [p(n), d(n)]
                })
            };
            var r = n(48360),
                i = (a(n(56720)), n(45311)),
                o = a(n(7665)),
                l = n(22552),
                s = n(85893),
                u = {
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
                        return r.fbt._("Order pending", null, {
                            hk: "48mrpL"
                        });
                    case i.OrderStatus.Processing:
                        return r.fbt._("Order processing", null, {
                            hk: "2FG2h5"
                        });
                    case i.OrderStatus.PartiallyShipped:
                        return r.fbt._("Order partially shipped", null, {
                            hk: "1ml6Tq"
                        });
                    case i.OrderStatus.Shipped:
                        return r.fbt._("Order shipped", null, {
                            hk: "4xQ2oP"
                        });
                    case i.OrderStatus.Canceled:
                        return r.fbt._("Order canceled", null, {
                            hk: "D1VVa"
                        });
                    case i.OrderStatus.Complete:
                        return r.fbt._("Order complete", null, {
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

            function p(e) {
                switch (e) {
                    case i.OrderStatus.Pending:
                    case i.OrderStatus.Processing:
                        return (0, s.jsx)(o.default, {
                            width: 12,
                            name: "status-ciphertext",
                            display: "inline",
                            xstyle: [u.icon, u.iconCipherText]
                        });
                    case i.OrderStatus.PartiallyShipped:
                    case i.OrderStatus.Shipped:
                        return (0, s.jsx)(o.default, {
                            width: 12,
                            name: "local-shipping",
                            display: "inline",
                            xstyle: u.icon
                        });
                    case i.OrderStatus.Canceled:
                        return (0, s.jsx)(o.default, {
                            width: 12,
                            name: "alert-error",
                            display: "inline",
                            xstyle: u.icon
                        });
                    case i.OrderStatus.Complete:
                        return (0, s.jsx)(o.default, {
                            width: 12,
                            name: "action-check-circle",
                            display: "inline",
                            xstyle: u.icon
                        })
                }
            }
        },
        64689: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(d.default, {
                        transitionName: "media-caption",
                        className: (0, o.default)(p),
                        children: (0, c.jsx)(l.default, {
                            chat: e.chat,
                            maxLength: i.default.MAX_CART_MESSAGE_LENGTH,
                            placeholder: e.placeholder,
                            value: e.value,
                            onEnter: function() {
                                !0 !== e.disabled && e.onSubmit()
                            },
                            onChange: function(t) {
                                e.onChange(t)
                            },
                            multiline: !0,
                            showRemaining: !0,
                            spellCheck: !0,
                            supportsEmoji: !0
                        })
                    }), (0, c.jsx)(d.default, {
                        transitionAppear: !0,
                        transitionName: "btn",
                        children: (0, c.jsx)("button", {
                            disabled: e.disabled,
                            "data-a8n": r.default.key(e.a8nTextButton),
                            className: (0, o.default)(f),
                            tabIndex: "-1",
                            onClick: function() {
                                return e.onSubmit()
                            },
                            title: e.buttonTitle,
                            children: (0, c.jsx)(s.Round, {
                                disabled: e.disabled,
                                children: (0, c.jsx)(u.default, {
                                    width: 18,
                                    name: "send",
                                    directional: !0
                                })
                            })
                        })
                    })]
                })
            };
            var r = a(n(84646)),
                i = a(n(3208)),
                o = a(n(56720)),
                l = a(n(61640)),
                s = n(80385),
                u = a(n(7665)),
                d = a(n(60806)),
                c = n(85893),
                p = {
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh",
                    width: "ln8gz9je",
                    zIndex: "mb8var44",
                    position: "g0rxnol2",
                    marginBottom: "mggyuyyy"
                },
                f = {
                    color: "svlsagor",
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "mpdn4nr2",
                    marginStart: "svoq16ka",
                    opacity: "axi1ht8l",
                    paddingTop: "i5tg98hk",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "przvwfww",
                    paddingStart: "gx1rr48f",
                    position: "lhggkp7q",
                    right: "q82cfhbg",
                    bottom: "efio351b",
                    textAlign: "qfejxiq4"
                }
        },
        8352: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onClick,
                    n = e.label,
                    a = e.prefixIcon,
                    c = e.postfixIcon,
                    p = e.xstyle,
                    f = "padded-svg" === e.iconTheme,
                    h = [d.iconSvg, f ? d.paddedSvg : i.uiPadding.all4],
                    g = {
                        width: f ? 20 : 16,
                        height: f ? 20 : 16
                    };
                return (0, u.jsxs)(s.default, {
                    xstyle: [d.container, i.uiPadding.vert8, i.uiPadding.horiz12, null != a && i.uiPadding.start36, null != c && i.uiPadding.end36, p],
                    onClick: t,
                    "aria-label": e["aria-label"],
                    children: [a && (0, u.jsx)(l.default, (0, r.default)({
                        name: a,
                        xstyle: [d.icon, d.prefixIcon, i.uiMargin.start5],
                        iconXstyle: h
                    }, g)), (0, u.jsx)("div", {
                        className: (0, o.default)(d.content),
                        children: n
                    }), c && (0, u.jsx)(l.default, (0, r.default)({
                        name: c,
                        xstyle: [d.icon, i.uiMargin.start5],
                        iconXstyle: h
                    }, g))]
                })
            };
            var r = a(n(81109)),
                i = n(71091),
                o = a(n(56720)),
                l = a(n(7665)),
                s = a(n(76080)),
                u = n(85893),
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
        },
        61640: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n(63038)),
                i = n(27767),
                o = n(71091),
                l = n(48360),
                s = n(67294),
                u = a(n(56720)),
                d = n(65901),
                c = a(n(86777)),
                p = n(98169),
                f = n(10508),
                h = n(11125),
                g = n(32012),
                m = a(n(45159)),
                v = a(n(4313)),
                x = n(23932),
                b = a(n(7665)),
                j = n(16835),
                y = a(n(93820)),
                S = a(n(60806)),
                k = n(85893),
                w = function() {
                    d.Cmd.openModal((0, k.jsx)(c.default, {
                        title: l.fbt._("Caption Too Long", null, {
                            hk: "2GOVgN"
                        }),
                        onOK: function() {
                            d.Cmd.closeModal()
                        },
                        okText: l.fbt._("OK", null, {
                            hk: "2KEeHb"
                        }),
                        children: l.fbt._("The caption you’re pasting is too long. Try shortening it or sending it as a separate message.", null, {
                            hk: "4Br93m"
                        })
                    }))
                },
                O = {
                    wrapper: {
                        display: "p357zi0d",
                        alignItems: "r15c9g6i",
                        borderBottom: "tf4adjai"
                    },
                    activeWrapper: {
                        borderBottom: "ggdspdaz"
                    },
                    inputControls: {
                        position: "g0rxnol2",
                        flexGrow: "tvf2evcx",
                        flexShrink: "oq44ahr5",
                        flexBasis: "rjo8vgbg",
                        marginTop: "b9l0eqez"
                    },
                    buttonContainer: {
                        position: "g0rxnol2",
                        display: "l7jjieqr",
                        float: "ivui8b66",
                        width: "r0at9tra"
                    },
                    suggestionsPositioner: {
                        position: "lhggkp7q",
                        bottom: "c5zpj14d",
                        start: "dkaqw61n",
                        width: "ln8gz9je",
                        height: "smvc51u0",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        pointerEvents: "m62443ks"
                    },
                    spacer: {
                        position: "g0rxnol2",
                        height: "bmot90v7"
                    },
                    noPlaceholderSpacer: {
                        position: "g0rxnol2",
                        height: "bbl9m3t3"
                    },
                    textInput: {
                        position: "g0rxnol2",
                        flexGrow: "ggj6brxn",
                        wordWrap: "b6f1x6w7"
                    },
                    charCounter: {
                        position: "lhggkp7q",
                        top: "jgz0asyo",
                        width: "cxkis295",
                        fontSize: "bze30y65",
                        lineHeight: "iv396pab",
                        color: "t3rh7lfs",
                        textAlign: "e65innqk"
                    },
                    charCounterWithClearBtn: {
                        top: "qq0sjtgm",
                        end: "rezueyon"
                    },
                    labelText: {
                        position: "lhggkp7q",
                        width: "ln8gz9je",
                        fontSize: "enbbiyaj",
                        lineHeight: "q6wg26sa",
                        color: "hp667wtd",
                        transitionDuration: "p4t1lx4y",
                        transform: "e79a4tva"
                    },
                    labelTextFloat: {
                        fontSize: "dsh4tgtl",
                        lineHeight: "jgi8eev7",
                        transform: "qdd0en2n"
                    },
                    inputEmoji: {
                        position: "lhggkp7q",
                        top: "jgz0asyo",
                        end: "ebjesfe0",
                        color: "cs9t9or5"
                    },
                    clearInput: {
                        position: "lhggkp7q",
                        top: "mvf5n2qr",
                        end: "ia5k4ep2",
                        color: "s4k44ver"
                    },
                    suggestionsContainer: {
                        position: "lhggkp7q",
                        end: "citmgm7b",
                        bottom: "jxacihee",
                        start: "cheugonp"
                    }
                };

            function _(e, t) {
                var n = e.value,
                    a = e.focusOnMount,
                    d = e.onBlur,
                    c = e.onFocus,
                    _ = e.maxLength,
                    C = void 0 === _ ? 25 : _,
                    P = e.onMaxPasteExceeded,
                    T = void 0 === P ? w : P,
                    M = (0, s.useRef)(null),
                    E = (0, s.useRef)(null),
                    N = (0, s.useRef)(null),
                    q = (0, s.useState)(!1),
                    I = (0, r.default)(q, 2),
                    z = I[0],
                    F = I[1],
                    R = (0, s.useState)(null),
                    A = (0, r.default)(R, 2),
                    D = A[0],
                    B = A[1],
                    L = (0, i.numCodepoints)(e.value || ""),
                    G = function() {
                        var e;
                        null === (e = M.current) || void 0 === e || e.focus()
                    };
                (0, s.useEffect)((function() {
                    !0 === a && G()
                }), []);
                var Y = function() {
                        B(null)
                    },
                    H = function(e) {
                        var t = M.current;
                        t && (t.focus(!1), t.replaceSelection(e)), Y()
                    },
                    W = function(e) {
                        z && F(!1), d && d(e)
                    },
                    K = function(e) {
                        e.stopPropagation(), z || F(!0), c && c(e)
                    };
                (0, s.useImperativeHandle)(t, (function() {
                    return {
                        handleBlur: W,
                        handleFocus: K,
                        refInput: M.current
                    }
                }));
                var U, J = e.supportsEmoji ? (0, k.jsx)("button", {
                    className: (0, u.default)(O.inputEmoji),
                    onClick: function(e) {
                        e && (e.preventDefault(), e.stopPropagation());
                        var t = (0, k.jsx)(f.EmojiPanel, {
                            ref: N,
                            onEmoji: H,
                            onFocusNext: G,
                            onFocusPrev: G
                        });
                        B({
                            menu: t,
                            dirY: p.DirY.TOP,
                            type: "emoji_picker",
                            anchor: e.target
                        }), G()
                    },
                    children: (0, k.jsx)(b.default, {
                        "aria-label": l.fbt._("Open emojis panel", null, {
                            hk: "3IEMY6"
                        }),
                        name: "emoji-input"
                    })
                }) : void 0;
                U = null != n && "" !== n ? (0, k.jsx)("button", {
                    className: (0, u.default)(O.clearInput),
                    onClick: function() {
                        var e;
                        null === (e = M.current) || void 0 === e || e.reset()
                    },
                    children: (0, k.jsx)(b.default, {
                        name: "x-alt"
                    })
                }) : null;
                var V, X = !0 === e.showRemaining ? (0, k.jsx)("div", {
                    className: (0, u.default)(O.buttonContainer, o.uiMargin.horiz4, o.uiPadding.bottom20, O.charCounter, o.uiPadding.bottom0, null != U && O.charCounterWithClearBtn),
                    children: (0, k.jsx)("div", {
                        className: (0, u.default)(O.charCounter, o.uiPadding.bottom0),
                        children: C - L < 50 ? m.default.n(C - L) : null
                    })
                }) : null;
                D && (V = (0, k.jsx)(j.UIE, {
                    displayName: "EmojiPicker",
                    escapable: !0,
                    popable: !0,
                    requestDismiss: Y,
                    requestFocus: function() {
                        var e;
                        null === (e = N.current) || void 0 === e || e.restoreFocus()
                    },
                    children: (0, k.jsx)(y.default, {
                        contextMenu: D
                    })
                }));
                var Q = (0, u.default)(O.textInput),
                    $ = (0, u.default)(O.labelText, o.uiPadding.top8, null != e.value && "" !== e.value && O.labelTextFloat);
                return (0, k.jsxs)(g.HotKeys, {
                    className: Q,
                    onFocus: G,
                    children: [(0, k.jsx)("span", {
                        className: $,
                        children: e.placeholder
                    }), (0, k.jsx)("div", {
                        className: (0, u.default)("" === e.placeholder ? O.noPlaceholderSpacer : O.spacer)
                    }), (0, k.jsx)("div", {
                        className: (0, u.default)(!m.default.isRTL() && [O.suggestionsPositioner, o.uiPadding.horiz10]),
                        children: (0, k.jsxs)("div", {
                            className: (0, u.default)(!m.default.isRTL() && O.suggestionsContainer),
                            children: [(0, k.jsx)(v.default.MentionSuggestions, {
                                chat: e.chat,
                                theme: x.ThemeOptions.MEDIA_CAPTION
                            }), (0, k.jsx)(v.default.EmojiSuggestions, {
                                chat: e.chat,
                                theme: h.ThemeOptions.MEDIA_CAPTION
                            })]
                        })
                    }), (0, k.jsxs)("div", {
                        className: (0, u.default)(O.wrapper, O.activeWrapper, z && o.uiPadding.bottom0),
                        children: [(0, k.jsx)(v.default, {
                            ref: M,
                            initialValue: e.value,
                            initialSelection: E.current,
                            readOnly: !1,
                            spellCheck: e.spellCheck,
                            multiline: e.multiline,
                            maxLength: e.maxLength,
                            onEnter: e.onEnter,
                            onMaxPasteExceeded: T,
                            onFiles: e.onFiles,
                            onChange: e.onChange,
                            onSelect: function(e) {
                                E.current = e
                            },
                            theme: "media-caption"
                        }), (0, k.jsxs)("div", {
                            className: (0, u.default)(O.inputControls),
                            children: [(0, k.jsxs)(S.default, {
                                transitionName: "pop",
                                component: "div",
                                className: (0, u.default)(O.buttonContainer, o.uiMargin.horiz4, o.uiPadding.bottom20),
                                children: [U, J]
                            }), X]
                        })]
                    }), V]
                })
            }
            var C = (0, s.forwardRef)(_);
            t.default = C
        },
        4313: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n(34575)),
                i = a(n(2205)),
                o = a(n(99842)),
                l = a(n(73716)),
                s = n(71222),
                u = n(11125),
                d = a(n(90661)),
                c = n(18018),
                p = a(n(52186)),
                f = n(23932),
                h = a(n(57651)),
                g = new d.default,
                m = new l.default,
                v = function(e) {
                    (0, i.default)(n, e);
                    var t = (0, o.default)(n);

                    function n() {
                        return (0, r.default)(this, n), t.apply(this, arguments)
                    }
                    return n
                }((0, c.PluggableInput)([s.EmojiPlugin, m, g, p.default]));
            t.default = v, v.MentionSuggestions = (0, h.default)(f.Suggestions, {
                plugin: g
            }), v.EmojiSuggestions = (0, h.default)(u.EmojiSuggestions, {
                plugin: m
            })
        },
        32403: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.stringify = function(e) {
                return JSON.stringify(e)
            }
        }
    }
]);