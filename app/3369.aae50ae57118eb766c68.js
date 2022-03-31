/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [3369], {
        9367: (e, t, n) => {
            "use strict";
            var r = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AdditionalChargesFormDrawer = function(e) {
                var t = e.currency,
                    n = e.subtotal,
                    r = e.additionalCharges,
                    g = e.onBack,
                    x = e.onApply,
                    _ = (0, l.useState)((null == r ? void 0 : r.discountText) || ""),
                    C = (0, u.default)(_, 2),
                    S = C[0],
                    T = C[1],
                    O = (0, l.useState)((null == r ? void 0 : r.taxText) || ""),
                    M = (0, u.default)(O, 2),
                    A = M[0],
                    j = M[1],
                    I = (0, l.useState)((null == r ? void 0 : r.shippingText) || ""),
                    P = (0, u.default)(I, 2),
                    k = P[0],
                    E = P[1],
                    D = (0, l.useState)((null == r ? void 0 : r.discountType) || h.PERCENTAGE_SYMBOL),
                    R = (0, u.default)(D, 2),
                    w = R[0],
                    F = R[1],
                    N = (0, l.useState)((null == r ? void 0 : r.taxType) || h.PERCENTAGE_SYMBOL),
                    L = (0, u.default)(N, 2),
                    U = L[0],
                    q = L[1],
                    B = (0, l.useState)(!1),
                    G = (0, u.default)(B, 2),
                    H = G[0],
                    W = G[1],
                    Q = (0, l.useState)(!1),
                    V = (0, u.default)(Q, 2),
                    Y = V[0],
                    K = V[1],
                    z = (0, l.useMemo)((function() {
                        return (0, p.additionalChargeErrorHandler)({
                            currency: t,
                            value: k
                        })
                    }), [t, k]),
                    X = [H, Y, z].some((function(e) {
                        return e
                    }));
                return (0, v.jsxs)(c.default, {
                    children: [(0, v.jsx)(s.DrawerHeader, {
                        title: o.fbt._("Additional Charges", null, {
                            hk: "3hDtAE"
                        }),
                        type: s.DRAWER_HEADER_TYPE.SMALL,
                        onBack: g,
                        focusBackOrCancel: !0
                    }), (0, v.jsxs)(f.default, {
                        className: (0, i.default)(a.uiPadding.all16),
                        children: [(0, v.jsx)(m.AdditionalChargesTextInput, {
                            text: S,
                            a8nText: "additional-charges-discount-input",
                            label: o.fbt._("Discount", null, {
                                hk: "3dW1e0"
                            }),
                            symbol: w,
                            currency: t,
                            priceValue: n,
                            setText: T,
                            setError: W,
                            setSymbol: F
                        }), (0, v.jsx)(m.AdditionalChargesTextInput, {
                            text: A,
                            a8nText: "additional-charges-tax-input",
                            label: o.fbt._("Tax", null, {
                                hk: "2Ghypp"
                            }),
                            symbol: U,
                            currency: t,
                            priceValue: n,
                            setText: j,
                            setError: K,
                            setSymbol: q
                        }), (0, v.jsx)(b.TextInput, {
                            value: k,
                            a8n: "additional-charges-shipping-input",
                            placeholder: o.fbt._("Shipping ({currency_symbol})", [o.fbt._param("currency_symbol", (0, d.formatAmount1000ToParts)(t, 0).symbol)], {
                                hk: "1z5IVc"
                            }),
                            onChange: E,
                            theme: "small",
                            maxLength: 10,
                            customStyleThemes: ["desaturated"],
                            error: z
                        }), (0, v.jsx)(y.OrderApplyChangesButton, {
                            disabled: X,
                            a8nText: "apply-additional-costs-button",
                            title: o.fbt._("Apply", null, {
                                hk: "1af9Ka"
                            }),
                            onClick: function() {
                                return x({
                                    discountText: S,
                                    taxText: A,
                                    shippingText: k,
                                    discountType: w,
                                    taxType: U
                                })
                            }
                        })]
                    })]
                })
            };
            var u = r(n(63038)),
                a = n(71091),
                o = n(48360),
                l = n(67294),
                i = r(n(56720)),
                d = n(86018),
                c = r(n(53187)),
                s = n(19288),
                f = r(n(46821)),
                m = n(48166),
                p = n(99030),
                h = n(89846),
                y = n(68520),
                b = n(68544),
                v = n(85893)
        },
        48166: (e, t, n) => {
            "use strict";
            var r = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AdditionalChargesTextInput = function(e) {
                var t = e.text,
                    n = e.label,
                    r = e.symbol,
                    p = e.a8nText,
                    h = e.currency,
                    y = e.priceValue,
                    b = e.setText,
                    v = e.setError,
                    g = e.setSymbol,
                    x = (0, a.useMemo)((function() {
                        var e = (0, i.additionalChargeErrorHandler)({
                            label: n,
                            currency: h,
                            fieldType: r,
                            maxFlatValue: y / d.DEFAULT_OFFSET,
                            enablePercentValueCheck: !0,
                            value: t
                        });
                        return v(Boolean(e)), e
                    }), [t, n, r, h, v, y]);
                return (0, s.jsxs)("div", {
                    className: (0, o.default)(f),
                    children: [(0, s.jsx)(c.TextInput, {
                        value: t,
                        a8n: p,
                        placeholder: u.fbt._("{input_label} ({currency_or_percentage})", [u.fbt._param("input_label", n), u.fbt._param("currency_or_percentage", r)], {
                            hk: "1j7m80"
                        }),
                        onChange: function(e) {
                            return b(e)
                        },
                        theme: "small",
                        maxLength: 10,
                        customStyleThemes: ["desaturated"],
                        error: x
                    }), (0, s.jsx)("div", {
                        className: (0, o.default)(m),
                        children: (0, s.jsx)(l.OrderDetailAmountTypeSelector, {
                            currency: h,
                            value: r,
                            onChange: function(e) {
                                var t = e.value;
                                return g(t)
                            }
                        })
                    })]
                })
            };
            var u = n(48360),
                a = n(67294),
                o = r(n(56720)),
                l = n(25335),
                i = n(99030),
                d = n(89846),
                c = n(68544),
                s = n(85893),
                f = {
                    position: "g0rxnol2"
                },
                m = {
                    position: "lhggkp7q",
                    end: "ebjesfe0",
                    zIndex: "mb8var44",
                    top: "agjvi7sf"
                }
        },
        40704: (e, t, n) => {
            "use strict";
            var r = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CatalogFormDrawer = function(e) {
                var t = e.currency,
                    n = e.orderProducts,
                    r = e.onBack,
                    h = e.onAddProdutcs,
                    j = e.onAddCustomItem,
                    w = (0, i.useState)(0),
                    F = (0, u.default)(w, 2),
                    N = F[0],
                    L = F[1],
                    U = (0, i.useState)(!0),
                    q = (0, u.default)(U, 2),
                    B = q[0],
                    G = q[1],
                    H = (0, i.useState)(!1),
                    W = (0, u.default)(H, 2),
                    Q = W[0],
                    V = W[1],
                    Y = (0, c.default)(),
                    K = (0, s.default)((function() {
                        return new C.default
                    })),
                    z = function() {
                        var e = f.CatalogCollection.get((0, S.getMaybeMeUser)());
                        return e ? e.productCollection.getProductModels().map((function(e) {
                            return {
                                itemKey: e.id.toString(),
                                product: e
                            }
                        })) : []
                    },
                    X = (0, s.default)((function() {
                        return new a.default([], (function(e) {
                            return e.id.toString()
                        }))
                    })).current,
                    Z = function(e) {
                        var t = X.isSelected(e);
                        X.setVal(e, t ? 0 : 1), L(N + (t ? -1 : 1)), Q || V(!0), Y()
                    },
                    J = function(e, t) {
                        X.setVal(e, t), Q || V(!0), Y()
                    };
                (0, i.useEffect)((function() {
                    var e = 0;
                    z().forEach((function(t) {
                        var r = n.find((function(e) {
                            return e.id === t.product.id
                        }));
                        void 0 !== r && (X.setVal(t.product, Number(r.quantity)), e += 1)
                    })), Y(), L(e), G(0 === e)
                }), [n, X, Y]);
                var $ = X.getSelected().reduce((function(e, t) {
                    return e + (t.priceAmount1000 || 0) * Number(X.getVal(t))
                }), 0);
                return (0, k.jsxs)(y.default, {
                    children: [(0, k.jsx)(v.DrawerHeader, {
                        title: l.fbt._("Add items", null, {
                            hk: "2nsVXo"
                        }),
                        type: v.DRAWER_HEADER_TYPE.SMALL,
                        onBack: (B ? N : Q) ? function() {
                            p.Cmd.openModal((0, k.jsx)(A.ConfirmDiscardModal, {
                                onOK: r
                            }))
                        } : r,
                        focusBackOrCancel: !0
                    }), (0, k.jsxs)(b.default, {
                        children: [(0, k.jsx)(g.default, {
                            children: (0, k.jsxs)(_.default, {
                                flatListControllers: [K.current],
                                children: [(0, T.orderDetailsCustomItemEnabled)() && (0, k.jsxs)(k.Fragment, {
                                    children: [(0, k.jsx)(O.AddOrderItem, {
                                        title: l.fbt._("Add custom item", null, {
                                            hk: "DCIZF"
                                        }),
                                        onClick: j
                                    }), (0, k.jsx)("hr", {
                                        className: (0, d.default)(E, o.uiMargin.top0)
                                    })]
                                }), (0, k.jsx)("p", {
                                    className: (0, d.default)(D, o.uiMargin.start15),
                                    children: l.fbt._("Catalog items", null, {
                                        hk: "2rgdJA"
                                    })
                                }), (0, k.jsx)(x.FlatList, {
                                    flatListController: K.current,
                                    direction: "vertical",
                                    forceConsistentRenderCount: !1,
                                    data: z(),
                                    renderItem: function(e) {
                                        var t = e.product;
                                        return (0, k.jsx)(M.CatalogFormProduct, {
                                            product: t,
                                            selections: X,
                                            onProductClick: Z,
                                            onProductQuantityChange: J
                                        })
                                    },
                                    defaultItemHeight: m.PRODUCT_LIST_ITEM_HEIGHT
                                })]
                            })
                        }), (0, k.jsx)(P.OrderTotalPrice, {
                            xstyle: [o.uiPadding.all16, o.uiMargin.top10],
                            visible: !B || Q,
                            disabled: B ? 0 === N : !Q,
                            totalPrice: R($, t),
                            a8nButtonText: "save-products-button",
                            onConfirm: function() {
                                var e = X.getSelected().map((function(e) {
                                    var t;
                                    return new I.default({
                                        id: e.id,
                                        name: e.name,
                                        price: e.priceAmount1000,
                                        thumbnailUrl: null === (t = e.getPreviewImage()) || void 0 === t ? void 0 : t.mediaUrl,
                                        quantity: Number(X.getVal(e)),
                                        isCustomItem: !1,
                                        isQuantitySet: !0
                                    })
                                }));
                                h(e)
                            },
                            title: l.fbt._("Estimated total", null, {
                                hk: "1mIWnC"
                            }),
                            confirmTitle: B ? l.fbt._("Add to Order", null, {
                                hk: "3paxqQ"
                            }) : l.fbt._("Update Order", null, {
                                hk: "44rGm7"
                            })
                        })]
                    })]
                })
            };
            var u = r(n(63038)),
                a = r(n(64709)),
                o = n(71091),
                l = n(48360),
                i = n(67294),
                d = r(n(56720)),
                c = r(n(45764)),
                s = r(n(62905)),
                f = n(72743),
                m = n(66419),
                p = n(65901),
                h = n(86018),
                y = r(n(53187)),
                b = r(n(18345)),
                v = n(19288),
                g = r(n(46821)),
                x = n(73568),
                _ = r(n(23803)),
                C = r(n(92546)),
                S = n(1577),
                T = n(2629),
                O = n(32125),
                M = n(27062),
                A = n(19424),
                j = n(89846),
                I = r(n(40972)),
                P = n(68520),
                k = n(85893),
                E = (n(76672).Mirrored(["CATALOG_PRODUCTS_FORM", "CUSTOM_ITEM_FORM", "ORDER_SUMMARY", "ADDITIONAL_CHARGES_FORM"]), {
                    borderTop: "gq6acybq",
                    borderEnd: "toel9vei",
                    borderBottom: "eyd9s9cm",
                    borderStart: "ap1jplnr"
                }),
                D = {
                    fontWeight: "m1e7cby3",
                    lineHeight: "a4ywakfo",
                    color: "q70jrbp7"
                };

            function R(e, t) {
                return (0, h.formatAmount)(t, e / j.DEFAULT_OFFSET)
            }
        },
        27062: (e, t, n) => {
            "use strict";
            var r = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CatalogFormProduct = function(e) {
                var t = e.product,
                    n = e.selections,
                    r = e.onProductClick,
                    i = e.onProductQuantityChange;
                return (0, l.jsx)(a.default, {
                    model: t,
                    selections: n,
                    children: (0, l.jsx)(o.default, {
                        product: t,
                        onClick: function() {
                            return r(t)
                        },
                        checkbox: !0,
                        detail: n.isSelected(t) && (0, l.jsx)("div", {
                            children: (0, l.jsx)(u.default, {
                                quantity: Number(n.getVal(t)),
                                onChange: function(e) {
                                    return i(t, e)
                                },
                                a8nText: "product-quantity-selector"
                            })
                        })
                    })
                }, t.id.toString())
            };
            var u = r(n(31527)),
                a = r(n(17130)),
                o = r(n(99262)),
                l = n(85893)
        },
        19424: (e, t, n) => {
            "use strict";
            var r = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ConfirmDiscardModal = function(e) {
                var t = e.onOK;
                return (0, i.jsx)(o.default, {
                    title: u.fbt._("Discard changes?", null, {
                        hk: "2aroAx"
                    }),
                    onOK: function() {
                        a.Cmd.closeModal(), t()
                    },
                    okText: u.fbt._("Discard", null, {
                        hk: "2rIxjp"
                    }),
                    onCancel: function() {
                        return a.Cmd.closeModal()
                    },
                    children: (0, i.jsx)(l.TextDiv, {
                        theme: "muted",
                        children: u.fbt._("If you close this, your draft will be discarded.", null, {
                            hk: "2Sbnur"
                        })
                    })
                })
            };
            var u = n(48360),
                a = n(65901),
                o = r(n(86777)),
                l = n(22552),
                i = n(85893)
        },
        67596: (e, t, n) => {
            "use strict";
            var r = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CustomItemFormDrawer = function(e) {
                var t = e.currency,
                    n = e.customItem,
                    r = e.onBack,
                    _ = e.onSaveCustomItem,
                    C = (0, l.useState)(null == n ? void 0 : n.name),
                    S = (0, u.default)(C, 2),
                    T = S[0],
                    O = S[1],
                    M = (0, l.useState)(Number.isInteger(null == n ? void 0 : n.price) ? String(Number(null == n ? void 0 : n.price) / 1e3) : null),
                    A = (0, u.default)(M, 2),
                    j = A[0],
                    I = A[1],
                    P = (0, l.useState)(null == n ? void 0 : n.price),
                    k = (0, u.default)(P, 2),
                    E = k[0],
                    D = k[1],
                    R = (0, l.useState)((null == n ? void 0 : n.isQuantitySet) ? n.quantity : null),
                    w = (0, u.default)(R, 2),
                    F = w[0],
                    N = w[1],
                    L = (0, l.useState)((null == n ? void 0 : n.isQuantitySet) ? String(n.quantity) : null),
                    U = (0, u.default)(L, 2),
                    q = U[0],
                    B = U[1],
                    G = (0, l.useMemo)((function() {
                        return function(e) {
                            if (null == e) return "";
                            var t = String(o.fbt._("Add a title", null, {
                                hk: "1wJ7fh"
                            }));
                            return "" === e.trim() ? t : ""
                        }(T)
                    }), [T]),
                    H = (0, l.useMemo)((function() {
                        return function(e, t) {
                            if (null == t) return "";
                            var n = String(o.fbt._("Enter a valid price", null, {
                                hk: "KWrAE"
                            }));
                            return "" !== t.trim() && (0, c.validatePriceString)(e, t, b.MIN_PRICE, b.MAX_PRICE) ? "" : n
                        }(t, j)
                    }), [t, j]),
                    W = (0, l.useMemo)((function() {
                        return function(e) {
                            if (null == e) return "";
                            var t = String(o.fbt._("Enter a valid quantity", null, {
                                hk: "2KDyC5"
                            }));
                            return x(Number(e)) ? "" : t
                        }(q)
                    }), [q]),
                    Q = (V = n, Y = T, K = E, z = q, X = (null == V ? void 0 : V.isQuantitySet) ? Number(z) !== V.quantity : null != z, (null == V ? void 0 : V.name) !== Y || (null == V ? void 0 : V.price) !== K || X);
                var V, Y, K, z, X;
                return (0, g.jsxs)(s.default, {
                    children: [(0, g.jsx)(m.DrawerHeader, {
                        title: n ? o.fbt._("Update items", null, {
                            hk: "8H9jW"
                        }) : o.fbt._("Add items", null, {
                            hk: "2SjafD"
                        }),
                        type: m.DRAWER_HEADER_TYPE.SMALL,
                        onBack: Q ? function() {
                            d.Cmd.openModal((0, g.jsx)(h.ConfirmDiscardModal, {
                                onOK: r
                            }))
                        } : r,
                        focusBackOrCancel: !0
                    }), (0, g.jsx)(f.default, {
                        children: (0, g.jsxs)(p.default, {
                            className: (0, i.default)(a.uiPadding.all16),
                            children: [(0, g.jsx)(v.TextInput, {
                                a8n: "custom-item-edit-name-input",
                                value: T,
                                placeholder: o.fbt._("Item name", null, {
                                    hk: "1LDktG"
                                }),
                                onChange: function(e) {
                                    O(e)
                                },
                                theme: "small",
                                customStyleThemes: ["desaturated"],
                                maxLength: 150,
                                error: G
                            }), (0, g.jsx)(v.TextInput, {
                                a8n: "custom-item-edit-price-input",
                                value: j,
                                placeholder: o.fbt._("Price {symbol}", [o.fbt._param("symbol", (0, c.formatAmount1000ToParts)(t, 0).symbol)], {
                                    hk: "3yCPZW"
                                }),
                                onChange: function(e) {
                                    var n = (0, c.valueFromString)(t, e);
                                    D(n), I(e)
                                },
                                theme: "small",
                                maxLength: 30,
                                customStyleThemes: ["desaturated"],
                                error: H
                            }), (0, g.jsx)(v.TextInput, {
                                a8n: "custom-item-edit-quantity-input",
                                value: q,
                                placeholder: o.fbt._("Quantity (Optional)", null, {
                                    hk: "30uF5W"
                                }),
                                onChange: function(e) {
                                    var t = "" === e ? null : Number(e);
                                    x(t) || (t = null), N(t), B("" === e ? null : e)
                                },
                                theme: "small",
                                maxLength: 30,
                                customStyleThemes: ["desaturated"],
                                error: W
                            }), (0, g.jsx)(y.OrderApplyChangesButton, {
                                title: n ? o.fbt._("Update Order", null, {
                                    hk: "4ckyCu"
                                }) : o.fbt._("Add to Order", null, {
                                    hk: "4iSOkO"
                                }),
                                disabled: null == T || null == j || !(!n || Q) || [G, H, W].some((function(e) {
                                    return e
                                })),
                                onClick: function() {
                                    var e = {
                                        name: T,
                                        priceAmount1000: +E,
                                        quantity: F,
                                        isQuantitySet: Number.isInteger(F)
                                    };
                                    _(e)
                                },
                                a8nText: "save-custom-item-button"
                            })]
                        })
                    })]
                })
            };
            var u = r(n(63038)),
                a = n(71091),
                o = n(48360),
                l = n(67294),
                i = r(n(56720)),
                d = n(65901),
                c = n(86018),
                s = r(n(53187)),
                f = r(n(18345)),
                m = n(19288),
                p = r(n(46821)),
                h = n(19424),
                y = n(68520),
                b = n(3544),
                v = n(68544),
                g = n(85893);

            function x(e) {
                return Number.isInteger(e) && +e > 0
            }
        },
        25335: (e, t, n) => {
            "use strict";
            var r = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OrderDetailAmountTypeSelector = function(e) {
                var t = e.value,
                    n = e.onChange,
                    r = e.currency,
                    c = o.formatLocalSymbol(r),
                    s = u.fbt._("Select amount type", null, {
                        hk: "1xddkG"
                    }),
                    f = [{
                        id: "percentage",
                        label: u.fbt._("by Percentage ({percentage-symbol})", [u.fbt._param("percentage-symbol", l.PERCENTAGE_SYMBOL)], {
                            hk: "3fQwM3"
                        }),
                        value: l.PERCENTAGE_SYMBOL
                    }, {
                        id: "flat-amount",
                        label: u.fbt._("by Flat amount ({currency-symbol})", [u.fbt._param("currency-symbol", c)], {
                            hk: "duPhj"
                        }),
                        value: c
                    }],
                    m = (0, a.useMemo)((function() {
                        return f.findIndex((function(e) {
                            return e.value === t
                        }))
                    }), []);
                return (0, d.jsx)(i.default, {
                    "aria-label": s,
                    options: f,
                    defaultIndex: m,
                    onChange: n
                })
            };
            var u = n(48360),
                a = n(67294),
                o = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        u = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = u ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, n && n.set(e, r);
                    return r
                }(n(86018)),
                l = n(89846),
                i = r(n(658)),
                d = n(85893);

            function c(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (c = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        658: (e, t, n) => {
            "use strict";
            var r = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.defaultIndex,
                    n = void 0 === t ? 0 : t,
                    r = e.options,
                    p = e.onChange,
                    h = e["aria-label"],
                    y = (0, a.useRef)(null),
                    b = (0, a.useState)(!1),
                    v = (0, u.default)(b, 2),
                    g = v[0],
                    x = v[1],
                    _ = (0, a.useState)(n),
                    C = (0, u.default)(_, 2),
                    S = C[0],
                    T = C[1],
                    O = r.map((function(e, t) {
                        var n = e.id,
                            r = e.label;
                        return (0, f.jsx)(i.DropdownItem, {
                            a8n: `mi-${n}`,
                            action: function() {
                                p(e), T(t)
                            },
                            children: (0, f.jsx)("div", {
                                className: (0, o.default)(m),
                                role: "button",
                                "aria-label": r,
                                children: t === S ? (0, f.jsx)(d.TextSpan, {
                                    weight: "bold",
                                    children: r
                                }) : r
                            })
                        }, n)
                    }));
                return (0, f.jsxs)("div", {
                    ref: y,
                    children: [(0, f.jsx)(l.default, {
                        "aria-label": h,
                        postfixIcon: "down",
                        label: r[S].value,
                        onClick: function() {
                            return x((function(e) {
                                return !e
                            }))
                        }
                    }), g && y.current && (0, f.jsx)(c.UIE, {
                        displayName: "ValuePicker",
                        escapable: !0,
                        popable: !0,
                        requestDismiss: function() {
                            return x(!1)
                        },
                        children: (0, f.jsx)(s.default, {
                            contextMenu: {
                                menu: O,
                                anchor: y.current
                            }
                        })
                    })]
                })
            };
            var u = r(n(63038)),
                a = n(67294),
                o = r(n(56720)),
                l = r(n(8352)),
                i = n(94680),
                d = n(22552),
                c = n(16835),
                s = r(n(93820)),
                f = n(85893),
                m = {
                    boxSizing: "cm280p3y",
                    color: "tviruh8d",
                    cursor: "ajgl1lbb",
                    fontSize: "f8jlpxt4",
                    height: "lniyxyh2",
                    lineHeight: "gz7w46tb",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    paddingStart: "sta02ykp",
                    paddingEnd: "pnfw7ual",
                    paddingTop: "lqdozo90",
                    textOverflow: "lhj4utae",
                    whiteSpace: "le5p0ye3",
                    position: "g0rxnol2"
                }
        },
        28821: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getErrorMsgFromProducts = l, t.notifyIfAnyProductMissesPrice = void 0;
            var r = n(48360),
                u = n(65901),
                a = n(92428),
                o = n(85893);

            function l(e) {
                var t = e.length;
                return 0 === t ? "" : 1 === t ? r.fbt._("Enter a price for {first-product-name}", [r.fbt._param("first-product-name", e[0])], {
                    hk: "4ypZH8"
                }) : 2 === t ? r.fbt._("Enter prices for {first-product-name} and {second-product-name}", [r.fbt._param("first-product-name", e[0]), r.fbt._param("second-product-name", e[1])], {
                    hk: "3o3aq3"
                }) : r.fbt._({
                    "*": "Enter prices for {first-product-name}, {second-product-name} and {other-items} other items",
                    _1: "Enter prices for {first-product-name}, {second-product-name} and 1 other item"
                }, [r.fbt._plural(t - 2, "other-items"), r.fbt._param("first-product-name", e[0]), r.fbt._param("second-product-name", e[1])], {
                    hk: "2AB1Gl"
                })
            }
            t.notifyIfAnyProductMissesPrice = function(e, t) {
                var n = l(e.reduce((function(e, n) {
                    var r, u = null !== (r = n.price) && void 0 !== r ? r : t[n.id];
                    return Number.isInteger(u) || e.push(n.name || ""), e
                }), []));
                n && u.Cmd.openToast((0, o.jsx)(a.Toast, {
                    duration: 1e4,
                    id: (0, a.genId)(),
                    msg: n,
                    action: {
                        actionText: r.fbt._("OKAY", null, {
                            hk: "24jI97"
                        }),
                        dismiss: !0,
                        theme: "success"
                    }
                }))
            }
        },
        60509: (e, t, n) => {
            "use strict";
            var r = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.order,
                    n = e.chat,
                    r = (0, d.useState)(E.ORDER_SUMMARY),
                    p = (0, o.default)(r, 2),
                    h = p[0],
                    k = p[1],
                    w = (0, d.useState)(null),
                    F = (0, o.default)(w, 2),
                    N = F[0],
                    L = F[1],
                    U = (0, d.useState)(!1),
                    q = (0, o.default)(U, 2),
                    B = q[0],
                    G = q[1],
                    H = (0, d.useState)((function() {
                        return function(e) {
                            if (!e) return [];
                            var t = {
                                    isCustomItem: !1,
                                    isQuantitySet: !0
                                },
                                n = e.products.map((function(e) {
                                    return new M.default((0, l.default)((0, l.default)({}, t), e))
                                }));
                            return (0, O.notifyIfAnyProductMissesPrice)(n, {}), n
                        }(t)
                    })),
                    W = (0, o.default)(H, 2),
                    Q = W[0],
                    V = W[1],
                    Y = (0, d.useState)({}),
                    K = (0, o.default)(Y, 2),
                    z = K[0],
                    X = K[1],
                    Z = (0, d.useState)(null),
                    J = (0, o.default)(Z, 2),
                    $ = J[0],
                    ee = J[1],
                    te = function(e, t) {
                        X((function(n) {
                            return (0, l.default)((0, l.default)({}, n), {}, (0, a.default)({}, t, e))
                        }))
                    },
                    ne = (0, d.useMemo)((function() {
                        return Q.reduce((function(e, t) {
                            var n, r;
                            return e + (null !== (n = null !== (r = t.price) && void 0 !== r ? r : z[t.id]) && void 0 !== n ? n : 0) * t.quantity
                        }), 0)
                    }), [Q, z]),
                    re = (0, T.calculateFlatAmounts)({
                        orderSubtotal: ne / T.DEFAULT_OFFSET,
                        discountType: (null == $ ? void 0 : $.discountType) || "",
                        discountText: (null == $ ? void 0 : $.discountText) || "",
                        taxType: (null == $ ? void 0 : $.taxType) || "",
                        taxText: (null == $ ? void 0 : $.taxText) || "",
                        shippingText: (null == $ ? void 0 : $.shippingText) || ""
                    }),
                    ue = function() {
                        var e = null != t ? t : _.OrderCollection.addOrder();
                        e.products = Q.map((function(e) {
                            var t;
                            return e.price = null !== (t = e.price) && void 0 !== t ? t : z[e.id], e.currency = R, e
                        })), e.currency = R, e.subtotal = ne, e.triggerItemCollectionUpdate(), (0, j.sendOrderDetailsMessageAsMerchant)({
                            order: e,
                            chat: n,
                            orderNote: "",
                            offset: T.DEFAULT_OFFSET,
                            total: re.total,
                            discount: re.discount,
                            shipping: re.shipping,
                            tax: re.tax
                        }), m.Cmd.closeDrawerRight()
                    },
                    ae = (0, f.hasCatalog)(s.BusinessProfileCollection.get((0, y.getMaybeMeUser)())),
                    oe = (0, c.default)((function() {
                        m.Cmd.closeDrawerRight()
                    })),
                    le = function() {
                        ! function(e, t, n) {
                            if (!e) return t.length > 0;
                            return t.length !== e.products.length || t.some((function(t, r) {
                                var u, a;
                                return t.id !== e.products[r].id || t.quantity !== e.products[r].quantity || (null !== (u = null !== (a = t.price) && void 0 !== a ? a : n[t.id]) && void 0 !== u ? u : null) !== e.products[r].price
                            }))
                        }(t, Q, z) ? oe(): m.Cmd.openModal((0, P.jsx)(C.ConfirmDiscardModal, {
                            onOK: oe
                        }))
                    },
                    ie = function(e) {
                        !0 !== e && (0, O.notifyIfAnyProductMissesPrice)(Q, z), k(E.ORDER_SUMMARY)
                    },
                    de = function() {
                        k(E.CATALOG_PRODUCTS_FORM)
                    },
                    ce = function(e, t) {
                        var n = Number.isInteger(e) ? e : null;
                        L(n), G(!0 === t), k(null == n || Q[n].isCustomItem ? E.CUSTOM_ITEM_FORM : E.CATALOG_PRODUCTS_FORM)
                    },
                    se = function() {
                        k(E.ADDITIONAL_CHARGES_FORM)
                    },
                    fe = function(e, t) {
                        var n = e.length,
                            r = e.reduce((function(e, t, n) {
                                return e.set(t.id, n)
                            }), new Map);
                        return (0, u.default)(t).sort((function(e, t) {
                            var u, a;
                            return (null !== (u = r.get(e.id)) && void 0 !== u ? u : n) - (null !== (a = r.get(t.id)) && void 0 !== a ? a : n)
                        }))
                    },
                    me = function(e) {
                        V((function(t) {
                            return [].concat((0, u.default)(t.slice(0, e)), (0, u.default)(t.slice(e + 1)))
                        }))
                    },
                    pe = function(e) {
                        var t, n, r, a, o, l;
                        null != N ? function(e, t) {
                            V((function(n) {
                                var r, a = (0, u.default)(n);
                                return a[t].set({
                                    name: String(e.name),
                                    price: Number(e.priceAmount1000),
                                    quantity: null !== (r = e.quantity) && void 0 !== r ? r : 1,
                                    isQuantitySet: e.isQuantitySet
                                }), a
                            }))
                        }(e, N) : (n = (t = e).name, r = t.priceAmount1000, a = t.quantity, o = t.isQuantitySet, l = (0, b.default)(), V((function(e) {
                            return fe(e, [].concat((0, u.default)(e), [new M.default({
                                id: l,
                                name: n,
                                price: r,
                                quantity: null != a ? a : 1,
                                isCustomItem: !0,
                                isQuantitySet: o
                            })]))
                        })))
                    },
                    he = D.indexOf(h);
                if (!h) return null;
                return (0, P.jsx)(i.default, {
                    children: (0, P.jsx)(I.UIE, {
                        displayName: `FlowDrawer${he}`,
                        escapable: !0,
                        requestDismiss: function() {
                            oe()
                        },
                        children: (0, P.jsx)("div", {
                            children: function(e) {
                                switch (e) {
                                    case E.CATALOG_PRODUCTS_FORM:
                                        return (0, P.jsx)(x.CatalogFormDrawer, {
                                            currency: R,
                                            orderProducts: Q,
                                            onBack: ie,
                                            onAddProdutcs: function(e) {
                                                var t;
                                                t = e, V((function(e) {
                                                    return fe(e, [].concat((0, u.default)(e.filter((function(e) {
                                                        return e.isCustomItem
                                                    }))), (0, u.default)(t)))
                                                })), (0, O.notifyIfAnyProductMissesPrice)(t, z), ie(!0)
                                            },
                                            onAddCustomItem: function() {
                                                ce(null, !0)
                                            }
                                        });
                                    case E.CUSTOM_ITEM_FORM:
                                        return (0, P.jsx)(S.CustomItemFormDrawer, {
                                            currency: R,
                                            onBack: B ? de : ie,
                                            onSaveCustomItem: function(e) {
                                                pe(e), ie()
                                            },
                                            customItem: Q[Number.isInteger(N) ? Number(N) : -1]
                                        });
                                    case E.ORDER_SUMMARY:
                                        return (0, P.jsx)(A.OrderSummaryDrawer, {
                                            chat: n,
                                            currency: R,
                                            priceMap: z,
                                            orderItems: Q,
                                            orderSubtotal: ne,
                                            flatAdditionalAmounts: re,
                                            onPriceChange: te,
                                            onBack: le,
                                            onSubmit: ue,
                                            onAddItem: ae && (0, v.orderDetailsFromCatalogEnabled)() ? de : ce,
                                            onAdditionalCharges: se,
                                            onDeleteItem: me,
                                            onEditItem: ce
                                        });
                                    case E.ADDITIONAL_CHARGES_FORM:
                                        return (0, P.jsx)(g.AdditionalChargesFormDrawer, {
                                            currency: R,
                                            additionalCharges: $,
                                            subtotal: ne,
                                            onBack: ie,
                                            onApply: function(e) {
                                                ee((function(t) {
                                                    return (0, l.default)((0, l.default)({}, t), e)
                                                })), ie()
                                            }
                                        })
                                }
                            }(h)
                        })
                    }, he)
                })
            };
            var u = r(n(319)),
                a = r(n(59713)),
                o = r(n(63038)),
                l = r(n(81109)),
                i = r(n(65668)),
                d = n(67294),
                c = r(n(7539)),
                s = n(26141),
                f = n(79614),
                m = n(65901),
                p = n(73804),
                h = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = k(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        u = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = u ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, n && n.set(e, r);
                    return r
                }(n(86018)),
                y = n(1577),
                b = r(n(90629)),
                v = n(2629),
                g = n(9367),
                x = n(40704),
                _ = n(11467),
                C = n(19424),
                S = n(67596),
                T = n(89846),
                O = n(28821),
                M = r(n(40972)),
                A = n(87855),
                j = n(97629),
                I = n(16835),
                P = n(85893);

            function k(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (k = function(e) {
                    return e ? n : t
                })(e)
            }
            var E = n(76672).Mirrored(["CATALOG_PRODUCTS_FORM", "CUSTOM_ITEM_FORM", "ORDER_SUMMARY", "ADDITIONAL_CHARGES_FORM"]),
                D = Array.from(E.members()),
                R = h.currencyForCountryShortcode((0, p.getCountryShortcodeByPhone)((0, y.getMeUser)().user))
        }
    }
]);