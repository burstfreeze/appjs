/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [3369], {
        60509: (e, t, n) => {
            "use strict";
            var r = n(20862),
                l = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.chat,
                    n = (0, c.useState)(X.ORDER_SUMMARY),
                    r = (0, a.default)(n, 2),
                    l = r[0],
                    o = r[1],
                    s = (0, c.useState)([]),
                    h = (0, a.default)(s, 2),
                    x = h[0],
                    g = h[1],
                    p = (0, c.useState)(null),
                    b = (0, a.default)(p, 2),
                    j = b[0],
                    S = b[1],
                    _ = (0, m.hasCatalog)(f.BusinessProfileCollection.get((0, E.getMaybeMeUser)())),
                    k = (0, i.default)((function() {
                        C.Cmd.closeDrawerRight()
                    })),
                    v = function() {
                        var e;
                        x.length > 0 ? (e = k, C.Cmd.openModal((0, Q.jsx)(y.default, {
                            title: d.fbt._("Discard changes?", null, {
                                hk: "2aroAx"
                            }),
                            onOK: function() {
                                C.Cmd.closeModal(), e()
                            },
                            okText: d.fbt._("Discard", null, {
                                hk: "2rIxjp"
                            }),
                            onCancel: function() {
                                return C.Cmd.closeModal()
                            },
                            children: (0, Q.jsx)(z.TextDiv, {
                                theme: "muted",
                                children: d.fbt._("If you close this, your draft will be discarded.", null, {
                                    hk: "2Sbnur"
                                })
                            })
                        }))) : k()
                    },
                    T = function() {
                        o(X.ORDER_SUMMARY)
                    },
                    A = function() {
                        o(X.ADD_CATALOG_PRODUCTS)
                    },
                    M = function(e) {
                        S(Number.isInteger(e) ? e : null), o(X.CUSTOM_ITEM_FORM)
                    },
                    R = function(e) {
                        g((function(t) {
                            return [].concat((0, u.default)(t.slice(0, e)), (0, u.default)(t.slice(e + 1)))
                        }))
                    },
                    I = function(e) {
                        null != j ? function(e, t) {
                            g((function(n) {
                                return [].concat((0, u.default)(n.slice(0, t)), [e], (0, u.default)(n.slice(t + 1)))
                            }))
                        }(e, j) : function(e) {
                            g((function(t) {
                                return [].concat((0, u.default)(t), [e])
                            }))
                        }(e)
                    },
                    D = $.indexOf(l);
                if (!l) return null;
                return (0, Q.jsx)(Y.default, {
                    children: (0, Q.jsx)(G.UIE, {
                        displayName: `FlowDrawer${D}`,
                        escapable: !0,
                        requestDismiss: function() {
                            k()
                        },
                        children: (0, Q.jsx)("div", {
                            children: function(e) {
                                switch (e) {
                                    case X.ADD_CATALOG_PRODUCTS:
                                        return (0, Q.jsx)(ne, {
                                            onBack: T
                                        });
                                    case X.CUSTOM_ITEM_FORM:
                                        return (0, Q.jsx)(te, {
                                            onBack: T,
                                            onSaveCustomItem: function(e) {
                                                I(e), T()
                                            },
                                            customItem: x[Number.isInteger(j) ? Number(j) : -1]
                                        });
                                    case X.ORDER_SUMMARY:
                                        return (0, Q.jsx)(re, {
                                            onBack: v,
                                            customItems: x,
                                            onAddItem: _ ? A : M,
                                            onDeleteItem: R,
                                            onEditCustomItem: M,
                                            chat: t
                                        })
                                }
                            }(l)
                        })
                    }, D)
                })
            };
            var u = l(n(319)),
                a = l(n(63038)),
                i = l(n(51463)),
                o = n(71091),
                d = n(48360),
                c = n(67294),
                s = l(n(56720)),
                f = n(26141),
                m = n(79614),
                h = l(n(51599)),
                x = n(7558),
                g = n(72743),
                p = n(66419),
                b = l(n(88186)),
                j = l(n(17130)),
                C = n(65901),
                y = l(n(86777)),
                S = n(11919),
                _ = r(n(71150)),
                k = l(n(38275)),
                v = l(n(53187)),
                T = l(n(18345)),
                A = n(19288),
                M = l(n(46821)),
                R = n(73568),
                I = l(n(23803)),
                D = l(n(92546)),
                w = n(27968),
                E = n(1577),
                P = l(n(73524)),
                N = l(n(58636)),
                O = l(n(73715)),
                L = l(n(76834)),
                B = l(n(64689)),
                F = n(3544),
                U = l(n(99262)),
                q = l(n(7665)),
                z = n(22552),
                H = n(68544),
                G = n(16835),
                W = l(n(57811)),
                V = l(n(39394)),
                Y = l(n(60806)),
                Q = n(85893),
                X = n(54302).Mirrored(["ADD_CATALOG_PRODUCTS", "CUSTOM_ITEM_FORM", "ORDER_SUMMARY"]),
                $ = Array.from(X.members()),
                K = {
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
                        cursor: "ajgl1lbb"
                    }
                },
                Z = _.currencyForCountryShortcode((0, S.getCountryShortcodeByPhone)((0, E.getMeUser)().user));

            function J(e) {
                return Number.isInteger(e) && +e > 0
            }

            function ee(e) {
                var t = _.formatAmount1000ToParts(Z, e);
                return `${t.symbol}${t.integer}${t.decimal}`
            }

            function te(e) {
                var t = e.customItem,
                    n = e.onBack,
                    r = e.onSaveCustomItem,
                    l = (0, c.useState)(null == t ? void 0 : t.name),
                    u = (0, a.default)(l, 2),
                    i = u[0],
                    f = u[1],
                    m = (0, c.useState)(Number.isInteger(null == t ? void 0 : t.priceAmount1000) ? String(Number(null == t ? void 0 : t.priceAmount1000) / 1e3) : null),
                    x = (0, a.default)(m, 2),
                    g = x[0],
                    p = x[1],
                    b = (0, c.useState)(Number(null == t ? void 0 : t.priceAmount1000)),
                    j = (0, a.default)(b, 2),
                    C = j[0],
                    y = j[1],
                    S = (0, c.useState)(null == t ? void 0 : t.quantity),
                    k = (0, a.default)(S, 2),
                    M = k[0],
                    R = k[1],
                    I = (0, c.useState)(Number.isInteger(null == t ? void 0 : t.quantity) ? String(null == t ? void 0 : t.quantity) : null),
                    D = (0, a.default)(I, 2),
                    w = D[0],
                    E = D[1],
                    P = (0, c.useMemo)((function() {
                        return function(e) {
                            if (null == e) return "";
                            var t = String(d.fbt._("Add a title", null, {
                                hk: "3QauyV"
                            }));
                            return "" === e.trim() ? t : ""
                        }(i)
                    }), [i]),
                    N = (0, c.useMemo)((function() {
                        return function(e) {
                            if (null == e) return "";
                            var t = String(d.fbt._("Enter a valid price", null, {
                                hk: "nzgo4"
                            }));
                            return "" !== e.trim() && _.validatePriceString(Z, e, F.MIN_PRICE, F.MAX_PRICE) ? "" : t
                        }(g)
                    }), [g]),
                    O = (0, c.useMemo)((function() {
                        return function(e) {
                            if (null == e) return "";
                            var t = String(d.fbt._("Enter a valid quantity", null, {
                                hk: "13oaEC"
                            }));
                            return J(Number(e)) ? "" : t
                        }(w)
                    }), [w]);
                return (0, Q.jsxs)(v.default, {
                    children: [(0, Q.jsx)(A.DrawerHeader, {
                        title: t ? d.fbt._("Update items", null, {
                            hk: "8H9jW"
                        }) : d.fbt._("Add items", null, {
                            hk: "2SjafD"
                        }),
                        type: A.DRAWER_HEADER_TYPE.SMALL,
                        onBack: n,
                        focusBackOrCancel: !0
                    }), (0, Q.jsxs)(T.default, {
                        className: (0, s.default)(K.drawerBody, o.uiPadding.all16),
                        children: [(0, Q.jsx)(H.TextInput, {
                            a8n: "product-edit-drawer-item-name-input",
                            value: i,
                            placeholder: d.fbt._("Item name", null, {
                                hk: "1LDktG"
                            }),
                            onChange: function(e) {
                                f(e)
                            },
                            theme: "small",
                            customStyleThemes: ["desaturated"],
                            maxLength: 150,
                            error: P
                        }), (0, Q.jsx)(H.TextInput, {
                            a8n: "product-edit-drawer-item-price-input",
                            value: g,
                            placeholder: d.fbt._("Price {symbol}", [d.fbt._param("symbol", _.formatAmount1000ToParts(Z, 0).symbol)], {
                                hk: "3yCPZW"
                            }),
                            onChange: function(e) {
                                var t = _.valueFromString(Z, e);
                                y(t), p(e)
                            },
                            theme: "small",
                            maxLength: 30,
                            customStyleThemes: ["desaturated"],
                            error: N
                        }), (0, Q.jsx)(H.TextInput, {
                            a8n: "product-edit-drawer-item-quantity-input",
                            value: w,
                            placeholder: d.fbt._("Quantity (Optional)", null, {
                                hk: "30uF5W"
                            }),
                            onChange: function(e) {
                                var t = "" === e ? null : Number(e);
                                J(t) || (t = null), R(t), E("" === e ? null : e)
                            },
                            theme: "small",
                            maxLength: 30,
                            customStyleThemes: ["desaturated"],
                            error: O
                        }), (0, Q.jsx)("div", {
                            className: (0, s.default)(K.buttonContainer, o.uiMargin.top16),
                            children: (0, Q.jsx)(h.default, {
                                type: "primary",
                                disabled: null == i || null == g || [P, N, O].some((function(e) {
                                    return e
                                })),
                                onClick: function() {
                                    r({
                                        name: i,
                                        priceAmount1000: C,
                                        quantity: M
                                    })
                                },
                                children: t ? d.fbt._("Update", null, {
                                    hk: "iXFTM"
                                }) : d.fbt._("Add", null, {
                                    hk: "3ogfSW"
                                })
                            })
                        })]
                    })]
                })
            }

            function ne(e) {
                var t, n = e.onBack,
                    r = (0, W.default)(),
                    l = (0, V.default)((function() {
                        return new D.default
                    })),
                    u = (0, V.default)((function() {
                        return new P.default([], (function(e) {
                            return e.id.toString()
                        }))
                    })).current,
                    a = function(e) {
                        var t = u.isSelected(e);
                        u.setVal(e, t ? 0 : 1), r()
                    },
                    i = function(e, t) {
                        u.setVal(e, t), r()
                    };
                return (0, Q.jsxs)(v.default, {
                    children: [(0, Q.jsx)(A.DrawerHeader, {
                        title: d.fbt._("Add items", null, {
                            hk: "2nsVXo"
                        }),
                        type: A.DRAWER_HEADER_TYPE.SMALL,
                        onBack: n,
                        focusBackOrCancel: !0
                    }), (0, Q.jsx)(T.default, {
                        children: (0, Q.jsx)(I.default, {
                            flatListControllers: [l.current],
                            children: (0, Q.jsx)(R.FlatList, {
                                flatListController: l.current,
                                direction: "vertical",
                                forceConsistentRenderCount: !1,
                                data: (t = g.CatalogCollection.get((0, E.getMaybeMeUser)()), t ? t.productCollection.getProductModels().map((function(e) {
                                    return {
                                        itemKey: e.id.toString(),
                                        product: e
                                    }
                                })) : []),
                                renderItem: function(e) {
                                    var t = e.product;
                                    return (0, Q.jsx)(le, {
                                        product: t,
                                        selections: u,
                                        onProductClick: a,
                                        onProductQuantityChange: i
                                    })
                                },
                                defaultItemHeight: p.PRODUCT_LIST_ITEM_HEIGHT
                            })
                        })
                    })]
                })
            }

            function re(e) {
                var t, n = e.chat,
                    r = e.customItems,
                    l = e.onBack,
                    u = e.onAddItem,
                    i = e.onDeleteItem,
                    f = e.onEditCustomItem,
                    m = (0, c.useState)(null),
                    h = (0, a.default)(m, 2),
                    x = h[0],
                    g = h[1],
                    p = (0, Q.jsx)("div", {
                        className: (0, s.default)(K.iconContainer),
                        children: (0, Q.jsx)(q.default, {
                            className: (0, s.default)(K.iconSVG),
                            name: "add-item"
                        })
                    }),
                    j = r.reduce((function(e, t) {
                        var n;
                        return e + t.priceAmount1000 * (null !== (n = t.quantity) && void 0 !== n ? n : 1)
                    }), 0),
                    C = d.fbt._("Add a note", null, {
                        hk: "2nf5qm"
                    }),
                    y = 0 !== r.length;
                return (0, Q.jsxs)(v.default, {
                    children: [(0, Q.jsx)(A.DrawerHeader, {
                        title: y ? d.fbt._("Review Order", null, {
                            hk: "1yDsQ1"
                        }) : d.fbt._("Create order", null, {
                            hk: "3snLWG"
                        }),
                        onBack: l,
                        type: A.DRAWER_HEADER_TYPE.SMALL
                    }), (0, Q.jsxs)(T.default, {
                        children: [(0, Q.jsx)(M.default, {
                            xstyle: [o.uiPadding.top20, o.uiPadding.horiz16, o.uiPadding.bottom15],
                            theme: "refresh-padding-title",
                            children: (0, Q.jsxs)(N.default, {
                                children: [(0, Q.jsx)(O.default, {
                                    sellerWid: (0, E.getMeUser)(),
                                    orderStatus: (0, Q.jsx)(L.default, {})
                                }), (0, Q.jsxs)(w.FlexColumn, {
                                    align: "stretch",
                                    xstyle: o.uiMargin.horiz0,
                                    children: [(0, Q.jsx)(b.default, {
                                        image: p,
                                        primary: d.fbt._("Add item", null, {
                                            hk: "3uoH1r"
                                        }),
                                        theme: "add-order-item",
                                        onClick: u
                                    }), (t = (0, Q.jsx)("div", {
                                        className: (0, s.default)(K.iconContainer),
                                        children: (0, Q.jsx)(q.default, {
                                            className: (0, s.default)(K.iconSVG),
                                            name: "list-msg-icon"
                                        })
                                    }), r.map((function(e, n) {
                                        var r = ee(e.priceAmount1000),
                                            l = d.fbt._("Quantity {item-quantity}", [d.fbt._param("item-quantity", e.quantity)], {
                                                hk: "39jSdf"
                                            });
                                        return (0, Q.jsx)("div", {
                                            className: (0, s.default)(o.uiPadding.top20),
                                            children: (0, Q.jsx)(b.default, {
                                                image: t,
                                                primary: e.name,
                                                secondary: null != e.quantity ? l : null,
                                                theme: "media",
                                                onMouseOver: function() {
                                                    g(n)
                                                },
                                                onMouseLeave: function() {
                                                    g(null)
                                                },
                                                detail: x === n ? (0, Q.jsx)(k.default, {
                                                    onClick: function(e) {
                                                        e.stopPropagation(), i(n)
                                                    }
                                                }) : r,
                                                onClick: function() {
                                                    f(n)
                                                }
                                            })
                                        }, n)
                                    })))]
                                }), (0, Q.jsxs)(w.FlexColumn, {
                                    align: "stretch",
                                    xstyle: K.orderFieldsContainer,
                                    children: [(0, Q.jsxs)(w.FlexRow, {
                                        justify: "all",
                                        children: [(0, Q.jsx)(z.TextSpan, {
                                            color: "secondary",
                                            size: "16",
                                            children: d.fbt._("Subtotal", null, {
                                                hk: "4ciFet"
                                            })
                                        }), (0, Q.jsx)(z.TextSpan, {
                                            color: "secondary",
                                            size: "16",
                                            children: ee(j)
                                        })]
                                    }), y && (0, Q.jsx)(w.FlexRow, {
                                        justify: "all",
                                        align: "center",
                                        children: (0, Q.jsx)("span", {
                                            className: (0, s.default)(K.clickableText),
                                            children: d.fbt._("Additional Charges", null, {
                                                hk: "3I4vSr"
                                            })
                                        })
                                    })]
                                }), y && (0, Q.jsx)(w.FlexRow, {
                                    justify: "all",
                                    align: "center",
                                    children: (0, Q.jsx)("span", {
                                        className: (0, s.default)(K.clickableText),
                                        children: d.fbt._("Add payment method", null, {
                                            hk: "1FNuLD"
                                        })
                                    })
                                })]
                            })
                        }), y && (0, Q.jsxs)(M.default, {
                            xstyle: [o.uiPadding.top20, o.uiPadding.horiz16],
                            theme: "refresh-padding-title",
                            children: [(0, Q.jsxs)(w.FlexRow, {
                                justify: "all",
                                children: [(0, Q.jsx)(z.TextSpan, {
                                    theme: "title",
                                    weight: "medium",
                                    children: d.fbt._("Total", null, {
                                        hk: "7xRrT"
                                    })
                                }), (0, Q.jsx)(z.TextSpan, {
                                    theme: "title",
                                    weight: "medium",
                                    children: "-"
                                })]
                            }), (0, Q.jsx)(B.default, {
                                chat: n,
                                placeholder: C,
                                value: "",
                                onChange: function() {},
                                onSubmit: function() {},
                                buttonTitle: C,
                                a8nTextButton: "order-create-button"
                            })]
                        })]
                    })]
                })
            }

            function le(e) {
                var t = e.product,
                    n = e.selections,
                    r = e.onProductClick,
                    l = e.onProductQuantityChange;
                return (0, Q.jsx)(j.default, {
                    model: t,
                    selections: n,
                    children: (0, Q.jsx)(U.default, {
                        product: t,
                        onClick: function() {
                            return r(t)
                        },
                        checkbox: !0,
                        detail: n.isSelected(t) && (0, Q.jsx)("div", {
                            children: (0, Q.jsx)(ue, {
                                quantity: Number(n.getVal(t)),
                                onChange: function(e) {
                                    return l(t, e)
                                }
                            })
                        })
                    })
                }, t.id.toString())
            }

            function ue(e) {
                return (0, Q.jsx)("div", {
                    children: (0, Q.jsx)("select", {
                        onClick: function(e) {
                            e.preventDefault(), e.stopPropagation()
                        },
                        value: e.quantity,
                        onChange: function(t) {
                            e.onChange(Number(t.currentTarget.value))
                        },
                        children: function() {
                            for (var e = [], t = 1; t <= x.MAX_QUANTITY; t++) e.push((0, Q.jsx)("option", {
                                value: t,
                                children: t
                            }, t));
                            return e
                        }()
                    })
                })
            }
        }
    }
]);