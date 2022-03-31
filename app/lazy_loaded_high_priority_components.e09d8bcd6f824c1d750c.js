/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [7205], {
        57043: (e, t, n) => {
            var a = n(62488),
                i = n(21078),
                l = n(278),
                o = n(1469);
            e.exports = function() {
                var e = arguments.length;
                if (!e) return [];
                for (var t = Array(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
                return a(o(n) ? l(n) : [n], i(t, 1))
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
                                    elementScroll: a.prototype.scroll || r,
                                    scrollIntoView: a.prototype.scrollIntoView
                                },
                                l = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now,
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
                                        l = this.getBoundingClientRect();
                                    n !== t.body ? (p.call(this, n, n.scrollLeft + l.left - a.left, n.scrollTop + l.top - a.top), "fixed" !== e.getComputedStyle(n).position && e.scrollBy({
                                        left: a.left,
                                        top: a.top,
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
                            var n, a, i, o, r = (l() - t.startTime) / 468;
                            o = r = r > 1 ? 1 : r, n = .5 * (1 - Math.cos(Math.PI * o)), a = t.startX + (t.x - t.startX) * n, i = t.startY + (t.y - t.startY) * n, t.method.call(t.scrollable, a, i), a === t.x && i === t.y || e.requestAnimationFrame(h.bind(e, t))
                        }

                        function p(n, a, o) {
                            var s, u, c, d, f = l();
                            n === t.body ? (s = e, u = e.scrollX || e.pageXOffset, c = e.scrollY || e.pageYOffset, d = i.scroll) : (s = n, u = n.scrollLeft, c = n.scrollTop, d = r), h({
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
                var a, o = (0, l.default)(e);
                try {
                    for (o.s(); !(a = o.n()).done;) {
                        var r = (0, i.default)(a.value, 2),
                            s = r[0],
                            u = r[1];
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
                l = a(n(68217))
        },
        44606: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact,
                    n = e.onClick,
                    o = e.contextMenu,
                    r = e.isPendingParticipant,
                    s = e.contextEnabled,
                    u = e.onContext,
                    c = e.theme,
                    d = (0, a.useModelValues)(e.participant, ["isAdmin"]);
                return (0, l.jsx)(i.Contact, {
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
                    isPendingParticipant: r,
                    showNotifyName: !0,
                    waitIdle: !0
                })
            };
            var a = n(50857),
                i = n(65002),
                l = n(85893)
        },
        93603: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(34575)),
                l = a(n(93913)),
                o = a(n(2205)),
                r = a(n(99842)),
                s = a(n(272)),
                u = n(24096),
                c = n(36708),
                d = n(10253),
                f = n(67294),
                h = a(n(87678)),
                p = a(n(51723)),
                m = n(63641),
                v = a(n(47149)),
                g = n(2099),
                x = n(1146),
                C = a(n(36450)),
                _ = n(74950),
                b = n(85893),
                j = function(e) {
                    (0, o.default)(n, e);
                    var t = (0, r.default)(n);

                    function n() {
                        var e;
                        (0, i.default)(this, n);
                        for (var a = arguments.length, l = new Array(a), o = 0; o < a; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l))).startCheckForSuccess = function() {
                            e.checkIteration = 0, e.checkForSuccessInterval = e.props.setInterval(e.checkForSuccess, 250)
                        }, e.clearCheckForSuccess = function() {
                            e.checkForSuccessInterval && (e.props.clearInterval(e.checkForSuccessInterval), e.checkForSuccessInterval = 0, e.checkIteration = 0)
                        }, e.checkForSuccess = function() {
                            if (_.Socket.state === x.SOCKET_STATE.CONNECTED) {
                                e.checkIteration++;
                                var t = e.props.url;
                                if (e.checkIteration > 40) e._handlePlayerError({
                                    target: {
                                        src: t,
                                        error: {
                                            code: window.MediaError.MEDIA_ERR_NETWORK
                                        }
                                    }
                                });
                                else {
                                    var n = (0, s.default)(e._audioElement, "_this._audioElement").buffered;
                                    n.length && n.end(0) > 0 && e._handlePlaying()
                                }
                            }
                        }, e._handlePlayerError = function(t) {
                            e.clearCheckForSuccess(), e.props.onError && e.props.onError(t.target.src)
                        }, e._handlePlaying = function() {
                            e.clearCheckForSuccess()
                        }, e._setRefAudio = function(t) {
                            var n, a;
                            e._audioElement = t, null === (n = (a = e)._unregisterFromAudioChannel) || void 0 === n || n.call(a), e._unregisterFromAudioChannel = null == t ? null : u.MainAudioChannel.registerMedia(t), null != e.props.setRefAudio && e.props.setRefAudio(t)
                        }, e
                    }
                    return (0, l.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.listeners,
                                t = (0, s.default)(this._audioElement, "this._audioElement");
                            this._updatePlaybackRate(), e.add(t, "error", this._handlePlayerError, {
                                capture: !0
                            }), e.add(t, "playing", this._handlePlaying), (d.UA.isGecko || d.UA.isSafari) && (this.props.autoPlay ? (this.checkIteration = 0, this.checkForSuccessInterval = this.props.setInterval(this.checkForSuccess, 250)) : this.props.autoPlay ? this.startCheckForSuccess() : e.add(t, "play", this.startCheckForSuccess))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e;
                            null === (e = this._unregisterFromAudioChannel) || void 0 === e || e.call(this), d.UA.isBlink && (0, p.default)((0, s.default)(this._audioElement, "this._audioElement"))
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
                            var e = g.ReactionBubbleType.MEDIA_ITEM,
                                t = this.props.msg;
                            return (0, b.jsxs)("div", {
                                className: this.props.className,
                                children: [(0, b.jsx)("audio", {
                                    ref: this._setRefAudio,
                                    className: h.default.audioTag,
                                    src: this.props.url,
                                    onClick: this.props.onClick,
                                    controls: this.props.controls,
                                    preload: this.props.preload,
                                    autoPlay: this.props.autoPlay,
                                    children: this.props.children
                                }), t && (0, c.shouldShowReactionBubble)(t, e) && (0, b.jsx)(v.default, {
                                    msgIds: [t.id.toString()],
                                    reactionBubbleType: e
                                })]
                            })
                        }
                    }]), n
                }(f.Component);
            j.displayName = "AudioTag";
            var k = (0, m.ListenerHOC)((0, C.default)(j));
            t.default = k
        },
        48956: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.docMsgs,
                    a = e.chat,
                    x = (0, l.default)(e, g),
                    C = (0, c.default)(),
                    _ = (0, s.useRef)(null);
                (0, u.useListener)(n, "add remove reset query_doc_before", (function() {
                    var e;
                    null === (e = _.current) || void 0 === e || e.forceUpdate()
                })), ((0, o.isMDBackend)() && a.endOfHistoryTransferType === d.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY || a.endOfHistoryTransferType === d.ConversationEndOfHistoryTransferModelPropType.NOT_INCLUDED_IN_HIST_SYNC) && (t = (0, v.jsx)(f.default, {
                    icon: (0, v.jsx)(m.default, {
                        name: "content-chat"
                    }),
                    theme: "list",
                    secondary: r.fbt._("Use WhatsApp on your phone to see the complete message history.", null, {
                        hk: "2qbSkX"
                    }),
                    children: r.fbt._("Older documents may be available", null, {
                        hk: "3q5iPh"
                    })
                }));
                return (0, v.jsxs)(v.Fragment, {
                    children: [(0, v.jsx)(p.default, (0, i.default)({
                        ref: _,
                        msgsCollection: n,
                        queryCollection: function(e, t) {
                            C((function() {
                                n.queryDocs(a, t)
                            }))
                        },
                        hasBefore: n.hasDocBefore,
                        queryBefore: n.queryDocBefore,
                        emptyText: h.default.t(672),
                        chat: a
                    }, x)), t]
                })
            };
            var i = a(n(81109)),
                l = a(n(6479)),
                o = n(78577),
                r = n(48360),
                s = n(67294),
                u = n(91285),
                c = a(n(96109)),
                d = n(29656),
                f = a(n(54864)),
                h = a(n(9844)),
                p = a(n(78053)),
                m = a(n(7665)),
                v = n(85893),
                g = ["docMsgs", "chat"]
        },
        90675: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BaseEphemeralSettingRow = g, t.EphemeralSettingRow = function(e) {
                var t = e.chat,
                    n = e.groupMetadata,
                    a = e.onClick,
                    i = e.testid;
                if (n) return (0, p.jsx)(v, {
                    groupMetadata: n,
                    onClick: a,
                    testid: i
                });
                return (0, p.jsx)(m, {
                    chat: t,
                    onClick: a,
                    testid: i
                })
            };
            var i = n(48360),
                l = n(50857),
                o = n(84533),
                r = a(n(98350)),
                s = n(65901),
                u = a(n(86777)),
                c = n(50215),
                d = a(n(9844)),
                f = n(64759),
                h = n(22552),
                p = n(85893);
            var m = function(e) {
                var t = e.onClick,
                    n = e.testid,
                    a = (0, l.useModelValues)(e.chat, ["contact", "ephemeralDuration"]),
                    r = function() {
                        var e;
                        return null !== (e = a.ephemeralDuration) && void 0 !== e ? e : 0
                    },
                    c = function() {
                        a.contact.addPendingAction((0, o.unblockContact)(a.contact)).then((function() {
                            t(), s.Cmd.closeModal()
                        })).catch((function() {}))
                    },
                    f = function() {
                        s.Cmd.closeModal()
                    };
                return (0, p.jsx)(g, {
                    ephemeralDuration: r(),
                    canChange: !0,
                    onClick: function() {
                        a.contact.isContactBlocked ? s.Cmd.openModal((0, p.jsx)(u.default, {
                            onOK: c,
                            okText: d.default.t(781),
                            onCancel: f,
                            cancelText: i.fbt._("Cancel", null, {
                                hk: "H0gNq"
                            }),
                            children: r() ? i.fbt._("You can't turn off disappearing messages for this chat unless you unblock this contact.", null, {
                                hk: "o3zdA"
                            }) : i.fbt._("You can't turn on disappearing messages for this chat unless you unblock this contact.", null, {
                                hk: "1uAyoI"
                            })
                        })) : t()
                    },
                    testid: n
                })
            };
            var v = function(e) {
                var t, n = e.onClick,
                    a = e.testid,
                    o = (0, l.useModelValues)(e.groupMetadata, ["ephemeralDuration", "participants"]),
                    r = function() {
                        s.Cmd.closeModal()
                    };
                return (0, p.jsx)(g, {
                    ephemeralDuration: null !== (t = o.ephemeralDuration) && void 0 !== t ? t : 0,
                    canChange: o.canSetEphemeralSetting(),
                    onClick: function() {
                        o.canSetEphemeralSetting() ? n() : s.Cmd.openModal((0, p.jsx)(u.default, {
                            onOK: r,
                            okText: i.fbt._("OK", null, {
                                hk: "2KEeHb"
                            }),
                            children: i.fbt._("Only admins can change this setting.", null, {
                                hk: "1NF1gS"
                            })
                        }))
                    },
                    testid: a
                })
            };

            function g(e) {
                var t, n = e.ephemeralDuration,
                    a = e.canChange,
                    l = e.onClick,
                    o = e.testid;
                t = n > 0 ? a ? (0, f.isEphemeral24HDurationEnabled)() ? (0, c.getDisappearingMessageDurationString)(n) : d.default.t(447) : (0, c.getDisappearingMessageExplanationString)(n) : d.default.t(446);
                var s = (0, p.jsx)(h.TextSpan, {
                        theme: "title",
                        children: i.fbt._("Disappearing messages", null, {
                            hk: "384ocn"
                        })
                    }),
                    u = (0, p.jsx)(h.TextDiv, {
                        theme: "muted",
                        testid: "chat-dm-settings-item-value",
                        children: t
                    });
                return (0, p.jsx)(r.default, {
                    side: "chevron",
                    icon: "disappearing",
                    onClick: l,
                    title: s,
                    secondaryTitle: u,
                    testid: o
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
                    k = e.selectable,
                    S = e.onMessageSelect,
                    y = (0, f.default)(),
                    M = (0, c.useRef)(null);
                (0, d.useListener)(n, "add remove reset", (function() {
                    var e;
                    null === (e = M.current) || void 0 === e || e.forceUpdate()
                })), (0, d.useListener)(n, "query_doc_before", (function() {
                    var e;
                    null === (e = M.current) || void 0 === e || e.forceUpdate()
                })), (0, d.useListener)(i.msgs, "add bulk_add", (function(e) {
                    if (e) {
                        var t = [],
                            i = Array.isArray(e) ? e : [e];
                        a.all(i.map((function(e) {
                            return e.getLinks().length && t.push(e), a.resolve()
                        }))).then((function() {
                            t.length && n.add(t)
                        }))
                    }
                })), ((0, r.isMDBackend)() && i.endOfHistoryTransferType === h.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY || i.endOfHistoryTransferType === h.ConversationEndOfHistoryTransferModelPropType.NOT_INCLUDED_IN_HIST_SYNC) && (t = (0, _.jsx)(p.default, {
                    icon: (0, _.jsx)(C.default, {
                        name: "content-chat"
                    }),
                    theme: "list",
                    secondary: u.fbt._("Use WhatsApp on your phone to see the complete message history.", null, {
                        hk: "2qbSkX"
                    }),
                    children: u.fbt._("Older links may be available", null, {
                        hk: "1Hs22g"
                    })
                }));
                e.linkMsgs, e.chat;
                var T = (0, o.default)(e, b);
                return (0, _.jsxs)(_.Fragment, {
                    children: [(0, _.jsx)(g.default, (0, l.default)({
                        ref: M,
                        msgsCollection: n,
                        queryCollection: function(e, t) {
                            y((function() {
                                n.queryLinks(i, t)
                            }))
                        },
                        hasBefore: n.hasLinkBefore,
                        queryBefore: n.queryLinkBefore,
                        renderElements: function(e) {
                            var t = [];
                            return n.forEach((function(n) {
                                var a = !n.isSentByMe && n.isGroupMsg;
                                n.getGalleryLinks().forEach((function(i, l) {
                                    i.href !== n.matchedText && t.push((0, _.jsx)(v.default, {
                                        msg: n.safe(),
                                        link: i,
                                        displayAuthor: a,
                                        selectable: k,
                                        selectedMessages: j,
                                        onMessageSelect: S,
                                        onClickMsg: e
                                    }, `${n.id.toString()}-${l}`))
                                })), n.linkPreview && t.push((0, _.jsx)(x.default, {
                                    msg: n,
                                    selectable: k,
                                    selectedMessages: j,
                                    onMessageSelect: S,
                                    displayType: s.DISPLAY_TYPE.GALLERY,
                                    onClickMsg: e
                                }, n.id.toString()))
                            })), t.reverse(), t
                        },
                        emptyText: m.default.t(674),
                        chat: i
                    }, T)), t]
                })
            };
            var l = i(n(81109)),
                o = i(n(6479)),
                r = n(78577),
                s = n(44741),
                u = n(48360),
                c = n(67294),
                d = n(91285),
                f = i(n(96109)),
                h = n(29656),
                p = i(n(54864)),
                m = i(n(9844)),
                v = i(n(76992)),
                g = i(n(78053)),
                x = i(n(79402)),
                C = i(n(7665)),
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
                    k = e.selectedMessages,
                    S = e.onMessageSelect,
                    y = e.onClickMsg,
                    M = (0, d.useModelValues)(e.msg, ["body", "caption", "dir", "id", "isSentByMe", "mediaData", "type", "rtl", "senderObj", "star", "mediaData", "asRevoked"]),
                    T = (0, u.useState)(!1),
                    E = (0, l.default)(T, 2),
                    P = E[0],
                    w = E[1],
                    I = (0, u.useState)((function() {
                        return k.isSelected(M.unsafe())
                    })),
                    A = (0, l.default)(I, 2),
                    N = A[0],
                    D = A[1];
                (0, c.useListener)(k, M.id.toString(), (function(e) {
                    N !== e && D(e)
                }));
                var O = e.selectable || P ? (0, j.jsx)(C.default, {
                        checked: N,
                        onClick: function(e) {
                            e && e.stopPropagation(), S(M.unsafe(), !N)
                        },
                        msgTheme: "gallery"
                    }) : null,
                    R = (0, h.Conversation)({
                        mentions: M.mentionMap(),
                        links: M.getLinks(),
                        phoneNumbers: M.getPhoneNumbers(),
                        selectable: true,
                        trusted: M.isTrusted()
                    }),
                    L = M.body && M.body.includes(n.url) ? M.body : M.caption,
                    B = a ? (0, j.jsx)("div", {
                        className: g.default.author,
                        children: (0, j.jsx)(f.default, {
                            msg: M,
                            contact: M.senderObj
                        })
                    }) : null,
                    G = M.getSuspiciousLinks().length > 0;
                return (0, j.jsx)(m.default, {
                    hover: P,
                    onClick: function() {
                        y(M.unsafe(), !N)
                    },
                    onMouseEnter: P ? null : function() {
                        P || w(!0)
                    },
                    onMouseOver: P ? null : function() {
                        P || w(!0)
                    },
                    onMouseLeave: P ? function() {
                        P && w(!1)
                    } : null,
                    children: (0, j.jsxs)("div", {
                        className: g.default.msg,
                        children: [(0, j.jsx)(r.default, {
                            transitionName: "delay-leave",
                            children: O
                        }), (0, j.jsx)(b.MessageContainer, {
                            isSentByMe: M.isSentByMe,
                            children: (0, j.jsxs)("div", {
                                className: (0, s.default)(g.default.bubble, (t = {}, (0, i.default)(t, g.default.hasAuthor, a), (0, i.default)(t, g.default.hasSuspiciousLinks, G), t)),
                                children: [B, (0, j.jsx)(_.SuspiciousLabel, {
                                    link: n,
                                    displayType: o.DISPLAY_TYPE.GALLERY
                                }), (0, j.jsx)(x.default, {
                                    title: n.url,
                                    isSentByMe: M.isSentByMe,
                                    canonicalUrl: n.domain,
                                    displayType: o.DISPLAY_TYPE.GALLERY,
                                    star: M.star
                                }), (0, j.jsx)(p.EmojiText, {
                                    text: L,
                                    selectable: true,
                                    className: g.default.text,
                                    dirMismatch: M.rtl !== v.default.isRTL(),
                                    direction: M.dir,
                                    formatters: R
                                })]
                            })
                        })]
                    })
                })
            };
            var i = a(n(59713)),
                l = a(n(63038)),
                o = n(44741),
                r = a(n(65668)),
                s = a(n(94184)),
                u = n(67294),
                c = n(91285),
                d = n(50857),
                f = a(n(16625)),
                h = n(12835),
                p = n(73008),
                m = a(n(61652)),
                v = a(n(9844)),
                g = a(n(31243)),
                x = a(n(74705)),
                C = a(n(36821)),
                _ = n(47386),
                b = n(43026),
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
                    b = e.selectable,
                    y = e.onMessageSelect,
                    I = e.theme,
                    A = (0, v.useModelValues)(e.chat, ["linkCount", "docCount", "productCount", "endOfHistoryTransferType"]),
                    N = (0, p.default)(),
                    D = (0, x.default)();
                (0, m.useListener)(a, "add query_media_before", (function() {
                    N()
                })), (0, m.useListener)(a, "remove", (function(e) {
                    n && n.isSelected(e) && n.setVal(e, !1), N()
                })), (0, m.useListener)(a, "reset", (function() {
                    n && n.unsetAll(), N()
                }));
                var O, R = function(e, t, n, a, s, c) {
                        var d = null,
                            f = (0, r.default)(e, (function(e) {
                                return -e.t
                            })).filter(w).slice(0, !0 === t ? e.length : 6);
                        return (0, o.default)(f, (function(e, o) {
                            var r = !0 !== t && o >= 3 && o <= 5 ? "hideableSecondRow" : void 0,
                                f = (0, E.jsx)(j.default, {
                                    className: (0, h.default)(c && P.roundedThumb),
                                    aspectRatio: c ? 1.1 : 1,
                                    msg: e,
                                    hoverEvent: t,
                                    selectable: n,
                                    selectedMessages: a,
                                    onMessageSelect: s,
                                    theme: r
                                }, e.id.toString());
                            if (!0 !== t) return [f];
                            var p = u.Clock.monthStr(e.t);
                            if (p !== d) {
                                d = p;
                                var m = (0, E.jsx)(k.default, {
                                    children: p
                                }, `header-${e.t}`);
                                return [].concat((0, i.default)((0, l.default)(6, (function(t) {
                                    return (0, E.jsx)(S.EmptyCanvas, {}, `padding-${e.t}-${t}`)
                                }))), [m, f])
                            }
                            return [f]
                        }))
                    }(a.toArray(), t, b, n, y, "chat-info" === I),
                    L = function(e) {
                        a.hasMediaBefore && D((function() {
                            a.queryMedia({
                                chat: (0, M.unproxy)(A),
                                msg: e
                            })
                        }))
                    },
                    B = (0, g.default)((function(e) {
                        a.hasMediaBefore && e.scrollTop + c.SCROLL_FUDGE > e.scrollHeight - e.clientHeight && L(a.head())
                    }), 100);
                if ((0, f.useEffect)((function() {
                        a.hasMediaBefore && L()
                    }), []), (0, s.isMDBackend)() && A.endOfHistoryTransferType === C.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY || A.endOfHistoryTransferType === C.ConversationEndOfHistoryTransferModelPropType.NOT_INCLUDED_IN_HIST_SYNC) {
                    var G;
                    !0 === t ? G = d.fbt._("Older media may be available", null, {
                        hk: "1ml0rh"
                    }) : 0 === a.length && 0 === A.docCount && 0 === A.linkCount && 0 === A.productCount && (G = d.fbt._("Older files may be available", null, {
                        hk: "2BvwwV"
                    })), O = "chat-info" === I ? (0, E.jsx)(_.default, {
                        theme: "chat-info",
                        secondary: d.fbt._("Use WhatsApp on your phone to see the complete message history.", null, {
                            hk: "2qbSkX"
                        }),
                        children: G
                    }) : (0, E.jsx)(_.default, {
                        icon: (0, E.jsx)(T.default, {
                            name: "content-chat"
                        }),
                        theme: "list",
                        secondary: d.fbt._("Use WhatsApp on your phone to see the complete message history.", null, {
                            hk: "2qbSkX"
                        }),
                        children: G
                    })
                }
                return (0, E.jsxs)(E.Fragment, {
                    children: [(0, E.jsx)(S.MediaGalleryView, {
                        medias: R,
                        mediaCollection: a,
                        fullCollection: t,
                        chat: (0, M.unproxy)(A),
                        onScroll: function(e) {
                            B(e.currentTarget)
                        },
                        theme: I
                    }), O]
                })
            };
            var i = a(n(319)),
                l = a(n(98913)),
                o = a(n(94654)),
                r = a(n(89734)),
                s = n(78577),
                u = n(73466),
                c = n(80965),
                d = n(48360),
                f = n(67294),
                h = a(n(56720)),
                p = a(n(45764)),
                m = n(91285),
                v = n(50857),
                g = a(n(75967)),
                x = a(n(96109)),
                C = n(29656),
                _ = a(n(54864)),
                b = n(2629),
                j = a(n(48630)),
                k = a(n(16193)),
                S = n(41870),
                y = n(19499),
                M = n(68220),
                T = a(n(7665)),
                E = n(85893),
                P = {
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
                return !!(0, b.isMediaGalleryFixEnabled)() || (!(0, s.isMDBackend)() || (0, y.hasThumbnail)(e.mediaData))
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
                    j = _[1],
                    k = (0, o.useRef)(null);
                (0, r.useListener)(x, t.id.toString(), (function(e) {
                    x && b !== e && j(e)
                }));
                var S = t.mediaData,
                    y = S.type === u.default.TYPE.IMAGE && S.renderableUrl ? function(e) {
                        e.nativeEvent.dataTransfer.setData("text/uri-list", t.mediaData.renderableUrl)
                    } : null,
                    M = (0, l.default)(g);
                return (0, p.jsx)(d.MediaThumb, {
                    classes: M,
                    onClick: function(e) {
                        if (a && m) m(t, !b);
                        else if (S.mediaStage !== f.MEDIA_DATA_STAGE.ERROR_MISSING) {
                            var n;
                            e && e.stopPropagation();
                            var i = t.id;
                            if (S.isGif || S.type === u.default.TYPE.IMAGE) {
                                var l = k.current;
                                n = function(e) {
                                    return i.equals(e) && l ? l : null
                                }
                            }
                            s.Cmd.mediaViewerModal({
                                msg: (0, h.unproxy)(t),
                                getZoomNode: n
                            })
                        } else s.Cmd.openModal((0, p.jsx)(c.default, {
                            msg: t
                        }))
                    },
                    hoverEvent: n,
                    selectable: a,
                    selected: b,
                    onMessageSelect: m,
                    onDragStart: y,
                    msg: t,
                    theme: v,
                    imgRef: function(e) {
                        k.current = e
                    },
                    aspectRatio: e.aspectRatio
                })
            };
            var i = a(n(63038)),
                l = a(n(94184)),
                o = n(67294),
                r = n(91285),
                s = n(65901),
                u = a(n(72397)),
                c = a(n(41965)),
                d = n(19499),
                f = n(41655),
                h = n(68220),
                p = n(85893)
        },
        16193: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, l.jsx)("div", {
                    className: i.default.container,
                    children: e.children
                })
            };
            var i = a(n(4318)),
                l = n(85893)
        },
        19499: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MediaThumb = function(e) {
                var t, n, a = e.msg,
                    p = e.selectable,
                    w = e.theme,
                    I = e.active,
                    A = e.imgRef,
                    N = e.containerRef,
                    D = e.onMessageSelect,
                    O = e.selected,
                    R = void 0 !== O && O,
                    L = e.onClick,
                    B = e.onDragStart,
                    G = e.preferPreview,
                    F = (0, s.default)(),
                    V = (0, r.useRef)(null),
                    U = (0, r.useRef)(null),
                    H = (0, r.useRef)(null),
                    q = (0, r.useState)(!1),
                    W = (0, l.default)(q, 2),
                    Y = W[0],
                    z = W[1],
                    K = (0, r.useState)(null),
                    X = (0, l.default)(K, 2),
                    Z = X[0],
                    $ = X[1];
                (0, u.useListener)(a.mediaData, ["change:preview", "change:mediaStage"], F);
                (0, r.useEffect)((function() {
                    return null == A || A(V.current), null == N || N(U.current), null == a.mediaData.preview && null == a.mediaData.fullPreviewData && (a.mediaData.type !== m.default.TYPE.IMAGE && a.mediaData.type !== m.default.TYPE.VIDEO || a.downloadMedia({
                            downloadEvenIfExpensive: !1,
                            isUserInitiated: !1,
                            rmrReason: k.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER
                        })),
                        function() {
                            null == A || A(null), null == N || N(null)
                        }
                }), []), (0, r.useEffect)((function() {
                    null == A || A(V.current), null == N || N(U.current)
                }), [A, N, V, U]);
                var Q, J = function() {
                        Y || z(!0)
                    },
                    ee = function(t) {
                        if (!0 !== e.showTooltip || "viewerFlowTransparent" === w || !(t instanceof HTMLElement)) return null;
                        var n = t.offsetWidth;
                        return {
                            menu: (0, T.jsx)(b.default, {
                                msg: a
                            }),
                            anchor: t,
                            dirY: f.DirY.TOP,
                            dirX: f.DirX.CENTER,
                            offsetX: !0 === I ? .5 * -n * .13 : 0,
                            type: f.MenuType.tooltip
                        }
                    },
                    te = (0, c.useTimeout)((function() {
                        var e;
                        H.current && (e = H.current, $(ee(e)))
                    }), 500),
                    ne = (0, l.default)(te, 2),
                    ae = ne[0],
                    ie = ne[1],
                    le = function(e) {
                        var t;
                        Y || (e.persist(), z(!0), t = e.target, H.current = t, ae())
                    },
                    oe = function() {
                        Y && (ie(), z(!1), $(null))
                    },
                    re = function(e) {
                        var t = e.mediaStage,
                            n = e.preview,
                            a = e.fullPreviewData;
                        switch (t) {
                            case j.MEDIA_DATA_STAGE.RESOLVED:
                            case j.MEDIA_DATA_STAGE.PROGRESSIVE_READY:
                            case j.MEDIA_DATA_STAGE.EXISTS:
                                return E.Ready;
                            case j.MEDIA_DATA_STAGE.INIT:
                                return null != n || null != a ? E.Ready : E.Loading;
                            case j.MEDIA_DATA_STAGE.REMOTE_NEED_UPLOAD:
                            case j.MEDIA_DATA_STAGE.NEED_UPLOAD:
                                return E.NeedsUpload;
                            case j.MEDIA_DATA_STAGE.FETCHING:
                            case j.MEDIA_DATA_STAGE.DECRYPTING:
                            case j.MEDIA_DATA_STAGE.PREPARING:
                            case j.MEDIA_DATA_STAGE.UPLOADING:
                            case j.MEDIA_DATA_STAGE.SENDING:
                            case j.MEDIA_DATA_STAGE.REMOTE_UPLOADING:
                            case j.MEDIA_DATA_STAGE.FINALIZING:
                            case j.MEDIA_DATA_STAGE.REUPLOADING:
                                return E.Loading;
                            case j.MEDIA_DATA_STAGE.NEED_POKE:
                                return E.NeedsPoke;
                            case j.MEDIA_DATA_STAGE.ERROR_FILE_NOT_READABLE:
                            case j.MEDIA_DATA_STAGE.ERROR_MISSING:
                            case j.MEDIA_DATA_STAGE.ERROR_TOO_LARGE:
                            case j.MEDIA_DATA_STAGE.ERROR_UNSUPPORTED:
                                return E.Error
                        }
                    }(a.mediaData);
                (!0 === p || Y && e.hoverEvent) && (Q = (0, T.jsxs)("div", {
                    className: g.default.mediaSelect,
                    children: [(0, T.jsx)("div", {
                        className: (0, o.default)(g.default.shadeTop, (0, i.default)({}, g.default.noPointerEvents, re !== E.Ready)),
                        onClick: e.onClick
                    }), (0, T.jsx)(d.default, {
                        onChange: function() {
                            D && D(a, !R)
                        },
                        hover: Y,
                        checked: R
                    })]
                }));
                var se = (0, o.default)(e.classes, g.default.canvasComponent, (t = {}, (0, i.default)(t, g.default.canvasSelected, R), (0, i.default)(t, g.default.mediaGalleryThumbnail, "hideableSecondRow" !== w), (0, i.default)(t, g.default.chatInfoDrawerThumbnail, "hideableSecondRow" === w), (0, i.default)(t, g.default.canvasSecondRow, "hideableSecondRow" === w), (0, i.default)(t, g.default.viewerFlow, "viewerFlow" === w || "viewerFlowTransparent" === w), (0, i.default)(t, g.default.viewerFlowTransparent, "viewerFlowTransparent" === w), (0, i.default)(t, g.default.active, I), t)),
                    ue = a.star ? (0, T.jsx)("div", {
                        className: g.default.iconStar,
                        children: (0, T.jsx)(S.default, {
                            name: "star"
                        })
                    }) : null,
                    ce = P(a.mediaData),
                    de = Z ? (0, T.jsx)(y.UIE, {
                        displayName: "MediaThumbTitle",
                        popable: !0,
                        escapable: !0,
                        requestDismiss: function() {
                            $(null)
                        },
                        requestRecentFocusOnUnmount: !1,
                        children: (0, T.jsx)(M.default, {
                            tooltip: Z
                        })
                    }) : null,
                    fe = {
                        paddingTop: 1 / (null !== (n = e.aspectRatio) && void 0 !== n ? n : 1) * 100 + "%"
                    },
                    he = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        a.downloadMedia({
                            downloadEvenIfExpensive: e,
                            isUserInitiated: !1,
                            rmrReason: k.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER
                        })
                    };
                if ((0, h.isMediaGalleryFixEnabled)()) {
                    var pe;
                    switch (re) {
                        case E.Loading:
                            pe = (0, T.jsx)(_.MediaThumbLoading, {
                                mediaType: a.mediaData.type
                            });
                            break;
                        case E.NeedsPoke:
                            pe = (0, T.jsx)(_.MediaThumbNeedsPoke, {
                                onClick: function() {
                                    return he(!0)
                                }
                            });
                            break;
                        case E.Error:
                            pe = (0, T.jsx)(_.MediaThumbError, {
                                onClick: e.onClick,
                                mediaType: a.mediaData.type
                            });
                            break;
                        case E.NeedsUpload:
                        case E.Ready:
                            pe = null
                    }
                    return (0, T.jsxs)("div", {
                        ref: U,
                        className: se,
                        "data-testid": "media-canvas",
                        onMouseOver: J,
                        onMouseEnter: le,
                        onMouseLeave: oe,
                        children: [Q, (0, T.jsxs)("div", {
                            className: g.default.canvasBody,
                            children: [(0, T.jsx)(C.default, {
                                mediaData: a.mediaData
                            }), (0, T.jsx)(x.default, {
                                mediaData: a.mediaData,
                                selected: R
                            }), ue]
                        }), (0, T.jsx)(v.default, {
                            downloadMedia: he,
                            onClick: L,
                            onDragStart: B,
                            preferPreview: G,
                            ref: V,
                            msg: a
                        }), de, pe, (0, T.jsx)("div", {
                            style: fe
                        })]
                    })
                }
                return ce ? (0, T.jsxs)("div", {
                    ref: U,
                    className: se,
                    "data-testid": "media-canvas",
                    onMouseOver: J,
                    onMouseEnter: le,
                    onMouseLeave: oe,
                    children: [Q, (0, T.jsxs)("div", {
                        className: g.default.canvasBody,
                        children: [(0, T.jsx)(C.default, {
                            mediaData: a.mediaData
                        }), (0, T.jsx)(x.default, {
                            mediaData: a.mediaData,
                            selected: R
                        }), ue]
                    }), (0, T.jsx)(v.default, {
                        downloadMedia: he,
                        onClick: L,
                        onDragStart: B,
                        preferPreview: G,
                        ref: V,
                        msg: a
                    }), de, (0, T.jsx)("div", {
                        style: fe
                    })]
                }) : null
            }, t.hasThumbnail = P;
            var i = a(n(59713)),
                l = a(n(63038)),
                o = a(n(94184)),
                r = n(67294),
                s = a(n(45764)),
                u = n(91285),
                c = n(85456),
                d = a(n(22630)),
                f = n(98169),
                h = n(2629),
                p = n(66739),
                m = a(n(72397)),
                v = a(n(31149)),
                g = a(n(45468)),
                x = a(n(81690)),
                C = a(n(76581)),
                _ = n(88259),
                b = a(n(86582)),
                j = n(41655),
                k = a(n(50507)),
                S = a(n(7665)),
                y = n(16835),
                M = a(n(84555)),
                T = n(85893),
                E = n(76672).Mirrored(["Loading", "Ready", "Error", "NeedsPoke", "NeedsUpload"]);

            function P(e) {
                if ((0, h.isMediaGalleryFixEnabled)()) return !0;
                switch (e.type) {
                    case m.default.TYPE.VIDEO:
                    case m.default.TYPE.IMAGE:
                        if (null != e.preview || null != e.fullPreviewData || e.mediaStage === j.MEDIA_DATA_STAGE.RESOLVED) return !0;
                        if (p.MediaBlobCache.has(e.filehash)) {
                            try {
                                p.MediaBlobCache.getOrCreateURL(e.filehash)
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
                l = a(n(81109)),
                o = a(n(94184)),
                r = n(67294),
                s = a(n(72397)),
                u = a(n(48121)),
                c = n(41655),
                d = a(n(47251)),
                f = a(n(57393)),
                h = n(85893),
                p = (0, r.forwardRef)((function(e, t) {
                    var n = e.children,
                        a = e.className,
                        i = e.shade,
                        l = e.url,
                        o = e.onClick,
                        r = e.onDragStart,
                        s = !0 === i ? (0, h.jsx)("div", {
                            className: u.default.shade
                        }) : null,
                        c = null != l && "" !== l ? {
                            backgroundImage: `url(${l})`
                        } : null;
                    return (0, h.jsxs)("div", {
                        className: a,
                        "data-testid": "media-canvas-img",
                        style: c,
                        onClick: o,
                        ref: t,
                        onDragStart: r,
                        draggable: null != r || null,
                        children: [n, s]
                    })
                })),
                m = (0, r.forwardRef)((function(e, t) {
                    var n = e.downloadMedia,
                        a = e.msg,
                        r = e.onClick,
                        m = e.onDragStart,
                        v = e.preferPreview,
                        g = a.mediaData,
                        x = {
                            onClick: r,
                            onDragStart: m,
                            ref: t
                        };
                    switch (g.type) {
                        case s.default.TYPE.AUDIO:
                            return (0, h.jsx)(p, (0, l.default)((0, l.default)({}, x), {}, {
                                className: `${u.default.mediaCanvas} attach-media-audio-thumb`
                            }));
                        case s.default.TYPE.VIDEO:
                            var C, _ = null == g.fullPreviewData,
                                b = null !== (C = g.fullPreviewData) && void 0 !== C ? C : g.preview;
                            return (0, h.jsx)(p, (0, l.default)((0, l.default)({}, x), {}, {
                                className: (0, o.default)(u.default.mediaCanvas, (0, i.default)({
                                    "media-video-thumb": g.isGif && !g.preview
                                }, u.default.blur, _)),
                                shade: !0,
                                url: b instanceof f.default ? b.url() : null
                            }));
                        case s.default.TYPE.IMAGE:
                            var j = null != g.preview && g.mediaStage === c.MEDIA_DATA_STAGE.NEED_POKE,
                                k = function(e) {
                                    return (0, h.jsx)(p, (0, l.default)((0, l.default)({}, x), {}, {
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
                                S = function() {
                                    return null != g.preview ? k(null) : (0, h.jsx)(p, (0, l.default)((0, l.default)({}, x), {}, {
                                        className: u.default.mediaCanvas,
                                        shade: a.star
                                    }))
                                };
                            return !0 === v ? S() : (0, h.jsx)("div", {
                                className: u.default.mediaCanvas,
                                children: (0, h.jsx)(d.default, {
                                    mediaData: g,
                                    placeholderRenderer: S,
                                    renderProgressively: !0,
                                    downloadMedia: n,
                                    children: k
                                })
                            });
                        default:
                            return (0, h.jsx)(p, (0, l.default)((0, l.default)({}, x), {}, {
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
                    case r.default.TYPE.AUDIO:
                        return (0, u.jsx)(c, {
                            duration: n.duration,
                            selected: t
                        });
                    case r.default.TYPE.VIDEO:
                        return n.isGif ? null : (0, u.jsx)(c, {
                            duration: n.duration,
                            selected: t
                        });
                    default:
                        return null
                }
            };
            var i = a(n(59713)),
                l = n(73466),
                o = a(n(94184)),
                r = a(n(72397)),
                s = a(n(38628)),
                u = n(85893);

            function c(e) {
                var t = e.duration,
                    n = e.selected,
                    a = l.Clock.durationStr(t);
                return a ? (0, u.jsx)("span", {
                    className: (0, o.default)(s.default.container, (0, i.default)({}, s.default.selected, n)),
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
                return null == n ? null : (0, r.jsx)("div", {
                    className: l.default.iconType,
                    children: (0, r.jsx)(o.default, {
                        name: n
                    })
                })
            };
            var i = a(n(72397)),
                l = a(n(38851)),
                o = a(n(7665)),
                r = n(85893)
        },
        88259: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MediaThumbError = function(e) {
                return (0, r.jsx)("button", {
                    className: (0, i.default)(s),
                    onClick: e.onClick,
                    children: (0, r.jsx)(c, {
                        mediaType: e.mediaType
                    })
                })
            }, t.MediaThumbLoading = function(e) {
                return (0, r.jsx)("div", {
                    className: (0, i.default)(s),
                    children: (0, r.jsx)(c, {
                        mediaType: e.mediaType
                    })
                })
            }, t.MediaThumbNeedsPoke = function(e) {
                return (0, r.jsx)("div", {
                    className: (0, i.default)(s),
                    children: (0, r.jsx)(l.Download, {
                        onClick: e.onClick
                    })
                })
            };
            var i = a(n(56720)),
                l = n(83819),
                o = a(n(7665)),
                r = n(85893),
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
                return (0, r.jsx)(o.default, {
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
                l = n(80965),
                o = n(67294),
                r = a(n(45764)),
                s = a(n(75967)),
                u = n(65901),
                c = n(75993),
                d = a(n(5029)),
                f = a(n(49195)),
                h = a(n(79402)),
                p = n(68220),
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
                    j = e.queryCollection,
                    k = e.selectedMessages,
                    S = e.renderElements,
                    y = e.onProductDetail,
                    M = e.setScrollOffset,
                    T = (0, r.default)();
                (0, o.useImperativeHandle)(t, (function() {
                    return {
                        forceUpdate: T
                    }
                }));
                var E = (0, o.useRef)(null),
                    P = function(e) {
                        a && j(e)
                    },
                    w = (0, s.default)((function(e) {
                        var t = e.scrollHeight - e.clientHeight - e.scrollTop;
                        a && t < l.SCROLL_FUDGE && P(v.head()), M && M(e.scrollTop)
                    }), 100);
                (0, o.useEffect)((function() {
                    a && P();
                    var e = E.current;
                    return e && (e.scrollTop = C),
                        function() {
                            w.cancel()
                        }
                }), []);
                var I = function(e, t) {
                        var n = (0, p.unproxy)(e);
                        _ && void 0 !== t ? b(n, t) : u.Cmd.openChatAt(n.chat, n.chat.getSearchContext(n))
                    },
                    A = S ? S(I) : v.map((function(e, t) {
                        return (0, m.jsx)(h.default, {
                            msg: e,
                            selectable: _,
                            selectedMessages: k,
                            onMessageSelect: b,
                            displayType: i.DISPLAY_TYPE.GALLERY,
                            onClickMsg: I,
                            onProductClick: y
                        }, `${e.id.toString()}_${t}`)
                    })).reverse();
                if (n) {
                    if (0 === A.length) return (0, m.jsx)(c.Loading, {});
                    A.push((0, m.jsx)(d.default, {}))
                }
                return 0 !== v.length || n || a ? (0, m.jsx)("div", {
                    ref: E,
                    onScroll: function(e) {
                        w(e.target)
                    },
                    className: f.default.wrapper,
                    children: A
                }) : (0, m.jsx)(c.Empty, {
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
                var t = (0, r.useModelValues)(e.chat, ["isGroup", "muteExpiration", "archive"]),
                    n = (0, r.useModelValues)(e.mute, ["isMuted"]),
                    a = (0, r.useModelValues)(e.settings, ["showArchiveV2"]),
                    x = function(e) {
                        u.Cmd.muteChat((0, p.unproxy)(t), e)
                    },
                    C = function() {
                        x(!1), u.Cmd.closeModal()
                    },
                    _ = n.isMuted,
                    b = t.muteExpiration;
                if (t.archive && (0, f.archiveV2Supported)() && a.showArchiveV2) return (0, g.jsx)(d.default, {
                    children: (0, g.jsx)(v.TextSpan, {
                        theme: "muted",
                        size: "16",
                        children: o.fbt._("Archived chats are muted", null, {
                            hk: "31ZVD"
                        })
                    })
                });
                var j, k = _ ? function() {
                        var e = t.isGroup ? h.default.t(356) : h.default.t(355);
                        u.Cmd.openModal((0, g.jsx)(c.default, {
                            onOK: C,
                            okText: h.default.t(39),
                            onCancel: function() {
                                return u.Cmd.closeModal()
                            },
                            cancelText: o.fbt._("Cancel", null, {
                                hk: "H0gNq"
                            }),
                            children: e
                        }))
                    } : function() {
                        x(!0)
                    },
                    S = _ ? h.default.t(855) : o.fbt._("Mute notifications", null, {
                        hk: "2Fm15X"
                    });
                if (_ && b) {
                    var y = l.Clock.untilStr(b);
                    j = (0, g.jsx)(v.TextDiv, {
                        theme: "muted",
                        children: y
                    })
                }
                var M = (0, g.jsx)(m.default, {
                        checked: _,
                        onChange: k
                    }),
                    T = (0, g.jsx)(v.TextSpan, {
                        theme: "title",
                        children: S
                    });
                return (0, g.jsx)(s.default, {
                    icon: "settings-notifications",
                    a8nText: i.default.key("block-mute"),
                    side: M,
                    onClick: k,
                    title: T,
                    secondaryTitle: j
                })
            };
            var i = a(n(84646)),
                l = n(73466),
                o = n(48360),
                r = n(50857),
                s = a(n(98350)),
                u = n(65901),
                c = a(n(86777)),
                d = a(n(81218)),
                f = n(2629),
                h = a(n(9844)),
                p = n(68220),
                m = a(n(83256)),
                v = n(22552),
                g = n(85893)
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
                    x = (0, u.useRef)(null);
                (0, c.useListener)(t, "add remove reset", (function() {
                    var e;
                    null === (e = x.current) || void 0 === e || e.forceUpdate()
                }));
                var C, _ = (0, d.default)();
                ((0, r.isMDBackend)() && n.endOfHistoryTransferType === f.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY || n.endOfHistoryTransferType === f.ConversationEndOfHistoryTransferModelPropType.NOT_INCLUDED_IN_HIST_SYNC) && (C = (0, v.jsx)(h.default, {
                    icon: (0, v.jsx)(m.default, {
                        name: "content-chat"
                    }),
                    theme: "list",
                    secondary: s.fbt._("Use WhatsApp on your phone to see the complete message history.", null, {
                        hk: "2qbSkX"
                    }),
                    children: s.fbt._("Older products may be available", null, {
                        hk: "3RBDLB"
                    })
                }));
                return (0, v.jsxs)(v.Fragment, {
                    children: [(0, v.jsx)(p.default, (0, l.default)({
                        ref: x,
                        msgsCollection: t,
                        queryCollection: function(e) {
                            return _((function() {
                                t.queryProducts(n, e)
                            }))
                        },
                        hasBefore: t.hasProductBefore,
                        queryBefore: t.hasProductBefore ? a.resolve() : null,
                        emptyText: s.fbt._("No products", null, {
                            hk: "8o7dB"
                        }),
                        chat: n
                    }, i)), C]
                })
            };
            var l = i(n(81109)),
                o = i(n(6479)),
                r = n(78577),
                s = n(48360),
                u = n(67294),
                c = n(91285),
                d = i(n(96109)),
                f = n(29656),
                h = i(n(54864)),
                p = i(n(78053)),
                m = i(n(7665)),
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
                    m = (v = n, (0, o.useEffect)((function() {
                        v && f.StickerPackCollectionMd.fetchStickerPack(v)
                    }), [v]), (0, r.default)(f.StickerPackCollectionMd, "add remove reset", (function() {
                        return null != v ? f.StickerPackCollectionMd.get(v) : null
                    })));
                var v;
                (0, i.isMDBackend)() && (0, c.default)() && n && (t = (0, h.jsx)(s.default, {
                    onClick: function(e) {
                        e.stopPropagation(), a && a(), null != p ? setTimeout((function() {
                            return u.Cmd.openStickerPack(n)
                        }), p + 150) : u.Cmd.openStickerPack(n)
                    },
                    type: "secondary",
                    children: l.fbt._("View Pack", null, {
                        hk: "tAlU3"
                    })
                }));
                return (0, h.jsxs)(h.Fragment, {
                    children: [(0, h.jsx)(d.StickerDetailsStickerPackInfo, {
                        name: null == m ? void 0 : m.name,
                        publisher: null == m ? void 0 : m.publisher,
                        theme: d.Theme.MediaViewer
                    }), t]
                })
            };
            var i = n(78577),
                l = n(48360),
                o = n(67294),
                r = a(n(26467)),
                s = a(n(51599)),
                u = n(65901),
                c = a(n(45767)),
                d = n(65803),
                f = n(48902),
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
                    f = (0, l.useRef)(null),
                    h = (0, r.default)(),
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
                l = n(67294),
                o = a(n(56720)),
                r = a(n(56523)),
                s = a(n(72127)),
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
        47830: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(319)),
                l = a(n(34575)),
                o = a(n(93913)),
                r = a(n(81506)),
                s = a(n(2205)),
                u = a(n(99842)),
                c = n(48360),
                d = n(65901),
                f = a(n(86777)),
                h = n(20050),
                p = n(73008),
                m = a(n(50177)),
                v = a(n(9844)),
                g = n(87547),
                x = n(64803),
                C = n(99451),
                _ = n(85893),
                b = function(e) {
                    (0, s.default)(n, e);
                    var t = (0, u.default)(n);

                    function n() {
                        var e;
                        (0, l.default)(this, n);
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
                                onOK: e._handleAddParticipant.bind((0, r.default)(e), t),
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
                                return [].concat((0, i.default)(t), [n, a !== e.length - 1 && v.default.t(407) || ""])
                            }), []);
                            return v.default.t(342, {
                                participants: n.join(""),
                                subject: t
                            })
                        }, e._handleAddParticipant = function(t) {
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
                l = a(n(93913)),
                o = a(n(2205)),
                r = a(n(99842)),
                s = a(n(69237)),
                u = a(n(12494)),
                c = a(n(50177)),
                d = a(n(43463)),
                f = n(85893),
                h = function(e) {
                    (0, o.default)(n, e);
                    var t = (0, r.default)(n);

                    function n() {
                        var e;
                        (0, i.default)(this, n);
                        for (var a = arguments.length, l = new Array(a), o = 0; o < a; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l)))._showArchiveSettingsDrawer = function() {
                            e.push((0, f.jsx)(s.default, {
                                settings: d.default,
                                onClose: e._pop
                            }))
                        }, e._pop = function() {
                            e.pop()
                        }, e
                    }
                    return (0, l.default)(n, [{
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
                l = a(n(48926)),
                o = a(n(63038)),
                r = a(n(34575)),
                s = a(n(93913)),
                u = a(n(2205)),
                c = a(n(99842)),
                d = n(48360),
                f = n(67294),
                h = n(26141),
                p = n(65971),
                m = n(55869),
                v = a(n(53187)),
                g = a(n(18345)),
                x = n(19288),
                C = a(n(50177)),
                _ = n(85893),
                b = function(e) {
                    (0, u.default)(n, e);
                    var t = (0, c.default)(n);

                    function n() {
                        return (0, r.default)(this, n), t.apply(this, arguments)
                    }
                    return (0, s.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, _.jsx)(j, {
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
                    r = a[0],
                    s = a[1],
                    u = (0, f.useState)(!0),
                    c = (0, o.default)(u, 2),
                    C = c[0],
                    b = c[1];
                (0, f.useEffect)((function() {
                    (function() {
                        var e = (0, l.default)(i.default.mark((function e() {
                            var n, a, l;
                            return i.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, h.BusinessProfileCollection.update(t, {
                                            getMerchantCompliance: !0
                                        });
                                    case 2:
                                        n = e.sent, a = Array.isArray(n) ? n[0] : n, (l = a.serialize()) ? (s(l.legalEntityDetails || void 0), b(!1)) : __LOG__(3)`compliance: cannot fetch business details (${t.toString()})`;
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
                var j = null != r ? r : {},
                    k = j.entityName,
                    S = j.customerCareDetails,
                    y = j.grievanceOfficerDetails,
                    M = (0, m.getEntityTypeText)(r);
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
                                    value: k,
                                    label: d.fbt._("Legal Name of Business", null, {
                                        hk: "2s9jD"
                                    })
                                }), (0, _.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: M,
                                    label: d.fbt._("Business Type", null, {
                                        hk: "48J73B"
                                    })
                                })]
                            }), (0, _.jsxs)(p.ComplianceInfoGroup, {
                                title: d.fbt._("Customer Care Information", null, {
                                    hk: "qlYos"
                                }),
                                children: [(0, _.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == S ? void 0 : S.mobileNumber,
                                    label: d.fbt._("Mobile Phone Number", null, {
                                        hk: "PMTTg"
                                    }),
                                    forceLTR: !0
                                }), (0, _.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == S ? void 0 : S.landlineNumber,
                                    label: d.fbt._("Landline Phone Number", null, {
                                        hk: "tXYaf"
                                    }),
                                    forceLTR: !0
                                }), (0, _.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == S ? void 0 : S.email,
                                    label: d.fbt._("Email Address", null, {
                                        hk: "2jYxR1"
                                    })
                                })]
                            }), (0, _.jsxs)(p.ComplianceInfoGroup, {
                                title: d.fbt._("Grievance Officer Information", null, {
                                    hk: "3emd7I"
                                }),
                                children: [(0, _.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == y ? void 0 : y.name,
                                    label: d.fbt._("Name", null, {
                                        hk: "2vEs6r"
                                    })
                                }), (0, _.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == y ? void 0 : y.mobileNumber,
                                    label: d.fbt._("Mobile Phone Number", null, {
                                        hk: "3kk5I"
                                    }),
                                    forceLTR: !0
                                }), (0, _.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == y ? void 0 : y.landlineNumber,
                                    label: d.fbt._("Landline Phone Number", null, {
                                        hk: "4GBzF0"
                                    })
                                }), (0, _.jsx)(p.ComplianceInfoPrimitiveField, {
                                    value: null == y ? void 0 : y.email,
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
                l = a(n(34575)),
                o = a(n(93913)),
                r = a(n(2205)),
                s = a(n(99842)),
                u = n(78577),
                c = a(n(45705)),
                d = a(n(20859)),
                f = a(n(4988)),
                h = n(65901),
                p = n(39358),
                m = n(88008),
                v = a(n(5684)),
                g = a(n(28201)),
                x = n(73092),
                C = a(n(31294)),
                _ = n(96706),
                b = a(n(55422)),
                j = a(n(50177)),
                k = n(2629),
                S = a(n(99337)),
                y = n(86785),
                M = n(3995),
                T = a(n(11465)),
                E = n(53082),
                P = n(56264),
                w = n(16417),
                I = n(36844),
                A = a(n(50507)),
                N = n(52867),
                D = n(9835),
                O = a(n(77538)),
                R = n(75294),
                L = a(n(1270)),
                B = n(60425),
                G = a(n(46989)),
                F = n(45065),
                V = n(3298),
                U = n(4099),
                H = a(n(40290)),
                q = n(45323),
                W = n(58419),
                Y = n(85893),
                z = function(e) {
                    (0, r.default)(n, e);
                    var t = (0, s.default)(n);

                    function n() {
                        var e;
                        (0, l.default)(this, n);
                        for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i)))._scrollOffset = 0, e._setScrollOffset = function(t) {
                            e._scrollOffset = t
                        }, e._handleProductDetail = function(t, n) {
                            var a = e.props.chat,
                                i = (0, Y.jsx)(O.default, {
                                    chat: a,
                                    collectionId: n,
                                    product: t,
                                    onEnd: e._end,
                                    onBack: e._popAndUpdate,
                                    refreshCarousel: !1,
                                    onProductLinkClick: e._handleProductLinkClick,
                                    onProductMoreInformation: e._handleProductMoreInformation,
                                    onCartClick: e._handleCartClick
                                });
                            e.push(i)
                        }, e._handleProductDetailFromInfo = function(t) {
                            var n = (0, Y.jsx)(R.ProductDetailsWithDeepLink, {
                                chat: e.props.chat,
                                productInfo: t,
                                onEnd: e._end,
                                onBack: e._pop,
                                onProductDetail: e._handleProductDetail,
                                onProductCatalog: e._handleProductCatalogHeaderClick,
                                onProductLinkClick: e._handleProductLinkClick,
                                onProductMoreInformation: e._handleProductMoreInformation,
                                onCartClick: e._handleCartClick
                            });
                            e.push(n)
                        }, e._handleCollectionSeeAll = function(t) {
                            var n = e.props.chat.id;
                            e.push((0, Y.jsx)(p.CollectionContentDrawer, {
                                contact: e.props.chat.contact,
                                onProductDetail: e._handleProductDetail,
                                catalogId: n,
                                onBack: e._pop,
                                onCatalogLinkClick: e._handleCatalogLinkClick,
                                onCartClick: e._handleCartClick,
                                collection: t
                            }))
                        }, e._handleProductLinkClick = function(t) {
                            e.push((0, Y.jsx)(L.default, {
                                product: t,
                                onBack: e._pop
                            }))
                        }, e._handleProductMoreInformation = function(t) {
                            var n = (0, Y.jsx)(G.default, {
                                product: t,
                                onBack: e._popAndUpdate
                            });
                            e.push(n)
                        }, e._handleCatalogLinkClick = function(t, n) {
                            e.push((0, Y.jsx)(d.default, {
                                catalog: t,
                                contact: n,
                                onBack: e._pop
                            }))
                        }, e._handleCartClick = function(t) {
                            var n = (0, N.getProductCatalogContext)(e.props.context),
                                a = (0, H.default)(t, e.props.chat, n);
                            a && e.push(a)
                        }, e.pushProductCatalog = function() {
                            var t = e.props.chat,
                                n = (0, k.canViewCollections)() ? (0, Y.jsx)(f.default, {
                                    contact: t.contact,
                                    onProductDetail: e._handleProductDetail,
                                    catalogId: t.id,
                                    onBack: e._pop,
                                    businessProfile: t.contact.businessProfile,
                                    onCatalogLinkClick: e._handleCatalogLinkClick,
                                    onCartClick: e._handleCartClick,
                                    onCollectionSeeAll: e._handleCollectionSeeAll
                                }) : (0, Y.jsx)(B.ProductListDrawer, {
                                    contact: t.contact,
                                    onProductDetail: e._handleProductDetail,
                                    catalogId: t.id,
                                    onBack: e._pop,
                                    businessProfile: t.contact.businessProfile,
                                    onCatalogLinkClick: e._handleCatalogLinkClick,
                                    onCartClick: e._handleCartClick
                                });
                            e.push(n)
                        }, e._handleProductCatalog = function(t, n) {
                            var a = e.props.chat.id;
                            (0, k.canViewCollections)() && V.QPL.markerStart(U.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, {
                                annotations: {
                                    string: {
                                        EntryPoint: n
                                    }
                                }
                            }), (0, P.logCarouselViewMoreClick)({
                                catalogOwnerWid: a,
                                catalogContext: t
                            }), e.pushProductCatalog(a)
                        }, e._handleProductCatalogHeaderClick = function(t, n) {
                            (0, P.logCarouselViewMoreClick)({
                                catalogOwnerWid: t,
                                catalogContext: n
                            }), e._handleProductCatalog(n, "ProductCatalogHeader")
                        }, e._handleStarred = function() {
                            var t = (0, Y.jsx)(q.StarredDrawerLoadable, {
                                chat: e.props.chat,
                                starredMsgs: e.props.chat.getStarredMsgs(),
                                onClose: e._pop
                            });
                            e.push(t)
                        }, e._handleAdminSetting = function() {
                            var t = e.props.chat,
                                n = (0, Y.jsx)(T.default, {
                                    chat: t,
                                    groupMetadata: t.groupMetadata,
                                    onClose: e._pop
                                });
                            e.push(n)
                        }, e._handleContactCard = function() {
                            e.push((0, Y.jsx)(v.default, {
                                chat: e.props.chat,
                                onClose: e._pop
                            }))
                        }, e._handleMediaGallery = function() {
                            var t = (0, Y.jsx)(I.MediaGalleryDrawer, {
                                chat: e.props.chat,
                                onBack: e._pop,
                                onProductDetail: e._handleProductDetail,
                                setProductsScrollOffset: e._setScrollOffset
                            });
                            e.push(t)
                        }, e._handleGroupInviteLink = function() {
                            var t = e.props.chat;
                            if (t.isInviteGrowthLockedGroup()) {
                                var n, a = !!(null === (n = t.groupMetadata) || void 0 === n ? void 0 : n.participants.iAmAdmin());
                                (0, M.openGrowthLockedModal)(a, !0)
                            } else {
                                var i = (0, Y.jsx)(y.GroupInviteLinkDrawerLoadable, {
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
                                initialTab: I.TABS.PRODUCTS,
                                productsScrollOffset: e._scrollOffset
                            })
                        }, e._end = function() {
                            e.end(!0)
                        }, e._handleVerification = function(t) {
                            var n = t || e.props.chat.contact,
                                a = (0, Y.jsx)(W.VerificationDrawerLoadable, {
                                    contact: n,
                                    onClose: e._pop,
                                    isFirstLevel: !1
                                });
                            e.push(a)
                        }, e._handleLiveLocation = function() {
                            var t = (0, Y.jsx)(E.LiveLocationDrawerLoadable, {
                                chat: e.props.chat,
                                onClose: e._pop
                            });
                            e.push(t)
                        }, e._handleDDMSettingsClick = function(t) {
                            e.push((0, Y.jsx)(C.default, {
                                onClose: e._pop,
                                entryPoint: t
                            }))
                        }, e._handleEphemeral = function() {
                            var t = e.props.chat,
                                n = t.isGroup ? A.default.DISAPPEARING_MODE_ENTRY_POINT_TYPE.GROUP_CHAT_DISAPPEARING_MESSAGES_SETTING : A.default.DISAPPEARING_MODE_ENTRY_POINT_TYPE.INDIVIDUAL_CHAT_DISAPPEARING_MESSAGES_SETTING,
                                a = (0, Y.jsx)(b.default, {
                                    chat: t,
                                    showNux: !1,
                                    entryPoint: A.default.EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_INFO,
                                    onClose: e._pop,
                                    onDDMSettingsClick: function() {
                                        return e._handleDDMSettingsClick(n)
                                    }
                                });
                            e.push(a)
                        }, e._handleManageCommunityGroupsClick = function(t) {
                            var n = (0, Y.jsx)(w.ManageCommunityGroupsFlowLoadable, {
                                parentGroup: t,
                                onBack: e._pop
                            });
                            e.push(n)
                        }, e._handleCommunityClick = function() {
                            var t, n = null === (t = e.props.chat.groupMetadata) || void 0 === t ? void 0 : t.parentGroup;
                            if (n) {
                                var a = (0, Y.jsx)(m.CommunityHome, {
                                    jid: n,
                                    callbacks: {
                                        onBack: e._pop,
                                        onManageCommunityGroupsClick: e._handleManageCommunityGroupsClick
                                    }
                                });
                                e.push(a)
                            }
                        }, e
                    }
                    return (0, o.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this._handleStarred,
                                t = this._handleMediaGallery,
                                n = this.props.chat;
                            n.isGroup ? ((0, u.isMDBackend)() && (0, F.queryAndUpdateGroupMetadataById)(n.id), this.push((0, Y.jsx)(S.default, {
                                chat: n,
                                showFullGroupDescription: this.props.showFullGroupDescription,
                                scrollToParticipantList: this.props.scrollToParticipantList,
                                groupMetadata: n.groupMetadata,
                                contact: n.contact,
                                profilePicThumb: n.contact.getProfilePicThumb(),
                                onVerification: this._handleVerification,
                                onStarred: e,
                                onMediaGallery: t,
                                onAdminSetting: this._handleAdminSetting,
                                onGroupInviteLink: this._handleGroupInviteLink,
                                onLiveLocation: this._handleLiveLocation,
                                onEphemeral: this._handleEphemeral,
                                onCommunityClick: this._handleCommunityClick,
                                onClose: this._pop
                            }))) : n.isBroadcast ? this.push((0, Y.jsx)(c.default, {
                                chat: n,
                                contact: n.contact,
                                onStarred: e,
                                onMediaGallery: t,
                                onClose: this._pop
                            })) : n.isUser && (n.contact.isBusiness && (0, k.canSeeBizProfileV3)() && h.Cmd.setDrawerContext("right", (0, N.buildProductCatalogContext)(new D.ProductCatalogSession, (0, x.getMaybeBizPlatformForLogging)(n.contact.id.toString()), A.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE)), this.push((0, Y.jsx)(g.default, {
                                contact: n.contact,
                                onVerification: this._handleVerification,
                                onStarred: e,
                                onContactCard: this._handleContactCard,
                                onMediaGallery: t,
                                onProductCatalog: this._handleProductCatalog,
                                onProductDetail: this._handleProductDetail,
                                onLiveLocation: this._handleLiveLocation,
                                onEphemeral: this._handleEphemeral,
                                onClose: this._pop,
                                profileEntryPoint: this.props.profileEntryPoint
                            })))
                        }
                    }]), n
                }(j.default);
            t.default = function(e) {
                return (0, Y.jsx)(_.DrawerContext.Consumer, {
                    children: function(t) {
                        return (0, Y.jsx)(z, (0, i.default)({
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
                    I = (0, C.default)(),
                    A = (0, x.default)(),
                    N = (0, f.default)(),
                    D = (0, h.default)((function() {
                        return n.chat.constructMediaMsgs(n)
                    })),
                    O = D.current.length,
                    R = (0, m.default)(O),
                    L = (0, h.default)((function() {
                        return n.type === u.MSG_TYPE.IMAGE ? new E.default.UiAction({
                            uiActionType: E.default.UI_ACTION_TYPE.IMAGE_OPEN,
                            uiActionPreloaded: n.mediaData.mediaStage === y.MEDIA_DATA_STAGE.RESOLVED
                        }) : null
                    })),
                    B = (0, d.useRef)(null),
                    G = (0, d.useRef)(),
                    F = (0, d.useRef)(),
                    V = (0, d.useRef)(null),
                    U = (0, d.useRef)(null),
                    H = (0, d.useRef)(null),
                    q = (0, d.useState)(n),
                    W = (0, i.default)(q, 2),
                    Y = W[0],
                    z = W[1],
                    K = (0, d.useState)(!1),
                    X = (0, i.default)(K, 2),
                    Z = X[0],
                    $ = X[1],
                    Q = (0, d.useState)(!0),
                    J = (0, i.default)(Q, 2),
                    ee = J[0],
                    te = J[1],
                    ne = (0, m.default)(Y),
                    ae = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = U.current,
                            n = H.current,
                            a = V.current;
                        if (t && n && a) {
                            var i = 0;
                            a instanceof HTMLElement && (i = a.clientWidth / 2 - t.clientWidth / 2), (0, c.default)(n, "stop");
                            var l = 0;
                            e && (l = 300), (0, c.default)(a, "scroll", {
                                duration: l,
                                container: n,
                                offset: i,
                                axis: "x",
                                easing: [.1, .82, .25, 1]
                            })
                        }
                    },
                    ie = function(e) {
                        if (!e) return !0;
                        var t = e.isViewOnce,
                            n = e.isStickerMsg;
                        return !t && !n
                    };
                (0, d.useEffect)((function() {
                    var e;
                    ae(), ie(n) && (e = U.current) && (0, c.default)(e, {
                        opacity: [1, 0],
                        translateY: ["0%", "100%"]
                    }, {
                        duration: 300,
                        delay: 100,
                        easing: [.1, .82, .25, 1]
                    }).then((function() {
                        I.aborted || te(!1)
                    }))
                }), []), (0, d.useEffect)((function() {
                    (0, b.isMediaGalleryFixEnabled)() && O > (null != R ? R : 0) && ae()
                }));
                var le = function(e) {
                        A((function() {
                            D.current.loadMoreAroundIfNeeded(e)
                        })), z(e)
                    },
                    oe = function(e) {
                        if (e && e.stopPropagation(), !Z) {
                            var t = Y;
                            if (t) {
                                var a = null;
                                for (a = D.current.getAfter(t);
                                    (null === (i = a) || void 0 === i ? void 0 : i.mediaData) && !(0, S.hasThumbnail)(a.mediaData);) {
                                    var i;
                                    a = D.current.getAfter(a)
                                }
                                a ? le(a) : D.current.hasMediaAfter && (G.current || (G.current = D.current.queryMedia({
                                    chat: n.chat,
                                    msg: n,
                                    direction: "after"
                                }).then((function(e) {
                                    I.aborted || "number" == typeof e.length && e.length > 0 && Y === n && oe()
                                })).catch((function() {
                                    __LOG__(3)`query media msgs error: `
                                })).finally((function() {
                                    G.current = null
                                }))))
                            }
                        }
                    },
                    re = function(e) {
                        if (e && e.stopPropagation(), !Z) {
                            var t = Y;
                            if (t) {
                                var a = null;
                                for (a = D.current.getBefore(t);
                                    (null === (i = a) || void 0 === i ? void 0 : i.mediaData) && !(0, S.hasThumbnail)(a.mediaData);) {
                                    var i;
                                    a = D.current.getBefore(a)
                                }
                                a ? le(a) : D.current.hasMediaBefore && (F.current || (F.current = D.current.queryMedia({
                                    chat: n.chat,
                                    msg: n,
                                    direction: "before"
                                }).then((function(e) {
                                    I.aborted || "number" == typeof e.length && e.length > 0 && Y === n && re()
                                })).catch((function() {
                                    __LOG__(3)`query media msgs error: `
                                })).finally((function() {
                                    F.current = null
                                }))))
                            }
                        }
                    },
                    se = function() {
                        _.Cmd.closeModalMedia()
                    },
                    ue = (0, v.default)((function() {
                        z(null), se()
                    })),
                    ce = (null == Y ? void 0 : Y.isViewOnce) || (null == Y ? void 0 : Y.isStickerMsg);
                (0, p.useListener)(ce ? Y : null, "revoked", ue);
                var de = ce ? null : D.current;
                (0, p.useListener)(de, "remove", (function(e, t, a) {
                    var i = D.current,
                        l = Y;
                    if (i.includes(n) || null != l && null != l.id && l.id.toString() !== e.id.toString()) N();
                    else {
                        var r = a.index;
                        0 === i.length ? se() : i.length === r ? le((0, o.default)(i.at(r - 1), "mediaMsgs.at(index - 1)")) : le((0, o.default)(i.at(r), "mediaMsgs.at(index)"))
                    }
                })), (0, p.useListener)(de, "reset", (function() {
                    se()
                })), (0, p.useListener)(de, "query_media_after", (function() {
                    N()
                })), (0, p.useListener)(de, "query_media_before", (function() {
                    var e = H.current;
                    e && (B.current = e.scrollWidth, e instanceof HTMLElement && N())
                })), (0, p.useListener)(window, "keydown", (function(e) {
                    var t = k.default.isRTL();
                    e.keyCode === l.default.LEFT ? t ? oe() : re() : e.keyCode === l.default.RIGHT && (t ? re() : oe())
                })), (0, d.useEffect)((function() {
                    A((function() {
                        Y && D.current.loadMoreAroundIfNeeded(Y)
                    }))
                }), [Y, D, A]), (0, d.useEffect)((function() {
                    if (ne !== Y) ae(!0);
                    else {
                        var e = H.current;
                        if (!e || null == B.current || 0 === B.current) return;
                        e instanceof HTMLElement && (e.scrollLeft += e.scrollWidth - B.current), B.current = null
                    }
                }), [Y, ne]);
                var fe = (0, g.default)((function(e, t, n) {
                    if (0 !== t.length && null != n) {
                        if (t.hasMediaBefore && n < e.clientWidth) {
                            var a = (0, o.default)(t.head(), "mediaMsgs.head()");
                            A((function() {
                                t.queryMedia({
                                    chat: a.chat,
                                    msg: a
                                }), N()
                            }))
                        }
                        if (t.hasMediaAfter && n + s.SCROLL_FUDGE > e.scrollWidth - 2 * e.clientWidth) {
                            var i = (0, o.default)(t.last(), "mediaMsgs.last()");
                            A((function() {
                                t.queryMedia({
                                    chat: i.chat,
                                    msg: i,
                                    direction: "after"
                                }), N()
                            }))
                        }
                    }
                }), 100);
                if (!Y) return null;
                var he = D.current,
                    pe = he.last(),
                    me = he.hasMediaAfter || Y !== pe ? oe : null,
                    ve = he.head(),
                    ge = null;
                ge = he.hasMediaBefore || Y !== ve ? re : null, (0, r.isMDBackend)() && (ge = (he.hasMediaBefore || Y !== ve) && function() {
                    if (!Y) return !1;
                    for (var e = D.current.indexOf(Y) - 1; e > 0; e--) {
                        var t = D.current.at(e);
                        if (t && (0, S.hasThumbnail)(t.mediaData)) return !0
                    }
                    return !1
                }() ? re : null);
                return (0, w.jsxs)("div", {
                    className: Z ? "img-zoomed-in" : null,
                    children: [ie(Y) && (0, w.jsx)(T.default, {
                        activeMsg: Y,
                        mediaMsgs: D.current,
                        highlightedMsgIds: e.highlightedMsgIds,
                        onSelectThumb: le,
                        onSetActiveThumb: function(e) {
                            V.current = e
                        },
                        onScroll: function(e) {
                            fe(e.currentTarget, D.current, e.currentTarget.scrollLeft)
                        },
                        setRefThumbsContainer: function(e) {
                            U.current = e
                        },
                        setRefThumbs: function(e) {
                            H.current = e
                        }
                    }), (0, w.jsx)(M.default, {
                        msg: Y,
                        mediaData: Y.mediaData,
                        onBack: se,
                        onExitAnimation: function() {
                            var e;
                            ie(n) && (e = U.current) && (0, c.default)(e, {
                                opacity: [0, 1],
                                translateY: ["100%", "0%"]
                            }, {
                                duration: 300,
                                easing: [.1, .82, .25, 1]
                            })
                        },
                        onNext: me,
                        onPrev: ge,
                        onImgZoomIn: function(e) {
                            $(e)
                        },
                        getZoomNode: e.getZoomNode,
                        startTime: e.startTime,
                        isAnimatingIn: ee,
                        onImageLoad: L.current ? function() {
                            var e = L.current;
                            e && (e.markUiActionT(), Object.assign(e, (0, j.getGroupMetricsFromChatWid)(n.chat.id)), e.commit(), (0, P.logUiActionShadowPrivateStatsTestEvents)(), L.current = null)
                        } : null,
                        msgIndexInAlbum: function() {
                            var e = -1;
                            if (!a || !Y) return e;
                            var t = Y.id.toString();
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
                l = a(n(16270)),
                o = a(n(272)),
                r = n(78577),
                s = n(80965),
                u = n(40787),
                c = a(n(69760)),
                d = n(67294),
                f = a(n(45764)),
                h = a(n(62905)),
                p = n(91285),
                m = a(n(79787)),
                v = a(n(44588)),
                g = a(n(75967)),
                x = a(n(96109)),
                C = a(n(22190)),
                _ = n(65901),
                b = n(2629),
                j = n(23571),
                k = a(n(9844)),
                S = n(19499),
                y = n(41655),
                M = a(n(92494)),
                T = a(n(82184)),
                E = a(n(50507)),
                P = n(26329),
                w = n(85893)
        },
        46324: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.requireBundle = t.SendContactFlowLoadable = void 0;
            var i = a(n(87757)),
                l = a(n(48926)),
                o = a(n(68356)),
                r = a(n(9844)),
                s = a(n(47410)),
                u = a(n(19509)),
                c = n(85893),
                d = (0, u.default)((0, l.default)(i.default.mark((function e() {
                    var t;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Promise.all([n.e(721), n.e(6738), n.e(9139), n.e(275)]).then(n.bind(n, 98867));
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
                        title: r.default.t(744),
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
                        return g.ChatCollection.filter((function(e) {
                            return e.archive && e.shouldAppearInList
                        }))
                    },
                    a = (0, f.useModelValues)(e.settings, ["showArchiveV2", "archive"]),
                    B = (0, c.default)((function() {
                        return new M.default
                    })),
                    G = (0, c.default)((function() {
                        return new D.default([], (function(e) {
                            return e.id.toString()
                        }))
                    })),
                    F = (0, u.useRef)(null),
                    V = (0, u.useState)(!1),
                    U = (0, i.default)(V, 2),
                    H = U[0],
                    q = U[1],
                    W = (0, u.useState)(n),
                    Y = (0, i.default)(W, 2),
                    z = Y[0],
                    K = Y[1],
                    X = function() {
                        return (0, E.archiveV2Supported)() && a.showArchiveV2
                    };
                (0, d.useListener)(g.ChatCollection, [X() ? "sort" : null, "change:archive", "add", "remove"].filter(Boolean), (function() {
                    K(n())
                }));
                var Z = function(e) {
                    G.current.setVal(e, !1)
                };
                (0, d.useListener)(x.Cmd, "close_chat", (function(e) {
                    e === G.current.getVal() && G.current.unset()
                })), (0, d.useListener)(x.Cmd, "update_chatlist_selection", Z);
                var $ = (0, h.default)(N.NUX.ARCHIVE, 3),
                    Q = (0, i.default)($, 3),
                    J = Q[0],
                    ee = Q[1],
                    te = Q[2],
                    ne = function() {
                        var e = g.ChatCollection.some((function(e) {
                            return e.archive
                        }));
                        return X() && e && J && !H
                    };
                (0, u.useEffect)((function() {
                    if (ne() && ee(), X() && (0, I.isElevatedImportantMessageEnabled)()) {
                        var e = n(),
                            t = new Map;
                        e.forEach((function(e) {
                            e.archiveAtMentionViewedInDrawer = !0, t.set(e.id.toString(), !0)
                        })), (0, v.updateChatArchiveDrawer)(t)
                    }
                    F.current && o.default.focus(F.current);
                    var a = g.ChatCollection.toArray().find((function(e) {
                        return e.active && e.archive
                    }));
                    a && Z(a)
                }), []);
                var ae, ie, le = function() {
                        t()
                    },
                    oe = function(e, t) {
                        x.Cmd.openChatFromUnread(t).then((function(e) {
                            e && x.Cmd.focusChatTextInput(t)
                        })), (0, E.archiveV2Supported)() && a.archive.enabled || le()
                    };
                G.current.init(z, !0), ne() && (ae = (0, L.jsxs)("div", {
                    className: p.default.nuxContainer,
                    children: [(0, L.jsxs)(T.FlexColumn, {
                        align: "center",
                        children: [(0, L.jsx)("span", {
                            className: p.default.nuxIcon,
                            children: (0, L.jsx)(O.default, {
                                name: "archive-nux"
                            })
                        }), (0, L.jsx)("div", {
                            className: p.default.nuxHeader,
                            children: (0, L.jsx)(R.Text, {
                                theme: "large",
                                as: "h1",
                                children: s.fbt._("Archived chats will stay archived", null, {
                                    hk: "3dEGG"
                                })
                            })
                        }), (0, L.jsx)("div", {
                            className: p.default.nuxContent,
                            children: (0, L.jsx)("div", {
                                className: p.default.nuxText,
                                children: (0, L.jsx)(R.Text, {
                                    theme: "plain",
                                    as: "p",
                                    children: (0, l.isMDBackend)() ? s.fbt._("To reduce interruptions, archived chats will stay here with notifications turned off. To change this experience, go to Settings > Chats on your phone.", null, {
                                        hk: "1VSdJQ"
                                    }) : s.fbt._("To reduce interruptions, archived chats will stay here with notifications turned off. To change this experience, go to Settings > Archived Chats.", null, {
                                        hk: "1gz2m1"
                                    })
                                })
                            })
                        })]
                    }), (0, L.jsx)("button", {
                        onClick: function() {
                            te(), q(!0)
                        },
                        className: p.default.btnClose,
                        children: (0, L.jsx)(O.default, {
                            name: "x-alt"
                        })
                    })]
                }));
                ie = z.length > 0 ? (0, L.jsxs)(P.HotKeys, {
                    ref: F,
                    handlers: {
                        down: function(e) {
                            e.preventDefault(), e.stopPropagation(), G.current.setNext(!0)
                        },
                        up: function(e) {
                            e.preventDefault(), e.stopPropagation(), G.current.setPrev(!0)
                        }
                    },
                    children: [(0, L.jsx)(r.default, {
                        transitionName: "slide",
                        children: ae
                    }), (0, L.jsx)(y.FlatList, {
                        className: p.default.flatListContainer,
                        data: z.map((function(e) {
                            return {
                                itemKey: e.id.toString(),
                                chat: e
                            }
                        })),
                        flatListController: B.current,
                        direction: "vertical",
                        renderItem: function(e) {
                            return (0, L.jsx)(m.Chat, {
                                chat: e.chat,
                                mode: m.Mode.LAST,
                                active: G.current,
                                onClick: oe,
                                hideArchivedIcon: (0, E.archiveV2Supported)() && a.archive.enabled,
                                hideMuteIcon: X(),
                                hideMuteOption: X(),
                                ephemeralIcon: "chat-list"
                            })
                        }
                    })]
                }) : (0, L.jsx)(S.Archived, {});
                var re = (0, l.isLegacyWebdBackend)() && (0, E.archiveV2Supported)() && a.archive.enabled ? (0, L.jsx)(A.MenuBarItem, {
                        a8nText: "archived-menu",
                        icon: (0, L.jsx)(O.default, {
                            name: "menu"
                        }),
                        title: w.default.t(604),
                        children: (0, L.jsx)(j.Dropdown, {
                            type: "dropdown_menu",
                            flipOnRTL: !0,
                            dirX: j.DirX.LEFT,
                            children: (0, L.jsx)(k.DropdownItem, {
                                a8n: "open-archive-settings menu-item",
                                action: e.showSettings,
                                children: s.fbt._("Archive settings", null, {
                                    hk: "1YI0jC"
                                })
                            })
                        }, "ArchivedDrawerHeader")
                    }) : null,
                    se = (0, E.archiveV2Supported)() && a.archive.enabled ? s.fbt._("Archived", null, {
                        hk: "3HjzQg"
                    }) : w.default.t(144);
                return (0, L.jsxs)(C.default, {
                    theme: "archived",
                    children: [(0, L.jsx)(b.DrawerHeader, {
                        title: se,
                        onBack: le,
                        type: b.DRAWER_HEADER_TYPE.LARGE,
                        menu: re
                    }), (0, L.jsx)(_.default, {
                        flatListControllers: [B.current],
                        children: ie
                    })]
                })
            };
            var i = a(n(63038)),
                l = n(78577),
                o = a(n(11845)),
                r = a(n(65668)),
                s = n(48360),
                u = n(67294),
                c = a(n(62905)),
                d = n(91285),
                f = n(50857),
                h = a(n(52574)),
                p = a(n(84485)),
                m = n(97397),
                v = n(28862),
                g = n(4481),
                x = n(65901),
                C = a(n(53187)),
                _ = a(n(18345)),
                b = n(19288),
                j = n(98169),
                k = n(94680),
                S = n(75993),
                y = n(73568),
                M = a(n(92546)),
                T = n(27968),
                E = n(2629),
                P = n(32012),
                w = a(n(9844)),
                I = n(64759),
                A = n(91823),
                N = n(15849),
                D = a(n(18894)),
                O = a(n(7665)),
                R = n(22552),
                L = n(85893)
        },
        22110: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = function(e) {
                        switch (e.verifiedLevel) {
                            case r.VERIFIED_LEVEL.HIGH:
                                return e.name === e.verifiedName ? h.default.t(847, {
                                    businessName: e.verifiedName
                                }) : h.default.t(848, {
                                    businessName: e.verifiedName
                                });
                            case r.VERIFIED_LEVEL.LOW:
                            case r.VERIFIED_LEVEL.UNKNOWN:
                                return l.fbt._("This may be a business. WhatsApp hasn't verified their name yet.", null, {
                                    hk: "404mUL"
                                })
                        }
                    }((0, o.useModelValues)(e.contact, ["name", "verifiedLevel", "verifiedName", "formattedName"])),
                    n = (0, p.jsx)(s.default, {
                        href: (0, i.getBusinessFaqUrl)(),
                        onClick: v,
                        children: h.default.t(547)
                    });
                return (0, p.jsxs)(c.default, {
                    onOK: m,
                    okText: h.default.t(682),
                    children: [(0, p.jsx)(d.EmojiText, {
                        text: t
                    }), " ", n]
                })
            };
            var i = n(8917),
                l = n(48360),
                o = n(50857),
                r = n(96127),
                s = a(n(81288)),
                u = n(65901),
                c = a(n(86777)),
                d = n(73008),
                f = n(49012),
                h = a(n(9844)),
                p = n(85893),
                m = function() {
                    u.Cmd.closeModal()
                },
                v = function(e) {
                    e.preventDefault(), u.Cmd.closeModal("none"), setTimeout((function() {
                        return (0, f.openExternalLink)((0, i.getBusinessFaqUrl)())
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
                    n = (0, r.useModelValues)(t, ["verifiedLevel", "verifiedName"]),
                    a = n.verifiedLevel,
                    b = n.verifiedName,
                    j = (0, i.getBusinessFaqUrl)(),
                    k = !h.Conn.isSMB;
                (0, o.useEffect)((function() {
                    k && new g.default.BannerEvent({
                        bannerType: g.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                        bannerOperation: g.default.BANNER_OPERATIONS.SHOWN
                    }).commit()
                }), [k]);
                var S = a === u.VERIFIED_LEVEL.HIGH ? v.default.t(989, {
                    businessName: b
                }) : l.fbt._("This business uses WhatsApp Business, which allows them to add their opening hours, address, website and catalog of products or services.", null, {
                    hk: "82W5f"
                });
                return (0, _.jsxs)(f.default, {
                    title: l.fbt._("About WhatsApp Business", null, {
                        hk: "3XF5gx"
                    }),
                    onOK: function() {
                        d.Cmd.closeModal(), k && new g.default.BannerEvent({
                            bannerType: g.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: g.default.BANNER_OPERATIONS.DISMISS
                        }).commit()
                    },
                    okText: l.fbt._("OK", null, {
                        hk: "2KEeHb"
                    }),
                    children: [(0, _.jsx)(p.EmojiText, {
                        text: S
                    }), " ", (0, _.jsx)(c.default, {
                        href: j,
                        onClick: function(e) {
                            e.preventDefault(), d.Cmd.closeModal(), setTimeout((function() {
                                return (0, m.openExternalLink)(j)
                            }), 10)
                        },
                        children: v.default.t(547)
                    }), k && (0, _.jsx)("div", {
                        className: s.default.footerNote,
                        children: (0, _.jsxs)(C.TextSpan, {
                            theme: "muted",
                            size: "13",
                            children: [l.fbt._("If you’re a business, the free WhatsApp Business app can help.", null, {
                                hk: "3gfQun"
                            }), (0, _.jsx)("br", {}), (0, _.jsx)(c.default, {
                                onClick: function(e) {
                                    e.preventDefault(), d.Cmd.closeModal(), new g.default.BannerEvent({
                                        bannerType: g.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                                        bannerOperation: g.default.BANNER_OPERATIONS.CLICK
                                    }).commit(), setTimeout((function() {
                                        return d.Cmd.openModal((0, _.jsx)(x.SmbAppUpsellModal, {}))
                                    }), 200)
                                },
                                className: s.default.getTheAppLink,
                                children: l.fbt._("Learn about getting the app", null, {
                                    hk: "3ncguo"
                                })
                            })]
                        })
                    })]
                })
            };
            var i = n(8917),
                l = n(48360),
                o = n(67294),
                r = n(50857),
                s = a(n(87485)),
                u = n(96127),
                c = a(n(81288)),
                d = n(65901),
                f = a(n(86777)),
                h = n(73929),
                p = n(73008),
                m = n(49012),
                v = a(n(9844)),
                g = a(n(50507)),
                x = n(67093),
                C = n(22552),
                _ = n(85893)
        },
        67093: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SmbAppUpsellModal = function() {
                return (0, h.jsxs)(r.default, {
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
                        }), " ", (0, h.jsx)(l.default, {
                            href: p,
                            onClick: function(e) {
                                e.preventDefault(), o.Cmd.closeModal(), setTimeout((function() {
                                    return (0, u.openExternalLink)(p)
                                }), 10)
                            },
                            children: c.default.t(547)
                        })]
                    })]
                })
            }, t.WHATSAPP_BUSINESS_URL = void 0;
            var i = n(48360),
                l = a(n(81288)),
                o = n(65901),
                r = a(n(86777)),
                s = n(73008),
                u = n(49012),
                c = a(n(9844)),
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
                var e = (0, r.useRef)(null),
                    t = (0, r.useRef)(null),
                    n = (0, r.useContext)(c.ThemeContext).theme,
                    a = "dark" === n;
                return (0, r.useEffect)((function() {
                    return null != e.current && (t.current = new s.default(e.current, {
                            text: "https://www.whatsapp.com/business/download",
                            colorDark: "#122e31",
                            colorLight: "#ffffff",
                            width: l.QR_EDGE / 2,
                            height: l.QR_EDGE / 2,
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
                l = n(80965),
                o = a(n(94184)),
                r = n(67294),
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
            var i = n(78577),
                l = n(73466),
                o = n(48360),
                r = n(67294),
                s = a(n(56720)),
                u = a(n(45764)),
                c = a(n(62905)),
                d = n(91285),
                f = n(50857),
                h = a(n(86810)),
                p = a(n(52988)),
                m = (a(n(98350)), n(82506)),
                v = a(n(83399)),
                g = n(65901),
                x = a(n(53187)),
                C = a(n(18345)),
                _ = a(n(61876)),
                b = n(19288),
                j = a(n(38973)),
                k = a(n(96178)),
                S = a(n(92546)),
                y = a(n(9844)),
                M = n(68220),
                T = a(n(7665)),
                E = n(22552),
                P = a(n(93958)),
                w = n(85893),
                I = {
                    flexGrow: "tvf2evcx",
                    flexShrink: "oq44ahr5",
                    flexBasis: "lb5m6g5c",
                    paddingBottom: "s9fl9ege"
                };

            function A(e, t) {
                var n, a, r = e.onClose,
                    A = e.onMediaGallery,
                    N = (0, u.default)(),
                    D = (0, P.default)(),
                    O = (0, c.default)((function() {
                        return new S.default
                    })),
                    R = (0, f.useModelValues)(e.chat, ["id", "groupMetadata"]);
                (0, d.useListener)(null === (n = R.groupMetadata) || void 0 === n ? void 0 : n.participants, ["add", "remove", "sort", "reset"], N);
                var L = null;
                A && (L = (0, w.jsx)(v.default, {
                    onMediaGallery: A,
                    chat: (0, M.unproxy)(R)
                }));
                var B, G = (0, w.jsx)(m.ChatInfoDrawerButtonsSection, {
                    children: (0, w.jsx)(_.default, {
                        a8nText: "li-delete-broadcast",
                        icon: (0, w.jsx)(T.default, {
                            name: "delete"
                        }),
                        color: "danger",
                        theme: "chat-info",
                        onClick: function() {
                            g.Cmd.deleteOrExitChat((0, M.unproxy)(R))
                        },
                        children: y.default.t(873)
                    })
                });
                (null === (a = R.groupMetadata) || void 0 === a ? void 0 : a.creation) ? (B = l.Clock.createdStr(R.groupMetadata.creation), B = (0, w.jsx)(E.TextDiv, {
                    theme: "small",
                    children: B
                })) : B = null;
                var F = null;
                (0, i.isMDBackend)() && (F = (0, w.jsx)(k.default, {
                    onClick: function() {
                        g.Cmd.openModal((0, w.jsx)(j.default, {
                            chatId: R.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    },
                    text: o.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "1iarlI"
                    })
                }));
                var V = null;
                return F && (V = (0, w.jsxs)(m.ChatInfoDrawerSection, {
                    children: [null, F]
                })), (0, w.jsxs)(x.default, {
                    ref: t,
                    theme: "striped",
                    children: [(0, w.jsxs)(b.DrawerHeader, {
                        type: b.DRAWER_HEADER_TYPE.SMALL,
                        rtlFixIfOnDarwin: !0,
                        onCancel: function() {
                            r ? r() : null == D || D.uie.requestDismiss()
                        },
                        children: [(0, w.jsx)(E.TextDiv, {
                            theme: "title",
                            children: o.fbt._("Broadcast list info", null, {
                                hk: "3S4EgV"
                            })
                        }), B]
                    }), (0, w.jsx)(C.default, {
                        flatListControllers: [O.current],
                        children: (0, w.jsxs)("div", {
                            className: (0, s.default)(I),
                            children: [(0, w.jsx)(p.default, {
                                chat: (0, M.unproxy)(R)
                            }), L, undefined, V, (0, w.jsx)(h.default, {
                                chat: (0, M.unproxy)(R),
                                flatListController: O.current
                            }), G]
                        })
                    })]
                }, "contact-info-modal")
            }
            var N = (0, r.forwardRef)(A);
            t.default = N
        },
        86810: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = (0, o.default)(),
                    g = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants;
                (0, r.useListener)(g, "add remove reset", a);
                var x = (0, l.useMemo)((function() {
                        return g ? g.map((function(e) {
                            return {
                                itemKey: e.id.toString(),
                                participant: e,
                                height: 68
                            }
                        })) : []
                    }), [g]),
                    C = function(e, t) {
                        i.default.equals((0, p.getMaybeMeUser)(), t.id) || (0, f.findChat)(t.id).then((function(e) {
                            u.Cmd.openChatFromUnread(e).then((function(t) {
                                t && u.Cmd.focusChatTextInput(e)
                            }))
                        }))
                    },
                    _ = null !== (n = null == g ? void 0 : g.length) && void 0 !== n ? n : 0,
                    b = m.default.t(982, {
                        count: _,
                        _plural: _
                    });
                return (0, v.jsx)(s.ChatInfoDrawerListSection, {
                    title: b,
                    children: (0, v.jsx)(h.FlatList, {
                        flatListController: e.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: x,
                        renderItem: function(e) {
                            var t = e.participant,
                                n = d.ContactCollection.gadd(t.id);
                            return (0, v.jsx)(c.Contact, {
                                contact: n,
                                theme: "chat-info",
                                admin: !!t.isAdmin,
                                onClick: C,
                                waitIdle: !0
                            }, t.id.toString())
                        }
                    })
                })
            };
            var i = a(n(67082)),
                l = n(67294),
                o = a(n(45764)),
                r = n(91285),
                s = n(82506),
                u = n(65901),
                c = n(65002),
                d = n(20050),
                f = n(68985),
                h = n(73568),
                p = n(1577),
                m = a(n(9844)),
                v = n(85893)
        },
        52988: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants,
                    C = (0, s.useModelValues)(e.chat.contact, ["name"]),
                    _ = (0, o.default)();
                (0, r.useListener)(a, "add remove reset", _);
                var b = null !== (n = null == a ? void 0 : a.length) && void 0 !== n ? n : 0,
                    j = i.fbt._("Broadcast List", null, {
                        hk: "46AT9o"
                    }).toString() + " · " + f.default.t(982, {
                        count: b,
                        _plural: b
                    }),
                    k = C.name ? (0, v.jsx)(h.Name, {
                        contact: e.chat.contact,
                        selectable: !0
                    }) : i.fbt._("Untitled List", null, {
                        hk: "fYALp"
                    });
                return (0, v.jsxs)(c.default, {
                    theme: "padding-large",
                    children: [(0, v.jsx)("div", {
                        className: (0, l.default)(g),
                        children: (0, v.jsx)(u.DetailImage, {
                            id: e.chat.id,
                            size: u.DetailImageSize.Large
                        })
                    }), (0, v.jsxs)(d.FlexColumn, {
                        align: "center",
                        children: [(0, v.jsx)(m.TextHeader, {
                            level: "2",
                            size: "24",
                            children: k
                        }), (0, v.jsx)("div", {
                            className: (0, l.default)(x),
                            children: (0, v.jsx)(p.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, v.jsx)(m.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: j
                                })
                            })
                        })]
                    })]
                })
            };
            var i = n(48360),
                l = a(n(56720)),
                o = a(n(45764)),
                r = n(91285),
                s = n(50857),
                u = n(66834),
                c = a(n(46821)),
                d = n(27968),
                f = a(n(9844)),
                h = n(1191),
                p = n(96197),
                m = n(22552),
                v = n(85893),
                g = {
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno",
                    marginBottom: "du8bjn1j"
                },
                x = {
                    lineHeight: "a4ywakfo",
                    marginTop: "g1eqewly"
                }
        },
        4345: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t;
                return (0, o.jsx)(l.default, (0, i.default)((0, i.default)({}, e), {}, {
                    separator: null !== (t = e.separator) && void 0 !== t && t,
                    xstyle: [e.xstyle, r.container],
                    blockXstyle: [e.blockXstyle, r.block]
                }))
            };
            var i = a(n(81109)),
                l = (a(n(56720)), a(n(81218))),
                o = n(85893),
                r = {
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
                    v = (0, l.default)(e, d),
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
                return (0, c.jsxs)(r.default, (0, i.default)((0, i.default)({}, v), {}, {
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
                l = a(n(6479)),
                o = a(n(56720)),
                r = a(n(4345)),
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
                    a = u.fbt._("Media, links and docs", null, {
                        hk: "3D4fAZ"
                    }),
                    i = (0, j.jsx)(b.default, {
                        color: "secondary",
                        name: "chevron-right-alt",
                        directional: !0
                    }),
                    l = (0, j.jsxs)(g.FlexRow, {
                        align: "center",
                        children: [(0, x.isMediaGalleryFixEnabled)() ? (0, j.jsx)(S, {
                            chat: t
                        }) : (0, j.jsx)(y, {
                            chat: t
                        }), (0, j.jsx)("div", {
                            children: i
                        })]
                    });
                return (0, j.jsx)(v.ChatInfoDrawerSection, {
                    a8nText: "section-media",
                    title: a,
                    titleOnClick: n,
                    subtitle: l,
                    xstyle: k.drawerSection,
                    children: (0, j.jsx)(C.default, {
                        chat: t,
                        mediaMsgs: t.getMediaMsgs(),
                        theme: "chat-info"
                    })
                })
            };
            var l = i(n(87757)),
                o = i(n(48926)),
                r = i(n(63038)),
                s = n(78577),
                u = n(48360),
                c = n(67294),
                d = i(n(56720)),
                f = i(n(45764)),
                h = n(91285),
                p = i(n(96109)),
                m = i(n(22190)),
                v = n(82506),
                g = n(27968),
                x = n(2629),
                C = i(n(99540)),
                _ = n(19499),
                b = i(n(7665)),
                j = n(85893),
                k = {
                    mediaCount: {
                        marginEnd: "bugiwsl0",
                        fontSize: "bze30y65",
                        color: "g01nkquw"
                    },
                    drawerSection: {
                        paddingBottom: "aiput80m"
                    }
                };

            function S(e) {
                var t = function(e) {
                    var t = (0, c.useState)(null),
                        n = (0, r.default)(t, 2),
                        a = n[0],
                        i = n[1],
                        l = (0, m.default)(),
                        o = (0, c.useCallback)((function() {
                            e.countAllMedia().then((function(e) {
                                l.aborted || i(e)
                            }))
                        }), [e, l]);
                    return (0, c.useEffect)(o, [o]), (0, h.useListener)(e.getMediaMsgs(), ["add", "remove"], o), (0, h.useListener)(e.getDocMsgs(), ["add", "remove"], o), (0, h.useListener)(e.getLinkMsgs(), ["add", "remove"], o), a
                }(e.chat);
                return (0, j.jsx)("div", {
                    className: (0, d.default)(k.mediaCount),
                    children: t
                })
            }

            function y(e) {
                var t = function(e) {
                    var t = e.getMediaMsgs(),
                        n = e.getDocMsgs(),
                        i = e.getLinkMsgs(),
                        r = (0, f.default)();
                    (0, h.useListener)(t, "add remove reset query_media_before", r), (0, h.useListener)(n, "add remove reset query_doc_before", r), (0, h.useListener)(i, "add remove reset query_link_before", r);
                    var u = (0, p.default)();
                    (0, c.useEffect)((function() {
                        u((0, o.default)(l.default.mark((function o() {
                            var s;
                            return l.default.wrap((function(l) {
                                for (;;) switch (l.prev = l.next) {
                                    case 0:
                                        return s = [], t.hasMediaBefore && s.push(t.queryMedia({
                                            chat: e
                                        })), n.hasDocBefore && s.push(n.queryDocs(e)), i.hasLinkBefore && s.push(i.queryLinks(e)), l.next = 6, a.all(s);
                                    case 6:
                                        r();
                                    case 7:
                                    case "end":
                                        return l.stop()
                                }
                            }), o)
                        }))))
                    }), [e, n, r, i, t, u]);
                    var d = null;
                    if (!t.hasMediaBefore && !n.hasDocBefore && !i.hasLinkBefore) {
                        var m = t.length;
                        (0, s.isMDBackend)() && (m = t.filter((function(e) {
                            return (0, _.hasThumbnail)(e.mediaData)
                        })).length), d = m + n.length + i.length
                    }
                    return d
                }(e.chat);
                return (0, j.jsx)("div", {
                    className: (0, d.default)(k.mediaCount),
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
                    n = (0, d.jsx)(l.default, {
                        multiline: !0,
                        children: (0, d.jsx)(c.TextSpan, {
                            theme: "title",
                            children: (0, d.jsx)(u.default, {
                                id: t.id
                            })
                        })
                    }),
                    a = (0, d.jsx)(l.default, {
                        separator: !0,
                        children: (0, d.jsx)(s.SelectableSpan, {
                            dir: "auto",
                            selectable: !0,
                            children: (0, d.jsx)(c.TextSpan, {
                                theme: "title",
                                children: (0, i.default)(t.id)
                            })
                        })
                    });
                return (0, d.jsxs)(o.ChatInfoDrawerSection, {
                    xstyle: f.container,
                    a8nText: "section-about-and-phone-number",
                    title: r.default.t(362),
                    children: [n, a]
                })
            };
            var i = a(n(3136)),
                l = (a(n(56720)), a(n(4345))),
                o = n(82506),
                r = a(n(9844)),
                s = n(96197),
                u = a(n(61359)),
                c = n(22552),
                d = n(85893),
                f = {
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
                var t, n = e.contact;
                t = (0, f.canSeeSMBUpsell)() ? (0, p.jsx)(g, {
                    onClick: function() {
                        s.Cmd.openModal((0, p.jsx)(r.default, {
                            contact: n
                        }))
                    }
                }) : (0, p.jsx)(v, {
                    onClick: function() {
                        s.Cmd.openModal((0, p.jsx)(o.default, {
                            contact: n
                        }))
                    }
                });
                return (0, p.jsx)(d.default, {
                    className: l.default.businessAccount,
                    children: t
                })
            };
            var i = n(48360),
                l = a(n(40526)),
                o = a(n(22110)),
                r = a(n(25317)),
                s = n(65901),
                u = a(n(81218)),
                c = a(n(61876)),
                d = a(n(46821)),
                f = n(2629),
                h = a(n(7665)),
                p = n(85893),
                m = i.fbt._("This is a business account.", null, {
                    hk: "2x8QUJ"
                });

            function v(e) {
                var t = e.onClick;
                return (0, p.jsx)(c.default, {
                    a8nText: "business-title",
                    className: l.default.businessTitleText,
                    onClick: t,
                    children: m
                })
            }

            function g(e) {
                var t = e.onClick;
                return (0, p.jsx)(u.default, {
                    a8nText: "business-title",
                    className: l.default.businessTitleWithSMBUpsell,
                    onClick: t,
                    side: (0, p.jsx)(h.default, {
                        display: "inline",
                        name: "info"
                    }),
                    children: m
                })
            }
        },
        86989: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a, M = e.contact,
                    T = e.onProductCatalog,
                    E = (0, u.useContext)(v.DrawerContext),
                    P = (0, _.getProductCatalogSessionId)(E),
                    w = (0, k.default)((0, j.unproxy)(e.contact));

                function I() {
                    return (I = (0, l.default)(i.default.mark((function e() {
                        var t;
                        return i.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, g.findChat)(M.id);
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
                                            (0, r.handleActivitiesForChatThreadLogging)([{
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
                var A, N, D, O = p.ChatCollection.getActive();
                if (!(null == O ? void 0 : O.id.equals(M.id))) {
                    var R;
                    (0, d.logMessageClick)(P, null === (R = M.businessProfile) || void 0 === R ? void 0 : R.isProfileLinked), a = (0, S.jsx)(c.default, {
                        icon: "chat-msg",
                        label: s.fbt._("Message", null, {
                            hk: "mZ5DE"
                        }),
                        onClick: function() {
                            ! function() {
                                I.apply(this, arguments)
                            }()
                        },
                        a8nText: "business-action chat"
                    })
                }
                w.isVoiceCallEnabled && (A = (0, S.jsx)(c.default, {
                    icon: "voice-call-filled",
                    label: s.fbt._("Voice call", null, {
                        hk: "393mz4"
                    }),
                    disabled: !w.canStartVoiceCall,
                    onClick: function() {
                        var e;
                        (0, d.logVoiceCallClick)(P, null === (e = M.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked), w.startVoiceCall()
                    },
                    a8nText: "business-action voice-call"
                }));
                (null === (t = M.businessProfile) || void 0 === t || null === (n = t.profileOptions) || void 0 === n ? void 0 : n.commerceExperience) === f.COMMERCE_EXPERIENCE_TYPES.CATALOG && (N = (0, S.jsx)(c.default, {
                    icon: "catalog-filled",
                    label: s.fbt._("Catalog", null, {
                        hk: "3QDkTE"
                    }),
                    onClick: function() {
                        var e;
                        (0, d.logCatalogClick)(P, null === (e = M.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked), T((0, _.getProductCatalogContext)(E), "ContactInfo")
                    },
                    a8nText: "business-action catalog"
                }));
                if ((0, h.hasShop)(M.businessProfile)) {
                    (0, C.bannedShopsEnabled)() && (0, h.isShopBanned)(M.businessProfile) || (D = (0, S.jsx)(c.default, {
                        icon: "shop-filled",
                        label: s.fbt._("Shop", null, {
                            hk: "3KsdlE"
                        }),
                        onClick: function() {
                            var e;
                            (0, d.logShopsClick)(P, null === (e = M.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked), (0, h.goToShop)(M.businessProfile)
                        },
                        a8nText: "business-action shop"
                    }))
                }
                var L = (0, S.jsx)(c.default, {
                    icon: "forward-filled",
                    label: s.fbt._("Share", null, {
                        hk: "4F3c6E"
                    }).toString(),
                    onClick: function() {
                        var e;
                        (0, d.logForwardClick)(P, null === (e = M.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked), m.Cmd.openModal((0, S.jsx)(b.SendContactFlowLoadable, {
                            contacts: [(0, j.unproxy)(M)],
                            onContactsSent: function(e) {
                                m.Cmd.openChatFromUnread(e).then((function() {}))
                            }
                        }))
                    },
                    a8nText: "business-action forward"
                });
                return (0, S.jsxs)(x.FlexRow, {
                    xstyle: y.actionsRow,
                    justify: "evenly",
                    children: [a, A, N, D, L]
                })
            };
            var i = a(n(87757)),
                l = a(n(48926)),
                o = n(79746),
                r = n(43828),
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
                _ = n(52867),
                b = n(46324),
                j = n(68220),
                k = a(n(53906)),
                S = n(85893),
                y = {
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
                    u = (0, l.default)(o, 2),
                    h = u[0],
                    v = u[1];
                if (null == t) return null;
                var b = (0, m.getBusinessHours)(t).map((function(e) {
                    var t = e.day,
                        n = e.hours,
                        a = e.first,
                        l = t,
                        o = n,
                        s = !1;
                    if (a) switch (i.status) {
                        case d.BUSINESS_OPEN_STATUS.OPEN_24H:
                            l = r.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), o = r.fbt._("Open 24 hours", null, {
                                hk: "1AlfF5"
                            }), s = !0;
                            break;
                        case d.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                            l = r.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), o = r.fbt._("Open by appointment only", null, {
                                hk: "1nxH9v"
                            }), s = !0;
                            break;
                        case d.BUSINESS_OPEN_STATUS.OPEN:
                            l = r.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), s = !0;
                            break;
                        case d.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                            o = r.fbt._("Closed", null, {
                                hk: "3IRgct"
                            })
                    }
                    return !a && h ? null : (0, x.jsx)(_, {
                        day: l,
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
                    children: b
                })
            };
            var i = a(n(59713)),
                l = a(n(63038)),
                o = a(n(94184)),
                r = n(48360),
                s = n(67294),
                u = (a(n(56720)), a(n(85522))),
                c = n(42661),
                d = n(79614),
                f = n(96706),
                h = n(73008),
                p = n(52867),
                m = n(26180),
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
                var t, n, a, b, j, k, S = e.businessProfile,
                    y = (0, s.useModelValues)(S, ["description", "address", "latitude", "longitude", "website", "email", "businessHours", "isProfileLinked"]),
                    M = y.description,
                    T = y.address,
                    E = y.latitude,
                    P = y.longitude,
                    w = y.website,
                    I = y.email,
                    A = y.businessHours,
                    N = y.isProfileLinked,
                    D = (0, r.useContext)(h.DrawerContext),
                    O = (0, x.getProductCatalogSessionId)(D);
                null != M && (t = (0, C.jsx)("div", {
                    className: c.default.section,
                    children: (0, C.jsx)(m.default, {
                        text: M,
                        textLimit: i.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                        children: function(e) {
                            var t = e.textLimit;
                            return (0, C.jsx)(p.EmojiText, {
                                className: c.default.description,
                                selectable: !0,
                                direction: "auto",
                                text: M,
                                textLimit: t
                            })
                        }
                    })
                }));
                null != A && (n = (0, C.jsx)("div", {
                    className: c.default.section,
                    children: (0, C.jsx)(u.default, {
                        businessHours: A,
                        isProfileLinked: N
                    })
                }));
                null != T && (a = (0, C.jsx)("div", {
                    className: c.default.section,
                    children: (0, C.jsx)(p.EmojiText, {
                        selectable: !0,
                        direction: "auto",
                        text: T
                    })
                }));
                null != E && null != P && (b = (0, C.jsx)("div", {
                    style: {
                        height: 132
                    },
                    className: (0, o.default)(c.default.section, c.default.map),
                    children: (0, C.jsx)(g.default, {
                        lat: E,
                        lng: P,
                        name: T || "",
                        width: 590,
                        height: 132,
                        onClick: function() {
                            return (0, d.logLocationClick)(O, N)
                        },
                        a8nText: "business-info-map"
                    })
                }));
                null != I && (j = (0, C.jsx)("div", {
                    className: c.default.section,
                    children: (0, C.jsx)(v.ExternalLink, {
                        href: `mailto:${I}`,
                        onClick: function() {
                            return (0, d.logEmailClick)(O)
                        },
                        a8nText: "business-info-email",
                        children: I
                    })
                }));
                null != w && w.length > 0 && (k = (0, C.jsx)("div", {
                    className: c.default.section,
                    children: w.map((function(e) {
                        return (0, C.jsx)("div", {
                            children: (0, C.jsx)(v.ExternalLink, {
                                href: l.default.toMaliciousSiteRedirect(e),
                                onClick: function() {
                                    return (0, d.logWebsiteClick)(O)
                                },
                                a8nText: "business-info-website",
                                children: e
                            })
                        }, e)
                    }))
                }));
                return null == t && null == n && null == a && null == b && null == j && null == k ? null : (0, C.jsxs)(f.ChatInfoDrawerSection, {
                    xstyle: _.container,
                    children: [t, n, a, b, j, k]
                })
            };
            var i = a(n(3208)),
                l = a(n(10646)),
                o = a(n(94184)),
                r = n(67294),
                s = (a(n(56720)), n(50857)),
                u = a(n(87338)),
                c = a(n(44899)),
                d = n(42661),
                f = n(82506),
                h = n(96706),
                p = n(73008),
                m = a(n(86889)),
                v = n(49012),
                g = a(n(83719)),
                x = n(52867),
                C = n(85893),
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
                            children: (0, s.jsx)(r.default, {
                                name: "psa-verified"
                            })
                        })), t = (0, s.jsx)(o.Name, {
                            contact: a,
                            breakWord: !0
                        }), n = (0, s.jsxs)("div", {
                            className: i.default.wrapper,
                            children: [(0, s.jsx)(l.EmojiText, {
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
                else t = (0, s.jsx)(l.EmojiText, {
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
                l = n(73008),
                o = n(1191),
                r = a(n(7665)),
                s = n(85893)
        },
        88621: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BusinessOpenHours = function(e) {
                var t = e.hours,
                    n = d((0, r.getBusinessOpenState)(t));
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
                l = n(48360),
                o = a(n(45625)),
                r = n(79614),
                s = a(n(9844)),
                u = n(85893);

            function c(e) {
                return null == e ? "" : e.toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit"
                })
            }

            function d(e) {
                switch (e.status) {
                    case r.BUSINESS_OPEN_STATUS.OPEN_24H:
                        return s.default.t(239, {
                            open: `<span class="${o.default.open}">${l.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`
                        });
                    case r.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                        return s.default.t(241, {
                            open: `<span class="${o.default.open}">${l.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`
                        });
                    case r.BUSINESS_OPEN_STATUS.OPEN:
                        if (e.openUntil && e.additionalOpen && e.additionalClose) return s.default.t(243, {
                            open: `<span class="${o.default.open}">${l.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`,
                            time: c(e.openUntil),
                            additionalOpenTime: c(e.additionalOpen),
                            additionalCloseTime: c(e.additionalClose)
                        });
                        if (e.openUntil) return s.default.t(242, {
                            open: `<span class="${o.default.open}">${l.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`,
                            time: c(e.openUntil)
                        });
                        break;
                    case r.BUSINESS_OPEN_STATUS.CLOSED:
                        return e.opensAt ? s.default.t(236, {
                            closed: `<span class="${o.default.closed}">${l.fbt._("Closed now",null,{hk:"2oDK4r"}).toString()}</span>`,
                            time: c(e.opensAt)
                        }) : `<span class="${o.default.closed}">${l.fbt._("Closed now",null,{hk:"2oDK4r"}).toString()}</span>`;
                    case r.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                        return `<span class="${o.default.closed}">${l.fbt._("Closed today",null,{hk:"3uCCvH"}).toString()}</span>`
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
                var t, n = (0, u.useModelValues)(e.contact, ["id", "verifiedLevel", "name", "verifiedName"]),
                    a = (0, u.useModelValues)(e.businessProfile, ["description", "categories", "website", "email", "stale", "latitude", "longitude", "businessHours", "structuredAddress"]);
                (0, s.useEffect)((function() {
                    new y.default.ViewBusinessProfile({
                        viewBusinessProfileAction: y.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION
                    }).commit()
                }), []);
                var i, o, r, c, d, h, p;
                t = (0, b.canSeeSMBUpsell)() ? (0, P.jsx)(w, {
                    contact: n
                }) : (0, P.jsx)(A, {
                    contact: n
                });
                var m, v = a;
                if (v.stale) i = (0, P.jsx)("div", {
                    className: f.default.contactBusinessInfoSpinner,
                    children: (0, P.jsx)(T.Spinner, {
                        size: 20,
                        stroke: 5
                    })
                });
                else {
                    var E;
                    if (o = (null === (E = v.categories) || void 0 === E ? void 0 : E.length) ? (0, P.jsx)(D, {
                            icon: "business-category",
                            children: (0, P.jsx)(x.EmojiText, {
                                selectable: !0,
                                direction: "auto",
                                text: v.categories.map((function(e) {
                                    return e.localized_display_name
                                })).join(j.default.t(407))
                            })
                        }) : null, r = v.description ? (0, P.jsx)(D, {
                            icon: "business-description",
                            children: (0, P.jsx)(C.default, {
                                text: v.description,
                                textLimit: l.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                                children: function(e) {
                                    var t = e.textLimit;
                                    return (0, P.jsx)(x.EmojiText, {
                                        selectable: !0,
                                        direction: "auto",
                                        breakWord: !0,
                                        text: v.description,
                                        textLimit: t
                                    })
                                }
                            })
                        }) : null, R = n.name, L = v.latitude, B = v.longitude, G = v.structuredAddress, H = G ? function(e) {
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
                        }(G) : null, null != L && null != B && (F = (0, P.jsx)("div", {
                            style: {
                                height: 150
                            },
                            className: f.default.businessMap,
                            children: (0, P.jsx)(k.default, {
                                lat: L,
                                lng: B,
                                name: H || R,
                                width: 565,
                                height: 150
                            })
                        })), H && (U = null != L && null != B ? (0, S.getMapUrl)(L, B, H) : (0, S.getSearchUrl)(H), V = (0, P.jsx)("div", {
                            className: f.default.address,
                            children: (0, P.jsx)(_.ExternalLink, {
                                href: U,
                                children: (0, P.jsx)(x.EmojiText, {
                                    selectable: !0,
                                    direction: "auto",
                                    text: H
                                })
                            })
                        })), c = V || F ? (0, P.jsxs)(D, {
                            icon: "business-address",
                            children: [V, F]
                        }) : null, v.website && Array.isArray(v.website) && v.website.length && (d = v.website.map((function(e, t) {
                            var n = (0, M.getWebsiteLink)(e),
                                a = (0, P.jsx)(x.EmojiText, {
                                    selectable: !0,
                                    direction: "auto",
                                    text: e
                                }),
                                i = (0, P.jsx)(_.ExternalLink, {
                                    className: f.default.link,
                                    href: n,
                                    children: a
                                });
                            return (0, P.jsx)(D, {
                                icon: "business-website",
                                children: i
                            }, t)
                        }))), v.businessHours && (h = (0, P.jsx)(I, {
                            businessHours: v.businessHours
                        })), v.email) {
                        var N = (0, P.jsx)(x.EmojiText, {
                                selectable: !0,
                                direction: "auto",
                                text: v.email
                            }),
                            O = (0, P.jsx)(_.ExternalLink, {
                                className: f.default.link,
                                href: `mailto:${v.email}`,
                                children: N
                            });
                        p = (0, P.jsx)(D, {
                            icon: "business-email",
                            dir: "auto",
                            children: O
                        })
                    }
                }
                var R, L, B, G, F, V, U, H;
                (i || null != c || o || r || null != h || p || d) && (m = (0, P.jsx)(g.default, {
                    theme: "padding",
                    children: (0, P.jsxs)("div", {
                        className: f.default.contactBusinessInfo,
                        children: [i, c, o, r, h, p, d]
                    })
                }));
                return (0, P.jsxs)(P.Fragment, {
                    children: [(0, P.jsx)(g.default, {
                        children: t
                    }), m]
                })
            };
            var i = a(n(63038)),
                l = a(n(3208)),
                o = a(n(94184)),
                r = n(48360),
                s = n(67294),
                u = n(50857),
                c = a(n(22110)),
                d = a(n(25317)),
                f = a(n(49500)),
                h = n(96127),
                p = n(65901),
                m = a(n(81218)),
                v = a(n(61876)),
                g = a(n(46821)),
                x = n(73008),
                C = a(n(86889)),
                _ = n(49012),
                b = n(2629),
                j = a(n(9844)),
                k = a(n(83719)),
                S = n(42876),
                y = a(n(50507)),
                M = n(26180),
                T = n(85651),
                E = a(n(7665)),
                P = n(85893);

            function w(e) {
                var t = e.contact,
                    n = t.verifiedLevel === h.VERIFIED_LEVEL.HIGH ? r.fbt._("Official business account", null, {
                        hk: "1KruJ"
                    }) : r.fbt._("Business account", null, {
                        hk: "2lzdAg"
                    });
                return (0, P.jsx)(m.default, {
                    a8nText: "business-title",
                    onClick: p.Cmd.openModal((0, P.jsx)(d.default, {
                        contact: t
                    })),
                    side: (0, P.jsx)(E.default, {
                        className: f.default.infoIcon,
                        display: "inline",
                        name: "info"
                    }),
                    children: n
                })
            }

            function I(e) {
                var t = e.businessHours,
                    n = (0, s.useState)(!0),
                    a = (0, i.default)(n, 2),
                    l = a[0],
                    o = a[1],
                    r = (0, M.getBusinessHours)(t).map((function(e) {
                        var t = e.day,
                            n = e.hours,
                            a = e.first;
                        return !a && l ? null : (0, P.jsx)(N, {
                            day: t,
                            hours: n,
                            first: a,
                            collapsed: l
                        }, t)
                    }));
                return (0, P.jsx)(D, {
                    icon: "business-hours",
                    onClick: function() {
                        return o(!l)
                    },
                    children: r
                })
            }

            function A(e) {
                var t, n = e.contact;
                switch (n.verifiedLevel) {
                    case h.VERIFIED_LEVEL.HIGH:
                        t = r.fbt._("Official business account", null, {
                            hk: "1KruJ"
                        });
                        break;
                    case h.VERIFIED_LEVEL.LOW:
                    case h.VERIFIED_LEVEL.UNKNOWN:
                        t = r.fbt._("Business account", null, {
                            hk: "2lzdAg"
                        })
                }
                return (0, P.jsx)(v.default, {
                    a8nText: "business-title",
                    className: f.default.businessTitleText,
                    onClick: function() {
                        p.Cmd.openModal((0, P.jsx)(c.default, {
                            contact: n
                        }))
                    },
                    children: t
                })
            }
            var N = function(e) {
                    var t = e.first ? (0, P.jsx)("div", {
                        className: f.default.businessHoursChevron,
                        role: "button",
                        children: (0, P.jsx)(E.default, {
                            className: e.collapsed ? "" : f.default.flipSvg,
                            display: "inline",
                            name: "chevron-down-alt"
                        })
                    }) : null;
                    return (0, P.jsxs)("div", {
                        className: f.default.businessHoursRow,
                        children: [(0, P.jsx)("div", {
                            className: f.default.businessHoursDay,
                            children: (0, P.jsx)(x.EmojiText, {
                                direction: "auto",
                                text: e.day
                            })
                        }), (0, P.jsx)("div", {
                            className: f.default.businessHoursHours,
                            children: (0, P.jsx)(x.EmojiText, {
                                direction: "auto",
                                text: e.hours
                            })
                        }), t]
                    })
                },
                D = function(e) {
                    return (0, P.jsxs)("div", {
                        className: (0, o.default)(f.default.dataRow, e.className),
                        onClick: e.onClick,
                        children: [(0, P.jsx)("div", {
                            className: f.default.dataRowIcon,
                            children: (0, P.jsx)(E.default, {
                                name: e.icon
                            })
                        }), (0, P.jsx)("div", {
                            className: f.default.dataRowText,
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
                    g = (0, i.useModelValues)(a, ["businessHours", "categories"]),
                    x = g.businessHours,
                    C = g.categories,
                    _ = (0, f.jsx)(o.default, {
                        contact: n
                    });
                null != C && C.length > 0 && (t = (0, f.jsx)("div", {
                    className: s.default.categories,
                    children: C.map((function(e) {
                        return e.localized_display_name
                    })).join(d.default.t(406))
                }));
                var b = x ? (0, f.jsx)(r.BusinessOpenHours, {
                    hours: x
                }) : null;
                return (0, f.jsxs)(c.default, {
                    className: s.default.noPaddingBottom,
                    theme: "padding",
                    children: [(0, f.jsx)(u.default, {
                        contact: n,
                        onClick: v,
                        onOpenStatus: h,
                        onLoad: m
                    }), (0, f.jsxs)("div", {
                        className: s.default.info,
                        children: [_, t, b, (0, f.jsx)(l.default, {
                            contact: n,
                            onProductCatalog: p
                        })]
                    })]
                })
            };
            var i = n(50857),
                l = a(n(86989)),
                o = a(n(10403)),
                r = n(88621),
                s = a(n(19518)),
                u = a(n(42973)),
                c = a(n(46821)),
                d = a(n(9844)),
                f = n(85893)
        },
        68029: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact;
                return (0, s.jsx)(l.ChatInfoDrawerSection, {
                    a8nText: "section-about",
                    title: i.fbt._("About", null, {
                        hk: "4qoAfH"
                    }),
                    children: (0, s.jsx)(r.TextSpan, {
                        theme: "title",
                        size: "16",
                        children: (0, s.jsx)(o.default, {
                            id: t.id
                        })
                    })
                })
            };
            var i = n(48360),
                l = n(82506),
                o = a(n(61359)),
                r = n(22552),
                s = n(85893)
        },
        47549: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(34575)),
                l = a(n(93913)),
                o = a(n(2205)),
                r = a(n(99842)),
                s = n(67294),
                u = n(97397),
                c = n(82506),
                d = n(65901),
                f = a(n(98303)),
                h = n(84495),
                p = n(73568),
                m = a(n(9844)),
                v = n(63641),
                g = a(n(61897)),
                x = n(85893),
                C = function(e) {
                    (0, o.default)(n, e);
                    var t = (0, r.default)(n);

                    function n() {
                        var e;
                        (0, i.default)(this, n);
                        for (var a = arguments.length, l = new Array(a), o = 0; o < a; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l)))._commonGroupInitialized = !1, e.state = {
                            collapsed: !1,
                            numGroups: 0
                        }, e.rerender = function() {
                            e.forceUpdate()
                        }, e._handleClick = function(t, n) {
                            d.Cmd.openChatFromUnread(n).then((function(e) {
                                e && d.Cmd.focusChatTextInput(n)
                            })), e.props.onClose()
                        }, e._handleShowMore = function() {
                            e.setState({
                                collapsed: !1
                            })
                        }, e.renderItem = function(t) {
                            var n = t.chat;
                            return (0, x.jsx)(u.Chat, {
                                chat: n,
                                theme: "chat-info",
                                contact: n.contact,
                                mode: u.Mode.INFO,
                                onClick: e._handleClick
                            }, n.id.toString())
                        }, e
                    }
                    return (0, l.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.contact.commonGroups;
                            e && (this.props.listeners.add(e, "add remove", this.rerender), this._commonGroupInitialized = !0), (0, h.findCommonGroups)(this.props.contact).catch((function(e) {
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
                            var e = this.props.contact.commonGroups;
                            return e.length > c.INFO_DRAWER_MAX_ROWS && this.state.collapsed && (e = e.slice(0, c.INFO_DRAWER_MAX_ROWS)), e.map((function(e) {
                                return {
                                    itemKey: e.id.toString(),
                                    chat: e,
                                    height: 68
                                }
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props.contact.commonGroups;
                            if (!(null == t ? void 0 : t.length)) return null;
                            if (t.length > c.INFO_DRAWER_MAX_ROWS && this.state.collapsed) {
                                var n = t.length - c.INFO_DRAWER_MAX_ROWS;
                                e = (0, x.jsx)(f.default, {
                                    numMore: n,
                                    onClick: this._handleShowMore
                                })
                            }
                            var a = m.default.t(361, {
                                number: m.default.n(t.length),
                                _plural: t.length
                            });
                            return (0, x.jsxs)(c.ChatInfoDrawerListSection, {
                                a8nText: "section-common-groups",
                                title: a,
                                children: [(0, x.jsx)(p.FlatList, {
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
                            return t.numGroups <= c.INFO_DRAWER_MAX_ROWS && a > c.INFO_DRAWER_MAX_ROWS ? {
                                numGroups: a,
                                collapsed: !0
                            } : {
                                numGroups: a
                            }
                        }
                    }]), n
                }(s.Component);
            C.CONCERNS = {
                contact: ["commonGroups", "isBusiness"]
            }, C.displayName = "ContactInfoCommonGroupsBase";
            var _ = (0, v.ListenerHOC)((0, g.default)(C, C.CONCERNS));
            t.default = _
        },
        28201: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(81109)),
                l = a(n(63038)),
                o = n(15586),
                r = n(79746),
                s = n(73435),
                u = n(78577),
                c = n(43828),
                d = n(48360),
                f = n(67294),
                h = a(n(56720)),
                p = a(n(62905)),
                m = n(50857),
                v = a(n(9378)),
                g = a(n(81522)),
                x = a(n(11218)),
                C = a(n(95563)),
                _ = n(42661),
                b = n(98481),
                j = n(79614),
                k = a(n(34736)),
                S = n(72743),
                y = a(n(69286)),
                M = n(4481),
                T = n(82506),
                E = a(n(83399)),
                P = n(65901),
                w = a(n(68029)),
                I = a(n(47549)),
                A = a(n(9969)),
                N = a(n(95582)),
                D = a(n(16016)),
                O = a(n(5702)),
                R = n(73092),
                L = n(75544),
                B = a(n(53187)),
                G = a(n(18345)),
                F = a(n(61876)),
                V = n(96706),
                U = n(19288),
                H = a(n(46821)),
                q = n(90675),
                W = a(n(92546)),
                Y = n(1577),
                z = n(2629),
                K = a(n(16516)),
                X = a(n(9844)),
                Z = a(n(73728)),
                $ = a(n(592)),
                Q = n(96497),
                J = n(56003),
                ee = n(21283),
                te = a(n(50507)),
                ne = a(n(59603)),
                ae = a(n(40071)),
                ie = n(52867),
                le = n(9835),
                oe = n(3298),
                re = a(n(43463)),
                se = a(n(60401)),
                ue = n(68220),
                ce = a(n(7665)),
                de = n(92428),
                fe = a(n(93958)),
                he = n(85893),
                pe = {
                    flexGrow: "tvf2evcx",
                    flexShrink: "oq44ahr5",
                    flexBasis: "lb5m6g5c",
                    paddingBottom: "s9fl9ege"
                };

            function me(e) {
                var t = e.contact,
                    n = e.catalogContext,
                    a = e.onProductDetail,
                    i = e.onProductCatalog,
                    l = S.CatalogCollection.get(t.id);
                if (!l) return null;
                var o = "",
                    r = !1;
                return (0, z.canSeeBizProfileV3)() && (o = d.fbt._("See all", null, {
                    hk: "3dTwyT"
                }), r = !0), n.session.isAccidental() ? null : (0, j.hasShop)(t.businessProfile) ? (0, z.bannedShopsEnabled)() && (0, j.isShopBanned)(t.businessProfile) ? null : (0, he.jsx)(se.default, {
                    businessProfile: t.businessProfile,
                    catalog: l,
                    subtitle: o,
                    hideIncompleteRows: r
                }) : (0, he.jsx)(y.default, {
                    onProductDetail: a,
                    onProductCatalog: i,
                    catalog: l,
                    subtitle: o,
                    hideIncompleteRows: r,
                    shouldLog: !0
                })
            }

            function ve(e, t) {
                var n = e.onVerification,
                    a = e.onClose,
                    j = e.onProductDetail,
                    y = e.onProductCatalog,
                    se = e.canLogQpl,
                    ve = void 0 === se || se,
                    ge = (0, fe.default)(),
                    xe = (0, f.useContext)(V.DrawerContext),
                    Ce = (0, m.useModelValues)(e.contact, ["id", "formattedName", "formattedUser", "formattedShortName", "isBusiness", "isEnterprise", "isMyContact", "commonGroups", "businessProfile", "showBusinessCheckmarkAsPrimary", "showBusinessCheckmarkAsSecondary", "verifiedName", "verifiedLevel", "name", "notifyName", "labels", "businessCatalog", "isMe", "statusMute", "displayName"]),
                    _e = (0, p.default)((function() {
                        return new W.default
                    })),
                    be = (0, f.useRef)(!1),
                    je = (0, f.useState)(100),
                    ke = (0, l.default)(je, 2),
                    Se = ke[0],
                    ye = ke[1],
                    Me = (0, f.useMemo)((function() {
                        return M.ChatCollection.get(Ce.id)
                    }), [Ce.id]);
                (0, f.useEffect)((function() {
                    var t;
                    (Ce.businessProfile && !Ce.businessProfile.stale && Ce.businessCatalog && S.CatalogCollection.findCarouselCatalog(Ce.id).catch((0, o.filteredCatch)(s.ServerStatusCodeError, (function() {
                        __LOG__(3)`Failed to fetch product catalog in contact drawer from server`
                    }))), (0, u.isMDBackend)() && (0, L.getFanOutListJob)([Ce.id, (0, Y.assertGetMe)()]).then((function(e) {
                        (0, ee.ensureE2ESessions)(e)
                    })), (0, ie.getProductCatalogContext)(xe).session.isAccidental()) ? P.Cmd.setDrawerContext("right", (0, ie.buildProductCatalogContext)(new le.ProductCatalogSession, (0, R.getMaybeBizPlatformForLogging)(Ce.id.toString()), te.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE)): Ce.isBusiness && (0, z.canSeeBizProfileV3)() && (Ce.id === (0, Y.getMaybeMeUser)() || (0, _.logProfileImpression)((0, ie.getProductCatalogSessionId)(xe), e.profileEntryPoint, null === (t = Ce.businessProfile) || void 0 === t ? void 0 : t.isProfileLinked));
                    ve && Ce.businessProfile && (0, Q.qplEndProfileView)(oe.QuickLogActionType.SUCCESS)
                }), []), (0, f.useEffect)((function() {
                    if ((0, z.btmThreadsLoggingEnabled)()) {
                        var e, t = null === (e = (0, Y.getMaybeMeUser)()) || void 0 === e ? void 0 : e.equals(Ce.id);
                        (0, ie.getProductCatalogContext)(xe).session.isAccidental() || t || !(null == Me ? void 0 : Me.id) || (0, c.handleActivitiesForChatThreadLogging)([{
                            activityType: "profileViews",
                            ts: (0, r.unixTime)(),
                            chatId: Me.id
                        }])
                    }
                }), []), (0, v.default)((function() {
                    var e;
                    (0, ie.getProductCatalogContext)(xe).session.isAccidental() || Ce.isBusiness && (0, z.canSeeBizProfileV3)() && (0, _.logProfileExit)((0, ie.getProductCatalogSessionId)(xe), Se, null === (e = Ce.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked)
                }));
                var Te = function() {
                        a ? a() : null == ge || ge.uie.requestDismiss()
                    },
                    Ee = function(e) {
                        if (be.current) {
                            var t = e.target;
                            P.Cmd.openModalMedia((0, he.jsx)(ae.default, {
                                contact: Ce,
                                profilePicThumb: Ce.getProfilePicThumb(),
                                animateBorderRadius: !0,
                                getZoomNode: function(e) {
                                    e(t)
                                }
                            }), {
                                transition: "profile-viewer",
                                uim: ge
                            })
                        } else P.Cmd.openToast((0, he.jsx)(de.Toast, {
                            id: (0, de.genId)(),
                            msg: d.fbt._("No profile photo", null, {
                                hk: "2bdeTO"
                            })
                        }))
                    },
                    Pe = function() {
                        be.current = !0
                    },
                    we = (0, he.jsx)(I.default, {
                        contact: Ce,
                        onClose: Te,
                        flatListController: _e.current
                    }),
                    Ie = null;
                e.onMediaGallery && Me && (Ie = (0, he.jsx)(E.default, {
                    chat: Me,
                    onMediaGallery: e.onMediaGallery
                }));
                var Ae = null;
                Me && (Ae = (0, he.jsx)($.default, {
                    chat: Me,
                    onClick: e.onLiveLocation
                }));
                var Ne = null,
                    De = null;
                if (Ce && Ce.isBusiness && Ce.businessProfile && Ce.businessCatalog) {
                    var Oe = (0, he.jsx)(me, {
                        contact: Ce,
                        catalogContext: (0, ie.getProductCatalogContext)(xe),
                        onProductDetail: function(e) {
                            (0, J.qplStartProductView)("ContactInfo"), j(e)
                        },
                        onProductCatalog: y
                    });
                    (0, z.canSeeBizProfileV3)() ? De = Oe: Ne = Oe
                }
                var Re, Le = Me && Me.mute.canMute() ? (0, he.jsx)(ne.default, {
                    chat: Me,
                    mute: Me.mute,
                    settings: re.default
                }) : null;
                e.onStarred && (Re = (0, he.jsx)(D.default, {
                    chat: Me,
                    onStarred: e.onStarred,
                    onContactCard: e.onContactCard
                }));
                var Be = Me && Me.shouldShowEphemeralSetting() ? (0, he.jsx)(q.EphemeralSettingRow, {
                        onClick: e.onEphemeral,
                        chat: Me,
                        testid: "contact-info-dm-setting-row"
                    }) : null,
                    Ge = (0, u.isMDBackend)() ? (0, he.jsx)(A.default, {
                        contact: (0, ue.unproxy)(Ce),
                        onVerificationClick: function() {
                            n()
                        }
                    }) : null,
                    Fe = null;
                (Le || Be || Ge) && (Fe = (0, he.jsxs)(T.ChatInfoDrawerSection, {
                    children: [Le, Be, Ge]
                }));
                var Ve, Ue, He, qe, We = !Ce.isBusiness,
                    Ye = We ? null : (0, he.jsx)(g.default, {
                        contact: (0, ue.unproxy)(Ce)
                    }),
                    ze = We ? (0, he.jsx)(w.default, {
                        contact: (0, ue.unproxy)(Ce)
                    }) : null,
                    Ke = (0, z.canSeeBizProfileV3)() && Ce.isBusiness && Ce.businessProfile ? (0, he.jsx)(k.default, {
                        contact: Ce,
                        onProfilePicLoad: Pe,
                        onProfilePicClick: Ee,
                        onOpenStatus: function() {
                            var e;
                            (0, _.logStatusClick)((0, ie.getProductCatalogSessionId)(xe), null === (e = Ce.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked)
                        },
                        businessProfile: Ce.businessProfile,
                        onProductCatalog: y
                    }) : (0, he.jsx)(O.default, {
                        contact: Ce,
                        onDetailImageLoad: Pe,
                        onDetailImageClick: Ee
                    }),
                    Xe = null,
                    Ze = void 0;
                Ce.isBusiness && Ce.businessProfile && ((0, z.canSeeBizProfileV3)() && Ce.businessProfile ? (Xe = (0, he.jsx)(C.default, {
                    businessProfile: Ce.businessProfile
                }), Ve = (0, he.jsx)(x.default, {
                    contact: Ce
                }), (null !== (He = null === (qe = Ce.labels) || void 0 === qe ? void 0 : qe.length) && void 0 !== He ? He : 0) > 0 && (Ue = (0, he.jsx)(H.default, {
                    theme: "padding",
                    children: (0, he.jsx)(K.default, {
                        labels: Ce.labels,
                        theme: "standalone"
                    })
                })), Ze = function(e) {
                    var t = Math.floor(100 * (1 + e.currentTarget.scrollTop / e.currentTarget.offsetHeight));
                    t > Se && ye(t)
                }) : Ce.businessProfile && (Xe = (0, he.jsx)(b.BusinessProfile, {
                    contact: Ce,
                    businessProfile: Ce.businessProfile
                })));
                var $e, Qe = {
                    title: d.fbt._("Contact info", null, {
                        hk: "LUJtH"
                    }),
                    type: U.DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: !0,
                    onCancel: Te
                };
                return Ce.businessProfile && (0, z.bizLinkedAccountsEnabled)() && ($e = (0, he.jsx)(Z.default, {
                    businessProfile: Ce.businessProfile,
                    rowTheme: "linked-account-consumer"
                })), (0, he.jsxs)(B.default, {
                    ref: t,
                    theme: "striped",
                    testid: "contact-info-drawer",
                    children: [(0, he.jsx)(U.DrawerHeader, (0, i.default)({}, Qe)), (0, he.jsx)(G.default, {
                        flatListControllers: [_e.current],
                        onScroll: Ze,
                        children: (0, he.jsxs)("section", {
                            className: (0, h.default)(pe),
                            children: [Ke, Ve, Ue, De, Xe, $e, Ae, Ne, ze, Ie, Re, Fe, Ye, undefined, we, (0, he.jsx)(N.default, {
                                contact: Ce
                            }), (0, he.jsx)(T.ChatInfoDrawerButtonsSection, {
                                children: Me ? (0, he.jsx)(F.default, {
                                    a8nText: "li-delete-chat",
                                    icon: (0, he.jsx)(ce.default, {
                                        name: "delete"
                                    }),
                                    color: "danger",
                                    onClick: function() {
                                        var e = M.ChatCollection.assertGet(Ce.id);
                                        P.Cmd.deleteOrExitChat(e)
                                    },
                                    theme: "chat-info",
                                    children: X.default.t(374)
                                }) : null
                            })]
                        })
                    })]
                }, "contact-info-modal")
            }
            var ge = (0, f.forwardRef)(ve);
            t.default = ge
        },
        9969: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onVerificationClick,
                    n = (0, r.useModelValues)(e.contact, ["id", "privacyMode"]),
                    a = function(e, t) {
                        if ((0, c.default)(t.user)) return {
                            text: o.fbt._("Click to learn how messages and calls are secured.", null, {
                                hk: "1UxhjE"
                            }),
                            title: o.fbt._("Security", null, {
                                hk: "3j3j0a"
                            }),
                            onClick: function() {
                                (0, d.default)(o.fbt._("WhatsApp secures your messages and calls with this account.", null, {
                                    hk: "18Ci1q"
                                }), (0, i.getSupportChatSafetyFaqUrl)(), o.fbt._("Learn more about chats with WhatsApp Support.", null, {
                                    hk: "1an25A"
                                }))
                            }
                        };
                        switch (e) {
                            case l.ReducedPrivacyMode.E2EE:
                                return null;
                            case l.ReducedPrivacyMode.BSP:
                                return {
                                    text: o.fbt._("This business works with other companies to manage this chat. Click to learn more.", null, {
                                        hk: "VbOOZ"
                                    }), title: o.fbt._("Security", null, {
                                        hk: "3j3j0a"
                                    }), onClick: function() {
                                        (0, d.default)((0, u.formatBspModalText)(), (0, i.getE2EEnterpriseFaqUrl)())
                                    }
                                };
                            case l.ReducedPrivacyMode.FB:
                                return {
                                    text: o.fbt._("This business uses a secure service from the Facebook company to manage this chat. Click to learn more.", null, {
                                        hk: "1kUjsv"
                                    }), title: o.fbt._("Security", null, {
                                        hk: "3j3j0a"
                                    }), onClick: function() {
                                        (0, d.default)((0, u.formatFbModalText)(), (0, i.getE2EEnterpriseFaqUrl)())
                                    }
                                }
                        }
                    }((0, l.getReducedPrivacyMode)(n.privacyMode), n.id);
                if (a) return (0, h.jsx)(s.default, {
                    title: a.title,
                    text: a.text,
                    onClick: a.onClick
                });
                var p = (0, f.isVoiceCallEnabled)() || (0, f.isVideoCallEnabled)() ? o.fbt._("Messages and calls are end-to-end encrypted. Click to verify.", null, {
                    hk: "GtGQH"
                }) : o.fbt._("Messages are end-to-end encrypted. Click to verify.", null, {
                    hk: "1AqhWR"
                });
                return (0, h.jsx)(s.default, {
                    onClick: t,
                    text: p
                })
            };
            var i = n(8917),
                l = n(83853),
                o = n(48360),
                r = n(50857),
                s = a(n(96178)),
                u = n(34033),
                c = a(n(74376)),
                d = a(n(22715)),
                f = n(40232),
                h = n(85893)
        },
        95582: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, l.useModelValues)(e.contact, ["displayName", "isBusiness", "isContactBlocked"]),
                    n = null;
                if (t.isContactBlocked) {
                    var a = f.default.t(363, {
                        contact: t.displayName
                    });
                    n = (0, C.jsx)(d.default, {
                        a8nText: "li-unblock",
                        color: "success",
                        icon: (0, C.jsx)(x.default, {
                            name: "settings-blocked",
                            directional: !0
                        }),
                        onClick: function() {
                            u.Cmd.openModal((0, C.jsx)(c.default, {
                                okText: f.default.t(781),
                                onOK: function() {
                                    (0, o.unblockContact)(e.contact), u.Cmd.closeModal()
                                },
                                cancelText: i.fbt._("Cancel", null, {
                                    hk: "H0gNq"
                                }),
                                onCancel: function() {
                                    return u.Cmd.closeModal()
                                },
                                children: (0, C.jsx)(h.default, {
                                    id: 782,
                                    params: {
                                        contact: (0, C.jsx)(p.Name, {
                                            contact: e.contact
                                        })
                                    }
                                })
                            }))
                        },
                        theme: "chat-info",
                        children: a
                    })
                } else {
                    var _ = f.default.t(360, {
                        contact: t.displayName
                    });
                    n = (0, C.jsx)(d.default, {
                        a8nText: "li-block",
                        color: "danger",
                        icon: (0, C.jsx)(x.default, {
                            name: "settings-blocked",
                            directional: !0
                        }),
                        onClick: function() {
                            u.Cmd.openModal((0, C.jsx)(c.default, {
                                onOK: function() {
                                    (0, o.blockContact)(e.contact), u.Cmd.closeModal()
                                },
                                okText: f.default.t(171),
                                onCancel: function() {
                                    return u.Cmd.closeModal()
                                },
                                cancelText: i.fbt._("Cancel", null, {
                                    hk: "H0gNq"
                                }),
                                children: (0, C.jsx)(h.default, {
                                    id: 172,
                                    params: {
                                        contact: (0, C.jsx)(p.Name, {
                                            contact: e.contact
                                        })
                                    }
                                })
                            }))
                        },
                        theme: "chat-info",
                        children: _
                    })
                }
                var b = i.fbt._("Report business", null, {
                    hk: "2Tvnn8"
                });
                t.isBusiness || (b = f.default.t(715, {
                    contactInfo: t.displayName
                }));
                var j = (0, C.jsx)(d.default, {
                    a8nText: "li-report-spam",
                    color: "danger",
                    icon: (0, C.jsx)(x.default, {
                        name: "thumbs-down",
                        directional: !0
                    }),
                    onClick: function() {
                        u.Cmd.openModal((0, C.jsx)(m.default, {
                            isBusiness: e.contact.isBusiness,
                            isGroupChat: !1,
                            onReport: function() {
                                var t = r.ChatCollection.get(e.contact.id);
                                t && (0, v.sendSpamReport)(t, g.SpamFlow.Account), u.Cmd.closeModal()
                            },
                            onReportBlockClear: function() {
                                var t = r.ChatCollection.get(e.contact.id);
                                t && (0, v.sendSpamBlockClear)(t, g.SpamFlow.Block), u.Cmd.closeModal()
                            },
                            onCancel: function() {
                                return u.Cmd.closeModal()
                            }
                        }))
                    },
                    theme: "chat-info",
                    children: b
                });
                return (0, C.jsxs)(s.ChatInfoDrawerButtonsSection, {
                    children: [n, j]
                })
            };
            var i = n(48360),
                l = n(50857),
                o = n(84533),
                r = n(4481),
                s = n(82506),
                u = n(65901),
                c = a(n(86777)),
                d = a(n(61876)),
                f = a(n(9844)),
                h = a(n(62848)),
                p = n(1191),
                m = a(n(51497)),
                v = n(43329),
                g = n(24170),
                x = a(n(7665)),
                C = n(85893)
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
                        children: (0, c.jsx)(r.default, {
                            count: f.length
                        })
                    });
                    d = (0, c.jsx)(l.default, {
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
                    children: [(0, c.jsx)(l.default, {
                        a8nText: "block-starred-messages",
                        side: "chevron",
                        icon: "star",
                        onClick: n,
                        title: p
                    }), d]
                })
            };
            var i = n(48360),
                l = a(n(98350)),
                o = n(82506),
                r = a(n(24900)),
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
                var t, n = e.contact,
                    a = e.onDetailImageLoad,
                    l = e.onDetailImageClick;
                if (n.isMyContact) t = (0, i.default)(n.id);
                else {
                    var r = n.notifyName;
                    null != r && (t = `~${r}`)
                }
                return (0, g.jsxs)(u.default, {
                    theme: "padding-large",
                    children: [(0, g.jsx)("div", {
                        className: (0, o.default)(x.avatar),
                        children: (0, g.jsx)(s.DetailImage, {
                            id: n.id,
                            size: s.DetailImageSize.Large,
                            loader: !0,
                            onLoad: a,
                            onClick: l,
                            quality: s.DetailImageQuality.High
                        })
                    }), (0, g.jsxs)(c.FlexColumn, {
                        align: "center",
                        children: [(0, g.jsx)(m.TextHeader, {
                            level: "2",
                            size: "24",
                            xstyle: x.contactName,
                            children: (0, g.jsx)(f.Name, {
                                contact: n,
                                selectable: !0,
                                breakWord: !0
                            })
                        }), null != t && (0, g.jsx)("div", {
                            className: (0, o.default)(x.secondaryWrapper),
                            children: (0, g.jsx)(h.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, g.jsx)(m.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: t
                                })
                            })
                        })]
                    }), (0, g.jsx)(_, {
                        contact: n
                    }), (0, g.jsx)(d.default, {
                        labels: n.labels
                    })]
                })
            };
            var i = a(n(3136)),
                l = n(48360),
                o = a(n(56720)),
                r = a(n(98056)),
                s = n(66834),
                u = a(n(46821)),
                c = n(27968),
                d = a(n(16516)),
                f = n(1191),
                h = n(96197),
                p = n(68220),
                m = n(22552),
                v = a(n(53906)),
                g = n(85893),
                x = {
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
            var C = {
                container: {
                    marginTop: "a4rz4n5c",
                    marginBottom: "inww9tbj"
                },
                button: {
                    marginStart: "nzcjdldu",
                    marginEnd: "gqi0zhd6"
                }
            };

            function _(e) {
                var t = e.contact,
                    n = (0, v.default)((0, p.unproxy)(t));
                return n.isVideoCallEnabled || n.isVoiceCallEnabled ? (0, g.jsxs)(c.FlexRow, {
                    justify: "center",
                    xstyle: C.container,
                    children: [(0, g.jsx)(r.default, {
                        icon: "voice-call-filled",
                        iconWidth: 19,
                        label: l.fbt._("Audio", null, {
                            hk: "1b375N"
                        }),
                        a8nText: "contact-action voice-call-button",
                        xstyle: C.button,
                        disabled: !n.canStartVoiceCall,
                        onClick: n.startVoiceCall
                    }), (0, g.jsx)(r.default, {
                        icon: "chat-info-video",
                        label: l.fbt._("Video", null, {
                            hk: "3zMUsJ"
                        }),
                        a8nText: "contact-action video-call-button",
                        xstyle: C.button,
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
                    n = e.viewAll,
                    a = e.onClick,
                    f = (0, c.jsx)(l.FlexRow, {
                        align: "center",
                        justify: "center",
                        xstyle: d.iconWrapper,
                        children: n ? null : (0, c.jsx)(r.default, {
                            theme: "transparent",
                            children: (0, c.jsx)(s.default, {
                                name: "down",
                                color: "secondary"
                            })
                        })
                    }),
                    h = o.default.t(509, {
                        count: t,
                        _plural: t
                    });
                n && (h = o.default.t(508, {
                    more: h
                }));
                return (0, c.jsxs)(u.default, {
                    xstyle: d.container,
                    onClick: a,
                    children: [f, (0, c.jsx)("div", {
                        className: (0, i.default)(d.text, n && d.textAlt),
                        children: h
                    })]
                })
            };
            var i = a(n(56720)),
                l = n(27968),
                o = a(n(9844)),
                r = a(n(84287)),
                s = a(n(7665)),
                u = a(n(76080)),
                c = n(85893),
                d = {
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
        53258: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onClick,
                    n = e.parentGroupMetadata,
                    a = e.parentGroupChat,
                    m = (0, o.useModelValues)(n, ["joinedSubgroups", "unjoinedSubgroups", "id"]),
                    v = m.joinedSubgroups,
                    g = m.unjoinedSubgroups,
                    x = m.id,
                    C = (0, o.useModelValues)(a.contact, ["name"]).name;
                (0, l.useEffect)((function() {
                    (0, h.updateJoinedSubgroups)(n)
                }), [n]), (0, l.useEffect)((function() {
                    (0, c.queryAndUpdateSubgroupsMetadata)(x)
                }), [x]), g.length, v.length;
                var _ = i.fbt._("", null, {
                    hk: "4a7vBg"
                });
                return (0, p.jsx)(u.default, {
                    theme: "no-padding",
                    children: (0, p.jsx)(r.default, {
                        image: (0, p.jsx)(s.DetailImage, {
                            id: x,
                            shape: s.DetailImageShape.Squircle,
                            size: 60
                        }),
                        primary: C,
                        onClick: t,
                        theme: "community-home",
                        secondary: (0, p.jsxs)(f.TextSpan, {
                            size: "16",
                            color: "secondary",
                            children: [_, " · ", i.fbt._("", null, {
                                hk: "3OY1QN"
                            })]
                        }),
                        detail: (0, p.jsx)(d.default, {
                            color: "secondary",
                            name: "chevron-right-alt",
                            directional: !0
                        })
                    })
                })
            };
            var i = n(48360),
                l = n(67294),
                o = n(50857),
                r = a(n(88186)),
                s = n(66834),
                u = a(n(46821)),
                c = n(75266),
                d = a(n(7665)),
                f = n(22552),
                h = n(68197),
                p = n(85893)
        },
        87923: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, o.jsx)(l.default, {
                    chat: e.chat,
                    showFullDescription: e.showFullDescription,
                    editRestrictionText: i.fbt._("Only admins can edit this group's info", null, {
                        hk: "1a2ztg"
                    }),
                    a8n: "group-info-drawer-description-title-input",
                    emptyValuePlaceholder: i.fbt._("Add group description", null, {
                        hk: "BVsoQ"
                    })
                })
            };
            var i = n(48360),
                l = a(n(81360)),
                o = n(85893)
        },
        99337: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onVerification,
                    n = e.onClose,
                    a = (0, z.default)(),
                    Q = (0, u.default)(),
                    J = (0, f.useModelValues)(e.chat, ["mute", "id", "pendingAction", "liveLocation"]),
                    ee = (0, f.useModelValues)(e.groupMetadata, ["id", "cachedDeviceCount", "cachedDeviceSizeBucket", "participants", "pendingParticipants", "announce", "support", "parentGroup"]);
                (0, f.useModelValues)(e.contact, ["name", "id", "pendingAction"]);
                var te = (0, c.default)((function() {
                        return new y.default
                    })),
                    ne = (0, c.default)((function() {
                        return new y.default
                    })),
                    ae = (0, c.default)((function() {
                        return new L.default.UiAction({
                            uiActionType: L.default.UI_ACTION_TYPE.GROUP_INFO_OPEN,
                            uiActionPreloaded: !0
                        })
                    })),
                    ie = (0, r.useRef)(null);
                (0, d.useListener)(ee.participants, ["add", "remove", "reset", "sort", "change:isAdmin", "change:isSuperAdmin"], Q), (0, d.useListener)(ee.pendingParticipants, ["add", "remove", "reset"], Q);
                var le, oe = function(e) {
                        e.contact.pendingAction++, (0, B.demoteParticipants)(J, [e]).then((function() {
                            e.contact.pendingAction--
                        }))
                    },
                    re = function(e, t) {
                        e.contact.pendingAction++, (0, B.removeParticipants)(J, [e]).then((function() {
                            e.contact.pendingAction--
                        })), t && x.Cmd.closeModal()
                    },
                    se = function(e, t) {
                        e.contact.pendingAction++, (0, B.promoteParticipants)(J, [e]).then((function() {
                            e.contact.pendingAction--
                        })), t && x.Cmd.closeModal()
                    },
                    ue = function() {
                        var e = (0, M.getGroupSizeLimit)();
                        if (ee.participants.length >= e) {
                            var t = O.default.t(49, {
                                max: e
                            });
                            x.Cmd.openToast((0, X.jsx)(Y.Toast, {
                                msg: t,
                                id: $
                            }))
                        } else {
                            var n = (0, X.jsx)(h.default, {
                                chat: (0, U.unproxy)(J),
                                pushTransition: "none",
                                popTransition: "none"
                            });
                            x.Cmd.openModal(n, {
                                transition: "modal-flow"
                            })
                        }
                    };
                if ((0, r.useEffect)((function() {
                        var e = ae.current;
                        if (e) {
                            var t = ee.cachedDeviceSizeBucket;
                            null != t && (e.sizeBucket = t), Object.assign(e, (0, N.getGroupMetricsFromGroupMetadata)((0, U.unproxy)(ee))), e.markUiActionT(), e.commit(), (0, F.logUiActionShadowPrivateStatsTestEvents)(), ae.current = void 0
                        }
                        J.isSuspendedGroup() && (0, q.openSuspendedGroupModal)()
                    }), []), (0, r.useEffect)((function() {
                        ee.participants.ensureSorted(), ee.pendingParticipants.ensureSorted()
                    })), ee.participants.iAmAdmin() && !ee.support) {
                    var ce = (0, X.jsx)(W.TextSpan, {
                        theme: "title",
                        children: o.fbt._("Group settings", null, {
                            hk: "3sS0Vl"
                        })
                    });
                    le = (0, X.jsx)(m.default, {
                        side: "chevron",
                        icon: "settings",
                        onClick: e.onAdminSetting,
                        title: ce
                    })
                }
                var de = null;
                e.onMediaGallery && (de = (0, X.jsx)(g.default, {
                    onMediaGallery: e.onMediaGallery,
                    chat: (0, U.unproxy)(J)
                }));
                var fe = (0, X.jsx)(R.default, {
                        chat: J,
                        onClick: e.onLiveLocation
                    }),
                    he = J && J.shouldShowEphemeralSetting() ? (0, X.jsx)(S.EphemeralSettingRow, {
                        onClick: e.onEphemeral,
                        chat: J,
                        groupMetadata: ee,
                        testid: "contact-info-dm-setting-row"
                    }) : null,
                    pe = null;
                if ((0, M.communitiesEnabled)() && J && ee.parentGroup) {
                    var me = p.ChatCollection.get(ee.parentGroup.toString());
                    (null == me ? void 0 : me.groupMetadata) && (pe = (0, X.jsx)(T.default, {
                        onClick: function() {
                            var t;
                            null === (t = e.onCommunityClick) || void 0 === t || t.call(e)
                        },
                        parentGroupMetadata: me.groupMetadata,
                        parentGroupChat: me
                    }))
                }
                var ve = null;
                (0, l.isMDBackend)() && (ve = (0, X.jsx)(k.default, {
                    onClick: function() {
                        x.Cmd.openModal((0, X.jsx)(j.default, {
                            chatId: J.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    },
                    text: (0, K.isGroupCallEnabled)() ? o.fbt._("Messages and calls are end-to-end encrypted. Click to learn more.", null, {
                        hk: "1l9pwW"
                    }) : o.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "2MtPh9"
                    })
                }));
                J.isSupportGroup() && (ve = (0, X.jsx)(H.default, {
                    onClick: function() {
                        x.Cmd.openModal((0, X.jsx)(j.default, {
                            chat: J,
                            chatId: J.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    }
                }));
                var ge = J.mute.canMute() ? (0, X.jsx)(G.default, {
                        chat: J,
                        mute: J.mute,
                        settings: V.default
                    }) : null,
                    xe = null;
                if (e.onStarred) {
                    var Ce = (0, X.jsx)(W.TextSpan, {
                        theme: "title",
                        size: "16",
                        children: o.fbt._("Starred messages", null, {
                            hk: "4wVbNG"
                        })
                    });
                    xe = (0, X.jsx)(v.ChatInfoDrawerSection, {
                        a8nText: "section-starred-messages",
                        children: (0, X.jsx)(m.default, {
                            a8nText: "block-starred-messages",
                            side: "chevron",
                            icon: "star",
                            onClick: e.onStarred,
                            title: Ce
                        })
                    })
                }
                var _e = null;
                (ge || ve || he) && (_e = (0, X.jsxs)(v.ChatInfoDrawerSection, {
                    children: [ge, he, ve, le]
                }));
                var be = (0, l.isMDBackend)() && e.scrollToParticipantList;
                return (0, X.jsxs)(C.default, {
                    theme: "striped",
                    children: [(0, X.jsx)(b.DrawerHeader, {
                        title: o.fbt._("Group info", null, {
                            hk: "2SfTUZ"
                        }),
                        type: b.DRAWER_HEADER_TYPE.SMALL,
                        rtlFixIfOnDarwin: !0,
                        onCancel: function() {
                            n ? n() : null == a || a.uie.requestDismiss()
                        }
                    }), (0, X.jsx)(_.default, {
                        flatListControllers: [ne.current, te.current],
                        children: (0, X.jsxs)("section", {
                            className: (0, s.default)(Z),
                            "data-a8n": i.default.key("group-info-drawer-body"),
                            children: [(0, X.jsx)(A.default, {
                                chat: (0, U.unproxy)(J),
                                onAdminSetting: e.onAdminSetting,
                                onAddParticipant: ue,
                                onClickParticpantsCount: function() {
                                    var e;
                                    null === (e = ie.current) || void 0 === e || e.scrollIntoView()
                                }
                            }), pe, (0, X.jsx)(E.default, {
                                chat: (0, U.unproxy)(J),
                                showFullDescription: e.showFullGroupDescription
                            }), fe, de, xe, _e, undefined, (0, X.jsx)(w.GroupInfoParticipantsSection, {
                                ref: ie,
                                chat: (0, U.unproxy)(J),
                                scrollToParticipantList: be,
                                flatListController: te.current,
                                onAddParticipant: ue,
                                onOpenParticpantSearch: function() {
                                    x.Cmd.openModal((0, X.jsx)(D.default, {
                                        chat: (0, U.unproxy)(J),
                                        onParticipantPromote: se,
                                        onParticipantRemove: re,
                                        onDemoteAdmin: oe,
                                        onVerification: t
                                    }), {
                                        transition: "modal-flow"
                                    })
                                },
                                onGroupInviteLink: e.onGroupInviteLink,
                                onVerification: e.onVerification
                            }), (0, X.jsx)(I.default, {
                                chat: (0, U.unproxy)(J),
                                flatListController: ne.current
                            }), (0, X.jsx)(P.default, {
                                chat: (0, U.unproxy)(J)
                            })]
                        })
                    })]
                }, "contact-info-modal")
            };
            var i = a(n(84646)),
                l = n(78577),
                o = n(48360),
                r = n(67294),
                s = a(n(56720)),
                u = a(n(45764)),
                c = a(n(62905)),
                d = n(91285),
                f = n(50857),
                h = a(n(47830)),
                p = n(4481),
                m = a(n(98350)),
                v = n(82506),
                g = a(n(83399)),
                x = n(65901),
                C = a(n(53187)),
                _ = a(n(18345)),
                b = n(19288),
                j = a(n(38973)),
                k = a(n(96178)),
                S = n(90675),
                y = a(n(92546)),
                M = n(2629),
                T = a(n(53258)),
                E = a(n(87923)),
                P = a(n(1594)),
                w = n(16539),
                I = a(n(89971)),
                A = a(n(68921)),
                N = n(23571),
                D = a(n(80816)),
                O = a(n(9844)),
                R = a(n(592)),
                L = a(n(50507)),
                B = n(87547),
                G = a(n(59603)),
                F = n(26329),
                V = a(n(43463)),
                U = n(68220),
                H = a(n(20147)),
                q = n(64911),
                W = n(22552),
                Y = n(92428),
                z = a(n(93958)),
                K = n(40232),
                X = n(85893),
                Z = {
                    flexShrink: "oq44ahr5",
                    flexGrow: "tvf2evcx",
                    flexBasis: "lb5m6g5c",
                    paddingBottom: "s9fl9ege"
                },
                $ = (0, Y.genId)("max_participant_toast")
        },
        1594: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.chat,
                    n = (0, h.jsx)(m, {
                        chat: t
                    }),
                    a = (0, h.jsx)(p, {
                        chat: t
                    });
                return (0, h.jsxs)(l.ChatInfoDrawerButtonsSection, {
                    children: [n, a]
                })
            };
            var i = n(48360),
                l = n(82506),
                o = n(65901),
                r = a(n(61876)),
                s = a(n(9844)),
                u = a(n(51497)),
                c = n(43329),
                d = n(24170),
                f = a(n(7665)),
                h = n(85893);

            function p(e) {
                var t = e.chat;
                return (0, h.jsx)(r.default, {
                    a8nText: "li-report-spam",
                    color: "danger",
                    icon: (0, h.jsx)(f.default, {
                        name: "thumbs-down",
                        directional: !0
                    }),
                    theme: "chat-info",
                    onClick: function() {
                        o.Cmd.openModal((0, h.jsx)(u.default, {
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

            function m(e) {
                var t = e.chat;
                return (0, h.jsx)(r.default, {
                    a8nText: "li-delete-group",
                    icon: (0, h.jsx)(f.default, {
                        name: "exit",
                        directional: !0
                    }),
                    color: "danger",
                    theme: "chat-info",
                    onClick: function() {
                        o.Cmd.deleteOrExitChat(t)
                    },
                    children: t.isReadOnly ? s.default.t(872) : i.fbt._("Exit group", null, {
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
                l = a(n(272)),
                o = n(79746),
                r = n(78577),
                s = a(n(67082)),
                u = n(43828),
                c = n(48360),
                d = n(67294),
                f = a(n(45764)),
                h = n(91285),
                p = n(50857),
                m = a(n(88186)),
                v = n(82506),
                g = n(65901),
                x = a(n(86777)),
                C = n(94680),
                _ = n(73008),
                b = a(n(98303)),
                j = n(68985),
                k = n(73568),
                S = n(1577),
                y = n(2629),
                M = a(n(9844)),
                T = n(87547),
                E = a(n(44606)),
                P = a(n(84287)),
                w = n(34238),
                I = a(n(7665)),
                A = n(16835),
                N = a(n(93820)),
                D = n(85893),
                O = (0, d.forwardRef)((function(e, t) {
                    var n, a = (0, p.useModelValues)((0, l.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["support"]),
                        O = (0, l.default)(null === (n = e.chat.groupMetadata) || void 0 === n ? void 0 : n.participants, "props.chat.groupMetadata?.participants"),
                        L = (0, f.default)();
                    (0, h.useListener)(O, "add remove reset sort change:isAdmin change:isSuperAdmin", L);
                    var B = (0, d.useState)(R(O)),
                        G = (0, i.default)(B, 2),
                        F = G[0],
                        V = G[1],
                        U = (0, d.useRef)(),
                        H = (0, d.useState)(),
                        q = (0, i.default)(H, 2),
                        W = q[0],
                        Y = q[1];
                    if ((0, d.useEffect)((function() {
                            (0, r.isMDBackend)() && e.scrollToParticipantList && U.current && (0, w.scrollIntoViewIfNeeded)(U.current, !1)
                        }), [e.scrollToParticipantList]), (0, d.useImperativeHandle)(t, (function() {
                            return {
                                scrollIntoView: function() {
                                    var e;
                                    null === (e = U.current) || void 0 === e || e.scrollIntoView()
                                }
                            }
                        })), e.chat.shouldHideParticipants()) return null;
                    var z, K, X, Z = (0, D.jsx)(I.default, {
                        name: "search",
                        color: "secondary"
                    });
                    if (O.canAdd() && !a.support) {
                        var $ = (0, D.jsx)(P.default, {
                            theme: "compact",
                            children: (0, D.jsx)(I.default, {
                                name: "add-user",
                                directional: !0
                            })
                        });
                        z = (0, D.jsx)(m.default, {
                            image: $,
                            theme: "chat-info",
                            primary: c.fbt._("Add participant", null, {
                                hk: "48ECfz"
                            }),
                            onClick: e.onAddParticipant
                        })
                    }
                    if (O.iAmAdmin() && e.onGroupInviteLink && !a.support) {
                        var Q = (0, D.jsx)(P.default, {
                            theme: "compact",
                            children: (0, D.jsx)(I.default, {
                                name: "link"
                            })
                        });
                        K = (0, D.jsx)(m.default, {
                            image: Q,
                            theme: "chat-info",
                            primary: c.fbt._("Invite to group via link", null, {
                                hk: "3vDtFL"
                            }),
                            onClick: e.onGroupInviteLink
                        })
                    }
                    if (R(O) && F) {
                        var J = O.length <= 20,
                            ee = O.length - v.INFO_DRAWER_MAX_ROWS;
                        X = (0, D.jsx)(b.default, {
                            numMore: ee,
                            onClick: function() {
                                J ? V(!1) : e.onOpenParticpantSearch()
                            },
                            viewAll: !J
                        })
                    }
                    var te, ne = function(e) {
                            var t = O.get(e.id);
                            return !!t && (O.canPromote(t) || O.canDemote(t) || O.canRemove(t) || O.canVerifyIdentity(t))
                        },
                        ae = function(t, n) {
                            var a = O.assertGet(n.id);
                            if (ne(n)) {
                                var i = [];
                                O.canPromote(a) && i.push((0, D.jsx)(C.DropdownItem, {
                                    a8n: "mi-grp-promote-admin",
                                    action: function() {
                                        var t = M.default.t(348, {
                                            participant: a.contact.formattedName,
                                            subject: e.chat.contact.name
                                        });
                                        g.Cmd.openModal((0, D.jsx)(x.default, {
                                            onOK: function() {
                                                return t = !0, a.contact.pendingAction++, (0, T.promoteParticipants)(e.chat, [a]).then((function() {
                                                    a.contact.pendingAction--
                                                })), void(t && g.Cmd.closeModal());
                                                var t
                                            },
                                            okText: M.default.t(597),
                                            onCancel: function() {
                                                return g.Cmd.closeModal()
                                            },
                                            cancelText: c.fbt._("Cancel", null, {
                                                hk: "H0gNq"
                                            }),
                                            children: (0, D.jsx)(_.EmojiText, {
                                                text: t
                                            })
                                        }))
                                    },
                                    children: M.default.t(597)
                                }, "promote")), O.canRemove(a) && i.push((0, D.jsx)(C.DropdownItem, {
                                    a8n: "mi-grp-remove-participant",
                                    action: function() {
                                        var t = M.default.t(349, {
                                            participant: a.contact.formattedName,
                                            subject: e.chat.contact.name
                                        });
                                        g.Cmd.openModal((0, D.jsx)(x.default, {
                                            onOK: function() {
                                                return t = !0, a.contact.pendingAction++, (0, T.removeParticipants)(e.chat, [a]).then((function() {
                                                    a.contact.pendingAction--
                                                })), void(t && g.Cmd.closeModal());
                                                var t
                                            },
                                            okText: M.default.t(710),
                                            onCancel: function() {
                                                return g.Cmd.closeModal()
                                            },
                                            cancelText: c.fbt._("Cancel", null, {
                                                hk: "H0gNq"
                                            }),
                                            children: (0, D.jsx)(_.EmojiText, {
                                                text: t
                                            })
                                        }))
                                    },
                                    children: M.default.t(601)
                                }, "remove")), O.canDemote(a) && i.push((0, D.jsx)(C.DropdownItem, {
                                    a8n: "mi-grp-verify-identify",
                                    action: function() {
                                        a.contact.pendingAction++, (0, T.demoteParticipants)(e.chat, [a]).then((function() {
                                            a.contact.pendingAction--
                                        })), g.Cmd.closeModal()
                                    },
                                    children: c.fbt._("Dismiss as admin", null, {
                                        hk: "243sNl"
                                    })
                                }, "demote-admin")), (0, r.isMDBackend)() && O.canVerifyIdentity(a) && i.push((0, D.jsx)(C.DropdownItem, {
                                    a8n: "mi-grp-verify-identify",
                                    action: function() {
                                        e.onVerification && e.onVerification(a.contact)
                                    },
                                    children: c.fbt._("Verify Security Code", null, {
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
                        ie = function(e, t) {
                            s.default.equals((0, S.getMaybeMeUser)(), t.id) || (0, j.findChat)(t.id).then((function(e) {
                                g.Cmd.openChatFromUnread(e).then((function(t) {
                                    t && ((0, y.btmThreadsLoggingEnabled)() && g.Cmd.addChatMsgSentLogAttributes(e, {
                                        handleMultiple: function() {
                                            (0, u.handleActivitiesForChatThreadLogging)([{
                                                activityType: "groupMembershipReplies",
                                                ts: (0, o.unixTime)(),
                                                chatId: e.id
                                            }])
                                        }
                                    }), g.Cmd.focusChatTextInput(e))
                                }))
                            }))
                        },
                        le = O.length ? (0, D.jsxs)(v.ChatInfoDrawerListSection, {
                            ref: U,
                            a8nText: "section-participants",
                            title: M.default.t(947, {
                                count: O.length,
                                _plural: O.length
                            }),
                            titleOnClick: e.onOpenParticpantSearch,
                            subtitle: Z,
                            children: [z, K, (0, D.jsx)(k.FlatList, {
                                flatListController: e.flatListController,
                                direction: "vertical",
                                forceConsistentRenderCount: !1,
                                data: function() {
                                    var e, t = [],
                                        n = [];
                                    O.forEach((function(a) {
                                        a.contact.isMe ? e = a : a.isAdmin ? t.push(a) : n.push(a)
                                    }));
                                    var a = [];
                                    return e && a.push(e), a = a.concat(t, n), R(O) && F && (a = a.slice(0, v.INFO_DRAWER_MAX_ROWS)), a.map((function(e) {
                                        return {
                                            itemKey: e.id.toString(),
                                            id: e.id,
                                            height: 68
                                        }
                                    }))
                                }(),
                                renderItem: function(e) {
                                    var t = e.id,
                                        n = O.get(t);
                                    if (!n) throw new k.UnknownDataError(e);
                                    var a = n.contact,
                                        i = !!W && s.default.equals(a.id, W.contactId);
                                    return (0, D.jsx)(E.default, {
                                        contact: a,
                                        participant: n,
                                        onClick: ie,
                                        contextEnabled: function() {
                                            return ne(a)
                                        },
                                        contextMenu: i,
                                        onContext: function(e) {
                                            return ae(e, a)
                                        },
                                        theme: "chat-info",
                                        showNotifyName: !0,
                                        waitIdle: !0
                                    }, n.id.toString())
                                }
                            }), X]
                        }) : null;
                    return W && (te = (0, D.jsx)(A.UIE, {
                        displayName: "ChatContextMenu",
                        escapable: !0,
                        popable: !0,
                        requestDismiss: function() {
                            Y(null)
                        },
                        children: (0, D.jsx)(N.default, {
                            contextMenu: W
                        })
                    })), (0, D.jsxs)(D.Fragment, {
                        children: [le, te]
                    })
                }));

            function R(e) {
                return e.length > v.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
            }
            t.GroupInfoParticipantsSection = O, O.displayName = "GroupInfoParticipantsSection"
        },
        89971: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = (0, l.default)(e.chat.groupMetadata, "props.chat.groupMetadata"),
                    S = (0, l.default)(null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants, "props.chat.groupMetadata?.participants"),
                    y = (0, l.default)(null === (n = e.chat.groupMetadata) || void 0 === n ? void 0 : n.pendingParticipants, "props.chat.groupMetadata?.pendingParticipants"),
                    M = (0, s.default)();
                (0, u.useListener)(S, "change:isAdmin change:isSuperAdmin", M), (0, u.useListener)(y, "add remove reset", M);
                var T = (0, r.useState)(k(y)),
                    E = (0, i.default)(T, 2),
                    P = E[0],
                    w = E[1],
                    I = (0, r.useState)(),
                    A = (0, i.default)(I, 2),
                    N = A[0],
                    D = A[1];
                (0, r.useEffect)((function() {
                    a.queryGroupV4PendingInvite().then((function() {
                        w(k(a.pendingParticipants))
                    }))
                }), [a]);
                var O, R, L;
                y.length > 0 && (O = (0, j.jsx)(v.FlatList, {
                    flatListController: e.flatListController,
                    direction: "vertical",
                    forceConsistentRenderCount: !1,
                    data: (B = y.toArray(), k(y) && P && (B = B.slice(0, c.INFO_DRAWER_MAX_ROWS)), B.map((function(e) {
                        return {
                            itemKey: e.id.toString(),
                            id: e.id,
                            height: 68
                        }
                    }))),
                    renderItem: function(e) {
                        var t = e.id,
                            n = y.get(t);
                        if (!n) throw new v.UnknownDataError(e);
                        var i = n.contact;
                        return (0, j.jsx)(x.default, {
                            contact: i,
                            participant: n,
                            contextEnabled: function() {
                                return !0
                            },
                            contextMenu: !0,
                            onContext: function(e) {
                                return t = e, l = [(0, j.jsx)(h.DropdownItem, {
                                    a8n: "mi-grp-promote-admin",
                                    action: function() {
                                        d.Cmd.openModal((0, j.jsx)(f.default, {
                                            onOK: function() {
                                                d.Cmd.closeModal(), a.revokeGroupV4AddInvite([n.id.toString()]).then((function() {
                                                    d.Cmd.openToast((0, j.jsx)(C.Toast, {
                                                        msg: o.fbt._("Invite reset", null, {
                                                            hk: "MgErr"
                                                        }),
                                                        id: (0, C.genId)()
                                                    }))
                                                }))
                                            },
                                            okText: o.fbt._("Reset link", null, {
                                                hk: "2Zb3R4"
                                            }),
                                            onCancel: function() {
                                                return d.Cmd.closeModal()
                                            },
                                            cancelText: o.fbt._("Cancel", null, {
                                                hk: "H0gNq"
                                            }),
                                            children: (0, j.jsx)(p.EmojiText, {
                                                text: g.default.t(513, {
                                                    participant: n.contact.formattedName
                                                })
                                            })
                                        }))
                                    },
                                    children: o.fbt._("Revoke invite", null, {
                                        hk: "4on28q"
                                    })
                                }, "promote")], void D({
                                    contactId: i.id,
                                    menu: l,
                                    anchor: t.anchor,
                                    event: t.event
                                });
                                var t, l
                            },
                            theme: "chat-info",
                            showNotifyName: !0,
                            isPendingParticipant: !0,
                            waitIdle: !0
                        }, n.id.toString())
                    }
                }));
                var B;
                if (k(y) && P) {
                    var G = y.length - c.INFO_DRAWER_MAX_ROWS;
                    R = (0, j.jsx)(m.default, {
                        numMore: G,
                        onClick: function() {
                            w(!1)
                        }
                    })
                }
                S.iAmAdmin() && y.length > 0 && (L = (0, j.jsxs)(c.ChatInfoDrawerListSection, {
                    a8nText: "section-participants",
                    title: g.default.t(511, {
                        number: y.length
                    }),
                    children: [O, R]
                }));
                var F;
                N && (F = (0, j.jsx)(_.UIE, {
                    displayName: "ChatContextMenu",
                    escapable: !0,
                    popable: !0,
                    requestDismiss: function() {
                        D(null)
                    },
                    children: (0, j.jsx)(b.default, {
                        contextMenu: N
                    })
                }));
                return (0, j.jsxs)(j.Fragment, {
                    children: [L, F]
                })
            };
            var i = a(n(63038)),
                l = a(n(272)),
                o = n(48360),
                r = n(67294),
                s = a(n(45764)),
                u = n(91285),
                c = n(82506),
                d = n(65901),
                f = a(n(86777)),
                h = n(94680),
                p = n(73008),
                m = a(n(98303)),
                v = n(73568),
                g = a(n(9844)),
                x = a(n(44606)),
                C = n(92428),
                _ = n(16835),
                b = a(n(93820)),
                j = n(85893);

            function k(e) {
                return e.length > c.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
            }
        },
        68921: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = (0, g.useModelValues)(e.chat, ["labels"]),
                    i = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants,
                    l = (0, m.default)();
                (0, v.useListener)(i, "add remove reset sort change:isAdmin change:isSuperAdmin", l);
                var o = null !== (n = null == i ? void 0 : i.length) && void 0 !== n ? n : 0,
                    r = E.default.t(947, {
                        count: o,
                        _plural: o
                    });
                return (0, L.jsx)(b.default, {
                    theme: "padding-large",
                    children: (0, L.jsxs)(k.FlexColumn, {
                        align: "center",
                        children: [(0, L.jsx)(F, {
                            chat: e.chat,
                            xstyle: G.photo
                        }), (0, L.jsx)(U, {
                            chat: e.chat
                        }), (0, L.jsx)("div", {
                            className: (0, p.default)(G.groupSecondary),
                            children: (0, L.jsx)(N.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, L.jsxs)(O.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: [f.fbt._("Group", null, {
                                        hk: "DNiv2"
                                    }), " · ", (0, L.jsx)(R.default, {
                                        onClick: e.onClickParticpantsCount,
                                        children: r
                                    })]
                                })
                            })
                        }), undefined, (0, L.jsx)(T.default, {
                            labels: a.labels
                        })]
                    })
                })
            };
            var i = a(n(87757)),
                l = a(n(48926)),
                o = a(n(63038)),
                r = n(396),
                s = n(15586),
                u = a(n(272)),
                c = a(n(15584)),
                d = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = B(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var o = i ? Object.getOwnPropertyDescriptor(e, l) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, l, o) : a[l] = e[l]
                        } a.default = e, n && n.set(e, a);
                    return a
                }(n(8924)),
                f = n(48360),
                h = n(67294),
                p = a(n(56720)),
                m = a(n(45764)),
                v = n(91285),
                g = n(50857),
                x = a(n(22190)),
                C = n(65901),
                _ = a(n(86777)),
                b = a(n(46821)),
                j = a(n(454)),
                k = n(27968),
                S = n(2629),
                y = a(n(78070)),
                M = n(26224),
                T = a(n(16516)),
                E = a(n(9844)),
                P = n(1191),
                w = n(76110),
                I = a(n(49309)),
                A = n(50214),
                N = n(96197),
                D = n(89569),
                O = n(22552),
                R = a(n(76080)),
                L = n(85893);

            function B(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (B = function(e) {
                    return e ? n : t
                })(e)
            }
            var G = {
                photo: {
                    marginBottom: "njub1g37"
                },
                groupSecondary: {
                    lineHeight: "a4ywakfo",
                    marginTop: "ma4rpf0l"
                }
            };

            function F(e) {
                var t = (0, g.useModelValues)(e.chat, ["isReadOnly"]),
                    n = (0, g.useModelValues)(e.chat.contact, ["id", "profilePicThumb"]),
                    a = (0, g.useModelValues)(e.chat.contact.profilePicThumb, ["imgFull"]),
                    i = (0, g.useModelValues)((0, u.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["groupType"]),
                    l = (0, h.useState)(!1),
                    f = (0, o.default)(l, 2),
                    m = f[0],
                    v = f[1],
                    C = (0, h.useState)(!1),
                    _ = (0, o.default)(C, 2),
                    b = _[0],
                    j = _[1],
                    k = (0, x.default)(),
                    y = i.groupType === M.GroupType.DEFAULT_ANNOUNCEMENT_GROUP,
                    T = (0, S.communitiesEnabled)() && y ? I.default.DEFAULT_ANNOUNCEMENT_GROUP : I.default.GROUP,
                    E = t.isReadOnly || !a.canDelete() && !a.canSet() || t.isSupportGroup() || y;
                return (0, L.jsx)("div", {
                    className: (0, p.default)(e.xstyle),
                    children: (0, L.jsx)(w.PhotoPickerLoadable, {
                        type: T,
                        id: n.id,
                        attachToChat: !0,
                        pending: b,
                        startImage: a.imgFull,
                        readOnly: E,
                        onImageSet: function(e, t) {
                            var n;
                            j(!0), n = e && t ? (0, A.setProfilePic)(a, e, t) : (0, A.deleteProfilePic)(a), (0, c.default)(n, k).catch((0, r.catchAbort)((function() {}))).catch((0, s.filteredCatch)(d.ActionError, (function() {
                                __LOG__(3)`GroupInfoDrawer: failed to set/delete group image`, v(!m)
                            }))).finally((function() {
                                j(!1)
                            }))
                        }
                    }, String(m))
                })
            }
            var V = {
                marginTop: "hymafltn",
                marginEnd: "jnwc1y2a",
                marginBottom: "ngycyvoj",
                marginStart: "svoq16ka"
            };

            function U(e) {
                var t = (0, g.useModelValues)(e.chat.contact, ["name"]),
                    n = (0, g.useModelValues)((0, u.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["creation", "restrict", "support"]),
                    a = (0, x.default)(),
                    o = function() {
                        var n = (0, l.default)(i.default.mark((function n(l) {
                            var o;
                            return i.default.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if ((o = (0, j.default)(l)) !== t.name) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 3:
                                        return n.next = 5, (0, c.default)((0, D.setGroupSubject)(e.chat, o), a).catch((0, r.catchAbort)((function() {}))).catch((function() {
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
                return n.support ? (0, L.jsx)(O.TextHeader, {
                    className: (0, p.default)(V),
                    level: "2",
                    theme: "large",
                    children: (0, L.jsx)(P.GroupName, {
                        chat: e.chat,
                        groupMetadata: n,
                        breakWord: !0
                    })
                }) : (0, L.jsx)(y.default, {
                    subject: t.name,
                    onSave: o,
                    textInputProps: {
                        editable: n.canSetSubject(),
                        editRestrictionInfo: n.restrict ? function() {
                            C.Cmd.openModal((0, L.jsx)(_.default, {
                                onOK: function() {
                                    return C.Cmd.closeModal()
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
                    b = e.onParticipantRemove,
                    j = e.onDemoteAdmin,
                    k = e.onVerification,
                    S = (0, c.default)(),
                    y = null === (t = n.groupMetadata) || void 0 === t ? void 0 : t.participants;
                (0, d.useListener)(y, "add remove reset", (function() {
                    null != y && S()
                }));
                var M, T = (0, u.useState)(null),
                    E = (0, i.default)(T, 2),
                    P = E[0],
                    w = E[1],
                    I = function(e) {
                        (0, m.findChat)(e).then((function(e) {
                            f.Cmd.closeModal(), f.Cmd.openChatFromUnread(e)
                        }))
                    };
                P && (M = (0, _.jsx)(x.UIE, {
                    displayName: "ChatContextMenu",
                    escapable: !0,
                    popable: !0,
                    requestDismiss: function() {
                        w(null)
                    },
                    children: (0, _.jsx)(C.default, {
                        contextMenu: P
                    })
                }));
                return (0, _.jsxs)(_.Fragment, {
                    children: [(0, _.jsx)(h.default, {
                        title: s.fbt._("Search Participants", null, {
                            hk: "M6lxB"
                        }),
                        filter: function(e) {
                            var t = n.groupMetadata;
                            return !(null == t || !t.participants.get(e.id.toString()))
                        },
                        onCancel: function() {
                            f.Cmd.closeModal()
                        },
                        openContextOnClick: !0,
                        contextEnabled: function() {
                            return !1
                        },
                        contextMenu: function(e) {
                            return !r.default.equals((0, v.getMaybeMeUser)(), e)
                        },
                        onContext: function(e, t) {
                            var i = (0, l.default)(n.groupMetadata, "chat.groupMetadata").participants,
                                u = i.assertGet(t.id.toString()),
                                c = [];
                            if (i.canPromote(u)) {
                                var d = a.bind(null, u, !1);
                                c.push((0, _.jsx)(p.DropdownItem, {
                                    a8n: "mi-grp-promote-admin",
                                    action: d,
                                    children: g.default.t(597)
                                }, "promote"))
                            }
                            if (i.canRemove(u)) {
                                var h = b.bind(null, u, !1);
                                c.push((0, _.jsx)(p.DropdownItem, {
                                    a8n: "mi-grp-remove-participant",
                                    action: h,
                                    children: g.default.t(601)
                                }, "remove"))
                            }
                            i.canDemote(u) && c.push((0, _.jsx)(p.DropdownItem, {
                                a8n: "mi-grp-verify-identify",
                                action: function() {
                                    return j(u)
                                },
                                children: s.fbt._("Dismiss as admin", null, {
                                    hk: "243sNl"
                                })
                            }, "demote-admin")), (0, o.isMDBackend)() && i.canVerifyIdentity(u) && c.push((0, _.jsx)(p.DropdownItem, {
                                a8n: "mi-grp-verify-identify",
                                action: function() {
                                    f.Cmd.closeModal(), null == k || k(u.contact)
                                },
                                children: s.fbt._("Verify Security Code", null, {
                                    hk: "1vTVgt"
                                })
                            }, "verify-identity")), r.default.equals((0, v.getMaybeMeUser)(), u.id) || c.push((0, _.jsx)(p.DropdownItem, {
                                action: I.bind(null, u.contact.id),
                                children: g.default.t(606, {
                                    author: u.contact.formattedName
                                })
                            }, "message author")), w({
                                contactId: t.id,
                                menu: c,
                                anchor: e.anchor,
                                event: e.anchor ? void 0 : e
                            })
                        },
                        showNotifyName: !0,
                        listenForAdminChange: !0,
                        participantCollection: (0, l.default)(e.chat.groupMetadata, "props.chat.groupMetadata").participants
                    }), M]
                })
            };
            var i = a(n(63038)),
                l = a(n(272)),
                o = n(78577),
                r = a(n(67082)),
                s = n(48360),
                u = n(67294),
                c = a(n(45764)),
                d = n(91285),
                f = n(65901),
                h = a(n(71562)),
                p = n(94680),
                m = n(68985),
                v = n(1577),
                g = a(n(9844)),
                x = n(16835),
                C = a(n(93820)),
                _ = n(85893)
        },
        20147: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onClick,
                    n = (0, r.jsx)(o.TextSpan, {
                        theme: "title",
                        children: i.fbt._("Security", null, {
                            hk: "2BYJDI"
                        })
                    }),
                    a = (0, r.jsx)(o.TextDiv, {
                        theme: "muted",
                        children: i.fbt._("Click to learn how messages and calls are secured.", null, {
                            hk: "1UxhjE"
                        })
                    });
                return (0, r.jsx)(l.default, {
                    icon: "lock",
                    onClick: t,
                    title: n,
                    secondaryTitle: a
                })
            };
            var i = n(48360),
                l = a(n(98350)),
                o = n(22552),
                r = n(85893)
        },
        53906: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, l.useState)(),
                    n = (0, i.default)(t, 2)[1],
                    a = (0, l.useState)(),
                    d = (0, i.default)(a, 2)[1];
                if ((0, o.useListener)(r.Conn, "change:isVoipInitialized", (function() {
                        n(r.Conn.isVoipInitialized)
                    })), (0, o.useListener)(s, "change:activeCall", (function() {
                        d(s.activeCall)
                    })), e) return {
                    isVoiceCallEnabled: c.isVoiceCallEnabledForContactOrChat(e),
                    isVideoCallEnabled: c.isVideoCallEnabledForContact(e),
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
                l = n(67294),
                o = n(91285),
                r = n(73929),
                s = n(95658).CallCollection,
                u = n(77273).Voip,
                c = n(89703)
        },
        96178: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                if ((0, i.isMDBackend)()) {
                    var t, n = e.onClick,
                        a = e.text,
                        u = (0, s.jsx)(r.TextSpan, {
                            theme: "title",
                            children: null !== (t = e.title) && void 0 !== t ? t : l.fbt._("Encryption", null, {
                                hk: "a7CfR"
                            })
                        }),
                        c = (0, s.jsx)(r.TextDiv, {
                            theme: "muted",
                            children: a
                        });
                    return (0, s.jsx)(o.default, {
                        onClick: n,
                        icon: "lock",
                        title: u,
                        secondaryTitle: c
                    })
                }
                return null
            };
            var i = n(78577),
                l = n(48360),
                o = a(n(98350)),
                r = n(22552),
                s = n(85893)
        },
        11465: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(29521)),
                l = n(15960),
                o = a(n(67082)),
                r = n(48360),
                s = n(67294),
                u = n(50857),
                c = n(65901),
                d = a(n(53187)),
                f = a(n(81218)),
                h = a(n(18345)),
                p = n(19288),
                m = a(n(46821)),
                v = n(1577),
                g = n(2629),
                x = a(n(47555)),
                C = a(n(54063)),
                _ = n(26224),
                b = n(64759),
                j = n(87547),
                k = n(64803),
                S = n(99451),
                y = n(43890),
                M = n(22552),
                T = a(n(93958)),
                E = n(85893),
                P = function(e) {
                    var t = e.isRestricted,
                        n = e.onClick;
                    return (0, E.jsxs)(f.default, {
                        onClick: n,
                        multiline: !0,
                        children: [(0, E.jsx)("div", {
                            className: x.default.header,
                            children: (0, E.jsx)(M.TextSpan, {
                                theme: "title",
                                children: r.fbt._("Edit group info", null, {
                                    hk: "2rhyLl"
                                })
                            })
                        }), (0, E.jsx)(M.TextDiv, {
                            theme: "muted",
                            children: t ? r.fbt._("Only admins", null, {
                                hk: "1shXeT"
                            }) : r.fbt._("All participants", null, {
                                hk: "2YNQNN"
                            })
                        })]
                    })
                },
                w = function(e) {
                    var t = e.isAnnouncement,
                        n = e.onClick;
                    return (0, E.jsxs)(f.default, {
                        onClick: n,
                        multiline: !0,
                        children: [(0, E.jsx)("div", {
                            className: x.default.header,
                            children: (0, E.jsx)(M.TextSpan, {
                                theme: "title",
                                children: r.fbt._("Send messages", null, {
                                    hk: "2zKwxL"
                                })
                            })
                        }), (0, E.jsx)(M.TextDiv, {
                            theme: "muted",
                            children: t ? r.fbt._("Only admins", null, {
                                hk: "1shXeT"
                            }) : r.fbt._("All participants", null, {
                                hk: "2YNQNN"
                            })
                        })]
                    })
                },
                I = function(e) {
                    var t = e.isNoFrequentlyForwarded,
                        n = e.onClick,
                        a = y.ServerProps.hfmStringChanges ? r.fbt._("Messages forwarded many times", null, {
                            hk: "2Neytn"
                        }) : r.fbt._("Frequently forwarded messages", null, {
                            hk: "1OxFLx"
                        });
                    return (0, E.jsxs)(f.default, {
                        onClick: n,
                        multiline: !0,
                        children: [(0, E.jsx)("div", {
                            className: x.default.header,
                            children: (0, E.jsx)(M.TextSpan, {
                                theme: "title",
                                children: a
                            })
                        }), (0, E.jsx)(M.TextDiv, {
                            theme: "muted",
                            children: t ? r.fbt._("Don't allow", null, {
                                hk: "3uBuwQ"
                            }) : r.fbt._("Allow", null, {
                                hk: "2pdVOn"
                            })
                        })]
                    })
                };

            function A(e, t) {
                var n = (0, u.useModelValues)(e.chat, ["id"]),
                    a = (0, u.useModelValues)(e.groupMetadata, ["restrict", "announce", "noFrequentlyForwarded", "participants", "owner", "groupType", "isParentGroup"]),
                    s = (0, T.default)(),
                    y = function(e) {
                        c.Cmd.openModal((0, E.jsx)(C.default, {
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
                            n = (0, v.getMaybeMeUser)().equals(e),
                            i = !0 === a.isParentGroup && (0, g.cadminSelfDemoteEnabled)();
                        return t || n && !i
                    },
                    O = function(e) {
                        var t = a.participants,
                            l = t.filter((function(e) {
                                return e.isAdmin
                            })),
                            o = (0, i.default)(e, l, (function(e, t) {
                                return e.id.equals(t.id)
                            })).map((function(e) {
                                return t.assertGet(e.id)
                            })),
                            r = (0, i.default)(l, e, (function(e, t) {
                                return e.id.equals(t.id)
                            }));
                        o.length > 0 && (o.forEach((function(e) {
                            e.contact.pendingAction++
                        })), (0, j.promoteParticipants)(n, o).finally((function() {
                            o.forEach((function(e) {
                                e.contact.pendingAction--
                            }))
                        }))), r.length > 0 && (r.forEach((function(e) {
                            e.contact.pendingAction++
                        })), (0, j.demoteParticipants)(n, r).finally((function() {
                            r.forEach((function(e) {
                                e.contact.pendingAction--
                            }))
                        }))), c.Cmd.closeModal()
                    };
                return (0, E.jsxs)(d.default, {
                    ref: t,
                    theme: "striped",
                    children: [(0, E.jsx)(p.DrawerHeader, {
                        title: r.fbt._("Group settings", null, {
                            hk: "3sS0Vl"
                        }),
                        type: p.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onClose
                    }), (0, E.jsxs)(h.default, {
                        children: [(0, E.jsx)(m.default, {
                            animation: !1,
                            children: (0, E.jsx)(P, {
                                onClick: function() {
                                    y(l.GROUP_SETTING_TYPE.RESTRICT)
                                },
                                isRestricted: a.restrict
                            })
                        }), (0, E.jsx)("div", {
                            className: x.default.restrictText,
                            children: (0, E.jsx)(M.TextSpan, {
                                theme: "muted",
                                children: r.fbt._("Choose who can change this group’s subject, icon, description and disappearing messages setting.", null, {
                                    hk: "1cqpzS"
                                })
                            })
                        }), (0, E.jsxs)(m.default, {
                            animation: !1,
                            children: [(0, g.communitiesEnabled)() && a.groupType === _.GroupType.DEFAULT_ANNOUNCEMENT_GROUP ? null : (0, E.jsx)(w, {
                                onClick: function() {
                                    y(l.GROUP_SETTING_TYPE.ANNOUNCEMENT)
                                },
                                isAnnouncement: a.announce
                            }), (0, b.isAdminHfmToggleEnabled)() ? (0, E.jsx)(I, {
                                onClick: function() {
                                    y(l.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED)
                                },
                                isNoFrequentlyForwarded: a.noFrequentlyForwarded
                            }) : null]
                        }), (0, E.jsx)(m.default, {
                            animation: !1,
                            children: (0, E.jsx)(f.default, {
                                onClick: function() {
                                    c.Cmd.openModal((0, E.jsx)(k.SelectModal, {
                                        onConfirm: O,
                                        getInitialItems: A,
                                        isDisabled: D,
                                        isSelected: D,
                                        filter: N,
                                        title: r.fbt._("Edit group admins", null, {
                                            hk: "1BOEkM"
                                        }),
                                        useShortName: !0,
                                        useAllContacts: !0,
                                        listType: k.ListType.PARTICIPANT_MANAGE_MODAL,
                                        singleSelectionFooterType: S.FooterType.CONFIRM,
                                        multipleSelectionFooterType: S.FooterType.CONFIRM,
                                        shouldShowSelectionSummary: !1
                                    }))
                                },
                                multiline: !0,
                                children: (0, E.jsx)("div", {
                                    className: x.default.header,
                                    children: (0, E.jsx)(M.TextSpan, {
                                        theme: "title",
                                        children: r.fbt._("Edit group admins", null, {
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
                    n = (0, s.useModelValues)(e.chat, ["id"]),
                    a = (0, s.useModelValues)(e.groupMetadata, ["restrict", "announce", "noFrequentlyForwarded"]),
                    v = (0, r.useMemo)((function() {
                        switch (t) {
                            case l.GROUP_SETTING_TYPE.ANNOUNCEMENT:
                            case l.GROUP_SETTING_TYPE.RESTRICT:
                                return [{
                                    label: o.fbt._("All participants", null, {
                                        hk: "2YNQNN"
                                    }),
                                    value: 0
                                }, {
                                    label: o.fbt._("Only admins", null, {
                                        hk: "1shXeT"
                                    }),
                                    value: 1
                                }];
                            case l.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
                                return [{
                                    label: o.fbt._("Allow", null, {
                                        hk: "2pdVOn"
                                    }),
                                    value: 0
                                }, {
                                    label: o.fbt._("Don't allow", null, {
                                        hk: "3uBuwQ"
                                    }),
                                    value: 1
                                }];
                            default:
                                return []
                        }
                    }), [t]),
                    g = (0, r.useMemo)((function() {
                        var e = a.restrict,
                            n = a.announce,
                            i = a.noFrequentlyForwarded;
                        switch (t) {
                            case l.GROUP_SETTING_TYPE.ANNOUNCEMENT:
                                return n ? 1 : 0;
                            case l.GROUP_SETTING_TYPE.RESTRICT:
                                return e ? 1 : 0;
                            case l.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
                                return i ? 1 : 0;
                            default:
                                return 0
                        }
                    }), [t, a]),
                    x = (0, r.useMemo)((function() {
                        switch (t) {
                            case l.GROUP_SETTING_TYPE.ANNOUNCEMENT:
                                return o.fbt._("Send messages", null, {
                                    hk: "2zKwxL"
                                });
                            case l.GROUP_SETTING_TYPE.RESTRICT:
                                return o.fbt._("Edit group info", null, {
                                    hk: "2rhyLl"
                                });
                            case l.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
                                return f.ServerProps.hfmStringChanges ? o.fbt._("Messages forwarded many times", null, {
                                    hk: "2Neytn"
                                }) : o.fbt._("Frequently forwarded messages", null, {
                                    hk: "1OxFLx"
                                });
                            default:
                                return ""
                        }
                    }), [t]),
                    C = (0, r.useMemo)((function() {
                        return t === l.GROUP_SETTING_TYPE.RESTRICT ? o.fbt._("Choose who can change this group’s subject, icon, description and disappearing messages setting.", null, {
                            hk: "1cqpzS"
                        }) : t === l.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED && (0, d.isAdminHfmToggleEnabled)() ? (0, m.jsxs)(m.Fragment, {
                            children: [o.fbt._("Choose to allow participants to send messages to the group that have been forwarded many times.", null, {
                                hk: "1PP9Ge"
                            }), " ", (0, m.jsx)(u.ExternalLink, {
                                href: (0, i.getFrequentlyForwardedFaqUrl)(),
                                children: c.default.t(547)
                            })]
                        }) : null
                    }), [t]);
                return (0, m.jsx)(p.default, {
                    options: v,
                    initialValue: g,
                    title: x,
                    onSelect: function(e) {
                        e !== g && (0, h.setGroupProperty)(n, t, e).catch((function() {
                            return function() {}
                        }))
                    },
                    explanation: C
                })
            };
            var i = n(8917),
                l = n(15960),
                o = n(48360),
                r = n(67294),
                s = n(50857),
                u = n(49012),
                c = a(n(9844)),
                d = n(64759),
                f = n(43890),
                h = n(75367),
                p = a(n(75211)),
                m = n(85893)
        },
        592: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(34575)),
                l = a(n(93913)),
                o = a(n(2205)),
                r = a(n(99842)),
                s = n(48360),
                u = n(67294),
                c = a(n(46821)),
                d = a(n(9844)),
                f = n(63641),
                h = n(9866),
                p = n(97319),
                m = a(n(62861)),
                v = a(n(61897)),
                g = n(68220),
                x = a(n(7665)),
                C = n(22552),
                _ = n(85893),
                b = function(e) {
                    (0, o.default)(n, e);
                    var t = (0, r.default)(n);

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
                    return (0, l.default)(n, [{
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
                            }) : d.default.t(565, {
                                count: i,
                                _plural: i
                            }) : d.default.t(562, {
                                count: i,
                                _plural: i
                            });
                            if (e) {
                                if (1 === a.length) return s.fbt._("You are sharing live location", null, {
                                    hk: "4DvZgE"
                                });
                                if (t) return d.default.t(564, {
                                    name: t.formattedShortNameWithNonBreakingSpaces
                                })
                            } else if (t) return d.default.t(561, {
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
            var j = (0, f.ListenerHOC)((0, v.default)(b, b.CONCERNS));
            t.default = j
        },
        36844: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MediaGalleryDrawer = E, t.TABS = void 0;
            var i = a(n(59713)),
                l = a(n(63038)),
                o = a(n(52628)),
                r = a(n(64709)),
                s = a(n(65668)),
                u = a(n(94184)),
                c = n(48360),
                d = n(67294),
                f = a(n(62905)),
                h = n(24224),
                p = a(n(48956)),
                m = a(n(53187)),
                v = a(n(18345)),
                g = n(19288),
                x = a(n(9844)),
                C = a(n(94836)),
                _ = a(n(99540)),
                b = a(n(2130)),
                j = a(n(23845)),
                k = a(n(34310)),
                S = n(43890),
                y = n(16835),
                M = n(85893),
                T = {
                    MEDIA: "media",
                    DOCS: "docs",
                    LINKS: "links",
                    PRODUCTS: "products"
                };

            function E(e) {
                var t = e.chat,
                    n = e.onProductDetail,
                    a = e.setProductsScrollOffset,
                    E = e.productsScrollOffset,
                    P = (0, d.useState)(e.initialTab),
                    w = (0, l.default)(P, 2),
                    I = w[0],
                    A = w[1],
                    N = (0, d.useState)(null),
                    D = (0, l.default)(N, 2),
                    O = D[0],
                    R = D[1],
                    L = (0, d.useState)(!1),
                    B = (0, l.default)(L, 2),
                    G = B[0],
                    F = B[1],
                    V = (0, f.default)((function() {
                        return new r.default([], (function(e) {
                            return e.id.toString()
                        }))
                    })),
                    U = function() {
                        G && (V.current.unsetAll(), F(!1))
                    },
                    H = function(e, t) {
                        G || F(!0), V.current.setVal(e, t), 0 === V.current.getSelected().length && U()
                    },
                    q = (0, d.useCallback)((function(e) {
                        var t = (0, o.default)(T).indexOf(I),
                            n = (0, o.default)(T).indexOf(e);
                        t !== n && V.current.unsetAll(), A(e), R(n > t ? "right" : "left"), F(!1)
                    }), [V, I]),
                    W = (0, d.useMemo)((function() {
                        var e = [{
                            tab: T.MEDIA,
                            title: x.default.t(590)
                        }, {
                            tab: T.DOCS,
                            title: x.default.t(396)
                        }, {
                            tab: T.LINKS,
                            title: x.default.t(548)
                        }];
                        S.ServerProps.productMediaAttachments && e.push({
                            tab: T.PRODUCTS,
                            title: c.fbt._("Products", null, {
                                hk: "3Ky71N"
                            })
                        });
                        var t = e.map((function(e) {
                                var t = (0, u.default)(b.default.menuItem, (0, i.default)({}, b.default.active, I === e.tab));
                                return (0, M.jsx)("button", {
                                    className: t,
                                    onClick: function() {
                                        return q(e.tab)
                                    },
                                    title: e.title,
                                    children: e.title
                                }, e.tab)
                            })),
                            n = (0, u.default)(b.default.menuTabsLists, S.ServerProps.productMediaAttachments ? b.default.fourTabs : b.default.threeTabs);
                        return (0, M.jsx)("div", {
                            className: n,
                            "data-active-tab": I,
                            children: t
                        })
                    }), [I, q]),
                    Y = function() {
                        var e;
                        switch (I) {
                            case T.MEDIA:
                                e = (0, M.jsx)(_.default, {
                                    chat: t,
                                    mediaMsgs: t.getMediaMsgs(),
                                    selectable: G,
                                    onMessageSelect: H,
                                    selectedMessages: V.current,
                                    fullCollection: !0
                                });
                                break;
                            case T.LINKS:
                                e = (0, M.jsx)(C.default, {
                                    chat: t,
                                    linkMsgs: t.getLinkMsgs(),
                                    selectable: G,
                                    onMessageSelect: H,
                                    selectedMessages: V.current
                                });
                                break;
                            case T.DOCS:
                                e = (0, M.jsx)(p.default, {
                                    chat: t,
                                    docMsgs: t.getDocMsgs(),
                                    selectable: G,
                                    onMessageSelect: H,
                                    selectedMessages: V.current
                                });
                                break;
                            case T.PRODUCTS:
                                e = (0, M.jsx)(k.default, {
                                    chat: t,
                                    productMsgs: t.getProductMsgs(),
                                    selectable: G,
                                    onMessageSelect: H,
                                    selectedMessages: V.current,
                                    onProductDetail: n,
                                    setScrollOffset: a,
                                    scrollOffset: E
                                })
                        }
                        return e
                    }(),
                    z = [T.MEDIA, T.DOCS].includes(I),
                    K = G ? (0, M.jsx)(y.UIE, {
                        displayName: "MediaMultiSelect",
                        escapable: !0,
                        requestDismiss: U,
                        children: (0, M.jsx)(j.default, {
                            chat: t,
                            noSortOnForward: !0,
                            theme: "mediaGallery",
                            toastPosition: h.ToastPosition.RIGHT,
                            downloadButton: z,
                            selectedMessages: V.current,
                            onCancel: U
                        })
                    }) : null,
                    X = "right" === O ? "slide-forward" : "slide-back";
                return (0, M.jsxs)(m.default, {
                    theme: "gallery",
                    children: [(0, M.jsx)(g.DrawerHeader, {
                        title: " ",
                        onBack: e.onBack,
                        rtlFixIfOnDarwin: !0,
                        type: g.DRAWER_HEADER_TYPE.MULTI_MEDIA_GALLERY
                    }), K, W, (0, M.jsx)(v.default, {
                        "data-list-scroll-container": !0,
                        children: (0, M.jsx)(s.default, {
                            transitionName: X,
                            className: b.default.column,
                            children: (0, M.jsx)("div", {
                                className: b.default.multimediaGallery,
                                children: (0, M.jsx)("div", {
                                    className: b.default.column,
                                    children: Y
                                })
                            }, I)
                        })
                    })]
                })
            }
            t.TABS = T, E.defaultProps = {
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
                var t = (0, l.useModelValues)(e.mediaData, ["mediaStage", "renderableUrl"]);
                return (0, c.jsx)(u.default, {
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
                l = n(50857),
                o = a(n(93603)),
                r = a(n(9844)),
                s = a(n(16973)),
                u = a(n(47251)),
                c = n(85893),
                d = function(e) {
                    e.stopPropagation()
                };

            function f(e) {
                var t = e.url,
                    n = e.msg;
                return (0, c.jsx)(o.default, {
                    url: t,
                    className: s.default.mediaViewerAudio,
                    onClick: d,
                    autoPlay: !0,
                    msg: n,
                    controls: !0,
                    children: r.default.t(149)
                })
            }

            function h() {
                return (0, c.jsx)("div", {
                    className: (0, i.default)(s.default.imageAudio, s.default.mediaViewerPlaceholder),
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
                    B = e.onStarClick,
                    G = e.openForwardFlow,
                    F = e.onMsgInfoClick,
                    V = (0, u.useRef)(null),
                    U = (0, d.useModelValues)(e.msg, ["id", "star", "isGroupMsg", "chat", "type", "isGif", "isViewOnce", "sender", "senderObj", "t", "isSentByMe", "isStickerMsg", "broadcastId"]),
                    H = (0, d.useModelValues)(e.mediaData, ["filehash", "mediaStage", "renderableUrl"]),
                    q = (0, u.useState)(null),
                    W = (0, i.default)(q, 2),
                    Y = W[0],
                    z = W[1],
                    K = (0, u.useRef)(null),
                    X = function() {
                        z(null)
                    };
                (0, c.useListener)(V.current, "animationend", (function() {
                    t()
                }));
                var Z = U.displayName(!0, !0);
                U.isGroupMsg && (Z += " @ " + U.chat.title());
                var $, Q = function() {
                        return U.chat.isGroup ? s.fbt._("Report group", null, {
                            hk: "23NLqw"
                        }) : x.default.t(715, {
                            contactInfo: U.senderObj.displayName
                        })
                    },
                    J = function(e) {
                        var t = U.chat;
                        t && (e ? t.isGroup ? (0, M.sendSpamExitClear)(t, T.SpamFlow.MediaViewer) : (0, M.sendSpamBlockClear)(t, T.SpamFlow.MediaViewer) : (0, M.sendSpamReport)(t, T.SpamFlow.MediaViewer)), h.Cmd.closeModal()
                    },
                    ee = function() {
                        h.Cmd.openModal((0, A.jsx)(I.default, {
                            isBusiness: U.senderObj.isBusiness,
                            isGroup: U.chat.isGroup,
                            onReport: J,
                            onCancel: function() {
                                return h.Cmd.closeModal()
                            },
                            title: Q()
                        }))
                    },
                    te = function() {
                        (0, j.default)(U)
                    },
                    ne = function() {
                        return !U.isViewOnce && (!!H.renderableUrl || H.mediaStage === _.MEDIA_DATA_STAGE.RESOLVED)
                    },
                    ae = function() {
                        var e = [];
                        return (U.canPrivateReply() || U.canPrivateReplyInRestrictedGrp()) && e.push((0, A.jsx)(v.DropdownItem, {
                            a8n: "mi-msg-reply",
                            action: te,
                            children: s.fbt._("Reply privately", null, {
                                hk: "1XQeK2"
                            })
                        }, "private_reply")), U.isViewOnce ? e.push((0, A.jsx)(v.DropdownItem, {
                            action: ee,
                            children: Q()
                        }, "dropdownMsgInfo")) : (U.isSentByMe && e.push((0, A.jsx)(v.DropdownItem, {
                            action: F,
                            children: x.default.t(610)
                        }, "dropdownMsgInfo")), e.push((0, A.jsx)(v.DropdownItem, {
                            action: N,
                            children: s.fbt._("Go to message", null, {
                                hk: "B1anG"
                            })
                        }, "dropdownGoToMsg"), (0, A.jsx)(v.DropdownItem, {
                            action: D,
                            disabled: !ne(),
                            children: s.fbt._("Download", null, {
                                hk: "1g5Jix"
                            })
                        }, "dropdownDownload"))), (0, A.jsx)(b.MenuBarItem, {
                            icon: (0, A.jsx)(E.default, {
                                name: "menu"
                            }),
                            title: x.default.t(604),
                            children: (0, A.jsx)(m.Dropdown, {
                                type: "dropdown_menu",
                                flipOnRTL: !0,
                                dirX: m.DirX.LEFT,
                                children: e
                            }, "MediaPanelHeaderDropdown")
                        }, "btnMenu")
                    },
                    ie = function() {
                        var e, t, n;
                        return U.star ? (e = L, t = "unstar-btn", n = x.default.t(789)) : (e = B, t = "star-btn", n = x.default.t(765)), (0, A.jsx)(b.MenuBarItem, {
                            icon: (0, A.jsx)(E.default, {
                                name: t
                            }),
                            title: n,
                            onClick: e
                        }, t)
                    },
                    le = function() {
                        return U.type === o.MSG_TYPE.STICKER ? null : (0, A.jsx)(b.MenuBarItem, {
                            icon: (0, A.jsx)(E.default, {
                                containerRef: K,
                                name: "reactions-media",
                                width: 20
                            }),
                            title: s.fbt._("React to message", null, {
                                hk: "1MagBh"
                            }),
                            onClick: function() {
                                ! function() {
                                    if ((0, r.canReactToMessage)(U)) {
                                        var e = {
                                            dirY: m.DirY.BOTTOM,
                                            dirX: m.DirX.CENTER,
                                            type: "reaction_send_tray",
                                            menu: (0, A.jsx)(y.SendReactionsTrayContainer, {
                                                msg: U,
                                                selectedCallback: function(e) {
                                                    e !== S.MORE_REACTIONS && (0, k.sendReactionToMsg)(U, e).catch((function(e) {
                                                        __LOG__(4, void 0, new Error)`sendReactionMsg: error sending from media modal ${e}`
                                                    })), X()
                                                }
                                            }),
                                            flipOnRTL: !1,
                                            anchor: K.current
                                        };
                                        z(e)
                                    }
                                }()
                            }
                        }, "btnAddReaction")
                    },
                    oe = function() {
                        return (0, A.jsx)(b.MenuBarItem, {
                            icon: (0, A.jsx)(E.default, {
                                name: "forward"
                            }),
                            title: x.default.t(465),
                            onClick: G
                        }, "btnForward")
                    };
                Y && ($ = (0, A.jsx)(P.UIE, {
                    displayName: "MsgReaction",
                    escapable: !0,
                    popable: !0,
                    requestDismiss: X,
                    children: (0, A.jsx)(w.default, {
                        contextMenu: Y
                    })
                }));
                return (0, A.jsxs)("div", {
                    className: C.default.mediaPanelHeader,
                    children: [(0, A.jsx)("div", {
                        className: C.default.info,
                        children: (0, A.jsx)(f.default, {
                            idle: !0,
                            image: (0, A.jsx)(p.DetailImage, {
                                id: U.sender,
                                size: 40
                            }),
                            primary: (0, A.jsx)(g.EmojiText, {
                                ellipsify: !0,
                                text: Z
                            }),
                            secondary: l.Clock.relativeDateAndTimeStr(U.t),
                            theme: "media"
                        })
                    }), (0, A.jsx)("div", {
                        className: C.default.mediaPanelTools,
                        children: (0, A.jsxs)(b.MenuBar, {
                            theme: "strong",
                            children: [U.isViewOnce ? [(0, A.jsx)(b.MenuBarItem, {
                                icon: (0, A.jsx)(E.default, {
                                    name: "view-once",
                                    className: C.default.voIcon
                                }),
                                title: s.fbt._("View once info", null, {
                                    hk: "47XkZ4"
                                }),
                                onClick: a
                            }, "btnViewOnceInfo"), ae()] : n >= 0 ? [U.canReply() ? (0, A.jsx)(b.MenuBarItem, {
                                icon: (0, A.jsx)(E.default, {
                                    name: "reply"
                                }),
                                title: s.fbt._("Reply", null, {
                                    hk: "1C7DPa"
                                }),
                                onClick: O
                            }, "btnReply") : null, U.canStar() ? ie() : null, (0, r.canReactToMessage)(U) ? le() : null, (0, A.jsx)(b.MenuBarItem, {
                                icon: (0, A.jsx)(E.default, {
                                    name: "delete"
                                }),
                                title: s.fbt._("Delete", null, {
                                    hk: "2KhPUX"
                                }),
                                onClick: R
                            }, "btnDelete"), U.canForward() ? oe() : null, ae()].filter(Boolean) : (re = [], U.isStickerMsg || re.push((0, A.jsx)(b.MenuBarItem, {
                                icon: (0, A.jsx)(E.default, {
                                    name: "bubble"
                                }),
                                title: s.fbt._("Go to message", null, {
                                    hk: "B1anG"
                                }),
                                onClick: N
                            }, "btnGoToMsg")), U.isStickerMsg && re.push((0, A.jsx)(b.MenuBarItem, {
                                icon: (0, A.jsx)(E.default, {
                                    name: "reply"
                                }),
                                title: s.fbt._("Reply", null, {
                                    hk: "1C7DPa"
                                }),
                                onClick: O
                            }, "btnReplyToMsg")), U.canStar() && re.push(ie()), U.isStickerMsg && re.push((0, A.jsx)(b.MenuBarItem, {
                                icon: (0, A.jsx)(E.default, {
                                    name: "delete"
                                }),
                                title: s.fbt._("Delete", null, {
                                    hk: "2KhPUX"
                                }),
                                onClick: R
                            }, "btnDelete")), (0, r.canReactToMessage)(U) && re.push(le()), U.canForward() && re.push(oe()), U.isStickerMsg || re.push((0, A.jsx)(b.MenuBarItem, {
                                icon: (0, A.jsx)(E.default, {
                                    name: "download"
                                }),
                                title: s.fbt._("Download", null, {
                                    hk: "1g5Jix"
                                }),
                                disabled: !ne(),
                                onClick: D
                            }, "btnDownload")), re.filter(Boolean)), (0, A.jsx)(b.MenuBarItem, {
                                a8nText: "btn-close",
                                icon: (0, A.jsx)(E.default, {
                                    className: e.isHighlightClose ? C.default.highlightClose : null,
                                    containerRef: V,
                                    name: "x-viewer"
                                }),
                                title: s.fbt._("Close", null, {
                                    hk: "19Jpec"
                                }),
                                onClick: e.onClose
                            })]
                        }, "media-panel-header")
                    }), $]
                });
                var re
            };
            var i = a(n(63038)),
                l = n(73466),
                o = n(40787),
                r = n(36708),
                s = n(48360),
                u = n(67294),
                c = n(91285),
                d = n(50857),
                f = a(n(88186)),
                h = n(65901),
                p = n(66834),
                m = n(98169),
                v = n(94680),
                g = n(73008),
                x = a(n(9844)),
                C = a(n(69863)),
                _ = n(41655),
                b = n(91823),
                j = a(n(74579)),
                k = n(22242),
                S = n(51898),
                y = n(4931),
                M = n(43329),
                T = n(24170),
                E = a(n(7665)),
                P = n(16835),
                w = a(n(93820)),
                I = a(n(43780)),
                A = n(85893)
        },
        83200: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(67294),
                l = a(n(56720)),
                o = a(n(72127)),
                r = n(50857),
                s = a(n(98870)),
                u = n(27968),
                c = a(n(22935)),
                d = a(n(47251)),
                f = a(n(81309)),
                h = a(n(34424)),
                p = a(n(50507)),
                m = a(n(89115)),
                v = n(65803),
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
                        a = (0, r.useModelValues)(e.mediaData, ["mediaStage", "fullWidth", "fullHeight", "isFirstParty", "stickerPackId", "stickerPackName", "stickerPackPublisher"]),
                        C = (0, i.useRef)(),
                        _ = (0, o.default)(t, C),
                        b = function(e) {
                            var t;
                            null === (t = C.current) || void 0 === t || t.onClick(e)
                        },
                        j = a.isFirstParty ? (0, g.jsx)(s.default, {
                            stickerPackId: a.stickerPackId,
                            onStickerPackView: e.onStickerPackView,
                            stickerPackViewDelay: e.stickerPackViewDelay
                        }) : (0, g.jsx)(v.StickerDetailsStickerPackInfo, {
                            name: a.stickerPackName,
                            publisher: a.stickerPackPublisher,
                            theme: v.Theme.MediaViewer
                        });
                    return (0, g.jsxs)(u.FlexColumn, {
                        align: "center",
                        justify: "center",
                        xstyle: x.container,
                        children: [(0, g.jsx)("div", {
                            className: (0, l.default)(x.container, x.stickerContainer),
                            children: (0, g.jsx)(h.default, {
                                ref: _,
                                width: a.fullWidth,
                                height: a.fullHeight,
                                onZoomIn: e.onImgZoomIn,
                                msg: n,
                                children: (0, g.jsx)(d.default, {
                                    mediaData: a,
                                    placeholderRenderer: function() {
                                        return (0, g.jsx)(m.default, {
                                            size: 376
                                        })
                                    },
                                    downloadMedia: function() {
                                        return null == n ? void 0 : n.downloadMedia({
                                            downloadEvenIfExpensive: !1,
                                            rmrReason: p.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                                            isUserInitiated: !1
                                        })
                                    },
                                    children: function(t) {
                                        return (0, g.jsx)(c.default, {
                                            className: (0, l.default)(f.default.content),
                                            onClick: b,
                                            src: t,
                                            onLoad: e.onLoad
                                        })
                                    }
                                })
                            })
                        }), j]
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
                l = a(n(93913)),
                o = a(n(2205)),
                r = a(n(99842)),
                s = n(36708),
                u = n(8587),
                c = n(67294),
                d = a(n(56720)),
                f = a(n(3228)),
                h = a(n(47934)),
                p = n(98585),
                m = n(98120),
                v = a(n(9844)),
                g = n(41655),
                x = a(n(81309)),
                C = a(n(50507)),
                _ = n(43604),
                b = a(n(58497)),
                j = a(n(47149)),
                k = n(2099),
                S = a(n(61897)),
                y = a(n(61566)),
                M = n(85893),
                T = function(e) {
                    (0, o.default)(n, e);
                    var t = (0, r.default)(n);

                    function n() {
                        var e;
                        (0, i.default)(this, n);
                        for (var a = arguments.length, l = new Array(a), o = 0; o < a; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l))).state = {
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
                    return (0, l.default)(n, [{
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
                                l = a.isGif,
                                o = a.mediaStage === g.MEDIA_DATA_STAGE.RESOLVED || a.streamable && a.isStreamable();
                            o = o || n.isForcingRMR();
                            var r = null,
                                u = k.ReactionBubbleType.MEDIA_ITEM;
                            if (n && (0, s.shouldShowReactionBubble)(n, u) && (r = (0, M.jsx)(j.default, {
                                    msgIds: [n.id.toString()],
                                    reactionBubbleType: u,
                                    reactionBubbleVisible: this.state.displayReactionBubble
                                })), o) {
                                var c, m, C = v.default.t(808);
                                return !this.state.isFullscreenMode && (null == n ? void 0 : n.interactiveAnnotations) && n.interactiveAnnotations.length > 0 && (c = (0, M.jsx)(f.default, {
                                    annotations: n.interactiveAnnotations
                                })), m = l ? (0, M.jsxs)("div", {
                                    className: (0, d.default)(x.default.content),
                                    ref: this._setRefContainer,
                                    children: [(0, M.jsx)(y.default, {
                                        src: a.renderableUrl,
                                        onClick: this.stopPropagation,
                                        autoPlay: !0,
                                        loop: !0,
                                        onLoadedData: i,
                                        children: C
                                    }), c]
                                }) : (0, M.jsx)("div", {
                                    ref: this._setRefContainer,
                                    className: (0, d.default)(x.default.content),
                                    onClick: this.stopPropagation,
                                    children: (0, M.jsx)(_.WrappedMsgVideoPlayer, {
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
                                }), (0, M.jsxs)(b.default, {
                                    type: "scaleDown",
                                    position: "relative",
                                    objectPosition: "relative",
                                    size: this.state.size,
                                    onObjectLoad: this.props.onLoad,
                                    children: [m, r]
                                })
                            }
                            return (0, M.jsxs)(b.default, {
                                type: "scaleDown",
                                position: "relative",
                                objectPosition: "relative",
                                size: {
                                    width: this.props.mediaData.fullWidth,
                                    height: this.props.mediaData.fullHeight
                                },
                                children: [(0, M.jsx)(h.default, {
                                    altText: null !== (e = n.caption) && void 0 !== e ? e : "",
                                    mediaData: a
                                }), r]
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
            var E = function(e) {
                (0, o.default)(n, e);
                var t = (0, r.default)(n);

                function n() {
                    return (0, i.default)(this, n), t.apply(this, arguments)
                }
                return (0, l.default)(n, [{
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
            }((0, S.default)(T, T.CONCERNS));
            t.default = E
        },
        92494: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.onImageLoad,
                    a = e.isAnimatingIn,
                    x = e.onImgZoomIn,
                    U = e.onExitAnimation,
                    X = e.onBack,
                    Q = (0, p.useModelValues)(e.msg, ["id", "star", "isUnsentMedia", "isViewOnce", "isStickerMsg", "chat", "caption", "interactiveAnnotations", "type"]),
                    J = (0, p.useModelValues)(e.mediaData, ["mediaStage", "type", "isGif"]),
                    ee = (0, v.default)(a),
                    te = (0, h.useRef)(null),
                    ne = (0, h.useRef)(null),
                    ae = (0, h.useRef)(null),
                    ie = (0, h.useRef)(null),
                    le = (0, h.useRef)(),
                    oe = (0, h.useRef)(!1),
                    re = (0, h.useRef)(!1),
                    se = (0, h.useRef)(!1),
                    ue = (0, m.default)(V.NUX.EPHEMERAL_VIEW_ONCE_RECEIVER),
                    ce = (0, l.default)(ue, 2),
                    de = ce[0],
                    fe = ce[1],
                    he = Q.isViewOnce && de,
                    pe = (0, h.useState)((function() {
                        return J.mediaStage === R.MEDIA_DATA_STAGE.RESOLVED && e.isAnimatingIn && e.getZoomNode ? e.getZoomNode(Q.id) : null
                    })),
                    me = (0, l.default)(pe, 1)[0],
                    ve = (0, h.useState)(!1),
                    ge = (0, l.default)(ve, 2),
                    xe = ge[0],
                    Ce = ge[1],
                    _e = (0, h.useState)(!1),
                    be = (0, l.default)(_e, 2),
                    je = be[0],
                    ke = be[1],
                    Se = (0, h.useState)(!e.isAnimatingIn),
                    ye = (0, l.default)(Se, 2),
                    Me = ye[0],
                    Te = ye[1],
                    Ee = (0, h.useState)(!1),
                    Pe = (0, l.default)(Ee, 2),
                    we = Pe[0],
                    Ie = Pe[1],
                    Ae = (0, h.useState)(!1),
                    Ne = (0, l.default)(Ae, 2),
                    De = Ne[0],
                    Oe = Ne[1],
                    Re = function() {
                        var e = (0, z.jsx)(F.default, {
                            isPhoto: J.type === I.default.TYPE.IMAGE,
                            onOkClick: function() {
                                fe(), C.Cmd.closeModal()
                            }
                        });
                        C.Cmd.openModal(e)
                    },
                    Le = (0, g.default)((function(e, t) {
                        if (!je) {
                            var n = te.current;
                            if (n) {
                                var a = n.getInsideContainer();
                                if (a && a instanceof HTMLElement) {
                                    var i = n.getOutsideContainer();
                                    if (i && i instanceof HTMLElement) {
                                        var l = n.getTranslatePosition(i, e, t),
                                            o = l.translateX,
                                            r = l.translateY;
                                        (0, c.default)(a, "stop"), (0, c.default)(a, {
                                            translateX: o,
                                            translateY: r,
                                            scale: B.ZOOM_IN_FACTOR
                                        }, {
                                            duration: 0
                                        })
                                    }
                                }
                            }
                        }
                    }));
                (0, h.useEffect)((function() {
                    return __LOG__(2)`MediaViewerModal: Opened`, he && Re(), u.default.focus(ie.current),
                        function() {
                            __LOG__(2)`MediaViewerModal: Closed`, Le.cancel()
                        }
                }), []);
                var Be, Ge, Fe = function() {
                        Q.isViewOnce && (0, P.canMarkPlayed)(Q) && (0, P.markPlayed)(Q)
                    },
                    Ve = function(e) {
                        Fe(), n && n();
                        var t = me,
                            i = e.target;
                        t && i && a && i instanceof HTMLElement && (se.current || (se.current = !0, function(e, t) {
                            var n, a = t.getBoundingClientRect(),
                                i = e.getBoundingClientRect(),
                                l = i.top - a.top,
                                o = i.left - a.left,
                                r = e.clientWidth / t.clientWidth;
                            l -= (t.clientHeight - e.clientHeight) / 2, o -= (t.clientWidth - e.clientWidth) / 2, (0, c.default)(t, {
                                opacity: [1, 0],
                                translateX: [0, o],
                                translateY: [0, l],
                                scale: [1, r]
                            }, {
                                duration: B.ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            });
                            var s = null === (n = ae.current) || void 0 === n ? void 0 : n.getContainerElement();
                            s && (0, c.default)(s, {
                                opacity: [1, 0]
                            }, {
                                duration: B.ANIMATION_DURATION
                            })
                        }(t, i)))
                    },
                    Ue = function() {
                        var t;
                        if (!oe.current) {
                            oe.current = !0, (0, r.isFunction)(U) && U();
                            var n, a = e.getZoomNode && e.getZoomNode(Q.id);
                            if (!a) return X();
                            var i, l = J.type;
                            if ([I.default.TYPE.IMAGE, I.default.TYPE.STICKER].includes(l) && te.current) n = te.current.getInsideContainer(), null === (i = te.current) || void 0 === i || i.closingMediaZoomable();
                            else if (J.isGif && ne.current) {
                                var o;
                                n = ne.current.getContainerElement(), null === (o = ne.current) || void 0 === o || o.closingMedia()
                            }
                            if (!n) return X();
                            var s = n,
                                u = n.getBoundingClientRect(),
                                d = a.getBoundingClientRect(),
                                f = d.top - u.top,
                                h = d.left - u.left,
                                p = a.clientWidth / s.clientWidth;
                            f -= (s.clientHeight - a.clientHeight) / 2, h -= (s.clientWidth - a.clientWidth) / 2, (0, c.default)(n, {
                                translateX: [h, 0],
                                translateY: [f, 0],
                                scale: [p, 1]
                            }, {
                                duration: B.CLOSE_ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            }).then((function() {
                                X()
                            }));
                            var m = null === (t = ae.current) || void 0 === t ? void 0 : t.getContainerElement();
                            m && (0, c.default)(m, {
                                opacity: [0, 1]
                            }, {
                                duration: B.CLOSE_ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            })
                        }
                    },
                    He = function(e) {
                        var t = te.current;
                        e && t && (re.current = t.heightOverflow > 0 || t.widthOverflow > 0), Ce(e), x(e)
                    },
                    qe = function(e) {
                        e.stopPropagation(), Ie(!we)
                    };
                switch ((0, h.useEffect)((function() {
                        a || Me || !ee || Te(!0)
                    }), [a, Me, ee]), J.type) {
                    case I.default.TYPE.IMAGE:
                        Be = (0, z.jsx)(A.default, {
                            msg: Q,
                            mediaData: J,
                            onLoad: Ve,
                            onImgZoomIn: He,
                            onAnnotationTooltipDisplay: function() {
                                ke(!0)
                            },
                            onAnnotationTooltipDismiss: function() {
                                ke(!1)
                            },
                            preventDownload: Q.isViewOnce,
                            ref: te
                        }, Q.id.toString());
                        break;
                    case I.default.TYPE.STICKER:
                        Be = (0, z.jsx)(O.default, {
                            msg: Q,
                            mediaData: J,
                            onLoad: Ve,
                            onImgZoomIn: He,
                            onStickerPackView: Ue,
                            stickerPackViewDelay: B.CLOSE_ANIMATION_DURATION,
                            ref: te
                        }, Q.id.toString());
                        break;
                    case I.default.TYPE.VIDEO:
                        Be = (0, z.jsx)(L.default, {
                            autoPlay: !he,
                            msg: Q,
                            mediaData: J,
                            onLoadedData: J.isGif ? Ve : Fe,
                            startTime: e.startTime,
                            onClose: Ue,
                            ref: ne
                        }, Q.id.toString());
                        break;
                    case I.default.TYPE.AUDIO:
                        Be = (0, z.jsx)(w.default, {
                            mediaData: J,
                            msg: Q
                        }, Q.id.toString());
                        break;
                    default:
                        __LOG__(4, void 0, new Error, !0)`type: ${J.type}`, SEND_LOGS("MediaViewerModal: unexpected media type")
                }
                var We = e.msgIndexInAlbum >= 0 && e.albumSize >= 0;
                if (Q.caption || We) {
                    var Ye, ze;
                    We && (ze = E.default.t(680, {
                        number: e.msgIndexInAlbum + 1,
                        totalNumber: e.albumSize
                    }));
                    var Ke = S.Configuration.Conversation({
                            mentions: Q.mentionMap(),
                            phoneNumbers: Q.getPhoneNumbers(),
                            links: Q.getLinks(),
                            trusted: !0
                        }),
                        Xe = !Me && (J.isGif || J.type === I.default.TYPE.IMAGE);
                    Ge = (0, z.jsxs)(z.Fragment, {
                        children: [(0, z.jsxs)("p", {
                            className: (0, d.default)(G.default.captionWrapper, le.current && G.default.captionWrapperExpandable),
                            onClick: le.current ? qe : void 0,
                            title: le.current ? f.fbt._("Read more", null, {
                                hk: "2DvSvh"
                            }) : void 0,
                            "aria-hidden": we || void 0,
                            children: [(0, z.jsx)(k.EmojiText, {
                                className: (0, d.default)(G.default.mediaCaption, (Ye = {}, (0, i.default)(Ye, G.default.captionHidden, Xe), (0, i.default)(Ye, G.default.expanded, we), Ye)),
                                formatters: Ke,
                                ref: function(e) {
                                    ae.current = e
                                },
                                text: Q.caption || ze
                            }), le.current && (0, z.jsx)(Y.default, {
                                xstyle: [K.captionReadMoreBtn, we && K.captionReadMoreBtnExpanded, xe && K.captionReadMoreBtnZoomed],
                                onClick: qe,
                                children: (0, z.jsx)(q.TextSpan, {
                                    children: f.fbt._("Read more", null, {
                                        hk: "2DvSvh"
                                    })
                                })
                            })]
                        }), we && (0, z.jsx)("p", {
                            className: (0, d.default)(G.default.captionWrapper, G.default.captionWrapperExpandable, G.default.captionExpanded),
                            onClick: qe,
                            children: (0, z.jsx)(k.EmojiText, {
                                className: (0, d.default)(G.default.mediaCaption, G.default.mediaCaptionExpanded),
                                formatters: Ke,
                                text: Q.caption
                            })
                        })]
                    })
                }
                var Ze = (0, d.default)(G.default.media, (0, i.default)({}, G.default.mediaWithCaption, !!Ge)),
                    $e = (0, d.default)("overlay", G.default.mediaViewer, (t = {}, (0, i.default)(t, G.default.noThumbnails, Q.isViewOnce || Q.isStickerMsg), (0, i.default)(t, G.default.mediaViewerAnimate, e.isAnimatingIn), (0, i.default)(t, G.default.cursorZoomOut, xe), t)),
                    Qe = xe && re.current ? function(e) {
                        Le(e.pageX, e.pageY)
                    } : null,
                    Je = xe ? function(e) {
                        Le.cancel();
                        var t = te.current;
                        t && xe && t.onClick(e)
                    } : null,
                    et = xe ? null : Ue;
                null != et && Q.isViewOnce && (et = function() {
                    Oe(!0)
                });
                var tt = !Q.isViewOnce && !Q.isStickerMsg;
                return (0, z.jsx)(W.UIE, {
                    displayName: "MediaViewer",
                    escapable: !0,
                    requestDismiss: Ue,
                    children: (0, z.jsx)(T.HotKeys, {
                        handlers: {
                            space: function(e) {
                                if (!a) {
                                    Le.cancel();
                                    var t = te.current;
                                    null != t && t.onKeyboardZoom(e)
                                }
                            }
                        },
                        ref: ie,
                        children: (0, z.jsxs)("div", {
                            className: $e,
                            "data-animate-media-viewer": !0,
                            "data-testid": "media-viewer-modal",
                            onClick: Je,
                            onMouseMove: Qe,
                            children: [(0, z.jsx)(N.default, {
                                isHighlightClose: De,
                                msg: Q,
                                mediaData: J,
                                onClose: Ue,
                                onGoToMsgClick: function(e) {
                                    e.stopPropagation(), Ue(), C.Cmd.existsDrawerRight((function(e) {
                                        e && 2 === _.Column.column && C.Cmd.closeDrawerRight()
                                    }));
                                    var t = Q.chat.getSearchContext((0, H.unproxy)(Q));
                                    C.Cmd.openChatAt(Q.chat, t).then((function(e) {
                                        e && C.Cmd.focusChatTextInput(Q.chat)
                                    }))
                                },
                                onHightlightCloseEnd: function() {
                                    Oe(!1)
                                },
                                onReplyClick: function() {
                                    Ue(), (0, o.delayMs)(B.CLOSE_ANIMATION_DURATION).then(Z.bind(null, (0, H.unproxy)(Q)))
                                },
                                onUnstarClick: function(e) {
                                    e.stopPropagation(), C.Cmd.sendUnstarMsgs(Q.chat, [(0, H.unproxy)(Q)])
                                },
                                onStarClick: function(e) {
                                    e.stopPropagation(), C.Cmd.sendStarMsgs(Q.chat, [(0, H.unproxy)(Q)])
                                },
                                onDeleteClick: function() {
                                    C.Cmd.openModal((0, z.jsx)(j.default, {
                                        chat: Q.chat,
                                        msgList: [(0, H.unproxy)(Q)],
                                        onDelete: Ue
                                    }))
                                },
                                openForwardFlow: function(e) {
                                    e.stopPropagation(), Q.isUnsentMedia ? C.Cmd.openModal((0, z.jsx)(b.default, {
                                        title: E.default.t(455),
                                        onOK: function() {
                                            return C.Cmd.closeModal()
                                        },
                                        okText: f.fbt._("OK", null, {
                                            hk: "2KEeHb"
                                        }),
                                        children: E.default.t(452)
                                    })) : C.Cmd.openModal((0, z.jsx)(y.ForwardMessageFlowLoadable, {
                                        msgs: [(0, H.unproxy)(Q)]
                                    }), {
                                        transition: "modal-flow"
                                    })
                                },
                                onDownloadClick: function(e) {
                                    e.stopPropagation(), s.FileSaver.initDownload((0, H.unproxy)(Q))
                                },
                                onMsgInfoClick: function() {
                                    Ue(), (0, o.delayMs)(B.CLOSE_ANIMATION_DURATION + 250).then(C.Cmd.msgInfoDrawer.bind(C.Cmd, (0, H.unproxy)(Q)))
                                },
                                onViewOnceInfoClick: function() {
                                    Re()
                                },
                                msgIndexInAlbum: e.msgIndexInAlbum
                            }), (0, z.jsx)("div", {
                                className: (0, d.default)(G.default.mediaContent, (0, i.default)({}, G.default.sticker, Q.isStickerMsg)),
                                onClick: et,
                                children: (0, z.jsx)($, {
                                    hasNavigationButtons: tt,
                                    onNext: e.onNext,
                                    onPrev: e.onPrev,
                                    imgZoomed: xe,
                                    children: (0, z.jsxs)("div", {
                                        className: Ze,
                                        children: [(0, z.jsx)(D.default, {
                                            msg: Q,
                                            mediaData: J
                                        }), Be, (0, z.jsx)(M.default.Provider, {
                                            value: Q.chat.groupMetadata,
                                            children: Ge
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                })
            };
            var i = a(n(59713)),
                l = a(n(63038)),
                o = n(45121),
                r = n(43393),
                s = n(55080),
                u = a(n(11845)),
                c = a(n(69760)),
                d = a(n(94184)),
                f = n(48360),
                h = n(67294),
                p = (a(n(56720)), n(50857)),
                m = a(n(52574)),
                v = a(n(79787)),
                g = a(n(75967)),
                x = n(23145),
                C = n(65901),
                _ = n(70593),
                b = a(n(86777)),
                j = a(n(70428)),
                k = n(73008),
                S = n(59333),
                y = n(49196),
                M = a(n(30588)),
                T = n(32012),
                E = a(n(9844)),
                P = n(1435),
                w = a(n(53304)),
                I = a(n(72397)),
                A = a(n(67788)),
                N = a(n(17044)),
                D = a(n(65729)),
                O = a(n(83200)),
                R = n(41655),
                L = a(n(51751)),
                B = n(21065),
                G = a(n(25816)),
                F = a(n(7520)),
                V = n(15849),
                U = n(80385),
                H = n(68220),
                q = n(22552),
                W = n(16835),
                Y = a(n(76080)),
                z = n(85893),
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
                t.composeQuotedMsg = e, C.Cmd.focusChatTextInput(t)
            }

            function $(e) {
                var t, n, a, i;
                return (0, z.jsxs)(z.Fragment, {
                    children: [e.hasNavigationButtons && (0, z.jsx)("div", {
                        className: (0, d.default)(G.default.btnMediaPrev),
                        children: (0, z.jsx)("div", {
                            onClick: e.onPrev ? null : X,
                            children: (0, z.jsx)(x.ChevronButton, {
                                type: x.ButtonType.Prev,
                                onClick: null !== (t = e.onPrev) && void 0 !== t ? t : void 0,
                                onKeyDown: null !== (n = e.onPrev) && void 0 !== n ? n : void 0,
                                disabled: !e.onPrev || e.imgZoomed,
                                theme: U.RoundTheme.Default
                            })
                        })
                    }), e.children, e.hasNavigationButtons && (0, z.jsx)("div", {
                        className: (0, d.default)(G.default.btnMediaNext),
                        children: (0, z.jsx)("div", {
                            onClick: e.onPrev ? null : X,
                            children: (0, z.jsx)(x.ChevronButton, {
                                type: x.ButtonType.Next,
                                onClick: null !== (a = e.onNext) && void 0 !== a ? a : void 0,
                                onKeyDown: null !== (i = e.onNext) && void 0 !== i ? i : void 0,
                                disabled: !e.onNext || e.imgZoomed,
                                theme: U.RoundTheme.Default
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
                    b = (0, r.default)((function() {
                        var e = v();
                        (0, l.default)(C, e) || _(e)
                    }), 100),
                    j = function() {
                        var e = a && a.size > 0 && a.has(f.id.toString()),
                            n = [];
                        return t.forEach((function(t) {
                            if (null != t.mediaData) {
                                var i = e && a && !a.has(t.id.toString()) ? "viewerFlowTransparent" : "viewerFlow";
                                n.push((0, d.jsx)(s.MediaThumb, {
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
                                var l = f;
                                __LOG__(3, !0)`MediaViewerFlow: attempted to render a msg without mediaData: ${JSON.stringify({type:t.type,isMedia:t.isMedia,startMsgType:l.type,startMsgIsMedia:l.isMedia})}`
                            }
                        })), n.push((0, d.jsx)("div", {
                            className: u.default.mediaThumb,
                            children: t.queryMediaAfter ? (0, d.jsx)(c.Spinner, {
                                stroke: 6,
                                size: 24
                            }) : null
                        }, "spinner-right")), n.unshift((0, d.jsx)("div", {
                            className: u.default.mediaThumb,
                            children: t.queryMediaBefore ? (0, d.jsx)(c.Spinner, {
                                stroke: 6,
                                size: 24
                            }) : null
                        }, "spinner-left")), n.push((0, d.jsx)("div", {
                            className: u.default.thumbPadding
                        }, "padding-right")), n.unshift((0, d.jsx)("div", {
                            className: u.default.thumbPadding
                        }, "padding-left")), n
                    }();
                return (0, d.jsx)("div", {
                    className: u.default.thumbsContainer,
                    ref: e.setRefThumbsContainer,
                    children: (0, d.jsx)("div", {
                        className: u.default.scrollContainer,
                        dir: "ltr",
                        children: (0, d.jsx)("div", {
                            onScroll: function(e) {
                                b(), n(e)
                            },
                            className: u.default.viewerThumbs,
                            ref: e.setRefThumbs,
                            children: j
                        })
                    })
                })
            };
            var i = a(n(63038)),
                l = a(n(55713)),
                o = n(67294),
                r = a(n(75967)),
                s = n(19499),
                u = a(n(28437)),
                c = n(85651),
                d = n(85893)
        },
        7520: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onOkClick;
                return (0, p.jsx)(r.default, {
                    onOK: t,
                    cancelText: d.default.t(547),
                    onCancel: function() {
                        (0, s.openExternalLink)((0, i.getViewOnceFaqUrl)())
                    },
                    children: (0, p.jsxs)(u.FlexColumn, {
                        children: [(0, p.jsx)(c.default, {
                            xstyle: m.graphic,
                            align: "center",
                            children: (0, p.jsx)(f.default, {
                                name: "view-once-sender-nux",
                                width: 195,
                                height: 177
                            })
                        }), (0, p.jsx)(h.TextHeader, {
                            className: (0, o.default)(m.text),
                            theme: "popup-title",
                            children: e.isPhoto ? l.fbt._("This photo is set to view once", null, {
                                hk: "2H7aHc"
                            }) : l.fbt._("This video is set to view once", null, {
                                hk: "1w8WFf"
                            })
                        }), (0, p.jsx)(h.TextParagraph, {
                            className: (0, o.default)(m.text),
                            children: e.isPhoto ? l.fbt._("For more privacy, this photo will disappear after you close it.", null, {
                                hk: "1XZPqi"
                            }) : l.fbt._("For more privacy, this video will disappear after you close it.", null, {
                                hk: "3YgUHE"
                            })
                        })]
                    })
                })
            };
            var i = n(8917),
                l = n(48360),
                o = a(n(56720)),
                r = a(n(86777)),
                s = n(49012),
                u = n(27968),
                c = a(n(69520)),
                d = a(n(9844)),
                f = a(n(7665)),
                h = n(22552),
                p = n(85893),
                m = {
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
                        r.Cmd.closeModal()
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
                    okText: l.fbt._("Confirm", null, {
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
                l = n(48360),
                o = n(67294),
                r = n(65901),
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
                e.isGroup ? (t = l.fbt._("The last 5 messages from this group will be forwarded to WhatsApp.", null, {
                    hk: "40tFfL"
                }), n = l.fbt._("No one in this group will be notified.", null, {
                    hk: "1qLvih"
                }), a = l.fbt._("Exit group", null, {
                    hk: "4BkPNr"
                })) : e.isBusiness ? (t = l.fbt._("The last 5 messages from this business will be forwarded to WhatsApp.", null, {
                    hk: "1Xa0bG"
                }), n = l.fbt._("This business will not be notified.", null, {
                    hk: "2Lbwbg"
                }), a = l.fbt._("Block business", null, {
                    hk: "3hFIF3"
                })) : (t = l.fbt._("The last 5 messages from this contact will be forwarded to WhatsApp.", null, {
                    hk: "2YNTpM"
                }), n = l.fbt._("This contact will not be notified.", null, {
                    hk: "172yrT"
                }), a = l.fbt._("Block contact", null, {
                    hk: "41X9mL"
                }));
                return (0, d.jsxs)(s.default, {
                    onOK: function() {
                        e.onReport(m)
                    },
                    okText: l.fbt._("Report", null, {
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
                        children: [(0, d.jsx)(r.CheckBox, {
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
                l = n(48360),
                o = n(67294),
                r = (a(n(56720)), n(91404)),
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
        4318: (e, t, n) => {
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
                noPointerEvents: "_2_6x8",
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