/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [2946], {
        742034: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AdditionalChargesFormDrawer = function(e) {
                var t = e.currency,
                    n = e.subtotal,
                    r = e.additionalCharges,
                    d = e.onBack,
                    S = e.onApply,
                    M = (null == r ? void 0 : r.discountText) || "",
                    T = (0, y.useState)(M),
                    O = (0, a.default)(T, 2),
                    j = O[0],
                    A = O[1],
                    I = (null == r ? void 0 : r.taxText) || "",
                    P = (0, y.useState)(I),
                    E = (0, a.default)(P, 2),
                    k = E[0],
                    w = E[1],
                    D = (null == r ? void 0 : r.shippingText) || "",
                    R = (0, y.useState)(D),
                    L = (0, a.default)(R, 2),
                    N = L[0],
                    F = L[1],
                    U = (null == r ? void 0 : r.discountType) || _,
                    q = (0, y.useState)(U),
                    B = (0, a.default)(q, 2),
                    H = B[0],
                    G = B[1],
                    Y = (null == r ? void 0 : r.taxType) || C,
                    Q = (0, y.useState)(Y),
                    W = (0, a.default)(Q, 2),
                    z = W[0],
                    V = W[1],
                    K = (0, y.useState)(!1),
                    X = (0, a.default)(K, 2),
                    $ = X[0],
                    Z = X[1],
                    J = (0, y.useState)(!1),
                    ee = (0, a.default)(J, 2),
                    te = ee[0],
                    ne = ee[1],
                    re = (0, y.useMemo)((function() {
                        return (0, c.additionalChargeErrorHandler)({
                            currency: t,
                            value: N
                        })
                    }), [t, N]),
                    ae = [$, te, re].some((function(e) {
                        return e
                    }));
                return (0, x.jsxs)(m.default, {
                    children: [(0, x.jsx)(v.DrawerHeader, {
                        title: h.fbt._("Add discount, shipping or tax", null, {
                            hk: "nPDUK"
                        }),
                        type: v.DRAWER_HEADER_TYPE.SMALL,
                        onBack: M !== j || I !== k || D !== N || U !== H || Y !== z ? function() {
                            o.ModalManager.open((0, x.jsx)(i.ConfirmDiscardModal, {
                                onOK: d
                            }))
                        } : d,
                        focusBackOrCancel: !0
                    }), (0, x.jsxs)(g.default, {
                        className: (0, b.default)(p.uiPadding.all16),
                        children: [(0, x.jsx)(l.AdditionalChargesTextInput, {
                            text: j,
                            testid: "additional-charges-discount-input",
                            label: h.fbt._("Discount", null, {
                                hk: "3acZrp"
                            }),
                            symbol: H,
                            currency: t,
                            priceValue: n,
                            setText: A,
                            setError: Z,
                            setSymbol: G
                        }), (0, x.jsx)(f.TextInput, {
                            legacyImplementation: !0,
                            value: N,
                            testid: "additional-charges-shipping-input",
                            placeholder: h.fbt._("Shipping ({currency_symbol})", [h.fbt._param("currency_symbol", (0, u.formatAmount1000ToParts)(t, 0).symbol)], {
                                hk: "H2WDY"
                            }),
                            onChange: F,
                            theme: "small",
                            maxLength: 10,
                            customStyleThemes: ["desaturated"],
                            error: re
                        }), (0, x.jsx)(l.AdditionalChargesTextInput, {
                            text: k,
                            testid: "additional-charges-tax-input",
                            label: h.fbt._("Tax", null, {
                                hk: "2r5wzT"
                            }),
                            symbol: z,
                            currency: t,
                            priceValue: n,
                            setText: w,
                            setError: ne,
                            setSymbol: V
                        }), (0, x.jsx)(s.OrderApplyChangesButton, {
                            disabled: ae,
                            testid: "apply-additional-costs-button",
                            title: h.fbt._("Apply", null, {
                                hk: "3E5Tq7"
                            }),
                            onClick: function() {
                                return S({
                                    discountText: j,
                                    taxText: k,
                                    shippingText: N,
                                    discountType: H,
                                    taxType: z
                                })
                            }
                        })]
                    })]
                })
            };
            var a = r(n(963038)),
                u = n(217962),
                o = n(628707),
                l = n(833958),
                i = n(484105),
                c = n(46968),
                d = n(642343),
                s = n(964823),
                f = n(493315),
                p = n(726984),
                m = r(n(829723)),
                v = n(952991),
                g = r(n(849788)),
                h = n(548360),
                y = n(667294),
                b = r(n(156720)),
                x = n(785893),
                _ = d.PERCENTAGE_SYMBOL,
                C = d.PERCENTAGE_SYMBOL
        },
        833958: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AdditionalChargesTextInput = function(e) {
                var t = e.text,
                    n = e.label,
                    r = e.symbol,
                    m = e.testid,
                    v = e.currency,
                    g = e.priceValue,
                    h = e.setText,
                    y = e.setError,
                    b = e.setSymbol,
                    x = (0, c.useMemo)((function() {
                        var e = (0, u.additionalChargeErrorHandler)({
                            label: n,
                            currency: v,
                            fieldType: r,
                            maxFlatValue: g / o.DEFAULT_OFFSET,
                            enablePercentValueCheck: !0,
                            value: t
                        });
                        return y(Boolean(e)), e
                    }), [t, n, r, v, y, g]);
                return (0, s.jsxs)("div", {
                    className: (0, d.default)(f),
                    children: [(0, s.jsx)(l.TextInput, {
                        legacyImplementation: !0,
                        value: t,
                        testid: m,
                        placeholder: i.fbt._("{input_label} ({currency_or_percentage})", [i.fbt._param("input_label", n), i.fbt._param("currency_or_percentage", r)], {
                            hk: "vf1Ko"
                        }),
                        onChange: function(e) {
                            return h(e)
                        },
                        theme: "small",
                        maxLength: 10,
                        customStyleThemes: ["desaturated"],
                        error: x
                    }), (0, s.jsx)("div", {
                        className: (0, d.default)(p),
                        children: (0, s.jsx)(a.OrderDetailAmountTypeSelector, {
                            currency: v,
                            value: r,
                            onChange: function(e) {
                                var t = e.value;
                                return b(t)
                            }
                        })
                    })]
                })
            };
            var a = n(261499),
                u = n(46968),
                o = n(642343),
                l = n(493315),
                i = n(548360),
                c = n(667294),
                d = r(n(156720)),
                s = n(785893),
                f = {
                    position: "g0rxnol2"
                },
                p = {
                    position: "lhggkp7q",
                    end: "ebjesfe0",
                    zIndex: "mb8var44",
                    top: "agjvi7sf"
                }
        },
        832092: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OrderCatalogFormDrawer = function(e) {
                var t = e.currency,
                    n = e.productsSelection,
                    r = e.orderItems,
                    T = e.priceMap,
                    O = e.onBack,
                    j = e.onAddProducts,
                    A = e.onAddCustomItem,
                    I = e.onProductSelectionChange,
                    P = (0, b.useState)(!1),
                    E = (0, a.default)(P, 2),
                    k = E[0],
                    w = E[1],
                    D = (0, _.default)(),
                    R = (0, C.default)((function() {
                        return new l.default
                    })),
                    L = n.getSelected().reduce((function(e, t) {
                        var r, a;
                        return e + (null !== (r = null !== (a = t.priceAmount1000) && void 0 !== a ? a : T[t.id.toString()]) && void 0 !== r ? r : 0) * Number(n.getVal(t))
                    }), 0),
                    N = r.filter((function(e) {
                        return e.isCustomItem
                    })).reduce((function(e, t) {
                        return e + t.price * t.quantity
                    }), 0);
                return (0, S.jsxs)(m.default, {
                    children: [(0, S.jsx)(g.DrawerHeader, {
                        title: y.fbt._("Add items", null, {
                            hk: "2U1Vru"
                        }),
                        type: g.DRAWER_HEADER_TYPE.SMALL,
                        onBack: k ? function() {
                            i.ModalManager.open((0, S.jsx)(s.ConfirmDiscardModal, {
                                onOK: O
                            }))
                        } : O,
                        focusBackOrCancel: !0
                    }), (0, S.jsxs)(v.default, {
                        children: [(0, S.jsxs)(h.default, {
                            theme: "expand-height",
                            xstyle: M.drawerSection,
                            children: [(0, u.orderDetailsCustomItemEnabled)() && (0, S.jsxs)(S.Fragment, {
                                children: [(0, S.jsx)(c.AddOrderItem, {
                                    title: y.fbt._("Create new item", null, {
                                        hk: "2GmSAs"
                                    }),
                                    onClick: A
                                }), (0, S.jsx)("hr", {
                                    className: (0, x.default)(M.catalogBar, p.uiMargin.vert0)
                                })]
                            }), (0, S.jsx)("p", {
                                className: (0, x.default)(M.catalogTitleText, p.uiPadding.start16, p.uiPadding.vert10),
                                children: y.fbt._("Catalog items", null, {
                                    hk: "4chzUe"
                                })
                            }), (0, S.jsx)(d.default, {
                                className: (0, x.default)(M.catalogProductsList),
                                productsSelection: n,
                                orderItems: r,
                                flatListController: R.current,
                                onProductSelectChange: function(e, t) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                    I(e, t), n || k || w(!0), D()
                                }
                            })]
                        }), (0, S.jsx)(f.OrderTotalPrice, {
                            xstyle: [p.uiPadding.all16, p.uiMargin.top10],
                            visible: !0,
                            disabled: !k,
                            totalPrice: (0, o.formatAmount1000)(t, L + N),
                            testid: "save-products-button",
                            onConfirm: j,
                            title: y.fbt._("Subtotal", null, {
                                hk: "4ciFet"
                            }),
                            confirmTitle: y.fbt._("Add to Order", null, {
                                hk: "2SYeoP"
                            })
                        })]
                    })]
                })
            };
            var a = r(n(963038)),
                u = n(894995),
                o = n(217962),
                l = r(n(979163)),
                i = n(628707),
                c = n(886146),
                d = r(n(125946)),
                s = n(484105),
                f = n(964823),
                p = n(726984),
                m = r(n(829723)),
                v = r(n(544978)),
                g = n(952991),
                h = r(n(849788)),
                y = n(548360),
                b = n(667294),
                x = r(n(156720)),
                _ = r(n(802418)),
                C = r(n(982669)),
                S = n(785893),
                M = {
                    catalogTitleText: {
                        fontWeight: "m1e7cby3",
                        lineHeight: "tkq7s68q",
                        fontSize: "ovllcyds",
                        color: "q70jrbp7"
                    },
                    catalogBar: {
                        width: "ln8gz9je",
                        borderEnd: "eta5aym1",
                        borderBottom: "d9802myq",
                        borderStart: "e4xiuwjv",
                        borderTop: "gq6acybq"
                    },
                    catalogProductsList: {
                        overflowX: "i44ccddp",
                        overflowY: "ag5g9lrv",
                        flexGrow: "ggj6brxn",
                        flexShrink: "m0h2a7mj",
                        flexBasis: "l07amlnk"
                    },
                    drawerSection: {
                        display: "p357zi0d",
                        overflowX: "i44ccddp",
                        overflowY: "ag5g9lrv",
                        flexDirection: "f8m0rgwh"
                    }
                }
        },
        107077: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CatalogFormProduct = function(e) {
                var t = e.product,
                    n = e.productsSelection,
                    r = e.onProductSelectChange,
                    d = Number(n.getVal(t)) || 0,
                    s = (0, i.useState)(!1),
                    f = (0, a.default)(s, 2),
                    p = f[0],
                    m = f[1];
                return (0, c.jsx)("div", {
                    onMouseEnter: function() {
                        return m(!0)
                    },
                    onMouseLeave: function() {
                        return m(!1)
                    },
                    children: (0, c.jsx)(o.default, {
                        product: t,
                        detail: (p || n.isSelected(t)) && (0, c.jsx)(u.default, {
                            quantity: d,
                            quantityTitle: l.fbt._("Items in order", null, {
                                hk: "35Mpfd"
                            }),
                            isCollapsed: !p,
                            onAddOneClick: function() {
                                return r(t, d + 1)
                            },
                            onRemoveOneClick: function() {
                                return r(t, d - 1)
                            }
                        }),
                        managedFocus: !0,
                        theme: "product-add-to-order"
                    })
                })
            };
            var a = r(n(963038)),
                u = r(n(684492)),
                o = r(n(991417)),
                l = n(548360),
                i = n(667294),
                c = n(785893)
        },
        125946: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.className,
                    n = e.productsSelection,
                    r = e.orderItems,
                    C = e.flatListController,
                    S = e.onProductSelectChange,
                    M = (0, x.default)(),
                    T = (0, h.default)(),
                    O = (0, g.default)(T, 100),
                    j = l.CatalogCollection.assertGet((0, m.getMaybeMeUser)()),
                    A = (0, v.useState)(!1),
                    I = (0, o.default)(A, 2),
                    P = I[0],
                    E = I[1],
                    k = (0, v.useState)(0),
                    w = (0, o.default)(k, 2),
                    D = w[0],
                    R = w[1],
                    L = (0, v.useState)(!1),
                    N = (0, o.default)(L, 2),
                    F = N[0],
                    U = N[1],
                    q = function() {
                        var e = new Set(r.map((function(e) {
                            return e.id
                        })));
                        return j.productCollection.getProductModels().filter((function(t) {
                            return !e.has(t.id)
                        })).map((function(e) {
                            return {
                                itemKey: e.id.toString(),
                                product: e
                            }
                        }))
                    },
                    B = function(e) {
                        e.forEach((function(e) {
                            var t = r.find((function(t) {
                                return t.id === e.product.id
                            }));
                            void 0 !== t && S(e.product, Number(t.quantity), !0)
                        }))
                    },
                    H = function() {
                        var e = (0, u.default)(a.default.mark((function e() {
                            var t, n, r, u;
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!F) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (j.afterCursor) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        return t = j.productCollection.getProductModels().length, E(!0), R(t), e.prev = 7, e.next = 10, l.CatalogCollection.update((0, m.getMaybeMeUser)());
                                    case 10:
                                        if (n = e.sent, !M.aborted) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 13:
                                        if (E(!1), r = Array.isArray(n) ? n[0] : n, u = r.productCollection.getProductModels().length, B(q().slice(t)), u === D && U(!0), !(t * p.PRODUCT_LIST_ITEM_HEIGHT < window.innerHeight)) {
                                            e.next = 20;
                                            break
                                        }
                                        return e.abrupt("return", H());
                                    case 20:
                                        e.next = 26;
                                        break;
                                    case 22:
                                        e.prev = 22, e.t0 = e.catch(7), E(!1), U(!0);
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [7, 22]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                (0, v.useEffect)((function() {
                    B(q()), H()
                }), []), (0, y.useListener)(j.productCollection, "add", O);
                var G = (0, b.default)((function(e) {
                    P || e.scrollTop + s.SCROLL_FUDGE > e.scrollHeight - e.clientHeight && H()
                }), 100);
                return (0, _.jsxs)(c.default, {
                    className: t,
                    flatListControllers: [C],
                    onScroll: function(e) {
                        e.currentTarget && G(e.currentTarget)
                    },
                    children: [(0, _.jsx)(i.FlatList, {
                        flatListController: C,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: q(),
                        renderItem: function(e) {
                            var t = e.product;
                            return (0, _.jsx)(f.CatalogFormProduct, {
                                product: t,
                                productsSelection: n,
                                onProductSelectChange: S
                            })
                        },
                        defaultItemHeight: p.PRODUCT_LIST_ITEM_HEIGHT
                    }), P && (0, _.jsx)(d.default, {})]
                })
            };
            var a = r(n(887757)),
                u = r(n(348926)),
                o = r(n(963038)),
                l = n(484817),
                i = n(577407),
                c = r(n(877576)),
                d = r(n(399447)),
                s = n(295769),
                f = n(107077),
                p = n(902011),
                m = n(228277),
                v = n(667294),
                g = r(n(869622)),
                h = r(n(802418)),
                y = n(779740),
                b = r(n(32594)),
                x = r(n(788413)),
                _ = n(785893)
        },
        484105: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ConfirmDiscardModal = function(e) {
                var t = e.onOK;
                return (0, l.jsx)(u.ConfirmPopup, {
                    title: o.fbt._("Discard changes?", null, {
                        hk: "1SaEaC"
                    }),
                    onOK: function() {
                        r.ModalManager.close(), t()
                    },
                    okText: o.fbt._("Discard", null, {
                        hk: "3etb6C"
                    }),
                    onCancel: function() {
                        return r.ModalManager.close()
                    },
                    children: (0, l.jsx)(a.TextDiv, {
                        theme: "muted",
                        children: o.fbt._("If you close this, your draft will be discarded.", null, {
                            hk: "4G5DVj"
                        })
                    })
                })
            };
            var r = n(628707),
                a = n(558288),
                u = n(404186),
                o = n(548360),
                l = n(785893)
        },
        328855: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CustomItemFormDrawer = function(e) {
                var t = e.currency,
                    n = e.customItem,
                    r = e.onBack,
                    u = e.onSaveCustomItem,
                    C = (0, y.useState)(null == n ? void 0 : n.name),
                    S = (0, a.default)(C, 2),
                    M = S[0],
                    T = S[1],
                    O = (0, y.useState)(Number.isInteger(null == n ? void 0 : n.price) ? String(Number(null == n ? void 0 : n.price) / 1e3) : null),
                    j = (0, a.default)(O, 2),
                    A = j[0],
                    I = j[1],
                    P = (0, y.useState)(null == n ? void 0 : n.price),
                    E = (0, a.default)(P, 2),
                    k = E[0],
                    w = E[1],
                    D = (0, y.useState)((null == n ? void 0 : n.isQuantitySet) ? n.quantity : null),
                    R = (0, a.default)(D, 2),
                    L = R[0],
                    N = R[1],
                    F = (0, y.useState)((null == n ? void 0 : n.isQuantitySet) ? String(n.quantity) : null),
                    U = (0, a.default)(F, 2),
                    q = U[0],
                    B = U[1],
                    H = (0, y.useMemo)((function() {
                        return function(e) {
                            if (null == e) return "";
                            var t = String(h.fbt._("Add a title", null, {
                                hk: "7Lm6B"
                            }));
                            return "" === e.trim() ? t : ""
                        }(M)
                    }), [M]),
                    G = (0, y.useMemo)((function() {
                        return function(e, t) {
                            if (null == t) return "";
                            var n = String(h.fbt._("Enter a valid price", null, {
                                hk: "4yb1Sg"
                            }));
                            return "" !== t.trim() && (0, o.validatePriceString)(e, t, d.MIN_PRICE, d.MAX_PRICE) ? "" : n
                        }(t, A)
                    }), [t, A]),
                    Y = (0, y.useMemo)((function() {
                        return function(e) {
                            if (null == e) return "";
                            var t = String(h.fbt._("Enter a valid quantity", null, {
                                hk: "u6SoG"
                            }));
                            return _(Number(e)) ? "" : t
                        }(q)
                    }), [q]),
                    Q = (W = n, z = M, V = k, K = q, X = (null == W ? void 0 : W.isQuantitySet) ? Number(K) !== W.quantity : null != K, (null == W ? void 0 : W.name) !== z || (null == W ? void 0 : W.price) !== V || X);
                var W, z, V, K, X;
                return (0, x.jsxs)(p.default, {
                    children: [(0, x.jsx)(v.DrawerHeader, {
                        title: n ? h.fbt._("Update item", null, {
                            hk: "1TL07p"
                        }) : h.fbt._("Create new item", null, {
                            hk: "4xRwlm"
                        }),
                        type: v.DRAWER_HEADER_TYPE.SMALL,
                        onBack: Q ? function() {
                            l.ModalManager.open((0, x.jsx)(i.ConfirmDiscardModal, {
                                onOK: r
                            }))
                        } : r,
                        focusBackOrCancel: !0
                    }), (0, x.jsx)(m.default, {
                        children: (0, x.jsxs)(g.default, {
                            className: (0, b.default)(f.uiPadding.all16),
                            children: [(0, x.jsx)(s.TextInput, {
                                legacyImplementation: !0,
                                testid: "custom-item-edit-name-input",
                                value: M,
                                placeholder: h.fbt._("Item name", null, {
                                    hk: "1TMRR7"
                                }),
                                onChange: function(e) {
                                    T(e)
                                },
                                theme: "small",
                                customStyleThemes: ["desaturated"],
                                maxLength: 150,
                                error: H
                            }), (0, x.jsx)(s.TextInput, {
                                legacyImplementation: !0,
                                testid: "custom-item-edit-price-input",
                                value: A,
                                placeholder: h.fbt._("Price {symbol}", [h.fbt._param("symbol", (0, o.formatAmount1000ToParts)(t, 0).symbol)], {
                                    hk: "3jcGcb"
                                }),
                                onChange: function(e) {
                                    var n = (0, o.valueFromString)(t, e);
                                    w(n), I(e)
                                },
                                theme: "small",
                                maxLength: 30,
                                customStyleThemes: ["desaturated"],
                                error: G
                            }), (0, x.jsx)(s.TextInput, {
                                legacyImplementation: !0,
                                testid: "custom-item-edit-quantity-input",
                                value: q,
                                placeholder: h.fbt._("Quantity (Optional)", null, {
                                    hk: "4swiuO"
                                }),
                                onChange: function(e) {
                                    var t = "" === e ? null : Number(e);
                                    _(t) || (t = null), N(t), B("" === e ? null : e)
                                },
                                theme: "small",
                                maxLength: 30,
                                customStyleThemes: ["desaturated"],
                                error: Y
                            }), (0, x.jsx)(c.OrderApplyChangesButton, {
                                title: n ? h.fbt._("Update Order", null, {
                                    hk: "HjU1X"
                                }) : h.fbt._("Add to Order", null, {
                                    hk: "3p1U18"
                                }),
                                disabled: null == M || null == A || !(!n || Q) || [H, G, Y].some((function(e) {
                                    return e
                                })),
                                onClick: function() {
                                    var e = {
                                        name: M,
                                        priceAmount1000: +k,
                                        quantity: L,
                                        isQuantitySet: Number.isInteger(L)
                                    };
                                    u(e)
                                },
                                testid: "save-custom-item-button"
                            })]
                        })
                    })]
                })
            };
            var a = r(n(963038)),
                u = n(771164),
                o = n(217962),
                l = n(628707),
                i = n(484105),
                c = n(964823),
                d = n(853092),
                s = n(493315),
                f = n(726984),
                p = r(n(829723)),
                m = r(n(544978)),
                v = n(952991),
                g = r(n(849788)),
                h = n(548360),
                y = n(667294),
                b = r(n(156720)),
                x = n(785893);

            function _(e) {
                return Number.isInteger(e) && +e > 0 && +e <= u.CART_ITEM_MAX_QUANTITY
            }
        },
        261499: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OrderDetailAmountTypeSelector = function(e) {
                var t = e.value,
                    n = e.onChange,
                    r = e.currency,
                    d = a.formatLocalSymbol(r),
                    s = l.fbt._("Select amount type", null, {
                        hk: "1xddkG"
                    }),
                    f = [{
                        id: "percentage",
                        label: l.fbt._("by Percentage ({percentage-symbol})", [l.fbt._param("percentage-symbol", u.PERCENTAGE_SYMBOL)], {
                            hk: "3fQwM3"
                        }),
                        value: u.PERCENTAGE_SYMBOL
                    }, {
                        id: "flat-amount",
                        label: l.fbt._("by Flat amount ({currency-symbol})", [l.fbt._param("currency-symbol", d)], {
                            hk: "duPhj"
                        }),
                        value: d
                    }],
                    p = (0, i.useMemo)((function() {
                        return f.findIndex((function(e) {
                            return e.value === t
                        }))
                    }), []);
                return (0, c.jsx)(o.default, {
                    "aria-label": s,
                    options: f,
                    defaultIndex: p,
                    onChange: n
                })
            };
            var a = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var u in e)
                        if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                            var o = a ? Object.getOwnPropertyDescriptor(e, u) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, u, o) : r[u] = e[u]
                        } r.default = e, n && n.set(e, r);
                    return r
                }(n(217962)),
                u = n(642343),
                o = r(n(499801)),
                l = n(548360),
                i = n(667294),
                c = n(785893);

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (d = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        499801: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.defaultIndex,
                    n = void 0 === t ? 0 : t,
                    r = e.options,
                    v = e.onChange,
                    g = e["aria-label"],
                    h = (0, s.useRef)(null),
                    y = (0, s.useState)(!1),
                    b = (0, a.default)(y, 2),
                    x = b[0],
                    _ = b[1],
                    C = (0, s.useState)(n),
                    S = (0, a.default)(C, 2),
                    M = S[0],
                    T = S[1],
                    O = r.map((function(e, t) {
                        var n = e.id,
                            r = e.label;
                        return (0, p.jsx)(l.DropdownItem, {
                            testid: `mi-${n}`,
                            action: function() {
                                v(e), T(t)
                            },
                            children: (0, p.jsx)("div", {
                                className: (0, f.default)(m),
                                role: "button",
                                "aria-label": r,
                                children: t === M ? (0, p.jsx)(i.TextSpan, {
                                    weight: "bold",
                                    children: r
                                }) : r
                            })
                        }, n)
                    }));
                return (0, p.jsxs)("div", {
                    ref: h,
                    children: [(0, p.jsx)(u.default, {
                        "aria-label": g,
                        PostfixIcon: o.DownIcon,
                        label: r[M].value,
                        onClick: function() {
                            return _((function(e) {
                                return !e
                            }))
                        }
                    }), x && h.current && (0, p.jsx)(c.UIE, {
                        displayName: "ValuePicker",
                        escapable: !0,
                        popable: !0,
                        dismissOnWindowResize: !0,
                        requestDismiss: function() {
                            return _(!1)
                        },
                        children: (0, p.jsx)(d.default, {
                            contextMenu: {
                                menu: O,
                                anchor: h.current
                            }
                        })
                    })]
                })
            };
            var a = r(n(963038)),
                u = r(n(270111)),
                o = n(123212),
                l = n(116384),
                i = n(558288),
                c = n(776097),
                d = r(n(728056)),
                s = n(667294),
                f = r(n(156720)),
                p = n(785893),
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
        577289: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getErrorMsgFromProducts = l, t.notifyIfAnyProductMissesPrice = void 0;
            var r = n(236539),
                a = n(422210),
                u = n(548360),
                o = n(785893);

            function l(e) {
                var t = e.length;
                return 0 === t ? "" : 1 === t ? u.fbt._("Enter a price for {first-product-name}", [u.fbt._param("first-product-name", e[0])], {
                    hk: "Lf39K"
                }) : 2 === t ? u.fbt._("Enter prices for {first-product-name} and {second-product-name}", [u.fbt._param("first-product-name", e[0]), u.fbt._param("second-product-name", e[1])], {
                    hk: "1uLet0"
                }) : u.fbt._({
                    "*": "Enter prices for {first-product-name}, {second-product-name} and {other-items} other items",
                    _1: "Enter prices for {first-product-name}, {second-product-name} and 1 other item"
                }, [u.fbt._plural(t - 2, "other-items"), u.fbt._param("first-product-name", e[0]), u.fbt._param("second-product-name", e[1])], {
                    hk: "1Crsuq"
                })
            }
            t.notifyIfAnyProductMissesPrice = function(e, t) {
                var n = l(e.reduce((function(e, n) {
                    var r, a = null !== (r = n.price) && void 0 !== r ? r : t[n.id];
                    return Number.isInteger(a) || e.push(n.name || ""), e
                }), []));
                n && a.ToastManager.open((0, o.jsx)(r.Toast, {
                    duration: 1e4,
                    msg: n,
                    action: {
                        actionText: u.fbt._("OKAY", null, {
                            hk: "3RIrWh"
                        }),
                        dismiss: !0,
                        theme: "success"
                    }
                }))
            }
        },
        522946: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n(543269)),
                u = r(n(887757)),
                o = r(n(348926)),
                l = r(n(319)),
                i = r(n(859713)),
                c = r(n(963038)),
                d = r(n(81109)),
                s = n(894995),
                f = r(n(465238)),
                p = n(674669),
                m = n(913257),
                v = n(833896),
                g = n(484817),
                h = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = B(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var u in e)
                        if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                            var o = a ? Object.getOwnPropertyDescriptor(e, u) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, u, o) : r[u] = e[u]
                        } r.default = e, n && n.set(e, r);
                    return r
                }(n(217962)),
                y = n(875058),
                b = n(653771),
                x = n(628707),
                _ = r(n(833677)),
                C = n(742034),
                S = n(832092),
                M = n(546911),
                T = n(484105),
                O = n(328855),
                j = n(642343),
                A = r(n(643966)),
                I = n(577289),
                P = r(n(136601)),
                E = n(120455),
                k = n(776097),
                w = n(228277),
                D = r(n(904847)),
                R = r(n(229677)),
                L = n(238779),
                N = n(667294),
                F = r(n(363045)),
                U = r(n(982669)),
                q = n(785893);

            function B(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (B = function(e) {
                    return e ? n : t
                })(e)
            }
            var H = n(76672).Mirrored(["CATALOG_PRODUCTS_FORM", "CUSTOM_ITEM_FORM", "ORDER_SUMMARY", "ADDITIONAL_CHARGES_FORM"]),
                G = Array.from(H.members()),
                Y = h.currencyForCountryShortcode((0, b.getCountryShortcodeByPhone)((0, w.getMeUser)().user));

            function Q(e, t) {
                var n = e.entryPoint,
                    r = e.order,
                    h = e.chat,
                    b = e.onBack,
                    B = e.onSend,
                    Q = e.onCancel,
                    W = (0, N.useState)(H.ORDER_SUMMARY),
                    z = (0, c.default)(W, 2),
                    V = z[0],
                    K = z[1],
                    X = (0, N.useState)(null),
                    $ = (0, c.default)(X, 2),
                    Z = $[0],
                    J = $[1],
                    ee = (0, N.useState)(!1),
                    te = (0, c.default)(ee, 2),
                    ne = te[0],
                    re = te[1],
                    ae = (0, N.useState)((function() {
                        return function(e) {
                            if (!e) return [];
                            var t = {
                                    isCustomItem: !1,
                                    isQuantitySet: !0
                                },
                                n = e.products.map((function(e) {
                                    return new P.default((0, d.default)((0, d.default)({}, t), e))
                                }));
                            return (0, I.notifyIfAnyProductMissesPrice)(n, {}), n
                        }(r)
                    })),
                    ue = (0, c.default)(ae, 2),
                    oe = ue[0],
                    le = ue[1],
                    ie = (0, N.useState)({}),
                    ce = (0, c.default)(ie, 2),
                    de = ce[0],
                    se = ce[1],
                    fe = (0, N.useState)(null),
                    pe = (0, c.default)(fe, 2),
                    me = pe[0],
                    ve = pe[1],
                    ge = (0, U.default)((function() {
                        return new _.default([], (function(e) {
                            return e.id.toString()
                        }))
                    })).current,
                    he = g.CatalogCollection.get((0, w.getMeUser)()),
                    ye = function(e, t) {
                        se((function(n) {
                            return (0, d.default)((0, d.default)({}, n), {}, (0, i.default)({}, t, e))
                        }))
                    },
                    be = (0, N.useMemo)((function() {
                        return oe.reduce((function(e, t) {
                            var n, r;
                            return e + (null !== (n = null !== (r = t.price) && void 0 !== r ? r : de[t.id]) && void 0 !== n ? n : 0) * t.quantity
                        }), 0)
                    }), [oe, de]),
                    xe = (0, j.calculateFlatAmounts)({
                        orderSubtotal: be / j.DEFAULT_OFFSET,
                        discountType: (null == me ? void 0 : me.discountType) || "",
                        discountText: (null == me ? void 0 : me.discountText) || "",
                        taxType: (null == me ? void 0 : me.taxType) || "",
                        taxText: (null == me ? void 0 : me.taxText) || "",
                        shippingText: (null == me ? void 0 : me.shippingText) || ""
                    }),
                    _e = (0, v.hasCatalog)(m.BusinessProfileCollection.get((0, w.getMaybeMeUser)())),
                    Ce = function() {
                        var e = oe.some((function(e) {
                            return de[e.id]
                        }));
                        new R.default.OrderDetailsActionsSmb({
                            orderDetailsCreationAction: R.default.ORDER_DETAILS_CREATION_ACTION.SEND_ORDER_DETAILS,
                            actionCategory: String(A.default.ORDER_DETAILS_CREATION),
                            hasCatalog: _e,
                            hasAddedPrice: e,
                            orderDetailEntryPoint: String(n)
                        }).commit();
                        var t = null != r ? r : M.OrderCollection.addOrder();
                        t.products = oe.map((function(e) {
                            var t;
                            return e.price = null !== (t = e.price) && void 0 !== t ? t : de[e.id], e.currency = Y, e
                        })), t.currency = Y, t.subtotal = be, t.triggerItemCollectionUpdate(), (0, p.sendOrderDetailsMessageAsMerchant)({
                            order: t,
                            chat: h,
                            orderNote: "",
                            offset: j.DEFAULT_OFFSET,
                            total: xe.total,
                            discount: xe.discount,
                            shipping: xe.shipping,
                            tax: xe.tax
                        }), null == B || B(), y.DrawerManager.closeDrawerRight()
                    },
                    Se = (0, F.default)((function() {
                        b ? b() : (y.DrawerManager.closeDrawerRight(), null == Q || Q())
                    })),
                    Me = function() {
                        ! function(e, t, n) {
                            return e ? t.length !== e.products.length || t.some((function(t, r) {
                                var a, u;
                                return t.id !== e.products[r].id || t.quantity !== e.products[r].quantity || (null !== (a = null !== (u = t.price) && void 0 !== u ? u : n[t.id]) && void 0 !== a ? a : null) !== e.products[r].price
                            })) : t.length > 0
                        }(r, oe, de) ? Se(): x.ModalManager.open((0, q.jsx)(T.ConfirmDiscardModal, {
                            onOK: Se
                        }))
                    },
                    Te = function(e) {
                        !0 !== e && (0, I.notifyIfAnyProductMissesPrice)(oe, de), K(H.ORDER_SUMMARY)
                    },
                    Oe = function() {
                        K(H.CATALOG_PRODUCTS_FORM)
                    },
                    je = function(e, t) {
                        var n = Number.isInteger(e) ? e : null;
                        J(n), re(!0 === t), K(null == n || oe[n].isCustomItem ? H.CUSTOM_ITEM_FORM : H.CATALOG_PRODUCTS_FORM)
                    },
                    Ae = function() {
                        K(H.ADDITIONAL_CHARGES_FORM)
                    },
                    Ie = function(e, t) {
                        var n = e.length,
                            r = e.reduce((function(e, t, n) {
                                return e.set(t.id, n)
                            }), new Map);
                        return (0, l.default)(t).sort((function(e, t) {
                            var a, u;
                            return (null !== (a = r.get(e.id)) && void 0 !== a ? a : n) - (null !== (u = r.get(t.id)) && void 0 !== u ? u : n)
                        }))
                    },
                    Pe = function(e) {
                        return e.map((function(e) {
                            var t;
                            return new P.default({
                                id: e.id,
                                name: e.name,
                                price: e.priceAmount1000,
                                thumbnailUrl: null === (t = e.getPreviewImage()) || void 0 === t ? void 0 : t.mediaUrl,
                                quantity: Number(ge.getVal(e)),
                                isCustomItem: !1,
                                isQuantitySet: !0
                            })
                        }))
                    },
                    Ee = function(e, t, n) {
                        var r = null == he ? void 0 : he.productCollection.getProductModels(),
                            a = new Set(t.map((function(e) {
                                return e.id
                            }))),
                            u = new Set(null == r ? void 0 : r.map((function(e) {
                                return e.id
                            })));
                        return n.reduce((function(e, t) {
                            var n = a.has(t.id),
                                r = u.has(t.id);
                            return n || r ? e : e.concat(t)
                        }), e)
                    },
                    ke = function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        _e && le((function(t) {
                            var n = ge.getSelected(),
                                r = Pe(n),
                                a = Ee(r, n, t);
                            return e && (0, I.notifyIfAnyProductMissesPrice)(a, de), Ie(t, a)
                        }))
                    },
                    we = function(e) {
                        return ge.getSelected().find((function(t) {
                            return t.id === e.id
                        }))
                    },
                    De = function(e, t) {
                        ge.setVal(e, t)
                    },
                    Re = function(e) {
                        if (!oe[e].isCustomItem) {
                            var t = we(oe[e]);
                            t && De(t, 0)
                        }
                        le((function(t) {
                            return [].concat((0, l.default)(t.slice(0, e)), (0, l.default)(t.slice(e + 1)))
                        }))
                    },
                    Le = function(e, t) {
                        if (oe[e].isCustomItem) ! function(e, t) {
                            t ? le((function(n) {
                                var r = (0, l.default)(n);
                                return r[e].quantity = t, r[e].isQuantitySet = !0, r
                            })) : Re(e)
                        }(e, t);
                        else {
                            var n = we(oe[e]);
                            n && De(n, t), ke(!1)
                        }
                    },
                    Ne = function() {
                        var e = (0, o.default)(u.default.mark((function e(t) {
                            var n, r, a, o, l, i, c;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        r = null == he ? void 0 : he.productCollection.getProductModels(), o = (null === (n = r) || void 0 === n ? void 0 : n.length) || 0, l = 0;
                                    case 3:
                                        if (a && ge.isSelected(a) || !(l < o)) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 6, g.CatalogCollection.update((0, w.getMaybeMeUser)());
                                    case 6:
                                        l = o, r = null == he ? void 0 : he.productCollection.getProductModels(), (a = null === (i = r) || void 0 === i ? void 0 : i.find((function(e) {
                                            return e.id === t.id
                                        }))) && De(a, t.quantity), o = null === (c = r) || void 0 === c ? void 0 : c.length, e.next = 3;
                                        break;
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                (0, N.useEffect)((function() {
                    ! function() {
                        if (!r) return [];
                        var e, t = null == he ? void 0 : he.productCollection.getProductModels(),
                            n = (0, a.default)(r.products);
                        try {
                            var u = function() {
                                var n = e.value,
                                    r = null == t ? void 0 : t.find((function(e) {
                                        return e.id === n.id
                                    }));
                                r ? De(r, n.quantity) : Ne(n)
                            };
                            for (n.s(); !(e = n.n()).done;) u()
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                    }()
                }), []);
                var Fe = G.indexOf(V);
                return V ? (0, q.jsx)(D.default, {
                    ref: t,
                    children: (0, q.jsx)(k.UIE, {
                        displayName: `FlowDrawer${Fe}`,
                        escapable: !0,
                        children: (0, q.jsx)("div", {
                            children: function(e) {
                                switch (e) {
                                    case H.CATALOG_PRODUCTS_FORM:
                                        return (0, q.jsx)(S.OrderCatalogFormDrawer, {
                                            currency: Y,
                                            productsSelection: ge,
                                            orderItems: oe,
                                            priceMap: de,
                                            onBack: Te,
                                            onAddProducts: function() {
                                                ke(), Te(!0)
                                            },
                                            onAddCustomItem: function() {
                                                je(null, !0)
                                            },
                                            onProductSelectionChange: De
                                        });
                                    case H.CUSTOM_ITEM_FORM:
                                        return (0, q.jsx)(O.CustomItemFormDrawer, {
                                            currency: Y,
                                            onBack: ne ? Oe : Te,
                                            onSaveCustomItem: function(e) {
                                                var t, n, r, a, u, o;
                                                ke(), n = (t = e).name, r = t.priceAmount1000, a = t.quantity, u = t.isQuantitySet, o = `${(0,L.getCustomItemIdPrefix)()}-${(0,f.default)()}`, le((function(e) {
                                                    return Ie(e, [].concat((0, l.default)(e), [new P.default({
                                                        id: o,
                                                        name: n,
                                                        price: r,
                                                        quantity: null != a ? a : 1,
                                                        isCustomItem: !0,
                                                        isQuantitySet: u
                                                    })]))
                                                })), Te()
                                            },
                                            customItem: oe[Number.isInteger(Z) ? Number(Z) : -1]
                                        });
                                    case H.ORDER_SUMMARY:
                                        return (0, q.jsx)(E.OrderSummaryDrawer, {
                                            chat: h,
                                            currency: Y,
                                            priceMap: de,
                                            orderItems: oe,
                                            orderSubtotal: be,
                                            additionalCharges: me,
                                            flatAmounts: xe,
                                            onPriceChange: ye,
                                            onBack: Me,
                                            onSubmit: Ce,
                                            onAddItem: _e && (0, s.orderDetailsFromCatalogEnabled)() ? Oe : je,
                                            onAdditionalCharges: Ae,
                                            onDeleteItem: Re,
                                            onItemQuantityChange: Le
                                        });
                                    case H.ADDITIONAL_CHARGES_FORM:
                                        return (0, q.jsx)(C.AdditionalChargesFormDrawer, {
                                            currency: Y,
                                            additionalCharges: me,
                                            subtotal: be,
                                            onBack: Te,
                                            onApply: function(e) {
                                                ve((function(t) {
                                                    return (0, d.default)((0, d.default)({}, t), e)
                                                })), Te()
                                            }
                                        })
                                }
                            }(V)
                        })
                    }, Fe)
                }) : null
            }
            var W = (0, N.forwardRef)(Q);
            t.default = W
        }
    }
]);