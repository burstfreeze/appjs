/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [6738], {
        1419: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.addFailedString = function(e, t) {
                return l.default.t(96, {
                    participantNames: e,
                    _plural: t
                })
            }, t.addPartialFailedString = function() {
                return r.fbt._("Couldn't add some participants.", null, {
                    hk: "2usrY"
                })
            }, t.addSuccessString = function(e, t) {
                return l.default.t(97, {
                    participantNames: e,
                    _plural: t
                })
            }, t.demoteFailedString = function(e, t, n) {
                switch (n) {
                    case 406:
                        return l.default.t(100, {
                            participant: e
                        });
                    default:
                        return l.default.t(99, {
                            participantNames: e,
                            _plural: t
                        })
                }
            }, t.demotePartialFailedString = function() {
                return r.fbt._("Couldn't remove some participants as an admin.", null, {
                    hk: "IRRDJ"
                })
            }, t.demoteSuccessString = function(e, t) {
                return l.default.t(101, {
                    participantNames: e,
                    _plural: t
                })
            }, t.formatGroupStatusReasonString = d, t.formatParticipantActionString = s, t.formatParticipantStatusReasonString = c, t.formatRemoveResult = function(e, t) {
                return u(e, f, p, h, t)
            }, t.formatResult = u, t.promoteFailedString = function(e, t) {
                return l.default.t(105, {
                    participantNames: e,
                    _plural: t
                })
            }, t.promotePartialFailedString = function() {
                return r.fbt._("Couldn't make some participants admin.", null, {
                    hk: "4A8lPV"
                })
            }, t.promoteSuccessString = function(e, t) {
                return l.default.t(106, {
                    participantNames: e,
                    _plural: t
                })
            }, t.removeFailedString = p, t.removePartialFailedString = h, t.removeSuccessString = f;
            var o = a(n(67082)),
                r = n(48360),
                i = n(20050),
                l = a(n(9844));

            function u(e, t, n, a, r) {
                var l;
                if (207 === e.status) {
                    var u = {};
                    for (var f in e)
                        if (o.default.isWid(f)) {
                            var p = e[f];
                            if (403 !== p && 207 !== p) {
                                u[p] || (u[p] = []);
                                var h = i.ContactCollection.get(f);
                                h && u[p].push(h)
                            }
                        } var m = [];
                    for (var g in u) {
                        var v = s(t, n, c, parseInt(g, 10), u[g]);
                        v && m.push(v)
                    }
                    l = m.length > 0 ? m.join("\n") : a()
                } else l = s(t, n, d, e.status, r);
                return l
            }

            function s(e, t, n, a, o) {
                var r = o.map((function(e) {
                        return e.formattedShortName
                    })).join(l.default.t(407)),
                    i = 200 === a,
                    u = i ? e(r, o.length) : t(r, o.length, a),
                    s = i ? "" : n(a, o.length);
                return u.toString() + s.toString()
            }

            function d(e) {
                var t = "";
                switch (e) {
                    case 403:
                        t = " " + r.fbt._("You're not a participant.", null, {
                            hk: "4GsI1U"
                        }).toString();
                        break;
                    case 408:
                        t = " " + l.default.t(104);
                        break;
                    case 404:
                        t = " " + r.fbt._("This group has ended.", null, {
                            hk: "C2izu"
                        }).toString();
                        break;
                    case 429:
                        t = " " + r.fbt._("You've added too many contacts to groups too quickly. Try again later.", null, {
                            hk: "aTFA4"
                        }).toString()
                }
                return t
            }

            function c(e, t) {
                var n = "";
                switch (e) {
                    case 401:
                    case 406:
                    case 409:
                        break;
                    case 404:
                        n = " " + l.default.t(103, {
                            _plural: t
                        });
                        break;
                    case 408:
                        n = " " + l.default.t(104, {
                            _plural: t
                        });
                        break;
                    case 500:
                        n = " " + r.fbt._("This group is full.", null, {
                            hk: "27htUz"
                        }).toString();
                        break;
                    default:
                        n = " " + r.fbt._("Please try again.", null, {
                            hk: "3S6IYT"
                        }).toString()
                }
                return n
            }

            function f(e, t) {
                return l.default.t(110, {
                    participantNames: e,
                    _plural: t
                })
            }

            function p(e, t, n) {
                switch (n) {
                    case 406:
                        return l.default.t(109, {
                            participant: e
                        });
                    default:
                        return l.default.t(108, {
                            participantNames: e,
                            _plural: t
                        })
                }
            }

            function h() {
                return r.fbt._("Couldn't remove some participants.", null, {
                    hk: "3N0fyq"
                })
            }
        },
        87547: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                o = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.addParticipants = function(e, t) {
                return v((0, p.unproxy)(e), t)
            }, t.demoteParticipants = function(e, t) {
                return y((0, p.unproxy)(e), t)
            }, t.promoteParticipants = function(e, t) {
                return S((0, p.unproxy)(e), t)
            }, t.removeParticipants = function(e, t) {
                return C((0, p.unproxy)(e), t)
            };
            var r = o(n(87757)),
                i = o(n(48926)),
                l = n(24224),
                u = n(65901),
                s = g(n(8924)),
                d = g(n(1419)),
                c = o(n(9844)),
                f = n(9343),
                p = n(68220),
                h = n(85893);

            function m(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (m = function(e) {
                    return e ? n : t
                })(e)
            }

            function g(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = m(t);
                if (n && n.has(e)) return n.get(e);
                var a = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                        i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                    } return a.default = e, n && n.set(e, a), a
            }

            function v() {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = (0, i.default)(r.default.mark((function e(t, n) {
                    var o, i, p, m, g, _, C, x = arguments;
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = x.length > 2 && void 0 !== x[2] ? x[2] : (0, l.genId)(), null != (p = null === (o = t.groupMetadata) || void 0 === o ? void 0 : o.participants)) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", a.reject(new s.ActionError));
                            case 4:
                                if (!n.some((function(e) {
                                        return p.get(e.id)
                                    }))) {
                                    e.next = 7;
                                    break
                                }
                                return __LOG__(3)`models:groupMetadata:participantCollection:addParticipants already a group member`, e.abrupt("return", a.reject(new s.ActionError));
                            case 7:
                                if (p.canAdd()) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", a.reject(new s.ActionError));
                            case 9:
                                return m = (0, f.sendAddParticipants)(t.id, n.map((function(e) {
                                    return e.id
                                }))), g = n.map((function(e) {
                                    return e.formattedShortName
                                })).join(c.default.t(407)), _ = new l.ActionType(c.default.t(98, {
                                    participantNames: g,
                                    _plural: n.length
                                })), C = m.then((function(e) {
                                    p.sendForNeededAddRequest(e);
                                    var t = d.formatResult(e, d.addSuccessString, d.addFailedString, d.addPartialFailedString, n);
                                    return new l.ActionType(t)
                                })).catch((function() {
                                    return __LOG__(3)`models:groupMetadata:participantCollection:addParticipants dropped`, new l.ActionType(c.default.t(96, {
                                        participantNames: g,
                                        _plural: n.length
                                    }), {
                                        actionText: c.default.t(129),
                                        actionHandler: function() {
                                            return v(t, n, i)
                                        }
                                    })
                                })), u.Cmd.openToast((0, h.jsx)(l.ActionToast, {
                                    id: i,
                                    initialAction: _,
                                    pendingAction: C
                                })), e.next = 16, m;
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function C() {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = (0, i.default)(r.default.mark((function e(t, n) {
                    var o, i, p, m, g, v, _, x = arguments;
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = x.length > 2 && void 0 !== x[2] ? x[2] : (0, l.genId)(), null != (p = null === (o = t.groupMetadata) || void 0 === o ? void 0 : o.participants)) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", a.reject(new s.ActionError));
                            case 4:
                                if (!n.some((function(e) {
                                        return !p.canRemove(e)
                                    }))) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", a.reject(new s.ActionError));
                            case 6:
                                return m = (0, f.sendRemoveParticipants)(t.id, n.map((function(e) {
                                    return e.id
                                }))), g = n.map((function(e) {
                                    return e.contact.formattedShortName
                                })).join(c.default.t(407)), v = new l.ActionType(c.default.t(111, {
                                    participantNames: g,
                                    _plural: n.length
                                })), _ = m.then((function(e) {
                                    var t = d.formatRemoveResult(e, n.map((function(e) {
                                        return e.contact
                                    })));
                                    return new l.ActionType(t)
                                })).catch((function() {
                                    return __LOG__(3)`models:groupMetadata:participantCollection:removeParticipants dropped`, new l.ActionType(c.default.t(108, {
                                        participantNames: g,
                                        _plural: n.length
                                    }), {
                                        actionText: c.default.t(129),
                                        actionHandler: function() {
                                            return C(t, n, i)
                                        }
                                    })
                                })), u.Cmd.openToast((0, h.jsx)(l.ActionToast, {
                                    id: i,
                                    initialAction: v,
                                    pendingAction: _
                                })), e.next = 13, m;
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function S() {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = (0, i.default)(r.default.mark((function e(t, n) {
                    var o, i, p, m, g, v, _, C = arguments;
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = C.length > 2 && void 0 !== C[2] ? C[2] : (0, l.genId)(), null != (p = null === (o = t.groupMetadata) || void 0 === o ? void 0 : o.participants)) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", a.reject(new s.ActionError));
                            case 4:
                                if (!n.some((function(e) {
                                        return !p.canPromote(e)
                                    }))) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", a.reject(new s.ActionError));
                            case 6:
                                return m = (0, f.sendPromoteParticipants)(t.id, n.map((function(e) {
                                    return e.id
                                }))), g = n.map((function(e) {
                                    return e.contact.formattedShortName
                                })).join(c.default.t(407)), v = new l.ActionType(c.default.t(107, {
                                    participantNames: g,
                                    _plural: n.length
                                })), _ = m.then((function(e) {
                                    var t = d.formatResult(e, d.promoteSuccessString, d.promoteFailedString, d.promotePartialFailedString, n.map((function(e) {
                                        return e.contact
                                    })));
                                    return new l.ActionType(t)
                                })).catch((function() {
                                    return __LOG__(3)`models:groupMetadata:participantCollection:removeParticipants dropped`, new l.ActionType(c.default.t(105, {
                                        participantNames: g,
                                        _plural: n.length
                                    }), {
                                        actionText: c.default.t(129),
                                        actionHandler: function() {
                                            return S(t, n, i)
                                        }
                                    })
                                })), u.Cmd.openToast((0, h.jsx)(l.ActionToast, {
                                    id: i,
                                    initialAction: v,
                                    pendingAction: _
                                })), e.next = 13, m;
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function y() {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = (0, i.default)(r.default.mark((function e(t, n) {
                    var o, i, p, m, g, v, _, C = arguments;
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = C.length > 2 && void 0 !== C[2] ? C[2] : (0, l.genId)(), null != (p = null === (o = t.groupMetadata) || void 0 === o ? void 0 : o.participants)) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", a.reject(new s.ActionError));
                            case 4:
                                if (!n.some((function(e) {
                                        return !p.canDemote(e)
                                    }))) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", a.reject(new s.ActionError));
                            case 6:
                                return m = (0, f.sendDemoteParticipants)(t.id, n.map((function(e) {
                                    return e.id
                                }))), g = n.map((function(e) {
                                    return e.contact.formattedShortName
                                })).join(c.default.t(407)), v = new l.ActionType(c.default.t(102, {
                                    participantNames: g,
                                    _plural: n.length
                                })), _ = m.then((function(e) {
                                    var t = d.formatResult(e, d.demoteSuccessString, d.demoteFailedString, d.demotePartialFailedString, n.map((function(e) {
                                        return e.contact
                                    })));
                                    return new l.ActionType(t)
                                })).catch((function() {
                                    return __LOG__(3)`models:groupMetadata:participantCollection:demoteParticipants dropped`, new l.ActionType(c.default.t(99, {
                                        participantNames: g,
                                        _plural: n.length
                                    }), {
                                        actionText: c.default.t(129),
                                        actionHandler: function() {
                                            return y(t, n, i)
                                        }
                                    })
                                })), u.Cmd.openToast((0, h.jsx)(l.ActionToast, {
                                    id: i,
                                    initialAction: v,
                                    pendingAction: _
                                })), e.next = 13, m;
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        90918: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.verifyPostcodeIQ = void 0;
            var o = a(n(87757)),
                r = a(n(48926)),
                i = n(78363),
                l = n(84470),
                u = n(73435),
                s = n(34733),
                d = new l.WapParser("productResponse", (function(e) {
                    e.assertTag("iq"), e.assertFromServer();
                    var t = e.child("verify_postcode"),
                        n = t.child("result_code"),
                        a = t.child("area").contentString();
                    return {
                        resultCode: n.contentString(),
                        encryptedPostcodeCityName: a
                    }
                })),
                c = function() {
                    var e = (0, r.default)(o.default.mark((function e() {
                        var t, n;
                        return o.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = (0, i.wap)("iq", {
                                        to: i.S_WHATSAPP_NET,
                                        type: "get",
                                        xmlns: "w:biz:catalog",
                                        id: (0, i.generateId)()
                                    }), e.next = 3, (0, s.sendIq)(t, d);
                                case 3:
                                    if ((n = e.sent).success) {
                                        e.next = 11;
                                        break
                                    }
                                    e.t0 = n.errorCode, e.next = 8;
                                    break;
                                case 8:
                                    throw new u.ServerStatusCodeError(n.errorCode);
                                case 9:
                                    e.next = 12;
                                    break;
                                case 11:
                                    return e.abrupt("return", n.result);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
            t.verifyPostcodeIQ = c
        },
        85805: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                o = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.addGroupParticipants = function(e, t) {
                return S(e, t, v).catch((0, s.filteredCatch)(f.ServerStatusCodeError, (function(e) {
                    return {
                        status: e.statusCode
                    }
                })))
            }, t.demoteGroupParticipants = function(e, t) {
                return S(e, t, _).catch((function(e) {
                    __LOG__(3)`error sending demoting group participants iq: ${e}`
                }))
            }, t.promoteGroupParticipants = function(e, t) {
                return S(e, t, C).catch((function(e) {
                    __LOG__(3)`error sending promoting group participants iq: ${e}`
                }))
            }, t.removeGroupParticipants = function(e, t) {
                return S(e, t, g).catch((function(e) {
                    __LOG__(3)`error sending removing group participants iq: ${e}`
                }))
            };
            var r = o(n(87757)),
                i = o(n(81109)),
                l = o(n(59713)),
                u = o(n(48926)),
                s = n(15586),
                d = n(78363),
                c = n(84470),
                f = n(73435),
                p = n(90089),
                h = n(34733),
                m = n(15824),
                g = "remove",
                v = "add",
                _ = "demote",
                C = "promote";

            function x(e) {
                return new c.WapParser(`${e}GroupParticipantsReplyParser`, (function(t) {
                    return {
                        id: t.attrString("id"),
                        participants: t.child(e).mapChildren((function(e) {
                            var t = e.maybeChild("add_request");
                            return {
                                wid: (0, p.userJidToUserWid)(e.attrPhoneUserJid("jid")),
                                error: e.hasAttr("error") ? e.attrInt("error") : null,
                                invite_code: t && t.attrString("code"),
                                invite_code_exp: t && t.attrString("expiration")
                            }
                        }))
                    }
                }))
            }

            function S() {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = (0, u.default)(r.default.mark((function e(t, n, o) {
                    var u, s, c, p, S, b;
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                u = n.map((function(e) {
                                    return (0, d.wap)("participant", {
                                        jid: (0, m.JID)(e)
                                    })
                                })), e.t0 = o, e.next = e.t0 === v ? 4 : e.t0 === g ? 6 : e.t0 === _ ? 8 : e.t0 === C ? 10 : 12;
                                break;
                            case 4:
                                return s = (0, d.wap)("add", null, u), e.abrupt("break", 13);
                            case 6:
                                return s = (0, d.wap)("remove", null, u), e.abrupt("break", 13);
                            case 8:
                                return s = (0, d.wap)("demote", null, u), e.abrupt("break", 13);
                            case 10:
                                return s = (0, d.wap)("promote", null, u), e.abrupt("break", 13);
                            case 12:
                                return e.abrupt("return", a.reject(new Error(`invalid group operation ${o}`)));
                            case 13:
                                return c = (0, d.wap)("iq", {
                                    to: (0, m.GROUP_JID)(t),
                                    type: "set",
                                    xmlns: "w:g2",
                                    id: (0, d.generateId)()
                                }, s), e.next = 16, (0, h.sendIq)(c, x(o));
                            case 16:
                                if (!(p = e.sent).success) {
                                    e.next = 22;
                                    break
                                }
                                return S = p.result.participants, b = {}, S.forEach((function(e) {
                                    Object.assign(b, (0, l.default)({}, e.wid.toString(), null != e.error ? e.error : 200))
                                })), e.abrupt("return", (0, i.default)((0, i.default)({}, b), {}, {
                                    status: 207,
                                    participants: S.map((function(e) {
                                        return (0, l.default)({}, e.wid.toString(), {
                                            code: null != e.error && e.error.toString() || "200",
                                            invite_code: e.invite_code,
                                            invite_code_exp: e.invite_code_exp
                                        })
                                    }))
                                }));
                            case 22:
                                return e.abrupt("return", a.reject(new f.ServerStatusCodeError(p.errorCode, p.errorText)));
                            case 23:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        26041: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                o = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.verifyPostcode = t.VerifyPostcodeError = void 0;
            var r = o(n(87757)),
                i = o(n(48926)),
                l = n(78577),
                u = n(90918),
                s = function(e, t) {
                    return a.resolve(t)
                },
                d = function(e, t) {
                    return a.resolve(t)
                },
                c = n(76672).Mirrored(["INVALID_POSTCODE", "UNSERVICEABLE_POSTCODE"]);
            t.VerifyPostcodeError = c;
            var f = function() {
                var e = (0, i.default)(r.default.mark((function e(t, n) {
                    var a, o;
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(0, l.isLegacyWebdBackend)()) {
                                    e.next = 2;
                                    break
                                }
                                throw new Error("Postcode feature not supported in Non MD mode");
                            case 2:
                                return e.next = 4, s(0, n);
                            case 4:
                                return a = e.sent, e.next = 7, (0, u.verifyPostcodeIQ)(t, a);
                            case 7:
                                o = e.sent, e.t0 = o.resultCode, e.next = "success" === e.t0 ? 11 : "invalid_postcode" === e.t0 ? 15 : "unserviceable_location" === e.t0 ? 16 : 17;
                                break;
                            case 11:
                                return e.next = 13, d(0, a);
                            case 13:
                                return e.t1 = e.sent, e.abrupt("return", {
                                    success: !0,
                                    postcodeCityName: e.t1
                                });
                            case 15:
                                return e.abrupt("return", {
                                    success: !1,
                                    postcodeError: c.INVALID_POSTCODE
                                });
                            case 16:
                                return e.abrupt("return", {
                                    success: !1,
                                    postcodeError: c.UNSERVICEABLE_POSTCODE
                                });
                            case 17:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            t.verifyPostcode = f
        },
        9343: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendAddParticipants = function(e, t) {
                if ((0, o.isLegacyWebdBackend)()) return i.default.addParticipants(e, t);
                return (0, r.addGroupParticipants)(e, t)
            }, t.sendDemoteParticipants = function(e, t) {
                if ((0, o.isLegacyWebdBackend)()) return i.default.demoteParticipants(e, t);
                return (0, r.demoteGroupParticipants)(e, t)
            }, t.sendPromoteParticipants = function(e, t) {
                if ((0, o.isLegacyWebdBackend)()) return i.default.promoteParticipants(e, t);
                return (0, r.promoteGroupParticipants)(e, t)
            }, t.sendRemoveParticipants = function(e, t) {
                if ((0, o.isLegacyWebdBackend)()) return i.default.removeParticipants(e, t);
                return (0, r.removeGroupParticipants)(e, t)
            };
            var o = n(78577),
                r = n(85805),
                i = a(n(54270))
        },
        37404: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createCatalogLink = function(e) {
                return `https://wa.me/c/${e}`
            }, t.createProductLink = function(e, t) {
                return `https://wa.me/p/${t}/${e}`
            }
        },
        42973: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact,
                    n = e.editable,
                    a = e.profilePicThumb,
                    b = e.onClick,
                    y = e.onOpenStatus,
                    k = e.onLoad,
                    j = e.hideStatusV3,
                    T = (0, u.useState)(window.innerWidth),
                    P = (0, r.default)(T, 2),
                    E = P[0],
                    I = P[1],
                    w = (0, u.useState)(null),
                    O = (0, r.default)(w, 2),
                    A = O[0],
                    L = O[1];
                (0, u.useEffect)((function() {
                    function e() {
                        I(window.innerWidth)
                    }
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []);
                var M = E > 1300 ? 152 : 122,
                    N = !(0, p.canSeeStatusV3OnContact)() || t.statusMute || j ? null : v.StatusV3Collection.get(t.id);

                function R() {
                    N && (s.Cmd.openModalMedia((0, S.jsx)(g.default, {
                        removeTopDrawer: !1,
                        statusV3: N
                    }), {
                        transition: "status-v3-modal"
                    }), y && y())
                }
                var D = null;
                A && (D = (0, S.jsx)(C.UIE, {
                    displayName: "ContextMenu",
                    escapable: !0,
                    popable: !0,
                    requestDismiss: function() {
                        L(null)
                    },
                    children: (0, S.jsx)(x.default, {
                        contextMenu: A
                    })
                }));
                var B, V = null,
                    F = d.default.noStatusBorder;
                null != N && (V = (0, S.jsx)(_.StatusV3ImageRing, {
                    statusV3: N,
                    size: M + 24,
                    stroke: 3,
                    theme: _.RingTheme.BUSINESS_CONTACT_INFO
                }), F = d.default.hasStatusBorder);
                B = n && null != a ? (0, S.jsx)(m.default, {
                    profilePicThumb: a,
                    size: M
                }) : (0, S.jsx)(c.DetailImage, {
                    id: t.id,
                    size: M,
                    loader: !0,
                    onLoad: k,
                    onClick: function(e) {
                        if (b)
                            if (null != N && N.totalCount > 0) {
                                e.stopPropagation(), e.preventDefault();
                                var t = [(0, S.jsx)(f.DropdownItem, {
                                    a8n: "mi-view-photo",
                                    action: function() {
                                        b(e)
                                    },
                                    children: h.default.t(813)
                                }, "view-photo"), (0, S.jsx)(f.DropdownItem, {
                                    a8n: "mi-view-status",
                                    action: R,
                                    children: l.fbt._("View status", null, {
                                        hk: "1QQMZy"
                                    })
                                }, "view-status")];
                                L({
                                    menu: t,
                                    event: e
                                })
                            } else b(e)
                    },
                    quality: c.DetailImageQuality.High
                });
                return (0, S.jsxs)(S.Fragment, {
                    children: [(0, S.jsx)("div", {
                        className: (0, i.default)(d.default.coverPhoto, (0, o.default)({}, d.default.isEditable, n))
                    }), (0, S.jsxs)("div", {
                        className: d.default.avatar,
                        children: [V, (0, S.jsx)("div", {
                            className: F,
                            children: B
                        })]
                    }), D]
                })
            };
            var o = a(n(59713)),
                r = a(n(63038)),
                i = a(n(94184)),
                l = n(48360),
                u = n(67294),
                s = n(65901),
                d = a(n(77239)),
                c = n(66834),
                f = n(94680),
                p = n(2629),
                h = a(n(9844)),
                m = a(n(70486)),
                g = a(n(11657)),
                v = n(46177),
                _ = n(84245),
                C = n(16835),
                x = a(n(93820)),
                S = n(85893)
        },
        18496: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, u.jsx)(l.default, {
                    name: "shopping-cart",
                    className: (0, r.default)(i.default.cartIcon, (0, o.default)({}, i.default.inheritColor, "inherit-color" === e.theme))
                })
            };
            var o = a(n(59713)),
                r = a(n(94184)),
                i = a(n(54221)),
                l = a(n(7665)),
                u = n(85893)
        },
        16516: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.labels,
                    n = e.theme;
                if (!t || !(0, i.canDisplayLabel)()) return null;
                var a = "standalone" === n;
                return (0, s.jsx)("div", {
                    className: (0, r.default)(l.default.labelContainer, (0, o.default)({}, l.default.standaloneLabelContainer, a)),
                    children: t.map((function(e, t) {
                        return (0, s.jsx)(d, {
                            labelId: e,
                            isStandalone: a
                        }, t)
                    }))
                })
            };
            var o = a(n(59713)),
                r = a(n(94184)),
                i = n(2629),
                l = a(n(92791)),
                u = n(4267),
                s = n(85893);

            function d(e) {
                var t = e.labelId,
                    n = e.isStandalone;
                return (0, s.jsx)("div", {
                    className: (0, r.default)(l.default.labelRow, (0, o.default)({}, l.default.standaloneLabelRow, n)),
                    children: (0, s.jsx)(u.Labels, {
                        labels: [t],
                        showName: !0
                    })
                })
            }
        },
        88203: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onCartClick,
                    n = e.cartCount,
                    a = e.catalogId,
                    o = e.canManageCatalog,
                    r = e.onSendCatalog,
                    l = e.onOpenCollections,
                    s = e.onOpenMerchantDetailsForm,
                    d = e.onOpenSettings,
                    c = (0, i.useContext)(u.DrawerContext);
                return (0, C.jsxs)(C.Fragment, {
                    children: [(0, C.jsx)(x, {
                        onClick: null != t && null != a ? (0, m.getOnCartClickWithLog)(t, a, (0, v.getProductCatalogContext)(c)) : void 0,
                        catalogId: a,
                        cartCount: n
                    }), (0, C.jsx)(S, {
                        canManageCatalog: o,
                        onSendCatalog: r,
                        onOpenCollections: l,
                        onOpenMerchantDetailsForm: s,
                        onOpenSettings: d
                    })]
                })
            };
            var o = n(43393),
                r = n(48360),
                i = n(67294),
                l = a(n(18496)),
                u = n(96706),
                s = n(98169),
                d = n(94680),
                c = n(1577),
                f = n(2629),
                p = a(n(9844)),
                h = a(n(18719)),
                m = n(71072),
                g = n(91823),
                v = n(52867),
                _ = a(n(7665)),
                C = n(85893);

            function x(e) {
                var t = e.onClick,
                    n = e.catalogId,
                    a = e.cartCount;
                if (t && n) {
                    var i = (0, o.isNumber)(a) && a > 0 ? a.toString() : void 0;
                    return (0, C.jsx)(g.MenuBarItem, {
                        a8nText: "menu-bar-cart-link",
                        icon: (0, C.jsx)(l.default, {
                            theme: "inherit-color"
                        }),
                        text: i,
                        title: r.fbt._("Your cart", null, {
                            hk: "Sn66V"
                        }),
                        onClick: t
                    })
                }
                return null
            }

            function S(e) {
                var t = e.canManageCatalog,
                    n = e.onSendCatalog,
                    a = e.onOpenCollections,
                    o = e.onOpenMerchantDetailsForm,
                    i = e.onOpenSettings;
                return t ? (0, C.jsx)(g.MenuBarItem, {
                    a8nText: "menu-bar-menu",
                    icon: (0, C.jsx)(_.default, {
                        name: "menu"
                    }),
                    title: p.default.t(604),
                    children: (0, C.jsxs)(s.Dropdown, {
                        type: "dropdown_menu",
                        flipOnRTL: !0,
                        dirX: s.DirX.LEFT,
                        children: [(0, C.jsx)(d.DropdownItem, {
                            a8n: "mi-foward menu-item",
                            action: n,
                            children: p.default.t(465)
                        }), a && (0, C.jsx)(d.DropdownItem, {
                            a8n: "mi-collections menu-item",
                            action: a,
                            children: r.fbt._("Collections", null, {
                                hk: "1VWu7A"
                            })
                        }), (0, f.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney)((0, c.getMeUser)().user) && o && (0, C.jsx)(d.DropdownItem, {
                            a8n: "merchant-details",
                            action: o,
                            children: r.fbt._("Business details", null, {
                                hk: "m9xzp"
                            })
                        }, "merchantDetails"), (0, f.canToggleCartOnOff)() && i && (0, C.jsx)(d.DropdownItem, {
                            a8n: "mi-settings menu-item",
                            action: i,
                            children: r.fbt._("Settings", null, {
                                hk: "2RmHUB"
                            })
                        })]
                    }, "CatalogDetailHeader")
                }) : (0, C.jsx)(g.MenuBarItem, {
                    a8nText: "menu-bar-catalog-link",
                    icon: (0, C.jsx)(h.default, {}),
                    title: r.fbt._("Catalog link", null, {
                        hk: "M36Dw"
                    }),
                    onClick: n
                })
            }
        },
        69286: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(48360),
                r = n(67294),
                i = (a(n(56720)), a(n(51599))),
                l = a(n(45566)),
                u = n(96706),
                s = a(n(46821)),
                d = n(27968),
                c = a(n(69520)),
                f = n(2629),
                p = n(56264),
                h = n(41870),
                m = n(52867),
                g = n(46408),
                v = n(47576),
                _ = n(68220),
                C = a(n(7665)),
                x = a(n(76080)),
                S = n(85893),
                b = {
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

            function y(e) {
                var t = e.catalogEntryLabel,
                    n = e.onClick;
                return null == t ? null : (0, S.jsx)("div", {
                    className: l.default.catalogEntryButton,
                    children: (0, S.jsx)(i.default, {
                        a8nText: "catalog-entry-button",
                        type: "secondary",
                        onClick: n,
                        children: t
                    })
                })
            }

            function k() {
                return (0, S.jsx)("div", {
                    className: l.default.shopsLogo,
                    children: (0, S.jsx)(C.default, {
                        name: "fbshops",
                        display: "inline"
                    })
                })
            }

            function j(e) {
                var t, n = e.productsToShow,
                    a = e.catalog,
                    r = e.hideIncompleteRows,
                    i = e.filterProductId,
                    l = e.seeMoreOverlay,
                    u = e.showProductPlaceholders,
                    s = e.onProductThumbClick,
                    d = e.onProductImageClick,
                    c = [],
                    p = n,
                    m = void 0;
                if ((0, f.canSeeBizProfileV3)() && (m = "largeGallerySpacing"), null != a ? (t = a.productCollection, c = a.productCollection.getProductModels(), r && c.length > 3 && (p = Math.min(n, c.length - c.length % 3)), c = (c = c.slice(0, p + 1)).filter((function(e) {
                        return e.id.toString() !== i
                    })).map((function(e, t) {
                        var n, r, i = null === (n = e.getPreviewImage()) || void 0 === n ? void 0 : n.mediaData;
                        return i ? (l && t === p - 1 && a.productCollection.length > p - 1 && (r = o.fbt._("See more", null, {
                            hk: "450jnd"
                        })), (0, S.jsx)(v.ProductThumb, {
                            onClick: function() {
                                return s(null != r, e)
                            },
                            mediaData: i,
                            overlayContent: r,
                            theme: m
                        }, e.id.toString())) : (0, S.jsx)(S.Fragment, {})
                    })).slice(0, p)) : (t = new g.ProductCollection).add({
                        id: "_ph"
                    }), !c.length && !u) return null;
                for (var _, C = b.addIcon; u && c.length < p;) c.push((0, S.jsx)(x.default, {
                    onClick: d,
                    title: o.fbt._("Add product", null, {
                        hk: "3gdovw"
                    }),
                    xstyle: [C, "largeGallerySpacing" === m && b.largeGallerySpacing],
                    children: (0, S.jsx)(S.Fragment, {})
                }, `_ph${c.length}`)), C = b.placeholderThumb;
                return (0, f.canSeeBizProfileV3)() && (_ = "space-between"), (0, S.jsx)(h.MediaGalleryView, {
                    productMedias: c,
                    mediaCollection: t,
                    justify: _
                })
            }

            function T(e) {
                var t = e.onProductCatalog,
                    n = e.title,
                    a = e.subtitle,
                    i = e.animation,
                    f = e.sectionTheme,
                    h = e.shouldLog,
                    g = e.catalog,
                    v = e.onProductDetail,
                    x = e.filterProductId,
                    T = e.productsToShow,
                    P = e.hideIncompleteRows,
                    E = e.showProductPlaceholders,
                    I = e.seeMoreOverlay,
                    w = e.catalogEntryLabel,
                    O = e.showShopsLogo,
                    A = (0, r.useContext)(u.DrawerContext);
                (0, r.useEffect)((function() {
                    h && null != g && (0, p.logBusinessProfileCatalogView)({
                        catalogOwnerWid: g.id,
                        catalogContext: (0, m.getProductCatalogContext)(A)
                    })
                }), []);
                var L = (0, S.jsx)(y, {
                        catalogEntryLabel: w,
                        onClick: function() {
                            return t((0, m.getProductCatalogContext)(A), "ContactInfo")
                        }
                    }),
                    M = (0, S.jsx)(j, {
                        productsToShow: T,
                        catalog: g,
                        hideIncompleteRows: P,
                        filterProductId: x,
                        seeMoreOverlay: I,
                        showProductPlaceholders: E,
                        onProductThumbClick: function(e, n) {
                            return e ? t((0, m.getProductCatalogContext)(A), "ContactInfo") : function(e) {
                                h && (0, p.logProfileProductClick)({
                                    product: (0, _.unproxy)(e),
                                    catalogContext: (0, m.getProductCatalogContext)(A)
                                }), v(e)
                            }(n)
                        },
                        onProductImageClick: function() {
                            return t((0, m.getProductCatalogContext)(A), "ContactInfo")
                        }
                    }),
                    N = a ? (0, S.jsx)(c.default, {
                        xstyle: b.subtitle,
                        children: a
                    }) : null,
                    R = (0, S.jsxs)(d.FlexRow, {
                        align: "center",
                        children: [N, (0, S.jsx)(c.default, {
                            children: (0, S.jsx)(C.default, {
                                className: l.default.chevron,
                                name: "chevron-right-alt",
                                directional: !0
                            })
                        })]
                    });
                return (0, S.jsxs)(s.default, {
                    title: n || o.fbt._("Products", null, {
                        hk: "3Ky71N"
                    }),
                    titleOnClick: function() {
                        return t((0, m.getProductCatalogContext)(A), "ContactInfo")
                    },
                    subtitle: R,
                    theme: f,
                    animation: i,
                    children: [M, L, !0 === O ? (0, S.jsx)(k, {}) : null]
                })
            }
            T.defaultProps = {
                productsToShow: 6,
                sectionTheme: "padding",
                hideIncompleteRows: !1
            };
            var P = T;
            t.default = P
        },
        20859: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = e.onBack,
                    k = e.onCancel,
                    j = e.catalog,
                    T = e.contact,
                    P = e.prompt,
                    E = e.centerDrawer,
                    I = e.onSend,
                    w = (0, r.useContext)(p.DrawerContext),
                    O = function() {
                        u.Cmd.openModal((0, b.jsx)(C.default, {
                            catalog: j,
                            onSend: I
                        }), {
                            transition: "modal-flow"
                        }), (0, g.logShareCatalogViaWALinkClick)({
                            catalogOwnerWid: j.id,
                            catalogContext: (0, _.getProductCatalogContext)(w)
                        })
                    },
                    A = (0, b.jsx)(d.DetailImage, {
                        id: T.id,
                        size: 82,
                        quality: d.DetailImageQuality.High
                    });
                E && (t = "labels", n = "center-column");
                return (0, b.jsxs)(c.default, {
                    theme: t,
                    children: [(0, b.jsx)(h.DrawerHeader, {
                        a8n: "catalog-link-title",
                        title: o.fbt._("Catalog link", null, {
                            hk: "M36Dw"
                        }),
                        onBack: a,
                        onCancel: k,
                        type: h.DRAWER_HEADER_TYPE.SMALL
                    }), (0, b.jsxs)(f.default, {
                        theme: n,
                        children: [(0, b.jsx)("div", {
                            className: i.default.prompt,
                            children: P
                        }), (0, b.jsx)(l.default, {
                            image: A,
                            primary: (0, b.jsx)(v.Name, {
                                contact: T,
                                useVerifiedName: !0
                            }),
                            theme: "identity",
                            secondary: (0, b.jsx)(m.default, {
                                id: y,
                                href: (0, S.createCatalogLink)(j.id.user),
                                onClick: function(e) {
                                    e.preventDefault(), O()
                                },
                                noHandle: !0
                            })
                        }), (0, b.jsx)(x.default, {
                            onClick: O
                        }), (0, b.jsx)(s.default, {
                            elementId: y,
                            onClick: function() {
                                (0, g.logShareCatalogCopyLinkClick)({
                                    catalogOwnerWid: j.id,
                                    catalogContext: (0, _.getProductCatalogContext)(w)
                                })
                            }
                        })]
                    })]
                }, "catalog-link-drawer")
            };
            var o = n(48360),
                r = n(67294),
                i = a(n(24574)),
                l = a(n(88186)),
                u = n(65901),
                s = a(n(22261)),
                d = n(66834),
                c = a(n(53187)),
                f = a(n(18345)),
                p = n(96706),
                h = n(19288),
                m = a(n(59397)),
                g = n(56264),
                v = n(1191),
                _ = n(52867),
                C = a(n(35140)),
                x = a(n(59782)),
                S = n(37404),
                b = n(85893),
                y = "catalog-link-anchor"
        },
        38345: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return l.apply(this, arguments)
            };
            var o = a(n(87757)),
                r = a(n(48926)),
                i = n(26141);

            function l() {
                return (l = (0, r.default)(o.default.mark((function e(t) {
                    var n, a, r;
                    return o.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ((a = i.BusinessProfileCollection.get(t)) && !a.stale) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 4, i.BusinessProfileCollection.update(t);
                            case 4:
                                r = e.sent, a = Array.isArray(r) ? r[0] : r;
                            case 6:
                                return e.abrupt("return", (null === (n = a.profileOptions) || void 0 === n ? void 0 : n.cartEnabled) || !1);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        79526: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contactId,
                    n = e.onSendProduct,
                    a = e.onReportProduct,
                    o = e.onProductLinkClick,
                    i = e.onProductMoreInformation,
                    l = e.onCartClick,
                    u = e.cartCount,
                    h = e.catalogId;
                return (0, _.jsxs)(_.Fragment, {
                    children: [(0, _.jsx)(C, {
                        cartCount: u,
                        catalogId: h,
                        onClick: l
                    }), (0, _.jsx)(m.MenuBarItem, {
                        a8nText: "menu-bar-product-link",
                        icon: (0, _.jsx)(p.default, {}),
                        title: r.fbt._("Product link", null, {
                            hk: "1RIlvV"
                        }),
                        onClick: o
                    }), (0, _.jsx)(m.MenuBarItem, {
                        a8nText: "menu-bar-menu",
                        icon: (0, _.jsx)(v.default, {
                            name: "menu"
                        }),
                        title: f.default.t(604),
                        children: (0, _.jsxs)(s.Dropdown, {
                            type: "dropdown_menu",
                            flipOnRTL: !0,
                            dirX: s.DirX.LEFT,
                            children: [(0, _.jsx)(d.DropdownItem, {
                                a8n: "mi-send menu-item",
                                action: n,
                                children: r.fbt._("Send product", null, {
                                    hk: "1wkzue"
                                })
                            }), (0, c.canSeeECommerceComplianceIndiaSoftEnforcement)(t) && (0, _.jsx)(d.DropdownItem, {
                                a8n: "mi-send menu-item",
                                action: i,
                                children: r.fbt._("More information", null, {
                                    hk: "2JHvi1"
                                })
                            }), (0, _.jsx)(d.DropdownItem, {
                                a8n: "mi-report menu-item",
                                action: a,
                                children: r.fbt._("Report product", null, {
                                    hk: "1jgCyX"
                                })
                            })]
                        }, "ProductDetailHeader")
                    })]
                })
            };
            var o = n(43393),
                r = n(48360),
                i = n(67294),
                l = a(n(18496)),
                u = n(96706),
                s = n(98169),
                d = n(94680),
                c = n(2629),
                f = a(n(9844)),
                p = a(n(18719)),
                h = n(71072),
                m = n(91823),
                g = n(52867),
                v = a(n(7665)),
                _ = n(85893);

            function C(e) {
                var t = e.onClick,
                    n = e.cartCount,
                    a = e.catalogId,
                    s = (0, i.useContext)(u.DrawerContext);
                if (t && a) {
                    var d = (0, o.isNumber)(n) && n > 0 ? n.toString() : void 0;
                    return (0, _.jsx)(m.MenuBarItem, {
                        a8nText: "menu-bar-cart-link",
                        icon: (0, _.jsx)(l.default, {}),
                        text: d,
                        title: r.fbt._("Your cart", null, {
                            hk: "Sn66V"
                        }),
                        onClick: (0, h.getOnCartClickWithLog)(t, a, (0, g.getProductCatalogContext)(s))
                    })
                }
                return null
            }
        },
        23519: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseErrorState = function(e, t) {
                if (e instanceof o.Unmount);
                else if (e instanceof a.ServerStatusCodeError) "not_found" === e.status || 404 === e.status ? t("NOT_FOUND") : (t("ERROR"), __LOG__(3)`parseErrorState:Failed to fetch from server`);
                else {
                    if (!(e instanceof a.WebdDrop)) throw t("ERROR"), e;
                    t("ERROR"), __LOG__(3)`parseErrorState:Failed to fetch due to WebdDrop`
                }
            };
            var a = n(73435),
                o = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = r(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                            l && (l.get || l.set) ? Object.defineProperty(a, i, l) : a[i] = e[i]
                        } a.default = e, n && n.set(e, a);
                    return a
                }(n(8924));

            function r(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (r = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        22426: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.fetchState;
                switch (t) {
                    case "NONE":
                    case "SUCCESS":
                        return null;
                    case "PENDING":
                        return (0, s.jsxs)("div", {
                            className: (0, o.default)(i.default.loadingContainer),
                            children: [(0, s.jsx)(l.Spinner, {
                                size: 14,
                                color: l.colorOptions.highlight
                            }), (0, s.jsx)(u.TextSpan, {
                                className: (0, o.default)(i.default.text, i.default.loadingText),
                                theme: "small",
                                children: r.fbt._("Waiting for network", null, {
                                    hk: "3I2DtN"
                                })
                            })]
                        });
                    case "NOT_FOUND":
                    case "ERROR":
                        return (0, s.jsx)("div", {
                            className: (0, o.default)(i.default.loadingContainer),
                            children: (0, s.jsx)(u.TextSpan, {
                                className: i.default.text,
                                theme: "small",
                                color: "danger",
                                children: "NOT_FOUND" === t ? r.fbt._("This product or service has been removed", null, {
                                    hk: "3mE1ld"
                                }) : r.fbt._("Something went wrong", null, {
                                    hk: "7C9hw"
                                })
                            })
                        });
                    default:
                        throw new Error(`invalid fetchState ${t}`)
                }
            };
            var o = a(n(94184)),
                r = n(48360),
                i = a(n(71524)),
                l = n(85651),
                u = n(22552),
                s = n(85893)
        },
        18719: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, u.jsx)(l.default, {
                    name: "link",
                    className: (0, r.default)(i.default.linkIcon, (0, o.default)({}, i.default.inheritColor, "inherit-color" === e.theme))
                })
            };
            var o = a(n(59713)),
                r = a(n(94184)),
                i = a(n(11661)),
                l = a(n(7665)),
                u = n(85893)
        },
        59397: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.id,
                    n = e.href,
                    a = e.onClick,
                    l = e.noHandle;
                return (0, i.jsx)("span", {
                    className: o.default.linkContainer,
                    children: (0, i.jsx)(r.SelectableLink, {
                        id: t,
                        href: n,
                        className: o.default.activeLink,
                        selectable: !0,
                        onClick: a,
                        "data-nohandle": l,
                        children: n
                    })
                })
            };
            var o = a(n(41164)),
                r = n(96197),
                i = n(85893)
        },
        56734: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                o = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleCollectionAppeal = function() {
                return T.apply(this, arguments)
            }, t.handleCollectionDelete = function(e, t, n) {
                return new a((function(a, o) {
                    c.Cmd.openModal((0, b.jsx)(f.default, {
                        title: d.fbt._("Delete Collection", null, {
                            hk: "2y3JZ4"
                        }),
                        okText: d.fbt._("OK", null, {
                            hk: "2KEeHb"
                        }),
                        cancelText: d.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: function() {
                            c.Cmd.closeModal(),
                                function() {
                                    return j.apply(this, arguments)
                                }(e, t, n).then((function(e) {
                                    return a(e)
                                })).catch((function(e) {
                                    return o(e)
                                }))
                        },
                        onCancel: function() {
                            c.Cmd.closeModal(), a(!1)
                        },
                        children: (0, b.jsx)("div", {
                            children: d.fbt._("When you delete this collection, items in the collection will not be deleted.", null, {
                                hk: "192Jcv"
                            })
                        })
                    }))
                }))
            }, t.handleCollectionSave = function(e, t, n, a, o, r) {
                var i;
                C.QPL.markerPoint(x.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_start"), i = t ? (0, _.editCollection)(t.id.toString() || "", n === t.name ? void 0 : n, !1, a.map((function(e) {
                    return e.id.toString()
                })), o.map((function(e) {
                    return e.id.toString()
                })), r.session.toString()).then((function(r) {
                    return C.QPL.markerPoint(x.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_end"), t.name = n, t.reviewStatus = r.reviewStatus, e.collections.replaceId(t.id, r.id), 0 === a.length && 0 === o.length || (t.productCollection.reset(), t.afterCursor = void 0, e.collections.reset(), e.collections.afterCursor = ""), !0
                })) : (0, _.createCollection)(n, a.map((function(e) {
                    return e.id.toString()
                })), r.session.toString()).then((function(t) {
                    return C.QPL.markerPoint(x.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_end"), (0, h.logCollectionCreated)({
                        catalogContext: r,
                        collectionId: t.id,
                        productCount: a.length
                    }), e.collections.reset(), e.collections.afterCursor = "", !0
                }));
                return i.catch((function(e) {
                    var t = function(e) {
                            c.Cmd.openToast((0, b.jsx)(S.Toast, {
                                msg: e,
                                id: (0, S.genId)("catalog_save_collection_failed")
                            }))
                        },
                        n = d.fbt._("Failed to save collection", null, {
                            hk: "3Chwhp"
                        });
                    if ("not-acceptable" === e.text) return "products" === e.fieldName && "duplicate" === e.fieldReason && (n = d.fbt._("You already have a collection with this group of items. Add or delete items to make a different group.", null, {
                        hk: "1fZXaY"
                    })), "collection" === e.fieldName && "empty" === e.fieldReason && (n = d.fbt._("A collection must have at least one item in it", null, {
                        hk: "39rLHR"
                    })), t(n), !1;
                    throw __LOG__(4, !0, new Error, !0)`Failed to save collection, error: ${e}`, SEND_LOGS("Saving collection failed"), t(n), e
                }))
            }, t.handleProductDelete = function(e, t, n, o) {
                return (0, p.logDeleteProductClick)(t, 1, n), new a((function(a, r) {
                    c.Cmd.openModal((0, b.jsx)(f.default, {
                        title: d.fbt._("Delete Item", null, {
                            hk: "20DBg1"
                        }),
                        okText: d.fbt._("OK", null, {
                            hk: "2KEeHb"
                        }),
                        cancelText: d.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: function() {
                            c.Cmd.closeModal(), C.QPL.markerStart(x.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, {
                                    annotations: {
                                        string: {
                                            EntryPoint: o
                                        }
                                    }
                                }),
                                function() {
                                    return y.apply(this, arguments)
                                }(e, t, n).then((function(e) {
                                    C.QPL.markerEnd(x.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, C.QuickLogActionType.SUCCESS), a(e)
                                })).catch((function(e) {
                                    C.QPL.markerEnd(x.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, C.QuickLogActionType.FAIL), r(e)
                                }))
                        },
                        onCancel: function() {
                            c.Cmd.closeModal(), a(!1)
                        },
                        children: (0, b.jsx)("div", {
                            children: d.fbt._("Are you sure you want to delete this item from your catalog?", null, {
                                hk: "2WwNSA"
                            })
                        })
                    }))
                }))
            }, t.handleProductVisibilityChange = function(e, t, n, o) {
                var r = t.id.toString(),
                    i = !t.isHidden;
                i ? (0, p.logCatalogProductHideClick)(r, n) : (0, p.logCatalogProductShowClick)(r, n);
                return new a((function(a, l) {
                    var u = t.isHidden ? d.fbt._("Show item in your catalog?", null, {
                        hk: "VfDKM"
                    }) : d.fbt._("Hide item in your catalog?", null, {
                        hk: "1KmslI"
                    });
                    c.Cmd.openModal((0, b.jsx)(f.default, {
                        okText: d.fbt._("OK", null, {
                            hk: "2KEeHb"
                        }),
                        cancelText: d.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: function() {
                            C.QPL.markerStart(x.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, {
                                    annotations: {
                                        string: {
                                            EntryPoint: o
                                        }
                                    }
                                }), c.Cmd.closeModal(),
                                function() {
                                    return k.apply(this, arguments)
                                }(e, t).then((function() {
                                    C.QPL.markerEnd(x.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, C.QuickLogActionType.SUCCESS), i ? (0, p.logCatalogProductHideSuccess)(r, n) : (0, p.logCatalogProductShowSuccess)(r, n), a(!0)
                                })).catch((function(e) {
                                    C.QPL.markerEnd(x.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, C.QuickLogActionType.FAIL), i ? (0, p.logCatalogProductHideFailed)(r, n) : (0, p.logCatalogProductShowFailed)(r, n), l(e)
                                }))
                        },
                        onCancel: function() {
                            c.Cmd.closeModal(), i ? (0, p.logCatalogProductHideCancelled)(r, n) : (0, p.logCatalogProductShowCancelled)(r, n), a(!1)
                        },
                        children: (0, b.jsx)("div", {
                            children: u
                        })
                    }))
                }))
            };
            var r = o(n(319)),
                i = o(n(87757)),
                l = o(n(48926)),
                u = n(15586),
                s = n(73435),
                d = n(48360),
                c = n(65901),
                f = o(n(86777)),
                p = n(56264),
                h = n(32065),
                m = n(36949),
                g = n(8842),
                v = n(46408),
                _ = n(391),
                C = n(3298),
                x = n(4099),
                S = n(92428),
                b = n(85893);

            function y() {
                return (y = (0, l.default)(i.default.mark((function e(t, n, a) {
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, m.deleteProducts)([n.id.toString()]);
                            case 3:
                                return (0, p.logDeleteProductSuccess)(n, 1, a), t.productCollection.evictImagesFromCache(n.id.toString()), t.productCollection.remove(n.id.toString()), t.collections && t.collections.forEach((function(e) {
                                    return e.productCollection.remove(n.id.toString())
                                })), e.abrupt("return", !0);
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(0), e.abrupt("return", (0, u.filteredCatch)(s.ServerStatusCodeError, (function(e) {
                                    return (0, p.logDeleteProductFailed)(n, 1, a, e.statusCode), c.Cmd.openToast((0, b.jsx)(S.Toast, {
                                        msg: d.fbt._("Failed to delete product", null, {
                                            hk: "18E03X"
                                        }),
                                        id: (0, S.genId)("catalog_delete_product_failed")
                                    })), !1
                                }))(e.t0));
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 10]
                    ])
                })))).apply(this, arguments)
            }

            function k() {
                return (k = (0, l.default)(i.default.mark((function e(t, n) {
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.productVisibilitySet)([{
                                    productId: n.id.toString(),
                                    isHidden: !n.isHidden
                                }]);
                            case 2:
                                n.isHidden = !n.isHidden, [t.productCollection].concat((0, r.default)((t.collections || []).map((function(e) {
                                    return e.productCollection
                                })))).forEach((function(e) {
                                    var t = e.get(n.id);
                                    t && (t.isHidden = n.isHidden)
                                }));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function j() {
                return (j = (0, l.default)(i.default.mark((function e(t, n, a) {
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, _.deleteCollection)(n.id.toString(), a.session.sessionId.toString());
                            case 3:
                                return t.collections.remove(n.id.toString()), (0, h.logCollectionDeleted)({
                                    catalogContext: a,
                                    collectionId: n.id
                                }), e.abrupt("return", !0);
                            case 8:
                                return e.prev = 8, e.t0 = e.catch(0), e.abrupt("return", (0, u.filteredCatch)(s.ServerStatusCodeError, (function(e) {
                                    return __LOG__(4, !0, new Error, !0)`Failed to delete collection, error: ${e}`, SEND_LOGS("Deleteing collection failed"), c.Cmd.openToast((0, b.jsx)(S.Toast, {
                                        msg: d.fbt._("Failed to delete collection", null, {
                                            hk: "S7UrR"
                                        }),
                                        id: (0, S.genId)("catalog_delete_product_failed")
                                    })), !1
                                }))(e.t0));
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 8]
                    ])
                })))).apply(this, arguments)
            }

            function T() {
                return (T = (0, l.default)(i.default.mark((function e(t, n) {
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return C.QPL.markerPoint(x.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, "datasource_start"), e.next = 3, (0, _.appealCollection)(t.id.toString(), n);
                            case 3:
                                t.set({
                                    canAppeal: !1,
                                    reviewStatus: v.PRODUCT_REVIEW_STATUS.PENDING
                                }), C.QPL.markerPoint(x.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, "datasource_end");
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        66863: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.onClick,
                    a = e.a8nText,
                    f = (0, r.default)(l.default.addItemButton, (t = {}, (0, o.default)(t, l.default.themeDefault, "default" === e.theme), (0, o.default)(t, l.default.themeInList, "in-list" === e.theme), (0, o.default)(t, l.default.themeCollections, "collections" === e.theme), t)),
                    p = (0, d.jsx)(s.default, {
                        title: i.fbt._("Add new item", null, {
                            hk: "2Tc6p3"
                        }),
                        onClick: function() {},
                        xstyle: c.addIcon,
                        children: (0, d.jsx)(d.Fragment, {})
                    });
                return (0, d.jsx)(u.default, {
                    theme: "add-item",
                    image: p,
                    customImage: !0,
                    primary: e.title || i.fbt._("Add new item", null, {
                        hk: "2Tc6p3"
                    }),
                    className: f,
                    onClick: n,
                    idle: e.idle,
                    a8n: a
                })
            };
            var o = a(n(59713)),
                r = a(n(94184)),
                i = n(48360),
                l = (a(n(56720)), a(n(76827))),
                u = a(n(88186)),
                s = a(n(76080)),
                d = n(85893),
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
        61661: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CollectionIntegrityBanner = function(e) {
                var t = e.collection,
                    n = e.onEditCollection,
                    a = function() {
                        n && n(t)
                    };
                switch (t.reviewStatus) {
                    case p.PRODUCT_REVIEW_STATUS.PENDING:
                        return (0, m.jsxs)("div", {
                            className: s.default.pendingBanner,
                            children: [o.fbt._("This collection is being reviewed. Once it’s approved, your customers will see it in your catalog.", null, {
                                hk: "3DQb07"
                            }), (0, m.jsx)("div", {
                                className: s.default.iconContainerPending,
                                children: (0, m.jsx)(h.default, {
                                    name: "info"
                                })
                            })]
                        });
                    case p.PRODUCT_REVIEW_STATUS.REJECTED:
                        return (0, c.canAppealCollections)() ? (0, m.jsx)(_, {
                            collection: t,
                            onRename: a,
                            onAppeal: function() {
                                u.Cmd.openModal((0, m.jsx)(r.default, {
                                    collection: t
                                }))
                            }
                        }) : (0, m.jsx)(v, {
                            onRename: a
                        });
                    default:
                        return null
                }
            }, t.getCollectionIntegrityHeight = function(e) {
                return (0, c.canAppealCollections)() && e.reviewStatus === p.PRODUCT_REVIEW_STATUS.REJECTED ? 2 * i.PRODUCT_LIST_ITEM_HEIGHT + 10 : i.PRODUCT_LIST_ITEM_HEIGHT + 10
            };
            var o = n(48360),
                r = a(n(23841)),
                i = n(66419),
                l = a(n(81288)),
                u = n(65901),
                s = a(n(45829)),
                d = n(55122),
                c = n(2629),
                f = a(n(62848)),
                p = n(46408),
                h = a(n(7665)),
                m = n(85893);

            function g() {
                return (0, m.jsx)("div", {
                    className: s.default.iconContainerRejected,
                    children: (0, m.jsx)(h.default, {
                        name: "info"
                    })
                })
            }

            function v(e) {
                var t = e.onRename;
                return (0, m.jsxs)("div", {
                    className: s.default.rejectedBanner,
                    children: [o.fbt._("This collection wasn’t approved because it doesn’t follow our guidelines.", null, {
                        hk: "4bjvNq"
                    }), (0, m.jsx)(l.default, {
                        onClick: t,
                        children: o.fbt._("Rename", null, {
                            hk: "2U6ctb"
                        })
                    }), (0, m.jsx)(g, {})]
                })
            }

            function _(e) {
                var t = e.collection,
                    n = e.onRename,
                    a = e.onAppeal,
                    r = (t.rejectReason || "other_violation").toLowerCase(),
                    i = (0, d.getRejectedCollectionCopy)(r, t.commerceUrl),
                    u = (0, m.jsx)(l.default, {
                        onClick: n,
                        children: o.fbt._("rename the collection", null, {
                            hk: "2j5eIB"
                        })
                    });
                if (t.canAppeal) {
                    var c = (0, m.jsx)(l.default, {
                            onClick: a,
                            children: o.fbt._("request another review", null, {
                                hk: "2BSEoy"
                            })
                        }),
                        p = (0, m.jsx)(f.default, {
                            id: 306,
                            params: {
                                rename_collection_link: u,
                                request_another_review_link: c
                            }
                        });
                    return (0, m.jsxs)("div", {
                        className: s.default.rejectedBannerWithAppeal,
                        children: [i.first, (0, m.jsx)("br", {}), p, (0, m.jsx)(g, {})]
                    })
                }
                var h = (0, m.jsx)(f.default, {
                    id: 330,
                    params: {
                        rename_collection_link: u
                    }
                });
                return (0, m.jsxs)("div", {
                    className: s.default.rejectedBannerWithAppeal,
                    children: [i.second, (0, m.jsx)("br", {}), h, (0, m.jsx)(g, {})]
                })
            }
        },
        22593: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onProductDetail,
                    n = e.onProductShare,
                    a = e.onCartOpen,
                    C = e.shareLinks,
                    x = e.canManageCatalog,
                    S = (0, r.useState)(void 0),
                    b = (0, o.default)(S, 2),
                    y = b[0],
                    k = b[1],
                    j = (0, i.useModelValues)(e.catalog, ["productCollection", "afterCursor", "id", "index"]),
                    T = function(e) {
                        n && n(e)
                    };
                if (!j.productCollection || !j.productCollection.getProductModels(e.canManageCatalog).length) return null;
                return (0, _.jsx)(f.default, {
                    flatListControllers: [e.flatListController],
                    children: (0, _.jsx)(c.FlatList, {
                        flatListController: e.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: (P = void 0 !== a, j.productCollection.getProductModels(x).map((function(e) {
                            return {
                                itemKey: `${e.id.toString()}_${P.toString()}`,
                                product: e
                            }
                        }))),
                        renderItem: function(e) {
                            var n = e.product;
                            return (0, _.jsx)(d.DrawerContext.Consumer, {
                                children: function(e) {
                                    var o = (0, m.getProductCatalogContext)(e);
                                    return (0, _.jsx)(g.default, {
                                        product: n,
                                        onCartOpen: a,
                                        onClick: function() {
                                            return function(e, n) {
                                                return (0, h.logCatalogListDetailClick)({
                                                    product: (0, v.unproxy)(e),
                                                    catalogContext: n
                                                }), k(e.id.toString()), t(e)
                                            }(n, o)
                                        },
                                        onProductShare: C ? T : null,
                                        onProductDelete: function(e) {
                                            return function(e, t) {
                                                (0, l.handleProductDelete)(j, e, t, "Catalog").then((function() {
                                                    e.id === y && (s.Cmd.closeDrawerMid(), k(void 0))
                                                }))
                                            }(e, o)
                                        },
                                        onProductHideShow: function(e) {
                                            return function(e, t) {
                                                (0, l.handleProductVisibilityChange)(j, e, t, "Catalog")
                                            }(e, o)
                                        },
                                        canManageCatalog: x
                                    })
                                }
                            })
                        },
                        defaultItemHeight: u.PRODUCT_LIST_ITEM_HEIGHT,
                        keyOrder: p.KeyOrder.INVERSE
                    })
                });
                var P
            };
            var o = a(n(63038)),
                r = n(67294),
                i = n(50857),
                l = n(56734),
                u = n(66419),
                s = n(65901),
                d = n(96706),
                c = n(73568),
                f = a(n(23803)),
                p = n(69725),
                h = n(56264),
                m = n(52867),
                g = a(n(99262)),
                v = n(68220),
                _ = n(85893)
        },
        63917: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = (0, s.default)(),
                    C = (0, u.useState)({
                        state: v.NOT_STARTED
                    }),
                    x = (0, i.default)(C, 2),
                    S = x[0],
                    b = x[1],
                    y = (0, u.useState)(e.existingPostcode),
                    k = (0, i.default)(y, 2),
                    j = k[0],
                    T = k[1],
                    P = function() {
                        var t = (0, r.default)(o.default.mark((function t() {
                            var n;
                            return o.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if ("string" == typeof j) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return b({
                                            state: v.IN_PROGRESS
                                        }), t.prev = 3, t.next = 6, (0, m.verifyPostcode)(e.catalogId, j);
                                    case 6:
                                        n = t.sent, a() && b({
                                            state: v.COMPLETED,
                                            data: n
                                        }), (null == n ? void 0 : n.success) && (e.onSuccess(), d.Cmd.openToast((0, g.jsx)(h.Toast, {
                                            msg: l.fbt._("Postcode Updated", null, {
                                                hk: "JqNfH"
                                            }),
                                            id: (0, h.genId)()
                                        }))), t.next = 14;
                                        break;
                                    case 11:
                                        t.prev = 11, t.t0 = t.catch(3), a() && b({
                                            state: v.FAILED
                                        });
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [3, 11]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    E = (0, u.useCallback)((function() {
                        return b({
                            state: v.NOT_STARTED
                        })
                    }), []),
                    I = !!S.data && !S.data.success && S.data.postcodeError === m.VerifyPostcodeError.UNSERVICEABLE_POSTCODE,
                    w = null;
                (null === (t = S.data) || void 0 === t ? void 0 : t.success) || (null === (n = S.data) || void 0 === n ? void 0 : n.postcodeError) !== m.VerifyPostcodeError.INVALID_POSTCODE ? "string" != typeof j || 0 === j.length ? w = l.fbt._("Postcode must not be empty", null, {
                    hk: "3OZGho"
                }) : 0 !== j.search("^[0-9]{6}$") && (w = l.fbt._("Postcode must be six digits. For example 400001", null, {
                    hk: "3PYeri"
                })) : w = l.fbt._("Provided postcode is invalid", null, {
                    hk: "1MOgzc"
                });
                var O = S.state === v.IN_PROGRESS;
                return (0, g.jsx)(c.default, {
                    onOK: function() {
                        I ? E() : P()
                    },
                    title: I ? null : l.fbt._("Change Pincode", null, {
                        hk: "3R9hJZ"
                    }),
                    okDisabled: O || !!w,
                    okSpinner: O,
                    okText: I ? l.fbt._("OK", null, {
                        hk: "2sRDxR"
                    }) : l.fbt._("Enter", null, {
                        hk: "3Qj2Bg"
                    }),
                    onCancel: I || O ? null : e.onCancel,
                    children: I ? (0, g.jsx)(f.Text, {
                        as: "p",
                        children: l.fbt._("We are currently not delivering in this area.", null, {
                            hk: "1ZEmzv"
                        })
                    }) : (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(f.Text, {
                            as: "p",
                            xstyle: _.infoText,
                            children: l.fbt._("To see items available in your area, enter your pincode.", null, {
                                hk: "1QTxOy"
                            })
                        }), (0, g.jsx)(p.TextInput, {
                            onChange: function(e) {
                                E(), T(e)
                            },
                            value: j,
                            managed: !0,
                            editable: S.state !== v.IN_PROGRESS,
                            managedError: !0,
                            selectOnMount: !0,
                            focusOnMount: !0,
                            error: w
                        }), (0, g.jsx)(f.Text, {
                            as: "p",
                            theme: "muted",
                            xstyle: _.privacyText,
                            children: l.fbt._("This pincode and your phone number will be shared with JioMart.", null, {
                                hk: "1lrs1z"
                            })
                        })]
                    })
                })
            };
            var o = a(n(87757)),
                r = a(n(48926)),
                i = a(n(63038)),
                l = n(48360),
                u = n(67294),
                s = (a(n(56720)), a(n(80564))),
                d = n(65901),
                c = a(n(86777)),
                f = n(22552),
                p = n(68544),
                h = n(92428),
                m = n(26041),
                g = n(85893),
                v = n(76672).Mirrored(["NOT_STARTED", "COMPLETED", "FAILED", "IN_PROGRESS"]),
                _ = {
                    infoText: {
                        fontSize: "enbbiyaj",
                        lineHeight: "erpdyial",
                        marginBottom: "t4zgqcuo"
                    },
                    privacyText: {
                        fontSize: "f8jlpxt4",
                        lineHeight: "q5jc98e4",
                        marginTop: "iy2cu22y"
                    }
                }
        },
        56395: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = {
                        postcode: "123456",
                        postcodeCityName: "Test city"
                    },
                    n = t.postcode,
                    a = t.postcodeCityName;
                return (0, p.jsxs)("div", (0, o.default)((0, o.default)({
                    className: (0, i.default)(h.container)
                }, (0, l.accessibleClickableButtonProps)({
                    onClick: function() {
                        s.Cmd.openModal((0, p.jsx)(u.default, {
                            existingPostcode: n,
                            catalogId: e.catalogId,
                            onCancel: function() {
                                return s.Cmd.closeModal()
                            },
                            onSuccess: function() {
                                return s.Cmd.closeModal()
                            }
                        }))
                    }
                })), {}, {
                    children: [(0, p.jsx)("span", {
                        className: (0, i.default)(h.svgWrapper),
                        children: (0, p.jsx)(c.default, {
                            name: "business-address"
                        })
                    }), (0, p.jsxs)(d.FlexColumn, {
                        children: [(0, p.jsx)(f.Text, {
                            as: "p",
                            xstyle: h.postcodeDescription,
                            children: r.fbt._("Items available in {postcode-of-a-geographic-area}", [r.fbt._param("postcode-of-a-geographic-area", n)], {
                                hk: "2ZYFWA"
                            })
                        }), (0, p.jsx)(f.Text, {
                            as: "p",
                            xstyle: h.postcodeCityName,
                            theme: "muted",
                            children: a
                        })]
                    })]
                }))
            };
            var o = a(n(81109)),
                r = n(48360),
                i = a(n(56720)),
                l = n(12543),
                u = a(n(63917)),
                s = n(65901),
                d = n(27968),
                c = a(n(7665)),
                f = n(22552),
                p = n(85893),
                h = {
                    container: {
                        display: "p357zi0d",
                        alignItems: "gndfcl4n",
                        backgroundColor: "ihvf49ua",
                        ":hover": {
                            backgroundColor: "os03hap6"
                        }
                    },
                    svgWrapper: {
                        paddingTop: "nlnf8xo7",
                        paddingBottom: "r219jyu0",
                        paddingStart: "sta02ykp",
                        width: "i94gqilv",
                        marginEnd: "oz083wsx",
                        color: "kv0r5hzt"
                    },
                    postcodeDescription: {
                        lineHeight: "erpdyial",
                        fontSize: "enbbiyaj"
                    },
                    postcodeCityName: {
                        lineHeight: "r5qsrrlp",
                        fontSize: "f8jlpxt4"
                    }
                }
        },
        4988: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.catalogId,
                    n = e.setScrollOffset,
                    a = e.onCartClick,
                    H = e.onCatalogLinkClick,
                    G = e.canManageCatalog,
                    z = e.canLogQpl,
                    q = void 0 === z || z,
                    K = e.isPushed,
                    Q = void 0 === K || K,
                    Y = e.scrollOffset,
                    $ = e.autoUpdate,
                    J = e.businessProfile,
                    X = e.blockCartInterstitialFn,
                    Z = void 0 === X ? function() {
                        return !1
                    } : X,
                    ee = e.onAddProduct,
                    te = e.onProductDetail,
                    ne = e.onProductShare,
                    ae = e.onCollectionSeeAll,
                    oe = e.onEditCollection,
                    re = e.onOpenCollections,
                    ie = e.onRemoveProduct,
                    le = e.onOpenSettings,
                    ue = e.onOpenMerchantDetailsForm,
                    se = (0, g.default)(),
                    de = (0, f.default)(),
                    ce = (0, c.default)(de, 100),
                    fe = (0, p.default)((function() {
                        return new M.default
                    })),
                    pe = (0, h.useModelValues)(e.contact, ["id"]),
                    he = (0, d.useMemo)((function() {
                        return C.CartCollection.findCart(pe.id.toString())
                    }), [pe.id]),
                    me = (0, d.useState)(!1),
                    ge = (0, i.default)(me, 2),
                    ve = ge[0],
                    _e = ge[1],
                    Ce = (0, d.useState)(null),
                    xe = (0, i.default)(Ce, 2),
                    Se = xe[0],
                    be = xe[1],
                    ye = (0, d.useState)(he.itemCount),
                    ke = (0, i.default)(ye, 2),
                    je = ke[0],
                    Te = ke[1],
                    Pe = (0, d.useState)("NONE"),
                    Ee = (0, i.default)(Pe, 2),
                    Ie = Ee[0],
                    we = Ee[1],
                    Oe = (0, d.useState)(null),
                    Ae = (0, i.default)(Oe, 2),
                    Le = Ae[0],
                    Me = Ae[1],
                    Ne = (0, d.useState)(null),
                    Re = (0, i.default)(Ne, 2),
                    De = Re[0],
                    Be = Re[1],
                    Ve = (0, d.useState)(!0),
                    Fe = (0, i.default)(Ve, 2),
                    We = Fe[0],
                    Ue = Fe[1],
                    He = function() {
                        var e = (0, r.default)(o.default.mark((function e(t) {
                            return o.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, null == t ? void 0 : t.loadInitialItems();
                                    case 2:
                                        Ue(!1);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ge = (0, c.default)((function() {
                        de(), null == ie || ie()
                    }), 100),
                    ze = function() {
                        var e = q && Q,
                            n = e ? W.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW : void 0;
                        S.CatalogCollection.find(t, {
                            markerId: n
                        }).then((function(t) {
                            if (!se.aborted) {
                                var n = new T.CatalogWithCollectionsDataSource(t, G || !1, b.PRODUCT_LIST_ITEM_HEIGHT, e),
                                    a = new T.CatalogListItemScrollHelper(n);
                                be(t), Me(n), Be(a), we("SUCCESS"), He(n).then((function() {
                                        e && F.QPL.markerEnd(W.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, F.QuickLogActionType.SUCCESS)
                                    })).catch((function() {
                                        e && F.QPL.markerEnd(W.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, F.QuickLogActionType.FAIL)
                                    })),
                                    function(e) {
                                        $ && null != e && (e.productCollection.on("add", ce), e.productCollection.on("remove", Ge), e.collections.on("add", ce), e.collections.on("remove", ce))
                                    }(t), void 0 !== Y && fe.current.setScrollFromStart(Y)
                            }
                        })).catch((function(t) {
                            e && F.QPL.markerEnd(W.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, F.QuickLogActionType.FAIL), (0, A.parseErrorState)(t, (function(e) {
                                we(e), Ue(!1)
                            }))
                        }))
                    },
                    qe = function() {
                        var e = he.itemCount;
                        je !== e && Te(e)
                    };
                (0, d.useEffect)((function() {
                    ze(), (0, E.default)(t).then((function(e) {
                        _e(e), e && he.on("all", qe)
                    }))
                }), []);
                var Ke = (0, m.default)((function(e, t) {
                        n && n(t.scrollTop), (null == De ? void 0 : De.willLoadMore(t)) && Ue(!0), null == De || De.onScroll(e, t).then((function(e) {
                            e && Ue(!1)
                        })).catch((function(e) {
                            throw Ue(!1), e
                        }))
                    }), 100),
                    Qe = function() {
                        (0, D.qplStartCartView)("Catalog"), null == a || a(pe.id.toString())
                    },
                    Ye = (0, U.jsx)(y.default, {
                        onSendCatalog: function() {
                            Se && H(Se, pe)
                        },
                        onCartClick: ve ? Qe : void 0,
                        cartCount: he.itemCount,
                        catalogId: t.toString(),
                        canManageCatalog: G,
                        onOpenCollections: re,
                        onOpenMerchantDetailsForm: ue,
                        onOpenSettings: le
                    });
                return (0, U.jsxs)(I.default, {
                    theme: "products",
                    onDrop: e.onBack,
                    children: [(0, U.jsx)(O.DrawerHeader, {
                        title: s.fbt._("Catalog", null, {
                            hk: "3YVOSV"
                        }),
                        type: e.headerType || O.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onBack,
                        menu: Ye,
                        focusBackOrCancel: !0
                    }), (0, U.jsx)(w.default, {
                        onScroll: function(e) {
                            Ke(e, e.currentTarget)
                        },
                        flatListControllers: [fe.current],
                        children: function() {
                            var e, n, o, r, i, d = ve && a ? Qe : void 0;
                            (G && ee && (n = (0, U.jsx)(_.default, {
                                onClick: function() {
                                    return ee()
                                },
                                theme: "collections",
                                a8nText: "add-item"
                            })), Se && G && oe) && (o = Se.productCollection.getProductModels(!0).some((function(e) {
                                return !e.isHidden && "REJECTED" !== e.reviewStatus
                            })) ? (0, U.jsx)(_.default, {
                                onClick: function() {
                                    oe(null)
                                },
                                theme: "collections",
                                title: s.fbt._("Add new collection", null, {
                                    hk: "1DddmB"
                                }),
                                a8nText: "add-collection"
                            }) : null);
                            return Se && Le ? (r = (0, U.jsx)(B.default, {
                                onCartOpen: d,
                                onProductDetail: te,
                                flatListController: fe.current,
                                catalog: Se,
                                canManageCatalog: G,
                                shareLinks: G,
                                onProductShare: ne,
                                onCollectionSeeAll: ae,
                                data: Le.getData(),
                                onEditCollection: oe
                            }), (0, u.isMDBackend)() && G && ((0, v.getABPropConfigValue)("web_abprop_nux_cart_interstitial") && ve && !Z() && (0, x.default)(), i = (0, U.jsx)(k.default, {
                                onOpenCollections: re
                            }))) : r = (0, U.jsx)(L.default, {
                                fetchState: Ie
                            }), (0, U.jsxs)(U.Fragment, {
                                children: [J && (0, U.jsxs)(U.Fragment, {
                                    children: [(0, U.jsx)("div", {
                                        "data-a8n": l.default.key("catalog-header"),
                                        className: P.default.header,
                                        children: (0, U.jsx)(V.default, {
                                            profilePicThumb: pe.getProfilePicThumb(),
                                            contact: pe,
                                            businessProfile: J
                                        })
                                    }), (0, R.enablePostcodeInCatalog)() && !0 === (null === (e = J.profileOptions) || void 0 === e ? void 0 : e.directConnection) && (0, U.jsx)(j.default, {
                                        catalogId: t
                                    })]
                                }), (0, U.jsxs)("div", {
                                    "data-a8n": l.default.key("catalog-items"),
                                    className: P.default.list,
                                    children: [i, n, o, r, We && (0, U.jsx)(N.default, {})]
                                })]
                            })
                        }()
                    })]
                })
            };
            var o = a(n(87757)),
                r = a(n(48926)),
                i = a(n(63038)),
                l = a(n(84646)),
                u = n(78577),
                s = n(48360),
                d = n(67294),
                c = a(n(1323)),
                f = a(n(45764)),
                p = a(n(62905)),
                h = n(50857),
                m = a(n(75967)),
                g = a(n(22190)),
                v = n(18297),
                _ = a(n(66863)),
                C = n(2133),
                x = a(n(72758)),
                S = n(72743),
                b = n(66419),
                y = a(n(88203)),
                k = a(n(78685)),
                j = a(n(56395)),
                T = n(46321),
                P = a(n(9324)),
                E = a(n(38345)),
                I = a(n(53187)),
                w = a(n(18345)),
                O = n(19288),
                A = n(23519),
                L = a(n(22426)),
                M = a(n(92546)),
                N = a(n(5029)),
                R = n(82723),
                D = n(56003),
                B = a(n(85170)),
                V = a(n(99602)),
                F = n(3298),
                W = n(4099),
                U = n(85893)
        },
        39358: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CollectionContentDrawer = function(e) {
                var t, n = e.catalogId,
                    a = e.onCartClick,
                    V = e.onCatalogLinkClick,
                    F = e.setScrollOffset,
                    W = e.canManageCatalog,
                    U = e.scrollOffset,
                    H = e.collection,
                    G = e.onProductDetail,
                    z = e.onProductShare,
                    q = e.onEditCollection,
                    K = (0, d.default)(),
                    Q = (0, h.default)(),
                    Y = (0, u.useContext)(T.DrawerContext),
                    $ = (0, p.useModelValues)(e.contact, ["id"]),
                    J = (0, u.useMemo)((function() {
                        return g.CartCollection.findCart($.id.toString())
                    }), [$.id]),
                    X = (0, c.default)((function() {
                        return new w.default
                    })),
                    Z = (0, u.useState)(!1),
                    ee = (0, i.default)(Z, 2),
                    te = ee[0],
                    ne = ee[1],
                    ae = (0, u.useState)(null),
                    oe = (0, i.default)(ae, 2),
                    re = oe[0],
                    ie = oe[1],
                    le = (0, u.useState)(J.itemCount),
                    ue = (0, i.default)(le, 2),
                    se = ue[0],
                    de = ue[1],
                    ce = (0, u.useState)("NONE"),
                    fe = (0, i.default)(ce, 2),
                    pe = fe[0],
                    he = fe[1],
                    me = (0, u.useState)(null),
                    ge = (0, i.default)(me, 2),
                    ve = ge[0],
                    _e = ge[1],
                    Ce = (0, u.useState)(null),
                    xe = (0, i.default)(Ce, 2),
                    Se = xe[0],
                    be = xe[1],
                    ye = (0, u.useState)(!0),
                    ke = (0, i.default)(ye, 2),
                    je = ke[0],
                    Te = ke[1];
                (0, f.useListener)(null == H ? void 0 : H.productCollection, ["add", "remove"], K), (0, f.useListener)(null == re ? void 0 : re.productCollection, ["add", "remove"], K), (0, f.useListener)(null == re ? void 0 : re.collections, ["add", "remove"], K), (0, f.useListener)(H, ["change:reviewStatus", "canAppeal"], K);
                var Pe = function() {
                        var e = (0, r.default)(o.default.mark((function e(t) {
                            return o.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, null == t ? void 0 : t.loadInitialItems();
                                    case 2:
                                        Te(!1), (0, A.logCollectionSeeAllView)({
                                            catalogOwnerJid: n.toString(),
                                            catalogContext: (0, M.getProductCatalogContext)(Y),
                                            collectionId: null == t ? void 0 : t.collectionId
                                        });
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ee = function() {
                        var e = J.itemCount;
                        se !== e && de(e)
                    };
                (0, u.useEffect)((function() {
                    v.CatalogCollection.find(n).then((function(e) {
                        if (!Q.aborted) {
                            ie(e), he("SUCCESS");
                            var t = new x.SingleCollectionDataSource(e, null == H ? void 0 : H.id.toString(), W || !1, _.PRODUCT_LIST_ITEM_HEIGHT),
                                n = new x.CatalogListItemScrollHelper(t);
                            _e(t), be(n), Pe(t).then((function() {
                                R.QPL.markerEnd(D.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, R.QuickLogActionType.SUCCESS)
                            })).catch((function() {
                                R.QPL.markerEnd(D.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, R.QuickLogActionType.FAIL)
                            })), void 0 !== U && X.current.setScrollFromStart(U)
                        }
                    })).catch((function(e) {
                        R.QPL.markerEnd(D.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, R.QuickLogActionType.FAIL), (0, E.parseErrorState)(e, (function(e) {
                            he(e), Te(!1)
                        }))
                    })), (0, S.default)(n).then((function(e) {
                        ne(e), e && J.on("all", Ee)
                    }))
                }), []);
                var Ie = function() {
                        (0, L.qplStartCartView)("Collection"), null == a || a($.id.toString())
                    },
                    we = (0, s.default)((function(e) {
                        var t = e.currentTarget;
                        null == F || F(t.scrollTop), (null == Se ? void 0 : Se.willLoadMore(t)) && Te(!0), null == Se || Se.onScroll(e, t).then((function(e) {
                            e && Te(!1)
                        })).catch((function(e) {
                            throw Te(!1), e
                        }))
                    }), 100),
                    Oe = (0, B.jsx)(C.default, {
                        onSendCatalog: function() {
                            re && V(re, $)
                        },
                        onCartClick: te ? Ie : void 0,
                        cartCount: J.itemCount,
                        catalogId: n.toString(),
                        canManageCatalog: W
                    }),
                    Ae = (null === (t = e.collection) || void 0 === t ? void 0 : t.name) || l.fbt._("All Items", null, {
                        hk: "2x8dE2"
                    });
                return (0, B.jsxs)(k.default, {
                    theme: "products",
                    onDrop: e.onBack,
                    children: [(0, B.jsx)(P.DrawerHeader, {
                        title: Ae,
                        type: e.headerType || P.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onBack,
                        menu: Oe
                    }), (0, B.jsx)(j.default, {
                        flatListControllers: [X.current],
                        onScroll: we,
                        children: function() {
                            var e = te && a ? Ie : void 0;
                            if (!re || !ve) return (0, B.jsx)(I.default, {
                                fetchState: pe
                            });
                            var t = ve.getData();
                            if (0 === t.length && !je && W && H) return (0, B.jsx)(B.Fragment, {
                                children: (0, B.jsxs)("div", {
                                    className: b.default.list,
                                    children: [(0, B.jsx)(m.default, {
                                        theme: "collections",
                                        onClick: function() {
                                            null == q || q(H)
                                        }
                                    }), (0, B.jsx)("div", {
                                        className: b.default.addItemsNotice,
                                        children: l.fbt._("This collection won’t be visible to customers until you add at least 1 item", null, {
                                            hk: "34nbHb"
                                        })
                                    })]
                                })
                            });
                            var n = (0, B.jsx)(N.default, {
                                    onCartOpen: e,
                                    onProductDetail: G,
                                    flatListController: X.current,
                                    catalog: re,
                                    canManageCatalog: W,
                                    shareLinks: W,
                                    onProductShare: z,
                                    collectionId: null == H ? void 0 : H.id.toString(),
                                    data: t
                                }),
                                o = H ? (0, B.jsx)(y.CollectionIntegrityBanner, {
                                    collection: H,
                                    onEditCollection: q
                                }) : void 0;
                            return (0, B.jsx)(B.Fragment, {
                                children: (0, B.jsxs)("div", {
                                    className: b.default.list,
                                    children: [o, n, je && (0, B.jsx)(O.default, {})]
                                })
                            })
                        }()
                    })]
                })
            };
            var o = a(n(87757)),
                r = a(n(48926)),
                i = a(n(63038)),
                l = n(48360),
                u = n(67294),
                s = a(n(1323)),
                d = a(n(45764)),
                c = a(n(62905)),
                f = n(91285),
                p = n(50857),
                h = a(n(22190)),
                m = a(n(66863)),
                g = n(2133),
                v = n(72743),
                _ = n(66419),
                C = a(n(88203)),
                x = n(46321),
                S = a(n(38345)),
                b = a(n(3948)),
                y = n(61661),
                k = a(n(53187)),
                j = a(n(18345)),
                T = n(96706),
                P = n(19288),
                E = n(23519),
                I = a(n(22426)),
                w = a(n(92546)),
                O = a(n(5029)),
                A = n(32065),
                L = n(56003),
                M = n(52867),
                N = a(n(85170)),
                R = n(3298),
                D = n(4099),
                B = n(85893)
        },
        17014: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = e.collection,
                    p = e.onSeeAll,
                    h = e.allItems;
                a ? (t = a.name, n = a.id) : h && (t = o.fbt._("All Items", null, {
                    hk: "2x8dE2"
                }));
                var m = (0, f.jsx)(c.TextDiv, {
                    className: l.default.collectionName,
                    theme: "title",
                    children: (0, f.jsx)(u.EmojiText, {
                        text: t,
                        ellipsify: !0,
                        titlify: !0
                    })
                });

                function g(e) {
                    ! function(e) {
                        e.preventDefault(), e.stopPropagation()
                    }(e), (0, s.qplStartCollectionViewAll)("Catalog"), p && a ? p(a) : p && p()
                }
                var v = void 0;
                if (a) switch (a.reviewStatus) {
                    case d.PRODUCT_REVIEW_STATUS.REJECTED:
                        v = (0, f.jsx)("span", {
                            className: l.default.reviewStateRejected,
                            children: o.fbt._("rejected", null, {
                                hk: "3f3H8P"
                            })
                        })
                }
                return (0, f.jsx)(r.default, {
                    primary: m,
                    secondary: v,
                    detail: (0, f.jsx)(i.default, {
                        onClick: g,
                        className: l.default.seeAllLink,
                        title: o.fbt._("Collection {collectionName}, see all", [o.fbt._param("collectionName", t)], {
                            hk: "1kqerQ"
                        }),
                        tabIndex: 0,
                        children: o.fbt._("See all", null, {
                            hk: "UPjou"
                        })
                    }),
                    theme: "collection-header",
                    idle: !0,
                    className: l.default.collectionListItem
                }, n)
            };
            var o = n(48360),
                r = a(n(88186)),
                i = a(n(81288)),
                l = a(n(18702)),
                u = n(73008),
                s = n(56003),
                d = n(46408),
                c = n(22552),
                f = n(85893)
        },
        55122: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getPolicyLink = d, t.getRejectedCollectionCopy = function(e, t) {
                var n;
                switch (e) {
                    case "drugs":
                        return n = r.fbt._("WhatsApp's Commerce Policy for prescription, recreational, or other types of Drugs", null, {
                            hk: "B27ED"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 299,
                                params: {
                                    collections_rejected_policy_drugs: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 323,
                                params: {
                                    collections_rejected_policy_drugs: d(n, t)
                                }
                            })
                        };
                    case "weapons":
                        return n = r.fbt._("WhatsApp's Commerce Policy for Weapons, ammunition, or explosives", null, {
                            hk: "1X972I"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 315,
                                params: {
                                    collections_rejected_policy_weapons: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 339,
                                params: {
                                    collections_rejected_policy_weapons: d(n, t)
                                }
                            })
                        };
                    case "animals":
                        return n = r.fbt._("WhatsApp's Commerce Policy for Animals", null, {
                            hk: "3hxXr8"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 294,
                                params: {
                                    collections_rejected_policy_animals: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 318,
                                params: {
                                    collections_rejected_policy_animals: d(n, t)
                                }
                            })
                        };
                    case "alcohol":
                        return n = r.fbt._("WhatsApp's Commerce Policy for Alcohol", null, {
                            hk: "1G8YGL"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 293,
                                params: {
                                    collections_rejected_policy_alcohol: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 317,
                                params: {
                                    collections_rejected_policy_alcohol: d(n, t)
                                }
                            })
                        };
                    case "gambling":
                        return n = r.fbt._("WhatsApp's Commerce Policy for Real money gambling services", null, {
                            hk: "1zQIeM"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 300,
                                params: {
                                    collections_rejected_policy_gambling: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 324,
                                params: {
                                    collections_rejected_policy_gambling: d(n, t)
                                }
                            })
                        };
                    case "tobacco":
                        return n = r.fbt._("WhatsApp's Commerce Policy for Tobacco items and related paraphernalia", null, {
                            hk: "EAQLL"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 313,
                                params: {
                                    collections_rejected_policy_tobacco: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 337,
                                params: {
                                    collections_rejected_policy_tobacco: d(n, t)
                                }
                            })
                        };
                    case "overtly_sexualized_positioning":
                        return n = r.fbt._("WhatsApp's Commerce Policy for Overtly sexualized positioning", null, {
                            hk: "1oaFbX"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 308,
                                params: {
                                    collections_rejected_policy_overtly_sexualized_positioning: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 332,
                                params: {
                                    collections_rejected_policy_overtly_sexualized_positioning: d(n, t)
                                }
                            })
                        };
                    case "adult":
                        return n = r.fbt._("WhatsApp's Commerce Policy for Adult products or service", null, {
                            hk: "Wf7q5"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 292,
                                params: {
                                    collections_rejected_policy_adult: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 316,
                                params: {
                                    collections_rejected_policy_adult: d(n, t)
                                }
                            })
                        };
                    case "supplements":
                        return n = r.fbt._("WhatsApp's Commerce Policy for Unsafe ingestible supplements", null, {
                            hk: "9a4Y2"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 311,
                                params: {
                                    collections_rejected_policy_supplements: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 335,
                                params: {
                                    collections_rejected_policy_supplements: d(n, t)
                                }
                            })
                        };
                    case "body_parts_fluids":
                        return n = r.fbt._("WhatsApp's Commerce Policy for Body parts and fluids", null, {
                            hk: "2EAd21"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 295,
                                params: {
                                    collections_rejected_policy_body_parts_fluids: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 319,
                                params: {
                                    collections_rejected_policy_body_parts_fluids: d(n, t)
                                }
                            })
                        };
                    case "healthcare":
                        return n = r.fbt._("WhatsApp's Commerce Policy for Medical and healthcare products", null, {
                            hk: "3vvgOF"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 302,
                                params: {
                                    collections_rejected_policy_healthcare: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 326,
                                params: {
                                    collections_rejected_policy_healthcare: d(n, t)
                                }
                            })
                        };
                    case "misleading":
                        return n = r.fbt._("WhatsApp's Commerce Policy for Business models, goods, items, or services that may be or are fraudulent, misleading, offensive, or deceptive, or may be or are exploitative, inappropriate, or exert undue pressure on targeted groups", null, {
                            hk: "3TyOB"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 305,
                                params: {
                                    collections_rejected_policy_misleading: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 329,
                                params: {
                                    collections_rejected_policy_misleading: d(n, t)
                                }
                            })
                        };
                    case "real_fake_currency":
                        return n = r.fbt._("WhatsApp's Commerce Policy for Real, virtual, or fake currency", null, {
                            hk: "2XnVq2"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 309,
                                params: {
                                    collections_rejected_policy_real_fake_currency: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 333,
                                params: {
                                    collections_rejected_policy_real_fake_currency: d(n, t)
                                }
                            })
                        };
                    case "digital_services_products":
                        return n = r.fbt._("WhatsApp's Commerce Policy for Digital and subscription services", null, {
                            hk: "2mvwqB"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 297,
                                params: {
                                    collections_rejected_policy_digital_services_products: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 321,
                                params: {
                                    collections_rejected_policy_digital_services_products: d(n, t)
                                }
                            })
                        };
                    case "thrid_party_infringements":
                        return n = r.fbt._("WhatsApp's Commerce Policy for Third-Party Infringement", null, {
                            hk: "48SSD"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 312,
                                params: {
                                    collections_rejected_policy_thrid_party_infringements: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 336,
                                params: {
                                    collections_rejected_policy_thrid_party_infringements: d(n, t)
                                }
                            })
                        };
                    case "unauthorized_media":
                        return n = r.fbt._("WhatsApp's Commerce Policy for Products or items that facilitate or encourage unauthorized access to digital media", null, {
                            hk: "2ldhoF"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 314,
                                params: {
                                    collections_rejected_policy_unauthorized_media: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 338,
                                params: {
                                    collections_rejected_policy_unauthorized_media: d(n, t)
                                }
                            })
                        };
                    case "illegal_products":
                        return n = r.fbt._("WhatsApp's Commerce Policy for Illegal products or services", null, {
                            hk: "c5Zjc"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 304,
                                params: {
                                    collections_rejected_policy_illegal_products: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 328,
                                params: {
                                    collections_rejected_policy_illegal_products: d(n, t)
                                }
                            })
                        };
                    case "hazardous_goods_and_materials":
                        return n = r.fbt._("WhatsApp's Commerce Policy for Business models, goods, items, or services that may be or are fraudulent, misleading, offensive, or deceptive, or may be or are exploitative, inappropriate, or exert undue pressure on targeted groups", null, {
                            hk: "3TyOB"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 301,
                                params: {
                                    collections_rejected_policy_hazardous_goods_and_materials: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 325,
                                params: {
                                    collections_rejected_policy_hazardous_goods_and_materials: d(n, t)
                                }
                            })
                        };
                    case "stolen_goods":
                        return n = r.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 310,
                                params: {
                                    collections_rejected_policy_stolen_goods: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 334,
                                params: {
                                    collections_rejected_policy_stolen_goods: d(n, t)
                                }
                            })
                        };
                    case "human_exploitation_and_sexual_services":
                        return n = r.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 303,
                                params: {
                                    collections_rejected_policy_human_exploitation_and_sexual_services: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 327,
                                params: {
                                    collections_rejected_policy_human_exploitation_and_sexual_services: d(n, t)
                                }
                            })
                        };
                    case "community_standards":
                        return n = r.fbt._("WhatsApp's Business Terms", null, {
                            hk: "1x5ZqO"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 296,
                                params: {
                                    collections_rejected_policy_community_standards: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 320,
                                params: {
                                    collections_rejected_policy_community_standards: d(n, t)
                                }
                            })
                        };
                    case "discrimination":
                        return n = r.fbt._("WhatsApp's Business Terms", null, {
                            hk: "1x5ZqO"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 298,
                                params: {
                                    collections_rejected_policy_discrimination: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 322,
                                params: {
                                    collections_rejected_policy_discrimination: d(n, t)
                                }
                            })
                        };
                    default:
                        return n = r.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 307,
                                params: {
                                    collections_rejected_policy_other_violation: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 331,
                                params: {
                                    collections_rejected_policy_other_violation: d(n, t)
                                }
                            })
                        }
                }
            };
            var o = a(n(3208)),
                r = n(48360),
                i = a(n(81288)),
                l = n(49012),
                u = a(n(62848)),
                s = n(85893);

            function d(e, t) {
                var n = t || o.default.WA_COMMERCE_POLICY_URL;
                return (0, s.jsx)(i.default, {
                    href: n,
                    onClick: function(e) {
                        e.preventDefault(), (0, l.openExternalLink)(n)
                    },
                    children: e
                })
            }
        },
        32065: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.logCollectionCreateClicked = function(e) {
                new i.default.CatalogBiz({
                    catalogBizAction: i.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CREATE_CLICKED,
                    catalogEntryPoint: e.entryPoint,
                    catalogSessionId: e.session.toString()
                }).commit()
            }, t.logCollectionCreated = function(e) {
                var t = e.catalogContext,
                    n = (e.collectionId, e.productCount);
                new i.default.CatalogBiz({
                    catalogBizAction: i.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CREATED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: n
                }).commit()
            }, t.logCollectionDeleted = function(e) {
                var t = e.catalogContext,
                    n = e.collectionId;
                new i.default.CatalogBiz({
                    catalogBizAction: i.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_DELETED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    collectionId: n
                }).commit()
            }, t.logCollectionItemsAssignment = function(e) {
                var t = e.catalogContext,
                    n = e.collectionId,
                    a = e.addedCount,
                    o = e.removedCount;
                a > 0 && new i.default.CatalogBiz({
                    catalogBizAction: i.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_ASSIGN_ITEMS,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: a,
                    collectionId: n
                }).commit();
                o > 0 && new i.default.CatalogBiz({
                    catalogBizAction: i.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_UNASSIGN_ITEMS,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: o,
                    collectionId: n
                }).commit()
            }, t.logCollectionMenuClicked = function(e) {
                new i.default.CatalogBiz({
                    catalogBizAction: i.default.CATALOG_BIZ_ACTION.ACTION_MENU_COLLECTIONS_CLICK,
                    catalogEntryPoint: e.entryPoint,
                    catalogSessionId: e.session.toString()
                }).commit()
            }, t.logCollectionRenamed = function(e) {
                var t = e.catalogContext,
                    n = e.collectionId;
                new i.default.CatalogBiz({
                    catalogBizAction: i.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_DELETED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    collectionId: n
                }).commit()
            }, t.logCollectionSeeAllView = function(e) {
                var t = e.catalogOwnerJid,
                    n = e.catalogContext,
                    a = e.collectionId,
                    s = (0, r.getProductStatsInFetched)(t, a),
                    d = null == s ? void 0 : s.productIndex,
                    c = null == s ? void 0 : s.collectionIndex;
                (0, u.createCatalogViewEvent)((0, o.default)({
                    isOwner: (0, u.isCatalogOwner)({
                        catalogOwnerJid: t
                    }),
                    catalogBizAction: i.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_IMPRESSION,
                    catalogViewAction: i.default.CATALOG_VIEW_ACTION.ACTION_COLLECTION_IMPRESSION,
                    productIndex: d,
                    collectionIndex: c
                }, (0, l.toDataForCatalogViewEvents)(n))).commit()
            };
            var o = a(n(81109)),
                r = n(46321),
                i = a(n(50507)),
                l = n(52867),
                u = n(21013)
        },
        85170: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n(34575)),
                r = a(n(93913)),
                i = a(n(2205)),
                l = a(n(99842)),
                u = n(67294),
                s = n(56734),
                d = n(66419),
                c = n(61661),
                f = a(n(17014)),
                p = n(96706),
                h = n(73568),
                m = a(n(23803)),
                g = a(n(92546)),
                v = n(69725),
                _ = n(63641),
                C = n(56264),
                x = n(56003),
                S = n(52867),
                b = a(n(99262)),
                y = n(46408),
                k = a(n(61897)),
                j = n(68220),
                T = n(85893),
                P = function(e) {
                    (0, i.default)(n, e);
                    var t = (0, l.default)(n);

                    function n(e) {
                        var a;
                        return (0, o.default)(this, n), (a = t.call(this, e)).attachedListeners = new Set, a._catalogFlatListController = new g.default, a._handleProductDetail = function(e, t) {
                            var n = a.props.onProductDetail;
                            return (0, x.qplStartProductView)("Collection"), (0, C.logCatalogListDetailClick)({
                                product: (0, j.unproxy)(e),
                                catalogContext: (0, S.getProductCatalogContext)(a.context)
                            }), n(e, t)
                        }, a._handleProductShare = function(e) {
                            var t = a.props.onProductShare;
                            t && t(e)
                        }, a._handleProductDelete = function(e) {
                            var t = a.props.catalog;
                            (0, s.handleProductDelete)(t, e, (0, S.getProductCatalogContext)(a.context), "Collection")
                        }, a._handleProductHideShow = function(e) {
                            var t = a.props.catalog;
                            (0, s.handleProductVisibilityChange)(t, e, (0, S.getProductCatalogContext)(a.context), "Collections")
                        }, a.renderItem = function(e) {
                            var t = e.collection,
                                n = e.product,
                                o = e.allItems,
                                r = e.reviewBanner,
                                i = e.collectionId,
                                l = a.props,
                                u = l.onCartOpen,
                                s = l.shareLinks;
                            return t ? r ? (0, T.jsx)(c.CollectionIntegrityBanner, {
                                collection: t,
                                onEditCollection: a.props.onEditCollection
                            }) : (0, T.jsx)(f.default, {
                                collection: t,
                                onSeeAll: a.props.onCollectionSeeAll
                            }) : o ? (0, T.jsx)(f.default, {
                                allItems: o,
                                onSeeAll: a.props.onCollectionSeeAll
                            }) : n ? (0, T.jsx)(b.default, {
                                collectionId: i,
                                product: n,
                                onCartOpen: u,
                                onClick: function() {
                                    return a._handleProductDetail(n, i)
                                },
                                onProductShare: s ? a._handleProductShare : null,
                                onProductDelete: a._handleProductDelete,
                                onProductHideShow: a._handleProductHideShow,
                                theme: "product-of-collection",
                                canManageCatalog: a.props.canManageCatalog
                            }) : null
                        }, a.state = {
                            loadingMore: !1,
                            stopLoading: !1,
                            catalogFetchState: e.catalog ? "SUCCESS" : "NONE"
                        }, a
                    }
                    return (0, r.default)(n, [{
                        key: "getData",
                        value: function() {
                            var e = this,
                                t = void 0 !== this.props.onCartOpen,
                                n = this.props.data || [],
                                a = [];
                            return n.forEach((function(n) {
                                var o = n.collection,
                                    r = n.product,
                                    i = n.allItems;
                                if (o && r) {
                                    var l = o.id;
                                    a.push({
                                        itemKey: `${l.toString()}_${r.id.toString()}_${t.toString()}`,
                                        product: r,
                                        collectionId: l
                                    })
                                } else if (o) e.attachedListeners.has(o.id) || (e.attachedListeners.add(o.id), e.props.listeners.add(o, "change:reviewStatus canAppeal", (function() {
                                    e.forceUpdate()
                                }))), a.push({
                                    itemKey: `${o.id.toString()}_${o.reviewStatus.toString()}`,
                                    collection: o
                                }), o.reviewStatus !== y.PRODUCT_REVIEW_STATUS.PENDING && o.reviewStatus !== y.PRODUCT_REVIEW_STATUS.REJECTED || a.push({
                                    itemKey: `${o.id.toString()}_reviewBanner`,
                                    collection: o,
                                    height: (0, c.getCollectionIntegrityHeight)(o),
                                    reviewBanner: !0
                                });
                                else if (i) a.push({
                                    itemKey: "view_all",
                                    allItems: i
                                });
                                else if (r) {
                                    var u = e.props.collectionId || void 0;
                                    a.push({
                                        itemKey: `${r.id.toString()}_${t.toString()}`,
                                        product: r,
                                        collectionId: u
                                    })
                                }
                            })), a
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.getData();
                            return (0, T.jsx)(T.Fragment, {
                                children: (0, T.jsx)(m.default, {
                                    flatListControllers: [this._catalogFlatListController],
                                    children: (0, T.jsx)(h.FlatList, {
                                        flatListController: this._catalogFlatListController,
                                        direction: "vertical",
                                        forceConsistentRenderCount: !1,
                                        data: e,
                                        renderItem: this.renderItem,
                                        defaultItemHeight: d.PRODUCT_LIST_ITEM_HEIGHT,
                                        keyOrder: v.KeyOrder.INVERSE
                                    })
                                })
                            })
                        }
                    }]), n
                }(u.Component);
            P.CONCERNS = {
                catalog: ["productCollection", "collections", "afterCursor", "id", "index"]
            }, P.contextType = p.DrawerContext, P.displayName = "ProductCollectionsList";
            var E = (0, _.ListenerHOC)((0, k.default)(P, P.CONCERNS));
            t.default = E
        },
        77538: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                o = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.collectionId,
                    o = e.onCartClick,
                    i = e.onProductLinkClick,
                    f = e.onProductMoreInformation,
                    L = e.onBack,
                    K = e.onProductCatalog,
                    Y = e.onProductDetail,
                    Z = e.refreshCarousel,
                    ee = e.chat,
                    te = e.isPushed,
                    ne = void 0 === te || te,
                    ae = (0, m.default)(),
                    oe = (0, C.default)(),
                    re = (0, h.useContext)(A.DrawerContext),
                    ie = (0, _.useModelValues)(e.product, ["id", "catalogWid", "productImageCollection", "fetchedFromServer", "name", "availability", "reviewStatus"]),
                    le = (0, h.useState)(null),
                    ue = (0, r.default)(le, 2),
                    se = ue[0],
                    de = ue[1],
                    ce = (0, h.useState)(!1),
                    fe = (0, r.default)(ce, 2),
                    pe = fe[0],
                    he = fe[1],
                    me = (0, h.useState)(null),
                    ge = (0, r.default)(me, 2),
                    ve = ge[0],
                    _e = ge[1],
                    Ce = (0, h.useState)("NONE"),
                    xe = (0, r.default)(Ce, 2),
                    Se = xe[0],
                    be = xe[1],
                    ye = (0, h.useState)("NONE"),
                    ke = (0, r.default)(ye, 2),
                    je = ke[0],
                    Te = ke[1],
                    Pe = (0, g.default)((function() {
                        return b.CartCollection.findCart(ie.catalogWid.toString())
                    }));
                (0, v.useListener)(Pe.current, "change:cartItemCollection", ae);
                var Ee = function() {
                        if (L) return L()
                    },
                    Ie = function() {
                        var e = ie.catalogWid,
                            t = ie.id.toString(),
                            n = y.CatalogCollection.findProduct({
                                catalogWid: e,
                                productId: t,
                                productMsgMediaData: (0, Q.unproxy)(ie).productMsgMediaData,
                                canLogQpl: ne
                            }),
                            o = x.BusinessProfileCollection.find(e),
                            i = !0;
                        return a.all([o, n]).then((function(e) {
                            var t = (0, r.default)(e, 1)[0];
                            if (oe.aborted) throw new l.AbortError;
                            return i = !1, ne && (0, D.qplEndProductView)(z.QuickLogActionType.SUCCESS), de(t), be("SUCCESS"), t
                        })).then((function(e) {
                            "PENDING" === je && ((0, S.hasCatalog)(e) ? function() {
                                var e = ie.catalogWid;
                                y.CatalogCollection.findCarouselCatalog(e).then((function(e) {
                                    if (!oe.aborted) {
                                        var t = Array.isArray(e) ? e[0] : e;
                                        _e(t || null), Te(t ? "SUCCESS" : "NONE")
                                    }
                                })).catch((0, u.filteredCatch)(c.ServerStatusCodeError, (function(e) {
                                    "not_found" === e.status || 404 === e.status ? (_e(null), Te("NOT_FOUND")) : (_e(null), Te("ERROR"), __LOG__(3)`Failed to fetch product catalog from server`)
                                }))).catch((0, u.filteredCatch)(c.WebdDrop, (function() {
                                    _e(null), Te("ERROR"), __LOG__(3)`Failed to fetch product catalog`
                                })))
                            }() : Te("NONE"))
                        })).catch((0, l.catchAbort)((function() {}))).catch((0, u.filteredCatch)(c.E404, (function() {
                            Ee(), P.Cmd.openModal((0, $.jsx)(E.default, {
                                onOK: function() {
                                    P.Cmd.closeModal()
                                },
                                okText: p.fbt._("OK", null, {
                                    hk: "2KEeHb"
                                }),
                                children: p.fbt._("This product or service has been removed", null, {
                                    hk: "3mE1ld"
                                })
                            })), be("NOT_FOUND"), i = !1, (0, D.qplDropProductView)()
                        }))).catch((0, u.filteredCatch)(c.WebdDrop, (function() {
                            be("ERROR"), __LOG__(3)`Failed to fetch product`
                        }))).catch((0, u.filteredCatch)(c.ServerStatusCodeError, (function() {
                            be("ERROR"), __LOG__(3)`Failed to fetch product from server`
                        }))).finally((function() {
                            ne && i && (0, D.qplEndProductView)(z.QuickLogActionType.FAIL)
                        }))
                    };
                (0, h.useEffect)((function() {
                    if ((0, N.commerceThreadsLoggingEnabled)() && ee && (0, j.addChatThreadLoggingActivities)([{
                            activityType: "pdpViews",
                            ts: (0, s.unixTime)(),
                            chatId: ee.id
                        }]), Z) {
                        var e = y.CatalogCollection.get(ie.catalogWid);
                        (null == e ? void 0 : e.productCollection) && e.fetchedFromServer ? Te("SUCCESS") : Te("PENDING")
                    }
                    var t = (0, M.getMaybeMeUser)();
                    ne && (0, D.qplAnnotateProductView)(!(null == t ? void 0 : t.equals(ie.catalogWid)));
                    var a = ie.catalogWid,
                        o = ie.id.toString();
                    if (a && o) return Ie(), (0, T.default)(a).then((function(e) {
                            he(e)
                        })), (0, R.logProductDetailView)({
                            product: (0, Q.unproxy)(ie),
                            catalogContext: (0, V.getProductCatalogContext)(re),
                            cartToggle: pe,
                            collectionId: n
                        }),
                        function() {
                            var e = ie.catalogWid,
                                t = ie.id.toString();
                            if (e && t) {
                                var n = y.CatalogCollection.get(e),
                                    a = n && n.msgProductCollection.get(t);
                                (null == a ? void 0 : a.fetchedFromServer) && n && n.msgProductCollection.remove(a)
                            }
                        };
                    (0, D.qplDropProductView)()
                }), []);
                var we = function() {
                        return "ERROR" !== Se && "NOT_FOUND" !== Se && !(ie.reviewStatus === F.PRODUCT_REVIEW_STATUS.REJECTED)
                    },
                    Oe = we(),
                    Ae = (0, S.hasCatalog)(se);
                return (0, $.jsxs)(w.default, {
                    onDrop: Ee,
                    theme: "striped",
                    children: [(0, $.jsx)(X, {
                        handleBack: Ee,
                        menu: we() ? (0, $.jsx)(I.default, {
                            onSendProduct: function() {
                                var e = ie,
                                    t = e.catalogWid,
                                    n = y.CatalogCollection.get(t);
                                if (n) {
                                    var a = n.productCollection.get(e.id);
                                    P.Cmd.attachProduct({
                                        product: a ? (0, Q.unproxy)(a) : (0, Q.unproxy)(e)
                                    })
                                }
                            },
                            onReportProduct: function() {
                                P.Cmd.openModal((0, $.jsx)(q.default, {
                                    product: ie,
                                    sessionId: (0, V.getProductCatalogSessionId)(re)
                                }))
                            },
                            onProductLinkClick: function() {
                                i(ie)
                            },
                            onProductMoreInformation: function() {
                                f(ie)
                            },
                            onCartClick: pe ? function() {
                                (0, D.qplStartCartView)("Product"), o && o(ie.catalogWid.toString())
                            } : void 0,
                            cartCount: Pe.current.itemCount,
                            catalogId: ie.catalogWid.toString(),
                            contactId: null == ee ? void 0 : ee.contact.id.user
                        }) : null
                    }), (0, $.jsx)(O.default, {
                        children: (0, $.jsxs)("div", {
                            "data-a8n": d.default.key("product-details"),
                            className: W.default.body,
                            children: [(0, $.jsx)(J, {
                                productFetchState: Se,
                                productCatalogFetchState: je,
                                isAvailable: Oe
                            }), (0, $.jsx)(H.default, {
                                product: ie,
                                isAvailable: Oe,
                                fetching: "PENDING" === Se
                            }), ie.availability === G.ProductAvailability.OUT_OF_STOCK ? (0, $.jsx)("div", {
                                className: W.default.availabilityBanner,
                                children: p.fbt._("This item is out of stock.", null, {
                                    hk: "4gOwiz"
                                })
                            }) : null, (0, $.jsx)(U.default, {
                                product: ie,
                                collectionId: n,
                                onSendChat: function() {
                                    var e = y.CatalogCollection.get(ie.catalogWid);
                                    (0, B.sendProductToChat)(ie, e, (0, V.getProductCatalogContext)(re)), (0, R.logProductMessageBusinessClick)(ie, (0, V.getProductCatalogContext)(re))
                                },
                                isAvailable: Oe,
                                hideRetailerID: null === (t = e.chat) || void 0 === t ? void 0 : t.contact.isEnterprise
                            }), Ae && ve ? (0, $.jsx)(k.default, {
                                catalog: ve,
                                onProductCatalog: function() {
                                    K && K(ie.catalogWid, (0, V.getProductCatalogContext)(re))
                                },
                                onProductDetail: function(e) {
                                    if ((0, D.qplStartProductView)("Product"), Y) return Y(e)
                                },
                                filterProductId: ie.id.toString(),
                                title: p.fbt._("More", null, {
                                    hk: "2A3GqV"
                                }),
                                animation: !1
                            }) : null]
                        })
                    })]
                }, "product-details-drawer")
            };
            var r = o(n(63038)),
                i = o(n(59713)),
                l = n(396),
                u = n(15586),
                s = n(79746),
                d = o(n(84646)),
                c = n(73435),
                f = o(n(94184)),
                p = n(48360),
                h = n(67294),
                m = o(n(45764)),
                g = o(n(62905)),
                v = n(91285),
                _ = n(50857),
                C = o(n(22190)),
                x = n(26141),
                S = n(79614),
                b = n(2133),
                y = n(72743),
                k = o(n(69286)),
                j = n(40123),
                T = o(n(38345)),
                P = n(65901),
                E = o(n(86777)),
                I = o(n(79526)),
                w = o(n(53187)),
                O = o(n(18345)),
                A = n(96706),
                L = n(19288),
                M = n(1577),
                N = n(2629),
                R = n(56264),
                D = n(56003),
                B = n(36949),
                V = n(52867),
                F = n(46408),
                W = o(n(71524)),
                U = o(n(31529)),
                H = o(n(41756)),
                G = n(24449),
                z = n(3298),
                q = o(n(81926)),
                K = n(85651),
                Q = n(68220),
                Y = n(22552),
                $ = n(85893);

            function J(e) {
                var t, n, a = e.productFetchState,
                    o = e.productCatalogFetchState,
                    r = e.isAvailable;
                n = "ERROR" === a ? (0, $.jsx)(Y.TextSpan, {
                    className: W.default.text,
                    theme: "small",
                    color: "danger",
                    children: p.fbt._("Something went wrong", null, {
                        hk: "7C9hw"
                    })
                }) : r ? [(0, $.jsx)(K.Spinner, {
                    size: 14,
                    color: K.colorOptions.highlight
                }, "DetailDrawer-loadingBar-spinner"), (0, $.jsx)(Y.TextSpan, {
                    className: (0, f.default)(W.default.text, W.default.loadingText),
                    theme: "small",
                    children: p.fbt._("Waiting for network", null, {
                        hk: "3I2DtN"
                    })
                }, "DetailDrawer-loadingBar-msg")] : (0, $.jsx)(Y.TextSpan, {
                    className: W.default.text,
                    theme: "small",
                    color: "danger",
                    children: p.fbt._("This product or service has been removed", null, {
                        hk: "3mE1ld"
                    })
                });
                var l = "PENDING" === a || "PENDING" === o || !r;
                return (0, $.jsx)("div", {
                    className: (0, f.default)((t = {}, (0, i.default)(t, W.default.loadingContainer, l), (0, i.default)(t, W.default.shiftUp, !l), t)),
                    children: n
                })
            }

            function X(e) {
                var t = e.menu,
                    n = e.handleBack;
                return (0, $.jsx)(L.DrawerHeader, {
                    title: p.fbt._("Details", null, {
                        hk: "1hLRT1"
                    }),
                    onBack: n,
                    type: L.DRAWER_HEADER_TYPE.SMALL,
                    menu: t
                })
            }
        },
        31529: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.collectionId,
                    n = e.onSendChat,
                    a = e.isAvailable,
                    r = (0, d.useContext)(g.DrawerContext),
                    i = (0, c.useModelValues)(e.product, ["name", "url", "description", "availability", "currency", "priceAmount1000", "salePriceAmount1000", "salePriceStartDate", "salePriceEndDate", "fetchedFromServer", "retailerId", "catalogWid", "productImageCollection", "imageHash", "reviewStatus", "imageCdnUrl", "id"]),
                    u = (0, d.useState)(!1),
                    s = (0, o.default)(u, 2),
                    p = s[0],
                    h = s[1],
                    x = (0, d.useState)(!1),
                    y = (0, o.default)(x, 2),
                    T = y[0],
                    A = y[1];
                return (0, d.useEffect)((function() {
                    (0, m.default)(i.catalogWid).then((function(e) {
                        A(e)
                    }))
                }), []), (0, O.jsxs)(v.default, {
                    theme: "padding-product",
                    animation: !1,
                    children: [(0, O.jsx)(w.TextDiv, {
                        theme: "title",
                        className: k.default.name,
                        children: (0, O.jsx)(_.EmojiText, {
                            text: i.name,
                            selectable: !0
                        })
                    }), null != i.priceAmount1000 ? (0, O.jsx)(w.TextDiv, {
                        className: k.default.price,
                        color: "dark",
                        theme: "plain",
                        children: (0, O.jsx)(j.default, {
                            product: i,
                            selectable: !0,
                            direction: "inherit"
                        })
                    }) : null, (0, O.jsx)(R, {
                        product: i,
                        isAvailable: a,
                        isDescExpanded: p,
                        hideRetailerID: e.hideRetailerID,
                        onReadMore: function() {
                            h(!0)
                        },
                        onClickUrl: function(e, t) {
                            e.stopPropagation(), (0, S.logDetailLinkClick)({
                                product: (0, I.unproxy)(i),
                                catalogContext: (0, b.getProductCatalogContext)(r)
                            });
                            var n = t && l.findLink(t);
                            n && (0, C.openExternalLink)(n.url)
                        }
                    }), (0, O.jsx)(L, {
                        onSendChat: n,
                        isAvailable: a,
                        product: i
                    }), (0, O.jsx)(M, {
                        cartEnabled: T,
                        isAvailable: a,
                        product: i,
                        onClick: function(e) {
                            P.QPL.markerStart(E.QuickLogMarkerId.WHATSAPP_CART_ADD, {
                                annotations: {
                                    string: {
                                        EntryPoint: "Product"
                                    }
                                }
                            }), (0, f.default)(i, (0, b.getProductCatalogContext)(r), t), e.stopPropagation()
                        }
                    })]
                })
            };
            var o = a(n(63038)),
                r = a(n(59713)),
                i = a(n(3208)),
                l = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = A(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                            i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                        } a.default = e, n && n.set(e, a);
                    return a
                }(n(58615)),
                u = a(n(94184)),
                s = n(48360),
                d = n(67294),
                c = n(50857),
                f = a(n(21224)),
                p = a(n(57440)),
                h = a(n(51599)),
                m = a(n(38345)),
                g = n(96706),
                v = a(n(46821)),
                _ = n(73008),
                C = n(49012),
                x = n(59333),
                S = n(56264),
                b = n(52867),
                y = n(46408),
                k = a(n(77954)),
                j = a(n(84754)),
                T = n(24449),
                P = n(3298),
                E = n(4099),
                I = n(68220),
                w = n(22552),
                O = n(85893);

            function A(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (A = function(e) {
                    return e ? n : t
                })(e)
            }

            function L(e) {
                var t = e.onSendChat,
                    n = e.isAvailable,
                    a = e.product;
                if (!t || !a.fetchedFromServer || !n || a.reviewStatus !== y.PRODUCT_REVIEW_STATUS.APPROVED) return null;
                var o = s.fbt._("Message Business", null, {
                    hk: "2JrycU"
                });
                return (0, O.jsx)("div", {
                    className: k.default.buttonContainer,
                    title: o,
                    children: (0, O.jsx)(h.default, {
                        a8nText: "product-message-business-btn",
                        className: k.default.button,
                        onClick: t,
                        type: "secondary",
                        children: o
                    })
                })
            }

            function M(e) {
                var t = e.cartEnabled,
                    n = e.isAvailable,
                    a = e.product,
                    o = e.onClick;
                if (!t || !a.fetchedFromServer || !n || a.reviewStatus !== y.PRODUCT_REVIEW_STATUS.APPROVED) return null;
                var i = s.fbt._("Add to cart", null, {
                        hk: "2qbS08"
                    }),
                    l = a.availability === T.ProductAvailability.OUT_OF_STOCK;
                return (0, O.jsx)("div", {
                    className: k.default.buttonContainer,
                    title: i,
                    children: (0, O.jsx)(h.default, {
                        a8nText: "add-to-cart-btn",
                        className: (0, u.default)(k.default.button, k.default.addToCartButton),
                        onClick: o,
                        type: "secondary",
                        disabled: l,
                        children: (0, O.jsxs)("span", {
                            className: k.default.addToCartContainer,
                            children: [(0, O.jsx)(p.default, {
                                className: (0, u.default)(k.default.addToCartIcon, (0, r.default)({}, k.default.addToCartIconDisabled, l))
                            }), i]
                        })
                    })
                })
            }

            function N(e) {
                var t = e.isAvailable,
                    n = e.product,
                    a = e.onClick,
                    o = n.url;
                if (!n.fetchedFromServer || !o || !t) return null;
                var r = x.Configuration.TrustedGroupDesc({
                    links: l.findLinks(o)
                });
                return (0, O.jsx)("div", {
                    children: (0, O.jsx)(_.EmojiText, {
                        selectable: !0,
                        formatters: r,
                        text: o,
                        onClick: function(e) {
                            return a(e, o)
                        }
                    })
                })
            }

            function R(e) {
                var t = e.product,
                    n = e.isAvailable,
                    a = e.isDescExpanded,
                    o = e.hideRetailerID,
                    r = e.onReadMore,
                    l = e.onClickUrl;
                if (!t.description && !t.url && !t.retailerId) return null;
                var u, d = !!t.description && t.description.length > i.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH;
                return t.description && (u = (0, O.jsxs)("div", {
                    children: [(0, O.jsx)(_.EmojiText, {
                        selectable: !0,
                        multiline: !0,
                        text: t.description,
                        textLimit: a ? 1 / 0 : i.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                    }), d && !a ? (0, O.jsxs)("span", {
                        className: k.default.more,
                        role: "button",
                        onClick: r,
                        children: [" ", s.fbt._("Read more", null, {
                            hk: "2DvSvh"
                        })]
                    }) : null]
                })), (0, O.jsxs)(w.TextDiv, {
                    theme: "plain",
                    className: k.default.description,
                    children: [u, (0, O.jsx)(N, {
                        isAvailable: n,
                        product: t,
                        onClick: l
                    }), t.retailerId && !o ? (0, O.jsx)("div", {
                        children: (0, O.jsx)(_.EmojiText, {
                            text: t.retailerId,
                            selectable: !0,
                            direction: "inherit"
                        })
                    }) : null]
                })
            }
        },
        75294: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProductDetailsWithDeepLink = function(e) {
                var t = e.isPushed,
                    n = void 0 === t || t,
                    a = e.productInfo,
                    b = a.productId,
                    y = a.businessOwnerJid,
                    k = e.onBack,
                    j = (0, d.useState)((function() {
                        return (0, C.default)({
                            productId: b,
                            businessOwnerJid: y
                        })
                    })),
                    T = (0, o.default)(j, 2),
                    P = T[0],
                    E = T[1],
                    I = (0, d.useState)((function() {
                        return P ? "NONE" : "PENDING"
                    })),
                    w = (0, o.default)(I, 2),
                    O = w[0],
                    A = w[1];
                if ((0, d.useEffect)((function() {
                        var e;
                        P || (e = (0, u.createWid)(y), c.CatalogCollection.findProduct({
                            catalogWid: e,
                            productId: b
                        }).then((function() {
                            var t = c.CatalogCollection.get(e);
                            E((0, i.default)(t, "catalog").productCollection.get(b)), A("SUCCESS")
                        })).catch((0, r.filteredCatch)(l.E404, (function() {
                            k(), f.Cmd.openModal((0, S.jsx)(p.default, {
                                onOK: function() {
                                    f.Cmd.closeModal()
                                },
                                okText: s.fbt._("OK", null, {
                                    hk: "2KEeHb"
                                }),
                                children: s.fbt._("This product or service has been removed", null, {
                                    hk: "3mE1ld"
                                })
                            })), A("ERROR")
                        }))).catch((function(e) {
                            (0, v.parseErrorState)(e, (function(e) {
                                A(e)
                            }))
                        })))
                    }), []), P) return (0, S.jsx)(x.default, {
                    chat: e.chat,
                    isPushed: n,
                    product: P,
                    onEnd: e.onEnd,
                    onBack: e.onBack,
                    onProductDetail: e.onProductDetail,
                    onProductCatalog: e.onProductCatalog,
                    refreshCarousel: !0,
                    onProductLinkClick: e.onProductLinkClick,
                    onProductMoreInformation: e.onProductMoreInformation,
                    onCartClick: e.onCartClick
                });
                return (0, S.jsxs)(h.default, {
                    onDrop: e.onBack,
                    children: [(0, S.jsx)(g.DrawerHeader, {
                        a8n: "drawer-title-profile",
                        title: s.fbt._("Details", null, {
                            hk: "1hLRT1"
                        }),
                        onBack: e.onBack,
                        type: g.DRAWER_HEADER_TYPE.SMALL
                    }), (0, S.jsx)(m.default, {
                        children: (0, S.jsx)(_.default, {
                            fetchState: O
                        })
                    })]
                }, "product-details-drawer")
            };
            var o = a(n(63038)),
                r = n(15586),
                i = a(n(272)),
                l = n(73435),
                u = n(84460),
                s = n(48360),
                d = n(67294),
                c = n(72743),
                f = n(65901),
                p = a(n(86777)),
                h = a(n(53187)),
                m = a(n(18345)),
                g = n(19288),
                v = n(23519),
                _ = a(n(22426)),
                C = a(n(24965)),
                x = a(n(77538)),
                S = n(85893)
        },
        1270: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a, o = e.onBack,
                    C = e.onCancel,
                    E = e.product,
                    I = e.prompt,
                    w = e.centerDrawer,
                    O = e.sendProductMsg,
                    A = e.onSend,
                    L = (0, i.useContext)(f.DrawerContext),
                    M = function() {
                        u.Cmd.openModal((0, j.jsx)(b.default, {
                            product: E,
                            onSend: A
                        }), {
                            transition: "modal-flow"
                        }), (0, g.logShareProductViaWALinkClick)({
                            product: E,
                            catalogContext: (0, v.getProductCatalogContext)(L)
                        })
                    },
                    N = (0, y.createProductLink)(E.catalogWid.user, E.id.toString());
                w && (t = "labels", n = "center-column");
                a = null != O ? (0, j.jsx)(S.default, {
                    onClick: function() {
                        u.Cmd.attachProduct({
                            product: (0, k.unproxy)(E),
                            onSend: A
                        })
                    }
                }) : (0, j.jsx)(x.default, {
                    onClick: M
                });
                return (0, j.jsxs)(d.default, {
                    theme: t,
                    children: [(0, j.jsx)(p.DrawerHeader, {
                        a8n: "product-link-title",
                        title: r.fbt._("Product link", null, {
                            hk: "1RIlvV"
                        }),
                        onBack: o,
                        onCancel: C,
                        type: p.DRAWER_HEADER_TYPE.SMALL,
                        focusBackOrCancel: !0
                    }), (0, j.jsxs)(c.default, {
                        theme: n,
                        children: [(0, j.jsx)("div", {
                            className: _.default.prompt,
                            children: I
                        }), (0, j.jsx)(l.default, {
                            image: P(E),
                            primary: (0, j.jsx)(h.EmojiText, {
                                text: E.name,
                                direction: "auto"
                            }),
                            theme: "identity",
                            secondary: (0, j.jsx)(m.default, {
                                id: T,
                                href: N,
                                onClick: function(e) {
                                    e.preventDefault(), M()
                                },
                                noHandle: !0
                            })
                        }), a, (0, j.jsx)(s.default, {
                            elementId: T,
                            onClick: function() {
                                (0, g.logShareProductCopyLinkClick)({
                                    product: E,
                                    catalogContext: (0, v.getProductCatalogContext)(L)
                                })
                            }
                        })]
                    })]
                }, "product-link-drawer")
            };
            var o = a(n(94184)),
                r = n(48360),
                i = n(67294),
                l = a(n(88186)),
                u = n(65901),
                s = a(n(22261)),
                d = a(n(53187)),
                c = a(n(18345)),
                f = n(96706),
                p = n(19288),
                h = n(73008),
                m = a(n(59397)),
                g = n(56264),
                v = n(52867),
                _ = a(n(18384)),
                C = n(47576),
                x = a(n(59782)),
                S = a(n(24496)),
                b = a(n(79433)),
                y = n(37404),
                k = n(68220),
                j = n(85893),
                T = "product-link-anchor";

            function P(e) {
                var t = e.getProductImageCollectionHead();
                return t ? (0, j.jsx)(C.ProductThumb, {
                    className: (0, o.default)(_.default.productImage, _.default.productImageContainer),
                    mediaData: t.mediaData
                }) : (0, j.jsx)(C.ProductThumbPlaceholder, {
                    className: (0, o.default)(_.default.productThumb, _.default.productThumbContainer)
                })
            }
        },
        60425: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProductListDrawer = function(e) {
                var t = e.catalogId,
                    n = e.canManageCatalog,
                    a = e.setScrollOffset,
                    i = e.onCartClick,
                    y = e.onCatalogLinkClick,
                    J = e.autoUpdate,
                    X = void 0 !== J && J,
                    Z = e.businessProfile,
                    ee = e.onAddProduct,
                    te = e.onProductDetail,
                    ne = e.onProductShare,
                    ae = e.headerType,
                    oe = e.onOpenSettings,
                    re = e.blockCartInterstitialFn,
                    ie = void 0 === re ? function() {
                        return !1
                    } : re,
                    le = (0, C.default)(),
                    ue = (0, f.useContext)(w.DrawerContext),
                    se = (0, h.default)(),
                    de = (0, p.default)(se, 100),
                    ce = (0, v.useModelValues)(e.contact, ["id"]),
                    fe = (0, m.default)((function() {
                        return new R.default
                    })),
                    pe = function() {
                        var e = j.CatalogCollection.get(t);
                        return !e || e.stale ? null : e
                    },
                    he = (0, f.useMemo)((function() {
                        return b.CartCollection.findCart(ce.id.toString())
                    }), [ce.id]),
                    me = (0, f.useState)(!1),
                    ge = (0, o.default)(me, 2),
                    ve = ge[0],
                    _e = ge[1],
                    Ce = (0, f.useState)(0),
                    xe = (0, o.default)(Ce, 2),
                    Se = xe[0],
                    be = xe[1],
                    ye = (0, f.useState)(!1),
                    ke = (0, o.default)(ye, 2),
                    je = ke[0],
                    Te = ke[1],
                    Pe = (0, f.useState)(!1),
                    Ee = (0, o.default)(Pe, 2),
                    Ie = Ee[0],
                    we = Ee[1],
                    Oe = (0, f.useState)(pe),
                    Ae = (0, o.default)(Oe, 2),
                    Le = Ae[0],
                    Me = Ae[1],
                    Ne = (0, f.useState)((function() {
                        return he.itemCount
                    })),
                    Re = (0, o.default)(Ne, 2),
                    De = Re[0],
                    Be = Re[1],
                    Ve = (0, f.useState)((function() {
                        return pe() ? "SUCCESS" : "NONE"
                    })),
                    Fe = (0, o.default)(Ve, 2),
                    We = Fe[0],
                    Ue = Fe[1];
                (0, g.useListener)(he, "all", (function() {
                    var e = he.itemCount;
                    De !== e && Be(e)
                }));
                var He = function() {
                        if (!je) {
                            var e = j.CatalogCollection.assertGet(t);
                            if (e.afterCursor) {
                                var n = e.productCollection.getProductModels().length;
                                _e(!0), be(n), j.CatalogCollection.update(t).then((function(e) {
                                    le.aborted || (_e(!1), (Array.isArray(e) ? e[0] : e).productCollection.getProductModels().length === Se && Te(!0), n * T.PRODUCT_LIST_ITEM_HEIGHT < window.innerHeight && He())
                                })).catch((function() {
                                    _e(!1), Te(!0)
                                }))
                            }
                        }
                    },
                    Ge = (0, p.default)((function() {
                        var t;
                        null === (t = e.onRemoveProduct) || void 0 === t || t.call(e), se()
                    }), 100),
                    ze = X ? null == Le ? void 0 : Le.productCollection : null;
                (0, g.useListener)(ze, "add", de), (0, g.useListener)(ze, "remove", Ge);
                (0, f.useEffect)((function() {
                    (0, W.logCatalogListView)({
                        catalogOwnerWid: t,
                        catalogContext: (0, G.getProductCatalogContext)(ue),
                        cartToggle: Ie
                    }), Le ? He() : j.CatalogCollection.find(t).then((function(e) {
                        Me(e), Ue("SUCCESS"), He()
                    })).catch((0, r.filteredCatch)(u.ServerStatusCodeError, (function(e) {
                        403 !== e.status && 404 !== e.status || (Me(null), Ue("NOT_FOUND"))
                    }))).catch((function(e) {
                        (0, M.parseErrorState)(e, (function(e) {
                            return Ue(e)
                        }))
                    })), (0, P.default)(t).then((function(e) {
                        we(e), (0, s.isMDBackend)() && n && Ie && !ie() && (0, x.getABPropConfigValue)("web_abprop_nux_cart_interstitial") && (0, k.default)()
                    }))
                }), []);
                var qe = (0, _.default)((function(e) {
                        ve || e.scrollTop + d.SCROLL_FUDGE > e.scrollHeight - e.clientHeight && He()
                    }), 100),
                    Ke = function() {
                        null == i || i(ce.id.toString())
                    },
                    Qe = function() {
                        Le && (y(Le, ce), (0, W.logCatalogShareLinkClick)({
                            catalogOwnerWid: t,
                            catalogContext: (0, G.getProductCatalogContext)(ue)
                        }))
                    };
                return (0, Y.jsxs)(E.default, {
                    theme: "products",
                    onDrop: e.onBack,
                    children: [(0, Y.jsx)(O.DrawerHeader, {
                        title: c.fbt._("Catalog", null, {
                            hk: "3YVOSV"
                        }),
                        type: e.headerType || O.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onBack,
                        menu: (Je = n && (0, B.canToggleCartOnOff)() ? (0, Y.jsx)(H.MenuBarItem, {
                            a8nText: "menu-bar-menu",
                            icon: (0, Y.jsx)(Q.default, {
                                name: "menu"
                            }),
                            title: V.default.t(604),
                            children: (0, Y.jsxs)(A.Dropdown, {
                                type: "dropdown_menu",
                                flipOnRTL: !0,
                                dirX: A.DirX.LEFT,
                                children: [(0, Y.jsx)(L.DropdownItem, {
                                    a8n: "mi-foward menu-item",
                                    action: Qe,
                                    children: V.default.t(465)
                                }), oe && (0, Y.jsx)(L.DropdownItem, {
                                    a8n: "mi-settings menu-item",
                                    action: oe,
                                    children: c.fbt._("Settings", null, {
                                        hk: "2RmHUB"
                                    })
                                })]
                            }, "CatalogDetailHeader")
                        }) : (0, Y.jsx)(H.MenuBarItem, {
                            a8nText: "menu-bar-catalog-link",
                            icon: (0, Y.jsx)(F.default, {
                                theme: ae === O.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
                            }),
                            title: c.fbt._("Catalog link", null, {
                                hk: "M36Dw"
                            }),
                            onClick: Qe
                        }), (0, Y.jsxs)(Y.Fragment, {
                            children: [Ie && i ? (0, Y.jsx)($, {
                                cartCount: De,
                                headerType: ae,
                                onClick: function() {
                                    (0, U.getOnCartClickWithLog)(Ke, t.toString(), (0, G.getProductCatalogContext)(ue))
                                }
                            }) : null, Je]
                        })),
                        focusBackOrCancel: !0
                    }), (0, Y.jsx)(I.default, {
                        onScroll: function(e) {
                            var t, n;
                            e.currentTarget && qe(e.currentTarget), null == a || a(null !== (t = null === (n = e.currentTarget) || void 0 === n ? void 0 : n.scrollTop) && void 0 !== t ? t : 0)
                        },
                        flatListControllers: [fe.current],
                        scrollOffset: e.scrollOffset,
                        children: ($e = Ie && i ? Ke : void 0, Le ? (n && ee && (Ye = (0, Y.jsx)(S.default, {
                            onClick: function() {
                                return ee()
                            },
                            theme: "in-list"
                        })), (0, Y.jsxs)(Y.Fragment, {
                            children: [Z && (0, Y.jsx)("div", {
                                "data-a8n": l.default.key("catalog-header"),
                                className: q.default.header,
                                children: (0, Y.jsx)(K.default, {
                                    profilePicThumb: ce.getProfilePicThumb(),
                                    contact: ce,
                                    businessProfile: Z
                                })
                            }), (0, Y.jsxs)("div", {
                                "data-a8n": l.default.key("catalog-items"),
                                className: q.default.list,
                                children: [Ye, (0, Y.jsx)(z.default, {
                                    onCartOpen: $e,
                                    onProductDetail: te,
                                    flatListController: fe.current,
                                    catalog: Le,
                                    canManageCatalog: n,
                                    shareLinks: n,
                                    onProductShare: ne
                                }), ve && (0, Y.jsx)(D.default, {})]
                            })]
                        })) : (0, Y.jsx)(N.default, {
                            fetchState: We
                        }))
                    })]
                });
                var Ye, $e;
                var Je
            };
            var o = a(n(63038)),
                r = n(15586),
                i = n(43393),
                l = a(n(84646)),
                u = n(73435),
                s = n(78577),
                d = n(80965),
                c = n(48360),
                f = n(67294),
                p = a(n(1323)),
                h = a(n(45764)),
                m = a(n(62905)),
                g = n(91285),
                v = n(50857),
                _ = a(n(75967)),
                C = a(n(22190)),
                x = n(18297),
                S = a(n(66863)),
                b = n(2133),
                y = a(n(18496)),
                k = a(n(72758)),
                j = n(72743),
                T = n(66419),
                P = a(n(38345)),
                E = a(n(53187)),
                I = a(n(18345)),
                w = n(96706),
                O = n(19288),
                A = n(98169),
                L = n(94680),
                M = n(23519),
                N = a(n(22426)),
                R = a(n(92546)),
                D = a(n(5029)),
                B = n(2629),
                V = a(n(9844)),
                F = a(n(18719)),
                W = n(56264),
                U = n(71072),
                H = n(91823),
                G = n(52867),
                z = a(n(22593)),
                q = a(n(47498)),
                K = a(n(99602)),
                Q = a(n(7665)),
                Y = n(85893);

            function $(e) {
                var t = e.headerType,
                    n = e.onClick,
                    a = e.cartCount,
                    o = (0, i.isNumber)(a) && a > 0 ? a.toString() : void 0;
                return (0, Y.jsx)(H.MenuBarItem, {
                    a8nText: "menu-bar-cart-link",
                    icon: (0, Y.jsx)(y.default, {
                        theme: t === O.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
                    }),
                    text: o,
                    title: c.fbt._("Your cart", null, {
                        hk: "Sn66V"
                    }),
                    onClick: n
                })
            }
        },
        99602: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.profilePicThumb,
                    n = e.contact,
                    a = e.businessProfile;
                return (0, d.jsxs)("div", {
                    className: u.default.header,
                    "data-testid": "product-list-header",
                    children: [(0, d.jsx)(f, {
                        profilePicThumb: t,
                        contact: n
                    }), (0, d.jsxs)("div", {
                        className: u.default.text,
                        children: [(0, d.jsx)(s.TextDiv, {
                            className: u.default.name,
                            theme: "large",
                            children: (0, d.jsx)(l.Name, {
                                contact: n,
                                selectable: !0,
                                useVerifiedName: !0
                            })
                        }), (0, d.jsx)(c, {
                            businessProfile: a
                        })]
                    })]
                })
            };
            var o = n(50857),
                r = n(66834),
                i = n(73008),
                l = n(1191),
                u = a(n(42417)),
                s = n(22552),
                d = n(85893);

            function c(e) {
                var t = (0, o.useOptionalModelValues)(e.businessProfile, ["description"]);
                return t && t.description ? (0, d.jsx)("div", {
                    className: u.default.description,
                    children: (0, d.jsx)(i.EmojiText, {
                        text: t.description,
                        direction: "auto",
                        selectable: !0,
                        titlify: !0
                    })
                }) : null
            }

            function f(e) {
                var t = (0, o.useOptionalModelValues)(e.profilePicThumb, ["imgFull"]),
                    n = (0, o.useModelValues)(e.contact, ["id", "isMe"]);
                if (!t) return null;
                var a = (0, r.getDefaultIcon)(n.id);
                return (0, d.jsx)("div", {
                    className: u.default.photo,
                    children: (0, d.jsx)(r.DetailImageCommon, {
                        profilePicThumb: t,
                        loader: !0,
                        defaultIcon: a,
                        profilePicThumbImg: t.imgFull,
                        spinnerClassName: u.default.spinner,
                        imgClassName: u.default.img,
                        theme: "business"
                    })
                })
            }
        },
        46989: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                o = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onBack,
                    n = (0, p.useModelValues)(e.product, ["id", "catalogWid"]),
                    o = (0, c.useState)({}),
                    k = (0, u.default)(o, 2),
                    j = k[0],
                    T = k[1],
                    P = (0, c.useState)(""),
                    E = (0, u.default)(P, 2),
                    I = E[0],
                    w = E[1],
                    O = (0, c.useState)(""),
                    A = (0, u.default)(O, 2),
                    L = A[0],
                    M = A[1],
                    N = (0, c.useState)(!0),
                    R = (0, u.default)(N, 2),
                    D = R[0],
                    B = R[1],
                    V = function(e) {
                        var t, n;
                        return (null === (t = e.complianceInfo) || void 0 === t ? void 0 : t.countryCodeOrigin) === String(v.SyntheticCountryCode.NotApplicable) ? a.resolve((0, b.jsxs)("div", {
                            children: [(0, b.jsx)("div", {
                                className: (0, f.default)(y),
                                children: d.fbt._("Not Applicable", null, {
                                    hk: "2k1klN"
                                })
                            }), (0, b.jsx)("div", {
                                children: d.fbt._("Item is a service or non-physical good", null, {
                                    hk: "3uDBY7"
                                })
                            })]
                        })) : (0, v.getCountryName)(null === (n = e.complianceInfo) || void 0 === n ? void 0 : n.countryCodeOrigin)
                    };
                (0, c.useEffect)((function() {
                    function e() {
                        return (e = (0, l.default)(i.default.mark((function e() {
                            var t, a, o, r, l, u, d, c, f, p, m, g, _, C, x, b, y, k, j;
                            return i.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, h.CatalogCollection.findProduct({
                                            catalogWid: n.catalogWid,
                                            productId: n.id.toString(),
                                            productMsgMediaData: (0, S.unproxy)(n).productMsgMediaData,
                                            shouldFetchComplianceFields: !0
                                        });
                                    case 2:
                                        if (t = h.CatalogCollection.get(n.catalogWid), !(a = (0, s.default)(t, "catalog").productCollection.get(n.id))) {
                                            e.next = 18;
                                            break
                                        }
                                        return e.next = 7, V(a);
                                    case 7:
                                        return y = e.sent, e.next = 10, (0, v.getCountryName)(null === (o = a.complianceInfo) || void 0 === o || null === (r = o.importerAddress) || void 0 === r ? void 0 : r.countryCode);
                                    case 10:
                                        k = e.sent, j = {
                                            importerName: (null === (l = a.complianceInfo) || void 0 === l ? void 0 : l.importerName) || "",
                                            countryCodeOrigin: (null === (u = a.complianceInfo) || void 0 === u ? void 0 : u.countryCodeOrigin) || "",
                                            importerAddress: {
                                                street1: (null === (d = a.complianceInfo) || void 0 === d || null === (c = d.importerAddress) || void 0 === c ? void 0 : c.street1) || "",
                                                street2: (null === (f = a.complianceInfo) || void 0 === f || null === (p = f.importerAddress) || void 0 === p ? void 0 : p.street2) || "",
                                                city: (null === (m = a.complianceInfo) || void 0 === m || null === (g = m.importerAddress) || void 0 === g ? void 0 : g.city) || "",
                                                region: (null === (_ = a.complianceInfo) || void 0 === _ || null === (C = _.importerAddress) || void 0 === C ? void 0 : C.region) || "",
                                                postalCode: (null === (x = a.complianceInfo) || void 0 === x || null === (b = x.importerAddress) || void 0 === b ? void 0 : b.postalCode) || ""
                                            }
                                        }, T(j), B(!1), w(y), M(k), e.next = 19;
                                        break;
                                    case 18:
                                        __LOG__(3)`Unable to fetch compliance for product: ${n.id}`;
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }! function() {
                        e.apply(this, arguments)
                    }()
                }), []);
                var F = function() {
                        if (t) return t()
                    },
                    W = j.countryCodeOrigin,
                    U = j.importerName,
                    H = j.importerAddress;
                return (0, b.jsxs)(_.default, {
                    onDrop: F,
                    theme: "striped",
                    children: [(0, b.jsx)(x.DrawerHeader, {
                        a8n: "drawer-title-profile",
                        title: d.fbt._("More information", null, {
                            hk: "2JHvi1"
                        }),
                        onBack: F,
                        type: x.DRAWER_HEADER_TYPE.SMALL
                    }), (0, b.jsx)(C.default, {
                        theme: D ? "center-content" : void 0,
                        children: D ? (0, b.jsx)(g.ComplianceInfoLoading, {}) : (0, b.jsxs)(g.ComplianceInfoGroup, {
                            children: [(0, b.jsx)(g.ComplianceInfoPrimitiveField, {
                                value: I,
                                label: d.fbt._("Country of Origin", null, {
                                    hk: "2yl0F7"
                                })
                            }), W && ![m.COMPLIANCE_INFO_CODES.INDIA, v.SyntheticCountryCode.NotApplicable].includes(W) ? (0, b.jsxs)(b.Fragment, {
                                children: [(0, b.jsx)(g.ComplianceInfoPrimitiveField, {
                                    value: U,
                                    label: d.fbt._("Name of Importer", null, {
                                        hk: "3gfW35"
                                    })
                                }), (0, b.jsx)(g.ComplianceInfoStructuralField, {
                                    valuesMap: (0, r.default)({
                                        importerAddressCountryNameOrigin: L
                                    }, H),
                                    keys: ["street1", "street2", "city", "region", "postalCode", "importerAddressCountryNameOrigin"],
                                    label: d.fbt._("Address of Importer", null, {
                                        hk: "Kxo8I"
                                    })
                                })]
                            }) : null]
                        })
                    })]
                }, "product-details-drawer")
            };
            var r = o(n(81109)),
                i = o(n(87757)),
                l = o(n(48926)),
                u = o(n(63038)),
                s = o(n(272)),
                d = n(48360),
                c = n(67294),
                f = o(n(56720)),
                p = n(50857),
                h = n(72743),
                m = n(48953),
                g = n(65971),
                v = n(60543),
                _ = o(n(53187)),
                C = o(n(18345)),
                x = n(19288),
                S = n(68220),
                b = n(85893),
                y = {
                    marginBottom: "ngycyvoj"
                }
        },
        41756: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.isAvailable,
                    n = e.fetching,
                    a = (0, o.useContext)(l.DrawerContext),
                    h = (0, r.useModelValues)(e.product, ["productImageCollection", "productMsgMediaData", "catalogWid", "imageCdnUrl"]),
                    m = h.lazyloadProductImageCollection().toArray();
                return (0, p.jsx)("div", {
                    className: c.default.imageCarouselContainer,
                    children: (0, p.jsx)(u.default, {
                        images: m,
                        fetching: n,
                        onClick: t ? function(e, t) {
                            (0, s.logDetailImageClick)({
                                product: (0, f.unproxy)(h),
                                catalogContext: (0, d.getProductCatalogContext)(a)
                            });
                            var n = {
                                activeProductImage: t,
                                productImageCollection: h.lazyloadProductImageCollection(),
                                getZoomNode: function() {
                                    return e
                                },
                                product: h
                            };
                            i.Cmd.productImageViewerModal(n, (0, d.getProductCatalogSessionId)(a))
                        } : null,
                        renderFallback: !t,
                        fallbackMediaData: h.productMsgMediaData
                    })
                })
            };
            var o = n(67294),
                r = n(50857),
                i = n(65901),
                l = n(96706),
                u = a(n(8001)),
                s = n(56264),
                d = n(52867),
                c = a(n(71962)),
                f = n(68220),
                p = n(85893)
        },
        91221: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onPopupCancel,
                    n = e.onReport,
                    a = e.onTellUsMore,
                    d = o.fbt._("Report this product?", null, {
                        hk: "3IDG0p"
                    }),
                    c = (0, s.jsx)("div", {
                        children: o.fbt._("We will review the product and if it does not meet our guidelines, it will be removed.", null, {
                            hk: "2CRdfl"
                        })
                    }, "ReportProductChoicePopup-desc"),
                    f = (0, s.jsx)(r.default, {
                        a8nText: "popup-controls-more",
                        type: "secondary",
                        onClick: a,
                        children: o.fbt._("Tell Us More", null, {
                            hk: "2CkelY"
                        })
                    }, "ReportProductChoicePopup-moreBtn"),
                    p = (0, s.jsx)(r.default, {
                        a8nText: "popup-controls-report",
                        type: "secondary",
                        onClick: function() {
                            return n()
                        },
                        children: o.fbt._("Report Product", null, {
                            hk: "3XLjyb"
                        })
                    }, "ReportProductChoicePopup-reportBtn"),
                    h = (0, s.jsx)(r.default, {
                        type: "secondary",
                        onClick: t,
                        children: o.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        })
                    }, 0),
                    m = (0, s.jsxs)("div", {
                        className: u.default.buttons,
                        children: [(0, s.jsx)("div", {
                            className: u.default.button,
                            children: f
                        }), (0, s.jsx)("div", {
                            className: u.default.button,
                            children: p
                        }), (0, s.jsx)("div", {
                            className: u.default.button,
                            children: h
                        })]
                    });
                return (0, s.jsx)(i.HotKeys, {
                    handlers: {
                        escape: t
                    },
                    children: (0, s.jsx)(l.Modal, {
                        title: d,
                        actions: m,
                        children: c
                    })
                })
            };
            var o = n(48360),
                r = a(n(51599)),
                i = n(32012),
                l = n(73454),
                u = a(n(73567)),
                s = n(85893)
        },
        81926: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n(34575)),
                r = a(n(93913)),
                i = a(n(2205)),
                l = a(n(99842)),
                u = n(48360),
                s = n(24224),
                d = n(65901),
                c = a(n(50177)),
                f = n(56264),
                p = n(36949),
                h = n(3298),
                m = n(4099),
                g = a(n(91221)),
                v = a(n(78366)),
                _ = n(68220),
                C = n(85893),
                x = function(e) {
                    (0, i.default)(n, e);
                    var t = (0, l.default)(n);

                    function n() {
                        var e;
                        (0, o.default)(this, n);
                        for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r)))._submitReason = function(t) {
                            var n = e.props,
                                a = n.product,
                                o = n.sessionId;
                            return (0, f.logReportProduct)({
                                product: (0, _.unproxy)(a),
                                catalogSessionId: o
                            }), (0, p.reportProduct)(a.catalogWid, a.id.toString(), t)
                        }, e._handleDelete = function() {
                            e.end()
                        }, e._handleReport = function(t) {
                            h.QPL.markerStart(m.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT), e._handleShowSubmittedToast(t)
                        }, e._handleTellUsMore = function() {
                            e.push((0, C.jsx)(v.default, {
                                onTellUsMoreSubmit: e._handleReport,
                                onCancel: e._handleCancel
                            }), "none")
                        }, e._handlePopupCancel = function() {
                            e.end()
                        }, e._handleCancel = function() {
                            e.end()
                        }, e._handleReportSubmitted = function() {
                            e.end()
                        }, e._handleShowSubmittedToast = function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, s.genId)(),
                                a = e.props,
                                o = a.product,
                                r = a.sessionId,
                                i = e._submitReason(t),
                                l = new s.ActionType(u.fbt._("Reporting product", null, {
                                    hk: "4qusYv"
                                })),
                                c = i.then((function() {
                                    return (0, f.logReportProductSuccess)({
                                        product: (0, _.unproxy)(o),
                                        catalogSessionId: r
                                    }), h.QPL.markerEnd(m.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT, h.QuickLogActionType.SUCCESS), new s.ActionType(u.fbt._("Thanks for your feedback", null, {
                                        hk: "1vRsPv"
                                    }).toString() + ". " + u.fbt._("Your report has now been submitted.", null, {
                                        hk: "40tL3T"
                                    }).toString())
                                })).catch((function() {
                                    return (0, f.logReportProductFailure)({
                                        product: (0, _.unproxy)(o),
                                        catalogSessionId: r
                                    }), h.QPL.markerEnd(m.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT, h.QuickLogActionType.FAIL), __LOG__(3)`error submitting product report`, new s.ActionType(u.fbt._("Couldn't report product", null, {
                                        hk: "11JN2U"
                                    }), {
                                        actionText: u.fbt._("Retry", null, {
                                            hk: "2jS9Tg"
                                        }),
                                        actionHandler: function() {
                                            return e._handleShowSubmittedToast(t, n)
                                        }
                                    })
                                }));
                            return d.Cmd.openToast((0, C.jsx)(s.ActionToast, {
                                id: n,
                                initialAction: l,
                                pendingAction: c
                            })), e._handleReportSubmitted(), i
                        }, e
                    }
                    return (0, r.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, C.jsx)(g.default, {
                                onTellUsMore: this._handleTellUsMore,
                                onReport: this._handleReport,
                                onPopupCancel: this._handlePopupCancel,
                                onCancel: this._handleCancel
                            }))
                        }
                    }]), n
                }(c.default);
            t.default = x
        },
        78366: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onCancel,
                    n = e.onTellUsMoreSubmit,
                    a = (0, l.useState)(null),
                    v = (0, o.default)(a, 2),
                    _ = v[0],
                    C = v[1],
                    x = function() {
                        t && t()
                    },
                    S = function(e) {
                        e.target.value && C(e.target.value)
                    },
                    b = i.fbt._("Tell us more", null, {
                        hk: "2fZHoO"
                    }),
                    y = (0, h.jsx)("div", {
                        className: (0, r.default)(f.default.section),
                        children: (0, h.jsx)("ul", {
                            className: f.default.reasonList,
                            children: m.map((function(e) {
                                return (0, h.jsx)(g, {
                                    reason: e,
                                    isChecked: _ === e,
                                    onChange: S
                                }, `ReportProductReasonPopup-${e}-option`)
                            }))
                        })
                    }),
                    k = (0, h.jsx)(u.default, {
                        a8nText: "popup-controls-submit",
                        type: "primary",
                        onClick: function() {
                            _ ? n(_) : s.Cmd.openToast((0, h.jsx)(p.Toast, {
                                msg: i.fbt._("Please select a reason.", null, {
                                    hk: "3UgUaa"
                                }),
                                id: (0, p.genId)()
                            }))
                        },
                        disabled: !_,
                        children: i.fbt._("Submit", null, {
                            hk: "3npRPm"
                        })
                    }, "ReportProductReasonPopup-submitButton"),
                    j = (0, h.jsx)(u.default, {
                        type: "secondary",
                        a8nText: "popup-controls-cancel",
                        onClick: x,
                        children: i.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        })
                    }, "ReportProductReasonPopup-cancelButton"),
                    T = (0, h.jsxs)("div", {
                        className: f.default.buttons,
                        children: [j, k]
                    });
                return (0, h.jsx)(d.HotKeys, {
                    handlers: {
                        escape: x
                    },
                    children: (0, h.jsx)(c.Modal, {
                        title: b,
                        actions: T,
                        children: y
                    })
                })
            };
            var o = a(n(63038)),
                r = a(n(94184)),
                i = n(48360),
                l = n(67294),
                u = a(n(51599)),
                s = n(65901),
                d = n(32012),
                c = n(73454),
                f = a(n(62108)),
                p = n(92428),
                h = n(85893),
                m = ["NO_MATCH", "SPAM", "ILLEGAL", "SCAM", "KNOCKOFF", "OTHER"];

            function g(e) {
                var t = e.reason,
                    n = e.isChecked,
                    a = e.onChange;
                return (0, h.jsx)("li", {
                    children: (0, h.jsxs)("label", {
                        className: f.default.label,
                        children: [(0, h.jsx)("input", {
                            type: "radio",
                            name: t,
                            value: t,
                            onChange: a,
                            className: f.default.input,
                            checked: n
                        }), (0, h.jsx)(v, {
                            reason: t
                        })]
                    })
                })
            }

            function v(e) {
                var t = e.reason;
                switch (t) {
                    case "NO_MATCH":
                        return i.fbt._("The pictures or descriptions don't match the item", null, {
                            hk: "2ifaot"
                        });
                    case "SPAM":
                        return i.fbt._("This is spam", null, {
                            hk: "hjxQJ"
                        });
                    case "ILLEGAL":
                        return i.fbt._("This is abusive, harmful or illegal", null, {
                            hk: "3xz9jr"
                        });
                    case "SCAM":
                        return i.fbt._("This is fraud or a scam", null, {
                            hk: "2iFRd8"
                        });
                    case "KNOCKOFF":
                        return i.fbt._("This appears to be a knockoff or counterfeit item", null, {
                            hk: "UiFcs"
                        });
                    case "OTHER":
                        return i.fbt._("Other", null, {
                            hk: "1Kn4LY"
                        });
                    default:
                        throw new Error(`Invalid reason: ${t}`)
                }
            }
        },
        60401: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.isEditMode,
                    n = e.catalog,
                    a = e.subtitle,
                    h = e.hideIncompleteRows,
                    m = e.productsToShow,
                    g = e.businessProfile,
                    v = (0, p.jsx)(f.default, {
                        onViewShopClick: function() {
                            (0, d.logShopsManagementEvent)(c.default.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_VIEW_SHOPS_FROM_EDIT_BIZ_PROFILE)
                        },
                        onCommerceManagerClick: function() {
                            (0, d.logShopsManagementEvent)(c.default.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_COMMERCE_MANAGER_FROM_EDIT_BIZ_PROFILE)
                        },
                        onCancelClick: function() {
                            (0, d.logShopsManagementEvent)(c.default.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_CANCEL_FROM_EDIT_BIZ_PROFILE)
                        }
                    });
                return (0, p.jsx)(l.default, {
                    onProductDetail: function(e) {
                        if (t) u.Cmd.openModal(v), (0, d.logShopsManagementEvent)(c.default.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_SHOPS_PRODUCT_PREVIEW_TILE, {
                            shouldLogJid: !1
                        });
                        else {
                            var n = new URL((0, o.default)(e.url, "product.url"), `https://${s.HOSTNAME.FACEBOOK}`);
                            r.default.open(String(n))
                        }
                    },
                    onProductCatalog: function() {
                        t ? (u.Cmd.openModal(v), (0, d.logShopsManagementEvent)(c.default.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_MANAGE_SHOPS)) : (0, i.goToShop)(g)
                    },
                    catalog: n,
                    subtitle: a,
                    hideIncompleteRows: h,
                    productsToShow: m,
                    showShopsLogo: !0
                })
            };
            var o = a(n(272)),
                r = a(n(62907)),
                i = n(79614),
                l = a(n(69286)),
                u = n(65901),
                s = n(98585),
                d = n(40795),
                c = a(n(50507)),
                f = a(n(9675)),
                p = n(85893)
        },
        50329: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = (0, r.useModelValues)(e.msgInfoParticipant, ["t"]),
                    a = (0, r.useModelValues)(e.contact, ["id", "name", "formattedName", "notifyName"]),
                    c = (0, d.jsx)(l.DetailImage, {
                        id: a.id
                    }),
                    f = o.Clock.relativeDateAndTimeStr(n.t),
                    p = (0, d.jsx)("span", {
                        title: f,
                        children: f
                    });
                !a.name && a.notifyName && (t = (0, d.jsx)(u.EmojiText, {
                    className: s.default.notifyName,
                    direction: "auto",
                    text: a.notifyName
                }));
                return (0, d.jsx)(i.default, {
                    contextEnabled: function() {
                        return !1
                    },
                    image: c,
                    primary: (0, d.jsx)(u.EmojiText, {
                        direction: "auto",
                        text: a.formattedName,
                        titlify: !0,
                        ellipsify: !0
                    }),
                    secondary: p,
                    secondaryDetail: t,
                    style: {
                        cursor: "auto"
                    },
                    theme: e.theme,
                    idle: !0
                })
            };
            var o = n(73466),
                r = n(50857),
                i = a(n(27237)),
                l = n(66834),
                u = n(73008),
                s = a(n(70881)),
                d = n(85893)
        },
        65971: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleGrievanceOfficerDetailsError = t.handleCustomerCareDetailsError = t.getLegalEntityDetails = t.ComplianceInfoStructuralField = t.ComplianceInfoPrimitiveField = t.ComplianceInfoLoading = t.ComplianceInfoHelpCenterBanner = t.ComplianceInfoGroup = void 0;
            var o = a(n(87757)),
                r = a(n(48926)),
                i = n(71091),
                l = n(48360),
                u = a(n(56720)),
                s = a(n(73624)),
                d = n(26141),
                c = n(55869),
                f = a(n(81218)),
                p = a(n(46821)),
                h = n(49012),
                m = n(27968),
                g = a(n(69520)),
                v = a(n(9844)),
                _ = n(85651),
                C = n(22552),
                x = n(85893),
                S = {
                    fieldLabel: {
                        display: "f804f6gw",
                        lineHeight: "gz7w46tb"
                    },
                    fieldValue: {
                        display: "f804f6gw",
                        wordBreak: "cw3vfol9",
                        whiteSpace: "c2jc77nu"
                    },
                    helpCenterBanner: {
                        fontSize: "f8jlpxt4",
                        lineHeight: "jgi8eev7"
                    },
                    displayRight: {
                        textAlign: "cb8ormfa"
                    }
                },
                b = function() {
                    return l.fbt._("Not Provided", null, {
                        hk: "43OpXI"
                    })
                };
            t.ComplianceInfoGroup = function(e) {
                var t = e.title,
                    n = e.children;
                return (0, x.jsx)(p.default, {
                    title: t,
                    xstyle: i.uiPadding.vert8,
                    children: n
                })
            };
            t.ComplianceInfoPrimitiveField = function(e) {
                var t = e.value,
                    n = e.label,
                    a = e.forceLTR;
                return (0, x.jsxs)(y, {
                    children: [(0, x.jsx)(P, {
                        value: t,
                        forceLTR: a
                    }), (0, x.jsx)(T, {
                        label: n
                    })]
                })
            };
            t.ComplianceInfoStructuralField = function(e) {
                var t = e.valuesMap,
                    n = void 0 === t ? {} : t,
                    a = e.keys,
                    o = void 0 === a ? [] : a,
                    r = e.label,
                    i = o.reduce((function(e, t) {
                        return n[t] ? e.concat(n[t]) : e
                    }), []),
                    l = i.length ? i.join(", ") : b();
                return (0, x.jsxs)(y, {
                    children: [(0, x.jsx)(P, {
                        value: l
                    }), (0, x.jsx)(T, {
                        label: r
                    })]
                })
            };
            var y = function(e) {
                var t = e.children;
                return (0, x.jsx)(f.default, {
                    multiline: !0,
                    restrictSpacing: !0,
                    children: (0, x.jsx)("div", {
                        className: (0, u.default)(i.uiPadding.vert8),
                        children: t
                    })
                })
            };
            t.ComplianceInfoLoading = function() {
                return (0, x.jsx)(m.FlexRow, {
                    align: "center",
                    justify: "center",
                    a8nText: "compliance-info-loading",
                    children: (0, x.jsx)(g.default, {
                        children: (0, x.jsx)(_.Spinner, {})
                    })
                })
            };
            t.ComplianceInfoHelpCenterBanner = function(e) {
                var t = e.xstyle;
                return (0, x.jsxs)("div", {
                    className: (0, u.default)(S.helpCenterBanner, t),
                    "data-testid": "compliance-help-center-banner",
                    children: [l.fbt._("Indian law requires additional information from businesses selling online.", null, {
                        hk: "1zuHU2"
                    }), " ", (0, x.jsx)(h.ExternalLink, {
                        href: "https://faq.whatsapp.com/general/account-and-profile/how-to-comply-with-the-laws-for-selling-online-in-India",
                        children: l.fbt._("Learn more", null, {
                            hk: "1JNnQ1"
                        })
                    })]
                })
            };
            var k = function(e) {
                    return (Array.isArray(e) ? e[0] : e).serialize()
                },
                j = function() {
                    var e = (0, r.default)(o.default.mark((function e(t) {
                        var n, a;
                        return o.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, d.BusinessProfileCollection.update(t, {
                                        getMerchantCompliance: !0
                                    });
                                case 2:
                                    if (n = e.sent, !(a = k(n))) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", a.legalEntityDetails || void 0);
                                case 6:
                                    __LOG__(3)`compliance: cannot fetch business details (${t.toString()})`;
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
            t.getLegalEntityDetails = j;
            var T = function(e) {
                    var t = e.label;
                    return (0, x.jsx)("div", {
                        className: (0, u.default)(S.fieldLabel),
                        "data-testid": "compliance-info-field-label",
                        children: (0, x.jsx)(C.TextSpan, {
                            theme: "muted",
                            children: t
                        })
                    })
                },
                P = function(e) {
                    var t = e.value,
                        n = e.forceLTR,
                        a = void 0 !== n && n,
                        o = v.default.isRTL();
                    return (0, x.jsx)("div", {
                        className: (0, u.default)(S.fieldValue, i.uiMargin.vert3, o && a && S.displayRight),
                        dir: a || !o ? "ltr" : "rtl",
                        "data-testid": "compliance-info-field-value",
                        children: t || b()
                    })
                };
            t.handleCustomerCareDetailsError = function(e, t, n, a) {
                (0, c.existsCustomerCareDetailsContact)(e, t, n, a) || (0, s.default)(l.fbt._("At least one phone number is required. Please provide another phone number before removing this.", null, {
                    hk: "2LGoJd"
                }))
            };
            t.handleGrievanceOfficerDetailsError = function(e, t, n, a) {
                (0, c.existsGrievanceOfficerDetailsContact)(e, t, n, a) || (0, s.default)(l.fbt._("At least one contact method is required. Please provide another contact method first before removing this.", null, {
                    hk: "NXBiy"
                }))
            }
        },
        51723: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                e.pause(), e.src = "", e.remove()
            }
        },
        81218: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = null != e.side ? (0, d.jsx)("div", {
                        className: (0, u.default)(c.side),
                        children: e.side
                    }) : null,
                    f = null === (t = e.separator) || void 0 === t || t,
                    p = (0, l.default)((0, u.default)(c.container, e.xstyle), e.className, (0, o.default)({}, s.default.separator, f)),
                    h = null !== (n = e.testid) && void 0 !== n ? n : f ? "container_with_separator" : "container";
                return (0, d.jsx)("div", {
                    "data-a8n": r.default.key(e.a8nText),
                    className: p,
                    role: e.onClick ? "button" : null,
                    "data-testid": h,
                    onClick: e.onClick,
                    children: (0, d.jsxs)("div", {
                        className: (0, l.default)(s.default.block, (0, u.default)(c.block, e.blockXstyle, e.multiline && c.blockMultiline)),
                        children: [(0, d.jsx)("div", {
                            className: (0, l.default)((0, u.default)(c.main, e.multiline && c.mainMultiline, e.restrictSpacing && c.mainRestrictSpacing, i.isOSMac && c.mainMac)),
                            children: e.children
                        }), a]
                    })
                })
            };
            var o = a(n(59713)),
                r = a(n(84646)),
                i = n(69490),
                l = a(n(94184)),
                u = a(n(56720)),
                s = a(n(5190)),
                d = n(85893),
                c = {
                    container: {
                        paddingStart: "e8k79tju"
                    },
                    block: {
                        display: "p357zi0d",
                        alignItems: "gndfcl4n",
                        height: "k45dudtp",
                        paddingEnd: "bcymb0na"
                    },
                    blockMultiline: {
                        height: "bvcnfjzh"
                    },
                    main: {
                        flexGrow: "ggj6brxn",
                        flexShrink: "m0h2a7mj",
                        flexBasis: "lb5m6g5c",
                        marginTop: "kv6wexeh",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        textOverflow: "lhj4utae",
                        whiteSpace: "le5p0ye3"
                    },
                    mainMultiline: {
                        paddingTop: "hc2u0oym",
                        paddingBottom: "myel2vfb",
                        whiteSpace: "hmy10g0s"
                    },
                    mainMac: {
                        marginTop: "tt8xd2xn"
                    },
                    mainRestrictSpacing: {
                        paddingTop: "i5tg98hk",
                        paddingBottom: "przvwfww",
                        whiteSpace: "le5p0ye3"
                    },
                    side: {
                        flexGrow: "tvf2evcx",
                        flexShrink: "oq44ahr5",
                        flexBasis: "lb5m6g5c",
                        marginStart: "jwvfxh5v"
                    }
                }
        },
        55643: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                o = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = o(n(81109)),
                i = o(n(34575)),
                l = o(n(93913)),
                u = n(28568),
                s = n(91372),
                d = {};
            d[u.Message$ExtendedTextMessageFontType.SERIF] = {
                google: {
                    families: ["Roboto"]
                }
            }, d[u.Message$ExtendedTextMessageFontType.SANS_SERIF] = {
                google: {
                    families: ["Droid Serif"]
                }
            }, d[u.Message$ExtendedTextMessageFontType.NORICAN_REGULAR] = {
                google: {
                    families: ["Norican"]
                }
            }, d[u.Message$ExtendedTextMessageFontType.BRYNDAN_WRITE] = {
                custom: {
                    families: ["Bryndan-Write"]
                }
            }, d[u.Message$ExtendedTextMessageFontType.OSWALD_HEAVY] = {
                google: {
                    families: ["Oswald:bold"]
                }
            };
            var c = {};
            c[u.Message$ExtendedTextMessageFontType.BRYNDAN_WRITE] = `@font-face {font-family:"Bryndan-Write"; src:url("${s}") format("truetype");}`;
            var f = new(function() {
                function e() {
                    (0, i.default)(this, e), this.loadedFonts = {}, this.loadingPromise = {}
                }
                return (0, l.default)(e, [{
                    key: "load",
                    value: function(e) {
                        var t = this;
                        if (this.loadedFonts[e]) return a.resolve();
                        if (this.loadingPromise[e]) return this.loadingPromise[e];
                        var n = d[e],
                            o = c[e],
                            i = (o ? new a((function(e, t) {
                                var n = document.createElement("style");
                                n.appendChild(document.createTextNode(o)), n.onload = e, n.onerror = t, document.head && document.head.appendChild(n)
                            })) : a.resolve()).then((function() {
                                return new a((function(a, o) {
                                    var i = (0, r.default)((0, r.default)({}, n), {}, {
                                        active: function() {
                                            t.loadedFonts[e] = !0, a()
                                        },
                                        inactive: function() {
                                            t.loadingPromise[e] = void 0, o(new Error(`Failed to load font: ${e}`))
                                        }
                                    });
                                    WebFont.load(i)
                                }))
                            }));
                        return this.loadingPromise[e] = i, i
                    }
                }, {
                    key: "loadAllFonts",
                    value: function() {
                        var e = this;
                        return a.all(Array.from(u.Message$ExtendedTextMessageFontType.members()).map((function(t) {
                            return e.load(t)
                        })))
                    }
                }]), e
            }());
            t.default = f
        },
        8001: (e, t, n) => {
            "use strict";
            var a = n(6089).default,
                o = n(21314).default,
                r = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.images,
                    r = e.renderFallback,
                    p = e.fallbackMediaData,
                    b = e.fetching,
                    y = e.onClick,
                    k = (0, f.useRef)(null),
                    j = (0, f.useRef)(null),
                    T = (0, f.useRef)(null),
                    P = (0, f.useRef)(null),
                    E = (0, f.useRef)(null),
                    I = (0, f.useState)(null),
                    w = (0, l.default)(I, 2),
                    O = w[0],
                    A = w[1],
                    L = (0, f.useState)(n.filter((function(e) {
                        return e.mediaData.mediaStage === v.MEDIA_DATA_STAGE.RESOLVED
                    })).length),
                    M = (0, l.default)(L, 2),
                    N = M[0],
                    R = M[1],
                    D = (0, f.useState)(!1),
                    B = (0, l.default)(D, 2),
                    V = B[0],
                    F = B[1],
                    W = N === n.length,
                    U = function() {
                        return R((function(e) {
                            return e + 1
                        }))
                    };
                (0, f.useEffect)((function() {
                    var e = null;
                    if (!W && !r) {
                        var t, n, i = j.current;
                        if (!i) return;
                        null === (t = T.current) || void 0 === t || t.controller.abort();
                        var l = (e = new a).signal,
                            c = ((null === (n = T.current) || void 0 === n ? void 0 : n.promise) || o.resolve()).then((function() {
                                return (0, d.default)(i, {
                                    opacity: [1, 0]
                                }, {
                                    delay: 75,
                                    duration: 50
                                })
                            })),
                            f = (0, s.default)(c, l).then((function() {
                                if (l.aborted) throw new u.AbortError;
                                F(!0)
                            })).catch((0, u.catchAbort)((function() {
                                (0, d.default)(i, "stop", !0)
                            }))).finally((function() {
                                T.current = null
                            }));
                        T.current = {
                            promise: f,
                            controller: e
                        }
                    }
                    return function() {
                        var t;
                        null === (t = e) || void 0 === t || t.abort()
                    }
                }), [W, r]);
                var H, G, z, q = function() {
                    var e;
                    return (null === (e = k.current) || void 0 === e ? void 0 : e.children) ? k.current.scrollWidth === k.current.offsetWidth ? null : 0 === k.current.scrollLeft ? "next" : k.current.scrollWidth - 1 <= k.current.scrollLeft + k.current.offsetWidth ? "prev" : "both" : null
                };
                if ((0, f.useEffect)((function() {
                        A(q())
                    }), [W]), r && 0 === n.length) return (0, S.jsx)("div", {
                    className: m.default.carousel,
                    dir: "ltr",
                    children: (0, S.jsx)("div", {
                        className: (0, c.default)(m.default.contentContainer, m.default.slidesContainer),
                        children: p && (0, S.jsx)(g.default, {
                            altText: "",
                            mediaData: p,
                            renderFallback: !0,
                            singleSlide: !0
                        })
                    })
                });
                var K = function() {
                    P.current = null;
                    var e = q();
                    O !== e && A(e)
                };
                if (n.length > 1) {
                    var Q = function() {
                            var e = k.current;
                            if (null != e && ("prev" === O || "both" === O)) {
                                for (var t = 0, n = e.scrollLeft + Math.floor(e.offsetWidth / 2), a = e.lastElementChild; a instanceof HTMLElement && 0 === t;) {
                                    var o = a.offsetLeft + Math.floor(a.offsetWidth / 2);
                                    o < n && (t = o - n), a = a.previousElementSibling
                                }
                                0 !== t && e.scrollBy({
                                    left: t,
                                    behavior: "smooth"
                                })
                            }
                        },
                        Y = function() {
                            var e = k.current;
                            if (null != e && ("next" === O || "both" === O)) {
                                for (var t = 0, n = e.scrollLeft + Math.floor(e.offsetWidth / 2), a = e.firstElementChild; a instanceof HTMLElement && 0 === t;) {
                                    var o = a.offsetLeft + Math.floor(a.offsetWidth / 2);
                                    n < o && (t = o - n), a = a.nextElementSibling
                                }
                                0 !== t && e.scrollBy({
                                    left: t,
                                    behavior: "smooth"
                                })
                            }
                        },
                        $ = function() {
                            E.current = null;
                            var e = q();
                            O !== e && A(e)
                        };
                    z = function() {
                        null == E.current && (E.current = requestAnimationFrame($))
                    }, W && null != O && (H = (0, S.jsx)(h.ChevronButton, {
                        type: h.ButtonType.Prev,
                        onClick: Q,
                        onKeyDown: Q,
                        disabled: "prev" !== O && "both" !== O,
                        theme: C.RoundTheme.Small,
                        overMedia: !0
                    }), G = (0, S.jsx)(h.ChevronButton, {
                        type: h.ButtonType.Next,
                        onClick: Y,
                        onKeyDown: Y,
                        disabled: "next" !== O && "both" !== O,
                        theme: C.RoundTheme.Small,
                        overMedia: !0
                    }))
                }
                var J = 1 === n.length,
                    X = n.map((function(e, t) {
                        return (0, S.jsx)(g.default, {
                            altText: "",
                            image: e,
                            singleSlide: J,
                            mediaData: e.mediaData,
                            onClick: y,
                            onLoad: U
                        }, t)
                    })),
                    Z = W ? null : (0, S.jsx)("div", {
                        className: (0, c.default)(m.default.contentContainer, m.default.spinnerContainer),
                        children: (0, S.jsx)("div", {
                            className: m.default.spinner,
                            ref: j,
                            children: (0, S.jsx)(x.Spinner, {
                                color: "default",
                                size: 50,
                                stroke: 4
                            })
                        })
                    }),
                    ee = (0, c.default)(m.default.carousel, (t = {}, (0, i.default)(t, m.default.loaded, !b && W), (0, i.default)(t, m.default.fadeIn, V), t));
                return (0, S.jsxs)("div", {
                    className: ee,
                    dir: "ltr",
                    children: [Z, (0, S.jsx)("div", {
                        ref: k,
                        className: (0, c.default)(m.default.contentContainer, m.default.slidesContainer),
                        onScroll: z,
                        children: X
                    }), H, G, (0, S.jsx)(_.default, {
                        onResize: function() {
                            null == P.current && (P.current = requestAnimationFrame(K))
                        }
                    })]
                })
            };
            var i = r(n(59713)),
                l = r(n(63038)),
                u = n(396),
                s = r(n(15584)),
                d = r(n(69760)),
                c = r(n(94184)),
                f = n(67294),
                p = r(n(30523)),
                h = n(23145),
                m = r(n(59147)),
                g = r(n(82655)),
                v = n(41655),
                _ = r(n(55492)),
                C = n(80385),
                x = n(85651),
                S = n(85893);
            p.default.polyfill()
        },
        82655: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(67294),
                r = n(50857),
                i = a(n(31811)),
                l = n(41655),
                u = n(85893),
                s = function(e) {
                    var t = e.mediaData,
                        n = e.altText,
                        a = e.image,
                        s = e.singleSlide,
                        d = e.renderFallback,
                        c = e.onClick,
                        f = e.onLoad,
                        p = e.forwardRef,
                        h = (0, r.useModelValues)(t, ["fullHeight", "fullWidth", "mediaStage", "renderableUrl"]),
                        m = h.fullHeight,
                        g = h.fullWidth,
                        v = h.mediaStage,
                        _ = h.renderableUrl,
                        C = (0, o.useRef)(null),
                        x = (0, o.useRef)(v === l.MEDIA_DATA_STAGE.RESOLVED);
                    (0, o.useEffect)((function() {
                        !f || x.current || d || v !== l.MEDIA_DATA_STAGE.RESOLVED || (f(), x.current = !0)
                    }), [f, d, v]);
                    var S = !!s,
                        b = g && m ? g / m : .8;
                    b < .8 && (b = .8), b > 1.91 && (b = 1.91), b > 1 && !S && (b = 1);
                    var y = {
                            width: S && b < 1 ? 100 * b + "%" : 1 !== b || s ? null : "100%"
                        },
                        k = {
                            paddingTop: `${Math.floor(100/b)}%`
                        },
                        j = {
                            cursor: "" + (c ? "pointer" : "auto")
                        };
                    return (0, u.jsx)("div", {
                        ref: p ? function(e) {
                            return p(e)
                        } : null,
                        className: i.default.slide,
                        style: y,
                        children: (0, u.jsx)("div", {
                            className: i.default.slideInnerContainer,
                            style: k,
                            children: (0, u.jsx)("img", {
                                ref: C,
                                alt: n,
                                src: _,
                                className: i.default.image,
                                style: j,
                                draggable: "false",
                                onClick: function() {
                                    c && C.current && a && c(C.current, a)
                                }
                            })
                        })
                    })
                };
            t.default = s
        },
        41870: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EmptyCanvas = m, t.MediaGalleryView = function(e) {
                var t, n = e.mediaCollection,
                    a = e.fullCollection,
                    u = e.chat,
                    d = e.onScroll,
                    f = e.justify,
                    v = e.medias || e.productMedias,
                    _ = "chat-info" === e.theme;
                if (!v) return null;
                var C = (0, l.default)(c.default.container, (t = {}, (0, r.default)(t, c.default.drawer, a), (0, r.default)(t, c.default.galleryEmpty, 0 === n.length), (0, r.default)(t, c.default.justifySpaceBetween, "space-between" === f), (0, r.default)(t, c.default.themeChatInfo, _), t)),
                    x = (0, o.default)(v);
                if (n.queryMediaBefore && (a || x.length < 6)) {
                    var S, b = (0, l.default)(c.default.more, c.default.canvasComponent, (S = {}, (0, r.default)(S, c.default.canvasSecondRow, !a && x.length >= 3), (0, r.default)(S, c.default.canvasFirst, 0 === n.length), S));
                    x.push((0, h.jsx)("div", {
                        className: b,
                        children: (0, h.jsx)(p.Spinner, {
                            stroke: 6,
                            size: 24
                        })
                    }, "spinner"))
                }
                if (0 === n.length) {
                    if (a) return n.queryMediaBefore ? (0, h.jsx)("div", {
                        className: (0, l.default)(c.default.drawer, c.default.drawerBody),
                        children: (0, h.jsx)(s.Loading, {})
                    }) : (0, h.jsx)(s.MediaMsgs, {});
                    if (_) return null;
                    n.queryMediaBefore || n.hasMediaBefore || (C = (0, l.default)(C, c.default.galleryEmpty), x = [g(Math.max(u ? u.docCount : 0, 0), Math.max(u ? u.linkCount : 0, 0), Math.max(u ? u.productCount : 0, 0))])
                } else
                    for (var y = 0; y < 6; y++) x.push((0, h.jsx)(m, {}, "empty" + y));
                return (0, h.jsx)("div", {
                    onScroll: d,
                    "data-a8n": i.default.key("media-gallery"),
                    className: C,
                    children: x
                })
            };
            var o = a(n(319)),
                r = a(n(59713)),
                i = a(n(84646)),
                l = a(n(94184)),
                u = n(48360),
                s = n(75993),
                d = a(n(9844)),
                c = a(n(31319)),
                f = n(43890),
                p = n(85651),
                h = n(85893);

            function m() {
                return (0, h.jsx)("div", {
                    className: c.default.canvasEmpty
                })
            }

            function g(e, t, n) {
                var a = [];
                return null != e && e > 0 && a.push(d.default.t(397, {
                    count: e,
                    _plural: e
                })), null != t && t > 0 && a.push(d.default.t(549, {
                    count: t,
                    _plural: t
                })), f.ServerProps.productMediaAttachments && null != n && n > 0 && a.push(d.default.t(701, {
                    count: n,
                    _plural: n
                })), a.length > 0 ? a.join(d.default.t(407)) : f.ServerProps.productMediaAttachments ? u.fbt._("No Media, Links, Docs and Products", null, {
                    hk: "3RKA8T"
                }) : u.fbt._("No Media, Links and Docs", null, {
                    hk: "226fK3"
                })
            }
        },
        31522: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n(34575)),
                r = a(n(2205)),
                i = a(n(99842)),
                l = a(n(73716)),
                u = n(71222),
                s = n(11125),
                d = n(18018),
                c = a(n(52186)),
                f = a(n(57651)),
                p = new l.default,
                h = function(e) {
                    (0, r.default)(n, e);
                    var t = (0, i.default)(n);

                    function n() {
                        return (0, o.default)(this, n), t.apply(this, arguments)
                    }
                    return n
                }((0, d.PluggableInput)([u.EmojiPlugin, p, c.default]));
            t.default = h, h.EmojiSuggestions = (0, f.default)(s.EmojiSuggestions, {
                plugin: p
            })
        },
        65803: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StickerDetailsStickerPackInfo = function(e) {
                var t = e.name,
                    n = e.publisher,
                    a = e.theme;
                return (0, i.jsxs)(r.TextDiv, {
                    theme: "plain",
                    xstyle: [l.container, a === u.StickerStore && l.stickerStore, a === u.MediaViewer && l.mediaViewer],
                    children: [t && (0, i.jsx)(o.EmojiText, {
                        xstyle: l.name,
                        text: t
                    }), t && n && (0, i.jsx)(o.EmojiText, {
                        text: " • "
                    }), n && (0, i.jsx)(o.EmojiText, {
                        text: n
                    })]
                })
            }, t.Theme = void 0;
            a(n(56720));
            var o = n(73008),
                r = n(22552),
                i = n(85893),
                l = {
                    container: {
                        color: "hp667wtd",
                        fontSize: "f8jlpxt4",
                        lineHeight: "jgi8eev7",
                        textAlign: "qfejxiq4"
                    },
                    stickerStore: {
                        marginBottom: "e2xccmyv"
                    },
                    mediaViewer: {
                        marginBottom: "r2u2pyhj"
                    },
                    name: {
                        fontSize: "enbbiyaj",
                        lineHeight: "l85iiqla",
                        color: "tl2vja3b"
                    }
                },
                u = n(76672).Mirrored(["StickerStore", "MediaViewer"]);
            t.Theme = u
        },
        38979: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n(34575)),
                r = a(n(93913)),
                i = a(n(2205)),
                l = a(n(99842)),
                u = a(n(23279)),
                s = n(24096),
                d = n(10253),
                c = n(67294),
                f = a(n(51723)),
                p = n(1577),
                h = n(63641),
                m = a(n(57393)),
                g = n(1146),
                v = a(n(61897)),
                _ = n(95432),
                C = n(74950),
                x = n(85893),
                S = (0, u.default)((function(e, t) {
                    (0, p.setVideoVolumeSettings)(e, t)
                }), 500),
                b = function(e) {
                    (0, i.default)(n, e);
                    var t = (0, l.default)(n);

                    function n() {
                        var e;
                        (0, o.default)(this, n);
                        for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r))).checkIteration = 0, e.checkForSuccessInterval = 0, e.hasCalledPlaying = !1, e.mediaBlobWasDownloadedBeforeMount = Boolean(e.props.mediaData.mediaBlob), e.refVideo = (0, c.createRef)(), e._handleVolumeChange = function() {
                            var t, n = null === (t = e.refVideo) || void 0 === t ? void 0 : t.current;
                            n && S(n.volume, n.muted)
                        }, e.startCheckForSuccess = function() {
                            e.checkIteration = 0, e.checkForSuccessInterval || (e.checkForSuccessInterval = setInterval(e.checkForSuccess, 250))
                        }, e.clearCheckForSuccess = function() {
                            e.checkForSuccessInterval && (clearInterval(e.checkForSuccessInterval), e.checkIteration = 0, e.checkForSuccessInterval = 0)
                        }, e.checkForSuccess = function() {
                            var t;
                            if (C.Socket.state === g.SOCKET_STATE.CONNECTED) {
                                e.checkIteration++;
                                var n = null === (t = e.refVideo) || void 0 === t ? void 0 : t.current,
                                    a = null == n ? void 0 : n.buffered;
                                (null == a ? void 0 : a.length) && a.end(0) > 0 ? e._handlePlaying() : e.checkIteration > 240 && e.clearCheckForSuccess()
                            }
                        }, e._handlePlayerError = function() {
                            e.clearCheckForSuccess()
                        }, e.pause = function() {
                            var t, n = null === (t = e.refVideo) || void 0 === t ? void 0 : t.current;
                            n && (n.paused || n.pause())
                        }, e._handlePlaying = function() {
                            e.clearCheckForSuccess()
                        }, e._handleLoadedMetadata = function(t) {
                            e.setStartTime();
                            var n = e.props.onLoadedMetadata;
                            n && n(t)
                        }, e.setStartTime = function() {
                            var t, n = null === (t = e.refVideo) || void 0 === t ? void 0 : t.current;
                            null != e.props.startTime && 0 !== e.props.startTime && n && (n.currentTime = e.props.startTime)
                        }, e._handleContextMenu = function(t) {
                            e.props.disableContextMenu && t.preventDefault()
                        }, e
                    }
                    return (0, r.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this._updateVideoUserPrefs(), this._updateAudioChannel(), this.props.refVideo && this.props.refVideo(this.refVideo)
                        }
                    }, {
                        key: "_updateAudioChannel",
                        value: function() {
                            var e, t = this.refVideo.current;
                            t !== this._prevVideo && (this._prevVideo = t, null === (e = this._unregisterFromAudioChannel) || void 0 === e || e.call(this), null != t && (this._unregisterFromAudioChannel = s.MainAudioChannel.registerMedia(t)))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e;
                            null === (e = this._unregisterFromAudioChannel) || void 0 === e || e.call(this), S.flush(), this.clearCheckForSuccess(), this.pause(), d.UA.isBlink && this.refVideo.current && (0, f.default)(this.refVideo.current)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            this._updateVideoUserPrefs(), this._updateAudioChannel(), e.startTime !== this.props.startTime && this.setStartTime(), this.props.refVideo && this.props.refVideo(this.refVideo)
                        }
                    }, {
                        key: "_updateVideoUserPrefs",
                        value: function() {
                            var e, t = null === (e = this.refVideo) || void 0 === e ? void 0 : e.current;
                            if (t) {
                                var n = (0, p.getVideoVolumeSettings)();
                                n && ("number" == typeof n.volume && (t.volume = n.volume), "boolean" == typeof n.muted && (t.muted = n.muted)), k() && this.props.autoPlay && this.startCheckForSuccess()
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                n = t.mediaData,
                                a = n.mediaBlob,
                                o = n.streamable && n.isStreamable();
                            if ((this.mediaBlobWasDownloadedBeforeMount || !o) && a instanceof m.default) e = a.url();
                            else {
                                if (!n.streamable || !n.isStreamable()) return null;
                                e = `${_.VIDEO_STREAM_URL}?key=${this.props.msg.id.toString()}`
                            }
                            var r = k() && !t.autoPlay ? this.startCheckForSuccess : void 0;
                            return (0, x.jsx)("video", {
                                ref: this.refVideo,
                                src: e,
                                poster: t.poster,
                                className: t.className,
                                controls: t.controls,
                                autoPlay: t.autoPlay,
                                onClick: t.onClick,
                                onDoubleClick: t.onDoubleClick,
                                onVolumeChange: this._handleVolumeChange,
                                onLoadedMetadata: this._handleLoadedMetadata,
                                onPlay: r,
                                onPlaying: this._handlePlaying,
                                onError: this.clearCheckForSuccess,
                                onContextMenu: this._handleContextMenu,
                                children: t.children
                            })
                        }
                    }]), n
                }(c.PureComponent);
            b.CONCERNS = {
                msg: ["id"],
                mediaData: ["mediaBlob", "streamable"]
            }, b.displayName = "VideoTag";
            var y = (0, h.ListenerHOC)((0, v.default)(b, b.CONCERNS));

            function k() {
                return d.UA.isGecko || d.UA.isSafari
            }
            t.default = y
        },
        35140: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.catalog,
                    n = e.onSend,
                    a = (0, l.createCatalogLink)(t.id.user),
                    s = t.id.equals((0, r.getMaybeMeUser)()) ? `${o.fbt._("Follow this link to view our catalog on WhatsApp:",null,{hk:"1bmMoC"}).toString()} ${a}` : a;
                return (0, u.jsx)(i.default, {
                    text: s,
                    pushTransition: "none",
                    popTransition: "none",
                    onSend: n
                })
            };
            var o = n(48360),
                r = n(1577),
                i = a(n(8694)),
                l = n(37404),
                u = n(85893)
        },
        79433: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.product,
                    n = e.onSend,
                    a = (0, l.createProductLink)(t.catalogWid.user, t.id.toString()),
                    s = t.catalogWid.equals((0, r.getMaybeMeUser)()) ? `${o.fbt._("Follow this link to view our item on WhatsApp:",null,{hk:"H5KuN"}).toString()} ${a}` : a;
                return (0, u.jsx)(i.default, {
                    text: s,
                    pushTransition: "none",
                    popTransition: "none",
                    onSend: n
                })
            };
            var o = n(48360),
                r = n(1577),
                i = a(n(8694)),
                l = n(37404),
                u = n(85893)
        },
        8694: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n(87757)),
                r = a(n(48926)),
                i = a(n(34575)),
                l = a(n(93913)),
                u = a(n(2205)),
                s = a(n(99842)),
                d = n(80965),
                c = n(84533),
                f = n(65901),
                p = a(n(50177)),
                h = a(n(9844)),
                m = n(64803),
                g = n(99451),
                v = n(43966),
                _ = n(43890),
                C = a(n(9150)),
                x = n(85893),
                S = function(e) {
                    (0, u.default)(n, e);
                    var t = (0, s.default)(n);

                    function n() {
                        var e;
                        (0, i.default)(this, n);
                        for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++) l[u] = arguments[u];
                        return (e = t.call.apply(t, [this].concat(l)))._selected = [], e._getSelected = function() {
                            return e._selected
                        }, e._handleSelectionChange = function(t, n, a) {
                            e._selected = a
                        }, e._handleForwardConfirmed = function(t) {
                            e._send(t)
                        }, e._handleCancel = function() {
                            e.end()
                        }, e._send = function() {
                            var t = (0, r.default)(o.default.mark((function t(n) {
                                var a, r, i, l, u;
                                return o.default.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (a = e.props, r = a.text, i = a.title, l = a.onSend, 1 !== n.length) {
                                                t.next = 9;
                                                break
                                            }
                                            return u = n[0], t.next = 5, e._pasteText(u, r);
                                        case 5:
                                            e.end(), window.innerWidth <= d.LAYOUT_2COLUMNS_MAX_WIDTH && f.Cmd.closeDrawerRight(), t.next = 10;
                                            break;
                                        case 9:
                                            e.push((0, x.jsx)(C.default, {
                                                defaultText: r,
                                                title: i || h.default.t(634),
                                                onSend: function(t, a) {
                                                    return e._handleSend(n, t, a)
                                                },
                                                onBack: e._handleBack
                                            }));
                                        case 10:
                                            l && l();
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(), e._handleSend = function(t, n, a) {
                            e._sendText(t, n, a), e.end()
                        }, e._handleBack = function() {
                            e.pop()
                        }, e._pasteText = function() {
                            var t = (0, r.default)(o.default.mark((function t(n, a) {
                                return o.default.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e._ensureContactUnblocked(n);
                                        case 2:
                                            n.active ? f.Cmd.pasteChatTextInput(n, a) : (n.setComposeContents({
                                                text: a
                                            }), f.Cmd.openChatFromUnread(n).then((function(e) {
                                                e && f.Cmd.focusChatTextInput(n)
                                            })));
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(), e._sendText = function(t, n, a) {
                            t.forEach(function() {
                                var t = (0, r.default)(o.default.mark((function t(r) {
                                    return o.default.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, e._ensureContactUnblocked(r);
                                            case 2:
                                                f.Cmd.once("ui_idle", (function() {
                                                    (0, v.sendTextMsgToChat)(r, n, {
                                                        linkPreview: a
                                                    })
                                                }));
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }())
                        }, e._ensureContactUnblocked = function() {
                            var e = (0, r.default)(o.default.mark((function e(t) {
                                return o.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!t.isUser || !t.contact.isBlocked()) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.next = 3, (0, c.unblockContact)(t.contact);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(), e
                    }
                    return (0, l.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, x.jsx)(m.SelectModal, {
                                title: this.props.title || h.default.t(634),
                                listType: m.ListType.CHAT_SELECT_MODAL,
                                getInitialItems: this._getSelected,
                                maxItems: _.ServerProps.multicastLimitGlobal,
                                onConfirm: this._handleForwardConfirmed,
                                onCancel: this._handleCancel,
                                onSelectionChanged: this._handleSelectionChange,
                                singleSelectionFooterType: g.FooterType.NEXT,
                                multipleSelectionFooterType: g.FooterType.NEXT
                            }))
                        }
                    }]), n
                }(p.default);
            t.default = S
        },
        11657: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n(34575)),
                r = a(n(93913)),
                i = a(n(2205)),
                l = a(n(99842)),
                u = a(n(50177)),
                s = a(n(86900)),
                d = n(85893),
                c = function(e) {
                    (0, i.default)(n, e);
                    var t = (0, l.default)(n);

                    function n() {
                        var e;
                        (0, o.default)(this, n);
                        for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r))).closeStatusViewer = function() {
                            e.end()
                        }, e
                    }
                    return (0, r.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, d.jsx)(s.default, {
                                initialStatusV3: this.props.statusV3,
                                quotedMsgKey: this.props.msgKey,
                                closeStatusViewer: this.closeStatusViewer,
                                onMsgNotFound: this.props.onMsgNotFound
                            }), "none")
                        }
                    }]), n
                }(u.default);
            t.default = c
        },
        24576: (e, t, n) => {
            "use strict";
            var a = n(6089).default,
                o = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.findFirstWebLink = void 0, t.useLinkPreview = function(e, t) {
                var n = (0, p.useState)(null),
                    o = (0, l.default)(n, 2),
                    c = o[0],
                    f = o[1],
                    h = function() {
                        f(null)
                    };
                return (0, p.useEffect)((function() {
                    if (h(), e) {
                        var n = new a,
                            o = n.signal;
                        return (0, u.default)(r.default.mark((function n() {
                                var a, l, u;
                                return r.default.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, n.next = 3, (0, d.default)((0, g.default)(e, !0), o);
                                        case 3:
                                            if (a = n.sent, l = null == a ? void 0 : a.data) {
                                                n.next = 7;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 7:
                                            if (f(l), l.thumbnailHQ) {
                                                n.next = 10;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 10:
                                            return n.next = 12, b(l.thumbnailHQ, o, t);
                                        case 12:
                                            if (u = n.sent) {
                                                n.next = 15;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 15:
                                            f((0, i.default)((0, i.default)({}, l), u)), n.next = 23;
                                            break;
                                        case 18:
                                            if (n.prev = 18, n.t0 = n.catch(0), n.t0.name !== s.ABORT_ERROR) {
                                                n.next = 22;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 22:
                                            __LOG__(2)`useLinkPreview: error`;
                                        case 23:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 18]
                                ])
                            })))(),
                            function() {
                                n.signal.aborted || n.abort()
                            }
                    }
                }), [e, t]), {
                    linkPreview: c,
                    clearLinkPreview: h
                }
            };
            var r = o(n(87757)),
                i = o(n(81109)),
                l = o(n(63038)),
                u = o(n(48926)),
                s = n(396),
                d = o(n(15584)),
                c = o(n(3208)),
                f = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = S(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                            i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                        } a.default = e, n && n.set(e, a);
                    return a
                }(n(58615)),
                p = n(67294),
                h = n(5687),
                m = o(n(38931)),
                g = o(n(8420)),
                v = n(57412),
                _ = o(n(57393)),
                C = o(n(53437)),
                x = o(n(89490));

            function S(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (S = function(e) {
                    return e ? n : t
                })(e)
            }

            function b() {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = (0, u.default)(r.default.mark((function e(t, n, a) {
                    var o, i, l;
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, d.default)(_.default.createFromBase64Jpeg(t), n);
                            case 3:
                                return o = e.sent, e.next = 6, (0, x.default)({
                                    thumbnail: o,
                                    mediaType: v.MEDIA_TYPES.THUMBNAIL_LINK,
                                    mediaKeyInfo: (0, C.default)(),
                                    uploadOrigin: (0, m.default)(a),
                                    forwardedFromWeb: !1,
                                    signal: n,
                                    timeout: c.default.MMS_THUMBNAIL_UPLOAD_TIMEOUT,
                                    isViewOnce: !1
                                });
                            case 6:
                                if (i = e.sent, l = i.mediaEntry) {
                                    e.next = 10;
                                    break
                                }
                                return e.abrupt("return");
                            case 10:
                                return e.abrupt("return", {
                                    mediaKey: l.mediaKey,
                                    mediaKeyTimestamp: l.mediaKeyTimestamp,
                                    thumbnailDirectPath: l.directPath,
                                    thumbnailSha256: i.filehash,
                                    thumbnailEncSha256: l.encFilehash
                                });
                            case 13:
                                if (e.prev = 13, e.t0 = e.catch(0), e.t0.name !== s.ABORT_ERROR) {
                                    e.next = 17;
                                    break
                                }
                                return e.abrupt("return");
                            case 17:
                                __LOG__(2)`useLinkPreview.uploadHQPreview: error`;
                            case 18:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 13]
                    ])
                })))).apply(this, arguments)
            }
            t.findFirstWebLink = function(e) {
                var t = (0, h.removeCodeBlocks)(e),
                    n = f.findLinks(t, !0)[0];
                if (n) return n
            }
        },
        69237: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n(84646)),
                r = n(48360),
                i = n(67294),
                l = n(50857),
                u = a(n(79047)),
                s = n(91404),
                d = a(n(53187)),
                c = a(n(18345)),
                f = n(19288),
                p = n(24779),
                h = n(22552),
                m = n(85893),
                g = (0, i.forwardRef)((function(e, t) {
                    var n = e.settings,
                        a = e.onClose,
                        i = (0, l.useModelValues)(n, ["archive"]).archive,
                        g = !i.classic;
                    return (0, m.jsxs)(d.default, {
                        ref: t,
                        children: [(0, m.jsx)(f.DrawerHeader, {
                            title: r.fbt._("Archive settings", null, {
                                hk: "1YI0jC"
                            }),
                            type: f.DRAWER_HEADER_TYPE.LARGE,
                            onBack: a
                        }), (0, m.jsx)(c.default, {
                            children: (0, m.jsxs)("div", {
                                className: u.default.section,
                                children: [(0, m.jsx)("div", {
                                    "data-a8n": o.default.key("auto-unarchive-setting"),
                                    className: u.default.control,
                                    children: (0, m.jsx)(s.CheckBox, {
                                        onChange: function() {
                                            var e = !i.classic;
                                            (0, p.setArchiveClassicSetting)(e)
                                        },
                                        checked: g
                                    })
                                }), (0, m.jsxs)("div", {
                                    "data-a8n": o.default.key("auto-unarchive-setting-text"),
                                    children: [r.fbt._("Keep chats archived", null, {
                                        hk: "IqSCS"
                                    }), (0, m.jsx)(h.TextDiv, {
                                        theme: "muted",
                                        children: r.fbt._("Archived chats will remain archived when you receive a new message", null, {
                                            hk: "jrtLe"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                }));
            t.default = g
        },
        23841: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.collection,
                    n = (0, s.useState)(!1),
                    a = (0, o.default)(n, 2),
                    x = a[0],
                    S = a[1],
                    b = (0, s.useState)(!1),
                    y = (0, o.default)(b, 2),
                    k = y[0],
                    j = y[1],
                    T = (0, s.useState)(""),
                    P = (0, o.default)(T, 2),
                    E = P[0],
                    I = P[1],
                    w = function() {
                        c.Cmd.closeModal()
                    };
                if (k) return (0, C.jsx)(f.default, {
                    title: u.fbt._("Request review", null, {
                        hk: "1Rp2pL"
                    }),
                    onOK: w,
                    children: (0, C.jsx)(g.TextDiv, {
                        children: u.fbt._("We will review the collection and if it meets our guidelines, it will be added to your catalog.", null, {
                            hk: "y5vML"
                        })
                    })
                });
                var O = E.length < 1 || x;
                return (0, C.jsx)(f.default, {
                    title: u.fbt._("Request review", null, {
                        hk: "1Rp2pL"
                    }),
                    onOK: function() {
                        S(!0);
                        var e = !0;
                        h.QPL.markerStart(m.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL), (0, d.handleCollectionAppeal)(t, E).then((function() {
                            S(!1), j(!0), e = !1, h.QPL.markerEnd(m.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, h.QuickLogActionType.SUCCESS)
                        })).catch((0, r.filteredCatch)(i.ServerStatusCodeError, (function() {
                            c.Cmd.openToast((0, C.jsx)(_.Toast, {
                                msg: u.fbt._("Something went wrong and your request wasn't submitted. Try again.", null, {
                                    hk: "3sAwQH"
                                }),
                                id: (0, _.genId)("catalog_collection_appeal_submission_failed")
                            })), S(!1)
                        }))).finally((function() {
                            e && h.QPL.markerEnd(m.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, h.QuickLogActionType.FAIL)
                        }))
                    },
                    onCancel: w,
                    okDisabled: O,
                    children: (0, C.jsxs)("form", {
                        children: [(0, C.jsx)(v.TextInput, {
                            a8n: "confirm-popup-text-input",
                            placeholder: u.fbt._("Enter reason for this request...", null, {
                                hk: "3U5nE7"
                            }),
                            onChange: function(e) {
                                I(e)
                            },
                            value: E,
                            maxLength: 1e3
                        }), (0, C.jsx)(p.ExternalLink, {
                            href: l.default.WA_COMMERCE_POLICY_URL,
                            children: u.fbt._("Learn More", null, {
                                hk: "FZuUT"
                            })
                        })]
                    })
                })
            };
            var o = a(n(63038)),
                r = n(15586),
                i = n(73435),
                l = a(n(3208)),
                u = n(48360),
                s = n(67294),
                d = n(56734),
                c = n(65901),
                f = a(n(86777)),
                p = n(49012),
                h = n(3298),
                m = n(4099),
                g = n(22552),
                v = n(68544),
                _ = n(92428),
                C = n(85893)
        },
        73624: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(48360),
                r = n(65901),
                i = a(n(86777)),
                l = n(85893),
                u = function(e) {
                    r.Cmd.openModal((0, l.jsx)(i.default, {
                        okText: o.fbt._("OK", null, {
                            hk: "2KEeHb"
                        }),
                        onOK: function() {
                            return r.Cmd.closeModal()
                        },
                        children: e
                    }))
                };
            t.default = u
        },
        72758: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = new f.CoolOffNux(g, _, {
                    COOL_OFF_START_STORAGE_KEY: c.CoolOffPeriodKeys.CATALOG,
                    MAX_VIEWS_IN_DAYS: 1,
                    COOL_OFF_DURATION_IN_DAYS: 1
                });
                if (e.shouldShow()) {
                    var t = (0, m.jsx)(l.default, {
                        onOK: function() {
                            e.dismiss(), i.Cmd.closeModal()
                        },
                        children: (0, m.jsxs)(u.FlexColumn, {
                            align: "center",
                            children: [(0, m.jsx)(s.default, {
                                xstyle: v.graphic,
                                children: (0, m.jsx)(p.default, {
                                    name: "cart-interstitial-graphic"
                                })
                            }), (0, m.jsx)(h.TextHeader, {
                                theme: "popup-title",
                                children: o.fbt._("New: Add to Cart", null, {
                                    hk: "34ysyY"
                                })
                            }), (0, m.jsx)(h.TextParagraph, {
                                color: "secondary",
                                className: r.default.description,
                                children: o.fbt._("Simpler for you to keep track of order inquiries, manage requests, and close sales.", null, {
                                    hk: "25ZM2y"
                                })
                            })]
                        })
                    });
                    i.Cmd.openModal(t), e.show(), e.startCoolOffToday()
                }
            };
            var o = n(48360),
                r = (a(n(56720)), a(n(46306))),
                i = n(65901),
                l = a(n(86777)),
                u = n(27968),
                s = a(n(69520)),
                d = a(n(50507)),
                c = n(15849),
                f = n(8204),
                p = a(n(7665)),
                h = n(22552),
                m = n(85893),
                g = c.NuxKeyTypes.COOL_OFF_NUX.CART_INTERSTITIAL,
                v = {
                    graphic: {
                        marginTop: "nylzjxre",
                        marginEnd: "lfum0007",
                        marginBottom: "bvhm1occ",
                        marginStart: "r6x3u63k",
                        color: "bc38n4nm"
                    }
                },
                _ = d.default.BANNER_TYPES.SMB_CATALOG_CART_INTERSTITIAL
        },
        78685: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onOpenCollections,
                    n = (0, r.useState)(!1),
                    a = (0, o.default)(n, 2),
                    f = a[0],
                    p = a[1],
                    h = l.CatalogCollection.get((0, s.getMeUser)());
                return (0, i.useListener)(null == h ? void 0 : h.collections, "change", (function() {
                    p(!0)
                })), f && (0, c.jsx)(d.default, {
                    children: (0, c.jsx)(u.default, {
                        onClick: t
                    })
                })
            };
            var o = a(n(63038)),
                r = n(67294),
                i = n(91285),
                l = n(72743),
                u = a(n(48066)),
                s = n(1577),
                d = a(n(46114)),
                c = n(85893)
        },
        48066: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n(34575)),
                r = a(n(93913)),
                i = a(n(2205)),
                l = a(n(99842)),
                u = n(48360),
                s = n(18297),
                d = n(72743),
                c = a(n(30626)),
                f = n(73929),
                p = a(n(63382)),
                h = n(1577),
                m = a(n(50507)),
                g = n(15849),
                v = a(n(27689)),
                _ = n(8204),
                C = n(85893),
                x = g.NuxKeyTypes.COOL_OFF_NUX.COLLECTIONS,
                S = {
                    COOL_OFF_DURATION_IN_DAYS: 2,
                    VIEWS_BEFORE_COOL_OFF_IN_DAYS: 1,
                    CLICKS_BEFORE_COOL_OFF: 1,
                    MAX_VIEWS_IN_DAYS: 2,
                    COOL_OFF_START_STORAGE_KEY: g.CoolOffPeriodKeys.CATALOG
                };
            var b = function(e) {
                (0, i.default)(n, e);
                var t = (0, l.default)(n);

                function n() {
                    return (0, o.default)(this, n), t.apply(this, arguments)
                }
                return (0, r.default)(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props.onClick,
                            t = new _.CoolOffNux(x, m.default.BANNER_TYPES.SMB_COLLECTION_CREATION, S),
                            n = (0, C.jsx)("span", {
                                className: c.default.actionText,
                                children: u.fbt._("Get started", null, {
                                    hk: "m7Zf5"
                                })
                            });
                        return (0, C.jsx)(p.default, {
                            title: u.fbt._("Create new collection", null, {
                                hk: "19zBCQ"
                            }),
                            subtitle: u.fbt._("Group items into collections to stay organized.", null, {
                                hk: "1sDPK6"
                            }),
                            actionText: n,
                            onClick: e,
                            nuxManager: t,
                            theme: "nuxBlue"
                        })
                    }
                }], [{
                    key: "shouldShow",
                    value: function() {
                        return (0, s.getABPropConfigValue)("web_abprop_collections_nux_banner") && f.Conn.isSMB && function() {
                            var e = d.CatalogCollection.get((0, h.getMeUser)());
                            if (null == e || null == e.collections) return !1;
                            var t = e.collections.getCollectionModels(!0);
                            return e.productCollection.getProductModels(!0).some((function(e) {
                                return !e.isHidden && "REJECTED" !== e.reviewStatus
                            })) && 0 === t.length
                        }() && (0, _.shouldShowNUX)(x, S)
                    }
                }]), n
            }(v.default);
            t.default = b, b.displayName = "CollectionsBanner"
        },
        24496: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, u.jsx)(r.default, {
                    a8nText: "li-share-link",
                    icon: (0, u.jsx)(l.default, {
                        name: "forward",
                        className: i.default.icon
                    }),
                    onClick: e.onClick,
                    children: o.fbt._("Send product", null, {
                        hk: "1wkzue"
                    })
                })
            };
            var o = n(48360),
                r = a(n(61876)),
                i = a(n(85406)),
                l = a(n(7665)),
                u = n(85893)
        },
        98056: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.a8nText,
                    n = e.icon,
                    a = e.iconWidth,
                    f = e.iconHeight,
                    p = e.label,
                    h = e.disabled,
                    m = e.xstyle,
                    g = e.onClick,
                    v = function() {
                        var e = (0, r.useState)(!1),
                            t = (0, o.default)(e, 2),
                            n = t[0],
                            a = t[1],
                            i = (0, r.useCallback)((function() {
                                a(!0)
                            }), []),
                            l = (0, r.useCallback)((function() {
                                a(!1)
                            }), []);
                        return {
                            isHovered: n,
                            onMouseEnter: i,
                            onMouseLeave: l
                        }
                    }(),
                    _ = v.isHovered,
                    C = v.onMouseEnter,
                    x = v.onMouseLeave,
                    S = (0, d.jsx)(u.default, {
                        name: n,
                        directional: !0,
                        color: "teal",
                        width: a,
                        height: f
                    });
                return (0, d.jsxs)("div", {
                    className: (0, i.default)(c.button, h && c.disabled, m),
                    onMouseEnter: C,
                    onMouseLeave: x,
                    children: [(0, d.jsx)(l.Round, {
                        inverted: !0,
                        onClick: g,
                        disabled: h,
                        a8nText: t,
                        hideBackground: h || !_,
                        children: S
                    }), (0, d.jsx)(s.default, {
                        xstyle: c.label,
                        disabled: h,
                        a8nText: t,
                        onClick: g,
                        children: p
                    })]
                })
            };
            var o = a(n(63038)),
                r = n(67294),
                i = a(n(56720)),
                l = n(80385),
                u = a(n(7665)),
                s = a(n(76080)),
                d = n(85893),
                c = {
                    button: {
                        textAlign: "qfejxiq4"
                    },
                    label: {
                        marginEnd: "jnwc1y2a",
                        marginBottom: "mpdn4nr2",
                        marginStart: "svoq16ka",
                        fontSize: "ovllcyds",
                        marginTop: "qt60bha0",
                        color: "jq3rn4u7"
                    },
                    disabled: {
                        opacity: "ge6flnsz"
                    }
                }
        },
        42661: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.logCatalogClick = function(e, t) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_CATALOG_ICON,
                    catalogSessionId: e,
                    isProfileLinked: t
                })
            }, t.logEmailClick = function(e, t) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_EMAIL,
                    catalogSessionId: e,
                    isProfileLinked: t
                })
            }, t.logForwardClick = function(e, t) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_FORWARD,
                    catalogSessionId: e,
                    isProfileLinked: t
                })
            }, t.logHoursClick = function(e, t) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_HOURS,
                    catalogSessionId: e,
                    isProfileLinked: t
                })
            }, t.logLinkedFbClick = function(e, t) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_APP_LINK,
                    linkedAccount: i.default.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.FACEBOOK,
                    catalogSessionId: e,
                    bizFbSize: u(t),
                    isProfileLinked: !0
                })
            }, t.logLinkedIgClick = function(e, t) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_APP_LINK,
                    linkedAccount: i.default.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.INSTAGRAM,
                    catalogSessionId: e,
                    bizIgSize: u(t),
                    isProfileLinked: !0
                })
            }, t.logLocationClick = function(e, t) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_LOCATION,
                    catalogSessionId: e,
                    isProfileLinked: t
                })
            }, t.logMessageClick = function(e) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_MESSAGE,
                    catalogSessionId: e
                })
            }, t.logProfileExit = function(e, t, n) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_EXIT,
                    catalogSessionId: e,
                    scrollDepth: t,
                    isProfileLinked: n
                })
            }, t.logProfileImpression = function(e, t, n) {
                (0, r.smbBizProfileLoggingEnabled)() ? new i.default.ViewBusinessProfile({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION,
                    catalogSessionId: e,
                    profileEntryPoint: t,
                    isProfileLinked: !!n
                }).commit(): new i.default.ViewBusinessProfile({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION,
                    catalogSessionId: e,
                    isProfileLinked: !!n
                }).commit()
            }, t.logShopsClick = function(e, t) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_SHOPS_ICON,
                    catalogSessionId: e,
                    isProfileLinked: t
                })
            }, t.logStatusClick = function(e, t) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_STATUS,
                    catalogSessionId: e,
                    isProfileLinked: t
                })
            }, t.logVoiceCallClick = function(e, t) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_VOICE_CALL,
                    catalogSessionId: e,
                    isProfileLinked: t
                })
            }, t.logWebsiteClick = function(e, t) {
                l({
                    viewBusinessProfileAction: i.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_WEBSITE,
                    catalogSessionId: e,
                    isProfileLinked: t
                })
            };
            var o = a(n(81109)),
                r = n(2629),
                i = a(n(50507));

            function l(e) {
                var t = new i.default.ViewBusinessProfile((0, o.default)((0, o.default)({}, e), {}, {
                    isProfileLinked: !!e.isProfileLinked
                }));
                t && t.commit()
            }

            function u(e) {
                return e > 1e6 ? i.default.TRUST_SIGNAL_BUCKETS.B1M : e >= 1e5 ? i.default.TRUST_SIGNAL_BUCKETS.B100K : e >= 1e4 ? i.default.TRUST_SIGNAL_BUCKETS.B10K : e >= 1e3 ? i.default.TRUST_SIGNAL_BUCKETS.B1K : e >= 501 ? i.default.TRUST_SIGNAL_BUCKETS.B501 : e >= 101 ? i.default.TRUST_SIGNAL_BUCKETS.B101 : e >= 51 ? i.default.TRUST_SIGNAL_BUCKETS.B51 : e >= 11 ? i.default.TRUST_SIGNAL_BUCKETS.B11 : e >= 2 ? i.default.TRUST_SIGNAL_BUCKETS.B2 : 1 === e ? i.default.TRUST_SIGNAL_BUCKETS.B1 : i.default.TRUST_SIGNAL_BUCKETS.B0
            }
        },
        79345: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.text,
                    n = e.secondary,
                    a = e.icon,
                    s = e.href,
                    d = e.onClick,
                    c = e.rowTheme,
                    f = (0, u.jsx)(l.default, {
                        name: a
                    });
                return (0, u.jsx)(r.default, {
                    image: f,
                    primary: t,
                    secondary: n,
                    theme: c,
                    idle: void 0 === s,
                    onClick: function() {
                        if (void 0 !== s) {
                            var e = (0, i.getWebsiteLink)(s);
                            o.default.open(e), d && d()
                        }
                    }
                })
            };
            var o = a(n(62907)),
                r = a(n(88186)),
                i = n(26180),
                l = a(n(7665)),
                u = n(85893)
        },
        73728: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = m;
            var o = n(48360),
                r = n(67294),
                i = (a(n(56720)), n(50857)),
                l = n(42661),
                u = n(96706),
                s = a(n(46821)),
                d = n(73008),
                c = a(n(79345)),
                f = n(52867),
                p = n(85893),
                h = {
                    infoText: {
                        fontSize: "dsh4tgtl",
                        lineHeight: "jgi8eev7",
                        color: "t35qvd06",
                        paddingStart: "rtas09xs",
                        paddingEnd: "hmmjlwtp",
                        display: "f804f6gw",
                        paddingBottom: "p9a4hubg"
                    }
                };

            function m(e) {
                var t, n = e.showEditHint,
                    a = e.businessProfile,
                    m = e.sectionTheme,
                    g = e.rowTheme,
                    v = (0, i.useModelValues)(a, ["fbPage", "igProfessional"]),
                    _ = v.fbPage,
                    C = v.igProfessional,
                    x = (0, f.getProductCatalogSessionId)((0, r.useContext)(u.DrawerContext)),
                    S = [];
                if (null == _ ? void 0 : _.displayName) {
                    var b = _.likes ? o.fbt._({
                        "*": "Facebook • {count} Likes",
                        _1: "Facebook • 1 Like"
                    }, [o.fbt._plural(_.likes, "count")], {
                        hk: "4fuveG"
                    }) : o.fbt._("Facebook", null, {
                        hk: "2PcUTa"
                    });
                    S.push((0, p.jsx)(c.default, {
                        icon: "logo-facebook-round",
                        text: _.displayName,
                        secondary: b,
                        href: `https://www.facebook.com/${_.id}`,
                        rowTheme: g,
                        onClick: function() {
                            (0, l.logLinkedFbClick)(x, _.likes)
                        }
                    }, "fb"))
                }
                if (null == C ? void 0 : C.handle) {
                    var y = C.followers ? o.fbt._({
                        "*": "Instagram • {count} Followers",
                        _1: "Instagram • 1 Follower"
                    }, [o.fbt._plural(C.followers, "count")], {
                        hk: "4gGhJG"
                    }) : o.fbt._("Instagram", null, {
                        hk: "4kjnWv"
                    });
                    S.push((0, p.jsx)(c.default, {
                        icon: "logo-instagram-color",
                        text: `@${C.handle}`,
                        secondary: y,
                        href: `https://www.instagram.com/${C.handle}`,
                        rowTheme: g,
                        onClick: function() {
                            (0, l.logLinkedIgClick)(x, C.followers)
                        }
                    }, "ig"))
                }
                if (0 === S.length) return null;
                if (!0 === n) {
                    var k = o.fbt._("Facebook and Instagram handles can only be edited from the app on your mobile device.", null, {
                        hk: "3JNYRt"
                    });
                    t = (0, p.jsx)(d.EmojiText, {
                        xstyle: h.infoText,
                        text: k.toString()
                    })
                }
                return (0, p.jsxs)(s.default, {
                    theme: m,
                    children: [S.map((function(e) {
                        return e
                    })), t]
                })
            }
            m.defaultProps = {
                sectionTheme: "no-padding",
                rowTheme: "linked-account"
            }
        },
        22261: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.elementId,
                    n = e.onClick;
                return document.queryCommandSupported("copy") ? (0, c.jsx)(u.default, {
                    a8nText: "li-copy-link",
                    icon: (0, c.jsx)(s.default, {
                        name: "copy",
                        className: l.default.icon
                    }),
                    onClick: function() {
                        return function(e, t) {
                            (0, o.default)(e) ? i.Cmd.openToast((0, c.jsx)(d.Toast, {
                                msg: r.fbt._("Link copied to clipboard.", null, {
                                    hk: "2d44NZ"
                                }),
                                id: (0, d.genId)()
                            })): i.Cmd.openToast((0, c.jsx)(d.Toast, {
                                msg: r.fbt._("Couldn't copy to clipboard. Copy using mouse or keyboard.", null, {
                                    hk: "4aKgWx"
                                }),
                                id: (0, d.genId)()
                            }));
                            null != t && t()
                        }(t, n)
                    },
                    children: r.fbt._("Copy link", null, {
                        hk: "2ZtjA3"
                    })
                }) : null
            };
            var o = a(n(67789)),
                r = n(48360),
                i = n(65901),
                l = a(n(15540)),
                u = a(n(61876)),
                s = a(n(7665)),
                d = n(92428),
                c = n(85893)
        },
        61876: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = e.children,
                    h = e.onClick,
                    m = e.icon,
                    g = e.className,
                    v = e.theme,
                    _ = e.disabled,
                    C = void 0 !== _ && _,
                    x = e.testid,
                    S = (0, s.default)(h, {
                        disabled: C
                    }),
                    b = (0, i.default)(S, 2),
                    y = b[0],
                    k = b[1],
                    j = C ? void 0 : e.color,
                    T = null != m ? (0, p.jsx)("div", {
                        className: (0, u.default)(d.default.icon, (t = {}, (0, r.default)(t, d.default.danger, "danger" === j), (0, r.default)(t, d.default.success, "success" === j), t)),
                        children: m
                    }) : null,
                    P = (0, u.default)(d.default.container, g, (n = {}, (0, r.default)(n, d.default.containerNoIcon, !m), (0, r.default)(n, d.default.disabled, Boolean(C)), (0, r.default)(n, d.default.containerListAligned, "list-aligned" === v), (0, r.default)(n, d.default.themeChatInfo, "chat-info" === v), n)),
                    E = (0, c.isStringOrFbt)(a) ? a : null;
                return (0, p.jsxs)("div", (0, o.default)((0, o.default)({}, k), {}, {
                    className: P,
                    "data-a8n": l.default.key(e.a8nText),
                    "data-ignore-capture": "any",
                    "data-testid": x,
                    ref: y,
                    title: E,
                    children: [T, (0, p.jsx)("div", {
                        className: (0, u.default)(d.default.bodyContainer),
                        children: (0, p.jsx)("div", {
                            className: d.default.body,
                            children: (0, p.jsx)(f.TextSpan, {
                                theme: "title",
                                color: j,
                                children: a
                            })
                        })
                    })]
                }))
            };
            var o = a(n(81109)),
                r = a(n(59713)),
                i = a(n(63038)),
                l = a(n(84646)),
                u = a(n(94184)),
                s = a(n(77803)),
                d = a(n(45037)),
                c = n(23549),
                f = n(22552),
                p = n(85893)
        },
        40071: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n(34575)),
                r = a(n(93913)),
                i = a(n(2205)),
                l = a(n(99842)),
                u = a(n(272)),
                s = a(n(69760)),
                d = a(n(94184)),
                c = n(48360),
                f = n(67294),
                p = a(n(88186)),
                h = n(65901),
                m = n(66834),
                g = n(73008),
                v = a(n(22935)),
                _ = n(91823),
                C = a(n(58497)),
                x = a(n(37088)),
                S = a(n(61897)),
                b = a(n(7665)),
                y = n(16835),
                k = n(85893),
                j = function(e) {
                    (0, i.default)(n, e);
                    var t = (0, l.default)(n);

                    function n() {
                        var e;
                        (0, o.default)(this, n);
                        for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r))).state = {
                            style: {
                                visibility: "hidden"
                            }
                        }, e._handleScroll = function(t) {
                            Math.abs(t.deltaY) > 3 && e._handleClose()
                        }, e._handleClose = function() {
                            if (!e.closing) {
                                var t;
                                if (e.closing = !0, e.props.getZoomNode((function(e) {
                                        t = e
                                    })), !t) return h.Cmd.closeModalMedia();
                                var n = e._refImage;
                                if (n) {
                                    e.props.animateBorderRadius && (n.style.transition = "border-radius 500ms cubic-bezier(.1,.82,.25,1)", n.style.borderRadius = "50%");
                                    var a = (0, u.default)(t, "start"),
                                        o = n.getBoundingClientRect(),
                                        r = a.getBoundingClientRect(),
                                        i = r.top - o.top,
                                        l = r.left - o.left,
                                        d = a.clientWidth / n.clientWidth;
                                    (0, s.default)(n, {
                                        translateX: [l, 0],
                                        translateY: [i, 0],
                                        scale: [d, 1]
                                    }, {
                                        duration: 200,
                                        easing: [.1, .82, .25, 1]
                                    }).then((function() {
                                        h.Cmd.closeModalMedia()
                                    }))
                                }
                            }
                        }, e._handleImageLoad = function(t) {
                            var n = t.currentTarget;
                            e.setState({
                                size: {
                                    width: n.naturalWidth,
                                    height: n.naturalHeight
                                }
                            }, (function() {
                                e.props.getZoomNode((function(t) {
                                    var a = n.getBoundingClientRect(),
                                        o = t.getBoundingClientRect(),
                                        r = o.top - a.top,
                                        i = {
                                            visibility: "hidden",
                                            transform: `translateX(${o.left-a.left}px) translateY(${r}px) scale(${t.clientWidth/n.clientWidth})`,
                                            transition: "transform 0s",
                                            borderRadius: void 0
                                        };
                                    e.props.animateBorderRadius && (i.borderRadius = "50%"), e.setState({
                                        style: i
                                    }, (function() {
                                        var t = {
                                            transform: "translateX(0px) translateY(0px) scale(1)",
                                            transition: "transform 500ms cubic-bezier(.1,.82,.25,1)"
                                        };
                                        e.props.animateBorderRadius && (t = {
                                            transform: "translateX(0px) translateY(0px) scale(1)",
                                            borderRadius: "0%",
                                            transition: "transform 500ms cubic-bezier(.1,.82,.25,1),\n                                         border-radius 500ms cubic-bezier(.1,.82,.25,1)"
                                        }), e.setState({
                                            style: t
                                        })
                                    }))
                                }))
                            }))
                        }, e.setRefImage = function(t) {
                            e._refImage = t
                        }, e
                    }
                    return (0, r.default)(n, [{
                        key: "shouldComponentUpdate",
                        value: function(e) {
                            return !!e.profilePicThumb.imgFull || (this._handleClose(), !1)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                n = t.contact,
                                a = t.profilePicThumb;
                            return a.imgFull && (e = (0, k.jsx)(v.default, {
                                src: a.imgFull,
                                hasPrivacyChecks: !0,
                                onLoad: this._handleImageLoad,
                                className: x.default.profileViewerImg
                            })), (0, k.jsx)(y.UIE, {
                                displayName: "PhotoViewer",
                                escapable: !0,
                                requestDismiss: this._handleClose,
                                children: (0, k.jsxs)("div", {
                                    className: (0, d.default)("overlay", x.default.container),
                                    onWheel: this._handleScroll,
                                    onClick: this._handleClose,
                                    children: [(0, k.jsxs)("div", {
                                        className: x.default.headerContainer,
                                        children: [(0, k.jsx)("div", {
                                            className: x.default.profileThumb,
                                            children: (0, k.jsx)(p.default, {
                                                image: (0, k.jsx)(m.DetailImage, {
                                                    id: n.id,
                                                    size: 40
                                                }),
                                                theme: "plain",
                                                primary: (0, k.jsx)(g.EmojiText, {
                                                    text: n.formattedUser
                                                })
                                            })
                                        }), (0, k.jsx)("div", {
                                            className: x.default.mediaPanelTools,
                                            children: (0, k.jsx)(_.MenuBar, {
                                                theme: "strong",
                                                children: (0, k.jsx)(_.MenuBarItem, {
                                                    a8nText: "btn-close",
                                                    icon: (0, k.jsx)(b.default, {
                                                        name: "x-viewer"
                                                    }),
                                                    title: c.fbt._("Close", null, {
                                                        hk: "19Jpec"
                                                    }),
                                                    onClick: this._handleClose
                                                })
                                            }, "media-panel-header")
                                        })]
                                    }), (0, k.jsx)("div", {
                                        className: x.default.profileContainer,
                                        dir: "ltr",
                                        children: (0, k.jsx)("div", {
                                            className: x.default.media,
                                            children: (0, k.jsx)(C.default, {
                                                type: "scaleDown",
                                                size: this.state.size,
                                                children: (0, k.jsx)("div", {
                                                    className: x.default.profileViewer,
                                                    ref: this.setRefImage,
                                                    style: this.state.style,
                                                    children: e
                                                })
                                            })
                                        })
                                    })]
                                })
                            })
                        }
                    }]), n
                }(f.Component);
            j.CONCERNS = {
                contact: ["formattedUser", "id"],
                profilePicThumb: ["imgFull"]
            }, j.displayName = "PhotoViewerModal";
            var T = (0, S.default)(j, j.CONCERNS);
            t.default = T
        },
        70486: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.profilePicThumb,
                    n = e.size,
                    a = !t.canSet() && !t.canDelete(),
                    m = (0, s.useState)(!1),
                    g = (0, o.default)(m, 2),
                    v = g[0],
                    _ = g[1],
                    C = (0, d.default)();
                return (0, h.jsx)(c.PhotoPickerLoadable, {
                    type: f.default.PROFILE,
                    id: t.id,
                    attachToChat: !1,
                    pending: v,
                    startImage: t.imgFull,
                    readOnly: a,
                    onImageSet: function(t, n) {
                        var a, o = e.profilePicThumb;
                        _(!0), a = t && n ? (0, p.setProfilePic)(o, t, n) : (0, p.deleteProfilePic)(o), (0, l.default)(a, C).catch((0, i.filteredCatch)(u.ActionError, (function() {
                            __LOG__(3)`ProfileDrawer: failed to set/delete profile image`
                        }))).catch((0, r.catchAbort)((function() {}))).finally((function() {
                            _(!1)
                        }))
                    },
                    size: n
                })
            };
            var o = a(n(63038)),
                r = n(396),
                i = n(15586),
                l = a(n(15584)),
                u = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                            i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                        } a.default = e, n && n.set(e, a);
                    return a
                }(n(8924)),
                s = n(67294),
                d = a(n(22190)),
                c = n(76110),
                f = a(n(49309)),
                p = n(50214),
                h = n(85893);

            function m(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (m = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        59782: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, u.jsx)(r.default, {
                    a8nText: "li-share-link",
                    icon: (0, u.jsx)(l.default, {
                        name: "forward",
                        className: i.default.icon
                    }),
                    onClick: e.onClick,
                    children: o.fbt._("Send link via WhatsApp", null, {
                        hk: "459eKy"
                    })
                })
            };
            var o = n(48360),
                r = a(n(61876)),
                i = a(n(38707)),
                l = a(n(7665)),
                u = n(85893)
        },
        13227: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.text,
                    n = e.isExpandedCaptionText,
                    a = e.onExpandCaptionText,
                    h = t.length > 120 && !n ? (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(i.EmojiText, {
                            formatters: l.Configuration.StatusV3Caption(),
                            text: Array.from(t).slice(0, 119).join("")
                        }), u.default.t(704), (0, d.jsxs)("strong", {
                            children: [" ", o.fbt._("Read more", null, {
                                hk: "2DvSvh"
                            })]
                        })]
                    }) : (0, d.jsx)(i.EmojiText, {
                        formatters: l.Configuration.StatusV3Caption(),
                        text: t
                    });
                return (0, d.jsx)("div", {
                    className: (0, r.default)(c),
                    children: (0, d.jsx)("div", {
                        className: (0, r.default)(p),
                        children: (0, d.jsx)(s.default, {
                            onClick: a,
                            children: (0, d.jsxs)("div", {
                                className: (0, r.default)(f),
                                children: [" ", h, " "]
                            })
                        })
                    })
                })
            };
            var o = n(48360),
                r = a(n(56720)),
                i = n(73008),
                l = n(59333),
                u = a(n(9844)),
                s = a(n(76080)),
                d = n(85893),
                c = {
                    position: "g0rxnol2",
                    width: "ln8gz9je",
                    height: "ppled2lx"
                },
                f = {
                    paddingTop: "tvsr5v2h",
                    paddingEnd: "clw8hvz5",
                    paddingBottom: "ja2dfh8z",
                    paddingStart: "p2tfx3a3",
                    hyphens: "ndq9n57b",
                    wordBreak: "cw3vfol9"
                },
                p = {
                    position: "lhggkp7q",
                    width: "ln8gz9je",
                    bottom: "jxacihee",
                    zIndex: "px10qoeu",
                    marginEnd: "k1jo73ug",
                    marginStart: "isfiuinm",
                    color: "lxozqee9",
                    textAlign: "qfejxiq4",
                    backgroundColor: "tp4bj0rl",
                    cursor: "ajgl1lbb",
                    fontSize: "cqiun4t2",
                    lineHeight: "q6wg26sa"
                }
        },
        11326: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                o = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = o(n(63038)),
                i = n(15586),
                l = o(n(65668)),
                u = n(48360),
                s = n(67294),
                d = o(n(56720)),
                c = o(n(22190)),
                f = n(65901),
                p = n(43835),
                h = o(n(556)),
                m = (n(98169), n(10508), n(11125)),
                g = o(n(454)),
                v = n(68985),
                _ = n(32012),
                C = o(n(9844)),
                x = o(n(50507)),
                S = n(4667),
                b = o(n(83357)),
                y = o(n(55492)),
                k = n(524),
                j = n(43966),
                T = o(n(31522)),
                P = o(n(7665)),
                E = n(92428),
                I = n(16835),
                w = o(n(93820)),
                O = n(85893),
                A = {
                    container: {
                        position: "lhggkp7q",
                        right: "grt5ktjy",
                        bottom: "f7v6by6u",
                        left: "tukmaf4q",
                        zIndex: "nbczt5ty",
                        width: "b1qcobdr",
                        maxWidth: "ckq3dtew",
                        marginRight: "oc1ubkv0",
                        marginLeft: "jzfo78pl",
                        paddingBottom: "aiput80m",
                        borderTopStartRadius: "llnowng2",
                        borderTopEndRadius: "ap6veyk2",
                        borderBottomEndRadius: "dc5qina8",
                        borderBottomStartRadius: "kfr1vweg",
                        transition: "iw1tz1w0"
                    },
                    popupPanel: {
                        right: "grt5ktjy",
                        bottom: "jxacihee",
                        left: "tukmaf4q",
                        zIndex: "thghmljt",
                        paddingRight: "pppsat04",
                        paddingBottom: "przvwfww",
                        marginRight: "oc1ubkv0",
                        marginLeft: "jzfo78pl",
                        borderTopStartRadius: "bbr44loe",
                        borderTopEndRadius: "ooj5yc5b",
                        borderBottomEndRadius: "m8i16etx",
                        borderBottomStartRadius: "cw0ivh8j",
                        willChange: "d6finlhe"
                    },
                    popupPanelNonRichStatusReplies: {
                        width: "ma66mwvu",
                        maxWidth: "e91fykn7",
                        backgroundColor: "rv6u8h8g"
                    },
                    popupPanelRichStatusReplies: {
                        width: "t9hu7tsx",
                        maxWidth: "ckq3dtew",
                        paddingTop: "emrlamx0"
                    },
                    wrapper: {
                        zIndex: "nbczt5ty",
                        display: "p357zi0d",
                        flexDirection: "sap93d0t",
                        paddingRight: "fyqm2y5z",
                        paddingLeft: "tw6b5hi5",
                        paddingTop: "emrlamx0"
                    },
                    iconButton: {
                        display: "l7jjieqr",
                        alignSelf: "rwlvdxyg",
                        marginTop: "opp68qpq",
                        marginBottom: "rkip0xea",
                        marginStart: "lhp4ctto",
                        marginEnd: "ntr8esoy"
                    },
                    iconButtonColourFocused: {
                        color: "svlsagor"
                    },
                    iconButtonColourOutOfFocus: {
                        color: "lxozqee9"
                    },
                    square26Svg: {
                        width: "ekdr8vow",
                        height: "dhq51u3o"
                    },
                    lineWrapper: {
                        position: "g0rxnol2",
                        top: "qq0sjtgm",
                        left: "tukmaf4q",
                        display: "l7jjieqr",
                        width: "crlpoz9d"
                    },
                    inputContainer: {
                        boxSizing: "cm280p3y",
                        width: "ln8gz9je",
                        minHeight: "gc15jzxb",
                        paddingTop: "eujn52yf",
                        paddingEnd: "l9g3jx6n",
                        paddingBottom: "ckm995li",
                        paddingStart: "lyvj5e2u",
                        borderTopStartRadius: "bbr44loe",
                        borderTopEndRadius: "ooj5yc5b",
                        borderBottomEndRadius: "m8i16etx",
                        borderBottomStartRadius: "cw0ivh8j"
                    },
                    containerInFocus: {
                        backgroundColor: "rv6u8h8g"
                    },
                    inputInFocus: {
                        backgroundColor: "f6cvynhn",
                        borderTopColor: "rsltai19",
                        borderEndColor: "boshimb4",
                        borderBottomColor: "lw07f11l",
                        borderStartColor: "jy0rc3ak",
                        borderTopStyle: "d1poss59",
                        borderEndStyle: "gyj32ejw",
                        borderBottomStyle: "cmcp1to6",
                        borderStartStyle: "eg0col54",
                        borderTopWidth: "gofg5ll1",
                        borderEndWidth: "p7waza29",
                        borderBottomWidth: "oteuebma",
                        borderStartWidth: "mzoqfcbu"
                    },
                    inputOutOfFocus: {
                        backgroundColor: "kx1rlajt"
                    },
                    panelButtons: {
                        paddingEnd: "mgssq8h7"
                    }
                };

            function L(e, t) {
                var n = (0, s.useState)(!1),
                    o = (0, r.default)(n, 2),
                    L = o[0],
                    M = o[1],
                    N = (0, s.useState)(void 0),
                    R = (0, r.default)(N, 2),
                    D = R[0],
                    B = R[1],
                    V = (0, s.useState)(void 0),
                    F = (0, r.default)(V, 2),
                    W = F[0],
                    U = F[1],
                    H = (0, s.useState)(null),
                    G = (0, r.default)(H, 2),
                    z = G[0],
                    q = G[1],
                    K = (0, s.useState)(300),
                    Q = (0, r.default)(K, 2),
                    Y = Q[0],
                    $ = Q[1],
                    J = !1,
                    X = null,
                    Z = (0, s.useRef)(null),
                    ee = (0, s.useRef)(null),
                    te = (0, s.createRef)(),
                    ne = (0, c.default)();
                (0, s.useEffect)((function() {
                    (0, v.findChat)(e.msg.sender).then((function(e) {
                        ne.aborted || U(e)
                    }))
                }), []);
                var ae = function(e, t, n) {
                    return Boolean(e) || t || Boolean(n)
                }(D, L, z);
                (0, s.useEffect)((function() {
                    ae ? e.pause() : e.play()
                }), [ae]);
                var oe = function() {
                        return ae
                    },
                    re = function() {
                        var e;
                        null === (e = Z.current) || void 0 === e || e.focus()
                    },
                    ie = function() {
                        q(null), re()
                    },
                    le = function() {
                        B(void 0), q(null)
                    },
                    ue = function() {
                        return W ? a.resolve(W) : (0, v.findChat)(e.msg.sender)
                    },
                    se = function(t, n) {
                        var a;
                        e.statusReplyMetric.statusReplyMessageType = n;
                        var o = (0, E.genId)();
                        f.Cmd.openToast((0, O.jsx)(E.Toast, {
                            msg: u.fbt._("Sending reply…", null, {
                                hk: "WYxWt"
                            }),
                            id: o
                        })), t.then((function() {
                            e.statusReplyMetric.statusReplyResult = x.default.STATUS_REPLY_RESULT.OK, e.onSend()
                        })).catch((0, i.filteredCatch)(h.default, (function() {
                            W && (f.Cmd.openToast((0, O.jsx)(E.Toast, {
                                msg: C.default.t(852, {
                                    contact: W.contact.formattedName
                                }),
                                id: o
                            })), e.statusReplyMetric.statusReplyResult = x.default.STATUS_REPLY_RESULT.ERROR_UNKNOWN)
                        }))), le(), null === (a = Z.current) || void 0 === a || a.reset(), e.dismissReply()
                    },
                    de = function(t) {
                        if (t.stopPropagation(), t.preventDefault(), Z.current) {
                            var n = Z.current.value.trim();
                            n.length && ue().then((function(t) {
                                var a = (0, j.sendTextMsgToChat)(t, (0, g.default)(n), {
                                    quotedMsg: e.msg
                                });
                                se(a, x.default.STATUS_REPLY_MESSAGE_TYPE.TEXT)
                            }))
                        }
                    },
                    ce = function() {
                        return L
                    },
                    fe = function() {
                        M(!1), le()
                    },
                    pe = function() {
                        var e;
                        null === (e = ee.current) || void 0 === e || e.restoreFocus()
                    },
                    he = function(e) {
                        null == e ? ie() : (q(e), M(!0))
                    };
                (0, s.useImperativeHandle)(t, (function() {
                    return {
                        isFocused: ce,
                        isPaused: oe,
                        restoreFocus: re,
                        blur: fe
                    }
                }));
                var me = ce() || null != z;
                (0, s.useEffect)((function() {
                    var e;
                    null === (e = Z.current) || void 0 === e || e.setTheme(me ? "rich-status-reply" : "status-reply")
                }), [me]);
                var ge = null != Y && null != z ? (0, O.jsx)(y.default, {
                        onResize: function(e) {
                            $(e.width)
                        },
                        children: (0, O.jsx)(p.ComposeBoxPanelsLoadable, {
                            displayCache: X,
                            width: Y,
                            onDisplayCache: function(e) {
                                X = e
                            },
                            onEmoji: function(e) {
                                var t = Z.current;
                                t && t.replaceSelection(e)
                            },
                            onFocusRelease: function() {},
                            onGif: function() {},
                            onPanelChange: he,
                            onSticker: function(t, n) {
                                t.isCreateButton || ue().then((function(a) {
                                    var o = (0, k.sendStickerToChat)(a, t, {
                                        stickerSendOrigin: n,
                                        quotedMsg: e.msg
                                    });
                                    se(o, x.default.STATUS_REPLY_MESSAGE_TYPE.STICKER)
                                }))
                            },
                            requestDismiss: ie,
                            forwardedRef: function(e) {
                                te.current = e
                            },
                            selectedPanelId: z,
                            theme: S.PanelsTheme.StatusReplyComposeBox
                        })
                    }) : null,
                    ve = D ? (0, O.jsx)(I.UIE, {
                        displayName: "EmojiPicker",
                        escapable: !0,
                        requestFocus: pe,
                        children: (0, O.jsx)("div", {
                            children: (0, O.jsx)(I.UIE, {
                                displayName: "EmojiPicker",
                                escapable: !0,
                                popable: !0,
                                requestDismiss: function() {
                                    B(void 0), re()
                                },
                                requestFocus: pe,
                                children: (0, O.jsx)(w.default, {
                                    contextMenu: D
                                })
                            })
                        })
                    }) : null,
                    _e = W && (me || L && !D) ? (0, O.jsx)(I.UIE, {
                        displayName: "StatusV3Reply",
                        escapable: !0,
                        requestDismiss: e.dismissReply,
                        children: (0, O.jsx)("div", {
                            className: (0, d.default)(A.popupPanel, A.popupPanelRichStatusReplies),
                            children: (0, O.jsx)(b.default, {
                                msg: e.msg.safe(),
                                theme: "statusV3",
                                chat: W
                            }, e.msg.id.toString())
                        })
                    }) : null,
                    Ce = (0, O.jsx)("div", {
                        className: (0, d.default)(A.panelButtons),
                        children: (0, O.jsx)(S.ComposeBoxPanelsMenu, {
                            selectedPanelId: z,
                            onChange: he,
                            theme: S.PanelsTheme.StatusReplyComposeBox,
                            buttonStyle: [me ? A.iconButtonColourFocused : A.iconButtonColourOutOfFocus]
                        })
                    });
                return (0, O.jsxs)("div", {
                    className: (0, d.default)(A.container, me && A.containerInFocus),
                    children: [(0, O.jsx)(l.default, {
                        transitionName: "status-v3-panel",
                        transitionAppear: !0,
                        children: ge
                    }), (0, O.jsx)(l.default, {
                        transitionName: "status-v3-quoted-msg",
                        transitionAppear: !0,
                        children: _e
                    }), (0, O.jsxs)("div", {
                        className: (0, d.default)(A.wrapper),
                        children: [Ce, (0, O.jsxs)("div", {
                            className: (0, d.default)(A.lineWrapper),
                            children: [(0, O.jsx)(T.default.EmojiSuggestions, {
                                theme: m.ThemeOptions.EMOJI_INPUT,
                                onSkinTonePicker: function(e) {
                                    J = e
                                }
                            }), (0, O.jsx)(_.HotKeys, {
                                className: (0, d.default)(A.inputContainer, me ? A.inputInFocus : A.inputOutOfFocus),
                                onClick: re,
                                children: (0, O.jsx)(T.default, {
                                    ref: Z,
                                    theme: "status-reply",
                                    spellCheck: !0,
                                    onFocus: function() {
                                        M(!0)
                                    },
                                    onBlur: function() {
                                        J || (document.activeElement, document.body)
                                    },
                                    onEnter: de,
                                    placeholder: u.fbt._("Type a reply…", null, {
                                        hk: "3bHadc"
                                    }),
                                    multiline: !0
                                })
                            })]
                        }), (0, O.jsx)("button", {
                            className: (0, d.default)(A.iconButton, me ? A.iconButtonColourFocused : A.iconButtonColourOutOfFocus),
                            onClick: de,
                            children: (0, O.jsx)(P.default, {
                                name: "send",
                                directional: !0,
                                iconXstyle: A.square26Svg
                            })
                        }), ve]
                    })]
                })
            }
            var M = (0, s.forwardRef)(L);
            t.default = M
        },
        97965: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StatusV3Img = function(e) {
                var t = e.msg,
                    n = e.onMouseDown,
                    a = e.onMouseUp,
                    o = e.play,
                    l = e.markRead,
                    u = e.statusV3,
                    f = e.pause,
                    p = (0, i.useModelValues)(e.mediaData, ["mediaStage", "renderableUrl", "preview", "fullWidth", "fullHeight", "aspectRatio", "fullPreviewData"]);
                return (0, r.useEffect)((function() {
                    return p.mediaStage !== s.MEDIA_DATA_STAGE.RESOLVED && t.downloadMedia({
                            downloadEvenIfExpensive: !0,
                            rmrReason: c.default.WEBC_RMR_REASON_CODE.STATUS_V3,
                            isUserInitiated: !0
                        }),
                        function() {
                            f()
                        }
                }), []), (0, r.useEffect)((function() {
                    o(), p.mediaStage === s.MEDIA_DATA_STAGE.RESOLVED && l(u, t)
                }), [l, p.mediaStage, t, o, u]), (0, g.jsx)(d.default, {
                    mediaData: p,
                    placeholderRenderer: function() {
                        return (0, g.jsx)(_, {
                            mediaData: p,
                            onMouseDown: n,
                            onMouseUp: a
                        })
                    },
                    downloadMedia: function() {
                        return t.downloadMedia({
                            downloadEvenIfExpensive: !0,
                            rmrReason: c.default.WEBC_RMR_REASON_CODE.STATUS_V3,
                            isUserInitiated: !0
                        })
                    },
                    renderProgressively: !0,
                    children: function(e) {
                        return (0, g.jsx)(v, {
                            src: e,
                            msg: t,
                            mediaData: p,
                            onMouseUp: a,
                            onMouseDown: n
                        })
                    }
                })
            };
            var o = a(n(94184)),
                r = n(67294),
                i = n(50857),
                l = a(n(3228)),
                u = a(n(22935)),
                s = n(41655),
                d = a(n(47251)),
                c = a(n(50507)),
                f = a(n(58497)),
                p = a(n(57393)),
                h = a(n(33348)),
                m = a(n(96420)),
                g = n(85893);

            function v(e) {
                var t, n = e.src,
                    a = e.msg,
                    r = e.mediaData,
                    i = e.onMouseDown,
                    s = e.onMouseUp,
                    d = (0, o.default)(m.default.playerContent, m.default.v3Image);
                return (0, g.jsx)("div", {
                    className: d,
                    onMouseDown: i,
                    onMouseUp: s,
                    onDragEnd: s,
                    children: (0, g.jsx)(f.default, {
                        type: "contain",
                        size: {
                            width: r.fullWidth,
                            height: r.fullHeight
                        },
                        children: (0, g.jsxs)("div", {
                            className: m.default.mediaViewer,
                            children: [(0, g.jsx)(u.default, {
                                src: n,
                                disableContextMenu: !0
                            }), a.interactiveAnnotations && a.interactiveAnnotations.length > 0 && (0, g.jsx)(l.default, {
                                annotations: a.interactiveAnnotations,
                                onTooltipDisplay: i,
                                onTooltipDismiss: s
                            }), (null === (t = a.actionLink) || void 0 === t ? void 0 : t.buttonTitle) && a.actionLink.url && (0, g.jsx)("div", {
                                className: m.default.actionLink,
                                children: (0, g.jsx)(h.default, {
                                    text: a.actionLink.buttonTitle,
                                    url: a.actionLink.url
                                })
                            }), null]
                        })
                    })
                })
            }

            function _(e) {
                var t, n = e.mediaData,
                    a = e.onMouseDown,
                    r = e.onMouseUp,
                    i = (0, o.default)(m.default.playerContent, m.default.v3Image, m.default.loading);
                return (0, g.jsx)("div", {
                    className: i,
                    onMouseDown: a,
                    onMouseUp: r,
                    children: (0, g.jsx)(f.default, {
                        type: "contain",
                        size: {
                            width: n.aspectRatio,
                            height: 1
                        },
                        children: (0, g.jsx)(u.default, {
                            src: null !== (t = C(n)) && void 0 !== t ? t : ""
                        })
                    })
                })
            }

            function C(e) {
                return e ? e.fullPreviewData ? e.fullPreviewData.url() : e.preview instanceof p.default ? e.preview.url() : null : null
            }
        },
        47413: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StatusV3Player = function(e) {
                var t, n, a = e.msg,
                    l = e.mediaData,
                    f = e.statusV3,
                    h = e.msgIdx,
                    C = e.sessionId,
                    y = e.rowIdx,
                    R = e.onNext,
                    D = e.markRead,
                    B = e.closeStatusViewer,
                    $ = (0, b.default)(),
                    oe = (0, v.default)((function() {
                        return (0, U.setupStatusV3Controller)(l, a)
                    })),
                    re = (0, m.useRef)(!0),
                    ie = (0, v.default)((function() {
                        return new A.default.WebcStatusView({
                            webcStatusLoaded: !1,
                            webcStatusReplyCount: 0,
                            webcStatusViewT: 0
                        })
                    })),
                    le = (0, v.default)((function() {
                        return new A.default.StatusReply({
                            statusReplyResult: A.default.STATUS_REPLY_RESULT.CANCELLED
                        })
                    })),
                    ue = (0, m.useRef)(null),
                    se = (0, m.useRef)(null),
                    de = (0, m.useRef)(null),
                    ce = (0, m.useRef)(null),
                    fe = (0, m.useRef)(null),
                    pe = (0, m.useRef)(null),
                    he = (0, m.useRef)(null),
                    me = (0, m.useState)(!1),
                    ge = (0, r.default)(me, 2),
                    ve = ge[0],
                    _e = ge[1],
                    Ce = (0, m.useState)(!1),
                    xe = (0, r.default)(Ce, 2),
                    Se = xe[0],
                    be = xe[1],
                    ye = (0, m.useState)(!1),
                    ke = (0, r.default)(ye, 2),
                    je = ke[0],
                    Te = ke[1],
                    Pe = (0, m.useState)(!1),
                    Ee = (0, r.default)(Pe, 2),
                    Ie = Ee[0],
                    we = Ee[1],
                    Oe = (0, m.useState)(!1),
                    Ae = (0, r.default)(Oe, 2),
                    Le = Ae[0],
                    Me = Ae[1],
                    Ne = (0, m.useState)(!1),
                    Re = (0, r.default)(Ne, 2),
                    De = Re[0],
                    Be = Re[1],
                    Ve = (0, m.useState)(null),
                    Fe = (0, r.default)(Ve, 2),
                    We = Fe[0],
                    Ue = Fe[1],
                    He = function() {
                        var e = pe.current,
                            t = ce.current;
                        if (e && t) {
                            var n = e.getBoundingClientRect(),
                                a = t.getBoundingClientRect();
                            !I.default.isRTL() && n.right > a.left - 5 || I.default.isRTL() && n.left < a.right + 5 ? _e(!0) : _e(!1)
                        }
                    },
                    Ge = (0, g.default)(He),
                    ze = (0, S.default)((function(e) {
                        if (!l || l.mediaStage === O.MEDIA_DATA_STAGE.RESOLVED) {
                            var t = ue.current;
                            null != t && (ie.current.webcStatusViewT += Math.round(window.performance.now() - t), ue.current = void 0), oe.current.pause(), se.current = e
                        }
                    })),
                    qe = (0, S.default)((function() {
                        var e;
                        if (l) {
                            if (l.mediaStage !== O.MEDIA_DATA_STAGE.RESOLVED) return;
                            ie.current.webcStatusLoadT || (ie.current.markWebcStatusLoadT(), ie.current.webcStatusLoaded = !0)
                        }(null === (e = de.current) || void 0 === e ? void 0 : e.isPaused()) || re.current && (ue.current = window.performance.now(), oe.current.resume())
                    })),
                    Ke = function() {
                        var e, t = he.current;
                        t && d.default.focus(t), null === (e = de.current) || void 0 === e || e.blur()
                    },
                    Qe = function(e) {
                        var t, n;
                        (e && (e.stopPropagation(), e.preventDefault()), f.contact.isMe) || ((null === (t = de.current) || void 0 === t ? void 0 : t.isFocused()) ? Ke() : null === (n = de.current) || void 0 === n || n.restoreFocus())
                    },
                    Ye = function() {
                        k.Cmd.closeModal(), qe(), be(!1)
                    },
                    $e = (0, S.default)((function() {
                        ze(Z.MOUSEDOWN)
                    })),
                    Je = (0, S.default)((function() {
                        qe()
                    }));
                (0, m.useLayoutEffect)((function() {
                    var e;
                    if (null != C) {
                        var t;
                        f.contact.isMe ? (t = A.default.WEBC_STATUS_ROW_SECTION.MY, L.MsgInfoCollection.find(a.id).then((function(e) {
                            $.aborted || Ue(e.read)
                        })).catch((0, i.filteredCatch)(u.EphemeralDrop, (function() {})))) : t = f.contact.statusMute ? A.default.WEBC_STATUS_ROW_SECTION.MUTED : f.hasUnread ? A.default.WEBC_STATUS_ROW_SECTION.RECENT : A.default.WEBC_STATUS_ROW_SECTION.VIEWED;
                        var n, o = f.msgs.length - 1 - h < f.unreadCount;
                        l ? n = l.isGif ? A.default.WEBC_STATUS_MEDIA_TYPE.GIF : "video" === l.type ? A.default.WEBC_STATUS_MEDIA_TYPE.VIDEO : A.default.WEBC_STATUS_MEDIA_TYPE.IMAGE : (n = a.getLinks().length ? A.default.WEBC_STATUS_MEDIA_TYPE.URL : A.default.WEBC_STATUS_MEDIA_TYPE.TEXT, ie.current.markWebcStatusLoadT(), ie.current.webcStatusLoaded = !0), ie.current.webcStatusSessionId = C, ie.current.webcStatusRowSection = t, ie.current.webcStatusRowIndex = y || 0, ie.current.webcStatusMediaType = n, ie.current.webcStatusUnread = o, le.current.statusSessionId = C, (0, P.smbStatusLoggingEnabled)() && (ie.current.webcIsPosterBiz = f.contact.isBusiness, le.current.isPosterBiz = f.contact.isBusiness, ie.current.webcIsPostersAddressBook = f.contact.isMyContact, le.current.isPosterInAddressBook = f.contact.isMyContact)
                    }
                    null === (e = oe.current) || void 0 === e || e.addListeners((function(e, t) {
                        var n = fe.current;
                        null == n || n.handleStart(e, t), Te(!1), se.current = null
                    }), (function() {
                        var e = fe.current;
                        null == e || e.handlePause(), Te(!0)
                    }), (function() {
                        var e = fe.current;
                        null == e || e.handleEnded().then((function() {
                            $.aborted || R()
                        }))
                    }), (function(e, t) {
                        we(t), Me(e)
                    })), l ? (qe(), (null == l ? void 0 : l.mediaStage) === O.MEDIA_DATA_STAGE.RESOLVED && D(f, a)) : (a.type, c.MSG_TYPE.CHAT, qe(), D(f, a));
                    var r = he.current;
                    null == r || r.focus(), He()
                }), []), (0, x.default)((function() {
                    if (oe.current.removeListeners(), null != C) {
                        var e = Math.round(oe.current.duration || 0);
                        ie.current.webcStatusPlaybackT = e;
                        var t = ue.current;
                        null != t && (ie.current.webcStatusViewT += Math.round(window.performance.now() - t), ue.current = void 0), ie.current.commit(), le.current.commit()
                    }
                    X(f.contact, "statusViews")
                }));
                var Xe, Ze, et = (0, S.default)(D);
                if ((0, _.useListener)(window, "focus", (function() {
                        re.current = !0, Se || se.current !== Z.WINDOW_BLUR || qe()
                    })), (0, _.useListener)(window, "blur", (function() {
                        re.current = !1, je || ze(Z.WINDOW_BLUR)
                    })), (0, _.useListener)(window, "resize", Ge), l) {
                    var tt = ae(l);
                    tt && (Xe = {
                        backgroundImage: `url(${tt})`
                    })
                } else if (a.type === c.MSG_TYPE.CHAT) {
                    var nt = a.statusV3TextBg;
                    Xe = {
                        backgroundColor: nt
                    }
                }
                if (l) switch (l.type) {
                    case w.default.TYPE.IMAGE:
                        Ze = (0, J.jsx)(W.StatusV3Img, {
                            msg: a,
                            statusV3: f,
                            mediaData: l,
                            markRead: et,
                            play: qe,
                            pause: ze,
                            onMouseDown: $e,
                            onMouseUp: Je
                        });
                        break;
                    case w.default.TYPE.VIDEO:
                        Ze = (0, J.jsx)(ee, {
                            msg: a,
                            statusV3: f,
                            mediaData: l,
                            markRead: et,
                            play: qe,
                            pause: ze,
                            playbackController: oe.current,
                            onMouseDown: $e,
                            onMouseUp: Je
                        });
                        break;
                    default:
                        __LOG__(3)`Invalid status v3 image type: ${l.type}`
                } else Ze = a.type === c.MSG_TYPE.CHAT ? (0, J.jsx)(K.StatusV3Text, {
                    msg: a,
                    onMouseDown: $e,
                    onMouseUp: Je
                }) : (0, J.jsx)(te, {
                    onMouseDown: $e,
                    onMouseUp: Je
                });
                var at, ot, rt = !0,
                    it = (0, J.jsx)("div", {
                        ref: ce,
                        children: (0, J.jsx)(z.default, {
                            ref: fe,
                            current: e.msgIdx,
                            total: e.totalMsgs,
                            hasMediaControls: rt,
                            onClick: e.onClickProgressBar
                        })
                    }),
                    lt = a.isSentByMe || f.contact.isPSA,
                    ut = (0, p.default)(H.default.profile, (t = {}, (0, o.default)(t, H.default.nonClickProfile, lt), (0, o.default)(t, H.default.profileNarrow, ve), (0, o.default)(t, H.default.profileWithMediaControls, rt), (0, o.default)(t, H.default.profileMac, !I.default.isRTL()), t)),
                    st = (0, p.default)(H.default.profile, H.default.measuringProfile, (0, o.default)({}, H.default.profileMac, !I.default.isRTL())),
                    dt = function(e) {
                        return e.stopPropagation()
                    },
                    ct = (0, J.jsx)(M.ContactName, {
                        className: H.default.msgInfoName,
                        contact: f.contact,
                        you: !0,
                        ellipsify: !0,
                        showBusinessCheckmark: f.contact.showBusinessCheckmarkAsPrimary
                    }),
                    ft = (0, J.jsxs)("div", {
                        className: ut,
                        onClick: lt ? null : function() {
                            var e = f.contact.id;
                            (0, T.findChat)(e).then((function(e) {
                                return k.Cmd.openChatBottom(e)
                            })).then((function() {
                                B(!0)
                            }))
                        },
                        children: [(0, J.jsx)("div", {
                            className: H.default.playerAvatar,
                            children: (0, J.jsx)(j.DetailImage, {
                                id: f.contact.id,
                                theme: "status_v3",
                                size: 40
                            })
                        }), (0, J.jsxs)("div", {
                            className: H.default.msgInfo,
                            children: [(0, J.jsx)("div", {
                                className: (0, p.default)((n = {}, (0, o.default)(n, H.default.msgInfoNameWrapper, rt), (0, o.default)(n, H.default.msgInfoNamePSA, f.contact.isPSA), n)),
                                children: ct
                            }), !f.contact.isPSA && (0, J.jsx)("div", {
                                className: H.default.timestamp,
                                children: s.Clock.relativeDateAndTimeStr(a.t)
                            })]
                        }), (0, J.jsx)("div", {
                            className: H.default.statusMediaControls,
                            onClick: dt,
                            children: (0, J.jsx)(G.default, {
                                isPaused: je,
                                hasAudio: (null == l ? void 0 : l.type) === w.default.TYPE.VIDEO && Le,
                                isMuted: Ie,
                                onPlay: qe,
                                onPause: function() {
                                    ze(Z.PAUSE_BUTTON)
                                },
                                onMute: function() {
                                    oe.current.mute(), we(!0)
                                },
                                onUnmute: function() {
                                    oe.current.unmute(), we(!1)
                                }
                            })
                        })]
                    }),
                    pt = (0, J.jsxs)("div", {
                        ref: pe,
                        className: st,
                        children: [(0, J.jsx)("div", {
                            className: H.default.playerAvatar,
                            children: (0, J.jsx)(j.DetailImage, {
                                id: f.contact.id,
                                theme: "status_v3",
                                size: 40
                            })
                        }), (0, J.jsxs)("div", {
                            className: H.default.msgInfo,
                            children: [ct, (0, J.jsx)("div", {
                                className: H.default.timestamp,
                                children: s.Clock.relativeDateAndTimeStr(a.t)
                            })]
                        })]
                    });
                l && (at = (0, J.jsx)(ne, {
                    mediaData: l
                }));
                f.contact.isMe || f.contact.isPSA || (ot = (0, J.jsx)(E.HotKeys, {
                    handlers: {
                        left: dt,
                        right: dt
                    },
                    onClick: function(e) {
                        var t, n;
                        e && (e.stopPropagation(), e.preventDefault()), (null === (t = de.current) || void 0 === t ? void 0 : t.isFocused()) && (null === (n = de.current) || void 0 === n || n.restoreFocus())
                    },
                    children: (0, J.jsx)(F.default, {
                        msg: e.msg,
                        dismissReply: Ke,
                        onSend: function() {
                            ie.current.webcStatusReplyCount++, X(f.contact, "statusReplies")
                        },
                        pause: ze,
                        play: qe,
                        ref: function(e) {
                            de.current = e
                        },
                        statusReplyMetric: le.current
                    })
                }));
                var ht, mt, gt = f.contact.isMe && We ? (0, J.jsx)("div", {
                        className: H.default.seen,
                        children: (0, J.jsx)(q.default, {
                            seenCount: We.length,
                            onClick: function() {
                                We && (k.Cmd.openModal((0, J.jsx)(Q.default, {
                                    onClose: Ye,
                                    viewers: We
                                })), ze(Z.OPEN_SEE_VIEWERS_MODAL), be(!0))
                            }
                        })
                    }) : null,
                    vt = (0, p.default)(H.default.playerBackground, (0, o.default)({}, H.default.media, l)),
                    _t = (0, p.default)(H.default.progressBackdrop, (0, o.default)({}, H.default.progressBarBackdropNarrow, ve));
                a.type !== c.MSG_TYPE.CHAT && (ht = (0, J.jsx)("div", {
                    className: _t
                }));
                a.type !== c.MSG_TYPE.CHAT && "string" == typeof a.caption && (mt = (0, J.jsx)("div", {
                    className: H.default.caption,
                    children: (0, J.jsx)(N.default, {
                        type: "contain",
                        size: {
                            width: l.fullWidth,
                            height: l.fullHeight
                        },
                        children: (0, J.jsx)(V.default, {
                            text: a.caption,
                            isExpandedCaptionText: De,
                            onExpandCaptionText: function() {
                                Be(!De)
                            }
                        })
                    })
                }));
                return (0, J.jsx)(Y.UIE, {
                    displayName: "StatusV3Player",
                    escapable: !0,
                    requestDismiss: function(t) {
                        t || e.closeStatusViewer()
                    },
                    requestFocus: Ke,
                    children: (0, J.jsx)(E.HotKeys, {
                        handlers: {
                            tab: Qe,
                            "shift+tab": Qe
                        },
                        onClick: Ke,
                        children: (0, J.jsxs)("div", {
                            className: H.default.playerWrapper,
                            tabIndex: -1,
                            ref: he,
                            children: [pt, ft, ht, it, (0, J.jsx)("div", {
                                className: vt,
                                style: Xe
                            }), Ze, mt, at, gt, ot]
                        }, a.id.toString())
                    })
                })
            };
            var o = a(n(59713)),
                r = a(n(63038)),
                i = n(15586),
                l = n(79746),
                u = n(73435),
                s = n(73466),
                d = a(n(11845)),
                c = n(40787),
                f = n(43828),
                p = a(n(94184)),
                h = n(48360),
                m = n(67294),
                g = a(n(1323)),
                v = a(n(62905)),
                _ = n(91285),
                C = n(50857),
                x = a(n(9378)),
                S = a(n(44588)),
                b = a(n(22190)),
                y = a(n(3228)),
                k = n(65901),
                j = n(66834),
                T = n(68985),
                P = n(2629),
                E = n(32012),
                I = a(n(9844)),
                w = a(n(72397)),
                O = n(41655),
                A = a(n(50507)),
                L = n(29289),
                M = n(1191),
                N = a(n(58497)),
                R = a(n(57393)),
                D = n(85651),
                B = a(n(33348)),
                V = a(n(13227)),
                F = a(n(11326)),
                W = n(97965),
                U = n(84176),
                H = a(n(96420)),
                G = a(n(37905)),
                z = a(n(3495)),
                q = a(n(65)),
                K = n(15097),
                Q = a(n(50674)),
                Y = n(16835),
                $ = a(n(38979)),
                J = n(85893);

            function X(e, t) {
                (0, P.btmThreadsLoggingEnabled)() && !e.isMe && (0, T.findChat)(e.id).then((function(e) {
                    (0, f.handleActivitiesForChatThreadLogging)([{
                        activityType: t,
                        ts: (0, l.unixTime)(),
                        chatId: e.id
                    }])
                }))
            }
            var Z = n(76672).Mirrored(["PAUSE_BUTTON", "MOUSEDOWN", "WINDOW_BLUR", "OPEN_SEE_VIEWERS_MODAL"]);

            function ee(e) {
                var t, n, a = e.msg,
                    o = e.onMouseDown,
                    r = e.onMouseUp,
                    i = e.playbackController,
                    l = e.play,
                    u = e.markRead,
                    s = e.statusV3,
                    d = e.pause,
                    c = (0, m.useRef)(null),
                    f = (0, C.useModelValues)(e.mediaData, ["preview", "mediaStage", "fullWidth", "fullHeight", "streamable", "fullPreviewData"]);
                (0, m.useEffect)((function() {
                    f.streamable || f.isStreamable() || a.downloadMedia({
                        downloadEvenIfExpensive: !0,
                        rmrReason: A.default.WEBC_RMR_REASON_CODE.STATUS_V3,
                        isUserInitiated: !0
                    })
                }), []), (0, x.default)((function() {
                    d()
                }));
                var h = (0, S.default)((function(e) {
                    c.current = e.current, i.setVideo(c.current)
                }));
                (0, m.useEffect)((function() {
                    l(), f.mediaStage === O.MEDIA_DATA_STAGE.RESOLVED && u(s, a)
                }), [u, f.mediaStage, a, l, s]);
                var g = f.mediaStage !== O.MEDIA_DATA_STAGE.RESOLVED,
                    v = (0, p.default)(H.default.playerContent, H.default.v3Video, {
                        loading: g
                    });
                return (0, J.jsx)("div", {
                    className: v,
                    onMouseDown: o,
                    onMouseUp: r,
                    children: (0, J.jsx)(N.default, {
                        type: "contain",
                        size: {
                            width: f.fullWidth,
                            height: f.fullHeight
                        },
                        children: (0, J.jsxs)("div", {
                            className: H.default.mediaViewer,
                            children: [(0, J.jsx)($.default, {
                                msg: a,
                                mediaData: f,
                                autoPlay: !0,
                                refVideo: h,
                                poster: null !== (t = ae(f)) && void 0 !== t ? t : "",
                                disableContextMenu: !0,
                                children: I.default.t(808)
                            }), a.interactiveAnnotations && a.interactiveAnnotations.length > 0 && (0, J.jsx)(y.default, {
                                annotations: a.interactiveAnnotations,
                                onTooltipDisplay: e.onMouseDown,
                                onTooltipDismiss: e.onMouseUp
                            }), (null === (n = a.actionLink) || void 0 === n ? void 0 : n.buttonTitle) && a.actionLink.url && (0, J.jsx)("div", {
                                className: H.default.actionLink,
                                children: (0, J.jsx)(B.default, {
                                    text: a.actionLink.buttonTitle,
                                    url: a.actionLink.url
                                })
                            }), null]
                        })
                    })
                })
            }

            function te(e) {
                return (0, J.jsx)("div", {
                    className: H.default.playerContent,
                    onMouseDown: e.onMouseDown,
                    onMouseUp: e.onMouseUp,
                    children: (0, J.jsx)("div", {
                        className: H.default.unknown,
                        children: h.fbt._("You received a status, but your version of WhatsApp doesn't support it.", null, {
                            hk: "RNPf0"
                        })
                    })
                })
            }

            function ne(e) {
                return (0, C.useModelValues)(e.mediaData, ["mediaStage"]).mediaStage !== O.MEDIA_DATA_STAGE.RESOLVED ? (0, J.jsx)("div", {
                    className: H.default.mediaStateControls,
                    children: (0, J.jsx)("button", {
                        className: "icon-media-disabled",
                        children: (0, J.jsx)(D.Spinner, {
                            size: 50,
                            stroke: 4,
                            color: "white"
                        })
                    })
                }) : null
            }

            function ae(e) {
                return e ? e.fullPreviewData ? e.fullPreviewData.url() : e.preview instanceof R.default ? e.preview.url() : null : null
            }
        },
        37905: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.isPaused,
                    n = e.hasAudio,
                    a = e.isMuted,
                    o = e.onPlay,
                    r = e.onPause,
                    l = e.onMute,
                    u = e.onUnmute;
                return (0, s.jsx)("div", {
                    onClick: function(e) {
                        return e.stopPropagation()
                    },
                    children: (0, s.jsxs)(i.FlexRow, {
                        children: [(0, s.jsx)(p, {
                            isPaused: t,
                            handlePlayPauseButton: function() {
                                t ? o() : r()
                            }
                        }), (0, s.jsx)(h, {
                            hasAudio: n,
                            isMuted: a,
                            handleMuteButton: function() {
                                a ? u() : l()
                            }
                        })]
                    })
                })
            };
            var o = n(48360),
                r = a(n(56720)),
                i = n(27968),
                l = a(n(28706)),
                u = a(n(7665)),
                s = n(85893),
                d = {
                    cursor: "bx7g2weo",
                    width: "i94gqilv",
                    height: "bmot90v7",
                    color: "lxozqee9"
                },
                c = {
                    marginRight: "lyrceosr"
                },
                f = {
                    opacity: "brh521k9"
                };

            function p(e) {
                var t = e.isPaused,
                    n = e.handlePlayPauseButton;
                return (0, s.jsx)("div", {
                    className: (0, r.default)(c, d),
                    children: (0, s.jsx)(l.default, {
                        "aria-label": t ? o.fbt._("Play", null, {
                            hk: "4CjEWt"
                        }) : o.fbt._("Pause", null, {
                            hk: "1kvbzt"
                        }),
                        onClick: n,
                        name: t ? "status-media-controls-play" : "status-media-controls-pause"
                    })
                })
            }

            function h(e) {
                var t = e.hasAudio,
                    n = e.isMuted,
                    a = e.handleMuteButton;
                return t ? (0, s.jsx)("div", {
                    className: (0, r.default)(d),
                    children: (0, s.jsx)(l.default, {
                        "aria-label": n ? o.fbt._("Unmute", null, {
                            hk: "aQpZx"
                        }) : o.fbt._("Mute", null, {
                            hk: "1C7Sjw"
                        }),
                        onClick: a,
                        name: n ? "status-media-controls-volume-off" : "status-media-controls-volume-on"
                    })
                }) : (0, s.jsx)("div", {
                    className: (0, r.default)(f, d),
                    children: (0, s.jsx)(u.default, {
                        name: "status-media-controls-no-sound"
                    })
                })
            }
        },
        15097: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StatusV3Text = function(e) {
                var t, n = e.msg;
                (0, l.useEffect)((function() {
                    s.default.load(n.font).catch((function() {}))
                }), []);
                var a, p, h = (0, r.numCodepoints)(e.msg.body),
                    m = (0, o.default)({}, c.default[`font_${e.msg.font}`], !0);
                h <= 60 ? (a = (0, i.default)(c.default.text, c.default.textLarge, m), p = d.Configuration.StatusV3Text({
                    links: e.msg.getLinks()
                })) : h <= 240 ? (a = (0, i.default)(c.default.text, c.default.textMedium, m), p = d.Configuration.StatusV3Text({
                    links: e.msg.getLinks()
                })) : a = (0, i.default)(c.default.text, c.default.textSmall, m);
                return (0, f.jsx)("div", {
                    className: (0, i.default)(c.default.playerContent, (t = {}, (0, o.default)(t, c.default.statusPanelPlayerContent, "status-panel" === e.theme), (0, o.default)(t, c.default.statusThumbnailPlayerContent, "status-thumbnail" === e.theme), (0, o.default)(t, c.default.textThumbnailPlayerContent, "text-thumb" === e.theme), t)),
                    onMouseDown: e.onMouseDown,
                    onMouseUp: e.onMouseUp,
                    children: (0, f.jsx)("div", {
                        className: a,
                        children: (0, f.jsx)(u.EmojiText, {
                            text: e.msg.body,
                            formatters: p
                        })
                    })
                })
            };
            var o = a(n(59713)),
                r = n(27767),
                i = a(n(94184)),
                l = n(67294),
                u = n(73008),
                s = a(n(55643)),
                d = n(59333),
                c = a(n(96420)),
                f = n(85893)
        },
        86900: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.initialStatusV3,
                    n = e.quotedMsgKey,
                    a = e.initialStatusMsg,
                    I = e.onMsgNotFound,
                    w = (0, m.default)(),
                    O = (0, h.useState)(null),
                    A = (0, r.default)(O, 2),
                    L = A[0],
                    M = A[1],
                    N = (0, h.useState)(null),
                    R = (0, r.default)(N, 2),
                    D = R[0],
                    B = R[1],
                    V = (0, h.useState)(!0),
                    F = (0, r.default)(V, 2),
                    W = F[0],
                    U = F[1],
                    H = (0, h.useRef)(null);
                (0, h.useEffect)((function() {
                    var e = H.current;
                    L && e && e.hasNext(L) && e.getNext(L).then((function(t) {
                        if (!w.aborted) {
                            var n = e.statuses[t.statusIdx].msgs[t.msgIdx];
                            if (!n) throw new k.StatusV3MsgNotFound;
                            if (n.type === d.MSG_TYPE.CHAT) v.default.load(n.font).catch((function() {}));
                            else {
                                var a = n.mediaData;
                                a && a.mediaStage !== x.MEDIA_DATA_STAGE.RESOLVED && n.downloadMedia({
                                    downloadEvenIfExpensive: !0,
                                    rmrReason: S.default.WEBC_RMR_REASON_CODE.STATUS_V3,
                                    isUserInitiated: !1
                                })
                            }
                        }
                    })).catch((0, i.filteredCatch)(k.StatusV3MsgNotFound, (function() {
                        __LOG__(3)`Error finding next status while preloading next status`
                    }))).catch((0, i.filteredCatch)(k.InvalidStatusV3Iterator, (function() {
                        __LOG__(3)`Invalid iterator while preloading next status`
                    }))).catch((0, i.filteredCatch)(s.EphemeralDrop, (function() {}))).catch((0, i.filteredCatch)(k.StatusV3LoadingError, (function() {
                        __LOG__(3)`No more status v3 while preloading next status`
                    })))
                }), [L, H, w.aborted]);
                var G, z, q, K, Q, Y, $, J, X, Z = function(t) {
                        B(!0), (0, l.delayMs)(200).then((function() {
                            w.aborted || e.closeStatusViewer(t)
                        }))
                    },
                    ee = function() {
                        var e = H.current;
                        if (L && e && e.hasPrev(L)) {
                            var t = L.statusIdx;
                            e.getPrev(L).then((function(e) {
                                w.aborted || (e.statusIdx === t ? M(e) : (B(!0), (0, l.delayMs)(200).then((function() {
                                    w.aborted || (M(e), B(!1))
                                }))))
                            })).catch((0, i.filteredCatch)(k.InvalidStatusV3Iterator, (function() {
                                __LOG__(3)`Invalid iterator while getting previous status msg`
                            }))).catch((0, i.filteredCatch)(s.EphemeralDrop, (function() {}))).catch((0, i.filteredCatch)(k.StatusV3LoadingError, (function() {
                                __LOG__(3)`No more status v3 while preloading next status`
                            })))
                        }
                    },
                    te = function() {
                        var e = H.current;
                        if (L && e && e.hasNext(L)) {
                            var t = L.statusIdx,
                                n = e.getNext(L);
                            U(!0), n.then((function(e) {
                                w.aborted || (e.statusIdx === t ? M(e) : (B(!0), U(!1), (0, l.delayMs)(200).then((function() {
                                    w.aborted || (M(e), B(!1))
                                }))))
                            })).catch((0, i.filteredCatch)(k.InvalidStatusV3Iterator, (function() {
                                __LOG__(3)`Invalid iterator while getting next status msg`, Z()
                            }))).catch((0, i.filteredCatch)(s.EphemeralDrop, (function() {}))).catch((0, i.filteredCatch)(k.StatusV3LoadingError, (function() {
                                __LOG__(3)`No more status v3 while preloading next status`
                            }))).finally((function() {
                                U(!1)
                            }))
                        } else Z()
                    },
                    ne = function(e, t) {
                        var n = H.current;
                        if (t) {
                            var a = e.unreadCount,
                                o = e.totalCount;
                            if (e.msgs.getModelsArray().findIndex((function(e) {
                                    return e === t
                                })) >= o - a) {
                                var r = (0, u.unixTime)(),
                                    i = t.id.participant;
                                i && i.isPSA() && t.set("statusPSAReadTimestamp", r), e.sendReadStatus(t.id, t.author, r)
                            }
                            var l = null == n ? void 0 : n.statuses.find((function(t) {
                                return t.statusV3 === e
                            }));
                            l && l.readMsgKeys.push(t.id.toString())
                        }
                    };
                (0, h.useEffect)((function() {
                    var o = t;
                    if (n) {
                        var r = n;
                        if (-1 !== o.msgs.getModelsArray().findIndex((function(e) {
                                return e.id.toString() === r.toString()
                            }))) H.current = new k.Statusv3Snapshot(o, r), H.current.getFirstUnread(o, !0, r).then((function(e) {
                            w.aborted || (M(e), U(!1))
                        })).catch((0, i.filteredCatch)(s.EphemeralDrop, (function() {}))).catch((0, i.filteredCatch)(k.InvalidStatusV3Iterator, (function() {
                            __LOG__(3)`Invalid iterator while loading first unread msg`, g.Cmd.openToast((0, E.jsx)(P.Toast, {
                                msg: p.fbt._("Status update not found", null, {
                                    hk: "1KSfSo"
                                }),
                                id: (0, P.genId)()
                            })), e.closeStatusViewer()
                        })));
                        else U(!0), o.loadMore(o.totalCount).then((function() {
                            (U(!1), -1 !== o.msgs.getModelsArray().findIndex((function(e) {
                                return e.id.toString() === r.toString()
                            }))) ? (H.current = new k.Statusv3Snapshot(o, r), H.current.getFirstUnread(o, !0, r).then((function(e) {
                                w.aborted || (M(e), U(!1))
                            })).catch((0, i.filteredCatch)(s.EphemeralDrop, (function() {}))).catch((0, i.filteredCatch)(k.InvalidStatusV3Iterator, (function() {
                                __LOG__(3)`Invalid iterator while loading first unread msg`, g.Cmd.openToast((0, E.jsx)(P.Toast, {
                                    msg: p.fbt._("Status update not found", null, {
                                        hk: "1KSfSo"
                                    }),
                                    id: (0, P.genId)()
                                })), e.closeStatusViewer()
                            })))) : (null == I || I(), g.Cmd.openToast((0, E.jsx)(P.Toast, {
                                msg: p.fbt._("Status update not found", null, {
                                    hk: "1KSfSo"
                                }),
                                id: (0, P.genId)()
                            })), e.closeStatusViewer())
                        })).catch((function() {
                            g.Cmd.openToast((0, E.jsx)(P.Toast, {
                                msg: p.fbt._("Status update not found", null, {
                                    hk: "1KSfSo"
                                }),
                                id: (0, P.genId)()
                            })), Z()
                        })).finally((function() {
                            U(!1)
                        }))
                    } else {
                        var l = a;
                        H.current = new k.Statusv3Snapshot(o), H.current.getFirstUnread(o, !0, null == l ? void 0 : l.id).then((function(e) {
                            w.aborted || (M(e), U(!1))
                        })).catch((0, i.filteredCatch)(s.EphemeralDrop, (function() {}))).catch((0, i.filteredCatch)(k.InvalidStatusV3Iterator, (function() {
                            __LOG__(3)`Invalid iterator while loading first unread msg`, g.Cmd.openToast((0, E.jsx)(P.Toast, {
                                msg: p.fbt._("Status update not found", null, {
                                    hk: "1KSfSo"
                                }),
                                id: (0, P.genId)()
                            })), e.closeStatusViewer()
                        })))
                    }
                }), []), L && H.current && (Q = H.current, Y = Q.statuses[L.statusIdx], $ = Y.statusV3, J = Y.msgs[L.msgIdx], Q.hasPrev(L) && (q = (0, E.jsx)("div", {
                    className: j.default.chevronLeft,
                    children: (0, E.jsx)(T.default, {
                        name: "chevron-left"
                    })
                }), K = (0, E.jsx)("div", {
                    className: j.default.chevronLeftBg,
                    onClick: ee
                })), Q.hasNext(L) && (G = (0, E.jsx)("div", {
                    className: j.default.chevronRight,
                    children: (0, E.jsx)(T.default, {
                        name: "chevron-right"
                    })
                }), z = (0, E.jsx)("div", {
                    className: j.default.chevronRightBg,
                    onClick: function() {
                        te(), ne($, J)
                    }
                })));
                !D && !W && J && L && Y && $ && (X = (0, E.jsx)("div", {
                    className: j.default.playerContainer,
                    children: (0, E.jsx)(y.StatusV3Player, {
                        statusV3: $,
                        msg: J,
                        mediaData: J.mediaData,
                        msgIdx: L.msgIdx,
                        totalMsgs: Y.totalCount,
                        markRead: ne,
                        closeStatusViewer: Z,
                        onClickProgressBar: function(e) {
                            if ((!L || e !== L.msgIdx) && L && H.current) {
                                var t = H.current.statusAt(L, e);
                                U(!0), t.then((function(e) {
                                    w.aborted || M(e)
                                })).catch((0, i.filteredCatch)(k.InvalidStatusV3Iterator, (function() {
                                    __LOG__(3)`Invalid iterator while getting next status msg`
                                }))).catch((0, i.filteredCatch)(s.EphemeralDrop, (function() {}))).catch((0, i.filteredCatch)(k.StatusV3LoadingError, (function() {
                                    __LOG__(3)`No more status v3 while preloading next status`
                                }))).finally((function() {
                                    U(!1)
                                }))
                            }
                        },
                        onNext: te,
                        onPrev: ee,
                        sessionId: e.sessionId,
                        rowIdx: e.rowIdx
                    }, J.id)
                }, J.id));
                var ae, oe = (0, f.default)(j.default.v3X, (0, o.default)({}, j.default.v3X_mac, C.default.isRTL())),
                    re = (0, E.jsx)("button", {
                        className: oe,
                        onClick: function() {
                            return e.closeStatusViewer(!0)
                        },
                        children: (0, E.jsx)(T.default, {
                            name: "x-viewer"
                        })
                    }),
                    ie = (0, f.default)(j.default.backIcon, (0, o.default)({}, j.default.backIcon_mac, !C.default.isRTL())),
                    le = (0, E.jsx)("button", {
                        className: ie,
                        onClick: function() {
                            return e.closeStatusViewer()
                        },
                        children: (0, E.jsx)(T.default, {
                            name: "back",
                            directional: !0
                        })
                    });
                W && (ae = (0, E.jsx)("div", {
                    className: j.default.mediaStateControls,
                    children: (0, E.jsx)("button", {
                        children: (0, E.jsx)(b.Spinner, {
                            size: 50,
                            stroke: 4,
                            color: "white"
                        })
                    })
                }));
                return (0, E.jsx)(_.HotKeys, {
                    handlers: {
                        left: ee,
                        right: te
                    },
                    children: (0, E.jsxs)("div", {
                        className: j.default.viewer,
                        "data-animate-status-v3-viewer": !0,
                        children: [re, le, K, q, z, G, ae, (0, E.jsx)(c.default, {
                            transitionName: "status-v3-player",
                            transitionAppear: !0,
                            children: X
                        })]
                    })
                })
            };
            var o = a(n(59713)),
                r = a(n(63038)),
                i = n(15586),
                l = n(45121),
                u = n(79746),
                s = n(73435),
                d = n(40787),
                c = a(n(65668)),
                f = a(n(94184)),
                p = n(48360),
                h = n(67294),
                m = a(n(22190)),
                g = n(65901),
                v = a(n(55643)),
                _ = n(32012),
                C = a(n(9844)),
                x = n(41655),
                S = a(n(50507)),
                b = n(85651),
                y = n(47413),
                k = n(33633),
                j = a(n(78662)),
                T = a(n(7665)),
                P = n(92428),
                E = n(85893)
        },
        50674: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.viewers,
                    n = e.onClose;
                (0, i.useEffect)((function() {
                    return n
                }));
                var a = new f.default,
                    r = function(e) {
                        var t = e.map((function(e) {
                            return {
                                participant: e,
                                itemKey: e.id.toString(),
                                height: c.DEFAULT_ITEM_HEIGHT
                            }
                        }));
                        return t.sort((function(e, t) {
                            return t.participant.t - e.participant.t
                        })), t
                    }(t),
                    d = r.length ? (0, v.jsx)(c.FlatList, {
                        flatListController: a,
                        direction: "vertical",
                        forceConsistentRenderCount: !0,
                        data: r,
                        renderItem: _
                    }) : (0, v.jsx)(C, {}),
                    p = m.default.t(814, {
                        count: r.length
                    }),
                    h = {
                        width: 400,
                        height: (x = r.length, S = x > 0 ? 72 * x : (0, o.isMDBackend)() ? 100 : 150, Math.min(500, S + 59))
                    };
                var x, S;
                return (0, v.jsx)(g.Modal, {
                    type: g.ModalTheme.CustomSize,
                    dimensions: h,
                    children: (0, v.jsxs)(l.default, {
                        theme: "settings",
                        children: [(0, v.jsx)(s.DrawerHeader, {
                            onCancel: n,
                            title: p,
                            type: s.DRAWER_HEADER_TYPE.POPUP
                        }), (0, v.jsx)(u.default, {
                            flatListControllers: [a],
                            children: d
                        })]
                    })
                })
            };
            var o = n(78577),
                r = n(48360),
                i = n(67294),
                l = a(n(53187)),
                u = a(n(18345)),
                s = n(19288),
                d = n(75993),
                c = n(73568),
                f = a(n(92546)),
                p = n(1577),
                h = a(n(50329)),
                m = a(n(9844)),
                g = n(73454),
                v = n(85893);

            function _(e) {
                var t = e.participant;
                return (0, v.jsx)(h.default, {
                    msgInfoParticipant: t,
                    contact: t.contact
                }, t.id.toString())
            }

            function C() {
                return (0, o.isMDBackend)() ? (0, v.jsx)(d.Empty, {
                    children: "none" === (0, p.getUserPrivacySettings)().readReceipts ? r.fbt._("Can't see views because you disabled Read Receipts in Settings > Account > Privacy", null, {
                        hk: "45oJGn"
                    }) : r.fbt._("No views yet", null, {
                        hk: "456C0K"
                    })
                }) : (0, v.jsx)(d.Empty, {
                    title: r.fbt._("No views yet", null, {
                        hk: "456C0K"
                    }),
                    text: r.fbt._("Views are not visible if you have disabled Read Receipts in Settings > Account > Privacy on your phone", null, {
                        hk: "1bIdNy"
                    })
                })
            }
        },
        9150: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n(63038)),
                r = a(n(3208)),
                i = n(67294),
                l = n(24576),
                u = a(n(53187)),
                s = a(n(18345)),
                d = n(19288),
                c = n(73008),
                f = n(32012),
                p = a(n(74705)),
                h = n(73454),
                m = a(n(64894)),
                g = n(80385),
                v = a(n(7665)),
                _ = n(68544),
                C = a(n(40805)),
                x = n(16835),
                S = n(85893),
                b = function(e) {
                    var t = e.defaultText,
                        n = e.title,
                        a = e.onSend,
                        b = e.onBack,
                        y = (0, i.useState)(t),
                        k = (0, o.default)(y, 2),
                        j = k[0],
                        T = k[1],
                        P = (0, l.findFirstWebLink)(j),
                        E = (0, l.useLinkPreview)(P),
                        I = E.linkPreview,
                        w = E.clearLinkPreview,
                        O = n ? (0, S.jsx)(c.EmojiText, {
                            text: n,
                            direction: "auto",
                            titlify: !0,
                            ellipsify: !0
                        }) : null,
                        A = I || {},
                        L = A.title,
                        M = A.canonicalUrl,
                        N = A.description,
                        R = A.thumbnail,
                        D = I ? (0, S.jsx)(x.UIE, {
                            displayName: "ComposeBoxLinkPreview",
                            escapable: !0,
                            requestDismiss: w,
                            children: (0, S.jsx)(m.default, {
                                onOmit: w,
                                children: (0, S.jsx)(p.default, {
                                    title: L,
                                    compose: !0,
                                    canonicalUrl: M,
                                    description: N,
                                    thumbnailJpeg: R
                                })
                            })
                        }) : null;
                    return (0, S.jsx)(h.Modal, {
                        type: h.ModalTheme.Box,
                        children: (0, S.jsxs)(u.default, {
                            children: [(0, S.jsx)(d.DrawerHeader, {
                                type: d.DRAWER_HEADER_TYPE.POPUP,
                                onBack: b,
                                children: O
                            }), (0, S.jsx)(s.default, {
                                children: (0, S.jsxs)(f.HotKeys, {
                                    className: C.default.container,
                                    children: [(0, S.jsx)("div", {
                                        className: C.default.inputContainer,
                                        children: (0, S.jsx)(_.TextInput, {
                                            a8n: "text-message-modal-text-unput",
                                            value: j,
                                            maxLength: r.default.MAX_TXT_MSG_SIZE,
                                            onChange: function(e) {
                                                T(e)
                                            },
                                            supportsEmoji: !0,
                                            multiline: !0,
                                            spellCheck: !0,
                                            showRemaining: !0,
                                            focusOnMount: !0,
                                            theme: "small"
                                        })
                                    }), D]
                                })
                            }), (0, S.jsx)("div", {
                                className: C.default.btnContainer,
                                children: (0, S.jsx)("div", {
                                    className: C.default.btnPosition,
                                    children: (0, S.jsx)(g.Round, {
                                        large: !0,
                                        onClick: function() {
                                            j.length && a(j, I)
                                        },
                                        children: (0, S.jsx)(v.default, {
                                            name: "send",
                                            directional: !0
                                        })
                                    })
                                })
                            })]
                        })
                    })
                };
            t.default = b
        },
        33348: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.text,
                    n = e.url;
                return (0, i.jsx)(r.default, {
                    xstyle: l.button,
                    onClick: function() {
                        (0, o.openExternalLink)(n)
                    },
                    children: t
                })
            };
            a(n(56720));
            var o = n(49012),
                r = a(n(76080)),
                i = n(85893),
                l = {
                    button: {
                        display: "p357zi0d",
                        borderTopStartRadius: "m2gb0jvt",
                        borderTopEndRadius: "rfxpxord",
                        borderBottomEndRadius: "gwd8mfxi",
                        borderBottomStartRadius: "mnh9o63b",
                        width: "ltyqj8pj",
                        paddingTop: "b7n2qyd4",
                        paddingEnd: "l9g3jx6n",
                        paddingBottom: "ekpn4oxx",
                        paddingStart: "lyvj5e2u",
                        maxWidth: "rkwy1u70",
                        fontSize: "enbbiyaj",
                        height: "ohuqqxaf",
                        lineHeight: "erpdyial",
                        transform: "bnt9nn9b",
                        opacity: "axi1ht8l",
                        backgroundColor: "ppv8chjk",
                        color: "qiqvuef5",
                        alignItems: "gndfcl4n",
                        justifyContent: "ac2vgrno",
                        animationName: "hr4hzv79",
                        animationFillMode: "a21kwdn3",
                        animationDuration: "h6edk2v2",
                        animationDelay: "fdmybch3",
                        ":hover": {
                            backgroundColor: "jhshxy31"
                        }
                    }
                }
        },
        84245: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RingTheme = void 0, t.StatusV3ImageRing = c;
            var o = a(n(59713)),
                r = a(n(81109)),
                i = a(n(94184)),
                l = n(50857),
                u = a(n(79090)),
                s = n(85893),
                d = n(76672).Mirrored(["STATUS_V3_PANEL", "BUSINESS_CONTACT_INFO"]);
            t.RingTheme = d;

            function c(e) {
                var t, n = e.stroke,
                    a = e.size,
                    c = (0, l.useModelValues)(e.statusV3, ["unreadCount", "totalCount", "contact"]),
                    f = function(e) {
                        var t = 100 + n;
                        return (0, s.jsx)("circle", (0, r.default)({
                            cx: t / 2,
                            cy: t / 2,
                            r: 50,
                            fill: "none",
                            strokeLinecap: "round",
                            strokeWidth: n
                        }, e))
                    },
                    p = function(e, t, n, a) {
                        for (var o = "", r = 0; r < e; r++) o += r === e - 1 ? `${t} ${n-e*(a+t)+a} ` : `${t} ${a} `;
                        return o
                    },
                    h = 100 + n,
                    m = c.totalCount,
                    g = 10,
                    v = 50 * Math.PI * 2;
                v - 10 * m < 1 && (g = v / m / 1.2);
                var _, C, x = (v - g * m) / m,
                    S = v / 4 - g / 2,
                    b = c.contact.isMe ? 0 : c.unreadCount,
                    y = m - b;
                if (b) {
                    var k, j = S + m * (g + x);
                    1 !== m && (k = p(b, x, v, g)), _ = f({
                        strokeDashoffset: j,
                        strokeDasharray: k,
                        className: u.default.unread
                    })
                }
                if (y) {
                    var T, P = S + y * (g + x);
                    1 !== m && (T = p(y, x, v, g)), C = f({
                        strokeDashoffset: P,
                        strokeDasharray: T,
                        className: u.default.read
                    })
                }
                return (0, s.jsxs)("svg", {
                    className: (0, i.default)((t = {}, (0, o.default)(t, u.default.statusV3PanelRing, e.theme === d.STATUS_V3_PANEL), (0, o.default)(t, u.default.businessContactInfoRing, e.theme === d.BUSINESS_CONTACT_INFO), t)),
                    width: a,
                    height: a,
                    viewBox: `0 0 ${h} ${h}`,
                    children: [_, C]
                })
            }
            c.defaultProps = {
                size: 48,
                stroke: 4,
                theme: d.STATUS_V3_PANEL
            }
        },
        84176: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StatusV3GifController = t.StatusV3CountdownController = void 0, t.setupStatusV3Controller = function(e, t) {
                if (e) {
                    if (e.type === u.default.TYPE.IMAGE) {
                        var n = 4500;
                        return (0, i.default)(t.caption) || (n += 2e3 * Math.min(t.caption.length / 150, 1)), new c(n)
                    }
                    return e.type === u.default.TYPE.VIDEO ? t.isGif ? new p : new s.default : new c(3e3)
                }
                if (t.type === l.MSG_TYPE.CHAT) {
                    var a = 2e3 + 60 * Math.min(t.body.length, 1e3);
                    return new c(a)
                }
                return new c(3e3)
            };
            var o = a(n(34575)),
                r = a(n(93913)),
                i = a(n(41609)),
                l = n(40787),
                u = a(n(72397)),
                s = a(n(73550)),
                d = function() {},
                c = function() {
                    function e(t) {
                        var n = this;
                        (0, o.default)(this, e), this.addListeners = function(e, t, a, o) {
                            n._onStart = e, n._onPause = t, n._onEnded = a, n._onLoaded = o
                        }, this.removeListeners = function() {
                            n._onStart = void 0, n._onPause = void 0, n._onEnded = void 0, n._onLoaded = void 0
                        }, this.play = function() {
                            var e;
                            if (n._timer) __LOG__(2)`Duplicate timer start`;
                            else {
                                n._timer = setTimeout(n._handleTimeup, n._timeout), n._start = (new Date).getTime();
                                var t = n._onStart;
                                t && t(n._timeout, n._duration), null === (e = n._onLoaded) || void 0 === e || e.call(n, !1, !0)
                            }
                        }, this.stop = function() {
                            if (n._timer) {
                                clearTimeout(n._timer), n._timer = null;
                                var e = (new Date).getTime();
                                n._timeout -= e - n._start;
                                var t = n._onPause;
                                t && t()
                            } else __LOG__(2)`Timer stop called on stopped timer`
                        }, this.resume = function() {
                            n.play()
                        }, this.pause = function() {
                            n.stop()
                        }, this._handleTimeup = function() {
                            var e = n._onEnded;
                            e && e()
                        }, this.mute = d, this.unmute = d, this._duration = t, this._timeout = this._duration, this._start = 0
                    }
                    return (0, r.default)(e, [{
                        key: "duration",
                        get: function() {
                            return this._duration
                        }
                    }]), e
                }();
            t.StatusV3CountdownController = c;
            var f = 6e3,
                p = function() {
                    function e() {
                        var t = this;
                        (0, o.default)(this, e), this.removeListeners = function() {
                            t._handleStart = void 0, t._handlePause = void 0, t._handleEnded = void 0, t._handleLoaded = void 0, t._videoController.removeListeners(), t._countdownController.removeListeners()
                        }, this.setVideo = function(e, n) {
                            t._video !== e && (t._video = e, null != n && (t._duration = n), t._videoController.setVideo(e))
                        }, this._handleVideoStartHandler = function() {
                            var e = t._video;
                            if (null != e) {
                                var n = t._handleStart,
                                    a = e.duration || t._duration,
                                    o = Math.max(3 * a * 1e3, f);
                                n && n(o - 1e3 * a * t._playCounter - 1e3 * e.currentTime, o)
                            }
                        }, this._handleVideoPauseHandler = function() {
                            var e = t._handlePause;
                            e && e()
                        }, this._handleVideoEndedHandler = function() {
                            var e = t._video;
                            if (null != e) {
                                t._playCounter++;
                                var n = t._handleEnded;
                                3 === t._playCounter && (t._videoEnded = !0, t._timerEnded && n && n()), e.currentTime = 0, t._videoEnded && t._timerEnded || setTimeout((function() {
                                    t._videoController.play()
                                }), 0)
                            }
                        }, this._handleVideoLoadedHandler = function() {
                            var e;
                            null === (e = t._handleLoaded) || void 0 === e || e.call(t, !1, !0)
                        }, this._handleTimerEndedHandler = function() {
                            var e = t._handleEnded;
                            t._timerEnded = !0, e && t._videoEnded && e()
                        }, this.play = function() {
                            t._videoController.play(), t._countdownController.play()
                        }, this.stop = function() {
                            t._videoController.stop(), t._countdownController.stop()
                        }, this.resume = function() {
                            t._videoController.resume(), t._countdownController.resume()
                        }, this.pause = function() {
                            t._videoController.pause(), t._countdownController.pause()
                        }, this.mute = d, this.unmute = d, this._playCounter = 0, this._timerEnded = !1, this._videoEnded = !1, this._videoController = new s.default, this._countdownController = new c(f), this._videoController.addListeners(this._handleVideoStartHandler, this._handleVideoPauseHandler, this._handleVideoEndedHandler, this._handleVideoLoadedHandler), this._countdownController.addListeners(void 0, void 0, this._handleTimerEndedHandler)
                    }
                    return (0, r.default)(e, [{
                        key: "addListeners",
                        value: function(e, t, n, a) {
                            this._handleStart = e, this._handlePause = t, this._handleEnded = n, this._handleLoaded = a
                        }
                    }, {
                        key: "duration",
                        get: function() {
                            var e;
                            return Math.max(3 * ((null === (e = this._video) || void 0 === e ? void 0 : e.duration) || this._duration) * 1e3, f)
                        }
                    }]), e
                }();
            t.StatusV3GifController = p
        },
        3495: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                o = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = o(n(59713)),
                i = o(n(69760)),
                l = o(n(94184)),
                u = n(67294),
                s = n(43890),
                d = o(n(83166)),
                c = n(85893);

            function f(e, t) {
                var n = e.onClick,
                    o = e.current,
                    f = e.total,
                    p = e.hasMediaControls,
                    h = (0, u.useRef)(null),
                    m = (0, u.useRef)(null),
                    g = [];
                (0, u.useEffect)((function() {
                    __LOG__(2)`Current index: ${o}, total count: ${f}`, o >= 0 && o < f || (__LOG__(4, void 0, new Error, !0)`Assertion failed!`, SEND_LOGS("bad current status v3 index"))
                }), []);
                var v = function(e, t) {
                        if (h.current) {
                            var n = 1e3 * s.ServerProps.statusVideoMaxDuration,
                                a = Math.min(e, n),
                                o = Math.min(t, n);
                            (0, i.default)(h.current, "stop"), m.current = (0, i.default)(h.current, {
                                translateX: ["0%", `-${a/o*100}%`]
                            }, {
                                duration: a,
                                easing: "linear"
                            })
                        }
                    },
                    _ = function() {
                        h.current && (0, i.default)(h.current, "stop")
                    },
                    C = function() {
                        var e = m.current;
                        return e || a.resolve()
                    };
                (0, u.useImperativeHandle)(t, (function() {
                    return {
                        handleStart: v,
                        handlePause: _,
                        handleEnded: C
                    }
                }));
                for (var x = 100 / e.total + "%", S = function(t) {
                        var a, o = (0, l.default)(d.default.foreground, (a = {}, (0, r.default)(a, d.default.filled, t < e.current), (0, r.default)(a, d.default.empty, t > e.current), (0, r.default)(a, d.default.active, t === e.current), a)),
                            i = (0, c.jsxs)("div", {
                                className: d.default.wrapper,
                                style: {
                                    width: x
                                },
                                onClick: function() {
                                    return e = t, void(n && n(e));
                                    var e
                                },
                                children: [(0, c.jsx)("div", {
                                    className: d.default.bg
                                }), (0, c.jsx)("div", {
                                    className: d.default.mask,
                                    children: (0, c.jsx)("div", {
                                        className: o,
                                        ref: t === e.current ? h : function() {}
                                    })
                                })]
                            }, t);
                        g.push(i)
                    }, b = 0; b < e.total; ++b) S(b);
                return (0, c.jsx)("div", {
                    className: p ? d.default.containerWithMediaControls : d.default.container,
                    children: g
                })
            }
            var p = (0, u.forwardRef)(f);
            t.default = p
        },
        65: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.seenCount,
                    n = e.onClick,
                    a = (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(i.default, {
                            name: "status-v3-seen",
                            className: (0, o.default)(s.iconSeen)
                        }), (0, u.jsx)("div", {
                            className: (0, o.default)(s.seenCount),
                            children: t
                        })]
                    }),
                    d = n ? (0, u.jsx)(l.default, {
                        xstyle: s.container,
                        onClick: n,
                        children: a
                    }) : a;
                if (null != t) return (0, u.jsx)("div", {
                    className: (0, o.default)(s.container),
                    children: d
                });
                return (0, u.jsx)(r.Spinner, {
                    stroke: 3,
                    size: 12
                })
            };
            var o = a(n(56720)),
                r = n(85651),
                i = a(n(7665)),
                l = a(n(76080)),
                u = n(85893),
                s = {
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
        33633: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                o = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Statusv3Snapshot = t.StatusV3MsgNotFound = t.StatusV3LoadingError = t.InvalidStatusV3Iterator = void 0;
            var r = o(n(87757)),
                i = o(n(48926)),
                l = o(n(34575)),
                u = o(n(2205)),
                s = o(n(99842)),
                d = o(n(57043)),
                c = o(n(44908)),
                f = o(n(35161)),
                p = n(47693),
                h = n(45121),
                m = n(33219),
                g = n(46177),
                v = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = _(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                            i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                        } a.default = e, n && n.set(e, a);
                    return a
                }(n(21661));

            function _(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (_ = function(e) {
                    return e ? n : t
                })(e)
            }
            var C = function(e) {
                (0, u.default)(n, e);
                var t = (0, s.default)(n);

                function n() {
                    return (0, l.default)(this, n), t.apply(this, arguments)
                }
                return n
            }((0, p.customError)("InvalidStatusV3Iterator"));
            t.InvalidStatusV3Iterator = C;
            var x = function(e) {
                (0, u.default)(n, e);
                var t = (0, s.default)(n);

                function n() {
                    return (0, l.default)(this, n), t.apply(this, arguments)
                }
                return n
            }((0, p.customError)("StatusV3LoadingError"));
            t.StatusV3LoadingError = x;
            var S = function(e) {
                (0, u.default)(n, e);
                var t = (0, s.default)(n);

                function n() {
                    return (0, l.default)(this, n), t.apply(this, arguments)
                }
                return n
            }((0, p.customError)("StatusV3MsgNotFound"));
            t.StatusV3MsgNotFound = S;
            t.Statusv3Snapshot = function e(t, n) {
                var o = this;
                if ((0, l.default)(this, e), this._printInfo = function() {
                        o.statuses.forEach((function(e) {
                            __LOG__(2)`Total count: ${e.totalCount}, unread count: ${e.unreadCount}, msgs length: ${e.msgs.length}`
                        }))
                    }, this.getFirstUnread = function(e, t, n) {
                        var r = o.statuses.findIndex((function(t) {
                            return t.statusV3 === e
                        }));
                        if (-1 !== r) {
                            var i, l = o.statuses[r],
                                u = l.readMsgKeys;
                            return n ? (i = l.msgs ? l.msgs.findIndex((function(e) {
                                return n && e.id.toString() === n.toString()
                            })) : -1) >= 0 ? a.resolve({
                                msgIdx: i,
                                statusIdx: r
                            }) : a.reject(new C) : -1 === (i = l.msgs ? l.msgs.findIndex((function(e) {
                                return !u.includes(e.id.toString())
                            })) : -1) && e.msgs.msgLoadState.noEarlierMsgs ? (i = t ? 0 : l.msgs.length - 1, a.resolve({
                                msgIdx: i,
                                statusIdx: r
                            })) : -1 !== i ? a.resolve({
                                msgIdx: i,
                                statusIdx: r
                            }) : 0 === l.unreadCount && t && l.msgs.length > 0 ? a.resolve({
                                msgIdx: 0,
                                statusIdx: r
                            }) : o._fetchMore(e).then((function() {
                                return o.getFirstUnread(e, t, n)
                            })).catch((function(e) {
                                throw __LOG__(3)`error while getting first unread status: ${String(e)}`, new C
                            }))
                        }
                        return a.reject(new C)
                    }, this.hasNext = function(e) {
                        var t = o.statuses[e.statusIdx];
                        return e.msgIdx + 1 < t.totalCount || e.statusIdx + 1 < o.statuses.length
                    }, this.getNext = function(e) {
                        var t = o.statuses[e.statusIdx],
                            n = t.statusV3;
                        if (e.msgIdx + 1 < t.totalCount && e.msgIdx + 1 < t.msgs.length) return a.resolve({
                            msgIdx: e.msgIdx + 1,
                            statusIdx: e.statusIdx
                        });
                        if (e.msgIdx + 1 < t.totalCount) return n.msgs.msgLoadState.noEarlierMsgs ? (__LOG__(3)`Loaded ${t.msgs.length} messages with total count ${t.totalCount}, but noEarlierMsgs set`, a.reject(new C)) : o._fetchMore(n).then((function() {
                            return o.getNext(e)
                        })).catch((function(t) {
                            if (__LOG__(3)`error while loading more status msgs: ${String(t)}`, e.statusIdx + 1 < o.statuses.length) {
                                var n = o.statuses[e.statusIdx + 1].statusV3;
                                return o.getFirstUnread(n, !0)
                            }
                            throw new C
                        }));
                        if (e.statusIdx + 1 < o.statuses.length) {
                            var r = o.statuses[e.statusIdx + 1].statusV3;
                            return o.getFirstUnread(r, !0)
                        }
                        return a.reject(new C)
                    }, this.hasPrev = function(e) {
                        return e.msgIdx > 0 || e.statusIdx > 0
                    }, this.getPrev = function(e) {
                        if (e.msgIdx > 0) return a.resolve({
                            msgIdx: e.msgIdx - 1,
                            statusIdx: e.statusIdx
                        });
                        if (e.statusIdx > 0) {
                            var t = o.statuses[e.statusIdx - 1].statusV3;
                            return o.getFirstUnread(t, !1)
                        }
                        return a.reject(new C)
                    }, this.statusAt = function(e, t) {
                        var n = o.statuses[e.statusIdx],
                            r = n.statusV3;
                        return t < n.msgs.length ? a.resolve({
                            msgIdx: t,
                            statusIdx: e.statusIdx
                        }) : r.msgs.msgLoadState.noEarlierMsgs ? a.reject(new C) : o._fetchMore(r).then((function() {
                            return o.statusAt(e, t)
                        })).catch((function(e) {
                            throw __LOG__(3)`error while loading more status msgs: ${String(e)}`, new C
                        }))
                    }, this._fetchMore = function() {
                        var e = (0, i.default)(r.default.mark((function e(t) {
                            return r.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, m.promiseLoop)(function() {
                                            var e = (0, i.default)(r.default.mark((function e(n, a, i) {
                                                var l, u, s, p, m, g, _, C, x;
                                                return r.default.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return l = (0, h.delayMs)(v.expBackoff(i, 12e4, 1e3, .1)), e.prev = 1, e.next = 4, t.loadMore();
                                                        case 4:
                                                            if (-1 === (u = o.statuses.findIndex((function(e) {
                                                                    return e.statusV3 === t
                                                                })))) {
                                                                e.next = 18;
                                                                break
                                                            }
                                                            s = o.statuses[u], p = s.totalCount, m = s.unreadCount, g = t.msgs.getModelsArray().slice(0, p), _ = p - m, C = g.slice(0, _), x = (0, f.default)(C, (function(e) {
                                                                return e.id.toString()
                                                            })), s.msgs = g, s.readMsgKeys = (0, c.default)((0, d.default)(s.readMsgKeys, x)), n(!0), e.next = 23;
                                                            break;
                                                        case 18:
                                                            if (!(i >= 4)) {
                                                                e.next = 22;
                                                                break
                                                            }
                                                            n(!1), e.next = 23;
                                                            break;
                                                        case 22:
                                                            return e.abrupt("return", l);
                                                        case 23:
                                                            e.next = 32;
                                                            break;
                                                        case 25:
                                                            if (e.prev = 25, e.t0 = e.catch(1), !(i >= 4)) {
                                                                e.next = 31;
                                                                break
                                                            }
                                                            n(!1), e.next = 32;
                                                            break;
                                                        case 31:
                                                            return e.abrupt("return", l);
                                                        case 32:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e, null, [
                                                    [1, 25]
                                                ])
                                            })));
                                            return function() {
                                                return e.apply(this, arguments)
                                            }
                                        }());
                                    case 2:
                                        if (e.sent) {
                                            e.next = 5;
                                            break
                                        }
                                        throw new x;
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(), n) {
                    var u = t.msgs.getModelsArray().find((function(e) {
                        return n && e.id.toString() === n.toString()
                    }));
                    if (!u) throw new S;
                    this.statuses = [{
                        statusV3: t,
                        totalCount: 1,
                        unreadCount: 0,
                        msgs: [u],
                        readMsgKeys: [u.id.toString()]
                    }]
                } else if (t.unreadCount > 0 && !t.contact.isMe && !t.contact.statusMute) {
                    var s = g.StatusV3Collection.getUnexpired(!0),
                        p = [];
                    s.forEach((function(e) {
                        if (!e.contact.statusMute) {
                            var t = e.msgs.getModelsArray(),
                                n = e.totalCount - e.unreadCount,
                                a = t.slice(0, n),
                                o = (0, f.default)(a, (function(e) {
                                    return e.id.toString()
                                }));
                            p.push({
                                statusV3: e,
                                totalCount: e.totalCount,
                                unreadCount: e.unreadCount,
                                msgs: t,
                                readMsgKeys: o
                            })
                        }
                    })), this.statuses = p
                } else {
                    var _ = t.msgs.getModelsArray(),
                        b = t.totalCount - t.unreadCount,
                        y = _.slice(0, b),
                        k = (0, f.default)(y, (function(e) {
                            return e.id.toString()
                        })),
                        j = [{
                            statusV3: t,
                            totalCount: t.totalCount,
                            unreadCount: t.unreadCount,
                            msgs: _,
                            readMsgKeys: k
                        }];
                    this.statuses = j
                }
                this._printInfo()
            }
        },
        73550: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n(34575)),
                r = a(n(93913)),
                i = n(43890),
                l = function() {
                    function e() {
                        var t = this;
                        (0, o.default)(this, e), this._isPlaying = !0, this.addListeners = function(e, n, a, o) {
                            t._handleStart = e, t._handlePause = n, t._handleEnded = a, t._handleLoaded = o
                        }, this.setVideo = function(e) {
                            t._video !== e && (t._unsetVideo(), t._video = e, null != e && (e.addEventListener("playing", t._handlePlayingHandler), e.addEventListener("pause", t._handlePauseHandler), e.addEventListener("ended", t._handleEndedHandler), e.addEventListener("timeupdate", t._handleTimeUpdate), e.addEventListener("loadeddata", t._handleLoadedData)))
                        }, this._unsetVideo = function() {
                            var e = t._video;
                            e && (t.stop(), e.removeEventListener("playing", t._handlePlayingHandler), e.removeEventListener("pause", t._handlePauseHandler), e.removeEventListener("ended", t._handleEndedHandler), e.removeEventListener("timeupdate", t._handleTimeUpdate), e.removeEventListener("loadeddata", t._handleLoadedData))
                        }, this.play = function() {
                            var e;
                            null === (e = t._video) || void 0 === e || e.play()
                        }, this.pause = function() {
                            t._video && !t._video.paused && t._video.pause()
                        }, this.resume = function() {
                            t._video && !t._isPlaying && t._video.play()
                        }, this.stop = function() {
                            t._video && !t._video.paused && t._video.pause()
                        }, this._changeMuted = function(e) {
                            t._video && (t._video.muted = e)
                        }, this.mute = function() {
                            t._changeMuted(!0)
                        }, this.unmute = function() {
                            t._changeMuted(!1)
                        }, this._handlePlayingHandler = function() {
                            t._isPlaying = !0;
                            var e = t._video;
                            if (null != e) {
                                var n = t._handleStart;
                                if (n) {
                                    var a = u(e.duration);
                                    n(1e3 * (a - e.currentTime), 1e3 * a)
                                }
                            }
                        }, this._handlePauseHandler = function() {
                            var e;
                            t._isPlaying = !1, null === (e = t._handlePause) || void 0 === e || e.call(t)
                        }, this._handleEndedHandler = function() {
                            var e;
                            null === (e = t._handleEnded) || void 0 === e || e.call(t)
                        }, this._handleTimeUpdate = function() {
                            var e, n = null === (e = t._video) || void 0 === e ? void 0 : e.currentTime;
                            if (null != n && n >= i.ServerProps.statusVideoMaxDuration) {
                                t.stop(), t._handleEndedHandler();
                                var a = t._video;
                                a && (a.removeEventListener("timeupdate", t._handleTimeUpdate), a.removeEventListener("ended", t._handleEndedHandler))
                            }
                        }, this._handleLoadedData = function() {
                            var e = t._video;
                            if (e) {
                                var n, a = e.audioTracks && e.audioTracks.length > 0 || !0 === e.mozHasAudio || e.webkitAudioDecodedByteCount > 0,
                                    o = e.muted;
                                null === (n = t._handleLoaded) || void 0 === n || n.call(t, a, o)
                            }
                        }, this.removeListeners = function() {
                            t.stop(), t._handleStart = void 0, t._handlePause = void 0, t._handleEnded = void 0
                        }
                    }
                    return (0, r.default)(e, [{
                        key: "duration",
                        get: function() {
                            return null == this._video ? 0 : 1e3 * u(this._video.duration)
                        }
                    }]), e
                }();

            function u(e) {
                return Math.min(e, i.ServerProps.statusVideoMaxDuration)
            }
            t.default = l
        },
        67789: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                window.getSelection().removeAllRanges();
                var t = document.getElementById(e),
                    n = document.createRange();
                t && n.selectNode(t), window.getSelection().addRange(n);
                try {
                    var a = document.execCommand("copy");
                    return window.getSelection().removeAllRanges(), a
                } catch (e) {
                    return !1
                }
            }
        },
        91372: (e, t, n) => {
            e.exports = n.p + "bryndan_write_20e48b2ec8c64b2a1ceb5b28d9bcc9d0.ttf"
        },
        77239: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                coverPhoto: "_3bmNw",
                isEditable: "_1k-Tj",
                avatar: "_1KIoW",
                noStatusBorder: "kNRox",
                hasStatusBorder: "_8N7c7"
            }
        },
        54221: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                cartIcon: "_3Nx1E",
                inheritColor: "_1lxeQ"
            }
        },
        92791: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                labelRow: "_49vG",
                standaloneLabelRow: "_2l3_Y",
                labelContainer: "_1Nfyf",
                standaloneLabelContainer: "DENbs"
            }
        },
        45566: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                chevron: "_2iDVt",
                catalogEntryButton: "_2m9wT",
                shopsLogo: "_31fGS"
            }
        },
        24574: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                prompt: "x-vzn"
            }
        },
        11661: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                linkIcon: "_1FiUT",
                inheritColor: "NwJSN"
            }
        },
        41164: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                linkContainer: "_39Tm3",
                activeLink: "_3YkDH"
            }
        },
        76827: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                addItemButton: "BmLy_",
                themeInList: "_3ZIW8",
                themeCollections: "NFwOH",
                themeDefault: "_2XlPd"
            }
        },
        45829: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                pendingBanner: "_26aYR",
                iconContainerPending: "L-2H5",
                iconContainerRejected: "_39dOD",
                rejectedBanner: "_1tqTc",
                rejectedBannerWithAppeal: "RHd_X"
            }
        },
        9324: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                header: "ycpXx",
                list: "iQNxs"
            }
        },
        3948: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                list: "_3ShRn",
                addItemsNotice: "_31dcv"
            }
        },
        18702: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                collectionListItem: "nIB_q",
                collectionName: "uK8-H",
                seeAllLink: "P0xwG",
                reviewStateRejected: "_3BNoL"
            }
        },
        71524: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                body: "iEmhs",
                loadingContainer: "_6Jq-L",
                text: "_1t5Y4",
                loadingText: "_2ZaWw",
                shiftUp: "_2DwjK",
                availabilityBanner: "_39YKr"
            }
        },
        77954: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                buttonContainer: "_1uea4",
                button: "_3dAt6",
                addToCartButton: "NeLXF",
                addToCartIcon: "ZfREZ",
                addToCartIconDisabled: "_16avf",
                addToCartContainer: "_3L8a9",
                name: "_2_mFa",
                price: "_15XLs",
                originalPrice: "_1oNAr",
                description: "_3ROY2",
                more: "_1dlIm"
            }
        },
        18384: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                productImage: "fkslc",
                productImageContainer: "_18n4q",
                productThumb: "IO4T6",
                productThumbContainer: "ime-i",
                prompt: "_3OFgQ"
            }
        },
        47498: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                header: "_2tWjM",
                list: "_3XbAc"
            }
        },
        42417: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                header: "_16mlH",
                photo: "_21sHs",
                text: "_2lk6f",
                name: "pTNRM",
                description: "_2GV6F",
                spinner: "O1bTA",
                img: "_3i1KT"
            }
        },
        71962: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                imageCarouselContainer: "_3lMwD"
            }
        },
        73567: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                buttons: "_1_Ctk",
                button: "_23YI8"
            }
        },
        62108: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                section: "_2_Qk3",
                reasonList: "_3671k",
                label: "_1mEAu",
                input: "Ot7Tv",
                buttons: "_1HIH3"
            }
        },
        70881: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                notifyName: "_3Pmbe"
            }
        },
        5190: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                separator: "Wt3HP",
                block: "_11V85"
            }
        },
        59147: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                carousel: "alksS",
                contentContainer: "OkAlG",
                slidesContainer: "_1w5W1",
                loaded: "j1J2j",
                fadeIn: "_2QkLV",
                spinnerContainer: "_1kDDe",
                spinner: "_3j4fM"
            }
        },
        31811: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                slide: "_2MjCA",
                slideInnerContainer: "_2cG76",
                image: "ubkU5"
            }
        },
        31319: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                canvasComponent: "_1OaQb",
                canvasEmpty: "_3jEqW",
                canvasSecondRow: "_13Jdf",
                canvasFirst: "az8Pk",
                more: "_2e4dR",
                container: "_1TLrW",
                justifySpaceBetween: "_2UyBh",
                galleryEmpty: "_160BB",
                drawer: "v7KVf",
                drawerBody: "_1QjIY",
                themeChatInfo: "_1Y056"
            }
        },
        79047: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                section: "_17dED",
                control: "_3T0RE"
            }
        },
        46306: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                description: "_1PJIk"
            }
        },
        30626: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                actionText: "-KBcF"
            }
        },
        85406: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                icon: "_3ovSZ"
            }
        },
        15540: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                icon: "_2I7Gg"
            }
        },
        45037: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                container: "_2QzJd",
                disabled: "_37VyS",
                containerNoIcon: "_1EaD-",
                containerListAligned: "_1I4H7",
                icon: "_13qOF",
                danger: "_1O1hL",
                success: "x8B-w",
                bodyContainer: "_36Lzk",
                body: "Qy5WW",
                themeChatInfo: "_3U46U"
            }
        },
        37088: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
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
        38707: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                icon: "woEzZ"
            }
        },
        96420: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                playerWrapper: "eRZop",
                mediaViewer: "_26Q83",
                mediaStateControls: "_1QgJ4",
                playerBackground: "_1NZyY",
                media: "_1cMSa",
                mediaCaption: "_3mK4N",
                progressBackdrop: "_2x6Y5",
                progressBarBackdropNarrow: "_1XJW2",
                profile: "_1DNOU",
                nonClickProfile: "_1VRZa",
                profileNarrow: "ib1vZ",
                profileWithMediaControls: "_1SfD2",
                playerAvatar: "_2rzx9",
                verified: "_2iJLu",
                icon: "t9Exe",
                measuringProfile: "_2AJhM",
                profileMac: "_2_AIZ",
                msgInfo: "_20zpf",
                msgInfoNameWrapper: "_1tRGW",
                msgInfoName: "_3B-fQ",
                msgInfoNamePSA: "_3x4uR",
                msgInfoNamePsa: "_3x4uR",
                timestamp: "_5SjOa",
                playerContent: "_1xAJD",
                v3Image: "_2ATdo",
                actionLink: "_27-nF",
                v3Video: "EdAF7",
                statusPanelPlayerContent: "_2Ks9x",
                statusThumbnailPlayerContent: "_2RQ_J",
                loading: "_3aA3i",
                text: "_3KpnX",
                textLarge: "i-2rU",
                textMedium: "_2uTr8",
                textSmall: "_4WvQQ",
                font_1: "_2fG2M",
                font1: "_2fG2M",
                font_2: "_2MDaZ",
                font2: "_2MDaZ",
                font_3: "_1erpH",
                font3: "_1erpH",
                font_5: "Suusu",
                font5: "Suusu",
                unknown: "_3Rxrh",
                seen: "_3K-VL",
                caption: "o6dEt",
                textThumbnailPlayerContent: "_1V-um",
                statusMediaControls: "SU2X1"
            }
        },
        40805: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                container: "_1ufTj",
                inputContainer: "_1rO5S",
                btnContainer: "_3KRZ3",
                btnPosition: "D6yuB"
            }
        },
        79090: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                statusV3PanelRing: "cFfKt",
                businessContactInfoRing: "_3EL6s",
                read: "_3tgk6",
                unread: "_1min4"
            }
        },
        83166: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                container: "_3b17O",
                containerWithMediaControls: "i3Rke",
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