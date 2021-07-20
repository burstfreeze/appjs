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
                                l = {
                                    scroll: e.scroll || e.scrollTo,
                                    scrollBy: e.scrollBy,
                                    elementScroll: n.prototype.scroll || r,
                                    scrollIntoView: n.prototype.scrollIntoView
                                },
                                o = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now,
                                i = (a = e.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(a) ? 1 : 0);
                            e.scroll = e.scrollTo = function() {
                                void 0 !== arguments[0] && (!0 !== u(arguments[0]) ? m.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : l.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset))
                            }, e.scrollBy = function() {
                                void 0 !== arguments[0] && (u(arguments[0]) ? l.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : m.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset)))
                            }, n.prototype.scroll = n.prototype.scrollTo = function() {
                                if (void 0 !== arguments[0])
                                    if (!0 !== u(arguments[0])) {
                                        var e = arguments[0].left,
                                            t = arguments[0].top;
                                        m.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                                    } else {
                                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                        l.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                    }
                            }, n.prototype.scrollBy = function() {
                                void 0 !== arguments[0] && (!0 !== u(arguments[0]) ? this.scroll({
                                    left: ~~arguments[0].left + this.scrollLeft,
                                    top: ~~arguments[0].top + this.scrollTop,
                                    behavior: arguments[0].behavior
                                }) : l.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                            }, n.prototype.scrollIntoView = function() {
                                if (!0 !== u(arguments[0])) {
                                    var a = f(this),
                                        n = a.getBoundingClientRect(),
                                        o = this.getBoundingClientRect();
                                    a !== t.body ? (m.call(this, a, a.scrollLeft + o.left - n.left, a.scrollTop + o.top - n.top), "fixed" !== e.getComputedStyle(a).position && e.scrollBy({
                                        left: n.left,
                                        top: n.top,
                                        behavior: "smooth"
                                    })) : e.scrollBy({
                                        left: o.left,
                                        top: o.top,
                                        behavior: "smooth"
                                    })
                                } else l.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                            }
                        }

                        function r(e, t) {
                            this.scrollLeft = e, this.scrollTop = t
                        }

                        function u(e) {
                            if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                            if ("object" == typeof e && "smooth" === e.behavior) return !1;
                            throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function s(e, t) {
                            return "Y" === t ? e.clientHeight + i < e.scrollHeight : "X" === t ? e.clientWidth + i < e.scrollWidth : void 0
                        }

                        function d(t, a) {
                            var n = e.getComputedStyle(t, null)["overflow" + a];
                            return "auto" === n || "scroll" === n
                        }

                        function c(e) {
                            var t = s(e, "Y") && d(e, "Y"),
                                a = s(e, "X") && d(e, "X");
                            return t || a
                        }

                        function f(e) {
                            for (; e !== t.body && !1 === c(e);) e = e.parentNode || e.host;
                            return e
                        }

                        function p(t) {
                            var a, n, l, i, r = (o() - t.startTime) / 468;
                            i = r = r > 1 ? 1 : r, a = .5 * (1 - Math.cos(Math.PI * i)), n = t.startX + (t.x - t.startX) * a, l = t.startY + (t.y - t.startY) * a, t.method.call(t.scrollable, n, l), n === t.x && l === t.y || e.requestAnimationFrame(p.bind(e, t))
                        }

                        function m(a, n, i) {
                            var u, s, d, c, f = o();
                            a === t.body ? (u = e, s = e.scrollX || e.pageXOffset, d = e.scrollY || e.pageYOffset, c = l.scroll) : (u = a, s = a.scrollLeft, d = a.scrollTop, c = r), p({
                                scrollable: u,
                                method: c,
                                startTime: f,
                                startX: s,
                                startY: d,
                                x: n,
                                y: i
                            })
                        }
                    }
                }
            }()
        },
        61934: (e, t, a) => {
            "use strict";
            var n = a(60077).default,
                l = a(20862),
                o = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setGroupDesc = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return h((0, m.unproxy)(e), t)
            };
            var i = o(a(67294)),
                r = a(83180),
                u = o(a(34541)),
                s = a(14650),
                d = l(a(98569)),
                c = o(a(89115)),
                f = a(9578),
                p = o(a(75554)),
                m = a(89305);

            function h(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, r.genId)(),
                    l = t && t.trim();
                if (l === e.groupMetadata.desc) return n.reject(new d.ActionError);
                "" === l && (l = null);
                var o = (0, f.sendSetGroupDescription)(e.id, l, (0, p.default)(), e.groupMetadata.descId),
                    m = e.groupMetadata.desc,
                    v = new r.ActionType(c.default.t(105)),
                    g = o.then((function() {
                        return new r.ActionType(c.default.t(107), {
                            actionText: c.default.t(205),
                            actionHandler: function() {
                                return h(e, m, a)
                            }
                        })
                    })).catchType(s.ServerStatusCodeError, (function(e) {
                        if (e.status >= 400) return new r.ActionType(c.default.t(106))
                    })).catch((function() {
                        return __LOG__(3)`models:chat:setGroupDesc dropped`, new r.ActionType(c.default.t(106), {
                            actionText: c.default.t(201),
                            actionHandler: function() {
                                return h(e, l, a)
                            }
                        })
                    }));
                return u.default.openToast(i.default.createElement(r.ActionToast, {
                    id: a,
                    initialAction: v,
                    pendingAction: g
                })), o.then((function(t) {
                    t._duplicate || e.groupMetadata.set({
                        desc: l || ""
                    })
                })).catchType(s.ServerStatusCodeError, (function() {}))
            }
        },
        31914: (e, t, a) => {
            "use strict";
            var n = a(60077).default,
                l = a(20862),
                o = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setGroupSubject = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return h((0, p.unproxy)(e), t)
            };
            var i = o(a(67294)),
                r = a(83180),
                u = o(a(34541)),
                s = a(14650),
                d = l(a(98569)),
                c = o(a(89115)),
                f = a(9578),
                p = a(89305),
                m = a(29846);

            function h(e, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, r.genId)(),
                    l = t.trim();
                if (!l) return n.reject(new d.ActionError);
                if (l === e.contact.name) return n.reject(new d.ActionError);
                var o = (0, f.sendSetGroupSubject)(e.id, l),
                    p = e.contact.name,
                    v = new r.ActionType(c.default.t(125)),
                    g = o.then((function() {
                        return new r.ActionType(c.default.t(124, {
                            subject: l
                        }), {
                            actionText: c.default.t(205),
                            actionHandler: function() {
                                return h(e, p, a)
                            }
                        })
                    })).catchType(s.ServerStatusCodeError, (function(e) {
                        if (e.status >= 400) return new r.ActionType(c.default.t(123))
                    })).catch((function() {
                        return __LOG__(3)`models:chat:setSubject dropped`, new r.ActionType(c.default.t(123), {
                            actionText: c.default.t(201),
                            actionHandler: function() {
                                return h(e, l, a)
                            }
                        })
                    }));
                return u.default.openToast(i.default.createElement(r.ActionToast, {
                    id: a,
                    initialAction: v,
                    pendingAction: g
                })), o.then((function(t) {
                    if (!t._duplicate) {
                        var a = {
                            name: l
                        };
                        return (0, m.updateLocal)(e.contact.id, a).then((function() {
                            e.contact.set(a)
                        }))
                    }
                })).catchType(s.ServerStatusCodeError, (function() {}))
            }
        },
        54634: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                s = n(a(67294)),
                d = l(a(63637)),
                c = l(a(44589)),
                f = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(l))).contextEnabled = function() {
                            var t = e.props,
                                a = t.contextEnabled,
                                n = t.contact;
                            return null != a && a(n)
                        }, e.onContext = function(t) {
                            var a = e.props,
                                n = a.onContext,
                                l = a.contact;
                            return n && n(t, l)
                        }, e
                    }
                    return (0, i.default)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.contact,
                                a = e.participant,
                                n = e.onClick,
                                l = e.contextMenu,
                                o = e.isPendingParticipant;
                            return s.default.createElement(d.default, {
                                contact: t,
                                admin: a.isAdmin,
                                onClick: n,
                                theme: "drawer-list",
                                contextEnabled: this.contextEnabled,
                                contextMenu: l,
                                onContext: this.onContext,
                                isPendingParticipant: o,
                                showNotifyName: !0,
                                waitIdle: !0
                            })
                        }
                    }]), a
                }(s.Component);
            f.CONCERNS = {
                participant: ["isAdmin"]
            }, f.displayName = "Participant";
            var p = (0, c.default)(f, f.CONCERNS);
            t.default = p
        },
        45463: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(67154)),
                i = l(a(6479)),
                r = l(a(34575)),
                u = l(a(93913)),
                s = l(a(2205)),
                d = l(a(99842)),
                c = n(a(67294)),
                f = a(54654),
                p = l(a(42905)),
                m = l(a(22021)),
                h = l(a(89115)),
                v = l(a(68390)),
                g = l(a(24249)),
                E = l(a(75131)),
                _ = function(e) {
                    (0, s.default)(a, e);
                    var t = (0, d.default)(a);

                    function a() {
                        var e;
                        (0, r.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l)))._setGallery = function(t) {
                            e._gallery = t
                        }, e._queryCollection = function(t, a) {
                            var n = e.props,
                                l = n.docMsgs,
                                o = n.chat;
                            e.props.listeners.uiIdle((function() {
                                l.queryDocs(o, a)
                            }))
                        }, e
                    }
                    return (0, u.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.props.listeners.add(this.props.docMsgs, "add remove reset", (function() {
                                var t;
                                null === (t = e._gallery) || void 0 === t || t.forceUpdate()
                            })), this.props.listeners.add(this.props.docMsgs, "query_doc_before", (function() {
                                var t;
                                null === (t = e._gallery) || void 0 === t || t.forceUpdate()
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.docMsgs,
                                n = (t.listeners, t.chat),
                                l = (0, i.default)(t, ["docMsgs", "listeners", "chat"]);
                            return m.default.supportsFeature(m.default.F.MD_BACKEND) && n.endOfHistoryTransferType === f.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY && (e = c.default.createElement(p.default, {
                                icon: c.default.createElement(E.default, {
                                    name: "content-chat"
                                }),
                                theme: "list",
                                secondary: h.default.t(581)
                            }, h.default.t(582))), c.default.createElement(c.default.Fragment, null, c.default.createElement(g.default, (0, o.default)({
                                ref: this._setGallery,
                                msgsCollection: a,
                                queryCollection: this._queryCollection,
                                hasBefore: a.hasDocBefore,
                                queryBefore: a.queryDocBefore,
                                emptyText: h.default.t(1176),
                                chat: n
                            }, l)), e)
                        }
                    }]), a
                }(c.Component);
            _.displayName = "DocGallery";
            var C = (0, v.default)(_);
            t.default = C
        },
        82745: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = null != e.side ? i.default.createElement("div", {
                        className: u.default.side
                    }, e.side) : null,
                    a = (0, o.default)(u.default.container, (0, l.default)({}, u.default.multiline, e.multiline));
                return i.default.createElement("div", {
                    "data-a8n": r.default.key(e.a8nText),
                    className: a,
                    role: e.onClick ? "button" : null,
                    onClick: e.onClick
                }, i.default.createElement("div", {
                    className: u.default.block
                }, i.default.createElement("div", {
                    className: u.default.main
                }, e.children), t))
            };
            var l = n(a(59713)),
                o = n(a(94184)),
                i = n(a(67294)),
                r = n(a(97930)),
                u = n(a(41323))
        },
        31660: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.chat,
                    a = e.groupMetadata,
                    n = e.onClick;
                return a ? s.default.createElement(N, {
                    groupMetadata: a,
                    onClick: n
                }) : s.default.createElement(M, {
                    chat: t,
                    onClick: n
                })
            }, t.BaseEphemeralSettingRow = T;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                s = n(a(67294)),
                d = a(99703),
                c = l(a(34541)),
                f = l(a(25960)),
                p = l(a(82745)),
                m = l(a(66322)),
                h = l(a(22021)),
                v = a(7617),
                g = l(a(89115)),
                E = l(a(44589)),
                _ = l(a(75131)),
                C = a(28770);
            var S = function(e) {
                (0, r.default)(a, e);
                var t = (0, u.default)(a);

                function a() {
                    var e;
                    (0, o.default)(this, a);
                    for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
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
                        c.default.openModal(s.default.createElement(f.default, {
                            onOK: e._unblockContact,
                            okText: g.default.t(1468),
                            onCancel: e._closeModal,
                            cancelText: g.default.t(1657)
                        }, e._getEphemeralDuration() ? g.default.t(719) : g.default.t(720)))
                    }, e._handleClick = function() {
                        var t = e.props,
                            a = t.chat,
                            n = t.onClick;
                        a.contact.isContactBlocked ? e._openUnblockContactModal() : n()
                    }, e
                }
                return (0, i.default)(a, [{
                    key: "render",
                    value: function() {
                        return s.default.createElement(T, {
                            ephemeralDuration: this._getEphemeralDuration(),
                            canChange: !0,
                            onClick: this._handleClick
                        })
                    }
                }]), a
            }(s.PureComponent);
            S.CONCERNS = {
                chat: ["contact", "ephemeralDuration"]
            }, S.displayName = "ContactEphemeralSettingRow";
            var M = (0, E.default)(S, S.CONCERNS),
                y = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(l)))._closeModal = function() {
                            c.default.closeModal()
                        }, e._openNonAdminModal = function() {
                            c.default.openModal(s.default.createElement(f.default, {
                                onOK: e._closeModal,
                                okText: g.default.t(1826)
                            }, g.default.t(659)))
                        }, e._handleClick = function() {
                            var t = e.props,
                                a = t.onClick;
                            t.groupMetadata.canSetEphemeralSetting() ? a() : e._openNonAdminModal()
                        }, e
                    }
                    return (0, i.default)(a, [{
                        key: "render",
                        value: function() {
                            var e, t = this.props.groupMetadata;
                            return s.default.createElement(T, {
                                ephemeralDuration: null !== (e = t.ephemeralDuration) && void 0 !== e ? e : 0,
                                canChange: t.canSetEphemeralSetting(),
                                onClick: this._handleClick
                            })
                        }
                    }]), a
                }(s.PureComponent);
            y.CONCERNS = {
                groupMetadata: ["ephemeralDuration", "participants"]
            }, y.displayName = "GroupEphemeralSettingRow";
            var N = (0, E.default)(y, y.CONCERNS);

            function T(e) {
                var t, a = e.ephemeralDuration,
                    n = e.canChange,
                    l = e.onClick;
                t = a > 0 ? n ? h.default.isEphemeral24HDurationEnabled() ? (0, v.getEphemeralDurationString)(a) : g.default.t(714) : (0, v.getEphemeralExplanationString)(a) : g.default.t(713);
                var o = s.default.createElement(_.default, {
                    className: n ? m.default.chevronIcon : m.default.ephemeralIcon,
                    name: n ? "chevron-right-alt" : "disappearing",
                    directional: !0
                });
                return s.default.createElement(p.default, {
                    onClick: l,
                    side: o,
                    multiline: !0
                }, s.default.createElement("div", {
                    className: m.default.header
                }, s.default.createElement(C.TextSpan, {
                    theme: "title"
                }, g.default.t(822))), s.default.createElement(C.TextDiv, {
                    theme: "muted"
                }, t))
            }
        },
        63744: (e, t, a) => {
            "use strict";
            var n = a(60077).default,
                l = a(20862),
                o = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = o(a(67154)),
                r = o(a(6479)),
                u = o(a(34575)),
                s = o(a(93913)),
                d = o(a(2205)),
                c = o(a(99842)),
                f = l(a(67294)),
                p = a(54654),
                m = o(a(34263)),
                h = o(a(42905)),
                v = o(a(22021)),
                g = o(a(89115)),
                E = o(a(31710)),
                _ = o(a(68390)),
                C = o(a(24249)),
                S = o(a(52558)),
                M = o(a(75131)),
                y = function(e) {
                    (0, d.default)(a, e);
                    var t = (0, c.default)(a);

                    function a() {
                        var e;
                        (0, u.default)(this, a);
                        for (var l = arguments.length, o = new Array(l), i = 0; i < l; i++) o[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(o)))._setGallery = function(t) {
                            e._gallery = t
                        }, e._onNewMsgs = function(t) {
                            if (t) {
                                var a = [],
                                    l = Array.isArray(t) ? t : [t];
                                n.all(l.map((function(e) {
                                    return e.getLinks().length && a.push(e), n.resolve()
                                }))).then((function() {
                                    a.length && e.props.linkMsgs.add(a)
                                }))
                            }
                        }, e._queryCollection = function(t, a) {
                            var n = e.props,
                                l = n.linkMsgs,
                                o = n.chat;
                            e.props.listeners.uiIdle((function() {
                                l.queryLinks(o, a)
                            }))
                        }, e._renderLinks = function(t) {
                            var a = e.props,
                                n = a.linkMsgs,
                                l = a.selectedMessages,
                                o = [];
                            return n.forEach((function(a) {
                                var n = !a.isSentByMe && a.isGroupMsg;
                                a.getGalleryLinks().forEach((function(i, r) {
                                    i.href !== a.matchedText && o.push(f.default.createElement(E.default, {
                                        key: `${a.id.toString()}-${r}`,
                                        msg: a.safe(),
                                        link: i,
                                        displayAuthor: n,
                                        selectable: e.props.selectable,
                                        selectedMessages: l,
                                        onMessageSelect: e.props.onMessageSelect,
                                        onClickMsg: t
                                    }))
                                })), a.linkPreview && o.push(f.default.createElement(S.default, {
                                    key: a.id.toString(),
                                    msg: a,
                                    selectable: e.props.selectable,
                                    selectedMessages: l,
                                    onMessageSelect: e.props.onMessageSelect,
                                    displayType: m.default.DISP_TYPE.GALLERY,
                                    onClickMsg: t
                                }))
                            })), o.reverse(), o
                        }, e
                    }
                    return (0, s.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.props.listeners.add(this.props.linkMsgs, "add remove reset", (function() {
                                var t;
                                null === (t = e._gallery) || void 0 === t || t.forceUpdate()
                            })), this.props.listeners.add(this.props.linkMsgs, "query_link_before", (function() {
                                var t;
                                null === (t = e._gallery) || void 0 === t || t.forceUpdate()
                            })), this.props.listeners.add(this.props.chat.msgs, "add bulk_add", this._onNewMsgs)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.linkMsgs,
                                n = (t.listeners, t.chat),
                                l = (0, r.default)(t, ["linkMsgs", "listeners", "chat"]);
                            return v.default.supportsFeature(v.default.F.MD_BACKEND) && n.endOfHistoryTransferType === p.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY && (e = f.default.createElement(h.default, {
                                icon: f.default.createElement(M.default, {
                                    name: "content-chat"
                                }),
                                theme: "list",
                                secondary: g.default.t(581)
                            }, g.default.t(584))), f.default.createElement(f.default.Fragment, null, f.default.createElement(C.default, (0, i.default)({
                                ref: this._setGallery,
                                msgsCollection: a,
                                queryCollection: this._queryCollection,
                                hasBefore: a.hasLinkBefore,
                                queryBefore: a.queryLinkBefore,
                                renderElements: this._renderLinks,
                                emptyText: g.default.t(1178),
                                chat: n
                            }, l)), e)
                        }
                    }]), a
                }(f.Component);
            y.displayName = "LinkGallery";
            var N = (0, _.default)(y);
            t.default = N
        },
        31710: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(59713)),
                i = l(a(34575)),
                r = l(a(93913)),
                u = l(a(2205)),
                s = l(a(99842)),
                d = l(a(94184)),
                c = n(a(67294)),
                f = l(a(22965)),
                p = a(59518),
                m = l(a(34263)),
                h = l(a(41769)),
                v = l(a(53697)),
                g = l(a(89115)),
                E = l(a(8767)),
                _ = l(a(52933)),
                C = l(a(68390)),
                S = l(a(44706)),
                M = l(a(44589)),
                y = l(a(73975)),
                N = l(a(38512)),
                T = a(60438),
                P = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, s.default)(a);

                    function a(e) {
                        var n;
                        (0, i.default)(this, a), (n = t.call(this, e)).mouseOver = function() {
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
                        }, n.onSelectChange = function(e) {
                            n.state.selected !== e && n.setState({
                                selected: e
                            })
                        }, n.onSelectClick = function(e) {
                            e && e.stopPropagation(), n.props.onMessageSelect(n.props.msg.unsafe(), !n.state.selected)
                        }, n.onClick = function() {
                            n.props.onClickMsg(n.props.msg.unsafe(), !n.state.selected)
                        };
                        var l = e.msg,
                            o = e.selectedMessages;
                        return n.state = {
                            hover: !1,
                            selected: o.isSelected(l.unsafe())
                        }, n
                    }
                    return (0, r.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.listeners.add(this.props.selectedMessages, this.props.msg.id.toString(), this.onSelectChange)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.msg,
                                n = t.link,
                                l = t.displayAuthor,
                                i = this.props.selectable || this.state.hover ? c.default.createElement(S.default, {
                                    checked: this.state.selected,
                                    onClick: this.onSelectClick,
                                    msgTheme: "gallery"
                                }) : null,
                                r = (0, p.Conversation)({
                                    mentions: a.mentionMap(),
                                    links: a.getLinks(),
                                    selectable: true,
                                    trusted: a.isTrusted()
                                }),
                                u = a.body && a.body.includes(n.url) ? a.body : a.caption,
                                s = l ? c.default.createElement("div", {
                                    className: E.default.author
                                }, c.default.createElement(f.default, {
                                    msg: a,
                                    contact: a.senderObj
                                })) : null,
                                C = a.getSuspiciousLinks().length > 0;
                            return c.default.createElement(v.default, {
                                hover: this.state.hover,
                                onClick: this.onClick,
                                onMouseEnter: this.state.hover ? null : this.mouseEnter,
                                onMouseOver: this.state.hover ? null : this.mouseOver,
                                onMouseLeave: this.state.hover ? this.mouseLeave : null
                            }, c.default.createElement("div", {
                                className: E.default.msg
                            }, c.default.createElement(N.default, {
                                transitionName: "delay-leave"
                            }, i), c.default.createElement(T.MessageContainer, {
                                isSentByMe: a.isSentByMe
                            }, c.default.createElement("div", {
                                className: (0, d.default)(E.default.bubble, (e = {}, (0, o.default)(e, E.default.hasAuthor, l), (0, o.default)(e, E.default.hasSuspiciousLinks, C), e))
                            }, s, c.default.createElement(y.default, {
                                link: n,
                                displayType: m.default.DISP_TYPE.GALLERY
                            }), c.default.createElement(_.default, {
                                title: n.url,
                                isSentByMe: a.isSentByMe,
                                canonicalUrl: n.domain,
                                displayType: m.default.DISP_TYPE.GALLERY,
                                star: a.star
                            }), c.default.createElement(h.default, {
                                text: u,
                                selectable: true,
                                className: E.default.text,
                                dirMismatch: a.rtl !== g.default.isRTL(),
                                direction: a.dir,
                                formatters: r
                            })))))
                        }
                    }]), a
                }(c.Component);
            P.CONCERNS = {
                msg: ["body", "caption", "dir", "id", "isSentByMe", "mediaData", "type", "rtl", "senderObj", "star", "mediaData", "asRevoked"]
            }, P.displayName = "LinkMsg";
            var b = (0, C.default)((0, M.default)(P, P.CONCERNS));
            t.default = b
        },
        24249: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                s = l(a(96486)),
                d = n(a(67294)),
                c = l(a(34541)),
                f = l(a(34263)),
                p = a(67485),
                m = l(a(96658)),
                h = l(a(68198)),
                v = l(a(52558)),
                g = a(89305),
                E = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(l)))._setScrollContainer = function(t) {
                            e._scrollContainer = t
                        }, e._onScroll = function(t) {
                            e._handleScroll(t.target)
                        }, e._handleScroll = s.default.throttle((function(t) {
                            var a = e.props,
                                n = a.hasBefore,
                                l = a.msgsCollection,
                                o = a.setScrollOffset,
                                i = t.scrollHeight - t.clientHeight - t.scrollTop < f.default.SCROLL_FUDGE;
                            n && i && e._queryCollection(l.head()), o && o(t.scrollTop)
                        }), 100), e._handleClickMsg = function(t, a) {
                            var n = (0, g.unproxy)(t);
                            e.props.selectable && void 0 !== a ? e.props.onMessageSelect(n, a) : c.default.openChatAt(n.chat, n.chat.getSearchContext(n))
                        }, e
                    }
                    return (0, i.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.hasBefore,
                                a = e.scrollOffset;
                            t && this._queryCollection(), this._scrollContainer && (this._scrollContainer.scrollTop = a)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._handleScroll.cancel()
                        }
                    }, {
                        key: "_queryCollection",
                        value: function(e) {
                            var t = this.props,
                                a = t.hasBefore,
                                n = t.queryCollection;
                            a && n(e)
                        }
                    }, {
                        key: "_renderElements",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.msgsCollection,
                                n = t.selectedMessages,
                                l = t.renderElements;
                            return l ? l(this._handleClickMsg) : a.map((function(t, a) {
                                return d.default.createElement(v.default, {
                                    key: `${t.id.toString()}_${a}`,
                                    msg: t,
                                    selectable: e.props.selectable,
                                    selectedMessages: n,
                                    onMessageSelect: e.props.onMessageSelect,
                                    displayType: f.default.DISP_TYPE.GALLERY,
                                    onClickMsg: e._handleClickMsg,
                                    onProductClick: e.props.onProductDetail
                                })
                            })).reverse()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.queryBefore,
                                a = e.hasBefore,
                                n = e.msgsCollection,
                                l = e.emptyText,
                                o = this._renderElements();
                            if (t) {
                                if (0 === o.length) return d.default.createElement(p.Loading, null);
                                o.push(d.default.createElement(m.default, null))
                            }
                            return 0 !== n.length || t || a ? d.default.createElement("div", {
                                ref: this._setScrollContainer,
                                onScroll: this._onScroll,
                                className: h.default.wrapper
                            }, o) : d.default.createElement(p.Empty, {
                                text: l,
                                a8nText: "no-elements"
                            })
                        }
                    }]), a
                }(d.Component);
            t.default = E, E.defaultProps = {
                scrollOffset: 0
            }, E.displayName = "MessageGallery"
        },
        87327: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                s = n(a(67294)),
                d = l(a(97930)),
                c = l(a(26015)),
                f = l(a(79140)),
                p = l(a(34541)),
                m = l(a(25960)),
                h = l(a(82745)),
                v = a(31230),
                g = l(a(89115)),
                E = l(a(44589)),
                _ = a(89305),
                C = a(28770),
                S = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(l))).onMute = function(t) {
                            p.default.muteChat((0, _.unproxy)(e.props.chat), t)
                        }, e.onUnmute = function() {
                            var t = e.props.chat.isGroup ? g.default.t(568) : g.default.t(566);
                            p.default.openModal(s.default.createElement(m.default, {
                                onOK: e.unmute,
                                okText: g.default.t(85),
                                onCancel: function() {
                                    return p.default.closeModal()
                                },
                                cancelText: g.default.t(1657)
                            }, t))
                        }, e.unmute = function() {
                            e.onMute(!1), p.default.closeModal()
                        }, e
                    }
                    return (0, i.default)(a, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.mute,
                                n = t.settings,
                                l = t.chat,
                                o = a.isMuted,
                                i = l.muteExpiration;
                            if (l.archive && (0, v.archiveV2Supported)() && n.showArchiveV2) return s.default.createElement(h.default, null, s.default.createElement(C.TextSpan, {
                                theme: "muted",
                                size: "16"
                            }, g.default.t(239)));
                            var r, u = o ? this.onUnmute : function() {
                                    e.onMute(!0)
                                },
                                p = s.default.createElement(c.default, {
                                    checked: o,
                                    onChange: u
                                }),
                                m = o ? g.default.t(1666) : g.default.t(1806);
                            if (o && i) {
                                var E = f.default.untilStr(i);
                                r = s.default.createElement(C.TextDiv, {
                                    theme: "muted"
                                }, E)
                            }
                            return s.default.createElement(h.default, {
                                a8nText: d.default.key("block-mute"),
                                side: p,
                                onClick: u,
                                multiline: !(!o || !i)
                            }, s.default.createElement(C.TextSpan, {
                                theme: "title"
                            }, m), r)
                        }
                    }]), a
                }(s.PureComponent);
            S.CONCERNS = {
                chat: ["isGroup", "muteExpiration", "archive"],
                mute: ["isMuted"],
                settings: ["showArchiveV2"]
            }, S.displayName = "MuteRow";
            var M = (0, E.default)(S, S.CONCERNS);
            t.default = M
        },
        15939: (e, t, a) => {
            "use strict";
            var n = a(60077).default,
                l = a(20862),
                o = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = o(a(67154)),
                r = o(a(6479)),
                u = o(a(34575)),
                s = o(a(93913)),
                d = o(a(2205)),
                c = o(a(99842)),
                f = l(a(67294)),
                p = a(54654),
                m = o(a(42905)),
                h = o(a(22021)),
                v = o(a(89115)),
                g = o(a(68390)),
                E = o(a(24249)),
                _ = o(a(75131)),
                C = function(e) {
                    (0, d.default)(a, e);
                    var t = (0, c.default)(a);

                    function a() {
                        var e;
                        (0, u.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l)))._setGallery = function(t) {
                            e._gallery = t
                        }, e._queryCollection = function(t, a) {
                            var n = e.props,
                                l = n.productMsgs,
                                o = n.chat;
                            e.props.listeners.uiIdle((function() {
                                l.queryProducts(o, a)
                            }))
                        }, e
                    }
                    return (0, s.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.props.listeners.add(this.props.productMsgs, "add remove reset", (function() {
                                var t;
                                null === (t = e._gallery) || void 0 === t || t.forceUpdate()
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.productMsgs,
                                l = (t.listeners, t.chat),
                                o = (0, r.default)(t, ["productMsgs", "listeners", "chat"]);
                            return h.default.supportsFeature(h.default.F.MD_BACKEND) && l.endOfHistoryTransferType === p.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY && (e = f.default.createElement(m.default, {
                                icon: f.default.createElement(_.default, {
                                    name: "content-chat"
                                }),
                                theme: "list",
                                secondary: v.default.t(581)
                            }, v.default.t(587))), f.default.createElement(f.default.Fragment, null, f.default.createElement(E.default, (0, i.default)({
                                ref: this._setGallery,
                                msgsCollection: a,
                                queryCollection: this._queryCollection,
                                hasBefore: a.hasProductBefore,
                                queryBefore: a.hasProductBefore ? n.resolve() : null,
                                emptyText: v.default.t(1182),
                                chat: l
                            }, o)), e)
                        }
                    }]), a
                }(f.Component);
            C.displayName = "ProductGallery";
            var S = (0, g.default)(C);
            t.default = S
        },
        99472: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = n(a(34575)),
                o = n(a(93913)),
                i = n(a(81506)),
                r = n(a(2205)),
                u = n(a(99842)),
                s = n(a(67294)),
                d = n(a(34541)),
                c = n(a(25960)),
                f = n(a(48629)),
                p = n(a(84576)),
                m = n(a(41769)),
                h = n(a(28082)),
                v = n(a(89115)),
                g = a(11367),
                E = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, l.default)(this, a);
                        for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(o))).contactFilter = function(t) {
                            var a = e.props.chat.groupMetadata;
                            return !!f.default.isFilteredContact(t) && (!a.participants.get(t.id) || v.default.t(226))
                        }, e.confirmAddParticipant = function(t) {
                            var a = e.onAddParticipant.bind((0, i.default)(e), t),
                                n = v.default.t(550, {
                                    participant: t.formattedName,
                                    subject: e.props.chat.contact.name
                                });
                            e.push(s.default.createElement(c.default, {
                                onOK: a,
                                okText: v.default.t(215),
                                onCancel: e._pop,
                                cancelText: v.default.t(1657)
                            }, s.default.createElement(m.default, {
                                text: n
                            })))
                        }, e.onAddParticipant = function(t) {
                            (0, g.addParticipants)(e.props.chat, [t]).catch((function() {})), d.default.closeModal()
                        }, e._pop = function() {
                            e.pop()
                        }, e
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push(s.default.createElement(p.default, {
                                title: v.default.t(215),
                                filter: this.contactFilter,
                                onCancel: this._pop,
                                onSelect: this.confirmAddParticipant
                            }))
                        }
                    }]), a
                }(h.default);
            t.default = E
        },
        31828: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(319)),
                i = l(a(34575)),
                r = l(a(93913)),
                u = l(a(81506)),
                s = l(a(2205)),
                d = l(a(99842)),
                c = l(a(67294)),
                f = a(90695),
                p = l(a(34541)),
                m = l(a(25960)),
                h = l(a(48629)),
                v = l(a(41769)),
                g = l(a(28082)),
                E = l(a(89115)),
                _ = a(11367),
                C = n(a(66132)),
                S = function(e) {
                    (0, s.default)(a, e);
                    var t = (0, d.default)(a);

                    function a() {
                        var e;
                        (0, i.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), r = 0; r < n; r++) l[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(l)))._isGroupParticipant = function(t) {
                            return !!e.props.chat.groupMetadata.participants.get(t)
                        }, e.customSecondaryText = function(t) {
                            return e.props.chat.groupMetadata.participants.get(t) ? E.default.t(226) : null
                        }, e.contactFilter = function(t) {
                            var a = e.props.chat.groupMetadata;
                            return !!h.default.isFilteredContact(t) && (!a.participants.get(t.id) || E.default.t(226))
                        }, e.confirmAddParticipant = function(t) {
                            var a = e.props.chat;
                            e.push(c.default.createElement(m.default, {
                                onOK: e.onAddParticipant.bind((0, u.default)(e), t),
                                okText: E.default.t(215, {
                                    _plural: t.length
                                }),
                                onCancel: e._pop,
                                cancelText: E.default.t(1657)
                            }, c.default.createElement(v.default, {
                                text: e._makeNameEnumeration(t, a.contact.name)
                            })))
                        }, e._makeNameEnumeration = function(e, t) {
                            var a = e.map((function(e) {
                                return e.formattedShortName || e.shortName
                            })).reduce((function(t, a, n) {
                                return [].concat((0, o.default)(t), [a, n !== e.length - 1 && E.default.t(658) || ""])
                            }), []);
                            return E.default.t(551, {
                                participants: a.join(""),
                                subject: t
                            })
                        }, e.onAddParticipant = function(t) {
                            (0, _.addParticipants)(e.props.chat, t).catch((function() {})), p.default.closeModal()
                        }, e._pop = function() {
                            e.pop()
                        }, e
                    }
                    return (0, r.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push(c.default.createElement(C.default, {
                                onConfirm: this.confirmAddParticipant,
                                filter: this.contactFilter,
                                title: E.default.t(215),
                                isDisabled: this._isGroupParticipant,
                                isSelected: this._isGroupParticipant,
                                customSecondaryText: this.customSecondaryText,
                                listType: C.ListType.PARTICIPANT_MANAGE_MODAL,
                                singleSelectionFooterType: f.FooterType.CONFIRM,
                                multipleSelectionFooterType: f.FooterType.CONFIRM
                            }))
                        }
                    }]), a
                }(g.default);
            t.default = S
        },
        6026: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = n(a(34575)),
                o = n(a(93913)),
                i = n(a(2205)),
                r = n(a(99842)),
                u = n(a(67294)),
                s = n(a(83365)),
                d = n(a(86922)),
                c = n(a(28082)),
                f = n(a(58695)),
                p = function(e) {
                    (0, i.default)(a, e);
                    var t = (0, r.default)(a);

                    function a() {
                        var e;
                        (0, l.default)(this, a);
                        for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(o)))._showArchiveSettingsDrawer = function() {
                            e.push(u.default.createElement(s.default, {
                                settings: f.default,
                                onClose: e._pop
                            }))
                        }, e._pop = function() {
                            e.pop()
                        }, e
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push(u.default.createElement(d.default, {
                                showSettings: this._showArchiveSettingsDrawer,
                                onClose: this._pop,
                                settings: f.default
                            }))
                        }
                    }]), a
                }(c.default);
            t.default = p
        },
        55571: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(67154)),
                i = l(a(34575)),
                r = l(a(93913)),
                u = l(a(2205)),
                s = l(a(99842)),
                d = l(a(67294)),
                c = l(a(99301)),
                f = l(a(46991)),
                p = l(a(34541)),
                m = l(a(91411)),
                h = l(a(47518)),
                v = a(78911),
                g = l(a(66015)),
                E = l(a(66577)),
                _ = l(a(28082)),
                C = a(31230),
                S = l(a(2714)),
                M = l(a(55375)),
                y = l(a(92511)),
                N = a(43481),
                T = a(85539),
                P = n(a(48310)),
                b = l(a(8643)),
                I = a(79164),
                k = l(a(73626)),
                A = l(a(71431)),
                O = l(a(10437)),
                w = l(a(89193)),
                R = l(a(82260)),
                D = l(a(32702)),
                x = l(a(43112)),
                L = l(a(98740)),
                B = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, s.default)(a);

                    function a() {
                        var e;
                        (0, i.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l)))._scrollOffset = 0, e._setScrollOffset = function(t) {
                            e._scrollOffset = t
                        }, e.onProductDetail = function(t) {
                            var a = e.props.chat,
                                n = d.default.createElement(A.default, {
                                    chat: a,
                                    product: t,
                                    onEnd: e._end,
                                    onBack: e._popAndUpdate,
                                    refreshCarousel: !1,
                                    onProductLinkClick: e._onProductLinkClick,
                                    onCartClick: e._onCartClick
                                });
                            e.push(n)
                        }, e.onProductDetailFromInfo = function(t) {
                            var a = d.default.createElement(O.default, {
                                chat: e.props.chat,
                                productInfo: t,
                                onEnd: e._end,
                                onBack: e._pop,
                                onProductDetail: e.onProductDetail,
                                onProductCatalog: e.onProductCatalogHeaderClick,
                                onProductLinkClick: e._onProductLinkClick,
                                onCartClick: e._onCartClick
                            });
                            e.push(a)
                        }, e._onProductLinkClick = function(t) {
                            e.push(d.default.createElement(w.default, {
                                product: t,
                                onBack: e._pop
                            }))
                        }, e._onCatalogLinkClick = function(t, a) {
                            e.push(d.default.createElement(f.default, {
                                catalog: t,
                                contact: a,
                                onBack: e._pop
                            }))
                        }, e._onCartClick = function(t) {
                            var a = (0, I.getProductCatalogContext)(e.props.context),
                                n = (0, D.default)(t, e.props.chat, a);
                            n && e.push(n)
                        }, e.pushProductCatalog = function() {
                            var t = e.props.chat,
                                a = d.default.createElement(R.default, {
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
                            (0, T.logCarouselViewMoreClick)({
                                catalogOwnerWid: a,
                                catalogContext: t
                            }), e.pushProductCatalog(a)
                        }, e.onProductCatalogHeaderClick = function(t, a) {
                            (0, T.logCarouselViewMoreClick)({
                                catalogOwnerWid: t,
                                catalogContext: a
                            }), e.onProductCatalog(a)
                        }, e.onStarred = function() {
                            var t = d.default.createElement(x.default, {
                                chat: e.props.chat,
                                starredMsgs: e.props.chat.getStarredMsgs(),
                                onClose: e._pop
                            });
                            e.push(t)
                        }, e.onAdminSetting = function() {
                            var t = e.props.chat,
                                a = d.default.createElement(y.default, {
                                    chat: t,
                                    groupMetadata: t.groupMetadata,
                                    onClose: e._pop
                                });
                            e.push(a)
                        }, e.onContactCard = function() {
                            e.push(d.default.createElement(m.default, {
                                chat: e.props.chat,
                                onClose: e._pop
                            }))
                        }, e.onMediaGallery = function() {
                            var t = d.default.createElement(P.default, {
                                chat: e.props.chat,
                                onBack: e._pop,
                                onProductDetail: e.onProductDetail,
                                setProductsScrollOffset: e._setScrollOffset
                            });
                            e.push(t)
                        }, e.onGroupInviteLink = function() {
                            var t = e.props.chat,
                                a = d.default.createElement(M.default, {
                                    chat: e.props.chat,
                                    groupMetadata: t.groupMetadata,
                                    onBack: e._pop
                                });
                            e.push(a)
                        }, e._pop = function() {
                            e.pop()
                        }, e._popAndUpdate = function() {
                            e.popAndUpdate({
                                initialTab: P.TABS.PRODUCTS,
                                productsScrollOffset: e._scrollOffset
                            })
                        }, e._end = function() {
                            e.end(!0)
                        }, e.onVerification = function(t) {
                            var a = t || e.props.chat.contact,
                                n = d.default.createElement(L.default, {
                                    contact: a,
                                    onClose: e._pop,
                                    isFirstLevel: !1
                                });
                            e.push(n)
                        }, e.onLiveLocation = function() {
                            var t = d.default.createElement(N.LiveLocationDrawerLoadable, {
                                chat: e.props.chat,
                                onClose: e._pop
                            });
                            e.push(t)
                        }, e.onEphemeral = function() {
                            var t = e.props.chat,
                                a = d.default.createElement(E.default, {
                                    chat: t,
                                    fromInfoFlow: !0,
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
                            this.props.chat.isGroup ? this.push(d.default.createElement(S.default, {
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
                            })) : a.isBroadcast ? this.push(d.default.createElement(c.default, {
                                chat: a,
                                contact: a.contact,
                                onStarred: e,
                                onMediaGallery: t,
                                onClose: this._pop
                            })) : a.isUser && (a.contact.isBusiness && (0, C.canSeeBizProfileV3)() && p.default.setDrawerContext("right", (0, I.buildProductCatalogContext)(new k.default, (0, v.getMaybeBizPlatformForLogging)(a.contact.id.toString()), b.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE)), this.push(d.default.createElement(h.default, {
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
                return d.default.createElement(g.default.Consumer, null, (function(t) {
                    return d.default.createElement(B, (0, o.default)({
                        context: t
                    }, e))
                }))
            }
        },
        62372: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(81506)),
                u = l(a(2205)),
                s = l(a(99842)),
                d = l(a(91080)),
                c = l(a(96486)),
                f = n(a(67294)),
                p = l(a(34541)),
                m = l(a(34263)),
                h = n(a(98569)),
                v = l(a(22021)),
                g = l(a(89115)),
                E = l(a(68390)),
                _ = a(87261),
                C = l(a(58003)),
                S = l(a(49172)),
                M = l(a(8643)),
                y = l(a(42027)),
                N = l(a(77478)),
                T = a(85779),
                P = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, s.default)(a);

                    function a(e) {
                        var n;
                        (0, o.default)(this, a), (n = t.call(this, e))._unmounted = !1, n._addListeners = function() {
                            var e = function() {
                                    return n.state.activeMsg
                                },
                                t = (0, r.default)(n).mediaMsgs,
                                a = n.props.listeners;
                            a.uiIdle((function() {
                                var a = e();
                                a && t.loadMoreAroundIfNeeded(a)
                            }));
                            var l = e();
                            (null == l ? void 0 : l.isViewOnce) ? a.add(l, "revoked", (function() {
                                n.setState({
                                    activeMsg: null
                                }), n.endFlow()
                            })): (a.add(t, "remove", (function(a, l, o) {
                                var i = e();
                                if (t.includes(a) || null != i && null != i.id && i.id.toString() !== a.id.toString()) n.forceUpdate();
                                else {
                                    var r = o.index;
                                    0 === t.length ? n.endFlow() : t.length === r ? n.onSelectThumb((0, d.default)(t.at(r - 1), "mediaMsgs.at(index - 1)")) : n.onSelectThumb((0, d.default)(t.at(r), "mediaMsgs.at(index)"))
                                }
                            })), a.add(t, "reset", (function() {
                                n.endFlow()
                            })), a.add(t, "query_media_after", (function() {
                                n.forceUpdate()
                            })), a.add(t, "query_media_before", (function() {
                                var e = n._refThumbs;
                                e && (n._prevScrollWidth = e.scrollWidth, e instanceof HTMLElement && n.forceUpdate())
                            })))
                        }, n.onKeyDown = function(e) {
                            var t = g.default.isRTL();
                            37 === e.keyCode ? t ? n.onNext() : n.onPrev() : 39 === e.keyCode && (t ? n.onPrev() : n.onNext())
                        }, n.onImageLoad = function() {
                            var e = (0, r.default)(n).uiActionEvent;
                            e && (e.markUiActionT(), e.commit(), delete n.uiActionEvent)
                        }, n.onScroll = function(e) {
                            n._handleScrollThrottled(e.currentTarget, n.mediaMsgs, e.currentTarget.scrollLeft, n.props.listeners)
                        }, n.onNext = function(e) {
                            if (e && e.stopPropagation(), !n.state.imgZoomed) {
                                var t = n.state.activeMsg;
                                if (t) {
                                    var a = null;
                                    for (a = n.mediaMsgs.getAfter(t); a && a.mediaData && !(0, T.hasThumbnail)(a.mediaData);) a = n.mediaMsgs.getAfter(a);
                                    a ? n.onSelectThumb(a) : n.mediaMsgs.hasMediaAfter && (n._queryMediaAfter || (n._queryMediaAfter = n.mediaMsgs.queryMedia({
                                        chat: t.chat,
                                        msg: t,
                                        direction: "after"
                                    }).checkpoint(n.props.rejectOnUnmount()).then((function(e) {
                                        "number" == typeof e.length && e.length > 0 && n.state.activeMsg === t && n.onNext()
                                    })).catchType(h.Unmount, (function() {})).catch((function() {
                                        __LOG__(3)`query media msgs error: `
                                    })).finally((function() {
                                        n._queryMediaAfter = null
                                    }))))
                                }
                            }
                        }, n.onPrev = function(e) {
                            if (e && e.stopPropagation(), !n.state.imgZoomed) {
                                var t = n.state.activeMsg;
                                if (t) {
                                    var a = null;
                                    for (a = n.mediaMsgs.getBefore(t); a && a.mediaData && !(0, T.hasThumbnail)(a.mediaData);) a = n.mediaMsgs.getBefore(a);
                                    a ? n.onSelectThumb(a) : n.mediaMsgs.hasMediaBefore && (n._queryMediaBefore || (n._queryMediaBefore = n.mediaMsgs.queryMedia({
                                        chat: t.chat,
                                        msg: t,
                                        direction: "before"
                                    }).checkpoint(n.props.rejectOnUnmount()).then((function(e) {
                                        "number" == typeof e.length && e.length > 0 && n.state.activeMsg === t && n.onPrev()
                                    })).catchType(h.Unmount, (function() {})).catch((function() {
                                        __LOG__(3)`query media msgs error: `
                                    })).finally((function() {
                                        n._queryMediaBefore = null
                                    }))))
                                }
                            }
                        }, n.onImgZoomIn = function(e) {
                            n.setState({
                                imgZoomed: e
                            })
                        }, n.endFlow = function() {
                            p.default.closeModalMedia()
                        }, n.willEndFlow = function() {
                            var e;
                            (e = n._refThumbsContainer) && (0, N.default)(e, {
                                opacity: [0, 1],
                                translateY: ["100%", "0%"]
                            }, {
                                duration: 300,
                                easing: [.1, .82, .25, 1]
                            })
                        }, n.onSelectThumb = function(e) {
                            n.props.listeners.uiIdle((function() {
                                n.mediaMsgs.loadMoreAroundIfNeeded(e)
                            })), n.setState({
                                activeMsg: e
                            })
                        }, n.scrollToActive = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = n._refThumbsContainer,
                                a = n._refThumbs,
                                l = n._refActiveThumb;
                            if (t && a && l) {
                                var o = 0;
                                l instanceof HTMLElement && (o = l.clientWidth / 2 - t.clientWidth / 2), (0, N.default)(a, "stop");
                                var i = 0;
                                e && (i = 300), (0, N.default)(l, "scroll", {
                                    duration: i,
                                    container: a,
                                    offset: o,
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
                            var l = 0;
                            return t.forEach((function(t) {
                                t === a && (e = l), l++
                            })), e
                        }, n._previousMediaHasThumb = function() {
                            var e = n.state.activeMsg;
                            if (!e) return !1;
                            for (var t = n.mediaMsgs.indexOf(e) - 1; t > 0; t--) {
                                var a = n.mediaMsgs.at(t);
                                if (a && (0, T.hasThumbnail)(a.mediaData)) return !0
                            }
                            return !1
                        }, n._prevScrollWidth = null;
                        var l = n.props.msg;
                        return n.mediaMsgs = l.chat.constructMediaMsgs(l), n._handleScrollThrottled = c.default.throttle(n._handleScroll.bind((0, r.default)(n)), 100), l.type === m.default.MSG_TYPE.IMAGE && (n.uiActionEvent = new M.default.UiAction({
                            uiActionType: M.default.UI_ACTION_TYPE.IMAGE_OPEN,
                            uiActionPreloaded: l.mediaData.mediaStage === _.MEDIA_DATA_STAGE.RESOLVED
                        })), n.state = {
                            activeMsg: l,
                            imgZoomed: !1,
                            animatingThumbs: n._hasThumbList(l)
                        }, n
                    }
                    return (0, i.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e, t = this;
                            this.props.listeners.add(window, "keydown", this.onKeyDown), this._addListeners(), this.scrollToActive(), (e = this._refThumbsContainer) && (0, N.default)(e, {
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
                            var l = this;
                            if (0 !== t.length && null != a) {
                                if (t.hasMediaBefore && a < e.clientWidth) {
                                    var o = (0, d.default)(t.head(), "mediaMsgs.head()");
                                    n.uiIdle((function() {
                                        t.queryMedia({
                                            chat: o.chat,
                                            msg: o
                                        }), l.forceUpdate()
                                    }))
                                }
                                if (t.hasMediaAfter && a + m.default.SCROLL_FUDGE > e.scrollWidth - 2 * e.clientWidth) {
                                    var i = (0, d.default)(t.last(), "mediaMsgs.last()");
                                    n.uiIdle((function() {
                                        t.queryMedia({
                                            chat: i.chat,
                                            msg: i,
                                            direction: "after"
                                        }), l.forceUpdate()
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
                                n = this.mediaMsgs.hasMediaAfter || this.state.activeMsg !== a ? this.onNext : null,
                                l = this.mediaMsgs.head(),
                                o = null;
                            return o = this.mediaMsgs.hasMediaBefore || this.state.activeMsg !== l ? this.onPrev : null, v.default.supportsFeature(v.default.F.MD_BACKEND) && (o = (this.mediaMsgs.hasMediaBefore || this.state.activeMsg !== l) && this._previousMediaHasThumb() ? this.onPrev : null), f.default.createElement("div", {
                                className: this.state.imgZoomed ? "img-zoomed-in" : null
                            }, this._hasThumbList(t) && f.default.createElement(S.default, {
                                activeMsg: t,
                                mediaMsgs: this.mediaMsgs,
                                highlightedMsgIds: this.props.highlightedMsgIds,
                                onSelectThumb: this.onSelectThumb,
                                onSetActiveThumb: this._setRefActiveThumb,
                                onScroll: this.onScroll,
                                setRefThumbsContainer: this.setRefThumbsContainer,
                                setRefThumbs: this.setRefThumbs
                            }), f.default.createElement(C.default, {
                                msg: t,
                                mediaData: t.mediaData,
                                onBack: this.endFlow,
                                onExitAnimation: this.willEndFlow,
                                onNext: n,
                                onPrev: o,
                                onImgZoomIn: this.onImgZoomIn,
                                getZoomNode: this.props.getZoomNode,
                                startTime: this.props.startTime,
                                isAnimatingIn: this.state.animatingThumbs,
                                onImageLoad: this.uiActionEvent ? this.onImageLoad : null,
                                msgIndexInAlbum: this._getActiveMsgIndexInAlbum(),
                                albumSize: (null === (e = this.props.highlightedMsgIds) || void 0 === e ? void 0 : e.size) || 0
                            }))
                        }
                    }]), a
                }(f.Component);
            P.displayName = "MediaViewerFlow";
            var b = (0, y.default)((0, E.default)(P));
            t.default = b
        },
        6358: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.requireBundle = void 0;
            var l = n(a(67294)),
                o = n(a(68356)),
                i = n(a(34263)),
                r = n(a(89115)),
                u = n(a(11243)),
                s = (0, n(a(83010)).default)((function() {
                    return Promise.all([a.e(3913), a.e(3535), a.e(275)]).then(a.bind(a, 83836)).then((function(e) {
                        return e.default
                    }))
                }), "SendContactFlow");
            t.requireBundle = s;
            var d = (0, o.default)({
                loader: s,
                loading: function(e) {
                    return l.default.createElement(u.default, {
                        title: r.default.t(1363),
                        error: Boolean(e.error)
                    })
                },
                delay: i.default.LOADABLE_DELAY
            });
            t.default = d
        },
        86922: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                s = n(a(67294)),
                d = l(a(85967)),
                c = n(a(72259)),
                f = l(a(26671)),
                p = l(a(34541)),
                m = l(a(34263)),
                h = l(a(81997)),
                v = l(a(25259)),
                g = n(a(62647)),
                E = l(a(75300)),
                _ = l(a(33079)),
                C = a(67485),
                S = l(a(60482)),
                M = l(a(50842)),
                y = a(32002),
                N = l(a(31722)),
                T = a(71701),
                P = a(31230),
                b = l(a(76568)),
                I = l(a(89115)),
                k = l(a(68390)),
                A = a(53418),
                O = l(a(10560)),
                w = l(a(44589)),
                R = l(a(75131)),
                D = l(a(28770)),
                x = l(a(38512)),
                L = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(l))).flatListController = new M.default, e.selection = new O.default([], (function(e) {
                            return e.id.toString()
                        })), e.state = {
                            forceHideNux: !1,
                            chats: e._getArchivedChats()
                        }, e.onClick = function(t, a) {
                            p.default.openChatFromUnread(a).then((function(e) {
                                e && p.default.focusChatTextInput(a)
                            })), (0, P.archiveV2Supported)() && e.props.settings.archive.enabled || e.onClose()
                        }, e._updateSelected = function(t) {
                            e.selection.setVal(t, !1)
                        }, e.onClose = function() {
                            e.props.onClose()
                        }, e.onNextChat = function(t) {
                            t.preventDefault(), t.stopPropagation(), e.selection.setNext(!0)
                        }, e.onPrevChat = function(t) {
                            t.preventDefault(), t.stopPropagation(), e.selection.setPrev(!0)
                        }, e.shouldShowArchiveV2 = function() {
                            return (0, P.archiveV2Supported)() && e.props.settings.showArchiveV2
                        }, e._handleCloseChat = function(t) {
                            t === e.selection.getVal() && e.selection.unset()
                        }, e.renderItem = function(t) {
                            return s.default.createElement(c.default, {
                                chat: t.chat,
                                mode: c.Mode.LAST,
                                active: e.selection,
                                onClick: e.onClick,
                                hideArchivedIcon: (0, P.archiveV2Supported)() && e.props.settings.archive.enabled,
                                hideMuteIcon: e.shouldShowArchiveV2(),
                                hideMuteOption: e.shouldShowArchiveV2(),
                                showEphemeralIcon: !0
                            })
                        }, e.setRefHotKeys = function(t) {
                            e.refList = t
                        }, e._onCloseNux = function() {
                            (0, T.setNUX)(m.default.NUX.ARCHIVE, {
                                views: m.default.ARCHIVE_NUX_MAX_VIEWS,
                                maxViews: m.default.ARCHIVE_NUX_MAX_VIEWS
                            }), e.setState({
                                forceHideNux: !0
                            })
                        }, e._showNux = function() {
                            var t = f.default.some((function(e) {
                                return e.archive
                            }));
                            return e.shouldShowArchiveV2() && t && (0, T.shouldShowNUX)(m.default.NUX.ARCHIVE) && !e.state.forceHideNux
                        }, e
                    }
                    return (0, i.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.shouldShowArchiveV2() && !(0, T.getNUX)(m.default.NUX.ARCHIVE) && (0, T.setNUX)(m.default.NUX.ARCHIVE, {
                                views: 0,
                                maxViews: m.default.ARCHIVE_NUX_MAX_VIEWS
                            }), this._showNux() && (0, T.viewNUX)(m.default.NUX.ARCHIVE), this.shouldShowArchiveV2() ? this.props.listeners.add(f.default, "sort change:archive add remove", (function() {
                                e.setState({
                                    chats: e._getArchivedChats()
                                })
                            })) : this.props.listeners.add(f.default, "change:archive add remove", (function() {
                                e.setState({
                                    chats: e._getArchivedChats()
                                })
                            })), this.refList && N.default.focus(this.refList), this.props.listeners.add(p.default, "update_chatlist_selection", this._updateSelected), this.props.listeners.add(p.default, "close_chat", this._handleCloseChat);
                            var t = this._getActiveArchiveChat();
                            t && this._updateSelected(t)
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
                            if (this.selection.init(this.state.chats, !0), this._showNux() && (t = s.default.createElement("div", {
                                    className: d.default.nuxContainer
                                }, s.default.createElement(y.FlexColumn, {
                                    align: "center"
                                }, s.default.createElement("span", {
                                    className: d.default.nuxIcon
                                }, s.default.createElement(R.default, {
                                    name: "archive-nux"
                                })), s.default.createElement("div", {
                                    className: d.default.nuxHeader
                                }, s.default.createElement(D.default, {
                                    theme: "large",
                                    as: "h1"
                                }, I.default.t(234))), s.default.createElement("div", {
                                    className: d.default.nuxContent
                                }, s.default.createElement("div", {
                                    className: d.default.nuxText
                                }, s.default.createElement(D.default, {
                                    theme: "plain",
                                    as: "p"
                                }, I.default.t(233))))), s.default.createElement("button", {
                                    onClick: this._onCloseNux,
                                    className: d.default.btnClose
                                }, s.default.createElement(R.default, {
                                    name: "x-alt"
                                })))), this.state.chats.length > 0) {
                                var a = {
                                    down: this.onNextChat,
                                    up: this.onPrevChat
                                };
                                e = s.default.createElement(b.default, {
                                    onRef: this.setRefHotKeys,
                                    handlers: a
                                }, s.default.createElement(x.default, {
                                    transitionName: "slide"
                                }, t), s.default.createElement(S.default, {
                                    className: d.default.flatListContainer,
                                    data: this.getData(),
                                    flatListController: this.flatListController,
                                    direction: "vertical",
                                    renderItem: this.renderItem
                                }))
                            } else e = s.default.createElement(C.Archived, null);
                            var n = (0, P.archiveV2Supported)() && this.props.settings.archive.enabled ? s.default.createElement(A.MenuBarItem, {
                                    a8nText: "archived-menu",
                                    icon: s.default.createElement(R.default, {
                                        name: "menu"
                                    }),
                                    title: I.default.t(1028)
                                }, s.default.createElement(E.default, {
                                    type: "dropdown_menu",
                                    flipOnRTL: !0,
                                    key: "ArchivedDrawerHeader",
                                    dirX: "LEFT"
                                }, s.default.createElement(_.default, {
                                    a8n: "open-archive-settings menu-item",
                                    action: this.props.showSettings
                                }, I.default.t(235)))) : null,
                                l = (0, P.archiveV2Supported)() && this.props.settings.archive.enabled ? I.default.t(238) : I.default.t(237);
                            return s.default.createElement(h.default, {
                                theme: "archived"
                            }, s.default.createElement(g.default, {
                                title: l,
                                onBack: this.onClose,
                                type: g.DRAWER_HEADER_TYPE.LARGE,
                                menu: n
                            }), s.default.createElement(v.default, {
                                flatListControllers: [this.flatListController]
                            }, e))
                        }
                    }]), a
                }(s.Component);
            L.CONCERNS = {
                settings: ["showArchiveV2", "archive"]
            }, L.displayName = "ArchivedDrawer";
            var B = (0, k.default)((0, w.default)(L, L.CONCERNS));
            t.default = B
        },
        99301: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                s = n(a(67294)),
                d = l(a(83442)),
                c = l(a(26671)),
                f = l(a(79140)),
                p = l(a(34541)),
                m = l(a(63637)),
                h = l(a(48629)),
                v = n(a(42575)),
                g = l(a(81997)),
                E = l(a(25259)),
                _ = l(a(10869)),
                C = n(a(62647)),
                S = l(a(51376)),
                M = l(a(60482)),
                y = l(a(50842)),
                N = a(71701),
                T = l(a(17957)),
                P = l(a(89115)),
                b = l(a(68390)),
                I = l(a(68708)),
                k = l(a(44589)),
                A = a(89305),
                O = l(a(75131)),
                w = a(28770),
                R = l(a(12717)),
                D = l(a(22021)),
                x = l(a(54047)),
                L = l(a(80297)),
                B = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(l))).flatListController = new y.default, e.onParticipantClick = function(e, t) {
                            R.default.equals((0, N.getMaybeMeUser)(), t.id) || c.default.find(t.id).then((function(e) {
                                p.default.openChatFromUnread(e).then((function(t) {
                                    t && p.default.focusChatTextInput(e)
                                }))
                            }))
                        }, e.onClose = function() {
                            e.props.onClose ? e.props.onClose() : e.props.uim.uie.requestDismiss()
                        }, e.onDelete = function() {
                            p.default.deleteOrExitChat((0, A.unproxy)(e.props.chat))
                        }, e.showEncryptionInfoPopup = function() {
                            p.default.openModal(s.default.createElement(L.default, {
                                chatId: e.props.chat.id,
                                e2eSubtype: "info_encrypted"
                            }))
                        }, e.renderItem = function(t) {
                            var a = t.participant,
                                n = h.default.gadd(a.id);
                            return s.default.createElement(m.default, {
                                contact: n,
                                theme: "drawer-list",
                                admin: !!a.isAdmin,
                                onClick: e.onParticipantClick,
                                key: a.id.toString(),
                                waitIdle: !0
                            })
                        }, e
                    }
                    return (0, i.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props.chat.groupMetadata;
                            this.props.listeners.add(t.participants, "add remove sort reset", (function() {
                                e.forceUpdate()
                            }))
                        }
                    }, {
                        key: "getData",
                        value: function() {
                            return this.props.chat.groupMetadata.participants.map((function(e) {
                                return {
                                    itemKey: e.id.toString(),
                                    participant: e
                                }
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.chat,
                                t = null;
                            if (this.props.onMediaGallery) {
                                var a = s.default.createElement(O.default, {
                                        className: d.default.chevron,
                                        name: "chevron-right-alt",
                                        directional: !0
                                    }),
                                    n = P.default.t(1008);
                                t = s.default.createElement(S.default, {
                                    title: n,
                                    titleOnClick: this.props.onMediaGallery || function() {},
                                    subtitle: a,
                                    theme: "padding"
                                }, s.default.createElement(I.default, {
                                    chat: (0, A.unproxy)(e),
                                    mediaMsgs: e.getMediaMsgs()
                                }))
                            }
                            var l, o = this.props.chat.groupMetadata.participants,
                                i = s.default.createElement(w.TextSpan, {
                                    theme: "section-title"
                                }, P.default.n(o.length)),
                                r = o.length ? s.default.createElement(S.default, {
                                    title: P.default.t(1880),
                                    subtitle: i
                                }, s.default.createElement(M.default, {
                                    flatListController: this.flatListController,
                                    direction: "vertical",
                                    forceConsistentRenderCount: !1,
                                    data: this.getData(),
                                    renderItem: this.renderItem
                                })) : null,
                                u = s.default.createElement(S.default, null, s.default.createElement(_.default, {
                                    a8nText: "li-delete-broadcast",
                                    icon: s.default.createElement(O.default, {
                                        name: "delete"
                                    }),
                                    color: "danger",
                                    theme: "list-aligned",
                                    onClick: this.onDelete
                                }, P.default.t(1698)));
                            e.groupMetadata.creation ? (l = f.default.createdStr(e.groupMetadata.creation), l = s.default.createElement(w.TextDiv, {
                                theme: "small"
                            }, l)) : l = null;
                            var c = null;
                            D.default.supportsFeature(D.default.F.MD_BACKEND) && (c = s.default.createElement(x.default, {
                                onClick: this.showEncryptionInfoPopup,
                                text: P.default.t(1646)
                            }));
                            var p = null;
                            return c && (p = s.default.createElement(S.default, null, null, c)), s.default.createElement(g.default, {
                                key: "contact-info-modal",
                                theme: "striped"
                            }, s.default.createElement(C.default, {
                                type: C.DRAWER_HEADER_TYPE.SMALL,
                                darwinRtlFix: !0,
                                onCancel: this.onClose
                            }, s.default.createElement(w.TextDiv, {
                                theme: "title"
                            }, P.default.t(352)), l), s.default.createElement(E.default, {
                                flatListControllers: [this.flatListController]
                            }, s.default.createElement("div", {
                                className: d.default.body
                            }, s.default.createElement("div", {
                                className: d.default.photo
                            }, s.default.createElement(v.default, {
                                id: e.id,
                                size: v.DETAIL_IMAGE_SIZE.LARGE
                            })), t, p, r, u)))
                        }
                    }]), a
                }(s.Component);
            B.CONCERNS = {
                chat: ["id", "groupMetadata"]
            }, B.displayName = "BroadcastInfoDrawer";
            var F = (0, T.default)((0, b.default)((0, k.default)(B, B.CONCERNS)));
            t.default = F
        },
        53400: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                s = n(a(67294)),
                d = l(a(76)),
                c = l(a(34541)),
                f = l(a(25960)),
                p = l(a(34263)),
                m = l(a(41769)),
                h = a(19129),
                v = a(92618),
                g = l(a(22021)),
                E = l(a(89115)),
                _ = l(a(44589)),
                C = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(l))).onConfirm = function() {
                            c.default.closeModal()
                        }, e._onLearnMore = function(e) {
                            e.preventDefault(), c.default.closeModal("none"), setTimeout((function() {
                                return (0, h.openExternalLink)((0, v.getBusinessFaqUrl)())
                            }), 10)
                        }, e._getMessage = function() {
                            var t = e.props.contact;
                            switch (t.verifiedLevel) {
                                case p.default.VERIFIED_LEVEL.HIGH:
                                    return E.default.t(1908);
                                case p.default.VERIFIED_LEVEL.LOW:
                                    return E.default.t(1910);
                                case p.default.VERIFIED_LEVEL.UNKNOWN:
                                    return E.default.t(1912, {
                                        businessName: t.formattedName
                                    })
                            }
                        }, e._getMessageV2 = function() {
                            var t = e.props.contact;
                            switch (t.verifiedLevel) {
                                case p.default.VERIFIED_LEVEL.HIGH:
                                    return t.name === t.verifiedName ? E.default.t(1650, {
                                        businessName: t.verifiedName
                                    }) : E.default.t(1651, {
                                        businessName: t.verifiedName
                                    });
                                case p.default.VERIFIED_LEVEL.LOW:
                                case p.default.VERIFIED_LEVEL.UNKNOWN:
                                    return E.default.t(1652)
                            }
                        }, e
                    }
                    return (0, i.default)(a, [{
                        key: "render",
                        value: function() {
                            var e;
                            e = g.default.supportsFeature(g.default.F.VNAME_V_2) ? this._getMessageV2() : this._getMessage();
                            var t = s.default.createElement(d.default, {
                                href: (0, v.getBusinessFaqUrl)(),
                                onClick: this._onLearnMore
                            }, E.default.t(919));
                            return s.default.createElement(f.default, {
                                onOK: this.onConfirm,
                                okText: E.default.t(1196)
                            }, s.default.createElement(m.default, {
                                text: e
                            }), " ", t)
                        }
                    }]), a
                }(s.PureComponent);
            C.CONCERNS = {
                contact: ["name", "verifiedLevel", "verifiedName", "formattedName"]
            }, C.displayName = "BusinessInfoModal";
            var S = (0, _.default)(C, C.CONCERNS);
            t.default = S
        },
        3461: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a = e.contact,
                    n = p.default.t(404);

                function h() {
                    u.default.openModal(l.default.createElement(i.default, {
                        contact: a
                    }))
                }

                function v() {
                    u.default.openModal(l.default.createElement(r.default, {
                        contact: a
                    }))
                }
                t = (0, f.canSeeSMBUpsell)() ? l.default.createElement(s.default, {
                    a8nText: "business-title",
                    onClick: v,
                    side: l.default.createElement(m.default, {
                        display: "inline",
                        name: "info"
                    })
                }, n) : l.default.createElement(d.default, {
                    a8nText: "business-title",
                    className: o.default.businessTitleText,
                    onClick: h
                }, n);
                return l.default.createElement(c.default, {
                    className: o.default.businessAccount
                }, t)
            };
            var l = n(a(67294)),
                o = n(a(91548)),
                i = n(a(53400)),
                r = n(a(83934)),
                u = n(a(34541)),
                s = n(a(82745)),
                d = n(a(10869)),
                c = n(a(51376)),
                f = a(31230),
                p = n(a(89115)),
                m = n(a(75131))
        },
        57495: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a, n, l = e.contact,
                    i = e.onProductCatalog,
                    r = k(v.default),
                    C = (0, _.getProductCatalogSessionId)(r);
                var y, A = p.default.toArray().find((function(e) {
                    return e.active
                }));
                (null == A ? void 0 : A.id.equals(l.id)) || ((0, d.logMessageClick)(l.id, C), n = u.default.createElement(I, {
                    icon: "chat-msg",
                    label: E.default.t(1029),
                    onClick: function() {
                        p.default.find(l.id).then((function(e) {
                            m.default.openChatFromUnread(e).then((function() {
                                m.default.closeDrawerRight()
                            }))
                        }))
                    }
                }));
                var O, w, R = (0, u.useState)(),
                    D = (0, o.default)(R, 2)[1],
                    x = (0, u.useState)(),
                    L = (0, o.default)(x, 2)[1];
                (0, N.useListener)(h.default, "change:isVoipInitialized", (function() {
                    D(h.default.isVoipInitialized)
                })), (0, N.useListener)(b, "change:activeCall", (function() {
                    L(b.activeCall)
                })), P.isVoiceCallButtonVisible(l) && (y = u.default.createElement(I, {
                    icon: "voice-call-filled",
                    label: E.default.t(1545),
                    disabled: !!b.activeCall || l.isMe,
                    onClick: function() {
                        (0, d.logVoiceCallClick)(l.id, C), P.checkIfCanStartCall({
                            contact: l,
                            isVideo: !1
                        }) && T && T.callStart(l.id, !1)
                    }
                }));
                (null === (t = l.businessProfile) || void 0 === t || null === (a = t.profileOptions) || void 0 === a ? void 0 : a.commerceExperience) === c.COMMERCE_EXPERIENCE_TYPES.CATALOG && (O = u.default.createElement(I, {
                    icon: "catalog-filled",
                    label: E.default.t(905),
                    onClick: function() {
                        (0, d.logCatalogClick)(l.id, C), i((0, _.getProductCatalogContext)(r))
                    }
                }));
                (0, f.hasShop)(l.businessProfile) && (w = u.default.createElement(I, {
                    icon: "shop-filled",
                    label: E.default.t(1392),
                    onClick: function() {
                        (0, d.logShopsClick)(l.id, C), (0, f.goToShop)(l.businessProfile)
                    }
                }));
                var B = u.default.createElement(I, {
                    icon: "forward-filled",
                    label: E.default.t(747),
                    onClick: function() {
                        (0, d.logForwardClick)(l.id, C), m.default.openModal(u.default.createElement(S.default, {
                            contacts: [(0, M.unproxy)(l)],
                            onContactsSent: function(e) {
                                m.default.openChatFromUnread(e).then((function() {}))
                            }
                        }))
                    }
                });
                return u.default.createElement(g.FlexRow, {
                    className: s.default.actionsRow,
                    justify: "evenly"
                }, n, y, O, w, B)
            };
            var o = l(a(63038)),
                i = l(a(59713)),
                r = l(a(94184)),
                u = n(a(67294)),
                s = l(a(70615)),
                d = a(22918),
                c = a(58435),
                f = a(79984),
                p = l(a(26671)),
                m = l(a(34541)),
                h = l(a(93743)),
                v = l(a(66015)),
                g = a(32002),
                E = l(a(89115)),
                _ = a(79164),
                C = l(a(40746)),
                S = l(a(6358)),
                M = a(89305),
                y = l(a(75131)),
                N = a(19247),
                T = a(78919).default,
                P = a(15340).default,
                b = a(68950).default;

            function I(e) {
                var t = e.icon,
                    a = e.label,
                    n = e.disabled,
                    l = e.onClick;
                return u.default.createElement("div", {
                    className: (0, r.default)(s.default.actionButton, (0, i.default)({}, s.default.actionDisabled, n))
                }, u.default.createElement(C.default, {
                    inverted: !0,
                    onClick: l,
                    disabled: n
                }, u.default.createElement(y.default, {
                    name: t,
                    directional: !0
                })), u.default.createElement("div", {
                    className: s.default.actionLabel
                }, a))
            }
            var k = u.default.useContext
        },
        37076: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.businessHours,
                    a = e.contact,
                    n = (0, p.getProductCatalogSessionId)(E(d.default)),
                    l = (0, g.getBusinessOpenState)(t),
                    i = _(!0),
                    c = (0, o.default)(i, 2),
                    h = c[0],
                    S = c[1];
                if (null == t) return null;
                var M = (0, m.getBusinessHours)(t).map((function(e) {
                    var t = e.day,
                        a = e.hours,
                        n = e.first,
                        o = t,
                        i = a,
                        u = !1;
                    if (n) switch (l.status) {
                        case g.BUSINESS_OPEN_STATUS.OPEN_24H:
                            o = f.default.t(371), i = f.default.t(367), u = !0;
                            break;
                        case g.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                            o = f.default.t(371), i = f.default.t(370), u = !0;
                            break;
                        case g.BUSINESS_OPEN_STATUS.OPEN:
                            o = f.default.t(371), u = !0;
                            break;
                        case g.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                            i = f.default.t(356)
                    }
                    return !n && h ? null : r.default.createElement(C, {
                        day: o,
                        dayIsOpen: u,
                        key: t,
                        hours: i,
                        first: n,
                        collapsed: h
                    })
                }));
                return r.default.createElement(v.default, {
                    className: u.default.businessHours,
                    onClick: function() {
                        (0, s.logHoursClick)(a.id, n), S(!h)
                    }
                }, M)
            };
            var l = n(a(59713)),
                o = n(a(63038)),
                i = n(a(94184)),
                r = n(a(67294)),
                u = n(a(46604)),
                s = a(22918),
                d = n(a(66015)),
                c = n(a(41769)),
                f = n(a(89115)),
                p = a(79164),
                m = a(30063),
                h = n(a(75131)),
                v = n(a(23225)),
                g = a(89822),
                E = r.default.useContext,
                _ = r.default.useState;

            function C(e) {
                if (e.first) {
                    var t = r.default.createElement("div", {
                        className: u.default.businessHoursChevron,
                        role: "button"
                    }, r.default.createElement(h.default, {
                        className: e.collapsed ? "" : u.default.flipSvg,
                        display: "inline",
                        name: "chevron-down-alt"
                    }));
                    return r.default.createElement("div", {
                        className: (0, i.default)(u.default.businessHoursRow, (0, l.default)({}, u.default.firstRow, e.first))
                    }, r.default.createElement("div", {
                        className: (0, i.default)(u.default.businessHoursDay, (0, l.default)({}, u.default.dayIsOpen, e.dayIsOpen))
                    }, r.default.createElement(c.default, {
                        direction: "auto",
                        text: e.day
                    })), r.default.createElement("div", {
                        className: u.default.businessHoursHours
                    }, r.default.createElement(c.default, {
                        direction: "auto",
                        text: e.hours
                    })), t)
                }
                return r.default.createElement("div", {
                    className: u.default.businessHoursRow
                }, r.default.createElement("div", {
                    className: u.default.businessHoursDay
                }, r.default.createElement(c.default, {
                    direction: "auto",
                    text: e.day
                })), r.default.createElement("div", {
                    className: u.default.businessHoursHours
                }, r.default.createElement(c.default, {
                    direction: "auto",
                    text: e.hours
                })))
            }
        },
        42004: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a, n, _, C, S, M = e.businessProfile,
                    y = e.contact,
                    N = (0, g.default)(M, ["description", "address", "latitude", "longitude", "website", "email", "businessHours"]),
                    T = N.description,
                    P = N.address,
                    b = N.latitude,
                    I = N.longitude,
                    k = N.website,
                    A = N.email,
                    O = N.businessHours,
                    w = E(d.default),
                    R = (0, v.getProductCatalogSessionId)(w);
                null != T && (t = o.default.createElement("div", {
                    className: r.default.section
                }, o.default.createElement(p.default, {
                    text: T,
                    textLimit: s.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                }, (function(e) {
                    return o.default.createElement(f.default, {
                        className: r.default.description,
                        selectable: !0,
                        direction: "auto",
                        text: T,
                        textLimit: e.textLimit
                    })
                }))));
                null != O && (a = o.default.createElement("div", {
                    className: r.default.section
                }, o.default.createElement(i.default, {
                    businessHours: O,
                    contact: y
                })));
                null != P && (n = o.default.createElement("div", {
                    className: r.default.section
                }, o.default.createElement(f.default, {
                    selectable: !0,
                    direction: "auto",
                    text: P
                })));
                null != b && null != I && (_ = o.default.createElement("div", {
                    style: {
                        height: 132
                    },
                    className: (0, l.default)(r.default.section, r.default.map)
                }, o.default.createElement(h.default, {
                    lat: b,
                    lng: I,
                    name: P || "",
                    width: 590,
                    height: 132,
                    onClick: function() {
                        return (0, u.logLocationClick)(y.id, R)
                    }
                })));
                null != A && (C = o.default.createElement("div", {
                    className: r.default.section
                }, o.default.createElement(m.default, {
                    href: `mailto:${A}`,
                    onClick: function() {
                        return (0, u.logEmailClick)(y.id, R)
                    }
                }, A)));
                null != k && k.length > 0 && (S = o.default.createElement("div", {
                    className: r.default.section
                }, k.map((function(e) {
                    return o.default.createElement("div", {
                        key: e
                    }, o.default.createElement(m.default, {
                        href: e,
                        onClick: function() {
                            return (0, u.logWebsiteClick)(y.id, R)
                        }
                    }, e))
                }))));
                return null == t && null == a && null == n && null == _ && null == C && null == S ? null : o.default.createElement(c.default, {
                    theme: "padding"
                }, t, a, n, _, C, S)
            };
            var l = n(a(94184)),
                o = n(a(67294)),
                i = n(a(37076)),
                r = n(a(62260)),
                u = a(22918),
                s = n(a(34263)),
                d = n(a(66015)),
                c = n(a(51376)),
                f = n(a(41769)),
                p = n(a(69984)),
                m = n(a(19129)),
                h = n(a(78973)),
                v = a(79164),
                g = n(a(33819)),
                E = o.default.useContext
        },
        22918: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.logProfileImpression = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logProfileExit = function(e, t, a) {
                var n = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_EXIT,
                    catalogSessionId: t,
                    scrollDepth: a
                });
                n && n.commit()
            }, t.logMessageClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_MESSAGE,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logVoiceCallClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_VOICE_CALL,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logShopsClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_SHOPS_ICON,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logCatalogClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_CATALOG_ICON,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logForwardClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_FORWARD,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logEmailClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_EMAIL,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logWebsiteClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_WEBSITE,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logLocationClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_LOCATION,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logHoursClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_HOURS,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logStatusClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_STATUS,
                    catalogSessionId: t
                });
                a && a.commit()
            };
            var l = n(a(8643))
        },
        96910: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a, n = e.contact;
                if (n.isMyContact)
                    if (n.name !== n.verifiedName) {
                        var s;
                        n.showBusinessCheckmarkAsSecondary && (s = l.default.createElement("div", {
                            className: o.default.icon
                        }, l.default.createElement(u.default, {
                            name: "psa-verified"
                        }))), t = l.default.createElement(r.default, {
                            contact: n
                        }), a = l.default.createElement("div", {
                            className: o.default.wrapper
                        }, l.default.createElement(i.default, {
                            text: `~${n.verifiedName}`,
                            className: o.default.verifiedText,
                            direction: "auto",
                            ellipsify: !0,
                            titlify: !0
                        }), s)
                    } else t = l.default.createElement(r.default, {
                        contact: n,
                        showBusinessCheckmark: n.showBusinessCheckmarkAsPrimary
                    });
                else t = l.default.createElement(i.default, {
                    text: n.verifiedName,
                    direction: "auto",
                    ellipsify: !0,
                    titlify: !0
                }), a = l.default.createElement(r.default, {
                    contact: n,
                    showBusinessCheckmark: n.showBusinessCheckmarkAsPrimary
                });
                return l.default.createElement("div", null, l.default.createElement("div", {
                    className: o.default.title
                }, t), l.default.createElement("div", {
                    className: o.default.subtitle
                }, a))
            };
            var l = n(a(67294)),
                o = n(a(67666)),
                i = n(a(41769)),
                r = n(a(45706)),
                u = n(a(75131))
        },
        17995: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.BusinessProfile = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                s = l(a(94184)),
                d = n(a(67294)),
                c = l(a(53400)),
                f = l(a(83934)),
                p = l(a(11582)),
                m = l(a(34541)),
                h = l(a(34263)),
                v = l(a(82745)),
                g = l(a(10869)),
                E = l(a(51376)),
                _ = l(a(41769)),
                C = l(a(69984)),
                S = l(a(19129)),
                M = l(a(22021)),
                y = a(31230),
                N = l(a(89115)),
                T = l(a(45425)),
                P = l(a(78973)),
                b = a(76064),
                I = l(a(8643)),
                k = a(30063),
                A = l(a(87729)),
                O = l(a(44589)),
                w = l(a(75131)),
                R = h.default.VERIFIED_LEVEL,
                D = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(l))).state = {
                            collapsedHours: !0
                        }, e._onBusinessHoursClick = function() {
                            e.setState({
                                collapsedHours: !e.state.collapsedHours
                            })
                        }, e._onBusinessInfoClick = function() {
                            m.default.openModal(d.default.createElement(c.default, {
                                contact: e.props.contact
                            }))
                        }, e._onBusinessInfoWithUpsellClick = function() {
                            m.default.openModal(d.default.createElement(f.default, {
                                contact: e.props.contact
                            }))
                        }, e
                    }
                    return (0, i.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            new I.default.ViewBusinessProfile({
                                viewBusinessProfileAction: I.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION
                            }).commit()
                        }
                    }, {
                        key: "_getBusinessInfoTitle",
                        value: function() {
                            var e, t = this.props.contact,
                                a = !t.name || t.name === t.verifiedName,
                                n = "psa-unverified";
                            switch (t.verifiedLevel) {
                                case R.HIGH:
                                    n = "psa-verified", a ? e = d.default.createElement(_.default, {
                                        className: p.default.verifiedLabel,
                                        text: N.default.t(407)
                                    }) : (e = d.default.createElement(_.default, {
                                        className: p.default.verifiedLabel,
                                        text: N.default.t(405)
                                    }), e = d.default.createElement(T.default, {
                                        id: 406,
                                        params: {
                                            verified: e,
                                            businessName: t.verifiedName
                                        }
                                    }));
                                    break;
                                case R.LOW:
                                    e = a ? d.default.createElement(_.default, {
                                        text: N.default.t(384)
                                    }) : N.default.t(383, {
                                        businessName: t.verifiedName
                                    });
                                    break;
                                case R.UNKNOWN:
                                    e = N.default.t(379)
                            }
                            return d.default.createElement(L, {
                                icon: n,
                                className: p.default.businessMarker,
                                onClick: this._onBusinessInfoClick
                            }, e)
                        }
                    }, {
                        key: "_getBusinessInfoTitleV2",
                        value: function() {
                            var e;
                            switch (this.props.contact.verifiedLevel) {
                                case R.HIGH:
                                    e = N.default.t(402);
                                    break;
                                case R.LOW:
                                case R.UNKNOWN:
                                    e = N.default.t(379)
                            }
                            return d.default.createElement(g.default, {
                                a8nText: "business-title",
                                className: p.default.businessTitleText,
                                onClick: this._onBusinessInfoClick
                            }, e)
                        }
                    }, {
                        key: "_getBusinessInfoTitleWithSMBUpsell",
                        value: function() {
                            var e;
                            switch (this.props.contact.verifiedLevel) {
                                case R.HIGH:
                                    e = N.default.t(402);
                                    break;
                                case R.LOW:
                                case R.UNKNOWN:
                                    e = N.default.t(379)
                            }
                            return d.default.createElement(v.default, {
                                a8nText: "business-title",
                                onClick: this._onBusinessInfoWithUpsellClick,
                                side: d.default.createElement(w.default, {
                                    className: p.default.infoIcon,
                                    display: "inline",
                                    name: "info"
                                })
                            }, e)
                        }
                    }, {
                        key: "_getBusinessHours",
                        value: function(e) {
                            var t = this,
                                a = (0, k.getBusinessHours)(e).map((function(e) {
                                    var a = e.day,
                                        n = e.hours,
                                        l = e.first;
                                    return !l && t.state.collapsedHours ? null : d.default.createElement(x, {
                                        day: a,
                                        key: a,
                                        hours: n,
                                        first: l,
                                        collapsed: t.state.collapsedHours
                                    })
                                }));
                            return d.default.createElement(L, {
                                icon: "business-hours",
                                onClick: this._onBusinessHoursClick
                            }, a)
                        }
                    }, {
                        key: "getAddressString",
                        value: function(e) {
                            var t = e.streetAddress,
                                a = e.localizedCityName,
                                n = e.zipCode;
                            return t && a && n ? N.default.t(378, {
                                streetAddress: t,
                                city: a,
                                zipCode: n
                            }) : t && a ? N.default.t(377, {
                                streetAddress: t,
                                city: a
                            }) : t
                        }
                    }, {
                        key: "_getAddress",
                        value: function(e, t, a, n) {
                            var l, o, i, r = n ? this.getAddressString(n) : null;
                            (null != t && null != a && (l = d.default.createElement("div", {
                                style: {
                                    height: 150
                                },
                                className: p.default.businessMap
                            }, d.default.createElement(P.default, {
                                lat: t,
                                lng: a,
                                name: r || e,
                                width: 565,
                                height: 150
                            }))), r) && (i = null != t && null != a ? (0, b.getMapUrl)(t, a, r) : (0, b.getSearchUrl)(r), o = d.default.createElement("div", {
                                className: p.default.address
                            }, d.default.createElement(S.default, {
                                href: i
                            }, d.default.createElement(_.default, {
                                selectable: !0,
                                direction: "auto",
                                text: r
                            }))));
                            return o || l ? d.default.createElement(L, {
                                icon: "business-address"
                            }, o, l) : null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a, n, l, o, i, r;
                            e = (0, y.canSeeSMBUpsell)() ? this._getBusinessInfoTitleWithSMBUpsell() : M.default.supportsFeature(M.default.F.VNAME_V_2) ? this._getBusinessInfoTitleV2() : this._getBusinessInfoTitle();
                            var u, s = this.props.businessProfile;
                            if (s.stale) t = d.default.createElement("div", {
                                className: p.default.contactBusinessInfoSpinner
                            }, d.default.createElement(A.default, {
                                size: 20,
                                stroke: 5
                            }));
                            else if (a = s.categories && s.categories.length ? d.default.createElement(L, {
                                    icon: "business-category"
                                }, d.default.createElement(_.default, {
                                    selectable: !0,
                                    direction: "auto",
                                    text: s.categories.map((function(e) {
                                        return e.localized_display_name
                                    })).join(N.default.t(658))
                                })) : null, n = s.description ? d.default.createElement(L, {
                                    icon: "business-description"
                                }, d.default.createElement(C.default, {
                                    text: s.description,
                                    textLimit: h.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                                }, (function(e) {
                                    return d.default.createElement(_.default, {
                                        selectable: !0,
                                        direction: "auto",
                                        breakWord: !0,
                                        text: s.description,
                                        textLimit: e.textLimit
                                    })
                                }))) : null, l = this._getAddress(this.props.contact.name, s.latitude, s.longitude, s.structuredAddress), s.website && Array.isArray(s.website) && s.website.length && (o = s.website.map((function(e, t) {
                                    var a = (0, k.getWebsiteLink)(e),
                                        n = d.default.createElement(_.default, {
                                            selectable: !0,
                                            direction: "auto",
                                            text: e
                                        }),
                                        l = d.default.createElement(S.default, {
                                            className: p.default.link,
                                            href: a
                                        }, n);
                                    return d.default.createElement(L, {
                                        icon: "business-website",
                                        key: t
                                    }, l)
                                }))), s.businessHours && (i = this._getBusinessHours(s.businessHours)), s.email) {
                                var c = d.default.createElement(_.default, {
                                        selectable: !0,
                                        direction: "auto",
                                        text: s.email
                                    }),
                                    f = d.default.createElement(S.default, {
                                        className: p.default.link,
                                        href: `mailto:${s.email}`
                                    }, c);
                                r = d.default.createElement(L, {
                                    icon: "business-email",
                                    dir: "auto"
                                }, f)
                            }
                            return (t || null != l || a || n || null != i || r || o) && (u = d.default.createElement(E.default, {
                                theme: "padding"
                            }, d.default.createElement("div", {
                                className: p.default.contactBusinessInfo
                            }, t, l, a, n, i, r, o))), d.default.createElement(d.default.Fragment, null, d.default.createElement(E.default, null, e), u)
                        }
                    }]), a
                }(d.PureComponent);
            t.BusinessProfile = D, D.CONCERNS = {
                contact: ["id", "verifiedLevel", "name", "verifiedName"],
                businessProfile: ["description", "categories", "website", "email", "stale", "latitude", "longitude", "businessHours", "structuredAddress"]
            }, D.displayName = "BusinessProfile";
            var x = function(e) {
                    var t = e.first ? d.default.createElement("div", {
                        className: p.default.businessHoursChevron,
                        role: "button"
                    }, d.default.createElement(w.default, {
                        className: e.collapsed ? "" : p.default.flipSvg,
                        display: "inline",
                        name: "chevron-down-alt"
                    })) : null;
                    return d.default.createElement("div", {
                        className: p.default.businessHoursRow
                    }, d.default.createElement("div", {
                        className: p.default.businessHoursDay
                    }, d.default.createElement(_.default, {
                        direction: "auto",
                        text: e.day
                    })), d.default.createElement("div", {
                        className: p.default.businessHoursHours
                    }, d.default.createElement(_.default, {
                        direction: "auto",
                        text: e.hours
                    })), t)
                },
                L = function(e) {
                    return d.default.createElement("div", {
                        className: (0, s.default)(p.default.dataRow, e.className),
                        onClick: e.onClick
                    }, d.default.createElement("div", {
                        className: p.default.dataRowIcon
                    }, d.default.createElement(w.default, {
                        name: e.icon
                    })), d.default.createElement("div", {
                        className: p.default.dataRowText
                    }, e.children))
                },
                B = (0, O.default)(D, D.CONCERNS);
            t.default = B
        },
        28849: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                s = n(a(67294)),
                d = l(a(10598)),
                c = n(a(72259)),
                f = l(a(34541)),
                p = l(a(34263)),
                m = l(a(51376)),
                h = a(74796),
                v = l(a(60482)),
                g = l(a(89115)),
                E = l(a(68390)),
                _ = l(a(2740)),
                C = l(a(44589)),
                S = l(a(75131)),
                M = a(28770),
                y = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(l)))._commonGroupInitialized = !1, e.state = {
                            collapsed: !1,
                            numGroups: 0
                        }, e.rerender = function() {
                            e.forceUpdate()
                        }, e.onClick = function(t, a) {
                            f.default.openChatFromUnread(a).then((function(e) {
                                e && f.default.focusChatTextInput(a)
                            })), e.props.onClose()
                        }, e.onShowMore = function() {
                            e.setState({
                                collapsed: !1
                            })
                        }, e.renderItem = function(t) {
                            var a = t.chat;
                            return s.default.createElement(c.default, {
                                chat: a,
                                theme: "drawer-list",
                                contact: a.contact,
                                mode: c.Mode.INFO,
                                onClick: e.onClick,
                                key: a.id.toString()
                            })
                        }, e
                    }
                    return (0, i.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.contact.commonGroups;
                            e && (this.props.listeners.add(e, "add remove", this.rerender), this._commonGroupInitialized = !0), (0, h.findCommonGroups)(this.props.contact).catch((function() {
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
                            var e = this.props.contact.commonGroups;
                            return e.length > p.default.INFO_DRAWER_MAX_ROWS && this.state.collapsed && (e = e.slice(0, p.default.INFO_DRAWER_MAX_ROWS)), e.map((function(e) {
                                return {
                                    itemKey: e.id.toString(),
                                    chat: e
                                }
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.contact.commonGroups;
                            if (!e || !e.length) return null;
                            var t, a = s.default.createElement(M.TextSpan, {
                                theme: "section-title"
                            }, g.default.n(e.length));
                            if (e.length > p.default.INFO_DRAWER_MAX_ROWS && this.state.collapsed) {
                                var n = e.length - p.default.INFO_DRAWER_MAX_ROWS,
                                    l = s.default.createElement(_.default, {
                                        theme: "transparent"
                                    }, s.default.createElement(S.default, {
                                        name: "down"
                                    }));
                                t = s.default.createElement(d.default, {
                                    image: l,
                                    theme: "drawer-list",
                                    primary: g.default.t(831, {
                                        count: n,
                                        _plural: n
                                    }),
                                    onClick: this.onShowMore
                                })
                            }
                            return s.default.createElement(m.default, {
                                a8nText: "section-common-groups",
                                title: g.default.t(1782),
                                subtitle: a
                            }, s.default.createElement(v.default, {
                                flatListController: this.props.flatListController,
                                direction: "vertical",
                                forceConsistentRenderCount: !1,
                                data: this.getData(),
                                renderItem: this.renderItem
                            }), t)
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
                }(s.Component);
            y.CONCERNS = {
                contact: ["commonGroups"]
            }, y.displayName = "CommonGroupsWell";
            var N = (0, E.default)((0, C.default)(y, y.CONCERNS));
            t.default = N
        },
        62570: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                s = n(a(67294)),
                d = a(99703),
                c = l(a(76088)),
                f = l(a(3461)),
                p = l(a(42004)),
                m = a(22918),
                h = l(a(17995)),
                v = a(79984),
                g = l(a(10725)),
                E = l(a(51934)),
                _ = l(a(26671)),
                C = l(a(34541)),
                S = l(a(28849)),
                M = l(a(25960)),
                y = l(a(42799)),
                N = a(78911),
                T = l(a(77365)),
                P = n(a(42575)),
                b = l(a(81997)),
                I = l(a(82745)),
                k = l(a(25259)),
                A = l(a(10869)),
                O = l(a(66015)),
                w = n(a(62647)),
                R = l(a(51376)),
                D = l(a(41769)),
                x = l(a(31660)),
                L = a(14650),
                B = l(a(50842)),
                F = l(a(22021)),
                G = a(31230),
                V = l(a(17957)),
                U = l(a(37286)),
                H = l(a(89115)),
                W = l(a(45425)),
                j = l(a(68390)),
                Y = l(a(13782)),
                q = l(a(68708)),
                K = l(a(8643)),
                X = l(a(87327)),
                z = l(a(45706)),
                Z = l(a(1935)),
                $ = a(79164),
                J = l(a(73626)),
                Q = l(a(42027)),
                ee = l(a(70215)),
                te = a(36474),
                ae = a(82565),
                ne = l(a(58695)),
                le = l(a(57478)),
                oe = a(97849),
                ie = l(a(44589)),
                re = l(a(56830)),
                ue = l(a(75131)),
                se = a(28770),
                de = l(a(26865)),
                ce = l(a(78422)),
                fe = a(7991),
                pe = a(6603),
                me = a(17259),
                he = a(71701),
                ve = l(a(54047)),
                ge = l(a(63805)),
                Ee = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a(e) {
                        var n;
                        return (0, o.default)(this, a), (n = t.call(this, e)).flatListController = new B.default, n._onBlocklistChange = function() {
                            n.state.contactIsBlocked !== !!c.default.get(n.props.contact.id) && n.setState({
                                contactIsBlocked: !!c.default.get(n.props.contact.id)
                            })
                        }, n.onVerificationClick = function() {
                            n.props.onVerification()
                        }, n._onDeleteChat = function() {
                            var e = _.default.assertGet(n.props.contact.id);
                            C.default.deleteOrExitChat(e)
                        }, n.onBlockContact = function() {
                            var e = s.default.createElement(z.default, {
                                contact: n.props.contact
                            });
                            C.default.openModal(s.default.createElement(M.default, {
                                onOK: n.blockContact,
                                okText: H.default.t(282),
                                onCancel: function() {
                                    return C.default.closeModal()
                                },
                                cancelText: H.default.t(1657)
                            }, s.default.createElement(W.default, {
                                id: 283,
                                params: {
                                    contact: e
                                }
                            })))
                        }, n.onReportSpam = function() {
                            C.default.openModal(s.default.createElement(ee.default, {
                                isBusiness: n.props.contact.isBusiness,
                                isGroupChat: !1,
                                onReport: n.reportSpam,
                                onReportBlockClear: n.reportSpamBlockClear,
                                onCancel: function() {
                                    return C.default.closeModal()
                                }
                            }))
                        }, n.reportSpam = function() {
                            var e = _.default.get(n.props.contact.id);
                            e && (0, ae.sendSpamReport)(e, oe.SpamFlow.Account), C.default.closeModal()
                        }, n.reportSpamBlockClear = function() {
                            var e = _.default.get(n.props.contact.id);
                            e && (0, ae.sendSpamBlockClear)(e), C.default.closeModal()
                        }, n.onUnblockContact = function() {
                            var e = s.default.createElement(z.default, {
                                contact: n.props.contact
                            });
                            C.default.openModal(s.default.createElement(M.default, {
                                okText: H.default.t(1468),
                                onOK: n.unblockContact,
                                cancelText: H.default.t(1657),
                                onCancel: function() {
                                    return C.default.closeModal()
                                }
                            }, s.default.createElement(W.default, {
                                id: 1469,
                                params: {
                                    contact: e
                                }
                            })))
                        }, n.blockContact = function() {
                            (0, d.blockContact)(n.props.contact), C.default.closeModal()
                        }, n.unblockContact = function() {
                            (0, d.unblockContact)(n.props.contact), C.default.closeModal()
                        }, n.onClose = function() {
                            n.props.onClose ? n.props.onClose() : n.props.uim.uie.requestDismiss()
                        }, n._onViewPicture = function(e) {
                            if (n._canViewPicture) {
                                var t = e.target;
                                C.default.openModalMedia(s.default.createElement(Z.default, {
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
                            }
                        }, n._onOpenStatus = function() {
                            (0, m.logStatusClick)(n.props.contact.id, (0, $.getProductCatalogSessionId)(n.context))
                        }, n._onDetailImageLoad = function() {
                            n._canViewPicture = !0
                        }, n._canViewPicture = !1, n.state = {
                            contactIsBlocked: !!c.default.get(e.contact.id),
                            scrollDepth: 100
                        }, n
                    }
                    return (0, i.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.listeners.add(c.default, "add remove reset sync", this._onBlocklistChange);
                            var e = this.props.contact;
                            e.businessProfile && !e.businessProfile.stale && e.businessCatalog && g.default.findCarouselCatalog(e.id).catchType(L.ServerStatusCodeError, (function() {
                                __LOG__(3)`Failed to fetch product catalog in contact drawer from server`
                            })), F.default.supportsFeature(F.default.F.MD_BACKEND) && (0, me.getFanOutList)([e.id, (0, he.assertGetMe)()]).then((function(e) {
                                (0, fe.ensureE2ESessions)(e)
                            })), (0, $.getProductCatalogContext)(this.context).session.isAccidental() ? C.default.setDrawerContext("right", (0, $.buildProductCatalogContext)(new J.default, (0, N.getMaybeBizPlatformForLogging)(e.id.toString()), K.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE)) : e.isBusiness && (0, G.canSeeBizProfileV3)() && (0, m.logProfileImpression)(e.id, (0, $.getProductCatalogSessionId)(this.context))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.props.contact;
                            (0, $.getProductCatalogContext)(this.context).session.isAccidental() || e.isBusiness && (0, G.canSeeBizProfileV3)() && (0, m.logProfileExit)(e.id, (0, $.getProductCatalogSessionId)(this.context), this.state.scrollDepth)
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
                            return this.props.contact.businessProfile ? s.default.createElement(T.default, {
                                contact: this.props.contact,
                                onProfilePicLoad: this._onDetailImageLoad,
                                onProfilePicClick: this._onViewPicture,
                                onOpenStatus: this._onOpenStatus,
                                businessProfile: this.props.contact.businessProfile,
                                onProductCatalog: this.props.onProductCatalog
                            }) : null
                        }
                    }, {
                        key: "_renderTopCard",
                        value: function() {
                            var e = this.props.contact;
                            if ((0, G.canSeeBizProfileV3)() && e.isBusiness) return this._renderBusinessProfileTopCard();
                            var t = _.default.get(e.id),
                                a = !e.name && e.notifyName ? s.default.createElement("div", {
                                    className: y.default.nameSecondary
                                }, s.default.createElement(se.TextSpan, {
                                    theme: "muted"
                                }, s.default.createElement(D.default, {
                                    className: y.default.screenName,
                                    direction: "auto",
                                    text: e.notifyName,
                                    selectable: !0
                                }))) : null,
                                n = e.showBusinessCheckmarkAsSecondary && F.default.supportsFeature(F.default.F.VNAME_V_2) ? s.default.createElement("div", {
                                    className: y.default.businessVname
                                }, s.default.createElement(D.default, {
                                    text: e.verifiedName,
                                    direction: "auto"
                                }), s.default.createElement("div", {
                                    className: y.default.icon
                                }, s.default.createElement(ue.default, {
                                    name: "psa-verified"
                                }))) : null,
                                l = t && t.presence ? s.default.createElement(de.default, {
                                    contact: e,
                                    presence: t.presence,
                                    chatstate: t.presence.chatstate,
                                    location: "info"
                                }) : null;
                            return s.default.createElement(R.default, {
                                theme: "padding-large"
                            }, s.default.createElement("div", {
                                className: y.default.avatar
                            }, s.default.createElement(P.default, {
                                id: e.id,
                                size: P.DETAIL_IMAGE_SIZE.LARGE,
                                loader: !0,
                                onLoad: this._onDetailImageLoad,
                                onClick: this._onViewPicture,
                                quality: P.DETAIL_IMAGE_QUALITY.HIGH
                            })), s.default.createElement(se.TextHeader, {
                                level: "2",
                                theme: "large"
                            }, s.default.createElement(z.default, {
                                contact: e,
                                selectable: !0,
                                showBusinessCheckmark: e.showBusinessCheckmarkAsPrimary
                            })), a, s.default.createElement("div", {
                                className: y.default.nameSecondary
                            }, s.default.createElement(se.TextSpan, {
                                theme: "muted"
                            }, n), s.default.createElement(se.TextSpan, {
                                theme: "muted"
                            }, l)), s.default.createElement(U.default, {
                                labels: e.labels
                            }))
                        }
                    }, {
                        key: "_onScroll",
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
                                l = g.default.get(t.id);
                            if (!l) return null;
                            var o = "",
                                i = !1;
                            return (0, G.canSeeBizProfileV3)() && (o = H.default.t(493), i = !0), (0, $.getProductCatalogContext)(this.context).session.isAccidental() ? null : (0, v.hasShop)(t.businessProfile) ? s.default.createElement(le.default, {
                                businessProfile: t.businessProfile,
                                catalog: l,
                                subtitle: o,
                                hideIncompleteRows: i
                            }) : s.default.createElement(E.default, {
                                onProductDetail: n,
                                onProductCatalog: a,
                                catalog: l,
                                subtitle: o,
                                hideIncompleteRows: i,
                                shouldLog: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props.contact,
                                a = s.default.createElement(S.default, {
                                    contact: this.props.contact,
                                    onClose: this.onClose,
                                    flatListController: this.flatListController
                                }),
                                n = _.default.get(t.id);
                            n && (e = s.default.createElement(R.default, null, s.default.createElement(A.default, {
                                a8nText: "li-delete-chat",
                                icon: s.default.createElement(ue.default, {
                                    name: "delete"
                                }),
                                color: "danger",
                                onClick: this._onDeleteChat
                            }, H.default.t(601))));
                            var l = null;
                            l = this.state.contactIsBlocked ? s.default.createElement(R.default, null, s.default.createElement(A.default, {
                                a8nText: "li-unblock",
                                color: "success",
                                icon: s.default.createElement(ue.default, {
                                    name: "settings-blocked",
                                    directional: !0
                                }),
                                onClick: this.onUnblockContact
                            }, H.default.t(1468))) : s.default.createElement(R.default, null, s.default.createElement(A.default, {
                                a8nText: "li-block",
                                color: "danger",
                                icon: s.default.createElement(ue.default, {
                                    name: "settings-blocked",
                                    directional: !0
                                }),
                                onClick: this.onBlockContact
                            }, H.default.t(282)));
                            var o = s.default.createElement(R.default, null, s.default.createElement(A.default, {
                                    a8nText: "li-report-spam",
                                    color: "danger",
                                    icon: s.default.createElement(ue.default, {
                                        name: "thumbs-down",
                                        directional: !0
                                    }),
                                    onClick: this.onReportSpam
                                }, t.isBusiness ? H.default.t(1293) : H.default.t(1296))),
                                i = null;
                            if (this.props.onMediaGallery && n) {
                                var r = this.props.onMediaGallery,
                                    u = s.default.createElement(ue.default, {
                                        className: y.default.chevron,
                                        name: "chevron-right-alt",
                                        directional: !0
                                    }),
                                    d = H.default.t(1008);
                                i = s.default.createElement(R.default, {
                                    a8nText: "section-media",
                                    title: d,
                                    titleOnClick: r,
                                    subtitle: u,
                                    theme: "padding"
                                }, s.default.createElement(q.default, {
                                    chat: n,
                                    mediaMsgs: n.getMediaMsgs()
                                }))
                            }
                            var c = null;
                            F.default.supportsFeature(F.default.F.LIVE_LOCATIONS) && n && (c = s.default.createElement(Y.default, {
                                chat: n,
                                onClick: this.props.onLiveLocation
                            }));
                            var m = null,
                                v = null;
                            (0, G.canSeeBizProfileV3)() ? v = this.renderProductCatalogSection(): m = this.renderProductCatalogSection();
                            var g = n && n.mute.canMute() ? s.default.createElement(X.default, {
                                    chat: n,
                                    mute: n.mute,
                                    settings: ne.default
                                }) : null,
                                E = null;
                            if (this.props.onStarred) {
                                var C = s.default.createElement(ue.default, {
                                    className: y.default.chevron,
                                    name: "chevron-right-alt",
                                    directional: !0
                                });
                                E = s.default.createElement(I.default, {
                                    a8nText: "block-starred-messages",
                                    side: C,
                                    onClick: this.props.onStarred
                                }, s.default.createElement(se.TextSpan, {
                                    theme: "title"
                                }, H.default.t(520)))
                            }
                            var M = n && n.shouldShowEphemeralSetting() ? s.default.createElement(x.default, {
                                    onClick: this.props.onEphemeral,
                                    chat: n
                                }) : null,
                                N = null,
                                T = n && n.getReceivedVcardMsgs();
                            if (F.default.supportsFeature(F.default.F.INDEX_RECEIVED_VCARD) && T && T.length) {
                                var P = s.default.createElement(ue.default, {
                                    className: y.default.chevron,
                                    name: "chevron-right-alt",
                                    directional: !0
                                });
                                N = s.default.createElement(I.default, {
                                    a8nText: "block-contact-card",
                                    side: P,
                                    onClick: this.props.onContactCard
                                }, s.default.createElement(se.TextSpan, {
                                    theme: "title"
                                }, H.default.t(573, {
                                    _plural: T.length
                                })))
                            }
                            var O = F.default.supportsFeature(F.default.F.MD_BACKEND) ? s.default.createElement(_e, {
                                    reducedPrivacyMode: (0, pe.getReducedPrivacyMode)(this.props.contact.privacyMode),
                                    onVerificationClick: this.onVerificationClick,
                                    contactId: this.props.contact.id
                                }) : null,
                                D = null;
                            (g || E || M || N || O) && (D = s.default.createElement(R.default, null, g, E, M, N, O));
                            var L, B, V = s.default.createElement(I.default, {
                                    multiline: !0
                                }, s.default.createElement(se.TextSpan, {
                                    theme: "title"
                                }, s.default.createElement(re.default, {
                                    id: t.id
                                }))),
                                W = s.default.createElement(I.default, null, s.default.createElement(te.SelectableSpan, {
                                    dir: "auto",
                                    selectable: !0
                                }, s.default.createElement(se.TextSpan, {
                                    theme: "title"
                                }, (0, ce.default)(t.id)))),
                                j = s.default.createElement(R.default, {
                                    a8nText: "section-about-and-phone-number"
                                }, s.default.createElement("div", {
                                    className: y.default.titleAbout
                                }, s.default.createElement(se.TextSpan, {
                                    theme: "section-title"
                                }, H.default.t(574))), V, W),
                                K = this._renderTopCard(),
                                z = null,
                                Z = void 0;
                            return t.isBusiness && t.businessProfile && ((0, G.canSeeBizProfileV3)() && t.businessProfile ? (z = s.default.createElement(p.default, {
                                businessProfile: t.businessProfile,
                                contact: t
                            }), L = s.default.createElement(f.default, {
                                contact: t
                            }), t.labels && t.labels.length > 0 && (B = s.default.createElement(R.default, {
                                theme: "padding"
                            }, s.default.createElement(U.default, {
                                labels: t.labels,
                                theme: "standalone"
                            }))), Z = this._onScroll.bind(this)) : t.businessProfile && (z = s.default.createElement(h.default, {
                                contact: t,
                                businessProfile: t.businessProfile
                            }))), s.default.createElement(b.default, {
                                key: "contact-info-modal",
                                theme: "striped"
                            }, s.default.createElement(w.default, {
                                title: H.default.t(1669),
                                type: w.DRAWER_HEADER_TYPE.SMALL,
                                darwinRtlFix: !0,
                                onCancel: this.onClose
                            }), s.default.createElement(k.default, {
                                flatListControllers: [this.flatListController],
                                onScroll: Z
                            }, s.default.createElement("section", {
                                className: y.default.body
                            }, K, L, B, v, z, c, m, i, D, j, null, a, l, o, e)))
                        }
                    }]), a
                }(s.Component);

            function _e(e) {
                e.reducedPrivacyMode;
                var t = e.onVerificationClick,
                    a = (e.contactId, ge.default.isVoiceCallEnabled() || ge.default.isVideoCallEnabled() ? H.default.t(1673) : H.default.t(1672));
                return s.default.createElement(ve.default, {
                    onClick: t,
                    text: a
                })
            }
            Ee.contextType = O.default, Ee.CONCERNS = {
                contact: ["id", "formattedName", "formattedUser", "formattedShortName", "isBusiness", "isEnterprise", "isMyContact", "commonGroups", "businessProfile", "showBusinessCheckmarkAsPrimary", "showBusinessCheckmarkAsSecondary", "verifiedName", "verifiedLevel", "name", "notifyName", "labels", "businessCatalog", "isContactBlocked", "isMe", "statusMute", "privacyMode"]
            }, Ee.displayName = "ContactInfoDrawer";
            var Ce = (0, V.default)((0, Q.default)((0, j.default)((0, ie.default)(Ee, Ee.CONCERNS))));
            t.default = Ce
        },
        77365: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a = e.contact,
                    n = e.businessProfile,
                    p = e.onOpenStatus,
                    m = e.onProductCatalog,
                    h = e.onProfilePicLoad,
                    v = e.onProfilePicClick,
                    g = (0, f.default)(n, ["businessHours", "categories"]),
                    E = g.businessHours,
                    _ = g.categories,
                    C = l.default.createElement(i.default, {
                        contact: a
                    });
                null != _ && _.length > 0 && (t = l.default.createElement("div", {
                    className: u.default.categories
                }, _.map((function(e) {
                    return e.localized_display_name
                })).join(d.default.t(657))));
                var S = E ? l.default.createElement(c.default, {
                    hours: E
                }) : null;
                return l.default.createElement(s.default, {
                    className: u.default.noPaddingBottom,
                    theme: "padding"
                }, l.default.createElement(r.default, {
                    contact: a,
                    onClick: v,
                    onOpenStatus: p,
                    onLoad: h
                }), l.default.createElement("div", {
                    className: u.default.info
                }, C, t, S, l.default.createElement(o.default, {
                    contact: a,
                    onProductCatalog: m
                })))
            };
            var l = n(a(67294)),
                o = n(a(57495)),
                i = n(a(96910)),
                r = n(a(47322)),
                u = n(a(32234)),
                s = n(a(51376)),
                d = n(a(89115)),
                c = n(a(51804)),
                f = n(a(33819))
        },
        47518: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            });
            var l = n(a(62570))
        },
        51804: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.hours,
                    a = function(e) {
                        switch (e.status) {
                            case u.BUSINESS_OPEN_STATUS.OPEN_24H:
                                return i.default.t(368, {
                                    open: `<span class="${r.default.open}">${i.default.t(366)}</span>`
                                });
                            case u.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                                return i.default.t(369, {
                                    open: `<span class="${r.default.open}">${i.default.t(366)}</span>`
                                });
                            case u.BUSINESS_OPEN_STATUS.OPEN:
                                if (e.openUntil && e.additionalOpen && e.additionalClose) return i.default.t(373, {
                                    open: `<span class="${r.default.open}">${i.default.t(366)}</span>`,
                                    time: s(e.openUntil),
                                    additionalOpenTime: s(e.additionalOpen),
                                    additionalCloseTime: s(e.additionalClose)
                                });
                                if (e.openUntil) return i.default.t(372, {
                                    open: `<span class="${r.default.open}">${i.default.t(366)}</span>`,
                                    time: s(e.openUntil)
                                });
                                break;
                            case u.BUSINESS_OPEN_STATUS.CLOSED:
                                return e.opensAt ? i.default.t(358, {
                                    closed: `<span class="${r.default.closed}">${i.default.t(357)}</span>`,
                                    time: s(e.opensAt)
                                }) : `<span class="${r.default.closed}">${i.default.t(357)}</span>`;
                            case u.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                                return `<span class="${r.default.closed}">${i.default.t(359)}</span>`
                        }
                        return null
                    }((0, u.getBusinessOpenState)(t));
                if (null == a) return null;
                var n = l.default.sanitize(a);
                return o.default.createElement("div", {
                    className: r.default.openStatus,
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                })
            };
            var l = n(a(27856)),
                o = n(a(67294)),
                i = n(a(89115)),
                r = n(a(13916)),
                u = a(89822);

            function s(e) {
                return null == e ? "" : e.toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit"
                })
            }
        },
        54047: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                if (o.default.supportsFeature(o.default.F.MD_BACKEND)) {
                    var t, a = e.onClick,
                        n = e.text,
                        c = l.default.createElement(r.default, {
                            name: "lock",
                            className: s.default.icon
                        });
                    return l.default.createElement(u.default, {
                        onClick: a,
                        side: c,
                        multiline: !0
                    }, l.default.createElement("div", {
                        className: s.default.header
                    }, l.default.createElement(i.TextSpan, {
                        theme: "title"
                    }, null !== (t = e.title) && void 0 !== t ? t : d.default.t(1700))), l.default.createElement(i.TextDiv, {
                        theme: "muted"
                    }, n))
                }
                return null
            };
            var l = n(a(67294)),
                o = n(a(22021)),
                i = a(28770),
                r = n(a(75131)),
                u = n(a(82745)),
                s = n(a(21477)),
                d = n(a(89115))
        },
        2714: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(67154)),
                i = l(a(63038)),
                r = l(a(319)),
                u = l(a(87757)),
                s = l(a(48926)),
                d = l(a(34575)),
                c = l(a(93913)),
                f = l(a(81506)),
                p = l(a(2205)),
                m = l(a(99842)),
                h = n(a(67294)),
                v = l(a(97930)),
                g = l(a(99472)),
                E = l(a(31828)),
                _ = l(a(10598)),
                C = l(a(26671)),
                S = l(a(79140)),
                M = l(a(34541)),
                y = l(a(25960)),
                N = l(a(34263)),
                T = l(a(81997)),
                P = l(a(82745)),
                b = l(a(25259)),
                I = l(a(10869)),
                k = n(a(62647)),
                A = l(a(51376)),
                O = l(a(33079)),
                w = l(a(80297)),
                R = l(a(41769)),
                D = l(a(42715)),
                x = l(a(31660)),
                L = n(a(98569)),
                B = n(a(60482)),
                F = l(a(50842)),
                G = a(71701),
                V = l(a(22021)),
                U = l(a(17847)),
                H = l(a(11514)),
                W = l(a(17957)),
                j = a(12518),
                Y = l(a(37286)),
                q = l(a(89115)),
                K = n(a(46515)),
                X = l(a(68390)),
                z = l(a(13782)),
                Z = l(a(68708)),
                $ = a(11367),
                J = l(a(87327)),
                Q = a(45706),
                ee = l(a(54634)),
                te = l(a(84520)),
                ae = l(a(32874)),
                ne = a(95373),
                le = l(a(42027)),
                oe = l(a(70215)),
                ie = l(a(2740)),
                re = a(82565),
                ue = l(a(63056)),
                se = a(61934),
                de = a(31914),
                ce = l(a(58695)),
                fe = a(97849),
                pe = l(a(44589)),
                me = a(89305),
                he = l(a(97181)),
                ve = l(a(75131)),
                ge = a(28770),
                Ee = n(a(79077)),
                _e = n(a(92631)),
                Ce = l(a(4268)),
                Se = l(a(88117)),
                Me = l(a(12717)),
                ye = a(17890),
                Ne = l(a(54047)),
                Te = l(a(63805)),
                Pe = a(38271),
                be = (0, _e.genId)("max_participant_toast"),
                Ie = function(e) {
                    (0, p.default)(a, e);
                    var t = (0, m.default)(a);

                    function a(e) {
                        var n;
                        (0, d.default)(this, a), (n = t.call(this, e))._participantFlatListController = new F.default, n._pendingParticipantFlatListController = new F.default, n._setRefContainer = function(e) {
                            n._refContainer = e
                        }, n._updateGroupDescOnModelChange = function() {
                            n.props.groupMetadata && n.setState({
                                groupDesc: n.props.groupMetadata.desc
                            })
                        }, n.onImageSet = function(e, t) {
                            var a = n.props.profilePicThumb;
                            n.setState({
                                pendingPhoto: !0
                            }), (e && t ? (0, ne.setProfilePic)(a, e, t) : (0, ne.deleteProfilePic)(a)).checkpoint(n.props.rejectOnUnmount()).catchType(L.Unmount, (function() {})).catchType(L.ActionError, (function() {
                                __LOG__(3)`GroupInfoDrawer: failed to set/delete group image`, n.setState({
                                    resetPhotoPicker: !n.state.resetPhotoPicker
                                })
                            })).finally((function() {
                                n.setState({
                                    pendingPhoto: !1
                                })
                            }))
                        }, n.onParticipantClick = function(e, t) {
                            Me.default.equals((0, G.getMaybeMeUser)(), t.id) || C.default.find(t.id).then((function(e) {
                                M.default.openChatFromUnread(e).then((function(t) {
                                    t && M.default.focusChatTextInput(e)
                                }))
                            }))
                        }, n._menuEnabled = function(e) {
                            var t = n.props.groupMetadata.participants,
                                a = t.get(e.id);
                            return !!a && (t.canPromote(a) || t.canRemove(a) || t.canVerifyIdentity(a))
                        }, n.onDemoteAdmin = function(e) {
                            e.contact.pendingAction++, (0, $.demoteParticipants)(n.props.chat, [e]).then((function() {
                                e.contact.pendingAction--
                            })), n.setState({
                                contextMenu: null
                            })
                        }, n.onParticipantMenu = function(e, t) {
                            var a = n.props.groupMetadata.participants,
                                l = a.assertGet(t.id);
                            if (n._menuEnabled(t)) {
                                var o = [];
                                if (a.canPromote(l)) {
                                    var i = n._confirmParticipantPromote.bind((0, f.default)(n), l);
                                    o.push(h.default.createElement(O.default, {
                                        a8n: "mi-grp-promote-admin",
                                        key: "promote",
                                        action: i
                                    }, q.default.t(1016)))
                                }
                                if (a.canRemove(l)) {
                                    var r = n._confirmParticipantRemove.bind((0, f.default)(n), l);
                                    o.push(h.default.createElement(O.default, {
                                        a8n: "mi-grp-remove-participant",
                                        key: "remove",
                                        action: r
                                    }, q.default.t(1021)))
                                }
                                if (V.default.supportsFeature(V.default.F.GROUPS_V_3) && a.canDemote(l)) {
                                    var u = n.onDemoteAdmin.bind((0, f.default)(n), l);
                                    o.push(h.default.createElement(O.default, {
                                        a8n: "mi-grp-verify-identify",
                                        key: "demote-admin",
                                        action: u
                                    }, q.default.t(624)))
                                }
                                if (V.default.supportsFeature(V.default.F.MD_BACKEND) && a.canVerifyIdentity(l)) {
                                    var s = n._onVerifyIdentity.bind((0, f.default)(n), l);
                                    o.push(h.default.createElement(O.default, {
                                        a8n: "mi-grp-verify-identify",
                                        key: "verify-identity",
                                        action: s
                                    }, q.default.t(1954)))
                                }
                                e.event && e.event.persist(), n.setState({
                                    contextMenu: {
                                        contactId: t.id,
                                        menu: o,
                                        anchor: e.anchor,
                                        event: e.event
                                    }
                                })
                            }
                        }, n.closeContextMenu = function() {
                            n.setState({
                                contextMenu: null
                            })
                        }, n._confirmParticipantRemove = function(e) {
                            var t = n.onParticipantRemove.bind((0, f.default)(n), e, !0),
                                a = q.default.t(559, {
                                    participant: e.contact.formattedName,
                                    subject: n.props.contact.name
                                });
                            M.default.openModal(h.default.createElement(y.default, {
                                onOK: t,
                                okText: q.default.t(1285),
                                onCancel: function() {
                                    return M.default.closeModal()
                                },
                                cancelText: q.default.t(1657)
                            }, h.default.createElement(R.default, {
                                text: a
                            })))
                        }, n.onParticipantRemove = function(e, t) {
                            e.contact.pendingAction++, (0, $.removeParticipants)(n.props.chat, [e]).then((function() {
                                e.contact.pendingAction--
                            })), t && M.default.closeModal()
                        }, n._confirmParticipantPromote = function(e) {
                            var t = n.onParticipantPromote.bind((0, f.default)(n), e, !0),
                                a = q.default.t(558, {
                                    participant: e.contact.formattedName,
                                    subject: n.props.contact.name
                                });
                            M.default.openModal(h.default.createElement(y.default, {
                                onOK: t,
                                okText: q.default.t(1016),
                                onCancel: function() {
                                    return M.default.closeModal()
                                },
                                cancelText: q.default.t(1657)
                            }, h.default.createElement(R.default, {
                                text: a
                            })))
                        }, n.onParticipantPromote = function(e, t) {
                            e.contact.pendingAction++, (0, $.promoteParticipants)(n.props.chat, [e]).then((function() {
                                e.contact.pendingAction--
                            })), t && M.default.closeModal()
                        }, n._onVerifyIdentity = function(e) {
                            n.props.onVerification && n.props.onVerification(e.contact)
                        }, n._openAddGroupParticipantFlow = function() {
                            var e = n.props.chat;
                            if (n.props.groupMetadata.participants.length >= ue.default.maxParticipants) {
                                var t = q.default.t(98, {
                                    max: ue.default.maxParticipants
                                });
                                M.default.openToast(h.default.createElement(_e.default, {
                                    msg: t,
                                    id: be
                                }))
                            } else {
                                var a = V.default.supportsFeature(V.default.F.GROUPS_V_3) ? h.default.createElement(E.default, {
                                    chat: (0, me.unproxy)(e),
                                    pushTransition: "none",
                                    popTransition: "none"
                                }) : h.default.createElement(g.default, {
                                    chat: (0, me.unproxy)(e),
                                    pushTransition: "none",
                                    popTransition: "none"
                                });
                                M.default.openModal(a, {
                                    transition: "modal-flow"
                                })
                            }
                        }, n._openParticpantSearch = function() {
                            M.default.openModal(h.default.createElement(H.default, {
                                chat: (0, me.unproxy)(n.props.chat),
                                onParticipantPromote: n.onParticipantPromote,
                                onParticipantRemove: n.onParticipantRemove,
                                onDemoteAdmin: n.onDemoteAdmin
                            }), {
                                transition: "modal-flow"
                            })
                        }, n.onClose = function() {
                            n.props.onClose ? n.props.onClose() : n.props.uim.uie.requestDismiss()
                        }, n._onExitOrDeleteGroup = function() {
                            M.default.deleteOrExitChat(n.props.chat)
                        }, n._onGroupDescChange = function(e) {
                            n.setState({
                                groupDesc: e
                            })
                        }, n._onSetSubject = function() {
                            var e = (0, s.default)(u.default.mark((function e(t) {
                                var a;
                                return u.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ((a = (0, D.default)(t)) !== n.props.contact.name) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return e.next = 5, (0, de.setGroupSubject)(n.props.chat, a).catchType(L.Unmount, (function() {})).catch((function() {
                                                __LOG__(3)`group_info_drawer:onSetSubject failed`
                                            }));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(), n._onSetDescription = function() {
                            var e = n.props,
                                t = e.chat,
                                a = e.groupMetadata;
                            if (a.canSetDescription()) {
                                var l = n.state.groupDesc || "",
                                    o = l.match(/\r\n/gm) ? "\r\n" : "\n",
                                    i = new RegExp(`^(${o}{2,})([^\n])`, "gm");
                                l = l.replace(i, `${o}$2`);
                                var r = (0, D.default)(l || "");
                                if (r === a.desc) return n.setState({
                                    groupDesc: r
                                });
                                n.setState({
                                    pendingDesc: !0
                                }), (0, se.setGroupDesc)(t, r).then((function() {
                                    n.setState({
                                        groupDesc: a.desc,
                                        pendingDesc: !1
                                    })
                                })).catchType(L.Unmount, (function() {})).catch((function() {
                                    __LOG__(3)`group_info_drawer:onSetDescription failed`, n.setState({
                                        groupDesc: n.props.groupMetadata.desc,
                                        pendingDesc: !1
                                    })
                                }))
                            }
                        }, n._onCancelDesc = function() {
                            n.setState({
                                groupDesc: n.props.groupMetadata.desc
                            })
                        }, n.showEncryptionInfoPopup = function() {
                            M.default.openModal(h.default.createElement(w.default, {
                                chatId: n.props.chat.id,
                                e2eSubtype: "info_encrypted"
                            }))
                        }, n._showSecurityInfoPopup = function() {
                            M.default.openModal(h.default.createElement(w.default, {
                                chat: n.props.chat,
                                chatId: n.props.chat.id,
                                e2eSubtype: "info_encrypted"
                            }))
                        }, n.onShowMore = function() {
                            n.setState({
                                participantListCollapsed: !1
                            })
                        }, n._onShowMorePendingParticipants = function() {
                            n.setState({
                                pendingParticipantListCollapsed: !1
                            })
                        }, n.renderItem = function(e) {
                            var t = e.id,
                                a = n.props.groupMetadata.participants.get(t);
                            if (!a) throw new B.UnknownDataError(e);
                            var l = a.contact,
                                o = !!n.state.contextMenu && Me.default.equals(l.id, n.state.contextMenu.contactId);
                            return h.default.createElement(ee.default, {
                                contact: l,
                                participant: a,
                                key: a.id.toString(),
                                onClick: n.onParticipantClick,
                                contextEnabled: n._menuEnabled.bind((0, f.default)(n), l),
                                contextMenu: o,
                                onContext: function(e) {
                                    return n.onParticipantMenu(e, l)
                                },
                                showNotifyName: !0,
                                waitIdle: !0
                            })
                        }, n.onReportSpam = function() {
                            M.default.openModal(h.default.createElement(oe.default, {
                                isGroupChat: !0,
                                onReport: n.reportSpam,
                                onReportExitClear: n.reportSpamExitClear,
                                onCancel: function() {
                                    return M.default.closeModal()
                                }
                            }))
                        }, n.reportSpam = function() {
                            (0, re.sendSpamReport)(n.props.chat, fe.SpamFlow.Group), M.default.closeModal()
                        }, n.reportSpamExitClear = function() {
                            (0, re.sendSpamExitClear)(n.props.chat), M.default.closeModal()
                        }, n._onDescriptionReadMore = function() {
                            n.setState({
                                descTruncated: !1
                            })
                        }, n._showEditRestrictionInfo = function() {
                            M.default.openModal(h.default.createElement(y.default, {
                                onOK: function() {
                                    return M.default.closeModal()
                                },
                                okText: q.default.t(1826)
                            }, q.default.t(1197)))
                        }, n.revokeGrpV4Invite = function(e) {
                            M.default.openModal(h.default.createElement(y.default, {
                                onOK: function() {
                                    M.default.closeModal(), n.props.groupMetadata.revokeGroupV4AddInvite([e.id.toString()]).then((function() {
                                        M.default.openToast(h.default.createElement(_e.default, {
                                            msg: q.default.t(1780),
                                            id: (0, _e.genId)()
                                        }))
                                    }))
                                },
                                okText: q.default.t(1885),
                                onCancel: function() {
                                    return M.default.closeModal()
                                },
                                cancelText: q.default.t(1657)
                            }, h.default.createElement(R.default, {
                                text: q.default.t(843, {
                                    participant: e.contact.formattedName
                                })
                            })))
                        }, n._renderPendingParticipantItem = function(e) {
                            var t = e.id,
                                a = n.props.groupMetadata.pendingParticipants.get(t);
                            if (!a) throw new B.UnknownDataError(e);
                            var l = a.contact;
                            return h.default.createElement(ee.default, {
                                contact: l,
                                participant: a,
                                key: a.id.toString(),
                                contextEnabled: function() {
                                    return !0
                                },
                                contextMenu: !0,
                                onContext: function(e) {
                                    return n._onPendingParticipantMenu(e, l)
                                },
                                showNotifyName: !0,
                                isPendingParticipant: !0,
                                waitIdle: !0
                            })
                        }, n._onPendingParticipantMenu = function(e, t) {
                            var a = n.props.groupMetadata.pendingParticipants.assertGet(t.id),
                                l = [h.default.createElement(O.default, {
                                    a8n: "mi-grp-promote-admin",
                                    key: "promote",
                                    action: n.revokeGrpV4Invite.bind((0, f.default)(n), a)
                                }, q.default.t(1323))];
                            e.event && e.event.persist(), n.setState({
                                contextMenu: {
                                    contactId: t.id,
                                    menu: l,
                                    anchor: e.anchor,
                                    event: e.event
                                }
                            })
                        };
                        var l = n.props,
                            o = l.groupMetadata,
                            i = o.desc,
                            r = o.participants,
                            c = o.pendingParticipants,
                            p = l.showFullGroupDescription;
                        return n.state = {
                            pendingDesc: !1,
                            pendingPhoto: !1,
                            contextMenu: null,
                            groupDraftSubject: null,
                            groupDesc: i,
                            descTruncated: !p && !!(i && i.length > 30),
                            participantListCollapsed: r.length > N.default.INFO_DRAWER_MAX_ROWS,
                            pendingParticipantListCollapsed: c.length > N.default.INFO_DRAWER_MAX_ROWS,
                            resetPhotoPicker: !1
                        }, n
                    }
                    return (0, c.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props.groupMetadata;
                            V.default.supportsFeature(V.default.F.MD_BACKEND) && (0, Pe.queryAndUpdateGroupMetadataById)(t.id), V.default.supportsFeature(V.default.F.GROUPS_V_4_JOIN_PERMISSION) && t.queryGroupV4PendingInvite(), this.props.listeners.add(t.participants, "add remove reset sort change:isAdmin change:isSuperAdmin", (function() {
                                e.forceUpdate()
                            })), this.props.listeners.add(t.pendingParticipants, "add remove reset", (function() {
                                e.forceUpdate()
                            })), this.props.listeners.add(t, "change:desc", (function() {
                                e._updateGroupDescOnModelChange()
                            })), this.ensureParticipantsSorted(), V.default.supportsFeature(V.default.F.MD_BACKEND) && this.props.scrollToParticipantList && this._refContainer && (0, ye.scrollIntoViewIfNeeded)(this._refContainer, !1)
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
                        key: "getData",
                        value: function() {
                            var e, t = [],
                                a = [],
                                n = this.props.groupMetadata.participants;
                            n.forEach((function(n) {
                                n.contact.isMe ? e = n : n.isAdmin ? t.push(n) : a.push(n)
                            }));
                            var l = [];
                            return e && l.push(e), l = l.concat(t, a), n.length > N.default.INFO_DRAWER_MAX_ROWS && this.state.participantListCollapsed && (l = l.slice(0, N.default.INFO_DRAWER_MAX_ROWS)), l.map((function(e) {
                                return {
                                    itemKey: e.id.toString(),
                                    id: e.id
                                }
                            }))
                        }
                    }, {
                        key: "_getPendingParticipantListData",
                        value: function() {
                            var e = this.props.groupMetadata.pendingParticipants.toArray(),
                                t = (0, r.default)(e);
                            return e.length > N.default.INFO_DRAWER_MAX_ROWS && this.state.pendingParticipantListCollapsed && (t = t.slice(0, N.default.INFO_DRAWER_MAX_ROWS)), t.map((function(e) {
                                return {
                                    itemKey: e.id.toString(),
                                    id: e.id
                                }
                            }))
                        }
                    }, {
                        key: "_getTitle",
                        value: function() {
                            return ue.default.productMediaAttachments ? q.default.t(1009) : q.default.t(1008)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a, n, l, o, i, r = this.props,
                                u = r.chat,
                                s = r.groupMetadata,
                                d = h.default.createElement(A.default, null, h.default.createElement(I.default, {
                                    a8nText: "li-delete-group",
                                    icon: h.default.createElement(ve.default, {
                                        name: "exit",
                                        directional: !0
                                    }),
                                    theme: "list-aligned",
                                    color: "danger",
                                    onClick: this._onExitOrDeleteGroup
                                }, u.isReadOnly ? q.default.t(1697) : q.default.t(1702)));
                            if (u.isReadOnly || (e = h.default.createElement(A.default, null, h.default.createElement(I.default, {
                                    a8nText: "li-report-spam",
                                    theme: "list-aligned",
                                    color: "danger",
                                    icon: h.default.createElement(ve.default, {
                                        name: "thumbs-down",
                                        directional: !0
                                    }),
                                    onClick: this.onReportSpam
                                }, q.default.t(1300)))), s.participants.canAdd() && !s.support) {
                                var c = h.default.createElement(ie.default, null, h.default.createElement(ve.default, {
                                    name: "add-user",
                                    directional: !0
                                }));
                                t = h.default.createElement(_.default, {
                                    image: c,
                                    theme: "drawer-list",
                                    primary: q.default.t(215),
                                    onClick: this._openAddGroupParticipantFlow
                                })
                            }
                            if (s.participants.iAmAdmin() && this.props.onGroupInviteLink && !s.support) {
                                var f = h.default.createElement(ie.default, null, h.default.createElement(ve.default, {
                                    name: "link"
                                }));
                                a = h.default.createElement(_.default, {
                                    image: f,
                                    theme: "drawer-list",
                                    primary: q.default.t(805),
                                    onClick: this.props.onGroupInviteLink
                                })
                            }
                            if (s.participants.length > N.default.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST && this.state.participantListCollapsed) {
                                var p = s.participants.length - N.default.INFO_DRAWER_MAX_ROWS,
                                    m = h.default.createElement(ie.default, {
                                        theme: "transparent"
                                    }, h.default.createElement(ve.default, {
                                        name: "down"
                                    }));
                                n = h.default.createElement(_.default, {
                                    image: m,
                                    theme: "drawer-list",
                                    primary: q.default.t(831, {
                                        count: p,
                                        _plural: p
                                    }),
                                    onClick: this.onShowMore
                                })
                            }
                            if (s.pendingParticipants.length > N.default.INFO_DRAWER_MAX_ROWS && this.state.pendingParticipantListCollapsed && !V.default.supportsFeature(V.default.F.MD_BACKEND)) {
                                var g = s.pendingParticipants.length - N.default.INFO_DRAWER_MAX_ROWS,
                                    E = h.default.createElement(ie.default, {
                                        theme: "transparent"
                                    }, h.default.createElement(ve.default, {
                                        name: "down"
                                    }));
                                l = h.default.createElement(_.default, {
                                    image: E,
                                    theme: "drawer-list",
                                    primary: q.default.t(831, {
                                        count: g,
                                        _plural: g
                                    }),
                                    onClick: this._onShowMorePendingParticipants
                                })
                            }
                            if (s.pendingParticipants.length > 0 && !V.default.supportsFeature(V.default.F.MD_BACKEND) && (o = h.default.createElement(B.default, {
                                    flatListController: this._pendingParticipantFlatListController,
                                    direction: "vertical",
                                    forceConsistentRenderCount: !1,
                                    data: this._getPendingParticipantListData(),
                                    renderItem: this._renderPendingParticipantItem
                                })), s.participants.iAmAdmin() && V.default.supportsFeature(V.default.F.GROUPS_V_3) && !s.support) {
                                var C = h.default.createElement(ve.default, {
                                    className: U.default.chevron,
                                    name: "chevron-right-alt",
                                    directional: !0
                                });
                                i = h.default.createElement(P.default, {
                                    onClick: this.props.onAdminSetting,
                                    side: C
                                }, h.default.createElement(ge.TextSpan, {
                                    theme: "title"
                                }, q.default.t(829)))
                            }
                            var M, y = h.default.createElement(ve.default, {
                                    name: "search",
                                    className: U.default.iconSearch
                                }),
                                O = s.participants.length ? h.default.createElement(A.default, {
                                    onRef: this._setRefContainer,
                                    a8nText: "section-participants",
                                    title: q.default.t(1828, {
                                        count: s.participants.length,
                                        _plural: s.participants.length
                                    }),
                                    titleOnClick: V.default.supportsFeature(V.default.F.GROUPS_V_3) ? this._openParticpantSearch : void 0,
                                    subtitle: V.default.supportsFeature(V.default.F.GROUPS_V_3) ? y : void 0
                                }, t, a, h.default.createElement(B.default, {
                                    flatListController: this._participantFlatListController,
                                    direction: "vertical",
                                    forceConsistentRenderCount: !1,
                                    data: this.getData(),
                                    renderItem: this.renderItem
                                }), n) : null;
                            s.participants.iAmAdmin() && s.pendingParticipants.length > 0 && (M = h.default.createElement(A.default, {
                                a8nText: "section-participants",
                                title: q.default.t(835, {
                                    number: s.pendingParticipants.length
                                })
                            }, o, l));
                            var w = null;
                            if (this.props.onMediaGallery) {
                                var R = this.props.onMediaGallery,
                                    D = h.default.createElement(ve.default, {
                                        className: U.default.chevron,
                                        name: "chevron-right-alt",
                                        directional: !0
                                    }),
                                    L = this._getTitle();
                                w = h.default.createElement(A.default, {
                                    a8nText: "section-media",
                                    title: L,
                                    titleOnClick: R,
                                    subtitle: D,
                                    theme: "padding"
                                }, h.default.createElement(Z.default, {
                                    chat: (0, me.unproxy)(u),
                                    mediaMsgs: u.getMediaMsgs()
                                }))
                            }
                            var F = this.props.contact.profilePicThumb,
                                G = ae.default.GROUP,
                                H = u.isReadOnly || !F.canDelete() && !F.canSet() || u.isSupportGroup(),
                                W = h.default.createElement("div", {
                                    className: U.default.avatar
                                }, h.default.createElement(te.default, {
                                    key: String(this.state.resetPhotoPicker),
                                    type: G,
                                    id: this.props.contact.id,
                                    attachToChat: !0,
                                    pending: this.state.pendingPhoto,
                                    startImage: this.props.profilePicThumb.imgFull,
                                    readOnly: H,
                                    onImageSet: this.onImageSet
                                })),
                                X = null;
                            this.props.groupMetadata.creation && (X = h.default.createElement("div", {
                                "data-a8n": v.default.key("group-created-time"),
                                className: U.default.nameSecondary
                            }, h.default.createElement(ge.TextSpan, {
                                theme: "muted"
                            }, S.default.createdStr(this.props.groupMetadata.creation, this.props.chat.isSupportGroup()))));
                            var $ = null;
                            V.default.supportsFeature(V.default.F.LIVE_LOCATIONS) && ($ = h.default.createElement(z.default, {
                                chat: u,
                                onClick: this.props.onLiveLocation
                            }));
                            var ee = u && u.shouldShowEphemeralSetting() ? h.default.createElement(x.default, {
                                    onClick: this.props.onEphemeral,
                                    chat: u,
                                    groupMetadata: s
                                }) : null,
                                ne = null;
                            V.default.supportsFeature(V.default.F.MD_BACKEND) && (ne = h.default.createElement(Ne.default, {
                                onClick: this.showEncryptionInfoPopup,
                                text: Te.default.isGroupCallEnabled() ? q.default.t(1735) : q.default.t(1734)
                            })), this.props.chat.isSupportGroup() && (ne = h.default.createElement(he.default, {
                                onClick: this._showSecurityInfoPopup
                            }));
                            var le, oe = u.mute.canMute() ? h.default.createElement(J.default, {
                                    chat: u,
                                    mute: u.mute,
                                    settings: ce.default
                                }) : null,
                                re = null;
                            if (this.props.onStarred) {
                                var se = h.default.createElement(ve.default, {
                                    className: U.default.chevron,
                                    name: "chevron-right-alt",
                                    directional: !0
                                });
                                re = h.default.createElement(P.default, {
                                    side: se,
                                    onClick: this.props.onStarred
                                }, h.default.createElement(ge.TextSpan, {
                                    theme: "title"
                                }, q.default.t(520)))
                            }
                            this.state.contextMenu && (le = h.default.createElement(Ce.default, {
                                displayName: "ChatContextMenu",
                                escapable: !0,
                                popable: !0,
                                requestDismiss: this.closeContextMenu
                            }, h.default.createElement(Se.default, {
                                contextMenu: this.state.contextMenu
                            })));
                            var de, fe = null;
                            if ((oe || re || ne || ee) && (fe = h.default.createElement(A.default, null, oe, re, ee, ne, i)), V.default.supportsFeature(V.default.F.GROUPS_V_3) && ue.default.groupDescLength > 0) {
                                var pe = this.state.groupDesc || "",
                                    _e = {
                                        textLimit: this.state.descTruncated ? N.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH : 1 / 0,
                                        readMoreText: q.default.t(1283),
                                        onReadMore: this._onDescriptionReadMore,
                                        formatters: this.props.chat.isTrusted() ? j.Configuration.TrustedGroupDesc({
                                            links: K.findLinks(pe)
                                        }) : j.Configuration.UntrustedGroupDesc()
                                    };
                                de = h.default.createElement(A.default, {
                                    theme: "group-desc-padding",
                                    title: q.default.t(794)
                                }, h.default.createElement("div", {
                                    className: U.default.description
                                }, h.default.createElement(Ee.default, {
                                    a8n: "group-info-drawer-description-title-input",
                                    value: pe,
                                    emptyValuePlaceholder: q.default.t(213),
                                    renderEmojiTextInLockMode: _e,
                                    editable: s.canSetDescription(),
                                    pending: this.state.pendingDesc,
                                    showRemaining: !0,
                                    maxLength: ue.default.groupDescLength,
                                    onChange: this._onGroupDescChange,
                                    onSave: this._onSetDescription,
                                    onCancel: this._onCancelDesc,
                                    multiline: !0,
                                    editRestrictionInfo: s.restrict ? this._showEditRestrictionInfo : void 0,
                                    supportsEmoji: !0,
                                    lockable: !0,
                                    lowProfile: !0,
                                    customStyleThemes: [Ee.TextInputCustomStyleThemes.groupInfoName],
                                    theme: "small"
                                })))
                            }
                            return h.default.createElement(T.default, {
                                key: "contact-info-modal",
                                theme: "striped"
                            }, h.default.createElement(k.default, {
                                title: q.default.t(1733),
                                type: k.DRAWER_HEADER_TYPE.SMALL,
                                darwinRtlFix: !0,
                                onCancel: this.onClose
                            }), h.default.createElement(b.default, {
                                flatListControllers: [this._pendingParticipantFlatListController, this._participantFlatListController]
                            }, h.default.createElement("section", {
                                className: U.default.body
                            }, null, h.default.createElement(A.default, {
                                theme: "padding-large"
                            }, W, s.support ? h.default.createElement(ge.TextHeader, {
                                className: U.default.title,
                                level: "2",
                                theme: "large"
                            }, h.default.createElement(Q.GroupNameClass, {
                                chat: u,
                                groupMetadata: s
                            })) : h.default.createElement(ke, {
                                subject: this.props.contact.name,
                                onSave: this._onSetSubject,
                                textInputProps: {
                                    editable: s.canSetSubject(),
                                    editRestrictionInfo: s.restrict ? this._showEditRestrictionInfo : void 0
                                }
                            }), X, h.default.createElement(Y.default, {
                                labels: u.labels
                            })), de, $, w, fe, null, O, M, d, e)), le)
                        }
                    }]), a
                }(h.Component);

            function ke(e) {
                var t = (0, h.useState)(null),
                    a = (0, i.default)(t, 2),
                    n = a[0],
                    l = a[1],
                    r = (0, h.useState)(!1),
                    d = (0, i.default)(r, 2),
                    c = d[0],
                    f = d[1],
                    p = (0, h.useRef)(!1),
                    m = function() {
                        var t = (0, s.default)(u.default.mark((function t() {
                            return u.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n && n !== e.subject) {
                                            t.next = 4;
                                            break
                                        }
                                        return p.current = !1, l(null), t.abrupt("return");
                                    case 4:
                                        return f(!0), t.prev = 5, t.next = 8, e.onSave(n);
                                    case 8:
                                        return t.prev = 8, p.current = !1, l(null), f(!1), t.finish(8);
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [5, , 8, 13]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                return h.default.createElement(Ee.default, (0, o.default)({
                    a8n: "group-info-drawer-subject-input",
                    value: null != n ? n : e.subject,
                    pending: c,
                    showRemaining: !0,
                    validate: function(e) {
                        return !(!e || !e.trim())
                    },
                    maxLength: ue.default.maxSubject,
                    onBeginEdit: function() {
                        p.current = !0
                    },
                    onChange: function(e) {
                        p.current && l(e)
                    },
                    onSave: m,
                    onError: function() {
                        M.default.openModal(h.default.createElement(y.default, {
                            onOK: function() {
                                return M.default.closeModal()
                            },
                            okText: q.default.t(1826)
                        }, q.default.t(126)))
                    },
                    onCancel: function() {
                        p.current = !1, l(null)
                    },
                    supportsEmoji: !0,
                    lockable: !0,
                    lowProfile: !0,
                    theme: "large",
                    customStyleThemes: [Ee.TextInputCustomStyleThemes.groupInfoName]
                }, e.textInputProps))
            }
            Ie.CONCERNS = {
                chat: ["isReadOnly", "mute", "id", "pendingAction", "liveLocation", "labels"],
                groupMetadata: ["id", "desc", "participants", "pendingParticipants", "creation", "restrict", "announce", "support"],
                contact: ["name", "id", "profilePicThumb", "pendingAction"],
                profilePicThumb: ["imgFull"]
            }, Ie.displayName = "GroupInfoDrawer";
            var Ae = (0, W.default)((0, le.default)((0, X.default)((0, pe.default)(Ie, Ie.CONCERNS))));
            t.default = Ae
        },
        11514: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(81506)),
                u = l(a(2205)),
                s = l(a(99842)),
                d = n(a(67294)),
                c = l(a(26671)),
                f = l(a(34541)),
                p = l(a(84576)),
                m = l(a(33079)),
                h = a(71701),
                v = l(a(22021)),
                g = l(a(89115)),
                E = l(a(68390)),
                _ = l(a(4268)),
                C = l(a(88117)),
                S = l(a(12717)),
                M = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, s.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(l))).state = {
                            contextMenu: null
                        }, e.openChat = function(e) {
                            c.default.find(e).then((function(e) {
                                f.default.closeModal(), f.default.openChatFromUnread(e)
                            }))
                        }, e.contextMenu = function(e) {
                            return !S.default.equals((0, h.getMaybeMeUser)(), e)
                        }, e.onParticipantMenu = function(t, a) {
                            var n = e.props.chat.groupMetadata.participants,
                                l = n.assertGet(a.id),
                                o = [];
                            if (n.canPromote(l)) {
                                var i = e.props.onParticipantPromote.bind(null, l, !1);
                                o.push(d.default.createElement(m.default, {
                                    a8n: "mi-grp-promote-admin",
                                    key: "promote",
                                    action: i
                                }, g.default.t(1016)))
                            }
                            if (n.canRemove(l)) {
                                var u = e.props.onParticipantRemove.bind(null, l, !1);
                                o.push(d.default.createElement(m.default, {
                                    a8n: "mi-grp-remove-participant",
                                    key: "remove",
                                    action: u
                                }, g.default.t(1021)))
                            }
                            if (v.default.supportsFeature(v.default.F.GROUPS_V_3) && n.canDemote(l)) {
                                var s = e.props.onDemoteAdmin.bind((0, r.default)(e), l);
                                o.push(d.default.createElement(m.default, {
                                    a8n: "mi-grp-verify-identify",
                                    key: "demote-admin",
                                    action: s
                                }, g.default.t(624)))
                            }
                            S.default.equals((0, h.getMaybeMeUser)(), l.id) || o.push(d.default.createElement(m.default, {
                                key: "message author",
                                action: e.openChat.bind(null, l.contact.id)
                            }, g.default.t(1032, {
                                author: l.contact.formattedName
                            }))), t.anchor || t.event || t.persist(), e.setState({
                                contextMenu: {
                                    contactId: a.id,
                                    menu: o,
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
                            f.default.closeModal()
                        }, e.isAdmin = function(t) {
                            return e.props.chat.groupMetadata.participants.assertGet(t).isAdmin
                        }, e.contactFilter = function(t) {
                            return !!e.props.chat.groupMetadata.participants.get(t.id)
                        }, e
                    }
                    return (0, i.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props.chat.groupMetadata.participants;
                            this.props.listeners.add(t, "add remove reset", (function() {
                                e.forceUpdate()
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e;
                            return this.state.contextMenu && (e = d.default.createElement(_.default, {
                                displayName: "ChatContextMenu",
                                escapable: !0,
                                popable: !0,
                                requestDismiss: this.closeContextMenu
                            }, d.default.createElement(C.default, {
                                contextMenu: this.state.contextMenu
                            }))), d.default.createElement(d.default.Fragment, null, d.default.createElement(p.default, {
                                title: g.default.t(1340),
                                filter: this.contactFilter,
                                onCancel: this.cancel,
                                openContextOnClick: !0,
                                contextEnabled: this.contextEnabled,
                                contextMenu: this.contextMenu,
                                onContext: this.onParticipantMenu,
                                showNotifyName: !0,
                                listenForAdminChange: !0,
                                participantCollection: this.props.chat.groupMetadata.participants
                            }), e)
                        }
                    }]), a
                }(d.Component);
            M.displayName = "GroupParticipantSearch";
            var y = (0, E.default)(M);
            t.default = y
        },
        92511: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                s = l(a(96486)),
                d = n(a(67294)),
                c = a(90695),
                f = l(a(34541)),
                p = l(a(34263)),
                m = l(a(81997)),
                h = l(a(82745)),
                v = l(a(25259)),
                g = n(a(62647)),
                E = l(a(51376)),
                _ = a(71701),
                C = l(a(22021)),
                S = l(a(64287)),
                M = l(a(24007)),
                y = l(a(17957)),
                N = l(a(89115)),
                T = l(a(68390)),
                P = a(11367),
                b = n(a(66132)),
                I = l(a(63056)),
                k = l(a(44589)),
                A = a(28770),
                O = l(a(12717)),
                w = function(e) {
                    var t = e.isRestricted,
                        a = e.onClick;
                    return d.default.createElement(h.default, {
                        onClick: a,
                        multiline: !0
                    }, d.default.createElement("div", {
                        className: S.default.header
                    }, d.default.createElement(A.TextSpan, {
                        theme: "title"
                    }, N.default.t(821))), d.default.createElement(A.TextDiv, {
                        theme: "muted"
                    }, t ? N.default.t(827) : N.default.t(820)))
                },
                R = function(e) {
                    var t = e.isAnnouncement,
                        a = e.onClick;
                    return d.default.createElement(h.default, {
                        onClick: a,
                        multiline: !0
                    }, d.default.createElement("div", {
                        className: S.default.header
                    }, d.default.createElement(A.TextSpan, {
                        theme: "title"
                    }, N.default.t(828))), d.default.createElement(A.TextDiv, {
                        theme: "muted"
                    }, t ? N.default.t(827) : N.default.t(820)))
                },
                D = function(e) {
                    var t = e.isNoFrequentlyForwarded,
                        a = e.onClick,
                        n = I.default.hfmStringChanges ? N.default.t(825) : N.default.t(824);
                    return d.default.createElement(h.default, {
                        onClick: a,
                        multiline: !0
                    }, d.default.createElement("div", {
                        className: S.default.header
                    }, d.default.createElement(A.TextSpan, {
                        theme: "title"
                    }, n)), d.default.createElement(A.TextDiv, {
                        theme: "muted"
                    }, t ? N.default.t(826) : N.default.t(823)))
                },
                x = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(l)))._openSettingModal = function(t) {
                            var a = e.props,
                                n = a.chat,
                                l = a.groupMetadata;
                            f.default.openModal(d.default.createElement(M.default, {
                                settingType: t,
                                chat: n,
                                groupMetadata: l
                            }), {
                                transition: "modal",
                                uim: e.props.uim
                            })
                        }, e._openAnnouncementSettingModal = function() {
                            e._openSettingModal(p.default.GROUP_SETTING_TYPE.ANNOUNCEMENT)
                        }, e._openRestrictedSettingModal = function() {
                            e._openSettingModal(p.default.GROUP_SETTING_TYPE.RESTRICT)
                        }, e._openNoFrequentlyForwardedSettingModal = function() {
                            e._openSettingModal(p.default.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED)
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
                            return O.default.equals(t, a.owner) || (0, _.getMaybeMeUser)().equals(t)
                        }, e._openManageAdminModal = function() {
                            f.default.openModal(d.default.createElement(b.default, {
                                onConfirm: e._updateAdmins,
                                getInitialItems: e._getCurrentAdmins,
                                isDisabled: e.isDisabled,
                                isSelected: e.isDisabled,
                                filter: e._filterParticipants,
                                title: N.default.t(976),
                                useShortName: !0,
                                useAllContacts: !0,
                                listType: b.ListType.PARTICIPANT_MANAGE_MODAL,
                                singleSelectionFooterType: c.FooterType.CONFIRM,
                                multipleSelectionFooterType: c.FooterType.CONFIRM
                            }))
                        }, e._updateAdmins = function(t) {
                            var a = e.props,
                                n = a.chat,
                                l = a.groupMetadata.participants,
                                o = l.filter((function(e) {
                                    return e.isAdmin
                                })),
                                i = s.default.differenceWith(t, o, (function(e, t) {
                                    return e.id.equals(t.id)
                                })).map((function(e) {
                                    return l.assertGet(e.id)
                                })),
                                r = s.default.differenceWith(o, t, (function(e, t) {
                                    return e.id.equals(t.id)
                                }));
                            i.length > 0 && (i.forEach((function(e) {
                                e.contact.pendingAction++
                            })), (0, P.promoteParticipants)(n, i).finally((function() {
                                i.forEach((function(e) {
                                    e.contact.pendingAction--
                                }))
                            }))), r.length > 0 && (r.forEach((function(e) {
                                e.contact.pendingAction++
                            })), (0, P.demoteParticipants)(n, r).finally((function() {
                                r.forEach((function(e) {
                                    e.contact.pendingAction--
                                }))
                            }))), f.default.closeModal()
                        }, e
                    }
                    return (0, i.default)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props.groupMetadata;
                            return d.default.createElement(m.default, {
                                theme: "striped"
                            }, d.default.createElement(g.default, {
                                title: N.default.t(829),
                                type: g.DRAWER_HEADER_TYPE.SMALL,
                                onBack: this.props.onClose
                            }), d.default.createElement(v.default, null, d.default.createElement(E.default, {
                                animation: !1
                            }, d.default.createElement(w, {
                                onClick: this._openRestrictedSettingModal,
                                isRestricted: e.restrict
                            })), C.default.isEphemeralAllowGroupMembersEnabled() ? d.default.createElement("div", {
                                className: S.default.restrictText
                            }, d.default.createElement(A.TextSpan, {
                                theme: "muted"
                            }, N.default.t(642))) : null, d.default.createElement(E.default, {
                                animation: !1
                            }, d.default.createElement(R, {
                                onClick: this._openAnnouncementSettingModal,
                                isAnnouncement: e.announce
                            }), I.default.frequentlyForwardedGroupSetting && C.default.supportsFeature(C.default.F.FREQUENTLY_FORWARDED_SETTING) ? d.default.createElement(D, {
                                onClick: this._openNoFrequentlyForwardedSettingModal,
                                isNoFrequentlyForwarded: e.noFrequentlyForwarded
                            }) : null), d.default.createElement(E.default, {
                                animation: !1
                            }, d.default.createElement(h.default, {
                                onClick: this._openManageAdminModal,
                                multiline: !0
                            }, d.default.createElement("div", {
                                className: S.default.header
                            }, d.default.createElement(A.TextSpan, {
                                theme: "title"
                            }, N.default.t(976)))))))
                        }
                    }]), a
                }(d.Component);
            x.CONCERNS = {
                chat: ["id"],
                groupMetadata: ["restrict", "announce", "noFrequentlyForwarded", "participants", "owner"]
            }, x.displayName = "GroupAdminSetting";
            var L = (0, y.default)((0, T.default)((0, k.default)(x, x.CONCERNS)));
            t.default = L
        },
        24007: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                s = n(a(67294)),
                d = l(a(34263)),
                c = l(a(22021)),
                f = l(a(89115)),
                p = l(a(63056)),
                m = a(98209),
                h = l(a(85099)),
                v = l(a(44589)),
                g = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(l)))._handleSelect = function(t) {
                            var a = e.props,
                                n = a.chat,
                                l = a.settingType;
                            t !== e._getInitialValue() && (0, m.setGroupProperty)(n, l, t).catch((function() {
                                return function() {}
                            }))
                        }, e
                    }
                    return (0, i.default)(a, [{
                        key: "_getOptions",
                        value: function() {
                            switch (this.props.settingType) {
                                case d.default.GROUP_SETTING_TYPE.ANNOUNCEMENT:
                                case d.default.GROUP_SETTING_TYPE.RESTRICT:
                                    return [{
                                        label: f.default.t(820),
                                        value: 0
                                    }, {
                                        label: f.default.t(827),
                                        value: 1
                                    }];
                                case d.default.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
                                    return [{
                                        label: f.default.t(823),
                                        value: 0
                                    }, {
                                        label: f.default.t(826),
                                        value: 1
                                    }];
                                default:
                                    return []
                            }
                        }
                    }, {
                        key: "_getInitialValue",
                        value: function() {
                            var e = this.props,
                                t = e.settingType,
                                a = e.groupMetadata,
                                n = a.restrict,
                                l = a.announce,
                                o = a.noFrequentlyForwarded;
                            switch (t) {
                                case d.default.GROUP_SETTING_TYPE.ANNOUNCEMENT:
                                    return l ? 1 : 0;
                                case d.default.GROUP_SETTING_TYPE.RESTRICT:
                                    return n ? 1 : 0;
                                case d.default.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
                                    return o ? 1 : 0;
                                default:
                                    return 0
                            }
                        }
                    }, {
                        key: "_getPopupTitle",
                        value: function() {
                            switch (this.props.settingType) {
                                case d.default.GROUP_SETTING_TYPE.ANNOUNCEMENT:
                                    return f.default.t(828);
                                case d.default.GROUP_SETTING_TYPE.RESTRICT:
                                    return f.default.t(821);
                                case d.default.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
                                    return p.default.hfmStringChanges ? f.default.t(825) : f.default.t(824);
                                default:
                                    return ""
                            }
                        }
                    }, {
                        key: "_getExplanation",
                        value: function() {
                            return this.props.settingType === d.default.GROUP_SETTING_TYPE.RESTRICT && c.default.isEphemeralAllowGroupMembersEnabled() ? f.default.t(642) : null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return s.default.createElement(h.default, {
                                options: this._getOptions(),
                                initialValue: this._getInitialValue(),
                                title: this._getPopupTitle(),
                                onSelect: this._handleSelect,
                                explanation: this._getExplanation()
                            })
                        }
                    }]), a
                }(s.PureComponent);
            g.CONCERNS = {
                chat: ["id"],
                groupMetadata: ["restrict", "announce", "noFrequentlyForwarded"]
            }, g.displayName = "GroupSettingsPopup";
            var E = (0, v.default)(g, g.CONCERNS);
            t.default = E
        },
        13782: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                s = n(a(67294)),
                d = l(a(51376)),
                c = l(a(89115)),
                f = l(a(68390)),
                p = l(a(90481)),
                m = a(28365),
                h = l(a(66863)),
                v = l(a(44589)),
                g = a(89305),
                E = l(a(75131)),
                _ = a(28770),
                C = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a(e) {
                        var n;
                        return (0, o.default)(this, a), (n = t.call(this, e))._updateParticipants = function() {
                            n.setState({
                                participants: n.getParticipants(n.props.chat)
                            })
                        }, n.state = {
                            participants: n.getParticipants(e.chat)
                        }, n
                    }
                    return (0, i.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props.chat;
                            t.liveLocationQueried || p.default.getActive(t.id.toString()).then((function() {
                                t.liveLocationQueried = !0
                            })).catch((function() {})), this.props.listeners.add((0, g.unproxy)(t), "change:liveLocation", (function() {
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
                                l = 0;
                            if (n.forEach((function(a) {
                                    a.isMe ? e = !0 : (t || (t = a.contact), l++)
                                })), a.isGroup) return e ? 1 === n.length ? c.default.t(949) : c.default.t(948, {
                                count: l,
                                _plural: l
                            }) : c.default.t(945, {
                                count: l,
                                _plural: l
                            });
                            if (e) {
                                if (1 === n.length) return c.default.t(949);
                                if (t) return c.default.t(947, {
                                    name: t.formattedShortNameWithNonBreakingSpaces
                                })
                            } else if (t) return c.default.t(944, {
                                name: t.formattedShortNameWithNonBreakingSpaces
                            });
                            return ""
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.onClick;
                            if (!this.state.participants.length) return null;
                            var t = s.default.createElement(E.default, {
                                name: (0, m.liveLocationIcon)(!0)
                            });
                            return s.default.createElement(d.default, {
                                a8nText: "section-live-location",
                                theme: "padding",
                                title: c.default.t(952),
                                titleOnClick: e
                            }, s.default.createElement(h.default, {
                                side: t,
                                onClick: e
                            }, s.default.createElement(_.TextSpan, {
                                theme: "title"
                            }, this.getText())))
                        }
                    }]), a
                }(s.Component);
            C.CONCERNS = {
                chat: ["id", "isGroup", "liveLocation", "liveLocationQueried"]
            }, C.displayName = "LiveLocationRow";
            var S = (0, f.default)((0, v.default)(C, C.CONCERNS));
            t.default = S
        },
        48310: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.TABS = void 0;
            var o = l(a(59713)),
                i = l(a(34575)),
                r = l(a(93913)),
                u = l(a(2205)),
                s = l(a(99842)),
                d = l(a(94184)),
                c = l(a(96486)),
                f = n(a(67294)),
                p = a(83180),
                m = l(a(45463)),
                h = l(a(81997)),
                v = l(a(25259)),
                g = n(a(62647)),
                E = l(a(89115)),
                _ = l(a(63744)),
                C = l(a(68708)),
                S = l(a(65636)),
                M = l(a(99356)),
                y = l(a(11832)),
                N = l(a(15939)),
                T = l(a(63056)),
                P = l(a(4268)),
                b = l(a(38512)),
                I = {
                    MEDIA: "media",
                    DOCS: "docs",
                    LINKS: "links",
                    PRODUCTS: "products"
                };
            t.TABS = I;
            var k = function(e) {
                (0, u.default)(a, e);
                var t = (0, s.default)(a);

                function a() {
                    var e;
                    return (0, i.default)(this, a), (e = t.apply(this, arguments)).state = {
                        selected: e.props.initialTab,
                        direction: null,
                        selectable: !1
                    }, e.onSelectMessages = function() {
                        e.state.selectable || e.setState({
                            selectable: !0
                        })
                    }, e.onCancelSelection = function() {
                        e.state.selectable && (e.selectedMessages.unsetAll(), e.setState({
                            selectable: !1
                        }))
                    }, e.onMessageSelect = function(t, a) {
                        e.onSelectMessages(), e.selectedMessages.setVal(t, a), 0 === e.selectedMessages.getSelected().length && e.onCancelSelection()
                    }, e.selectedMessages = new y.default([], (function(e) {
                        return e.id.toString()
                    })), e
                }
                return (0, r.default)(a, [{
                    key: "_onSelectTab",
                    value: function(e) {
                        var t = c.default.values(I).indexOf(this.state.selected),
                            a = c.default.values(I).indexOf(e);
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
                                tab: I.MEDIA,
                                title: E.default.t(982)
                            }, {
                                tab: I.DOCS,
                                title: E.default.t(625)
                            }, {
                                tab: I.LINKS,
                                title: E.default.t(923)
                            }];
                        T.default.productMediaAttachments && t.push({
                            tab: I.PRODUCTS,
                            title: E.default.t(1275)
                        });
                        var a = t.map((function(t) {
                                var a = (0, d.default)(S.default.menuItem, (0, o.default)({}, S.default.active, e.state.selected === t.tab));
                                return f.default.createElement("button", {
                                    className: a,
                                    onClick: e._onSelectTab.bind(e, t.tab),
                                    key: t.tab,
                                    title: t.title
                                }, t.title)
                            })),
                            n = (0, d.default)(S.default.menuTabsLists, T.default.productMediaAttachments ? S.default.fourTabs : S.default.threeTabs);
                        return f.default.createElement("div", {
                            className: n,
                            "data-active-tab": this.state.selected
                        }, a)
                    }
                }, {
                    key: "_getContent",
                    value: function() {
                        var e, t = this.props.chat;
                        switch (this.state.selected) {
                            case I.MEDIA:
                                e = f.default.createElement(C.default, {
                                    chat: t,
                                    mediaMsgs: t.getMediaMsgs(),
                                    selectable: this.state.selectable,
                                    onMessageSelect: this.onMessageSelect,
                                    selectedMessages: this.selectedMessages,
                                    fullCollection: !0
                                });
                                break;
                            case I.LINKS:
                                e = f.default.createElement(_.default, {
                                    chat: t,
                                    linkMsgs: t.getLinkMsgs(),
                                    selectable: this.state.selectable,
                                    onMessageSelect: this.onMessageSelect,
                                    selectedMessages: this.selectedMessages
                                });
                                break;
                            case I.DOCS:
                                e = f.default.createElement(m.default, {
                                    chat: t,
                                    docMsgs: t.getDocMsgs(),
                                    selectable: this.state.selectable,
                                    onMessageSelect: this.onMessageSelect,
                                    selectedMessages: this.selectedMessages
                                });
                                break;
                            case I.PRODUCTS:
                                e = f.default.createElement(N.default, {
                                    chat: t,
                                    productMsgs: t.getProductMsgs(),
                                    selectable: this.state.selectable,
                                    onMessageSelect: this.onMessageSelect,
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
                            n = [I.MEDIA, I.DOCS].includes(this.state.selected),
                            l = this.state.selectable ? f.default.createElement(P.default, {
                                displayName: "MediaMultiSelect",
                                escapable: !0,
                                requestDismiss: this.onCancelSelection
                            }, f.default.createElement(M.default, {
                                chat: e,
                                noSortOnForward: !0,
                                theme: "mediaGallery",
                                toastPosition: p.ToastPosition.RIGHT,
                                downloadButton: n,
                                selectedMessages: this.selectedMessages,
                                onCancel: this.onCancelSelection
                            })) : null,
                            o = "right" === this.state.direction ? "slide-forward" : "slide-back";
                        return f.default.createElement(h.default, {
                            theme: "gallery"
                        }, f.default.createElement(g.default, {
                            title: " ",
                            onBack: this.props.onBack,
                            darwinRtlFix: !0,
                            type: g.DRAWER_HEADER_TYPE.MULTI_MEDIA_GALLERY
                        }), l, t, f.default.createElement(v.default, {
                            "data-list-scroll-container": !0
                        }, f.default.createElement(b.default, {
                            transitionName: o,
                            className: S.default.column
                        }, f.default.createElement("div", {
                            className: S.default.multimediaGallery,
                            key: this.state.selected
                        }, f.default.createElement("div", {
                            className: S.default.column
                        }, a)))))
                    }
                }]), a
            }(f.Component);
            t.default = k, k.defaultProps = {
                initialTab: I.MEDIA,
                productsScrollOffset: 0
            }, k.displayName = "MediaGalleryDrawer"
        },
        35713: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                s = l(a(94184)),
                d = n(a(67294)),
                c = l(a(14594)),
                f = l(a(89115)),
                p = l(a(79741)),
                m = l(a(93482)),
                h = l(a(44589)),
                v = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(l))).stopPropagation = function(e) {
                            e.stopPropagation()
                        }, e._renderAudioTag = function(t) {
                            return d.default.createElement(c.default, {
                                url: t,
                                className: p.default.mediaViewerAudio,
                                onClick: e.stopPropagation,
                                autoPlay: !0,
                                controls: !0
                            }, f.default.t(248))
                        }, e._renderPlaceholder = function() {
                            return d.default.createElement("div", {
                                className: (0, s.default)(p.default.imageAudio, p.default.mediaViewerPlaceholder),
                                onClick: e.stopPropagation
                            })
                        }, e
                    }
                    return (0, i.default)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props.mediaData;
                            return d.default.createElement(m.default, {
                                mediaData: e,
                                placeholderRenderer: this._renderPlaceholder
                            }, this._renderAudioTag)
                        }
                    }]), a
                }(d.PureComponent);
            v.CONCERNS = {
                mediaData: ["mediaStage", "renderableUrl"]
            }, v.displayName = "MediaAudioClass";
            var g = (0, h.default)(v, v.CONCERNS);
            t.default = g
        },
        68151: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                s = n(a(67294)),
                d = l(a(10598)),
                c = l(a(79140)),
                f = l(a(34541)),
                p = l(a(42575)),
                m = n(a(75300)),
                h = l(a(33079)),
                v = l(a(41769)),
                g = l(a(89115)),
                E = l(a(68390)),
                _ = l(a(77375)),
                C = a(87261),
                S = a(53418),
                M = l(a(70215)),
                y = a(82565),
                N = a(97849),
                T = l(a(44589)),
                P = l(a(75131)),
                b = l(a(78422)),
                I = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(l)))._refCloseBtn = (0, s.createRef)(), e._getMenuBtns = function() {
                            return e.props.msg.isViewOnce ? e._getViewOnceMediaMenuBtns() : e.props.msgIndexInAlbum >= 0 ? e._getAlbumMediaMenuBtns() : e._getNonAlbumMediaMenuBtns()
                        }, e._getViewOnceMediaMenuBtns = function() {
                            return [s.default.createElement(S.MenuBarItem, {
                                key: "btnViewOnceInfo",
                                icon: s.default.createElement(P.default, {
                                    name: "view-once",
                                    className: _.default.voIcon
                                }),
                                title: g.default.t(36),
                                onClick: e.props.onViewOnceInfoClick
                            }), e._getDropdownMenuBarItem()]
                        }, e._getNonAlbumMediaMenuBtns = function() {
                            var t = e.props.msg;
                            return [s.default.createElement(S.MenuBarItem, {
                                key: "btnGoToMsg",
                                icon: s.default.createElement(P.default, {
                                    name: "bubble"
                                }),
                                title: g.default.t(787),
                                onClick: e.props.onGoToMsgClick
                            }), t.canStar() ? e._getStarMenuBarItem() : null, t.canForward() ? e._getForwardMenuBarItem() : null, s.default.createElement(S.MenuBarItem, {
                                key: "btnDownload",
                                icon: s.default.createElement(P.default, {
                                    name: "download"
                                }),
                                title: g.default.t(1653),
                                disabled: !e._isMediaDownloadable(),
                                onClick: e.props.onDownloadClick
                            })].filter(Boolean)
                        }, e._getAlbumMediaMenuBtns = function() {
                            var t = e.props.msg;
                            return [t.canReply() ? s.default.createElement(S.MenuBarItem, {
                                key: "btnReply",
                                icon: s.default.createElement(P.default, {
                                    name: "reply"
                                }),
                                title: g.default.t(1290),
                                onClick: e.props.onReplyClick
                            }) : null, t.canStar() ? e._getStarMenuBarItem() : null, s.default.createElement(S.MenuBarItem, {
                                key: "btnDelete",
                                icon: s.default.createElement(P.default, {
                                    name: "delete"
                                }),
                                title: g.default.t(1696),
                                onClick: e.props.onDeleteClick
                            }), t.canForward() ? e._getForwardMenuBarItem() : null, e._getDropdownMenuBarItem()].filter(Boolean)
                        }, e._getStarMenuBarItem = function() {
                            var t, a, n;
                            return e.props.msg.star ? (t = e.props.onUnstarClick, a = "unstar-btn", n = g.default.t(1479)) : (t = e.props.onStarClick, a = "star-btn", n = g.default.t(1400)), s.default.createElement(S.MenuBarItem, {
                                key: a,
                                icon: s.default.createElement(P.default, {
                                    name: a
                                }),
                                title: n,
                                onClick: t
                            })
                        }, e._getForwardMenuBarItem = function() {
                            return s.default.createElement(S.MenuBarItem, {
                                key: "btnForward",
                                icon: s.default.createElement(P.default, {
                                    name: "forward"
                                }),
                                title: g.default.t(747),
                                onClick: e.props.openForwardFlow
                            })
                        }, e._getDropdownMenuBarItem = function() {
                            var t = e.props.msg,
                                a = [];
                            if (t.isViewOnce) {
                                var n = t.sender,
                                    l = t.senderObj;
                                a.push(s.default.createElement(h.default, {
                                    key: "dropdownMsgInfo",
                                    action: e._handleDropdownReportSpam
                                }, l.isMyContact ? g.default.t(1296) : g.default.t(1299, {
                                    contactInfo: (0, b.default)(n)
                                })))
                            } else t.isSentByMe && a.push(s.default.createElement(h.default, {
                                key: "dropdownMsgInfo",
                                action: e.props.onMsgInfoClick
                            }, g.default.t(1036))), a.push(s.default.createElement(h.default, {
                                key: "dropdownGoToMsg",
                                action: e.props.onGoToMsgClick
                            }, g.default.t(787)), s.default.createElement(h.default, {
                                key: "dropdownDownload",
                                action: e.props.onDownloadClick,
                                disabled: !e._isMediaDownloadable()
                            }, g.default.t(1653)));
                            return s.default.createElement(S.MenuBarItem, {
                                key: "btnMenu",
                                icon: s.default.createElement(P.default, {
                                    name: "menu"
                                }),
                                title: g.default.t(1028)
                            }, s.default.createElement(m.default, {
                                type: "dropdown_menu",
                                key: "MediaPanelHeaderDropdown",
                                flipOnRTL: !0,
                                dirX: m.DirX.LEFT
                            }, a))
                        }, e._isMediaDownloadable = function() {
                            var t = e.props,
                                a = t.mediaData;
                            return !t.msg.isViewOnce && (!!a.renderableUrl || a.mediaStage === C.MEDIA_DATA_STAGE.RESOLVED)
                        }, e._handleDropdownReportSpam = function() {
                            f.default.openModal(s.default.createElement(M.default, {
                                isBusiness: e.props.msg.senderObj.isBusiness,
                                isGroupChat: !1,
                                onReport: e._handleReport,
                                onReportBlockClear: e._handleReportBlockClear,
                                onCancel: function() {
                                    return f.default.closeModal()
                                }
                            }))
                        }, e._handleReport = function() {
                            var t = e.props.msg.chat;
                            t && (0, y.sendSpamReport)(t, N.SpamFlow.MediaViewer), f.default.closeModal()
                        }, e._handleReportBlockClear = function() {
                            var t = e.props.msg.chat;
                            t && (0, y.sendSpamBlockClear)(t), f.default.closeModal()
                        }, e
                    }
                    return (0, i.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            null != this._refCloseBtn.current && this.props.listeners.add(this._refCloseBtn.current, "animationend", (function() {
                                e.props.onHightlightCloseEnd()
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.msg,
                                t = e.displayName(!0, !0);
                            return e.isGroupMsg && (t += " @ " + e.chat.title()), s.default.createElement("div", {
                                className: _.default.mediaPanelHeader
                            }, s.default.createElement("div", {
                                className: _.default.info
                            }, s.default.createElement(d.default, {
                                idle: !0,
                                image: s.default.createElement(p.default, {
                                    id: e.sender,
                                    size: 40
                                }),
                                primary: s.default.createElement(v.default, {
                                    ellipsify: !0,
                                    text: t
                                }),
                                secondary: c.default.relativeDateAndTimeStr(e.t),
                                theme: "media"
                            })), s.default.createElement("div", {
                                className: _.default.mediaPanelTools
                            }, s.default.createElement(S.MenuBar, {
                                key: "media-panel-header",
                                theme: "strong"
                            }, this._getMenuBtns(), s.default.createElement(S.MenuBarItem, {
                                a8nText: "btn-close",
                                icon: s.default.createElement(P.default, {
                                    className: this.props.isHighlightClose ? _.default.highlightClose : null,
                                    containerRef: this._refCloseBtn,
                                    name: "x-viewer"
                                }),
                                title: g.default.t(1668),
                                onClick: this.props.onClose
                            }))))
                        }
                    }]), a
                }(s.PureComponent);
            I.CONCERNS = {
                msg: ["star", "isGroupMsg", "chat", "type", "isGif", "isViewOnce", "sender", "senderObj", "t", "isSentByMe"],
                mediaData: ["filehash", "mediaStage", "renderableUrl"]
            }, I.displayName = "MediaPanelHeader";
            var k = (0, E.default)((0, T.default)(I, I.CONCERNS));
            t.default = k
        },
        1580: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                s = n(a(67294)),
                d = l(a(12940)),
                c = l(a(75020)),
                f = a(9438),
                p = a(95037),
                m = l(a(89115)),
                h = l(a(89805)),
                v = a(87261),
                g = l(a(8643)),
                E = l(a(64882)),
                _ = l(a(69052)),
                C = l(a(44589)),
                S = l(a(56059)),
                M = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
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
                    return (0, i.default)(a, [{
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
                                l = n.isGif,
                                o = n.mediaStage === v.MEDIA_DATA_STAGE.RESOLVED || n.streamable && n.isStreamable();
                            if (o = o || a.isForcingRMR()) {
                                var i, r, u = m.default.t(1526);
                                return !this.state.isFullscreenMode && a && a.interactiveAnnotations && a.interactiveAnnotations.length > 0 && (i = s.default.createElement(d.default, {
                                    annotations: a.interactiveAnnotations
                                })), r = l ? s.default.createElement("div", {
                                    className: h.default.mediaViewerImg,
                                    ref: this._setRefContainer
                                }, s.default.createElement(S.default, {
                                    src: n.renderableUrl,
                                    onClick: this.stopPropagation,
                                    autoPlay: !0,
                                    loop: !0
                                }, u), i) : s.default.createElement("div", {
                                    ref: this._setRefContainer,
                                    className: h.default.mediaViewerImg,
                                    onClick: this.stopPropagation
                                }, s.default.createElement(E.default, {
                                    msg: a,
                                    mediaData: n,
                                    startTime: this.props.startTime,
                                    onClose: this.props.onClose,
                                    onError: function() {},
                                    onFullscreenToggle: this._handleFullscreenToggle,
                                    autoPlay: this.props.autoPlay,
                                    type: f.PLAYER_TYPE.MEDIA_VIEWER,
                                    overlays: i,
                                    noPip: a.isViewOnce
                                })), s.default.createElement(_.default, {
                                    type: "scaleDown",
                                    position: "relative",
                                    objectPosition: "relative",
                                    size: this.state.size,
                                    onObjectLoad: this.props.onLoad
                                }, r)
                            }
                            return s.default.createElement(_.default, {
                                type: "scaleDown",
                                position: "relative",
                                objectPosition: "relative",
                                size: {
                                    width: this.props.mediaData.fullWidth,
                                    height: this.props.mediaData.fullHeight
                                }
                            }, s.default.createElement(c.default, {
                                altText: null !== (e = a.caption) && void 0 !== e ? e : "",
                                mediaData: n
                            }))
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e) {
                            var t = e.mediaData;
                            return (t.mediaStage === v.MEDIA_DATA_STAGE.RESOLVED || t.streamable && t.isStreamable()) && t.fullWidth && t.fullHeight ? {
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
                            return e.fullWidth >= p.MIN_WIDTH ? {
                                width: e.fullWidth,
                                height: e.fullHeight
                            } : {
                                width: p.MIN_WIDTH,
                                height: e.fullHeight
                            }
                        }
                    }]), a
                }(s.PureComponent);
            M.CONCERNS = {
                mediaData: ["mediaStage", "fullWidth", "fullHeight", "isGif", "isViewOnce", "preview", "renderableUrl", "streamable"]
            }, M.defaultProps = {
                startTime: 0
            }, M.displayName = "MediaVideo";
            var y = function(e) {
                (0, r.default)(a, e);
                var t = (0, u.default)(a);

                function a() {
                    return (0, o.default)(this, a), t.apply(this, arguments)
                }
                return (0, i.default)(a, [{
                    key: "getContainerElement",
                    value: function() {
                        return this.getComponent().refContainer
                    }
                }]), a
            }((0, C.default)(M, M.CONCERNS));
            t.default = y
        },
        58003: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(59713)),
                i = l(a(34575)),
                r = l(a(93913)),
                u = l(a(2205)),
                s = l(a(99842)),
                d = l(a(94184)),
                c = a(53615),
                f = l(a(96486)),
                p = n(a(67294)),
                m = n(a(57617)),
                h = l(a(34541)),
                v = l(a(4990)),
                g = l(a(25960)),
                E = l(a(34263)),
                _ = l(a(1876)),
                C = l(a(41769)),
                S = l(a(62993)),
                M = l(a(31722)),
                y = l(a(89792)),
                N = a(71701),
                T = l(a(17362)),
                P = l(a(76568)),
                b = a(12518),
                I = l(a(89115)),
                k = a(59996),
                A = l(a(35713)),
                O = l(a(28719)),
                w = l(a(3986)),
                R = l(a(68151)),
                D = l(a(52315)),
                x = a(87261),
                L = l(a(1580)),
                B = l(a(80674)),
                F = l(a(15201)),
                G = a(40746),
                V = l(a(44589)),
                U = a(89305),
                H = a(28770),
                W = a(88828),
                j = l(a(4268)),
                Y = l(a(23225)),
                q = l(a(77478));

            function K(e) {
                null == e || e.stopPropagation()
            }

            function X(e) {
                var t = e.chat;
                t.composeQuotedMsg = e, h.default.focusChatTextInput(t)
            }
            var z = function(e) {
                (0, u.default)(a, e);
                var t = (0, s.default)(a);

                function a(e) {
                    var n;
                    (0, i.default)(this, a), (n = t.call(this, e))._setRefMediaImage = function(e) {
                        n._refMediaImage = e
                    }, n._setRefMediaVideo = function(e) {
                        n._refMediaVideo = e
                    }, n._setRefHotKeys = function(e) {
                        n._refHotKeys = e
                    }, n._handleViewOnceInfoClick = function() {
                        n._showViewOnceNux()
                    }, n._showViewOnceNux = function() {
                        var e = n.props.mediaData,
                            t = p.default.createElement(F.default, {
                                isPhoto: e.type === O.default.TYPE.IMAGE,
                                onOkClick: function() {
                                    h.default.closeModal()
                                }
                            });
                        h.default.openModal(t)
                    }, n._handleImageLoad = function(e) {
                        n.props.onImageLoad && n.props.onImageLoad();
                        var t = n.state.zoomElement;
                        t && e && n.props.isAnimatingIn && e instanceof HTMLElement && (n._zoomed || (n._zoomed = !0, n.animateZoom(t, e)))
                    }, n.animateZoom = function(e, t) {
                        var a, l = t.getBoundingClientRect(),
                            o = e.getBoundingClientRect(),
                            i = o.top - l.top,
                            r = o.left - l.left,
                            u = e.clientWidth / t.clientWidth;
                        i -= (t.clientHeight - e.clientHeight) / 2, r -= (t.clientWidth - e.clientWidth) / 2, (0, q.default)(t, {
                            opacity: [1, 0],
                            translateX: [0, r],
                            translateY: [0, i],
                            scale: [1, u]
                        }, {
                            duration: E.default.MEDIA_VIEWER.ANIMATION_DURATION,
                            easing: [.1, .82, .25, 1]
                        });
                        var s = null === (a = n._refCaption) || void 0 === a ? void 0 : a.getContainerElement();
                        s && (0, q.default)(s, {
                            opacity: [1, 0]
                        }, {
                            duration: E.default.MEDIA_VIEWER.ANIMATION_DURATION
                        })
                    }, n.openForwardFlow = function(e) {
                        e.stopPropagation();
                        var t = n.props.msg;
                        t.isUnsentMedia ? h.default.openModal(p.default.createElement(g.default, {
                            title: I.default.t(731),
                            onOK: function() {
                                return h.default.closeModal()
                            },
                            okText: I.default.t(1826)
                        }, I.default.t(728))) : h.default.openModal(p.default.createElement(y.default, {
                            msgs: [(0, U.unproxy)(t)]
                        }), {
                            transition: "modal-flow"
                        })
                    }, n._handleReplyClick = function() {
                        n._handleClose(), (0, c.delayMs)(E.default.MEDIA_VIEWER.CLOSE_ANIMATION_DURATION).then(X.bind(null, (0, U.unproxy)(n.props.msg)))
                    }, n._handleDeleteClick = function() {
                        var e = n.props.msg;
                        h.default.openModal(p.default.createElement(_.default, {
                            chat: e.chat,
                            msgList: [(0, U.unproxy)(e)],
                            deletePrompt: !0,
                            revokePrompt: e.canRevoke()
                        }))
                    }, n._handleMsgInfoClick = function() {
                        n._handleClose(), (0, c.delayMs)(E.default.MEDIA_VIEWER.CLOSE_ANIMATION_DURATION + 250).then(h.default.msgInfoDrawer.bind(h.default, (0, U.unproxy)(n.props.msg)))
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
                                var l = a.getInsideContainer();
                                if (l && l instanceof HTMLElement) {
                                    var o = a.getOutsideContainer();
                                    if (o && o instanceof HTMLElement) {
                                        var i = a.getTranslatePosition(o, e, t),
                                            r = i.translateX,
                                            u = i.translateY;
                                        (0, q.default)(l, "stop"), (0, q.default)(l, {
                                            translateX: r,
                                            translateY: u,
                                            scale: E.default.MEDIA_VIEWER.ZOOM_IN_FACTOR
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
                        e.stopPropagation(), S.default.initDownload((0, U.unproxy)(n.props.msg))
                    }, n._handleStarClick = function(e) {
                        e.stopPropagation();
                        var t = n.props.msg;
                        h.default.sendStarMsgs(t.chat, [(0, U.unproxy)(t)])
                    }, n._handleUnstarClick = function(e) {
                        e.stopPropagation();
                        var t = n.props.msg;
                        h.default.sendUnstarMsgs(t.chat, [(0, U.unproxy)(t)])
                    }, n._handleGoToMsgClick = function(e) {
                        e.stopPropagation(), n._handleClose(), h.default.existsDrawerRight((function(e) {
                            e && 2 === v.default.column && h.default.closeDrawerRight()
                        }));
                        var t = n.props.msg,
                            a = t.chat.getSearchContext((0, U.unproxy)(t));
                        h.default.openChatAt(t.chat, a).then((function(e) {
                            e && h.default.focusChatTextInput(t.chat)
                        }))
                    }, n._handleClose = function() {
                        if (!n._closing) {
                            n._closing = !0, (0, W.isFunction)(n.props.onExitAnimation) && n.props.onExitAnimation();
                            var e, t = n.props.getZoomNode && n.props.getZoomNode(n.props.msg.id);
                            if (!t) return n.props.onBack();
                            if (n.props.mediaData.type === O.default.TYPE.IMAGE && n._refMediaImage ? e = n._refMediaImage.getInsideContainer() : n.props.mediaData.isGif && n._refMediaVideo && (e = n._refMediaVideo.getContainerElement()), !e) return n.props.onBack();
                            var a, l = e,
                                o = e.getBoundingClientRect(),
                                i = t.getBoundingClientRect(),
                                r = i.top - o.top,
                                u = i.left - o.left,
                                s = t.clientWidth / l.clientWidth;
                            r -= (l.clientHeight - t.clientHeight) / 2, u -= (l.clientWidth - t.clientWidth) / 2, (0, q.default)(e, {
                                translateX: [u, 0],
                                translateY: [r, 0],
                                scale: [s, 1]
                            }, {
                                duration: E.default.MEDIA_VIEWER.CLOSE_ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            }).then((function() {
                                n.props.onBack()
                            }));
                            var d = null === (a = n._refCaption) || void 0 === a ? void 0 : a.getContainerElement();
                            d && (0, q.default)(d, {
                                opacity: [0, 1]
                            }, {
                                duration: E.default.MEDIA_VIEWER.CLOSE_ANIMATION_DURATION,
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
                    }, n._zoomed = !1, n._closing = !1, n._listenToMouseMove = !1, n._shouldShowViewOnceNux = e.msg.isViewOnce && (0, N.shouldShowNUX)(E.default.NUX.EPHEMERAL_VIEW_ONCE_RECEIVER);
                    var l = e.mediaData.mediaStage === x.MEDIA_DATA_STAGE.RESOLVED && e.isAnimatingIn && e.getZoomNode ? e.getZoomNode(e.msg.id) : null;
                    return n.state = {
                        zoomElement: l,
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
                        var e = this.props.msg;
                        e.isViewOnce && (0, k.canMarkPlayed)(e) && (0, k.markPlayed)(e), this._shouldShowViewOnceNux && this._showViewOnceNux(), M.default.focus(this._refHotKeys)
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
                        this._updateZoomPosition.cancel()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t, a, n, l, i, r, u = this,
                            s = this.props,
                            c = s.msg,
                            f = s.mediaData;
                        switch (f.type) {
                            case O.default.TYPE.IMAGE:
                                i = p.default.createElement(w.default, {
                                    key: c.id.toString(),
                                    msg: c,
                                    mediaData: f,
                                    onLoad: this._handleImageLoad,
                                    onImgZoomIn: this._handleImgZoomIn,
                                    onAnnotationTooltipDisplay: this._handleAnnotationTooltipDisplay,
                                    onAnnotationTooltipDismiss: this._handleAnnotationTooltipDismiss,
                                    preventDownload: c.isViewOnce,
                                    ref: this._setRefMediaImage
                                });
                                break;
                            case O.default.TYPE.VIDEO:
                                i = p.default.createElement(L.default, {
                                    key: c.id.toString(),
                                    autoPlay: !this._shouldShowViewOnceNux,
                                    msg: c,
                                    mediaData: f,
                                    onLoad: f.isGif ? this._handleImageLoad : null,
                                    startTime: this.props.startTime,
                                    onClose: this._handleClose,
                                    ref: this._setRefMediaVideo
                                });
                                break;
                            case O.default.TYPE.AUDIO:
                                i = p.default.createElement(A.default, {
                                    mediaData: f,
                                    key: c.id.toString()
                                });
                                break;
                            default:
                                __LOG__(4, void 0, new Error, !0)`type: ${f.type}`, SEND_LOGS("MediaViewerModal: unexpected media type")
                        }
                        var h = this.props.msgIndexInAlbum >= 0 && this.props.albumSize >= 0;
                        if (c.caption || h) {
                            var v, g;
                            if (h) {
                                var E = {
                                    number: this.props.msgIndexInAlbum + 1,
                                    totalNumber: this.props.albumSize
                                };
                                g = I.default.t(1190, E)
                            }
                            var _ = b.Configuration.Conversation({
                                    mentions: c.mentionMap(),
                                    links: c.getLinks(),
                                    trusted: !0
                                }),
                                S = !this.state.isCaptionVisible && (f.isGif || f.type === O.default.TYPE.IMAGE);
                            r = p.default.createElement(p.default.Fragment, null, p.default.createElement("p", {
                                className: (0, d.default)(B.default.captionWrapper, this._captionExpandable && B.default.captionWrapperExpandable),
                                onClick: this._captionExpandable ? this._handleCaptionClick : void 0,
                                title: this._captionExpandable ? I.default.t(1283) : void 0,
                                "aria-hidden": this.state.isCaptionExpanded || void 0
                            }, p.default.createElement(C.default, {
                                className: (0, d.default)(B.default.mediaCaption, (v = {}, (0, o.default)(v, B.default.captionHidden, S), (0, o.default)(v, B.default.expanded, this.state.isCaptionExpanded), v)),
                                formatters: _,
                                ref: function(e) {
                                    function t() {
                                        return e.apply(this, arguments)
                                    }
                                    return t.toString = function() {
                                        return e.toString()
                                    }, t
                                }((function(e) {
                                    u._refCaption = e
                                })),
                                text: c.caption || g
                            }), this._captionExpandable && p.default.createElement(Y.default, {
                                className: (0, d.default)(B.default.captionReadMoreBtn, (0, o.default)({}, B.default.expanded, this.state.isCaptionExpanded)),
                                onClick: this._handleCaptionClick
                            }, p.default.createElement(H.TextSpan, null, I.default.t(1283)))), this.state.isCaptionExpanded && p.default.createElement("p", {
                                className: (0, d.default)(B.default.captionWrapper, B.default.captionWrapperExpandable, B.default.captionExpanded),
                                onClick: this._handleCaptionClick
                            }, p.default.createElement(C.default, {
                                className: (0, d.default)(B.default.mediaCaption, B.default.mediaCaptionExpanded),
                                formatters: _,
                                text: c.caption
                            })))
                        }
                        var M = (0, d.default)(B.default.media, (0, o.default)({}, B.default.mediaWithCaption, !!r)),
                            y = (0, d.default)("overlay", B.default.mediaViewer, (e = {}, (0, o.default)(e, B.default.viewOnce, c.isViewOnce), (0, o.default)(e, B.default.mediaViewerAnimate, this.props.isAnimatingIn), (0, o.default)(e, B.default.cursorZoomOut, this.state.imgZoomed), e)),
                            N = this.state.imgZoomed && this._listenToMouseMove ? this._handleMouseMove : null,
                            k = this.state.imgZoomed ? this._handleZoomOut : null,
                            x = this.state.imgZoomed ? null : this._handleClose;
                        null != x && c.isViewOnce && (x = this._handleClickToCloseBlocked);
                        var F = !c.isViewOnce;
                        return p.default.createElement(j.default, {
                            displayName: "MediaViewer",
                            escapable: !0,
                            requestDismiss: this._handleClose
                        }, p.default.createElement(P.default, {
                            handlers: {
                                space: this._handleKeyboardZoom
                            },
                            onRef: this._setRefHotKeys
                        }, p.default.createElement("div", {
                            className: y,
                            "data-animate-media-viewer": !0,
                            onClick: k,
                            onMouseMove: N
                        }, p.default.createElement(R.default, {
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
                        }), p.default.createElement("div", {
                            className: B.default.mediaContent,
                            onClick: x
                        }, F && p.default.createElement("div", {
                            className: (0, d.default)(B.default.btnMediaPrev)
                        }, p.default.createElement(m.default, {
                            type: m.ButtonType.Prev,
                            onClick: null !== (t = this.props.onPrev) && void 0 !== t ? t : K,
                            onKeyDown: null !== (a = this.props.onPrev) && void 0 !== a ? a : K,
                            disabled: !this.props.onPrev || this.state.imgZoomed,
                            theme: G.RoundTheme.Default
                        })), p.default.createElement("div", {
                            className: M
                        }, p.default.createElement(D.default, {
                            msg: c,
                            mediaData: f
                        }), i, p.default.createElement(T.default.Provider, {
                            value: c.chat.groupMetadata
                        }, r)), F && p.default.createElement("div", {
                            className: (0, d.default)(B.default.btnMediaNext)
                        }, p.default.createElement(m.default, {
                            type: m.ButtonType.Next,
                            onClick: null !== (n = this.props.onNext) && void 0 !== n ? n : K,
                            onKeyDown: null !== (l = this.props.onNext) && void 0 !== l ? l : K,
                            disabled: !this.props.onNext || this.state.imgZoomed,
                            theme: G.RoundTheme.Default
                        }))))))
                    }
                }]), a
            }(p.PureComponent);
            z.CONCERNS = {
                msg: ["id", "star", "isUnsentMedia", "isViewOnce", "chat", "caption", "interactiveAnnotations"],
                mediaData: ["mediaStage", "type", "isGif"]
            }, z.displayName = "MediaViewerModal";
            var Z = (0, V.default)(z, z.CONCERNS);
            t.default = Z
        },
        49172: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                s = l(a(96486)),
                d = n(a(67294)),
                c = l(a(63328)),
                f = l(a(85779)),
                p = l(a(76479)),
                m = l(a(87729)),
                h = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a(e) {
                        var n;
                        return (0, o.default)(this, a), (n = t.call(this, e))._setThumbRef = function(e, t) {
                            n._thumbRefs[t] = e
                        }, n._isPreviewPreferred = function(e) {
                            var t = n._thumbRefs[e];
                            if (!t) return !1;
                            var a = t.getBoundingClientRect(),
                                l = (a.left + a.right) / 2;
                            return !(l > -1 * window.innerWidth && l < 2 * window.innerWidth)
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
                            (0, c.default)(n.state.msgIdToPreferPreview, e) || n.setState({
                                msgIdToPreferPreview: e
                            })
                        }, n.getThumbs = function() {
                            var e = n.props.highlightedMsgIds,
                                t = e && e.size > 0 && e.has(n.props.activeMsg.id.toString()),
                                a = [];
                            return n.props.mediaMsgs.forEach((function(l) {
                                if (null != l.mediaData) {
                                    var o = t && e && !e.has(l.id.toString()) ? "viewerFlowTransparent" : "viewerFlow";
                                    a.push(d.default.createElement(f.default, {
                                        theme: o,
                                        active: l === n.props.activeMsg,
                                        msg: l,
                                        containerRef: function(e) {
                                            n._setThumbRef(e, l.id.toString()), l === n.props.activeMsg && n.props.onSetActiveThumb(e)
                                        },
                                        key: `media-${l.id.id}`,
                                        onClick: function() {
                                            n.props.onSelectThumb(l)
                                        },
                                        preferPreview: !!n.state.msgIdToPreferPreview.get(l.id.toString())
                                    }))
                                } else {
                                    var i = n.props.activeMsg;
                                    __LOG__(3, !0)`MediaViewerFlow: attempted to render a msg without mediaData: ${JSON.stringify({type:l.type,isMedia:l.isMedia,startMsgType:i.type,startMsgIsMedia:i.isMedia})}`
                                }
                            })), a.push(d.default.createElement("div", {
                                className: p.default.mediaThumb,
                                key: "spinner-right"
                            }, n.props.mediaMsgs.queryMediaAfter ? d.default.createElement(m.default, {
                                stroke: 6,
                                size: 24
                            }) : null)), a.unshift(d.default.createElement("div", {
                                className: p.default.mediaThumb,
                                key: "spinner-left"
                            }, n.props.mediaMsgs.queryMediaBefore ? d.default.createElement(m.default, {
                                stroke: 6,
                                size: 24
                            }) : null)), a.push(d.default.createElement("div", {
                                className: p.default.thumbPadding,
                                key: "padding-right"
                            })), a.unshift(d.default.createElement("div", {
                                className: p.default.thumbPadding,
                                key: "padding-left"
                            })), a
                        }, n._thumbRefs = {}, n.handleScroll = s.default.throttle(n._handleScroll, 100), n.state = {
                            msgIdToPreferPreview: n._getMsgIdToPreferPreview()
                        }, n
                    }
                    return (0, i.default)(a, [{
                        key: "componentWillUnmount",
                        value: function() {
                            this.handleScroll.cancel()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.getThumbs();
                            return d.default.createElement("div", {
                                className: p.default.thumbsContainer,
                                ref: this.props.setRefThumbsContainer
                            }, d.default.createElement("div", {
                                className: p.default.scrollContainer,
                                dir: "ltr"
                            }, d.default.createElement("div", {
                                onScroll: this.onScroll,
                                className: p.default.viewerThumbs,
                                ref: this.props.setRefThumbs
                            }, e)))
                        }
                    }]), a
                }(d.Component);
            t.default = h, h.displayName = "MediaViewerThumbList"
        },
        15201: (e, t, a) => {
            "use strict";
            var n = a(95318),
                l = a(20862);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, o.useEffect)((function() {
                    (0, c.setNUX)(r.default.NUX.EPHEMERAL_VIEW_ONCE_RECEIVER, {
                        views: 1,
                        maxViews: 1
                    })
                }), []), o.default.createElement(i.default, {
                    onOK: e.onOkClick,
                    cancelText: f.default.t(919),
                    onCancel: function() {
                        (0, u.openExternalLink)((0, s.getViewOnceFaqUrl)())
                    }
                }, o.default.createElement(d.FlexColumn, null, o.default.createElement(d.FlexItem, {
                    className: p.default.graphic,
                    align: "center"
                }, o.default.createElement(m.default, {
                    name: "view-once-sender-nux"
                })), o.default.createElement(h.TextHeader, {
                    className: p.default.text,
                    theme: "popup-title"
                }, e.isPhoto ? f.default.t(1536) : f.default.t(1539)), o.default.createElement(h.TextParagraph, {
                    className: p.default.text
                }, e.isPhoto ? f.default.t(1535) : f.default.t(1538))))
            };
            var o = l(a(67294)),
                i = n(a(25960)),
                r = n(a(34263)),
                u = a(19129),
                s = a(92618),
                d = a(32002),
                c = a(71701),
                f = n(a(89115)),
                p = n(a(82326)),
                m = n(a(75131)),
                h = a(28770)
        },
        85099: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(a(34575)),
                i = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                s = n(a(67294)),
                d = l(a(34541)),
                c = l(a(25960)),
                f = l(a(89115)),
                p = l(a(17391)),
                m = a(28770),
                h = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a(e) {
                        var n;
                        return (0, o.default)(this, a), (n = t.call(this, e))._handleOK = function() {
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
                    return (0, i.default)(a, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.options,
                                n = t.explanation,
                                l = a.map((function(t) {
                                    var a = t.value,
                                        n = t.label;
                                    return s.default.createElement("li", {
                                        key: `setting-${a}`
                                    }, s.default.createElement("label", {
                                        className: p.default.label
                                    }, s.default.createElement("input", {
                                        type: "radio",
                                        className: p.default.input,
                                        value: String(a),
                                        checked: a === e.state.selectedValue,
                                        onChange: e._handleChange
                                    }), n))
                                }));
                            return s.default.createElement(c.default, {
                                title: this.props.title,
                                okText: f.default.t(552),
                                onOK: this._handleOK,
                                onCancel: this.closeModal
                            }, n ? s.default.createElement(m.TextDiv, {
                                theme: "muted",
                                className: p.default.explanation
                            }, n) : null, s.default.createElement("form", null, s.default.createElement("ol", null, l)))
                        }
                    }]), a
                }(s.PureComponent);
            t.default = h, h.displayName = "SettingsPopup"
        },
        83934: (e, t, a) => {
            "use strict";
            var n = a(95318),
                l = a(20862);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact,
                    a = (0, _.default)(t, ["verifiedLevel", "verifiedName"]),
                    n = a.verifiedLevel,
                    l = a.verifiedName,
                    C = (0, m.getBusinessFaqUrl)(),
                    S = !d.default.isSMB;
                (0, o.useEffect)((function() {
                    S && new v.default.BannerEvent({
                        bannerType: v.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                        bannerOperation: v.default.BANNER_OPERATIONS.SHOWN
                    }).commit()
                }), [S]);
                var M = n === c.default.VERIFIED_LEVEL.HIGH ? h.default.t(1896, {
                    businessName: l
                }) : h.default.t(1895);
                return o.default.createElement(s.default, {
                    title: h.default.t(1898),
                    onOK: function() {
                        u.default.closeModal(), S && new v.default.BannerEvent({
                            bannerType: v.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: v.default.BANNER_OPERATIONS.DISMISS
                        }).commit()
                    },
                    okText: h.default.t(1826)
                }, o.default.createElement(f.default, {
                    text: M
                }), " ", o.default.createElement(r.default, {
                    href: C,
                    onClick: function(e) {
                        e.preventDefault(), u.default.closeModal(), setTimeout((function() {
                            return (0, p.openExternalLink)(C)
                        }), 10)
                    }
                }, h.default.t(919)), S && o.default.createElement("div", {
                    className: i.default.footerNote
                }, o.default.createElement(E.TextSpan, {
                    theme: "muted",
                    size: "13"
                }, h.default.t(1899), o.default.createElement("br", null), o.default.createElement(r.default, {
                    onClick: function(e) {
                        e.preventDefault(), u.default.closeModal(), new v.default.BannerEvent({
                            bannerType: v.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: v.default.BANNER_OPERATIONS.CLICK
                        }).commit(), setTimeout((function() {
                            return u.default.openModal(o.default.createElement(g.default, null))
                        }), 200)
                    },
                    className: i.default.getTheAppLink
                }, h.default.t(1897)))))
            };
            var o = l(a(67294)),
                i = n(a(75632)),
                r = n(a(76)),
                u = n(a(34541)),
                s = n(a(25960)),
                d = n(a(93743)),
                c = n(a(34263)),
                f = n(a(41769)),
                p = a(19129),
                m = a(92618),
                h = n(a(89115)),
                v = n(a(8643)),
                g = n(a(29360)),
                E = a(28770),
                _ = n(a(33819))
        },
        29360: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return l.default.createElement(r.default, {
                    title: d.default.t(1902),
                    onOK: function() {
                        new c.default.BannerEvent({
                            bannerType: c.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: c.default.BANNER_OPERATIONS.DISMISS
                        }).commit(), i.default.closeModal()
                    },
                    okText: d.default.t(1668)
                }, l.default.createElement(f.default, null), l.default.createElement("p", null, l.default.createElement(u.default, {
                    text: d.default.t(1900)
                })), l.default.createElement("br", null), l.default.createElement("p", null, l.default.createElement(u.default, {
                    text: d.default.t(1901)
                }), " ", l.default.createElement(o.default, {
                    href: p,
                    onClick: function(e) {
                        e.preventDefault(), i.default.closeModal(), setTimeout((function() {
                            return (0, s.openExternalLink)(p)
                        }), 10)
                    }
                }, d.default.t(919))))
            }, t.WHATSAPP_BUSINESS_URL = void 0;
            var l = n(a(67294)),
                o = n(a(76)),
                i = n(a(34541)),
                r = n(a(25960)),
                u = n(a(41769)),
                s = a(19129),
                d = n(a(89115)),
                c = n(a(8643)),
                f = n(a(47650)),
                p = "https://www.whatsapp.com/business";
            t.WHATSAPP_BUSINESS_URL = p
        },
        47650: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = (0, r.useRef)(null),
                    t = (0, r.useRef)(null),
                    a = (0, r.useContext)(c.default).theme,
                    n = "dark" === a;
                return (0, r.useEffect)((function() {
                    return null != e.current && (t.current = new s.default(e.current, {
                            text: "https://www.whatsapp.com/business/download",
                            colorDark: "#122e31",
                            colorLight: "#ffffff",
                            width: u.default.QR_EDGE / 2,
                            height: u.default.QR_EDGE / 2,
                            typeNumber: 4,
                            correctLevel: s.default.CorrectLevel.H
                        })),
                        function() {
                            null != t.current && (t.current.clear(), t.current = null, e.current = null)
                        }
                }), [n]), r.default.createElement("div", {
                    className: d.default.wrapper
                }, r.default.createElement("div", {
                    ref: e,
                    className: (0, i.default)(d.default.code, (0, o.default)({}, d.default.codeDarkMode, n))
                }, r.default.createElement(f, {
                    theme: a
                })))
            };
            var o = l(a(59713)),
                i = l(a(94184)),
                r = n(a(67294)),
                u = l(a(34263)),
                s = l(a(31516)),
                d = l(a(88959)),
                c = l(a(34970));

            function f() {
                return r.default.createElement("div", {
                    className: d.default.codeLogo
                }, r.default.createElement("svg", {
                    width: "100%",
                    viewBox: "0 0 50 50",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.default.createElement("path", {
                    d: "M42.6776 42.6779C37.9558 47.3997 31.6777 50.0001 24.9999 50.0001C21.0047 50.0001 17.0541 49.0389 13.5244 47.2141L0.601068 49.3339L2.72832 36.3645C0.941278 32.8647 0 28.9525 0 25.0001C0 18.3223 2.60042 12.0443 7.32229 7.32237C12.0442 2.6005 18.3221 0 24.9999 0C31.6777 0 37.9558 2.6005 42.6776 7.32237C47.3995 12.0443 50 18.3223 50 25.0001C50 31.678 47.3995 37.9558 42.6776 42.6779ZM24.9999 4.33778C13.6067 4.33778 4.33772 13.607 4.33772 25.0001C4.33772 28.4792 5.21935 31.9192 6.8868 34.9487L7.24853 35.6054L5.85915 44.0756L14.2959 42.6918L14.9565 43.0601C18.0107 44.7624 21.4837 45.6622 24.9999 45.6622C36.3932 45.6622 45.6622 36.3933 45.6622 25.0001C45.6622 13.607 36.3932 4.33778 24.9999 4.33778ZM31.1133 24.3614C32.4522 24.9804 34.1536 26.3725 34.1208 29.3117C34.0749 33.4266 31.2191 35.6542 27.2744 35.6542H19.4594H18.3042C17.5079 35.6542 16.8645 35.0053 16.8713 34.2092L17.0344 15.0573C17.041 14.2714 17.6794 13.6377 18.4652 13.6366L27.1493 13.6256C31.4651 13.6256 33.9598 16.039 33.9177 19.8134C33.8903 22.2579 32.2484 23.8355 31.1133 24.3614ZM26.766 17.4622H21.3643L21.3076 22.5361H26.7093C28.5347 22.5361 29.5672 21.5152 29.584 19.9992C29.6009 18.4831 28.5915 17.4622 26.766 17.4622ZM26.9444 26.4035H21.2643L21.2038 31.8178H26.884C28.8333 31.8178 29.7752 30.5802 29.792 29.0952C29.8085 27.6101 28.8939 26.4035 26.9444 26.4035Z",
                    fill: "currentColor"
                })))
            }
        },
        97181: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onClick;
                return l.default.createElement(o.default, {
                    onClick: t,
                    side: l.default.createElement(u.default, {
                        name: "lock",
                        className: i.default.icon
                    }),
                    multiline: !0
                }, l.default.createElement("div", {
                    className: i.default.header
                }, l.default.createElement(s.TextSpan, {
                    theme: "title"
                }, r.default.t(1441))), l.default.createElement(s.TextDiv, {
                    theme: "muted"
                }, r.default.t(1440)))
            };
            var l = n(a(67294)),
                o = n(a(82745)),
                i = n(a(21477)),
                r = n(a(89115)),
                u = n(a(75131)),
                s = a(28770)
        },
        57478: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.catalog,
                    a = e.subtitle,
                    n = e.hideIncompleteRows,
                    d = e.businessProfile;
                return l.default.createElement(r.default, {
                    onProductDetail: function(e) {
                        var t = new URL((0, s.default)(e.url, "product.url"), `https://${u.default.HOSTNAME.FACEBOOK}`);
                        o.default.open(String(t))
                    },
                    onProductCatalog: function() {
                        (0, i.goToShop)(d)
                    },
                    catalog: t,
                    subtitle: a,
                    hideIncompleteRows: n,
                    showShopsLogo: !0
                })
            };
            var l = n(a(67294)),
                o = n(a(21144)),
                i = a(79984),
                r = n(a(51934)),
                u = n(a(34263)),
                s = n(a(35643))
        },
        63328: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                if (e.size !== t.size) return !1;
                var a, n = (0, o.default)(e);
                try {
                    for (n.s(); !(a = n.n()).done;) {
                        var i = (0, l.default)(a.value, 2),
                            r = i[0],
                            u = i[1];
                        if (t.get(r) !== u) return !1
                    }
                } catch (e) {
                    n.e(e)
                } finally {
                    n.f()
                }
                return !0
            };
            var l = n(a(63038)),
                o = n(a(43269))
        },
        41323: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                container: "_36FbL",
                block: "_11V85",
                main: "_1ER5I",
                side: "_1YLup",
                multiline: "_1tPXz"
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
        83442: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                body: "_2j9Df",
                photo: "_3wMpK",
                chevron: "_2o-Pp"
            }
        },
        91548: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                businessAccount: "_3Wx0w",
                businessTitleText: "_3hEvS"
            }
        },
        70615: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                actionsRow: "_2kAwJ",
                actionButton: "_2iUPD",
                actionLabel: "_2oaCg",
                actionDisabled: "_3GWG6"
            }
        },
        46604: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                businessHours: "_1I5MS",
                businessHoursRow: "_1E5MZ",
                firstRow: "_3qGzL",
                businessHoursDay: "CY6kT",
                businessHoursHours: "_1ujuU",
                dayIsOpen: "_3nRm3",
                businessHoursChevron: "_36zDQ",
                flipSvg: "_3-kwz"
            }
        },
        62260: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                section: "_2yoR2",
                description: "_2COKu",
                map: "_2FPvQ"
            }
        },
        67666: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                wrapper: "_-68fg",
                title: "_1FhZx",
                subtitle: "_3YwTO",
                verifiedText: "_25I1z",
                icon: "_2ie2d"
            }
        },
        11582: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                contactBusinessInfo: "_2Qmz_",
                contactBusinessInfoSpinner: "_3UShD",
                dataRow: "_2GoqA",
                businessHoursRow: "T9W1E",
                businessHoursDay: "_1Qi8h",
                businessHoursHours: "_265N_",
                businessHoursChevron: "_235Hk",
                flipSvg: "sdLP_",
                dataRowIcon: "uj7Hl",
                dataRowText: "_1y-yA",
                businessTitleText: "_20eRR",
                businessMarker: "-ouoI",
                verifiedLabel: "_3WNAO",
                businessMap: "_34r-I",
                address: "HXkG_",
                link: "_3AYvg",
                infoIcon: "_3hzkD"
            }
        },
        42799: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                body: "_2YEfx",
                avatar: "_2ALnh",
                nameSecondary: "_3l1_9",
                screenName: "_2UVLe",
                businessVname: "_1viks",
                icon: "_37Tl1",
                titleAbout: "Xt0cg",
                chevron: "_1Fclf"
            }
        },
        32234: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                info: "_2U0ik",
                categories: "_2oH_b",
                noPaddingBottom: "_3W57d"
            }
        },
        13916: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                open: "_25r2J",
                closed: "_5Xa1z",
                openStatus: "_1i7Je"
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
        17847: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                body: "_f0hJ",
                avatar: "_3zYOj",
                description: "_8xDKI",
                nameSecondary: "_3IaWU",
                chevron: "_1kh2B",
                iconSearch: "PLicp",
                title: "_1VJFC",
                dogfoodingGroupBannerInternalOnly: "_2j99K"
            }
        },
        64287: (e, t, a) => {
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
                text: "_1iOjC",
                graphic: "_1WxSS"
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
        75632: (e, t, a) => {
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
        }
    }
]);