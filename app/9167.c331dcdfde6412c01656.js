/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [9167], {
        657259: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.stringify = function(e) {
                return JSON.stringify(e)
            }
        },
        744570: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendOrderDetailsMessageAsMerchant = function() {
                return T.apply(this, arguments)
            }, t.sendOrderPaymentStatusMessageAsMerchant = function() {
                return E.apply(this, arguments)
            }, t.sendOrderStatusMessageAsMerchant = function() {
                return I.apply(this, arguments)
            };
            var a = r(n(887757)),
                i = r(n(81109)),
                l = r(n(348926)),
                o = n(281098),
                d = n(86850),
                u = w(n(365021)),
                s = r(n(681339)),
                c = w(n(657259)),
                f = n(218953),
                p = r(n(687086)),
                h = r(n(404994)),
                m = r(n(93099)),
                v = r(n(773467)),
                g = n(154553),
                x = n(141251),
                b = n(88096),
                y = n(925841),
                S = n(210984),
                j = n(228277),
                C = n(95422),
                _ = r(n(580845));

            function k(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (k = function(e) {
                    return e ? n : t
                })(e)
            }

            function w(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = k(t);
                if (n && n.has(e)) return n.get(e);
                var r = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var l = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                        l && (l.get || l.set) ? Object.defineProperty(r, i, l) : r[i] = e[i]
                    } return r.default = e, n && n.set(e, r), r
            }

            function M(e, t) {
                var n, r;
                if (null == t) return "";
                var a = f.CatalogCollection.get((0, C.createWid)(e)),
                    i = null == a ? void 0 : a.productCollection.get(t),
                    l = null == i || null === (n = i.getProductImageCollectionHead()) || void 0 === n ? void 0 : n.mediaData.preview;
                return l instanceof m.default && null !== (r = l.getBase64()) && void 0 !== r ? r : ""
            }

            function P() {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = (0, l.default)(a.default.mark((function e(t) {
                    var n, r, l, u, s, c, f, p, m, x, b, C;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.caption, r = t.chat, l = t.nativeFlowName, u = t.buttonParamsJson, s = t.errorMessage, c = t.thumbnail, f = t.buttonName, p = t.contextInfo, m = (0, j.getMaybeMeUser)(), x = c ? {
                                    title: void 0,
                                    subtitle: void 0,
                                    mediaType: void 0,
                                    hasMediaAttachment: !1,
                                    thumbnail: c
                                } : void 0, e.t0 = i.default, e.t1 = g.MSG_TYPE.INTERACTIVE, e.t2 = d.ACK.CLOCK, e.t3 = m, e.t4 = v.default, e.t5 = m, e.t6 = r.id, e.next = 12, v.default.newId();
                            case 12:
                                if (e.t7 = e.sent, e.t8 = void 0, e.t9 = {
                                        from: e.t5,
                                        to: e.t6,
                                        id: e.t7,
                                        participant: e.t8,
                                        selfDir: "out"
                                    }, e.t10 = new e.t4(e.t9), e.t11 = (0, o.unixTime)(), e.t12 = r.id, e.t13 = n, e.t14 = l, e.t15 = x, e.t16 = h.default.NATIVE_FLOW, e.t17 = {
                                        buttons: [{
                                            name: f,
                                            buttonParamsJson: u
                                        }],
                                        messageVersion: 1
                                    }, e.t18 = {
                                        type: e.t1,
                                        ack: e.t2,
                                        from: e.t3,
                                        id: e.t10,
                                        local: !0,
                                        isNewMsg: !0,
                                        self: "out",
                                        t: e.t11,
                                        to: e.t12,
                                        caption: e.t13,
                                        nativeFlowName: e.t14,
                                        interactiveHeader: e.t15,
                                        interactiveType: e.t16,
                                        interactivePayload: e.t17
                                    }, e.t19 = p, b = (0, e.t0)(e.t18, e.t19), !(0, j.isMeAccount)(r.id)) {
                                    e.next = 37;
                                    break
                                }
                                return e.prev = 27, e.next = 30, (0, y.addAndSendMsgToChat)(r, b)[0];
                            case 30:
                                return e.abrupt("return");
                            case 33:
                                throw e.prev = 33, e.t20 = e.catch(27), __LOG__(3)`${s}: ${e.t20}`, e.t20;
                            case 37:
                                return e.prev = 37, e.next = 40, (0, y.addAndSendMsgToChat)(r, b)[1];
                            case 40:
                                if ((C = e.sent) && C === S.SendMsgResult.OK) {
                                    e.next = 43;
                                    break
                                }
                                throw (0, _.default)("Order message SendMsgResult failure status");
                            case 43:
                                e.next = 49;
                                break;
                            case 45:
                                throw e.prev = 45, e.t21 = e.catch(37), __LOG__(3)`${s}: ${e.t21}`, e.t21;
                            case 49:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [27, 33],
                        [37, 45]
                    ])
                })))).apply(this, arguments)
            }

            function T() {
                return (T = (0, l.default)(a.default.mark((function e(t) {
                    var n, r, i, l, o, d, c, f, h, m, v, g, x;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.order, i = t.chat, l = t.orderNote, o = t.discount, d = t.shipping, c = t.tax, f = t.total, h = t.offset, m = null === (n = r.orderItemCollection.head()) || void 0 === n ? void 0 : n.id, v = M(r.sellerJid, m), g = r.orderItemCollection.map((function(e) {
                                    return {
                                        retailer_id: e.id,
                                        name: e.name,
                                        amount: {
                                            value: e.price,
                                            offset: h
                                        },
                                        quantity: e.quantity,
                                        isCustomItem: e.isCustomItem,
                                        isQuantitySet: e.isQuantitySet
                                    }
                                })), x = {
                                    reference_id: (0, s.default)(),
                                    type: "physical-goods",
                                    payment_configuration: "merchant_categorization_code",
                                    currency: r.currency,
                                    total_amount: {
                                        value: f,
                                        offset: h
                                    },
                                    order: {
                                        status: (0, b.getDefaultOrderStatus)(),
                                        items: g,
                                        subtotal: {
                                            value: Number(r.subtotal),
                                            offset: h
                                        },
                                        tax: null == c ? void 0 : {
                                            value: c,
                                            offset: h
                                        },
                                        shipping: null == d ? void 0 : {
                                            value: d,
                                            offset: h
                                        },
                                        discount: null == o ? void 0 : {
                                            value: o,
                                            offset: h
                                        }
                                    }
                                }, e.next = 7, P({
                                    caption: l,
                                    chat: i,
                                    nativeFlowName: p.default.ORDER_DETAILS,
                                    buttonParamsJson: u.stringify(x),
                                    errorMessage: "Order message send to chat failure",
                                    thumbnail: v,
                                    buttonName: "review_and_pay"
                                });
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function I() {
                return (I = (0, l.default)(a.default.mark((function e(t) {
                    var n, r, i, l, o, d, u, s, f, h, m, v;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.chat, r = t.sellerJid, i = t.orderInfo, l = t.orderNote, o = t.orderStatus, d = i.items, u = i.referenceId, s = d[0].id, f = M(r, s), h = {
                                    reference_id: u,
                                    order: {
                                        status: o
                                    }
                                }, m = (0, b.findOrderDetailsMessage)(n, u), v = null == m ? void 0 : m.msgContextInfo(n.id), e.next = 10, P({
                                    caption: l,
                                    chat: n,
                                    nativeFlowName: p.default.ORDER_STATUS,
                                    buttonParamsJson: c.stringify(h),
                                    errorMessage: "Order message sent to chat failure",
                                    thumbnail: f,
                                    buttonName: "review_order",
                                    contextInfo: v
                                });
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function E() {
                return (E = (0, l.default)(a.default.mark((function e(t) {
                    var n, r, i, l, d, s, c, f, h, m, v, g, y, S, j, C = arguments;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = C.length > 1 && void 0 !== C[1] ? C[1] : x.OrderPaymentStatus.Captured, i = t.chat, l = t.orderInfo, d = t.orderStatus, s = t.sellerJid, c = t.offset, f = t.orderNote, h = l.referenceId, m = null === (n = l.items.at(0)) || void 0 === n ? void 0 : n.id, v = M(s, m), g = l.items.map((function(e) {
                                    var t;
                                    return {
                                        retailer_id: e.id,
                                        name: e.name,
                                        amount: {
                                            value: null !== (t = e.amount) && void 0 !== t ? t : 0,
                                            offset: c
                                        },
                                        quantity: e.quantity,
                                        isCustomItem: e.isCustomItem,
                                        isQuantitySet: e.isQuantitySet
                                    }
                                })), y = {
                                    reference_id: h,
                                    payment_status: r,
                                    payment_timestamp: (0, o.unixTime)(),
                                    currency: l.currency,
                                    total_amount: {
                                        value: l.totalAmount,
                                        offset: c
                                    },
                                    order: {
                                        status: d,
                                        items: g,
                                        subtotal: {
                                            value: Number(l.subtotal),
                                            offset: c
                                        },
                                        tax: null == l.tax ? void 0 : {
                                            value: l.tax,
                                            offset: c
                                        },
                                        shipping: null == l.shipping ? void 0 : {
                                            value: l.shipping,
                                            offset: c
                                        },
                                        discount: null == l.discount ? void 0 : {
                                            value: l.discount,
                                            offset: c
                                        }
                                    }
                                }, S = (0, b.findOrderDetailsMessage)(i, h), j = null == S ? void 0 : S.msgContextInfo(i.id), e.next = 11, P({
                                    caption: f,
                                    chat: i,
                                    nativeFlowName: p.default.PAYMENT_STATUS,
                                    buttonParamsJson: u.stringifyPaymentStatus(y),
                                    errorMessage: "Order message send to chat failure",
                                    thumbnail: v,
                                    buttonName: "payment_status",
                                    contextInfo: j
                                });
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        520708: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, o.jsx)(i.default, {
                    "aria-label": l.fbt._("Remove from cart", null, {
                        hk: "9voCj"
                    }),
                    Icon: a.DeleteIcon,
                    title: l.fbt._("Remove from cart", null, {
                        hk: "9voCj"
                    }),
                    xstyle: d.deleteIcon,
                    onClick: e.onClick
                })
            };
            var a = n(356953),
                i = r(n(526527)),
                l = n(548360),
                o = (r(n(156720)), n(785893)),
                d = {
                    deleteIcon: {
                        color: "svlsagor",
                        ":hover": {
                            color: "kbf8aj4n"
                        }
                    }
                }
        },
        886146: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AddOrderItem = function(e) {
                var t = e.title,
                    n = e.onClick;
                return (0, l.jsx)(a.default, {
                    testid: "add-order-item-button",
                    image: (0, l.jsx)(i.AddItemIcon, {}),
                    primary: t,
                    theme: "add-order-item",
                    onClick: n
                })
            };
            var a = r(n(799328)),
                i = n(165709),
                l = n(785893)
        },
        629043: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CatalogProductPrice = function(e) {
                var t = e.orderItem,
                    n = e.price,
                    r = e.priceStage,
                    p = e.currency,
                    h = e.onPriceChange,
                    m = e.onPriceStageChange;
                e.onEnter;
                switch (r) {
                    case f.Editing:
                        return (0, c.jsx)("div", {
                            role: "textbox",
                            onClick: function(e) {
                                return e.stopPropagation()
                            },
                            "data-testid": "catalog-product-price-editing",
                            children: (0, c.jsxs)(i.FlexRow, {
                                align: "center",
                                children: [(0, c.jsx)("span", {
                                    className: (0, s.default)(d.uiPadding.end3),
                                    children: (0, a.formatAmount1000ToParts)(p, 0).symbol
                                }), (0, c.jsx)(l.default, {
                                    currency: p,
                                    value: null != n ? String(n / 1e3) : "",
                                    onSave: function(e) {
                                        m(f.EditableFilled), h((0, a.valueFromString)(p, e))
                                    },
                                    onCancel: function() {
                                        m(null == n ? f.EditableBlank : f.EditableFilled)
                                    }
                                })]
                            })
                        });
                    case f.EditableFilled:
                        return (0, c.jsx)("div", {
                            role: "button",
                            className: (0, s.default)(o.default.clickableText),
                            onClick: function(e) {
                                m(f.Editing), e.stopPropagation()
                            },
                            "data-testid": "catalog-product-price-editable-filled",
                            children: (0, a.formatAmount1000)(p, Number(n))
                        });
                    case f.EditableBlank:
                        return (0, c.jsx)("span", {
                            role: "button",
                            className: (0, s.default)(o.default.clickableText),
                            onClick: function(e) {
                                m(f.Editing), e.stopPropagation()
                            },
                            "data-testid": "catalog-product-price-editable-blank",
                            children: u.fbt._("Enter price", null, {
                                hk: "1Bd2B6"
                            })
                        });
                    default:
                        return (0, c.jsx)("div", {
                            "data-testid": "catalog-product-price-readonly",
                            children: (0, a.formatAmount1000)(p, t.price)
                        })
                }
            }, t.PriceStage = void 0;
            var a = n(217962),
                i = n(208188),
                l = r(n(424948)),
                o = r(n(374332)),
                d = n(71867),
                u = n(548360),
                s = r(n(156720)),
                c = n(785893),
                f = n(76672).Mirrored(["Readonly", "EditableBlank", "EditableFilled", "Editing"]);
            t.PriceStage = f
        },
        424948: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.currency,
                    n = e.value,
                    r = e.onSave,
                    i = e.onCancel,
                    o = (0, s.useState)(null),
                    m = (0, a.default)(o, 2),
                    v = m[0],
                    g = m[1],
                    x = (0, s.useState)(n),
                    b = (0, a.default)(x, 2),
                    y = b[0],
                    S = b[1];
                return (0, l.useShowToastErrors)({
                    productPriceError: v
                }), (0, f.jsx)("div", {
                    className: (0, c.default)(h),
                    children: (0, f.jsx)(d.RichTextField, {
                        managed: !0,
                        constrainedWidth: !0,
                        hideFloatingLabel: !0,
                        focusOnMount: !0,
                        editable: !0,
                        lockable: !0,
                        startActive: !0,
                        placeholder: u.fbt._("Price", null, {
                            hk: "3OsKht"
                        }),
                        value: y,
                        theme: "default",
                        maxLength: 12,
                        customStyleThemes: ["disabledLabel", "noErrorInfo"],
                        testid: "order-detail-amount-input",
                        validate: function(e) {
                            var n = p(e, t);
                            return g(n), !n
                        },
                        onChange: function(e) {
                            var n = e.text;
                            S(n), g(p(n, t))
                        },
                        onSave: function() {
                            r(y)
                        },
                        onCancel: i,
                        error: v
                    })
                })
            };
            var a = r(n(963038)),
                i = n(217962),
                l = n(46968),
                o = n(642343),
                d = n(983557),
                u = n(548360),
                s = n(667294),
                c = r(n(156720)),
                f = n(785893);

            function p(e, t) {
                return null != e && e.length && (0, i.validatePriceString)(t, e) ? (0, i.valueFromString)(t, e) / o.DEFAULT_OFFSET < 0 ? u.fbt._("Enter a positive price", null, {
                    hk: "1goGAM"
                }) : void 0 : u.fbt._("Enter a valid price", null, {
                    hk: "1WZB7p"
                })
            }
            var h = {
                textAlign: "ljrqcn24",
                width: "h4dw90qs",
                overflowX: "gfz4du6o",
                overflowY: "r7fjleex",
                marginTop: "obt84bhp",
                paddingEnd: "fhfm09ip"
            }
        },
        46968: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.additionalChargeErrorHandler = function(e) {
                var t = e.label,
                    n = e.currency,
                    l = e.fieldType,
                    o = e.maxFlatValue,
                    d = e.enablePercentValueCheck,
                    u = e.value;
                if (!(0, a.validatePriceString)(n, u)) return c();
                var s = (0, a.valueFromString)(n, u) / i.DEFAULT_OFFSET;
                if (s < 0) return f();
                if (l === i.PERCENTAGE_SYMBOL) {
                    if (Boolean(d) && s > 100) return p(null != t ? t : "")
                } else if ((0, r.isNumber)(o) && s > o) return h(null != t ? t : "");
                return ""
            }, t.errorMessageBigPercentageValue = t.errorMessageBigFlatValue = void 0, t.getOrderDetailInvalidNumberErrorMessage = c, t.getOrderDetailNegativeNumberErrorMessage = f, t.useShowToastErrors = function(e) {
                (0, u.useEffect)((function() {
                    for (var t in e) {
                        var n = e[t];
                        null != n && o.ToastManager.open((0, s.jsx)(l.Toast, {
                            duration: 1e4,
                            id: t + n.toString(),
                            msg: n,
                            action: {
                                actionText: d.fbt._("OKAY", null, {
                                    hk: "3RIrWh"
                                }),
                                dismiss: !0,
                                theme: "success"
                            }
                        }))
                    }
                }), [e])
            };
            var r = n(689121),
                a = n(217962),
                i = n(642343),
                l = n(236539),
                o = n(422210),
                d = n(548360),
                u = n(667294),
                s = n(785893);

            function c() {
                return d.fbt._("Enter a valid number", null, {
                    hk: "34R7Hv"
                })
            }

            function f() {
                return d.fbt._("Enter a positive number", null, {
                    hk: "3UMjdw"
                })
            }
            var p = function(e) {
                return d.fbt._("{input_label} cannot be more than 100%", [d.fbt._param("input_label", e)], {
                    hk: "1WMDbw"
                })
            };
            t.errorMessageBigPercentageValue = p;
            var h = function(e) {
                return d.fbt._("{input_label} cannot be more than subtotal", [d.fbt._param("input_label", e)], {
                    hk: "3IRSWP"
                })
            };
            t.errorMessageBigFlatValue = h
        },
        423503: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.details,
                    n = e.currency,
                    r = e.priceMap,
                    C = e.items,
                    _ = e.onDeleteItem,
                    k = e.onAddItem,
                    w = e.onPriceChange,
                    M = e.onItemQuantityChange,
                    P = (0, b.useState)(null),
                    O = (0, l.default)(P, 2),
                    T = O[0],
                    I = O[1],
                    E = (0, b.useState)({}),
                    A = (0, l.default)(E, 2),
                    N = A[0],
                    D = A[1],
                    F = (0, b.useCallback)((function(e) {
                        return null != e.price ? m.PriceStage.Readonly : null != (null == r ? void 0 : r[e.id]) ? m.PriceStage.EditableFilled : m.PriceStage.EditableBlank
                    }), [r]),
                    R = (0, b.useCallback)((function(e, t) {
                        D((function(n) {
                            return (0, i.default)((0, i.default)({}, n), {}, (0, a.default)({}, t.id, e))
                        }))
                    }), []),
                    B = Boolean(t),
                    z = function(e, t) {
                        var a, i;
                        return (0, S.jsxs)("div", {
                            className: (0, y.default)(j.productDeleteWrapper),
                            children: [(0, S.jsx)(m.CatalogProductPrice, {
                                price: null !== (a = null == r ? void 0 : r[e.id]) && void 0 !== a ? a : null,
                                priceStage: null !== (i = N[e.id]) && void 0 !== i ? i : F(e),
                                currency: n,
                                orderItem: e,
                                onPriceChange: function(t) {
                                    return null == w ? void 0 : w(t, e.id)
                                },
                                onPriceStageChange: function(t) {
                                    R(t, e)
                                },
                                onEnter: function() {
                                    I(null)
                                }
                            }), t === T && (0, S.jsx)("div", {
                                className: (0, y.default)(g.uiMargin.start5),
                                children: (0, S.jsx)(d.default, {
                                    onClick: function(n) {
                                        var r, a;
                                        n.stopPropagation(), r = function() {
                                            return null == _ ? void 0 : _(t)
                                        }, a = e.name, p.ModalManager.open((0, S.jsx)(c.ConfirmPopup, {
                                            title: x.fbt._("Delete {order_item_name} from order?", [x.fbt._param("order_item_name", a)], {
                                                hk: "2Na2JW"
                                            }),
                                            okText: x.fbt._("Delete", null, {
                                                hk: "4m6dzv"
                                            }),
                                            onOK: function() {
                                                null == r || r(), p.ModalManager.close()
                                            },
                                            cancelText: x.fbt._("Cancel", null, {
                                                hk: "15AkJV"
                                            }),
                                            onCancel: function() {
                                                p.ModalManager.close()
                                            }
                                        }))
                                    }
                                })
                            })]
                        })
                    };
                return (0, S.jsxs)(f.FlexColumn, {
                    align: "stretch",
                    xstyle: [j.orderItemsContainer],
                    children: [!B && ((0, o.orderDetailsFromCatalogEnabled)() || (0, o.orderDetailsCustomItemEnabled)()) && (0, S.jsx)(h.AddOrderItem, {
                        title: x.fbt._("Add items", null, {
                            hk: "M4YqU"
                        }),
                        onClick: function() {
                            return null == k ? void 0 : k()
                        }
                    }), C.map((function(e, t) {
                        var n = x.fbt._("Quantity {item-quantity}", [x.fbt._param("item-quantity", e.quantity)], {
                            hk: "3ESE8k"
                        });
                        return (0, S.jsx)(u.default, (0, i.default)({
                            testid: "order-item-cell",
                            className: (0, y.default)(t > 0 && g.uiPadding.top10),
                            disabled: !0,
                            image: (0, S.jsx)(v.OrderItemIcon, {
                                mediaData: e.thumbnailUrl ? e.mediaData : null,
                                useCustomIcon: e.isCustomItem
                            }),
                            primary: (0, S.jsx)("span", {
                                className: (0, y.default)(j.orderItemName),
                                title: e.name,
                                children: e.name
                            }),
                            secondary: B ? n : (0, S.jsx)(s.default, {
                                quantity: e.quantity,
                                onAddOneClick: function() {
                                    return null == M ? void 0 : M(t, e.quantity + 1)
                                },
                                onRemoveOneClick: function() {
                                    return null == M ? void 0 : M(t, e.quantity - 1)
                                }
                            }),
                            theme: "add-order-item",
                            detail: z(e, t)
                        }, B ? void 0 : {
                            onMouseEnter: function() {
                                return I(t)
                            },
                            onMouseLeave: function() {
                                return I(null)
                            }
                        }), t)
                    }))]
                })
            };
            var a = r(n(859713)),
                i = r(n(81109)),
                l = r(n(963038)),
                o = n(894995),
                d = r(n(520708)),
                u = r(n(799328)),
                s = r(n(684492)),
                c = n(430888),
                f = n(208188),
                p = n(628707),
                h = n(886146),
                m = n(629043),
                v = n(165709),
                g = n(71867),
                x = n(548360),
                b = n(667294),
                y = r(n(156720)),
                S = n(785893),
                j = {
                    orderItemsContainer: {
                        marginTop: "jdreu547",
                        marginEnd: "jnwc1y2a",
                        marginBottom: "n5a6z3tu",
                        marginStart: "svoq16ka"
                    },
                    orderItemName: {
                        color: "tviruh8d",
                        whiteSpace: "le5p0ye3",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        textOverflow: "lhj4utae"
                    },
                    productDeleteWrapper: {
                        display: "p357zi0d",
                        alignItems: "gndfcl4n"
                    }
                }
        },
        642343: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PERCENTAGE_SYMBOL = t.DEFAULT_OFFSET = void 0, t.calculateFlatAmounts = function(e) {
                var t = e.orderSubtotal,
                    n = e.discountType,
                    r = e.discountText,
                    o = e.taxType,
                    d = e.taxText,
                    u = e.shippingText,
                    s = l({
                        type: n,
                        value: r,
                        total: t
                    }),
                    c = l({
                        type: o,
                        value: d,
                        total: t - (null != s ? s : 0)
                    }),
                    f = i(u),
                    p = t - (null != s ? s : 0) + (null != f ? f : 0) + (null != c ? c : 0);
                return {
                    total: Math.trunc(p * a),
                    tax: null == c ? null : Math.trunc(c * a),
                    shipping: null == f ? null : Math.trunc(f * a),
                    discount: null == s ? null : Math.trunc(s * a)
                }
            };
            var r = n(217962);
            t.PERCENTAGE_SYMBOL = "%";
            var a = 1e3;

            function i(e) {
                if ("" === e) return null;
                var t = (0, r.valueFromString)("USD", e) / a;
                return Number.isNaN(t) ? 0 : t
            }

            function l(e) {
                var t = e.type,
                    n = e.value,
                    r = e.total,
                    a = i(n);
                return null == a ? null : "%" === t ? a / 100 * r : a
            }
            t.DEFAULT_OFFSET = a
        },
        697927: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.children;
                return (0, o.jsx)(a.FlexColumn, {
                    xstyle: d.container,
                    align: "stretch",
                    children: i.Children.map(t, (function(e, t) {
                        return (0, o.jsxs)(o.Fragment, {
                            children: [0 !== t ? (0, o.jsx)("div", {
                                className: (0, l.default)(d.separator)
                            }) : null, e]
                        })
                    }))
                })
            };
            var a = n(208188),
                i = n(667294),
                l = r(n(156720)),
                o = n(785893),
                d = {
                    container: {
                        gap: "mqqyhd6v"
                    },
                    separator: {
                        height: "bbl9m3t3",
                        borderTop: "iupwfssi"
                    }
                }
        },
        38405: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.orderId,
                    n = e.orderStatus,
                    r = e.sellerWid,
                    h = e.testid,
                    m = a.ContactCollection.get(r),
                    v = m ? (0, f.jsxs)(f.Fragment, {
                        children: [(0, f.jsx)(l.FlexRow, {
                            children: (0, f.jsx)(i.DetailImage, {
                                id: r,
                                size: 48
                            })
                        }), (0, f.jsxs)(l.FlexColumn, {
                            align: "center",
                            children: [(0, f.jsx)(o.Name, {
                                className: (0, c.default)(p.sellerName),
                                useDisplayName: !0,
                                contact: m
                            }), null != t ? (0, f.jsx)(d.TextDiv, {
                                color: "secondary",
                                weight: "medium",
                                className: (0, c.default)(p.uppercase, u.uiMargin.top4),
                                children: s.fbt._("order #{order-id}", [s.fbt._param("order-id", t)], {
                                    hk: "1JaZPw"
                                })
                            }) : null]
                        })]
                    }) : null;
                return (0, f.jsxs)(l.FlexColumn, {
                    align: "center",
                    xstyle: [p.container, u.uiPadding.horiz16],
                    testid: h,
                    children: [v, n]
                })
            };
            var a = n(909881),
                i = n(207826),
                l = n(208188),
                o = n(246009),
                d = n(558288),
                u = n(71867),
                s = n(548360),
                c = r(n(156720)),
                f = n(785893),
                p = {
                    container: {
                        gap: "nypubj7v"
                    },
                    uppercase: {
                        textTransform: "ofejerhi"
                    },
                    sellerName: {
                        fontSize: "p9fp32ui",
                        lineHeight: "tkq7s68q",
                        fontWeight: "hnx8ox4h",
                        color: "tl2vja3b"
                    }
                }
        },
        374332: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            r(n(156720));
            t.default = {
                clickableText: {
                    color: "o0rubyzf",
                    cursor: "ajgl1lbb",
                    fontWeight: "m1e7cby3",
                    lineHeight: "iq0m558w",
                    letterSpacing: "ysae3w6m",
                    ":hover": {
                        textDecoration: "edeob0r2"
                    }
                }
            }
        },
        66287: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.orderStatus,
                    n = void 0 === t ? (0, o.getDefaultOrderStatus)() : t;
                return (0, c.jsxs)(u.TextDiv, {
                    color: h(n),
                    theme: "small",
                    xstyle: f.container,
                    children: [m(n), p(n)]
                })
            };
            var a = n(795586),
                i = n(269853),
                l = n(527753),
                o = n(88096),
                d = n(338591),
                u = n(558288),
                s = n(548360),
                c = (r(n(156720)), n(785893)),
                f = {
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

            function p(e) {
                switch (e) {
                    case o.OrderStatus.Pending:
                        return s.fbt._("Order pending", null, {
                            hk: "G8dLv"
                        });
                    case o.OrderStatus.Processing:
                        return s.fbt._("Order processing", null, {
                            hk: "4vPHTW"
                        });
                    case o.OrderStatus.PartiallyShipped:
                        return s.fbt._("Order partially shipped", null, {
                            hk: "3MR9kU"
                        });
                    case o.OrderStatus.Shipped:
                        return s.fbt._("Order shipped", null, {
                            hk: "1jZ5aa"
                        });
                    case o.OrderStatus.Canceled:
                        return s.fbt._("Order canceled", null, {
                            hk: "3veVcK"
                        });
                    case o.OrderStatus.Complete:
                        return s.fbt._("Order complete", null, {
                            hk: "30XhC7"
                        })
                }
            }

            function h(e) {
                switch (e) {
                    case o.OrderStatus.Pending:
                    case o.OrderStatus.Processing:
                    case o.OrderStatus.PartiallyShipped:
                    case o.OrderStatus.Shipped:
                        return;
                    case o.OrderStatus.Canceled:
                        return "danger";
                    case o.OrderStatus.Complete:
                        return "success"
                }
            }

            function m(e) {
                switch (e) {
                    case o.OrderStatus.Pending:
                    case o.OrderStatus.Processing:
                        return (0, c.jsx)(d.StatusClockIcon, {
                            width: 12,
                            displayInline: !0,
                            xstyle: [f.icon, f.iconCipherText]
                        });
                    case o.OrderStatus.PartiallyShipped:
                    case o.OrderStatus.Shipped:
                        return (0, c.jsx)(l.LocalShippingIcon, {
                            width: 12,
                            displayInline: !0,
                            xstyle: f.icon
                        });
                    case o.OrderStatus.Canceled:
                        return (0, c.jsx)(i.AlertErrorIcon, {
                            width: 12,
                            displayInline: !0,
                            xstyle: f.icon
                        });
                    case o.OrderStatus.Complete:
                        return (0, c.jsx)(a.ActionCheckCircleIcon, {
                            width: 12,
                            displayInline: !0,
                            xstyle: f.icon
                        })
                }
            }
        },
        320276: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.chat,
                    n = e.onSubmit,
                    r = (0, o.getFormattedUser)(t.contact),
                    x = (0, p.useState)(!1),
                    b = (0, a.default)(x, 2),
                    y = b[0],
                    S = b[1];
                return (0, m.jsxs)(l.ConfirmPopup, {
                    testid: "order-ephemeral-exemption-confirm-popup",
                    title: f.fbt._("Disappearing messages are turned on", null, {
                        hk: "22mxJR"
                    }),
                    onOK: function() {
                        y && c.userPreferencesStore.set(s.KEYS.DISAPPEARING_MSG_DISCLAIMER_DIMISSED, !0), d.ModalManager.close(), n()
                    },
                    onCancel: function() {
                        d.ModalManager.close()
                    },
                    children: [(0, m.jsx)(u.WDSTextSectionTitle, {
                        children: f.fbt._("Disappearing messages are turned on in your chat with {contact-name}, but this order will not disappear.", [f.fbt._param("contact-name", r)], {
                            hk: "4kgj97"
                        })
                    }), (0, m.jsx)("div", {
                        children: (0, m.jsxs)("div", {
                            className: (0, h.default)(v),
                            children: [(0, m.jsx)(i.CheckBox, {
                                testid: "order-ephemeral-exemption-popup-skip-checkbox",
                                id: "order-ephemeral-exemption-popup-skip-checkbox-id",
                                checked: y,
                                onChange: function() {
                                    S(!y)
                                }
                            }), (0, m.jsx)("label", {
                                htmlFor: "order-ephemeral-exemption-popup-skip-checkbox-id",
                                className: (0, h.default)(g),
                                children: f.fbt._("Don't show me this again", null, {
                                    hk: "2g9ZnR"
                                })
                            })]
                        })
                    })]
                })
            };
            var a = r(n(963038)),
                i = n(877407),
                l = n(430888),
                o = n(135275),
                d = n(628707),
                u = n(558288),
                s = n(973424),
                c = n(192623),
                f = n(548360),
                p = n(667294),
                h = r(n(156720)),
                m = n(785893),
                v = {
                    paddingTop: "n1yiu2zv",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "eb4rp10x",
                    paddingStart: "gx1rr48f"
                },
                g = {
                    marginStart: "fooq7fky"
                }
        },
        165709: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AddItemIcon = function() {
                return (0, d.jsx)("div", {
                    className: (0, o.default)(u),
                    children: (0, d.jsx)(a.AddItemIcon, {
                        className: (0, o.default)(c)
                    })
                })
            }, t.OrderItemIcon = function(e) {
                var t = e.mediaData;
                return e.useCustomIcon || null == t ? (0, d.jsx)(f, {}) : (0, d.jsx)(l.ProductThumb, {
                    mediaData: t,
                    theme: "orderSquareThumb"
                })
            };
            var a = n(505921),
                i = n(599989),
                l = n(604785),
                o = r(n(156720)),
                d = n(785893),
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
                c = {
                    marginTop: "m3ct2rho",
                    marginEnd: "k1jo73ug",
                    marginBottom: "ec1z5skj",
                    marginStart: "isfiuinm",
                    color: "s4recxw2"
                };

            function f() {
                return (0, d.jsx)("div", {
                    className: (0, o.default)(u),
                    children: (0, d.jsx)(i.ListMsgIconIcon, {
                        className: (0, o.default)(s)
                    })
                })
            }
        },
        120455: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OrderSummaryDrawer = function(e) {
                var t = e.chat,
                    n = e.currency,
                    r = e.priceMap,
                    d = e.orderItems,
                    m = e.orderSubtotal,
                    x = e.additionalCharges,
                    S = e.flatAmounts,
                    k = e.onBack,
                    E = e.onSubmit,
                    B = e.onAddItem,
                    z = e.onDeleteItem,
                    q = e.onPriceChange,
                    L = e.onAdditionalCharges,
                    W = e.onItemQuantityChange,
                    V = e.entryPoint,
                    H = void 0 === V ? null : V,
                    G = e.onDeclineOrder,
                    Y = void 0 === G ? null : G,
                    U = (0, I.useState)(R),
                    X = (0, a.default)(U, 2),
                    Z = (X[0], X[1]);
                (0, I.useEffect)((function() {
                    var e = function() {
                        var e = u.CTWADataSharingModel.getValue() === i.ENUM_FALSE_NOTSET_TRUE.true;
                        Z(e)
                    };
                    return u.CTWADataSharingModel.subscribeForUpdates(e),
                        function() {
                            u.CTWADataSharingModel.unsubscribeFromUpdates(e)
                        }
                }), []);
                var J = d.every((function(e) {
                        var t;
                        return Number.isInteger(null !== (t = e.price) && void 0 !== t ? t : r[e.id])
                    })),
                    K = 0 !== d.length;
                return (0, A.jsxs)(c.default, {
                    children: [(0, A.jsx)(p.DrawerHeader, {
                        title: T.fbt._("Create order", null, {
                            hk: "3snLWG"
                        }),
                        onBack: k,
                        type: p.DRAWER_HEADER_TYPE.SMALL
                    }), (0, A.jsxs)(f.default, {
                        children: [(0, A.jsx)(h.default, {
                            xstyle: [N.orderItemsContainer, w.uiPadding.top20, w.uiPadding.bottom20],
                            theme: "refresh-padding-title",
                            children: (0, A.jsxs)(b.default, {
                                children: [(0, A.jsx)(y.default, {
                                    sellerWid: (0, P.getMeUser)(),
                                    orderStatus: (0, A.jsx)(j.default, {})
                                }), (0, A.jsx)(g.default, {
                                    currency: n,
                                    priceMap: r,
                                    items: d,
                                    onDeleteItem: z,
                                    onPriceChange: q,
                                    onAddItem: B,
                                    onItemQuantityChange: W
                                }), (0, A.jsx)(F, {
                                    tax: S.tax,
                                    discount: S.discount,
                                    shipping: S.shipping,
                                    currency: n,
                                    subtotal: m,
                                    additionalCharges: x,
                                    canDisplayAdditionalCharges: K,
                                    canChangeAdditionalCharges: K,
                                    onAdditionalCharges: L
                                })]
                            })
                        }), (d.length, null), (0, A.jsx)(_.OrderTotalPrice, {
                            xstyle: w.uiPadding.all16,
                            visible: K,
                            disabled: !J,
                            testid: "send-order-button",
                            totalPrice: (0, s.formatAmount1000)(n, S.total),
                            title: T.fbt._("Total", null, {
                                hk: "qKqct"
                            }),
                            onConfirm: function() {
                                var e = function() {
                                    E()
                                };
                                !0 !== O.userPreferencesStore.get(M.KEYS.DISAPPEARING_MSG_DISCLAIMER_DIMISSED) && (0, l.inOrderMessagesEphemeralExceptionEnabled)() && (0, o.isEphemeralSettingOn)(t) ? v.ModalManager.open((0, A.jsx)(C.default, {
                                    chat: t,
                                    onSubmit: e
                                })) : e()
                            },
                            confirmTitle: T.fbt._("Send Order", null, {
                                hk: "dGwCV"
                            }),
                            error: D(J, S.total, n),
                            entryPoint: H,
                            onDeclineOrder: Y
                        })]
                    })]
                })
            }, t.OrderValues = F;
            var a = r(n(963038)),
                i = n(942527),
                l = n(894995),
                o = n(762933),
                d = r(n(522656)),
                u = n(6731),
                s = n(217962),
                c = r(n(237120)),
                f = r(n(686866)),
                p = n(58985),
                h = r(n(39357)),
                m = n(208188),
                v = n(628707),
                g = r(n(423503)),
                x = n(642343),
                b = r(n(697927)),
                y = r(n(38405)),
                S = r(n(374332)),
                j = r(n(66287)),
                C = r(n(320276)),
                _ = n(964823),
                k = n(558288),
                w = n(71867),
                M = n(973424),
                P = n(228277),
                O = n(192623),
                T = n(548360),
                I = n(667294),
                E = r(n(156720)),
                A = n(785893),
                N = {
                    orderFieldsContainer: {
                        gap: "sxkbojvh"
                    },
                    orderItemsContainer: {
                        flexShrink: "m0h2a7mj",
                        overflowY: "ag5g9lrv"
                    }
                },
                D = function(e, t, n) {
                    if (!e) return T.fbt._("Items must all have a price", null, {
                        hk: "1PvX8G"
                    }).toString();
                    var r = 1e3 * (0, l.orderDetailsTotalOrderMinimumValue)(),
                        a = 1e3 * (0, l.orderDetailsTotalMaxValue)();
                    return t <= r ? T.fbt._("Total must be more than {order_min_allowed_amount}", [T.fbt._param("order_min_allowed_amount", (0, s.formatAmount1000)(n, r))], {
                        hk: "1TzgFB"
                    }).toString() : t > a ? T.fbt._("Total cannot be more than {order_max_allowed_amount}", [T.fbt._param("order_max_allowed_amount", (0, s.formatAmount1000)(n, a))], {
                        hk: "2eOboQ"
                    }).toString() : null
                };

            function F(e) {
                var t = e.tax,
                    n = e.discount,
                    r = e.shipping,
                    a = e.currency,
                    i = e.subtotal,
                    l = e.additionalCharges,
                    o = e.canDisplayAdditionalCharges,
                    u = e.canChangeAdditionalCharges,
                    c = e.onAdditionalCharges,
                    f = (null == l ? void 0 : l.discountText) && l.discountType === x.PERCENTAGE_SYMBOL ? T.fbt._("{discount_percent}% off", [T.fbt._param("discount_percent", l.discountText)], {
                        hk: "4yt64k"
                    }) : null,
                    p = (null == l ? void 0 : l.taxText) && l.taxType === x.PERCENTAGE_SYMBOL ? ` (${l.taxText}%)` : null;
                return (0, A.jsxs)(m.FlexColumn, {
                    align: "stretch",
                    xstyle: [N.orderFieldsContainer, w.uiPadding.horiz16],
                    children: [(0, A.jsxs)(m.FlexRow, {
                        justify: "all",
                        testid: "order-details-subtotal-row",
                        children: [(0, A.jsx)(k.TextSpan, {
                            color: "secondary",
                            size: "16",
                            children: T.fbt._("Subtotal", null, {
                                hk: "3XD55n"
                            })
                        }), (0, A.jsx)(k.TextSpan, {
                            color: "secondary",
                            size: "16",
                            children: (0, s.formatAmount1000)(a, i)
                        })]
                    }), Boolean(o) && (0, A.jsxs)(A.Fragment, {
                        children: [null != n && (0, A.jsxs)(m.FlexRow, {
                            justify: "all",
                            testid: "order-details-discount-row",
                            children: [(0, A.jsxs)(k.TextSpan, {
                                color: "secondary",
                                size: "16",
                                children: [T.fbt._("Discount", null, {
                                    hk: "1ZzkHY"
                                }), " ", f]
                            }), (0, A.jsx)(k.TextSpan, {
                                color: "secondary",
                                size: "16",
                                children: (0, s.formatAmount1000)(a, -n)
                            })]
                        }), null != r && (0, A.jsxs)(m.FlexRow, {
                            justify: "all",
                            testid: "order-details-shipping-row",
                            children: [(0, A.jsx)(k.TextSpan, {
                                color: "secondary",
                                size: "16",
                                children: T.fbt._("Shipping", null, {
                                    hk: "1pvvuy"
                                })
                            }), (0, A.jsx)(k.TextSpan, {
                                color: "secondary",
                                size: "16",
                                children: (0, s.formatAmount1000)(a, r)
                            })]
                        }), null != t && (0, A.jsxs)(m.FlexRow, {
                            justify: "all",
                            testid: "order-details-tax-row",
                            children: [(0, A.jsxs)(k.TextSpan, {
                                color: "secondary",
                                size: "16",
                                children: [T.fbt._("Tax", null, {
                                    hk: "OjxE4"
                                }), p]
                            }), (0, A.jsx)(k.TextSpan, {
                                color: "secondary",
                                size: "16",
                                children: (0, s.formatAmount1000)(a, t)
                            })]
                        }), Boolean(u) && (0, A.jsx)(m.FlexRow, {
                            justify: "all",
                            align: "center",
                            children: (0, A.jsx)(d.default, {
                                onClick: function() {
                                    return null == c ? void 0 : c()
                                },
                                testid: "order-details-additional-charges-button",
                                className: (0, E.default)(S.default.clickableText, w.uiMargin.bottom0),
                                children: (0, A.jsx)("span", {
                                    children: T.fbt._("Add discount, shipping or tax", null, {
                                        hk: "3GTNs0"
                                    })
                                })
                            })
                        })]
                    })]
                })
            }
            var R = function() {
                return u.CTWADataSharingModel.getValue() === i.ENUM_FALSE_NOTSET_TRUE.true
            }
        },
        964823: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OrderApplyChangesButton = h, t.OrderDeclineButton = m, t.OrderTotalPrice = function(e) {
                var t = e.title,
                    n = e.xstyle,
                    r = e.visible,
                    a = e.disabled,
                    i = e.totalPrice,
                    o = e.confirmTitle,
                    u = e.testid,
                    s = e.onConfirm,
                    v = e.error,
                    g = void 0 === v ? null : v,
                    x = e.entryPoint,
                    b = void 0 === x ? null : x,
                    y = e.onDeclineOrder,
                    S = void 0 === y ? null : y;
                return r ? (0, f.jsxs)(l.default, {
                    xstyle: n,
                    children: [null == g ? (0, f.jsxs)("div", {
                        className: (0, c.default)(p.priceContainer),
                        "data-testid": "total-price-container",
                        children: [t, (0, f.jsx)("p", {
                            children: i
                        })]
                    }) : (0, f.jsx)(d.TextDiv, {
                        color: "danger",
                        size: "16",
                        xstyle: p.errorLabel,
                        children: g
                    }), (0, f.jsx)(h, {
                        title: o,
                        onClick: s,
                        disabled: a || Boolean(g),
                        testid: u
                    }), (0, f.jsx)(m, {
                        entryPoint: b,
                        onClick: S
                    })]
                }) : null
            };
            var a = r(n(544502)),
                i = r(n(746251)),
                l = r(n(39357)),
                o = n(7309),
                d = n(558288),
                u = n(71867),
                s = n(548360),
                c = r(n(156720)),
                f = n(785893),
                p = {
                    buttonWrapper: {
                        display: "p357zi0d",
                        flexDirection: "f8m0rgwh",
                        alignItems: "gndfcl4n"
                    },
                    priceContainer: {
                        display: "p357zi0d",
                        flexDirection: "sap93d0t",
                        justifyContent: "o4u7okr9",
                        fontWeight: "nbipi2bn"
                    },
                    errorLabel: {
                        textAlign: "qfejxiq4"
                    }
                };

            function h(e) {
                var t = e.title,
                    n = e.disabled,
                    r = e.onClick,
                    a = e.testid;
                return (0, f.jsx)("div", {
                    className: (0, c.default)(p.buttonWrapper, u.uiMargin.top16),
                    children: (0, f.jsx)(i.default, {
                        type: "primary",
                        disabled: n,
                        onClick: r,
                        testid: a,
                        children: t
                    })
                })
            }

            function m(e) {
                var t = e.entryPoint,
                    n = void 0 === t ? null : t,
                    r = e.onClick,
                    l = void 0 === r ? null : r;
                return n === a.default.FROM_CART && null != l && (0, o.isOrderExpansionEnabled)() ? (0, f.jsx)("div", {
                    className: (0, c.default)(p.buttonWrapper, u.uiMargin.top16),
                    children: (0, f.jsx)(i.default, {
                        type: "secondary",
                        onClick: l,
                        testid: "decline-cart-order-button",
                        children: s.fbt._("Decline cart", null, {
                            hk: "4dIEiB"
                        })
                    })
                }) : null
            }
        },
        270111: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onClick,
                    n = e.label,
                    r = e.PrefixIcon,
                    s = e.PostfixIcon,
                    c = e.xstyle,
                    f = "padded-svg" === e.iconTheme,
                    p = [u.iconSvg, f ? u.paddedSvg : i.uiPadding.all4],
                    h = {
                        width: f ? 20 : 16,
                        height: f ? 20 : 16
                    };
                return (0, d.jsxs)(l.default, {
                    xstyle: [u.container, i.uiPadding.vert8, i.uiPadding.horiz12, null != r && i.uiPadding.start36, null != s && i.uiPadding.end36, c],
                    onClick: t,
                    "aria-label": e["aria-label"],
                    children: [r && (0, d.jsx)(r, (0, a.default)({
                        xstyle: [u.icon, u.prefixIcon, i.uiMargin.start5],
                        iconXstyle: p
                    }, h)), (0, d.jsx)("div", {
                        className: (0, o.default)(u.content),
                        children: n
                    }), s && (0, d.jsx)(s, (0, a.default)({
                        xstyle: [u.icon, i.uiMargin.start5],
                        iconXstyle: p
                    }, h))]
                })
            };
            var a = r(n(81109)),
                i = n(71867),
                l = r(n(83938)),
                o = r(n(156720)),
                d = n(785893),
                u = {
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
        621806: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SearchInput = function(e) {
                var t = e.placeholder,
                    n = e.spellCheck,
                    r = e.onSearch,
                    C = e.onClick,
                    _ = e.searchInputA11yLabel,
                    k = e.initialValue,
                    w = e.focusOnMount,
                    M = e.colorScheme,
                    P = e.loading,
                    O = (0, h.useRef)(null),
                    T = (0, h.useState)(""),
                    I = (0, a.default)(T, 2),
                    E = I[0],
                    A = I[1],
                    N = (0, h.useState)(!1),
                    D = (0, a.default)(N, 2),
                    F = D[0],
                    R = D[1],
                    B = function(e) {
                        var t = e.text;
                        A(t), r(t)
                    },
                    z = (0, g.default)((function() {
                        var e;
                        (e = O.current) && (e.reset(), B({
                            text: "",
                            parsableText: "",
                            data: {}
                        }))
                    }));
                (0, v.default)((function() {
                    z()
                }));
                var q, L = function() {
                    (0, i.default)(O.current, "inputRef.current").focus(), R(!0)
                };
                switch (M) {
                    case "darker":
                        q = S;
                        break;
                    case "default":
                    default:
                        q = y
                }
                var W = null;
                if (E) {
                    var V = !0 === P ? (0, x.jsx)(u.Spinner, {
                        size: 20,
                        stroke: 6,
                        color: "highlight"
                    }) : (0, x.jsx)(f.XAltIcon, {});
                    W = (0, x.jsx)("button", {
                        "aria-label": p.fbt._("Cancel search", null, {
                            hk: "16SlG4"
                        }),
                        className: (0, m.default)([b.iconCloseSearch, q.iconCloseSearch]),
                        onClick: function() {
                            z(), L()
                        },
                        children: V
                    }, "icon-clear-search")
                }
                var H = (0, m.default)(s.uiMargin.vert10, s.uiMargin.horiz0, s.uiPadding.top0, s.uiPadding.end12, s.uiPadding.bottom8, s.uiPadding.start12, b.container);
                return (0, x.jsx)("div", {
                    className: H,
                    "data-testid": "chat-list-search-container",
                    children: (0, x.jsx)("div", {
                        className: (0, m.default)(b.inputContainer),
                        children: (0, x.jsxs)("div", {
                            className: (0, m.default)([b.inputWrapper, q.inputWrapper]),
                            children: [(0, x.jsx)("div", {
                                className: (0, m.default)([s.uiPadding.vert0, s.uiPadding.horiz8, b.iconSearch, q.iconSearch]),
                                children: (0, x.jsx)(d.SearchIcon, {})
                            }), (0, x.jsxs)(l.FlexRow, {
                                align: "center",
                                xstyle: b.innerInputWrapper,
                                children: [(0, x.jsx)(c.default, {
                                    transitionName: "pop",
                                    children: W
                                }), (0, x.jsx)("div", {
                                    "data-testid": "input-placeholder",
                                    className: (0, m.default)(b.inputPlaceholder, q.inputPlaceholder, !(!E && !F) && b.inputPlaceholderHidden),
                                    children: t
                                }), (0, x.jsx)(o.RichTextInput, {
                                    initialText: k,
                                    testid: "search-input",
                                    title: _,
                                    ref: O,
                                    spellCheck: n,
                                    lineWrap: !1,
                                    focusOnMount: w,
                                    onBlur: function(t) {
                                        R(!1), null != e.onBlur && e.onBlur(t)
                                    },
                                    onFocus: F ? j : function(t) {
                                        L(), null != e.onFocus && e.onFocus(t)
                                    },
                                    onChange: F ? B : j,
                                    onEnter: e.onEnter,
                                    onClick: C
                                })]
                            })]
                        })
                    })
                })
            };
            var a = r(n(963038)),
                i = r(n(347999)),
                l = n(208188),
                o = n(809480),
                d = n(636979),
                u = n(96293),
                s = n(71867),
                c = r(n(904847)),
                f = n(885667),
                p = n(548360),
                h = n(667294),
                m = r(n(156720)),
                v = r(n(177012)),
                g = r(n(206827)),
                x = n(785893),
                b = {
                    container: {
                        position: "g0rxnol2",
                        zIndex: "mb8var44",
                        boxSizing: "cm280p3y",
                        display: "p357zi0d",
                        flexGrow: "tvf2evcx",
                        flexShrink: "oq44ahr5",
                        flexBasis: "lb5m6g5c",
                        alignItems: "gndfcl4n"
                    },
                    inputContainer: {
                        position: "g0rxnol2",
                        boxSizing: "cm280p3y",
                        flexGrow: "ggj6brxn",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex"
                    },
                    iconSearch: {
                        zIndex: "mb8var44",
                        width: "i94gqilv",
                        height: "bmot90v7"
                    },
                    iconCloseSearch: {
                        position: "lhggkp7q",
                        zIndex: "mb8var44",
                        top: "qq0sjtgm",
                        end: "fz4q5utg"
                    },
                    inputWrapper: {
                        boxSizing: "cm280p3y",
                        display: "p357zi0d",
                        flexDirection: "sap93d0t",
                        alignItems: "gndfcl4n",
                        height: "j8e73hjv",
                        borderTopStartRadius: "bbr44loe",
                        borderTopEndRadius: "ooj5yc5b",
                        borderBottomEndRadius: "m8i16etx",
                        borderBottomStartRadius: "cw0ivh8j"
                    },
                    inputPlaceholder: {
                        position: "lhggkp7q",
                        zIndex: "mb8var44",
                        width: "ln8gz9je",
                        height: "jdwybkuq",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        fontSize: "f8jlpxt4",
                        lineHeight: "jgi8eev7",
                        textOverflow: "lhj4utae",
                        whiteSpace: "le5p0ye3",
                        pointerEvents: "m62443ks",
                        transitionProperty: "cr6d9hz6",
                        transitionDuration: "fvowycgw",
                        transitionTimingFunction: "lu2z1zfr"
                    },
                    inputPlaceholderHidden: {
                        opacity: "axi1ht8l"
                    },
                    innerInputWrapper: {
                        position: "g0rxnol2",
                        flexGrow: "ggj6brxn"
                    }
                },
                y = {
                    inputWrapper: {
                        backgroundColor: "s5iwbdjo"
                    },
                    inputPlaceholder: {
                        color: "t35qvd06"
                    },
                    iconSearch: {
                        color: "t35qvd06"
                    },
                    iconCloseSearch: {
                        color: "t35qvd06"
                    }
                },
                S = {
                    inputWrapper: {
                        backgroundColor: "dim55e0e"
                    },
                    inputPlaceholder: {
                        color: "t35qvd06"
                    },
                    iconSearch: {
                        color: "t35qvd06"
                    },
                    iconCloseSearch: {
                        color: "t35qvd06"
                    }
                },
                j = function() {}
        },
        830003: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useNavigatableList = function(e) {
                var t = (0, o.useState)(null),
                    n = (0, a.default)(t, 2),
                    r = n[0],
                    u = n[1],
                    s = (0, o.useMemo)((function() {
                        return new l.default(e)
                    }), [e]);
                return (0, o.useEffect)((function() {
                    u(s.getVal())
                }), [e, s]), (0, d.useListener)(s, "change", (function(e) {
                    var t = e.current;
                    u(t)
                })), {
                    activeItem: r,
                    listSelection: s,
                    NavigatableList: i.NavigatableList
                }
            };
            var a = r(n(963038)),
                i = n(817323),
                l = r(n(964851)),
                o = n(667294),
                d = n(494092)
        },
        817323: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NavigatableList = function(e) {
                var t = e.children,
                    n = e.items,
                    r = e.onSelect,
                    s = e.forceSelection,
                    c = void 0 !== s && s,
                    f = e.rotate,
                    p = void 0 !== f && f,
                    h = e.handlers,
                    m = (0, i.default)(e, u);
                (0, o.useEffect)((function() {
                    !0 === c && n.index < 0 && n.setFirst(!1)
                }), [n, c]);
                var v = h || {},
                    g = v.down,
                    x = v.up,
                    b = v.enter,
                    y = (0, a.default)((0, a.default)({}, h), {}, {
                        down: function(e) {
                            !1 !== (null == g ? void 0 : g(e)) && (p && n.index === n.list.length - 1 ? n.setFirst(!1) : n.setNext(!1))
                        },
                        up: function(e) {
                            if (!1 !== (null == x ? void 0 : x(e))) {
                                if (0 === n.index) {
                                    if (p) return void n.setLast(!1);
                                    if (c) return
                                }
                                n.setPrev(!1), e.preventDefault()
                            }
                        },
                        enter: function(e) {
                            if (!1 !== (null == b ? void 0 : b(e))) {
                                var t = n.getVal();
                                null != t && null != r && !0 !== (null == t ? void 0 : t.disabled) && r(t)
                            }
                        }
                    });
                return (0, d.jsx)(l.HotKeys, (0, a.default)((0, a.default)({
                    handlers: y
                }, m), {}, {
                    children: t
                }))
            };
            var a = r(n(81109)),
                i = r(n(506479)),
                l = n(704250),
                o = n(667294),
                d = n(785893),
                u = ["children", "items", "onSelect", "forceSelection", "rotate", "handlers"]
        },
        505921: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AddItemIcon = function(e) {
                var t, n, r = e.iconXstyle,
                    s = e.height,
                    c = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, u);
                if (f) {
                    var h = f.x,
                        m = void 0 === h ? 0 : h,
                        v = f.y,
                        g = void 0 === v ? 0 : v,
                        x = f.width,
                        b = void 0 === x ? 0 : x,
                        y = f.height;
                    n = [m, g, b, void 0 === y ? 0 : y].join(" ")
                }
                var S = 20,
                    j = 20;
                null == s && null == c || (S = s, j = c);
                return (0, d.jsx)(l.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "add-item"
                }, p), {}, {
                    children: (0, d.jsx)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 20 20",
                        height: S,
                        width: j,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, o.default)(r),
                        version: "1.1",
                        x: "0px",
                        y: "0px",
                        enableBackground: "new 0 0 24 24",
                        xmlSpace: "preserve",
                        children: (0, d.jsx)("path", {
                            fill: "currentColor",
                            d: "M10 5C9.45 5 9 5.45 9 6V9H6C5.45 9 5 9.45 5 10C5 10.55 5.45 11 6 11H9V14C9     14.55 9.45 15 10 15C10.55 15 11 14.55 11 14V11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14     9H11V6C11 5.45 10.55 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52     20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18     10C18 14.41 14.41 18 10 18Z"
                        })
                    })
                }))
            };
            var a = r(n(81109)),
                i = r(n(506479)),
                l = n(401304),
                o = r(n(156720)),
                d = n(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        527753: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LocalShippingIcon = function(e) {
                var t, n, r = e.iconXstyle,
                    s = e.height,
                    c = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, u);
                if (f) {
                    var h = f.x,
                        m = void 0 === h ? 0 : h,
                        v = f.y,
                        g = void 0 === v ? 0 : v,
                        x = f.width,
                        b = void 0 === x ? 0 : x,
                        y = f.height;
                    n = [m, g, b, void 0 === y ? 0 : y].join(" ")
                }
                var S = 8,
                    j = 12;
                null == s && null == c || (S = s, j = c);
                return (0, d.jsx)(l.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "local-shipping"
                }, p), {}, {
                    children: (0, d.jsx)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 12 8",
                        height: S,
                        width: j,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, o.default)(r),
                        fill: "none",
                        children: (0, d.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.5 2H9.75C9.905 2 10.055 2.075 10.15 2.2L11.3 3.735C11.43 3.91 11.5 4.12 11.5 4.335V6C11.5 6.275 11.275 6.5 11 6.5H10.5C10.5 7.33 9.83 8 9 8C8.17 8 7.5 7.33 7.5 6.5H4.5C4.5 7.33 3.83 8 3 8C2.17 8 1.5 7.33 1.5 6.5C0.95 6.5 0.5 6.05 0.5 5.5V1C0.5 0.45 0.95 0 1.5 0H7.5C8.05 0 8.5 0.45 8.5 1V2ZM2.5 6.5C2.5 6.775 2.725 7 3 7C3.275 7 3.5 6.775 3.5 6.5C3.5 6.225 3.275 6 3 6C2.725 6 2.5 6.225 2.5 6.5ZM9.75 2.75L10.73 4H8.5V2.75H9.75ZM8.5 6.5C8.5 6.775 8.725 7 9 7C9.275 7 9.5 6.775 9.5 6.5C9.5 6.225 9.275 6 9 6C8.725 6 8.5 6.225 8.5 6.5Z",
                            fill: "#667781"
                        })
                    })
                }))
            };
            var a = r(n(81109)),
                i = r(n(506479)),
                l = n(401304),
                o = r(n(156720)),
                d = n(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        338591: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StatusClockIcon = function(e) {
                var t, n, r = e.iconXstyle,
                    s = e.height,
                    c = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, u);
                if (f) {
                    var h = f.x,
                        m = void 0 === h ? 0 : h,
                        v = f.y,
                        g = void 0 === v ? 0 : v,
                        x = f.width,
                        b = void 0 === x ? 0 : x,
                        y = f.height;
                    n = [m, g, b, void 0 === y ? 0 : y].join(" ")
                }
                var S = 20,
                    j = 20;
                null == s && null == c || (S = s, j = c);
                return (0, d.jsx)(l.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "status-clock"
                }, p), {}, {
                    children: (0, d.jsx)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 20 20",
                        height: S,
                        width: j,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, o.default)(r),
                        fill: "none",
                        children: (0, d.jsx)("path", {
                            d: "M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM9.78 5H9.72C9.32 5 9 5.32 9 5.72V10.44C9 10.79 9.18 11.12 9.49 11.3L13.64 13.79C13.98 13.99 14.42 13.89 14.62 13.55C14.83 13.21 14.72 12.76 14.37 12.56L10.5 10.26V5.72C10.5 5.32 10.18 5 9.78 5Z",
                            fill: "currentColor"
                        })
                    })
                }))
            };
            var a = r(n(81109)),
                i = r(n(506479)),
                l = n(401304),
                o = r(n(156720)),
                d = n(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        396418: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.filterPaginate = function(e, t, n) {
                if (null == n) {
                    return e.filter(t)
                }
                for (var r = [], a = n.page, i = void 0 === a ? 0 : a, l = n.pageLength, o = void 0 === l ? e.length : l, d = 0; d < e.length && r.length !== (i + 1) * o; d++) {
                    var u = e[d];
                    t(u) && r.push(u)
                }
                return r.slice(i * o)
            }, t.normalizeString = function(e) {
                return a.default.accentFold(e.trim().toLowerCase())
            };
            var a = r(n(758927))
        }
    }
]);