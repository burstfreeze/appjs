/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [3464], {
        417162: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toArray = function(e) {
                if (null == e) return [];
                if (Array.isArray(e)) return (0, u.default)(e);
                return [e]
            };
            var u = r(n(319))
        },
        463464: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var u = r(n(543269)),
                i = r(n(887757)),
                o = r(n(348926)),
                l = r(n(319)),
                a = r(n(859713)),
                c = r(n(963038)),
                d = r(n(81109)),
                s = r(n(288306)),
                f = n(894995),
                p = r(n(681339)),
                m = n(744570),
                v = n(125089),
                h = n(219450),
                g = n(218953),
                b = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = W(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        u = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = u ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, i, o) : r[i] = e[i]
                        } r.default = e, n && n.set(e, r);
                    return r
                }(n(217962)),
                x = n(875058),
                y = n(653771),
                S = n(628707),
                M = r(n(833677)),
                C = n(742034),
                j = n(832092),
                w = n(705518),
                I = n(484105),
                _ = n(328855),
                P = n(642343),
                O = n(501883),
                R = r(n(283940)),
                k = n(161824),
                T = n(577289),
                A = r(n(469881)),
                D = n(120455),
                E = n(776097),
                L = n(228277),
                F = r(n(904847)),
                N = n(447853),
                B = n(667294),
                q = r(n(21843)),
                z = r(n(279781)),
                H = r(n(672900)),
                U = n(785893);

            function W(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (W = function(e) {
                    return e ? n : t
                })(e)
            }
            var G = n(76672).Mirrored(["CATALOG_PRODUCTS_FORM", "CUSTOM_ITEM_FORM", "ORDER_SUMMARY", "ADDITIONAL_CHARGES_FORM"]),
                Y = Array.from(G.members()),
                V = (0, s.default)((function() {
                    return b.currencyForCountryShortcode((0, y.getCountryShortcodeByPhone)((0, L.getMeUser)().user))
                }));

            function Q(e, t) {
                var n, r, s = e.entryPoint,
                    b = e.order,
                    y = e.chat,
                    W = e.onBack,
                    Q = e.onSend,
                    K = e.onCancel,
                    X = e.onDeclineOrder,
                    $ = (0, H.default)(),
                    Z = (0, B.useState)(G.ORDER_SUMMARY),
                    J = (0, c.default)(Z, 2),
                    ee = J[0],
                    te = J[1],
                    ne = (0, B.useState)(null),
                    re = (0, c.default)(ne, 2),
                    ue = re[0],
                    ie = re[1],
                    oe = (0, B.useState)(!1),
                    le = (0, c.default)(oe, 2),
                    ae = le[0],
                    ce = le[1],
                    de = (0, B.useState)((function() {
                        return function(e) {
                            if (!e) return [];
                            var t = {
                                    isCustomItem: !1,
                                    isQuantitySet: !0
                                },
                                n = e.products.map((function(e) {
                                    return new A.default((0, d.default)((0, d.default)({}, t), e))
                                }));
                            return (0, T.notifyIfAnyProductMissesPrice)(n, {}), n
                        }(b)
                    })),
                    se = (0, c.default)(de, 2),
                    fe = se[0],
                    pe = se[1],
                    me = (0, B.useState)({}),
                    ve = (0, c.default)(me, 2),
                    he = ve[0],
                    ge = ve[1],
                    be = (0, B.useState)(null),
                    xe = (0, c.default)(be, 2),
                    ye = xe[0],
                    Se = xe[1],
                    Me = (0, z.default)((function() {
                        return new M.default([], (function(e) {
                            return e.id.toString()
                        }))
                    })).current,
                    Ce = g.CatalogCollection.get((0, L.getMeUser)()),
                    je = function(e, t) {
                        ge((function(n) {
                            return (0, d.default)((0, d.default)({}, n), {}, (0, a.default)({}, t, e))
                        }))
                    },
                    we = (0, B.useMemo)((function() {
                        return fe.reduce((function(e, t) {
                            var n, r;
                            return e + (null !== (n = null !== (r = t.price) && void 0 !== r ? r : he[t.id]) && void 0 !== n ? n : 0) * t.quantity
                        }), 0)
                    }), [fe, he]),
                    Ie = (0, P.calculateFlatAmounts)({
                        orderSubtotal: we / P.DEFAULT_OFFSET,
                        discountType: (null == ye ? void 0 : ye.discountType) || "",
                        discountText: (null == ye ? void 0 : ye.discountText) || "",
                        taxType: (null == ye ? void 0 : ye.taxType) || "",
                        taxText: (null == ye ? void 0 : ye.taxText) || "",
                        shippingText: (null == ye ? void 0 : ye.shippingText) || ""
                    }),
                    _e = (0, h.hasCatalog)(v.BusinessProfileCollection.get((0, L.getMaybeMeUser)())),
                    Pe = V(),
                    Oe = (0, f.getOrdersExpansionAllowedCurrencies)(y.contact.id.user),
                    Re = null !== (n = null === (r = fe.at(0)) || void 0 === r ? void 0 : r.currency) && void 0 !== n ? n : Pe,
                    ke = function() {
                        var e = fe.some((function(e) {
                            return he[e.id]
                        }));
                        new k.OrderDetailsActionsSmbWamEvent({
                            orderDetailsCreationAction: N.ORDER_DETAILS_CREATION_ACTION.SEND_ORDER_DETAILS,
                            actionCategory: String(R.default.ORDER_DETAILS_CREATION),
                            hasCatalog: _e,
                            hasAddedPrice: e,
                            orderDetailEntryPoint: String(s)
                        }).commit();
                        var t = null != b ? b : w.OrderCollection.addOrder();
                        t.products = fe.map((function(e) {
                            var t, n;
                            return e.price = null !== (t = e.price) && void 0 !== t ? t : he[e.id], e.currency = null !== (n = e.currency) && void 0 !== n ? n : Pe, e
                        })), t.currency = Re, t.subtotal = we, t.triggerItemCollectionUpdate(), (0, m.sendOrderDetailsMessageAsMerchant)({
                            order: t,
                            chat: y,
                            orderNote: "",
                            offset: P.DEFAULT_OFFSET,
                            total: Ie.total,
                            discount: Ie.discount,
                            shipping: Ie.shipping,
                            tax: Ie.tax
                        }), null == Q || Q(), x.DrawerManager.closeDrawerRight()
                    },
                    Te = (0, q.default)((function() {
                        W ? W() : (x.DrawerManager.closeDrawerRight(), null == K || K())
                    })),
                    Ae = function() {
                        ! function(e, t, n) {
                            return e ? t.length !== e.products.length || t.some((function(t, r) {
                                var u, i;
                                return t.id !== e.products[r].id || t.quantity !== e.products[r].quantity || (null !== (u = null !== (i = t.price) && void 0 !== i ? i : n[t.id]) && void 0 !== u ? u : null) !== e.products[r].price
                            })) : t.length > 0
                        }(b, fe, he) ? Te(): S.ModalManager.open((0, U.jsx)(I.ConfirmDiscardModal, {
                            onOK: Te
                        }))
                    },
                    De = function(e) {
                        $.aborted || (!0 !== e && (0, T.notifyIfAnyProductMissesPrice)(fe, he), te(G.ORDER_SUMMARY))
                    },
                    Ee = function() {
                        te(G.CATALOG_PRODUCTS_FORM)
                    },
                    Le = function(e, t) {
                        var n = Number.isInteger(e) ? e : null;
                        ie(n), ce(!0 === t), te(null == n || fe[n].isCustomItem ? G.CUSTOM_ITEM_FORM : G.CATALOG_PRODUCTS_FORM)
                    },
                    Fe = function() {
                        te(G.ADDITIONAL_CHARGES_FORM)
                    },
                    Ne = function(e, t) {
                        var n = e.length,
                            r = e.reduce((function(e, t, n) {
                                return e.set(t.id, n)
                            }), new Map);
                        return (0, l.default)(t).sort((function(e, t) {
                            var u, i;
                            return (null !== (u = r.get(e.id)) && void 0 !== u ? u : n) - (null !== (i = r.get(t.id)) && void 0 !== i ? i : n)
                        }))
                    },
                    Be = function(e) {
                        return e.map((function(e) {
                            var t;
                            return new A.default({
                                id: e.id,
                                name: e.name,
                                price: e.priceAmount1000,
                                thumbnailUrl: null === (t = e.getPreviewImage()) || void 0 === t ? void 0 : t.mediaUrl,
                                quantity: Number(Me.getVal(e)),
                                isCustomItem: !1,
                                isQuantitySet: !0
                            })
                        }))
                    },
                    qe = function(e, t, n) {
                        var r = null == Ce ? void 0 : Ce.productCollection.getProductModels(),
                            u = new Set(t.map((function(e) {
                                return e.id
                            }))),
                            i = new Set(null == r ? void 0 : r.map((function(e) {
                                return e.id
                            })));
                        return n.reduce((function(e, t) {
                            var n = u.has(t.id),
                                r = i.has(t.id);
                            return n || r ? e : e.concat(t)
                        }), e)
                    },
                    ze = function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        _e && pe((function(t) {
                            var n = Me.getSelected(),
                                r = Be(n),
                                u = qe(r, n, t);
                            return e && (0, T.notifyIfAnyProductMissesPrice)(u, he), Ne(t, u)
                        }))
                    },
                    He = function(e) {
                        return Me.getSelected().find((function(t) {
                            return t.id === e.id
                        }))
                    },
                    Ue = function(e, t) {
                        Me.setVal(e, t)
                    },
                    We = function(e) {
                        if (!fe[e].isCustomItem) {
                            var t = He(fe[e]);
                            t && Ue(t, 0)
                        }
                        pe((function(t) {
                            return [].concat((0, l.default)(t.slice(0, e)), (0, l.default)(t.slice(e + 1)))
                        }))
                    },
                    Ge = function(e, t) {
                        if (fe[e].isCustomItem) ! function(e, t) {
                            t ? pe((function(n) {
                                var r = (0, l.default)(n);
                                return r[e].quantity = t, r[e].isQuantitySet = !0, r
                            })) : We(e)
                        }(e, t);
                        else {
                            var n = He(fe[e]);
                            n && Ue(n, t), ze(!1)
                        }
                    },
                    Ye = function() {
                        var e = (0, o.default)(i.default.mark((function e(t) {
                            var n, r, u, o, l, a, c;
                            return i.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        r = null == Ce ? void 0 : Ce.productCollection.getProductModels(), o = (null === (n = r) || void 0 === n ? void 0 : n.length) || 0, l = 0;
                                    case 3:
                                        if (u && Me.isSelected(u) || !(l < o)) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 6, g.CatalogCollection.update((0, L.getMaybeMeUser)());
                                    case 6:
                                        l = o, r = null == Ce ? void 0 : Ce.productCollection.getProductModels(), (u = null === (a = r) || void 0 === a ? void 0 : a.find((function(e) {
                                            return e.id === t.id
                                        }))) && Ue(u, t.quantity), o = null === (c = r) || void 0 === c ? void 0 : c.length, e.next = 3;
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
                (0, B.useEffect)((function() {
                    ! function() {
                        if (!b) return [];
                        var e, t = null == Ce ? void 0 : Ce.productCollection.getProductModels(),
                            n = (0, u.default)(b.products);
                        try {
                            var r = function() {
                                var n = e.value,
                                    r = null == t ? void 0 : t.find((function(e) {
                                        return e.id === n.id
                                    }));
                                r ? Ue(r, n.quantity) : Ye(n)
                            };
                            for (n.s(); !(e = n.n()).done;) r()
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                    }()
                }), []);
                var Ve = Y.indexOf(ee);
                return ee ? (0, U.jsx)(F.default, {
                    ref: t,
                    children: (0, U.jsx)(E.UIE, {
                        displayName: `FlowDrawer${Ve}`,
                        escapable: !0,
                        children: (0, U.jsx)("div", {
                            children: function(e) {
                                switch (e) {
                                    case G.CATALOG_PRODUCTS_FORM:
                                        return (0, U.jsx)(j.OrderCatalogFormDrawer, {
                                            currency: Pe,
                                            productsSelection: Me,
                                            orderItems: fe,
                                            priceMap: he,
                                            onBack: De,
                                            onAddProducts: function() {
                                                ze(), De(!0)
                                            },
                                            onAddCustomItem: function() {
                                                Le(null, !0)
                                            },
                                            onProductSelectionChange: Ue
                                        });
                                    case G.CUSTOM_ITEM_FORM:
                                        return (0, U.jsx)(_.CustomItemFormDrawer, {
                                            currency: Re,
                                            eligibleCurrencies: 0 === fe.length && 0 === Me.getSelected().length ? Oe : [],
                                            onBack: ae ? Ee : De,
                                            onSaveCustomItem: function(e) {
                                                var t, n, r, u, i, o, a;
                                                ze(), n = (t = e).name, r = t.priceAmount1000, u = t.quantity, i = t.isQuantitySet, o = t.currency, a = `${(0,O.getCustomItemIdPrefix)()}-${(0,p.default)()}`, pe((function(e) {
                                                    return Ne(e, [].concat((0, l.default)(e), [new A.default({
                                                        id: a,
                                                        name: n,
                                                        price: r,
                                                        quantity: null != u ? u : 1,
                                                        isCustomItem: !0,
                                                        isQuantitySet: i,
                                                        currency: o
                                                    })]))
                                                })), De()
                                            },
                                            customItem: fe[Number.isInteger(ue) ? Number(ue) : -1]
                                        });
                                    case G.ORDER_SUMMARY:
                                        return (0, U.jsx)(D.OrderSummaryDrawer, {
                                            chat: y,
                                            currency: Re,
                                            priceMap: he,
                                            orderItems: fe,
                                            orderSubtotal: we,
                                            additionalCharges: ye,
                                            flatAmounts: Ie,
                                            onPriceChange: je,
                                            onBack: Ae,
                                            onSubmit: ke,
                                            onAddItem: _e && (0, f.orderDetailsFromCatalogEnabled)() ? Ee : Le,
                                            onAdditionalCharges: Fe,
                                            onDeleteItem: We,
                                            onItemQuantityChange: Ge,
                                            entryPoint: s,
                                            onDeclineOrder: X
                                        });
                                    case G.ADDITIONAL_CHARGES_FORM:
                                        return (0, U.jsx)(C.AdditionalChargesFormDrawer, {
                                            currency: Re,
                                            additionalCharges: ye,
                                            subtotal: we,
                                            onBack: De,
                                            onApply: function(e) {
                                                Se((function(t) {
                                                    return (0, d.default)((0, d.default)({}, t), e)
                                                })), De()
                                            }
                                        })
                                }
                            }(ee)
                        })
                    }, Ve)
                }) : null
            }
            var K = (0, B.forwardRef)(Q);
            t.default = K
        },
        848079: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return (0, l.jsx)(r.ConfirmPopup, {
                    testid: "order-expansion-different-order-currency-title",
                    title: o.fbt._("Orders can't have items with different currencies", null, {
                        hk: "19WokI"
                    }),
                    onOK: function() {
                        u.ModalManager.close()
                    },
                    children: (0, l.jsx)(i.WDSTextSectionTitle, {
                        testid: "order-expansion-different-order-currency-description",
                        children: o.fbt._("Make sure all items in your order have the same currency.", null, {
                            hk: "213L8w"
                        })
                    })
                })
            };
            var r = n(430888),
                u = n(628707),
                i = n(558288),
                o = n(548360),
                l = n(785893)
        },
        742034: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AdditionalChargesFormDrawer = function(e) {
                var t = e.currency,
                    n = e.subtotal,
                    r = e.additionalCharges,
                    p = e.onBack,
                    C = e.onApply,
                    j = (null == r ? void 0 : r.discountText) || "",
                    w = (0, b.useState)(j),
                    I = (0, u.default)(w, 2),
                    _ = I[0],
                    P = I[1],
                    O = (null == r ? void 0 : r.taxText) || "",
                    R = (0, b.useState)(O),
                    k = (0, u.default)(R, 2),
                    T = k[0],
                    A = k[1],
                    D = (null == r ? void 0 : r.shippingText) || "",
                    E = (0, b.useState)(D),
                    L = (0, u.default)(E, 2),
                    F = L[0],
                    N = L[1],
                    B = (null == r ? void 0 : r.discountType) || S,
                    q = (0, b.useState)(B),
                    z = (0, u.default)(q, 2),
                    H = z[0],
                    U = z[1],
                    W = (null == r ? void 0 : r.taxType) || M,
                    G = (0, b.useState)(W),
                    Y = (0, u.default)(G, 2),
                    V = Y[0],
                    Q = Y[1],
                    K = (0, b.useState)(!1),
                    X = (0, u.default)(K, 2),
                    $ = X[0],
                    Z = X[1],
                    J = (0, b.useState)(!1),
                    ee = (0, u.default)(J, 2),
                    te = ee[0],
                    ne = ee[1],
                    re = (0, b.useMemo)((function() {
                        return (0, f.additionalChargeErrorHandler)({
                            currency: t,
                            value: F
                        })
                    }), [t, F]),
                    ue = [$, te, re].some((function(e) {
                        return e
                    }));
                return (0, y.jsxs)(o.default, {
                    children: [(0, y.jsx)(l.DrawerHeader, {
                        title: g.fbt._("Add discount, shipping or tax", null, {
                            hk: "nPDUK"
                        }),
                        type: l.DRAWER_HEADER_TYPE.SMALL,
                        onBack: j !== _ || O !== T || D !== F || B !== H || W !== V ? function() {
                            c.ModalManager.open((0, y.jsx)(s.ConfirmDiscardModal, {
                                onOK: p
                            }))
                        } : p,
                        focusBackOrCancel: !0
                    }), (0, y.jsxs)(a.default, {
                        className: (0, x.default)(h.uiPadding.all16),
                        children: [(0, y.jsx)(d.AdditionalChargesTextInput, {
                            text: _,
                            testid: "additional-charges-discount-input",
                            label: g.fbt._("Discount", null, {
                                hk: "3acZrp"
                            }),
                            symbol: H,
                            currency: t,
                            priceValue: n,
                            setText: P,
                            setError: Z,
                            setSymbol: U
                        }), (0, y.jsx)(v.RichTextField, {
                            value: F,
                            testid: "additional-charges-shipping-input",
                            placeholder: g.fbt._("Shipping ({currency_symbol})", [g.fbt._param("currency_symbol", (0, i.formatAmount1000ToParts)(t, 0).symbol)], {
                                hk: "H2WDY"
                            }),
                            onChange: function(e) {
                                return N(e.text)
                            },
                            theme: "small",
                            maxLength: 10,
                            customStyleThemes: ["desaturated"],
                            error: re
                        }), (0, y.jsx)(d.AdditionalChargesTextInput, {
                            text: T,
                            testid: "additional-charges-tax-input",
                            label: g.fbt._("Tax", null, {
                                hk: "2r5wzT"
                            }),
                            symbol: V,
                            currency: t,
                            priceValue: n,
                            setText: A,
                            setError: ne,
                            setSymbol: Q
                        }), (0, y.jsx)(m.OrderApplyChangesButton, {
                            disabled: ue,
                            testid: "apply-additional-costs-button",
                            title: g.fbt._("Apply", null, {
                                hk: "3E5Tq7"
                            }),
                            onClick: function() {
                                return C({
                                    discountText: _,
                                    taxText: T,
                                    shippingText: F,
                                    discountType: H,
                                    taxType: V
                                })
                            }
                        })]
                    })]
                })
            };
            var u = r(n(963038)),
                i = n(217962),
                o = r(n(237120)),
                l = n(58985),
                a = r(n(39357)),
                c = n(628707),
                d = n(833958),
                s = n(484105),
                f = n(46968),
                p = n(642343),
                m = n(964823),
                v = n(983557),
                h = n(71867),
                g = n(548360),
                b = n(667294),
                x = r(n(156720)),
                y = n(785893),
                S = p.PERCENTAGE_SYMBOL,
                M = p.PERCENTAGE_SYMBOL
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
                    h = e.priceValue,
                    g = e.setText,
                    b = e.setError,
                    x = e.setSymbol,
                    y = (0, c.useMemo)((function() {
                        var e = (0, i.additionalChargeErrorHandler)({
                            label: n,
                            currency: v,
                            fieldType: r,
                            maxFlatValue: h / o.DEFAULT_OFFSET,
                            enablePercentValueCheck: !0,
                            value: t
                        });
                        return b(Boolean(e)), e
                    }), [t, n, r, v, b, h]);
                return (0, s.jsxs)("div", {
                    className: (0, d.default)(f),
                    children: [(0, s.jsx)(l.RichTextField, {
                        value: t,
                        testid: m,
                        placeholder: a.fbt._("{input_label} ({currency_or_percentage})", [a.fbt._param("input_label", n), a.fbt._param("currency_or_percentage", r)], {
                            hk: "vf1Ko"
                        }),
                        onChange: function(e) {
                            return g(e.text)
                        },
                        theme: "small",
                        maxLength: 10,
                        customStyleThemes: ["desaturated"],
                        error: y
                    }), (0, s.jsx)("div", {
                        className: (0, d.default)(p),
                        children: (0, s.jsx)(u.OrderDetailAmountTypeSelector, {
                            currency: v,
                            value: r,
                            onChange: function(e) {
                                var t = e.value;
                                return x(t)
                            }
                        })
                    })]
                })
            };
            var u = n(261499),
                i = n(46968),
                o = n(642343),
                l = n(983557),
                a = n(548360),
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
                    _ = e.priceMap,
                    P = e.onBack,
                    O = e.onAddProducts,
                    R = e.onAddCustomItem,
                    k = e.onProductSelectionChange,
                    T = (0, S.useState)(!1),
                    A = (0, u.default)(T, 2),
                    D = A[0],
                    E = A[1],
                    L = (0, C.default)(),
                    F = (0, j.default)((function() {
                        return new s.default
                    })),
                    N = n.getSelected().reduce((function(e, t) {
                        var r, u;
                        return e + (null !== (r = null !== (u = t.priceAmount1000) && void 0 !== u ? u : _[t.id.toString()]) && void 0 !== r ? r : 0) * Number(n.getVal(t))
                    }), 0),
                    B = r.filter((function(e) {
                        return e.isCustomItem
                    })).reduce((function(e, t) {
                        return e + t.price * t.quantity
                    }), 0);
                return (0, w.jsxs)(l.default, {
                    children: [(0, w.jsx)(c.DrawerHeader, {
                        title: y.fbt._("Add items", null, {
                            hk: "2U1Vru"
                        }),
                        type: c.DRAWER_HEADER_TYPE.SMALL,
                        onBack: D ? function() {
                            f.ModalManager.open((0, w.jsx)(v.ConfirmDiscardModal, {
                                onOK: P
                            }))
                        } : P,
                        focusBackOrCancel: !0
                    }), (0, w.jsxs)(a.default, {
                        children: [(0, w.jsxs)(d.default, {
                            theme: "expand-height",
                            xstyle: I.drawerSection,
                            children: [(0, i.orderDetailsCustomItemEnabled)() && (0, w.jsxs)(w.Fragment, {
                                children: [(0, w.jsx)(p.AddOrderItem, {
                                    title: y.fbt._("Create new item", null, {
                                        hk: "2GmSAs"
                                    }),
                                    onClick: R
                                }), (0, w.jsx)("hr", {
                                    className: (0, M.default)(I.catalogBar, x.uiMargin.vert0)
                                })]
                            }), (0, w.jsx)("p", {
                                className: (0, M.default)(I.catalogTitleText, x.uiPadding.start16, x.uiPadding.vert10),
                                children: y.fbt._("Catalog items", null, {
                                    hk: "4chzUe"
                                })
                            }), (0, w.jsx)(m.default, {
                                className: (0, M.default)(I.catalogProductsList),
                                productsSelection: n,
                                orderItems: r,
                                flatListController: F.current,
                                onProductSelectChange: function(e, n) {
                                    var u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                    (0, g.shouldPreventCatalogProductSelection)(r, t) ? f.ModalManager.open((0, w.jsx)(h.default, {})): (k(e, n), u || D || E(!0), L())
                                }
                            })]
                        }), (0, w.jsx)(b.OrderTotalPrice, {
                            xstyle: [x.uiPadding.all16, x.uiMargin.top10],
                            visible: !0,
                            disabled: !D,
                            totalPrice: (0, o.formatAmount1000)(t, N + B),
                            testid: "save-products-button",
                            onConfirm: O,
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
            var u = r(n(963038)),
                i = n(894995),
                o = n(217962),
                l = r(n(237120)),
                a = r(n(686866)),
                c = n(58985),
                d = r(n(39357)),
                s = r(n(979163)),
                f = n(628707),
                p = n(886146),
                m = r(n(125946)),
                v = n(484105),
                h = r(n(848079)),
                g = n(7309),
                b = n(964823),
                x = n(71867),
                y = n(548360),
                S = n(667294),
                M = r(n(156720)),
                C = r(n(61407)),
                j = r(n(279781)),
                w = n(785893),
                I = {
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
                    s = (0, a.useState)(!1),
                    f = (0, u.default)(s, 2),
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
                        detail: (p || n.isSelected(t)) && (0, c.jsx)(i.default, {
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
            var u = r(n(963038)),
                i = r(n(684492)),
                o = r(n(991417)),
                l = n(548360),
                a = n(667294),
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
                    M = e.flatListController,
                    C = e.onProductSelectChange,
                    j = (0, y.default)(),
                    w = (0, g.default)(),
                    I = (0, h.default)(w, 100),
                    _ = l.CatalogCollection.assertGet((0, m.getMaybeMeUser)()),
                    P = (0, v.useState)(!1),
                    O = (0, o.default)(P, 2),
                    R = O[0],
                    k = O[1],
                    T = (0, v.useState)(0),
                    A = (0, o.default)(T, 2),
                    D = A[0],
                    E = A[1],
                    L = (0, v.useState)(!1),
                    F = (0, o.default)(L, 2),
                    N = F[0],
                    B = F[1],
                    q = function() {
                        var e = new Set(r.map((function(e) {
                            return e.id
                        })));
                        return _.productCollection.getProductModels().filter((function(t) {
                            return !e.has(t.id)
                        })).map((function(e) {
                            return {
                                itemKey: e.id.toString(),
                                product: e
                            }
                        }))
                    },
                    z = function(e) {
                        e.forEach((function(e) {
                            var t = r.find((function(t) {
                                return t.id === e.product.id
                            }));
                            void 0 !== t && C(e.product, Number(t.quantity), !0)
                        }))
                    },
                    H = function() {
                        var e = (0, i.default)(u.default.mark((function e() {
                            var t, n, r, i;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!N) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (_.afterCursor) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        return t = _.productCollection.getProductModels().length, k(!0), E(t), e.prev = 7, e.next = 10, l.CatalogCollection.update((0, m.getMaybeMeUser)());
                                    case 10:
                                        if (n = e.sent, !j.aborted) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 13:
                                        if (k(!1), r = Array.isArray(n) ? n[0] : n, i = r.productCollection.getProductModels().length, z(q().slice(t)), i === D && B(!0), !(t * p.PRODUCT_LIST_ITEM_HEIGHT < window.innerHeight)) {
                                            e.next = 20;
                                            break
                                        }
                                        return e.abrupt("return", H());
                                    case 20:
                                        e.next = 26;
                                        break;
                                    case 22:
                                        e.prev = 22, e.t0 = e.catch(7), k(!1), B(!0);
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
                    z(q()), H()
                }), []), (0, b.useListener)(_.productCollection, "add", I);
                var U = (0, x.default)((function(e) {
                    R || e.scrollTop + s.SCROLL_FUDGE > e.scrollHeight - e.clientHeight && H()
                }), 100);
                return (0, S.jsxs)(c.default, {
                    className: t,
                    flatListControllers: [M],
                    onScroll: function(e) {
                        e.currentTarget && U(e.currentTarget)
                    },
                    children: [(0, S.jsx)(a.FlatList, {
                        flatListController: M,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: q(),
                        renderItem: function(e) {
                            var t = e.product;
                            return (0, S.jsx)(f.CatalogFormProduct, {
                                product: t,
                                productsSelection: n,
                                onProductSelectChange: C
                            })
                        },
                        defaultItemHeight: p.PRODUCT_LIST_ITEM_HEIGHT
                    }), R && (0, S.jsx)(d.default, {})]
                })
            };
            var u = r(n(887757)),
                i = r(n(348926)),
                o = r(n(963038)),
                l = n(218953),
                a = n(577407),
                c = r(n(877576)),
                d = r(n(399447)),
                s = n(295769),
                f = n(107077),
                p = n(902011),
                m = n(228277),
                v = n(667294),
                h = r(n(273122)),
                g = r(n(61407)),
                b = n(494092),
                x = r(n(27634)),
                y = r(n(672900)),
                S = n(785893)
        },
        484105: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ConfirmDiscardModal = function(e) {
                var t = e.onOK;
                return (0, l.jsx)(r.ConfirmPopup, {
                    title: o.fbt._("Discard changes?", null, {
                        hk: "1SaEaC"
                    }),
                    onOK: function() {
                        u.ModalManager.close(), t()
                    },
                    okText: o.fbt._("Discard", null, {
                        hk: "3etb6C"
                    }),
                    onCancel: function() {
                        return u.ModalManager.close()
                    },
                    children: (0, l.jsx)(i.TextDiv, {
                        theme: "muted",
                        children: o.fbt._("If you close this, your draft will be discarded.", null, {
                            hk: "4G5DVj"
                        })
                    })
                })
            };
            var r = n(430888),
                u = n(628707),
                i = n(558288),
                o = n(548360),
                l = n(785893)
        },
        328855: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CustomItemFormDrawer = function(e) {
                var t, n, r = e.currency,
                    i = e.customItem,
                    I = e.onBack,
                    _ = e.onSaveCustomItem,
                    P = e.eligibleCurrencies,
                    O = (0, M.useState)(null == i ? void 0 : i.name),
                    R = (0, u.default)(O, 2),
                    k = R[0],
                    T = R[1],
                    A = (0, M.useState)(Number.isInteger(null == i ? void 0 : i.price) ? String(Number(null == i ? void 0 : i.price) / 1e3) : null),
                    D = (0, u.default)(A, 2),
                    E = D[0],
                    L = D[1],
                    F = (0, M.useState)(null == i ? void 0 : i.price),
                    N = (0, u.default)(F, 2),
                    B = N[0],
                    q = N[1],
                    z = (0, M.useState)((null == i ? void 0 : i.isQuantitySet) ? i.quantity : null),
                    H = (0, u.default)(z, 2),
                    U = H[0],
                    W = H[1],
                    G = (0, M.useState)((null == i ? void 0 : i.isQuantitySet) ? String(i.quantity) : null),
                    Y = (0, u.default)(G, 2),
                    V = Y[0],
                    Q = Y[1],
                    K = (0, M.useState)(null !== (t = null == i ? void 0 : i.currency) && void 0 !== t ? t : r),
                    X = (0, u.default)(K, 2),
                    $ = X[0],
                    Z = X[1],
                    J = (0, M.useMemo)((function() {
                        return function(e) {
                            if (null == e) return "";
                            var t = String(S.fbt._("Add a title", null, {
                                hk: "7Lm6B"
                            }));
                            return "" === e.trim() ? t : ""
                        }(k)
                    }), [k]),
                    ee = (0, M.useMemo)((function() {
                        return function(e, t) {
                            if (null == t) return "";
                            var n = String(S.fbt._("Enter a valid price", null, {
                                hk: "4yb1Sg"
                            }));
                            return "" !== t.trim() && (0, o.validatePriceString)(e, t, h.MIN_PRICE, h.MAX_PRICE) ? "" : n
                        }(r, E)
                    }), [r, E]),
                    te = (0, M.useMemo)((function() {
                        return function(e) {
                            if (null == e) return "";
                            var t = String(S.fbt._("Enter a valid quantity", null, {
                                hk: "u6SoG"
                            }));
                            return w(Number(e)) ? "" : t
                        }(V)
                    }), [V]),
                    ne = (re = i, ue = k, ie = B, oe = V, le = (null == re ? void 0 : re.isQuantitySet) ? Number(oe) !== re.quantity : null != oe, (null == re ? void 0 : re.name) !== ue || (null == re ? void 0 : re.price) !== ie || le);
                var re, ue, ie, oe, le;
                return (0, j.jsxs)(l.default, {
                    children: [(0, j.jsx)(c.DrawerHeader, {
                        title: i ? S.fbt._("Update item", null, {
                            hk: "1TL07p"
                        }) : S.fbt._("Create new item", null, {
                            hk: "4xRwlm"
                        }),
                        type: c.DRAWER_HEADER_TYPE.SMALL,
                        onBack: ne ? function() {
                            p.ModalManager.open((0, j.jsx)(m.ConfirmDiscardModal, {
                                onOK: I
                            }))
                        } : I,
                        focusBackOrCancel: !0
                    }), (0, j.jsx)(a.default, {
                        children: (0, j.jsxs)(d.default, {
                            className: (0, C.default)(b.uiPadding.all16),
                            children: [(0, j.jsx)(g.RichTextField, {
                                testid: "custom-item-edit-name-input",
                                value: k,
                                placeholder: S.fbt._("Item name", null, {
                                    hk: "1TMRR7"
                                }),
                                onChange: function(e) {
                                    T(e.text)
                                },
                                theme: "small",
                                customStyleThemes: ["desaturated"],
                                maxLength: 150,
                                error: J
                            }), (0, j.jsxs)(s.FlexRow, {
                                children: [(0, j.jsx)(f.default, {
                                    grow: 4,
                                    children: (0, j.jsx)(g.RichTextField, {
                                        testid: "custom-item-edit-price-input",
                                        value: E,
                                        placeholder: S.fbt._("Price {symbol}", [S.fbt._param("symbol", (0, o.formatAmount1000ToParts)($, 0).symbol)], {
                                            hk: "3jcGcb"
                                        }),
                                        onChange: function(e) {
                                            var t = e.text,
                                                n = (0, o.valueFromString)(r, t);
                                            q(n), L(t)
                                        },
                                        theme: "small",
                                        maxLength: 30,
                                        customStyleThemes: ["desaturated"],
                                        error: ee
                                    })
                                }), (null !== (n = null == P ? void 0 : P.length) && void 0 !== n ? n : 0) > 1 && (0, j.jsx)(f.default, {
                                    testid: "custom-item-edit-currency-flex-item",
                                    children: (0, j.jsx)(y.Select, {
                                        ariaRoleDescription: "Currency selection in custom order item screen",
                                        initialSelection: $,
                                        width: 150,
                                        onChange: function(e) {
                                            Z(e)
                                        },
                                        children: (null != P ? P : []).map((function(e) {
                                            return (0, j.jsx)(x.SelectMenuItem, {
                                                optionId: e,
                                                primary: `${e} ${(0,o.formatLocalSymbol)(e)}`
                                            }, e)
                                        }))
                                    })
                                })]
                            }), (0, j.jsx)(g.RichTextField, {
                                testid: "custom-item-edit-quantity-input",
                                value: V,
                                placeholder: S.fbt._("Quantity (Optional)", null, {
                                    hk: "4swiuO"
                                }),
                                onChange: function(e) {
                                    var t = e.text,
                                        n = "" === t ? null : Number(t);
                                    w(n) || (n = null), W(n), Q("" === t ? null : t)
                                },
                                theme: "small",
                                maxLength: 30,
                                customStyleThemes: ["desaturated"],
                                error: te
                            }), (0, j.jsx)(v.OrderApplyChangesButton, {
                                title: i ? S.fbt._("Update Order", null, {
                                    hk: "HjU1X"
                                }) : S.fbt._("Add to Order", null, {
                                    hk: "3p1U18"
                                }),
                                disabled: null == k || null == E || !(!i || ne) || [J, ee, te].some((function(e) {
                                    return e
                                })),
                                onClick: function() {
                                    var e = {
                                        name: k,
                                        priceAmount1000: +B,
                                        quantity: U,
                                        isQuantitySet: Number.isInteger(U),
                                        currency: $
                                    };
                                    _(e)
                                },
                                testid: "save-custom-item-button"
                            })]
                        })
                    })]
                })
            };
            var u = r(n(963038)),
                i = n(771164),
                o = n(217962),
                l = r(n(237120)),
                a = r(n(686866)),
                c = n(58985),
                d = r(n(39357)),
                s = n(208188),
                f = r(n(644178)),
                p = n(628707),
                m = n(484105),
                v = n(964823),
                h = n(320949),
                g = n(983557),
                b = n(71867),
                x = n(407e3),
                y = n(515452),
                S = n(548360),
                M = n(667294),
                C = r(n(156720)),
                j = n(785893);

            function w(e) {
                return Number.isInteger(e) && +e > 0 && +e <= i.CART_ITEM_MAX_QUANTITY
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
                    d = u.formatLocalSymbol(r),
                    s = l.fbt._("Select amount type", null, {
                        hk: "1xddkG"
                    }),
                    f = [{
                        id: "percentage",
                        label: l.fbt._("by Percentage ({percentage-symbol})", [l.fbt._param("percentage-symbol", i.PERCENTAGE_SYMBOL)], {
                            hk: "3fQwM3"
                        }),
                        value: i.PERCENTAGE_SYMBOL
                    }, {
                        id: "flat-amount",
                        label: l.fbt._("by Flat amount ({currency-symbol})", [l.fbt._param("currency-symbol", d)], {
                            hk: "duPhj"
                        }),
                        value: d
                    }],
                    p = (0, a.useMemo)((function() {
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
            var u = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        u = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = u ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, i, o) : r[i] = e[i]
                        } r.default = e, n && n.set(e, r);
                    return r
                }(n(217962)),
                i = n(642343),
                o = r(n(499801)),
                l = n(548360),
                a = n(667294),
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
                    h = e["aria-label"],
                    g = (0, s.useRef)(null),
                    b = (0, s.useState)(!1),
                    x = (0, u.default)(b, 2),
                    y = x[0],
                    S = x[1],
                    M = (0, s.useState)(n),
                    C = (0, u.default)(M, 2),
                    j = C[0],
                    w = C[1],
                    I = r.map((function(e, t) {
                        var n = e.id,
                            r = e.label;
                        return (0, p.jsx)(l.DropdownItem, {
                            testid: `mi-${n}`,
                            action: function() {
                                v(e), w(t)
                            },
                            children: (0, p.jsx)("div", {
                                className: (0, f.default)(m),
                                role: "button",
                                "aria-label": r,
                                children: t === j ? (0, p.jsx)(a.TextSpan, {
                                    weight: "bold",
                                    children: r
                                }) : r
                            })
                        }, n)
                    }));
                return (0, p.jsxs)("div", {
                    ref: g,
                    children: [(0, p.jsx)(i.default, {
                        "aria-label": h,
                        PostfixIcon: o.DownIcon,
                        label: r[j].value,
                        onClick: function() {
                            return S((function(e) {
                                return !e
                            }))
                        }
                    }), y && g.current && (0, p.jsx)(c.UIE, {
                        displayName: "ValuePicker",
                        escapable: !0,
                        popable: !0,
                        dismissOnWindowResize: !0,
                        requestDismiss: function() {
                            return S(!1)
                        },
                        children: (0, p.jsx)(d.default, {
                            contextMenu: {
                                menu: I,
                                anchor: g.current
                            }
                        })
                    })]
                })
            };
            var u = r(n(963038)),
                i = r(n(270111)),
                o = n(123212),
                l = n(116384),
                a = n(558288),
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
                u = n(422210),
                i = n(548360),
                o = n(785893);

            function l(e) {
                var t = e.length;
                return 0 === t ? "" : 1 === t ? i.fbt._("Enter a price for {first-product-name}", [i.fbt._param("first-product-name", e[0])], {
                    hk: "Lf39K"
                }) : 2 === t ? i.fbt._("Enter prices for {first-product-name} and {second-product-name}", [i.fbt._param("first-product-name", e[0]), i.fbt._param("second-product-name", e[1])], {
                    hk: "1uLet0"
                }) : i.fbt._({
                    "*": "Enter prices for {first-product-name}, {second-product-name} and {other-items} other items",
                    _1: "Enter prices for {first-product-name}, {second-product-name} and 1 other item"
                }, [i.fbt._plural(t - 2, "other-items"), i.fbt._param("first-product-name", e[0]), i.fbt._param("second-product-name", e[1])], {
                    hk: "1Crsuq"
                })
            }
            t.notifyIfAnyProductMissesPrice = function(e, t) {
                var n = l(e.reduce((function(e, n) {
                    var r, u = null !== (r = n.price) && void 0 !== r ? r : t[n.id];
                    return Number.isInteger(u) || e.push(n.name || ""), e
                }), []));
                n && u.ToastManager.open((0, o.jsx)(r.Toast, {
                    duration: 1e4,
                    msg: n,
                    action: {
                        actionText: i.fbt._("OKAY", null, {
                            hk: "3RIrWh"
                        }),
                        dismiss: !0,
                        theme: "success"
                    }
                }))
            }
        },
        200315: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ContextDropdownMenu = function(e) {
                return f((0, u.default)((0, u.default)({}, e), {}, {
                    initHandling: "contextmenu"
                })).popover
            }, t.DropdownMenu = function(e) {
                return f(e).popover
            }, Object.defineProperty(t, "PopoverAlignment", {
                enumerable: !0,
                get: function() {
                    return l.PopoverAlignment
                }
            }), Object.defineProperty(t, "PopoverPosition", {
                enumerable: !0,
                get: function() {
                    return l.PopoverPosition
                }
            }), t.useDropdownMenu = f;
            var u = r(n(81109)),
                i = r(n(506479)),
                o = n(208188),
                l = n(389921),
                a = n(832022),
                c = (r(n(156720)), n(785893)),
                d = ["children", "onSelect", "menuRef", "listControllerRef", "maxHeight", "minWidth", "initialActiveOptionId", "initHandling"],
                s = {
                    container: {
                        borderTopStartRadius: "nl2xi1ke",
                        borderTopEndRadius: "r2bxqa8h",
                        borderBottomEndRadius: "jyp9psb5",
                        borderBottomStartRadius: "n1nfpgil",
                        backgroundColor: "rf2f03pv",
                        boxShadow: "o8gxb310",
                        color: "fkbpgrx9",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex"
                    }
                };

            function f(e) {
                var t = e.children,
                    n = e.onSelect,
                    r = e.menuRef,
                    f = e.listControllerRef,
                    p = e.maxHeight,
                    m = e.minWidth,
                    v = e.initialActiveOptionId,
                    h = e.initHandling,
                    g = (0, i.default)(e, d),
                    b = (0, l.usePopoverElement)((0, u.default)((0, u.default)({}, g), {}, {
                        initHandling: null != h ? h : "click",
                        dismissable: !0,
                        element: (0, c.jsx)(o.FlexItem, {
                            xstyle: s.container,
                            children: (0, c.jsx)(a.WDSMenu, {
                                listControllerRef: f,
                                ref: r,
                                maxHeight: p,
                                minWidth: m,
                                initialActiveOptionId: v,
                                onSelect: function(e, t) {
                                    var r = t.type;
                                    null == n || n(e), !1 === ["multi-select", "submenu", "switch"].includes(r) && b.hidePopover()
                                },
                                children: t
                            })
                        })
                    }));
                return b
            }
        },
        440416: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useMap = function(e) {
                var t = (0, i.useState)(e ? e() : function() {
                        return new Map
                    }),
                    n = (0, u.default)(t, 2),
                    r = n[0],
                    o = n[1],
                    l = (0, i.useCallback)((function(e, t) {
                        return new Promise((function(n) {
                            o((function(r) {
                                var u = new Map(r);
                                return u.set(e, t), n(u), u
                            }))
                        }))
                    }), []),
                    a = (0, i.useCallback)((function(e) {
                        return new Promise((function(t) {
                            o((function(n) {
                                var r = new Map(n);
                                return r.delete(e), t(r), r
                            }))
                        }))
                    }), []),
                    c = (0, i.useCallback)((function(e) {
                        return new Promise((function(t) {
                            o((function() {
                                var n = null != e ? new Map(e) : new Map;
                                return t(n), n
                            }))
                        }))
                    }), []);
                return [r, {
                    set: l,
                    unset: a,
                    clear: c
                }]
            };
            var u = r(n(963038)),
                i = n(667294)
        },
        715733: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useSet = function(e) {
                var t = (0, i.useState)(e ? e() : function() {
                        return new Set
                    }),
                    n = (0, u.default)(t, 2),
                    r = n[0],
                    o = n[1],
                    l = (0, i.useCallback)((function(e) {
                        return new Promise((function(t) {
                            o((function(n) {
                                var r = new Set(n);
                                return r.add(e), t(r), r
                            }))
                        }))
                    }), []),
                    a = (0, i.useCallback)((function(e) {
                        return new Promise((function(t) {
                            o((function(n) {
                                var r = new Set(n);
                                return r.delete(e), t(r), r
                            }))
                        }))
                    }), []),
                    c = (0, i.useCallback)((function(e) {
                        return new Promise((function(t) {
                            o((function(n) {
                                var r = new Set(n);
                                return r.has(e) ? r.delete(e) : r.add(e), t(r), r
                            }))
                        }))
                    }), []),
                    d = (0, i.useCallback)((function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        return new Promise((function(t) {
                            o((function() {
                                var n = new Set(e);
                                return t(n), n
                            }))
                        }))
                    }), []);
                return [r, {
                    add: l,
                    remove: a,
                    toggle: c,
                    clear: d
                }]
            };
            var u = r(n(963038)),
                i = n(667294)
        },
        179247: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createRegister = function() {
                var e = (0, o.createContext)();
                return {
                    Register: function(t) {
                        return (0, a.jsx)(e.Provider, {
                            value: t.registerRef,
                            children: t.children
                        })
                    },
                    useRegister: function(e) {
                        var t = {
                            items: new Map,
                            events: new u.default,
                            isRegistered: !1
                        };
                        return (0, o.useEffect)((function() {
                            var n;
                            null == e || null === (n = e.onRegister) || void 0 === n || n.call(e, t.items), t.isRegistered = !0
                        }), []), (0, l.useListener)(t.events, "change", (function() {
                            var n;
                            t.isRegistered && (null == e || null === (n = e.onChange) || void 0 === n || n.call(e))
                        })), t
                    },
                    useRegisterItem: function(t, n) {
                        var r = (0, o.useContext)(e);
                        if (null == r) throw (0, i.default)("[Register] `useRegisterItem` must be used in a `Register` tree");
                        var u = (0, o.useRef)(null);
                        (0, o.useImperativeHandle)(u, (function() {
                            return n
                        })), r.items.set(t, u), (0, o.useEffect)((function() {
                            var e = r.items;
                            return e.set(t, u), r.events.trigger("change"),
                                function() {
                                    e.delete(t), r.events.trigger("change")
                                }
                        }), [t])
                    }
                }
            };
            var u = r(n(989578)),
                i = r(n(580845)),
                o = n(667294),
                l = n(494092),
                a = n(785893)
        },
        832022: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WDSMenu = void 0, t.useMenu = function() {
                var e = (0, p.useContext)(b);
                if (null == e) throw (0, f.default)("[Menu] useMenu must be used in a child of a MenuList component");
                return e
            }, t.useRegisterItem = void 0;
            var u = r(n(887757)),
                i = r(n(348926)),
                o = r(n(963038)),
                l = n(247211),
                a = r(n(989578)),
                c = n(208188),
                d = n(179247),
                s = n(71867),
                f = r(n(580845)),
                p = n(667294),
                m = r(n(156720)),
                v = n(440416),
                h = n(830003),
                g = n(785893),
                b = (0, p.createContext)(null);
            var x = {
                    container: {
                        display: "p357zi0d",
                        flexGrow: "ggj6brxn"
                    },
                    listContainer: {
                        display: "p357zi0d",
                        flexDirection: "f8m0rgwh",
                        flexGrow: "ggj6brxn",
                        flexShrink: "oq44ahr5",
                        flexBasis: "lb5m6g5c",
                        overflowY: "ag5g9lrv",
                        width: "ln8gz9je"
                    }
                },
                y = (0, d.createRegister)(),
                S = y.useRegisterItem,
                M = y.useRegister,
                C = y.Register;
            t.useRegisterItem = S;
            var j = (0, p.forwardRef)((function(e, t) {
                var n, r = e.children,
                    d = e.onSelect,
                    f = e.forceSelection,
                    y = e.initialActiveOptionId,
                    S = e.maxHeight,
                    j = e.minWidth,
                    w = e.colorScheme,
                    I = void 0 === w ? "lighter" : w,
                    _ = e.size,
                    P = void 0 === _ ? "small" : _,
                    O = (0, v.useMap)(),
                    R = (0, o.default)(O, 2),
                    k = R[0],
                    T = R[1].clear,
                    A = M({
                        onRegister: (n = (0, i.default)(u.default.mark((function e(t) {
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, T(t);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }),
                    D = (0, p.useState)(),
                    E = (0, o.default)(D, 2),
                    L = E[0],
                    F = E[1],
                    N = (0, p.useMemo)((function() {
                        return new a.default
                    }), []),
                    B = (0, p.useRef)(),
                    q = (0, p.useMemo)((function() {
                        return null != L ? L : Array.from(k.keys())
                    }), [L, k]),
                    z = (0, h.useNavigatableList)(q),
                    H = z.activeItem,
                    U = z.listSelection,
                    W = z.NavigatableList,
                    G = function() {
                        var e = (0, i.default)(u.default.mark((function e(t) {
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, F(t);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Y = function(e) {
                        var t, n = k.get(e);
                        if (null != n && null != n.current) {
                            var r, u = n.current;
                            null === (r = u.onSelect) || void 0 === r || r.call(u);
                            var i = (t = [], k.forEach((function(e, n) {
                                null != e.current && t.push([n, e.current])
                            })), new Map(t));
                            N.trigger("select", e, u, i), null == d || d(e, u, i)
                        } else __LOG__(3)`[Menu] Trying to handle onSelect without a valid option '${e}'`
                    },
                    V = function(e) {
                        e.stopPropagation(), e.preventDefault()
                    },
                    Q = (0, p.useCallback)((function(e) {
                        var t = q.indexOf(e);
                        if (null != B.current) {
                            var n, r = null === (n = B.current) || void 0 === n ? void 0 : n.children[t];
                            null != r && (0, l.scrollIntoViewIfNeeded)(r, !1, B.current)
                        }
                    }), [q, B]);
                (0, p.useEffect)((function() {
                    null != H && Q(H)
                }), [H, Q]);
                var K = k.size > 0;
                (0, p.useEffect)((function() {
                    null != y && q.includes(y) && U.setVal(y)
                }), [K]);
                var X = {
                    items: k,
                    events: N,
                    activeItemId: H,
                    filteredItems: null != L ? new Set(L) : null,
                    filterItems: G,
                    selectItem: Y,
                    colorScheme: I,
                    size: P
                };
                return (0, g.jsx)(C, {
                    registerRef: A,
                    children: (0, g.jsx)(b.Provider, {
                        value: X,
                        children: (0, g.jsx)("div", {
                            ref: t,
                            role: "listbox",
                            "data-testid": "dropdown",
                            className: (0, m.default)([x.container, s.uiPadding.all8]),
                            style: {
                                maxHeight: S,
                                minWidth: j
                            },
                            children: (0, g.jsx)(W, {
                                xstyle: x.listContainer,
                                items: U,
                                onSelect: Y,
                                handlers: {
                                    down: V,
                                    up: V,
                                    enter: V
                                },
                                forceSelection: f,
                                rotate: !0,
                                children: (0, g.jsx)(c.FlexColumn, {
                                    align: "stretch",
                                    tabIndex: 0,
                                    ref: B,
                                    children: r
                                })
                            })
                        })
                    })
                })
            }));
            t.WDSMenu = j, j.displayName = "WDSMenu"
        },
        259978: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WDSMenuItem = void 0, t.useMenuGroup = function(e) {
                var t = (0, l.useMenu)();
                if (null == t) throw (0, a.default)("[Menu] MenuGroup must be a child of a MenuItemList");
                var n = (0, c.useRef)();
                (0, c.useImperativeHandle)(n, e), (0, c.useEffect)((function() {
                    var e = function(e, t, r) {
                        var u;
                        null != n.current && n.current.optionIds.has(e) && (null === (u = n.current) || void 0 === u || u.onSelect(e, t, r))
                    };
                    return t.events.on("select", e),
                        function() {
                            t.events.off("select", e)
                        }
                }), [n])
            }, t.useMenuItem = s;
            var u = n(558288),
                i = r(n(83938)),
                o = n(948252),
                l = n(832022),
                a = r(n(580845)),
                c = n(667294),
                d = (r(n(156720)), n(785893));

            function s(e, t) {
                (0, l.useRegisterItem)(e, t);
                var n = (0, l.useMenu)();
                if (null == n) throw (0, a.default)("[Menu] MenuItem must be a child of a MenuItemList");
                return {
                    menu: n,
                    colorScheme: n.colorScheme,
                    size: n.size,
                    isActive: (null == n ? void 0 : n.activeItemId) === e,
                    isFiltered: null != n.filteredItems && !1 === n.filteredItems.has(e)
                }
            }
            var f = {
                    container: {
                        textAlign: "ljrqcn24",
                        borderTopStartRadius: "bbr44loe",
                        borderTopEndRadius: "ooj5yc5b",
                        borderBottomEndRadius: "m8i16etx",
                        borderBottomStartRadius: "cw0ivh8j",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        display: "p357zi0d",
                        flexGrow: "ggj6brxn",
                        flexShrink: "oq44ahr5",
                        flexBasis: "lb5m6g5c",
                        alignSelf: "l33m68ws",
                        width: "ln8gz9je"
                    },
                    disabled: {
                        cursor: "h2qzpyga"
                    }
                },
                p = (0, c.forwardRef)((function(e, t) {
                    var n = e.optionId,
                        r = e.primary,
                        l = e.detailRight,
                        a = e.secondary,
                        c = e.primaryRight,
                        p = e.secondaryRight,
                        m = e.detailLeft,
                        v = e.disabled,
                        h = e.children,
                        g = e.type,
                        b = e.onSelect,
                        x = e.searchCriteria,
                        y = e.size,
                        S = s(n, {
                            id: n,
                            type: g,
                            label: r,
                            searchCriteria: x,
                            onSelect: b
                        }),
                        M = S.menu,
                        C = S.isActive,
                        j = S.isFiltered,
                        w = S.colorScheme,
                        I = S.size;
                    return !0 === j ? null : (0, d.jsxs)(i.default, {
                        ref: t,
                        xstyle: [f.container, !0 === v && f.disabled],
                        onClick: !0 !== v ? function(e) {
                            e.stopPropagation(), M.selectItem(n)
                        } : null,
                        tabIndex: -1,
                        children: [(0, d.jsx)(o.WDSCell, {
                            size: null != y ? y : I,
                            colorScheme: w,
                            disabled: v,
                            primary: (0, d.jsx)(u.WDSTextTitle, {
                                children: r
                            }),
                            primaryRight: c,
                            secondary: (0, d.jsx)(u.WDSTextMuted, {
                                children: a
                            }),
                            secondaryRight: p,
                            detailLeft: m,
                            detailRight: l,
                            active: C,
                            tabIndex: -1
                        }), h]
                    })
                }));
            t.WDSMenuItem = p, p.displayName = "WDSMenuItem"
        },
        407e3: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ActionMenuItem", {
                enumerable: !0,
                get: function() {
                    return r.ActionMenuItem
                }
            }), Object.defineProperty(t, "MenuSearchInput", {
                enumerable: !0,
                get: function() {
                    return u.MenuSearchInput
                }
            }), Object.defineProperty(t, "MenuSection", {
                enumerable: !0,
                get: function() {
                    return o.MenuSection
                }
            }), Object.defineProperty(t, "SelectMenuItem", {
                enumerable: !0,
                get: function() {
                    return i.SelectMenuItem
                }
            }), Object.defineProperty(t, "SelectMenuItemGroup", {
                enumerable: !0,
                get: function() {
                    return i.SelectMenuItemGroup
                }
            }), Object.defineProperty(t, "SubMenuItem", {
                enumerable: !0,
                get: function() {
                    return l.SubMenuItem
                }
            }), Object.defineProperty(t, "SwitchMenuItem", {
                enumerable: !0,
                get: function() {
                    return a.SwitchMenuItem
                }
            });
            var r = n(885495),
                u = n(89653),
                i = n(655169),
                o = n(458897),
                l = n(292300),
                a = n(791257)
        },
        885495: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ActionMenuItem = function(e) {
                return (0, o.jsx)(i.WDSMenuItem, (0, u.default)((0, u.default)({}, e), {}, {
                    type: "action"
                }))
            };
            var u = r(n(81109)),
                i = n(259978),
                o = n(785893)
        },
        89653: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MenuSearchInput = function() {
                var e = (0, c.useMenu)(),
                    t = function(e) {
                        e.stopPropagation(), e.preventDefault()
                    },
                    n = function() {
                        var t = (0, i.default)(u.default.mark((function t(n) {
                            var r, i, o, c;
                            return u.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (r = e.items, "" !== n) {
                                            t.next = 4;
                                            break
                                        }
                                        return i = Array.from(r.keys()), t.abrupt("return", e.filterItems(i));
                                    case 4:
                                        return o = Array.from(r.values()).map((function(e) {
                                            return e.current
                                        })).filter(Boolean), c = (0, l.filterPaginate)(o, (function(e) {
                                            return (0, a.simpleSearch)(n, [e.searchCriteria])
                                        }), {
                                            pageLength: o.length
                                        }), t.next = 8, e.filterItems(c.map((function(e) {
                                            return e.id
                                        })));
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                return (0, d.jsx)(o.SearchInput, {
                    focusOnMount: !0,
                    colorScheme: "darker",
                    onEnter: function() {
                        null != e.activeItemId && e.selectItem(e.activeItemId)
                    },
                    onClick: t,
                    onFocus: t,
                    onBlur: t,
                    onSearch: n,
                    placeholder: ""
                })
            };
            var u = r(n(887757)),
                i = r(n(348926)),
                o = n(621806),
                l = n(396418),
                a = n(872380),
                c = n(832022),
                d = n(785893)
        },
        655169: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SelectMenuItem = function(e) {
                var t = (0, v.useContext)(x);
                if (null == t) throw (0, m.default)("[menu] `SelectMenuItem` must be used inside of a `SelectMenuItemGroup`");
                var n, r, i = t.selection.has(e.optionId);
                t.isMultiselect ? (n = "multi-select", r = i ? (0, b.jsx)(a.CheckboxRoundCheckedIcon, {}) : (0, b.jsx)(c.CheckboxRoundUncheckedIcon, {})) : (n = "single-select", r = i ? (0, b.jsx)(d.CheckmarkIcon, {
                    color: s.SvgColorProp.TEAL
                }) : null);
                return (0, b.jsx)(p.WDSMenuItem, (0, u.default)((0, u.default)({
                    detailRight: r
                }, e), {}, {
                    type: n
                }))
            }, t.SelectMenuItemGroup = function(e) {
                var t = e.multiselect,
                    n = e.children,
                    r = e.initialSelection,
                    u = (0, f.useMenu)(),
                    a = (0, g.useSet)(),
                    c = (0, l.default)(a, 2),
                    d = c[0],
                    s = c[1],
                    p = s.clear,
                    m = s.toggle,
                    y = v.Children.map(n, (function(e) {
                        return e.props.optionId
                    })),
                    S = function() {
                        var n = (0, o.default)(i.default.mark((function n(r, u) {
                            var o, l;
                            return i.default.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (!0 !== t) {
                                            n.next = 6;
                                            break
                                        }
                                        return n.next = 3, m(r);
                                    case 3:
                                        l = n.sent, n.next = 9;
                                        break;
                                    case 6:
                                        return n.next = 8, p([r]);
                                    case 8:
                                        l = n.sent;
                                    case 9:
                                        null === (o = e.onSelect) || void 0 === o || o.call(e, r, u, l);
                                    case 10:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }();
                return (0, h.useListener)(u.events, "select", function() {
                    var e = (0, o.default)(i.default.mark((function e(t, n) {
                        return i.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!y.includes(t)) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3, S(t, n);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()), (0, v.useEffect)((function() {
                    if (null != r) {
                        var e = Array.isArray(r) ? r : [r];
                        p(e)
                    }
                }), []), (0, b.jsx)(x.Provider, {
                    value: {
                        selection: d,
                        isMultiselect: !0 === t
                    },
                    children: n
                })
            };
            var u = r(n(81109)),
                i = r(n(887757)),
                o = r(n(348926)),
                l = r(n(963038)),
                a = n(412595),
                c = n(723889),
                d = n(887549),
                s = n(401304),
                f = n(832022),
                p = n(259978),
                m = r(n(580845)),
                v = n(667294),
                h = n(494092),
                g = n(715733),
                b = n(785893),
                x = (0, v.createContext)(null)
        },
        458897: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MenuSection = function(e) {
                var t = e.scroll,
                    n = (0, i.default)(e, c);
                return (0, a.jsx)(o.FlexColumn, (0, u.default)((0, u.default)({}, n), {}, {
                    className: (0, l.default)(!0 === t && d.scroll)
                }))
            };
            var u = r(n(81109)),
                i = r(n(506479)),
                o = n(208188),
                l = r(n(156720)),
                a = n(785893),
                c = ["scroll"],
                d = {
                    scroll: {
                        overflowY: "ag5g9lrv"
                    }
                }
        },
        292300: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SubMenuItem = function(e) {
                var t = e.children,
                    n = (0, i.default)(e, f),
                    r = (0, a.useMenu)().activeItemId,
                    p = (0, d.useRef)(null),
                    m = (0, d.useRef)(),
                    v = r === e.optionId;
                return (0, d.useEffect)((function() {
                    null != m.current && (v ? m.current.showPopover() : m.current.hidePopover())
                }), [v]), (0, s.jsx)(c.WDSMenuItem, (0, u.default)((0, u.default)({
                    ref: p
                }, n), {}, {
                    type: "submenu",
                    onSelect: function() {
                        null != m.current && (m.current.popoverIsVisible ? m.current.hidePopover() : m.current.showPopover())
                    },
                    detailRight: (0, s.jsx)(o.ChevronRightIcon, {
                        width: 20
                    }),
                    children: (0, s.jsx)(l.DropdownMenu, {
                        controllerRef: m,
                        buffer: -8,
                        target: p,
                        position: l.PopoverPosition.End,
                        alignment: l.PopoverAlignment.Start,
                        initHandling: "hover-popover",
                        children: t
                    })
                }))
            };
            var u = r(n(81109)),
                i = r(n(506479)),
                o = n(286918),
                l = n(200315),
                a = n(832022),
                c = n(259978),
                d = n(667294),
                s = n(785893),
                f = ["children"]
        },
        791257: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SwitchMenuItem = function(e) {
                var t = e.initialState,
                    n = void 0 !== t && t,
                    r = e.onSelect,
                    f = (0, o.default)(e, s),
                    p = (0, c.useState)(n),
                    m = (0, i.default)(p, 2),
                    v = m[0],
                    h = m[1];
                return (0, d.jsx)(a.WDSMenuItem, (0, u.default)((0, u.default)({}, f), {}, {
                    type: "switch",
                    onSelect: function() {
                        h(!v), null == r || r(!v)
                    },
                    primaryRight: (0, d.jsx)(l.Switch, {
                        checked: v,
                        onChange: function() {},
                        tabIndex: -1
                    })
                }))
            };
            var u = r(n(81109)),
                i = r(n(963038)),
                o = r(n(506479)),
                l = n(494594),
                a = n(259978),
                c = n(667294),
                d = n(785893),
                s = ["initialState", "onSelect"]
        },
        515452: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Select = void 0;
            var u = r(n(81109)),
                i = r(n(963038)),
                o = n(317109),
                l = n(200315),
                a = r(n(644178)),
                c = n(89653),
                d = n(655169),
                s = n(417162),
                f = n(71867),
                p = r(n(83938)),
                m = n(667294),
                v = r(n(156720)),
                h = r(n(273784)),
                g = r(n(295985)),
                b = n(785893),
                x = {
                    selectDropdownContainer: {
                        position: "g0rxnol2",
                        color: "k2bacm8l"
                    },
                    select: {
                        display: "p357zi0d",
                        alignItems: "gndfcl4n",
                        textAlign: "ljrqcn24",
                        position: "g0rxnol2",
                        backgroundColor: "f6cvynhn",
                        borderTop: "kagi745y",
                        borderEnd: "evq3mrnv",
                        borderBottom: "daad4uqs",
                        borderStart: "jdssz2gn",
                        borderTopStartRadius: "m2gb0jvt",
                        borderTopEndRadius: "rfxpxord",
                        borderBottomEndRadius: "gwd8mfxi",
                        borderBottomStartRadius: "mnh9o63b",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        whiteSpace: "le5p0ye3",
                        textOverflow: "lhj4utae",
                        cursor: "ajgl1lbb",
                        userSelect: "rkxvyd19",
                        boxSizing: "cm280p3y",
                        width: "ln8gz9je"
                    },
                    selectFocused: {
                        borderTop: "ggk2mtcd",
                        borderEnd: "c4hi5cu5",
                        borderBottom: "dorenqkw",
                        borderStart: "pidw8noc"
                    },
                    label: {
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        textOverflow: "lhj4utae"
                    }
                },
                y = {
                    select: {
                        height: "qmp0wt83"
                    }
                },
                S = {
                    select: {
                        height: "sai7fuui"
                    }
                },
                M = (0, m.forwardRef)((function(e, t) {
                    var n = e.children,
                        r = e.label,
                        u = e.size,
                        l = void 0 === u ? "large" : u,
                        c = e.width,
                        d = e.ariaRoleDescription,
                        s = (0, h.default)(),
                        m = (0, i.default)(s, 2),
                        M = m[0],
                        C = m[1],
                        j = (0, g.default)(M, t);
                    return (0, b.jsxs)("div", {
                        className: (0, v.default)(x.selectDropdownContainer),
                        "aria-roledescription": d,
                        style: {
                            width: c
                        },
                        children: [(0, b.jsxs)(p.default, {
                            onClick: function(e) {
                                e.stopPropagation()
                            },
                            ref: j,
                            xstyle: [x.select, "large" === l && [y.select, f.uiPadding.start24, f.uiPadding.end36], "small" === l && [S.select, f.uiPadding.horiz16], C && x.selectFocused],
                            children: [(0, b.jsx)(a.default, {
                                grow: 1,
                                justify: "start",
                                xstyle: x.label,
                                children: r
                            }), (0, b.jsx)(o.CaretDownIcon, {
                                xstyle: f.uiPadding.start8
                            })]
                        }), n]
                    })
                }));
            M.displayName = "SelectButton";
            var C = (0, m.forwardRef)((function(e, t) {
                var n = e.defaultLabel,
                    r = e.customLabel,
                    o = e.children,
                    a = e.popoverControllerRef,
                    f = e.menuMinWidth,
                    p = e.menuMaxHeight,
                    v = e.ariaRoleDescription,
                    h = e.size,
                    x = e.width,
                    y = e.includeSearchInput,
                    S = new Map(m.Children.toArray(o).map((function(e) {
                        return [e.props.optionId, {
                            optionId: e.props.optionId,
                            label: e.props.primary
                        }]
                    }))),
                    C = function(e) {
                        var t, u, i;
                        if (null != r && (i = r(e)), null == i && null != e && e.size) {
                            var o = Array.from(e).map((function(e) {
                                var t, n = null === (t = S.get(e)) || void 0 === t ? void 0 : t.label;
                                return null != n ? [n, ", "] : null
                            })).filter(Boolean).flat().slice(0, -1);
                            i = o.length ? o : null
                        }
                        return null !== (t = null !== (u = i) && void 0 !== u ? u : n) && void 0 !== t ? t : ""
                    },
                    j = (0, m.useRef)(null),
                    w = (0, g.default)(t, j),
                    I = (0, m.useRef)(null),
                    _ = (0, s.toArray)(e.initialSelection),
                    P = (0, m.useState)(_),
                    O = (0, i.default)(P, 2),
                    R = O[0],
                    k = O[1],
                    T = (0, m.useState)(C(new Set(_))),
                    A = (0, i.default)(T, 2),
                    D = A[0],
                    E = A[1],
                    L = !0 === e.multiselect ? {
                        multiselect: !0,
                        initialSelection: R
                    } : {
                        multiselect: !1,
                        initialSelection: R[0]
                    };
                return (0, b.jsx)(M, {
                    ref: w,
                    ariaRoleDescription: v,
                    size: h,
                    label: D,
                    width: x,
                    children: (0, b.jsxs)(l.DropdownMenu, {
                        target: j,
                        listControllerRef: I,
                        controllerRef: a,
                        position: l.PopoverPosition.Bottom,
                        alignment: l.PopoverAlignment.Start,
                        maxHeight: p,
                        minWidth: null != f ? Math.max(f, x) : x,
                        initHandling: "click",
                        initialActiveOptionId: R[0],
                        children: [!0 === y ? (0, b.jsx)(c.MenuSearchInput, {}) : null, (0, b.jsx)(d.SelectMenuItemGroup, (0, u.default)((0, u.default)({}, L), {}, {
                            onSelect: function(t, n, r) {
                                var u, i, o = C(r);
                                (E(o), k(Array.from(r)), !0 === e.multiselect) ? null === (u = e.onChange) || void 0 === u || u.call(e, t, r.has(t), new Set(r)): null === (i = e.onChange) || void 0 === i || i.call(e, t)
                            },
                            children: o
                        }))]
                    })
                })
            }));
            t.Select = C, C.displayName = "Select"
        }
    }
]);