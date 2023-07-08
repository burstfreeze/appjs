/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [2650], {
        872380: (e, t, l) => {
            "use strict";
            var a = l(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.simpleSearch = function(e, t) {
                if (null == e || "" === e) return !1;
                var l = o(e),
                    a = t.map(o).flat();
                return l.every((function(e) {
                    return a.some((function(t) {
                        return null == t ? void 0 : t.startsWith(e)
                    }))
                }))
            };
            var n = a(l(758927)),
                i = l(293426);

            function o(e) {
                var t;
                return null == e ? [] : (0, i.toProductionString)(n.default.accentFold(null === (t = e.toLocaleLowerCase("en")) || void 0 === t ? void 0 : t.normalize("NFKD"))).split(" ")
            }
        },
        370252: (e, t, l) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChatFilterEventWamEvent = void 0;
            var a = l(644798),
                n = l(447853),
                i = a.TYPES.INTEGER,
                o = (0, a.defineEvents)({
                    ChatFilterEvent: [1616, {
                            actionType: [1, n.CHAT_FILTER_ACTION_TYPES],
                            filterType: [2, n.CHAT_FILTER_TYPES],
                            searchResultType: [4, n.CHAT_SEARCH_RESULT_TYPE],
                            sessionId: [3, i],
                            targetScreen: [5, n.CHAT_FILTER_TARGET_SCREEN]
                        },
                        [1, 1, 1], "regular"
                    ]
                });
            t.ChatFilterEventWamEvent = o
        },
        620779: (e, t, l) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UiMessageYourselfActionWamEvent = void 0;
            var a = l(644798),
                n = l(447853),
                i = a.TYPES.STRING,
                o = (0, a.defineEvents)({
                    UiMessageYourselfAction: [3780, {
                            uiMessageYourselfActionSessionId: [1, i],
                            uiMessageYourselfActionType: [2, n.UI_MESSAGE_YOURSELF_ACTION_TYPE],
                            uiMessageYourselfFunnelName: [3, n.UI_MESSAGE_YOURSELF_FUNNEL_NAME]
                        },
                        [1, 1, 1], "regular"
                    ]
                });
            t.UiMessageYourselfActionWamEvent = o
        },
        681958: (e, t, l) => {
            "use strict";
            var a = l(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UiMessageYourselfSearchAction = t.UiMessageYourselfNewChatAction = void 0;
            var n = a(l(334575)),
                i = a(l(993913)),
                o = l(880611),
                r = l(207603),
                d = l(620779),
                u = l(447853),
                s = function() {
                    function e(t) {
                        (0, n.default)(this, e), this._funnelName = t
                    }
                    return (0, i.default)(e, [{
                        key: "_commitAction",
                        value: function(e) {
                            new d.UiMessageYourselfActionWamEvent({
                                uiMessageYourselfActionSessionId: this._sessionId,
                                uiMessageYourselfActionType: e,
                                uiMessageYourselfFunnelName: this._funnelName
                            }).commit()
                        }
                    }, {
                        key: "startSession",
                        value: function() {
                            this._sessionId = (0, o.randomHex)(16)
                        }
                    }, {
                        key: "newChatPressed",
                        value: function() {
                            this._commitAction(u.UI_MESSAGE_YOURSELF_ACTION_TYPE.NEW_CHAT_PRESSED)
                        }
                    }, {
                        key: "youSelected",
                        value: function() {
                            this._commitAction(u.UI_MESSAGE_YOURSELF_ACTION_TYPE.YOU_SELECTED)
                        }
                    }, {
                        key: "searchBarPressed",
                        value: function() {
                            this._commitAction(u.UI_MESSAGE_YOURSELF_ACTION_TYPE.SEARCH_BAR_PRESSED)
                        }
                    }, {
                        key: "logMessageYourselfOpenedEvent",
                        value: function(e, t) {
                            t ? this.searchFullNameYouSelected() : this.youSelected(), e.msgs.length || e.endOfHistoryTransferType === r.ConversationEndOfHistoryTransferModelPropType.INCOMPLETE ? this.existingMessageYourselfOpened() : this.newMessageYourselfCreated()
                        }
                    }, {
                        key: "searchFullNameYouSelected",
                        value: function() {
                            this._commitAction(u.UI_MESSAGE_YOURSELF_ACTION_TYPE.SEARCH_FULL_NAME_YOU_SELECTED)
                        }
                    }, {
                        key: "newMessageYourselfCreated",
                        value: function() {
                            this._commitAction(u.UI_MESSAGE_YOURSELF_ACTION_TYPE.NEW_NTS_CREATED)
                        }
                    }, {
                        key: "existingMessageYourselfOpened",
                        value: function() {
                            this._commitAction(u.UI_MESSAGE_YOURSELF_ACTION_TYPE.EXISTING_NTS_OPENED)
                        }
                    }]), e
                }(),
                c = new s(u.UI_MESSAGE_YOURSELF_FUNNEL_NAME.NEW_CHAT);
            t.UiMessageYourselfNewChatAction = c;
            var f = new s(u.UI_MESSAGE_YOURSELF_FUNNEL_NAME.CONTACT_AND_GLOBAL_SEARCH);
            t.UiMessageYourselfSearchAction = f
        },
        796520: (e, t, l) => {
            "use strict";
            var a = l(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ListSearchType = t.ListSearch = void 0;
            var n = a(l(859713)),
                i = a(l(963038)),
                o = a(l(319)),
                r = a(l(331257)),
                d = a(l(347999)),
                u = l(78693),
                s = l(894995),
                c = l(148389),
                f = l(370252),
                h = a(l(203307)),
                v = l(364411),
                C = l(500204),
                m = a(l(442435)),
                p = l(552186),
                S = l(541585),
                _ = l(116384),
                E = l(61091),
                T = l(208188),
                b = a(l(967815)),
                x = l(528943),
                g = a(l(758927)),
                A = l(228080),
                w = l(160126),
                R = l(681958),
                I = l(970974),
                y = l(532514),
                N = l(809480),
                M = l(636979),
                L = l(556387),
                j = l(96293),
                k = l(221201),
                O = l(969822),
                H = l(776097),
                P = a(l(728056)),
                F = a(l(367589)),
                B = a(l(572080)),
                D = a(l(904847)),
                Y = l(447853),
                U = l(885667),
                W = a(l(713056)),
                G = a(l(580845)),
                V = l(548360),
                X = a(l(518122)),
                q = l(667294),
                z = a(l(156720)),
                Z = l(494092),
                K = a(l(177012)),
                J = a(l(206827)),
                Q = l(785893),
                $ = {
                    icon: {
                        width: "i94gqilv",
                        fill: "cfhfab5z"
                    }
                },
                ee = l(76672)({
                    CHAT_MSG_SEARCH: "CHAT_MSG_SEARCH",
                    NEW_CHAT_CONTACT_SEARCH: "NEW_CHAT_CONTACT_SEARCH",
                    FORWARD_MSG_SEARCH: "FORWARD_MSG_SEARCH",
                    SELECT_DROPDOWN_SEARCH: "SELECT_DROPDOWN_SEARCH"
                });
            t.ListSearchType = ee;
            var te = function() {};

            function le(e) {
                var t = e.kind,
                    l = e.icon,
                    a = e.label,
                    n = e.onClick,
                    i = e.iconContainerClass;
                return (0, Q.jsx)(_.DropdownItem, {
                    testid: `chat_filter_${t||""}`,
                    action: n,
                    children: (0, Q.jsxs)("div", {
                        className: W.default.kind,
                        children: [(0, Q.jsx)("div", {
                            className: i,
                            children: l
                        }), (0, Q.jsx)("div", {
                            className: W.default.kindName,
                            children: a
                        })]
                    })
                })
            }

            function ae(e) {
                var t = e.updateSearchFilter,
                    l = [];
                return l.push((0, Q.jsx)(le, {
                    kind: v.SEARCH_FILTERS.UNREAD,
                    icon: (0, Q.jsx)(L.SearchUnreadIcon, {
                        iconXstyle: $.icon
                    }),
                    label: V.fbt._("Unread chats", null, {
                        hk: "4w3TsP"
                    }),
                    onClick: function() {
                        return t({
                            kind: v.SEARCH_FILTERS.UNREAD
                        })
                    }
                }, "unread")), (0, F.default)("MD_EXTENSION") && l.push((0, Q.jsx)(le, {
                    kind: v.SEARCH_FILTERS.ASSIGNED_TO_YOU,
                    icon: (0, Q.jsx)(c.ChatAssignmentWithContainerIcon, {
                        iconXstyle: $.icon
                    }),
                    iconContainerClass: W.default.iconAdjustCenterLeft,
                    label: V.fbt._("Assigned to you", null, {
                        hk: "3IdGL4"
                    }),
                    onClick: function() {
                        return t({
                            kind: v.SEARCH_FILTERS.ASSIGNED_TO_YOU
                        })
                    }
                }, "assigned-to-you")), (0, s.smartFiltersEnabled)() && l.push((0, Q.jsx)(le, {
                    kind: v.SEARCH_FILTERS.CONTACT,
                    icon: (0, Q.jsx)(p.ContactsIcon, {
                        iconXstyle: $.icon
                    }),
                    label: V.fbt._("Contacts", null, {
                        hk: "wlOV2"
                    }),
                    onClick: function() {
                        return t({
                            kind: v.SEARCH_FILTERS.CONTACT
                        })
                    }
                }, "contact"), (0, Q.jsx)(le, {
                    kind: v.SEARCH_FILTERS.NON_CONTACT,
                    icon: (0, Q.jsx)(y.NonContactsIcon, {
                        iconXstyle: $.icon
                    }),
                    label: V.fbt._("Non-contacts", null, {
                        hk: "1SVQl1"
                    }),
                    onClick: function() {
                        return t({
                            kind: v.SEARCH_FILTERS.NON_CONTACT
                        })
                    }
                }, "non_contact")), l.push((0, Q.jsx)(le, {
                    kind: v.SEARCH_FILTERS.GROUP,
                    icon: (0, Q.jsx)(x.GroupIcon, {
                        iconXstyle: $.icon
                    }),
                    label: g.default.t(718),
                    onClick: function() {
                        return t({
                            kind: v.SEARCH_FILTERS.GROUP
                        })
                    }
                }, "group")), [(0, Q.jsx)("div", {
                    className: W.default.filterTitle,
                    children: V.fbt._("Chats", null, {
                        hk: "46DIdr"
                    })
                }, "chat_filter_kind_header")].concat(l)
            }

            function ne(e) {
                var t = e.updateSearchFilter,
                    l = A.LabelCollection.toArray().reduce((function(e, l) {
                        return l.name && l.count && 0 !== l.count ? [].concat((0, o.default)(e), [(0, Q.jsx)(_.DropdownItem, {
                            testid: `label_item_${l.name}`,
                            action: function() {
                                return t({
                                    label: l.id
                                })
                            },
                            children: (0, Q.jsx)("button", {
                                className: W.default.labels,
                                children: (0, Q.jsx)(w.Labels, {
                                    labels: [l.id],
                                    showName: !0,
                                    theme: "label-filter"
                                })
                            })
                        }, `label_item_${l.id}`)]) : e
                    }), []);
                return l.length > 0 ? [(0, Q.jsx)("div", {
                    className: W.default.filterTitle,
                    children: V.fbt._("Labels", null, {
                        hk: "3ONS1h"
                    })
                }, "chat_filter_label_header")].concat((0, o.default)(l)) : []
            }
            var ie = {
                button: {
                    marginTop: "tt8xd2xn",
                    marginEnd: "bugiwsl0",
                    marginBottom: "mpdn4nr2",
                    marginStart: "fooq7fky"
                },
                iconWrapper: {
                    width: "ekdr8vow",
                    height: "dhq51u3o",
                    color: "s4k44ver",
                    borderTopStartRadius: "g9p5wyxn",
                    borderTopEndRadius: "i0tg5vk9",
                    borderBottomEndRadius: "aoogvgrq",
                    borderBottomStartRadius: "o2zu3hjb"
                },
                iconWrapperActive: {
                    color: "p7idzaix",
                    backgroundColor: "evq4wxsl"
                }
            };

            function oe(e) {
                var t = C.Conn.isSMB ? V.fbt._("Chat filters menu", null, {
                    hk: "40MsRV"
                }) : V.fbt._("Unread chats filter", null, {
                    hk: "3E4fOC"
                });
                return (0, Q.jsx)("button", {
                    onClick: e.onClick,
                    "data-tab": k.TAB_ORDER.CHAT_LIST_FILTER,
                    "aria-label": t,
                    title: t,
                    className: (0, z.default)(ie.button),
                    children: (0, Q.jsx)(T.FlexRow, {
                        justify: "center",
                        align: "center",
                        className: (0, z.default)(ie.iconWrapper, e.active && ie.iconWrapperActive),
                        children: (0, Q.jsx)(E.FilterIcon, {
                            width: 20,
                            height: 20
                        })
                    })
                })
            }

            function re(e, t) {
                var l, a, o, c = e.loading,
                    p = e.placeholder,
                    _ = void 0 === p ? V.fbt._("Search...", null, {
                        hk: "3y0atZ"
                    }) : p,
                    T = e.spellCheck,
                    x = e.listFilterEnabled,
                    w = void 0 !== x && x,
                    y = e.onSearch,
                    L = e.type,
                    F = e.smbFilterSession,
                    G = e.chatlistFilterEnabled,
                    z = void 0 !== G && G,
                    $ = e.mode,
                    le = void 0 === $ ? h.default.Chatlist : $,
                    ie = e.actionElem,
                    re = e.backIcon,
                    ue = e.borderBottom,
                    se = void 0 === ue || ue,
                    ce = e.focusOnMount,
                    fe = void 0 !== ce && ce,
                    he = e.inboxFiltersEnabled,
                    ve = void 0 !== he && he,
                    Ce = e.inboxFilter,
                    me = (0, q.useRef)(null),
                    pe = (0, q.useRef)(null),
                    Se = (0, q.useState)(""),
                    _e = (0, i.default)(Se, 2),
                    Ee = _e[0],
                    Te = _e[1],
                    be = (0, q.useState)(null),
                    xe = (0, i.default)(be, 2),
                    ge = xe[0],
                    Ae = xe[1],
                    we = (0, q.useState)(null),
                    Re = (0, i.default)(we, 2),
                    Ie = Re[0],
                    ye = Re[1],
                    Ne = (0, q.useState)(!1),
                    Me = (0, i.default)(Ne, 2),
                    Le = Me[0],
                    je = Me[1],
                    ke = (0, q.useState)(null),
                    Oe = (0, i.default)(ke, 2),
                    He = Oe[0],
                    Pe = Oe[1],
                    Fe = (0, B.default)().isKeyboardUser,
                    Be = ve ? null == Ce ? void 0 : Ce.kind : Ie,
                    De = Boolean(Be || ge),
                    Ye = Le || Ee || De && !z && !ve,
                    Ue = function() {
                        var e = me.current;
                        e && !He && (e.reset(), Te(""))
                    },
                    We = (0, J.default)((function() {
                        var e;
                        (Ue(), le === h.default.Chatlist) && (null === (e = me.current) || void 0 === e || e.blur(), je(!1));
                        z || ve ? y("", {
                            kind: Be,
                            label: ge
                        }) : (Ae(null), ye(null), y(""))
                    }));
                (0, Z.useListener)(I.MsgCollection, m.default.NEW_MSG_SENT, (function() {
                    De && We()
                })), (0, q.useEffect)((function() {
                    if (Le && !Ee && !De) {
                        var e = pe.current;
                        e && e.contains(document.activeElement) || We()
                    }
                }), [Ee, De, Le, We]), (0, K.default)((function() {
                    We()
                }));
                var Ge, Ve = null,
                    Xe = function(e) {
                        var t;
                        He && Pe(null), Ae(e.label), ye(null !== (t = e.kind) && void 0 !== t ? t : null), F && function(e, t) {
                            var l = new f.ChatFilterEventWamEvent({
                                actionType: Y.CHAT_FILTER_ACTION_TYPES.SELECT_FILTER,
                                filterType: de(t),
                                sessionId: e
                            });
                            (0, s.smartFiltersEnabled)() && (l.targetScreen = Y.CHAT_FILTER_TARGET_SCREEN.CHAT_LIST);
                            l.commit()
                        }(F.sessionId, e), y(Ee, e)
                    },
                    qe = function() {
                        (0, d.default)(me.current, "inputRef.current").focus(), je(!0)
                    },
                    ze = function(e) {
                        F && function(e) {
                            var t = new f.ChatFilterEventWamEvent({
                                actionType: Y.CHAT_FILTER_ACTION_TYPES.OPEN,
                                filterType: Y.CHAT_FILTER_TYPES.NONE,
                                sessionId: e
                            });
                            (0, s.smartFiltersEnabled)() && (t.targetScreen = Y.CHAT_FILTER_TARGET_SCREEN.CHAT_LIST);
                            t.commit()
                        }(F.newSessionId()), e.stopPropagation(), Pe({
                            menu: (0, Q.jsxs)(Q.Fragment, {
                                children: [L !== ee.CHAT_MSG_SEARCH ? (0, Q.jsx)(ae, {
                                    updateSearchFilter: Xe
                                }) : null, (0, Q.jsx)(ne, {
                                    updateSearchFilter: Xe
                                })]
                            }),
                            anchor: e.target
                        })
                    },
                    Ze = function() {
                        return (0, d.default)(me.current, "inputRef.current").isCursorAtEnd()
                    },
                    Ke = function() {
                        (0, d.default)(me.current, "inputRef.current").selectAll()
                    },
                    Je = function() {
                        Xe({
                            kind: null,
                            label: null
                        })
                    };
                if ((0, q.useImperativeHandle)(t, (function() {
                        return {
                            cursorIsAtEnd: Ze,
                            select: Ke,
                            focus: qe,
                            clearSearch: Ue,
                            clearFilter: Je
                        }
                    })), Ye) {
                    var Qe = function() {
                            We(), qe()
                        },
                        $e = Boolean(Ee) || De && !z && !ve;
                    c ? Ve = (0, Q.jsx)("div", {
                        className: W.default.iconSpinner,
                        onClick: Qe,
                        children: (0, Q.jsx)(j.Spinner, {
                            size: 20,
                            stroke: 5,
                            color: "highlight"
                        })
                    }, "icon-clear-search") : $e ? Ve = (0, Q.jsx)("button", {
                        "aria-label": V.fbt._("Cancel search", null, {
                            hk: "16SlG4"
                        }),
                        className: W.default.iconCloseSearch,
                        onClick: Qe,
                        children: (0, Q.jsx)(U.XAltIcon, {})
                    }, "icon-clear-search") : !w || z || ve || (Ve = (0, Q.jsx)("button", {
                        className: W.default.iconLabelSelect,
                        "aria-label": V.fbt._("Filters menu", null, {
                            hk: "LNvK6"
                        }),
                        onClick: ze,
                        children: (0, Q.jsx)(E.FilterIcon, {})
                    }, "icon-select-label"))
                }
                Le && (Ge = (0, Q.jsx)(H.UIE, {
                    displayName: "ListSearch",
                    escapable: !0,
                    requestDismiss: We,
                    requestFocus: qe,
                    requestRecentFocusOnUnmount: !1,
                    uimState: O.UIMState.PASSIVE
                }));
                var et, tt = (0, S.cx)((l = {}, (0, n.default)(l, W.default.active, Ye && L !== ee.SELECT_DROPDOWN_SEARCH), (0, n.default)(l, W.default.chatlistFilterEnabled, z), (0, n.default)(l, W.default.listSearch, !0), (0, n.default)(l, W.default.borderBottom, se), (0, n.default)(l, W.default.selectDropdownType, L === ee.SELECT_DROPDOWN_SEARCH), l));
                He && (et = (0, Q.jsx)(H.UIE, {
                    displayName: "ChatContextMenu",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: function() {
                        Pe(null)
                    },
                    requestRecentFocusOnUnmount: !1,
                    children: (0, Q.jsx)(P.default, {
                        contextMenu: He
                    })
                }));
                var lt = !Ee && (!Le || De || le === h.default.CommandPalette),
                    at = null;
                lt && (at = _, le === h.default.CommandPalette ? at = V.fbt._("Search chats, contacts and settings", null, {
                    hk: "2A6gx7"
                }) : ge ? at = g.default.t(392, {
                    labelName: A.LabelCollection.assertGet(ge).name
                }) : Be === v.SEARCH_FILTERS.GROUP ? at = V.fbt._("Search in Groups", null, {
                    hk: "3j9ioP"
                }) : Be === v.SEARCH_FILTERS.UNREAD ? at = V.fbt._("Search unread chats", null, {
                    hk: "2lClKl"
                }) : Be === v.SEARCH_FILTERS.PERSONAL ? at = V.fbt._("Search personal chats", null, {
                    hk: "3oENqm"
                }) : Be === v.SEARCH_FILTERS.BUSINESS ? at = V.fbt._("Search business chats", null, {
                    hk: "1Zpud4"
                }) : Be === v.SEARCH_FILTERS.BROADCAST ? at = V.fbt._("Search in Broadcast lists", null, {
                    hk: "4EwaXm"
                }) : Be === v.SEARCH_FILTERS.CONTACT ? at = V.fbt._("Search in chats with contacts", null, {
                    hk: "1DAA9Y"
                }) : Be === v.SEARCH_FILTERS.NON_CONTACT ? at = V.fbt._("Search in chats with non contacts", null, {
                    hk: "1eIAdx"
                }) : Be === v.SEARCH_FILTERS.ASSIGNED_TO_YOU && (at = V.fbt._("Search chats assigned to you", null, {
                    hk: "4En5KS"
                })));
                var nt = Le ? V.fbt._("Chat list", null, {
                        hk: "iikD9"
                    }) : V.fbt._("Search or start new chat", null, {
                        hk: "TdYzC"
                    }),
                    it = V.fbt._("Search input textbox", null, {
                        hk: "56hij"
                    }),
                    ot = (0, Q.jsx)("div", {
                        className: (0, X.default)(W.default.iconMorph, W.default.iconMorphSearch),
                        children: (0, Q.jsx)(M.SearchIcon, {})
                    }),
                    rt = null != re ? re : le === h.default.Chatlist;
                return (0, Q.jsxs)("div", {
                    ref: pe,
                    className: tt,
                    "data-testid": "chat-list-search-container",
                    children: [(0, Q.jsxs)("div", {
                        className: W.default.inputContainer,
                        children: [rt ? (0, Q.jsxs)("button", {
                            "data-testid": "icon-search-morph",
                            className: (0, X.default)(W.default.iconSearchMorph, W.default.iconSearch),
                            onMouseDown: function(e) {
                                Ee || Le ? We() : (e.preventDefault(), e.stopPropagation(), qe())
                            },
                            "aria-label": nt,
                            tabIndex: "-1",
                            children: [(0, Q.jsx)("div", {
                                className: (0, X.default)(W.default.iconMorph, W.default.iconMorphBack),
                                children: (0, Q.jsx)(u.BackIcon, {})
                            }), ot]
                        }) : (0, Q.jsx)("div", {
                            className: W.default.iconSearch,
                            children: ot
                        }), (0, Q.jsxs)(D.default, {
                            transitionName: "pop",
                            children: [Ve, et]
                        }), (0, Q.jsx)("div", {
                            "data-testid": "input-placeholder",
                            className: (0, S.cx)((a = {}, (0, n.default)(a, W.default.inputPlaceholderHidden, !lt), (0, n.default)(a, W.default.inputPlaceholder, !0), a)),
                            children: at
                        }), (0, Q.jsx)("div", {
                            className: (0, S.cx)((o = {}, (0, n.default)(o, W.default.commandPalette, le === h.default.CommandPalette), (0, n.default)(o, W.default.inputWrapper, !0), o)),
                            children: (0, Q.jsx)(N.RichTextInput, {
                                testid: "chat-list-search",
                                lineWrap: !1,
                                title: it,
                                ref: function(e) {
                                    var t;
                                    me.current = e;
                                    var l = null !== (t = null == e ? void 0 : e.isFocused()) && void 0 !== t && t;
                                    l && !Le ? je(!0) : !l && Le && je(!1)
                                },
                                tabOrder: k.TAB_ORDER.CHAT_LIST_SEARCH,
                                spellCheck: T,
                                focusOnMount: fe,
                                onBlur: function() {
                                    je(!1)
                                },
                                onFocus: Le ? te : function() {
                                    le === h.default.Chatlist || L === ee.FORWARD_MSG_SEARCH ? (R.UiMessageYourselfSearchAction.startSession(), R.UiMessageYourselfSearchAction.searchBarPressed()) : L === ee.NEW_CHAT_CONTACT_SEARCH && R.UiMessageYourselfNewChatAction.searchBarPressed(), qe(), Fe && self.setTimeout((function() {
                                        return b.default.indicateFocus(pe.current)
                                    }), 0)
                                },
                                onChange: Le ? function(e) {
                                    var t = e.text;
                                    Te(t), y(t, {
                                        label: ge,
                                        kind: Be
                                    })
                                } : te,
                                onKeyDown: function(e) {
                                    return e.keyCode === r.default.ESC && (We(), !0)
                                },
                                onEnter: e.onEnter
                            })
                        })]
                    }), z && (0, Q.jsx)(oe, {
                        active: De,
                        onClick: function(e) {
                            De ? Xe({
                                kind: null,
                                label: null
                            }) : C.Conn.isSMB ? ze(e) : Xe({
                                kind: v.SEARCH_FILTERS.UNREAD
                            })
                        }
                    }), ie, Ge]
                })
            }

            function de(e) {
                if (!e.kind) return Y.CHAT_FILTER_TYPES.OTHER_LABELS;
                switch (e.kind) {
                    case v.SEARCH_FILTERS.UNREAD:
                        return Y.CHAT_FILTER_TYPES.UNREAD;
                    case v.SEARCH_FILTERS.GROUP:
                        return Y.CHAT_FILTER_TYPES.GROUP;
                    case v.SEARCH_FILTERS.BROADCAST:
                        return Y.CHAT_FILTER_TYPES.BROADCAST_LIST;
                    case v.SEARCH_FILTERS.CONTACT:
                        return Y.CHAT_FILTER_TYPES.CONTACT;
                    case v.SEARCH_FILTERS.NON_CONTACT:
                        return Y.CHAT_FILTER_TYPES.NON_CONTACT;
                    case v.SEARCH_FILTERS.ASSIGNED_TO_YOU:
                        return Y.CHAT_FILTER_TYPES.ASSIGNED_TO_YOU;
                    case v.SEARCH_FILTERS.PERSONAL:
                    case v.SEARCH_FILTERS.BUSINESS:
                        throw (0, G.default)(`Unsupported filter ${e.kind}`)
                }
            }
            var ue = (0, q.forwardRef)(re);
            t.ListSearch = ue, ue.displayName = "ListSearch"
        },
        203307: (e, t, l) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = l(76672).Mirrored(["Chatlist", "CommandPalette"]);
            t.default = a
        },
        799328: (e, t, l) => {
            "use strict";
            var a = l(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(l(81109)),
                i = a(l(859713)),
                o = a(l(963038)),
                r = l(541585),
                d = a(l(430540)),
                u = a(l(518122)),
                s = l(667294),
                c = a(l(273784)),
                f = a(l(295985)),
                h = a(l(581853)),
                v = l(785893),
                C = (0, s.forwardRef)((function(e, t) {
                    var l, a, s = e.disabled,
                        C = e.className,
                        m = e.theme,
                        p = e.idle,
                        S = e.image,
                        _ = e.customImage,
                        E = void 0 !== _ && _,
                        T = e.detail,
                        b = e.label,
                        x = e.primary,
                        g = e.primaryDetail,
                        A = e.secondary,
                        w = e.secondaryDetail,
                        R = e.unreadStyle,
                        I = e.checkbox,
                        y = void 0 !== I && I,
                        N = e.active,
                        M = e.focusable,
                        L = void 0 !== M && M,
                        j = e.dragging,
                        k = e.isMuted,
                        O = e.onClick,
                        H = e.onMouseDown,
                        P = e.onMouseEnter,
                        F = e.onMouseOver,
                        B = e.onMouseLeave,
                        D = e.onContextMenu,
                        Y = e.testid,
                        U = e.role,
                        W = void 0 === U ? "gridcell" : U,
                        G = e.ariaColIndex,
                        V = void 0 === G ? 2 : G,
                        X = e.ariaLabel,
                        q = e.tabIndex,
                        z = e.containerRole,
                        Z = Boolean(!0 !== s && "disabled" !== m && (O || H || P || F)),
                        K = (0, h.default)(O),
                        J = (0, o.default)(K, 2),
                        Q = J[0],
                        $ = J[1],
                        ee = (0, c.default)(),
                        te = (0, o.default)(ee, 2),
                        le = te[0],
                        ae = te[1],
                        ne = (0, f.default)(t, Q, le),
                        ie = (0, u.default)(C, d.default.chat, (0, r.cx)((l = {}, (0, i.default)(l, d.default.chatInteractive, Z), (0, i.default)(l, d.default.cartProduct, "cart-product" === m), (0, i.default)(l, d.default.themeCheckbox, y || "chat-checkbox" === m || "label-list" === m || "chat-checkbox-no-delete" === m || "cell-message-checkbox" === m || "chat-checkbox-disabled" === m), (0, i.default)(l, d.default.themeDrawerList, "drawer-list" === m || "chat-info" === m || "subgroup" === m || "subgroup-new" === m || "quick-replies-drawer-item" === m), (0, i.default)(l, d.default.themeChatInfo, "chat-info" === m), (0, i.default)(l, d.default.themeSubgroup, "subgroup" === m || "subgroup-new" === m), (0, i.default)(l, d.default.themeSubgroupNew, "subgroup-new" === m), (0, i.default)(l, d.default.themeCommunityHome, "community-home" === m), (0, i.default)(l, d.default.themeIdentity, "identity" === m), (0, i.default)(l, d.default.themeListNames, "list-names" === m || "list-names-no-delete" === m), (0, i.default)(l, d.default.themeMessage, "cell-message" === m || "cell-message-checkbox" === m), (0, i.default)(l, d.default.themePlain, "plain" === m), (0, i.default)(l, d.default.themeSearch, "chat-search" === m), (0, i.default)(l, d.default.themeStatus, "status-list" === m), (0, i.default)(l, d.default.themeLabel, "label-selection" === m), (0, i.default)(l, d.default.themeAddItem, "add-item" === m), (0, i.default)(l, d.default.themeAddItemPlaceholder, "add-item-placeholder" === m), (0, i.default)(l, d.default.themeAddOrderItem, "add-order-item" === m), (0, i.default)(l, d.default.idle, p), (0, i.default)(l, d.default.member, "group-modal" === m || "chat-checkbox-no-delete" === m), (0, i.default)(l, d.default.unread, !!R), (0, i.default)(l, d.default.chatDrag, !!j), (0, i.default)(l, d.default.active, ae || !!N), (0, i.default)(l, d.default.isMuted, !!k), (0, i.default)(l, d.default.groupsV4Invite, "groups_v4_invite" === m), (0, i.default)(l, d.default.product, "product" === m || "product-out-of-stock" === m || "product-of-collection" === m || "collection-header" === m || "collection-edit" === m), (0, i.default)(l, d.default.productOfCollection, "product-of-collection" === m), (0, i.default)(l, d.default.productOutOfStock, "product-out-of-stock" === m), (0, i.default)(l, d.default.collectionEdit, "collection-edit" === m), (0, i.default)(l, d.default.collectionHeader, "collection-header" === m), (0, i.default)(l, d.default.orderProduct, "order-product" === m), (0, i.default)(l, d.default.media, "media" === m), (0, i.default)(l, d.default.listButton, "list-button-compact" === m), (0, i.default)(l, d.default.listMsg, "list-msg" === m), (0, i.default)(l, d.default.archivePanel, "archive-panel" === m), (0, i.default)(l, d.default.themeRadioButtonRow, "radio-button-row" === m), (0, i.default)(l, d.default.stickerPack, "sticker-pack" === m), (0, i.default)(l, d.default.themeReaction, "reaction-by-others" === m || "reaction-by-me" === m), (0, i.default)(l, d.default.themeReactionByMe, "reaction-by-me" === m), (0, i.default)(l, d.default.themeReactionByOthers, "reaction-by-others" === m), (0, i.default)(l, d.default.disabled, "disabled" === m), (0, i.default)(l, d.default.linkedAccount, "linked-account" === m || "linked-account-consumer" === m), (0, i.default)(l, d.default.linkedAccountConsumer, "linked-account-consumer" === m), (0, i.default)(l, d.default.themeCheckboxDisabled, "chat-checkbox-disabled" === m), (0, i.default)(l, d.default.themeCommunityTabHome, "community-tab-home" === m || "community-tab-home-new" === m), (0, i.default)(l, d.default.themeCommunityTabHomeNew, "community-tab-home-new" === m), (0, i.default)(l, d.default.themeCommunityTabSubgroup, "community-tab-subgroup" === m), (0, i.default)(l, d.default.themeCommunityTabViewAll, "community-tab-view-all" === m), (0, i.default)(l, d.default.themeCommunityTabActivityCell, "community-tab-activity-cell" === m), (0, i.default)(l, d.default.themeCommunityCreate, "community-create" === m), (0, i.default)(l, d.default.themeNoBorder, "no-border" === m), (0, i.default)(l, d.default.themeProductAddToOrder, "product-add-to-order" === m), (0, i.default)(l, d.default.themeSelectDropdownItem, "select-dropdown-item" === m), (0, i.default)(l, d.default.tallerCellWithLabel, null != b), l)));
                    S && (a = E ? S : (0, v.jsx)("div", {
                        className: d.default.chatAvatar,
                        children: S
                    }));
                    var oe, re, de = null != g ? (0, v.jsx)("div", {
                        className: (0, u.default)((0, r.cx)((0, i.default)({}, d.default.chatMeta, !["product", "product-out-of-stock", "product-of-collection"].includes(m) && "sticker-pack" !== m))),
                        "data-testid": "cell-frame-primary-detail",
                        children: g
                    }) : null;
                    null != A && (re = null != w ? (0, v.jsx)("div", {
                        role: "gridcell",
                        "aria-colindex": "1",
                        className: d.default.chatMeta,
                        children: w
                    }) : null, oe = (0, v.jsxs)("div", {
                        className: d.default.chatSecondary,
                        "data-testid": "cell-frame-secondary",
                        children: [(0, v.jsx)("div", {
                            className: d.default.chatStatus,
                            children: A
                        }), null == b && re]
                    }));
                    var ue = null != T ? (0, v.jsx)("div", {
                        className: (0, u.default)(d.default.chatBody, d.default.chatDetails),
                        children: T
                    }) : null;
                    return (0, v.jsxs)("div", (0, n.default)((0, n.default)({
                        ref: ne
                    }, L && Z && null == N && $), {}, {
                        tabIndex: q,
                        "data-testid": null != Y ? Y : "cell-frame-container",
                        className: ie,
                        onClick: O,
                        onMouseDown: H,
                        onMouseEnter: P,
                        onMouseOver: F,
                        onMouseLeave: B,
                        onContextMenu: D,
                        role: z,
                        "aria-label": X,
                        children: [(0, v.jsx)("div", {
                            className: d.default.image,
                            children: a
                        }), (0, v.jsxs)("div", {
                            className: d.default.chatBody,
                            children: [null != b && (0, v.jsxs)("div", {
                                className: d.default.chatLabel,
                                "data-testid": "cell-frame-label",
                                children: [b, de]
                            }), (0, v.jsxs)("div", {
                                role: W,
                                "aria-colindex": V,
                                className: (0, u.default)(d.default.chatMain, (0, r.cx)((0, i.default)({}, d.default.noDelete, "list-names-no-delete" === m))),
                                children: [(0, v.jsxs)("div", {
                                    className: d.default.chatTitle,
                                    "data-testid": "cell-frame-title",
                                    children: [x, null != b && re]
                                }), null == b && de]
                            }), oe]
                        }), ue]
                    }))
                }));
            C.displayName = "CellFrame";
            var m = C;
            t.default = m
        },
        572650: (e, t, l) => {
            "use strict";
            var a = l(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WAWebSelectDropdown = void 0;
            var n = a(l(319)),
                i = a(l(81109)),
                o = a(l(963038)),
                r = a(l(347999)),
                d = l(317109),
                u = a(l(799328)),
                s = l(796520),
                c = l(247211),
                f = a(l(967815)),
                h = a(l(81724)),
                v = a(l(594778)),
                C = a(l(816308)),
                m = l(872380),
                p = a(l(964851)),
                S = l(969822),
                _ = l(776097),
                E = l(71867),
                T = l(447901),
                b = l(548360),
                x = a(l(441143)),
                g = l(667294),
                A = a(l(156720)),
                w = a(l(995480)),
                R = a(l(273784)),
                I = a(l(279781)),
                y = a(l(295985)),
                N = a(l(581853)),
                M = l(785893),
                L = {
                    selectDropdownContainer: {
                        position: "g0rxnol2",
                        color: "k2bacm8l"
                    },
                    select: {
                        position: "g0rxnol2",
                        paddingTop: "e8jx7scp",
                        paddingBottom: "fcet0162",
                        minWidth: "n49njydh",
                        backgroundColor: "f6cvynhn",
                        borderTop: "kagi745y",
                        borderEnd: "evq3mrnv",
                        borderBottom: "daad4uqs",
                        borderStart: "jdssz2gn",
                        borderTopStartRadius: "bbr44loe",
                        borderTopEndRadius: "ooj5yc5b",
                        borderBottomEndRadius: "m8i16etx",
                        borderBottomStartRadius: "cw0ivh8j",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        whiteSpace: "le5p0ye3",
                        textOverflow: "lhj4utae",
                        cursor: "ajgl1lbb",
                        userSelect: "rkxvyd19"
                    },
                    selectFocused: {
                        borderTop: "ggk2mtcd",
                        borderEnd: "c4hi5cu5",
                        borderBottom: "dorenqkw",
                        borderStart: "pidw8noc"
                    },
                    selectWithImageLabel: {
                        lineHeight: "tkq7s68q"
                    },
                    caretIcon: {
                        position: "lhggkp7q",
                        end: "knkhrgyh",
                        top: "cndwxb6x"
                    },
                    dropdownMenu: {
                        boxSizing: "cm280p3y",
                        position: "lhggkp7q",
                        top: "s1302b61",
                        start: "tkdu00h0",
                        width: "ln8gz9je",
                        backgroundColor: "p51fsnpc",
                        borderTopStartRadius: "dntxsmpk",
                        borderTopEndRadius: "ixn6u0rb",
                        borderBottomEndRadius: "s2vc4xk1",
                        borderBottomStartRadius: "o0wkt7aw",
                        boxShadow: "r3d5i8t6",
                        zIndex: "nbczt5ty"
                    },
                    dropdownMenuOptionContainer: {
                        overflowY: "ag5g9lrv",
                        maxHeight: "owfawvgq"
                    },
                    dropdownMenuOption: {
                        height: "r1dtxudv",
                        minHeight: "jejlwtnt"
                    }
                };

            function j(e, t) {
                var l, a, n = e.items,
                    u = e.selectedItemId,
                    s = e.defaultLabel,
                    c = e.ariaLabel,
                    f = e.showImageWithSelectedItem,
                    v = void 0 !== f && f,
                    C = e.showSearchFilter,
                    m = void 0 !== C && C,
                    p = e.onChangeSelectedItem,
                    b = e.testid,
                    w = null;
                null != u && (w = n.find((function(e) {
                    return e.id === u
                }))), (0, x.default)(null != w || null != s, "Select Dropdown requires either a valid selected item or a default display label");
                var I = w ? w.primary : (0, r.default)(s, "defaultLabel"),
                    j = w && !0 === v ? (0, M.jsx)("span", {
                        className: (0, A.default)(E.uiMargin.end12),
                        children: w.image
                    }) : null,
                    k = (0, g.useState)(!1),
                    H = (0, o.default)(k, 2),
                    P = H[0],
                    F = H[1];
                (0, g.useImperativeHandle)(t, (function() {
                    return {
                        open: function() {
                            return F(!0)
                        },
                        close: function() {
                            return F(!1)
                        },
                        isOpen: function() {
                            return P
                        }
                    }
                }));
                var B = (0, N.default)((function() {
                        F(!P)
                    })),
                    D = (0, o.default)(B, 2),
                    Y = D[0],
                    U = D[1],
                    W = (0, R.default)(),
                    G = (0, o.default)(W, 2),
                    V = G[0],
                    X = G[1],
                    q = (0, g.useRef)(null),
                    z = (0, y.default)(Y, V, q),
                    Z = (0, g.useState)(!1),
                    K = (0, o.default)(Z, 2),
                    J = K[0],
                    Q = K[1];
                return J || !X && !P || Q(!0), (0, M.jsx)(_.UIE, {
                    displayName: "SelectDropdownContainer",
                    requestFocus: function() {
                        h.default.focus(q.current)
                    },
                    uimState: J ? S.UIMState.ACTIVE : S.UIMState.INACTIVE,
                    children: (0, M.jsxs)("div", {
                        className: (0, A.default)(L.selectDropdownContainer),
                        "data-testid": b,
                        children: [(0, M.jsxs)("div", (0, i.default)((0, i.default)({}, U), {}, {
                            ref: z,
                            "aria-label": null !== (l = null === (a = w) || void 0 === a ? void 0 : a.ariaLabel) && void 0 !== l ? l : c,
                            "date-testid": null != b ? b : "select-dropdown",
                            className: (0, A.default)(L.select, null != j && L.selectWithImageLabel, E.uiPadding.start24, E.uiPadding.end36, (X || P) && L.selectFocused),
                            children: [j, (0, M.jsx)(T.WDSTextTitle, {
                                as: "span",
                                children: I
                            }), (0, M.jsx)(d.CaretDownIcon, {
                                xstyle: L.caretIcon
                            })]
                        })), P ? (0, M.jsx)(O, {
                            items: n,
                            selectedItem: w,
                            showSearchFilter: m,
                            onSelect: function(e) {
                                p(e), F(!1)
                            },
                            onDismiss: function() {
                                F(!1)
                            },
                            testid: null != b ? b : "select-dropdown"
                        }) : null]
                    })
                })
            }
            var k = (0, g.forwardRef)(j);

            function O(e) {
                var t = e.items,
                    l = e.selectedItem,
                    a = e.showSearchFilter,
                    i = e.onSelect,
                    r = e.onDismiss,
                    d = e.testid,
                    u = (0, g.useRef)(null),
                    S = (0, I.default)((function() {
                        return new p.default([], (function(e) {
                            return e.id
                        }))
                    })),
                    T = (0, g.useRef)(null),
                    x = (0, g.useState)((function() {
                        return t
                    })),
                    w = (0, o.default)(x, 2),
                    R = w[0],
                    y = w[1];
                (0, g.useEffect)((function() {
                    S.current.init(R, !0)
                }), [R]);
                var N = function(e) {
                        if (e >= 0 && e < R.length && T.current) {
                            var t = T.current.children[e];
                            (0, c.scrollIntoViewIfNeeded)(t, !1, T.current), h.default.focus(t)
                        }
                    },
                    j = function(e) {
                        null == e || e.preventDefault(), R.length > 0 && (S.current.setFirst(!0), N(0))
                    },
                    k = function() {
                        a && (S.current.unset(), f.default.shouldIndicateFocus(), h.default.focus(u.current))
                    };
                return (0, g.useEffect)((function() {
                    a ? k() : j()
                }), []), (0, M.jsx)(_.UIE, {
                    displayName: "SelectDropdownMenu",
                    escapable: !0,
                    popable: !0,
                    requestDismiss: r,
                    children: (0, M.jsxs)("div", {
                        className: (0, A.default)(L.dropdownMenu),
                        children: [(0, M.jsx)(C.default, {
                            ref: u,
                            setSearchText: function(e) {
                                y("" === e ? t : t.filter((function(t) {
                                    var l;
                                    return (0, m.simpleSearch)(e, [t.primary.toString(), t.secondary].concat((0, n.default)(null !== (l = t.additionalSearchFilterMetadata) && void 0 !== l ? l : [])))
                                })))
                            },
                            enabled: a,
                            onDown: j,
                            onEnter: j,
                            onFocus: k,
                            type: s.ListSearchType.SELECT_DROPDOWN_SEARCH,
                            backIcon: !1,
                            chatlistFilterEnabled: !1,
                            borderBottom: !1,
                            placeholder: b.fbt._("Search", null, {
                                hk: "2gzUFp"
                            }),
                            xstyle: [E.uiMargin.horiz12, E.uiMargin.top15, E.uiMargin.bottom5]
                        }), (0, M.jsx)(v.default, {
                            ref: T,
                            active: S.current,
                            onLeave: a ? k : void 0,
                            onEnter: function() {
                                var e, t = null === (e = S.current.getVal()) || void 0 === e ? void 0 : e.id;
                                null != t && i(t)
                            },
                            onIndexChange: N,
                            role: "listbox",
                            xstyle: [L.dropdownMenuOptionContainer, E.uiPadding.bottom1],
                            children: R.map((function(e) {
                                return (0, M.jsx)(H, {
                                    item: e,
                                    selected: (null == l ? void 0 : l.id) === e.id,
                                    active: S.current,
                                    onSelect: i,
                                    testIdPrefix: null != d ? d : "select-dropdown"
                                }, e.id)
                            }))
                        })]
                    })
                })
            }

            function H(e) {
                var t = e.item,
                    l = e.selected,
                    a = e.active,
                    n = e.onSelect,
                    r = e.testIdPrefix,
                    d = (0, w.default)(a, t.id),
                    s = (0, o.default)(d, 2),
                    c = s[0],
                    f = s[1];
                return (0, M.jsx)("div", {
                    ref: c,
                    role: "option",
                    "aria-selected": l,
                    tabIndex: -1,
                    "data-testid": `${r}-option-${t.id}`,
                    children: (0, M.jsx)(u.default, (0, i.default)({
                        className: (0, A.default)(L.dropdownMenuOption, E.uiPadding.horiz24, E.uiPadding.vert12),
                        theme: "select-dropdown-item",
                        onClick: function(e) {
                            e.stopPropagation(), n(t.id)
                        },
                        active: f
                    }, t))
                })
            }
            t.WAWebSelectDropdown = k, k.displayName = "WAWebSelectDropdown"
        },
        247211: (e, t, l) => {
            "use strict";
            var a = l(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.scrollAt = function(e, t) {
                var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = r(t || e.offsetParent),
                    n = l.pos || "center",
                    o = null != l.duration && 0 !== l.duration ? l.duration : 1e3,
                    d = l.offset || 0;
                switch (n) {
                    case "top":
                        return a.scrollTop = e.offsetTop + d, Promise.resolve();
                    case "bottom":
                        return a.scrollTop = e.offsetTop + e.clientHeight - a.clientHeight, Promise.resolve();
                    case "center":
                        return l.animate ? ((0, i.default)(e, "stop"), (0, i.default)(a, "stop"), (0, i.default)(e, "scroll", {
                            duration: o,
                            container: a,
                            offset: (e.clientHeight - a.clientHeight) / 2,
                            easing: l.easing
                        })) : (a.scrollTop = e.offsetTop + e.clientHeight / 2 - a.clientHeight / 2, Promise.resolve());
                    case "offset":
                        return l.animate ? ((0, i.default)(e, "stop"), (0, i.default)(a, "stop"), (0, i.default)(e, "scroll", {
                            duration: o,
                            container: a,
                            offset: -d,
                            easing: l.easing
                        })) : (a.scrollTop = e.offsetTop - d, Promise.resolve())
                }
                return Promise.resolve()
            }, t.scrollIntoView = function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    l = arguments.length > 2 ? arguments[2] : void 0,
                    a = r(l || e.parentNode),
                    n = window.getComputedStyle(a, null),
                    i = parseInt(n.getPropertyValue("border-top-width"), 10),
                    o = e.offsetTop - a.offsetTop < a.scrollTop,
                    d = e.offsetTop - a.offsetTop + e.clientHeight - i > a.scrollTop + a.clientHeight;
                t ? a.scrollTop = e.offsetTop - a.offsetTop - a.clientHeight / 2 - i + e.clientHeight / 2 : e.scrollIntoView(o && !d);
                return !(o || d)
            }, t.scrollIntoViewIfNeeded = function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    l = arguments.length > 2 ? arguments[2] : void 0;
                if (e.scrollIntoViewIfNeeded && (0, n.isFunction)(e.scrollIntoViewIfNeeded)) return e.scrollIntoViewIfNeeded(t);
                var a = r(l || e.parentNode),
                    i = window.getComputedStyle(a, null),
                    o = parseInt(i.getPropertyValue("border-top-width"), 10),
                    d = e.offsetTop - a.offsetTop < a.scrollTop,
                    u = e.offsetTop - a.offsetTop + e.clientHeight - o > a.scrollTop + a.clientHeight;
                (d || u) && t && (a.scrollTop = e.offsetTop - a.offsetTop - a.clientHeight / 2 - o + e.clientHeight / 2);
                !d && !u || t || e.scrollIntoView(d && !u);
                return !(d || u)
            };
            var n = l(689121),
                i = a(l(931771)),
                o = a(l(580845));

            function r(e) {
                if (e && e instanceof HTMLElement) return e;
                throw (0, o.default)("utils:DOM parent not defined or is not a valid HTMLElement")
            }
        },
        78693: (e, t, l) => {
            "use strict";
            var a = l(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BackIcon = function(e) {
                var t, l, a = e.iconXstyle,
                    s = e.height,
                    c = e.width,
                    f = e.viewBox,
                    h = (0, i.default)(e, u);
                if (f) {
                    var v = f.x,
                        C = void 0 === v ? 0 : v,
                        m = f.y,
                        p = void 0 === m ? 0 : m,
                        S = f.width,
                        _ = void 0 === S ? 0 : S,
                        E = f.height;
                    l = [C, p, _, void 0 === E ? 0 : E].join(" ")
                }
                var T = 24,
                    b = 24;
                null == s && null == c || (T = s, b = c);
                return (0, d.jsx)(o.BaseSvgSpan, (0, n.default)((0, n.default)({
                    name: "back"
                }, h), {}, {
                    children: (0, d.jsx)("svg", {
                        viewBox: null !== (t = l) && void 0 !== t ? t : "0 0 24 24",
                        height: T,
                        width: b,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(a),
                        version: "1.1",
                        x: "0px",
                        y: "0px",
                        enableBackground: "new 0 0 24 24",
                        xmlSpace: "preserve",
                        children: (0, d.jsx)("path", {
                            fill: "currentColor",
                            d: "M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"
                        })
                    })
                }))
            };
            var n = a(l(81109)),
                i = a(l(506479)),
                o = l(401304),
                r = a(l(156720)),
                d = l(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        317109: (e, t, l) => {
            "use strict";
            var a = l(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CaretDownIcon = function(e) {
                var t, l, a = e.iconXstyle,
                    s = e.height,
                    c = e.width,
                    f = e.viewBox,
                    h = (0, i.default)(e, u);
                if (f) {
                    var v = f.x,
                        C = void 0 === v ? 0 : v,
                        m = f.y,
                        p = void 0 === m ? 0 : m,
                        S = f.width,
                        _ = void 0 === S ? 0 : S,
                        E = f.height;
                    l = [C, p, _, void 0 === E ? 0 : E].join(" ")
                }
                var T = 5,
                    b = 10;
                null == s && null == c || (T = s, b = c);
                return (0, d.jsx)(o.BaseSvgSpan, (0, n.default)((0, n.default)({
                    name: "caret-down"
                }, h), {}, {
                    children: (0, d.jsx)("svg", {
                        viewBox: null !== (t = l) && void 0 !== t ? t : "0 0 10 5",
                        height: T,
                        width: b,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(a),
                        fill: "none",
                        children: (0, d.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M0 0L5 5L10 0H0Z",
                            fill: "currentColor",
                            fillOpacity: .3
                        })
                    })
                }))
            };
            var n = a(l(81109)),
                i = a(l(506479)),
                o = l(401304),
                r = a(l(156720)),
                d = l(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        148389: (e, t, l) => {
            "use strict";
            var a = l(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChatAssignmentWithContainerIcon = function(e) {
                var t, l, a = e.iconXstyle,
                    s = e.height,
                    c = e.width,
                    f = e.viewBox,
                    h = (0, i.default)(e, u);
                if (f) {
                    var v = f.x,
                        C = void 0 === v ? 0 : v,
                        m = f.y,
                        p = void 0 === m ? 0 : m,
                        S = f.width,
                        _ = void 0 === S ? 0 : S,
                        E = f.height;
                    l = [C, p, _, void 0 === E ? 0 : E].join(" ")
                }
                var T = 24,
                    b = 24;
                null == s && null == c || (T = s, b = c);
                return (0, d.jsx)(o.BaseSvgSpan, (0, n.default)((0, n.default)({
                    name: "chat-assignment-with-container"
                }, h), {}, {
                    children: (0, d.jsxs)("svg", {
                        viewBox: null !== (t = l) && void 0 !== t ? t : "0 0 24 24",
                        height: T,
                        width: b,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(a),
                        fill: "none",
                        children: [(0, d.jsx)("path", {
                            d: "M14.7 11.9998C16.7 11.9998 18.3 10.3998 18.3 8.3998C18.3 6.3998 16.7 4.7998 14.7 4.7998C12.7 4.7998 11.1 6.3998 11.1 8.3998C11.1 10.3998 12.7 11.9998 14.7 11.9998ZM14.7 13.7998C12.3 13.7998 7.5 14.9998 7.5 17.3998V19.1998H22V17.3998C21.9 14.9998 17.1 13.7998 14.7 13.7998Z",
                            fill: "currentColor"
                        }), (0, d.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M9.09961 12.0643H2.09961V10.2578H9.09961V12.0643Z",
                            fill: "currentColor"
                        }), (0, d.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7.85521 11.1162L5.51172 8.7727L6.77368 7.51074L10.3791 11.1162L6.77368 14.7216L5.51172 13.4597L7.85521 11.1162Z",
                            fill: "currentColor"
                        })]
                    })
                }))
            };
            var n = a(l(81109)),
                i = a(l(506479)),
                o = l(401304),
                r = a(l(156720)),
                d = l(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        552186: (e, t, l) => {
            "use strict";
            var a = l(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ContactsIcon = function(e) {
                var t, l, a = e.iconXstyle,
                    s = e.height,
                    c = e.width,
                    f = e.viewBox,
                    h = (0, i.default)(e, u);
                if (f) {
                    var v = f.x,
                        C = void 0 === v ? 0 : v,
                        m = f.y,
                        p = void 0 === m ? 0 : m,
                        S = f.width,
                        _ = void 0 === S ? 0 : S,
                        E = f.height;
                    l = [C, p, _, void 0 === E ? 0 : E].join(" ")
                }
                var T = 24,
                    b = 24;
                null == s && null == c || (T = s, b = c);
                return (0, d.jsx)(o.BaseSvgSpan, (0, n.default)((0, n.default)({
                    name: "contacts"
                }, h), {}, {
                    children: (0, d.jsx)("svg", {
                        viewBox: null !== (t = l) && void 0 !== t ? t : "0 0 24 24",
                        height: T,
                        width: b,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(a),
                        fill: "currentColor",
                        children: (0, d.jsx)("path", {
                            d: "M12 12C13.9338 12 15.5 10.4338 15.5 8.5C15.5 6.56625 13.9338 5 12 5C10.0662 5 8.5 6.56625 8.5 8.5C8.5 10.4338 10.0662 12 12 12ZM12 13.75C9.66375 13.75 5 14.9225 5 17.25V18.125C5 18.6063 5.39375 19 5.875 19H18.125C18.6063 19 19 18.6063 19 18.125V17.25C19 14.9225 14.3363 13.75 12 13.75Z"
                        })
                    })
                }))
            };
            var n = a(l(81109)),
                i = a(l(506479)),
                o = l(401304),
                r = a(l(156720)),
                d = l(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        61091: (e, t, l) => {
            "use strict";
            var a = l(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FilterIcon = function(e) {
                var t, l, a = e.iconXstyle,
                    s = e.height,
                    c = e.width,
                    f = e.viewBox,
                    h = (0, i.default)(e, u);
                if (f) {
                    var v = f.x,
                        C = void 0 === v ? 0 : v,
                        m = f.y,
                        p = void 0 === m ? 0 : m,
                        S = f.width,
                        _ = void 0 === S ? 0 : S,
                        E = f.height;
                    l = [C, p, _, void 0 === E ? 0 : E].join(" ")
                }
                var T = 24,
                    b = 24;
                null == s && null == c || (T = s, b = c);
                return (0, d.jsx)(o.BaseSvgSpan, (0, n.default)((0, n.default)({
                    name: "filter"
                }, h), {}, {
                    children: (0, d.jsx)("svg", {
                        viewBox: null !== (t = l) && void 0 !== t ? t : "0 0 24 24",
                        height: T,
                        width: b,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(a),
                        version: "1.1",
                        x: "0px",
                        y: "0px",
                        enableBackground: "new 0 0 24 24",
                        xmlSpace: "preserve",
                        children: (0, d.jsx)("path", {
                            fill: "currentColor",
                            d: "M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"
                        })
                    })
                }))
            };
            var n = a(l(81109)),
                i = a(l(506479)),
                o = l(401304),
                r = a(l(156720)),
                d = l(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        528943: (e, t, l) => {
            "use strict";
            var a = l(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GroupIcon = function(e) {
                var t, l, a = e.iconXstyle,
                    s = e.height,
                    c = e.width,
                    f = e.viewBox,
                    h = (0, i.default)(e, u);
                if (f) {
                    var v = f.x,
                        C = void 0 === v ? 0 : v,
                        m = f.y,
                        p = void 0 === m ? 0 : m,
                        S = f.width,
                        _ = void 0 === S ? 0 : S,
                        E = f.height;
                    l = [C, p, _, void 0 === E ? 0 : E].join(" ")
                }
                var T = 24,
                    b = 24;
                null == s && null == c || (T = s, b = c);
                return (0, d.jsx)(o.BaseSvgSpan, (0, n.default)((0, n.default)({
                    name: "group"
                }, h), {}, {
                    children: (0, d.jsx)("svg", {
                        viewBox: null !== (t = l) && void 0 !== t ? t : "0 0 24 24",
                        height: T,
                        width: b,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(a),
                        version: "1.1",
                        children: (0, d.jsx)("path", {
                            d: "M16.6705065,9.76023608 C16.6529085,9.68920648 16.6386062,9.61625715 16.6278235,9.54234797 C16.5950165,9.31529357 16.5950165,9.08470256 16.6278235,8.85764816 C16.6386809,8.78352568 16.6529085,8.71078965 16.6705065,8.63944009 C16.6792521,8.60392529 16.688851,8.56873044 16.6993031,8.53385554 C16.7203247,8.4644257 16.7443219,8.39627568 16.7715187,8.33036532 C16.811969,8.2318373 16.8596675,8.13644318 16.9142221,8.04496709 C16.9503779,7.98460259 16.9892641,7.92626446 17.0308805,7.8699527 C17.1555846,7.70143978 17.304666,7.55241673 17.4732291,7.4277774 C17.5865741,7.34390667 17.7079407,7.27145756 17.8355549,7.21148905 C17.933101,7.16557712 18.033921,7.12696999 18.1371838,7.09598595 C18.2068077,7.075189 18.2779674,7.05759157 18.350663,7.04319368 C18.4997454,7.01422291 18.6512831,6.9997575 18.8031543,7 C20.0497293,7 21.0032183,7.95346048 21.0032183,9.19999807 C21.0032183,10.4465357 20.0498252,11.3999961 18.8031543,11.3999961 C18.6512727,11.4001338 18.4997348,11.3855612 18.350663,11.3564825 C18.2779461,11.3420846 18.2067864,11.3244872 18.1371838,11.3036902 C18.0339766,11.2726728 17.9331667,11.2341765 17.8355549,11.1885071 C17.7080054,11.1284171 17.5866504,11.0559749 17.4732291,10.9722187 C17.3046576,10.8474646 17.1555774,10.698335 17.0308805,10.5297235 C16.9892001,10.4735184 16.9503139,10.4151802 16.9142221,10.3547091 C16.8596689,10.2633431 16.8119702,10.1680554 16.7715187,10.0696308 C16.7442366,10.0035072 16.7201647,9.93557043 16.6993031,9.86582063 C16.6889363,9.83094574 16.6793375,9.79575089 16.6705065,9.76023608 Z M7.37542775,9.54235096 C7.36464532,9.61626014 7.3503114,9.68920947 7.33271396,9.76023907 C7.3239259,9.79575388 7.31427397,9.83094873 7.30375817,9.86582362 C7.28293986,9.93557342 7.25889003,10.0035101 7.23160866,10.0696338 C7.19111975,10.1680408 7.1434238,10.2633257 7.08890941,10.3547121 C7.052776,10.4151832 7.01389099,10.4735214 6.97225438,10.5297265 C6.84754421,10.6983234 6.69847066,10.8474507 6.5299187,10.9722217 C6.41649648,11.0559716 6.29514565,11.1284134 6.16760338,11.1885101 C6.06997905,11.234169 5.96916223,11.272665 5.86595125,11.3036932 C5.79639336,11.3244902 5.72523571,11.3420876 5.65247829,11.3564855 C5.5034217,11.3855652 5.35189872,11.4001377 5.20003208,11.3999991 C3.95339736,11.3999991 3,10.4465386 3,9.20000106 C3,7.95346347 3.95346135,7.000003 5.20003208,7.000003 C5.35188827,6.99976056 5.503411,7.01422598 5.65247829,7.04319668 C5.72517172,7.05759457 5.79632937,7.07519199 5.86595125,7.09598895 C5.96921775,7.12698374 6.0700447,7.16559054 6.16760338,7.21149205 C6.29521003,7.27146777 6.41657243,7.34391646 6.5299187,7.4277804 C6.69846197,7.55243703 6.84753667,7.70145768 6.97225438,7.86995569 C7.01386966,7.92626745 7.05275467,7.98460558 7.08890941,8.04497008 C7.1434247,8.13646681 7.19112039,8.23185808 7.23160866,8.33036832 C7.25880471,8.39627867 7.28280122,8.4644287 7.30375817,8.53385854 C7.31425264,8.56873343 7.32390457,8.60392828 7.33271396,8.63944309 C7.3503114,8.71079265 7.36454933,8.78352867 7.37542775,8.85765115 C7.40819088,9.08470863 7.40819088,9.31529348 7.37542775,9.54235096 Z M22.7929266,14.3060989 C22.8269741,14.3574543 22.8549805,14.404197 22.8802915,14.4469419 C22.9253486,14.5205445 22.9653426,14.5970858 23,14.6760425 L23,16 L19.0503939,16 L19.034439,15.8932914 C18.9963073,15.7408745 18.9355176,15.4847596 18.8540708,15.350121 C18.8111628,15.2772394 18.7614082,15.1969773 18.7027312,15.1081047 C18.641173,15.0155419 18.5713121,14.9152912 18.4907629,14.8073525 C18.4125372,14.7021815 18.3246766,14.5914752 18.2249505,14.4730809 C18.127455,14.3586844 18.0206654,14.2402901 17.903962,14.1206658 C17.7149414,13.9267724 17.5150585,13.7436114 17.3052646,13.5720544 C16.9833383,13.3091532 16.6394181,13.0739732 16.2772399,12.8690692 C16.2595191,12.8592287 16.2414885,12.8503107 16.2236437,12.8404701 C16.2554607,12.8247867 16.2854188,12.8081808 16.3182271,12.7928049 C16.3385193,12.7832718 16.3577581,12.7731238 16.3783911,12.7638982 C16.9768717,12.4945128 17.729511,12.3072346 18.6650899,12.3072346 C19.6006689,12.3072346 20.3532153,12.4945128 20.9626939,12.769126 C21.0914487,12.8275544 21.2134497,12.8896729 21.3280775,12.9545591 C21.5478891,13.0786113 21.7565378,13.2212105 21.9517141,13.3807785 C22.0785961,13.4844663 22.1994197,13.5952498 22.3135969,13.71259 C22.3845731,13.7854716 22.4492603,13.8574307 22.5081232,13.9266222 C22.5669861,13.9958136 22.6197148,14.0628525 22.6672389,14.1265086 C22.7147629,14.1901647 22.7561838,14.2504382 22.7929266,14.3060989 Z M15.1716085,7.74415836 C15.2200075,8.07964946 15.2200075,8.42035054 15.1716085,8.75584164 C15.1555709,8.86548925 15.134542,8.97278434 15.1085219,9.07772692 C15.0955119,9.13050506 15.081121,9.18236265 15.0657789,9.23391339 C15.0348494,9.33670802 14.9993069,9.43704786 14.9591516,9.53493289 C14.8993395,9.68026678 14.8288708,9.82098243 14.7483211,9.95593061 C14.694808,10.0452239 14.6373673,10.1314486 14.5759991,10.2146049 C14.3917491,10.4636666 14.1714823,10.6839395 13.9224275,10.8681946 C13.7548915,10.9919136 13.5756258,11.0989026 13.3872045,11.1876251 C13.1446795,11.301243 12.8891075,11.3846154 12.6262385,11.4358665 C12.4060424,11.4787597 12.1822116,11.5002371 11.9578771,11.499998 C10.1163086,11.499998 8.70790776,10.091865 8.70790776,8.25015342 C8.70790776,6.40844185 10.1162472,5.00000197 11.9578771,5.00000197 C12.1822116,4.99976292 12.4060424,5.02124027 12.6262385,5.06413355 C12.7336942,5.08540846 12.838818,5.1113884 12.9416098,5.14207336 C13.0941118,5.18784999 13.2430443,5.24477041 13.3872045,5.31237491 C13.5756258,5.40109743 13.7548915,5.50808637 13.9224275,5.63180539 C14.1714823,5.81606048 14.3917491,6.03633344 14.5759991,6.28539514 C14.6375514,6.3685514 14.6949921,6.45477615 14.7483211,6.54406939 C14.8289324,6.67909012 14.8994032,6.81991241 14.9591516,6.96537396 C14.9994092,7.06305443 15.0349516,7.16329198 15.0657789,7.26608661 C15.0812744,7.31763735 15.0955119,7.36949494 15.1085219,7.42227308 C15.134542,7.52721566 15.1556527,7.63491988 15.1716085,7.74415836 Z M17.8249914,15.8193929 C17.8897189,15.9258172 17.9481539,16.0358895 18,16.1490517 L18,18 L6,18 L6,16.1490517 C6,16.1490517 6.02277064,16.0958512 6.07193663,16.0026733 C6.09650414,15.9559307 6.1276395,15.8993474 6.16586939,15.8347687 C6.16871959,15.8298485 6.17206548,15.8243131 6.17516353,15.8193929 C6.21144165,15.7581969 6.25323429,15.6908505 6.30218342,15.6167388 C6.35494314,15.5370917 6.41516916,15.4506793 6.48351206,15.3590391 C6.55185496,15.2673988 6.62815983,15.1708383 6.71276747,15.0712026 C6.79737511,14.9715669 6.89053336,14.8685485 6.99255202,14.763685 C7.1568922,14.5950372 7.33065712,14.4356965 7.51302376,14.2864177 C7.76631331,14.080485 8.03511031,13.8940976 8.31705967,13.7288884 C8.37720307,13.6936264 8.43875092,13.6587744 8.50170322,13.6243324 C8.61763211,13.5608813 8.73845591,13.4997878 8.86417462,13.4410519 C8.89335821,13.4275212 8.92102376,13.4130678 8.95070305,13.3998446 C9.81118535,13.0123724 10.6420799,12.742987 11.9872206,12.742987 C13.3323612,12.742987 14.1886288,13.0123724 15.0649111,13.407225 C15.2502569,13.4914848 15.4253998,13.5803574 15.5903397,13.6738427 C15.9062844,13.8522581 16.2062588,14.0571982 16.4869762,14.2864177 C16.6693577,14.4356797 16.8431235,14.5950212 17.007448,14.763685 C17.1094976,14.8685485 17.2025939,14.9712594 17.2872945,15.0712026 C17.3719951,15.1711458 17.448238,15.2677063 17.5165499,15.3590391 C17.5848618,15.4503718 17.6453047,15.5370917 17.6979715,15.6167388 C17.7467967,15.6908505 17.7885893,15.7581969 17.8249914,15.8193929 Z M4.9523943,15.8935989 L4.94489703,16 L1,16 L1,14.6760425 C1,14.6760425 1.04083225,14.5880925 1.12475832,14.4469419 C1.15006935,14.404197 1.18213413,14.3574543 1.21621264,14.3060989 C1.25295547,14.2504382 1.29493399,14.1898572 1.34242704,14.1265086 C1.38992008,14.06316 1.44286569,13.9961212 1.50182151,13.9266222 C1.56077733,13.8571232 1.62549551,13.7854716 1.69647175,13.71259 C1.81068562,13.5952649 1.93152896,13.4844823 2.05841648,13.3807785 C2.25360912,13.2212176 2.46226747,13.0786188 2.68208414,12.9545591 C2.79695969,12.8896729 2.91889879,12.8275544 3.05868263,12.7638982 C3.6571322,12.4945128 4.40967858,12.3072346 5.34528851,12.3072346 C6.28089843,12.3072346 7.03350678,12.4945128 7.63195635,12.7638982 C7.65262031,12.7731238 7.67185918,12.7832718 7.69215138,12.7928049 C7.71888752,12.8051056 7.7431762,12.8189439 7.76929273,12.8318596 C7.70888083,12.864764 7.6491505,12.8982834 7.59115508,12.9321103 C7.03285425,13.2580451 6.52177043,13.657786 6.07193522,14.1203583 C5.95448829,14.2409051 5.84819433,14.3596069 5.74973843,14.4752335 C5.65208801,14.5908601 5.56617919,14.701874 5.48587784,14.8088901 C5.40638198,14.9155987 5.34002183,15.0158494 5.27830875,15.1093348 C5.22071607,15.1966698 5.17917127,15.2757018 5.12650449,15.3645744 C5.07901144,15.4442214 5.05605492,15.5134129 5.02560113,15.5712262 C4.95378842,15.7074565 4.9523943,15.8935989 4.9523943,15.8935989 Z",
                            fill: "currentColor"
                        })
                    })
                }))
            };
            var n = a(l(81109)),
                i = a(l(506479)),
                o = l(401304),
                r = a(l(156720)),
                d = l(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        532514: (e, t, l) => {
            "use strict";
            var a = l(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NonContactsIcon = function(e) {
                var t, l, a = e.iconXstyle,
                    s = e.height,
                    c = e.width,
                    f = e.viewBox,
                    h = (0, i.default)(e, u);
                if (f) {
                    var v = f.x,
                        C = void 0 === v ? 0 : v,
                        m = f.y,
                        p = void 0 === m ? 0 : m,
                        S = f.width,
                        _ = void 0 === S ? 0 : S,
                        E = f.height;
                    l = [C, p, _, void 0 === E ? 0 : E].join(" ")
                }
                var T = 24,
                    b = 24;
                null == s && null == c || (T = s, b = c);
                return (0, d.jsx)(o.BaseSvgSpan, (0, n.default)((0, n.default)({
                    name: "non_contacts"
                }, h), {}, {
                    children: (0, d.jsx)("svg", {
                        viewBox: null !== (t = l) && void 0 !== t ? t : "0 0 24 24",
                        height: T,
                        width: b,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(a),
                        fill: "#010101",
                        children: (0, d.jsx)("path", {
                            d: "M9.77007 6.19461C10.3688 5.26701 11.4144 4.65986 12.595 4.65986C14.4587 4.65986 15.9681 6.16931 15.9681 8.03294C15.9681 9.21352 15.361 10.2592 14.4334 10.8579L9.77007 6.19461ZM19.3412 15.7657C19.3243 14.8381 18.8099 13.9864 17.9835 13.5564C17.5282 13.3202 17.0306 13.101 16.4909 12.9155L19.3412 15.7657ZM19.7544 18.5654L5.43567 4.24666C5.10679 3.91778 4.57553 3.91778 4.24666 4.24666C3.91778 4.57553 3.91778 5.10679 4.24666 5.43567L11.1446 12.3336C9.60985 12.5276 8.26905 13.0082 7.18124 13.5648C6.35483 14.0033 5.84887 14.8719 5.84887 15.8079V18.1522H16.9547L18.5569 19.7544C18.8858 20.0833 19.4171 20.0833 19.746 19.7544C20.0833 19.4255 20.0833 18.8943 19.7544 18.5654Z"
                        })
                    })
                }))
            };
            var n = a(l(81109)),
                i = a(l(506479)),
                o = l(401304),
                r = a(l(156720)),
                d = l(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        636979: (e, t, l) => {
            "use strict";
            var a = l(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SearchIcon = function(e) {
                var t, l, a = e.iconXstyle,
                    s = e.height,
                    c = e.width,
                    f = e.viewBox,
                    h = (0, i.default)(e, u);
                if (f) {
                    var v = f.x,
                        C = void 0 === v ? 0 : v,
                        m = f.y,
                        p = void 0 === m ? 0 : m,
                        S = f.width,
                        _ = void 0 === S ? 0 : S,
                        E = f.height;
                    l = [C, p, _, void 0 === E ? 0 : E].join(" ")
                }
                var T = 24,
                    b = 24;
                null == s && null == c || (T = s, b = c);
                return (0, d.jsx)(o.BaseSvgSpan, (0, n.default)((0, n.default)({
                    name: "search"
                }, h), {}, {
                    children: (0, d.jsx)("svg", {
                        viewBox: null !== (t = l) && void 0 !== t ? t : "0 0 24 24",
                        height: T,
                        width: b,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(a),
                        version: "1.1",
                        x: "0px",
                        y: "0px",
                        enableBackground: "new 0 0 24 24",
                        xmlSpace: "preserve",
                        children: (0, d.jsx)("path", {
                            fill: "currentColor",
                            d: "M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"
                        })
                    })
                }))
            };
            var n = a(l(81109)),
                i = a(l(506479)),
                o = l(401304),
                r = a(l(156720)),
                d = l(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        556387: (e, t, l) => {
            "use strict";
            var a = l(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SearchUnreadIcon = function(e) {
                var t, l, a = e.iconXstyle,
                    s = e.height,
                    c = e.width,
                    f = e.viewBox,
                    h = (0, i.default)(e, u);
                if (f) {
                    var v = f.x,
                        C = void 0 === v ? 0 : v,
                        m = f.y,
                        p = void 0 === m ? 0 : m,
                        S = f.width,
                        _ = void 0 === S ? 0 : S,
                        E = f.height;
                    l = [C, p, _, void 0 === E ? 0 : E].join(" ")
                }
                var T = 24,
                    b = 24;
                null == s && null == c || (T = s, b = c);
                return (0, d.jsx)(o.BaseSvgSpan, (0, n.default)((0, n.default)({
                    name: "search-unread"
                }, h), {}, {
                    children: (0, d.jsxs)("svg", {
                        viewBox: null !== (t = l) && void 0 !== t ? t : "0 0 24 24",
                        height: T,
                        width: b,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(a),
                        version: "1.1",
                        children: [(0, d.jsx)("path", {
                            d: "M19.7184267,11.1602431 L19.7184267,15.3413127 C19.7184267,16.2540249 18.9455846,17 18,17 L7.71842675,17 C6.77284219,17 6,16.2540249 6,15.3413127 L6,10.5 L3.40821194,6.74308348 C3.12509322,6.3326898 3.29958688,6 3.7951967,6 L13.6115082,6 C13.5385307,6.32161137 13.5,6.65630602 13.5,7 C13.5,9.48528137 15.5147186,11.5 18,11.5 C18.6085836,11.5 19.1889505,11.3791898 19.7184267,11.1602431 Z",
                            fill: "currentColor"
                        }), (0, d.jsx)("path", {
                            d: "M18,10 C19.6568542,10 21,8.65685425 21,7 C21,5.34314575 19.6568542,4 18,4 C16.3431458,4 15,5.34314575 15,7 C15,8.65685425 16.3431458,10 18,10 Z",
                            fillOpacity: .4,
                            fill: "#727475"
                        })]
                    })
                }))
            };
            var n = a(l(81109)),
                i = a(l(506479)),
                o = l(401304),
                r = a(l(156720)),
                d = l(785893),
                u = ["iconXstyle", "height", "width", "viewBox"]
        },
        995480: (e, t, l) => {
            "use strict";
            var a = l(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t, l) {
                var a = null != l ? l : function(l) {
                        var a;
                        return (null == e || null === (a = e.getter) || void 0 === a ? void 0 : a.call(e, l)) === t
                    },
                    u = (0, r.useRef)(null),
                    s = (0, r.useState)(!1),
                    c = (0, n.default)(s, 2),
                    f = c[0],
                    h = c[1],
                    v = null != (null == e ? void 0 : e.value) && a(e.value);
                f !== v && h(v);
                return (0, d.useListener)(e, t, (function(e, t) {
                    if ("focus" === e) {
                        var l = u.current;
                        l && (o.default.focus(l), t && (0, i.scrollIntoViewIfNeeded)(l))
                    }
                    h(!!e)
                })), [u, f]
            };
            var n = a(l(963038)),
                i = l(247211),
                o = a(l(81724)),
                r = l(667294),
                d = l(494092)
        },
        594778: (e, t, l) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = l(704250),
                n = l(667294),
                i = l(785893);

            function o(e, t) {
                var l = e.active,
                    n = e.role,
                    o = e.xstyle,
                    r = e.onIndexChange,
                    d = e.onLeave,
                    u = e.onEnter,
                    s = function(e) {
                        null == u || u(e)
                    },
                    c = function(e) {
                        var t = e.relatedTarget;
                        return t instanceof HTMLElement && e.currentTarget instanceof HTMLElement && !e.currentTarget.contains(t)
                    };
                return (0, i.jsx)(a.HotKeys, {
                    handlers: {
                        down: function(e) {
                            e.preventDefault(), e.stopPropagation(), l.setNext(!0), null == r || r(l.index)
                        },
                        up: function(e) {
                            e.stopPropagation(), e.preventDefault(), l.prev() > -1 ? (l.setPrev(!0), null == r || r(l.index)) : d && (d(e), l.unset())
                        },
                        enter: s,
                        space: s
                    },
                    ref: t,
                    onFocus: function(e) {
                        c(e) && l.setFirst(!0)
                    },
                    onBlur: function(e) {
                        c(e) && l.unset()
                    },
                    tabIndex: 0,
                    xstyle: o,
                    role: n,
                    children: e.children
                })
            }
            var r = (0, n.forwardRef)(o);
            t.default = r
        },
        816308: (e, t, l) => {
            "use strict";
            var a = l(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(l(81109)),
                i = a(l(506479)),
                o = l(796520),
                r = l(704250),
                d = l(667294),
                u = a(l(273122)),
                s = l(785893),
                c = ["enabled", "setSearchText", "onEnter", "onDown", "onFocus", "searchType", "xstyle"];

            function f(e, t) {
                var l = e.enabled,
                    a = void 0 === l || l,
                    d = e.setSearchText,
                    f = e.onEnter,
                    h = e.onDown,
                    v = e.onFocus,
                    C = e.searchType,
                    m = e.xstyle,
                    p = (0, i.default)(e, c),
                    S = (0, u.default)((function(e) {
                        d(e)
                    }), 100);
                return a ? (0, s.jsx)(r.HotKeys, {
                    handlers: {
                        down: h
                    },
                    onFocus: v,
                    xstyle: m,
                    children: (0, s.jsx)(o.ListSearch, (0, n.default)({
                        ref: t,
                        onSearch: S,
                        onEnter: f,
                        type: C
                    }, p))
                }) : null
            }
            var h = (0, d.forwardRef)(f);
            t.default = h
        },
        367589: (e, t, l) => {
            "use strict";
            var a = l(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, o.useState)((function() {
                        return (0, i.isInitializedAndFeatureFlagEnabled)(e)
                    })),
                    l = (0, n.default)(t, 2),
                    a = l[0],
                    r = l[1];
                return (0, o.useEffect)((function() {
                    return (0, i.listen)(e, (function(e, t) {
                        t && r(Boolean(e && !e.isDeactivated))
                    }))
                }), []), a
            };
            var n = a(l(963038)),
                i = l(39852),
                o = l(667294)
        },
        713056: (e, t, l) => {
            "use strict";
            l.r(t), l.d(t, {
                default: () => a
            });
            const a = {
                iconSpinner: "_38r4-",
                iconCloseSearch: "-Jnba",
                iconLabelSelect: "_2iNbI",
                iconMorph: "_3xdht",
                inputPlaceholder: "_3sHED",
                inputPlaceholderHidden: "_1biMM",
                listSearch: "_3wQ5i",
                borderBottom: "o7fBL",
                chatlistFilterEnabled: "_1s7Pa",
                inputContainer: "_1EUay",
                inputWrapper: "_2vDPL",
                commandPalette: "gp9H4",
                active: "_1tRmd",
                iconSearch: "_28iyj",
                iconMorphSearch: "_1ZD3q",
                iconMorphBack: "_2hW8J",
                iconSearchMorph: "opCKJ",
                kind: "_1dWHp",
                labels: "PYp6x",
                kindName: "_1fW37",
                filterTitle: "_21hsb",
                iconAdjustCenterLeft: "Gxhab",
                selectDropdownType: "sA25I"
            }
        },
        430540: (e, t, l) => {
            "use strict";
            l.r(t), l.d(t, {
                default: () => a
            });
            const a = {
                chat: "_199zF",
                chatInteractive: "_3j691",
                chatAvatar: "_13jwn",
                image: "_1AHcd",
                chatBody: "_8nE1Y",
                chatDetails: "_2GJfO",
                chatMain: "y_sn4",
                noDelete: "_3PYYz",
                chatSecondary: "_2KKXC",
                chatTitle: "_21S-L",
                chatStatus: "vQ0w7",
                chatMeta: "Dvjym",
                active: "_2IMPQ",
                unread: "_1KV7I",
                chatDrag: "_263Ht",
                idle: "KStWd",
                themeReaction: "n1rvZ",
                themeReactionByOthers: "_3M8VK",
                isMuted: "_2GVXA",
                themeMessage: "EWAjz",
                themeSearch: "_1Qmal",
                themeDrawerList: "cMa7y",
                themeChatInfo: "_22yb-",
                themeSubgroup: "VoHP6",
                tallerCellWithLabel: "_3XKqC",
                chatLabel: "Eh_7u",
                themeSubgroupNew: "coL74",
                themeCommunityHome: "_1fdfK",
                themeRadioButtonRow: "_1Bgk6",
                themeStatus: "_3Xd7d",
                themeCheckbox: "_2N1Gm",
                themeIdentity: "_3uDlQ",
                themePlain: "H25O7",
                themeReactionByMe: "_1JVw9",
                themeAddOrderItem: "_15Eef",
                themeAddItem: "_1iVU_",
                themeAddItemPlaceholder: "_28lme",
                themeListNames: "bA-oY",
                member: "_1PD0Z",
                disabled: "_14FMv",
                themeLabel: "_1hrJh",
                groupsV4Invite: "pKrqL",
                orderProduct: "h6WUr",
                product: "Xr0ql",
                cartProduct: "_2Yj0r",
                stickerPack: "_36EmP",
                media: "_2qktw",
                listButton: "wOx1k",
                productOfCollection: "_2tmcv",
                collectionEdit: "we5da",
                collectionHeader: "_3oI3-",
                productOutOfStock: "_2F7qZ",
                listMsg: "_3Q3zZ",
                archivePanel: "_1LWrV",
                linkedAccount: "_2U9Si",
                linkedAccountConsumer: "_3b7hT",
                themeCheckboxDisabled: "_1piAP",
                themeNoBorder: "_1IHST",
                themeSelectDropdownItem: "_26QSw",
                themeCommunityTabHome: "MHldO",
                themeCommunityTabHomeNew: "_2f3Gr",
                themeCommunityTabSubgroup: "_1vTfB",
                themeCommunityTabViewAll: "_2cERb",
                themeCommunityTabActivityCell: "_2JJJ1",
                themeProductAddToOrder: "LIe4T",
                themeCommunityCreate: "_2GpS5"
            }
        }
    }
]);