/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [7205], {
        730523: e => {
            ! function() {
                "use strict";
                e.exports = {
                    polyfill: function() {
                        var e = window,
                            t = document;
                        if (!("scrollBehavior" in t.documentElement.style) || !0 === e.__forceSmoothScrollPolyfill__) {
                            var n, a = e.HTMLElement || e.Element,
                                i = {
                                    scroll: e.scroll || e.scrollTo,
                                    scrollBy: e.scrollBy,
                                    elementScroll: a.prototype.scroll || l,
                                    scrollIntoView: a.prototype.scrollIntoView
                                },
                                o = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now,
                                r = (n = e.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(n) ? 1 : 0);
                            e.scroll = e.scrollTo = function() {
                                void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? h.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : i.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset))
                            }, e.scrollBy = function() {
                                void 0 !== arguments[0] && (s(arguments[0]) ? i.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : h.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset)))
                            }, a.prototype.scroll = a.prototype.scrollTo = function() {
                                if (void 0 !== arguments[0])
                                    if (!0 !== s(arguments[0])) {
                                        var e = arguments[0].left,
                                            t = arguments[0].top;
                                        h.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                                    } else {
                                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                        i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                    }
                            }, a.prototype.scrollBy = function() {
                                void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? this.scroll({
                                    left: ~~arguments[0].left + this.scrollLeft,
                                    top: ~~arguments[0].top + this.scrollTop,
                                    behavior: arguments[0].behavior
                                }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                            }, a.prototype.scrollIntoView = function() {
                                if (!0 !== s(arguments[0])) {
                                    var n = f(this),
                                        a = n.getBoundingClientRect(),
                                        o = this.getBoundingClientRect();
                                    n !== t.body ? (h.call(this, n, n.scrollLeft + o.left - a.left, n.scrollTop + o.top - a.top), "fixed" !== e.getComputedStyle(n).position && e.scrollBy({
                                        left: a.left,
                                        top: a.top,
                                        behavior: "smooth"
                                    })) : e.scrollBy({
                                        left: o.left,
                                        top: o.top,
                                        behavior: "smooth"
                                    })
                                } else i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                            }
                        }

                        function l(e, t) {
                            this.scrollLeft = e, this.scrollTop = t
                        }

                        function s(e) {
                            if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                            if ("object" == typeof e && "smooth" === e.behavior) return !1;
                            throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function u(e, t) {
                            return "Y" === t ? e.clientHeight + r < e.scrollHeight : "X" === t ? e.clientWidth + r < e.scrollWidth : void 0
                        }

                        function c(t, n) {
                            var a = e.getComputedStyle(t, null)["overflow" + n];
                            return "auto" === a || "scroll" === a
                        }

                        function d(e) {
                            var t = u(e, "Y") && c(e, "Y"),
                                n = u(e, "X") && c(e, "X");
                            return t || n
                        }

                        function f(e) {
                            for (; e !== t.body && !1 === d(e);) e = e.parentNode || e.host;
                            return e
                        }

                        function p(t) {
                            var n, a, i, r, l = (o() - t.startTime) / 468;
                            r = l = l > 1 ? 1 : l, n = .5 * (1 - Math.cos(Math.PI * r)), a = t.startX + (t.x - t.startX) * n, i = t.startY + (t.y - t.startY) * n, t.method.call(t.scrollable, a, i), a === t.x && i === t.y || e.requestAnimationFrame(p.bind(e, t))
                        }

                        function h(n, a, r) {
                            var s, u, c, d, f = o();
                            n === t.body ? (s = e, u = e.scrollX || e.pageXOffset, c = e.scrollY || e.pageYOffset, d = i.scroll) : (s = n, u = n.scrollLeft, c = n.scrollTop, d = l), p({
                                scrollable: s,
                                method: d,
                                startTime: f,
                                startX: u,
                                startY: c,
                                x: a,
                                y: r
                            })
                        }
                    }
                }
            }()
        },
        350327: (e, t, n) => {
            "use strict";
            var a = n(307914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var n;
                if (e.size !== t.size) return !1;
                var a, r = (0, o.default)(e);
                try {
                    for (r.s(); !(a = r.n()).done;) {
                        var l = (0, i.default)(a.value, 2),
                            s = l[0],
                            u = l[1];
                        if ((n = t.get(s)) !== u || void 0 === n && !t.has(s)) return !1
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
                return !0
            };
            var i = a(n(537613)),
                o = a(n(668217))
        },
        457911: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GroupProfilePictureWamEvent = void 0;
            var a = n(644798),
                i = n(447853),
                o = a.TYPES.BOOLEAN,
                r = a.TYPES.STRING,
                l = (0, a.defineEvents)({
                    GroupProfilePicture: [3652, {
                            groupCreationDs: [1, r],
                            groupProfileAction: [7, i.GROUP_PROFILE_ACTION_TYPE],
                            hasProfilePicture: [3, o],
                            isAdmin: [4, o],
                            preciseGroupSizeBucket: [5, i.PRECISE_SIZE_BUCKET],
                            profilePictureType: [6, i.PROFILE_PICTURE_TYPE]
                        },
                        [1, 1, 1], "regular"
                    ]
                });
            t.GroupProfilePictureWamEvent = l
        },
        590469: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, m.useModelValues)(e.chat, ["id", "isNewsletter", "newsletterMetadata"]),
                    n = (0, m.useOptionalModelValues)(t.newsletterMetadata, ["description", "creationTime", "membershipType"]),
                    a = (0, h.default)(n, ["change:description"], (function() {
                        return (null == n ? void 0 : n.description) || ""
                    })),
                    r = (0, p.useCallback)(function() {
                        var e = (0, o.default)(i.default.mark((function e() {
                            var n, a = arguments;
                            return i.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = a.length > 1 && void 0 !== a[1] ? a[1] : "", e.next = 3, v(t, n);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(), [t]);
                if (null == n) return null;
                var u = f.fbt._("Add channel description", null, {
                        hk: "4cBfrw"
                    }),
                    d = null != n.creationTime ? s.Clock.createdStr(n.creationTime) : null;
                return (0, g.jsx)(l.default, {
                    description: a,
                    bulletPointsEnabled: !1,
                    chat: e.chat,
                    showFullDescription: !1,
                    editRestrictionText: f.fbt._("Only admins can edit this channel's info", null, {
                        hk: "Z6ACg"
                    }),
                    testid: "newsletter-info-drawer-description-title-input",
                    containerTestId: "newsletter-info-drawer-description-container",
                    emptyValuePlaceholder: u,
                    creationString: d,
                    canSetDescription: (0, c.iAmOwner)(n),
                    setDescriptionAction: r
                })
            };
            var i = a(n(887757)),
                o = a(n(348926)),
                r = n(341480),
                l = a(n(878971)),
                s = n(87330),
                u = n(597765),
                c = n(970714),
                d = n(422210),
                f = n(548360),
                p = n(667294),
                h = a(n(86525)),
                m = n(853548),
                g = n(785893);

            function v(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, r.genId)(),
                    i = (0, u.editNewsletterMetadataAction)(e, {
                        editDescription: !0
                    }, {
                        description: n
                    }),
                    o = null === (t = e.newsletterMetadata) || void 0 === t ? void 0 : t.description,
                    l = new r.ActionType(f.fbt._("Changing channel description", null, {
                        hk: "3QNpiW"
                    })),
                    s = i.then((function() {
                        return new r.ActionType(f.fbt._("Channel description changed", null, {
                            hk: "ATEd7"
                        }), {
                            actionText: f.fbt._("Undo", null, {
                                hk: "3r3mP7"
                            }),
                            actionHandler: function() {
                                return v(e, o, a)
                            }
                        })
                    })).catch((function() {
                        return __LOG__(3)`channel:handleEditDescription dropped`, new r.ActionType(f.fbt._("Channel description changed failed", null, {
                            hk: "1We4xJ"
                        }), {
                            actionText: f.fbt._("Try again", null, {
                                hk: "3qJDe7"
                            }),
                            actionHandler: function() {
                                return v(e, n, a)
                            }
                        })
                    }));
                return d.ToastManager.open((0, g.jsx)(r.ActionToast, {
                    id: a,
                    initialAction: l,
                    pendingAction: s
                })), i
            }
        },
        233558: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(228855),
                o = a(n(167740)),
                r = n(988456),
                l = n(489323),
                s = n(14630),
                u = a(n(237120)),
                c = a(n(686866)),
                d = n(58985),
                f = n(628707),
                p = a(n(295418)),
                h = a(n(590469)),
                m = a(n(253637)),
                g = a(n(45727)),
                v = n(970714),
                x = n(859452),
                b = n(200252),
                C = n(892179),
                j = n(345129),
                M = a(n(408590)),
                y = n(378776),
                _ = n(401304),
                S = n(235387),
                k = n(71867),
                w = n(447853),
                P = n(403056),
                T = n(868425),
                I = n(447901),
                E = n(548360),
                A = n(667294),
                N = a(n(156720)),
                O = a(n(86525)),
                R = a(n(279781)),
                L = a(n(498617)),
                D = n(785893),
                B = {
                    flexShrink: "oq44ahr5",
                    flexGrow: "tvf2evcx",
                    flexBasis: "lb5m6g5c",
                    paddingBottom: "s9fl9ege"
                };

            function G(e, t) {
                var n = e.chat,
                    a = e.newsletterMetadata,
                    G = e.onClose,
                    V = e.onDeleteNewsletter,
                    F = e.onAdminCenter,
                    H = (0, L.default)(),
                    U = (0, O.default)(a, ["change:suspended"], (function() {
                        return !0 === (null == a ? void 0 : a.suspended)
                    })),
                    W = (0, O.default)(a, ["change:canBeMuted"], (function() {
                        return Boolean(null == a ? void 0 : a.canBeMuted) && !U
                    })),
                    Y = (0, x.useHasNewsletterMessageUpdates)(n),
                    z = (0, R.default)((function() {
                        return new S.UiActionWamEvent({
                            uiActionType: w.UI_ACTION_TYPE.CHANNEL_INFO_OPEN,
                            uiActionPreloaded: !0
                        })
                    })),
                    q = U ? null : (0, D.jsx)(h.default, {
                        chat: n
                    }),
                    K = W ? (0, D.jsx)(r.ChatInfoDrawerSection, {
                        xstyle: k.uiMargin.top10,
                        children: (0, D.jsx)(p.default, {
                            chat: n,
                            mute: n.mute,
                            settings: M.default
                        })
                    }) : null,
                    X = (0, v.iAmOwner)(a) || (0, v.iAmAdmin)(a),
                    Z = (0, A.useCallback)((function() {
                        f.ModalManager.open((0, D.jsx)(b.NewsletterPhoneNumberNux, {}))
                    }), []),
                    J = (0, A.useCallback)((function() {
                        X ? f.ModalManager.open((0, D.jsx)(j.NewsletterPublicChannelPrivacyNux, {})) : Z()
                    }), [X, Z]),
                    Q = (0, D.jsxs)(r.ChatInfoDrawerSection, {
                        xstyle: k.uiMargin.top10,
                        children: [(0, D.jsx)(C.NewsletterPrivacyRow, {
                            onClick: J,
                            title: E.fbt._("Public channel", null, {
                                hk: "1a60HF"
                            }),
                            text: X ? E.fbt._("What you share is visible to anyone, but your phone number isn't. Click to learn more.", null, {
                                hk: "4auNa3"
                            }) : E.fbt._("Anyone can find this channel and see what's been shared.", null, {
                                hk: "1T1Xsg"
                            }),
                            icon: (0, D.jsx)(i.BusinessWebsiteIcon, {
                                color: _.SvgColorProp.SECONDARY,
                                height: 20
                            })
                        }), !X && (0, D.jsx)(C.NewsletterPrivacyRow, {
                            onClick: Z,
                            title: E.fbt._("Profile privacy", null, {
                                hk: "fHnmE"
                            }),
                            text: (0, l.getNewsletterProfilePrivacyText)(),
                            icon: (0, D.jsx)(s.DialpadIcon, {
                                color: _.SvgColorProp.SECONDARY,
                                height: 20
                            })
                        })]
                    }),
                    $ = (0, D.jsx)(g.default, {
                        xstyle: k.uiMargin.top10,
                        chat: e.chat,
                        onDeleteNewsletter: V
                    }),
                    ee = Y ? (0, D.jsx)(r.ChatInfoDrawerSection, {
                        xstyle: k.uiMargin.top10,
                        children: (0, D.jsx)(o.default, {
                            testid: "newsletter-info-admin-center-row",
                            icon: (0, D.jsx)(T.WarningIcon, {
                                color: _.SvgColorProp.SECONDARY,
                                height: 16
                            }),
                            onClick: F,
                            title: (0, D.jsx)(I.WDSTextTitle, {
                                children: E.fbt._("Admin Center", null, {
                                    hk: "ygbJZ"
                                })
                            })
                        })
                    }) : null;
                return (0, A.useEffect)((function() {
                    var e = z.current;
                    e && (e.markUiActionT(), e.commit(), z.current = void 0), (0, P.logUiActionShadowPrivateStatsTestEvents)()
                }), []), (0, D.jsxs)(u.default, {
                    ref: t,
                    theme: "striped",
                    testid: "chat-info-drawer",
                    children: [(0, D.jsx)(d.DrawerHeader, {
                        title: E.fbt._("Channel info", null, {
                            hk: "2MU3nu"
                        }),
                        type: d.DRAWER_HEADER_TYPE.SMALL,
                        rtlFixIfOnDarwin: !0,
                        onCancel: function() {
                            G ? G() : null == H || H.requestDismiss()
                        },
                        testid: "newsletter-info-header"
                    }), (0, D.jsx)(c.default, {
                        children: (0, D.jsxs)("section", {
                            className: (0, N.default)(B),
                            "data-testid": "group-info-drawer-body",
                            children: [(0, D.jsx)(m.default, {
                                chat: (0, y.unproxy)(n)
                            }), q, ee, K, Q, $]
                        })
                    })]
                }, "newsletter-info-modal")
            }
            var V = (0, A.forwardRef)(G);
            t.default = V
        },
        666575: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.chat,
                    n = e.xstyle,
                    a = e.readOnly,
                    o = (0, d.useState)(!1),
                    r = (0, i.default)(o, 2),
                    u = r[0],
                    c = r[1],
                    g = (0, p.useModelValues)(t.contact, ["id", "profilePicThumb"]),
                    v = (0, p.useModelValues)(t.contact.profilePicThumb, ["imgFull"]),
                    x = (0, d.useCallback)((function(e, n) {
                        c(!0), m(t, n).finally((function() {
                            c(!1)
                        }))
                    }), [t]);
                return (0, h.jsx)("div", {
                    className: (0, f.default)(n),
                    children: (0, h.jsx)(s.PhotoPickerLoadable, {
                        type: l.PhotoPickerType.NEWSLETTER,
                        id: g.id,
                        attachToChat: !0,
                        startImage: v.imgFull,
                        readOnly: a,
                        onImageSet: x,
                        pending: u
                    })
                })
            };
            var i = a(n(963038)),
                o = n(341480),
                r = n(597765),
                l = n(942518),
                s = n(639017),
                u = n(422210),
                c = n(548360),
                d = n(667294),
                f = a(n(156720)),
                p = n(853548),
                h = n(785893);

            function m(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, o.genId)(),
                    a = (0, r.editNewsletterMetadataAction)(e, {
                        editPicture: !0
                    }, {
                        picture: null != t ? t : null
                    }),
                    i = new o.ActionType(null != t ? c.fbt._("Setting channel icon", null, {
                        hk: "3qGzgv"
                    }) : c.fbt._("Removing channel icon", null, {
                        hk: "3KXsMC"
                    })),
                    l = a.then((function() {
                        return new o.ActionType(null != t ? c.fbt._("Channel icon set", null, {
                            hk: "M0iEh"
                        }) : c.fbt._("Channel icon removed", null, {
                            hk: "31cA0l"
                        }))
                    })).catch((function() {
                        return __LOG__(3)`newsletter:handleEditPhoto dropped`, new o.ActionType(null != t ? c.fbt._("Couldn't set channel icon", null, {
                            hk: "GsVmy"
                        }) : c.fbt._("Couldn't remove channel icon", null, {
                            hk: "2pGDJs"
                        }), {
                            actionText: c.fbt._("Try again", null, {
                                hk: "3qJDe7"
                            }),
                            actionHandler: function() {
                                return m(e, t, n)
                            }
                        })
                    }));
                return u.ToastManager.open((0, h.jsx)(o.ActionToast, {
                    id: n,
                    initialAction: i,
                    pendingAction: l
                })), a
            }
        },
        569483: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.chat,
                    n = (0, b.useOptionalModelValues)(t.newsletterMetadata, ["name", "membershipType", "isSuspendedOrTerminated"]),
                    a = (0, v.useCallback)(function() {
                        var e = (0, o.default)(i.default.mark((function e(n) {
                            return i.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n !== t.formattedTitle) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, j(t, n);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(), [t]);
                if (null == n) return null;
                if (!0 === n.isSuspendedOrTerminated || !(0, f.iAmOwner)(n)) return (0, C.jsx)(p.TextHeader, {
                    className: (0, x.default)(m.uiMargin.vert6),
                    level: "2",
                    theme: "large",
                    children: (0, C.jsx)(d.Name, {
                        chat: t,
                        breakWord: !0
                    })
                });
                return (0, C.jsx)(u.default, {
                    subject: t.formattedTitle,
                    onSave: a,
                    editRestrictionInfo: function() {
                        c.ModalManager.open((0, C.jsx)(l.ConfirmPopup, {
                            onOK: function() {
                                return c.ModalManager.close()
                            },
                            okText: g.fbt._("OK", null, {
                                hk: "4oTrfy"
                            }),
                            children: g.fbt._("Only admins can edit this channel's info", null, {
                                hk: "Z6ACg"
                            })
                        }))
                    },
                    editable: !0,
                    emptyErrorMessage: g.fbt._("Channel name can't be empty", null, {
                        hk: "2ep6gS"
                    })
                })
            };
            var i = a(n(887757)),
                o = a(n(348926)),
                r = n(341480),
                l = n(430888),
                s = n(597765),
                u = a(n(652486)),
                c = n(628707),
                d = n(246009),
                f = n(970714),
                p = n(558288),
                h = n(422210),
                m = n(71867),
                g = n(548360),
                v = n(667294),
                x = a(n(156720)),
                b = n(853548),
                C = n(785893);

            function j(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, r.genId)(),
                    a = (0, s.editNewsletterMetadataAction)(e, {
                        editName: !0
                    }, {
                        name: t
                    }),
                    i = e.name,
                    o = new r.ActionType(g.fbt._("Renaming channel", null, {
                        hk: "3xRXjW"
                    })),
                    l = a.then((function() {
                        return new r.ActionType(g.fbt._("Channel renamed to {name}", [g.fbt._param("name", t)], {
                            hk: "JAzRN"
                        }), {
                            actionText: g.fbt._("Undo", null, {
                                hk: "3r3mP7"
                            }),
                            actionHandler: function() {
                                return j(e, i, n)
                            }
                        })
                    })).catch((function() {
                        return __LOG__(3)`newsletter:handleEditSubject dropped`, new r.ActionType(g.fbt._("Couldn't rename channel", null, {
                            hk: "3OWiwP"
                        }), {
                            actionText: g.fbt._("Try again", null, {
                                hk: "3qJDe7"
                            }),
                            actionHandler: function() {
                                return j(e, t, n)
                            }
                        })
                    }));
                return h.ToastManager.open((0, C.jsx)(r.ActionToast, {
                    id: n,
                    initialAction: o,
                    pendingAction: l
                })), a
            }
        },
        253637: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, R.useOptionalModelValues)(e.chat.newsletterMetadata, ["size", "privacy", "terminated", "isSuspendedOrTerminated", "membershipType", "inviteCode"]),
                    n = (null == t ? void 0 : t.privacy) === j.NewsletterPrivacy.Private ? A.fbt._("Private Channel", null, {
                        hk: "4eaPAs"
                    }) : A.fbt._("Channel", null, {
                        hk: "26BY5U"
                    });
                (null == t ? void 0 : t.terminated) && (n = A.fbt._("Deleted channel", null, {
                    hk: "3S2eSl"
                }));
                var a = null != (null == t ? void 0 : t.size) ? (0, u.getNewsletterFollowersText)(t.size) : null;
                return (0, L.jsxs)(f.default, {
                    theme: "padding-large",
                    children: [(0, L.jsxs)(p.FlexColumn, {
                        align: "center",
                        children: [(0, L.jsx)(x.default, {
                            chat: e.chat,
                            xstyle: T.uiMargin.bottom7,
                            readOnly: !0 === (null == t ? void 0 : t.isSuspendedOrTerminated) || !(0, C.iAmOwner)(t)
                        }), (0, L.jsx)(b.default, {
                            chat: e.chat
                        }), (0, L.jsx)("div", {
                            "data-testid": "newsletter-info-top-card-subtitle",
                            className: (0, O.default)(D.newsletterSecondary),
                            children: (0, L.jsx)(c.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, L.jsxs)(k.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: [n, (null == t ? void 0 : t.isSuspendedOrTerminated) ? null : (0, L.jsxs)(L.Fragment, {
                                        children: [m.default.isRTL() ? " - " : " · ", a]
                                    })]
                                })
                            })
                        })]
                    }), (null == t ? void 0 : t.isSuspendedOrTerminated) ? null : (0, L.jsx)(B, {
                        chat: e.chat
                    })]
                })
            };
            var i = a(n(887757)),
                o = a(n(348926)),
                r = a(n(963038)),
                l = n(462261),
                s = n(887549),
                u = n(489323),
                c = n(160967),
                d = n(364730),
                f = a(n(39357)),
                p = n(208188),
                h = n(720135),
                m = a(n(758927)),
                g = n(384616),
                v = n(628707),
                x = a(n(666575)),
                b = a(n(569483)),
                C = n(970714),
                j = n(944691),
                M = n(700459),
                y = a(n(638396)),
                _ = n(96293),
                S = n(378776),
                k = n(558288),
                w = n(236539),
                P = n(422210),
                T = n(71867),
                I = n(852688),
                E = a(n(83938)),
                A = n(548360),
                N = n(667294),
                O = a(n(156720)),
                R = n(853548),
                L = n(785893),
                D = {
                    newsletterSecondary: {
                        lineHeight: "a4ywakfo",
                        marginTop: "ma4rpf0l",
                        textAlign: "qfejxiq4"
                    },
                    actionIcon: {
                        color: "fsk8o631"
                    },
                    infoAction: {
                        flexGrow: "ggj6brxn",
                        color: "fsk8o631",
                        fontWeight: "hnx8ox4h"
                    },
                    spinner: {
                        stroke: "mqe5ufcr"
                    },
                    infoActionBtn: {
                        fontSize: "ovllcyds",
                        minWidth: "pwaghgrf"
                    }
                };

            function B(e) {
                var t = e.chat,
                    n = (0, N.useState)(!1),
                    a = (0, r.default)(n, 2),
                    u = a[0],
                    c = a[1],
                    f = (0, R.useOptionalModelValues)(t.newsletterMetadata, ["membershipType", "inviteCode"]),
                    m = t.formattedTitle,
                    x = (f || {}).inviteCode,
                    b = null != x ? `https://whatsapp.com/channel/${x}` : null,
                    j = (0, N.useCallback)((function() {
                        if (null != b) {
                            var e = A.fbt._("Follow the {newsletter_name} channel on WhatsApp: {link}", [A.fbt._param("newsletter_name", m), A.fbt._param("link", b)], {
                                    hk: "2JUBPH"
                                }),
                                t = A.fbt._("", null, {
                                    hk: "rzrsn"
                                });
                            v.ModalManager.open((0, L.jsx)(y.default, {
                                title: t.toString(),
                                text: e.toString()
                            }), {
                                transition: "modal-flow"
                            })
                        }
                    }), [m, b]),
                    k = (0, N.useCallback)((function() {
                        null != b && ((0, d.copyTextToClipboard)(b) ? P.ToastManager.open((0, L.jsx)(w.Toast, {
                            msg: A.fbt._("Link copied to clipboard.", null, {
                                hk: "24K2ka"
                            })
                        })) : P.ToastManager.open((0, L.jsx)(w.Toast, {
                            msg: A.fbt._("Couldn't copy to clipboard.", null, {
                                hk: "2JI7CO"
                            })
                        })))
                    }), [b]),
                    O = (0, N.useCallback)((0, o.default)(i.default.mark((function e() {
                        return i.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return c(!0), e.next = 3, (0, M.subscribeToNewsletter)((0, S.unproxy)(t));
                                case 3:
                                    c(!1);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [t]),
                    B = (0, N.useCallback)((function() {
                        v.ModalManager.open((0, L.jsx)(I.UnfollowNewsletterConfirmationModal, {
                            chat: t
                        }))
                    }), [t]),
                    G = [];
                return (0, C.iAmGuest)(f) ? G.push({
                    Icon: l.AddAltIcon,
                    onClick: O,
                    testid: "newsletter-info-follow-action",
                    title: A.fbt._("Follow", null, {
                        hk: "1MHfKq"
                    }),
                    isLoading: u
                }) : (0, C.iAmSubscriber)(f) && G.push({
                    Icon: s.CheckmarkIcon,
                    onClick: B,
                    testid: "newsletter-info-unfollow-action",
                    title: A.fbt._("Unfollow", null, {
                        hk: "3rYypx"
                    }),
                    isLoading: !1
                }), null != x && (G.push({
                    Icon: h.ForwardIcon,
                    onClick: j,
                    testid: "newsletter-info-invite-action",
                    title: A.fbt._("Forward", null, {
                        hk: "46L1pk"
                    }),
                    isLoading: !1
                }), document.queryCommandSupported("copy") && G.push({
                    Icon: g.LinkIcon,
                    onClick: k,
                    testid: "newsletter-info-copy-link-action",
                    title: A.fbt._("Copy link", null, {
                        hk: "3jv6Pn"
                    }),
                    isLoading: !1
                })), (0, L.jsx)(p.FlexRow, {
                    justify: "center",
                    align: "center",
                    xstyle: [T.uiMargin.top25, T.uiMargin.bottom10],
                    children: G.map((function(e, t) {
                        var n = e.testid,
                            a = e.Icon,
                            i = e.onClick,
                            o = e.title,
                            r = e.isLoading;
                        return (0, L.jsx)(E.default, {
                            "aria-label": o,
                            testid: n,
                            onClick: i,
                            xstyle: D.infoActionBtn,
                            disabled: u,
                            children: (0, L.jsxs)(p.FlexColumn, {
                                align: "center",
                                xstyle: [D.infoAction, T.uiPadding.horiz15],
                                children: [r ? (0, L.jsx)(_.Spinner, {
                                    color: D.spinner,
                                    size: 32,
                                    xstyle: T.uiMargin.bottom15
                                }) : (0, L.jsx)(a, {
                                    xstyle: [D.actionIcon, T.uiMargin.bottom15],
                                    width: 32,
                                    height: 32
                                }), o]
                            })
                        }, t)
                    }))
                })
            }
        },
        45727: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.chat,
                    n = e.xstyle,
                    a = e.onDeleteNewsletter,
                    o = (0, x.jsx)(C, {
                        chat: t
                    }),
                    r = (0, x.jsx)(b, {
                        chat: t
                    }),
                    l = (0, x.jsx)(j, {
                        chat: t,
                        onDeleteNewsletter: a
                    });
                return (0, x.jsxs)(i.ChatInfoDrawerButtonsSection, {
                    xstyle: n,
                    children: [o, r, l]
                })
            };
            var i = n(988456),
                o = n(356953),
                r = n(519973),
                l = n(517247),
                s = n(628707),
                u = n(945629),
                c = n(970714),
                d = a(n(209817)),
                f = n(233565),
                p = n(949059),
                h = n(852688),
                m = n(548360),
                g = n(667294),
                v = n(853548),
                x = n(785893);

            function b(e) {
                var t = e.chat,
                    n = (0, v.useOptionalModelValues)(t.newsletterMetadata, ["membershipType", "suspended", "terminated", "isSuspendedOrTerminated"]);
                if ((null == n ? void 0 : n.isSuspendedOrTerminated) || (0, c.iAmOwner)(n) || (0, c.iAmAdmin)(n) || !(0, u.isNewsletterReportingEnabled)()) return null;
                var a = m.fbt._("", null, {
                    hk: "2JTAk8"
                });
                return (0, x.jsx)(r.DrawerButton, {
                    testid: "newsletter-integrity-report-button",
                    icon: (0, x.jsx)(p.ThumbsDownIcon, {
                        directional: !0
                    }),
                    color: "danger",
                    theme: "chat-info",
                    onClick: function() {
                        s.ModalManager.open((0, x.jsx)(d.default, {
                            chat: t,
                            spamFlow: f.SpamFlow.NewsletterInfoReport
                        }))
                    },
                    children: a
                })
            }

            function C(e) {
                var t = e.chat,
                    n = (0, v.useOptionalModelValues)(t.newsletterMetadata, ["membershipType"]),
                    a = m.fbt._("Unfollow", null, {
                        hk: "3NYOtp"
                    }),
                    i = (0, g.useCallback)((function() {
                        s.ModalManager.open((0, x.jsx)(h.UnfollowNewsletterConfirmationModal, {
                            chat: t
                        }))
                    }), [t]);
                return (0, c.iAmSubscriber)(n) ? (0, x.jsx)(r.DrawerButton, {
                    testid: "li-unfollow-newsletter",
                    icon: (0, x.jsx)(l.ExitIcon, {
                        directional: !0
                    }),
                    color: "danger",
                    theme: "chat-info",
                    onClick: i,
                    children: a
                }) : null
            }

            function j(e) {
                var t = e.chat,
                    n = e.onDeleteNewsletter,
                    a = (0, v.useOptionalModelValues)(t.newsletterMetadata, ["membershipType"]),
                    i = m.fbt._("Delete channel", null, {
                        hk: "2PQtz4"
                    });
                return (0, c.iAmOwner)(a) ? (0, x.jsx)(r.DrawerButton, {
                    testid: "li-delete-newsletter",
                    icon: (0, x.jsx)(o.DeleteIcon, {
                        directional: !0
                    }),
                    color: "danger",
                    theme: "chat-info",
                    onClick: n,
                    children: i
                }) : null
            }
        },
        345129: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NewsletterPublicChannelPrivacyNux = function() {
                var e = m.fbt._("About this channel", null, {
                        hk: "3Ig3Nc"
                    }),
                    t = (0, v.jsx)(o.SelectableLink, {
                        className: (0, g.default)(x),
                        id: "data-sharing-learn-more-link",
                        selectable: !0,
                        onClick: function() {
                            return (0, r.openExternalLink)((0, l.getNewsletterGuidelinesFaqUrl)())
                        },
                        children: m.fbt._("guidelines", null, {
                            hk: "vpHHG"
                        })
                    }),
                    n = (0, v.jsxs)(v.Fragment, {
                        children: [(0, v.jsx)(u.NewsletterPrivacyRow, {
                            icon: (0, v.jsx)(i.BusinessWebsiteIcon, {
                                color: f.SvgColorProp.TEAL,
                                height: 20
                            }),
                            title: m.fbt._("Anyone can discover your channel", null, {
                                hk: "3Mv6pP"
                            }),
                            text: m.fbt._("Channels are public, so anyone can find them and see 30 days of history.", null, {
                                hk: "1e8ufO"
                            })
                        }), (0, v.jsx)(u.NewsletterPrivacyRow, {
                            icon: (0, v.jsx)(h.VisibilityOffIcon, {
                                color: f.SvgColorProp.TEAL,
                                height: 20
                            }),
                            title: m.fbt._("People see your channel, not you", null, {
                                hk: "LlDn3"
                            }),
                            text: m.fbt._("Your phone number, profile picture and name aren't shown to followers.", null, {
                                hk: "21oJXn"
                            })
                        }), (0, v.jsx)(u.NewsletterPrivacyRow, {
                            icon: (0, v.jsx)(d.SecurityShieldIcon, {
                                color: f.SvgColorProp.TEAL,
                                height: 20
                            }),
                            title: m.fbt._("You're responsible for your channel", null, {
                                hk: "2daxA5"
                            }),
                            text: m.fbt._("Your channel needs to follow our {guidelines_link} and is reviewed against them.", [m.fbt._param("guidelines_link", t)], {
                                hk: "1O1H5q"
                            })
                        })]
                    });
                return (0, v.jsx)(c.PhoneNumberPrivacyNux, {
                    testid: "public_channel__newsletter",
                    onOK: function() {
                        return s.ModalManager.close()
                    },
                    okText: m.fbt._("Ok", null, {
                        hk: "RJ838"
                    }),
                    onCancel: function() {
                        return (0, r.openExternalLink)((0, l.getNewsletterPrivacyFaqUrl)())
                    },
                    cancelText: m.fbt._("Learn more", null, {
                        hk: "1L9NkE"
                    }),
                    displayName: (0, p.getMeDisplayName)(),
                    title: e,
                    customContent: n
                })
            };
            var i = n(228855),
                o = n(160967),
                r = n(192070),
                l = n(212390),
                s = n(628707),
                u = n(892179),
                c = n(955290),
                d = n(264860),
                f = n(401304),
                p = n(228277),
                h = n(400029),
                m = n(548360),
                g = a(n(156720)),
                v = n(785893),
                x = {
                    cursor: "ajgl1lbb"
                }
        },
        597765: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.editNewsletterMetadataAction = function() {
                return c.apply(this, arguments)
            };
            var i = a(n(887757)),
                o = a(n(348926)),
                r = n(941866),
                l = n(178606),
                s = n(831317),
                u = n(183216);

            function c() {
                return (c = (0, o.default)(i.default.mark((function e(t, n, a) {
                    var o, c, d, f, p, h;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t.isNewsletter) {
                                    e.next = 4;
                                    break
                                }
                                return __LOG__(4, void 0, new Error, !0, ["newsletter"])`[newsletters][editNewsletterMetadataAction] called with a non-newsletter chat`, SEND_LOGS("edit-metadata-action-not-a-newsletter", 1, "newsletter"), e.abrupt("return");
                            case 4:
                                return o = (0, r.toNewsletterJid)(t.id.toJid()), e.prev = 5, e.next = 8, (0, l.editNewsletterMetadata)(o, n, a);
                            case 8:
                                if (null != (c = e.sent)) {
                                    e.next = 11;
                                    break
                                }
                                return e.abrupt("return");
                            case 11:
                                return d = (0, s.mapNewsletterToModels)(c), f = d.chat, p = d.metadata, h = d.pic, e.next = 14, (0, u.updateCollections)({
                                    chats: [f],
                                    metadata: [p],
                                    pics: [h]
                                });
                            case 14:
                                e.next = 20;
                                break;
                            case 16:
                                throw e.prev = 16, e.t0 = e.catch(5), __LOG__(4, void 0, new Error, !0, ["newsletter"])`[newsletter][editNewsletterMetadataAction] Failed to edit newsletter metadata`, SEND_LOGS("edit-metadata-action-failed", 1, "newsletter"), e.t0;
                            case 20:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [5, 16]
                    ])
                })))).apply(this, arguments)
            }
        },
        977202: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.stickerPackId,
                    a = e.onStickerPackView,
                    g = e.stickerPackViewDelay,
                    v = e.sticker,
                    x = (b = n, (0, p.useEffect)((function() {
                        b && d.StickerPackCollectionMd.fetchStickerPack(b)
                    }), [b]), (0, h.default)(d.StickerPackCollectionMd, "add remove reset", (function() {
                        return null != b ? d.StickerPackCollectionMd.get(b) : null
                    })));
                var b;
                if (n) {
                    var C = function(e) {
                        e.stopPropagation(), a && a(), null != g ? self.setTimeout((function() {
                            return o.Cmd.openStickerPack(n)
                        }), g + 150) : o.Cmd.openStickerPack(n)
                    };
                    (0, u.isFavoriteStickersEnabled)() ? null != v && (t = (0, m.jsxs)(s.FlexRow, {
                        children: [(0, m.jsx)(i.default, {
                            onClick: C,
                            type: "secondary",
                            children: f.fbt._("View Pack", null, {
                                hk: "tAlU3"
                            })
                        }), l.default.get(v.filehash) ? (0, m.jsx)(i.default, {
                            onClick: function() {
                                return (0, r.removeStickerFromFavorites)(v)
                            },
                            type: "secondary",
                            children: f.fbt._("Remove From Favorites", null, {
                                hk: "3YoUkP"
                            })
                        }) : (0, m.jsx)(i.default, {
                            onClick: function() {
                                return (0, r.addStickerToFavorites)(v)
                            },
                            type: "secondary",
                            children: f.fbt._("Add to Favorites", null, {
                                hk: "3x4EBo"
                            })
                        })]
                    })): t = (0, m.jsx)(i.default, {
                        onClick: C,
                        type: "secondary",
                        children: f.fbt._("View Pack", null, {
                            hk: "tAlU3"
                        })
                    })
                }
                return (0, m.jsxs)(m.Fragment, {
                    children: [(0, m.jsx)(c.StickerDetailsStickerPackInfo, {
                        name: null == x ? void 0 : x.name,
                        publisher: null == x ? void 0 : x.publisher,
                        theme: c.Theme.MediaViewer
                    }), t]
                })
            };
            var i = a(n(746251)),
                o = n(896674),
                r = n(907812),
                l = a(n(164396)),
                s = n(208188),
                u = n(518005),
                c = n(120092),
                d = n(662322),
                f = n(548360),
                p = n(667294),
                h = a(n(86525)),
                m = n(785893)
        },
        809374: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(887757)),
                o = a(n(348926)),
                r = a(n(963038)),
                l = a(n(334575)),
                s = a(n(993913)),
                u = a(n(502205)),
                c = a(n(199842)),
                d = n(451226),
                f = n(125089),
                p = n(234459),
                h = a(n(237120)),
                m = a(n(686866)),
                g = n(58985),
                v = a(n(383322)),
                x = n(548360),
                b = n(667294),
                C = n(785893),
                j = function(e) {
                    (0, u.default)(n, e);
                    var t = (0, c.default)(n);

                    function n() {
                        return (0, l.default)(this, n), t.apply(this, arguments)
                    }
                    return (0, s.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, C.jsx)(M, {
                                contactId: this.props.contactId,
                                onClose: this.pop
                            }))
                        }
                    }]), n
                }(v.default);
            t.default = j;
            var M = (0, b.forwardRef)((function(e, t) {
                var n = e.contactId,
                    a = (0, b.useState)(void 0),
                    l = (0, r.default)(a, 2),
                    s = l[0],
                    u = l[1],
                    c = (0, b.useState)(!0),
                    v = (0, r.default)(c, 2),
                    j = v[0],
                    M = v[1];
                (0, b.useEffect)((function() {
                    (function() {
                        var e = (0, o.default)(i.default.mark((function e() {
                            var t, a, o;
                            return i.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, f.BusinessProfileCollection.update(n, {
                                            getMerchantCompliance: !0
                                        });
                                    case 2:
                                        t = e.sent, a = Array.isArray(t) ? t[0] : t, (o = a.serialize()) ? (u(o.legalEntityDetails || void 0), M(!1)) : __LOG__(3)`compliance: cannot fetch business details (${n.toString()})`;
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    })()()
                }), []);
                var y = null != s ? s : {},
                    _ = y.entityName,
                    S = y.customerCareDetails,
                    k = y.grievanceOfficerDetails,
                    w = (0, d.getEntityTypeText)(s);
                return (0, C.jsxs)(h.default, {
                    ref: t,
                    theme: "striped",
                    children: [(0, C.jsx)(g.DrawerHeader, {
                        title: x.fbt._("Business details", null, {
                            hk: "m9xzp"
                        }),
                        type: g.DRAWER_HEADER_TYPE.SMALL,
                        onCancel: e.onClose
                    }), (0, C.jsx)(m.default, {
                        theme: j ? "center-content" : void 0,
                        children: j ? (0, C.jsx)(p.ComplianceInfoLoading, {}) : (0, C.jsxs)(C.Fragment, {
                            children: [(0, C.jsxs)(p.ComplianceInfoGroup, {
                                children: [(0, C.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: _,
                                    label: x.fbt._("Legal Name of Business", null, {
                                        hk: "2s9jD"
                                    })
                                }), (0, C.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: w,
                                    label: x.fbt._("Business Type", null, {
                                        hk: "48J73B"
                                    })
                                })]
                            }), (0, C.jsxs)(p.ComplianceInfoGroup, {
                                title: x.fbt._("Customer Care Information", null, {
                                    hk: "qlYos"
                                }),
                                children: [(0, C.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == S ? void 0 : S.mobileNumber,
                                    label: x.fbt._("Mobile Phone Number", null, {
                                        hk: "PMTTg"
                                    }),
                                    forceLTR: !0
                                }), (0, C.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == S ? void 0 : S.landlineNumber,
                                    label: x.fbt._("Landline Phone Number", null, {
                                        hk: "tXYaf"
                                    }),
                                    forceLTR: !0
                                }), (0, C.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == S ? void 0 : S.email,
                                    label: x.fbt._("Email Address", null, {
                                        hk: "2jYxR1"
                                    })
                                })]
                            }), (0, C.jsxs)(p.ComplianceInfoGroup, {
                                title: x.fbt._("Grievance Officer Information", null, {
                                    hk: "3emd7I"
                                }),
                                children: [(0, C.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == k ? void 0 : k.name,
                                    label: x.fbt._("Name", null, {
                                        hk: "2vEs6r"
                                    })
                                }), (0, C.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == k ? void 0 : k.mobileNumber,
                                    label: x.fbt._("Mobile Phone Number", null, {
                                        hk: "3kk5I"
                                    }),
                                    forceLTR: !0
                                }), (0, C.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == k ? void 0 : k.landlineNumber,
                                    label: x.fbt._("Landline Phone Number", null, {
                                        hk: "4GBzF0"
                                    })
                                }), (0, C.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == k ? void 0 : k.email,
                                    label: x.fbt._("Email Address", null, {
                                        hk: "3SvbLl"
                                    })
                                })]
                            })]
                        })
                    })]
                }, "merchant-details-modal")
            }));
            M.displayName = "MerchantDetails"
        },
        436115: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact,
                    n = (0, M.useContactValues)(t.id, [c.getVerifiedLevel, c.getVerifiedName]),
                    a = (0, i.default)(n, 2),
                    _ = a[0],
                    S = a[1],
                    k = (0, p.getBusinessFaqUrl)(),
                    w = !u.Conn.isSMB;
                (0, j.useEffect)((function() {
                    w && new o.BannerEventWamEvent({
                        bannerType: x.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                        bannerOperation: x.BANNER_OPERATIONS.SHOWN
                    }).commit()
                }), [w]);
                var P = _ === r.VERIFIED_LEVEL.HIGH ? h.default.t(777, {
                    businessName: S
                }) : C.fbt._("This business uses WhatsApp Business, which allows them to add their opening hours, address, website and catalog of products or services.", null, {
                    hk: "82W5f"
                });
                return (0, y.jsxs)(s.ConfirmPopup, {
                    title: C.fbt._("About WhatsApp Business", null, {
                        hk: "3XF5gx"
                    }),
                    onOK: function() {
                        m.ModalManager.close(), w && new o.BannerEventWamEvent({
                            bannerType: x.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: x.BANNER_OPERATIONS.DISMISS
                        }).commit()
                    },
                    okText: C.fbt._("OK", null, {
                        hk: "4oTrfy"
                    }),
                    children: [(0, y.jsx)(d.EmojiText, {
                        text: P
                    }), " ", (0, y.jsx)(l.default, {
                        href: k,
                        onClick: function(e) {
                            e.preventDefault(), m.ModalManager.close(), self.setTimeout((function() {
                                return (0, f.openExternalLink)(k)
                            }), 10)
                        },
                        children: h.default.t(393)
                    }), w && (0, y.jsx)("div", {
                        className: b.default.footerNote,
                        children: (0, y.jsxs)(v.TextSpan, {
                            theme: "muted",
                            size: "13",
                            children: [C.fbt._("If you're a business, the free WhatsApp Business app can help.", null, {
                                hk: "14W7ur"
                            }), (0, y.jsx)("br", {}), (0, y.jsx)(l.default, {
                                onClick: function(e) {
                                    e.preventDefault(), m.ModalManager.close(), new o.BannerEventWamEvent({
                                        bannerType: x.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                                        bannerOperation: x.BANNER_OPERATIONS.CLICK
                                    }).commit(), self.setTimeout((function() {
                                        return m.ModalManager.open((0, y.jsx)(g.SmbAppUpsellModal, {}))
                                    }), 200)
                                },
                                className: b.default.getTheAppLink,
                                children: C.fbt._("Learn about getting the app", null, {
                                    hk: "3ncguo"
                                })
                            })]
                        })
                    })]
                })
            };
            var i = a(n(963038)),
                o = n(358452),
                r = n(71100),
                l = a(n(522656)),
                s = n(430888),
                u = n(500204),
                c = n(65001),
                d = n(990055),
                f = n(192070),
                p = n(212390),
                h = a(n(758927)),
                m = n(628707),
                g = n(838183),
                v = n(558288),
                x = n(447853),
                b = a(n(936552)),
                C = n(548360),
                j = n(667294),
                M = n(302304),
                y = n(785893)
        },
        838183: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SmbAppUpsellModal = function() {
                return (0, h.jsxs)(r.ConfirmPopup, {
                    title: p.fbt._("WhatsApp Business app", null, {
                        hk: "4BfvOl"
                    }),
                    onOK: function() {
                        new i.BannerEventWamEvent({
                            bannerType: f.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: f.BANNER_OPERATIONS.DISMISS
                        }).commit(), c.ModalManager.close()
                    },
                    okText: p.fbt._("Close", null, {
                        hk: "19Jpec"
                    }),
                    children: [(0, h.jsx)(d.default, {}), (0, h.jsx)("p", {
                        children: (0, h.jsx)(l.EmojiText, {
                            text: p.fbt._("If you're a business, you can benefit from switching to the free WhatsApp Business app. It has tools to connect with customers and manage messages.", null, {
                                hk: "2SAIXH"
                            })
                        })
                    }), (0, h.jsx)("br", {}), (0, h.jsxs)("p", {
                        children: [(0, h.jsx)(l.EmojiText, {
                            text: p.fbt._("Scan this code to get the WhatsApp Business App. Or, you can install it from the App Store or Google Play Store.", null, {
                                hk: "2840mD"
                            })
                        }), " ", (0, h.jsx)(o.default, {
                            href: m,
                            onClick: function(e) {
                                e.preventDefault(), c.ModalManager.close(), self.setTimeout((function() {
                                    return (0, s.openExternalLink)(m)
                                }), 10)
                            },
                            children: u.default.t(393)
                        })]
                    })]
                })
            }, t.WHATSAPP_BUSINESS_URL = void 0;
            var i = n(358452),
                o = a(n(522656)),
                r = n(430888),
                l = n(990055),
                s = n(192070),
                u = a(n(758927)),
                c = n(628707),
                d = a(n(514259)),
                f = n(447853),
                p = n(548360),
                h = n(785893),
                m = "https://www.whatsapp.com/business";
            t.WHATSAPP_BUSINESS_URL = m
        },
        514259: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e, t = (0, c.useRef)(null),
                    n = (0, c.useRef)(null),
                    a = (0, c.useContext)(s.ThemeContext).theme,
                    p = "dark" === a;
                return (0, c.useEffect)((function() {
                    return null != t.current && (n.current = new o.default(t.current, {
                            text: "https://www.whatsapp.com/business/download",
                            colorDark: "#122e31",
                            colorLight: "#ffffff",
                            width: l.QR_EDGE / 2,
                            height: l.QR_EDGE / 2,
                            typeNumber: 4,
                            correctLevel: o.default.CorrectLevel.H
                        })),
                        function() {
                            null != n.current && (n.current.clear(), n.current = null, t.current = null)
                        }
                }), [p]), (0, d.jsx)("div", {
                    className: u.default.wrapper,
                    children: (0, d.jsx)("div", {
                        ref: t,
                        className: (0, r.cx)((e = {}, (0, i.default)(e, u.default.codeDarkMode, p), (0, i.default)(e, u.default.code, !0), e)),
                        children: (0, d.jsx)(f, {
                            theme: a
                        })
                    })
                })
            };
            var i = a(n(859713)),
                o = a(n(987609)),
                r = n(541585),
                l = n(295769),
                s = n(397065),
                u = a(n(15191)),
                c = n(667294),
                d = n(785893);

            function f() {
                return (0, d.jsx)("div", {
                    className: u.default.codeLogo,
                    children: (0, d.jsx)("svg", {
                        width: "100%",
                        viewBox: "0 0 50 50",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, d.jsx)("path", {
                            d: "M42.6776 42.6779C37.9558 47.3997 31.6777 50.0001 24.9999 50.0001C21.0047 50.0001 17.0541 49.0389 13.5244 47.2141L0.601068 49.3339L2.72832 36.3645C0.941278 32.8647 0 28.9525 0 25.0001C0 18.3223 2.60042 12.0443 7.32229 7.32237C12.0442 2.6005 18.3221 0 24.9999 0C31.6777 0 37.9558 2.6005 42.6776 7.32237C47.3995 12.0443 50 18.3223 50 25.0001C50 31.678 47.3995 37.9558 42.6776 42.6779ZM24.9999 4.33778C13.6067 4.33778 4.33772 13.607 4.33772 25.0001C4.33772 28.4792 5.21935 31.9192 6.8868 34.9487L7.24853 35.6054L5.85915 44.0756L14.2959 42.6918L14.9565 43.0601C18.0107 44.7624 21.4837 45.6622 24.9999 45.6622C36.3932 45.6622 45.6622 36.3933 45.6622 25.0001C45.6622 13.607 36.3932 4.33778 24.9999 4.33778ZM31.1133 24.3614C32.4522 24.9804 34.1536 26.3725 34.1208 29.3117C34.0749 33.4266 31.2191 35.6542 27.2744 35.6542H19.4594H18.3042C17.5079 35.6542 16.8645 35.0053 16.8713 34.2092L17.0344 15.0573C17.041 14.2714 17.6794 13.6377 18.4652 13.6366L27.1493 13.6256C31.4651 13.6256 33.9598 16.039 33.9177 19.8134C33.8903 22.2579 32.2484 23.8355 31.1133 24.3614ZM26.766 17.4622H21.3643L21.3076 22.5361H26.7093C28.5347 22.5361 29.5672 21.5152 29.584 19.9992C29.6009 18.4831 28.5915 17.4622 26.766 17.4622ZM26.9444 26.4035H21.2643L21.2038 31.8178H26.884C28.8333 31.8178 29.7752 30.5802 29.792 29.0952C29.8085 27.6101 28.8939 26.4035 26.9444 26.4035Z",
                            fill: "currentColor"
                        })
                    })
                })
            }
        },
        968917: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.docMsgs,
                    n = e.chat,
                    a = e.isFilterEnabled,
                    v = void 0 !== a && a,
                    x = e.filterText,
                    b = (0, o.default)(e, g),
                    C = (0, h.default)(),
                    j = (0, f.default)((function() {
                        return new c.default((function(e) {
                            var t = [],
                                n = (0, r.getText)(e);
                            null != n && t.push(n);
                            var a = e.mediaData.filename;
                            return t.push(a), t.join(" ")
                        }))
                    }));
                (0, p.useListener)(t, "add", (function(e) {
                    v && j.current.cacheMessageTokens(e)
                })), (0, p.useListener)(t, "remove", (function(e) {
                    v && j.current.removeMessageTokensFromCache(e)
                })), (0, p.useListener)(t, "reset", (function() {
                    v && j.current.clearTokensCache()
                })), (0, d.useEffect)((function() {
                    v && t.forEach((function(e) {
                        j.current.cacheMessageTokens(e)
                    }))
                }), [t, j, v]);
                var M = v ? function(e, t) {
                    return j.current.filter(e, x, t)
                } : void 0;
                return (0, m.jsxs)(m.Fragment, {
                    children: [(0, m.jsx)(u.default, (0, i.default)({
                        testid: "doc-gallery",
                        msgsCollection: t,
                        msgsCollectionUpdateEvents: ["add", "remove", "reset", "query_doc_before"],
                        queryCollection: function(e) {
                            t.hasDocBefore && C((function() {
                                t.queryDocs(n, e)
                            }))
                        },
                        getHasBefore: function() {
                            return t.hasDocBefore
                        },
                        getQueryBefore: function() {
                            return t.queryDocBefore
                        },
                        emptyText: s.default.t(497),
                        chat: n,
                        filterMessages: M
                    }, b)), (0, m.jsx)(l.HistorySyncGalleryPlaceholder, {
                        chat: n
                    })]
                })
            };
            var i = a(n(81109)),
                o = a(n(506479)),
                r = n(530236),
                l = n(507281),
                s = a(n(758927)),
                u = a(n(419544)),
                c = a(n(340297)),
                d = n(667294),
                f = a(n(279781)),
                p = n(494092),
                h = a(n(682013)),
                m = n(785893),
                g = ["docMsgs", "chat", "isFilterEnabled", "filterText"]
        },
        711050: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.linkMsgs,
                    n = e.chat,
                    a = e.selectedMessages,
                    M = e.selectable,
                    y = e.onMessageSelect,
                    _ = e.isFilterEnabled,
                    S = void 0 !== _ && _,
                    k = e.filterText,
                    w = (0, b.default)(),
                    P = (0, v.default)((function() {
                        return new h.default((function(e) {
                            return (0, l.getText)(e)
                        }))
                    }));
                (0, x.useListener)(t, "add", (function(e) {
                    S && P.current.cacheMessageTokens(e)
                })), (0, x.useListener)(t, "remove", (function(e) {
                    P.current.removeMessageTokensFromCache(e)
                })), (0, x.useListener)(t, "reset", (function() {
                    S && P.current.clearTokensCache()
                })), (0, g.useEffect)((function() {
                    S && t.forEach((function(e) {
                        P.current.cacheMessageTokens(e)
                    }))
                }), [t, P, S]), (0, x.useListener)(n.msgs, "add bulk_add", (function(e) {
                    if (e) {
                        var n = [],
                            a = Array.isArray(e) ? e : [e];
                        Promise.all(a.map((function(e) {
                            return (0, p.getLinksFromMsg)(e).length && n.push(e), Promise.resolve()
                        }))).then((function() {
                            n.length && t.add(n)
                        }))
                    }
                }));
                var T = S ? function(e, t) {
                        return P.current.filter(e, k, t)
                    } : void 0,
                    I = (e.linkMsgs, e.chat, e.filterText, e.isFilterEnabled, (0, o.default)(e, j));
                return (0, C.jsxs)(C.Fragment, {
                    children: [(0, C.jsx)(d.default, (0, i.default)({
                        testid: "link-gallery",
                        msgsCollection: t,
                        msgsCollectionUpdateEvents: ["add", "remove", "reset", "query_doc_before"],
                        queryCollection: function(e) {
                            t.hasLinkBefore && w((function() {
                                t.queryLinks(n, e)
                            }))
                        },
                        getHasBefore: function() {
                            return t.hasLinkBefore
                        },
                        getQueryBefore: function() {
                            return t.queryLinkBefore
                        },
                        messageElements: function(e, t) {
                            return function(e, t, n, a, i) {
                                var o = [];
                                return e.forEach((function(e) {
                                    var l = !(0, f.getIsSentByMe)(e) && (0, f.getIsGroupMsg)(e),
                                        s = null;
                                    (0, f.getLinkPreview)(e) && (s = (0, C.jsx)(m.default, {
                                        testid: "link-gallery-msg",
                                        msg: e,
                                        selectable: n,
                                        selectedMessages: i,
                                        onMessageSelect: a,
                                        displayType: r.DISPLAY_TYPE.GALLERY_LINKS,
                                        onClickMsg: t
                                    }, e.id.toString())), (0, p.getGalleryLinks)(e).forEach((function(r, u) {
                                        r.href === e.matchedText && null != s || o.push((0, C.jsx)(c.default, {
                                            testid: "link-gallery-msg",
                                            msg: e.safe(),
                                            link: r,
                                            displayAuthor: l,
                                            selectable: n,
                                            selectedMessages: i,
                                            onMessageSelect: a,
                                            onClickMsg: t
                                        }, `${e.id.toString()}-${u}`))
                                    })), null != s && o.push(s)
                                })), o.reverse(), o
                            }(e, t, M, y, a)
                        },
                        emptyText: u.default.t(499),
                        chat: n,
                        filterMessages: T
                    }, I)), (0, C.jsx)(s.HistorySyncGalleryPlaceholder, {
                        chat: e.chat
                    })]
                })
            };
            var i = a(n(81109)),
                o = a(n(506479)),
                r = n(241941),
                l = n(530236),
                s = n(507281),
                u = a(n(758927)),
                c = a(n(683733)),
                d = a(n(419544)),
                f = n(763249),
                p = n(362974),
                h = a(n(340297)),
                m = a(n(598393)),
                g = n(667294),
                v = a(n(279781)),
                x = n(494092),
                b = a(n(682013)),
                C = n(785893),
                j = ["linkMsgs", "chat", "filterText", "isFilterEnabled"]
        },
        683733: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.msg,
                    a = e.link,
                    P = e.displayAuthor,
                    T = e.selectedMessages,
                    I = e.onMessageSelect,
                    E = e.onClickMsg,
                    A = e.testid,
                    N = (0, k.useMsgValues)(e.msg.id, [v.getBody, v.getCaption, d.getDir, v.getId, v.getIsSentByMe, d.getMediaData, v.getType, d.getRtl, d.getSenderObj, v.getStar, d.getAsRevoked, v.getIsKept]),
                    O = (0, o.default)(N, 12),
                    R = O[0],
                    L = O[1],
                    D = O[2],
                    B = O[3],
                    G = O[4],
                    V = (O[5], O[6], O[7]),
                    F = O[8],
                    H = O[9],
                    U = (O[10], O[11]),
                    W = (0, _.useState)(!1),
                    Y = (0, o.default)(W, 2),
                    z = Y[0],
                    q = Y[1],
                    K = (0, _.useState)((function() {
                        return T.isSelected(n.unsafe())
                    })),
                    X = (0, o.default)(K, 2),
                    Z = X[0],
                    J = X[1];
                (0, S.useListener)(T, B.toString(), (function(e) {
                    Z !== e && J(e)
                }));
                var Q = e.selectable || z ? (0, w.jsx)(g.default, {
                        checked: Z,
                        onClick: function(e) {
                            e && e.stopPropagation(), I(n.unsafe(), !Z)
                        },
                        msgTheme: "gallery"
                    }) : null,
                    $ = (0, c.Conversation)({
                        mentions: n.mentionMap(),
                        groupMentions: n.groupMentionMap(),
                        links: (0, x.getLinksFromMsg)(n.unsafe()),
                        phoneNumbers: (0, C.getPhoneNumbersFromMsg)(n.unsafe()),
                        selectable: true,
                        trusted: (0, b.isTrusted)(n.unsafe()),
                        fromMe: B.fromMe
                    }),
                    ee = R && R.includes(a.url) ? R : L,
                    te = P ? (0, w.jsx)("div", {
                        className: y.default.author,
                        children: (0, w.jsx)(m.default, {
                            msg: n,
                            contact: F
                        })
                    }) : null,
                    ne = (0, x.getSuspiciousLinks)(n.unsafe()).length > 0;
                return (0, w.jsx)(f.default, {
                    hover: z,
                    onClick: function() {
                        E(n.unsafe(), !Z)
                    },
                    onMouseEnter: z ? null : function() {
                        z || q(!0)
                    },
                    onMouseOver: z ? null : function() {
                        z || q(!0)
                    },
                    onMouseLeave: z ? function() {
                        z && q(!1)
                    } : null,
                    testid: A,
                    children: (0, w.jsxs)("div", {
                        className: y.default.msg,
                        "data-testid": "link-msg",
                        children: [(0, w.jsx)(j.default, {
                            transitionName: "delay-leave",
                            children: Q
                        }), (0, w.jsx)(M.MessageContainer, {
                            isSentByMe: G,
                            children: (0, w.jsxs)("div", {
                                className: (0, l.cx)((t = {}, (0, i.default)(t, y.default.hasAuthor, P), (0, i.default)(t, y.default.hasSuspiciousLinks, ne), (0, i.default)(t, y.default.bubble, !0), t)),
                                children: [te, (0, w.jsx)(r.SuspiciousLabel, {
                                    link: a,
                                    displayType: s.DISPLAY_TYPE.GALLERY
                                }), (0, w.jsx)(h.default, {
                                    title: a.url,
                                    isSentByMe: G,
                                    canonicalUrl: a.domain,
                                    displayType: s.DISPLAY_TYPE.GALLERY,
                                    star: H,
                                    kept: U,
                                    isLoading: !1
                                }), (0, w.jsx)(u.EmojiText, {
                                    text: ee,
                                    selectable: true,
                                    className: y.default.text,
                                    dirMismatch: V !== p.default.isRTL(),
                                    direction: D,
                                    formatters: $
                                })]
                            })
                        })]
                    })
                })
            };
            var i = a(n(859713)),
                o = a(n(963038)),
                r = n(54629),
                l = n(541585),
                s = n(241941),
                u = n(990055),
                c = n(924309),
                d = n(530236),
                f = a(n(655296)),
                p = a(n(758927)),
                h = a(n(73098)),
                m = a(n(530668)),
                g = a(n(796984)),
                v = n(763249),
                x = n(362974),
                b = n(754333),
                C = n(915178),
                j = a(n(904847)),
                M = n(144495),
                y = a(n(38538)),
                _ = n(667294),
                S = n(494092),
                k = n(726017),
                w = n(785893)
        },
        419544: (e, t, n) => {
            "use strict";
            var a = n(739163).default,
                i = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.getHasBefore,
                    n = e.getQueryBefore,
                    i = e.msgsCollection,
                    P = e.msgsCollectionUpdateEvents,
                    T = e.emptyText,
                    I = e.scrollOffset,
                    E = void 0 === I ? 0 : I,
                    A = e.selectable,
                    N = e.onMessageSelect,
                    O = e.queryCollection,
                    R = e.selectedMessages,
                    L = e.messageElements,
                    D = e.onProductDetail,
                    B = e.setScrollOffset,
                    G = e.filterMessages,
                    V = e.testid,
                    F = t(),
                    H = n(),
                    U = (0, x.useRef)(null),
                    W = (0, S.default)(),
                    Y = (0, _.default)((function(e) {
                        F && O(e)
                    }), 100),
                    z = (0, x.useState)((function() {
                        return i.toArray()
                    })),
                    q = (0, l.default)(z, 2),
                    K = q[0],
                    X = q[1],
                    Z = (0, _.default)((function(e) {
                        var t = e.scrollHeight - e.clientHeight - e.scrollTop;
                        F && t < h.SCROLL_FUDGE && Y(i.head()), B && B(e.scrollTop)
                    }), 100);
                (0, x.useEffect)((function() {
                    F && Y();
                    var e = U.current;
                    return e && (e.scrollTop = E),
                        function() {
                            Z.cancel()
                        }
                }), []);
                var J = function(e, t) {
                        var n = (0, v.unproxy)(e);
                        A && void 0 !== t ? N(n, t) : c.Cmd.openChatAt((0, m.getChat)(n), (0, u.getSearchContext)((0, m.getChat)(n), n))
                    },
                    Q = (0, x.useRef)(),
                    $ = (0, C.default)(),
                    ee = (0, x.useCallback)(function() {
                        var e = (0, r.default)(o.default.mark((function e(t) {
                            var n, r, l;
                            return o.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (null === (n = Q.current) || void 0 === n || n.abort(), null != t) {
                                            e.next = 5;
                                            break
                                        }
                                        return X(i.toArray()), $(), e.abrupt("return");
                                    case 5:
                                        return Q.current = new a, r = Q.current.signal, e.prev = 7, e.next = 10, t(i, r);
                                    case 10:
                                        l = e.sent, r.aborted || W.aborted || (X(l), $()), e.next = 18;
                                        break;
                                    case 14:
                                        if (e.prev = 14, e.t0 = e.catch(7), e.t0.name === s.ABORT_ERROR) {
                                            e.next = 18;
                                            break
                                        }
                                        throw e.t0;
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [7, 14]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(), [i, $, W]);
                (0, j.useListener)(i, P, (function() {
                    return ee(G)
                })), (0, x.useEffect)((function() {
                    return ee(G),
                        function() {
                            var e;
                            return null === (e = Q.current) || void 0 === e ? void 0 : e.abort()
                        }
                }), [ee, G]);
                var te = (0, M.default)(),
                    ne = (0, l.default)(te, 2),
                    ae = ne[0],
                    ie = ne[1].height,
                    oe = (0, y.default)(ae, U);
                (0, x.useEffect)((function() {
                    null != G && t() && !n() && null != U.current && U.current.scrollHeight < ie + h.SCROLL_FUDGE && Y(i.head())
                }));
                var re = null;
                re = L ? L(K, J) : K.map((function(e, t) {
                    return (0, k.jsx)(g.default, {
                        msg: e,
                        selectable: A,
                        selectedMessages: R,
                        onMessageSelect: N,
                        displayType: d.DISPLAY_TYPE.GALLERY,
                        onClickMsg: J,
                        onProductClick: D
                    }, `${e.id.toString()}_${t}`)
                })).reverse();
                if (H) {
                    if (0 === re.length) return (0, k.jsx)(f.Loading, {});
                    re.push((0, k.jsx)(p.default, {}, -1))
                }
                if (0 === re.length && !H && !F) return (0, k.jsx)(f.Empty, {
                    text: T,
                    testid: "no-elements"
                });
                return (0, k.jsx)("div", {
                    "data-testid": V,
                    ref: oe,
                    onScroll: function(e) {
                        Z(e.target)
                    },
                    className: (0, b.default)(w),
                    children: re
                })
            };
            var o = i(n(887757)),
                r = i(n(348926)),
                l = i(n(963038)),
                s = n(497384),
                u = n(377748),
                c = n(896674),
                d = n(241941),
                f = n(544607),
                p = i(n(399447)),
                h = n(295769),
                m = n(530236),
                g = i(n(598393)),
                v = n(378776),
                x = n(667294),
                b = i(n(156720)),
                C = i(n(61407)),
                j = n(494092),
                M = i(n(2762)),
                y = i(n(295985)),
                _ = i(n(27634)),
                S = i(n(672900)),
                k = n(785893),
                w = {
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh",
                    overflowX: "gfz4du6o",
                    overflowY: "rpvcun8f",
                    flexGrow: "ggj6brxn"
                }
        },
        462487: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.productMsgs,
                    n = e.chat,
                    a = (0, o.default)(e, d),
                    f = (0, u.default)();
                return (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(l.default, (0, i.default)({
                        msgsCollection: t,
                        msgsCollectionUpdateEvents: ["add", "remove", "reset", "products_loaded"],
                        queryCollection: function(e) {
                            return f((function() {
                                t.queryProducts(n, e)
                            }))
                        },
                        getHasBefore: function() {
                            return t.hasProductBefore
                        },
                        getQueryBefore: function() {
                            return t.hasProductBefore ? Promise.resolve() : null
                        },
                        emptyText: s.fbt._("No products", null, {
                            hk: "8o7dB"
                        }),
                        chat: n
                    }, a)), (0, c.jsx)(r.HistorySyncGalleryPlaceholder, {
                        chat: n
                    })]
                })
            };
            var i = a(n(81109)),
                o = a(n(506479)),
                r = n(507281),
                l = a(n(419544)),
                s = n(548360),
                u = a(n(682013)),
                c = n(785893),
                d = ["productMsgs", "chat"]
        },
        222876: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BubbleIcon = function(e) {
                var t, n, a = e.iconXstyle,
                    c = e.height,
                    d = e.width,
                    f = e.viewBox,
                    p = (0, o.default)(e, u);
                if (f) {
                    var h = f.x,
                        m = void 0 === h ? 0 : h,
                        g = f.y,
                        v = void 0 === g ? 0 : g,
                        x = f.width,
                        b = void 0 === x ? 0 : x,
                        C = f.height;
                    t = [m, v, b, void 0 === C ? 0 : C].join(" ")
                }
                var j = 24,
                    M = 24;
                null == c && null == d || (j = c, M = d);
                return (0, s.jsx)(r.BaseSvgSpan, (0, i.default)((0, i.default)({
                    name: "bubble"
                }, p), {}, {
                    children: (0, s.jsx)("svg", {
                        viewBox: null !== (n = t) && void 0 !== n ? n : "0 0 24 24",
                        height: j,
                        width: M,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(a),
                        version: "1.1",
                        x: "0px",
                        y: "0px",
                        enableBackground: "new 0 0 24 24",
                        xmlSpace: "preserve",
                        children: (0, s.jsx)("path", {
                            fill: "currentColor",
                            d: "M17.1,3.6c-1.6-0.7-3.3-1.1-5.1-1.1c-5.8,0-10.4,3.7-10.4,8.3c0,2.7,1.6,5.2,4.3,6.7c0,0,0.1,0,0.1,0.1 c0.1,0.1,0.2,0.2,0.3,0.3c0.3,0.8-0.4,1.5-0.3,1.5c-0.4,0.3-0.6,0.9-0.4,1.4c0.2,0.4,0.6,0.7,1.1,0.7c0.1,0,0.1,0,0.2,0 c0,0,2.6-0.6,4.4-2.3c2,0.1,4-0.2,5.7-0.9c3.5-1.4,5.6-4.2,5.6-7.3C22.4,7.9,20.4,5.1,17.1,3.6z M16.3,16.9L16.3,16.9 c-1.6,0.7-3.5,1-5.4,0.8h-0.3l-0.2,0.2c-1,1.1-2.5,1.7-3.3,2c0.4-0.6,0.7-1.5,0.3-2.4c-0.2-0.5-0.5-0.8-0.7-0.9 c-0.1-0.1-0.2-0.1-0.3-0.2c-2.3-1.3-3.6-3.3-3.6-5.5C2.9,7,7,3.9,12,3.9c1.6,0,3.2,0.3,4.6,0.9c2.8,1.2,4.5,3.5,4.5,6 C21.1,13.4,19.3,15.7,16.3,16.9z"
                        })
                    })
                }))
            };
            var i = a(n(81109)),
                o = a(n(506479)),
                r = n(401304),
                l = a(n(156720)),
                s = n(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        564817: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChatInfoVideoIcon = function(e) {
                var t, n, a = e.iconXstyle,
                    c = e.height,
                    d = e.width,
                    f = e.viewBox,
                    p = (0, o.default)(e, u);
                if (f) {
                    var h = f.x,
                        m = void 0 === h ? 0 : h,
                        g = f.y,
                        v = void 0 === g ? 0 : g,
                        x = f.width,
                        b = void 0 === x ? 0 : x,
                        C = f.height;
                    n = [m, v, b, void 0 === C ? 0 : C].join(" ")
                }
                var j = 13,
                    M = 21;
                null == c && null == d || (j = c, M = d);
                return (0, s.jsx)(r.BaseSvgSpan, (0, i.default)((0, i.default)({
                    name: "chat-info-video"
                }, p), {}, {
                    children: (0, s.jsx)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 21 13",
                        height: j,
                        width: M,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(a),
                        fill: "none",
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.17.5c1.11 0 2.009.9 2.009 2.009v8.482c0 1.11-.9 2.009-2.01 2.009H2.01C.899 13 0 12.1 0 10.991V2.51C0 1.399.9.5 2.009.5h11.16Zm7.17 1.746a.893.893 0 0 1 .196.558v7.892a.893.893 0 0 1-1.45.697l-3.015-2.41V4.517l3.014-2.411a.893.893 0 0 1 1.255.14Z",
                            fill: "#00A884"
                        })
                    })
                }))
            };
            var i = a(n(81109)),
                o = a(n(506479)),
                r = n(401304),
                l = a(n(156720)),
                s = n(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        431221: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ForwardFilledIcon = function(e) {
                var t, n, a = e.iconXstyle,
                    c = e.height,
                    d = e.width,
                    f = e.viewBox,
                    p = (0, o.default)(e, u);
                if (f) {
                    var h = f.x,
                        m = void 0 === h ? 0 : h,
                        g = f.y,
                        v = void 0 === g ? 0 : g,
                        x = f.width,
                        b = void 0 === x ? 0 : x,
                        C = f.height;
                    n = [m, v, b, void 0 === C ? 0 : C].join(" ")
                }
                var j = 16,
                    M = 21;
                null == c && null == d || (j = c, M = d);
                return (0, s.jsx)(r.BaseSvgSpan, (0, i.default)((0, i.default)({
                    name: "forward-filled"
                }, p), {}, {
                    children: (0, s.jsx)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 21 16",
                        height: j,
                        width: M,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(a),
                        fill: "none",
                        children: (0, s.jsx)("path", {
                            d: "M12.778 1.31318C12.778 0.590175 13.651 0.228175 14.161 0.739175L20.206 6.79017C20.2813 6.8654 20.341 6.95472 20.3817 7.05304C20.4225 7.15136 20.4435 7.25675 20.4435 7.36317C20.4435 7.4696 20.4225 7.57499 20.3817 7.67331C20.341 7.77163 20.2813 7.86095 20.206 7.93617L14.161 13.9872C14.0476 14.1006 13.9032 14.1779 13.7459 14.2091C13.5886 14.2404 13.4256 14.2243 13.2775 14.1628C13.1294 14.1013 13.0028 13.9973 12.9139 13.8638C12.825 13.7304 12.7777 13.5735 12.778 13.4132V10.6812C7.68197 10.6812 3.94897 12.1362 1.17397 15.2922C0.927967 15.5712 0.471967 15.3342 0.571967 14.9762C2.00197 9.80317 5.49697 4.97218 12.778 3.93118V1.31318Z",
                            fill: "currentColor"
                        })
                    })
                }))
            };
            var i = a(n(81109)),
                o = a(n(506479)),
                r = n(401304),
                l = a(n(156720)),
                s = n(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        659954: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.KeepInChatMediaIcon = function(e) {
                var t, n, a = e.iconXstyle,
                    c = e.height,
                    d = e.width,
                    f = e.viewBox,
                    p = (0, o.default)(e, u);
                if (f) {
                    var h = f.x,
                        m = void 0 === h ? 0 : h,
                        g = f.y,
                        v = void 0 === g ? 0 : g,
                        x = f.width,
                        b = void 0 === x ? 0 : x,
                        C = f.height;
                    t = [m, v, b, void 0 === C ? 0 : C].join(" ")
                }
                var j = 24,
                    M = 24;
                null == c && null == d || (j = c, M = d);
                return (0, s.jsx)(r.BaseSvgSpan, (0, i.default)((0, i.default)({
                    name: "keep-in-chat-media"
                }, p), {}, {
                    children: (0, s.jsx)("svg", {
                        viewBox: null !== (n = t) && void 0 !== n ? n : "0 0 24 24",
                        height: j,
                        width: M,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(a),
                        fill: "none",
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 3H17C18.1 3 19 3.9 19 5V21L12 18L5 21L5.01 5C5.01 3.9 5.9 3 7 3ZM12 16.387L17.6562 18.8531V5.27815C17.6562 4.65596 17.1472 4.1469 16.525 4.1469H7.475C6.85281 4.1469 6.34375 4.65596 6.34375 5.27815V18.8531L12 16.387Z",
                            fill: "currentColor"
                        })
                    })
                }))
            };
            var i = a(n(81109)),
                o = a(n(506479)),
                r = n(401304),
                l = a(n(156720)),
                s = n(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        122269: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ReactionsMediaIcon = function(e) {
                var t, n, a = e.iconXstyle,
                    c = e.height,
                    d = e.width,
                    f = e.viewBox,
                    p = (0, o.default)(e, u);
                if (f) {
                    var h = f.x,
                        m = void 0 === h ? 0 : h,
                        g = f.y,
                        v = void 0 === g ? 0 : g,
                        x = f.width,
                        b = void 0 === x ? 0 : x,
                        C = f.height;
                    t = [m, v, b, void 0 === C ? 0 : C].join(" ")
                }
                var j = 22,
                    M = 22;
                null == c && null == d || (j = c, M = d);
                return (0, s.jsx)(r.BaseSvgSpan, (0, i.default)((0, i.default)({
                    name: "reactions-media"
                }, p), {}, {
                    children: (0, s.jsxs)("svg", {
                        viewBox: null !== (n = t) && void 0 !== n ? n : "0 0 22 22",
                        height: j,
                        width: M,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(a),
                        fill: "none",
                        children: [(0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.7876 13.5052C17.0162 13.1059 16.9367 12.6639 16.7206 12.3619C16.5017 12.056 16.1238 11.8555 15.6936 11.8894L15.6803 11.8905L15.6671 11.8921C15.5339 11.9081 15.3879 11.9263 15.2322 11.9457L15.2304 11.946C14.0846 12.0889 12.3624 12.303 10.6257 12.303C8.9895 12.303 7.32403 12.0999 6.18881 11.961L6.18672 11.9607L6.18514 11.9605C5.97491 11.9348 5.78112 11.9111 5.61079 11.8916L5.59949 11.8903L5.58814 11.8894C4.72776 11.8215 4.05312 12.7233 4.52556 13.5374C5.71277 15.6966 7.99576 17.3739 10.6561 17.3739C13.3222 17.3739 15.6035 15.6601 16.7876 13.5052ZM15.4412 13.2298C14.3947 14.8833 12.6136 16.0739 10.6561 16.0739C8.68205 16.0739 6.89318 14.8913 5.85186 13.2295L6.04174 13.2527C7.16989 13.3907 8.90466 13.603 10.6257 13.603C12.4485 13.603 14.2399 13.3796 15.3806 13.2373L15.4412 13.2298Z",
                            fill: "currentColor"
                        }), (0, s.jsx)("path", {
                            d: "M9.65 7.99998C9.65 9.10455 8.97843 9.99998 8.15 9.99998C7.32157 9.99998 6.65 9.10455 6.65 7.99998C6.65 6.89541 7.32157 5.99998 8.15 5.99998C8.97843 5.99998 9.65 6.89541 9.65 7.99998Z",
                            fill: "currentColor"
                        }), (0, s.jsx)("path", {
                            d: "M13.15 9.99998C13.9784 9.99998 14.65 9.10455 14.65 7.99998C14.65 6.89541 13.9784 5.99998 13.15 5.99998C12.3216 5.99998 11.65 6.89541 11.65 7.99998C11.65 9.10455 12.3216 9.99998 13.15 9.99998Z",
                            fill: "currentColor"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M0 11C0 5.1336 4.78363 0.349976 10.65 0.349976C16.5164 0.349976 21.3 5.1336 21.3 11C21.3 16.8651 16.5472 21.65 10.65 21.65C4.78363 21.65 0 16.8664 0 11ZM10.65 1.64998C5.5016 1.64998 1.3 5.85157 1.3 11C1.3 16.1484 5.5016 20.35 10.65 20.35C15.8267 20.35 20 16.1496 20 11C20 5.85157 15.7984 1.64998 10.65 1.64998Z",
                            fill: "currentColor"
                        })]
                    })
                }))
            };
            var i = a(n(81109)),
                o = a(n(506479)),
                r = n(401304),
                l = a(n(156720)),
                s = n(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        340888: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ReplyIcon = function(e) {
                var t, n, a = e.iconXstyle,
                    c = e.height,
                    d = e.width,
                    f = e.viewBox,
                    p = (0, o.default)(e, u);
                if (f) {
                    var h = f.x,
                        m = void 0 === h ? 0 : h,
                        g = f.y,
                        v = void 0 === g ? 0 : g,
                        x = f.width,
                        b = void 0 === x ? 0 : x,
                        C = f.height;
                    t = [m, v, b, void 0 === C ? 0 : C].join(" ")
                }
                var j = 24,
                    M = 24;
                null == c && null == d || (j = c, M = d);
                return (0, s.jsx)(r.BaseSvgSpan, (0, i.default)((0, i.default)({
                    name: "reply"
                }, p), {}, {
                    children: (0, s.jsx)("svg", {
                        viewBox: null !== (n = t) && void 0 !== n ? n : "0 0 24 24",
                        height: j,
                        width: M,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(a),
                        version: "1.1",
                        x: "0px",
                        y: "0px",
                        xmlSpace: "preserve",
                        children: (0, s.jsx)("path", {
                            fill: "currentColor",
                            d: "M10.5,4.3V9h1.3c6.5,0,9.6,4.2,10.6,8.7c-2.5-3.1-6.2-4.9-10.2-5c-0.3,0-0.5,0-0.5,0l-1.2,0.1V14v3.2l-8.7-6.5L10.5,4.3  M10.6,2.9L10.6,2.9c-0.3,0-0.5,0.1-0.7,0.2l-10.2,7.4v0.3l10.1,7.5c0.2,0.1,0.4,0.2,0.7,0.2l0,0c0.7,0,1.2-0.5,1.2-1.2V14 c0,0,0.2,0,0.4,0c1.5,0,7.4,0.5,11,7.1l0.9-0.3c0-5.7-3-13.1-12.2-13.1V4.1l0,0C11.8,3.4,11.3,2.9,10.6,2.9L10.6,2.9z"
                        })
                    })
                }))
            };
            var i = a(n(81109)),
                o = a(n(506479)),
                r = n(401304),
                l = a(n(156720)),
                s = n(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        160962: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UndoKeepInChatMediaIcon = function(e) {
                var t, n, a = e.iconXstyle,
                    c = e.height,
                    d = e.width,
                    f = e.viewBox,
                    p = (0, o.default)(e, u);
                if (f) {
                    var h = f.x,
                        m = void 0 === h ? 0 : h,
                        g = f.y,
                        v = void 0 === g ? 0 : g,
                        x = f.width,
                        b = void 0 === x ? 0 : x,
                        C = f.height;
                    t = [m, v, b, void 0 === C ? 0 : C].join(" ")
                }
                var j = 24,
                    M = 24;
                null == c && null == d || (j = c, M = d);
                return (0, s.jsx)(r.BaseSvgSpan, (0, i.default)((0, i.default)({
                    name: "undo-keep-in-chat-media"
                }, p), {}, {
                    children: (0, s.jsx)("svg", {
                        viewBox: null !== (n = t) && void 0 !== n ? n : "0 0 25 24",
                        height: j,
                        width: M,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(a),
                        fill: "none",
                        children: (0, s.jsx)("path", {
                            clipRule: "evenodd",
                            d: "m8 3h10c1.1 0 2 .9 2 2v8.8365l-1.3437-.7724v-7.78595c0-.62219-.5091-1.13125-1.1313-1.13125h-9.05c-.62219 0-1.13125.50906-1.13125 1.13125v1.28401l-1.33425-.76688.0005-.79528c0-1.1.89-2 1.99-2zm12 14.9115 3.875 2.2272.9966-1.734-22.97971-13.20787-.996634 1.73399 5.111704 2.93801-.00696 11.13117 7-3 7 3zm-1.3437-.7724-11.31255-6.5019v8.2159l5.65625-2.4661 5.6563 2.4661z",
                            fill: "currentColor",
                            fillRule: "evenodd"
                        })
                    })
                }))
            };
            var i = a(n(81109)),
                o = a(n(506479)),
                r = n(401304),
                l = a(n(156720)),
                s = n(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        318592: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UnpinnedIcon = function(e) {
                var t, n, a = e.iconXstyle,
                    c = e.height,
                    d = e.width,
                    f = e.viewBox,
                    p = (0, o.default)(e, u);
                if (f) {
                    var h = f.x,
                        m = void 0 === h ? 0 : h,
                        g = f.y,
                        v = void 0 === g ? 0 : g,
                        x = f.width,
                        b = void 0 === x ? 0 : x,
                        C = f.height;
                    n = [m, v, b, void 0 === C ? 0 : C].join(" ")
                }
                var j = 24,
                    M = 24;
                null == c && null == d || (j = c, M = d);
                return (0, s.jsx)(r.BaseSvgSpan, (0, i.default)((0, i.default)({
                    name: "unpinned"
                }, p), {}, {
                    children: (0, s.jsxs)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 24 24",
                        height: j,
                        width: M,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(a),
                        fill: "none",
                        children: [(0, s.jsx)("path", {
                            d: "M15.9984 10.6491V4.28906H16.9984V2.28906H7.64844L15.9984 10.6491Z",
                            fill: "currentColor"
                        }), (0, s.jsx)("path", {
                            d: "M16 11.7291V4.28906H17V2.28906H7V2.71906L16 11.7291Z",
                            fill: "currentColor"
                        }), (0, s.jsx)("path", {
                            d: "M21.21 19.7395L4.23 2.73945C4.03 2.53945 3.79 2.43945 3.52 2.43945C3.25 2.43945 3.01 2.53945 2.81 2.73945C2.61 2.93945 2.51 3.17945 2.5 3.44945C2.5 3.71945 2.59 3.95945 2.79 4.15945L8.01 9.36945V11.2795L6.00999 13.2795V15.2795H11.01V21.2795L12.01 22.2795L13.01 21.2795V15.2795H13.93L19.79 21.1295C19.99 21.3295 20.23 21.4295 20.5 21.4295C20.77 21.4295 21.01 21.3295 21.21 21.1295C21.41 20.9295 21.51 20.6995 21.51 20.4295C21.51 20.1595 21.41 19.9295 21.21 19.7295V19.7395Z",
                            fill: "currentColor"
                        }), (0, s.jsx)("path", {
                            d: "M21.21 19.7395L4.23 2.73945C4.03 2.53945 3.79 2.43945 3.52 2.43945C3.25 2.43945 3.01 2.53945 2.81 2.73945C2.61 2.93945 2.51 3.17945 2.5 3.44945C2.5 3.71945 2.59 3.95945 2.79 4.15945L8.01 9.36945V11.2795L6.00999 13.2795V15.2795H11.01V21.2795L12.01 22.2795L13.01 21.2795V15.2795H13.93L19.79 21.1295C19.99 21.3295 20.23 21.4295 20.5 21.4295C20.77 21.4295 21.01 21.3295 21.21 21.1295C21.41 20.9295 21.51 20.6995 21.51 20.4295C21.51 20.1595 21.41 19.9295 21.21 19.7295V19.7395Z",
                            fill: "currentColor"
                        })]
                    })
                }))
            };
            var i = a(n(81109)),
                o = a(n(506479)),
                r = n(401304),
                l = a(n(156720)),
                s = n(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        593438: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.VoiceCallFilledIcon = function(e) {
                var t, n, a = e.iconXstyle,
                    c = e.height,
                    d = e.width,
                    f = e.viewBox,
                    p = (0, o.default)(e, u);
                if (f) {
                    var h = f.x,
                        m = void 0 === h ? 0 : h,
                        g = f.y,
                        v = void 0 === g ? 0 : g,
                        x = f.width,
                        b = void 0 === x ? 0 : x,
                        C = f.height;
                    n = [m, v, b, void 0 === C ? 0 : C].join(" ")
                }
                var j = 22,
                    M = 22;
                null == c && null == d || (j = c, M = d);
                return (0, s.jsx)(r.BaseSvgSpan, (0, i.default)((0, i.default)({
                    name: "voice-call-filled"
                }, p), {}, {
                    children: (0, s.jsx)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 22 22",
                        height: j,
                        width: M,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(a),
                        fill: "none",
                        children: (0, s.jsx)("path", {
                            d: "M19.685 14.3869L16.7217 14.0486C16.0101 13.9669 15.3101 14.2119 14.8084 14.7136L12.6617 16.8602C9.36005 15.1802 6.65338 12.4852 4.97338 9.17188L7.13172 7.01355C7.63338 6.51188 7.87838 5.81188 7.79672 5.10022L7.45838 2.16022C7.31838 0.981882 6.32672 0.0952148 5.13672 0.0952148H3.11838C1.80005 0.0952148 0.703381 1.19188 0.785047 2.51022C1.40338 12.4736 9.37172 20.4302 19.3234 21.0486C20.6417 21.1302 21.7384 20.0336 21.7384 18.7152V16.6969C21.75 15.5186 20.8634 14.5269 19.685 14.3869Z",
                            fill: "currentColor"
                        })
                    })
                }))
            };
            var i = a(n(81109)),
                o = a(n(506479)),
                r = n(401304),
                l = a(n(156720)),
                s = n(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        201228: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.onEnd,
                    a = (0, l.useFlow)(u.Chats, {
                        transitions: l.FlowTransitions.DrawerLeft,
                        onEnd: n
                    }),
                    c = (0, i.default)(a, 2),
                    d = c[0],
                    f = c[1];
                if (null == f.step) return null;
                switch (f.step) {
                    case u.Chats:
                        t = (0, s.jsx)(o.default, {
                            settings: r.default,
                            onClose: function() {
                                f.pop()
                            }
                        })
                }
                return (0, s.jsx)(d, {
                    flow: f,
                    children: t
                })
            };
            var i = a(n(963038)),
                o = a(n(396974)),
                r = a(n(408590)),
                l = n(520188),
                s = n(785893),
                u = n(76672).Mirrored(["Chats"])
        },
        55458: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InfoFlow = void 0;
            var i = a(n(887757)),
                o = a(n(348926)),
                r = a(n(963038)),
                l = n(497384),
                s = a(n(347999)),
                u = a(n(704205)),
                c = n(894995),
                d = a(n(870262)),
                f = a(n(171412)),
                p = n(800469),
                h = n(896674),
                m = n(891137),
                g = n(657244),
                v = n(442801),
                x = n(128386),
                b = n(142948),
                C = n(430888),
                j = a(n(762135)),
                M = n(638178),
                y = a(n(240721)),
                _ = n(810466),
                S = n(875058),
                k = a(n(494657)),
                w = n(977627),
                P = a(n(260697)),
                T = a(n(208450)),
                I = n(180966),
                E = n(700306),
                A = a(n(411150)),
                N = n(440933),
                O = a(n(701745)),
                R = n(228995),
                L = a(n(217749)),
                D = n(882414),
                B = n(628707),
                G = a(n(706582)),
                V = a(n(73087)),
                F = a(n(240663)),
                H = n(945629),
                U = a(n(233558)),
                W = n(171738),
                Y = a(n(970468)),
                z = n(179677),
                q = n(647435),
                K = a(n(288983)),
                X = a(n(495801)),
                Z = n(897663),
                J = a(n(583362)),
                Q = n(336568),
                $ = a(n(69622)),
                ee = n(121891),
                te = n(754360),
                ne = n(324928),
                ae = a(n(393659)),
                ie = n(457292),
                oe = n(860860),
                re = n(969822),
                le = n(329387),
                se = n(942218),
                ue = n(447853),
                ce = a(n(580845)),
                de = n(548360),
                fe = n(667294),
                pe = n(520188),
                he = a(n(206827)),
                me = a(n(672900)),
                ge = n(785893),
                ve = R.InfoFlowStep,
                xe = (0, fe.forwardRef)((function(e, t) {
                    var n = e.chat,
                        a = e.initialStep,
                        R = void 0 === a ? function(e) {
                            var t;
                            if (e.isGroup) return ve.GroupInfo;
                            if (e.isBroadcast) return ve.BroadcastInfo;
                            if (e.isUser) return ve.ContactInfo;
                            if (e.isNewsletter) return ve.NewsletterInfo;
                            var n = null !== (t = e.kind) && void 0 !== t ? t : "undefined";
                            throw (0, ce.default)(`Invalid chat provided of kind ${n}`)
                        }(n) : a,
                        xe = e.showFullGroupDescription,
                        be = e.scrollToParticipantList,
                        Ce = e.profileEntryPoint,
                        je = e.onEnd,
                        Me = e.displayName,
                        ye = e.sourceGroupChat,
                        _e = (0, fe.useRef)(0),
                        Se = (0, he.default)((function(e) {
                            _e.current = e
                        })),
                        ke = (0, fe.useRef)(void 0),
                        we = (0, fe.useContext)(_.DrawerContext),
                        Pe = (0, pe.useFlow)(R, {
                            transitions: pe.FlowTransitions.DrawerRight,
                            onEnd: je
                        }),
                        Te = (0, r.default)(Pe, 2),
                        Ie = Te[0],
                        Ee = Te[1],
                        Ae = (0, fe.useState)(null),
                        Ne = (0, r.default)(Ae, 2),
                        Oe = Ne[0],
                        Re = Ne[1],
                        Le = (0, fe.useState)(void 0),
                        De = (0, r.default)(Le, 2),
                        Be = De[0],
                        Ge = De[1],
                        Ve = (0, fe.useState)(null),
                        Fe = (0, r.default)(Ve, 2),
                        He = Fe[0],
                        Ue = Fe[1],
                        We = (0, fe.useState)(null),
                        Ye = (0, r.default)(We, 2),
                        ze = Ye[0],
                        qe = Ye[1],
                        Ke = (0, fe.useState)(null),
                        Xe = (0, r.default)(Ke, 2),
                        Ze = Xe[0],
                        Je = Xe[1],
                        Qe = (0, fe.useState)(null),
                        $e = (0, r.default)(Qe, 2),
                        et = $e[0],
                        tt = $e[1],
                        nt = (0, fe.useState)(null),
                        at = (0, r.default)(nt, 2),
                        it = at[0],
                        ot = at[1];
                    (0, fe.useEffect)((function() {
                        n.isGroup ? (0, N.queryAndUpdateGroupMetadataById)(n.id, "interactive") : n.isUser && n.contact.isBusiness && (0, c.canSeeBizProfileV3)() && S.DrawerManager.setDrawerContext("right", (0, z.buildProductCatalogContext)(new Q.ProductCatalogSession, (0, M.getMaybeBizPlatformForLogging)(n.contact.id.toString()), ue.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE))
                    }), []);
                    var rt = function(e, t) {
                            Re(e), Ge(t), Ee.push(ve.ProductDetail)
                        },
                        lt = function(e, t) {
                            qe(e), Je(t), Ee.push(ve.CatalogLink)
                        },
                        st = function(e) {
                            var t = (0, z.getProductCatalogContext)(we);
                            (0, d.default)(e, n, t) && (tt(e), Ee.push(ve.Cart))
                        },
                        ut = function() {
                            B.ModalManager.open((0, ge.jsx)(C.ConfirmPopup, {
                                onOK: function() {
                                    return B.ModalManager.close()
                                },
                                okText: de.fbt._("OK", null, {
                                    hk: "4oTrfy"
                                }),
                                children: de.fbt._("Only admins can edit this group's info", null, {
                                    hk: "1a2ztg"
                                })
                            }))
                        },
                        ct = (0, me.default)(),
                        dt = function() {
                            var t = (0, o.default)(i.default.mark((function t(n) {
                                var a;
                                return i.default.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return a = n, t.next = 3, (0, u.default)((0, ie.setGroupSubject)(e.chat, a), ct).catch((0, l.catchAbort)((function() {}))).catch((function() {
                                                __LOG__(3)`name_group_modal:onSetSubject failed`
                                            }));
                                        case 3:
                                            B.ModalManager.close(), Ee.push(ve.GroupInviteLink);
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        ft = function(e) {
                            Je(e || n.contact), Ee.push(ve.Verification)
                        },
                        pt = function() {
                            (0, le.shouldShowNUX)(W.NUX.EPHEMERAL) && (0, w.isKeepInChatVisibleUIEnabled)() ? B.ModalManager.open((0, ge.jsx)(P.default, {
                                chat: n,
                                fromMe: !0,
                                onOk: function() {
                                    return Ee.push(ve.Ephemeral)
                                }
                            })): Ee.push(ve.Ephemeral)
                        },
                        ht = function() {
                            ke.current = void 0, _e.current = 0, Ee.push(ve.MediaGallery)
                        },
                        mt = function() {
                            ke.current = D.TABS.PRODUCTS, Ee.pop()
                        };
                    if (!Ee.step) return null;
                    var gt, vt = null != ye ? ye : n;
                    switch (Ee.step) {
                        case ve.GroupInfo:
                            if ((0, p.isCommunityAnnouncementGroup)(vt) && (0, v.communityTabbedInfoEnabled)()) {
                                var xt, bt = null === (xt = vt.groupMetadata) || void 0 === xt ? void 0 : xt.parentGroup;
                                gt = (0, ge.jsx)(g.CommunityFlowLoadable, {
                                    homeTheme: x.CommunityHomeTheme.TabbedInfo,
                                    initialStep: m.CommunityFlowStep.COMMUNITY_HOME,
                                    initialTab: b.CommunityInfoTabs.Announcements,
                                    jid: bt,
                                    onBack: function() {
                                        return Ee.pop()
                                    }
                                })
                            } else gt = (0, ge.jsx)(T.default, {
                                chat: vt,
                                showFullGroupDescription: xe,
                                scrollToParticipantList: be,
                                groupMetadata: vt.groupMetadata,
                                contact: vt.contact,
                                profilePicThumb: vt.contact.getProfilePicThumb(),
                                onVerification: ft,
                                onStarred: function() {
                                    return Ee.push(ve.Starred)
                                },
                                onKept: function() {
                                    return Ee.push(ve.Kept)
                                },
                                onSentForAdminReview: function() {
                                    return Ee.push(ve.SentForAdminReview)
                                },
                                onMediaGallery: ht,
                                onAdminSetting: function() {
                                    return Ee.push(ve.GroupSettings)
                                },
                                onGroupInviteLink: function() {
                                    var e;
                                    if ((0, p.isInviteGrowthLockedGroup)(n)) {
                                        var t, a = !!(null === (t = n.groupMetadata) || void 0 === t ? void 0 : t.participants.iAmAdmin());
                                        (0, E.openGrowthLockedModal)(a, !0)
                                    } else if (null === (e = n.groupMetadata) || void 0 === e ? void 0 : e.isUnnamed) {
                                        var i, o, r = de.fbt._("This group was created without a name. Give it a name to share the group link.", null, {
                                            hk: "1uQedr"
                                        });
                                        B.ModalManager.open((0, ge.jsx)(G.default, {
                                            chat: n,
                                            subtext: r,
                                            onCancel: function() {
                                                return B.ModalManager.close()
                                            },
                                            onOK: dt,
                                            editable: null === (i = n.groupMetadata) || void 0 === i ? void 0 : i.canSetSubject(),
                                            editRestrictionInfo: (null === (o = n.groupMetadata) || void 0 === o ? void 0 : o.restrict) ? ut : void 0
                                        }))
                                    } else Ee.push(ve.GroupInviteLink)
                                },
                                onPendingParticipants: function() {
                                    return Ee.push(ve.PendingParticipants)
                                },
                                onEphemeral: pt,
                                onCommunityClick: function() {
                                    var e, t = null === (e = n.groupMetadata) || void 0 === e ? void 0 : e.parentGroup;
                                    t && h.Cmd.openCommunityHome(t, !0)
                                },
                                onClose: function() {
                                    ye ? Ee.end() : Ee.pop()
                                }
                            });
                            break;
                        case ve.SentForAdminReview:
                            gt = (0, ge.jsx)(ae.default, {
                                chat: n,
                                onClose: function() {
                                    return Ee.pop()
                                }
                            });
                            break;
                        case ve.BroadcastInfo:
                            gt = (0, ge.jsx)(f.default, {
                                chat: n,
                                contact: n.contact,
                                onStarred: function() {
                                    return Ee.push(ve.Starred)
                                },
                                onMediaGallery: ht,
                                onClose: function() {
                                    return Ee.pop()
                                }
                            });
                            break;
                        case ve.ContactInfo:
                            gt = (0, ge.jsx)(j.default, {
                                contact: n.contact,
                                onVerification: ft,
                                onStarred: function() {
                                    return Ee.push(ve.Starred)
                                },
                                onKept: function() {
                                    return Ee.push(ve.Kept)
                                },
                                onMediaGallery: ht,
                                onProductCatalog: function(e, t) {
                                    var a = n.id;
                                    ne.QPL.markerStart(te.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, {
                                        annotations: {
                                            string: {
                                                EntryPoint: t
                                            }
                                        }
                                    }), (0, q.logCarouselViewMoreClick)({
                                        catalogOwnerWid: a,
                                        catalogContext: e
                                    }), Ee.push(ve.Catalog)
                                },
                                onProductDetail: rt,
                                onEphemeral: pt,
                                onClose: function() {
                                    return Ee.pop()
                                },
                                profileEntryPoint: Ce,
                                onBack: ye ? function() {
                                    Ee.push(ve.GroupInfo)
                                } : null
                            });
                            break;
                        case ve.NewsletterInfo:
                            (0, H.isNewsletterEnabled)() && (gt = (0, ge.jsx)(U.default, {
                                chat: n,
                                newsletterMetadata: n.newsletterMetadata,
                                profilePicThumb: n.contact.getProfilePicThumb(),
                                onClose: function() {
                                    return Ee.pop()
                                },
                                onDeleteNewsletter: function() {
                                    return Ee.push(ve.DeleteNewsletter)
                                },
                                onAdminCenter: function() {
                                    return Ee.push(ve.NewsletterAdminCenter)
                                }
                            }));
                            break;
                        case ve.DeleteNewsletter:
                            gt = (0, ge.jsx)(F.default, {
                                chat: n,
                                onBack: function() {
                                    return Ee.pop()
                                }
                            });
                            break;
                        case ve.NewsletterAdminCenter:
                            gt = (0, ge.jsx)(V.default, {
                                chat: n,
                                onBack: function() {
                                    return Ee.pop()
                                }
                            });
                            break;
                        case ve.ProductDetail:
                            gt = (0, ge.jsx)(K.default, {
                                chat: n,
                                collectionId: Be,
                                product: (0, s.default)(Oe, "product"),
                                onEnd: function() {
                                    Ee.end(re.DismissReason.LIFECYCLE)
                                },
                                onBack: mt,
                                refreshCarousel: !1,
                                onProductLinkClick: function(e) {
                                    Re(e), Ee.push(ve.ProductLink)
                                },
                                onProductMoreInformation: function(e) {
                                    Re(e), Ee.push(ve.ProductInfo)
                                },
                                onCartClick: st
                            });
                            break;
                        case ve.ProductCollection:
                            var Ct = n.id;
                            gt = (0, ge.jsx)(ee.CollectionContentDrawer, {
                                contact: n.contact,
                                onProductDetail: rt,
                                catalogId: Ct,
                                onBack: function() {
                                    return Ee.pop()
                                },
                                onCatalogLinkClick: lt,
                                onCartClick: st,
                                collection: (0, s.default)(He, "collection")
                            });
                            break;
                        case ve.ProductLink:
                            gt = (0, ge.jsx)(X.default, {
                                product: (0, s.default)(Oe, "product"),
                                onBack: function() {
                                    return Ee.pop()
                                }
                            });
                            break;
                        case ve.ProductInfo:
                            gt = (0, ge.jsx)(J.default, {
                                product: (0, s.default)(Oe, "product"),
                                onBack: mt
                            });
                            break;
                        case ve.CatalogLink:
                            gt = (0, ge.jsx)(Y.default, {
                                catalog: (0, s.default)(ze, "catalog"),
                                contact: (0, s.default)(Ze, "contact"),
                                onBack: function() {
                                    return Ee.pop()
                                }
                            });
                            break;
                        case ve.Cart:
                            var jt = (0, z.getProductCatalogContext)(we),
                                Mt = (0, d.default)((0, s.default)(et, "cartId"), n, jt);
                            gt = (0, s.default)(Mt, "cartFlow");
                            break;
                        case ve.Catalog:
                            gt = (0, ge.jsx)($.default, {
                                contact: n.contact,
                                onProductDetail: rt,
                                catalogId: n.id,
                                onBack: function() {
                                    return Ee.pop()
                                },
                                businessProfile: n.contact.businessProfile,
                                onCatalogLinkClick: lt,
                                onCartClick: st,
                                onCollectionSeeAll: function(e) {
                                    Ue(e), Ee.push(ve.ProductCollection)
                                }
                            });
                            break;
                        case ve.ProductList:
                            gt = (0, ge.jsx)(Z.ProductListDrawer, {
                                contact: n.contact,
                                onProductDetail: rt,
                                catalogId: n.id,
                                onBack: function() {
                                    return Ee.pop()
                                },
                                businessProfile: n.contact.businessProfile,
                                onCatalogLinkClick: lt,
                                onCartClick: st
                            });
                            break;
                        case ve.Starred:
                            gt = (0, ge.jsx)(oe.StarredDrawerLoadable, {
                                chat: n,
                                starredMsgs: n.getStarredMsgs(),
                                onClose: function() {
                                    return Ee.pop()
                                }
                            });
                            break;
                        case ve.Kept:
                            gt = (0, ge.jsx)(L.default, {
                                chat: n,
                                keptMsgs: n.getKeptMsgs(),
                                onClose: function() {
                                    return Ee.pop()
                                }
                            });
                            break;
                        case ve.GroupSettings:
                            gt = (0, ge.jsx)(O.default, {
                                chat: n,
                                groupMetadata: n.groupMetadata,
                                onClose: function() {
                                    return Ee.pop()
                                }
                            });
                            break;
                        case ve.MediaGallery:
                            gt = (0, ge.jsx)(D.MediaGalleryDrawer, {
                                chat: n,
                                onBack: function() {
                                    return Ee.pop()
                                },
                                onProductDetail: rt,
                                setProductsScrollOffset: Se,
                                initialTab: ke.current,
                                productsScrollOffset: _e.current
                            });
                            break;
                        case ve.GroupInviteLink:
                            gt = (0, ge.jsx)(I.GroupInviteLinkDrawerLoadable, {
                                chat: n,
                                groupMetadata: (0, s.default)(n.groupMetadata, "chat.groupMetadata"),
                                onBack: function() {
                                    return Ee.pop()
                                },
                                onGroupSettings: function() {
                                    return Ee.push(ve.GroupSettings)
                                }
                            });
                            break;
                        case ve.PendingParticipants:
                            gt = (0, ge.jsx)(A.default, {
                                chat: n,
                                onBack: function() {
                                    return Ee.pop()
                                }
                            });
                            break;
                        case ve.Verification:
                            gt = (0, ge.jsx)(se.VerificationDrawerLoadable, {
                                contact: (0, s.default)(Ze, "contact"),
                                onClose: function() {
                                    return Ee.pop()
                                },
                                isFirstLevel: !1
                            });
                            break;
                        case ve.DefaultEphemerality:
                            gt = (0, ge.jsx)(y.default, {
                                onClose: function() {
                                    return Ee.pop()
                                },
                                entryPoint: (0, s.default)(it, "defaultEphemeralityEntryPoint")
                            });
                            break;
                        case ve.Ephemeral:
                            var yt = n.isGroup ? ue.DISAPPEARING_MODE_ENTRY_POINT_TYPE.GROUP_CHAT_DISAPPEARING_MESSAGES_SETTING : ue.DISAPPEARING_MODE_ENTRY_POINT_TYPE.INDIVIDUAL_CHAT_DISAPPEARING_MESSAGES_SETTING;
                            gt = (0, ge.jsx)(k.default, {
                                chat: n,
                                showNux: (0, le.shouldShowNUX)(W.NUX.EPHEMERAL),
                                entryPoint: ue.EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_INFO,
                                onClose: function() {
                                    return Ee.pop()
                                },
                                onCloseNux: function() {
                                    return Ee.push(ve.Ephemeral)
                                },
                                onDDMSettingsClick: function() {
                                    return ot(yt), void Ee.push(ve.DefaultEphemerality)
                                }
                            })
                    }
                    return (0, ge.jsx)(Ie, {
                        ref: t,
                        flow: Ee,
                        displayName: Me,
                        children: gt
                    })
                }));
            t.InfoFlow = xe, xe.displayName = "InfoFlow"
        },
        293134: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.msg,
                    a = e.highlightedMsgIds,
                    O = (0, A.default)(),
                    R = (0, E.default)(),
                    L = (0, S.default)(),
                    D = (0, k.default)((function() {
                        return n.type === g.MSG_TYPE.IMAGE ? new b.UiActionWamEvent({
                            uiActionType: j.UI_ACTION_TYPE.IMAGE_OPEN,
                            uiActionPreloaded: n.mediaData.mediaStage === d.MEDIA_DATA_STAGE.RESOLVED
                        }) : null
                    })),
                    B = (0, k.default)((function() {
                        return (0, l.constructMediaMsgs)((0, u.getChat)(n), n)
                    })),
                    G = B.current.length,
                    V = (0, P.default)(G),
                    F = (0, _.useRef)(null),
                    H = (0, _.useRef)(),
                    U = (0, _.useRef)(),
                    W = (0, _.useRef)(null),
                    Y = (0, _.useRef)(null),
                    z = (0, _.useRef)(null),
                    q = (0, _.useState)(n),
                    K = (0, i.default)(q, 2),
                    X = K[0],
                    Z = K[1],
                    J = (0, _.useState)(!1),
                    Q = (0, i.default)(J, 2),
                    $ = Q[0],
                    ee = Q[1],
                    te = (0, _.useState)(!0),
                    ne = (0, i.default)(te, 2),
                    ae = ne[0],
                    ie = ne[1],
                    oe = (0, P.default)(X),
                    re = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = Y.current,
                            n = z.current,
                            a = W.current;
                        if (t && n && a) {
                            var i = 0;
                            a instanceof HTMLElement && (i = a.clientWidth / 2 - t.clientWidth / 2), (0, C.default)(n, "stop");
                            var o = 0;
                            e && (o = 300), (0, C.default)(a, "scroll", {
                                duration: o,
                                container: n,
                                offset: i,
                                axis: "x",
                                easing: [.1, .82, .25, 1]
                            })
                        }
                    },
                    le = function(e) {
                        if (!e) return !0;
                        var t = e.isViewOnce,
                            n = (0, m.getIsStickerMsg)(e);
                        return !t && !n
                    };
                (0, _.useEffect)((function() {
                    var e;
                    re(), le(n) && (e = Y.current) && (0, C.default)(e, {
                        opacity: [1, 0],
                        translateY: ["0%", "100%"]
                    }, {
                        duration: 300,
                        delay: 100,
                        easing: [.1, .82, .25, 1]
                    }).then((function() {
                        O.aborted || ie(!1)
                    }))
                }), []), (0, _.useEffect)((function() {
                    G > (null != V ? V : 0) && re()
                }));
                var se = function(e) {
                        R((function() {
                            B.current.loadMoreAroundIfNeeded(e)
                        })), Z(e)
                    },
                    ue = function(e) {
                        if (e && e.stopPropagation(), !$) {
                            var t = X;
                            if (t) {
                                var a;
                                (a = B.current.getAfter(t)) ? se(a): B.current.hasMediaAfter && (H.current || (H.current = B.current.queryMedia({
                                    chat: (0, u.getChat)(n),
                                    msg: n,
                                    direction: "after"
                                }).then((function(e) {
                                    O.aborted || "number" == typeof e.length && e.length > 0 && X === n && ue()
                                })).catch((function() {
                                    __LOG__(3)`query media msgs error: `
                                })).finally((function() {
                                    H.current = null
                                }))))
                            }
                        }
                    },
                    ce = function(e) {
                        if (e && e.stopPropagation(), !$) {
                            var t = X;
                            if (t) {
                                var a;
                                (a = B.current.getBefore(t)) ? se(a): B.current.hasMediaBefore && (U.current || (U.current = B.current.queryMedia({
                                    chat: (0, u.getChat)(n),
                                    msg: n,
                                    direction: "before"
                                }).then((function(e) {
                                    O.aborted || "number" == typeof e.length && e.length > 0 && X === n && ce()
                                })).catch((function() {
                                    __LOG__(3)`query media msgs error: `
                                })).finally((function() {
                                    U.current = null
                                }))))
                            }
                        }
                    },
                    de = null;
                n.type === g.MSG_TYPE.IMAGE && (de = function() {
                    var e, t = D.current;
                    t && (Object.assign(t, (0, M.getGroupCountMetricsFromChatWid)(null === (e = (0, u.getChat)(n)) || void 0 === e ? void 0 : e.id)), t.markUiActionT(), t.commit(), D.current = null);
                    (0, y.logUiActionShadowPrivateStatsTestEvents)()
                });
                var fe = function() {
                        h.ModalManager.closeMedia()
                    },
                    pe = (0, T.default)((function() {
                        Z(null), fe()
                    })),
                    he = (null == X ? void 0 : X.isViewOnce) || X && (0, m.getIsStickerMsg)(X);
                (0, w.useListener)(he ? X : null, "revoked", pe);
                var me = he ? null : B.current;
                (0, w.useListener)(me, "remove", (function(e, t, a) {
                    var i = B.current,
                        o = X;
                    if (i.includes(n) || null != o && null != o.id && o.id.toString() !== e.id.toString()) L();
                    else {
                        var l = a.index;
                        0 === i.length ? fe() : i.length === l ? se((0, r.default)(i.at(l - 1), "mediaMsgs.at(index - 1)")) : se((0, r.default)(i.at(l), "mediaMsgs.at(index)"))
                    }
                })), (0, w.useListener)(me, "reset", (function() {
                    fe()
                })), (0, w.useListener)(me, "query_media_after", (function() {
                    L()
                })), (0, w.useListener)(me, "query_media_before", (function() {
                    var e = z.current;
                    e && (F.current = e.scrollWidth, e instanceof HTMLElement && L())
                })), (0, w.useListener)(window, "keydown", (function(e) {
                    if (!e.defaultPrevented) {
                        var t = c.default.isRTL();
                        e.keyCode === o.default.LEFT ? t ? ue() : ce() : e.keyCode === o.default.RIGHT && (t ? ce() : ue())
                    }
                })), (0, _.useEffect)((function() {
                    R((function() {
                        X && B.current.loadMoreAroundIfNeeded(X)
                    }))
                }), [X, B, R]), (0, _.useEffect)((function() {
                    if (oe !== X) re(!0);
                    else {
                        var e = z.current;
                        if (!e || null == F.current || 0 === F.current) return;
                        e instanceof HTMLElement && (e.scrollLeft += e.scrollWidth - F.current), F.current = null
                    }
                }), [X, oe]);
                var ge = (0, I.default)((function(e, t, n) {
                    if (0 !== t.length && null != n) {
                        if (t.hasMediaBefore && n < e.clientWidth) {
                            var a = (0, r.default)(t.head(), "mediaMsgs.head()");
                            R((function() {
                                t.queryMedia({
                                    chat: (0, u.getChat)(a),
                                    msg: a
                                }), L()
                            }))
                        }
                        if (t.hasMediaAfter && n + s.SCROLL_FUDGE > e.scrollWidth - 2 * e.clientWidth) {
                            var i = (0, r.default)(t.last(), "mediaMsgs.last()");
                            R((function() {
                                t.queryMedia({
                                    chat: (0, u.getChat)(i),
                                    msg: i,
                                    direction: "after"
                                }), L()
                            }))
                        }
                    }
                }), 100);
                if (!X) return null;
                if ((0, u.getChat)(n).isSuspendedOrTerminated() && (0, p.isGroupSuspendV2Enabled)()) return void(0, v.openSuspendedGroupMediaDownloadFailureModal)();
                var ve, xe = B.current,
                    be = xe.last(),
                    Ce = xe.hasMediaAfter || X !== be ? ue : null,
                    je = xe.head();
                return xe.hasMediaBefore || X !== je ? ce : null, ve = xe.hasMediaBefore || X !== je ? ce : null, (0, N.jsxs)("div", {
                    className: $ ? "img-zoomed-in" : null,
                    children: [le(X) && (0, N.jsx)(x.default, {
                        activeMsg: X,
                        mediaMsgs: B.current,
                        highlightedMsgIds: e.highlightedMsgIds,
                        onSelectThumb: se,
                        onSetActiveThumb: function(e) {
                            W.current = e
                        },
                        onScroll: function(e) {
                            ge(e.currentTarget, B.current, e.currentTarget.scrollLeft)
                        },
                        setRefThumbsContainer: function(e) {
                            Y.current = e
                        },
                        setRefThumbs: function(e) {
                            z.current = e
                        }
                    }), (0, N.jsx)(f.default, {
                        msg: X,
                        mediaData: X.mediaData,
                        onBack: fe,
                        onExitAnimation: function() {
                            var e;
                            le(n) && (e = Y.current) && (0, C.default)(e, {
                                opacity: [0, 1],
                                translateY: ["100%", "0%"]
                            }, {
                                duration: 300,
                                easing: [.1, .82, .25, 1]
                            })
                        },
                        onNext: Ce,
                        onPrev: ve,
                        onImgZoomIn: function(e) {
                            ee(e)
                        },
                        getZoomNode: e.getZoomNode,
                        startTime: e.startTime,
                        isAnimatingIn: ae,
                        onImageLoad: de,
                        msgIndexInAlbum: function() {
                            var e = -1;
                            if (!a || !X) return e;
                            var t = X.id.toString();
                            if (!a.has(t)) return e;
                            var n = 0;
                            return a.forEach((function(a) {
                                a === t && (e = n), n++
                            })), e
                        }(),
                        albumSize: (null === (t = e.highlightedMsgIds) || void 0 === t ? void 0 : t.size) || 0
                    })]
                })
            };
            var i = a(n(963038)),
                o = a(n(331257)),
                r = a(n(347999)),
                l = n(169145),
                s = n(295769),
                u = n(530236),
                c = a(n(758927)),
                d = n(966454),
                f = a(n(900608)),
                p = n(518005),
                h = n(628707),
                m = n(763249),
                g = n(154553),
                v = n(892356),
                x = a(n(9128)),
                b = n(235387),
                C = a(n(931771)),
                j = n(447853),
                M = n(964724),
                y = n(403056),
                _ = n(667294),
                S = a(n(61407)),
                k = a(n(279781)),
                w = n(494092),
                P = a(n(691384)),
                T = a(n(206827)),
                I = a(n(27634)),
                E = a(n(682013)),
                A = a(n(672900)),
                N = n(785893)
        },
        418122: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.requireBundle = t.SendContactsModalLoadable = void 0;
            var i = a(n(887757)),
                o = a(n(348926)),
                r = a(n(20852)),
                l = a(n(463113)),
                s = a(n(71922)),
                u = a(n(679314)),
                c = n(548360),
                d = n(785893),
                f = (0, s.default)((0, o.default)(i.default.mark((function e() {
                    var t;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Promise.all([n.e(4002), n.e(4281), n.e(9167), n.e(275)]).then(n.bind(n, 568907));
                            case 2:
                                return t = e.sent, e.abrupt("return", (0, l.default)(t));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), "SendContactsModal");
            t.requireBundle = f;
            var p = (0, r.default)({
                loader: f,
                loading: function(e) {
                    return (0, d.jsx)(u.default, {
                        title: c.fbt._("Send contacts", null, {
                            hk: "9ZMyz"
                        }),
                        error: Boolean(e.error)
                    })
                }
            });
            t.SendContactsModalLoadable = p
        },
        396974: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(963038)),
                o = n(712111),
                r = n(638828),
                l = n(202908),
                s = n(124990),
                u = n(896674),
                c = n(442801),
                d = n(515918),
                f = a(n(237120)),
                p = a(n(686866)),
                h = n(58985),
                m = n(544607),
                g = n(577407),
                v = a(n(979163)),
                x = a(n(81724)),
                b = n(704250),
                C = a(n(758927)),
                j = n(518005),
                M = a(n(964851)),
                y = n(558288),
                _ = n(548360),
                S = n(667294),
                k = a(n(156720)),
                w = a(n(279781)),
                P = n(494092),
                T = n(853548),
                I = n(785893),
                E = {
                    borderBottom: "qmxv8cnq",
                    backgroundColor: "s9raicp8"
                },
                A = {
                    paddingTop: "n1yiu2zv",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "eb4rp10x",
                    paddingStart: "gx1rr48f"
                },
                N = {
                    paddingTop: "n1yiu2zv",
                    paddingEnd: "h5uqwbaf",
                    paddingBottom: "eb4rp10x",
                    paddingStart: "kjjye8e3",
                    textAlign: "ljrqcn24"
                },
                O = {
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex"
                };

            function R(e, t) {
                var n = e.onClose,
                    a = function() {
                        return l.ChatCollection.filter((function(e) {
                            return e.archive && e.shouldAppearInList
                        }))
                    },
                    R = (0, T.useModelValues)(e.settings, ["showArchiveV2", "archive"]),
                    L = (0, w.default)((function() {
                        return new v.default
                    })),
                    D = (0, w.default)((function() {
                        return new M.default([], (function(e) {
                            return e.id.toString()
                        }))
                    })),
                    B = (0, S.useRef)(null),
                    G = (0, S.useState)(a),
                    V = (0, i.default)(G, 2),
                    F = V[0],
                    H = V[1],
                    U = function() {
                        return (0, j.archiveV2Supported)() && R.showArchiveV2
                    };
                (0, P.useListener)(l.ChatCollection, [U() ? "sort" : null, "change:archive", "add", "remove"].filter(Boolean), (function() {
                    H(a())
                }));
                var W = function(e) {
                    D.current.setVal(e, !1)
                };
                (0, P.useListener)(u.Cmd, "close_chat", (function(e) {
                    e === D.current.getVal() && D.current.unset()
                })), (0, P.useListener)(u.Cmd, "update_chatlist_selection", W);
                (0, S.useEffect)((function() {
                    if (U()) {
                        var e = a(),
                            t = new Map;
                        e.forEach((function(e) {
                            e.archiveAtMentionViewedInDrawer = !0, t.set(e.id.toString(), !0)
                        })), (0, o.updateChatArchiveDrawer)(t)
                    }
                    B.current && x.default.focus(B.current);
                    var n = l.ChatCollection.toArray().find((function(e) {
                        return e.active && e.archive
                    }));
                    n && W(n)
                }), []);
                var Y, z, q, K = function() {
                        n()
                    },
                    X = function(e, t) {
                        u.Cmd.openChatFromUnread(t).then((function(e) {
                            e && d.ComposeBoxActions.focus(t)
                        })), (0, j.archiveV2Supported)() && R.archive.enabled || K()
                    };
                if (D.current.init(F, !0), q = l.ChatCollection.some((function(e) {
                        return e.archive
                    })), (0, j.archiveV2Supported)() && q) {
                    var Z = _.fbt._("These chats stay archived when new messages are received. To change this experience, go to Settings > Chats on your phone.", null, {
                            hk: "2GTpJ"
                        }),
                        J = _.fbt._("These chats are unarchived when new messages are received. To change this experience, go to Settings > Chats on your phone.", null, {
                            hk: "2QaWm0"
                        });
                    Y = (0, I.jsx)("div", {
                        className: (0, k.default)(E),
                        children: (0, I.jsx)("div", {
                            className: (0, k.default)(A),
                            children: (0, I.jsx)("div", {
                                className: (0, k.default)(N),
                                children: (0, I.jsx)(y.WDSTextMuted, {
                                    as: "p",
                                    children: R.showArchiveV2 ? Z : J
                                })
                            })
                        })
                    })
                }
                z = F.length > 0 ? (0, I.jsxs)(b.HotKeys, {
                    ref: B,
                    handlers: {
                        down: function(e) {
                            e.preventDefault(), e.stopPropagation(), D.current.setNext(!0)
                        },
                        up: function(e) {
                            e.preventDefault(), e.stopPropagation(), D.current.setPrev(!0)
                        }
                    },
                    children: [Y, (0, I.jsx)(g.FlatList, {
                        className: (0, k.default)(O),
                        data: F.map((function(e) {
                            return {
                                itemKey: e.id.toString(),
                                chat: e,
                                height: (0, c.shouldShowNewSubgroupIdentity)(e.groupMetadata) ? s.SUBGROUP_V2_CHAT_CELL_HEIGHT : void 0
                            }
                        })),
                        flatListController: L.current,
                        direction: "vertical",
                        renderItem: function(e) {
                            return (0, I.jsx)(r.Chat, {
                                chat: e.chat,
                                mode: r.Mode.LAST,
                                active: D.current,
                                onClick: X,
                                hideArchivedIcon: (0, j.archiveV2Supported)() && R.archive.enabled,
                                hideMuteIcon: U(),
                                hideMuteOption: U(),
                                ephemeralIcon: "chat-list",
                                showCommunityInfo: !0
                            })
                        }
                    })]
                }) : (0, I.jsx)(m.Archived, {});
                var Q = (0, j.archiveV2Supported)() && R.archive.enabled ? _.fbt._("Archived", null, {
                    hk: "3HjzQg"
                }) : C.default.t(136);
                return (0, I.jsxs)(f.default, {
                    ref: t,
                    theme: "archived",
                    children: [(0, I.jsx)(h.DrawerHeader, {
                        title: Q,
                        onBack: K,
                        type: h.DRAWER_HEADER_TYPE.LARGE,
                        menu: null
                    }), (0, I.jsx)(p.default, {
                        flatListControllers: [L.current],
                        children: z
                    })]
                })
            }
            var L = (0, S.forwardRef)(R);
            t.default = L
        },
        217749: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(887757)),
                o = a(n(348926)),
                r = a(n(963038)),
                l = n(665912),
                s = n(886e3),
                u = n(241941),
                c = n(544607),
                d = n(322818),
                f = a(n(223324)),
                p = n(447853),
                h = n(548360),
                m = n(667294),
                g = a(n(156720)),
                v = n(785893),
                x = {
                    paddingTop: "s7fqlky6",
                    paddingEnd: "iffbo4e8",
                    paddingBottom: "q1tx93la",
                    paddingStart: "e8k79tju",
                    fontSize: "ovllcyds",
                    lineHeight: "durt31hz",
                    color: "amgz1mtg"
                };

            function b(e, t) {
                var n = e.keptMsgs,
                    a = e.onClose,
                    b = e.chat,
                    C = (0, d.useKicNux)(b),
                    j = (0, r.default)(C, 2),
                    M = j[0],
                    y = j[1];
                (0, m.useEffect)((function() {
                    M && y(p.TRIGGER_TYPE.KEPT_FOLDER_TAP_FIRST_TIME)
                }), []), (0, m.useEffect)((function() {
                    (0, o.default)(i.default.mark((function e() {
                        var t, a, o;
                        return i.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = new s.DisappearingMessageKeepInChatWamEvent({
                                            kicActionName: p.KIC_ACTION_NAME_TYPE.VIEW_KEPT_MESSAGES,
                                            kicEntryPoint: p.KIC_ENTRY_POINT_TYPE.CHAT_INFO,
                                            messagesInFolder: n.length,
                                            isAGroup: null == b ? void 0 : b.isGroup
                                        }), (null == b ? void 0 : b.isGroup) && t.set({
                                            isAdmin: null == b || null === (a = b.groupMetadata) || void 0 === a ? void 0 : a.participants.iAmAdmin()
                                        }), !b) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 5, (0, l.getChatThreadID)(null == b ? void 0 : b.id.toJid());
                                case 5:
                                    null != (o = e.sent) && t.set({
                                        threadId: o
                                    });
                                case 7:
                                    t.commit();
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), []);
                var _, S = h.fbt._("Kept messages", null, {
                        hk: "iGco8"
                    }),
                    k = (0, v.jsx)(c.KeptMsgs, {}),
                    w = null;
                (null == b ? void 0 : b.isGroup) ? w = (null === (_ = b.groupMetadata) || void 0 === _ ? void 0 : _.restrict) ? (0, v.jsx)("div", {
                    className: (0, g.default)(x),
                    children: h.fbt._("These messages are kept in the chat for everyone. Only admins can keep or unkeep messages in this group.", null, {
                        hk: "2P8fIj"
                    })
                }) : (0, v.jsx)("div", {
                    className: (0, g.default)(x),
                    children: h.fbt._("These messages are kept in the chat for everyone. Everyone can keep or unkeep a message. Group admins can limit this.", null, {
                        hk: "3VYBCh"
                    })
                }): w = (0, v.jsx)("div", {
                    className: (0, g.default)(x),
                    children: h.fbt._("These messages are kept in the chat for everyone. Everyone can keep or unkeep a message.", null, {
                        hk: "3sFKOP"
                    })
                });
                return (0, v.jsx)(f.default, {
                    testid: "kept-drawer",
                    ref: t,
                    msgCollection: n,
                    onClose: a,
                    chat: b,
                    title: S,
                    emptyListText: k,
                    descriptionSection: w,
                    displayType: u.DISPLAY_TYPE.KEPT_MSGS
                })
            }
            var C = (0, m.forwardRef)(b);
            t.default = C
        },
        882414: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TABS = t.MediaGalleryDrawer = void 0;
            var i = a(n(963038)),
                o = a(n(252628)),
                r = n(341480),
                l = a(n(203307)),
                s = n(796520),
                u = a(n(968917)),
                c = a(n(237120)),
                d = a(n(686866)),
                f = n(58985),
                p = a(n(758927)),
                h = a(n(711050)),
                m = a(n(131157)),
                g = n(518005),
                v = n(164965),
                x = a(n(833677)),
                b = a(n(462487)),
                C = a(n(682763)),
                j = n(776097),
                M = a(n(904847)),
                y = n(548360),
                _ = n(667294),
                S = a(n(156720)),
                k = a(n(269959)),
                w = a(n(279781)),
                P = n(785893),
                T = {
                    display: "p357zi0d",
                    flexGrow: "ggj6brxn",
                    flexShrink: "m0h2a7mj",
                    flexBasis: "rjo8vgbg",
                    flexDirection: "f8m0rgwh",
                    height: "ppled2lx"
                },
                I = {
                    position: "lhggkp7q",
                    top: "qq0sjtgm",
                    start: "tkdu00h0",
                    width: "ln8gz9je",
                    height: "ppled2lx"
                },
                E = n(76672)({
                    MEDIA: "media",
                    DOCS: "docs",
                    LINKS: "links",
                    PRODUCTS: "products"
                });
            t.TABS = E;
            var A = function(e) {
                var t = e.selected,
                    n = e.onSearch;
                switch (t) {
                    case E.MEDIA:
                    case E.LINKS:
                    case E.DOCS:
                        return (0, P.jsx)(s.ListSearch, {
                            onSearch: n,
                            loading: !1,
                            listFilterEnabled: !1,
                            chatlistFilterEnabled: !1,
                            mode: l.default.Chatlist,
                            placeholder: y.fbt._("Search", null, {
                                hk: "418EDN"
                            })
                        });
                    default:
                        return null
                }
            };
            var N = (0, _.forwardRef)((function(e, t) {
                var n = e.chat,
                    a = e.onProductDetail,
                    l = e.setProductsScrollOffset,
                    s = e.initialTab,
                    N = void 0 === s ? E.MEDIA : s,
                    O = e.productsScrollOffset,
                    R = void 0 === O ? 0 : O,
                    L = (0, _.useState)(N),
                    D = (0, i.default)(L, 2),
                    B = D[0],
                    G = D[1],
                    V = (0, _.useState)(null),
                    F = (0, i.default)(V, 2),
                    H = F[0],
                    U = F[1],
                    W = (0, _.useState)(!1),
                    Y = (0, i.default)(W, 2),
                    z = Y[0],
                    q = Y[1],
                    K = (0, k.default)(),
                    X = (0, i.default)(K, 2),
                    Z = X[0],
                    J = X[1],
                    Q = (0, g.mediaLinksDocsFilteringEnabled)(),
                    $ = (0, w.default)((function() {
                        return new x.default([], (function(e) {
                            return e.id.toString()
                        }))
                    })),
                    ee = function() {
                        z && ($.current.unsetAll(), q(!1))
                    },
                    te = function(e, t) {
                        z || q(!0), $.current.setVal(e, t), 0 === $.current.getSelected().length && ee()
                    },
                    ne = (0, _.useCallback)((function(e) {
                        var t = E.cast(e);
                        if (null != t) {
                            var n = (0, o.default)(E).indexOf(B),
                                a = (0, o.default)(E).indexOf(t);
                            n !== a && $.current.unsetAll(), G(t), U(a > n ? "right" : "left"), q(!1)
                        }
                    }), [$, B]),
                    ae = (0, _.useMemo)((function() {
                        var e = [{
                            id: E.MEDIA,
                            title: p.default.t(416)
                        }, {
                            id: E.DOCS,
                            title: p.default.t(243)
                        }, {
                            id: E.LINKS,
                            title: p.default.t(394)
                        }];
                        return e.push({
                            id: E.PRODUCTS,
                            title: y.fbt._("Products", null, {
                                hk: "3Ky71N"
                            })
                        }), (0, P.jsx)(C.default, {
                            tabConfigs: e,
                            selectedId: B,
                            onSelect: ne,
                            testIdPrefix: "gallery-tab"
                        })
                    }), [B, ne]),
                    ie = function(e) {
                        switch (e) {
                            case E.MEDIA:
                                return v.MultiSelectBarEntryPoint.MEDIA;
                            case E.DOCS:
                                return v.MultiSelectBarEntryPoint.DOCS;
                            case E.LINKS:
                                return v.MultiSelectBarEntryPoint.LINKS;
                            case E.PRODUCTS:
                                return v.MultiSelectBarEntryPoint.PRODUCTS
                        }
                    }(B),
                    oe = function() {
                        var e;
                        switch (B) {
                            case E.MEDIA:
                                e = (0, P.jsx)(m.default, {
                                    chat: n,
                                    mediaMsgs: n.getMediaMsgs(),
                                    selectable: z,
                                    onMessageSelect: te,
                                    selectedMessages: $.current,
                                    fullCollection: !0,
                                    isFilterEnabled: Q,
                                    filterText: Z
                                });
                                break;
                            case E.LINKS:
                                e = (0, P.jsx)(h.default, {
                                    chat: n,
                                    linkMsgs: n.getLinkMsgs(),
                                    selectable: z,
                                    onMessageSelect: te,
                                    selectedMessages: $.current,
                                    isFilterEnabled: Q,
                                    filterText: Z
                                });
                                break;
                            case E.DOCS:
                                e = (0, P.jsx)(u.default, {
                                    chat: n,
                                    docMsgs: n.getDocMsgs(),
                                    selectable: z,
                                    onMessageSelect: te,
                                    selectedMessages: $.current,
                                    isFilterEnabled: Q,
                                    filterText: Z
                                });
                                break;
                            case E.PRODUCTS:
                                e = (0, P.jsx)(b.default, {
                                    chat: n,
                                    productMsgs: n.getProductMsgs(),
                                    selectable: z,
                                    onMessageSelect: te,
                                    selectedMessages: $.current,
                                    onProductDetail: a,
                                    setScrollOffset: l,
                                    scrollOffset: R
                                })
                        }
                        return e
                    }(),
                    re = [E.MEDIA, E.DOCS].includes(B),
                    le = z ? (0, P.jsx)(j.UIE, {
                        displayName: "MediaMultiSelect",
                        escapable: !0,
                        requestDismiss: ee,
                        children: (0, P.jsx)(v.MultiSelectBar, {
                            chat: n,
                            noSortOnForward: !0,
                            theme: "mediaGallery",
                            toastPosition: r.ToastPosition.RIGHT,
                            downloadButton: re,
                            selectedMessages: $.current,
                            onCancel: ee,
                            entryPoint: ie
                        })
                    }) : null,
                    se = "right" === H ? "slide-forward" : "slide-back";
                return (0, P.jsxs)(c.default, {
                    ref: t,
                    theme: "gallery",
                    testid: "media-gallery-drawer",
                    children: [(0, P.jsx)(f.DrawerHeader, {
                        title: " ",
                        onBack: e.onBack,
                        rtlFixIfOnDarwin: !0,
                        type: f.DRAWER_HEADER_TYPE.MULTI_MEDIA_GALLERY
                    }), le, ae, Q ? (0, P.jsx)(A, {
                        selected: B,
                        onSearch: J
                    }) : null, (0, P.jsx)(d.default, {
                        "data-list-scroll-container": !0,
                        children: (0, P.jsx)(M.default, {
                            transitionName: se,
                            className: (0, S.default)(T),
                            children: (0, P.jsx)("div", {
                                className: (0, S.default)(I),
                                children: (0, P.jsx)("div", {
                                    className: (0, S.default)(T),
                                    children: oe
                                })
                            }, B)
                        })
                    })]
                })
            }));
            t.MediaGalleryDrawer = N, N.displayName = "MediaGalleryDrawer"
        },
        116769: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = (0, c.useState)(!1),
                    h = (0, i.default)(a, 2),
                    m = h[0],
                    g = h[1];
                e.isBusiness ? (t = u.fbt._("This message will be forwarded to WhatsApp. This business will not be notified.", null, {
                    hk: "1N7YEc"
                }), n = u.fbt._("Block business", null, {
                    hk: "3hFIF3"
                })) : (t = u.fbt._("This message will be forwarded to WhatsApp. This contact will not be notified.", null, {
                    hk: "2qS1tP"
                }), n = u.fbt._("Block contact", null, {
                    hk: "41X9mL"
                }));
                return (0, f.jsxs)(r.ConfirmPopup, {
                    onOK: function() {
                        e.onReport(m)
                    },
                    okText: u.fbt._("Report", null, {
                        hk: "18ssTb"
                    }),
                    onCancel: e.onCancel,
                    title: e.title,
                    children: [(0, f.jsxs)("div", {
                        className: (0, d.default)(p.section, s.uiMargin.top12, s.uiMargin.end0, p.border),
                        children: [(0, f.jsx)(o.CheckBox, {
                            onChange: function() {
                                return g((function(e) {
                                    return !e
                                }))
                            },
                            checked: m,
                            id: "menu-icon-report-spam"
                        }), (0, f.jsx)(l.TextLabel, {
                            xstyle: p.checkboxLabel,
                            htmlFor: "menu-icon-report-spam",
                            children: n
                        })]
                    }), (0, f.jsx)(l.TextParagraph, {
                        xstyle: p.section,
                        color: "muted",
                        children: t
                    })]
                })
            };
            var i = a(n(963038)),
                o = n(877407),
                r = n(430888),
                l = n(558288),
                s = n(71867),
                u = n(548360),
                c = n(667294),
                d = a(n(156720)),
                f = n(785893),
                p = {
                    section: {
                        marginBottom: "t4zgqcuo"
                    },
                    checkboxLabel: {
                        marginStart: "fooq7fky"
                    },
                    border: {
                        paddingBottom: "dledyozo",
                        borderBottom: "j4zbmt6h"
                    }
                }
        },
        546637: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = a.ChatCollection.getActive();
                (0, d.useEffect)((function() {
                    e.entryPoint && (0, o.logPnhRequestRevealActionHelper)(u.PNH_CHAT_TYPE_TYPE.CTWA, u.PNH_MESSAGE_CHAT_PARTY.BIZ, u.PNH_ACTION_TYPE.REQUEST_DIALOG_APPEAR, e.entryPoint)
                }), [e.entryPoint]);
                var n = c.fbt._("Request phone number?", null, {
                        hk: "1BOtdo"
                    }),
                    p = c.fbt._("This person's phone number is not shared in this chat. You can request for their phone number if you'd like to save them to your contacts.", null, {
                        hk: "3SHZ6I"
                    }),
                    h = c.fbt._("Send Request", null, {
                        hk: "4tsuDY"
                    }),
                    m = c.fbt._("Cancel", null, {
                        hk: "37A1CY"
                    });
                return (0, f.jsx)(i.ConfirmPopup, {
                    onOK: function() {
                        t && ((0, l.sendRequestPhoneNumber)((0, s.unproxy)(t)), null != e.entryPoint && (0, o.logPnhRequestRevealActionHelper)(u.PNH_CHAT_TYPE_TYPE.CTWA, u.PNH_MESSAGE_CHAT_PARTY.BIZ, u.PNH_ACTION_TYPE.SEND_REQUEST, e.entryPoint)), r.ModalManager.close()
                    },
                    okText: h,
                    onCancel: function() {
                        return r.ModalManager.close()
                    },
                    cancelText: m,
                    title: n,
                    children: p
                })
            };
            var a = n(202908),
                i = n(430888),
                o = n(161721),
                r = n(628707),
                l = n(149968),
                s = n(378776),
                u = n(447853),
                c = n(548360),
                d = n(667294),
                f = n(785893)
        },
        962617: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, l.useState)(),
                    n = (0, i.default)(t, 2)[1],
                    a = (0, l.useState)(),
                    f = (0, i.default)(a, 2)[1];
                if ((0, s.useListener)(o.Conn, "change:isVoipInitialized", (function() {
                        n(o.Conn.isVoipInitialized)
                    })), (0, s.useListener)(c.CallCollection, "change:activeCall", (function() {
                        f(null === c.CallCollection || void 0 === c.CallCollection ? void 0 : c.CallCollection.activeCall)
                    })), e) return {
                    isVoiceCallEnabled: Boolean(null == u ? void 0 : u.isVoiceCallEnabledForContactOrChat(e)),
                    isVideoCallEnabled: Boolean(null == u ? void 0 : u.isVideoCallEnabledForContact(e)),
                    canStartVoiceCall: Boolean(!(0, r.getIsMe)(e) && (null == u ? void 0 : u.canStartCall(e))),
                    canStartVideoCall: Boolean(!(0, r.getIsMe)(e) && (null == u ? void 0 : u.canStartVideoCall(e))),
                    startVoiceCall: function() {
                        var t = e.id.isLid() ? e.phoneNumber : e.id;
                        (null == u ? void 0 : u.checkIfCanStartCall({
                            contact: e,
                            isVideo: !1
                        })) && t && (null === d.Voip || void 0 === d.Voip || d.Voip.callStart(t, !1))
                    },
                    startVideoCall: function() {
                        var t = e.id.isLid() ? e.phoneNumber : e.id;
                        (null == u ? void 0 : u.checkIfCanStartCall({
                            contact: e,
                            isVideo: !0
                        })) && t && (null === d.Voip || void 0 === d.Voip || d.Voip.callStart(t, !0))
                    }
                };
                return {
                    isVoiceCallEnabled: !1,
                    isVideoCallEnabled: !1,
                    canStartVoiceCall: !1,
                    canStartVideoCall: !1,
                    startVoiceCall: function() {},
                    startVideoCall: function() {}
                }
            };
            var i = a(n(963038)),
                o = n(500204),
                r = n(65001),
                l = n(667294),
                s = n(494092),
                u = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                        } a.default = e, n && n.set(e, a);
                    return a
                }(n(394785)),
                c = n(970280),
                d = n(764582);

            function f(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (f = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        171412: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(602922)),
                o = a(n(598067)),
                r = (a(n(167740)), n(988456)),
                l = a(n(636244)),
                s = n(87330),
                u = n(896674),
                c = n(356953),
                d = a(n(237120)),
                f = a(n(686866)),
                p = n(519973),
                h = n(58985),
                m = a(n(863250)),
                g = n(564250),
                v = a(n(828083)),
                x = n(212390),
                b = a(n(979163)),
                C = a(n(758927)),
                j = n(518005),
                M = n(628707),
                y = n(469073),
                _ = (n(136896), n(378776)),
                S = (n(401304), n(558288)),
                k = n(447853),
                w = n(548360),
                P = n(667294),
                T = a(n(156720)),
                I = a(n(61407)),
                E = a(n(279781)),
                A = n(494092),
                N = n(853548),
                O = a(n(498617)),
                R = n(785893),
                L = {
                    flexGrow: "tvf2evcx",
                    flexShrink: "oq44ahr5",
                    flexBasis: "lb5m6g5c",
                    paddingBottom: "s9fl9ege"
                };

            function D(e, t) {
                var n, a, P = e.onClose,
                    D = e.onMediaGallery,
                    B = (0, I.default)(),
                    G = (0, O.default)(),
                    V = (0, E.default)((function() {
                        return new b.default
                    })),
                    F = (0, N.useModelValues)(e.chat, ["id", "groupMetadata"]);
                (0, A.useListener)(null === (n = F.groupMetadata) || void 0 === n ? void 0 : n.participants, ["add", "remove", "sort", "reset"], B);
                var H = null;
                D && (H = (0, R.jsx)(l.default, {
                    onMediaGallery: D,
                    chat: (0, _.unproxy)(F)
                }));
                var U, W = (0, R.jsx)(r.ChatInfoDrawerButtonsSection, {
                    children: (0, R.jsx)(p.DrawerButton, {
                        testid: "li-delete-broadcast",
                        icon: (0, R.jsx)(c.DeleteIcon, {}),
                        color: "danger",
                        theme: "chat-info",
                        onClick: function() {
                            u.Cmd.deleteOrExitChat((0, _.unproxy)(F))
                        },
                        children: C.default.t(692)
                    })
                });
                (null === (a = F.groupMetadata) || void 0 === a ? void 0 : a.creation) ? (U = s.Clock.createdStr(F.groupMetadata.creation), U = (0, R.jsx)(S.TextDiv, {
                    theme: "small",
                    children: U
                })) : U = null;
                var Y, z = null;
                return (Y = (0, R.jsx)(v.default, {
                    highlightSurface: k.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                    onClick: function() {
                        if ((0, j.isPrivacyNarrativeV1Enabled)() && (0, y.shouldShowNewE2eInfoModal)((0, _.unproxy)(F))) {
                            var e = (0, x.getE2EFaqUrl)();
                            M.ModalManager.open((0, R.jsx)(g.E2eInfoModalV2, {
                                highlightSurface: k.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                                url: e
                            }))
                        } else M.ModalManager.open((0, R.jsx)(m.default, {
                            highlightSurface: k.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                            chatId: F.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    },
                    text: w.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "1iarlI"
                    })
                })) && (z = (0, R.jsxs)(r.ChatInfoDrawerSection, {
                    children: [null, Y]
                })), (0, R.jsxs)(d.default, {
                    ref: t,
                    theme: "striped",
                    children: [(0, R.jsxs)(h.DrawerHeader, {
                        type: h.DRAWER_HEADER_TYPE.SMALL,
                        rtlFixIfOnDarwin: !0,
                        onCancel: function() {
                            P ? P() : null == G || G.requestDismiss()
                        },
                        children: [(0, R.jsx)(S.TextDiv, {
                            theme: "title",
                            children: w.fbt._("Broadcast list info", null, {
                                hk: "3S4EgV"
                            })
                        }), U]
                    }), (0, R.jsx)(f.default, {
                        flatListControllers: [V.current],
                        children: (0, R.jsxs)("div", {
                            className: (0, T.default)(L),
                            children: [(0, R.jsx)(o.default, {
                                chat: (0, _.unproxy)(F)
                            }), H, undefined, z, (0, R.jsx)(i.default, {
                                chat: (0, _.unproxy)(F),
                                flatListController: V.current
                            }), W]
                        })
                    })]
                }, "contact-info-modal")
            }
            var B = (0, P.forwardRef)(D);
            t.default = B
        },
        602922: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = (0, h.default)(),
                    v = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants;
                (0, m.useListener)(v, "add remove reset", a);
                var x = (0, p.useMemo)((function() {
                        return v ? v.map((function(e) {
                            return {
                                itemKey: e.id.toString(),
                                participant: e,
                                height: 68
                            }
                        })) : []
                    }), [v]),
                    b = function(e, t) {
                        (0, f.isMePrimary)(t.id) || (0, u.findChat)(t.id, "broadcastInfoRecipients").then((function(e) {
                            r.Cmd.openChatFromUnread(e).then((function(t) {
                                t && l.ComposeBoxActions.focus(e)
                            }))
                        }))
                    },
                    C = null !== (n = null == v ? void 0 : v.length) && void 0 !== n ? n : 0,
                    j = d.default.t(770, {
                        count: C,
                        _plural: C
                    });
                return (0, g.jsx)(o.ChatInfoDrawerListSection, {
                    title: j,
                    children: (0, g.jsx)(c.FlatList, {
                        flatListController: e.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: x,
                        renderItem: function(e) {
                            var t = e.participant,
                                n = s.ContactCollection.gadd(t.id);
                            return (0, g.jsx)(i.Contact, {
                                contact: n,
                                theme: "chat-info",
                                admin: !!t.isAdmin,
                                onClick: b,
                                waitIdle: !0
                            }, t.id.toString())
                        }
                    })
                })
            };
            var i = n(533219),
                o = n(988456),
                r = n(896674),
                l = n(515918),
                s = n(909881),
                u = n(191649),
                c = n(577407),
                d = a(n(758927)),
                f = n(228277),
                p = n(667294),
                h = a(n(61407)),
                m = n(494092),
                g = n(785893)
        },
        598067: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants,
                    b = (0, m.useModelValues)(e.chat.contact, ["name"]),
                    C = (0, p.default)();
                (0, h.useListener)(a, "add remove reset", C);
                var j = null !== (n = null == a ? void 0 : a.length) && void 0 !== n ? n : 0,
                    M = d.fbt._("Broadcast List", null, {
                        hk: "46AT9o"
                    }).toString() + " · " + s.default.t(770, {
                        count: j,
                        _plural: j
                    }),
                    y = b.name ? (0, g.jsx)(u.Name, {
                        contact: e.chat.contact,
                        selectable: !0
                    }) : d.fbt._("Untitled List", null, {
                        hk: "fYALp"
                    });
                return (0, g.jsxs)(r.default, {
                    theme: "padding-large",
                    children: [(0, g.jsx)("div", {
                        className: (0, f.default)(v),
                        children: (0, g.jsx)(o.DetailImage, {
                            id: e.chat.id,
                            size: o.DetailImageSize.Large
                        })
                    }), (0, g.jsxs)(l.FlexColumn, {
                        align: "center",
                        children: [(0, g.jsx)(c.TextHeader, {
                            level: "2",
                            size: "24",
                            children: y
                        }), (0, g.jsx)("div", {
                            className: (0, f.default)(x),
                            children: (0, g.jsx)(i.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, g.jsx)(c.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: M
                                })
                            })
                        })]
                    })]
                })
            };
            var i = n(160967),
                o = n(207826),
                r = a(n(39357)),
                l = n(208188),
                s = a(n(758927)),
                u = n(246009),
                c = n(558288),
                d = n(548360),
                f = a(n(156720)),
                p = a(n(61407)),
                h = n(494092),
                m = n(853548),
                g = n(785893),
                v = {
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno",
                    marginBottom: "du8bjn1j"
                },
                x = {
                    lineHeight: "a4ywakfo",
                    marginTop: "g1eqewly"
                }
        },
        825965: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact,
                    n = (0, c.useModelValues)(t.getStatus(), ["status"]).status;
                if (s.default.isPSA(t.id)) return (0, d.jsxs)(i.ChatInfoDrawerSection, {
                    titleTestId: "section-about",
                    title: "",
                    children: [(0, d.jsxs)(l.TextSpan, {
                        theme: "title",
                        size: "16",
                        children: [u.fbt._("Hi! Welcome to this official WhatsApp chat.", null, {
                            hk: "1fpFwJ"
                        }).toString(), (0, d.jsx)("br", {}), u.fbt._("This is where you can get tips, see announcements, and hear about the newest features. Straight from us.", null, {
                            hk: "4gcJHK"
                        }).toString(), (0, d.jsx)("br", {}), u.fbt._('Official chats from WhatsApp will always have a green "verified" checkmark. And we\'ll never ask for your personal information.', null, {
                            hk: "8bwzI"
                        }).toString()]
                    }), (0, d.jsx)("br", {}), (0, d.jsx)("br", {}), (0, d.jsx)(r.ExternalLink, {
                        href: "https://whatsapp.com/",
                        xstyle: f.whatsapp_url,
                        children: "https://whatsapp.com/"
                    })]
                });
                if ("" === n) return null;
                return (0, d.jsx)(i.ChatInfoDrawerSection, {
                    titleTestId: "section-about",
                    title: u.fbt._("About", null, {
                        hk: "4qoAfH"
                    }),
                    children: (0, d.jsx)(l.TextSpan, {
                        theme: "title",
                        size: "16",
                        children: (0, d.jsx)(o.default, {
                            id: t.id
                        })
                    })
                })
            };
            var i = n(988456),
                o = a(n(781037)),
                r = n(192070),
                l = n(558288),
                s = a(n(560911)),
                u = n(548360),
                c = (a(n(156720)), n(853548)),
                d = n(785893),
                f = {
                    whatsapp_url: {
                        color: "hafg4y3t"
                    }
                }
        },
        52916: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, x.useContactValues)(e.contact.id, [h.getCommonGroups]),
                    n = (0, i.default)(t, 1)[0],
                    a = (0, v.useState)(!0),
                    j = (0, i.default)(a, 2),
                    M = j[0],
                    y = j[1];
                (0, v.useEffect)((function() {
                    (0, f.findCommonGroups)(e.contact).catch((function(e) {
                        throw __LOG__(4, !0, new Error, !0)`get from participants table failed`, SEND_LOGS("get from participants table failed when finding common groups: " + e), (0, m.default)("get from participants table failed")
                    }))
                }), []);
                var _, S = (0, b.default)(n, ["add", "remove"], (function() {
                        if (!n) return [];
                        var e = n;
                        return e.length > l.INFO_DRAWER_MAX_ROWS && M && (e = e.slice(0, l.INFO_DRAWER_MAX_ROWS)), e.map((function(e) {
                            return {
                                itemKey: e.id.toString(),
                                chat: e,
                                height: (0, c.shouldShowNewSubgroupIdentity)(e.groupMetadata) ? r.SUBGROUP_V2_CHAT_CELL_HEIGHT : 68
                            }
                        }))
                    }), [M]),
                    k = function(t, n) {
                        u.Cmd.openChatFromUnread(n).then((function(e) {
                            e && d.ComposeBoxActions.focus(n)
                        })), e.onClose()
                    };
                if (!n || 0 === n.length) return null;
                if (n.length > l.INFO_DRAWER_MAX_ROWS && M) {
                    var w = n.length - l.INFO_DRAWER_MAX_ROWS;
                    _ = (0, C.jsx)(s.default, {
                        numMore: w,
                        onClick: function() {
                            y(!1)
                        }
                    })
                }
                var P = g.fbt._({
                    "*": "{number} groups in common",
                    _1: "1 group in common"
                }, [g.fbt._plural(n.length, "number")], {
                    hk: "2bl4a5"
                });
                return (0, C.jsxs)(l.ChatInfoDrawerListSection, {
                    titleTestId: "section-common-groups",
                    title: P,
                    children: [(0, C.jsx)(p.FlatList, {
                        flatListController: e.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: S,
                        renderItem: function(e) {
                            var t = e.chat;
                            return (0, C.jsx)(o.Chat, {
                                chat: t,
                                theme: "chat-info",
                                mode: o.Mode.INFO,
                                onClick: k,
                                showCommunityInfo: !0
                            }, t.id.toString())
                        }
                    }), _]
                })
            };
            var i = a(n(963038)),
                o = n(638828),
                r = n(124990),
                l = n(988456),
                s = a(n(694585)),
                u = n(896674),
                c = n(442801),
                d = n(515918),
                f = n(151554),
                p = n(577407),
                h = n(135275),
                m = a(n(580845)),
                g = n(548360),
                v = n(667294),
                x = n(302304),
                b = a(n(86525)),
                C = n(785893)
        },
        762135: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(81109)),
                o = a(n(963038)),
                r = n(63520),
                l = n(742649),
                s = n(281098),
                u = n(104010),
                c = n(894995),
                d = a(n(724030)),
                f = a(n(885691)),
                p = a(n(577482)),
                h = n(86243),
                m = n(238424),
                g = n(219450),
                v = a(n(904792)),
                x = n(218953),
                b = n(202908),
                C = n(762933),
                j = a(n(167740)),
                M = n(988456),
                y = a(n(636244)),
                _ = n(282748),
                S = n(665912),
                k = n(896674),
                w = n(65001),
                P = a(n(825965)),
                T = a(n(52916)),
                I = a(n(64638)),
                E = a(n(588317)),
                A = a(n(761649)),
                N = a(n(344262)),
                O = a(n(382691)),
                R = a(n(98009)),
                L = n(638178),
                D = n(356953),
                B = a(n(237120)),
                G = a(n(686866)),
                V = n(519973),
                F = n(810466),
                H = n(58985),
                U = n(875058),
                W = a(n(39357)),
                Y = n(977627),
                z = n(217332),
                q = a(n(979163)),
                K = n(135275),
                X = n(947974),
                Z = a(n(758927)),
                J = a(n(628580)),
                Q = n(63962),
                $ = n(431045),
                ee = n(628707),
                te = a(n(295418)),
                ne = a(n(309818)),
                ae = a(n(597738)),
                ie = n(179677),
                oe = n(336568),
                re = a(n(707021)),
                le = n(63122),
                se = a(n(408590)),
                ue = n(378776),
                ce = n(401304),
                de = n(558288),
                fe = n(521535),
                pe = n(236539),
                he = n(422210),
                me = n(228277),
                ge = n(454964),
                ve = n(447853),
                xe = a(n(560911)),
                be = n(548360),
                Ce = n(667294),
                je = a(n(156720)),
                Me = n(302304),
                ye = a(n(279781)),
                _e = a(n(177012)),
                Se = a(n(498617)),
                ke = n(785893),
                we = {
                    body: {
                        flexGrow: "tvf2evcx",
                        flexShrink: "oq44ahr5",
                        flexBasis: "lb5m6g5c",
                        paddingBottom: "s9fl9ege"
                    },
                    lastSectionRow: {
                        marginBottom: "brac1wpa"
                    }
                };

            function Pe(e) {
                var t = e.contact,
                    n = e.catalogContext,
                    a = e.onProductDetail,
                    i = e.onProductCatalog,
                    o = x.CatalogCollection.get(t.id);
                if (!o) return null;
                var r = "",
                    l = !1;
                return (0, c.canSeeBizProfileV3)() && (r = be.fbt._("See all", null, {
                    hk: "3dTwyT"
                }), l = !0), n.session.isAccidental() ? null : (0, g.hasShop)(t.businessProfile) ? (0, c.bannedShopsEnabled)() && (0, g.isShopBanned)(t.businessProfile) ? null : (0, ke.jsx)(re.default, {
                    businessProfile: t.businessProfile,
                    catalog: o,
                    subtitle: r,
                    hideIncompleteRows: l
                }) : (0, ke.jsx)(ae.default, {
                    onProductDetail: a,
                    onProductCatalog: i,
                    catalog: o,
                    subtitle: r,
                    hideIncompleteRows: l,
                    shouldLog: !0
                })
            }

            function Te(e, t) {
                var n = e.contact,
                    a = e.onVerification,
                    g = e.onClose,
                    ae = e.onBack,
                    re = e.onProductDetail,
                    Te = e.onProductCatalog,
                    Ie = e.canLogQpl,
                    Ee = void 0 === Ie || Ie,
                    Ae = (0, Se.default)(),
                    Ne = (0, Ce.useContext)(F.DrawerContext);
                (0, fe.useTsNavigation)({
                    surface: "contact-info-drawer"
                });
                var Oe = (0, Me.useContactValues)(e.contact.id, [w.getId, K.getFormattedName, K.getFormattedUser, K.getFormattedShortName, w.getIsBusiness, w.getIsEnterprise, w.getIsMyContact, K.getCommonGroups, K.getBusinessProfile, w.getShowBusinessCheckmarkAsPrimary, w.getShowBusinessCheckmarkAsSecondary, w.getVerifiedName, w.getVerifiedLevel, w.getName, w.getNotifyName, w.getLabels, K.getPhoneNumber]),
                    Re = (0, o.default)(Oe, 17),
                    Le = Re[0],
                    De = (Re[1], Re[2], Re[3], Re[4]),
                    Be = Re[5],
                    Ge = (Re[6], Re[7], Re[8]),
                    Ve = (Re[9], Re[10], Re[11], Re[12], Re[13], Re[14], Re[15]),
                    Fe = Re[16],
                    He = (0, Me.useContactValues)(e.contact.id, [K.getBusinessCatalog, w.getIsMe, w.getStatusMute, K.getDisplayName, K.getShareOwnPn, w.getRequestedPnTimestamp, w.getCanRequestPhoneNumber, w.getIsIAS]),
                    Ue = (0, o.default)(He, 8),
                    We = Ue[0],
                    Ye = Ue[1],
                    ze = (Ue[2], Ue[3], Ue[4], Ue[5], Ue[6], Ue[7]),
                    qe = (0, ye.default)((function() {
                        return new q.default
                    })),
                    Ke = (0, Ce.useRef)(!1),
                    Xe = (0, Ce.useState)(100),
                    Ze = (0, o.default)(Xe, 2),
                    Je = Ze[0],
                    Qe = Ze[1],
                    $e = (0, Ce.useMemo)((function() {
                        return b.ChatCollection.get(Le)
                    }), [Le]),
                    et = Ye;
                (0, Ce.useEffect)((function() {
                    if (Ge && !Ge.stale && We && x.CatalogCollection.findCarouselCatalog(Le).catch((0, r.filteredCatch)(u.ServerStatusCodeError, (function() {
                            __LOG__(3)`Failed to fetch product catalog in contact drawer from server`
                        }))), (0, le.getFanOutListJob)([Le, (0, me.assertGetMe)()]).then((function(e) {
                            (0, Q.ensureE2ESessions)(e)
                        })), (0, ie.getProductCatalogContext)(Ne).session.isAccidental()) U.DrawerManager.setDrawerContext("right", (0, ie.buildProductCatalogContext)(new oe.ProductCatalogSession, (0, L.getMaybeBizPlatformForLogging)(Le.toString()), ve.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE));
                    else if (De && (0, c.canSeeBizProfileV3)()) {
                        var t = Le === (0, me.getMaybeMeUser)(),
                            n = e.profileEntryPoint;
                        !t && n && (0, h.logProfileImpression)((0, ie.getProductCatalogSessionId)(Ne), n, !!(null == Ge ? void 0 : Ge.isProfileLinked), !!(null == Ge ? void 0 : Ge.coverPhoto))
                    }
                    Ee && Ge && (0, $.qplEndProfileView)(l.QuickLogActionType.SUCCESS)
                }), []), (0, Ce.useEffect)((function() {
                    if ((0, c.btmThreadsLoggingEnabled)()) {
                        var e, t = null === (e = (0, me.getMaybeMeUser)()) || void 0 === e ? void 0 : e.equals(Le);
                        (0, ie.getProductCatalogContext)(Ne).session.isAccidental() || t || !(null == $e ? void 0 : $e.id) || (0, S.handleActivitiesForChatThreadLogging)([{
                            activityType: "profileViews",
                            ts: (0, s.unixTime)(),
                            chatId: $e.id
                        }])
                    }
                }), []), (0, _e.default)((function() {
                    (0, ie.getProductCatalogContext)(Ne).session.isAccidental() || De && (0, c.canSeeBizProfileV3)() && (0, h.logProfileExit)((0, ie.getProductCatalogSessionId)(Ne), Je, null == Ge ? void 0 : Ge.isProfileLinked, !!(null == Ge ? void 0 : Ge.coverPhoto))
                }));
                var tt = function() {
                        g ? g() : null == Ae || Ae.requestDismiss()
                    },
                    nt = function(e) {
                        if (Ke.current || xe.default.isPSA(Le)) {
                            var t = e.target;
                            ee.ModalManager.openMedia((0, ke.jsx)(ne.default, {
                                contact: n,
                                profilePicThumb: n.getProfilePicThumb(),
                                animateBorderRadius: !0,
                                getZoomNode: function(e) {
                                    e(t)
                                }
                            }), {
                                transition: "profile-viewer",
                                uim: Ae
                            })
                        } else he.ToastManager.open((0, ke.jsx)(pe.Toast, {
                            msg: be.fbt._("No profile photo", null, {
                                hk: "2bdeTO"
                            })
                        }))
                    },
                    at = function() {
                        Ke.current = !0
                    },
                    it = Be ? null : (0, ke.jsx)(T.default, {
                        contact: n,
                        onClose: tt,
                        flatListController: qe.current
                    }),
                    ot = null;
                e.onMediaGallery && $e && (ot = (0, ke.jsx)(y.default, {
                    chat: $e,
                    onMediaGallery: e.onMediaGallery
                }));
                var rt = null,
                    lt = null;
                if (n && De && Ge && We) {
                    var st = (0, ke.jsx)(Pe, {
                        contact: n,
                        catalogContext: (0, ie.getProductCatalogContext)(Ne),
                        onProductDetail: function(e) {
                            (0, ge.qplStartProductView)("ContactInfo"), re(e)
                        },
                        onProductCatalog: Te
                    });
                    (0, c.canSeeBizProfileV3)() ? lt = st: rt = st
                }
                var ut, ct, dt = $e && $e.mute.canMute() ? (0, ke.jsx)(te.default, {
                    chat: $e,
                    mute: $e.mute,
                    settings: se.default
                }) : null;
                if (e.onStarred && (ut = (0, ke.jsx)(N.default, {
                        onStarred: e.onStarred
                    })), (0, Y.isKeepInChatReadAndUIEnabled)() && $e && ($e.hasKeptMsgs() || (0, C.isEphemeralSettingOn)($e))) {
                    var ft = (0, ke.jsx)(de.TextSpan, {
                            theme: "title",
                            size: "16",
                            children: be.fbt._("Kept Messages", null, {
                                hk: "w8m3u"
                            })
                        }),
                        pt = (0, ke.jsx)(X.KeepInChatIcon, {
                            color: ce.SvgColorProp.SECONDARY,
                            height: 20
                        });
                    ct = (0, ke.jsx)(M.ChatInfoDrawerSection, {
                        titleTestId: "section-kept-messages",
                        xstyle: we.lastSectionRow,
                        children: (0, ke.jsx)(j.default, {
                            testid: "block-kept-messages",
                            side: "chevron",
                            icon: pt,
                            onClick: e.onKept,
                            title: ft
                        })
                    })
                }
                var ht, mt, gt, vt = $e && (0, C.shouldShowEphemeralSetting)($e) ? (0, ke.jsx)(z.EphemeralSettingRow, {
                        onClick: e.onEphemeral,
                        chat: $e,
                        testid: "contact-info-dm-setting-row"
                    }) : null,
                    xt = xe.default.isPSA(Le) ? (0, ke.jsx)(R.default, {}) : (0, ke.jsx)(I.default, {
                        contact: (0, ue.unproxy)(n),
                        onVerificationClick: function() {
                            a()
                        }
                    }),
                    bt = Le.isLid() && null == Fe,
                    Ct = Le.isLid(),
                    jt = (0, ke.jsxs)(M.ChatInfoDrawerSection, {
                        children: [dt, vt, xt, $e && Ct ? (0, ke.jsx)(_.PhoneNumberVisibilityIndicator1On1, {
                            chat: $e
                        }) : null]
                    }),
                    Mt = !De,
                    yt = Mt || ze || Le.isBotContact() ? null : (0, ke.jsx)(d.default, {
                        contact: (0, ue.unproxy)(n)
                    }),
                    _t = Mt ? (0, ke.jsx)(P.default, {
                        contact: (0, ue.unproxy)(n)
                    }) : null,
                    St = (0, c.canSeeBizProfileV3)() && De && Ge ? (0, ke.jsx)(v.default, {
                        contact: n,
                        onProfilePicLoad: at,
                        onProfilePicClick: nt,
                        onOpenStatus: function() {
                            (0, h.logStatusClick)((0, ie.getProductCatalogSessionId)(Ne), null == Ge ? void 0 : Ge.isProfileLinked, !!(null == Ge ? void 0 : Ge.coverPhoto))
                        },
                        businessProfile: Ge,
                        onProductCatalog: Te,
                        isMessageYourselfChat: et,
                        isPhoneNumberHidden: bt
                    }) : (0, ke.jsx)(O.default, {
                        contact: n,
                        onDetailImageLoad: at,
                        onDetailImageClick: nt,
                        isMessageYourselfChat: et,
                        isPhoneNumberHidden: bt
                    }),
                    kt = null,
                    wt = void 0;
                De && Ge && ((0, c.canSeeBizProfileV3)() && Ge ? (kt = (0, ke.jsx)(p.default, {
                    businessProfile: Ge
                }), ht = ze ? null : (0, ke.jsx)(f.default, {
                    contact: n
                }), (null !== (gt = null == Ve ? void 0 : Ve.length) && void 0 !== gt ? gt : 0) > 0 && (mt = (0, ke.jsx)(W.default, {
                    theme: "padding",
                    children: (0, ke.jsx)(J.default, {
                        labels: Ve,
                        theme: "standalone"
                    })
                })), wt = function(e) {
                    var t = Math.floor(100 * (1 + e.currentTarget.scrollTop / e.currentTarget.offsetHeight));
                    t > Je && Qe(t)
                }) : Ge && (kt = (0, ke.jsx)(m.BusinessProfile, {
                    contact: n,
                    businessProfile: Ge
                })));
                var Pt, Tt = {
                        title: be.fbt._("Contact info", null, {
                            hk: "LUJtH"
                        }),
                        type: H.DRAWER_HEADER_TYPE.SMALL,
                        rtlFixIfOnDarwin: !0,
                        focusBackOrCancel: !0
                    },
                    It = {};
                return It = ae ? (0, i.default)({
                    onBack: function() {
                        ae && ae()
                    }
                }, Tt) : (0, i.default)({
                    onCancel: tt
                }, Tt), Ge && !0 === Ge.isProfileLinked && (0, c.bizLinkedAccountsEnabled)() && (0, c.canViewBizLinkedAccounts)() && (Pt = (0, ke.jsx)(A.default, {
                    businessProfile: Ge,
                    rowTheme: "linked-account-consumer"
                })), (0, ke.jsxs)(B.default, {
                    ref: t,
                    theme: "striped",
                    testid: "chat-info-drawer",
                    children: [(0, ke.jsx)(H.DrawerHeader, (0, i.default)((0, i.default)({}, It), {}, {
                        testid: "contact-info-header"
                    })), (0, ke.jsx)(G.default, {
                        flatListControllers: [qe.current],
                        onScroll: wt,
                        children: (0, ke.jsxs)("section", {
                            className: (0, je.default)(we.body),
                            children: [St, ht, mt, lt, kt, Pt, rt, _t, ot, ut, ct, jt, yt, undefined, !et && it, !et && (0, ke.jsx)(E.default, {
                                contact: n
                            }), (0, ke.jsx)(M.ChatInfoDrawerButtonsSection, {
                                children: $e ? (0, ke.jsx)(V.DrawerButton, {
                                    testid: "li-delete-chat",
                                    icon: (0, ke.jsx)(D.DeleteIcon, {}),
                                    color: "danger",
                                    onClick: function() {
                                        var e = b.ChatCollection.assertGet(Le);
                                        k.Cmd.deleteOrExitChatFromEntryPoint(e, 12)
                                    },
                                    theme: "chat-info",
                                    children: Z.default.t(221)
                                }) : null
                            })]
                        })
                    })]
                }, "contact-info-modal")
            }
            var Ie = (0, Ce.forwardRef)(Te);
            t.default = Ie
        },
        64638: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onVerificationClick,
                    n = (0, m.useContactValues)(e.contact.id, [r.getId, r.getPrivacyMode]),
                    a = (0, i.default)(n, 2),
                    v = a[0],
                    x = a[1],
                    b = function(e, t) {
                        if ((0, o.default)(t.user)) return {
                            text: h.fbt._("Click to learn how messages and calls are secured.", null, {
                                hk: "1UxhjE"
                            }),
                            title: h.fbt._("Security", null, {
                                hk: "3j3j0a"
                            }),
                            onClick: function() {
                                (0, c.default)(h.fbt._("WhatsApp secures your messages and calls with this account.", null, {
                                    hk: "18Ci1q"
                                }), (0, s.getSupportChatSafetyFaqUrl)(), h.fbt._("Learn more about chats with WhatsApp Support.", null, {
                                    hk: "1an25A"
                                }))
                            }
                        };
                        switch (e) {
                            case d.ReducedPrivacyMode.E2EE:
                                return null;
                            case d.ReducedPrivacyMode.BSP:
                                return {
                                    text: h.fbt._("This business works with other companies to manage this chat. Click to learn more.", null, {
                                        hk: "VbOOZ"
                                    }), title: h.fbt._("Security", null, {
                                        hk: "3j3j0a"
                                    }), onClick: function() {
                                        (0, c.default)((0, u.formatBspModalText)(), (0, s.getE2EEnterpriseFaqUrl)())
                                    }
                                };
                            case d.ReducedPrivacyMode.FB:
                                return {
                                    text: t.isIAS() ? h.fbt._("WhatsApp Surveys uses a secure service from Meta to manage this chat. Click to learn more.", null, {
                                        hk: "49GQ04"
                                    }) : h.fbt._("This business uses a secure service from Meta to manage this chat. Click to learn more.", null, {
                                        hk: "3wvGOC"
                                    }), title: h.fbt._("Security", null, {
                                        hk: "3j3j0a"
                                    }), onClick: function() {
                                        (0, c.default)((0, u.formatFbModalText)(t.isIAS()), (0, s.getE2EEnterpriseFaqUrl)())
                                    }
                                }
                        }
                    }((0, d.getReducedPrivacyMode)(x), v);
                if (b) return (0, g.jsx)(l.default, {
                    highlightSurface: p.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_CONTACT,
                    title: b.title,
                    text: b.text,
                    onClick: b.onClick
                });
                var C = (0, f.isVoiceCallEnabled)() || (0, f.isVideoCallEnabled)() ? h.fbt._("Messages and calls are end-to-end encrypted. Click to verify.", null, {
                    hk: "GtGQH"
                }) : h.fbt._("Messages are end-to-end encrypted. Click to verify.", null, {
                    hk: "1AqhWR"
                });
                return (0, g.jsx)(l.default, {
                    highlightSurface: p.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_CONTACT,
                    onClick: t,
                    text: C
                })
            };
            var i = a(n(963038)),
                o = a(n(535992)),
                r = n(65001),
                l = a(n(828083)),
                s = n(212390),
                u = n(329369),
                c = a(n(741692)),
                d = n(358015),
                f = n(14115),
                p = n(447853),
                h = n(548360),
                m = n(302304),
                g = n(785893)
        },
        588317: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact,
                    n = (0, k.useContactValues)(e.contact.id, [f.getId, h.getDisplayName, f.getIsBusiness, h.getIsContactBlocked, f.getIsIAS, f.getIsMyContact]),
                    a = (0, i.default)(n, 6),
                    P = a[0],
                    T = (a[1], a[2]),
                    I = a[3],
                    E = a[4],
                    A = (a[5], (0, w.jsx)(g.Name, {
                        contact: e.contact,
                        skipCheckMark: !0
                    })),
                    N = null;
                P.isBotContact() || (N = I ? (0, w.jsx)(p.DrawerButton, {
                    testid: "li-unblock",
                    color: "success",
                    icon: (0, w.jsx)(C.SettingsBlockedIcon, {
                        directional: !0
                    }),
                    onClick: function() {
                        return (0, l.handleUnblock)(e.contact, s.BlockEntryPoint.Profile)
                    },
                    theme: "chat-info",
                    children: S.fbt._("Unblock {contact_name}", [S.fbt._param("contact_name", A)], {
                        hk: "1fZZEx"
                    })
                }) : (0, w.jsx)(p.DrawerButton, {
                    testid: "li-block",
                    color: "danger",
                    icon: (0, w.jsx)(C.SettingsBlockedIcon, {
                        directional: !0
                    }),
                    onClick: function() {
                        var n = function() {
                                var t = u.ChatCollection.get(P);
                                if (null == t ? void 0 : t.isPSA) {
                                    var n = t.msgs.last();
                                    (0, y.logChatPSARemove)(n, 1, 1)
                                }(0, r.blockContact)({
                                    contact: e.contact,
                                    blockEntryPoint: s.BlockEntryPoint.Profile
                                }), m.ModalManager.close()
                            },
                            a = (0, w.jsx)(d.ConfirmPopup, {
                                onOK: n,
                                okText: S.fbt._("Block", null, {
                                    hk: "9s17C"
                                }),
                                onCancel: function() {
                                    return m.ModalManager.close()
                                },
                                title: S.fbt._("Block {contact_name}?", [S.fbt._param("contact_name", A)], {
                                    hk: "26yDKy"
                                }),
                                children: S.fbt._("Blocked contacts will no longer be able to call you or send you messages.", null, {
                                    hk: "3ioCkx"
                                })
                            });
                        _.default.isPSA(P) ? a = (0, w.jsx)(v.default, {
                            onBlock: n,
                            onCancel: function() {
                                return m.ModalManager.close()
                            }
                        }) : T && (a = (0, w.jsx)(o.default, {
                            contact: t,
                            blockEntryPoint: s.BlockEntryPoint.Profile,
                            withReport: !1
                        })), m.ModalManager.open(a)
                    },
                    theme: "chat-info",
                    children: S.fbt._("Block {contact_name}", [S.fbt._param("contact_name", A)], {
                        hk: "laDqJ"
                    })
                }));
                var O = E ? S.fbt._("Report", null, {
                    hk: "2SQkZ4"
                }) : S.fbt._("Report business", null, {
                    hk: "2Tvnn8"
                });
                T || (O = S.fbt._("Report {contact_name}", [S.fbt._param("contact_name", A)], {
                    hk: "3Dqyjo"
                }));
                var R = _.default.isPSA(P) || P.isBotContact() ? null : (0, w.jsx)(p.DrawerButton, {
                    testid: "li-report-spam",
                    color: "danger",
                    icon: (0, w.jsx)(M.ThumbsDownIcon, {}),
                    onClick: function() {
                        m.ModalManager.open((0, w.jsx)(x.default, {
                            isMessage: !1,
                            isBusiness: e.contact.isBusiness,
                            isGroupChat: !1,
                            onReport: function() {
                                var t = u.ChatCollection.get(e.contact.id);
                                t && (0, b.sendReport)({
                                    chat: t,
                                    spamFlow: j.SpamFlow.AccountInfoReport
                                }), m.ModalManager.close()
                            },
                            onReportBlockClear: function() {
                                var t = u.ChatCollection.get(e.contact.id);
                                t && (0, b.sendSpamBlockClear)(t, j.SpamFlow.AccountInfoReport), m.ModalManager.close()
                            },
                            onCancel: function() {
                                return m.ModalManager.close()
                            }
                        }))
                    },
                    theme: "chat-info",
                    children: O
                });
                return (0, w.jsxs)(c.ChatInfoDrawerButtonsSection, {
                    children: [N, R]
                })
            };
            var i = a(n(963038)),
                o = a(n(794307)),
                r = n(994356),
                l = n(556088),
                s = n(354050),
                u = n(202908),
                c = n(988456),
                d = n(430888),
                f = n(65001),
                p = n(519973),
                h = n(135275),
                m = n(628707),
                g = n(246009),
                v = a(n(217406)),
                x = a(n(502807)),
                b = n(517841),
                C = n(987208),
                j = n(233565),
                M = n(949059),
                y = n(263398),
                _ = a(n(560911)),
                S = n(548360),
                k = n(302304),
                w = n(785893)
        },
        344262: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onStarred,
                    n = (0, c.jsx)(s.TextSpan, {
                        theme: "title",
                        size: "16",
                        children: u.fbt._("Starred messages", null, {
                            hk: "4wVbNG"
                        })
                    }),
                    a = (0, c.jsx)(r.StarIcon, {
                        color: l.SvgColorProp.SECONDARY,
                        height: 20
                    });
                return (0, c.jsx)(o.ChatInfoDrawerSection, {
                    titleTestId: "section-starred-messages",
                    children: (0, c.jsx)(i.default, {
                        testid: "block-starred-messages",
                        side: "chevron",
                        icon: a,
                        onClick: t,
                        title: n
                    })
                })
            };
            var i = a(n(167740)),
                o = n(988456),
                r = n(136896),
                l = n(401304),
                s = n(558288),
                u = n(548360),
                c = n(785893)
        },
        691075: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return (0, f.jsxs)(s.FlexRow, {
                    xstyle: m.container,
                    children: [(0, f.jsx)(s.FlexColumn, {
                        xstyle: [m.item],
                        children: p
                    }), (0, f.jsx)(s.FlexColumn, {
                        xstyle: [m.text, m.item],
                        children: (0, f.jsx)(c.TextSpan, {
                            testid: "contact-info-pnh-info",
                            children: d.fbt._("This person's phone number is not shared in this chat. {=m2}", [d.fbt._implicitParam("=m2", (0, f.jsx)(i.default, {
                                testid: "contact-info-pnh-learn-more",
                                onClick: h,
                                children: d.fbt._("Learn more", null, {
                                    hk: "t6HJf"
                                })
                            }))], {
                                hk: "3CEKuh"
                            })
                        })
                    })]
                })
            };
            var i = a(n(522656)),
                o = n(14630),
                r = n(192070),
                l = n(212390),
                s = n(208188),
                u = n(401304),
                c = n(558288),
                d = n(548360),
                f = (a(n(156720)), n(785893)),
                p = (0, f.jsx)(o.DialpadIcon, {
                    directional: !0,
                    color: u.SvgColorProp.SECONDARY
                }),
                h = function() {
                    var e = (0, l.getPhoneNumberHidingFaqUrl)();
                    (0, r.openExternalLink)(e)
                },
                m = {
                    container: {
                        alignItems: "gndfcl4n",
                        backgroundColor: "f6ipylw5",
                        borderTopStartRadius: "bbr44loe",
                        borderTopEndRadius: "ooj5yc5b",
                        borderBottomEndRadius: "m8i16etx",
                        borderBottomStartRadius: "cw0ivh8j",
                        display: "p357zi0d",
                        marginTop: "fgtikrv0",
                        marginEnd: "k1jo73ug",
                        marginBottom: "iyjcf3gk",
                        marginStart: "isfiuinm",
                        width: "c0boj6n4",
                        height: "q1n4p668",
                        maxWidth: "l2o74p5l",
                        paddingStart: "nu34rnf1",
                        paddingEnd: "ft2m32mm",
                        lineHeight: "erpdyial"
                    },
                    text: {
                        color: "pm5hny62",
                        marginTop: "m3ct2rho",
                        marginEnd: "k1jo73ug",
                        marginBottom: "ec1z5skj",
                        marginStart: "isfiuinm",
                        wordBreak: "cw3vfol9",
                        overflowWrap: "fd365im1"
                    },
                    item: {
                        marginStart: "p3lsiedt",
                        marginEnd: "q471nw87",
                        paddingTop: "qomlamqu",
                        paddingEnd: "lnjlmjd6",
                        paddingBottom: "bxcbqipq",
                        paddingStart: "mc6o24uu"
                    }
                }
        },
        382691: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.contact,
                    a = e.onDetailImageLoad,
                    i = e.onDetailImageClick,
                    o = e.isMessageYourselfChat,
                    r = e.isPhoneNumberHidden,
                    l = O.fbt._("Official WhatsApp Account", null, {
                        hk: "2cEUzF"
                    }),
                    s = null != n.phoneNumber ? f.ContactCollection.get(n.phoneNumber) : null;
                if (A.default.isPSA(n.id)) t = l;
                else if ((0, p.getIsMyContact)(n)) t = (0, N.widToFormattedUser)(n.id);
                else if (n.id.isLid() && null != s && (0, p.getIsMyContact)(s)) t = (0, N.widToFormattedUser)(n.phoneNumber);
                else {
                    var u = (0, p.getNotifyName)(n);
                    null != u && (t = `~${u}`)
                }
                return (0, L.jsxs)(x.default, {
                    theme: "padding-large",
                    children: [(0, L.jsx)("div", {
                        className: (0, R.default)(D.avatar),
                        children: (0, L.jsx)(g.DetailImage, {
                            id: n.id,
                            size: g.DetailImageSize.Large,
                            loader: !0,
                            onLoad: a,
                            onClick: i,
                            quality: g.DetailImageQuality.High
                        })
                    }), (0, L.jsxs)(C.FlexColumn, {
                        align: "center",
                        children: [(0, L.jsx)(w.TextHeader, {
                            level: "2",
                            size: "24",
                            xstyle: D.contactName,
                            children: (0, L.jsx)(y.Name, {
                                testid: "contact-info-subtitle",
                                contact: n,
                                showMessageYourselfName: o,
                                selectable: !0,
                                breakWord: !0
                            })
                        }), null != t && (0, L.jsx)("div", {
                            className: (0, R.default)(D.secondaryWrapper),
                            children: (0, L.jsx)(m.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, L.jsx)(w.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: t
                                })
                            })
                        })]
                    }), r && (0, L.jsx)(h.default, {}), !o && (0, L.jsx)(B, {
                        contact: n,
                        displayRequestPnButton: r
                    }), (0, L.jsx)(j.default, {
                        labels: n.labels
                    })]
                })
            };
            var i = n(519509),
                o = n(202908),
                r = n(305751),
                l = a(n(639835)),
                s = a(n(962617)),
                u = n(564817),
                c = n(896674),
                d = n(515918),
                f = n(909881),
                p = n(65001),
                h = a(n(691075)),
                m = n(160967),
                g = n(207826),
                v = n(403998),
                x = a(n(39357)),
                b = n(191649),
                C = n(208188),
                j = a(n(628580)),
                M = n(628707),
                y = n(246009),
                _ = n(786932),
                S = a(n(546637)),
                k = n(378776),
                w = n(558288),
                P = n(71867),
                T = n(593438),
                I = n(764582),
                E = n(447853),
                A = a(n(560911)),
                N = n(221156),
                O = n(548360),
                R = a(n(156720)),
                L = n(785893),
                D = {
                    avatar: {
                        display: "p357zi0d",
                        justifyContent: "ac2vgrno",
                        marginBottom: "pz0xruzv"
                    },
                    secondaryWrapper: {
                        lineHeight: "a4ywakfo",
                        marginTop: "qt60bha0"
                    },
                    contactName: {
                        textAlign: "qfejxiq4"
                    }
                };

            function B(e) {
                var t = e.contact,
                    n = e.displayRequestPnButton,
                    a = (0, s.default)((0, k.unproxy)(t)),
                    f = !(!a.isVideoCallEnabled && !a.isVoiceCallEnabled || A.default.isPSA(t.id)) && (0, L.jsxs)(L.Fragment, {
                        children: [(0, L.jsx)(l.default, {
                            Icon: T.VoiceCallFilledIcon,
                            iconWidth: 19,
                            label: O.fbt._("Audio", null, {
                                hk: "1b375N"
                            }),
                            testid: "contact-action voice-call-button",
                            xstyle: [P.uiMargin.start16, P.uiMargin.end16],
                            disabled: !a.canStartVoiceCall,
                            onClick: function() {
                                var e = t.id.isLid() ? t.phoneNumber : t.id;
                                (0, _.shouldDisplayPhoneNumberHidingModal)(t) ? (0, _.displayPhoneNumberHidingModal)(t, !1) : null != e && (null === I.Voip || void 0 === I.Voip || I.Voip.callStart(e, !1))
                            }
                        }), (0, L.jsx)(l.default, {
                            Icon: u.ChatInfoVideoIcon,
                            label: O.fbt._("Video", null, {
                                hk: "3zMUsJ"
                            }),
                            testid: "contact-action video-call-button",
                            xstyle: [P.uiMargin.start16, P.uiMargin.end16],
                            disabled: !a.canStartVideoCall,
                            onClick: function() {
                                var e = t.id.isLid() ? t.phoneNumber : t.id;
                                (0, _.shouldDisplayPhoneNumberHidingModal)(t) ? (0, _.displayPhoneNumberHidingModal)(t, !0) : null != e && (null === I.Voip || void 0 === I.Voip || I.Voip.callStart(e, !0))
                            }
                        })]
                    }),
                    h = O.fbt._("Request", null, {
                        hk: "1Qh451"
                    }),
                    m = O.fbt._("Requested", null, {
                        hk: "3GgAXn"
                    }),
                    g = (0, p.getCanRequestPhoneNumber)(t) ? h : m,
                    x = n && (0, L.jsx)(l.default, {
                        Icon: v.DialpadSmallIcon,
                        iconWidth: 19,
                        label: g,
                        xstyle: [P.uiMargin.start16, P.uiMargin.end16],
                        disabled: !(0, p.getCanRequestPhoneNumber)(t),
                        onClick: function() {
                            M.ModalManager.open((0, L.jsx)(S.default, {
                                entryPoint: E.PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST
                            }))
                        },
                        testid: "request-phone-number-button-consumer"
                    }),
                    j = null;
                if ((0, i.getABPropConfigValue)("unified_user_profile_navigation_enabled")) {
                    var y = o.ChatCollection.getActive();
                    j = !(null == y ? void 0 : y.id.equals(t.id)) && (0, L.jsx)(l.default, {
                        Icon: r.ChatIcon,
                        iconWidth: 19,
                        label: O.fbt._("Message", null, {
                            hk: "4gkjcu"
                        }),
                        testid: "contact-action chat-button",
                        xstyle: [P.uiMargin.start16, P.uiMargin.end16],
                        disabled: !1,
                        onClick: function() {
                            (0, b.findChat)(t.id, "chatInfoTopCard").then((function(e) {
                                c.Cmd.openChatFromUnread(e).then((function(t) {
                                    t && d.ComposeBoxActions.focus(e)
                                }))
                            }))
                        }
                    })
                }
                return (0, L.jsxs)(C.FlexRow, {
                    justify: "center",
                    xstyle: [P.uiMargin.top8, P.uiMargin.bottom4],
                    children: [x, j, f]
                })
            }
        },
        98009: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = {
                    text: u.fbt._("This is an official account of WhatsApp", null, {
                        hk: "2Av1mT"
                    }),
                    title: u.fbt._("Security", null, {
                        hk: "2jDPpv"
                    }),
                    onClick: function() {
                        (0, l.default)((0, r.formatWaChatSecurityModalText)(), (0, o.getWAChatFaqUrl)())
                    }
                };
                return (0, c.jsx)(i.default, {
                    highlightSurface: s.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_CONTACT,
                    title: e.title,
                    text: e.text,
                    onClick: e.onClick
                })
            };
            var i = a(n(828083)),
                o = n(212390),
                r = n(329369),
                l = a(n(741692)),
                s = n(447853),
                u = n(548360),
                c = n(785893)
        },
        724030: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.contact.getStatus(),
                    a = (0, h.useContactValues)(e.contact.id, [s.getId, c.getPhoneNumber]),
                    x = (0, i.default)(a, 2),
                    b = x[0],
                    C = x[1],
                    j = "" === (0, m.useModelValues)(n, ["status"]).status ? null : (0, g.jsx)(o.default, {
                        multiline: !0,
                        children: (0, g.jsx)(f.TextSpan, {
                            theme: "title",
                            children: (0, g.jsx)(l.default, {
                                id: b
                            })
                        })
                    });
                b.isLid() ? null != C && (t = C) : t = b;
                var M = t ? (0, g.jsx)(o.default, {
                    separator: !0,
                    children: (0, g.jsx)(u.SelectableSpan, {
                        dir: "auto",
                        selectable: !0,
                        children: (0, g.jsx)(f.TextSpan, {
                            theme: "title",
                            children: (0, p.widToFormattedUser)(t)
                        })
                    })
                }) : null;
                return (0, g.jsxs)(r.ChatInfoDrawerSection, {
                    xstyle: v.container,
                    titleTestId: "section-about-and-phone-number",
                    title: d.default.t(211),
                    children: [j, M]
                })
            };
            var i = a(n(963038)),
                o = a(n(560922)),
                r = n(988456),
                l = a(n(781037)),
                s = n(65001),
                u = n(160967),
                c = n(135275),
                d = a(n(758927)),
                f = n(558288),
                p = n(221156),
                h = (a(n(156720)), n(302304)),
                m = n(853548),
                g = n(785893),
                v = {
                    container: {
                        paddingBottom: "przvwfww"
                    }
                }
        },
        885691: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact,
                    n = (0, f.jsx)(m, {
                        contact: t,
                        onClick: function() {
                            u.ModalManager.open((0, f.jsx)(c.default, {
                                contact: t
                            }))
                        }
                    });
                return (0, f.jsx)(l.default, {
                    xstyle: p.businessAccount,
                    children: n
                })
            };
            var i = n(155505),
                o = n(65001),
                r = a(n(209222)),
                l = a(n(39357)),
                s = n(67497),
                u = n(628707),
                c = a(n(436115)),
                d = n(548360),
                f = (a(n(156720)), n(785893)),
                p = {
                    businessAccount: {
                        borderTop: "mug5vpb7",
                        fontSize: "f8jlpxt4"
                    },
                    businessTitleWithSMBUpsell: {
                        lineHeight: "hzeshm6i"
                    },
                    bannerSvgContainer: {
                        marginTop: "b9l0eqez",
                        marginEnd: "jnwc1y2a",
                        marginBottom: "mpdn4nr2",
                        marginStart: "svoq16ka"
                    },
                    bannerSvg: {
                        color: "jq3rn4u7",
                        width: "dh5rsm73"
                    }
                };

            function h(e) {
                return (0, i.isBotEnabled)() && (0, o.getId)(e).isBotContact() ? d.fbt._("", null, {
                    hk: "1SN9QF"
                }) : d.fbt._("This is a business account.", null, {
                    hk: "2x8QUJ"
                })
            }

            function m(e) {
                var t = e.onClick,
                    n = e.contact;
                return (0, f.jsx)(r.default, {
                    testid: "business-title",
                    xstyle: p.businessTitleWithSMBUpsell,
                    onClick: t,
                    side: (0, f.jsx)(s.InfoIcon, {
                        xstyle: p.bannerSvgContainer,
                        iconXstyle: p.bannerSvg,
                        displayInline: !0
                    }),
                    children: h(n)
                })
            }
        },
        62886: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a, U = e.contact,
                    W = e.onProductCatalog,
                    Y = (0, V.useContext)(y.DrawerContext),
                    z = (0, I.getProductCatalogSessionId)(Y),
                    q = (0, g.default)((0, O.unproxy)(e.contact));

                function K() {
                    return (K = (0, o.default)(i.default.mark((function e() {
                        var t;
                        return i.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, S.findChat)(U.id, "businessActions");
                                case 2:
                                    return t = e.sent, e.next = 5, b.Cmd.openChatFromUnread(t);
                                case 5:
                                    if (e.sent) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 8:
                                    _.DrawerManager.closeDrawerRight(), (0, s.btmThreadsLoggingEnabled)() && C.ComposeBoxActions.addMsgSendingLogAttributes(t, {
                                        handleMultiple: function() {
                                            (0, x.handleActivitiesForChatThreadLogging)([{
                                                activityType: "profileReplies",
                                                ts: (0, r.unixTime)(),
                                                chatId: t.id
                                            }])
                                        }
                                    });
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var X, Z, J, Q = p.ChatCollection.getActive();
                if (!(null == Q ? void 0 : Q.id.equals(U.id))) {
                    var $, ee;
                    (0, u.logMessageClick)(z, null === ($ = U.businessProfile) || void 0 === $ ? void 0 : $.isProfileLinked, !!(null === (ee = U.businessProfile) || void 0 === ee ? void 0 : ee.coverPhoto)), a = (0, F.jsx)(m.default, {
                        xstyle: [R.uiMargin.horiz12],
                        Icon: (0, l.getABPropConfigValue)("unified_user_profile_navigation_enabled") ? h.ChatIcon : v.ChatMsgIcon,
                        label: G.fbt._("Message", null, {
                            hk: "mZ5DE"
                        }),
                        onClick: function() {
                            ! function() {
                                K.apply(this, arguments)
                            }()
                        },
                        testid: "business-action chat"
                    })
                }
                q.isVoiceCallEnabled && (X = (0, F.jsx)(m.default, {
                    xstyle: [R.uiMargin.horiz12],
                    Icon: L.VoiceCallFilledIcon,
                    label: G.fbt._("Audio", null, {
                        hk: "rWU8D"
                    }),
                    disabled: !q.canStartVoiceCall,
                    onClick: function() {
                        var e, t;
                        (0, u.logVoiceCallClick)(z, null === (e = U.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked, !!(null === (t = U.businessProfile) || void 0 === t ? void 0 : t.coverPhoto));
                        var n = U.id.isLid() ? U.phoneNumber : U.id;
                        (0, T.shouldDisplayPhoneNumberHidingModal)(U) ? (0, T.displayPhoneNumberHidingModal)(U, !1) : null != n && (null === D.Voip || void 0 === D.Voip || D.Voip.callStart(n, !1))
                    },
                    testid: "business-action voice-call"
                }));
                (null === (t = U.businessProfile) || void 0 === t || null === (n = t.profileOptions) || void 0 === n ? void 0 : n.commerceExperience) === c.COMMERCE_EXPERIENCE_TYPES.CATALOG && (Z = (0, F.jsx)(m.default, {
                    xstyle: [R.uiMargin.horiz12],
                    Icon: f.CatalogFilledIcon,
                    label: G.fbt._("Catalog", null, {
                        hk: "3QDkTE"
                    }),
                    onClick: function() {
                        var e, t;
                        (0, u.logCatalogClick)(z, null === (e = U.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked, !!(null === (t = U.businessProfile) || void 0 === t ? void 0 : t.coverPhoto)), W((0, I.getProductCatalogContext)(Y), "ContactInfo")
                    },
                    testid: "business-action catalog"
                }));
                if ((0, d.hasShop)(U.businessProfile)) {
                    (0, s.bannedShopsEnabled)() && (0, d.isShopBanned)(U.businessProfile) || (J = (0, F.jsx)(m.default, {
                        xstyle: [R.uiMargin.horiz12],
                        Icon: N.ShopFilledIcon,
                        label: G.fbt._("Shop", null, {
                            hk: "3KsdlE"
                        }),
                        onClick: function() {
                            var e, t;
                            (0, u.logShopsClick)(z, null === (e = U.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked, !!(null === (t = U.businessProfile) || void 0 === t ? void 0 : t.coverPhoto)), (0, d.goToShop)(U.businessProfile)
                        },
                        testid: "business-action shop"
                    }))
                }
                var te = !(0, j.getIsIAS)(U) && !(0, j.getId)(U).isBotContact() && (0, F.jsx)(m.default, {
                        xstyle: [R.uiMargin.horiz12],
                        Icon: w.ForwardFilledIcon,
                        label: G.fbt._("Share", null, {
                            hk: "4F3c6E"
                        }).toString(),
                        onClick: function() {
                            var e, t;
                            (0, u.logForwardClick)(z, null === (e = U.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked, !!(null === (t = U.businessProfile) || void 0 === t ? void 0 : t.coverPhoto)), P.ModalManager.open((0, F.jsx)(A.SendContactsModalLoadable, {
                                contacts: [(0, O.unproxy)(U)],
                                onContactsSent: function(e) {
                                    b.Cmd.openChatFromUnread(e).then((function() {}))
                                }
                            }))
                        },
                        testid: "business-action forward"
                    }),
                    ne = G.fbt._("Request", null, {
                        hk: "1Qh451"
                    }),
                    ae = G.fbt._("Requested", null, {
                        hk: "3GgAXn"
                    }),
                    ie = (0, j.getCanRequestPhoneNumber)(U) ? ne : ae,
                    oe = e.displayRequestPnButton && (0, F.jsx)(m.default, {
                        Icon: M.DialpadSmallIcon,
                        xstyle: [R.uiMargin.horiz12],
                        iconWidth: 19,
                        label: ie,
                        disabled: !(0, j.getCanRequestPhoneNumber)(U),
                        onClick: function() {
                            P.ModalManager.open((0, F.jsx)(E.default, {
                                entryPoint: B.PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST
                            }))
                        },
                        testid: "request-phone-number-button-business"
                    });
                return (0, F.jsxs)(k.FlexRow, {
                    xstyle: H.actionsRow,
                    justify: "center",
                    children: [oe, a, X, Z, J, te]
                })
            };
            var i = a(n(887757)),
                o = a(n(348926)),
                r = n(281098),
                l = n(519509),
                s = n(894995),
                u = n(86243),
                c = n(71100),
                d = n(219450),
                f = n(293625),
                p = n(202908),
                h = n(305751),
                m = a(n(639835)),
                g = a(n(962617)),
                v = n(627915),
                x = n(665912),
                b = n(896674),
                C = n(515918),
                j = n(65001),
                M = n(403998),
                y = n(810466),
                _ = n(875058),
                S = n(191649),
                k = n(208188),
                w = n(431221),
                P = n(628707),
                T = n(786932),
                I = n(179677),
                E = a(n(546637)),
                A = n(418122),
                N = n(70568),
                O = n(378776),
                R = n(71867),
                L = n(593438),
                D = n(764582),
                B = n(447853),
                G = n(548360),
                V = n(667294),
                F = (a(n(156720)), n(785893)),
                H = {
                    actionsRow: {
                        marginTop: "c46o30wg",
                        marginEnd: "bsg2wrd4",
                        marginBottom: "brac1wpa",
                        marginStart: "f459d30t",
                        "@media (min-width: 1300px)": {
                            marginStart: "hfp8519b",
                            marginEnd: "acdu7ris"
                        }
                    }
                }
        },
        978373: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.businessHours,
                    n = e.isProfileLinked,
                    a = e.hasCoverPhoto,
                    i = (0, f.getProductCatalogSessionId)((0, v.useContext)(c.DrawerContext)),
                    s = (0, l.getBusinessOpenState)(t),
                    u = (0, v.useState)(!0),
                    d = (0, o.default)(u, 2),
                    m = d[0],
                    j = d[1];
                if (null == t) return null;
                var M = (0, p.getBusinessHours)(t).map((function(e) {
                    var t = e.day,
                        n = e.hours,
                        a = e.first,
                        i = t,
                        o = n,
                        r = !1;
                    if (a) switch (s.status) {
                        case l.BUSINESS_OPEN_STATUS.OPEN_24H:
                            i = g.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), o = g.fbt._("Open 24 hours", null, {
                                hk: "1AlfF5"
                            }), r = !0;
                            break;
                        case l.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                            i = g.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), o = g.fbt._("Open by appointment only", null, {
                                hk: "1nxH9v"
                            }), r = !0;
                            break;
                        case l.BUSINESS_OPEN_STATUS.OPEN:
                            i = g.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), r = !0;
                            break;
                        case l.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                            o = g.fbt._("Closed", null, {
                                hk: "3IRgct"
                            })
                    }
                    return !a && m ? null : (0, x.jsx)(C, {
                        day: i,
                        dayIsOpen: r,
                        hours: o,
                        first: a,
                        collapsed: m
                    }, t)
                }));
                return (0, x.jsx)(h.default, {
                    xstyle: b.businessHours,
                    onClick: function() {
                        (0, r.logHoursClick)(i, n, !!a), j(!m)
                    },
                    testid: "business-hours-expand",
                    children: M
                })
            };
            var i = a(n(859713)),
                o = a(n(963038)),
                r = n(86243),
                l = n(219450),
                s = n(275394),
                u = n(541585),
                c = n(810466),
                d = n(990055),
                f = n(179677),
                p = n(823113),
                h = a(n(83938)),
                m = a(n(480826)),
                g = n(548360),
                v = n(667294),
                x = (a(n(156720)), n(785893)),
                b = {
                    businessHours: {
                        display: "f804f6gw",
                        width: "ln8gz9je",
                        textAlign: "ml4r5409"
                    }
                };

            function C(e) {
                if (e.first) {
                    var t, n, a = (0, x.jsx)("div", {
                        className: m.default.businessHoursChevron,
                        role: "button",
                        children: (0, x.jsx)(s.ChevronDownAltIcon, {
                            className: e.collapsed ? "" : m.default.flipSvg,
                            displayInline: !0
                        })
                    });
                    return (0, x.jsxs)("div", {
                        className: (0, u.cx)((t = {}, (0, i.default)(t, m.default.firstRow, e.first), (0, i.default)(t, m.default.businessHoursRow, !0), t)),
                        children: [(0, x.jsx)("div", {
                            className: (0, u.cx)((n = {}, (0, i.default)(n, m.default.dayIsOpen, e.dayIsOpen), (0, i.default)(n, m.default.businessHoursDay, !0), n)),
                            children: (0, x.jsx)(d.EmojiText, {
                                direction: "auto",
                                text: e.day
                            })
                        }), (0, x.jsx)("div", {
                            className: m.default.businessHoursHours,
                            children: (0, x.jsx)(d.EmojiText, {
                                direction: "auto",
                                text: e.hours
                            })
                        }), a]
                    })
                }
                return (0, x.jsxs)("div", {
                    className: m.default.businessHoursRow,
                    children: [(0, x.jsx)("div", {
                        className: m.default.businessHoursDay,
                        children: (0, x.jsx)(d.EmojiText, {
                            direction: "auto",
                            text: e.day
                        })
                    }), (0, x.jsx)("div", {
                        className: m.default.businessHoursHours,
                        children: (0, x.jsx)(d.EmojiText, {
                            direction: "auto",
                            text: e.hours
                        })
                    })]
                })
            }
        },
        577482: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a, j, M, y, _ = e.businessProfile,
                    S = (0, x.useModelValues)(_, ["description", "address", "latitude", "longitude", "website", "email", "businessHours", "isProfileLinked", "coverPhoto"]),
                    k = S.description,
                    w = S.address,
                    P = S.latitude,
                    T = S.longitude,
                    I = S.website,
                    E = S.email,
                    A = S.businessHours,
                    N = S.isProfileLinked,
                    O = S.coverPhoto,
                    R = (0, v.useContext)(s.DrawerContext),
                    L = (0, p.getProductCatalogSessionId)(R);
                null != k && (t = (0, b.jsx)("div", {
                    className: m.default.section,
                    children: (0, b.jsx)(c.ExpandableText, {
                        text: k,
                        textLimit: l.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                        children: function(e) {
                            var t = e.textLimit;
                            return (0, b.jsx)(u.EmojiText, {
                                className: m.default.description,
                                selectable: !0,
                                direction: "auto",
                                text: k,
                                textLimit: t,
                                breakWord: !0
                            })
                        }
                    })
                }));
                null != A && (n = (0, b.jsx)("div", {
                    className: m.default.section,
                    children: (0, b.jsx)(i.default, {
                        businessHours: A,
                        isProfileLinked: N,
                        hasCoverPhoto: !!O
                    })
                }));
                null != w && (a = (0, b.jsx)("div", {
                    className: m.default.section,
                    children: (0, b.jsx)(u.EmojiText, {
                        selectable: !0,
                        direction: "auto",
                        text: w
                    })
                }));
                null != P && null != T && (j = (0, b.jsx)("div", {
                    style: {
                        height: 132
                    },
                    className: (0, g.default)(m.default.section, m.default.map),
                    children: (0, b.jsx)(f.default, {
                        lat: P,
                        lng: T,
                        name: w || "",
                        width: 590,
                        height: 132,
                        onClick: function() {
                            return (0, o.logLocationClick)(L, N, !!O)
                        },
                        testid: "business-info-map"
                    })
                }));
                null != E && (M = (0, b.jsx)("div", {
                    className: m.default.section,
                    children: (0, b.jsx)(d.ExternalLink, {
                        href: `mailto:${E}`,
                        onClick: function() {
                            return (0, o.logEmailClick)(L, N, !!O)
                        },
                        testid: "business-info-email",
                        children: E
                    })
                }));
                null != I && I.length > 0 && (y = (0, b.jsx)("div", {
                    className: m.default.section,
                    children: I.map((function(e) {
                        return (0, b.jsx)("div", {
                            children: (0, b.jsx)(d.ExternalLink, {
                                href: h.default.toMaliciousSiteRedirect(e),
                                onClick: function() {
                                    return (0, o.logWebsiteClick)(L, N, !!O)
                                },
                                testid: "business-info-website",
                                children: e
                            })
                        }, e)
                    }))
                }));
                if (null == t && null == n && null == a && null == j && null == M && null == y) return null;
                return (0, b.jsxs)(r.ChatInfoDrawerSection, {
                    xstyle: C.container,
                    children: [t, n, a, j, M, y]
                })
            };
            var i = a(n(978373)),
                o = n(86243),
                r = n(988456),
                l = a(n(442435)),
                s = n(810466),
                u = n(990055),
                c = n(485009),
                d = n(192070),
                f = a(n(822837)),
                p = n(179677),
                h = a(n(728650)),
                m = a(n(452674)),
                g = a(n(518122)),
                v = n(667294),
                x = (a(n(156720)), n(853548)),
                b = n(785893),
                C = {
                    container: {
                        paddingTop: "i4pc7asj",
                        paddingBottom: "q1nnjopg"
                    }
                }
        },
        337649: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a, b, C, j = e.contact,
                    M = e.isMessageYourselfChat;
                null != (null === (t = j.businessProfile) || void 0 === t ? void 0 : t.customUrl) && (b = (0, d.jsx)("div", {
                    className: (0, c.default)(h),
                    children: (0, d.jsx)(r.EmojiText, {
                        text: null === (C = j.businessProfile) || void 0 === C ? void 0 : C.customUrl,
                        direction: "auto",
                        titlify: !0,
                        breakWord: !0,
                        inlineblock: !0
                    })
                }));
                if ((0, o.getIsMe)(j))
                    if (M) n = (0, d.jsx)(l.Name, {
                        contact: j,
                        showBusinessCheckmark: (0, o.getShowBusinessCheckmarkAsPrimary)(j),
                        showMessageYourselfName: !0,
                        useVerifiedName: !0,
                        breakWord: !0,
                        selectable: !0
                    }), a = (0, d.jsx)(l.Name, {
                        contact: j,
                        showBusinessCheckmark: (0, o.getShowBusinessCheckmarkAsPrimary)(j),
                        selectable: !0
                    });
                    else if (j.name !== j.verifiedName) {
                    var y;
                    (0, o.getShowBusinessCheckmarkAsSecondary)(j) && (y = (0, d.jsx)("div", {
                        className: (0, c.default)(p),
                        children: (0, d.jsx)(s.PsaVerifiedIcon, {})
                    })), n = (0, d.jsx)(l.Name, {
                        contact: j,
                        breakWord: !0,
                        selectable: !0
                    }), a = (0, d.jsx)("div", {
                        className: (0, c.default)(h),
                        children: (0, d.jsxs)("div", {
                            className: (0, c.default)(x),
                            children: [(0, d.jsx)(r.EmojiText, {
                                text: `~${j.verifiedName}`,
                                className: (0, c.default)(v),
                                direction: "auto",
                                ellipsify: !0,
                                titlify: !0,
                                selectable: !0
                            }), y]
                        })
                    })
                } else n = (0, d.jsx)(l.Name, {
                    contact: j,
                    showBusinessCheckmark: (0, o.getShowBusinessCheckmarkAsPrimary)(j),
                    breakWord: !0,
                    selectable: !0
                });
                else n = (0, o.getIsIAS)(j) ? (0, d.jsx)("span", {
                    children: (0, d.jsx)(l.Name, {
                        contact: j
                    })
                }) : (0, d.jsx)(r.EmojiText, {
                    text: j.verifiedName,
                    direction: "auto",
                    ellipsify: !0,
                    titlify: !0,
                    breakWord: !0,
                    selectable: !0
                }), a = (0, o.getIsIAS)(j) ? (0, d.jsx)("div", {
                    className: (0, c.default)(h),
                    children: (0, d.jsx)(r.EmojiText, {
                        text: u.fbt._("Official WhatsApp Account", null, {
                            hk: "4oZMU1"
                        }),
                        direction: "auto",
                        ellipsify: !0,
                        titlify: !0,
                        breakWord: !0,
                        selectable: !0
                    })
                }) : (0, i.isBotEnabled)() && (0, o.getId)(j).isBotContact() ? (0, d.jsx)("div", {
                    className: (0, c.default)(m),
                    children: (0, d.jsx)(r.EmojiText, {
                        text: u.fbt._("", null, {
                            hk: "3wsfuo"
                        }),
                        direction: "auto",
                        ellipsify: !0,
                        titlify: !0,
                        breakWord: !0,
                        selectable: !0
                    })
                }) : (0, d.jsx)("div", {
                    className: (0, c.default)(h),
                    children: (0, d.jsx)(l.Name, {
                        testid: "contact-info-subtitle",
                        contact: j,
                        showBusinessCheckmark: (0, o.getShowBusinessCheckmarkAsPrimary)(j),
                        selectable: !0
                    })
                });
                return (0, d.jsxs)("div", {
                    className: (0, c.default)(f),
                    children: [(0, d.jsx)("div", {
                        className: (0, c.default)(g),
                        children: n
                    }), a, b]
                })
            };
            var i = n(155505),
                o = n(65001),
                r = n(990055),
                l = n(246009),
                s = n(455036),
                u = n(548360),
                c = a(n(156720)),
                d = n(785893),
                f = {
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "ngycyvoj",
                    marginStart: "svoq16ka"
                },
                p = {
                    display: "ew8mgplc",
                    marginTop: "o9i7y497",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "mpdn4nr2",
                    marginStart: "k6y3xtnu"
                },
                h = {
                    color: "p6nhtbpp",
                    fontSize: "enbbiyaj",
                    lineHeight: "tkq7s68q",
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "inww9tbj",
                    marginStart: "svoq16ka"
                },
                m = {
                    display: "l7jjieqr",
                    color: "eruf1vka",
                    backgroundColor: "mfl62aol",
                    borderTopStartRadius: "l147y7tb",
                    borderTopEndRadius: "mjscftrx",
                    borderBottomEndRadius: "fqwk616h",
                    borderBottomStartRadius: "pkud3j3x",
                    fontSize: "f8jlpxt4",
                    paddingTop: "ocd2b0bc",
                    paddingEnd: "i8go5xc4",
                    paddingBottom: "aa0kojfi",
                    paddingStart: "e1yunedv",
                    lineHeight: "tkq7s68q",
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "inww9tbj",
                    marginStart: "svoq16ka"
                },
                g = {
                    fontSize: "iqrewfee",
                    fontWeight: "sy6s5v3r",
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "or9x5nie",
                    marginStart: "svoq16ka"
                },
                v = {
                    flexGrow: "tvf2evcx"
                },
                x = {
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno"
                }
        },
        761591: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BusinessOpenHours = function(e) {
                var t = e.hours,
                    n = function(e) {
                        switch (e.status) {
                            case o.BUSINESS_OPEN_STATUS.OPEN_24H:
                                return l.fbt._("{open} 24 hours", [l.fbt._param("open", `<span class="${(0,s.default)(d)}">${l.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`)], {
                                    hk: "1aA6f9"
                                });
                            case o.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                                return l.fbt._("{open} by appointment only", [l.fbt._param("open", `<span class="${(0,s.default)(d)}">${l.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`)], {
                                    hk: "z8CGT"
                                });
                            case o.BUSINESS_OPEN_STATUS.OPEN:
                                if (e.openUntil && e.additionalOpen && e.additionalClose) return l.fbt._("{open} until {time}, {additionalOpenTime} - {additionalCloseTime}", [l.fbt._param("open", `<span class="${(0,s.default)(d)}">${l.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`), l.fbt._param("time", p(e.openUntil)), l.fbt._param("additionalOpenTime", p(e.additionalOpen)), l.fbt._param("additionalCloseTime", p(e.additionalClose))], {
                                    hk: "2dJgLQ"
                                });
                                if (e.openUntil) return l.fbt._("{open} until {time}", [l.fbt._param("open", `<span class="${(0,s.default)(d)}">${l.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`), l.fbt._param("time", p(e.openUntil))], {
                                    hk: "3Dd8an"
                                });
                                break;
                            case o.BUSINESS_OPEN_STATUS.CLOSED:
                                return e.opensAt ? l.fbt._("{closed}, opens at {time}", [l.fbt._param("closed", `<span class="${(0,s.default)(c)}">${l.fbt._("Closed now",null,{hk:"2oDK4r"}).toString()}</span>`), l.fbt._param("time", p(e.opensAt))], {
                                    hk: "LvVmY"
                                }) : `<span class="${(0,s.default)(c)}">${l.fbt._("Closed now",null,{hk:"2oDK4r"}).toString()}</span>`;
                            case o.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                                return `<span class="${(0,s.default)(c)}">${l.fbt._("Closed today",null,{hk:"3uCCvH"}).toString()}</span>`
                        }
                        return null
                    }((0, o.getBusinessOpenState)(t));
                if (null == n) return null;
                var a = i.default.sanitize(n.toString());
                return (0, u.jsx)("div", {
                    className: (0, s.default)(f),
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                })
            };
            var i = a(n(554351)),
                o = n(219450),
                r = a(n(758927)),
                l = n(548360),
                s = a(n(156720)),
                u = n(785893),
                c = {
                    color: "mvxzr2tb"
                },
                d = {
                    color: "j5au4wul"
                },
                f = {
                    color: "sbs3osm6",
                    fontSize: "f8jlpxt4",
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "g105fvfm",
                    marginStart: "svoq16ka"
                };

            function p(e) {
                return null == e ? "" : e.toLocaleTimeString(r.default.getLocale(), {
                    hour: "numeric",
                    minute: "2-digit"
                })
            }
        },
        238424: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BusinessProfile = function(e) {
                var t = e.contact,
                    n = (0, O.useContactValues)(e.contact.id, [h.getId, h.getVerifiedLevel, h.getName, h.getVerifiedName]),
                    a = (0, i.default)(n, 4),
                    o = (a[0], a[1], a[2]),
                    u = (a[3], (0, R.useModelValues)(e.businessProfile, ["description", "categories", "website", "email", "stale", "latitude", "longitude", "businessHours", "structuredAddress"]));
                (0, N.useEffect)((function() {
                    new P.ViewBusinessProfileWamEvent({
                        viewBusinessProfileAction: T.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION
                    }).commit()
                }), []);
                var c, f, m, C, M, y, _ = (0, L.jsx)(D, {
                        contact: t
                    }),
                    S = u;
                if (S.stale) c = (0, L.jsx)("div", {
                    className: I.default.contactBusinessInfoSpinner,
                    children: (0, L.jsx)(w.Spinner, {
                        size: 20,
                        stroke: 5
                    })
                });
                else {
                    var E;
                    f = (null === (E = S.categories) || void 0 === E ? void 0 : E.length) ? (0, L.jsx)(F, {
                        icon: (0, L.jsx)(r.BusinessCategoryIcon, {}),
                        children: (0, L.jsx)(v.EmojiText, {
                            selectable: !0,
                            direction: "auto",
                            text: S.categories.map((function(e) {
                                return e.localized_display_name
                            })).join(j.default.t(253))
                        })
                    }) : null, m = S.description ? (0, L.jsx)(F, {
                        icon: (0, L.jsx)(l.BusinessDescriptionIcon, {}),
                        children: (0, L.jsx)(x.ExpandableText, {
                            text: S.description,
                            textLimit: p.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                            children: function(e) {
                                var t = e.textLimit;
                                return (0, L.jsx)(v.EmojiText, {
                                    selectable: !0,
                                    direction: "auto",
                                    breakWord: !0,
                                    text: S.description,
                                    textLimit: t
                                })
                            }
                        })
                    }) : null, S.website && Array.isArray(S.website) && S.website.length && (C = S.website.map((function(e, t) {
                        var n = (0, k.getWebsiteLink)(e),
                            a = (0, L.jsx)(v.EmojiText, {
                                selectable: !0,
                                direction: "auto",
                                text: e
                            }),
                            i = (0, L.jsx)(b.ExternalLink, {
                                className: I.default.link,
                                href: n,
                                children: a
                            });
                        return (0, L.jsx)(F, {
                            icon: (0, L.jsx)(d.BusinessWebsiteIcon, {}),
                            children: i
                        }, t)
                    }))), S.businessHours && (M = (0, L.jsx)(B, {
                        businessHours: S.businessHours
                    }));
                    var A = S.email;
                    if (A) {
                        var G = (0, L.jsx)(v.EmojiText, {
                                selectable: !0,
                                direction: "auto",
                                text: A
                            }),
                            H = (0, L.jsx)(b.ExternalLink, {
                                className: I.default.link,
                                href: `mailto:${A}`,
                                children: G
                            });
                        y = (0, L.jsx)(F, {
                            icon: (0, L.jsx)(s.BusinessEmailIcon, {}),
                            dir: "auto",
                            children: H
                        })
                    }
                }
                var U, W = void 0 !== S.latitude && void 0 !== S.longitude || S.structuredAddress;
                (c || W || f || m || null != M || y || C) && (U = (0, L.jsx)(g.default, {
                    theme: "padding",
                    children: (0, L.jsxs)("div", {
                        className: I.default.contactBusinessInfo,
                        children: [c, (0, L.jsx)(V, {
                            contactName: o,
                            latitude: S.latitude,
                            longitude: S.longitude,
                            structuredAddress: S.structuredAddress
                        }), f, m, M, y, C]
                    })
                }));
                return (0, L.jsxs)(L.Fragment, {
                    children: [(0, L.jsx)(g.default, {
                        children: _
                    }), U]
                })
            };
            var i = a(n(963038)),
                o = n(725536),
                r = n(141193),
                l = n(361648),
                s = n(80943),
                u = n(136068),
                c = n(71100),
                d = n(228855),
                f = n(275394),
                p = a(n(442435)),
                h = n(65001),
                m = a(n(209222)),
                g = a(n(39357)),
                v = n(990055),
                x = n(485009),
                b = n(192070),
                C = n(67497),
                j = a(n(758927)),
                M = a(n(822837)),
                y = n(385764),
                _ = n(628707),
                S = a(n(436115)),
                k = n(823113),
                w = n(96293),
                P = n(636722),
                T = n(447853),
                I = a(n(814060)),
                E = n(548360),
                A = a(n(518122)),
                N = n(667294),
                O = n(302304),
                R = n(853548),
                L = n(785893);

            function D(e) {
                var t = e.contact,
                    n = t.verifiedLevel === c.VERIFIED_LEVEL.HIGH ? E.fbt._("Official business account", null, {
                        hk: "1KruJ"
                    }) : E.fbt._("Business account", null, {
                        hk: "2lzdAg"
                    });
                return (0, L.jsx)(m.default, {
                    testid: "business-title",
                    onClick: _.ModalManager.open((0, L.jsx)(S.default, {
                        contact: t
                    })),
                    side: (0, L.jsx)(C.InfoIcon, {
                        className: I.default.infoIcon,
                        displayInline: !0
                    }),
                    children: n
                })
            }

            function B(e) {
                var t = e.businessHours,
                    n = (0, N.useState)(!0),
                    a = (0, i.default)(n, 2),
                    o = a[0],
                    r = a[1],
                    l = (0, k.getBusinessHours)(t).map((function(e) {
                        var t = e.day,
                            n = e.hours,
                            a = e.first;
                        return !a && o ? null : (0, L.jsx)(G, {
                            day: t,
                            hours: n,
                            first: a,
                            collapsed: o
                        }, t)
                    }));
                return (0, L.jsx)(F, {
                    icon: (0, L.jsx)(u.BusinessHoursIcon, {}),
                    onClick: function() {
                        return r(!o)
                    },
                    children: l
                })
            }
            var G = function(e) {
                var t = e.first ? (0, L.jsx)("div", {
                    className: I.default.businessHoursChevron,
                    role: "button",
                    children: (0, L.jsx)(f.ChevronDownAltIcon, {
                        className: e.collapsed ? "" : I.default.flipSvg,
                        displayInline: !0
                    })
                }) : null;
                return (0, L.jsxs)("div", {
                    className: I.default.businessHoursRow,
                    children: [(0, L.jsx)("div", {
                        className: I.default.businessHoursDay,
                        children: (0, L.jsx)(v.EmojiText, {
                            direction: "auto",
                            text: e.day
                        })
                    }), (0, L.jsx)("div", {
                        className: I.default.businessHoursHours,
                        children: (0, L.jsx)(v.EmojiText, {
                            direction: "auto",
                            text: e.hours
                        })
                    }), t]
                })
            };
            var V = function(e) {
                    var t, n, a, i = e.contactName,
                        r = e.latitude,
                        l = e.longitude,
                        s = e.structuredAddress,
                        u = s ? function(e) {
                            var t = e.streetAddress,
                                n = e.localizedCityName,
                                a = e.zipCode;
                            return t && n && a ? E.fbt._("{streetAddress}, {city} {zipCode}", [E.fbt._param("streetAddress", t), E.fbt._param("city", n), E.fbt._param("zipCode", a)], {
                                hk: "1McVXv"
                            }).toString() : t && n ? E.fbt._("{streetAddress}, {city}", [E.fbt._param("streetAddress", t), E.fbt._param("city", n)], {
                                hk: "1zyKhk"
                            }).toString() : t
                        }(s) : null;
                    (null != r && null != l && (t = (0, L.jsx)("div", {
                        style: {
                            height: 150
                        },
                        className: I.default.businessMap,
                        children: (0, L.jsx)(M.default, {
                            lat: r,
                            lng: l,
                            name: u || i,
                            width: 565,
                            height: 150
                        })
                    })), u) && (a = null != r && null != l ? (0, y.getMapUrl)(r, l, u) : (0, y.getSearchUrl)(u), n = (0, L.jsx)("div", {
                        className: I.default.address,
                        children: (0, L.jsx)(b.ExternalLink, {
                            href: a,
                            children: (0, L.jsx)(v.EmojiText, {
                                selectable: !0,
                                direction: "auto",
                                text: u
                            })
                        })
                    }));
                    return n || t ? (0, L.jsxs)(F, {
                        icon: (0, L.jsx)(o.BusinessAddressIcon, {}),
                        children: [n, t]
                    }) : null
                },
                F = function(e) {
                    return (0, L.jsxs)("div", {
                        className: (0, A.default)(I.default.dataRow, e.className),
                        onClick: e.onClick,
                        children: [(0, L.jsx)("div", {
                            className: I.default.dataRowIcon,
                            children: e.icon
                        }), (0, L.jsx)("div", {
                            className: I.default.dataRowText,
                            children: e.children
                        })]
                    })
                }
        },
        904792: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.contact,
                    a = e.businessProfile,
                    v = e.onOpenStatus,
                    x = e.onProductCatalog,
                    b = e.onProfilePicLoad,
                    C = e.onProfilePicClick,
                    j = e.isMessageYourselfChat,
                    M = e.isPhoneNumberHidden,
                    y = (0, p.useModelValues)(a, ["businessHours", "categories"]),
                    _ = y.businessHours,
                    S = y.categories,
                    k = (0, h.jsx)(o.default, {
                        contact: n,
                        isMessageYourselfChat: j
                    });
                !(0, s.getIsIAS)(n) && !(0, s.getId)(n).isBotContact() && null != S && S.length > 0 && (t = (0, h.jsx)("div", {
                    className: (0, f.default)(g),
                    children: S.map((function(e) {
                        return e.localized_display_name
                    })).join(d.default.t(252))
                }));
                var w = _ ? (0, h.jsx)(r.BusinessOpenHours, {
                        hours: _
                    }) : null,
                    P = n.businessProfile ? (0, h.jsx)(l.default, {
                        contact: n,
                        businessProfile: n.businessProfile,
                        onClick: C,
                        onOpenStatus: v,
                        onLoad: b
                    }) : null;
                return (0, h.jsxs)(c.default, {
                    theme: "padding-no-margin",
                    children: [P, (0, h.jsxs)("div", {
                        className: (0, f.default)(m),
                        children: [k, M && (0, h.jsx)(u.default, {}), t, w, (0, h.jsx)(i.default, {
                            contact: n,
                            onProductCatalog: x,
                            displayRequestPnButton: M
                        })]
                    })]
                })
            };
            var i = a(n(62886)),
                o = a(n(337649)),
                r = n(761591),
                l = a(n(720138)),
                s = n(65001),
                u = a(n(691075)),
                c = a(n(39357)),
                d = a(n(758927)),
                f = a(n(156720)),
                p = n(853548),
                h = n(785893),
                m = {
                    textAlign: "qfejxiq4"
                },
                g = {
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "brac1wpa",
                    marginStart: "svoq16ka",
                    fontSize: "f8jlpxt4",
                    color: "sbs3osm6",
                    lineHeight: "jgi8eev7"
                }
        },
        638163: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onClick,
                    n = e.parentGroupMetadata,
                    a = e.parentGroupChat,
                    b = (0, g.default)(n).subgroupCount,
                    C = (0, v.useModelValues)(a.contact, ["name"]).name,
                    j = (0, o.isIntegritySuspendedCommunity)(a);
                (0, m.useEffect)((function() {
                    (0, d.queryAndUpdateSubgroupsMetadata)(n.id, n.joinedSubgroups)
                }), []);
                var M = h.fbt._("Community", null, {
                    hk: "2P4Qwb"
                });
                return (0, x.jsx)(s.default, {
                    theme: "no-padding",
                    children: (0, x.jsx)(i.default, {
                        testid: "group-info-community-section",
                        image: (0, x.jsx)(l.DetailImage, {
                            id: n.id,
                            shape: l.DetailImageShape.Squircle,
                            size: 60
                        }),
                        primary: (0, x.jsx)(u.EmojiText, {
                            text: C,
                            ellipsify: !0
                        }),
                        onClick: t,
                        theme: "community-home",
                        secondary: (0, x.jsxs)(p.TextSpan, {
                            size: "16",
                            color: "secondary",
                            children: [M, j ? null : (0, x.jsxs)(x.Fragment, {
                                children: [c.default.isRTL() ? " - " : " · ", h.fbt._({
                                    "*": "{count} Groups",
                                    _1: "1 Group"
                                }, [h.fbt._plural(b, "count")], {
                                    hk: "38FdVG"
                                })]
                            })]
                        }),
                        detail: (0, x.jsx)(r.ChevronRightAltIcon, {
                            color: f.SvgColorProp.SECONDARY,
                            directional: !0
                        }),
                        focusable: !0
                    })
                })
            };
            var i = a(n(799328)),
                o = n(124990),
                r = n(519896),
                l = n(207826),
                s = a(n(39357)),
                u = n(990055),
                c = a(n(758927)),
                d = n(380568),
                f = n(401304),
                p = n(558288),
                h = n(548360),
                m = n(667294),
                g = a(n(276296)),
                v = n(853548),
                x = n(785893)
        },
        887119: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.chat,
                    n = e.groupMetadata,
                    a = (0, w.useModelValues)(n, ["id", "parentGroup", "isUnnamed"]),
                    E = a.id,
                    A = a.parentGroup,
                    N = a.isUnnamed,
                    O = (0, k.default)(n.participants, "change:isAdmin", (function() {
                        return n.participants.iAmAdmin()
                    })),
                    R = (0, k.default)(n.participants, ["bulk_add", "bulk_remove", "reset"], (function() {
                        return n.participants.length
                    })),
                    L = (0, s.getABPropConfigValue)("parent_group_min_participants_for_group_entry_point"),
                    D = (0, P.default)();
                if (!(0, f.communitiesEnabled)() || !O || null != A || R < L) return null;
                var B = function() {
                        m.DrawerManager.openDrawerLeft((0, T.jsx)(C.NewCommunityFlowLoadable, {
                            existingGroups: [E]
                        }), {
                            focusType: v.FocusType.TABBABLE
                        }), d.UiCommunityCreationAction.startSession(_.COMMUNITY_CREATION_ENTRYPOINT_TYPE.GROUP_INFO), d.UiCommunityCreationAction.enter(_.COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.GROUP_INFO)
                    },
                    G = function() {
                        var e = (0, o.default)(i.default.mark((function e(n) {
                            var a;
                            return i.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = n, e.next = 3, (0, l.default)((0, j.setGroupSubject)(t, a), D).catch((0, r.catchAbort)((function() {}))).catch((function() {
                                            __LOG__(3)`name_group_modal:onSetSubject failed`
                                        }));
                                    case 3:
                                        x.ModalManager.close(), B();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    V = function() {
                        x.ModalManager.open((0, T.jsx)(h.ConfirmPopup, {
                            onOK: function() {
                                return x.ModalManager.close()
                            },
                            okText: S.fbt._("OK", null, {
                                hk: "4oTrfy"
                            }),
                            children: S.fbt._("Only admins can edit this group's info", null, {
                                hk: "1a2ztg"
                            })
                        }))
                    };
                return (0, T.jsx)(g.default, {
                    theme: "no-padding",
                    children: (0, T.jsx)(u.default, {
                        testid: "group-info-create-community-section",
                        image: (0, T.jsx)(p.CommunitySquircleIcon, {
                            iconXstyle: I.communitySquircle,
                            width: 40,
                            height: 40
                        }),
                        primary: (0, T.jsx)(y.TextSpan, {
                            size: "16",
                            children: S.fbt._("Start a community", null, {
                                hk: "2hSyE2"
                            })
                        }),
                        onClick: function() {
                            if (N) {
                                var e, n, a = S.fbt._("This group was created without a name. Give it a name to create a community.", null, {
                                    hk: "2BkS8"
                                });
                                x.ModalManager.open((0, T.jsx)(b.default, {
                                    chat: t,
                                    subtext: a,
                                    onCancel: function() {
                                        return x.ModalManager.close()
                                    },
                                    onOK: G,
                                    editable: null === (e = t.groupMetadata) || void 0 === e ? void 0 : e.canSetSubject(),
                                    editRestrictionInfo: (null === (n = t.groupMetadata) || void 0 === n ? void 0 : n.restrict) ? V : void 0
                                }))
                            } else B()
                        },
                        theme: "community-create",
                        secondary: (0, T.jsx)(y.TextSpan, {
                            size: "14",
                            color: "secondary",
                            children: S.fbt._("Organize related groups and easily reach them at once", null, {
                                hk: "6BbTr"
                            })
                        }),
                        detail: (0, T.jsx)(c.ChevronRightAltIcon, {
                            color: M.SvgColorProp.SECONDARY,
                            directional: !0
                        }),
                        focusable: !0
                    })
                })
            };
            var i = a(n(887757)),
                o = a(n(348926)),
                r = n(497384),
                l = a(n(704205)),
                s = n(519509),
                u = a(n(799328)),
                c = n(519896),
                d = n(495130),
                f = n(442801),
                p = n(297125),
                h = n(430888),
                m = n(875058),
                g = a(n(39357)),
                v = n(756847),
                x = n(628707),
                b = a(n(706582)),
                C = n(150962),
                j = n(457292),
                M = n(401304),
                y = n(558288),
                _ = n(447853),
                S = n(548360),
                k = (a(n(156720)), a(n(86525))),
                w = n(853548),
                P = a(n(672900)),
                T = n(785893),
                I = {
                    communitySquircle: {
                        color: "fsk8o631"
                    }
                }
        },
        17992: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.chat,
                    a = (0, u.useOptionalModelValues)(n.groupMetadata, ["groupType"]);
                t = (0, o.communitiesEnabled)() && (null == a ? void 0 : a.groupType) === r.GroupType.DEFAULT_ANNOUNCEMENT_GROUP ? (0, c.jsx)("div", {
                    className: (0, s.default)(d),
                    children: l.fbt._("", null, {
                        hk: "4kc4Kr"
                    })
                }) : l.fbt._("Add group description", null, {
                    hk: "BVsoQ"
                });
                return (0, c.jsx)(i.default, {
                    chat: e.chat,
                    showFullDescription: e.showFullDescription,
                    editRestrictionText: l.fbt._("Only admins can edit this group's info", null, {
                        hk: "1a2ztg"
                    }),
                    testid: "group-info-drawer-description-title-input",
                    containerTestId: "group-info-drawer-description-container",
                    emptyValuePlaceholder: t
                })
            };
            var i = a(n(887201)),
                o = n(442801),
                r = n(894286),
                l = n(548360),
                s = a(n(156720)),
                u = n(853548),
                c = n(785893),
                d = {
                    color: "tviruh8d",
                    fontSize: "enbbiyaj"
                }
        },
        208450: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(963038)),
                o = n(519509),
                r = a(n(45655)),
                l = n(762933),
                s = n(800469),
                u = a(n(167740)),
                c = n(988456),
                d = a(n(636244)),
                f = n(282748),
                p = n(442801),
                h = n(65001),
                m = a(n(237120)),
                g = a(n(686866)),
                v = n(58985),
                x = a(n(39357)),
                b = a(n(863250)),
                C = a(n(828083)),
                j = n(977627),
                M = n(217332),
                y = a(n(979163)),
                _ = n(135275),
                S = a(n(638163)),
                k = a(n(887119)),
                w = a(n(17992)),
                P = a(n(809520)),
                T = n(704337),
                I = n(863289),
                E = a(n(911295)),
                A = n(742170),
                N = a(n(343190)),
                O = n(894286),
                R = n(947974),
                L = a(n(758927)),
                D = n(518005),
                B = n(628707),
                G = a(n(295418)),
                V = n(469073),
                F = n(780532),
                H = n(475426),
                U = a(n(408590)),
                W = n(136896),
                Y = n(378776),
                z = n(10993),
                q = n(892356),
                K = n(401304),
                X = n(558288),
                Z = n(521535),
                J = n(236539),
                Q = n(422210),
                $ = n(235387),
                ee = n(71867),
                te = n(14115),
                ne = n(447853),
                ae = n(966808),
                ie = n(403056),
                oe = n(868425),
                re = n(548360),
                le = n(667294),
                se = a(n(156720)),
                ue = n(302304),
                ce = a(n(761251)),
                de = a(n(61407)),
                fe = a(n(279781)),
                pe = n(494092),
                he = n(853548),
                me = a(n(498617)),
                ge = n(785893),
                ve = {
                    body: {
                        flexShrink: "oq44ahr5",
                        flexGrow: "tvf2evcx",
                        flexBasis: "lb5m6g5c",
                        paddingBottom: "s9fl9ege"
                    },
                    announcementGroupDisclaimer: {
                        textAlign: "ljrqcn24",
                        paddingTop: "n1yiu2zv",
                        paddingBottom: "jd93c9cp",
                        paddingEnd: "bcymb0na",
                        paddingStart: "e8k79tju",
                        lineHeight: "jgi8eev7",
                        wordBreak: "cw3vfol9"
                    },
                    lastSectionRow: {
                        marginBottom: "brac1wpa"
                    }
                },
                xe = (0, J.genId)("max_participant_toast");

            function be(e, t) {
                e.contact;
                var n, a, be, Ce = e.onVerification,
                    je = e.onClose,
                    Me = (0, me.default)(),
                    ye = (0, de.default)(),
                    _e = (0, ce.default)(),
                    Se = (0, he.useModelValues)(e.chat, ["mute", "id", "pendingAction", "groupMetadata"]),
                    ke = (0, he.useModelValues)(e.groupMetadata, ["id", "reportToAdminMode", "cachedDeviceCount", "cachedDeviceSizeBucket", "participants", "parentGroup", "pendingParticipants", "announce", "support", "incognito", "groupType", "restrict", "isIncognitoCag", "defaultSubgroup"]),
                    we = (0, ue.useContactValues)(e.contact.id, [h.getName, h.getId, _.getPendingAction]),
                    Pe = (0, i.default)(we, 3),
                    Te = (Pe[0], Pe[1], Pe[2], ke.groupType === O.GroupType.DEFAULT_ANNOUNCEMENT_GROUP),
                    Ie = (0, fe.default)((function() {
                        return new $.UiActionWamEvent({
                            uiActionType: Te ? ne.UI_ACTION_TYPE.DEFAULT_SUBGROUP_INFO_OPEN : ne.UI_ACTION_TYPE.GROUP_INFO_OPEN,
                            uiActionPreloaded: !0,
                            isLid: ke.isIncognitoCag
                        })
                    })),
                    Ee = (0, fe.default)((function() {
                        return new y.default
                    })),
                    Ae = (0, fe.default)((function() {
                        return new y.default
                    })),
                    Ne = (0, le.useRef)(null);
                (0, pe.useListener)(ke.participants, ["bulk_add", "bulk_remove", "reset", "sort", "change:isAdmin", "change:isSuperAdmin"], ye), (0, pe.useListener)(ke.pendingParticipants, ["add", "remove", "reset"], ye), (0, Z.useTsNavigation)({
                    surface: "group-info-drawer",
                    extras: {
                        groupSize: ke.participants.length,
                        typeOfGroup: (0, O.groupTypeToWamEnum)((0, O.getGroupTypeFromGroupMetadata)((0, Y.unproxy)(ke)))
                    }
                });
                var Oe, Re = function() {
                    var e, t = (0, D.getGroupSizeLimit)(ke.groupType),
                        n = null === (e = ke.getParentGroupChat()) || void 0 === e ? void 0 : e.formattedTitle;
                    if (ke.participants.length >= t) {
                        var a = L.default.t(48, {
                            max: t
                        });
                        Q.ToastManager.open((0, ge.jsx)(J.Toast, {
                            msg: a,
                            id: xe
                        }))
                    } else {
                        var i = (0, ge.jsx)(r.default, {
                            chat: (0, Y.unproxy)(Se),
                            pushTransition: "none",
                            popTransition: "none",
                            communityName: n
                        });
                        B.ModalManager.open(i, {
                            transition: "modal-flow"
                        })
                    }
                };
                if ((0, le.useEffect)((function() {
                        (0, s.isIntegritySuspendedDefaultSubgroup)(Se) ? (0, z.openTerminatedCommunityModal)() : (0, s.isTerminatedGroupOrNotMember)(Se) ? (0, s.isSupportGroup)(Se) || ((0, D.isGroupSuspendV2Enabled)() ? (0, q.openSuspendedGroupModalV2)(Se) : (0, q.openTerminatedGroupOrNotMemberModal)()) : (0, s.isSuspendedGroup)(Se) && ((0, D.isGroupSuspendV2Enabled)() ? (0, q.openSuspendedGroupModalV2)(Se) : (0, q.openSuspendedGroupModal)(!0 === (0, s.shouldIncludeEntityIdInAppealRequest)() ? ke.id.user.toString() : null))
                    }), []), (0, le.useEffect)((function() {
                        ke.participants.ensureSorted(), ke.pendingParticipants.ensureSorted()
                    })), (0, le.useEffect)((function() {
                        var e = Ie.current;
                        if (e) {
                            var t = ke.cachedDeviceSizeBucket;
                            null != t && (e.sizeBucket = t), Object.assign(e, (0, ae.getGroupCountMetricsFromGroupMetadata)((0, Y.unproxy)(ke))), e.markUiActionT(), e.commit(), Ie.current = void 0
                        }(0, ie.logUiActionShadowPrivateStatsTestEvents)()
                    }), []), ke.canSetGroupProperty()) {
                    var Le = (0, ge.jsx)(X.TextSpan, {
                            theme: "title",
                            children: re.fbt._("Group settings", null, {
                                hk: "3sS0Vl"
                            })
                        }),
                        De = (0, ge.jsx)(H.SettingsIcon, {
                            color: K.SvgColorProp.SECONDARY,
                            height: 17
                        });
                    Oe = (0, ge.jsx)(u.default, {
                        testid: "group-settings-row",
                        side: "chevron",
                        icon: De,
                        onClick: e.onAdminSetting,
                        title: Le,
                        spaced: !0
                    })
                }
                var Be = null;
                e.onMediaGallery && (Be = (0, ge.jsx)(d.default, {
                    onMediaGallery: e.onMediaGallery,
                    chat: (0, Y.unproxy)(Se)
                }));
                var Ge = Se && (0, l.shouldShowEphemeralSetting)(Se) ? (0, ge.jsx)(M.EphemeralSettingRow, {
                        onClick: e.onEphemeral,
                        chat: Se,
                        groupMetadata: ke,
                        testid: "contact-info-dm-setting-row"
                    }) : null,
                    Ve = null;
                if ((0, p.communitiesEnabled)() && Se && ke.parentGroup && ke.participants.iAmMember()) {
                    var Fe = ke.getParentGroupChat();
                    (null == Fe ? void 0 : Fe.groupMetadata) && (Ve = (0, ge.jsx)(S.default, {
                        onClick: function() {
                            var t;
                            null === (t = e.onCommunityClick) || void 0 === t || t.call(e)
                        },
                        parentGroupMetadata: Fe.groupMetadata,
                        parentGroupChat: Fe
                    }))
                }
                var He = null;
                He = (0, ge.jsx)(C.default, {
                    highlightSurface: ne.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
                    onClick: function() {
                        return (0, V.showEncryptionInfoPopup)(Se)
                    },
                    text: (0, te.isGroupCallEnabled)() ? re.fbt._("Messages and calls are end-to-end encrypted. Click to learn more.", null, {
                        hk: "1l9pwW"
                    }) : re.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "2MtPh9"
                    }),
                    spaced: !0
                }), (0, s.isSupportGroup)(Se) && (He = (0, ge.jsx)(N.default, {
                    onClick: function() {
                        B.ModalManager.open((0, ge.jsx)(b.default, {
                            chat: Se,
                            chatId: Se.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    },
                    spaced: !0
                }));
                var Ue, We = Se.mute.canMute() ? (0, ge.jsx)(G.default, {
                        chat: Se,
                        mute: Se.mute,
                        settings: U.default
                    }) : null,
                    Ye = null;
                if (e.onStarred) {
                    var ze = (0, ge.jsx)(X.TextSpan, {
                            theme: "title",
                            size: "16",
                            children: re.fbt._("Starred messages", null, {
                                hk: "4wVbNG"
                            })
                        }),
                        qe = (0, ge.jsx)(W.StarIcon, {
                            color: K.SvgColorProp.SECONDARY,
                            height: 20
                        });
                    Ye = (0, ge.jsx)(c.ChatInfoDrawerSection, {
                        titleTestId: "section-starred-messages",
                        xstyle: ee.uiPadding.horiz0,
                        children: (0, ge.jsx)(u.default, {
                            testid: "block-starred-messages",
                            side: "chevron",
                            icon: qe,
                            onClick: e.onStarred,
                            title: ze,
                            spaced: !0
                        })
                    })
                }
                if ((0, j.isKeepInChatReadAndUIEnabled)() && (Se.hasKeptMsgs() || (0, l.isEphemeralSettingOn)(Se))) {
                    var Ke = (0, ge.jsx)(X.TextSpan, {
                            theme: "title",
                            size: "16",
                            children: re.fbt._("Kept Messages", null, {
                                hk: "41CBIy"
                            })
                        }),
                        Xe = ke.restrict ? (0, ge.jsx)(X.TextDiv, {
                            theme: "muted",
                            children: re.fbt._("Only admins can keep or unkeep messages in this group.", null, {
                                hk: "2Uhjiy"
                            })
                        }) : null,
                        Ze = (0, ge.jsx)(R.KeepInChatIcon, {
                            color: K.SvgColorProp.SECONDARY,
                            height: 20
                        });
                    Ue = (0, ge.jsx)(c.ChatInfoDrawerSection, {
                        titleTestId: "section-kept-messages",
                        xstyle: [ve.lastSectionRow, ee.uiPadding.horiz0],
                        children: (0, ge.jsx)(u.default, {
                            testid: "block-kept-messages",
                            side: "chevron",
                            icon: Ze,
                            onClick: e.onKept,
                            title: Ke,
                            secondaryTitle: Xe,
                            spaced: !0
                        })
                    })
                }
                var Je = (0, F.isReactionsEnabledInCAG)(Se) ? (0, ge.jsx)(f.PhoneNumberVisibilityIndicatorCag, {
                        chat: Se
                    }) : null,
                    Qe = (0, o.getABPropConfigValue)("report_to_admin_kill_switch") && ke.reportToAdminMode && ke.canSetGroupProperty() ? (0, ge.jsx)(u.default, {
                        testid: "block-rta-messages",
                        side: "chevron",
                        icon: (0, ge.jsx)(oe.WarningIcon, {
                            color: K.SvgColorProp.SECONDARY,
                            height: 16
                        }),
                        onClick: e.onSentForAdminReview,
                        title: (0, ge.jsx)(X.TextSpan, {
                            theme: "title",
                            size: "16",
                            children: re.fbt._("Sent for admin review", null, {
                                hk: "2gzsHo"
                            })
                        }),
                        spaced: !0
                    }) : null,
                    $e = null;
                (We || He || Ge) && ($e = (0, ge.jsxs)(c.ChatInfoDrawerSection, {
                    xstyle: [ve.lastSectionRow, ee.uiPadding.horiz0],
                    children: [We, Ge, Qe, He, Oe, Je]
                }));
                var et = (0, ge.jsx)(P.default, {
                        chat: (0, Y.unproxy)(Se)
                    }),
                    tt = Boolean(null === (n = Se.groupMetadata) || void 0 === n ? void 0 : n.isIncognitoCag) && !(null === (a = Se.groupMetadata) || void 0 === a || null === (be = a.participants) || void 0 === be ? void 0 : be.iAmAdmin()) ? (0, ge.jsx)(x.default, {
                        theme: "transparent",
                        shadow: !1,
                        children: (0, ge.jsx)(X.TextParagraph, {
                            xstyle: ve.announcementGroupDisclaimer,
                            color: "secondary",
                            children: re.fbt._("Only admins can see all participants in this group", null, {
                                hk: "39jP44"
                            })
                        })
                    }) : null;
                return (0, ge.jsx)("div", {
                    role: "complementary",
                    ref: _e,
                    tabIndex: "-1",
                    "aria-label": re.fbt._("Group Info", null, {
                        hk: "3P80cG"
                    }),
                    children: (0, ge.jsxs)(m.default, {
                        ref: t,
                        theme: "striped",
                        testid: "chat-info-drawer",
                        children: [(0, ge.jsx)(v.DrawerHeader, {
                            title: re.fbt._("Group info", null, {
                                hk: "2SfTUZ"
                            }),
                            type: v.DRAWER_HEADER_TYPE.SMALL,
                            rtlFixIfOnDarwin: !0,
                            onCancel: function() {
                                je ? je() : null == Me || Me.requestDismiss()
                            },
                            testid: "group-info-header"
                        }), (0, ge.jsx)(g.default, {
                            children: (0, ge.jsxs)("section", {
                                className: (0, se.default)(ve.body),
                                "data-testid": "group-info-drawer-body",
                                children: [(0, ge.jsx)(E.default, {
                                    chat: (0, Y.unproxy)(Se),
                                    onAdminSetting: e.onAdminSetting,
                                    onAddParticipant: Re,
                                    onClickParticipantsCount: function() {
                                        var e;
                                        null === (e = Ne.current) || void 0 === e || e.scrollIntoView()
                                    }
                                }), Ve, (0, ge.jsx)(w.default, {
                                    chat: (0, Y.unproxy)(Se),
                                    showFullDescription: e.showFullGroupDescription
                                }), Be, Ye, Ue, $e, undefined, (0, ge.jsx)(k.default, {
                                    chat: Se,
                                    groupMetadata: ke
                                }), (0, ge.jsx)(T.GroupInfoParticipantsSection, {
                                    ref: Ne,
                                    chat: (0, Y.unproxy)(Se),
                                    scrollToParticipantList: e.scrollToParticipantList,
                                    flatListController: Ee.current,
                                    onAddParticipant: Re,
                                    onOpenParticipantSearch: function(e) {
                                        B.ModalManager.open((0, ge.jsx)(A.GroupParticipantsFlow, {
                                            chat: (0, Y.unproxy)(Se),
                                            onVerification: Ce,
                                            initialStep: e
                                        }), {
                                            transition: "modal-flow"
                                        })
                                    },
                                    onGroupInviteLink: e.onGroupInviteLink,
                                    onPendingParticipants: e.onPendingParticipants,
                                    onVerification: e.onVerification
                                }), tt, (0, ge.jsx)(I.GroupInfoPendingParticipantsSection, {
                                    chat: (0, Y.unproxy)(Se),
                                    flatListController: Ae.current
                                }), et]
                            })
                        })]
                    }, "contact-info-modal")
                })
            }
            var Ce = (0, le.forwardRef)(be);
            t.default = Ce
        },
        809520: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.chat,
                    a = null !== (t = (0, S.useOptionalModelValues)(n.groupMetadata, ["parentGroup", "participants"])) && void 0 !== t ? t : {},
                    i = a.participants,
                    l = a.parentGroup,
                    u = (null == i ? void 0 : i.iAmAdmin()) && (0, o.isCommunityAnnouncementGroup)(n),
                    c = (0, w.jsx)(T, {
                        chat: n
                    }),
                    d = (0, o.isTerminatedGroup)(n) ? null : (0, w.jsx)(P, {
                        chat: n,
                        showAdditionalAction: !u
                    }),
                    f = !(0, s.communitiesEnabled)() || (0, o.isCommunityAnnouncementGroup)(n) || null == l ? null : (0, w.jsx)(I, {
                        chat: n,
                        parentGroup: l
                    });
                return (0, w.jsxs)(r.ChatInfoDrawerButtonsSection, {
                    children: [f, c, d]
                })
            };
            var i = a(n(963038)),
                o = n(800469),
                r = n(988456),
                l = n(896674),
                s = n(442801),
                u = n(584973),
                c = n(519973),
                d = n(517247),
                f = a(n(921491)),
                p = n(635048),
                h = n(518005),
                m = n(628707),
                g = a(n(502807)),
                v = n(517841),
                x = n(233565),
                b = n(892356),
                C = n(949059),
                j = n(548360),
                M = n(667294),
                y = a(n(276296)),
                _ = a(n(86525)),
                S = n(853548),
                k = a(n(672900)),
                w = n(785893);

            function P(e) {
                var t = e.chat,
                    n = e.showAdditionalAction;
                return (0, w.jsx)(c.DrawerButton, {
                    testid: "li-report-spam",
                    color: "danger",
                    icon: (0, w.jsx)(C.ThumbsDownIcon, {}),
                    theme: "chat-info",
                    onClick: function() {
                        m.ModalManager.open((0, w.jsx)(g.default, {
                            isMessage: !1,
                            isGroupChat: !0,
                            showAdditionalActionCheckbox: n,
                            onReport: function() {
                                (0, v.sendReport)({
                                    chat: t,
                                    spamFlow: x.SpamFlow.GroupInfoReport
                                }), m.ModalManager.close()
                            },
                            onReportExitClear: function() {
                                (0, v.sendSpamExitClear)(t, x.SpamFlow.GroupInfoReport), m.ModalManager.close()
                            },
                            onCancel: function() {
                                return m.ModalManager.close()
                            }
                        }))
                    },
                    children: j.fbt._("Report group", null, {
                        hk: "23NLqw"
                    })
                })
            }

            function T(e) {
                var t, n = (0, S.useModelValues)(e.chat, ["isReadOnly"]),
                    a = function() {
                        var t, n = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.getParentGroupChat();
                        null != n && (0, o.isCommunityAnnouncementGroup)(e.chat) && (0, s.communityAnnouncementImprovementM3Enabled)() ? m.ModalManager.open((0, w.jsx)(p.LeaveCommunityModal, {
                            chat: n
                        })) : l.Cmd.deleteOrExitChat(e.chat)
                    };
                return n.isReadOnly ? t = j.fbt._("Delete group", null, {
                    hk: "2MKJYs"
                }) : !(0, o.isCommunityAnnouncementGroup)(n) && (0, o.isSuspendedGroup)(n) && (0, h.isGroupSuspendV2Enabled)() ? (t = j.fbt._("Exit group and delete", null, {
                    hk: "1Szubg"
                }), a = function() {
                    (0, b.openExitAndDeleteGroupModal)(e.chat)
                }) : t = (0, o.isCommunityAnnouncementGroup)(n) && (0, s.communityAnnouncementImprovementM3Enabled)() ? j.fbt._("Exit community", null, {
                    hk: "3KaKZa"
                }) : j.fbt._("Exit group", null, {
                    hk: "3EOkxm"
                }), (0, w.jsx)(c.DrawerButton, {
                    testid: "li-delete-group",
                    icon: (0, w.jsx)(d.ExitIcon, {
                        directional: !0
                    }),
                    color: "danger",
                    theme: "chat-info",
                    onClick: a,
                    children: t
                })
            }

            function I(e) {
                var t = e.chat,
                    n = e.parentGroup,
                    a = (0, k.default)(),
                    o = (0, S.useModelValues)(t, ["groupMetadata", "isReadOnly", "id", "formattedTitle"]),
                    r = o.groupMetadata,
                    l = o.isReadOnly,
                    s = o.id,
                    p = o.formattedTitle,
                    h = f.default.get(n.toString()),
                    m = Boolean((0, _.default)(null == h ? void 0 : h.participants, ["bulk_add", "bulk_remove"], (function() {
                        return null == h ? void 0 : h.participants.iAmAdmin()
                    }))),
                    g = Boolean((0, _.default)(null == r ? void 0 : r.participants, ["bulk_add", "bulk_remove"], (function() {
                        return null == r ? void 0 : r.participants.iAmAdmin()
                    }))),
                    v = (0, y.default)(h),
                    x = v.joinedSubgroups,
                    b = v.unjoinedSubgroups,
                    C = v.subgroupCount,
                    P = (0, M.useState)(!1),
                    T = (0, i.default)(P, 2),
                    I = T[0],
                    E = T[1];
                if (l || null == x || null == b || !m && !g) return null;
                return (0, w.jsx)(c.DrawerButton, {
                    testid: "li-remove-group-from-community",
                    icon: (0, w.jsx)(d.ExitIcon, {
                        directional: !0
                    }),
                    disabled: I,
                    color: "danger",
                    theme: "chat-info",
                    onClick: function() {
                        I || a.aborted || ((0, u.handleRemoveSubgroup)({
                            parentId: n,
                            currentSubgroupCount: C,
                            removedSubgroupWid: s,
                            removedSubgroupTitle: p,
                            setLoading: E,
                            iAmCommunityAdmin: m
                        }), a.aborted)
                    },
                    children: j.fbt._("Remove from community", null, {
                        hk: "3xZmj5"
                    })
                })
            }
        },
        704337: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GroupInfoParticipantsSection = void 0;
            var i = a(n(963038)),
                o = a(n(347999)),
                r = n(281098),
                l = n(519509),
                s = n(109677),
                u = n(894995),
                c = a(n(799328)),
                d = n(800469),
                f = n(988456),
                p = a(n(694585)),
                h = a(n(142466)),
                m = n(665912),
                g = n(896674),
                v = n(665122),
                x = n(442801),
                b = n(515918),
                C = n(430888),
                j = n(65001),
                M = n(247211),
                y = n(116384),
                _ = n(633645),
                S = n(990055),
                k = n(191649),
                w = n(577407),
                P = n(135275),
                T = n(742170),
                I = n(894286),
                E = a(n(758927)),
                A = n(384616),
                N = n(680294),
                O = n(628707),
                R = n(700980),
                L = n(863710),
                D = n(194056),
                B = n(793812),
                G = n(486222),
                V = a(n(138211)),
                F = a(n(733634)),
                H = n(636979),
                U = a(n(964851)),
                W = n(378776),
                Y = n(401304),
                z = n(136058),
                q = n(776097),
                K = a(n(728056)),
                X = n(228277),
                Z = n(201860),
                J = a(n(560911)),
                Q = n(548360),
                $ = n(667294),
                ee = (a(n(156720)), a(n(86525))),
                te = a(n(61407)),
                ne = a(n(279781)),
                ae = n(494092),
                ie = n(853548),
                oe = n(785893),
                re = {
                    pendingParticipantsIcon: {
                        backgroundColor: "k6px2m13",
                        color: "cwwc04gk"
                    }
                };

            function le(e) {
                var t = e.data,
                    n = e.participants,
                    a = e.handleParticipantClick,
                    i = e.menuEnabled,
                    o = e.handleParticipantMenu,
                    r = e.contextMenu,
                    l = e.active,
                    s = e.elevatedPushNamesEnabled,
                    u = void 0 !== s && s,
                    c = t.id,
                    d = n.get(c);
                if (!d) throw new w.UnknownDataError(t);
                var f = d.contact,
                    p = !!r && J.default.equals(f.id, r.contactId);
                return (0, oe.jsx)(h.default, {
                    active: l,
                    contact: f,
                    participant: d,
                    onClick: a,
                    contextEnabled: function() {
                        return i(f)
                    },
                    contextMenu: p,
                    onContext: function(e) {
                        return o(e, f)
                    },
                    theme: "chat-info",
                    showNotifyName: !0,
                    waitIdle: !0,
                    showStatusRingAroundProfilePhoto: !0,
                    participantCollection: n,
                    elevatedPushNamesEnabled: u
                }, d.id.toString())
            }
            var se = (0, $.forwardRef)((function(e, t) {
                var n, a, h, w = (0, ie.useModelValues)((0, o.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["support", "size", "id", "membershipApprovalMode", "membershipApprovalRequests", "isUnnamed", "isLidAddressingMode"]),
                    J = w.membershipApprovalMode,
                    se = w.membershipApprovalRequests,
                    ce = (0, ne.default)((function() {
                        return new U.default([], (function(e) {
                            return e.id.toString()
                        }))
                    })),
                    de = (0, o.default)(null === (n = e.chat.groupMetadata) || void 0 === n ? void 0 : n.participants, "props.chat.groupMetadata?.participants"),
                    fe = de.toArray();
                (0, v.hideCagMaskedParticipants)() && !0 !== w.isLidAddressingMode && (fe = de.filter((function(e) {
                    var t = e.id;
                    return (0, X.isMeAccount)(t) || !t.isLid()
                })));
                var pe = null !== (a = null == w ? void 0 : w.size) && void 0 !== a ? a : 0,
                    he = (null == de ? void 0 : de.iAmAdmin()) ? de.length : pe,
                    me = (0, te.default)();
                (0, ae.useListener)(de, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", me);
                var ge = (0, $.useState)(!0),
                    ve = (0, i.default)(ge, 2),
                    xe = ve[0],
                    be = ve[1],
                    Ce = (0, $.useRef)(),
                    je = (0, $.useState)(),
                    Me = (0, i.default)(je, 2),
                    ye = Me[0],
                    _e = Me[1],
                    Se = (0, d.isCommunityAnnouncementGroup)(e.chat);
                (0, $.useEffect)((function() {
                    e.scrollToParticipantList && Ce.current && (0, M.scrollIntoViewIfNeeded)(Ce.current, !1)
                }), [e.scrollToParticipantList]), (0, $.useImperativeHandle)(t, (function() {
                    return {
                        scrollIntoView: function() {
                            var e;
                            null === (e = Ce.current) || void 0 === e || e.scrollIntoView()
                        }
                    }
                }));
                var ke = (0, ee.default)(se, ["add", "remove", "reset"], (function() {
                        return se.length
                    })),
                    we = (0, Z.useShowPastParticipants)(e.chat),
                    Pe = (0, $.useMemo)((function() {
                        var e, t = [],
                            n = [];
                        fe.forEach((function(a) {
                            (0, j.getIsMe)(a.contact) ? e = a: a.isAdmin ? t.push(a) : n.push(a)
                        }));
                        var a = [];
                        return e && a.push(e), a = a.concat(t, n), ue(fe) && xe && (a = a.slice(0, f.INFO_DRAWER_MAX_ROWS)), ce.current.init(a.map((function(e) {
                            return e.contact
                        }))), a.map((function(e) {
                            return {
                                itemKey: e.id.toString(),
                                id: e.id,
                                height: 68
                            }
                        }))
                    }), [xe, fe]);
                if (w.isSuspendedOrTerminated()) return null;
                var Te, Ie, Ee, Ae, Ne = (0, oe.jsx)(H.SearchIcon, {
                    color: Y.SvgColorProp.SECONDARY
                });
                if (de.canAdd() && !w.support) {
                    var Oe = (0, oe.jsx)(F.default, {
                        theme: "compact",
                        children: (0, oe.jsx)(s.AddUserIcon, {
                            directional: !0
                        })
                    });
                    Te = (0, oe.jsx)(c.default, {
                        testid: "add-user",
                        image: Oe,
                        theme: "chat-info",
                        primary: Q.fbt._("Add participant", null, {
                            hk: "48ECfz"
                        }),
                        onClick: e.onAddParticipant,
                        focusable: !0
                    })
                }
                if (de.iAmAdmin() && e.onGroupInviteLink && !w.support) {
                    var Re = (0, oe.jsx)(F.default, {
                        theme: "compact",
                        children: (0, oe.jsx)(A.LinkIcon, {})
                    });
                    Ie = (0, oe.jsx)(c.default, {
                        image: Re,
                        theme: "chat-info",
                        primary: Q.fbt._("Invite to group via link", null, {
                            hk: "3vDtFL"
                        }),
                        onClick: e.onGroupInviteLink,
                        focusable: !0
                    })
                }
                if (de.iAmAdmin() && J && ke > 0 && (0, l.getABPropConfigValue)("group_join_request_m2") && (Ee = (0, oe.jsx)(c.default, {
                        image: (0, oe.jsx)(F.default, {
                            xstyle: re.pendingParticipantsIcon,
                            theme: "compact",
                            children: (0, oe.jsx)(G.PendingParticipantsIcon, {})
                        }),
                        theme: "chat-info",
                        primary: (0, l.getABPropConfigValue)("group_join_request_m3") ? Q.fbt._("Pending requests", null, {
                            hk: "1Q1Qwz"
                        }) : Q.fbt._("Pending participants", null, {
                            hk: "3aWcdI"
                        }),
                        primaryDetail: (0, oe.jsx)(z.Tag, {
                            round: !0,
                            children: ke
                        }),
                        onClick: e.onPendingParticipants,
                        focusable: !0
                    })), ue(fe) && xe) {
                    var Le = fe.length <= 20,
                        De = fe.length - f.INFO_DRAWER_MAX_ROWS;
                    Ae = (0, oe.jsx)(p.default, {
                        numMore: De,
                        onClick: function() {
                            Le ? be(!1) : e.onOpenParticipantSearch(T.ParticipantsFlowStep.Participants)
                        },
                        viewAll: !Le
                    })
                } else we && (Ae = (0, oe.jsx)(N.ListButton, {
                    onClick: function() {
                        e.onOpenParticipantSearch(T.ParticipantsFlowStep.PastParticipants)
                    },
                    testid: "row-past-participants",
                    children: Q.fbt._("View past participants", null, {
                        hk: "fYGd4"
                    })
                }));
                var Be, Ge = function(e) {
                        var t = de.get(e.id);
                        return !!t && (de.canPromote(t) || de.canDemote(t) || de.canRemove(t) || de.canVerifyIdentity(t))
                    },
                    Ve = function(t, n) {
                        var a = de.assertGet(n.id);
                        if (Ge(n)) {
                            var i, o = [];
                            if (de.canPromote(a)) {
                                var r;
                                if (Se) {
                                    var l;
                                    r = Q.fbt._("Make admin", null, {
                                        hk: "1cHVQ6"
                                    });
                                    var s = null === (l = e.chat.groupMetadata) || void 0 === l ? void 0 : l.getParentGroupChat();
                                    o.push((0, oe.jsx)(y.DropdownItem, {
                                        testid: "mi-grp-promote-community-admin",
                                        action: function() {
                                            (0, B.openCommunityParticipantPromoteConfirmation)(s, a, de, a.contact)
                                        },
                                        children: r
                                    }, "promote"))
                                } else r = Q.fbt._("Make group admin", null, {
                                    hk: "oCC4C"
                                }), o.push((0, oe.jsx)(y.DropdownItem, {
                                    testid: "mi-grp-promote-admin",
                                    action: function() {
                                        var t = E.default.t(198, {
                                            participant: (0, P.getFormattedName)(a.contact),
                                            subject: e.chat.contact.name
                                        });
                                        O.ModalManager.open((0, oe.jsx)(C.ConfirmPopup, {
                                            onOK: function() {
                                                return t = !0, a.isAdmin || (a.contact.pendingAction++, (0, R.promoteParticipants)(e.chat, [a]).finally((function() {
                                                    a.contact.pendingAction--
                                                }))), void(t && O.ModalManager.close());
                                                var t
                                            },
                                            okText: E.default.t(423),
                                            onCancel: function() {
                                                return O.ModalManager.close()
                                            },
                                            cancelText: Q.fbt._("Cancel", null, {
                                                hk: "H0gNq"
                                            }),
                                            children: (0, oe.jsx)(S.EmojiText, {
                                                text: t
                                            })
                                        }))
                                    },
                                    children: r
                                }, "promote"))
                            }
                            if (de.canRemove(a)) i = !0 === Se && (0, x.communityAnnouncementImprovementM3Enabled)() ? Q.fbt._("Remove from community", null, {
                                hk: "WikVd"
                            }) : E.default.t(427), o.push((0, oe.jsx)(y.DropdownItem, {
                                testid: "mi-grp-remove-participant",
                                action: function() {
                                    var t, i = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.getParentGroupChat();
                                    if (!0 === Se && null != i && (0, x.communityAnnouncementImprovementM3Enabled)()) O.ModalManager.open((0, oe.jsx)(V.default, {
                                        contact: n,
                                        parentGroupChat: i
                                    }));
                                    else {
                                        var o = E.default.t(199, {
                                            participant: (0, P.getFormattedName)(a.contact),
                                            subject: e.chat.contact.name
                                        });
                                        O.ModalManager.open((0, oe.jsx)(C.ConfirmPopup, {
                                            onOK: function() {
                                                return t = !0, a.contact.pendingAction++, (0, R.removeParticipants)(e.chat, [a]).finally((function() {
                                                    a.contact.pendingAction--
                                                })), void(t && O.ModalManager.close());
                                                var t
                                            },
                                            okText: E.default.t(531),
                                            onCancel: function() {
                                                return O.ModalManager.close()
                                            },
                                            cancelText: Q.fbt._("Cancel", null, {
                                                hk: "H0gNq"
                                            }),
                                            children: (0, oe.jsx)(S.EmojiText, {
                                                text: o
                                            })
                                        }))
                                    }
                                },
                                children: i
                            }, "remove"));
                            if (de.canDemote(a)) {
                                var u = Q.fbt._("Dismiss as admin", null, {
                                    hk: "2YfmwL"
                                });
                                if (Se) {
                                    var c, d = null === (c = e.chat.groupMetadata) || void 0 === c ? void 0 : c.getParentGroupChat();
                                    o.push((0, oe.jsx)(y.DropdownItem, {
                                        testid: "mi-grp-community-demote",
                                        action: function() {
                                            return (0, D.openCommunityParticipantDemoteConfirmation)(a, d)
                                        },
                                        children: u
                                    }, "demote-admin"))
                                } else o.push((0, oe.jsx)(y.DropdownItem, {
                                    testid: "mi-grp-demote",
                                    action: function() {
                                        a.isAdmin && (a.contact.pendingAction++, (0, R.demoteParticipants)(e.chat, [a]).finally((function() {
                                            a.contact.pendingAction--
                                        })))
                                    },
                                    children: u
                                }, "demote-admin"))
                            }
                            if (de.canVerifyIdentity(a)) {
                                var f = Q.fbt._("Verify Security Code", null, {
                                    hk: "1vTVgt"
                                });
                                o.push((0, oe.jsx)(y.DropdownItem, {
                                    testid: "mi-grp-verify-identify",
                                    action: function() {
                                        e.onVerification && e.onVerification(a.contact)
                                    },
                                    children: f
                                }, "verify-identity"))
                            }
                            _e({
                                contactId: n.id,
                                menu: o,
                                anchor: t.anchor,
                                event: t.event
                            })
                        }
                    },
                    Fe = function(t, n) {
                        var a = (0, d.getOneToOneContactFromGroupContact)(n.id);
                        (0, k.findChat)(a, "groupInfoParticipants").then((function(t) {
                            (0, l.getABPropConfigValue)("unified_user_profile_navigation_enabled") ? g.Cmd.chatInfoDrawer(t, !1, !1, (0, W.unproxy)(e.chat)): g.Cmd.openChatFromUnread(t).then((function(e) {
                                e && ((0, u.btmThreadsLoggingEnabled)() && b.ComposeBoxActions.addMsgSendingLogAttributes(t, {
                                    handleMultiple: function() {
                                        (0, m.handleActivitiesForChatThreadLogging)([{
                                            activityType: "groupMembershipReplies",
                                            ts: (0, r.unixTime)(),
                                            chatId: t.id
                                        }])
                                    }
                                }), b.ComposeBoxActions.focus(t))
                            }))
                        }))
                    },
                    He = (0, _.elevatedPushNamesM2Enabled)(e.chat),
                    Ue = (null === (h = e.chat.groupMetadata) || void 0 === h ? void 0 : h.groupType) === I.GroupType.DEFAULT_ANNOUNCEMENT_GROUP ? he : de.length,
                    We = Q.fbt._({
                        "*": "Participants list: {group-participants} participants",
                        _1: "Participants list: 1 participant"
                    }, [Q.fbt._plural(Ue, "group-participants")], {
                        hk: "3CCjNY"
                    }),
                    Ye = de.length ? (0, oe.jsxs)(f.ChatInfoDrawerListSection, {
                        ref: Ce,
                        titleTestId: "section-participants",
                        testid: "group-info-participants-section",
                        title: Q.fbt._({
                            "*": "{number} participants",
                            _1: "1 participant"
                        }, [Q.fbt._plural(Ue, "number")], {
                            hk: "bcYCT"
                        }),
                        titleOnClick: function() {
                            e.onOpenParticipantSearch(T.ParticipantsFlowStep.Participants)
                        },
                        subtitle: Ne,
                        children: [Te, Ie, Ee, (0, oe.jsx)(L.NavigableFlatList, {
                            ariaLabel: We,
                            flatListController: e.flatListController,
                            listData: Pe,
                            onRenderItem: function(e) {
                                return (0, oe.jsx)(le, {
                                    active: ce.current,
                                    data: e,
                                    participants: de,
                                    handleParticipantClick: Fe,
                                    menuEnabled: Ge,
                                    handleParticipantMenu: Ve,
                                    contextMenu: ye,
                                    elevatedPushNamesEnabled: He
                                })
                            },
                            selection: ce.current,
                            rotateList: !0
                        }), Ae]
                    }) : null;
                return ye && (Be = (0, oe.jsx)(q.UIE, {
                    displayName: "ChatContextMenu",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: function() {
                        _e(null)
                    },
                    children: (0, oe.jsx)(K.default, {
                        contextMenu: ye
                    })
                })), (0, oe.jsxs)(oe.Fragment, {
                    children: [Ye, Be]
                })
            }));

            function ue(e) {
                return e.length > f.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
            }
            t.GroupInfoParticipantsSection = se, se.displayName = "GroupInfoParticipantsSection"
        },
        911295: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a, i, o = (0, G.useModelValues)(e.chat, ["labels"]),
                    r = (0, G.useOptionalModelValues)(e.chat.groupMetadata, ["size", "creation"]),
                    l = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.groupType,
                    s = null === (n = e.chat.groupMetadata) || void 0 === n ? void 0 : n.participants,
                    u = (0, D.default)();
                (0, B.useListener)(s, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", u);
                var c = null !== (a = null == s ? void 0 : s.length) && void 0 !== a ? a : 0,
                    d = null !== (i = null == r ? void 0 : r.size) && void 0 !== i ? i : 0,
                    f = (null == s ? void 0 : s.iAmAdmin()) ? c : d,
                    p = O.fbt._("Group", null, {
                        hk: "DNiv2"
                    });
                l === C.GroupType.DEFAULT_ANNOUNCEMENT_GROUP && (p = O.fbt._("Announcements", null, {
                    hk: "GNIKa"
                }));
                var h = O.fbt._({
                    "*": "{number} participants",
                    _1: "1 participant"
                }, [O.fbt._plural(l === C.GroupType.DEFAULT_ANNOUNCEMENT_GROUP ? f : c, "number")], {
                    hk: "bcYCT"
                });
                return (0, F.jsx)(g.default, {
                    theme: "padding-large",
                    children: (0, F.jsxs)(v.FlexColumn, {
                        align: "center",
                        children: [(0, F.jsx)(W, {
                            chat: e.chat,
                            xstyle: U.photo,
                            sendGroupProfilePictureLoggingEvent: function(t, n, a) {
                                var i, o, r, l = null === (i = e.chat) || void 0 === i || null === (o = i.groupMetadata) || void 0 === o ? void 0 : o.creation,
                                    u = new Date(1e3 * (null != l ? l : 0)),
                                    c = new Intl.DateTimeFormat("en", {
                                        year: "numeric"
                                    }).format(u),
                                    d = new Intl.DateTimeFormat("en", {
                                        month: "2-digit"
                                    }).format(u),
                                    p = new Intl.DateTimeFormat("en", {
                                        day: "2-digit"
                                    }).format(u),
                                    h = null != l ? `${c}-${d}-${p}` : "",
                                    m = (0, N.numberToPreciseSizeBucket)(f),
                                    g = null !== (r = null == s ? void 0 : s.iAmAdmin()) && void 0 !== r && r;
                                new b.GroupProfilePictureWamEvent({
                                    groupCreationDs: h,
                                    groupProfileAction: t,
                                    preciseGroupSizeBucket: m,
                                    isAdmin: g,
                                    hasProfilePicture: n,
                                    profilePictureType: a
                                }).commit()
                            }
                        }), (0, F.jsx)(z, {
                            chat: e.chat
                        }), (0, F.jsx)("div", {
                            "data-testid": "group-info-top-card-subtitle",
                            className: (0, L.default)(U.groupSecondary),
                            children: (0, F.jsx)(m.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, F.jsxs)(E.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: [p, (null == r ? void 0 : r.isSuspendedOrTerminated()) ? null : (0, F.jsxs)(F.Fragment, {
                                        children: [j.default.isRTL() ? " - " : " · ", (0, F.jsx)(A.default, {
                                            onClick: e.onClickParticipantsCount,
                                            children: h
                                        })]
                                    })]
                                })
                            })
                        }), (0, F.jsx)(M.default, {
                            labels: o.labels
                        })]
                    })
                })
            };
            var i = a(n(887757)),
                o = a(n(348926)),
                r = a(n(963038)),
                l = n(497384),
                s = n(63520),
                u = a(n(347999)),
                c = a(n(704205)),
                d = n(519509),
                f = n(800469),
                p = n(442801),
                h = n(430888),
                m = n(160967),
                g = a(n(39357)),
                v = n(208188),
                x = a(n(652486)),
                b = n(457911),
                C = n(894286),
                j = a(n(758927)),
                M = a(n(628580)),
                y = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = H(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                        } a.default = e, n && n.set(e, a);
                    return a
                }(n(576498)),
                _ = n(628707),
                S = n(246009),
                k = n(762738),
                w = n(942518),
                P = n(639017),
                T = n(176273),
                I = n(457292),
                E = n(558288),
                A = a(n(83938)),
                N = n(874818),
                O = n(548360),
                R = n(667294),
                L = a(n(156720)),
                D = a(n(61407)),
                B = n(494092),
                G = n(853548),
                V = a(n(672900)),
                F = n(785893);

            function H(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (H = function(e) {
                    return e ? n : t
                })(e)
            }
            var U = {
                photo: {
                    marginBottom: "njub1g37"
                },
                groupSecondary: {
                    lineHeight: "a4ywakfo",
                    marginTop: "ma4rpf0l",
                    textAlign: "qfejxiq4"
                }
            };

            function W(e) {
                var t = (0, G.useModelValues)(e.chat, ["isReadOnly"]),
                    n = (0, G.useModelValues)(e.chat.contact, ["id", "profilePicThumb"]),
                    a = (0, G.useModelValues)(e.chat.contact.profilePicThumb, ["imgFull"]),
                    i = (0, G.useModelValues)((0, u.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["groupType"]),
                    o = (0, R.useState)(!1),
                    d = (0, r.default)(o, 2),
                    h = d[0],
                    m = d[1],
                    g = (0, R.useState)(!1),
                    v = (0, r.default)(g, 2),
                    x = v[0],
                    b = v[1],
                    j = (0, V.default)(),
                    M = i.groupType === C.GroupType.DEFAULT_ANNOUNCEMENT_GROUP,
                    _ = (0, p.communitiesEnabled)() && M ? w.PhotoPickerType.DEFAULT_ANNOUNCEMENT_GROUP : w.PhotoPickerType.GROUP,
                    S = t.isReadOnly || !a.canDelete() && !a.canSet() || (0, f.isSupportGroup)(t) || M || i.isSuspendedOrTerminated();
                return (0, F.jsx)("div", {
                    className: (0, L.default)(e.xstyle),
                    children: (0, F.jsx)(P.PhotoPickerLoadable, {
                        type: _,
                        id: n.id,
                        attachToChat: !0,
                        pending: x,
                        startImage: a.imgFull,
                        readOnly: S,
                        onImageSet: function(e, t) {
                            var n;
                            b(!0), n = e && t ? (0, T.setProfilePic)(a, e, t) : (0, T.deleteProfilePic)(a), (0, c.default)(n, j).catch((0, l.catchAbort)((function() {}))).catch((0, s.filteredCatch)(y.ActionError, (function() {
                                __LOG__(3)`GroupInfoDrawer: failed to set/delete group image`, m(!h)
                            }))).finally((function() {
                                b(!1)
                            }))
                        },
                        sendGroupProfilePictureLoggingEvent: e.sendGroupProfilePictureLoggingEvent
                    }, String(h))
                })
            }
            var Y = {
                marginTop: "hymafltn",
                marginEnd: "jnwc1y2a",
                marginBottom: "ngycyvoj",
                marginStart: "svoq16ka"
            };

            function z(e) {
                var t = (0, G.useModelValues)(e.chat.contact, ["name"]),
                    n = (0, G.useModelValues)((0, u.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["creation", "restrict", "support", "isUnnamed", "participants"]),
                    a = (0, V.default)(),
                    r = function() {
                        var n = (0, o.default)(i.default.mark((function n(o) {
                            var r;
                            return i.default.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if ((r = o) !== t.name) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 3:
                                        return n.next = 5, (0, c.default)((0, I.setGroupSubject)(e.chat, r), a).catch((0, l.catchAbort)((function() {}))).catch((function() {
                                            __LOG__(3)`group_info_drawer:onSetSubject failed`
                                        }));
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }(),
                    s = function() {
                        _.ModalManager.open((0, F.jsx)(h.ConfirmPopup, {
                            onOK: function() {
                                return _.ModalManager.close()
                            },
                            okText: O.fbt._("OK", null, {
                                hk: "4oTrfy"
                            }),
                            children: O.fbt._("Only admins can edit this group's info", null, {
                                hk: "1a2ztg"
                            })
                        }))
                    };
                return n.support ? (0, F.jsx)(E.TextHeader, {
                    className: (0, L.default)(Y),
                    level: "2",
                    theme: "large",
                    children: (0, F.jsx)(S.GroupName, {
                        chat: e.chat,
                        groupMetadata: n,
                        breakWord: !0
                    })
                }) : n.isUnnamed && (0, d.getABPropConfigValue)("ugr_enabled") ? (0, F.jsx)(x.default, {
                    subject: (0, k.calculateUnnamedGroupParticipantsList)(n).toLocaleString(),
                    onSave: r,
                    editable: n.canSetSubject(),
                    editRestrictionInfo: n.restrict ? s : void 0
                }) : (0, F.jsx)(x.default, {
                    subject: t.name || e.chat.formattedTitle,
                    onSave: r,
                    editable: n.canSetSubject(),
                    editRestrictionInfo: n.restrict ? s : void 0
                })
            }
        },
        20159: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(963038)),
                o = a(n(347999)),
                r = n(800469),
                l = n(896674),
                s = n(665122),
                u = a(n(628852)),
                c = n(116384),
                d = n(633645),
                f = n(990055),
                p = n(191649),
                h = n(135275),
                m = a(n(758927)),
                g = n(628707),
                v = n(700980),
                x = n(194056),
                b = n(793812),
                C = n(776097),
                j = a(n(728056)),
                M = n(228277),
                y = n(201860),
                _ = n(548360),
                S = n(667294),
                k = (a(n(156720)), a(n(61407))),
                w = n(494092),
                P = n(785893),
                T = {
                    dropdownText: {
                        display: "p357zi0d",
                        alignItems: "gndfcl4n"
                    }
                };

            function I(e, t) {
                var n, a = e.chat,
                    l = e.onVerification,
                    p = e.onPastParticipants,
                    I = function(e, t) {
                        var n, a = (0, S.useState)(null),
                            l = (0, i.default)(a, 2),
                            s = l[0],
                            u = l[1],
                            d = function(t, n) {
                                t.isAdmin || (t.contact.pendingAction++, (0, v.promoteParticipants)(e, [t]).finally((function() {
                                    t.contact.pendingAction--
                                }))), n && g.ModalManager.close()
                            },
                            p = function(t, n) {
                                t.contact.pendingAction++, (0, v.removeParticipants)(e, [t]).finally((function() {
                                    t.contact.pendingAction--
                                })), n && g.ModalManager.close()
                            },
                            y = function(t) {
                                t.isAdmin && (t.contact.pendingAction++, (0, v.demoteParticipants)(e, [t]).finally((function() {
                                    t.contact.pendingAction--
                                })))
                            },
                            k = function() {
                                u(null)
                            };
                        s && (n = (0, P.jsx)(C.UIE, {
                            displayName: "ChatContextMenu",
                            escapable: !0,
                            popable: !0,
                            dismissOnWindowResize: !0,
                            requestDismiss: k,
                            children: (0, P.jsx)(j.default, {
                                contextMenu: s
                            })
                        }));
                        return [n, function(n, a) {
                            var i, l = (0, o.default)(e.groupMetadata, "chat.groupMetadata").participants,
                                s = l.assertGet(a.id.toString()),
                                v = [],
                                C = (0, r.isCommunityAnnouncementGroup)(e);
                            if (l.canPromote(s))
                                if (C) {
                                    var j;
                                    i = _.fbt._("Make admin", null, {
                                        hk: "1cHVQ6"
                                    });
                                    var S = null === (j = e.groupMetadata) || void 0 === j ? void 0 : j.getParentGroupChat();
                                    v.push((0, P.jsx)(c.DropdownItem, {
                                        testid: "mi-grp-promote-community-admin",
                                        action: function() {
                                            (0, b.openCommunityParticipantPromoteConfirmation)(S, s, l, s.contact)
                                        },
                                        children: i
                                    }, "promote"))
                                } else i = m.default.t(423), v.push((0, P.jsx)(c.DropdownItem, {
                                    testid: "mi-grp-promote-admin",
                                    action: function() {
                                        return d(s, !1)
                                    },
                                    children: i
                                }, "promote"));
                            if (l.canRemove(s)) {
                                var k = m.default.t(427);
                                v.push((0, P.jsx)(c.DropdownItem, {
                                    testid: "mi-grp-remove-participant",
                                    action: function() {
                                        return p(s, !1)
                                    },
                                    children: k
                                }, "remove"))
                            }
                            if (l.canDemote(s)) {
                                var w = function() {
                                        return y(s)
                                    },
                                    I = _.fbt._("Dismiss as admin", null, {
                                        hk: "243sNl"
                                    });
                                if (C) {
                                    var A, N = null === (A = e.groupMetadata) || void 0 === A ? void 0 : A.getParentGroupChat();
                                    v.push((0, P.jsx)(c.DropdownItem, {
                                        testid: "mi-grp-community-demote",
                                        action: function() {
                                            return (0, x.openCommunityParticipantDemoteConfirmation)(s, N)
                                        },
                                        children: I
                                    }, "demote-admin"))
                                } else v.push((0, P.jsx)(c.DropdownItem, {
                                    testid: "mi-grp-demote",
                                    action: w,
                                    children: I
                                }, "demote-admin"))
                            }
                            if (l.canVerifyIdentity(s)) {
                                var O = _.fbt._("Verify Security Code", null, {
                                    hk: "1vTVgt"
                                });
                                v.push((0, P.jsx)(c.DropdownItem, {
                                    testid: "mi-grp-verify-identify",
                                    action: function() {
                                        g.ModalManager.close(), null == t || t(s.contact)
                                    },
                                    children: O
                                }, "verify-identity"))
                            }
                            var R = (0, M.isMeAccount)(s.contact.id) ? _.fbt._("Message yourself", null, {
                                hk: "LDbjA"
                            }) : _.fbt._("Message {author}", [_.fbt._param("author", (0, h.getFormattedShortName)(s.contact))], {
                                hk: "1kM7Cg"
                            });
                            v.push((0, P.jsx)(c.DropdownItem, {
                                ariaLabel: R,
                                action: E.bind(null, s.contact.id),
                                addSpacing: !0,
                                children: (0, P.jsx)(f.EmojiText, {
                                    text: R,
                                    xstyle: T.dropdownText
                                })
                            }, "message author"));
                            var L = "click" === n.type ? void 0 : n.target;
                            u({
                                contactId: a.id,
                                menu: v,
                                anchor: L,
                                event: n.anchor ? void 0 : n
                            })
                        }]
                    }(a, l),
                    A = (0, i.default)(I, 2),
                    N = A[0],
                    O = A[1],
                    R = (0, k.default)(),
                    L = null === (n = a.groupMetadata) || void 0 === n ? void 0 : n.participants;
                (0, w.useListener)(L, ["bulk_add", "bulk_remove", "reset"], R);
                var D, B = (0, y.useShowPastParticipants)(a),
                    G = (0, s.hideCagMaskedParticipants)(),
                    V = null == L ? void 0 : L.map((function(e) {
                        return e.contact
                    }));
                return B && (D = {
                    text: _.fbt._("View past participants", null, {
                        hk: "fYGd4"
                    }),
                    onClick: p
                }), (0, P.jsxs)(P.Fragment, {
                    children: [(0, P.jsx)(u.default, {
                        ref: t,
                        title: _.fbt._("Search Participants", null, {
                            hk: "M6lxB"
                        }),
                        filter: function(e) {
                            var t, n = null == L ? void 0 : L.get(e.id.toString());
                            return null != n && (!G || !1 !== (null === (t = a.groupMetadata) || void 0 === t ? void 0 : t.isLidAddressingMode) || ((0, M.isMeAccount)(n.id) || !n.id.isLid()))
                        },
                        onCancel: function() {
                            g.ModalManager.close()
                        },
                        openContextOnClick: !0,
                        contextEnabled: function() {
                            return !1
                        },
                        contextMenu: function(e) {
                            return !(0, M.isMeAccount)(e)
                        },
                        onContext: O,
                        showNotifyName: !0,
                        elevatedPushNamesEnabled: (0, d.elevatedPushNamesM2Enabled)(a),
                        listenForAdminChange: !0,
                        participantCollection: (0, o.default)(L, "participants"),
                        contacts: V,
                        button: D,
                        showStatusRingAroundProfilePhoto: !0
                    }), N]
                })
            }
            var E = function(e) {
                var t = (0, r.getOneToOneContactFromGroupContact)(e);
                (0, p.findChat)(t, "groupParticipantSearch").then((function(e) {
                    g.ModalManager.close(), l.Cmd.openChatFromUnread(e)
                }))
            };
            var A = (0, S.forwardRef)(I);
            t.default = A
        },
        742170: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GroupParticipantsFlow = function(e) {
                var t, n = e.chat,
                    a = e.onVerification,
                    c = e.initialStep,
                    d = (0, l.useFlow)(c),
                    f = (0, i.default)(d, 2),
                    p = f[0],
                    h = f[1];
                if (!h.step) return null;
                switch (h.step) {
                    case u.Participants:
                        t = (0, s.jsx)(o.default, {
                            chat: n,
                            onVerification: a,
                            onPastParticipants: function() {
                                return h.push(u.PastParticipants)
                            }
                        });
                        break;
                    case u.PastParticipants:
                        var m = h.stackSize() > 1,
                            g = function() {
                                return h.pop()
                            };
                        t = m ? (0, s.jsx)(r.default, {
                            chat: n,
                            onBack: g
                        }) : (0, s.jsx)(r.default, {
                            chat: n,
                            onClose: g
                        })
                }
                return (0, s.jsx)(p, {
                    flow: h,
                    children: t
                })
            }, t.ParticipantsFlowStep = void 0;
            var i = a(n(963038)),
                o = a(n(20159)),
                r = a(n(9216)),
                l = n(520188),
                s = n(785893),
                u = n(76672).Mirrored(["Participants", "PastParticipants"]);
            t.ParticipantsFlowStep = u
        },
        132471: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.participant,
                    n = e.elevatedPushNamesEnabled,
                    a = void 0 !== n && n,
                    v = t.contact,
                    x = (0, m.useContactValues)(v.id, [l.getId, l.getShowBusinessCheckmarkAsPrimary, l.getName, l.getPushname, l.getNotifyName, c.getFormattedName, c.getFormattedPhone]),
                    b = (0, i.default)(x, 7),
                    C = b[0],
                    j = b[1],
                    M = (b[2], b[3], b[4], b[5], b[6]),
                    y = (0, g.jsx)(f.Name, {
                        contact: v,
                        showBusinessCheckmark: j,
                        showLabel: !0,
                        titlify: !0,
                        ellipsify: !0,
                        you: !0,
                        showNotifyName: a,
                        elevatedPushNamesEnabled: a
                    }),
                    _ = r.Clock.pastParticipantOnDateAtTime(t.leaveTs, function(e) {
                        var t = e.id.equals((0, p.getMeUser)());
                        if (e.leaveReason === d.LeaveReason.Left) return t ? h.fbt._("Left", null, {
                            hk: "3R2igg"
                        }) : h.fbt._("Left", null, {
                            hk: "3kbdqU"
                        });
                        return t ? h.fbt._("Removed", null, {
                            hk: "4vPnHl"
                        }) : h.fbt._("Removed", null, {
                            hk: "3LiTU6"
                        })
                    }(t)),
                    S = (0, u.pushNameCanBeUsed)(v) && a ? M : null;
                return (0, g.jsx)(o.default, {
                    image: (0, g.jsx)(s.DetailImage, {
                        id: C
                    }),
                    primary: y,
                    secondary: _,
                    secondaryDetail: S
                })
            };
            var i = a(n(963038)),
                o = a(n(799328)),
                r = n(87330),
                l = n(65001),
                s = n(207826),
                u = n(633645),
                c = n(135275),
                d = n(825910),
                f = n(246009),
                p = n(228277),
                h = n(548360),
                m = n(302304),
                g = n(785893)
        },
        9216: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(963038)),
                o = n(665122),
                r = n(633645),
                l = n(192070),
                s = n(212390),
                u = n(577407),
                c = n(208188),
                d = a(n(132471)),
                f = a(n(758927)),
                p = a(n(952175)),
                h = n(692889),
                m = a(n(188971)),
                g = n(71867),
                v = n(228277),
                x = n(548360),
                b = n(667294),
                C = (a(n(156720)), a(n(269959))),
                j = a(n(86525)),
                M = n(785893),
                y = "HEADER",
                _ = "ROW",
                S = "DISCLAIMER";

            function k(e, t) {
                var n, a = e.chat,
                    l = e.onBack,
                    s = e.onClose,
                    u = null === (n = a.groupMetadata) || void 0 === n ? void 0 : n.pastParticipants,
                    c = (0, C.default)(),
                    d = (0, i.default)(c, 2),
                    m = d[0],
                    g = d[1],
                    b = (0, j.default)(u, ["buld_add", "bulk_remove", "reset"], (function() {
                        var e, t = f.default.accentFold(m),
                            n = (0, h.numberSearch)(t),
                            a = null !== (e = null == u ? void 0 : u.getValidRecords().filter((function(e) {
                                var a = !t || e.contact.searchMatch(t, n);
                                return (0, o.hideCagMaskedParticipants)() ? ((0, v.isMeAccount)(e.id) || !e.id.isLid()) && a : a
                            }))) && void 0 !== e ? e : [];
                        if (!a.length) return [];
                        var i = [];
                        return i.push({
                            type: y,
                            header: x.fbt._("Past participants", null, {
                                hk: "2k91Dw"
                            }),
                            itemKey: "list_header"
                        }), a.forEach((function(e, t) {
                            return i.push({
                                type: _,
                                participant: e,
                                itemKey: `${e.id.toString()}_${t}`
                            })
                        })), i.push({
                            type: S
                        }), i
                    }), [m]);
                return (0, M.jsx)(p.default, {
                    ref: t,
                    title: x.fbt._("Search past participants", null, {
                        hk: "1d6pYh"
                    }),
                    data: b,
                    renderItem: function(e) {
                        return (0, M.jsx)(w, {
                            data: e,
                            elevatedPushNamesEnabled: (0, r.elevatedPushNamesM2Enabled)(a)
                        })
                    },
                    emptyState: (0, M.jsx)(I, {}),
                    onSearch: g,
                    searchPlaceholder: f.default.t(545),
                    onBack: l,
                    onCancel: s
                })
            }

            function w(e) {
                var t, n = e.data,
                    a = e.elevatedPushNamesEnabled;
                switch (n.type) {
                    case y:
                        return (0, M.jsx)(m.default, {
                            header: null !== (t = n.header) && void 0 !== t ? t : "",
                            uppercase: !1
                        });
                    case _:
                        return (0, M.jsx)(d.default, {
                            participant: n.participant,
                            elevatedPushNamesEnabled: a
                        });
                    case S:
                        return (0, M.jsx)(T, {});
                    default:
                        throw new u.UnknownDataError(n)
                }
            }
            var P = {
                row: {
                    height: "graaj7av",
                    backgroundColor: "ihvf49ua"
                },
                disclaimer: {
                    fontSize: "f8jlpxt4",
                    color: "pm5hny62"
                },
                empty: {
                    fontSize: "enbbiyaj",
                    color: "eruf1vka"
                }
            };

            function T() {
                return (0, M.jsx)(c.FlexRow, {
                    xstyle: [P.row, P.disclaimer, g.uiPadding.horiz15],
                    align: "center",
                    justify: "center",
                    children: (0, M.jsx)("span", {
                        children: x.fbt._("People who left or were removed in the last 60 days. {=m2}", [x.fbt._implicitParam("=m2", (0, M.jsx)(l.ExternalLink, {
                            href: (0, s.getHowToExitAndDeleteGroupsFaq)(),
                            children: x.fbt._("Learn More", null, {
                                hk: "44tT41"
                            })
                        }))], {
                            hk: "gdXOy"
                        })
                    })
                })
            }

            function I() {
                return (0, M.jsxs)(M.Fragment, {
                    children: [(0, M.jsx)(m.default, {
                        header: x.fbt._("Past participants", null, {
                            hk: "2k91Dw"
                        }),
                        uppercase: !1
                    }), (0, M.jsx)(c.FlexRow, {
                        xstyle: [P.row, P.empty],
                        align: "center",
                        justify: "center",
                        children: (0, M.jsx)("span", {
                            children: x.fbt._("No results found", null, {
                                hk: "1Wo2fc"
                            })
                        })
                    }), (0, M.jsx)(T, {})]
                })
            }
            var E = (0, b.forwardRef)(k);
            t.default = E
        },
        343190: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onClick,
                    n = e.spaced,
                    a = (0, u.jsx)(l.TextSpan, {
                        theme: "title",
                        children: s.fbt._("Security", null, {
                            hk: "2BYJDI"
                        })
                    }),
                    c = (0, u.jsx)(l.TextDiv, {
                        theme: "muted",
                        children: s.fbt._("Click to learn how messages and calls are secured.", null, {
                            hk: "1UxhjE"
                        })
                    }),
                    d = (0, u.jsx)(o.LockIcon, {
                        color: r.SvgColorProp.SECONDARY,
                        height: 20
                    });
                return (0, u.jsx)(i.default, {
                    icon: d,
                    onClick: t,
                    title: a,
                    secondaryTitle: c,
                    spaced: n
                })
            };
            var i = a(n(167740)),
                o = n(609318),
                r = n(401304),
                l = n(558288),
                s = n(548360),
                u = n(785893)
        },
        201860: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useShowPastParticipants = function(e) {
                var t = (0, r.useOptionalModelValues)(e.groupMetadata, ["participants", "pastParticipants", "groupType"]),
                    n = null == t ? void 0 : t.pastParticipants;
                if (!(0, o.default)(n, ["bulk_add", "bulk_remove", "reset"], (function() {
                        return Boolean(null == n ? void 0 : n.getValidRecords().length)
                    }))) return !1;
                if ((null == t ? void 0 : t.groupType) === i.GroupType.DEFAULT_ANNOUNCEMENT_GROUP) return Boolean(null == t ? void 0 : t.participants.iAmAdmin());
                return !0
            };
            var i = n(894286),
                o = a(n(86525)),
                r = n(853548)
        },
        40912: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, u.useModelValues)(e.mediaData, ["mediaStage", "renderableUrl"]);
                return (0, c.jsx)(o.default, {
                    mediaData: t,
                    placeholderRenderer: p,
                    children: function(t) {
                        return (0, c.jsx)(f, {
                            url: t,
                            msg: e.msg
                        })
                    }
                })
            };
            var i = a(n(758927)),
                o = a(n(121510)),
                r = n(789999),
                l = a(n(768140)),
                s = a(n(518122)),
                u = n(853548),
                c = n(785893),
                d = function(e) {
                    e.stopPropagation()
                };

            function f(e) {
                var t = e.url,
                    n = e.msg;
                return (0, c.jsx)(r.AudioTag, {
                    url: t,
                    className: l.default.mediaViewerAudio,
                    onClick: d,
                    autoPlay: !0,
                    msg: n,
                    controls: !0,
                    testId: "media-audio",
                    children: i.default.t(141)
                })
            }

            function p() {
                return (0, c.jsx)("div", {
                    className: (0, s.default)(l.default.imageAudio, l.default.mediaViewerPlaceholder),
                    onClick: d
                })
            }
        },
        747324: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.msg,
                    n = e.onHightlightCloseEnd,
                    a = e.msgIndexInAlbum,
                    o = e.onViewOnceInfoClick,
                    r = e.onClose,
                    s = (0, ge.useRef)(null),
                    c = (0, Ce.useMsgValues)(e.msg.id, [D.getId, D.getStar, D.getIsGroupMsg, D.getType, D.getIsGif, D.getIsViewOnce, D.getSender, S.getSenderObj, D.getT, D.getIsSentByMe, D.getIsStickerMsg, D.getBroadcastId, S.getIsUnsentMedia, D.getIsKept, D.getMessageSecret]),
                    d = (0, i.default)(c, 15),
                    f = (d[0], d[1], d[2]),
                    p = (d[3], d[4], d[5]),
                    h = d[6],
                    m = (d[7], d[8]),
                    v = (d[9], d[10], d[11], d[12], d[13], d[14], (0, S.getChat)(t)),
                    x = (0, be.useModelValues)(e.mediaData, ["filehash", "mediaStage", "renderableUrl"]),
                    C = (0, ge.useState)(null),
                    M = (0, i.default)(C, 2),
                    y = M[0],
                    _ = M[1],
                    k = (0, ge.useState)(null),
                    w = (0, i.default)(k, 2),
                    P = w[0],
                    I = w[1],
                    E = (0, ge.useRef)(null),
                    N = function() {
                        _(null)
                    },
                    O = function() {
                        I(null)
                    },
                    R = (0, je.default)((function(e) {
                        (0, z.canReactToMessage)(e) && I({
                            dirY: b.DirY.BOTTOM,
                            dirX: b.DirX.CENTER,
                            type: b.MenuType.ReactionPicker,
                            menu: (0, Me.jsx)(Y.ReactionsPanel, {
                                msgId: e.id.toString(),
                                onSelection: function(t) {
                                    (0, $.sendReactionToMsg)(e, t).catch((function() {})), O()
                                }
                            }),
                            flipOnRTL: !0,
                            anchor: E.current
                        })
                    }));
                (0, xe.useListener)(s.current, "animationend", (function() {
                    n()
                }));
                var B = t.displayName({
                    showShortName: !0,
                    withPushName: !0
                });
                f && (B += " @ " + v.title());
                var G, V = (0, Me.jsx)(pe.XViewerIcon, {
                    className: e.isHighlightClose ? he.default.highlightClose : null,
                    containerRef: s
                });
                y ? G = (0, Me.jsx)(re.UIE, {
                    displayName: "MsgReaction",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: N,
                    children: (0, Me.jsx)(le.default, {
                        contextMenu: y
                    })
                }) : P && (G = (0, Me.jsx)(re.UIE, {
                    displayName: "MsgReactionPicker",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: O,
                    children: (0, Me.jsx)(le.default, {
                        contextMenu: P
                    })
                }));
                return (0, Me.jsxs)("div", {
                    className: he.default.mediaPanelHeader,
                    children: [(0, Me.jsx)("div", {
                        className: he.default.info,
                        children: (0, Me.jsx)(l.default, {
                            idle: !0,
                            image: (0, Me.jsx)(g.DetailImage, {
                                id: h,
                                size: 40
                            }),
                            primary: (0, Me.jsx)(j.EmojiText, {
                                ellipsify: !0,
                                text: B
                            }),
                            secondary: u.Clock.relativeDateAndTimeStr(m),
                            theme: "media"
                        })
                    }), (0, Me.jsx)("div", {
                        className: he.default.mediaPanelTools,
                        children: (0, Me.jsxs)(A.MenuBar, {
                            theme: "strong",
                            children: [(0, Me.jsx)(Ve, {
                                isMediaDownloadable: function() {
                                    return !p && (!!(0, L.canDownloadMsg)(t) && (!!x.renderableUrl || x.mediaStage === T.MEDIA_DATA_STAGE.RESOLVED))
                                },
                                msg: t,
                                msgIndexInAlbum: a,
                                onClose: r,
                                onViewOnceInfoClick: o,
                                openReactionTray: function() {
                                    if ((0, z.canReactToMessage)(t)) {
                                        var e = {
                                            dirY: b.DirY.BOTTOM,
                                            dirX: b.DirX.CENTER,
                                            type: b.MenuType.ReactionSendTray,
                                            menu: (0, Me.jsx)(te.SendReactionsTrayContainer, {
                                                msg: t,
                                                selectedCallback: function(e) {
                                                    e !== ee.MORE_REACTIONS ? (0, $.sendReactionToMsg)(t, e).catch((function() {})) : self.setTimeout((function() {
                                                        R(t)
                                                    }), 150), N()
                                                }
                                            }),
                                            flipOnRTL: !1,
                                            anchor: E.current
                                        };
                                        _(e)
                                    }
                                },
                                sendReactionButtonRef: E
                            }), (0, Me.jsx)(A.MenuBarItem, {
                                testid: "btn-close",
                                icon: V,
                                title: me.fbt._("Close", null, {
                                    hk: "19Jpec"
                                }),
                                onClick: e.onClose
                            })]
                        }, "media-panel-header")
                    }), G]
                })
            };
            var i = a(n(963038)),
                o = n(774260),
                r = n(222876),
                l = a(n(799328)),
                s = n(377748),
                u = n(87330),
                c = n(896674),
                d = n(158020),
                f = n(515918),
                p = n(430888),
                h = n(356953),
                m = a(n(947688)),
                g = n(207826),
                v = n(94767),
                x = n(875058),
                b = n(482510),
                C = n(116384),
                j = n(990055),
                M = n(709894),
                y = n(720135),
                _ = n(10508),
                S = n(530236),
                k = n(734778),
                w = n(659954),
                P = a(n(758927)),
                T = n(966454),
                I = n(450062),
                E = a(n(116769)),
                A = n(199479),
                N = n(994291),
                O = n(518005),
                R = n(628707),
                L = n(791673),
                D = n(763249),
                B = n(741942),
                G = n(154553),
                V = n(945629),
                F = n(462599),
                H = n(873994),
                U = n(662846),
                W = n(122269),
                Y = n(723096),
                z = n(780532),
                q = n(340888),
                K = a(n(76372)),
                X = a(n(851826)),
                Z = n(975178),
                J = a(n(557696)),
                Q = n(299585),
                $ = n(179074),
                ee = n(243326),
                te = n(799904),
                ne = n(517841),
                ae = n(233565),
                ie = n(242826),
                oe = n(378776),
                re = n(776097),
                le = a(n(728056)),
                se = n(160962),
                ue = n(318592),
                ce = n(43361),
                de = n(735537),
                fe = n(447853),
                pe = (n(635959), n(714771)),
                he = a(n(183424)),
                me = n(548360),
                ge = n(667294),
                ve = a(n(559292)),
                xe = n(494092),
                be = n(853548),
                Ce = n(726017),
                je = a(n(206827)),
                Me = n(785893),
                ye = n(76672).Mirrored(["MenuBar", "Dropdown"]);

            function _e(e) {
                var t = (0, S.getChat)(e);
                t.composeQuotedMsg = e, f.ComposeBoxActions.focus(t)
            }

            function Se(e) {
                return me.fbt._("Report {contact_name}", [me.fbt._param("contact_name", e.displayName())], {
                    hk: "3Dqyjo"
                })
            }

            function ke(e) {
                var t = e.isMediaDownloadable,
                    n = e.msg,
                    a = e.onClose,
                    i = e.openReactionTray,
                    o = e.sendReactionButtonRef;
                return (0, Me.jsxs)(Me.Fragment, {
                    children: [(0, B.canReplyMsg)(n) ? (0, Me.jsx)(Te, {
                        msg: n,
                        onClose: a
                    }) : null, (0, L.canStarMsg)(n) ? (0, Me.jsx)(Oe, {
                        msg: n
                    }) : null, n.canShowKeepOrUnkeepOption() ? (0, Me.jsx)(Ne, {
                        msg: n
                    }) : null, (0, L.canPinMsg)(n) ? (0, Me.jsx)(Re, {
                        msg: n
                    }) : null, (0, z.canReactToMessage)(n) ? (0, Me.jsx)(Ae, {
                        msg: n,
                        openReactionTray: i,
                        sendReactionButtonRef: o
                    }) : null, (0, Me.jsx)(Ie, {
                        msg: n,
                        onClose: a
                    }), (0, L.canForwardMsg)(n) ? (0, Me.jsx)(Le, {
                        msg: n
                    }) : null, (0, Me.jsx)(Fe, {
                        isMediaDownloadable: t,
                        isAlbumMedia: !0,
                        msg: n,
                        onClose: a
                    })]
                })
            }

            function we(e) {
                var t = e.isMediaDownloadable,
                    n = e.msg,
                    a = e.onClose,
                    i = e.openReactionTray,
                    o = e.sendReactionButtonRef;
                return (0, Me.jsxs)(Me.Fragment, {
                    children: [(0, D.getIsStickerMsg)(n) ? null : (0, Me.jsx)(Pe, {
                        msg: n,
                        type: ye.MenuBar,
                        onClose: a
                    }), (0, D.getIsStickerMsg)(n) ? (0, Me.jsx)(Te, {
                        msg: n,
                        onClose: a
                    }) : null, (0, L.canStarMsg)(n) ? (0, Me.jsx)(Oe, {
                        msg: n
                    }) : null, (0, L.canPinMsg)(n) ? (0, Me.jsx)(Re, {
                        msg: n
                    }) : null, n.canShowKeepOrUnkeepOption() ? (0, Me.jsx)(Ne, {
                        msg: n
                    }) : null, (0, D.getIsStickerMsg)(n) ? (0, Me.jsx)(Ie, {
                        msg: n,
                        onClose: a
                    }) : null, (0, z.canReactToMessage)(n) ? (0, Me.jsx)(Ae, {
                        msg: n,
                        openReactionTray: i,
                        sendReactionButtonRef: o
                    }) : null, (0, L.canForwardMsg)(n) ? (0, Me.jsx)(Le, {
                        msg: n
                    }) : null, (0, D.getIsStickerMsg)(n) ? null : (0, Me.jsx)(Ee, {
                        isMediaDownloadable: t,
                        msg: n,
                        type: ye.MenuBar
                    }), (0, L.canReportMsg)(n) && (0, O.messageLevelReportingEnabled)() ? (0, Me.jsx)(Fe, {
                        isMediaDownloadable: t,
                        isAlbumMedia: !1,
                        msg: n,
                        onClose: a
                    }) : null]
                })
            }

            function Pe(e) {
                var t = e.msg,
                    n = e.type,
                    a = e.onClose,
                    i = function(e) {
                        e.stopPropagation(), a(), x.DrawerManager.existsDrawerRight((function(e) {
                            e && 2 === d.Column.column && x.DrawerManager.closeDrawerRight()
                        }));
                        var n = (0, s.getSearchContext)((0, S.getChat)(t), (0, oe.unproxy)(t));
                        c.Cmd.openChatAt((0, S.getChat)(t), n).then((function(e) {
                            e && f.ComposeBoxActions.focus((0, S.getChat)(t))
                        }))
                    };
                return n === ye.Dropdown ? (0, Me.jsx)(C.DropdownItem, {
                    action: i,
                    children: me.fbt._("Go to message", null, {
                        hk: "B1anG"
                    })
                }) : (0, Me.jsx)(A.MenuBarItem, {
                    icon: (0, Me.jsx)(r.BubbleIcon, {}),
                    title: me.fbt._("Go to message", null, {
                        hk: "B1anG"
                    }),
                    onClick: i
                })
            }

            function Te(e) {
                var t = e.msg,
                    n = e.onClose;
                return (0, Me.jsx)(A.MenuBarItem, {
                    icon: (0, Me.jsx)(q.ReplyIcon, {}),
                    title: me.fbt._("Reply", null, {
                        hk: "1C7DPa"
                    }),
                    onClick: function() {
                        n(), (0, o.delayMs)(I.CLOSE_ANIMATION_DURATION).then(_e.bind(null, (0, oe.unproxy)(t)))
                    }
                })
            }

            function Ie(e) {
                var t = e.msg,
                    n = e.onClose;
                return (0, Me.jsx)(A.MenuBarItem, {
                    icon: (0, Me.jsx)(h.DeleteIcon, {}),
                    title: me.fbt._("Delete", null, {
                        hk: "2KhPUX"
                    }),
                    onClick: function() {
                        R.ModalManager.open((0, Me.jsx)(m.default, {
                            chat: (0, S.getChat)(t),
                            msgList: [(0, oe.unproxy)(t)],
                            onDelete: n
                        })), Z.UiRevokeActionHelper.startSession(), Z.UiRevokeActionHelper.messageSelected()
                    }
                })
            }

            function Ee(e) {
                var t = e.msg,
                    n = e.type,
                    a = e.isMediaDownloadable,
                    i = function(e) {
                        e.stopPropagation(), M.FileSaver.initDownload((0, oe.unproxy)(t))
                    };
                return a() ? n === ye.Dropdown ? (0, Me.jsx)(C.DropdownItem, {
                    action: i,
                    disabled: !a(),
                    children: me.fbt._("Download", null, {
                        hk: "1g5Jix"
                    })
                }) : (0, Me.jsx)(A.MenuBarItem, {
                    icon: (0, Me.jsx)(v.DownloadIcon, {}),
                    title: me.fbt._("Download", null, {
                        hk: "1g5Jix"
                    }),
                    disabled: !a(),
                    onClick: i
                }) : null
            }

            function Ae(e) {
                var t = e.msg,
                    n = e.openReactionTray,
                    a = e.sendReactionButtonRef;
                return t.type === G.MSG_TYPE.STICKER ? null : (0, Me.jsx)(A.MenuBarItem, {
                    testid: "reaction-entry-point",
                    icon: (0, Me.jsx)(W.ReactionsMediaIcon, {
                        containerRef: a,
                        width: 20
                    }),
                    title: me.fbt._("React", null, {
                        hk: "1mI4Nl"
                    }),
                    onClick: function() {
                        n()
                    }
                })
            }
            var Ne = function(e) {
                var t, n, a, i = e.msg;
                if ((0, D.getIsKept)(i) && i.canShowUnkeepOption()) t = (0, Me.jsx)(se.UndoKeepInChatMediaIcon, {}), n = function(e) {
                    e.stopPropagation(), (0, k.runUndoKeepInChatUX)((0, oe.unproxy)(i), fe.KIC_ENTRY_POINT_TYPE.MEDIA)
                }, a = me.fbt._("Unkeep", null, {
                    hk: "1eGZng"
                });
                else {
                    if ((0, D.getIsKept)(i) || !i.canShowKeepOption()) return null;
                    t = (0, Me.jsx)(w.KeepInChatMediaIcon, {}), n = function(e) {
                        e.stopPropagation(), (0, k.runKeepInChatUX)((0, oe.unproxy)(i), fe.KIC_ENTRY_POINT_TYPE.MEDIA)
                    }, a = me.fbt._("Keep", null, {
                        hk: "1a48ae"
                    })
                }
                return (0, Me.jsx)(A.MenuBarItem, {
                    icon: t,
                    title: a,
                    onClick: n
                }, t)
            };

            function Oe(e) {
                var t, n, a, i = e.msg;
                return i.star ? (t = function(e) {
                    e.stopPropagation(), c.Cmd.sendUnstarMsgs((0, S.getChat)(i), [(0, oe.unproxy)(i)])
                }, n = (0, Me.jsx)(ce.UnstarBtnIcon, {}), a = P.default.t(607)) : (t = function(e) {
                    e.stopPropagation(), c.Cmd.sendStarMsgs((0, S.getChat)(i), [(0, oe.unproxy)(i)])
                }, n = (0, Me.jsx)(ie.StarBtnIcon, {}), a = P.default.t(585)), (0, Me.jsx)(A.MenuBarItem, {
                    icon: n,
                    title: a,
                    onClick: t
                }, a)
            }

            function Re(e) {
                var t, n, a, i = e.msg;
                return (0, ve.default)(i.id) ? (t = function(e) {
                    e.stopPropagation(), (0, Q.sendPinInChatMsg)(i, U.Message$PinInChatMessage$Type.UNPIN_FOR_ALL).catch((function(e) {
                        __LOG__(4, void 0, new Error)`Error while unpinning a message: ${e}`
                    }))
                }, n = (0, Me.jsx)(ue.UnpinnedIcon, {}), a = me.fbt._("Unpin", null, {
                    hk: "3oWx14"
                })) : (t = function(e) {
                    e.stopPropagation(), R.ModalManager.open((0, Me.jsx)(F.PinMessageModal, {
                        msg: i
                    }))
                }, n = (0, Me.jsx)(H.Pinned3Icon, {}), a = me.fbt._("Pin", null, {
                    hk: "23jUX3"
                })), (0, Me.jsx)(A.MenuBarItem, {
                    icon: n,
                    title: a,
                    onClick: t
                }, a)
            }

            function Le(e) {
                var t = e.msg;
                return (0, Me.jsx)(A.MenuBarItem, {
                    icon: (0, Me.jsx)(y.ForwardIcon, {}),
                    title: P.default.t(311),
                    onClick: function(e) {
                        e.stopPropagation(), (0, S.getIsUnsentMedia)(t) ? R.ModalManager.open((0, Me.jsx)(p.ConfirmPopup, {
                            title: P.default.t(301),
                            onOK: function() {
                                return R.ModalManager.close()
                            },
                            okText: me.fbt._("OK", null, {
                                hk: "4oTrfy"
                            }),
                            children: P.default.t(298)
                        })) : R.ModalManager.open((0, Me.jsx)(_.ForwardMessageModalLoadable, {
                            msgs: [(0, oe.unproxy)(t)],
                            onClose: function() {
                                return R.ModalManager.close()
                            }
                        }), {
                            transition: "modal-flow"
                        })
                    }
                })
            }

            function De(e) {
                var t = e.msg;
                return (0, Me.jsx)(C.DropdownItem, {
                    testid: "mi-msg-reply",
                    action: function() {
                        (0, K.default)(t)
                    },
                    children: me.fbt._("Reply privately", null, {
                        hk: "1XQeK2"
                    })
                })
            }

            function Be(e) {
                var t = e.msg,
                    n = function(e) {
                        e ? (0, ne.sendMessageReportBlock)(t, ae.SpamFlow.MediaViewer) : (0, ne.sendMessageReport)(t, ae.SpamFlow.MediaViewer), R.ModalManager.close()
                    };
                return (0, Me.jsx)(C.DropdownItem, {
                    action: function() {
                        R.ModalManager.open((0, Me.jsx)(E.default, {
                            isBusiness: t.senderObj.isBusiness,
                            isGroup: (0, S.getChat)(t).isGroup,
                            onReport: n,
                            onCancel: function() {
                                return R.ModalManager.close()
                            },
                            title: Se(t)
                        }))
                    },
                    children: Se(t)
                })
            }

            function Ge(e) {
                var t = e.msg,
                    n = e.onClose;
                return (0, Me.jsx)(C.DropdownItem, {
                    action: function() {
                        n(), (0, o.delayMs)(I.CLOSE_ANIMATION_DURATION + 250).then(c.Cmd.msgInfoDrawer.bind(c.Cmd, (0, oe.unproxy)(t)))
                    },
                    children: P.default.t(435)
                })
            }

            function Ve(e) {
                var t = e.isMediaDownloadable,
                    n = e.msg,
                    a = e.msgIndexInAlbum,
                    i = e.onClose,
                    o = e.onViewOnceInfoClick,
                    r = e.openReactionTray,
                    l = e.sendReactionButtonRef;
                return n.isViewOnce ? (0, Me.jsx)(He, {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: i,
                    onViewOnceInfoClick: o
                }) : a >= 0 ? (0, Me.jsx)(ke, {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: i,
                    openReactionTray: r,
                    sendReactionButtonRef: l
                }) : (0, Me.jsx)(we, {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: i,
                    openReactionTray: r,
                    sendReactionButtonRef: l
                })
            }

            function Fe(e) {
                var t = e.isMediaDownloadable,
                    n = e.isAlbumMedia,
                    a = e.msg,
                    i = e.onClose,
                    o = [],
                    r = (0, S.getChat)(a);
                ((0, B.canPrivateReply)(a) || (0, B.canPrivateReplyInRestrictedGrp)(a)) && o.push((0, Me.jsx)(De, {
                    msg: a
                }, "private_reply")), n && ((0, D.getIsSentByMe)(a) && o.push((0, Me.jsx)(Ge, {
                    msg: a,
                    onClose: i
                }, "dropdownMsgInfo")), o.push((0, Me.jsx)(Pe, {
                    msg: a,
                    type: ye.Dropdown,
                    onClose: i
                }, "dropdownGoToMsg"), (0, Me.jsx)(Ee, {
                    isMediaDownloadable: t,
                    msg: a,
                    type: ye.Dropdown
                }, "dropdownDownload")));
                var l = !r.isNewsletter && (a.isViewOnce || (0, L.canReportMsg)(a) && (0, O.messageLevelReportingEnabled)());
                return r.isNewsletter && (0, L.canReportMsg)(a) && (0, V.isNewsletterReportingEnabled)() ? o.push((0, Me.jsx)(X.default, {
                    msg: a
                }, "reportSpam")) : l && o.push((0, Me.jsx)(Be, {
                    msg: a
                }, "reportSpam")), (0, L.canReportToAdmin)(a) && o.push((0, Me.jsx)(J.default, {
                    msg: a
                }, "report_to_admin")), (0, Me.jsx)(A.MenuBarItem, {
                    icon: (0, Me.jsx)(N.MenuIcon, {}),
                    title: P.default.t(430),
                    children: (0, Me.jsx)(b.Dropdown, {
                        type: b.MenuType.DropdownMenu,
                        flipOnRTL: !0,
                        dirX: b.DirX.LEFT,
                        children: o
                    })
                })
            }

            function He(e) {
                var t = e.isMediaDownloadable,
                    n = e.msg,
                    a = e.onClose,
                    i = e.onViewOnceInfoClick;
                return (0, Me.jsxs)(Me.Fragment, {
                    children: [(0, Me.jsx)(A.MenuBarItem, {
                        icon: (0, Me.jsx)(de.ViewOnceIcon, {
                            className: he.default.voIcon
                        }),
                        title: me.fbt._("View once info", null, {
                            hk: "47XkZ4"
                        }),
                        onClick: i
                    }), (0, Me.jsx)(Fe, {
                        isMediaDownloadable: t,
                        isAlbumMedia: !1,
                        msg: n,
                        onClose: a
                    })]
                })
            }
        },
        924135: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(977202)),
                o = n(208188),
                r = a(n(289856)),
                l = a(n(121510)),
                s = a(n(258395)),
                u = a(n(911872)),
                c = n(120092),
                d = a(n(630503)),
                f = n(976576),
                p = n(447853),
                h = n(667294),
                m = a(n(156720)),
                g = a(n(295985)),
                v = n(853548),
                x = n(785893),
                b = {
                    container: {
                        width: "ln8gz9je",
                        height: "ppled2lx"
                    },
                    stickerContainer: {
                        maxWidth: "mx6rw3sv",
                        maxHeight: "trnfqnf9",
                        marginBottom: "r2u2pyhj",
                        zIndex: "thghmljt"
                    }
                },
                C = function(e, t) {
                    var n = e.msg,
                        a = (0, v.useModelValues)(e.mediaData, ["encFilehash", "directPath", "filehash", "mediaKey", "mediaKeyTimestamp", "mediaStage", "mimetype", "fullWidth", "fullHeight", "isFirstParty", "stickerPackId", "stickerPackName", "stickerPackPublisher"]),
                        C = (0, h.useRef)(null),
                        j = (0, g.default)(t, C),
                        M = function(e) {
                            var t;
                            null === (t = C.current) || void 0 === t || t.onClick(e)
                        },
                        y = a.isFirstParty ? (0, x.jsx)(i.default, {
                            stickerPackId: a.stickerPackId,
                            onStickerPackView: e.onStickerPackView,
                            stickerPackViewDelay: e.stickerPackViewDelay,
                            sticker: new f.StickerModel({
                                id: a.filehash,
                                mimetype: a.mimetype,
                                width: a.fullWidth,
                                height: a.fullHeight,
                                filehash: a.filehash,
                                encFilehash: a.encFilehash,
                                directPath: a.directPath,
                                mediaKey: a.mediaKey,
                                mediaKeyTimestamp: a.mediaKeyTimestamp
                            })
                        }) : (0, x.jsx)(c.StickerDetailsStickerPackInfo, {
                            name: a.stickerPackName,
                            publisher: a.stickerPackPublisher,
                            theme: c.Theme.MediaViewer,
                            sticker: new f.StickerModel({
                                id: a.filehash,
                                mimetype: a.mimetype,
                                width: a.fullWidth,
                                height: a.fullHeight,
                                filehash: a.filehash,
                                encFilehash: a.encFilehash,
                                directPath: a.directPath,
                                mediaKey: a.mediaKey,
                                mediaKeyTimestamp: a.mediaKeyTimestamp
                            })
                        });
                    return (0, x.jsxs)(o.FlexColumn, {
                        align: "center",
                        justify: "center",
                        xstyle: b.container,
                        children: [(0, x.jsx)("div", {
                            className: (0, m.default)(b.container, b.stickerContainer),
                            "data-testid": "media-sticker",
                            children: (0, x.jsx)(u.default, {
                                ref: j,
                                width: a.fullWidth,
                                height: a.fullHeight,
                                onZoomIn: e.onImgZoomIn,
                                msg: n,
                                children: (0, x.jsx)(l.default, {
                                    mediaData: a,
                                    placeholderRenderer: function() {
                                        return (0, x.jsx)(d.default, {
                                            size: 376
                                        })
                                    },
                                    downloadMedia: function() {
                                        return null == n ? void 0 : n.downloadMedia({
                                            downloadEvenIfExpensive: !1,
                                            rmrReason: p.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                                            isUserInitiated: !1
                                        })
                                    },
                                    children: function(t) {
                                        return (0, x.jsx)(r.default, {
                                            className: (0, m.default)(s.default.content),
                                            onClick: M,
                                            src: t,
                                            onLoad: e.onLoad
                                        })
                                    }
                                })
                            })
                        }), y]
                    })
                },
                j = (0, h.forwardRef)(C);
            t.default = j
        },
        209378: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(963038)),
                o = a(n(465470)),
                r = a(n(842418)),
                l = a(n(758927)),
                s = n(966454),
                u = a(n(258395)),
                c = a(n(528851)),
                d = n(426413),
                f = n(511043),
                p = n(980103),
                h = n(668181),
                m = n(817390),
                g = n(780532),
                v = a(n(695323)),
                x = n(447853),
                b = n(310289),
                C = n(667294),
                j = a(n(156720)),
                M = n(853548),
                y = n(785893);

            function _(e, t) {
                var n, a = e.autoPlay,
                    _ = e.msg,
                    S = e.onLoad,
                    w = e.onClose,
                    P = e.onLoadedData,
                    T = e.startTime,
                    I = void 0 === T ? 0 : T,
                    E = (0, M.useModelValues)(e.mediaData, ["mediaStage", "fullWidth", "fullHeight", "isGif", "isViewOnce", "preview", "renderableUrl", "streamable"]),
                    A = (0, C.useState)(!1),
                    N = (0, i.default)(A, 2),
                    O = N[0],
                    R = N[1],
                    L = (0, C.useState)(!0),
                    D = (0, i.default)(L, 2),
                    B = D[0],
                    G = D[1],
                    V = (0, C.useRef)(),
                    F = (0, C.useMemo)((function() {
                        return (E.mediaStage === s.MEDIA_DATA_STAGE.RESOLVED || E.streamable && E.isStreamable()) && (0, b.isNonZeroNumber)(E.fullWidth) && (0, b.isNonZeroNumber)(E.fullHeight) ? function(e) {
                            if (e.isGif) {
                                var t = 330;
                                return e.fullWidth >= t ? {
                                    width: e.fullWidth,
                                    height: e.fullHeight
                                } : {
                                    width: t,
                                    height: e.fullHeight * t / e.fullWidth
                                }
                            }
                            if (e.fullWidth >= f.MIN_WIDTH) return {
                                width: e.fullWidth,
                                height: e.fullHeight
                            };
                            return {
                                width: f.MIN_WIDTH,
                                height: e.fullHeight
                            }
                        }(E) : {
                            width: 0,
                            height: 0
                        }
                    }), [E]);
                (0, C.useEffect)((function() {
                    if (!E.isStreamable()) return _.downloadMedia({
                            downloadEvenIfExpensive: !0,
                            rmrReason: x.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                            isUserInitiated: !0
                        }),
                        function() {
                            _.mediaObject && _.cancelDownload()
                        }
                }), []);
                (0, C.useImperativeHandle)(t, (function() {
                    return {
                        getContainerElement: function() {
                            return V.current
                        },
                        closingMedia: function() {
                            G(!1)
                        }
                    }
                }));
                var H = E.isGif,
                    U = E.mediaStage === s.MEDIA_DATA_STAGE.RESOLVED || E.streamable && E.isStreamable();
                U = U || _.isForcingRMR();
                var W = null,
                    Y = m.ReactionBubbleType.MEDIA_ITEM;
                if (_ && (0, g.shouldShowReactionBubble)(_, Y) && (W = (0, y.jsx)(h.ReactionBubbleContainer, {
                        msgIds: [_.id.toString()],
                        reactionBubbleType: Y,
                        reactionBubbleVisible: B
                    })), U) {
                    var z, q, K = l.default.t(628);
                    return !O && (null == _ ? void 0 : _.interactiveAnnotations) && _.interactiveAnnotations.length > 0 && (z = (0, y.jsx)(o.default, {
                        annotations: _.interactiveAnnotations
                    })), q = H ? (0, y.jsxs)("div", {
                        className: (0, j.default)(u.default.content),
                        ref: V,
                        "data-testid": "media-gif",
                        children: [(0, y.jsx)(v.default, {
                            src: E.renderableUrl,
                            onClick: k,
                            autoPlay: !0,
                            loop: !0,
                            onLoadedData: P,
                            children: K
                        }), z]
                    }) : (0, y.jsx)("div", {
                        ref: V,
                        className: (0, j.default)(u.default.content),
                        onClick: k,
                        "data-testid": "media-video",
                        children: (0, y.jsx)(p.WrappedMsgVideoPlayer, {
                            msg: _,
                            mediaData: E,
                            startTime: I,
                            onClose: w,
                            onError: function() {},
                            onFullscreenToggle: function(e) {
                                R(e)
                            },
                            autoPlay: a,
                            type: d.PLAYER_TYPE.MEDIA_VIEWER,
                            overlays: z,
                            noPip: _.isViewOnce,
                            onLoadedData: P
                        })
                    }), (0, y.jsxs)(c.default, {
                        type: "scaleDown",
                        position: "relative",
                        objectPosition: "relative",
                        size: F,
                        onObjectLoad: S,
                        children: [q, W]
                    })
                }
                return (0, y.jsxs)(c.default, {
                    type: "scaleDown",
                    position: "relative",
                    objectPosition: "relative",
                    size: {
                        width: E.fullWidth,
                        height: E.fullHeight
                    },
                    children: [(0, y.jsx)(r.default, {
                        altText: null !== (n = _.caption) && void 0 !== n ? n : "",
                        mediaData: E
                    }), W]
                })
            }
            var S = (0, C.forwardRef)(_);

            function k(e) {
                e.stopPropagation()
            }
            t.default = S
        },
        900608: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a, l = e.msg,
                    E = e.onImageLoad,
                    q = e.isAnimatingIn,
                    X = e.onImgZoomIn,
                    J = e.onExitAnimation,
                    Q = e.onBack,
                    $ = (0, H.useMsgValues)(e.msg.id, [w.getId, w.getStar, f.getIsUnsentMedia, w.getIsViewOnce, w.getIsStickerMsg, w.getCaption, w.getInteractiveAnnotations, w.getType, w.getMessageSecret]),
                    ee = (0, o.default)($, 9),
                    te = ee[0],
                    ne = (ee[1], ee[2], ee[3]),
                    ae = ee[4],
                    ie = ee[5],
                    oe = (ee[6], ee[7], ee[8], (0, f.getChat)(l)),
                    re = (0, F.useModelValues)(e.mediaData, ["mediaStage", "type", "isGif"]),
                    le = (0, W.default)(q),
                    se = (0, V.useRef)(null),
                    ue = (0, V.useRef)(null),
                    ce = (0, V.useRef)(null),
                    de = (0, V.useRef)(null),
                    fe = (0, V.useRef)(),
                    pe = (0, V.useRef)(!1),
                    he = (0, V.useRef)(!1),
                    me = (0, V.useRef)(!1),
                    ge = (0, U.default)(I.NUX.EPHEMERAL_VIEW_ONCE_RECEIVER),
                    ve = (0, o.default)(ge, 2),
                    xe = ve[0],
                    be = ve[1],
                    Ce = ne && xe,
                    je = (0, V.useState)((function() {
                        return re.mediaStage === y.MEDIA_DATA_STAGE.RESOLVED && e.isAnimatingIn && e.getZoomNode ? e.getZoomNode(te) : null
                    })),
                    Me = (0, o.default)(je, 1)[0],
                    ye = (0, V.useState)(!1),
                    _e = (0, o.default)(ye, 2),
                    Se = _e[0],
                    ke = _e[1],
                    we = (0, V.useState)(!1),
                    Pe = (0, o.default)(we, 2),
                    Te = Pe[0],
                    Ie = Pe[1],
                    Ee = (0, V.useState)(!e.isAnimatingIn),
                    Ae = (0, o.default)(Ee, 2),
                    Ne = Ae[0],
                    Oe = Ae[1],
                    Re = (0, V.useState)(!1),
                    Le = (0, o.default)(Re, 2),
                    De = Le[0],
                    Be = Le[1],
                    Ge = (0, V.useState)(!1),
                    Ve = (0, o.default)(Ge, 2),
                    Fe = Ve[0],
                    He = Ve[1],
                    Ue = function() {
                        var e = (0, z.jsx)(L.default, {
                            isPhoto: re.type === x.default.TYPE.IMAGE,
                            onOkClick: function() {
                                be(), k.ModalManager.close()
                            }
                        });
                        k.ModalManager.open(e)
                    },
                    We = (0, Y.default)((function(e, t) {
                        if (!Te) {
                            var n = se.current;
                            if (n) {
                                var a = n.getInsideContainer();
                                if (a && a instanceof HTMLElement) {
                                    var i = n.getOutsideContainer();
                                    if (i && i instanceof HTMLElement) {
                                        var o = n.getTranslatePosition(i, e, t),
                                            r = o.translateX,
                                            l = o.translateY;
                                        (0, R.default)(a, "stop"), (0, R.default)(a, {
                                            translateX: r,
                                            translateY: l,
                                            scale: _.ZOOM_IN_FACTOR
                                        }, {
                                            duration: 0
                                        })
                                    }
                                }
                            }
                        }
                    }));
                (0, V.useEffect)((function() {
                    return __LOG__(2)`MediaViewerModal: Opened`, Ce && Ue(), c.default.focus(de.current),
                        function() {
                            __LOG__(2)`MediaViewerModal: Closed`, We.cancel()
                        }
                }), []);
                var Ye, ze, qe = function() {
                        ne && (0, g.canMarkPlayed)(l) && (0, g.markPlayed)(l)
                    },
                    Ke = function(e) {
                        qe(), E && E();
                        var t = Me,
                            n = e.target;
                        t && n && q && n instanceof HTMLElement && (me.current || (me.current = !0, function(e, t) {
                            var n, a = t.getBoundingClientRect(),
                                i = e.getBoundingClientRect(),
                                o = i.top - a.top,
                                r = i.left - a.left,
                                l = e.clientWidth / t.clientWidth;
                            o -= (t.clientHeight - e.clientHeight) / 2, r -= (t.clientWidth - e.clientWidth) / 2, (0, R.default)(t, {
                                opacity: [1, 0],
                                translateX: [0, r],
                                translateY: [0, o],
                                scale: [1, l]
                            }, {
                                duration: _.ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            });
                            var s = null === (n = ce.current) || void 0 === n ? void 0 : n.getElement();
                            s && (0, R.default)(s, {
                                opacity: [1, 0]
                            }, {
                                duration: _.ANIMATION_DURATION
                            })
                        }(t, n)))
                    },
                    Xe = function() {
                        var t;
                        if (!pe.current) {
                            pe.current = !0, (0, r.isFunction)(J) && J();
                            var n, a, i = e.getZoomNode && e.getZoomNode(te);
                            if (!i) return Q();
                            if ([x.default.TYPE.IMAGE, x.default.TYPE.STICKER].includes(re.type) && se.current) n = se.current.getInsideContainer(), null === (a = se.current) || void 0 === a || a.closingMediaZoomable();
                            else if (re.isGif && ue.current) {
                                var o;
                                n = ue.current.getContainerElement(), null === (o = ue.current) || void 0 === o || o.closingMedia()
                            }
                            if (!n) return Q();
                            var l = n,
                                s = n.getBoundingClientRect(),
                                u = i.getBoundingClientRect(),
                                c = u.top - s.top,
                                d = u.left - s.left,
                                f = i.clientWidth / l.clientWidth;
                            c -= (l.clientHeight - i.clientHeight) / 2, d -= (l.clientWidth - i.clientWidth) / 2, (0, R.default)(n, {
                                translateX: [d, 0],
                                translateY: [c, 0],
                                scale: [f, 1]
                            }, {
                                duration: _.CLOSE_ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            }).then((function() {
                                Q()
                            }));
                            var p = null === (t = ce.current) || void 0 === t ? void 0 : t.getElement();
                            p && (0, R.default)(p, {
                                opacity: [0, 1]
                            }, {
                                duration: _.CLOSE_ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            })
                        }
                    },
                    Ze = function(e) {
                        var t = se.current;
                        e && t && (he.current = t.getHeightOverflow() > 0 || t.getWidthOverflow() > 0), ke(e), X(e)
                    },
                    Je = function(e) {
                        var t, n = null === (t = se.current) || void 0 === t ? void 0 : t.getInsideContainer(),
                            a = Boolean(null == n ? void 0 : n.contains(document.activeElement));
                        if (!q && a) {
                            We.cancel();
                            var i = se.current;
                            null != i && i.onKeyboardZoom(e)
                        }
                    },
                    Qe = function(e) {
                        e.stopPropagation(), Be(!De)
                    };
                switch ((0, V.useEffect)((function() {
                        q || Ne || !le || Oe(!0)
                    }), [q, Ne, le]), re.type) {
                    case x.default.TYPE.IMAGE:
                        Ye = (0, z.jsx)(b.default, {
                            msg: l,
                            mediaData: re,
                            onLoad: Ke,
                            onImgZoomIn: Ze,
                            onAnnotationTooltipDisplay: function() {
                                Ie(!0)
                            },
                            onAnnotationTooltipDismiss: function() {
                                Ie(!1)
                            },
                            preventDownload: ne,
                            ref: se
                        }, te.toString());
                        break;
                    case x.default.TYPE.STICKER:
                        Ye = (0, z.jsx)(M.default, {
                            msg: l,
                            mediaData: re,
                            onLoad: Ke,
                            onImgZoomIn: Ze,
                            onStickerPackView: Xe,
                            stickerPackViewDelay: _.CLOSE_ANIMATION_DURATION,
                            ref: se
                        }, te.toString());
                        break;
                    case x.default.TYPE.VIDEO:
                        Ye = (0, z.jsx)(S.default, {
                            autoPlay: !Ce,
                            msg: l,
                            mediaData: re,
                            onLoadedData: re.isGif ? Ke : qe,
                            startTime: e.startTime,
                            onClose: Xe,
                            ref: ue
                        }, te.toString());
                        break;
                    case x.default.TYPE.AUDIO:
                        Ye = (0, z.jsx)(v.default, {
                            mediaData: re,
                            msg: l
                        }, te.toString());
                        break;
                    default:
                        __LOG__(4, void 0, new Error, !0)`type: ${re.type}`, SEND_LOGS("MediaViewerModal: unexpected media type")
                }
                var $e = e.msgIndexInAlbum >= 0 && e.albumSize >= 0;
                if (ie || $e) {
                    var et, tt, nt;
                    $e && (nt = m.default.t(505, {
                        number: e.msgIndexInAlbum + 1,
                        totalNumber: e.albumSize
                    }));
                    var at = d.Conversation({
                            mentions: l.mentionMap(),
                            groupMentions: l.groupMentionMap(),
                            phoneNumbers: (0, T.getPhoneNumbersFromMsg)(l),
                            links: (0, P.getLinksFromMsg)(l),
                            trusted: !0,
                            fromMe: te.fromMe
                        }),
                        it = re.type === x.default.TYPE.IMAGE && !ne,
                        ot = !Ne && (re.isGif || it);
                    ze = (0, z.jsxs)(z.Fragment, {
                        children: [(0, z.jsxs)("p", {
                            className: (0, s.cx)((et = {}, (0, i.default)(et, D.default.captionWrapperExpandable, !0 === fe.current), (0, i.default)(et, D.default.captionWrapper, !0), et)),
                            onClick: fe.current ? Qe : void 0,
                            title: fe.current ? B.fbt._("Read more", null, {
                                hk: "2DvSvh"
                            }) : void 0,
                            "aria-hidden": De || void 0,
                            children: [(0, z.jsx)(u.EmojiText, {
                                className: (0, s.cx)((tt = {}, (0, i.default)(tt, D.default.captionHidden, ot), (0, i.default)(tt, D.default.expanded, De), (0, i.default)(tt, D.default.mediaCaption, !0), tt)),
                                formatters: at,
                                ref: function(e) {
                                    ce.current = e
                                },
                                text: ie || nt
                            }), fe.current && (0, z.jsx)(O.default, {
                                xstyle: [K.captionReadMoreBtn, De && K.captionReadMoreBtnExpanded, Se && K.captionReadMoreBtnZoomed],
                                onClick: Qe,
                                children: (0, z.jsx)(A.TextSpan, {
                                    children: B.fbt._("Read more", null, {
                                        hk: "2DvSvh"
                                    })
                                })
                            })]
                        }), De && (0, z.jsx)("p", {
                            className: (0, G.default)(D.default.captionWrapper, D.default.captionWrapperExpandable, D.default.captionExpanded),
                            onClick: Qe,
                            children: (0, z.jsx)(u.EmojiText, {
                                className: (0, G.default)(D.default.mediaCaption, D.default.mediaCaptionExpanded),
                                formatters: at,
                                text: ie
                            })
                        })]
                    })
                }
                var rt = (0, s.cx)((t = {}, (0, i.default)(t, D.default.mediaWithCaption, !!ze), (0, i.default)(t, D.default.media, !0), t)),
                    lt = (0, s.cx)((n = {}, (0, i.default)(n, D.default.noThumbnails, ne || ae), (0, i.default)(n, D.default.mediaViewerAnimate, e.isAnimatingIn), (0, i.default)(n, D.default.cursorZoomOut, Se), (0, i.default)(n, "overlay", !0), (0, i.default)(n, D.default.mediaViewer, !0), n)),
                    st = Se && he.current ? function(e) {
                        We(e.pageX, e.pageY)
                    } : null,
                    ut = Se ? function(e) {
                        We.cancel();
                        var t = se.current;
                        t && Se && t.onClick(e)
                    } : null,
                    ct = Se ? null : Xe;
                null != ct && ne && (ct = function() {
                    He(!0)
                });
                return (0, z.jsx)(N.UIE, {
                    displayName: "MediaViewer",
                    escapable: !0,
                    requestDismiss: Xe,
                    children: (0, z.jsx)(h.HotKeys, {
                        handlers: {
                            space: Je,
                            enter: Je
                        },
                        ref: de,
                        children: (0, z.jsxs)("div", {
                            className: lt,
                            "data-animate-media-viewer": !0,
                            "data-testid": "media-viewer-modal",
                            onClick: ut,
                            onMouseMove: st,
                            children: [(0, z.jsx)(C.default, {
                                isHighlightClose: Fe,
                                msg: l,
                                mediaData: re,
                                onClose: Xe,
                                onHightlightCloseEnd: function() {
                                    He(!1)
                                },
                                onViewOnceInfoClick: function() {
                                    Ue()
                                },
                                msgIndexInAlbum: e.msgIndexInAlbum
                            }), (0, z.jsx)("div", {
                                className: (0, s.cx)((a = {}, (0, i.default)(a, D.default.sticker, ae), (0, i.default)(a, D.default.mediaContent, !0), a)),
                                onClick: ct,
                                children: (0, z.jsx)(Z, {
                                    hasNavigationButtons: !ne && !ae,
                                    onNext: e.onNext,
                                    onPrev: e.onPrev,
                                    imgZoomed: Se,
                                    children: (0, z.jsxs)("div", {
                                        className: rt,
                                        children: [(0, z.jsx)(j.default, {
                                            msg: l,
                                            mediaData: re
                                        }), Ye, (0, z.jsx)(p.default.Provider, {
                                            value: oe.groupMetadata,
                                            children: ze
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                })
            };
            var i = a(n(859713)),
                o = a(n(963038)),
                r = n(689121),
                l = n(151508),
                s = n(541585),
                u = n(990055),
                c = a(n(81724)),
                d = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = q(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                        } a.default = e, n && n.set(e, a);
                    return a
                }(n(924309)),
                f = n(530236),
                p = a(n(685636)),
                h = n(704250),
                m = a(n(758927)),
                g = n(864580),
                v = a(n(40912)),
                x = a(n(719703)),
                b = a(n(45630)),
                C = a(n(747324)),
                j = a(n(890956)),
                M = a(n(924135)),
                y = n(966454),
                _ = n(450062),
                S = a(n(209378)),
                k = n(628707),
                w = n(763249),
                P = n(362974),
                T = n(915178),
                I = n(171738),
                E = n(659696),
                A = n(558288),
                N = n(776097),
                O = a(n(83938)),
                R = a(n(931771)),
                L = a(n(392332)),
                D = a(n(127196)),
                B = n(548360),
                G = a(n(518122)),
                V = n(667294),
                F = (a(n(156720)), n(853548)),
                H = n(726017),
                U = a(n(246445)),
                W = a(n(691384)),
                Y = a(n(27634)),
                z = n(785893);

            function q(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (q = function(e) {
                    return e ? n : t
                })(e)
            }
            var K = {
                captionReadMoreBtn: {
                    position: "lhggkp7q",
                    end: "h223g3sc",
                    bottom: "jxacihee",
                    paddingTop: "ppypbuwx",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "przvwfww",
                    paddingStart: "nu34rnf1",
                    backgroundColor: "idmi9oma",
                    borderTopStartRadius: "ho9ovbg7",
                    borderTopEndRadius: "tcg15ap9",
                    borderBottomEndRadius: "c5wy1lv0",
                    borderBottomStartRadius: "bqysl6j9",
                    boxShadow: "a95fzlb5"
                },
                captionReadMoreBtnExpanded: {
                    visibility: "kojwoqec"
                },
                captionReadMoreBtnZoomed: {
                    visibility: "kqpkm0zi",
                    opacity: "lxctpz5v"
                }
            };

            function X(e) {
                null == e || e.stopPropagation()
            }

            function Z(e) {
                var t, n, a, i;
                return (0, z.jsxs)(z.Fragment, {
                    children: [e.hasNavigationButtons && (0, z.jsx)("div", {
                        className: (0, G.default)(D.default.btnMediaPrev),
                        children: (0, z.jsx)("div", {
                            onClick: e.onPrev ? null : X,
                            children: (0, z.jsx)(l.ChevronButton, {
                                type: l.ButtonType.Prev,
                                onClick: null !== (t = e.onPrev) && void 0 !== t ? t : void 0,
                                onKeyDown: null !== (n = e.onPrev) && void 0 !== n ? n : void 0,
                                disabled: !e.onPrev || e.imgZoomed,
                                theme: E.RoundTheme.Default
                            })
                        })
                    }), e.children, e.hasNavigationButtons && (0, z.jsx)("div", {
                        className: (0, G.default)(D.default.btnMediaNext),
                        children: (0, z.jsx)("div", {
                            onClick: e.onPrev ? null : X,
                            children: (0, z.jsx)(l.ChevronButton, {
                                type: l.ButtonType.Next,
                                onClick: null !== (a = e.onNext) && void 0 !== a ? a : void 0,
                                onKeyDown: null !== (i = e.onNext) && void 0 !== i ? i : void 0,
                                disabled: !e.onNext || e.imgZoomed,
                                theme: E.RoundTheme.Default
                            })
                        })
                    })]
                })
            }
        },
        851826: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.msg,
                    n = (0, o.getChat)(t);
                return (0, c.jsx)(i.DropdownItem, {
                    action: function() {
                        r.ModalManager.open((0, c.jsx)(l.default, {
                            chat: n,
                            msg: t,
                            spamFlow: s.SpamFlow.MediaViewer
                        }))
                    },
                    children: u.fbt._("", null, {
                        hk: "2TFyS0"
                    })
                })
            };
            var i = n(116384),
                o = n(530236),
                r = n(628707),
                l = a(n(999837)),
                s = n(233565),
                u = n(548360),
                c = n(785893)
        },
        557696: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.msg;
                return (0, d.jsx)(i.DropdownItem, {
                    action: function() {
                        (0, l.logRTAReportingEvent)({
                            reportToAdminInteraction: u.REPORT_TO_ADMIN_INTERACTION.CLICK_SEND_FOR_ADMIN_REVIEW,
                            groupId: (0, o.getChat)(t).id.user
                        }), r.ModalManager.open((0, d.jsx)(s.default, {
                            msg: t
                        }))
                    },
                    children: c.fbt._("Send for admin review", null, {
                        hk: "4ouSa6"
                    })
                })
            };
            var i = n(116384),
                o = n(530236),
                r = n(628707),
                l = n(548511),
                s = a(n(319898)),
                u = n(447853),
                c = n(548360),
                d = n(785893)
        },
        9128: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.mediaMsgs,
                    n = e.onScroll,
                    a = e.activeMsg,
                    r = (0, f.useRef)({}),
                    l = (0, f.useRef)(null),
                    s = (0, f.useRef)(null),
                    u = (0, p.default)(a.id),
                    g = function() {
                        var e;
                        null === (e = l.current) || void 0 === e || e.focusOnActive()
                    };
                (0, f.useEffect)((function() {
                    var e;
                    (null === (e = s.current) || void 0 === e ? void 0 : e.contains(document.activeElement)) && !a.id.equals(u) && g()
                }), [a, u]);
                var x = function() {
                        var e = new Map;
                        return t.forEach((function(t) {
                            var n = t.id.toString();
                            e.set(n, function(e) {
                                var t = r.current[e];
                                if (!t) return !1;
                                var n = t.getBoundingClientRect(),
                                    a = (n.left + n.right) / 2;
                                return !(a > -1 * window.innerWidth && a < 2 * window.innerWidth)
                            }(n))
                        })), e
                    },
                    b = (0, f.useState)(x),
                    C = (0, i.default)(b, 2),
                    j = C[0],
                    M = C[1],
                    y = (0, h.default)((function() {
                        var e = x();
                        (0, o.default)(j, e) || M(e)
                    }), 100);
                return (0, m.jsx)("div", {
                    className: c.default.thumbsContainer,
                    ref: e.setRefThumbsContainer,
                    children: (0, m.jsx)("div", {
                        ref: s,
                        className: c.default.scrollContainer,
                        dir: "ltr",
                        children: (0, m.jsx)("div", {
                            role: "list",
                            "aria-label": d.fbt._("Media List", null, {
                                hk: "3dsEfq"
                            }),
                            tabIndex: 1,
                            onFocus: function() {
                                g()
                            },
                            onScroll: function(e) {
                                y(), n(e)
                            },
                            className: c.default.viewerThumbs,
                            ref: e.setRefThumbs,
                            children: (0, m.jsx)(v, {
                                ref: l,
                                mediaMsgs: t,
                                highlightedMsgIds: e.highlightedMsgIds,
                                activeMsg: e.activeMsg,
                                onSetActiveThumb: e.onSetActiveThumb,
                                onSelectThumb: e.onSelectThumb,
                                msgIdToPreferPreview: j
                            })
                        })
                    })
                })
            };
            var i = a(n(963038)),
                o = a(n(350327)),
                r = a(n(81724)),
                l = n(21761),
                s = n(763249),
                u = n(96293),
                c = a(n(308632)),
                d = n(548360),
                f = n(667294),
                p = a(n(691384)),
                h = a(n(27634)),
                m = n(785893);

            function g(e, t) {
                var n = e.mediaMsgs,
                    a = e.highlightedMsgIds,
                    i = e.activeMsg,
                    o = e.onSetActiveThumb,
                    d = e.onSelectThumb,
                    p = e.msgIdToPreferPreview,
                    h = (0, f.useRef)({}),
                    g = function() {
                        var e = i.id.toString(),
                            t = h.current[e];
                        t && r.default.focus(t)
                    };
                (0, f.useImperativeHandle)(t, (function() {
                    return {
                        focusOnActive: g
                    }
                }));
                var v = a && a.size > 0 && a.has(i.id.toString()),
                    x = [];
                return n.forEach((function(e) {
                    if (null != e.mediaData) {
                        var t = v && a && !a.has(e.id.toString()) ? "viewerFlowTransparent" : "viewerFlow";
                        x.push((0, m.jsx)(l.MediaThumb, {
                            theme: t,
                            active: e === i,
                            msg: e,
                            containerRef: function(t) {
                                ! function(e, t) {
                                    h.current[t] = e
                                }(t, e.id.toString()), e === i && o(t)
                            },
                            onClick: function() {
                                d(e)
                            },
                            preferPreview: !!p.get(e.id.toString()),
                            showTooltip: (0, s.getIsGroupMsg)(e)
                        }, `media-${e.id.id}`))
                    } else {
                        var n = i;
                        __LOG__(3, !0)`MediaViewerFlow: attempted to render a msg without mediaData: ${JSON.stringify({type:e.type,isMedia:(0,s.getIsMedia)(e),startMsgType:n.type,startMsgIsMedia:(0,s.getIsMedia)(n)})}`
                    }
                })), x.push((0, m.jsx)("div", {
                    className: c.default.mediaThumb,
                    children: n.queryMediaAfter ? (0, m.jsx)(u.Spinner, {
                        stroke: 6,
                        size: 24
                    }) : null
                }, "spinner-right")), x.unshift((0, m.jsx)("div", {
                    className: c.default.mediaThumb,
                    children: n.queryMediaBefore ? (0, m.jsx)(u.Spinner, {
                        stroke: 6,
                        size: 24
                    }) : null
                }, "spinner-left")), x.push((0, m.jsx)("div", {
                    className: c.default.thumbPadding
                }, "padding-right")), x.unshift((0, m.jsx)("div", {
                    className: c.default.thumbPadding
                }, "padding-left")), (0, m.jsx)(m.Fragment, {
                    children: x
                })
            }
            var v = (0, f.forwardRef)(g);
            v.displayName = "MediaThumbs"
        },
        392332: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onOkClick;
                return (0, p.jsx)(i.ConfirmPopup, {
                    onOK: t,
                    cancelText: u.default.t(393),
                    onCancel: function() {
                        (0, o.openExternalLink)((0, r.getViewOnceFaqUrl)())
                    },
                    children: (0, p.jsxs)(l.FlexColumn, {
                        children: [(0, p.jsx)(s.default, {
                            xstyle: h.graphic,
                            align: "center",
                            children: (0, p.jsx)(d.ViewOnceSenderNuxIcon, {
                                width: 195,
                                height: 177
                            })
                        }), (0, p.jsx)(c.WDSTextLarge, {
                            children: e.isPhoto ? f.fbt._("This photo is set to view once", null, {
                                hk: "2H7aHc"
                            }) : f.fbt._("This video is set to view once", null, {
                                hk: "1w8WFf"
                            })
                        }), (0, p.jsx)(c.WDSTextMuted, {
                            children: e.isPhoto ? f.fbt._("For more privacy, this photo will disappear after you close it.", null, {
                                hk: "1XZPqi"
                            }) : f.fbt._("For more privacy, this video will disappear after you close it.", null, {
                                hk: "3YgUHE"
                            })
                        })]
                    })
                })
            };
            var i = n(430888),
                o = n(192070),
                r = n(212390),
                l = n(208188),
                s = a(n(644178)),
                u = a(n(758927)),
                c = n(558288),
                d = n(415443),
                f = n(548360),
                p = (a(n(156720)), n(785893)),
                h = {
                    graphic: {
                        marginBottom: "t4zgqcuo"
                    }
                }
        },
        936552: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                footerNote: "_3Ii0U",
                getTheAppLink: "_2uO1h"
            }
        },
        15191: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                wrapper: "_1HfA2",
                code: "_25NCw",
                codeDarkMode: "_3p_Xc",
                codeLogo: "_3cy64"
            }
        },
        38538: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                msg: "_7Upvn",
                text: "_3Q6VG",
                bubble: "_3cupO",
                author: "LldYr",
                hasSuspiciousLinks: "_1BEFs",
                hasAuthor: "_28v58",
                suspiciousLabel: "_1kBNA"
            }
        },
        480826: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                businessHoursRow: "_3sfEB",
                firstRow: "_2sBkJ",
                businessHoursDay: "_2pvvT",
                businessHoursHours: "_3kLLJ",
                dayIsOpen: "_29-HA",
                businessHoursChevron: "_2XvVc",
                flipSvg: "_3fNaY"
            }
        },
        452674: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                section: "_1we7x",
                description: "_2JSHQ",
                map: "mSpzh"
            }
        },
        814060: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                contactBusinessInfo: "vXoia",
                contactBusinessInfoSpinner: "_3sbaB",
                dataRow: "_2hU95",
                businessHoursRow: "_229jY",
                businessHoursDay: "_2Ue47",
                businessHoursHours: "_150zM",
                businessHoursChevron: "_1Biw6",
                flipSvg: "_2McRc",
                dataRowIcon: "XiT7h",
                dataRowText: "_1jydV",
                businessMap: "_2WOiM",
                address: "_2LXal",
                link: "_3mxhI",
                infoIcon: "_3TfXM"
            }
        },
        768140: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                mediaViewerPlaceholder: "_2qUle",
                imageAudio: "_1leJw",
                mediaViewerAudio: "_17zHt"
            }
        },
        308632: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                thumbsContainer: "_3GUJh",
                scrollContainer: "_27n9o",
                viewerThumbs: "_1P0Vh",
                mediaThumb: "_2nI8K",
                thumbPadding: "_1s0h2"
            }
        }
    }
]);