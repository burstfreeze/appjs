/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [1359], {
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
                return o.fbt._("Couldn't add some participants.", null, {
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
                return o.fbt._("Couldn't remove some participants as an admin.", null, {
                    hk: "IRRDJ"
                })
            }, t.demoteSuccessString = function(e, t) {
                return l.default.t(101, {
                    participantNames: e,
                    _plural: t
                })
            }, t.formatGroupStatusReasonString = c, t.formatParticipantActionString = d, t.formatParticipantStatusReasonString = f, t.formatRemoveResult = function(e, t) {
                return s(e, p, h, m, t)
            }, t.formatResult = s, t.promoteFailedString = function(e, t) {
                return l.default.t(105, {
                    participantNames: e,
                    _plural: t
                })
            }, t.promotePartialFailedString = function() {
                return o.fbt._("Couldn't make some participants admin.", null, {
                    hk: "4A8lPV"
                })
            }, t.promoteSuccessString = function(e, t) {
                return l.default.t(106, {
                    participantNames: e,
                    _plural: t
                })
            }, t.removeFailedString = h, t.removePartialFailedString = m, t.removeSuccessString = p;
            var o = n(48360),
                r = n(20050),
                i = n(38032),
                l = a(n(45159)),
                u = a(n(78208));

            function s(e, t, n, a, o) {
                var l;
                if (207 === e.status) {
                    var s = {};
                    for (var p in e)
                        if (u.default.isWid(p)) {
                            var h = e[p];
                            if ((403 !== h || !i.GK.supportsFeature(i.GK.F.GROUPS_V_4_JOIN_PERMISSION)) && 207 !== h) {
                                s[h] || (s[h] = []);
                                var m = r.ContactCollection.get(p);
                                m && s[h].push(m)
                            }
                        } var v = [];
                    for (var g in s) {
                        var _ = d(t, n, f, parseInt(g, 10), s[g]);
                        _ && v.push(_)
                    }
                    l = v.length > 0 ? v.join("\n") : a()
                } else l = d(t, n, c, e.status, o);
                return l
            }

            function d(e, t, n, a, o) {
                var r = o.map((function(e) {
                        return e.formattedShortName
                    })).join(l.default.t(411)),
                    i = 200 === a,
                    u = i ? e(r, o.length) : t(r, o.length, a),
                    s = i ? "" : n(a, o.length);
                return u.toString() + s.toString()
            }

            function c(e) {
                var t = "";
                switch (e) {
                    case 403:
                        t = " " + o.fbt._("You're not a participant.", null, {
                            hk: "4GsI1U"
                        }).toString();
                        break;
                    case 408:
                        t = " " + l.default.t(104);
                        break;
                    case 404:
                        t = " " + o.fbt._("This group has ended.", null, {
                            hk: "C2izu"
                        }).toString();
                        break;
                    case 429:
                        t = " " + o.fbt._("You've added too many contacts to groups too quickly. Try again later.", null, {
                            hk: "aTFA4"
                        }).toString()
                }
                return t
            }

            function f(e, t) {
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
                        n = " " + o.fbt._("This group is full.", null, {
                            hk: "27htUz"
                        }).toString();
                        break;
                    default:
                        n = " " + o.fbt._("Please try again.", null, {
                            hk: "3S6IYT"
                        }).toString()
                }
                return n
            }

            function p(e, t) {
                return l.default.t(110, {
                    participantNames: e,
                    _plural: t
                })
            }

            function h(e, t, n) {
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

            function m() {
                return o.fbt._("Couldn't remove some participants.", null, {
                    hk: "3N0fyq"
                })
            }
        },
        87547: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                o = n(20862),
                r = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.addParticipants = function(e, t) {
                return v((0, h.unproxy)(e), t)
            }, t.demoteParticipants = function(e, t) {
                return b((0, h.unproxy)(e), t)
            }, t.promoteParticipants = function(e, t) {
                return x((0, h.unproxy)(e), t)
            }, t.removeParticipants = function(e, t) {
                return _((0, h.unproxy)(e), t)
            };
            var i = r(n(87757)),
                l = r(n(48926)),
                u = n(24224),
                s = n(65901),
                d = o(n(18286)),
                c = o(n(1419)),
                f = r(n(45159)),
                p = n(9343),
                h = n(68220),
                m = n(85893);

            function v() {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = (0, l.default)(i.default.mark((function e(t, n) {
                    var o, r, l, h, g, _, C, x = arguments;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = x.length > 2 && void 0 !== x[2] ? x[2] : (0, u.genId)(), null != (l = null === (o = t.groupMetadata) || void 0 === o ? void 0 : o.participants)) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", a.reject(new d.ActionError));
                            case 4:
                                if (!n.some((function(e) {
                                        return l.get(e.id)
                                    }))) {
                                    e.next = 7;
                                    break
                                }
                                return __LOG__(3)`models:groupMetadata:participantCollection:addParticipants already a group member`, e.abrupt("return", a.reject(new d.ActionError));
                            case 7:
                                if (l.canAdd()) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", a.reject(new d.ActionError));
                            case 9:
                                return h = (0, p.sendAddParticipants)(t.id, n.map((function(e) {
                                    return e.id
                                }))), g = n.map((function(e) {
                                    return e.formattedShortName
                                })).join(f.default.t(411)), _ = new u.ActionType(f.default.t(98, {
                                    participantNames: g,
                                    _plural: n.length
                                })), C = h.then((function(e) {
                                    l.sendForNeededAddRequest(e);
                                    var t = c.formatResult(e, c.addSuccessString, c.addFailedString, c.addPartialFailedString, n);
                                    return new u.ActionType(t)
                                })).catch((function() {
                                    return __LOG__(3)`models:groupMetadata:participantCollection:addParticipants dropped`, new u.ActionType(f.default.t(96, {
                                        participantNames: g,
                                        _plural: n.length
                                    }), {
                                        actionText: f.default.t(129),
                                        actionHandler: function() {
                                            return v(t, n, r)
                                        }
                                    })
                                })), s.Cmd.openToast((0, m.jsx)(u.ActionToast, {
                                    id: r,
                                    initialAction: _,
                                    pendingAction: C
                                })), e.next = 16, h;
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function _() {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = (0, l.default)(i.default.mark((function e(t, n) {
                    var o, r, l, h, v, g, C, x = arguments;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = x.length > 2 && void 0 !== x[2] ? x[2] : (0, u.genId)(), null != (l = null === (o = t.groupMetadata) || void 0 === o ? void 0 : o.participants)) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", a.reject(new d.ActionError));
                            case 4:
                                if (!n.some((function(e) {
                                        return !l.canRemove(e)
                                    }))) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", a.reject(new d.ActionError));
                            case 6:
                                return h = (0, p.sendRemoveParticipants)(t.id, n.map((function(e) {
                                    return e.id
                                }))), v = n.map((function(e) {
                                    return e.contact.formattedShortName
                                })).join(f.default.t(411)), g = new u.ActionType(f.default.t(111, {
                                    participantNames: v,
                                    _plural: n.length
                                })), C = h.then((function(e) {
                                    var t = c.formatRemoveResult(e, n.map((function(e) {
                                        return e.contact
                                    })));
                                    return new u.ActionType(t)
                                })).catch((function() {
                                    return __LOG__(3)`models:groupMetadata:participantCollection:removeParticipants dropped`, new u.ActionType(f.default.t(108, {
                                        participantNames: v,
                                        _plural: n.length
                                    }), {
                                        actionText: f.default.t(129),
                                        actionHandler: function() {
                                            return _(t, n, r)
                                        }
                                    })
                                })), s.Cmd.openToast((0, m.jsx)(u.ActionToast, {
                                    id: r,
                                    initialAction: g,
                                    pendingAction: C
                                })), e.next = 13, h;
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function x() {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = (0, l.default)(i.default.mark((function e(t, n) {
                    var o, r, l, h, v, g, _, C = arguments;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = C.length > 2 && void 0 !== C[2] ? C[2] : (0, u.genId)(), null != (l = null === (o = t.groupMetadata) || void 0 === o ? void 0 : o.participants)) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", a.reject(new d.ActionError));
                            case 4:
                                if (!n.some((function(e) {
                                        return !l.canPromote(e)
                                    }))) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", a.reject(new d.ActionError));
                            case 6:
                                return h = (0, p.sendPromoteParticipants)(t.id, n.map((function(e) {
                                    return e.id
                                }))), v = n.map((function(e) {
                                    return e.contact.formattedShortName
                                })).join(f.default.t(411)), g = new u.ActionType(f.default.t(107, {
                                    participantNames: v,
                                    _plural: n.length
                                })), _ = h.then((function(e) {
                                    var t = c.formatResult(e, c.promoteSuccessString, c.promoteFailedString, c.promotePartialFailedString, n.map((function(e) {
                                        return e.contact
                                    })));
                                    return new u.ActionType(t)
                                })).catch((function() {
                                    return __LOG__(3)`models:groupMetadata:participantCollection:removeParticipants dropped`, new u.ActionType(f.default.t(105, {
                                        participantNames: v,
                                        _plural: n.length
                                    }), {
                                        actionText: f.default.t(129),
                                        actionHandler: function() {
                                            return x(t, n, r)
                                        }
                                    })
                                })), s.Cmd.openToast((0, m.jsx)(u.ActionToast, {
                                    id: r,
                                    initialAction: g,
                                    pendingAction: _
                                })), e.next = 13, h;
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function b() {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = (0, l.default)(i.default.mark((function e(t, n) {
                    var o, r, l, h, v, g, _, C = arguments;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = C.length > 2 && void 0 !== C[2] ? C[2] : (0, u.genId)(), null != (l = null === (o = t.groupMetadata) || void 0 === o ? void 0 : o.participants)) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", a.reject(new d.ActionError));
                            case 4:
                                if (!n.some((function(e) {
                                        return !l.canDemote(e)
                                    }))) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", a.reject(new d.ActionError));
                            case 6:
                                return h = (0, p.sendDemoteParticipants)(t.id, n.map((function(e) {
                                    return e.id
                                }))), v = n.map((function(e) {
                                    return e.contact.formattedShortName
                                })).join(f.default.t(411)), g = new u.ActionType(f.default.t(102, {
                                    participantNames: v,
                                    _plural: n.length
                                })), _ = h.then((function(e) {
                                    var t = c.formatResult(e, c.demoteSuccessString, c.demoteFailedString, c.demotePartialFailedString, n.map((function(e) {
                                        return e.contact
                                    })));
                                    return new u.ActionType(t)
                                })).catch((function() {
                                    return __LOG__(3)`models:groupMetadata:participantCollection:demoteParticipants dropped`, new u.ActionType(f.default.t(99, {
                                        participantNames: v,
                                        _plural: n.length
                                    }), {
                                        actionText: f.default.t(129),
                                        actionHandler: function() {
                                            return b(t, n, r)
                                        }
                                    })
                                })), s.Cmd.openToast((0, m.jsx)(u.ActionToast, {
                                    id: r,
                                    initialAction: g,
                                    pendingAction: _
                                })), e.next = 13, h;
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
                u = n(34733),
                s = n(59175),
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
                                    }), e.next = 3, (0, u.sendIq)(t, d);
                                case 3:
                                    if ((n = e.sent).success) {
                                        e.next = 11;
                                        break
                                    }
                                    e.t0 = n.errorCode, e.next = 8;
                                    break;
                                case 8:
                                    throw new s.ServerStatusCodeError(n.errorCode);
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
                return S(e, t, g).catch((0, s.filteredCatch)(m.ServerStatusCodeError, (function(e) {
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
                return S(e, t, v).catch((function(e) {
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
                f = n(34733),
                p = n(5620),
                h = n(15824),
                m = n(59175),
                v = "remove",
                g = "add",
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
                                        jid: (0, h.JID)(e)
                                    })
                                })), e.t0 = o, e.next = e.t0 === g ? 4 : e.t0 === v ? 6 : e.t0 === _ ? 8 : e.t0 === C ? 10 : 12;
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
                                    to: (0, h.GROUP_JID)(t),
                                    type: "set",
                                    xmlns: "w:g2",
                                    id: (0, d.generateId)()
                                }, s), e.next = 16, (0, f.sendIq)(c, x(o));
                            case 16:
                                if (!(p = e.sent).success) {
                                    e.next = 24;
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
                            case 24:
                                return e.abrupt("return", a.reject(new m.ServerStatusCodeError(p.errorCode, p.errorText)));
                            case 25:
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
                l = n(38032),
                u = n(90918),
                s = function(e, t) {
                    return a.resolve(t)
                },
                d = function(e, t) {
                    return a.resolve(t)
                },
                c = n(54302).Mirrored(["INVALID_POSTCODE", "UNSERVICEABLE_POSTCODE"]);
            t.VerifyPostcodeError = c;
            var f = function() {
                var e = (0, i.default)(r.default.mark((function e(t, n) {
                    var a, o;
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (l.GK.supportsFeature(l.GK.F.MD_BACKEND)) {
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
            var a = n(21314).default,
                o = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendAddParticipants = function(e, t) {
                var n;
                if (r.GK.supportsFeature(r.GK.F.MD_BACKEND)) {
                    if (!(n = (0, i.addGroupParticipants)(e, t))) return a.reject(new Error("addParticipants: not supported when not build with MD_BACKEND"))
                } else n = l.default.addParticipants(e, t);
                return n
            }, t.sendDemoteParticipants = function(e, t) {
                var n;
                if (r.GK.supportsFeature(r.GK.F.MD_BACKEND)) {
                    if (!(n = (0, i.demoteGroupParticipants)(e, t))) return a.reject(new Error("sendDemoteParticipants: not supported when not build with MD_BACKEND"))
                } else n = l.default.demoteParticipants(e, t);
                return n
            }, t.sendPromoteParticipants = function(e, t) {
                var n;
                if (r.GK.supportsFeature(r.GK.F.MD_BACKEND)) {
                    if (!(n = (0, i.promoteGroupParticipants)(e, t))) return a.reject(new Error("sendPromoteParticipants: not supported when not build with MD_BACKEND"))
                } else n = l.default.promoteParticipants(e, t);
                return n
            }, t.sendRemoveParticipants = function(e, t) {
                var n;
                if (r.GK.supportsFeature(r.GK.F.MD_BACKEND)) {
                    if (!(n = (0, i.removeGroupParticipants)(e, t))) return a.reject(new Error("sendRemoveParticipants: not supported when not build with MD_BACKEND"))
                } else n = l.default.removeParticipants(e, t);
                return n
            };
            var r = n(38032),
                i = n(85805),
                l = o(n(54270))
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
                    j = e.onLoad,
                    k = e.hideStatusV3,
                    T = (0, u.useState)(window.innerWidth),
                    E = (0, r.default)(T, 2),
                    P = E[0],
                    w = E[1],
                    I = (0, u.useState)(null),
                    A = (0, r.default)(I, 2),
                    M = A[0],
                    O = A[1];
                (0, u.useEffect)((function() {
                    function e() {
                        w(window.innerWidth)
                    }
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []);
                var L = P > 1300 ? 152 : 122,
                    N = !(0, p.canSeeStatusV3OnContact)() || t.statusMute || k ? null : g.StatusV3Collection.get(t.id);

                function R() {
                    N && (s.Cmd.openModalMedia((0, S.jsx)(v.default, {
                        removeTopDrawer: !1,
                        statusV3: N
                    }), {
                        transition: "status-v3-modal"
                    }), y && y())
                }
                var D = null;
                M && (D = (0, S.jsx)(C.UIE, {
                    displayName: "ContextMenu",
                    escapable: !0,
                    popable: !0,
                    requestDismiss: function() {
                        O(null)
                    },
                    children: (0, S.jsx)(x.default, {
                        contextMenu: M
                    })
                }));
                var B, F = null,
                    V = d.default.noStatusBorder;
                null != N && (F = (0, S.jsx)(_.StatusV3ImageRing, {
                    statusV3: N,
                    size: L + 24,
                    stroke: 3,
                    theme: _.RingTheme.BUSINESS_CONTACT_INFO
                }), V = d.default.hasStatusBorder);
                B = n && null != a ? (0, S.jsx)(m.default, {
                    profilePicThumb: a,
                    size: L
                }) : (0, S.jsx)(c.DetailImage, {
                    id: t.id,
                    size: L,
                    loader: !0,
                    onLoad: j,
                    onClick: function(e) {
                        if (b)
                            if (null != N && N.totalCount > 0) {
                                e.stopPropagation(), e.preventDefault();
                                var t = [(0, S.jsx)(f.DropdownItem, {
                                    a8n: "mi-view-photo",
                                    action: function() {
                                        b(e)
                                    },
                                    children: h.default.t(831)
                                }, "view-photo"), (0, S.jsx)(f.DropdownItem, {
                                    a8n: "mi-view-status",
                                    action: R,
                                    children: l.fbt._("View status", null, {
                                        hk: "1QQMZy"
                                    })
                                }, "view-status")];
                                O({
                                    menu: t,
                                    event: e
                                })
                            } else b(e)
                    },
                    quality: c.DETAIL_IMAGE_QUALITY.HIGH
                });
                return (0, S.jsxs)(S.Fragment, {
                    children: [(0, S.jsx)("div", {
                        className: (0, i.default)(d.default.coverPhoto, (0, o.default)({}, d.default.isEditable, n))
                    }), (0, S.jsxs)("div", {
                        className: d.default.avatar,
                        children: [F, (0, S.jsx)("div", {
                            className: V,
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
                d = a(n(95941)),
                c = n(66834),
                f = n(94680),
                p = n(2629),
                h = a(n(45159)),
                m = a(n(70486)),
                v = a(n(11657)),
                g = n(46177),
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
                i = a(n(97449)),
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
                return t && (0, i.canDisplayLabel)() ? (0, s.jsx)("div", {
                    className: (0, r.default)(l.default.labelContainer, (0, o.default)({}, l.default.standaloneLabelContainer, "standalone" === n)),
                    children: function() {
                        if (t) return t.map((function(e, t) {
                            return (0, s.jsx)("div", {
                                className: (0, r.default)(l.default.labelRow, (0, o.default)({}, l.default.standaloneLabelRow, "standalone" === n)),
                                children: (0, s.jsx)(u.Labels, {
                                    labels: [e],
                                    showName: !0
                                })
                            }, t)
                        }))
                    }()
                }) : null
            };
            var o = a(n(59713)),
                r = a(n(94184)),
                i = n(2629),
                l = a(n(65753)),
                u = n(4267),
                s = n(85893)
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
                    x = e.canManageCatalog,
                    S = e.onSendCatalog,
                    b = e.onOpenCollections,
                    y = e.onOpenMerchantDetailsForm,
                    j = e.onOpenSettings,
                    k = (0, r.useContext)(l.DrawerContext);
                return (0, C.jsxs)(C.Fragment, {
                    children: [function() {
                        if (t && a) {
                            var e = (0, _.isNumber)(n) && n > 0 ? n.toString() : void 0,
                                r = (0, h.getOnCartClickWithLog)(t, a, (0, v.getProductCatalogContext)(k));
                            return (0, C.jsx)(m.MenuBarItem, {
                                a8nText: "menu-bar-cart-link",
                                icon: (0, C.jsx)(i.default, {
                                    theme: "inherit-color"
                                }),
                                text: e,
                                title: o.fbt._("Your cart", null, {
                                    hk: "Sn66V"
                                }),
                                onClick: r
                            })
                        }
                        return null
                    }(), x ? (0, C.jsx)(m.MenuBarItem, {
                        a8nText: "menu-bar-menu",
                        icon: (0, C.jsx)(g.default, {
                            name: "menu"
                        }),
                        title: f.default.t(621),
                        children: (0, C.jsxs)(u.Dropdown, {
                            type: "dropdown_menu",
                            flipOnRTL: !0,
                            dirX: u.DirX.LEFT,
                            children: [(0, C.jsx)(s.DropdownItem, {
                                a8n: "mi-foward menu-item",
                                action: S,
                                children: f.default.t(470)
                            }), b && (0, C.jsx)(s.DropdownItem, {
                                a8n: "mi-collections menu-item",
                                action: b,
                                children: o.fbt._("Collections", null, {
                                    hk: "1VWu7A"
                                })
                            }), (0, c.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney)((0, d.getMeUser)().user) && y && (0, C.jsx)(s.DropdownItem, {
                                a8n: "merchant-details",
                                action: y,
                                children: o.fbt._("Business details", null, {
                                    hk: "m9xzp"
                                })
                            }, "merchantDetails"), (0, c.canToggleCartOnOff)() && j && (0, C.jsx)(s.DropdownItem, {
                                a8n: "mi-settings menu-item",
                                action: j,
                                children: o.fbt._("Settings", null, {
                                    hk: "2RmHUB"
                                })
                            })]
                        }, "CatalogDetailHeader")
                    }) : (0, C.jsx)(m.MenuBarItem, {
                        a8nText: "menu-bar-catalog-link",
                        icon: (0, C.jsx)(p.default, {}),
                        title: o.fbt._("Catalog link", null, {
                            hk: "M36Dw"
                        }),
                        onClick: S
                    })]
                })
            };
            var o = n(48360),
                r = n(67294),
                i = a(n(18496)),
                l = n(96706),
                u = n(98169),
                s = n(94680),
                d = n(1577),
                c = n(2629),
                f = a(n(45159)),
                p = a(n(18719)),
                h = n(71072),
                m = n(91823),
                v = n(52867),
                g = a(n(7665)),
                _ = n(82118),
                C = n(85893)
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
                l = a(n(52892)),
                u = n(96706),
                s = a(n(46821)),
                d = n(27968),
                c = n(2629),
                f = n(56264),
                p = n(41870),
                h = n(52867),
                m = n(46408),
                v = n(47576),
                g = n(68220),
                _ = a(n(7665)),
                C = a(n(76080)),
                x = n(85893),
                S = {
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

            function b(e) {
                var t = e.onProductCatalog,
                    n = e.title,
                    a = e.subtitle,
                    b = e.animation,
                    y = e.sectionTheme,
                    j = e.shouldLog,
                    k = e.catalog,
                    T = e.onProductDetail,
                    E = e.filterProductId,
                    P = e.productsToShow,
                    w = e.hideIncompleteRows,
                    I = e.showProductPlaceholders,
                    A = e.seeMoreOverlay,
                    M = e.catalogEntryLabel,
                    O = e.showShopsLogo,
                    L = (0, r.useContext)(u.DrawerContext);
                (0, r.useEffect)((function() {
                    j && null != k && (0, f.logBusinessProfileCatalogView)({
                        catalogOwnerWid: k.id,
                        catalogContext: (0, h.getProductCatalogContext)(L)
                    })
                }), []);
                var N = null == M ? null : (0, x.jsx)("div", {
                        className: l.default.catalogEntryButton,
                        children: (0, x.jsx)(i.default, {
                            a8nText: "catalog-entry-button",
                            type: "secondary",
                            onClick: function() {
                                return t((0, h.getProductCatalogContext)(L), "ContactInfo")
                            },
                            children: M
                        })
                    }),
                    R = function() {
                        var e, n = [],
                            a = P,
                            r = void 0;
                        if ((0, c.canSeeBizProfileV3)() && (r = "largeGallerySpacing"), null != k ? (e = k.productCollection, n = k.productCollection.getProductModels(), w && n.length > 3 && (a = Math.min(P, n.length - n.length % 3)), n = (n = n.slice(0, a + 1)).filter((function(e) {
                                return e.id.toString() !== E
                            })).map((function(e, n) {
                                var i, l, u = null === (i = e.getPreviewImage()) || void 0 === i ? void 0 : i.mediaData;
                                return u ? (A && n === a - 1 && k.productCollection.length > a - 1 && (l = o.fbt._("See more", null, {
                                    hk: "450jnd"
                                })), (0, x.jsx)(v.ProductThumb, {
                                    onClick: function() {
                                        return l ? t((0, h.getProductCatalogContext)(L), "ContactInfo") : function(e) {
                                            j && (0, f.logProfileProductClick)({
                                                product: (0, g.unproxy)(e),
                                                catalogContext: (0, h.getProductCatalogContext)(L)
                                            }), T(e)
                                        }(e)
                                    },
                                    mediaData: u,
                                    overlayContent: l,
                                    theme: r
                                }, e.id.toString())) : (0, x.jsx)(x.Fragment, {})
                            })).slice(0, a)) : (e = new m.ProductCollection).add({
                                id: "_ph"
                            }), !n.length && !I) return null;
                        for (var i, l = S.addIcon; I && n.length < a;) n.push((0, x.jsx)(C.default, {
                            onClick: function() {
                                return t((0, h.getProductCatalogContext)(L), "ContactInfo")
                            },
                            title: o.fbt._("Add product", null, {
                                hk: "3gdovw"
                            }),
                            xstyle: [l, "largeGallerySpacing" === r && S.largeGallerySpacing],
                            children: (0, x.jsx)(x.Fragment, {})
                        }, `_ph${n.length}`)), l = S.placeholderThumb;
                        return (0, c.canSeeBizProfileV3)() && (i = "space-between"), (0, x.jsx)(p.MediaGalleryView, {
                            productMedias: n,
                            mediaCollection: e,
                            justify: i
                        })
                    }(),
                    D = a ? (0, x.jsx)(d.FlexItem, {
                        xstyle: S.subtitle,
                        children: a
                    }) : null,
                    B = (0, x.jsxs)(d.FlexRow, {
                        align: "center",
                        children: [D, (0, x.jsx)(d.FlexItem, {
                            children: (0, x.jsx)(_.default, {
                                className: l.default.chevron,
                                name: "chevron-right-alt",
                                directional: !0
                            })
                        })]
                    });
                return (0, x.jsxs)(s.default, {
                    title: n || o.fbt._("Products", null, {
                        hk: "3Ky71N"
                    }),
                    titleOnClick: function() {
                        return t((0, h.getProductCatalogContext)(L), "ContactInfo")
                    },
                    subtitle: B,
                    theme: y,
                    animation: b,
                    children: [R, N, O ? (0, x.jsx)("div", {
                        className: l.default.shopsLogo,
                        children: (0, x.jsx)(_.default, {
                            name: "fbshops",
                            display: "inline"
                        })
                    }) : null]
                })
            }
            b.defaultProps = {
                productsToShow: 6,
                sectionTheme: "padding",
                hideIncompleteRows: !1
            };
            var y = b;
            t.default = y
        },
        20859: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = e.onBack,
                    j = e.onCancel,
                    k = e.catalog,
                    T = e.contact,
                    E = e.prompt,
                    P = e.centerDrawer,
                    w = e.onSend,
                    I = (0, r.useContext)(p.DrawerContext),
                    A = function() {
                        u.Cmd.openModal((0, b.jsx)(C.default, {
                            catalog: k,
                            onSend: w
                        }), {
                            transition: "modal-flow"
                        }), (0, v.logShareCatalogViaWALinkClick)({
                            catalogOwnerWid: k.id,
                            catalogContext: (0, _.getProductCatalogContext)(I)
                        })
                    },
                    M = (0, b.jsx)(d.DetailImage, {
                        id: T.id,
                        size: 82,
                        quality: d.DETAIL_IMAGE_QUALITY.HIGH
                    });
                P && (t = "labels", n = "center-column");
                return (0, b.jsxs)(c.default, {
                    theme: t,
                    children: [(0, b.jsx)(h.DrawerHeader, {
                        a8n: "catalog-link-title",
                        title: o.fbt._("Catalog link", null, {
                            hk: "M36Dw"
                        }),
                        onBack: a,
                        onCancel: j,
                        type: h.DRAWER_HEADER_TYPE.SMALL
                    }), (0, b.jsxs)(f.default, {
                        theme: n,
                        children: [(0, b.jsx)("div", {
                            className: i.default.prompt,
                            children: E
                        }), (0, b.jsx)(l.default, {
                            image: M,
                            primary: (0, b.jsx)(g.Name, {
                                contact: T,
                                useVerifiedName: !0
                            }),
                            theme: "identity",
                            secondary: (0, b.jsx)(m.default, {
                                id: y,
                                href: (0, S.createCatalogLink)(k.id.user),
                                onClick: function(e) {
                                    e.preventDefault(), A()
                                },
                                noHandle: !0
                            })
                        }), (0, b.jsx)(x.default, {
                            onClick: A
                        }), (0, b.jsx)(s.default, {
                            elementId: y,
                            onClick: function() {
                                (0, v.logShareCatalogCopyLinkClick)({
                                    catalogOwnerWid: k.id,
                                    catalogContext: (0, _.getProductCatalogContext)(I)
                                })
                            }
                        })]
                    })]
                }, "catalog-link-drawer")
            };
            var o = n(48360),
                r = n(67294),
                i = a(n(71429)),
                l = a(n(88186)),
                u = n(65901),
                s = a(n(22261)),
                d = n(66834),
                c = a(n(53187)),
                f = a(n(18345)),
                p = n(96706),
                h = n(19288),
                m = a(n(59397)),
                v = n(56264),
                g = n(1191),
                _ = n(52867),
                C = a(n(35140)),
                x = a(n(59782)),
                S = n(91240),
                b = n(85893),
                y = "catalog-link-anchor"
        },
        38345: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return u.apply(this, arguments)
            };
            var o = a(n(87757)),
                r = a(n(48926)),
                i = n(26141),
                l = n(2629);

            function u() {
                return (u = (0, r.default)(o.default.mark((function e(t) {
                    var n, a, r;
                    return o.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ((0, l.cartPropEnabled)()) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", !1);
                            case 2:
                                if ((a = i.BusinessProfileCollection.get(t)) && !a.stale) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 6, i.BusinessProfileCollection.update(t);
                            case 6:
                                r = e.sent, a = Array.isArray(r) ? r[0] : r;
                            case 8:
                                return e.abrupt("return", (null === (n = a.profileOptions) || void 0 === n ? void 0 : n.cartEnabled) || !1);
                            case 9:
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
                    C = e.onProductLinkClick,
                    x = e.onProductMoreInformation,
                    S = e.onCartClick,
                    b = e.cartCount,
                    y = e.catalogId,
                    j = (0, r.useContext)(l.DrawerContext);
                return (0, _.jsxs)(_.Fragment, {
                    children: [function() {
                        if (S && y) {
                            var e = (0, g.isNumber)(b) && b > 0 ? b.toString() : void 0,
                                t = (0, p.getOnCartClickWithLog)(S, y, (0, m.getProductCatalogContext)(j));
                            return (0, _.jsx)(h.MenuBarItem, {
                                a8nText: "menu-bar-cart-link",
                                icon: (0, _.jsx)(i.default, {}),
                                text: e,
                                title: o.fbt._("Your cart", null, {
                                    hk: "Sn66V"
                                }),
                                onClick: t
                            })
                        }
                        return null
                    }(), (0, _.jsx)(h.MenuBarItem, {
                        a8nText: "menu-bar-product-link",
                        icon: (0, _.jsx)(f.default, {}),
                        title: o.fbt._("Product link", null, {
                            hk: "1RIlvV"
                        }),
                        onClick: C
                    }), (0, _.jsx)(h.MenuBarItem, {
                        a8nText: "menu-bar-menu",
                        icon: (0, _.jsx)(v.default, {
                            name: "menu"
                        }),
                        title: c.default.t(621),
                        children: (0, _.jsxs)(u.Dropdown, {
                            type: "dropdown_menu",
                            flipOnRTL: !0,
                            dirX: u.DirX.LEFT,
                            children: [(0, _.jsx)(s.DropdownItem, {
                                a8n: "mi-send menu-item",
                                action: n,
                                children: o.fbt._("Send product", null, {
                                    hk: "1wkzue"
                                })
                            }), (0, d.canSeeECommerceComplianceIndiaSoftEnforcement)(t) && (0, _.jsx)(s.DropdownItem, {
                                a8n: "mi-send menu-item",
                                action: x,
                                children: o.fbt._("More information", null, {
                                    hk: "2JHvi1"
                                })
                            }), (0, _.jsx)(s.DropdownItem, {
                                a8n: "mi-report menu-item",
                                action: a,
                                children: o.fbt._("Report product", null, {
                                    hk: "1jgCyX"
                                })
                            })]
                        }, "ProductDetailHeader")
                    })]
                })
            };
            var o = n(48360),
                r = n(67294),
                i = a(n(18496)),
                l = n(96706),
                u = n(98169),
                s = n(94680),
                d = n(2629),
                c = a(n(45159)),
                f = a(n(18719)),
                p = n(71072),
                h = n(91823),
                m = n(52867),
                v = a(n(7665)),
                g = n(82118),
                _ = n(85893)
        },
        23519: (e, t, n) => {
            "use strict";
            var a = n(20862);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseErrorState = function(e, t) {
                if (e instanceof r.Unmount);
                else if (e instanceof o.ServerStatusCodeError) "not_found" === e.status || 404 === e.status ? t("NOT_FOUND") : (t("ERROR"), __LOG__(3)`parseErrorState:Failed to fetch from server`);
                else {
                    if (!(e instanceof o.WebdDrop)) throw t("ERROR"), e;
                    t("ERROR"), __LOG__(3)`parseErrorState:Failed to fetch due to WebdDrop`
                }
            };
            var o = n(59175),
                r = a(n(18286))
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
                i = a(n(52387)),
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
                i = a(n(34079)),
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
            var o = a(n(24100)),
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
                    d.Cmd.openModal((0, b.jsx)(c.default, {
                        title: s.fbt._("Delete Collection", null, {
                            hk: "2y3JZ4"
                        }),
                        okText: s.fbt._("OK", null, {
                            hk: "2KEeHb"
                        }),
                        cancelText: s.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: function() {
                            d.Cmd.closeModal(),
                                function() {
                                    return k.apply(this, arguments)
                                }(e, t, n).then((function(e) {
                                    return a(e)
                                })).catch((function(e) {
                                    return o(e)
                                }))
                        },
                        onCancel: function() {
                            d.Cmd.closeModal(), a(!1)
                        },
                        children: (0, b.jsx)("div", {
                            children: s.fbt._("When you delete this collection, items in the collection will not be deleted.", null, {
                                hk: "192Jcv"
                            })
                        })
                    }))
                }))
            }, t.handleCollectionSave = function(e, t, n, a, o, r) {
                var i;
                _.QPL.markerPoint(C.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_start"), i = t ? (0, g.editCollection)(t.id.toString() || "", n === t.name ? void 0 : n, !1, a.map((function(e) {
                    return e.id.toString()
                })), o.map((function(e) {
                    return e.id.toString()
                })), r.session.toString()).then((function(r) {
                    return _.QPL.markerPoint(C.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_end"), t.name = n, t.reviewStatus = r.reviewStatus, e.collections.replaceId(t.id, r.id), 0 === a.length && 0 === o.length || (t.productCollection.reset(), t.afterCursor = void 0, e.collections.reset(), e.collections.afterCursor = ""), !0
                })) : (0, g.createCollection)(n, a.map((function(e) {
                    return e.id.toString()
                })), r.session.toString()).then((function(t) {
                    return _.QPL.markerPoint(C.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_end"), (0, p.logCollectionCreated)({
                        catalogContext: r,
                        collectionId: t.id,
                        productCount: a.length
                    }), e.collections.reset(), e.collections.afterCursor = "", !0
                }));
                return i.catch((function(e) {
                    var t = function(e) {
                            d.Cmd.openToast((0, b.jsx)(x.Toast, {
                                msg: e,
                                id: (0, x.genId)("catalog_save_collection_failed")
                            }))
                        },
                        n = s.fbt._("Failed to save collection", null, {
                            hk: "3Chwhp"
                        });
                    if ("not-acceptable" === e.text) return "products" === e.fieldName && "duplicate" === e.fieldReason && (n = s.fbt._("You already have a collection with this group of items. Add or delete items to make a different group.", null, {
                        hk: "1fZXaY"
                    })), "collection" === e.fieldName && "empty" === e.fieldReason && (n = s.fbt._("A collection must have at least one item in it", null, {
                        hk: "39rLHR"
                    })), t(n), !1;
                    throw __LOG__(4, !0, new Error, !0)`Failed to save collection, error: ${e}`, SEND_LOGS("Saving collection failed"), t(n), e
                }))
            }, t.handleProductDelete = function(e, t, n, o) {
                return (0, f.logDeleteProductClick)(t, 1, n), new a((function(a, r) {
                    d.Cmd.openModal((0, b.jsx)(c.default, {
                        title: s.fbt._("Delete Item", null, {
                            hk: "20DBg1"
                        }),
                        okText: s.fbt._("OK", null, {
                            hk: "2KEeHb"
                        }),
                        cancelText: s.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: function() {
                            d.Cmd.closeModal(), _.QPL.markerStart(C.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, {
                                    string: {
                                        EntryPoint: o
                                    }
                                }),
                                function() {
                                    return y.apply(this, arguments)
                                }(e, t, n).then((function(e) {
                                    _.QPL.markerEnd(C.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, _.QuickLogActionType.SUCCESS), a(e)
                                })).catch((function(e) {
                                    _.QPL.markerEnd(C.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, _.QuickLogActionType.FAIL), r(e)
                                }))
                        },
                        onCancel: function() {
                            d.Cmd.closeModal(), a(!1)
                        },
                        children: (0, b.jsx)("div", {
                            children: s.fbt._("Are you sure you want to delete this item from your catalog?", null, {
                                hk: "2WwNSA"
                            })
                        })
                    }))
                }))
            }, t.handleProductVisibilityChange = function(e, t, n, o) {
                var r = t.id.toString(),
                    i = !t.isHidden;
                i ? (0, f.logCatalogProductHideClick)(r, n) : (0, f.logCatalogProductShowClick)(r, n);
                return new a((function(a, l) {
                    var u = t.isHidden ? s.fbt._("Show item in your catalog?", null, {
                        hk: "VfDKM"
                    }) : s.fbt._("Hide item in your catalog?", null, {
                        hk: "1KmslI"
                    });
                    d.Cmd.openModal((0, b.jsx)(c.default, {
                        okText: s.fbt._("OK", null, {
                            hk: "2KEeHb"
                        }),
                        cancelText: s.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: function() {
                            _.QPL.markerStart(C.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, {
                                    string: {
                                        EntryPoint: o
                                    }
                                }), d.Cmd.closeModal(),
                                function() {
                                    return j.apply(this, arguments)
                                }(e, t).then((function() {
                                    _.QPL.markerEnd(C.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, _.QuickLogActionType.SUCCESS), i ? (0, f.logCatalogProductHideSuccess)(r, n) : (0, f.logCatalogProductShowSuccess)(r, n), a(!0)
                                })).catch((function(e) {
                                    _.QPL.markerEnd(C.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, _.QuickLogActionType.FAIL), i ? (0, f.logCatalogProductHideFailed)(r, n) : (0, f.logCatalogProductShowFailed)(r, n), l(e)
                                }))
                        },
                        onCancel: function() {
                            d.Cmd.closeModal(), i ? (0, f.logCatalogProductHideCancelled)(r, n) : (0, f.logCatalogProductShowCancelled)(r, n), a(!1)
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
                s = n(48360),
                d = n(65901),
                c = o(n(86777)),
                f = n(56264),
                p = n(32065),
                h = n(36949),
                m = n(8842),
                v = n(46408),
                g = n(391),
                _ = n(3298),
                C = n(4099),
                x = n(92428),
                S = n(59175),
                b = n(85893);

            function y() {
                return (y = (0, l.default)(i.default.mark((function e(t, n, a) {
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, h.deleteProducts)([n.id.toString()]);
                            case 3:
                                return (0, f.logDeleteProductSuccess)(n, 1, a), t.productCollection.evictImagesFromCache(n.id.toString()), t.productCollection.remove(n.id.toString()), t.collections && t.collections.forEach((function(e) {
                                    return e.productCollection.remove(n.id.toString())
                                })), e.abrupt("return", !0);
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(0), e.abrupt("return", (0, u.filteredCatch)(S.ServerStatusCodeError, (function(e) {
                                    return (0, f.logDeleteProductFailed)(n, 1, a, e.statusCode), d.Cmd.openToast((0, b.jsx)(x.Toast, {
                                        msg: s.fbt._("Failed to delete product", null, {
                                            hk: "18E03X"
                                        }),
                                        id: (0, x.genId)("catalog_delete_product_failed")
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

            function j() {
                return (j = (0, l.default)(i.default.mark((function e(t, n) {
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, m.productVisibilitySet)([{
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

            function k() {
                return (k = (0, l.default)(i.default.mark((function e(t, n, a) {
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, g.deleteCollection)(n.id.toString(), a.session.sessionId.toString());
                            case 3:
                                return t.collections.remove(n.id.toString()), (0, p.logCollectionDeleted)({
                                    catalogContext: a,
                                    collectionId: n.id
                                }), e.abrupt("return", !0);
                            case 8:
                                return e.prev = 8, e.t0 = e.catch(0), e.abrupt("return", (0, u.filteredCatch)(S.ServerStatusCodeError, (function(e) {
                                    return __LOG__(4, !0, new Error, !0)`Failed to delete collection, error: ${e}`, SEND_LOGS("Deleteing collection failed"), d.Cmd.openToast((0, b.jsx)(x.Toast, {
                                        msg: s.fbt._("Failed to delete collection", null, {
                                            hk: "S7UrR"
                                        }),
                                        id: (0, x.genId)("catalog_delete_product_failed")
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
                                return _.QPL.markerPoint(C.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, "datasource_start"), e.next = 3, (0, g.appealCollection)(t.id.toString(), n);
                            case 3:
                                t.set({
                                    canAppeal: !1,
                                    reviewStatus: v.PRODUCT_REVIEW_STATUS.PENDING
                                }), _.QPL.markerPoint(C.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, "datasource_end");
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
                l = (a(n(56720)), a(n(57086))),
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
                    a = (0, m.jsx)("div", {
                        className: s.default.iconContainerRejected,
                        children: (0, m.jsx)(h.default, {
                            name: "info"
                        })
                    }),
                    i = function() {
                        n && n(t)
                    },
                    v = function() {
                        u.Cmd.openModal((0, m.jsx)(r.default, {
                            collection: t
                        }))
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
                        return (0, c.canAppealCollections)() ? function() {
                            var e = (t.rejectReason || "other_violation").toLowerCase(),
                                n = (0, d.getRejectedCollectionCopy)(e, t.commerceUrl),
                                r = (0, m.jsx)(l.default, {
                                    onClick: i,
                                    children: o.fbt._("rename the collection", null, {
                                        hk: "2j5eIB"
                                    })
                                });
                            if (t.canAppeal) {
                                var u = (0, m.jsx)(l.default, {
                                        onClick: v,
                                        children: o.fbt._("request another review", null, {
                                            hk: "2BSEoy"
                                        })
                                    }),
                                    c = (0, m.jsx)(f.default, {
                                        id: 310,
                                        params: {
                                            rename_collection_link: r,
                                            request_another_review_link: u
                                        }
                                    });
                                return (0, m.jsxs)("div", {
                                    className: s.default.rejectedBannerWithAppeal,
                                    children: [n.first, (0, m.jsx)("br", {}), c, a]
                                })
                            }
                            var p = (0, m.jsx)(f.default, {
                                id: 334,
                                params: {
                                    rename_collection_link: r
                                }
                            });
                            return (0, m.jsxs)("div", {
                                className: s.default.rejectedBannerWithAppeal,
                                children: [n.second, (0, m.jsx)("br", {}), p, a]
                            })
                        }() : (0, m.jsxs)("div", {
                            className: s.default.rejectedBanner,
                            children: [o.fbt._("This collection wasn’t approved because it doesn’t follow our guidelines.", null, {
                                hk: "4bjvNq"
                            }), (0, m.jsx)(l.default, {
                                onClick: i,
                                children: o.fbt._("Rename", null, {
                                    hk: "2U6ctb"
                                })
                            }), a]
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
                s = a(n(49437)),
                d = n(55122),
                c = n(2629),
                f = a(n(62848)),
                p = n(46408),
                h = a(n(7665)),
                m = n(85893)
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
                    j = b[1],
                    k = (0, g.useModelValues)(e.catalog, ["productCollection", "afterCursor", "id", "index"]),
                    T = function(e) {
                        n && n(e)
                    };
                if (!k.productCollection || !k.productCollection.getProductModels(e.canManageCatalog).length) return null;
                return (0, _.jsx)(c.default, {
                    flatListControllers: [e.flatListController],
                    children: (0, _.jsx)(d.FlatList, {
                        flatListController: e.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: (E = void 0 !== a, k.productCollection.getProductModels(x).map((function(e) {
                            return {
                                itemKey: `${e.id.toString()}_${E.toString()}`,
                                product: e
                            }
                        }))),
                        renderItem: function(e) {
                            var n = e.product;
                            return (0, _.jsx)(s.DrawerContext.Consumer, {
                                children: function(e) {
                                    var o = (0, h.getProductCatalogContext)(e);
                                    return (0, _.jsx)(m.default, {
                                        product: n,
                                        onCartOpen: a,
                                        onClick: function() {
                                            return function(e, n) {
                                                return (0, p.logCatalogListDetailClick)({
                                                    product: (0, v.unproxy)(e),
                                                    catalogContext: n
                                                }), j(e.id.toString()), t(e)
                                            }(n, o)
                                        },
                                        onProductShare: C ? T : null,
                                        onProductDelete: function(e) {
                                            return function(e, t) {
                                                (0, i.handleProductDelete)(k, e, t, "Catalog").then((function() {
                                                    e.id === y && (u.Cmd.closeDrawerMid(), j(void 0))
                                                }))
                                            }(e, o)
                                        },
                                        onProductHideShow: function(e) {
                                            return function(e, t) {
                                                (0, i.handleProductVisibilityChange)(k, e, t, "Catalog")
                                            }(e, o)
                                        },
                                        canManageCatalog: x
                                    })
                                }
                            })
                        },
                        defaultItemHeight: l.PRODUCT_LIST_ITEM_HEIGHT,
                        keyOrder: f.KeyOrder.INVERSE
                    })
                });
                var E
            };
            var o = a(n(63038)),
                r = n(67294),
                i = n(56734),
                l = n(66419),
                u = n(65901),
                s = n(96706),
                d = n(73568),
                c = a(n(23803)),
                f = n(69725),
                p = n(56264),
                h = n(52867),
                m = a(n(99262)),
                v = n(68220),
                g = n(69283),
                _ = n(85893)
        },
        63917: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = (0, h.default)(),
                    C = (0, u.useState)({
                        state: g.NOT_STARTED
                    }),
                    x = (0, i.default)(C, 2),
                    S = x[0],
                    b = x[1],
                    y = (0, u.useState)(e.existingPostcode),
                    j = (0, i.default)(y, 2),
                    k = j[0],
                    T = j[1],
                    E = function() {
                        var t = (0, r.default)(o.default.mark((function t() {
                            var n;
                            return o.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if ("string" == typeof k) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return b({
                                            state: g.IN_PROGRESS
                                        }), t.prev = 3, t.next = 6, (0, m.verifyPostcode)(e.catalogId, k);
                                    case 6:
                                        n = t.sent, a() && b({
                                            state: g.COMPLETED,
                                            data: n
                                        }), (null == n ? void 0 : n.success) && (e.onSuccess(), s.Cmd.openToast((0, v.jsx)(p.Toast, {
                                            msg: l.fbt._("Postcode Updated", null, {
                                                hk: "JqNfH"
                                            }),
                                            id: (0, p.genId)()
                                        }))), t.next = 14;
                                        break;
                                    case 11:
                                        t.prev = 11, t.t0 = t.catch(3), a() && b({
                                            state: g.FAILED
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
                    P = (0, u.useCallback)((function() {
                        return b({
                            state: g.NOT_STARTED
                        })
                    }), []),
                    w = !!S.data && !S.data.success && S.data.postcodeError === m.VerifyPostcodeError.UNSERVICEABLE_POSTCODE,
                    I = null;
                (null === (t = S.data) || void 0 === t ? void 0 : t.success) || (null === (n = S.data) || void 0 === n ? void 0 : n.postcodeError) !== m.VerifyPostcodeError.INVALID_POSTCODE ? "string" != typeof k || 0 === k.length ? I = l.fbt._("Postcode must not be empty", null, {
                    hk: "3OZGho"
                }) : 0 !== k.search("^[0-9]{6}$") && (I = l.fbt._("Postcode must be six digits. For example 400001", null, {
                    hk: "3PYeri"
                })) : I = l.fbt._("Provided postcode is invalid", null, {
                    hk: "1MOgzc"
                });
                var A = S.state === g.IN_PROGRESS;
                return (0, v.jsx)(d.default, {
                    onOK: function() {
                        w ? P() : E()
                    },
                    title: w ? null : l.fbt._("Change Pincode", null, {
                        hk: "3R9hJZ"
                    }),
                    okDisabled: A || !!I,
                    okSpinner: A,
                    okText: w ? l.fbt._("OK", null, {
                        hk: "2sRDxR"
                    }) : l.fbt._("Enter", null, {
                        hk: "3Qj2Bg"
                    }),
                    onCancel: w || A ? null : e.onCancel,
                    children: w ? (0, v.jsx)(c.Text, {
                        as: "p",
                        children: l.fbt._("We are currently not delivering in this area.", null, {
                            hk: "1ZEmzv"
                        })
                    }) : (0, v.jsxs)(v.Fragment, {
                        children: [(0, v.jsx)(c.Text, {
                            as: "p",
                            xstyle: _.infoText,
                            children: l.fbt._("To see items available in your area, enter your pincode.", null, {
                                hk: "1QTxOy"
                            })
                        }), (0, v.jsx)(f.TextInput, {
                            onChange: function(e) {
                                P(), T(e)
                            },
                            value: k,
                            managed: !0,
                            editable: S.state !== g.IN_PROGRESS,
                            managedError: !0,
                            selectOnMount: !0,
                            focusOnMount: !0,
                            error: I
                        }), (0, v.jsx)(c.Text, {
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
                s = (a(n(56720)), n(65901)),
                d = a(n(86777)),
                c = n(22552),
                f = n(68544),
                p = n(92428),
                h = a(n(32412)),
                m = n(26041),
                v = n(85893),
                g = n(54302).Mirrored(["NOT_STARTED", "COMPLETED", "FAILED", "IN_PROGRESS"]),
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
                    q = e.canLogQpl,
                    z = void 0 === q || q,
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
                    se = (0, W.default)(),
                    de = (0, D.default)(),
                    ce = (0, R.default)(de, 100),
                    fe = (0, B.default)((function() {
                        return new E.default
                    })),
                    pe = (0, F.useModelValues)(e.contact, ["id"]),
                    he = (0, s.useMemo)((function() {
                        return f.CartCollection.findCart(pe.id.toString())
                    }), [pe.id]),
                    me = (0, s.useState)(!1),
                    ve = (0, i.default)(me, 2),
                    ge = ve[0],
                    _e = ve[1],
                    Ce = (0, s.useState)(null),
                    xe = (0, i.default)(Ce, 2),
                    Se = xe[0],
                    be = xe[1],
                    ye = (0, s.useState)(he.itemCount),
                    je = (0, i.default)(ye, 2),
                    ke = je[0],
                    Te = je[1],
                    Ee = (0, s.useState)("NONE"),
                    Pe = (0, i.default)(Ee, 2),
                    we = Pe[0],
                    Ie = Pe[1],
                    Ae = (0, s.useState)(null),
                    Me = (0, i.default)(Ae, 2),
                    Oe = Me[0],
                    Le = Me[1],
                    Ne = (0, s.useState)(null),
                    Re = (0, i.default)(Ne, 2),
                    De = Re[0],
                    Be = Re[1],
                    Fe = (0, s.useState)(!0),
                    Ve = (0, i.default)(Fe, 2),
                    We = Ve[0],
                    Ue = Ve[1],
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
                    Ge = (0, R.default)((function() {
                        de(), null == ie || ie()
                    }), 100),
                    qe = function() {
                        var e = z && Q,
                            n = e ? N.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW : void 0;
                        h.CatalogCollection.find(t, {
                            markerId: n
                        }).then((function(t) {
                            if (!se.aborted) {
                                var n = new C.CatalogWithCollectionsDataSource(t, G || !1, m.PRODUCT_LIST_ITEM_HEIGHT, e),
                                    a = new C.CatalogListItemScrollHelper(n);
                                be(t), Le(n), Be(a), Ie("SUCCESS"), He(n).then((function() {
                                        e && L.QPL.markerEnd(N.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, L.QuickLogActionType.SUCCESS)
                                    })).catch((function() {
                                        e && L.QPL.markerEnd(N.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, L.QuickLogActionType.FAIL)
                                    })),
                                    function(e) {
                                        $ && null != e && (e.productCollection.on("add", ce), e.productCollection.on("remove", Ge), e.collections.on("add", ce), e.collections.on("remove", ce))
                                    }(t), void 0 !== Y && fe.current.setScrollFromStart(Y)
                            }
                        })).catch((function(t) {
                            e && L.QPL.markerEnd(N.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, L.QuickLogActionType.FAIL), (0, k.parseErrorState)(t, (function(e) {
                                Ie(e), Ue(!1)
                            }))
                        }))
                    },
                    ze = function() {
                        var e = he.itemCount;
                        ke !== e && Te(e)
                    };
                (0, s.useEffect)((function() {
                    qe(), (0, S.default)(t).then((function(e) {
                        _e(e), e && he.on("all", ze)
                    }))
                }), []);
                var Ke = (0, V.default)((function(e, t) {
                        n && n(t.scrollTop), (null == De ? void 0 : De.willLoadMore(t)) && Ue(!0), null == De || De.onScroll(e, t).then((function(e) {
                            e && Ue(!1)
                        })).catch((function(e) {
                            throw Ue(!1), e
                        }))
                    }), 100),
                    Qe = function() {
                        (0, A.qplStartCartView)("Catalog"), null == a || a(pe.id.toString())
                    },
                    Ye = function() {
                        Se && H(Se, pe)
                    };
                return (0, U.jsxs)(b.default, {
                    theme: "products",
                    onDrop: e.onBack,
                    children: [(0, U.jsx)(j.DrawerHeader, {
                        title: u.fbt._("Catalog", null, {
                            hk: "3YVOSV"
                        }),
                        type: e.headerType || j.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onBack,
                        menu: ($e = ge ? Qe : void 0, (0, U.jsx)(v.default, {
                            onSendCatalog: Ye,
                            onCartClick: $e,
                            cartCount: he.itemCount,
                            catalogId: t.toString(),
                            canManageCatalog: G,
                            onOpenCollections: re,
                            onOpenMerchantDetailsForm: ue,
                            onOpenSettings: le
                        })),
                        focusBackOrCancel: !0
                    }), (0, U.jsx)(y.default, {
                        onScroll: function(e) {
                            Ke(e, e.currentTarget)
                        },
                        flatListControllers: [fe.current],
                        children: function() {
                            var e, n, o, r, i, s = ge && a ? Qe : void 0;
                            (G && ee && (n = (0, U.jsx)(c.default, {
                                onClick: function() {
                                    return ee()
                                },
                                theme: "collections",
                                a8nText: "add-item"
                            })), Se && G && oe) && (o = Se.productCollection.getProductModels(!0).some((function(e) {
                                return !e.isHidden && "REJECTED" !== e.reviewStatus
                            })) ? (0, U.jsx)(c.default, {
                                onClick: function() {
                                    oe(null)
                                },
                                theme: "collections",
                                title: u.fbt._("Add new collection", null, {
                                    hk: "1DddmB"
                                }),
                                a8nText: "add-collection"
                            }) : null);
                            return Se && Oe ? (r = (0, U.jsx)(M.default, {
                                onCartOpen: s,
                                onProductDetail: te,
                                flatListController: fe.current,
                                catalog: Se,
                                canManageCatalog: G,
                                shareLinks: G,
                                onProductShare: ne,
                                onCollectionSeeAll: ae,
                                data: Oe.getData(),
                                onEditCollection: oe
                            }), I.GK.supportsFeature(I.GK.F.MD_BACKEND) && G && ((0, d.getABPropConfigValue)("web_abprop_nux_cart_interstitial") && ge && !Z() && (0, p.default)(), i = (0, U.jsx)(g.default, {
                                onOpenCollections: re
                            }))) : r = (0, U.jsx)(T.default, {
                                fetchState: we
                            }), (0, U.jsxs)(U.Fragment, {
                                children: [J && (0, U.jsxs)(U.Fragment, {
                                    children: [(0, U.jsx)("div", {
                                        "data-a8n": l.default.key("catalog-header"),
                                        className: x.default.header,
                                        children: (0, U.jsx)(O.default, {
                                            profilePicThumb: pe.getProfilePicThumb(),
                                            contact: pe,
                                            businessProfile: J
                                        })
                                    }), (0, w.enablePostcodeInCatalog)() && !0 === (null === (e = J.profileOptions) || void 0 === e ? void 0 : e.directConnection) && (0, U.jsx)(_.default, {
                                        catalogId: t
                                    })]
                                }), (0, U.jsxs)("div", {
                                    "data-a8n": l.default.key("catalog-items"),
                                    className: x.default.list,
                                    children: [i, n, o, r, We && (0, U.jsx)(P.default, {})]
                                })]
                            })
                        }()
                    })]
                });
                var $e
            };
            var o = a(n(87757)),
                r = a(n(48926)),
                i = a(n(63038)),
                l = a(n(84646)),
                u = n(48360),
                s = n(67294),
                d = n(59566),
                c = a(n(66863)),
                f = n(2133),
                p = a(n(72758)),
                h = n(72743),
                m = n(66419),
                v = a(n(88203)),
                g = a(n(78685)),
                _ = a(n(56395)),
                C = n(70886),
                x = a(n(71704)),
                S = a(n(38345)),
                b = a(n(53187)),
                y = a(n(18345)),
                j = n(19288),
                k = n(23519),
                T = a(n(22426)),
                E = a(n(92546)),
                P = a(n(5029)),
                w = n(15566),
                I = n(38032),
                A = n(56003),
                M = a(n(85170)),
                O = a(n(99602)),
                L = n(3298),
                N = n(4099),
                R = a(n(8995)),
                D = a(n(57811)),
                B = a(n(39394)),
                F = n(69283),
                V = a(n(15663)),
                W = a(n(1379)),
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
                    F = e.onCatalogLinkClick,
                    V = e.setScrollOffset,
                    W = e.canManageCatalog,
                    U = e.scrollOffset,
                    H = e.collection,
                    G = e.onProductDetail,
                    q = e.onProductShare,
                    z = e.onEditCollection,
                    K = (0, O.default)(),
                    Q = (0, D.default)(),
                    Y = (0, u.useContext)(x.DrawerContext),
                    $ = (0, R.useModelValues)(e.contact, ["id"]),
                    J = (0, u.useMemo)((function() {
                        return d.CartCollection.findCart($.id.toString())
                    }), [$.id]),
                    X = (0, L.default)((function() {
                        return new j.default
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
                    ve = (0, i.default)(me, 2),
                    ge = ve[0],
                    _e = ve[1],
                    Ce = (0, u.useState)(null),
                    xe = (0, i.default)(Ce, 2),
                    Se = xe[0],
                    be = xe[1],
                    ye = (0, u.useState)(!0),
                    je = (0, i.default)(ye, 2),
                    ke = je[0],
                    Te = je[1];
                (0, N.useListener)(null == H ? void 0 : H.productCollection, ["add", "remove"], K), (0, N.useListener)(null == re ? void 0 : re.productCollection, ["add", "remove"], K), (0, N.useListener)(null == re ? void 0 : re.collections, ["add", "remove"], K), (0, N.useListener)(H, ["change:reviewStatus", "canAppeal"], K);
                var Ee = function() {
                        var e = (0, r.default)(o.default.mark((function e(t) {
                            return o.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, null == t ? void 0 : t.loadInitialItems();
                                    case 2:
                                        Te(!1), (0, T.logCollectionSeeAllView)({
                                            catalogOwnerJid: n.toString(),
                                            catalogContext: (0, P.getProductCatalogContext)(Y),
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
                    Pe = function() {
                        var e = J.itemCount;
                        se !== e && de(e)
                    };
                (0, u.useEffect)((function() {
                    c.CatalogCollection.find(n).then((function(e) {
                        if (!Q.aborted) {
                            ie(e), he("SUCCESS");
                            var t = new h.SingleCollectionDataSource(e, null == H ? void 0 : H.id.toString(), W || !1, f.PRODUCT_LIST_ITEM_HEIGHT),
                                n = new h.CatalogListItemScrollHelper(t);
                            _e(t), be(n), Ee(t).then((function() {
                                I.QPL.markerEnd(A.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, I.QuickLogActionType.SUCCESS)
                            })).catch((function() {
                                I.QPL.markerEnd(A.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, I.QuickLogActionType.FAIL)
                            })), void 0 !== U && X.current.setScrollFromStart(U)
                        }
                    })).catch((function(e) {
                        I.QPL.markerEnd(A.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, I.QuickLogActionType.FAIL), (0, b.parseErrorState)(e, (function(e) {
                            he(e), Te(!1)
                        }))
                    })), (0, m.default)(n).then((function(e) {
                        ne(e), e && J.on("all", Pe)
                    }))
                }), []);
                var we = function() {
                        (0, E.qplStartCartView)("Collection"), null == a || a($.id.toString())
                    },
                    Ie = function() {
                        re && F(re, $)
                    },
                    Ae = (0, M.default)((function(e) {
                        var t = e.currentTarget;
                        null == V || V(t.scrollTop), (null == Se ? void 0 : Se.willLoadMore(t)) && Te(!0), null == Se || Se.onScroll(e, t).then((function(e) {
                            e && Te(!1)
                        })).catch((function(e) {
                            throw Te(!1), e
                        }))
                    }), 100),
                    Me = (null === (t = e.collection) || void 0 === t ? void 0 : t.name) || l.fbt._("All Items", null, {
                        hk: "2x8dE2"
                    });
                return (0, B.jsxs)(_.default, {
                    theme: "products",
                    onDrop: e.onBack,
                    children: [(0, B.jsx)(S.DrawerHeader, {
                        title: Me,
                        type: e.headerType || S.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onBack,
                        menu: (0, B.jsx)(p.default, {
                            onSendCatalog: Ie,
                            onCartClick: te ? we : void 0,
                            cartCount: J.itemCount,
                            catalogId: n.toString(),
                            canManageCatalog: W
                        })
                    }), (0, B.jsx)(C.default, {
                        flatListControllers: [X.current],
                        onScroll: Ae,
                        children: function() {
                            var e = te && a ? we : void 0;
                            if (!re || !ge) return (0, B.jsx)(y.default, {
                                fetchState: pe
                            });
                            var t = ge.getData();
                            if (0 === t.length && !ke && W && H) return (0, B.jsx)(B.Fragment, {
                                children: (0, B.jsxs)("div", {
                                    className: v.default.list,
                                    children: [(0, B.jsx)(s.default, {
                                        theme: "collections",
                                        onClick: function() {
                                            null == z || z(H)
                                        }
                                    }), (0, B.jsx)("div", {
                                        className: v.default.addItemsNotice,
                                        children: l.fbt._("This collection won’t be visible to customers until you add at least 1 item", null, {
                                            hk: "34nbHb"
                                        })
                                    })]
                                })
                            });
                            var n = (0, B.jsx)(w.default, {
                                    onCartOpen: e,
                                    onProductDetail: G,
                                    flatListController: X.current,
                                    catalog: re,
                                    canManageCatalog: W,
                                    shareLinks: W,
                                    onProductShare: q,
                                    collectionId: null == H ? void 0 : H.id.toString(),
                                    data: t
                                }),
                                o = H ? (0, B.jsx)(g.CollectionIntegrityBanner, {
                                    collection: H,
                                    onEditCollection: z
                                }) : void 0;
                            return (0, B.jsx)(B.Fragment, {
                                children: (0, B.jsxs)("div", {
                                    className: v.default.list,
                                    children: [o, n, ke && (0, B.jsx)(k.default, {})]
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
                s = a(n(66863)),
                d = n(2133),
                c = n(72743),
                f = n(66419),
                p = a(n(88203)),
                h = n(70886),
                m = a(n(38345)),
                v = a(n(27897)),
                g = n(61661),
                _ = a(n(53187)),
                C = a(n(18345)),
                x = n(96706),
                S = n(19288),
                b = n(23519),
                y = a(n(22426)),
                j = a(n(92546)),
                k = a(n(5029)),
                T = n(32065),
                E = n(56003),
                P = n(52867),
                w = a(n(85170)),
                I = n(3298),
                A = n(4099),
                M = a(n(8995)),
                O = a(n(57811)),
                L = a(n(39394)),
                N = n(8413),
                R = n(69283),
                D = a(n(1379)),
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

                function v(e) {
                    ! function(e) {
                        e.preventDefault(), e.stopPropagation()
                    }(e), (0, s.qplStartCollectionViewAll)("Catalog"), p && a ? p(a) : p && p()
                }
                var g = void 0;
                if (a) switch (a.reviewStatus) {
                    case d.PRODUCT_REVIEW_STATUS.REJECTED:
                        g = (0, f.jsx)("span", {
                            className: l.default.reviewStateRejected,
                            children: o.fbt._("rejected", null, {
                                hk: "3f3H8P"
                            })
                        })
                }
                return (0, f.jsx)(r.default, {
                    primary: m,
                    secondary: g,
                    detail: (0, f.jsx)(i.default, {
                        onClick: v,
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
                l = a(n(32067)),
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
                        return n = o.fbt._("WhatsApp's Commerce Policy for prescription, recreational, or other types of Drugs", null, {
                            hk: "B27ED"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 303,
                                params: {
                                    collections_rejected_policy_drugs: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 327,
                                params: {
                                    collections_rejected_policy_drugs: d(n, t)
                                }
                            })
                        };
                    case "weapons":
                        return n = o.fbt._("WhatsApp's Commerce Policy for Weapons, ammunition, or explosives", null, {
                            hk: "1X972I"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 319,
                                params: {
                                    collections_rejected_policy_weapons: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 343,
                                params: {
                                    collections_rejected_policy_weapons: d(n, t)
                                }
                            })
                        };
                    case "animals":
                        return n = o.fbt._("WhatsApp's Commerce Policy for Animals", null, {
                            hk: "3hxXr8"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 298,
                                params: {
                                    collections_rejected_policy_animals: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 322,
                                params: {
                                    collections_rejected_policy_animals: d(n, t)
                                }
                            })
                        };
                    case "alcohol":
                        return n = o.fbt._("WhatsApp's Commerce Policy for Alcohol", null, {
                            hk: "1G8YGL"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 297,
                                params: {
                                    collections_rejected_policy_alcohol: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 321,
                                params: {
                                    collections_rejected_policy_alcohol: d(n, t)
                                }
                            })
                        };
                    case "gambling":
                        return n = o.fbt._("WhatsApp's Commerce Policy for Real money gambling services", null, {
                            hk: "1zQIeM"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 304,
                                params: {
                                    collections_rejected_policy_gambling: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 328,
                                params: {
                                    collections_rejected_policy_gambling: d(n, t)
                                }
                            })
                        };
                    case "tobacco":
                        return n = o.fbt._("WhatsApp's Commerce Policy for Tobacco items and related paraphernalia", null, {
                            hk: "EAQLL"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 317,
                                params: {
                                    collections_rejected_policy_tobacco: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 341,
                                params: {
                                    collections_rejected_policy_tobacco: d(n, t)
                                }
                            })
                        };
                    case "overtly_sexualized_positioning":
                        return n = o.fbt._("WhatsApp's Commerce Policy for Overtly sexualized positioning", null, {
                            hk: "1oaFbX"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 312,
                                params: {
                                    collections_rejected_policy_overtly_sexualized_positioning: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 336,
                                params: {
                                    collections_rejected_policy_overtly_sexualized_positioning: d(n, t)
                                }
                            })
                        };
                    case "adult":
                        return n = o.fbt._("WhatsApp's Commerce Policy for Adult products or service", null, {
                            hk: "Wf7q5"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 296,
                                params: {
                                    collections_rejected_policy_adult: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 320,
                                params: {
                                    collections_rejected_policy_adult: d(n, t)
                                }
                            })
                        };
                    case "supplements":
                        return n = o.fbt._("WhatsApp's Commerce Policy for Unsafe ingestible supplements", null, {
                            hk: "9a4Y2"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 315,
                                params: {
                                    collections_rejected_policy_supplements: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 339,
                                params: {
                                    collections_rejected_policy_supplements: d(n, t)
                                }
                            })
                        };
                    case "body_parts_fluids":
                        return n = o.fbt._("WhatsApp's Commerce Policy for Body parts and fluids", null, {
                            hk: "2EAd21"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 299,
                                params: {
                                    collections_rejected_policy_body_parts_fluids: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 323,
                                params: {
                                    collections_rejected_policy_body_parts_fluids: d(n, t)
                                }
                            })
                        };
                    case "healthcare":
                        return n = o.fbt._("WhatsApp's Commerce Policy for Medical and healthcare products", null, {
                            hk: "3vvgOF"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 306,
                                params: {
                                    collections_rejected_policy_healthcare: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 330,
                                params: {
                                    collections_rejected_policy_healthcare: d(n, t)
                                }
                            })
                        };
                    case "misleading":
                        return n = o.fbt._("WhatsApp's Commerce Policy for Business models, goods, items, or services that may be or are fraudulent, misleading, offensive, or deceptive, or may be or are exploitative, inappropriate, or exert undue pressure on targeted groups", null, {
                            hk: "3TyOB"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 309,
                                params: {
                                    collections_rejected_policy_misleading: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 333,
                                params: {
                                    collections_rejected_policy_misleading: d(n, t)
                                }
                            })
                        };
                    case "real_fake_currency":
                        return n = o.fbt._("WhatsApp's Commerce Policy for Real, virtual, or fake currency", null, {
                            hk: "2XnVq2"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 313,
                                params: {
                                    collections_rejected_policy_real_fake_currency: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 337,
                                params: {
                                    collections_rejected_policy_real_fake_currency: d(n, t)
                                }
                            })
                        };
                    case "digital_services_products":
                        return n = o.fbt._("WhatsApp's Commerce Policy for Digital and subscription services", null, {
                            hk: "2mvwqB"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 301,
                                params: {
                                    collections_rejected_policy_digital_services_products: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 325,
                                params: {
                                    collections_rejected_policy_digital_services_products: d(n, t)
                                }
                            })
                        };
                    case "thrid_party_infringements":
                        return n = o.fbt._("WhatsApp's Commerce Policy for Third-Party Infringement", null, {
                            hk: "48SSD"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 316,
                                params: {
                                    collections_rejected_policy_thrid_party_infringements: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 340,
                                params: {
                                    collections_rejected_policy_thrid_party_infringements: d(n, t)
                                }
                            })
                        };
                    case "unauthorized_media":
                        return n = o.fbt._("WhatsApp's Commerce Policy for Products or items that facilitate or encourage unauthorized access to digital media", null, {
                            hk: "2ldhoF"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 318,
                                params: {
                                    collections_rejected_policy_unauthorized_media: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 342,
                                params: {
                                    collections_rejected_policy_unauthorized_media: d(n, t)
                                }
                            })
                        };
                    case "illegal_products":
                        return n = o.fbt._("WhatsApp's Commerce Policy for Illegal products or services", null, {
                            hk: "c5Zjc"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 308,
                                params: {
                                    collections_rejected_policy_illegal_products: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 332,
                                params: {
                                    collections_rejected_policy_illegal_products: d(n, t)
                                }
                            })
                        };
                    case "hazardous_goods_and_materials":
                        return n = o.fbt._("WhatsApp's Commerce Policy for Business models, goods, items, or services that may be or are fraudulent, misleading, offensive, or deceptive, or may be or are exploitative, inappropriate, or exert undue pressure on targeted groups", null, {
                            hk: "3TyOB"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 305,
                                params: {
                                    collections_rejected_policy_hazardous_goods_and_materials: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 329,
                                params: {
                                    collections_rejected_policy_hazardous_goods_and_materials: d(n, t)
                                }
                            })
                        };
                    case "stolen_goods":
                        return n = o.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 314,
                                params: {
                                    collections_rejected_policy_stolen_goods: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 338,
                                params: {
                                    collections_rejected_policy_stolen_goods: d(n, t)
                                }
                            })
                        };
                    case "human_exploitation_and_sexual_services":
                        return n = o.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 307,
                                params: {
                                    collections_rejected_policy_human_exploitation_and_sexual_services: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 331,
                                params: {
                                    collections_rejected_policy_human_exploitation_and_sexual_services: d(n, t)
                                }
                            })
                        };
                    case "community_standards":
                        return n = o.fbt._("WhatsApp's Business Terms", null, {
                            hk: "1x5ZqO"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 300,
                                params: {
                                    collections_rejected_policy_community_standards: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 324,
                                params: {
                                    collections_rejected_policy_community_standards: d(n, t)
                                }
                            })
                        };
                    case "discrimination":
                        return n = o.fbt._("WhatsApp's Business Terms", null, {
                            hk: "1x5ZqO"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 302,
                                params: {
                                    collections_rejected_policy_discrimination: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 326,
                                params: {
                                    collections_rejected_policy_discrimination: d(n, t)
                                }
                            })
                        };
                    default:
                        return n = o.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        }), {
                            first: (0, s.jsx)(u.default, {
                                id: 311,
                                params: {
                                    collections_rejected_policy_other_violation: d(n, t)
                                }
                            }),
                            second: (0, s.jsx)(u.default, {
                                id: 335,
                                params: {
                                    collections_rejected_policy_other_violation: d(n, t)
                                }
                            })
                        }
                }
            };
            var o = n(48360),
                r = a(n(81288)),
                i = a(n(94253)),
                l = n(49012),
                u = a(n(62848)),
                s = n(85893);

            function d(e, t) {
                var n = t || i.default.WA_COMMERCE_POLICY_URL;
                return (0, s.jsx)(r.default, {
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
                r = n(70886),
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
                v = a(n(92546)),
                g = n(69725),
                _ = n(63641),
                C = n(56264),
                x = n(56003),
                S = n(52867),
                b = a(n(99262)),
                y = n(46408),
                j = a(n(61897)),
                k = n(68220),
                T = a(n(17746)),
                E = n(85893),
                P = function(e) {
                    (0, i.default)(n, e);
                    var t = (0, l.default)(n);

                    function n(e) {
                        var a;
                        return (0, o.default)(this, n), (a = t.call(this, e)).attachedListeners = new Set, a._catalogFlatListController = new v.default, a.handleProductDetail = function(e, t) {
                            var n = a.props.onProductDetail;
                            return (0, x.qplStartProductView)("Collection"), (0, C.logCatalogListDetailClick)({
                                product: (0, k.unproxy)(e),
                                catalogContext: (0, S.getProductCatalogContext)(a.context)
                            }), n(e, t)
                        }, a.handleProductShare = function(e) {
                            var t = a.props.onProductShare;
                            t && t(e)
                        }, a.handleProductDelete = function(e) {
                            var t = a.props.catalog;
                            (0, s.handleProductDelete)(t, e, (0, S.getProductCatalogContext)(a.context), "Collection")
                        }, a.handleProductHideShow = function(e) {
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
                            return t ? r ? (0, E.jsx)(c.CollectionIntegrityBanner, {
                                collection: t,
                                onEditCollection: a.props.onEditCollection
                            }) : (0, E.jsx)(f.default, {
                                collection: t,
                                onSeeAll: a.props.onCollectionSeeAll
                            }) : o ? (0, E.jsx)(f.default, {
                                allItems: o,
                                onSeeAll: a.props.onCollectionSeeAll
                            }) : n ? (0, E.jsx)(b.default, {
                                collectionId: i,
                                product: n,
                                onCartOpen: u,
                                onClick: function() {
                                    return a.handleProductDetail(n, i)
                                },
                                onProductShare: s ? a.handleProductShare : null,
                                onProductDelete: a.handleProductDelete,
                                onProductHideShow: a.handleProductHideShow,
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
                            return (0, E.jsx)(E.Fragment, {
                                children: (0, E.jsx)(m.default, {
                                    flatListControllers: [this._catalogFlatListController],
                                    children: (0, E.jsx)(h.FlatList, {
                                        flatListController: this._catalogFlatListController,
                                        direction: "vertical",
                                        forceConsistentRenderCount: !1,
                                        data: e,
                                        renderItem: this.renderItem,
                                        defaultItemHeight: d.PRODUCT_LIST_ITEM_HEIGHT,
                                        keyOrder: g.KeyOrder.INVERSE
                                    })
                                })
                            })
                        }
                    }]), n
                }(u.Component);
            P.CONCERNS = {
                catalog: ["productCollection", "collections", "afterCursor", "id", "index"]
            }, P.contextType = p.DrawerContext, P.displayName = "ProductCollectionsList";
            var w = (0, T.default)((0, _.ListenerHOC)((0, j.default)(P, P.CONCERNS)));
            t.default = w
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
                    d = e.onProductMoreInformation,
                    k = e.onBack,
                    B = e.onProductCatalog,
                    V = e.onProductDetail,
                    $ = e.refreshCarousel,
                    J = e.chat,
                    X = e.isPushed,
                    Z = void 0 === X || X,
                    ee = (0, W.default)(),
                    te = (0, q.default)(),
                    ne = (0, f.useContext)(j.DrawerContext),
                    ae = (0, G.useModelValues)(e.product, ["id", "catalogWid", "productImageCollection", "fetchedFromServer", "name", "availability", "reviewStatus"]),
                    oe = (0, f.useState)(null),
                    re = (0, r.default)(oe, 2),
                    ie = re[0],
                    le = re[1],
                    ue = (0, f.useState)(!1),
                    se = (0, r.default)(ue, 2),
                    de = se[0],
                    ce = se[1],
                    fe = (0, f.useState)(null),
                    pe = (0, r.default)(fe, 2),
                    he = pe[0],
                    me = pe[1],
                    ve = (0, f.useState)("NONE"),
                    ge = (0, r.default)(ve, 2),
                    _e = ge[0],
                    Ce = ge[1],
                    xe = (0, f.useState)("NONE"),
                    Se = (0, r.default)(xe, 2),
                    be = Se[0],
                    ye = Se[1],
                    je = (0, U.default)((function() {
                        return m.CartCollection.findCart(ae.catalogWid.toString())
                    }));
                (0, H.useListener)(je.current, "change:cartItemCollection", ee);
                var ke = function() {
                        if (k) return k()
                    },
                    Te = function() {
                        var e = ae.catalogWid,
                            t = ae.id.toString(),
                            n = v.CatalogCollection.findProduct({
                                catalogWid: e,
                                productId: t,
                                productMsgMediaData: (0, F.unproxy)(ae).productMsgMediaData,
                                canLogQpl: Z
                            }),
                            o = p.BusinessProfileCollection.find(e),
                            i = !0;
                        return a.all([o, n]).then((function(e) {
                            var t = (0, r.default)(e, 1)[0];
                            if (te.aborted) throw new l.AbortError;
                            return i = !1, Z && (0, P.qplEndProductView)(R.QuickLogActionType.SUCCESS), le(t), Ce("SUCCESS"), t
                        })).then((function(e) {
                            "PENDING" === be && ((0, h.hasCatalog)(e) ? function() {
                                var e = ae.catalogWid;
                                v.CatalogCollection.findCarouselCatalog(e).then((function(e) {
                                    if (!te.aborted) {
                                        var t = Array.isArray(e) ? e[0] : e;
                                        me(t || null), ye(t ? "SUCCESS" : "NONE")
                                    }
                                })).catch((0, u.filteredCatch)(z.ServerStatusCodeError, (function(e) {
                                    "not_found" === e.status || 404 === e.status ? (me(null), ye("NOT_FOUND")) : (me(null), ye("ERROR"), __LOG__(3)`Failed to fetch product catalog from server`)
                                }))).catch((0, u.filteredCatch)(z.WebdDrop, (function() {
                                    me(null), ye("ERROR"), __LOG__(3)`Failed to fetch product catalog`
                                })))
                            }() : ye("NONE"))
                        })).catch((0, l.catchAbort)((function() {}))).catch((0, u.filteredCatch)(z.E404, (function() {
                            ke(), C.Cmd.openModal((0, K.jsx)(x.default, {
                                onOK: function() {
                                    C.Cmd.closeModal()
                                },
                                okText: c.fbt._("OK", null, {
                                    hk: "2KEeHb"
                                }),
                                children: c.fbt._("This product or service has been removed", null, {
                                    hk: "3mE1ld"
                                })
                            })), Ce("NOT_FOUND"), i = !1, (0, P.qplDropProductView)()
                        }))).catch((0, u.filteredCatch)(z.WebdDrop, (function() {
                            Ce("ERROR"), __LOG__(3)`Failed to fetch product`
                        }))).catch((0, u.filteredCatch)(z.ServerStatusCodeError, (function() {
                            Ce("ERROR"), __LOG__(3)`Failed to fetch product from server`
                        }))).finally((function() {
                            Z && i && (0, P.qplEndProductView)(R.QuickLogActionType.FAIL)
                        }))
                    };
                (0, f.useEffect)((function() {
                    if ($) {
                        var e = v.CatalogCollection.get(ae.catalogWid);
                        (null == e ? void 0 : e.productCollection) && e.fetchedFromServer ? ye("SUCCESS") : ye("PENDING")
                    }
                    var t = (0, T.getMaybeMeUser)();
                    Z && (0, P.qplAnnotateProductView)(!(null == t ? void 0 : t.equals(ae.catalogWid)));
                    var a = ae.catalogWid,
                        o = ae.id.toString();
                    if (a && o) return Te(), (0, _.default)(a).then((function(e) {
                            ce(e)
                        })), (0, E.logProductDetailView)({
                            product: (0, F.unproxy)(ae),
                            catalogContext: (0, I.getProductCatalogContext)(ne),
                            cartToggle: de,
                            collectionId: n
                        }),
                        function() {
                            var e = ae.catalogWid,
                                t = ae.id.toString();
                            if (e && t) {
                                var n = v.CatalogCollection.get(e),
                                    a = n && n.msgProductCollection.get(t);
                                (null == a ? void 0 : a.fetchedFromServer) && n && n.msgProductCollection.remove(a)
                            }
                        };
                    (0, P.qplDropProductView)()
                }), []);
                var Ee = function() {
                        (0, P.qplStartCartView)("Product"), o && o(ae.catalogWid.toString())
                    },
                    Pe = function() {
                        C.Cmd.openModal((0, K.jsx)(D.default, {
                            product: ae,
                            sessionId: (0, I.getProductCatalogSessionId)(ne)
                        }))
                    },
                    we = function() {
                        i(ae)
                    },
                    Ie = function() {
                        var e = ae,
                            t = e.catalogWid,
                            n = v.CatalogCollection.get(t);
                        if (n) {
                            var a = n.productCollection.get(e.id);
                            C.Cmd.attachProduct({
                                product: a ? (0, F.unproxy)(a) : (0, F.unproxy)(e)
                            })
                        }
                    },
                    Ae = function() {
                        d(ae)
                    },
                    Me = function() {
                        return "ERROR" !== _e && "NOT_FOUND" !== _e && !(ae.reviewStatus === A.PRODUCT_REVIEW_STATUS.REJECTED)
                    },
                    Oe = Me(),
                    Le = (0, h.hasCatalog)(ie);
                return (0, K.jsxs)(b.default, {
                    onDrop: ke,
                    theme: "striped",
                    children: [(0, K.jsx)(Y, {
                        renderDrawerMenu: function() {
                            return Me() ? (0, K.jsx)(S.default, {
                                onSendProduct: Ie,
                                onReportProduct: Pe,
                                onProductLinkClick: we,
                                onProductMoreInformation: Ae,
                                onCartClick: de ? Ee : void 0,
                                cartCount: je.current.itemCount,
                                catalogId: ae.catalogWid.toString(),
                                contactId: null == J ? void 0 : J.contact.id.user
                            }) : null
                        },
                        handleBack: ke
                    }), (0, K.jsx)(y.default, {
                        children: (0, K.jsxs)("div", {
                            "data-a8n": s.default.key("product-details"),
                            className: M.default.body,
                            children: [(0, K.jsx)(Q, {
                                productFetchState: _e,
                                productCatalogFetchState: be,
                                isAvailable: Oe
                            }), (0, K.jsx)(L.default, {
                                product: ae,
                                isAvailable: Oe,
                                fetching: "PENDING" === _e
                            }), ae.availability === N.ProductAvailability.OUT_OF_STOCK ? (0, K.jsx)("div", {
                                className: M.default.availabilityBanner,
                                children: c.fbt._("This item is out of stock.", null, {
                                    hk: "4gOwiz"
                                })
                            }) : null, (0, K.jsx)(O.default, {
                                product: ae,
                                collectionId: n,
                                onSendChat: function() {
                                    var e = v.CatalogCollection.get(ae.catalogWid);
                                    (0, w.sendProductToChat)(ae, e, (0, I.getProductCatalogContext)(ne)), (0, E.logProductMessageBusinessClick)(ae, (0, I.getProductCatalogContext)(ne))
                                },
                                isAvailable: Oe,
                                hideRetailerID: null === (t = e.chat) || void 0 === t ? void 0 : t.contact.isEnterprise
                            }), Le && he ? (0, K.jsx)(g.default, {
                                catalog: he,
                                onProductCatalog: function() {
                                    B && B(ae.catalogWid, (0, I.getProductCatalogContext)(ne))
                                },
                                onProductDetail: function(e) {
                                    if ((0, P.qplStartProductView)("Product"), V) return V(e)
                                },
                                filterProductId: ae.id.toString(),
                                title: c.fbt._("More", null, {
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
                s = o(n(84646)),
                d = o(n(94184)),
                c = n(48360),
                f = n(67294),
                p = n(26141),
                h = n(79614),
                m = n(2133),
                v = n(72743),
                g = o(n(69286)),
                _ = o(n(38345)),
                C = n(65901),
                x = o(n(86777)),
                S = o(n(79526)),
                b = o(n(53187)),
                y = o(n(18345)),
                j = n(96706),
                k = n(19288),
                T = n(1577),
                E = n(56264),
                P = n(56003),
                w = n(36949),
                I = n(52867),
                A = n(46408),
                M = o(n(52387)),
                O = o(n(31529)),
                L = o(n(41756)),
                N = n(24449),
                R = n(3298),
                D = o(n(81926)),
                B = n(85651),
                F = n(68220),
                V = n(22552),
                W = o(n(57811)),
                U = o(n(39394)),
                H = n(8413),
                G = n(69283),
                q = o(n(1379)),
                z = n(59175),
                K = n(85893);

            function Q(e) {
                var t, n, a = e.productFetchState,
                    o = e.productCatalogFetchState,
                    r = e.isAvailable;
                n = "ERROR" === a ? (0, K.jsx)(V.TextSpan, {
                    className: M.default.text,
                    theme: "small",
                    color: "danger",
                    children: c.fbt._("Something went wrong", null, {
                        hk: "7C9hw"
                    })
                }) : r ? [(0, K.jsx)(B.Spinner, {
                    size: 14,
                    color: B.colorOptions.highlight
                }, "DetailDrawer-loadingBar-spinner"), (0, K.jsx)(V.TextSpan, {
                    className: (0, d.default)(M.default.text, M.default.loadingText),
                    theme: "small",
                    children: c.fbt._("Waiting for network", null, {
                        hk: "3I2DtN"
                    })
                }, "DetailDrawer-loadingBar-msg")] : (0, K.jsx)(V.TextSpan, {
                    className: M.default.text,
                    theme: "small",
                    color: "danger",
                    children: c.fbt._("This product or service has been removed", null, {
                        hk: "3mE1ld"
                    })
                });
                var l = "PENDING" === a || "PENDING" === o || !r;
                return (0, K.jsx)("div", {
                    className: (0, d.default)((t = {}, (0, i.default)(t, M.default.loadingContainer, l), (0, i.default)(t, M.default.shiftUp, !l), t)),
                    children: n
                })
            }

            function Y(e) {
                var t = e.renderDrawerMenu,
                    n = e.handleBack;
                return (0, K.jsx)(k.DrawerHeader, {
                    title: c.fbt._("Details", null, {
                        hk: "1hLRT1"
                    }),
                    onBack: n,
                    type: k.DRAWER_HEADER_TYPE.SMALL,
                    menu: t()
                })
            }
        },
        31529: (e, t, n) => {
            "use strict";
            var a = n(20862),
                o = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.collectionId,
                    n = e.onSendChat,
                    a = e.isAvailable,
                    o = (0, s.useContext)(m.DrawerContext),
                    O = (0, A.useModelValues)(e.product, ["name", "url", "description", "availability", "currency", "priceAmount1000", "salePriceAmount1000", "salePriceStartDate", "salePriceEndDate", "fetchedFromServer", "retailerId", "catalogWid", "productImageCollection", "imageHash", "reviewStatus", "imageCdnUrl", "id"]),
                    L = (0, s.useState)(!1),
                    N = (0, i.default)(L, 2),
                    R = N[0],
                    D = N[1],
                    B = (0, s.useState)(!1),
                    F = (0, i.default)(B, 2),
                    V = F[0],
                    W = F[1];
                (0, s.useEffect)((function() {
                    (0, p.default)(O.catalogWid).then((function(e) {
                        W(e)
                    }))
                }), []);
                var U = function(e) {
                        E.QPL.markerStart(P.QuickLogMarkerId.WHATSAPP_CART_ADD, {
                            string: {
                                EntryPoint: "Product"
                            }
                        }), (0, d.default)(O, (0, b.getProductCatalogContext)(o), t), e.stopPropagation()
                    },
                    H = function() {
                        D(!0)
                    },
                    G = function(e) {
                        if (!O.fetchedFromServer || !e || !a) return null;
                        var t = C.Configuration.TrustedGroupDesc({
                            links: x.findLinks(e)
                        });
                        return (0, M.jsx)("div", {
                            children: (0, M.jsx)(g.EmojiText, {
                                selectable: !0,
                                formatters: t,
                                text: e,
                                onClick: function(t) {
                                    return function(e, t) {
                                        e.stopPropagation(), (0, S.logDetailLinkClick)({
                                            product: (0, w.unproxy)(O),
                                            catalogContext: (0, b.getProductCatalogContext)(o)
                                        });
                                        var n = t && x.findLink(t);
                                        n && (0, _.openExternalLink)(n.url)
                                    }(t, e)
                                }
                            })
                        })
                    };
                return (0, M.jsxs)(v.default, {
                    theme: "padding-product",
                    animation: !1,
                    children: [(0, M.jsx)(I.TextDiv, {
                        theme: "title",
                        className: j.default.name,
                        children: (0, M.jsx)(g.EmojiText, {
                            text: O.name,
                            selectable: !0
                        })
                    }), null != O.priceAmount1000 ? (0, M.jsx)(I.TextDiv, {
                        className: j.default.price,
                        color: "dark",
                        theme: "plain",
                        children: (0, M.jsx)(k.default, {
                            product: O,
                            selectable: !0,
                            direction: "inherit"
                        })
                    }) : null, function() {
                        if (!O.description && !O.url && !O.retailerId) return null;
                        var t, n = !!O.description && O.description.length > h.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH;
                        return O.description && (t = (0, M.jsxs)("div", {
                            children: [(0, M.jsx)(g.EmojiText, {
                                selectable: !0,
                                multiline: !0,
                                text: O.description,
                                textLimit: R ? 1 / 0 : h.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                            }), n && !R ? (0, M.jsxs)("span", {
                                className: j.default.more,
                                role: "button",
                                onClick: H,
                                children: [" ", u.fbt._("Read more", null, {
                                    hk: "2DvSvh"
                                })]
                            }) : null]
                        })), (0, M.jsxs)(I.TextDiv, {
                            theme: "plain",
                            className: j.default.description,
                            children: [t, G(O.url), O.retailerId && !e.hideRetailerID ? (0, M.jsx)("div", {
                                children: (0, M.jsx)(g.EmojiText, {
                                    text: O.retailerId,
                                    selectable: !0,
                                    direction: "inherit"
                                })
                            }) : null]
                        })
                    }(), function() {
                        if (!n || !O.fetchedFromServer || !a || O.reviewStatus !== y.PRODUCT_REVIEW_STATUS.APPROVED) return null;
                        var e = u.fbt._("Message Business", null, {
                            hk: "2JrycU"
                        });
                        return (0, M.jsx)("div", {
                            className: j.default.buttonContainer,
                            title: e,
                            children: (0, M.jsx)(f.default, {
                                a8nText: "product-message-business-btn",
                                className: j.default.button,
                                onClick: n,
                                type: "secondary",
                                children: e
                            })
                        })
                    }(), function() {
                        if (!V || !O.fetchedFromServer || !a || O.reviewStatus !== y.PRODUCT_REVIEW_STATUS.APPROVED) return null;
                        var e = u.fbt._("Add to cart", null, {
                                hk: "2qbS08"
                            }),
                            t = O.availability === T.ProductAvailability.OUT_OF_STOCK;
                        return (0, M.jsx)("div", {
                            className: j.default.buttonContainer,
                            title: e,
                            children: (0, M.jsx)(f.default, {
                                a8nText: "add-to-cart-btn",
                                className: (0, l.default)(j.default.button, j.default.addToCartButton),
                                onClick: U,
                                type: "secondary",
                                disabled: t,
                                children: (0, M.jsxs)("span", {
                                    className: j.default.addToCartContainer,
                                    children: [(0, M.jsx)(c.default, {
                                        className: (0, l.default)(j.default.addToCartIcon, (0, r.default)({}, j.default.addToCartIconDisabled, t))
                                    }), e]
                                })
                            })
                        })
                    }()]
                })
            };
            var r = o(n(59713)),
                i = o(n(63038)),
                l = o(n(94184)),
                u = n(48360),
                s = n(67294),
                d = o(n(21224)),
                c = o(n(57440)),
                f = o(n(51599)),
                p = o(n(38345)),
                h = o(n(94253)),
                m = n(96706),
                v = o(n(46821)),
                g = n(73008),
                _ = n(49012),
                C = n(72896),
                x = a(n(53454)),
                S = n(56264),
                b = n(52867),
                y = n(46408),
                j = o(n(21540)),
                k = o(n(84754)),
                T = n(24449),
                E = n(3298),
                P = n(4099),
                w = n(68220),
                I = n(22552),
                A = n(69283),
                M = n(85893)
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
                    j = e.onBack,
                    k = (0, u.useState)((function() {
                        return (0, g.default)({
                            productId: b,
                            businessOwnerJid: y
                        })
                    })),
                    T = (0, o.default)(k, 2),
                    E = T[0],
                    P = T[1],
                    w = (0, u.useState)((function() {
                        return E ? "NONE" : "PENDING"
                    })),
                    I = (0, o.default)(w, 2),
                    A = I[0],
                    M = I[1];
                if ((0, u.useEffect)((function() {
                        var e;
                        E || (e = (0, x.createWid)(y), s.CatalogCollection.findProduct({
                            catalogWid: e,
                            productId: b
                        }).then((function() {
                            var t = s.CatalogCollection.get(e);
                            P((0, i.default)(t, "catalog").productCollection.get(b)), M("SUCCESS")
                        })).catch((0, r.filteredCatch)(C.E404, (function() {
                            j(), d.Cmd.openModal((0, S.jsx)(c.default, {
                                onOK: function() {
                                    d.Cmd.closeModal()
                                },
                                okText: l.fbt._("OK", null, {
                                    hk: "2KEeHb"
                                }),
                                children: l.fbt._("This product or service has been removed", null, {
                                    hk: "3mE1ld"
                                })
                            })), M("ERROR")
                        }))).catch((function(e) {
                            (0, m.parseErrorState)(e, (function(e) {
                                M(e)
                            }))
                        })))
                    }), []), E) return (0, S.jsx)(_.default, {
                    chat: e.chat,
                    isPushed: n,
                    product: E,
                    onEnd: e.onEnd,
                    onBack: e.onBack,
                    onProductDetail: e.onProductDetail,
                    onProductCatalog: e.onProductCatalog,
                    refreshCarousel: !0,
                    onProductLinkClick: e.onProductLinkClick,
                    onProductMoreInformation: e.onProductMoreInformation,
                    onCartClick: e.onCartClick
                });
                return (0, S.jsxs)(f.default, {
                    onDrop: e.onBack,
                    children: [(0, S.jsx)(h.DrawerHeader, {
                        a8n: "drawer-title-profile",
                        title: l.fbt._("Details", null, {
                            hk: "1hLRT1"
                        }),
                        onBack: e.onBack,
                        type: h.DRAWER_HEADER_TYPE.SMALL
                    }), (0, S.jsx)(p.default, {
                        children: (0, S.jsx)(v.default, {
                            fetchState: A
                        })
                    })]
                }, "product-details-drawer")
            };
            var o = a(n(63038)),
                r = n(15586),
                i = a(n(272)),
                l = n(48360),
                u = n(67294),
                s = n(72743),
                d = n(65901),
                c = a(n(86777)),
                f = a(n(53187)),
                p = a(n(18345)),
                h = n(19288),
                m = n(23519),
                v = a(n(22426)),
                g = a(n(24965)),
                _ = a(n(77538)),
                C = n(59175),
                x = n(8297),
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
                    P = e.product,
                    w = e.prompt,
                    I = e.centerDrawer,
                    A = e.sendProductMsg,
                    M = e.onSend,
                    O = (0, i.useContext)(f.DrawerContext),
                    L = function() {
                        u.Cmd.openModal((0, k.jsx)(b.default, {
                            product: P,
                            onSend: M
                        }), {
                            transition: "modal-flow"
                        }), (0, v.logShareProductViaWALinkClick)({
                            product: P,
                            catalogContext: (0, g.getProductCatalogContext)(O)
                        })
                    },
                    N = (0, y.createProductLink)(P.catalogWid.user, P.id.toString());
                I && (t = "labels", n = "center-column");
                a = null != A ? (0, k.jsx)(S.default, {
                    onClick: function() {
                        u.Cmd.attachProduct({
                            product: (0, j.unproxy)(P),
                            onSend: M
                        })
                    }
                }) : (0, k.jsx)(x.default, {
                    onClick: L
                });
                return (0, k.jsxs)(d.default, {
                    theme: t,
                    children: [(0, k.jsx)(p.DrawerHeader, {
                        a8n: "product-link-title",
                        title: r.fbt._("Product link", null, {
                            hk: "1RIlvV"
                        }),
                        onBack: o,
                        onCancel: C,
                        type: p.DRAWER_HEADER_TYPE.SMALL,
                        focusBackOrCancel: !0
                    }), (0, k.jsxs)(c.default, {
                        theme: n,
                        children: [(0, k.jsx)("div", {
                            className: _.default.prompt,
                            children: w
                        }), (0, k.jsx)(l.default, {
                            image: E(P),
                            primary: (0, k.jsx)(h.EmojiText, {
                                text: P.name,
                                direction: "auto"
                            }),
                            theme: "identity",
                            secondary: (0, k.jsx)(m.default, {
                                id: T,
                                href: N,
                                onClick: function(e) {
                                    e.preventDefault(), L()
                                },
                                noHandle: !0
                            })
                        }), a, (0, k.jsx)(s.default, {
                            elementId: T,
                            onClick: function() {
                                (0, v.logShareProductCopyLinkClick)({
                                    product: P,
                                    catalogContext: (0, g.getProductCatalogContext)(O)
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
                v = n(56264),
                g = n(52867),
                _ = a(n(49762)),
                C = n(47576),
                x = a(n(59782)),
                S = a(n(24496)),
                b = a(n(22674)),
                y = n(91240),
                j = n(68220),
                k = n(85893),
                T = "product-link-anchor";

            function E(e) {
                var t = e.getProductImageCollectionHead();
                return t ? (0, k.jsx)(C.ProductThumb, {
                    className: (0, o.default)(_.default.productImage, _.default.productImageContainer),
                    mediaData: t.mediaData
                }) : (0, k.jsx)(C.ProductThumbPlaceholder, {
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
                    $ = e.onCartClick,
                    J = e.onCatalogLinkClick,
                    X = e.autoUpdate,
                    Z = void 0 !== X && X,
                    ee = e.businessProfile,
                    te = e.onAddProduct,
                    ne = e.onProductDetail,
                    ae = e.onProductShare,
                    oe = e.headerType,
                    re = e.onOpenSettings,
                    ie = e.blockCartInterstitialFn,
                    le = void 0 === ie ? function() {
                        return !1
                    } : ie,
                    ue = (0, K.default)(),
                    se = (0, s.useContext)(x.DrawerContext),
                    de = (0, U.default)(),
                    ce = (0, W.default)(de, 100),
                    fe = (0, q.useModelValues)(e.contact, ["id"]),
                    pe = (0, H.default)((function() {
                        return new T.default
                    })),
                    he = function() {
                        var e = m.CatalogCollection.get(t);
                        return !e || e.stale ? null : e
                    },
                    me = (0, s.useMemo)((function() {
                        return f.CartCollection.findCart(fe.id.toString())
                    }), [fe.id]),
                    ve = (0, s.useState)(!1),
                    ge = (0, o.default)(ve, 2),
                    _e = ge[0],
                    Ce = ge[1],
                    xe = (0, s.useState)(0),
                    Se = (0, o.default)(xe, 2),
                    be = Se[0],
                    ye = Se[1],
                    je = (0, s.useState)(!1),
                    ke = (0, o.default)(je, 2),
                    Te = ke[0],
                    Ee = ke[1],
                    Pe = (0, s.useState)(!1),
                    we = (0, o.default)(Pe, 2),
                    Ie = we[0],
                    Ae = we[1],
                    Me = (0, s.useState)(he),
                    Oe = (0, o.default)(Me, 2),
                    Le = Oe[0],
                    Ne = Oe[1],
                    Re = (0, s.useState)((function() {
                        return me.itemCount
                    })),
                    De = (0, o.default)(Re, 2),
                    Be = De[0],
                    Fe = De[1],
                    Ve = (0, s.useState)((function() {
                        return he() ? "SUCCESS" : "NONE"
                    })),
                    We = (0, o.default)(Ve, 2),
                    Ue = We[0],
                    He = We[1];
                (0, G.useListener)(me, "all", (function() {
                    var e = me.itemCount;
                    Be !== e && Fe(e)
                }));
                var Ge = function() {
                        if (!Te) {
                            var e = m.CatalogCollection.assertGet(t);
                            if (e.afterCursor) {
                                var n = e.productCollection.getProductModels().length;
                                Ce(!0), ye(n), m.CatalogCollection.update(t).then((function(e) {
                                    ue.aborted || (Ce(!1), (Array.isArray(e) ? e[0] : e).productCollection.getProductModels().length === be && Ee(!0), n * v.PRODUCT_LIST_ITEM_HEIGHT < window.innerHeight && Ge())
                                })).catch((function() {
                                    Ce(!1), Ee(!0)
                                }))
                            }
                        }
                    },
                    qe = (0, W.default)((function() {
                        var t;
                        null === (t = e.onRemoveProduct) || void 0 === t || t.call(e), de()
                    }), 100),
                    ze = Z ? null == Le ? void 0 : Le.productCollection : null;
                (0, G.useListener)(ze, "add", ce), (0, G.useListener)(ze, "remove", qe);
                (0, s.useEffect)((function() {
                    (0, M.logCatalogListView)({
                        catalogOwnerWid: t,
                        catalogContext: (0, N.getProductCatalogContext)(se),
                        cartToggle: Ie
                    }), Le ? Ge() : m.CatalogCollection.find(t).then((function(e) {
                        Ne(e), He("SUCCESS"), Ge()
                    })).catch((0, r.filteredCatch)(Q.ServerStatusCodeError, (function(e) {
                        403 !== e.status && 404 !== e.status || (Ne(null), He("NOT_FOUND"))
                    }))).catch((function(e) {
                        (0, j.parseErrorState)(e, (function(e) {
                            return He(e)
                        }))
                    })), (0, g.default)(t).then((function(e) {
                        Ae(e), P.GK.supportsFeature(P.GK.F.MD_BACKEND) && n && Ie && !le() && (0, d.getABPropConfigValue)("web_abprop_nux_cart_interstitial") && (0, h.default)()
                    }))
                }), []);
                var Ke = (0, z.default)((function(e) {
                        _e || e.scrollTop + l.SCROLL_FUDGE > e.scrollHeight - e.clientHeight && Ge()
                    }), 100),
                    Qe = function() {
                        null == $ || $(fe.id.toString())
                    },
                    Ye = function() {
                        Le && (J(Le, fe), (0, M.logCatalogShareLinkClick)({
                            catalogOwnerWid: t,
                            catalogContext: (0, N.getProductCatalogContext)(se)
                        }))
                    },
                    $e = function() {
                        if (Ie && $) {
                            var e = (0, V.isNumber)(Be) && Be > 0 ? Be.toString() : void 0,
                                n = (0, O.getOnCartClickWithLog)(Qe, t.toString(), (0, N.getProductCatalogContext)(se));
                            return (0, Y.jsx)(L.MenuBarItem, {
                                a8nText: "menu-bar-cart-link",
                                icon: (0, Y.jsx)(p.default, {
                                    theme: oe === S.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
                                }),
                                text: e,
                                title: u.fbt._("Your cart", null, {
                                    hk: "Sn66V"
                                }),
                                onClick: n
                            })
                        }
                        return null
                    };
                return (0, Y.jsxs)(_.default, {
                    theme: "products",
                    onDrop: e.onBack,
                    children: [(0, Y.jsx)(S.DrawerHeader, {
                        title: u.fbt._("Catalog", null, {
                            hk: "3YVOSV"
                        }),
                        type: e.headerType || S.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onBack,
                        menu: (Ze = n && (0, w.canToggleCartOnOff)() ? (0, Y.jsx)(L.MenuBarItem, {
                            a8nText: "menu-bar-menu",
                            icon: (0, Y.jsx)(F.default, {
                                name: "menu"
                            }),
                            title: I.default.t(621),
                            children: (0, Y.jsxs)(b.Dropdown, {
                                type: "dropdown_menu",
                                flipOnRTL: !0,
                                dirX: b.DirX.LEFT,
                                children: [(0, Y.jsx)(y.DropdownItem, {
                                    a8n: "mi-foward menu-item",
                                    action: Ye,
                                    children: I.default.t(470)
                                }), re && (0, Y.jsx)(y.DropdownItem, {
                                    a8n: "mi-settings menu-item",
                                    action: re,
                                    children: u.fbt._("Settings", null, {
                                        hk: "2RmHUB"
                                    })
                                })]
                            }, "CatalogDetailHeader")
                        }) : (0, Y.jsx)(L.MenuBarItem, {
                            a8nText: "menu-bar-catalog-link",
                            icon: (0, Y.jsx)(A.default, {
                                theme: oe === S.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
                            }),
                            title: u.fbt._("Catalog link", null, {
                                hk: "M36Dw"
                            }),
                            onClick: Ye
                        }), (0, Y.jsxs)(Y.Fragment, {
                            children: [$e(), Ze]
                        })),
                        focusBackOrCancel: !0
                    }), (0, Y.jsx)(C.default, {
                        onScroll: function(e) {
                            var t, n;
                            e.currentTarget && Ke(e.currentTarget), null == a || a(null !== (t = null === (n = e.currentTarget) || void 0 === n ? void 0 : n.scrollTop) && void 0 !== t ? t : 0)
                        },
                        flatListControllers: [pe.current],
                        scrollOffset: e.scrollOffset,
                        children: (Xe = Ie && $ ? Qe : void 0, Le ? (n && te && (Je = (0, Y.jsx)(c.default, {
                            onClick: function() {
                                return te()
                            },
                            theme: "in-list"
                        })), (0, Y.jsxs)(Y.Fragment, {
                            children: [ee && (0, Y.jsx)("div", {
                                "data-a8n": i.default.key("catalog-header"),
                                className: D.default.header,
                                children: (0, Y.jsx)(B.default, {
                                    profilePicThumb: fe.getProfilePicThumb(),
                                    contact: fe,
                                    businessProfile: ee
                                })
                            }), (0, Y.jsxs)("div", {
                                "data-a8n": i.default.key("catalog-items"),
                                className: D.default.list,
                                children: [Je, (0, Y.jsx)(R.default, {
                                    onCartOpen: Xe,
                                    onProductDetail: ne,
                                    flatListController: pe.current,
                                    catalog: Le,
                                    canManageCatalog: n,
                                    shareLinks: n,
                                    onProductShare: ae
                                }), _e && (0, Y.jsx)(E.default, {})]
                            })]
                        })) : (0, Y.jsx)(k.default, {
                            fetchState: Ue
                        }))
                    })]
                });
                var Je, Xe;
                var Ze
            };
            var o = a(n(63038)),
                r = n(15586),
                i = a(n(84646)),
                l = n(80965),
                u = n(48360),
                s = n(67294),
                d = n(59566),
                c = a(n(66863)),
                f = n(2133),
                p = a(n(18496)),
                h = a(n(72758)),
                m = n(72743),
                v = n(66419),
                g = a(n(38345)),
                _ = a(n(53187)),
                C = a(n(18345)),
                x = n(96706),
                S = n(19288),
                b = n(98169),
                y = n(94680),
                j = n(23519),
                k = a(n(22426)),
                T = a(n(92546)),
                E = a(n(5029)),
                P = n(38032),
                w = n(2629),
                I = a(n(45159)),
                A = a(n(18719)),
                M = n(56264),
                O = n(71072),
                L = n(91823),
                N = n(52867),
                R = a(n(22593)),
                D = a(n(70270)),
                B = a(n(99602)),
                F = a(n(7665)),
                V = n(82118),
                W = a(n(8995)),
                U = a(n(57811)),
                H = a(n(39394)),
                G = n(8413),
                q = n(69283),
                z = a(n(15663)),
                K = a(n(1379)),
                Q = n(59175),
                Y = n(85893)
        },
        99602: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, s.useOptionalModelValues)(e.profilePicThumb, ["imgFull"]),
                    n = (0, s.useModelValues)(e.contact, ["id", "isMe"]),
                    a = (0, s.useOptionalModelValues)(e.businessProfile, ["description"]);
                return (0, d.jsxs)("div", {
                    className: l.default.header,
                    "data-testid": "product-list-header",
                    children: [function() {
                        if (!t) return null;
                        var e = (0, o.getDefaultIcon)(n.id);
                        return (0, d.jsx)("div", {
                            className: l.default.photo,
                            children: (0, d.jsx)(o.DetailImageCommon, {
                                profilePicThumb: t,
                                loader: !0,
                                defaultIcon: e,
                                profilePicThumbImg: t.imgFull,
                                spinnerClassName: l.default.spinner,
                                imgClassName: l.default.img,
                                theme: "business"
                            })
                        })
                    }(), (0, d.jsxs)("div", {
                        className: l.default.text,
                        children: [(0, d.jsx)(u.TextDiv, {
                            className: l.default.name,
                            theme: "large",
                            children: (0, d.jsx)(i.Name, {
                                contact: n,
                                selectable: !0,
                                useVerifiedName: !0
                            })
                        }), a && a.description ? (0, d.jsx)("div", {
                            className: l.default.description,
                            children: (0, d.jsx)(r.EmojiText, {
                                text: a.description,
                                direction: "auto",
                                selectable: !0,
                                titlify: !0
                            })
                        }) : null]
                    })]
                })
            };
            var o = n(66834),
                r = n(73008),
                i = n(1191),
                l = a(n(72940)),
                u = n(22552),
                s = n(69283),
                d = n(85893)
        },
        46989: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                o = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onBack,
                    n = (0, S.useModelValues)(e.product, ["id", "catalogWid"]),
                    o = (0, c.useState)({}),
                    j = (0, u.default)(o, 2),
                    k = j[0],
                    T = j[1],
                    E = (0, c.useState)(""),
                    P = (0, u.default)(E, 2),
                    w = P[0],
                    I = P[1],
                    A = (0, c.useState)(""),
                    M = (0, u.default)(A, 2),
                    O = M[0],
                    L = M[1],
                    N = (0, c.useState)(!0),
                    R = (0, u.default)(N, 2),
                    D = R[0],
                    B = R[1],
                    F = function(e) {
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
                            var t, a, o, r, l, u, d, c, f, h, m, g, _, C, S, b, y, j, k;
                            return i.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, p.CatalogCollection.findProduct({
                                            catalogWid: n.catalogWid,
                                            productId: n.id.toString(),
                                            productMsgMediaData: (0, x.unproxy)(n).productMsgMediaData,
                                            shouldFetchComplianceFields: !0
                                        });
                                    case 2:
                                        if (t = p.CatalogCollection.get(n.catalogWid), !(a = (0, s.default)(t, "catalog").productCollection.get(n.id))) {
                                            e.next = 18;
                                            break
                                        }
                                        return e.next = 7, F(a);
                                    case 7:
                                        return y = e.sent, e.next = 10, (0, v.getCountryName)(null === (o = a.complianceInfo) || void 0 === o || null === (r = o.importerAddress) || void 0 === r ? void 0 : r.countryCode);
                                    case 10:
                                        j = e.sent, k = {
                                            importerName: (null === (l = a.complianceInfo) || void 0 === l ? void 0 : l.importerName) || "",
                                            countryCodeOrigin: (null === (u = a.complianceInfo) || void 0 === u ? void 0 : u.countryCodeOrigin) || "",
                                            importerAddress: {
                                                street1: (null === (d = a.complianceInfo) || void 0 === d || null === (c = d.importerAddress) || void 0 === c ? void 0 : c.street1) || "",
                                                street2: (null === (f = a.complianceInfo) || void 0 === f || null === (h = f.importerAddress) || void 0 === h ? void 0 : h.street2) || "",
                                                city: (null === (m = a.complianceInfo) || void 0 === m || null === (g = m.importerAddress) || void 0 === g ? void 0 : g.city) || "",
                                                region: (null === (_ = a.complianceInfo) || void 0 === _ || null === (C = _.importerAddress) || void 0 === C ? void 0 : C.region) || "",
                                                postalCode: (null === (S = a.complianceInfo) || void 0 === S || null === (b = S.importerAddress) || void 0 === b ? void 0 : b.postalCode) || ""
                                            }
                                        }, T(k), B(!1), I(y), L(j), e.next = 19;
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
                var V = function() {
                        if (t) return t()
                    },
                    W = k.countryCodeOrigin,
                    U = k.importerName,
                    H = k.importerAddress;
                return (0, b.jsxs)(g.default, {
                    onDrop: V,
                    theme: "striped",
                    children: [(0, b.jsx)(C.DrawerHeader, {
                        a8n: "drawer-title-profile",
                        title: d.fbt._("More information", null, {
                            hk: "2JHvi1"
                        }),
                        onBack: V,
                        type: C.DRAWER_HEADER_TYPE.SMALL
                    }), (0, b.jsx)(_.default, {
                        theme: D ? "center-content" : void 0,
                        children: D ? (0, b.jsx)(m.ComplianceInfoLoading, {}) : (0, b.jsxs)(m.ComplianceInfoGroup, {
                            children: [(0, b.jsx)(m.ComplianceInfoPrimitiveField, {
                                value: w,
                                label: d.fbt._("Country of Origin", null, {
                                    hk: "2yl0F7"
                                })
                            }), W && ![h.COMPLIANCE_INFO_CODES.INDIA, v.SyntheticCountryCode.NotApplicable].includes(W) ? (0, b.jsxs)(b.Fragment, {
                                children: [(0, b.jsx)(m.ComplianceInfoPrimitiveField, {
                                    value: U,
                                    label: d.fbt._("Name of Importer", null, {
                                        hk: "3gfW35"
                                    })
                                }), (0, b.jsx)(m.ComplianceInfoStructuralField, {
                                    valuesMap: (0, r.default)({
                                        importerAddressCountryNameOrigin: O
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
                p = n(72743),
                h = n(22742),
                m = n(65971),
                v = n(60543),
                g = o(n(53187)),
                _ = o(n(18345)),
                C = n(19288),
                x = n(68220),
                S = n(69283),
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
                    a = (0, o.useContext)(i.DrawerContext),
                    h = (0, f.useModelValues)(e.product, ["productImageCollection", "productMsgMediaData", "catalogWid", "imageCdnUrl"]),
                    m = h.lazyloadProductImageCollection().toArray();
                return (0, p.jsx)("div", {
                    className: d.default.imageCarouselContainer,
                    children: (0, p.jsx)(l.default, {
                        images: m,
                        fetching: n,
                        onClick: t ? function(e, t) {
                            (0, u.logDetailImageClick)({
                                product: (0, c.unproxy)(h),
                                catalogContext: (0, s.getProductCatalogContext)(a)
                            });
                            var n = {
                                activeProductImage: t,
                                productImageCollection: h.lazyloadProductImageCollection(),
                                getZoomNode: function() {
                                    return e
                                },
                                product: h
                            };
                            r.Cmd.productImageViewerModal(n, (0, s.getProductCatalogSessionId)(a))
                        } : null,
                        renderFallback: !t,
                        fallbackMediaData: h.productMsgMediaData
                    })
                })
            };
            var o = n(67294),
                r = n(65901),
                i = n(96706),
                l = a(n(8001)),
                u = n(56264),
                s = n(52867),
                d = a(n(30836)),
                c = n(68220),
                f = n(69283),
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
                i = n(58342),
                l = n(73454),
                u = a(n(11967)),
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
                v = a(n(91221)),
                g = a(n(78366)),
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
                        }, e.onDelete = function() {
                            e.end()
                        }, e.onReport = function(t) {
                            h.QPL.markerStart(m.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT), e._onShowSubmittedToast(t)
                        }, e.onTellUsMore = function() {
                            e.push((0, C.jsx)(g.default, {
                                onTellUsMoreSubmit: e.onReport,
                                onCancel: e.onCancel
                            }), "none")
                        }, e.onPopupCancel = function() {
                            e.end()
                        }, e.onCancel = function() {
                            e.end()
                        }, e._onReportSubmitted = function() {
                            e.end()
                        }, e._onShowSubmittedToast = function(t) {
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
                                            return e._onShowSubmittedToast(t, n)
                                        }
                                    })
                                }));
                            return d.Cmd.openToast((0, C.jsx)(s.ActionToast, {
                                id: n,
                                initialAction: l,
                                pendingAction: c
                            })), e._onReportSubmitted(), i
                        }, e
                    }
                    return (0, r.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, C.jsx)(v.default, {
                                onTellUsMore: this.onTellUsMore,
                                onReport: this.onReport,
                                onPopupCancel: this.onPopupCancel,
                                onCancel: this.onCancel
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
                    g = (0, o.default)(a, 2),
                    _ = g[0],
                    C = g[1],
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
                                return (0, h.jsx)("li", {
                                    children: (0, h.jsxs)("label", {
                                        className: f.default.label,
                                        children: [(0, h.jsx)("input", {
                                            type: "radio",
                                            name: e,
                                            value: e,
                                            onChange: S,
                                            className: f.default.input,
                                            checked: e === _
                                        }), (0, h.jsx)(v, {
                                            reason: e
                                        })]
                                    })
                                }, `ReportProductReasonPopup-${e}-option`)
                            }))
                        })
                    }),
                    j = (0, h.jsx)(u.default, {
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
                    k = (0, h.jsx)(u.default, {
                        type: "secondary",
                        a8nText: "popup-controls-cancel",
                        onClick: x,
                        children: i.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        })
                    }, "ReportProductReasonPopup-cancelButton"),
                    T = (0, h.jsxs)("div", {
                        className: f.default.buttons,
                        children: [k, j]
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
                d = n(58342),
                c = n(73454),
                f = a(n(48246)),
                p = n(92428),
                h = n(85893),
                m = ["NO_MATCH", "SPAM", "ILLEGAL", "SCAM", "KNOCKOFF", "OTHER"];

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
                    v = e.businessProfile,
                    g = (0, p.jsx)(f.default, {
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
                        if (t) u.Cmd.openModal(g), (0, d.logShopsManagementEvent)(c.default.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_SHOPS_PRODUCT_PREVIEW_TILE, {
                            shouldLogJid: !1
                        });
                        else {
                            var n = new URL((0, o.default)(e.url, "product.url"), `https://${s.HOSTNAME.FACEBOOK}`);
                            r.default.open(String(n))
                        }
                    },
                    onProductCatalog: function() {
                        t ? (u.Cmd.openModal(g), (0, d.logShopsManagementEvent)(c.default.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_MANAGE_SHOPS)) : (0, i.goToShop)(v)
                    },
                    catalog: n,
                    subtitle: a,
                    hideIncompleteRows: h,
                    productsToShow: m,
                    showShopsLogo: !0
                })
            };
            var o = a(n(272)),
                r = a(n(4670)),
                i = n(79614),
                l = a(n(69286)),
                u = n(65901),
                s = n(98585),
                d = n(25780),
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
                var t, n = (0, s.useModelValues)(e.msgInfoParticipant, ["t"]),
                    a = (0, s.useModelValues)(e.contact, ["id", "name", "formattedName", "notifyName"]),
                    c = (0, d.jsx)(i.DetailImage, {
                        id: a.id
                    }),
                    f = r.Clock.relativeDateAndTimeStr(n.t),
                    p = (0, d.jsx)("span", {
                        title: f,
                        children: f
                    });
                !a.name && a.notifyName && (t = (0, d.jsx)(l.EmojiText, {
                    className: u.default.notifyName,
                    direction: "auto",
                    text: a.notifyName
                }));
                return (0, d.jsx)(o.default, {
                    contextEnabled: function() {
                        return !1
                    },
                    image: c,
                    primary: (0, d.jsx)(l.EmojiText, {
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
            var o = a(n(27237)),
                r = n(10399),
                i = n(66834),
                l = n(73008),
                u = a(n(42684)),
                s = n(69283),
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
                s = a(n(3792)),
                d = n(26141),
                c = n(33272),
                f = a(n(81218)),
                p = a(n(46821)),
                h = n(49012),
                m = n(27968),
                v = a(n(45159)),
                g = n(85651),
                _ = n(22552),
                C = n(85893),
                x = {
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
                S = function() {
                    return l.fbt._("Not Provided", null, {
                        hk: "43OpXI"
                    })
                };
            t.ComplianceInfoGroup = function(e) {
                var t = e.title,
                    n = e.children;
                return (0, C.jsx)(p.default, {
                    title: t,
                    xstyle: i.uiPadding.vert8,
                    children: n
                })
            };
            t.ComplianceInfoPrimitiveField = function(e) {
                var t = e.value,
                    n = e.label,
                    a = e.forceLTR;
                return (0, C.jsxs)(b, {
                    children: [(0, C.jsx)(T, {
                        value: t,
                        forceLTR: a
                    }), (0, C.jsx)(k, {
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
                    l = i.length ? i.join(", ") : S();
                return (0, C.jsxs)(b, {
                    children: [(0, C.jsx)(T, {
                        value: l
                    }), (0, C.jsx)(k, {
                        label: r
                    })]
                })
            };
            var b = function(e) {
                var t = e.children;
                return (0, C.jsx)(f.default, {
                    multiline: !0,
                    restrictSpacing: !0,
                    children: (0, C.jsx)("div", {
                        className: (0, u.default)(i.uiPadding.vert8),
                        children: t
                    })
                })
            };
            t.ComplianceInfoLoading = function() {
                return (0, C.jsx)(m.FlexRow, {
                    align: "center",
                    justify: "center",
                    a8nText: "compliance-info-loading",
                    children: (0, C.jsx)(m.FlexItem, {
                        children: (0, C.jsx)(g.Spinner, {})
                    })
                })
            };
            t.ComplianceInfoHelpCenterBanner = function(e) {
                var t = e.xstyle;
                return (0, C.jsxs)("div", {
                    className: (0, u.default)(x.helpCenterBanner, t),
                    "data-testid": "compliance-help-center-banner",
                    children: [l.fbt._("Indian law requires additional information from businesses selling online.", null, {
                        hk: "1zuHU2"
                    }), " ", (0, C.jsx)(h.ExternalLink, {
                        href: "https://faq.whatsapp.com/general/account-and-profile/how-to-comply-with-the-laws-for-selling-online-in-India",
                        children: l.fbt._("Learn more", null, {
                            hk: "1JNnQ1"
                        })
                    })]
                })
            };
            var y = function(e) {
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
                                    if (n = e.sent, !(a = y(n))) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return", a.legalEntityDetails || void 0);
                                case 8:
                                    __LOG__(3)`compliance: cannot fetch business details (${t.toString()})`;
                                case 9:
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
            var k = function(e) {
                    var t = e.label;
                    return (0, C.jsx)("div", {
                        className: (0, u.default)(x.fieldLabel),
                        "data-testid": "compliance-info-field-label",
                        children: (0, C.jsx)(_.TextSpan, {
                            theme: "muted",
                            children: t
                        })
                    })
                },
                T = function(e) {
                    var t = e.value,
                        n = e.forceLTR,
                        a = void 0 !== n && n,
                        o = v.default.isRTL();
                    return (0, C.jsx)("div", {
                        className: (0, u.default)(x.fieldValue, i.uiMargin.vert3, o && a && x.displayRight),
                        dir: a || !o ? "ltr" : "rtl",
                        "data-testid": "compliance-info-field-value",
                        children: t || S()
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
        81218: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a = null != e.side ? (0, d.jsx)("div", {
                        className: (0, l.default)(c.side),
                        children: e.side
                    }) : null,
                    f = null === (t = e.separator) || void 0 === t || t,
                    p = (0, i.default)((0, l.default)(c.container, e.xstyle), e.className, (0, o.default)({}, u.default.separator, f)),
                    h = null !== (n = e.testid) && void 0 !== n ? n : f ? "container_with_separator" : "container";
                return (0, d.jsx)("div", {
                    "data-a8n": r.default.key(e.a8nText),
                    className: p,
                    role: e.onClick ? "button" : null,
                    "data-testid": h,
                    onClick: e.onClick,
                    children: (0, d.jsxs)("div", {
                        className: (0, i.default)(u.default.block, (0, l.default)(c.block, e.blockXstyle, e.multiline && c.blockMultiline)),
                        children: [(0, d.jsx)("div", {
                            className: (0, i.default)((0, l.default)(c.main, e.multiline && c.mainMultiline, e.restrictSpacing && c.mainRestrictSpacing, s.isOSMac && c.mainMac)),
                            children: e.children
                        }), a]
                    })
                })
            };
            var o = a(n(59713)),
                r = a(n(84646)),
                i = a(n(94184)),
                l = a(n(56720)),
                u = a(n(41323)),
                s = n(64197),
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
        36745: (e, t, n) => {
            "use strict";
            var a = n(20862),
                o = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.findFirstWebLink = void 0, t.useLinkPreview = function(e, t) {
                var n = (0, d.useState)(null),
                    a = (0, l.default)(n, 2),
                    o = a[0],
                    f = a[1],
                    p = function() {
                        f(null)
                    };
                return (0, d.useEffect)((function() {
                    if (p(), e) {
                        var n = new c.default,
                            a = n.signal;
                        return (0, u.default)(r.default.mark((function n() {
                                var o, l, u;
                                return r.default.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, n.next = 3, (0, C.default)((0, m.default)(e, !0), a);
                                        case 3:
                                            if (o = n.sent, l = null == o ? void 0 : o.data) {
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
                                            return n.next = 12, b(l.thumbnailHQ, a, t);
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
                    linkPreview: o,
                    clearLinkPreview: p
                }
            };
            var r = o(n(87757)),
                i = o(n(81109)),
                l = o(n(63038)),
                u = o(n(48926)),
                s = n(396),
                d = n(67294),
                c = o(n(73663)),
                f = n(44740),
                p = o(n(94253)),
                h = o(n(38931)),
                m = o(n(9596)),
                v = a(n(53454)),
                g = n(57412),
                _ = o(n(57393)),
                C = o(n(27003)),
                x = o(n(53437)),
                S = o(n(89490));

            function b() {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = (0, u.default)(r.default.mark((function e(t, n, a) {
                    var o, i, l;
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, C.default)(_.default.createFromBase64Jpeg(t), n);
                            case 3:
                                return o = e.sent, e.next = 6, (0, S.default)({
                                    thumbnail: o,
                                    mediaType: g.MEDIA_TYPES.THUMBNAIL_LINK,
                                    mediaKeyInfo: (0, x.default)(),
                                    uploadOrigin: (0, h.default)(a),
                                    forwardedFromWeb: !1,
                                    signal: n,
                                    timeout: p.default.MMS_THUMBNAIL_UPLOAD_TIMEOUT,
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
                var t = (0, f.removeCodeBlocks)(e),
                    n = v.findLinks(t, !0)[0];
                if (n) return n.url
            }
        },
        8001: (e, t, n) => {
            "use strict";
            var a = n(21314).default,
                o = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.images,
                    o = e.renderFallback,
                    d = e.fallbackMediaData,
                    b = e.fetching,
                    y = e.onClick,
                    j = (0, s.useRef)(null),
                    k = (0, s.useRef)(null),
                    T = (0, s.useRef)(null),
                    E = (0, s.useRef)(null),
                    P = (0, s.useRef)(null),
                    w = (0, s.useState)(null),
                    I = (0, i.default)(w, 2),
                    A = I[0],
                    M = I[1],
                    O = (0, s.useState)(n.filter((function(e) {
                        return e.mediaData.mediaStage === m.MEDIA_DATA_STAGE.RESOLVED
                    })).length),
                    L = (0, i.default)(O, 2),
                    N = L[0],
                    R = L[1],
                    D = (0, s.useState)(!1),
                    B = (0, i.default)(D, 2),
                    F = B[0],
                    V = B[1],
                    W = N === n.length,
                    U = function() {
                        return R((function(e) {
                            return e + 1
                        }))
                    };
                (0, s.useEffect)((function() {
                    var e = null;
                    if (!W && !o) {
                        var t, n, r = k.current;
                        if (!r) return;
                        null === (t = T.current) || void 0 === t || t.controller.abort();
                        var i = (e = new c.default).signal,
                            u = ((null === (n = T.current) || void 0 === n ? void 0 : n.promise) || a.resolve()).then((function() {
                                return (0, x.default)(r, {
                                    opacity: [1, 0]
                                }, {
                                    delay: 75,
                                    duration: 50
                                })
                            })),
                            s = (0, v.default)(u, i).then((function() {
                                if (i.aborted) throw new l.AbortError;
                                V(!0)
                            })).catch((0, l.catchAbort)((function() {
                                (0, x.default)(r, "stop", !0)
                            }))).finally((function() {
                                T.current = null
                            }));
                        T.current = {
                            promise: s,
                            controller: e
                        }
                    }
                    return function() {
                        var t;
                        null === (t = e) || void 0 === t || t.abort()
                    }
                }), [W, o]);
                var H, G, q, z = function() {
                    var e;
                    return (null === (e = j.current) || void 0 === e ? void 0 : e.children) ? j.current.scrollWidth === j.current.offsetWidth ? null : 0 === j.current.scrollLeft ? "next" : j.current.scrollWidth - 1 <= j.current.scrollLeft + j.current.offsetWidth ? "prev" : "both" : null
                };
                if ((0, s.useEffect)((function() {
                        M(z())
                    }), [W]), o && 0 === n.length) return (0, S.jsx)("div", {
                    className: p.default.carousel,
                    dir: "ltr",
                    children: (0, S.jsx)("div", {
                        className: (0, u.default)(p.default.contentContainer, p.default.slidesContainer),
                        children: d && (0, S.jsx)(h.default, {
                            altText: "",
                            mediaData: d,
                            renderFallback: !0,
                            singleSlide: !0
                        })
                    })
                });
                var K = function() {
                    E.current = null;
                    var e = z();
                    A !== e && M(e)
                };
                if (n.length > 1) {
                    var Q = function() {
                            var e = j.current;
                            if (null != e && ("prev" === A || "both" === A)) {
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
                            var e = j.current;
                            if (null != e && ("next" === A || "both" === A)) {
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
                            P.current = null;
                            var e = z();
                            A !== e && M(e)
                        };
                    q = function() {
                        null == P.current && (P.current = requestAnimationFrame($))
                    }, W && null != A && (H = (0, S.jsx)(f.ChevronButton, {
                        type: f.ButtonType.Prev,
                        onClick: Q,
                        onKeyDown: Q,
                        disabled: "prev" !== A && "both" !== A,
                        theme: _.RoundTheme.Small,
                        overMedia: !0
                    }), G = (0, S.jsx)(f.ChevronButton, {
                        type: f.ButtonType.Next,
                        onClick: Y,
                        onKeyDown: Y,
                        disabled: "next" !== A && "both" !== A,
                        theme: _.RoundTheme.Small,
                        overMedia: !0
                    }))
                }
                var J = 1 === n.length,
                    X = n.map((function(e, t) {
                        return (0, S.jsx)(h.default, {
                            altText: "",
                            image: e,
                            singleSlide: J,
                            mediaData: e.mediaData,
                            onClick: y,
                            onLoad: U
                        }, t)
                    })),
                    Z = W ? null : (0, S.jsx)("div", {
                        className: (0, u.default)(p.default.contentContainer, p.default.spinnerContainer),
                        children: (0, S.jsx)("div", {
                            className: p.default.spinner,
                            ref: k,
                            children: (0, S.jsx)(C.Spinner, {
                                color: "default",
                                size: 50,
                                stroke: 4
                            })
                        })
                    }),
                    ee = (0, u.default)(p.default.carousel, (t = {}, (0, r.default)(t, p.default.loaded, !b && W), (0, r.default)(t, p.default.fadeIn, F), t));
                return (0, S.jsxs)("div", {
                    className: ee,
                    dir: "ltr",
                    children: [Z, (0, S.jsx)("div", {
                        ref: j,
                        className: (0, u.default)(p.default.contentContainer, p.default.slidesContainer),
                        onScroll: q,
                        children: X
                    }), H, G, (0, S.jsx)(g.default, {
                        onResize: function() {
                            null == E.current && (E.current = requestAnimationFrame(K))
                        }
                    })]
                })
            };
            var r = o(n(59713)),
                i = o(n(63038)),
                l = n(396),
                u = o(n(94184)),
                s = n(67294),
                d = o(n(30523)),
                c = o(n(73663)),
                f = n(23145),
                p = o(n(55140)),
                h = o(n(82655)),
                m = n(41655),
                v = o(n(27003)),
                g = o(n(55492)),
                _ = n(80385),
                C = n(85651),
                x = o(n(66265)),
                S = n(85893);
            d.default.polyfill()
        },
        82655: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(67294),
                r = a(n(57246)),
                i = n(41655),
                l = n(69283),
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
                        h = (0, l.useModelValues)(t, ["fullHeight", "fullWidth", "mediaStage", "renderableUrl"]),
                        m = h.fullHeight,
                        v = h.fullWidth,
                        g = h.mediaStage,
                        _ = h.renderableUrl,
                        C = (0, o.useRef)(null),
                        x = (0, o.useRef)(g === i.MEDIA_DATA_STAGE.RESOLVED);
                    (0, o.useEffect)((function() {
                        !f || x.current || d || g !== i.MEDIA_DATA_STAGE.RESOLVED || (f(), x.current = !0)
                    }), [f, d, g]);
                    var S = !!s,
                        b = v && m ? v / m : .8;
                    b < .8 && (b = .8), b > 1.91 && (b = 1.91), b > 1 && !S && (b = 1);
                    var y = {
                            width: S && b < 1 ? 100 * b + "%" : 1 !== b || s ? null : "100%"
                        },
                        j = {
                            paddingTop: `${Math.floor(100/b)}%`
                        },
                        k = {
                            cursor: "" + (c ? "pointer" : "auto")
                        };
                    return (0, u.jsx)("div", {
                        ref: p ? function(e) {
                            return p(e)
                        } : null,
                        className: r.default.slide,
                        style: y,
                        children: (0, u.jsx)("div", {
                            className: r.default.slideInnerContainer,
                            style: j,
                            children: (0, u.jsx)("img", {
                                ref: C,
                                alt: n,
                                src: _,
                                className: r.default.image,
                                style: k,
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
                    g = e.medias || e.productMedias,
                    _ = "new-chat-info" === e.theme;
                if (!g) return null;
                var C = (0, l.default)(c.default.container, (t = {}, (0, r.default)(t, c.default.drawer, a), (0, r.default)(t, c.default.galleryEmpty, 0 === n.length), (0, r.default)(t, c.default.justifySpaceBetween, "space-between" === f), (0, r.default)(t, c.default.themeNewChatInfo, _), t)),
                    x = (0, o.default)(g);
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
                    n.queryMediaBefore || n.hasMediaBefore || (C = (0, l.default)(C, c.default.galleryEmpty), x = [v(Math.max(u ? u.docCount : 0, 0), Math.max(u ? u.linkCount : 0, 0), Math.max(u ? u.productCount : 0, 0))])
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
                d = a(n(45159)),
                c = a(n(70764)),
                f = n(43890),
                p = n(85651),
                h = n(85893);

            function m() {
                return (0, h.jsx)("div", {
                    className: c.default.canvasEmpty
                })
            }

            function v(e, t, n) {
                var a = [];
                return null != e && e > 0 && a.push(d.default.t(401, {
                    count: e,
                    _plural: e
                })), null != t && t > 0 && a.push(d.default.t(566, {
                    count: t,
                    _plural: t
                })), f.ServerProps.productMediaAttachments && null != n && n > 0 && a.push(d.default.t(718, {
                    count: n,
                    _plural: n
                })), a.length > 0 ? a.join(d.default.t(411)) : f.ServerProps.productMediaAttachments ? u.fbt._("No Media, Links, Docs and Products", null, {
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
        84287: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, r.jsx)("div", {
                    className: (0, o.default)(i.icon, "transparent" === e.theme && i.transparent, "compact" === e.theme && i.compact, !0 === e.disabled && i.disabled, e.xstyle),
                    children: e.children
                })
            };
            var o = a(n(56720)),
                r = n(85893),
                i = {
                    icon: {
                        display: "p357zi0d",
                        alignItems: "gndfcl4n",
                        justifyContent: "ac2vgrno",
                        width: "dyxdk6fi",
                        height: "m3o1wsh7",
                        color: "k17s6i4e",
                        backgroundColor: "ju2rvew0",
                        borderTopStartRadius: "g9p5wyxn",
                        borderTopEndRadius: "i0tg5vk9",
                        borderBottomEndRadius: "aoogvgrq",
                        borderBottomStartRadius: "o2zu3hjb"
                    },
                    disabled: {
                        backgroundColor: "lmoo7qev"
                    },
                    transparent: {
                        color: "svlsagor",
                        backgroundColor: "j1wdo6yn"
                    },
                    compact: {
                        width: "qssinsw9",
                        height: "lniyxyh2"
                    }
                }
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
                        color: "t0mgield"
                    }
                },
                u = n(54302).Mirrored(["StickerStore", "MediaViewer"]);
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
                s = n(67294),
                d = n(23973),
                c = a(n(94253)),
                f = a(n(16175)),
                p = n(1577),
                h = n(63641),
                m = a(n(57393)),
                v = n(1146),
                g = a(n(61897)),
                _ = n(692),
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
                        return (e = t.call.apply(t, [this].concat(r))).checkIteration = 0, e.checkForSuccessInterval = 0, e.hasCalledPlaying = !1, e.mediaBlobWasDownloadedBeforeMount = Boolean(e.props.mediaData.mediaBlob), e.refVideo = (0, s.createRef)(), e.onVolumeChange = function() {
                            var t, n = null === (t = e.refVideo) || void 0 === t ? void 0 : t.current;
                            n && S(n.volume, n.muted)
                        }, e.startCheckForSuccess = function() {
                            e.checkIteration = 0, e.checkForSuccessInterval || (e.checkForSuccessInterval = setInterval(e.checkForSuccess, 250))
                        }, e.clearCheckForSuccess = function() {
                            e.checkForSuccessInterval && (clearInterval(e.checkForSuccessInterval), e.checkIteration = 0, e.checkForSuccessInterval = 0)
                        }, e.checkForSuccess = function() {
                            var t;
                            if (C.Socket.state === v.SOCKET_STATE.CONNECTED) {
                                e.checkIteration++;
                                var n = null === (t = e.refVideo) || void 0 === t ? void 0 : t.current,
                                    a = null == n ? void 0 : n.buffered;
                                (null == a ? void 0 : a.length) && a.end(0) > 0 ? e.onPlaying() : e.checkIteration > 240 && e.clearCheckForSuccess()
                            }
                        }, e.onPlayerError = function() {
                            e.clearCheckForSuccess()
                        }, e.pause = function() {
                            var t, n = null === (t = e.refVideo) || void 0 === t ? void 0 : t.current;
                            n && (n.paused || n.pause())
                        }, e.onPlaying = function() {
                            e.clearCheckForSuccess()
                        }, e.onLoadedMetadata = function(t) {
                            e.setStartTime();
                            var n = e.props.onLoadedMetadata;
                            n && n(t)
                        }, e.setStartTime = function() {
                            var t, n = null === (t = e.refVideo) || void 0 === t ? void 0 : t.current;
                            null != e.props.startTime && 0 !== e.props.startTime && n && (n.currentTime = e.props.startTime)
                        }, e.onContextMenu = function(t) {
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
                            t !== this._prevVideo && (this._prevVideo = t, null === (e = this._unregisterFromAudioChannel) || void 0 === e || e.call(this), null != t && (this._unregisterFromAudioChannel = d.MainAudioChannel.registerMedia(t)))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e;
                            null === (e = this._unregisterFromAudioChannel) || void 0 === e || e.call(this), S.flush(), this.clearCheckForSuccess(), this.pause(), _.UA.isBlink && this.refVideo.current && (0, f.default)(this.refVideo.current)
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
                                n && ("number" == typeof n.volume && (t.volume = n.volume), "boolean" == typeof n.muted && (t.muted = n.muted)), j() && this.props.autoPlay && this.startCheckForSuccess()
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
                                e = `${c.default.VIDEO_STREAM_URL}?key=${this.props.msg.id.toString()}`
                            }
                            var r = j() && !t.autoPlay ? this.startCheckForSuccess : void 0;
                            return (0, x.jsx)("video", {
                                ref: this.refVideo,
                                src: e,
                                poster: t.poster,
                                className: t.className,
                                controls: t.controls,
                                autoPlay: t.autoPlay,
                                onClick: t.onClick,
                                onDoubleClick: t.onDoubleClick,
                                onVolumeChange: this.onVolumeChange,
                                onLoadedMetadata: this.onLoadedMetadata,
                                onPlay: r,
                                onPlaying: this.onPlaying,
                                onError: this.clearCheckForSuccess,
                                onContextMenu: this.onContextMenu,
                                children: t.children
                            })
                        }
                    }]), n
                }(s.PureComponent);
            b.CONCERNS = {
                msg: ["id"],
                mediaData: ["mediaBlob", "streamable"]
            }, b.displayName = "VideoTag";
            var y = (0, h.ListenerHOC)((0, g.default)(b, b.CONCERNS));

            function j() {
                return _.UA.isGecko || _.UA.isSafari
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
                l = n(91240),
                u = n(85893)
        },
        22674: (e, t, n) => {
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
                l = n(91240),
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
                d = n(84533),
                c = n(65901),
                f = a(n(94253)),
                p = a(n(50177)),
                h = a(n(45159)),
                m = n(64803),
                v = n(99451),
                g = n(43966),
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
                                            e.end(), window.innerWidth <= f.default.LAYOUT_2COLUMNS_MAX_WIDTH && c.Cmd.closeDrawerRight(), t.next = 10;
                                            break;
                                        case 9:
                                            e.push((0, x.jsx)(C.default, {
                                                defaultText: r,
                                                title: i || h.default.t(651),
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
                                            n.active ? c.Cmd.pasteChatTextInput(n, a) : (n.setComposeContents({
                                                text: a
                                            }), c.Cmd.openChatFromUnread(n).then((function(e) {
                                                e && c.Cmd.focusChatTextInput(n)
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
                                                c.Cmd.once("ui_idle", (function() {
                                                    (0, g.sendTextMsgToChat)(r, n, {
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
                                            return e.next = 3, (0, d.unblockContact)(t.contact);
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
                                title: this.props.title || h.default.t(651),
                                listType: m.ListType.CHAT_SELECT_MODAL,
                                getInitialItems: this._getSelected,
                                maxItems: _.ServerProps.multicastLimitGlobal,
                                onConfirm: this._handleForwardConfirmed,
                                onCancel: this._handleCancel,
                                onSelectionChanged: this._handleSelectionChange,
                                singleSelectionFooterType: v.FooterType.NEXT,
                                multipleSelectionFooterType: v.FooterType.NEXT
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
        69237: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n(84646)),
                r = n(48360),
                i = n(67294),
                l = a(n(59271)),
                u = n(91404),
                s = a(n(53187)),
                d = a(n(18345)),
                c = n(19288),
                f = n(24779),
                p = n(22552),
                h = n(69283),
                m = n(85893),
                v = (0, i.forwardRef)((function(e, t) {
                    var n = e.settings,
                        a = e.onClose,
                        i = (0, h.useModelValues)(n, ["archive"]).archive,
                        v = !i.classic;
                    return (0, m.jsxs)(s.default, {
                        ref: t,
                        children: [(0, m.jsx)(c.DrawerHeader, {
                            title: r.fbt._("Archive settings", null, {
                                hk: "1YI0jC"
                            }),
                            type: c.DRAWER_HEADER_TYPE.LARGE,
                            onBack: a
                        }), (0, m.jsx)(d.default, {
                            children: (0, m.jsxs)("div", {
                                className: l.default.section,
                                children: [(0, m.jsx)("div", {
                                    "data-a8n": o.default.key("auto-unarchive-setting"),
                                    className: l.default.control,
                                    children: (0, m.jsx)(u.CheckBox, {
                                        onChange: function() {
                                            var e = !i.classic;
                                            (0, f.setArchiveClassicSetting)(e)
                                        },
                                        checked: v
                                    })
                                }), (0, m.jsxs)("div", {
                                    "data-a8n": o.default.key("auto-unarchive-setting-text"),
                                    children: [r.fbt._("Keep chats archived", null, {
                                        hk: "IqSCS"
                                    }), (0, m.jsx)(p.TextDiv, {
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
            t.default = v
        },
        23841: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.collection,
                    n = (0, l.useState)(!1),
                    a = (0, o.default)(n, 2),
                    x = a[0],
                    S = a[1],
                    b = (0, l.useState)(!1),
                    y = (0, o.default)(b, 2),
                    j = y[0],
                    k = y[1],
                    T = (0, l.useState)(""),
                    E = (0, o.default)(T, 2),
                    P = E[0],
                    w = E[1],
                    I = function() {
                        s.Cmd.closeModal()
                    };
                if (j) return (0, C.jsx)(d.default, {
                    title: i.fbt._("Request review", null, {
                        hk: "1Rp2pL"
                    }),
                    onOK: I,
                    children: (0, C.jsx)(m.TextDiv, {
                        children: i.fbt._("We will review the collection and if it meets our guidelines, it will be added to your catalog.", null, {
                            hk: "y5vML"
                        })
                    })
                });
                var A = P.length < 1 || x;
                return (0, C.jsx)(d.default, {
                    title: i.fbt._("Request review", null, {
                        hk: "1Rp2pL"
                    }),
                    onOK: function() {
                        S(!0);
                        var e = !0;
                        p.QPL.markerStart(h.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL), (0, u.handleCollectionAppeal)(t, P).then((function() {
                            S(!1), k(!0), e = !1, p.QPL.markerEnd(h.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, p.QuickLogActionType.SUCCESS)
                        })).catch((0, r.filteredCatch)(_.ServerStatusCodeError, (function() {
                            s.Cmd.openToast((0, C.jsx)(g.Toast, {
                                msg: i.fbt._("Something went wrong and your request wasn't submitted. Try again.", null, {
                                    hk: "3sAwQH"
                                }),
                                id: (0, g.genId)("catalog_collection_appeal_submission_failed")
                            })), S(!1)
                        }))).finally((function() {
                            e && p.QPL.markerEnd(h.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, p.QuickLogActionType.FAIL)
                        }))
                    },
                    onCancel: I,
                    okDisabled: A,
                    children: (0, C.jsxs)("form", {
                        children: [(0, C.jsx)(v.TextInput, {
                            a8n: "confirm-popup-text-input",
                            placeholder: i.fbt._("Enter reason for this request...", null, {
                                hk: "3U5nE7"
                            }),
                            onChange: function(e) {
                                w(e)
                            },
                            value: P,
                            maxLength: 1e3
                        }), (0, C.jsx)(f.ExternalLink, {
                            href: c.default.WA_COMMERCE_POLICY_URL,
                            children: i.fbt._("Learn More", null, {
                                hk: "FZuUT"
                            })
                        })]
                    })
                })
            };
            var o = a(n(63038)),
                r = n(15586),
                i = n(48360),
                l = n(67294),
                u = n(56734),
                s = n(65901),
                d = a(n(86777)),
                c = a(n(94253)),
                f = n(49012),
                p = n(3298),
                h = n(4099),
                m = n(22552),
                v = n(68544),
                g = n(92428),
                _ = n(59175),
                C = n(85893)
        },
        3792: (e, t, n) => {
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
                var e = new c.CoolOffNux(m, g, {
                    COOL_OFF_START_STORAGE_KEY: d.CoolOffPeriodKeys.CATALOG,
                    MAX_VIEWS_IN_DAYS: 1,
                    COOL_OFF_DURATION_IN_DAYS: 1
                });
                if (e.shouldShow()) {
                    var t = (0, h.jsx)(l.default, {
                        onOK: function() {
                            e.dismiss(), i.Cmd.closeModal()
                        },
                        children: (0, h.jsxs)(u.FlexColumn, {
                            align: "center",
                            children: [(0, h.jsx)(u.FlexItem, {
                                xstyle: v.graphic,
                                children: (0, h.jsx)(f.default, {
                                    name: "cart-interstitial-graphic"
                                })
                            }), (0, h.jsx)(p.TextHeader, {
                                theme: "popup-title",
                                children: o.fbt._("New: Add to Cart", null, {
                                    hk: "34ysyY"
                                })
                            }), (0, h.jsx)(p.TextParagraph, {
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
                r = (a(n(56720)), a(n(31907))),
                i = n(65901),
                l = a(n(86777)),
                u = n(27968),
                s = a(n(50507)),
                d = n(15849),
                c = n(8204),
                f = a(n(7665)),
                p = n(22552),
                h = n(85893),
                m = d.NuxKeyTypes.COOL_OFF_NUX.CART_INTERSTITIAL,
                v = {
                    graphic: {
                        marginTop: "nylzjxre",
                        marginEnd: "lfum0007",
                        marginBottom: "bvhm1occ",
                        marginStart: "r6x3u63k",
                        color: "bc38n4nm"
                    }
                },
                g = s.default.BANNER_TYPES.SMB_CATALOG_CART_INTERSTITIAL
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
                    h = i.CatalogCollection.get((0, u.getMeUser)());
                return (0, d.useListener)(null == h ? void 0 : h.collections, "change", (function() {
                    p(!0)
                })), f && (0, c.jsx)(s.default, {
                    children: (0, c.jsx)(l.default, {
                        onClick: t
                    })
                })
            };
            var o = a(n(63038)),
                r = n(67294),
                i = n(72743),
                l = a(n(48066)),
                u = n(1577),
                s = a(n(46114)),
                d = n(8413),
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
                s = n(59566),
                d = n(72743),
                c = a(n(22235)),
                f = n(73929),
                p = a(n(63382)),
                h = n(1577),
                m = a(n(50507)),
                v = n(15849),
                g = a(n(27689)),
                _ = n(8204),
                C = n(85893),
                x = v.NuxKeyTypes.COOL_OFF_NUX.COLLECTIONS,
                S = {
                    COOL_OFF_DURATION_IN_DAYS: 2,
                    VIEWS_BEFORE_COOL_OFF_IN_DAYS: 1,
                    CLICKS_BEFORE_COOL_OFF: 1,
                    MAX_VIEWS_IN_DAYS: 2,
                    COOL_OFF_START_STORAGE_KEY: v.CoolOffPeriodKeys.CATALOG
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
            }(g.default);
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
                i = a(n(37295)),
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
                    v = e.theme,
                    g = e.onClick,
                    _ = "new-chat-info" === v,
                    C = function() {
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
                    x = C.isHovered,
                    S = C.onMouseEnter,
                    b = C.onMouseLeave,
                    y = (0, d.jsx)(u.default, {
                        name: n,
                        directional: !0,
                        color: "teal",
                        width: a,
                        height: f
                    });
                if (!_) return (0, d.jsxs)("div", {
                    className: (0, i.default)(c.button, h && c.disabled, m),
                    children: [(0, d.jsx)("div", {
                        onMouseEnter: S,
                        onMouseLeave: b,
                        children: (0, d.jsx)(l.Round, {
                            inverted: !0,
                            onClick: g,
                            disabled: h,
                            a8nText: t,
                            hideBackground: !x,
                            children: y
                        })
                    }), (0, d.jsx)("div", {
                        className: (0, i.default)(c.label, _ && c.labelForNewChatInfo),
                        children: p
                    })]
                });
                return (0, d.jsxs)("div", {
                    className: (0, i.default)(c.button, h && c.disabled, m),
                    onMouseEnter: S,
                    onMouseLeave: b,
                    children: [(0, d.jsx)(l.Round, {
                        inverted: !0,
                        onClick: g,
                        disabled: h,
                        a8nText: t,
                        hideBackground: h || !x,
                        children: y
                    }), (0, d.jsx)(s.default, {
                        xstyle: [c.label, _ && c.labelForNewChatInfo],
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
                    d = e.rowTheme,
                    c = (0, u.jsx)(l.default, {
                        name: a
                    });
                return (0, u.jsx)(r.default, {
                    image: c,
                    primary: t,
                    secondary: n,
                    theme: d,
                    idle: void 0 === s,
                    onClick: function() {
                        if (void 0 !== s) {
                            var e = (0, i.getWebsiteLink)(s);
                            o.default.open(e)
                        }
                    }
                })
            };
            var o = a(n(4670)),
                r = a(n(88186)),
                i = n(62890),
                l = a(n(7665)),
                u = n(85893)
        },
        73728: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = c;
            var o = n(48360),
                r = (a(n(56720)), a(n(46821))),
                i = n(73008),
                l = a(n(79345)),
                u = n(69283),
                s = n(85893),
                d = {
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

            function c(e) {
                var t, n = e.showEditHint,
                    a = e.businessProfile,
                    c = e.sectionTheme,
                    f = e.rowTheme,
                    p = (0, u.useModelValues)(a, ["fbPage", "igProfessional"]),
                    h = p.fbPage,
                    m = p.igProfessional,
                    v = [];
                if (null == h ? void 0 : h.displayName) {
                    var g = h.likes ? o.fbt._({
                        "*": "Facebook • {count} Likes",
                        _1: "Facebook • 1 Like"
                    }, [o.fbt._plural(h.likes, "count")], {
                        hk: "4fuveG"
                    }) : o.fbt._("Facebook", null, {
                        hk: "2PcUTa"
                    });
                    v.push((0, s.jsx)(l.default, {
                        icon: "logo-facebook-round",
                        text: h.displayName,
                        secondary: g,
                        href: `https://www.facebook.com/${h.id}`,
                        rowTheme: f
                    }, "fb"))
                }
                if (null == m ? void 0 : m.handle) {
                    var _ = m.followers ? o.fbt._({
                        "*": "Instagram • {count} Followers",
                        _1: "Instagram • 1 Follower"
                    }, [o.fbt._plural(m.followers, "count")], {
                        hk: "4gGhJG"
                    }) : o.fbt._("Instagram", null, {
                        hk: "4kjnWv"
                    });
                    v.push((0, s.jsx)(l.default, {
                        icon: "logo-instagram-color",
                        text: `@${m.handle}`,
                        secondary: _,
                        href: `https://www.instagram.com/${m.handle}`,
                        rowTheme: f
                    }, "ig"))
                }
                if (0 === v.length) return null;
                if (!0 === n) {
                    var C = o.fbt._("Facebook and Instagram handles can only be edited from the app on your mobile device.", null, {
                        hk: "3JNYRt"
                    });
                    t = (0, s.jsx)(i.EmojiText, {
                        xstyle: d.infoText,
                        text: C.toString()
                    })
                }
                return (0, s.jsxs)(r.default, {
                    theme: c,
                    children: [v.map((function(e) {
                        return e
                    })), t]
                })
            }
            c.defaultProps = {
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
                        className: i.default.icon
                    }),
                    onClick: function() {
                        return function(e, t) {
                            (0, l.default)(e) ? r.Cmd.openToast((0, c.jsx)(d.Toast, {
                                msg: o.fbt._("Link copied to clipboard.", null, {
                                    hk: "2d44NZ"
                                }),
                                id: (0, d.genId)()
                            })): r.Cmd.openToast((0, c.jsx)(d.Toast, {
                                msg: o.fbt._("Couldn't copy to clipboard. Copy using mouse or keyboard.", null, {
                                    hk: "4aKgWx"
                                }),
                                id: (0, d.genId)()
                            }));
                            null != t && t()
                        }(t, n)
                    },
                    children: o.fbt._("Copy link", null, {
                        hk: "2ZtjA3"
                    })
                }) : null
            };
            var o = n(48360),
                r = n(65901),
                i = a(n(555)),
                l = a(n(12347)),
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
                    v = e.className,
                    g = e.theme,
                    _ = e.disabled,
                    C = void 0 !== _ && _,
                    x = e.testid,
                    S = (0, f.default)(h, {
                        disabled: C
                    }),
                    b = (0, i.default)(S, 2),
                    y = b[0],
                    j = b[1],
                    k = C ? void 0 : e.color,
                    T = null != m ? (0, p.jsx)("div", {
                        className: (0, u.default)(s.default.icon, (t = {}, (0, r.default)(t, s.default.danger, "danger" === k), (0, r.default)(t, s.default.success, "success" === k), t)),
                        children: m
                    }) : null,
                    E = (0, u.default)(s.default.container, v, (n = {}, (0, r.default)(n, s.default.containerNoIcon, !m), (0, r.default)(n, s.default.disabled, Boolean(C)), (0, r.default)(n, s.default.containerListAligned, "list-aligned" === g), (0, r.default)(n, s.default.themeNewChatInfo, "new-chat-info" === g), n)),
                    P = (0, c.isStringOrFbt)(a) ? a : null;
                return (0, p.jsxs)("div", (0, o.default)((0, o.default)({}, j), {}, {
                    className: E,
                    "data-a8n": l.default.key(e.a8nText),
                    "data-ignore-capture": "any",
                    "data-testid": x,
                    ref: y,
                    title: P,
                    children: [T, (0, p.jsx)("div", {
                        className: (0, u.default)(s.default.bodyContainer),
                        children: (0, p.jsx)("div", {
                            className: s.default.body,
                            children: (0, p.jsx)(d.TextSpan, {
                                theme: "title",
                                color: k,
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
                s = a(n(73858)),
                d = n(22552),
                c = n(82118),
                f = a(n(81746)),
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
                s = a(n(94184)),
                d = n(48360),
                c = n(67294),
                f = a(n(88186)),
                p = n(65901),
                h = n(66834),
                m = n(73008),
                v = a(n(22935)),
                g = n(91823),
                _ = a(n(58497)),
                C = a(n(67978)),
                x = a(n(61897)),
                S = a(n(7665)),
                b = n(16835),
                y = a(n(66265)),
                j = n(85893),
                k = function(e) {
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
                        }, e.handleScroll = function(t) {
                            Math.abs(t.deltaY) > 3 && e.handleClose()
                        }, e.handleClose = function() {
                            if (!e.closing) {
                                var t;
                                if (e.closing = !0, e.props.getZoomNode((function(e) {
                                        t = e
                                    })), !t) return p.Cmd.closeModalMedia();
                                var n = e._refImage;
                                if (n) {
                                    e.props.animateBorderRadius && (n.style.transition = "border-radius 500ms cubic-bezier(.1,.82,.25,1)", n.style.borderRadius = "50%");
                                    var a = (0, u.default)(t, "start"),
                                        o = n.getBoundingClientRect(),
                                        r = a.getBoundingClientRect(),
                                        i = r.top - o.top,
                                        l = r.left - o.left,
                                        s = a.clientWidth / n.clientWidth;
                                    (0, y.default)(n, {
                                        translateX: [l, 0],
                                        translateY: [i, 0],
                                        scale: [s, 1]
                                    }, {
                                        duration: 200,
                                        easing: [.1, .82, .25, 1]
                                    }).then((function() {
                                        p.Cmd.closeModalMedia()
                                    }))
                                }
                            }
                        }, e.handleImageLoad = function(t) {
                            var n = t.target;
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
                            return !!e.profilePicThumb.imgFull || (this.handleClose(), !1)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                n = t.contact,
                                a = t.profilePicThumb;
                            return a.imgFull && (e = (0, j.jsx)(v.default, {
                                src: a.imgFull,
                                hasPrivacyChecks: !0,
                                onLoad: this.handleImageLoad,
                                className: C.default.profileViewerImg
                            })), (0, j.jsx)(b.UIE, {
                                displayName: "PhotoViewer",
                                escapable: !0,
                                requestDismiss: this.handleClose,
                                children: (0, j.jsxs)("div", {
                                    className: (0, s.default)("overlay", C.default.container),
                                    onWheel: this.handleScroll,
                                    onClick: this.handleClose,
                                    children: [(0, j.jsxs)("div", {
                                        className: C.default.headerContainer,
                                        children: [(0, j.jsx)("div", {
                                            className: C.default.profileThumb,
                                            children: (0, j.jsx)(f.default, {
                                                image: (0, j.jsx)(h.DetailImage, {
                                                    id: n.id,
                                                    size: 40
                                                }),
                                                theme: "plain",
                                                primary: (0, j.jsx)(m.EmojiText, {
                                                    text: n.formattedUser
                                                })
                                            })
                                        }), (0, j.jsx)("div", {
                                            className: C.default.mediaPanelTools,
                                            children: (0, j.jsx)(g.MenuBar, {
                                                theme: "strong",
                                                children: (0, j.jsx)(g.MenuBarItem, {
                                                    a8nText: "btn-close",
                                                    icon: (0, j.jsx)(S.default, {
                                                        name: "x-viewer"
                                                    }),
                                                    title: d.fbt._("Close", null, {
                                                        hk: "19Jpec"
                                                    }),
                                                    onClick: this.handleClose
                                                })
                                            }, "media-panel-header")
                                        })]
                                    }), (0, j.jsx)("div", {
                                        className: C.default.profileContainer,
                                        dir: "ltr",
                                        children: (0, j.jsx)("div", {
                                            className: C.default.media,
                                            children: (0, j.jsx)(_.default, {
                                                type: "scaleDown",
                                                size: this.state.size,
                                                children: (0, j.jsx)("div", {
                                                    className: C.default.profileViewer,
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
                }(c.Component);
            k.CONCERNS = {
                contact: ["formattedUser", "id"],
                profilePicThumb: ["imgFull"]
            }, k.displayName = "PhotoViewerModal";
            var T = (0, x.default)(k, k.CONCERNS);
            t.default = T
        },
        70486: (e, t, n) => {
            "use strict";
            var a = n(20862),
                o = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.profilePicThumb,
                    n = e.size,
                    a = !t.canSet() && !t.canDelete(),
                    o = (0, u.useState)(!1),
                    v = (0, r.default)(o, 2),
                    g = v[0],
                    _ = v[1],
                    C = (0, h.default)();
                return (0, m.jsx)(d.PhotoPickerLoadable, {
                    type: c.default.PROFILE,
                    id: t.id,
                    attachToChat: !1,
                    pending: g,
                    startImage: t.imgFull,
                    readOnly: a,
                    onImageSet: function(t, n) {
                        var a, o = e.profilePicThumb;
                        _(!0), a = t && n ? (0, f.setProfilePic)(o, t, n) : (0, f.deleteProfilePic)(o), (0, p.default)(a, C).catch((0, l.filteredCatch)(s.ActionError, (function() {
                            __LOG__(3)`ProfileDrawer: failed to set/delete profile image`
                        }))).catch((0, i.catchAbort)((function() {}))).finally((function() {
                            _(!1)
                        }))
                    },
                    size: n
                })
            };
            var r = o(n(63038)),
                i = n(396),
                l = n(15586),
                u = n(67294),
                s = a(n(18286)),
                d = n(76110),
                c = o(n(49309)),
                f = n(43201),
                p = o(n(27003)),
                h = o(n(1379)),
                m = n(85893)
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
                i = a(n(60654)),
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
                        }), u.default.t(721), (0, d.jsxs)("strong", {
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
                l = n(72896),
                u = a(n(45159)),
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
                l = n(48360),
                u = n(67294),
                s = o(n(56720)),
                d = n(65901),
                c = n(43835),
                f = o(n(18759)),
                p = n(98169),
                h = n(10508),
                m = n(11125),
                v = o(n(96150)),
                g = n(68985),
                _ = n(38032),
                C = n(58342),
                x = o(n(45159)),
                S = o(n(50507)),
                b = n(4667),
                y = o(n(83357)),
                j = o(n(55492)),
                k = n(524),
                T = n(43966),
                E = o(n(31522)),
                P = o(n(7665)),
                w = n(92428),
                I = n(16835),
                A = o(n(93820)),
                M = o(n(1379)),
                O = o(n(60806)),
                L = n(85893),
                N = {
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

            function R(e, t) {
                var n = (0, u.useState)(!1),
                    o = (0, r.default)(n, 2),
                    R = o[0],
                    D = o[1],
                    B = (0, u.useState)(void 0),
                    F = (0, r.default)(B, 2),
                    V = F[0],
                    W = F[1],
                    U = (0, u.useState)(void 0),
                    H = (0, r.default)(U, 2),
                    G = H[0],
                    q = H[1],
                    z = (0, u.useState)(null),
                    K = (0, r.default)(z, 2),
                    Q = K[0],
                    Y = K[1],
                    $ = (0, u.useState)(300),
                    J = (0, r.default)($, 2),
                    X = J[0],
                    Z = J[1],
                    ee = !1,
                    te = null,
                    ne = _.GK.supportsFeature(_.GK.F.RICH_STATUS_REPLIES),
                    ae = (0, u.useRef)(null),
                    oe = (0, u.useRef)(null),
                    re = (0, u.createRef)(),
                    ie = (0, M.default)();
                (0, u.useEffect)((function() {
                    (0, g.findChat)(e.msg.sender).then((function(e) {
                        ie.aborted || q(e)
                    }))
                }), []);
                var le = function(e, t, n) {
                    return Boolean(e) || t || Boolean(n)
                }(V, R, Q);
                (0, u.useEffect)((function() {
                    le ? e.pause() : e.play()
                }), [le]);
                var ue = function() {
                        return le
                    },
                    se = function() {
                        var e;
                        null === (e = ae.current) || void 0 === e || e.focus()
                    },
                    de = function() {
                        Y(null), se()
                    },
                    ce = function() {
                        W(void 0), Y(null)
                    },
                    fe = function() {
                        return G ? a.resolve(G) : (0, g.findChat)(e.msg.sender)
                    },
                    pe = function(t, n) {
                        var a;
                        e.statusReplyMetric.statusReplyMessageType = n;
                        var o = (0, w.genId)();
                        d.Cmd.openToast((0, L.jsx)(w.Toast, {
                            msg: l.fbt._("Sending reply…", null, {
                                hk: "WYxWt"
                            }),
                            id: o
                        })), t.then((function() {
                            e.statusReplyMetric.statusReplyResult = S.default.STATUS_REPLY_RESULT.OK, e.onSend()
                        })).catch((0, i.filteredCatch)(f.default, (function() {
                            G && (d.Cmd.openToast((0, L.jsx)(w.Toast, {
                                msg: x.default.t(870, {
                                    contact: G.contact.formattedName
                                }),
                                id: o
                            })), e.statusReplyMetric.statusReplyResult = S.default.STATUS_REPLY_RESULT.ERROR_UNKNOWN)
                        }))), ce(), null === (a = ae.current) || void 0 === a || a.reset(), e.dismissReply()
                    },
                    he = function(t) {
                        if (t.stopPropagation(), t.preventDefault(), ae.current) {
                            var n = ae.current.value.trim();
                            n.length && fe().then((function(t) {
                                var a = (0, T.sendTextMsgToChat)(t, (0, v.default)(n), {
                                    quotedMsg: e.msg
                                });
                                pe(a, S.default.STATUS_REPLY_MESSAGE_TYPE.TEXT)
                            }))
                        }
                    },
                    me = function() {
                        return R
                    },
                    ve = function() {
                        D(!1), ce()
                    },
                    ge = function(e) {
                        var t = ae.current;
                        t && t.replaceSelection(e)
                    },
                    _e = function() {
                        var e;
                        null === (e = oe.current) || void 0 === e || e.restoreFocus()
                    },
                    Ce = function(e) {
                        null == e ? de() : (Y(e), D(!0))
                    };
                (0, u.useImperativeHandle)(t, (function() {
                    return {
                        isFocused: me,
                        isPaused: ue,
                        restoreFocus: se,
                        blur: ve
                    }
                }));
                var xe = ne && (me() || null != Q);
                (0, u.useEffect)((function() {
                    var e;
                    null === (e = ae.current) || void 0 === e || e.setTheme(xe ? "rich-status-reply" : "status-reply")
                }), [xe]);
                var Se = null != X && null != Q && ne ? (0, L.jsx)(j.default, {
                        onResize: function(e) {
                            Z(e.width)
                        },
                        children: (0, L.jsx)(c.ComposeBoxPanelsLoadable, {
                            displayCache: te,
                            width: X,
                            onDisplayCache: function(e) {
                                te = e
                            },
                            onEmoji: ge,
                            onFocusRelease: function() {},
                            onGif: function() {},
                            onPanelChange: Ce,
                            onSticker: function(t, n) {
                                t.isCreateButton || fe().then((function(a) {
                                    var o = (0, k.sendStickerToChat)(a, t, {
                                        stickerSendOrigin: n,
                                        quotedMsg: e.msg
                                    });
                                    pe(o, S.default.STATUS_REPLY_MESSAGE_TYPE.STICKER)
                                }))
                            },
                            requestDismiss: de,
                            forwardedRef: function(e) {
                                re.current = e
                            },
                            selectedPanelId: Q,
                            theme: b.PanelsTheme.StatusReplyComposeBox
                        })
                    }) : null,
                    be = V ? (0, L.jsx)(I.UIE, {
                        displayName: "EmojiPicker",
                        escapable: !0,
                        requestFocus: _e,
                        children: (0, L.jsx)("div", {
                            children: (0, L.jsx)(I.UIE, {
                                displayName: "EmojiPicker",
                                escapable: !0,
                                popable: !0,
                                requestDismiss: function() {
                                    W(void 0), se()
                                },
                                requestFocus: _e,
                                children: (0, L.jsx)(A.default, {
                                    contextMenu: V
                                })
                            })
                        })
                    }) : null,
                    ye = G && (xe || R && !V) ? (0, L.jsx)(I.UIE, {
                        displayName: "StatusV3Reply",
                        escapable: !0,
                        requestDismiss: e.dismissReply,
                        children: (0, L.jsx)("div", {
                            className: (0, s.default)(N.popupPanel, ne ? N.popupPanelRichStatusReplies : N.popupPanelNonRichStatusReplies),
                            children: (0, L.jsx)(y.default, {
                                msg: e.msg.safe(),
                                theme: "statusV3",
                                chat: G
                            }, e.msg.id.toString())
                        })
                    }) : null,
                    je = ne ? (0, L.jsx)("div", {
                        className: (0, s.default)(N.panelButtons),
                        children: (0, L.jsx)(b.ComposeBoxPanelsMenu, {
                            selectedPanelId: Q,
                            onChange: Ce,
                            theme: b.PanelsTheme.StatusReplyComposeBox,
                            buttonStyle: [xe ? N.iconButtonColourFocused : N.iconButtonColourOutOfFocus]
                        })
                    }) : (0, L.jsx)("button", {
                        className: (0, s.default)(N.iconButton, N.iconButtonColourOutOfFocus),
                        onClick: function(e) {
                            e && (e.preventDefault(), e.stopPropagation());
                            var t = (0, L.jsx)(h.EmojiPanel, {
                                ref: oe,
                                onEmoji: ge,
                                onFocusNext: se,
                                onFocusPrev: se
                            });
                            W({
                                menu: t,
                                dirY: p.DirY.TOP,
                                type: "emoji_picker",
                                anchor: e.target
                            })
                        },
                        children: (0, L.jsx)(P.default, {
                            name: "smiley",
                            iconXstyle: N.square26Svg
                        })
                    });
                return (0, L.jsxs)("div", {
                    className: (0, s.default)(N.container, xe && N.containerInFocus),
                    children: [(0, L.jsx)(O.default, {
                        transitionName: "status-v3-panel",
                        transitionAppear: !0,
                        children: Se
                    }), (0, L.jsx)(O.default, {
                        transitionName: "status-v3-quoted-msg",
                        transitionAppear: !0,
                        children: ye
                    }), (0, L.jsxs)("div", {
                        className: (0, s.default)(N.wrapper),
                        children: [je, (0, L.jsxs)("div", {
                            className: (0, s.default)(N.lineWrapper),
                            children: [(0, L.jsx)(E.default.EmojiSuggestions, {
                                theme: m.ThemeOptions.EMOJI_INPUT,
                                onSkinTonePicker: function(e) {
                                    ee = e
                                }
                            }), (0, L.jsx)(C.HotKeys, {
                                className: (0, s.default)(N.inputContainer, xe ? N.inputInFocus : N.inputOutOfFocus),
                                onClick: se,
                                children: (0, L.jsx)(E.default, {
                                    ref: ae,
                                    theme: "status-reply",
                                    spellCheck: !0,
                                    onFocus: function() {
                                        D(!0)
                                    },
                                    onBlur: function() {
                                        ee || document.activeElement === document.body && (ne || D(!1))
                                    },
                                    onEnter: he,
                                    placeholder: l.fbt._("Type a reply…", null, {
                                        hk: "3bHadc"
                                    }),
                                    multiline: !0
                                })
                            })]
                        }), (0, L.jsx)("button", {
                            className: (0, s.default)(N.iconButton, xe ? N.iconButtonColourFocused : N.iconButtonColourOutOfFocus),
                            onClick: he,
                            children: (0, L.jsx)(P.default, {
                                name: "send",
                                directional: !0,
                                iconXstyle: N.square26Svg
                            })
                        }), be]
                    })]
                })
            }
            var D = (0, u.forwardRef)(R);
            t.default = D
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
                    f = e.play,
                    _ = e.markRead,
                    C = e.statusV3,
                    x = e.pause,
                    S = (0, m.useModelValues)(e.mediaData, ["mediaStage", "renderableUrl", "preview", "fullWidth", "fullHeight", "aspectRatio", "fullPreviewData"]);
                return (0, r.useEffect)((function() {
                    return S.mediaStage !== u.MEDIA_DATA_STAGE.RESOLVED && t.downloadMedia({
                            downloadEvenIfExpensive: !0,
                            rmrReason: d.default.WEBC_RMR_REASON_CODE.STATUS_V3,
                            isUserInitiated: !0
                        }),
                        function() {
                            x()
                        }
                }), []), (0, r.useEffect)((function() {
                    f(), S.mediaStage === u.MEDIA_DATA_STAGE.RESOLVED && _(C, t)
                }), [_, S.mediaStage, t, f, C]), (0, v.jsx)(s.default, {
                    mediaData: S,
                    placeholderRenderer: function() {
                        var e, t = (0, o.default)(h.default.playerContent, h.default.v3Image, h.default.loading);
                        return (0, v.jsx)("div", {
                            className: t,
                            onMouseDown: n,
                            onMouseUp: a,
                            children: (0, v.jsx)(c.default, {
                                type: "contain",
                                size: {
                                    width: S.aspectRatio,
                                    height: 1
                                },
                                children: (0, v.jsx)(l.default, {
                                    src: null !== (e = g(S)) && void 0 !== e ? e : ""
                                })
                            })
                        })
                    },
                    downloadMedia: function() {
                        return t.downloadMedia({
                            downloadEvenIfExpensive: !0,
                            rmrReason: d.default.WEBC_RMR_REASON_CODE.STATUS_V3,
                            isUserInitiated: !0
                        })
                    },
                    renderProgressively: !0,
                    children: function(e) {
                        var r, u = (0, o.default)(h.default.playerContent, h.default.v3Image);
                        return (0, v.jsx)("div", {
                            className: u,
                            onMouseDown: n,
                            onMouseUp: a,
                            onDragEnd: a,
                            children: (0, v.jsx)(c.default, {
                                type: "contain",
                                size: {
                                    width: S.fullWidth,
                                    height: S.fullHeight
                                },
                                children: (0, v.jsxs)("div", {
                                    className: h.default.mediaViewer,
                                    children: [(0, v.jsx)(l.default, {
                                        src: e,
                                        disableContextMenu: !0
                                    }), t.interactiveAnnotations && t.interactiveAnnotations.length > 0 && (0, v.jsx)(i.default, {
                                        annotations: t.interactiveAnnotations,
                                        onTooltipDisplay: n,
                                        onTooltipDismiss: a
                                    }), (null === (r = t.actionLink) || void 0 === r ? void 0 : r.buttonTitle) && t.actionLink.url && (0, v.jsx)("div", {
                                        className: h.default.actionLink,
                                        children: (0, v.jsx)(p.default, {
                                            text: t.actionLink.buttonTitle,
                                            url: t.actionLink.url
                                        })
                                    }), null]
                                })
                            })
                        })
                    }
                })
            };
            var o = a(n(94184)),
                r = n(67294),
                i = a(n(3228)),
                l = a(n(22935)),
                u = n(41655),
                s = a(n(47251)),
                d = a(n(50507)),
                c = a(n(58497)),
                f = a(n(57393)),
                p = a(n(33348)),
                h = a(n(80568)),
                m = n(69283),
                v = n(85893);

            function g(e) {
                return e ? e.fullPreviewData ? e.fullPreviewData.url() : e.preview instanceof f.default ? e.preview.url() : null : null
            }
        },
        47413: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StatusV3Player = function(e) {
                var t, n = e.msg,
                    a = e.mediaData,
                    d = e.statusV3,
                    f = e.msgIdx,
                    E = e.sessionId,
                    P = e.rowIdx,
                    w = e.onNext,
                    G = e.markRead,
                    Q = e.closeStatusViewer,
                    ne = (0, K.default)(),
                    ae = (0, U.default)((function() {
                        return (0, O.setupStatusV3Controller)(a, n)
                    })),
                    oe = (0, c.useRef)(!0),
                    re = (0, U.default)((function() {
                        return new y.default.WebcStatusView({
                            webcStatusLoaded: !1,
                            webcStatusReplyCount: 0,
                            webcStatusViewT: 0
                        })
                    })),
                    ie = (0, U.default)((function() {
                        return new y.default.StatusReply({
                            statusReplyResult: y.default.STATUS_REPLY_RESULT.CANCELLED
                        })
                    })),
                    le = (0, c.useRef)(null),
                    ue = (0, c.useRef)(null),
                    se = (0, c.useRef)(null),
                    de = (0, c.useRef)(null),
                    ce = (0, c.useRef)(null),
                    fe = (0, c.useRef)(null),
                    pe = (0, c.useRef)(null),
                    he = (0, c.useState)(!1),
                    me = (0, r.default)(he, 2),
                    ve = me[0],
                    ge = me[1],
                    _e = (0, c.useState)(!1),
                    Ce = (0, r.default)(_e, 2),
                    xe = Ce[0],
                    Se = Ce[1],
                    be = (0, c.useState)(!1),
                    ye = (0, r.default)(be, 2),
                    je = ye[0],
                    ke = ye[1],
                    Te = (0, c.useState)(!1),
                    Ee = (0, r.default)(Te, 2),
                    Pe = Ee[0],
                    we = Ee[1],
                    Ie = (0, c.useState)(!1),
                    Ae = (0, r.default)(Ie, 2),
                    Me = Ae[0],
                    Oe = Ae[1],
                    Le = (0, c.useState)(!1),
                    Ne = (0, r.default)(Le, 2),
                    Re = Ne[0],
                    De = Ne[1],
                    Be = (0, c.useState)(null),
                    Fe = (0, r.default)(Be, 2),
                    Ve = Fe[0],
                    We = Fe[1],
                    Ue = function() {
                        var e = fe.current,
                            t = de.current;
                        if (e && t) {
                            var n = e.getBoundingClientRect(),
                                a = t.getBoundingClientRect();
                            !x.default.isRTL() && n.right > a.left - 5 || x.default.isRTL() && n.left < a.right + 5 ? ge(!0) : ge(!1)
                        }
                    },
                    He = (0, W.default)(Ue),
                    Ge = (0, z.default)((function(e) {
                        if (!a || a.mediaStage === b.MEDIA_DATA_STAGE.RESOLVED) {
                            var t = le.current;
                            null != t && (re.current.webcStatusViewT += Math.round(window.performance.now() - t), le.current = void 0), ae.current.pause(), ue.current = e
                        }
                    })),
                    qe = (0, z.default)((function() {
                        var e;
                        if (a) {
                            if (a.mediaStage !== b.MEDIA_DATA_STAGE.RESOLVED) return;
                            re.current.webcStatusLoadT || (re.current.markWebcStatusLoadT(), re.current.webcStatusLoaded = !0)
                        }(null === (e = se.current) || void 0 === e ? void 0 : e.isPaused()) || oe.current && (le.current = window.performance.now(), ae.current.resume())
                    })),
                    ze = function() {
                        var e, t = pe.current;
                        t && l.default.focus(t), null === (e = se.current) || void 0 === e || e.blur()
                    },
                    Ke = function(e) {
                        var t, n;
                        (e && (e.stopPropagation(), e.preventDefault()), d.contact.isMe) || ((null === (t = se.current) || void 0 === t ? void 0 : t.isFocused()) ? ze() : null === (n = se.current) || void 0 === n || n.restoreFocus())
                    },
                    Qe = function() {
                        h.Cmd.closeModal(), qe(), Se(!1)
                    },
                    Ye = (0, z.default)((function() {
                        Ge(J.MOUSEDOWN)
                    })),
                    $e = (0, z.default)((function() {
                        qe()
                    }));
                (0, c.useLayoutEffect)((function() {
                    var e;
                    if (null != E) {
                        var t;
                        d.contact.isMe ? (t = y.default.WEBC_STATUS_ROW_SECTION.MY, j.MsgInfoCollection.find(n.id).then((function(e) {
                            ne.aborted || We(e.read)
                        })).catch((0, i.filteredCatch)(Y.EphemeralDrop, (function() {})))) : t = d.contact.statusMute ? y.default.WEBC_STATUS_ROW_SECTION.MUTED : d.hasUnread ? y.default.WEBC_STATUS_ROW_SECTION.RECENT : y.default.WEBC_STATUS_ROW_SECTION.VIEWED;
                        var o, r = d.msgs.length - 1 - f < d.unreadCount;
                        a ? o = a.isGif ? y.default.WEBC_STATUS_MEDIA_TYPE.GIF : "video" === a.type ? y.default.WEBC_STATUS_MEDIA_TYPE.VIDEO : y.default.WEBC_STATUS_MEDIA_TYPE.IMAGE : (o = n.getLinks().length ? y.default.WEBC_STATUS_MEDIA_TYPE.URL : y.default.WEBC_STATUS_MEDIA_TYPE.TEXT, re.current.markWebcStatusLoadT(), re.current.webcStatusLoaded = !0), re.current.webcStatusSessionId = E, re.current.webcStatusRowSection = t, re.current.webcStatusRowIndex = P || 0, re.current.webcStatusMediaType = o, re.current.webcStatusUnread = r, ie.current.statusSessionId = E, (0, _.smbStatusLoggingEnabled)() && (re.current.webcIsPosterBiz = d.contact.isBusiness, ie.current.isPosterBiz = d.contact.isBusiness, re.current.webcIsPostersAddressBook = d.contact.isMyContact, ie.current.isPosterInAddressBook = d.contact.isMyContact)
                    }
                    null === (e = ae.current) || void 0 === e || e.addListeners((function(e, t) {
                        var n = ce.current;
                        null == n || n.handleStart(e, t), ke(!1), ue.current = null
                    }), (function() {
                        var e = ce.current;
                        null == e || e.handlePause(), ke(!0)
                    }), (function() {
                        var e = ce.current;
                        null == e || e.handleEnded().then((function() {
                            ne.aborted || w()
                        }))
                    }), (function(e, t) {
                        we(t), Oe(e)
                    })), a ? (qe(), (null == a ? void 0 : a.mediaStage) === b.MEDIA_DATA_STAGE.RESOLVED && G(d, n)) : (n.type, u.MSG_TYPE.CHAT, qe(), G(d, n));
                    var l = pe.current;
                    null == l || l.focus(), Ue()
                }), []), (0, q.default)((function() {
                    if (ae.current.removeListeners(), null != E) {
                        var e = Math.round(ae.current.duration || 0);
                        re.current.webcStatusPlaybackT = e;
                        var t = le.current;
                        null != t && (re.current.webcStatusViewT += Math.round(window.performance.now() - t), le.current = void 0), re.current.commit(), ie.current.commit()
                    }
                }));
                var Je, Xe, Ze = (0, z.default)(G);
                if ((0, H.useListener)(window, "focus", (function() {
                        oe.current = !0, xe || ue.current !== J.WINDOW_BLUR || qe()
                    })), (0, H.useListener)(window, "blur", (function() {
                        oe.current = !1, je || Ge(J.WINDOW_BLUR)
                    })), (0, H.useListener)(window, "resize", He), a) {
                    var et = te(a);
                    et && (Je = {
                        backgroundImage: `url(${et})`
                    })
                } else if (n.type === u.MSG_TYPE.CHAT) {
                    var tt = n.statusV3TextBg;
                    Je = {
                        backgroundColor: tt
                    }
                }
                if (a) switch (a.type) {
                    case S.default.TYPE.IMAGE:
                        Xe = (0, $.jsx)(M.StatusV3Img, {
                            msg: n,
                            statusV3: d,
                            mediaData: a,
                            markRead: Ze,
                            play: qe,
                            pause: Ge,
                            onMouseDown: Ye,
                            onMouseUp: $e
                        });
                        break;
                    case S.default.TYPE.VIDEO:
                        Xe = (0, $.jsx)(X, {
                            msg: n,
                            statusV3: d,
                            mediaData: a,
                            markRead: Ze,
                            play: qe,
                            pause: Ge,
                            playbackController: ae.current,
                            onMouseDown: Ye,
                            onMouseUp: $e
                        });
                        break;
                    default:
                        __LOG__(3)`Invalid status v3 image type: ${a.type}`
                } else Xe = n.type === u.MSG_TYPE.CHAT ? (0, $.jsx)(B.StatusV3Text, {
                    msg: n,
                    onMouseDown: Ye,
                    onMouseUp: $e
                }) : (0, $.jsx)(Z, {
                    onMouseDown: Ye,
                    onMouseUp: $e
                });
                var nt, at, ot = g.GK.supportsFeature(g.GK.F.STATUS_MEDIA_CONTROLS),
                    rt = (0, $.jsx)("div", {
                        ref: de,
                        children: (0, $.jsx)(R.default, {
                            ref: ce,
                            current: e.msgIdx,
                            total: e.totalMsgs,
                            hasMediaControls: ot,
                            onClick: e.onClickProgressBar
                        })
                    }),
                    it = n.isSentByMe || d.contact.isPSA,
                    lt = (0, s.default)(L.default.profile, (t = {}, (0, o.default)(t, L.default.nonClickProfile, it), (0, o.default)(t, L.default.profileNarrow, ve), (0, o.default)(t, L.default.profileWithMediaControls, ot), (0, o.default)(t, L.default.profileMac, !x.default.isRTL()), t)),
                    ut = (0, s.default)(L.default.profile, L.default.measuringProfile, (0, o.default)({}, L.default.profileMac, !x.default.isRTL())),
                    st = function(e) {
                        return e.stopPropagation()
                    },
                    dt = (0, $.jsx)(k.ContactName, {
                        className: L.default.msgInfoName,
                        contact: d.contact,
                        you: !0,
                        ellipsify: !0,
                        showBusinessCheckmark: d.contact.showBusinessCheckmarkAsPrimary
                    }),
                    ct = (0, $.jsxs)("div", {
                        className: lt,
                        onClick: it ? null : function() {
                            var e = d.contact.id;
                            (0, v.findChat)(e).then((function(e) {
                                return h.Cmd.openChatBottom(e)
                            })).then((function() {
                                Q(!0)
                            }))
                        },
                        children: [(0, $.jsx)("div", {
                            className: L.default.playerAvatar,
                            children: (0, $.jsx)(m.DetailImage, {
                                id: d.contact.id,
                                theme: "status_v3",
                                size: 40
                            })
                        }), (0, $.jsxs)("div", {
                            className: L.default.msgInfo,
                            children: [(0, $.jsx)("div", {
                                className: !ot && it ? null : L.default.msgInfoNameWrapper,
                                children: dt
                            }), (0, $.jsx)("div", {
                                className: L.default.timestamp,
                                children: p.Clock.relativeDateAndTimeStr(n.t)
                            })]
                        }), ot ? (0, $.jsx)("div", {
                            className: L.default.statusMediaControls,
                            onClick: st,
                            children: (0, $.jsx)(N.default, {
                                isPaused: je,
                                hasAudio: (null == a ? void 0 : a.type) === S.default.TYPE.VIDEO && Me,
                                isMuted: Pe,
                                onPlay: qe,
                                onPause: function() {
                                    Ge(J.PAUSE_BUTTON)
                                },
                                onMute: function() {
                                    ae.current.mute(), we(!0)
                                },
                                onUnmute: function() {
                                    ae.current.unmute(), we(!1)
                                }
                            })
                        }) : null]
                    }),
                    ft = (0, $.jsxs)("div", {
                        ref: fe,
                        className: ut,
                        children: [(0, $.jsx)("div", {
                            className: L.default.playerAvatar,
                            children: (0, $.jsx)(m.DetailImage, {
                                id: d.contact.id,
                                theme: "status_v3",
                                size: 40
                            })
                        }), (0, $.jsxs)("div", {
                            className: L.default.msgInfo,
                            children: [dt, (0, $.jsx)("div", {
                                className: L.default.timestamp,
                                children: p.Clock.relativeDateAndTimeStr(n.t)
                            })]
                        })]
                    });
                a && (nt = (0, $.jsx)(ee, {
                    mediaData: a
                }));
                var pt = e.statusV3.contact;
                pt.isMe || pt.isPSA || (at = (0, $.jsx)(C.HotKeys, {
                    handlers: {
                        left: st,
                        right: st
                    },
                    onClick: function(e) {
                        var t, n;
                        e && (e.stopPropagation(), e.preventDefault()), (null === (t = se.current) || void 0 === t ? void 0 : t.isFocused()) && (null === (n = se.current) || void 0 === n || n.restoreFocus())
                    },
                    children: (0, $.jsx)(A.default, {
                        msg: e.msg,
                        dismissReply: ze,
                        onSend: function() {
                            re.current.webcStatusReplyCount++
                        },
                        pause: Ge,
                        play: qe,
                        ref: function(e) {
                            se.current = e
                        },
                        statusReplyMetric: ie.current
                    })
                }));
                var ht, mt, vt = pt.isMe && Ve ? (0, $.jsx)("div", {
                        className: L.default.seen,
                        children: (0, $.jsx)(D.default, {
                            seenCount: Ve.length,
                            onClick: function() {
                                Ve && (h.Cmd.openModal((0, $.jsx)(F.default, {
                                    onClose: Qe,
                                    viewers: Ve
                                })), Ge(J.OPEN_SEE_VIEWERS_MODAL), Se(!0))
                            }
                        })
                    }) : null,
                    gt = (0, s.default)(L.default.playerBackground, (0, o.default)({}, L.default.media, a)),
                    _t = (0, s.default)(L.default.progressBackdrop, (0, o.default)({}, L.default.progressBarBackdropNarrow, ve));
                n.type !== u.MSG_TYPE.CHAT && (ht = (0, $.jsx)("div", {
                    className: _t
                }));
                n.type !== u.MSG_TYPE.CHAT && "string" == typeof n.caption && (mt = (0, $.jsx)("div", {
                    className: L.default.caption,
                    children: (0, $.jsx)(T.default, {
                        type: "contain",
                        size: {
                            width: a.fullWidth,
                            height: a.fullHeight
                        },
                        children: (0, $.jsx)(I.default, {
                            text: n.caption,
                            isExpandedCaptionText: Re,
                            onExpandCaptionText: function() {
                                De(!Re)
                            }
                        })
                    })
                }));
                return (0, $.jsx)(V.UIE, {
                    displayName: "StatusV3Player",
                    escapable: !0,
                    requestDismiss: function(t) {
                        t || e.closeStatusViewer()
                    },
                    requestFocus: ze,
                    children: (0, $.jsx)(C.HotKeys, {
                        handlers: {
                            tab: Ke,
                            "shift+tab": Ke
                        },
                        onClick: ze,
                        children: (0, $.jsxs)("div", {
                            className: L.default.playerWrapper,
                            tabIndex: -1,
                            ref: pe,
                            children: [ft, ct, ht, rt, (0, $.jsx)("div", {
                                className: gt,
                                style: Je
                            }), Xe, mt, nt, vt, at]
                        }, n.id.toString())
                    })
                })
            };
            var o = a(n(59713)),
                r = a(n(63038)),
                i = n(15586),
                l = a(n(11845)),
                u = n(40787),
                s = a(n(94184)),
                d = n(48360),
                c = n(67294),
                f = a(n(3228)),
                p = n(10399),
                h = n(65901),
                m = n(66834),
                v = n(68985),
                g = n(38032),
                _ = n(2629),
                C = n(58342),
                x = a(n(45159)),
                S = a(n(72397)),
                b = n(41655),
                y = a(n(50507)),
                j = n(29289),
                k = n(1191),
                T = a(n(58497)),
                E = a(n(57393)),
                P = n(85651),
                w = a(n(33348)),
                I = a(n(13227)),
                A = a(n(11326)),
                M = n(97965),
                O = n(84176),
                L = a(n(80568)),
                N = a(n(37905)),
                R = a(n(3495)),
                D = a(n(45829)),
                B = n(15097),
                F = a(n(50674)),
                V = n(16835),
                W = a(n(8995)),
                U = a(n(39394)),
                H = n(8413),
                G = n(69283),
                q = a(n(74740)),
                z = a(n(3227)),
                K = a(n(1379)),
                Q = a(n(38979)),
                Y = n(59175),
                $ = n(85893),
                J = n(54302).Mirrored(["PAUSE_BUTTON", "MOUSEDOWN", "WINDOW_BLUR", "OPEN_SEE_VIEWERS_MODAL"]);

            function X(e) {
                var t, n, a = e.msg,
                    o = e.onMouseDown,
                    r = e.onMouseUp,
                    i = e.playbackController,
                    l = e.play,
                    u = e.markRead,
                    d = e.statusV3,
                    p = e.pause,
                    h = (0, c.useRef)(null),
                    m = (0, G.useModelValues)(e.mediaData, ["preview", "mediaStage", "fullWidth", "fullHeight", "streamable", "fullPreviewData"]);
                (0, c.useEffect)((function() {
                    m.streamable || m.isStreamable() || a.downloadMedia({
                        downloadEvenIfExpensive: !0,
                        rmrReason: y.default.WEBC_RMR_REASON_CODE.STATUS_V3,
                        isUserInitiated: !0
                    })
                }), []), (0, q.default)((function() {
                    p()
                }));
                var v = (0, z.default)((function(e) {
                    h.current = e.current, i.setVideo(h.current)
                }));
                (0, c.useEffect)((function() {
                    l(), m.mediaStage === b.MEDIA_DATA_STAGE.RESOLVED && u(d, a)
                }), [u, m.mediaStage, a, l, d]);
                var g = m.mediaStage !== b.MEDIA_DATA_STAGE.RESOLVED,
                    _ = (0, s.default)(L.default.playerContent, L.default.v3Video, {
                        loading: g
                    });
                return (0, $.jsx)("div", {
                    className: _,
                    onMouseDown: o,
                    onMouseUp: r,
                    children: (0, $.jsx)(T.default, {
                        type: "contain",
                        size: {
                            width: m.fullWidth,
                            height: m.fullHeight
                        },
                        children: (0, $.jsxs)("div", {
                            className: L.default.mediaViewer,
                            children: [(0, $.jsx)(Q.default, {
                                msg: a,
                                mediaData: m,
                                autoPlay: !0,
                                refVideo: v,
                                poster: null !== (t = te(m)) && void 0 !== t ? t : "",
                                disableContextMenu: !0,
                                children: x.default.t(826)
                            }), a.interactiveAnnotations && a.interactiveAnnotations.length > 0 && (0, $.jsx)(f.default, {
                                annotations: a.interactiveAnnotations,
                                onTooltipDisplay: e.onMouseDown,
                                onTooltipDismiss: e.onMouseUp
                            }), (null === (n = a.actionLink) || void 0 === n ? void 0 : n.buttonTitle) && a.actionLink.url && (0, $.jsx)("div", {
                                className: L.default.actionLink,
                                children: (0, $.jsx)(w.default, {
                                    text: a.actionLink.buttonTitle,
                                    url: a.actionLink.url
                                })
                            }), null]
                        })
                    })
                })
            }

            function Z(e) {
                return (0, $.jsx)("div", {
                    className: L.default.playerContent,
                    onMouseDown: e.onMouseDown,
                    onMouseUp: e.onMouseUp,
                    children: (0, $.jsx)("div", {
                        className: L.default.unknown,
                        children: d.fbt._("You received a status, but your version of WhatsApp doesn't support it.", null, {
                            hk: "RNPf0"
                        })
                    })
                })
            }

            function ee(e) {
                return (0, G.useModelValues)(e.mediaData, ["mediaStage"]).mediaStage !== b.MEDIA_DATA_STAGE.RESOLVED ? (0, $.jsx)("div", {
                    className: L.default.mediaStateControls,
                    children: (0, $.jsx)("button", {
                        className: "icon-media-disabled",
                        children: (0, $.jsx)(P.Spinner, {
                            size: 50,
                            stroke: 4,
                            color: "white"
                        })
                    })
                }) : null
            }

            function te(e) {
                return e ? e.fullPreviewData ? e.fullPreviewData.url() : e.preview instanceof E.default ? e.preview.url() : null : null
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
                (0, i.useEffect)((function() {
                    u.default.load(n.font).catch((function() {}))
                }), []);
                var a, p, h = (0, c.numCodepoints)(e.msg.body),
                    m = (0, o.default)({}, d.default[`font_${e.msg.font}`], !0);
                h <= 60 ? (a = (0, r.default)(d.default.text, d.default.textLarge, m), p = s.Configuration.StatusV3Text({
                    links: e.msg.getLinks()
                })) : h <= 240 ? (a = (0, r.default)(d.default.text, d.default.textMedium, m), p = s.Configuration.StatusV3Text({
                    links: e.msg.getLinks()
                })) : a = (0, r.default)(d.default.text, d.default.textSmall, m);
                return (0, f.jsx)("div", {
                    className: (0, r.default)(d.default.playerContent, (t = {}, (0, o.default)(t, d.default.statusPanelPlayerContent, "status-panel" === e.theme), (0, o.default)(t, d.default.statusThumbnailPlayerContent, "status-thumbnail" === e.theme), (0, o.default)(t, d.default.textThumbnailPlayerContent, "text-thumb" === e.theme), t)),
                    onMouseDown: e.onMouseDown,
                    onMouseUp: e.onMouseUp,
                    children: (0, f.jsx)("div", {
                        className: a,
                        children: (0, f.jsx)(l.EmojiText, {
                            text: e.msg.body,
                            formatters: p
                        })
                    })
                })
            };
            var o = a(n(59713)),
                r = a(n(94184)),
                i = n(67294),
                l = n(73008),
                u = a(n(99617)),
                s = n(72896),
                d = a(n(80568)),
                c = n(52546),
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
                    A = (0, T.default)(),
                    M = (0, f.useState)(null),
                    O = (0, r.default)(M, 2),
                    L = O[0],
                    N = O[1],
                    R = (0, f.useState)(null),
                    D = (0, r.default)(R, 2),
                    B = D[0],
                    F = D[1],
                    V = (0, f.useState)(!0),
                    W = (0, r.default)(V, 2),
                    U = W[0],
                    H = W[1],
                    G = (0, k.default)((function() {
                        return new S.Statusv3Snapshot(t, n)
                    }));
                (0, f.useEffect)((function() {
                    var e = G.current;
                    L && e && e.hasNext(L) && e.getNext(L).then((function(t) {
                        if (!A.aborted) {
                            var n = e.statuses[t.statusIdx].msgs[t.msgIdx];
                            if (!n) throw new S.StatusV3MsgNotFound;
                            if (n.type === s.MSG_TYPE.CHAT) h.default.load(n.font).catch((function() {}));
                            else {
                                var a = n.mediaData;
                                a && a.mediaStage !== g.MEDIA_DATA_STAGE.RESOLVED && n.downloadMedia({
                                    downloadEvenIfExpensive: !0,
                                    rmrReason: _.default.WEBC_RMR_REASON_CODE.STATUS_V3,
                                    isUserInitiated: !1
                                })
                            }
                        }
                    })).catch((0, i.filteredCatch)(S.StatusV3MsgNotFound, (function() {
                        __LOG__(3)`Error finding next status while preloading next status`
                    }))).catch((0, i.filteredCatch)(S.InvalidStatusV3Iterator, (function() {
                        __LOG__(3)`Invalid iterator while preloading next status`
                    }))).catch((0, i.filteredCatch)(P.EphemeralDrop, (function() {}))).catch((0, i.filteredCatch)(S.StatusV3LoadingError, (function() {
                        __LOG__(3)`No more status v3 while preloading next status`
                    })))
                }), [L, G, A.aborted]);
                var q, z, K, Q, Y, $, J, X, Z, ee = function(t) {
                        F(!0), (0, l.delayMs)(200).then((function() {
                            A.aborted || e.closeStatusViewer(t)
                        }))
                    },
                    te = function() {
                        var e = G.current;
                        if (L && e && e.hasPrev(L)) {
                            var t = L.statusIdx;
                            e.getPrev(L).then((function(e) {
                                A.aborted || (e.statusIdx === t ? N(e) : (F(!0), (0, l.delayMs)(200).then((function() {
                                    A.aborted || (N(e), F(!1))
                                }))))
                            })).catch((0, i.filteredCatch)(S.InvalidStatusV3Iterator, (function() {
                                __LOG__(3)`Invalid iterator while getting previous status msg`
                            }))).catch((0, i.filteredCatch)(P.EphemeralDrop, (function() {}))).catch((0, i.filteredCatch)(S.StatusV3LoadingError, (function() {
                                __LOG__(3)`No more status v3 while preloading next status`
                            })))
                        }
                    },
                    ne = function() {
                        var e = G.current;
                        if (L && e && e.hasNext(L)) {
                            var t = L.statusIdx,
                                n = e.getNext(L);
                            H(!0), n.then((function(e) {
                                A.aborted || (e.statusIdx === t ? N(e) : (F(!0), H(!1), (0, l.delayMs)(200).then((function() {
                                    A.aborted || (N(e), F(!1))
                                }))))
                            })).catch((0, i.filteredCatch)(S.InvalidStatusV3Iterator, (function() {
                                __LOG__(3)`Invalid iterator while getting next status msg`, ee()
                            }))).catch((0, i.filteredCatch)(P.EphemeralDrop, (function() {}))).catch((0, i.filteredCatch)(S.StatusV3LoadingError, (function() {
                                __LOG__(3)`No more status v3 while preloading next status`
                            }))).finally((function() {
                                H(!1)
                            }))
                        } else ee()
                    },
                    ae = function(e, t) {
                        var n = G.current;
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
                            var l = n.statuses.find((function(t) {
                                return t.statusV3 === e
                            }));
                            l && l.readMsgKeys.push(t.id.toString())
                        }
                    };
                (0, f.useEffect)((function() {
                    var o = t;
                    if (n) {
                        var r = n;
                        if (-1 !== o.msgs.getModelsArray().findIndex((function(e) {
                                return e.id.toString() === r.toString()
                            }))) G.current.getFirstUnread(o, !0, r).then((function(e) {
                            A.aborted || (N(e), H(!1))
                        })).catch((0, i.filteredCatch)(P.EphemeralDrop, (function() {}))).catch((0, i.filteredCatch)(S.InvalidStatusV3Iterator, (function() {
                            __LOG__(3)`Invalid iterator while loading first unread msg`, p.Cmd.openToast((0, w.jsx)(j.Toast, {
                                msg: c.fbt._("Status update not found", null, {
                                    hk: "1KSfSo"
                                }),
                                id: (0, j.genId)()
                            })), e.closeStatusViewer()
                        })));
                        else H(!0), o.loadMore(o.totalCount).then((function() {
                            (H(!1), -1 !== o.msgs.getModelsArray().findIndex((function(e) {
                                return e.id.toString() === r.toString()
                            }))) ? G.current.getFirstUnread(o, !0, r).then((function(e) {
                                A.aborted || (N(e), H(!1))
                            })).catch((0, i.filteredCatch)(P.EphemeralDrop, (function() {}))).catch((0, i.filteredCatch)(S.InvalidStatusV3Iterator, (function() {
                                __LOG__(3)`Invalid iterator while loading first unread msg`, p.Cmd.openToast((0, w.jsx)(j.Toast, {
                                    msg: c.fbt._("Status update not found", null, {
                                        hk: "1KSfSo"
                                    }),
                                    id: (0, j.genId)()
                                })), e.closeStatusViewer()
                            }))): (null == I || I(), p.Cmd.openToast((0, w.jsx)(j.Toast, {
                                msg: c.fbt._("Status update not found", null, {
                                    hk: "1KSfSo"
                                }),
                                id: (0, j.genId)()
                            })), e.closeStatusViewer())
                        })).catch((function() {
                            p.Cmd.openToast((0, w.jsx)(j.Toast, {
                                msg: c.fbt._("Status update not found", null, {
                                    hk: "1KSfSo"
                                }),
                                id: (0, j.genId)()
                            })), ee()
                        })).finally((function() {
                            H(!1)
                        }))
                    } else {
                        var l = a;
                        G.current.getFirstUnread(o, !0, null == l ? void 0 : l.id).then((function(e) {
                            A.aborted || (N(e), H(!1))
                        })).catch((0, i.filteredCatch)(P.EphemeralDrop, (function() {}))).catch((0, i.filteredCatch)(S.InvalidStatusV3Iterator, (function() {
                            __LOG__(3)`Invalid iterator while loading first unread msg`, p.Cmd.openToast((0, w.jsx)(j.Toast, {
                                msg: c.fbt._("Status update not found", null, {
                                    hk: "1KSfSo"
                                }),
                                id: (0, j.genId)()
                            })), e.closeStatusViewer()
                        })))
                    }
                }), []), L && (Y = G.current, $ = Y.statuses[L.statusIdx], J = $.statusV3, X = $.msgs[L.msgIdx], Y.hasPrev(L) && (K = (0, w.jsx)("div", {
                    className: b.default.chevronLeft,
                    children: (0, w.jsx)(y.default, {
                        name: "chevron-left"
                    })
                }), Q = (0, w.jsx)("div", {
                    className: b.default.chevronLeftBg,
                    onClick: te
                })), Y.hasNext(L) && (q = (0, w.jsx)("div", {
                    className: b.default.chevronRight,
                    children: (0, w.jsx)(y.default, {
                        name: "chevron-right"
                    })
                }), z = (0, w.jsx)("div", {
                    className: b.default.chevronRightBg,
                    onClick: function() {
                        ne(), ae(J, X)
                    }
                })));
                !B && !U && X && L && $ && J && (Z = (0, w.jsx)("div", {
                    className: b.default.playerContainer,
                    children: (0, w.jsx)(x.StatusV3Player, {
                        statusV3: J,
                        msg: X,
                        mediaData: X.mediaData,
                        msgIdx: L.msgIdx,
                        totalMsgs: $.totalCount,
                        markRead: ae,
                        closeStatusViewer: ee,
                        onClickProgressBar: function(e) {
                            if ((!L || e !== L.msgIdx) && L) {
                                var t = G.current.statusAt(L, e);
                                H(!0), t.then((function(e) {
                                    A.aborted || N(e)
                                })).catch((0, i.filteredCatch)(S.InvalidStatusV3Iterator, (function() {
                                    __LOG__(3)`Invalid iterator while getting next status msg`
                                }))).catch((0, i.filteredCatch)(P.EphemeralDrop, (function() {}))).catch((0, i.filteredCatch)(S.StatusV3LoadingError, (function() {
                                    __LOG__(3)`No more status v3 while preloading next status`
                                }))).finally((function() {
                                    H(!1)
                                }))
                            }
                        },
                        onNext: ne,
                        onPrev: te,
                        sessionId: e.sessionId,
                        rowIdx: e.rowIdx
                    }, X.id)
                }, X.id));
                var oe, re = (0, d.default)(b.default.v3X, (0, o.default)({}, b.default.v3X_mac, v.default.isRTL())),
                    ie = (0, w.jsx)("button", {
                        className: re,
                        onClick: function() {
                            return e.closeStatusViewer(!0)
                        },
                        children: (0, w.jsx)(y.default, {
                            name: "x-viewer"
                        })
                    }),
                    le = (0, d.default)(b.default.backIcon, (0, o.default)({}, b.default.backIcon_mac, !v.default.isRTL())),
                    ue = (0, w.jsx)("button", {
                        className: le,
                        onClick: function() {
                            return e.closeStatusViewer()
                        },
                        children: (0, w.jsx)(y.default, {
                            name: "back",
                            directional: !0
                        })
                    });
                U && (oe = (0, w.jsx)("div", {
                    className: b.default.mediaStateControls,
                    children: (0, w.jsx)("button", {
                        children: (0, w.jsx)(C.Spinner, {
                            size: 50,
                            stroke: 4,
                            color: "white"
                        })
                    })
                }));
                return (0, w.jsx)(m.HotKeys, {
                    handlers: {
                        left: te,
                        right: ne
                    },
                    children: (0, w.jsxs)("div", {
                        className: b.default.viewer,
                        "data-animate-status-v3-viewer": !0,
                        children: [ie, ue, Q, K, z, q, oe, (0, w.jsx)(E.default, {
                            transitionName: "status-v3-player",
                            transitionAppear: !0,
                            children: Z
                        })]
                    })
                })
            };
            var o = a(n(59713)),
                r = a(n(63038)),
                i = n(15586),
                l = n(45121),
                u = n(79746),
                s = n(40787),
                d = a(n(94184)),
                c = n(48360),
                f = n(67294),
                p = n(65901),
                h = a(n(99617)),
                m = n(58342),
                v = a(n(45159)),
                g = n(41655),
                _ = a(n(50507)),
                C = n(85651),
                x = n(47413),
                S = n(33633),
                b = a(n(7497)),
                y = a(n(7665)),
                j = n(92428),
                k = a(n(39394)),
                T = a(n(1379)),
                E = a(n(60806)),
                P = n(59175),
                w = n(85893)
        },
        50674: (e, t, n) => {
            "use strict";
            var a = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.viewers,
                    n = e.onClose;
                (0, r.useEffect)((function() {
                    return n
                }));
                var a = new c.default,
                    o = function(e) {
                        var t = e.map((function(e) {
                            return {
                                participant: e,
                                itemKey: e.id.toString(),
                                height: d.DEFAULT_ITEM_HEIGHT
                            }
                        }));
                        return t.sort((function(e, t) {
                            return t.participant.t - e.participant.t
                        })), t
                    }(t),
                    s = o.length ? (0, g.jsx)(d.FlatList, {
                        flatListController: a,
                        direction: "vertical",
                        forceConsistentRenderCount: !0,
                        data: o,
                        renderItem: _
                    }) : (0, g.jsx)(C, {}),
                    f = m.default.t(832, {
                        count: o.length
                    }),
                    h = {
                        width: 400,
                        height: (x = o.length, S = x > 0 ? 72 * x : p.GK.supportsFeature(p.GK.F.MD_BACKEND) ? 100 : 150, Math.min(500, S + 59))
                    };
                var x, S;
                return (0, g.jsx)(v.Modal, {
                    type: v.ModalTheme.CustomSize,
                    dimensions: h,
                    children: (0, g.jsxs)(i.default, {
                        theme: "settings",
                        children: [(0, g.jsx)(u.DrawerHeader, {
                            onCancel: n,
                            title: f,
                            type: u.DRAWER_HEADER_TYPE.POPUP
                        }), (0, g.jsx)(l.default, {
                            flatListControllers: [a],
                            children: s
                        })]
                    })
                })
            };
            var o = n(48360),
                r = n(67294),
                i = a(n(53187)),
                l = a(n(18345)),
                u = n(19288),
                s = n(75993),
                d = n(73568),
                c = a(n(92546)),
                f = n(1577),
                p = n(38032),
                h = a(n(50329)),
                m = a(n(45159)),
                v = n(73454),
                g = n(85893);

            function _(e) {
                var t = e.participant;
                return (0, g.jsx)(h.default, {
                    msgInfoParticipant: t,
                    contact: t.contact
                }, t.id.toString())
            }

            function C() {
                return p.GK.supportsFeature(p.GK.F.MD_BACKEND) ? (0, g.jsx)(s.Empty, {
                    children: "none" === (0, f.getUserPrivacySettings)().readReceipts ? o.fbt._("Can't see views because you disabled Read Receipts in Settings > Account > Privacy", null, {
                        hk: "45oJGn"
                    }) : o.fbt._("No views yet", null, {
                        hk: "456C0K"
                    })
                }) : (0, g.jsx)(s.Empty, {
                    title: o.fbt._("No views yet", null, {
                        hk: "456C0K"
                    }),
                    text: o.fbt._("Views are not visible if you have disabled Read Receipts in Settings > Account > Privacy on your phone", null, {
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
                r = n(67294),
                i = a(n(94253)),
                l = a(n(53187)),
                u = a(n(18345)),
                s = n(19288),
                d = n(73008),
                c = n(58342),
                f = a(n(74705)),
                p = n(73454),
                h = a(n(64894)),
                m = n(80385),
                v = a(n(7665)),
                g = n(68544),
                _ = a(n(43693)),
                C = n(16835),
                x = n(36745),
                S = n(85893),
                b = function(e) {
                    var t = e.defaultText,
                        n = e.title,
                        a = e.onSend,
                        b = e.onBack,
                        y = (0, r.useState)(t),
                        j = (0, o.default)(y, 2),
                        k = j[0],
                        T = j[1],
                        E = (0, x.findFirstWebLink)(k),
                        P = (0, x.useLinkPreview)(E),
                        w = P.linkPreview,
                        I = P.clearLinkPreview,
                        A = n ? (0, S.jsx)(d.EmojiText, {
                            text: n,
                            direction: "auto",
                            titlify: !0,
                            ellipsify: !0
                        }) : null,
                        M = w || {},
                        O = M.title,
                        L = M.canonicalUrl,
                        N = M.description,
                        R = M.thumbnail,
                        D = w ? (0, S.jsx)(C.UIE, {
                            displayName: "ComposeBoxLinkPreview",
                            escapable: !0,
                            requestDismiss: I,
                            children: (0, S.jsx)(h.default, {
                                onOmit: I,
                                children: (0, S.jsx)(f.default, {
                                    title: O,
                                    compose: !0,
                                    canonicalUrl: L,
                                    description: N,
                                    thumbnailJpeg: R
                                })
                            })
                        }) : null;
                    return (0, S.jsx)(p.Modal, {
                        type: p.ModalTheme.Box,
                        children: (0, S.jsxs)(l.default, {
                            children: [(0, S.jsx)(s.DrawerHeader, {
                                type: s.DRAWER_HEADER_TYPE.POPUP,
                                onBack: b,
                                children: A
                            }), (0, S.jsx)(u.default, {
                                children: (0, S.jsxs)(c.HotKeys, {
                                    className: _.default.container,
                                    children: [(0, S.jsx)("div", {
                                        className: _.default.inputContainer,
                                        children: (0, S.jsx)(g.TextInput, {
                                            a8n: "text-message-modal-text-unput",
                                            value: k,
                                            maxLength: i.default.MAX_TXT_MSG_SIZE,
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
                                className: _.default.btnContainer,
                                children: (0, S.jsx)("div", {
                                    className: _.default.btnPosition,
                                    children: (0, S.jsx)(m.Round, {
                                        large: !0,
                                        onClick: function() {
                                            k.length && a(k, w)
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
                l = a(n(50234)),
                u = n(69283),
                s = n(85893),
                d = n(54302).Mirrored(["STATUS_V3_PANEL", "BUSINESS_CONTACT_INFO"]);
            t.RingTheme = d;

            function c(e) {
                var t, n = e.stroke,
                    a = e.size,
                    c = (0, u.useModelValues)(e.statusV3, ["unreadCount", "totalCount", "contact"]),
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
                    v = 10,
                    g = 50 * Math.PI * 2;
                g - 10 * m < 1 && (v = g / m / 1.2);
                var _, C, x = (g - v * m) / m,
                    S = g / 4 - v / 2,
                    b = c.contact.isMe ? 0 : c.unreadCount,
                    y = m - b;
                if (b) {
                    var j, k = S + m * (v + x);
                    1 !== m && (j = p(b, x, g, v)), _ = f({
                        strokeDashoffset: k,
                        strokeDasharray: j,
                        className: l.default.unread
                    })
                }
                if (y) {
                    var T, E = S + y * (v + x);
                    1 !== m && (T = p(y, x, g, v)), C = f({
                        strokeDashoffset: E,
                        strokeDasharray: T,
                        className: l.default.read
                    })
                }
                return (0, s.jsxs)("svg", {
                    className: (0, i.default)((t = {}, (0, o.default)(t, l.default.statusV3PanelRing, e.theme === d.STATUS_V3_PANEL), (0, o.default)(t, l.default.businessContactInfoRing, e.theme === d.BUSINESS_CONTACT_INFO), t)),
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
                                n._timer = setTimeout(n._onTimeup, n._timeout), n._start = (new Date).getTime();
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
                        }, this._onTimeup = function() {
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
                            t._onStart = void 0, t._onPause = void 0, t._onEnded = void 0, t._onLoaded = void 0, t._videoController.removeListeners(), t._countdownController.removeListeners()
                        }, this.setVideo = function(e, n) {
                            t._video !== e && (t._video = e, null != n && (t._duration = n), t._videoController.setVideo(e))
                        }, this._onVideoStartHandler = function() {
                            var e = t._video;
                            if (null != e) {
                                var n = t._onStart,
                                    a = e.duration || t._duration,
                                    o = Math.max(3 * a * 1e3, f);
                                n && n(o - 1e3 * a * t._playCounter - 1e3 * e.currentTime, o)
                            }
                        }, this._onVideoPauseHandler = function() {
                            var e = t._onPause;
                            e && e()
                        }, this._onVideoEndedHandler = function() {
                            var e = t._video;
                            if (null != e) {
                                t._playCounter++;
                                var n = t._onEnded;
                                3 === t._playCounter && (t._videoEnded = !0, t._timerEnded && n && n()), e.currentTime = 0, t._videoEnded && t._timerEnded || setTimeout((function() {
                                    t._videoController.play()
                                }), 0)
                            }
                        }, this._onVideoLoadedHandler = function() {
                            var e;
                            null === (e = t._onLoaded) || void 0 === e || e.call(t, !1, !0)
                        }, this._onTimerEndedHandler = function() {
                            var e = t._onEnded;
                            t._timerEnded = !0, e && t._videoEnded && e()
                        }, this.play = function() {
                            t._videoController.play(), t._countdownController.play()
                        }, this.stop = function() {
                            t._videoController.stop(), t._countdownController.stop()
                        }, this.resume = function() {
                            t._videoController.resume(), t._countdownController.resume()
                        }, this.pause = function() {
                            t._videoController.pause(), t._countdownController.pause()
                        }, this.mute = d, this.unmute = d, this._playCounter = 0, this._timerEnded = !1, this._videoEnded = !1, this._videoController = new s.default, this._countdownController = new c(f), this._videoController.addListeners(this._onVideoStartHandler, this._onVideoPauseHandler, this._onVideoEndedHandler, this._onVideoLoadedHandler), this._countdownController.addListeners(void 0, void 0, this._onTimerEndedHandler)
                    }
                    return (0, r.default)(e, [{
                        key: "addListeners",
                        value: function(e, t, n, a) {
                            this._onStart = e, this._onPause = t, this._onEnded = n, this._onLoaded = a
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
                i = o(n(94184)),
                l = n(67294),
                u = n(43890),
                s = o(n(57136)),
                d = o(n(66265)),
                c = n(85893);

            function f(e, t) {
                var n = e.onClick,
                    o = e.current,
                    f = e.total,
                    p = e.hasMediaControls,
                    h = (0, l.useRef)(null),
                    m = (0, l.useRef)(null),
                    v = [];
                (0, l.useEffect)((function() {
                    __LOG__(2)`Current index: ${o}, total count: ${f}`, o >= 0 && o < f || (__LOG__(4, void 0, new Error, !0)`Assertion failed!`, SEND_LOGS("bad current status v3 index"))
                }), []);
                var g = function(e, t) {
                        if (h.current) {
                            var n = 1e3 * u.ServerProps.statusVideoMaxDuration,
                                a = Math.min(e, n),
                                o = Math.min(t, n);
                            (0, d.default)(h.current, "stop"), m.current = (0, d.default)(h.current, {
                                translateX: ["0%", `-${a/o*100}%`]
                            }, {
                                duration: a,
                                easing: "linear"
                            })
                        }
                    },
                    _ = function() {
                        h.current && (0, d.default)(h.current, "stop")
                    },
                    C = function() {
                        var e = m.current;
                        return e || a.resolve()
                    };
                (0, l.useImperativeHandle)(t, (function() {
                    return {
                        handleStart: g,
                        handlePause: _,
                        handleEnded: C
                    }
                }));
                for (var x = 100 / e.total + "%", S = function(t) {
                        var a, o = (0, i.default)(s.default.foreground, (a = {}, (0, r.default)(a, s.default.filled, t < e.current), (0, r.default)(a, s.default.empty, t > e.current), (0, r.default)(a, s.default.active, t === e.current), a)),
                            l = (0, c.jsxs)("div", {
                                className: s.default.wrapper,
                                style: {
                                    width: x
                                },
                                onClick: function() {
                                    return e = t, void(n && n(e));
                                    var e
                                },
                                children: [(0, c.jsx)("div", {
                                    className: s.default.bg
                                }), (0, c.jsx)("div", {
                                    className: s.default.mask,
                                    children: (0, c.jsx)("div", {
                                        className: o,
                                        ref: t === e.current ? h : function() {}
                                    })
                                })]
                            }, t);
                        v.push(l)
                    }, b = 0; b < e.total; ++b) S(b);
                return (0, c.jsx)("div", {
                    className: p ? s.default.containerWithMediaControls : s.default.container,
                    children: v
                })
            }
            var p = (0, l.forwardRef)(f);
            t.default = p
        },
        45829: (e, t, n) => {
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
                o = n(20862),
                r = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Statusv3Snapshot = t.StatusV3MsgNotFound = t.StatusV3LoadingError = t.InvalidStatusV3Iterator = void 0;
            var i = r(n(87757)),
                l = r(n(48926)),
                u = r(n(34575)),
                s = r(n(2205)),
                d = r(n(99842)),
                c = r(n(57043)),
                f = r(n(44908)),
                p = r(n(35161)),
                h = n(47693),
                m = n(45121),
                v = n(33219),
                g = n(46177),
                _ = o(n(45951)),
                C = function(e) {
                    (0, s.default)(n, e);
                    var t = (0, d.default)(n);

                    function n() {
                        return (0, u.default)(this, n), t.apply(this, arguments)
                    }
                    return n
                }((0, h.customError)("InvalidStatusV3Iterator"));
            t.InvalidStatusV3Iterator = C;
            var x = function(e) {
                (0, s.default)(n, e);
                var t = (0, d.default)(n);

                function n() {
                    return (0, u.default)(this, n), t.apply(this, arguments)
                }
                return n
            }((0, h.customError)("StatusV3LoadingError"));
            t.StatusV3LoadingError = x;
            var S = function(e) {
                (0, s.default)(n, e);
                var t = (0, d.default)(n);

                function n() {
                    return (0, u.default)(this, n), t.apply(this, arguments)
                }
                return n
            }((0, h.customError)("StatusV3MsgNotFound"));
            t.StatusV3MsgNotFound = S;
            t.Statusv3Snapshot = function e(t, n) {
                var o = this;
                if ((0, u.default)(this, e), this._printInfo = function() {
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
                        var e = (0, l.default)(i.default.mark((function e(t) {
                            return i.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, v.promiseLoop)(function() {
                                            var e = (0, l.default)(i.default.mark((function e(n, a, r) {
                                                var l, u, s, d, h, v, g, C, x;
                                                return i.default.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return l = (0, m.delayMs)(_.expBackoff(r, 12e4, 1e3, .1)), e.prev = 1, e.next = 4, t.loadMore();
                                                        case 4:
                                                            if (-1 === (u = o.statuses.findIndex((function(e) {
                                                                    return e.statusV3 === t
                                                                })))) {
                                                                e.next = 18;
                                                                break
                                                            }
                                                            s = o.statuses[u], d = s.totalCount, h = s.unreadCount, v = t.msgs.getModelsArray().slice(0, d), g = d - h, C = v.slice(0, g), x = (0, p.default)(C, (function(e) {
                                                                return e.id.toString()
                                                            })), s.msgs = v, s.readMsgKeys = (0, f.default)((0, c.default)(s.readMsgKeys, x)), n(!0), e.next = 23;
                                                            break;
                                                        case 18:
                                                            if (!(r >= 4)) {
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
                                                            if (e.prev = 25, e.t0 = e.catch(1), !(r >= 4)) {
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
                    var r = t.msgs.getModelsArray().find((function(e) {
                        return n && e.id.toString() === n.toString()
                    }));
                    if (!r) throw new S;
                    this.statuses = [{
                        statusV3: t,
                        totalCount: 1,
                        unreadCount: 0,
                        msgs: [r],
                        readMsgKeys: [r.id.toString()]
                    }]
                } else if (t.unreadCount > 0 && !t.contact.isMe && !t.contact.statusMute) {
                    var s = g.StatusV3Collection.getUnexpired(!0),
                        d = [];
                    s.forEach((function(e) {
                        if (!e.contact.statusMute) {
                            var t = e.msgs.getModelsArray(),
                                n = e.totalCount - e.unreadCount,
                                a = t.slice(0, n),
                                o = (0, p.default)(a, (function(e) {
                                    return e.id.toString()
                                }));
                            d.push({
                                statusV3: e,
                                totalCount: e.totalCount,
                                unreadCount: e.unreadCount,
                                msgs: t,
                                readMsgKeys: o
                            })
                        }
                    })), this.statuses = d
                } else {
                    var h = t.msgs.getModelsArray(),
                        b = t.totalCount - t.unreadCount,
                        y = h.slice(0, b),
                        j = (0, p.default)(y, (function(e) {
                            return e.id.toString()
                        })),
                        k = [{
                            statusV3: t,
                            totalCount: t.totalCount,
                            unreadCount: t.unreadCount,
                            msgs: h,
                            readMsgKeys: j
                        }];
                    this.statuses = k
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
                i = n(43890);

            function l(e) {
                return Math.min(e, i.ServerProps.statusVideoMaxDuration)
            }
            var u = function() {
                function e() {
                    var t = this;
                    (0, o.default)(this, e), this.addListeners = function(e, n, a, o) {
                        t._onStart = e, t._onPause = n, t._onEnded = a, t._onLoaded = o
                    }, this.setVideo = function(e) {
                        t._video !== e && (t._unsetVideo(), t._video = e, null != e && (e.addEventListener("playing", t._onPlayingHandler), e.addEventListener("pause", t._onPauseHandler), e.addEventListener("ended", t._onEndedHandler), e.addEventListener("timeupdate", t._onTimeUpdate), e.addEventListener("loadeddata", t._onLoadedData)))
                    }, this._unsetVideo = function() {
                        var e = t._video;
                        e && (t.stop(), e.removeEventListener("playing", t._onPlayingHandler), e.removeEventListener("pause", t._onPauseHandler), e.removeEventListener("ended", t._onEndedHandler), e.removeEventListener("timeupdate", t._onTimeUpdate), e.removeEventListener("loadeddata", t._onLoadedData))
                    }, this.play = function() {
                        t._video && t._video.play()
                    }, this.pause = function() {
                        t._video && !t._video.paused && t._video.pause()
                    }, this.resume = function() {
                        t._video && t._video.play()
                    }, this.stop = function() {
                        t._video && !t._video.paused && t._video.pause()
                    }, this._changeMuted = function(e) {
                        t._video && (t._video.muted = e)
                    }, this.mute = function() {
                        t._changeMuted(!0)
                    }, this.unmute = function() {
                        t._changeMuted(!1)
                    }, this._onPlayingHandler = function() {
                        var e = t._video;
                        if (null != e) {
                            var n = t._onStart;
                            if (n) {
                                var a = l(e.duration);
                                n(1e3 * (a - e.currentTime), 1e3 * a)
                            }
                        }
                    }, this._onPauseHandler = function() {
                        var e = t._onPause;
                        e && e()
                    }, this._onEndedHandler = function() {
                        var e = t._onEnded;
                        e && e()
                    }, this._onTimeUpdate = function() {
                        var e, n = null === (e = t._video) || void 0 === e ? void 0 : e.currentTime;
                        if (null != n && n >= i.ServerProps.statusVideoMaxDuration) {
                            t.stop(), t._onEndedHandler();
                            var a = t._video;
                            a && (a.removeEventListener("timeupdate", t._onTimeUpdate), a.removeEventListener("ended", t._onEndedHandler))
                        }
                    }, this._onLoadedData = function() {
                        var e = t._video;
                        if (e) {
                            var n, a = e.audioTracks && e.audioTracks.length > 0 || !0 === e.mozHasAudio || e.webkitAudioDecodedByteCount > 0,
                                o = e.muted;
                            null === (n = t._onLoaded) || void 0 === n || n.call(t, a, o)
                        }
                    }, this.removeListeners = function() {
                        t.stop(), t._onStart = void 0, t._onPause = void 0, t._onEnded = void 0
                    }
                }
                return (0, r.default)(e, [{
                    key: "duration",
                    get: function() {
                        return null == this._video ? 0 : 1e3 * l(this._video.duration)
                    }
                }]), e
            }();
            t.default = u
        },
        12347: (e, t) => {
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
        16175: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                e.pause(), e.src = "", e.remove()
            }
        },
        99617: (e, t, n) => {
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
                s = n(10901),
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
        91240: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createCatalogLink = function(e) {
                return `https://wa.me/c/${e}`
            }, t.createProductLink = function(e, t) {
                return `https://wa.me/p/${t}/${e}`
            }
        },
        10901: (e, t, n) => {
            e.exports = n.p + "bryndan_write_20e48b2ec8c64b2a1ceb5b28d9bcc9d0.ttf"
        },
        95941: (e, t, n) => {
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
        97449: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                cartIcon: "_3Nx1E",
                inheritColor: "_1lxeQ"
            }
        },
        65753: (e, t, n) => {
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
        52892: (e, t, n) => {
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
        71429: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                prompt: "x-vzn"
            }
        },
        34079: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                linkIcon: "_1FiUT",
                inheritColor: "NwJSN"
            }
        },
        24100: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                linkContainer: "_39Tm3",
                activeLink: "_3YkDH"
            }
        },
        57086: (e, t, n) => {
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
        49437: (e, t, n) => {
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
        71704: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                header: "ycpXx",
                list: "iQNxs"
            }
        },
        27897: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                list: "_3ShRn",
                addItemsNotice: "_31dcv"
            }
        },
        32067: (e, t, n) => {
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
        52387: (e, t, n) => {
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
        21540: (e, t, n) => {
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
        49762: (e, t, n) => {
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
        70270: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                header: "_2tWjM",
                list: "_3XbAc"
            }
        },
        72940: (e, t, n) => {
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
        30836: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                imageCarouselContainer: "_3lMwD"
            }
        },
        11967: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                buttons: "_1_Ctk",
                button: "_23YI8"
            }
        },
        48246: (e, t, n) => {
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
        42684: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                notifyName: "_3Pmbe"
            }
        },
        41323: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                separator: "Wt3HP",
                block: "_11V85"
            }
        },
        55140: (e, t, n) => {
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
        57246: (e, t, n) => {
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
        70764: (e, t, n) => {
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
                themeNewChatInfo: "mjwXn"
            }
        },
        59271: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                section: "_17dED",
                control: "_3T0RE"
            }
        },
        31907: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                description: "_1PJIk"
            }
        },
        22235: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                actionText: "-KBcF"
            }
        },
        37295: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                icon: "_3ovSZ"
            }
        },
        555: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                icon: "_2I7Gg"
            }
        },
        73858: (e, t, n) => {
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
                themeNewChatInfo: "_1X2he"
            }
        },
        67978: (e, t, n) => {
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
        60654: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                icon: "woEzZ"
            }
        },
        80568: (e, t, n) => {
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
        43693: (e, t, n) => {
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
        50234: (e, t, n) => {
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
        57136: (e, t, n) => {
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