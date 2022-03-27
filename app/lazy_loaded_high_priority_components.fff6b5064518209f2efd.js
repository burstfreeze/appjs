/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [7205], {
        57043: (e, t, n) => {
            var a = n(62488),
                i = n(21078),
                r = n(278),
                o = n(1469);
            e.exports = function() {
                var e = arguments.length;
                if (!e) return [];
                for (var t = Array(e - 1), n = arguments[0], l = e; l--;) t[l - 1] = arguments[l];
                return a(o(n) ? r(n) : [n], i(t, 1))
            }
        },
        30523: e => {
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
                                r = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now,
                                o = (n = e.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(n) ? 1 : 0);
                            e.scroll = e.scrollTo = function() {
                                void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? p.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : i.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset))
                            }, e.scrollBy = function() {
                                void 0 !== arguments[0] && (s(arguments[0]) ? i.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset)))
                            }, a.prototype.scroll = a.prototype.scrollTo = function() {
                                if (void 0 !== arguments[0])
                                    if (!0 !== s(arguments[0])) {
                                        var e = arguments[0].left,
                                            t = arguments[0].top;
                                        p.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
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
                                        r = this.getBoundingClientRect();
                                    n !== t.body ? (p.call(this, n, n.scrollLeft + r.left - a.left, n.scrollTop + r.top - a.top), "fixed" !== e.getComputedStyle(n).position && e.scrollBy({
                                        left: a.left,
                                        top: a.top,
                                        behavior: "smooth"
                                    })) : e.scrollBy({
                                        left: r.left,
                                        top: r.top,
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
                            return "Y" === t ? e.clientHeight + o < e.scrollHeight : "X" === t ? e.clientWidth + o < e.scrollWidth : void 0
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

                        function h(t) {
                            var n, a, i, o, l = (r() - t.startTime) / 468;
                            o = l = l > 1 ? 1 : l, n = .5 * (1 - Math.cos(Math.PI * o)), a = t.startX + (t.x - t.startX) * n, i = t.startY + (t.y - t.startY) * n, t.method.call(t.scrollable, a, i), a === t.x && i === t.y || e.requestAnimationFrame(h.bind(e, t))
                        }

                        function p(n, a, o) {
                            var s, u, c, d, f = r();
                            n === t.body ? (s = e, u = e.scrollX || e.pageXOffset, c = e.scrollY || e.pageYOffset, d = i.scroll) : (s = n, u = n.scrollLeft, c = n.scrollTop, d = l), h({
                                scrollable: s,
                                method: d,
                                startTime: f,
                                startX: u,
                                startY: c,
                                x: a,
                                y: o
                            })
                        }
                    }
                }
            }()
        },
        55713: (e, t, n) => {
            "use strict";
            var a = n(7914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var n;
                if (e.size !== t.size) return !1;
                var a, o = (0, r.default)(e);
                try {
                    for (o.s(); !(a = o.n()).done;) {
                        var l = (0, i.default)(a.value, 2),
                            s = l[0],
                            u = l[1];
                        if ((n = t.get(s)) !== u || void 0 === n && !t.has(s)) return !1
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
                return !0
            };
            var i = a(n(37613)),
                r = a(n(68217))
        },
        75266: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                i = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.queryAndUpdateSubgroupsMetadata = function(e) {
                if (o.GK.supportsFeature(o.GK.F.MD_BACKEND)) return (0, u.queryAllSubgroups)(e).then((function(t) {
                    var n = function(e) {
                            var t = (0, r.getUnjoinedGroupIds)(e.map((function(e) {
                                    return e.id
                                }))),
                                n = [],
                                a = [];
                            return e.forEach((function(e) {
                                t.includes(e.id) ? n.push(e) : a.push(e)
                            })), {
                                unjoinedSubgroups: n,
                                joinedSubgroups: a
                            }
                        }(t),
                        a = n.unjoinedSubgroups,
                        i = n.joinedSubgroups;
                    a.forEach((function(t) {
                            d(t, e)
                        })), i.forEach((function(e) {
                            (0, s.createOrUpdateGroupMetadataModel)(e)
                        })),
                        function(e, t) {
                            var n = l.default.get(e.toString());
                            if (null == n) return;
                            n.set({
                                unjoinedSubgroups: t.map((function(e) {
                                    return e.id
                                }))
                            })
                        }(e, a)
                }));
                return a.resolve()
            }, t.querySubgroupInfo = function(e, t) {
                if (o.GK.supportsFeature(o.GK.F.MD_BACKEND)) return (0, u.querySubgroup)(t, e).then((function(e) {
                    d(e, t)
                })).then((function() {
                    return c.default.get(e.toString())
                }));
                return a.resolve()
            };
            var r = n(6836),
                o = n(38032),
                l = i(n(52336)),
                s = n(45065),
                u = n(39707),
                c = i(n(54172));

            function d(e, t) {
                c.default.gadd({
                    id: e.id,
                    parentGroupId: t,
                    subject: e.subject,
                    participants: e.participants
                })
            }
        },
        39707: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                i = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.queryAllSubgroups = function() {
                return m.apply(this, arguments)
            }, t.querySubgroup = function() {
                return v.apply(this, arguments)
            };
            var r = i(n(87757)),
                o = i(n(48926)),
                l = n(78363),
                s = n(84470),
                u = n(34733),
                c = n(50018),
                d = n(15824),
                f = n(59175),
                h = new s.WapParser("queryAllSubgroupsParser", (function(e) {
                    return e.child("sub_groups").mapChildren(c.parseSubgroupNode)
                })),
                p = new s.WapParser("querySubgroupParser", (function(e) {
                    return e.child("linked_group").mapChildren(c.parseSubgroupInfoNode)
                }));

            function m() {
                return (m = (0, o.default)(r.default.mark((function e(t) {
                    var n, i, o, s = arguments;
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = s.length > 1 && void 0 !== s[1] ? s[1] : (0, l.generateId)(), i = (0, l.wap)("iq", {
                                    to: (0, d.GROUP_JID)(t),
                                    type: "get",
                                    xmlns: "w:g2",
                                    id: n
                                }, (0, l.wap)("sub_groups", null)), e.next = 4, (0, u.sendIq)(i, h);
                            case 4:
                                if ((o = e.sent).success) {
                                    e.next = 8;
                                    break
                                }
                                return __LOG__(2)`queryAllSubgroups failed: ${o.errorCode}:${o.errorType}`, e.abrupt("return", a.reject(new f.ServerStatusCodeError(o.errorCode, o.errorText)));
                            case 8:
                                return e.abrupt("return", o.result);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function v() {
                return (v = (0, o.default)(r.default.mark((function e(t, n) {
                    var i, o, s, c = arguments;
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return i = c.length > 2 && void 0 !== c[2] ? c[2] : (0, l.generateId)(), o = (0, l.wap)("iq", {
                                    to: (0, d.GROUP_JID)(n),
                                    type: "get",
                                    xmlns: "w:g2",
                                    id: i
                                }, (0, l.wap)("query_linked", {
                                    type: "sub_group",
                                    jid: (0, d.GROUP_JID)(t)
                                })), e.next = 4, (0, u.sendIq)(o, p);
                            case 4:
                                if ((s = e.sent).success) {
                                    e.next = 8;
                                    break
                                }
                                return __LOG__(2)`queryAllSubgroups failed: ${s.errorCode}:${s.errorType}`, e.abrupt("return", a.reject(new f.ServerStatusCodeError(s.errorCode, s.errorText)));
                            case 8:
                                return e.abrupt("return", s.result[0]);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        50018: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseSubgroupInfoNode = function(e) {
                var t, n;
                try {
                    n = (0, o.createWid)(`${e.attrString("id")}@g.us`)
                } catch (e) {
                    __LOG__(2)`parseSubgroupNode failed: ${e}`
                }
                if (!(null === (t = n) || void 0 === t ? void 0 : t.isGroup)) throw Error("parseSubgroupNode: invalid group id");
                var a = (0, s.extractDescription)(e),
                    u = e.mapChildrenWithTag("participant", (function(e) {
                        var t = e.attrEnumOrDefault("type", l.GROUP_PARTICIPANT_TYPES, l.GROUP_PARTICIPANT_TYPES.participant);
                        return {
                            id: (0, r.userJidToUserWid)(e.attrPhoneUserJid("jid")),
                            isSuperAdmin: t === l.GROUP_PARTICIPANT_TYPES.superadmin,
                            isAdmin: t === l.GROUP_PARTICIPANT_TYPES.admin || t === l.GROUP_PARTICIPANT_TYPES.superadmin
                        }
                    }));
                return (0, i.default)({
                    id: n,
                    owner: e.hasAttr("creator") ? (0, r.userJidToUserWid)(e.attrPhoneUserJid("creator")) : void 0,
                    creation: e.attrTime("creation"),
                    subject: e.attrString("subject"),
                    subjectTime: e.hasAttr("s_t") ? e.attrTime("s_t") : void 0,
                    participants: u,
                    size: e.hasAttr("size") ? e.attrInt("size") : void 0
                }, a)
            }, t.parseSubgroupNode = function(e) {
                var t, n;
                try {
                    n = (0, o.createWid)(`${e.attrString("id")}@g.us`)
                } catch (e) {
                    __LOG__(2)`parseSubgroupNode failed: ${e}`
                }
                if (!(null === (t = n) || void 0 === t ? void 0 : t.isGroup)) throw Error("parseSubgroupNode: invalid group id");
                return {
                    id: n,
                    subject: e.attrString("subject"),
                    subjectTime: e.hasAttr("s_t") ? e.attrTime("s_t") : void 0
                }
            };
            var i = a(n(81109)),
                r = n(90089),
                o = n(84460),
                l = n(69789),
                s = n(55195)
        },
        44606: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact,
                    n = e.onClick,
                    o = e.contextMenu,
                    l = e.isPendingParticipant,
                    s = e.contextEnabled,
                    u = e.onContext,
                    c = e.theme,
                    d = (0, i.useModelValues)(e.participant, ["isAdmin"]);
                return (0, r.jsx)(a.Contact, {
                    contact: t,
                    admin: d.isAdmin,
                    onClick: n,
                    theme: c || "drawer-list",
                    contextEnabled: function() {
                        return null != s && s(t)
                    },
                    contextMenu: o,
                    onContext: function(e) {
                        return u && u(e, t)
                    },
                    isPendingParticipant: l,
                    showNotifyName: !0,
                    waitIdle: !0
                })
            };
            var a = n(65002),
                i = n(69283),
                r = n(85893)
        },
        93603: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(34575)),
                r = a(n(93913)),
                o = a(n(2205)),
                l = a(n(99842)),
                s = a(n(272)),
                u = n(24096),
                c = n(36708),
                d = n(67294),
                f = a(n(87678)),
                h = a(n(16175)),
                p = n(63641),
                m = a(n(47149)),
                v = n(2099),
                g = n(1146),
                x = a(n(36450)),
                C = n(692),
                b = n(74950),
                _ = n(85893),
                j = function(e) {
                    (0, o.default)(n, e);
                    var t = (0, l.default)(n);

                    function n() {
                        var e;
                        (0, i.default)(this, n);
                        for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r))).startCheckForSuccess = function() {
                            e.checkIteration = 0, e.checkForSuccessInterval = e.props.setInterval(e.checkForSuccess, 250)
                        }, e.clearCheckForSuccess = function() {
                            e.checkForSuccessInterval && (e.props.clearInterval(e.checkForSuccessInterval), e.checkForSuccessInterval = 0, e.checkIteration = 0)
                        }, e.checkForSuccess = function() {
                            if (b.Socket.state === g.SOCKET_STATE.CONNECTED) {
                                e.checkIteration++;
                                var t = e.props.url;
                                if (e.checkIteration > 40) e.handlePlayerError({
                                    target: {
                                        src: t,
                                        error: {
                                            code: window.MediaError.MEDIA_ERR_NETWORK
                                        }
                                    }
                                });
                                else {
                                    var n = (0, s.default)(e._audioElement, "_this._audioElement").buffered;
                                    n.length && n.end(0) > 0 && e.handlePlaying()
                                }
                            }
                        }, e.handlePlayerError = function(t) {
                            e.clearCheckForSuccess(), e.props.onError && e.props.onError(t.target.src)
                        }, e.handlePlaying = function() {
                            e.clearCheckForSuccess()
                        }, e._setRefAudio = function(t) {
                            var n, a;
                            e._audioElement = t, null === (n = (a = e)._unregisterFromAudioChannel) || void 0 === n || n.call(a), e._unregisterFromAudioChannel = null == t ? null : u.MainAudioChannel.registerMedia(t), null != e.props.setRefAudio && e.props.setRefAudio(t)
                        }, e
                    }
                    return (0, r.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.listeners,
                                t = (0, s.default)(this._audioElement, "this._audioElement");
                            this._updatePlaybackRate(), e.add(t, "error", this.handlePlayerError, {
                                capture: !0
                            }), e.add(t, "playing", this.handlePlaying), (C.UA.isGecko || C.UA.isSafari) && (this.props.autoPlay ? (this.checkIteration = 0, this.checkForSuccessInterval = this.props.setInterval(this.checkForSuccess, 250)) : this.props.autoPlay ? this.startCheckForSuccess() : e.add(t, "play", this.startCheckForSuccess))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e;
                            null === (e = this._unregisterFromAudioChannel) || void 0 === e || e.call(this), C.UA.isBlink && (0, h.default)((0, s.default)(this._audioElement, "this._audioElement"))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this._updatePlaybackRate()
                        }
                    }, {
                        key: "_updatePlaybackRate",
                        value: function() {
                            var e = (0, s.default)(this._audioElement, "this._audioElement"),
                                t = this.props.playbackRate;
                            e.defaultPlaybackRate === t && e.playbackRate === t || (e.defaultPlaybackRate = e.playbackRate = null != t ? t : 1)
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            var e;
                            null === (e = this._audioElement) || void 0 === e || e.pause()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = v.ReactionBubbleType.MEDIA_ITEM,
                                t = this.props.msg;
                            return (0, _.jsxs)("div", {
                                className: this.props.className,
                                children: [(0, _.jsx)("audio", {
                                    ref: this._setRefAudio,
                                    className: f.default.audioTag,
                                    src: this.props.url,
                                    onClick: this.props.onClick,
                                    controls: this.props.controls,
                                    preload: this.props.preload,
                                    autoPlay: this.props.autoPlay,
                                    children: this.props.children
                                }), t && (0, c.shouldShowReactionBubble)(t, e) && (0, _.jsx)(m.default, {
                                    msgIds: [t.id.toString()],
                                    reactionBubbleType: e
                                })]
                            })
                        }
                    }]), n
                }(d.Component);
            j.displayName = "AudioTag";
            var S = (0, p.ListenerHOC)((0, x.default)(j));
            t.default = S
        },
        48956: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.docMsgs,
                    a = e.chat,
                    x = (0, r.default)(e, g),
                    C = (0, m.default)(),
                    b = (0, l.useRef)(null);
                (0, p.useListener)(n, "add remove reset query_doc_before", (function() {
                    var e;
                    null === (e = b.current) || void 0 === e || e.forceUpdate()
                })), (c.GK.supportsFeature(c.GK.F.MD_BACKEND) && a.endOfHistoryTransferType === s.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY || a.endOfHistoryTransferType === s.ConversationEndOfHistoryTransferModelPropType.NOT_INCLUDED_IN_HIST_SYNC) && (t = (0, v.jsx)(u.default, {
                    icon: (0, v.jsx)(h.default, {
                        name: "content-chat"
                    }),
                    theme: "list",
                    secondary: o.fbt._("Use WhatsApp on your phone to see the complete message history.", null, {
                        hk: "2qbSkX"
                    }),
                    children: o.fbt._("Older documents may be available", null, {
                        hk: "3q5iPh"
                    })
                }));
                return (0, v.jsxs)(v.Fragment, {
                    children: [(0, v.jsx)(f.default, (0, i.default)({
                        ref: b,
                        msgsCollection: n,
                        queryCollection: function(e, t) {
                            C((function() {
                                n.queryDocs(a, t)
                            }))
                        },
                        hasBefore: n.hasDocBefore,
                        queryBefore: n.queryDocBefore,
                        emptyText: d.default.t(679),
                        chat: a
                    }, x)), t]
                })
            };
            var i = a(n(81109)),
                r = a(n(6479)),
                o = n(48360),
                l = n(67294),
                s = n(29656),
                u = a(n(54864)),
                c = n(38032),
                d = a(n(45159)),
                f = a(n(78053)),
                h = a(n(7665)),
                p = n(8413),
                m = a(n(48311)),
                v = n(85893),
                g = ["docMsgs", "chat"]
        },
        90675: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BaseEphemeralSettingRow = b, t.EphemeralSettingRow = function(e) {
                var t = e.chat,
                    n = e.groupMetadata,
                    a = e.onClick,
                    i = e.theme,
                    r = e.testid;
                if (n) return (0, g.jsx)(C, {
                    groupMetadata: n,
                    onClick: a,
                    theme: i,
                    testid: r
                });
                return (0, g.jsx)(x, {
                    chat: t,
                    onClick: a,
                    theme: i,
                    testid: r
                })
            };
            var i = n(48360),
                r = n(84533),
                o = a(n(98350)),
                l = n(65901),
                s = a(n(86777)),
                u = a(n(81218)),
                c = a(n(32597)),
                d = n(50215),
                f = a(n(45159)),
                h = n(12231),
                p = a(n(7665)),
                m = n(22552),
                v = n(69283),
                g = n(85893);
            var x = function(e) {
                var t = e.onClick,
                    n = e.testid,
                    a = (0, v.useModelValues)(e.chat, ["contact", "ephemeralDuration"]),
                    o = function() {
                        var e;
                        return null !== (e = a.ephemeralDuration) && void 0 !== e ? e : 0
                    },
                    u = function() {
                        a.contact.addPendingAction((0, r.unblockContact)(a.contact)).then((function() {
                            t(), l.Cmd.closeModal()
                        })).catch((function() {}))
                    },
                    c = function() {
                        l.Cmd.closeModal()
                    };
                return (0, g.jsx)(b, {
                    ephemeralDuration: o(),
                    canChange: !0,
                    onClick: function() {
                        a.contact.isContactBlocked ? l.Cmd.openModal((0, g.jsx)(s.default, {
                            onOK: u,
                            okText: f.default.t(788),
                            onCancel: c,
                            cancelText: i.fbt._("Cancel", null, {
                                hk: "H0gNq"
                            }),
                            children: o() ? i.fbt._("You can't turn off disappearing messages for this chat unless you unblock this contact.", null, {
                                hk: "o3zdA"
                            }) : i.fbt._("You can't turn on disappearing messages for this chat unless you unblock this contact.", null, {
                                hk: "1uAyoI"
                            })
                        })) : t()
                    },
                    theme: e.theme,
                    testid: n
                })
            };
            var C = function(e) {
                var t, n = e.onClick,
                    a = e.testid,
                    r = (0, v.useModelValues)(e.groupMetadata, ["ephemeralDuration", "participants"]),
                    o = function() {
                        l.Cmd.closeModal()
                    };
                return (0, g.jsx)(b, {
                    ephemeralDuration: null !== (t = r.ephemeralDuration) && void 0 !== t ? t : 0,
                    canChange: r.canSetEphemeralSetting(),
                    onClick: function() {
                        r.canSetEphemeralSetting() ? n() : l.Cmd.openModal((0, g.jsx)(s.default, {
                            onOK: o,
                            okText: i.fbt._("OK", null, {
                                hk: "2KEeHb"
                            }),
                            children: i.fbt._("Only admins can change this setting.", null, {
                                hk: "1NF1gS"
                            })
                        }))
                    },
                    theme: e.theme,
                    testid: a
                })
            };

            function b(e) {
                var t, n = e.ephemeralDuration,
                    a = e.canChange,
                    r = e.onClick,
                    l = e.testid;
                t = n > 0 ? a ? (0, h.isEphemeral24HDurationEnabled)() ? (0, d.getDisappearingMessageDurationString)(n) : f.default.t(447) : (0, d.getDisappearingMessageExplanationString)(n) : f.default.t(446);
                var s = (0, g.jsx)(p.default, {
                    className: a ? c.default.chevronIcon : c.default.ephemeralIcon,
                    name: a ? "chevron-right-alt" : "disappearing",
                    directional: !0
                });
                if ("new-chat-info" === e.theme) {
                    var v = (0, g.jsx)(m.TextSpan, {
                            theme: "title",
                            children: i.fbt._("Disappearing messages", null, {
                                hk: "384ocn"
                            })
                        }),
                        x = (0, g.jsx)(m.TextDiv, {
                            theme: "muted",
                            children: t
                        });
                    return (0, g.jsx)(o.default, {
                        side: "chevron",
                        icon: "disappearing",
                        onClick: r,
                        title: v,
                        secondaryTitle: x,
                        testid: l
                    })
                }
                return (0, g.jsxs)(u.default, {
                    onClick: r,
                    side: s,
                    multiline: !0,
                    children: [(0, g.jsx)("div", {
                        className: c.default.header,
                        children: (0, g.jsx)(m.TextSpan, {
                            theme: "title",
                            children: i.fbt._("Disappearing messages", null, {
                                hk: "384ocn"
                            })
                        })
                    }), (0, g.jsx)(m.TextDiv, {
                        theme: "muted",
                        children: t
                    })]
                })
            }
        },
        94836: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                i = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.linkMsgs,
                    i = e.chat,
                    j = e.selectedMessages,
                    S = e.selectable,
                    y = e.onMessageSelect,
                    k = (0, C.default)(),
                    E = (0, u.useRef)(null);
                (0, x.useListener)(n, "add remove reset", (function() {
                    var e;
                    null === (e = E.current) || void 0 === e || e.forceUpdate()
                })), (0, x.useListener)(n, "query_doc_before", (function() {
                    var e;
                    null === (e = E.current) || void 0 === e || e.forceUpdate()
                })), (0, x.useListener)(i.msgs, "add bulk_add", (function(e) {
                    if (e) {
                        var t = [],
                            i = Array.isArray(e) ? e : [e];
                        a.all(i.map((function(e) {
                            return e.getLinks().length && t.push(e), a.resolve()
                        }))).then((function() {
                            t.length && n.add(t)
                        }))
                    }
                })), (f.GK.supportsFeature(f.GK.F.MD_BACKEND) && i.endOfHistoryTransferType === c.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY || i.endOfHistoryTransferType === c.ConversationEndOfHistoryTransferModelPropType.NOT_INCLUDED_IN_HIST_SYNC) && (t = (0, b.jsx)(d.default, {
                    icon: (0, b.jsx)(g.default, {
                        name: "content-chat"
                    }),
                    theme: "list",
                    secondary: s.fbt._("Use WhatsApp on your phone to see the complete message history.", null, {
                        hk: "2qbSkX"
                    }),
                    children: s.fbt._("Older links may be available", null, {
                        hk: "1Hs22g"
                    })
                }));
                e.linkMsgs, e.chat;
                var T = (0, o.default)(e, _);
                return (0, b.jsxs)(b.Fragment, {
                    children: [(0, b.jsx)(m.default, (0, r.default)({
                        ref: E,
                        msgsCollection: n,
                        queryCollection: function(e, t) {
                            k((function() {
                                n.queryLinks(i, t)
                            }))
                        },
                        hasBefore: n.hasLinkBefore,
                        queryBefore: n.queryLinkBefore,
                        renderElements: function(e) {
                            var t = [];
                            return n.forEach((function(n) {
                                var a = !n.isSentByMe && n.isGroupMsg;
                                n.getGalleryLinks().forEach((function(i, r) {
                                    i.href !== n.matchedText && t.push((0, b.jsx)(p.default, {
                                        msg: n.safe(),
                                        link: i,
                                        displayAuthor: a,
                                        selectable: S,
                                        selectedMessages: j,
                                        onMessageSelect: y,
                                        onClickMsg: e
                                    }, `${n.id.toString()}-${r}`))
                                })), n.linkPreview && t.push((0, b.jsx)(v.default, {
                                    msg: n,
                                    selectable: S,
                                    selectedMessages: j,
                                    onMessageSelect: y,
                                    displayType: l.DISPLAY_TYPE.GALLERY,
                                    onClickMsg: e
                                }, n.id.toString()))
                            })), t.reverse(), t
                        },
                        emptyText: h.default.t(681),
                        chat: i
                    }, T)), t]
                })
            };
            var r = i(n(81109)),
                o = i(n(6479)),
                l = n(44741),
                s = n(48360),
                u = n(67294),
                c = n(29656),
                d = i(n(54864)),
                f = n(38032),
                h = i(n(45159)),
                p = i(n(76992)),
                m = i(n(78053)),
                v = i(n(79402)),
                g = i(n(7665)),
                x = n(8413),
                C = i(n(48311)),
                b = n(85893),
                _ = ["linkMsgs", "chat"]
        },
        76992: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.link,
                    a = e.displayAuthor,
                    S = e.selectedMessages,
                    y = e.onMessageSelect,
                    k = e.onClickMsg,
                    E = (0, C.useModelValues)(e.msg, ["body", "caption", "dir", "id", "isSentByMe", "mediaData", "type", "rtl", "senderObj", "star", "mediaData", "asRevoked"]),
                    T = (0, s.useState)(!1),
                    M = (0, r.default)(T, 2),
                    w = M[0],
                    I = M[1],
                    P = (0, s.useState)((function() {
                        return S.isSelected(E.unsafe())
                    })),
                    A = (0, r.default)(P, 2),
                    N = A[0],
                    D = A[1];
                (0, x.useListener)(S, E.id.toString(), (function(e) {
                    N !== e && D(e)
                }));
                var O = e.selectable || w ? (0, j.jsx)(v.default, {
                        checked: N,
                        onClick: function(e) {
                            e && e.stopPropagation(), y(E.unsafe(), !N)
                        },
                        msgTheme: "gallery"
                    }) : null,
                    R = (0, c.Conversation)({
                        mentions: E.mentionMap(),
                        links: E.getLinks(),
                        phoneNumbers: E.getPhoneNumbers(),
                        selectable: true,
                        trusted: E.isTrusted()
                    }),
                    L = E.body && E.body.includes(n.url) ? E.body : E.caption,
                    G = a ? (0, j.jsx)("div", {
                        className: p.default.author,
                        children: (0, j.jsx)(u.default, {
                            msg: E,
                            contact: E.senderObj
                        })
                    }) : null,
                    B = E.getSuspiciousLinks().length > 0;
                return (0, j.jsx)(f.default, {
                    hover: w,
                    onClick: function() {
                        k(E.unsafe(), !N)
                    },
                    onMouseEnter: w ? null : function() {
                        w || I(!0)
                    },
                    onMouseOver: w ? null : function() {
                        w || I(!0)
                    },
                    onMouseLeave: w ? function() {
                        w && I(!1)
                    } : null,
                    children: (0, j.jsxs)("div", {
                        className: p.default.msg,
                        children: [(0, j.jsx)(b.default, {
                            transitionName: "delay-leave",
                            children: O
                        }), (0, j.jsx)(_.MessageContainer, {
                            isSentByMe: E.isSentByMe,
                            children: (0, j.jsxs)("div", {
                                className: (0, l.default)(p.default.bubble, (t = {}, (0, i.default)(t, p.default.hasAuthor, a), (0, i.default)(t, p.default.hasSuspiciousLinks, B), t)),
                                children: [G, (0, j.jsx)(g.SuspiciousLabel, {
                                    link: n,
                                    displayType: o.DISPLAY_TYPE.GALLERY
                                }), (0, j.jsx)(m.default, {
                                    title: n.url,
                                    isSentByMe: E.isSentByMe,
                                    canonicalUrl: n.domain,
                                    displayType: o.DISPLAY_TYPE.GALLERY,
                                    star: E.star
                                }), (0, j.jsx)(d.EmojiText, {
                                    text: L,
                                    selectable: true,
                                    className: p.default.text,
                                    dirMismatch: E.rtl !== h.default.isRTL(),
                                    direction: E.dir,
                                    formatters: R
                                })]
                            })
                        })]
                    })
                })
            };
            var i = a(n(59713)),
                r = a(n(63038)),
                o = n(44741),
                l = a(n(94184)),
                s = n(67294),
                u = a(n(16625)),
                c = n(32881),
                d = n(73008),
                f = a(n(61652)),
                h = a(n(45159)),
                p = a(n(31243)),
                m = a(n(74705)),
                v = a(n(36821)),
                g = n(47386),
                x = n(8413),
                C = n(69283),
                b = a(n(60806)),
                _ = n(43026),
                j = n(85893)
        },
        99540: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.fullCollection,
                    n = e.selectedMessages,
                    a = e.mediaMsgs,
                    C = e.selectable,
                    I = e.onMessageSelect,
                    P = e.theme,
                    A = (0, y.useModelValues)(e.chat, ["linkCount", "docCount", "productCount", "endOfHistoryTransferType"]),
                    N = (0, j.default)(),
                    D = (0, E.default)();
                (0, S.useListener)(a, "add query_media_before", (function() {
                    N()
                })), (0, S.useListener)(a, "remove", (function(e) {
                    n && n.isSelected(e) && n.setVal(e, !1), N()
                })), (0, S.useListener)(a, "reset", (function() {
                    n && n.unsetAll(), N()
                }));
                var O, R = function(e, t, n, a, s, u) {
                        var c = null,
                            f = (0, l.default)(e, (function(e) {
                                return -e.t
                            })).filter(w).slice(0, !0 === t ? e.length : 6);
                        return (0, o.default)(f, (function(e, o) {
                            var l = !0 !== t && o >= 3 && o <= 5 ? "hideableSecondRow" : void 0,
                                f = (0, T.jsx)(v.default, {
                                    className: (0, d.default)(u && M.roundedThumb),
                                    aspectRatio: u ? 1.1 : 1,
                                    msg: e,
                                    hoverEvent: t,
                                    selectable: n,
                                    selectedMessages: a,
                                    onMessageSelect: s,
                                    theme: l
                                }, e.id.toString());
                            if (!0 !== t) return [f];
                            var p = h.Clock.monthStr(e.t);
                            if (p !== c) {
                                c = p;
                                var m = (0, T.jsx)(g.default, {
                                    children: p
                                }, `header-${e.t}`);
                                return [].concat((0, i.default)((0, r.default)(6, (function(t) {
                                    return (0, T.jsx)(x.EmptyCanvas, {}, `padding-${e.t}-${t}`)
                                }))), [m, f])
                            }
                            return [f]
                        }))
                    }(a.toArray(), t, C, n, I, "new-chat-info" === P),
                    L = function(e) {
                        a.hasMediaBefore && D((function() {
                            a.queryMedia({
                                chat: (0, b.unproxy)(A),
                                msg: e
                            })
                        }))
                    },
                    G = (0, k.default)((function(e) {
                        a.hasMediaBefore && e.scrollTop + s.SCROLL_FUDGE > e.scrollHeight - e.clientHeight && L(a.head())
                    }), 100);
                if ((0, c.useEffect)((function() {
                        a.hasMediaBefore && L()
                    }), []), m.GK.supportsFeature(m.GK.F.MD_BACKEND) && A.endOfHistoryTransferType === f.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY || A.endOfHistoryTransferType === f.ConversationEndOfHistoryTransferModelPropType.NOT_INCLUDED_IN_HIST_SYNC) {
                    var B;
                    !0 === t ? B = u.fbt._("Older media may be available", null, {
                        hk: "1ml0rh"
                    }) : 0 === a.length && 0 === A.docCount && 0 === A.linkCount && 0 === A.productCount && (B = u.fbt._("Older files may be available", null, {
                        hk: "2BvwwV"
                    })), O = "new-chat-info" === P ? (0, T.jsx)(p.default, {
                        theme: "new-chat-info",
                        secondary: u.fbt._("Use WhatsApp on your phone to see the complete message history.", null, {
                            hk: "2qbSkX"
                        }),
                        children: B
                    }) : (0, T.jsx)(p.default, {
                        icon: (0, T.jsx)(_.default, {
                            name: "content-chat"
                        }),
                        theme: "list",
                        secondary: u.fbt._("Use WhatsApp on your phone to see the complete message history.", null, {
                            hk: "2qbSkX"
                        }),
                        children: B
                    })
                }
                return (0, T.jsxs)(T.Fragment, {
                    children: [(0, T.jsx)(x.MediaGalleryView, {
                        medias: R,
                        mediaCollection: a,
                        fullCollection: t,
                        chat: (0, b.unproxy)(A),
                        onScroll: function(e) {
                            G(e.currentTarget)
                        },
                        theme: P
                    }), O]
                })
            };
            var i = a(n(319)),
                r = a(n(98913)),
                o = a(n(94654)),
                l = a(n(89734)),
                s = n(80965),
                u = n(48360),
                c = n(67294),
                d = a(n(56720)),
                f = n(29656),
                h = n(10399),
                p = a(n(54864)),
                m = n(38032),
                v = a(n(48630)),
                g = a(n(16193)),
                x = n(41870),
                C = n(19499),
                b = n(68220),
                _ = a(n(7665)),
                j = a(n(57811)),
                S = n(8413),
                y = n(69283),
                k = a(n(15663)),
                E = a(n(48311)),
                T = n(85893),
                M = {
                    roundedThumb: {
                        marginEnd: "bugiwsl0",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        borderTopStartRadius: "bbr44loe",
                        borderTopEndRadius: "ooj5yc5b",
                        borderBottomEndRadius: "m8i16etx",
                        borderBottomStartRadius: "cw0ivh8j"
                    }
                };

            function w(e) {
                return !!m.GK.isMediaGalleryFixEnabled() || (!m.GK.supportsFeature(m.GK.F.MD_BACKEND) || (0, C.hasThumbnail)(e.mediaData))
            }
        },
        48630: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.msg,
                    n = e.hoverEvent,
                    a = e.selectable,
                    m = e.onMessageSelect,
                    v = e.theme,
                    g = e.className,
                    x = e.selectedMessages,
                    C = (0, o.useState)((function() {
                        return !(!x || !x.isSelected(t))
                    })),
                    b = (0, i.default)(C, 2),
                    _ = b[0],
                    j = b[1],
                    S = (0, o.useRef)(null);
                (0, h.useListener)(x, t.id.toString(), (function(e) {
                    x && _ !== e && j(e)
                }));
                var y = t.mediaData,
                    k = y.type === s.default.TYPE.IMAGE && y.renderableUrl ? function(e) {
                        e.nativeEvent.dataTransfer.setData("text/uri-list", t.mediaData.renderableUrl)
                    } : null,
                    E = (0, r.default)(g);
                return (0, p.jsx)(c.MediaThumb, {
                    classes: E,
                    onClick: function(e) {
                        if (a && m) m(t, !_);
                        else if (y.mediaStage !== d.MEDIA_DATA_STAGE.ERROR_MISSING) {
                            var n;
                            e && e.stopPropagation();
                            var i = t.id;
                            if (y.isGif || y.type === s.default.TYPE.IMAGE) {
                                var r = S.current;
                                n = function(e) {
                                    return i.equals(e) && r ? r : null
                                }
                            }
                            l.Cmd.mediaViewerModal({
                                msg: (0, f.unproxy)(t),
                                getZoomNode: n
                            })
                        } else l.Cmd.openModal((0, p.jsx)(u.default, {
                            msg: t
                        }))
                    },
                    hoverEvent: n,
                    selectable: a,
                    selected: _,
                    onMessageSelect: m,
                    onDragStart: k,
                    msg: t,
                    theme: v,
                    imgRef: function(e) {
                        S.current = e
                    },
                    aspectRatio: e.aspectRatio
                })
            };
            var i = a(n(63038)),
                r = a(n(94184)),
                o = n(67294),
                l = n(65901),
                s = a(n(72397)),
                u = a(n(41965)),
                c = n(19499),
                d = n(41655),
                f = n(68220),
                h = n(8413),
                p = n(85893)
        },
        16193: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, r.jsx)("div", {
                    className: i.default.container,
                    children: e.children
                })
            };
            var i = a(n(83901)),
                r = n(85893)
        },
        19499: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MediaThumb = function(e) {
                var t, n, a = e.msg,
                    d = e.selectable,
                    I = e.theme,
                    P = e.active,
                    A = e.imgRef,
                    N = e.containerRef,
                    D = e.onMessageSelect,
                    O = e.selected,
                    R = void 0 !== O && O,
                    L = e.onClick,
                    G = e.onDragStart,
                    B = e.preferPreview,
                    F = (0, y.default)(),
                    V = (0, l.useRef)(null),
                    U = (0, l.useRef)(null),
                    H = (0, l.useRef)(null),
                    q = (0, l.useState)(!1),
                    K = (0, r.default)(q, 2),
                    W = K[0],
                    Y = K[1],
                    z = (0, l.useState)(null),
                    X = (0, r.default)(z, 2),
                    Z = X[0],
                    $ = X[1];
                (0, k.useListener)(a.mediaData, ["change:preview", "change:mediaStage"], F);
                (0, l.useEffect)((function() {
                    return null == A || A(V.current), null == N || N(U.current), null == a.mediaData.preview && null == a.mediaData.fullPreviewData && (a.mediaData.type !== f.default.TYPE.IMAGE && a.mediaData.type !== f.default.TYPE.VIDEO || a.downloadMedia({
                            downloadEvenIfExpensive: !1,
                            isUserInitiated: !1,
                            rmrReason: b.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER
                        })),
                        function() {
                            null == A || A(null), null == N || N(null)
                        }
                }), []), (0, l.useEffect)((function() {
                    null == A || A(V.current), null == N || N(U.current)
                }), [A, N, V, U]);
                var J, Q = function() {
                        W || Y(!0)
                    },
                    ee = function(t) {
                        if (!0 !== e.showTooltip || "viewerFlowTransparent" === I || !(t instanceof HTMLElement)) return null;
                        var n = t.offsetWidth;
                        return {
                            menu: (0, T.jsx)(x.default, {
                                msg: a
                            }),
                            anchor: t,
                            dirY: u.DirY.TOP,
                            dirX: u.DirX.CENTER,
                            offsetX: !0 === P ? .5 * -n * .13 : 0,
                            type: u.MenuType.tooltip
                        }
                    },
                    te = (0, E.useTimeout)((function() {
                        var e;
                        H.current && (e = H.current, $(ee(e)))
                    }), 500),
                    ne = (0, r.default)(te, 2),
                    ae = ne[0],
                    ie = ne[1],
                    re = function(e) {
                        var t;
                        W || (e.persist(), Y(!0), t = e.target, H.current = t, ae())
                    },
                    oe = function() {
                        W && (ie(), Y(!1), $(null))
                    };
                (!0 === d || W && e.hoverEvent) && (J = (0, T.jsxs)("div", {
                    className: p.default.mediaSelect,
                    children: [(0, T.jsx)("div", {
                        className: p.default.shadeTop,
                        onClick: e.onClick
                    }), (0, T.jsx)(s.default, {
                        onChange: function() {
                            D && D(a, !R)
                        },
                        hover: W,
                        checked: R
                    })]
                }));
                var le = (0, o.default)(e.classes, p.default.canvasComponent, (t = {}, (0, i.default)(t, p.default.canvasSelected, R), (0, i.default)(t, p.default.mediaGalleryThumbnail, "hideableSecondRow" !== I), (0, i.default)(t, p.default.chatInfoDrawerThumbnail, "hideableSecondRow" === I), (0, i.default)(t, p.default.canvasSecondRow, "hideableSecondRow" === I), (0, i.default)(t, p.default.viewerFlow, "viewerFlow" === I || "viewerFlowTransparent" === I), (0, i.default)(t, p.default.viewerFlowTransparent, "viewerFlowTransparent" === I), (0, i.default)(t, p.default.active, P), t)),
                    se = a.star ? (0, T.jsx)("div", {
                        className: p.default.iconStar,
                        children: (0, T.jsx)(_.default, {
                            name: "star"
                        })
                    }) : null,
                    ue = w(a.mediaData),
                    ce = Z ? (0, T.jsx)(j.UIE, {
                        displayName: "MediaThumbTitle",
                        popable: !0,
                        escapable: !0,
                        requestDismiss: function() {
                            $(null)
                        },
                        requestRecentFocusOnUnmount: !1,
                        children: (0, T.jsx)(S.default, {
                            tooltip: Z
                        })
                    }) : null,
                    de = {
                        paddingTop: 1 / (null !== (n = e.aspectRatio) && void 0 !== n ? n : 1) * 100 + "%"
                    },
                    fe = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        a.downloadMedia({
                            downloadEvenIfExpensive: e,
                            isUserInitiated: !1,
                            rmrReason: b.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER
                        })
                    };
                if (c.GK.isMediaGalleryFixEnabled()) {
                    var he;
                    switch (function(e) {
                            var t = e.mediaStage,
                                n = e.preview,
                                a = e.fullPreviewData;
                            switch (t) {
                                case C.MEDIA_DATA_STAGE.RESOLVED:
                                case C.MEDIA_DATA_STAGE.PROGRESSIVE_READY:
                                case C.MEDIA_DATA_STAGE.EXISTS:
                                    return M.Ready;
                                case C.MEDIA_DATA_STAGE.INIT:
                                    return null != n || null != a ? M.Ready : M.Loading;
                                case C.MEDIA_DATA_STAGE.REMOTE_NEED_UPLOAD:
                                case C.MEDIA_DATA_STAGE.NEED_UPLOAD:
                                    return M.NeedsUpload;
                                case C.MEDIA_DATA_STAGE.FETCHING:
                                case C.MEDIA_DATA_STAGE.DECRYPTING:
                                case C.MEDIA_DATA_STAGE.PREPARING:
                                case C.MEDIA_DATA_STAGE.UPLOADING:
                                case C.MEDIA_DATA_STAGE.SENDING:
                                case C.MEDIA_DATA_STAGE.REMOTE_UPLOADING:
                                case C.MEDIA_DATA_STAGE.REUPLOADING:
                                    return M.Loading;
                                case C.MEDIA_DATA_STAGE.NEED_POKE:
                                    return M.NeedsPoke;
                                case C.MEDIA_DATA_STAGE.ERROR_FILE_NOT_READABLE:
                                case C.MEDIA_DATA_STAGE.ERROR_MISSING:
                                case C.MEDIA_DATA_STAGE.ERROR_TOO_LARGE:
                                case C.MEDIA_DATA_STAGE.ERROR_UNSUPPORTED:
                                    return M.Error
                            }
                        }(a.mediaData)) {
                        case M.Loading:
                            he = (0, T.jsx)(g.MediaThumbLoading, {
                                mediaType: a.mediaData.type
                            });
                            break;
                        case M.NeedsPoke:
                            he = (0, T.jsx)(g.MediaThumbNeedsPoke, {
                                onClick: function() {
                                    return fe(!0)
                                }
                            });
                            break;
                        case M.Error:
                            he = (0, T.jsx)(g.MediaThumbError, {
                                onClick: e.onClick,
                                mediaType: a.mediaData.type
                            });
                            break;
                        case M.NeedsUpload:
                        case M.Ready:
                            he = null
                    }
                    return (0, T.jsxs)("div", {
                        ref: U,
                        className: le,
                        "data-testid": "media-canvas",
                        onMouseOver: Q,
                        onMouseEnter: re,
                        onMouseLeave: oe,
                        children: [J, (0, T.jsxs)("div", {
                            className: p.default.canvasBody,
                            children: [(0, T.jsx)(v.default, {
                                mediaData: a.mediaData
                            }), (0, T.jsx)(m.default, {
                                mediaData: a.mediaData,
                                selected: R
                            }), se]
                        }), (0, T.jsx)(h.default, {
                            downloadMedia: fe,
                            onClick: L,
                            onDragStart: G,
                            preferPreview: B,
                            ref: V,
                            msg: a
                        }), ce, he, (0, T.jsx)("div", {
                            style: de
                        })]
                    })
                }
                return ue ? (0, T.jsxs)("div", {
                    ref: U,
                    className: le,
                    "data-testid": "media-canvas",
                    onMouseOver: Q,
                    onMouseEnter: re,
                    onMouseLeave: oe,
                    children: [J, (0, T.jsxs)("div", {
                        className: p.default.canvasBody,
                        children: [(0, T.jsx)(v.default, {
                            mediaData: a.mediaData
                        }), (0, T.jsx)(m.default, {
                            mediaData: a.mediaData,
                            selected: R
                        }), se]
                    }), (0, T.jsx)(h.default, {
                        downloadMedia: fe,
                        onClick: L,
                        onDragStart: G,
                        preferPreview: B,
                        ref: V,
                        msg: a
                    }), ce, (0, T.jsx)("div", {
                        style: de
                    })]
                }) : null
            }, t.hasThumbnail = w;
            var i = a(n(59713)),
                r = a(n(63038)),
                o = a(n(94184)),
                l = n(67294),
                s = a(n(22630)),
                u = n(98169),
                c = n(38032),
                d = n(66739),
                f = a(n(72397)),
                h = a(n(31149)),
                p = a(n(45468)),
                m = a(n(81690)),
                v = a(n(76581)),
                g = n(88259),
                x = a(n(86582)),
                C = n(41655),
                b = a(n(50507)),
                _ = a(n(7665)),
                j = n(16835),
                S = a(n(84555)),
                y = a(n(57811)),
                k = n(8413),
                E = n(59388),
                T = n(85893),
                M = n(76672).Mirrored(["Loading", "Ready", "Error", "NeedsPoke", "NeedsUpload"]);

            function w(e) {
                if (c.GK.isMediaGalleryFixEnabled()) return !0;
                switch (e.type) {
                    case f.default.TYPE.VIDEO:
                    case f.default.TYPE.IMAGE:
                        if (null != e.preview || null != e.fullPreviewData || e.mediaStage === C.MEDIA_DATA_STAGE.RESOLVED) return !0;
                        if (d.MediaBlobCache.has(e.filehash)) {
                            try {
                                d.MediaBlobCache.getOrCreateURL(e.filehash)
                            } catch (e) {
                                return !1
                            }
                            return !0
                        }
                        return !1;
                    default:
                        return !0
                }
            }
        },
        31149: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(59713)),
                r = a(n(81109)),
                o = a(n(94184)),
                l = n(67294),
                s = a(n(72397)),
                u = a(n(48121)),
                c = n(41655),
                d = a(n(47251)),
                f = a(n(57393)),
                h = n(85893),
                p = (0, l.forwardRef)((function(e, t) {
                    var n = e.children,
                        a = e.className,
                        i = e.shade,
                        r = e.url,
                        o = e.onClick,
                        l = e.onDragStart,
                        s = !0 === i ? (0, h.jsx)("div", {
                            className: u.default.shade
                        }) : null,
                        c = null != r && "" !== r ? {
                            backgroundImage: `url(${r})`
                        } : null;
                    return (0, h.jsxs)("div", {
                        className: a,
                        "data-testid": "media-canvas-img",
                        style: c,
                        onClick: o,
                        ref: t,
                        onDragStart: l,
                        draggable: null != l || null,
                        children: [n, s]
                    })
                })),
                m = (0, l.forwardRef)((function(e, t) {
                    var n = e.downloadMedia,
                        a = e.msg,
                        l = e.onClick,
                        m = e.onDragStart,
                        v = e.preferPreview,
                        g = a.mediaData,
                        x = {
                            onClick: l,
                            onDragStart: m,
                            ref: t
                        };
                    switch (g.type) {
                        case s.default.TYPE.AUDIO:
                            return (0, h.jsx)(p, (0, r.default)((0, r.default)({}, x), {}, {
                                className: `${u.default.mediaCanvas} attach-media-audio-thumb`
                            }));
                        case s.default.TYPE.VIDEO:
                            var C, b = null == g.fullPreviewData,
                                _ = null !== (C = g.fullPreviewData) && void 0 !== C ? C : g.preview;
                            return (0, h.jsx)(p, (0, r.default)((0, r.default)({}, x), {}, {
                                className: (0, o.default)(u.default.mediaCanvas, (0, i.default)({
                                    "media-video-thumb": g.isGif && !g.preview
                                }, u.default.blur, b)),
                                shade: !0,
                                url: _ instanceof f.default ? _.url() : null
                            }));
                        case s.default.TYPE.IMAGE:
                            var j = null != g.preview && g.mediaStage === c.MEDIA_DATA_STAGE.NEED_POKE,
                                S = function(e) {
                                    return (0, h.jsx)(p, (0, r.default)((0, r.default)({}, x), {}, {
                                        className: (0, o.default)(u.default.mediaCanvas, (0, i.default)({}, u.default.blur, j)),
                                        shade: a.star,
                                        url: g.preview instanceof f.default ? g.preview.url() : null,
                                        children: null != e ? (0, h.jsx)("div", {
                                            className: u.default.mediaCanvas,
                                            style: {
                                                backgroundImage: `url(${e})`
                                            }
                                        }) : null
                                    }))
                                },
                                y = function() {
                                    return null != g.preview ? S(null) : (0, h.jsx)(p, (0, r.default)((0, r.default)({}, x), {}, {
                                        className: u.default.mediaCanvas,
                                        shade: a.star
                                    }))
                                };
                            return !0 === v ? y() : (0, h.jsx)("div", {
                                className: u.default.mediaCanvas,
                                children: (0, h.jsx)(d.default, {
                                    mediaData: g,
                                    placeholderRenderer: y,
                                    renderProgressively: !0,
                                    downloadMedia: n,
                                    children: S
                                })
                            });
                        default:
                            return (0, h.jsx)(p, (0, r.default)((0, r.default)({}, x), {}, {
                                shade: a.star
                            }))
                    }
                }));
            t.default = m
        },
        81690: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.selected,
                    n = e.mediaData;
                switch (n.type) {
                    case l.default.TYPE.AUDIO:
                        return (0, u.jsx)(c, {
                            duration: n.duration,
                            selected: t
                        });
                    case l.default.TYPE.VIDEO:
                        return n.isGif ? null : (0, u.jsx)(c, {
                            duration: n.duration,
                            selected: t
                        });
                    default:
                        return null
                }
            };
            var i = a(n(59713)),
                r = a(n(94184)),
                o = n(10399),
                l = a(n(72397)),
                s = a(n(38628)),
                u = n(85893);

            function c(e) {
                var t = e.duration,
                    n = e.selected,
                    a = o.Clock.durationStr(t);
                return a ? (0, u.jsx)("span", {
                    className: (0, r.default)(s.default.container, (0, i.default)({}, s.default.selected, n)),
                    children: a
                }) : null
            }
        },
        76581: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.mediaData;
                if (!t) return null;
                var n = function(e) {
                    switch (e.type) {
                        case i.default.TYPE.AUDIO:
                            return "msg-audio";
                        case i.default.TYPE.VIDEO:
                            return e.isGif ? "msg-gif" : "msg-video";
                        default:
                            return null
                    }
                }(t);
                return null == n ? null : (0, l.jsx)("div", {
                    className: r.default.iconType,
                    children: (0, l.jsx)(o.default, {
                        name: n
                    })
                })
            };
            var i = a(n(72397)),
                r = a(n(38851)),
                o = a(n(7665)),
                l = n(85893)
        },
        88259: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MediaThumbError = function(e) {
                return (0, l.jsx)("button", {
                    className: (0, i.default)(s),
                    onClick: e.onClick,
                    children: (0, l.jsx)(c, {
                        mediaType: e.mediaType
                    })
                })
            }, t.MediaThumbLoading = function(e) {
                return (0, l.jsx)("div", {
                    className: (0, i.default)(s),
                    children: (0, l.jsx)(c, {
                        mediaType: e.mediaType
                    })
                })
            }, t.MediaThumbNeedsPoke = function(e) {
                return (0, l.jsx)("div", {
                    className: (0, i.default)(s),
                    children: (0, l.jsx)(r.Download, {
                        onClick: e.onClick
                    })
                })
            };
            var i = a(n(56720)),
                r = n(83819),
                o = a(n(7665)),
                l = n(85893),
                s = {
                    position: "lhggkp7q",
                    top: "qq0sjtgm",
                    start: "tkdu00h0",
                    zIndex: "jnl3jror",
                    boxSizing: "cm280p3y",
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    justifyContent: "ac2vgrno",
                    width: "ln8gz9je",
                    height: "ppled2lx"
                },
                u = {
                    color: "cyi0n1nm"
                };

            function c(e) {
                var t = "video" === e.mediaType ? "video-placeholder" : "img-placeholder";
                return (0, l.jsx)(o.default, {
                    name: t,
                    className: (0, i.default)(u)
                })
            }
        },
        86582: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.msg.senderObj.formattedShortName;
                return (0, i.jsx)(a.TextSpan, {
                    children: t
                })
            };
            var a = n(22552),
                i = n(85893)
        },
        78053: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(44741),
                r = n(80965),
                o = n(67294),
                l = n(65901),
                s = n(75993),
                u = a(n(5029)),
                c = a(n(49195)),
                d = a(n(79402)),
                f = n(68220),
                h = a(n(57811)),
                p = a(n(15663)),
                m = n(85893);

            function v(e, t) {
                var n = e.queryBefore,
                    a = e.hasBefore,
                    v = e.msgsCollection,
                    g = e.emptyText,
                    x = e.scrollOffset,
                    C = void 0 === x ? 0 : x,
                    b = e.selectable,
                    _ = e.onMessageSelect,
                    j = e.queryCollection,
                    S = e.selectedMessages,
                    y = e.renderElements,
                    k = e.onProductDetail,
                    E = e.setScrollOffset,
                    T = (0, h.default)();
                (0, o.useImperativeHandle)(t, (function() {
                    return {
                        forceUpdate: T
                    }
                }));
                var M = (0, o.useRef)(null),
                    w = function(e) {
                        a && j(e)
                    },
                    I = (0, p.default)((function(e) {
                        var t = e.scrollHeight - e.clientHeight - e.scrollTop;
                        a && t < r.SCROLL_FUDGE && w(v.head()), E && E(e.scrollTop)
                    }), 100);
                (0, o.useEffect)((function() {
                    a && w();
                    var e = M.current;
                    return e && (e.scrollTop = C),
                        function() {
                            I.cancel()
                        }
                }), []);
                var P = function(e, t) {
                        var n = (0, f.unproxy)(e);
                        b && void 0 !== t ? _(n, t) : l.Cmd.openChatAt(n.chat, n.chat.getSearchContext(n))
                    },
                    A = y ? y(P) : v.map((function(e, t) {
                        return (0, m.jsx)(d.default, {
                            msg: e,
                            selectable: b,
                            selectedMessages: S,
                            onMessageSelect: _,
                            displayType: i.DISPLAY_TYPE.GALLERY,
                            onClickMsg: P,
                            onProductClick: k
                        }, `${e.id.toString()}_${t}`)
                    })).reverse();
                if (n) {
                    if (0 === A.length) return (0, m.jsx)(s.Loading, {});
                    A.push((0, m.jsx)(u.default, {}))
                }
                return 0 !== v.length || n || a ? (0, m.jsx)("div", {
                    ref: M,
                    onScroll: function(e) {
                        I(e.target)
                    },
                    className: c.default.wrapper,
                    children: A
                }) : (0, m.jsx)(s.Empty, {
                    text: g,
                    a8nText: "no-elements"
                })
            }
            var g = (0, o.forwardRef)(v);
            t.default = g
        },
        59603: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, g.useModelValues)(e.chat, ["isGroup", "muteExpiration", "archive"]),
                    n = (0, g.useModelValues)(e.mute, ["isMuted"]),
                    a = (0, g.useModelValues)(e.settings, ["showArchiveV2"]),
                    C = function(e) {
                        u.Cmd.muteChat((0, p.unproxy)(t), e)
                    },
                    b = function() {
                        C(!1), u.Cmd.closeModal()
                    },
                    _ = n.isMuted,
                    j = t.muteExpiration;
                if (t.archive && (0, f.archiveV2Supported)() && a.showArchiveV2) return (0, x.jsx)(d.default, {
                    children: (0, x.jsx)(v.TextSpan, {
                        theme: "muted",
                        size: "16",
                        children: r.fbt._("Archived chats are muted", null, {
                            hk: "31ZVD"
                        })
                    })
                });
                var S, y = _ ? function() {
                        var e = t.isGroup ? h.default.t(356) : h.default.t(355);
                        u.Cmd.openModal((0, x.jsx)(c.default, {
                            onOK: b,
                            okText: h.default.t(39),
                            onCancel: function() {
                                return u.Cmd.closeModal()
                            },
                            cancelText: r.fbt._("Cancel", null, {
                                hk: "H0gNq"
                            }),
                            children: e
                        }))
                    } : function() {
                        C(!0)
                    },
                    k = (0, x.jsx)(l.CheckBox, {
                        checked: _,
                        onChange: y
                    }),
                    E = _ ? h.default.t(862) : r.fbt._("Mute notifications", null, {
                        hk: "2Fm15X"
                    }),
                    T = "new-chat-info" === e.theme;
                if (_ && j) {
                    var M = s.Clock.untilStr(j);
                    S = (0, x.jsx)(v.TextDiv, {
                        theme: "muted",
                        children: M
                    })
                }
                if (T) {
                    var w = (0, x.jsx)(m.default, {
                            checked: _,
                            onChange: y
                        }),
                        I = (0, x.jsx)(v.TextSpan, {
                            theme: "title",
                            children: E
                        });
                    return (0, x.jsx)(o.default, {
                        icon: "settings-notifications",
                        a8nText: i.default.key("block-mute"),
                        side: w,
                        onClick: y,
                        title: I,
                        secondaryTitle: S
                    })
                }
                return (0, x.jsxs)(d.default, {
                    a8nText: i.default.key("block-mute"),
                    side: k,
                    onClick: y,
                    multiline: !(!_ || !j),
                    children: [(0, x.jsx)(v.TextSpan, {
                        theme: "title",
                        children: E
                    }), S]
                })
            };
            var i = a(n(84646)),
                r = n(48360),
                o = a(n(98350)),
                l = n(91404),
                s = n(10399),
                u = n(65901),
                c = a(n(86777)),
                d = a(n(81218)),
                f = n(2629),
                h = a(n(45159)),
                p = n(68220),
                m = a(n(83256)),
                v = n(22552),
                g = n(69283),
                x = n(85893)
        },
        34310: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                i = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.productMsgs,
                    n = e.chat,
                    i = (0, o.default)(e, g),
                    x = (0, s.useRef)(null);
                (0, p.useListener)(t, "add remove reset", (function() {
                    var e;
                    null === (e = x.current) || void 0 === e || e.forceUpdate()
                }));
                var C, b = (0, m.default)();
                (d.GK.supportsFeature(d.GK.F.MD_BACKEND) && n.endOfHistoryTransferType === u.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY || n.endOfHistoryTransferType === u.ConversationEndOfHistoryTransferModelPropType.NOT_INCLUDED_IN_HIST_SYNC) && (C = (0, v.jsx)(c.default, {
                    icon: (0, v.jsx)(h.default, {
                        name: "content-chat"
                    }),
                    theme: "list",
                    secondary: l.fbt._("Use WhatsApp on your phone to see the complete message history.", null, {
                        hk: "2qbSkX"
                    }),
                    children: l.fbt._("Older products may be available", null, {
                        hk: "3RBDLB"
                    })
                }));
                return (0, v.jsxs)(v.Fragment, {
                    children: [(0, v.jsx)(f.default, (0, r.default)({
                        ref: x,
                        msgsCollection: t,
                        queryCollection: function(e) {
                            return b((function() {
                                t.queryProducts(n, e)
                            }))
                        },
                        hasBefore: t.hasProductBefore,
                        queryBefore: t.hasProductBefore ? a.resolve() : null,
                        emptyText: l.fbt._("No products", null, {
                            hk: "8o7dB"
                        }),
                        chat: n
                    }, i)), C]
                })
            };
            var r = i(n(81109)),
                o = i(n(6479)),
                l = n(48360),
                s = n(67294),
                u = n(29656),
                c = i(n(54864)),
                d = n(38032),
                f = i(n(78053)),
                h = i(n(7665)),
                p = n(8413),
                m = i(n(48311)),
                v = n(85893),
                g = ["productMsgs", "chat"]
        },
        98870: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.stickerPackId,
                    a = e.onStickerPackView,
                    p = e.stickerPackViewDelay,
                    m = (v = n, (0, r.useEffect)((function() {
                        v && d.StickerPackCollectionMd.fetchStickerPack(v)
                    }), [v]), (0, f.default)(d.StickerPackCollectionMd, "add remove reset", (function() {
                        return null != v ? d.StickerPackCollectionMd.get(v) : null
                    })));
                var v;
                s.GK.supportsFeature(s.GK.F.MD_BACKEND) && (0, u.default)() && n && (t = (0, h.jsx)(o.default, {
                    onClick: function(e) {
                        e.stopPropagation(), a && a(), null != p ? setTimeout((function() {
                            return l.Cmd.openStickerPack(n)
                        }), p + 150) : l.Cmd.openStickerPack(n)
                    },
                    type: "secondary",
                    children: i.fbt._("View Pack", null, {
                        hk: "tAlU3"
                    })
                }));
                return (0, h.jsxs)(h.Fragment, {
                    children: [(0, h.jsx)(c.StickerDetailsStickerPackInfo, {
                        name: null == m ? void 0 : m.name,
                        publisher: null == m ? void 0 : m.publisher,
                        theme: c.Theme.MediaViewer
                    }), t]
                })
            };
            var i = n(48360),
                r = n(67294),
                o = a(n(51599)),
                l = n(65901),
                s = n(38032),
                u = a(n(45767)),
                c = n(65803),
                d = n(48902),
                f = a(n(37991)),
                h = n(85893)
        },
        83256: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.checked,
                    n = e.onChange,
                    a = e.tabIndex,
                    d = e.id,
                    f = (0, r.useRef)(null),
                    h = (0, l.default)(),
                    p = (0, i.default)(h, 2),
                    m = p[0],
                    v = p[1],
                    g = (0, s.default)(f, m);
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)("input", {
                        ref: g,
                        className: (0, o.default)(c.hiddenInput),
                        checked: t,
                        onChange: function(e) {
                            e.stopPropagation();
                            var t = f.current;
                            null != t && t.focus(), n(e)
                        },
                        type: "checkbox",
                        tabIndex: null != a ? a : 0,
                        id: d
                    }), (0, u.jsxs)("div", {
                        className: (0, o.default)(c.container),
                        onClick: function() {
                            var e = f.current;
                            null != e && e.click()
                        },
                        tabIndex: -1,
                        "aria-hidden": "true",
                        "data-testid": "visual-switch",
                        children: [(0, u.jsx)("div", {
                            className: (0, o.default)(c.button, t && c.buttonChecked, v && c.buttonFocused)
                        }), (0, u.jsx)("div", {
                            className: (0, o.default)(c.track, t && c.trackChecked)
                        })]
                    })]
                })
            };
            var i = a(n(63038)),
                r = n(67294),
                o = a(n(56720)),
                l = a(n(19762)),
                s = a(n(38933)),
                u = n(85893),
                c = {
                    container: {
                        display: "i86elurf",
                        justifyContent: "ac2vgrno",
                        alignItems: "gndfcl4n",
                        width: "tknnhhou",
                        height: "jdwybkuq",
                        marginTop: "g1eqewly",
                        marginEnd: "kjemk6od",
                        marginBottom: "kzyzudjh",
                        marginStart: "k6y3xtnu",
                        position: "g0rxnol2",
                        cursor: "ajgl1lbb"
                    },
                    button: {
                        height: "jdwybkuq",
                        width: "m0s4cjtr",
                        borderTopStartRadius: "ikqdvm1y",
                        borderTopEndRadius: "m3qqxsiz",
                        borderBottomEndRadius: "r1ncx0sg",
                        borderBottomStartRadius: "mmj7r7ye",
                        backgroundColor: "lbj9vhti",
                        position: "lhggkp7q",
                        left: "tukmaf4q",
                        transitionProperty: "bo8jc6qi",
                        transitionDuration: "nbciif1m",
                        transitionTimingFunction: "oa9ii99z",
                        boxShadow: "hjje1qk3"
                    },
                    buttonChecked: {
                        transform: "e95mh68g",
                        backgroundColor: "my8w5w2u"
                    },
                    buttonFocused: {
                        boxShadow: "r6unq4of"
                    },
                    track: {
                        width: "tknnhhou",
                        height: "icj6mcig",
                        backgroundColor: "masnrobp",
                        borderTopStartRadius: "i3rsbmdh",
                        borderTopEndRadius: "d6h2ibm4",
                        borderBottomEndRadius: "rh5xaqwm",
                        borderBottomStartRadius: "e6tbvuqx"
                    },
                    trackChecked: {
                        backgroundColor: "hza3nq4c"
                    },
                    hiddenInput: {
                        position: "lhggkp7q",
                        width: "cxec7x23",
                        height: "kanlod6e",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        clip: "nmeg1xfo",
                        clipPath: "okm7a8wg",
                        whiteSpace: "le5p0ye3"
                    }
                }
        },
        68034: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useNewChatInfoColors = function() {
                return n
            };
            var n = {
                "--text-title-color": "var(--text-primary-strong)",
                "--text-section-title-color": "var(--text-secondary-lighter)",
                "--cell-chat-title-color": "var(--text-primary-strong)",
                "--cell-chat-secondary-color": "var(--text-secondary-lighter)",
                "--primary-strong": "var(--text-primary-strong)",
                "--primary": "var(--text-primary)",
                "--primary-muted": "var(--text-secondary-lighter)",
                "--teal": "var(--icon-high-emphasis)",
                "--secondary": "var(--text-secondary-lighter)",
                "--secondary-lighter": "var(--text-secondary-lighter)",
                "--button-alternative": "var(--icon-high-emphasis)",
                "--link-alt": "var(--icon-high-emphasis)"
            }
        },
        79933: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(34575)),
                r = a(n(93913)),
                o = a(n(81506)),
                l = a(n(2205)),
                s = a(n(99842)),
                u = n(48360),
                c = n(65901),
                d = a(n(86777)),
                f = n(20050),
                h = a(n(71562)),
                p = n(73008),
                m = a(n(50177)),
                v = a(n(45159)),
                g = n(87547),
                x = n(85893),
                C = function(e) {
                    (0, l.default)(n, e);
                    var t = (0, s.default)(n);

                    function n() {
                        var e;
                        (0, i.default)(this, n);
                        for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l];
                        return (e = t.call.apply(t, [this].concat(r))).contactFilter = function(t) {
                            var n = e.props.chat.groupMetadata;
                            return !!f.ContactCollection.isFilteredContact(t) && (!(null == n ? void 0 : n.participants.get(t.id)) || u.fbt._("Already added to group", null, {
                                hk: "4hdDHF"
                            }).toString())
                        }, e.confirmAddParticipant = function(t) {
                            var n = e.onAddParticipant.bind((0, o.default)(e), t),
                                a = v.default.t(341, {
                                    participant: t.formattedName,
                                    subject: e.props.chat.contact.name
                                });
                            e.push((0, x.jsx)(d.default, {
                                onOK: n,
                                okText: u.fbt._("Add participant", null, {
                                    hk: "48ECfz"
                                }),
                                onCancel: e._pop,
                                cancelText: u.fbt._("Cancel", null, {
                                    hk: "H0gNq"
                                }),
                                children: (0, x.jsx)(p.EmojiText, {
                                    text: a
                                })
                            }))
                        }, e.onAddParticipant = function(t) {
                            (0, g.addParticipants)(e.props.chat, [t]).catch((function() {})), c.Cmd.closeModal()
                        }, e._pop = function() {
                            e.pop()
                        }, e
                    }
                    return (0, r.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, x.jsx)(h.default, {
                                title: u.fbt._("Add participant", null, {
                                    hk: "48ECfz"
                                }),
                                filter: this.contactFilter,
                                onCancel: this._pop,
                                onSelect: this.confirmAddParticipant
                            }))
                        }
                    }]), n
                }(m.default);
            t.default = C
        },
        47830: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(319)),
                r = a(n(34575)),
                o = a(n(93913)),
                l = a(n(81506)),
                s = a(n(2205)),
                u = a(n(99842)),
                c = n(48360),
                d = n(65901),
                f = a(n(86777)),
                h = n(20050),
                p = n(73008),
                m = a(n(50177)),
                v = a(n(45159)),
                g = n(87547),
                x = n(64803),
                C = n(99451),
                b = n(85893),
                _ = function(e) {
                    (0, s.default)(n, e);
                    var t = (0, u.default)(n);

                    function n() {
                        var e;
                        (0, r.default)(this, n);
                        for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++) o[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(o)))._isGroupParticipant = function(t) {
                            var n;
                            return !!(null === (n = e.props.chat.groupMetadata) || void 0 === n ? void 0 : n.participants.get(t))
                        }, e.customSecondaryText = function(t) {
                            var n;
                            return (null === (n = e.props.chat.groupMetadata) || void 0 === n ? void 0 : n.participants.get(t)) ? c.fbt._("Already added to group", null, {
                                hk: "4hdDHF"
                            }).toString() : null
                        }, e.contactFilter = function(t) {
                            var n = e.props.chat.groupMetadata;
                            return !!h.ContactCollection.isFilteredContact(t) && (!(null == n ? void 0 : n.participants.get(t.id)) || c.fbt._("Already added to group", null, {
                                hk: "4hdDHF"
                            }).toString())
                        }, e.confirmAddParticipant = function(t) {
                            var n = e.props.chat;
                            e.push((0, b.jsx)(f.default, {
                                onOK: e.onAddParticipant.bind((0, l.default)(e), t),
                                okText: c.fbt._({
                                    "*": "Add participants",
                                    _1: "Add participant"
                                }, [c.fbt._plural(t.length)], {
                                    hk: "4pSXvk"
                                }),
                                onCancel: e._pop,
                                cancelText: c.fbt._("Cancel", null, {
                                    hk: "H0gNq"
                                }),
                                children: (0, b.jsx)(p.EmojiText, {
                                    text: e._makeNameEnumeration(t, n.contact.name)
                                })
                            }))
                        }, e._makeNameEnumeration = function(e, t) {
                            var n = e.map((function(e) {
                                return e.formattedShortName || e.shortName
                            })).reduce((function(t, n, a) {
                                return [].concat((0, i.default)(t), [n, a !== e.length - 1 && v.default.t(407) || ""])
                            }), []);
                            return v.default.t(342, {
                                participants: n.join(""),
                                subject: t
                            })
                        }, e.onAddParticipant = function(t) {
                            (0, g.addParticipants)(e.props.chat, t).catch((function() {})), d.Cmd.closeModal()
                        }, e._pop = function() {
                            e.pop()
                        }, e
                    }
                    return (0, o.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, b.jsx)(x.SelectModal, {
                                onConfirm: this.confirmAddParticipant,
                                filter: this.contactFilter,
                                title: c.fbt._("Add participant", null, {
                                    hk: "48ECfz"
                                }),
                                isDisabled: this._isGroupParticipant,
                                isSelected: this._isGroupParticipant,
                                customSecondaryText: this.customSecondaryText,
                                listType: x.ListType.PARTICIPANT_MANAGE_MODAL,
                                singleSelectionFooterType: C.FooterType.CONFIRM,
                                multipleSelectionFooterType: C.FooterType.CONFIRM,
                                shouldShowSelectionSummary: !1
                            }))
                        }
                    }]), n
                }(m.default);
            t.default = _
        },
        95220: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(34575)),
                r = a(n(93913)),
                o = a(n(2205)),
                l = a(n(99842)),
                s = a(n(69237)),
                u = a(n(12494)),
                c = a(n(50177)),
                d = a(n(43463)),
                f = n(85893),
                h = function(e) {
                    (0, o.default)(n, e);
                    var t = (0, l.default)(n);

                    function n() {
                        var e;
                        (0, i.default)(this, n);
                        for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r)))._showArchiveSettingsDrawer = function() {
                            e.push((0, f.jsx)(s.default, {
                                settings: d.default,
                                onClose: e._pop
                            }))
                        }, e._pop = function() {
                            e.pop()
                        }, e
                    }
                    return (0, r.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, f.jsx)(u.default, {
                                showSettings: this._showArchiveSettingsDrawer,
                                onClose: this._pop,
                                settings: d.default
                            }))
                        }
                    }]), n
                }(c.default);
            t.default = h
        },
        75393: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(87757)),
                r = a(n(48926)),
                o = a(n(63038)),
                l = a(n(34575)),
                s = a(n(93913)),
                u = a(n(2205)),
                c = a(n(99842)),
                d = n(48360),
                f = n(67294),
                h = n(26141),
                p = n(65971),
                m = n(49726),
                v = a(n(53187)),
                g = a(n(18345)),
                x = n(19288),
                C = a(n(50177)),
                b = n(85893),
                _ = function(e) {
                    (0, u.default)(n, e);
                    var t = (0, c.default)(n);

                    function n() {
                        return (0, l.default)(this, n), t.apply(this, arguments)
                    }
                    return (0, s.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, b.jsx)(j, {
                                contactId: this.props.contactId,
                                onClose: this.pop
                            }))
                        }
                    }]), n
                }(C.default);

            function j(e) {
                var t = e.contactId,
                    n = (0, f.useState)(void 0),
                    a = (0, o.default)(n, 2),
                    l = a[0],
                    s = a[1],
                    u = (0, f.useState)(!0),
                    c = (0, o.default)(u, 2),
                    C = c[0],
                    _ = c[1];
                (0, f.useEffect)((function() {
                    (function() {
                        var e = (0, r.default)(i.default.mark((function e() {
                            var n, a, r;
                            return i.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, h.BusinessProfileCollection.update(t, {
                                            getMerchantCompliance: !0
                                        });
                                    case 2:
                                        n = e.sent, a = Array.isArray(n) ? n[0] : n, (r = a.serialize()) ? (s(r.legalEntityDetails || void 0), _(!1)) : __LOG__(3)`compliance: cannot fetch business details (${t.toString()})`;
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
                var j = null != l ? l : {},
                    S = j.entityName,
                    y = j.customerCareDetails,
                    k = j.grievanceOfficerDetails,
                    E = (0, m.getEntityTypeText)(l);
                return (0, b.jsxs)(v.default, {
                    theme: "striped",
                    children: [(0, b.jsx)(x.DrawerHeader, {
                        title: d.fbt._("Business details", null, {
                            hk: "m9xzp"
                        }),
                        type: x.DRAWER_HEADER_TYPE.SMALL,
                        onCancel: e.onClose
                    }), (0, b.jsx)(g.default, {
                        theme: C ? "center-content" : void 0,
                        children: C ? (0, b.jsx)(p.ComplianceInfoLoading, {}) : (0, b.jsxs)(b.Fragment, {
                            children: [(0, b.jsxs)(p.ComplianceInfoGroup, {
                                children: [(0, b.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: S,
                                    label: d.fbt._("Legal Name of Business", null, {
                                        hk: "2s9jD"
                                    })
                                }), (0, b.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: E,
                                    label: d.fbt._("Business Type", null, {
                                        hk: "48J73B"
                                    })
                                })]
                            }), (0, b.jsxs)(p.ComplianceInfoGroup, {
                                title: d.fbt._("Customer Care Information", null, {
                                    hk: "qlYos"
                                }),
                                children: [(0, b.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == y ? void 0 : y.mobileNumber,
                                    label: d.fbt._("Mobile Phone Number", null, {
                                        hk: "PMTTg"
                                    }),
                                    forceLTR: !0
                                }), (0, b.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == y ? void 0 : y.landlineNumber,
                                    label: d.fbt._("Landline Phone Number", null, {
                                        hk: "tXYaf"
                                    }),
                                    forceLTR: !0
                                }), (0, b.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == y ? void 0 : y.email,
                                    label: d.fbt._("Email Address", null, {
                                        hk: "2jYxR1"
                                    })
                                })]
                            }), (0, b.jsxs)(p.ComplianceInfoGroup, {
                                title: d.fbt._("Grievance Officer Information", null, {
                                    hk: "3emd7I"
                                }),
                                children: [(0, b.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == k ? void 0 : k.name,
                                    label: d.fbt._("Name", null, {
                                        hk: "2vEs6r"
                                    })
                                }), (0, b.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == k ? void 0 : k.mobileNumber,
                                    label: d.fbt._("Mobile Phone Number", null, {
                                        hk: "3kk5I"
                                    }),
                                    forceLTR: !0
                                }), (0, b.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == k ? void 0 : k.landlineNumber,
                                    label: d.fbt._("Landline Phone Number", null, {
                                        hk: "4GBzF0"
                                    })
                                }), (0, b.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == k ? void 0 : k.email,
                                    label: d.fbt._("Email Address", null, {
                                        hk: "3SvbLl"
                                    })
                                })]
                            })]
                        })
                    })]
                }, "merchant-details-modal")
            }
            t.default = _
        },
        44250: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(81109)),
                r = a(n(87757)),
                o = a(n(48926)),
                l = a(n(34575)),
                s = a(n(93913)),
                u = a(n(2205)),
                c = a(n(99842)),
                d = a(n(45705)),
                f = a(n(20859)),
                h = a(n(4988)),
                p = n(65901),
                m = n(39358),
                v = a(n(5684)),
                g = a(n(28201)),
                x = n(73092),
                C = a(n(31294)),
                b = n(96706),
                _ = a(n(55422)),
                j = a(n(50177)),
                S = n(38032),
                y = n(2629),
                k = a(n(99337)),
                E = n(86785),
                T = n(3995),
                M = a(n(11465)),
                w = n(26224),
                I = n(53082),
                P = n(56264),
                A = n(36844),
                N = a(n(50507)),
                D = n(52867),
                O = n(9835),
                R = a(n(77538)),
                L = n(75294),
                G = a(n(1270)),
                B = n(60425),
                F = a(n(46989)),
                V = n(45065),
                U = n(75266),
                H = n(3298),
                q = n(4099),
                K = a(n(40290)),
                W = n(45323),
                Y = n(58419),
                z = n(85893),
                X = function(e) {
                    (0, u.default)(a, e);
                    var t, n = (0, c.default)(a);

                    function a() {
                        var e;
                        (0, l.default)(this, a);
                        for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++) i[r] = arguments[r];
                        return (e = n.call.apply(n, [this].concat(i)))._scrollOffset = 0, e._setScrollOffset = function(t) {
                            e._scrollOffset = t
                        }, e.onProductDetail = function(t, n) {
                            var a = e.props.chat,
                                i = (0, z.jsx)(R.default, {
                                    chat: a,
                                    collectionId: n,
                                    product: t,
                                    onEnd: e._end,
                                    onBack: e._popAndUpdate,
                                    refreshCarousel: !1,
                                    onProductLinkClick: e._onProductLinkClick,
                                    onProductMoreInformation: e.onProductMoreInformation,
                                    onCartClick: e._onCartClick
                                });
                            e.push(i)
                        }, e.onProductDetailFromInfo = function(t) {
                            var n = (0, z.jsx)(L.ProductDetailsWithDeepLink, {
                                chat: e.props.chat,
                                productInfo: t,
                                onEnd: e._end,
                                onBack: e._pop,
                                onProductDetail: e.onProductDetail,
                                onProductCatalog: e.onProductCatalogHeaderClick,
                                onProductLinkClick: e._onProductLinkClick,
                                onProductMoreInformation: e.onProductMoreInformation,
                                onCartClick: e._onCartClick
                            });
                            e.push(n)
                        }, e.onCollectionSeeAll = function(t) {
                            var n = e.props.chat.id;
                            e.push((0, z.jsx)(m.CollectionContentDrawer, {
                                contact: e.props.chat.contact,
                                onProductDetail: e.onProductDetail,
                                catalogId: n,
                                onBack: e._pop,
                                onCatalogLinkClick: e._onCatalogLinkClick,
                                onCartClick: e._onCartClick,
                                collection: t
                            }))
                        }, e._onProductLinkClick = function(t) {
                            e.push((0, z.jsx)(G.default, {
                                product: t,
                                onBack: e._pop
                            }))
                        }, e.onProductMoreInformation = function(t) {
                            var n = (0, z.jsx)(F.default, {
                                product: t,
                                onBack: e._popAndUpdate
                            });
                            e.push(n)
                        }, e._onCatalogLinkClick = function(t, n) {
                            e.push((0, z.jsx)(f.default, {
                                catalog: t,
                                contact: n,
                                onBack: e._pop
                            }))
                        }, e._onCartClick = function(t) {
                            var n = (0, D.getProductCatalogContext)(e.props.context),
                                a = (0, K.default)(t, e.props.chat, n);
                            a && e.push(a)
                        }, e.pushProductCatalog = function() {
                            var t = e.props.chat,
                                n = (0, y.canViewCollections)() ? (0, z.jsx)(h.default, {
                                    contact: t.contact,
                                    onProductDetail: e.onProductDetail,
                                    catalogId: t.id,
                                    onBack: e._pop,
                                    businessProfile: t.contact.businessProfile,
                                    onCatalogLinkClick: e._onCatalogLinkClick,
                                    onCartClick: e._onCartClick,
                                    onCollectionSeeAll: e.onCollectionSeeAll
                                }) : (0, z.jsx)(B.ProductListDrawer, {
                                    contact: t.contact,
                                    onProductDetail: e.onProductDetail,
                                    catalogId: t.id,
                                    onBack: e._pop,
                                    businessProfile: t.contact.businessProfile,
                                    onCatalogLinkClick: e._onCatalogLinkClick,
                                    onCartClick: e._onCartClick
                                });
                            e.push(n)
                        }, e.onProductCatalog = function(t, n) {
                            var a = e.props.chat.id;
                            (0, y.canViewCollections)() && H.QPL.markerStart(q.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, {
                                string: {
                                    EntryPoint: n
                                }
                            }), (0, P.logCarouselViewMoreClick)({
                                catalogOwnerWid: a,
                                catalogContext: t
                            }), e.pushProductCatalog(a)
                        }, e.onProductCatalogHeaderClick = function(t, n) {
                            (0, P.logCarouselViewMoreClick)({
                                catalogOwnerWid: t,
                                catalogContext: n
                            }), e.onProductCatalog(n, "ProductCatalogHeader")
                        }, e.onStarred = function() {
                            var t = (0, z.jsx)(W.StarredDrawerLoadable, {
                                chat: e.props.chat,
                                starredMsgs: e.props.chat.getStarredMsgs(),
                                onClose: e._pop
                            });
                            e.push(t)
                        }, e.onAdminSetting = function() {
                            var t = e.props.chat,
                                n = (0, z.jsx)(M.default, {
                                    chat: t,
                                    groupMetadata: t.groupMetadata,
                                    onClose: e._pop
                                });
                            e.push(n)
                        }, e.onContactCard = function() {
                            e.push((0, z.jsx)(v.default, {
                                chat: e.props.chat,
                                onClose: e._pop
                            }))
                        }, e.onMediaGallery = function() {
                            var t = (0, z.jsx)(A.MediaGalleryDrawer, {
                                chat: e.props.chat,
                                onBack: e._pop,
                                onProductDetail: e.onProductDetail,
                                setProductsScrollOffset: e._setScrollOffset
                            });
                            e.push(t)
                        }, e.onGroupInviteLink = function() {
                            var t = e.props.chat;
                            if (t.isInviteGrowthLockedGroup()) {
                                var n, a = !!(null === (n = t.groupMetadata) || void 0 === n ? void 0 : n.participants.iAmAdmin());
                                (0, T.openGrowthLockedModal)(a, !0)
                            } else {
                                var i = (0, z.jsx)(E.GroupInviteLinkDrawerLoadable, {
                                    chat: e.props.chat,
                                    groupMetadata: t.groupMetadata,
                                    onBack: e._pop
                                });
                                e.push(i)
                            }
                        }, e._pop = function() {
                            e.pop()
                        }, e._popAndUpdate = function() {
                            e.popAndUpdate({
                                initialTab: A.TABS.PRODUCTS,
                                productsScrollOffset: e._scrollOffset
                            })
                        }, e._end = function() {
                            e.end(!0)
                        }, e.onVerification = function(t) {
                            var n = t || e.props.chat.contact,
                                a = (0, z.jsx)(Y.VerificationDrawerLoadable, {
                                    contact: n,
                                    onClose: e._pop,
                                    isFirstLevel: !1
                                });
                            e.push(a)
                        }, e.onLiveLocation = function() {
                            var t = (0, z.jsx)(I.LiveLocationDrawerLoadable, {
                                chat: e.props.chat,
                                onClose: e._pop
                            });
                            e.push(t)
                        }, e._handleDDMSettingsClick = function(t) {
                            e.push((0, z.jsx)(C.default, {
                                onClose: e._pop,
                                entryPoint: t
                            }))
                        }, e.onEphemeral = function() {
                            var t = e.props.chat,
                                n = t.isGroup ? N.default.DISAPPEARING_MODE_ENTRY_POINT_TYPE.GROUP_CHAT_DISAPPEARING_MESSAGES_SETTING : N.default.DISAPPEARING_MODE_ENTRY_POINT_TYPE.INDIVIDUAL_CHAT_DISAPPEARING_MESSAGES_SETTING,
                                a = (0, z.jsx)(_.default, {
                                    chat: t,
                                    showNux: !1,
                                    entryPoint: N.default.EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_INFO,
                                    onClose: e._pop,
                                    onDDMSettingsClick: function() {
                                        return e._handleDDMSettingsClick(n)
                                    }
                                });
                            e.push(a)
                        }, e
                    }
                    return (0, s.default)(a, [{
                        key: "componentDidMount",
                        value: (t = (0, o.default)(r.default.mark((function e() {
                            var t, n, a, i;
                            return r.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = this.onStarred, n = this.onMediaGallery, !(a = this.props.chat).isGroup) {
                                            e.next = 13;
                                            break
                                        }
                                        if (!S.GK.supportsFeature(S.GK.F.MD_BACKEND)) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.next = 7, (0, V.queryAndUpdateGroupMetadataById)(a.id);
                                    case 7:
                                        if (!(0, y.communitiesEnabled)() || (null === (i = a.groupMetadata) || void 0 === i ? void 0 : i.groupType) !== w.GroupType.COMMUNITY) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.next = 10, (0, U.queryAndUpdateSubgroupsMetadata)(a.id);
                                    case 10:
                                        this.push((0, z.jsx)(k.default, {
                                            chat: a,
                                            showFullGroupDescription: this.props.showFullGroupDescription,
                                            scrollToParticipantList: this.props.scrollToParticipantList,
                                            groupMetadata: a.groupMetadata,
                                            contact: a.contact,
                                            profilePicThumb: a.contact.getProfilePicThumb(),
                                            onVerification: this.onVerification,
                                            onStarred: t,
                                            onMediaGallery: n,
                                            onAdminSetting: this.onAdminSetting,
                                            onGroupInviteLink: this.onGroupInviteLink,
                                            onLiveLocation: this.onLiveLocation,
                                            onEphemeral: this.onEphemeral,
                                            onClose: this._pop
                                        })), e.next = 14;
                                        break;
                                    case 13:
                                        a.isBroadcast ? this.push((0, z.jsx)(d.default, {
                                            chat: a,
                                            contact: a.contact,
                                            onStarred: t,
                                            onMediaGallery: n,
                                            onClose: this._pop
                                        })) : a.isUser && (a.contact.isBusiness && (0, y.canSeeBizProfileV3)() && p.Cmd.setDrawerContext("right", (0, D.buildProductCatalogContext)(new O.ProductCatalogSession, (0, x.getMaybeBizPlatformForLogging)(a.contact.id.toString()), N.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE)), this.push((0, z.jsx)(g.default, {
                                            contact: a.contact,
                                            onVerification: this.onVerification,
                                            onStarred: t,
                                            onContactCard: this.onContactCard,
                                            onMediaGallery: n,
                                            onProductCatalog: this.onProductCatalog,
                                            onProductDetail: this.onProductDetail,
                                            onLiveLocation: this.onLiveLocation,
                                            onEphemeral: this.onEphemeral,
                                            onClose: this._pop,
                                            profileEntryPoint: this.props.profileEntryPoint
                                        })));
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return t.apply(this, arguments)
                        })
                    }]), a
                }(j.default);
            t.default = function(e) {
                return (0, z.jsx)(b.DrawerContext.Consumer, {
                    children: function(t) {
                        return (0, z.jsx)(X, (0, i.default)({
                            context: t
                        }, e))
                    }
                })
            }
        },
        5118: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.msg,
                    a = e.highlightedMsgIds,
                    w = (0, E.default)(),
                    I = (0, k.default)(),
                    P = (0, C.default)(),
                    A = (0, b.default)((function() {
                        return n.chat.constructMediaMsgs(n)
                    })),
                    N = A.current.length,
                    D = (0, j.default)(N),
                    O = (0, b.default)((function() {
                        return n.type === s.MSG_TYPE.IMAGE ? new g.default.UiAction({
                            uiActionType: g.default.UI_ACTION_TYPE.IMAGE_OPEN,
                            uiActionPreloaded: n.mediaData.mediaStage === p.MEDIA_DATA_STAGE.RESOLVED
                        }) : null
                    })),
                    R = (0, u.useRef)(null),
                    L = (0, u.useRef)(),
                    G = (0, u.useRef)(),
                    B = (0, u.useRef)(null),
                    F = (0, u.useRef)(null),
                    V = (0, u.useRef)(null),
                    U = (0, u.useState)(n),
                    H = (0, i.default)(U, 2),
                    q = H[0],
                    K = H[1],
                    W = (0, u.useState)(!1),
                    Y = (0, i.default)(W, 2),
                    z = Y[0],
                    X = Y[1],
                    Z = (0, u.useState)(!0),
                    $ = (0, i.default)(Z, 2),
                    J = $[0],
                    Q = $[1],
                    ee = (0, j.default)(q),
                    te = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = F.current,
                            n = V.current,
                            a = B.current;
                        if (t && n && a) {
                            var i = 0;
                            a instanceof HTMLElement && (i = a.clientWidth / 2 - t.clientWidth / 2), (0, T.default)(n, "stop");
                            var r = 0;
                            e && (r = 300), (0, T.default)(a, "scroll", {
                                duration: r,
                                container: n,
                                offset: i,
                                axis: "x",
                                easing: [.1, .82, .25, 1]
                            })
                        }
                    },
                    ne = function(e) {
                        if (!e) return !0;
                        var t = e.isViewOnce,
                            n = e.isStickerMsg;
                        return !t && !n
                    };
                (0, u.useEffect)((function() {
                    var e;
                    te(), ne(n) && (e = F.current) && (0, T.default)(e, {
                        opacity: [1, 0],
                        translateY: ["0%", "100%"]
                    }, {
                        duration: 300,
                        delay: 100,
                        easing: [.1, .82, .25, 1]
                    }).then((function() {
                        w.aborted || Q(!1)
                    }))
                }), []), (0, u.useEffect)((function() {
                    d.GK.isMediaGalleryFixEnabled() && N > (null != D ? D : 0) && te()
                }));
                var ae = function(e) {
                        I((function() {
                            A.current.loadMoreAroundIfNeeded(e)
                        })), K(e)
                    },
                    ie = function(e) {
                        if (e && e.stopPropagation(), !z) {
                            var t = q;
                            if (t) {
                                var a = null;
                                for (a = A.current.getAfter(t);
                                    (null === (i = a) || void 0 === i ? void 0 : i.mediaData) && !(0, h.hasThumbnail)(a.mediaData);) {
                                    var i;
                                    a = A.current.getAfter(a)
                                }
                                a ? ae(a) : A.current.hasMediaAfter && (L.current || (L.current = A.current.queryMedia({
                                    chat: n.chat,
                                    msg: n,
                                    direction: "after"
                                }).then((function(e) {
                                    w.aborted || "number" == typeof e.length && e.length > 0 && q === n && ie()
                                })).catch((function() {
                                    __LOG__(3)`query media msgs error: `
                                })).finally((function() {
                                    L.current = null
                                }))))
                            }
                        }
                    },
                    re = function(e) {
                        if (e && e.stopPropagation(), !z) {
                            var t = q;
                            if (t) {
                                var a = null;
                                for (a = A.current.getBefore(t);
                                    (null === (i = a) || void 0 === i ? void 0 : i.mediaData) && !(0, h.hasThumbnail)(a.mediaData);) {
                                    var i;
                                    a = A.current.getBefore(a)
                                }
                                a ? ae(a) : A.current.hasMediaBefore && (G.current || (G.current = A.current.queryMedia({
                                    chat: n.chat,
                                    msg: n,
                                    direction: "before"
                                }).then((function(e) {
                                    w.aborted || "number" == typeof e.length && e.length > 0 && q === n && re()
                                })).catch((function() {
                                    __LOG__(3)`query media msgs error: `
                                })).finally((function() {
                                    G.current = null
                                }))))
                            }
                        }
                    },
                    oe = function() {
                        c.Cmd.closeModalMedia()
                    },
                    le = (0, S.default)((function() {
                        K(null), oe()
                    })),
                    se = (null == q ? void 0 : q.isViewOnce) || (null == q ? void 0 : q.isStickerMsg);
                (0, _.useListener)(se ? q : null, "revoked", le);
                var ue = se ? null : A.current;
                (0, _.useListener)(ue, "remove", (function(e, t, a) {
                    var i = A.current,
                        r = q;
                    if (i.includes(n) || null != r && null != r.id && r.id.toString() !== e.id.toString()) P();
                    else {
                        var l = a.index;
                        0 === i.length ? oe() : i.length === l ? ae((0, o.default)(i.at(l - 1), "mediaMsgs.at(index - 1)")) : ae((0, o.default)(i.at(l), "mediaMsgs.at(index)"))
                    }
                })), (0, _.useListener)(ue, "reset", (function() {
                    oe()
                })), (0, _.useListener)(ue, "query_media_after", (function() {
                    P()
                })), (0, _.useListener)(ue, "query_media_before", (function() {
                    var e = V.current;
                    e && (R.current = e.scrollWidth, e instanceof HTMLElement && P())
                })), (0, _.useListener)(window, "keydown", (function(e) {
                    var t = f.default.isRTL();
                    e.keyCode === r.default.LEFT ? t ? ie() : re() : e.keyCode === r.default.RIGHT && (t ? re() : ie())
                })), (0, u.useEffect)((function() {
                    I((function() {
                        q && A.current.loadMoreAroundIfNeeded(q)
                    }))
                }), [q, A, I]), (0, u.useEffect)((function() {
                    if (ee !== q) te(!0);
                    else {
                        var e = V.current;
                        if (!e || null == R.current || 0 === R.current) return;
                        e instanceof HTMLElement && (e.scrollLeft += e.scrollWidth - R.current), R.current = null
                    }
                }), [q, ee]);
                var ce = (0, y.default)((function(e, t, n) {
                    if (0 !== t.length && null != n) {
                        if (t.hasMediaBefore && n < e.clientWidth) {
                            var a = (0, o.default)(t.head(), "mediaMsgs.head()");
                            I((function() {
                                t.queryMedia({
                                    chat: a.chat,
                                    msg: a
                                }), P()
                            }))
                        }
                        if (t.hasMediaAfter && n + l.SCROLL_FUDGE > e.scrollWidth - 2 * e.clientWidth) {
                            var i = (0, o.default)(t.last(), "mediaMsgs.last()");
                            I((function() {
                                t.queryMedia({
                                    chat: i.chat,
                                    msg: i,
                                    direction: "after"
                                }), P()
                            }))
                        }
                    }
                }), 100);
                if (!q) return null;
                var de = A.current,
                    fe = de.last(),
                    he = de.hasMediaAfter || q !== fe ? ie : null,
                    pe = de.head(),
                    me = null;
                me = de.hasMediaBefore || q !== pe ? re : null, d.GK.supportsFeature(d.GK.F.MD_BACKEND) && (me = (de.hasMediaBefore || q !== pe) && function() {
                    if (!q) return !1;
                    for (var e = A.current.indexOf(q) - 1; e > 0; e--) {
                        var t = A.current.at(e);
                        if (t && (0, h.hasThumbnail)(t.mediaData)) return !0
                    }
                    return !1
                }() ? re : null);
                return (0, M.jsxs)("div", {
                    className: z ? "img-zoomed-in" : null,
                    children: [ne(q) && (0, M.jsx)(v.default, {
                        activeMsg: q,
                        mediaMsgs: A.current,
                        highlightedMsgIds: e.highlightedMsgIds,
                        onSelectThumb: ae,
                        onSetActiveThumb: function(e) {
                            B.current = e
                        },
                        onScroll: function(e) {
                            ce(e.currentTarget, A.current, e.currentTarget.scrollLeft)
                        },
                        setRefThumbsContainer: function(e) {
                            F.current = e
                        },
                        setRefThumbs: function(e) {
                            V.current = e
                        }
                    }), (0, M.jsx)(m.default, {
                        msg: q,
                        mediaData: q.mediaData,
                        onBack: oe,
                        onExitAnimation: function() {
                            var e;
                            ne(n) && (e = F.current) && (0, T.default)(e, {
                                opacity: [0, 1],
                                translateY: ["100%", "0%"]
                            }, {
                                duration: 300,
                                easing: [.1, .82, .25, 1]
                            })
                        },
                        onNext: he,
                        onPrev: me,
                        onImgZoomIn: function(e) {
                            X(e)
                        },
                        getZoomNode: e.getZoomNode,
                        startTime: e.startTime,
                        isAnimatingIn: J,
                        onImageLoad: O.current ? function() {
                            var e = O.current;
                            e && (e.markUiActionT(), e.commit(), (0, x.logUiActionShadowPrivateStatsTestEvents)(), O.current = null)
                        } : null,
                        msgIndexInAlbum: function() {
                            var e = -1;
                            if (!a || !q) return e;
                            var t = q.id.toString();
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
            var i = a(n(63038)),
                r = a(n(16270)),
                o = a(n(272)),
                l = n(80965),
                s = n(40787),
                u = n(67294),
                c = n(65901),
                d = n(38032),
                f = a(n(45159)),
                h = n(19499),
                p = n(41655),
                m = a(n(92494)),
                v = a(n(82184)),
                g = a(n(50507)),
                x = n(26329),
                C = a(n(57811)),
                b = a(n(39394)),
                _ = n(8413),
                j = a(n(40054)),
                S = a(n(3227)),
                y = a(n(15663)),
                k = a(n(48311)),
                E = a(n(1379)),
                T = a(n(66265)),
                M = n(85893)
        },
        46324: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.requireBundle = t.SendContactFlowLoadable = void 0;
            var i = a(n(87757)),
                r = a(n(48926)),
                o = a(n(68356)),
                l = a(n(45159)),
                s = a(n(47410)),
                u = a(n(19509)),
                c = n(85893),
                d = (0, u.default)((0, r.default)(i.default.mark((function e() {
                    var t;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Promise.all([n.e(721), n.e(1359), n.e(4423), n.e(275)]).then(n.bind(n, 98867));
                            case 2:
                                return t = e.sent, e.abrupt("return", t.default);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), "SendContactFlow");
            t.requireBundle = d;
            var f = (0, o.default)({
                loader: d,
                loading: function(e) {
                    return (0, c.jsx)(s.default, {
                        title: l.default.t(751),
                        error: Boolean(e.error)
                    })
                }
            });
            t.SendContactFlowLoadable = f
        },
        12494: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onClose,
                    n = function() {
                        return d.ChatCollection.filter((function(e) {
                            return e.archive && e.shouldAppearInList
                        }))
                    },
                    a = (0, D.useModelValues)(e.settings, ["showArchiveV2", "archive"]),
                    G = (0, A.default)((function() {
                        return new b.default
                    })),
                    B = (0, A.default)((function() {
                        return new w.default([], (function(e) {
                            return e.id.toString()
                        }))
                    })),
                    F = (0, l.useRef)(null),
                    V = (0, l.useState)(!1),
                    U = (0, i.default)(V, 2),
                    H = U[0],
                    q = U[1],
                    K = (0, l.useState)(n),
                    W = (0, i.default)(K, 2),
                    Y = W[0],
                    z = W[1],
                    X = function() {
                        return (0, S.archiveV2Supported)() && a.showArchiveV2
                    };
                (0, N.useListener)(d.ChatCollection, [X() ? "sort" : null, "change:archive", "add", "remove"].filter(Boolean), (function() {
                    z(n())
                }));
                var Z = function(e) {
                    B.current.setVal(e, !1)
                };
                (0, N.useListener)(f.Cmd, "close_chat", (function(e) {
                    e === B.current.getVal() && B.current.unset()
                })), (0, N.useListener)(f.Cmd, "update_chatlist_selection", Z);
                var $ = (0, O.default)(M.NUX.ARCHIVE, 3),
                    J = (0, i.default)($, 3),
                    Q = J[0],
                    ee = J[1],
                    te = J[2],
                    ne = function() {
                        var e = d.ChatCollection.some((function(e) {
                            return e.archive
                        }));
                        return X() && e && Q && !H
                    };
                (0, l.useEffect)((function() {
                    if (ne() && ee(), X() && (0, E.isElevatedImportantMessageEnabled)()) {
                        var e = n(),
                            t = new Map;
                        e.forEach((function(e) {
                            e.archiveAtMentionViewedInDrawer = !0, t.set(e.id.toString(), !0)
                        })), (0, c.updateChatArchiveDrawer)(t)
                    }
                    F.current && r.default.focus(F.current);
                    var a = d.ChatCollection.toArray().find((function(e) {
                        return e.active && e.archive
                    }));
                    a && Z(a)
                }), []);
                var ae, ie, re = function() {
                        t()
                    },
                    oe = function(e, t) {
                        f.Cmd.openChatFromUnread(t).then((function(e) {
                            e && f.Cmd.focusChatTextInput(t)
                        })), (0, S.archiveV2Supported)() && a.archive.enabled || re()
                    };
                B.current.init(Y, !0), ne() && (ae = (0, L.jsxs)("div", {
                    className: s.default.nuxContainer,
                    children: [(0, L.jsxs)(_.FlexColumn, {
                        align: "center",
                        children: [(0, L.jsx)("span", {
                            className: s.default.nuxIcon,
                            children: (0, L.jsx)(I.default, {
                                name: "archive-nux"
                            })
                        }), (0, L.jsx)("div", {
                            className: s.default.nuxHeader,
                            children: (0, L.jsx)(P.Text, {
                                theme: "large",
                                as: "h1",
                                children: o.fbt._("Archived chats will stay archived", null, {
                                    hk: "3dEGG"
                                })
                            })
                        }), (0, L.jsx)("div", {
                            className: s.default.nuxContent,
                            children: (0, L.jsx)("div", {
                                className: s.default.nuxText,
                                children: (0, L.jsx)(P.Text, {
                                    theme: "plain",
                                    as: "p",
                                    children: j.GK.supportsFeature(j.GK.F.MD_BACKEND) ? o.fbt._("To reduce interruptions, archived chats will stay here with notifications turned off. To change this experience, go to Settings > Chats on your phone.", null, {
                                        hk: "1VSdJQ"
                                    }) : o.fbt._("To reduce interruptions, archived chats will stay here with notifications turned off. To change this experience, go to Settings > Archived Chats.", null, {
                                        hk: "1gz2m1"
                                    })
                                })
                            })
                        })]
                    }), (0, L.jsx)("button", {
                        onClick: function() {
                            te(), q(!0)
                        },
                        className: s.default.btnClose,
                        children: (0, L.jsx)(I.default, {
                            name: "x-alt"
                        })
                    })]
                }));
                ie = Y.length > 0 ? (0, L.jsxs)(y.HotKeys, {
                    onRef: function(e) {
                        F.current = e
                    },
                    handlers: {
                        down: function(e) {
                            e.preventDefault(), e.stopPropagation(), B.current.setNext(!0)
                        },
                        up: function(e) {
                            e.preventDefault(), e.stopPropagation(), B.current.setPrev(!0)
                        }
                    },
                    children: [(0, L.jsx)(R.default, {
                        transitionName: "slide",
                        children: ae
                    }), (0, L.jsx)(C.FlatList, {
                        className: s.default.flatListContainer,
                        data: Y.map((function(e) {
                            return {
                                itemKey: e.id.toString(),
                                chat: e
                            }
                        })),
                        flatListController: G.current,
                        direction: "vertical",
                        renderItem: function(e) {
                            return (0, L.jsx)(u.Chat, {
                                chat: e.chat,
                                mode: u.Mode.LAST,
                                active: B.current,
                                onClick: oe,
                                hideArchivedIcon: (0, S.archiveV2Supported)() && a.archive.enabled,
                                hideMuteIcon: X(),
                                hideMuteOption: X(),
                                ephemeralIcon: "chat-list"
                            })
                        }
                    })]
                }) : (0, L.jsx)(x.Archived, {});
                var le = !j.GK.supportsFeature(j.GK.F.MD_BACKEND) && (0, S.archiveV2Supported)() && a.archive.enabled ? (0, L.jsx)(T.MenuBarItem, {
                        a8nText: "archived-menu",
                        icon: (0, L.jsx)(I.default, {
                            name: "menu"
                        }),
                        title: k.default.t(611),
                        children: (0, L.jsx)(v.Dropdown, {
                            type: "dropdown_menu",
                            flipOnRTL: !0,
                            dirX: v.DirX.LEFT,
                            children: (0, L.jsx)(g.DropdownItem, {
                                a8n: "open-archive-settings menu-item",
                                action: e.showSettings,
                                children: o.fbt._("Archive settings", null, {
                                    hk: "1YI0jC"
                                })
                            })
                        }, "ArchivedDrawerHeader")
                    }) : null,
                    se = (0, S.archiveV2Supported)() && a.archive.enabled ? o.fbt._("Archived", null, {
                        hk: "3HjzQg"
                    }) : k.default.t(144);
                return (0, L.jsxs)(h.default, {
                    theme: "archived",
                    children: [(0, L.jsx)(m.DrawerHeader, {
                        title: se,
                        onBack: re,
                        type: m.DRAWER_HEADER_TYPE.LARGE,
                        menu: le
                    }), (0, L.jsx)(p.default, {
                        flatListControllers: [G.current],
                        children: ie
                    })]
                })
            };
            var i = a(n(63038)),
                r = a(n(11845)),
                o = n(48360),
                l = n(67294),
                s = a(n(84485)),
                u = n(97397),
                c = n(28862),
                d = n(4481),
                f = n(65901),
                h = a(n(53187)),
                p = a(n(18345)),
                m = n(19288),
                v = n(98169),
                g = n(94680),
                x = n(75993),
                C = n(73568),
                b = a(n(92546)),
                _ = n(27968),
                j = n(38032),
                S = n(2629),
                y = n(32012),
                k = a(n(45159)),
                E = n(12231),
                T = n(91823),
                M = n(15849),
                w = a(n(39916)),
                I = a(n(7665)),
                P = n(22552),
                A = a(n(39394)),
                N = n(8413),
                D = n(69283),
                O = a(n(36387)),
                R = a(n(60806)),
                L = n(85893)
        },
        22110: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = (0, p.useModelValues)(e.contact, ["name", "verifiedLevel", "verifiedName", "formattedName"]);
                t = f.GK.supportsFeature(f.GK.F.VNAME_V_2) ? function() {
                    switch (n.verifiedLevel) {
                        case r.VERIFIED_LEVEL.HIGH:
                            return n.name === n.verifiedName ? h.default.t(854, {
                                businessName: n.verifiedName
                            }) : h.default.t(855, {
                                businessName: n.verifiedName
                            });
                        case r.VERIFIED_LEVEL.LOW:
                        case r.VERIFIED_LEVEL.UNKNOWN:
                            return i.fbt._("This may be a business. WhatsApp hasn't verified their name yet.", null, {
                                hk: "404mUL"
                            })
                    }
                }() : function() {
                    switch (n.verifiedLevel) {
                        case r.VERIFIED_LEVEL.HIGH:
                            return i.fbt._('WhatsApp has made changes to the business account types. "Verified Business" will now be labeled as "Official Business Account".', null, {
                                hk: "3y1yjN"
                            });
                        case r.VERIFIED_LEVEL.LOW:
                            return i.fbt._('WhatsApp has made changes to the business account types. "Confirmed Business" will now be labeled as "Business Account".', null, {
                                hk: "48HVkg"
                            });
                        case r.VERIFIED_LEVEL.UNKNOWN:
                            return h.default.t(999, {
                                businessName: n.formattedName
                            })
                    }
                }();
                var a = (0, m.jsx)(o.default, {
                    href: (0, d.getBusinessFaqUrl)(),
                    onClick: g,
                    children: h.default.t(554)
                });
                return (0, m.jsxs)(s.default, {
                    onOK: v,
                    okText: h.default.t(689),
                    children: [(0, m.jsx)(u.EmojiText, {
                        text: t
                    }), " ", a]
                })
            };
            var i = n(48360),
                r = n(96127),
                o = a(n(81288)),
                l = n(65901),
                s = a(n(86777)),
                u = n(73008),
                c = n(49012),
                d = n(29281),
                f = n(38032),
                h = a(n(45159)),
                p = n(69283),
                m = n(85893),
                v = function() {
                    l.Cmd.closeModal()
                },
                g = function(e) {
                    e.preventDefault(), l.Cmd.closeModal("none"), setTimeout((function() {
                        return (0, c.openExternalLink)((0, d.getBusinessFaqUrl)())
                    }), 10)
                }
        },
        25317: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact,
                    n = (0, C.useModelValues)(t, ["verifiedLevel", "verifiedName"]),
                    a = n.verifiedLevel,
                    _ = n.verifiedName,
                    j = (0, p.getBusinessFaqUrl)(),
                    S = !d.Conn.isSMB;
                (0, r.useEffect)((function() {
                    S && new v.default.BannerEvent({
                        bannerType: v.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                        bannerOperation: v.default.BANNER_OPERATIONS.SHOWN
                    }).commit()
                }), [S]);
                var y = a === l.VERIFIED_LEVEL.HIGH ? m.default.t(996, {
                    businessName: _
                }) : i.fbt._("This business uses WhatsApp Business, which allows them to add their opening hours, address, website and catalog of products or services.", null, {
                    hk: "82W5f"
                });
                return (0, b.jsxs)(c.default, {
                    title: i.fbt._("About WhatsApp Business", null, {
                        hk: "3XF5gx"
                    }),
                    onOK: function() {
                        u.Cmd.closeModal(), S && new v.default.BannerEvent({
                            bannerType: v.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: v.default.BANNER_OPERATIONS.DISMISS
                        }).commit()
                    },
                    okText: i.fbt._("OK", null, {
                        hk: "2KEeHb"
                    }),
                    children: [(0, b.jsx)(f.EmojiText, {
                        text: y
                    }), " ", (0, b.jsx)(s.default, {
                        href: j,
                        onClick: function(e) {
                            e.preventDefault(), u.Cmd.closeModal(), setTimeout((function() {
                                return (0, h.openExternalLink)(j)
                            }), 10)
                        },
                        children: m.default.t(554)
                    }), S && (0, b.jsx)("div", {
                        className: o.default.footerNote,
                        children: (0, b.jsxs)(x.TextSpan, {
                            theme: "muted",
                            size: "13",
                            children: [i.fbt._("If you’re a business, the free WhatsApp Business app can help.", null, {
                                hk: "3gfQun"
                            }), (0, b.jsx)("br", {}), (0, b.jsx)(s.default, {
                                onClick: function(e) {
                                    e.preventDefault(), u.Cmd.closeModal(), new v.default.BannerEvent({
                                        bannerType: v.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                                        bannerOperation: v.default.BANNER_OPERATIONS.CLICK
                                    }).commit(), setTimeout((function() {
                                        return u.Cmd.openModal((0, b.jsx)(g.SmbAppUpsellModal, {}))
                                    }), 200)
                                },
                                className: o.default.getTheAppLink,
                                children: i.fbt._("Learn about getting the app", null, {
                                    hk: "3ncguo"
                                })
                            })]
                        })
                    })]
                })
            };
            var i = n(48360),
                r = n(67294),
                o = a(n(87485)),
                l = n(96127),
                s = a(n(81288)),
                u = n(65901),
                c = a(n(86777)),
                d = n(73929),
                f = n(73008),
                h = n(49012),
                p = n(29281),
                m = a(n(45159)),
                v = a(n(50507)),
                g = n(67093),
                x = n(22552),
                C = n(69283),
                b = n(85893)
        },
        67093: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SmbAppUpsellModal = function() {
                return (0, h.jsxs)(l.default, {
                    title: i.fbt._("WhatsApp Business app", null, {
                        hk: "4BfvOl"
                    }),
                    onOK: function() {
                        new d.default.BannerEvent({
                            bannerType: d.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: d.default.BANNER_OPERATIONS.DISMISS
                        }).commit(), o.Cmd.closeModal()
                    },
                    okText: i.fbt._("Close", null, {
                        hk: "19Jpec"
                    }),
                    children: [(0, h.jsx)(f.default, {}), (0, h.jsx)("p", {
                        children: (0, h.jsx)(s.EmojiText, {
                            text: i.fbt._("If you’re a business, you can benefit from switching to the free WhatsApp Business app. It has tools to connect with customers and manage messages.", null, {
                                hk: "40fyU7"
                            })
                        })
                    }), (0, h.jsx)("br", {}), (0, h.jsxs)("p", {
                        children: [(0, h.jsx)(s.EmojiText, {
                            text: i.fbt._("Scan this code to get the WhatsApp Business App. Or, you can install it from the App Store or Google Play Store.", null, {
                                hk: "2840mD"
                            })
                        }), " ", (0, h.jsx)(r.default, {
                            href: p,
                            onClick: function(e) {
                                e.preventDefault(), o.Cmd.closeModal(), setTimeout((function() {
                                    return (0, u.openExternalLink)(p)
                                }), 10)
                            },
                            children: c.default.t(554)
                        })]
                    })]
                })
            }, t.WHATSAPP_BUSINESS_URL = void 0;
            var i = n(48360),
                r = a(n(81288)),
                o = n(65901),
                l = a(n(86777)),
                s = n(73008),
                u = n(49012),
                c = a(n(45159)),
                d = a(n(50507)),
                f = a(n(32389)),
                h = n(85893),
                p = "https://www.whatsapp.com/business";
            t.WHATSAPP_BUSINESS_URL = p
        },
        32389: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = (0, l.useRef)(null),
                    t = (0, l.useRef)(null),
                    n = (0, l.useContext)(c.ThemeContext).theme,
                    a = "dark" === n;
                return (0, l.useEffect)((function() {
                    return null != e.current && (t.current = new s.default(e.current, {
                            text: "https://www.whatsapp.com/business/download",
                            colorDark: "#122e31",
                            colorLight: "#ffffff",
                            width: r.QR_EDGE / 2,
                            height: r.QR_EDGE / 2,
                            typeNumber: 4,
                            correctLevel: s.default.CorrectLevel.H
                        })),
                        function() {
                            null != t.current && (t.current.clear(), t.current = null, e.current = null)
                        }
                }), [a]), (0, d.jsx)("div", {
                    className: u.default.wrapper,
                    children: (0, d.jsx)("div", {
                        ref: e,
                        className: (0, o.default)(u.default.code, (0, i.default)({}, u.default.codeDarkMode, a)),
                        children: (0, d.jsx)(f, {
                            theme: n
                        })
                    })
                })
            };
            var i = a(n(59713)),
                r = n(80965),
                o = a(n(94184)),
                l = n(67294),
                s = a(n(37360)),
                u = a(n(33363)),
                c = n(63443),
                d = n(85893);

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
        45705: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(48360),
                r = n(67294),
                o = a(n(56720)),
                l = a(n(86810)),
                s = a(n(52988)),
                u = (a(n(98350)), n(82506)),
                c = a(n(83399)),
                d = n(10399),
                f = n(65901),
                h = a(n(53187)),
                p = (a(n(81218)), a(n(18345))),
                m = a(n(61876)),
                v = n(19288),
                g = a(n(38973)),
                x = a(n(96178)),
                C = a(n(92546)),
                b = n(38032),
                _ = a(n(45159)),
                j = n(68220),
                S = a(n(7665)),
                y = n(22552),
                k = a(n(57811)),
                E = a(n(39394)),
                T = n(8413),
                M = n(69283),
                w = a(n(25319)),
                I = n(68034),
                P = a(n(93958)),
                A = n(85893),
                N = {
                    flexGrow: "tvf2evcx",
                    flexShrink: "oq44ahr5",
                    flexBasis: "lb5m6g5c",
                    paddingBottom: "s9fl9ege"
                };

            function D(e, t) {
                var n, a, r = e.onClose,
                    D = e.onMediaGallery,
                    O = (0, k.default)(),
                    R = (0, P.default)(),
                    L = (0, w.default)(),
                    G = (0, I.useNewChatInfoColors)(),
                    B = L ? G : null,
                    F = (0, E.default)((function() {
                        return new C.default
                    })),
                    V = (0, M.useModelValues)(e.chat, ["id", "groupMetadata"]);
                (0, T.useListener)(null === (n = V.groupMetadata) || void 0 === n ? void 0 : n.participants, ["add", "remove", "sort", "reset"], O);
                var U = null;
                D && (U = (0, A.jsx)(c.default, {
                    onMediaGallery: D,
                    chat: (0, j.unproxy)(V)
                }));
                var H, q = (0, A.jsx)(u.ChatInfoDrawerButtonsSection, {
                    newChatInfo: L,
                    children: (0, A.jsx)(m.default, {
                        a8nText: "li-delete-broadcast",
                        icon: (0, A.jsx)(S.default, {
                            name: "delete"
                        }),
                        color: "danger",
                        theme: L ? "new-chat-info" : "list-aligned",
                        onClick: function() {
                            f.Cmd.deleteOrExitChat((0, j.unproxy)(V))
                        },
                        children: _.default.t(880)
                    })
                });
                (null === (a = V.groupMetadata) || void 0 === a ? void 0 : a.creation) ? (H = d.Clock.createdStr(V.groupMetadata.creation), H = (0, A.jsx)(y.TextDiv, {
                    theme: "small",
                    children: H
                })) : H = null;
                var K = null;
                b.GK.supportsFeature(b.GK.F.MD_BACKEND) && (K = (0, A.jsx)(x.default, {
                    onClick: function() {
                        f.Cmd.openModal((0, A.jsx)(g.default, {
                            chatId: V.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    },
                    text: i.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "1iarlI"
                    }),
                    theme: L ? "new-chat-info" : null
                }));
                var W = null;
                return K && (W = (0, A.jsxs)(u.ChatInfoDrawerSection, {
                    newChatInfo: L,
                    children: [null, K]
                })), (0, A.jsxs)(h.default, {
                    ref: t,
                    theme: "striped",
                    style: B,
                    children: [(0, A.jsxs)(v.DrawerHeader, {
                        type: v.DRAWER_HEADER_TYPE.SMALL,
                        rtlFixIfOnDarwin: !0,
                        onCancel: function() {
                            r ? r() : null == R || R.uie.requestDismiss()
                        },
                        children: [(0, A.jsx)(y.TextDiv, {
                            theme: "title",
                            children: i.fbt._("Broadcast list info", null, {
                                hk: "3S4EgV"
                            })
                        }), H]
                    }), (0, A.jsx)(p.default, {
                        flatListControllers: [F.current],
                        children: (0, A.jsxs)("div", {
                            className: (0, o.default)(N),
                            children: [(0, A.jsx)(s.default, {
                                chat: (0, j.unproxy)(V)
                            }), U, undefined, W, (0, A.jsx)(l.default, {
                                chat: (0, j.unproxy)(V),
                                flatListController: F.current
                            }), q]
                        })
                    })]
                }, "contact-info-modal")
            }
            var O = (0, r.forwardRef)(D);
            t.default = O
        },
        86810: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = (0, x.default)(),
                    b = (0, v.default)(),
                    _ = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants;
                (0, g.useListener)(_, "add remove reset", b);
                var j = (0, o.useMemo)((function() {
                        return _ ? _.map((function(e) {
                            return {
                                itemKey: e.id.toString(),
                                participant: e,
                                height: 68
                            }
                        })) : []
                    }), [_]),
                    S = function(e, t) {
                        i.default.equals((0, h.getMaybeMeUser)(), t.id) || (0, d.findChat)(t.id).then((function(e) {
                            s.Cmd.openChatFromUnread(e).then((function(t) {
                                t && s.Cmd.focusChatTextInput(e)
                            }))
                        }))
                    },
                    y = null !== (n = null == _ ? void 0 : _.length) && void 0 !== n ? n : 0,
                    k = a ? p.default.t(989, {
                        count: y,
                        _plural: y
                    }) : r.fbt._("Recipients", null, {
                        hk: "1rVFI5"
                    }),
                    E = a ? null : (0, C.jsx)(m.TextSpan, {
                        theme: "section-title",
                        children: p.default.n(y)
                    });
                return (0, C.jsx)(l.ChatInfoDrawerListSection, {
                    newChatInfo: a,
                    title: k,
                    subtitle: E,
                    children: (0, C.jsx)(f.FlatList, {
                        flatListController: e.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: j,
                        renderItem: function(e) {
                            var t = e.participant,
                                n = c.ContactCollection.gadd(t.id);
                            return (0, C.jsx)(u.Contact, {
                                contact: n,
                                theme: a ? "new-chat-info" : "drawer-list",
                                admin: !!t.isAdmin,
                                onClick: S,
                                waitIdle: !0
                            }, t.id.toString())
                        }
                    })
                })
            };
            var i = a(n(67082)),
                r = n(48360),
                o = n(67294),
                l = n(82506),
                s = n(65901),
                u = n(65002),
                c = n(20050),
                d = n(68985),
                f = n(73568),
                h = n(1577),
                p = a(n(45159)),
                m = n(22552),
                v = a(n(57811)),
                g = n(8413),
                x = a(n(25319)),
                C = n(85893)
        },
        52988: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = (0, v.default)(),
                    _ = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants,
                    j = (0, m.useModelValues)(e.chat.contact, ["name"]),
                    S = (0, h.default)();
                (0, p.useListener)(_, "add remove reset", S);
                var y = null !== (n = null == _ ? void 0 : _.length) && void 0 !== n ? n : 0,
                    k = i.fbt._("Broadcast List", null, {
                        hk: "46AT9o"
                    }).toString() + " · " + u.default.t(989, {
                        count: y,
                        _plural: y
                    }),
                    E = j.name ? (0, g.jsx)(c.Name, {
                        contact: e.chat.contact,
                        selectable: !0
                    }) : i.fbt._("Untitled List", null, {
                        hk: "fYALp"
                    });
                if (a) return (0, g.jsxs)(l.default, {
                    theme: "padding-large",
                    children: [(0, g.jsx)("div", {
                        className: (0, r.default)(x),
                        children: (0, g.jsx)(o.DetailImage, {
                            id: e.chat.id,
                            size: o.DETAIL_IMAGE_SIZE.LARGE
                        })
                    }), (0, g.jsxs)(s.FlexColumn, {
                        align: "center",
                        children: [(0, g.jsx)(f.TextHeader, {
                            level: "2",
                            size: "24",
                            children: E
                        }), (0, g.jsx)("div", {
                            className: (0, r.default)(C),
                            children: (0, g.jsx)(d.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, g.jsx)(f.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: k
                                })
                            })
                        })]
                    })]
                });
                return (0, g.jsx)("div", {
                    className: (0, r.default)(b),
                    children: (0, g.jsx)(o.DetailImage, {
                        id: e.chat.id,
                        size: o.DETAIL_IMAGE_SIZE.LARGE
                    })
                })
            };
            var i = n(48360),
                r = a(n(56720)),
                o = n(66834),
                l = a(n(46821)),
                s = n(27968),
                u = a(n(45159)),
                c = n(1191),
                d = n(96197),
                f = n(22552),
                h = a(n(57811)),
                p = n(8413),
                m = n(69283),
                v = a(n(25319)),
                g = n(85893),
                x = {
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno",
                    marginBottom: "du8bjn1j"
                },
                C = {
                    lineHeight: "a4ywakfo",
                    marginTop: "g1eqewly"
                },
                b = {
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh",
                    alignItems: "gndfcl4n",
                    marginTop: "ignnouf6",
                    marginBottom: "bibl1e27"
                }
        },
        4345: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.newChatInfo,
                    a = (0, r.default)(e, s);
                return (0, l.jsx)(o.default, (0, i.default)((0, i.default)({}, a), {}, {
                    separator: null !== (t = a.separator) && void 0 !== t ? t : !n,
                    xstyle: [a.xstyle, n && u.container],
                    blockXstyle: [a.blockXstyle, n && u.block]
                }))
            };
            var i = a(n(81109)),
                r = a(n(6479)),
                o = (a(n(56720)), a(n(81218))),
                l = n(85893),
                s = ["newChatInfo"],
                u = {
                    container: {
                        paddingStart: "gx1rr48f"
                    },
                    block: {
                        paddingEnd: "f9ovudaz",
                        borderTop: "cc8mgx9x"
                    }
                }
        },
        98350: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.icon,
                    a = e.title,
                    p = e.secondaryTitle,
                    m = e.side,
                    v = (0, r.default)(e, d),
                    g = null !== (t = h[n]) && void 0 !== t ? t : 20,
                    x = (0, c.jsx)(s.FlexRow, {
                        xstyle: f.iconContainer,
                        align: "center",
                        justify: "center",
                        children: (0, c.jsx)(u.default, {
                            color: "secondary",
                            name: n,
                            height: g
                        })
                    }),
                    C = null != m ? m : "";
                "chevron" === C && (C = (0, c.jsx)(u.default, {
                    color: "secondary",
                    name: "chevron-right-alt",
                    directional: !0
                }));
                return (0, c.jsxs)(l.default, (0, i.default)((0, i.default)({
                    newChatInfo: !0
                }, v), {}, {
                    multiline: !0,
                    children: [(0, c.jsxs)(s.FlexRow, {
                        align: "center",
                        justify: "start",
                        children: [x, (0, c.jsx)("div", {
                            className: (0, o.default)(f.content),
                            children: a
                        }), (0, c.jsx)(s.FlexRow, {
                            align: "center",
                            justify: "end",
                            xstyle: f.drawerSide,
                            children: C
                        })]
                    }), (0, c.jsx)("div", {
                        className: (0, o.default)(f.secondaryTitleContainer),
                        children: p
                    })]
                }))
            };
            var i = a(n(81109)),
                r = a(n(6479)),
                o = a(n(56720)),
                l = a(n(4345)),
                s = n(27968),
                u = a(n(7665)),
                c = n(85893),
                d = ["icon", "title", "secondaryTitle", "side"],
                f = {
                    iconContainer: {
                        marginEnd: "bugiwsl0",
                        width: "qssinsw9",
                        height: "bmot90v7",
                        flexGrow: "tvf2evcx",
                        flexShrink: "oq44ahr5"
                    },
                    content: {
                        flexGrow: "ggj6brxn",
                        flexShrink: "m0h2a7mj",
                        minWidth: "ktfrpxia"
                    },
                    drawerSide: {
                        flexGrow: "tvf2evcx",
                        flexShrink: "oq44ahr5",
                        width: "baeo9xnf"
                    },
                    secondaryTitleContainer: {
                        marginStart: "oybqnh0n",
                        marginEnd: "lfum0007"
                    }
                },
                h = {
                    settings: 17
                }
        },
        83399: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                i = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.chat,
                    n = e.onMediaGallery,
                    a = s.fbt._("Media, links and docs", null, {
                        hk: "3D4fAZ"
                    }),
                    i = (0, C.default)(),
                    r = (0, j.jsx)(v.default, {
                        color: "secondary",
                        name: "chevron-right-alt",
                        directional: !0
                    }),
                    o = (0, j.jsxs)(f.FlexRow, {
                        align: "center",
                        children: [i && (h.GK.isMediaGalleryFixEnabled() ? (0, j.jsx)(y, {
                            chat: t
                        }) : (0, j.jsx)(k, {
                            chat: t
                        })), (0, j.jsx)("div", {
                            children: r
                        })]
                    });
                return (0, j.jsx)(d.ChatInfoDrawerSection, {
                    newChatInfo: i,
                    a8nText: "section-media",
                    title: a,
                    titleOnClick: n,
                    subtitle: o,
                    theme: i ? void 0 : "padding",
                    xstyle: i && S.drawerSection,
                    children: (0, j.jsx)(p.default, {
                        chat: t,
                        mediaMsgs: t.getMediaMsgs(),
                        theme: i ? "new-chat-info" : null
                    })
                })
            };
            var r = i(n(87757)),
                o = i(n(48926)),
                l = i(n(63038)),
                s = n(48360),
                u = n(67294),
                c = i(n(56720)),
                d = n(82506),
                f = n(27968),
                h = n(38032),
                p = i(n(99540)),
                m = n(19499),
                v = i(n(7665)),
                g = i(n(57811)),
                x = n(8413),
                C = i(n(25319)),
                b = i(n(48311)),
                _ = i(n(1379)),
                j = n(85893),
                S = {
                    mediaCount: {
                        marginEnd: "bugiwsl0",
                        fontSize: "bze30y65",
                        color: "g01nkquw"
                    },
                    drawerSection: {
                        paddingBottom: "aiput80m"
                    }
                };

            function y(e) {
                var t = function(e) {
                    var t = (0, u.useState)(null),
                        n = (0, l.default)(t, 2),
                        a = n[0],
                        i = n[1],
                        r = (0, _.default)(),
                        o = (0, u.useCallback)((function() {
                            e.countAllMedia().then((function(e) {
                                r.aborted || i(e)
                            }))
                        }), [e, r]);
                    return (0, u.useEffect)(o, [o]), (0, x.useListener)(e.getMediaMsgs(), ["add", "remove"], o), (0, x.useListener)(e.getDocMsgs(), ["add", "remove"], o), (0, x.useListener)(e.getLinkMsgs(), ["add", "remove"], o), a
                }(e.chat);
                return (0, j.jsx)("div", {
                    className: (0, c.default)(S.mediaCount),
                    children: t
                })
            }

            function k(e) {
                var t = function(e) {
                    var t = e.getMediaMsgs(),
                        n = e.getDocMsgs(),
                        i = e.getLinkMsgs(),
                        l = (0, g.default)();
                    (0, x.useListener)(t, "add remove reset query_media_before", l), (0, x.useListener)(n, "add remove reset query_doc_before", l), (0, x.useListener)(i, "add remove reset query_link_before", l);
                    var s = (0, b.default)();
                    (0, u.useEffect)((function() {
                        s((0, o.default)(r.default.mark((function o() {
                            var s;
                            return r.default.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return s = [], t.hasMediaBefore && s.push(t.queryMedia({
                                            chat: e
                                        })), n.hasDocBefore && s.push(n.queryDocs(e)), i.hasLinkBefore && s.push(i.queryLinks(e)), r.next = 6, a.all(s);
                                    case 6:
                                        l();
                                    case 7:
                                    case "end":
                                        return r.stop()
                                }
                            }), o)
                        }))))
                    }), [e, n, l, i, t, s]);
                    var c = null;
                    if (!t.hasMediaBefore && !n.hasDocBefore && !i.hasLinkBefore) {
                        var d = t.length;
                        h.GK.supportsFeature(h.GK.F.MD_BACKEND) && (d = t.filter((function(e) {
                            return (0, m.hasThumbnail)(e.mediaData)
                        })).length), c = d + n.length + i.length
                    }
                    return c
                }(e.chat);
                return (0, j.jsx)("div", {
                    className: (0, c.default)(S.mediaCount),
                    children: t
                })
            }
        },
        81522: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact,
                    n = (0, c.default)(),
                    a = (0, f.jsx)(i.default, {
                        multiline: !0,
                        newChatInfo: n,
                        children: (0, f.jsx)(u.TextSpan, {
                            theme: "title",
                            children: (0, f.jsx)(s.default, {
                                id: t.id
                            })
                        })
                    }),
                    p = (0, f.jsx)(i.default, {
                        newChatInfo: n,
                        separator: !0,
                        children: (0, f.jsx)(l.SelectableSpan, {
                            dir: "auto",
                            selectable: !0,
                            children: (0, f.jsx)(u.TextSpan, {
                                theme: "title",
                                children: (0, d.default)(t.id)
                            })
                        })
                    });
                return (0, f.jsxs)(r.ChatInfoDrawerSection, {
                    newChatInfo: n,
                    xstyle: n && h.container,
                    a8nText: "section-about-and-phone-number",
                    title: o.default.t(362),
                    children: [a, p]
                })
            };
            a(n(56720));
            var i = a(n(4345)),
                r = n(82506),
                o = a(n(45159)),
                l = n(96197),
                s = a(n(61359)),
                u = n(22552),
                c = a(n(25319)),
                d = a(n(55234)),
                f = n(85893),
                h = {
                    container: {
                        paddingBottom: "przvwfww"
                    }
                }
        },
        11218: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.contact,
                    a = i.fbt._("This is a business account.", null, {
                        hk: "2x8QUJ"
                    });

                function m() {
                    s.Cmd.openModal((0, p.jsx)(o.default, {
                        contact: n
                    }))
                }

                function v() {
                    s.Cmd.openModal((0, p.jsx)(l.default, {
                        contact: n
                    }))
                }
                t = (0, f.canSeeSMBUpsell)() ? (0, p.jsx)(u.default, {
                    a8nText: "business-title",
                    className: r.default.businessTitleWithSMBUpsell,
                    onClick: v,
                    side: (0, p.jsx)(h.default, {
                        display: "inline",
                        name: "info"
                    }),
                    children: a
                }) : (0, p.jsx)(c.default, {
                    a8nText: "business-title",
                    className: r.default.businessTitleText,
                    onClick: m,
                    children: a
                });
                return (0, p.jsx)(d.default, {
                    className: r.default.businessAccount,
                    children: t
                })
            };
            var i = n(48360),
                r = a(n(40526)),
                o = a(n(22110)),
                l = a(n(25317)),
                s = n(65901),
                u = a(n(81218)),
                c = a(n(61876)),
                d = a(n(46821)),
                f = n(2629),
                h = a(n(7665)),
                p = n(85893)
        },
        86989: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a, T = e.contact,
                    M = e.onProductCatalog,
                    w = (0, u.useContext)(v.DrawerContext),
                    I = (0, b.getProductCatalogSessionId)(w),
                    P = (0, y.default)((0, j.unproxy)(e.contact)),
                    A = (0, S.default)();

                function N() {
                    return (N = (0, r.default)(i.default.mark((function e() {
                        var t;
                        return i.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, g.findChat)(T.id);
                                case 2:
                                    return t = e.sent, e.next = 5, m.Cmd.openChatFromUnread(t);
                                case 5:
                                    if (e.sent) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 8:
                                    m.Cmd.closeDrawerRight(), (0, C.btmThreadsLoggingEnabled)() && m.Cmd.addChatMsgSentLogAttributes(t, {
                                        handleMultiple: function() {
                                            (0, l.handleActivitiesForChatThreadLogging)([{
                                                activityType: "profileReplies",
                                                ts: (0, o.unixTime)(),
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
                var D, O, R, L = p.ChatCollection.getActive();
                if (!(null == L ? void 0 : L.id.equals(T.id))) {
                    var G;
                    (0, d.logMessageClick)(I, null === (G = T.businessProfile) || void 0 === G ? void 0 : G.isProfileLinked), a = (0, k.jsx)(c.default, {
                        icon: "chat-msg",
                        label: s.fbt._("Message", null, {
                            hk: "mZ5DE"
                        }),
                        onClick: function() {
                            ! function() {
                                N.apply(this, arguments)
                            }()
                        },
                        a8nText: "business-action chat",
                        theme: A ? "new-chat-info" : void 0
                    })
                }
                P.isVoiceCallEnabled && (D = (0, k.jsx)(c.default, {
                    icon: "voice-call-filled",
                    label: s.fbt._("Voice call", null, {
                        hk: "393mz4"
                    }),
                    disabled: !P.canStartVoiceCall,
                    onClick: function() {
                        var e;
                        (0, d.logVoiceCallClick)(I, null === (e = T.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked), P.startVoiceCall()
                    },
                    a8nText: "business-action voice-call",
                    theme: A ? "new-chat-info" : void 0
                }));
                (null === (t = T.businessProfile) || void 0 === t || null === (n = t.profileOptions) || void 0 === n ? void 0 : n.commerceExperience) === f.COMMERCE_EXPERIENCE_TYPES.CATALOG && (O = (0, k.jsx)(c.default, {
                    icon: "catalog-filled",
                    label: s.fbt._("Catalog", null, {
                        hk: "3QDkTE"
                    }),
                    onClick: function() {
                        var e;
                        (0, d.logCatalogClick)(I, null === (e = T.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked), M((0, b.getProductCatalogContext)(w), "ContactInfo")
                    },
                    a8nText: "business-action catalog",
                    theme: A ? "new-chat-info" : void 0
                }));
                if ((0, h.hasShop)(T.businessProfile)) {
                    (0, C.bannedShopsEnabled)() && (0, h.isShopBanned)(T.businessProfile) || (R = (0, k.jsx)(c.default, {
                        icon: "shop-filled",
                        label: s.fbt._("Shop", null, {
                            hk: "3KsdlE"
                        }),
                        onClick: function() {
                            var e;
                            (0, d.logShopsClick)(I, null === (e = T.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked), (0, h.goToShop)(T.businessProfile)
                        },
                        a8nText: "business-action shop",
                        theme: A ? "new-chat-info" : void 0
                    }))
                }
                var B = (0, k.jsx)(c.default, {
                    icon: "forward-filled",
                    label: s.fbt._("Share", null, {
                        hk: "4F3c6E"
                    }).toString(),
                    onClick: function() {
                        var e;
                        (0, d.logForwardClick)(I, null === (e = T.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked), m.Cmd.openModal((0, k.jsx)(_.SendContactFlowLoadable, {
                            contacts: [(0, j.unproxy)(T)],
                            onContactsSent: function(e) {
                                m.Cmd.openChatFromUnread(e).then((function() {}))
                            }
                        }))
                    },
                    a8nText: "business-action forward",
                    theme: A ? "new-chat-info" : void 0
                });
                return (0, k.jsxs)(x.FlexRow, {
                    xstyle: E.actionsRow,
                    justify: "evenly",
                    children: [a, D, O, R, B]
                })
            };
            var i = a(n(87757)),
                r = a(n(48926)),
                o = n(79746),
                l = n(43828),
                s = n(48360),
                u = n(67294),
                c = (a(n(56720)), a(n(98056))),
                d = n(42661),
                f = n(96127),
                h = n(79614),
                p = n(4481),
                m = n(65901),
                v = n(96706),
                g = n(68985),
                x = n(27968),
                C = n(2629),
                b = n(52867),
                _ = n(46324),
                j = n(68220),
                S = a(n(25319)),
                y = a(n(53906)),
                k = n(85893),
                E = {
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
        87338: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.businessHours,
                    n = e.isProfileLinked,
                    a = (0, p.getProductCatalogSessionId)((0, s.useContext)(f.DrawerContext)),
                    i = (0, d.getBusinessOpenState)(t),
                    o = (0, s.useState)(!0),
                    u = (0, r.default)(o, 2),
                    h = u[0],
                    v = u[1];
                if (null == t) return null;
                var _ = (0, m.getBusinessHours)(t).map((function(e) {
                    var t = e.day,
                        n = e.hours,
                        a = e.first,
                        r = t,
                        o = n,
                        s = !1;
                    if (a) switch (i.status) {
                        case d.BUSINESS_OPEN_STATUS.OPEN_24H:
                            r = l.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), o = l.fbt._("Open 24 hours", null, {
                                hk: "1AlfF5"
                            }), s = !0;
                            break;
                        case d.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                            r = l.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), o = l.fbt._("Open by appointment only", null, {
                                hk: "1nxH9v"
                            }), s = !0;
                            break;
                        case d.BUSINESS_OPEN_STATUS.OPEN:
                            r = l.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), s = !0;
                            break;
                        case d.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                            o = l.fbt._("Closed", null, {
                                hk: "3IRgct"
                            })
                    }
                    return !a && h ? null : (0, x.jsx)(b, {
                        day: r,
                        dayIsOpen: s,
                        hours: o,
                        first: a,
                        collapsed: h
                    }, t)
                }));
                return (0, x.jsx)(g.default, {
                    xstyle: C.businessHours,
                    onClick: function() {
                        (0, c.logHoursClick)(a, n), v(!h)
                    },
                    a8nText: "business-hours-expand",
                    children: _
                })
            };
            var i = a(n(59713)),
                r = a(n(63038)),
                o = a(n(94184)),
                l = n(48360),
                s = n(67294),
                u = (a(n(56720)), a(n(85522))),
                c = n(42661),
                d = n(79614),
                f = n(96706),
                h = n(73008),
                p = n(52867),
                m = n(62890),
                v = a(n(7665)),
                g = a(n(76080)),
                x = n(85893),
                C = {
                    businessHours: {
                        display: "f804f6gw",
                        width: "ln8gz9je",
                        textAlign: "ml4r5409"
                    }
                };

            function b(e) {
                if (e.first) {
                    var t = (0, x.jsx)("div", {
                        className: u.default.businessHoursChevron,
                        role: "button",
                        children: (0, x.jsx)(v.default, {
                            className: e.collapsed ? "" : u.default.flipSvg,
                            display: "inline",
                            name: "chevron-down-alt"
                        })
                    });
                    return (0, x.jsxs)("div", {
                        className: (0, o.default)(u.default.businessHoursRow, (0, i.default)({}, u.default.firstRow, e.first)),
                        children: [(0, x.jsx)("div", {
                            className: (0, o.default)(u.default.businessHoursDay, (0, i.default)({}, u.default.dayIsOpen, e.dayIsOpen)),
                            children: (0, x.jsx)(h.EmojiText, {
                                direction: "auto",
                                text: e.day
                            })
                        }), (0, x.jsx)("div", {
                            className: u.default.businessHoursHours,
                            children: (0, x.jsx)(h.EmojiText, {
                                direction: "auto",
                                text: e.hours
                            })
                        }), t]
                    })
                }
                return (0, x.jsxs)("div", {
                    className: u.default.businessHoursRow,
                    children: [(0, x.jsx)("div", {
                        className: u.default.businessHoursDay,
                        children: (0, x.jsx)(h.EmojiText, {
                            direction: "auto",
                            text: e.day
                        })
                    }), (0, x.jsx)("div", {
                        className: u.default.businessHoursHours,
                        children: (0, x.jsx)(h.EmojiText, {
                            direction: "auto",
                            text: e.hours
                        })
                    })]
                })
            }
        },
        95563: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a, j, S, y, k = e.businessProfile,
                    E = (0, x.useModelValues)(k, ["description", "address", "latitude", "longitude", "website", "email", "businessHours", "isProfileLinked"]),
                    T = E.description,
                    M = E.address,
                    w = E.latitude,
                    I = E.longitude,
                    P = E.website,
                    A = E.email,
                    N = E.businessHours,
                    D = E.isProfileLinked,
                    O = (0, o.useContext)(d.DrawerContext),
                    R = (0, v.getProductCatalogSessionId)(O),
                    L = (0, C.default)();
                null != T && (t = (0, b.jsx)("div", {
                    className: s.default.section,
                    children: (0, b.jsx)(h.default, {
                        text: T,
                        textLimit: i.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                        children: function(e) {
                            var t = e.textLimit;
                            return (0, b.jsx)(f.EmojiText, {
                                className: s.default.description,
                                selectable: !0,
                                direction: "auto",
                                text: T,
                                textLimit: t
                            })
                        }
                    })
                }));
                null != N && (n = (0, b.jsx)("div", {
                    className: s.default.section,
                    children: (0, b.jsx)(l.default, {
                        businessHours: N,
                        isProfileLinked: D
                    })
                }));
                null != M && (a = (0, b.jsx)("div", {
                    className: s.default.section,
                    children: (0, b.jsx)(f.EmojiText, {
                        selectable: !0,
                        direction: "auto",
                        text: M
                    })
                }));
                null != w && null != I && (j = (0, b.jsx)("div", {
                    style: {
                        height: 132
                    },
                    className: (0, r.default)(s.default.section, s.default.map),
                    children: (0, b.jsx)(m.default, {
                        lat: w,
                        lng: I,
                        name: M || "",
                        width: 590,
                        height: 132,
                        onClick: function() {
                            return (0, u.logLocationClick)(R, D)
                        },
                        a8nText: "business-info-map"
                    })
                }));
                null != A && (S = (0, b.jsx)("div", {
                    className: s.default.section,
                    children: (0, b.jsx)(p.ExternalLink, {
                        href: `mailto:${A}`,
                        onClick: function() {
                            return (0, u.logEmailClick)(R)
                        },
                        a8nText: "business-info-email",
                        children: A
                    })
                }));
                null != P && P.length > 0 && (y = (0, b.jsx)("div", {
                    className: s.default.section,
                    children: P.map((function(e) {
                        return (0, b.jsx)("div", {
                            children: (0, b.jsx)(p.ExternalLink, {
                                href: g.URL.toMaliciousSiteRedirect(e),
                                onClick: function() {
                                    return (0, u.logWebsiteClick)(R)
                                },
                                a8nText: "business-info-website",
                                children: e
                            })
                        }, e)
                    }))
                }));
                return null == t && null == n && null == a && null == j && null == S && null == y ? null : (0, b.jsxs)(c.ChatInfoDrawerSection, {
                    newChatInfo: L,
                    xstyle: L && _.container,
                    theme: L ? void 0 : "padding",
                    children: [t, n, a, j, S, y]
                })
            };
            var i = a(n(3208)),
                r = a(n(94184)),
                o = n(67294),
                l = (a(n(56720)), a(n(87338))),
                s = a(n(44899)),
                u = n(42661),
                c = n(82506),
                d = n(96706),
                f = n(73008),
                h = a(n(86889)),
                p = n(49012),
                m = a(n(83719)),
                v = n(52867),
                g = n(29034),
                x = n(69283),
                C = a(n(25319)),
                b = n(85893),
                _ = {
                    container: {
                        paddingTop: "i4pc7asj",
                        paddingBottom: "q1nnjopg"
                    }
                }
        },
        10403: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = e.contact;
                if (a.isMyContact)
                    if (a.name !== a.verifiedName) {
                        var u;
                        a.showBusinessCheckmarkAsSecondary && (u = (0, s.jsx)("div", {
                            className: i.default.icon,
                            children: (0, s.jsx)(l.default, {
                                name: "psa-verified"
                            })
                        })), t = (0, s.jsx)(o.Name, {
                            contact: a,
                            breakWord: !0
                        }), n = (0, s.jsxs)("div", {
                            className: i.default.wrapper,
                            children: [(0, s.jsx)(r.EmojiText, {
                                text: `~${a.verifiedName}`,
                                className: i.default.verifiedText,
                                direction: "auto",
                                ellipsify: !0,
                                titlify: !0
                            }), u]
                        })
                    } else t = (0, s.jsx)(o.Name, {
                        contact: a,
                        showBusinessCheckmark: a.showBusinessCheckmarkAsPrimary,
                        breakWord: !0
                    });
                else t = (0, s.jsx)(r.EmojiText, {
                    text: a.verifiedName,
                    direction: "auto",
                    ellipsify: !0,
                    titlify: !0,
                    breakWord: !0
                }), n = (0, s.jsx)(o.Name, {
                    contact: a,
                    showBusinessCheckmark: a.showBusinessCheckmarkAsPrimary
                });
                return (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("div", {
                        className: i.default.title,
                        children: t
                    }), (0, s.jsx)("div", {
                        className: i.default.subtitle,
                        children: n
                    })]
                })
            };
            var i = a(n(78344)),
                r = n(73008),
                o = n(1191),
                l = a(n(7665)),
                s = n(85893)
        },
        88621: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BusinessOpenHours = function(e) {
                var t = e.hours,
                    n = d((0, l.getBusinessOpenState)(t));
                if (null == n) return null;
                var a = i.default.sanitize(n);
                return (0, u.jsx)("div", {
                    className: o.default.openStatus,
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                })
            }, t.getBusinessOpenStr = d;
            var i = a(n(27856)),
                r = n(48360),
                o = a(n(45625)),
                l = n(79614),
                s = a(n(45159)),
                u = n(85893);

            function c(e) {
                return null == e ? "" : e.toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit"
                })
            }

            function d(e) {
                switch (e.status) {
                    case l.BUSINESS_OPEN_STATUS.OPEN_24H:
                        return s.default.t(239, {
                            open: `<span class="${o.default.open}">${r.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`
                        });
                    case l.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                        return s.default.t(241, {
                            open: `<span class="${o.default.open}">${r.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`
                        });
                    case l.BUSINESS_OPEN_STATUS.OPEN:
                        if (e.openUntil && e.additionalOpen && e.additionalClose) return s.default.t(243, {
                            open: `<span class="${o.default.open}">${r.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`,
                            time: c(e.openUntil),
                            additionalOpenTime: c(e.additionalOpen),
                            additionalCloseTime: c(e.additionalClose)
                        });
                        if (e.openUntil) return s.default.t(242, {
                            open: `<span class="${o.default.open}">${r.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`,
                            time: c(e.openUntil)
                        });
                        break;
                    case l.BUSINESS_OPEN_STATUS.CLOSED:
                        return e.opensAt ? s.default.t(236, {
                            closed: `<span class="${o.default.closed}">${r.fbt._("Closed now",null,{hk:"2oDK4r"}).toString()}</span>`,
                            time: c(e.opensAt)
                        }) : `<span class="${o.default.closed}">${r.fbt._("Closed now",null,{hk:"2oDK4r"}).toString()}</span>`;
                    case l.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                        return `<span class="${o.default.closed}">${r.fbt._("Closed today",null,{hk:"3uCCvH"}).toString()}</span>`
                }
                return null
            }
        },
        98481: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BusinessProfile = function(e) {
                var t, n = (0, I.useModelValues)(e.contact, ["id", "verifiedLevel", "name", "verifiedName"]),
                    a = (0, I.useModelValues)(e.businessProfile, ["description", "categories", "website", "email", "stale", "latitude", "longitude", "businessHours", "structuredAddress"]),
                    o = (0, s.useState)(!0),
                    D = (0, i.default)(o, 2),
                    O = D[0],
                    R = D[1];
                (0, s.useEffect)((function() {
                    new E.default.ViewBusinessProfile({
                        viewBusinessProfileAction: E.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION
                    }).commit()
                }), []);
                var L, G, B, F, V, U, H, q = function() {
                        R(!O)
                    },
                    K = function() {
                        h.Cmd.openModal((0, P.jsx)(u.default, {
                            contact: n
                        }))
                    },
                    W = function() {
                        h.Cmd.openModal((0, P.jsx)(c.default, {
                            contact: n
                        }))
                    };
                (0, _.canSeeSMBUpsell)() ? (Y = n.verifiedLevel === f.VERIFIED_LEVEL.HIGH ? l.fbt._("Official business account", null, {
                    hk: "1KruJ"
                }) : l.fbt._("Business account", null, {
                    hk: "2lzdAg"
                }), t = (0, P.jsx)(p.default, {
                    a8nText: "business-title",
                    onClick: W,
                    side: (0, P.jsx)(w.default, {
                        className: d.default.infoIcon,
                        display: "inline",
                        name: "info"
                    }),
                    children: Y
                })) : t = b.GK.supportsFeature(b.GK.F.VNAME_V_2) ? function() {
                    var e;
                    switch (n.verifiedLevel) {
                        case f.VERIFIED_LEVEL.HIGH:
                            e = l.fbt._("Official business account", null, {
                                hk: "1KruJ"
                            });
                            break;
                        case f.VERIFIED_LEVEL.LOW:
                        case f.VERIFIED_LEVEL.UNKNOWN:
                            e = l.fbt._("Business account", null, {
                                hk: "2lzdAg"
                            })
                    }
                    return (0, P.jsx)(m.default, {
                        a8nText: "business-title",
                        className: d.default.businessTitleText,
                        onClick: K,
                        children: e
                    })
                }() : function() {
                    var e, t = n,
                        a = !t.name || t.name === t.verifiedName,
                        i = "psa-unverified";
                    switch (t.verifiedLevel) {
                        case f.VERIFIED_LEVEL.HIGH:
                            i = "psa-verified", a ? e = (0, P.jsx)(g.EmojiText, {
                                className: d.default.verifiedLabel,
                                text: l.fbt._("Verified business", null, {
                                    hk: "34Usft"
                                })
                            }) : (e = (0, P.jsx)(g.EmojiText, {
                                className: d.default.verifiedLabel,
                                text: l.fbt._("Verified", null, {
                                    hk: "3UYGlB"
                                })
                            }), e = (0, P.jsx)(S.default, {
                                id: 252,
                                params: {
                                    verified: e,
                                    businessName: t.verifiedName
                                }
                            }));
                            break;
                        case f.VERIFIED_LEVEL.LOW:
                            e = a ? (0, P.jsx)(g.EmojiText, {
                                text: l.fbt._("Confirmed business", null, {
                                    hk: "3Xidu0"
                                })
                            }) : j.default.t(247, {
                                businessName: t.verifiedName
                            });
                            break;
                        case f.VERIFIED_LEVEL.UNKNOWN:
                            e = l.fbt._("Business account", null, {
                                hk: "2lzdAg"
                            })
                    }
                    return (0, P.jsx)(N, {
                        icon: i,
                        className: d.default.businessMarker,
                        onClick: K,
                        children: e
                    })
                }();
                var Y;
                var z, X = a;
                if (X.stale) L = (0, P.jsx)("div", {
                    className: d.default.contactBusinessInfoSpinner,
                    children: (0, P.jsx)(M.Spinner, {
                        size: 20,
                        stroke: 5
                    })
                });
                else {
                    var Z;
                    if (G = (null === (Z = X.categories) || void 0 === Z ? void 0 : Z.length) ? (0, P.jsx)(N, {
                            icon: "business-category",
                            children: (0, P.jsx)(g.EmojiText, {
                                selectable: !0,
                                direction: "auto",
                                text: X.categories.map((function(e) {
                                    return e.localized_display_name
                                })).join(j.default.t(407))
                            })
                        }) : null, B = X.description ? (0, P.jsx)(N, {
                            icon: "business-description",
                            children: (0, P.jsx)(x.default, {
                                text: X.description,
                                textLimit: r.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                                children: function(e) {
                                    var t = e.textLimit;
                                    return (0, P.jsx)(g.EmojiText, {
                                        selectable: !0,
                                        direction: "auto",
                                        breakWord: !0,
                                        text: X.description,
                                        textLimit: t
                                    })
                                }
                            })
                        }) : null, Q = n.name, ee = X.latitude, te = X.longitude, ne = X.structuredAddress, oe = ne ? function(e) {
                            var t = e.streetAddress,
                                n = e.localizedCityName,
                                a = e.zipCode;
                            return t && n && a ? j.default.t(246, {
                                streetAddress: t,
                                city: n,
                                zipCode: a
                            }) : t && n ? j.default.t(245, {
                                streetAddress: t,
                                city: n
                            }) : t
                        }(ne) : null, null != ee && null != te && (ae = (0, P.jsx)("div", {
                            style: {
                                height: 150
                            },
                            className: d.default.businessMap,
                            children: (0, P.jsx)(y.default, {
                                lat: ee,
                                lng: te,
                                name: oe || Q,
                                width: 565,
                                height: 150
                            })
                        })), oe && (re = null != ee && null != te ? (0, k.getMapUrl)(ee, te, oe) : (0, k.getSearchUrl)(oe), ie = (0, P.jsx)("div", {
                            className: d.default.address,
                            children: (0, P.jsx)(C.ExternalLink, {
                                href: re,
                                children: (0, P.jsx)(g.EmojiText, {
                                    selectable: !0,
                                    direction: "auto",
                                    text: oe
                                })
                            })
                        })), F = ie || ae ? (0, P.jsxs)(N, {
                            icon: "business-address",
                            children: [ie, ae]
                        }) : null, X.website && Array.isArray(X.website) && X.website.length && (V = X.website.map((function(e, t) {
                            var n = (0, T.getWebsiteLink)(e),
                                a = (0, P.jsx)(g.EmojiText, {
                                    selectable: !0,
                                    direction: "auto",
                                    text: e
                                }),
                                i = (0, P.jsx)(C.ExternalLink, {
                                    className: d.default.link,
                                    href: n,
                                    children: a
                                });
                            return (0, P.jsx)(N, {
                                icon: "business-website",
                                children: i
                            }, t)
                        }))), X.businessHours && (U = function(e) {
                            var t = (0, T.getBusinessHours)(e).map((function(e) {
                                var t = e.day,
                                    n = e.hours,
                                    a = e.first;
                                return !a && O ? null : (0, P.jsx)(A, {
                                    day: t,
                                    hours: n,
                                    first: a,
                                    collapsed: O
                                }, t)
                            }));
                            return (0, P.jsx)(N, {
                                icon: "business-hours",
                                onClick: q,
                                children: t
                            })
                        }(X.businessHours)), X.email) {
                        var $ = (0, P.jsx)(g.EmojiText, {
                                selectable: !0,
                                direction: "auto",
                                text: X.email
                            }),
                            J = (0, P.jsx)(C.ExternalLink, {
                                className: d.default.link,
                                href: `mailto:${X.email}`,
                                children: $
                            });
                        H = (0, P.jsx)(N, {
                            icon: "business-email",
                            dir: "auto",
                            children: J
                        })
                    }
                }
                var Q, ee, te, ne, ae, ie, re, oe;
                (L || null != F || G || B || null != U || H || V) && (z = (0, P.jsx)(v.default, {
                    theme: "padding",
                    children: (0, P.jsxs)("div", {
                        className: d.default.contactBusinessInfo,
                        children: [L, F, G, B, U, H, V]
                    })
                }));
                return (0, P.jsxs)(P.Fragment, {
                    children: [(0, P.jsx)(v.default, {
                        children: t
                    }), z]
                })
            };
            var i = a(n(63038)),
                r = a(n(3208)),
                o = a(n(94184)),
                l = n(48360),
                s = n(67294),
                u = a(n(22110)),
                c = a(n(25317)),
                d = a(n(49500)),
                f = n(96127),
                h = n(65901),
                p = a(n(81218)),
                m = a(n(61876)),
                v = a(n(46821)),
                g = n(73008),
                x = a(n(86889)),
                C = n(49012),
                b = n(38032),
                _ = n(2629),
                j = a(n(45159)),
                S = a(n(62848)),
                y = a(n(83719)),
                k = n(46061),
                E = a(n(50507)),
                T = n(62890),
                M = n(85651),
                w = a(n(7665)),
                I = n(69283),
                P = n(85893);
            var A = function(e) {
                    var t = e.first ? (0, P.jsx)("div", {
                        className: d.default.businessHoursChevron,
                        role: "button",
                        children: (0, P.jsx)(w.default, {
                            className: e.collapsed ? "" : d.default.flipSvg,
                            display: "inline",
                            name: "chevron-down-alt"
                        })
                    }) : null;
                    return (0, P.jsxs)("div", {
                        className: d.default.businessHoursRow,
                        children: [(0, P.jsx)("div", {
                            className: d.default.businessHoursDay,
                            children: (0, P.jsx)(g.EmojiText, {
                                direction: "auto",
                                text: e.day
                            })
                        }), (0, P.jsx)("div", {
                            className: d.default.businessHoursHours,
                            children: (0, P.jsx)(g.EmojiText, {
                                direction: "auto",
                                text: e.hours
                            })
                        }), t]
                    })
                },
                N = function(e) {
                    return (0, P.jsxs)("div", {
                        className: (0, o.default)(d.default.dataRow, e.className),
                        onClick: e.onClick,
                        children: [(0, P.jsx)("div", {
                            className: d.default.dataRowIcon,
                            children: (0, P.jsx)(w.default, {
                                name: e.icon
                            })
                        }), (0, P.jsx)("div", {
                            className: d.default.dataRowText,
                            children: e.children
                        })]
                    })
                }
        },
        34736: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.contact,
                    a = e.businessProfile,
                    h = e.onOpenStatus,
                    p = e.onProductCatalog,
                    m = e.onProfilePicLoad,
                    v = e.onProfilePicClick,
                    g = (0, d.useModelValues)(a, ["businessHours", "categories"]),
                    x = g.businessHours,
                    C = g.categories,
                    b = (0, f.jsx)(r.default, {
                        contact: n
                    });
                null != C && C.length > 0 && (t = (0, f.jsx)("div", {
                    className: l.default.categories,
                    children: C.map((function(e) {
                        return e.localized_display_name
                    })).join(c.default.t(406))
                }));
                var _ = x ? (0, f.jsx)(o.BusinessOpenHours, {
                    hours: x
                }) : null;
                return (0, f.jsxs)(u.default, {
                    className: l.default.noPaddingBottom,
                    theme: "padding",
                    children: [(0, f.jsx)(s.default, {
                        contact: n,
                        onClick: v,
                        onOpenStatus: h,
                        onLoad: m
                    }), (0, f.jsxs)("div", {
                        className: l.default.info,
                        children: [b, t, _, (0, f.jsx)(i.default, {
                            contact: n,
                            onProductCatalog: p
                        })]
                    })]
                })
            };
            var i = a(n(86989)),
                r = a(n(10403)),
                o = n(88621),
                l = a(n(19518)),
                s = a(n(42973)),
                u = a(n(46821)),
                c = a(n(45159)),
                d = n(69283),
                f = n(85893)
        },
        68029: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact;
                return (0, s.jsx)(r.ChatInfoDrawerSection, {
                    newChatInfo: !0,
                    a8nText: "section-about",
                    title: i.fbt._("About", null, {
                        hk: "4qoAfH"
                    }),
                    children: (0, s.jsx)(l.TextSpan, {
                        theme: "title",
                        size: "16",
                        children: (0, s.jsx)(o.default, {
                            id: t.id
                        })
                    })
                })
            };
            var i = n(48360),
                r = n(82506),
                o = a(n(61359)),
                l = n(22552),
                s = n(85893)
        },
        47549: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, b.default)();
                return (0, _.jsx)(S, (0, i.default)((0, i.default)({}, e), {}, {
                    newChatInfo: t
                }))
            };
            var i = a(n(81109)),
                r = a(n(34575)),
                o = a(n(93913)),
                l = a(n(2205)),
                s = a(n(99842)),
                u = n(67294),
                c = n(97397),
                d = n(82506),
                f = n(65901),
                h = a(n(98303)),
                p = n(84495),
                m = n(73568),
                v = a(n(45159)),
                g = n(63641),
                x = a(n(61897)),
                C = n(22552),
                b = a(n(25319)),
                _ = n(85893),
                j = function(e) {
                    (0, l.default)(n, e);
                    var t = (0, s.default)(n);

                    function n() {
                        var e;
                        (0, r.default)(this, n);
                        for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i)))._commonGroupInitialized = !1, e.state = {
                            collapsed: !1,
                            numGroups: 0
                        }, e.rerender = function() {
                            e.forceUpdate()
                        }, e.handleClick = function(t, n) {
                            f.Cmd.openChatFromUnread(n).then((function(e) {
                                e && f.Cmd.focusChatTextInput(n)
                            })), e.props.onClose()
                        }, e.handleShowMore = function() {
                            e.setState({
                                collapsed: !1
                            })
                        }, e.renderItem = function(t) {
                            var n = t.chat,
                                a = t.showNewChatInfo;
                            return (0, _.jsx)(c.Chat, {
                                chat: n,
                                theme: a ? "new-chat-info" : "drawer-list",
                                contact: n.contact,
                                mode: c.Mode.INFO,
                                onClick: e.handleClick
                            }, n.id.toString())
                        }, e
                    }
                    return (0, o.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.contact.commonGroups;
                            e && (this.props.listeners.add(e, "add remove", this.rerender), this._commonGroupInitialized = !0), (0, p.findCommonGroups)(this.props.contact).catch((function(e) {
                                throw __LOG__(4, !0, new Error, !0)`get from participants table failed`, SEND_LOGS("get from participants table failed when finding common groups: " + e), new Error("get from participants table failed")
                            }))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            if (e.contact !== this.props.contact) {
                                var t = e.contact.commonGroups;
                                t && e.listeners.remove(t, "add remove", this.rerender), this._commonGroupInitialized = !1
                            }
                            var n = this.props.contact.commonGroups;
                            n && (this._commonGroupInitialized || (this.props.listeners.add(n, "add remove", this.rerender), this._commonGroupInitialized = !0))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.props.contact.commonGroups;
                            e && this._commonGroupInitialized && (this.props.listeners.remove(e, "add remove", this.rerender), this._commonGroupInitialized = !1)
                        }
                    }, {
                        key: "getData",
                        value: function() {
                            var e = this,
                                t = this.props.contact.commonGroups;
                            return t.length > d.INFO_DRAWER_MAX_ROWS && this.state.collapsed && (t = t.slice(0, d.INFO_DRAWER_MAX_ROWS)), t.map((function(t) {
                                return {
                                    itemKey: t.id.toString(),
                                    chat: t,
                                    showNewChatInfo: e.props.newChatInfo,
                                    height: 68
                                }
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props.contact.commonGroups,
                                n = this.props.newChatInfo;
                            if (!(null == t ? void 0 : t.length)) return null;
                            if (t.length > d.INFO_DRAWER_MAX_ROWS && this.state.collapsed) {
                                var a = t.length - d.INFO_DRAWER_MAX_ROWS;
                                e = (0, _.jsx)(h.default, {
                                    numMore: a,
                                    onClick: this.handleShowMore,
                                    newChatInfo: this.props.newChatInfo
                                })
                            }
                            var i = n ? v.default.t(361, {
                                    number: v.default.n(t.length),
                                    _plural: t.length
                                }) : v.default.t(934),
                                r = n ? null : (0, _.jsx)(C.TextSpan, {
                                    theme: "section-title",
                                    children: v.default.n(t.length)
                                });
                            return (0, _.jsxs)(d.ChatInfoDrawerListSection, {
                                newChatInfo: n,
                                a8nText: "section-common-groups",
                                title: i,
                                subtitle: r,
                                children: [(0, _.jsx)(m.FlatList, {
                                    flatListController: this.props.flatListController,
                                    direction: "vertical",
                                    forceConsistentRenderCount: !1,
                                    data: this.getData(),
                                    renderItem: this.renderItem
                                }), e]
                            })
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            var n = e.contact.commonGroups,
                                a = n ? n.length : 0;
                            return t.numGroups <= d.INFO_DRAWER_MAX_ROWS && a > d.INFO_DRAWER_MAX_ROWS ? {
                                numGroups: a,
                                collapsed: !0
                            } : {
                                numGroups: a
                            }
                        }
                    }]), n
                }(u.Component);
            j.CONCERNS = {
                contact: ["commonGroups", "isBusiness"]
            }, j.displayName = "ContactInfoCommonGroupsBase";
            var S = (0, g.ListenerHOC)((0, x.default)(j, j.CONCERNS))
        },
        28201: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(81109)),
                r = a(n(63038)),
                o = n(15586),
                l = n(79746),
                s = n(43828),
                u = n(48360),
                c = n(67294),
                d = a(n(56720)),
                f = a(n(81522)),
                h = a(n(11218)),
                p = a(n(95563)),
                m = n(42661),
                v = n(98481),
                g = n(79614),
                x = a(n(34736)),
                C = n(72743),
                b = a(n(69286)),
                _ = n(4481),
                j = n(82506),
                S = a(n(83399)),
                y = n(65901),
                k = a(n(24900)),
                E = a(n(68029)),
                T = a(n(47549)),
                M = a(n(9969)),
                w = a(n(95582)),
                I = a(n(16016)),
                P = a(n(5702)),
                A = n(73092),
                N = n(75544),
                D = a(n(53187)),
                O = a(n(81218)),
                R = a(n(18345)),
                L = a(n(61876)),
                G = n(96706),
                B = n(19288),
                F = a(n(46821)),
                V = n(90675),
                U = a(n(92546)),
                H = n(1577),
                q = n(38032),
                K = n(2629),
                W = a(n(16516)),
                Y = a(n(45159)),
                z = a(n(73728)),
                X = a(n(592)),
                Z = n(96497),
                $ = n(56003),
                J = n(21283),
                Q = a(n(50507)),
                ee = a(n(59603)),
                te = a(n(40071)),
                ne = n(52867),
                ae = n(9835),
                ie = n(3298),
                re = a(n(43463)),
                oe = a(n(60401)),
                le = n(68220),
                se = a(n(7665)),
                ue = n(22552),
                ce = n(92428),
                de = a(n(39394)),
                fe = n(69283),
                he = a(n(25319)),
                pe = n(68034),
                me = a(n(74740)),
                ve = a(n(93958)),
                ge = n(59175),
                xe = n(85893),
                Ce = {
                    body: {
                        flexGrow: "tvf2evcx",
                        flexShrink: "oq44ahr5",
                        flexBasis: "lb5m6g5c",
                        paddingBottom: "s9fl9ege"
                    },
                    chevron: {
                        color: "cs9t9or5"
                    }
                };

            function be(e, t) {
                var n = e.onVerification,
                    a = e.onClose,
                    be = e.onProductDetail,
                    _e = e.onProductCatalog,
                    je = e.canLogQpl,
                    Se = void 0 === je || je,
                    ye = (0, ve.default)(),
                    ke = (0, c.useContext)(G.DrawerContext),
                    Ee = (0, he.default)(),
                    Te = (0, pe.useNewChatInfoColors)(),
                    Me = Ee ? Te : null,
                    we = (0, fe.useModelValues)(e.contact, ["id", "formattedName", "formattedUser", "formattedShortName", "isBusiness", "isEnterprise", "isMyContact", "commonGroups", "businessProfile", "showBusinessCheckmarkAsPrimary", "showBusinessCheckmarkAsSecondary", "verifiedName", "verifiedLevel", "name", "notifyName", "labels", "businessCatalog", "isMe", "statusMute", "displayName"]),
                    Ie = (0, de.default)((function() {
                        return new U.default
                    })),
                    Pe = (0, c.useRef)(!1),
                    Ae = (0, c.useState)(100),
                    Ne = (0, r.default)(Ae, 2),
                    De = Ne[0],
                    Oe = Ne[1],
                    Re = (0, c.useMemo)((function() {
                        return _.ChatCollection.get(we.id)
                    }), [we.id]);
                (0, c.useEffect)((function() {
                    var t;
                    (we.businessProfile && !we.businessProfile.stale && we.businessCatalog && C.CatalogCollection.findCarouselCatalog(we.id).catch((0, o.filteredCatch)(ge.ServerStatusCodeError, (function() {
                        __LOG__(3)`Failed to fetch product catalog in contact drawer from server`
                    }))), q.GK.supportsFeature(q.GK.F.MD_BACKEND) && (0, N.getFanOutListJob)([we.id, (0, H.assertGetMe)()]).then((function(e) {
                        (0, J.ensureE2ESessions)(e)
                    })), (0, ne.getProductCatalogContext)(ke).session.isAccidental()) ? y.Cmd.setDrawerContext("right", (0, ne.buildProductCatalogContext)(new ae.ProductCatalogSession, (0, A.getMaybeBizPlatformForLogging)(we.id.toString()), Q.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE)): we.isBusiness && (0, K.canSeeBizProfileV3)() && (we.id === (0, H.getMaybeMeUser)() || (0, m.logProfileImpression)((0, ne.getProductCatalogSessionId)(ke), e.profileEntryPoint, null === (t = we.businessProfile) || void 0 === t ? void 0 : t.isProfileLinked));
                    Se && we.businessProfile && (0, Z.qplEndProfileView)(ie.QuickLogActionType.SUCCESS)
                }), []), (0, c.useEffect)((function() {
                    if ((0, K.btmThreadsLoggingEnabled)()) {
                        var e, t = null === (e = (0, H.getMaybeMeUser)()) || void 0 === e ? void 0 : e.equals(we.id);
                        (0, ne.getProductCatalogContext)(ke).session.isAccidental() || t || !(null == Re ? void 0 : Re.id) || (0, s.handleActivitiesForChatThreadLogging)([{
                            activityType: "profileViews",
                            ts: (0, l.unixTime)(),
                            chatId: Re.id
                        }])
                    }
                }), []), (0, me.default)((function() {
                    var e;
                    (0, ne.getProductCatalogContext)(ke).session.isAccidental() || we.isBusiness && (0, K.canSeeBizProfileV3)() && (0, m.logProfileExit)((0, ne.getProductCatalogSessionId)(ke), De, null === (e = we.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked)
                }));
                var Le = function() {
                        var e = _.ChatCollection.assertGet(we.id);
                        y.Cmd.deleteOrExitChat(e)
                    },
                    Ge = function() {
                        a ? a() : null == ye || ye.uie.requestDismiss()
                    },
                    Be = function(e) {
                        if (Pe.current) {
                            var t = e.target;
                            y.Cmd.openModalMedia((0, xe.jsx)(te.default, {
                                contact: we,
                                profilePicThumb: we.getProfilePicThumb(),
                                animateBorderRadius: !0,
                                getZoomNode: function(e) {
                                    e(t)
                                }
                            }), {
                                transition: "profile-viewer",
                                uim: ye
                            })
                        } else y.Cmd.openToast((0, xe.jsx)(ce.Toast, {
                            id: (0, ce.genId)(),
                            msg: u.fbt._("No profile photo", null, {
                                hk: "2bdeTO"
                            })
                        }))
                    },
                    Fe = function() {
                        var e;
                        (0, m.logStatusClick)((0, ne.getProductCatalogSessionId)(ke), null === (e = we.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked)
                    },
                    Ve = function() {
                        Pe.current = !0
                    },
                    Ue = function() {
                        if (!(we && we.isBusiness && we.businessProfile && we.businessCatalog)) return null;
                        var e = C.CatalogCollection.get(we.id);
                        if (!e) return null;
                        var t = "",
                            n = !1;
                        return (0, K.canSeeBizProfileV3)() && (t = u.fbt._("See all", null, {
                            hk: "3dTwyT"
                        }), n = !0), (0, ne.getProductCatalogContext)(ke).session.isAccidental() ? null : (0, g.hasShop)(we.businessProfile) ? (0, K.bannedShopsEnabled)() && (0, g.isShopBanned)(we.businessProfile) ? null : (0, xe.jsx)(oe.default, {
                            businessProfile: we.businessProfile,
                            catalog: e,
                            subtitle: t,
                            hideIncompleteRows: n
                        }) : (0, xe.jsx)(b.default, {
                            onProductDetail: function(e) {
                                ! function(e) {
                                    (0, $.qplStartProductView)("ContactInfo"), be(e)
                                }(e)
                            },
                            onProductCatalog: _e,
                            catalog: e,
                            subtitle: t,
                            hideIncompleteRows: n,
                            shouldLog: !0
                        })
                    },
                    He = (0, xe.jsx)(T.default, {
                        contact: we,
                        onClose: Ge,
                        flatListController: Ie.current
                    }),
                    qe = null;
                e.onMediaGallery && Re && (qe = (0, xe.jsx)(S.default, {
                    chat: Re,
                    onMediaGallery: e.onMediaGallery
                }));
                var Ke = null;
                q.GK.supportsFeature(q.GK.F.LIVE_LOCATIONS) && Re && (Ke = (0, xe.jsx)(X.default, {
                    chat: Re,
                    onClick: e.onLiveLocation
                }));
                var We = null,
                    Ye = null;
                (0, K.canSeeBizProfileV3)() ? Ye = Ue(): We = Ue();
                var ze, Xe = Re && Re.mute.canMute() ? (0, xe.jsx)(ee.default, {
                        chat: Re,
                        mute: Re.mute,
                        settings: re.default,
                        theme: Ee ? "new-chat-info" : null
                    }) : null,
                    Ze = null;
                if (e.onStarred && !Ee) {
                    var $e = (0, xe.jsx)(se.default, {
                        xstyle: Ce.chevron,
                        name: "chevron-right-alt",
                        directional: !0
                    });
                    Ze = (0, xe.jsx)(O.default, {
                        a8nText: "block-starred-messages",
                        side: $e,
                        onClick: e.onStarred,
                        children: (0, xe.jsx)(ue.TextSpan, {
                            theme: "title",
                            children: u.fbt._("Starred messages", null, {
                                hk: "4wVbNG"
                            })
                        })
                    })
                }
                e.onStarred && Ee && (ze = (0, xe.jsx)(I.default, {
                    chat: Re,
                    onStarred: e.onStarred,
                    onContactCard: e.onContactCard
                }));
                var Je = Re && Re.shouldShowEphemeralSetting() ? (0, xe.jsx)(V.EphemeralSettingRow, {
                        onClick: e.onEphemeral,
                        chat: Re,
                        theme: Ee ? "new-chat-info" : null,
                        testid: "contact-info-dm-setting-row"
                    }) : null,
                    Qe = null,
                    et = Re && Re.getReceivedVcardMsgs();
                if (q.GK.supportsFeature(q.GK.F.INDEX_RECEIVED_VCARD) && (null == et ? void 0 : et.length) && !Ee) {
                    var tt = (0, xe.jsx)(se.default, {
                        xstyle: Ce.chevron,
                        name: "chevron-right-alt",
                        directional: !0
                    });
                    Qe = (0, xe.jsx)(O.default, {
                        a8nText: "block-contact-card",
                        side: tt,
                        onClick: e.onContactCard,
                        children: (0, xe.jsx)(ue.TextSpan, {
                            theme: "title",
                            children: (0, xe.jsx)(k.default, {
                                count: et.length
                            })
                        })
                    })
                }
                var nt = q.GK.supportsFeature(q.GK.F.MD_BACKEND) ? (0, xe.jsx)(M.default, {
                        contact: (0, le.unproxy)(we),
                        onVerificationClick: function() {
                            n()
                        }
                    }) : null,
                    at = null;
                (Xe || Ze || Je || Qe || nt) && (at = Ee ? (0, xe.jsxs)(j.ChatInfoDrawerSection, {
                    newChatInfo: !0,
                    children: [Xe, Je, nt]
                }) : (0, xe.jsxs)(j.ChatInfoDrawerSection, {
                    newChatInfo: !1,
                    children: [Xe, Ze, Je, Qe, nt]
                }));
                var it, rt, ot, lt, st = Ee && !we.isBusiness,
                    ut = st ? null : (0, xe.jsx)(f.default, {
                        contact: (0, le.unproxy)(we)
                    }),
                    ct = st ? (0, xe.jsx)(E.default, {
                        contact: (0, le.unproxy)(we)
                    }) : null,
                    dt = (0, K.canSeeBizProfileV3)() && we.isBusiness ? we.businessProfile ? (0, xe.jsx)(x.default, {
                        contact: we,
                        onProfilePicLoad: Ve,
                        onProfilePicClick: Be,
                        onOpenStatus: Fe,
                        businessProfile: we.businessProfile,
                        onProductCatalog: _e
                    }) : null : (0, xe.jsx)(P.default, {
                        contact: we,
                        onDetailImageLoad: Ve,
                        onDetailImageClick: Be
                    }),
                    ft = null,
                    ht = void 0;
                we.isBusiness && we.businessProfile && ((0, K.canSeeBizProfileV3)() && we.businessProfile ? (ft = (0, xe.jsx)(p.default, {
                    businessProfile: we.businessProfile
                }), it = (0, xe.jsx)(h.default, {
                    contact: we
                }), (null !== (ot = null === (lt = we.labels) || void 0 === lt ? void 0 : lt.length) && void 0 !== ot ? ot : 0) > 0 && (rt = (0, xe.jsx)(F.default, {
                    theme: "padding",
                    children: (0, xe.jsx)(W.default, {
                        labels: we.labels,
                        theme: "standalone"
                    })
                })), ht = function(e) {
                    var t = Math.floor(100 * (1 + e.currentTarget.scrollTop / e.currentTarget.offsetHeight));
                    t > De && Oe(t)
                }) : we.businessProfile && (ft = (0, xe.jsx)(v.BusinessProfile, {
                    contact: we,
                    businessProfile: we.businessProfile
                })));
                var pt, mt, vt = {
                    title: u.fbt._("Contact info", null, {
                        hk: "LUJtH"
                    }),
                    type: B.DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: !0,
                    onCancel: Ge
                };
                return we.businessProfile && (0, K.bizLinkedAccountsEnabled)() && (pt = (0, xe.jsx)(z.default, {
                    businessProfile: we.businessProfile,
                    rowTheme: "linked-account-consumer"
                })), (0, xe.jsxs)(D.default, {
                    ref: t,
                    theme: "striped",
                    style: Me,
                    testid: "contact-info-drawer",
                    children: [(0, xe.jsx)(B.DrawerHeader, (0, i.default)({}, vt)), (0, xe.jsx)(R.default, {
                        flatListControllers: [Ie.current],
                        onScroll: ht,
                        children: (0, xe.jsxs)("section", {
                            className: (0, d.default)(Ce.body),
                            children: [dt, it, rt, Ye, ft, pt, Ke, We, ct, qe, ze, at, ut, undefined, He, (Re && (mt = (0, xe.jsx)(L.default, {
                                a8nText: "li-delete-chat",
                                icon: (0, xe.jsx)(se.default, {
                                    name: "delete"
                                }),
                                color: "danger",
                                onClick: Le,
                                theme: Ee ? "new-chat-info" : null,
                                children: Y.default.t(374)
                            })), (0, xe.jsxs)(xe.Fragment, {
                                children: [(0, xe.jsx)(w.default, {
                                    contact: we
                                }), (0, xe.jsx)(j.ChatInfoDrawerButtonsSection, {
                                    newChatInfo: Ee,
                                    children: mt
                                })]
                            }))]
                        })
                    })]
                }, "contact-info-modal")
            }
            var _e = (0, c.forwardRef)(be);
            t.default = _e
        },
        9969: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onVerificationClick,
                    n = (0, d.useModelValues)(e.contact, ["id", "privacyMode"]),
                    a = (0, f.default)(),
                    m = function(e, t) {
                        if ((0, s.default)(t.user)) return {
                            text: i.fbt._("Click to learn how messages and calls are secured.", null, {
                                hk: "1UxhjE"
                            }),
                            title: i.fbt._("Security", null, {
                                hk: "3j3j0a"
                            }),
                            onClick: function() {
                                (0, u.default)(i.fbt._("WhatsApp secures your messages and calls with this account.", null, {
                                    hk: "18Ci1q"
                                }), (0, o.getSupportChatSafetyFaqUrl)(), i.fbt._("Learn more about chats with WhatsApp Support.", null, {
                                    hk: "1an25A"
                                }))
                            }
                        };
                        switch (e) {
                            case c.ReducedPrivacyMode.E2EE:
                                return null;
                            case c.ReducedPrivacyMode.BSP:
                                return {
                                    text: i.fbt._("This business works with other companies to manage this chat. Click to learn more.", null, {
                                        hk: "VbOOZ"
                                    }), title: i.fbt._("Security", null, {
                                        hk: "3j3j0a"
                                    }), onClick: function() {
                                        (0, u.default)((0, l.formatBspModalText)(), (0, o.getE2EEnterpriseFaqUrl)())
                                    }
                                };
                            case c.ReducedPrivacyMode.FB:
                                return {
                                    text: i.fbt._("This business uses a secure service from the Facebook company to manage this chat. Click to learn more.", null, {
                                        hk: "1kUjsv"
                                    }), title: i.fbt._("Security", null, {
                                        hk: "3j3j0a"
                                    }), onClick: function() {
                                        (0, u.default)((0, l.formatFbModalText)(), (0, o.getE2EEnterpriseFaqUrl)())
                                    }
                                }
                        }
                    }((0, c.getReducedPrivacyMode)(n.privacyMode), n.id);
                if (m) return (0, p.jsx)(r.default, {
                    title: m.title,
                    text: m.text,
                    onClick: m.onClick,
                    theme: a ? "new-chat-info" : void 0
                });
                var v = h.default.isVoiceCallEnabled() || h.default.isVideoCallEnabled() ? i.fbt._("Messages and calls are end-to-end encrypted. Click to verify.", null, {
                    hk: "GtGQH"
                }) : i.fbt._("Messages are end-to-end encrypted. Click to verify.", null, {
                    hk: "1AqhWR"
                });
                return (0, p.jsx)(r.default, {
                    onClick: t,
                    text: v,
                    theme: a ? "new-chat-info" : void 0
                })
            };
            var i = n(48360),
                r = a(n(96178)),
                o = n(29281),
                l = n(96484),
                s = a(n(40450)),
                u = a(n(22715)),
                c = n(89183),
                d = n(69283),
                f = a(n(25319)),
                h = a(n(40232)),
                p = n(85893)
        },
        95582: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, C.default)(),
                    n = t ? "new-chat-info" : null,
                    a = (0, x.useModelValues)(e.contact, ["displayName", "isBusiness", "isContactBlocked"]),
                    _ = null;
                if (a.isContactBlocked) {
                    var j = t ? d.default.t(363, {
                        contact: a.displayName
                    }) : d.default.t(788);
                    _ = (0, b.jsx)(c.default, {
                        a8nText: "li-unblock",
                        color: "success",
                        icon: (0, b.jsx)(g.default, {
                            name: "settings-blocked",
                            directional: !0
                        }),
                        onClick: function() {
                            s.Cmd.openModal((0, b.jsx)(u.default, {
                                okText: d.default.t(788),
                                onOK: function() {
                                    (0, r.unblockContact)(e.contact), s.Cmd.closeModal()
                                },
                                cancelText: i.fbt._("Cancel", null, {
                                    hk: "H0gNq"
                                }),
                                onCancel: function() {
                                    return s.Cmd.closeModal()
                                },
                                children: (0, b.jsx)(f.default, {
                                    id: 789,
                                    params: {
                                        contact: (0, b.jsx)(h.Name, {
                                            contact: e.contact
                                        })
                                    }
                                })
                            }))
                        },
                        theme: n,
                        children: j
                    })
                } else {
                    var S = t ? d.default.t(360, {
                        contact: a.displayName
                    }) : d.default.t(171);
                    _ = (0, b.jsx)(c.default, {
                        a8nText: "li-block",
                        color: "danger",
                        icon: (0, b.jsx)(g.default, {
                            name: "settings-blocked",
                            directional: !0
                        }),
                        onClick: function() {
                            s.Cmd.openModal((0, b.jsx)(u.default, {
                                onOK: function() {
                                    (0, r.blockContact)(e.contact), s.Cmd.closeModal()
                                },
                                okText: d.default.t(171),
                                onCancel: function() {
                                    return s.Cmd.closeModal()
                                },
                                cancelText: i.fbt._("Cancel", null, {
                                    hk: "H0gNq"
                                }),
                                children: (0, b.jsx)(f.default, {
                                    id: 172,
                                    params: {
                                        contact: (0, b.jsx)(h.Name, {
                                            contact: e.contact
                                        })
                                    }
                                })
                            }))
                        },
                        theme: n,
                        children: S
                    })
                }
                var y = i.fbt._("Report business", null, {
                    hk: "2Tvnn8"
                });
                a.isBusiness || (y = t ? d.default.t(722, {
                    contactInfo: a.displayName
                }) : i.fbt._("Report contact", null, {
                    hk: "3mxqJH"
                }));
                var k = (0, b.jsx)(c.default, {
                    a8nText: "li-report-spam",
                    color: "danger",
                    icon: (0, b.jsx)(g.default, {
                        name: "thumbs-down",
                        directional: !0
                    }),
                    onClick: function() {
                        s.Cmd.openModal((0, b.jsx)(p.default, {
                            isBusiness: e.contact.isBusiness,
                            isGroupChat: !1,
                            onReport: function() {
                                var t = o.ChatCollection.get(e.contact.id);
                                t && (0, m.sendSpamReport)(t, v.SpamFlow.Account), s.Cmd.closeModal()
                            },
                            onReportBlockClear: function() {
                                var t = o.ChatCollection.get(e.contact.id);
                                t && (0, m.sendSpamBlockClear)(t, v.SpamFlow.Block), s.Cmd.closeModal()
                            },
                            onCancel: function() {
                                return s.Cmd.closeModal()
                            }
                        }))
                    },
                    theme: n,
                    children: y
                });
                return t ? (0, b.jsxs)(l.ChatInfoDrawerButtonsSection, {
                    newChatInfo: !0,
                    children: [_, k]
                }) : (0, b.jsxs)(b.Fragment, {
                    children: [(0, b.jsx)(l.ChatInfoDrawerButtonsSection, {
                        newChatInfo: !1,
                        children: _
                    }), (0, b.jsx)(l.ChatInfoDrawerButtonsSection, {
                        newChatInfo: !1,
                        children: k
                    })]
                })
            };
            var i = n(48360),
                r = n(84533),
                o = n(4481),
                l = n(82506),
                s = n(65901),
                u = a(n(86777)),
                c = a(n(61876)),
                d = a(n(45159)),
                f = a(n(62848)),
                h = n(1191),
                p = a(n(51497)),
                m = n(43329),
                v = n(24170),
                g = a(n(7665)),
                x = n(69283),
                C = a(n(25319)),
                b = n(85893)
        },
        16016: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.chat,
                    n = e.onStarred,
                    a = e.onContactCard,
                    d = null,
                    f = t && t.getReceivedVcardMsgs();
                if (s.GK.supportsFeature(s.GK.F.INDEX_RECEIVED_VCARD) && (null == f ? void 0 : f.length)) {
                    var h = (0, c.jsx)(u.TextSpan, {
                        theme: "title",
                        children: (0, c.jsx)(l.default, {
                            count: f.length
                        })
                    });
                    d = (0, c.jsx)(r.default, {
                        a8nText: "block-starred-messages",
                        side: "chevron",
                        icon: "account-box",
                        onClick: a,
                        title: h
                    })
                }
                var p = (0, c.jsx)(u.TextSpan, {
                    theme: "title",
                    size: "16",
                    children: i.fbt._("Starred messages", null, {
                        hk: "4wVbNG"
                    })
                });
                return (0, c.jsxs)(o.ChatInfoDrawerSection, {
                    a8nText: "section-starred-messages",
                    newChatInfo: !0,
                    children: [(0, c.jsx)(r.default, {
                        a8nText: "block-starred-messages",
                        side: "chevron",
                        icon: "star",
                        onClick: n,
                        title: p
                    }), d]
                })
            };
            var i = n(48360),
                r = a(n(98350)),
                o = n(82506),
                l = a(n(24900)),
                s = n(38032),
                u = n(22552),
                c = n(85893)
        },
        5702: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, b.default)() ? (0, y.jsx)(P, (0, i.default)({}, e)) : (0, y.jsx)(w, (0, i.default)({}, e))
            };
            var i = a(n(81109)),
                r = n(48360),
                o = a(n(56720)),
                l = a(n(98056)),
                s = n(4481),
                u = n(66834),
                c = a(n(46821)),
                d = n(73008),
                f = n(27968),
                h = n(38032),
                p = a(n(16516)),
                m = n(1191),
                v = n(96197),
                g = n(68220),
                x = a(n(7665)),
                C = n(22552),
                b = a(n(25319)),
                _ = a(n(53906)),
                j = a(n(20132)),
                S = a(n(55234)),
                y = n(85893);
            var k = {
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno",
                    marginBottom: "du8bjn1j"
                },
                E = {
                    minHeight: "g4oj0cdv",
                    marginTop: "g1eqewly",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    color: "hp667wtd",
                    textOverflow: "lhj4utae",
                    whiteSpace: "le5p0ye3"
                },
                T = {
                    display: "p357zi0d",
                    flexDirection: "sap93d0t"
                },
                M = {
                    display: "l7jjieqr",
                    flexShrink: "oq44ahr5",
                    flexGrow: "tvf2evcx",
                    flexBasis: "lb5m6g5c",
                    marginTop: "b9l0eqez",
                    marginStart: "k6y3xtnu"
                };

            function w(e) {
                var t = e.contact,
                    n = e.onDetailImageLoad,
                    a = e.onDetailImageClick,
                    i = !t.name && t.notifyName ? (0, y.jsx)("div", {
                        className: (0, o.default)(E),
                        children: (0, y.jsxs)(C.TextSpan, {
                            theme: "muted",
                            children: ["~", (0, y.jsx)(d.EmojiText, {
                                direction: "auto",
                                text: t.notifyName,
                                selectable: !0
                            })]
                        })
                    }) : null,
                    r = t.showBusinessCheckmarkAsSecondary && h.GK.supportsFeature(h.GK.F.VNAME_V_2) ? (0, y.jsxs)("div", {
                        className: (0, o.default)(T),
                        children: [(0, y.jsx)(d.EmojiText, {
                            text: t.verifiedName,
                            direction: "auto"
                        }), (0, y.jsx)("div", {
                            className: (0, o.default)(M),
                            children: (0, y.jsx)(x.default, {
                                name: "psa-verified"
                            })
                        })]
                    }) : null,
                    l = s.ChatCollection.get(t.id),
                    f = (null == l ? void 0 : l.presence) ? (0, y.jsx)(j.default, {
                        contact: t,
                        presence: l.presence,
                        chatstate: l.presence.chatstate,
                        location: "info"
                    }) : null;
                return (0, y.jsxs)(c.default, {
                    theme: "padding-large",
                    children: [(0, y.jsx)("div", {
                        className: (0, o.default)(k),
                        children: (0, y.jsx)(u.DetailImage, {
                            id: t.id,
                            size: u.DETAIL_IMAGE_SIZE.LARGE,
                            loader: !0,
                            onLoad: n,
                            onClick: a,
                            quality: u.DETAIL_IMAGE_QUALITY.HIGH
                        })
                    }), (0, y.jsx)(C.TextHeader, {
                        level: "2",
                        theme: "large",
                        children: (0, y.jsx)(m.Name, {
                            contact: t,
                            selectable: !0,
                            showBusinessCheckmark: t.showBusinessCheckmarkAsPrimary
                        })
                    }), i, (0, y.jsxs)("div", {
                        className: (0, o.default)(E),
                        children: [(0, y.jsx)(C.TextSpan, {
                            theme: "muted",
                            children: r
                        }), (0, y.jsx)(C.TextSpan, {
                            theme: "muted",
                            children: f
                        })]
                    }), (0, y.jsx)(p.default, {
                        labels: t.labels
                    })]
                })
            }
            var I = {
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

            function P(e) {
                var t, n = e.contact,
                    a = e.onDetailImageLoad,
                    i = e.onDetailImageClick;
                if (n.isMyContact) t = (0, S.default)(n.id);
                else {
                    var r = n.notifyName;
                    null != r && (t = `~${r}`)
                }
                return (0, y.jsxs)(c.default, {
                    theme: "padding-large",
                    children: [(0, y.jsx)("div", {
                        className: (0, o.default)(I.avatar),
                        children: (0, y.jsx)(u.DetailImage, {
                            id: n.id,
                            size: u.DETAIL_IMAGE_SIZE.LARGE,
                            loader: !0,
                            onLoad: a,
                            onClick: i,
                            quality: u.DETAIL_IMAGE_QUALITY.HIGH
                        })
                    }), (0, y.jsxs)(f.FlexColumn, {
                        align: "center",
                        children: [(0, y.jsx)(C.TextHeader, {
                            level: "2",
                            size: "24",
                            xstyle: I.contactName,
                            children: (0, y.jsx)(m.Name, {
                                contact: n,
                                selectable: !0,
                                breakWord: !0
                            })
                        }), null != t && (0, y.jsx)("div", {
                            className: (0, o.default)(I.secondaryWrapper),
                            children: (0, y.jsx)(v.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, y.jsx)(C.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: t
                                })
                            })
                        })]
                    }), (0, y.jsx)(N, {
                        contact: n
                    }), (0, y.jsx)(p.default, {
                        labels: n.labels
                    })]
                })
            }
            var A = {
                container: {
                    marginTop: "a4rz4n5c",
                    marginBottom: "inww9tbj"
                },
                button: {
                    marginStart: "nzcjdldu",
                    marginEnd: "gqi0zhd6"
                }
            };

            function N(e) {
                var t = e.contact,
                    n = (0, _.default)((0, g.unproxy)(t));
                return n.isVideoCallEnabled || n.isVoiceCallEnabled ? (0, y.jsxs)(f.FlexRow, {
                    justify: "center",
                    xstyle: A.container,
                    children: [(0, y.jsx)(l.default, {
                        icon: "voice-call-filled",
                        iconWidth: 19,
                        label: r.fbt._("Audio", null, {
                            hk: "1b375N"
                        }),
                        a8nText: "contact-action voice-call-button",
                        xstyle: A.button,
                        theme: "new-chat-info",
                        disabled: !n.canStartVoiceCall,
                        onClick: n.startVoiceCall
                    }), (0, y.jsx)(l.default, {
                        icon: "chat-info-video",
                        label: r.fbt._("Video", null, {
                            hk: "3zMUsJ"
                        }),
                        a8nText: "contact-action video-call-button",
                        xstyle: A.button,
                        theme: "new-chat-info",
                        disabled: !n.canStartVideoCall,
                        onClick: n.startVideoCall
                    })]
                }) : null
            }
        },
        98303: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.numMore,
                    n = e.newChatInfo,
                    a = e.viewAll,
                    h = e.onClick;
                if (!n) {
                    var p = (0, d.jsx)(s.default, {
                        theme: "transparent",
                        children: (0, d.jsx)(u.default, {
                            name: "down"
                        })
                    });
                    return (0, d.jsx)(r.default, {
                        image: p,
                        theme: "new-chat-info",
                        primary: l.default.t(509, {
                            count: t,
                            _plural: t
                        }),
                        onClick: h
                    })
                }
                var m = (0, d.jsx)(o.FlexRow, {
                        align: "center",
                        justify: "center",
                        xstyle: f.iconWrapper,
                        children: a ? null : (0, d.jsx)(s.default, {
                            theme: "transparent",
                            children: (0, d.jsx)(u.default, {
                                name: "down",
                                color: "secondary"
                            })
                        })
                    }),
                    v = l.default.t(509, {
                        count: t,
                        _plural: t
                    });
                a && (v = l.default.t(508, {
                    more: v
                }));
                return (0, d.jsxs)(c.default, {
                    xstyle: f.container,
                    onClick: h,
                    children: [m, (0, d.jsx)("div", {
                        className: (0, i.default)(f.text, a && f.textAlt),
                        children: v
                    })]
                })
            };
            var i = a(n(56720)),
                r = a(n(88186)),
                o = n(27968),
                l = a(n(45159)),
                s = a(n(84287)),
                u = a(n(7665)),
                c = a(n(76080)),
                d = n(85893),
                f = {
                    container: {
                        height: "q1n4p668",
                        width: "ln8gz9je",
                        paddingStart: "ddw6s8x9",
                        display: "p357zi0d",
                        alignItems: "gndfcl4n",
                        color: "pm5hny62",
                        ":hover": {
                            backgroundColor: "os03hap6"
                        }
                    },
                    iconWrapper: {
                        width: "fujhy7ri"
                    },
                    text: {
                        flexGrow: "ggj6brxn",
                        textAlign: "ljrqcn24"
                    },
                    textAlt: {
                        color: "dmdq60dq"
                    }
                }
        },
        87923: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, l.jsx)(r.default, {
                    chat: e.chat,
                    showFullDescription: e.showFullDescription,
                    editRestrictionText: i.fbt._("Only admins can edit this group's info", null, {
                        hk: "1a2ztg"
                    }),
                    newChatInfo: (0, o.default)(),
                    a8n: "group-info-drawer-description-title-input",
                    emptyValuePlaceholder: i.fbt._("Add group description", null, {
                        hk: "BVsoQ"
                    }),
                    title: i.fbt._("Description", null, {
                        hk: "4umvEX"
                    })
                })
            };
            var i = n(48360),
                r = a(n(81360)),
                o = a(n(25319)),
                l = n(85893)
        },
        99337: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onVerification,
                    n = e.onClose,
                    a = (0, $.default)(),
                    ne = (0, K.default)(),
                    ae = (0, X.default)(),
                    ie = (0, Z.useNewChatInfoColors)(),
                    re = ae ? ie : null,
                    oe = (0, z.useModelValues)(e.chat, ["mute", "id", "pendingAction", "liveLocation"]),
                    le = (0, z.useModelValues)(e.groupMetadata, ["id", "cachedDeviceSizeBucket", "participants", "pendingParticipants", "announce", "support"]);
                (0, z.useModelValues)(e.contact, ["name", "id", "pendingAction"]);
                var se = (0, W.default)((function() {
                        return new _.default
                    })),
                    ue = (0, W.default)((function() {
                        return new _.default
                    })),
                    ce = (0, W.default)((function() {
                        return new _.default
                    })),
                    de = (0, W.default)((function() {
                        return new N.default.UiAction({
                            uiActionType: N.default.UI_ACTION_TYPE.GROUP_INFO_OPEN,
                            uiActionPreloaded: !0
                        })
                    })),
                    fe = (0, o.useRef)(null);
                (0, Y.useListener)(le.participants, ["add", "remove", "reset", "sort", "change:isAdmin", "change:isSuperAdmin"], ne), (0, Y.useListener)(le.pendingParticipants, ["add", "remove", "reset"], ne);
                var he, pe = function(e) {
                        e.contact.pendingAction++, (0, D.demoteParticipants)(oe, [e]).then((function() {
                            e.contact.pendingAction--
                        }))
                    },
                    me = function(e, t) {
                        e.contact.pendingAction++, (0, D.removeParticipants)(oe, [e]).then((function() {
                            e.contact.pendingAction--
                        })), t && h.Cmd.closeModal()
                    },
                    ve = function(e, t) {
                        e.contact.pendingAction++, (0, D.promoteParticipants)(oe, [e]).then((function() {
                            e.contact.pendingAction--
                        })), t && h.Cmd.closeModal()
                    },
                    ge = function() {
                        if (le.participants.length >= L.ServerProps.maxParticipants) {
                            var e = P.default.t(49, {
                                max: L.ServerProps.maxParticipants
                            });
                            h.Cmd.openToast((0, Q.jsx)(q.Toast, {
                                msg: e,
                                id: te
                            }))
                        } else {
                            var t = j.GK.supportsFeature(j.GK.F.GROUPS_V_3) ? (0, Q.jsx)(u.default, {
                                chat: (0, B.unproxy)(oe),
                                pushTransition: "none",
                                popTransition: "none"
                            }) : (0, Q.jsx)(s.default, {
                                chat: (0, B.unproxy)(oe),
                                pushTransition: "none",
                                popTransition: "none"
                            });
                            h.Cmd.openModal(t, {
                                transition: "modal-flow"
                            })
                        }
                    };
                if ((0, o.useEffect)((function() {
                        var e = de.current;
                        if (e) {
                            var t = le.cachedDeviceSizeBucket;
                            null != t && (e.sizeBucket = t), e.markUiActionT(), e.commit(), (0, R.logUiActionShadowPrivateStatsTestEvents)(), de.current = void 0
                        }
                        oe.isSuspendedGroup() && V.default.openModal()
                    }), []), (0, o.useEffect)((function() {
                        le.participants.ensureSorted(), le.pendingParticipants.ensureSorted()
                    })), le.participants.iAmAdmin() && j.GK.supportsFeature(j.GK.F.GROUPS_V_3) && !le.support)
                    if (ae) {
                        var xe = (0, Q.jsx)(H.TextSpan, {
                            theme: "title",
                            children: r.fbt._("Group settings", null, {
                                hk: "3sS0Vl"
                            })
                        });
                        he = (0, Q.jsx)(c.default, {
                            side: "chevron",
                            icon: "settings",
                            onClick: e.onAdminSetting,
                            title: xe
                        })
                    } else {
                        var Ce = (0, Q.jsx)(U.default, {
                            xstyle: ee.chevron,
                            name: "chevron-right-alt",
                            directional: !0
                        });
                        he = (0, Q.jsx)(m.default, {
                            onClick: e.onAdminSetting,
                            side: Ce,
                            children: (0, Q.jsx)(H.TextSpan, {
                                theme: "title",
                                children: r.fbt._("Group settings", null, {
                                    hk: "3sS0Vl"
                                })
                            })
                        })
                    } var be = null;
                e.onMediaGallery && (be = (0, Q.jsx)(f.default, {
                    onMediaGallery: e.onMediaGallery,
                    chat: (0, B.unproxy)(oe)
                }));
                var _e = null;
                j.GK.supportsFeature(j.GK.F.LIVE_LOCATIONS) && (_e = (0, Q.jsx)(A.default, {
                    chat: oe,
                    onClick: e.onLiveLocation
                }));
                var je = oe && oe.shouldShowEphemeralSetting() ? (0, Q.jsx)(b.EphemeralSettingRow, {
                        onClick: e.onEphemeral,
                        chat: oe,
                        groupMetadata: le,
                        theme: ae ? "new-chat-info" : null
                    }) : null,
                    Se = null;
                j.GK.supportsFeature(j.GK.F.MD_BACKEND) && (Se = (0, Q.jsx)(C.default, {
                    onClick: function() {
                        h.Cmd.openModal((0, Q.jsx)(x.default, {
                            chatId: oe.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    },
                    theme: ae ? "new-chat-info" : null,
                    text: J.default.isGroupCallEnabled() ? r.fbt._("Messages and calls are end-to-end encrypted. Click to learn more.", null, {
                        hk: "1l9pwW"
                    }) : r.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "2MtPh9"
                    })
                }));
                oe.isSupportGroup() && (Se = (0, Q.jsx)(F.default, {
                    onClick: function() {
                        h.Cmd.openModal((0, Q.jsx)(x.default, {
                            chat: oe,
                            chatId: oe.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    },
                    theme: ae ? "new-chat-info" : null
                }));
                var ye = oe.mute.canMute() ? (0, Q.jsx)(O.default, {
                        chat: oe,
                        mute: oe.mute,
                        settings: G.default,
                        theme: ae ? "new-chat-info" : null
                    }) : null,
                    ke = null,
                    Ee = null;
                if (e.onStarred)
                    if (ae) {
                        var Te = (0, Q.jsx)(H.TextSpan, {
                            theme: "title",
                            size: "16",
                            children: r.fbt._("Starred messages", null, {
                                hk: "4wVbNG"
                            })
                        });
                        Ee = (0, Q.jsx)(d.ChatInfoDrawerSection, {
                            a8nText: "section-starred-messages",
                            newChatInfo: !0,
                            children: (0, Q.jsx)(c.default, {
                                a8nText: "block-starred-messages",
                                side: "chevron",
                                icon: "star",
                                onClick: e.onStarred,
                                title: Te
                            })
                        })
                    } else {
                        var Me = (0, Q.jsx)(U.default, {
                            xstyle: ee.chevron,
                            name: "chevron-right-alt",
                            directional: !0
                        });
                        ke = (0, Q.jsx)(m.default, {
                            side: Me,
                            onClick: e.onStarred,
                            children: (0, Q.jsx)(H.TextSpan, {
                                theme: "title",
                                children: r.fbt._("Starred messages", null, {
                                    hk: "4wVbNG"
                                })
                            })
                        })
                    } var we = null;
                (ye || ke || Se || je) && (we = (0, Q.jsxs)(d.ChatInfoDrawerSection, {
                    newChatInfo: ae,
                    children: [ye, ke, je, Se, he]
                }));
                var Ie = j.GK.supportsFeature(j.GK.F.MD_BACKEND) && e.scrollToParticipantList;
                return (0, Q.jsxs)(p.default, {
                    theme: "striped",
                    style: re,
                    children: [(0, Q.jsx)(g.DrawerHeader, {
                        title: r.fbt._("Group info", null, {
                            hk: "2SfTUZ"
                        }),
                        type: g.DRAWER_HEADER_TYPE.SMALL,
                        rtlFixIfOnDarwin: !0,
                        onCancel: function() {
                            n ? n() : null == a || a.uie.requestDismiss()
                        }
                    }), (0, Q.jsx)(v.default, {
                        flatListControllers: [ue.current, se.current],
                        children: (0, Q.jsxs)("section", {
                            className: (0, l.default)(ee.body),
                            "data-a8n": i.default.key("group-info-drawer-body"),
                            children: [(0, Q.jsx)(w.default, {
                                chat: (0, B.unproxy)(oe),
                                onAdminSetting: e.onAdminSetting,
                                onAddParticipant: ge,
                                onClickParticpantsCount: function() {
                                    var e;
                                    null === (e = fe.current) || void 0 === e || e.scrollIntoView()
                                }
                            }), (0, Q.jsx)(y.default, {
                                chat: (0, B.unproxy)(oe),
                                showFullDescription: e.showFullGroupDescription
                            }), _e, be, Ee, we, undefined, (0, S.communitiesEnabled)() ? (0, Q.jsx)(M.default, {
                                parentChat: (0, B.unproxy)(oe),
                                flatListController: ce.current
                            }) : null, (0, Q.jsx)(E.GroupInfoParticipantsSection, {
                                ref: fe,
                                chat: (0, B.unproxy)(oe),
                                scrollToParticipantList: Ie,
                                flatListController: se.current,
                                onAddParticipant: ge,
                                onOpenParticpantSearch: function() {
                                    h.Cmd.openModal((0, Q.jsx)(I.default, {
                                        chat: (0, B.unproxy)(oe),
                                        onParticipantPromote: ve,
                                        onParticipantRemove: me,
                                        onDemoteAdmin: pe,
                                        onVerification: t
                                    }), {
                                        transition: "modal-flow"
                                    })
                                },
                                onGroupInviteLink: e.onGroupInviteLink,
                                onVerification: e.onVerification
                            }), (0, Q.jsx)(T.default, {
                                chat: (0, B.unproxy)(oe),
                                flatListController: ue.current
                            }), (0, Q.jsx)(k.default, {
                                chat: (0, B.unproxy)(oe)
                            })]
                        })
                    })]
                }, "contact-info-modal")
            };
            var i = a(n(84646)),
                r = n(48360),
                o = n(67294),
                l = a(n(56720)),
                s = a(n(79933)),
                u = a(n(47830)),
                c = a(n(98350)),
                d = n(82506),
                f = a(n(83399)),
                h = n(65901),
                p = a(n(53187)),
                m = a(n(81218)),
                v = a(n(18345)),
                g = n(19288),
                x = a(n(38973)),
                C = a(n(96178)),
                b = n(90675),
                _ = a(n(92546)),
                j = n(38032),
                S = n(2629),
                y = a(n(87923)),
                k = a(n(1594)),
                E = n(16539),
                T = a(n(89971)),
                M = a(n(56105)),
                w = a(n(68921)),
                I = a(n(80816)),
                P = a(n(45159)),
                A = a(n(592)),
                N = a(n(50507)),
                D = n(87547),
                O = a(n(59603)),
                R = n(26329),
                L = n(43890),
                G = a(n(43463)),
                B = n(68220),
                F = a(n(20147)),
                V = a(n(64911)),
                U = a(n(7665)),
                H = n(22552),
                q = n(92428),
                K = a(n(57811)),
                W = a(n(39394)),
                Y = n(8413),
                z = n(69283),
                X = a(n(25319)),
                Z = n(68034),
                $ = a(n(93958)),
                J = a(n(40232)),
                Q = n(85893),
                ee = {
                    body: {
                        flexShrink: "oq44ahr5",
                        flexGrow: "tvf2evcx",
                        flexBasis: "lb5m6g5c",
                        paddingBottom: "s9fl9ege"
                    },
                    chevron: {
                        color: "cs9t9or5"
                    }
                },
                te = (0, q.genId)("max_participant_toast")
        },
        1594: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.chat,
                    n = (0, h.default)(),
                    a = (0, p.jsx)(v, {
                        chat: t,
                        showNewChatInfo: n
                    }),
                    i = (0, p.jsx)(m, {
                        chat: t,
                        showNewChatInfo: n
                    });
                return n ? (0, p.jsxs)(r.ChatInfoDrawerButtonsSection, {
                    newChatInfo: !0,
                    children: [a, i]
                }) : (0, p.jsxs)(p.Fragment, {
                    children: [(0, p.jsx)(r.ChatInfoDrawerButtonsSection, {
                        newChatInfo: !1,
                        children: a
                    }), (0, p.jsx)(r.ChatInfoDrawerButtonsSection, {
                        newChatInfo: !1,
                        children: i
                    })]
                })
            };
            var i = n(48360),
                r = n(82506),
                o = n(65901),
                l = a(n(61876)),
                s = a(n(45159)),
                u = a(n(51497)),
                c = n(43329),
                d = n(24170),
                f = a(n(7665)),
                h = a(n(25319)),
                p = n(85893);

            function m(e) {
                var t = e.chat,
                    n = e.showNewChatInfo;
                return (0, p.jsx)(l.default, {
                    a8nText: "li-report-spam",
                    color: "danger",
                    icon: (0, p.jsx)(f.default, {
                        name: "thumbs-down",
                        directional: !0
                    }),
                    theme: n ? "new-chat-info" : null,
                    onClick: function() {
                        o.Cmd.openModal((0, p.jsx)(u.default, {
                            isGroupChat: !0,
                            onReport: function() {
                                (0, c.sendSpamReport)(t, d.SpamFlow.Group), o.Cmd.closeModal()
                            },
                            onReportExitClear: function() {
                                (0, c.sendSpamExitClear)(t, d.SpamFlow.Block), o.Cmd.closeModal()
                            },
                            onCancel: function() {
                                return o.Cmd.closeModal()
                            }
                        }))
                    },
                    children: i.fbt._("Report group", null, {
                        hk: "23NLqw"
                    })
                })
            }

            function v(e) {
                var t = e.chat,
                    n = e.showNewChatInfo;
                return (0, p.jsx)(l.default, {
                    a8nText: "li-delete-group",
                    icon: (0, p.jsx)(f.default, {
                        name: "exit",
                        directional: !0
                    }),
                    color: "danger",
                    theme: n ? "new-chat-info" : null,
                    onClick: function() {
                        o.Cmd.deleteOrExitChat(t)
                    },
                    children: t.isReadOnly ? s.default.t(879) : i.fbt._("Exit group", null, {
                        hk: "4BkPNr"
                    })
                })
            }
        },
        16539: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GroupInfoParticipantsSection = void 0;
            var i = a(n(63038)),
                r = a(n(272)),
                o = n(79746),
                l = a(n(67082)),
                s = n(43828),
                u = n(48360),
                c = n(67294),
                d = a(n(56720)),
                f = a(n(88186)),
                h = n(82506),
                p = n(65901),
                m = a(n(86777)),
                v = n(94680),
                g = n(73008),
                x = a(n(98303)),
                C = n(68985),
                b = n(73568),
                _ = n(1577),
                j = n(38032),
                S = n(2629),
                y = a(n(45159)),
                k = n(87547),
                E = a(n(44606)),
                T = a(n(84287)),
                M = n(34238),
                w = a(n(7665)),
                I = n(16835),
                P = a(n(93820)),
                A = a(n(57811)),
                N = n(8413),
                D = n(69283),
                O = a(n(25319)),
                R = n(85893),
                L = {
                    iconSearch: {
                        color: "s4k44ver"
                    }
                },
                G = (0, c.forwardRef)((function(e, t) {
                    var n, a = (0, O.default)(),
                        G = (0, D.useModelValues)((0, r.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["support"]),
                        F = (0, r.default)(null === (n = e.chat.groupMetadata) || void 0 === n ? void 0 : n.participants, "props.chat.groupMetadata?.participants"),
                        V = (0, A.default)();
                    (0, N.useListener)(F, "add remove reset sort change:isAdmin change:isSuperAdmin", V);
                    var U = (0, c.useState)(B(F)),
                        H = (0, i.default)(U, 2),
                        q = H[0],
                        K = H[1],
                        W = (0, c.useRef)(),
                        Y = (0, c.useState)(),
                        z = (0, i.default)(Y, 2),
                        X = z[0],
                        Z = z[1];
                    (0, c.useEffect)((function() {
                        j.GK.supportsFeature(j.GK.F.MD_BACKEND) && e.scrollToParticipantList && W.current && (0, M.scrollIntoViewIfNeeded)(W.current, !1)
                    }), [e.scrollToParticipantList]), (0, c.useImperativeHandle)(t, (function() {
                        return {
                            scrollIntoView: function() {
                                var e;
                                null === (e = W.current) || void 0 === e || e.scrollIntoView()
                            }
                        }
                    }));
                    var $, J, Q, ee = a ? "secondary" : null,
                        te = a ? "new-chat-info" : "drawer-list",
                        ne = a ? "compact" : void 0,
                        ae = (0, R.jsx)(w.default, {
                            name: "search",
                            className: (0, d.default)(!a && L.iconSearch),
                            color: ee
                        });
                    if (F.canAdd() && !G.support) {
                        var ie = (0, R.jsx)(T.default, {
                            theme: ne,
                            children: (0, R.jsx)(w.default, {
                                name: "add-user",
                                directional: !0
                            })
                        });
                        $ = (0, R.jsx)(f.default, {
                            image: ie,
                            theme: te,
                            primary: u.fbt._("Add participant", null, {
                                hk: "48ECfz"
                            }),
                            onClick: e.onAddParticipant
                        })
                    }
                    if (F.iAmAdmin() && e.onGroupInviteLink && !G.support) {
                        var re = (0, R.jsx)(T.default, {
                            theme: ne,
                            children: (0, R.jsx)(w.default, {
                                name: "link"
                            })
                        });
                        J = (0, R.jsx)(f.default, {
                            image: re,
                            theme: te,
                            primary: u.fbt._("Invite to group via link", null, {
                                hk: "3vDtFL"
                            }),
                            onClick: e.onGroupInviteLink
                        })
                    }
                    if (B(F) && q) {
                        var oe = !a || F.length <= 20,
                            le = F.length - h.INFO_DRAWER_MAX_ROWS;
                        Q = (0, R.jsx)(x.default, {
                            numMore: le,
                            newChatInfo: a,
                            onClick: function() {
                                oe ? K(!1) : e.onOpenParticpantSearch()
                            },
                            viewAll: !oe
                        })
                    }
                    var se, ue = function(e) {
                            var t = F.get(e.id);
                            return !!t && (F.canPromote(t) || F.canDemote(t) || F.canRemove(t) || F.canVerifyIdentity(t))
                        },
                        ce = function(t, n) {
                            var a = F.assertGet(n.id);
                            if (ue(n)) {
                                var i = [];
                                F.canPromote(a) && i.push((0, R.jsx)(v.DropdownItem, {
                                    a8n: "mi-grp-promote-admin",
                                    action: function() {
                                        var t = y.default.t(348, {
                                            participant: a.contact.formattedName,
                                            subject: e.chat.contact.name
                                        });
                                        p.Cmd.openModal((0, R.jsx)(m.default, {
                                            onOK: function() {
                                                return t = !0, a.contact.pendingAction++, (0, k.promoteParticipants)(e.chat, [a]).then((function() {
                                                    a.contact.pendingAction--
                                                })), void(t && p.Cmd.closeModal());
                                                var t
                                            },
                                            okText: y.default.t(604),
                                            onCancel: function() {
                                                return p.Cmd.closeModal()
                                            },
                                            cancelText: u.fbt._("Cancel", null, {
                                                hk: "H0gNq"
                                            }),
                                            children: (0, R.jsx)(g.EmojiText, {
                                                text: t
                                            })
                                        }))
                                    },
                                    children: y.default.t(604)
                                }, "promote")), F.canRemove(a) && i.push((0, R.jsx)(v.DropdownItem, {
                                    a8n: "mi-grp-remove-participant",
                                    action: function() {
                                        var t = y.default.t(349, {
                                            participant: a.contact.formattedName,
                                            subject: e.chat.contact.name
                                        });
                                        p.Cmd.openModal((0, R.jsx)(m.default, {
                                            onOK: function() {
                                                return t = !0, a.contact.pendingAction++, (0, k.removeParticipants)(e.chat, [a]).then((function() {
                                                    a.contact.pendingAction--
                                                })), void(t && p.Cmd.closeModal());
                                                var t
                                            },
                                            okText: y.default.t(717),
                                            onCancel: function() {
                                                return p.Cmd.closeModal()
                                            },
                                            cancelText: u.fbt._("Cancel", null, {
                                                hk: "H0gNq"
                                            }),
                                            children: (0, R.jsx)(g.EmojiText, {
                                                text: t
                                            })
                                        }))
                                    },
                                    children: y.default.t(608)
                                }, "remove")), j.GK.supportsFeature(j.GK.F.GROUPS_V_3) && F.canDemote(a) && i.push((0, R.jsx)(v.DropdownItem, {
                                    a8n: "mi-grp-verify-identify",
                                    action: function() {
                                        a.contact.pendingAction++, (0, k.demoteParticipants)(e.chat, [a]).then((function() {
                                            a.contact.pendingAction--
                                        })), p.Cmd.closeModal()
                                    },
                                    children: u.fbt._("Dismiss as admin", null, {
                                        hk: "243sNl"
                                    })
                                }, "demote-admin")), j.GK.supportsFeature(j.GK.F.MD_BACKEND) && F.canVerifyIdentity(a) && i.push((0, R.jsx)(v.DropdownItem, {
                                    a8n: "mi-grp-verify-identify",
                                    action: function() {
                                        e.onVerification && e.onVerification(a.contact)
                                    },
                                    children: u.fbt._("Verify Security Code", null, {
                                        hk: "1vTVgt"
                                    })
                                }, "verify-identity")), Z({
                                    contactId: n.id,
                                    menu: i,
                                    anchor: t.anchor,
                                    event: t.event
                                })
                            }
                        },
                        de = function(e, t) {
                            l.default.equals((0, _.getMaybeMeUser)(), t.id) || (0, C.findChat)(t.id).then((function(e) {
                                p.Cmd.openChatFromUnread(e).then((function(t) {
                                    t && ((0, S.btmThreadsLoggingEnabled)() && p.Cmd.addChatMsgSentLogAttributes(e, {
                                        handleMultiple: function() {
                                            (0, s.handleActivitiesForChatThreadLogging)([{
                                                activityType: "groupMembershipReplies",
                                                ts: (0, o.unixTime)(),
                                                chatId: e.id
                                            }])
                                        }
                                    }), p.Cmd.focusChatTextInput(e))
                                }))
                            }))
                        },
                        fe = F.length ? (0, R.jsxs)(h.ChatInfoDrawerListSection, {
                            newChatInfo: a,
                            onRef: function(e) {
                                W.current = e
                            },
                            a8nText: "section-participants",
                            title: y.default.t(954, {
                                count: F.length,
                                _plural: F.length
                            }),
                            titleOnClick: j.GK.supportsFeature(j.GK.F.GROUPS_V_3) ? e.onOpenParticpantSearch : void 0,
                            subtitle: j.GK.supportsFeature(j.GK.F.GROUPS_V_3) ? ae : void 0,
                            children: [$, J, (0, R.jsx)(b.FlatList, {
                                flatListController: e.flatListController,
                                direction: "vertical",
                                forceConsistentRenderCount: !1,
                                data: function() {
                                    var e, t = [],
                                        n = [];
                                    F.forEach((function(a) {
                                        a.contact.isMe ? e = a : a.isAdmin ? t.push(a) : n.push(a)
                                    }));
                                    var a = [];
                                    return e && a.push(e), a = a.concat(t, n), B(F) && q && (a = a.slice(0, h.INFO_DRAWER_MAX_ROWS)), a.map((function(e) {
                                        return {
                                            itemKey: e.id.toString(),
                                            id: e.id,
                                            height: 68
                                        }
                                    }))
                                }(),
                                renderItem: function(e) {
                                    var t = e.id,
                                        n = F.get(t);
                                    if (!n) throw new b.UnknownDataError(e);
                                    var i = n.contact,
                                        r = !!X && l.default.equals(i.id, X.contactId);
                                    return (0, R.jsx)(E.default, {
                                        contact: i,
                                        participant: n,
                                        onClick: de,
                                        contextEnabled: function() {
                                            return ue(i)
                                        },
                                        contextMenu: r,
                                        onContext: function(e) {
                                            return ce(e, i)
                                        },
                                        theme: a ? "new-chat-info" : null,
                                        showNotifyName: !0,
                                        waitIdle: !0
                                    }, n.id.toString())
                                }
                            }), Q]
                        }) : null;
                    return X && (se = (0, R.jsx)(I.UIE, {
                        displayName: "ChatContextMenu",
                        escapable: !0,
                        popable: !0,
                        requestDismiss: function() {
                            Z(null)
                        },
                        children: (0, R.jsx)(P.default, {
                            contextMenu: X
                        })
                    })), (0, R.jsxs)(R.Fragment, {
                        children: [fe, se]
                    })
                }));

            function B(e) {
                return e.length > h.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
            }
            t.GroupInfoParticipantsSection = G, G.displayName = "GroupInfoParticipantsSection"
        },
        89971: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = (0, S.default)(),
                    E = (0, r.default)(e.chat.groupMetadata, "props.chat.groupMetadata"),
                    T = (0, r.default)(null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants, "props.chat.groupMetadata?.participants"),
                    M = (0, r.default)(null === (n = e.chat.groupMetadata) || void 0 === n ? void 0 : n.pendingParticipants, "props.chat.groupMetadata?.pendingParticipants"),
                    w = (0, _.default)();
                (0, j.useListener)(T, "change:isAdmin change:isSuperAdmin", w), (0, j.useListener)(M, "add remove reset", w);
                var I = (0, l.useState)(k(M)),
                    P = (0, i.default)(I, 2),
                    A = P[0],
                    N = P[1],
                    D = (0, l.useState)(),
                    O = (0, i.default)(D, 2),
                    R = O[0],
                    L = O[1];
                (0, l.useEffect)((function() {
                    m.GK.supportsFeature(m.GK.F.GROUPS_V_4_JOIN_PERMISSION) && E.queryGroupV4PendingInvite().then((function() {
                        N(k(E.pendingParticipants))
                    }))
                }), [E]);
                var G, B, F;
                M.length > 0 && (G = (0, y.jsx)(p.FlatList, {
                    flatListController: e.flatListController,
                    direction: "vertical",
                    forceConsistentRenderCount: !1,
                    data: (V = M.toArray(), k(M) && A && (V = V.slice(0, s.INFO_DRAWER_MAX_ROWS)), V.map((function(e) {
                        return {
                            itemKey: e.id.toString(),
                            id: e.id,
                            height: 68
                        }
                    }))),
                    renderItem: function(e) {
                        var t = e.id,
                            n = M.get(t);
                        if (!n) throw new p.UnknownDataError(e);
                        var i = n.contact;
                        return (0, y.jsx)(g.default, {
                            contact: i,
                            participant: n,
                            contextEnabled: function() {
                                return !0
                            },
                            contextMenu: !0,
                            onContext: function(e) {
                                return t = e, a = [(0, y.jsx)(d.DropdownItem, {
                                    a8n: "mi-grp-promote-admin",
                                    action: function() {
                                        u.Cmd.openModal((0, y.jsx)(c.default, {
                                            onOK: function() {
                                                u.Cmd.closeModal(), E.revokeGroupV4AddInvite([n.id.toString()]).then((function() {
                                                    u.Cmd.openToast((0, y.jsx)(x.Toast, {
                                                        msg: o.fbt._("Invite reset", null, {
                                                            hk: "MgErr"
                                                        }),
                                                        id: (0, x.genId)()
                                                    }))
                                                }))
                                            },
                                            okText: o.fbt._("Reset link", null, {
                                                hk: "2Zb3R4"
                                            }),
                                            onCancel: function() {
                                                return u.Cmd.closeModal()
                                            },
                                            cancelText: o.fbt._("Cancel", null, {
                                                hk: "H0gNq"
                                            }),
                                            children: (0, y.jsx)(f.EmojiText, {
                                                text: v.default.t(513, {
                                                    participant: n.contact.formattedName
                                                })
                                            })
                                        }))
                                    },
                                    children: o.fbt._("Revoke invite", null, {
                                        hk: "4on28q"
                                    })
                                }, "promote")], void L({
                                    contactId: i.id,
                                    menu: a,
                                    anchor: t.anchor,
                                    event: t.event
                                });
                                var t, a
                            },
                            theme: a ? "new-chat-info" : null,
                            showNotifyName: !0,
                            isPendingParticipant: !0,
                            waitIdle: !0
                        }, n.id.toString())
                    }
                }));
                var V;
                if (k(M) && A) {
                    var U = M.length - s.INFO_DRAWER_MAX_ROWS;
                    B = (0, y.jsx)(h.default, {
                        numMore: U,
                        newChatInfo: a,
                        onClick: function() {
                            N(!1)
                        }
                    })
                }
                T.iAmAdmin() && M.length > 0 && (F = (0, y.jsxs)(s.ChatInfoDrawerListSection, {
                    newChatInfo: a,
                    a8nText: "section-participants",
                    title: v.default.t(511, {
                        number: M.length
                    }),
                    children: [G, B]
                }));
                var H;
                R && (H = (0, y.jsx)(C.UIE, {
                    displayName: "ChatContextMenu",
                    escapable: !0,
                    popable: !0,
                    requestDismiss: function() {
                        L(null)
                    },
                    children: (0, y.jsx)(b.default, {
                        contextMenu: R
                    })
                }));
                return (0, y.jsxs)(y.Fragment, {
                    children: [F, H]
                })
            };
            var i = a(n(63038)),
                r = a(n(272)),
                o = n(48360),
                l = n(67294),
                s = n(82506),
                u = n(65901),
                c = a(n(86777)),
                d = n(94680),
                f = n(73008),
                h = a(n(98303)),
                p = n(73568),
                m = n(38032),
                v = a(n(45159)),
                g = a(n(44606)),
                x = n(92428),
                C = n(16835),
                b = a(n(93820)),
                _ = a(n(57811)),
                j = n(8413),
                S = a(n(25319)),
                y = n(85893);

            function k(e) {
                return e.length > s.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
            }
        },
        56105: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = (0, x.default)(),
                    a = (0, g.useModelValues)(e.parentChat, ["groupMetadata", "id"]),
                    u = (0, g.useModelValues)((0, l.default)(a.groupMetadata, "parentChat.groupMetadata"), ["unjoinedSubgroups"]),
                    f = (0, s.useState)([]),
                    m = (0, o.default)(f, 2),
                    _ = m[0],
                    j = m[1],
                    S = (0, s.useCallback)((function() {
                        j(u.getUnjoinedSubgroupsMetadata())
                    }), [u]);
                (0, s.useEffect)((function() {
                    S()
                }), [S]);
                var y = function(e, t) {
                        (0, h.findChat)(e).then((function(e) {
                            e.quotedMsgAdminParentGroupJid = e.id, e.quotedMsgAdminGroupSubject = t.subject, e.quotedMsgAdminGroupJid = t.id, d.Cmd.openChatBottom(e)
                        }))
                    },
                    k = function() {
                        var t = (0, r.default)(i.default.mark((function t(n) {
                            var a, r;
                            return i.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, (0, v.querySubgroupInfo)(n.id, e.parentChat.id);
                                    case 2:
                                        if (a = t.sent) {
                                            t.next = 5;
                                            break
                                        }
                                        throw new p.UnknownDataError(n);
                                    case 5:
                                        (r = a.participants.getAdmins()).length > 0 && y(r[0].id, a);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                return (null !== (t = _.length) && void 0 !== t ? t : 0) > 0 ? (0, C.jsx)(c.ChatInfoDrawerListSection, {
                    newChatInfo: n,
                    title: "[INTERNAL ONLY] - Related groups",
                    children: (0, C.jsx)(p.FlatList, {
                        flatListController: e.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: _.map((function(e) {
                            var t = (0, l.default)(e, "group");
                            return {
                                itemKey: t.id.toString(),
                                id: t.id,
                                subject: t.subject
                            }
                        })),
                        renderItem: function(e) {
                            return (0, C.jsx)(b, {
                                subgroup: e,
                                onClick: k,
                                theme: n ? "new-chat-info" : null
                            })
                        }
                    })
                }) : null
            };
            var i = a(n(87757)),
                r = a(n(48926)),
                o = a(n(63038)),
                l = a(n(272)),
                s = n(67294),
                u = a(n(27237)),
                c = n(82506),
                d = n(65901),
                f = n(66834),
                h = n(68985),
                p = n(73568),
                m = n(32012),
                v = n(75266),
                g = n(69283),
                x = a(n(25319)),
                C = n(85893);

            function b(e) {
                var t = e.subgroup,
                    n = e.theme,
                    a = e.onClick;
                if (!t) throw new p.UnknownDataError(t);
                return (0, C.jsx)(m.HotKeys, {
                    children: (0, C.jsx)(u.default, {
                        onClick: function() {
                            a(t)
                        },
                        theme: n,
                        primary: t.subject,
                        contextEnabled: function() {
                            return !1
                        },
                        image: (0, C.jsx)(f.DetailImage, {
                            id: t.id,
                            size: 40
                        })
                    })
                })
            }
        },
        68921: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, G.default)() ? (0, F.jsx)(K, (0, l.default)({}, e)) : (0, F.jsx)(H, (0, l.default)({}, e))
            };
            var i = a(n(87757)),
                r = a(n(48926)),
                o = a(n(63038)),
                l = a(n(81109)),
                s = n(396),
                u = n(15586),
                c = a(n(272)),
                d = a(n(84646)),
                f = n(48360),
                h = n(67294),
                p = a(n(56720)),
                m = n(10399),
                v = n(65901),
                g = a(n(86777)),
                x = a(n(46821)),
                C = a(n(96150)),
                b = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = V(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = i ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        } a.default = e, n && n.set(e, a);
                    return a
                }(n(18286)),
                _ = n(27968),
                j = a(n(78070)),
                S = n(26224),
                y = a(n(16516)),
                k = a(n(45159)),
                E = n(1191),
                T = n(76110),
                M = a(n(49309)),
                w = n(43201),
                I = a(n(27003)),
                P = n(96197),
                A = n(89569),
                N = n(22552),
                D = a(n(76080)),
                O = a(n(57811)),
                R = n(8413),
                L = n(69283),
                G = a(n(25319)),
                B = a(n(1379)),
                F = n(85893);

            function V(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (V = function(e) {
                    return e ? n : t
                })(e)
            }
            var U = {
                nameSecondary: {
                    minHeight: "g4oj0cdv",
                    marginTop: "sy4xt5vv"
                },
                photo: {
                    marginBottom: "njub1g37"
                }
            };

            function H(e) {
                var t = (0, L.useModelValues)(e.chat, ["labels"]),
                    n = (0, L.useModelValues)((0, c.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["creation"]),
                    a = null;
                return n.creation && (a = (0, F.jsx)("div", {
                    "data-a8n": d.default.key("group-created-time"),
                    className: (0, p.default)(U.nameSecondary),
                    children: (0, F.jsx)(N.TextSpan, {
                        theme: "muted",
                        children: m.Clock.createdStr(n.creation, t.isSupportGroup())
                    })
                })), (0, F.jsxs)(x.default, {
                    theme: "padding-large",
                    children: [(0, F.jsx)(W, {
                        chat: e.chat,
                        xstyle: U.photo
                    }), (0, F.jsx)(z, {
                        chat: e.chat
                    }), a, (0, F.jsx)(y.default, {
                        labels: t.labels
                    })]
                })
            }
            var q = {
                lineHeight: "a4ywakfo",
                marginTop: "ma4rpf0l"
            };

            function K(e) {
                var t, n, a = (0, L.useModelValues)(e.chat, ["labels"]),
                    i = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants,
                    r = (0, O.default)();
                (0, R.useListener)(i, "add remove reset sort change:isAdmin change:isSuperAdmin", r);
                var o = null !== (n = null == i ? void 0 : i.length) && void 0 !== n ? n : 0,
                    l = k.default.t(954, {
                        count: o,
                        _plural: o
                    });
                return (0, F.jsx)(x.default, {
                    theme: "padding-large",
                    children: (0, F.jsxs)(_.FlexColumn, {
                        align: "center",
                        children: [(0, F.jsx)(W, {
                            chat: e.chat,
                            xstyle: U.photo
                        }), (0, F.jsx)(z, {
                            chat: e.chat,
                            newChatInfo: !0
                        }), (0, F.jsx)("div", {
                            className: (0, p.default)(q),
                            children: (0, F.jsx)(P.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, F.jsxs)(N.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: [f.fbt._("Group", null, {
                                        hk: "DNiv2"
                                    }), " · ", (0, F.jsx)(D.default, {
                                        onClick: e.onClickParticpantsCount,
                                        children: l
                                    })]
                                })
                            })
                        }), undefined, (0, F.jsx)(y.default, {
                            labels: a.labels
                        })]
                    })
                })
            }

            function W(e) {
                var t = (0, L.useModelValues)(e.chat, ["isReadOnly"]),
                    n = (0, L.useModelValues)(e.chat.contact, ["id", "profilePicThumb"]),
                    a = (0, L.useModelValues)(e.chat.contact.profilePicThumb, ["imgFull"]),
                    i = (0, L.useModelValues)((0, c.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["groupType"]),
                    r = (0, h.useState)(!1),
                    l = (0, o.default)(r, 2),
                    d = l[0],
                    f = l[1],
                    m = (0, h.useState)(!1),
                    v = (0, o.default)(m, 2),
                    g = v[0],
                    x = v[1],
                    C = (0, B.default)(),
                    _ = M.default.GROUP,
                    j = t.isReadOnly || !a.canDelete() && !a.canSet() || t.isSupportGroup() || i.groupType === S.GroupType.DEFAULT_ANNOUNCEMENT_GROUP;
                return (0, F.jsx)("div", {
                    className: (0, p.default)(e.xstyle),
                    children: (0, F.jsx)(T.PhotoPickerLoadable, {
                        type: _,
                        id: n.id,
                        attachToChat: !0,
                        pending: g,
                        startImage: a.imgFull,
                        readOnly: j,
                        onImageSet: function(e, t) {
                            var n;
                            x(!0), n = e && t ? (0, w.setProfilePic)(a, e, t) : (0, w.deleteProfilePic)(a), (0, I.default)(n, C).catch((0, s.catchAbort)((function() {}))).catch((0, u.filteredCatch)(b.ActionError, (function() {
                                __LOG__(3)`GroupInfoDrawer: failed to set/delete group image`, f(!d)
                            }))).finally((function() {
                                x(!1)
                            }))
                        }
                    }, String(d))
                })
            }
            var Y = {
                marginTop: "hymafltn",
                marginEnd: "jnwc1y2a",
                marginBottom: "ngycyvoj",
                marginStart: "svoq16ka"
            };

            function z(e) {
                var t = (0, L.useModelValues)(e.chat.contact, ["name"]),
                    n = (0, L.useModelValues)((0, c.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["creation", "restrict", "support"]),
                    a = (0, B.default)(),
                    o = function() {
                        var n = (0, r.default)(i.default.mark((function n(r) {
                            var o;
                            return i.default.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if ((o = (0, C.default)(r)) !== t.name) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 3:
                                        return n.next = 5, (0, I.default)((0, A.setGroupSubject)(e.chat, o), a).catch((0, s.catchAbort)((function() {}))).catch((function() {
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
                    }();
                return n.support ? (0, F.jsx)(N.TextHeader, {
                    className: (0, p.default)(Y),
                    level: "2",
                    theme: "large",
                    children: (0, F.jsx)(E.GroupName, {
                        chat: e.chat,
                        groupMetadata: n,
                        breakWord: !0
                    })
                }) : (0, F.jsx)(j.default, {
                    subject: t.name,
                    onSave: o,
                    newChatInfo: e.newChatInfo,
                    textInputProps: {
                        editable: n.canSetSubject(),
                        editRestrictionInfo: n.restrict ? function() {
                            v.Cmd.openModal((0, F.jsx)(g.default, {
                                onOK: function() {
                                    return v.Cmd.closeModal()
                                },
                                okText: f.fbt._("OK", null, {
                                    hk: "2KEeHb"
                                }),
                                children: f.fbt._("Only admins can edit this group's info", null, {
                                    hk: "1a2ztg"
                                })
                            }))
                        } : void 0
                    }
                })
            }
        },
        80816: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.chat,
                    a = e.onParticipantPromote,
                    _ = e.onParticipantRemove,
                    j = e.onDemoteAdmin,
                    S = e.onVerification,
                    y = (0, x.default)(),
                    k = null === (t = n.groupMetadata) || void 0 === t ? void 0 : t.participants;
                (0, C.useListener)(k, "add remove reset", (function() {
                    null != k && y()
                }));
                var E, T = (0, s.useState)(null),
                    M = (0, i.default)(T, 2),
                    w = M[0],
                    I = M[1],
                    P = function(e) {
                        (0, f.findChat)(e).then((function(e) {
                            u.Cmd.closeModal(), u.Cmd.openChatFromUnread(e)
                        }))
                    };
                w && (E = (0, b.jsx)(v.UIE, {
                    displayName: "ChatContextMenu",
                    escapable: !0,
                    popable: !0,
                    requestDismiss: function() {
                        I(null)
                    },
                    children: (0, b.jsx)(g.default, {
                        contextMenu: w
                    })
                }));
                return (0, b.jsxs)(b.Fragment, {
                    children: [(0, b.jsx)(c.default, {
                        title: l.fbt._("Search Participants", null, {
                            hk: "M6lxB"
                        }),
                        filter: function(e) {
                            var t = n.groupMetadata;
                            return !(null == t || !t.participants.get(e.id.toString()))
                        },
                        onCancel: function() {
                            u.Cmd.closeModal()
                        },
                        openContextOnClick: !0,
                        contextEnabled: function() {
                            return !1
                        },
                        contextMenu: function(e) {
                            return !o.default.equals((0, h.getMaybeMeUser)(), e)
                        },
                        onContext: function(e, t) {
                            var i = (0, r.default)(n.groupMetadata, "chat.groupMetadata").participants,
                                s = i.assertGet(t.id.toString()),
                                c = [];
                            if (i.canPromote(s)) {
                                var f = a.bind(null, s, !1);
                                c.push((0, b.jsx)(d.DropdownItem, {
                                    a8n: "mi-grp-promote-admin",
                                    action: f,
                                    children: m.default.t(604)
                                }, "promote"))
                            }
                            if (i.canRemove(s)) {
                                var v = _.bind(null, s, !1);
                                c.push((0, b.jsx)(d.DropdownItem, {
                                    a8n: "mi-grp-remove-participant",
                                    action: v,
                                    children: m.default.t(608)
                                }, "remove"))
                            }
                            p.GK.supportsFeature(p.GK.F.GROUPS_V_3) && i.canDemote(s) && c.push((0, b.jsx)(d.DropdownItem, {
                                a8n: "mi-grp-verify-identify",
                                action: function() {
                                    return j(s)
                                },
                                children: l.fbt._("Dismiss as admin", null, {
                                    hk: "243sNl"
                                })
                            }, "demote-admin")), p.GK.supportsFeature(p.GK.F.MD_BACKEND) && i.canVerifyIdentity(s) && c.push((0, b.jsx)(d.DropdownItem, {
                                a8n: "mi-grp-verify-identify",
                                action: function() {
                                    u.Cmd.closeModal(), null == S || S(s.contact)
                                },
                                children: l.fbt._("Verify Security Code", null, {
                                    hk: "1vTVgt"
                                })
                            }, "verify-identity")), o.default.equals((0, h.getMaybeMeUser)(), s.id) || c.push((0, b.jsx)(d.DropdownItem, {
                                action: P.bind(null, s.contact.id),
                                children: m.default.t(613, {
                                    author: s.contact.formattedName
                                })
                            }, "message author")), I({
                                contactId: t.id,
                                menu: c,
                                anchor: e.anchor,
                                event: e.anchor ? void 0 : e
                            })
                        },
                        showNotifyName: !0,
                        listenForAdminChange: !0,
                        participantCollection: (0, r.default)(e.chat.groupMetadata, "props.chat.groupMetadata").participants
                    }), E]
                })
            };
            var i = a(n(63038)),
                r = a(n(272)),
                o = a(n(67082)),
                l = n(48360),
                s = n(67294),
                u = n(65901),
                c = a(n(71562)),
                d = n(94680),
                f = n(68985),
                h = n(1577),
                p = n(38032),
                m = a(n(45159)),
                v = n(16835),
                g = a(n(93820)),
                x = a(n(57811)),
                C = n(8413),
                b = n(85893)
        },
        20147: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onClick;
                if ("new-chat-info" === e.theme) {
                    var n = (0, c.jsx)(u.TextSpan, {
                            theme: "title",
                            children: i.fbt._("Security", null, {
                                hk: "2BYJDI"
                            })
                        }),
                        a = (0, c.jsx)(u.TextDiv, {
                            theme: "muted",
                            children: i.fbt._("Click to learn how messages and calls are secured.", null, {
                                hk: "1UxhjE"
                            })
                        });
                    return (0, c.jsx)(o.default, {
                        icon: "lock",
                        onClick: t,
                        title: n,
                        secondaryTitle: a
                    })
                }
                return (0, c.jsxs)(l.default, {
                    onClick: t,
                    side: (0, c.jsx)(s.default, {
                        name: "lock",
                        className: (0, r.default)(f)
                    }),
                    multiline: !0,
                    children: [(0, c.jsx)("div", {
                        className: (0, r.default)(d),
                        children: (0, c.jsx)(u.TextSpan, {
                            theme: "title",
                            children: i.fbt._("Security", null, {
                                hk: "2BYJDI"
                            })
                        })
                    }), (0, c.jsx)(u.TextDiv, {
                        theme: "muted",
                        children: i.fbt._("Click to learn how messages and calls are secured.", null, {
                            hk: "1UxhjE"
                        })
                    })]
                })
            };
            var i = n(48360),
                r = a(n(56720)),
                o = a(n(98350)),
                l = a(n(81218)),
                s = a(n(7665)),
                u = n(22552),
                c = n(85893),
                d = {
                    marginBottom: "brac1wpa"
                },
                f = {
                    color: "jq3rn4u7"
                }
        },
        25319: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = (0, r.useState)((0, o.getNewChatInfo)()),
                    t = (0, i.default)(e, 2),
                    n = t[0],
                    a = t[1];
                return (0, l.useListener)(o.UserPrefsEvent, o.UserPrefsEvent.NEW_CHAT_INFO_CHANGE, (function(e) {
                    a(e)
                })), n
            };
            var i = a(n(63038)),
                r = n(67294),
                o = n(1577),
                l = n(8413)
        },
        53906: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, r.useState)(),
                    n = (0, i.default)(t, 2)[1],
                    a = (0, r.useState)(),
                    d = (0, i.default)(a, 2)[1];
                if ((0, l.useListener)(o.Conn, "change:isVoipInitialized", (function() {
                        n(o.Conn.isVoipInitialized)
                    })), (0, l.useListener)(s, "change:activeCall", (function() {
                        d(s.activeCall)
                    })), e) return {
                    isVoiceCallEnabled: c.isVoiceCallEnabled(e),
                    isVideoCallEnabled: c.isVideoCallEnabled(e),
                    canStartVoiceCall: !e.isMe && c.canStartCall(e),
                    canStartVideoCall: !e.isMe && c.canStartVideoCall(e),
                    startVoiceCall: function() {
                        c.checkIfCanStartCall({
                            contact: e,
                            isVideo: !1
                        }) && u.callStart(e.id, !1)
                    },
                    startVideoCall: function() {
                        c.checkIfCanStartCall({
                            contact: e,
                            isVideo: !0
                        }) && u.callStart(e.id, !0)
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
            var i = a(n(63038)),
                r = n(67294),
                o = n(73929),
                l = n(8413),
                s = n(53104).CallCollection,
                u = n(77273).Voip,
                c = n(89703).default
        },
        96178: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                if (s.GK.supportsFeature(s.GK.F.MD_BACKEND)) {
                    var t, n = e.onClick,
                        a = e.text,
                        f = (0, d.jsx)(u.default, {
                            name: "lock",
                            className: l.default.icon
                        });
                    if ("new-chat-info" === e.theme) {
                        var h, p = (0, d.jsx)(c.TextSpan, {
                                theme: "title",
                                children: null !== (h = e.title) && void 0 !== h ? h : i.fbt._("Encryption", null, {
                                    hk: "a7CfR"
                                })
                            }),
                            m = (0, d.jsx)(c.TextDiv, {
                                theme: "muted",
                                children: a
                            });
                        return (0, d.jsx)(r.default, {
                            onClick: n,
                            icon: "lock",
                            title: p,
                            secondaryTitle: m
                        })
                    }
                    return (0, d.jsxs)(o.default, {
                        onClick: n,
                        side: f,
                        multiline: !0,
                        children: [(0, d.jsx)("div", {
                            className: l.default.header,
                            children: (0, d.jsx)(c.TextSpan, {
                                theme: "title",
                                children: null !== (t = e.title) && void 0 !== t ? t : i.fbt._("Encryption", null, {
                                    hk: "a7CfR"
                                })
                            })
                        }), (0, d.jsx)(c.TextDiv, {
                            theme: "muted",
                            children: a
                        })]
                    })
                }
                return null
            };
            var i = n(48360),
                r = a(n(98350)),
                o = a(n(81218)),
                l = a(n(18551)),
                s = n(38032),
                u = a(n(7665)),
                c = n(22552),
                d = n(85893)
        },
        11465: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(29521)),
                r = n(15960),
                o = a(n(67082)),
                l = n(48360),
                s = n(67294),
                u = n(65901),
                c = a(n(53187)),
                d = a(n(81218)),
                f = a(n(18345)),
                h = n(19288),
                p = a(n(46821)),
                m = n(1577),
                v = n(2629),
                g = a(n(47555)),
                x = a(n(54063)),
                C = n(26224),
                b = n(12231),
                _ = n(87547),
                j = n(64803),
                S = n(99451),
                y = n(43890),
                k = n(22552),
                E = n(69283),
                T = a(n(93958)),
                M = n(85893),
                w = function(e) {
                    var t = e.isRestricted,
                        n = e.onClick;
                    return (0, M.jsxs)(d.default, {
                        onClick: n,
                        multiline: !0,
                        children: [(0, M.jsx)("div", {
                            className: g.default.header,
                            children: (0, M.jsx)(k.TextSpan, {
                                theme: "title",
                                children: l.fbt._("Edit group info", null, {
                                    hk: "2rhyLl"
                                })
                            })
                        }), (0, M.jsx)(k.TextDiv, {
                            theme: "muted",
                            children: t ? l.fbt._("Only admins", null, {
                                hk: "1shXeT"
                            }) : l.fbt._("All participants", null, {
                                hk: "2YNQNN"
                            })
                        })]
                    })
                },
                I = function(e) {
                    var t = e.isAnnouncement,
                        n = e.onClick;
                    return (0, M.jsxs)(d.default, {
                        onClick: n,
                        multiline: !0,
                        children: [(0, M.jsx)("div", {
                            className: g.default.header,
                            children: (0, M.jsx)(k.TextSpan, {
                                theme: "title",
                                children: l.fbt._("Send messages", null, {
                                    hk: "2zKwxL"
                                })
                            })
                        }), (0, M.jsx)(k.TextDiv, {
                            theme: "muted",
                            children: t ? l.fbt._("Only admins", null, {
                                hk: "1shXeT"
                            }) : l.fbt._("All participants", null, {
                                hk: "2YNQNN"
                            })
                        })]
                    })
                },
                P = function(e) {
                    var t = e.isNoFrequentlyForwarded,
                        n = e.onClick,
                        a = y.ServerProps.hfmStringChanges ? l.fbt._("Messages forwarded many times", null, {
                            hk: "2Neytn"
                        }) : l.fbt._("Frequently forwarded messages", null, {
                            hk: "1OxFLx"
                        });
                    return (0, M.jsxs)(d.default, {
                        onClick: n,
                        multiline: !0,
                        children: [(0, M.jsx)("div", {
                            className: g.default.header,
                            children: (0, M.jsx)(k.TextSpan, {
                                theme: "title",
                                children: a
                            })
                        }), (0, M.jsx)(k.TextDiv, {
                            theme: "muted",
                            children: t ? l.fbt._("Don't allow", null, {
                                hk: "3uBuwQ"
                            }) : l.fbt._("Allow", null, {
                                hk: "2pdVOn"
                            })
                        })]
                    })
                };

            function A(e, t) {
                var n = (0, E.useModelValues)(e.chat, ["id"]),
                    a = (0, E.useModelValues)(e.groupMetadata, ["restrict", "announce", "noFrequentlyForwarded", "participants", "owner", "groupType"]),
                    s = (0, T.default)(),
                    y = function(e) {
                        u.Cmd.openModal((0, M.jsx)(x.default, {
                            settingType: e,
                            chat: n,
                            groupMetadata: a
                        }), {
                            transition: "modal",
                            uim: s
                        })
                    },
                    A = function() {
                        return a.participants.filter((function(e) {
                            return e.isAdmin
                        })).map((function(e) {
                            return e.contact
                        }))
                    },
                    N = function(e) {
                        return !!a.participants.get(e.id)
                    },
                    D = function(e) {
                        var t = o.default.equals(e, a.owner),
                            n = (0, m.getMaybeMeUser)().equals(e),
                            i = !0 === a.isParentGroup && (0, v.cadminSelfDemoteEnabled)();
                        return t || n && !i
                    },
                    O = function(e) {
                        var t = a.participants,
                            r = t.filter((function(e) {
                                return e.isAdmin
                            })),
                            o = (0, i.default)(e, r, (function(e, t) {
                                return e.id.equals(t.id)
                            })).map((function(e) {
                                return t.assertGet(e.id)
                            })),
                            l = (0, i.default)(r, e, (function(e, t) {
                                return e.id.equals(t.id)
                            }));
                        o.length > 0 && (o.forEach((function(e) {
                            e.contact.pendingAction++
                        })), (0, _.promoteParticipants)(n, o).finally((function() {
                            o.forEach((function(e) {
                                e.contact.pendingAction--
                            }))
                        }))), l.length > 0 && (l.forEach((function(e) {
                            e.contact.pendingAction++
                        })), (0, _.demoteParticipants)(n, l).finally((function() {
                            l.forEach((function(e) {
                                e.contact.pendingAction--
                            }))
                        }))), u.Cmd.closeModal()
                    };
                return (0, M.jsxs)(c.default, {
                    ref: t,
                    theme: "striped",
                    children: [(0, M.jsx)(h.DrawerHeader, {
                        title: l.fbt._("Group settings", null, {
                            hk: "3sS0Vl"
                        }),
                        type: h.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onClose
                    }), (0, M.jsxs)(f.default, {
                        children: [(0, M.jsx)(p.default, {
                            animation: !1,
                            children: (0, M.jsx)(w, {
                                onClick: function() {
                                    y(r.GROUP_SETTING_TYPE.RESTRICT)
                                },
                                isRestricted: a.restrict
                            })
                        }), (0, M.jsx)("div", {
                            className: g.default.restrictText,
                            children: (0, M.jsx)(k.TextSpan, {
                                theme: "muted",
                                children: l.fbt._("Choose who can change this group’s subject, icon, description and disappearing messages setting.", null, {
                                    hk: "1cqpzS"
                                })
                            })
                        }), (0, M.jsxs)(p.default, {
                            animation: !1,
                            children: [(0, v.communitiesEnabled)() && a.groupType === C.GroupType.DEFAULT_ANNOUNCEMENT_GROUP ? null : (0, M.jsx)(I, {
                                onClick: function() {
                                    y(r.GROUP_SETTING_TYPE.ANNOUNCEMENT)
                                },
                                isAnnouncement: a.announce
                            }), (0, b.isAdminHfmToggleEnabled)() ? (0, M.jsx)(P, {
                                onClick: function() {
                                    y(r.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED)
                                },
                                isNoFrequentlyForwarded: a.noFrequentlyForwarded
                            }) : null]
                        }), (0, M.jsx)(p.default, {
                            animation: !1,
                            children: (0, M.jsx)(d.default, {
                                onClick: function() {
                                    u.Cmd.openModal((0, M.jsx)(j.SelectModal, {
                                        onConfirm: O,
                                        getInitialItems: A,
                                        isDisabled: D,
                                        isSelected: D,
                                        filter: N,
                                        title: l.fbt._("Edit group admins", null, {
                                            hk: "1BOEkM"
                                        }),
                                        useShortName: !0,
                                        useAllContacts: !0,
                                        listType: j.ListType.PARTICIPANT_MANAGE_MODAL,
                                        singleSelectionFooterType: S.FooterType.CONFIRM,
                                        multipleSelectionFooterType: S.FooterType.CONFIRM,
                                        shouldShowSelectionSummary: !1
                                    }))
                                },
                                multiline: !0,
                                children: (0, M.jsx)("div", {
                                    className: g.default.header,
                                    children: (0, M.jsx)(k.TextSpan, {
                                        theme: "title",
                                        children: l.fbt._("Edit group admins", null, {
                                            hk: "1BOEkM"
                                        })
                                    })
                                })
                            })
                        })]
                    })]
                })
            }
            var N = (0, s.forwardRef)(A);
            t.default = N
        },
        54063: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.settingType,
                    n = (0, p.useModelValues)(e.chat, ["id"]),
                    a = (0, p.useModelValues)(e.groupMetadata, ["restrict", "announce", "noFrequentlyForwarded"]),
                    v = (0, o.useMemo)((function() {
                        switch (t) {
                            case i.GROUP_SETTING_TYPE.ANNOUNCEMENT:
                            case i.GROUP_SETTING_TYPE.RESTRICT:
                                return [{
                                    label: r.fbt._("All participants", null, {
                                        hk: "2YNQNN"
                                    }),
                                    value: 0
                                }, {
                                    label: r.fbt._("Only admins", null, {
                                        hk: "1shXeT"
                                    }),
                                    value: 1
                                }];
                            case i.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
                                return [{
                                    label: r.fbt._("Allow", null, {
                                        hk: "2pdVOn"
                                    }),
                                    value: 0
                                }, {
                                    label: r.fbt._("Don't allow", null, {
                                        hk: "3uBuwQ"
                                    }),
                                    value: 1
                                }];
                            default:
                                return []
                        }
                    }), [t]),
                    g = (0, o.useMemo)((function() {
                        var e = a.restrict,
                            n = a.announce,
                            r = a.noFrequentlyForwarded;
                        switch (t) {
                            case i.GROUP_SETTING_TYPE.ANNOUNCEMENT:
                                return n ? 1 : 0;
                            case i.GROUP_SETTING_TYPE.RESTRICT:
                                return e ? 1 : 0;
                            case i.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
                                return r ? 1 : 0;
                            default:
                                return 0
                        }
                    }), [t, a]),
                    x = (0, o.useMemo)((function() {
                        switch (t) {
                            case i.GROUP_SETTING_TYPE.ANNOUNCEMENT:
                                return r.fbt._("Send messages", null, {
                                    hk: "2zKwxL"
                                });
                            case i.GROUP_SETTING_TYPE.RESTRICT:
                                return r.fbt._("Edit group info", null, {
                                    hk: "2rhyLl"
                                });
                            case i.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
                                return d.ServerProps.hfmStringChanges ? r.fbt._("Messages forwarded many times", null, {
                                    hk: "2Neytn"
                                }) : r.fbt._("Frequently forwarded messages", null, {
                                    hk: "1OxFLx"
                                });
                            default:
                                return ""
                        }
                    }), [t]),
                    C = (0, o.useMemo)((function() {
                        return t === i.GROUP_SETTING_TYPE.RESTRICT ? r.fbt._("Choose who can change this group’s subject, icon, description and disappearing messages setting.", null, {
                            hk: "1cqpzS"
                        }) : t === i.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED && (0, c.isAdminHfmToggleEnabled)() ? (0, m.jsxs)(m.Fragment, {
                            children: [r.fbt._("Choose to allow participants to send messages to the group that have been forwarded many times.", null, {
                                hk: "1PP9Ge"
                            }), " ", (0, m.jsx)(l.ExternalLink, {
                                href: (0, s.getFrequentlyForwardedFaqUrl)(),
                                children: u.default.t(554)
                            })]
                        }) : null
                    }), [t]);
                return (0, m.jsx)(h.default, {
                    options: v,
                    initialValue: g,
                    title: x,
                    onSelect: function(e) {
                        e !== g && (0, f.setGroupProperty)(n, t, e).catch((function() {
                            return function() {}
                        }))
                    },
                    explanation: C
                })
            };
            var i = n(15960),
                r = n(48360),
                o = n(67294),
                l = n(49012),
                s = n(29281),
                u = a(n(45159)),
                c = n(12231),
                d = n(43890),
                f = n(75367),
                h = a(n(75211)),
                p = n(69283),
                m = n(85893)
        },
        592: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(34575)),
                r = a(n(93913)),
                o = a(n(2205)),
                l = a(n(99842)),
                s = n(48360),
                u = n(67294),
                c = a(n(46821)),
                d = a(n(45159)),
                f = n(63641),
                h = n(9866),
                p = n(97319),
                m = a(n(62861)),
                v = a(n(61897)),
                g = n(68220),
                x = a(n(7665)),
                C = n(22552),
                b = n(85893),
                _ = function(e) {
                    (0, o.default)(n, e);
                    var t = (0, l.default)(n);

                    function n(e) {
                        var a;
                        return (0, i.default)(this, n), (a = t.call(this, e))._updateParticipants = function() {
                            a.setState({
                                participants: a.getParticipants(a.props.chat)
                            })
                        }, a.state = {
                            participants: a.getParticipants(e.chat)
                        }, a
                    }
                    return (0, r.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props.chat;
                            t.liveLocationQueried || h.LiveLocationCollection.getActive(t.id.toString()).then((function() {
                                t.liveLocationQueried = !0
                            })).catch((function() {})), this.props.listeners.add((0, g.unproxy)(t), "change:liveLocation", (function() {
                                var n = t.liveLocation;
                                n && (e._removeParticipantListener(n), e._addParticipantListener(n), e._updateParticipants())
                            }));
                            var n = t.liveLocation;
                            n && this._addParticipantListener(n)
                        }
                    }, {
                        key: "_addParticipantListener",
                        value: function(e) {
                            this.props.listeners.add(e.participants, "add remove", this._updateParticipants)
                        }
                    }, {
                        key: "_removeParticipantListener",
                        value: function(e) {
                            this.props.listeners.remove(e.participants, "add remove", this._updateParticipants)
                        }
                    }, {
                        key: "getParticipants",
                        value: function(e) {
                            var t = e.liveLocation;
                            return t ? t.participants.toArray() : []
                        }
                    }, {
                        key: "getText",
                        value: function() {
                            var e, t, n = this.props.chat,
                                a = this.state.participants,
                                i = 0;
                            if (a.forEach((function(n) {
                                    n.isMe ? e = !0 : (t || (t = n.contact), i++)
                                })), n.isGroup) return e ? 1 === a.length ? s.fbt._("You are sharing live location", null, {
                                hk: "4DvZgE"
                            }) : d.default.t(572, {
                                count: i,
                                _plural: i
                            }) : d.default.t(569, {
                                count: i,
                                _plural: i
                            });
                            if (e) {
                                if (1 === a.length) return s.fbt._("You are sharing live location", null, {
                                    hk: "4DvZgE"
                                });
                                if (t) return d.default.t(571, {
                                    name: t.formattedShortNameWithNonBreakingSpaces
                                })
                            } else if (t) return d.default.t(568, {
                                name: t.formattedShortNameWithNonBreakingSpaces
                            });
                            return ""
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.onClick;
                            if (!this.state.participants.length) return null;
                            var t = (0, b.jsx)(x.default, {
                                name: (0, p.liveLocationIcon)(!0)
                            });
                            return (0, b.jsx)(c.default, {
                                a8nText: "section-live-location",
                                theme: "padding",
                                title: s.fbt._("Live Location", null, {
                                    hk: "1LvIwY"
                                }),
                                titleOnClick: e,
                                children: (0, b.jsx)(m.default, {
                                    side: t,
                                    onClick: e,
                                    children: (0, b.jsx)(C.TextSpan, {
                                        theme: "title",
                                        children: this.getText()
                                    })
                                })
                            })
                        }
                    }]), n
                }(u.Component);
            _.CONCERNS = {
                chat: ["id", "isGroup", "liveLocation", "liveLocationQueried"]
            }, _.displayName = "LiveLocationRow";
            var j = (0, f.ListenerHOC)((0, v.default)(_, _.CONCERNS));
            t.default = j
        },
        36844: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MediaGalleryDrawer = M, t.TABS = void 0;
            var i = a(n(59713)),
                r = a(n(63038)),
                o = a(n(52628)),
                l = a(n(64709)),
                s = a(n(94184)),
                u = n(48360),
                c = n(67294),
                d = n(24224),
                f = a(n(48956)),
                h = a(n(53187)),
                p = a(n(18345)),
                m = n(19288),
                v = a(n(45159)),
                g = a(n(94836)),
                x = a(n(99540)),
                C = a(n(2130)),
                b = a(n(23845)),
                _ = a(n(34310)),
                j = n(43890),
                S = n(16835),
                y = a(n(39394)),
                k = a(n(60806)),
                E = n(85893),
                T = {
                    MEDIA: "media",
                    DOCS: "docs",
                    LINKS: "links",
                    PRODUCTS: "products"
                };

            function M(e) {
                var t = e.chat,
                    n = e.onProductDetail,
                    a = e.setProductsScrollOffset,
                    M = e.productsScrollOffset,
                    w = (0, c.useState)(e.initialTab),
                    I = (0, r.default)(w, 2),
                    P = I[0],
                    A = I[1],
                    N = (0, c.useState)(null),
                    D = (0, r.default)(N, 2),
                    O = D[0],
                    R = D[1],
                    L = (0, c.useState)(!1),
                    G = (0, r.default)(L, 2),
                    B = G[0],
                    F = G[1],
                    V = (0, y.default)((function() {
                        return new l.default([], (function(e) {
                            return e.id.toString()
                        }))
                    })),
                    U = function() {
                        B && (V.current.unsetAll(), F(!1))
                    },
                    H = function(e, t) {
                        B || F(!0), V.current.setVal(e, t), 0 === V.current.getSelected().length && U()
                    },
                    q = (0, c.useCallback)((function(e) {
                        var t = (0, o.default)(T).indexOf(P),
                            n = (0, o.default)(T).indexOf(e);
                        t !== n && V.current.unsetAll(), A(e), R(n > t ? "right" : "left"), F(!1)
                    }), [V, P]),
                    K = (0, c.useMemo)((function() {
                        var e = [{
                            tab: T.MEDIA,
                            title: v.default.t(597)
                        }, {
                            tab: T.DOCS,
                            title: v.default.t(396)
                        }, {
                            tab: T.LINKS,
                            title: v.default.t(555)
                        }];
                        j.ServerProps.productMediaAttachments && e.push({
                            tab: T.PRODUCTS,
                            title: u.fbt._("Products", null, {
                                hk: "3Ky71N"
                            })
                        });
                        var t = e.map((function(e) {
                                var t = (0, s.default)(C.default.menuItem, (0, i.default)({}, C.default.active, P === e.tab));
                                return (0, E.jsx)("button", {
                                    className: t,
                                    onClick: function() {
                                        return q(e.tab)
                                    },
                                    title: e.title,
                                    children: e.title
                                }, e.tab)
                            })),
                            n = (0, s.default)(C.default.menuTabsLists, j.ServerProps.productMediaAttachments ? C.default.fourTabs : C.default.threeTabs);
                        return (0, E.jsx)("div", {
                            className: n,
                            "data-active-tab": P,
                            children: t
                        })
                    }), [P, q]),
                    W = function() {
                        var e;
                        switch (P) {
                            case T.MEDIA:
                                e = (0, E.jsx)(x.default, {
                                    chat: t,
                                    mediaMsgs: t.getMediaMsgs(),
                                    selectable: B,
                                    onMessageSelect: H,
                                    selectedMessages: V.current,
                                    fullCollection: !0
                                });
                                break;
                            case T.LINKS:
                                e = (0, E.jsx)(g.default, {
                                    chat: t,
                                    linkMsgs: t.getLinkMsgs(),
                                    selectable: B,
                                    onMessageSelect: H,
                                    selectedMessages: V.current
                                });
                                break;
                            case T.DOCS:
                                e = (0, E.jsx)(f.default, {
                                    chat: t,
                                    docMsgs: t.getDocMsgs(),
                                    selectable: B,
                                    onMessageSelect: H,
                                    selectedMessages: V.current
                                });
                                break;
                            case T.PRODUCTS:
                                e = (0, E.jsx)(_.default, {
                                    chat: t,
                                    productMsgs: t.getProductMsgs(),
                                    selectable: B,
                                    onMessageSelect: H,
                                    selectedMessages: V.current,
                                    onProductDetail: n,
                                    setScrollOffset: a,
                                    scrollOffset: M
                                })
                        }
                        return e
                    }(),
                    Y = [T.MEDIA, T.DOCS].includes(P),
                    z = B ? (0, E.jsx)(S.UIE, {
                        displayName: "MediaMultiSelect",
                        escapable: !0,
                        requestDismiss: U,
                        children: (0, E.jsx)(b.default, {
                            chat: t,
                            noSortOnForward: !0,
                            theme: "mediaGallery",
                            toastPosition: d.ToastPosition.RIGHT,
                            downloadButton: Y,
                            selectedMessages: V.current,
                            onCancel: U
                        })
                    }) : null,
                    X = "right" === O ? "slide-forward" : "slide-back";
                return (0, E.jsxs)(h.default, {
                    theme: "gallery",
                    children: [(0, E.jsx)(m.DrawerHeader, {
                        title: " ",
                        onBack: e.onBack,
                        rtlFixIfOnDarwin: !0,
                        type: m.DRAWER_HEADER_TYPE.MULTI_MEDIA_GALLERY
                    }), z, K, (0, E.jsx)(p.default, {
                        "data-list-scroll-container": !0,
                        children: (0, E.jsx)(k.default, {
                            transitionName: X,
                            className: C.default.column,
                            children: (0, E.jsx)("div", {
                                className: C.default.multimediaGallery,
                                children: (0, E.jsx)("div", {
                                    className: C.default.column,
                                    children: W
                                })
                            }, P)
                        })
                    })]
                })
            }
            t.TABS = T, M.defaultProps = {
                initialTab: T.MEDIA,
                productsScrollOffset: 0
            }
        },
        53304: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, u.useModelValues)(e.mediaData, ["mediaStage", "renderableUrl"]);
                return (0, c.jsx)(s.default, {
                    mediaData: t,
                    placeholderRenderer: h,
                    children: function(t) {
                        return (0, c.jsx)(f, {
                            url: t,
                            msg: e.msg
                        })
                    }
                })
            };
            var i = a(n(94184)),
                r = a(n(93603)),
                o = a(n(45159)),
                l = a(n(16973)),
                s = a(n(47251)),
                u = n(69283),
                c = n(85893),
                d = function(e) {
                    e.stopPropagation()
                };

            function f(e) {
                var t = e.url,
                    n = e.msg;
                return (0, c.jsx)(r.default, {
                    url: t,
                    className: l.default.mediaViewerAudio,
                    onClick: d,
                    autoPlay: !0,
                    msg: n,
                    controls: !0,
                    children: o.default.t(149)
                })
            }

            function h() {
                return (0, c.jsx)("div", {
                    className: (0, i.default)(l.default.imageAudio, l.default.mediaViewerPlaceholder),
                    onClick: d
                })
            }
        },
        17044: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onHightlightCloseEnd,
                    n = e.msgIndexInAlbum,
                    a = e.onViewOnceInfoClick,
                    N = e.onGoToMsgClick,
                    D = e.onDownloadClick,
                    O = e.onReplyClick,
                    R = e.onDeleteClick,
                    L = e.onUnstarClick,
                    G = e.onStarClick,
                    B = e.openForwardFlow,
                    F = e.onMsgInfoClick,
                    V = (0, s.useRef)(null),
                    U = (0, I.useModelValues)(e.msg, ["id", "star", "isGroupMsg", "chat", "type", "isGif", "isViewOnce", "sender", "senderObj", "t", "isSentByMe", "isStickerMsg"]),
                    H = (0, I.useModelValues)(e.mediaData, ["filehash", "mediaStage", "renderableUrl"]),
                    q = (0, s.useState)(null),
                    K = (0, i.default)(q, 2),
                    W = K[0],
                    Y = K[1],
                    z = (0, s.useRef)(null),
                    X = function() {
                        Y(null)
                    };
                (0, w.useListener)(V.current, "animationend", (function() {
                    t()
                }));
                var Z = U.displayName(!0, !0);
                U.isGroupMsg && (Z += " @ " + U.chat.title());
                var $, J = function() {
                        return U.chat.isGroup ? l.fbt._("Report group", null, {
                            hk: "23NLqw"
                        }) : v.default.t(722, {
                            contactInfo: U.senderObj.displayName
                        })
                    },
                    Q = function(e) {
                        var t = U.chat;
                        t && (e ? t.isGroup ? (0, y.sendSpamExitClear)(t, k.SpamFlow.MediaViewer) : (0, y.sendSpamBlockClear)(t, k.SpamFlow.MediaViewer) : (0, y.sendSpamReport)(t, k.SpamFlow.MediaViewer)), d.Cmd.closeModal()
                    },
                    ee = function() {
                        d.Cmd.openModal((0, A.jsx)(P.default, {
                            isBusiness: U.senderObj.isBusiness,
                            isGroup: U.chat.isGroup,
                            onReport: Q,
                            onCancel: function() {
                                return d.Cmd.closeModal()
                            },
                            title: J()
                        }))
                    },
                    te = function() {
                        (0, b.default)(U)
                    },
                    ne = function() {
                        return !U.isViewOnce && (!!H.renderableUrl || H.mediaStage === x.MEDIA_DATA_STAGE.RESOLVED)
                    },
                    ae = function() {
                        var e = [];
                        return (U.canPrivateReply() || U.canPrivateReplyInRestrictedGrp()) && e.push((0, A.jsx)(p.DropdownItem, {
                            a8n: "mi-msg-reply",
                            action: te,
                            children: l.fbt._("Reply privately", null, {
                                hk: "1XQeK2"
                            })
                        }, "private_reply")), U.isViewOnce ? e.push((0, A.jsx)(p.DropdownItem, {
                            action: ee,
                            children: J()
                        }, "dropdownMsgInfo")) : (U.isSentByMe && e.push((0, A.jsx)(p.DropdownItem, {
                            action: F,
                            children: v.default.t(617)
                        }, "dropdownMsgInfo")), e.push((0, A.jsx)(p.DropdownItem, {
                            action: N,
                            children: l.fbt._("Go to message", null, {
                                hk: "B1anG"
                            })
                        }, "dropdownGoToMsg"), (0, A.jsx)(p.DropdownItem, {
                            action: D,
                            disabled: !ne(),
                            children: l.fbt._("Download", null, {
                                hk: "1g5Jix"
                            })
                        }, "dropdownDownload"))), (0, A.jsx)(C.MenuBarItem, {
                            icon: (0, A.jsx)(E.default, {
                                name: "menu"
                            }),
                            title: v.default.t(611),
                            children: (0, A.jsx)(h.Dropdown, {
                                type: "dropdown_menu",
                                flipOnRTL: !0,
                                dirX: h.DirX.LEFT,
                                children: e
                            }, "MediaPanelHeaderDropdown")
                        }, "btnMenu")
                    },
                    ie = function() {
                        var e, t, n;
                        return U.star ? (e = L, t = "unstar-btn", n = v.default.t(796)) : (e = G, t = "star-btn", n = v.default.t(772)), (0, A.jsx)(C.MenuBarItem, {
                            icon: (0, A.jsx)(E.default, {
                                name: t
                            }),
                            title: n,
                            onClick: e
                        }, t)
                    },
                    re = function() {
                        return U.type === r.MSG_TYPE.STICKER ? null : (0, A.jsx)(C.MenuBarItem, {
                            icon: (0, A.jsx)(E.default, {
                                containerRef: z,
                                name: "reactions-media",
                                width: 20
                            }),
                            title: l.fbt._("React to message", null, {
                                hk: "1MagBh"
                            }),
                            onClick: function() {
                                ! function() {
                                    if ((0, o.canReactToMessage)(U)) {
                                        var e = {
                                            dirY: h.DirY.BOTTOM,
                                            dirX: h.DirX.CENTER,
                                            type: "reaction_send_tray",
                                            menu: (0, A.jsx)(S.SendReactionsTrayContainer, {
                                                msg: U,
                                                selectedCallback: function(e) {
                                                    e !== j.MORE_REACTIONS && (0, _.sendReactionToMsg)(U, e).catch((function(e) {
                                                        __LOG__(4, void 0, new Error)`sendReactionMsg: error sending from media modal ${e}`
                                                    })), X()
                                                }
                                            }),
                                            flipOnRTL: !1,
                                            anchor: z.current
                                        };
                                        Y(e)
                                    }
                                }()
                            }
                        }, "btnAddReaction")
                    },
                    oe = function() {
                        return (0, A.jsx)(C.MenuBarItem, {
                            icon: (0, A.jsx)(E.default, {
                                name: "forward"
                            }),
                            title: v.default.t(465),
                            onClick: B
                        }, "btnForward")
                    };
                W && ($ = (0, A.jsx)(T.UIE, {
                    displayName: "MsgReaction",
                    escapable: !0,
                    popable: !0,
                    requestDismiss: X,
                    children: (0, A.jsx)(M.default, {
                        contextMenu: W
                    })
                }));
                return (0, A.jsxs)("div", {
                    className: g.default.mediaPanelHeader,
                    children: [(0, A.jsx)("div", {
                        className: g.default.info,
                        children: (0, A.jsx)(u.default, {
                            idle: !0,
                            image: (0, A.jsx)(f.DetailImage, {
                                id: U.sender,
                                size: 40
                            }),
                            primary: (0, A.jsx)(m.EmojiText, {
                                ellipsify: !0,
                                text: Z
                            }),
                            secondary: c.Clock.relativeDateAndTimeStr(U.t),
                            theme: "media"
                        })
                    }), (0, A.jsx)("div", {
                        className: g.default.mediaPanelTools,
                        children: (0, A.jsxs)(C.MenuBar, {
                            theme: "strong",
                            children: [U.isViewOnce ? [(0, A.jsx)(C.MenuBarItem, {
                                icon: (0, A.jsx)(E.default, {
                                    name: "view-once",
                                    className: g.default.voIcon
                                }),
                                title: l.fbt._("View once info", null, {
                                    hk: "47XkZ4"
                                }),
                                onClick: a
                            }, "btnViewOnceInfo"), ae()] : n >= 0 ? [U.canReply() ? (0, A.jsx)(C.MenuBarItem, {
                                icon: (0, A.jsx)(E.default, {
                                    name: "reply"
                                }),
                                title: l.fbt._("Reply", null, {
                                    hk: "1C7DPa"
                                }),
                                onClick: O
                            }, "btnReply") : null, U.canStar() ? ie() : null, (0, o.canReactToMessage)(U) ? re() : null, (0, A.jsx)(C.MenuBarItem, {
                                icon: (0, A.jsx)(E.default, {
                                    name: "delete"
                                }),
                                title: l.fbt._("Delete", null, {
                                    hk: "2KhPUX"
                                }),
                                onClick: R
                            }, "btnDelete"), U.canForward() ? oe() : null, ae()].filter(Boolean) : (le = [], U.isStickerMsg || le.push((0, A.jsx)(C.MenuBarItem, {
                                icon: (0, A.jsx)(E.default, {
                                    name: "bubble"
                                }),
                                title: l.fbt._("Go to message", null, {
                                    hk: "B1anG"
                                }),
                                onClick: N
                            }, "btnGoToMsg")), U.isStickerMsg && le.push((0, A.jsx)(C.MenuBarItem, {
                                icon: (0, A.jsx)(E.default, {
                                    name: "reply"
                                }),
                                title: l.fbt._("Reply", null, {
                                    hk: "1C7DPa"
                                }),
                                onClick: O
                            }, "btnReplyToMsg")), U.canStar() && le.push(ie()), U.isStickerMsg && le.push((0, A.jsx)(C.MenuBarItem, {
                                icon: (0, A.jsx)(E.default, {
                                    name: "delete"
                                }),
                                title: l.fbt._("Delete", null, {
                                    hk: "2KhPUX"
                                }),
                                onClick: R
                            }, "btnDelete")), (0, o.canReactToMessage)(U) && le.push(re()), U.canForward() && le.push(oe()), U.isStickerMsg || le.push((0, A.jsx)(C.MenuBarItem, {
                                icon: (0, A.jsx)(E.default, {
                                    name: "download"
                                }),
                                title: l.fbt._("Download", null, {
                                    hk: "1g5Jix"
                                }),
                                disabled: !ne(),
                                onClick: D
                            }, "btnDownload")), le.filter(Boolean)), (0, A.jsx)(C.MenuBarItem, {
                                a8nText: "btn-close",
                                icon: (0, A.jsx)(E.default, {
                                    className: e.isHighlightClose ? g.default.highlightClose : null,
                                    containerRef: V,
                                    name: "x-viewer"
                                }),
                                title: l.fbt._("Close", null, {
                                    hk: "19Jpec"
                                }),
                                onClick: e.onClose
                            })]
                        }, "media-panel-header")
                    }), $]
                });
                var le
            };
            var i = a(n(63038)),
                r = n(40787),
                o = n(36708),
                l = n(48360),
                s = n(67294),
                u = a(n(88186)),
                c = n(10399),
                d = n(65901),
                f = n(66834),
                h = n(98169),
                p = n(94680),
                m = n(73008),
                v = a(n(45159)),
                g = a(n(69863)),
                x = n(41655),
                C = n(91823),
                b = a(n(74579)),
                _ = n(22242),
                j = n(51898),
                S = n(4931),
                y = n(43329),
                k = n(24170),
                E = a(n(7665)),
                T = n(16835),
                M = a(n(93820)),
                w = n(8413),
                I = n(69283),
                P = a(n(43780)),
                A = n(85893)
        },
        83200: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(67294),
                r = a(n(56720)),
                o = a(n(98870)),
                l = n(27968),
                s = a(n(22935)),
                u = a(n(47251)),
                c = a(n(81309)),
                d = a(n(34424)),
                f = a(n(50507)),
                h = a(n(89115)),
                p = n(65803),
                m = a(n(38933)),
                v = n(69283),
                g = n(85893),
                x = {
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
                        a = (0, v.useModelValues)(e.mediaData, ["mediaStage", "fullWidth", "fullHeight", "isFirstParty", "stickerPackId", "stickerPackName", "stickerPackPublisher"]),
                        C = (0, i.useRef)(),
                        b = (0, m.default)(t, C),
                        _ = function(e) {
                            var t;
                            null === (t = C.current) || void 0 === t || t.onClick(e)
                        },
                        j = a.isFirstParty ? (0, g.jsx)(o.default, {
                            stickerPackId: a.stickerPackId,
                            onStickerPackView: e.onStickerPackView,
                            stickerPackViewDelay: e.stickerPackViewDelay
                        }) : (0, g.jsx)(p.StickerDetailsStickerPackInfo, {
                            name: a.stickerPackName,
                            publisher: a.stickerPackPublisher,
                            theme: p.Theme.MediaViewer
                        });
                    return (0, g.jsxs)(l.FlexColumn, {
                        align: "center",
                        justify: "center",
                        xstyle: x.container,
                        children: [(0, g.jsx)("div", {
                            className: (0, r.default)(x.container, x.stickerContainer),
                            children: (0, g.jsx)(d.default, {
                                ref: b,
                                width: a.fullWidth,
                                height: a.fullHeight,
                                onZoomIn: e.onImgZoomIn,
                                msg: n,
                                children: (0, g.jsx)(u.default, {
                                    mediaData: a,
                                    placeholderRenderer: function() {
                                        return (0, g.jsx)(h.default, {
                                            size: 376
                                        })
                                    },
                                    downloadMedia: function() {
                                        return null == n ? void 0 : n.downloadMedia({
                                            downloadEvenIfExpensive: !1,
                                            rmrReason: f.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                                            isUserInitiated: !1
                                        })
                                    },
                                    children: function(t) {
                                        return (0, g.jsx)(s.default, {
                                            className: (0, r.default)(c.default.content),
                                            onClick: _,
                                            src: t,
                                            onLoad: e.onLoad
                                        })
                                    }
                                })
                            })
                        }), j]
                    })
                },
                b = (0, i.forwardRef)(C);
            t.default = b
        },
        51751: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(34575)),
                r = a(n(93913)),
                o = a(n(2205)),
                l = a(n(99842)),
                s = n(36708),
                u = n(8587),
                c = n(67294),
                d = a(n(56720)),
                f = a(n(3228)),
                h = a(n(47934)),
                p = n(98585),
                m = n(98120),
                v = a(n(45159)),
                g = n(41655),
                x = a(n(81309)),
                C = a(n(50507)),
                b = n(43604),
                _ = a(n(58497)),
                j = a(n(47149)),
                S = n(2099),
                y = a(n(61897)),
                k = a(n(61566)),
                E = n(85893),
                T = function(e) {
                    (0, o.default)(n, e);
                    var t = (0, l.default)(n);

                    function n() {
                        var e;
                        (0, i.default)(this, n);
                        for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r))).state = {
                            played: !1,
                            size: {
                                width: 0,
                                height: 0
                            },
                            isFullscreenMode: !1,
                            displayReactionBubble: !0
                        }, e._setRefContainer = function(t) {
                            e.refContainer = t
                        }, e.stopPropagation = function(e) {
                            e.stopPropagation()
                        }, e._handleFullscreenToggle = function(t) {
                            e.setState({
                                isFullscreenMode: t
                            })
                        }, e
                    }
                    return (0, r.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.mediaData.isStreamable() || this.props.msg.downloadMedia({
                                downloadEvenIfExpensive: !0,
                                rmrReason: C.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                                isUserInitiated: !0
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.props.msg.mediaObject && this.props.msg.cancelDownload()
                        }
                    }, {
                        key: "closingMedia",
                        value: function() {
                            this.setState({
                                displayReactionBubble: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                n = t.msg,
                                a = t.mediaData,
                                i = t.onLoadedData,
                                r = a.isGif,
                                o = a.mediaStage === g.MEDIA_DATA_STAGE.RESOLVED || a.streamable && a.isStreamable();
                            o = o || n.isForcingRMR();
                            var l = null,
                                u = S.ReactionBubbleType.MEDIA_ITEM;
                            if (n && (0, s.shouldShowReactionBubble)(n, u) && (l = (0, E.jsx)(j.default, {
                                    msgIds: [n.id.toString()],
                                    reactionBubbleType: u,
                                    reactionBubbleVisible: this.state.displayReactionBubble
                                })), o) {
                                var c, m, C = v.default.t(815);
                                return !this.state.isFullscreenMode && (null == n ? void 0 : n.interactiveAnnotations) && n.interactiveAnnotations.length > 0 && (c = (0, E.jsx)(f.default, {
                                    annotations: n.interactiveAnnotations
                                })), m = r ? (0, E.jsxs)("div", {
                                    className: (0, d.default)(x.default.content),
                                    ref: this._setRefContainer,
                                    children: [(0, E.jsx)(k.default, {
                                        src: a.renderableUrl,
                                        onClick: this.stopPropagation,
                                        autoPlay: !0,
                                        loop: !0,
                                        onLoadedData: i,
                                        children: C
                                    }), c]
                                }) : (0, E.jsx)("div", {
                                    ref: this._setRefContainer,
                                    className: (0, d.default)(x.default.content),
                                    onClick: this.stopPropagation,
                                    children: (0, E.jsx)(b.WrappedMsgVideoPlayer, {
                                        msg: n,
                                        mediaData: a,
                                        startTime: this.props.startTime,
                                        onClose: this.props.onClose,
                                        onError: function() {},
                                        onFullscreenToggle: this._handleFullscreenToggle,
                                        autoPlay: this.props.autoPlay,
                                        type: p.PLAYER_TYPE.MEDIA_VIEWER,
                                        overlays: c,
                                        noPip: n.isViewOnce,
                                        onLoadedData: i
                                    })
                                }), (0, E.jsxs)(_.default, {
                                    type: "scaleDown",
                                    position: "relative",
                                    objectPosition: "relative",
                                    size: this.state.size,
                                    onObjectLoad: this.props.onLoad,
                                    children: [m, l]
                                })
                            }
                            return (0, E.jsxs)(_.default, {
                                type: "scaleDown",
                                position: "relative",
                                objectPosition: "relative",
                                size: {
                                    width: this.props.mediaData.fullWidth,
                                    height: this.props.mediaData.fullHeight
                                },
                                children: [(0, E.jsx)(h.default, {
                                    altText: null !== (e = n.caption) && void 0 !== e ? e : "",
                                    mediaData: a
                                }), l]
                            })
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e) {
                            var t = e.mediaData;
                            return (t.mediaStage === g.MEDIA_DATA_STAGE.RESOLVED || t.streamable && t.isStreamable()) && (0, u.isNonZeroNumber)(t.fullWidth) && (0, u.isNonZeroNumber)(t.fullHeight) ? {
                                size: n.getSize(t)
                            } : null
                        }
                    }, {
                        key: "getSize",
                        value: function(e) {
                            if (e.isGif) {
                                return e.fullWidth >= 330 ? {
                                    width: e.fullWidth,
                                    height: e.fullHeight
                                } : {
                                    width: 330,
                                    height: 330 * e.fullHeight / e.fullWidth
                                }
                            }
                            return e.fullWidth >= m.MIN_WIDTH ? {
                                width: e.fullWidth,
                                height: e.fullHeight
                            } : {
                                width: m.MIN_WIDTH,
                                height: e.fullHeight
                            }
                        }
                    }]), n
                }(c.PureComponent);
            T.CONCERNS = {
                mediaData: ["mediaStage", "fullWidth", "fullHeight", "isGif", "isViewOnce", "preview", "renderableUrl", "streamable"]
            }, T.defaultProps = {
                startTime: 0
            }, T.displayName = "MediaVideo";
            var M = function(e) {
                (0, o.default)(n, e);
                var t = (0, l.default)(n);

                function n() {
                    return (0, i.default)(this, n), t.apply(this, arguments)
                }
                return (0, r.default)(n, [{
                    key: "getContainerElement",
                    value: function() {
                        return this.getComponent().refContainer
                    }
                }, {
                    key: "closingMedia",
                    value: function() {
                        this.getComponent().closingMedia()
                    }
                }]), n
            }((0, y.default)(T, T.CONCERNS));
            t.default = M
        },
        92494: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.onImageLoad,
                    a = e.isAnimatingIn,
                    d = e.onImgZoomIn,
                    R = e.onExitAnimation,
                    X = e.onBack,
                    J = (0, U.useModelValues)(e.msg, ["id", "star", "isUnsentMedia", "isViewOnce", "isStickerMsg", "chat", "caption", "interactiveAnnotations", "type"]),
                    Q = (0, U.useModelValues)(e.mediaData, ["mediaStage", "type", "isGif"]),
                    ee = (0, q.default)(a),
                    te = (0, c.useRef)(null),
                    ne = (0, c.useRef)(null),
                    ae = (0, c.useRef)(null),
                    ie = (0, c.useRef)(null),
                    re = (0, c.useRef)(),
                    oe = (0, c.useRef)(!1),
                    le = (0, c.useRef)(!1),
                    se = (0, c.useRef)(!1),
                    ue = (0, H.default)(O.NUX.EPHEMERAL_VIEW_ONCE_RECEIVER),
                    ce = (0, r.default)(ue, 2),
                    de = ce[0],
                    fe = ce[1],
                    he = J.isViewOnce && de,
                    pe = (0, c.useState)((function() {
                        return Q.mediaStage === I.MEDIA_DATA_STAGE.RESOLVED && e.isAnimatingIn && e.getZoomNode ? e.getZoomNode(J.id) : null
                    })),
                    me = (0, r.default)(pe, 1)[0],
                    ve = (0, c.useState)(!1),
                    ge = (0, r.default)(ve, 2),
                    xe = ge[0],
                    Ce = ge[1],
                    be = (0, c.useState)(!1),
                    _e = (0, r.default)(be, 2),
                    je = _e[0],
                    Se = _e[1],
                    ye = (0, c.useState)(!e.isAnimatingIn),
                    ke = (0, r.default)(ye, 2),
                    Ee = ke[0],
                    Te = ke[1],
                    Me = (0, c.useState)(!1),
                    we = (0, r.default)(Me, 2),
                    Ie = we[0],
                    Pe = we[1],
                    Ae = (0, c.useState)(!1),
                    Ne = (0, r.default)(Ae, 2),
                    De = Ne[0],
                    Oe = Ne[1],
                    Re = function() {
                        var e = (0, Y.jsx)(D.default, {
                            isPhoto: Q.type === k.default.TYPE.IMAGE,
                            onOkClick: function() {
                                fe(), f.Cmd.closeModal()
                            }
                        });
                        f.Cmd.openModal(e)
                    },
                    Le = (0, K.default)((function(e, t) {
                        if (!je) {
                            var n = te.current;
                            if (n) {
                                var a = n.getInsideContainer();
                                if (a && a instanceof HTMLElement) {
                                    var i = n.getOutsideContainer();
                                    if (i && i instanceof HTMLElement) {
                                        var r = n.getTranslatePosition(i, e, t),
                                            o = r.translateX,
                                            l = r.translateY;
                                        (0, W.default)(a, "stop"), (0, W.default)(a, {
                                            translateX: o,
                                            translateY: l,
                                            scale: A.ZOOM_IN_FACTOR
                                        }, {
                                            duration: 0
                                        })
                                    }
                                }
                            }
                        }
                    }));
                (0, c.useEffect)((function() {
                    return __LOG__(2)`MediaViewerModal: Opened`, he && Re(), l.default.focus(ie.current),
                        function() {
                            __LOG__(2)`MediaViewerModal: Closed`, Le.cancel()
                        }
                }), []);
                var Ge, Be, Fe = function() {
                        J.isViewOnce && (0, S.canMarkPlayed)(J) && (0, S.markPlayed)(J)
                    },
                    Ve = function(e) {
                        Fe(), n && n();
                        var t = me,
                            i = e.target;
                        t && i && a && i instanceof HTMLElement && (se.current || (se.current = !0, function(e, t) {
                            var n, a = t.getBoundingClientRect(),
                                i = e.getBoundingClientRect(),
                                r = i.top - a.top,
                                o = i.left - a.left,
                                l = e.clientWidth / t.clientWidth;
                            r -= (t.clientHeight - e.clientHeight) / 2, o -= (t.clientWidth - e.clientWidth) / 2, (0, W.default)(t, {
                                opacity: [1, 0],
                                translateX: [0, o],
                                translateY: [0, r],
                                scale: [1, l]
                            }, {
                                duration: A.ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            });
                            var s = null === (n = ae.current) || void 0 === n ? void 0 : n.getContainerElement();
                            s && (0, W.default)(s, {
                                opacity: [1, 0]
                            }, {
                                duration: A.ANIMATION_DURATION
                            })
                        }(t, i)))
                    },
                    Ue = function() {
                        var t;
                        if (!oe.current) {
                            oe.current = !0, (0, B.isFunction)(R) && R();
                            var n, a = e.getZoomNode && e.getZoomNode(J.id);
                            if (!a) return X();
                            var i, r = Q.type;
                            if ([k.default.TYPE.IMAGE, k.default.TYPE.STICKER].includes(r) && te.current) n = te.current.getInsideContainer(), null === (i = te.current) || void 0 === i || i.closingMediaZoomable();
                            else if (Q.isGif && ne.current) {
                                var o;
                                n = ne.current.getContainerElement(), null === (o = ne.current) || void 0 === o || o.closingMedia()
                            }
                            if (!n) return X();
                            var l = n,
                                s = n.getBoundingClientRect(),
                                u = a.getBoundingClientRect(),
                                c = u.top - s.top,
                                d = u.left - s.left,
                                f = a.clientWidth / l.clientWidth;
                            c -= (l.clientHeight - a.clientHeight) / 2, d -= (l.clientWidth - a.clientWidth) / 2, (0, W.default)(n, {
                                translateX: [d, 0],
                                translateY: [c, 0],
                                scale: [f, 1]
                            }, {
                                duration: A.CLOSE_ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            }).then((function() {
                                X()
                            }));
                            var h = null === (t = ae.current) || void 0 === t ? void 0 : t.getContainerElement();
                            h && (0, W.default)(h, {
                                opacity: [0, 1]
                            }, {
                                duration: A.CLOSE_ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            })
                        }
                    },
                    He = function(e) {
                        var t = te.current;
                        e && t && (le.current = t.heightOverflow > 0 || t.widthOverflow > 0), Ce(e), d(e)
                    },
                    qe = function(e) {
                        e.stopPropagation(), Pe(!Ie)
                    };
                switch ((0, c.useEffect)((function() {
                        a || Ee || !ee || Te(!0)
                    }), [a, Ee, ee]), Q.type) {
                    case k.default.TYPE.IMAGE:
                        Ge = (0, Y.jsx)(E.default, {
                            msg: J,
                            mediaData: Q,
                            onLoad: Ve,
                            onImgZoomIn: He,
                            onAnnotationTooltipDisplay: function() {
                                Se(!0)
                            },
                            onAnnotationTooltipDismiss: function() {
                                Se(!1)
                            },
                            preventDownload: J.isViewOnce,
                            ref: te
                        }, J.id.toString());
                        break;
                    case k.default.TYPE.STICKER:
                        Ge = (0, Y.jsx)(w.default, {
                            msg: J,
                            mediaData: Q,
                            onLoad: Ve,
                            onImgZoomIn: He,
                            onStickerPackView: Ue,
                            stickerPackViewDelay: A.CLOSE_ANIMATION_DURATION,
                            ref: te
                        }, J.id.toString());
                        break;
                    case k.default.TYPE.VIDEO:
                        Ge = (0, Y.jsx)(P.default, {
                            autoPlay: !he,
                            msg: J,
                            mediaData: Q,
                            onLoadedData: Q.isGif ? Ve : Fe,
                            startTime: e.startTime,
                            onClose: Ue,
                            ref: ne
                        }, J.id.toString());
                        break;
                    case k.default.TYPE.AUDIO:
                        Ge = (0, Y.jsx)(y.default, {
                            mediaData: Q,
                            msg: J
                        }, J.id.toString());
                        break;
                    default:
                        __LOG__(4, void 0, new Error, !0)`type: ${Q.type}`, SEND_LOGS("MediaViewerModal: unexpected media type")
                }
                var Ke = e.msgIndexInAlbum >= 0 && e.albumSize >= 0;
                if (J.caption || Ke) {
                    var We, Ye;
                    if (Ke) {
                        var ze = {
                            number: e.msgIndexInAlbum + 1,
                            totalNumber: e.albumSize
                        };
                        Ye = j.default.t(687, ze)
                    }
                    var Xe = _.Configuration.Conversation({
                            mentions: J.mentionMap(),
                            phoneNumbers: J.getPhoneNumbers(),
                            links: J.getLinks(),
                            trusted: !0
                        }),
                        Ze = !Ee && (Q.isGif || Q.type === k.default.TYPE.IMAGE);
                    Be = (0, Y.jsxs)(Y.Fragment, {
                        children: [(0, Y.jsxs)("p", {
                            className: (0, s.default)(N.default.captionWrapper, re.current && N.default.captionWrapperExpandable),
                            onClick: re.current ? qe : void 0,
                            title: re.current ? u.fbt._("Read more", null, {
                                hk: "2DvSvh"
                            }) : void 0,
                            "aria-hidden": Ie || void 0,
                            children: [(0, Y.jsx)(v.EmojiText, {
                                className: (0, s.default)(N.default.mediaCaption, (We = {}, (0, i.default)(We, N.default.captionHidden, Ze), (0, i.default)(We, N.default.expanded, Ie), We)),
                                formatters: Xe,
                                ref: function(e) {
                                    ae.current = e
                                },
                                text: J.caption || Ye
                            }), re.current && (0, Y.jsx)(V.default, {
                                xstyle: [z.captionReadMoreBtn, Ie && z.captionReadMoreBtnExpanded, xe && z.captionReadMoreBtnZoomed],
                                onClick: qe,
                                children: (0, Y.jsx)(G.TextSpan, {
                                    children: u.fbt._("Read more", null, {
                                        hk: "2DvSvh"
                                    })
                                })
                            })]
                        }), Ie && (0, Y.jsx)("p", {
                            className: (0, s.default)(N.default.captionWrapper, N.default.captionWrapperExpandable, N.default.captionExpanded),
                            onClick: qe,
                            children: (0, Y.jsx)(v.EmojiText, {
                                className: (0, s.default)(N.default.mediaCaption, N.default.mediaCaptionExpanded),
                                formatters: Xe,
                                text: J.caption
                            })
                        })]
                    })
                }
                var $e = (0, s.default)(N.default.media, (0, i.default)({}, N.default.mediaWithCaption, !!Be)),
                    Je = (0, s.default)("overlay", N.default.mediaViewer, (t = {}, (0, i.default)(t, N.default.noThumbnails, J.isViewOnce || J.isStickerMsg), (0, i.default)(t, N.default.mediaViewerAnimate, e.isAnimatingIn), (0, i.default)(t, N.default.cursorZoomOut, xe), t)),
                    Qe = xe && le.current ? function(e) {
                        Le(e.pageX, e.pageY)
                    } : null,
                    et = xe ? function(e) {
                        Le.cancel();
                        var t = te.current;
                        t && xe && t.onClick(e)
                    } : null,
                    tt = xe ? null : Ue;
                null != tt && J.isViewOnce && (tt = function() {
                    Oe(!0)
                });
                var nt = !J.isViewOnce && !J.isStickerMsg;
                return (0, Y.jsx)(F.UIE, {
                    displayName: "MediaViewer",
                    escapable: !0,
                    requestDismiss: Ue,
                    children: (0, Y.jsx)(b.HotKeys, {
                        handlers: {
                            space: function(e) {
                                if (!a) {
                                    Le.cancel();
                                    var t = te.current;
                                    null != t && t.onKeyboardZoom(e)
                                }
                            }
                        },
                        onRef: function(e) {
                            ie.current = e
                        },
                        children: (0, Y.jsxs)("div", {
                            className: Je,
                            "data-animate-media-viewer": !0,
                            "data-testid": "media-viewer-modal",
                            onClick: et,
                            onMouseMove: Qe,
                            children: [(0, Y.jsx)(T.default, {
                                isHighlightClose: De,
                                msg: J,
                                mediaData: Q,
                                onClose: Ue,
                                onGoToMsgClick: function(e) {
                                    e.stopPropagation(), Ue(), f.Cmd.existsDrawerRight((function(e) {
                                        e && 2 === h.Column.column && f.Cmd.closeDrawerRight()
                                    }));
                                    var t = J.chat.getSearchContext((0, L.unproxy)(J));
                                    f.Cmd.openChatAt(J.chat, t).then((function(e) {
                                        e && f.Cmd.focusChatTextInput(J.chat)
                                    }))
                                },
                                onHightlightCloseEnd: function() {
                                    Oe(!1)
                                },
                                onReplyClick: function() {
                                    Ue(), (0, o.delayMs)(A.CLOSE_ANIMATION_DURATION).then(Z.bind(null, (0, L.unproxy)(J)))
                                },
                                onUnstarClick: function(e) {
                                    e.stopPropagation(), f.Cmd.sendUnstarMsgs(J.chat, [(0, L.unproxy)(J)])
                                },
                                onStarClick: function(e) {
                                    e.stopPropagation(), f.Cmd.sendStarMsgs(J.chat, [(0, L.unproxy)(J)])
                                },
                                onDeleteClick: function() {
                                    f.Cmd.openModal((0, Y.jsx)(m.default, {
                                        chat: J.chat,
                                        msgList: [(0, L.unproxy)(J)],
                                        onDelete: Ue
                                    }))
                                },
                                openForwardFlow: function(e) {
                                    e.stopPropagation(), J.isUnsentMedia ? f.Cmd.openModal((0, Y.jsx)(p.default, {
                                        title: j.default.t(455),
                                        onOK: function() {
                                            return f.Cmd.closeModal()
                                        },
                                        okText: u.fbt._("OK", null, {
                                            hk: "2KEeHb"
                                        }),
                                        children: j.default.t(452)
                                    })) : f.Cmd.openModal((0, Y.jsx)(x.ForwardMessageFlowLoadable, {
                                        msgs: [(0, L.unproxy)(J)]
                                    }), {
                                        transition: "modal-flow"
                                    })
                                },
                                onDownloadClick: function(e) {
                                    e.stopPropagation(), g.FileSaver.initDownload((0, L.unproxy)(J))
                                },
                                onMsgInfoClick: function() {
                                    Ue(), (0, o.delayMs)(A.CLOSE_ANIMATION_DURATION + 250).then(f.Cmd.msgInfoDrawer.bind(f.Cmd, (0, L.unproxy)(J)))
                                },
                                onViewOnceInfoClick: function() {
                                    Re()
                                },
                                msgIndexInAlbum: e.msgIndexInAlbum
                            }), (0, Y.jsx)("div", {
                                className: (0, s.default)(N.default.mediaContent, (0, i.default)({}, N.default.sticker, J.isStickerMsg)),
                                onClick: tt,
                                children: (0, Y.jsx)($, {
                                    hasNavigationButtons: nt,
                                    onNext: e.onNext,
                                    onPrev: e.onPrev,
                                    imgZoomed: xe,
                                    children: (0, Y.jsxs)("div", {
                                        className: $e,
                                        children: [(0, Y.jsx)(M.default, {
                                            msg: J,
                                            mediaData: Q
                                        }), Ge, (0, Y.jsx)(C.default.Provider, {
                                            value: J.chat.groupMetadata,
                                            children: Be
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                })
            };
            var i = a(n(59713)),
                r = a(n(63038)),
                o = n(45121),
                l = a(n(11845)),
                s = a(n(94184)),
                u = n(48360),
                c = n(67294),
                d = (a(n(56720)), n(23145)),
                f = n(65901),
                h = n(67771),
                p = a(n(86777)),
                m = a(n(70428)),
                v = n(73008),
                g = n(76151),
                x = n(49196),
                C = a(n(30588)),
                b = n(32012),
                _ = n(72896),
                j = a(n(45159)),
                S = n(1435),
                y = a(n(53304)),
                k = a(n(72397)),
                E = a(n(67788)),
                T = a(n(17044)),
                M = a(n(65729)),
                w = a(n(83200)),
                I = n(41655),
                P = a(n(51751)),
                A = n(21065),
                N = a(n(25816)),
                D = a(n(7520)),
                O = n(15849),
                R = n(80385),
                L = n(68220),
                G = n(22552),
                B = n(82118),
                F = n(16835),
                V = a(n(76080)),
                U = n(69283),
                H = a(n(36387)),
                q = a(n(40054)),
                K = a(n(15663)),
                W = a(n(66265)),
                Y = n(85893),
                z = {
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
                var t = e.chat;
                t.composeQuotedMsg = e, f.Cmd.focusChatTextInput(t)
            }

            function $(e) {
                var t, n, a, i;
                return (0, Y.jsxs)(Y.Fragment, {
                    children: [e.hasNavigationButtons && (0, Y.jsx)("div", {
                        className: (0, s.default)(N.default.btnMediaPrev),
                        children: (0, Y.jsx)("div", {
                            onClick: e.onPrev ? null : X,
                            children: (0, Y.jsx)(d.ChevronButton, {
                                type: d.ButtonType.Prev,
                                onClick: null !== (t = e.onPrev) && void 0 !== t ? t : void 0,
                                onKeyDown: null !== (n = e.onPrev) && void 0 !== n ? n : void 0,
                                disabled: !e.onPrev || e.imgZoomed,
                                theme: R.RoundTheme.Default
                            })
                        })
                    }), e.children, e.hasNavigationButtons && (0, Y.jsx)("div", {
                        className: (0, s.default)(N.default.btnMediaNext),
                        children: (0, Y.jsx)("div", {
                            onClick: e.onPrev ? null : X,
                            children: (0, Y.jsx)(d.ChevronButton, {
                                type: d.ButtonType.Next,
                                onClick: null !== (a = e.onNext) && void 0 !== a ? a : void 0,
                                onKeyDown: null !== (i = e.onNext) && void 0 !== i ? i : void 0,
                                disabled: !e.onNext || e.imgZoomed,
                                theme: R.RoundTheme.Default
                            })
                        })
                    })]
                })
            }
        },
        82184: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.mediaMsgs,
                    n = e.onScroll,
                    a = e.highlightedMsgIds,
                    f = e.activeMsg,
                    h = e.onSetActiveThumb,
                    p = e.onSelectThumb,
                    m = (0, o.useRef)({}),
                    v = function() {
                        var e = new Map;
                        return t.forEach((function(t) {
                            var n = t.id.toString();
                            e.set(n, function(e) {
                                var t = m.current[e];
                                if (!t) return !1;
                                var n = t.getBoundingClientRect(),
                                    a = (n.left + n.right) / 2;
                                return !(a > -1 * window.innerWidth && a < 2 * window.innerWidth)
                            }(n))
                        })), e
                    },
                    g = (0, o.useState)(v),
                    x = (0, i.default)(g, 2),
                    C = x[0],
                    b = x[1],
                    _ = (0, c.default)((function() {
                        var e = v();
                        (0, r.default)(C, e) || b(e)
                    }), 100),
                    j = function() {
                        var e = a && a.size > 0 && a.has(f.id.toString()),
                            n = [];
                        return t.forEach((function(t) {
                            if (null != t.mediaData) {
                                var i = e && a && !a.has(t.id.toString()) ? "viewerFlowTransparent" : "viewerFlow";
                                n.push((0, d.jsx)(l.MediaThumb, {
                                    theme: i,
                                    active: t === f,
                                    msg: t,
                                    containerRef: function(e) {
                                        ! function(e, t) {
                                            m.current[t] = e
                                        }(e, t.id.toString()), t === f && h(e)
                                    },
                                    onClick: function() {
                                        p(t)
                                    },
                                    preferPreview: !!C.get(t.id.toString()),
                                    showTooltip: t.isGroupMsg
                                }, `media-${t.id.id}`))
                            } else {
                                var r = f;
                                __LOG__(3, !0)`MediaViewerFlow: attempted to render a msg without mediaData: ${JSON.stringify({type:t.type,isMedia:t.isMedia,startMsgType:r.type,startMsgIsMedia:r.isMedia})}`
                            }
                        })), n.push((0, d.jsx)("div", {
                            className: s.default.mediaThumb,
                            children: t.queryMediaAfter ? (0, d.jsx)(u.Spinner, {
                                stroke: 6,
                                size: 24
                            }) : null
                        }, "spinner-right")), n.unshift((0, d.jsx)("div", {
                            className: s.default.mediaThumb,
                            children: t.queryMediaBefore ? (0, d.jsx)(u.Spinner, {
                                stroke: 6,
                                size: 24
                            }) : null
                        }, "spinner-left")), n.push((0, d.jsx)("div", {
                            className: s.default.thumbPadding
                        }, "padding-right")), n.unshift((0, d.jsx)("div", {
                            className: s.default.thumbPadding
                        }, "padding-left")), n
                    }();
                return (0, d.jsx)("div", {
                    className: s.default.thumbsContainer,
                    ref: e.setRefThumbsContainer,
                    children: (0, d.jsx)("div", {
                        className: s.default.scrollContainer,
                        dir: "ltr",
                        children: (0, d.jsx)("div", {
                            onScroll: function(e) {
                                _(), n(e)
                            },
                            className: s.default.viewerThumbs,
                            ref: e.setRefThumbs,
                            children: j
                        })
                    })
                })
            };
            var i = a(n(63038)),
                r = a(n(55713)),
                o = n(67294),
                l = n(19499),
                s = a(n(28437)),
                u = n(85651),
                c = a(n(15663)),
                d = n(85893)
        },
        7520: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onOkClick;
                return (0, h.jsx)(o.default, {
                    onOK: t,
                    cancelText: c.default.t(554),
                    onCancel: function() {
                        (0, l.openExternalLink)((0, s.getViewOnceFaqUrl)())
                    },
                    children: (0, h.jsxs)(u.FlexColumn, {
                        children: [(0, h.jsx)(u.FlexItem, {
                            xstyle: p.graphic,
                            align: "center",
                            children: (0, h.jsx)(d.default, {
                                name: "view-once-sender-nux",
                                width: 195,
                                height: 177
                            })
                        }), (0, h.jsx)(f.TextHeader, {
                            className: (0, r.default)(p.text),
                            theme: "popup-title",
                            children: e.isPhoto ? i.fbt._("This photo is set to view once", null, {
                                hk: "2H7aHc"
                            }) : i.fbt._("This video is set to view once", null, {
                                hk: "1w8WFf"
                            })
                        }), (0, h.jsx)(f.TextParagraph, {
                            className: (0, r.default)(p.text),
                            children: e.isPhoto ? i.fbt._("For more privacy, this photo will disappear after you close it.", null, {
                                hk: "1XZPqi"
                            }) : i.fbt._("For more privacy, this video will disappear after you close it.", null, {
                                hk: "3YgUHE"
                            })
                        })]
                    })
                })
            };
            var i = n(48360),
                r = a(n(56720)),
                o = a(n(86777)),
                l = n(49012),
                s = n(29281),
                u = n(27968),
                c = a(n(45159)),
                d = a(n(7665)),
                f = n(22552),
                h = n(85893),
                p = {
                    text: {
                        marginBottom: "or9x5nie"
                    },
                    graphic: {
                        marginBottom: "t4zgqcuo"
                    }
                }
        },
        75211: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.options,
                    n = e.explanation,
                    a = e.onSelect,
                    f = (0, o.useState)(e.initialValue),
                    h = (0, i.default)(f, 2),
                    p = h[0],
                    m = h[1],
                    v = function() {
                        l.Cmd.closeModal()
                    },
                    g = function(e) {
                        var t = e.target;
                        t instanceof HTMLInputElement && m(parseInt(t.value, 10))
                    },
                    x = t.map((function(e) {
                        var t = e.value,
                            n = e.label;
                        return (0, d.jsx)("li", {
                            children: (0, d.jsxs)("label", {
                                className: u.default.label,
                                children: [(0, d.jsx)("input", {
                                    type: "radio",
                                    className: u.default.input,
                                    value: String(t),
                                    checked: t === p,
                                    onChange: g
                                }), n]
                            })
                        }, `setting-${t}`)
                    }));
                return (0, d.jsxs)(s.default, {
                    title: e.title,
                    okText: r.fbt._("Confirm", null, {
                        hk: "3tmGp3"
                    }),
                    onOK: function() {
                        null != p && a(p), v()
                    },
                    onCancel: v,
                    children: [null != n ? (0, d.jsx)(c.TextDiv, {
                        theme: "muted",
                        className: u.default.explanation,
                        children: n
                    }) : null, (0, d.jsx)("form", {
                        children: (0, d.jsx)("ol", {
                            children: x
                        })
                    })]
                })
            };
            var i = a(n(63038)),
                r = n(48360),
                o = n(67294),
                l = n(65901),
                s = a(n(86777)),
                u = a(n(26569)),
                c = n(22552),
                d = n(85893)
        },
        43780: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a, h = (0, o.useState)(!1),
                    p = (0, i.default)(h, 2),
                    m = p[0],
                    v = p[1];
                e.isGroup ? (t = r.fbt._("The last 5 messages from this group will be forwarded to WhatsApp.", null, {
                    hk: "40tFfL"
                }), n = r.fbt._("No one in this group will be notified.", null, {
                    hk: "1qLvih"
                }), a = r.fbt._("Exit group", null, {
                    hk: "4BkPNr"
                })) : e.isBusiness ? (t = r.fbt._("The last 5 messages from this business will be forwarded to WhatsApp.", null, {
                    hk: "1Xa0bG"
                }), n = r.fbt._("This business will not be notified.", null, {
                    hk: "2Lbwbg"
                }), a = r.fbt._("Block business", null, {
                    hk: "3hFIF3"
                })) : (t = r.fbt._("The last 5 messages from this contact will be forwarded to WhatsApp.", null, {
                    hk: "2YNTpM"
                }), n = r.fbt._("This contact will not be notified.", null, {
                    hk: "172yrT"
                }), a = r.fbt._("Block contact", null, {
                    hk: "41X9mL"
                }));
                return (0, d.jsxs)(s.default, {
                    onOK: function() {
                        e.onReport(m)
                    },
                    okText: r.fbt._("Report", null, {
                        hk: "18ssTb"
                    }),
                    onCancel: e.onCancel,
                    title: e.title,
                    children: [(0, d.jsx)(c.TextParagraph, {
                        xstyle: f.section,
                        color: "muted",
                        children: t
                    }), (0, d.jsx)(c.TextParagraph, {
                        xstyle: f.section,
                        color: "muted",
                        children: n
                    }), (0, d.jsxs)(u.FlexRow, {
                        align: "center",
                        justify: "start",
                        children: [(0, d.jsx)(l.CheckBox, {
                            onChange: function() {
                                return v((function(e) {
                                    return !e
                                }))
                            },
                            checked: m,
                            id: "menu-icon-report-spam"
                        }), (0, d.jsx)(c.TextLabel, {
                            xstyle: f.checkboxLabel,
                            htmlFor: "menu-icon-report-spam",
                            color: "muted",
                            children: a
                        })]
                    })]
                })
            };
            var i = a(n(63038)),
                r = n(48360),
                o = n(67294),
                l = (a(n(56720)), n(91404)),
                s = a(n(86777)),
                u = n(27968),
                c = n(22552),
                d = n(85893),
                f = {
                    section: {
                        marginBottom: "t4zgqcuo"
                    },
                    checkboxLabel: {
                        marginStart: "fooq7fky"
                    }
                }
        },
        87678: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                audioTag: "_1ichq"
            }
        },
        32597: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                header: "_2J_Rg",
                chevronIcon: "_3grvf",
                ephemeralIcon: "_36-dp"
            }
        },
        31243: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                msg: "_3YiZC",
                text: "RmpKn",
                bubble: "_2z0p1",
                author: "XntIB",
                hasSuspiciousLinks: "_3bU-2",
                hasAuthor: "_2cFHu",
                suspiciousLabel: "_2tYTz"
            }
        },
        83901: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                container: "_3go1_"
            }
        },
        48121: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                mediaCanvas: "GfgP-",
                shade: "_31TVj",
                blur: "_3SKsu",
                canvasSelected: "xEnhc"
            }
        },
        45468: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                iconStar: "_1Dvi_",
                shadeTop: "_2GZwK",
                canvasBody: "_10gTM",
                mediaGalleryThumbnail: "_1uBVh",
                chatInfoDrawerThumbnail: "_1t-UP",
                canvasSelected: "_28Wzy",
                mediaSelect: "_3fXE6",
                canvasComponent: "zm1kZ",
                canvasSecondRow: "_2GObI",
                viewerFlow: "_8KUDv",
                active: "_2w4lr",
                viewerFlowTransparent: "_3UuHq"
            }
        },
        38628: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                container: "_Wzeb",
                selected: "_2v6Lf"
            }
        },
        38851: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                iconType: "_3sWXp"
            }
        },
        49195: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                wrapper: "_11tTr"
            }
        },
        84485: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                nuxContainer: "_2MN2b",
                flatListContainer: "_3P67r",
                btnClose: "_1rNId",
                nuxHeader: "_1fDhw",
                nuxContent: "_3CSup",
                nuxIcon: "wZmgd",
                nuxText: "_23F3I"
            }
        },
        87485: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                footerNote: "_2v7h3",
                getTheAppLink: "f20SI"
            }
        },
        33363: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                wrapper: "_3KBDs",
                code: "_2ZlC0",
                codeDarkMode: "_2LUvK",
                codeLogo: "_3TIEq"
            }
        },
        40526: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                businessAccount: "_3WoOY",
                businessTitleText: "_1b76N",
                businessTitleWithSMBUpsell: "_3o5KS",
                businessTitleWithSmbUpsell: "_3o5KS"
            }
        },
        85522: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                businessHoursRow: "_2438e",
                firstRow: "_2aGH7",
                businessHoursDay: "Wb7rm",
                businessHoursHours: "_1Mczx",
                dayIsOpen: "_1kitz",
                businessHoursChevron: "_3rrGE",
                flipSvg: "mqqNO"
            }
        },
        44899: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                section: "h_jr2",
                description: "_2q04R",
                map: "_1I-_B"
            }
        },
        78344: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                wrapper: "_1KYpA",
                title: "_3vc4r",
                subtitle: "_3QsTT",
                verifiedText: "U1NnE",
                icon: "_3g_j1"
            }
        },
        45625: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                open: "_30zzj",
                closed: "_3wZZK",
                openStatus: "_1domD"
            }
        },
        49500: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                contactBusinessInfo: "_3ghG_",
                contactBusinessInfoSpinner: "_4L7V_",
                dataRow: "_1V82a",
                businessHoursRow: "qatFJ",
                businessHoursDay: "ipOxZ",
                businessHoursHours: "_24gSh",
                businessHoursChevron: "_3WwUb",
                flipSvg: "_3rTVf",
                dataRowIcon: "_19MbK",
                dataRowText: "_2w4yz",
                businessTitleText: "_2ojGG",
                businessMarker: "Ok_wk",
                verifiedLabel: "_8Jv4k",
                businessMap: "_2AET6",
                address: "_3hYRV",
                link: "Lmend",
                infoIcon: "_3MsDj"
            }
        },
        19518: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                info: "_1TZy1",
                categories: "_1IRxm",
                noPaddingBottom: "_2JmH_"
            }
        },
        18551: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                header: "_2zyOo",
                icon: "_4aKqp"
            }
        },
        47555: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                header: "_3AwRc",
                restrictText: "_1fFgT"
            }
        },
        2130: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                multimediaGallery: "_3M644",
                column: "_3nvje",
                menuItem: "OJuvv",
                active: "_KRg9",
                menuTabsLists: "_3CC5A",
                threeTabs: "_1KRHF",
                fourTabs: "rLX29"
            }
        },
        16973: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                mediaViewerPlaceholder: "nehFG",
                imageAudio: "_2OreO",
                mediaViewerAudio: "_1alR8"
            }
        },
        28437: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                thumbsContainer: "_1XWMx",
                scrollContainer: "_1MhXb",
                viewerThumbs: "_1FS45",
                mediaThumb: "_52crR",
                thumbPadding: "_1833d"
            }
        },
        26569: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                label: "QzWWL",
                input: "_1LOWN",
                explanation: "_37J_Y"
            }
        }
    }
]);