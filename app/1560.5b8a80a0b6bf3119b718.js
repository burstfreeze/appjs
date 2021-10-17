/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [1560], {
        1419: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.formatRemoveResult = function(t, e) {
                return s(t, f, p, h, e)
            }, e.formatResult = s, e.formatParticipantActionString = u, e.formatGroupStatusReasonString = d, e.formatParticipantStatusReasonString = c, e.addSuccessString = function(t, e) {
                return i.default.t(188, {
                    participantNames: t,
                    _plural: e
                })
            }, e.addFailedString = function(t, e) {
                return i.default.t(186, {
                    participantNames: t,
                    _plural: e
                })
            }, e.addPartialFailedString = function() {
                return i.default.t(187)
            }, e.removeSuccessString = f, e.removeFailedString = p, e.removePartialFailedString = h, e.promoteSuccessString = function(t, e) {
                return i.default.t(201, {
                    participantNames: t,
                    _plural: e
                })
            }, e.promoteFailedString = function(t, e) {
                return i.default.t(199, {
                    participantNames: t,
                    _plural: e
                })
            }, e.promotePartialFailedString = function() {
                return i.default.t(200)
            }, e.demoteFailedString = function(t, e, a) {
                switch (a) {
                    case 406:
                        return i.default.t(191, {
                            participant: t
                        });
                    default:
                        return i.default.t(190, {
                            participantNames: t,
                            _plural: e
                        })
                }
            }, e.demoteSuccessString = function(t, e) {
                return i.default.t(193, {
                    participantNames: t,
                    _plural: e
                })
            }, e.demotePartialFailedString = function() {
                return i.default.t(192)
            };
            var r = n(a(20050)),
                o = n(a(38032)),
                i = n(a(45159)),
                l = n(a(78208));

            function s(t, e, a, n, i) {
                var s;
                if (207 === t.status) {
                    var f = {};
                    for (var p in t)
                        if (l.default.isWid(p)) {
                            var h = t[p];
                            if ((403 !== h || !o.default.supportsFeature(o.default.F.GROUPS_V_4_JOIN_PERMISSION)) && 207 !== h) {
                                f[h] || (f[h] = []);
                                var m = r.default.get(p);
                                m && f[h].push(m)
                            }
                        } var _ = [];
                    for (var v in f) {
                        var g = u(e, a, c, parseInt(v, 10), f[v]);
                        g && _.push(g)
                    }
                    s = _.length > 0 ? _.join("\n") : n()
                } else s = u(e, a, d, t.status, i);
                return s
            }

            function u(t, e, a, n, r) {
                var o = r.map((function(t) {
                        return t.formattedShortName
                    })).join(i.default.t(826)),
                    l = 200 === n;
                return (l ? t(o, r.length) : e(o, r.length, n)) + (l ? "" : a(n, r.length))
            }

            function d(t) {
                var e = "";
                switch (t) {
                    case 403:
                        e = " " + i.default.t(136);
                        break;
                    case 408:
                        e = " " + i.default.t(196);
                        break;
                    case 404:
                        e = " " + i.default.t(137);
                        break;
                    case 429:
                        e = " " + i.default.t(138)
                }
                return e
            }

            function c(t, e) {
                var a = "";
                switch (t) {
                    case 401:
                    case 406:
                    case 409:
                        break;
                    case 404:
                        a = " " + i.default.t(195, {
                            _plural: e
                        });
                        break;
                    case 408:
                        a = " " + i.default.t(196, {
                            _plural: e
                        });
                        break;
                    case 500:
                        a = " " + i.default.t(197);
                        break;
                    default:
                        a = " " + i.default.t(198)
                }
                return a
            }

            function f(t, e) {
                return i.default.t(206, {
                    participantNames: t,
                    _plural: e
                })
            }

            function p(t, e, a) {
                switch (a) {
                    case 406:
                        return i.default.t(205, {
                            participant: t
                        });
                    default:
                        return i.default.t(203, {
                            participantNames: t,
                            _plural: e
                        })
                }
            }

            function h() {
                return i.default.t(204)
            }
        },
        87547: (t, e, a) => {
            "use strict";
            var n = a(52108).default,
                r = a(20862),
                o = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.addParticipants = function(t, e) {
                return _((0, h.unproxy)(t), e)
            }, e.removeParticipants = function(t, e) {
                return g((0, h.unproxy)(t), e)
            }, e.promoteParticipants = function(t, e) {
                return S((0, h.unproxy)(t), e)
            }, e.demoteParticipants = function(t, e) {
                return y((0, h.unproxy)(t), e)
            };
            var i = o(a(87757)),
                l = o(a(48926)),
                s = a(24224),
                u = o(a(65901)),
                d = r(a(18286)),
                c = r(a(1419)),
                f = o(a(45159)),
                p = a(9343),
                h = a(68220),
                m = a(85893);

            function _() {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = (0, l.default)(i.default.mark((function t(e, a) {
                    var r, o, l, h, v, g, C, S = arguments;
                    return i.default.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (o = S.length > 2 && void 0 !== S[2] ? S[2] : (0, s.genId)(), null != (l = null === (r = e.groupMetadata) || void 0 === r ? void 0 : r.participants)) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", n.reject(new d.ActionError));
                            case 4:
                                if (!a.some((function(t) {
                                        return l.get(t.id)
                                    }))) {
                                    t.next = 7;
                                    break
                                }
                                return __LOG__(3)`models:groupMetadata:participantCollection:addParticipants already a group member`, t.abrupt("return", n.reject(new d.ActionError));
                            case 7:
                                if (l.canAdd()) {
                                    t.next = 9;
                                    break
                                }
                                return t.abrupt("return", n.reject(new d.ActionError));
                            case 9:
                                return h = (0, p.sendAddParticipants)(e.id, a.map((function(t) {
                                    return t.id
                                }))), v = a.map((function(t) {
                                    return t.formattedShortName
                                })).join(f.default.t(826)), g = new s.ActionType(f.default.t(189, {
                                    participantNames: v,
                                    _plural: a.length
                                })), C = h.then((function(t) {
                                    l.sendForNeededAddRequest(t);
                                    var e = c.formatResult(t, c.addSuccessString, c.addFailedString, c.addPartialFailedString, a);
                                    return new s.ActionType(e)
                                })).catch((function() {
                                    return __LOG__(3)`models:groupMetadata:participantCollection:addParticipants dropped`, new s.ActionType(f.default.t(186, {
                                        participantNames: v,
                                        _plural: a.length
                                    }), {
                                        actionText: f.default.t(226),
                                        actionHandler: function() {
                                            return _(e, a, o)
                                        }
                                    })
                                })), u.default.openToast((0, m.jsx)(s.ActionToast, {
                                    id: o,
                                    initialAction: g,
                                    pendingAction: C
                                })), t.next = 16, h;
                            case 16:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function g() {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = (0, l.default)(i.default.mark((function t(e, a) {
                    var r, o, l, h, _, v, C, S = arguments;
                    return i.default.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (o = S.length > 2 && void 0 !== S[2] ? S[2] : (0, s.genId)(), null != (l = null === (r = e.groupMetadata) || void 0 === r ? void 0 : r.participants)) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", n.reject(new d.ActionError));
                            case 4:
                                if (!a.some((function(t) {
                                        return !l.canRemove(t)
                                    }))) {
                                    t.next = 6;
                                    break
                                }
                                return t.abrupt("return", n.reject(new d.ActionError));
                            case 6:
                                return h = (0, p.sendRemoveParticipants)(e.id, a.map((function(t) {
                                    return t.id
                                }))), _ = a.map((function(t) {
                                    return t.contact.formattedShortName
                                })).join(f.default.t(826)), v = new s.ActionType(f.default.t(207, {
                                    participantNames: _,
                                    _plural: a.length
                                })), C = h.then((function(t) {
                                    var e = c.formatRemoveResult(t, a.map((function(t) {
                                        return t.contact
                                    })));
                                    return new s.ActionType(e)
                                })).catch((function() {
                                    return __LOG__(3)`models:groupMetadata:participantCollection:removeParticipants dropped`, new s.ActionType(f.default.t(203, {
                                        participantNames: _,
                                        _plural: a.length
                                    }), {
                                        actionText: f.default.t(226),
                                        actionHandler: function() {
                                            return g(e, a, o)
                                        }
                                    })
                                })), u.default.openToast((0, m.jsx)(s.ActionToast, {
                                    id: o,
                                    initialAction: v,
                                    pendingAction: C
                                })), t.next = 13, h;
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function S() {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = (0, l.default)(i.default.mark((function t(e, a) {
                    var r, o, l, h, _, v, g, C = arguments;
                    return i.default.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (o = C.length > 2 && void 0 !== C[2] ? C[2] : (0, s.genId)(), null != (l = null === (r = e.groupMetadata) || void 0 === r ? void 0 : r.participants)) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", n.reject(new d.ActionError));
                            case 4:
                                if (!a.some((function(t) {
                                        return !l.canPromote(t)
                                    }))) {
                                    t.next = 6;
                                    break
                                }
                                return t.abrupt("return", n.reject(new d.ActionError));
                            case 6:
                                return h = (0, p.sendPromoteParticipants)(e.id, a.map((function(t) {
                                    return t.id
                                }))), _ = a.map((function(t) {
                                    return t.contact.formattedShortName
                                })).join(f.default.t(826)), v = new s.ActionType(f.default.t(202, {
                                    participantNames: _,
                                    _plural: a.length
                                })), g = h.then((function(t) {
                                    var e = c.formatResult(t, c.promoteSuccessString, c.promoteFailedString, c.promotePartialFailedString, a.map((function(t) {
                                        return t.contact
                                    })));
                                    return new s.ActionType(e)
                                })).catch((function() {
                                    return __LOG__(3)`models:groupMetadata:participantCollection:removeParticipants dropped`, new s.ActionType(f.default.t(199, {
                                        participantNames: _,
                                        _plural: a.length
                                    }), {
                                        actionText: f.default.t(226),
                                        actionHandler: function() {
                                            return S(e, a, o)
                                        }
                                    })
                                })), u.default.openToast((0, m.jsx)(s.ActionToast, {
                                    id: o,
                                    initialAction: v,
                                    pendingAction: g
                                })), t.next = 13, h;
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function y() {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = (0, l.default)(i.default.mark((function t(e, a) {
                    var r, o, l, h, _, v, g, C = arguments;
                    return i.default.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (o = C.length > 2 && void 0 !== C[2] ? C[2] : (0, s.genId)(), null != (l = null === (r = e.groupMetadata) || void 0 === r ? void 0 : r.participants)) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", n.reject(new d.ActionError));
                            case 4:
                                if (!a.some((function(t) {
                                        return !l.canDemote(t)
                                    }))) {
                                    t.next = 6;
                                    break
                                }
                                return t.abrupt("return", n.reject(new d.ActionError));
                            case 6:
                                return h = (0, p.sendDemoteParticipants)(e.id, a.map((function(t) {
                                    return t.id
                                }))), _ = a.map((function(t) {
                                    return t.contact.formattedShortName
                                })).join(f.default.t(826)), v = new s.ActionType(f.default.t(194, {
                                    participantNames: _,
                                    _plural: a.length
                                })), g = h.then((function(t) {
                                    var e = c.formatResult(t, c.demoteSuccessString, c.demoteFailedString, c.demotePartialFailedString, a.map((function(t) {
                                        return t.contact
                                    })));
                                    return new s.ActionType(e)
                                })).catch((function() {
                                    return __LOG__(3)`models:groupMetadata:participantCollection:demoteParticipants dropped`, new s.ActionType(f.default.t(190, {
                                        participantNames: _,
                                        _plural: a.length
                                    }), {
                                        actionText: f.default.t(226),
                                        actionHandler: function() {
                                            return y(e, a, o)
                                        }
                                    })
                                })), u.default.openToast((0, m.jsx)(s.ActionToast, {
                                    id: o,
                                    initialAction: v,
                                    pendingAction: g
                                })), t.next = 13, h;
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        85805: (t, e, a) => {
            "use strict";
            var n = a(52108).default,
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.removeGroupParticipants = function(t, e) {
                return S(t, e, m).catch((function(t) {
                    __LOG__(3)`error sending removing group participants iq: ${t}`
                }))
            }, e.addGroupParticipants = function(t, e) {
                return S(t, e, _).catch((0, d.filteredCatch)(h.ServerStatusCodeError, (function(t) {
                    return {
                        status: t.statusCode
                    }
                })))
            }, e.demoteGroupParticipants = function(t, e) {
                return S(t, e, v).catch((function(t) {
                    __LOG__(3)`error sending demoting group participants iq: ${t}`
                }))
            }, e.promoteGroupParticipants = function(t, e) {
                return S(t, e, g).catch((function(t) {
                    __LOG__(3)`error sending promoting group participants iq: ${t}`
                }))
            };
            var o = r(a(87757)),
                i = r(a(81109)),
                l = r(a(59713)),
                s = r(a(48926)),
                u = a(78363),
                d = a(18077),
                c = a(34733),
                f = r(a(39526)),
                p = a(15824),
                h = a(59175),
                m = "remove",
                _ = "add",
                v = "demote",
                g = "promote";

            function C(t) {
                return new f.default(`${t}GroupParticipantsReplyParser`, (function(e) {
                    return {
                        id: e.attrString("id"),
                        participants: e.child(t).mapChildren((function(t) {
                            var e = t.maybeChild("add_request");
                            return {
                                wid: t.attrUserWid("jid"),
                                error: t.hasAttr("error") ? t.attrInt("error") : null,
                                invite_code: e && e.attrString("code"),
                                invite_code_exp: e && e.attrString("expiration")
                            }
                        }))
                    }
                }))
            }

            function S() {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = (0, s.default)(o.default.mark((function t(e, a, r) {
                    var s, d, f, S, x, y;
                    return o.default.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                s = a.map((function(t) {
                                    return (0, u.wap)("participant", {
                                        jid: (0, p.JID)(t)
                                    })
                                })), t.t0 = r, t.next = t.t0 === _ ? 4 : t.t0 === m ? 6 : t.t0 === v ? 8 : t.t0 === g ? 10 : 12;
                                break;
                            case 4:
                                return d = (0, u.wap)("add", null, s), t.abrupt("break", 13);
                            case 6:
                                return d = (0, u.wap)("remove", null, s), t.abrupt("break", 13);
                            case 8:
                                return d = (0, u.wap)("demote", null, s), t.abrupt("break", 13);
                            case 10:
                                return d = (0, u.wap)("promote", null, s), t.abrupt("break", 13);
                            case 12:
                                return t.abrupt("return", n.reject(new Error(`invalid group operation ${r}`)));
                            case 13:
                                return f = (0, u.wap)("iq", {
                                    to: (0, p.GROUP_JID)(e),
                                    type: "set",
                                    xmlns: "w:g2",
                                    id: (0, u.generateId)()
                                }, d), t.next = 16, (0, c.sendIq)(f, C(r));
                            case 16:
                                if (!(S = t.sent).success) {
                                    t.next = 24;
                                    break
                                }
                                return x = S.result.participants, y = {}, x.forEach((function(t) {
                                    Object.assign(y, (0, l.default)({}, t.wid.toString(), null != t.error ? t.error : 200))
                                })), t.abrupt("return", (0, i.default)((0, i.default)({}, y), {}, {
                                    status: 207,
                                    participants: x.map((function(t) {
                                        return (0, l.default)({}, t.wid.toString(), {
                                            code: null != t.error && t.error.toString() || "200",
                                            invite_code: t.invite_code,
                                            invite_code_exp: t.invite_code_exp
                                        })
                                    }))
                                }));
                            case 24:
                                return t.abrupt("return", n.reject(new h.ServerStatusCodeError(S.errorCode, S.errorText)));
                            case 25:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        9343: (t, e, a) => {
            "use strict";
            var n = a(52108).default,
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.sendAddParticipants = function(t, e) {
                var a;
                if (o.default.supportsFeature(o.default.F.MD_BACKEND)) {
                    if (!(a = (0, l.addGroupParticipants)(t, e))) return n.reject(new Error("addParticipants: not supported when not build with MD_BACKEND"))
                } else a = i.default.addParticipants(t, e);
                return a
            }, e.sendRemoveParticipants = function(t, e) {
                var a;
                if (o.default.supportsFeature(o.default.F.MD_BACKEND)) {
                    if (!(a = (0, l.removeGroupParticipants)(t, e))) return n.reject(new Error("sendRemoveParticipants: not supported when not build with MD_BACKEND"))
                } else a = i.default.removeParticipants(t, e);
                return a
            }, e.sendDemoteParticipants = function(t, e) {
                var a;
                if (o.default.supportsFeature(o.default.F.MD_BACKEND)) {
                    if (!(a = (0, l.demoteGroupParticipants)(t, e))) return n.reject(new Error("sendDemoteParticipants: not supported when not build with MD_BACKEND"))
                } else a = i.default.demoteParticipants(t, e);
                return a
            }, e.sendPromoteParticipants = function(t, e) {
                var a;
                if (o.default.supportsFeature(o.default.F.MD_BACKEND)) {
                    if (!(a = (0, l.promoteGroupParticipants)(t, e))) return n.reject(new Error("sendPromoteParticipants: not supported when not build with MD_BACKEND"))
                } else a = i.default.promoteParticipants(t, e);
                return a
            };
            var o = r(a(38032)),
                i = r(a(54270)),
                l = a(85805)
        },
        95317: (t, e, a) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LoadType = e.EditType = void 0;
            var n = a(54302).Mirrored(["EDITING", "PENDING", "DONE", "ERROR"]);
            e.EditType = n;
            var r = a(54302).Mirrored(["PENDING", "DONE", "ERROR"]);
            e.LoadType = r
        },
        80966: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = t.contact,
                    a = t.editable,
                    n = t.profilePicThumb,
                    r = t.onClick,
                    y = t.onOpenStatus,
                    j = t.onLoad,
                    E = t.hideStatusV3,
                    P = (0, s.useState)(window.innerWidth),
                    T = (0, i.default)(P, 2),
                    w = T[0],
                    I = T[1],
                    k = (0, s.useState)(null),
                    b = (0, i.default)(k, 2),
                    O = b[0],
                    N = b[1];
                (0, s.useEffect)((function() {
                    function t() {
                        I(window.innerWidth)
                    }
                    return window.addEventListener("resize", t), t(),
                        function() {
                            return window.removeEventListener("resize", t)
                        }
                }), []);
                var M = w > 1300 ? 152 : 122,
                    D = !(0, p.canSeeStatusV3OnContact)() || e.statusMute || E ? null : v.default.get(e.id);

                function A() {
                    D && (u.default.openModalMedia((0, x.jsx)(_.default, {
                        removeTopDrawer: !1,
                        statusV3: D
                    }), {
                        transition: "status-v3-modal"
                    }), y && y())
                }
                var R = null;
                O && (R = (0, x.jsx)(C.default, {
                    displayName: "ContextMenu",
                    escapable: !0,
                    popable: !0,
                    requestDismiss: function() {
                        N(null)
                    },
                    children: (0, x.jsx)(S.default, {
                        contextMenu: O
                    })
                }));
                var L, F = null,
                    B = d.default.noStatusBorder;
                null != D && (F = (0, x.jsx)(g.default, {
                    statusV3: D,
                    size: M + 24,
                    stroke: 3,
                    theme: g.RingTheme.BUSINESS_CONTACT_INFO
                }), B = d.default.hasStatusBorder);
                L = a && null != n ? (0, x.jsx)(m.default, {
                    profilePicThumb: n,
                    size: M
                }) : (0, x.jsx)(c.default, {
                    id: e.id,
                    size: M,
                    loader: !0,
                    onLoad: j,
                    onClick: function(t) {
                        if (r)
                            if (null != D && D.totalCount > 0) {
                                t.stopPropagation(), t.preventDefault();
                                var e = [(0, x.jsx)(f.default, {
                                    a8n: "mi-view-photo",
                                    action: function() {
                                        r(t)
                                    },
                                    children: h.default.t(1821)
                                }, "view-photo"), (0, x.jsx)(f.default, {
                                    a8n: "mi-view-status",
                                    action: A,
                                    children: h.default.t(1677)
                                }, "view-status")];
                                N({
                                    menu: e,
                                    event: t
                                })
                            } else r(t)
                    },
                    quality: c.DETAIL_IMAGE_QUALITY.HIGH
                });
                return (0, x.jsxs)(x.Fragment, {
                    children: [(0, x.jsx)("div", {
                        className: (0, l.default)(d.default.coverPhoto, (0, o.default)({}, d.default.isEditable, a))
                    }), (0, x.jsxs)("div", {
                        className: d.default.avatar,
                        children: [F, (0, x.jsx)("div", {
                            className: B,
                            children: L
                        })]
                    }), R]
                })
            };
            var o = r(a(59713)),
                i = r(a(63038)),
                l = r(a(94184)),
                s = a(67294),
                u = r(a(65901)),
                d = r(a(21997)),
                c = n(a(66834)),
                f = r(a(94680)),
                p = a(2629),
                h = r(a(45159)),
                m = r(a(70486)),
                _ = r(a(8089)),
                v = r(a(87691)),
                g = n(a(84245)),
                C = r(a(16835)),
                S = r(a(93820)),
                x = a(85893)
        },
        24088: (t, e, a) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "RawBusinessProfile", {
                enumerable: !0,
                get: function() {
                    return n.RawBusinessProfile
                }
            }), Object.defineProperty(e, "BUSINESS_HOUR_MODES", {
                enumerable: !0,
                get: function() {
                    return r.BUSINESS_HOUR_MODES
                }
            }), Object.defineProperty(e, "DAYS_OF_WEEK", {
                enumerable: !0,
                get: function() {
                    return r.DAYS_OF_WEEK
                }
            });
            var n = a(13258),
                r = a(74871)
        },
        14715: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getBusinessOpenState = function(t, e) {
                var a, n;
                if (null == t.timezone) return {
                    status: "unknown"
                };
                var r = e || new Date,
                    o = new Date(r.toLocaleString("en-US", {
                        timeZone: t.timezone
                    })),
                    s = (r.getTime() - o.getTime()) / 1e3 / 60,
                    u = t.config[i.DAYS_OF_WEEK[r.getDay()]];
                if (!u) return {
                    status: d.CLOSED_TODAY
                };
                switch (u.mode) {
                    case l.BUSINESS_HOUR_MODES.OPEN_24H:
                        if (u) return {
                            status: d.OPEN_24H
                        };
                        break;
                    case l.BUSINESS_HOUR_MODES.APPOINTMENT_ONLY:
                        if (u) return {
                            status: d.OPEN_APPOINTMENT
                        };
                        break;
                    case l.BUSINESS_HOUR_MODES.SPECIFIC_HOURS:
                        var f = 60 * r.getHours() + r.getMinutes();
                        if (1 === (null === (a = u.hours) || void 0 === a ? void 0 : a.length)) {
                            var p = u.hours[0][0],
                                h = u.hours[0][1];
                            return f >= p && f <= h ? {
                                status: d.OPEN,
                                openUntil: c(s + h)
                            } : f <= p ? {
                                status: d.CLOSED,
                                opensAt: c(s + p)
                            } : {
                                status: d.CLOSED
                            }
                        }
                        if (2 === (null === (n = u.hours) || void 0 === n ? void 0 : n.length)) {
                            var m = u.hours[0][0],
                                _ = u.hours[0][1],
                                v = u.hours[1][0],
                                g = u.hours[1][1];
                            return f >= m && f <= _ ? {
                                status: d.OPEN,
                                openUntil: c(s + _),
                                additionalOpen: c(s + v),
                                additionalClose: c(s + g)
                            } : f < m ? {
                                status: d.CLOSED,
                                opensAt: c(s + m),
                                additionalOpen: c(s + v),
                                additionalClose: c(s + g)
                            } : f >= v && f <= g ? {
                                status: d.OPEN,
                                openUntil: c(s + g)
                            } : f < v ? {
                                status: d.CLOSED,
                                opensAt: c(s + v)
                            } : {
                                status: d.CLOSED
                            }
                        }
                }
                return {
                    status: "unknown"
                }
            }, Object.defineProperty(e, "minutesToTime", {
                enumerable: !0,
                get: function() {
                    return s.minutesToTime
                }
            }), Object.defineProperty(e, "timeStringToMinutes", {
                enumerable: !0,
                get: function() {
                    return s.timeStringToMinutes
                }
            }), e.BUSINESS_OPEN_STATUS = e.convertToRawBusinessProfile = e.isValidBusinessHours = e.isValidTime = void 0;
            var r = n(a(63038)),
                o = n(a(43269)),
                i = a(74871),
                l = a(24088),
                s = a(52087),
                u = function(t) {
                    return void 0 !== (0, s.timeStringToMinutes)(t)
                };
            e.isValidTime = u;
            e.isValidBusinessHours = function(t, e) {
                if (t === l.BUSINESS_HOUR_MODES.SPECIFIC_HOURS)
                    for (var a in e) {
                        var n = e[a],
                            i = n.closed,
                            s = n.hours;
                        if (!i) {
                            var d, c = (0, o.default)(s);
                            try {
                                for (c.s(); !(d = c.n()).done;) {
                                    var f = (0, r.default)(d.value, 2),
                                        p = f[0],
                                        h = f[1];
                                    if (!u(p) || !u(h)) return !1
                                }
                            } catch (t) {
                                c.e(t)
                            } finally {
                                c.f()
                            }
                        }
                    }
                return !0
            };
            e.convertToRawBusinessProfile = function(t) {
                var e = t.mode,
                    a = t.dayValues,
                    n = t.note,
                    o = t.timezone,
                    i = {};
                for (var u in a) {
                    var d = a[u],
                        c = d.closed,
                        f = d.hours;
                    if (!c) {
                        var p = {
                            mode: e
                        };
                        e === l.BUSINESS_HOUR_MODES.SPECIFIC_HOURS && (p.hours = f.map((function(t) {
                            var e = (0, r.default)(t, 2),
                                a = e[0],
                                n = e[1];
                            return [(0, s.timeStringToMinutes)(a) || 0, (0, s.timeStringToMinutes)(n) || 0]
                        }))), i[u] = p
                    }
                }
                return {
                    businessHours: {
                        config: i,
                        note: n,
                        timezone: o || Intl.DateTimeFormat().resolvedOptions().timeZone
                    }
                }
            };
            var d = {
                OPEN: "open",
                CLOSED: "closed",
                OPEN_TODAY: "open_today",
                CLOSED_TODAY: "closed_today",
                OPEN_APPOINTMENT: "open_appointment",
                OPEN_24H: "open_24h",
                UNKNOWN: "unknown"
            };

            function c(t) {
                var e = new Date,
                    a = Math.floor(t / 60);
                return e.setHours(a), e.setMinutes(t % 60), e.setSeconds(0), e
            }
            e.BUSINESS_OPEN_STATUS = d
        },
        13258: (t, e, a) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "EditType", {
                enumerable: !0,
                get: function() {
                    return n.EditType
                }
            }), Object.defineProperty(e, "LoadType", {
                enumerable: !0,
                get: function() {
                    return n.LoadType
                }
            });
            var n = a(95317)
        },
        10114: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                return (0, s.jsx)(l.default, {
                    name: "shopping-cart",
                    className: (0, o.default)(i.default.cartIcon, (0, r.default)({}, i.default.inheritColor, "inherit-color" === t.theme))
                })
            };
            var r = n(a(59713)),
                o = n(a(94184)),
                i = n(a(91214)),
                l = n(a(7665)),
                s = a(85893)
        },
        50329: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e, a = (0, u.default)(t.msgInfoParticipant, ["t"]),
                    n = (0, u.default)(t.contact, ["id", "name", "formattedName", "notifyName"]),
                    c = (0, d.jsx)(i.default, {
                        id: n.id
                    }),
                    f = o.default.relativeDateAndTimeStr(a.t),
                    p = (0, d.jsx)("span", {
                        title: f,
                        children: f
                    });
                !n.name && n.notifyName && (e = (0, d.jsx)(l.default, {
                    className: s.default.notifyName,
                    direction: "auto",
                    text: n.notifyName
                }));
                return (0, d.jsx)(r.default, {
                    contextEnabled: function() {
                        return !1
                    },
                    image: c,
                    primary: (0, d.jsx)(l.default, {
                        direction: "auto",
                        text: n.formattedName,
                        titlify: !0,
                        ellipsify: !0
                    }),
                    secondary: p,
                    secondaryDetail: e,
                    style: {
                        cursor: "auto"
                    },
                    theme: t.theme,
                    idle: !0
                })
            };
            var r = n(a(27237)),
                o = n(a(10399)),
                i = n(a(66834)),
                l = n(a(73008)),
                s = n(a(42684)),
                u = n(a(69283)),
                d = a(85893)
        },
        65971: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getEntityTypeText = e.ComplianceInfoHelpCenterBanner = e.ComplianceInfoLoading = e.ComplianceInfoStructuralField = e.ComplianceInfoPrimitiveField = e.ComplianceInfoGroup = void 0;
            var r = n(a(59713)),
                o = n(a(56720)),
                i = a(74871),
                l = n(a(81218)),
                s = n(a(46821)),
                u = n(a(49012)),
                d = a(27968),
                c = n(a(45159)),
                f = n(a(85651)),
                p = a(22552),
                h = a(85893),
                m = {
                    paddingTop: "fbgy3m38",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "oq31bsqd",
                    paddingStart: "gx1rr48f"
                },
                _ = {
                    display: "f804f6gw",
                    lineHeight: "gz7w46tb"
                },
                v = {
                    display: "f804f6gw",
                    marginTop: "g1eqewly",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "kzyzudjh",
                    marginStart: "svoq16ka",
                    wordBreak: "cw3vfol9",
                    whiteSpace: "c2jc77nu"
                },
                g = {
                    fontSize: "f8jlpxt4",
                    lineHeight: "jgi8eev7"
                },
                C = function() {
                    return c.default.t(695)
                };
            e.ComplianceInfoGroup = function(t) {
                var e = t.title,
                    a = t.children;
                return (0, h.jsx)(s.default, {
                    title: e,
                    className: (0, o.default)(m),
                    children: a
                })
            };
            e.ComplianceInfoPrimitiveField = function(t) {
                var e = t.value,
                    a = t.label;
                return (0, h.jsxs)(S, {
                    children: [(0, h.jsx)(y, {
                        value: e
                    }), (0, h.jsx)(x, {
                        label: a
                    })]
                })
            };
            e.ComplianceInfoStructuralField = function(t) {
                var e = t.valuesMap,
                    a = void 0 === e ? {} : e,
                    n = t.keys,
                    r = void 0 === n ? [] : n,
                    o = t.label,
                    i = r.reduce((function(t, e) {
                        return a[e] ? t.concat(a[e]) : t
                    }), []),
                    l = i.length ? i : [C()];
                return (0, h.jsxs)(S, {
                    children: [(0, h.jsx)(y, {
                        value: l.join(", ")
                    }), (0, h.jsx)(x, {
                        label: o
                    })]
                })
            };
            var S = function(t) {
                var e = t.children;
                return (0, h.jsx)(l.default, {
                    multiline: !0,
                    restrictSpacing: !0,
                    children: (0, h.jsx)("div", {
                        className: (0, o.default)(m),
                        children: e
                    })
                })
            };
            e.ComplianceInfoLoading = function() {
                return (0, h.jsx)(d.FlexRow, {
                    align: "center",
                    justify: "center",
                    children: (0, h.jsx)(d.FlexItem, {
                        children: (0, h.jsx)(f.default, {})
                    })
                })
            };
            e.ComplianceInfoHelpCenterBanner = function(t) {
                var e = t.xstyle;
                return (0, h.jsxs)("div", {
                    className: (0, o.default)(g, e),
                    "data-testid": "compliance-help-center-banner",
                    children: [c.default.t(408), " ", (0, h.jsx)(u.default, {
                        href: "https://faq.whatsapp.com/general/account-and-profile/how-to-comply-with-the-laws-for-selling-online-in-India",
                        children: c.default.t(407)
                    })]
                })
            };
            e.getEntityTypeText = function(t) {
                var e, a = t || {},
                    n = a.entityType,
                    o = a.entityTypeCustom,
                    l = a.isRegistered,
                    s = (e = {}, (0, r.default)(e, i.businessTypeOptions.limitedLiabilityPartnership, c.default.t(411)), (0, r.default)(e, i.businessTypeOptions.soleProprietorship, c.default.t(419)), (0, r.default)(e, i.businessTypeOptions.partnership, c.default.t(415)), (0, r.default)(e, i.businessTypeOptions.publicCompany, c.default.t(417)), (0, r.default)(e, i.businessTypeOptions.privateCompany, c.default.t(416)), (0, r.default)(e, i.businessTypeOptions.other, c.default.t(413)), e),
                    u = o || s[n] || "";
                if (!u) return "";
                var d = "";
                return [i.businessTypeOptions.partnership, i.businessTypeOptions.other].includes(n) && (d = l ? c.default.t(418) : c.default.t(412)), `${u}${d?` (${d})`:""}`
            };
            var x = function(t) {
                    var e = t.label;
                    return (0, h.jsx)("div", {
                        className: (0, o.default)(_),
                        "data-testid": "compliance-info-field-label",
                        children: (0, h.jsx)(p.TextSpan, {
                            theme: "muted",
                            children: e
                        })
                    })
                },
                y = function(t) {
                    var e = t.value;
                    return (0, h.jsx)("div", {
                        className: (0, o.default)(v),
                        "data-testid": "compliance-info-field-value",
                        children: e || C()
                    })
                }
        },
        81218: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e, a = null != t.side ? (0, s.jsx)("div", {
                        className: l.default.side,
                        children: t.side
                    }) : null,
                    n = (0, o.default)(l.default.container, t.className, (e = {}, (0, r.default)(e, l.default.multiline, t.multiline), (0, r.default)(e, l.default.restrictSpacing, t.restrictSpacing), (0, r.default)(e, l.default.themeNewChatInfo, "new-chat-info" === t.theme), e));
                return (0, s.jsx)("div", {
                    "data-a8n": i.default.key(t.a8nText),
                    className: n,
                    role: t.onClick ? "button" : null,
                    onClick: t.onClick,
                    children: (0, s.jsxs)("div", {
                        className: l.default.block,
                        children: [(0, s.jsx)("div", {
                            className: l.default.main,
                            children: t.children
                        }), a]
                    })
                })
            };
            var r = n(a(59713)),
                o = n(a(94184)),
                i = n(a(40501)),
                l = n(a(41323)),
                s = a(85893)
        },
        36745: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t, e) {
                var a = (0, d.useState)(null),
                    n = (0, l.default)(a, 2),
                    r = n[0],
                    f = n[1],
                    p = function() {
                        f(null)
                    };
                return (0, d.useEffect)((function() {
                    if (p(), t) {
                        var a = new c.default,
                            n = a.signal;
                        return (0, s.default)(o.default.mark((function a() {
                                var r, l, s, d;
                                return o.default.wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.prev = 0, r = (0, m.hqLinkPreviewUploadSupported)(), a.next = 4, (0, S.default)((0, h.default)(t, r), n);
                                        case 4:
                                            if (l = a.sent, s = null == l ? void 0 : l.data) {
                                                a.next = 8;
                                                break
                                            }
                                            return a.abrupt("return");
                                        case 8:
                                            if (f(s), s.thumbnailHQ) {
                                                a.next = 11;
                                                break
                                            }
                                            return a.abrupt("return");
                                        case 11:
                                            return a.next = 13, j(s.thumbnailHQ, n, e);
                                        case 13:
                                            if (d = a.sent) {
                                                a.next = 16;
                                                break
                                            }
                                            return a.abrupt("return");
                                        case 16:
                                            f((0, i.default)((0, i.default)({}, s), d)), a.next = 24;
                                            break;
                                        case 19:
                                            if (a.prev = 19, a.t0 = a.catch(0), a.t0.name !== u.ABORT_ERROR) {
                                                a.next = 23;
                                                break
                                            }
                                            return a.abrupt("return");
                                        case 23:
                                            __LOG__(2)`useLinkPreview: error`;
                                        case 24:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a, null, [
                                    [0, 19]
                                ])
                            })))(),
                            function() {
                                a.signal.aborted || a.abort()
                            }
                    }
                }), [t, e]), {
                    linkPreview: r,
                    clearLinkPreview: p
                }
            }, e.findFirstWebLink = void 0;
            var o = r(a(87757)),
                i = r(a(81109)),
                l = r(a(63038)),
                s = r(a(48926)),
                u = a(84805),
                d = a(67294),
                c = r(a(73663)),
                f = a(44740),
                p = r(a(94253)),
                h = r(a(9596)),
                m = a(67445),
                _ = n(a(53454)),
                v = a(18070),
                g = r(a(57412)),
                C = r(a(57393)),
                S = r(a(27003)),
                x = r(a(53437)),
                y = r(a(89490));

            function j() {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = (0, s.default)(o.default.mark((function t(e, a, n) {
                    var r, i, l;
                    return o.default.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, (0, S.default)(C.default.createFromBase64Jpeg(e), a);
                            case 3:
                                return r = t.sent, t.next = 6, (0, y.default)({
                                    thumbnail: r,
                                    mediaType: g.default.THUMBNAIL_LINK,
                                    mediaKeyInfo: (0, x.default)(),
                                    uploadOrigin: (0, v.getUploadOriginForChat)(n),
                                    forwardedFromWeb: !1,
                                    signal: a,
                                    timeout: p.default.MMS_THUMBNAIL_UPLOAD_TIMEOUT
                                });
                            case 6:
                                if (i = t.sent, l = i.mediaEntry) {
                                    t.next = 10;
                                    break
                                }
                                return t.abrupt("return");
                            case 10:
                                return t.abrupt("return", {
                                    mediaKey: l.mediaKey,
                                    mediaKeyTimestamp: l.mediaKeyTimestamp,
                                    thumbnailDirectPath: l.directPath,
                                    thumbnailSha256: i.filehash,
                                    thumbnailEncSha256: l.encFilehash
                                });
                            case 13:
                                if (t.prev = 13, t.t0 = t.catch(0), t.t0.name !== u.ABORT_ERROR) {
                                    t.next = 17;
                                    break
                                }
                                return t.abrupt("return");
                            case 17:
                                __LOG__(2)`useLinkPreview.uploadHQPreview: error`;
                            case 18:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 13]
                    ])
                })))).apply(this, arguments)
            }
            e.findFirstWebLink = function(t) {
                var e = (0, f.removeCodeBlocks)(t),
                    a = _.findLinks(e, !0)[0];
                if (a) return a.url
            }
        },
        8001: (t, e, a) => {
            "use strict";
            var n = a(52108).default,
                r = a(20862),
                o = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e, a = t.images,
                    r = t.renderFallback,
                    o = t.fallbackMediaData,
                    c = t.fetching,
                    j = t.onClick,
                    E = (0, d.useRef)(null),
                    P = (0, d.useRef)(null),
                    T = (0, d.useRef)(null),
                    w = (0, d.useRef)(null),
                    I = (0, d.useRef)(null),
                    k = (0, d.useState)(null),
                    b = (0, l.default)(k, 2),
                    O = b[0],
                    N = b[1],
                    M = (0, d.useState)(a.filter((function(t) {
                        return t.mediaData.mediaStage === _.MEDIA_DATA_STAGE.RESOLVED
                    })).length),
                    D = (0, l.default)(M, 2),
                    A = D[0],
                    R = D[1],
                    L = (0, d.useState)(!1),
                    F = (0, l.default)(L, 2),
                    B = F[0],
                    U = F[1],
                    V = A === a.length,
                    H = function() {
                        return R((function(t) {
                            return t + 1
                        }))
                    };
                (0, d.useEffect)((function() {
                    var t = null;
                    if (!V && !r) {
                        var e, a, o = P.current;
                        if (!o) return;
                        null === (e = T.current) || void 0 === e || e.controller.abort();
                        var i = (t = new f.default).signal,
                            l = ((null === (a = T.current) || void 0 === a ? void 0 : a.promise) || n.resolve()).then((function() {
                                return (0, x.default)(o, {
                                    opacity: [1, 0]
                                }, {
                                    delay: 75,
                                    duration: 50
                                })
                            })),
                            s = (0, v.default)(l, i).then((function() {
                                if (i.aborted) throw new u.AbortError;
                                U(!0)
                            })).catch((0, u.catchAbort)((function() {
                                (0, x.default)(o, "stop", !0)
                            }))).finally((function() {
                                T.current = null
                            }));
                        T.current = {
                            promise: s,
                            controller: t
                        }
                    }
                    return function() {
                        var e;
                        null === (e = t) || void 0 === e || e.abort()
                    }
                }), [V, r]);
                var W, G, z, K = function() {
                    var t;
                    return (null === (t = E.current) || void 0 === t ? void 0 : t.children) ? E.current.scrollWidth === E.current.offsetWidth ? null : 0 === E.current.scrollLeft ? "next" : E.current.scrollWidth - 1 <= E.current.scrollLeft + E.current.offsetWidth ? "prev" : "both" : null
                };
                if ((0, d.useEffect)((function() {
                        N(K())
                    }), [V]), r && 0 === a.length) return (0, y.jsx)("div", {
                    className: h.default.carousel,
                    dir: "ltr",
                    children: (0, y.jsx)("div", {
                        className: (0, s.default)(h.default.contentContainer, h.default.slidesContainer),
                        children: o && (0, y.jsx)(m.default, {
                            altText: "",
                            mediaData: o,
                            renderFallback: !0,
                            singleSlide: !0
                        })
                    })
                });
                var Y = function() {
                    w.current = null;
                    var t = K();
                    O !== t && N(t)
                };
                if (a.length > 1) {
                    var q = function() {
                            var t = E.current;
                            if (null != t && ("prev" === O || "both" === O)) {
                                for (var e = 0, a = t.scrollLeft + Math.floor(t.offsetWidth / 2), n = t.lastElementChild; n instanceof HTMLElement && 0 === e;) {
                                    var r = n.offsetLeft + Math.floor(n.offsetWidth / 2);
                                    r < a && (e = r - a), n = n.previousElementSibling
                                }
                                0 !== e && t.scrollBy({
                                    left: e,
                                    behavior: "smooth"
                                })
                            }
                        },
                        $ = function() {
                            var t = E.current;
                            if (null != t && ("next" === O || "both" === O)) {
                                for (var e = 0, a = t.scrollLeft + Math.floor(t.offsetWidth / 2), n = t.firstElementChild; n instanceof HTMLElement && 0 === e;) {
                                    var r = n.offsetLeft + Math.floor(n.offsetWidth / 2);
                                    a < r && (e = r - a), n = n.nextElementSibling
                                }
                                0 !== e && t.scrollBy({
                                    left: e,
                                    behavior: "smooth"
                                })
                            }
                        },
                        X = function() {
                            I.current = null;
                            var t = K();
                            O !== t && N(t)
                        };
                    z = function() {
                        null == I.current && (I.current = requestAnimationFrame(X))
                    }, V && null != O && (W = (0, y.jsx)(p.default, {
                        type: p.ButtonType.Prev,
                        onClick: q,
                        onKeyDown: q,
                        disabled: "prev" !== O && "both" !== O,
                        theme: C.RoundTheme.Small,
                        overMedia: !0
                    }), G = (0, y.jsx)(p.default, {
                        type: p.ButtonType.Next,
                        onClick: $,
                        onKeyDown: $,
                        disabled: "next" !== O && "both" !== O,
                        theme: C.RoundTheme.Small,
                        overMedia: !0
                    }))
                }
                var J = 1 === a.length,
                    Z = a.map((function(t, e) {
                        return (0, y.jsx)(m.default, {
                            altText: "",
                            image: t,
                            singleSlide: J,
                            mediaData: t.mediaData,
                            onClick: j,
                            onLoad: H
                        }, e)
                    })),
                    Q = V ? null : (0, y.jsx)("div", {
                        className: (0, s.default)(h.default.contentContainer, h.default.spinnerContainer),
                        children: (0, y.jsx)("div", {
                            className: h.default.spinner,
                            ref: P,
                            children: (0, y.jsx)(S.default, {
                                color: "default",
                                size: 50,
                                stroke: 4
                            })
                        })
                    }),
                    tt = (0, s.default)(h.default.carousel, (e = {}, (0, i.default)(e, h.default.loaded, !c && V), (0, i.default)(e, h.default.fadeIn, B), e));
                return (0, y.jsxs)("div", {
                    className: tt,
                    dir: "ltr",
                    children: [Q, (0, y.jsx)("div", {
                        ref: E,
                        className: (0, s.default)(h.default.contentContainer, h.default.slidesContainer),
                        onScroll: z,
                        children: Z
                    }), W, G, (0, y.jsx)(g.default, {
                        onResize: function() {
                            null == w.current && (w.current = requestAnimationFrame(Y))
                        }
                    })]
                })
            };
            var i = o(a(59713)),
                l = o(a(63038)),
                s = o(a(94184)),
                u = a(84805),
                d = a(67294),
                c = o(a(30523)),
                f = o(a(73663)),
                p = r(a(23145)),
                h = o(a(55140)),
                m = o(a(82655)),
                _ = a(41655),
                v = o(a(27003)),
                g = o(a(55492)),
                C = a(80385),
                S = o(a(85651)),
                x = o(a(66265)),
                y = a(85893);
            c.default.polyfill()
        },
        82655: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = a(67294),
                o = n(a(57246)),
                i = a(41655),
                l = n(a(69283)),
                s = a(85893),
                u = function(t) {
                    var e = t.mediaData,
                        a = t.altText,
                        n = t.image,
                        u = t.singleSlide,
                        d = t.renderFallback,
                        c = t.onClick,
                        f = t.onLoad,
                        p = t.forwardRef,
                        h = (0, l.default)(e, ["fullHeight", "fullWidth", "mediaStage", "renderableUrl"]),
                        m = h.fullHeight,
                        _ = h.fullWidth,
                        v = h.mediaStage,
                        g = h.renderableUrl,
                        C = (0, r.useRef)(null),
                        S = (0, r.useRef)(v === i.MEDIA_DATA_STAGE.RESOLVED);
                    (0, r.useEffect)((function() {
                        !f || S.current || d || v !== i.MEDIA_DATA_STAGE.RESOLVED || (f(), S.current = !0)
                    }), [f, d, v]);
                    var x = _ && m ? _ / m : .8;
                    x < .8 && (x = .8), x > 1.91 && (x = 1.91), x > 1 && !u && (x = 1);
                    var y = {
                            width: u && x < 1 ? 100 * x + "%" : 1 !== x || u ? null : "100%"
                        },
                        j = {
                            paddingTop: `${Math.floor(100/x)}%`
                        },
                        E = {
                            cursor: "" + (c ? "pointer" : "auto")
                        };
                    return (0, s.jsx)("div", {
                        ref: p ? function(t) {
                            return p(t)
                        } : null,
                        className: o.default.slide,
                        style: y,
                        children: (0, s.jsx)("div", {
                            className: o.default.slideInnerContainer,
                            style: j,
                            children: (0, s.jsx)("img", {
                                ref: C,
                                alt: a,
                                src: g,
                                className: o.default.image,
                                style: E,
                                draggable: "false",
                                onClick: function() {
                                    c && C.current && n && c(C.current, n)
                                }
                            })
                        })
                    })
                };
            e.default = u
        },
        44659: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.EmptyCanvas = h, e.default = function(t) {
                var e, a = t.mediaCollection,
                    n = t.fullCollection,
                    u = t.chat,
                    c = t.onScroll,
                    _ = t.justify,
                    v = t.medias || t.productMedias,
                    g = "new-chat-info" === t.theme;
                if (!v) return null;
                var C = (0, i.default)(d.default.container, (e = {}, (0, o.default)(e, d.default.drawer, n), (0, o.default)(e, d.default.galleryEmpty, 0 === a.length), (0, o.default)(e, d.default.justifySpaceBetween, "space-between" === _), (0, o.default)(e, d.default.themeNewChatInfo, g), e)),
                    S = (0, r.default)(v);
                if (a.queryMediaBefore && (n || S.length < 6)) {
                    var x, y = (0, i.default)(d.default.more, d.default.canvasComponent, (x = {}, (0, o.default)(x, d.default.canvasSecondRow, !n && S.length >= 3), (0, o.default)(x, d.default.canvasFirst, 0 === a.length), x));
                    S.push((0, p.jsx)("div", {
                        className: y,
                        children: (0, p.jsx)(f.default, {
                            stroke: 6,
                            size: 24
                        })
                    }, "spinner"))
                }
                if (0 === a.length) {
                    if (n) return a.queryMediaBefore ? (0, p.jsx)("div", {
                        className: (0, i.default)(d.default.drawer, d.default.drawerBody),
                        children: (0, p.jsx)(s.Loading, {})
                    }) : (0, p.jsx)(s.MediaMsgs, {});
                    if (g) return null;
                    a.queryMediaBefore || a.hasMediaBefore || (C = (0, i.default)(C, d.default.galleryEmpty), S = [m(Math.max(u ? u.docCount : 0, 0), Math.max(u ? u.linkCount : 0, 0), Math.max(u ? u.productCount : 0, 0))])
                } else
                    for (var j = 0; j < 6; j++) S.push((0, p.jsx)(h, {}, "empty" + j));
                return (0, p.jsx)("div", {
                    onScroll: c,
                    "data-a8n": l.default.key("media-gallery"),
                    className: C,
                    children: S
                })
            };
            var r = n(a(319)),
                o = n(a(59713)),
                i = n(a(94184)),
                l = n(a(40501)),
                s = a(75993),
                u = n(a(45159)),
                d = n(a(69775)),
                c = n(a(43890)),
                f = n(a(85651)),
                p = a(85893);

            function h() {
                return (0, p.jsx)("div", {
                    className: d.default.canvasEmpty
                })
            }

            function m(t, e, a) {
                var n = [];
                return null != t && t > 0 && n.push(u.default.t(791, {
                    count: t,
                    _plural: t
                })), null != e && e > 0 && n.push(u.default.t(1125, {
                    count: e,
                    _plural: e
                })), c.default.productMediaAttachments && null != a && a > 0 && n.push(u.default.t(1521, {
                    count: a,
                    _plural: a
                })), n.length > 0 ? n.join(u.default.t(826)) : c.default.productMediaAttachments ? u.default.t(1393) : u.default.t(1392)
            }
        },
        84287: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e;
                return (0, s.jsx)("div", {
                    className: (0, o.default)(l.default.icon, (e = {}, (0, r.default)(e, l.default.transparent, t.theme && "transparent" === t.theme), (0, r.default)(e, l.default.compact, t.theme && "compact" === t.theme), (0, r.default)(e, l.default.disabled, t.disabled), e), (0, i.default)(t.xstyle)),
                    children: t.children
                })
            };
            var r = n(a(59713)),
                o = n(a(94184)),
                i = n(a(56720)),
                l = n(a(87041)),
                s = a(85893)
        },
        38979: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(a(34575)),
                i = r(a(93913)),
                l = r(a(81506)),
                s = r(a(2205)),
                u = r(a(99842)),
                d = r(a(96486)),
                c = a(67294),
                f = r(a(65901)),
                p = r(a(94253)),
                h = r(a(16175)),
                m = a(1577),
                _ = r(a(63641)),
                v = r(a(61897)),
                g = r(a(692)),
                C = n(a(74950)),
                S = a(85893),
                x = d.default.debounce((function(t, e) {
                    (0, m.setVideoVolumeSettings)(t, e)
                }), 500),
                y = function(t) {
                    (0, s.default)(a, t);
                    var e = (0, u.default)(a);

                    function a() {
                        var t;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r))).checkIteration = 0, t.checkForSuccessInterval = 0, t.hasCalledPlaying = !1, t.mediaBlobWasDownloadedBeforeMount = Boolean(t.props.mediaData.mediaBlob), t.refVideo = (0, c.createRef)(), t.onVolumeChange = function() {
                            var e = t.refVideo && t.refVideo.current;
                            e && x(e.volume, e.muted)
                        }, t.startCheckForSuccess = function() {
                            t.checkIteration = 0, t.checkForSuccessInterval || (t.checkForSuccessInterval = setInterval(t.checkForSuccess, 250))
                        }, t.clearCheckForSuccess = function() {
                            t.checkForSuccessInterval && (clearInterval(t.checkForSuccessInterval), t.checkIteration = 0, t.checkForSuccessInterval = 0)
                        }, t.checkForSuccess = function() {
                            if (C.default.state === C.STATE.CONNECTED) {
                                t.checkIteration++;
                                var e = t.refVideo && t.refVideo.current,
                                    a = e && e.buffered;
                                a && a.length && a.end(0) > 0 ? t.onPlaying() : t.checkIteration > 240 && t.clearCheckForSuccess()
                            }
                        }, t.onPlayerError = function() {
                            t.clearCheckForSuccess()
                        }, t.onOtherPlaying = function(e) {
                            e !== (0, l.default)(t) && t.pause()
                        }, t.pause = function() {
                            var e = t.refVideo && t.refVideo.current;
                            e && (e.paused || e.pause())
                        }, t.onPlaying = function() {
                            t.clearCheckForSuccess(), f.default.mediaPlaying((0, l.default)(t))
                        }, t.onLoadedMetadata = function(e) {
                            t.setStartTime();
                            var a = t.props.onLoadedMetadata;
                            a && a(e)
                        }, t.setStartTime = function() {
                            var e = t.refVideo && t.refVideo.current;
                            null != t.props.startTime && 0 !== t.props.startTime && e && (e.currentTime = t.props.startTime)
                        }, t.onContextMenu = function(e) {
                            t.props.disableContextMenu && e.preventDefault()
                        }, t
                    }
                    return (0, i.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.listeners.add(f.default, "mediaPlaying", this.onOtherPlaying), this.props.listeners.add(f.default, "pttRecording", this.pause), this._updateVideoUserPrefs(), this.props.refVideo && this.props.refVideo(this.refVideo)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            x.flush(), this.clearCheckForSuccess(), this.pause(), g.default.isBlink && this.refVideo.current && (0, h.default)(this.refVideo.current)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(t) {
                            this._updateVideoUserPrefs(), t.startTime !== this.props.startTime && this.setStartTime(), this.props.refVideo && this.props.refVideo(this.refVideo)
                        }
                    }, {
                        key: "_updateVideoUserPrefs",
                        value: function() {
                            var t = this.refVideo && this.refVideo.current;
                            if (t) {
                                var e = (0, m.getVideoVolumeSettings)();
                                e && ("number" == typeof e.volume && (t.volume = e.volume), "boolean" == typeof e.muted && (t.muted = e.muted)), E() && this.props.autoPlay && this.startCheckForSuccess()
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t, e = this.props,
                                a = e.mediaData,
                                n = a.mediaBlob,
                                r = a.streamable && a.isStreamable();
                            if (!this.mediaBlobWasDownloadedBeforeMount && r || !n) {
                                if (!a.streamable || !a.isStreamable()) return null;
                                t = `${p.default.VIDEO_STREAM_URL}?key=${this.props.msg.id.toString()}`
                            } else t = n.url();
                            var o = E() && !e.autoPlay ? this.startCheckForSuccess : void 0;
                            return (0, S.jsx)("video", {
                                ref: this.refVideo,
                                src: t,
                                poster: e.poster,
                                className: e.className,
                                controls: e.controls,
                                autoPlay: e.autoPlay,
                                onClick: e.onClick,
                                onDoubleClick: e.onDoubleClick,
                                onVolumeChange: this.onVolumeChange,
                                onLoadedMetadata: this.onLoadedMetadata,
                                onPlay: o,
                                onPlaying: this.onPlaying,
                                onError: this.clearCheckForSuccess,
                                onContextMenu: this.onContextMenu,
                                children: e.children
                            })
                        }
                    }]), a
                }(c.PureComponent);
            y.CONCERNS = {
                msg: ["id"],
                mediaData: ["mediaBlob", "streamable"]
            }, y.displayName = "VideoTag";
            var j = (0, _.default)((0, v.default)(y, y.CONCERNS));

            function E() {
                return g.default.isGecko || g.default.isSafari
            }
            e.default = j
        },
        8089: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = n(a(34575)),
                o = n(a(93913)),
                i = n(a(2205)),
                l = n(a(99842)),
                s = n(a(50177)),
                u = n(a(90796)),
                d = a(85893),
                c = function(t) {
                    (0, i.default)(a, t);
                    var e = (0, l.default)(a);

                    function a() {
                        var t;
                        (0, r.default)(this, a);
                        for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(o))).closeStatusViewer = function() {
                            t.end()
                        }, t
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, d.jsx)(u.default, {
                                initialStatusV3: this.props.statusV3,
                                quotedMsgKey: this.props.msgKey,
                                closeStatusViewer: this.closeStatusViewer,
                                onMsgNotFound: this.props.onMsgNotFound
                            }), "none")
                        }
                    }]), a
                }(s.default);
            e.default = c
        },
        46070: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = t.catalog,
                    a = t.onSend,
                    n = (0, l.createCatalogLink)(e.id.user),
                    u = e.id.equals((0, r.getMaybeMeUser)()) ? `${o.default.t(1475)} ${n}` : n;
                return (0, s.jsx)(i.default, {
                    text: u,
                    pushTransition: "none",
                    popTransition: "none",
                    onSend: a
                })
            };
            var r = a(1577),
                o = n(a(45159)),
                i = n(a(8694)),
                l = a(91240),
                s = a(85893)
        },
        22674: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = t.product,
                    a = t.onSend,
                    n = (0, l.createProductLink)(e.catalogWid.user, e.id.toString()),
                    u = e.catalogWid.equals((0, r.getMaybeMeUser)()) ? `${o.default.t(1518)} ${n}` : n;
                return (0, s.jsx)(i.default, {
                    text: u,
                    pushTransition: "none",
                    popTransition: "none",
                    onSend: a
                })
            };
            var r = a(1577),
                o = n(a(45159)),
                i = n(a(8694)),
                l = a(91240),
                s = a(85893)
        },
        8694: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(a(87757)),
                i = r(a(48926)),
                l = r(a(34575)),
                s = r(a(93913)),
                u = r(a(2205)),
                d = r(a(99842)),
                c = a(84533),
                f = a(63796),
                p = r(a(65901)),
                h = r(a(94253)),
                m = r(a(50177)),
                _ = r(a(45159)),
                v = n(a(64803)),
                g = a(43966),
                C = r(a(43890)),
                S = r(a(9150)),
                x = a(85893),
                y = function(t) {
                    (0, u.default)(a, t);
                    var e = (0, d.default)(a);

                    function a() {
                        var t;
                        (0, l.default)(this, a);
                        for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
                        return (t = e.call.apply(e, [this].concat(r)))._selected = [], t._getSelected = function() {
                            return t._selected
                        }, t._handleSelectionChange = function(e, a, n) {
                            t._selected = n
                        }, t._handleForwardConfirmed = function(e) {
                            t._send(e)
                        }, t._handleCancel = function() {
                            t.end()
                        }, t._send = function() {
                            var e = (0, i.default)(o.default.mark((function e(a) {
                                var n, r, i, l, s;
                                return o.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n = t.props, r = n.text, i = n.title, l = n.onSend, 1 !== a.length) {
                                                e.next = 9;
                                                break
                                            }
                                            return s = a[0], e.next = 5, t._pasteText(s, r);
                                        case 5:
                                            t.end(), window.innerWidth <= h.default.LAYOUT_2COLUMNS_MAX_WIDTH && p.default.closeDrawerRight(), e.next = 10;
                                            break;
                                        case 9:
                                            t.push((0, x.jsx)(S.default, {
                                                defaultText: r,
                                                title: i || _.default.t(1291),
                                                onSend: function(e, n) {
                                                    return t._handleSend(a, e, n)
                                                },
                                                onBack: t._handleBack
                                            }));
                                        case 10:
                                            l && l();
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(), t._handleSend = function(e, a, n) {
                            t._sendText(e, a, n), t.end()
                        }, t._handleBack = function() {
                            t.pop()
                        }, t._pasteText = function() {
                            var e = (0, i.default)(o.default.mark((function e(a, n) {
                                return o.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t._ensureContactUnblocked(a);
                                        case 2:
                                            a.active ? p.default.pasteChatTextInput(a, n) : (a.setComposeContents({
                                                text: n
                                            }), p.default.openChatFromUnread(a).then((function(t) {
                                                t && p.default.focusChatTextInput(a)
                                            })));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(), t._sendText = function(e, a, n) {
                            e.forEach(function() {
                                var e = (0, i.default)(o.default.mark((function e(r) {
                                    return o.default.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, t._ensureContactUnblocked(r);
                                            case 2:
                                                p.default.once("ui_idle", (function() {
                                                    (0, g.sendTextMsgToChat)(r, a, {
                                                        linkPreview: n
                                                    })
                                                }));
                                            case 3:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }())
                        }, t._ensureContactUnblocked = function() {
                            var t = (0, i.default)(o.default.mark((function t(e) {
                                return o.default.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!e.isUser || !e.contact.isBlocked()) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.next = 3, (0, c.unblockContact)(e.contact);
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(), t
                    }
                    return (0, s.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, x.jsx)(v.default, {
                                title: this.props.title || _.default.t(1291),
                                listType: v.ListType.CHAT_SELECT_MODAL,
                                getInitialItems: this._getSelected,
                                maxItems: C.default.multicastLimitGlobal,
                                onConfirm: this._handleForwardConfirmed,
                                onCancel: this._handleCancel,
                                onSelectionChanged: this._handleSelectionChange,
                                singleSelectionFooterType: f.FooterType.NEXT,
                                multipleSelectionFooterType: f.FooterType.NEXT
                            }))
                        }
                    }]), a
                }(m.default);
            e.default = y
        },
        29015: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = t.labels,
                    a = t.theme;
                return e && (0, i.canDisplayLabel)() ? (0, u.jsx)("div", {
                    className: (0, o.default)(l.default.labelContainer, (0, r.default)({}, l.default.standaloneLabelContainer, "standalone" === a)),
                    children: function() {
                        if (e) return e.map((function(t, e) {
                            return (0, u.jsx)("div", {
                                className: (0, o.default)(l.default.labelRow, (0, r.default)({}, l.default.standaloneLabelRow, "standalone" === a)),
                                children: (0, u.jsx)(s.default, {
                                    labels: [t],
                                    showName: !0
                                })
                            }, e)
                        }))
                    }()
                }) : null
            };
            var r = n(a(59713)),
                o = n(a(94184)),
                i = a(2629),
                l = n(a(87571)),
                s = n(a(90600)),
                u = a(85893)
        },
        7551: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = t.collection,
                    a = (0, l.useState)(!1),
                    n = (0, o.default)(a, 2),
                    r = n[0],
                    C = n[1],
                    S = (0, l.useState)(!1),
                    x = (0, o.default)(S, 2),
                    y = x[0],
                    j = x[1],
                    E = (0, l.useState)(""),
                    P = (0, o.default)(E, 2),
                    T = P[0],
                    w = P[1],
                    I = function() {
                        u.default.closeModal()
                    };
                return y ? (0, g.jsx)(d.default, {
                    title: p.default.t(1567),
                    onOK: I,
                    children: (0, g.jsx)(h.TextDiv, {
                        children: p.default.t(509)
                    })
                }) : (0, g.jsx)(d.default, {
                    title: p.default.t(1567),
                    onOK: function() {
                        C(!0), (0, s.handleCollectionAppeal)(e, T).then((function() {
                            C(!1), j(!0)
                        })).catch((0, i.filteredCatch)(v.ServerStatusCodeError, (function() {
                            u.default.openToast((0, g.jsx)(_.default, {
                                msg: p.default.t(510),
                                id: (0, _.genId)("catalog_collection_appeal_submission_failed")
                            })), C(!1)
                        })))
                    },
                    onCancel: I,
                    okDisabled: r,
                    children: (0, g.jsxs)("form", {
                        children: [(0, g.jsx)(m.default, {
                            a8n: "confirm-popup-text-input",
                            placeholder: p.default.t(1108),
                            onChange: function(t) {
                                w(t)
                            },
                            value: T,
                            maxLength: 1e3
                        }), (0, g.jsx)(f.default, {
                            href: c.default.WA_COMMERCE_POLICY_URL,
                            children: p.default.t(1120)
                        })]
                    })
                })
            };
            var o = r(a(63038)),
                i = a(18077),
                l = a(67294),
                s = a(9812),
                u = r(a(65901)),
                d = r(a(86777)),
                c = r(a(94253)),
                f = r(a(49012)),
                p = r(a(45159)),
                h = a(22552),
                m = r(a(68544)),
                _ = n(a(92428)),
                v = a(59175),
                g = a(85893)
        },
        69237: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = a(67294),
                i = r(a(40501)),
                l = r(a(59271)),
                s = r(a(91404)),
                u = r(a(53187)),
                d = r(a(18345)),
                c = n(a(19288)),
                f = r(a(45159)),
                p = a(24779),
                h = a(22552),
                m = r(a(69283)),
                _ = a(85893),
                v = (0, o.forwardRef)((function(t, e) {
                    var a = t.settings,
                        n = t.onClose,
                        r = (0, m.default)(a, ["archive"]).archive,
                        o = !r.classic;
                    return (0, _.jsxs)(u.default, {
                        ref: e,
                        children: [(0, _.jsx)(c.default, {
                            title: f.default.t(261),
                            type: c.DRAWER_HEADER_TYPE.LARGE,
                            onBack: n
                        }), (0, _.jsx)(d.default, {
                            children: (0, _.jsxs)("div", {
                                className: l.default.section,
                                children: [(0, _.jsx)("div", {
                                    "data-a8n": i.default.key("auto-unarchive-setting"),
                                    className: l.default.control,
                                    children: (0, _.jsx)(s.default, {
                                        onChange: function() {
                                            var t = !r.classic;
                                            (0, p.setArchiveClassicSetting)(t)
                                        },
                                        checked: o
                                    })
                                }), (0, _.jsxs)("div", {
                                    "data-a8n": i.default.key("auto-unarchive-setting-text"),
                                    children: [f.default.t(282), (0, _.jsx)(h.TextDiv, {
                                        theme: "muted",
                                        children: f.default.t(281)
                                    })]
                                })]
                            })
                        })]
                    })
                }));
            e.default = v
        },
        22261: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = t.elementId,
                    a = t.onClick;
                return document.queryCommandSupported("copy") ? (0, f.jsx)(s.default, {
                    a8nText: "li-copy-link",
                    icon: (0, f.jsx)(d.default, {
                        name: "copy",
                        className: i.default.icon
                    }),
                    onClick: function() {
                        return function(t, e) {
                            (0, l.default)(t) ? o.default.openToast((0, f.jsx)(c.default, {
                                msg: u.default.t(1123),
                                id: (0, c.genId)()
                            })): o.default.openToast((0, f.jsx)(c.default, {
                                msg: u.default.t(1122),
                                id: (0, c.genId)()
                            }));
                            null != e && e()
                        }(e, a)
                    },
                    children: u.default.t(749)
                }) : null
            };
            var o = r(a(65901)),
                i = r(a(555)),
                l = r(a(12347)),
                s = r(a(61876)),
                u = r(a(45159)),
                d = r(a(7665)),
                c = n(a(92428)),
                f = a(85893)
        },
        61876: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e, a, n = t.children,
                    p = t.onClick,
                    h = t.icon,
                    m = t.className,
                    _ = t.color,
                    v = t.theme,
                    g = (0, c.default)(p),
                    C = (0, i.default)(g, 2),
                    S = C[0],
                    x = C[1],
                    y = null != h ? (0, f.jsx)("div", {
                        className: (0, l.default)(u.default.icon, (e = {}, (0, o.default)(e, u.default.danger, "danger" === _), (0, o.default)(e, u.default.success, "success" === _), e)),
                        children: h
                    }) : null,
                    j = (0, l.default)(u.default.container, m, (a = {}, (0, o.default)(a, u.default.containerNoIcon, !h), (0, o.default)(a, u.default.containerListAligned, "list-aligned" === v), (0, o.default)(a, u.default.themeNewChatInfo, "new-chat-info" === v), a)),
                    E = "string" == typeof n ? n : null;
                return (0, f.jsxs)("div", (0, r.default)((0, r.default)({}, x), {}, {
                    className: j,
                    "data-a8n": s.default.key(t.a8nText),
                    "data-ignore-capture": "any",
                    ref: S,
                    title: E,
                    children: [y, (0, f.jsx)("div", {
                        className: (0, l.default)(u.default.bodyContainer),
                        children: (0, f.jsx)("div", {
                            className: u.default.body,
                            children: (0, f.jsx)(d.TextSpan, {
                                theme: "title",
                                color: _,
                                children: n
                            })
                        })
                    })]
                }))
            };
            var r = n(a(81109)),
                o = n(a(59713)),
                i = n(a(63038)),
                l = n(a(94184)),
                s = n(a(40501)),
                u = n(a(73858)),
                d = a(22552),
                c = n(a(81746)),
                f = a(85893)
        },
        72843: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
                var t = new c.default(m, v, {
                    COOL_OFF_START_STORAGE_KEY: d.CoolOffPeriodKeys.CATALOG,
                    MAX_VIEWS_IN_DAYS: 1,
                    COOL_OFF_DURATION_IN_DAYS: 1
                });
                if (t.shouldShow()) {
                    var e = (0, h.jsx)(i.default, {
                        onOK: function() {
                            t.dismiss(), o.default.closeModal()
                        },
                        children: (0, h.jsxs)(l.FlexColumn, {
                            align: "center",
                            children: [(0, h.jsx)(l.FlexItem, {
                                xstyle: _.graphic,
                                children: (0, h.jsx)(f.default, {
                                    name: "cart-interstitial-graphic"
                                })
                            }), (0, h.jsx)(p.TextHeader, {
                                theme: "popup-title",
                                children: s.default.t(1414)
                            }), (0, h.jsx)(p.TextParagraph, {
                                color: "secondary",
                                className: r.default.description,
                                children: s.default.t(1413)
                            })]
                        })
                    });
                    o.default.openModal(e), t.show(), t.startCoolOffToday()
                }
            };
            n(a(56720));
            var r = n(a(80257)),
                o = n(a(65901)),
                i = n(a(86777)),
                l = a(27968),
                s = n(a(45159)),
                u = n(a(50507)),
                d = a(15849),
                c = n(a(8204)),
                f = n(a(7665)),
                p = a(22552),
                h = a(85893),
                m = d.NuxKeyTypes.COOL_OFF_NUX.CART_INTERSTITIAL,
                _ = {
                    graphic: {
                        marginTop: "nylzjxre",
                        marginEnd: "lfum0007",
                        marginBottom: "bvhm1occ",
                        marginStart: "r6x3u63k",
                        color: "bc38n4nm"
                    }
                },
                v = u.default.BANNER_TYPES.SMB_CATALOG_CART_INTERSTITIAL
        },
        70130: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = t.onOpenCollections,
                    a = (0, o.useState)(!1),
                    n = (0, r.default)(a, 2),
                    f = n[0],
                    p = n[1],
                    h = i.default.get((0, s.getMeUser)());
                return (0, d.useListener)(null == h ? void 0 : h.collections, "change", (function() {
                    p(!0)
                })), f && (0, c.jsx)(u.default, {
                    children: (0, c.jsx)(l.default, {
                        onClick: e
                    })
                })
            };
            var r = n(a(63038)),
                o = a(67294),
                i = n(a(18330)),
                l = n(a(46945)),
                s = a(1577),
                u = n(a(15076)),
                d = a(8413),
                c = a(85893)
        },
        46945: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(a(34575)),
                i = r(a(93913)),
                l = r(a(2205)),
                s = r(a(99842)),
                u = a(59566),
                d = r(a(18330)),
                c = r(a(70583)),
                f = r(a(73929)),
                p = r(a(93592)),
                h = a(1577),
                m = r(a(45159)),
                _ = r(a(50507)),
                v = a(15849),
                g = r(a(75198)),
                C = n(a(8204)),
                S = a(85893),
                x = v.NuxKeyTypes.COOL_OFF_NUX.COLLECTIONS,
                y = {
                    COOL_OFF_DURATION_IN_DAYS: 2,
                    VIEWS_BEFORE_COOL_OFF_IN_DAYS: 1,
                    CLICKS_BEFORE_COOL_OFF: 1,
                    MAX_VIEWS_IN_DAYS: 2,
                    COOL_OFF_START_STORAGE_KEY: v.CoolOffPeriodKeys.CATALOG
                };
            var j = function(t) {
                (0, l.default)(a, t);
                var e = (0, s.default)(a);

                function a() {
                    return (0, o.default)(this, a), e.apply(this, arguments)
                }
                return (0, i.default)(a, [{
                    key: "render",
                    value: function() {
                        var t = this.props.onClick,
                            e = new C.default(x, _.default.BANNER_TYPES.SMB_COLLECTION_CREATION, y),
                            a = (0, S.jsx)("span", {
                                className: c.default.actionText,
                                children: m.default.t(1408)
                            });
                        return (0, S.jsx)(p.default, {
                            title: m.default.t(1410),
                            subtitle: m.default.t(1409),
                            actionText: a,
                            onClick: t,
                            nuxManager: e,
                            theme: "nuxBlue"
                        })
                    }
                }], [{
                    key: "shouldShow",
                    value: function() {
                        return (0, u.getABPropConfigValue)("web_abprop_collections_nux_banner") && f.default.isSMB && function() {
                            var t = d.default.get((0, h.getMeUser)());
                            if (null == t || null == t.collections) return !1;
                            var e = t.collections.getCollectionModels(!0);
                            return t.productCollection.getProductModels(!0).some((function(t) {
                                return !t.isHidden && "REJECTED" !== t.reviewStatus
                            })) && 0 === e.length
                        }() && (0, C.shouldShowNUX)(x, y)
                    }
                }]), a
            }(g.default);
            e.default = j, j.displayName = "CollectionsBanner"
        },
        40071: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = n(a(34575)),
                o = n(a(93913)),
                i = n(a(2205)),
                l = n(a(99842)),
                s = n(a(94184)),
                u = n(a(48842)),
                d = a(67294),
                c = n(a(88186)),
                f = n(a(65901)),
                p = n(a(66834)),
                h = n(a(73008)),
                m = n(a(22935)),
                _ = n(a(45159)),
                v = a(91823),
                g = n(a(58497)),
                C = n(a(67978)),
                S = n(a(61897)),
                x = n(a(7665)),
                y = n(a(16835)),
                j = n(a(66265)),
                E = a(85893),
                P = function(t) {
                    (0, i.default)(a, t);
                    var e = (0, l.default)(a);

                    function a() {
                        var t;
                        (0, r.default)(this, a);
                        for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(o))).state = {
                            style: {
                                visibility: "hidden"
                            }
                        }, t.handleScroll = function(e) {
                            Math.abs(e.deltaY) > 3 && t.handleClose()
                        }, t.handleClose = function() {
                            if (!t.closing) {
                                var e;
                                if (t.closing = !0, t.props.getZoomNode((function(t) {
                                        e = t
                                    })), !e) return f.default.closeModalMedia();
                                var a = t._refImage;
                                if (a) {
                                    t.props.animateBorderRadius && (a.style.transition = "border-radius 500ms cubic-bezier(.1,.82,.25,1)", a.style.borderRadius = "50%");
                                    var n = (0, u.default)(e, "start"),
                                        r = a.getBoundingClientRect(),
                                        o = n.getBoundingClientRect(),
                                        i = o.top - r.top,
                                        l = o.left - r.left,
                                        s = n.clientWidth / a.clientWidth;
                                    (0, j.default)(a, {
                                        translateX: [l, 0],
                                        translateY: [i, 0],
                                        scale: [s, 1]
                                    }, {
                                        duration: 200,
                                        easing: [.1, .82, .25, 1]
                                    }).then((function() {
                                        f.default.closeModalMedia()
                                    }))
                                }
                            }
                        }, t.handleImageLoad = function(e) {
                            var a = e.target;
                            t.setState({
                                size: {
                                    width: a.naturalWidth,
                                    height: a.naturalHeight
                                }
                            }, (function() {
                                t.props.getZoomNode((function(e) {
                                    var n = a.getBoundingClientRect(),
                                        r = e.getBoundingClientRect(),
                                        o = r.top - n.top,
                                        i = {
                                            visibility: "hidden",
                                            transform: `translateX(${r.left-n.left}px) translateY(${o}px) scale(${e.clientWidth/a.clientWidth})`,
                                            transition: "transform 0s",
                                            borderRadius: void 0
                                        };
                                    t.props.animateBorderRadius && (i.borderRadius = "50%"), t.setState({
                                        style: i
                                    }, (function() {
                                        var e = {
                                            transform: "translateX(0px) translateY(0px) scale(1)",
                                            transition: "transform 500ms cubic-bezier(.1,.82,.25,1)"
                                        };
                                        t.props.animateBorderRadius && (e = {
                                            transform: "translateX(0px) translateY(0px) scale(1)",
                                            borderRadius: "0%",
                                            transition: "transform 500ms cubic-bezier(.1,.82,.25,1),\n                                         border-radius 500ms cubic-bezier(.1,.82,.25,1)"
                                        }), t.setState({
                                            style: e
                                        })
                                    }))
                                }))
                            }))
                        }, t.setRefImage = function(e) {
                            t._refImage = e
                        }, t
                    }
                    return (0, o.default)(a, [{
                        key: "shouldComponentUpdate",
                        value: function(t) {
                            return !!t.profilePicThumb.imgFull || (this.handleClose(), !1)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t, e = this.props,
                                a = e.contact,
                                n = e.profilePicThumb;
                            return n.imgFull && (t = (0, E.jsx)(m.default, {
                                src: n.imgFull,
                                hasPrivacyChecks: !0,
                                onLoad: this.handleImageLoad,
                                className: C.default.profileViewerImg
                            })), (0, E.jsx)(y.default, {
                                displayName: "PhotoViewer",
                                escapable: !0,
                                requestDismiss: this.handleClose,
                                children: (0, E.jsxs)("div", {
                                    className: (0, s.default)("overlay", C.default.container),
                                    onWheel: this.handleScroll,
                                    onClick: this.handleClose,
                                    children: [(0, E.jsxs)("div", {
                                        className: C.default.headerContainer,
                                        children: [(0, E.jsx)("div", {
                                            className: C.default.profileThumb,
                                            children: (0, E.jsx)(c.default, {
                                                image: (0, E.jsx)(p.default, {
                                                    id: a.id,
                                                    size: 40
                                                }),
                                                theme: "plain",
                                                primary: (0, E.jsx)(h.default, {
                                                    text: a.formattedUser
                                                })
                                            })
                                        }), (0, E.jsx)("div", {
                                            className: C.default.mediaPanelTools,
                                            children: (0, E.jsx)(v.MenuBar, {
                                                theme: "strong",
                                                children: (0, E.jsx)(v.MenuBarItem, {
                                                    a8nText: "btn-close",
                                                    icon: (0, E.jsx)(x.default, {
                                                        name: "x-viewer"
                                                    }),
                                                    title: _.default.t(1949),
                                                    onClick: this.handleClose
                                                })
                                            }, "media-panel-header")
                                        })]
                                    }), (0, E.jsx)("div", {
                                        className: C.default.profileContainer,
                                        dir: "ltr",
                                        children: (0, E.jsx)("div", {
                                            className: C.default.media,
                                            children: (0, E.jsx)(g.default, {
                                                type: "scaleDown",
                                                size: this.state.size,
                                                children: (0, E.jsx)("div", {
                                                    className: C.default.profileViewer,
                                                    "data-animate-profile-viewer": !0,
                                                    ref: this.setRefImage,
                                                    style: this.state.style,
                                                    children: t
                                                })
                                            })
                                        })
                                    })]
                                })
                            })
                        }
                    }]), a
                }(d.Component);
            P.CONCERNS = {
                contact: ["formattedUser", "id"],
                profilePicThumb: ["imgFull"]
            }, P.displayName = "PhotoViewerModal";
            var T = (0, S.default)(P, P.CONCERNS);
            e.default = T
        },
        70486: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = t.profilePicThumb,
                    a = t.size,
                    n = !e.canSet() && !e.canDelete(),
                    r = (0, s.useState)(!1),
                    _ = (0, o.default)(r, 2),
                    v = _[0],
                    g = _[1],
                    C = (0, h.default)();
                return (0, m.jsx)(d.PhotoPickerLoadable, {
                    type: c.default.PROFILE,
                    id: e.id,
                    attachToChat: !1,
                    pending: v,
                    startImage: e.imgFull,
                    readOnly: n,
                    onImageSet: function(e, a) {
                        var n, r = t.profilePicThumb;
                        g(!0), n = e && a ? (0, f.setProfilePic)(r, e, a) : (0, f.deleteProfilePic)(r), (0, p.default)(n, C).catch((0, l.filteredCatch)(u.ActionError, (function() {
                            __LOG__(3)`ProfileDrawer: failed to set/delete profile image`
                        }))).catch((0, i.catchAbort)((function() {}))).finally((function() {
                            g(!1)
                        }))
                    },
                    size: a
                })
            };
            var o = r(a(63038)),
                i = a(84805),
                l = a(18077),
                s = a(67294),
                u = n(a(18286)),
                d = a(76110),
                c = r(a(49309)),
                f = a(43201),
                p = r(a(27003)),
                h = r(a(1379)),
                m = a(85893)
        },
        59782: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                return (0, s.jsx)(r.default, {
                    a8nText: "li-share-link",
                    icon: (0, s.jsx)(l.default, {
                        name: "forward",
                        className: i.default.icon
                    }),
                    onClick: t.onClick,
                    children: o.default.t(1621)
                })
            };
            var r = n(a(61876)),
                o = n(a(45159)),
                i = n(a(60654)),
                l = n(a(7665)),
                s = a(85893)
        },
        20767: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                return (0, s.jsx)(r.default, {
                    a8nText: "li-share-link",
                    icon: (0, s.jsx)(l.default, {
                        name: "forward",
                        className: i.default.icon
                    }),
                    onClick: t.onClick,
                    children: o.default.t(1644)
                })
            };
            var r = n(a(61876)),
                o = n(a(45159)),
                i = n(a(67873)),
                l = n(a(7665)),
                s = a(85893)
        },
        51227: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(a(34575)),
                i = r(a(93913)),
                l = r(a(2205)),
                s = r(a(99842)),
                u = a(18077),
                d = a(67294),
                c = r(a(65901)),
                f = r(a(18759)),
                p = a(98169),
                h = r(a(79522)),
                m = r(a(10508)),
                _ = a(11125),
                v = r(a(96150)),
                g = a(68985),
                C = r(a(45159)),
                S = r(a(50507)),
                x = r(a(5202)),
                y = r(a(83357)),
                j = a(43966),
                E = r(a(19614)),
                P = r(a(7665)),
                T = n(a(92428)),
                w = r(a(16835)),
                I = r(a(93820)),
                k = r(a(60806)),
                b = a(85893),
                O = function(t) {
                    (0, l.default)(a, t);
                    var e = (0, s.default)(a);

                    function a() {
                        var t;
                        return (0, o.default)(this, a), (t = e.apply(this, arguments)).emojiInputComponent = (0, h.default)(), t._refEmojiPanel = (0, d.createRef)(), t.isSkinTonePickerOpen = !1, t.handleSend = function(e) {
                            var a;
                            if (e.preventDefault(), t._refInputLine) {
                                var n = t._refInputLine.value.trim();
                                if (n.length) {
                                    var r = (0, T.genId)();
                                    (0, g.findChat)(t.props.msg.sender).then((function(e) {
                                        return c.default.openToast((0, b.jsx)(T.default, {
                                            msg: C.default.t(1673),
                                            id: r
                                        })), (0, j.sendTextMsgToChat)(e, (0, v.default)(n), {
                                            quotedMsg: t.props.msg
                                        })
                                    })).then((function() {
                                        t.props.statusReplyMetric.statusReplyResult = S.default.STATUS_REPLY_RESULT.OK, t.props.onSend()
                                    })).catch((0, u.filteredCatch)(f.default, (function() {
                                        var e = t.state.chat;
                                        e && (c.default.openToast((0, b.jsx)(T.default, {
                                            msg: C.default.t(1940, {
                                                contact: e.contact.formattedName
                                            }),
                                            id: r
                                        })), t.props.statusReplyMetric.statusReplyResult = S.default.STATUS_REPLY_RESULT.ERROR_UNKNOWN)
                                    }))), null === (a = t._refInputLine) || void 0 === a || a.reset(), t._emojiPickerClose(), t.props.dismissReply()
                                }
                            }
                        }, t.handleFocus = function() {
                            t.setState({
                                focused: !0
                            })
                        }, t.handleBlur = function() {
                            t.isSkinTonePickerOpen || document.activeElement === document.body && t.setState({
                                focused: !1
                            })
                        }, t.handleSkinTonePicker = function(e) {
                            t.isSkinTonePickerOpen = e
                        }, t.isFocused = function() {
                            return t.state.focused
                        }, t.handleEmojiPicker = function(e) {
                            e && (e.preventDefault(), e.stopPropagation());
                            var a = (0, b.jsx)(m.default, {
                                ref: t._refEmojiPanel,
                                onEmoji: t.handleEmoji,
                                onFocusNext: t.restoreFocus,
                                onFocusPrev: t.restoreFocus
                            });
                            t.setState({
                                emojiPicker: {
                                    menu: a,
                                    dirY: p.DirY.TOP,
                                    type: "emoji_picker",
                                    anchor: e.target
                                }
                            })
                        }, t.handleEmoji = function(e) {
                            t._refInputLine && t._refInputLine.replaceSelection(e)
                        }, t.restoreFocus = function() {
                            t._refInputLine && t._refInputLine.focus()
                        }, t._restoreEmojiPickerFocus = function() {
                            var e;
                            null === (e = t._refEmojiPanel.current) || void 0 === e || e.restoreFocus()
                        }, t._emojiPickerClose = function() {
                            t.setState({
                                emojiPicker: void 0
                            }), t.restoreFocus()
                        }, t.state = {
                            replyCaption: "",
                            focused: !1,
                            emojiPicker: void 0,
                            chat: void 0
                        }, (0, g.findChat)(t.props.msg.sender).checkpoint(t.props.rejectOnUnmount()).then((function(e) {
                            t.setState({
                                chat: e
                            })
                        })), t
                    }
                    return (0, i.default)(a, [{
                        key: "componentDidUpdate",
                        value: function(t, e) {
                            this._shouldPausePlayback(e) && !this._shouldPausePlayback(this.state) ? this.props.play() : !this._shouldPausePlayback(e) && this._shouldPausePlayback(this.state) && this.props.pause()
                        }
                    }, {
                        key: "_shouldPausePlayback",
                        value: function(t) {
                            return Boolean(t.emojiPicker) || t.focused
                        }
                    }, {
                        key: "isPaused",
                        value: function() {
                            return this._shouldPausePlayback(this.state)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t, e, a, n = this;
                            this.state.emojiPicker && (t = (0, b.jsx)(w.default, {
                                displayName: "EmojiPicker",
                                escapable: !0,
                                popable: !0,
                                requestDismiss: this._emojiPickerClose,
                                requestFocus: this._restoreEmojiPickerFocus,
                                children: (0, b.jsx)(I.default, {
                                    contextMenu: this.state.emojiPicker
                                })
                            }), e = (0, b.jsx)(w.default, {
                                displayName: "EmojiPicker",
                                escapable: !0,
                                requestFocus: this._restoreEmojiPickerFocus,
                                children: (0, b.jsx)("div", {
                                    children: t
                                })
                            }));
                            var r = this.state.chat;
                            r && this.state.focused && !this.state.emojiPicker && (a = (0, b.jsx)(w.default, {
                                displayName: "StatusV3Reply",
                                escapable: !0,
                                requestDismiss: this.props.dismissReply,
                                children: (0, b.jsx)("div", {
                                    className: E.default.popupPanel,
                                    children: (0, b.jsx)(y.default, {
                                        msg: this.props.msg.safe(),
                                        theme: "statusV3",
                                        chat: r
                                    }, this.props.msg.id.toString())
                                })
                            }));
                            var o = this.emojiInputComponent;
                            return (0, b.jsxs)("div", {
                                className: E.default.container,
                                children: [(0, b.jsx)(k.default, {
                                    transitionName: "status-v3-quoted-msg",
                                    transitionAppear: !0,
                                    children: a
                                }), (0, b.jsxs)("div", {
                                    className: E.default.wrapper,
                                    children: [(0, b.jsx)("button", {
                                        className: E.default.emojiIcon,
                                        onClick: this.handleEmojiPicker,
                                        children: (0, b.jsx)(P.default, {
                                            name: "smiley"
                                        })
                                    }), (0, b.jsxs)("div", {
                                        className: E.default.lineWrapper,
                                        children: [(0, b.jsx)(o.EmojiSuggestions, {
                                            theme: _.ThemeOptions.EMOJI_INPUT,
                                            onSkinTonePicker: this.handleSkinTonePicker
                                        }), (0, b.jsx)(o, {
                                            ref: function(t) {
                                                n._refInputLine = t
                                            },
                                            theme: "status-reply",
                                            spellCheck: !0,
                                            onFocus: this.handleFocus,
                                            onBlur: this.handleBlur,
                                            onEnter: this.handleSend,
                                            placeholder: C.default.t(1731),
                                            editable: !0,
                                            multiline: !0
                                        })]
                                    }), (0, b.jsx)("button", {
                                        className: E.default.sendIcon,
                                        onClick: this.handleSend,
                                        children: (0, b.jsx)(P.default, {
                                            name: "send",
                                            directional: !0
                                        })
                                    }), e]
                                })]
                            })
                        }
                    }]), a
                }(d.Component);
            O.displayName = "StatusV3ComposeBox";
            var N = function(t) {
                (0, l.default)(a, t);
                var e = (0, s.default)(a);

                function a() {
                    return (0, o.default)(this, a), e.apply(this, arguments)
                }
                return (0, i.default)(a, [{
                    key: "isFocused",
                    value: function() {
                        return !0 === this.getComponent().isFocused()
                    }
                }, {
                    key: "isPaused",
                    value: function() {
                        return this.getComponent().isPaused()
                    }
                }, {
                    key: "restoreFocus",
                    value: function() {
                        this.getComponent().restoreFocus()
                    }
                }]), a
            }((0, x.default)(O));
            e.default = N
        },
        18740: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.StatusV3Text = nt, e.default = void 0;
            var o = r(a(59713)),
                i = r(a(34575)),
                l = r(a(93913)),
                s = r(a(2205)),
                u = r(a(99842)),
                d = r(a(94184)),
                c = a(18077),
                f = r(a(96486)),
                p = a(67294),
                h = r(a(3228)),
                m = r(a(10399)),
                _ = r(a(65901)),
                v = r(a(94253)),
                g = r(a(66834)),
                C = r(a(73008)),
                S = n(a(18286)),
                x = a(68985),
                y = r(a(29832)),
                j = r(a(99617)),
                E = r(a(38032)),
                P = r(a(58342)),
                T = r(a(22935)),
                w = a(72896),
                I = r(a(45159)),
                k = r(a(63641)),
                b = r(a(72397)),
                O = a(41655),
                N = r(a(47251)),
                M = r(a(50507)),
                D = r(a(29289)),
                A = r(a(58497)),
                R = r(a(5202)),
                L = r(a(85651)),
                F = r(a(61897)),
                B = r(a(51227)),
                U = a(84176),
                V = r(a(4764)),
                H = r(a(3495)),
                W = r(a(45829)),
                G = r(a(41963)),
                z = r(a(7665)),
                K = r(a(16835)),
                Y = a(52546),
                q = r(a(69283)),
                $ = r(a(38979)),
                X = a(59175),
                J = a(85893),
                Z = function(t) {
                    (0, s.default)(a, t);
                    var e = (0, u.default)(a);

                    function a() {
                        var t;
                        return (0, i.default)(this, a), (t = e.apply(this, arguments))._refProgressBar = (0, p.createRef)(), t._refProgressBarComponent = (0, p.createRef)(), t._refMeasuringProfile = (0, p.createRef)(), t._refWrapper = (0, p.createRef)(), t.componentWillUnmount = function() {
                            if (t._playbackController.removeListeners(), null != t.props.sessionId) {
                                var e = Math.round(t._playbackController.duration || 0);
                                t._statusViewEvent.webcStatusPlaybackT = e;
                                var a = t._playStartTime;
                                null != a && (t._statusViewEvent.webcStatusViewT += Math.round(window.performance.now() - a), t._playStartTime = void 0), t._statusViewEvent.commit(), t._statusReplyEvent.commit()
                            }
                        }, t._updateStatusViewers = function() {
                            D.default.find(t.props.msg.id).checkpoint(t.props.rejectOnUnmount()).then((function(e) {
                                t.setState({
                                    seenBy: e.read
                                })
                            })).catch((0, c.filteredCatch)(S.Unmount, (function() {}))).catch((0, c.filteredCatch)(X.EphemeralDrop, (function() {})))
                        }, t._handleWindowResize = function() {
                            var e = t._refMeasuringProfile && t._refMeasuringProfile.current,
                                a = t._refProgressBar && t._refProgressBar.current;
                            if (e && a) {
                                var n = e.getBoundingClientRect(),
                                    r = a.getBoundingClientRect();
                                !I.default.isRTL() && n.right > r.left - 5 || I.default.isRTL() && n.left < r.right + 5 ? t.setState({
                                    narrow: !0
                                }) : t.setState({
                                    narrow: !1
                                })
                            }
                        }, t._handleTab = function(e) {
                            var a;
                            (e && (e.stopPropagation(), e.preventDefault()), t.props.statusV3.contact.isMe) || ((null === (a = t._refComposeBox) || void 0 === a ? void 0 : a.isFocused()) ? t.dismissReply() : t._startReply())
                        }, t._handleModalClose = function() {
                            _.default.closeModal(), t.play(), t.setState({
                                isViewerModalOpen: !1
                            })
                        }, t._handleSeeViewersModal = function() {
                            t.state.seenBy && (_.default.openModal((0, J.jsx)(G.default, {
                                onClose: t._handleModalClose,
                                viewers: t.state.seenBy
                            })), t.pause(), t.setState({
                                isViewerModalOpen: !0
                            }))
                        }, t.handleWindowGainedFocus = function() {
                            t._windowFocused = !0, t.state.isViewerModalOpen || t.play()
                        }, t.handleWindowLostFocus = function() {
                            t._windowFocused = !1, t.pause()
                        }, t._handleClickProfile = function() {
                            var e = t.props.statusV3.contact.id;
                            (0, x.findChat)(e).then((function(t) {
                                return _.default.openChatBottom(t)
                            })).then((function() {
                                t.props.closeStatusViewer(!0)
                            }))
                        }, t.play = function() {
                            var e, a = t.props.mediaData;
                            if (a) {
                                if (a.mediaStage !== O.MEDIA_DATA_STAGE.RESOLVED) return;
                                t._statusViewEvent.webcStatusLoadT || (t._statusViewEvent.markWebcStatusLoadT(), t._statusViewEvent.webcStatusLoaded = !0)
                            }(null === (e = t._refComposeBox) || void 0 === e ? void 0 : e.isPaused()) || t._windowFocused && (t._playStartTime = window.performance.now(), t._playbackController.resume())
                        }, t.pause = function() {
                            var e = t.props.mediaData;
                            if (!e || e.mediaStage === O.MEDIA_DATA_STAGE.RESOLVED) {
                                var a = t._playStartTime;
                                null != a && (t._statusViewEvent.webcStatusViewT += Math.round(window.performance.now() - a), t._playStartTime = void 0), t._playbackController.pause()
                            }
                        }, t.handleMouseDown = function() {
                            t.pause()
                        }, t.handleMouseUp = function() {
                            t.play()
                        }, t.dismissReply = function() {
                            var e = t._refWrapper && t._refWrapper.current;
                            e && y.default.focus(e)
                        }, t._startReply = function() {
                            var e;
                            null === (e = t._refComposeBox) || void 0 === e || e.restoreFocus()
                        }, t.handleSend = function() {
                            t._statusViewEvent.webcStatusReplyCount++
                        }, t.state = {
                            chat: void 0,
                            narrow: !1,
                            isViewerModalOpen: !1
                        }, t._windowFocused = !0, t._playbackController = (0, U.setupStatusV3Controller)(t.props.mediaData, t.props.msg), t._statusViewEvent = new M.default.WebcStatusView({
                            webcStatusLoaded: !1,
                            webcStatusReplyCount: 0,
                            webcStatusViewT: 0
                        }), t._statusReplyEvent = new M.default.StatusReply({
                            statusReplyResult: M.default.STATUS_REPLY_RESULT.CANCELLED
                        }), t
                    }
                    return (0, l.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this,
                                e = this.props,
                                a = e.statusV3,
                                n = e.msg,
                                r = e.mediaData,
                                o = e.msgIdx,
                                i = e.sessionId;
                            if (null != i) {
                                var l;
                                a.contact.isMe ? (l = M.default.WEBC_STATUS_ROW_SECTION.MY, this._updateStatusViewers()) : l = a.contact.statusMute ? M.default.WEBC_STATUS_ROW_SECTION.MUTED : a.hasUnread ? M.default.WEBC_STATUS_ROW_SECTION.RECENT : M.default.WEBC_STATUS_ROW_SECTION.VIEWED;
                                var s, u = this.props.rowIdx || 0,
                                    d = a.msgs.length - 1 - o < a.unreadCount;
                                r ? s = r.isGif ? M.default.WEBC_STATUS_MEDIA_TYPE.GIF : "video" === r.type ? M.default.WEBC_STATUS_MEDIA_TYPE.VIDEO : M.default.WEBC_STATUS_MEDIA_TYPE.IMAGE : (s = n.getLinks().length ? M.default.WEBC_STATUS_MEDIA_TYPE.URL : M.default.WEBC_STATUS_MEDIA_TYPE.TEXT, this._statusViewEvent.markWebcStatusLoadT(), this._statusViewEvent.webcStatusLoaded = !0), this._statusViewEvent.webcStatusSessionId = i, this._statusViewEvent.webcStatusRowSection = l, this._statusViewEvent.webcStatusRowIndex = u, this._statusViewEvent.webcStatusMediaType = s, this._statusViewEvent.webcStatusUnread = d, this._statusReplyEvent.statusSessionId = i
                            }
                            this._refProgressBarComponent && this._refProgressBarComponent.current && this._playbackController.addListeners((function(e, a) {
                                var n = t._refProgressBarComponent && t._refProgressBarComponent.current;
                                n && n.handleStart(e, a)
                            }), (function() {
                                var e = t._refProgressBarComponent && t._refProgressBarComponent.current;
                                e && e.handlePause()
                            }), (function() {
                                var e = t._refProgressBarComponent && t._refProgressBarComponent.current;
                                e && e.handleEnded().checkpoint(t.props.rejectOnUnmount()).then((function() {
                                    t.props.onNext()
                                })).catch((0, c.filteredCatch)(S.Unmount, (function() {})))
                            })), r ? (this.play(), r && r.mediaStage === O.MEDIA_DATA_STAGE.RESOLVED && this.props.markRead(this.props.statusV3, this.props.msg)) : (this.props.msg.type, v.default.MSG_TYPE.CHAT, this.play(), this.props.markRead(this.props.statusV3, this.props.msg));
                            var p = this._refWrapper && this._refWrapper.current;
                            p && p.focus();
                            var h = this.props.listeners;
                            h.add(window, "focus", this.handleWindowGainedFocus), h.add(window, "blur", this.handleWindowLostFocus), h.add(window, "resize", f.default.debounce(this._handleWindowResize)), this._handleWindowResize()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t, e, a, n = this,
                                r = this.props,
                                i = r.msg,
                                l = r.mediaData,
                                s = r.statusV3;
                            if (l) {
                                var u = ot(l);
                                u && (e = {
                                    backgroundImage: `url(${u})`
                                })
                            } else if (i.type === v.default.MSG_TYPE.CHAT) {
                                e = {
                                    backgroundColor: i.statusV3TextBg
                                }
                            }
                            if (l) switch (l.type) {
                                case b.default.TYPE.IMAGE:
                                    a = (0, J.jsx)(tt, {
                                        msg: i,
                                        statusV3: s,
                                        mediaData: l,
                                        markRead: this.props.markRead,
                                        play: this.play,
                                        pause: this.pause,
                                        onMouseDown: this.handleMouseDown,
                                        onMouseUp: this.handleMouseUp
                                    });
                                    break;
                                case b.default.TYPE.VIDEO:
                                    a = (0, J.jsx)(at, {
                                        msg: i,
                                        statusV3: s,
                                        mediaData: l,
                                        markRead: this.props.markRead,
                                        play: this.play,
                                        pause: this.pause,
                                        playbackController: this._playbackController,
                                        onMouseDown: this.handleMouseDown,
                                        onMouseUp: this.handleMouseUp
                                    });
                                    break;
                                default:
                                    __LOG__(3)`Invalid status v3 image type: ${l.type}`
                            } else a = i.type === v.default.MSG_TYPE.CHAT ? (0, J.jsx)(nt, {
                                msg: i,
                                onMouseDown: this.handleMouseDown,
                                onMouseUp: this.handleMouseUp
                            }) : (0, J.jsx)(rt, {
                                onMouseDown: this.handleMouseDown,
                                onMouseUp: this.handleMouseUp
                            });
                            var c, f = (0, J.jsx)("div", {
                                ref: this._refProgressBar,
                                children: (0, J.jsx)(H.default, {
                                    ref: this._refProgressBarComponent,
                                    current: this.props.msgIdx,
                                    total: this.props.totalMsgs,
                                    onClick: this.props.onClickProgressBar
                                })
                            });
                            i.type !== v.default.MSG_TYPE.CHAT && (c = (0, J.jsx)("div", {
                                className: V.default.captionBackdrop,
                                children: (0, J.jsx)(C.default, {
                                    className: V.default.mediaCaption,
                                    text: i.caption,
                                    formatters: w.Configuration.StatusV3Caption()
                                })
                            }));
                            var p = i.isSentByMe || s.contact.isPSA,
                                h = (0, d.default)(V.default.profile, (t = {}, (0, o.default)(t, V.default.nonClickProfile, p), (0, o.default)(t, V.default.profileNarrow, this.state.narrow), (0, o.default)(t, V.default.profileMac, !I.default.isRTL()), t)),
                                _ = (0, d.default)(V.default.profile, V.default.measuringProfile, (0, o.default)({}, V.default.profileMac, !I.default.isRTL())),
                                S = (0, J.jsx)(C.default, {
                                    className: V.default.msgInfoName,
                                    text: s.contact.formattedName
                                });
                            s.contact.isPSA && (S = (0, J.jsxs)("div", {
                                className: (0, d.default)(V.default.msgInfoName, V.default.verified),
                                children: [s.contact.formattedName, (0, J.jsx)("div", {
                                    className: V.default.icon,
                                    children: (0, J.jsx)(z.default, {
                                        name: "psa-verified"
                                    })
                                })]
                            }));
                            var x, y, j = (0, J.jsxs)("div", {
                                    className: h,
                                    onClick: p ? null : this._handleClickProfile,
                                    children: [(0, J.jsx)("div", {
                                        className: V.default.playerAvatar,
                                        children: (0, J.jsx)(g.default, {
                                            id: s.contact.id,
                                            theme: "status_v3",
                                            size: 40
                                        })
                                    }), (0, J.jsxs)("div", {
                                        className: V.default.msgInfo,
                                        children: [S, (0, J.jsx)("div", {
                                            className: V.default.timestamp,
                                            children: m.default.relativeDateAndTimeStr(i.t)
                                        })]
                                    })]
                                }),
                                T = (0, J.jsxs)("div", {
                                    ref: this._refMeasuringProfile,
                                    className: _,
                                    children: [(0, J.jsx)("div", {
                                        className: V.default.playerAvatar,
                                        children: (0, J.jsx)(g.default, {
                                            id: s.contact.id,
                                            theme: "status_v3",
                                            size: 40
                                        })
                                    }), (0, J.jsxs)("div", {
                                        className: V.default.msgInfo,
                                        children: [S, (0, J.jsx)("div", {
                                            className: V.default.timestamp,
                                            children: m.default.relativeDateAndTimeStr(i.t)
                                        })]
                                    })]
                                }),
                                k = {
                                    tab: this._handleTab,
                                    "shift+tab": this._handleTab
                                },
                                O = function(t) {
                                    return t.stopPropagation()
                                };
                            l && (x = (0, J.jsx)(it, {
                                mediaData: l
                            }));
                            var N = this.props.statusV3.contact;
                            N.isMe || N.isPSA || (y = (0, J.jsx)(P.default, {
                                handlers: {
                                    left: O,
                                    right: O
                                },
                                children: (0, J.jsx)(B.default, {
                                    msg: this.props.msg,
                                    dismissReply: this.dismissReply,
                                    onSend: this.handleSend,
                                    pause: this.pause,
                                    play: this.play,
                                    ref: function(t) {
                                        n._refComposeBox = t
                                    },
                                    statusReplyMetric: this._statusReplyEvent
                                })
                            }));
                            var M, D = E.default.supportsFeature(E.default.F.MD_BACKEND) && E.default.supportsFeature(E.default.F.SEE_STATUS_VIEWERS) && N.isMe && this.state.seenBy ? (0, J.jsx)("div", {
                                    className: V.default.seen,
                                    children: (0, J.jsx)(W.default, {
                                        seenCount: this.state.seenBy.length,
                                        onClick: this._handleSeeViewersModal
                                    })
                                }) : null,
                                A = (0, d.default)(V.default.playerBackground, (0, o.default)({}, V.default.media, l)),
                                R = (0, d.default)(V.default.progressBackdrop, (0, o.default)({}, V.default.progressBarBackdropNarrow, this.state.narrow));
                            return i.type !== v.default.MSG_TYPE.CHAT && (M = (0, J.jsx)("div", {
                                className: R
                            })), (0, J.jsx)(K.default, {
                                displayName: "StatusV3Player",
                                escapable: !0,
                                requestDismiss: function(t) {
                                    t || n.props.closeStatusViewer()
                                },
                                requestFocus: this.dismissReply,
                                children: (0, J.jsx)(P.default, {
                                    handlers: k,
                                    children: (0, J.jsxs)("div", {
                                        className: V.default.playerWrapper,
                                        tabIndex: -1,
                                        ref: this._refWrapper,
                                        children: [T, j, M, f, c, (0, J.jsx)("div", {
                                            className: A,
                                            style: e
                                        }), a, x, D, y]
                                    }, i.id.toString())
                                })
                            })
                        }
                    }]), a
                }(p.Component);
            Z.displayName = "_StatusV3Player";
            var Q = function(t) {
                (0, s.default)(a, t);
                var e = (0, u.default)(a);

                function a() {
                    var t;
                    (0, i.default)(this, a);
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (t = e.call.apply(e, [this].concat(r)))._renderImage = function(e) {
                        var a = t.props,
                            n = a.msg,
                            r = a.mediaData,
                            o = (0, d.default)(V.default.playerContent, V.default.v3Image);
                        return (0, J.jsx)("div", {
                            className: o,
                            onMouseDown: t.props.onMouseDown,
                            onMouseUp: t.props.onMouseUp,
                            onDragEnd: t.props.onMouseUp,
                            children: (0, J.jsx)(A.default, {
                                type: "contain",
                                size: {
                                    width: r.fullWidth,
                                    height: r.fullHeight
                                },
                                children: (0, J.jsxs)("div", {
                                    className: V.default.mediaViewer,
                                    children: [(0, J.jsx)(T.default, {
                                        src: e,
                                        disableContextMenu: !0
                                    }), n && n.interactiveAnnotations && n.interactiveAnnotations.length > 0 && (0, J.jsx)(h.default, {
                                        annotations: n.interactiveAnnotations,
                                        onTooltipDisplay: t.props.onMouseDown,
                                        onTooltipDismiss: t.props.onMouseUp
                                    })]
                                })
                            })
                        })
                    }, t._renderPreviewImage = function() {
                        var e, a = t.props.mediaData,
                            n = (0, d.default)(V.default.playerContent, V.default.v3Image, V.default.loading);
                        return (0, J.jsx)("div", {
                            className: n,
                            onMouseDown: t.props.onMouseDown,
                            onMouseUp: t.props.onMouseUp,
                            children: (0, J.jsx)(A.default, {
                                type: "contain",
                                size: {
                                    width: a.aspectRatio,
                                    height: 1
                                },
                                children: (0, J.jsx)(T.default, {
                                    src: null !== (e = ot(a)) && void 0 !== e ? e : ""
                                })
                            })
                        })
                    }, t._downloadMedia = function() {
                        return t.props.msg.downloadMedia({
                            downloadEvenIfExpensive: !0,
                            rmrReason: M.default.WEBC_RMR_REASON_CODE.STATUS_V3,
                            isUserInitiated: !0
                        })
                    }, t
                }
                return (0, l.default)(a, [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.mediaData.mediaStage !== O.MEDIA_DATA_STAGE.RESOLVED && this.props.msg.downloadMedia({
                            downloadEvenIfExpensive: !0,
                            rmrReason: M.default.WEBC_RMR_REASON_CODE.STATUS_V3,
                            isUserInitiated: !0
                        })
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.props.play();
                        var t = this.props.mediaData;
                        t && t.mediaStage === O.MEDIA_DATA_STAGE.RESOLVED && this.props.markRead(this.props.statusV3, this.props.msg)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.props.pause()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return (0, J.jsx)(N.default, {
                            mediaData: this.props.mediaData,
                            placeholderRenderer: this._renderPreviewImage,
                            downloadMedia: this._downloadMedia,
                            renderProgressively: !0,
                            children: this._renderImage
                        })
                    }
                }]), a
            }(p.PureComponent);
            Q.CONCERNS = {
                mediaData: ["mediaStage", "renderableUrl", "preview", "fullWidth", "fullHeight", "aspectRatio", "fullPreviewData"]
            }, Q.displayName = "_StatusV3Img";
            var tt = (0, F.default)(Q, Q.CONCERNS),
                et = function(t) {
                    (0, s.default)(a, t);
                    var e = (0, u.default)(a);

                    function a() {
                        var t;
                        (0, i.default)(this, a);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (t = e.call.apply(e, [this].concat(r))).refVideo = (0, p.createRef)(), t.setRefVideo = function(e) {
                            t.refVideo = e, t.props.playbackController.setVideo(t.refVideo.current)
                        }, t
                    }
                    return (0, l.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this.props.mediaData;
                            t.streamable || t.isStreamable() || this.props.msg.downloadMedia({
                                downloadEvenIfExpensive: !0,
                                rmrReason: M.default.WEBC_RMR_REASON_CODE.STATUS_V3,
                                isUserInitiated: !0
                            })
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.props.play();
                            var t = this.props.mediaData;
                            t && t.mediaStage === O.MEDIA_DATA_STAGE.RESOLVED && this.props.markRead(this.props.statusV3, this.props.msg)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.props.pause()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t, e = this.props,
                                a = e.msg,
                                n = e.mediaData,
                                r = e.onMouseDown,
                                o = e.onMouseUp,
                                i = n.mediaStage !== O.MEDIA_DATA_STAGE.RESOLVED,
                                l = (0, d.default)(V.default.playerContent, V.default.v3Video, {
                                    loading: i
                                });
                            return (0, J.jsx)("div", {
                                className: l,
                                onMouseDown: r,
                                onMouseUp: o,
                                children: (0, J.jsx)(A.default, {
                                    type: "contain",
                                    size: {
                                        width: n.fullWidth,
                                        height: n.fullHeight
                                    },
                                    children: (0, J.jsxs)("div", {
                                        className: V.default.mediaViewer,
                                        children: [(0, J.jsx)($.default, {
                                            msg: a,
                                            mediaData: n,
                                            autoPlay: !0,
                                            refVideo: this.setRefVideo,
                                            poster: null !== (t = ot(n)) && void 0 !== t ? t : "",
                                            disableContextMenu: !0,
                                            children: I.default.t(1800)
                                        }), a && a.interactiveAnnotations && a.interactiveAnnotations.length > 0 && (0, J.jsx)(h.default, {
                                            annotations: a.interactiveAnnotations,
                                            onTooltipDisplay: this.props.onMouseDown,
                                            onTooltipDismiss: this.props.onMouseUp
                                        })]
                                    })
                                })
                            })
                        }
                    }]), a
                }(p.PureComponent);
            et.CONCERNS = {
                mediaData: ["preview", "mediaStage", "fullWidth", "fullHeight", "streamable", "fullPreviewData"]
            }, et.displayName = "_StatusV3Video";
            var at = (0, F.default)(et, et.CONCERNS);

            function nt(t) {
                var e, a = t.msg;
                (0, p.useEffect)((function() {
                    j.default.load(a.font).catch((function() {}))
                }), []);
                var n, r, i = (0, Y.numCodepoints)(t.msg.body),
                    l = (0, o.default)({}, V.default[`font_${t.msg.font}`], !0);
                return i <= 60 ? (n = (0, d.default)(V.default.text, V.default.textLarge, l), r = w.Configuration.StatusV3Text({
                    links: t.msg.getLinks()
                })) : i <= 240 ? (n = (0, d.default)(V.default.text, V.default.textMedium, l), r = w.Configuration.StatusV3Text({
                    links: t.msg.getLinks()
                })) : n = (0, d.default)(V.default.text, V.default.textSmall, l), (0, J.jsx)("div", {
                    className: (0, d.default)(V.default.playerContent, (e = {}, (0, o.default)(e, V.default.statusPanelPlayerContent, "status-panel" === t.theme), (0, o.default)(e, V.default.statusThumbnailPlayerContent, "status-thumbnail" === t.theme), (0, o.default)(e, V.default.textThumbnailPlayerContent, "text-thumb" === t.theme), e)),
                    onMouseDown: t.onMouseDown,
                    onMouseUp: t.onMouseUp,
                    children: (0, J.jsx)("div", {
                        className: n,
                        children: (0, J.jsx)(C.default, {
                            text: t.msg.body,
                            formatters: r
                        })
                    })
                })
            }

            function rt(t) {
                return (0, J.jsx)("div", {
                    className: V.default.playerContent,
                    onMouseDown: t.onMouseDown,
                    onMouseUp: t.onMouseUp,
                    children: (0, J.jsx)("div", {
                        className: V.default.unknown,
                        children: I.default.t(1674)
                    })
                })
            }

            function ot(t) {
                return t ? t.fullPreviewData ? t.fullPreviewData.url() : t.preview ? t.preview.url() : null : null
            }
            var it = function(t) {
                    return (0, q.default)(t.mediaData, ["mediaStage"]).mediaStage !== O.MEDIA_DATA_STAGE.RESOLVED ? (0, J.jsx)("div", {
                        className: V.default.mediaStateControls,
                        children: (0, J.jsx)("button", {
                            className: "icon-media-disabled",
                            children: (0, J.jsx)(L.default, {
                                size: 50,
                                stroke: 4,
                                color: "white"
                            })
                        })
                    }) : null
                },
                lt = (0, R.default)((0, k.default)(Z));
            e.default = lt
        },
        90796: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(a(59713)),
                i = r(a(34575)),
                l = r(a(93913)),
                s = r(a(2205)),
                u = r(a(99842)),
                d = r(a(94184)),
                c = a(74733),
                f = a(18077),
                p = a(67294),
                h = r(a(65901)),
                m = r(a(94253)),
                _ = n(a(18286)),
                v = r(a(99617)),
                g = r(a(58342)),
                C = r(a(45159)),
                S = a(41655),
                x = r(a(50507)),
                y = r(a(5202)),
                j = r(a(85651)),
                E = r(a(18740)),
                P = n(a(33633)),
                T = r(a(17394)),
                w = r(a(7665)),
                I = n(a(92428)),
                k = r(a(60806)),
                b = a(59175),
                O = a(85893),
                N = function(t) {
                    (0, s.default)(a, t);
                    var e = (0, u.default)(a);

                    function a() {
                        var t;
                        (0, i.default)(this, a), (t = e.apply(this, arguments)).handleClickProgressBar = function(e) {
                            var a = t.state.iterator;
                            if ((!a || e !== a.msgIdx) && a) {
                                var n = t._statusV3Snapshot.statusAt(a, e);
                                n.isFulfilled() || t.setState({
                                    loading: !0
                                }), n.checkpoint(t.props.rejectOnUnmount()).then((function(e) {
                                    t.setState({
                                        iterator: e
                                    })
                                })).catch((0, f.filteredCatch)(P.InvalidStatusV3Iterator, (function() {
                                    __LOG__(3)`Invalid iterator while getting next status msg`
                                }))).catch((0, f.filteredCatch)(b.EphemeralDrop, (function() {}))).catch((0, f.filteredCatch)(_.Unmount, (function() {}))).catch((0, f.filteredCatch)(P.StatusV3LoadingError, (function() {
                                    __LOG__(3)`No more status v3 while preloading next status`
                                }))).finally((function() {
                                    t.setState({
                                        loading: !1
                                    })
                                }))
                            }
                        }, t._preloadNextStatus = function() {
                            var e = t.state.iterator;
                            e && t._statusV3Snapshot.hasNext(e) && t._statusV3Snapshot.getNext(e).checkpoint(t.props.rejectOnUnmount()).then((function(e) {
                                var a = t._statusV3Snapshot.statuses[e.statusIdx].msgs[e.msgIdx];
                                if (!a) throw new P.StatusV3MsgNotFound;
                                if (a.type === m.default.MSG_TYPE.CHAT) v.default.load(a.font).catch((function() {}));
                                else {
                                    var n = a.mediaData;
                                    n && n.mediaStage !== S.MEDIA_DATA_STAGE.RESOLVED && a.downloadMedia({
                                        downloadEvenIfExpensive: !0,
                                        rmrReason: x.default.WEBC_RMR_REASON_CODE.STATUS_V3,
                                        isUserInitiated: !1
                                    })
                                }
                            })).catch((0, f.filteredCatch)(P.StatusV3MsgNotFound, (function() {
                                __LOG__(3)`Error finding next status while preloading next status`
                            }))).catch((0, f.filteredCatch)(P.InvalidStatusV3Iterator, (function() {
                                __LOG__(3)`Invalid iterator while preloading next status`
                            }))).catch((0, f.filteredCatch)(b.EphemeralDrop, (function() {}))).catch((0, f.filteredCatch)(_.Unmount, (function() {}))).catch((0, f.filteredCatch)(P.StatusV3LoadingError, (function() {
                                __LOG__(3)`No more status v3 while preloading next status`
                            })))
                        }, t.handlePrev = function() {
                            var e = t.state.iterator;
                            if (e && t._statusV3Snapshot.hasPrev(e)) {
                                var a = e.statusIdx;
                                t._statusV3Snapshot.getPrev(e).checkpoint(t.props.rejectOnUnmount()).then((function(e) {
                                    e.statusIdx === a ? t.setState({
                                        iterator: e
                                    }) : (t.setState({
                                        transitioning: !0
                                    }), (0, c.delayMs)(200).checkpoint(t.props.rejectOnUnmount()).then((function() {
                                        t.setState({
                                            iterator: e,
                                            transitioning: !1
                                        })
                                    })).catch((0, f.filteredCatch)(_.Unmount, (function() {}))))
                                })).catch((0, f.filteredCatch)(P.InvalidStatusV3Iterator, (function() {
                                    __LOG__(3)`Invalid iterator while getting previous status msg`
                                }))).catch((0, f.filteredCatch)(b.EphemeralDrop, (function() {}))).catch((0, f.filteredCatch)(_.Unmount, (function() {}))).catch((0, f.filteredCatch)(P.StatusV3LoadingError, (function() {
                                    __LOG__(3)`No more status v3 while preloading next status`
                                })))
                            }
                        }, t.handleNext = function() {
                            var e = t.state.iterator;
                            if (e && t._statusV3Snapshot.hasNext(e)) {
                                var a = e.statusIdx,
                                    n = t._statusV3Snapshot.getNext(e);
                                n.isFulfilled() || t.setState({
                                    loading: !0
                                }), n.checkpoint(t.props.rejectOnUnmount()).then((function(e) {
                                    e.statusIdx === a ? t.setState({
                                        iterator: e
                                    }) : (t.setState({
                                        transitioning: !0,
                                        loading: !1
                                    }), (0, c.delayMs)(200).checkpoint(t.props.rejectOnUnmount()).then((function() {
                                        t.setState({
                                            iterator: e,
                                            transitioning: !1
                                        })
                                    })).catch((0, f.filteredCatch)(_.Unmount, (function() {}))))
                                })).catch((0, f.filteredCatch)(P.InvalidStatusV3Iterator, (function() {
                                    __LOG__(3)`Invalid iterator while getting next status msg`, t.closeStatusViewer()
                                }))).catch((0, f.filteredCatch)(b.EphemeralDrop, (function() {}))).catch((0, f.filteredCatch)(_.Unmount, (function() {}))).catch((0, f.filteredCatch)(P.StatusV3LoadingError, (function() {
                                    __LOG__(3)`No more status v3 while preloading next status`
                                }))).finally((function() {
                                    t.setState({
                                        loading: !1
                                    })
                                }))
                            } else t.closeStatusViewer()
                        }, t.markRead = function(e, a) {
                            if (a) {
                                var n = e.unreadCount,
                                    r = e.totalCount;
                                e.msgs.getModelsArray().findIndex((function(t) {
                                    return t === a
                                })) >= r - n && e.sendReadStatus(a.id, a.author);
                                var o = t._statusV3Snapshot.statuses.find((function(t) {
                                    return t.statusV3 === e
                                }));
                                o && o.readMsgKeys.push(a.id.toString())
                            }
                        }, t.closeStatusViewer = function(e) {
                            t.setState({
                                transitioning: !0
                            }), (0, c.delayMs)(200).checkpoint(t.props.rejectOnUnmount()).then((function() {
                                t.props.closeStatusViewer(e)
                            })).catch((0, f.filteredCatch)(_.Unmount, (function() {})))
                        };
                        var n = t.props.initialStatusV3;
                        if (t.props.quotedMsgKey) {
                            t.state = {};
                            var r = t.props.quotedMsgKey,
                                o = n.msgs.getModelsArray().findIndex((function(t) {
                                    return t.id.toString() === r.toString()
                                }));
                            if (-1 !== o) {
                                t._statusV3Snapshot = new P.default(n, r);
                                var l = t._statusV3Snapshot.getFirstUnread(n, !0, r);
                                l.checkpoint(t.props.rejectOnUnmount()).then((function(e) {
                                    t.setState({
                                        iterator: e,
                                        loading: !1
                                    })
                                })).catch((0, f.filteredCatch)(b.EphemeralDrop, (function() {}))).catch((0, f.filteredCatch)(_.Unmount, (function() {}))).catch((0, f.filteredCatch)(P.InvalidStatusV3Iterator, (function() {
                                    __LOG__(3)`Invalid iterator while loading first unread msg`, h.default.openToast((0, O.jsx)(I.default, {
                                        msg: C.default.t(1667),
                                        id: (0, I.genId)()
                                    })), t.props.closeStatusViewer()
                                })))
                            } else t.state = {
                                loading: !0
                            }, n.loadMore(n.totalCount).then((function() {
                                (t.setState({
                                    loading: !1
                                }), -1 !== n.msgs.getModelsArray().findIndex((function(t) {
                                    return t.id.toString() === r.toString()
                                }))) ? (t._statusV3Snapshot = new P.default(n, r), t._statusV3Snapshot.getFirstUnread(n, !0, r).checkpoint(t.props.rejectOnUnmount()).then((function(e) {
                                    t.setState({
                                        iterator: e,
                                        loading: !1
                                    })
                                })).catch((0, f.filteredCatch)(b.EphemeralDrop, (function() {}))).catch((0, f.filteredCatch)(_.Unmount, (function() {}))).catch((0, f.filteredCatch)(P.InvalidStatusV3Iterator, (function() {
                                    __LOG__(3)`Invalid iterator while loading first unread msg`, h.default.openToast((0, O.jsx)(I.default, {
                                        msg: C.default.t(1667),
                                        id: (0, I.genId)()
                                    })), t.props.closeStatusViewer()
                                })))) : (t.props.onMsgNotFound && t.props.onMsgNotFound(), h.default.openToast((0, O.jsx)(I.default, {
                                    msg: C.default.t(1667),
                                    id: (0, I.genId)()
                                })), t.props.closeStatusViewer())
                            })).catch((function() {
                                h.default.openToast((0, O.jsx)(I.default, {
                                    msg: C.default.t(1667),
                                    id: (0, I.genId)()
                                })), t.props.closeStatusViewer()
                            })).finally((function() {
                                t.setState({
                                    loading: !1
                                })
                            }))
                        } else {
                            var s = t.props.initialStatusMsg;
                            t._statusV3Snapshot = new P.default(n);
                            var u = t._statusV3Snapshot.getFirstUnread(n, !0, s && s.id);
                            u.isFulfilled() ? t.state = {} : t.state = {
                                loading: !0
                            }, u.checkpoint(t.props.rejectOnUnmount()).then((function(e) {
                                t.setState({
                                    iterator: e,
                                    loading: !1
                                })
                            })).catch((0, f.filteredCatch)(b.EphemeralDrop, (function() {}))).catch((0, f.filteredCatch)(_.Unmount, (function() {}))).catch((0, f.filteredCatch)(P.InvalidStatusV3Iterator, (function() {
                                __LOG__(3)`Invalid iterator while loading first unread msg`, h.default.openToast((0, O.jsx)(I.default, {
                                    msg: C.default.t(1667),
                                    id: (0, I.genId)()
                                })), t.props.closeStatusViewer()
                            })))
                        }
                        return t
                    }
                    return (0, l.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this._preloadNextStatus()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this._preloadNextStatus()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t, e, a, n, r, i, l, s, u = this,
                                c = this.state.iterator;
                            c && (i = (r = this._statusV3Snapshot).statuses[c.statusIdx], l = i.statusV3, s = i.msgs[c.msgIdx], r.hasPrev(c) && (a = (0, O.jsx)("div", {
                                className: T.default.chevronLeft,
                                children: (0, O.jsx)(w.default, {
                                    name: "chevron-left"
                                })
                            }), n = (0, O.jsx)("div", {
                                className: T.default.chevronLeftBg,
                                onClick: this.handlePrev
                            })), r.hasNext(c) && (t = (0, O.jsx)("div", {
                                className: T.default.chevronRight,
                                children: (0, O.jsx)(w.default, {
                                    name: "chevron-right"
                                })
                            }), e = (0, O.jsx)("div", {
                                className: T.default.chevronRightBg,
                                onClick: function() {
                                    u.handleNext(), u.markRead(l, s)
                                }
                            })));
                            var f, p = {
                                left: this.handlePrev,
                                right: this.handleNext
                            };
                            !this.state.transitioning && !this.state.loading && s && c && i && l && (f = (0, O.jsx)("div", {
                                className: T.default.playerContainer,
                                children: (0, O.jsx)(E.default, {
                                    statusV3: l,
                                    msg: s,
                                    mediaData: s.mediaData,
                                    msgIdx: c.msgIdx,
                                    totalMsgs: i.totalCount,
                                    markRead: this.markRead,
                                    closeStatusViewer: this.closeStatusViewer,
                                    onClickProgressBar: this.handleClickProgressBar,
                                    onNext: this.handleNext,
                                    onPrev: this.handlePrev,
                                    sessionId: this.props.sessionId,
                                    rowIdx: this.props.rowIdx
                                }, s.id)
                            }, s.id));
                            var h, m = (0, d.default)(T.default.v3X, (0, o.default)({}, T.default.v3X_mac, C.default.isRTL())),
                                _ = (0, O.jsx)("button", {
                                    className: m,
                                    onClick: function() {
                                        return u.props.closeStatusViewer(!0)
                                    },
                                    children: (0, O.jsx)(w.default, {
                                        name: "x-viewer"
                                    })
                                }),
                                v = (0, d.default)(T.default.backIcon, (0, o.default)({}, T.default.backIcon_mac, !C.default.isRTL())),
                                S = (0, O.jsx)("button", {
                                    className: v,
                                    onClick: function() {
                                        return u.props.closeStatusViewer()
                                    },
                                    children: (0, O.jsx)(w.default, {
                                        name: "back",
                                        directional: !0
                                    })
                                });
                            return this.state.loading && (h = (0, O.jsx)("div", {
                                className: T.default.mediaStateControls,
                                children: (0, O.jsx)("button", {
                                    children: (0, O.jsx)(j.default, {
                                        size: 50,
                                        stroke: 4,
                                        color: "white"
                                    })
                                })
                            })), (0, O.jsx)(g.default, {
                                handlers: p,
                                children: (0, O.jsxs)("div", {
                                    className: T.default.viewer,
                                    "data-animate-status-v3-viewer": !0,
                                    children: [_, S, n, a, e, t, h, (0, O.jsx)(k.default, {
                                        transitionName: "status-v3-player",
                                        transitionAppear: !0,
                                        children: f
                                    })]
                                })
                            })
                        }
                    }]), a
                }(p.Component);
            N.displayName = "StatusV3Viewer";
            var M = (0, y.default)(N);
            e.default = M
        },
        41963: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e, a = t.viewers,
                    n = t.onClose;
                (0, o.useEffect)((function() {
                    return n
                }));
                var r = new c.default,
                    p = function(t) {
                        var e = t.map((function(t) {
                            return {
                                participant: t,
                                itemKey: t.id.toString(),
                                height: d.DEFAULT_ITEM_HEIGHT
                            }
                        }));
                        return e.sort((function(t, e) {
                            return e.participant.t - t.participant.t
                        })), e
                    }(a),
                    g = p.length ? (0, _.jsx)(d.default, {
                        flatListController: r,
                        direction: "vertical",
                        forceConsistentRenderCount: !0,
                        data: p,
                        renderItem: v
                    }) : (0, _.jsx)(u.Empty, {
                        children: "none" === (null === (e = (0, f.getUserPrivacySettings)()) || void 0 === e ? void 0 : e.readReceipts) ? h.default.t(485) : h.default.t(1401)
                    }),
                    C = h.default.t(1823, {
                        count: p.length
                    }),
                    S = {
                        width: 400,
                        height: (x = p.length, y = x > 0 ? 72 * x : 100, Math.min(500, y + 59))
                    };
                var x, y;
                return (0, _.jsx)(m.default, {
                    type: m.ModalTheme.CustomSize,
                    dimensions: S,
                    children: (0, _.jsxs)(i.default, {
                        theme: "settings",
                        children: [(0, _.jsx)(s.default, {
                            onCancel: n,
                            title: C,
                            type: s.DRAWER_HEADER_TYPE.POPUP
                        }), (0, _.jsx)(l.default, {
                            flatListControllers: [r],
                            children: g
                        })]
                    })
                })
            };
            var o = a(67294),
                i = r(a(53187)),
                l = r(a(18345)),
                s = n(a(19288)),
                u = a(75993),
                d = n(a(73568)),
                c = r(a(92546)),
                f = a(1577),
                p = r(a(50329)),
                h = r(a(45159)),
                m = n(a(73454)),
                _ = a(85893);

            function v(t) {
                var e = t.participant;
                return (0, _.jsx)(p.default, {
                    msgInfoParticipant: e,
                    contact: e.contact
                }, e.id.toString())
            }
        },
        9150: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(a(63038)),
                i = a(67294),
                l = r(a(94253)),
                s = r(a(53187)),
                u = r(a(18345)),
                d = n(a(19288)),
                c = r(a(73008)),
                f = r(a(58342)),
                p = r(a(85583)),
                h = n(a(73454)),
                m = r(a(64894)),
                _ = r(a(80385)),
                v = r(a(7665)),
                g = r(a(68544)),
                C = r(a(43693)),
                S = r(a(16835)),
                x = n(a(36745)),
                y = a(85893),
                j = function(t, e) {
                    var a = t.defaultText,
                        n = t.title,
                        r = t.onSend,
                        j = t.onBack,
                        E = (0, i.useState)(a),
                        P = (0, o.default)(E, 2),
                        T = P[0],
                        w = P[1],
                        I = (0, x.findFirstWebLink)(T),
                        k = (0, x.default)(I),
                        b = k.linkPreview,
                        O = k.clearLinkPreview,
                        N = n ? (0, y.jsx)(c.default, {
                            text: n,
                            direction: "auto",
                            titlify: !0,
                            ellipsify: !0
                        }) : null,
                        M = b || {},
                        D = M.title,
                        A = M.canonicalUrl,
                        R = M.description,
                        L = M.thumbnail,
                        F = b ? (0, y.jsx)(S.default, {
                            displayName: "ComposeBoxLinkPreview",
                            escapable: !0,
                            requestDismiss: O,
                            children: (0, y.jsx)(m.default, {
                                onOmit: O,
                                children: (0, y.jsx)(p.default, {
                                    title: D,
                                    compose: !0,
                                    canonicalUrl: A,
                                    description: R,
                                    thumbnailJpeg: L
                                })
                            })
                        }) : null;
                    return (0, y.jsx)(h.default, {
                        type: h.ModalTheme.Box,
                        ref: e,
                        children: (0, y.jsxs)(s.default, {
                            children: [(0, y.jsx)(d.default, {
                                type: d.DRAWER_HEADER_TYPE.POPUP,
                                onBack: j,
                                children: N
                            }), (0, y.jsx)(u.default, {
                                children: (0, y.jsxs)(f.default, {
                                    className: C.default.container,
                                    children: [(0, y.jsx)("div", {
                                        className: C.default.inputContainer,
                                        children: (0, y.jsx)(g.default, {
                                            a8n: "text-message-modal-text-unput",
                                            value: T,
                                            maxLength: l.default.MAX_TXT_MSG_SIZE,
                                            onChange: function(t) {
                                                w(t)
                                            },
                                            supportsEmoji: !0,
                                            multiline: !0,
                                            spellCheck: !0,
                                            showRemaining: !0,
                                            focusOnMount: !0,
                                            theme: "small"
                                        })
                                    }), F]
                                })
                            }), (0, y.jsx)("div", {
                                className: C.default.btnContainer,
                                children: (0, y.jsx)("div", {
                                    className: C.default.btnPosition,
                                    children: (0, y.jsx)(_.default, {
                                        large: !0,
                                        onClick: function() {
                                            T.length && r(T, b)
                                        },
                                        children: (0, y.jsx)(v.default, {
                                            name: "send",
                                            directional: !0
                                        })
                                    })
                                })
                            })]
                        })
                    })
                },
                E = (0, i.forwardRef)(j);
            e.default = E
        },
        53043: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = t.onCartClick,
                    a = t.cartCount,
                    n = t.catalogId,
                    r = t.canManageCatalog,
                    C = t.onSendCatalog,
                    S = t.onOpenCollections,
                    x = t.onOpenSettings,
                    y = (0, o.useContext)(l.default);
                return (0, g.jsxs)(g.Fragment, {
                    children: [function() {
                        if (e && n) {
                            var t = (0, v.isNumber)(a) && a > 0 ? a.toString() : void 0,
                                r = (0, p.getOnCartClickWithLog)(e, n, (0, m.getProductCatalogContext)(y));
                            return (0, g.jsx)(h.MenuBarItem, {
                                a8nText: "menu-bar-cart-link",
                                icon: (0, g.jsx)(i.default, {
                                    theme: "inherit-color"
                                }),
                                text: t,
                                title: c.default.t(490),
                                onClick: r
                            })
                        }
                        return null
                    }(), r ? (0, g.jsx)(h.MenuBarItem, {
                        a8nText: "menu-bar-menu",
                        icon: (0, g.jsx)(_.default, {
                            name: "menu"
                        }),
                        title: c.default.t(1246),
                        children: (0, g.jsxs)(s.default, {
                            type: "dropdown_menu",
                            flipOnRTL: !0,
                            dirX: s.DirX.LEFT,
                            children: [(0, g.jsx)(u.default, {
                                a8n: "mi-foward menu-item",
                                action: C,
                                children: c.default.t(914)
                            }), S && (0, g.jsx)(u.default, {
                                a8n: "mi-collections menu-item",
                                action: S,
                                children: c.default.t(618)
                            }), (0, d.canToggleCartOnOff)() && x && (0, g.jsx)(u.default, {
                                a8n: "mi-settings menu-item",
                                action: x,
                                children: c.default.t(558)
                            })]
                        }, "CatalogDetailHeader")
                    }) : (0, g.jsx)(h.MenuBarItem, {
                        a8nText: "menu-bar-catalog-link",
                        icon: (0, g.jsx)(f.default, {}),
                        title: c.default.t(551),
                        onClick: C
                    })]
                })
            };
            var o = a(67294),
                i = r(a(10114)),
                l = r(a(96706)),
                s = n(a(98169)),
                u = r(a(94680)),
                d = a(2629),
                c = r(a(45159)),
                f = r(a(36387)),
                p = a(11613),
                h = a(91823),
                m = a(49942),
                _ = r(a(7665)),
                v = a(82118),
                g = a(85893)
        },
        13833: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = a(67294),
                o = (n(a(56720)), n(a(51599))),
                i = n(a(89729)),
                l = n(a(96706)),
                s = n(a(46821)),
                u = a(27968),
                d = a(2629),
                c = n(a(45159)),
                f = a(10951),
                p = n(a(44659)),
                h = a(49942),
                m = n(a(67315)),
                _ = n(a(27610)),
                v = a(68220),
                g = n(a(7665)),
                C = n(a(76080)),
                S = a(85893),
                x = {
                    addIcon: {
                        position: "g0rxnol2",
                        width: "d0st09ow",
                        height: "bbl9m3t3",
                        paddingBottom: "aus7m8kn",
                        marginTop: "tt8xd2xn",
                        marginEnd: "bugiwsl0",
                        marginBottom: "or9x5nie",
                        marginStart: "svoq16ka",
                        borderTop: "rom324v9",
                        borderEnd: "na7ur5ty",
                        borderBottom: "gjeyj30g",
                        borderStart: "bmro6pka",
                        borderTopStartRadius: "l147y7tb",
                        borderTopEndRadius: "mjscftrx",
                        borderBottomEndRadius: "fqwk616h",
                        borderBottomStartRadius: "pkud3j3x",
                        ":before": {
                            position: "oxaw94s0",
                            top: "ijeufx4s",
                            start: "meq75apj",
                            display: "oa3lyrek",
                            width: "slvs4faj",
                            height: "jaq0b63r",
                            content: "lij4d1x3",
                            background: "nkmjymgc",
                            transform: "k95pjfv1"
                        },
                        ":after": {
                            position: "dkvli2l0",
                            top: "qi2a0yje",
                            start: "bunkm0yn",
                            display: "b0f5vxaq",
                            width: "qbfuvgfc",
                            height: "i0r7mfoh",
                            content: "k15o3o4i",
                            background: "fji5f4ri",
                            transform: "cai600lj"
                        }
                    },
                    largeGallerySpacing: {
                        width: "b8z6cu80",
                        height: "bbl9m3t3",
                        marginEnd: "jnwc1y2a",
                        marginBottom: "qrsyb3yy"
                    },
                    placeholderThumb: {
                        width: "d0st09ow",
                        height: "fujac5jc",
                        paddingBottom: "lxvt2vq0",
                        marginTop: "tt8xd2xn",
                        marginEnd: "bugiwsl0",
                        marginBottom: "or9x5nie",
                        marginStart: "svoq16ka",
                        backgroundColor: "o27ac25e",
                        borderTopStartRadius: "l147y7tb",
                        borderTopEndRadius: "mjscftrx",
                        borderBottomEndRadius: "fqwk616h",
                        borderBottomStartRadius: "pkud3j3x"
                    },
                    subtitle: {
                        marginTop: "tt8xd2xn",
                        marginEnd: "q471nw87",
                        marginBottom: "mpdn4nr2",
                        marginStart: "svoq16ka",
                        fontSize: "f8jlpxt4",
                        color: "sbs3osm6"
                    }
                };

            function y(t) {
                var e = t.onProductCatalog,
                    a = t.title,
                    n = t.subtitle,
                    y = t.animation,
                    j = t.sectionTheme,
                    E = t.shouldLog,
                    P = t.catalog,
                    T = t.onProductDetail,
                    w = t.filterProductId,
                    I = t.productsToShow,
                    k = t.hideIncompleteRows,
                    b = t.showProductPlaceholders,
                    O = t.seeMoreOverlay,
                    N = t.catalogEntryLabel,
                    M = t.showShopsLogo,
                    D = (0, r.useContext)(l.default);
                (0, r.useEffect)((function() {
                    E && null != P && (0, f.logBusinessProfileCatalogView)({
                        catalogOwnerWid: P.id,
                        catalogContext: (0, h.getProductCatalogContext)(D)
                    })
                }), []);
                var A = null == N ? null : (0, S.jsx)("div", {
                        className: i.default.catalogEntryButton,
                        children: (0, S.jsx)(o.default, {
                            a8nText: "catalog-entry-button",
                            type: "secondary",
                            onClick: function() {
                                return e((0, h.getProductCatalogContext)(D))
                            },
                            children: N
                        })
                    }),
                    R = function() {
                        var t, a = [],
                            n = I,
                            r = void 0;
                        if ((0, d.canSeeBizProfileV3)() && (r = "largeGallerySpacing"), null != P ? (t = P.productCollection, a = P.productCollection.getProductModels(), k && a.length > 3 && (n = Math.min(I, a.length - a.length % 3)), a = (a = a.slice(0, n + 1)).filter((function(t) {
                                return t.id.toString() !== w
                            })).map((function(t, e) {
                                var a, o, i = null === (a = t.getPreviewImage()) || void 0 === a ? void 0 : a.mediaData;
                                return i ? (O && e === n - 1 && P.productCollection.length > n - 1 && (o = c.default.t(1615)), (0, S.jsx)(_.default, {
                                    onClick: function() {
                                        return function(t) {
                                            E && (0, f.logProfileProductClick)({
                                                product: (0, v.unproxy)(t),
                                                catalogContext: (0, h.getProductCatalogContext)(D)
                                            }), T(t)
                                        }(t)
                                    },
                                    mediaData: i,
                                    overlayContent: o,
                                    theme: r
                                }, t.id.toString())) : (0, S.jsx)(S.Fragment, {})
                            })).slice(0, n)) : (t = new m.default).add({
                                id: "_ph"
                            }), !a.length && !b) return null;
                        for (var o, i = x.addIcon; b && a.length < n;) a.push((0, S.jsx)(C.default, {
                            onClick: function() {
                                return e((0, h.getProductCatalogContext)(D))
                            },
                            title: c.default.t(3),
                            xstyle: [i, "largeGallerySpacing" === r && x.largeGallerySpacing],
                            children: (0, S.jsx)(S.Fragment, {})
                        }, `_ph${a.length}`)), i = x.placeholderThumb;
                        return (0, d.canSeeBizProfileV3)() && (o = "space-between"), (0, S.jsx)(p.default, {
                            productMedias: a,
                            mediaCollection: t,
                            justify: o
                        })
                    }(),
                    L = n ? (0, S.jsx)(u.FlexItem, {
                        xstyle: x.subtitle,
                        children: n
                    }) : null,
                    F = (0, S.jsxs)(u.FlexRow, {
                        align: "center",
                        children: [L, (0, S.jsx)(u.FlexItem, {
                            children: (0, S.jsx)(g.default, {
                                className: i.default.chevron,
                                name: "chevron-right-alt",
                                directional: !0
                            })
                        })]
                    });
                return (0, S.jsxs)(s.default, {
                    title: a || c.default.t(1520),
                    titleOnClick: function() {
                        return e((0, h.getProductCatalogContext)(D))
                    },
                    subtitle: F,
                    theme: j,
                    animation: y,
                    children: [R, A, M ? (0, S.jsx)("div", {
                        className: i.default.shopsLogo,
                        children: (0, S.jsx)(g.default, {
                            name: "fbshops",
                            display: "inline"
                        })
                    }) : null]
                })
            }
            y.defaultProps = {
                productsToShow: 6,
                sectionTheme: "padding",
                hideIncompleteRows: !1
            };
            var j = y;
            e.default = j
        },
        25721: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e, a, n = t.onBack,
                    r = t.onCancel,
                    P = t.catalog,
                    T = t.contact,
                    w = t.prompt,
                    I = t.centerDrawer,
                    k = t.onSend,
                    b = (0, o.useContext)(p.default),
                    O = function() {
                        s.default.openModal((0, j.jsx)(S.default, {
                            catalog: P,
                            onSend: k
                        }), {
                            transition: "modal-flow"
                        }), (0, v.logShareCatalogViaWALinkClick)({
                            catalogOwnerWid: P.id,
                            catalogContext: (0, C.getProductCatalogContext)(b)
                        })
                    },
                    N = (0, j.jsx)(d.default, {
                        id: T.id,
                        size: 82,
                        quality: d.DETAIL_IMAGE_QUALITY.HIGH
                    });
                I && (e = "labels", a = "center-column");
                return (0, j.jsxs)(c.default, {
                    theme: e,
                    children: [(0, j.jsx)(h.default, {
                        a8n: "catalog-link-title",
                        title: m.default.t(551),
                        onBack: n,
                        onCancel: r,
                        type: h.DRAWER_HEADER_TYPE.SMALL
                    }), (0, j.jsxs)(f.default, {
                        theme: a,
                        children: [(0, j.jsx)("div", {
                            className: i.default.prompt,
                            children: w
                        }), (0, j.jsx)(l.default, {
                            image: N,
                            primary: (0, j.jsx)(g.default, {
                                contact: T,
                                useVerifiedName: !0
                            }),
                            theme: "identity",
                            secondary: (0, j.jsx)(_.default, {
                                id: E,
                                href: (0, y.createCatalogLink)(P.id.user),
                                onClick: function(t) {
                                    t.preventDefault(), O()
                                },
                                noHandle: !0
                            })
                        }), (0, j.jsx)(x.default, {
                            onClick: O
                        }), (0, j.jsx)(u.default, {
                            elementId: E,
                            onClick: function() {
                                (0, v.logShareCatalogCopyLinkClick)({
                                    catalogOwnerWid: P.id,
                                    catalogContext: (0, C.getProductCatalogContext)(b)
                                })
                            }
                        })]
                    })]
                }, "catalog-link-drawer")
            };
            var o = a(67294),
                i = r(a(73040)),
                l = r(a(88186)),
                s = r(a(65901)),
                u = r(a(22261)),
                d = n(a(66834)),
                c = r(a(53187)),
                f = r(a(18345)),
                p = r(a(96706)),
                h = n(a(19288)),
                m = r(a(45159)),
                _ = r(a(3968)),
                v = a(10951),
                g = r(a(1191)),
                C = a(49942),
                S = r(a(46070)),
                x = r(a(59782)),
                y = a(91240),
                j = a(85893),
                E = "catalog-link-anchor"
        },
        76816: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
                return s.apply(this, arguments)
            };
            var r = n(a(87757)),
                o = n(a(48926)),
                i = n(a(96466)),
                l = a(2629);

            function s() {
                return (s = (0, o.default)(r.default.mark((function t(e) {
                    var a, n, o;
                    return r.default.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if ((0, l.cartPropEnabled)()) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", !1);
                            case 2:
                                if ((n = i.default.get(e)) && !n.stale) {
                                    t.next = 8;
                                    break
                                }
                                return t.next = 6, i.default.update(e);
                            case 6:
                                o = t.sent, n = Array.isArray(o) ? o[0] : o;
                            case 8:
                                return t.abrupt("return", (null === (a = n.profileOptions) || void 0 === a ? void 0 : a.cartEnabled) || !1);
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        24128: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = t.contactId,
                    a = t.onSendProduct,
                    n = t.onReportProduct,
                    r = t.onProductLinkClick,
                    C = t.onProductMoreInformation,
                    S = t.onCartClick,
                    x = t.cartCount,
                    y = t.catalogId,
                    j = (0, o.useContext)(l.default);
                return (0, g.jsxs)(g.Fragment, {
                    children: [function() {
                        if (S && y) {
                            var t = (0, v.isNumber)(x) && x > 0 ? x.toString() : void 0,
                                e = (0, p.getOnCartClickWithLog)(S, y, (0, m.getProductCatalogContext)(j));
                            return (0, g.jsx)(h.MenuBarItem, {
                                a8nText: "menu-bar-cart-link",
                                icon: (0, g.jsx)(i.default, {}),
                                text: t,
                                title: c.default.t(490),
                                onClick: e
                            })
                        }
                        return null
                    }(), (0, g.jsx)(h.MenuBarItem, {
                        a8nText: "menu-bar-product-link",
                        icon: (0, g.jsx)(f.default, {}),
                        title: c.default.t(1497),
                        onClick: r
                    }), (0, g.jsx)(h.MenuBarItem, {
                        a8nText: "menu-bar-menu",
                        icon: (0, g.jsx)(_.default, {
                            name: "menu"
                        }),
                        title: c.default.t(1246),
                        children: (0, g.jsxs)(s.default, {
                            type: "dropdown_menu",
                            flipOnRTL: !0,
                            dirX: s.DirX.LEFT,
                            children: [(0, g.jsx)(u.default, {
                                a8n: "mi-send menu-item",
                                action: a,
                                children: c.default.t(1644)
                            }), (0, d.canSeeECommerceComplianceIndiaUserJourney)(e) && (0, g.jsx)(u.default, {
                                a8n: "mi-send menu-item",
                                action: C,
                                children: c.default.t(1493)
                            }), (0, g.jsx)(u.default, {
                                a8n: "mi-report menu-item",
                                action: n,
                                children: c.default.t(1548)
                            })]
                        }, "ProductDetailHeader")
                    })]
                })
            };
            var o = a(67294),
                i = r(a(10114)),
                l = r(a(96706)),
                s = n(a(98169)),
                u = r(a(94680)),
                d = a(2629),
                c = r(a(45159)),
                f = r(a(36387)),
                p = a(11613),
                h = a(91823),
                m = a(49942),
                _ = r(a(7665)),
                v = a(82118),
                g = a(85893)
        },
        50317: (t, e, a) => {
            "use strict";
            var n = a(20862);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.parseErrorState = function(t, e) {
                if (t instanceof o.Unmount);
                else if (t instanceof r.ServerStatusCodeError) "not_found" === t.status || 404 === t.status ? e("NOT_FOUND") : (e("ERROR"), __LOG__(3)`parseErrorState:Failed to fetch from server`);
                else {
                    if (!(t instanceof r.WebdDrop)) throw e("ERROR"), t;
                    e("ERROR"), __LOG__(3)`parseErrorState:Failed to fetch due to WebdDrop`
                }
            };
            var r = a(59175),
                o = n(a(18286))
        },
        29661: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = t.fetchState;
                switch (e) {
                    case "NONE":
                    case "SUCCESS":
                        return null;
                    case "PENDING":
                        return (0, d.jsxs)("div", {
                            className: (0, o.default)(l.default.loadingContainer),
                            children: [(0, d.jsx)(s.default, {
                                size: 14,
                                color: s.colorOptions.highlight
                            }), (0, d.jsx)(u.TextSpan, {
                                className: (0, o.default)(l.default.text, l.default.loadingText),
                                theme: "small",
                                children: i.default.t(1519)
                            })]
                        });
                    case "NOT_FOUND":
                    case "ERROR":
                        return (0, d.jsx)("div", {
                            className: (0, o.default)(l.default.loadingContainer),
                            children: (0, d.jsx)(u.TextSpan, {
                                className: l.default.text,
                                theme: "small",
                                color: "danger",
                                children: "NOT_FOUND" === e ? i.default.t(1505) : i.default.t(1476)
                            })
                        });
                    default:
                        throw new Error(`invalid fetchState ${e}`)
                }
            };
            var o = r(a(94184)),
                i = r(a(45159)),
                l = r(a(35769)),
                s = n(a(85651)),
                u = a(22552),
                d = a(85893)
        },
        36387: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                return (0, s.jsx)(l.default, {
                    name: "link",
                    className: (0, o.default)(i.default.linkIcon, (0, r.default)({}, i.default.inheritColor, "inherit-color" === t.theme))
                })
            };
            var r = n(a(59713)),
                o = n(a(94184)),
                i = n(a(52160)),
                l = n(a(7665)),
                s = a(85893)
        },
        3968: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = t.id,
                    a = t.href,
                    n = t.onClick,
                    l = t.noHandle;
                return (0, i.jsx)("span", {
                    className: r.default.linkContainer,
                    children: (0, i.jsx)(o.SelectableLink, {
                        id: e,
                        href: a,
                        className: r.default.activeLink,
                        selectable: !0,
                        onClick: n,
                        "data-nohandle": l,
                        children: a
                    })
                })
            };
            var r = n(a(78097)),
                o = a(96197),
                i = a(85893)
        },
        9812: (t, e, a) => {
            "use strict";
            var n = a(52108).default,
                r = a(20862),
                o = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.handleProductDelete = function(t, e, a) {
                return (0, p.logDeleteProductClick)(e, 1, a), new n((function(n, r) {
                    d.default.openModal((0, x.jsx)(c.default, {
                        title: f.default.t(528),
                        okText: f.default.t(2125),
                        cancelText: f.default.t(1938),
                        onOK: function() {
                            d.default.closeModal(),
                                function() {
                                    return y.apply(this, arguments)
                                }(t, e, a).then((function(t) {
                                    return n(t)
                                })).catch((function(t) {
                                    return r(t)
                                }))
                        },
                        onCancel: function() {
                            d.default.closeModal(), n(!1)
                        },
                        children: (0, x.jsx)("div", {
                            children: f.default.t(527)
                        })
                    }))
                }))
            }, e.handleProductVisibilityChange = function(t, e, a) {
                var r = e.id.toString(),
                    o = !e.isHidden;
                o ? (0, p.logCatalogProductHideClick)(r, a) : (0, p.logCatalogProductShowClick)(r, a);
                return new n((function(n, i) {
                    var l = e.isHidden ? f.default.t(548) : f.default.t(539);
                    d.default.openModal((0, x.jsx)(c.default, {
                        okText: f.default.t(2125),
                        cancelText: f.default.t(1938),
                        onOK: function() {
                            d.default.closeModal(),
                                function() {
                                    return j.apply(this, arguments)
                                }(t, e).then((function() {
                                    o ? (0, p.logCatalogProductHideSuccess)(r, a) : (0, p.logCatalogProductShowSuccess)(r, a), n(!0)
                                })).catch((function(t) {
                                    o ? (0, p.logCatalogProductHideFailed)(r, a) : (0, p.logCatalogProductShowFailed)(r, a), i(t)
                                }))
                        },
                        onCancel: function() {
                            d.default.closeModal(), o ? (0, p.logCatalogProductHideCancelled)(r, a) : (0, p.logCatalogProductShowCancelled)(r, a), n(!1)
                        },
                        children: (0, x.jsx)("div", {
                            children: l
                        })
                    }))
                }))
            }, e.handleCollectionDelete = function(t, e, a) {
                return new n((function(n, r) {
                    d.default.openModal((0, x.jsx)(c.default, {
                        title: f.default.t(515),
                        okText: f.default.t(2125),
                        cancelText: f.default.t(1938),
                        onOK: function() {
                            d.default.closeModal(),
                                function() {
                                    return E.apply(this, arguments)
                                }(t, e, a).then((function(t) {
                                    return n(t)
                                })).catch((function(t) {
                                    return r(t)
                                }))
                        },
                        onCancel: function() {
                            d.default.closeModal(), n(!1)
                        },
                        children: (0, x.jsx)("div", {
                            children: f.default.t(513)
                        })
                    }))
                }))
            }, e.handleCollectionSave = function(t, e, a, n, r, o) {
                return (e ? (0, g.editCollection)(e.id.toString() || "", a === e.name ? void 0 : a, !1, n.map((function(t) {
                    return t.id.toString()
                })), r.map((function(t) {
                    return t.id.toString()
                })), o.session.toString()).then((function(o) {
                    return e.name = a, e.reviewStatus = o.reviewStatus, t.collections.replaceId(e.id, o.id), 0 === n.length && 0 === r.length || (e.productCollection.reset(), e.afterCursor = void 0, t.collections.reset(), t.collections.afterCursor = ""), !0
                })) : (0, g.createCollection)(a, n.map((function(t) {
                    return t.id.toString()
                })), o.session.toString()).then((function(e) {
                    return (0, h.logCollectionCreated)({
                        catalogContext: o,
                        collectionId: e.id,
                        productCount: n.length
                    }), t.collections.reset(), t.collections.afterCursor = "", !0
                }))).catch((function(t) {
                    var e = f.default.t(526);
                    return "not-acceptable" === t.text ? ("products" === t.fieldName && "duplicate" === t.fieldReason && (e = f.default.t(524)), "collection" === t.fieldName && "empty" === t.fieldReason && (e = f.default.t(525))) : (__LOG__(4, !0, new Error, !0)`Failed to save collection, error: ${t}`, SEND_LOGS("Saving collection failed")), d.default.openToast((0, x.jsx)(C.default, {
                        msg: e,
                        id: (0, C.genId)("catalog_save_collection_failed")
                    })), !1
                }))
            }, e.handleCollectionAppeal = function() {
                return P.apply(this, arguments)
            };
            var i = o(a(319)),
                l = o(a(87757)),
                s = o(a(48926)),
                u = a(18077),
                d = o(a(65901)),
                c = o(a(86777)),
                f = o(a(45159)),
                p = a(10951),
                h = a(73475),
                m = a(61689),
                _ = a(18756),
                v = a(67315),
                g = a(391),
                C = r(a(92428)),
                S = a(59175),
                x = a(85893);

            function y() {
                return (y = (0, s.default)(l.default.mark((function t(e, a, n) {
                    return l.default.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, (0, m.deleteProducts)([a.id.toString()]);
                            case 3:
                                return (0, p.logDeleteProductSuccess)(a, 1, n), e.productCollection.evictImagesFromCache(a.id.toString()), e.productCollection.remove(a.id.toString()), e.collections && e.collections.forEach((function(t) {
                                    return t.productCollection.remove(a.id.toString())
                                })), t.abrupt("return", !0);
                            case 10:
                                return t.prev = 10, t.t0 = t.catch(0), t.abrupt("return", (0, u.filteredCatch)(S.ServerStatusCodeError, (function(t) {
                                    return (0, p.logDeleteProductFailed)(a, 1, n, t.statusCode), d.default.openToast((0, x.jsx)(C.default, {
                                        msg: f.default.t(529),
                                        id: (0, C.genId)("catalog_delete_product_failed")
                                    })), !1
                                }))(t.t0));
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 10]
                    ])
                })))).apply(this, arguments)
            }

            function j() {
                return (j = (0, s.default)(l.default.mark((function t(e, a) {
                    return l.default.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, (0, _.productVisibilitySet)([{
                                    productId: a.id.toString(),
                                    isHidden: !a.isHidden
                                }]);
                            case 2:
                                a.isHidden = !a.isHidden, [e.productCollection].concat((0, i.default)((e.collections || []).map((function(t) {
                                    return t.productCollection
                                })))).forEach((function(t) {
                                    var e = t.get(a.id);
                                    e && (e.isHidden = a.isHidden)
                                }));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function E() {
                return (E = (0, s.default)(l.default.mark((function t(e, a, n) {
                    return l.default.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, (0, g.deleteCollection)(a.id.toString(), n.session.sessionId.toString());
                            case 3:
                                return e.collections.remove(a.id.toString()), (0, h.logCollectionDeleted)({
                                    catalogContext: n,
                                    collectionId: a.id
                                }), t.abrupt("return", !0);
                            case 8:
                                return t.prev = 8, t.t0 = t.catch(0), t.abrupt("return", (0, u.filteredCatch)(S.ServerStatusCodeError, (function(t) {
                                    return __LOG__(4, !0, new Error, !0)`Failed to delete collection, error: ${t}`, SEND_LOGS("Deleteing collection failed"), d.default.openToast((0, x.jsx)(C.default, {
                                        msg: f.default.t(512),
                                        id: (0, C.genId)("catalog_delete_product_failed")
                                    })), !1
                                }))(t.t0));
                            case 11:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 8]
                    ])
                })))).apply(this, arguments)
            }

            function P() {
                return (P = (0, s.default)(l.default.mark((function t(e, a) {
                    return l.default.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, (0, g.appealCollection)(e.id.toString(), a);
                            case 2:
                                e.set({
                                    canAppeal: !1,
                                    reviewStatus: v.PRODUCT_REVIEW_STATUS.PENDING
                                });
                            case 3:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        67482: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e, a = t.onClick,
                    n = (0, o.default)(i.default.addItemButton, (e = {}, (0, r.default)(e, i.default.themeDefault, "default" === t.theme), (0, r.default)(e, i.default.themeInList, "in-list" === t.theme), (0, r.default)(e, i.default.themeCollections, "collections" === t.theme), e)),
                    f = (0, d.jsx)(u.default, {
                        title: s.default.t(506),
                        onClick: function() {},
                        xstyle: c.addIcon,
                        children: (0, d.jsx)(d.Fragment, {})
                    });
                return (0, d.jsx)(l.default, {
                    theme: "add-item",
                    image: f,
                    customImage: !0,
                    primary: t.title || s.default.t(506),
                    className: n,
                    onClick: a,
                    idle: t.idle,
                    a8n: "add-item"
                })
            };
            var r = n(a(59713)),
                o = n(a(94184)),
                i = (n(a(56720)), n(a(26886))),
                l = n(a(88186)),
                s = n(a(45159)),
                u = n(a(76080)),
                d = a(85893),
                c = {
                    addIcon: {
                        position: "g0rxnol2",
                        width: "o22r6p4i",
                        height: "dng4fqht",
                        borderTop: "btoh1681",
                        borderEnd: "sngpozrj",
                        borderBottom: "c2eze1zb",
                        borderStart: "bd2x2sk5",
                        borderTopStartRadius: "l147y7tb",
                        borderTopEndRadius: "mjscftrx",
                        borderBottomEndRadius: "fqwk616h",
                        borderBottomStartRadius: "pkud3j3x",
                        ":focus": {
                            borderTopStartRadius: "mmjxyicr",
                            borderTopEndRadius: "r1jx4bdh",
                            borderBottomEndRadius: "f9yclydc",
                            borderBottomStartRadius: "mtzt60z0",
                            boxShadow: "esbo3we0"
                        },
                        "::before": {
                            position: "jiaumjzp",
                            top: "iu8zqbur",
                            left: "c4kjmepz",
                            display: "chh99fau",
                            width: "ln1ej6zg",
                            height: "i0a739jv",
                            content: "ckfn5qle",
                            backgroundColor: "t4c1fkc8",
                            transform: "bsbo06yw"
                        },
                        "::after": {
                            position: "tkubpkrc",
                            top: "khfyavfg",
                            left: "nly7wueh",
                            display: "l1wvjj35",
                            width: "dbiwaw4z",
                            height: "l9a7srmz",
                            content: "lw9p9708",
                            backgroundColor: "sadoqatt",
                            transform: "n2obx7p9"
                        }
                    }
                }
        },
        81788: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getCollectionIntegrityHeight = function(t) {
                return (0, d.canAppealCollections)() && t.reviewStatus === p.PRODUCT_REVIEW_STATUS.REJECTED ? 2 * u.default.PRODUCT_LIST_ITEM_HEIGHT + 10 : u.default.PRODUCT_LIST_ITEM_HEIGHT + 10
            }, e.default = function(t) {
                var e = t.collection,
                    a = t.onEditCollection,
                    n = (0, m.jsx)("div", {
                        className: l.default.iconContainerRejected,
                        children: (0, m.jsx)(h.default, {
                            name: "info"
                        })
                    }),
                    u = function() {
                        a && a(e)
                    },
                    _ = function() {
                        i.default.openModal((0, m.jsx)(r.default, {
                            collection: e
                        }))
                    };
                switch (e.reviewStatus) {
                    case p.PRODUCT_REVIEW_STATUS.PENDING:
                        return (0, m.jsxs)("div", {
                            className: l.default.pendingBanner,
                            children: [c.default.t(617), (0, m.jsx)("div", {
                                className: l.default.iconContainerPending,
                                children: (0, m.jsx)(h.default, {
                                    name: "info"
                                })
                            })]
                        });
                    case p.PRODUCT_REVIEW_STATUS.REJECTED:
                        return (0, d.canAppealCollections)() ? function() {
                            var t = (e.rejectReason || "other_violation").toLowerCase(),
                                a = (0, s.default)(t, e.commerceUrl),
                                r = (0, m.jsx)(o.default, {
                                    onClick: u,
                                    children: c.default.t(668)
                                });
                            if (e.canAppeal) {
                                var i = (0, m.jsx)(o.default, {
                                        onClick: _,
                                        children: c.default.t(669)
                                    }),
                                    d = (0, m.jsx)(f.default, {
                                        id: 633,
                                        params: {
                                            rename_collection_link: r,
                                            request_another_review_link: i
                                        }
                                    });
                                return (0, m.jsxs)("div", {
                                    className: l.default.rejectedBannerWithAppeal,
                                    children: [a.first, (0, m.jsx)("br", {}), d, n]
                                })
                            }
                            var p = (0, m.jsx)(f.default, {
                                id: 684,
                                params: {
                                    rename_collection_link: r
                                }
                            });
                            return (0, m.jsxs)("div", {
                                className: l.default.rejectedBannerWithAppeal,
                                children: [a.second, (0, m.jsx)("br", {}), p, n]
                            })
                        }() : (0, m.jsxs)("div", {
                            className: l.default.rejectedBanner,
                            children: [c.default.t(643), (0, m.jsx)(o.default, {
                                onClick: u,
                                children: c.default.t(644)
                            }), n]
                        });
                    default:
                        return null
                }
            };
            var r = n(a(7551)),
                o = n(a(81288)),
                i = n(a(65901)),
                l = n(a(7105)),
                s = n(a(87096)),
                u = n(a(94253)),
                d = a(2629),
                c = n(a(45159)),
                f = n(a(62848)),
                p = a(67315),
                h = n(a(7665)),
                m = a(85893)
        },
        69219: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = t.onProductDetail,
                    a = t.onProductShare,
                    n = t.onCartOpen,
                    C = t.shareLinks,
                    S = t.canManageCatalog,
                    x = (0, o.useState)(void 0),
                    y = (0, r.default)(x, 2),
                    j = y[0],
                    E = y[1],
                    P = (0, v.default)(t.catalog, ["productCollection", "afterCursor", "id", "index"]),
                    T = function(t) {
                        a && a(t)
                    };
                if (!P.productCollection || !P.productCollection.getProductModels(t.canManageCatalog).length) return null;
                return (0, g.jsx)(c.default, {
                    flatListControllers: [t.flatListController],
                    children: (0, g.jsx)(d.default, {
                        flatListController: t.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: (w = void 0 !== n, P.productCollection.getProductModels(S).map((function(t) {
                            return {
                                itemKey: `${t.id.toString()}_${w.toString()}`,
                                product: t
                            }
                        }))),
                        renderItem: function(t) {
                            var a = t.product;
                            return (0, g.jsx)(u.default.Consumer, {
                                children: function(t) {
                                    var r = (0, h.getProductCatalogContext)(t);
                                    return (0, g.jsx)(m.default, {
                                        product: a,
                                        onCartOpen: n,
                                        onClick: function() {
                                            return function(t, a) {
                                                return (0, p.logCatalogListDetailClick)({
                                                    product: (0, _.unproxy)(t),
                                                    catalogContext: a
                                                }), E(t.id.toString()), e(t)
                                            }(a, r)
                                        },
                                        onProductShare: C ? T : null,
                                        onProductDelete: function(t) {
                                            return function(t, e) {
                                                (0, i.handleProductDelete)(P, t, e).then((function() {
                                                    t.id === j && (l.default.closeDrawerMid(), E(void 0))
                                                }))
                                            }(t, r)
                                        },
                                        onProductHideShow: function(t) {
                                            return function(t, e) {
                                                (0, i.handleProductVisibilityChange)(P, t, e)
                                            }(t, r)
                                        },
                                        canManageCatalog: S
                                    })
                                }
                            })
                        },
                        defaultItemHeight: s.default.PRODUCT_LIST_ITEM_HEIGHT,
                        keyOrder: f.KeyOrder.INVERSE
                    })
                });
                var w
            };
            var r = n(a(63038)),
                o = a(67294),
                i = a(9812),
                l = n(a(65901)),
                s = n(a(94253)),
                u = n(a(96706)),
                d = n(a(73568)),
                c = n(a(23803)),
                f = a(69725),
                p = a(10951),
                h = a(49942),
                m = n(a(98166)),
                _ = a(68220),
                v = n(a(69283)),
                g = a(85893)
        },
        87105: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = e.CatalogViewDrawer = void 0;
            var o = r(a(87757)),
                i = r(a(48926)),
                l = r(a(34575)),
                s = r(a(93913)),
                u = r(a(2205)),
                d = r(a(99842)),
                c = r(a(96486)),
                f = a(67294),
                p = r(a(40501)),
                h = a(59566),
                m = r(a(67482)),
                _ = r(a(41325)),
                v = r(a(72843)),
                g = r(a(18330)),
                C = r(a(53043)),
                S = r(a(70130)),
                x = a(52716),
                y = r(a(23628)),
                j = r(a(76816)),
                E = r(a(94253)),
                P = r(a(53187)),
                T = r(a(18345)),
                w = n(a(19288)),
                I = a(50317),
                k = r(a(29661)),
                b = r(a(92546)),
                O = r(a(5029)),
                N = r(a(38032)),
                M = r(a(45159)),
                D = r(a(63641)),
                A = r(a(94786)),
                R = r(a(14571)),
                L = r(a(5202)),
                F = r(a(61897)),
                B = a(85893),
                U = function(t) {
                    (0, u.default)(n, t);
                    var e, a = (0, d.default)(n);

                    function n(t) {
                        var e;
                        (0, l.default)(this, n), (e = a.call(this, t))._catalogFlatListController = new b.default, e._handleScroll = function(t, a) {
                            var n, r;
                            e.props.setScrollOffset && e.props.setScrollOffset(a.scrollTop), (null === (n = e.state.scrollHelper) || void 0 === n ? void 0 : n.willLoadMore(a)) && e.setState({
                                loadingMore: !0
                            }), null === (r = e.state.scrollHelper) || void 0 === r || r.onScroll(t, a).then((function(t) {
                                t && e.setState({
                                    loadingMore: !1
                                })
                            })).catch((function(t) {
                                throw e.setState({
                                    loadingMore: !1
                                }), t
                            }))
                        }, e.handleScroll = c.default.throttle(e._handleScroll, 100), e.onScroll = function(t) {
                            e.handleScroll(t, t.currentTarget)
                        }, e._handleCartChange = function() {
                            var t = e.state.cart.itemCount;
                            e.state.cartCount !== t && e.setState({
                                cartCount: t
                            })
                        }, e._handleCartClick = function() {
                            var t = e.props,
                                a = t.contact,
                                n = t.onCartClick;
                            n && n(a.id.toString())
                        }, e._handleCatalogLinkClick = function() {
                            var t = e.state.catalog,
                                a = e.props,
                                n = a.onCatalogLinkClick,
                                r = a.contact;
                            t && n(t, r)
                        };
                        var r = _.default.findCart(e.props.contact.id.toString());
                        return e.state = {
                            cartEnabled: !1,
                            catalog: null,
                            cartCount: r.itemCount,
                            catalogFetchState: "NONE",
                            dataSource: null,
                            scrollHelper: null,
                            loadingMore: !0,
                            cart: r
                        }, e
                    }
                    return (0, s.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this,
                                e = this.props,
                                a = e.catalogId,
                                n = e.listeners;
                            this._setupCatalog(), (0, j.default)(a).then((function(e) {
                                t.setState({
                                    cartEnabled: e
                                }), e && n.add(t.state.cart, "all", t._handleCartChange)
                            }))
                        }
                    }, {
                        key: "_setupCatalog",
                        value: function() {
                            var t = this,
                                e = this.props,
                                a = e.catalogId,
                                n = e.rejectOnUnmount,
                                r = e.canManageCatalog,
                                o = e.scrollOffset;
                            g.default.find(a).checkpoint(n()).then((function(e) {
                                var a = new x.CatalogWithCollectionsDataSource(e, r || !1, E.default.PRODUCT_LIST_ITEM_HEIGHT),
                                    n = new x.CatalogListItemScrollHelper(a);
                                t.setState({
                                    catalog: e,
                                    dataSource: a,
                                    scrollHelper: n,
                                    catalogFetchState: "SUCCESS"
                                }, (function() {
                                    t.loadInitialItems(), t._watchProductCollection(), void 0 !== o && t._catalogFlatListController.setScrollFromStart(o)
                                }))
                            })).catch((function(e) {
                                (0, I.parseErrorState)(e, (function(e) {
                                    return t.setState({
                                        catalogFetchState: e,
                                        loadingMore: !1
                                    })
                                }))
                            }))
                        }
                    }, {
                        key: "_watchProductCollection",
                        value: function() {
                            var t = this,
                                e = this.state.catalog;
                            this.props.autoUpdate && null != e && (e.productCollection.on("add", c.default.debounce((function() {
                                return t.forceUpdate()
                            }), 100)), e.productCollection.on("remove", c.default.debounce((function() {
                                return t.forceUpdate()
                            }), 100)), e.collections.on("add", c.default.debounce((function() {
                                return t.forceUpdate()
                            }), 100)), e.collections.on("remove", c.default.debounce((function() {
                                return t.forceUpdate()
                            }), 100)))
                        }
                    }, {
                        key: "_getDrawerContent",
                        value: function() {
                            var t, e, a, n, r = this.state,
                                o = r.catalog,
                                i = r.cartEnabled,
                                l = r.dataSource,
                                s = this.props,
                                u = s.contact,
                                d = s.businessProfile,
                                c = s.canManageCatalog,
                                f = s.onAddProduct,
                                _ = s.onCartClick,
                                g = s.onEditCollection,
                                C = i && _ ? this._handleCartClick : void 0;
                            (c && f && (t = (0, B.jsx)(m.default, {
                                onClick: function() {
                                    return f()
                                },
                                theme: "collections"
                            })), o && c && g) && (e = o.productCollection.getProductModels(!0).some((function(t) {
                                return !t.isHidden && "REJECTED" !== t.reviewStatus
                            })) ? (0, B.jsx)(m.default, {
                                onClick: function() {
                                    g(null)
                                },
                                theme: "collections",
                                title: M.default.t(519)
                            }) : null);
                            return o && l ? (a = (0, B.jsx)(A.default, {
                                onCartOpen: C,
                                onProductDetail: this.props.onProductDetail,
                                flatListController: this._catalogFlatListController,
                                catalog: o,
                                canManageCatalog: this.props.canManageCatalog,
                                shareLinks: this.props.canManageCatalog,
                                onProductShare: this.props.onProductShare,
                                onCollectionSeeAll: this.props.onCollectionSeeAll,
                                data: l.getData(),
                                onEditCollection: this.props.onEditCollection
                            }), N.default.supportsFeature(N.default.F.MD_BACKEND) && c && ((0, h.getABPropConfigValue)("web_abprop_nux_cart_interstitial") && i && (0, v.default)(), n = (0, B.jsx)(S.default, {
                                onOpenCollections: this.props.onOpenCollections
                            }))) : a = (0, B.jsx)(k.default, {
                                fetchState: this.state.catalogFetchState
                            }), (0, B.jsxs)(B.Fragment, {
                                children: [d && (0, B.jsx)("div", {
                                    "data-a8n": p.default.key("catalog-header"),
                                    className: y.default.header,
                                    children: (0, B.jsx)(R.default, {
                                        profilePicThumb: u.getProfilePicThumb(),
                                        contact: u,
                                        businessProfile: d
                                    })
                                }), (0, B.jsxs)("div", {
                                    "data-a8n": p.default.key("catalog-items"),
                                    className: y.default.list,
                                    children: [n, t, e, a, this.state.loadingMore && (0, B.jsx)(O.default, {})]
                                })]
                            })
                        }
                    }, {
                        key: "loadInitialItems",
                        value: (e = (0, i.default)(o.default.mark((function t() {
                            var e;
                            return o.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e = this.state.dataSource, t.next = 3, null == e ? void 0 : e.loadInitialItems();
                                    case 3:
                                        this.setState({
                                            loadingMore: !1
                                        });
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "_renderDrawerMenu",
                        value: function() {
                            var t = this.state.cartEnabled ? this._handleCartClick : void 0;
                            return (0, B.jsx)(C.default, {
                                onSendCatalog: this._handleCatalogLinkClick,
                                onCartClick: t,
                                cartCount: this.state.cart.itemCount,
                                catalogId: this.props.catalogId.toString(),
                                canManageCatalog: this.props.canManageCatalog,
                                onOpenCollections: this.props.onOpenCollections,
                                onOpenSettings: this.props.onOpenSettings
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return (0, B.jsxs)(P.default, {
                                theme: "products",
                                onDrop: this.props.onBack,
                                children: [(0, B.jsx)(w.default, {
                                    title: M.default.t(1477),
                                    type: this.props.headerType || w.DRAWER_HEADER_TYPE.SMALL,
                                    onBack: this.props.onBack,
                                    menu: this._renderDrawerMenu(),
                                    focusBackOrCancel: !0
                                }), (0, B.jsx)(T.default, {
                                    onScroll: this.onScroll,
                                    flatListControllers: [this._catalogFlatListController],
                                    children: this._getDrawerContent()
                                })]
                            })
                        }
                    }]), n
                }(f.Component);
            e.CatalogViewDrawer = U, U.CONCERNS = {
                contact: ["id"]
            }, U.displayName = "CatalogViewDrawer";
            var V = (0, L.default)((0, D.default)((0, F.default)(U, U.CONCERNS)));
            e.default = V
        },
        44271: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = e.CollectionContentDrawer = void 0;
            var o = r(a(87757)),
                i = r(a(48926)),
                l = r(a(34575)),
                s = r(a(93913)),
                u = r(a(2205)),
                d = r(a(99842)),
                c = r(a(96486)),
                f = a(67294),
                p = r(a(67482)),
                h = r(a(41325)),
                m = r(a(18330)),
                _ = r(a(53043)),
                v = a(52716),
                g = r(a(76816)),
                C = r(a(83669)),
                S = r(a(81788)),
                x = r(a(94253)),
                y = r(a(53187)),
                j = r(a(18345)),
                E = r(a(96706)),
                P = n(a(19288)),
                T = a(50317),
                w = r(a(29661)),
                I = r(a(92546)),
                k = r(a(5029)),
                b = r(a(45159)),
                O = r(a(63641)),
                N = a(73475),
                M = a(49942),
                D = r(a(94786)),
                A = r(a(5202)),
                R = r(a(61897)),
                L = a(85893),
                F = function(t) {
                    (0, u.default)(n, t);
                    var e, a = (0, d.default)(n);

                    function n(t) {
                        var e;
                        (0, l.default)(this, n), (e = a.call(this, t))._collectionFlatListController = new I.default, e._handleCartChange = function() {
                            var t = e.state.cart.itemCount;
                            e.state.cartCount !== t && e.setState({
                                cartCount: t
                            })
                        }, e._handleCartClick = function() {
                            var t = e.props,
                                a = t.contact,
                                n = t.onCartClick;
                            n && n(a.id.toString())
                        }, e._handleCatalogLinkClick = function() {
                            var t = e.state.catalog;
                            if (t) {
                                var a = e.props;
                                (0, a.onCatalogLinkClick)(t, a.contact)
                            }
                        }, e._handleScroll = function(t, a) {
                            var n, r;
                            e.props.setScrollOffset && e.props.setScrollOffset(a.scrollTop), (null === (n = e.state.scrollHelper) || void 0 === n ? void 0 : n.willLoadMore(a)) && e.setState({
                                loadingMore: !0
                            }), null === (r = e.state.scrollHelper) || void 0 === r || r.onScroll(t, a).then((function(t) {
                                t && e.setState({
                                    loadingMore: !1
                                })
                            })).catch((function(t) {
                                throw e.setState({
                                    loadingMore: !1
                                }), t
                            }))
                        }, e.handleScroll = c.default.throttle(e._handleScroll, 100), e.onScroll = function(t) {
                            e.handleScroll(t, t.currentTarget)
                        };
                        var r = h.default.findCart(e.props.contact.id.toString());
                        return e.state = {
                            cartEnabled: !1,
                            catalog: null,
                            cartCount: r.itemCount,
                            catalogFetchState: "NONE",
                            dataSource: null,
                            scrollHelper: null,
                            loadingMore: !0,
                            cart: r
                        }, e
                    }
                    return (0, s.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this,
                                e = this.props,
                                a = e.catalogId,
                                n = e.listeners;
                            this._setupCatalog(), (0, g.default)(a).then((function(e) {
                                t.setState({
                                    cartEnabled: e
                                }), e && n.add(t.state.cart, "all", t._handleCartChange)
                            }))
                        }
                    }, {
                        key: "_setupCatalog",
                        value: function() {
                            var t = this,
                                e = this.props,
                                a = e.canManageCatalog,
                                n = e.catalogId,
                                r = e.rejectOnUnmount,
                                o = e.scrollOffset;
                            m.default.find(n).then((function(e) {
                                var n;
                                t.setState({
                                    catalog: e,
                                    catalogFetchState: "SUCCESS"
                                });
                                var r = new v.SingleCollectionDataSource(e, null === (n = t.props.collection) || void 0 === n ? void 0 : n.id.toString(), a || !1, x.default.PRODUCT_LIST_ITEM_HEIGHT),
                                    i = new v.CatalogListItemScrollHelper(r);
                                t.setState({
                                    dataSource: r,
                                    scrollHelper: i
                                }, (function() {
                                    t.loadInitialItems(), t._watchProductCollection(), void 0 !== o && t._collectionFlatListController.setScrollFromStart(o)
                                }))
                            })).checkpoint(r()).catch((function(e) {
                                (0, T.parseErrorState)(e, (function(e) {
                                    return t.setState({
                                        catalogFetchState: e,
                                        loadingMore: !1
                                    })
                                }))
                            }))
                        }
                    }, {
                        key: "_watchProductCollection",
                        value: function() {
                            var t = this,
                                e = this.props.collection,
                                a = this.state.catalog;
                            null != e && (e.productCollection.on("add", (function() {
                                return t.forceUpdate()
                            })), e.productCollection.on("remove", (function() {
                                return t.forceUpdate()
                            })), this.props.listeners.add(e, "change:reviewStatus canAppeal", (function() {
                                return t.forceUpdate()
                            }))), null != a && (a.productCollection.on("add", (function() {
                                return t.forceUpdate()
                            })), a.productCollection.on("remove", (function() {
                                return t.forceUpdate()
                            })), a.collections.on("add", (function() {
                                return t.forceUpdate()
                            })), a.collections.on("remove", (function() {
                                return t.forceUpdate()
                            })))
                        }
                    }, {
                        key: "_getDrawerContent",
                        value: function() {
                            var t, e = this,
                                a = this.state,
                                n = a.catalog,
                                r = a.cartEnabled,
                                o = a.dataSource,
                                i = a.catalogFetchState,
                                l = a.loadingMore,
                                s = this.props,
                                u = s.canManageCatalog,
                                d = s.onCartClick,
                                c = s.onProductDetail,
                                f = s.onProductShare,
                                h = s.collection,
                                m = r && d ? this._handleCartClick : void 0;
                            if (!n || !o) return (0, L.jsx)(w.default, {
                                fetchState: i
                            });
                            var _ = o.getData();
                            if (0 === _.length && !l && u && h) return (0, L.jsx)(L.Fragment, {
                                children: (0, L.jsxs)("div", {
                                    className: C.default.list,
                                    children: [(0, L.jsx)(p.default, {
                                        theme: "collections",
                                        onClick: function() {
                                            e.props.onEditCollection && e.props.onEditCollection(h)
                                        }
                                    }), (0, L.jsx)("div", {
                                        className: C.default.addItemsNotice,
                                        children: b.default.t(521)
                                    })]
                                })
                            });
                            var v = (0, L.jsx)(D.default, {
                                    onCartOpen: m,
                                    onProductDetail: c,
                                    flatListController: this._collectionFlatListController,
                                    catalog: n,
                                    canManageCatalog: u,
                                    shareLinks: u,
                                    onProductShare: f,
                                    collectionId: null === (t = this.props.collection) || void 0 === t ? void 0 : t.id.toString(),
                                    data: _
                                }),
                                g = this.props.collection ? (0, L.jsx)(S.default, {
                                    collection: this.props.collection,
                                    onEditCollection: this.props.onEditCollection
                                }) : void 0;
                            return (0, L.jsx)(L.Fragment, {
                                children: (0, L.jsxs)("div", {
                                    className: C.default.list,
                                    children: [g, v, l && (0, L.jsx)(k.default, {})]
                                })
                            })
                        }
                    }, {
                        key: "loadInitialItems",
                        value: (e = (0, i.default)(o.default.mark((function t() {
                            var e;
                            return o.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e = this.state.dataSource, t.next = 3, null == e ? void 0 : e.loadInitialItems();
                                    case 3:
                                        this.setState({
                                            loadingMore: !1
                                        }), (0, N.logCollectionSeeAllView)({
                                            catalogOwnerJid: this.props.catalogId.toString(),
                                            catalogContext: (0, M.getProductCatalogContext)(this.context),
                                            collectionId: null == e ? void 0 : e.collectionId
                                        });
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "_renderDrawerMenu",
                        value: function() {
                            var t = this.state.cartEnabled ? this._handleCartClick : void 0;
                            return (0, L.jsx)(_.default, {
                                onSendCatalog: this._handleCatalogLinkClick,
                                onCartClick: t,
                                cartCount: this.state.cart.itemCount,
                                catalogId: this.props.catalogId.toString(),
                                canManageCatalog: this.props.canManageCatalog
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t, e = (null === (t = this.props.collection) || void 0 === t ? void 0 : t.name) || b.default.t(613);
                            return (0, L.jsxs)(y.default, {
                                theme: "products",
                                onDrop: this.props.onBack,
                                children: [(0, L.jsx)(P.default, {
                                    title: e,
                                    type: this.props.headerType || P.DRAWER_HEADER_TYPE.SMALL,
                                    onBack: this.props.onBack,
                                    menu: this._renderDrawerMenu()
                                }), (0, L.jsx)(j.default, {
                                    flatListControllers: [this._collectionFlatListController],
                                    onScroll: this.onScroll,
                                    children: this._getDrawerContent()
                                })]
                            })
                        }
                    }]), n
                }(f.Component);
            e.CollectionContentDrawer = F, F.contextType = E.default, F.CONCERNS = {
                contact: ["id"]
            }, F.displayName = "CollectionContentDrawer";
            var B = (0, A.default)((0, O.default)((0, R.default)(F, F.CONCERNS)));
            e.default = B
        },
        14066: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e, a, n = t.collection,
                    f = t.onSeeAll,
                    p = t.allItems;
                n ? (e = n.name, a = n.id) : p && (e = s.default.t(613));
                var h = (0, c.jsx)(d.TextDiv, {
                    className: i.default.collectionName,
                    theme: "title",
                    children: (0, c.jsx)(l.default, {
                        text: e,
                        ellipsify: !0,
                        titlify: !0
                    })
                });

                function m(t) {
                    ! function(t) {
                        t.preventDefault(), t.stopPropagation()
                    }(t), f && n ? f(n) : f && f()
                }
                var _ = void 0;
                if (n) switch (n.reviewStatus) {
                    case u.PRODUCT_REVIEW_STATUS.REJECTED:
                        _ = (0, c.jsx)("span", {
                            className: i.default.reviewStateRejected,
                            children: s.default.t(615)
                        })
                }
                return (0, c.jsx)(r.default, {
                    primary: h,
                    secondary: _,
                    detail: (0, c.jsx)(o.default, {
                        onClick: m,
                        className: i.default.seeAllLink,
                        title: s.default.t(8, {
                            collectionName: e
                        }),
                        tabIndex: 0,
                        children: s.default.t(616)
                    }),
                    theme: "collection-header",
                    idle: !0,
                    className: i.default.collectionListItem
                }, a)
            };
            var r = n(a(88186)),
                o = n(a(81288)),
                i = n(a(74591)),
                l = n(a(73008)),
                s = n(a(45159)),
                u = a(67315),
                d = a(22552),
                c = a(85893)
        },
        87096: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getPolicyLink = d, e.default = function(t, e) {
                var a;
                switch (t) {
                    case "drugs":
                        return a = l.default.t(652), {
                            first: (0, u.jsx)(s.default, {
                                id: 626,
                                params: {
                                    collections_rejected_policy_drugs: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 677,
                                params: {
                                    collections_rejected_policy_drugs: d(a, e)
                                }
                            })
                        };
                    case "weapons":
                        return a = l.default.t(667), {
                            first: (0, u.jsx)(s.default, {
                                id: 642,
                                params: {
                                    collections_rejected_policy_weapons: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 693,
                                params: {
                                    collections_rejected_policy_weapons: d(a, e)
                                }
                            })
                        };
                    case "animals":
                        return a = l.default.t(647), {
                            first: (0, u.jsx)(s.default, {
                                id: 621,
                                params: {
                                    collections_rejected_policy_animals: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 672,
                                params: {
                                    collections_rejected_policy_animals: d(a, e)
                                }
                            })
                        };
                    case "alcohol":
                        return a = l.default.t(646), {
                            first: (0, u.jsx)(s.default, {
                                id: 620,
                                params: {
                                    collections_rejected_policy_alcohol: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 671,
                                params: {
                                    collections_rejected_policy_alcohol: d(a, e)
                                }
                            })
                        };
                    case "gambling":
                        return a = l.default.t(653), {
                            first: (0, u.jsx)(s.default, {
                                id: 627,
                                params: {
                                    collections_rejected_policy_gambling: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 678,
                                params: {
                                    collections_rejected_policy_gambling: d(a, e)
                                }
                            })
                        };
                    case "tobacco":
                        return a = l.default.t(665), {
                            first: (0, u.jsx)(s.default, {
                                id: 640,
                                params: {
                                    collections_rejected_policy_tobacco: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 691,
                                params: {
                                    collections_rejected_policy_tobacco: d(a, e)
                                }
                            })
                        };
                    case "overtly_sexualized_positioning":
                        return a = l.default.t(660), {
                            first: (0, u.jsx)(s.default, {
                                id: 635,
                                params: {
                                    collections_rejected_policy_overtly_sexualized_positioning: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 686,
                                params: {
                                    collections_rejected_policy_overtly_sexualized_positioning: d(a, e)
                                }
                            })
                        };
                    case "adult":
                        return a = l.default.t(645), {
                            first: (0, u.jsx)(s.default, {
                                id: 619,
                                params: {
                                    collections_rejected_policy_adult: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 670,
                                params: {
                                    collections_rejected_policy_adult: d(a, e)
                                }
                            })
                        };
                    case "supplements":
                        return a = l.default.t(663), {
                            first: (0, u.jsx)(s.default, {
                                id: 638,
                                params: {
                                    collections_rejected_policy_supplements: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 689,
                                params: {
                                    collections_rejected_policy_supplements: d(a, e)
                                }
                            })
                        };
                    case "body_parts_fluids":
                        return a = l.default.t(648), {
                            first: (0, u.jsx)(s.default, {
                                id: 622,
                                params: {
                                    collections_rejected_policy_body_parts_fluids: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 673,
                                params: {
                                    collections_rejected_policy_body_parts_fluids: d(a, e)
                                }
                            })
                        };
                    case "healthcare":
                        return a = l.default.t(655), {
                            first: (0, u.jsx)(s.default, {
                                id: 629,
                                params: {
                                    collections_rejected_policy_healthcare: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 680,
                                params: {
                                    collections_rejected_policy_healthcare: d(a, e)
                                }
                            })
                        };
                    case "misleading":
                        return a = l.default.t(658), {
                            first: (0, u.jsx)(s.default, {
                                id: 632,
                                params: {
                                    collections_rejected_policy_misleading: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 683,
                                params: {
                                    collections_rejected_policy_misleading: d(a, e)
                                }
                            })
                        };
                    case "real_fake_currency":
                        return a = l.default.t(661), {
                            first: (0, u.jsx)(s.default, {
                                id: 636,
                                params: {
                                    collections_rejected_policy_real_fake_currency: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 687,
                                params: {
                                    collections_rejected_policy_real_fake_currency: d(a, e)
                                }
                            })
                        };
                    case "digital_services_products":
                        return a = l.default.t(650), {
                            first: (0, u.jsx)(s.default, {
                                id: 624,
                                params: {
                                    collections_rejected_policy_digital_services_products: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 675,
                                params: {
                                    collections_rejected_policy_digital_services_products: d(a, e)
                                }
                            })
                        };
                    case "thrid_party_infringements":
                        return a = l.default.t(664), {
                            first: (0, u.jsx)(s.default, {
                                id: 639,
                                params: {
                                    collections_rejected_policy_thrid_party_infringements: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 690,
                                params: {
                                    collections_rejected_policy_thrid_party_infringements: d(a, e)
                                }
                            })
                        };
                    case "unauthorized_media":
                        return a = l.default.t(666), {
                            first: (0, u.jsx)(s.default, {
                                id: 641,
                                params: {
                                    collections_rejected_policy_unauthorized_media: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 692,
                                params: {
                                    collections_rejected_policy_unauthorized_media: d(a, e)
                                }
                            })
                        };
                    case "illegal_products":
                        return a = l.default.t(657), {
                            first: (0, u.jsx)(s.default, {
                                id: 631,
                                params: {
                                    collections_rejected_policy_illegal_products: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 682,
                                params: {
                                    collections_rejected_policy_illegal_products: d(a, e)
                                }
                            })
                        };
                    case "hazardous_goods_and_materials":
                        return a = l.default.t(654), {
                            first: (0, u.jsx)(s.default, {
                                id: 628,
                                params: {
                                    collections_rejected_policy_hazardous_goods_and_materials: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 679,
                                params: {
                                    collections_rejected_policy_hazardous_goods_and_materials: d(a, e)
                                }
                            })
                        };
                    case "stolen_goods":
                        return a = l.default.t(662), {
                            first: (0, u.jsx)(s.default, {
                                id: 637,
                                params: {
                                    collections_rejected_policy_stolen_goods: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 688,
                                params: {
                                    collections_rejected_policy_stolen_goods: d(a, e)
                                }
                            })
                        };
                    case "human_exploitation_and_sexual_services":
                        return a = l.default.t(656), {
                            first: (0, u.jsx)(s.default, {
                                id: 630,
                                params: {
                                    collections_rejected_policy_human_exploitation_and_sexual_services: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 681,
                                params: {
                                    collections_rejected_policy_human_exploitation_and_sexual_services: d(a, e)
                                }
                            })
                        };
                    case "community_standards":
                        return a = l.default.t(649), {
                            first: (0, u.jsx)(s.default, {
                                id: 623,
                                params: {
                                    collections_rejected_policy_community_standards: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 674,
                                params: {
                                    collections_rejected_policy_community_standards: d(a, e)
                                }
                            })
                        };
                    case "discrimination":
                        return a = l.default.t(651), {
                            first: (0, u.jsx)(s.default, {
                                id: 625,
                                params: {
                                    collections_rejected_policy_discrimination: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 676,
                                params: {
                                    collections_rejected_policy_discrimination: d(a, e)
                                }
                            })
                        };
                    default:
                        return a = l.default.t(659), {
                            first: (0, u.jsx)(s.default, {
                                id: 634,
                                params: {
                                    collections_rejected_policy_other_violation: d(a, e)
                                }
                            }),
                            second: (0, u.jsx)(s.default, {
                                id: 685,
                                params: {
                                    collections_rejected_policy_other_violation: d(a, e)
                                }
                            })
                        }
                }
            };
            var r = n(a(81288)),
                o = n(a(94253)),
                i = a(49012),
                l = n(a(45159)),
                s = n(a(62848)),
                u = a(85893);

            function d(t, e) {
                var a = e || o.default.WA_COMMERCE_POLICY_URL;
                return (0, u.jsx)(r.default, {
                    href: a,
                    onClick: function(t) {
                        t.preventDefault(), (0, i.openExternalLink)(a)
                    },
                    children: t
                })
            }
        },
        73475: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.logCollectionSeeAllView = function(t) {
                var e = t.catalogOwnerJid,
                    a = t.catalogContext,
                    n = t.collectionId,
                    u = (0, o.getProductStatsInFetched)(e, n),
                    d = null == u ? void 0 : u.productIndex,
                    c = null == u ? void 0 : u.collectionIndex;
                (0, s.createCatalogViewEvent)((0, r.default)({
                    isOwner: (0, s.isCatalogOwner)({
                        catalogOwnerJid: e
                    }),
                    catalogBizAction: i.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_IMPRESSION,
                    catalogViewAction: i.default.CATALOG_VIEW_ACTION.ACTION_COLLECTION_IMPRESSION,
                    productIndex: d,
                    collectionIndex: c
                }, (0, l.toDataForCatalogViewEvents)(a))).commit()
            }, e.logCollectionItemsAssignment = function(t) {
                var e = t.catalogContext,
                    a = t.collectionId,
                    n = t.addedCount,
                    r = t.removedCount;
                n > 0 && new i.default.CatalogBiz({
                    catalogBizAction: i.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_ASSIGN_ITEMS,
                    catalogEntryPoint: e.entryPoint,
                    catalogSessionId: e.session.toString(),
                    productCount: n,
                    collectionId: a
                }).commit();
                r > 0 && new i.default.CatalogBiz({
                    catalogBizAction: i.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_UNASSIGN_ITEMS,
                    catalogEntryPoint: e.entryPoint,
                    catalogSessionId: e.session.toString(),
                    productCount: r,
                    collectionId: a
                }).commit()
            }, e.logCollectionDeleted = function(t) {
                var e = t.catalogContext,
                    a = t.collectionId;
                new i.default.CatalogBiz({
                    catalogBizAction: i.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_DELETED,
                    catalogEntryPoint: e.entryPoint,
                    catalogSessionId: e.session.toString(),
                    collectionId: a
                }).commit()
            }, e.logCollectionRenamed = function(t) {
                var e = t.catalogContext,
                    a = t.collectionId;
                new i.default.CatalogBiz({
                    catalogBizAction: i.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_DELETED,
                    catalogEntryPoint: e.entryPoint,
                    catalogSessionId: e.session.toString(),
                    collectionId: a
                }).commit()
            }, e.logCollectionMenuClicked = function(t) {
                new i.default.CatalogBiz({
                    catalogBizAction: i.default.CATALOG_BIZ_ACTION.ACTION_MENU_COLLECTIONS_CLICK,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString()
                }).commit()
            }, e.logCollectionCreated = function(t) {
                var e = t.catalogContext,
                    a = (t.collectionId, t.productCount);
                new i.default.CatalogBiz({
                    catalogBizAction: i.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CREATED,
                    catalogEntryPoint: e.entryPoint,
                    catalogSessionId: e.session.toString(),
                    productCount: a
                }).commit()
            }, e.logCollectionCreateClicked = function(t) {
                new i.default.CatalogBiz({
                    catalogBizAction: i.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CREATE_CLICKED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString()
                }).commit()
            };
            var r = n(a(81109)),
                o = a(52716),
                i = n(a(50507)),
                l = a(49942),
                s = a(68245)
        },
        94786: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(a(34575)),
                i = r(a(93913)),
                l = r(a(2205)),
                s = r(a(99842)),
                u = a(67294),
                d = a(9812),
                c = r(a(65901)),
                f = n(a(81788)),
                p = r(a(14066)),
                h = r(a(94253)),
                m = r(a(96706)),
                _ = r(a(73568)),
                v = r(a(23803)),
                g = r(a(92546)),
                C = a(69725),
                S = r(a(63641)),
                x = a(10951),
                y = a(49942),
                j = r(a(98166)),
                E = a(67315),
                P = r(a(5202)),
                T = r(a(61897)),
                w = a(68220),
                I = a(85893),
                k = function(t) {
                    (0, l.default)(a, t);
                    var e = (0, s.default)(a);

                    function a(t) {
                        var n;
                        return (0, o.default)(this, a), (n = e.call(this, t)).attachedListeners = new Set, n._catalogFlatListController = new g.default, n.handleProductDetail = function(t, e) {
                            var a = n.props.onProductDetail;
                            return (0, x.logCatalogListDetailClick)({
                                product: (0, w.unproxy)(t),
                                catalogContext: (0, y.getProductCatalogContext)(n.context)
                            }), n.setState({
                                openedProductId: t.id.toString()
                            }), a(t, e)
                        }, n.handleProductShare = function(t) {
                            var e = n.props.onProductShare;
                            e && e(t)
                        }, n.handleProductDelete = function(t) {
                            var e = n.props.catalog;
                            (0, d.handleProductDelete)(e, t, (0, y.getProductCatalogContext)(n.context)).then((function() {
                                t.id === n.state.openedProductId && (c.default.closeDrawerMid(), n.setState({
                                    openedProductId: void 0
                                }))
                            }))
                        }, n.handleProductHideShow = function(t) {
                            var e = n.props.catalog;
                            (0, d.handleProductVisibilityChange)(e, t, (0, y.getProductCatalogContext)(n.context))
                        }, n.renderItem = function(t) {
                            var e = t.collection,
                                a = t.product,
                                r = t.allItems,
                                o = t.reviewBanner,
                                i = t.collectionId,
                                l = n.props,
                                s = l.onCartOpen,
                                u = l.shareLinks;
                            return e ? o ? (0, I.jsx)(f.default, {
                                collection: e,
                                onEditCollection: n.props.onEditCollection
                            }) : (0, I.jsx)(p.default, {
                                collection: e,
                                onSeeAll: n.props.onCollectionSeeAll
                            }) : r ? (0, I.jsx)(p.default, {
                                allItems: r,
                                onSeeAll: n.props.onCollectionSeeAll
                            }) : a ? (0, I.jsx)(j.default, {
                                collectionId: i,
                                product: a,
                                onCartOpen: s,
                                onClick: function() {
                                    return n.handleProductDetail(a, i)
                                },
                                onProductShare: u ? n.handleProductShare : null,
                                onProductDelete: n.handleProductDelete,
                                onProductHideShow: n.handleProductHideShow,
                                theme: "product-of-collection",
                                canManageCatalog: n.props.canManageCatalog
                            }) : null
                        }, n.state = {
                            openedProductId: void 0,
                            loadingMore: !1,
                            stopLoading: !1,
                            catalogFetchState: t.catalog ? "SUCCESS" : "NONE"
                        }, n
                    }
                    return (0, i.default)(a, [{
                        key: "getData",
                        value: function() {
                            var t = this,
                                e = void 0 !== this.props.onCartOpen,
                                a = this.props.data || [],
                                n = [];
                            return a.forEach((function(a) {
                                var r = a.collection,
                                    o = a.product,
                                    i = a.allItems;
                                if (r && o) {
                                    var l = r.id;
                                    n.push({
                                        itemKey: `${l.toString()}_${o.id.toString()}_${e.toString()}`,
                                        product: o,
                                        collectionId: l
                                    })
                                } else if (r) t.attachedListeners.has(r.id) || (t.attachedListeners.add(r.id), t.props.listeners.add(r, "change:reviewStatus canAppeal", (function() {
                                    t.forceUpdate()
                                }))), n.push({
                                    itemKey: `${r.id.toString()}_${r.reviewStatus.toString()}`,
                                    collection: r
                                }), r.reviewStatus !== E.PRODUCT_REVIEW_STATUS.PENDING && r.reviewStatus !== E.PRODUCT_REVIEW_STATUS.REJECTED || n.push({
                                    itemKey: `${r.id.toString()}_reviewBanner`,
                                    collection: r,
                                    height: (0, f.getCollectionIntegrityHeight)(r),
                                    reviewBanner: !0
                                });
                                else if (i) n.push({
                                    itemKey: "view_all",
                                    allItems: i
                                });
                                else if (o) {
                                    var s = t.props.collectionId || void 0;
                                    n.push({
                                        itemKey: `${o.id.toString()}_${e.toString()}`,
                                        product: o,
                                        collectionId: s
                                    })
                                }
                            })), n
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.getData();
                            return (0, I.jsx)(I.Fragment, {
                                children: (0, I.jsx)(v.default, {
                                    flatListControllers: [this._catalogFlatListController],
                                    children: (0, I.jsx)(_.default, {
                                        flatListController: this._catalogFlatListController,
                                        direction: "vertical",
                                        forceConsistentRenderCount: !1,
                                        data: t,
                                        renderItem: this.renderItem,
                                        defaultItemHeight: h.default.PRODUCT_LIST_ITEM_HEIGHT,
                                        keyOrder: C.KeyOrder.INVERSE
                                    })
                                })
                            })
                        }
                    }]), a
                }(u.Component);
            k.CONCERNS = {
                catalog: ["productCollection", "collections", "afterCursor", "id", "index"]
            }, k.contextType = m.default, k.displayName = "ProductCollectionsList";
            var b = (0, P.default)((0, S.default)((0, T.default)(k, k.CONCERNS)));
            e.default = b
        },
        36685: (t, e, a) => {
            "use strict";
            var n = a(52108).default,
                r = a(20862),
                o = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = o(a(59713)),
                l = o(a(63038)),
                s = o(a(34575)),
                u = o(a(93913)),
                d = o(a(2205)),
                c = o(a(99842)),
                f = o(a(94184)),
                p = a(18077),
                h = a(67294),
                m = o(a(40501)),
                _ = o(a(96466)),
                v = a(19218),
                g = o(a(41325)),
                C = o(a(18330)),
                S = o(a(13833)),
                x = o(a(76816)),
                y = o(a(65901)),
                j = o(a(86777)),
                E = o(a(24128)),
                P = o(a(53187)),
                T = o(a(18345)),
                w = o(a(96706)),
                I = r(a(19288)),
                k = r(a(18286)),
                b = o(a(45159)),
                O = o(a(63641)),
                N = a(10951),
                M = a(61689),
                D = a(49942),
                A = a(67315),
                R = o(a(35769)),
                L = o(a(90872)),
                F = o(a(45353)),
                B = a(21400),
                U = o(a(5202)),
                V = o(a(63884)),
                H = r(a(85651)),
                W = o(a(61897)),
                G = a(68220),
                z = a(22552),
                K = a(59175),
                Y = a(85893),
                q = function(t) {
                    (0, d.default)(a, t);
                    var e = (0, c.default)(a);

                    function a(t) {
                        var n;
                        (0, s.default)(this, a), (n = e.call(this, t)).handleCartClick = function() {
                            var t = n.props,
                                e = t.product,
                                a = t.onCartClick;
                            a && a(e.catalogWid.toString())
                        }, n._handleReportProduct = function() {
                            var t = n.props.product;
                            y.default.openModal((0, Y.jsx)(V.default, {
                                product: t,
                                sessionId: (0, D.getProductCatalogSessionId)(n.context)
                            }))
                        }, n.handleProductLinkClick = function() {
                            var t = n.props.product;
                            n.props.onProductLinkClick(t)
                        }, n.handleSendChat = function() {
                            var t = n.props.product,
                                e = C.default.get(t.catalogWid);
                            (0, M.sendProductToChat)(t, e, (0, D.getProductCatalogContext)(n.context)), (0, N.logProductMessageBusinessClick)(t, (0, D.getProductCatalogContext)(n.context))
                        }, n._handleSendProduct = function() {
                            var t = n.props.product,
                                e = t.catalogWid,
                                a = C.default.get(e);
                            if (a) {
                                var r = a.productCollection.get(t.id),
                                    o = r ? (0, G.unproxy)(r) : (0, G.unproxy)(t);
                                y.default.attachProduct({
                                    product: o
                                })
                            }
                        }, n.handleProductMoreInformation = function() {
                            n.props.onProductMoreInformation(n.props.product)
                        }, n.handleBack = function() {
                            var t = n.props.onBack;
                            if (t) return t()
                        }, n.handleProductCatalog = function() {
                            var t = n.props,
                                e = t.onProductCatalog,
                                a = t.product;
                            e && e(a.catalogWid, (0, D.getProductCatalogContext)(n.context))
                        }, n.handleProductDetail = function(t) {
                            var e = n.props.onProductDetail;
                            if (e) return e(t)
                        }, n.isRejected = function() {
                            return n.props.product.reviewStatus === A.PRODUCT_REVIEW_STATUS.REJECTED
                        }, n._isAvailable = function() {
                            var t = n.state.productFetchState;
                            return "ERROR" !== t && "NOT_FOUND" !== t && !n.isRejected()
                        };
                        var r = t.product.fetchedFromServer ? "SUCCESS" : "PENDING",
                            o = null,
                            i = "NONE";
                        t.refreshCarousel && ((o = C.default.get(t.product.catalogWid)) && o.productCollection && o.fetchedFromServer ? i = "SUCCESS" : (o = null, i = "PENDING"));
                        var l = g.default.findCart(n.props.product.catalogWid.toString());
                        return n.state = {
                            businessProfile: null,
                            cartEnabled: !1,
                            productCatalog: o,
                            productFetchState: r,
                            productCatalogFetchState: i,
                            cart: l
                        }, n
                    }
                    return (0, u.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this,
                                e = this.props,
                                a = e.product,
                                n = e.listeners,
                                r = e.collectionId,
                                o = this.state.cart,
                                i = a.catalogWid,
                                l = a.id.toString();
                            i && l && (this._fetchData(), n.add(o, "change:cartItemCollection", (function() {
                                t.forceUpdate()
                            })), (0, x.default)(i).then((function(e) {
                                t.setState({
                                    cartEnabled: e
                                })
                            })), (0, N.logProductDetailView)({
                                product: (0, G.unproxy)(a),
                                catalogContext: (0, D.getProductCatalogContext)(this.context),
                                cartToggle: this.state.cartEnabled,
                                collectionId: r
                            }))
                        }
                    }, {
                        key: "_fetchData",
                        value: function() {
                            var t = this,
                                e = this.props,
                                a = e.product,
                                r = e.rejectOnUnmount,
                                o = a.catalogWid,
                                i = a.id.toString(),
                                s = C.default.findProduct({
                                    catalogWid: o,
                                    productId: i,
                                    productMsgMediaData: (0, G.unproxy)(a).productMsgMediaData
                                }),
                                u = _.default.find(o);
                            return n.all([u, s]).checkpoint(r()).then((function(e) {
                                var a = (0, l.default)(e, 1)[0];
                                return t.setState({
                                    productFetchState: "SUCCESS",
                                    businessProfile: a
                                }), a
                            })).then((function(e) {
                                "PENDING" === t.state.productCatalogFetchState && ((0, v.hasCatalog)(e) ? t._fetchProductCatalog() : t.setState({
                                    productCatalogFetchState: "NONE"
                                }))
                            })).catch((0, p.filteredCatch)(k.Unmount, (function() {}))).catch((0, p.filteredCatch)(K.E404, (function() {
                                t.handleBack(), t._showNotFoundErrorToast(), t.setState({
                                    productFetchState: "NOT_FOUND"
                                })
                            }))).catch((0, p.filteredCatch)(K.WebdDrop, (function() {
                                t.setState({
                                    productFetchState: "ERROR"
                                }), __LOG__(3)`Failed to fetch product`
                            }))).catch((0, p.filteredCatch)(K.ServerStatusCodeError, (function() {
                                t.setState({
                                    productFetchState: "ERROR"
                                }), __LOG__(3)`Failed to fetch product from server`
                            })))
                        }
                    }, {
                        key: "_fetchProductCatalog",
                        value: function() {
                            var t = this,
                                e = this.props,
                                a = e.product,
                                n = e.rejectOnUnmount,
                                r = a.catalogWid;
                            C.default.findCarouselCatalog(r).checkpoint(n()).then((function(e) {
                                var a = Array.isArray(e) ? e[0] : e;
                                t.setState({
                                    productCatalog: a || null,
                                    productCatalogFetchState: a ? "SUCCESS" : "NONE"
                                })
                            })).catch((0, p.filteredCatch)(K.ServerStatusCodeError, (function(e) {
                                "not_found" === e.status || 404 === e.status ? t.setState({
                                    productCatalog: null,
                                    productCatalogFetchState: "NOT_FOUND"
                                }) : (t.setState({
                                    productCatalog: null,
                                    productCatalogFetchState: "ERROR"
                                }), __LOG__(3)`Failed to fetch product catalog from server`)
                            }))).catch((0, p.filteredCatch)(k.Unmount, (function() {}))).catch((0, p.filteredCatch)(K.WebdDrop, (function() {
                                t.setState({
                                    productCatalog: null,
                                    productCatalogFetchState: "ERROR"
                                }), __LOG__(3)`Failed to fetch product catalog`
                            })))
                        }
                    }, {
                        key: "_showNotFoundErrorToast",
                        value: function() {
                            y.default.openModal((0, Y.jsx)(j.default, {
                                onOK: function() {
                                    y.default.closeModal()
                                },
                                okText: b.default.t(2125),
                                children: b.default.t(1505)
                            }))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var t = this.props.product,
                                e = t.catalogWid,
                                a = t.id.toString();
                            if (e && a) {
                                var n = C.default.get(e),
                                    r = n && n.msgProductCollection.get(a);
                                r && r.fetchedFromServer && n && n.msgProductCollection.remove(r)
                            }
                        }
                    }, {
                        key: "_renderTopBar",
                        value: function() {
                            var t, e, a = this.state,
                                n = a.productFetchState,
                                r = a.productCatalogFetchState,
                                o = this._isAvailable();
                            e = "ERROR" === n ? (0, Y.jsx)(z.TextSpan, {
                                className: R.default.text,
                                theme: "small",
                                color: "danger",
                                children: b.default.t(1476)
                            }) : o ? [(0, Y.jsx)(H.default, {
                                size: 14,
                                color: H.colorOptions.highlight
                            }, "DetailDrawer-loadingBar-spinner"), (0, Y.jsx)(z.TextSpan, {
                                className: (0, f.default)(R.default.text, R.default.loadingText),
                                theme: "small",
                                children: b.default.t(1519)
                            }, "DetailDrawer-loadingBar-msg")] : (0, Y.jsx)(z.TextSpan, {
                                className: R.default.text,
                                theme: "small",
                                color: "danger",
                                children: b.default.t(1505)
                            });
                            var l = "PENDING" === n || "PENDING" === r || !o;
                            return (0, Y.jsx)("div", {
                                className: (0, f.default)((t = {}, (0, i.default)(t, R.default.loadingContainer, l), (0, i.default)(t, R.default.shiftUp, !l), t)),
                                children: e
                            })
                        }
                    }, {
                        key: "_renderDrawerMenu",
                        value: function() {
                            var t;
                            if (!this._isAvailable()) return null;
                            var e = this.state.cartEnabled ? this.handleCartClick : void 0;
                            return (0, Y.jsx)(E.default, {
                                onSendProduct: this._handleSendProduct,
                                onReportProduct: this._handleReportProduct,
                                onProductLinkClick: this.handleProductLinkClick,
                                onProductMoreInformation: this.handleProductMoreInformation,
                                onCartClick: e,
                                cartCount: this.state.cart.itemCount,
                                catalogId: this.props.product.catalogWid.toString(),
                                contactId: null === (t = this.props.chat) || void 0 === t ? void 0 : t.contact.id.user
                            })
                        }
                    }, {
                        key: "_renderDrawerHeader",
                        value: function() {
                            return (0, Y.jsx)(I.default, {
                                a8n: "drawer-title-profile",
                                title: b.default.t(1495),
                                onBack: this.handleBack,
                                type: I.DRAWER_HEADER_TYPE.SMALL,
                                menu: this._renderDrawerMenu()
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t, e = this.props,
                                a = e.product,
                                n = e.collectionId,
                                r = this.state,
                                o = r.productCatalog,
                                i = r.productFetchState,
                                l = this._isAvailable(),
                                s = (0, v.hasCatalog)(this.state.businessProfile);
                            return (0, Y.jsxs)(P.default, {
                                onDrop: this.handleBack,
                                theme: "striped",
                                children: [this._renderDrawerHeader(), (0, Y.jsx)(T.default, {
                                    children: (0, Y.jsxs)("div", {
                                        "data-a8n": m.default.key("product-details"),
                                        className: R.default.body,
                                        children: [this._renderTopBar(), (0, Y.jsx)(F.default, {
                                            product: a,
                                            isAvailable: l,
                                            fetching: "PENDING" === i
                                        }), a.availability === B.ProductAvailability.OUT_OF_STOCK ? (0, Y.jsx)("div", {
                                            className: R.default.availabilityBanner,
                                            children: b.default.t(1494)
                                        }) : null, (0, Y.jsx)(L.default, {
                                            product: a,
                                            collectionId: n,
                                            onSendChat: this.handleSendChat,
                                            isAvailable: l,
                                            hideRetailerID: null === (t = this.props.chat) || void 0 === t ? void 0 : t.contact.isEnterprise
                                        }), s && o ? (0, Y.jsx)(S.default, {
                                            catalog: o,
                                            onProductCatalog: this.handleProductCatalog,
                                            onProductDetail: this.handleProductDetail,
                                            filterProductId: a.id.toString(),
                                            title: b.default.t(1473),
                                            animation: !1
                                        }) : null]
                                    })
                                })]
                            }, "product-details-drawer")
                        }
                    }]), a
                }(h.Component);
            q.CONCERNS = {
                product: ["id", "catalogWid", "productImageCollection", "fetchedFromServer", "name", "availability", "reviewStatus"]
            }, q.contextType = w.default, q.displayName = "ProductDetails";
            var $ = (0, U.default)((0, O.default)((0, W.default)(q, q.CONCERNS)));
            e.default = $
        },
        90872: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(a(59713)),
                i = r(a(34575)),
                l = r(a(93913)),
                s = r(a(2205)),
                u = r(a(99842)),
                d = r(a(94184)),
                c = a(67294),
                f = r(a(19897)),
                p = r(a(55197)),
                h = r(a(51599)),
                m = r(a(76816)),
                _ = r(a(94253)),
                v = r(a(96706)),
                g = r(a(46821)),
                C = r(a(73008)),
                S = a(49012),
                x = a(72896),
                y = r(a(45159)),
                j = n(a(53454)),
                E = a(10951),
                P = a(49942),
                T = a(67315),
                w = r(a(57142)),
                I = r(a(6737)),
                k = a(21400),
                b = r(a(61897)),
                O = a(68220),
                N = a(22552),
                M = a(85893),
                D = function(t) {
                    (0, s.default)(a, t);
                    var e = (0, u.default)(a);

                    function a(t) {
                        var n;
                        return (0, i.default)(this, a), (n = e.call(this, t)).handleAddToCart = function(t) {
                            var e = n.props,
                                a = e.product,
                                r = e.collectionId;
                            (0, f.default)(a, (0, P.getProductCatalogContext)(n.context), r), t.stopPropagation()
                        }, n.handleReadMore = function() {
                            n.setState({
                                isDescExpanded: !0
                            })
                        }, n._handleClickUrl = function(t, e) {
                            t.stopPropagation();
                            var a = n.props.product;
                            (0, E.logDetailLinkClick)({
                                product: (0, O.unproxy)(a),
                                catalogContext: (0, P.getProductCatalogContext)(n.context)
                            });
                            var r = e && j.findLink(e);
                            r && (0, S.openExternalLink)(r.url)
                        }, n.state = {
                            isDescExpanded: !1,
                            cartEnabled: !1
                        }, n
                    }
                    return (0, l.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this;
                            (0, m.default)(this.props.product.catalogWid).then((function(e) {
                                t.setState({
                                    cartEnabled: e
                                })
                            }))
                        }
                    }, {
                        key: "_renderMessageBusinessButton",
                        value: function() {
                            var t = this.props,
                                e = t.onSendChat,
                                a = t.product,
                                n = t.isAvailable;
                            if (!e || !a.fetchedFromServer || !n || a.reviewStatus !== T.PRODUCT_REVIEW_STATUS.APPROVED) return null;
                            var r = y.default.t(1500);
                            return (0, M.jsx)("div", {
                                className: w.default.buttonContainer,
                                title: r,
                                children: (0, M.jsx)(h.default, {
                                    a8nText: "product-message-business-btn",
                                    className: w.default.button,
                                    onClick: e,
                                    type: "secondary",
                                    children: r
                                })
                            })
                        }
                    }, {
                        key: "_renderAddToCartButton",
                        value: function() {
                            var t = this.props,
                                e = t.product,
                                a = t.isAvailable;
                            if (!this.state.cartEnabled || !e.fetchedFromServer || !a || e.reviewStatus !== T.PRODUCT_REVIEW_STATUS.APPROVED) return null;
                            var n = y.default.t(1470),
                                r = e.availability === k.ProductAvailability.OUT_OF_STOCK;
                            return (0, M.jsx)("div", {
                                className: w.default.buttonContainer,
                                title: n,
                                children: (0, M.jsx)(h.default, {
                                    a8nText: "add-to-cart-btn",
                                    className: (0, d.default)(w.default.button, w.default.addToCartButton),
                                    onClick: this.handleAddToCart,
                                    type: "secondary",
                                    disabled: r,
                                    children: (0, M.jsxs)("span", {
                                        className: w.default.addToCartContainer,
                                        children: [(0, M.jsx)(p.default, {
                                            className: (0, d.default)(w.default.addToCartIcon, (0, o.default)({}, w.default.addToCartIconDisabled, r))
                                        }), n]
                                    })
                                })
                            })
                        }
                    }, {
                        key: "_renderLink",
                        value: function(t) {
                            var e = this,
                                a = this.props,
                                n = a.product,
                                r = a.isAvailable;
                            if (!n.fetchedFromServer || !t || !r) return null;
                            var o = x.Configuration.TrustedGroupDesc({
                                links: j.findLinks(t)
                            });
                            return (0, M.jsx)("div", {
                                children: (0, M.jsx)(C.default, {
                                    selectable: !0,
                                    formatters: o,
                                    text: t,
                                    onClick: function(a) {
                                        return e._handleClickUrl(a, t)
                                    }
                                })
                            })
                        }
                    }, {
                        key: "_renderDesc",
                        value: function() {
                            var t = this.props.product,
                                e = this.state.isDescExpanded;
                            if (!t.description && !t.url && !t.retailerId) return null;
                            var a, n = !(!t || !t.description) && t.description.length > _.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH;
                            return t.description && (a = (0, M.jsxs)("div", {
                                children: [(0, M.jsx)(C.default, {
                                    selectable: !0,
                                    multiline: !0,
                                    text: t.description,
                                    textLimit: e ? 1 / 0 : _.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                                }), n && !e ? (0, M.jsx)("span", {
                                    className: w.default.more,
                                    role: "button",
                                    onClick: this.handleReadMore,
                                    children: ` ${y.default.t(1528)}`
                                }) : null]
                            })), (0, M.jsxs)(N.TextDiv, {
                                theme: "plain",
                                className: w.default.description,
                                children: [a, this._renderLink(t.url), t.retailerId && !this.props.hideRetailerID ? (0, M.jsx)("div", {
                                    children: (0, M.jsx)(C.default, {
                                        text: t.retailerId,
                                        selectable: !0,
                                        direction: "inherit"
                                    })
                                }) : null]
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props.product;
                            return (0, M.jsxs)(g.default, {
                                theme: "padding-product",
                                animation: !1,
                                children: [(0, M.jsx)(N.TextDiv, {
                                    theme: "title",
                                    className: w.default.name,
                                    children: (0, M.jsx)(C.default, {
                                        text: t.name,
                                        selectable: !0
                                    })
                                }), null != t.priceAmount1000 ? (0, M.jsx)(N.TextDiv, {
                                    className: w.default.price,
                                    color: "dark",
                                    theme: "plain",
                                    children: (0, M.jsx)(I.default, {
                                        product: t,
                                        selectable: !0,
                                        direction: "inherit"
                                    })
                                }) : null, this._renderDesc(), this._renderMessageBusinessButton(), this._renderAddToCartButton()]
                            })
                        }
                    }]), a
                }(c.Component);
            D.contextType = v.default, D.CONCERNS = {
                product: ["name", "url", "description", "availability", "currency", "priceAmount1000", "salePriceAmount1000", "salePriceStartDate", "salePriceEndDate", "fetchedFromServer", "retailerId", "catalogWid", "productImageCollection", "imageHash", "reviewStatus", "imageCdnUrl", "id"]
            }, D.displayName = "ProductDetailsInfo";
            var A = (0, b.default)(D, D.CONCERNS);
            e.default = A
        },
        31322: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = e.ProductDetailsForDeepLink = void 0;
            var o = r(a(34575)),
                i = r(a(93913)),
                l = r(a(2205)),
                s = r(a(99842)),
                u = a(18077),
                d = r(a(48842)),
                c = a(67294),
                f = r(a(18330)),
                p = r(a(65901)),
                h = r(a(86777)),
                m = r(a(53187)),
                _ = r(a(18345)),
                v = n(a(19288)),
                g = a(50317),
                C = r(a(29661)),
                S = r(a(19301)),
                x = r(a(45159)),
                y = r(a(36685)),
                j = r(a(5202)),
                E = a(59175),
                P = a(8297),
                T = a(85893),
                w = function(t) {
                    (0, l.default)(a, t);
                    var e = (0, s.default)(a);

                    function a(t) {
                        var n;
                        (0, o.default)(this, a), (n = e.call(this, t)).state = {
                            product: null,
                            productFetchState: "NONE"
                        };
                        var r = n.props.productInfo,
                            i = r.productId,
                            l = r.businessOwnerJid,
                            s = (0, S.default)({
                                productId: i,
                                businessOwnerJid: l
                            });
                        return n.state = s ? {
                            product: s,
                            productFetchState: "NONE"
                        } : {
                            product: s,
                            productFetchState: "PENDING"
                        }, n
                    }
                    return (0, i.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.state.product || this._fetchProduct()
                        }
                    }, {
                        key: "_fetchProduct",
                        value: function() {
                            var t = this,
                                e = this.props.productInfo,
                                a = e.productId,
                                n = e.businessOwnerJid,
                                r = (0, P.createWid)(n);
                            f.default.findProduct({
                                catalogWid: r,
                                productId: a
                            }).checkpoint(this.props.rejectOnUnmount()).then((function() {
                                var e = f.default.get(r),
                                    n = (0, d.default)(e, "catalog").productCollection.get(a);
                                t.setState({
                                    product: n,
                                    productFetchState: "SUCCESS"
                                })
                            })).catch((0, u.filteredCatch)(E.E404, (function() {
                                t._showNotFoundErrorToast(), t.setState({
                                    productFetchState: "ERROR"
                                })
                            }))).catch((function(e) {
                                (0, g.parseErrorState)(e, (function(e) {
                                    return t.setState({
                                        productFetchState: e
                                    })
                                }))
                            }))
                        }
                    }, {
                        key: "_showNotFoundErrorToast",
                        value: function() {
                            this.props.onBack(), p.default.openModal((0, T.jsx)(h.default, {
                                onOK: function() {
                                    p.default.closeModal()
                                },
                                okText: x.default.t(2125),
                                children: x.default.t(1505)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.product ? (0, T.jsx)(y.default, {
                                chat: this.props.chat,
                                product: this.state.product,
                                onEnd: this.props.onEnd,
                                onBack: this.props.onBack,
                                onProductDetail: this.props.onProductDetail,
                                onProductCatalog: this.props.onProductCatalog,
                                refreshCarousel: !0,
                                onProductLinkClick: this.props.onProductLinkClick,
                                onProductMoreInformation: this.props.onProductMoreInformation,
                                onCartClick: this.props.onCartClick
                            }) : (0, T.jsxs)(m.default, {
                                onDrop: this.props.onBack,
                                children: [(0, T.jsx)(v.default, {
                                    a8n: "drawer-title-profile",
                                    title: x.default.t(1495),
                                    onBack: this.props.onBack,
                                    type: v.DRAWER_HEADER_TYPE.SMALL
                                }), (0, T.jsx)(_.default, {
                                    children: (0, T.jsx)(C.default, {
                                        fetchState: this.state.productFetchState
                                    })
                                })]
                            }, "product-details-drawer")
                        }
                    }]), a
                }(c.PureComponent);
            e.ProductDetailsForDeepLink = w, w.displayName = "ProductDetailsForDeepLink";
            var I = (0, j.default)(w);
            e.default = I
        },
        27043: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e, a, n, r = t.onBack,
                    o = t.onCancel,
                    S = t.product,
                    k = t.prompt,
                    b = t.centerDrawer,
                    O = t.sendProductMsg,
                    N = t.onSend,
                    M = (0, i.useContext)(f.default),
                    D = function() {
                        s.default.openModal((0, T.jsx)(j.default, {
                            product: S,
                            onSend: N
                        }), {
                            transition: "modal-flow"
                        }), (0, v.logShareProductViaWALinkClick)({
                            product: S,
                            catalogContext: (0, g.getProductCatalogContext)(M)
                        })
                    },
                    A = (0, E.createProductLink)(S.catalogWid.user, S.id.toString());
                b && (e = "labels", a = "center-column");
                n = null != O ? (0, T.jsx)(y.default, {
                    onClick: function() {
                        s.default.attachProduct({
                            product: (0, P.unproxy)(S),
                            onSend: N
                        })
                    }
                }) : (0, T.jsx)(x.default, {
                    onClick: D
                });
                return (0, T.jsxs)(d.default, {
                    theme: e,
                    children: [(0, T.jsx)(p.default, {
                        a8n: "product-link-title",
                        title: m.default.t(1497),
                        onBack: r,
                        onCancel: o,
                        type: p.DRAWER_HEADER_TYPE.SMALL,
                        focusBackOrCancel: !0
                    }), (0, T.jsxs)(c.default, {
                        theme: a,
                        children: [(0, T.jsx)("div", {
                            className: C.default.prompt,
                            children: k
                        }), (0, T.jsx)(l.default, {
                            image: I(S),
                            primary: (0, T.jsx)(h.default, {
                                text: S.name,
                                direction: "auto"
                            }),
                            theme: "identity",
                            secondary: (0, T.jsx)(_.default, {
                                id: w,
                                href: A,
                                onClick: function(t) {
                                    t.preventDefault(), D()
                                },
                                noHandle: !0
                            })
                        }), n, (0, T.jsx)(u.default, {
                            elementId: w,
                            onClick: function() {
                                (0, v.logShareProductCopyLinkClick)({
                                    product: S,
                                    catalogContext: (0, g.getProductCatalogContext)(M)
                                })
                            }
                        })]
                    })]
                }, "product-link-drawer")
            };
            var o = r(a(94184)),
                i = a(67294),
                l = r(a(88186)),
                s = r(a(65901)),
                u = r(a(22261)),
                d = r(a(53187)),
                c = r(a(18345)),
                f = r(a(96706)),
                p = n(a(19288)),
                h = r(a(73008)),
                m = r(a(45159)),
                _ = r(a(3968)),
                v = a(10951),
                g = a(49942),
                C = r(a(65374)),
                S = n(a(27610)),
                x = r(a(59782)),
                y = r(a(20767)),
                j = r(a(22674)),
                E = a(91240),
                P = a(68220),
                T = a(85893),
                w = "product-link-anchor";

            function I(t) {
                var e = t.productImageCollection.head();
                return e ? (0, T.jsx)(S.default, {
                    className: (0, o.default)(C.default.productImage, C.default.productImageContainer),
                    mediaData: e.mediaData
                }) : (0, T.jsx)(S.ProductThumbPlaceholder, {
                    className: (0, o.default)(C.default.productThumb, C.default.productThumbContainer)
                })
            }
        },
        25422: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = e.ProductListDrawer = void 0;
            var o = r(a(34575)),
                i = r(a(93913)),
                l = r(a(2205)),
                s = r(a(99842)),
                u = a(18077),
                d = r(a(96486)),
                c = a(67294),
                f = r(a(40501)),
                p = a(59566),
                h = r(a(67482)),
                m = r(a(41325)),
                _ = r(a(10114)),
                v = r(a(72843)),
                g = r(a(18330)),
                C = r(a(76816)),
                S = r(a(94253)),
                x = r(a(53187)),
                y = r(a(18345)),
                j = r(a(96706)),
                E = n(a(19288)),
                P = n(a(98169)),
                T = r(a(94680)),
                w = n(a(18286)),
                I = a(50317),
                k = r(a(29661)),
                b = r(a(92546)),
                O = r(a(5029)),
                N = r(a(38032)),
                M = a(2629),
                D = r(a(45159)),
                A = r(a(36387)),
                R = r(a(63641)),
                L = a(10951),
                F = a(11613),
                B = a(91823),
                U = a(49942),
                V = r(a(69219)),
                H = r(a(81618)),
                W = r(a(14571)),
                G = r(a(5202)),
                z = r(a(61897)),
                K = r(a(7665)),
                Y = a(82118),
                q = a(59175),
                $ = a(85893),
                X = function(t) {
                    (0, l.default)(a, t);
                    var e = (0, s.default)(a);

                    function a(t) {
                        var n;
                        (0, o.default)(this, a), (n = e.call(this, t))._catalogFlatListController = new b.default, n._handleScroll = function(t) {
                            n.state.loadingMore || t.scrollTop + S.default.SCROLL_FUDGE > t.scrollHeight - t.clientHeight && n._loadMoreProduct()
                        }, n.handleScroll = d.default.throttle(n._handleScroll, 100), n._loadMoreProduct = function() {
                            var t = n.props.catalogId,
                                e = n.state,
                                a = e.stopLoading,
                                r = e.loadedProducts;
                            if (!a) {
                                var o = g.default.assertGet(t);
                                if (o.afterCursor) {
                                    var i = o.productCollection.getProductModels().length;
                                    n.setState({
                                        loadingMore: !0,
                                        loadedProducts: i
                                    }), g.default.update(t).checkpoint(n.props.rejectOnUnmount()).then((function(t) {
                                        n.setState({
                                            loadingMore: !1
                                        }), (Array.isArray(t) ? t[0] : t).productCollection.getProductModels().length === r && n.setState({
                                            stopLoading: !0
                                        }), i * S.default.PRODUCT_LIST_ITEM_HEIGHT < window.innerHeight && n._loadMoreProduct()
                                    })).catch((0, u.filteredCatch)(w.Unmount, (function() {}))).catch((function() {
                                        n.setState({
                                            loadingMore: !1,
                                            stopLoading: !0
                                        })
                                    }))
                                }
                            }
                        }, n.onScroll = function(t) {
                            n.handleScroll(t.currentTarget), n.props.setScrollOffset && n.props.setScrollOffset(t.currentTarget.scrollTop)
                        }, n._handleCartChange = function() {
                            var t = n.state.cart.itemCount;
                            n.state.cartCount !== t && n.setState({
                                cartCount: t
                            })
                        }, n._handleCartClick = function() {
                            var t = n.props,
                                e = t.contact,
                                a = t.onCartClick;
                            a && a(e.id.toString())
                        }, n._handleCatalogLinkClick = function() {
                            var t = n.state.catalog;
                            if (t) {
                                var e = n.props,
                                    a = e.onCatalogLinkClick,
                                    r = e.contact,
                                    o = e.catalogId;
                                a(t, r), (0, L.logCatalogShareLinkClick)({
                                    catalogOwnerWid: o,
                                    catalogContext: (0, U.getProductCatalogContext)(n.context)
                                })
                            }
                        };
                        var r = g.default.get(n.props.catalogId),
                            i = !r || r.stale ? null : r,
                            l = m.default.findCart(n.props.contact.id.toString());
                        return n.state = {
                            loadingMore: !1,
                            loadedProducts: 0,
                            stopLoading: !1,
                            cartEnabled: !1,
                            catalog: i,
                            cart: l,
                            cartCount: l.itemCount,
                            catalogFetchState: i ? "SUCCESS" : "NONE"
                        }, n
                    }
                    return (0, i.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this,
                                e = this.props,
                                a = e.catalogId,
                                n = e.listeners,
                                r = e.canManageCatalog;
                            n.add(this.state.cart, "all", this._handleCartChange), (0, L.logCatalogListView)({
                                catalogOwnerWid: a,
                                catalogContext: (0, U.getProductCatalogContext)(this.context),
                                cartToggle: this.state.cartEnabled
                            }), this.state.catalog ? (this._loadMoreProduct(), this._watchProductCollection()) : this._findCatalog(), (0, C.default)(a).then((function(e) {
                                t.setState({
                                    cartEnabled: e
                                }), N.default.supportsFeature(N.default.F.MD_BACKEND) && r && e && (0, p.getABPropConfigValue)("web_abprop_nux_cart_interstitial") && (0, v.default)()
                            }))
                        }
                    }, {
                        key: "_findCatalog",
                        value: function() {
                            var t = this;
                            return g.default.find(this.props.catalogId).checkpoint(this.props.rejectOnUnmount()).then((function(e) {
                                t.setState({
                                    catalog: e,
                                    catalogFetchState: "SUCCESS"
                                }), t._loadMoreProduct(), t._watchProductCollection()
                            })).catch((0, u.filteredCatch)(q.ServerStatusCodeError, (function(e) {
                                403 !== e.status && 404 !== e.status || t.setState({
                                    catalog: null,
                                    catalogFetchState: "NOT_FOUND"
                                })
                            }))).catch((function(e) {
                                (0, I.parseErrorState)(e, (function(e) {
                                    return t.setState({
                                        catalogFetchState: e
                                    })
                                }))
                            }))
                        }
                    }, {
                        key: "_watchProductCollection",
                        value: function() {
                            var t = this,
                                e = this.state.catalog;
                            this.props.autoUpdate && null != e && (e.productCollection.on("add", d.default.debounce((function() {
                                return t.forceUpdate()
                            }), 100)), e.productCollection.on("remove", d.default.debounce((function() {
                                return t.forceUpdate()
                            }), 100)))
                        }
                    }, {
                        key: "_getDrawerContent",
                        value: function() {
                            var t, e = this.state,
                                a = e.catalog,
                                n = e.cartEnabled,
                                r = this.props,
                                o = r.contact,
                                i = r.businessProfile,
                                l = r.canManageCatalog,
                                s = r.onAddProduct,
                                u = r.onCartClick,
                                d = n && u ? this._handleCartClick : void 0;
                            return a ? (l && s && (t = (0, $.jsx)(h.default, {
                                onClick: function() {
                                    return s()
                                },
                                theme: "in-list"
                            })), (0, $.jsxs)($.Fragment, {
                                children: [i && (0, $.jsx)("div", {
                                    "data-a8n": f.default.key("catalog-header"),
                                    className: H.default.header,
                                    children: (0, $.jsx)(W.default, {
                                        profilePicThumb: o.getProfilePicThumb(),
                                        contact: o,
                                        businessProfile: i
                                    })
                                }), (0, $.jsxs)("div", {
                                    "data-a8n": f.default.key("catalog-items"),
                                    className: H.default.list,
                                    children: [t, (0, $.jsx)(V.default, {
                                        onCartOpen: d,
                                        onProductDetail: this.props.onProductDetail,
                                        flatListController: this._catalogFlatListController,
                                        catalog: a,
                                        canManageCatalog: this.props.canManageCatalog,
                                        shareLinks: this.props.canManageCatalog,
                                        onProductShare: this.props.onProductShare
                                    }), this.state.loadingMore && (0, $.jsx)(O.default, {})]
                                })]
                            })) : (0, $.jsx)(k.default, {
                                fetchState: this.state.catalogFetchState
                            })
                        }
                    }, {
                        key: "_getCartIcon",
                        value: function() {
                            var t = this.props,
                                e = t.onCartClick,
                                a = t.headerType,
                                n = t.catalogId;
                            if (this.state.cartEnabled && e) {
                                var r = this.state.cartCount,
                                    o = (0, Y.isNumber)(r) && r > 0 ? r.toString() : void 0,
                                    i = (0, F.getOnCartClickWithLog)(this._handleCartClick, n.toString(), (0, U.getProductCatalogContext)(this.context));
                                return (0, $.jsx)(B.MenuBarItem, {
                                    a8nText: "menu-bar-cart-link",
                                    icon: (0, $.jsx)(_.default, {
                                        theme: a === E.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
                                    }),
                                    text: o,
                                    title: D.default.t(490),
                                    onClick: i
                                })
                            }
                            return null
                        }
                    }, {
                        key: "_getDrawerHeaderMenu",
                        value: function() {
                            var t = this.props,
                                e = t.canManageCatalog,
                                a = t.onOpenSettings,
                                n = e && (0, M.canToggleCartOnOff)() ? (0, $.jsx)(B.MenuBarItem, {
                                    a8nText: "menu-bar-menu",
                                    icon: (0, $.jsx)(K.default, {
                                        name: "menu"
                                    }),
                                    title: D.default.t(1246),
                                    children: (0, $.jsxs)(P.default, {
                                        type: "dropdown_menu",
                                        flipOnRTL: !0,
                                        dirX: P.DirX.LEFT,
                                        children: [(0, $.jsx)(T.default, {
                                            a8n: "mi-foward menu-item",
                                            action: this._handleCatalogLinkClick,
                                            children: D.default.t(914)
                                        }), a && (0, $.jsx)(T.default, {
                                            a8n: "mi-settings menu-item",
                                            action: a,
                                            children: D.default.t(558)
                                        })]
                                    }, "CatalogDetailHeader")
                                }) : (0, $.jsx)(B.MenuBarItem, {
                                    a8nText: "menu-bar-catalog-link",
                                    icon: (0, $.jsx)(A.default, {
                                        theme: this.props.headerType === E.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
                                    }),
                                    title: D.default.t(551),
                                    onClick: this._handleCatalogLinkClick
                                });
                            return (0, $.jsxs)($.Fragment, {
                                children: [this._getCartIcon(), n]
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return (0, $.jsxs)(x.default, {
                                theme: "products",
                                onDrop: this.props.onBack,
                                children: [(0, $.jsx)(E.default, {
                                    title: D.default.t(1477),
                                    type: this.props.headerType || E.DRAWER_HEADER_TYPE.SMALL,
                                    onBack: this.props.onBack,
                                    menu: this._getDrawerHeaderMenu(),
                                    focusBackOrCancel: !0
                                }), (0, $.jsx)(y.default, {
                                    onScroll: this.onScroll,
                                    flatListControllers: [this._catalogFlatListController],
                                    scrollOffset: this.props.scrollOffset,
                                    children: this._getDrawerContent()
                                })]
                            })
                        }
                    }]), a
                }(c.Component);
            e.ProductListDrawer = X, X.CONCERNS = {
                contact: ["id"]
            }, X.contextType = j.default, X.displayName = "ProductListDrawer";
            var J = (0, G.default)((0, R.default)((0, z.default)(X, X.CONCERNS)));
            e.default = J
        },
        14571: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = n(a(34575)),
                o = n(a(93913)),
                i = n(a(2205)),
                l = n(a(99842)),
                s = a(67294),
                u = a(66834),
                d = n(a(73008)),
                c = n(a(1191)),
                f = n(a(81891)),
                p = n(a(61897)),
                h = a(22552),
                m = a(85893),
                _ = function(t) {
                    (0, i.default)(a, t);
                    var e = (0, l.default)(a);

                    function a() {
                        return (0, r.default)(this, a), e.apply(this, arguments)
                    }
                    return (0, o.default)(a, [{
                        key: "_renderDescription",
                        value: function() {
                            var t = this.props.businessProfile;
                            return t && t.description ? (0, m.jsx)("div", {
                                className: f.default.description,
                                children: (0, m.jsx)(d.default, {
                                    text: t.description,
                                    direction: "auto",
                                    selectable: !0,
                                    titlify: !0
                                })
                            }) : null
                        }
                    }, {
                        key: "_renderPicture",
                        value: function() {
                            var t = this.props,
                                e = t.profilePicThumb,
                                a = t.contact;
                            if (!e) return null;
                            var n = (0, u.getDefaultIcon)(a.id);
                            return (0, m.jsx)("div", {
                                className: f.default.photo,
                                children: (0, m.jsx)(u.DetailImageCommon, {
                                    profilePicThumb: e,
                                    loader: !0,
                                    defaultIcon: n,
                                    profilePicThumbImg: e.imgFull,
                                    spinnerClassName: f.default.spinner,
                                    imgClassName: f.default.img,
                                    theme: "business"
                                })
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props.contact;
                            return (0, m.jsxs)("div", {
                                className: f.default.header,
                                "data-testid": "product-list-header",
                                children: [this._renderPicture(), (0, m.jsxs)("div", {
                                    className: f.default.text,
                                    children: [(0, m.jsx)(h.TextDiv, {
                                        className: f.default.name,
                                        theme: "large",
                                        children: (0, m.jsx)(c.default, {
                                            contact: t,
                                            selectable: !0,
                                            useVerifiedName: !0
                                        })
                                    }), this._renderDescription()]
                                })]
                            })
                        }
                    }]), a
                }(s.Component);
            _.CONCERNS = {
                profilePicThumb: ["imgFull"],
                contact: ["id", "isMe"],
                businessProfile: ["description"]
            }, _.displayName = "ProductListDrawerHeader";
            var v = (0, p.default)(_, _.CONCERNS);
            e.default = v
        },
        59862: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(a(81109)),
                i = r(a(87757)),
                l = r(a(48926)),
                s = r(a(34575)),
                u = r(a(93913)),
                d = r(a(2205)),
                c = r(a(99842)),
                f = r(a(48842)),
                p = a(67294),
                h = r(a(18330)),
                m = a(65971),
                _ = r(a(94253)),
                v = a(60543),
                g = r(a(53187)),
                C = r(a(18345)),
                S = n(a(19288)),
                x = r(a(45159)),
                y = r(a(63641)),
                j = r(a(5202)),
                E = r(a(61897)),
                P = a(68220),
                T = a(85893),
                w = function(t) {
                    (0, d.default)(n, t);
                    var e, a = (0, c.default)(n);

                    function n() {
                        var t;
                        (0, s.default)(this, n);
                        for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                        return (t = a.call.apply(a, [this].concat(r))).state = {
                            complianceInfo: void 0,
                            countryNameOrigin: "",
                            importerAddressCountryNameOrigin: "",
                            isLoading: !0
                        }, t.onBack = function() {
                            var e = t.props.onBack;
                            if (e) return e()
                        }, t
                    }
                    return (0, u.default)(n, [{
                        key: "componentDidMount",
                        value: (e = (0, l.default)(i.default.mark((function t() {
                            var e, a, n, r, o, l, s, u, d, c, p, m, _, g, C, S, x, y, j, E, T;
                            return i.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e = this.props.product, t.next = 3, h.default.findProduct({
                                            catalogWid: e.catalogWid,
                                            productId: e.id.toString(),
                                            productMsgMediaData: (0, P.unproxy)(e).productMsgMediaData,
                                            shouldFetchComplianceFields: !0
                                        });
                                    case 3:
                                        if (a = h.default.get(e.catalogWid), !(n = (0, f.default)(a, "catalog").productCollection.get(e.id))) {
                                            t.next = 16;
                                            break
                                        }
                                        return t.next = 8, (0, v.getCountryName)(null === (r = n.complianceInfo) || void 0 === r ? void 0 : r.countryCodeOrigin);
                                    case 8:
                                        return j = t.sent, t.next = 11, (0, v.getCountryName)(null === (o = n.complianceInfo) || void 0 === o || null === (l = o.importerAddress) || void 0 === l ? void 0 : l.countryCode);
                                    case 11:
                                        E = t.sent, T = {
                                            importerName: (null === (s = n.complianceInfo) || void 0 === s ? void 0 : s.importerName) || "",
                                            countryCodeOrigin: (null === (u = n.complianceInfo) || void 0 === u ? void 0 : u.countryCodeOrigin) || "",
                                            importerAddress: {
                                                street1: (null === (d = n.complianceInfo) || void 0 === d || null === (c = d.importerAddress) || void 0 === c ? void 0 : c.street1) || "",
                                                street2: (null === (p = n.complianceInfo) || void 0 === p || null === (m = p.importerAddress) || void 0 === m ? void 0 : m.street2) || "",
                                                city: (null === (_ = n.complianceInfo) || void 0 === _ || null === (g = _.importerAddress) || void 0 === g ? void 0 : g.city) || "",
                                                region: (null === (C = n.complianceInfo) || void 0 === C || null === (S = C.importerAddress) || void 0 === S ? void 0 : S.region) || "",
                                                postalCode: (null === (x = n.complianceInfo) || void 0 === x || null === (y = x.importerAddress) || void 0 === y ? void 0 : y.postalCode) || ""
                                            }
                                        }, this.setState({
                                            complianceInfo: T,
                                            isLoading: !1,
                                            countryNameOrigin: j,
                                            importerAddressCountryNameOrigin: E
                                        }), t.next = 17;
                                        break;
                                    case 16:
                                        __LOG__(3)`Unable to fetch compliance for product: ${e.id}`;
                                    case 17:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.state,
                                e = t.complianceInfo,
                                a = void 0 === e ? {} : e,
                                n = t.isLoading,
                                r = t.countryNameOrigin,
                                i = t.importerAddressCountryNameOrigin,
                                l = a.countryCodeOrigin,
                                s = a.importerName,
                                u = a.importerAddress;
                            return (0, T.jsxs)(g.default, {
                                onDrop: this.onBack,
                                theme: "striped",
                                children: [(0, T.jsx)(S.default, {
                                    a8n: "drawer-title-profile",
                                    title: x.default.t(1493),
                                    onBack: this.onBack,
                                    type: S.DRAWER_HEADER_TYPE.SMALL
                                }), (0, T.jsx)(C.default, {
                                    theme: n ? "center-content" : void 0,
                                    children: n ? (0, T.jsx)(m.ComplianceInfoLoading, {}) : (0, T.jsxs)(m.ComplianceInfoGroup, {
                                        children: [(0, T.jsx)(m.ComplianceInfoPrimitiveField, {
                                            value: r,
                                            label: x.default.t(1479)
                                        }), l && l !== _.default.COMPLIANCE_INFO_CODES.INDIA ? (0, T.jsxs)(T.Fragment, {
                                            children: [(0, T.jsx)(m.ComplianceInfoPrimitiveField, {
                                                value: s,
                                                label: x.default.t(1491)
                                            }), (0, T.jsx)(m.ComplianceInfoStructuralField, {
                                                valuesMap: (0, o.default)({
                                                    importerAddressCountryNameOrigin: i
                                                }, u),
                                                keys: ["street1", "street2", "city", "region", "postalCode", "importerAddressCountryNameOrigin"],
                                                label: x.default.t(1480)
                                            })]
                                        }) : null]
                                    })
                                })]
                            }, "product-details-drawer")
                        }
                    }]), n
                }(p.Component);
            w.CONCERNS = {
                product: ["id", "catalogWid"]
            }, w.displayName = "ProductMoreInformation";
            var I = (0, j.default)((0, y.default)((0, E.default)(w, w.CONCERNS)));
            e.default = I
        },
        45353: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = t.isAvailable,
                    a = t.fetching,
                    n = (0, r.useContext)(i.default),
                    h = (0, f.default)(t.product, ["productImageCollection", "productMsgMediaData", "catalogWid", "imageCdnUrl"]),
                    m = h.productImageCollection.toArray();
                return (0, p.jsx)("div", {
                    className: d.default.imageCarouselContainer,
                    children: (0, p.jsx)(l.default, {
                        images: m,
                        fetching: a,
                        onClick: e ? function(t, e) {
                            (0, s.logDetailImageClick)({
                                product: (0, c.unproxy)(h),
                                catalogContext: (0, u.getProductCatalogContext)(n)
                            });
                            var a = {
                                activeProductImage: e,
                                productImageCollection: h.productImageCollection,
                                getZoomNode: function() {
                                    return t
                                },
                                product: h
                            };
                            o.default.productImageViewerModal(a, (0, u.getProductCatalogSessionId)(n))
                        } : null,
                        renderFallback: !e,
                        fallbackMediaData: h.productMsgMediaData
                    })
                })
            };
            var r = a(67294),
                o = n(a(65901)),
                i = n(a(96706)),
                l = n(a(8001)),
                s = a(10951),
                u = a(49942),
                d = n(a(44612)),
                c = a(68220),
                f = n(a(69283)),
                p = a(85893)
        },
        78455: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = t.onPopupCancel,
                    a = t.onReport,
                    n = t.onTellUsMore,
                    d = function() {
                        e()
                    },
                    c = i.default.t(1552),
                    f = (0, u.jsx)("div", {
                        children: i.default.t(1550)
                    }, "ReportProductChoicePopup-desc"),
                    p = (0, u.jsx)(r.default, {
                        a8nText: "popup-controls-more",
                        type: "secondary",
                        onClick: function() {
                            n()
                        },
                        children: i.default.t(1553)
                    }, "ReportProductChoicePopup-moreBtn"),
                    h = (0, u.jsx)(r.default, {
                        a8nText: "popup-controls-report",
                        type: "secondary",
                        onClick: function() {
                            a()
                        },
                        children: i.default.t(1549)
                    }, "ReportProductChoicePopup-reportBtn"),
                    m = (0, u.jsx)(r.default, {
                        type: "secondary",
                        onClick: d,
                        children: i.default.t(1938)
                    }, 0),
                    _ = (0, u.jsxs)("div", {
                        className: s.default.buttons,
                        children: [(0, u.jsx)("div", {
                            className: s.default.button,
                            children: p
                        }), (0, u.jsx)("div", {
                            className: s.default.button,
                            children: h
                        }), (0, u.jsx)("div", {
                            className: s.default.button,
                            children: m
                        })]
                    });
                return (0, u.jsx)(o.default, {
                    handlers: {
                        escape: d
                    },
                    children: (0, u.jsx)(l.default, {
                        title: c,
                        actions: _,
                        children: f
                    })
                })
            };
            var r = n(a(51599)),
                o = n(a(58342)),
                i = n(a(45159)),
                l = n(a(73454)),
                s = n(a(78140)),
                u = a(85893)
        },
        63884: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = n(a(34575)),
                o = n(a(93913)),
                i = n(a(2205)),
                l = n(a(99842)),
                s = a(24224),
                u = n(a(65901)),
                d = n(a(50177)),
                c = n(a(45159)),
                f = a(10951),
                p = a(61689),
                h = n(a(78455)),
                m = n(a(22894)),
                _ = a(68220),
                v = a(85893),
                g = function(t) {
                    (0, i.default)(a, t);
                    var e = (0, l.default)(a);

                    function a() {
                        var t;
                        (0, r.default)(this, a);
                        for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(o)))._submitReason = function(e) {
                            var a = t.props,
                                n = a.product,
                                r = a.sessionId;
                            return (0, f.logReportProduct)({
                                product: (0, _.unproxy)(n),
                                catalogSessionId: r
                            }), (0, p.reportProduct)(n.catalogWid, n.id.toString(), e)
                        }, t.onDelete = function() {
                            t.end()
                        }, t.onReport = function(e) {
                            t._onShowSubmittedToast(e)
                        }, t.onTellUsMore = function() {
                            t.push((0, v.jsx)(m.default, {
                                onTellUsMoreSubmit: t.onReport,
                                onCancel: t.onCancel
                            }), "none")
                        }, t.onPopupCancel = function() {
                            t.end()
                        }, t.onCancel = function() {
                            t.end()
                        }, t._onReportSubmitted = function() {
                            t.end()
                        }, t._onShowSubmittedToast = function(e) {
                            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, s.genId)(),
                                n = t.props,
                                r = n.product,
                                o = n.sessionId,
                                i = t._submitReason(e),
                                l = new s.ActionType(c.default.t(1516)),
                                d = i.then((function() {
                                    return (0, f.logReportProductSuccess)({
                                        product: (0, _.unproxy)(r),
                                        catalogSessionId: o
                                    }), new s.ActionType(`${c.default.t(1515)}. ${c.default.t(1551)}`)
                                })).catch((function() {
                                    return (0, f.logReportProductFailure)({
                                        product: (0, _.unproxy)(r),
                                        catalogSessionId: o
                                    }), __LOG__(3)`error submitting product report`, new s.ActionType(c.default.t(1514), {
                                        actionText: c.default.t(1570),
                                        actionHandler: function() {
                                            return t._onShowSubmittedToast(e, a)
                                        }
                                    })
                                }));
                            return u.default.openToast((0, v.jsx)(s.ActionToast, {
                                id: a,
                                initialAction: l,
                                pendingAction: d
                            })), t._onReportSubmitted(), i
                        }, t
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, v.jsx)(h.default, {
                                onTellUsMore: this.onTellUsMore,
                                onReport: this.onReport,
                                onPopupCancel: this.onPopupCancel,
                                onCancel: this.onCancel
                            }))
                        }
                    }]), a
                }(d.default);
            e.default = g
        },
        22894: (t, e, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = t.onCancel,
                    a = t.onTellUsMoreSubmit,
                    n = (0, l.useState)(null),
                    r = (0, o.default)(n, 2),
                    f = r[0],
                    C = r[1],
                    S = function() {
                        e && e()
                    },
                    x = function(t) {
                        t.target && t.target.value && C(t.target.value)
                    },
                    y = c.default.t(1510),
                    j = (0, _.jsx)("div", {
                        className: (0, i.default)(h.default.section),
                        children: (0, _.jsx)("ul", {
                            className: h.default.reasonList,
                            children: v.map((function(t) {
                                return (0, _.jsx)("li", {
                                    children: (0, _.jsxs)("label", {
                                        className: h.default.label,
                                        children: [(0, _.jsx)("input", {
                                            type: "radio",
                                            name: t,
                                            value: t,
                                            onChange: x,
                                            className: h.default.input,
                                            checked: t === f
                                        }), (0, _.jsx)(g, {
                                            reason: t
                                        })]
                                    })
                                }, `ReportProductReasonPopup-${t}-option`)
                            }))
                        })
                    }),
                    E = (0, _.jsx)(s.default, {
                        a8nText: "popup-controls-submit",
                        type: "primary",
                        onClick: function() {
                            f ? a(f) : u.default.openToast((0, _.jsx)(m.default, {
                                msg: c.default.t(1517),
                                id: (0, m.genId)()
                            }))
                        },
                        disabled: !f,
                        children: c.default.t(1513)
                    }, "ReportProductReasonPopup-submitButton"),
                    P = (0, _.jsx)(s.default, {
                        type: "secondary",
                        a8nText: "popup-controls-cancel",
                        onClick: S,
                        children: c.default.t(1938)
                    }, "ReportProductReasonPopup-cancelButton"),
                    T = (0, _.jsxs)("div", {
                        className: h.default.buttons,
                        children: [P, E]
                    });
                return (0, _.jsx)(d.default, {
                    handlers: {
                        escape: S
                    },
                    children: (0, _.jsx)(p.default, {
                        title: y,
                        actions: T,
                        children: j
                    })
                })
            };
            var o = r(a(63038)),
                i = r(a(94184)),
                l = a(67294),
                s = r(a(51599)),
                u = r(a(65901)),
                d = r(a(58342)),
                c = r(a(45159)),
                f = r(a(62848)),
                p = r(a(73454)),
                h = r(a(85371)),
                m = n(a(92428)),
                _ = a(85893),
                v = ["NO_MATCH", "SPAM", "ILLEGAL", "SCAM", "KNOCKOFF", "OTHER"];

            function g(t) {
                var e = t.reason;
                switch (e) {
                    case "NO_MATCH":
                        return (0, _.jsx)(f.default, {
                            id: 1508
                        });
                    case "SPAM":
                        return (0, _.jsx)(f.default, {
                            id: 1512
                        });
                    case "ILLEGAL":
                        return (0, _.jsx)(f.default, {
                            id: 1506
                        });
                    case "SCAM":
                        return (0, _.jsx)(f.default, {
                            id: 1511
                        });
                    case "KNOCKOFF":
                        return (0, _.jsx)(f.default, {
                            id: 1507
                        });
                    case "OTHER":
                        return (0, _.jsx)(f.default, {
                            id: 1509
                        });
                    default:
                        throw new Error(`Invalid reason: ${e}`)
                }
            }
        },
        18815: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = t.isEditMode,
                    a = t.catalog,
                    n = t.subtitle,
                    h = t.hideIncompleteRows,
                    m = t.productsToShow,
                    _ = t.businessProfile,
                    v = (0, p.jsx)(f.default, {
                        onViewShopClick: function() {
                            (0, u.logShopsManagementEvent)(d.default.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_VIEW_SHOPS_FROM_EDIT_BIZ_PROFILE)
                        },
                        onCommerceManagerClick: function() {
                            (0, u.logShopsManagementEvent)(d.default.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_COMMERCE_MANAGER_FROM_EDIT_BIZ_PROFILE)
                        },
                        onCancelClick: function() {
                            (0, u.logShopsManagementEvent)(d.default.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_CANCEL_FROM_EDIT_BIZ_PROFILE)
                        }
                    });
                return (0, p.jsx)(i.default, {
                    onProductDetail: function(t) {
                        if (e) l.default.openModal(v), (0, u.logShopsManagementEvent)(d.default.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_SHOPS_PRODUCT_PREVIEW_TILE, {
                            shouldLogJid: !1
                        });
                        else {
                            var a = new URL((0, c.default)(t.url, "product.url"), `https://${s.default.HOSTNAME.FACEBOOK}`);
                            r.default.open(String(a))
                        }
                    },
                    onProductCatalog: function() {
                        e ? (l.default.openModal(v), (0, u.logShopsManagementEvent)(d.default.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_MANAGE_SHOPS)) : (0, o.goToShop)(_)
                    },
                    catalog: a,
                    subtitle: n,
                    hideIncompleteRows: h,
                    productsToShow: m,
                    showShopsLogo: !0
                })
            };
            var r = n(a(4670)),
                o = a(19218),
                i = n(a(13833)),
                l = n(a(65901)),
                s = n(a(94253)),
                u = a(62730),
                d = n(a(50507)),
                c = n(a(61698)),
                f = n(a(89399)),
                p = a(85893)
        },
        84245: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = e.RingTheme = void 0;
            var r = n(a(59713)),
                o = n(a(81109)),
                i = n(a(94184)),
                l = n(a(50234)),
                s = n(a(69283)),
                u = a(85893),
                d = a(54302).Mirrored(["STATUS_V3_PANEL", "BUSINESS_CONTACT_INFO"]);
            e.RingTheme = d;

            function c(t) {
                var e, a = t.stroke,
                    n = t.size,
                    c = (0, s.default)(t.statusV3, ["unreadCount", "totalCount", "contact"]),
                    f = function(t) {
                        var e = 100 + a;
                        return (0, u.jsx)("circle", (0, o.default)({
                            cx: e / 2,
                            cy: e / 2,
                            r: 50,
                            fill: "none",
                            strokeLinecap: "round",
                            strokeWidth: a
                        }, t))
                    },
                    p = function(t, e, a, n) {
                        for (var r = "", o = 0; o < t; o++) r += o === t - 1 ? `${e} ${a-t*(n+e)+n} ` : `${e} ${n} `;
                        return r
                    },
                    h = 100 + a,
                    m = c.totalCount,
                    _ = 10,
                    v = 50 * Math.PI * 2;
                v - 10 * m < 1 && (_ = v / m / 1.2);
                var g, C, S = (v - _ * m) / m,
                    x = v / 4 - _ / 2,
                    y = c.contact.isMe ? 0 : c.unreadCount,
                    j = m - y;
                if (y) {
                    var E, P = x + m * (_ + S);
                    1 !== m && (E = p(y, S, v, _)), g = f({
                        strokeDashoffset: P,
                        strokeDasharray: E,
                        className: l.default.unread
                    })
                }
                if (j) {
                    var T, w = x + j * (_ + S);
                    1 !== m && (T = p(j, S, v, _)), C = f({
                        strokeDashoffset: w,
                        strokeDasharray: T,
                        className: l.default.read
                    })
                }
                return (0, u.jsxs)("svg", {
                    className: (0, i.default)((e = {}, (0, r.default)(e, l.default.statusV3PanelRing, t.theme === d.STATUS_V3_PANEL), (0, r.default)(e, l.default.businessContactInfoRing, t.theme === d.BUSINESS_CONTACT_INFO), e)),
                    width: n,
                    height: n,
                    viewBox: `0 0 ${h} ${h}`,
                    children: [g, C]
                })
            }
            c.defaultProps = {
                size: 48,
                stroke: 4,
                theme: d.STATUS_V3_PANEL
            };
            var f = c;
            e.default = f
        },
        84176: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.setupStatusV3Controller = function(t, e) {
                if (t) {
                    if (t.type === s.default.TYPE.IMAGE) {
                        var a = 4500;
                        return i.default.isEmpty(e.caption) || (a += 2e3 * Math.min(e.caption.length / 150, 1)), new d(a)
                    }
                    return t.type === s.default.TYPE.VIDEO ? e.isGif ? new f : new u.default : new d(3e3)
                }
                if (e.type === l.default.MSG_TYPE.CHAT) {
                    var n = 2e3 + 60 * Math.min(e.body.length, 1e3);
                    return new d(n)
                }
                return new d(3e3)
            }, e.StatusV3GifController = e.StatusV3CountdownController = void 0;
            var r = n(a(34575)),
                o = n(a(93913)),
                i = n(a(96486)),
                l = n(a(94253)),
                s = n(a(72397)),
                u = n(a(73550)),
                d = function() {
                    function t(e) {
                        var a = this;
                        (0, r.default)(this, t), this.addListeners = function(t, e, n) {
                            a._onStart = t, a._onPause = e, a._onEnded = n
                        }, this.removeListeners = function() {
                            a._onStart = void 0, a._onPause = void 0, a._onEnded = void 0
                        }, this.play = function() {
                            if (a._timer) __LOG__(2)`Duplicate timer start`;
                            else {
                                a._timer = setTimeout(a._onTimeup, a._timeout), a._start = (new Date).getTime();
                                var t = a._onStart;
                                t && t(a._timeout, a._duration)
                            }
                        }, this.stop = function() {
                            if (a._timer) {
                                clearTimeout(a._timer), a._timer = null;
                                var t = (new Date).getTime();
                                a._timeout -= t - a._start;
                                var e = a._onPause;
                                e && e()
                            } else __LOG__(2)`Timer stop called on stopped timer`
                        }, this.resume = function() {
                            a.play()
                        }, this.pause = function() {
                            a.stop()
                        }, this._onTimeup = function() {
                            var t = a._onEnded;
                            t && t()
                        }, this._duration = e, this._timeout = this._duration, this._start = 0
                    }
                    return (0, o.default)(t, [{
                        key: "duration",
                        get: function() {
                            return this._duration
                        }
                    }]), t
                }();
            e.StatusV3CountdownController = d;
            var c = 6e3,
                f = function() {
                    function t() {
                        var e = this;
                        (0, r.default)(this, t), this.removeListeners = function() {
                            e._onStart = void 0, e._onPause = void 0, e._onEnded = void 0, e._videoController.removeListeners(), e._countdownController.removeListeners()
                        }, this.setVideo = function(t, a) {
                            e._video !== t && (e._video = t, null != a && (e._duration = a), e._videoController.setVideo(t))
                        }, this._onVideoStartHandler = function() {
                            var t = e._video;
                            if (null != t) {
                                var a = e._onStart,
                                    n = t.duration || e._duration,
                                    r = Math.max(3 * n * 1e3, c);
                                a && a(r - 1e3 * n * e._playCounter - 1e3 * t.currentTime, r)
                            }
                        }, this._onVideoPauseHandler = function() {
                            var t = e._onPause;
                            t && t()
                        }, this._onVideoEndedHandler = function() {
                            var t = e._video;
                            if (null != t) {
                                e._playCounter++;
                                var a = e._onEnded;
                                3 === e._playCounter && (e._videoEnded = !0, e._timerEnded && a && a()), t.currentTime = 0, e._videoEnded && e._timerEnded || setTimeout((function() {
                                    e._videoController.play()
                                }), 0)
                            }
                        }, this._onTimerEndedHandler = function() {
                            var t = e._onEnded;
                            e._timerEnded = !0, t && e._videoEnded && t()
                        }, this.play = function() {
                            e._videoController.play(), e._countdownController.play()
                        }, this.stop = function() {
                            e._videoController.stop(), e._countdownController.stop()
                        }, this.resume = function() {
                            e._videoController.resume(), e._countdownController.resume()
                        }, this.pause = function() {
                            e._videoController.pause(), e._countdownController.pause()
                        }, this._playCounter = 0, this._timerEnded = !1, this._videoEnded = !1, this._videoController = new u.default, this._countdownController = new d(c), this._videoController.addListeners(this._onVideoStartHandler, this._onVideoPauseHandler, this._onVideoEndedHandler), this._countdownController.addListeners(void 0, void 0, this._onTimerEndedHandler)
                    }
                    return (0, o.default)(t, [{
                        key: "addListeners",
                        value: function(t, e, a) {
                            this._onStart = t, this._onPause = e, this._onEnded = a
                        }
                    }, {
                        key: "duration",
                        get: function() {
                            return Math.max(3 * (this._video && this._video.duration || this._duration) * 1e3, c)
                        }
                    }]), t
                }();
            e.StatusV3GifController = f
        },
        3495: (t, e, a) => {
            "use strict";
            var n = a(52108).default,
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(a(59713)),
                i = r(a(94184)),
                l = a(67294),
                s = r(a(43890)),
                u = r(a(57136)),
                d = r(a(66265)),
                c = a(85893);

            function f(t, e) {
                var a = t.onClick,
                    r = t.current,
                    f = t.total,
                    p = (0, l.useRef)(null),
                    h = (0, l.useRef)(null),
                    m = [];
                (0, l.useEffect)((function() {
                    __LOG__(2)`Current index: ${r}, total count: ${f}`, r >= 0 && r < f || (__LOG__(4, void 0, new Error, !0)`Assertion failed!`, SEND_LOGS("bad current status v3 index"))
                }), []);
                var _ = function(t, e) {
                        if (p.current) {
                            var a = 1e3 * s.default.statusVideoMaxDuration,
                                n = Math.min(t, a),
                                r = Math.min(e, a);
                            (0, d.default)(p.current, "stop"), h.current = (0, d.default)(p.current, {
                                translateX: ["0%", `-${n/r*100}%`]
                            }, {
                                duration: n,
                                easing: "linear"
                            })
                        }
                    },
                    v = function() {
                        p.current && (0, d.default)(p.current, "stop")
                    },
                    g = function() {
                        var t = h.current;
                        return t || n.resolve()
                    };
                (0, l.useImperativeHandle)(e, (function() {
                    return {
                        handleStart: _,
                        handlePause: v,
                        handleEnded: g
                    }
                }));
                for (var C = 100 / t.total + "%", S = function(e) {
                        var n, r = (0, i.default)(u.default.foreground, (n = {}, (0, o.default)(n, u.default.filled, e < t.current), (0, o.default)(n, u.default.empty, e > t.current), (0, o.default)(n, u.default.active, e === t.current), n)),
                            l = (0, c.jsxs)("div", {
                                className: u.default.wrapper,
                                style: {
                                    width: C
                                },
                                onClick: function() {
                                    return t = e, void(a && a(t));
                                    var t
                                },
                                children: [(0, c.jsx)("div", {
                                    className: u.default.bg
                                }), (0, c.jsx)("div", {
                                    className: u.default.mask,
                                    children: (0, c.jsx)("div", {
                                        className: r,
                                        ref: e === t.current ? p : function() {}
                                    })
                                })]
                            }, e);
                        m.push(l)
                    }, x = 0; x < t.total; ++x) S(x);
                return (0, c.jsx)("div", {
                    className: u.default.container,
                    children: m
                })
            }
            var p = (0, l.forwardRef)(f);
            e.default = p
        },
        45829: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = t.seenCount,
                    a = t.onClick,
                    n = (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(i.default, {
                            name: "status-v3-seen",
                            className: (0, r.default)(u.iconSeen)
                        }), (0, s.jsx)("div", {
                            className: (0, r.default)(u.seenCount),
                            children: e
                        })]
                    }),
                    d = a ? (0, s.jsx)(l.default, {
                        xstyle: u.container,
                        onClick: a,
                        children: n
                    }) : n;
                if (null != e) return (0, s.jsx)("div", {
                    className: (0, r.default)(u.container),
                    children: d
                });
                return (0, s.jsx)(o.default, {
                    stroke: 3,
                    size: 12
                })
            };
            var r = n(a(56720)),
                o = n(a(85651)),
                i = n(a(7665)),
                l = n(a(76080)),
                s = a(85893),
                u = {
                    iconSeen: {
                        color: "lxozqee9"
                    },
                    seenCount: {
                        marginLeft: "qddwjlxl",
                        color: "lxozqee9"
                    },
                    container: {
                        display: "p357zi0d",
                        flexDirection: "sap93d0t",
                        alignItems: "gndfcl4n",
                        justifyContent: "ac2vgrno"
                    }
                }
        },
        33633: (t, e, a) => {
            "use strict";
            var n = a(52108).default,
                r = a(20862),
                o = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = e.StatusV3MsgNotFound = e.StatusV3LoadingError = e.InvalidStatusV3Iterator = void 0;
            var i = o(a(87757)),
                l = o(a(48926)),
                s = o(a(34575)),
                u = o(a(2205)),
                d = o(a(99842)),
                c = a(74733),
                f = a(10980),
                p = a(66141),
                h = o(a(96486)),
                m = o(a(87691)),
                _ = r(a(45951)),
                v = function(t) {
                    (0, u.default)(a, t);
                    var e = (0, d.default)(a);

                    function a() {
                        return (0, s.default)(this, a), e.apply(this, arguments)
                    }
                    return a
                }((0, p.customError)("InvalidStatusV3Iterator"));
            e.InvalidStatusV3Iterator = v;
            var g = function(t) {
                (0, u.default)(a, t);
                var e = (0, d.default)(a);

                function a() {
                    return (0, s.default)(this, a), e.apply(this, arguments)
                }
                return a
            }((0, p.customError)("StatusV3LoadingError"));
            e.StatusV3LoadingError = g;
            var C = function(t) {
                (0, u.default)(a, t);
                var e = (0, d.default)(a);

                function a() {
                    return (0, s.default)(this, a), e.apply(this, arguments)
                }
                return a
            }((0, p.customError)("StatusV3MsgNotFound"));
            e.StatusV3MsgNotFound = C;
            e.default = function t(e, a) {
                var r = this;
                if ((0, s.default)(this, t), this._printInfo = function() {
                        r.statuses.forEach((function(t) {
                            __LOG__(2)`Total count: ${t.totalCount}, unread count: ${t.unreadCount}, msgs length: ${t.msgs.length}`
                        }))
                    }, this.getFirstUnread = function(t, e, a) {
                        var o = r.statuses.findIndex((function(e) {
                            return e.statusV3 === t
                        }));
                        if (-1 !== o) {
                            var i, l = r.statuses[o],
                                s = l.readMsgKeys;
                            return a ? (i = l.msgs ? l.msgs.findIndex((function(t) {
                                return a && t.id.toString() === a.toString()
                            })) : -1) >= 0 ? n.resolve({
                                msgIdx: i,
                                statusIdx: o
                            }) : n.reject(new v) : -1 === (i = l.msgs ? l.msgs.findIndex((function(t) {
                                return !s.includes(t.id.toString())
                            })) : -1) && t.msgs.msgLoadState.noEarlierMsgs ? (i = e ? 0 : l.msgs.length - 1, n.resolve({
                                msgIdx: i,
                                statusIdx: o
                            })) : -1 !== i ? n.resolve({
                                msgIdx: i,
                                statusIdx: o
                            }) : 0 === l.unreadCount && e && l.msgs.length > 0 ? n.resolve({
                                msgIdx: 0,
                                statusIdx: o
                            }) : r._fetchMore(t).then((function() {
                                return r.getFirstUnread(t, e, a)
                            })).catch((function(t) {
                                throw __LOG__(3)`error while getting first unread status: ${String(t)}`, new v
                            }))
                        }
                        return n.reject(new v)
                    }, this.hasNext = function(t) {
                        var e = r.statuses[t.statusIdx];
                        return t.msgIdx + 1 < e.totalCount || t.statusIdx + 1 < r.statuses.length
                    }, this.getNext = function(t) {
                        var e = r.statuses[t.statusIdx],
                            a = e.statusV3;
                        if (t.msgIdx + 1 < e.totalCount && t.msgIdx + 1 < e.msgs.length) return n.resolve({
                            msgIdx: t.msgIdx + 1,
                            statusIdx: t.statusIdx
                        });
                        if (t.msgIdx + 1 < e.totalCount) return a.msgs.msgLoadState.noEarlierMsgs ? (__LOG__(3)`Loaded ${e.msgs.length} messages with total count ${e.totalCount}, but noEarlierMsgs set`, n.reject(new v)) : r._fetchMore(a).then((function() {
                            return r.getNext(t)
                        })).catch((function(e) {
                            if (__LOG__(3)`error while loading more status msgs: ${String(e)}`, t.statusIdx + 1 < r.statuses.length) {
                                var a = r.statuses[t.statusIdx + 1].statusV3;
                                return r.getFirstUnread(a, !0)
                            }
                            throw new v
                        }));
                        if (t.statusIdx + 1 < r.statuses.length) {
                            var o = r.statuses[t.statusIdx + 1].statusV3;
                            return r.getFirstUnread(o, !0)
                        }
                        return n.reject(new v)
                    }, this.hasPrev = function(t) {
                        return t.msgIdx > 0 || t.statusIdx > 0
                    }, this.getPrev = function(t) {
                        if (t.msgIdx > 0) return n.resolve({
                            msgIdx: t.msgIdx - 1,
                            statusIdx: t.statusIdx
                        });
                        if (t.statusIdx > 0) {
                            var e = r.statuses[t.statusIdx - 1].statusV3;
                            return r.getFirstUnread(e, !1)
                        }
                        return n.reject(new v)
                    }, this.statusAt = function(t, e) {
                        var a = r.statuses[t.statusIdx],
                            o = a.statusV3;
                        return e < a.msgs.length ? n.resolve({
                            msgIdx: e,
                            statusIdx: t.statusIdx
                        }) : o.msgs.msgLoadState.noEarlierMsgs ? n.reject(new v) : r._fetchMore(o).then((function() {
                            return r.statusAt(t, e)
                        })).catch((function(t) {
                            throw __LOG__(3)`error while loading more status msgs: ${String(t)}`, new v
                        }))
                    }, this._fetchMore = function() {
                        var t = (0, l.default)(i.default.mark((function t(e) {
                            return i.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, (0, f.promiseLoop)(function() {
                                            var t = (0, l.default)(i.default.mark((function t(a, n, o) {
                                                var l, s, u, d, f, p, m, v, g;
                                                return i.default.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            return l = (0, c.delayMs)(_.expBackoff(o, 12e4, 1e3, .1)), t.prev = 1, t.next = 4, e.loadMore();
                                                        case 4:
                                                            if (-1 === (s = r.statuses.findIndex((function(t) {
                                                                    return t.statusV3 === e
                                                                })))) {
                                                                t.next = 18;
                                                                break
                                                            }
                                                            u = r.statuses[s], d = u.totalCount, f = u.unreadCount, p = e.msgs.getModelsArray().slice(0, d), m = d - f, v = p.slice(0, m), g = h.default.map(v, (function(t) {
                                                                return t.id.toString()
                                                            })), u.msgs = p, u.readMsgKeys = h.default.uniq(h.default.concat(u.readMsgKeys, g)), a(!0), t.next = 23;
                                                            break;
                                                        case 18:
                                                            if (!(o >= 4)) {
                                                                t.next = 22;
                                                                break
                                                            }
                                                            a(!1), t.next = 23;
                                                            break;
                                                        case 22:
                                                            return t.abrupt("return", l);
                                                        case 23:
                                                            t.next = 32;
                                                            break;
                                                        case 25:
                                                            if (t.prev = 25, t.t0 = t.catch(1), !(o >= 4)) {
                                                                t.next = 31;
                                                                break
                                                            }
                                                            a(!1), t.next = 32;
                                                            break;
                                                        case 31:
                                                            return t.abrupt("return", l);
                                                        case 32:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t, null, [
                                                    [1, 25]
                                                ])
                                            })));
                                            return function() {
                                                return t.apply(this, arguments)
                                            }
                                        }());
                                    case 2:
                                        if (t.sent) {
                                            t.next = 5;
                                            break
                                        }
                                        throw new g;
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(), a) {
                    var o = e.msgs.getModelsArray().find((function(t) {
                        return a && t.id.toString() === a.toString()
                    }));
                    if (!o) throw new C;
                    this.statuses = [{
                        statusV3: e,
                        totalCount: 1,
                        unreadCount: 0,
                        msgs: [o],
                        readMsgKeys: [o.id.toString()]
                    }]
                } else if (e.unreadCount > 0 && !e.contact.isMe && !e.contact.statusMute) {
                    var u = m.default.getUnexpired(!0),
                        d = [];
                    u.forEach((function(t) {
                        if (!t.contact.statusMute) {
                            var e = t.msgs.getModelsArray(),
                                a = t.totalCount - t.unreadCount,
                                n = e.slice(0, a),
                                r = h.default.map(n, (function(t) {
                                    return t.id.toString()
                                }));
                            d.push({
                                statusV3: t,
                                totalCount: t.totalCount,
                                unreadCount: t.unreadCount,
                                msgs: e,
                                readMsgKeys: r
                            })
                        }
                    })), this.statuses = d
                } else {
                    var p = e.msgs.getModelsArray(),
                        S = e.totalCount - e.unreadCount,
                        x = p.slice(0, S),
                        y = h.default.map(x, (function(t) {
                            return t.id.toString()
                        })),
                        j = [{
                            statusV3: e,
                            totalCount: e.totalCount,
                            unreadCount: e.unreadCount,
                            msgs: p,
                            readMsgKeys: y
                        }];
                    this.statuses = j
                }
                this._printInfo()
            }
        },
        73550: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = n(a(34575)),
                o = n(a(93913)),
                i = n(a(43890));

            function l(t) {
                return Math.min(t, i.default.statusVideoMaxDuration)
            }
            var s = function() {
                function t() {
                    var e = this;
                    (0, r.default)(this, t), this.addListeners = function(t, a, n) {
                        e._onStart = t, e._onPause = a, e._onEnded = n
                    }, this.setVideo = function(t) {
                        e._video !== t && (e._unsetVideo(), e._video = t, null != t && (t.addEventListener("playing", e._onPlayingHandler), t.addEventListener("pause", e._onPauseHandler), t.addEventListener("ended", e._onEndedHandler), t.addEventListener("timeupdate", e._onTimeUpdate)))
                    }, this._unsetVideo = function() {
                        var t = e._video;
                        t && (e.stop(), t.removeEventListener("playing", e._onPlayingHandler), t.removeEventListener("pause", e._onPauseHandler), t.removeEventListener("ended", e._onEndedHandler), t.removeEventListener("timeupdate", e._onTimeUpdate))
                    }, this.play = function() {
                        e._video && e._video.play()
                    }, this.pause = function() {
                        e._video && !e._video.paused && e._video.pause()
                    }, this.resume = function() {
                        e._video && e._video.play()
                    }, this.stop = function() {
                        e._video && !e._video.paused && e._video.pause()
                    }, this._onPlayingHandler = function() {
                        var t = e._video;
                        if (null != t) {
                            var a = e._onStart;
                            if (a) {
                                var n = l(t.duration);
                                a(1e3 * (n - t.currentTime), 1e3 * n)
                            }
                        }
                    }, this._onPauseHandler = function() {
                        var t = e._onPause;
                        t && t()
                    }, this._onEndedHandler = function() {
                        var t = e._onEnded;
                        t && t()
                    }, this._onTimeUpdate = function() {
                        var t, a = null === (t = e._video) || void 0 === t ? void 0 : t.currentTime;
                        if (null != a && a >= i.default.statusVideoMaxDuration) {
                            e.stop(), e._onEndedHandler();
                            var n = e._video;
                            n && (n.removeEventListener("timeupdate", e._onTimeUpdate), n.removeEventListener("ended", e._onEndedHandler))
                        }
                    }, this.removeListeners = function() {
                        e.stop(), e._onStart = void 0, e._onPause = void 0, e._onEnded = void 0
                    }
                }
                return (0, o.default)(t, [{
                    key: "duration",
                    get: function() {
                        return null == this._video ? 0 : 1e3 * l(this._video.duration)
                    }
                }]), t
            }();
            e.default = s
        },
        12347: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                window.getSelection().removeAllRanges();
                var e = document.getElementById(t),
                    a = document.createRange();
                e && a.selectNode(e), window.getSelection().addRange(a);
                try {
                    var n = document.execCommand("copy");
                    return window.getSelection().removeAllRanges(), n
                } catch (t) {
                    return !1
                }
            }
        },
        99617: (t, e, a) => {
            "use strict";
            var n = a(52108).default,
                r = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(a(81109)),
                i = r(a(34575)),
                l = r(a(93913)),
                s = a(28568),
                u = a(10901),
                d = {};
            d[s.ExtendedTextMessageFontType.SERIF] = {
                google: {
                    families: ["Roboto"]
                }
            }, d[s.ExtendedTextMessageFontType.SANS_SERIF] = {
                google: {
                    families: ["Droid Serif"]
                }
            }, d[s.ExtendedTextMessageFontType.NORICAN_REGULAR] = {
                google: {
                    families: ["Norican"]
                }
            }, d[s.ExtendedTextMessageFontType.BRYNDAN_WRITE] = {
                custom: {
                    families: ["Bryndan-Write"]
                }
            }, d[s.ExtendedTextMessageFontType.OSWALD_HEAVY] = {
                google: {
                    families: ["Oswald:bold"]
                }
            };
            var c = {};
            c[s.ExtendedTextMessageFontType.BRYNDAN_WRITE] = `@font-face {font-family:"Bryndan-Write"; src:url("${u}") format("truetype");}`;
            var f = new(function() {
                function t() {
                    (0, i.default)(this, t), this.loadedFonts = {}, this.loadingPromise = {}
                }
                return (0, l.default)(t, [{
                    key: "load",
                    value: function(t) {
                        var e = this;
                        if (this.loadedFonts[t]) return n.resolve();
                        if (this.loadingPromise[t]) return this.loadingPromise[t];
                        var a = d[t],
                            r = c[t],
                            i = (r ? new n((function(t, e) {
                                var a = document.createElement("style");
                                a.appendChild(document.createTextNode(r)), a.onload = t, a.onerror = e, document.head && document.head.appendChild(a)
                            })) : n.resolve()).then((function() {
                                return new n((function(n, r) {
                                    var i = (0, o.default)((0, o.default)({}, a), {}, {
                                        active: function() {
                                            e.loadedFonts[t] = !0, n()
                                        },
                                        inactive: function() {
                                            e.loadingPromise[t] = void 0, r("Failed to load font: " + t)
                                        }
                                    });
                                    WebFont.load(i)
                                }))
                            }));
                        return this.loadingPromise[t] = i, i
                    }
                }, {
                    key: "loadAllFonts",
                    value: function() {
                        var t = this;
                        return n.all(Array.from(s.ExtendedTextMessageFontType.members()).map((function(e) {
                            return t.load(e)
                        })))
                    }
                }]), t
            }());
            e.default = f
        },
        96150: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                return o.default.supportsFeature(o.default.F.RICH_TEXT) ? (0, r.default)(t, s, l.TextSerializer) : t
            };
            var r = n(a(91786)),
                o = n(a(38032)),
                i = a(72896),
                l = a(54637),
                s = i.Configuration.ComposeBox()
        },
        91240: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.createProductLink = function(t, e) {
                return `https://wa.me/p/${e}/${t}`
            }, e.createCatalogLink = function(t) {
                return `https://wa.me/c/${t}`
            }
        },
        52087: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.dayToWeekday = d, e.businessHoursFromConfig = c, e.getWebsiteLink = function(t) {
                return `https://l.wl.co/l?u=${encodeURIComponent(t)}`
            }, e.getBusinessHours = function(t) {
                var e = t.config,
                    a = (new Date).getDay();
                return l.DAYS_OF_WEEK.map((function(t, n) {
                    var r = (a + n) % l.DAYS_OF_WEEK.length,
                        o = l.DAYS_OF_WEEK[r];
                    return {
                        day: d(r),
                        hours: c(e[o]),
                        first: 0 === n
                    }
                }))
            }, e.getBusinessHoursForEdit = function(t) {
                var e, a = null == t ? {} : t.config,
                    n = t || {},
                    s = n.note,
                    d = n.timezone,
                    c = l.DAYS_OF_WEEK.map((function(t, n) {
                        var r, l = a[t],
                            s = i.default.weekdays(n);
                        return l && (e = l.mode, l.hours && (r = l.hours.map((function(t) {
                            var e = (0, o.default)(t, 2),
                                a = e[0],
                                n = e[1];
                            return [(0, u.minutesToTime)(a), (0, u.minutesToTime)(n)]
                        })))), {
                            dayName: s,
                            dayKey: t,
                            closed: !l,
                            hours: r
                        }
                    })),
                    f = i.default.weekdays(!0, 0),
                    p = i.default.weekdays().indexOf(f),
                    h = c.splice(p);
                return {
                    mode: e,
                    days: [].concat((0, r.default)(h), (0, r.default)(c)),
                    timezone: d,
                    note: s
                }
            }, Object.defineProperty(e, "minutesToTime", {
                enumerable: !0,
                get: function() {
                    return u.minutesToTime
                }
            }), Object.defineProperty(e, "timeStringToMinutes", {
                enumerable: !0,
                get: function() {
                    return u.timeStringToMinutes
                }
            });
            var r = n(a(319)),
                o = n(a(63038)),
                i = n(a(30381)),
                l = a(74871),
                s = n(a(45159)),
                u = a(51733);

            function d(t) {
                return i.default.weekdays(t)
            }

            function c(t) {
                switch (t && t.mode) {
                    case l.BUSINESS_HOUR_MODES.SPECIFIC_HOURS:
                        return t && t.hours ? t.hours.map((function(t) {
                            return t.map(u.minutesToTime).join(" - ")
                        })).join("\n") : "";
                    case l.BUSINESS_HOUR_MODES.APPOINTMENT_ONLY:
                        return s.default.t(421);
                    case l.BUSINESS_HOUR_MODES.OPEN_24H:
                        return s.default.t(433);
                    default:
                        return s.default.t(422)
                }
            }
        },
        51733: (t, e, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.minutesToTime = function(t) {
                return o.default.utc().startOf("day").add(t, "minutes").format(i.default.timestampStrFormat())
            }, e.timeStringToMinutes = void 0;
            var r = n(a(43269)),
                o = n(a(30381)),
                i = n(a(10399)),
                l = ["h:mm A", "h:mmA", "HH:mm", "HH.mm", "H:mm", "H.mm"];
            e.timeStringToMinutes = function(t) {
                var e, a = t.trim();
                if (a) {
                    var n, i = (0, r.default)(l);
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            var s = n.value,
                                u = (0, o.default)(a, s, !0);
                            if (u.isValid()) {
                                e = u;
                                break
                            }
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    if (e) {
                        var d = e,
                            c = (0, o.default)().startOf("day"),
                            f = d.diff(c);
                        return o.default.duration(f).asMinutes()
                    }
                }
            }
        },
        10901: (t, e, a) => {
            t.exports = a.p + "bryndan_write_20e48b2ec8c64b2a1ceb5b28d9bcc9d0.ttf"
        },
        21997: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                coverPhoto: "_3_2za",
                isEditable: "_1aFdX",
                avatar: "_3RULU",
                noStatusBorder: "_3xp59",
                hasStatusBorder: "IYr2u"
            }
        },
        91214: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                cartIcon: "PKmps",
                inheritColor: "qM2C3"
            }
        },
        42684: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                notifyName: "_3Pmbe"
            }
        },
        41323: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                container: "_36FbL",
                block: "_11V85",
                main: "_1ER5I",
                side: "_1YLup",
                multiline: "_1tPXz",
                restrictSpacing: "_2trLJ",
                themeNewChatInfo: "_23z6W"
            }
        },
        55140: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                carousel: "alksS",
                contentContainer: "OkAlG",
                slidesContainer: "_1w5W1",
                loaded: "j1J2j",
                fadeIn: "_2QkLV",
                spinnerContainer: "_1kDDe",
                spinner: "_3j4fM"
            }
        },
        57246: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                slide: "_2MjCA",
                slideInnerContainer: "_2cG76",
                image: "ubkU5"
            }
        },
        69775: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                canvasComponent: "_1JMw2",
                canvasEmpty: "_166Sa",
                canvasSecondRow: "_3Ggjl",
                canvasFirst: "_2CUR-",
                more: "_1ZQxr",
                container: "_3G6fW",
                justifySpaceBetween: "_1I8Ig",
                galleryEmpty: "_2Liso",
                drawer: "_3q1U7",
                drawerBody: "_1uuJx",
                themeNewChatInfo: "gkHEP"
            }
        },
        87041: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                icon: "_23QTJ",
                disabled: "iP9Fm",
                transparent: "_2HMfd",
                compact: "_25tj-"
            }
        },
        87571: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                labelRow: "_1_9J2",
                standaloneLabelRow: "_2Lv1o",
                labelContainer: "_3A-ba",
                standaloneLabelContainer: "_34ojr"
            }
        },
        59271: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                section: "_17dED",
                control: "_3T0RE"
            }
        },
        555: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                icon: "_2I7Gg"
            }
        },
        73858: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                container: "_2QzJd",
                containerNoIcon: "_1EaD-",
                containerListAligned: "_1I4H7",
                icon: "_13qOF",
                danger: "_1O1hL",
                success: "x8B-w",
                bodyContainer: "_36Lzk",
                body: "Qy5WW",
                themeNewChatInfo: "_1X2he"
            }
        },
        80257: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                description: "_14eHx"
            }
        },
        70583: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                actionText: "_3nrbz"
            }
        },
        67978: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                mediaPanelTools: "f3Dup",
                profileThumb: "_2xUs5",
                profileContainer: "Cq6XJ",
                media: "_1_TZb",
                profileViewer: "_3OWRM",
                profileViewerImg: "_2hH_e",
                container: "_9-YHG",
                "media-viewer-animate": "_7DTuk",
                mediaViewerAnimate: "_7DTuk",
                headerContainer: "_1U_13"
            }
        },
        60654: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                icon: "woEzZ"
            }
        },
        67873: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                icon: "_1eLBZ"
            }
        },
        19614: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                container: "xWfq_",
                popupPanel: "B7YnW",
                wrapper: "_35Bca",
                emojiIcon: "_1nsaN",
                sendIcon: "dJI7Y",
                lineWrapper: "_2X8K7"
            }
        },
        4764: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                playerWrapper: "_1E241",
                mediaViewer: "_19K91",
                mediaStateControls: "_12QEi",
                playerBackground: "_20Ki1",
                media: "Kr9Tk",
                captionBackdrop: "_43j_5",
                mediaCaption: "_3yP6V",
                progressBackdrop: "_21bEk",
                progressBarBackdropNarrow: "_2paot",
                profile: "_1Oh7Z",
                nonClickProfile: "_3AuES",
                profileNarrow: "_2iahT",
                playerAvatar: "_19BWt",
                verified: "_22SMV",
                icon: "ocQuB",
                measuringProfile: "nF1-N",
                profileMac: "_1At-O",
                msgInfo: "_2LKvA",
                msgInfoName: "_3VYz8",
                timestamp: "_2tXxE",
                playerContent: "_2MwhR",
                statusPanelPlayerContent: "_2HrM5",
                statusThumbnailPlayerContent: "_1CbQs",
                loading: "_3e8Or",
                v3Image: "_1pf64",
                v3Video: "_3uHZH",
                text: "ecFHI",
                textLarge: "nRSvd",
                textMedium: "_1WIYL",
                textSmall: "_1PvQk",
                font_1: "_2b6no",
                font1: "_2b6no",
                font_2: "_3KLoY",
                font2: "_3KLoY",
                font_3: "_2LoU3",
                font3: "_2LoU3",
                font_5: "wQ88j",
                font5: "wQ88j",
                unknown: "_3-Nhy",
                seen: "_1PF3_",
                textThumbnailPlayerContent: "_3wxAA"
            }
        },
        43693: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                container: "_1ufTj",
                inputContainer: "_1rO5S",
                btnContainer: "_3KRZ3",
                btnPosition: "D6yuB"
            }
        },
        89729: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                chevron: "_23hMF",
                catalogEntryButton: "_3GuCY",
                shopsLogo: "taQA_"
            }
        },
        73040: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                prompt: "_1MKrR"
            }
        },
        52160: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                linkIcon: "_3n54f",
                inheritColor: "dF0c_"
            }
        },
        78097: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                linkContainer: "_36niN",
                activeLink: "_218Ww"
            }
        },
        26886: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                addItemButton: "_2e394",
                themeInList: "_2tMVN",
                themeCollections: "_1AeNq",
                themeDefault: "_28K_k"
            }
        },
        7105: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                pendingBanner: "_3oeDZ",
                iconContainerPending: "_1lkig",
                iconContainerRejected: "NHVOL",
                rejectedBanner: "_14t2G",
                rejectedBannerWithAppeal: "xAt0d"
            }
        },
        23628: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                header: "_361SI",
                list: "_300on"
            }
        },
        83669: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                list: "_1x_gj",
                addItemsNotice: "_3uGr0"
            }
        },
        74591: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                collectionListItem: "V0C2k",
                collectionName: "_3x976",
                seeAllLink: "UWjBu",
                reviewStateRejected: "_22_86"
            }
        },
        35769: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                body: "_3I775",
                loadingContainer: "AOdvD",
                text: "_2yxqg",
                loadingText: "_38kp2",
                shiftUp: "_1gMAq",
                availabilityBanner: "_32wIk"
            }
        },
        57142: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                buttonContainer: "_1IcSo",
                button: "_2I8rD",
                addToCartButton: "_1jLhq",
                addToCartIcon: "PoXRl",
                addToCartIconDisabled: "_3l5-l",
                addToCartContainer: "_3shFG",
                name: "_1l7n8",
                price: "_27spI",
                originalPrice: "_1DYEx",
                description: "_2f0i8",
                more: "Jjucz"
            }
        },
        65374: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                productImage: "_3rmhv",
                productImageContainer: "_1E8LA",
                productThumb: "_3HQ90",
                productThumbContainer: "_6O-Qy",
                prompt: "_3K3du"
            }
        },
        81618: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                header: "_9UV-x",
                list: "_8UHUF"
            }
        },
        81891: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                header: "_1fhXS",
                photo: "_1XF90",
                text: "_3oXCf",
                name: "_3o6p1",
                description: "_2OTQS",
                spinner: "_2Fceq",
                img: "sz61d"
            }
        },
        44612: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                imageCarouselContainer: "_33-Dh"
            }
        },
        78140: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                buttons: "wH7Ij",
                button: "_2Na0-"
            }
        },
        85371: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                section: "_3KLwP",
                reasonList: "CsJ_u",
                label: "KvCZU",
                input: "_3uXLe",
                buttons: "_1VUcX"
            }
        },
        50234: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                statusV3PanelRing: "cFfKt",
                businessContactInfoRing: "_3EL6s",
                read: "_3tgk6",
                unread: "_1min4"
            }
        },
        57136: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => n
            });
            const n = {
                container: "_3b17O",
                wrapper: "sZBni",
                mask: "_3CRhO",
                bg: "_3r7AV",
                foreground: "_3f8oh",
                filled: "_3t0iC",
                empty: "_1A2HZ",
                active: "_2gskD"
            }
        }
    }
]);