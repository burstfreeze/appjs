/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [3369], {
        20969: (e, t, n) => {
            "use strict";
            var r = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.value,
                    n = e.currency,
                    r = e.onChange,
                    a = e.getErrorMessage,
                    i = f(t, n, a),
                    o = (0, s.default)(i),
                    p = (0, s.default)(t);
                return (0, l.useEffect)((function() {
                    (null == p && null != i || p === t && o !== i) && r({
                        value: t,
                        error: i
                    })
                }), [i]), (0, c.jsx)("div", {
                    className: (0, u.default)(m),
                    children: (0, c.jsx)(d.TextInput, {
                        managed: !0,
                        constrainedWidth: !0,
                        hideFloatingLabel: !0,
                        placeholder: "0",
                        value: t,
                        theme: "small",
                        maxLength: 12,
                        customStyleThemes: ["disabledLabel", "noErrorInfo"],
                        onChange: function(e) {
                            r({
                                value: e,
                                error: f(e, n, a)
                            })
                        },
                        error: i
                    })
                })
            };
            var a = n(48360),
                l = n(67294),
                u = r(n(56720)),
                i = n(71150),
                o = n(89846),
                d = n(68544),
                s = r(n(40054)),
                c = n(85893);

            function f(e, t, n) {
                if (!(0, i.validatePriceString)(t, e)) return a.fbt._("Enter a valid number", null, {
                    hk: "2i2FVR"
                });
                var r = (0, i.valueFromString)(t, e) / o.DEFAULT_OFFSET;
                return r < 0 ? a.fbt._("Enter a positive number", null, {
                    hk: "V2XZe"
                }) : n(r)
            }
            var m = {
                textAlign: "ljrqcn24",
                width: "mh8l8k0y",
                overflowX: "gfz4du6o",
                overflowY: "r7fjleex",
                marginTop: "obt84bhp"
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
                    s = u.formatLocalSymbol(r),
                    c = a.fbt._("Select amount type", null, {
                        hk: "1xddkG"
                    }),
                    f = [{
                        id: "percentage",
                        label: a.fbt._("by Percentage ({percentage-symbol})", [a.fbt._param("percentage-symbol", i.PERCENTAGE_SYMBOL)], {
                            hk: "3fQwM3"
                        }),
                        value: i.PERCENTAGE_SYMBOL
                    }, {
                        id: "flat-amount",
                        label: a.fbt._("by Flat amount ({currency-symbol})", [a.fbt._param("currency-symbol", s)], {
                            hk: "duPhj"
                        }),
                        value: s
                    }],
                    m = (0, l.useMemo)((function() {
                        return f.findIndex((function(e) {
                            return e.value === t
                        }))
                    }), []);
                return (0, d.jsx)(o.default, {
                    "aria-label": c,
                    options: f,
                    defaultIndex: m,
                    onChange: n
                })
            };
            var a = n(48360),
                l = n(67294),
                u = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = s(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var u = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            u && (u.get || u.set) ? Object.defineProperty(r, l, u) : r[l] = e[l]
                        } r.default = e, n && n.set(e, r);
                    return r
                }(n(71150)),
                i = n(89846),
                o = r(n(658)),
                d = n(85893);

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (s = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        58556: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.anyFieldHasError = function(e) {
                for (var t in e)
                    if (null != e[t]) return !0;
                return !1
            }, t.getErrorMessageHandler = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.fieldType,
                    n = e.maxFlatValue,
                    r = e.errorMessageBigPercentageValue,
                    a = e.errorMessageBigFlatValue;
                return function(e) {
                    if (t === u.PERCENTAGE_SYMBOL) {
                        if (null != r && e > 100) return r
                    } else if (null != n && null != a && e > n) return a
                }
            }, t.useShowToastErrors = function(e) {
                (0, a.useEffect)((function() {
                    for (var t in e) {
                        var n = e[t];
                        null != n && l.Cmd.openToast((0, o.jsx)(i.Toast, {
                            duration: 1e4,
                            id: t + n.toString(),
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
                }), [e])
            };
            var r = n(48360),
                a = n(67294),
                l = n(65901),
                u = n(89846),
                i = n(92428),
                o = n(85893)
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
                    b = (0, l.useRef)(null),
                    g = (0, l.useState)(!1),
                    x = (0, a.default)(g, 2),
                    v = x[0],
                    y = x[1],
                    j = (0, l.useState)(n),
                    S = (0, a.default)(j, 2),
                    _ = S[0],
                    C = S[1],
                    T = r.map((function(e, t) {
                        var n = e.id,
                            r = e.label;
                        return (0, f.jsx)(o.DropdownItem, {
                            a8n: `mi-${n}`,
                            action: function() {
                                p(e), C(t)
                            },
                            children: (0, f.jsx)("div", {
                                className: (0, u.default)(m),
                                role: "button",
                                "aria-label": r,
                                children: t === _ ? (0, f.jsx)(d.TextSpan, {
                                    weight: "bold",
                                    children: r
                                }) : r
                            })
                        }, n)
                    }));
                return (0, f.jsxs)("div", {
                    ref: b,
                    children: [(0, f.jsx)(i.default, {
                        "aria-label": h,
                        postfixIcon: "down",
                        label: r[_].value,
                        onClick: function() {
                            return y((function(e) {
                                return !e
                            }))
                        }
                    }), v && b.current && (0, f.jsx)(s.UIE, {
                        displayName: "ValuePicker",
                        escapable: !0,
                        popable: !0,
                        requestDismiss: function() {
                            return y(!1)
                        },
                        children: (0, f.jsx)(c.default, {
                            contextMenu: {
                                menu: T,
                                anchor: b.current
                            }
                        })
                    })]
                })
            };
            var a = r(n(63038)),
                l = n(67294),
                u = r(n(56720)),
                i = r(n(8352)),
                o = n(94680),
                d = n(22552),
                s = n(16835),
                c = r(n(93820)),
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
        58602: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.additionalChargeErrorHandler = function(e) {
                var t = e.label,
                    n = e.currency,
                    r = e.fieldType,
                    c = e.maxFlatValue,
                    f = e.enablePercentValueCheck,
                    m = e.value;
                if (!(0, a.validatePriceString)(n, m)) return i;
                var p = (0, a.valueFromString)(n, m) / l.DEFAULT_OFFSET;
                if (p < 0) return o;
                if (r === l.PERCENTAGE_SYMBOL) {
                    if (Boolean(f) && p > 100) return d(null != t ? t : "")
                } else if ((0, u.isNumber)(c) && p > c) return s(null != t ? t : "");
                return ""
            }, t.negativeNumber = t.invalidNumber = t.errorMessageBigPercentageValue = t.errorMessageBigFlatValue = void 0;
            var r = n(48360),
                a = n(71150),
                l = n(89846),
                u = n(82118),
                i = r.fbt._("Enter a valid number", null, {
                    hk: "2i2FVR"
                });
            t.invalidNumber = i;
            var o = r.fbt._("Enter a positive number", null, {
                hk: "V2XZe"
            });
            t.negativeNumber = o;
            var d = function(e) {
                return r.fbt._("{input_label} can't be bigger than 100%", [r.fbt._param("input_label", e)], {
                    hk: "48j18J"
                })
            };
            t.errorMessageBigPercentageValue = d;
            var s = function(e) {
                return r.fbt._("{input_label} must be less than subtotal", [r.fbt._param("input_label", e)], {
                    hk: "1UOGGL"
                })
            };
            t.errorMessageBigFlatValue = s
        },
        60509: (e, t, n) => {
            "use strict";
            var r = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.order,
                    n = e.chat,
                    r = (0, f.useState)(oe.ORDER_SUMMARY),
                    d = (0, i.default)(r, 2),
                    s = d[0],
                    c = d[1],
                    m = (0, f.useState)(null),
                    p = (0, i.default)(m, 2),
                    g = p[0],
                    x = p[1],
                    v = (0, f.useState)(!1),
                    y = (0, i.default)(v, 2),
                    j = y[0],
                    S = y[1],
                    C = (0, f.useState)((function() {
                        var e;
                        return null !== (e = null == t ? void 0 : t.products.map((function(e) {
                            return new Y.default(e)
                        }))) && void 0 !== e ? e : []
                    })),
                    T = (0, i.default)(C, 2),
                    k = T[0],
                    M = T[1],
                    E = (0, f.useState)({}),
                    A = (0, i.default)(E, 2),
                    O = A[0],
                    P = A[1],
                    I = (0, f.useState)(null),
                    w = (0, i.default)(I, 2),
                    D = w[0],
                    R = w[1],
                    B = function(e, t) {
                        P((function(n) {
                            return (0, u.default)((0, u.default)({}, n), {}, (0, l.default)({}, t, e))
                        }))
                    },
                    V = (0, f.useMemo)((function() {
                        return k.reduce((function(e, t) {
                            var n, r;
                            return e + (null !== (n = null !== (r = t.price) && void 0 !== r ? r : O[t.id]) && void 0 !== n ? n : 0) * t.quantity
                        }), 0)
                    }), [k, O]),
                    q = (0, z.calculateFlatAmounts)({
                        orderSubtotal: V / z.DEFAULT_OFFSET,
                        discountType: (null == D ? void 0 : D.discountType) || "",
                        discountText: (null == D ? void 0 : D.discountText) || "",
                        taxType: (null == D ? void 0 : D.taxType) || "",
                        taxText: (null == D ? void 0 : D.taxText) || "",
                        shippingText: (null == D ? void 0 : D.shippingText) || ""
                    }),
                    U = function() {
                        var e = null != t ? t : L.OrderCollection.addOrder();
                        e.products = k.map((function(e) {
                            var t;
                            return e.price = null !== (t = e.price) && void 0 !== t ? t : O[e.id], e.currency = ce, e
                        })), e.currency = ce, e.subtotal = V, e.triggerItemCollectionUpdate(), (0, Z.sendOrderDetailsMessageAsMerchant)({
                            order: e,
                            chat: n,
                            orderNote: "",
                            offset: z.DEFAULT_OFFSET,
                            total: q.total,
                            discount: q.discount,
                            shipping: q.shipping,
                            tax: q.tax
                        }), _.Cmd.closeDrawerRight()
                    },
                    H = (0, b.hasCatalog)(h.BusinessProfileCollection.get((0, F.getMaybeMeUser)())),
                    G = (0, o.default)((function() {
                        _.Cmd.closeDrawerRight()
                    })),
                    W = function() {
                        ! function(e, t, n) {
                            if (!e) return t.length > 0;
                            return t.length !== e.products.length || t.some((function(t, r) {
                                var a, l;
                                return t.id !== e.products[r].id || t.quantity !== e.products[r].quantity || (null !== (a = null !== (l = t.price) && void 0 !== l ? l : n[t.id]) && void 0 !== a ? a : null) !== e.products[r].price
                            }))
                        }(t, k, O) ? G(): fe(G)
                    },
                    Q = function(e) {
                        !0 !== e && me(k, O), c(oe.ORDER_SUMMARY)
                    },
                    X = function() {
                        c(oe.CATALOG_PRODUCTS_FORM)
                    },
                    K = function(e, t) {
                        var n = Number.isInteger(e) ? e : null;
                        x(n), S(!0 === t), c(null == n || k[n].isCustomItem ? oe.CUSTOM_ITEM_FORM : oe.CATALOG_PRODUCTS_FORM)
                    },
                    $ = function() {
                        c(oe.ADDITIONAL_CHARGES_FORM)
                    },
                    J = function(e, t) {
                        var n = e.length,
                            r = e.reduce((function(e, t, n) {
                                return e.set(t.id, n)
                            }), new Map);
                        return (0, a.default)(t).sort((function(e, t) {
                            var a, l;
                            return (null !== (a = r.get(e.id)) && void 0 !== a ? a : n) - (null !== (l = r.get(t.id)) && void 0 !== l ? l : n)
                        }))
                    },
                    ee = function(e) {
                        M((function(t) {
                            return [].concat((0, a.default)(t.slice(0, e)), (0, a.default)(t.slice(e + 1)))
                        }))
                    },
                    te = function(e) {
                        var t, n, r, l, u, i;
                        null != g ? function(e, t) {
                            M((function(n) {
                                var r, l = (0, a.default)(n);
                                return l[t].set({
                                    name: String(e.name),
                                    price: Number(e.priceAmount1000),
                                    quantity: null !== (r = e.quantity) && void 0 !== r ? r : 1,
                                    isQuantitySet: e.isQuantitySet
                                }), l
                            }))
                        }(e, g) : (n = (t = e).name, r = t.priceAmount1000, l = t.quantity, u = t.isQuantitySet, i = (0, N.default)(), M((function(e) {
                            return J(e, [].concat((0, a.default)(e), [new Y.default({
                                id: i,
                                name: n,
                                price: r,
                                quantity: null != l ? l : 1,
                                isCustomItem: !0,
                                isQuantitySet: u
                            })]))
                        })))
                    },
                    re = de.indexOf(s);
                if (!s) return null;
                return (0, ue.jsx)(le.default, {
                    children: (0, ue.jsx)(ne.UIE, {
                        displayName: `FlowDrawer${re}`,
                        escapable: !0,
                        requestDismiss: function() {
                            G()
                        },
                        children: (0, ue.jsx)("div", {
                            children: function(e) {
                                switch (e) {
                                    case oe.CATALOG_PRODUCTS_FORM:
                                        return (0, ue.jsx)(ge, {
                                            orderProducts: k,
                                            onBack: Q,
                                            onAddProdutcs: function(e) {
                                                var t;
                                                t = e, M((function(e) {
                                                    return J(e, [].concat((0, a.default)(e.filter((function(e) {
                                                        return e.isCustomItem
                                                    }))), (0, a.default)(t)))
                                                })), me(t, O), Q(!0)
                                            },
                                            onAddCustomItem: function() {
                                                K(null, !0)
                                            }
                                        });
                                    case oe.CUSTOM_ITEM_FORM:
                                        return (0, ue.jsx)(be, {
                                            onBack: j ? X : Q,
                                            onSaveCustomItem: function(e) {
                                                te(e), Q()
                                            },
                                            customItem: k[Number.isInteger(g) ? Number(g) : -1]
                                        });
                                    case oe.ORDER_SUMMARY:
                                        return (0, ue.jsx)(xe, {
                                            chat: n,
                                            priceMap: O,
                                            orderItems: k,
                                            orderSubtotal: V,
                                            flatAdditionalAmounts: q,
                                            onPriceChange: B,
                                            onBack: W,
                                            onSubmit: U,
                                            onAddItem: H ? X : K,
                                            onAdditionalCharges: $,
                                            onDeleteItem: ee,
                                            onEditItem: K
                                        });
                                    case oe.ADDITIONAL_CHARGES_FORM:
                                        return (0, ue.jsx)(Se, {
                                            additionalValues: D,
                                            subtotal: V,
                                            onBack: Q,
                                            onApply: function(e) {
                                                R((function(t) {
                                                    return (0, u.default)((0, u.default)({}, t), e)
                                                })), Q()
                                            }
                                        })
                                }
                            }(s)
                        })
                    }, re)
                })
            };
            var a = r(n(319)),
                l = r(n(59713)),
                u = r(n(81109)),
                i = r(n(63038)),
                o = r(n(51463)),
                d = r(n(64709)),
                s = n(71091),
                c = n(48360),
                f = n(67294),
                m = r(n(56720)),
                p = n(58602),
                h = n(26141),
                b = n(79614),
                g = r(n(51599)),
                x = r(n(31527)),
                v = n(72743),
                y = n(66419),
                j = r(n(88186)),
                S = r(n(17130)),
                _ = n(65901),
                C = r(n(86777)),
                T = n(11919),
                k = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = ie(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var u = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            u && (u.get || u.set) ? Object.defineProperty(r, l, u) : r[l] = e[l]
                        } r.default = e, n && n.set(e, r);
                    return r
                }(n(71150)),
                M = r(n(38275)),
                E = r(n(53187)),
                A = r(n(18345)),
                O = n(19288),
                P = r(n(46821)),
                I = n(73568),
                w = r(n(23803)),
                D = r(n(92546)),
                R = n(27968),
                F = n(1577),
                N = r(n(90629)),
                B = n(2629),
                L = n(11467),
                V = r(n(20969)),
                q = n(25335),
                U = n(58556),
                z = n(89846),
                H = r(n(58636)),
                G = r(n(73715)),
                W = r(n(76834)),
                Y = (r(n(64689)), r(n(40972))),
                Q = n(3544),
                X = r(n(99262)),
                K = n(47576),
                Z = n(97629),
                $ = r(n(7665)),
                J = n(22552),
                ee = n(68544),
                te = n(92428),
                ne = n(16835),
                re = r(n(57811)),
                ae = r(n(39394)),
                le = r(n(60806)),
                ue = n(85893);

            function ie(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (ie = function(e) {
                    return e ? n : t
                })(e)
            }
            var oe = n(76672).Mirrored(["CATALOG_PRODUCTS_FORM", "CUSTOM_ITEM_FORM", "ORDER_SUMMARY", "ADDITIONAL_CHARGES_FORM"]),
                de = Array.from(oe.members()),
                se = {
                    drawerBody: {
                        backgroundColor: "ihvf49ua"
                    },
                    buttonContainer: {
                        display: "p357zi0d",
                        flexDirection: "f8m0rgwh",
                        alignItems: "gndfcl4n"
                    },
                    iconContainer: {
                        display: "p357zi0d",
                        alignItems: "gndfcl4n",
                        width: "dyxdk6fi",
                        height: "m3o1wsh7",
                        borderTopStartRadius: "bbr44loe",
                        borderTopEndRadius: "ooj5yc5b",
                        borderBottomEndRadius: "m8i16etx",
                        borderBottomStartRadius: "cw0ivh8j",
                        backgroundColor: "lzol1dln"
                    },
                    iconSVG: {
                        marginTop: "m3ct2rho",
                        marginEnd: "k1jo73ug",
                        marginBottom: "ec1z5skj",
                        marginStart: "isfiuinm",
                        color: "s4recxw2"
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
                    catalogBar: {
                        borderTop: "gq6acybq",
                        borderEnd: "toel9vei",
                        borderBottom: "eyd9s9cm",
                        borderStart: "ap1jplnr"
                    },
                    catalogTitleText: {
                        fontWeight: "m1e7cby3",
                        lineHeight: "a4ywakfo",
                        color: "q70jrbp7"
                    },
                    orderTotal: {
                        display: "p357zi0d",
                        flexDirection: "sap93d0t",
                        justifyContent: "o4u7okr9",
                        fontWeight: "nbipi2bn"
                    },
                    additionalChargeInputContainer: {
                        position: "g0rxnol2"
                    },
                    typeSelector: {
                        position: "lhggkp7q",
                        end: "ebjesfe0",
                        zIndex: "mb8var44",
                        top: "agjvi7sf"
                    }
                },
                ce = k.currencyForCountryShortcode((0, T.getCountryShortcodeByPhone)((0, F.getMeUser)().user)),
                fe = function(e) {
                    _.Cmd.openModal((0, ue.jsx)(C.default, {
                        title: c.fbt._("Discard changes?", null, {
                            hk: "2aroAx"
                        }),
                        onOK: function() {
                            _.Cmd.closeModal(), e()
                        },
                        okText: c.fbt._("Discard", null, {
                            hk: "2rIxjp"
                        }),
                        onCancel: function() {
                            return _.Cmd.closeModal()
                        },
                        children: (0, ue.jsx)(J.TextDiv, {
                            theme: "muted",
                            children: c.fbt._("If you close this, your draft will be discarded.", null, {
                                hk: "2Sbnur"
                            })
                        })
                    }))
                },
                me = function(e, t) {
                    var n = e.reduce((function(e, n) {
                        var r, a = null !== (r = n.price) && void 0 !== r ? r : t[n.id];
                        return Number.isInteger(a) || e.push(n.name || ""), e
                    }), []);
                    if (0 !== n.length) {
                        for (var r = n[0], a = c.fbt._("and", null, {
                                hk: "4cMq7Y"
                            }), l = 1; l < Math.min(n.length, 2); l++) r += ", " + n[l];
                        var u = n.length - 2,
                            i = r.lastIndexOf(",");
                        u <= 0 && i >= 0 && (r = `${r.substring(i,0)} ${a.toString()}${r.substring(i+1)}`);
                        var o = u <= 0 ? c.fbt._("Add price for {items-names}", [c.fbt._param("items-names", r)], {
                            hk: "22ZShF"
                        }) : c.fbt._("Add price for {items-names} and {items-quantity} other items", [c.fbt._param("items-names", r), c.fbt._param("items-quantity", u)], {
                            hk: "aX7H6"
                        });
                        _.Cmd.openToast((0, ue.jsx)(te.Toast, {
                            duration: 1e4,
                            id: (0, te.genId)(),
                            msg: o,
                            action: {
                                actionText: c.fbt._("OKAY", null, {
                                    hk: "24jI97"
                                }),
                                dismiss: !0,
                                theme: "success"
                            }
                        }))
                    }
                };

            function pe(e) {
                return Number.isInteger(e) && +e > 0
            }

            function he(e) {
                return k.formatAmount(ce, e / z.DEFAULT_OFFSET)
            }

            function be(e) {
                var t = e.customItem,
                    n = e.onBack,
                    r = e.onSaveCustomItem,
                    a = (0, f.useState)(null == t ? void 0 : t.name),
                    l = (0, i.default)(a, 2),
                    u = l[0],
                    o = l[1],
                    d = (0, f.useState)(Number.isInteger(null == t ? void 0 : t.price) ? String(Number(null == t ? void 0 : t.price) / 1e3) : null),
                    p = (0, i.default)(d, 2),
                    h = p[0],
                    b = p[1],
                    x = (0, f.useState)(Number(null == t ? void 0 : t.price)),
                    v = (0, i.default)(x, 2),
                    y = v[0],
                    j = v[1],
                    S = (0, f.useState)(null == t ? void 0 : t.quantity),
                    _ = (0, i.default)(S, 2),
                    C = _[0],
                    T = _[1],
                    M = (0, f.useState)((null == t ? void 0 : t.isQuantitySet) ? String(t.quantity) : null),
                    P = (0, i.default)(M, 2),
                    I = P[0],
                    w = P[1],
                    D = (0, f.useMemo)((function() {
                        return function(e) {
                            if (null == e) return "";
                            var t = String(c.fbt._("Add a title", null, {
                                hk: "3QauyV"
                            }));
                            return "" === e.trim() ? t : ""
                        }(u)
                    }), [u]),
                    R = (0, f.useMemo)((function() {
                        return function(e) {
                            if (null == e) return "";
                            var t = String(c.fbt._("Enter a valid price", null, {
                                hk: "nzgo4"
                            }));
                            return "" !== e.trim() && k.validatePriceString(ce, e, Q.MIN_PRICE, Q.MAX_PRICE) ? "" : t
                        }(h)
                    }), [h]),
                    F = (0, f.useMemo)((function() {
                        return function(e) {
                            if (null == e) return "";
                            var t = String(c.fbt._("Enter a valid quantity", null, {
                                hk: "13oaEC"
                            }));
                            return pe(Number(e)) ? "" : t
                        }(I)
                    }), [I]);
                return (0, ue.jsxs)(E.default, {
                    children: [(0, ue.jsx)(O.DrawerHeader, {
                        title: t ? c.fbt._("Update items", null, {
                            hk: "8H9jW"
                        }) : c.fbt._("Add items", null, {
                            hk: "2SjafD"
                        }),
                        type: O.DRAWER_HEADER_TYPE.SMALL,
                        onBack: n,
                        focusBackOrCancel: !0
                    }), (0, ue.jsxs)(A.default, {
                        className: (0, m.default)(se.drawerBody, s.uiPadding.all16),
                        children: [(0, ue.jsx)(ee.TextInput, {
                            a8n: "product-edit-drawer-item-name-input",
                            value: u,
                            placeholder: c.fbt._("Item name", null, {
                                hk: "1LDktG"
                            }),
                            onChange: function(e) {
                                o(e)
                            },
                            theme: "small",
                            customStyleThemes: ["desaturated"],
                            maxLength: 150,
                            error: D
                        }), (0, ue.jsx)(ee.TextInput, {
                            a8n: "product-edit-drawer-item-price-input",
                            value: h,
                            placeholder: c.fbt._("Price {symbol}", [c.fbt._param("symbol", k.formatAmount1000ToParts(ce, 0).symbol)], {
                                hk: "3yCPZW"
                            }),
                            onChange: function(e) {
                                var t = k.valueFromString(ce, e);
                                j(t), b(e)
                            },
                            theme: "small",
                            maxLength: 30,
                            customStyleThemes: ["desaturated"],
                            error: R
                        }), (0, ue.jsx)(ee.TextInput, {
                            a8n: "product-edit-drawer-item-quantity-input",
                            value: I,
                            placeholder: c.fbt._("Quantity (Optional)", null, {
                                hk: "30uF5W"
                            }),
                            onChange: function(e) {
                                var t = "" === e ? null : Number(e);
                                pe(t) || (t = null), T(t), w("" === e ? null : e)
                            },
                            theme: "small",
                            maxLength: 30,
                            customStyleThemes: ["desaturated"],
                            error: F
                        }), (0, ue.jsx)("div", {
                            className: (0, m.default)(se.buttonContainer, s.uiMargin.top16),
                            children: (0, ue.jsx)(g.default, {
                                type: "primary",
                                disabled: null == u || null == h || [D, R, F].some((function(e) {
                                    return e
                                })),
                                onClick: function() {
                                    var e = {
                                        name: u,
                                        priceAmount1000: y,
                                        quantity: C,
                                        isQuantitySet: Number.isInteger(C)
                                    };
                                    r(e)
                                },
                                children: t ? c.fbt._("Update", null, {
                                    hk: "iXFTM"
                                }) : c.fbt._("Add", null, {
                                    hk: "3ogfSW"
                                })
                            })
                        })]
                    })]
                })
            }

            function ge(e) {
                var t = e.orderProducts,
                    n = e.onBack,
                    r = e.onAddProdutcs,
                    a = e.onAddCustomItem,
                    l = (0, f.useState)(0),
                    u = (0, i.default)(l, 2),
                    o = u[0],
                    p = u[1],
                    h = (0, f.useState)(!0),
                    b = (0, i.default)(h, 2),
                    x = b[0],
                    S = b[1],
                    _ = (0, f.useState)(!1),
                    C = (0, i.default)(_, 2),
                    T = C[0],
                    k = C[1],
                    M = (0, re.default)(),
                    P = (0, ae.default)((function() {
                        return new D.default
                    })),
                    R = function() {
                        var e = v.CatalogCollection.get((0, F.getMaybeMeUser)());
                        return e ? e.productCollection.getProductModels().map((function(e) {
                            return {
                                itemKey: e.id.toString(),
                                product: e
                            }
                        })) : []
                    },
                    N = (0, ae.default)((function() {
                        return new d.default([], (function(e) {
                            return e.id.toString()
                        }))
                    })).current,
                    L = function(e) {
                        var t = N.isSelected(e);
                        N.setVal(e, t ? 0 : 1), p(o + (t ? -1 : 1)), T || k(!0), M()
                    },
                    V = function(e, t) {
                        N.setVal(e, t), T || k(!0), M()
                    };
                (0, f.useEffect)((function() {
                    var e = 0;
                    R().forEach((function(n) {
                        var r = t.find((function(e) {
                            return e.id === n.product.id
                        }));
                        void 0 !== r && (N.setVal(n.product, Number(r.quantity)), e += 1)
                    })), M(), p(e), S(0 === e)
                }), [t, N, M]);
                var q = N.getSelected().reduce((function(e, t) {
                    return e + (t.priceAmount1000 || 0) * Number(N.getVal(t))
                }), 0);
                return (0, ue.jsxs)(E.default, {
                    children: [(0, ue.jsx)(O.DrawerHeader, {
                        title: c.fbt._("Add items", null, {
                            hk: "2nsVXo"
                        }),
                        type: O.DRAWER_HEADER_TYPE.SMALL,
                        onBack: (x ? o : T) ? function() {
                            fe(n)
                        } : n,
                        focusBackOrCancel: !0
                    }), (0, ue.jsxs)(A.default, {
                        children: [(0, ue.jsxs)(w.default, {
                            className: (0, m.default)(se.drawerBody),
                            flatListControllers: [P.current],
                            children: [(0, B.orderDetailsCustomItemEnabled)() && (0, ue.jsxs)(ue.Fragment, {
                                children: [(0, ue.jsx)(j.default, {
                                    image: (0, ue.jsx)("div", {
                                        className: (0, m.default)(se.iconContainer),
                                        children: (0, ue.jsx)($.default, {
                                            className: (0, m.default)(se.iconSVG),
                                            name: "add-item"
                                        })
                                    }),
                                    primary: c.fbt._("Add custom item", null, {
                                        hk: "DCIZF"
                                    }),
                                    theme: "add-order-item",
                                    onClick: a
                                }), (0, ue.jsx)("hr", {
                                    className: (0, m.default)(se.catalogBar, s.uiMargin.top0)
                                })]
                            }), (0, ue.jsx)("p", {
                                className: (0, m.default)(se.catalogTitleText, s.uiMargin.start15),
                                children: c.fbt._("Catalog items", null, {
                                    hk: "2rgdJA"
                                })
                            }), (0, ue.jsx)(I.FlatList, {
                                flatListController: P.current,
                                direction: "vertical",
                                forceConsistentRenderCount: !1,
                                data: R(),
                                renderItem: function(e) {
                                    var t = e.product;
                                    return (0, ue.jsx)(ve, {
                                        product: t,
                                        selections: N,
                                        onProductClick: L,
                                        onProductQuantityChange: V
                                    })
                                },
                                defaultItemHeight: y.PRODUCT_LIST_ITEM_HEIGHT
                            })]
                        }), (!x || T) && (0, ue.jsxs)("div", {
                            className: (0, m.default)(se.drawerBody, s.uiPadding.all16, s.uiMargin.top10),
                            children: [(0, ue.jsxs)("div", {
                                className: (0, m.default)(se.orderTotal),
                                children: [c.fbt._("Total", null, {
                                    hk: "pz5vA"
                                }), (0, ue.jsx)("p", {
                                    children: he(q)
                                })]
                            }), (0, ue.jsx)("div", {
                                className: (0, m.default)(se.buttonContainer, s.uiMargin.top16),
                                children: (0, ue.jsx)(g.default, {
                                    type: "primary",
                                    disabled: x ? 0 === o : !T,
                                    onClick: function() {
                                        var e = N.getSelected().map((function(e) {
                                            var t;
                                            return new Y.default({
                                                id: e.id,
                                                name: e.name,
                                                price: e.priceAmount1000,
                                                thumbnailUrl: null === (t = e.getPreviewImage()) || void 0 === t ? void 0 : t.mediaUrl,
                                                quantity: Number(N.getVal(e)),
                                                isCustomItem: !1,
                                                isQuantitySet: !0
                                            })
                                        }));
                                        r(e)
                                    },
                                    children: x ? c.fbt._("Add", null, {
                                        hk: "3ErADm"
                                    }) : c.fbt._("Update", null, {
                                        hk: "2vxW5D"
                                    })
                                })
                            })]
                        })]
                    })]
                })
            }

            function xe(e) {
                e.chat;
                var t = e.priceMap,
                    n = e.orderItems,
                    r = e.orderSubtotal,
                    a = e.flatAdditionalAmounts,
                    l = e.onPriceChange,
                    u = e.onBack,
                    o = e.onSubmit,
                    d = e.onAddItem,
                    p = e.onAdditionalCharges,
                    h = e.onDeleteItem,
                    b = e.onEditItem,
                    x = (0, f.useState)(null),
                    v = (0, i.default)(x, 2),
                    y = v[0],
                    S = v[1],
                    _ = (0, ue.jsx)("div", {
                        className: (0, m.default)(se.iconContainer),
                        children: (0, ue.jsx)($.default, {
                            className: (0, m.default)(se.iconSVG),
                            name: "add-item"
                        })
                    }),
                    C = n.every((function(e) {
                        var n;
                        return Number.isInteger(null !== (n = e.price) && void 0 !== n ? n : t[e.id])
                    })),
                    T = 0 !== n.length;
                return (0, ue.jsxs)(E.default, {
                    children: [(0, ue.jsx)(O.DrawerHeader, {
                        title: T ? c.fbt._("Review Order", null, {
                            hk: "1yDsQ1"
                        }) : c.fbt._("Create order", null, {
                            hk: "3snLWG"
                        }),
                        onBack: u,
                        type: O.DRAWER_HEADER_TYPE.SMALL
                    }), (0, ue.jsxs)(A.default, {
                        children: [(0, ue.jsx)(P.default, {
                            xstyle: [s.uiPadding.top20, s.uiPadding.horiz16, s.uiPadding.bottom15],
                            theme: "refresh-padding-title",
                            children: (0, ue.jsxs)(H.default, {
                                children: [(0, ue.jsx)(G.default, {
                                    sellerWid: (0, F.getMeUser)(),
                                    orderStatus: (0, ue.jsx)(W.default, {})
                                }), (0, ue.jsxs)(R.FlexColumn, {
                                    align: "stretch",
                                    xstyle: s.uiMargin.horiz0,
                                    children: [(0, ue.jsx)(j.default, {
                                        image: _,
                                        primary: c.fbt._("Add item", null, {
                                            hk: "3uoH1r"
                                        }),
                                        theme: "add-order-item",
                                        onClick: d
                                    }), n.map((function(e, n) {
                                        var r, a = null != e.price ? he(e.price) : null,
                                            u = c.fbt._("Quantity {item-quantity}", [c.fbt._param("item-quantity", e.quantity)], {
                                                hk: "39jSdf"
                                            });
                                        return (0, ue.jsx)("div", {
                                            className: (0, m.default)(s.uiPadding.top20),
                                            children: (0, ue.jsx)(j.default, {
                                                image: (r = e, r.isCustomItem ? (0, ue.jsx)("div", {
                                                    className: (0, m.default)(se.iconContainer),
                                                    children: (0, ue.jsx)($.default, {
                                                        className: (0, m.default)(se.iconSVG),
                                                        name: "list-msg-icon"
                                                    })
                                                }) : (0, ue.jsx)(K.ProductThumb, {
                                                    mediaData: r.mediaData,
                                                    theme: "squareThumb"
                                                })),
                                                primary: e.name,
                                                secondary: e.isQuantitySet ? u : null,
                                                theme: "media",
                                                onMouseOver: function() {
                                                    S(n)
                                                },
                                                onMouseLeave: function() {
                                                    S(null)
                                                },
                                                detail: y === n && e.isCustomItem ? (0, ue.jsx)(M.default, {
                                                    onClick: function(e) {
                                                        e.stopPropagation(), h(n)
                                                    }
                                                }) : null != a ? a : (0, ue.jsx)(ye, {
                                                    price: t[e.id],
                                                    onPriceChange: function(t) {
                                                        l(t, e.id)
                                                    }
                                                }),
                                                onClick: function() {
                                                    b(n)
                                                }
                                            })
                                        }, n)
                                    }))]
                                }), (0, ue.jsxs)(R.FlexColumn, {
                                    align: "stretch",
                                    xstyle: se.orderFieldsContainer,
                                    children: [(0, ue.jsxs)(R.FlexRow, {
                                        justify: "all",
                                        children: [(0, ue.jsx)(J.TextSpan, {
                                            color: "secondary",
                                            size: "16",
                                            children: c.fbt._("Subtotal", null, {
                                                hk: "4ciFet"
                                            })
                                        }), (0, ue.jsx)(J.TextSpan, {
                                            color: "secondary",
                                            size: "16",
                                            children: he(r)
                                        })]
                                    }), Boolean(a.discount) && (0, ue.jsxs)(R.FlexRow, {
                                        justify: "all",
                                        children: [(0, ue.jsx)(J.TextSpan, {
                                            color: "secondary",
                                            size: "16",
                                            children: c.fbt._("Discount", null, {
                                                hk: "3W4mK5"
                                            })
                                        }), (0, ue.jsx)(J.TextSpan, {
                                            color: "secondary",
                                            size: "16",
                                            children: he(-1 * +a.discount)
                                        })]
                                    }), Boolean(a.shipping) && (0, ue.jsxs)(R.FlexRow, {
                                        justify: "all",
                                        children: [(0, ue.jsx)(J.TextSpan, {
                                            color: "secondary",
                                            size: "16",
                                            children: c.fbt._("Shipping", null, {
                                                hk: "1xKyVx"
                                            })
                                        }), (0, ue.jsx)(J.TextSpan, {
                                            color: "secondary",
                                            size: "16",
                                            children: he(+a.shipping)
                                        })]
                                    }), Boolean(a.tax) && (0, ue.jsxs)(R.FlexRow, {
                                        justify: "all",
                                        children: [(0, ue.jsx)(J.TextSpan, {
                                            color: "secondary",
                                            size: "16",
                                            children: c.fbt._("Tax", null, {
                                                hk: "2G3BQt"
                                            })
                                        }), (0, ue.jsx)(J.TextSpan, {
                                            color: "secondary",
                                            size: "16",
                                            children: he(+a.tax)
                                        })]
                                    }), T && (0, ue.jsx)(R.FlexRow, {
                                        justify: "all",
                                        align: "center",
                                        children: (0, ue.jsx)(g.default, {
                                            onClick: p,
                                            className: (0, m.default)(se.clickableText, s.uiMargin.bottom0),
                                            children: c.fbt._("Additional Charges", null, {
                                                hk: "3I4vSr"
                                            })
                                        })
                                    })]
                                })]
                            })
                        }), T && (0, ue.jsxs)(P.default, {
                            xstyle: [s.uiPadding.top20, s.uiPadding.horiz16],
                            theme: "refresh-padding-title",
                            children: [(0, ue.jsxs)("div", {
                                className: (0, m.default)(se.orderTotal),
                                children: [c.fbt._("Total", null, {
                                    hk: "4kHQl"
                                }), (0, ue.jsx)("p", {
                                    children: he(a.total)
                                })]
                            }), (0, ue.jsx)("div", {
                                className: (0, m.default)(se.buttonContainer, s.uiMargin.vert15),
                                children: (0, ue.jsx)(g.default, {
                                    type: "primary",
                                    disabled: !C,
                                    onClick: o,
                                    children: c.fbt._("Send Order", null, {
                                        hk: "3wTiM3"
                                    })
                                })
                            })]
                        })]
                    })]
                })
            }

            function ve(e) {
                var t = e.product,
                    n = e.selections,
                    r = e.onProductClick,
                    a = e.onProductQuantityChange;
                return (0, ue.jsx)(S.default, {
                    model: t,
                    selections: n,
                    children: (0, ue.jsx)(X.default, {
                        product: t,
                        onClick: function() {
                            return r(t)
                        },
                        checkbox: !0,
                        detail: n.isSelected(t) && (0, ue.jsx)("div", {
                            children: (0, ue.jsx)(x.default, {
                                quantity: Number(n.getVal(t)),
                                onChange: function(e) {
                                    return a(t, e)
                                }
                            })
                        })
                    })
                }, t.id.toString())
            }

            function ye(e) {
                var t = e.price,
                    n = e.onPriceChange,
                    r = (0, f.useState)(null != t ? String(t / 1e3) : null),
                    a = (0, i.default)(r, 2),
                    l = a[0],
                    u = a[1],
                    o = (0, f.useState)(null),
                    d = (0, i.default)(o, 2),
                    s = d[0],
                    p = d[1];
                return (0, U.useShowToastErrors)({
                    productPriceError: s
                }), (0, ue.jsx)(g.default, {
                    onClick: function(e) {
                        e.stopPropagation(), null == l && u("")
                    },
                    className: (0, m.default)(se.clickableText),
                    children: null == l ? c.fbt._("Set Price", null, {
                        hk: "2BCDBr"
                    }) : (0, ue.jsx)(V.default, {
                        currency: ce,
                        value: l || "",
                        onChange: function(e) {
                            var t = e.value,
                                r = e.error;
                            !1 === Boolean(r) && n(t ? k.valueFromString(ce, t) : null), u(t), p(r)
                        },
                        getErrorMessage: function() {}
                    })
                })
            }

            function je(e) {
                var t = e.text,
                    n = e.label,
                    r = e.symbol,
                    a = e.priceValue,
                    l = e.setText,
                    u = e.setError,
                    i = e.setSymbol,
                    o = (0, f.useMemo)((function() {
                        var e = (0, p.additionalChargeErrorHandler)({
                            label: n,
                            currency: ce,
                            fieldType: r,
                            maxFlatValue: a / z.DEFAULT_OFFSET,
                            enablePercentValueCheck: !0,
                            value: t
                        });
                        return u(Boolean(e)), e
                    }), [t, n, r, u, a]);
                return (0, ue.jsxs)("div", {
                    className: (0, m.default)(se.additionalChargeInputContainer),
                    children: [(0, ue.jsx)(ee.TextInput, {
                        value: t,
                        placeholder: c.fbt._("{input_label} ({currency_or_percentage})", [c.fbt._param("input_label", n), c.fbt._param("currency_or_percentage", r)], {
                            hk: "1j7m80"
                        }),
                        onChange: function(e) {
                            return l(e)
                        },
                        theme: "small",
                        maxLength: 10,
                        customStyleThemes: ["desaturated"],
                        error: o
                    }), (0, ue.jsx)("div", {
                        className: (0, m.default)(se.typeSelector),
                        children: (0, ue.jsx)(q.OrderDetailAmountTypeSelector, {
                            currency: ce,
                            value: r,
                            onChange: function(e) {
                                var t = e.value;
                                return i(t)
                            }
                        })
                    })]
                })
            }

            function Se(e) {
                var t = e.subtotal,
                    n = e.additionalValues,
                    r = e.onBack,
                    a = e.onApply,
                    l = (0, f.useState)((null == n ? void 0 : n.discountText) || ""),
                    u = (0, i.default)(l, 2),
                    o = u[0],
                    d = u[1],
                    h = (0, f.useState)((null == n ? void 0 : n.taxText) || ""),
                    b = (0, i.default)(h, 2),
                    x = b[0],
                    v = b[1],
                    y = (0, f.useState)((null == n ? void 0 : n.shippingText) || ""),
                    j = (0, i.default)(y, 2),
                    S = j[0],
                    _ = j[1],
                    C = (0, f.useState)((null == n ? void 0 : n.discountType) || z.PERCENTAGE_SYMBOL),
                    T = (0, i.default)(C, 2),
                    M = T[0],
                    P = T[1],
                    I = (0, f.useState)((null == n ? void 0 : n.taxType) || z.PERCENTAGE_SYMBOL),
                    w = (0, i.default)(I, 2),
                    D = w[0],
                    R = w[1],
                    F = (0, f.useState)(!1),
                    N = (0, i.default)(F, 2),
                    B = N[0],
                    L = N[1],
                    V = (0, f.useState)(!1),
                    q = (0, i.default)(V, 2),
                    U = q[0],
                    H = q[1],
                    G = (0, f.useMemo)((function() {
                        return (0, p.additionalChargeErrorHandler)({
                            currency: ce,
                            value: S
                        })
                    }), [S]),
                    W = [B, U, G].some((function(e) {
                        return e
                    }));
                return (0, ue.jsxs)(E.default, {
                    children: [(0, ue.jsx)(O.DrawerHeader, {
                        title: c.fbt._("Additional Charges", null, {
                            hk: "3hDtAE"
                        }),
                        type: O.DRAWER_HEADER_TYPE.SMALL,
                        onBack: r,
                        focusBackOrCancel: !0
                    }), (0, ue.jsxs)(A.default, {
                        className: (0, m.default)(se.drawerBody, s.uiPadding.all16),
                        children: [(0, ue.jsx)(je, {
                            text: o,
                            label: c.fbt._("Discount", null, {
                                hk: "3dW1e0"
                            }),
                            symbol: M,
                            priceValue: t,
                            setText: d,
                            setError: L,
                            setSymbol: P
                        }), (0, ue.jsx)(je, {
                            text: x,
                            label: c.fbt._("Tax", null, {
                                hk: "2Ghypp"
                            }),
                            symbol: D,
                            priceValue: t,
                            setText: v,
                            setError: H,
                            setSymbol: R
                        }), (0, ue.jsx)(ee.TextInput, {
                            value: S,
                            placeholder: c.fbt._("Shipping ({currency_symbol})", [c.fbt._param("currency_symbol", k.formatAmount1000ToParts(ce, 0).symbol)], {
                                hk: "1z5IVc"
                            }),
                            onChange: _,
                            theme: "small",
                            maxLength: 10,
                            customStyleThemes: ["desaturated"],
                            error: G
                        }), (0, ue.jsx)("div", {
                            className: (0, m.default)(se.buttonContainer, s.uiMargin.top16),
                            children: (0, ue.jsx)(g.default, {
                                type: "primary",
                                disabled: W,
                                onClick: function() {
                                    return a({
                                        discountText: o,
                                        taxText: x,
                                        shippingText: S,
                                        discountType: M,
                                        taxType: D
                                    })
                                },
                                children: c.fbt._("Apply", null, {
                                    hk: "1af9Ka"
                                })
                            })
                        })]
                    })]
                })
            }
        }
    }
]);