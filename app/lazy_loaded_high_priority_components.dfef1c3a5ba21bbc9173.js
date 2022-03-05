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
            }), t.queryAndUpdateSubGroupMetadataById = function(e) {
                if (null != e && l.GK.supportsFeature(l.GK.F.MD_BACKEND)) return (0, c.queryAllSubGroups)(e).then((function(t) {
                    var n = function(e) {
                            var t = e.map((function(e) {
                                    return e.id
                                })),
                                n = (0, o.getUnjoinedGroupIds)(t),
                                a = e.reduce((function(e, t) {
                                    return e[n.includes(t.id) ? 0 : 1].push(t), e
                                }), [
                                    [],
                                    []
                                ]),
                                i = (0, r.default)(a, 2),
                                l = i[0],
                                s = i[1];
                            return {
                                unjoinedSubgroups: l,
                                joinedSubgroups: s
                            }
                        }(t),
                        a = n.unjoinedSubgroups,
                        i = n.joinedSubgroups;
                    a.forEach((function(t) {
                            f(t, e)
                        })), i.length > 0 && i.forEach((function(e) {
                            (0, u.createOrUpdateGroupMetadataModel)(e)
                        })),
                        function(e, t) {
                            var n = s.default.get(e),
                                a = t.map((function(e) {
                                    return e.id
                                }));
                            n && n.set({
                                unjoinedSubgroups: a
                            })
                        }(e, a)
                }));
                return a.resolve()
            }, t.querySubGroupInfo = function(e, t) {
                if (l.GK.supportsFeature(l.GK.F.MD_BACKEND)) return (0, c.querySubGroup)(e, t).then((function(e) {
                    f(e)
                })).then((function() {
                    return d.default.get(t)
                }));
                return a.resolve()
            };
            var r = i(n(63038)),
                o = n(6836),
                l = n(38032),
                s = i(n(52336)),
                u = n(45065),
                c = n(39707),
                d = i(n(54172));

            function f(e, t) {
                var n, a = d.default.gadd(e.id);
                a.set({
                    id: a.id,
                    parentId: a.parentId ? a.parentId : t,
                    subject: null !== (n = e.subject) && void 0 !== n ? n : void 0,
                    participants: e.participants
                })
            }
        },
        92530: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                i = n(95318),
                r = n(20862);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setGroupDesc = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return g((0, p.unproxy)(e), t)
            };
            var o = n(15586),
                l = n(48360),
                s = n(24224),
                u = n(65901),
                c = r(n(18286)),
                d = i(n(45159)),
                f = n(12138),
                h = n(12415),
                p = n(68220),
                m = n(59175),
                v = n(85893);

            function g(e) {
                var t, n, i, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    p = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, s.genId)(),
                    x = r && r.trim();
                if (x === (null === (t = e.groupMetadata) || void 0 === t ? void 0 : t.desc)) return a.reject(new c.ActionError);
                "" === x && (x = null);
                var C = (0, f.sendSetGroupDescription)(e.id, x, (0, h.newTag)(), null === (n = e.groupMetadata) || void 0 === n ? void 0 : n.descId),
                    _ = null === (i = e.groupMetadata) || void 0 === i ? void 0 : i.desc,
                    b = new s.ActionType(l.fbt._("Changing group description", null, {
                        hk: "3KCi4Y"
                    })),
                    S = C.then((function() {
                        return new s.ActionType(l.fbt._("Group description changed", null, {
                            hk: "44gagH"
                        }), {
                            actionText: d.default.t(133),
                            actionHandler: function() {
                                return g(e, _, p)
                            }
                        })
                    })).catch((0, o.filteredCatch)(m.ServerStatusCodeError, (function(e) {
                        if (e.status >= 400) return new s.ActionType(l.fbt._("Group description change failed", null, {
                            hk: "eSNfo"
                        }))
                    }))).catch((function() {
                        return __LOG__(3)`models:chat:setGroupDesc dropped`, new s.ActionType(l.fbt._("Group description change failed", null, {
                            hk: "eSNfo"
                        }), {
                            actionText: d.default.t(129),
                            actionHandler: function() {
                                return g(e, x, p)
                            }
                        })
                    }));
                return u.Cmd.openToast((0, v.jsx)(s.ActionToast, {
                    id: p,
                    initialAction: b,
                    pendingAction: S
                })), C.then((function(t) {
                    var n;
                    t._duplicate || (null === (n = e.groupMetadata) || void 0 === n || n.set({
                        desc: x || ""
                    }))
                })).catch((0, o.filteredCatch)(m.ServerStatusCodeError, (function() {})))
            }
        },
        39707: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                i = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.queryAllSubGroups = function() {
                return m.apply(this, arguments)
            }, t.querySubGroup = function() {
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
                h = new s.WapParser("queryAllSubGroupsParser", (function(e) {
                    return e.child("sub_groups").mapChildren(c.parseSubGroupNode)
                })),
                p = new s.WapParser("querySubGroupParser", (function(e) {
                    return e.child("linked_group").mapChildren(c.parseSubGroupInfoNode)
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
                                    e.next = 10;
                                    break
                                }
                                return __LOG__(2)`queryAllSubGroups failed: ${o.errorCode}:${o.errorType}`, e.abrupt("return", a.reject(new f.ServerStatusCodeError(o.errorCode, o.errorText)));
                            case 10:
                                return e.abrupt("return", o.result);
                            case 11:
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
                                    to: (0, d.GROUP_JID)(t),
                                    type: "get",
                                    xmlns: "w:g2",
                                    id: i
                                }, (0, l.wap)("query_linked", {
                                    type: "sub_group",
                                    jid: (0, d.GROUP_JID)(n)
                                })), e.next = 4, (0, u.sendIq)(o, p);
                            case 4:
                                if ((s = e.sent).success) {
                                    e.next = 10;
                                    break
                                }
                                return __LOG__(2)`queryAllSubGroups failed: ${s.errorCode}:${s.errorType}`, e.abrupt("return", a.reject(new f.ServerStatusCodeError(s.errorCode, s.errorText)));
                            case 10:
                                return e.abrupt("return", s.result[0]);
                            case 11:
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
            }), t.parseSubGroupInfoNode = function(e) {
                var t, n;
                try {
                    n = (0, s.createWid)(`${e.attrString("id")}@g.us`)
                } catch (e) {
                    __LOG__(2)`parseSubGroupNode failed: ${e}`
                }
                if (!(null === (t = n) || void 0 === t ? void 0 : t.isGroup)) throw Error("parseSubGroupNode: invalid group id");
                var a = (0, l.extractDescription)(e),
                    u = e.mapChildrenWithTag("participant", (function(e) {
                        var t = e.attrEnumOrDefault("type", r.GROUP_PARTICIPANT_TYPES, r.GROUP_PARTICIPANT_TYPES.participant);
                        return {
                            id: (0, o.userJidToUserWid)(e.attrPhoneUserJid("jid")),
                            isSuperAdmin: t === r.GROUP_PARTICIPANT_TYPES.superadmin,
                            isAdmin: t === r.GROUP_PARTICIPANT_TYPES.admin || t === r.GROUP_PARTICIPANT_TYPES.superadmin
                        }
                    }));
                return (0, i.default)({
                    id: n,
                    owner: e.hasAttr("creator") ? (0, o.userJidToUserWid)(e.attrPhoneUserJid("creator")) : void 0,
                    creation: e.attrTime("creation"),
                    subject: e.attrString("subject"),
                    subjectTime: e.hasAttr("s_t") ? e.attrTime("s_t") : void 0,
                    participants: u,
                    size: e.hasAttr("size") ? e.attrInt("size") : void 0
                }, a)
            }, t.parseSubGroupNode = function(e) {
                var t, n;
                try {
                    n = (0, s.createWid)(`${e.attrString("id")}@g.us`)
                } catch (e) {
                    __LOG__(2)`parseSubGroupNode failed: ${e}`
                }
                if (!(null === (t = n) || void 0 === t ? void 0 : t.isGroup)) throw Error("parseSubGroupNode: invalid group id");
                return {
                    id: n,
                    subject: e.attrString("subject"),
                    subjectTime: e.hasAttr("s_t") ? e.attrTime("s_t") : void 0
                }
            };
            var i = a(n(81109)),
                r = n(69789),
                o = n(5620),
                l = n(55195),
                s = n(8297)
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
                u = n(67294),
                c = n(23973),
                d = a(n(59828)),
                f = a(n(16175)),
                h = n(63641),
                p = a(n(47149)),
                m = n(2099),
                v = n(42496),
                g = n(1146),
                x = a(n(36450)),
                C = n(692),
                _ = n(74950),
                b = n(85893),
                S = function(e) {
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
                            if (_.Socket.state === g.SOCKET_STATE.CONNECTED) {
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
                            e._audioElement = t, null === (n = (a = e)._unregisterFromAudioChannel) || void 0 === n || n.call(a), e._unregisterFromAudioChannel = null == t ? null : c.MainAudioChannel.registerMedia(t), null != e.props.setRefAudio && e.props.setRefAudio(t)
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
                            null === (e = this._unregisterFromAudioChannel) || void 0 === e || e.call(this), C.UA.isBlink && (0, f.default)((0, s.default)(this._audioElement, "this._audioElement"))
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
                            var e = m.ReactionBubbleType.MEDIA_ITEM,
                                t = this.props.msg;
                            return (0, b.jsxs)("div", {
                                className: this.props.className,
                                children: [(0, b.jsx)("audio", {
                                    ref: this._setRefAudio,
                                    className: d.default.audioTag,
                                    src: this.props.url,
                                    onClick: this.props.onClick,
                                    controls: this.props.controls,
                                    preload: this.props.preload,
                                    autoPlay: this.props.autoPlay,
                                    children: this.props.children
                                }), t && (0, v.shouldShowReactionBubble)(t, e) && (0, b.jsx)(p.default, {
                                    msgIds: [t.id.toString()],
                                    reactionBubbleType: e
                                })]
                            })
                        }
                    }]), n
                }(u.Component);
            S.displayName = "AudioTag";
            var j = (0, h.ListenerHOC)((0, x.default)(S));
            t.default = j
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
                    _ = (0, l.useRef)(null);
                (0, p.useListener)(n, "add remove reset query_doc_before", (function() {
                    var e;
                    null === (e = _.current) || void 0 === e || e.forceUpdate()
                })), c.GK.supportsFeature(c.GK.F.MD_BACKEND) && a.endOfHistoryTransferType === s.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY && (t = (0, v.jsx)(u.default, {
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
                        ref: _,
                        msgsCollection: n,
                        queryCollection: function(e, t) {
                            C((function() {
                                n.queryDocs(a, t)
                            }))
                        },
                        hasBefore: n.hasDocBefore,
                        queryBefore: n.queryDocBefore,
                        emptyText: d.default.t(689),
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
            }), t.BaseEphemeralSettingRow = _, t.EphemeralSettingRow = function(e) {
                var t = e.chat,
                    n = e.groupMetadata,
                    a = e.onClick,
                    i = e.theme,
                    r = e.testid;
                return n ? (0, g.jsx)(C, {
                    groupMetadata: n,
                    onClick: a,
                    theme: i,
                    testid: r
                }) : (0, g.jsx)(x, {
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
                c = a(n(66322)),
                d = n(62782),
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
                return (0, g.jsx)(_, {
                    ephemeralDuration: o(),
                    canChange: !0,
                    onClick: function() {
                        a.contact.isContactBlocked ? l.Cmd.openModal((0, g.jsx)(s.default, {
                            onOK: u,
                            okText: f.default.t(799),
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
                return (0, g.jsx)(_, {
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

            function _(e) {
                var t, n = e.ephemeralDuration,
                    a = e.canChange,
                    r = e.onClick,
                    l = e.testid;
                t = n > 0 ? a ? (0, h.isEphemeral24HDurationEnabled)() ? (0, d.getDisappearingMessageDurationString)(n) : f.default.t(451) : (0, d.getDisappearingMessageExplanationString)(n) : f.default.t(450);
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
                    S = e.selectedMessages,
                    j = e.selectable,
                    E = e.onMessageSelect,
                    k = (0, C.default)(),
                    y = (0, u.useRef)(null);
                (0, x.useListener)(n, "add remove reset", (function() {
                    var e;
                    null === (e = y.current) || void 0 === e || e.forceUpdate()
                })), (0, x.useListener)(n, "query_doc_before", (function() {
                    var e;
                    null === (e = y.current) || void 0 === e || e.forceUpdate()
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
                })), f.GK.supportsFeature(f.GK.F.MD_BACKEND) && i.endOfHistoryTransferType === c.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY && (t = (0, _.jsx)(d.default, {
                    icon: (0, _.jsx)(g.default, {
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
                var T = (0, o.default)(e, b);
                return (0, _.jsxs)(_.Fragment, {
                    children: [(0, _.jsx)(m.default, (0, r.default)({
                        ref: y,
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
                                    i.href !== n.matchedText && t.push((0, _.jsx)(p.default, {
                                        msg: n.safe(),
                                        link: i,
                                        displayAuthor: a,
                                        selectable: j,
                                        selectedMessages: S,
                                        onMessageSelect: E,
                                        onClickMsg: e
                                    }, `${n.id.toString()}-${r}`))
                                })), n.linkPreview && t.push((0, _.jsx)(v.default, {
                                    msg: n,
                                    selectable: j,
                                    selectedMessages: S,
                                    onMessageSelect: E,
                                    displayType: l.DISPLAY_TYPE.GALLERY,
                                    onClickMsg: e
                                }, n.id.toString()))
                            })), t.reverse(), t
                        },
                        emptyText: h.default.t(691),
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
                _ = n(85893),
                b = ["linkMsgs", "chat"]
        },
        76992: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.link,
                    a = e.displayAuthor,
                    j = e.selectedMessages,
                    E = e.onMessageSelect,
                    k = e.onClickMsg,
                    y = (0, C.useModelValues)(e.msg, ["body", "caption", "dir", "id", "isSentByMe", "mediaData", "type", "rtl", "senderObj", "star", "mediaData", "asRevoked"]),
                    T = (0, s.useState)(!1),
                    M = (0, r.default)(T, 2),
                    I = M[0],
                    w = M[1],
                    P = (0, s.useState)((function() {
                        return j.isSelected(y.unsafe())
                    })),
                    A = (0, r.default)(P, 2),
                    N = A[0],
                    D = A[1];
                (0, x.useListener)(j, y.id.toString(), (function(e) {
                    N !== e && D(e)
                }));
                var O = e.selectable || I ? (0, S.jsx)(v.default, {
                        checked: N,
                        onClick: function(e) {
                            e && e.stopPropagation(), E(y.unsafe(), !N)
                        },
                        msgTheme: "gallery"
                    }) : null,
                    R = (0, c.Conversation)({
                        mentions: y.mentionMap(),
                        links: y.getLinks(),
                        selectable: true,
                        trusted: y.isTrusted()
                    }),
                    L = y.body && y.body.includes(n.url) ? y.body : y.caption,
                    G = a ? (0, S.jsx)("div", {
                        className: p.default.author,
                        children: (0, S.jsx)(u.default, {
                            msg: y,
                            contact: y.senderObj
                        })
                    }) : null,
                    B = y.getSuspiciousLinks().length > 0;
                return (0, S.jsx)(f.default, {
                    hover: I,
                    onClick: function() {
                        k(y.unsafe(), !N)
                    },
                    onMouseEnter: I ? null : function() {
                        I || w(!0)
                    },
                    onMouseOver: I ? null : function() {
                        I || w(!0)
                    },
                    onMouseLeave: I ? function() {
                        I && w(!1)
                    } : null,
                    children: (0, S.jsxs)("div", {
                        className: p.default.msg,
                        children: [(0, S.jsx)(_.default, {
                            transitionName: "delay-leave",
                            children: O
                        }), (0, S.jsx)(b.MessageContainer, {
                            isSentByMe: y.isSentByMe,
                            children: (0, S.jsxs)("div", {
                                className: (0, l.default)(p.default.bubble, (t = {}, (0, i.default)(t, p.default.hasAuthor, a), (0, i.default)(t, p.default.hasSuspiciousLinks, B), t)),
                                children: [G, (0, S.jsx)(g.SuspiciousLabel, {
                                    link: n,
                                    displayType: o.DISPLAY_TYPE.GALLERY
                                }), (0, S.jsx)(m.default, {
                                    title: n.url,
                                    isSentByMe: y.isSentByMe,
                                    canonicalUrl: n.domain,
                                    displayType: o.DISPLAY_TYPE.GALLERY,
                                    star: y.star
                                }), (0, S.jsx)(d.EmojiText, {
                                    text: L,
                                    selectable: true,
                                    className: p.default.text,
                                    dirMismatch: y.rtl !== h.default.isRTL(),
                                    direction: y.dir,
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
                p = a(n(8767)),
                m = a(n(74705)),
                v = a(n(36821)),
                g = n(47386),
                x = n(8413),
                C = n(69283),
                _ = a(n(60806)),
                b = n(43026),
                S = n(85893)
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
                    w = e.theme,
                    P = (0, E.useModelValues)(e.chat, ["linkCount", "docCount", "productCount", "endOfHistoryTransferType"]),
                    A = (0, S.default)(),
                    N = (0, y.default)();
                (0, j.useListener)(a, "add query_media_before", (function() {
                    A()
                })), (0, j.useListener)(a, "remove", (function(e) {
                    n && n.isSelected(e) && n.setVal(e, !1), A()
                })), (0, j.useListener)(a, "reset", (function() {
                    n && n.unsetAll(), A()
                }));
                var D, O = function(e, t, n, a, s, u) {
                        var c = null,
                            d = (0, l.default)(e, (function(e) {
                                return -e.t
                            })).filter(M).slice(0, !0 === t ? e.length : 6);
                        return (0, o.default)(d, (function(e, o) {
                            var l = !0 !== t && o >= 3 && o <= 5 ? "hideableSecondRow" : void 0,
                                d = (0, T.jsx)(m.default, {
                                    className: u ? v.default.roundedThumb : "",
                                    aspectRatio: u ? 1.1 : 1,
                                    msg: e,
                                    hoverEvent: t,
                                    selectable: n,
                                    selectedMessages: a,
                                    onMessageSelect: s,
                                    theme: l
                                }, e.id.toString());
                            if (!0 !== t) return [d];
                            var h = f.Clock.monthStr(e.t);
                            if (h !== c) {
                                c = h;
                                var p = (0, T.jsx)(g.default, {
                                    children: h
                                }, `header-${e.t}`);
                                return [].concat((0, i.default)((0, r.default)(6, (function(t) {
                                    return (0, T.jsx)(x.EmptyCanvas, {}, `padding-${e.t}-${t}`)
                                }))), [p, d])
                            }
                            return [d]
                        }))
                    }(a.toArray(), t, C, n, I, "new-chat-info" === w),
                    R = function(e) {
                        a.hasMediaBefore && N((function() {
                            a.queryMedia({
                                chat: (0, _.unproxy)(P),
                                msg: e
                            })
                        }))
                    },
                    L = (0, k.default)((function(e) {
                        a.hasMediaBefore && e.scrollTop + s.SCROLL_FUDGE > e.scrollHeight - e.clientHeight && R(a.head())
                    }), 100);
                if ((0, c.useEffect)((function() {
                        a.hasMediaBefore && R()
                    }), []), p.GK.supportsFeature(p.GK.F.MD_BACKEND) && P.endOfHistoryTransferType === d.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY) {
                    var G;
                    !0 === t ? G = u.fbt._("Older media may be available", null, {
                        hk: "1ml0rh"
                    }) : 0 === a.length && 0 === P.docCount && 0 === P.linkCount && 0 === P.productCount && (G = u.fbt._("Older files may be available", null, {
                        hk: "2BvwwV"
                    })), D = "new-chat-info" === w ? (0, T.jsx)(h.default, {
                        theme: "new-chat-info",
                        secondary: u.fbt._("Use WhatsApp on your phone to see the complete message history.", null, {
                            hk: "2qbSkX"
                        }),
                        children: G
                    }) : (0, T.jsx)(h.default, {
                        icon: (0, T.jsx)(b.default, {
                            name: "content-chat"
                        }),
                        theme: "list",
                        secondary: u.fbt._("Use WhatsApp on your phone to see the complete message history.", null, {
                            hk: "2qbSkX"
                        }),
                        children: G
                    })
                }
                return (0, T.jsxs)(T.Fragment, {
                    children: [(0, T.jsx)(x.MediaGalleryView, {
                        medias: O,
                        mediaCollection: a,
                        fullCollection: t,
                        chat: (0, _.unproxy)(P),
                        onScroll: function(e) {
                            L(e.currentTarget)
                        },
                        theme: w
                    }), D]
                })
            };
            var i = a(n(319)),
                r = a(n(98913)),
                o = a(n(94654)),
                l = a(n(89734)),
                s = n(80965),
                u = n(48360),
                c = n(67294),
                d = n(29656),
                f = n(10399),
                h = a(n(54864)),
                p = n(38032),
                m = a(n(48630)),
                v = a(n(89358)),
                g = a(n(16193)),
                x = n(41870),
                C = n(19499),
                _ = n(68220),
                b = a(n(7665)),
                S = a(n(57811)),
                j = n(8413),
                E = n(69283),
                k = a(n(15663)),
                y = a(n(48311)),
                T = n(85893);

            function M(e) {
                return !!p.GK.isMediaGalleryFixEnabled() || (!p.GK.supportsFeature(p.GK.F.MD_BACKEND) || (0, C.hasThumbnail)(e.mediaData))
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
                    _ = (0, i.default)(C, 2),
                    b = _[0],
                    S = _[1],
                    j = (0, o.useRef)(null);
                (0, h.useListener)(x, t.id.toString(), (function(e) {
                    x && b !== e && S(e)
                }));
                var E = t.mediaData,
                    k = E.type === s.default.TYPE.IMAGE && E.renderableUrl ? function(e) {
                        e.nativeEvent.dataTransfer.setData("text/uri-list", t.mediaData.renderableUrl)
                    } : null,
                    y = (0, r.default)(g);
                return (0, p.jsx)(c.MediaThumb, {
                    classes: y,
                    onClick: function(e) {
                        if (a && m) m(t, !b);
                        else if (E.mediaStage !== d.MEDIA_DATA_STAGE.ERROR_MISSING) {
                            var n;
                            e && e.stopPropagation();
                            var i = t.id;
                            if (E.isGif || E.type === s.default.TYPE.IMAGE) {
                                var r = j.current;
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
                    selected: b,
                    onMessageSelect: m,
                    onDragStart: k,
                    msg: t,
                    theme: v,
                    imgRef: function(e) {
                        j.current = e
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
            var i = a(n(11354)),
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
                    w = e.theme,
                    P = e.active,
                    A = e.imgRef,
                    N = e.containerRef,
                    D = e.onMessageSelect,
                    O = e.selected,
                    R = void 0 !== O && O,
                    L = e.onClick,
                    G = e.onDragStart,
                    B = e.preferPreview,
                    F = (0, E.default)(),
                    V = (0, l.useRef)(null),
                    U = (0, l.useRef)(null),
                    H = (0, l.useRef)(null),
                    W = (0, l.useState)(!1),
                    K = (0, r.default)(W, 2),
                    q = K[0],
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
                            rmrReason: _.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER
                        })),
                        function() {
                            null == A || A(null), null == N || N(null)
                        }
                }), []), (0, l.useEffect)((function() {
                    null == A || A(V.current), null == N || N(U.current)
                }), [A, N, V, U]);
                var Q, J = function() {
                        q || Y(!0)
                    },
                    ee = function(t) {
                        if (!0 !== e.showTooltip || "viewerFlowTransparent" === w || !(t instanceof HTMLElement)) return null;
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
                    te = (0, y.useTimeout)((function() {
                        var e;
                        H.current && (e = H.current, $(ee(e)))
                    }), 500),
                    ne = (0, r.default)(te, 2),
                    ae = ne[0],
                    ie = ne[1],
                    re = function(e) {
                        var t;
                        q || (e.persist(), Y(!0), t = e.target, H.current = t, ae())
                    },
                    oe = function() {
                        q && (ie(), Y(!1), $(null))
                    };
                (!0 === d || q && e.hoverEvent) && (Q = (0, T.jsxs)("div", {
                    className: p.default.mediaSelect,
                    children: [(0, T.jsx)("div", {
                        className: p.default.shadeTop,
                        onClick: e.onClick
                    }), (0, T.jsx)(s.default, {
                        onChange: function() {
                            D && D(a, !R)
                        },
                        hover: q,
                        checked: R
                    })]
                }));
                var le = (0, o.default)(e.classes, p.default.canvasComponent, (t = {}, (0, i.default)(t, p.default.canvasSelected, R), (0, i.default)(t, p.default.mediaGalleryThumbnail, "hideableSecondRow" !== w), (0, i.default)(t, p.default.chatInfoDrawerThumbnail, "hideableSecondRow" === w), (0, i.default)(t, p.default.canvasSecondRow, "hideableSecondRow" === w), (0, i.default)(t, p.default.viewerFlow, "viewerFlow" === w || "viewerFlowTransparent" === w), (0, i.default)(t, p.default.viewerFlowTransparent, "viewerFlowTransparent" === w), (0, i.default)(t, p.default.active, P), t)),
                    se = a.star ? (0, T.jsx)("div", {
                        className: p.default.iconStar,
                        children: (0, T.jsx)(b.default, {
                            name: "star"
                        })
                    }) : null,
                    ue = I(a.mediaData),
                    ce = Z ? (0, T.jsx)(S.UIE, {
                        displayName: "MediaThumbTitle",
                        popable: !0,
                        escapable: !0,
                        requestDismiss: function() {
                            $(null)
                        },
                        requestRecentFocusOnUnmount: !1,
                        children: (0, T.jsx)(j.default, {
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
                            rmrReason: _.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER
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
                        onMouseOver: J,
                        onMouseEnter: re,
                        onMouseLeave: oe,
                        children: [Q, (0, T.jsxs)("div", {
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
                    onMouseOver: J,
                    onMouseEnter: re,
                    onMouseLeave: oe,
                    children: [Q, (0, T.jsxs)("div", {
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
            }, t.hasThumbnail = I;
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
                p = a(n(52901)),
                m = a(n(81690)),
                v = a(n(76581)),
                g = n(88259),
                x = a(n(86582)),
                C = n(41655),
                _ = a(n(50507)),
                b = a(n(7665)),
                S = n(16835),
                j = a(n(84555)),
                E = a(n(57811)),
                k = n(8413),
                y = n(59388),
                T = n(85893),
                M = n(54302).Mirrored(["Loading", "Ready", "Error", "NeedsPoke", "NeedsUpload"]);

            function I(e) {
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
                u = a(n(65383)),
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
                            var C, _ = null == g.fullPreviewData,
                                b = null !== (C = g.fullPreviewData) && void 0 !== C ? C : g.preview;
                            return (0, h.jsx)(p, (0, r.default)((0, r.default)({}, x), {}, {
                                className: (0, o.default)(u.default.mediaCanvas, (0, i.default)({
                                    "media-video-thumb": g.isGif && !g.preview
                                }, u.default.blur, _)),
                                shade: !0,
                                url: b instanceof f.default ? b.url() : null
                            }));
                        case s.default.TYPE.IMAGE:
                            var S = null != g.preview && g.mediaStage === c.MEDIA_DATA_STAGE.NEED_POKE,
                                j = function(e) {
                                    return (0, h.jsx)(p, (0, r.default)((0, r.default)({}, x), {}, {
                                        className: (0, o.default)(u.default.mediaCanvas, (0, i.default)({}, u.default.blur, S)),
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
                                E = function() {
                                    return null != g.preview ? j(null) : (0, h.jsx)(p, (0, r.default)((0, r.default)({}, x), {}, {
                                        className: u.default.mediaCanvas,
                                        shade: a.star
                                    }))
                                };
                            return !0 === v ? E() : (0, h.jsx)("div", {
                                className: u.default.mediaCanvas,
                                children: (0, h.jsx)(d.default, {
                                    mediaData: g,
                                    placeholderRenderer: E,
                                    renderProgressively: !0,
                                    downloadMedia: n,
                                    children: j
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
                s = a(n(54963)),
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
                r = a(n(17429)),
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
                c = a(n(68198)),
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
                    _ = e.selectable,
                    b = e.onMessageSelect,
                    S = e.queryCollection,
                    j = e.selectedMessages,
                    E = e.renderElements,
                    k = e.onProductDetail,
                    y = e.setScrollOffset,
                    T = (0, h.default)();
                (0, o.useImperativeHandle)(t, (function() {
                    return {
                        forceUpdate: T
                    }
                }));
                var M = (0, o.useRef)(null),
                    I = function(e) {
                        a && S(e)
                    },
                    w = (0, p.default)((function(e) {
                        var t = e.scrollHeight - e.clientHeight - e.scrollTop;
                        a && t < r.SCROLL_FUDGE && I(v.head()), y && y(e.scrollTop)
                    }), 100);
                (0, o.useEffect)((function() {
                    a && I();
                    var e = M.current;
                    return e && (e.scrollTop = C),
                        function() {
                            w.cancel()
                        }
                }), []);
                var P = function(e, t) {
                        var n = (0, f.unproxy)(e);
                        _ && void 0 !== t ? b(n, t) : l.Cmd.openChatAt(n.chat, n.chat.getSearchContext(n))
                    },
                    A = E ? E(P) : v.map((function(e, t) {
                        return (0, m.jsx)(d.default, {
                            msg: e,
                            selectable: _,
                            selectedMessages: j,
                            onMessageSelect: b,
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
                        w(e.target)
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
                    _ = function() {
                        C(!1), u.Cmd.closeModal()
                    },
                    b = n.isMuted,
                    S = t.muteExpiration;
                if (t.archive && (0, f.archiveV2Supported)() && a.showArchiveV2) return (0, x.jsx)(d.default, {
                    children: (0, x.jsx)(v.TextSpan, {
                        theme: "muted",
                        size: "16",
                        children: r.fbt._("Archived chats are muted", null, {
                            hk: "31ZVD"
                        })
                    })
                });
                var j, E = b ? function() {
                        var e = t.isGroup ? h.default.t(360) : h.default.t(359);
                        u.Cmd.openModal((0, x.jsx)(c.default, {
                            onOK: _,
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
                        checked: b,
                        onChange: E
                    }),
                    y = b ? h.default.t(873) : r.fbt._("Mute notifications", null, {
                        hk: "2Fm15X"
                    }),
                    T = "new-chat-info" === e.theme;
                if (b && S) {
                    var M = s.Clock.untilStr(S);
                    j = (0, x.jsx)(v.TextDiv, {
                        theme: "muted",
                        children: M
                    })
                }
                if (T) {
                    var I = (0, x.jsx)(m.default, {
                            checked: b,
                            onChange: E
                        }),
                        w = (0, x.jsx)(v.TextSpan, {
                            theme: "title",
                            children: y
                        });
                    return (0, x.jsx)(o.default, {
                        icon: "settings-notifications",
                        a8nText: i.default.key("block-mute"),
                        side: I,
                        onClick: E,
                        title: w,
                        secondaryTitle: j
                    })
                }
                return (0, x.jsxs)(d.default, {
                    a8nText: i.default.key("block-mute"),
                    side: k,
                    onClick: E,
                    multiline: !(!b || !S),
                    children: [(0, x.jsx)(v.TextSpan, {
                        theme: "title",
                        children: y
                    }), j]
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
                var C, _ = (0, m.default)();
                d.GK.supportsFeature(d.GK.F.MD_BACKEND) && n.endOfHistoryTransferType === u.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY && (C = (0, v.jsx)(c.default, {
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
                            return _((function() {
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
                                a = v.default.t(345, {
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
                _ = n(85893),
                b = function(e) {
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
                            e.push((0, _.jsx)(f.default, {
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
                                children: (0, _.jsx)(p.EmojiText, {
                                    text: e._makeNameEnumeration(t, n.contact.name)
                                })
                            }))
                        }, e._makeNameEnumeration = function(e, t) {
                            var n = e.map((function(e) {
                                return e.formattedShortName || e.shortName
                            })).reduce((function(t, n, a) {
                                return [].concat((0, i.default)(t), [n, a !== e.length - 1 && v.default.t(411) || ""])
                            }), []);
                            return v.default.t(346, {
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
                            this.push((0, _.jsx)(x.SelectModal, {
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
            t.default = b
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
                m = n(33272),
                v = a(n(53187)),
                g = a(n(18345)),
                x = n(19288),
                C = a(n(50177)),
                _ = n(85893),
                b = function(e) {
                    (0, u.default)(n, e);
                    var t = (0, c.default)(n);

                    function n() {
                        return (0, l.default)(this, n), t.apply(this, arguments)
                    }
                    return (0, s.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, _.jsx)(S, {
                                contactId: this.props.contactId,
                                onClose: this.pop
                            }))
                        }
                    }]), n
                }(C.default);

            function S(e) {
                var t = e.contactId,
                    n = (0, f.useState)(void 0),
                    a = (0, o.default)(n, 2),
                    l = a[0],
                    s = a[1],
                    u = (0, f.useState)(!0),
                    c = (0, o.default)(u, 2),
                    C = c[0],
                    b = c[1];
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
                                        n = e.sent, a = Array.isArray(n) ? n[0] : n, (r = a.serialize()) ? (s(r.legalEntityDetails || void 0), b(!1)) : __LOG__(3)`compliance: cannot fetch business details (${t.toString()})`;
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
                var S = null != l ? l : {},
                    j = S.entityName,
                    E = S.customerCareDetails,
                    k = S.grievanceOfficerDetails,
                    y = (0, m.getEntityTypeText)(l);
                return (0, _.jsxs)(v.default, {
                    theme: "striped",
                    children: [(0, _.jsx)(x.DrawerHeader, {
                        title: d.fbt._("Business details", null, {
                            hk: "m9xzp"
                        }),
                        type: x.DRAWER_HEADER_TYPE.SMALL,
                        onCancel: e.onClose
                    }), (0, _.jsx)(g.default, {
                        theme: C ? "center-content" : void 0,
                        children: C ? (0, _.jsx)(p.ComplianceInfoLoading, {}) : (0, _.jsxs)(_.Fragment, {
                            children: [(0, _.jsxs)(p.ComplianceInfoGroup, {
                                children: [(0, _.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: j,
                                    label: d.fbt._("Legal Name of Business", null, {
                                        hk: "2s9jD"
                                    })
                                }), (0, _.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: y,
                                    label: d.fbt._("Business Type", null, {
                                        hk: "48J73B"
                                    })
                                })]
                            }), (0, _.jsxs)(p.ComplianceInfoGroup, {
                                title: d.fbt._("Customer Care Information", null, {
                                    hk: "qlYos"
                                }),
                                children: [(0, _.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == E ? void 0 : E.mobileNumber,
                                    label: d.fbt._("Mobile Phone Number", null, {
                                        hk: "PMTTg"
                                    }),
                                    forceLTR: !0
                                }), (0, _.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == E ? void 0 : E.landlineNumber,
                                    label: d.fbt._("Landline Phone Number", null, {
                                        hk: "tXYaf"
                                    }),
                                    forceLTR: !0
                                }), (0, _.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == E ? void 0 : E.email,
                                    label: d.fbt._("Email Address", null, {
                                        hk: "2jYxR1"
                                    })
                                })]
                            }), (0, _.jsxs)(p.ComplianceInfoGroup, {
                                title: d.fbt._("Grievance Officer Information", null, {
                                    hk: "3emd7I"
                                }),
                                children: [(0, _.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == k ? void 0 : k.name,
                                    label: d.fbt._("Name", null, {
                                        hk: "2vEs6r"
                                    })
                                }), (0, _.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == k ? void 0 : k.mobileNumber,
                                    label: d.fbt._("Mobile Phone Number", null, {
                                        hk: "3kk5I"
                                    }),
                                    forceLTR: !0
                                }), (0, _.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == k ? void 0 : k.landlineNumber,
                                    label: d.fbt._("Landline Phone Number", null, {
                                        hk: "4GBzF0"
                                    })
                                }), (0, _.jsx)(p.ComplianceInfoPrimitiveField, {
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
            t.default = b
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
                _ = n(96706),
                b = a(n(55422)),
                S = a(n(50177)),
                j = n(38032),
                E = n(2629),
                k = a(n(99337)),
                y = n(86785),
                T = n(3995),
                M = a(n(11465)),
                I = n(26224),
                w = n(53082),
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
                W = n(4099),
                K = a(n(40290)),
                q = n(45323),
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
                                n = (0, E.canViewCollections)() ? (0, z.jsx)(h.default, {
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
                            (0, E.canViewCollections)() && H.QPL.markerStart(W.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, {
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
                            var t = (0, z.jsx)(q.StarredDrawerLoadable, {
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
                                var i = (0, z.jsx)(y.GroupInviteLinkDrawerLoadable, {
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
                            var t = (0, z.jsx)(w.LiveLocationDrawerLoadable, {
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
                                a = (0, z.jsx)(b.default, {
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
                                        if (!j.GK.supportsFeature(j.GK.F.MD_BACKEND)) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.next = 7, (0, V.queryAndUpdateGroupMetadataById)(a.id);
                                    case 7:
                                        if (!(0, E.communitiesEnabled)() || (null === (i = a.groupMetadata) || void 0 === i ? void 0 : i.groupType) !== I.GroupType.COMMUNITY) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.next = 10, (0, U.queryAndUpdateSubGroupMetadataById)(a.id);
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
                                        })) : a.isUser && (a.contact.isBusiness && (0, E.canSeeBizProfileV3)() && p.Cmd.setDrawerContext("right", (0, D.buildProductCatalogContext)(new O.ProductCatalogSession, (0, x.getMaybeBizPlatformForLogging)(a.contact.id.toString()), N.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE)), this.push((0, z.jsx)(g.default, {
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
                }(S.default);
            t.default = function(e) {
                return (0, z.jsx)(_.DrawerContext.Consumer, {
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
                    I = (0, y.default)(),
                    w = (0, k.default)(),
                    P = (0, C.default)(),
                    A = (0, _.default)((function() {
                        return n.chat.constructMediaMsgs(n)
                    })),
                    N = A.current.length,
                    D = (0, S.default)(N),
                    O = (0, _.default)((function() {
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
                    W = H[0],
                    K = H[1],
                    q = (0, u.useState)(!1),
                    Y = (0, i.default)(q, 2),
                    z = Y[0],
                    X = Y[1],
                    Z = (0, u.useState)(!0),
                    $ = (0, i.default)(Z, 2),
                    Q = $[0],
                    J = $[1],
                    ee = (0, S.default)(W),
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
                        I.aborted || J(!1)
                    }))
                }), []), (0, u.useEffect)((function() {
                    d.GK.isMediaGalleryFixEnabled() && N > (null != D ? D : 0) && te()
                }));
                var ae = function(e) {
                        w((function() {
                            A.current.loadMoreAroundIfNeeded(e)
                        })), K(e)
                    },
                    ie = function(e) {
                        if (e && e.stopPropagation(), !z) {
                            var t = W;
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
                                    I.aborted || "number" == typeof e.length && e.length > 0 && W === n && ie()
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
                            var t = W;
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
                                    I.aborted || "number" == typeof e.length && e.length > 0 && W === n && re()
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
                    le = (0, j.default)((function() {
                        K(null), oe()
                    })),
                    se = (null == W ? void 0 : W.isViewOnce) || (null == W ? void 0 : W.isStickerMsg);
                (0, b.useListener)(se ? W : null, "revoked", le), (0, u.useEffect)((function() {
                    if (se && (null == W ? void 0 : W.isEphemeral)) {
                        var e = W.timeUntilExpiration();
                        null != e && setTimeout(le, 1e3 * e)
                    }
                }), [W, le, se]);
                var ue = se ? null : A.current;
                (0, b.useListener)(ue, "remove", (function(e, t, a) {
                    var i = A.current,
                        r = W;
                    if (i.includes(n) || null != r && null != r.id && r.id.toString() !== e.id.toString()) P();
                    else {
                        var l = a.index;
                        0 === i.length ? oe() : i.length === l ? ae((0, o.default)(i.at(l - 1), "mediaMsgs.at(index - 1)")) : ae((0, o.default)(i.at(l), "mediaMsgs.at(index)"))
                    }
                })), (0, b.useListener)(ue, "reset", (function() {
                    oe()
                })), (0, b.useListener)(ue, "query_media_after", (function() {
                    P()
                })), (0, b.useListener)(ue, "query_media_before", (function() {
                    var e = V.current;
                    e && (R.current = e.scrollWidth, e instanceof HTMLElement && P())
                })), (0, b.useListener)(window, "keydown", (function(e) {
                    var t = f.default.isRTL();
                    e.keyCode === r.default.LEFT ? t ? ie() : re() : e.keyCode === r.default.RIGHT && (t ? re() : ie())
                })), (0, u.useEffect)((function() {
                    w((function() {
                        W && A.current.loadMoreAroundIfNeeded(W)
                    }))
                }), [W, A, w]), (0, u.useEffect)((function() {
                    if (ee !== W) te(!0);
                    else {
                        var e = V.current;
                        if (!e || null == R.current || 0 === R.current) return;
                        e instanceof HTMLElement && (e.scrollLeft += e.scrollWidth - R.current), R.current = null
                    }
                }), [W, ee]);
                var ce = (0, E.default)((function(e, t, n) {
                    if (0 !== t.length && null != n) {
                        if (t.hasMediaBefore && n < e.clientWidth) {
                            var a = (0, o.default)(t.head(), "mediaMsgs.head()");
                            w((function() {
                                t.queryMedia({
                                    chat: a.chat,
                                    msg: a
                                }), P()
                            }))
                        }
                        if (t.hasMediaAfter && n + l.SCROLL_FUDGE > e.scrollWidth - 2 * e.clientWidth) {
                            var i = (0, o.default)(t.last(), "mediaMsgs.last()");
                            w((function() {
                                t.queryMedia({
                                    chat: i.chat,
                                    msg: i,
                                    direction: "after"
                                }), P()
                            }))
                        }
                    }
                }), 100);
                if (!W) return null;
                var de = A.current,
                    fe = de.last(),
                    he = de.hasMediaAfter || W !== fe ? ie : null,
                    pe = de.head(),
                    me = null;
                me = de.hasMediaBefore || W !== pe ? re : null, d.GK.supportsFeature(d.GK.F.MD_BACKEND) && (me = (de.hasMediaBefore || W !== pe) && function() {
                    if (!W) return !1;
                    for (var e = A.current.indexOf(W) - 1; e > 0; e--) {
                        var t = A.current.at(e);
                        if (t && (0, h.hasThumbnail)(t.mediaData)) return !0
                    }
                    return !1
                }() ? re : null);
                return (0, M.jsxs)("div", {
                    className: z ? "img-zoomed-in" : null,
                    children: [ne(W) && (0, M.jsx)(v.default, {
                        activeMsg: W,
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
                        msg: W,
                        mediaData: W.mediaData,
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
                        isAnimatingIn: Q,
                        onImageLoad: O.current ? function() {
                            var e = O.current;
                            e && (e.markUiActionT(), e.commit(), (0, x.logUiActionShadowPrivateStatsTestEvents)(), O.current = null)
                        } : null,
                        msgIndexInAlbum: function() {
                            var e = -1;
                            if (!a || !W) return e;
                            var t = W.id.toString();
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
                _ = a(n(39394)),
                b = n(8413),
                S = a(n(40054)),
                j = a(n(3227)),
                E = a(n(15663)),
                k = a(n(48311)),
                y = a(n(1379)),
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
                                return e.next = 2, Promise.all([n.e(721), n.e(1359), n.e(6673), n.e(275)]).then(n.bind(n, 98867));
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
                        title: l.default.t(762),
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
                        return new _.default
                    })),
                    B = (0, A.default)((function() {
                        return new I.default([], (function(e) {
                            return e.id.toString()
                        }))
                    })),
                    F = (0, l.useRef)(null),
                    V = (0, l.useState)(!1),
                    U = (0, i.default)(V, 2),
                    H = U[0],
                    W = U[1],
                    K = (0, l.useState)(n),
                    q = (0, i.default)(K, 2),
                    Y = q[0],
                    z = q[1],
                    X = function() {
                        return (0, j.archiveV2Supported)() && a.showArchiveV2
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
                    Q = (0, i.default)($, 3),
                    J = Q[0],
                    ee = Q[1],
                    te = Q[2],
                    ne = function() {
                        var e = d.ChatCollection.some((function(e) {
                            return e.archive
                        }));
                        return X() && e && J && !H
                    };
                (0, l.useEffect)((function() {
                    if (ne() && ee(), X() && (0, y.isElevatedImportantMessageEnabled)()) {
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
                        })), (0, j.archiveV2Supported)() && a.archive.enabled || re()
                    };
                B.current.init(Y, !0), ne() && (ae = (0, L.jsxs)("div", {
                    className: s.default.nuxContainer,
                    children: [(0, L.jsxs)(b.FlexColumn, {
                        align: "center",
                        children: [(0, L.jsx)("span", {
                            className: s.default.nuxIcon,
                            children: (0, L.jsx)(w.default, {
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
                                    children: S.GK.supportsFeature(S.GK.F.MD_BACKEND) ? o.fbt._("To reduce interruptions, archived chats will stay here with notifications turned off. To change this experience, go to Settings > Chats on your phone.", null, {
                                        hk: "1VSdJQ"
                                    }) : o.fbt._("To reduce interruptions, archived chats will stay here with notifications turned off. To change this experience, go to Settings > Archived Chats.", null, {
                                        hk: "1gz2m1"
                                    })
                                })
                            })
                        })]
                    }), (0, L.jsx)("button", {
                        onClick: function() {
                            te(), W(!0)
                        },
                        className: s.default.btnClose,
                        children: (0, L.jsx)(w.default, {
                            name: "x-alt"
                        })
                    })]
                }));
                ie = Y.length > 0 ? (0, L.jsxs)(E.HotKeys, {
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
                                hideArchivedIcon: (0, j.archiveV2Supported)() && a.archive.enabled,
                                hideMuteIcon: X(),
                                hideMuteOption: X(),
                                ephemeralIcon: "chat-list"
                            })
                        }
                    })]
                }) : (0, L.jsx)(x.Archived, {});
                var le = !S.GK.supportsFeature(S.GK.F.MD_BACKEND) && (0, j.archiveV2Supported)() && a.archive.enabled ? (0, L.jsx)(T.MenuBarItem, {
                        a8nText: "archived-menu",
                        icon: (0, L.jsx)(w.default, {
                            name: "menu"
                        }),
                        title: k.default.t(621),
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
                    se = (0, j.archiveV2Supported)() && a.archive.enabled ? o.fbt._("Archived", null, {
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
                s = a(n(85967)),
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
                _ = a(n(92546)),
                b = n(27968),
                S = n(38032),
                j = n(2629),
                E = n(58342),
                k = a(n(45159)),
                y = n(12231),
                T = n(91823),
                M = n(15849),
                I = a(n(39916)),
                w = a(n(7665)),
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
                            return n.name === n.verifiedName ? h.default.t(865, {
                                businessName: n.verifiedName
                            }) : h.default.t(866, {
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
                            return h.default.t(1010, {
                                businessName: n.formattedName
                            })
                    }
                }();
                var a = (0, m.jsx)(o.default, {
                    href: (0, d.getBusinessFaqUrl)(),
                    onClick: g,
                    children: h.default.t(564)
                });
                return (0, m.jsxs)(s.default, {
                    onOK: v,
                    okText: h.default.t(699),
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
                    b = n.verifiedName,
                    S = (0, p.getBusinessFaqUrl)(),
                    j = !d.Conn.isSMB;
                (0, r.useEffect)((function() {
                    j && new v.default.BannerEvent({
                        bannerType: v.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                        bannerOperation: v.default.BANNER_OPERATIONS.SHOWN
                    }).commit()
                }), [j]);
                var E = a === l.VERIFIED_LEVEL.HIGH ? m.default.t(1007, {
                    businessName: b
                }) : i.fbt._("This business uses WhatsApp Business, which allows them to add their opening hours, address, website and catalog of products or services.", null, {
                    hk: "82W5f"
                });
                return (0, _.jsxs)(c.default, {
                    title: i.fbt._("About WhatsApp Business", null, {
                        hk: "3XF5gx"
                    }),
                    onOK: function() {
                        u.Cmd.closeModal(), j && new v.default.BannerEvent({
                            bannerType: v.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: v.default.BANNER_OPERATIONS.DISMISS
                        }).commit()
                    },
                    okText: i.fbt._("OK", null, {
                        hk: "2KEeHb"
                    }),
                    children: [(0, _.jsx)(f.EmojiText, {
                        text: E
                    }), " ", (0, _.jsx)(s.default, {
                        href: S,
                        onClick: function(e) {
                            e.preventDefault(), u.Cmd.closeModal(), setTimeout((function() {
                                return (0, h.openExternalLink)(S)
                            }), 10)
                        },
                        children: m.default.t(564)
                    }), j && (0, _.jsx)("div", {
                        className: o.default.footerNote,
                        children: (0, _.jsxs)(x.TextSpan, {
                            theme: "muted",
                            size: "13",
                            children: [i.fbt._("If you’re a business, the free WhatsApp Business app can help.", null, {
                                hk: "3gfQun"
                            }), (0, _.jsx)("br", {}), (0, _.jsx)(s.default, {
                                onClick: function(e) {
                                    e.preventDefault(), u.Cmd.closeModal(), new v.default.BannerEvent({
                                        bannerType: v.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                                        bannerOperation: v.default.BANNER_OPERATIONS.CLICK
                                    }).commit(), setTimeout((function() {
                                        return u.Cmd.openModal((0, _.jsx)(g.SmbAppUpsellModal, {}))
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
                o = a(n(85845)),
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
                _ = n(85893)
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
                            children: c.default.t(564)
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
                var e = (0, o.useRef)(null),
                    t = (0, o.useRef)(null),
                    n = (0, o.useContext)(c.ThemeContext).theme,
                    a = "dark" === n;
                return (0, o.useEffect)((function() {
                    return null != e.current && (t.current = new s.default(e.current, {
                            text: "https://www.whatsapp.com/business/download",
                            colorDark: "#122e31",
                            colorLight: "#ffffff",
                            width: l.default.QR_EDGE / 2,
                            height: l.default.QR_EDGE / 2,
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
                        className: (0, r.default)(u.default.code, (0, i.default)({}, u.default.codeDarkMode, a)),
                        children: (0, d.jsx)(f, {
                            theme: n
                        })
                    })
                })
            };
            var i = a(n(59713)),
                r = a(n(94184)),
                o = n(67294),
                l = a(n(94253)),
                s = a(n(37360)),
                u = a(n(2256)),
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
                _ = n(38032),
                b = a(n(45159)),
                S = n(68220),
                j = a(n(7665)),
                E = n(22552),
                k = a(n(57811)),
                y = a(n(39394)),
                T = n(8413),
                M = n(69283),
                I = a(n(25319)),
                w = n(68034),
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
                    L = (0, I.default)(),
                    G = (0, w.useNewChatInfoColors)(),
                    B = L ? G : null,
                    F = (0, y.default)((function() {
                        return new C.default
                    })),
                    V = (0, M.useModelValues)(e.chat, ["id", "groupMetadata"]);
                (0, T.useListener)(null === (n = V.groupMetadata) || void 0 === n ? void 0 : n.participants, ["add", "remove", "sort", "reset"], O);
                var U = null;
                D && (U = (0, A.jsx)(c.default, {
                    onMediaGallery: D,
                    chat: (0, S.unproxy)(V)
                }));
                var H, W = (0, A.jsx)(u.ChatInfoDrawerButtonsSection, {
                    newChatInfo: L,
                    children: (0, A.jsx)(m.default, {
                        a8nText: "li-delete-broadcast",
                        icon: (0, A.jsx)(j.default, {
                            name: "delete"
                        }),
                        color: "danger",
                        theme: L ? "new-chat-info" : "list-aligned",
                        onClick: function() {
                            f.Cmd.deleteOrExitChat((0, S.unproxy)(V))
                        },
                        children: b.default.t(891)
                    })
                });
                (null === (a = V.groupMetadata) || void 0 === a ? void 0 : a.creation) ? (H = d.Clock.createdStr(V.groupMetadata.creation), H = (0, A.jsx)(E.TextDiv, {
                    theme: "small",
                    children: H
                })) : H = null;
                var K = null;
                _.GK.supportsFeature(_.GK.F.MD_BACKEND) && (K = (0, A.jsx)(x.default, {
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
                var q = null;
                return K && (q = (0, A.jsxs)(u.ChatInfoDrawerSection, {
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
                        children: [(0, A.jsx)(E.TextDiv, {
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
                                chat: (0, S.unproxy)(V)
                            }), U, undefined, q, (0, A.jsx)(l.default, {
                                chat: (0, S.unproxy)(V),
                                flatListController: F.current
                            }), W]
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
                var t, n, a = (0, g.default)(),
                    _ = (0, m.default)(),
                    b = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants;
                (0, v.useListener)(b, "add remove reset", _);
                var S = (0, r.useMemo)((function() {
                        return b ? b.map((function(e) {
                            return {
                                itemKey: e.id.toString(),
                                participant: e,
                                height: 68
                            }
                        })) : []
                    }), [b]),
                    j = function(e, t) {
                        x.default.equals((0, f.getMaybeMeUser)(), t.id) || (0, c.findChat)(t.id).then((function(e) {
                            l.Cmd.openChatFromUnread(e).then((function(t) {
                                t && l.Cmd.focusChatTextInput(e)
                            }))
                        }))
                    },
                    E = null !== (n = null == b ? void 0 : b.length) && void 0 !== n ? n : 0,
                    k = a ? h.default.t(1e3, {
                        count: E,
                        _plural: E
                    }) : i.fbt._("Recipients", null, {
                        hk: "1rVFI5"
                    }),
                    y = a ? null : (0, C.jsx)(p.TextSpan, {
                        theme: "section-title",
                        children: h.default.n(E)
                    });
                return (0, C.jsx)(o.ChatInfoDrawerListSection, {
                    newChatInfo: a,
                    title: k,
                    subtitle: y,
                    children: (0, C.jsx)(d.FlatList, {
                        flatListController: e.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: S,
                        renderItem: function(e) {
                            var t = e.participant,
                                n = u.ContactCollection.gadd(t.id);
                            return (0, C.jsx)(s.Contact, {
                                contact: n,
                                theme: a ? "new-chat-info" : "drawer-list",
                                admin: !!t.isAdmin,
                                onClick: j,
                                waitIdle: !0
                            }, t.id.toString())
                        }
                    })
                })
            };
            var i = n(48360),
                r = n(67294),
                o = n(82506),
                l = n(65901),
                s = n(65002),
                u = n(20050),
                c = n(68985),
                d = n(73568),
                f = n(1577),
                h = a(n(45159)),
                p = n(22552),
                m = a(n(57811)),
                v = n(8413),
                g = a(n(25319)),
                x = a(n(78208)),
                C = n(85893)
        },
        52988: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = (0, v.default)(),
                    b = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants,
                    S = (0, m.useModelValues)(e.chat.contact, ["name"]),
                    j = (0, h.default)();
                (0, p.useListener)(b, "add remove reset", j);
                var E = null !== (n = null == b ? void 0 : b.length) && void 0 !== n ? n : 0,
                    k = i.fbt._("Broadcast List", null, {
                        hk: "46AT9o"
                    }).toString() + " · " + u.default.t(1e3, {
                        count: E,
                        _plural: E
                    }),
                    y = S.name ? (0, g.jsx)(c.Name, {
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
                            children: y
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
                    className: (0, r.default)(_),
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
                _ = {
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
        82506: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChatInfoDrawerButtonsSection = function(e) {
                return (0, s.jsx)(d, (0, i.default)((0, i.default)({}, e), {}, {
                    xstyle: e.newChatInfo && h.drawerSectionContainer,
                    children: e.children
                }))
            }, t.ChatInfoDrawerListSection = function(e) {
                return (0, s.jsx)(d, (0, i.default)((0, i.default)({}, e), {}, {
                    xstyle: e.newChatInfo && f.drawerSectionContainer,
                    children: (0, s.jsx)("div", {
                        className: (0, o.default)(e.newChatInfo && f.contentContainer),
                        children: e.children
                    })
                }))
            }, t.ChatInfoDrawerSection = d, t.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST = t.INFO_DRAWER_MAX_ROWS = void 0;
            var i = a(n(81109)),
                r = a(n(6479)),
                o = a(n(56720)),
                l = a(n(46821)),
                s = n(85893),
                u = ["newChatInfo"];
            t.INFO_DRAWER_MAX_ROWS = 10;
            t.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST = 11;
            var c = {
                title: {
                    paddingTop: "i5tg98hk",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "przvwfww",
                    paddingStart: "gx1rr48f",
                    marginBottom: "or9x5nie"
                },
                titleText: {
                    fontSize: "bze30y65",
                    lineHeight: "a4ywakfo"
                },
                container: {
                    paddingTop: "i4pc7asj",
                    paddingEnd: "bcymb0na",
                    paddingBottom: "myel2vfb",
                    paddingStart: "e8k79tju"
                },
                containerWithoutTitle: {
                    paddingTop: "i5tg98hk",
                    paddingEnd: "bcymb0na",
                    paddingBottom: "przvwfww",
                    paddingStart: "e8k79tju",
                    marginBottom: "mpdn4nr2"
                }
            };

            function d(e) {
                var t = e.newChatInfo,
                    n = (0, r.default)(e, u);
                return t ? (0, s.jsx)(l.default, (0, i.default)((0, i.default)({}, n), {}, {
                    xstyle: [c.container, null == n.title && c.containerWithoutTitle, n.xstyle],
                    titleXStyle: c.title,
                    titleTextXStyle: c.titleText,
                    children: n.children
                })) : (0, s.jsx)(l.default, (0, i.default)((0, i.default)({}, n), {}, {
                    children: n.children
                }))
            }
            var f = {
                drawerSectionContainer: {
                    paddingBottom: "przvwfww"
                },
                contentContainer: {
                    marginTop: "tt8xd2xn",
                    marginEnd: "dl6j7rsh",
                    marginBottom: "mpdn4nr2",
                    marginStart: "avk8rzj1"
                }
            };
            var h = {
                drawerSectionContainer: {
                    paddingTop: "i5tg98hk",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "przvwfww",
                    paddingStart: "gx1rr48f"
                }
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
                    r = (0, S.jsx)(v.default, {
                        color: "secondary",
                        name: "chevron-right-alt",
                        directional: !0
                    }),
                    o = (0, S.jsxs)(f.FlexRow, {
                        align: "center",
                        children: [i && (h.GK.isMediaGalleryFixEnabled() ? (0, S.jsx)(E, {
                            chat: t
                        }) : (0, S.jsx)(k, {
                            chat: t
                        })), (0, S.jsx)("div", {
                            children: r
                        })]
                    });
                return (0, S.jsx)(d.ChatInfoDrawerSection, {
                    newChatInfo: i,
                    a8nText: "section-media",
                    title: a,
                    titleOnClick: n,
                    subtitle: o,
                    theme: i ? void 0 : "padding",
                    xstyle: i && j.drawerSection,
                    children: (0, S.jsx)(p.default, {
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
                _ = i(n(48311)),
                b = i(n(1379)),
                S = n(85893),
                j = {
                    mediaCount: {
                        marginEnd: "bugiwsl0",
                        fontSize: "bze30y65",
                        color: "g01nkquw"
                    },
                    drawerSection: {
                        paddingBottom: "aiput80m"
                    }
                };

            function E(e) {
                var t = function(e) {
                    var t = (0, u.useState)(null),
                        n = (0, l.default)(t, 2),
                        a = n[0],
                        i = n[1],
                        r = (0, b.default)(),
                        o = (0, u.useCallback)((function() {
                            e.countAllMedia().then((function(e) {
                                r.aborted || i(e)
                            }))
                        }), [e, r]);
                    return (0, u.useEffect)(o, [o]), (0, x.useListener)(e.getMediaMsgs(), ["add", "remove"], o), (0, x.useListener)(e.getDocMsgs(), ["add", "remove"], o), (0, x.useListener)(e.getLinkMsgs(), ["add", "remove"], o), a
                }(e.chat);
                return (0, S.jsx)("div", {
                    className: (0, c.default)(j.mediaCount),
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
                    var s = (0, _.default)();
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
                return (0, S.jsx)("div", {
                    className: (0, c.default)(j.mediaCount),
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
                    title: o.default.t(366),
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
                r = a(n(12945)),
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
                var t, n, a, j = e.contact,
                    E = e.onProductCatalog,
                    k = (0, r.useContext)(f.DrawerContext),
                    y = (0, v.getProductCatalogSessionId)(k),
                    T = (0, _.default)((0, x.unproxy)(e.contact)),
                    M = (0, C.default)();
                var I, w, P, A = c.ChatCollection.getActive();
                (null == A ? void 0 : A.id.equals(j.id)) || ((0, l.logMessageClick)(y), a = (0, b.jsx)(o.default, {
                    icon: "chat-msg",
                    label: i.fbt._("Message", null, {
                        hk: "4zCxpw"
                    }),
                    onClick: function() {
                        (0, h.findChat)(j.id).then((function(e) {
                            d.Cmd.openChatFromUnread(e).then((function() {
                                d.Cmd.closeDrawerRight()
                            }))
                        }))
                    },
                    a8nText: "business-action chat",
                    theme: M ? "new-chat-info" : void 0
                }));
                T.isVoiceCallEnabled && (I = (0, b.jsx)(o.default, {
                    icon: "voice-call-filled",
                    label: i.fbt._("Voice call", null, {
                        hk: "393mz4"
                    }),
                    disabled: !T.canStartVoiceCall,
                    onClick: function() {
                        (0, l.logVoiceCallClick)(y), T.startVoiceCall()
                    },
                    a8nText: "business-action voice-call",
                    theme: M ? "new-chat-info" : void 0
                }));
                (null === (t = j.businessProfile) || void 0 === t || null === (n = t.profileOptions) || void 0 === n ? void 0 : n.commerceExperience) === s.COMMERCE_EXPERIENCE_TYPES.CATALOG && (w = (0, b.jsx)(o.default, {
                    icon: "catalog-filled",
                    label: i.fbt._("Catalog", null, {
                        hk: "3QDkTE"
                    }),
                    onClick: function() {
                        (0, l.logCatalogClick)(y), E((0, v.getProductCatalogContext)(k), "ContactInfo")
                    },
                    a8nText: "business-action catalog",
                    theme: M ? "new-chat-info" : void 0
                }));
                if ((0, u.hasShop)(j.businessProfile)) {
                    (0, m.bannedShopsEnabled)() && (0, u.isShopBanned)(j.businessProfile) || (P = (0, b.jsx)(o.default, {
                        icon: "shop-filled",
                        label: i.fbt._("Shop", null, {
                            hk: "3KsdlE"
                        }),
                        onClick: function() {
                            (0, l.logShopsClick)(y), (0, u.goToShop)(j.businessProfile)
                        },
                        a8nText: "business-action shop",
                        theme: M ? "new-chat-info" : void 0
                    }))
                }
                var N = (0, b.jsx)(o.default, {
                    icon: "forward-filled",
                    label: i.fbt._("Share", null, {
                        hk: "4F3c6E"
                    }).toString(),
                    onClick: function() {
                        (0, l.logForwardClick)(y), d.Cmd.openModal((0, b.jsx)(g.SendContactFlowLoadable, {
                            contacts: [(0, x.unproxy)(j)],
                            onContactsSent: function(e) {
                                d.Cmd.openChatFromUnread(e).then((function() {}))
                            }
                        }))
                    },
                    a8nText: "business-action forward",
                    theme: M ? "new-chat-info" : void 0
                });
                return (0, b.jsxs)(p.FlexRow, {
                    xstyle: S.actionsRow,
                    justify: "evenly",
                    children: [a, I, w, P, N]
                })
            };
            var i = n(48360),
                r = n(67294),
                o = (a(n(56720)), a(n(98056))),
                l = n(42661),
                s = n(96127),
                u = n(79614),
                c = n(4481),
                d = n(65901),
                f = n(96706),
                h = n(68985),
                p = n(27968),
                m = n(2629),
                v = n(52867),
                g = n(46324),
                x = n(68220),
                C = a(n(25319)),
                _ = a(n(53906)),
                b = n(85893),
                S = {
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
                    n = (0, p.getProductCatalogSessionId)((0, s.useContext)(f.DrawerContext)),
                    a = (0, d.getBusinessOpenState)(t),
                    i = (0, s.useState)(!0),
                    o = (0, r.default)(i, 2),
                    u = o[0],
                    h = o[1];
                if (null == t) return null;
                var v = (0, m.getBusinessHours)(t).map((function(e) {
                    var t = e.day,
                        n = e.hours,
                        i = e.first,
                        r = t,
                        o = n,
                        s = !1;
                    if (i) switch (a.status) {
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
                    return !i && u ? null : (0, x.jsx)(_, {
                        day: r,
                        dayIsOpen: s,
                        hours: o,
                        first: i,
                        collapsed: u
                    }, t)
                }));
                return (0, x.jsx)(g.default, {
                    xstyle: C.businessHours,
                    onClick: function() {
                        (0, c.logHoursClick)(n), h(!u)
                    },
                    a8nText: "business-hours-expand",
                    children: v
                })
            };
            var i = a(n(59713)),
                r = a(n(63038)),
                o = a(n(94184)),
                l = n(48360),
                s = n(67294),
                u = (a(n(56720)), a(n(33463))),
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

            function _(e) {
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
                var t, n, a, S, j, E, k = e.businessProfile,
                    y = (0, x.useModelValues)(k, ["description", "address", "latitude", "longitude", "website", "email", "businessHours"]),
                    T = y.description,
                    M = y.address,
                    I = y.latitude,
                    w = y.longitude,
                    P = y.website,
                    A = y.email,
                    N = y.businessHours,
                    D = (0, r.useContext)(d.DrawerContext),
                    O = (0, v.getProductCatalogSessionId)(D),
                    R = (0, C.default)();
                null != T && (t = (0, _.jsx)("div", {
                    className: l.default.section,
                    children: (0, _.jsx)(h.default, {
                        text: T,
                        textLimit: c.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                        children: function(e) {
                            var t = e.textLimit;
                            return (0, _.jsx)(f.EmojiText, {
                                className: l.default.description,
                                selectable: !0,
                                direction: "auto",
                                text: T,
                                textLimit: t
                            })
                        }
                    })
                }));
                null != N && (n = (0, _.jsx)("div", {
                    className: l.default.section,
                    children: (0, _.jsx)(o.default, {
                        businessHours: N
                    })
                }));
                null != M && (a = (0, _.jsx)("div", {
                    className: l.default.section,
                    children: (0, _.jsx)(f.EmojiText, {
                        selectable: !0,
                        direction: "auto",
                        text: M
                    })
                }));
                null != I && null != w && (S = (0, _.jsx)("div", {
                    style: {
                        height: 132
                    },
                    className: (0, i.default)(l.default.section, l.default.map),
                    children: (0, _.jsx)(m.default, {
                        lat: I,
                        lng: w,
                        name: M || "",
                        width: 590,
                        height: 132,
                        onClick: function() {
                            return (0, s.logLocationClick)(O)
                        },
                        a8nText: "business-info-map"
                    })
                }));
                null != A && (j = (0, _.jsx)("div", {
                    className: l.default.section,
                    children: (0, _.jsx)(p.ExternalLink, {
                        href: `mailto:${A}`,
                        onClick: function() {
                            return (0, s.logEmailClick)(O)
                        },
                        a8nText: "business-info-email",
                        children: A
                    })
                }));
                null != P && P.length > 0 && (E = (0, _.jsx)("div", {
                    className: l.default.section,
                    children: P.map((function(e) {
                        return (0, _.jsx)("div", {
                            children: (0, _.jsx)(p.ExternalLink, {
                                href: g.URL.toMaliciousSiteRedirect(e),
                                onClick: function() {
                                    return (0, s.logWebsiteClick)(O)
                                },
                                a8nText: "business-info-website",
                                children: e
                            })
                        }, e)
                    }))
                }));
                return null == t && null == n && null == a && null == S && null == j && null == E ? null : (0, _.jsxs)(u.ChatInfoDrawerSection, {
                    newChatInfo: R,
                    xstyle: R && b.container,
                    theme: R ? void 0 : "padding",
                    children: [t, n, a, S, j, E]
                })
            };
            var i = a(n(94184)),
                r = n(67294),
                o = (a(n(56720)), a(n(87338))),
                l = a(n(85938)),
                s = n(42661),
                u = n(82506),
                c = a(n(94253)),
                d = n(96706),
                f = n(73008),
                h = a(n(86889)),
                p = n(49012),
                m = a(n(83719)),
                v = n(52867),
                g = n(29034),
                x = n(69283),
                C = a(n(25319)),
                _ = n(85893),
                b = {
                    container: {
                        paddingTop: "i4pc7asj",
                        paddingBottom: "q1nnjopg"
                    }
                }
        },
        42661: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.logCatalogClick = function(e) {
                o({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_CATALOG_ICON,
                    catalogSessionId: e
                })
            }, t.logEmailClick = function(e) {
                o({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_EMAIL,
                    catalogSessionId: e
                })
            }, t.logForwardClick = function(e) {
                o({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_FORWARD,
                    catalogSessionId: e
                })
            }, t.logHoursClick = function(e) {
                o({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_HOURS,
                    catalogSessionId: e
                })
            }, t.logLocationClick = function(e) {
                o({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_LOCATION,
                    catalogSessionId: e
                })
            }, t.logMessageClick = function(e) {
                o({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_MESSAGE,
                    catalogSessionId: e
                })
            }, t.logProfileExit = function(e, t) {
                o({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_EXIT,
                    catalogSessionId: e,
                    scrollDepth: t
                })
            }, t.logProfileImpression = function(e, t) {
                (0, i.smbBizProfileLoggingEnabled)() ? new r.default.ViewBusinessProfile({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION,
                    catalogSessionId: e,
                    profileEntryPoint: t
                }).commit(): new r.default.ViewBusinessProfile({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION,
                    catalogSessionId: e
                }).commit()
            }, t.logShopsClick = function(e) {
                o({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_SHOPS_ICON,
                    catalogSessionId: e
                })
            }, t.logStatusClick = function(e) {
                o({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_STATUS,
                    catalogSessionId: e
                })
            }, t.logVoiceCallClick = function(e) {
                o({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_VOICE_CALL,
                    catalogSessionId: e
                })
            }, t.logWebsiteClick = function(e) {
                o({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_WEBSITE,
                    catalogSessionId: e
                })
            };
            var i = n(2629),
                r = a(n(50507));

            function o(e) {
                var t = new r.default.ViewBusinessProfile(e);
                t && t.commit()
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
            var i = a(n(90123)),
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
                o = a(n(44920)),
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
                var t, n = (0, w.useModelValues)(e.contact, ["id", "verifiedLevel", "name", "verifiedName"]),
                    a = (0, w.useModelValues)(e.businessProfile, ["description", "categories", "website", "email", "stale", "latitude", "longitude", "businessHours", "structuredAddress"]),
                    r = (0, l.useState)(!0),
                    D = (0, i.default)(r, 2),
                    O = D[0],
                    R = D[1];
                (0, l.useEffect)((function() {
                    new y.default.ViewBusinessProfile({
                        viewBusinessProfileAction: y.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION
                    }).commit()
                }), []);
                var L, G, B, F, V, U, H, W = function() {
                        R(!O)
                    },
                    K = function() {
                        f.Cmd.openModal((0, P.jsx)(s.default, {
                            contact: n
                        }))
                    },
                    q = function() {
                        f.Cmd.openModal((0, P.jsx)(u.default, {
                            contact: n
                        }))
                    };
                (0, b.canSeeSMBUpsell)() ? (Y = n.verifiedLevel === d.VERIFIED_LEVEL.HIGH ? o.fbt._("Official business account", null, {
                    hk: "1KruJ"
                }) : o.fbt._("Business account", null, {
                    hk: "2lzdAg"
                }), t = (0, P.jsx)(p.default, {
                    a8nText: "business-title",
                    onClick: q,
                    side: (0, P.jsx)(I.default, {
                        className: c.default.infoIcon,
                        display: "inline",
                        name: "info"
                    }),
                    children: Y
                })) : t = _.GK.supportsFeature(_.GK.F.VNAME_V_2) ? function() {
                    var e;
                    switch (n.verifiedLevel) {
                        case d.VERIFIED_LEVEL.HIGH:
                            e = o.fbt._("Official business account", null, {
                                hk: "1KruJ"
                            });
                            break;
                        case d.VERIFIED_LEVEL.LOW:
                        case d.VERIFIED_LEVEL.UNKNOWN:
                            e = o.fbt._("Business account", null, {
                                hk: "2lzdAg"
                            })
                    }
                    return (0, P.jsx)(m.default, {
                        a8nText: "business-title",
                        className: c.default.businessTitleText,
                        onClick: K,
                        children: e
                    })
                }() : function() {
                    var e, t = n,
                        a = !t.name || t.name === t.verifiedName,
                        i = "psa-unverified";
                    switch (t.verifiedLevel) {
                        case d.VERIFIED_LEVEL.HIGH:
                            i = "psa-verified", a ? e = (0, P.jsx)(g.EmojiText, {
                                className: c.default.verifiedLabel,
                                text: o.fbt._("Verified business", null, {
                                    hk: "34Usft"
                                })
                            }) : (e = (0, P.jsx)(g.EmojiText, {
                                className: c.default.verifiedLabel,
                                text: o.fbt._("Verified", null, {
                                    hk: "3UYGlB"
                                })
                            }), e = (0, P.jsx)(j.default, {
                                id: 252,
                                params: {
                                    verified: e,
                                    businessName: t.verifiedName
                                }
                            }));
                            break;
                        case d.VERIFIED_LEVEL.LOW:
                            e = a ? (0, P.jsx)(g.EmojiText, {
                                text: o.fbt._("Confirmed business", null, {
                                    hk: "3Xidu0"
                                })
                            }) : S.default.t(247, {
                                businessName: t.verifiedName
                            });
                            break;
                        case d.VERIFIED_LEVEL.UNKNOWN:
                            e = o.fbt._("Business account", null, {
                                hk: "2lzdAg"
                            })
                    }
                    return (0, P.jsx)(N, {
                        icon: i,
                        className: c.default.businessMarker,
                        onClick: K,
                        children: e
                    })
                }();
                var Y;
                var z, X = a;
                if (X.stale) L = (0, P.jsx)("div", {
                    className: c.default.contactBusinessInfoSpinner,
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
                                })).join(S.default.t(411))
                            })
                        }) : null, B = X.description ? (0, P.jsx)(N, {
                            icon: "business-description",
                            children: (0, P.jsx)(x.default, {
                                text: X.description,
                                textLimit: h.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
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
                        }) : null, J = n.name, ee = X.latitude, te = X.longitude, ne = X.structuredAddress, oe = ne ? function(e) {
                            var t = e.streetAddress,
                                n = e.localizedCityName,
                                a = e.zipCode;
                            return t && n && a ? S.default.t(246, {
                                streetAddress: t,
                                city: n,
                                zipCode: a
                            }) : t && n ? S.default.t(245, {
                                streetAddress: t,
                                city: n
                            }) : t
                        }(ne) : null, null != ee && null != te && (ae = (0, P.jsx)("div", {
                            style: {
                                height: 150
                            },
                            className: c.default.businessMap,
                            children: (0, P.jsx)(E.default, {
                                lat: ee,
                                lng: te,
                                name: oe || J,
                                width: 565,
                                height: 150
                            })
                        })), oe && (re = null != ee && null != te ? (0, k.getMapUrl)(ee, te, oe) : (0, k.getSearchUrl)(oe), ie = (0, P.jsx)("div", {
                            className: c.default.address,
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
                                    className: c.default.link,
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
                                onClick: W,
                                children: t
                            })
                        }(X.businessHours)), X.email) {
                        var $ = (0, P.jsx)(g.EmojiText, {
                                selectable: !0,
                                direction: "auto",
                                text: X.email
                            }),
                            Q = (0, P.jsx)(C.ExternalLink, {
                                className: c.default.link,
                                href: `mailto:${X.email}`,
                                children: $
                            });
                        H = (0, P.jsx)(N, {
                            icon: "business-email",
                            dir: "auto",
                            children: Q
                        })
                    }
                }
                var J, ee, te, ne, ae, ie, re, oe;
                (L || null != F || G || B || null != U || H || V) && (z = (0, P.jsx)(v.default, {
                    theme: "padding",
                    children: (0, P.jsxs)("div", {
                        className: c.default.contactBusinessInfo,
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
                r = a(n(94184)),
                o = n(48360),
                l = n(67294),
                s = a(n(22110)),
                u = a(n(25317)),
                c = a(n(35100)),
                d = n(96127),
                f = n(65901),
                h = a(n(94253)),
                p = a(n(81218)),
                m = a(n(61876)),
                v = a(n(46821)),
                g = n(73008),
                x = a(n(86889)),
                C = n(49012),
                _ = n(38032),
                b = n(2629),
                S = a(n(45159)),
                j = a(n(62848)),
                E = a(n(83719)),
                k = n(46061),
                y = a(n(50507)),
                T = n(62890),
                M = n(85651),
                I = a(n(7665)),
                w = n(69283),
                P = n(85893);
            var A = function(e) {
                    var t = e.first ? (0, P.jsx)("div", {
                        className: c.default.businessHoursChevron,
                        role: "button",
                        children: (0, P.jsx)(I.default, {
                            className: e.collapsed ? "" : c.default.flipSvg,
                            display: "inline",
                            name: "chevron-down-alt"
                        })
                    }) : null;
                    return (0, P.jsxs)("div", {
                        className: c.default.businessHoursRow,
                        children: [(0, P.jsx)("div", {
                            className: c.default.businessHoursDay,
                            children: (0, P.jsx)(g.EmojiText, {
                                direction: "auto",
                                text: e.day
                            })
                        }), (0, P.jsx)("div", {
                            className: c.default.businessHoursHours,
                            children: (0, P.jsx)(g.EmojiText, {
                                direction: "auto",
                                text: e.hours
                            })
                        }), t]
                    })
                },
                N = function(e) {
                    return (0, P.jsxs)("div", {
                        className: (0, r.default)(c.default.dataRow, e.className),
                        onClick: e.onClick,
                        children: [(0, P.jsx)("div", {
                            className: c.default.dataRowIcon,
                            children: (0, P.jsx)(I.default, {
                                name: e.icon
                            })
                        }), (0, P.jsx)("div", {
                            className: c.default.dataRowText,
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
                    _ = (0, f.jsx)(r.default, {
                        contact: n
                    });
                null != C && C.length > 0 && (t = (0, f.jsx)("div", {
                    className: l.default.categories,
                    children: C.map((function(e) {
                        return e.localized_display_name
                    })).join(c.default.t(410))
                }));
                var b = x ? (0, f.jsx)(o.BusinessOpenHours, {
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
                        children: [_, t, b, (0, f.jsx)(i.default, {
                            contact: n,
                            onProductCatalog: p
                        })]
                    })]
                })
            };
            var i = a(n(86989)),
                r = a(n(10403)),
                o = n(88621),
                l = a(n(8342)),
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
                var t = (0, _.default)();
                return (0, b.jsx)(j, (0, i.default)((0, i.default)({}, e), {}, {
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
                _ = a(n(25319)),
                b = n(85893),
                S = function(e) {
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
                            return (0, b.jsx)(c.Chat, {
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
                                e = (0, b.jsx)(h.default, {
                                    numMore: a,
                                    onClick: this.handleShowMore,
                                    newChatInfo: this.props.newChatInfo
                                })
                            }
                            var i = n ? v.default.t(365, {
                                    number: v.default.n(t.length),
                                    _plural: t.length
                                }) : v.default.t(945),
                                r = n ? null : (0, b.jsx)(C.TextSpan, {
                                    theme: "section-title",
                                    children: v.default.n(t.length)
                                });
                            return (0, b.jsxs)(d.ChatInfoDrawerListSection, {
                                newChatInfo: n,
                                a8nText: "section-common-groups",
                                title: i,
                                subtitle: r,
                                children: [(0, b.jsx)(m.FlatList, {
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
            S.CONCERNS = {
                contact: ["commonGroups", "isBusiness"]
            }, S.displayName = "ContactInfoCommonGroupsBase";
            var j = (0, g.ListenerHOC)((0, x.default)(S, S.CONCERNS))
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
                l = n(48360),
                s = n(67294),
                u = a(n(56720)),
                c = a(n(81522)),
                d = a(n(11218)),
                f = a(n(95563)),
                h = n(42661),
                p = n(98481),
                m = n(79614),
                v = a(n(34736)),
                g = n(72743),
                x = a(n(69286)),
                C = n(4481),
                _ = n(82506),
                b = a(n(83399)),
                S = n(65901),
                j = a(n(24900)),
                E = a(n(68029)),
                k = a(n(47549)),
                y = a(n(9969)),
                T = a(n(95582)),
                M = a(n(16016)),
                I = a(n(5702)),
                w = n(73092),
                P = n(75544),
                A = a(n(53187)),
                N = a(n(81218)),
                D = a(n(18345)),
                O = a(n(61876)),
                R = n(96706),
                L = n(19288),
                G = a(n(46821)),
                B = n(90675),
                F = a(n(92546)),
                V = n(1577),
                U = n(38032),
                H = n(2629),
                W = a(n(16516)),
                K = a(n(45159)),
                q = a(n(73728)),
                Y = a(n(592)),
                z = n(96497),
                X = n(56003),
                Z = n(21283),
                $ = a(n(50507)),
                Q = a(n(59603)),
                J = a(n(40071)),
                ee = n(52867),
                te = n(9835),
                ne = n(3298),
                ae = a(n(43463)),
                ie = a(n(60401)),
                re = n(68220),
                oe = a(n(7665)),
                le = n(22552),
                se = n(92428),
                ue = a(n(39394)),
                ce = n(69283),
                de = a(n(25319)),
                fe = n(68034),
                he = a(n(74740)),
                pe = a(n(93958)),
                me = n(59175),
                ve = n(85893),
                ge = {
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

            function xe(e, t) {
                var n = e.onVerification,
                    a = e.onClose,
                    xe = e.onProductDetail,
                    Ce = e.onProductCatalog,
                    _e = e.canLogQpl,
                    be = void 0 === _e || _e,
                    Se = (0, pe.default)(),
                    je = (0, s.useContext)(R.DrawerContext),
                    Ee = (0, de.default)(),
                    ke = (0, fe.useNewChatInfoColors)(),
                    ye = Ee ? ke : null,
                    Te = (0, ce.useModelValues)(e.contact, ["id", "formattedName", "formattedUser", "formattedShortName", "isBusiness", "isEnterprise", "isMyContact", "commonGroups", "businessProfile", "showBusinessCheckmarkAsPrimary", "showBusinessCheckmarkAsSecondary", "verifiedName", "verifiedLevel", "name", "notifyName", "labels", "businessCatalog", "isMe", "statusMute", "displayName"]),
                    Me = (0, ue.default)((function() {
                        return new F.default
                    })),
                    Ie = (0, s.useRef)(!1),
                    we = (0, s.useState)(100),
                    Pe = (0, r.default)(we, 2),
                    Ae = Pe[0],
                    Ne = Pe[1],
                    De = (0, s.useMemo)((function() {
                        return C.ChatCollection.get(Te.id)
                    }), [Te.id]);
                (0, s.useEffect)((function() {
                    (Te.businessProfile && !Te.businessProfile.stale && Te.businessCatalog && g.CatalogCollection.findCarouselCatalog(Te.id).catch((0, o.filteredCatch)(me.ServerStatusCodeError, (function() {
                        __LOG__(3)`Failed to fetch product catalog in contact drawer from server`
                    }))), U.GK.supportsFeature(U.GK.F.MD_BACKEND) && (0, P.getFanOutListJob)([Te.id, (0, V.assertGetMe)()]).then((function(e) {
                        (0, Z.ensureE2ESessions)(e)
                    })), (0, ee.getProductCatalogContext)(je).session.isAccidental()) ? S.Cmd.setDrawerContext("right", (0, ee.buildProductCatalogContext)(new te.ProductCatalogSession, (0, w.getMaybeBizPlatformForLogging)(Te.id.toString()), $.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE)): Te.isBusiness && (0, H.canSeeBizProfileV3)() && (Te.id === (0, V.getMaybeMeUser)() || (0, h.logProfileImpression)((0, ee.getProductCatalogSessionId)(je), e.profileEntryPoint));
                    be && Te.businessProfile && (0, z.qplEndProfileView)(ne.QuickLogActionType.SUCCESS)
                }), []), (0, he.default)((function() {
                    (0, ee.getProductCatalogContext)(je).session.isAccidental() || Te.isBusiness && (0, H.canSeeBizProfileV3)() && (0, h.logProfileExit)((0, ee.getProductCatalogSessionId)(je), Ae)
                }));
                var Oe = function() {
                        var e = C.ChatCollection.assertGet(Te.id);
                        S.Cmd.deleteOrExitChat(e)
                    },
                    Re = function() {
                        a ? a() : null == Se || Se.uie.requestDismiss()
                    },
                    Le = function(e) {
                        if (Ie.current) {
                            var t = e.target;
                            S.Cmd.openModalMedia((0, ve.jsx)(J.default, {
                                contact: Te,
                                profilePicThumb: Te.getProfilePicThumb(),
                                animateBorderRadius: !0,
                                getZoomNode: function(e) {
                                    e(t)
                                }
                            }), {
                                transition: "profile-viewer",
                                uim: Se
                            })
                        } else S.Cmd.openToast((0, ve.jsx)(se.Toast, {
                            id: (0, se.genId)(),
                            msg: l.fbt._("No profile photo", null, {
                                hk: "2bdeTO"
                            })
                        }))
                    },
                    Ge = function() {
                        (0, h.logStatusClick)((0, ee.getProductCatalogSessionId)(je))
                    },
                    Be = function() {
                        Ie.current = !0
                    },
                    Fe = function() {
                        if (!(Te && Te.isBusiness && Te.businessProfile && Te.businessCatalog)) return null;
                        var e = g.CatalogCollection.get(Te.id);
                        if (!e) return null;
                        var t = "",
                            n = !1;
                        return (0, H.canSeeBizProfileV3)() && (t = l.fbt._("See all", null, {
                            hk: "3dTwyT"
                        }), n = !0), (0, ee.getProductCatalogContext)(je).session.isAccidental() ? null : (0, m.hasShop)(Te.businessProfile) ? (0, H.bannedShopsEnabled)() && (0, m.isShopBanned)(Te.businessProfile) ? null : (0, ve.jsx)(ie.default, {
                            businessProfile: Te.businessProfile,
                            catalog: e,
                            subtitle: t,
                            hideIncompleteRows: n
                        }) : (0, ve.jsx)(x.default, {
                            onProductDetail: function(e) {
                                ! function(e) {
                                    (0, X.qplStartProductView)("ContactInfo"), xe(e)
                                }(e)
                            },
                            onProductCatalog: Ce,
                            catalog: e,
                            subtitle: t,
                            hideIncompleteRows: n,
                            shouldLog: !0
                        })
                    },
                    Ve = (0, ve.jsx)(k.default, {
                        contact: Te,
                        onClose: Re,
                        flatListController: Me.current
                    }),
                    Ue = null;
                e.onMediaGallery && De && (Ue = (0, ve.jsx)(b.default, {
                    chat: De,
                    onMediaGallery: e.onMediaGallery
                }));
                var He = null;
                U.GK.supportsFeature(U.GK.F.LIVE_LOCATIONS) && De && (He = (0, ve.jsx)(Y.default, {
                    chat: De,
                    onClick: e.onLiveLocation
                }));
                var We = null,
                    Ke = null;
                (0, H.canSeeBizProfileV3)() ? Ke = Fe(): We = Fe();
                var qe, Ye = De && De.mute.canMute() ? (0, ve.jsx)(Q.default, {
                        chat: De,
                        mute: De.mute,
                        settings: ae.default,
                        theme: Ee ? "new-chat-info" : null
                    }) : null,
                    ze = null;
                if (e.onStarred && !Ee) {
                    var Xe = (0, ve.jsx)(oe.default, {
                        xstyle: ge.chevron,
                        name: "chevron-right-alt",
                        directional: !0
                    });
                    ze = (0, ve.jsx)(N.default, {
                        a8nText: "block-starred-messages",
                        side: Xe,
                        onClick: e.onStarred,
                        children: (0, ve.jsx)(le.TextSpan, {
                            theme: "title",
                            children: l.fbt._("Starred messages", null, {
                                hk: "4wVbNG"
                            })
                        })
                    })
                }
                e.onStarred && Ee && (qe = (0, ve.jsx)(M.default, {
                    chat: De,
                    onStarred: e.onStarred,
                    onContactCard: e.onContactCard
                }));
                var Ze = De && De.shouldShowEphemeralSetting() ? (0, ve.jsx)(B.EphemeralSettingRow, {
                        onClick: e.onEphemeral,
                        chat: De,
                        theme: Ee ? "new-chat-info" : null,
                        testid: "contact-info-dm-setting-row"
                    }) : null,
                    $e = null,
                    Qe = De && De.getReceivedVcardMsgs();
                if (U.GK.supportsFeature(U.GK.F.INDEX_RECEIVED_VCARD) && (null == Qe ? void 0 : Qe.length) && !Ee) {
                    var Je = (0, ve.jsx)(oe.default, {
                        xstyle: ge.chevron,
                        name: "chevron-right-alt",
                        directional: !0
                    });
                    $e = (0, ve.jsx)(N.default, {
                        a8nText: "block-contact-card",
                        side: Je,
                        onClick: e.onContactCard,
                        children: (0, ve.jsx)(le.TextSpan, {
                            theme: "title",
                            children: (0, ve.jsx)(j.default, {
                                count: Qe.length
                            })
                        })
                    })
                }
                var et = U.GK.supportsFeature(U.GK.F.MD_BACKEND) ? (0, ve.jsx)(y.default, {
                        contact: (0, re.unproxy)(Te),
                        onVerificationClick: function() {
                            n()
                        }
                    }) : null,
                    tt = null;
                (Ye || ze || Ze || $e || et) && (tt = Ee ? (0, ve.jsxs)(_.ChatInfoDrawerSection, {
                    newChatInfo: !0,
                    children: [Ye, Ze, et]
                }) : (0, ve.jsxs)(_.ChatInfoDrawerSection, {
                    newChatInfo: !1,
                    children: [Ye, ze, Ze, $e, et]
                }));
                var nt, at, it, rt, ot = Ee && !Te.isBusiness,
                    lt = ot ? null : (0, ve.jsx)(c.default, {
                        contact: (0, re.unproxy)(Te)
                    }),
                    st = ot ? (0, ve.jsx)(E.default, {
                        contact: (0, re.unproxy)(Te)
                    }) : null,
                    ut = (0, H.canSeeBizProfileV3)() && Te.isBusiness ? Te.businessProfile ? (0, ve.jsx)(v.default, {
                        contact: Te,
                        onProfilePicLoad: Be,
                        onProfilePicClick: Le,
                        onOpenStatus: Ge,
                        businessProfile: Te.businessProfile,
                        onProductCatalog: Ce
                    }) : null : (0, ve.jsx)(I.default, {
                        contact: Te,
                        onDetailImageLoad: Be,
                        onDetailImageClick: Le
                    }),
                    ct = null,
                    dt = void 0;
                Te.isBusiness && Te.businessProfile && ((0, H.canSeeBizProfileV3)() && Te.businessProfile ? (ct = (0, ve.jsx)(f.default, {
                    businessProfile: Te.businessProfile
                }), nt = (0, ve.jsx)(d.default, {
                    contact: Te
                }), (null !== (it = null === (rt = Te.labels) || void 0 === rt ? void 0 : rt.length) && void 0 !== it ? it : 0) > 0 && (at = (0, ve.jsx)(G.default, {
                    theme: "padding",
                    children: (0, ve.jsx)(W.default, {
                        labels: Te.labels,
                        theme: "standalone"
                    })
                })), dt = function(e) {
                    var t = Math.floor(100 * (1 + e.currentTarget.scrollTop / e.currentTarget.offsetHeight));
                    t > Ae && Ne(t)
                }) : Te.businessProfile && (ct = (0, ve.jsx)(p.BusinessProfile, {
                    contact: Te,
                    businessProfile: Te.businessProfile
                })));
                var ft, ht, pt = {
                    title: l.fbt._("Contact info", null, {
                        hk: "LUJtH"
                    }),
                    type: L.DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: !0,
                    onCancel: Re
                };
                return Te.businessProfile && (0, H.bizLinkedAccountsEnabled)() && (ft = (0, ve.jsx)(q.default, {
                    businessProfile: Te.businessProfile,
                    rowTheme: "linked-account-consumer"
                })), (0, ve.jsxs)(A.default, {
                    ref: t,
                    theme: "striped",
                    style: ye,
                    testid: "contact-info-drawer",
                    children: [(0, ve.jsx)(L.DrawerHeader, (0, i.default)({}, pt)), (0, ve.jsx)(D.default, {
                        flatListControllers: [Me.current],
                        onScroll: dt,
                        children: (0, ve.jsxs)("section", {
                            className: (0, u.default)(ge.body),
                            children: [ut, nt, at, Ke, ct, ft, He, We, st, Ue, qe, tt, lt, undefined, Ve, (De && (ht = (0, ve.jsx)(O.default, {
                                a8nText: "li-delete-chat",
                                icon: (0, ve.jsx)(oe.default, {
                                    name: "delete"
                                }),
                                color: "danger",
                                onClick: Oe,
                                theme: Ee ? "new-chat-info" : null,
                                children: K.default.t(378)
                            })), (0, ve.jsxs)(ve.Fragment, {
                                children: [(0, ve.jsx)(T.default, {
                                    contact: Te
                                }), (0, ve.jsx)(_.ChatInfoDrawerButtonsSection, {
                                    newChatInfo: Ee,
                                    children: ht
                                })]
                            }))]
                        })
                    })]
                }, "contact-info-modal")
            }
            var Ce = (0, s.forwardRef)(xe);
            t.default = Ce
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
                    b = null;
                if (a.isContactBlocked) {
                    var S = t ? d.default.t(367, {
                        contact: a.displayName
                    }) : d.default.t(799);
                    b = (0, _.jsx)(c.default, {
                        a8nText: "li-unblock",
                        color: "success",
                        icon: (0, _.jsx)(g.default, {
                            name: "settings-blocked",
                            directional: !0
                        }),
                        onClick: function() {
                            s.Cmd.openModal((0, _.jsx)(u.default, {
                                okText: d.default.t(799),
                                onOK: function() {
                                    (0, r.unblockContact)(e.contact), s.Cmd.closeModal()
                                },
                                cancelText: i.fbt._("Cancel", null, {
                                    hk: "H0gNq"
                                }),
                                onCancel: function() {
                                    return s.Cmd.closeModal()
                                },
                                children: (0, _.jsx)(f.default, {
                                    id: 800,
                                    params: {
                                        contact: (0, _.jsx)(h.Name, {
                                            contact: e.contact
                                        })
                                    }
                                })
                            }))
                        },
                        theme: n,
                        children: S
                    })
                } else {
                    var j = t ? d.default.t(364, {
                        contact: a.displayName
                    }) : d.default.t(171);
                    b = (0, _.jsx)(c.default, {
                        a8nText: "li-block",
                        color: "danger",
                        icon: (0, _.jsx)(g.default, {
                            name: "settings-blocked",
                            directional: !0
                        }),
                        onClick: function() {
                            s.Cmd.openModal((0, _.jsx)(u.default, {
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
                                children: (0, _.jsx)(f.default, {
                                    id: 172,
                                    params: {
                                        contact: (0, _.jsx)(h.Name, {
                                            contact: e.contact
                                        })
                                    }
                                })
                            }))
                        },
                        theme: n,
                        children: j
                    })
                }
                var E = i.fbt._("Report business", null, {
                    hk: "2Tvnn8"
                });
                a.isBusiness || (E = t ? d.default.t(732, {
                    contactInfo: a.displayName
                }) : i.fbt._("Report contact", null, {
                    hk: "3mxqJH"
                }));
                var k = (0, _.jsx)(c.default, {
                    a8nText: "li-report-spam",
                    color: "danger",
                    icon: (0, _.jsx)(g.default, {
                        name: "thumbs-down",
                        directional: !0
                    }),
                    onClick: function() {
                        s.Cmd.openModal((0, _.jsx)(p.default, {
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
                    children: E
                });
                return t ? (0, _.jsxs)(l.ChatInfoDrawerButtonsSection, {
                    newChatInfo: !0,
                    children: [b, k]
                }) : (0, _.jsxs)(_.Fragment, {
                    children: [(0, _.jsx)(l.ChatInfoDrawerButtonsSection, {
                        newChatInfo: !1,
                        children: b
                    }), (0, _.jsx)(l.ChatInfoDrawerButtonsSection, {
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
                _ = n(85893)
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
                return (0, _.default)() ? (0, E.jsx)(P, (0, i.default)({}, e)) : (0, E.jsx)(I, (0, i.default)({}, e))
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
                _ = a(n(25319)),
                b = a(n(53906)),
                S = a(n(20132)),
                j = a(n(55234)),
                E = n(85893);
            var k = {
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno",
                    marginBottom: "du8bjn1j"
                },
                y = {
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

            function I(e) {
                var t = e.contact,
                    n = e.onDetailImageLoad,
                    a = e.onDetailImageClick,
                    i = !t.name && t.notifyName ? (0, E.jsx)("div", {
                        className: (0, o.default)(y),
                        children: (0, E.jsxs)(C.TextSpan, {
                            theme: "muted",
                            children: ["~", (0, E.jsx)(d.EmojiText, {
                                direction: "auto",
                                text: t.notifyName,
                                selectable: !0
                            })]
                        })
                    }) : null,
                    r = t.showBusinessCheckmarkAsSecondary && h.GK.supportsFeature(h.GK.F.VNAME_V_2) ? (0, E.jsxs)("div", {
                        className: (0, o.default)(T),
                        children: [(0, E.jsx)(d.EmojiText, {
                            text: t.verifiedName,
                            direction: "auto"
                        }), (0, E.jsx)("div", {
                            className: (0, o.default)(M),
                            children: (0, E.jsx)(x.default, {
                                name: "psa-verified"
                            })
                        })]
                    }) : null,
                    l = s.ChatCollection.get(t.id),
                    f = (null == l ? void 0 : l.presence) ? (0, E.jsx)(S.default, {
                        contact: t,
                        presence: l.presence,
                        chatstate: l.presence.chatstate,
                        location: "info"
                    }) : null;
                return (0, E.jsxs)(c.default, {
                    theme: "padding-large",
                    children: [(0, E.jsx)("div", {
                        className: (0, o.default)(k),
                        children: (0, E.jsx)(u.DetailImage, {
                            id: t.id,
                            size: u.DETAIL_IMAGE_SIZE.LARGE,
                            loader: !0,
                            onLoad: n,
                            onClick: a,
                            quality: u.DETAIL_IMAGE_QUALITY.HIGH
                        })
                    }), (0, E.jsx)(C.TextHeader, {
                        level: "2",
                        theme: "large",
                        children: (0, E.jsx)(m.Name, {
                            contact: t,
                            selectable: !0,
                            showBusinessCheckmark: t.showBusinessCheckmarkAsPrimary
                        })
                    }), i, (0, E.jsxs)("div", {
                        className: (0, o.default)(y),
                        children: [(0, E.jsx)(C.TextSpan, {
                            theme: "muted",
                            children: r
                        }), (0, E.jsx)(C.TextSpan, {
                            theme: "muted",
                            children: f
                        })]
                    }), (0, E.jsx)(p.default, {
                        labels: t.labels
                    })]
                })
            }
            var w = {
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
                if (n.isMyContact) t = (0, j.default)(n.id);
                else {
                    var r = n.notifyName;
                    null != r && (t = `~${r}`)
                }
                return (0, E.jsxs)(c.default, {
                    theme: "padding-large",
                    children: [(0, E.jsx)("div", {
                        className: (0, o.default)(w.avatar),
                        children: (0, E.jsx)(u.DetailImage, {
                            id: n.id,
                            size: u.DETAIL_IMAGE_SIZE.LARGE,
                            loader: !0,
                            onLoad: a,
                            onClick: i,
                            quality: u.DETAIL_IMAGE_QUALITY.HIGH
                        })
                    }), (0, E.jsxs)(f.FlexColumn, {
                        align: "center",
                        children: [(0, E.jsx)(C.TextHeader, {
                            level: "2",
                            size: "24",
                            xstyle: w.contactName,
                            children: (0, E.jsx)(m.Name, {
                                contact: n,
                                selectable: !0,
                                breakWord: !0
                            })
                        }), null != t && (0, E.jsx)("div", {
                            className: (0, o.default)(w.secondaryWrapper),
                            children: (0, E.jsx)(v.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, E.jsx)(C.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: t
                                })
                            })
                        })]
                    }), (0, E.jsx)(N, {
                        contact: n
                    }), (0, E.jsx)(p.default, {
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
                    n = (0, b.default)((0, g.unproxy)(t));
                return n.isVideoCallEnabled || n.isVoiceCallEnabled ? (0, E.jsxs)(f.FlexRow, {
                    justify: "center",
                    xstyle: A.container,
                    children: [(0, E.jsx)(l.default, {
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
                    }), (0, E.jsx)(l.default, {
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
                        primary: l.default.t(517, {
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
                    v = l.default.t(517, {
                        count: t,
                        _plural: t
                    });
                a && (v = l.default.t(516, {
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
            var a = n(20862),
                i = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, y.useModelValues)(e.chat, ["groupMetadata"]),
                    n = (0, y.useModelValues)((0, l.default)(t.groupMetadata, "chat.groupMetadata"), ["displayedDesc", "owner", "creation", "restrict", "participants"]),
                    a = (0, u.useState)(n.displayedDesc),
                    i = (0, r.default)(a, 2),
                    P = i[0],
                    A = i[1],
                    N = (0, u.useState)(!1),
                    D = (0, r.default)(N, 2),
                    O = D[0],
                    R = D[1],
                    L = (0, u.useState)(e.showFullDescription || !(P && P.length > 30)),
                    G = (0, r.default)(L, 2),
                    B = G[0],
                    F = G[1],
                    V = (0, T.default)(),
                    U = (0, M.default)();
                if ((0, k.useListener)(n, "change:desc", (function() {
                        A(n.desc)
                    })), !(g.GK.supportsFeature(g.GK.F.GROUPS_V_3) && b.ServerProps.groupDescLength > 0)) return null;
                var H = {
                        textLimit: B ? 1 / 0 : m.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                        readMoreText: s.fbt._("Read more", null, {
                            hk: "2DvSvh"
                        }),
                        onReadMore: function() {
                            F(!0)
                        },
                        formatters: t.isTrusted() ? x.Configuration.TrustedGroupDesc({
                            links: C.findLinks(P)
                        }) : x.Configuration.UntrustedGroupDesc()
                    },
                    W = V ? [E.TextInputCustomStyleThemes.groupInfoName, E.TextInputCustomStyleThemes.newChatInfoDefaultText] : [E.TextInputCustomStyleThemes.groupInfoName],
                    K = (0, I.jsx)("div", {
                        className: (0, c.default)(w.inputWrapper),
                        children: (0, I.jsx)(E.TextInput, {
                            a8n: "group-info-drawer-description-title-input",
                            value: P,
                            emptyValuePlaceholder: s.fbt._("Add group description", null, {
                                hk: "BVsoQ"
                            }),
                            renderEmojiTextInLockMode: H,
                            editable: n.canSetDescription(),
                            pending: O,
                            showRemaining: !0,
                            maxLength: b.ServerProps.groupDescLength,
                            onChange: function(e) {
                                A(e)
                            },
                            onSave: function() {
                                if (n.canSetDescription()) {
                                    var e = P || "",
                                        a = e.match(/\r\n/gm) ? "\r\n" : "\n",
                                        i = new RegExp(`^(${a}{2,})([^\n])`, "gm");
                                    e = e.replace(i, `${a}$2`);
                                    var r = (0, v.default)(e || "");
                                    if (r === n.displayedDesc) return A(r);
                                    R(!0), (0, _.default)((0, S.setGroupDesc)(t, r), U).catch((0, o.catchAbort)((function() {}))).catch((function() {
                                        __LOG__(3)`group_info_drawer:onSetDescription failed`
                                    })).finally((function() {
                                        A(n.displayedDesc), R(!1)
                                    }))
                                }
                            },
                            onCancel: function() {
                                A(n.desc)
                            },
                            multiline: !0,
                            editRestrictionInfo: n.restrict ? function() {
                                h.Cmd.openModal((0, I.jsx)(p.default, {
                                    onOK: function() {
                                        return h.Cmd.closeModal()
                                    },
                                    okText: s.fbt._("OK", null, {
                                        hk: "2KEeHb"
                                    }),
                                    children: s.fbt._("Only admins can edit this group's info", null, {
                                        hk: "1a2ztg"
                                    })
                                }))
                            } : void 0,
                            supportsEmoji: !0,
                            lockable: !0,
                            lowProfile: !0,
                            customStyleThemes: W,
                            theme: "small",
                            showEditOnHover: V,
                            constrainedWidth: !0
                        })
                    });
                V && !P && n.restrict && (K = null);
                if (V) {
                    var q, Y, z = n.owner && (null === (q = n.participants.get(n.owner)) || void 0 === q ? void 0 : q.contact);
                    return z && (Y = (0, I.jsx)(j.TextDiv, {
                        theme: "muted",
                        children: f.Clock.createdByStr(n.creation, z.formattedName, z.isMe)
                    })), K || Y ? (0, I.jsxs)(d.ChatInfoDrawerSection, {
                        xstyle: w.chatInfoSection,
                        newChatInfo: !0,
                        children: [K, Y]
                    }) : null
                }
                return (0, I.jsx)(d.ChatInfoDrawerSection, {
                    newChatInfo: !1,
                    theme: "group-desc-padding",
                    title: s.fbt._("Description", null, {
                        hk: "4umvEX"
                    }),
                    children: K
                })
            };
            var r = i(n(63038)),
                o = n(396),
                l = i(n(272)),
                s = n(48360),
                u = n(67294),
                c = i(n(56720)),
                d = n(82506),
                f = n(10399),
                h = n(65901),
                p = i(n(86777)),
                m = i(n(94253)),
                v = i(n(96150)),
                g = n(38032),
                x = n(72896),
                C = a(n(53454)),
                _ = i(n(27003)),
                b = n(43890),
                S = n(92530),
                j = n(22552),
                E = n(68544),
                k = n(8413),
                y = n(69283),
                T = i(n(25319)),
                M = i(n(1379)),
                I = n(85893),
                w = {
                    chatInfoSection: {
                        paddingTop: "nlnf8xo7",
                        paddingBottom: "r219jyu0"
                    },
                    inputWrapper: {
                        whiteSpace: "bbv8nyr4"
                    }
                }
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
                var se = (0, q.default)((function() {
                        return new b.default
                    })),
                    ue = (0, q.default)((function() {
                        return new b.default
                    })),
                    ce = (0, q.default)((function() {
                        return new b.default
                    })),
                    de = (0, q.default)((function() {
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
                            h.Cmd.openToast((0, J.jsx)(W.Toast, {
                                msg: e,
                                id: te
                            }))
                        } else {
                            var t = S.GK.supportsFeature(S.GK.F.GROUPS_V_3) ? (0, J.jsx)(u.default, {
                                chat: (0, B.unproxy)(oe),
                                pushTransition: "none",
                                popTransition: "none"
                            }) : (0, J.jsx)(s.default, {
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
                    })), le.participants.iAmAdmin() && S.GK.supportsFeature(S.GK.F.GROUPS_V_3) && !le.support)
                    if (ae) {
                        var xe = (0, J.jsx)(H.TextSpan, {
                            theme: "title",
                            children: r.fbt._("Group settings", null, {
                                hk: "3sS0Vl"
                            })
                        });
                        he = (0, J.jsx)(c.default, {
                            side: "chevron",
                            icon: "settings",
                            onClick: e.onAdminSetting,
                            title: xe
                        })
                    } else {
                        var Ce = (0, J.jsx)(U.default, {
                            xstyle: ee.chevron,
                            name: "chevron-right-alt",
                            directional: !0
                        });
                        he = (0, J.jsx)(m.default, {
                            onClick: e.onAdminSetting,
                            side: Ce,
                            children: (0, J.jsx)(H.TextSpan, {
                                theme: "title",
                                children: r.fbt._("Group settings", null, {
                                    hk: "3sS0Vl"
                                })
                            })
                        })
                    } var _e = null;
                e.onMediaGallery && (_e = (0, J.jsx)(f.default, {
                    onMediaGallery: e.onMediaGallery,
                    chat: (0, B.unproxy)(oe)
                }));
                var be = null;
                S.GK.supportsFeature(S.GK.F.LIVE_LOCATIONS) && (be = (0, J.jsx)(A.default, {
                    chat: oe,
                    onClick: e.onLiveLocation
                }));
                var Se = oe && oe.shouldShowEphemeralSetting() ? (0, J.jsx)(_.EphemeralSettingRow, {
                        onClick: e.onEphemeral,
                        chat: oe,
                        groupMetadata: le,
                        theme: ae ? "new-chat-info" : null
                    }) : null,
                    je = null;
                S.GK.supportsFeature(S.GK.F.MD_BACKEND) && (je = (0, J.jsx)(C.default, {
                    onClick: function() {
                        h.Cmd.openModal((0, J.jsx)(x.default, {
                            chatId: oe.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    },
                    theme: ae ? "new-chat-info" : null,
                    text: Q.default.isGroupCallEnabled() ? r.fbt._("Messages and calls are end-to-end encrypted. Click to learn more.", null, {
                        hk: "1l9pwW"
                    }) : r.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "2MtPh9"
                    })
                }));
                oe.isSupportGroup() && (je = (0, J.jsx)(F.default, {
                    onClick: function() {
                        h.Cmd.openModal((0, J.jsx)(x.default, {
                            chat: oe,
                            chatId: oe.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    },
                    theme: ae ? "new-chat-info" : null
                }));
                var Ee = oe.mute.canMute() ? (0, J.jsx)(O.default, {
                        chat: oe,
                        mute: oe.mute,
                        settings: G.default,
                        theme: ae ? "new-chat-info" : null
                    }) : null,
                    ke = null,
                    ye = null;
                if (e.onStarred)
                    if (ae) {
                        var Te = (0, J.jsx)(H.TextSpan, {
                            theme: "title",
                            size: "16",
                            children: r.fbt._("Starred messages", null, {
                                hk: "4wVbNG"
                            })
                        });
                        ye = (0, J.jsx)(d.ChatInfoDrawerSection, {
                            a8nText: "section-starred-messages",
                            newChatInfo: !0,
                            children: (0, J.jsx)(c.default, {
                                a8nText: "block-starred-messages",
                                side: "chevron",
                                icon: "star",
                                onClick: e.onStarred,
                                title: Te
                            })
                        })
                    } else {
                        var Me = (0, J.jsx)(U.default, {
                            xstyle: ee.chevron,
                            name: "chevron-right-alt",
                            directional: !0
                        });
                        ke = (0, J.jsx)(m.default, {
                            side: Me,
                            onClick: e.onStarred,
                            children: (0, J.jsx)(H.TextSpan, {
                                theme: "title",
                                children: r.fbt._("Starred messages", null, {
                                    hk: "4wVbNG"
                                })
                            })
                        })
                    } var Ie = null;
                (Ee || ke || je || Se) && (Ie = (0, J.jsxs)(d.ChatInfoDrawerSection, {
                    newChatInfo: ae,
                    children: [Ee, ke, Se, je, he]
                }));
                var we = S.GK.supportsFeature(S.GK.F.MD_BACKEND) && e.scrollToParticipantList;
                return (0, J.jsxs)(p.default, {
                    theme: "striped",
                    style: re,
                    children: [(0, J.jsx)(g.DrawerHeader, {
                        title: r.fbt._("Group info", null, {
                            hk: "2SfTUZ"
                        }),
                        type: g.DRAWER_HEADER_TYPE.SMALL,
                        rtlFixIfOnDarwin: !0,
                        onCancel: function() {
                            n ? n() : null == a || a.uie.requestDismiss()
                        }
                    }), (0, J.jsx)(v.default, {
                        flatListControllers: [ue.current, se.current],
                        children: (0, J.jsxs)("section", {
                            className: (0, l.default)(ee.body),
                            "data-a8n": i.default.key("group-info-drawer-body"),
                            children: [(0, J.jsx)(I.default, {
                                chat: (0, B.unproxy)(oe),
                                onAdminSetting: e.onAdminSetting,
                                onAddParticipant: ge,
                                onClickParticpantsCount: function() {
                                    var e;
                                    null === (e = fe.current) || void 0 === e || e.scrollIntoView()
                                }
                            }), (0, J.jsx)(E.default, {
                                chat: (0, B.unproxy)(oe),
                                showFullDescription: e.showFullGroupDescription
                            }), be, _e, ye, Ie, undefined, (0, j.communitiesEnabled)() ? (0, J.jsx)(M.default, {
                                parentChat: (0, B.unproxy)(oe),
                                flatListController: ce.current
                            }) : null, (0, J.jsx)(y.GroupInfoParticipantsSection, {
                                ref: fe,
                                chat: (0, B.unproxy)(oe),
                                scrollToParticipantList: we,
                                flatListController: se.current,
                                onAddParticipant: ge,
                                onOpenParticpantSearch: function() {
                                    h.Cmd.openModal((0, J.jsx)(w.default, {
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
                            }), (0, J.jsx)(T.default, {
                                chat: (0, B.unproxy)(oe),
                                flatListController: ue.current
                            }), (0, J.jsx)(k.default, {
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
                _ = n(90675),
                b = a(n(92546)),
                S = n(38032),
                j = n(2629),
                E = a(n(87923)),
                k = a(n(1594)),
                y = n(16539),
                T = a(n(89971)),
                M = a(n(56105)),
                I = a(n(68921)),
                w = a(n(80816)),
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
                W = n(92428),
                K = a(n(57811)),
                q = a(n(39394)),
                Y = n(8413),
                z = n(69283),
                X = a(n(25319)),
                Z = n(68034),
                $ = a(n(93958)),
                Q = a(n(40232)),
                J = n(85893),
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
                te = (0, W.genId)("max_participant_toast")
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
                    children: t.isReadOnly ? s.default.t(890) : i.fbt._("Exit group", null, {
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
                o = n(48360),
                l = n(67294),
                s = a(n(56720)),
                u = a(n(88186)),
                c = n(82506),
                d = n(65901),
                f = a(n(86777)),
                h = n(42162),
                p = n(94680),
                m = n(73008),
                v = a(n(98303)),
                g = n(68985),
                x = n(73568),
                C = n(1577),
                _ = n(38032),
                b = a(n(45159)),
                S = n(87547),
                j = a(n(44606)),
                E = a(n(84287)),
                k = a(n(7665)),
                y = n(16835),
                T = a(n(93820)),
                M = a(n(57811)),
                I = n(8413),
                w = n(69283),
                P = a(n(25319)),
                A = a(n(78208)),
                N = n(85893),
                D = {
                    iconSearch: {
                        color: "s4k44ver"
                    }
                },
                O = (0, l.forwardRef)((function(e, t) {
                    var n, a = (0, P.default)(),
                        O = (0, w.useModelValues)((0, r.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["support"]),
                        L = (0, r.default)(null === (n = e.chat.groupMetadata) || void 0 === n ? void 0 : n.participants, "props.chat.groupMetadata?.participants"),
                        G = (0, M.default)();
                    (0, I.useListener)(L, "add remove reset sort change:isAdmin change:isSuperAdmin", G);
                    var B = (0, l.useState)(R(L)),
                        F = (0, i.default)(B, 2),
                        V = F[0],
                        U = F[1],
                        H = (0, l.useRef)(),
                        W = (0, l.useState)(),
                        K = (0, i.default)(W, 2),
                        q = K[0],
                        Y = K[1];
                    (0, l.useEffect)((function() {
                        _.GK.supportsFeature(_.GK.F.MD_BACKEND) && e.scrollToParticipantList && H.current && (0, h.scrollIntoViewIfNeeded)(H.current, !1)
                    }), [e.scrollToParticipantList]), (0, l.useImperativeHandle)(t, (function() {
                        return {
                            scrollIntoView: function() {
                                var e;
                                null === (e = H.current) || void 0 === e || e.scrollIntoView()
                            }
                        }
                    }));
                    var z, X, Z, $ = a ? "secondary" : null,
                        Q = a ? "new-chat-info" : "drawer-list",
                        J = a ? "compact" : void 0,
                        ee = (0, N.jsx)(k.default, {
                            name: "search",
                            className: (0, s.default)(!a && D.iconSearch),
                            color: $
                        });
                    if (L.canAdd() && !O.support) {
                        var te = (0, N.jsx)(E.default, {
                            theme: J,
                            children: (0, N.jsx)(k.default, {
                                name: "add-user",
                                directional: !0
                            })
                        });
                        z = (0, N.jsx)(u.default, {
                            image: te,
                            theme: Q,
                            primary: o.fbt._("Add participant", null, {
                                hk: "48ECfz"
                            }),
                            onClick: e.onAddParticipant
                        })
                    }
                    if (L.iAmAdmin() && e.onGroupInviteLink && !O.support) {
                        var ne = (0, N.jsx)(E.default, {
                            theme: J,
                            children: (0, N.jsx)(k.default, {
                                name: "link"
                            })
                        });
                        X = (0, N.jsx)(u.default, {
                            image: ne,
                            theme: Q,
                            primary: o.fbt._("Invite to group via link", null, {
                                hk: "3vDtFL"
                            }),
                            onClick: e.onGroupInviteLink
                        })
                    }
                    if (R(L) && V) {
                        var ae = !a || L.length <= 20,
                            ie = L.length - c.INFO_DRAWER_MAX_ROWS;
                        Z = (0, N.jsx)(v.default, {
                            numMore: ie,
                            newChatInfo: a,
                            onClick: function() {
                                ae ? U(!1) : e.onOpenParticpantSearch()
                            },
                            viewAll: !ae
                        })
                    }
                    var re, oe = function(e) {
                            var t = L.get(e.id);
                            return !!t && (L.canPromote(t) || L.canDemote(t) || L.canRemove(t) || L.canVerifyIdentity(t))
                        },
                        le = function(t, n) {
                            var a = L.assertGet(n.id);
                            if (oe(n)) {
                                var i = [];
                                L.canPromote(a) && i.push((0, N.jsx)(p.DropdownItem, {
                                    a8n: "mi-grp-promote-admin",
                                    action: function() {
                                        var t = b.default.t(352, {
                                            participant: a.contact.formattedName,
                                            subject: e.chat.contact.name
                                        });
                                        d.Cmd.openModal((0, N.jsx)(f.default, {
                                            onOK: function() {
                                                return t = !0, a.contact.pendingAction++, (0, S.promoteParticipants)(e.chat, [a]).then((function() {
                                                    a.contact.pendingAction--
                                                })), void(t && d.Cmd.closeModal());
                                                var t
                                            },
                                            okText: b.default.t(614),
                                            onCancel: function() {
                                                return d.Cmd.closeModal()
                                            },
                                            cancelText: o.fbt._("Cancel", null, {
                                                hk: "H0gNq"
                                            }),
                                            children: (0, N.jsx)(m.EmojiText, {
                                                text: t
                                            })
                                        }))
                                    },
                                    children: b.default.t(614)
                                }, "promote")), L.canRemove(a) && i.push((0, N.jsx)(p.DropdownItem, {
                                    a8n: "mi-grp-remove-participant",
                                    action: function() {
                                        var t = b.default.t(353, {
                                            participant: a.contact.formattedName,
                                            subject: e.chat.contact.name
                                        });
                                        d.Cmd.openModal((0, N.jsx)(f.default, {
                                            onOK: function() {
                                                return t = !0, a.contact.pendingAction++, (0, S.removeParticipants)(e.chat, [a]).then((function() {
                                                    a.contact.pendingAction--
                                                })), void(t && d.Cmd.closeModal());
                                                var t
                                            },
                                            okText: b.default.t(727),
                                            onCancel: function() {
                                                return d.Cmd.closeModal()
                                            },
                                            cancelText: o.fbt._("Cancel", null, {
                                                hk: "H0gNq"
                                            }),
                                            children: (0, N.jsx)(m.EmojiText, {
                                                text: t
                                            })
                                        }))
                                    },
                                    children: b.default.t(618)
                                }, "remove")), _.GK.supportsFeature(_.GK.F.GROUPS_V_3) && L.canDemote(a) && i.push((0, N.jsx)(p.DropdownItem, {
                                    a8n: "mi-grp-verify-identify",
                                    action: function() {
                                        a.contact.pendingAction++, (0, S.demoteParticipants)(e.chat, [a]).then((function() {
                                            a.contact.pendingAction--
                                        })), d.Cmd.closeModal()
                                    },
                                    children: o.fbt._("Dismiss as admin", null, {
                                        hk: "243sNl"
                                    })
                                }, "demote-admin")), _.GK.supportsFeature(_.GK.F.MD_BACKEND) && L.canVerifyIdentity(a) && i.push((0, N.jsx)(p.DropdownItem, {
                                    a8n: "mi-grp-verify-identify",
                                    action: function() {
                                        e.onVerification && e.onVerification(a.contact)
                                    },
                                    children: o.fbt._("Verify Security Code", null, {
                                        hk: "1vTVgt"
                                    })
                                }, "verify-identity")), Y({
                                    contactId: n.id,
                                    menu: i,
                                    anchor: t.anchor,
                                    event: t.event
                                })
                            }
                        },
                        se = function(e, t) {
                            A.default.equals((0, C.getMaybeMeUser)(), t.id) || (0, g.findChat)(t.id).then((function(e) {
                                d.Cmd.openChatFromUnread(e).then((function(t) {
                                    t && d.Cmd.focusChatTextInput(e)
                                }))
                            }))
                        },
                        ue = L.length ? (0, N.jsxs)(c.ChatInfoDrawerListSection, {
                            newChatInfo: a,
                            onRef: function(e) {
                                H.current = e
                            },
                            a8nText: "section-participants",
                            title: b.default.t(965, {
                                count: L.length,
                                _plural: L.length
                            }),
                            titleOnClick: _.GK.supportsFeature(_.GK.F.GROUPS_V_3) ? e.onOpenParticpantSearch : void 0,
                            subtitle: _.GK.supportsFeature(_.GK.F.GROUPS_V_3) ? ee : void 0,
                            children: [z, X, (0, N.jsx)(x.FlatList, {
                                flatListController: e.flatListController,
                                direction: "vertical",
                                forceConsistentRenderCount: !1,
                                data: function() {
                                    var e, t = [],
                                        n = [];
                                    L.forEach((function(a) {
                                        a.contact.isMe ? e = a : a.isAdmin ? t.push(a) : n.push(a)
                                    }));
                                    var a = [];
                                    return e && a.push(e), a = a.concat(t, n), R(L) && V && (a = a.slice(0, c.INFO_DRAWER_MAX_ROWS)), a.map((function(e) {
                                        return {
                                            itemKey: e.id.toString(),
                                            id: e.id,
                                            height: 68
                                        }
                                    }))
                                }(),
                                renderItem: function(e) {
                                    var t = e.id,
                                        n = L.get(t);
                                    if (!n) throw new x.UnknownDataError(e);
                                    var i = n.contact,
                                        r = !!q && A.default.equals(i.id, q.contactId);
                                    return (0, N.jsx)(j.default, {
                                        contact: i,
                                        participant: n,
                                        onClick: se,
                                        contextEnabled: function() {
                                            return oe(i)
                                        },
                                        contextMenu: r,
                                        onContext: function(e) {
                                            return le(e, i)
                                        },
                                        theme: a ? "new-chat-info" : null,
                                        showNotifyName: !0,
                                        waitIdle: !0
                                    }, n.id.toString())
                                }
                            }), Z]
                        }) : null;
                    return q && (re = (0, N.jsx)(y.UIE, {
                        displayName: "ChatContextMenu",
                        escapable: !0,
                        popable: !0,
                        requestDismiss: function() {
                            Y(null)
                        },
                        children: (0, N.jsx)(T.default, {
                            contextMenu: q
                        })
                    })), (0, N.jsxs)(N.Fragment, {
                        children: [ue, re]
                    })
                }));

            function R(e) {
                return e.length > c.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
            }
            t.GroupInfoParticipantsSection = O, O.displayName = "GroupInfoParticipantsSection"
        },
        89971: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = (0, j.default)(),
                    y = (0, r.default)(e.chat.groupMetadata, "props.chat.groupMetadata"),
                    T = (0, r.default)(null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants, "props.chat.groupMetadata?.participants"),
                    M = (0, r.default)(null === (n = e.chat.groupMetadata) || void 0 === n ? void 0 : n.pendingParticipants, "props.chat.groupMetadata?.pendingParticipants"),
                    I = (0, b.default)();
                (0, S.useListener)(T, "change:isAdmin change:isSuperAdmin", I), (0, S.useListener)(M, "add remove reset", I);
                var w = (0, l.useState)(k(M)),
                    P = (0, i.default)(w, 2),
                    A = P[0],
                    N = P[1],
                    D = (0, l.useState)(),
                    O = (0, i.default)(D, 2),
                    R = O[0],
                    L = O[1];
                (0, l.useEffect)((function() {
                    m.GK.supportsFeature(m.GK.F.GROUPS_V_4_JOIN_PERMISSION) && y.queryGroupV4PendingInvite().then((function() {
                        N(k(y.pendingParticipants))
                    }))
                }), [y]);
                var G, B, F;
                M.length > 0 && (G = (0, E.jsx)(p.FlatList, {
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
                        return (0, E.jsx)(g.default, {
                            contact: i,
                            participant: n,
                            contextEnabled: function() {
                                return !0
                            },
                            contextMenu: !0,
                            onContext: function(e) {
                                return t = e, a = [(0, E.jsx)(d.DropdownItem, {
                                    a8n: "mi-grp-promote-admin",
                                    action: function() {
                                        u.Cmd.openModal((0, E.jsx)(c.default, {
                                            onOK: function() {
                                                u.Cmd.closeModal(), y.revokeGroupV4AddInvite([n.id.toString()]).then((function() {
                                                    u.Cmd.openToast((0, E.jsx)(x.Toast, {
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
                                            children: (0, E.jsx)(f.EmojiText, {
                                                text: v.default.t(521, {
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
                    B = (0, E.jsx)(h.default, {
                        numMore: U,
                        newChatInfo: a,
                        onClick: function() {
                            N(!1)
                        }
                    })
                }
                T.iAmAdmin() && M.length > 0 && (F = (0, E.jsxs)(s.ChatInfoDrawerListSection, {
                    newChatInfo: a,
                    a8nText: "section-participants",
                    title: v.default.t(519, {
                        number: M.length
                    }),
                    children: [G, B]
                }));
                var H;
                R && (H = (0, E.jsx)(C.UIE, {
                    displayName: "ChatContextMenu",
                    escapable: !0,
                    popable: !0,
                    requestDismiss: function() {
                        L(null)
                    },
                    children: (0, E.jsx)(_.default, {
                        contextMenu: R
                    })
                }));
                return (0, E.jsxs)(E.Fragment, {
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
                _ = a(n(93820)),
                b = a(n(57811)),
                S = n(8413),
                j = a(n(25319)),
                E = n(85893);

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
                    _ = (0, g.useModelValues)((0, l.default)(a.groupMetadata, "parentChat.groupMetadata"), ["unjoinedSubgroups"]),
                    b = (0, s.useState)([]),
                    S = (0, o.default)(b, 2),
                    j = S[0],
                    E = S[1],
                    k = (0, s.useCallback)((function() {
                        E(_.getSubGroupMetadata())
                    }), [_]);
                (0, s.useEffect)((function() {
                    k()
                }), [k]);
                var y = function() {
                    var t = (0, r.default)(i.default.mark((function t(n) {
                        var a, r;
                        return i.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, v.querySubGroupInfo)(e.parentChat.id, n.id);
                                case 2:
                                    if (a = t.sent) {
                                        t.next = 5;
                                        break
                                    }
                                    throw new p.UnknownDataError(n);
                                case 5:
                                    return (r = a.participants.getAdmins()).length > 0 && (i = r[0].id, (0, h.findChat)(i).then((function(e) {
                                        d.Cmd.openChatFromUnread(e).then((function(t) {
                                            t && d.Cmd.focusChatTextInput(e)
                                        }))
                                    }))), t.abrupt("return");
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                            var i
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
                return (null !== (t = j.length) && void 0 !== t ? t : 0) > 0 ? (0, C.jsx)(c.ChatInfoDrawerListSection, {
                    newChatInfo: n,
                    title: "[INTERNAL ONLY] - Related groups",
                    children: (0, C.jsx)(p.FlatList, {
                        flatListController: e.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: j.map((function(e) {
                            var t = (0, l.default)(e, "group");
                            return {
                                itemKey: t.id.toString(),
                                id: t.id,
                                subject: t.subject
                            }
                        })),
                        renderItem: function(e) {
                            if (!e) throw new p.UnknownDataError(e);
                            return (0, C.jsx)(m.HotKeys, {
                                children: (0, C.jsx)(u.default, {
                                    onClick: function() {
                                        return y(e)
                                    },
                                    theme: n ? "new-chat-info" : null,
                                    primary: e.subject,
                                    contextEnabled: function() {
                                        return !1
                                    },
                                    image: (0, C.jsx)(f.DetailImage, {
                                        id: e.id,
                                        size: 40
                                    })
                                })
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
                m = n(58342),
                v = n(75266),
                g = n(69283),
                x = a(n(25319)),
                C = n(85893)
        },
        68921: (e, t, n) => {
            "use strict";
            var a = n(20862),
                i = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, B.default)() ? (0, V.jsx)(K, (0, s.default)({}, e)) : (0, V.jsx)(H, (0, s.default)({}, e))
            };
            var r = i(n(87757)),
                o = i(n(48926)),
                l = i(n(63038)),
                s = i(n(81109)),
                u = n(396),
                c = n(15586),
                d = i(n(272)),
                f = i(n(84646)),
                h = n(48360),
                p = n(67294),
                m = i(n(56720)),
                v = n(10399),
                g = n(65901),
                x = i(n(86777)),
                C = i(n(46821)),
                _ = i(n(96150)),
                b = a(n(18286)),
                S = n(27968),
                j = i(n(78070)),
                E = n(26224),
                k = i(n(16516)),
                y = i(n(45159)),
                T = n(1191),
                M = n(76110),
                I = i(n(49309)),
                w = n(43201),
                P = i(n(27003)),
                A = n(96197),
                N = n(89569),
                D = n(22552),
                O = i(n(76080)),
                R = i(n(57811)),
                L = n(8413),
                G = n(69283),
                B = i(n(25319)),
                F = i(n(1379)),
                V = n(85893);
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
                var t = (0, G.useModelValues)(e.chat, ["labels"]),
                    n = (0, G.useModelValues)((0, d.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["creation"]),
                    a = null;
                return n.creation && (a = (0, V.jsx)("div", {
                    "data-a8n": f.default.key("group-created-time"),
                    className: (0, m.default)(U.nameSecondary),
                    children: (0, V.jsx)(D.TextSpan, {
                        theme: "muted",
                        children: v.Clock.createdStr(n.creation, t.isSupportGroup())
                    })
                })), (0, V.jsxs)(C.default, {
                    theme: "padding-large",
                    children: [(0, V.jsx)(q, {
                        chat: e.chat,
                        xstyle: U.photo
                    }), (0, V.jsx)(z, {
                        chat: e.chat
                    }), a, (0, V.jsx)(k.default, {
                        labels: t.labels
                    })]
                })
            }
            var W = {
                lineHeight: "a4ywakfo",
                marginTop: "ma4rpf0l"
            };

            function K(e) {
                var t, n, a = (0, G.useModelValues)(e.chat, ["labels"]),
                    i = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants,
                    r = (0, R.default)();
                (0, L.useListener)(i, "add remove reset sort change:isAdmin change:isSuperAdmin", r);
                var o = null !== (n = null == i ? void 0 : i.length) && void 0 !== n ? n : 0,
                    l = y.default.t(965, {
                        count: o,
                        _plural: o
                    });
                return (0, V.jsx)(C.default, {
                    theme: "padding-large",
                    children: (0, V.jsxs)(S.FlexColumn, {
                        align: "center",
                        children: [(0, V.jsx)(q, {
                            chat: e.chat,
                            xstyle: U.photo
                        }), (0, V.jsx)(z, {
                            chat: e.chat,
                            newChatInfo: !0
                        }), (0, V.jsx)("div", {
                            className: (0, m.default)(W),
                            children: (0, V.jsx)(A.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, V.jsxs)(D.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: [h.fbt._("Group", null, {
                                        hk: "DNiv2"
                                    }), " · ", (0, V.jsx)(O.default, {
                                        onClick: e.onClickParticpantsCount,
                                        children: l
                                    })]
                                })
                            })
                        }), undefined, (0, V.jsx)(k.default, {
                            labels: a.labels
                        })]
                    })
                })
            }

            function q(e) {
                var t = (0, G.useModelValues)(e.chat, ["isReadOnly"]),
                    n = (0, G.useModelValues)(e.chat.contact, ["id", "profilePicThumb"]),
                    a = (0, G.useModelValues)(e.chat.contact.profilePicThumb, ["imgFull"]),
                    i = (0, G.useModelValues)((0, d.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["groupType"]),
                    r = (0, p.useState)(!1),
                    o = (0, l.default)(r, 2),
                    s = o[0],
                    f = o[1],
                    h = (0, p.useState)(!1),
                    v = (0, l.default)(h, 2),
                    g = v[0],
                    x = v[1],
                    C = (0, F.default)(),
                    _ = I.default.GROUP,
                    S = t.isReadOnly || !a.canDelete() && !a.canSet() || t.isSupportGroup() || i.groupType === E.GroupType.DEFAULT_ANNOUNCEMENT_GROUP;
                return (0, V.jsx)("div", {
                    className: (0, m.default)(e.xstyle),
                    children: (0, V.jsx)(M.PhotoPickerLoadable, {
                        type: _,
                        id: n.id,
                        attachToChat: !0,
                        pending: g,
                        startImage: a.imgFull,
                        readOnly: S,
                        onImageSet: function(e, t) {
                            var n;
                            x(!0), n = e && t ? (0, w.setProfilePic)(a, e, t) : (0, w.deleteProfilePic)(a), (0, P.default)(n, C).catch((0, u.catchAbort)((function() {}))).catch((0, c.filteredCatch)(b.ActionError, (function() {
                                __LOG__(3)`GroupInfoDrawer: failed to set/delete group image`, f(!s)
                            }))).finally((function() {
                                x(!1)
                            }))
                        }
                    }, String(s))
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
                    n = (0, G.useModelValues)((0, d.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["creation", "restrict", "support"]),
                    a = (0, F.default)(),
                    i = function() {
                        var n = (0, o.default)(r.default.mark((function n(i) {
                            var o;
                            return r.default.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if ((o = (0, _.default)(i)) !== t.name) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 3:
                                        return n.next = 5, (0, P.default)((0, N.setGroupSubject)(e.chat, o), a).catch((0, u.catchAbort)((function() {}))).catch((function() {
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
                return n.support ? (0, V.jsx)(D.TextHeader, {
                    className: (0, m.default)(Y),
                    level: "2",
                    theme: "large",
                    children: (0, V.jsx)(T.GroupName, {
                        chat: e.chat,
                        groupMetadata: n,
                        breakWord: !0
                    })
                }) : (0, V.jsx)(j.default, {
                    subject: t.name,
                    onSave: i,
                    newChatInfo: e.newChatInfo,
                    textInputProps: {
                        editable: n.canSetSubject(),
                        editRestrictionInfo: n.restrict ? function() {
                            g.Cmd.openModal((0, V.jsx)(x.default, {
                                onOK: function() {
                                    return g.Cmd.closeModal()
                                },
                                okText: h.fbt._("OK", null, {
                                    hk: "2KEeHb"
                                }),
                                children: h.fbt._("Only admins can edit this group's info", null, {
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
                    b = e.onParticipantRemove,
                    S = e.onDemoteAdmin,
                    j = e.onVerification,
                    E = (0, g.default)(),
                    k = null === (t = n.groupMetadata) || void 0 === t ? void 0 : t.participants;
                (0, x.useListener)(k, "add remove reset", (function() {
                    null != k && E()
                }));
                var y, T = (0, l.useState)(null),
                    M = (0, i.default)(T, 2),
                    I = M[0],
                    w = M[1],
                    P = function(e) {
                        (0, d.findChat)(e).then((function(e) {
                            s.Cmd.closeModal(), s.Cmd.openChatFromUnread(e)
                        }))
                    };
                I && (y = (0, _.jsx)(m.UIE, {
                    displayName: "ChatContextMenu",
                    escapable: !0,
                    popable: !0,
                    requestDismiss: function() {
                        w(null)
                    },
                    children: (0, _.jsx)(v.default, {
                        contextMenu: I
                    })
                }));
                return (0, _.jsxs)(_.Fragment, {
                    children: [(0, _.jsx)(u.default, {
                        title: o.fbt._("Search Participants", null, {
                            hk: "M6lxB"
                        }),
                        filter: function(e) {
                            var t = n.groupMetadata;
                            return !(null == t || !t.participants.get(e.id.toString()))
                        },
                        onCancel: function() {
                            s.Cmd.closeModal()
                        },
                        openContextOnClick: !0,
                        contextEnabled: function() {
                            return !1
                        },
                        contextMenu: function(e) {
                            return !C.default.equals((0, f.getMaybeMeUser)(), e)
                        },
                        onContext: function(e, t) {
                            var i = (0, r.default)(n.groupMetadata, "chat.groupMetadata").participants,
                                l = i.assertGet(t.id.toString()),
                                u = [];
                            if (i.canPromote(l)) {
                                var d = a.bind(null, l, !1);
                                u.push((0, _.jsx)(c.DropdownItem, {
                                    a8n: "mi-grp-promote-admin",
                                    action: d,
                                    children: p.default.t(614)
                                }, "promote"))
                            }
                            if (i.canRemove(l)) {
                                var m = b.bind(null, l, !1);
                                u.push((0, _.jsx)(c.DropdownItem, {
                                    a8n: "mi-grp-remove-participant",
                                    action: m,
                                    children: p.default.t(618)
                                }, "remove"))
                            }
                            h.GK.supportsFeature(h.GK.F.GROUPS_V_3) && i.canDemote(l) && u.push((0, _.jsx)(c.DropdownItem, {
                                a8n: "mi-grp-verify-identify",
                                action: function() {
                                    return S(l)
                                },
                                children: o.fbt._("Dismiss as admin", null, {
                                    hk: "243sNl"
                                })
                            }, "demote-admin")), h.GK.supportsFeature(h.GK.F.MD_BACKEND) && i.canVerifyIdentity(l) && u.push((0, _.jsx)(c.DropdownItem, {
                                a8n: "mi-grp-verify-identify",
                                action: function() {
                                    s.Cmd.closeModal(), null == j || j(l.contact)
                                },
                                children: o.fbt._("Verify Security Code", null, {
                                    hk: "1vTVgt"
                                })
                            }, "verify-identity")), C.default.equals((0, f.getMaybeMeUser)(), l.id) || u.push((0, _.jsx)(c.DropdownItem, {
                                action: P.bind(null, l.contact.id),
                                children: p.default.t(623, {
                                    author: l.contact.formattedName
                                })
                            }, "message author")), w({
                                contactId: t.id,
                                menu: u,
                                anchor: e.anchor,
                                event: e.anchor ? void 0 : e
                            })
                        },
                        showNotifyName: !0,
                        listenForAdminChange: !0,
                        participantCollection: (0, r.default)(e.chat.groupMetadata, "props.chat.groupMetadata").participants
                    }), y]
                })
            };
            var i = a(n(63038)),
                r = a(n(272)),
                o = n(48360),
                l = n(67294),
                s = n(65901),
                u = a(n(71562)),
                c = n(94680),
                d = n(68985),
                f = n(1577),
                h = n(38032),
                p = a(n(45159)),
                m = n(16835),
                v = a(n(93820)),
                g = a(n(57811)),
                x = n(8413),
                C = a(n(78208)),
                _ = n(85893)
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
                return (0, l.useListener)(o.Conn, "change:isVoipInitialized", (function() {
                    n(o.Conn.isVoipInitialized)
                })), (0, l.useListener)(s, "change:activeCall", (function() {
                    d(s.activeCall)
                })), e ? {
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
                } : {
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
                l = a(n(21477)),
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
                o = n(48360),
                l = n(67294),
                s = n(65901),
                u = a(n(53187)),
                c = a(n(81218)),
                d = a(n(18345)),
                f = n(19288),
                h = a(n(46821)),
                p = n(1577),
                m = n(2629),
                v = a(n(14881)),
                g = a(n(54063)),
                x = n(26224),
                C = n(12231),
                _ = n(87547),
                b = n(64803),
                S = n(99451),
                j = n(43890),
                E = n(22552),
                k = n(69283),
                y = a(n(93958)),
                T = a(n(78208)),
                M = n(85893),
                I = function(e) {
                    var t = e.isRestricted,
                        n = e.onClick;
                    return (0, M.jsxs)(c.default, {
                        onClick: n,
                        multiline: !0,
                        children: [(0, M.jsx)("div", {
                            className: v.default.header,
                            children: (0, M.jsx)(E.TextSpan, {
                                theme: "title",
                                children: o.fbt._("Edit group info", null, {
                                    hk: "2rhyLl"
                                })
                            })
                        }), (0, M.jsx)(E.TextDiv, {
                            theme: "muted",
                            children: t ? o.fbt._("Only admins", null, {
                                hk: "1shXeT"
                            }) : o.fbt._("All participants", null, {
                                hk: "2YNQNN"
                            })
                        })]
                    })
                },
                w = function(e) {
                    var t = e.isAnnouncement,
                        n = e.onClick;
                    return (0, M.jsxs)(c.default, {
                        onClick: n,
                        multiline: !0,
                        children: [(0, M.jsx)("div", {
                            className: v.default.header,
                            children: (0, M.jsx)(E.TextSpan, {
                                theme: "title",
                                children: o.fbt._("Send messages", null, {
                                    hk: "2zKwxL"
                                })
                            })
                        }), (0, M.jsx)(E.TextDiv, {
                            theme: "muted",
                            children: t ? o.fbt._("Only admins", null, {
                                hk: "1shXeT"
                            }) : o.fbt._("All participants", null, {
                                hk: "2YNQNN"
                            })
                        })]
                    })
                },
                P = function(e) {
                    var t = e.isNoFrequentlyForwarded,
                        n = e.onClick,
                        a = j.ServerProps.hfmStringChanges ? o.fbt._("Messages forwarded many times", null, {
                            hk: "2Neytn"
                        }) : o.fbt._("Frequently forwarded messages", null, {
                            hk: "1OxFLx"
                        });
                    return (0, M.jsxs)(c.default, {
                        onClick: n,
                        multiline: !0,
                        children: [(0, M.jsx)("div", {
                            className: v.default.header,
                            children: (0, M.jsx)(E.TextSpan, {
                                theme: "title",
                                children: a
                            })
                        }), (0, M.jsx)(E.TextDiv, {
                            theme: "muted",
                            children: t ? o.fbt._("Don't allow", null, {
                                hk: "3uBuwQ"
                            }) : o.fbt._("Allow", null, {
                                hk: "2pdVOn"
                            })
                        })]
                    })
                };

            function A(e, t) {
                var n = (0, k.useModelValues)(e.chat, ["id"]),
                    a = (0, k.useModelValues)(e.groupMetadata, ["restrict", "announce", "noFrequentlyForwarded", "participants", "owner", "groupType"]),
                    l = (0, y.default)(),
                    j = function(e) {
                        s.Cmd.openModal((0, M.jsx)(g.default, {
                            settingType: e,
                            chat: n,
                            groupMetadata: a
                        }), {
                            transition: "modal",
                            uim: l
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
                        var t = T.default.equals(e, a.owner),
                            n = (0, p.getMaybeMeUser)().equals(e),
                            i = !0 === a.isParentGroup && (0, m.cadminSelfDemoteEnabled)();
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
                        }))), s.Cmd.closeModal()
                    };
                return (0, M.jsxs)(u.default, {
                    ref: t,
                    theme: "striped",
                    children: [(0, M.jsx)(f.DrawerHeader, {
                        title: o.fbt._("Group settings", null, {
                            hk: "3sS0Vl"
                        }),
                        type: f.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onClose
                    }), (0, M.jsxs)(d.default, {
                        children: [(0, M.jsx)(h.default, {
                            animation: !1,
                            children: (0, M.jsx)(I, {
                                onClick: function() {
                                    j(r.GROUP_SETTING_TYPE.RESTRICT)
                                },
                                isRestricted: a.restrict
                            })
                        }), (0, M.jsx)("div", {
                            className: v.default.restrictText,
                            children: (0, M.jsx)(E.TextSpan, {
                                theme: "muted",
                                children: o.fbt._("Choose who can change this group’s subject, icon, description and disappearing messages setting.", null, {
                                    hk: "1cqpzS"
                                })
                            })
                        }), (0, M.jsxs)(h.default, {
                            animation: !1,
                            children: [(0, m.communitiesEnabled)() && a.groupType === x.GroupType.DEFAULT_ANNOUNCEMENT_GROUP ? null : (0, M.jsx)(w, {
                                onClick: function() {
                                    j(r.GROUP_SETTING_TYPE.ANNOUNCEMENT)
                                },
                                isAnnouncement: a.announce
                            }), (0, C.isAdminHfmToggleEnabled)() ? (0, M.jsx)(P, {
                                onClick: function() {
                                    j(r.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED)
                                },
                                isNoFrequentlyForwarded: a.noFrequentlyForwarded
                            }) : null]
                        }), (0, M.jsx)(h.default, {
                            animation: !1,
                            children: (0, M.jsx)(c.default, {
                                onClick: function() {
                                    s.Cmd.openModal((0, M.jsx)(b.SelectModal, {
                                        onConfirm: O,
                                        getInitialItems: A,
                                        isDisabled: D,
                                        isSelected: D,
                                        filter: N,
                                        title: o.fbt._("Edit group admins", null, {
                                            hk: "1BOEkM"
                                        }),
                                        useShortName: !0,
                                        useAllContacts: !0,
                                        listType: b.ListType.PARTICIPANT_MANAGE_MODAL,
                                        singleSelectionFooterType: S.FooterType.CONFIRM,
                                        multipleSelectionFooterType: S.FooterType.CONFIRM,
                                        shouldShowSelectionSummary: !1
                                    }))
                                },
                                multiline: !0,
                                children: (0, M.jsx)("div", {
                                    className: v.default.header,
                                    children: (0, M.jsx)(E.TextSpan, {
                                        theme: "title",
                                        children: o.fbt._("Edit group admins", null, {
                                            hk: "1BOEkM"
                                        })
                                    })
                                })
                            })
                        })]
                    })]
                })
            }
            var N = (0, l.forwardRef)(A);
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
                                children: u.default.t(564)
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
                h = a(n(52592)),
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
                p = n(26344),
                m = a(n(62861)),
                v = a(n(61897)),
                g = n(68220),
                x = a(n(7665)),
                C = n(22552),
                _ = n(85893),
                b = function(e) {
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
                            }) : d.default.t(582, {
                                count: i,
                                _plural: i
                            }) : d.default.t(579, {
                                count: i,
                                _plural: i
                            });
                            if (e) {
                                if (1 === a.length) return s.fbt._("You are sharing live location", null, {
                                    hk: "4DvZgE"
                                });
                                if (t) return d.default.t(581, {
                                    name: t.formattedShortNameWithNonBreakingSpaces
                                })
                            } else if (t) return d.default.t(578, {
                                name: t.formattedShortNameWithNonBreakingSpaces
                            });
                            return ""
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.onClick;
                            if (!this.state.participants.length) return null;
                            var t = (0, _.jsx)(x.default, {
                                name: (0, p.liveLocationIcon)(!0)
                            });
                            return (0, _.jsx)(c.default, {
                                a8nText: "section-live-location",
                                theme: "padding",
                                title: s.fbt._("Live Location", null, {
                                    hk: "1LvIwY"
                                }),
                                titleOnClick: e,
                                children: (0, _.jsx)(m.default, {
                                    side: t,
                                    onClick: e,
                                    children: (0, _.jsx)(C.TextSpan, {
                                        theme: "title",
                                        children: this.getText()
                                    })
                                })
                            })
                        }
                    }]), n
                }(u.Component);
            b.CONCERNS = {
                chat: ["id", "isGroup", "liveLocation", "liveLocationQueried"]
            }, b.displayName = "LiveLocationRow";
            var S = (0, f.ListenerHOC)((0, v.default)(b, b.CONCERNS));
            t.default = S
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
                l = a(n(94184)),
                s = n(48360),
                u = n(67294),
                c = n(24224),
                d = a(n(48956)),
                f = a(n(53187)),
                h = a(n(18345)),
                p = n(19288),
                m = a(n(45159)),
                v = a(n(94836)),
                g = a(n(99540)),
                x = a(n(65636)),
                C = a(n(23845)),
                _ = a(n(73524)),
                b = a(n(34310)),
                S = n(43890),
                j = n(16835),
                E = a(n(39394)),
                k = a(n(60806)),
                y = n(85893),
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
                    I = (0, u.useState)(e.initialTab),
                    w = (0, r.default)(I, 2),
                    P = w[0],
                    A = w[1],
                    N = (0, u.useState)(null),
                    D = (0, r.default)(N, 2),
                    O = D[0],
                    R = D[1],
                    L = (0, u.useState)(!1),
                    G = (0, r.default)(L, 2),
                    B = G[0],
                    F = G[1],
                    V = (0, E.default)((function() {
                        return new _.default([], (function(e) {
                            return e.id.toString()
                        }))
                    })),
                    U = function() {
                        B && (V.current.unsetAll(), F(!1))
                    },
                    H = function(e, t) {
                        B || F(!0), V.current.setVal(e, t), 0 === V.current.getSelected().length && U()
                    },
                    W = (0, u.useCallback)((function(e) {
                        var t = (0, o.default)(T).indexOf(P),
                            n = (0, o.default)(T).indexOf(e);
                        t !== n && V.current.unsetAll(), A(e), R(n > t ? "right" : "left"), F(!1)
                    }), [V, P]),
                    K = (0, u.useMemo)((function() {
                        var e = [{
                            tab: T.MEDIA,
                            title: m.default.t(607)
                        }, {
                            tab: T.DOCS,
                            title: m.default.t(400)
                        }, {
                            tab: T.LINKS,
                            title: m.default.t(565)
                        }];
                        S.ServerProps.productMediaAttachments && e.push({
                            tab: T.PRODUCTS,
                            title: s.fbt._("Products", null, {
                                hk: "3Ky71N"
                            })
                        });
                        var t = e.map((function(e) {
                                var t = (0, l.default)(x.default.menuItem, (0, i.default)({}, x.default.active, P === e.tab));
                                return (0, y.jsx)("button", {
                                    className: t,
                                    onClick: function() {
                                        return W(e.tab)
                                    },
                                    title: e.title,
                                    children: e.title
                                }, e.tab)
                            })),
                            n = (0, l.default)(x.default.menuTabsLists, S.ServerProps.productMediaAttachments ? x.default.fourTabs : x.default.threeTabs);
                        return (0, y.jsx)("div", {
                            className: n,
                            "data-active-tab": P,
                            children: t
                        })
                    }), [P, W]),
                    q = function() {
                        var e;
                        switch (P) {
                            case T.MEDIA:
                                e = (0, y.jsx)(g.default, {
                                    chat: t,
                                    mediaMsgs: t.getMediaMsgs(),
                                    selectable: B,
                                    onMessageSelect: H,
                                    selectedMessages: V.current,
                                    fullCollection: !0
                                });
                                break;
                            case T.LINKS:
                                e = (0, y.jsx)(v.default, {
                                    chat: t,
                                    linkMsgs: t.getLinkMsgs(),
                                    selectable: B,
                                    onMessageSelect: H,
                                    selectedMessages: V.current
                                });
                                break;
                            case T.DOCS:
                                e = (0, y.jsx)(d.default, {
                                    chat: t,
                                    docMsgs: t.getDocMsgs(),
                                    selectable: B,
                                    onMessageSelect: H,
                                    selectedMessages: V.current
                                });
                                break;
                            case T.PRODUCTS:
                                e = (0, y.jsx)(b.default, {
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
                    z = B ? (0, y.jsx)(j.UIE, {
                        displayName: "MediaMultiSelect",
                        escapable: !0,
                        requestDismiss: U,
                        children: (0, y.jsx)(C.default, {
                            chat: t,
                            noSortOnForward: !0,
                            theme: "mediaGallery",
                            toastPosition: c.ToastPosition.RIGHT,
                            downloadButton: Y,
                            selectedMessages: V.current,
                            onCancel: U
                        })
                    }) : null,
                    X = "right" === O ? "slide-forward" : "slide-back";
                return (0, y.jsxs)(f.default, {
                    theme: "gallery",
                    children: [(0, y.jsx)(p.DrawerHeader, {
                        title: " ",
                        onBack: e.onBack,
                        rtlFixIfOnDarwin: !0,
                        type: p.DRAWER_HEADER_TYPE.MULTI_MEDIA_GALLERY
                    }), z, K, (0, y.jsx)(h.default, {
                        "data-list-scroll-container": !0,
                        children: (0, y.jsx)(k.default, {
                            transitionName: X,
                            className: x.default.column,
                            children: (0, y.jsx)("div", {
                                className: x.default.multimediaGallery,
                                children: (0, y.jsx)("div", {
                                    className: x.default.column,
                                    children: q
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
                l = a(n(79741)),
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
                    V = (0, l.useRef)(null),
                    U = (0, w.useModelValues)(e.msg, ["id", "star", "isGroupMsg", "chat", "type", "isGif", "isViewOnce", "sender", "senderObj", "t", "isSentByMe", "isStickerMsg"]),
                    H = (0, w.useModelValues)(e.mediaData, ["filehash", "mediaStage", "renderableUrl"]),
                    W = (0, l.useState)(null),
                    K = (0, i.default)(W, 2),
                    q = K[0],
                    Y = K[1],
                    z = (0, l.useRef)(null),
                    X = function() {
                        Y(null)
                    };
                (0, I.useListener)(V.current, "animationend", (function() {
                    t()
                }));
                var Z = U.displayName(!0, !0);
                U.isGroupMsg && (Z += " @ " + U.chat.title());
                var $, Q = function() {
                        return U.chat.isGroup ? o.fbt._("Report group", null, {
                            hk: "23NLqw"
                        }) : m.default.t(732, {
                            contactInfo: U.senderObj.displayName
                        })
                    },
                    J = function(e) {
                        var t = U.chat;
                        t && (e ? t.isGroup ? (0, E.sendSpamExitClear)(t, k.SpamFlow.MediaViewer) : (0, E.sendSpamBlockClear)(t, k.SpamFlow.MediaViewer) : (0, E.sendSpamReport)(t, k.SpamFlow.MediaViewer)), c.Cmd.closeModal()
                    },
                    ee = function() {
                        c.Cmd.openModal((0, A.jsx)(P.default, {
                            isBusiness: U.senderObj.isBusiness,
                            isGroup: U.chat.isGroup,
                            onReport: J,
                            onCancel: function() {
                                return c.Cmd.closeModal()
                            },
                            title: Q()
                        }))
                    },
                    te = function() {
                        (0, _.default)(U)
                    },
                    ne = function() {
                        return !U.isViewOnce && (!!H.renderableUrl || H.mediaStage === g.MEDIA_DATA_STAGE.RESOLVED)
                    },
                    ae = function() {
                        var e = [];
                        return (U.canPrivateReply() || U.canPrivateReplyInRestrictedGrp()) && e.push((0, A.jsx)(h.DropdownItem, {
                            a8n: "mi-msg-reply",
                            action: te,
                            children: o.fbt._("Reply privately", null, {
                                hk: "1XQeK2"
                            })
                        }, "private_reply")), U.isViewOnce ? e.push((0, A.jsx)(h.DropdownItem, {
                            action: ee,
                            children: Q()
                        }, "dropdownMsgInfo")) : (U.isSentByMe && e.push((0, A.jsx)(h.DropdownItem, {
                            action: F,
                            children: m.default.t(627)
                        }, "dropdownMsgInfo")), e.push((0, A.jsx)(h.DropdownItem, {
                            action: N,
                            children: o.fbt._("Go to message", null, {
                                hk: "B1anG"
                            })
                        }, "dropdownGoToMsg"), (0, A.jsx)(h.DropdownItem, {
                            action: D,
                            disabled: !ne(),
                            children: o.fbt._("Download", null, {
                                hk: "1g5Jix"
                            })
                        }, "dropdownDownload"))), (0, A.jsx)(x.MenuBarItem, {
                            icon: (0, A.jsx)(y.default, {
                                name: "menu"
                            }),
                            title: m.default.t(621),
                            children: (0, A.jsx)(f.Dropdown, {
                                type: "dropdown_menu",
                                flipOnRTL: !0,
                                dirX: f.DirX.LEFT,
                                children: e
                            }, "MediaPanelHeaderDropdown")
                        }, "btnMenu")
                    },
                    ie = function() {
                        var e, t, n;
                        return U.star ? (e = L, t = "unstar-btn", n = m.default.t(807)) : (e = G, t = "star-btn", n = m.default.t(783)), (0, A.jsx)(x.MenuBarItem, {
                            icon: (0, A.jsx)(y.default, {
                                name: t
                            }),
                            title: n,
                            onClick: e
                        }, t)
                    },
                    re = function() {
                        return U.type === r.MSG_TYPE.STICKER ? null : (0, A.jsx)(x.MenuBarItem, {
                            icon: (0, A.jsx)(y.default, {
                                containerRef: z,
                                name: "react",
                                width: 20
                            }),
                            title: o.fbt._("React to message", null, {
                                hk: "1MagBh"
                            }),
                            onClick: function() {
                                ! function() {
                                    if ((0, C.canReactToMessage)(U)) {
                                        var e = {
                                            dirY: f.DirY.BOTTOM,
                                            dirX: f.DirX.LEFT,
                                            type: "reaction_send_tray",
                                            menu: (0, A.jsx)(j.SendReactionsTrayContainer, {
                                                msg: U,
                                                selectedCallback: function(e) {
                                                    e !== S.MORE_REACTIONS && (0, b.sendReactionToMsg)(U, e).catch((function(e) {
                                                        __LOG__(4, void 0, new Error)`sendReactionMsg: error sending from media modal ${e}`
                                                    })), X()
                                                }
                                            }),
                                            flipOnRTL: !1,
                                            anchor: z.current,
                                            offsetX: m.default.isRTL() ? -118 : 118
                                        };
                                        Y(e)
                                    }
                                }()
                            }
                        }, "btnAddReaction")
                    },
                    oe = function() {
                        return (0, A.jsx)(x.MenuBarItem, {
                            icon: (0, A.jsx)(y.default, {
                                name: "forward"
                            }),
                            title: m.default.t(470),
                            onClick: B
                        }, "btnForward")
                    };
                q && ($ = (0, A.jsx)(T.UIE, {
                    displayName: "MsgReaction",
                    escapable: !0,
                    popable: !0,
                    requestDismiss: X,
                    children: (0, A.jsx)(M.default, {
                        contextMenu: q
                    })
                }));
                return (0, A.jsxs)("div", {
                    className: v.default.mediaPanelHeader,
                    children: [(0, A.jsx)("div", {
                        className: v.default.info,
                        children: (0, A.jsx)(s.default, {
                            idle: !0,
                            image: (0, A.jsx)(d.DetailImage, {
                                id: U.sender,
                                size: 40
                            }),
                            primary: (0, A.jsx)(p.EmojiText, {
                                ellipsify: !0,
                                text: Z
                            }),
                            secondary: u.Clock.relativeDateAndTimeStr(U.t),
                            theme: "media"
                        })
                    }), (0, A.jsx)("div", {
                        className: v.default.mediaPanelTools,
                        children: (0, A.jsxs)(x.MenuBar, {
                            theme: "strong",
                            children: [U.isViewOnce ? [(0, A.jsx)(x.MenuBarItem, {
                                icon: (0, A.jsx)(y.default, {
                                    name: "view-once",
                                    className: v.default.voIcon
                                }),
                                title: o.fbt._("View once info", null, {
                                    hk: "47XkZ4"
                                }),
                                onClick: a
                            }, "btnViewOnceInfo"), ae()] : n >= 0 ? [U.canReply() ? (0, A.jsx)(x.MenuBarItem, {
                                icon: (0, A.jsx)(y.default, {
                                    name: "reply"
                                }),
                                title: o.fbt._("Reply", null, {
                                    hk: "1C7DPa"
                                }),
                                onClick: O
                            }, "btnReply") : null, U.canStar() ? ie() : null, (0, C.canReactToMessage)(U) ? re() : null, (0, A.jsx)(x.MenuBarItem, {
                                icon: (0, A.jsx)(y.default, {
                                    name: "delete"
                                }),
                                title: o.fbt._("Delete", null, {
                                    hk: "2KhPUX"
                                }),
                                onClick: R
                            }, "btnDelete"), U.canForward() ? oe() : null, ae()].filter(Boolean) : (le = [], U.isStickerMsg || le.push((0, A.jsx)(x.MenuBarItem, {
                                icon: (0, A.jsx)(y.default, {
                                    name: "bubble"
                                }),
                                title: o.fbt._("Go to message", null, {
                                    hk: "B1anG"
                                }),
                                onClick: N
                            }, "btnGoToMsg")), U.isStickerMsg && le.push((0, A.jsx)(x.MenuBarItem, {
                                icon: (0, A.jsx)(y.default, {
                                    name: "reply"
                                }),
                                title: o.fbt._("Reply", null, {
                                    hk: "1C7DPa"
                                }),
                                onClick: O
                            }, "btnReplyToMsg")), U.canStar() && le.push(ie()), U.isStickerMsg && le.push((0, A.jsx)(x.MenuBarItem, {
                                icon: (0, A.jsx)(y.default, {
                                    name: "delete"
                                }),
                                title: o.fbt._("Delete", null, {
                                    hk: "2KhPUX"
                                }),
                                onClick: R
                            }, "btnDelete")), (0, C.canReactToMessage)(U) && le.push(re()), U.canForward() && le.push(oe()), U.isStickerMsg || le.push((0, A.jsx)(x.MenuBarItem, {
                                icon: (0, A.jsx)(y.default, {
                                    name: "download"
                                }),
                                title: o.fbt._("Download", null, {
                                    hk: "1g5Jix"
                                }),
                                disabled: !ne(),
                                onClick: D
                            }, "btnDownload")), le.filter(Boolean)), (0, A.jsx)(x.MenuBarItem, {
                                a8nText: "btn-close",
                                icon: (0, A.jsx)(y.default, {
                                    className: e.isHighlightClose ? v.default.highlightClose : null,
                                    containerRef: V,
                                    name: "x-viewer"
                                }),
                                title: o.fbt._("Close", null, {
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
                o = n(48360),
                l = n(67294),
                s = a(n(88186)),
                u = n(10399),
                c = n(65901),
                d = n(66834),
                f = n(98169),
                h = n(94680),
                p = n(73008),
                m = a(n(45159)),
                v = a(n(77375)),
                g = n(41655),
                x = n(91823),
                C = n(42496),
                _ = a(n(71732)),
                b = n(22242),
                S = n(51898),
                j = n(4931),
                E = n(43329),
                k = n(24170),
                y = a(n(7665)),
                T = n(16835),
                M = a(n(93820)),
                I = n(8413),
                w = n(69283),
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
                        _ = (0, m.default)(t, C),
                        b = function(e) {
                            var t;
                            null === (t = C.current) || void 0 === t || t.onClick(e)
                        },
                        S = a.isFirstParty ? (0, g.jsx)(o.default, {
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
                                ref: _,
                                width: a.fullWidth,
                                height: a.fullHeight,
                                onZoomIn: e.onImgZoomIn,
                                onLoad: e.onLoad,
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
                                    children: function(e) {
                                        return (0, g.jsx)(s.default, {
                                            className: (0, r.default)(c.default.content),
                                            onClick: b,
                                            src: e
                                        })
                                    }
                                })
                            })
                        }), S]
                    })
                },
                _ = (0, i.forwardRef)(C);
            t.default = _
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
                s = n(8587),
                u = n(67294),
                c = a(n(56720)),
                d = a(n(3228)),
                f = a(n(47934)),
                h = n(98585),
                p = n(98120),
                m = a(n(45159)),
                v = n(41655),
                g = a(n(81309)),
                x = a(n(50507)),
                C = n(43604),
                _ = a(n(58497)),
                b = a(n(47149)),
                S = n(2099),
                j = n(42496),
                E = a(n(61897)),
                k = a(n(61566)),
                y = n(85893),
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
                                rmrReason: x.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
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
                                i = a.isGif,
                                r = a.mediaStage === v.MEDIA_DATA_STAGE.RESOLVED || a.streamable && a.isStreamable();
                            r = r || n.isForcingRMR();
                            var o = null,
                                l = S.ReactionBubbleType.MEDIA_ITEM;
                            if (n && (0, j.shouldShowReactionBubble)(n, l) && (o = (0, y.jsx)(b.default, {
                                    msgIds: [n.id.toString()],
                                    reactionBubbleType: l,
                                    reactionBubbleVisible: this.state.displayReactionBubble
                                })), r) {
                                var s, u, p = m.default.t(826);
                                return !this.state.isFullscreenMode && (null == n ? void 0 : n.interactiveAnnotations) && n.interactiveAnnotations.length > 0 && (s = (0, y.jsx)(d.default, {
                                    annotations: n.interactiveAnnotations
                                })), u = i ? (0, y.jsxs)("div", {
                                    className: (0, c.default)(g.default.content),
                                    ref: this._setRefContainer,
                                    children: [(0, y.jsx)(k.default, {
                                        src: a.renderableUrl,
                                        onClick: this.stopPropagation,
                                        autoPlay: !0,
                                        loop: !0,
                                        children: p
                                    }), s]
                                }) : (0, y.jsx)("div", {
                                    ref: this._setRefContainer,
                                    className: (0, c.default)(g.default.content),
                                    onClick: this.stopPropagation,
                                    children: (0, y.jsx)(C.WrappedMsgVideoPlayer, {
                                        msg: n,
                                        mediaData: a,
                                        startTime: this.props.startTime,
                                        onClose: this.props.onClose,
                                        onError: function() {},
                                        onFullscreenToggle: this._handleFullscreenToggle,
                                        autoPlay: this.props.autoPlay,
                                        type: h.PLAYER_TYPE.MEDIA_VIEWER,
                                        overlays: s,
                                        noPip: n.isViewOnce
                                    })
                                }), (0, y.jsxs)(_.default, {
                                    type: "scaleDown",
                                    position: "relative",
                                    objectPosition: "relative",
                                    size: this.state.size,
                                    onObjectLoad: this.props.onLoad,
                                    children: [u, o]
                                })
                            }
                            return (0, y.jsxs)(_.default, {
                                type: "scaleDown",
                                position: "relative",
                                objectPosition: "relative",
                                size: {
                                    width: this.props.mediaData.fullWidth,
                                    height: this.props.mediaData.fullHeight
                                },
                                children: [(0, y.jsx)(f.default, {
                                    altText: null !== (e = n.caption) && void 0 !== e ? e : "",
                                    mediaData: a
                                }), o]
                            })
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e) {
                            var t = e.mediaData;
                            return (t.mediaStage === v.MEDIA_DATA_STAGE.RESOLVED || t.streamable && t.isStreamable()) && (0, s.isNonZeroNumber)(t.fullWidth) && (0, s.isNonZeroNumber)(t.fullHeight) ? {
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
                            return e.fullWidth >= p.MIN_WIDTH ? {
                                width: e.fullWidth,
                                height: e.fullHeight
                            } : {
                                width: p.MIN_WIDTH,
                                height: e.fullHeight
                            }
                        }
                    }]), n
                }(u.PureComponent);
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
            }((0, E.default)(T, T.CONCERNS));
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
                    Q = (0, U.useModelValues)(e.msg, ["id", "star", "isUnsentMedia", "isViewOnce", "isStickerMsg", "chat", "caption", "interactiveAnnotations", "type"]),
                    J = (0, U.useModelValues)(e.mediaData, ["mediaStage", "type", "isGif"]),
                    ee = (0, W.default)(a),
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
                    he = Q.isViewOnce && de,
                    pe = (0, c.useState)((function() {
                        return J.mediaStage === w.MEDIA_DATA_STAGE.RESOLVED && e.isAnimatingIn && e.getZoomNode ? e.getZoomNode(Q.id) : null
                    })),
                    me = (0, r.default)(pe, 1)[0],
                    ve = (0, c.useState)(!1),
                    ge = (0, r.default)(ve, 2),
                    xe = ge[0],
                    Ce = ge[1],
                    _e = (0, c.useState)(!1),
                    be = (0, r.default)(_e, 2),
                    Se = be[0],
                    je = be[1],
                    Ee = (0, c.useState)(!e.isAnimatingIn),
                    ke = (0, r.default)(Ee, 2),
                    ye = ke[0],
                    Te = ke[1],
                    Me = (0, c.useState)(!1),
                    Ie = (0, r.default)(Me, 2),
                    we = Ie[0],
                    Pe = Ie[1],
                    Ae = (0, c.useState)(!1),
                    Ne = (0, r.default)(Ae, 2),
                    De = Ne[0],
                    Oe = Ne[1],
                    Re = function() {
                        var e = (0, Y.jsx)(D.default, {
                            isPhoto: J.type === k.default.TYPE.IMAGE,
                            onOkClick: function() {
                                fe(), f.Cmd.closeModal()
                            }
                        });
                        f.Cmd.openModal(e)
                    },
                    Le = (0, K.default)((function(e, t) {
                        if (!Se) {
                            var n = te.current;
                            if (n) {
                                var a = n.getInsideContainer();
                                if (a && a instanceof HTMLElement) {
                                    var i = n.getOutsideContainer();
                                    if (i && i instanceof HTMLElement) {
                                        var r = n.getTranslatePosition(i, e, t),
                                            o = r.translateX,
                                            l = r.translateY;
                                        (0, q.default)(a, "stop"), (0, q.default)(a, {
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
                    return __LOG__(2)`MediaViewerModal: Opened`, Q.isViewOnce && (0, j.canMarkPlayed)(Q) && (0, j.markPlayed)(Q), he && Re(), l.default.focus(ie.current),
                        function() {
                            __LOG__(2)`MediaViewerModal: Closed`, Le.cancel()
                        }
                }), []);
                var Ge, Be, Fe = function(e) {
                        n && n();
                        var t = me;
                        t && e && a && e instanceof HTMLElement && (se.current || (se.current = !0, function(e, t) {
                            var n, a = t.getBoundingClientRect(),
                                i = e.getBoundingClientRect(),
                                r = i.top - a.top,
                                o = i.left - a.left,
                                l = e.clientWidth / t.clientWidth;
                            r -= (t.clientHeight - e.clientHeight) / 2, o -= (t.clientWidth - e.clientWidth) / 2, (0, q.default)(t, {
                                opacity: [1, 0],
                                translateX: [0, o],
                                translateY: [0, r],
                                scale: [1, l]
                            }, {
                                duration: A.ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            });
                            var s = null === (n = ae.current) || void 0 === n ? void 0 : n.getContainerElement();
                            s && (0, q.default)(s, {
                                opacity: [1, 0]
                            }, {
                                duration: A.ANIMATION_DURATION
                            })
                        }(t, e)))
                    },
                    Ve = function() {
                        if (!oe.current) {
                            oe.current = !0, (0, B.isFunction)(R) && R();
                            var t, n = e.getZoomNode && e.getZoomNode(Q.id);
                            if (!n) return X();
                            var a, i = J.type;
                            if ([k.default.TYPE.IMAGE, k.default.TYPE.STICKER].includes(i) && te.current) t = te.current.getInsideContainer(), null === (a = te.current) || void 0 === a || a.closingMediaZoomable();
                            else if (J.isGif && ne.current) {
                                var r;
                                t = ne.current.getContainerElement(), null === (r = ne.current) || void 0 === r || r.closingMedia()
                            }
                            if (!t) return X();
                            var o, l = t,
                                s = t.getBoundingClientRect(),
                                u = n.getBoundingClientRect(),
                                c = u.top - s.top,
                                d = u.left - s.left,
                                f = n.clientWidth / l.clientWidth;
                            c -= (l.clientHeight - n.clientHeight) / 2, d -= (l.clientWidth - n.clientWidth) / 2, (0, q.default)(t, {
                                translateX: [d, 0],
                                translateY: [c, 0],
                                scale: [f, 1]
                            }, {
                                duration: A.CLOSE_ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            }).then((function() {
                                X()
                            }));
                            var h = null === (o = ae.current) || void 0 === o ? void 0 : o.getContainerElement();
                            h && (0, q.default)(h, {
                                opacity: [0, 1]
                            }, {
                                duration: A.CLOSE_ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            })
                        }
                    },
                    Ue = function(e) {
                        var t = te.current;
                        e && t && (le.current = t.heightOverflow > 0 || t.widthOverflow > 0), Ce(e), d(e)
                    },
                    He = function(e) {
                        e.stopPropagation(), Pe(!we)
                    };
                switch ((0, c.useEffect)((function() {
                        a || ye || !ee || Te(!0)
                    }), [a, ye, ee]), J.type) {
                    case k.default.TYPE.IMAGE:
                        Ge = (0, Y.jsx)(y.default, {
                            msg: Q,
                            mediaData: J,
                            onLoad: Fe,
                            onImgZoomIn: Ue,
                            onAnnotationTooltipDisplay: function() {
                                je(!0)
                            },
                            onAnnotationTooltipDismiss: function() {
                                je(!1)
                            },
                            preventDownload: Q.isViewOnce,
                            ref: te
                        }, Q.id.toString());
                        break;
                    case k.default.TYPE.STICKER:
                        Ge = (0, Y.jsx)(I.default, {
                            msg: Q,
                            mediaData: J,
                            onLoad: Fe,
                            onImgZoomIn: Ue,
                            onStickerPackView: Ve,
                            stickerPackViewDelay: A.CLOSE_ANIMATION_DURATION,
                            ref: te
                        }, Q.id.toString());
                        break;
                    case k.default.TYPE.VIDEO:
                        Ge = (0, Y.jsx)(P.default, {
                            autoPlay: !he,
                            msg: Q,
                            mediaData: J,
                            onLoad: J.isGif ? Fe : null,
                            startTime: e.startTime,
                            onClose: Ve,
                            ref: ne
                        }, Q.id.toString());
                        break;
                    case k.default.TYPE.AUDIO:
                        Ge = (0, Y.jsx)(E.default, {
                            mediaData: J,
                            msg: Q
                        }, Q.id.toString());
                        break;
                    default:
                        __LOG__(4, void 0, new Error, !0)`type: ${J.type}`, SEND_LOGS("MediaViewerModal: unexpected media type")
                }
                var We = e.msgIndexInAlbum >= 0 && e.albumSize >= 0;
                if (Q.caption || We) {
                    var Ke, qe;
                    if (We) {
                        var Ye = {
                            number: e.msgIndexInAlbum + 1,
                            totalNumber: e.albumSize
                        };
                        qe = S.default.t(697, Ye)
                    }
                    var ze = b.Configuration.Conversation({
                            mentions: Q.mentionMap(),
                            links: Q.getLinks(),
                            trusted: !0
                        }),
                        Xe = !ye && (J.isGif || J.type === k.default.TYPE.IMAGE);
                    Be = (0, Y.jsxs)(Y.Fragment, {
                        children: [(0, Y.jsxs)("p", {
                            className: (0, s.default)(N.default.captionWrapper, re.current && N.default.captionWrapperExpandable),
                            onClick: re.current ? He : void 0,
                            title: re.current ? u.fbt._("Read more", null, {
                                hk: "2DvSvh"
                            }) : void 0,
                            "aria-hidden": we || void 0,
                            children: [(0, Y.jsx)(v.EmojiText, {
                                className: (0, s.default)(N.default.mediaCaption, (Ke = {}, (0, i.default)(Ke, N.default.captionHidden, Xe), (0, i.default)(Ke, N.default.expanded, we), Ke)),
                                formatters: ze,
                                ref: function(e) {
                                    ae.current = e
                                },
                                text: Q.caption || qe
                            }), re.current && (0, Y.jsx)(V.default, {
                                xstyle: [z.captionReadMoreBtn, we && z.captionReadMoreBtnExpanded, xe && z.captionReadMoreBtnZoomed],
                                onClick: He,
                                children: (0, Y.jsx)(G.TextSpan, {
                                    children: u.fbt._("Read more", null, {
                                        hk: "2DvSvh"
                                    })
                                })
                            })]
                        }), we && (0, Y.jsx)("p", {
                            className: (0, s.default)(N.default.captionWrapper, N.default.captionWrapperExpandable, N.default.captionExpanded),
                            onClick: He,
                            children: (0, Y.jsx)(v.EmojiText, {
                                className: (0, s.default)(N.default.mediaCaption, N.default.mediaCaptionExpanded),
                                formatters: ze,
                                text: Q.caption
                            })
                        })]
                    })
                }
                var Ze = (0, s.default)(N.default.media, (0, i.default)({}, N.default.mediaWithCaption, !!Be)),
                    $e = (0, s.default)("overlay", N.default.mediaViewer, (t = {}, (0, i.default)(t, N.default.noThumbnails, Q.isViewOnce || Q.isStickerMsg), (0, i.default)(t, N.default.mediaViewerAnimate, e.isAnimatingIn), (0, i.default)(t, N.default.cursorZoomOut, xe), t)),
                    Qe = xe && le.current ? function(e) {
                        Le(e.pageX, e.pageY)
                    } : null,
                    Je = xe ? function(e) {
                        Le.cancel();
                        var t = te.current;
                        t && xe && t.onClick(e)
                    } : null,
                    et = xe ? null : Ve;
                null != et && Q.isViewOnce && (et = function() {
                    Oe(!0)
                });
                var tt = !Q.isViewOnce && !Q.isStickerMsg;
                return (0, Y.jsx)(F.UIE, {
                    displayName: "MediaViewer",
                    escapable: !0,
                    requestDismiss: Ve,
                    children: (0, Y.jsx)(_.HotKeys, {
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
                            className: $e,
                            "data-animate-media-viewer": !0,
                            "data-testid": "media-viewer-modal",
                            onClick: Je,
                            onMouseMove: Qe,
                            children: [(0, Y.jsx)(T.default, {
                                isHighlightClose: De,
                                msg: Q,
                                mediaData: J,
                                onClose: Ve,
                                onGoToMsgClick: function(e) {
                                    e.stopPropagation(), Ve(), f.Cmd.existsDrawerRight((function(e) {
                                        e && 2 === h.default.column && f.Cmd.closeDrawerRight()
                                    }));
                                    var t = Q.chat.getSearchContext((0, L.unproxy)(Q));
                                    f.Cmd.openChatAt(Q.chat, t).then((function(e) {
                                        e && f.Cmd.focusChatTextInput(Q.chat)
                                    }))
                                },
                                onHightlightCloseEnd: function() {
                                    Oe(!1)
                                },
                                onReplyClick: function() {
                                    Ve(), (0, o.delayMs)(A.CLOSE_ANIMATION_DURATION).then(Z.bind(null, (0, L.unproxy)(Q)))
                                },
                                onUnstarClick: function(e) {
                                    e.stopPropagation(), f.Cmd.sendUnstarMsgs(Q.chat, [(0, L.unproxy)(Q)])
                                },
                                onStarClick: function(e) {
                                    e.stopPropagation(), f.Cmd.sendStarMsgs(Q.chat, [(0, L.unproxy)(Q)])
                                },
                                onDeleteClick: function() {
                                    f.Cmd.openModal((0, Y.jsx)(m.default, {
                                        chat: Q.chat,
                                        msgList: [(0, L.unproxy)(Q)],
                                        onDelete: Ve
                                    }))
                                },
                                openForwardFlow: function(e) {
                                    e.stopPropagation(), Q.isUnsentMedia ? f.Cmd.openModal((0, Y.jsx)(p.default, {
                                        title: S.default.t(459),
                                        onOK: function() {
                                            return f.Cmd.closeModal()
                                        },
                                        okText: u.fbt._("OK", null, {
                                            hk: "2KEeHb"
                                        }),
                                        children: S.default.t(456)
                                    })) : f.Cmd.openModal((0, Y.jsx)(x.ForwardMessageFlowLoadable, {
                                        msgs: [(0, L.unproxy)(Q)]
                                    }), {
                                        transition: "modal-flow"
                                    })
                                },
                                onDownloadClick: function(e) {
                                    e.stopPropagation(), g.FileSaver.initDownload((0, L.unproxy)(Q))
                                },
                                onMsgInfoClick: function() {
                                    Ve(), (0, o.delayMs)(A.CLOSE_ANIMATION_DURATION + 250).then(f.Cmd.msgInfoDrawer.bind(f.Cmd, (0, L.unproxy)(Q)))
                                },
                                onViewOnceInfoClick: function() {
                                    Re()
                                },
                                msgIndexInAlbum: e.msgIndexInAlbum
                            }), (0, Y.jsx)("div", {
                                className: (0, s.default)(N.default.mediaContent, (0, i.default)({}, N.default.sticker, Q.isStickerMsg)),
                                onClick: et,
                                children: (0, Y.jsx)($, {
                                    hasNavigationButtons: tt,
                                    onNext: e.onNext,
                                    onPrev: e.onPrev,
                                    imgZoomed: xe,
                                    children: (0, Y.jsxs)("div", {
                                        className: Ze,
                                        children: [(0, Y.jsx)(M.default, {
                                            msg: Q,
                                            mediaData: J
                                        }), Ge, (0, Y.jsx)(C.default.Provider, {
                                            value: Q.chat.groupMetadata,
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
                h = a(n(67771)),
                p = a(n(86777)),
                m = a(n(70428)),
                v = n(73008),
                g = n(76151),
                x = n(49196),
                C = a(n(30588)),
                _ = n(58342),
                b = n(72896),
                S = a(n(45159)),
                j = n(1435),
                E = a(n(53304)),
                k = a(n(72397)),
                y = a(n(67788)),
                T = a(n(17044)),
                M = a(n(65729)),
                I = a(n(83200)),
                w = n(41655),
                P = a(n(51751)),
                A = n(21065),
                N = a(n(80674)),
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
                W = a(n(40054)),
                K = a(n(15663)),
                q = a(n(66265)),
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
                    _ = x[1],
                    b = (0, c.default)((function() {
                        var e = v();
                        (0, r.default)(C, e) || _(e)
                    }), 100),
                    S = function() {
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
                                b(), n(e)
                            },
                            className: s.default.viewerThumbs,
                            ref: e.setRefThumbs,
                            children: S
                        })
                    })
                })
            };
            var i = a(n(63038)),
                r = a(n(55713)),
                o = n(67294),
                l = n(19499),
                s = a(n(76479)),
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
                    cancelText: c.default.t(564),
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
        52592: (e, t, n) => {
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
                u = a(n(17391)),
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
        59828: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                audioTag: "_1ichq"
            }
        },
        66322: (e, t, n) => {
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
        8767: (e, t, n) => {
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
        89358: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                roundedThumb: "_2rpgh"
            }
        },
        11354: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                container: "_3go1_"
            }
        },
        65383: (e, t, n) => {
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
        52901: (e, t, n) => {
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
        54963: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                container: "_Wzeb",
                selected: "_2v6Lf"
            }
        },
        17429: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                iconType: "_3sWXp"
            }
        },
        68198: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                wrapper: "_11tTr"
            }
        },
        85967: (e, t, n) => {
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
        85845: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                footerNote: "_2v7h3",
                getTheAppLink: "f20SI"
            }
        },
        2256: (e, t, n) => {
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
        12945: (e, t, n) => {
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
        33463: (e, t, n) => {
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
        85938: (e, t, n) => {
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
        90123: (e, t, n) => {
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
        44920: (e, t, n) => {
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
        35100: (e, t, n) => {
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
        8342: (e, t, n) => {
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
        21477: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                header: "_2zyOo",
                icon: "_4aKqp"
            }
        },
        14881: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                header: "_3AwRc",
                restrictText: "_1fFgT"
            }
        },
        65636: (e, t, n) => {
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
        79741: (e, t, n) => {
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
        76479: (e, t, n) => {
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
        17391: (e, t, n) => {
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