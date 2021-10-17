/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [7205], {
        30523: e => {
            ! function() {
                "use strict";
                e.exports = {
                    polyfill: function() {
                        var e = window,
                            t = document;
                        if (!("scrollBehavior" in t.documentElement.style) || !0 === e.__forceSmoothScrollPolyfill__) {
                            var a, n = e.HTMLElement || e.Element,
                                i = {
                                    scroll: e.scroll || e.scrollTo,
                                    scrollBy: e.scrollBy,
                                    elementScroll: n.prototype.scroll || r,
                                    scrollIntoView: n.prototype.scrollIntoView
                                },
                                l = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now,
                                o = (a = e.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(a) ? 1 : 0);
                            e.scroll = e.scrollTo = function() {
                                void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? p.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : i.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset))
                            }, e.scrollBy = function() {
                                void 0 !== arguments[0] && (s(arguments[0]) ? i.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset)))
                            }, n.prototype.scroll = n.prototype.scrollTo = function() {
                                if (void 0 !== arguments[0])
                                    if (!0 !== s(arguments[0])) {
                                        var e = arguments[0].left,
                                            t = arguments[0].top;
                                        p.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                                    } else {
                                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                        i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                    }
                            }, n.prototype.scrollBy = function() {
                                void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? this.scroll({
                                    left: ~~arguments[0].left + this.scrollLeft,
                                    top: ~~arguments[0].top + this.scrollTop,
                                    behavior: arguments[0].behavior
                                }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                            }, n.prototype.scrollIntoView = function() {
                                if (!0 !== s(arguments[0])) {
                                    var a = f(this),
                                        n = a.getBoundingClientRect(),
                                        l = this.getBoundingClientRect();
                                    a !== t.body ? (p.call(this, a, a.scrollLeft + l.left - n.left, a.scrollTop + l.top - n.top), "fixed" !== e.getComputedStyle(a).position && e.scrollBy({
                                        left: n.left,
                                        top: n.top,
                                        behavior: "smooth"
                                    })) : e.scrollBy({
                                        left: l.left,
                                        top: l.top,
                                        behavior: "smooth"
                                    })
                                } else i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                            }
                        }

                        function r(e, t) {
                            this.scrollLeft = e, this.scrollTop = t
                        }

                        function s(e) {
                            if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                            if ("object" == typeof e && "smooth" === e.behavior) return !1;
                            throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function d(e, t) {
                            return "Y" === t ? e.clientHeight + o < e.scrollHeight : "X" === t ? e.clientWidth + o < e.scrollWidth : void 0
                        }

                        function u(t, a) {
                            var n = e.getComputedStyle(t, null)["overflow" + a];
                            return "auto" === n || "scroll" === n
                        }

                        function c(e) {
                            var t = d(e, "Y") && u(e, "Y"),
                                a = d(e, "X") && u(e, "X");
                            return t || a
                        }

                        function f(e) {
                            for (; e !== t.body && !1 === c(e);) e = e.parentNode || e.host;
                            return e
                        }

                        function h(t) {
                            var a, n, i, o, r = (l() - t.startTime) / 468;
                            o = r = r > 1 ? 1 : r, a = .5 * (1 - Math.cos(Math.PI * o)), n = t.startX + (t.x - t.startX) * a, i = t.startY + (t.y - t.startY) * a, t.method.call(t.scrollable, n, i), n === t.x && i === t.y || e.requestAnimationFrame(h.bind(e, t))
                        }

                        function p(a, n, o) {
                            var s, d, u, c, f = l();
                            a === t.body ? (s = e, d = e.scrollX || e.pageXOffset, u = e.scrollY || e.pageYOffset, c = i.scroll) : (s = a, d = a.scrollLeft, u = a.scrollTop, c = r), h({
                                scrollable: s,
                                method: c,
                                startTime: f,
                                startX: d,
                                startY: u,
                                x: n,
                                y: o
                            })
                        }
                    }
                }
            }()
        },
        92530: (e, t, a) => {
            "use strict";
            var n = a(52108).default,
                i = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setGroupDesc = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return v((0, h.unproxy)(e), t)
            };
            var o = a(18077),
                r = a(24224),
                s = l(a(65901)),
                d = i(a(18286)),
                u = l(a(45159)),
                c = a(12138),
                f = l(a(12415)),
                h = a(68220),
                p = a(59175),
                m = a(85893);

            function v(e) {
                var t, a, i, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    h = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, r.genId)(),
                    g = l && l.trim();
                if (g === (null === (t = e.groupMetadata) || void 0 === t ? void 0 : t.desc)) return n.reject(new d.ActionError);
                "" === g && (g = null);
                var x = (0, c.sendSetGroupDescription)(e.id, g, (0, f.default)(), null === (a = e.groupMetadata) || void 0 === a ? void 0 : a.descId),
                    C = null === (i = e.groupMetadata) || void 0 === i ? void 0 : i.desc,
                    _ = new r.ActionType(u.default.t(130)),
                    S = x.then((function() {
                        return new r.ActionType(u.default.t(132), {
                            actionText: u.default.t(230),
                            actionHandler: function() {
                                return v(e, C, h)
                            }
                        })
                    })).catch((0, o.filteredCatch)(p.ServerStatusCodeError, (function(e) {
                        if (e.status >= 400) return new r.ActionType(u.default.t(131))
                    }))).catch((function() {
                        return __LOG__(3)`models:chat:setGroupDesc dropped`, new r.ActionType(u.default.t(131), {
                            actionText: u.default.t(226),
                            actionHandler: function() {
                                return v(e, g, h)
                            }
                        })
                    }));
                return s.default.openToast((0, m.jsx)(r.ActionToast, {
                    id: h,
                    initialAction: _,
                    pendingAction: S
                })), x.then((function(t) {
                    var a;
                    t._duplicate || (null === (a = e.groupMetadata) || void 0 === a || a.set({
                        desc: g || ""
                    }))
                })).catch((0, o.filteredCatch)(p.ServerStatusCodeError, (function() {})))
            }
        },
        89569: (e, t, a) => {
            "use strict";
            var n = a(52108).default,
                i = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setGroupSubject = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return v((0, f.unproxy)(e), t)
            };
            var o = a(18077),
                r = a(24224),
                s = l(a(65901)),
                d = i(a(18286)),
                u = l(a(45159)),
                c = a(12138),
                f = a(68220),
                h = a(51578),
                p = a(59175),
                m = a(85893);

            function v(e, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, r.genId)(),
                    i = t.trim();
                if (!i) return n.reject(new d.ActionError);
                if (i === e.contact.name) return n.reject(new d.ActionError);
                var l = (0, c.sendSetGroupSubject)(e.id, i),
                    f = e.contact.name,
                    g = new r.ActionType(u.default.t(150)),
                    x = l.then((function() {
                        return new r.ActionType(u.default.t(149, {
                            subject: i
                        }), {
                            actionText: u.default.t(230),
                            actionHandler: function() {
                                return v(e, f, a)
                            }
                        })
                    })).catch((0, o.filteredCatch)(p.ServerStatusCodeError, (function(e) {
                        if (e.status >= 400) return new r.ActionType(u.default.t(148))
                    }))).catch((function() {
                        return __LOG__(3)`models:chat:setSubject dropped`, new r.ActionType(u.default.t(148), {
                            actionText: u.default.t(226),
                            actionHandler: function() {
                                return v(e, i, a)
                            }
                        })
                    }));
                return s.default.openToast((0, m.jsx)(r.ActionToast, {
                    id: a,
                    initialAction: g,
                    pendingAction: x
                })), l.then((function(t) {
                    if (!t._duplicate) {
                        var a = {
                            name: i
                        };
                        return (0, h.updateLocal)(e.contact.id, a).then((function() {
                            e.contact.set(a)
                        }))
                    }
                })).catch((0, o.filteredCatch)(p.ServerStatusCodeError, (function() {})))
            }
        },
        44606: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact,
                    a = e.onClick,
                    n = e.contextMenu,
                    r = e.isPendingParticipant,
                    s = e.contextEnabled,
                    d = e.onContext,
                    u = e.theme,
                    c = (0, l.default)(e.participant, ["isAdmin"]);
                return (0, o.jsx)(i.default, {
                    contact: t,
                    admin: c.isAdmin,
                    onClick: a,
                    theme: u || "drawer-list",
                    contextEnabled: function() {
                        return null != s && s(t)
                    },
                    contextMenu: n,
                    onContext: function(e) {
                        return d && d(e, t)
                    },
                    isPendingParticipant: r,
                    showNotifyName: !0,
                    waitIdle: !0
                })
            };
            var i = n(a(65002)),
                l = n(a(69283)),
                o = a(85893)
        },
        93603: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = i(a(34575)),
                o = i(a(93913)),
                r = i(a(81506)),
                s = i(a(2205)),
                d = i(a(99842)),
                u = i(a(48842)),
                c = a(67294),
                f = i(a(59828)),
                h = i(a(65901)),
                p = i(a(16175)),
                m = i(a(63641)),
                v = i(a(36450)),
                g = i(a(692)),
                x = n(a(74950)),
                C = a(85893),
                _ = function(e) {
                    (0, s.default)(a, e);
                    var t = (0, d.default)(a);

                    function a() {
                        var e;
                        (0, l.default)(this, a);
                        for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i))).startCheckForSuccess = function() {
                            e.checkIteration = 0, e.checkForSuccessInterval = e.props.setInterval(e.checkForSuccess, 250)
                        }, e.clearCheckForSuccess = function() {
                            e.checkForSuccessInterval && (e.props.clearInterval(e.checkForSuccessInterval), e.checkForSuccessInterval = 0, e.checkIteration = 0)
                        }, e.checkForSuccess = function() {
                            if (x.default.state === x.STATE.CONNECTED) {
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
                                    var a = (0, u.default)(e._audioElement, "_this._audioElement").buffered;
                                    a && a.length && a.end(0) > 0 && e.handlePlaying()
                                }
                            }
                        }, e.handlePlayerError = function(t) {
                            e.clearCheckForSuccess(), e.props.onError && e.props.onError(t.target.src)
                        }, e.handleOtherPlaying = function(t) {
                            t !== (0, r.default)(e) && (0, u.default)(e._audioElement, "_this._audioElement").pause()
                        }, e.handlePlaying = function() {
                            e.clearCheckForSuccess(), h.default.mediaPlaying((0, r.default)(e))
                        }, e._setRefAudio = function(t) {
                            e._audioElement = t, null != e.props.setRefAudio && e.props.setRefAudio(t)
                        }, e
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.listeners,
                                t = (0, u.default)(this._audioElement, "this._audioElement");
                            this._updatePlaybackRate(), e.add(t, "error", this.handlePlayerError, !0), e.add(t, "playing", this.handlePlaying), e.add(h.default, "mediaPlaying", this.handleOtherPlaying), (g.default.isGecko || g.default.isSafari) && (this.props.autoPlay ? (this.checkIteration = 0, this.checkForSuccessInterval = this.props.setInterval(this.checkForSuccess, 250)) : this.props.autoPlay ? this.startCheckForSuccess() : e.add(t, "play", this.startCheckForSuccess))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            g.default.isBlink && (0, p.default)((0, u.default)(this._audioElement, "this._audioElement"))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this._updatePlaybackRate()
                        }
                    }, {
                        key: "_updatePlaybackRate",
                        value: function() {
                            var e = (0, u.default)(this._audioElement, "this._audioElement"),
                                t = this.props.playbackRate;
                            e.defaultPlaybackRate === t && e.playbackRate === t || (e.defaultPlaybackRate = e.playbackRate = null != t ? t : 1)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return (0, C.jsx)("div", {
                                className: this.props.className,
                                children: (0, C.jsx)("audio", {
                                    ref: this._setRefAudio,
                                    className: f.default.audioTag,
                                    src: this.props.url,
                                    onClick: this.props.onClick,
                                    controls: this.props.controls,
                                    preload: this.props.preload,
                                    autoPlay: this.props.autoPlay,
                                    children: this.props.children
                                })
                            })
                        }
                    }]), a
                }(c.Component);
            _.displayName = "AudioTag";
            var S = (0, m.default)((0, v.default)(_));
            t.default = S
        },
        48956: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a = e.docMsgs,
                    n = e.chat,
                    v = (0, l.default)(e, ["docMsgs", "chat"]),
                    g = (0, p.default)(),
                    x = (0, o.useRef)(null);
                (0, h.useListener)(a, "add remove reset query_doc_before", (function() {
                    var e;
                    null === (e = x.current) || void 0 === e || e.forceUpdate()
                })), d.default.supportsFeature(d.default.F.MD_BACKEND) && n.endOfHistoryTransferType === r.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY && (t = (0, m.jsx)(s.default, {
                    icon: (0, m.jsx)(f.default, {
                        name: "content-chat"
                    }),
                    theme: "list",
                    secondary: u.default.t(737),
                    children: u.default.t(738)
                }));
                return (0, m.jsxs)(m.Fragment, {
                    children: [(0, m.jsx)(c.default, (0, i.default)({
                        ref: x,
                        msgsCollection: a,
                        queryCollection: function(e, t) {
                            g((function() {
                                a.queryDocs(n, t)
                            }))
                        },
                        hasBefore: a.hasDocBefore,
                        queryBefore: a.queryDocBefore,
                        emptyText: u.default.t(1388),
                        chat: n
                    }, v)), t]
                })
            };
            var i = n(a(81109)),
                l = n(a(6479)),
                o = a(67294),
                r = a(29656),
                s = n(a(54864)),
                d = n(a(38032)),
                u = n(a(45159)),
                c = n(a(78053)),
                f = n(a(7665)),
                h = a(8413),
                p = n(a(48311)),
                m = a(85893)
        },
        90675: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.chat,
                    a = e.groupMetadata,
                    n = e.onClick,
                    i = e.theme;
                return a ? (0, S.jsx)(b, {
                    groupMetadata: a,
                    onClick: n,
                    theme: i
                }) : (0, S.jsx)(M, {
                    chat: t,
                    onClick: n,
                    theme: i
                })
            }, t.BaseEphemeralSettingRow = E;
            var i = n(a(34575)),
                l = n(a(93913)),
                o = n(a(2205)),
                r = n(a(99842)),
                s = a(67294),
                d = a(84533),
                u = n(a(98350)),
                c = n(a(65901)),
                f = n(a(86777)),
                h = n(a(81218)),
                p = n(a(66322)),
                m = a(62782),
                v = n(a(45159)),
                g = a(12231),
                x = n(a(61897)),
                C = n(a(7665)),
                _ = a(22552),
                S = a(85893);
            var j = function(e) {
                (0, o.default)(a, e);
                var t = (0, r.default)(a);

                function a() {
                    var e;
                    (0, i.default)(this, a);
                    for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(l)))._getEphemeralDuration = function() {
                        var t;
                        return null !== (t = e.props.chat.ephemeralDuration) && void 0 !== t ? t : 0
                    }, e._unblockContact = function() {
                        var t = e.props,
                            a = t.chat,
                            n = t.onClick;
                        a.contact.addPendingAction((0, d.unblockContact)(a.contact)).then((function() {
                            n(), c.default.closeModal()
                        })).catch((function() {}))
                    }, e._closeModal = function() {
                        c.default.closeModal()
                    }, e._openUnblockContactModal = function() {
                        c.default.openModal((0, S.jsx)(f.default, {
                            onOK: e._unblockContact,
                            okText: v.default.t(1733),
                            onCancel: e._closeModal,
                            cancelText: v.default.t(1938),
                            children: e._getEphemeralDuration() ? v.default.t(885) : v.default.t(886)
                        }))
                    }, e._handleClick = function() {
                        var t = e.props,
                            a = t.chat,
                            n = t.onClick;
                        a.contact.isContactBlocked ? e._openUnblockContactModal() : n()
                    }, e
                }
                return (0, l.default)(a, [{
                    key: "render",
                    value: function() {
                        return (0, S.jsx)(E, {
                            ephemeralDuration: this._getEphemeralDuration(),
                            canChange: !0,
                            onClick: this._handleClick,
                            theme: this.props.theme
                        })
                    }
                }]), a
            }(s.PureComponent);
            j.CONCERNS = {
                chat: ["contact", "ephemeralDuration"]
            }, j.displayName = "ContactEphemeralSettingRow";
            var M = (0, x.default)(j, j.CONCERNS),
                y = function(e) {
                    (0, o.default)(a, e);
                    var t = (0, r.default)(a);

                    function a() {
                        var e;
                        (0, i.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l)))._closeModal = function() {
                            c.default.closeModal()
                        }, e._openNonAdminModal = function() {
                            c.default.openModal((0, S.jsx)(f.default, {
                                onOK: e._closeModal,
                                okText: v.default.t(2125),
                                children: v.default.t(827)
                            }))
                        }, e._handleClick = function() {
                            var t = e.props,
                                a = t.onClick;
                            t.groupMetadata.canSetEphemeralSetting() ? a() : e._openNonAdminModal()
                        }, e
                    }
                    return (0, l.default)(a, [{
                        key: "render",
                        value: function() {
                            var e, t = this.props.groupMetadata;
                            return (0, S.jsx)(E, {
                                ephemeralDuration: null !== (e = t.ephemeralDuration) && void 0 !== e ? e : 0,
                                canChange: t.canSetEphemeralSetting(),
                                onClick: this._handleClick,
                                theme: this.props.theme
                            })
                        }
                    }]), a
                }(s.PureComponent);
            y.CONCERNS = {
                groupMetadata: ["ephemeralDuration", "participants"]
            }, y.displayName = "GroupEphemeralSettingRow";
            var b = (0, x.default)(y, y.CONCERNS);

            function E(e) {
                var t, a = e.ephemeralDuration,
                    n = e.canChange,
                    i = e.onClick;
                t = a > 0 ? n ? (0, g.isEphemeral24HDurationEnabled)() ? (0, m.getDisappearingMessageDurationString)(a) : v.default.t(880) : (0, m.getDisappearingMessageExplanationString)(a) : v.default.t(879);
                var l = (0, S.jsx)(C.default, {
                    className: n ? p.default.chevronIcon : p.default.ephemeralIcon,
                    name: n ? "chevron-right-alt" : "disappearing",
                    directional: !0
                });
                return "new-chat-info" === e.theme ? (0, S.jsxs)(u.default, {
                    side: "chevron",
                    icon: "disappearing",
                    onClick: i,
                    multiline: !0,
                    children: [(0, S.jsx)(_.TextSpan, {
                        theme: "title",
                        children: v.default.t(1009)
                    }), (0, S.jsx)(_.TextDiv, {
                        theme: "muted",
                        children: t
                    })]
                }) : (0, S.jsxs)(h.default, {
                    onClick: i,
                    side: l,
                    multiline: !0,
                    children: [(0, S.jsx)("div", {
                        className: p.default.header,
                        children: (0, S.jsx)(_.TextSpan, {
                            theme: "title",
                            children: v.default.t(1009)
                        })
                    }), (0, S.jsx)(_.TextDiv, {
                        theme: "muted",
                        children: t
                    })]
                })
            }
        },
        94836: (e, t, a) => {
            "use strict";
            var n = a(52108).default,
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a = e.linkMsgs,
                    i = e.chat,
                    _ = e.selectedMessages,
                    S = e.selectable,
                    j = e.onMessageSelect,
                    M = (0, x.default)(),
                    y = (0, r.useRef)(null);
                (0, g.useListener)(a, "add remove reset", (function() {
                    var e;
                    null === (e = y.current) || void 0 === e || e.forceUpdate()
                })), (0, g.useListener)(a, "query_doc_before", (function() {
                    var e;
                    null === (e = y.current) || void 0 === e || e.forceUpdate()
                })), (0, g.useListener)(i.msgs, "add bulk_add", (function(e) {
                    if (e) {
                        var t = [],
                            i = Array.isArray(e) ? e : [e];
                        n.all(i.map((function(e) {
                            return e.getLinks().length && t.push(e), n.resolve()
                        }))).then((function() {
                            t.length && a.add(t)
                        }))
                    }
                })), c.default.supportsFeature(c.default.F.MD_BACKEND) && i.endOfHistoryTransferType === s.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY && (t = (0, C.jsx)(u.default, {
                    icon: (0, C.jsx)(v.default, {
                        name: "content-chat"
                    }),
                    theme: "list",
                    secondary: f.default.t(737),
                    children: f.default.t(740)
                }));
                e.linkMsgs, e.chat;
                var b = (0, o.default)(e, ["linkMsgs", "chat"]);
                return (0, C.jsxs)(C.Fragment, {
                    children: [(0, C.jsx)(p.default, (0, l.default)({
                        ref: y,
                        msgsCollection: a,
                        queryCollection: function(e, t) {
                            M((function() {
                                a.queryLinks(i, t)
                            }))
                        },
                        hasBefore: a.hasLinkBefore,
                        queryBefore: a.queryLinkBefore,
                        renderElements: function(e) {
                            var t = [];
                            return a.forEach((function(a) {
                                var n = !a.isSentByMe && a.isGroupMsg;
                                a.getGalleryLinks().forEach((function(i, l) {
                                    i.href !== a.matchedText && t.push((0, C.jsx)(h.default, {
                                        msg: a.safe(),
                                        link: i,
                                        displayAuthor: n,
                                        selectable: S,
                                        selectedMessages: _,
                                        onMessageSelect: j,
                                        onClickMsg: e
                                    }, `${a.id.toString()}-${l}`))
                                })), a.linkPreview && t.push((0, C.jsx)(m.default, {
                                    msg: a,
                                    selectable: S,
                                    selectedMessages: _,
                                    onMessageSelect: j,
                                    displayType: d.default.DISP_TYPE.GALLERY,
                                    onClickMsg: e
                                }, a.id.toString()))
                            })), t.reverse(), t
                        },
                        emptyText: f.default.t(1390),
                        chat: i
                    }, b)), t]
                })
            };
            var l = i(a(81109)),
                o = i(a(6479)),
                r = a(67294),
                s = a(29656),
                d = i(a(94253)),
                u = i(a(54864)),
                c = i(a(38032)),
                f = i(a(45159)),
                h = i(a(76992)),
                p = i(a(78053)),
                m = i(a(79402)),
                v = i(a(7665)),
                g = a(8413),
                x = i(a(48311)),
                C = a(85893)
        },
        76992: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(59713)),
                l = n(a(34575)),
                o = n(a(93913)),
                r = n(a(2205)),
                s = n(a(99842)),
                d = n(a(94184)),
                u = a(67294),
                c = n(a(16625)),
                f = a(32881),
                h = n(a(94253)),
                p = n(a(73008)),
                m = n(a(61652)),
                v = n(a(45159)),
                g = n(a(8767)),
                x = n(a(85583)),
                C = n(a(63641)),
                _ = n(a(36821)),
                S = n(a(61897)),
                j = n(a(52328)),
                M = n(a(60806)),
                y = a(43026),
                b = a(85893),
                E = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, s.default)(a);

                    function a(e) {
                        var n;
                        (0, l.default)(this, a), (n = t.call(this, e)).mouseOver = function() {
                            n.state.hover || n.setState({
                                hover: !0
                            })
                        }, n.mouseEnter = function() {
                            n.state.hover || n.setState({
                                hover: !0
                            })
                        }, n.mouseLeave = function() {
                            n.state.hover && n.setState({
                                hover: !1
                            })
                        }, n.handleSelectChange = function(e) {
                            n.state.selected !== e && n.setState({
                                selected: e
                            })
                        }, n.handleSelectClick = function(e) {
                            e && e.stopPropagation(), n.props.onMessageSelect(n.props.msg.unsafe(), !n.state.selected)
                        }, n.handleClick = function() {
                            n.props.onClickMsg(n.props.msg.unsafe(), !n.state.selected)
                        };
                        var i = e.msg,
                            o = e.selectedMessages;
                        return n.state = {
                            hover: !1,
                            selected: o.isSelected(i.unsafe())
                        }, n
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.listeners.add(this.props.selectedMessages, this.props.msg.id.toString(), this.handleSelectChange)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.msg,
                                n = t.link,
                                l = t.displayAuthor,
                                o = this.props.selectable || this.state.hover ? (0, b.jsx)(_.default, {
                                    checked: this.state.selected,
                                    onClick: this.handleSelectClick,
                                    msgTheme: "gallery"
                                }) : null,
                                r = (0, f.Conversation)({
                                    mentions: a.mentionMap(),
                                    links: a.getLinks(),
                                    selectable: true,
                                    trusted: a.isTrusted()
                                }),
                                s = a.body && a.body.includes(n.url) ? a.body : a.caption,
                                u = l ? (0, b.jsx)("div", {
                                    className: g.default.author,
                                    children: (0, b.jsx)(c.default, {
                                        msg: a,
                                        contact: a.senderObj
                                    })
                                }) : null,
                                C = a.getSuspiciousLinks().length > 0;
                            return (0, b.jsx)(m.default, {
                                hover: this.state.hover,
                                onClick: this.handleClick,
                                onMouseEnter: this.state.hover ? null : this.mouseEnter,
                                onMouseOver: this.state.hover ? null : this.mouseOver,
                                onMouseLeave: this.state.hover ? this.mouseLeave : null,
                                children: (0, b.jsxs)("div", {
                                    className: g.default.msg,
                                    children: [(0, b.jsx)(M.default, {
                                        transitionName: "delay-leave",
                                        children: o
                                    }), (0, b.jsx)(y.MessageContainer, {
                                        isSentByMe: a.isSentByMe,
                                        children: (0, b.jsxs)("div", {
                                            className: (0, d.default)(g.default.bubble, (e = {}, (0, i.default)(e, g.default.hasAuthor, l), (0, i.default)(e, g.default.hasSuspiciousLinks, C), e)),
                                            children: [u, (0, b.jsx)(j.default, {
                                                link: n,
                                                displayType: h.default.DISP_TYPE.GALLERY
                                            }), (0, b.jsx)(x.default, {
                                                title: n.url,
                                                isSentByMe: a.isSentByMe,
                                                canonicalUrl: n.domain,
                                                displayType: h.default.DISP_TYPE.GALLERY,
                                                star: a.star
                                            }), (0, b.jsx)(p.default, {
                                                text: s,
                                                selectable: true,
                                                className: g.default.text,
                                                dirMismatch: a.rtl !== v.default.isRTL(),
                                                direction: a.dir,
                                                formatters: r
                                            })]
                                        })
                                    })]
                                })
                            })
                        }
                    }]), a
                }(u.Component);
            E.CONCERNS = {
                msg: ["body", "caption", "dir", "id", "isSentByMe", "mediaData", "type", "rtl", "senderObj", "star", "mediaData", "asRevoked"]
            }, E.displayName = "LinkMsg";
            var T = (0, C.default)((0, S.default)(E, E.CONCERNS));
            t.default = T
        },
        19548: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.fullCollection,
                    a = e.selectedMessages,
                    n = e.mediaMsgs,
                    i = e.selectable,
                    x = e.onMessageSelect,
                    I = e.theme,
                    w = (0, M.default)(e.chat, ["linkCount", "docCount", "productCount", "endOfHistoryTransferType"]),
                    N = (0, S.default)(),
                    k = (0, b.default)();
                (0, j.useListener)(n, "add query_media_before", (function() {
                    N()
                })), (0, j.useListener)(n, "remove", (function(e) {
                    a && a.isSelected(e) && a.setVal(e, !1), N()
                })), (0, j.useListener)(n, "reset", (function() {
                    a && a.unsetAll(), N()
                }));
                var P, A = function(e, t, a, n, i, r) {
                        var s = null,
                            u = o.default.reverse(e).filter(T).slice(0, t ? e.length : 6);
                        return o.default.flatMap(u, (function(e, u) {
                            var c = !t && u >= 3 && u <= 5 ? "hideableSecondRow" : void 0,
                                f = (0, E.jsx)(p.default, {
                                    className: r ? m.default.roundedThumb : "",
                                    aspectRatio: r ? 1.1 : 1,
                                    msg: e,
                                    hoverEvent: t,
                                    selectable: a,
                                    selectedMessages: n,
                                    onMessageSelect: i,
                                    theme: c
                                }, e.id.toString());
                            if (!t) return [f];
                            var h = d.default.monthStr(e.t);
                            if (h !== s) {
                                s = h;
                                var x = (0, E.jsx)(v.default, {
                                    children: h
                                }, `header-${e.t}`);
                                return [].concat((0, l.default)(o.default.times(6, (function(t) {
                                    return (0, E.jsx)(g.EmptyCanvas, {}, `padding-${e.t}-${t}`)
                                }))), [x, f])
                            }
                            return [f]
                        }))
                    }(n.toArray(), t, i, a, x, "new-chat-info" === I),
                    O = function(e) {
                        n.hasMediaBefore && k((function() {
                            n.queryMedia({
                                chat: (0, C.unproxy)(w),
                                msg: e
                            })
                        }))
                    },
                    R = (0, y.default)((function(e) {
                        n.hasMediaBefore && e.scrollTop + u.default.SCROLL_FUDGE > e.scrollHeight - e.clientHeight && O(n.head())
                    }), 100);
                if ((0, r.useEffect)((function() {
                        n.hasMediaBefore && O()
                    }), []), f.default.supportsFeature(f.default.F.MD_BACKEND) && w.endOfHistoryTransferType === s.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY) {
                    var D;
                    t ? D = h.default.t(741) : 0 === n.length && 0 === w.docCount && 0 === w.linkCount && 0 === w.productCount && (D = h.default.t(739)), P = "new-chat-info" === I ? (0, E.jsx)(c.default, {
                        theme: "new-chat-info",
                        secondary: h.default.t(737),
                        children: D
                    }) : (0, E.jsx)(c.default, {
                        icon: (0, E.jsx)(_.default, {
                            name: "content-chat"
                        }),
                        theme: "list",
                        secondary: h.default.t(737),
                        children: D
                    })
                }
                return (0, E.jsxs)(E.Fragment, {
                    children: [(0, E.jsx)(g.default, {
                        medias: A,
                        mediaCollection: n,
                        fullCollection: t,
                        chat: (0, C.unproxy)(w),
                        onScroll: function(e) {
                            R(e.currentTarget)
                        },
                        theme: I
                    }), P]
                })
            };
            var l = i(a(319)),
                o = i(a(96486)),
                r = a(67294),
                s = a(29656),
                d = i(a(10399)),
                u = i(a(94253)),
                c = i(a(54864)),
                f = i(a(38032)),
                h = i(a(45159)),
                p = i(a(41135)),
                m = i(a(87917)),
                v = i(a(63330)),
                g = n(a(44659)),
                x = a(69371),
                C = a(68220),
                _ = i(a(7665)),
                S = i(a(57811)),
                j = a(8413),
                M = i(a(69283)),
                y = i(a(15663)),
                b = i(a(48311)),
                E = a(85893);

            function T(e) {
                return !f.default.supportsFeature(f.default.F.MD_BACKEND) || (0, x.hasThumbnail)(e.mediaData)
            }
        },
        41135: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(34575)),
                l = n(a(93913)),
                o = n(a(2205)),
                r = n(a(99842)),
                s = n(a(94184)),
                d = a(67294),
                u = n(a(65901)),
                c = n(a(63641)),
                f = n(a(72397)),
                h = n(a(41965)),
                p = n(a(69371)),
                m = a(41655),
                v = a(68220),
                g = a(85893),
                x = function(e) {
                    (0, o.default)(a, e);
                    var t = (0, r.default)(a);

                    function a() {
                        var e;
                        (0, i.default)(this, a), (e = t.apply(this, arguments)).setRefImg = function(t) {
                            e.img = t
                        }, e._handleSelectChange = function(t) {
                            e.state.selected !== t && e.setState({
                                selected: t
                            })
                        }, e.handleClick = function(t) {
                            var a = e.props,
                                n = a.msg,
                                i = a.selectable,
                                l = a.onMessageSelect,
                                o = n.mediaData;
                            if (i && l) l(n, !e.state.selected);
                            else if (o.mediaStage !== m.MEDIA_DATA_STAGE.ERROR_MISSING) {
                                var r;
                                t && t.stopPropagation();
                                var s = n.id;
                                if (o.isGif || o.type === f.default.TYPE.IMAGE) {
                                    var d = e.img;
                                    r = function(e) {
                                        return s.equals(e) && d ? d : null
                                    }
                                }
                                u.default.mediaViewerModal({
                                    msg: (0, v.unproxy)(n),
                                    getZoomNode: r
                                })
                            } else u.default.openModal((0, g.jsx)(h.default, {
                                msg: n
                            }))
                        }, e.handleDragStart = function(t) {
                            t.nativeEvent.dataTransfer.setData("text/uri-list", e.props.msg.mediaData.renderableUrl)
                        };
                        var n = e.props,
                            l = n.msg,
                            o = n.selectedMessages;
                        return e.state = {
                            selected: !(!o || !o.isSelected(l))
                        }, e
                    }
                    return (0, l.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.selectedMessages && this.props.listeners.add(this.props.selectedMessages, this.props.msg.id.toString(), this._handleSelectChange)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.msg,
                                a = e.hoverEvent,
                                n = e.selectable,
                                i = e.onMessageSelect,
                                l = e.theme,
                                o = e.className,
                                r = t.mediaData,
                                d = r.type === f.default.TYPE.IMAGE && r.renderableUrl ? this.handleDragStart : null,
                                u = (0, s.default)(o);
                            return (0, g.jsx)(p.default, {
                                classes: u,
                                onClick: this.handleClick,
                                hoverEvent: a,
                                selectable: n,
                                selected: this.state.selected,
                                onMessageSelect: i,
                                onDragStart: d,
                                msg: t,
                                theme: l,
                                imgRef: this.setRefImg,
                                aspectRatio: this.props.aspectRatio
                            })
                        }
                    }]), a
                }(d.Component);
            x.displayName = "MediaCanvas";
            var C = (0, c.default)(x);
            t.default = C
        },
        63330: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, l.jsx)("div", {
                    className: i.default.container,
                    children: e.children
                })
            };
            var i = n(a(45494)),
                l = a(85893)
        },
        69371: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hasThumbnail = w, t.default = t.MediaThumb = void 0;
            var i = n(a(59713)),
                l = n(a(34575)),
                o = n(a(93913)),
                r = n(a(2205)),
                s = n(a(99842)),
                d = n(a(94184)),
                u = a(67294),
                c = n(a(22630)),
                f = a(98169),
                h = n(a(63641)),
                p = n(a(66739)),
                m = n(a(72397)),
                v = n(a(10095)),
                g = n(a(32922)),
                x = n(a(39981)),
                C = n(a(66768)),
                _ = a(41655),
                S = n(a(47251)),
                j = n(a(50507)),
                M = n(a(7665)),
                y = n(a(36450)),
                b = n(a(16835)),
                E = n(a(84555)),
                T = a(85893),
                I = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, s.default)(a);

                    function a() {
                        var e;
                        (0, l.default)(this, a);
                        for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i))).state = {
                            hover: !1,
                            tooltip: null
                        }, e._setRefImg = function(t) {
                            e._img = t
                        }, e._setRefContainer = function(t) {
                            e._container = t
                        }, e._handleSelectClick = function() {
                            e.props.onMessageSelect && e.props.onMessageSelect(e.props.msg, !e.props.selected)
                        }, e._handleMouseOver = function() {
                            e.state.hover || e.setState({
                                hover: !0
                            })
                        }, e._handleMouseEnter = function(t) {
                            e.state.hover || (t.persist(), e.setState({
                                hover: !0
                            }, (function() {
                                return e._startTooltipTimer(t.target)
                            })))
                        }, e._handleMouseLeave = function() {
                            e.state.hover && (null != e._tooltipTimer && e.props.clearTimeout(e._tooltipTimer), e.setState({
                                hover: !1,
                                tooltip: null
                            }))
                        }, e.maybeDownloadMediaMD = function() {
                            var t = e.props.msg;
                            t.mediaData.preview || t.mediaData.fullPreviewData || t.mediaData.type !== m.default.TYPE.IMAGE && t.mediaData.type !== m.default.TYPE.VIDEO || t.downloadMedia({
                                downloadEvenIfExpensive: !1,
                                isUserInitiated: !1,
                                rmrReason: j.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER
                            })
                        }, e._renderImgNode = function(t, a, n, i) {
                            var l = n ? (0, T.jsx)("div", {
                                    className: v.default.shade
                                }) : null,
                                o = a ? {
                                    backgroundImage: `url(${a})`
                                } : null;
                            return (0, T.jsxs)("div", {
                                className: t,
                                style: o,
                                onClick: e.props.onClick,
                                ref: e._setRefImg,
                                onDragStart: e.props.onDragStart,
                                draggable: null != e.props.onDragStart || null,
                                children: [i, l]
                            })
                        }, e._downloadMedia = function() {
                            e.props.msg.downloadMedia({
                                downloadEvenIfExpensive: !1,
                                isUserInitiated: !1,
                                rmrReason: j.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER
                            })
                        }, e._dismissTooltip = function() {
                            e.setState({
                                tooltip: null
                            })
                        }, e._renderImg = function() {
                            var t, a = e.props,
                                n = a.msg.mediaData,
                                i = a.preferPreview;
                            switch (n.type) {
                                case m.default.TYPE.AUDIO:
                                    return e._renderImgNode(`${v.default.mediaCanvas} attach-media-audio-thumb`);
                                case m.default.TYPE.VIDEO:
                                    var l = (0, d.default)(v.default.mediaCanvas, {
                                            "media-video-thumb": n.isGif && !n.preview
                                        }),
                                        o = null === (t = n.preview) || void 0 === t ? void 0 : t.url();
                                    return e._renderImgNode(l, o, !0);
                                case m.default.TYPE.IMAGE:
                                    var r = function(t) {
                                            var a, i = null != t ? (0, T.jsx)("div", {
                                                className: v.default.mediaCanvas,
                                                style: {
                                                    backgroundImage: `url(${t})`
                                                }
                                            }) : null;
                                            return e._renderImgNode(v.default.mediaCanvas, null === (a = n.preview) || void 0 === a ? void 0 : a.url(), e.props.msg.star, i)
                                        },
                                        s = function() {
                                            return n.preview ? r(null) : e._renderImgNode(v.default.mediaCanvas, null, e.props.msg.star)
                                        };
                                    return i ? s() : (0, T.jsx)("div", {
                                        className: v.default.mediaCanvas,
                                        children: (0, T.jsx)(S.default, {
                                            mediaData: n,
                                            placeholderRenderer: s,
                                            renderProgressively: !0,
                                            downloadMedia: e._downloadMedia,
                                            children: r
                                        })
                                    });
                                default:
                                    return e._renderImgNode(null, null, e.props.msg.star)
                            }
                        }, e
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.props.listeners.add(this.props.msg.mediaData, "change:preview", (function() {
                                e.forceUpdate()
                            })), this.props.listeners.add(this.props.msg, "change:star", (function() {
                                e.forceUpdate()
                            })), this.props.imgRef && this.props.imgRef(this._img), this.props.containerRef && this.props.containerRef(this._container), this.maybeDownloadMediaMD(), this.props.listeners.add(this.props.msg.mediaData, "change:mediaStage", (function() {
                                e.props.msg.mediaData.mediaStage === _.MEDIA_DATA_STAGE.RESOLVED && e.forceUpdate()
                            }))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.props.imgRef && this.props.imgRef(this._img), this.props.containerRef && this.props.containerRef(this._container)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.props.imgRef && this.props.imgRef(null), this.props.containerRef && this.props.containerRef(null)
                        }
                    }, {
                        key: "_getTooltip",
                        value: function(e) {
                            if (!(this._shouldShowTooltip() && e instanceof HTMLElement)) return null;
                            var t = e.offsetWidth;
                            return {
                                menu: (0, T.jsx)(C.default, {
                                    msg: this.props.msg
                                }),
                                anchor: e,
                                dirY: f.DirY.TOP,
                                dirX: f.DirX.CENTER,
                                offsetX: this.props.active ? .5 * -t * .13 : 0,
                                type: f.MenuType.tooltip
                            }
                        }
                    }, {
                        key: "_startTooltipTimer",
                        value: function(e) {
                            var t = this;
                            null != this._tooltipTimer && this.props.clearTimeout(this._tooltipTimer), this._tooltipTimer = this.props.setTimeout((function() {
                                t._tooltipTimer = null, t._showTooltip(e)
                            }), 500)
                        }
                    }, {
                        key: "_showTooltip",
                        value: function(e) {
                            this.setState({
                                tooltip: this._getTooltip(e)
                            })
                        }
                    }, {
                        key: "_shouldShowTooltip",
                        value: function() {
                            return !!this.props.showTooltip && "viewerFlowTransparent" !== this.props.theme
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a, n = this.props,
                                l = n.msg,
                                o = n.selectable,
                                r = n.theme,
                                s = n.active,
                                u = this.props.selected || !1;
                            (o || this.state.hover && this.props.hoverEvent) && (a = (0, T.jsxs)("div", {
                                className: v.default.mediaSelect,
                                children: [(0, T.jsx)("div", {
                                    className: v.default.shadeTop,
                                    onClick: this.props.onClick
                                }), (0, T.jsx)(c.default, {
                                    onChange: this._handleSelectClick,
                                    hover: this.state.hover,
                                    checked: u
                                })]
                            }));
                            var f = (0, d.default)(this.props.classes, v.default.canvasComponent, (e = {}, (0, i.default)(e, v.default.canvasSelected, u), (0, i.default)(e, v.default.canvasSecondRow, "hideableSecondRow" === r), (0, i.default)(e, v.default.viewerFlow, "viewerFlow" === r || "viewerFlowTransparent" === r), (0, i.default)(e, v.default.viewerFlowTransparent, "viewerFlowTransparent" === r), (0, i.default)(e, v.default.active, s), e)),
                                h = l.star ? (0, T.jsx)("div", {
                                    className: v.default.iconStar,
                                    children: (0, T.jsx)(M.default, {
                                        name: "star"
                                    })
                                }) : null,
                                p = w(l.mediaData),
                                m = this.state.tooltip ? (0, T.jsx)(b.default, {
                                    displayName: "MediaThumbTitle",
                                    popable: !0,
                                    escapable: !0,
                                    requestDismiss: this._dismissTooltip,
                                    requestRecentFocusOnUnmount: !1,
                                    children: (0, T.jsx)(E.default, {
                                        tooltip: this.state.tooltip
                                    })
                                }) : null,
                                C = {
                                    paddingTop: 1 / (null !== (t = this.props.aspectRatio) && void 0 !== t ? t : 1) * 100 + "%"
                                };
                            return p ? (0, T.jsxs)("div", {
                                ref: this._setRefContainer,
                                className: f,
                                onMouseOver: this._handleMouseOver,
                                onMouseEnter: this._handleMouseEnter,
                                onMouseLeave: this._handleMouseLeave,
                                children: [a, (0, T.jsxs)("div", {
                                    className: v.default.canvasBody,
                                    children: [(0, T.jsx)(x.default, {
                                        mediaData: l.mediaData
                                    }), (0, T.jsx)(g.default, {
                                        mediaData: l.mediaData,
                                        selected: u
                                    }), h]
                                }), this._renderImg(), m, (0, T.jsx)("div", {
                                    style: C
                                })]
                            }) : null
                        }
                    }]), a
                }(u.Component);

            function w(e) {
                switch (e.type) {
                    case m.default.TYPE.VIDEO:
                    case m.default.TYPE.IMAGE:
                        if (e.preview || e.fullPreviewData || e.mediaStage === _.MEDIA_DATA_STAGE.RESOLVED) return !0;
                        if (p.default.has(e.filehash)) {
                            try {
                                p.default.getOrCreateURL(e.filehash)
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
            t.MediaThumb = I, I.displayName = "MediaThumb";
            var N = (0, y.default)((0, h.default)(I));
            t.default = N
        },
        32922: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.selected,
                    a = e.mediaData;
                switch (a.type) {
                    case r.default.TYPE.AUDIO:
                        return (0, d.jsx)(u, {
                            duration: a.duration,
                            selected: t
                        });
                    case r.default.TYPE.VIDEO:
                        return a.isGif ? null : (0, d.jsx)(u, {
                            duration: a.duration,
                            selected: t
                        });
                    default:
                        return null
                }
            };
            var i = n(a(59713)),
                l = n(a(94184)),
                o = n(a(10399)),
                r = n(a(72397)),
                s = n(a(73148)),
                d = a(85893);

            function u(e) {
                var t = e.duration,
                    a = e.selected,
                    n = o.default.durationStr(t);
                return n ? (0, d.jsx)("span", {
                    className: (0, l.default)(s.default.container, (0, i.default)({}, s.default.selected, a)),
                    children: n
                }) : null
            }
        },
        39981: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.mediaData;
                if (!t) return null;
                var a = function(e) {
                    switch (e.type) {
                        case i.default.TYPE.AUDIO:
                            return "msg-audio";
                        case i.default.TYPE.VIDEO:
                            return e.isGif ? "msg-gif" : "msg-video";
                        default:
                            return null
                    }
                }(t);
                return null == a ? null : (0, r.jsx)("div", {
                    className: l.default.iconType,
                    children: (0, r.jsx)(o.default, {
                        name: a
                    })
                })
            };
            var i = n(a(72397)),
                l = n(a(87114)),
                o = n(a(7665)),
                r = a(85893)
        },
        66768: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.msg.senderObj.formattedShortName;
                return (0, i.jsx)(n.TextSpan, {
                    children: t
                })
            };
            var n = a(22552),
                i = a(85893)
        },
        78053: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(67294),
                l = n(a(65901)),
                o = n(a(94253)),
                r = a(75993),
                s = n(a(5029)),
                d = n(a(68198)),
                u = n(a(79402)),
                c = a(68220),
                f = n(a(57811)),
                h = n(a(15663)),
                p = a(85893);

            function m(e, t) {
                var a = e.queryBefore,
                    n = e.hasBefore,
                    m = e.msgsCollection,
                    v = e.emptyText,
                    g = e.scrollOffset,
                    x = void 0 === g ? 0 : g,
                    C = e.selectable,
                    _ = e.onMessageSelect,
                    S = e.queryCollection,
                    j = e.selectedMessages,
                    M = e.renderElements,
                    y = e.onProductDetail,
                    b = e.setScrollOffset,
                    E = (0, f.default)();
                (0, i.useImperativeHandle)(t, (function() {
                    return {
                        forceUpdate: E
                    }
                }));
                var T = (0, i.useRef)(null),
                    I = function(e) {
                        n && S(e)
                    },
                    w = (0, h.default)((function(e) {
                        var t = e.scrollHeight - e.clientHeight - e.scrollTop < o.default.SCROLL_FUDGE;
                        n && t && I(m.head()), b && b(e.scrollTop)
                    }), 100);
                (0, i.useEffect)((function() {
                    n && I();
                    var e = T.current;
                    return e && (e.scrollTop = x),
                        function() {
                            w.cancel()
                        }
                }), []);
                var N = function(e, t) {
                        var a = (0, c.unproxy)(e);
                        C && void 0 !== t ? _(a, t) : l.default.openChatAt(a.chat, a.chat.getSearchContext(a))
                    },
                    k = M ? M(N) : m.map((function(e, t) {
                        return (0, p.jsx)(u.default, {
                            msg: e,
                            selectable: C,
                            selectedMessages: j,
                            onMessageSelect: _,
                            displayType: o.default.DISP_TYPE.GALLERY,
                            onClickMsg: N,
                            onProductClick: y
                        }, `${e.id.toString()}_${t}`)
                    })).reverse();
                if (a) {
                    if (0 === k.length) return (0, p.jsx)(r.Loading, {});
                    k.push((0, p.jsx)(s.default, {}))
                }
                return 0 !== m.length || a || n ? (0, p.jsx)("div", {
                    ref: T,
                    onScroll: function(e) {
                        w(e.target)
                    },
                    className: d.default.wrapper,
                    children: k
                }) : (0, p.jsx)(r.Empty, {
                    text: v,
                    a8nText: "no-elements"
                })
            }
            var v = (0, i.forwardRef)(m);
            t.default = v
        },
        59603: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, v.default)(e.chat, ["isGroup", "muteExpiration", "archive"]),
                    a = (0, v.default)(e.mute, ["isMuted"]),
                    n = (0, v.default)(e.settings, ["showArchiveV2"]),
                    x = function(e) {
                        s.default.muteChat((0, h.unproxy)(t), e)
                    },
                    C = function() {
                        x(!1), s.default.closeModal()
                    },
                    _ = a.isMuted,
                    S = t.muteExpiration;
                if (t.archive && (0, c.archiveV2Supported)() && n.showArchiveV2) return (0, g.jsx)(u.default, {
                    children: (0, g.jsx)(m.TextSpan, {
                        theme: "muted",
                        size: "16",
                        children: f.default.t(265)
                    })
                });
                var j, M = _ ? function() {
                        var e = t.isGroup ? f.default.t(717) : f.default.t(714);
                        s.default.openModal((0, g.jsx)(d.default, {
                            onOK: C,
                            okText: f.default.t(110),
                            onCancel: function() {
                                return s.default.closeModal()
                            },
                            cancelText: f.default.t(1938),
                            children: e
                        }))
                    } : function() {
                        x(!0)
                    },
                    y = (0, g.jsx)(o.default, {
                        checked: _,
                        onChange: M
                    }),
                    b = _ ? f.default.t(1947) : f.default.t(2106),
                    E = "new-chat-info" === e.theme;
                if (_ && S) {
                    var T = r.default.untilStr(S);
                    j = (0, g.jsx)(m.TextDiv, {
                        theme: "muted",
                        children: T
                    })
                }
                if (E) {
                    var I = (0, g.jsx)(p.default, {
                        checked: _,
                        onChange: M
                    });
                    return (0, g.jsxs)(l.default, {
                        icon: "settings-notifications",
                        a8nText: i.default.key("block-mute"),
                        side: I,
                        onClick: M,
                        multiline: !(!_ || !S),
                        children: [(0, g.jsx)(m.TextSpan, {
                            theme: "title",
                            children: b
                        }), j]
                    })
                }
                return (0, g.jsxs)(u.default, {
                    a8nText: i.default.key("block-mute"),
                    side: y,
                    onClick: M,
                    multiline: !(!_ || !S),
                    children: [(0, g.jsx)(m.TextSpan, {
                        theme: "title",
                        children: b
                    }), j]
                })
            };
            var i = n(a(40501)),
                l = n(a(98350)),
                o = n(a(91404)),
                r = n(a(10399)),
                s = n(a(65901)),
                d = n(a(86777)),
                u = n(a(81218)),
                c = a(2629),
                f = n(a(45159)),
                h = a(68220),
                p = n(a(83256)),
                m = a(22552),
                v = n(a(69283)),
                g = a(85893)
        },
        34310: (e, t, a) => {
            "use strict";
            var n = a(52108).default,
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.productMsgs,
                    a = e.chat,
                    i = (0, o.default)(e, ["productMsgs", "chat"]),
                    g = (0, r.useRef)(null);
                (0, p.useListener)(t, "add remove reset", (function() {
                    var e;
                    null === (e = g.current) || void 0 === e || e.forceUpdate()
                }));
                var x, C = (0, m.default)();
                u.default.supportsFeature(u.default.F.MD_BACKEND) && a.endOfHistoryTransferType === s.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY && (x = (0, v.jsx)(d.default, {
                    icon: (0, v.jsx)(h.default, {
                        name: "content-chat"
                    }),
                    theme: "list",
                    secondary: c.default.t(737),
                    children: c.default.t(743)
                }));
                return (0, v.jsxs)(v.Fragment, {
                    children: [(0, v.jsx)(f.default, (0, l.default)({
                        ref: g,
                        msgsCollection: t,
                        queryCollection: function(e) {
                            return C((function() {
                                t.queryProducts(a, e)
                            }))
                        },
                        hasBefore: t.hasProductBefore,
                        queryBefore: t.hasProductBefore ? n.resolve() : null,
                        emptyText: c.default.t(1394),
                        chat: a
                    }, i)), x]
                })
            };
            var l = i(a(81109)),
                o = i(a(6479)),
                r = a(67294),
                s = a(29656),
                d = i(a(54864)),
                u = i(a(38032)),
                c = i(a(45159)),
                f = i(a(78053)),
                h = i(a(7665)),
                p = a(8413),
                m = i(a(48311)),
                v = a(85893)
        },
        83256: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.checked,
                    a = e.onChange,
                    n = e.tabIndex,
                    c = e.id,
                    f = (0, l.useRef)(null),
                    h = (0, r.default)(),
                    p = (0, i.default)(h, 2),
                    m = p[0],
                    v = p[1],
                    g = (0, s.default)(f, m);
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)("input", {
                        ref: g,
                        className: (0, o.default)(u.hiddenInput),
                        checked: t,
                        onChange: function(e) {
                            e.stopPropagation();
                            var t = f.current;
                            null != t && t.focus(), a(e)
                        },
                        type: "checkbox",
                        tabIndex: null != n ? n : 0,
                        id: c
                    }), (0, d.jsxs)("div", {
                        className: (0, o.default)(u.container),
                        onClick: function() {
                            var e = f.current;
                            null != e && e.click()
                        },
                        tabIndex: -1,
                        "aria-hidden": "true",
                        "data-testid": "visual-switch",
                        children: [(0, d.jsx)("div", {
                            className: (0, o.default)(u.button, t && u.buttonChecked, v && u.buttonFocused)
                        }), (0, d.jsx)("div", {
                            className: (0, o.default)(u.track, t && u.trackChecked)
                        })]
                    })]
                })
            };
            var i = n(a(63038)),
                l = a(67294),
                o = n(a(56720)),
                r = n(a(80265)),
                s = n(a(38933)),
                d = a(85893),
                u = {
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
        16637: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = (0, l.useContext)(o.default).theme;
                return (0, l.useMemo)((function() {
                    return (0, i.default)((0, i.default)({}, "dark" === e ? s : r), d)
                }), [e])
            };
            var i = n(a(81109)),
                l = a(67294),
                o = n(a(63443)),
                r = {
                    "--c-text-primary-strong": "#000",
                    "--c-text-primary": "rgba(0, 0, 0, 0.87)",
                    "--c-text-secondary-lighter": "rgba(0, 0, 0, 0.45)",
                    "--c-text-medium-emphasis": "#627885",
                    "--c-icon-medium-emphasis": "#7e98a8",
                    "--c-icon-high-emphasis": "#00a884",
                    "--c-danger": "#d70000",
                    "--c-green": "#1fa855",
                    "--text-input-hover-background": "#e9edef",
                    "--switch-button-color": "#ececec",
                    "--switch-button-checked-color": "#018579",
                    "--switch-track-color": "#b2b2b2",
                    "--switch-track-checked-color": "#b2dbd7"
                },
                s = {
                    "--c-text-primary-strong": "#E6EEF2",
                    "--c-text-primary": "#E6EEF2",
                    "--c-text-secondary-lighter": "#7E98A8",
                    "--c-text-medium-emphasis": "#7E98A8",
                    "--c-icon-medium-emphasis": "#7E98A8",
                    "--c-icon-high-emphasis": "#00A884",
                    "--c-danger": "#f15c6d",
                    "--c-green": "#23cc63",
                    "--text-input-hover-background": "rgba(255, 255, 255, 0.3)",
                    "--switch-button-color": "#83929d",
                    "--switch-button-checked-color": "#01a581",
                    "--switch-track-color": "#334046",
                    "--switch-track-checked-color": "#0b463f"
                },
                d = {
                    "--text-title-color": "var(--c-text-primary-strong)",
                    "--text-section-title-color": "var(--c-text-secondary-lighter)",
                    "--cell-chat-title-color": "var(--c-text-primary-strong)",
                    "--cell-chat-secondary-color": "var(--c-text-secondary-lighter)",
                    "--svg-secondary-color": "var(--c-icon-medium-emphasis)",
                    "--primary-strong": "var(--c-text-primary-strong)",
                    "--primary": "var(--c-text-primary)",
                    "--teal": "var(--c-icon-high-emphasis)",
                    "--danger": "var(--c-danger)",
                    "--secondary": "var(--c-text-secondary-lighter)",
                    "--secondary-lighter": "var(--c-text-secondary-lighter)",
                    "--button-alternative": "var(--c-icon-high-emphasis)",
                    "--chat-marker-admin-border": "var(--c-green)",
                    "--chat-marker-admin": "var(--c-green)",
                    "--text-input-empty-value-placeholder": "var(--c-icon-high-emphasis)"
                }
        },
        79933: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(34575)),
                l = n(a(93913)),
                o = n(a(81506)),
                r = n(a(2205)),
                s = n(a(99842)),
                d = n(a(65901)),
                u = n(a(86777)),
                c = n(a(20050)),
                f = n(a(71562)),
                h = n(a(73008)),
                p = n(a(50177)),
                m = n(a(45159)),
                v = a(87547),
                g = a(85893),
                x = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, s.default)(a);

                    function a() {
                        var e;
                        (0, i.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), r = 0; r < n; r++) l[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(l))).contactFilter = function(t) {
                            var a = e.props.chat.groupMetadata;
                            return !!c.default.isFilteredContact(t) && (!(null == a ? void 0 : a.participants.get(t.id)) || m.default.t(251))
                        }, e.confirmAddParticipant = function(t) {
                            var a = e.onAddParticipant.bind((0, o.default)(e), t),
                                n = m.default.t(698, {
                                    participant: t.formattedName,
                                    subject: e.props.chat.contact.name
                                });
                            e.push((0, g.jsx)(u.default, {
                                onOK: a,
                                okText: m.default.t(240),
                                onCancel: e._pop,
                                cancelText: m.default.t(1938),
                                children: (0, g.jsx)(h.default, {
                                    text: n
                                })
                            }))
                        }, e.onAddParticipant = function(t) {
                            (0, v.addParticipants)(e.props.chat, [t]).catch((function() {})), d.default.closeModal()
                        }, e._pop = function() {
                            e.pop()
                        }, e
                    }
                    return (0, l.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, g.jsx)(f.default, {
                                title: m.default.t(240),
                                filter: this.contactFilter,
                                onCancel: this._pop,
                                onSelect: this.confirmAddParticipant
                            }))
                        }
                    }]), a
                }(p.default);
            t.default = x
        },
        47830: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = i(a(319)),
                o = i(a(34575)),
                r = i(a(93913)),
                s = i(a(81506)),
                d = i(a(2205)),
                u = i(a(99842)),
                c = a(63796),
                f = i(a(65901)),
                h = i(a(86777)),
                p = i(a(20050)),
                m = i(a(73008)),
                v = i(a(50177)),
                g = i(a(45159)),
                x = a(87547),
                C = n(a(64803)),
                _ = a(85893),
                S = function(e) {
                    (0, d.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(i)))._isGroupParticipant = function(t) {
                            var a;
                            return !!(null === (a = e.props.chat.groupMetadata) || void 0 === a ? void 0 : a.participants.get(t))
                        }, e.customSecondaryText = function(t) {
                            var a;
                            return (null === (a = e.props.chat.groupMetadata) || void 0 === a ? void 0 : a.participants.get(t)) ? g.default.t(251) : null
                        }, e.contactFilter = function(t) {
                            var a = e.props.chat.groupMetadata;
                            return !!p.default.isFilteredContact(t) && (!(null == a ? void 0 : a.participants.get(t.id)) || g.default.t(251))
                        }, e.confirmAddParticipant = function(t) {
                            var a = e.props.chat;
                            e.push((0, _.jsx)(h.default, {
                                onOK: e.onAddParticipant.bind((0, s.default)(e), t),
                                okText: g.default.t(240, {
                                    _plural: t.length
                                }),
                                onCancel: e._pop,
                                cancelText: g.default.t(1938),
                                children: (0, _.jsx)(m.default, {
                                    text: e._makeNameEnumeration(t, a.contact.name)
                                })
                            }))
                        }, e._makeNameEnumeration = function(e, t) {
                            var a = e.map((function(e) {
                                return e.formattedShortName || e.shortName
                            })).reduce((function(t, a, n) {
                                return [].concat((0, l.default)(t), [a, n !== e.length - 1 && g.default.t(826) || ""])
                            }), []);
                            return g.default.t(699, {
                                participants: a.join(""),
                                subject: t
                            })
                        }, e.onAddParticipant = function(t) {
                            (0, x.addParticipants)(e.props.chat, t).catch((function() {})), f.default.closeModal()
                        }, e._pop = function() {
                            e.pop()
                        }, e
                    }
                    return (0, r.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, _.jsx)(C.default, {
                                onConfirm: this.confirmAddParticipant,
                                filter: this.contactFilter,
                                title: g.default.t(240),
                                isDisabled: this._isGroupParticipant,
                                isSelected: this._isGroupParticipant,
                                customSecondaryText: this.customSecondaryText,
                                listType: C.ListType.PARTICIPANT_MANAGE_MODAL,
                                singleSelectionFooterType: c.FooterType.CONFIRM,
                                multipleSelectionFooterType: c.FooterType.CONFIRM
                            }))
                        }
                    }]), a
                }(v.default);
            t.default = S
        },
        95220: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(34575)),
                l = n(a(93913)),
                o = n(a(2205)),
                r = n(a(99842)),
                s = n(a(69237)),
                d = n(a(12494)),
                u = n(a(50177)),
                c = n(a(43463)),
                f = a(85893),
                h = function(e) {
                    (0, o.default)(a, e);
                    var t = (0, r.default)(a);

                    function a() {
                        var e;
                        (0, i.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l)))._showArchiveSettingsDrawer = function() {
                            e.push((0, f.jsx)(s.default, {
                                settings: c.default,
                                onClose: e._pop
                            }))
                        }, e._pop = function() {
                            e.pop()
                        }, e
                    }
                    return (0, l.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, f.jsx)(d.default, {
                                showSettings: this._showArchiveSettingsDrawer,
                                onClose: this._pop,
                                settings: c.default
                            }))
                        }
                    }]), a
                }(u.default);
            t.default = h
        },
        44250: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = i(a(81109)),
                o = i(a(34575)),
                r = i(a(93913)),
                s = i(a(2205)),
                d = i(a(99842)),
                u = i(a(45705)),
                c = i(a(25721)),
                f = i(a(87105)),
                h = i(a(65901)),
                p = i(a(44271)),
                m = i(a(5684)),
                v = i(a(28201)),
                g = a(73092),
                x = i(a(96706)),
                C = i(a(52353)),
                _ = i(a(50177)),
                S = a(2629),
                j = i(a(99337)),
                M = a(86785),
                y = i(a(11465)),
                b = a(53082),
                E = a(10951),
                T = n(a(36844)),
                I = i(a(50507)),
                w = a(49942),
                N = i(a(77429)),
                k = i(a(36685)),
                P = i(a(31322)),
                A = i(a(27043)),
                O = i(a(25422)),
                R = i(a(59862)),
                D = i(a(50673)),
                L = a(45323),
                F = a(58419),
                B = a(85893),
                G = function(e) {
                    (0, s.default)(a, e);
                    var t = (0, d.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l];
                        return (e = t.call.apply(t, [this].concat(i)))._scrollOffset = 0, e._setScrollOffset = function(t) {
                            e._scrollOffset = t
                        }, e.onProductDetail = function(t, a) {
                            var n = e.props.chat,
                                i = (0, B.jsx)(k.default, {
                                    chat: n,
                                    collectionId: a,
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
                            var a = (0, B.jsx)(P.default, {
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
                            e.push(a)
                        }, e.onCollectionSeeAll = function(t) {
                            var a = e.props.chat.id;
                            e.push((0, B.jsx)(p.default, {
                                contact: e.props.chat.contact,
                                onProductDetail: e.onProductDetail,
                                catalogId: a,
                                onBack: e._pop,
                                onCatalogLinkClick: e._onCatalogLinkClick,
                                onCartClick: e._onCartClick,
                                collection: t
                            }))
                        }, e._onProductLinkClick = function(t) {
                            e.push((0, B.jsx)(A.default, {
                                product: t,
                                onBack: e._pop
                            }))
                        }, e.onProductMoreInformation = function(t) {
                            var a = (0, B.jsx)(R.default, {
                                product: t,
                                onBack: e._popAndUpdate
                            });
                            e.push(a)
                        }, e._onCatalogLinkClick = function(t, a) {
                            e.push((0, B.jsx)(c.default, {
                                catalog: t,
                                contact: a,
                                onBack: e._pop
                            }))
                        }, e._onCartClick = function(t) {
                            var a = (0, w.getProductCatalogContext)(e.props.context),
                                n = (0, D.default)(t, e.props.chat, a);
                            n && e.push(n)
                        }, e.pushProductCatalog = function() {
                            var t = e.props.chat,
                                a = (0, S.canViewCollections)() ? (0, B.jsx)(f.default, {
                                    contact: t.contact,
                                    onProductDetail: e.onProductDetail,
                                    catalogId: t.id,
                                    onBack: e._pop,
                                    businessProfile: t.contact.businessProfile,
                                    onCatalogLinkClick: e._onCatalogLinkClick,
                                    onCartClick: e._onCartClick,
                                    onCollectionSeeAll: e.onCollectionSeeAll
                                }) : (0, B.jsx)(O.default, {
                                    contact: t.contact,
                                    onProductDetail: e.onProductDetail,
                                    catalogId: t.id,
                                    onBack: e._pop,
                                    businessProfile: t.contact.businessProfile,
                                    onCatalogLinkClick: e._onCatalogLinkClick,
                                    onCartClick: e._onCartClick
                                });
                            e.push(a)
                        }, e.onProductCatalog = function(t) {
                            var a = e.props.chat.id;
                            (0, E.logCarouselViewMoreClick)({
                                catalogOwnerWid: a,
                                catalogContext: t
                            }), e.pushProductCatalog(a)
                        }, e.onProductCatalogHeaderClick = function(t, a) {
                            (0, E.logCarouselViewMoreClick)({
                                catalogOwnerWid: t,
                                catalogContext: a
                            }), e.onProductCatalog(a)
                        }, e.onStarred = function() {
                            var t = (0, B.jsx)(L.StarredDrawerLoadable, {
                                chat: e.props.chat,
                                starredMsgs: e.props.chat.getStarredMsgs(),
                                onClose: e._pop
                            });
                            e.push(t)
                        }, e.onAdminSetting = function() {
                            var t = e.props.chat,
                                a = (0, B.jsx)(y.default, {
                                    chat: t,
                                    groupMetadata: t.groupMetadata,
                                    onClose: e._pop
                                });
                            e.push(a)
                        }, e.onContactCard = function() {
                            e.push((0, B.jsx)(m.default, {
                                chat: e.props.chat,
                                onClose: e._pop
                            }))
                        }, e.onMediaGallery = function() {
                            var t = (0, B.jsx)(T.default, {
                                chat: e.props.chat,
                                onBack: e._pop,
                                onProductDetail: e.onProductDetail,
                                setProductsScrollOffset: e._setScrollOffset
                            });
                            e.push(t)
                        }, e.onGroupInviteLink = function() {
                            var t = e.props.chat,
                                a = (0, B.jsx)(M.GroupInviteLinkDrawerLoadable, {
                                    chat: e.props.chat,
                                    groupMetadata: t.groupMetadata,
                                    onBack: e._pop
                                });
                            e.push(a)
                        }, e._pop = function() {
                            e.pop()
                        }, e._popAndUpdate = function() {
                            e.popAndUpdate({
                                initialTab: T.TABS.PRODUCTS,
                                productsScrollOffset: e._scrollOffset
                            })
                        }, e._end = function() {
                            e.end(!0)
                        }, e.onVerification = function(t) {
                            var a = t || e.props.chat.contact,
                                n = (0, B.jsx)(F.VerificationDrawerLoadable, {
                                    contact: a,
                                    onClose: e._pop,
                                    isFirstLevel: !1
                                });
                            e.push(n)
                        }, e.onLiveLocation = function() {
                            var t = (0, B.jsx)(b.LiveLocationDrawerLoadable, {
                                chat: e.props.chat,
                                onClose: e._pop
                            });
                            e.push(t)
                        }, e.onEphemeral = function() {
                            var t = e.props.chat,
                                a = (0, B.jsx)(C.default, {
                                    chat: t,
                                    showNux: !1,
                                    onClose: e._pop
                                });
                            e.push(a)
                        }, e
                    }
                    return (0, r.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.onStarred,
                                t = this.onMediaGallery,
                                a = this.props.chat;
                            this.props.chat.isGroup ? this.push((0, B.jsx)(j.default, {
                                chat: a,
                                showFullGroupDescription: this.props.showFullGroupDescription,
                                scrollToParticipantList: this.props.scrollToParticipantList,
                                groupMetadata: a.groupMetadata,
                                contact: a.contact,
                                profilePicThumb: a.contact.getProfilePicThumb(),
                                onVerification: this.onVerification,
                                onStarred: e,
                                onMediaGallery: t,
                                onAdminSetting: this.onAdminSetting,
                                onGroupInviteLink: this.onGroupInviteLink,
                                onLiveLocation: this.onLiveLocation,
                                onEphemeral: this.onEphemeral,
                                onClose: this._pop
                            })) : a.isBroadcast ? this.push((0, B.jsx)(u.default, {
                                chat: a,
                                contact: a.contact,
                                onStarred: e,
                                onMediaGallery: t,
                                onClose: this._pop
                            })) : a.isUser && (a.contact.isBusiness && (0, S.canSeeBizProfileV3)() && h.default.setDrawerContext("right", (0, w.buildProductCatalogContext)(new N.default, (0, g.getMaybeBizPlatformForLogging)(a.contact.id.toString()), I.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE)), this.push((0, B.jsx)(v.default, {
                                contact: a.contact,
                                onVerification: this.onVerification,
                                onStarred: e,
                                onContactCard: this.onContactCard,
                                onMediaGallery: t,
                                onProductCatalog: this.onProductCatalog,
                                onProductDetail: this.onProductDetail,
                                onLiveLocation: this.onLiveLocation,
                                onEphemeral: this.onEphemeral,
                                onClose: this._pop
                            })))
                        }
                    }]), a
                }(_.default);
            t.default = function(e) {
                return (0, B.jsx)(x.default.Consumer, {
                    children: function(t) {
                        return (0, B.jsx)(G, (0, l.default)({
                            context: t
                        }, e))
                    }
                })
            }
        },
        5118: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = i(a(34575)),
                o = i(a(93913)),
                r = i(a(81506)),
                s = i(a(2205)),
                d = i(a(99842)),
                u = a(18077),
                c = i(a(48842)),
                f = i(a(96486)),
                h = a(67294),
                p = i(a(65901)),
                m = i(a(94253)),
                v = n(a(18286)),
                g = i(a(38032)),
                x = i(a(45159)),
                C = i(a(63641)),
                _ = a(41655),
                S = i(a(92494)),
                j = i(a(82184)),
                M = i(a(50507)),
                y = i(a(5202)),
                b = i(a(66265)),
                E = a(69371),
                T = a(85893),
                I = function(e) {
                    (0, s.default)(a, e);
                    var t = (0, d.default)(a);

                    function a(e) {
                        var n;
                        (0, l.default)(this, a), (n = t.call(this, e))._unmounted = !1, n._addListeners = function() {
                            var e = function() {
                                    return n.state.activeMsg
                                },
                                t = (0, r.default)(n).mediaMsgs,
                                a = n.props.listeners;
                            a.uiIdle((function() {
                                var a = e();
                                a && t.loadMoreAroundIfNeeded(a)
                            }));
                            var i = e();
                            (null == i ? void 0 : i.isViewOnce) ? a.add(i, "revoked", (function() {
                                n.setState({
                                    activeMsg: null
                                }), n.endFlow()
                            })): (a.add(t, "remove", (function(a, i, l) {
                                var o = e();
                                if (t.includes(a) || null != o && null != o.id && o.id.toString() !== a.id.toString()) n.forceUpdate();
                                else {
                                    var r = l.index;
                                    0 === t.length ? n.endFlow() : t.length === r ? n.handleSelectThumb((0, c.default)(t.at(r - 1), "mediaMsgs.at(index - 1)")) : n.handleSelectThumb((0, c.default)(t.at(r), "mediaMsgs.at(index)"))
                                }
                            })), a.add(t, "reset", (function() {
                                n.endFlow()
                            })), a.add(t, "query_media_after", (function() {
                                n.forceUpdate()
                            })), a.add(t, "query_media_before", (function() {
                                var e = n._refThumbs;
                                e && (n._prevScrollWidth = e.scrollWidth, e instanceof HTMLElement && n.forceUpdate())
                            })))
                        }, n.handleKeyDown = function(e) {
                            var t = x.default.isRTL();
                            37 === e.keyCode ? t ? n.handleNext() : n.handlePrev() : 39 === e.keyCode && (t ? n.handlePrev() : n.handleNext())
                        }, n.handleImageLoad = function() {
                            var e = (0, r.default)(n).uiActionEvent;
                            e && (e.markUiActionT(), e.commit(), delete n.uiActionEvent)
                        }, n.handleScroll = function(e) {
                            n._handleScrollThrottled(e.currentTarget, n.mediaMsgs, e.currentTarget.scrollLeft, n.props.listeners)
                        }, n.handleNext = function(e) {
                            if (e && e.stopPropagation(), !n.state.imgZoomed) {
                                var t = n.state.activeMsg;
                                if (t) {
                                    var a = null;
                                    for (a = n.mediaMsgs.getAfter(t); a && a.mediaData && !(0, E.hasThumbnail)(a.mediaData);) a = n.mediaMsgs.getAfter(a);
                                    a ? n.handleSelectThumb(a) : n.mediaMsgs.hasMediaAfter && (n._queryMediaAfter || (n._queryMediaAfter = n.mediaMsgs.queryMedia({
                                        chat: t.chat,
                                        msg: t,
                                        direction: "after"
                                    }).checkpoint(n.props.rejectOnUnmount()).then((function(e) {
                                        "number" == typeof e.length && e.length > 0 && n.state.activeMsg === t && n.handleNext()
                                    })).catch((0, u.filteredCatch)(v.Unmount, (function() {}))).catch((function() {
                                        __LOG__(3)`query media msgs error: `
                                    })).finally((function() {
                                        n._queryMediaAfter = null
                                    }))))
                                }
                            }
                        }, n.handlePrev = function(e) {
                            if (e && e.stopPropagation(), !n.state.imgZoomed) {
                                var t = n.state.activeMsg;
                                if (t) {
                                    var a = null;
                                    for (a = n.mediaMsgs.getBefore(t); a && a.mediaData && !(0, E.hasThumbnail)(a.mediaData);) a = n.mediaMsgs.getBefore(a);
                                    a ? n.handleSelectThumb(a) : n.mediaMsgs.hasMediaBefore && (n._queryMediaBefore || (n._queryMediaBefore = n.mediaMsgs.queryMedia({
                                        chat: t.chat,
                                        msg: t,
                                        direction: "before"
                                    }).checkpoint(n.props.rejectOnUnmount()).then((function(e) {
                                        "number" == typeof e.length && e.length > 0 && n.state.activeMsg === t && n.handlePrev()
                                    })).catch((0, u.filteredCatch)(v.Unmount, (function() {}))).catch((function() {
                                        __LOG__(3)`query media msgs error: `
                                    })).finally((function() {
                                        n._queryMediaBefore = null
                                    }))))
                                }
                            }
                        }, n.handleImgZoomIn = function(e) {
                            n.setState({
                                imgZoomed: e
                            })
                        }, n.endFlow = function() {
                            p.default.closeModalMedia()
                        }, n.willEndFlow = function() {
                            var e;
                            (e = n._refThumbsContainer) && (0, b.default)(e, {
                                opacity: [0, 1],
                                translateY: ["100%", "0%"]
                            }, {
                                duration: 300,
                                easing: [.1, .82, .25, 1]
                            })
                        }, n.handleSelectThumb = function(e) {
                            n.props.listeners.uiIdle((function() {
                                n.mediaMsgs.loadMoreAroundIfNeeded(e)
                            })), n.setState({
                                activeMsg: e
                            })
                        }, n.scrollToActive = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = n._refThumbsContainer,
                                a = n._refThumbs,
                                i = n._refActiveThumb;
                            if (t && a && i) {
                                var l = 0;
                                i instanceof HTMLElement && (l = i.clientWidth / 2 - t.clientWidth / 2), (0, b.default)(a, "stop");
                                var o = 0;
                                e && (o = 300), (0, b.default)(i, "scroll", {
                                    duration: o,
                                    container: a,
                                    offset: l,
                                    axis: "x",
                                    easing: [.1, .82, .25, 1]
                                })
                            }
                        }, n._setRefActiveThumb = function(e) {
                            n._refActiveThumb = e
                        }, n.setRefThumbsContainer = function(e) {
                            n._refThumbsContainer = e
                        }, n.setRefThumbs = function(e) {
                            n._refThumbs = e
                        }, n._getActiveMsgIndexInAlbum = function() {
                            var e = -1,
                                t = n.props.highlightedMsgIds;
                            if (!t || !n.state.activeMsg) return e;
                            var a = n.state.activeMsg.id.toString();
                            if (!t.has(a)) return e;
                            var i = 0;
                            return t.forEach((function(t) {
                                t === a && (e = i), i++
                            })), e
                        }, n._previousMediaHasThumb = function() {
                            var e = n.state.activeMsg;
                            if (!e) return !1;
                            for (var t = n.mediaMsgs.indexOf(e) - 1; t > 0; t--) {
                                var a = n.mediaMsgs.at(t);
                                if (a && (0, E.hasThumbnail)(a.mediaData)) return !0
                            }
                            return !1
                        }, n._prevScrollWidth = null;
                        var i = n.props.msg;
                        return n.mediaMsgs = i.chat.constructMediaMsgs(i), n._handleScrollThrottled = f.default.throttle(n._handleScroll.bind((0, r.default)(n)), 100), i.type === m.default.MSG_TYPE.IMAGE && (n.uiActionEvent = new M.default.UiAction({
                            uiActionType: M.default.UI_ACTION_TYPE.IMAGE_OPEN,
                            uiActionPreloaded: i.mediaData.mediaStage === _.MEDIA_DATA_STAGE.RESOLVED
                        })), n.state = {
                            activeMsg: i,
                            imgZoomed: !1,
                            animatingThumbs: n._hasThumbList(i)
                        }, n
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e, t = this;
                            this.props.listeners.add(window, "keydown", this.handleKeyDown), this._addListeners(), this.scrollToActive(), (e = this._refThumbsContainer) && (0, b.default)(e, {
                                opacity: [1, 0],
                                translateY: ["0%", "100%"]
                            }, {
                                duration: 300,
                                delay: 100,
                                easing: [.1, .82, .25, 1]
                            }).then((function() {
                                t._unmounted || t.setState({
                                    animatingThumbs: !1
                                })
                            }))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e, t) {
                            if (t.activeMsg !== this.state.activeMsg) this.scrollToActive(!0);
                            else {
                                var a = this._refThumbs;
                                if (!a || null == this._prevScrollWidth || 0 === this._prevScrollWidth) return;
                                a instanceof HTMLElement && (a.scrollLeft += a.scrollWidth - this._prevScrollWidth), this._prevScrollWidth = null
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._handleScrollThrottled.cancel(), this._unmounted = !0
                        }
                    }, {
                        key: "_hasThumbList",
                        value: function(e) {
                            return !(null == e ? void 0 : e.isViewOnce)
                        }
                    }, {
                        key: "_handleScroll",
                        value: function(e, t, a, n) {
                            var i = this;
                            if (0 !== t.length && null != a) {
                                if (t.hasMediaBefore && a < e.clientWidth) {
                                    var l = (0, c.default)(t.head(), "mediaMsgs.head()");
                                    n.uiIdle((function() {
                                        t.queryMedia({
                                            chat: l.chat,
                                            msg: l
                                        }), i.forceUpdate()
                                    }))
                                }
                                if (t.hasMediaAfter && a + m.default.SCROLL_FUDGE > e.scrollWidth - 2 * e.clientWidth) {
                                    var o = (0, c.default)(t.last(), "mediaMsgs.last()");
                                    n.uiIdle((function() {
                                        t.queryMedia({
                                            chat: o.chat,
                                            msg: o,
                                            direction: "after"
                                        }), i.forceUpdate()
                                    }))
                                }
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.state.activeMsg;
                            if (!t) return null;
                            var a = this.mediaMsgs.last(),
                                n = this.mediaMsgs.hasMediaAfter || this.state.activeMsg !== a ? this.handleNext : null,
                                i = this.mediaMsgs.head(),
                                l = null;
                            return l = this.mediaMsgs.hasMediaBefore || this.state.activeMsg !== i ? this.handlePrev : null, g.default.supportsFeature(g.default.F.MD_BACKEND) && (l = (this.mediaMsgs.hasMediaBefore || this.state.activeMsg !== i) && this._previousMediaHasThumb() ? this.handlePrev : null), (0, T.jsxs)("div", {
                                className: this.state.imgZoomed ? "img-zoomed-in" : null,
                                children: [this._hasThumbList(t) && (0, T.jsx)(j.default, {
                                    activeMsg: t,
                                    mediaMsgs: this.mediaMsgs,
                                    highlightedMsgIds: this.props.highlightedMsgIds,
                                    onSelectThumb: this.handleSelectThumb,
                                    onSetActiveThumb: this._setRefActiveThumb,
                                    onScroll: this.handleScroll,
                                    setRefThumbsContainer: this.setRefThumbsContainer,
                                    setRefThumbs: this.setRefThumbs
                                }), (0, T.jsx)(S.default, {
                                    msg: t,
                                    mediaData: t.mediaData,
                                    onBack: this.endFlow,
                                    onExitAnimation: this.willEndFlow,
                                    onNext: n,
                                    onPrev: l,
                                    onImgZoomIn: this.handleImgZoomIn,
                                    getZoomNode: this.props.getZoomNode,
                                    startTime: this.props.startTime,
                                    isAnimatingIn: this.state.animatingThumbs,
                                    onImageLoad: this.uiActionEvent ? this.handleImageLoad : null,
                                    msgIndexInAlbum: this._getActiveMsgIndexInAlbum(),
                                    albumSize: (null === (e = this.props.highlightedMsgIds) || void 0 === e ? void 0 : e.size) || 0
                                })]
                            })
                        }
                    }]), a
                }(h.Component);
            I.displayName = "MediaViewerFlow";
            var w = (0, y.default)((0, C.default)(I));
            t.default = w
        },
        44756: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = i(a(87757)),
                o = i(a(48926)),
                r = i(a(34575)),
                s = i(a(93913)),
                d = i(a(2205)),
                u = i(a(99842)),
                c = a(67294),
                f = i(a(96466)),
                h = a(65971),
                p = i(a(53187)),
                m = i(a(18345)),
                v = n(a(19288)),
                g = i(a(50177)),
                x = i(a(45159)),
                C = a(85893),
                _ = function(e) {
                    (0, d.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        return (0, r.default)(this, a), t.apply(this, arguments)
                    }
                    return (0, s.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, C.jsx)(S, {
                                contactId: this.props.contactId,
                                onClose: this.pop
                            }))
                        }
                    }]), a
                }(g.default);
            t.default = _;
            var S = function(e) {
                (0, d.default)(n, e);
                var t, a = (0, u.default)(n);

                function n() {
                    var e;
                    (0, r.default)(this, n);
                    for (var t = arguments.length, i = new Array(t), l = 0; l < t; l++) i[l] = arguments[l];
                    return (e = a.call.apply(a, [this].concat(i))).state = {
                        legalEntityDetails: void 0,
                        isLoading: !0
                    }, e
                }
                return (0, s.default)(n, [{
                    key: "componentDidMount",
                    value: (t = (0, o.default)(l.default.mark((function e() {
                        var t, a, n;
                        return l.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, f.default.update(this.props.contactId, {
                                        getMerchantCompliance: !0
                                    });
                                case 2:
                                    t = e.sent, a = Array.isArray(t) ? t[0] : t, (n = a.serialize()) ? this.setState({
                                        legalEntityDetails: n.legalEntityDetails || void 0,
                                        isLoading: !1
                                    }) : __LOG__(3)`compliance: cannot fetch business details (${this.props.contactId.toString()})`;
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state,
                            t = e.legalEntityDetails,
                            a = void 0 === t ? {} : t,
                            n = e.isLoading,
                            i = a.entityName,
                            l = a.customerCareDetails,
                            o = a.grievanceOfficerDetails,
                            r = (0, h.getEntityTypeText)(a);
                        return (0, C.jsxs)(p.default, {
                            theme: "striped",
                            children: [(0, C.jsx)(v.default, {
                                title: x.default.t(399),
                                type: v.DRAWER_HEADER_TYPE.SMALL,
                                onCancel: this.props.onClose
                            }), (0, C.jsx)(m.default, {
                                theme: n ? "center-content" : void 0,
                                children: n ? (0, C.jsx)(h.ComplianceInfoLoading, {}) : (0, C.jsxs)(C.Fragment, {
                                    children: [(0, C.jsxs)(h.ComplianceInfoGroup, {
                                        children: [(0, C.jsx)(h.ComplianceInfoPrimitiveField, {
                                            value: i,
                                            label: x.default.t(409)
                                        }), (0, C.jsx)(h.ComplianceInfoPrimitiveField, {
                                            value: r,
                                            label: x.default.t(410)
                                        })]
                                    }), (0, C.jsxs)(h.ComplianceInfoGroup, {
                                        title: x.default.t(395),
                                        children: [(0, C.jsx)(h.ComplianceInfoPrimitiveField, {
                                            value: null == l ? void 0 : l.mobileNumber,
                                            label: x.default.t(398)
                                        }), (0, C.jsx)(h.ComplianceInfoPrimitiveField, {
                                            value: null == l ? void 0 : l.landlineNumber,
                                            label: x.default.t(397)
                                        }), (0, C.jsx)(h.ComplianceInfoPrimitiveField, {
                                            value: null == l ? void 0 : l.email,
                                            label: x.default.t(396)
                                        })]
                                    }), (0, C.jsxs)(h.ComplianceInfoGroup, {
                                        title: x.default.t(402),
                                        children: [(0, C.jsx)(h.ComplianceInfoPrimitiveField, {
                                            value: null == o ? void 0 : o.name,
                                            label: x.default.t(406)
                                        }), (0, C.jsx)(h.ComplianceInfoPrimitiveField, {
                                            value: null == o ? void 0 : o.mobileNumber,
                                            label: x.default.t(405)
                                        }), (0, C.jsx)(h.ComplianceInfoPrimitiveField, {
                                            value: null == o ? void 0 : o.landlineNumber,
                                            label: x.default.t(404)
                                        }), (0, C.jsx)(h.ComplianceInfoPrimitiveField, {
                                            value: null == o ? void 0 : o.email,
                                            label: x.default.t(403)
                                        })]
                                    })]
                                })
                            })]
                        }, "merchant-details-modal")
                    }
                }]), n
            }(c.Component);
            S.displayName = "MerchantDetails"
        },
        46324: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SendContactFlowLoadable = t.requireBundle = void 0;
            var i = n(a(87757)),
                l = n(a(48926)),
                o = n(a(68356)),
                r = n(a(94253)),
                s = n(a(45159)),
                d = n(a(47410)),
                u = n(a(19509)),
                c = a(85893),
                f = (0, u.default)((0, l.default)(i.default.mark((function e() {
                    var t;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Promise.all([a.e(7167), a.e(1560), a.e(275)]).then(a.bind(a, 98867));
                            case 2:
                                return t = e.sent, e.abrupt("return", t.default);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), "SendContactFlow");
            t.requireBundle = f;
            var h = (0, o.default)({
                loader: f,
                loading: function(e) {
                    return (0, c.jsx)(d.default, {
                        title: s.default.t(1619),
                        error: Boolean(e.error)
                    })
                },
                delay: r.default.LOADABLE_DELAY
            });
            t.SendContactFlowLoadable = h
        },
        12494: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = i(a(34575)),
                o = i(a(93913)),
                r = i(a(2205)),
                s = i(a(99842)),
                d = a(67294),
                u = i(a(85967)),
                c = n(a(97397)),
                f = i(a(4481)),
                h = i(a(65901)),
                p = i(a(94253)),
                m = i(a(53187)),
                v = i(a(18345)),
                g = n(a(19288)),
                x = n(a(98169)),
                C = i(a(94680)),
                _ = a(75993),
                S = i(a(73568)),
                j = i(a(92546)),
                M = a(27968),
                y = i(a(29832)),
                b = a(1577),
                E = i(a(38032)),
                T = a(2629),
                I = i(a(58342)),
                w = i(a(45159)),
                N = a(12231),
                k = i(a(63641)),
                P = a(91823),
                A = i(a(39916)),
                O = i(a(61897)),
                R = i(a(7665)),
                D = i(a(22552)),
                L = i(a(60806)),
                F = a(28862),
                B = a(85893),
                G = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, s.default)(a);

                    function a() {
                        var e;
                        (0, l.default)(this, a);
                        for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i))).flatListController = new j.default, e.selection = new A.default([], (function(e) {
                            return e.id.toString()
                        })), e.state = {
                            forceHideNux: !1,
                            chats: e._getArchivedChats()
                        }, e.handleClick = function(t, a) {
                            h.default.openChatFromUnread(a).then((function(e) {
                                e && h.default.focusChatTextInput(a)
                            })), (0, T.archiveV2Supported)() && e.props.settings.archive.enabled || e.handleClose()
                        }, e._updateSelected = function(t) {
                            e.selection.setVal(t, !1)
                        }, e.handleClose = function() {
                            e.props.onClose()
                        }, e.handleNextChat = function(t) {
                            t.preventDefault(), t.stopPropagation(), e.selection.setNext(!0)
                        }, e.handlePrevChat = function(t) {
                            t.preventDefault(), t.stopPropagation(), e.selection.setPrev(!0)
                        }, e.shouldShowArchiveV2 = function() {
                            return (0, T.archiveV2Supported)() && e.props.settings.showArchiveV2
                        }, e._handleCloseChat = function(t) {
                            t === e.selection.getVal() && e.selection.unset()
                        }, e.renderItem = function(t) {
                            return (0, B.jsx)(c.default, {
                                chat: t.chat,
                                mode: c.Mode.LAST,
                                active: e.selection,
                                onClick: e.handleClick,
                                hideArchivedIcon: (0, T.archiveV2Supported)() && e.props.settings.archive.enabled,
                                hideMuteIcon: e.shouldShowArchiveV2(),
                                hideMuteOption: e.shouldShowArchiveV2(),
                                ephemeralIcon: "chat-list"
                            })
                        }, e.setRefHotKeys = function(t) {
                            e.refList = t
                        }, e._handleCloseNux = function() {
                            (0, b.setNUX)(p.default.NUX.ARCHIVE, {
                                views: p.default.ARCHIVE_NUX_MAX_VIEWS,
                                maxViews: p.default.ARCHIVE_NUX_MAX_VIEWS
                            }), e.setState({
                                forceHideNux: !0
                            })
                        }, e._showNux = function() {
                            var t = f.default.some((function(e) {
                                return e.archive
                            }));
                            return e.shouldShowArchiveV2() && t && (0, b.shouldShowNUX)(p.default.NUX.ARCHIVE) && !e.state.forceHideNux
                        }, e
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            if (this.shouldShowArchiveV2() && !(0, b.getNUX)(p.default.NUX.ARCHIVE) && (0, b.setNUX)(p.default.NUX.ARCHIVE, {
                                    views: 0,
                                    maxViews: p.default.ARCHIVE_NUX_MAX_VIEWS
                                }), this._showNux() && (0, b.viewNUX)(p.default.NUX.ARCHIVE), this.shouldShowArchiveV2()) {
                                if ((0, N.isElevatedImportantMessageEnabled)()) {
                                    var t = this._getArchivedChats(),
                                        a = new Map;
                                    t.forEach((function(e) {
                                        e.archiveAtMentionViewedInDrawer = !0, a.set(e.id.toString(), !0)
                                    })), (0, F.updateChatArchiveDrawer)(a)
                                }
                                this.props.listeners.add(f.default, "sort change:archive add remove", (function() {
                                    e.setState({
                                        chats: e._getArchivedChats()
                                    })
                                }))
                            } else this.props.listeners.add(f.default, "change:archive add remove", (function() {
                                e.setState({
                                    chats: e._getArchivedChats()
                                })
                            }));
                            this.refList && y.default.focus(this.refList), this.props.listeners.add(h.default, "update_chatlist_selection", this._updateSelected), this.props.listeners.add(h.default, "close_chat", this._handleCloseChat);
                            var n = this._getActiveArchiveChat();
                            n && this._updateSelected(n)
                        }
                    }, {
                        key: "_getActiveArchiveChat",
                        value: function() {
                            return f.default.toArray().find((function(e) {
                                return e.active && e.archive
                            }))
                        }
                    }, {
                        key: "_getArchivedChats",
                        value: function() {
                            return f.default.filter((function(e) {
                                return e.archive
                            }))
                        }
                    }, {
                        key: "getData",
                        value: function() {
                            return this.state.chats.map((function(e) {
                                return {
                                    itemKey: e.id.toString(),
                                    chat: e
                                }
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t;
                            if (this.selection.init(this.state.chats, !0), this._showNux() && (t = (0, B.jsxs)("div", {
                                    className: u.default.nuxContainer,
                                    children: [(0, B.jsxs)(M.FlexColumn, {
                                        align: "center",
                                        children: [(0, B.jsx)("span", {
                                            className: u.default.nuxIcon,
                                            children: (0, B.jsx)(R.default, {
                                                name: "archive-nux"
                                            })
                                        }), (0, B.jsx)("div", {
                                            className: u.default.nuxHeader,
                                            children: (0, B.jsx)(D.default, {
                                                theme: "large",
                                                as: "h1",
                                                children: w.default.t(260)
                                            })
                                        }), (0, B.jsx)("div", {
                                            className: u.default.nuxContent,
                                            children: (0, B.jsx)("div", {
                                                className: u.default.nuxText,
                                                children: (0, B.jsx)(D.default, {
                                                    theme: "plain",
                                                    as: "p",
                                                    children: E.default.supportsFeature(E.default.F.MD_BACKEND) ? w.default.t(259) : w.default.t(258)
                                                })
                                            })
                                        })]
                                    }), (0, B.jsx)("button", {
                                        onClick: this._handleCloseNux,
                                        className: u.default.btnClose,
                                        children: (0, B.jsx)(R.default, {
                                            name: "x-alt"
                                        })
                                    })]
                                })), this.state.chats.length > 0) {
                                var a = {
                                    down: this.handleNextChat,
                                    up: this.handlePrevChat
                                };
                                e = (0, B.jsxs)(I.default, {
                                    onRef: this.setRefHotKeys,
                                    handlers: a,
                                    children: [(0, B.jsx)(L.default, {
                                        transitionName: "slide",
                                        children: t
                                    }), (0, B.jsx)(S.default, {
                                        className: u.default.flatListContainer,
                                        data: this.getData(),
                                        flatListController: this.flatListController,
                                        direction: "vertical",
                                        renderItem: this.renderItem
                                    })]
                                })
                            } else e = (0, B.jsx)(_.Archived, {});
                            var n = !E.default.supportsFeature(E.default.F.MD_BACKEND) && (0, T.archiveV2Supported)() && this.props.settings.archive.enabled ? (0, B.jsx)(P.MenuBarItem, {
                                    a8nText: "archived-menu",
                                    icon: (0, B.jsx)(R.default, {
                                        name: "menu"
                                    }),
                                    title: w.default.t(1246),
                                    children: (0, B.jsx)(x.default, {
                                        type: "dropdown_menu",
                                        flipOnRTL: !0,
                                        dirX: x.DirX.LEFT,
                                        children: (0, B.jsx)(C.default, {
                                            a8n: "open-archive-settings menu-item",
                                            action: this.props.showSettings,
                                            children: w.default.t(261)
                                        })
                                    }, "ArchivedDrawerHeader")
                                }) : null,
                                i = (0, T.archiveV2Supported)() && this.props.settings.archive.enabled ? w.default.t(264) : w.default.t(263);
                            return (0, B.jsxs)(m.default, {
                                theme: "archived",
                                children: [(0, B.jsx)(g.default, {
                                    title: i,
                                    onBack: this.handleClose,
                                    type: g.DRAWER_HEADER_TYPE.LARGE,
                                    menu: n
                                }), (0, B.jsx)(v.default, {
                                    flatListControllers: [this.flatListController],
                                    children: e
                                })]
                            })
                        }
                    }]), a
                }(d.Component);
            G.CONCERNS = {
                settings: ["showArchiveV2", "archive"]
            }, G.displayName = "ArchivedDrawer";
            var V = (0, k.default)((0, O.default)(G, G.CONCERNS));
            t.default = V
        },
        93306: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a = (0, h.default)(e.contact, ["name", "verifiedLevel", "verifiedName", "formattedName"]);
                t = c.default.supportsFeature(c.default.F.VNAME_V_2) ? function() {
                    switch (a.verifiedLevel) {
                        case r.default.VERIFIED_LEVEL.HIGH:
                            return a.name === a.verifiedName ? f.default.t(1929, {
                                businessName: a.verifiedName
                            }) : f.default.t(1930, {
                                businessName: a.verifiedName
                            });
                        case r.default.VERIFIED_LEVEL.LOW:
                        case r.default.VERIFIED_LEVEL.UNKNOWN:
                            return f.default.t(1931)
                    }
                }() : function() {
                    switch (a.verifiedLevel) {
                        case r.default.VERIFIED_LEVEL.HIGH:
                            return f.default.t(2211);
                        case r.default.VERIFIED_LEVEL.LOW:
                            return f.default.t(2213);
                        case r.default.VERIFIED_LEVEL.UNKNOWN:
                            return f.default.t(2215, {
                                businessName: a.formattedName
                            })
                    }
                }();
                var n = (0, p.jsx)(i.default, {
                    href: (0, u.getBusinessFaqUrl)(),
                    onClick: v,
                    children: f.default.t(1120)
                });
                return (0, p.jsxs)(o.default, {
                    onOK: m,
                    okText: f.default.t(1419),
                    children: [(0, p.jsx)(s.default, {
                        text: t
                    }), " ", n]
                })
            };
            var i = n(a(81288)),
                l = n(a(65901)),
                o = n(a(86777)),
                r = n(a(94253)),
                s = n(a(73008)),
                d = a(49012),
                u = a(29281),
                c = n(a(38032)),
                f = n(a(45159)),
                h = n(a(69283)),
                p = a(85893),
                m = function() {
                    l.default.closeModal()
                },
                v = function(e) {
                    e.preventDefault(), l.default.closeModal("none"), setTimeout((function() {
                        return (0, d.openExternalLink)((0, u.getBusinessFaqUrl)())
                    }), 10)
                }
        },
        98056: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.a8nText,
                    a = e.icon,
                    n = e.label,
                    d = e.disabled,
                    u = e.xstyle,
                    c = e.theme,
                    f = e.onClick,
                    h = "new-chat-info" === c;
                return (0, r.jsxs)("div", {
                    className: (0, i.default)(s.button, d && s.disabled, u),
                    children: [(0, r.jsx)(l.default, {
                        inverted: !0,
                        onClick: f,
                        disabled: d,
                        a8nText: t,
                        showBackgroundOnHover: h,
                        children: (0, r.jsx)(o.default, {
                            name: a,
                            directional: !0,
                            color: "teal"
                        })
                    }), (0, r.jsx)("div", {
                        className: (0, i.default)(s.label, h && s.labelForNewChatInfo),
                        children: n
                    })]
                })
            };
            var i = n(a(56720)),
                l = n(a(80385)),
                o = n(a(7665)),
                r = a(85893),
                s = {
                    button: {
                        textAlign: "qfejxiq4"
                    },
                    label: {
                        marginEnd: "jnwc1y2a",
                        marginBottom: "mpdn4nr2",
                        marginStart: "svoq16ka",
                        marginTop: "opp68qpq",
                        fontSize: "ovllcyds"
                    },
                    labelForNewChatInfo: {
                        marginTop: "qt60bha0",
                        color: "jq3rn4u7"
                    },
                    disabled: {
                        opacity: "ge6flnsz"
                    }
                }
        },
        45705: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, N.default)(e.contact),
                    a = (0, k.default)();
                return (0, R.jsx)(L, (0, l.default)((0, l.default)({}, e), {}, {
                    newChatInfo: t,
                    style: t ? a : null
                }))
            };
            var l = i(a(81109)),
                o = i(a(34575)),
                r = i(a(93913)),
                s = i(a(2205)),
                d = i(a(99842)),
                u = a(67294),
                c = i(a(8521)),
                f = i(a(86810)),
                h = i(a(52988)),
                p = a(82506),
                m = i(a(83399)),
                v = i(a(10399)),
                g = i(a(65901)),
                x = i(a(53187)),
                C = i(a(18345)),
                _ = i(a(61876)),
                S = n(a(19288)),
                j = i(a(92546)),
                M = i(a(2424)),
                y = i(a(45159)),
                b = i(a(63641)),
                E = i(a(61897)),
                T = a(68220),
                I = i(a(7665)),
                w = a(22552),
                N = i(a(25319)),
                k = i(a(16637)),
                P = i(a(38032)),
                A = i(a(96178)),
                O = i(a(38973)),
                R = a(85893),
                D = function(e) {
                    (0, s.default)(a, e);
                    var t = (0, d.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l];
                        return (e = t.call.apply(t, [this].concat(i))).flatListController = new j.default, e.handleClose = function() {
                            e.props.onClose ? e.props.onClose() : e.props.uim.uie.requestDismiss()
                        }, e.handleDelete = function() {
                            g.default.deleteOrExitChat((0, T.unproxy)(e.props.chat))
                        }, e.showEncryptionInfoPopup = function() {
                            g.default.openModal((0, R.jsx)(O.default, {
                                chatId: e.props.chat.id,
                                e2eSubtype: "info_encrypted"
                            }))
                        }, e
                    }
                    return (0, r.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props.chat.groupMetadata;
                            null != t && this.props.listeners.add(t.participants, "add remove sort reset", (function() {
                                e.forceUpdate()
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props.chat,
                                a = null;
                            this.props.onMediaGallery && (a = (0, R.jsx)(m.default, {
                                onMediaGallery: this.props.onMediaGallery,
                                chat: (0, T.unproxy)(t)
                            }));
                            var n, i = (0, R.jsx)(p.ChatInfoDrawerButtonsSection, {
                                newChatInfo: this.props.newChatInfo,
                                children: (0, R.jsx)(_.default, {
                                    a8nText: "li-delete-broadcast",
                                    icon: (0, R.jsx)(I.default, {
                                        name: "delete"
                                    }),
                                    color: "danger",
                                    theme: this.props.newChatInfo ? "new-chat-info" : "list-aligned",
                                    onClick: this.handleDelete,
                                    children: y.default.t(1980)
                                })
                            });
                            (null === (e = t.groupMetadata) || void 0 === e ? void 0 : e.creation) ? (n = v.default.createdStr(t.groupMetadata.creation), n = (0, R.jsx)(w.TextDiv, {
                                theme: "small",
                                children: n
                            })) : n = null;
                            var l = null;
                            P.default.supportsFeature(P.default.F.MD_BACKEND) && (l = (0, R.jsx)(A.default, {
                                onClick: this.showEncryptionInfoPopup,
                                text: y.default.t(1925),
                                theme: this.props.newChatInfo ? "new-chat-info" : null
                            }));
                            var o = null;
                            return l && (o = (0, R.jsxs)(p.ChatInfoDrawerSection, {
                                newChatInfo: this.props.newChatInfo,
                                children: [null, l]
                            })), (0, R.jsxs)(x.default, {
                                theme: "striped",
                                style: this.props.style,
                                children: [(0, R.jsxs)(S.default, {
                                    type: S.DRAWER_HEADER_TYPE.SMALL,
                                    darwinRtlFix: !0,
                                    onCancel: this.handleClose,
                                    children: [(0, R.jsx)(w.TextDiv, {
                                        theme: "title",
                                        children: y.default.t(393)
                                    }), n]
                                }), (0, R.jsx)(C.default, {
                                    flatListControllers: [this.flatListController],
                                    children: (0, R.jsxs)("div", {
                                        className: c.default.body,
                                        children: [(0, R.jsx)(h.default, {
                                            chat: (0, T.unproxy)(t)
                                        }), a, undefined, o, (0, R.jsx)(f.default, {
                                            chat: (0, T.unproxy)(t),
                                            flatListController: this.flatListController
                                        }), i]
                                    })
                                })]
                            }, "contact-info-modal")
                        }
                    }]), a
                }(u.Component);
            D.CONCERNS = {
                chat: ["id", "groupMetadata"]
            }, D.displayName = "BroadcastInfoDrawerBase";
            var L = (0, M.default)((0, b.default)((0, E.default)(D, D.CONCERNS)))
        },
        86810: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a, n = (0, v.default)(e.chat.contact),
                    C = (0, p.default)(),
                    _ = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants;
                (0, m.useListener)(_, "add remove reset", C);
                var S = (0, i.useMemo)((function() {
                        return _ ? _.map((function(e) {
                            return {
                                itemKey: e.id.toString(),
                                participant: e,
                                height: 68
                            }
                        })) : []
                    }), [_]),
                    j = function(e, t) {
                        g.default.equals((0, c.getMaybeMeUser)(), t.id) || (0, d.findChat)(t.id).then((function(e) {
                            o.default.openChatFromUnread(e).then((function(t) {
                                t && o.default.focusChatTextInput(e)
                            }))
                        }))
                    },
                    M = null !== (a = null == _ ? void 0 : _.length) && void 0 !== a ? a : 0,
                    y = n ? f.default.t(2183, {
                        count: M,
                        _plural: M
                    }) : f.default.t(2182),
                    b = n ? null : (0, x.jsx)(h.TextSpan, {
                        theme: "section-title",
                        children: f.default.n(M)
                    });
                return (0, x.jsx)(l.ChatInfoDrawerListSection, {
                    newChatInfo: n,
                    title: y,
                    subtitle: b,
                    children: (0, x.jsx)(u.default, {
                        flatListController: e.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: S,
                        renderItem: function(e) {
                            var t = e.participant,
                                a = s.default.gadd(t.id);
                            return (0, x.jsx)(r.default, {
                                contact: a,
                                theme: n ? "new-chat-info" : "drawer-list",
                                admin: !!t.isAdmin,
                                onClick: j,
                                waitIdle: !0
                            }, t.id.toString())
                        }
                    })
                })
            };
            var i = a(67294),
                l = a(82506),
                o = n(a(65901)),
                r = n(a(65002)),
                s = n(a(20050)),
                d = a(68985),
                u = n(a(73568)),
                c = a(1577),
                f = n(a(45159)),
                h = a(22552),
                p = n(a(57811)),
                m = a(8413),
                v = n(a(25319)),
                g = n(a(78208)),
                x = a(85893)
        },
        52988: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a, n = (0, v.default)(e.chat.contact),
                    i = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants,
                    S = (0, m.default)(e.chat.contact, ["name"]),
                    j = (0, h.default)();
                (0, p.useListener)(i, "add remove reset", j);
                var M = null !== (a = null == i ? void 0 : i.length) && void 0 !== a ? a : 0,
                    y = `${d.default.t(391)} · ${d.default.t(2183,{count:M,_plural:M})}`,
                    b = S.name ? (0, g.jsx)(u.default, {
                        contact: e.chat.contact,
                        selectable: !0
                    }) : d.default.t(392);
                if (n) return (0, g.jsxs)(r.default, {
                    theme: "padding-large",
                    children: [(0, g.jsx)("div", {
                        className: (0, l.default)(x),
                        children: (0, g.jsx)(o.default, {
                            id: e.chat.id,
                            size: o.DETAIL_IMAGE_SIZE.LARGE
                        })
                    }), (0, g.jsxs)(s.FlexColumn, {
                        align: "center",
                        children: [(0, g.jsx)(f.TextHeader, {
                            level: "2",
                            size: "24",
                            children: b
                        }), (0, g.jsx)("div", {
                            className: (0, l.default)(C),
                            children: (0, g.jsx)(c.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, g.jsx)(f.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: y
                                })
                            })
                        })]
                    })]
                });
                return (0, g.jsx)("div", {
                    className: (0, l.default)(_),
                    children: (0, g.jsx)(o.default, {
                        id: e.chat.id,
                        size: o.DETAIL_IMAGE_SIZE.LARGE
                    })
                })
            };
            var l = i(a(56720)),
                o = n(a(66834)),
                r = i(a(46821)),
                s = a(27968),
                d = i(a(45159)),
                u = i(a(1191)),
                c = a(96197),
                f = a(22552),
                h = i(a(57811)),
                p = a(8413),
                m = i(a(69283)),
                v = i(a(25319)),
                g = a(85893),
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
        98350: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a = e.icon,
                    n = e.children,
                    h = e.side,
                    p = (0, l.default)(e, ["icon", "children", "side"]),
                    m = null !== (t = f[a]) && void 0 !== t ? t : 20,
                    v = (0, u.jsx)(s.FlexRow, {
                        xstyle: c.iconContainer,
                        align: "center",
                        justify: "center",
                        children: (0, u.jsx)(d.default, {
                            color: "secondary",
                            name: a,
                            height: m
                        })
                    }),
                    g = null != h ? h : "";
                "chevron" === g && (g = (0, u.jsx)(d.default, {
                    color: "secondary",
                    name: "chevron-right-alt",
                    directional: !0
                }));
                return (0, u.jsx)(r.default, (0, i.default)((0, i.default)({
                    theme: "new-chat-info"
                }, p), {}, {
                    children: (0, u.jsxs)(s.FlexRow, {
                        align: "center",
                        justify: "start",
                        children: [v, (0, u.jsx)("div", {
                            className: (0, o.default)(c.content),
                            children: n
                        }), (0, u.jsx)(s.FlexRow, {
                            align: "center",
                            justify: "end",
                            xstyle: c.drawerSide,
                            children: g
                        })]
                    })
                }))
            };
            var i = n(a(81109)),
                l = n(a(6479)),
                o = n(a(56720)),
                r = n(a(81218)),
                s = a(27968),
                d = n(a(7665)),
                u = a(85893),
                c = {
                    iconContainer: {
                        marginEnd: "bugiwsl0",
                        width: "qssinsw9",
                        flexGrow: "tvf2evcx",
                        flexShrink: "oq44ahr5"
                    },
                    content: {
                        flexGrow: "ggj6brxn",
                        flexShrink: "m0h2a7mj"
                    },
                    drawerSide: {
                        flexGrow: "tvf2evcx",
                        flexShrink: "oq44ahr5",
                        width: "jswlwoyz"
                    }
                },
                f = {
                    settings: 17,
                    disappearing: 17
                }
        },
        82506: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChatInfoDrawerSection = u, t.ChatInfoDrawerListSection = function(e) {
                return (0, s.jsx)(u, (0, i.default)((0, i.default)({}, e), {}, {
                    xstyle: e.newChatInfo && c.drawerSectionContainer,
                    children: (0, s.jsx)("div", {
                        className: (0, o.default)(e.newChatInfo && c.contentContainer),
                        children: e.children
                    })
                }))
            }, t.ChatInfoDrawerButtonsSection = function(e) {
                return (0, s.jsx)(u, (0, i.default)((0, i.default)({}, e), {}, {
                    xstyle: e.newChatInfo && f.drawerSectionContainer,
                    children: e.children
                }))
            };
            var i = n(a(81109)),
                l = n(a(6479)),
                o = n(a(56720)),
                r = n(a(46821)),
                s = a(85893),
                d = {
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

            function u(e) {
                var t = e.newChatInfo,
                    a = (0, l.default)(e, ["newChatInfo"]);
                return t ? (0, s.jsx)(r.default, (0, i.default)((0, i.default)({}, a), {}, {
                    xstyle: [d.container, null == a.title && d.containerWithoutTitle, a.xstyle],
                    titleXStyle: d.title,
                    titleTextXStyle: d.titleText,
                    children: a.children
                })) : (0, s.jsx)(r.default, (0, i.default)((0, i.default)({}, a), {}, {
                    children: a.children
                }))
            }
            var c = {
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
            var f = {
                drawerSectionContainer: {
                    paddingTop: "i5tg98hk",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "przvwfww",
                    paddingStart: "gx1rr48f"
                }
            }
        },
        83399: (e, t, a) => {
            "use strict";
            var n = a(52108).default,
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.chat,
                    a = e.onMediaGallery,
                    n = f.default.t(1226),
                    i = (0, x.default)(t.contact),
                    l = (0, _.jsx)(m.default, {
                        color: "secondary",
                        name: "chevron-right-alt",
                        directional: !0
                    }),
                    o = (0, _.jsxs)(u.FlexRow, {
                        align: "center",
                        children: [i && (0, _.jsx)(j, {
                            chat: t
                        }), (0, _.jsx)("div", {
                            children: l
                        })]
                    });
                return (0, _.jsx)(d.ChatInfoDrawerSection, {
                    newChatInfo: i,
                    a8nText: "section-media",
                    title: n,
                    titleOnClick: a,
                    subtitle: o,
                    theme: i ? void 0 : "padding",
                    xstyle: i && S.drawerSection,
                    children: (0, _.jsx)(h.default, {
                        chat: t,
                        mediaMsgs: t.getMediaMsgs(),
                        theme: i ? "new-chat-info" : null
                    })
                })
            };
            var l = i(a(87757)),
                o = i(a(48926)),
                r = a(67294),
                s = i(a(56720)),
                d = a(82506),
                u = a(27968),
                c = i(a(38032)),
                f = i(a(45159)),
                h = i(a(19548)),
                p = a(69371),
                m = i(a(7665)),
                v = i(a(57811)),
                g = a(8413),
                x = i(a(25319)),
                C = i(a(48311)),
                _ = a(85893),
                S = {
                    mediaCount: {
                        marginRight: "lyrceosr",
                        fontSize: "bze30y65",
                        color: "hda1bzzh"
                    },
                    drawerSection: {
                        paddingBottom: "aiput80m"
                    }
                };

            function j(e) {
                var t = function(e) {
                    var t = e.getMediaMsgs(),
                        a = e.getDocMsgs(),
                        i = e.getLinkMsgs(),
                        s = (0, v.default)();
                    (0, g.useListener)(t, "add remove reset query_media_before", s), (0, g.useListener)(a, "add remove reset query_doc_before", s), (0, g.useListener)(i, "add remove reset query_link_before", s);
                    var d = (0, C.default)();
                    (0, r.useEffect)((function() {
                        d((0, o.default)(l.default.mark((function o() {
                            var r;
                            return l.default.wrap((function(l) {
                                for (;;) switch (l.prev = l.next) {
                                    case 0:
                                        return r = [], t.hasMediaBefore && r.push(t.queryMedia({
                                            chat: e
                                        })), a.hasDocBefore && r.push(a.queryDocs(e)), i.hasLinkBefore && r.push(i.queryLinks(e)), l.next = 6, n.all(r);
                                    case 6:
                                        s();
                                    case 7:
                                    case "end":
                                        return l.stop()
                                }
                            }), o)
                        }))))
                    }), [e, a, s, i, t, d]);
                    var u = null;
                    if (!t.hasMediaBefore && !a.hasDocBefore && !i.hasLinkBefore) {
                        var f = t.length;
                        c.default.supportsFeature(c.default.F.MD_BACKEND) && (f = t.filter((function(e) {
                            return (0, p.hasThumbnail)(e.mediaData)
                        })).length), u = f + a.length + i.length
                    }
                    return u
                }(e.chat);
                return (0, _.jsx)("div", {
                    className: (0, s.default)(S.mediaCount),
                    children: t
                })
            }
        },
        11218: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a = e.contact,
                    n = f.default.t(470);

                function m() {
                    r.default.openModal((0, p.jsx)(l.default, {
                        contact: a
                    }))
                }

                function v() {
                    r.default.openModal((0, p.jsx)(o.default, {
                        contact: a
                    }))
                }
                t = (0, c.canSeeSMBUpsell)() ? (0, p.jsx)(s.default, {
                    a8nText: "business-title",
                    className: i.default.businessTitleWithSMBUpsell,
                    onClick: v,
                    side: (0, p.jsx)(h.default, {
                        display: "inline",
                        name: "info"
                    }),
                    children: n
                }) : (0, p.jsx)(d.default, {
                    a8nText: "business-title",
                    className: i.default.businessTitleText,
                    onClick: m,
                    children: n
                });
                return (0, p.jsx)(u.default, {
                    className: i.default.businessAccount,
                    children: t
                })
            };
            var i = n(a(12945)),
                l = n(a(93306)),
                o = n(a(36230)),
                r = n(a(65901)),
                s = n(a(81218)),
                d = n(a(61876)),
                u = n(a(46821)),
                c = a(2629),
                f = n(a(45159)),
                h = n(a(7665)),
                p = a(85893)
        },
        86989: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a, n, S = e.contact,
                    j = e.onProductCatalog,
                    M = (0, i.useContext)(c.default),
                    y = (0, m.getProductCatalogSessionId)(M),
                    b = (0, x.default)((0, g.unproxy)(e.contact));
                var E, T, I, w = d.default.toArray().find((function(e) {
                    return e.active
                }));
                (null == w ? void 0 : w.id.equals(S.id)) || ((0, o.logMessageClick)(y), n = (0, C.jsx)(l.default, {
                    icon: "chat-msg",
                    label: p.default.t(1247),
                    onClick: function() {
                        (0, f.findChat)(S.id).then((function(e) {
                            u.default.openChatFromUnread(e).then((function() {
                                u.default.closeDrawerRight()
                            }))
                        }))
                    },
                    a8nText: "business-action chat"
                }));
                b.isVoiceCallEnabled && (E = (0, C.jsx)(l.default, {
                    icon: "voice-call-filled",
                    label: p.default.t(1824),
                    disabled: !b.canStartVoiceCall,
                    onClick: function() {
                        (0, o.logVoiceCallClick)(y), b.startVoiceCall()
                    },
                    a8nText: "business-action voice-call"
                }));
                (null === (t = S.businessProfile) || void 0 === t || null === (a = t.profileOptions) || void 0 === a ? void 0 : a.commerceExperience) === r.COMMERCE_EXPERIENCE_TYPES.CATALOG && (T = (0, C.jsx)(l.default, {
                    icon: "catalog-filled",
                    label: p.default.t(1105),
                    onClick: function() {
                        (0, o.logCatalogClick)(y), j((0, m.getProductCatalogContext)(M))
                    },
                    a8nText: "business-action catalog"
                }));
                (0, s.hasShop)(S.businessProfile) && (I = (0, C.jsx)(l.default, {
                    icon: "shop-filled",
                    label: p.default.t(1648),
                    onClick: function() {
                        (0, o.logShopsClick)(y), (0, s.goToShop)(S.businessProfile)
                    },
                    a8nText: "business-action shop"
                }));
                var N = (0, C.jsx)(l.default, {
                    icon: "forward-filled",
                    label: p.default.t(914),
                    onClick: function() {
                        (0, o.logForwardClick)(y), u.default.openModal((0, C.jsx)(v.SendContactFlowLoadable, {
                            contacts: [(0, g.unproxy)(S)],
                            onContactsSent: function(e) {
                                u.default.openChatFromUnread(e).then((function() {}))
                            }
                        }))
                    },
                    a8nText: "business-action forward"
                });
                return (0, C.jsxs)(h.FlexRow, {
                    xstyle: _.actionsRow,
                    justify: "evenly",
                    children: [n, E, T, I, N]
                })
            };
            var i = a(67294),
                l = (n(a(56720)), n(a(98056))),
                o = a(42661),
                r = a(74871),
                s = a(19218),
                d = n(a(4481)),
                u = n(a(65901)),
                c = n(a(96706)),
                f = a(68985),
                h = a(27968),
                p = n(a(45159)),
                m = a(49942),
                v = a(46324),
                g = a(68220),
                x = n(a(53906)),
                C = a(85893),
                _ = {
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
        87338: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.businessHours,
                    a = (0, h.getProductCatalogSessionId)((0, r.useContext)(u.default)),
                    n = (0, g.getBusinessOpenState)(t),
                    i = (0, r.useState)(!0),
                    o = (0, l.default)(i, 2),
                    s = o[0],
                    c = o[1];
                if (null == t) return null;
                var m = (0, p.getBusinessHours)(t).map((function(e) {
                    var t = e.day,
                        a = e.hours,
                        i = e.first,
                        l = t,
                        o = a,
                        r = !1;
                    if (i) switch (n.status) {
                        case g.BUSINESS_OPEN_STATUS.OPEN_24H:
                            l = f.default.t(437), o = f.default.t(433), r = !0;
                            break;
                        case g.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                            l = f.default.t(437), o = f.default.t(436), r = !0;
                            break;
                        case g.BUSINESS_OPEN_STATUS.OPEN:
                            l = f.default.t(437), r = !0;
                            break;
                        case g.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                            o = f.default.t(422)
                    }
                    return !i && s ? null : (0, x.jsx)(_, {
                        day: l,
                        dayIsOpen: r,
                        hours: o,
                        first: i,
                        collapsed: s
                    }, t)
                }));
                return (0, x.jsx)(v.default, {
                    xstyle: C.businessHours,
                    onClick: function() {
                        (0, d.logHoursClick)(a), c(!s)
                    },
                    a8nText: "business-hours-expand",
                    children: m
                })
            };
            var i = n(a(59713)),
                l = n(a(63038)),
                o = n(a(94184)),
                r = a(67294),
                s = (n(a(56720)), n(a(33463))),
                d = a(42661),
                u = n(a(96706)),
                c = n(a(73008)),
                f = n(a(45159)),
                h = a(49942),
                p = a(52087),
                m = n(a(7665)),
                v = n(a(76080)),
                g = a(14715),
                x = a(85893),
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
                        className: s.default.businessHoursChevron,
                        role: "button",
                        children: (0, x.jsx)(m.default, {
                            className: e.collapsed ? "" : s.default.flipSvg,
                            display: "inline",
                            name: "chevron-down-alt"
                        })
                    });
                    return (0, x.jsxs)("div", {
                        className: (0, o.default)(s.default.businessHoursRow, (0, i.default)({}, s.default.firstRow, e.first)),
                        children: [(0, x.jsx)("div", {
                            className: (0, o.default)(s.default.businessHoursDay, (0, i.default)({}, s.default.dayIsOpen, e.dayIsOpen)),
                            children: (0, x.jsx)(c.default, {
                                direction: "auto",
                                text: e.day
                            })
                        }), (0, x.jsx)("div", {
                            className: s.default.businessHoursHours,
                            children: (0, x.jsx)(c.default, {
                                direction: "auto",
                                text: e.hours
                            })
                        }), t]
                    })
                }
                return (0, x.jsxs)("div", {
                    className: s.default.businessHoursRow,
                    children: [(0, x.jsx)("div", {
                        className: s.default.businessHoursDay,
                        children: (0, x.jsx)(c.default, {
                            direction: "auto",
                            text: e.day
                        })
                    }), (0, x.jsx)("div", {
                        className: s.default.businessHoursHours,
                        children: (0, x.jsx)(c.default, {
                            direction: "auto",
                            text: e.hours
                        })
                    })]
                })
            }
        },
        95563: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a, n, C, _, S, j = e.businessProfile,
                    M = (0, g.default)(j, ["description", "address", "latitude", "longitude", "website", "email", "businessHours"]),
                    y = M.description,
                    b = M.address,
                    E = M.latitude,
                    T = M.longitude,
                    I = M.website,
                    w = M.email,
                    N = M.businessHours,
                    k = (0, l.useContext)(u.default),
                    P = (0, v.getProductCatalogSessionId)(k);
                null != y && (t = (0, x.jsx)("div", {
                    className: r.default.section,
                    children: (0, x.jsx)(h.default, {
                        text: y,
                        textLimit: d.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                        children: function(e) {
                            var t = e.textLimit;
                            return (0, x.jsx)(f.default, {
                                className: r.default.description,
                                selectable: !0,
                                direction: "auto",
                                text: y,
                                textLimit: t
                            })
                        }
                    })
                }));
                null != N && (a = (0, x.jsx)("div", {
                    className: r.default.section,
                    children: (0, x.jsx)(o.default, {
                        businessHours: N
                    })
                }));
                null != b && (n = (0, x.jsx)("div", {
                    className: r.default.section,
                    children: (0, x.jsx)(f.default, {
                        selectable: !0,
                        direction: "auto",
                        text: b
                    })
                }));
                null != E && null != T && (C = (0, x.jsx)("div", {
                    style: {
                        height: 132
                    },
                    className: (0, i.default)(r.default.section, r.default.map),
                    children: (0, x.jsx)(m.default, {
                        lat: E,
                        lng: T,
                        name: b || "",
                        width: 590,
                        height: 132,
                        onClick: function() {
                            return (0, s.logLocationClick)(P)
                        },
                        a8nText: "business-info-map"
                    })
                }));
                null != w && (_ = (0, x.jsx)("div", {
                    className: r.default.section,
                    children: (0, x.jsx)(p.default, {
                        href: `mailto:${w}`,
                        onClick: function() {
                            return (0, s.logEmailClick)(P)
                        },
                        a8nText: "business-info-email",
                        children: w
                    })
                }));
                null != I && I.length > 0 && (S = (0, x.jsx)("div", {
                    className: r.default.section,
                    children: I.map((function(e) {
                        return (0, x.jsx)("div", {
                            children: (0, x.jsx)(p.default, {
                                href: e,
                                onClick: function() {
                                    return (0, s.logWebsiteClick)(P)
                                },
                                a8nText: "business-info-website",
                                children: e
                            })
                        }, e)
                    }))
                }));
                return null == t && null == a && null == n && null == C && null == _ && null == S ? null : (0, x.jsxs)(c.default, {
                    theme: "padding",
                    children: [t, a, n, C, _, S]
                })
            };
            var i = n(a(94184)),
                l = a(67294),
                o = n(a(87338)),
                r = n(a(85938)),
                s = a(42661),
                d = n(a(94253)),
                u = n(a(96706)),
                c = n(a(46821)),
                f = n(a(73008)),
                h = n(a(86889)),
                p = n(a(49012)),
                m = n(a(83719)),
                v = a(49942),
                g = n(a(69283)),
                x = a(85893)
        },
        42661: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.logProfileImpression = function(e) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION,
                    catalogSessionId: e
                })
            }, t.logProfileExit = function(e, t) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_EXIT,
                    catalogSessionId: e,
                    scrollDepth: t
                })
            }, t.logMessageClick = function(e) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_MESSAGE,
                    catalogSessionId: e
                })
            }, t.logVoiceCallClick = function(e) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_VOICE_CALL,
                    catalogSessionId: e
                })
            }, t.logShopsClick = function(e) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_SHOPS_ICON,
                    catalogSessionId: e
                })
            }, t.logCatalogClick = function(e) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_CATALOG_ICON,
                    catalogSessionId: e
                })
            }, t.logForwardClick = function(e) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_FORWARD,
                    catalogSessionId: e
                })
            }, t.logEmailClick = function(e) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_EMAIL,
                    catalogSessionId: e
                })
            }, t.logWebsiteClick = function(e) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_WEBSITE,
                    catalogSessionId: e
                })
            }, t.logLocationClick = function(e) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_LOCATION,
                    catalogSessionId: e
                })
            }, t.logHoursClick = function(e) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_HOURS,
                    catalogSessionId: e
                })
            }, t.logStatusClick = function(e) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_STATUS,
                    catalogSessionId: e
                })
            };
            var i = n(a(50507));

            function l(e) {
                var t = new i.default.ViewBusinessProfile(e);
                t && t.commit()
            }
        },
        10403: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a, n = e.contact;
                if (n.isMyContact)
                    if (n.name !== n.verifiedName) {
                        var d;
                        n.showBusinessCheckmarkAsSecondary && (d = (0, s.jsx)("div", {
                            className: i.default.icon,
                            children: (0, s.jsx)(r.default, {
                                name: "psa-verified"
                            })
                        })), t = (0, s.jsx)(o.default, {
                            contact: n
                        }), a = (0, s.jsxs)("div", {
                            className: i.default.wrapper,
                            children: [(0, s.jsx)(l.default, {
                                text: `~${n.verifiedName}`,
                                className: i.default.verifiedText,
                                direction: "auto",
                                ellipsify: !0,
                                titlify: !0
                            }), d]
                        })
                    } else t = (0, s.jsx)(o.default, {
                        contact: n,
                        showBusinessCheckmark: n.showBusinessCheckmarkAsPrimary
                    });
                else t = (0, s.jsx)(l.default, {
                    text: n.verifiedName,
                    direction: "auto",
                    ellipsify: !0,
                    titlify: !0
                }), a = (0, s.jsx)(o.default, {
                    contact: n,
                    showBusinessCheckmark: n.showBusinessCheckmarkAsPrimary
                });
                return (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("div", {
                        className: i.default.title,
                        children: t
                    }), (0, s.jsx)("div", {
                        className: i.default.subtitle,
                        children: a
                    })]
                })
            };
            var i = n(a(90123)),
                l = n(a(73008)),
                o = n(a(1191)),
                r = n(a(7665)),
                s = a(85893)
        },
        88621: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.hours,
                    a = function(e) {
                        switch (e.status) {
                            case r.BUSINESS_OPEN_STATUS.OPEN_24H:
                                return o.default.t(434, {
                                    open: `<span class="${l.default.open}">${o.default.t(432)}</span>`
                                });
                            case r.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                                return o.default.t(435, {
                                    open: `<span class="${l.default.open}">${o.default.t(432)}</span>`
                                });
                            case r.BUSINESS_OPEN_STATUS.OPEN:
                                if (e.openUntil && e.additionalOpen && e.additionalClose) return o.default.t(439, {
                                    open: `<span class="${l.default.open}">${o.default.t(432)}</span>`,
                                    time: d(e.openUntil),
                                    additionalOpenTime: d(e.additionalOpen),
                                    additionalCloseTime: d(e.additionalClose)
                                });
                                if (e.openUntil) return o.default.t(438, {
                                    open: `<span class="${l.default.open}">${o.default.t(432)}</span>`,
                                    time: d(e.openUntil)
                                });
                                break;
                            case r.BUSINESS_OPEN_STATUS.CLOSED:
                                return e.opensAt ? o.default.t(424, {
                                    closed: `<span class="${l.default.closed}">${o.default.t(423)}</span>`,
                                    time: d(e.opensAt)
                                }) : `<span class="${l.default.closed}">${o.default.t(423)}</span>`;
                            case r.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                                return `<span class="${l.default.closed}">${o.default.t(425)}</span>`
                        }
                        return null
                    }((0, r.getBusinessOpenState)(t));
                if (null == a) return null;
                var n = i.default.sanitize(a);
                return (0, s.jsx)("div", {
                    className: l.default.openStatus,
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                })
            };
            var i = n(a(27856)),
                l = n(a(44920)),
                o = n(a(45159)),
                r = a(14715),
                s = a(85893);

            function d(e) {
                return null == e ? "" : e.toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit"
                })
            }
        },
        98481: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BusinessProfile = k, t.default = void 0;
            var i = n(a(63038)),
                l = n(a(94184)),
                o = a(67294),
                r = n(a(93306)),
                s = n(a(36230)),
                d = n(a(35100)),
                u = n(a(65901)),
                c = n(a(94253)),
                f = n(a(81218)),
                h = n(a(61876)),
                p = n(a(46821)),
                m = n(a(73008)),
                v = n(a(86889)),
                g = n(a(49012)),
                x = n(a(38032)),
                C = a(2629),
                _ = n(a(45159)),
                S = n(a(62848)),
                j = n(a(83719)),
                M = a(46061),
                y = n(a(50507)),
                b = a(52087),
                E = n(a(85651)),
                T = n(a(7665)),
                I = n(a(69283)),
                w = a(85893),
                N = c.default.VERIFIED_LEVEL;

            function k(e) {
                var t, a = (0, I.default)(e.contact, ["id", "verifiedLevel", "name", "verifiedName"]),
                    n = (0, I.default)(e.businessProfile, ["description", "categories", "website", "email", "stale", "latitude", "longitude", "businessHours", "structuredAddress"]),
                    l = (0, o.useState)(!0),
                    k = (0, i.default)(l, 2),
                    O = k[0],
                    R = k[1];
                (0, o.useEffect)((function() {
                    new y.default.ViewBusinessProfile({
                        viewBusinessProfileAction: y.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION
                    }).commit()
                }), []);
                var D, L, F, B, G, V, U, H, W = function() {
                        R(!O)
                    },
                    q = function() {
                        u.default.openModal((0, w.jsx)(r.default, {
                            contact: a
                        }))
                    },
                    z = function() {
                        u.default.openModal((0, w.jsx)(s.default, {
                            contact: a
                        }))
                    };
                (0, C.canSeeSMBUpsell)() ? (D = a.verifiedLevel === N.HIGH ? _.default.t(468) : _.default.t(445), t = (0, w.jsx)(f.default, {
                    a8nText: "business-title",
                    onClick: z,
                    side: (0, w.jsx)(T.default, {
                        className: d.default.infoIcon,
                        display: "inline",
                        name: "info"
                    }),
                    children: D
                })) : t = x.default.supportsFeature(x.default.F.VNAME_V_2) ? function() {
                    var e;
                    switch (a.verifiedLevel) {
                        case N.HIGH:
                            e = _.default.t(468);
                            break;
                        case N.LOW:
                        case N.UNKNOWN:
                            e = _.default.t(445)
                    }
                    return (0, w.jsx)(h.default, {
                        a8nText: "business-title",
                        className: d.default.businessTitleText,
                        onClick: q,
                        children: e
                    })
                }() : function() {
                    var e, t = a,
                        n = !t.name || t.name === t.verifiedName,
                        i = "psa-unverified";
                    switch (t.verifiedLevel) {
                        case N.HIGH:
                            i = "psa-verified", n ? e = (0, w.jsx)(m.default, {
                                className: d.default.verifiedLabel,
                                text: _.default.t(473)
                            }) : (e = (0, w.jsx)(m.default, {
                                className: d.default.verifiedLabel,
                                text: _.default.t(471)
                            }), e = (0, w.jsx)(S.default, {
                                id: 472,
                                params: {
                                    verified: e,
                                    businessName: t.verifiedName
                                }
                            }));
                            break;
                        case N.LOW:
                            e = n ? (0, w.jsx)(m.default, {
                                text: _.default.t(450)
                            }) : _.default.t(449, {
                                businessName: t.verifiedName
                            });
                            break;
                        case N.UNKNOWN:
                            e = _.default.t(445)
                    }
                    return (0, w.jsx)(A, {
                        icon: i,
                        className: d.default.businessMarker,
                        onClick: q,
                        children: e
                    })
                }();
                var Y, K, X, Z, $, Q, J, ee, te, ae = n;
                if (ae.stale) L = (0, w.jsx)("div", {
                    className: d.default.contactBusinessInfoSpinner,
                    children: (0, w.jsx)(E.default, {
                        size: 20,
                        stroke: 5
                    })
                });
                else if (F = ae.categories && ae.categories.length ? (0, w.jsx)(A, {
                        icon: "business-category",
                        children: (0, w.jsx)(m.default, {
                            selectable: !0,
                            direction: "auto",
                            text: ae.categories.map((function(e) {
                                return e.localized_display_name
                            })).join(_.default.t(826))
                        })
                    }) : null, B = ae.description ? (0, w.jsx)(A, {
                        icon: "business-description",
                        children: (0, w.jsx)(v.default, {
                            text: ae.description,
                            textLimit: c.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                            children: function(e) {
                                var t = e.textLimit;
                                return (0, w.jsx)(m.default, {
                                    selectable: !0,
                                    direction: "auto",
                                    breakWord: !0,
                                    text: ae.description,
                                    textLimit: t
                                })
                            }
                        })
                    }) : null, Y = a.name, K = ae.latitude, X = ae.longitude, Z = ae.structuredAddress, ee = Z ? function(e) {
                        var t = e.streetAddress,
                            a = e.localizedCityName,
                            n = e.zipCode;
                        return t && a && n ? _.default.t(444, {
                            streetAddress: t,
                            city: a,
                            zipCode: n
                        }) : t && a ? _.default.t(443, {
                            streetAddress: t,
                            city: a
                        }) : t
                    }(Z) : null, null != K && null != X && ($ = (0, w.jsx)("div", {
                        style: {
                            height: 150
                        },
                        className: d.default.businessMap,
                        children: (0, w.jsx)(j.default, {
                            lat: K,
                            lng: X,
                            name: ee || Y,
                            width: 565,
                            height: 150
                        })
                    })), ee && (J = null != K && null != X ? (0, M.getMapUrl)(K, X, ee) : (0, M.getSearchUrl)(ee), Q = (0, w.jsx)("div", {
                        className: d.default.address,
                        children: (0, w.jsx)(g.default, {
                            href: J,
                            children: (0, w.jsx)(m.default, {
                                selectable: !0,
                                direction: "auto",
                                text: ee
                            })
                        })
                    })), G = Q || $ ? (0, w.jsxs)(A, {
                        icon: "business-address",
                        children: [Q, $]
                    }) : null, ae.website && Array.isArray(ae.website) && ae.website.length && (V = ae.website.map((function(e, t) {
                        var a = (0, b.getWebsiteLink)(e),
                            n = (0, w.jsx)(m.default, {
                                selectable: !0,
                                direction: "auto",
                                text: e
                            }),
                            i = (0, w.jsx)(g.default, {
                                className: d.default.link,
                                href: a,
                                children: n
                            });
                        return (0, w.jsx)(A, {
                            icon: "business-website",
                            children: i
                        }, t)
                    }))), ae.businessHours && (U = function(e) {
                        var t = (0, b.getBusinessHours)(e).map((function(e) {
                            var t = e.day,
                                a = e.hours,
                                n = e.first;
                            return !n && O ? null : (0, w.jsx)(P, {
                                day: t,
                                hours: a,
                                first: n,
                                collapsed: O
                            }, t)
                        }));
                        return (0, w.jsx)(A, {
                            icon: "business-hours",
                            onClick: W,
                            children: t
                        })
                    }(ae.businessHours)), ae.email) {
                    var ne = (0, w.jsx)(m.default, {
                            selectable: !0,
                            direction: "auto",
                            text: ae.email
                        }),
                        ie = (0, w.jsx)(g.default, {
                            className: d.default.link,
                            href: `mailto:${ae.email}`,
                            children: ne
                        });
                    H = (0, w.jsx)(A, {
                        icon: "business-email",
                        dir: "auto",
                        children: ie
                    })
                }
                return (L || null != G || F || B || null != U || H || V) && (te = (0, w.jsx)(p.default, {
                    theme: "padding",
                    children: (0, w.jsxs)("div", {
                        className: d.default.contactBusinessInfo,
                        children: [L, G, F, B, U, H, V]
                    })
                })), (0, w.jsxs)(w.Fragment, {
                    children: [(0, w.jsx)(p.default, {
                        children: t
                    }), te]
                })
            }
            var P = function(e) {
                    var t = e.first ? (0, w.jsx)("div", {
                        className: d.default.businessHoursChevron,
                        role: "button",
                        children: (0, w.jsx)(T.default, {
                            className: e.collapsed ? "" : d.default.flipSvg,
                            display: "inline",
                            name: "chevron-down-alt"
                        })
                    }) : null;
                    return (0, w.jsxs)("div", {
                        className: d.default.businessHoursRow,
                        children: [(0, w.jsx)("div", {
                            className: d.default.businessHoursDay,
                            children: (0, w.jsx)(m.default, {
                                direction: "auto",
                                text: e.day
                            })
                        }), (0, w.jsx)("div", {
                            className: d.default.businessHoursHours,
                            children: (0, w.jsx)(m.default, {
                                direction: "auto",
                                text: e.hours
                            })
                        }), t]
                    })
                },
                A = function(e) {
                    return (0, w.jsxs)("div", {
                        className: (0, l.default)(d.default.dataRow, e.className),
                        onClick: e.onClick,
                        children: [(0, w.jsx)("div", {
                            className: d.default.dataRowIcon,
                            children: (0, w.jsx)(T.default, {
                                name: e.icon
                            })
                        }), (0, w.jsx)("div", {
                            className: d.default.dataRowText,
                            children: e.children
                        })]
                    })
                },
                O = k;
            t.default = O
        },
        34736: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a = e.contact,
                    n = e.businessProfile,
                    h = e.onOpenStatus,
                    p = e.onProductCatalog,
                    m = e.onProfilePicLoad,
                    v = e.onProfilePicClick,
                    g = (0, c.default)(n, ["businessHours", "categories"]),
                    x = g.businessHours,
                    C = g.categories,
                    _ = (0, f.jsx)(l.default, {
                        contact: a
                    });
                null != C && C.length > 0 && (t = (0, f.jsx)("div", {
                    className: r.default.categories,
                    children: C.map((function(e) {
                        return e.localized_display_name
                    })).join(u.default.t(825))
                }));
                var S = x ? (0, f.jsx)(o.default, {
                    hours: x
                }) : null;
                return (0, f.jsxs)(d.default, {
                    className: r.default.noPaddingBottom,
                    theme: "padding",
                    children: [(0, f.jsx)(s.default, {
                        contact: a,
                        onClick: v,
                        onOpenStatus: h,
                        onLoad: m
                    }), (0, f.jsxs)("div", {
                        className: r.default.info,
                        children: [_, t, S, (0, f.jsx)(i.default, {
                            contact: a,
                            onProductCatalog: p
                        })]
                    })]
                })
            };
            var i = n(a(86989)),
                l = n(a(10403)),
                o = n(a(88621)),
                r = n(a(8342)),
                s = n(a(80966)),
                d = n(a(46821)),
                u = n(a(45159)),
                c = n(a(69283)),
                f = a(85893)
        },
        68029: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact;
                return (0, s.jsx)(i.ChatInfoDrawerSection, {
                    newChatInfo: !0,
                    a8nText: "section-about",
                    title: l.default.t(723),
                    children: (0, s.jsx)(r.TextSpan, {
                        theme: "title",
                        size: "16",
                        children: (0, s.jsx)(o.default, {
                            id: t.id
                        })
                    })
                })
            };
            var i = a(82506),
                l = n(a(45159)),
                o = n(a(61359)),
                r = a(22552),
                s = a(85893)
        },
        47549: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, j.default)(e.contact);
                return (0, M.jsx)(b, (0, l.default)((0, l.default)({}, e), {}, {
                    newChatInfo: t
                }))
            };
            var l = i(a(81109)),
                o = i(a(34575)),
                r = i(a(93913)),
                s = i(a(2205)),
                d = i(a(99842)),
                u = a(67294),
                c = n(a(97397)),
                f = a(82506),
                h = i(a(65901)),
                p = i(a(94253)),
                m = i(a(98303)),
                v = a(84495),
                g = i(a(73568)),
                x = i(a(45159)),
                C = i(a(63641)),
                _ = i(a(61897)),
                S = a(22552),
                j = i(a(25319)),
                M = a(85893),
                y = function(e) {
                    (0, s.default)(a, e);
                    var t = (0, d.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l];
                        return (e = t.call.apply(t, [this].concat(i)))._commonGroupInitialized = !1, e.state = {
                            collapsed: !1,
                            numGroups: 0
                        }, e.rerender = function() {
                            e.forceUpdate()
                        }, e.handleClick = function(t, a) {
                            h.default.openChatFromUnread(a).then((function(e) {
                                e && h.default.focusChatTextInput(a)
                            })), e.props.onClose()
                        }, e.handleShowMore = function() {
                            e.setState({
                                collapsed: !1
                            })
                        }, e.renderItem = function(t) {
                            var a = t.chat,
                                n = t.showNewChatInfo;
                            return (0, M.jsx)(c.default, {
                                chat: a,
                                theme: n ? "new-chat-info" : "drawer-list",
                                contact: a.contact,
                                mode: c.Mode.INFO,
                                onClick: e.handleClick
                            }, a.id.toString())
                        }, e
                    }
                    return (0, r.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.contact.commonGroups;
                            e && (this.props.listeners.add(e, "add remove", this.rerender), this._commonGroupInitialized = !0), (0, v.findCommonGroups)(this.props.contact).catch((function() {
                                throw __LOG__(4, !0, new Error, !0)`get from participants table failed`, SEND_LOGS("get from participants table failed when finding common groups"), new Error("get from participants table failed")
                            }))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            if (e.contact !== this.props.contact) {
                                var t = e.contact.commonGroups;
                                t && e.listeners.remove(t, "add remove", this.rerender), this._commonGroupInitialized = !1
                            }
                            var a = this.props.contact.commonGroups;
                            a && (this._commonGroupInitialized || (this.props.listeners.add(a, "add remove", this.rerender), this._commonGroupInitialized = !0))
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
                            return t.length > p.default.INFO_DRAWER_MAX_ROWS && this.state.collapsed && (t = t.slice(0, p.default.INFO_DRAWER_MAX_ROWS)), t.map((function(t) {
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
                                a = this.props.newChatInfo;
                            if (!t || !t.length) return null;
                            if (t.length > p.default.INFO_DRAWER_MAX_ROWS && this.state.collapsed) {
                                var n = t.length - p.default.INFO_DRAWER_MAX_ROWS;
                                e = (0, M.jsx)(m.default, {
                                    numMore: n,
                                    onClick: this.handleShowMore,
                                    newChatInfo: this.props.newChatInfo
                                })
                            }
                            var i = a ? x.default.t(725, {
                                    number: x.default.n(t.length),
                                    _plural: t.length
                                }) : x.default.t(2069),
                                l = a ? null : (0, M.jsx)(S.TextSpan, {
                                    theme: "section-title",
                                    children: x.default.n(t.length)
                                });
                            return (0, M.jsxs)(f.ChatInfoDrawerListSection, {
                                newChatInfo: a,
                                a8nText: "section-common-groups",
                                title: i,
                                subtitle: l,
                                children: [(0, M.jsx)(g.default, {
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
                            var a = e.contact.commonGroups,
                                n = a ? a.length : 0;
                            return t.numGroups <= p.default.INFO_DRAWER_MAX_ROWS && n > p.default.INFO_DRAWER_MAX_ROWS ? {
                                numGroups: n,
                                collapsed: !0
                            } : {
                                numGroups: n
                            }
                        }
                    }]), a
                }(u.Component);
            y.CONCERNS = {
                contact: ["commonGroups", "isBusiness"]
            }, y.displayName = "ContactInfoCommonGroupsBase";
            var b = (0, C.default)((0, _.default)(y, y.CONCERNS))
        },
        28201: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, re.default)(e.contact),
                    a = (0, se.default)();
                return (0, je.jsx)(be, (0, l.default)((0, l.default)({}, e), {}, {
                    newChatInfo: t,
                    style: t ? a : null
                }))
            };
            var l = i(a(81109)),
                o = i(a(34575)),
                r = i(a(93913)),
                s = i(a(2205)),
                d = i(a(99842)),
                u = a(18077),
                c = a(67294),
                f = i(a(11218)),
                h = i(a(95563)),
                p = a(42661),
                m = i(a(98481)),
                v = a(19218),
                g = i(a(34736)),
                x = i(a(18330)),
                C = i(a(13833)),
                _ = i(a(4481)),
                S = a(82506),
                j = i(a(83399)),
                M = i(a(65901)),
                y = i(a(68029)),
                b = i(a(47549)),
                E = i(a(94504)),
                T = i(a(95582)),
                I = i(a(16016)),
                w = i(a(5702)),
                N = a(73092),
                k = i(a(53187)),
                P = i(a(81218)),
                A = i(a(18345)),
                O = i(a(61876)),
                R = i(a(96706)),
                D = n(a(19288)),
                L = i(a(46821)),
                F = i(a(90675)),
                B = i(a(92546)),
                G = i(a(38032)),
                V = a(2629),
                U = i(a(2424)),
                H = i(a(29015)),
                W = i(a(45159)),
                q = i(a(63641)),
                z = i(a(592)),
                Y = i(a(50507)),
                K = i(a(59603)),
                X = i(a(40071)),
                Z = a(49942),
                $ = i(a(77429)),
                Q = i(a(5202)),
                J = a(96197),
                ee = i(a(43463)),
                te = i(a(18815)),
                ae = i(a(61897)),
                ne = i(a(61359)),
                ie = i(a(7665)),
                le = a(22552),
                oe = n(a(92428)),
                re = i(a(25319)),
                se = i(a(16637)),
                de = a(59175),
                ue = i(a(55234)),
                ce = i(a(43890)),
                fe = a(21283),
                he = a(89183),
                pe = a(11116),
                me = a(1577),
                ve = i(a(96178)),
                ge = i(a(40232)),
                xe = a(29281),
                Ce = a(96484),
                _e = i(a(22715)),
                Se = i(a(40450)),
                je = a(85893),
                Me = function(e) {
                    (0, s.default)(a, e);
                    var t = (0, d.default)(a);

                    function a(e) {
                        var n;
                        return (0, o.default)(this, a), (n = t.call(this, e)).flatListController = new B.default, n.handleVerificationClick = function() {
                            n.props.onVerification()
                        }, n._handleDeleteChat = function() {
                            var e = _.default.assertGet(n.props.contact.id);
                            M.default.deleteOrExitChat(e)
                        }, n.handleClose = function() {
                            n.props.onClose ? n.props.onClose() : n.props.uim.uie.requestDismiss()
                        }, n._handleViewPicture = function(e) {
                            if (n._canViewPicture) {
                                var t = e.target;
                                M.default.openModalMedia((0, je.jsx)(X.default, {
                                    contact: n.props.contact,
                                    profilePicThumb: n.props.contact.getProfilePicThumb(),
                                    animateBorderRadius: !0,
                                    getZoomNode: function(e) {
                                        e(t)
                                    }
                                }), {
                                    transition: "profile-viewer",
                                    uim: n.props.uim
                                })
                            } else M.default.openToast((0, je.jsx)(oe.default, {
                                id: (0, oe.genId)(),
                                msg: W.default.t(1395)
                            }))
                        }, n._handleOpenStatus = function() {
                            (0, p.logStatusClick)((0, Z.getProductCatalogSessionId)(n.context))
                        }, n._handleDetailImageLoad = function() {
                            n._canViewPicture = !0
                        }, n._canViewPicture = !1, n.state = {
                            scrollDepth: 100
                        }, n
                    }
                    return (0, r.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.contact;
                            e.businessProfile && !e.businessProfile.stale && e.businessCatalog && x.default.findCarouselCatalog(e.id).catch((0, u.filteredCatch)(de.ServerStatusCodeError, (function() {
                                __LOG__(3)`Failed to fetch product catalog in contact drawer from server`
                            }))), G.default.supportsFeature(G.default.F.MD_BACKEND) && (0, pe.getFanOutList)([e.id, (0, me.assertGetMe)()]).then((function(e) {
                                (0, fe.ensureE2ESessions)(e)
                            })), (0, Z.getProductCatalogContext)(this.context).session.isAccidental() ? M.default.setDrawerContext("right", (0, Z.buildProductCatalogContext)(new $.default, (0, N.getMaybeBizPlatformForLogging)(e.id.toString()), Y.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE)) : e.isBusiness && (0, V.canSeeBizProfileV3)() && (0, p.logProfileImpression)((0, Z.getProductCatalogSessionId)(this.context))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.props.contact;
                            (0, Z.getProductCatalogContext)(this.context).session.isAccidental() || e.isBusiness && (0, V.canSeeBizProfileV3)() && (0, p.logProfileExit)((0, Z.getProductCatalogSessionId)(this.context), this.state.scrollDepth)
                        }
                    }, {
                        key: "_shouldRenderCatalog",
                        value: function() {
                            var e = this.props.contact;
                            return !!(e && e.isBusiness && e.businessProfile) && !!e.businessCatalog
                        }
                    }, {
                        key: "_renderBusinessProfileTopCard",
                        value: function() {
                            return this.props.contact.businessProfile ? (0, je.jsx)(g.default, {
                                contact: this.props.contact,
                                onProfilePicLoad: this._handleDetailImageLoad,
                                onProfilePicClick: this._handleViewPicture,
                                onOpenStatus: this._handleOpenStatus,
                                businessProfile: this.props.contact.businessProfile,
                                onProductCatalog: this.props.onProductCatalog
                            }) : null
                        }
                    }, {
                        key: "_renderTopCard",
                        value: function() {
                            var e = this.props.contact;
                            return (0, V.canSeeBizProfileV3)() && e.isBusiness ? this._renderBusinessProfileTopCard() : (0, je.jsx)(w.default, {
                                contact: e,
                                onDetailImageLoad: this._handleDetailImageLoad,
                                onDetailImageClick: this._handleViewPicture
                            })
                        }
                    }, {
                        key: "_handleScroll",
                        value: function(e) {
                            var t = Math.floor(100 * (1 + e.currentTarget.scrollTop / e.currentTarget.offsetHeight));
                            t > this.state.scrollDepth && this.setState({
                                scrollDepth: t
                            })
                        }
                    }, {
                        key: "renderProductCatalogSection",
                        value: function() {
                            if (!this._shouldRenderCatalog()) return null;
                            var e = this.props,
                                t = e.contact,
                                a = e.onProductCatalog,
                                n = e.onProductDetail,
                                i = x.default.get(t.id);
                            if (!i) return null;
                            var l = "",
                                o = !1;
                            return (0, V.canSeeBizProfileV3)() && (l = W.default.t(553), o = !0), (0, Z.getProductCatalogContext)(this.context).session.isAccidental() ? null : (0, v.hasShop)(t.businessProfile) ? (0, je.jsx)(te.default, {
                                businessProfile: t.businessProfile,
                                catalog: i,
                                subtitle: l,
                                hideIncompleteRows: o
                            }) : (0, je.jsx)(C.default, {
                                onProductDetail: n,
                                onProductCatalog: a,
                                catalog: i,
                                subtitle: l,
                                hideIncompleteRows: o,
                                shouldLog: !0
                            })
                        }
                    }, {
                        key: "renderButtons",
                        value: function() {
                            var e, t = this.props.contact;
                            return _.default.get(t.id) && (e = (0, je.jsx)(O.default, {
                                a8nText: "li-delete-chat",
                                icon: (0, je.jsx)(ie.default, {
                                    name: "delete"
                                }),
                                color: "danger",
                                onClick: this._handleDeleteChat,
                                theme: this.props.newChatInfo ? "new-chat-info" : null,
                                children: W.default.t(757)
                            })), (0, je.jsxs)(je.Fragment, {
                                children: [(0, je.jsx)(T.default, {
                                    contact: t
                                }), (0, je.jsx)(S.ChatInfoDrawerButtonsSection, {
                                    newChatInfo: this.props.newChatInfo,
                                    children: e
                                })]
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.contact,
                                t = (0, je.jsx)(b.default, {
                                    contact: this.props.contact,
                                    onClose: this.handleClose,
                                    flatListController: this.flatListController
                                }),
                                a = _.default.get(e.id),
                                n = null;
                            this.props.onMediaGallery && a && (n = (0, je.jsx)(j.default, {
                                chat: a,
                                onMediaGallery: this.props.onMediaGallery
                            }));
                            var i = null;
                            G.default.supportsFeature(G.default.F.LIVE_LOCATIONS) && a && (i = (0, je.jsx)(z.default, {
                                chat: a,
                                onClick: this.props.onLiveLocation
                            }));
                            var l = null,
                                o = null;
                            (0, V.canSeeBizProfileV3)() ? o = this.renderProductCatalogSection(): l = this.renderProductCatalogSection();
                            var r, s = a && a.mute.canMute() ? (0, je.jsx)(K.default, {
                                    chat: a,
                                    mute: a.mute,
                                    settings: ee.default,
                                    theme: this.props.newChatInfo ? "new-chat-info" : null
                                }) : null,
                                d = null;
                            if (this.props.onStarred && !this.props.newChatInfo) {
                                var u = (0, je.jsx)(ie.default, {
                                    className: E.default.chevron,
                                    name: "chevron-right-alt",
                                    directional: !0
                                });
                                d = (0, je.jsx)(P.default, {
                                    a8nText: "block-starred-messages",
                                    side: u,
                                    onClick: this.props.onStarred,
                                    children: (0, je.jsx)(le.TextSpan, {
                                        theme: "title",
                                        children: W.default.t(594)
                                    })
                                })
                            }
                            this.props.onStarred && this.props.newChatInfo && (r = (0, je.jsx)(I.default, {
                                chat: a,
                                onStarred: this.props.onStarred,
                                onContactCard: this.props.onContactCard
                            }));
                            var c = a && a.shouldShowEphemeralSetting() ? (0, je.jsx)(F.default, {
                                    onClick: this.props.onEphemeral,
                                    chat: a,
                                    theme: this.props.newChatInfo ? "new-chat-info" : null
                                }) : null,
                                p = null,
                                v = a && a.getReceivedVcardMsgs();
                            if (G.default.supportsFeature(G.default.F.INDEX_RECEIVED_VCARD) && v && v.length && !this.props.newChatInfo) {
                                var g = (0, je.jsx)(ie.default, {
                                    className: E.default.chevron,
                                    name: "chevron-right-alt",
                                    directional: !0
                                });
                                p = (0, je.jsx)(P.default, {
                                    a8nText: "block-contact-card",
                                    side: g,
                                    onClick: this.props.onContactCard,
                                    children: (0, je.jsx)(le.TextSpan, {
                                        theme: "title",
                                        children: W.default.t(722, {
                                            _plural: v.length
                                        })
                                    })
                                })
                            }
                            var x = G.default.supportsFeature(G.default.F.MD_BACKEND) ? (0, je.jsx)(ye, {
                                    reducedPrivacyMode: (0, he.getReducedPrivacyMode)(this.props.contact.privacyMode),
                                    onVerificationClick: this.handleVerificationClick,
                                    contactId: this.props.contact.id,
                                    theme: this.props.newChatInfo ? "new-chat-info" : null
                                }) : null,
                                C = null;
                            (s || d || c || p || x) && (C = this.props.newChatInfo ? (0, je.jsxs)(S.ChatInfoDrawerSection, {
                                newChatInfo: !0,
                                children: [s, c, x]
                            }) : (0, je.jsxs)(S.ChatInfoDrawerSection, {
                                newChatInfo: !1,
                                children: [s, d, c, p, x]
                            }));
                            var M, T, w = (0, je.jsx)(P.default, {
                                    multiline: !0,
                                    children: (0, je.jsx)(le.TextSpan, {
                                        theme: "title",
                                        children: (0, je.jsx)(ne.default, {
                                            id: e.id
                                        })
                                    })
                                }),
                                N = (0, je.jsx)(P.default, {
                                    children: (0, je.jsx)(J.SelectableSpan, {
                                        dir: "auto",
                                        selectable: !0,
                                        children: (0, je.jsx)(le.TextSpan, {
                                            theme: "title",
                                            children: (0, ue.default)(e.id)
                                        })
                                    })
                                }),
                                O = this.props.newChatInfo && !e.isBusiness,
                                R = O ? null : (0, je.jsxs)(L.default, {
                                    a8nText: "section-about-and-phone-number",
                                    title: W.default.t(726),
                                    children: [w, N]
                                }),
                                B = O ? (0, je.jsx)(y.default, {
                                    contact: e
                                }) : null,
                                U = this._renderTopCard(),
                                q = null,
                                Y = void 0;
                            return e.isBusiness && e.businessProfile && ((0, V.canSeeBizProfileV3)() && e.businessProfile ? (q = (0, je.jsx)(h.default, {
                                businessProfile: e.businessProfile
                            }), M = (0, je.jsx)(f.default, {
                                contact: e
                            }), e.labels && e.labels.length > 0 && (T = (0, je.jsx)(L.default, {
                                theme: "padding",
                                children: (0, je.jsx)(H.default, {
                                    labels: e.labels,
                                    theme: "standalone"
                                })
                            })), Y = this._handleScroll.bind(this)) : e.businessProfile && (q = (0, je.jsx)(m.default, {
                                contact: e,
                                businessProfile: e.businessProfile
                            }))), (0, je.jsxs)(k.default, {
                                theme: "striped",
                                style: this.props.style,
                                children: [(0, je.jsx)(D.default, {
                                    title: W.default.t(1950),
                                    type: D.DRAWER_HEADER_TYPE.SMALL,
                                    darwinRtlFix: !0,
                                    onCancel: this.handleClose
                                }), (0, je.jsx)(A.default, {
                                    flatListControllers: [this.flatListController],
                                    onScroll: Y,
                                    children: (0, je.jsxs)("section", {
                                        className: E.default.body,
                                        children: [U, M, T, o, q, i, l, B, n, r, C, R, undefined, t, this.renderButtons()]
                                    })
                                })]
                            }, "contact-info-modal")
                        }
                    }]), a
                }(c.Component);

            function ye(e) {
                var t = e.reducedPrivacyMode,
                    a = e.onVerificationClick,
                    n = e.contactId,
                    i = e.theme,
                    o = ge.default.isVoiceCallEnabled() || ge.default.isVideoCallEnabled() ? W.default.t(1954) : W.default.t(1953);
                if (ce.default.bspSystemMessageEnabled) {
                    var r = function(e, t) {
                            if ((0, Se.default)(t.user)) return {
                                text: W.default.t(1701),
                                title: W.default.t(729),
                                onClick: function() {
                                    (0, _e.default)(W.default.t(1699), (0, xe.getSupportChatSafetyFaqUrl)(), W.default.t(1700))
                                }
                            };
                            switch (e) {
                                case he.ReducedPrivacyMode.E2EE:
                                    return (0, l.default)({}, null);
                                case he.ReducedPrivacyMode.BSP:
                                    return {
                                        text: W.default.t(303), title: W.default.t(729), onClick: function() {
                                            (0, _e.default)((0, Ce.formatBspModalText)(), (0, xe.getE2EEnterpriseFaqUrl)())
                                        }
                                    };
                                case he.ReducedPrivacyMode.FB:
                                    return {
                                        text: W.default.t(304), title: W.default.t(729), onClick: function() {
                                            (0, _e.default)((0, Ce.formatFbModalText)(), (0, xe.getE2EEnterpriseFaqUrl)())
                                        }
                                    }
                            }
                        }(t, n),
                        s = r.title,
                        d = r.text,
                        u = r.onClick;
                    return (0, je.jsx)(ve.default, {
                        title: s,
                        text: null != d ? d : o,
                        onClick: null != u ? u : a,
                        theme: i
                    })
                }
                return (0, je.jsx)(ve.default, {
                    onClick: a,
                    text: o,
                    theme: i
                })
            }
            Me.contextType = R.default, Me.CONCERNS = {
                contact: ["id", "formattedName", "formattedUser", "formattedShortName", "isBusiness", "isEnterprise", "isMyContact", "commonGroups", "businessProfile", "showBusinessCheckmarkAsPrimary", "showBusinessCheckmarkAsSecondary", "verifiedName", "verifiedLevel", "name", "notifyName", "labels", "businessCatalog", "isMe", "statusMute", "privacyMode", "displayName"]
            }, Me.displayName = "ContactInfoDrawerBase";
            var be = (0, U.default)((0, Q.default)((0, q.default)((0, ae.default)(Me, Me.CONCERNS))))
        },
        95582: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, x.default)(e.contact),
                    a = t ? "new-chat-info" : null,
                    n = (0, g.default)(e.contact, ["displayName", "isBusiness", "isContactBlocked"]),
                    _ = null;
                if (n.isContactBlocked) {
                    var S = t ? u.default.t(727, {
                        contact: n.displayName
                    }) : u.default.t(1733);
                    _ = (0, C.jsx)(d.default, {
                        a8nText: "li-unblock",
                        color: "success",
                        icon: (0, C.jsx)(v.default, {
                            name: "settings-blocked",
                            directional: !0
                        }),
                        onClick: function() {
                            r.default.openModal((0, C.jsx)(s.default, {
                                okText: u.default.t(1733),
                                onOK: function() {
                                    (0, i.unblockContact)(e.contact), r.default.closeModal()
                                },
                                cancelText: u.default.t(1938),
                                onCancel: function() {
                                    return r.default.closeModal()
                                },
                                children: (0, C.jsx)(c.default, {
                                    id: 1734,
                                    params: {
                                        contact: (0, C.jsx)(f.default, {
                                            contact: e.contact
                                        })
                                    }
                                })
                            }))
                        },
                        theme: a,
                        children: S
                    })
                } else {
                    var j = t ? u.default.t(724, {
                        contact: n.displayName
                    }) : u.default.t(320);
                    _ = (0, C.jsx)(d.default, {
                        a8nText: "li-block",
                        color: "danger",
                        icon: (0, C.jsx)(v.default, {
                            name: "settings-blocked",
                            directional: !0
                        }),
                        onClick: function() {
                            r.default.openModal((0, C.jsx)(s.default, {
                                onOK: function() {
                                    (0, i.blockContact)(e.contact), r.default.closeModal()
                                },
                                okText: u.default.t(320),
                                onCancel: function() {
                                    return r.default.closeModal()
                                },
                                cancelText: u.default.t(1938),
                                children: (0, C.jsx)(c.default, {
                                    id: 322,
                                    params: {
                                        contact: (0, C.jsx)(f.default, {
                                            contact: e.contact
                                        })
                                    }
                                })
                            }))
                        },
                        theme: a,
                        children: j
                    })
                }
                var M = u.default.t(1538);
                n.isBusiness || (M = t ? u.default.t(1544, {
                    contactInfo: n.displayName
                }) : u.default.t(1541));
                var y = (0, C.jsx)(d.default, {
                    a8nText: "li-report-spam",
                    color: "danger",
                    icon: (0, C.jsx)(v.default, {
                        name: "thumbs-down",
                        directional: !0
                    }),
                    onClick: function() {
                        r.default.openModal((0, C.jsx)(h.default, {
                            isBusiness: e.contact.isBusiness,
                            isGroupChat: !1,
                            onReport: function() {
                                var t = l.default.get(e.contact.id);
                                t && (0, p.sendSpamReport)(t, m.SpamFlow.Account), r.default.closeModal()
                            },
                            onReportBlockClear: function() {
                                var t = l.default.get(e.contact.id);
                                t && (0, p.sendSpamBlockClear)(t, m.SpamFlow.Block), r.default.closeModal()
                            },
                            onCancel: function() {
                                return r.default.closeModal()
                            }
                        }))
                    },
                    theme: a,
                    children: M
                });
                return t ? (0, C.jsxs)(o.ChatInfoDrawerButtonsSection, {
                    newChatInfo: !0,
                    children: [_, y]
                }) : (0, C.jsxs)(C.Fragment, {
                    children: [(0, C.jsx)(o.ChatInfoDrawerButtonsSection, {
                        newChatInfo: !1,
                        children: _
                    }), (0, C.jsx)(o.ChatInfoDrawerButtonsSection, {
                        newChatInfo: !1,
                        children: y
                    })]
                })
            };
            var i = a(84533),
                l = n(a(4481)),
                o = a(82506),
                r = n(a(65901)),
                s = n(a(86777)),
                d = n(a(61876)),
                u = n(a(45159)),
                c = n(a(62848)),
                f = n(a(1191)),
                h = n(a(51497)),
                p = a(43329),
                m = a(24170),
                v = n(a(7665)),
                g = n(a(69283)),
                x = n(a(25319)),
                C = a(85893)
        },
        16016: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.chat,
                    a = e.onStarred,
                    n = e.onContactCard,
                    u = null,
                    c = t && t.getReceivedVcardMsgs();
                o.default.supportsFeature(o.default.F.INDEX_RECEIVED_VCARD) && c && c.length && (u = (0, d.jsx)(i.default, {
                    a8nText: "block-starred-messages",
                    side: "chevron",
                    icon: "account-box",
                    onClick: n,
                    children: (0, d.jsx)(s.TextSpan, {
                        theme: "title",
                        children: r.default.t(722, {
                            _plural: c.length
                        })
                    })
                }));
                return (0, d.jsxs)(l.ChatInfoDrawerSection, {
                    a8nText: "section-starred-messages",
                    newChatInfo: !0,
                    children: [(0, d.jsx)(i.default, {
                        a8nText: "block-starred-messages",
                        side: "chevron",
                        icon: "star",
                        onClick: a,
                        children: (0, d.jsx)(s.TextSpan, {
                            theme: "title",
                            size: "16",
                            children: r.default.t(594)
                        })
                    }), u]
                })
            };
            var i = n(a(98350)),
                l = a(82506),
                o = n(a(38032)),
                r = n(a(45159)),
                s = a(22552),
                d = a(85893)
        },
        5702: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, _.default)(e.contact) ? (0, y.jsx)(P, (0, l.default)({}, e)) : (0, y.jsx)(w, (0, l.default)({}, e))
            };
            var l = i(a(81109)),
                o = i(a(56720)),
                r = i(a(98056)),
                s = i(a(4481)),
                d = n(a(66834)),
                u = i(a(46821)),
                c = i(a(73008)),
                f = a(27968),
                h = i(a(38032)),
                p = i(a(29015)),
                m = i(a(1191)),
                v = a(96197),
                g = a(68220),
                x = i(a(7665)),
                C = a(22552),
                _ = i(a(25319)),
                S = i(a(53906)),
                j = i(a(20132)),
                M = i(a(55234)),
                y = a(85893);
            var b = {
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
                I = {
                    display: "l7jjieqr",
                    flexShrink: "oq44ahr5",
                    flexGrow: "tvf2evcx",
                    flexBasis: "lb5m6g5c",
                    marginTop: "b9l0eqez",
                    marginStart: "k6y3xtnu"
                };

            function w(e) {
                var t = e.contact,
                    a = e.onDetailImageLoad,
                    n = e.onDetailImageClick,
                    i = !t.name && t.notifyName ? (0, y.jsx)("div", {
                        className: (0, o.default)(E),
                        children: (0, y.jsxs)(C.TextSpan, {
                            theme: "muted",
                            children: ["~", (0, y.jsx)(c.default, {
                                direction: "auto",
                                text: t.notifyName,
                                selectable: !0
                            })]
                        })
                    }) : null,
                    l = t.showBusinessCheckmarkAsSecondary && h.default.supportsFeature(h.default.F.VNAME_V_2) ? (0, y.jsxs)("div", {
                        className: (0, o.default)(T),
                        children: [(0, y.jsx)(c.default, {
                            text: t.verifiedName,
                            direction: "auto"
                        }), (0, y.jsx)("div", {
                            className: (0, o.default)(I),
                            children: (0, y.jsx)(x.default, {
                                name: "psa-verified"
                            })
                        })]
                    }) : null,
                    r = s.default.get(t.id),
                    f = r && r.presence ? (0, y.jsx)(j.default, {
                        contact: t,
                        presence: r.presence,
                        chatstate: r.presence.chatstate,
                        location: "info"
                    }) : null;
                return (0, y.jsxs)(u.default, {
                    theme: "padding-large",
                    children: [(0, y.jsx)("div", {
                        className: (0, o.default)(b),
                        children: (0, y.jsx)(d.default, {
                            id: t.id,
                            size: d.DETAIL_IMAGE_SIZE.LARGE,
                            loader: !0,
                            onLoad: a,
                            onClick: n,
                            quality: d.DETAIL_IMAGE_QUALITY.HIGH
                        })
                    }), (0, y.jsx)(C.TextHeader, {
                        level: "2",
                        theme: "large",
                        children: (0, y.jsx)(m.default, {
                            contact: t,
                            selectable: !0,
                            showBusinessCheckmark: t.showBusinessCheckmarkAsPrimary
                        })
                    }), i, (0, y.jsxs)("div", {
                        className: (0, o.default)(E),
                        children: [(0, y.jsx)(C.TextSpan, {
                            theme: "muted",
                            children: l
                        }), (0, y.jsx)(C.TextSpan, {
                            theme: "muted",
                            children: f
                        })]
                    }), (0, y.jsx)(p.default, {
                        labels: t.labels
                    })]
                })
            }
            var N = {
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno",
                    marginBottom: "pz0xruzv"
                },
                k = {
                    lineHeight: "a4ywakfo",
                    marginTop: "qt60bha0"
                };

            function P(e) {
                var t = e.contact,
                    a = e.onDetailImageLoad,
                    n = e.onDetailImageClick;
                return (0, y.jsxs)(u.default, {
                    theme: "padding-large",
                    children: [(0, y.jsx)("div", {
                        className: (0, o.default)(N),
                        children: (0, y.jsx)(d.default, {
                            id: t.id,
                            size: d.DETAIL_IMAGE_SIZE.LARGE,
                            loader: !0,
                            onLoad: a,
                            onClick: n,
                            quality: d.DETAIL_IMAGE_QUALITY.HIGH
                        })
                    }), (0, y.jsxs)(f.FlexColumn, {
                        align: "center",
                        children: [(0, y.jsx)(C.TextHeader, {
                            level: "2",
                            size: "24",
                            children: (0, y.jsx)(m.default, {
                                contact: t,
                                selectable: !0
                            })
                        }), (0, y.jsx)("div", {
                            className: (0, o.default)(k),
                            children: (0, y.jsx)(v.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, y.jsx)(C.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: (0, M.default)(t.id)
                                })
                            })
                        })]
                    }), (0, y.jsx)(O, {
                        contact: t
                    }), (0, y.jsx)(p.default, {
                        labels: t.labels
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

            function O(e) {
                var t = e.contact,
                    a = (0, S.default)((0, g.unproxy)(t));
                return a.isVideoCallEnabled || a.isVoiceCallEnabled ? (0, y.jsxs)(f.FlexRow, {
                    justify: "center",
                    xstyle: A.container,
                    children: [(0, y.jsx)(r.default, {
                        icon: "voice-call-filled",
                        label: "Audio",
                        a8nText: "contact-action voice-call-button",
                        xstyle: A.button,
                        theme: "new-chat-info",
                        disabled: !a.canStartVoiceCall,
                        onClick: a.startVoiceCall
                    }), (0, y.jsx)(r.default, {
                        icon: "call-video",
                        label: "Video",
                        a8nText: "contact-action video-call-button",
                        xstyle: A.button,
                        theme: "new-chat-info",
                        disabled: !a.canStartVideoCall,
                        onClick: a.startVideoCall
                    })]
                }) : null
            }
        },
        98303: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.numMore,
                    a = e.newChatInfo,
                    n = e.onClick;
                if (!a) {
                    var h = (0, c.jsx)(s.default, {
                        theme: "transparent",
                        children: (0, c.jsx)(d.default, {
                            name: "down"
                        })
                    });
                    return (0, c.jsx)(l.default, {
                        image: h,
                        theme: "new-chat-info",
                        primary: r.default.t(1018, {
                            count: t,
                            _plural: t
                        }),
                        onClick: n
                    })
                }
                var p = (0, c.jsx)(o.FlexRow, {
                        align: "center",
                        justify: "center",
                        xstyle: f.iconWrapper,
                        children: (0, c.jsx)(s.default, {
                            theme: "transparent",
                            children: (0, c.jsx)(d.default, {
                                name: "down",
                                color: "secondary"
                            })
                        })
                    }),
                    m = (0, c.jsx)("div", {
                        className: (0, i.default)(f.text),
                        children: r.default.t(1018, {
                            count: t,
                            _plural: t
                        })
                    });
                return (0, c.jsxs)(u.default, {
                    xstyle: f.container,
                    onClick: n,
                    children: [p, m]
                })
            };
            var i = n(a(56720)),
                l = n(a(88186)),
                o = a(27968),
                r = n(a(45159)),
                s = n(a(84287)),
                d = n(a(7665)),
                u = n(a(76080)),
                c = a(85893),
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
                        textAlign: "ml4r5409"
                    }
                }
        },
        87923: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, E.default)(e.chat, ["groupMetadata"]),
                    a = (0, E.default)((0, C.default)(t.groupMetadata, "chat.groupMetadata"), ["desc", "owner", "creation", "restrict", "participants"]),
                    n = (0, r.useState)(a.desc),
                    i = (0, l.default)(n, 2),
                    k = i[0],
                    P = i[1],
                    A = (0, r.useState)(!1),
                    O = (0, l.default)(A, 2),
                    R = O[0],
                    D = O[1],
                    L = (0, r.useState)(e.showFullDescription || !(k && k.length > 30)),
                    F = (0, l.default)(L, 2),
                    B = F[0],
                    G = F[1],
                    V = (0, T.default)(e.chat.contact),
                    U = (0, I.default)();
                if ((0, b.useListener)(a, "change:desc", (function() {
                        P(a.desc)
                    })), !(m.default.supportsFeature(m.default.F.GROUPS_V_3) && S.default.groupDescLength > 0)) return null;
                var H = {
                        textLimit: B ? 1 / 0 : h.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                        readMoreText: g.default.t(1528),
                        onReadMore: function() {
                            G(!0)
                        },
                        formatters: t.isTrusted() ? v.Configuration.TrustedGroupDesc({
                            links: x.findLinks(k)
                        }) : v.Configuration.UntrustedGroupDesc()
                    },
                    W = V ? [y.TextInputCustomStyleThemes.groupInfoName, y.TextInputCustomStyleThemes.newChatInfoDefaultText] : [y.TextInputCustomStyleThemes.groupInfoName],
                    q = (0, w.jsx)("div", {
                        className: (0, s.default)(N.inputWrapper),
                        children: (0, w.jsx)(y.default, {
                            a8n: "group-info-drawer-description-title-input",
                            value: k,
                            emptyValuePlaceholder: g.default.t(238),
                            renderEmojiTextInLockMode: H,
                            editable: a.canSetDescription(),
                            pending: R,
                            showRemaining: !0,
                            maxLength: S.default.groupDescLength,
                            onChange: function(e) {
                                P(e)
                            },
                            onSave: function() {
                                if (a.canSetDescription()) {
                                    var e = k || "",
                                        n = e.match(/\r\n/gm) ? "\r\n" : "\n",
                                        i = new RegExp(`^(${n}{2,})([^\n])`, "gm");
                                    e = e.replace(i, `${n}$2`);
                                    var l = (0, p.default)(e || "");
                                    if (l === a.desc) return P(l);
                                    D(!0), (0, _.default)((0, j.setGroupDesc)(t, l), U).catch((0, o.catchAbort)((function() {}))).catch((function() {
                                        __LOG__(3)`group_info_drawer:onSetDescription failed`
                                    })).finally((function() {
                                        P(a.desc), D(!1)
                                    }))
                                }
                            },
                            onCancel: function() {
                                P(a.desc)
                            },
                            multiline: !0,
                            editRestrictionInfo: a.restrict ? function() {
                                c.default.openModal((0, w.jsx)(f.default, {
                                    onOK: function() {
                                        return c.default.closeModal()
                                    },
                                    okText: g.default.t(2125),
                                    children: g.default.t(1420)
                                }))
                            } : void 0,
                            supportsEmoji: !0,
                            lockable: !0,
                            lowProfile: !0,
                            customStyleThemes: W,
                            theme: "small",
                            showEditOnHover: V
                        })
                    });
                V && !k && a.restrict && (q = null);
                if (V) {
                    var z, Y, K = a.owner && (null === (z = a.participants.get(a.owner)) || void 0 === z ? void 0 : z.contact);
                    return K && (Y = (0, w.jsx)(M.TextDiv, {
                        theme: "muted",
                        children: u.default.createdByStr(K.formattedName, a.creation)
                    })), q || Y ? (0, w.jsxs)(d.ChatInfoDrawerSection, {
                        xstyle: N.chatInfoSection,
                        newChatInfo: !0,
                        children: [q, Y]
                    }) : null
                }
                return (0, w.jsx)(d.ChatInfoDrawerSection, {
                    newChatInfo: !1,
                    theme: "group-desc-padding",
                    title: g.default.t(968),
                    children: q
                })
            };
            var l = i(a(63038)),
                o = a(84805),
                r = a(67294),
                s = i(a(56720)),
                d = a(82506),
                u = i(a(10399)),
                c = i(a(65901)),
                f = i(a(86777)),
                h = i(a(94253)),
                p = i(a(96150)),
                m = i(a(38032)),
                v = a(72896),
                g = i(a(45159)),
                x = n(a(53454)),
                C = i(a(61698)),
                _ = i(a(27003)),
                S = i(a(43890)),
                j = a(92530),
                M = a(22552),
                y = n(a(68544)),
                b = a(8413),
                E = i(a(69283)),
                T = i(a(25319)),
                I = i(a(1379)),
                w = a(85893),
                N = {
                    chatInfoSection: {
                        paddingTop: "nlnf8xo7",
                        paddingBottom: "r219jyu0"
                    },
                    inputWrapper: {
                        whiteSpace: "bbv8nyr4"
                    }
                }
        },
        99337: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, Q.default)(e.contact),
                    a = (0, J.default)();
                return (0, ne.jsx)(oe, (0, l.default)((0, l.default)({}, e), {}, {
                    newChatInfo: t,
                    style: t ? a : null
                }))
            };
            var l = i(a(81109)),
                o = i(a(34575)),
                r = i(a(93913)),
                s = i(a(81506)),
                d = i(a(2205)),
                u = i(a(99842)),
                c = a(67294),
                f = i(a(40501)),
                h = i(a(79933)),
                p = i(a(47830)),
                m = i(a(98350)),
                v = a(82506),
                g = i(a(83399)),
                x = i(a(65901)),
                C = i(a(86777)),
                _ = i(a(53187)),
                S = i(a(81218)),
                j = i(a(18345)),
                M = n(a(19288)),
                y = i(a(38973)),
                b = i(a(73008)),
                E = i(a(90675)),
                T = i(a(92546)),
                I = i(a(38032)),
                w = i(a(87923)),
                N = i(a(10259)),
                k = i(a(1594)),
                P = i(a(16539)),
                A = i(a(89971)),
                O = i(a(68921)),
                R = i(a(80816)),
                D = i(a(2424)),
                L = i(a(45159)),
                F = i(a(63641)),
                B = i(a(592)),
                G = i(a(50507)),
                V = a(87547),
                U = i(a(59603)),
                H = i(a(5202)),
                W = i(a(43890)),
                q = i(a(43463)),
                z = i(a(61897)),
                Y = a(68220),
                K = i(a(20147)),
                X = i(a(7665)),
                Z = a(22552),
                $ = n(a(92428)),
                Q = i(a(25319)),
                J = i(a(16637)),
                ee = i(a(96178)),
                te = i(a(40232)),
                ae = a(45065),
                ne = a(85893),
                ie = (0, $.genId)("max_participant_toast"),
                le = function(e) {
                    (0, d.default)(a, e);
                    var t = (0, u.default)(a);

                    function a(e) {
                        var n;
                        return (0, o.default)(this, a), (n = t.call(this, e))._participantFlatListController = new T.default, n._pendingParticipantFlatListController = new T.default, n._setRefContainer = function(e) {
                            n._refContainer = e
                        }, n.handleDemoteAdmin = function(e) {
                            e.contact.pendingAction++, (0, V.demoteParticipants)(n.props.chat, [e]).then((function() {
                                e.contact.pendingAction--
                            }))
                        }, n._confirmParticipantRemove = function(e) {
                            var t = n.handleParticipantRemove.bind((0, s.default)(n), e, !0),
                                a = L.default.t(707, {
                                    participant: e.contact.formattedName,
                                    subject: n.props.contact.name
                                });
                            x.default.openModal((0, ne.jsx)(C.default, {
                                onOK: t,
                                okText: L.default.t(1530),
                                onCancel: function() {
                                    return x.default.closeModal()
                                },
                                cancelText: L.default.t(1938),
                                children: (0, ne.jsx)(b.default, {
                                    text: a
                                })
                            }))
                        }, n.handleParticipantRemove = function(e, t) {
                            e.contact.pendingAction++, (0, V.removeParticipants)(n.props.chat, [e]).then((function() {
                                e.contact.pendingAction--
                            })), t && x.default.closeModal()
                        }, n._confirmParticipantPromote = function(e) {
                            var t = n.handleParticipantPromote.bind((0, s.default)(n), e, !0),
                                a = L.default.t(706, {
                                    participant: e.contact.formattedName,
                                    subject: n.props.contact.name
                                });
                            x.default.openModal((0, ne.jsx)(C.default, {
                                onOK: t,
                                okText: L.default.t(1234),
                                onCancel: function() {
                                    return x.default.closeModal()
                                },
                                cancelText: L.default.t(1938),
                                children: (0, ne.jsx)(b.default, {
                                    text: a
                                })
                            }))
                        }, n.handleParticipantPromote = function(e, t) {
                            e.contact.pendingAction++, (0, V.promoteParticipants)(n.props.chat, [e]).then((function() {
                                e.contact.pendingAction--
                            })), t && x.default.closeModal()
                        }, n._openAddGroupParticipantFlow = function() {
                            var e = n.props.chat;
                            if (n.props.groupMetadata.participants.length >= W.default.maxParticipants) {
                                var t = L.default.t(123, {
                                    max: W.default.maxParticipants
                                });
                                x.default.openToast((0, ne.jsx)($.default, {
                                    msg: t,
                                    id: ie
                                }))
                            } else {
                                var a = I.default.supportsFeature(I.default.F.GROUPS_V_3) ? (0, ne.jsx)(p.default, {
                                    chat: (0, Y.unproxy)(e),
                                    pushTransition: "none",
                                    popTransition: "none"
                                }) : (0, ne.jsx)(h.default, {
                                    chat: (0, Y.unproxy)(e),
                                    pushTransition: "none",
                                    popTransition: "none"
                                });
                                x.default.openModal(a, {
                                    transition: "modal-flow"
                                })
                            }
                        }, n._openParticpantSearch = function() {
                            x.default.openModal((0, ne.jsx)(R.default, {
                                chat: (0, Y.unproxy)(n.props.chat),
                                onParticipantPromote: n.handleParticipantPromote,
                                onParticipantRemove: n.handleParticipantRemove,
                                onDemoteAdmin: n.handleDemoteAdmin
                            }), {
                                transition: "modal-flow"
                            })
                        }, n.handleClose = function() {
                            n.props.onClose ? n.props.onClose() : n.props.uim.uie.requestDismiss()
                        }, n.showEncryptionInfoPopup = function() {
                            x.default.openModal((0, ne.jsx)(y.default, {
                                chatId: n.props.chat.id,
                                e2eSubtype: "info_encrypted"
                            }))
                        }, n._showSecurityInfoPopup = function() {
                            x.default.openModal((0, ne.jsx)(y.default, {
                                chat: n.props.chat,
                                chatId: n.props.chat.id,
                                e2eSubtype: "info_encrypted"
                            }))
                        }, n._uiActionEvent = new G.default.UiAction({
                            uiActionType: G.default.UI_ACTION_TYPE.GROUP_INFO_OPEN,
                            uiActionPreloaded: !0
                        }), n
                    }
                    return (0, r.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props.groupMetadata;
                            I.default.supportsFeature(I.default.F.MD_BACKEND) && (0, ae.queryAndUpdateGroupMetadataById)(t.id), this.props.listeners.add(t.participants, "add remove reset sort change:isAdmin change:isSuperAdmin", (function() {
                                e.forceUpdate()
                            })), this.props.listeners.add(t.pendingParticipants, "add remove reset", (function() {
                                e.forceUpdate()
                            })), this.ensureParticipantsSorted();
                            var a = this._uiActionEvent;
                            if (a) {
                                var n = this.props.groupMetadata.cachedDeviceSizeBucket;
                                null != n && (a.sizeBucket = n), a.markUiActionT(), a.commit(), this._uiActionEvent = void 0
                            }
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.ensureParticipantsSorted()
                        }
                    }, {
                        key: "ensureParticipantsSorted",
                        value: function() {
                            this.props.groupMetadata.participants.ensureSorted(), this.props.groupMetadata.pendingParticipants.ensureSorted()
                        }
                    }, {
                        key: "_getTitle",
                        value: function() {
                            return W.default.productMediaAttachments ? L.default.t(1227) : L.default.t(1226)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.chat,
                                n = t.groupMetadata;
                            if (n.participants.iAmAdmin() && I.default.supportsFeature(I.default.F.GROUPS_V_3) && !n.support)
                                if (this.props.newChatInfo) e = (0, ne.jsx)(m.default, {
                                    side: "chevron",
                                    icon: "settings",
                                    onClick: this.props.onAdminSetting,
                                    children: (0, ne.jsx)(Z.TextSpan, {
                                        theme: "title",
                                        children: L.default.t(1016)
                                    })
                                });
                                else {
                                    var i = (0, ne.jsx)(X.default, {
                                        className: N.default.chevron,
                                        name: "chevron-right-alt",
                                        directional: !0
                                    });
                                    e = (0, ne.jsx)(S.default, {
                                        onClick: this.props.onAdminSetting,
                                        side: i,
                                        children: (0, ne.jsx)(Z.TextSpan, {
                                            theme: "title",
                                            children: L.default.t(1016)
                                        })
                                    })
                                } var l = null;
                            this.props.onMediaGallery && (l = (0, ne.jsx)(g.default, {
                                onMediaGallery: this.props.onMediaGallery,
                                chat: (0, Y.unproxy)(a)
                            }));
                            var o = null;
                            I.default.supportsFeature(I.default.F.LIVE_LOCATIONS) && (o = (0, ne.jsx)(B.default, {
                                chat: a,
                                onClick: this.props.onLiveLocation
                            }));
                            var r = a && a.shouldShowEphemeralSetting() ? (0, ne.jsx)(E.default, {
                                    onClick: this.props.onEphemeral,
                                    chat: a,
                                    groupMetadata: n,
                                    theme: this.props.newChatInfo ? "new-chat-info" : null
                                }) : null,
                                s = null;
                            I.default.supportsFeature(I.default.F.MD_BACKEND) && (s = (0, ne.jsx)(ee.default, {
                                onClick: this.showEncryptionInfoPopup,
                                theme: this.props.newChatInfo ? "new-chat-info" : null,
                                text: te.default.isGroupCallEnabled() ? L.default.t(2021) : L.default.t(2020)
                            })), this.props.chat.isSupportGroup() && (s = (0, ne.jsx)(K.default, {
                                onClick: this._showSecurityInfoPopup,
                                theme: this.props.newChatInfo ? "new-chat-info" : null
                            }));
                            var d = a.mute.canMute() ? (0, ne.jsx)(U.default, {
                                    chat: a,
                                    mute: a.mute,
                                    settings: q.default,
                                    theme: this.props.newChatInfo ? "new-chat-info" : null
                                }) : null,
                                u = null,
                                c = null;
                            if (this.props.onStarred)
                                if (this.props.newChatInfo) c = (0, ne.jsx)(v.ChatInfoDrawerSection, {
                                    a8nText: "section-starred-messages",
                                    newChatInfo: !0,
                                    children: (0, ne.jsx)(m.default, {
                                        a8nText: "block-starred-messages",
                                        side: "chevron",
                                        icon: "star",
                                        onClick: this.props.onStarred,
                                        children: (0, ne.jsx)(Z.TextSpan, {
                                            theme: "title",
                                            size: "16",
                                            children: L.default.t(594)
                                        })
                                    })
                                });
                                else {
                                    var h = (0, ne.jsx)(X.default, {
                                        className: N.default.chevron,
                                        name: "chevron-right-alt",
                                        directional: !0
                                    });
                                    u = (0, ne.jsx)(S.default, {
                                        side: h,
                                        onClick: this.props.onStarred,
                                        children: (0, ne.jsx)(Z.TextSpan, {
                                            theme: "title",
                                            children: L.default.t(594)
                                        })
                                    })
                                } var p = null;
                            (d || u || s || r) && (p = (0, ne.jsxs)(v.ChatInfoDrawerSection, {
                                newChatInfo: this.props.newChatInfo,
                                children: [d, u, r, s, e]
                            }));
                            var x = I.default.supportsFeature(I.default.F.MD_BACKEND) && this.props.scrollToParticipantList;
                            return (0, ne.jsxs)(_.default, {
                                theme: "striped",
                                style: this.props.style,
                                children: [(0, ne.jsx)(M.default, {
                                    title: L.default.t(2019),
                                    type: M.DRAWER_HEADER_TYPE.SMALL,
                                    darwinRtlFix: !0,
                                    onCancel: this.handleClose
                                }), (0, ne.jsx)(j.default, {
                                    flatListControllers: [this._pendingParticipantFlatListController, this._participantFlatListController],
                                    children: (0, ne.jsxs)("section", {
                                        className: N.default.body,
                                        "data-a8n": f.default.key("group-info-drawer-body"),
                                        children: [null, (0, ne.jsx)(O.default, {
                                            chat: (0, Y.unproxy)(a),
                                            onAdminSetting: this.props.onAdminSetting,
                                            onAddParticipant: this._openAddGroupParticipantFlow
                                        }), (0, ne.jsx)(w.default, {
                                            chat: (0, Y.unproxy)(a),
                                            showFullDescription: this.props.showFullGroupDescription
                                        }), o, l, c, p, undefined, (0, ne.jsx)(P.default, {
                                            chat: (0, Y.unproxy)(a),
                                            scrollToParticipantList: x,
                                            flatListController: this._participantFlatListController,
                                            onAddParticipant: this._openAddGroupParticipantFlow,
                                            onOpenParticpantSearch: this._openParticpantSearch,
                                            onGroupInviteLink: this.props.onGroupInviteLink,
                                            onVerification: this.props.onVerification
                                        }), (0, ne.jsx)(A.default, {
                                            chat: (0, Y.unproxy)(a),
                                            flatListController: this._pendingParticipantFlatListController
                                        }), (0, ne.jsx)(k.default, {
                                            chat: (0, Y.unproxy)(a)
                                        })]
                                    })
                                })]
                            }, "contact-info-modal")
                        }
                    }]), a
                }(c.Component);
            le.CONCERNS = {
                chat: ["mute", "id", "pendingAction", "liveLocation"],
                groupMetadata: ["id", "cachedDeviceSizeBucket", "participants", "pendingParticipants", "announce", "support"],
                contact: ["name", "id", "pendingAction"]
            }, le.displayName = "GroupInfoDrawerBase";
            var oe = (0, D.default)((0, H.default)((0, F.default)((0, z.default)(le, le.CONCERNS))))
        },
        1594: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.chat,
                    a = (0, f.default)(t.contact),
                    n = (0, h.jsx)(m, {
                        chat: t,
                        showNewChatInfo: a
                    }),
                    l = (0, h.jsx)(p, {
                        chat: t,
                        showNewChatInfo: a
                    });
                return a ? (0, h.jsxs)(i.ChatInfoDrawerButtonsSection, {
                    newChatInfo: !0,
                    children: [n, l]
                }) : (0, h.jsxs)(h.Fragment, {
                    children: [(0, h.jsx)(i.ChatInfoDrawerButtonsSection, {
                        newChatInfo: !1,
                        children: n
                    }), (0, h.jsx)(i.ChatInfoDrawerButtonsSection, {
                        newChatInfo: !1,
                        children: l
                    })]
                })
            };
            var i = a(82506),
                l = n(a(65901)),
                o = n(a(61876)),
                r = n(a(45159)),
                s = n(a(51497)),
                d = a(43329),
                u = a(24170),
                c = n(a(7665)),
                f = n(a(25319)),
                h = a(85893);

            function p(e) {
                var t = e.chat,
                    a = e.showNewChatInfo;
                return (0, h.jsx)(o.default, {
                    a8nText: "li-report-spam",
                    color: "danger",
                    icon: (0, h.jsx)(c.default, {
                        name: "thumbs-down",
                        directional: !0
                    }),
                    theme: a ? "new-chat-info" : null,
                    onClick: function() {
                        l.default.openModal((0, h.jsx)(s.default, {
                            isGroupChat: !0,
                            onReport: function() {
                                (0, d.sendSpamReport)(t, u.SpamFlow.Group), l.default.closeModal()
                            },
                            onReportExitClear: function() {
                                (0, d.sendSpamExitClear)(t, u.SpamFlow.Block), l.default.closeModal()
                            },
                            onCancel: function() {
                                return l.default.closeModal()
                            }
                        }))
                    },
                    children: r.default.t(1545)
                })
            }

            function m(e) {
                var t = e.chat,
                    a = e.showNewChatInfo;
                return (0, h.jsx)(o.default, {
                    a8nText: "li-delete-group",
                    icon: (0, h.jsx)(c.default, {
                        name: "exit",
                        directional: !0
                    }),
                    color: "danger",
                    theme: a ? "new-chat-info" : null,
                    onClick: function() {
                        l.default.deleteOrExitChat(t)
                    },
                    children: t.isReadOnly ? r.default.t(1979) : r.default.t(1984)
                })
            }
        },
        16539: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a = (0, k.default)(e.chat.contact),
                    n = (0, N.default)((0, j.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["support"]),
                    i = (0, j.default)(null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants, "props.chat.groupMetadata?.participants"),
                    L = (0, I.default)();
                (0, w.useListener)(i, "add remove reset sort change:isAdmin change:isSuperAdmin", L);
                var F = (0, o.useState)(D(i)),
                    B = (0, l.default)(F, 2),
                    G = B[0],
                    V = B[1],
                    U = (0, o.useRef)(),
                    H = (0, o.useState)(),
                    W = (0, l.default)(H, 2),
                    q = W[0],
                    z = W[1];
                (0, o.useEffect)((function() {
                    C.default.supportsFeature(C.default.F.MD_BACKEND) && e.scrollToParticipantList && U.current && (0, A.scrollIntoViewIfNeeded)(U.current, !1)
                }), [e.scrollToParticipantList]);
                var Y, K, X, Z = a ? "secondary" : null,
                    $ = a ? "new-chat-info" : "drawer-list",
                    Q = a ? "compact" : void 0,
                    J = (0, O.jsx)(b.default, {
                        name: "search",
                        className: (0, r.default)(!a && R.iconSearch),
                        color: Z
                    });
                if (i.canAdd() && !n.support) {
                    var ee = (0, O.jsx)(y.default, {
                        theme: Q,
                        children: (0, O.jsx)(b.default, {
                            name: "add-user",
                            directional: !0
                        })
                    });
                    Y = (0, O.jsx)(s.default, {
                        image: ee,
                        theme: $,
                        primary: _.default.t(240),
                        onClick: e.onAddParticipant
                    })
                }
                if (i.iAmAdmin() && e.onGroupInviteLink && !n.support) {
                    var te = (0, O.jsx)(y.default, {
                        theme: Q,
                        children: (0, O.jsx)(b.default, {
                            name: "link"
                        })
                    });
                    K = (0, O.jsx)(s.default, {
                        image: te,
                        theme: $,
                        primary: _.default.t(981),
                        onClick: e.onGroupInviteLink
                    })
                }
                if (D(i) && G) {
                    var ae = i.length - f.default.INFO_DRAWER_MAX_ROWS;
                    X = (0, O.jsx)(m.default, {
                        numMore: ae,
                        newChatInfo: a,
                        onClick: function() {
                            V(!1)
                        }
                    })
                }
                var ne, ie = function(e) {
                        var t = i.get(e.id);
                        return !!t && (i.canPromote(t) || i.canRemove(t) || i.canVerifyIdentity(t))
                    },
                    le = function(t, a) {
                        var n = i.assertGet(a.id);
                        if (ie(a)) {
                            var l = [];
                            i.canPromote(n) && l.push((0, O.jsx)(h.default, {
                                a8n: "mi-grp-promote-admin",
                                action: function() {
                                    var t = _.default.t(706, {
                                        participant: n.contact.formattedName,
                                        subject: e.chat.contact.name
                                    });
                                    u.default.openModal((0, O.jsx)(c.default, {
                                        onOK: function() {
                                            return t = !0, n.contact.pendingAction++, (0, S.promoteParticipants)(e.chat, [n]).then((function() {
                                                n.contact.pendingAction--
                                            })), void(t && u.default.closeModal());
                                            var t
                                        },
                                        okText: _.default.t(1234),
                                        onCancel: function() {
                                            return u.default.closeModal()
                                        },
                                        cancelText: _.default.t(1938),
                                        children: (0, O.jsx)(p.default, {
                                            text: t
                                        })
                                    }))
                                },
                                children: _.default.t(1234)
                            }, "promote")), i.canRemove(n) && l.push((0, O.jsx)(h.default, {
                                a8n: "mi-grp-remove-participant",
                                action: function() {
                                    var t = _.default.t(707, {
                                        participant: n.contact.formattedName,
                                        subject: e.chat.contact.name
                                    });
                                    u.default.openModal((0, O.jsx)(c.default, {
                                        onOK: function() {
                                            return t = !0, n.contact.pendingAction++, (0, S.removeParticipants)(e.chat, [n]).then((function() {
                                                n.contact.pendingAction--
                                            })), void(t && u.default.closeModal());
                                            var t
                                        },
                                        okText: _.default.t(1530),
                                        onCancel: function() {
                                            return u.default.closeModal()
                                        },
                                        cancelText: _.default.t(1938),
                                        children: (0, O.jsx)(p.default, {
                                            text: t
                                        })
                                    }))
                                },
                                children: _.default.t(1239)
                            }, "remove")), C.default.supportsFeature(C.default.F.GROUPS_V_3) && i.canDemote(n) && l.push((0, O.jsx)(h.default, {
                                a8n: "mi-grp-verify-identify",
                                action: function() {
                                    n.contact.pendingAction++, (0, S.demoteParticipants)(e.chat, [n]).then((function() {
                                        n.contact.pendingAction--
                                    })), u.default.closeModal()
                                },
                                children: _.default.t(789)
                            }, "demote-admin")), C.default.supportsFeature(C.default.F.MD_BACKEND) && i.canVerifyIdentity(n) && l.push((0, O.jsx)(h.default, {
                                a8n: "mi-grp-verify-identify",
                                action: function() {
                                    e.onVerification && e.onVerification(n.contact)
                                },
                                children: _.default.t(2259)
                            }, "verify-identity")), z({
                                contactId: a.id,
                                menu: l,
                                anchor: t.anchor,
                                event: t.event
                            })
                        }
                    },
                    oe = function(e, t) {
                        P.default.equals((0, x.getMaybeMeUser)(), t.id) || (0, v.findChat)(t.id).then((function(e) {
                            u.default.openChatFromUnread(e).then((function(t) {
                                t && u.default.focusChatTextInput(e)
                            }))
                        }))
                    },
                    re = i.length ? (0, O.jsxs)(d.ChatInfoDrawerListSection, {
                        newChatInfo: a,
                        onRef: function(e) {
                            U.current = e
                        },
                        a8nText: "section-participants",
                        title: _.default.t(2127, {
                            count: i.length,
                            _plural: i.length
                        }),
                        titleOnClick: C.default.supportsFeature(C.default.F.GROUPS_V_3) ? e.onOpenParticpantSearch : void 0,
                        subtitle: C.default.supportsFeature(C.default.F.GROUPS_V_3) ? J : void 0,
                        children: [Y, K, (0, O.jsx)(g.default, {
                            flatListController: e.flatListController,
                            direction: "vertical",
                            forceConsistentRenderCount: !1,
                            data: function() {
                                var e, t = [],
                                    a = [];
                                i.forEach((function(n) {
                                    n.contact.isMe ? e = n : n.isAdmin ? t.push(n) : a.push(n)
                                }));
                                var n = [];
                                return e && n.push(e), n = n.concat(t, a), D(i) && G && (n = n.slice(0, f.default.INFO_DRAWER_MAX_ROWS)), n.map((function(e) {
                                    return {
                                        itemKey: e.id.toString(),
                                        id: e.id,
                                        height: 68
                                    }
                                }))
                            }(),
                            renderItem: function(e) {
                                var t = e.id,
                                    n = i.get(t);
                                if (!n) throw new g.UnknownDataError(e);
                                var l = n.contact,
                                    o = !!q && P.default.equals(l.id, q.contactId);
                                return (0, O.jsx)(M.default, {
                                    contact: l,
                                    participant: n,
                                    onClick: oe,
                                    contextEnabled: function() {
                                        return ie(l)
                                    },
                                    contextMenu: o,
                                    onContext: function(e) {
                                        return le(e, l)
                                    },
                                    theme: a ? "new-chat-info" : null,
                                    showNotifyName: !0,
                                    waitIdle: !0
                                }, n.id.toString())
                            }
                        }), X]
                    }) : null;
                q && (ne = (0, O.jsx)(E.default, {
                    displayName: "ChatContextMenu",
                    escapable: !0,
                    popable: !0,
                    requestDismiss: function() {
                        z(null)
                    },
                    children: (0, O.jsx)(T.default, {
                        contextMenu: q
                    })
                }));
                return (0, O.jsxs)(O.Fragment, {
                    children: [re, ne]
                })
            };
            var l = i(a(63038)),
                o = a(67294),
                r = i(a(56720)),
                s = i(a(88186)),
                d = a(82506),
                u = i(a(65901)),
                c = i(a(86777)),
                f = i(a(94253)),
                h = i(a(94680)),
                p = i(a(73008)),
                m = i(a(98303)),
                v = a(68985),
                g = n(a(73568)),
                x = a(1577),
                C = i(a(38032)),
                _ = i(a(45159)),
                S = a(87547),
                j = i(a(61698)),
                M = i(a(44606)),
                y = i(a(84287)),
                b = i(a(7665)),
                E = i(a(16835)),
                T = i(a(93820)),
                I = i(a(57811)),
                w = a(8413),
                N = i(a(69283)),
                k = i(a(25319)),
                P = i(a(78208)),
                A = a(42162),
                O = a(85893),
                R = {
                    iconSearch: {
                        color: "s4k44ver"
                    }
                };

            function D(e) {
                return e.length > f.default.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
            }
        },
        89971: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a, n = (0, y.default)(e.chat.contact),
                    i = (0, g.default)(e.chat.groupMetadata, "props.chat.groupMetadata"),
                    T = (0, g.default)(null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants, "props.chat.groupMetadata?.participants"),
                    I = (0, g.default)(null === (a = e.chat.groupMetadata) || void 0 === a ? void 0 : a.pendingParticipants, "props.chat.groupMetadata?.pendingParticipants"),
                    w = (0, j.default)();
                (0, M.useListener)(T, "change:isAdmin change:isSuperAdmin", w), (0, M.useListener)(I, "add remove reset", w);
                var N = (0, o.useState)(E(I)),
                    k = (0, l.default)(N, 2),
                    P = k[0],
                    A = k[1],
                    O = (0, o.useState)(),
                    R = (0, l.default)(O, 2),
                    D = R[0],
                    L = R[1];
                (0, o.useEffect)((function() {
                    m.default.supportsFeature(m.default.F.GROUPS_V_4_JOIN_PERMISSION) && i.queryGroupV4PendingInvite().then((function() {
                        A(E(i.pendingParticipants))
                    }))
                }), [i]);
                var F, B, G;
                I.length > 0 && (F = (0, b.jsx)(p.default, {
                    flatListController: e.flatListController,
                    direction: "vertical",
                    forceConsistentRenderCount: !1,
                    data: (V = I.toArray(), E(I) && P && (V = V.slice(0, u.default.INFO_DRAWER_MAX_ROWS)), V.map((function(e) {
                        return {
                            itemKey: e.id.toString(),
                            id: e.id,
                            height: 68
                        }
                    }))),
                    renderItem: function(e) {
                        var t = e.id,
                            a = I.get(t);
                        if (!a) throw new p.UnknownDataError(e);
                        var l = a.contact;
                        return (0, b.jsx)(x.default, {
                            contact: l,
                            participant: a,
                            contextEnabled: function() {
                                return !0
                            },
                            contextMenu: !0,
                            onContext: function(e) {
                                return t = e, n = [(0, b.jsx)(c.default, {
                                    a8n: "mi-grp-promote-admin",
                                    action: function() {
                                        s.default.openModal((0, b.jsx)(d.default, {
                                            onOK: function() {
                                                s.default.closeModal(), i.revokeGroupV4AddInvite([a.id.toString()]).then((function() {
                                                    s.default.openToast((0, b.jsx)(C.default, {
                                                        msg: v.default.t(2067),
                                                        id: (0, C.genId)()
                                                    }))
                                                }))
                                            },
                                            okText: v.default.t(2188),
                                            onCancel: function() {
                                                return s.default.closeModal()
                                            },
                                            cancelText: v.default.t(1938),
                                            children: (0, b.jsx)(f.default, {
                                                text: v.default.t(1030, {
                                                    participant: a.contact.formattedName
                                                })
                                            })
                                        }))
                                    },
                                    children: v.default.t(1577)
                                }, "promote")], void L({
                                    contactId: l.id,
                                    menu: n,
                                    anchor: t.anchor,
                                    event: t.event
                                });
                                var t, n
                            },
                            theme: n ? "new-chat-info" : null,
                            showNotifyName: !0,
                            isPendingParticipant: !0,
                            waitIdle: !0
                        }, a.id.toString())
                    }
                }));
                var V;
                if (E(I) && P) {
                    var U = I.length - u.default.INFO_DRAWER_MAX_ROWS;
                    B = (0, b.jsx)(h.default, {
                        numMore: U,
                        newChatInfo: n,
                        onClick: function() {
                            A(!1)
                        }
                    })
                }
                T.iAmAdmin() && I.length > 0 && (G = (0, b.jsxs)(r.ChatInfoDrawerListSection, {
                    newChatInfo: n,
                    a8nText: "section-participants",
                    title: v.default.t(1022, {
                        number: I.length
                    }),
                    children: [F, B]
                }));
                var H;
                D && (H = (0, b.jsx)(_.default, {
                    displayName: "ChatContextMenu",
                    escapable: !0,
                    popable: !0,
                    requestDismiss: function() {
                        L(null)
                    },
                    children: (0, b.jsx)(S.default, {
                        contextMenu: D
                    })
                }));
                return (0, b.jsxs)(b.Fragment, {
                    children: [G, H]
                })
            };
            var l = i(a(63038)),
                o = a(67294),
                r = a(82506),
                s = i(a(65901)),
                d = i(a(86777)),
                u = i(a(94253)),
                c = i(a(94680)),
                f = i(a(73008)),
                h = i(a(98303)),
                p = n(a(73568)),
                m = i(a(38032)),
                v = i(a(45159)),
                g = i(a(61698)),
                x = i(a(44606)),
                C = n(a(92428)),
                _ = i(a(16835)),
                S = i(a(93820)),
                j = i(a(57811)),
                M = a(8413),
                y = i(a(25319)),
                b = a(85893);

            function E(e) {
                return e.length > u.default.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
            }
        },
        68921: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, L.default)(e.chat.contact) ? (0, B.jsx)(H, (0, s.default)({}, e)) : (0, B.jsx)(V, (0, s.default)({}, e))
            };
            var l = i(a(87757)),
                o = i(a(48926)),
                r = i(a(63038)),
                s = i(a(81109)),
                d = a(84805),
                u = a(18077),
                c = i(a(48842)),
                f = a(67294),
                h = i(a(56720)),
                p = i(a(40501)),
                m = i(a(10399)),
                v = i(a(65901)),
                g = i(a(86777)),
                x = i(a(46821)),
                C = i(a(96150)),
                _ = n(a(18286)),
                S = a(27968),
                j = i(a(29015)),
                M = i(a(45159)),
                y = a(1191),
                b = a(76110),
                E = i(a(49309)),
                T = a(43201),
                I = i(a(27003)),
                w = a(96197),
                N = i(a(43890)),
                k = a(89569),
                P = a(22552),
                A = n(a(68544)),
                O = i(a(57811)),
                R = a(8413),
                D = i(a(69283)),
                L = i(a(25319)),
                F = i(a(1379)),
                B = a(85893);
            var G = {
                nameSecondary: {
                    minHeight: "g4oj0cdv",
                    marginTop: "sy4xt5vv"
                },
                photo: {
                    marginBottom: "njub1g37"
                }
            };

            function V(e) {
                var t = (0, D.default)(e.chat, ["labels"]),
                    a = (0, D.default)((0, c.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["creation"]),
                    n = null;
                return a.creation && (n = (0, B.jsx)("div", {
                    "data-a8n": p.default.key("group-created-time"),
                    className: (0, h.default)(G.nameSecondary),
                    children: (0, B.jsx)(P.TextSpan, {
                        theme: "muted",
                        children: m.default.createdStr(a.creation, t.isSupportGroup())
                    })
                })), (0, B.jsxs)(x.default, {
                    theme: "padding-large",
                    children: [(0, B.jsx)(W, {
                        chat: e.chat,
                        xstyle: G.photo
                    }), (0, B.jsx)(z, {
                        chat: e.chat
                    }), n, (0, B.jsx)(j.default, {
                        labels: t.labels
                    })]
                })
            }
            var U = {
                lineHeight: "a4ywakfo",
                marginTop: "ma4rpf0l"
            };

            function H(e) {
                var t, a, n = (0, D.default)(e.chat, ["labels"]),
                    i = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants,
                    l = (0, O.default)();
                (0, R.useListener)(i, "add remove reset sort change:isAdmin change:isSuperAdmin", l);
                var o = null !== (a = null == i ? void 0 : i.length) && void 0 !== a ? a : 0,
                    r = `${M.default.t(965)} · ${M.default.t(2127,{count:o,_plural:o})}`;
                return (0, B.jsx)(x.default, {
                    theme: "padding-large",
                    children: (0, B.jsxs)(S.FlexColumn, {
                        align: "center",
                        children: [(0, B.jsx)(W, {
                            chat: e.chat,
                            xstyle: G.photo
                        }), (0, B.jsx)(z, {
                            chat: e.chat,
                            newChatInfo: !0
                        }), (0, B.jsx)("div", {
                            className: (0, h.default)(U),
                            children: (0, B.jsx)(w.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, B.jsx)(P.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: r
                                })
                            })
                        }), undefined, (0, B.jsx)(j.default, {
                            labels: n.labels
                        })]
                    })
                })
            }

            function W(e) {
                var t = (0, D.default)(e.chat, ["isReadOnly"]),
                    a = (0, D.default)(e.chat.contact, ["id", "profilePicThumb"]),
                    n = (0, D.default)(e.chat.contact.profilePicThumb, ["imgFull"]),
                    i = (0, f.useState)(!1),
                    l = (0, r.default)(i, 2),
                    o = l[0],
                    s = l[1],
                    c = (0, f.useState)(!1),
                    p = (0, r.default)(c, 2),
                    m = p[0],
                    v = p[1],
                    g = (0, F.default)(),
                    x = E.default.GROUP,
                    C = t.isReadOnly || !n.canDelete() && !n.canSet() || t.isSupportGroup();
                return (0, B.jsx)("div", {
                    className: (0, h.default)(e.xstyle),
                    children: (0, B.jsx)(b.PhotoPickerLoadable, {
                        type: x,
                        id: a.id,
                        attachToChat: !0,
                        pending: m,
                        startImage: n.imgFull,
                        readOnly: C,
                        onImageSet: function(e, t) {
                            var a;
                            v(!0), a = e && t ? (0, T.setProfilePic)(n, e, t) : (0, T.deleteProfilePic)(n), (0, I.default)(a, g).catch((0, d.catchAbort)((function() {}))).catch((0, u.filteredCatch)(_.ActionError, (function() {
                                __LOG__(3)`GroupInfoDrawer: failed to set/delete group image`, s(!o)
                            }))).finally((function() {
                                v(!1)
                            }))
                        }
                    }, String(o))
                })
            }
            var q = {
                marginTop: "hymafltn",
                marginEnd: "jnwc1y2a",
                marginBottom: "ngycyvoj",
                marginStart: "svoq16ka"
            };

            function z(e) {
                var t = (0, D.default)(e.chat.contact, ["name"]),
                    a = (0, D.default)((0, c.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["creation", "restrict", "support"]),
                    n = (0, F.default)(),
                    i = function() {
                        var a = (0, o.default)(l.default.mark((function a(i) {
                            var o;
                            return l.default.wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        if ((o = (0, C.default)(i)) !== t.name) {
                                            a.next = 3;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 3:
                                        return a.next = 5, (0, I.default)((0, k.setGroupSubject)(e.chat, o), n).catch((0, d.catchAbort)((function() {}))).catch((function() {
                                            __LOG__(3)`group_info_drawer:onSetSubject failed`
                                        }));
                                    case 5:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })));
                        return function() {
                            return a.apply(this, arguments)
                        }
                    }();
                return a.support ? (0, B.jsx)(P.TextHeader, {
                    className: (0, h.default)(q),
                    level: "2",
                    theme: "large",
                    children: (0, B.jsx)(y.GroupName, {
                        chat: e.chat,
                        groupMetadata: a
                    })
                }) : (0, B.jsx)(K, {
                    subject: t.name,
                    onSave: i,
                    newChatInfo: e.newChatInfo,
                    textInputProps: {
                        editable: a.canSetSubject(),
                        editRestrictionInfo: a.restrict ? function() {
                            v.default.openModal((0, B.jsx)(g.default, {
                                onOK: function() {
                                    return v.default.closeModal()
                                },
                                okText: M.default.t(2125),
                                children: M.default.t(1420)
                            }))
                        } : void 0
                    }
                })
            }
            var Y = {
                container: {
                    textAlign: "qfejxiq4"
                },
                editing: {
                    width: "ln8gz9je",
                    textAlign: "ljrqcn24"
                }
            };

            function K(e) {
                var t = e.newChatInfo,
                    a = (0, f.useState)(null),
                    n = (0, r.default)(a, 2),
                    i = n[0],
                    d = n[1],
                    u = (0, f.useState)(!1),
                    c = (0, r.default)(u, 2),
                    p = c[0],
                    m = c[1],
                    x = (0, f.useState)(!1),
                    C = (0, r.default)(x, 2),
                    _ = C[0],
                    S = C[1],
                    j = function() {
                        var t = (0, o.default)(l.default.mark((function t() {
                            return l.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (S(!1), i && i !== e.subject) {
                                            t.next = 4;
                                            break
                                        }
                                        return d(null), t.abrupt("return");
                                    case 4:
                                        return m(!0), t.prev = 5, t.next = 8, e.onSave(i);
                                    case 8:
                                        return t.prev = 8, m(!1), d(null), t.finish(8);
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [5, , 8, 12]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    y = t ? [A.TextInputCustomStyleThemes.groupInfoName, A.TextInputCustomStyleThemes.newChatInfoLargeText] : [A.TextInputCustomStyleThemes.groupInfoName];
                return (0, B.jsx)("div", {
                    className: (0, h.default)(t && Y.container, t && _ && Y.editing),
                    children: (0, B.jsx)(A.default, (0, s.default)({
                        a8n: "group-info-drawer-subject-input",
                        value: null != i ? i : e.subject,
                        pending: p,
                        showRemaining: !0,
                        validate: function(e) {
                            return !(!e || !e.trim())
                        },
                        maxLength: N.default.maxSubject,
                        onBeginEdit: function() {
                            S(!0)
                        },
                        onChange: function(e) {
                            _ && d(e)
                        },
                        onSave: j,
                        onError: function() {
                            v.default.openModal((0, B.jsx)(g.default, {
                                onOK: function() {
                                    return v.default.closeModal()
                                },
                                okText: M.default.t(2125),
                                children: M.default.t(151)
                            }))
                        },
                        onCancel: function() {
                            S(!1), d(null)
                        },
                        supportsEmoji: !0,
                        lockable: !0,
                        lowProfile: !0,
                        theme: "large",
                        customStyleThemes: y,
                        showEditOnHover: t,
                        showHighlightOnHover: t
                    }, e.textInputProps))
                })
            }
        },
        80816: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(34575)),
                l = n(a(93913)),
                o = n(a(81506)),
                r = n(a(2205)),
                s = n(a(99842)),
                d = a(67294),
                u = n(a(65901)),
                c = n(a(71562)),
                f = n(a(94680)),
                h = a(68985),
                p = a(1577),
                m = n(a(38032)),
                v = n(a(45159)),
                g = n(a(63641)),
                x = n(a(61698)),
                C = n(a(16835)),
                _ = n(a(93820)),
                S = n(a(78208)),
                j = a(85893),
                M = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, s.default)(a);

                    function a() {
                        var e;
                        (0, i.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), r = 0; r < n; r++) l[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(l))).state = {
                            contextMenu: null
                        }, e.openChat = function(e) {
                            (0, h.findChat)(e).then((function(e) {
                                u.default.closeModal(), u.default.openChatFromUnread(e)
                            }))
                        }, e.contextMenu = function(e) {
                            return !S.default.equals((0, p.getMaybeMeUser)(), e)
                        }, e.handleParticipantMenu = function(t, a) {
                            var n = (0, x.default)(e.props.chat.groupMetadata, "_this.props.chat.groupMetadata").participants,
                                i = n.assertGet(a.id),
                                l = [];
                            if (n.canPromote(i)) {
                                var r = e.props.onParticipantPromote.bind(null, i, !1);
                                l.push((0, j.jsx)(f.default, {
                                    a8n: "mi-grp-promote-admin",
                                    action: r,
                                    children: v.default.t(1234)
                                }, "promote"))
                            }
                            if (n.canRemove(i)) {
                                var s = e.props.onParticipantRemove.bind(null, i, !1);
                                l.push((0, j.jsx)(f.default, {
                                    a8n: "mi-grp-remove-participant",
                                    action: s,
                                    children: v.default.t(1239)
                                }, "remove"))
                            }
                            if (m.default.supportsFeature(m.default.F.GROUPS_V_3) && n.canDemote(i)) {
                                var d = e.props.onDemoteAdmin.bind((0, o.default)(e), i);
                                l.push((0, j.jsx)(f.default, {
                                    a8n: "mi-grp-verify-identify",
                                    action: d,
                                    children: v.default.t(789)
                                }, "demote-admin"))
                            }
                            S.default.equals((0, p.getMaybeMeUser)(), i.id) || l.push((0, j.jsx)(f.default, {
                                action: e.openChat.bind(null, i.contact.id),
                                children: v.default.t(1250, {
                                    author: i.contact.formattedName
                                })
                            }, "message author")), e.setState({
                                contextMenu: {
                                    contactId: a.id,
                                    menu: l,
                                    anchor: t.anchor,
                                    event: t.anchor ? void 0 : t
                                }
                            })
                        }, e.closeContextMenu = function() {
                            e.setState({
                                contextMenu: null
                            })
                        }, e.contextEnabled = function() {
                            return !1
                        }, e.cancel = function() {
                            u.default.closeModal()
                        }, e.isAdmin = function(t) {
                            return (0, x.default)(e.props.chat.groupMetadata, "_this.props.chat.groupMetadata").participants.assertGet(t).isAdmin
                        }, e.contactFilter = function(t) {
                            var a = e.props.chat.groupMetadata;
                            return !(null == a || !a.participants.get(t.id))
                        }, e
                    }
                    return (0, l.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e, t = this,
                                a = null === (e = this.props.chat.groupMetadata) || void 0 === e ? void 0 : e.participants;
                            null != a && this.props.listeners.add(a, "add remove reset", (function() {
                                t.forceUpdate()
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e;
                            return this.state.contextMenu && (e = (0, j.jsx)(C.default, {
                                displayName: "ChatContextMenu",
                                escapable: !0,
                                popable: !0,
                                requestDismiss: this.closeContextMenu,
                                children: (0, j.jsx)(_.default, {
                                    contextMenu: this.state.contextMenu
                                })
                            })), (0, j.jsxs)(j.Fragment, {
                                children: [(0, j.jsx)(c.default, {
                                    title: v.default.t(1594),
                                    filter: this.contactFilter,
                                    onCancel: this.cancel,
                                    openContextOnClick: !0,
                                    contextEnabled: this.contextEnabled,
                                    contextMenu: this.contextMenu,
                                    onContext: this.handleParticipantMenu,
                                    showNotifyName: !0,
                                    listenForAdminChange: !0,
                                    participantCollection: (0, x.default)(this.props.chat.groupMetadata, "this.props.chat.groupMetadata").participants
                                }), e]
                            })
                        }
                    }]), a
                }(d.Component);
            M.displayName = "GroupParticipantSearch";
            var y = (0, g.default)(M);
            t.default = y
        },
        20147: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onClick;
                if ("new-chat-info" === e.theme) return (0, u.jsxs)(l.default, {
                    icon: "lock",
                    onClick: t,
                    multiline: !0,
                    children: [(0, u.jsx)(d.TextSpan, {
                        theme: "title",
                        children: r.default.t(1702)
                    }), (0, u.jsx)(d.TextDiv, {
                        theme: "muted",
                        children: r.default.t(1701)
                    })]
                });
                return (0, u.jsxs)(o.default, {
                    onClick: t,
                    side: (0, u.jsx)(s.default, {
                        name: "lock",
                        className: (0, i.default)(f)
                    }),
                    multiline: !0,
                    children: [(0, u.jsx)("div", {
                        className: (0, i.default)(c),
                        children: (0, u.jsx)(d.TextSpan, {
                            theme: "title",
                            children: r.default.t(1702)
                        })
                    }), (0, u.jsx)(d.TextDiv, {
                        theme: "muted",
                        children: r.default.t(1701)
                    })]
                })
            };
            var i = n(a(56720)),
                l = n(a(98350)),
                o = n(a(81218)),
                r = n(a(45159)),
                s = n(a(7665)),
                d = a(22552),
                u = a(85893),
                c = {
                    marginBottom: "brac1wpa"
                },
                f = {
                    color: "jq3rn4u7"
                }
        },
        25319: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, l.useState)(o.getNewChatInfo),
                    a = (0, i.default)(t, 2),
                    n = a[0],
                    s = a[1];
                return (0, r.useListener)(o.UserPrefsEvent, o.UserPrefsEvent.NEW_CHAT_INFO_CHANGE, (function(e) {
                    s(e)
                })), n && !e.isBusiness
            };
            var i = n(a(63038)),
                l = a(67294),
                o = a(1577),
                r = a(8413)
        },
        53906: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, l.useState)(),
                    a = (0, i.default)(t, 2)[1],
                    n = (0, l.useState)(),
                    c = (0, i.default)(n, 2)[1];
                return (0, r.useListener)(o.default, "change:isVoipInitialized", (function() {
                    a(o.default.isVoipInitialized)
                })), (0, r.useListener)(s, "change:activeCall", (function() {
                    c(s.activeCall)
                })), e ? {
                    isVoiceCallEnabled: u.isVoiceCallEnabled(e),
                    isVideoCallEnabled: u.isVideoCallEnabled(e),
                    canStartVoiceCall: !e.isMe && u.canStartCall(e),
                    canStartVideoCall: !e.isMe && u.canStartVideoCall(e),
                    startVoiceCall: function() {
                        u.checkIfCanStartCall({
                            contact: e,
                            isVideo: !1
                        }) && d.callStart(e.id, !1)
                    },
                    startVideoCall: function() {
                        u.checkIfCanStartCall({
                            contact: e,
                            isVideo: !0
                        }) && d.callStart(e.id, !0)
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
            var i = n(a(63038)),
                l = a(67294),
                o = n(a(73929)),
                r = a(8413),
                s = a(53104).default,
                d = a(77273).default,
                u = a(89703).default
        },
        96178: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                if (i.default.supportsFeature(i.default.F.MD_BACKEND)) {
                    var t, a, n = e.onClick,
                        f = e.text,
                        h = (0, c.jsx)(o.default, {
                            name: "lock",
                            className: s.default.icon
                        });
                    return "new-chat-info" === e.theme ? (0, c.jsxs)(u.default, {
                        onClick: n,
                        multiline: !0,
                        icon: "lock",
                        children: [(0, c.jsx)(l.TextSpan, {
                            theme: "title",
                            children: null !== (a = e.title) && void 0 !== a ? a : d.default.t(1982)
                        }), (0, c.jsx)(l.TextDiv, {
                            theme: "muted",
                            children: f
                        })]
                    }) : (0, c.jsxs)(r.default, {
                        onClick: n,
                        side: h,
                        multiline: !0,
                        children: [(0, c.jsx)("div", {
                            className: s.default.header,
                            children: (0, c.jsx)(l.TextSpan, {
                                theme: "title",
                                children: null !== (t = e.title) && void 0 !== t ? t : d.default.t(1982)
                            })
                        }), (0, c.jsx)(l.TextDiv, {
                            theme: "muted",
                            children: f
                        })]
                    })
                }
                return null
            };
            var i = n(a(38032)),
                l = a(22552),
                o = n(a(7665)),
                r = n(a(81218)),
                s = n(a(21477)),
                d = n(a(45159)),
                u = n(a(98350)),
                c = a(85893)
        },
        11465: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = i(a(34575)),
                o = i(a(93913)),
                r = i(a(2205)),
                s = i(a(99842)),
                d = i(a(96486)),
                u = a(67294),
                c = a(63796),
                f = i(a(65901)),
                h = i(a(94253)),
                p = i(a(53187)),
                m = i(a(81218)),
                v = i(a(18345)),
                g = n(a(19288)),
                x = i(a(46821)),
                C = a(1577),
                _ = i(a(38032)),
                S = i(a(14881)),
                j = i(a(54063)),
                M = i(a(2424)),
                y = i(a(45159)),
                b = a(12231),
                E = i(a(63641)),
                T = a(87547),
                I = n(a(64803)),
                w = i(a(43890)),
                N = i(a(61897)),
                k = a(22552),
                P = i(a(78208)),
                A = a(85893),
                O = function(e) {
                    var t = e.isRestricted,
                        a = e.onClick;
                    return (0, A.jsxs)(m.default, {
                        onClick: a,
                        multiline: !0,
                        children: [(0, A.jsx)("div", {
                            className: S.default.header,
                            children: (0, A.jsx)(k.TextSpan, {
                                theme: "title",
                                children: y.default.t(1008)
                            })
                        }), (0, A.jsx)(k.TextDiv, {
                            theme: "muted",
                            children: t ? y.default.t(1014) : y.default.t(1007)
                        })]
                    })
                },
                R = function(e) {
                    var t = e.isAnnouncement,
                        a = e.onClick;
                    return (0, A.jsxs)(m.default, {
                        onClick: a,
                        multiline: !0,
                        children: [(0, A.jsx)("div", {
                            className: S.default.header,
                            children: (0, A.jsx)(k.TextSpan, {
                                theme: "title",
                                children: y.default.t(1015)
                            })
                        }), (0, A.jsx)(k.TextDiv, {
                            theme: "muted",
                            children: t ? y.default.t(1014) : y.default.t(1007)
                        })]
                    })
                },
                D = function(e) {
                    var t = e.isNoFrequentlyForwarded,
                        a = e.onClick,
                        n = w.default.hfmStringChanges ? y.default.t(1012) : y.default.t(1011);
                    return (0, A.jsxs)(m.default, {
                        onClick: a,
                        multiline: !0,
                        children: [(0, A.jsx)("div", {
                            className: S.default.header,
                            children: (0, A.jsx)(k.TextSpan, {
                                theme: "title",
                                children: n
                            })
                        }), (0, A.jsx)(k.TextDiv, {
                            theme: "muted",
                            children: t ? y.default.t(1013) : y.default.t(1010)
                        })]
                    })
                },
                L = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, s.default)(a);

                    function a() {
                        var e;
                        (0, l.default)(this, a);
                        for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i)))._openSettingModal = function(t) {
                            var a = e.props,
                                n = a.chat,
                                i = a.groupMetadata;
                            f.default.openModal((0, A.jsx)(j.default, {
                                settingType: t,
                                chat: n,
                                groupMetadata: i
                            }), {
                                transition: "modal",
                                uim: e.props.uim
                            })
                        }, e._openAnnouncementSettingModal = function() {
                            e._openSettingModal(h.default.GROUP_SETTING_TYPE.ANNOUNCEMENT)
                        }, e._openRestrictedSettingModal = function() {
                            e._openSettingModal(h.default.GROUP_SETTING_TYPE.RESTRICT)
                        }, e._openNoFrequentlyForwardedSettingModal = function() {
                            e._openSettingModal(h.default.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED)
                        }, e._getCurrentAdmins = function() {
                            return e.props.groupMetadata.participants.filter((function(e) {
                                return e.isAdmin
                            })).map((function(e) {
                                return e.contact
                            }))
                        }, e._filterParticipants = function(t) {
                            return !!e.props.groupMetadata.participants.get(t.id)
                        }, e.isDisabled = function(t) {
                            var a = e.props.groupMetadata;
                            return P.default.equals(t, a.owner) || (0, C.getMaybeMeUser)().equals(t)
                        }, e._openManageAdminModal = function() {
                            f.default.openModal((0, A.jsx)(I.default, {
                                onConfirm: e._updateAdmins,
                                getInitialItems: e._getCurrentAdmins,
                                isDisabled: e.isDisabled,
                                isSelected: e.isDisabled,
                                filter: e._filterParticipants,
                                title: y.default.t(1179),
                                useShortName: !0,
                                useAllContacts: !0,
                                listType: I.ListType.PARTICIPANT_MANAGE_MODAL,
                                singleSelectionFooterType: c.FooterType.CONFIRM,
                                multipleSelectionFooterType: c.FooterType.CONFIRM
                            }))
                        }, e._updateAdmins = function(t) {
                            var a = e.props,
                                n = a.chat,
                                i = a.groupMetadata.participants,
                                l = i.filter((function(e) {
                                    return e.isAdmin
                                })),
                                o = d.default.differenceWith(t, l, (function(e, t) {
                                    return e.id.equals(t.id)
                                })).map((function(e) {
                                    return i.assertGet(e.id)
                                })),
                                r = d.default.differenceWith(l, t, (function(e, t) {
                                    return e.id.equals(t.id)
                                }));
                            o.length > 0 && (o.forEach((function(e) {
                                e.contact.pendingAction++
                            })), (0, T.promoteParticipants)(n, o).finally((function() {
                                o.forEach((function(e) {
                                    e.contact.pendingAction--
                                }))
                            }))), r.length > 0 && (r.forEach((function(e) {
                                e.contact.pendingAction++
                            })), (0, T.demoteParticipants)(n, r).finally((function() {
                                r.forEach((function(e) {
                                    e.contact.pendingAction--
                                }))
                            }))), f.default.closeModal()
                        }, e
                    }
                    return (0, o.default)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props.groupMetadata;
                            return (0, A.jsxs)(p.default, {
                                theme: "striped",
                                children: [(0, A.jsx)(g.default, {
                                    title: y.default.t(1016),
                                    type: g.DRAWER_HEADER_TYPE.SMALL,
                                    onBack: this.props.onClose
                                }), (0, A.jsxs)(v.default, {
                                    children: [(0, A.jsx)(x.default, {
                                        animation: !1,
                                        children: (0, A.jsx)(O, {
                                            onClick: this._openRestrictedSettingModal,
                                            isRestricted: e.restrict
                                        })
                                    }), (0, b.isEphemeralAllowGroupMembersEnabled)() ? (0, A.jsx)("div", {
                                        className: S.default.restrictText,
                                        children: (0, A.jsx)(k.TextSpan, {
                                            theme: "muted",
                                            children: y.default.t(810)
                                        })
                                    }) : null, (0, A.jsxs)(x.default, {
                                        animation: !1,
                                        children: [(0, A.jsx)(R, {
                                            onClick: this._openAnnouncementSettingModal,
                                            isAnnouncement: e.announce
                                        }), _.default.supportsFeature(_.default.F.FREQUENTLY_FORWARDED_SETTING) ? (0, A.jsx)(D, {
                                            onClick: this._openNoFrequentlyForwardedSettingModal,
                                            isNoFrequentlyForwarded: e.noFrequentlyForwarded
                                        }) : null]
                                    }), (0, A.jsx)(x.default, {
                                        animation: !1,
                                        children: (0, A.jsx)(m.default, {
                                            onClick: this._openManageAdminModal,
                                            multiline: !0,
                                            children: (0, A.jsx)("div", {
                                                className: S.default.header,
                                                children: (0, A.jsx)(k.TextSpan, {
                                                    theme: "title",
                                                    children: y.default.t(1179)
                                                })
                                            })
                                        })
                                    })]
                                })]
                            })
                        }
                    }]), a
                }(u.Component);
            L.CONCERNS = {
                chat: ["id"],
                groupMetadata: ["restrict", "announce", "noFrequentlyForwarded", "participants", "owner"]
            }, L.displayName = "GroupAdminSetting";
            var F = (0, M.default)((0, E.default)((0, N.default)(L, L.CONCERNS)));
            t.default = F
        },
        54063: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.settingType,
                    a = (0, c.default)(e.chat, ["id"]),
                    n = (0, c.default)(e.groupMetadata, ["restrict", "announce", "noFrequentlyForwarded"]),
                    h = (0, i.useMemo)((function() {
                        switch (t) {
                            case l.default.GROUP_SETTING_TYPE.ANNOUNCEMENT:
                            case l.default.GROUP_SETTING_TYPE.RESTRICT:
                                return [{
                                    label: o.default.t(1007),
                                    value: 0
                                }, {
                                    label: o.default.t(1014),
                                    value: 1
                                }];
                            case l.default.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
                                return [{
                                    label: o.default.t(1010),
                                    value: 0
                                }, {
                                    label: o.default.t(1013),
                                    value: 1
                                }];
                            default:
                                return []
                        }
                    }), [t]),
                    p = (0, i.useMemo)((function() {
                        var e = n.restrict,
                            a = n.announce,
                            i = n.noFrequentlyForwarded;
                        switch (t) {
                            case l.default.GROUP_SETTING_TYPE.ANNOUNCEMENT:
                                return a ? 1 : 0;
                            case l.default.GROUP_SETTING_TYPE.RESTRICT:
                                return e ? 1 : 0;
                            case l.default.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
                                return i ? 1 : 0;
                            default:
                                return 0
                        }
                    }), [t, n]),
                    m = (0, i.useMemo)((function() {
                        switch (t) {
                            case l.default.GROUP_SETTING_TYPE.ANNOUNCEMENT:
                                return o.default.t(1015);
                            case l.default.GROUP_SETTING_TYPE.RESTRICT:
                                return o.default.t(1008);
                            case l.default.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
                                return s.default.hfmStringChanges ? o.default.t(1012) : o.default.t(1011);
                            default:
                                return ""
                        }
                    }), [t]),
                    v = (0, i.useMemo)((function() {
                        return t === l.default.GROUP_SETTING_TYPE.RESTRICT && (0, r.isEphemeralAllowGroupMembersEnabled)() ? o.default.t(810) : null
                    }), [t]);
                return (0, f.jsx)(u.default, {
                    options: h,
                    initialValue: p,
                    title: m,
                    onSelect: function(e) {
                        e !== p && (0, d.setGroupProperty)(a, t, e).catch((function() {
                            return function() {}
                        }))
                    },
                    explanation: v
                })
            };
            var i = a(67294),
                l = n(a(94253)),
                o = n(a(45159)),
                r = a(12231),
                s = n(a(43890)),
                d = a(75367),
                u = n(a(52592)),
                c = n(a(69283)),
                f = a(85893)
        },
        592: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(34575)),
                l = n(a(93913)),
                o = n(a(2205)),
                r = n(a(99842)),
                s = a(67294),
                d = n(a(46821)),
                u = n(a(45159)),
                c = n(a(63641)),
                f = n(a(9866)),
                h = a(26344),
                p = n(a(62861)),
                m = n(a(61897)),
                v = a(68220),
                g = n(a(7665)),
                x = a(22552),
                C = a(85893),
                _ = function(e) {
                    (0, o.default)(a, e);
                    var t = (0, r.default)(a);

                    function a(e) {
                        var n;
                        return (0, i.default)(this, a), (n = t.call(this, e))._updateParticipants = function() {
                            n.setState({
                                participants: n.getParticipants(n.props.chat)
                            })
                        }, n.state = {
                            participants: n.getParticipants(e.chat)
                        }, n
                    }
                    return (0, l.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props.chat;
                            t.liveLocationQueried || f.default.getActive(t.id.toString()).then((function() {
                                t.liveLocationQueried = !0
                            })).catch((function() {})), this.props.listeners.add((0, v.unproxy)(t), "change:liveLocation", (function() {
                                var a = t.liveLocation;
                                a && (e._removeParticipantListener(a), e._addParticipantListener(a), e._updateParticipants())
                            }));
                            var a = t.liveLocation;
                            a && this._addParticipantListener(a)
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
                            var e, t, a = this.props.chat,
                                n = this.state.participants,
                                i = 0;
                            if (n.forEach((function(a) {
                                    a.isMe ? e = !0 : (t || (t = a.contact), i++)
                                })), a.isGroup) return e ? 1 === n.length ? u.default.t(1151) : u.default.t(1150, {
                                count: i,
                                _plural: i
                            }) : u.default.t(1147, {
                                count: i,
                                _plural: i
                            });
                            if (e) {
                                if (1 === n.length) return u.default.t(1151);
                                if (t) return u.default.t(1149, {
                                    name: t.formattedShortNameWithNonBreakingSpaces
                                })
                            } else if (t) return u.default.t(1146, {
                                name: t.formattedShortNameWithNonBreakingSpaces
                            });
                            return ""
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.onClick;
                            if (!this.state.participants.length) return null;
                            var t = (0, C.jsx)(g.default, {
                                name: (0, h.liveLocationIcon)(!0)
                            });
                            return (0, C.jsx)(d.default, {
                                a8nText: "section-live-location",
                                theme: "padding",
                                title: u.default.t(1154),
                                titleOnClick: e,
                                children: (0, C.jsx)(p.default, {
                                    side: t,
                                    onClick: e,
                                    children: (0, C.jsx)(x.TextSpan, {
                                        theme: "title",
                                        children: this.getText()
                                    })
                                })
                            })
                        }
                    }]), a
                }(s.Component);
            _.CONCERNS = {
                chat: ["id", "isGroup", "liveLocation", "liveLocationQueried"]
            }, _.displayName = "LiveLocationRow";
            var S = (0, c.default)((0, m.default)(_, _.CONCERNS));
            t.default = S
        },
        36844: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.TABS = void 0;
            var l = i(a(59713)),
                o = i(a(34575)),
                r = i(a(93913)),
                s = i(a(2205)),
                d = i(a(99842)),
                u = i(a(94184)),
                c = i(a(96486)),
                f = a(67294),
                h = a(24224),
                p = i(a(48956)),
                m = i(a(53187)),
                v = i(a(18345)),
                g = n(a(19288)),
                x = i(a(45159)),
                C = i(a(94836)),
                _ = i(a(19548)),
                S = i(a(65636)),
                j = i(a(23845)),
                M = i(a(73524)),
                y = i(a(34310)),
                b = i(a(43890)),
                E = i(a(16835)),
                T = i(a(60806)),
                I = a(85893),
                w = {
                    MEDIA: "media",
                    DOCS: "docs",
                    LINKS: "links",
                    PRODUCTS: "products"
                };
            t.TABS = w;
            var N = function(e) {
                (0, s.default)(a, e);
                var t = (0, d.default)(a);

                function a() {
                    var e;
                    return (0, o.default)(this, a), (e = t.apply(this, arguments)).state = {
                        selected: e.props.initialTab,
                        direction: null,
                        selectable: !1
                    }, e.handleSelectMessages = function() {
                        e.state.selectable || e.setState({
                            selectable: !0
                        })
                    }, e.handleCancelSelection = function() {
                        e.state.selectable && (e.selectedMessages.unsetAll(), e.setState({
                            selectable: !1
                        }))
                    }, e.handleMessageSelect = function(t, a) {
                        e.handleSelectMessages(), e.selectedMessages.setVal(t, a), 0 === e.selectedMessages.getSelected().length && e.handleCancelSelection()
                    }, e.selectedMessages = new M.default([], (function(e) {
                        return e.id.toString()
                    })), e
                }
                return (0, r.default)(a, [{
                    key: "_handleSelectTab",
                    value: function(e) {
                        var t = c.default.values(w).indexOf(this.state.selected),
                            a = c.default.values(w).indexOf(e);
                        t !== a && this.selectedMessages.unsetAll();
                        var n = a > t ? "right" : "left";
                        this.setState({
                            selected: e,
                            direction: n,
                            selectable: !1
                        })
                    }
                }, {
                    key: "_getTabs",
                    value: function() {
                        var e = this,
                            t = [{
                                tab: w.MEDIA,
                                title: x.default.t(1199)
                            }, {
                                tab: w.DOCS,
                                title: x.default.t(790)
                            }, {
                                tab: w.LINKS,
                                title: x.default.t(1124)
                            }];
                        b.default.productMediaAttachments && t.push({
                            tab: w.PRODUCTS,
                            title: x.default.t(1520)
                        });
                        var a = t.map((function(t) {
                                var a = (0, u.default)(S.default.menuItem, (0, l.default)({}, S.default.active, e.state.selected === t.tab));
                                return (0, I.jsx)("button", {
                                    className: a,
                                    onClick: e._handleSelectTab.bind(e, t.tab),
                                    title: t.title,
                                    children: t.title
                                }, t.tab)
                            })),
                            n = (0, u.default)(S.default.menuTabsLists, b.default.productMediaAttachments ? S.default.fourTabs : S.default.threeTabs);
                        return (0, I.jsx)("div", {
                            className: n,
                            "data-active-tab": this.state.selected,
                            children: a
                        })
                    }
                }, {
                    key: "_getContent",
                    value: function() {
                        var e, t = this.props.chat;
                        switch (this.state.selected) {
                            case w.MEDIA:
                                e = (0, I.jsx)(_.default, {
                                    chat: t,
                                    mediaMsgs: t.getMediaMsgs(),
                                    selectable: this.state.selectable,
                                    onMessageSelect: this.handleMessageSelect,
                                    selectedMessages: this.selectedMessages,
                                    fullCollection: !0
                                });
                                break;
                            case w.LINKS:
                                e = (0, I.jsx)(C.default, {
                                    chat: t,
                                    linkMsgs: t.getLinkMsgs(),
                                    selectable: this.state.selectable,
                                    onMessageSelect: this.handleMessageSelect,
                                    selectedMessages: this.selectedMessages
                                });
                                break;
                            case w.DOCS:
                                e = (0, I.jsx)(p.default, {
                                    chat: t,
                                    docMsgs: t.getDocMsgs(),
                                    selectable: this.state.selectable,
                                    onMessageSelect: this.handleMessageSelect,
                                    selectedMessages: this.selectedMessages
                                });
                                break;
                            case w.PRODUCTS:
                                e = (0, I.jsx)(y.default, {
                                    chat: t,
                                    productMsgs: t.getProductMsgs(),
                                    selectable: this.state.selectable,
                                    onMessageSelect: this.handleMessageSelect,
                                    selectedMessages: this.selectedMessages,
                                    onProductDetail: this.props.onProductDetail,
                                    setScrollOffset: this.props.setProductsScrollOffset,
                                    scrollOffset: this.props.productsScrollOffset
                                })
                        }
                        return e
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.chat,
                            t = this._getTabs(),
                            a = this._getContent(),
                            n = [w.MEDIA, w.DOCS].includes(this.state.selected),
                            i = this.state.selectable ? (0, I.jsx)(E.default, {
                                displayName: "MediaMultiSelect",
                                escapable: !0,
                                requestDismiss: this.handleCancelSelection,
                                children: (0, I.jsx)(j.default, {
                                    chat: e,
                                    noSortOnForward: !0,
                                    theme: "mediaGallery",
                                    toastPosition: h.ToastPosition.RIGHT,
                                    downloadButton: n,
                                    selectedMessages: this.selectedMessages,
                                    onCancel: this.handleCancelSelection
                                })
                            }) : null,
                            l = "right" === this.state.direction ? "slide-forward" : "slide-back";
                        return (0, I.jsxs)(m.default, {
                            theme: "gallery",
                            children: [(0, I.jsx)(g.default, {
                                title: " ",
                                onBack: this.props.onBack,
                                darwinRtlFix: !0,
                                type: g.DRAWER_HEADER_TYPE.MULTI_MEDIA_GALLERY
                            }), i, t, (0, I.jsx)(v.default, {
                                "data-list-scroll-container": !0,
                                children: (0, I.jsx)(T.default, {
                                    transitionName: l,
                                    className: S.default.column,
                                    children: (0, I.jsx)("div", {
                                        className: S.default.multimediaGallery,
                                        children: (0, I.jsx)("div", {
                                            className: S.default.column,
                                            children: a
                                        })
                                    }, this.state.selected)
                                })
                            })]
                        })
                    }
                }]), a
            }(f.Component);
            t.default = N, N.defaultProps = {
                initialTab: w.MEDIA,
                productsScrollOffset: 0
            }, N.displayName = "MediaGalleryDrawer"
        },
        53304: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, d.default)(e.mediaData, ["mediaStage", "renderableUrl"]);
                return (0, u.jsx)(s.default, {
                    mediaData: t,
                    placeholderRenderer: h,
                    children: function(e) {
                        return (0, u.jsx)(f, {
                            url: e
                        })
                    }
                })
            };
            var i = n(a(94184)),
                l = n(a(93603)),
                o = n(a(45159)),
                r = n(a(79741)),
                s = n(a(47251)),
                d = n(a(69283)),
                u = a(85893),
                c = function(e) {
                    e.stopPropagation()
                };

            function f(e) {
                var t = e.url;
                return (0, u.jsx)(l.default, {
                    url: t,
                    className: r.default.mediaViewerAudio,
                    onClick: c,
                    autoPlay: !0,
                    controls: !0,
                    children: o.default.t(275)
                })
            }

            function h() {
                return (0, u.jsx)("div", {
                    className: (0, i.default)(r.default.imageAudio, r.default.mediaViewerPlaceholder),
                    onClick: c
                })
            }
        },
        17044: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onHightlightCloseEnd,
                    a = e.msgIndexInAlbum,
                    n = e.onViewOnceInfoClick,
                    i = e.onGoToMsgClick,
                    b = e.onDownloadClick,
                    E = e.onReplyClick,
                    T = e.onDeleteClick,
                    I = e.onUnstarClick,
                    w = e.onStarClick,
                    N = e.openForwardFlow,
                    k = e.onMsgInfoClick,
                    P = (0, l.useRef)(null),
                    A = (0, j.default)(e.msg, ["star", "isGroupMsg", "chat", "type", "isGif", "isViewOnce", "sender", "senderObj", "t", "isSentByMe"]),
                    O = (0, j.default)(e.mediaData, ["filehash", "mediaStage", "renderableUrl"]);
                (0, S.useListener)(P.current, "animationend", (function() {
                    t()
                }));
                var R = A.displayName(!0, !0);
                A.isGroupMsg && (R += " @ " + A.chat.title());
                var D = function() {
                        return A.chat.isGroup ? h.default.t(1545) : h.default.t(1544, {
                            contactInfo: A.senderObj.displayName
                        })
                    },
                    L = function(e) {
                        var t = A.chat;
                        t && (e ? t.isGroup ? (0, x.sendSpamExitClear)(t, C.SpamFlow.MediaViewer) : (0, x.sendSpamBlockClear)(t, C.SpamFlow.MediaViewer) : (0, x.sendSpamReport)(t, C.SpamFlow.MediaViewer)), s.default.closeModal()
                    },
                    F = function() {
                        s.default.openModal((0, y.jsx)(M.default, {
                            isBusiness: A.senderObj.isBusiness,
                            isGroup: A.chat.isGroup,
                            onReport: L,
                            onCancel: function() {
                                return s.default.closeModal()
                            },
                            title: D()
                        }))
                    },
                    B = function() {
                        (0, g.default)(A)
                    },
                    G = function() {
                        return !A.isViewOnce && (!!O.renderableUrl || O.mediaStage === m.MEDIA_DATA_STAGE.RESOLVED)
                    },
                    V = function() {
                        var e = [];
                        return (A.canPrivateReply() || A.canPrivateReplyInRestrictedGrp()) && e.push((0, y.jsx)(c.default, {
                            a8n: "mi-msg-reply",
                            action: B,
                            children: h.default.t(1469)
                        }, "private_reply")), A.isViewOnce ? e.push((0, y.jsx)(c.default, {
                            action: F,
                            children: D()
                        }, "dropdownMsgInfo")) : (A.isSentByMe && e.push((0, y.jsx)(c.default, {
                            action: k,
                            children: h.default.t(1254)
                        }, "dropdownMsgInfo")), e.push((0, y.jsx)(c.default, {
                            action: i,
                            children: h.default.t(961)
                        }, "dropdownGoToMsg"), (0, y.jsx)(c.default, {
                            action: b,
                            disabled: !G(),
                            children: h.default.t(1932)
                        }, "dropdownDownload"))), (0, y.jsx)(v.MenuBarItem, {
                            icon: (0, y.jsx)(_.default, {
                                name: "menu"
                            }),
                            title: h.default.t(1246),
                            children: (0, y.jsx)(u.default, {
                                type: "dropdown_menu",
                                flipOnRTL: !0,
                                dirX: u.DirX.LEFT,
                                children: e
                            }, "MediaPanelHeaderDropdown")
                        }, "btnMenu")
                    },
                    U = function() {
                        var e, t, a;
                        return A.star ? (e = I, t = "unstar-btn", a = h.default.t(1746)) : (e = w, t = "star-btn", a = h.default.t(1659)), (0, y.jsx)(v.MenuBarItem, {
                            icon: (0, y.jsx)(_.default, {
                                name: t
                            }),
                            title: a,
                            onClick: e
                        }, t)
                    },
                    H = function() {
                        return (0, y.jsx)(v.MenuBarItem, {
                            icon: (0, y.jsx)(_.default, {
                                name: "forward"
                            }),
                            title: h.default.t(914),
                            onClick: N
                        }, "btnForward")
                    };
                return (0, y.jsxs)("div", {
                    className: p.default.mediaPanelHeader,
                    children: [(0, y.jsx)("div", {
                        className: p.default.info,
                        children: (0, y.jsx)(o.default, {
                            idle: !0,
                            image: (0, y.jsx)(d.default, {
                                id: A.sender,
                                size: 40
                            }),
                            primary: (0, y.jsx)(f.default, {
                                ellipsify: !0,
                                text: R
                            }),
                            secondary: r.default.relativeDateAndTimeStr(A.t),
                            theme: "media"
                        })
                    }), (0, y.jsx)("div", {
                        className: p.default.mediaPanelTools,
                        children: (0, y.jsxs)(v.MenuBar, {
                            theme: "strong",
                            children: [A.isViewOnce ? [(0, y.jsx)(v.MenuBarItem, {
                                icon: (0, y.jsx)(_.default, {
                                    name: "view-once",
                                    className: p.default.voIcon
                                }),
                                title: h.default.t(59),
                                onClick: n
                            }, "btnViewOnceInfo"), V()] : a >= 0 ? [A.canReply() ? (0, y.jsx)(v.MenuBarItem, {
                                icon: (0, y.jsx)(_.default, {
                                    name: "reply"
                                }),
                                title: h.default.t(1535),
                                onClick: E
                            }, "btnReply") : null, A.canStar() ? U() : null, (0, y.jsx)(v.MenuBarItem, {
                                icon: (0, y.jsx)(_.default, {
                                    name: "delete"
                                }),
                                title: h.default.t(1978),
                                onClick: T
                            }, "btnDelete"), A.canForward() ? H() : null, V()].filter(Boolean) : [(0, y.jsx)(v.MenuBarItem, {
                                icon: (0, y.jsx)(_.default, {
                                    name: "bubble"
                                }),
                                title: h.default.t(961),
                                onClick: i
                            }, "btnGoToMsg"), A.canStar() ? U() : null, A.canForward() ? H() : null, (0, y.jsx)(v.MenuBarItem, {
                                icon: (0, y.jsx)(_.default, {
                                    name: "download"
                                }),
                                title: h.default.t(1932),
                                disabled: !G(),
                                onClick: b
                            }, "btnDownload")].filter(Boolean), (0, y.jsx)(v.MenuBarItem, {
                                a8nText: "btn-close",
                                icon: (0, y.jsx)(_.default, {
                                    className: e.isHighlightClose ? p.default.highlightClose : null,
                                    containerRef: P,
                                    name: "x-viewer"
                                }),
                                title: h.default.t(1949),
                                onClick: e.onClose
                            })]
                        }, "media-panel-header")
                    })]
                })
            };
            var l = a(67294),
                o = i(a(88186)),
                r = i(a(10399)),
                s = i(a(65901)),
                d = i(a(66834)),
                u = n(a(98169)),
                c = i(a(94680)),
                f = i(a(73008)),
                h = i(a(45159)),
                p = i(a(77375)),
                m = a(41655),
                v = a(91823),
                g = i(a(71732)),
                x = a(43329),
                C = a(24170),
                _ = i(a(7665)),
                S = a(8413),
                j = i(a(69283)),
                M = i(a(43780)),
                y = a(85893)
        },
        51751: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(34575)),
                l = n(a(93913)),
                o = n(a(2205)),
                r = n(a(99842)),
                s = a(8587),
                d = a(67294),
                u = n(a(3228)),
                c = n(a(47934)),
                f = a(98585),
                h = a(98120),
                p = n(a(45159)),
                m = n(a(89805)),
                v = a(41655),
                g = n(a(50507)),
                x = n(a(43604)),
                C = n(a(58497)),
                _ = n(a(61897)),
                S = n(a(61566)),
                j = a(85893),
                M = function(e) {
                    (0, o.default)(a, e);
                    var t = (0, r.default)(a);

                    function a() {
                        var e;
                        (0, i.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l))).state = {
                            played: !1,
                            size: {
                                width: 0,
                                height: 0
                            },
                            isFullscreenMode: !1
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
                    return (0, l.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.mediaData.isStreamable() || this.props.msg.downloadMedia({
                                downloadEvenIfExpensive: !0,
                                rmrReason: g.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                                isUserInitiated: !0
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.props.msg.mediaObject && this.props.msg.cancelDownload()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.msg,
                                n = t.mediaData,
                                i = n.isGif,
                                l = n.mediaStage === v.MEDIA_DATA_STAGE.RESOLVED || n.streamable && n.isStreamable();
                            if (l = l || a.isForcingRMR()) {
                                var o, r, s = p.default.t(1800);
                                return !this.state.isFullscreenMode && a && a.interactiveAnnotations && a.interactiveAnnotations.length > 0 && (o = (0, j.jsx)(u.default, {
                                    annotations: a.interactiveAnnotations
                                })), r = i ? (0, j.jsxs)("div", {
                                    className: m.default.mediaViewerImg,
                                    ref: this._setRefContainer,
                                    children: [(0, j.jsx)(S.default, {
                                        src: n.renderableUrl,
                                        onClick: this.stopPropagation,
                                        autoPlay: !0,
                                        loop: !0,
                                        children: s
                                    }), o]
                                }) : (0, j.jsx)("div", {
                                    ref: this._setRefContainer,
                                    className: m.default.mediaViewerImg,
                                    onClick: this.stopPropagation,
                                    children: (0, j.jsx)(x.default, {
                                        msg: a,
                                        mediaData: n,
                                        startTime: this.props.startTime,
                                        onClose: this.props.onClose,
                                        onError: function() {},
                                        onFullscreenToggle: this._handleFullscreenToggle,
                                        autoPlay: this.props.autoPlay,
                                        type: f.PLAYER_TYPE.MEDIA_VIEWER,
                                        overlays: o,
                                        noPip: a.isViewOnce
                                    })
                                }), (0, j.jsx)(C.default, {
                                    type: "scaleDown",
                                    position: "relative",
                                    objectPosition: "relative",
                                    size: this.state.size,
                                    onObjectLoad: this.props.onLoad,
                                    children: r
                                })
                            }
                            return (0, j.jsx)(C.default, {
                                type: "scaleDown",
                                position: "relative",
                                objectPosition: "relative",
                                size: {
                                    width: this.props.mediaData.fullWidth,
                                    height: this.props.mediaData.fullHeight
                                },
                                children: (0, j.jsx)(c.default, {
                                    altText: null !== (e = a.caption) && void 0 !== e ? e : "",
                                    mediaData: n
                                })
                            })
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e) {
                            var t = e.mediaData;
                            return (t.mediaStage === v.MEDIA_DATA_STAGE.RESOLVED || t.streamable && t.isStreamable()) && (0, s.isNonZeroNumber)(t.fullWidth) && (0, s.isNonZeroNumber)(t.fullHeight) ? {
                                size: a.getSize(t)
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
                            return e.fullWidth >= h.MIN_WIDTH ? {
                                width: e.fullWidth,
                                height: e.fullHeight
                            } : {
                                width: h.MIN_WIDTH,
                                height: e.fullHeight
                            }
                        }
                    }]), a
                }(d.PureComponent);
            M.CONCERNS = {
                mediaData: ["mediaStage", "fullWidth", "fullHeight", "isGif", "isViewOnce", "preview", "renderableUrl", "streamable"]
            }, M.defaultProps = {
                startTime: 0
            }, M.displayName = "MediaVideo";
            var y = function(e) {
                (0, o.default)(a, e);
                var t = (0, r.default)(a);

                function a() {
                    return (0, i.default)(this, a), t.apply(this, arguments)
                }
                return (0, l.default)(a, [{
                    key: "getContainerElement",
                    value: function() {
                        return this.getComponent().refContainer
                    }
                }]), a
            }((0, _.default)(M, M.CONCERNS));
            t.default = y
        },
        92494: (e, t, a) => {
            "use strict";
            var n = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = i(a(59713)),
                o = i(a(34575)),
                r = i(a(93913)),
                s = i(a(2205)),
                d = i(a(99842)),
                u = i(a(94184)),
                c = a(74733),
                f = i(a(96486)),
                h = a(67294),
                p = (i(a(56720)), n(a(23145))),
                m = i(a(65901)),
                v = i(a(67771)),
                g = i(a(86777)),
                x = i(a(94253)),
                C = i(a(70428)),
                _ = i(a(73008)),
                S = i(a(76151)),
                j = i(a(29832)),
                M = a(49196),
                y = a(1577),
                b = i(a(30588)),
                E = i(a(58342)),
                T = a(72896),
                I = i(a(45159)),
                w = a(1435),
                N = i(a(53304)),
                k = i(a(72397)),
                P = i(a(67788)),
                A = i(a(17044)),
                O = i(a(65729)),
                R = a(41655),
                D = i(a(51751)),
                L = i(a(80674)),
                F = i(a(7520)),
                B = a(80385),
                G = i(a(61897)),
                V = a(68220),
                U = a(22552),
                H = a(82118),
                W = i(a(16835)),
                q = i(a(76080)),
                z = i(a(66265)),
                Y = a(85893),
                K = {
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
                t.composeQuotedMsg = e, m.default.focusChatTextInput(t)
            }
            var $ = function(e) {
                (0, s.default)(a, e);
                var t = (0, d.default)(a);

                function a(e) {
                    var n;
                    (0, o.default)(this, a), (n = t.call(this, e))._setRefMediaImage = function(e) {
                        n._refMediaImage = e
                    }, n._setRefMediaVideo = function(e) {
                        n._refMediaVideo = e
                    }, n._setRefHotKeys = function(e) {
                        n._refHotKeys = e
                    }, n._handleViewOnceInfoClick = function() {
                        n._showViewOnceNux()
                    }, n._showViewOnceNux = function() {
                        var e = n.props.mediaData,
                            t = (0, Y.jsx)(F.default, {
                                isPhoto: e.type === k.default.TYPE.IMAGE,
                                onOkClick: function() {
                                    m.default.closeModal()
                                }
                            });
                        m.default.openModal(t)
                    }, n._handleImageLoad = function(e) {
                        n.props.onImageLoad && n.props.onImageLoad();
                        var t = n.state.zoomElement;
                        t && e && n.props.isAnimatingIn && e instanceof HTMLElement && (n._zoomed || (n._zoomed = !0, n.animateZoom(t, e)))
                    }, n.animateZoom = function(e, t) {
                        var a, i = t.getBoundingClientRect(),
                            l = e.getBoundingClientRect(),
                            o = l.top - i.top,
                            r = l.left - i.left,
                            s = e.clientWidth / t.clientWidth;
                        o -= (t.clientHeight - e.clientHeight) / 2, r -= (t.clientWidth - e.clientWidth) / 2, (0, z.default)(t, {
                            opacity: [1, 0],
                            translateX: [0, r],
                            translateY: [0, o],
                            scale: [1, s]
                        }, {
                            duration: x.default.MEDIA_VIEWER.ANIMATION_DURATION,
                            easing: [.1, .82, .25, 1]
                        });
                        var d = null === (a = n._refCaption) || void 0 === a ? void 0 : a.getContainerElement();
                        d && (0, z.default)(d, {
                            opacity: [1, 0]
                        }, {
                            duration: x.default.MEDIA_VIEWER.ANIMATION_DURATION
                        })
                    }, n.openForwardFlow = function(e) {
                        e.stopPropagation();
                        var t = n.props.msg;
                        t.isUnsentMedia ? m.default.openModal((0, Y.jsx)(g.default, {
                            title: I.default.t(897),
                            onOK: function() {
                                return m.default.closeModal()
                            },
                            okText: I.default.t(2125),
                            children: I.default.t(894)
                        })) : m.default.openModal((0, Y.jsx)(M.ForwardMessageFlowLoadable, {
                            msgs: [(0, V.unproxy)(t)]
                        }), {
                            transition: "modal-flow"
                        })
                    }, n._handleReplyClick = function() {
                        n._handleClose(), (0, c.delayMs)(x.default.MEDIA_VIEWER.CLOSE_ANIMATION_DURATION).then(Z.bind(null, (0, V.unproxy)(n.props.msg)))
                    }, n._handleDeleteClick = function() {
                        var e = n.props.msg;
                        m.default.openModal((0, Y.jsx)(C.default, {
                            chat: e.chat,
                            msgList: [(0, V.unproxy)(e)],
                            deletePrompt: !0,
                            revokePrompt: e.canRevoke()
                        }))
                    }, n._handleMsgInfoClick = function() {
                        n._handleClose(), (0, c.delayMs)(x.default.MEDIA_VIEWER.CLOSE_ANIMATION_DURATION + 250).then(m.default.msgInfoDrawer.bind(m.default, (0, V.unproxy)(n.props.msg)))
                    }, n._handleImgZoomIn = function(e) {
                        var t = n._refMediaImage;
                        e && t && (n._listenToMouseMove = t.heightOverflow > 0 || t.widthOverflow > 0), n.setState({
                            imgZoomed: e
                        }), n.props.onImgZoomIn(e)
                    }, n._handleZoomOut = function(e) {
                        n._updateZoomPosition.cancel();
                        var t = n._refMediaImage;
                        t && n.state.imgZoomed && t.onImageClick(e)
                    }, n._handleMouseMove = function(e) {
                        n._updateZoomPosition(e.pageX, e.pageY)
                    }, n._updateZoomPosition = f.default.throttle((function(e, t) {
                        if (!n.state.annotationTooltipDisplayed) {
                            var a = n._refMediaImage;
                            if (a) {
                                var i = a.getInsideContainer();
                                if (i && i instanceof HTMLElement) {
                                    var l = a.getOutsideContainer();
                                    if (l && l instanceof HTMLElement) {
                                        var o = a.getTranslatePosition(l, e, t),
                                            r = o.translateX,
                                            s = o.translateY;
                                        (0, z.default)(i, "stop"), (0, z.default)(i, {
                                            translateX: r,
                                            translateY: s,
                                            scale: x.default.MEDIA_VIEWER.ZOOM_IN_FACTOR
                                        }, {
                                            duration: 0
                                        })
                                    }
                                }
                            }
                        }
                    })), n._handleKeyboardZoom = function(e) {
                        if (!n.props.isAnimatingIn) {
                            n._updateZoomPosition.cancel();
                            var t = n._refMediaImage;
                            null != t && t.onImageKeyboardZoom(e)
                        }
                    }, n._handleDownloadClick = function(e) {
                        e.stopPropagation(), S.default.initDownload((0, V.unproxy)(n.props.msg))
                    }, n._handleStarClick = function(e) {
                        e.stopPropagation();
                        var t = n.props.msg;
                        m.default.sendStarMsgs(t.chat, [(0, V.unproxy)(t)])
                    }, n._handleUnstarClick = function(e) {
                        e.stopPropagation();
                        var t = n.props.msg;
                        m.default.sendUnstarMsgs(t.chat, [(0, V.unproxy)(t)])
                    }, n._handleGoToMsgClick = function(e) {
                        e.stopPropagation(), n._handleClose(), m.default.existsDrawerRight((function(e) {
                            e && 2 === v.default.column && m.default.closeDrawerRight()
                        }));
                        var t = n.props.msg,
                            a = t.chat.getSearchContext((0, V.unproxy)(t));
                        m.default.openChatAt(t.chat, a).then((function(e) {
                            e && m.default.focusChatTextInput(t.chat)
                        }))
                    }, n._handleClose = function() {
                        if (!n._closing) {
                            n._closing = !0, (0, H.isFunction)(n.props.onExitAnimation) && n.props.onExitAnimation();
                            var e, t = n.props.getZoomNode && n.props.getZoomNode(n.props.msg.id);
                            if (!t) return n.props.onBack();
                            if (n.props.mediaData.type === k.default.TYPE.IMAGE && n._refMediaImage ? e = n._refMediaImage.getInsideContainer() : n.props.mediaData.isGif && n._refMediaVideo && (e = n._refMediaVideo.getContainerElement()), !e) return n.props.onBack();
                            var a, i = e,
                                l = e.getBoundingClientRect(),
                                o = t.getBoundingClientRect(),
                                r = o.top - l.top,
                                s = o.left - l.left,
                                d = t.clientWidth / i.clientWidth;
                            r -= (i.clientHeight - t.clientHeight) / 2, s -= (i.clientWidth - t.clientWidth) / 2, (0, z.default)(e, {
                                translateX: [s, 0],
                                translateY: [r, 0],
                                scale: [d, 1]
                            }, {
                                duration: x.default.MEDIA_VIEWER.CLOSE_ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            }).then((function() {
                                n.props.onBack()
                            }));
                            var u = null === (a = n._refCaption) || void 0 === a ? void 0 : a.getContainerElement();
                            u && (0, z.default)(u, {
                                opacity: [0, 1]
                            }, {
                                duration: x.default.MEDIA_VIEWER.CLOSE_ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            })
                        }
                    }, n._handleClickToCloseBlocked = function() {
                        n.setState({
                            isHighlightClose: !0
                        })
                    }, n._handleHighlightCloseEnd = function() {
                        n.setState({
                            isHighlightClose: !1
                        })
                    }, n._handleAnnotationTooltipDisplay = function() {
                        return n.setState({
                            annotationTooltipDisplayed: !0
                        })
                    }, n._handleAnnotationTooltipDismiss = function() {
                        return n.setState({
                            annotationTooltipDisplayed: !1
                        })
                    }, n._handleCaptionClick = function(e) {
                        e.stopPropagation(), n.setState((function(e) {
                            return {
                                isCaptionExpanded: !e.isCaptionExpanded
                            }
                        }))
                    }, n._zoomed = !1, n._closing = !1, n._listenToMouseMove = !1, n._shouldShowViewOnceNux = e.msg.isViewOnce && (0, y.shouldShowNUX)(x.default.NUX.EPHEMERAL_VIEW_ONCE_RECEIVER);
                    var i = e.mediaData.mediaStage === R.MEDIA_DATA_STAGE.RESOLVED && e.isAnimatingIn && e.getZoomNode ? e.getZoomNode(e.msg.id) : null;
                    return n.state = {
                        zoomElement: i,
                        imgZoomed: !1,
                        annotationTooltipDisplayed: !1,
                        isCaptionVisible: !e.isAnimatingIn,
                        isCaptionExpanded: !1,
                        isHighlightClose: !1
                    }, n
                }
                return (0, r.default)(a, [{
                    key: "componentDidMount",
                    value: function() {
                        __LOG__(2)`MediaViewerModal: Opened`;
                        var e = this.props.msg;
                        e.isViewOnce && (0, w.canMarkPlayed)(e) && (0, w.markPlayed)(e), this._shouldShowViewOnceNux && this._showViewOnceNux(), j.default.focus(this._refHotKeys)
                    }
                }, {
                    key: "getSnapshotBeforeUpdate",
                    value: function() {
                        var e, t = null === (e = this._refCaption) || void 0 === e ? void 0 : e.getContainerElement();
                        return null != t && null == this._captionExpandable && (this._captionExpandable = t.scrollHeight > t.clientHeight), null
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this.state.isCaptionVisible;
                        this.props.isAnimatingIn || t || !e.isAnimatingIn || this.setState({
                            isCaptionVisible: !0
                        })
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        __LOG__(2)`MediaViewerModal: Closed`, this._updateZoomPosition.cancel()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t, a, n, i, o, r, s = this,
                            d = this.props,
                            c = d.msg,
                            f = d.mediaData;
                        switch (f.type) {
                            case k.default.TYPE.IMAGE:
                                o = (0, Y.jsx)(P.default, {
                                    msg: c,
                                    mediaData: f,
                                    onLoad: this._handleImageLoad,
                                    onImgZoomIn: this._handleImgZoomIn,
                                    onAnnotationTooltipDisplay: this._handleAnnotationTooltipDisplay,
                                    onAnnotationTooltipDismiss: this._handleAnnotationTooltipDismiss,
                                    preventDownload: c.isViewOnce,
                                    ref: this._setRefMediaImage
                                }, c.id.toString());
                                break;
                            case k.default.TYPE.VIDEO:
                                o = (0, Y.jsx)(D.default, {
                                    autoPlay: !this._shouldShowViewOnceNux,
                                    msg: c,
                                    mediaData: f,
                                    onLoad: f.isGif ? this._handleImageLoad : null,
                                    startTime: this.props.startTime,
                                    onClose: this._handleClose,
                                    ref: this._setRefMediaVideo
                                }, c.id.toString());
                                break;
                            case k.default.TYPE.AUDIO:
                                o = (0, Y.jsx)(N.default, {
                                    mediaData: f
                                }, c.id.toString());
                                break;
                            default:
                                __LOG__(4, void 0, new Error, !0)`type: ${f.type}`, SEND_LOGS("MediaViewerModal: unexpected media type")
                        }
                        var h = this.props.msgIndexInAlbum >= 0 && this.props.albumSize >= 0;
                        if (c.caption || h) {
                            var m, v;
                            if (h) {
                                var g = {
                                    number: this.props.msgIndexInAlbum + 1,
                                    totalNumber: this.props.albumSize
                                };
                                v = I.default.t(1404, g)
                            }
                            var x = T.Configuration.Conversation({
                                    mentions: c.mentionMap(),
                                    links: c.getLinks(),
                                    trusted: !0
                                }),
                                C = !this.state.isCaptionVisible && (f.isGif || f.type === k.default.TYPE.IMAGE);
                            r = (0, Y.jsxs)(Y.Fragment, {
                                children: [(0, Y.jsxs)("p", {
                                    className: (0, u.default)(L.default.captionWrapper, this._captionExpandable && L.default.captionWrapperExpandable),
                                    onClick: this._captionExpandable ? this._handleCaptionClick : void 0,
                                    title: this._captionExpandable ? I.default.t(1528) : void 0,
                                    "aria-hidden": this.state.isCaptionExpanded || void 0,
                                    children: [(0, Y.jsx)(_.default, {
                                        className: (0, u.default)(L.default.mediaCaption, (m = {}, (0, l.default)(m, L.default.captionHidden, C), (0, l.default)(m, L.default.expanded, this.state.isCaptionExpanded), m)),
                                        formatters: x,
                                        ref: function(e) {
                                            function t() {
                                                return e.apply(this, arguments)
                                            }
                                            return t.toString = function() {
                                                return e.toString()
                                            }, t
                                        }((function(e) {
                                            s._refCaption = e
                                        })),
                                        text: c.caption || v
                                    }), this._captionExpandable && (0, Y.jsx)(q.default, {
                                        xstyle: [K.captionReadMoreBtn, this.state.isCaptionExpanded && K.captionReadMoreBtnExpanded, this.state.imgZoomed && K.captionReadMoreBtnZoomed],
                                        onClick: this._handleCaptionClick,
                                        children: (0, Y.jsx)(U.TextSpan, {
                                            children: I.default.t(1528)
                                        })
                                    })]
                                }), this.state.isCaptionExpanded && (0, Y.jsx)("p", {
                                    className: (0, u.default)(L.default.captionWrapper, L.default.captionWrapperExpandable, L.default.captionExpanded),
                                    onClick: this._handleCaptionClick,
                                    children: (0, Y.jsx)(_.default, {
                                        className: (0, u.default)(L.default.mediaCaption, L.default.mediaCaptionExpanded),
                                        formatters: x,
                                        text: c.caption
                                    })
                                })]
                            })
                        }
                        var S = (0, u.default)(L.default.media, (0, l.default)({}, L.default.mediaWithCaption, !!r)),
                            j = (0, u.default)("overlay", L.default.mediaViewer, (e = {}, (0, l.default)(e, L.default.viewOnce, c.isViewOnce), (0, l.default)(e, L.default.mediaViewerAnimate, this.props.isAnimatingIn), (0, l.default)(e, L.default.cursorZoomOut, this.state.imgZoomed), e)),
                            M = this.state.imgZoomed && this._listenToMouseMove ? this._handleMouseMove : null,
                            y = this.state.imgZoomed ? this._handleZoomOut : null,
                            w = this.state.imgZoomed ? null : this._handleClose;
                        null != w && c.isViewOnce && (w = this._handleClickToCloseBlocked);
                        var R = !c.isViewOnce;
                        return (0, Y.jsx)(W.default, {
                            displayName: "MediaViewer",
                            escapable: !0,
                            requestDismiss: this._handleClose,
                            children: (0, Y.jsx)(E.default, {
                                handlers: {
                                    space: this._handleKeyboardZoom
                                },
                                onRef: this._setRefHotKeys,
                                children: (0, Y.jsxs)("div", {
                                    className: j,
                                    "data-animate-media-viewer": !0,
                                    onClick: y,
                                    onMouseMove: M,
                                    children: [(0, Y.jsx)(A.default, {
                                        isHighlightClose: this.state.isHighlightClose,
                                        msg: c,
                                        mediaData: f,
                                        onClose: this._handleClose,
                                        onGoToMsgClick: this._handleGoToMsgClick,
                                        onHightlightCloseEnd: this._handleHighlightCloseEnd,
                                        onReplyClick: this._handleReplyClick,
                                        onUnstarClick: this._handleUnstarClick,
                                        onStarClick: this._handleStarClick,
                                        onDeleteClick: this._handleDeleteClick,
                                        openForwardFlow: this.openForwardFlow,
                                        onDownloadClick: this._handleDownloadClick,
                                        onMsgInfoClick: this._handleMsgInfoClick,
                                        onViewOnceInfoClick: this._handleViewOnceInfoClick,
                                        msgIndexInAlbum: this.props.msgIndexInAlbum
                                    }), (0, Y.jsxs)("div", {
                                        className: L.default.mediaContent,
                                        onClick: w,
                                        children: [R && (0, Y.jsx)("div", {
                                            className: (0, u.default)(L.default.btnMediaPrev),
                                            children: (0, Y.jsx)(p.default, {
                                                type: p.ButtonType.Prev,
                                                onClick: null !== (t = this.props.onPrev) && void 0 !== t ? t : X,
                                                onKeyDown: null !== (a = this.props.onPrev) && void 0 !== a ? a : X,
                                                disabled: !this.props.onPrev || this.state.imgZoomed,
                                                theme: B.RoundTheme.Default
                                            })
                                        }), (0, Y.jsxs)("div", {
                                            className: S,
                                            children: [(0, Y.jsx)(O.default, {
                                                msg: c,
                                                mediaData: f
                                            }), o, (0, Y.jsx)(b.default.Provider, {
                                                value: c.chat.groupMetadata,
                                                children: r
                                            })]
                                        }), R && (0, Y.jsx)("div", {
                                            className: (0, u.default)(L.default.btnMediaNext),
                                            children: (0, Y.jsx)(p.default, {
                                                type: p.ButtonType.Next,
                                                onClick: null !== (n = this.props.onNext) && void 0 !== n ? n : X,
                                                onKeyDown: null !== (i = this.props.onNext) && void 0 !== i ? i : X,
                                                disabled: !this.props.onNext || this.state.imgZoomed,
                                                theme: B.RoundTheme.Default
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    }
                }]), a
            }(h.PureComponent);
            $.CONCERNS = {
                msg: ["id", "star", "isUnsentMedia", "isViewOnce", "chat", "caption", "interactiveAnnotations"],
                mediaData: ["mediaStage", "type", "isGif"]
            }, $.displayName = "MediaViewerModal";
            var Q = (0, G.default)($, $.CONCERNS);
            t.default = Q
        },
        82184: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(34575)),
                l = n(a(93913)),
                o = n(a(2205)),
                r = n(a(99842)),
                s = n(a(96486)),
                d = a(67294),
                u = n(a(3527)),
                c = n(a(69371)),
                f = n(a(76479)),
                h = n(a(85651)),
                p = a(85893),
                m = function(e) {
                    (0, o.default)(a, e);
                    var t = (0, r.default)(a);

                    function a(e) {
                        var n;
                        return (0, i.default)(this, a), (n = t.call(this, e))._setThumbRef = function(e, t) {
                            n._thumbRefs[t] = e
                        }, n._isPreviewPreferred = function(e) {
                            var t = n._thumbRefs[e];
                            if (!t) return !1;
                            var a = t.getBoundingClientRect(),
                                i = (a.left + a.right) / 2;
                            return !(i > -1 * window.innerWidth && i < 2 * window.innerWidth)
                        }, n._getMsgIdToPreferPreview = function() {
                            var e = new Map;
                            return n.props.mediaMsgs.forEach((function(t) {
                                var a = t.id.toString();
                                e.set(a, n._isPreviewPreferred(a))
                            })), e
                        }, n.onScroll = function(e) {
                            n.handleScroll(), n.props.onScroll(e)
                        }, n._handleScroll = function() {
                            var e = n._getMsgIdToPreferPreview();
                            (0, u.default)(n.state.msgIdToPreferPreview, e) || n.setState({
                                msgIdToPreferPreview: e
                            })
                        }, n.getThumbs = function() {
                            var e = n.props.highlightedMsgIds,
                                t = e && e.size > 0 && e.has(n.props.activeMsg.id.toString()),
                                a = [];
                            return n.props.mediaMsgs.forEach((function(i) {
                                if (null != i.mediaData) {
                                    var l = t && e && !e.has(i.id.toString()) ? "viewerFlowTransparent" : "viewerFlow";
                                    a.push((0, p.jsx)(c.default, {
                                        theme: l,
                                        active: i === n.props.activeMsg,
                                        msg: i,
                                        containerRef: function(e) {
                                            n._setThumbRef(e, i.id.toString()), i === n.props.activeMsg && n.props.onSetActiveThumb(e)
                                        },
                                        onClick: function() {
                                            n.props.onSelectThumb(i)
                                        },
                                        preferPreview: !!n.state.msgIdToPreferPreview.get(i.id.toString()),
                                        showTooltip: i.isGroupMsg
                                    }, `media-${i.id.id}`))
                                } else {
                                    var o = n.props.activeMsg;
                                    __LOG__(3, !0)`MediaViewerFlow: attempted to render a msg without mediaData: ${JSON.stringify({type:i.type,isMedia:i.isMedia,startMsgType:o.type,startMsgIsMedia:o.isMedia})}`
                                }
                            })), a.push((0, p.jsx)("div", {
                                className: f.default.mediaThumb,
                                children: n.props.mediaMsgs.queryMediaAfter ? (0, p.jsx)(h.default, {
                                    stroke: 6,
                                    size: 24
                                }) : null
                            }, "spinner-right")), a.unshift((0, p.jsx)("div", {
                                className: f.default.mediaThumb,
                                children: n.props.mediaMsgs.queryMediaBefore ? (0, p.jsx)(h.default, {
                                    stroke: 6,
                                    size: 24
                                }) : null
                            }, "spinner-left")), a.push((0, p.jsx)("div", {
                                className: f.default.thumbPadding
                            }, "padding-right")), a.unshift((0, p.jsx)("div", {
                                className: f.default.thumbPadding
                            }, "padding-left")), a
                        }, n._thumbRefs = {}, n.handleScroll = s.default.throttle(n._handleScroll, 100), n.state = {
                            msgIdToPreferPreview: n._getMsgIdToPreferPreview()
                        }, n
                    }
                    return (0, l.default)(a, [{
                        key: "componentWillUnmount",
                        value: function() {
                            this.handleScroll.cancel()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.getThumbs();
                            return (0, p.jsx)("div", {
                                className: f.default.thumbsContainer,
                                ref: this.props.setRefThumbsContainer,
                                children: (0, p.jsx)("div", {
                                    className: f.default.scrollContainer,
                                    dir: "ltr",
                                    children: (0, p.jsx)("div", {
                                        onScroll: this.onScroll,
                                        className: f.default.viewerThumbs,
                                        ref: this.props.setRefThumbs,
                                        children: e
                                    })
                                })
                            })
                        }
                    }]), a
                }(d.Component);
            t.default = m, m.displayName = "MediaViewerThumbList"
        },
        7520: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onOkClick;
                return (0, i.useEffect)((function() {
                    (0, u.setNUX)(o.default.NUX.EPHEMERAL_VIEW_ONCE_RECEIVER, {
                        views: 1,
                        maxViews: 1
                    })
                }), []), (0, m.jsx)(l.default, {
                    onOK: t,
                    cancelText: c.default.t(1120),
                    onCancel: function() {
                        (0, r.openExternalLink)((0, s.getViewOnceFaqUrl)())
                    },
                    children: (0, m.jsxs)(d.FlexColumn, {
                        children: [(0, m.jsx)(d.FlexItem, {
                            xstyle: v.graphic,
                            align: "center",
                            children: (0, m.jsx)(h.default, {
                                name: "view-once-sender-nux",
                                width: 195,
                                height: 177
                            })
                        }), (0, m.jsx)(p.TextHeader, {
                            className: f.default.text,
                            theme: "popup-title",
                            children: e.isPhoto ? c.default.t(1814) : c.default.t(1817)
                        }), (0, m.jsx)(p.TextParagraph, {
                            className: f.default.text,
                            children: e.isPhoto ? c.default.t(1813) : c.default.t(1816)
                        })]
                    })
                })
            };
            var i = a(67294),
                l = (n(a(56720)), n(a(86777))),
                o = n(a(94253)),
                r = a(49012),
                s = a(29281),
                d = a(27968),
                u = a(1577),
                c = n(a(45159)),
                f = n(a(82326)),
                h = n(a(7665)),
                p = a(22552),
                m = a(85893),
                v = {
                    graphic: {
                        marginBottom: "t4zgqcuo"
                    }
                }
        },
        52592: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(34575)),
                l = n(a(93913)),
                o = n(a(2205)),
                r = n(a(99842)),
                s = a(67294),
                d = n(a(65901)),
                u = n(a(86777)),
                c = n(a(45159)),
                f = n(a(17391)),
                h = a(22552),
                p = a(85893),
                m = function(e) {
                    (0, o.default)(a, e);
                    var t = (0, r.default)(a);

                    function a(e) {
                        var n;
                        return (0, i.default)(this, a), (n = t.call(this, e))._handleOK = function() {
                            var e = n.state.selectedValue;
                            null != e && n.props.onSelect(e), n.closeModal()
                        }, n._handleChange = function(e) {
                            var t = e.target;
                            t instanceof HTMLInputElement && n.setState({
                                selectedValue: parseInt(t.value, 10)
                            })
                        }, n.closeModal = function() {
                            d.default.closeModal()
                        }, n.state = {
                            selectedValue: e.initialValue
                        }, n
                    }
                    return (0, l.default)(a, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.options,
                                n = t.explanation,
                                i = a.map((function(t) {
                                    var a = t.value,
                                        n = t.label;
                                    return (0, p.jsx)("li", {
                                        children: (0, p.jsxs)("label", {
                                            className: f.default.label,
                                            children: [(0, p.jsx)("input", {
                                                type: "radio",
                                                className: f.default.input,
                                                value: String(a),
                                                checked: a === e.state.selectedValue,
                                                onChange: e._handleChange
                                            }), n]
                                        })
                                    }, `setting-${a}`)
                                }));
                            return (0, p.jsxs)(u.default, {
                                title: this.props.title,
                                okText: c.default.t(700),
                                onOK: this._handleOK,
                                onCancel: this.closeModal,
                                children: [n ? (0, p.jsx)(h.TextDiv, {
                                    theme: "muted",
                                    className: f.default.explanation,
                                    children: n
                                }) : null, (0, p.jsx)("form", {
                                    children: (0, p.jsx)("ol", {
                                        children: i
                                    })
                                })]
                            })
                        }
                    }]), a
                }(s.PureComponent);
            t.default = m, m.displayName = "SettingsPopup"
        },
        36230: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact,
                    a = (0, x.default)(t, ["verifiedLevel", "verifiedName"]),
                    n = a.verifiedLevel,
                    _ = a.verifiedName,
                    S = (0, h.getBusinessFaqUrl)(),
                    j = !d.default.isSMB;
                (0, i.useEffect)((function() {
                    j && new m.default.BannerEvent({
                        bannerType: m.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                        bannerOperation: m.default.BANNER_OPERATIONS.SHOWN
                    }).commit()
                }), [j]);
                var M = n === u.default.VERIFIED_LEVEL.HIGH ? p.default.t(2199, {
                    businessName: _
                }) : p.default.t(2198);
                return (0, C.jsxs)(s.default, {
                    title: p.default.t(2201),
                    onOK: function() {
                        r.default.closeModal(), j && new m.default.BannerEvent({
                            bannerType: m.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: m.default.BANNER_OPERATIONS.DISMISS
                        }).commit()
                    },
                    okText: p.default.t(2125),
                    children: [(0, C.jsx)(c.default, {
                        text: M
                    }), " ", (0, C.jsx)(o.default, {
                        href: S,
                        onClick: function(e) {
                            e.preventDefault(), r.default.closeModal(), setTimeout((function() {
                                return (0, f.openExternalLink)(S)
                            }), 10)
                        },
                        children: p.default.t(1120)
                    }), j && (0, C.jsx)("div", {
                        className: l.default.footerNote,
                        children: (0, C.jsxs)(g.TextSpan, {
                            theme: "muted",
                            size: "13",
                            children: [p.default.t(2202), (0, C.jsx)("br", {}), (0, C.jsx)(o.default, {
                                onClick: function(e) {
                                    e.preventDefault(), r.default.closeModal(), new m.default.BannerEvent({
                                        bannerType: m.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                                        bannerOperation: m.default.BANNER_OPERATIONS.CLICK
                                    }).commit(), setTimeout((function() {
                                        return r.default.openModal((0, C.jsx)(v.default, {}))
                                    }), 200)
                                },
                                className: l.default.getTheAppLink,
                                children: p.default.t(2200)
                            })]
                        })
                    })]
                })
            };
            var i = a(67294),
                l = n(a(16509)),
                o = n(a(81288)),
                r = n(a(65901)),
                s = n(a(86777)),
                d = n(a(73929)),
                u = n(a(94253)),
                c = n(a(73008)),
                f = a(49012),
                h = a(29281),
                p = n(a(45159)),
                m = n(a(50507)),
                v = n(a(10082)),
                g = a(22552),
                x = n(a(69283)),
                C = a(85893)
        },
        10082: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return (0, f.jsxs)(o.default, {
                    title: d.default.t(2205),
                    onOK: function() {
                        new u.default.BannerEvent({
                            bannerType: u.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: u.default.BANNER_OPERATIONS.DISMISS
                        }).commit(), l.default.closeModal()
                    },
                    okText: d.default.t(1949),
                    children: [(0, f.jsx)(c.default, {}), (0, f.jsx)("p", {
                        children: (0, f.jsx)(r.default, {
                            text: d.default.t(2203)
                        })
                    }), (0, f.jsx)("br", {}), (0, f.jsxs)("p", {
                        children: [(0, f.jsx)(r.default, {
                            text: d.default.t(2204)
                        }), " ", (0, f.jsx)(i.default, {
                            href: h,
                            onClick: function(e) {
                                e.preventDefault(), l.default.closeModal(), setTimeout((function() {
                                    return (0, s.openExternalLink)(h)
                                }), 10)
                            },
                            children: d.default.t(1120)
                        })]
                    })]
                })
            }, t.WHATSAPP_BUSINESS_URL = void 0;
            var i = n(a(81288)),
                l = n(a(65901)),
                o = n(a(86777)),
                r = n(a(73008)),
                s = a(49012),
                d = n(a(45159)),
                u = n(a(50507)),
                c = n(a(29099)),
                f = a(85893),
                h = "https://www.whatsapp.com/business";
            t.WHATSAPP_BUSINESS_URL = h
        },
        29099: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = (0, o.useRef)(null),
                    t = (0, o.useRef)(null),
                    a = (0, o.useContext)(u.default).theme,
                    n = "dark" === a;
                return (0, o.useEffect)((function() {
                    return null != e.current && (t.current = new s.default(e.current, {
                            text: "https://www.whatsapp.com/business/download",
                            colorDark: "#122e31",
                            colorLight: "#ffffff",
                            width: r.default.QR_EDGE / 2,
                            height: r.default.QR_EDGE / 2,
                            typeNumber: 4,
                            correctLevel: s.default.CorrectLevel.H
                        })),
                        function() {
                            null != t.current && (t.current.clear(), t.current = null, e.current = null)
                        }
                }), [n]), (0, c.jsx)("div", {
                    className: d.default.wrapper,
                    children: (0, c.jsx)("div", {
                        ref: e,
                        className: (0, l.default)(d.default.code, (0, i.default)({}, d.default.codeDarkMode, n)),
                        children: (0, c.jsx)(f, {
                            theme: a
                        })
                    })
                })
            };
            var i = n(a(59713)),
                l = n(a(94184)),
                o = a(67294),
                r = n(a(94253)),
                s = n(a(37360)),
                d = n(a(88959)),
                u = n(a(63443)),
                c = a(85893);

            function f() {
                return (0, c.jsx)("div", {
                    className: d.default.codeLogo,
                    children: (0, c.jsx)("svg", {
                        width: "100%",
                        viewBox: "0 0 50 50",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, c.jsx)("path", {
                            d: "M42.6776 42.6779C37.9558 47.3997 31.6777 50.0001 24.9999 50.0001C21.0047 50.0001 17.0541 49.0389 13.5244 47.2141L0.601068 49.3339L2.72832 36.3645C0.941278 32.8647 0 28.9525 0 25.0001C0 18.3223 2.60042 12.0443 7.32229 7.32237C12.0442 2.6005 18.3221 0 24.9999 0C31.6777 0 37.9558 2.6005 42.6776 7.32237C47.3995 12.0443 50 18.3223 50 25.0001C50 31.678 47.3995 37.9558 42.6776 42.6779ZM24.9999 4.33778C13.6067 4.33778 4.33772 13.607 4.33772 25.0001C4.33772 28.4792 5.21935 31.9192 6.8868 34.9487L7.24853 35.6054L5.85915 44.0756L14.2959 42.6918L14.9565 43.0601C18.0107 44.7624 21.4837 45.6622 24.9999 45.6622C36.3932 45.6622 45.6622 36.3933 45.6622 25.0001C45.6622 13.607 36.3932 4.33778 24.9999 4.33778ZM31.1133 24.3614C32.4522 24.9804 34.1536 26.3725 34.1208 29.3117C34.0749 33.4266 31.2191 35.6542 27.2744 35.6542H19.4594H18.3042C17.5079 35.6542 16.8645 35.0053 16.8713 34.2092L17.0344 15.0573C17.041 14.2714 17.6794 13.6377 18.4652 13.6366L27.1493 13.6256C31.4651 13.6256 33.9598 16.039 33.9177 19.8134C33.8903 22.2579 32.2484 23.8355 31.1133 24.3614ZM26.766 17.4622H21.3643L21.3076 22.5361H26.7093C28.5347 22.5361 29.5672 21.5152 29.584 19.9992C29.6009 18.4831 28.5915 17.4622 26.766 17.4622ZM26.9444 26.4035H21.2643L21.2038 31.8178H26.884C28.8333 31.8178 29.7752 30.5802 29.792 29.0952C29.8085 27.6101 28.8939 26.4035 26.9444 26.4035Z",
                            fill: "currentColor"
                        })
                    })
                })
            }
        },
        43780: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a, n, h = (0, l.useState)(!1),
                    p = (0, i.default)(h, 2),
                    m = p[0],
                    v = p[1];
                e.isGroup ? (t = d.default.t(1557), a = d.default.t(1560), n = d.default.t(1984)) : e.isBusiness ? (t = d.default.t(1555), a = d.default.t(1558), n = d.default.t(321)) : (t = d.default.t(1556), a = d.default.t(1559), n = d.default.t(323));
                return (0, f.jsxs)(r.default, {
                    onOK: function() {
                        e.onReport(m)
                    },
                    okText: d.default.t(1536),
                    onCancel: e.onCancel,
                    title: e.title,
                    children: [(0, f.jsx)(u.TextParagraph, {
                        className: c.default.section,
                        color: "muted",
                        children: t
                    }), (0, f.jsx)(u.TextParagraph, {
                        className: c.default.section,
                        color: "muted",
                        children: a
                    }), (0, f.jsxs)(s.FlexRow, {
                        align: "center",
                        justify: "start",
                        children: [(0, f.jsx)(o.default, {
                            onChange: function() {
                                return v((function(e) {
                                    return !e
                                }))
                            },
                            checked: m,
                            id: "menu-icon-report-spam"
                        }), (0, f.jsx)(u.TextLabel, {
                            className: c.default.checkboxLabel,
                            htmlFor: "menu-icon-report-spam",
                            color: "muted",
                            children: n
                        })]
                    })]
                })
            };
            var i = n(a(63038)),
                l = a(67294),
                o = n(a(91404)),
                r = n(a(86777)),
                s = a(27968),
                d = n(a(45159)),
                u = a(22552),
                c = n(a(56454)),
                f = a(85893)
        },
        3527: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var a;
                if (e.size !== t.size) return !1;
                var n, o = (0, l.default)(e);
                try {
                    for (o.s(); !(n = o.n()).done;) {
                        var r = (0, i.default)(n.value, 2),
                            s = r[0],
                            d = r[1];
                        if ((a = t.get(s)) !== d || void 0 === a && !t.has(s)) return !1
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
                return !0
            };
            var i = n(a(63038)),
                l = n(a(43269))
        },
        59828: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                audioTag: "_1ichq"
            }
        },
        66322: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                header: "_2J_Rg",
                chevronIcon: "_3grvf",
                ephemeralIcon: "_36-dp"
            }
        },
        8767: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                msg: "_3YiZC",
                text: "RmpKn",
                bubble: "_2z0p1",
                author: "XntIB",
                hasSuspiciousLinks: "_3bU-2",
                hasAuthor: "_2cFHu",
                suspiciousLabel: "_2tYTz"
            }
        },
        87917: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                roundedThumb: "PZyAb"
            }
        },
        45494: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                container: "_2G0i8"
            }
        },
        10095: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                mediaCanvas: "_7xcOR",
                shade: "_3t-Dc",
                iconStar: "qSojz",
                shadeTop: "kt7p8",
                canvasBody: "_2pnVj",
                canvasSelected: "xRcWX",
                mediaSelect: "_2GKAW",
                canvasComponent: "_3_8JL",
                canvasSecondRow: "_2j2vv",
                viewerFlow: "q0PwG",
                active: "_2IToT",
                viewerFlowTransparent: "_1Brnl"
            }
        },
        73148: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                container: "_3QXeb",
                selected: "_11w_h"
            }
        },
        87114: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                iconType: "_1Dw5O"
            }
        },
        68198: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                wrapper: "_11tTr"
            }
        },
        85967: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                nuxContainer: "_2MN2b",
                flatListContainer: "_3P67r",
                btnClose: "_1rNId",
                nuxHeader: "_1fDhw",
                nuxContent: "_3CSup",
                nuxIcon: "wZmgd",
                nuxText: "_23F3I"
            }
        },
        8521: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                body: "_3fwY2",
                chevron: "_1-yxK"
            }
        },
        12945: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                businessAccount: "_3WoOY",
                businessTitleText: "_1b76N",
                businessTitleWithSMBUpsell: "_3o5KS",
                businessTitleWithSmbUpsell: "_3o5KS"
            }
        },
        33463: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                businessHoursRow: "_2438e",
                firstRow: "_2aGH7",
                businessHoursDay: "Wb7rm",
                businessHoursHours: "_1Mczx",
                dayIsOpen: "_1kitz",
                businessHoursChevron: "_3rrGE",
                flipSvg: "mqqNO"
            }
        },
        85938: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                section: "h_jr2",
                description: "_2q04R",
                map: "_1I-_B"
            }
        },
        90123: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                wrapper: "_1KYpA",
                title: "_3vc4r",
                subtitle: "_3QsTT",
                verifiedText: "U1NnE",
                icon: "_3g_j1"
            }
        },
        44920: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                open: "_30zzj",
                closed: "_3wZZK",
                openStatus: "_1domD"
            }
        },
        35100: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
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
        8342: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                info: "_1TZy1",
                categories: "_1IRxm",
                noPaddingBottom: "_2JmH_"
            }
        },
        94504: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                body: "_39Rqc",
                chevron: "_3QyZS"
            }
        },
        10259: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                body: "_1QLaj",
                avatar: "H4VsR",
                description: "_2eg75",
                nameSecondary: "NsN19",
                chevron: "_1lUFl",
                iconSearch: "_3swiN",
                title: "_1FfWb",
                dogfoodingGroupBannerInternalOnly: "_3TsJ4"
            }
        },
        21477: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                header: "_2zyOo",
                icon: "_4aKqp"
            }
        },
        14881: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                header: "_3AwRc",
                restrictText: "_1fFgT"
            }
        },
        65636: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                multimediaGallery: "_3M644",
                column: "_3nvje",
                menuItem: "OJuvv",
                active: "_KRg9",
                menuTabsLists: "_3CC5A",
                threeTabs: "_1KRHF",
                fourTabs: "rLX29"
            }
        },
        79741: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                mediaViewerPlaceholder: "nehFG",
                imageAudio: "_2OreO",
                mediaViewerAudio: "_1alR8"
            }
        },
        76479: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                thumbsContainer: "_1XWMx",
                scrollContainer: "_1MhXb",
                viewerThumbs: "_1FS45",
                mediaThumb: "_52crR",
                thumbPadding: "_1833d"
            }
        },
        82326: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                text: "_1iOjC"
            }
        },
        17391: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                label: "QzWWL",
                input: "_1LOWN",
                explanation: "_37J_Y"
            }
        },
        16509: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                footerNote: "_1chRk",
                getTheAppLink: "_3t8G3"
            }
        },
        88959: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                wrapper: "_2Cwyq",
                code: "_3LMFv",
                codeDarkMode: "_3-nnq",
                codeLogo: "_3wVH-"
            }
        },
        56454: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                section: "_2ppks",
                checkboxLabel: "l2_nh"
            }
        }
    }
]);