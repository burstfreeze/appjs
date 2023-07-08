/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [3464], {
        942527: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ENUM_FALSE_TRUE = t.ENUM_FALSE_NOTSET_TRUE = void 0;
            t.ENUM_FALSE_NOTSET_TRUE = {
                false: "false",
                notset: "notset",
                true: "true"
            };
            t.ENUM_FALSE_TRUE = {
                false: "false",
                true: "true"
            }
        },
        463464: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(r(543269)),
                u = n(r(887757)),
                o = n(r(348926)),
                l = n(r(319)),
                i = n(r(859713)),
                d = n(r(963038)),
                c = n(r(81109)),
                s = n(r(288306)),
                f = (r(942527), r(894995)),
                p = n(r(681339)),
                m = r(744570),
                v = r(125089),
                h = r(219450),
                g = r(218953),
                y = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = Y(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var u in e)
                        if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                            var o = a ? Object.getOwnPropertyDescriptor(e, u) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, u, o) : n[u] = e[u]
                        } n.default = e, r && r.set(e, n);
                    return n
                }(r(217962)),
                b = r(875058),
                _ = r(653771),
                x = r(628707),
                S = n(r(833677)),
                C = r(742034),
                M = r(832092),
                T = r(705518),
                O = r(484105),
                A = r(328855),
                j = r(642343),
                E = n(r(283940)),
                P = r(577289),
                I = n(r(469881)),
                R = r(120455),
                D = (r(236539), r(422210), r(776097)),
                k = r(228277),
                w = n(r(904847)),
                N = n(r(229677)),
                L = r(238779),
                F = n(r(45885)),
                U = (r(548360), r(667294)),
                q = n(r(363045)),
                B = n(r(982669)),
                H = n(r(788413)),
                G = r(785893);

            function Y(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (Y = function(e) {
                    return e ? r : t
                })(e)
            }
            var W = r(76672).Mirrored(["LOADING", "DATA_SHARING_CONSENT_FORM", "CATALOG_PRODUCTS_FORM", "CUSTOM_ITEM_FORM", "ORDER_SUMMARY", "ADDITIONAL_CHARGES_FORM"]),
                z = Array.from(W.members()),
                Q = (0, s.default)((function() {
                    return y.currencyForCountryShortcode((0, _.getCountryShortcodeByPhone)((0, k.getMeUser)().user))
                }));

            function V(e, t) {
                var r = e.entryPoint,
                    n = e.order,
                    s = e.chat,
                    y = e.onBack,
                    _ = e.onSend,
                    Y = e.onCancel,
                    V = (0, H.default)(),
                    K = (0, U.useState)(W.ORDER_SUMMARY),
                    X = (0, d.default)(K, 2),
                    $ = X[0],
                    Z = X[1],
                    J = (0, U.useState)(null),
                    ee = (0, d.default)(J, 2),
                    te = ee[0],
                    re = ee[1],
                    ne = (0, U.useState)(!1),
                    ae = (0, d.default)(ne, 2),
                    ue = ae[0],
                    oe = ae[1],
                    le = (0, U.useState)((function() {
                        return function(e) {
                            if (!e) return [];
                            var t = {
                                    isCustomItem: !1,
                                    isQuantitySet: !0
                                },
                                r = e.products.map((function(e) {
                                    return new I.default((0, c.default)((0, c.default)({}, t), e))
                                }));
                            return (0, P.notifyIfAnyProductMissesPrice)(r, {}), r
                        }(n)
                    })),
                    ie = (0, d.default)(le, 2),
                    de = ie[0],
                    ce = ie[1],
                    se = (0, U.useState)({}),
                    fe = (0, d.default)(se, 2),
                    pe = fe[0],
                    me = fe[1],
                    ve = (0, U.useState)(null),
                    he = (0, d.default)(ve, 2),
                    ge = he[0],
                    ye = he[1],
                    be = (0, B.default)((function() {
                        return new S.default([], (function(e) {
                            return e.id.toString()
                        }))
                    })).current,
                    _e = g.CatalogCollection.get((0, k.getMeUser)()),
                    xe = function(e, t) {
                        me((function(r) {
                            return (0, c.default)((0, c.default)({}, r), {}, (0, i.default)({}, t, e))
                        }))
                    },
                    Se = (0, U.useMemo)((function() {
                        return de.reduce((function(e, t) {
                            var r, n;
                            return e + (null !== (r = null !== (n = t.price) && void 0 !== n ? n : pe[t.id]) && void 0 !== r ? r : 0) * t.quantity
                        }), 0)
                    }), [de, pe]),
                    Ce = (0, j.calculateFlatAmounts)({
                        orderSubtotal: Se / j.DEFAULT_OFFSET,
                        discountType: (null == ge ? void 0 : ge.discountType) || "",
                        discountText: (null == ge ? void 0 : ge.discountText) || "",
                        taxType: (null == ge ? void 0 : ge.taxType) || "",
                        taxText: (null == ge ? void 0 : ge.taxText) || "",
                        shippingText: (null == ge ? void 0 : ge.shippingText) || ""
                    }),
                    Me = (0, h.hasCatalog)(v.BusinessProfileCollection.get((0, k.getMaybeMeUser)())),
                    Te = Q(),
                    Oe = function() {
                        var e = de.some((function(e) {
                            return pe[e.id]
                        }));
                        new N.default.OrderDetailsActionsSmb({
                            orderDetailsCreationAction: N.default.ORDER_DETAILS_CREATION_ACTION.SEND_ORDER_DETAILS,
                            actionCategory: String(E.default.ORDER_DETAILS_CREATION),
                            hasCatalog: Me,
                            hasAddedPrice: e,
                            orderDetailEntryPoint: String(r)
                        }).commit();
                        var t = null != n ? n : T.OrderCollection.addOrder();
                        t.products = de.map((function(e) {
                            var t;
                            return e.price = null !== (t = e.price) && void 0 !== t ? t : pe[e.id], e.currency = Te, e
                        })), t.currency = Te, t.subtotal = Se, t.triggerItemCollectionUpdate(), (0, m.sendOrderDetailsMessageAsMerchant)({
                            order: t,
                            chat: s,
                            orderNote: "",
                            offset: j.DEFAULT_OFFSET,
                            total: Ce.total,
                            discount: Ce.discount,
                            shipping: Ce.shipping,
                            tax: Ce.tax
                        }), null == _ || _(), b.DrawerManager.closeDrawerRight()
                    },
                    Ae = (0, q.default)((function() {
                        y ? y() : (b.DrawerManager.closeDrawerRight(), null == Y || Y())
                    })),
                    je = function() {
                        ! function(e, t, r) {
                            return e ? t.length !== e.products.length || t.some((function(t, n) {
                                var a, u;
                                return t.id !== e.products[n].id || t.quantity !== e.products[n].quantity || (null !== (a = null !== (u = t.price) && void 0 !== u ? u : r[t.id]) && void 0 !== a ? a : null) !== e.products[n].price
                            })) : t.length > 0
                        }(n, de, pe) ? Ae(): x.ModalManager.open((0, G.jsx)(O.ConfirmDiscardModal, {
                            onOK: Ae
                        }))
                    },
                    Ee = function(e) {
                        V.aborted || (!0 !== e && (0, P.notifyIfAnyProductMissesPrice)(de, pe), Z(W.ORDER_SUMMARY))
                    },
                    Pe = function() {
                        Z(W.CATALOG_PRODUCTS_FORM)
                    },
                    Ie = function(e, t) {
                        var r = Number.isInteger(e) ? e : null;
                        re(r), oe(!0 === t), Z(null == r || de[r].isCustomItem ? W.CUSTOM_ITEM_FORM : W.CATALOG_PRODUCTS_FORM)
                    },
                    Re = function() {
                        Z(W.ADDITIONAL_CHARGES_FORM)
                    },
                    De = function(e, t) {
                        var r = e.length,
                            n = e.reduce((function(e, t, r) {
                                return e.set(t.id, r)
                            }), new Map);
                        return (0, l.default)(t).sort((function(e, t) {
                            var a, u;
                            return (null !== (a = n.get(e.id)) && void 0 !== a ? a : r) - (null !== (u = n.get(t.id)) && void 0 !== u ? u : r)
                        }))
                    },
                    ke = function(e) {
                        return e.map((function(e) {
                            var t;
                            return new I.default({
                                id: e.id,
                                name: e.name,
                                price: e.priceAmount1000,
                                thumbnailUrl: null === (t = e.getPreviewImage()) || void 0 === t ? void 0 : t.mediaUrl,
                                quantity: Number(be.getVal(e)),
                                isCustomItem: !1,
                                isQuantitySet: !0
                            })
                        }))
                    },
                    we = function(e, t, r) {
                        var n = null == _e ? void 0 : _e.productCollection.getProductModels(),
                            a = new Set(t.map((function(e) {
                                return e.id
                            }))),
                            u = new Set(null == n ? void 0 : n.map((function(e) {
                                return e.id
                            })));
                        return r.reduce((function(e, t) {
                            var r = a.has(t.id),
                                n = u.has(t.id);
                            return r || n ? e : e.concat(t)
                        }), e)
                    },
                    Ne = function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        Me && ce((function(t) {
                            var r = be.getSelected(),
                                n = ke(r),
                                a = we(n, r, t);
                            return e && (0, P.notifyIfAnyProductMissesPrice)(a, pe), De(t, a)
                        }))
                    },
                    Le = function(e) {
                        return be.getSelected().find((function(t) {
                            return t.id === e.id
                        }))
                    },
                    Fe = function(e, t) {
                        be.setVal(e, t)
                    },
                    Ue = function(e) {
                        if (!de[e].isCustomItem) {
                            var t = Le(de[e]);
                            t && Fe(t, 0)
                        }
                        ce((function(t) {
                            return [].concat((0, l.default)(t.slice(0, e)), (0, l.default)(t.slice(e + 1)))
                        }))
                    },
                    qe = function(e, t) {
                        if (de[e].isCustomItem) ! function(e, t) {
                            t ? ce((function(r) {
                                var n = (0, l.default)(r);
                                return n[e].quantity = t, n[e].isQuantitySet = !0, n
                            })) : Ue(e)
                        }(e, t);
                        else {
                            var r = Le(de[e]);
                            r && Fe(r, t), Ne(!1)
                        }
                    },
                    Be = function() {
                        var e = (0, o.default)(u.default.mark((function e(t) {
                            var r, n, a, o, l, i, d;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        n = null == _e ? void 0 : _e.productCollection.getProductModels(), o = (null === (r = n) || void 0 === r ? void 0 : r.length) || 0, l = 0;
                                    case 3:
                                        if (a && be.isSelected(a) || !(l < o)) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 6, g.CatalogCollection.update((0, k.getMaybeMeUser)());
                                    case 6:
                                        l = o, n = null == _e ? void 0 : _e.productCollection.getProductModels(), (a = null === (i = n) || void 0 === i ? void 0 : i.find((function(e) {
                                            return e.id === t.id
                                        }))) && Fe(a, t.quantity), o = null === (d = n) || void 0 === d ? void 0 : d.length, e.next = 3;
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
                (0, U.useEffect)((function() {
                    ! function() {
                        if (!n) return [];
                        var e, t = null == _e ? void 0 : _e.productCollection.getProductModels(),
                            r = (0, a.default)(n.products);
                        try {
                            var u = function() {
                                var r = e.value,
                                    n = null == t ? void 0 : t.find((function(e) {
                                        return e.id === r.id
                                    }));
                                n ? Fe(n, r.quantity) : Be(r)
                            };
                            for (r.s(); !(e = r.n()).done;) u()
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                    }()
                }), []);
                var He = z.indexOf($);
                return $ ? (0, G.jsx)(w.default, {
                    ref: t,
                    children: (0, G.jsx)(D.UIE, {
                        displayName: `FlowDrawer${He}`,
                        escapable: !0,
                        children: (0, G.jsx)("div", {
                            children: function(e) {
                                switch (e) {
                                    case W.CATALOG_PRODUCTS_FORM:
                                        return (0, G.jsx)(M.OrderCatalogFormDrawer, {
                                            currency: Te,
                                            productsSelection: be,
                                            orderItems: de,
                                            priceMap: pe,
                                            onBack: Ee,
                                            onAddProducts: function() {
                                                Ne(), Ee(!0)
                                            },
                                            onAddCustomItem: function() {
                                                Ie(null, !0)
                                            },
                                            onProductSelectionChange: Fe
                                        });
                                    case W.LOADING:
                                        return (0, G.jsx)(F.default, {
                                            onClose: Ee
                                        });
                                    case W.DATA_SHARING_CONSENT_FORM:
                                        break;
                                    case W.CUSTOM_ITEM_FORM:
                                        return (0, G.jsx)(A.CustomItemFormDrawer, {
                                            currency: Te,
                                            onBack: ue ? Pe : Ee,
                                            onSaveCustomItem: function(e) {
                                                var t, r, n, a, u, o;
                                                Ne(), r = (t = e).name, n = t.priceAmount1000, a = t.quantity, u = t.isQuantitySet, o = `${(0,L.getCustomItemIdPrefix)()}-${(0,p.default)()}`, ce((function(e) {
                                                    return De(e, [].concat((0, l.default)(e), [new I.default({
                                                        id: o,
                                                        name: r,
                                                        price: n,
                                                        quantity: null != a ? a : 1,
                                                        isCustomItem: !0,
                                                        isQuantitySet: u
                                                    })]))
                                                })), Ee()
                                            },
                                            customItem: de[Number.isInteger(te) ? Number(te) : -1]
                                        });
                                    case W.ORDER_SUMMARY:
                                        return (0, G.jsx)(R.OrderSummaryDrawer, {
                                            chat: s,
                                            currency: Te,
                                            priceMap: pe,
                                            orderItems: de,
                                            orderSubtotal: Se,
                                            additionalCharges: ge,
                                            flatAmounts: Ce,
                                            onPriceChange: xe,
                                            onBack: je,
                                            onSubmit: Oe,
                                            onAddItem: Me && (0, f.orderDetailsFromCatalogEnabled)() ? Pe : Ie,
                                            onAdditionalCharges: Re,
                                            onDeleteItem: Ue,
                                            onItemQuantityChange: qe
                                        });
                                    case W.ADDITIONAL_CHARGES_FORM:
                                        return (0, G.jsx)(C.AdditionalChargesFormDrawer, {
                                            currency: Te,
                                            additionalCharges: ge,
                                            subtotal: Se,
                                            onBack: Ee,
                                            onApply: function(e) {
                                                ye((function(t) {
                                                    return (0, c.default)((0, c.default)({}, t), e)
                                                })), Ee()
                                            }
                                        })
                                }
                            }($)
                        })
                    }, He)
                }) : null
            }
            var K = (0, U.forwardRef)(V);
            t.default = K
        },
        742034: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AdditionalChargesFormDrawer = function(e) {
                var t = e.currency,
                    r = e.subtotal,
                    n = e.additionalCharges,
                    c = e.onBack,
                    C = e.onApply,
                    M = (null == n ? void 0 : n.discountText) || "",
                    T = (0, y.useState)(M),
                    O = (0, a.default)(T, 2),
                    A = O[0],
                    j = O[1],
                    E = (null == n ? void 0 : n.taxText) || "",
                    P = (0, y.useState)(E),
                    I = (0, a.default)(P, 2),
                    R = I[0],
                    D = I[1],
                    k = (null == n ? void 0 : n.shippingText) || "",
                    w = (0, y.useState)(k),
                    N = (0, a.default)(w, 2),
                    L = N[0],
                    F = N[1],
                    U = (null == n ? void 0 : n.discountType) || x,
                    q = (0, y.useState)(U),
                    B = (0, a.default)(q, 2),
                    H = B[0],
                    G = B[1],
                    Y = (null == n ? void 0 : n.taxType) || S,
                    W = (0, y.useState)(Y),
                    z = (0, a.default)(W, 2),
                    Q = z[0],
                    V = z[1],
                    K = (0, y.useState)(!1),
                    X = (0, a.default)(K, 2),
                    $ = X[0],
                    Z = X[1],
                    J = (0, y.useState)(!1),
                    ee = (0, a.default)(J, 2),
                    te = ee[0],
                    re = ee[1],
                    ne = (0, y.useMemo)((function() {
                        return (0, d.additionalChargeErrorHandler)({
                            currency: t,
                            value: L
                        })
                    }), [t, L]),
                    ae = [$, te, ne].some((function(e) {
                        return e
                    }));
                return (0, _.jsxs)(m.default, {
                    children: [(0, _.jsx)(v.DrawerHeader, {
                        title: g.fbt._("Add discount, shipping or tax", null, {
                            hk: "nPDUK"
                        }),
                        type: v.DRAWER_HEADER_TYPE.SMALL,
                        onBack: M !== A || E !== R || k !== L || U !== H || Y !== Q ? function() {
                            o.ModalManager.open((0, _.jsx)(i.ConfirmDiscardModal, {
                                onOK: c
                            }))
                        } : c,
                        focusBackOrCancel: !0
                    }), (0, _.jsxs)(h.default, {
                        className: (0, b.default)(p.uiPadding.all16),
                        children: [(0, _.jsx)(l.AdditionalChargesTextInput, {
                            text: A,
                            testid: "additional-charges-discount-input",
                            label: g.fbt._("Discount", null, {
                                hk: "3acZrp"
                            }),
                            symbol: H,
                            currency: t,
                            priceValue: r,
                            setText: j,
                            setError: Z,
                            setSymbol: G
                        }), (0, _.jsx)(f.RichTextField, {
                            legacyImplementation: !0,
                            value: L,
                            testid: "additional-charges-shipping-input",
                            placeholder: g.fbt._("Shipping ({currency_symbol})", [g.fbt._param("currency_symbol", (0, u.formatAmount1000ToParts)(t, 0).symbol)], {
                                hk: "H2WDY"
                            }),
                            onChange: F,
                            theme: "small",
                            maxLength: 10,
                            customStyleThemes: ["desaturated"],
                            error: ne
                        }), (0, _.jsx)(l.AdditionalChargesTextInput, {
                            text: R,
                            testid: "additional-charges-tax-input",
                            label: g.fbt._("Tax", null, {
                                hk: "2r5wzT"
                            }),
                            symbol: Q,
                            currency: t,
                            priceValue: r,
                            setText: D,
                            setError: re,
                            setSymbol: V
                        }), (0, _.jsx)(s.OrderApplyChangesButton, {
                            disabled: ae,
                            testid: "apply-additional-costs-button",
                            title: g.fbt._("Apply", null, {
                                hk: "3E5Tq7"
                            }),
                            onClick: function() {
                                return C({
                                    discountText: A,
                                    taxText: R,
                                    shippingText: L,
                                    discountType: H,
                                    taxType: Q
                                })
                            }
                        })]
                    })]
                })
            };
            var a = n(r(963038)),
                u = r(217962),
                o = r(628707),
                l = r(833958),
                i = r(484105),
                d = r(46968),
                c = r(642343),
                s = r(964823),
                f = r(983557),
                p = r(71867),
                m = n(r(829723)),
                v = r(952991),
                h = n(r(849788)),
                g = r(548360),
                y = r(667294),
                b = n(r(156720)),
                _ = r(785893),
                x = c.PERCENTAGE_SYMBOL,
                S = c.PERCENTAGE_SYMBOL
        },
        833958: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AdditionalChargesTextInput = function(e) {
                var t = e.text,
                    r = e.label,
                    n = e.symbol,
                    m = e.testid,
                    v = e.currency,
                    h = e.priceValue,
                    g = e.setText,
                    y = e.setError,
                    b = e.setSymbol,
                    _ = (0, d.useMemo)((function() {
                        var e = (0, u.additionalChargeErrorHandler)({
                            label: r,
                            currency: v,
                            fieldType: n,
                            maxFlatValue: h / o.DEFAULT_OFFSET,
                            enablePercentValueCheck: !0,
                            value: t
                        });
                        return y(Boolean(e)), e
                    }), [t, r, n, v, y, h]);
                return (0, s.jsxs)("div", {
                    className: (0, c.default)(f),
                    children: [(0, s.jsx)(l.RichTextField, {
                        legacyImplementation: !0,
                        value: t,
                        testid: m,
                        placeholder: i.fbt._("{input_label} ({currency_or_percentage})", [i.fbt._param("input_label", r), i.fbt._param("currency_or_percentage", n)], {
                            hk: "vf1Ko"
                        }),
                        onChange: function(e) {
                            return g(e)
                        },
                        theme: "small",
                        maxLength: 10,
                        customStyleThemes: ["desaturated"],
                        error: _
                    }), (0, s.jsx)("div", {
                        className: (0, c.default)(p),
                        children: (0, s.jsx)(a.OrderDetailAmountTypeSelector, {
                            currency: v,
                            value: n,
                            onChange: function(e) {
                                var t = e.value;
                                return b(t)
                            }
                        })
                    })]
                })
            };
            var a = r(261499),
                u = r(46968),
                o = r(642343),
                l = r(983557),
                i = r(548360),
                d = r(667294),
                c = n(r(156720)),
                s = r(785893),
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
        832092: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OrderCatalogFormDrawer = function(e) {
                var t = e.currency,
                    r = e.productsSelection,
                    n = e.orderItems,
                    T = e.priceMap,
                    O = e.onBack,
                    A = e.onAddProducts,
                    j = e.onAddCustomItem,
                    E = e.onProductSelectionChange,
                    P = (0, b.useState)(!1),
                    I = (0, a.default)(P, 2),
                    R = I[0],
                    D = I[1],
                    k = (0, x.default)(),
                    w = (0, S.default)((function() {
                        return new l.default
                    })),
                    N = r.getSelected().reduce((function(e, t) {
                        var n, a;
                        return e + (null !== (n = null !== (a = t.priceAmount1000) && void 0 !== a ? a : T[t.id.toString()]) && void 0 !== n ? n : 0) * Number(r.getVal(t))
                    }), 0),
                    L = n.filter((function(e) {
                        return e.isCustomItem
                    })).reduce((function(e, t) {
                        return e + t.price * t.quantity
                    }), 0);
                return (0, C.jsxs)(m.default, {
                    children: [(0, C.jsx)(h.DrawerHeader, {
                        title: y.fbt._("Add items", null, {
                            hk: "2U1Vru"
                        }),
                        type: h.DRAWER_HEADER_TYPE.SMALL,
                        onBack: R ? function() {
                            i.ModalManager.open((0, C.jsx)(s.ConfirmDiscardModal, {
                                onOK: O
                            }))
                        } : O,
                        focusBackOrCancel: !0
                    }), (0, C.jsxs)(v.default, {
                        children: [(0, C.jsxs)(g.default, {
                            theme: "expand-height",
                            xstyle: M.drawerSection,
                            children: [(0, u.orderDetailsCustomItemEnabled)() && (0, C.jsxs)(C.Fragment, {
                                children: [(0, C.jsx)(d.AddOrderItem, {
                                    title: y.fbt._("Create new item", null, {
                                        hk: "2GmSAs"
                                    }),
                                    onClick: j
                                }), (0, C.jsx)("hr", {
                                    className: (0, _.default)(M.catalogBar, p.uiMargin.vert0)
                                })]
                            }), (0, C.jsx)("p", {
                                className: (0, _.default)(M.catalogTitleText, p.uiPadding.start16, p.uiPadding.vert10),
                                children: y.fbt._("Catalog items", null, {
                                    hk: "4chzUe"
                                })
                            }), (0, C.jsx)(c.default, {
                                className: (0, _.default)(M.catalogProductsList),
                                productsSelection: r,
                                orderItems: n,
                                flatListController: w.current,
                                onProductSelectChange: function(e, t) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                    E(e, t), r || R || D(!0), k()
                                }
                            })]
                        }), (0, C.jsx)(f.OrderTotalPrice, {
                            xstyle: [p.uiPadding.all16, p.uiMargin.top10],
                            visible: !0,
                            disabled: !R,
                            totalPrice: (0, o.formatAmount1000)(t, N + L),
                            testid: "save-products-button",
                            onConfirm: A,
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
            var a = n(r(963038)),
                u = r(894995),
                o = r(217962),
                l = n(r(979163)),
                i = r(628707),
                d = r(886146),
                c = n(r(125946)),
                s = r(484105),
                f = r(964823),
                p = r(71867),
                m = n(r(829723)),
                v = n(r(544978)),
                h = r(952991),
                g = n(r(849788)),
                y = r(548360),
                b = r(667294),
                _ = n(r(156720)),
                x = n(r(802418)),
                S = n(r(982669)),
                C = r(785893),
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
        107077: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CatalogFormProduct = function(e) {
                var t = e.product,
                    r = e.productsSelection,
                    n = e.onProductSelectChange,
                    c = Number(r.getVal(t)) || 0,
                    s = (0, i.useState)(!1),
                    f = (0, a.default)(s, 2),
                    p = f[0],
                    m = f[1];
                return (0, d.jsx)("div", {
                    onMouseEnter: function() {
                        return m(!0)
                    },
                    onMouseLeave: function() {
                        return m(!1)
                    },
                    children: (0, d.jsx)(o.default, {
                        product: t,
                        detail: (p || r.isSelected(t)) && (0, d.jsx)(u.default, {
                            quantity: c,
                            quantityTitle: l.fbt._("Items in order", null, {
                                hk: "35Mpfd"
                            }),
                            isCollapsed: !p,
                            onAddOneClick: function() {
                                return n(t, c + 1)
                            },
                            onRemoveOneClick: function() {
                                return n(t, c - 1)
                            }
                        }),
                        managedFocus: !0,
                        theme: "product-add-to-order"
                    })
                })
            };
            var a = n(r(963038)),
                u = n(r(684492)),
                o = n(r(991417)),
                l = r(548360),
                i = r(667294),
                d = r(785893)
        },
        125946: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.className,
                    r = e.productsSelection,
                    n = e.orderItems,
                    S = e.flatListController,
                    C = e.onProductSelectChange,
                    M = (0, _.default)(),
                    T = (0, g.default)(),
                    O = (0, h.default)(T, 100),
                    A = l.CatalogCollection.assertGet((0, m.getMaybeMeUser)()),
                    j = (0, v.useState)(!1),
                    E = (0, o.default)(j, 2),
                    P = E[0],
                    I = E[1],
                    R = (0, v.useState)(0),
                    D = (0, o.default)(R, 2),
                    k = D[0],
                    w = D[1],
                    N = (0, v.useState)(!1),
                    L = (0, o.default)(N, 2),
                    F = L[0],
                    U = L[1],
                    q = function() {
                        var e = new Set(n.map((function(e) {
                            return e.id
                        })));
                        return A.productCollection.getProductModels().filter((function(t) {
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
                            var t = n.find((function(t) {
                                return t.id === e.product.id
                            }));
                            void 0 !== t && C(e.product, Number(t.quantity), !0)
                        }))
                    },
                    H = function() {
                        var e = (0, u.default)(a.default.mark((function e() {
                            var t, r, n, u;
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!F) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (A.afterCursor) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        return t = A.productCollection.getProductModels().length, I(!0), w(t), e.prev = 7, e.next = 10, l.CatalogCollection.update((0, m.getMaybeMeUser)());
                                    case 10:
                                        if (r = e.sent, !M.aborted) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 13:
                                        if (I(!1), n = Array.isArray(r) ? r[0] : r, u = n.productCollection.getProductModels().length, B(q().slice(t)), u === k && U(!0), !(t * p.PRODUCT_LIST_ITEM_HEIGHT < window.innerHeight)) {
                                            e.next = 20;
                                            break
                                        }
                                        return e.abrupt("return", H());
                                    case 20:
                                        e.next = 26;
                                        break;
                                    case 22:
                                        e.prev = 22, e.t0 = e.catch(7), I(!1), U(!0);
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
                }), []), (0, y.useListener)(A.productCollection, "add", O);
                var G = (0, b.default)((function(e) {
                    P || e.scrollTop + s.SCROLL_FUDGE > e.scrollHeight - e.clientHeight && H()
                }), 100);
                return (0, x.jsxs)(d.default, {
                    className: t,
                    flatListControllers: [S],
                    onScroll: function(e) {
                        e.currentTarget && G(e.currentTarget)
                    },
                    children: [(0, x.jsx)(i.FlatList, {
                        flatListController: S,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: q(),
                        renderItem: function(e) {
                            var t = e.product;
                            return (0, x.jsx)(f.CatalogFormProduct, {
                                product: t,
                                productsSelection: r,
                                onProductSelectChange: C
                            })
                        },
                        defaultItemHeight: p.PRODUCT_LIST_ITEM_HEIGHT
                    }), P && (0, x.jsx)(c.default, {})]
                })
            };
            var a = n(r(887757)),
                u = n(r(348926)),
                o = n(r(963038)),
                l = r(218953),
                i = r(577407),
                d = n(r(877576)),
                c = n(r(399447)),
                s = r(295769),
                f = r(107077),
                p = r(902011),
                m = r(228277),
                v = r(667294),
                h = n(r(869622)),
                g = n(r(802418)),
                y = r(779740),
                b = n(r(32594)),
                _ = n(r(788413)),
                x = r(785893)
        },
        484105: (e, t, r) => {
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
                        n.ModalManager.close(), t()
                    },
                    okText: o.fbt._("Discard", null, {
                        hk: "3etb6C"
                    }),
                    onCancel: function() {
                        return n.ModalManager.close()
                    },
                    children: (0, l.jsx)(a.TextDiv, {
                        theme: "muted",
                        children: o.fbt._("If you close this, your draft will be discarded.", null, {
                            hk: "4G5DVj"
                        })
                    })
                })
            };
            var n = r(628707),
                a = r(558288),
                u = r(404186),
                o = r(548360),
                l = r(785893)
        },
        328855: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CustomItemFormDrawer = function(e) {
                var t = e.currency,
                    r = e.customItem,
                    n = e.onBack,
                    u = e.onSaveCustomItem,
                    S = (0, y.useState)(null == r ? void 0 : r.name),
                    C = (0, a.default)(S, 2),
                    M = C[0],
                    T = C[1],
                    O = (0, y.useState)(Number.isInteger(null == r ? void 0 : r.price) ? String(Number(null == r ? void 0 : r.price) / 1e3) : null),
                    A = (0, a.default)(O, 2),
                    j = A[0],
                    E = A[1],
                    P = (0, y.useState)(null == r ? void 0 : r.price),
                    I = (0, a.default)(P, 2),
                    R = I[0],
                    D = I[1],
                    k = (0, y.useState)((null == r ? void 0 : r.isQuantitySet) ? r.quantity : null),
                    w = (0, a.default)(k, 2),
                    N = w[0],
                    L = w[1],
                    F = (0, y.useState)((null == r ? void 0 : r.isQuantitySet) ? String(r.quantity) : null),
                    U = (0, a.default)(F, 2),
                    q = U[0],
                    B = U[1],
                    H = (0, y.useMemo)((function() {
                        return function(e) {
                            if (null == e) return "";
                            var t = String(g.fbt._("Add a title", null, {
                                hk: "7Lm6B"
                            }));
                            return "" === e.trim() ? t : ""
                        }(M)
                    }), [M]),
                    G = (0, y.useMemo)((function() {
                        return function(e, t) {
                            if (null == t) return "";
                            var r = String(g.fbt._("Enter a valid price", null, {
                                hk: "4yb1Sg"
                            }));
                            return "" !== t.trim() && (0, o.validatePriceString)(e, t, c.MIN_PRICE, c.MAX_PRICE) ? "" : r
                        }(t, j)
                    }), [t, j]),
                    Y = (0, y.useMemo)((function() {
                        return function(e) {
                            if (null == e) return "";
                            var t = String(g.fbt._("Enter a valid quantity", null, {
                                hk: "u6SoG"
                            }));
                            return x(Number(e)) ? "" : t
                        }(q)
                    }), [q]),
                    W = (z = r, Q = M, V = R, K = q, X = (null == z ? void 0 : z.isQuantitySet) ? Number(K) !== z.quantity : null != K, (null == z ? void 0 : z.name) !== Q || (null == z ? void 0 : z.price) !== V || X);
                var z, Q, V, K, X;
                return (0, _.jsxs)(p.default, {
                    children: [(0, _.jsx)(v.DrawerHeader, {
                        title: r ? g.fbt._("Update item", null, {
                            hk: "1TL07p"
                        }) : g.fbt._("Create new item", null, {
                            hk: "4xRwlm"
                        }),
                        type: v.DRAWER_HEADER_TYPE.SMALL,
                        onBack: W ? function() {
                            l.ModalManager.open((0, _.jsx)(i.ConfirmDiscardModal, {
                                onOK: n
                            }))
                        } : n,
                        focusBackOrCancel: !0
                    }), (0, _.jsx)(m.default, {
                        children: (0, _.jsxs)(h.default, {
                            className: (0, b.default)(f.uiPadding.all16),
                            children: [(0, _.jsx)(s.RichTextField, {
                                legacyImplementation: !0,
                                testid: "custom-item-edit-name-input",
                                value: M,
                                placeholder: g.fbt._("Item name", null, {
                                    hk: "1TMRR7"
                                }),
                                onChange: function(e) {
                                    T(e)
                                },
                                theme: "small",
                                customStyleThemes: ["desaturated"],
                                maxLength: 150,
                                error: H
                            }), (0, _.jsx)(s.RichTextField, {
                                legacyImplementation: !0,
                                testid: "custom-item-edit-price-input",
                                value: j,
                                placeholder: g.fbt._("Price {symbol}", [g.fbt._param("symbol", (0, o.formatAmount1000ToParts)(t, 0).symbol)], {
                                    hk: "3jcGcb"
                                }),
                                onChange: function(e) {
                                    var r = (0, o.valueFromString)(t, e);
                                    D(r), E(e)
                                },
                                theme: "small",
                                maxLength: 30,
                                customStyleThemes: ["desaturated"],
                                error: G
                            }), (0, _.jsx)(s.RichTextField, {
                                legacyImplementation: !0,
                                testid: "custom-item-edit-quantity-input",
                                value: q,
                                placeholder: g.fbt._("Quantity (Optional)", null, {
                                    hk: "4swiuO"
                                }),
                                onChange: function(e) {
                                    var t = "" === e ? null : Number(e);
                                    x(t) || (t = null), L(t), B("" === e ? null : e)
                                },
                                theme: "small",
                                maxLength: 30,
                                customStyleThemes: ["desaturated"],
                                error: Y
                            }), (0, _.jsx)(d.OrderApplyChangesButton, {
                                title: r ? g.fbt._("Update Order", null, {
                                    hk: "HjU1X"
                                }) : g.fbt._("Add to Order", null, {
                                    hk: "3p1U18"
                                }),
                                disabled: null == M || null == j || !(!r || W) || [H, G, Y].some((function(e) {
                                    return e
                                })),
                                onClick: function() {
                                    var e = {
                                        name: M,
                                        priceAmount1000: +R,
                                        quantity: N,
                                        isQuantitySet: Number.isInteger(N)
                                    };
                                    u(e)
                                },
                                testid: "save-custom-item-button"
                            })]
                        })
                    })]
                })
            };
            var a = n(r(963038)),
                u = r(771164),
                o = r(217962),
                l = r(628707),
                i = r(484105),
                d = r(964823),
                c = r(320949),
                s = r(983557),
                f = r(71867),
                p = n(r(829723)),
                m = n(r(544978)),
                v = r(952991),
                h = n(r(849788)),
                g = r(548360),
                y = r(667294),
                b = n(r(156720)),
                _ = r(785893);

            function x(e) {
                return Number.isInteger(e) && +e > 0 && +e <= u.CART_ITEM_MAX_QUANTITY
            }
        },
        261499: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OrderDetailAmountTypeSelector = function(e) {
                var t = e.value,
                    r = e.onChange,
                    n = e.currency,
                    c = a.formatLocalSymbol(n),
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
                        label: l.fbt._("by Flat amount ({currency-symbol})", [l.fbt._param("currency-symbol", c)], {
                            hk: "duPhj"
                        }),
                        value: c
                    }],
                    p = (0, i.useMemo)((function() {
                        return f.findIndex((function(e) {
                            return e.value === t
                        }))
                    }), []);
                return (0, d.jsx)(o.default, {
                    "aria-label": s,
                    options: f,
                    defaultIndex: p,
                    onChange: r
                })
            };
            var a = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = c(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var u in e)
                        if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                            var o = a ? Object.getOwnPropertyDescriptor(e, u) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, u, o) : n[u] = e[u]
                        } n.default = e, r && r.set(e, n);
                    return n
                }(r(217962)),
                u = r(642343),
                o = n(r(499801)),
                l = r(548360),
                i = r(667294),
                d = r(785893);

            function c(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (c = function(e) {
                    return e ? r : t
                })(e)
            }
        },
        499801: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.defaultIndex,
                    r = void 0 === t ? 0 : t,
                    n = e.options,
                    v = e.onChange,
                    h = e["aria-label"],
                    g = (0, s.useRef)(null),
                    y = (0, s.useState)(!1),
                    b = (0, a.default)(y, 2),
                    _ = b[0],
                    x = b[1],
                    S = (0, s.useState)(r),
                    C = (0, a.default)(S, 2),
                    M = C[0],
                    T = C[1],
                    O = n.map((function(e, t) {
                        var r = e.id,
                            n = e.label;
                        return (0, p.jsx)(l.DropdownItem, {
                            testid: `mi-${r}`,
                            action: function() {
                                v(e), T(t)
                            },
                            children: (0, p.jsx)("div", {
                                className: (0, f.default)(m),
                                role: "button",
                                "aria-label": n,
                                children: t === M ? (0, p.jsx)(i.TextSpan, {
                                    weight: "bold",
                                    children: n
                                }) : n
                            })
                        }, r)
                    }));
                return (0, p.jsxs)("div", {
                    ref: g,
                    children: [(0, p.jsx)(u.default, {
                        "aria-label": h,
                        PostfixIcon: o.DownIcon,
                        label: n[M].value,
                        onClick: function() {
                            return x((function(e) {
                                return !e
                            }))
                        }
                    }), _ && g.current && (0, p.jsx)(d.UIE, {
                        displayName: "ValuePicker",
                        escapable: !0,
                        popable: !0,
                        dismissOnWindowResize: !0,
                        requestDismiss: function() {
                            return x(!1)
                        },
                        children: (0, p.jsx)(c.default, {
                            contextMenu: {
                                menu: O,
                                anchor: g.current
                            }
                        })
                    })]
                })
            };
            var a = n(r(963038)),
                u = n(r(270111)),
                o = r(123212),
                l = r(116384),
                i = r(558288),
                d = r(776097),
                c = n(r(728056)),
                s = r(667294),
                f = n(r(156720)),
                p = r(785893),
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
        577289: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getErrorMsgFromProducts = l, t.notifyIfAnyProductMissesPrice = void 0;
            var n = r(236539),
                a = r(422210),
                u = r(548360),
                o = r(785893);

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
                var r = l(e.reduce((function(e, r) {
                    var n, a = null !== (n = r.price) && void 0 !== n ? n : t[r.id];
                    return Number.isInteger(a) || e.push(r.name || ""), e
                }), []));
                r && a.ToastManager.open((0, o.jsx)(n.Toast, {
                    duration: 1e4,
                    msg: r,
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
        45885: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(208188),
                u = r(96293),
                o = n(r(829723)),
                l = n(r(544978)),
                i = r(952991),
                d = r(548360),
                c = r(667294),
                s = (n(r(156720)), r(785893)),
                f = {
                    spinnerWrapper: {
                        height: "ppled2lx"
                    }
                },
                p = d.fbt._("Loading", null, {
                    hk: "2jCIXy"
                });

            function m(e, t) {
                var r = e.title,
                    n = void 0 === r ? p : r,
                    d = e.onClose,
                    c = void 0 === d ? function() {} : d;
                return (0, s.jsxs)(o.default, {
                    ref: t,
                    testid: "loading-drawer",
                    children: [(0, s.jsx)(i.DrawerHeader, {
                        title: n,
                        type: i.DRAWER_HEADER_TYPE.LARGE,
                        onCancel: c
                    }), (0, s.jsx)(l.default, {
                        children: (0, s.jsx)(a.FlexColumn, {
                            align: "center",
                            justify: "center",
                            xstyle: f.spinnerWrapper,
                            children: (0, s.jsx)(u.Spinner, {
                                color: "default",
                                size: 48,
                                stroke: 6
                            })
                        })
                    })]
                })
            }
            var v = (0, c.forwardRef)(m);
            t.default = v
        }
    }
]);