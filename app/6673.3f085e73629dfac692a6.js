/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [6673], {
        38275: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, o.jsx)(l.default, {
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
                l = a(n(28706)),
                o = n(85893),
                s = {
                    color: "svlsagor",
                    ":hover": {
                        color: "kbf8aj4n"
                    }
                }
        },
        58636: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.children;
                return (0, o.jsx)(l.FlexColumn, {
                    xstyle: s.container,
                    align: "stretch",
                    children: r.Children.map(t, (function(e, t) {
                        return (0, o.jsxs)(o.Fragment, {
                            children: [0 !== t ? (0, o.jsx)("div", {
                                className: (0, i.default)(s.separator)
                            }) : null, e]
                        })
                    }))
                })
            };
            var r = n(67294),
                i = a(n(56720)),
                l = n(27968),
                o = n(85893),
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
                    p = c ? (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(o.FlexRow, {
                            children: (0, d.jsx)(l.DetailImage, {
                                id: a,
                                size: 48
                            })
                        }), (0, d.jsxs)(o.FlexColumn, {
                            align: "center",
                            children: [(0, d.jsx)(s.TextDiv, {
                                theme: "large",
                                weight: "medium",
                                children: c.name
                            }), null != t ? (0, d.jsx)(s.TextDiv, {
                                color: "secondary",
                                weight: "medium",
                                xstyle: u.uppercase,
                                children: r.fbt._("order #{order-id}", [r.fbt._param("order-id", t)], {
                                    hk: "83OWH"
                                })
                            }) : null]
                        })]
                    }) : null;
                return (0, d.jsxs)(o.FlexColumn, {
                    align: "center",
                    xstyle: u.container,
                    children: [p, n]
                })
            };
            var r = n(48360),
                i = (a(n(56720)), n(20050)),
                l = n(66834),
                o = n(27968),
                s = n(22552),
                d = n(85893),
                u = {
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
                var t, n = null !== (t = e.orderStatus) && void 0 !== t ? t : i.OrderStatus.Pending;
                return (0, s.jsxs)(o.TextDiv, {
                    color: c(n),
                    theme: "small",
                    xstyle: d.container,
                    children: [p(n), u(n)]
                })
            };
            var r = n(48360),
                i = (a(n(56720)), n(45311)),
                l = a(n(7665)),
                o = n(22552),
                s = n(85893),
                d = {
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

            function u(e) {
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
                        return (0, s.jsx)(l.default, {
                            width: 12,
                            name: "status-ciphertext",
                            display: "inline",
                            xstyle: [d.icon, d.iconCipherText]
                        });
                    case i.OrderStatus.PartiallyShipped:
                    case i.OrderStatus.Shipped:
                        return (0, s.jsx)(l.default, {
                            width: 12,
                            name: "local-shipping",
                            display: "inline",
                            xstyle: d.icon
                        });
                    case i.OrderStatus.Canceled:
                        return (0, s.jsx)(l.default, {
                            width: 12,
                            name: "alert-error",
                            display: "inline",
                            xstyle: d.icon
                        });
                    case i.OrderStatus.Complete:
                        return (0, s.jsx)(l.default, {
                            width: 12,
                            name: "action-check-circle",
                            display: "inline",
                            xstyle: d.icon
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
                    children: [(0, c.jsx)(u.default, {
                        transitionName: "media-caption",
                        className: (0, i.default)(p),
                        children: (0, c.jsx)(o.default, {
                            chat: e.chat,
                            maxLength: l.default.MAX_CART_MESSAGE_LENGTH,
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
                    }), (0, c.jsx)(u.default, {
                        transitionAppear: !0,
                        transitionName: "btn",
                        children: (0, c.jsx)("button", {
                            disabled: e.disabled,
                            "data-a8n": r.default.key(e.a8nTextButton),
                            className: (0, i.default)(f),
                            tabIndex: "-1",
                            onClick: function() {
                                return e.onSubmit()
                            },
                            title: e.buttonTitle,
                            children: (0, c.jsx)(s.Round, {
                                disabled: e.disabled,
                                children: (0, c.jsx)(d.default, {
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
                i = a(n(56720)),
                l = a(n(94253)),
                o = a(n(61640)),
                s = n(80385),
                d = a(n(7665)),
                u = a(n(60806)),
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
        61640: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n(63038)),
                i = n(71091),
                l = n(48360),
                o = n(67294),
                s = a(n(56720)),
                d = n(65901),
                u = a(n(86777)),
                c = n(98169),
                p = n(10508),
                f = n(11125),
                h = n(58342),
                g = a(n(45159)),
                m = a(n(4313)),
                x = n(23932),
                v = a(n(7665)),
                j = n(16835),
                b = a(n(93820)),
                S = n(52546),
                k = a(n(60806)),
                w = n(85893),
                y = function() {
                    d.Cmd.openModal((0, w.jsx)(u.default, {
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
                C = {
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

            function O(e, t) {
                var n = e.value,
                    a = e.focusOnMount,
                    d = e.onBlur,
                    u = e.onFocus,
                    O = e.maxLength,
                    P = void 0 === O ? 25 : O,
                    _ = e.onMaxPasteExceeded,
                    T = void 0 === _ ? y : _,
                    E = (0, o.useRef)(null),
                    q = (0, o.useRef)(null),
                    z = (0, o.useRef)(null),
                    N = (0, o.useState)(!1),
                    M = (0, r.default)(N, 2),
                    F = M[0],
                    I = M[1],
                    R = (0, o.useState)(null),
                    B = (0, r.default)(R, 2),
                    D = B[0],
                    A = B[1],
                    L = (0, S.numCodepoints)(e.value || ""),
                    H = function() {
                        var e;
                        null === (e = E.current) || void 0 === e || e.focus()
                    };
                (0, o.useEffect)((function() {
                    !0 === a && H()
                }), []);
                var W = function() {
                        A(null)
                    },
                    G = function(e) {
                        var t = E.current;
                        t && (t.focus(!1), t.replaceSelection(e)), W()
                    },
                    K = function(e) {
                        F && I(!1), d && d(e)
                    },
                    V = function(e) {
                        e.stopPropagation(), F || I(!0), u && u(e)
                    };
                (0, o.useImperativeHandle)(t, (function() {
                    return {
                        handleBlur: K,
                        handleFocus: V,
                        refInput: E.current
                    }
                }));
                var Y, X = e.supportsEmoji ? (0, w.jsx)("button", {
                    className: (0, s.default)(C.inputEmoji),
                    onClick: function(e) {
                        e && (e.preventDefault(), e.stopPropagation());
                        var t = (0, w.jsx)(p.EmojiPanel, {
                            ref: z,
                            onEmoji: G,
                            onFocusNext: H,
                            onFocusPrev: H
                        });
                        A({
                            menu: t,
                            dirY: c.DirY.TOP,
                            type: "emoji_picker",
                            anchor: e.target
                        }), H()
                    },
                    children: (0, w.jsx)(v.default, {
                        "aria-label": l.fbt._("Open emojis panel", null, {
                            hk: "3IEMY6"
                        }),
                        name: "emoji-input"
                    })
                }) : void 0;
                Y = null != n && "" !== n ? (0, w.jsx)("button", {
                    className: (0, s.default)(C.clearInput),
                    onClick: function() {
                        var e;
                        null === (e = E.current) || void 0 === e || e.reset()
                    },
                    children: (0, w.jsx)(v.default, {
                        name: "x-alt"
                    })
                }) : null;
                var Q, U = !0 === e.showRemaining ? (0, w.jsx)("div", {
                    className: (0, s.default)(C.buttonContainer, i.uiMargin.horiz4, i.uiPadding.bottom20, C.charCounter, i.uiPadding.bottom0, null != Y && C.charCounterWithClearBtn),
                    children: (0, w.jsx)("div", {
                        className: (0, s.default)(C.charCounter, i.uiPadding.bottom0),
                        children: P - L < 50 ? g.default.n(P - L) : null
                    })
                }) : null;
                D && (Q = (0, w.jsx)(j.UIE, {
                    displayName: "EmojiPicker",
                    escapable: !0,
                    popable: !0,
                    requestDismiss: W,
                    requestFocus: function() {
                        var e;
                        null === (e = z.current) || void 0 === e || e.restoreFocus()
                    },
                    children: (0, w.jsx)(b.default, {
                        contextMenu: D
                    })
                }));
                var J = (0, s.default)(C.textInput),
                    Z = (0, s.default)(C.labelText, i.uiPadding.top8, null != e.value && "" !== e.value && C.labelTextFloat);
                return (0, w.jsxs)(h.HotKeys, {
                    className: J,
                    onFocus: H,
                    children: [(0, w.jsx)("span", {
                        className: Z,
                        children: e.placeholder
                    }), (0, w.jsx)("div", {
                        className: (0, s.default)("" === e.placeholder ? C.noPlaceholderSpacer : C.spacer)
                    }), (0, w.jsx)("div", {
                        className: (0, s.default)(!g.default.isRTL() && [C.suggestionsPositioner, i.uiPadding.horiz10]),
                        children: (0, w.jsxs)("div", {
                            className: (0, s.default)(!g.default.isRTL() && C.suggestionsContainer),
                            children: [(0, w.jsx)(m.default.MentionSuggestions, {
                                chat: e.chat,
                                theme: x.ThemeOptions.MEDIA_CAPTION
                            }), (0, w.jsx)(m.default.EmojiSuggestions, {
                                chat: e.chat,
                                theme: f.ThemeOptions.MEDIA_CAPTION
                            })]
                        })
                    }), (0, w.jsxs)("div", {
                        className: (0, s.default)(C.wrapper, C.activeWrapper, F && i.uiPadding.bottom0),
                        children: [(0, w.jsx)(m.default, {
                            ref: E,
                            initialValue: e.value,
                            initialSelection: q.current,
                            readOnly: !1,
                            spellCheck: e.spellCheck,
                            multiline: e.multiline,
                            maxLength: e.maxLength,
                            onEnter: e.onEnter,
                            onMaxPasteExceeded: T,
                            onFiles: e.onFiles,
                            onChange: e.onChange,
                            onSelect: function(e) {
                                q.current = e
                            },
                            theme: "media-caption"
                        }), (0, w.jsxs)("div", {
                            className: (0, s.default)(C.inputControls),
                            children: [(0, w.jsxs)(k.default, {
                                transitionName: "pop",
                                component: "div",
                                className: (0, s.default)(C.buttonContainer, i.uiMargin.horiz4, i.uiPadding.bottom20),
                                children: [Y, X]
                            }), U]
                        })]
                    }), Q]
                })
            }
            var P = (0, o.forwardRef)(O);
            t.default = P
        },
        4313: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n(34575)),
                i = a(n(2205)),
                l = a(n(99842)),
                o = a(n(73716)),
                s = n(71222),
                d = n(11125),
                u = a(n(90661)),
                c = n(18018),
                p = a(n(52186)),
                f = n(23932),
                h = a(n(57651)),
                g = new u.default,
                m = new o.default,
                x = function(e) {
                    (0, i.default)(n, e);
                    var t = (0, l.default)(n);

                    function n() {
                        return (0, r.default)(this, n), t.apply(this, arguments)
                    }
                    return n
                }((0, c.PluggableInput)([s.EmojiPlugin, m, g, p.default]));
            t.default = x, x.MentionSuggestions = (0, h.default)(f.Suggestions, {
                plugin: g
            }), x.EmojiSuggestions = (0, h.default)(d.EmojiSuggestions, {
                plugin: m
            })
        }
    }
]);