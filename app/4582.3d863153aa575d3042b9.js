/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [4582], {
        790167: (e, t, r) => {
            "use strict";
            var n = r(263026).default,
                a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleMessageRetryRequest = function(e) {
                var t = v.default.parse(e);
                if (t.error) return __LOG__(4, void 0, new Error)`Parsing Error: ${t.error.toString()}`, n.reject(t.error);
                var r = t.success,
                    a = r.from,
                    o = r.participant,
                    c = r.recipient,
                    d = r.retryCount,
                    f = r.stanzaId;
                if (null == f) return __LOG__(3)`Received null stanzaID when handling message retry request`, n.reject(new Error("Received null stanzaID when handling message retry request"));
                var E = (0, u.wap)("ack", {
                        id: (0, u.CUSTOM_STRING)(f),
                        to: (0, s.JID)(a),
                        participant: o ? (0, s.DEVICE_JID)(o) : u.DROP_ATTR,
                        class: "receipt",
                        type: "retry"
                    }),
                    y = b(a, c);
                if (!y) return n.resolve(E);
                return (0, p.handleMessage)(String(y), !1, (0, l.default)(i.default.mark((function e() {
                    var t, n, l, u, s, p;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, R(r);
                            case 2:
                                if (null != (t = e.sent)) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return", E);
                            case 5:
                                return n = t.originalMsgId, l = t.chat, u = t.requester, s = t.identityRowId, e.prev = 6, e.next = 9, (0, _.getMsgIfAuthorized)(n, l, u, d, s);
                            case 9:
                                if (p = e.sent) {
                                    e.next = 13;
                                    break
                                }
                                return __LOG__(3)`handleMessageRetryRequest msg retry not authorized`, e.abrupt("return", E);
                            case 13:
                                return e.next = 15, (0, C.sendRetry)(a, o, c, p, d);
                            case 15:
                                e.next = 20;
                                break;
                            case 17:
                                e.prev = 17, e.t0 = e.catch(6), __LOG__(3)`handleMessageRetryRequest error: ${e.t0}`;
                            case 20:
                                return e.abrupt("return", E);
                            case 21:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [6, 17]
                    ])
                }))))
            }, t.handleVoipRetryRequest = function() {
                return h.apply(this, arguments)
            };
            var i = a(r(887757)),
                l = a(r(348926)),
                o = r(941866),
                u = r(985044),
                c = r(613321),
                s = r(908112),
                d = r(63962),
                p = r(625479),
                f = r(478077),
                _ = r(643972),
                v = a(r(133793)),
                E = r(4775),
                C = r(806727),
                y = r(412703),
                g = r(632171),
                T = r(228277),
                S = a(r(229677)),
                A = r(95422);

            function h() {
                return (h = (0, l.default)(i.default.mark((function e(t) {
                    var r;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, R(t);
                            case 2:
                                return r = e.sent, e.abrupt("return", null != r);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function R() {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = (0, l.default)(i.default.mark((function e(t) {
                    var r, n, a, u, s, p, v, C, T;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = t.originalMsgId, n = t.from, a = t.participant, u = t.recipient, s = t.retryCount, p = t.offline, !(s >= f.MAX_RETRY)) {
                                    e.next = 4;
                                    break
                                }
                                return __LOG__(2)`handleRetryRequest refusing retry attempt #${s}`, e.abrupt("return");
                            case 4:
                                if (v = b(n, u)) {
                                    e.next = 8;
                                    break
                                }
                                return __LOG__(3)`handleRetryRequest: no chat found for incoming retry request.`, e.abrupt("return");
                            case 8:
                                if (C = v.isUser() ? n : a) {
                                    e.next = 12;
                                    break
                                }
                                return __LOG__(3)`handleRetryRequest: no requester found for incoming retry request.`, e.abrupt("return");
                            case 12:
                                return T = C.device || 0, e.prev = 13, e.next = 16, (0, c.hasDevice)(C, T);
                            case 16:
                                if (e.sent) {
                                    e.next = 21;
                                    break
                                }
                                return __LOG__(3)`handleRetryRequest: no device ${T} found for ${C.user} for incoming retry request .`, new S.default.MdRetryFromUnknownDevice({
                                    offline: p,
                                    senderType: T === o.DEFAULT_DEVICE_ID ? S.default.DEVICE_TYPE.PRIMARY : S.default.DEVICE_TYPE.COMPANION
                                }).commit(), e.abrupt("return");
                            case 21:
                                return e.next = 23, E.sendMsgQueueMap.enqueue(v.toString(), (0, l.default)(i.default.mark((function e() {
                                    var n;
                                    return i.default.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, (0, _.updateLocalSession)(v, t);
                                            case 2:
                                                return e.next = 4, (0, d.ensureE2ESessions)([C]);
                                            case 4:
                                                return e.next = 6, (0, g.getPersistSignalProtocolStore)().getIdentityRowId((0, y.createSignalAddress)(C).toString());
                                            case 6:
                                                return n = e.sent, e.abrupt("return", {
                                                    originalMsgId: r,
                                                    chat: v,
                                                    requester: C,
                                                    identityRowId: n
                                                });
                                            case 8:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))));
                            case 23:
                                return e.abrupt("return", e.sent);
                            case 26:
                                e.prev = 26, e.t0 = e.catch(13), __LOG__(3)`handleRetryRequest error: ${e.t0}`;
                            case 29:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [13, 26]
                    ])
                })))).apply(this, arguments)
            }

            function b(e, t) {
                return e.isUser() ? (0, A.toUserWid)(e).equals((0, T.getMeUser)()) ? t || (__LOG__(3)`getActualChatId: from is a peer device, but without recipient`, null) : (0, A.toUserWid)(e) : e
            }
        },
        643972: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getMsgIfAuthorized = function() {
                return y.apply(this, arguments)
            }, t.processKeyBundle = g, t.updateLocalSession = function() {
                return S.apply(this, arguments)
            };
            var a = n(r(81109)),
                i = n(r(887757)),
                l = n(r(348926)),
                o = r(615833),
                u = r(430319),
                c = r(597528),
                s = n(r(773467)),
                d = r(752550),
                p = r(154553),
                f = r(937334),
                _ = r(617624),
                v = r(228277),
                E = n(r(229677)),
                C = r(95422);

            function y() {
                return (y = (0, l.default)(i.default.mark((function e(t, r, n, a, l) {
                    var u, _, C, y, g, T, S, A, h, R;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return u = (0, v.getMaybeMeLidUser)(), _ = (0, v.getMeUser)(), C = n.isLid() && null != u ? u : _, y = new s.default({
                                    id: t,
                                    remote: r,
                                    fromMe: !0,
                                    participant: r.isUser() ? void 0 : C
                                }), e.next = 6, (0, f.getMessageTable)().get(String(y));
                            case 6:
                                if (g = e.sent) {
                                    e.next = 10;
                                    break
                                }
                                return __LOG__(3)`getMsgIfAuthorized: can not find msg ${y.toString()}.`, e.abrupt("return", null);
                            case 10:
                                if (null != (T = g.type === p.MSG_TYPE.REVOKED ? g.protocolMessageRowId : g.rowId)) {
                                    e.next = 14;
                                    break
                                }
                                return __LOG__(3)`getMsgIfAuthorized: msg missing rowId ${y.toString()}.`, e.abrupt("return", null);
                            case 14:
                                return e.next = 16, (0, o.isRetryEligible)(y, n, l, T);
                            case 16:
                                return S = e.sent, __LOG__(2, void 0, void 0, void 0, ["messaging"])`getMsgIfAuthorized: ${t}, ${String(n)} retry eligibility ${S}`, A = new d.Msg((0, c.messageFromDbRow)(g)), e.next = 21, A.waitForPrep();
                            case 21:
                                h = !1, R = E.default.RETRY_REJECT_REASON.OTHER, A.type === p.MSG_TYPE.REVOKED && (h = !0, A.type = "protocol", A.subtype = "admin" === A.subtype ? "admin_revoke" : "sender_revoke"), e.t0 = S, e.next = e.t0 === o.RetryEligibilityResult.ELIGIBLE ? 27 : e.t0 === o.RetryEligibilityResult.INELIGIBLE_ALREADY_DELIVERED ? 28 : e.t0 === o.RetryEligibilityResult.INELIGIBLE_CHANGED_IDENTITY ? 30 : 32;
                                break;
                            case 27:
                                return e.abrupt("return", A);
                            case 28:
                                return R = E.default.RETRY_REJECT_REASON.DOUBLE_CHECKMARK, e.abrupt("break", 34);
                            case 30:
                                return R = E.default.RETRY_REJECT_REASON.IDENTITY_CHANGE, e.abrupt("break", 34);
                            case 32:
                                return R = E.default.RETRY_REJECT_REASON.OTHER, e.abrupt("break", 34);
                            case 34:
                                return new E.default.E2eRetryReject({
                                    senderDeviceType: n.isCompanion() ? E.default.DEVICE_TYPE.COMPANION : E.default.DEVICE_TYPE.PRIMARY,
                                    messageType: A.getWamMessageType(),
                                    msgRetryCount: a,
                                    retryRevoke: h,
                                    retryRejectReason: R
                                }).commit(), e.abrupt("return", null);
                            case 36:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function g() {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = (0, l.default)(i.default.mark((function e(t, r, n, l, o) {
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (null != n && t && t.key) {
                                    e.next = 3;
                                    break
                                }
                                return __LOG__(2)`processKeyBundle: skip due to missing key bundle`, e.abrupt("return", !1);
                            case 3:
                                if (!o) {
                                    e.next = 20;
                                    break
                                }
                                if (null != l) {
                                    e.next = 11;
                                    break
                                }
                                return __LOG__(2)`processKeyBundle: missing session for retry`, e.next = 8, _.Session.deleteRemoteInfo(r);
                            case 8:
                                return e.abrupt("return", !1);
                            case 11:
                                if (l === n) {
                                    e.next = 16;
                                    break
                                }
                                return __LOG__(2)`processKeyBundle: delete session because reg does not match, saved: ${l}, received: ${n}`, e.next = 15, _.Session.deleteRemoteInfo(r);
                            case 15:
                                return e.abrupt("return", !1);
                            case 16:
                                return __LOG__(2)`processKeyBundle: update local session with the retry key bundle`, e.next = 19, _.Session.createSignalSession((0, a.default)({
                                    wid: r,
                                    regId: n
                                }, t));
                            case 19:
                                return e.abrupt("return", !0);
                            case 20:
                                return __LOG__(2)`processKeyBundle: update local session with the retry key bundle`, e.next = 23, _.Session.createSignalSession((0, a.default)({
                                    wid: r,
                                    regId: n
                                }, t));
                            case 23:
                                return e.abrupt("return", !0);
                            case 24:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function S() {
                return (S = (0, l.default)(i.default.mark((function e(t, n) {
                    var a, l, o, c, s, d, p, f, E, y, T;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = n.from, l = n.keyBundle, o = n.offline, c = n.originalMsgId, s = n.participant, d = n.regId, p = n.retryCount, f = s || a, __LOG__(2)`updateLocalSession: retryCount: ${p}, offline: ${o.toString()}, has keyBundle: ${(!!l).toString()}`, t.isGroup() && (E = r(202908).ChatCollection.get(t)) && f && (0, u.markForgetSenderKey)(E.id, [f]), e.next = 6, _.Session.getRemoteRegId(f);
                            case 6:
                                if (y = e.sent, !(0, C.toUserWid)(f).equals((0, v.getMeUser)()) || y === d) {
                                    e.next = 9;
                                    break
                                }
                                throw new Error(`updateLocalSession: detect registration Id change remote: ${d}, local: ${String(y)} for peer device`);
                            case 9:
                                return e.next = 11, g(l, f, d, y, o);
                            case 11:
                                if (e.sent) {
                                    e.next = 17;
                                    break
                                }
                                if (null == y || y === d) {
                                    e.next = 17;
                                    break
                                }
                                return __LOG__(2)`updateLocalSession: delete session because reg does not match, saved: ${y}, received: ${y}`, e.next = 17, _.Session.deleteRemoteSession(f);
                            case 17:
                                if (p !== (T = 2)) {
                                    e.next = 22;
                                    break
                                }
                                return e.abrupt("return", _.Session.saveSessionBaseKey(f, c));
                            case 22:
                                if (!(p > T)) {
                                    e.next = 29;
                                    break
                                }
                                return e.next = 25, _.Session.hasSameBaseKey(f, c);
                            case 25:
                                if (!e.sent) {
                                    e.next = 29;
                                    break
                                }
                                return __LOG__(2)`updateLocalSession: delete local session due to same base key`, e.abrupt("return", _.Session.deleteRemoteSession(f));
                            case 29:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        133793: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(780561),
                a = r(171755),
                i = r(228277),
                l = new n.WapParser("retryRequestParser", (function(e) {
                    e.assertTag("receipt"), e.assertAttr("type", "retry"), e.hasAttr("to") && e.assertAttr("to", (0, i.assertGetMe)().toJid());
                    var t = (0, a.jidWithTypeToWid)(e.attrJidWithType("from")),
                        r = e.hasAttr("participant") ? (0, a.deviceJidToDeviceWid)(e.attrDeviceJid("participant")) : null,
                        n = e.hasAttr("recipient") ? (0, a.deviceJidToUserWid)(e.attrDeviceJid("recipient")) : null,
                        l = e.child("retry"),
                        o = e.maybeChild("keys"),
                        u = null;
                    if (null != o) {
                        var c, s = o.child("skey"),
                            d = o.child("key");
                        u = {
                            identity: o.child("identity").contentBytes(32),
                            deviceIdentity: null === (c = o.maybeChild("device-identity")) || void 0 === c ? void 0 : c.contentBytes(),
                            skey: {
                                id: s.child("id").contentUint(3),
                                pubkey: s.child("value").contentBytes(32),
                                signature: s.child("signature").contentBytes(64)
                            },
                            key: {
                                id: d.child("id").contentUint(3),
                                pubkey: d.child("value").contentBytes(32)
                            }
                        }
                    }
                    return {
                        stanzaId: e.attrString("id"),
                        originalMsgId: l.attrString("id"),
                        ts: e.attrTime("t"),
                        retryCount: l.hasAttr("count") ? l.attrInt("count") : 0,
                        regId: e.child("registration").contentUint(4),
                        offline: e.hasAttr("offline"),
                        from: t,
                        participant: r,
                        recipient: n,
                        keyBundle: u
                    }
                }));
            t.default = l
        },
        754745: (e, t, r) => {
            "use strict";
            var n = r(263026).default,
                a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.prepareKeysForRetry = A, t.sendRetryReceipt = function() {
                return S.apply(this, arguments)
            };
            var i = a(r(887757)),
                l = a(r(963038)),
                o = a(r(348926)),
                u = r(115066),
                c = r(985044),
                s = r(366639),
                d = r(646804),
                p = r(908112),
                f = a(r(442435)),
                _ = r(27531),
                v = r(883223),
                E = r(632171),
                C = r(237723),
                y = r(429047),
                g = r(228277),
                T = r(95422);

            function S() {
                return (S = (0, o.default)(i.default.mark((function e(t, r, a, o, s, f) {
                    var v, C, y, S, h, R, O, b, I, L, m, k, P = arguments;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return v = P.length > 6 && void 0 !== P[6] && P[6], e.prev = 1, C = (0, E.getSignalProtocolStore)(), e.next = 5, n.all([C.getLocalRegistrationId(), C.getIdentityKeyPair()]);
                            case 5:
                                if (y = e.sent, S = (0, l.default)(y, 2), h = S[0], R = S[1], null != h && null != R) {
                                    e.next = 11;
                                    break
                                }
                                throw new Error("No registration info found");
                            case 11:
                                return e.next = 13, A(t, (0, _.toCurveKeyPair)(R));
                            case 13:
                                if (O = e.sent, b = c.DROP_ATTR, I = c.DROP_ATTR, !r.isUser()) {
                                    e.next = 32;
                                    break
                                }
                                if (m = c.DROP_ATTR, L = (0, p.DEVICE_JID)(r), !(0, g.getMeUser)().equals((0, T.toUserWid)(r))) {
                                    e.next = 30;
                                    break
                                }
                                if (!v) {
                                    e.next = 25;
                                    break
                                }
                                b = (0, c.CUSTOM_STRING)("peer"), I = c.DROP_ATTR, e.next = 30;
                                break;
                            case 25:
                                if (o) {
                                    e.next = 29;
                                    break
                                }
                                return e.abrupt("return", n.reject(new Error("sendRetryReceipt: send retry to peer device without receipient")));
                            case 29:
                                I = (0, p.USER_JID)(o);
                            case 30:
                                e.next = 34;
                                break;
                            case 32:
                                L = (0, p.CHAT_JID)(r), m = a ? (0, p.DEVICE_JID)(a) : c.DROP_ATTR;
                            case 34:
                                return k = (0, c.wap)("receipt", {
                                    id: (0, c.CUSTOM_STRING)(s),
                                    to: L,
                                    participant: m,
                                    recipient: I,
                                    type: "retry",
                                    category: b
                                }, (0, c.wap)("retry", {
                                    v: "1",
                                    count: (0, c.INT)(t),
                                    id: (0, c.CUSTOM_STRING)(s),
                                    t: (0, c.CUSTOM_STRING)(f)
                                }), (0, c.wap)("registration", null, (0, c.BIG_ENDIAN_CONTENT)(h)), O), e.abrupt("return", (0, u.deprecatedSendStanzaAndWaitForAck)(k, (0, d.toCoreAckTemplate)({
                                    id: s,
                                    class: "receipt",
                                    from: r,
                                    participant: a,
                                    type: "retry"
                                })));
                            case 38:
                                e.prev = 38, e.t0 = e.catch(1), __LOG__(4, void 0, new Error, !0)`error: ${e.t0}`, SEND_LOGS("sendRetryReceipt: error while creating or sending the retry message");
                            case 41:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 38]
                    ])
                })))).apply(this, arguments)
            }

            function A() {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = (0, o.default)(i.default.mark((function e(t, r) {
                    var n, a, o, u;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, R(t, r);
                            case 2:
                                if (n = e.sent, a = (0, l.default)(n, 2), o = a[0], !(u = a[1])) {
                                    e.next = 11;
                                    break
                                }
                                return e.next = 9, C.waSignalStore.markKeyAsUploaded(u.keyId);
                            case 9:
                                return e.next = 11, C.waSignalStore.markPreKeyAsDirectDistribution(u.keyId);
                            case 11:
                                return e.abrupt("return", o);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function R() {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = (0, o.default)(i.default.mark((function e(t, r) {
                    var a, o, u, d, p, _;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(t < 2)) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", n.resolve([null, null]));
                            case 2:
                                return e.prev = 2, e.next = 5, n.all([C.waSignalStore.getSignedPreKey(), C.waSignalStore.getOrGenSinglePreKey(v.generatePreKeyPair), (0, s.getADVEncodedIdentity)().then((function(e) {
                                    return (0, c.wap)("device-identity", null, e)
                                }))]);
                            case 5:
                                if (a = e.sent, o = (0, l.default)(a, 3), u = o[0], d = o[1], p = o[2], u) {
                                    e.next = 12;
                                    break
                                }
                                throw new Error("Signed pre key is not available");
                            case 12:
                                return _ = (0, c.wap)("keys", null, (0, c.wap)("type", null, f.default.KEY_BUNDLE_TYPE), (0, c.wap)("identity", null, r.pubKey), (0, y.xmppPreKey)(d), (0, y.xmppSignedPreKey)(u), p), e.abrupt("return", [_, d]);
                            case 16:
                                throw e.prev = 16, e.t0 = e.catch(2), Error("Could not create keys section for retry");
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 16]
                    ])
                })))).apply(this, arguments)
            }
        },
        63122: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getFanOutListJob = function(e) {
                return (0, i.createNonPersistedJob)("getFanOutList", (function(e) {
                    return (0, a.getFanOutList)(e)
                }), {
                    priority: n.JOB_PRIORITY.SKIP
                }).waitUntilCompleted({
                    wids: e
                })
            };
            var n = r(770870),
                a = r(9401),
                i = r(464581)
        },
        806727: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendRetry = function() {
                return p.apply(this, arguments)
            };
            var a = n(r(887757)),
                i = n(r(348926)),
                l = r(115066),
                o = r(646804),
                u = r(386846),
                c = r(530236),
                s = r(928695),
                d = n(r(441143));

            function p() {
                return (p = (0, i.default)(a.default.mark((function e(t, r, n, i, p) {
                    var f, _, v, E, C, y;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (f = i.id.id, _ = r || t, __LOG__(2, void 0, void 0, void 0, ["messaging"])`sendRetry: id ${f} to ${t.toString()}, requester: ${_.toString()}, count: ${p}`, (0, c.getAsMms)(i) && (v = i.isUnsentPhoneMsg() ? {
                                        type: i.type
                                    } : i.avParams()), E = (0, u.createMsgProtobuf)(i, v || {}), C = {
                                        type: s.MsgType.Retry,
                                        retryCount: p
                                    }, !t.isUser()) {
                                    e.next = 12;
                                    break
                                }
                                return e.next = 9, (0, s.createUserDeviceMsgStanza)(t, n, i, E, C);
                            case 9:
                                y = e.sent, e.next = 16;
                                break;
                            case 12:
                                return (0, d.default)(null != r, "[messaging] sendRetry: no participant for group retry message"), e.next = 15, (0, s.createGroupDeviceMsgStanza)(t, r, i, E, C);
                            case 15:
                                y = e.sent;
                            case 16:
                                return __LOG__(2, void 0, void 0, void 0, ["messaging"])`sendRetry: sending ${f} to ${t.toString()}`, e.abrupt("return", (0, l.deprecatedSendStanzaAndWaitForAck)(y, (0, o.toCoreAckTemplate)({
                                    id: f,
                                    class: "message",
                                    from: t,
                                    participant: r
                                })));
                            case 18:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        769604: (e, t, r) => {
            "use strict";
            var n = r(263026).default,
                a = r(595318);
            t.Z = function() {
                return O.apply(this, arguments)
            };
            var i = a(r(887757)),
                l = a(r(348926)),
                o = r(115066),
                u = r(941866),
                c = r(985044),
                s = r(366639),
                d = r(947044),
                p = r(899015),
                f = r(646804),
                _ = r(908112),
                v = a(r(442435)),
                E = r(63962),
                C = r(892301),
                y = R(r(617624)),
                g = r(632171),
                T = R(r(216996)),
                S = a(r(560911)),
                A = r(95422);

            function h(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (h = function(e) {
                    return e ? r : t
                })(e)
            }

            function R(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var r = h(t);
                if (r && r.has(e)) return r.get(e);
                var n = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var l = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                        l && (l.get || l.set) ? Object.defineProperty(n, i, l) : n[i] = e[i]
                    } return n.default = e, r && r.set(e, n), n
            }
            v.default.VOIP_LOG_COLOR;

            function O() {
                return (O = (0, l.default)(i.default.mark((function e(t, r) {
                    var n, a, l;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.common, a = (0, A.createWid)(n.peer_jid), !S.default.isGroupCall(a)) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", b((0, c.CUSTOM_STRING)(n.peer_jid), a, t));
                            case 4:
                                return e.prev = 4, e.next = 7, L(t, a, r);
                            case 7:
                                return l = e.sent, e.abrupt("return", b(l, a, t));
                            case 11:
                                e.prev = 11, e.t0 = e.catch(4), __LOG__(3)`voip:encryptAndSendSignalingMsg: Failed to encrypt and send msg`;
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [4, 11]
                    ])
                })))).apply(this, arguments)
            }

            function b() {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = (0, l.default)(i.default.mark((function e(t, r, n) {
                    var a, l, u, s, d;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = (0, _.voipXmlToWapNode)(n.payload), l = (0, c.generateId)(), u = (0, c.wap)("call", {
                                    to: t,
                                    id: l
                                }, a), e.next = 5, (0, g.getSignalProtocolStore)().flushBufferToDiskIfNotMemOnlyMode();
                            case 5:
                                return e.next = 7, (0, o.deprecatedSendStanzaAndReturnAck)(u, (0, f.toCoreAckTemplate)({
                                    id: String(l),
                                    class: "call",
                                    from: r,
                                    participant: null
                                }));
                            case 7:
                                return s = e.sent, d = (0, _.wapNodeToVoipXml)(s), e.abrupt("return", {
                                    payload: d,
                                    status: 200
                                });
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function L() {
                return m.apply(this, arguments)
            }

            function m() {
                return (m = (0, l.default)(i.default.mark((function e(t, r, a) {
                    var o, c, s, d, p, f, v, C, y, g, S;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (o = t.payload[2].findIndex((function(e) {
                                        return "destination" === e[0]
                                    })), !(c = t.payload[2][o])) {
                                    e.next = 26;
                                    break
                                }
                                return t.payload[0] !== T.TYPE_STR.OFFER && (__LOG__(4, void 0, new Error, !0)`Assertion failed!`, SEND_LOGS("call offer check")), s = c[2].map((function(e) {
                                    var t = e[1].jid;
                                    return (0, A.createDeviceWidFromUserAndDevice)(t.user, "c.us", t.device)
                                })), e.prev = 5, e.next = 8, (0, E.ensureE2ESessions)(s);
                            case 8:
                                e.next = 13;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(5), __LOG__(3)`voip:encryptMsgCallKey: Could not establish E2E session with all deviceWids`;
                            case 13:
                                return d = !1, p = !1, e.next = 17, n.all(c[2].map(function() {
                                    var e = (0, l.default)(i.default.mark((function e(r, n) {
                                        var a, l, o, u, c;
                                        return i.default.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (!k(r[2])) {
                                                        e.next = 17;
                                                        break
                                                    }
                                                    return a = w(r[2]), l = s[n], e.prev = 3, e.next = 6, M(a, l, N(t.payload[2]));
                                                case 6:
                                                    o = e.sent, u = o.encNode, c = o.shouldHaveIdentity, p = p || c, G(r[2], u), e.next = 17;
                                                    break;
                                                case 13:
                                                    e.prev = 13, e.t0 = e.catch(3), __LOG__(3)`voip:encryptMsgCallKey: Signal encryption failed for ${l.toString()}, ${e.t0}`, d = !0;
                                                case 17:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [3, 13]
                                        ])
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }()));
                            case 17:
                                if (!d) {
                                    e.next = 22;
                                    break
                                }
                                __LOG__(3)`voip:encryptMsgCallKey: Removing all enc nodes due to encryption failure`, c[2].forEach((function(e) {
                                    return P(e)
                                })), e.next = 25;
                                break;
                            case 22:
                                if (!p) {
                                    e.next = 25;
                                    break
                                }
                                return e.next = 25, D(t.payload[2]);
                            case 25:
                                return e.abrupt("return", (0, _.USER_JID)(r));
                            case 26:
                                if (k(t.payload[2])) {
                                    e.next = 28;
                                    break
                                }
                                return e.abrupt("return", (0, _.DEVICE_JID)(r));
                            case 28:
                                return e.prev = 28, f = [r], r.isCompanion() && (v = (0, A.createDeviceWidFromUserAndDevice)(r.user, r.server, u.DEFAULT_DEVICE_ID), f.unshift(v)), e.next = 33, (0, E.ensureE2ESessions)(f);
                            case 33:
                                e.next = 38;
                                break;
                            case 35:
                                e.prev = 35, e.t1 = e.catch(28), __LOG__(3)`voip:encryptAndSendSignalingMsg: Could not establish E2E session with deviceWid`;
                            case 38:
                                return C = w(t.payload[2]), e.prev = 39, e.next = 42, M(C, r, N(t.payload[2]));
                            case 42:
                                S = e.sent, y = S.encNode, g = S.shouldHaveIdentity, e.next = 56;
                                break;
                            case 47:
                                if (e.prev = 47, e.t2 = e.catch(39), a !== T.TYPE.OFFER) {
                                    e.next = 55;
                                    break
                                }
                                y = null, g = !1, __LOG__(3)`voip:encryptAndSendSignalingMsg: Sending offer without enc`, e.next = 56;
                                break;
                            case 55:
                                throw e.t2;
                            case 56:
                                if (G(t.payload[2], y), !g) {
                                    e.next = 60;
                                    break
                                }
                                return e.next = 60, D(t.payload[2]);
                            case 60:
                                return e.abrupt("return", (0, _.DEVICE_JID)(r));
                            case 61:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [5, 10],
                        [28, 35],
                        [39, 47]
                    ])
                })))).apply(this, arguments)
            }

            function k(e) {
                return null != e && e.findIndex((function(e) {
                    return "enc" === e[0]
                })) >= 0
            }

            function P(e) {
                if (null != e) {
                    var t = e.findIndex((function(e) {
                        return "enc" === e[0]
                    }));
                    e.splice(t, 1)
                }
            }

            function G(e, t) {
                var r = e.findIndex((function(e) {
                    return "enc" === e[0]
                }));
                r >= 0 && (e[r] = t)
            }

            function N(e) {
                var t, r = e.find((function(e) {
                        return "enc" === e[0]
                    })),
                    n = null == r || null === (t = r[1]) || void 0 === t ? void 0 : t.count;
                return null != n ? n : 0
            }

            function w(e) {
                var t = e.find((function(e) {
                        return "enc" === e[0]
                    })),
                    r = null == t ? void 0 : t[2];
                return {
                    call: {
                        callKey: null != r ? new Uint8Array(r) : null
                    }
                }
            }

            function M() {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = (0, l.default)(i.default.mark((function e(t, r, n) {
                    var a, l, o, u;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, y.Cipher.encryptSignalProto(r, (0, C.encodeAndPad)(t));
                            case 2:
                                return a = e.sent, l = a.ciphertext, o = a.type, u = (0, c.wap)("enc", {
                                    v: (0, c.CUSTOM_STRING)(p.CIPHERTEXT_VERSION.toString()),
                                    type: (0, c.CUSTOM_STRING)(o),
                                    count: (0, c.INT)(n)
                                }, l), e.abrupt("return", {
                                    encNode: u,
                                    shouldHaveIdentity: o === d.CiphertextType.Pkmsg
                                });
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function D() {
                return V.apply(this, arguments)
            }

            function V() {
                return (V = (0, l.default)(i.default.mark((function e(t) {
                    var r;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, s.getADVEncodedIdentity)();
                            case 2:
                                r = e.sent, t.push((0, c.wap)("device-identity", null, r));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        677383: (e, t, r) => {
            "use strict";
            var n = r(595318);
            t.Z = function() {
                return u.apply(this, arguments)
            };
            var a = n(r(887757)),
                i = n(r(348926)),
                l = r(754745),
                o = r(237723);

            function u() {
                return (u = (0, i.default)(a.default.mark((function e(t) {
                    var r, n, i, u, c;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, o.waSignalStore.getRegistrationInfo();
                            case 2:
                                if (n = e.sent) {
                                    e.next = 5;
                                    break
                                }
                                throw Error("No registration info found");
                            case 5:
                                return i = n.identityKeyPair, u = null !== (r = t[1] && parseInt(t[1].count, 10)) && void 0 !== r ? r : 0, e.next = 9, (0, l.prepareKeysForRetry)(u, i);
                            case 9:
                                return (c = e.sent) && t[2] && Array.isArray(t[2]) && t[2].push(c), e.abrupt("return", t);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        81357: (e, t, r) => {
            "use strict";
            var n = r(263026).default,
                a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return s.apply(this, arguments)
            };
            var i = a(r(887757)),
                l = a(r(348926)),
                o = r(613321),
                u = r(491552),
                c = r(95422);

            function s() {
                return (s = (0, l.default)(i.default.mark((function e(t) {
                    var r;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n.all(t.map(function() {
                                    var e = (0, l.default)(i.default.mark((function e(t) {
                                        var r, n, a;
                                        return i.default.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return r = t.user_raw_jid, n = t.phash, a = (0, c.createUserWid)(r), e.next = 4, (0, o.doesDeviceHashMatch)(a, n);
                                                case 4:
                                                    if (!e.sent) {
                                                        e.next = 6;
                                                        break
                                                    }
                                                    return e.abrupt("return", a);
                                                case 6:
                                                    return e.abrupt("return", null);
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }()));
                            case 2:
                                return r = e.sent.filter(Boolean), e.next = 5, (0, u.syncDeviceListJob)(r, "voip", null);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        899574: (e, t, r) => {
            "use strict";
            var n = r(263026).default,
                a = r(595318);
            t.Z = function() {
                return f.apply(this, arguments)
            };
            var i = a(r(887757)),
                l = a(r(348926)),
                o = r(115066),
                u = r(985044),
                c = r(646804),
                s = r(908112),
                d = r(63962),
                p = r(95422);

            function f() {
                return (f = (0, l.default)(i.default.mark((function e(t) {
                    var r, a, l, f, _, v, E, C;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.common, (a = (0, p.createWid)(r.peer_jid)).isGroupCall() ? (l = (0, s.GROUP_CALL_JID)(a), f = n.resolve()) : (l = (0, s.DEVICE_JID)(a), f = (0, d.ensureE2ESessions)([a])), e.next = 5, f;
                            case 5:
                                return _ = (0, s.voipXmlToWapNode)(t.payload), v = (0, u.generateId)(), E = (0, u.wap)("call", {
                                    to: l,
                                    id: v
                                }, _), e.next = 10, (0, o.deprecatedSendStanzaAndReturnAck)(E, (0, c.toCoreAckTemplate)({
                                    id: String(v),
                                    class: "call",
                                    from: a,
                                    participant: null
                                }));
                            case 10:
                                return C = e.sent, e.abrupt("return", {
                                    payload: (0, s.wapNodeToVoipXml)(C),
                                    status: 200
                                });
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        883223: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateIdentityKeyPair = function() {
                return s.apply(this, arguments)
            }, t.generatePreKeyPair = function() {
                return u.apply(this, arguments)
            }, t.generateSignedKeyPair = function() {
                return c.apply(this, arguments)
            };
            var a = n(r(887757)),
                i = n(r(348926)),
                l = r(27531),
                o = r(18196);

            function u() {
                return (u = (0, i.default)(a.default.mark((function e(t) {
                    var r, n, i;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                (0, o.isCryptoLibraryEnabled)(), e.next = 5;
                                break;
                            case 5:
                                return e.next = 7, self.libsignal.KeyHelper.generatePreKey(t);
                            case 7:
                                return r = e.sent, n = r.keyId, i = r.keyPair, e.abrupt("return", {
                                    keyId: n,
                                    keyPair: (0, l.toCurveKeyPair)(i),
                                    isDirectDistribution: 0
                                });
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function c() {
                return (c = (0, i.default)(a.default.mark((function e(t, r) {
                    var n, i, u, c;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                (0, o.isCryptoLibraryEnabled)(), e.next = 5;
                                break;
                            case 5:
                                return e.next = 7, self.libsignal.KeyHelper.generateSignedPreKey(t, r);
                            case 7:
                                return n = e.sent, i = n.keyId, u = n.keyPair, c = n.signature, e.abrupt("return", {
                                    keyId: i,
                                    keyPair: (0, l.toCurveKeyPair)(u),
                                    signature: c
                                });
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function s() {
                return (s = (0, i.default)(a.default.mark((function e() {
                    var t;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                (0, o.isCryptoLibraryEnabled)(), e.next = 2;
                                break;
                            case 2:
                                return e.next = 4, self.libsignal.KeyHelper.generateIdentityKeyPair();
                            case 4:
                                return t = e.sent, e.abrupt("return", (0, l.toCurveKeyPair)(t));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        636880: (e, t, r) => {
            "use strict";
            var n, a = r(595318),
                i = a(r(334575)),
                l = a(r(993913)),
                o = r(648409),
                u = r(231197),
                c = r(970280),
                s = a(r(73380)),
                d = r(236539),
                p = r(422210),
                f = r(14115),
                _ = r(151853),
                v = r(548360),
                E = r(785893),
                C = window.Native.ipcRenderer,
                y = function() {
                    function e() {
                        (0, i.default)(this, e)
                    }
                    return (0, l.default)(e, [{
                        key: "init",
                        value: function() {
                            n = s.default.require("AVDeviceManager"), C.on(_.MAIN_IPC_EVENTS.AV_EVENT, this._refreshDeviceList), C.on(_.MAIN_IPC_EVENTS.AV_DEVICE_CHANGE_TOAST, this._deviceChangeToast), this._refreshDeviceList()
                        }
                    }, {
                        key: "cleanup",
                        value: function() {
                            __LOG__(2, void 0, void 0, void 0, ["voip"])`av manager log: cleanup`, C.removeListener(_.MAIN_IPC_EVENTS.AV_DEVICE_CHANGE_TOAST, this._deviceChangeToast), C.removeListener(_.MAIN_IPC_EVENTS.AV_EVENT, this._refreshDeviceList), n = null
                        }
                    }, {
                        key: "_refreshDeviceList",
                        value: function() {
                            var e;
                            null === (e = n) || void 0 === e || e.getDeviceListAsync().then((function(e) {
                                u.AvDevices.refreshDeviceList(e)
                            }))
                        }
                    }, {
                        key: "_deviceChangeToast",
                        value: function(e, t) {
                            if (((0, f.isVoiceCallEnabled)() || (0, f.isVideoCallEnabled)() || (0, f.isGroupCallEnabled)()) && c.CallCollection.activeCall) {
                                var r;
                                switch (t.deviceType) {
                                    case o.AVDeviceType.AudioInput:
                                        r = v.fbt._("Microphone", null, {
                                            hk: "t3dsg"
                                        });
                                        break;
                                    case o.AVDeviceType.AudioOutput:
                                        r = v.fbt._("Audio Device", null, {
                                            hk: "3rNIUz"
                                        });
                                        break;
                                    case o.AVDeviceType.Video:
                                        r = v.fbt._("Camera", null, {
                                            hk: "49GA08"
                                        })
                                }
                                var n = v.fbt._("Using {deviceName} as your {deviceType} for your WhatsApp calls", [v.fbt._param("deviceName", t.name), v.fbt._param("deviceType", r)], {
                                    hk: "4B0NPs"
                                });
                                p.ToastManager.open((0, E.jsx)(d.Toast, {
                                    msg: n
                                }))
                            }
                        }
                    }]), e
                }();
            e.exports = new y
        },
        764582: (e, t, r) => {
            "use strict";
            var n = r(263026).default,
                a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Voip = void 0, t.checkVoipCapability = function() {
                return n.resolve(!0)
            };
            var i = a(r(81109)),
                l = a(r(887757)),
                o = a(r(348926)),
                u = a(r(402525)),
                c = a(r(347999)),
                s = r(123935),
                d = r(941858),
                p = r(281098),
                f = a(r(460167)),
                _ = r(231197),
                v = r(894995),
                E = r(970280),
                C = r(665912),
                y = r(908112),
                g = a(r(442435)),
                T = r(840285),
                S = r(790167),
                A = a(r(671313)),
                h = a(r(73380)),
                R = r(723117),
                O = r(208893),
                b = r(63122),
                I = r(228277),
                L = r(163697),
                m = a(r(236996)),
                k = F(r(14115)),
                P = F(r(547880)),
                G = a(r(81357)),
                N = F(r(216996)),
                w = F(r(394785)),
                M = r(151853),
                x = a(r(229677)),
                D = a(r(560911)),
                V = r(95422);

            function U(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (U = function(e) {
                    return e ? r : t
                })(e)
            }

            function F(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var r = U(t);
                if (r && r.has(e)) return r.get(e);
                var n = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var l = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                        l && (l.get || l.set) ? Object.defineProperty(n, i, l) : n[i] = e[i]
                    } return n.default = e, r && r.set(e, n), n
            }
            g.default.VOIP_LOG_COLOR;
            var W, j, Y = window.Native.ipcRenderer,
                K = new d.PromiseQueue,
                $ = !1,
                B = null,
                J = null,
                H = null,
                q = {
                    init: function() {
                        return K.enqueue((0, o.default)(l.default.mark((function e() {
                            return l.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, z();
                                    case 3:
                                        e.next = 10;
                                        break;
                                    case 5:
                                        e.prev = 5, e.t0 = e.catch(0), __LOG__(4, void 0, new Error, !0)`voip:init failed with: ${e.t0}`, SEND_LOGS("voip-lazy-init-error"), q.cleanup(), $ = !1;
                                    case 10:
                                        return e.abrupt("return", $);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 5]
                            ])
                        }))))
                    },
                    isInitialized: function() {
                        return $
                    },
                    handleIncomingSignalingMessage: function(e, t) {
                        return (0, o.default)(l.default.mark((function r() {
                            var n, a, i, o, u, c, s, d;
                            return l.default.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if ($) {
                                            r.next = 3;
                                            break
                                        }
                                        return __LOG__(3)`voip:handleIncomingSignalingMsg:called before init`, r.abrupt("return");
                                    case 3:
                                        if ((u = N.TYPE_NAME[e.type]) && __LOG__(2)`voip:handleIncomingSignalingMsg: type: "${u}" msg: `, null != (c = E.CallCollection.get(e.call_id)) || e.type === N.TYPE.TERMINATE) {
                                            r.next = 10;
                                            break
                                        }
                                        __LOG__(2)`voip:handleIncomingSignalingMsg: Received signaling message before offer`, r.next = 44;
                                        break;
                                    case 10:
                                        if (!c || c.canHandleLocally) {
                                            r.next = 15;
                                            break
                                        }
                                        return (0, L.handleIncomingSignalingMessage)(e, t), r.abrupt("return");
                                    case 15:
                                        r.t0 = e.type, r.next = r.t0 === N.TYPE.OFFER ? 18 : r.t0 === N.TYPE.OFFER_RECEIPT ? 27 : r.t0 === N.TYPE.ACCEPT_RECEIPT ? 29 : r.t0 === N.TYPE.ACCEPT ? 32 : r.t0 === N.TYPE.TERMINATE ? 34 : r.t0 === N.TYPE.ENC_REKEY ? 43 : 44;
                                        break;
                                    case 18:
                                        if (!R.MuteCollection.globalMute().isCallMuted) {
                                            r.next = 21;
                                            break
                                        }
                                        return null != c && (null != e.t && (c.offerTime = e.t), c.isVideo = !!e.isVideoCall), r.abrupt("return");
                                    case 21:
                                        return (null == c ? void 0 : c.isVideo) && (0, T.prepareForCameraAccessCheck)(), s = !e.isContact, 5, null === (n = W) || void 0 === n || n.handleIncomingSignalingOffer(t, s, 5), ie(e.call_id), r.abrupt("return");
                                    case 27:
                                        return null === (a = W) || void 0 === a || a.handleIncomingSignalingReceipt(t), r.abrupt("return");
                                    case 29:
                                        return null === (i = W) || void 0 === i || i.handleIncomingSignalingReceipt(t), le(e.call_id, !1), r.abrupt("return");
                                    case 32:
                                        return le(e.call_id, !0), r.abrupt("break", 44);
                                    case 34:
                                        if (!R.MuteCollection.globalMute().isCallMuted) {
                                            r.next = 42;
                                            break
                                        }
                                        d = t.payload[1].reason, r.t1 = d, r.next = "timeout" === r.t1 ? 39 : 42;
                                        break;
                                    case 39:
                                        if (null == c) {
                                            r.next = 42;
                                            break
                                        }
                                        return r.next = 42, w.generateMissedCallLog(e.call_creator, c.offerTime, c.isVideo, !1);
                                    case 42:
                                    case 43:
                                        return r.abrupt("break", 44);
                                    case 44:
                                        return r.next = 46, null === (o = W) || void 0 === o ? void 0 : o.handleIncomingSignalingMsg(t);
                                    case 46:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    },
                    cleanup: function() {
                        $ ? (__LOG__(2)`voip:cleanup`, E.CallCollection.activeCall && (this.endCall(), E.CallCollection.setActiveCall(null), __LOG__(2)`voip:call_collection: Active Call set to null due to cleanup:`), Y.send(M.RENDERER_IPC_EVENTS.ENABLE_VOIP_FEATURES, !1), j && "function" == typeof j.cleanup && j.cleanup(), W && "function" == typeof W.cleanup && W.cleanup(), W = null, j = null, $ = !1) : __LOG__(2)`voip:cleanup skipped: voip not initialized`
                    },
                    cleanupVideoBuffer: function() {
                        var e;
                        __LOG__(2)`voip:cleanupVideoBuffer`, null === (e = W) || void 0 === e || e.cleanupVideoBuffer()
                    },
                    refresh: function() {
                        var e;
                        __LOG__(2)`voip:refresh`, null === (e = W) || void 0 === e || e.refresh()
                    },
                    callStart: function(e, t) {
                        __LOG__(2)`voip:callStart: ${e.toString()} video: ${t.toString()}`, Q(t).then((function(r) {
                            r && function(e, t) {
                                if (!$) return void __LOG__(3)`voip:callStart:called before init`;
                                if (t) {
                                    if (!k.isVideoCallEnabled()) return void __LOG__(3)`voip:attempted to start video call but it is not enabled`
                                }
                                if (__LOG__(2)`voip:callStart: ${e.toString()}`, D.default.isUser(e) && !e.equals((0, I.getMaybeMeUser)())) {
                                    var r = (0, m.default)();
                                    (0, b.getFanOutListJob)([e]).then((function(n) {
                                        var a, i = re(n, "callStart"),
                                            l = e.toString({
                                                legacy: !0
                                            });
                                        null === (a = W) || void 0 === a || a.startCall([l], [i], r, t, "")
                                    })), E.CallCollection.add({
                                        id: r,
                                        peerJid: e,
                                        offerTime: (0, p.unixTime)(),
                                        isVideo: t,
                                        webClientShouldHandle: !0,
                                        outgoing: !0,
                                        canHandleLocally: !0
                                    }), E.CallCollection.assertGet(r).setState(M.CALL_STATES.OUTGOING_CALLING), ie(r)
                                }
                            }(e, t)
                        }))
                    },
                    groupCallStart: function(e, t) {
                        __LOG__(2)`voip:groupCallStart: ${e.join()} video: ${t.toString()}`, Q(t).then((function(r) {
                            r && function(e, t) {
                                if (!$) return void __LOG__(3)`voip:groupCallStart:called before init`;
                                if (!k.isGroupCallEnabled()) return void __LOG__(3)`voip:attempted to start group ${t?"video":"audio"} call but it is not enabled`;
                                __LOG__(2)`voip:groupCallStart: ${e.join()}`;
                                var r = (0, m.default)(),
                                    a = e.filter((function(e) {
                                        return D.default.isUser(e) && !(0, I.isMeAccount)(e)
                                    })),
                                    i = a.map((function(e) {
                                        return e.toString({
                                            legacy: !0
                                        })
                                    })),
                                    l = [],
                                    o = [
                                        []
                                    ];
                                a.forEach((function(e, t) {
                                    l.push((0, b.getFanOutListJob)([e]).then((function(e) {
                                        o[t] = re(e, "groupCallStart")
                                    })))
                                })), n.all(l).then((function() {
                                    var e;
                                    null === (e = W) || void 0 === e || e.startCall(i, o, r, t, "")
                                })), E.CallCollection.add({
                                    id: r,
                                    peerJid: a[0],
                                    offerTime: (0, p.unixTime)(),
                                    isVideo: t,
                                    isGroup: !0,
                                    groupCallParticipants: a,
                                    webClientShouldHandle: !0,
                                    outgoing: !0,
                                    canHandleLocally: !0
                                }), E.CallCollection.assertGet(r).setState(M.CALL_STATES.OUTGOING_CALLING)
                            }(e, t)
                        }))
                    },
                    sendGroupCallInvite: function(e) {
                        __LOG__(2)`voip:sendGroupCallInvite: ${e.toString()}}`,
                            function(e) {
                                if (!$) return void __LOG__(3)`voip:sendInviteToGroupCall:called before init`;
                                __LOG__(2)`voip:sendInviteToGroupCall: ${e.toString()}`;
                                var t = [],
                                    r = null;
                                D.default.isUser(e) && !e.equals((0, I.getMaybeMeUser)()) && (0, b.getFanOutListJob)([e]).then((function(n) {
                                    var a;
                                    t = re(n, "sendInviteToGroupCall"), r = e.toString({
                                        legacy: !0
                                    }), null === (a = W) || void 0 === a || a.inviteToGroupCallMD(r, t)
                                }))
                            }(e)
                    },
                    endCall: function(e) {
                        var t;
                        if (!$) return __LOG__(3)`voip:endCall:called before init`, n.resolve();
                        B && clearTimeout(B);
                        var r = E.CallCollection.activeCall;
                        return __LOG__(2)`voip:callEnd`, null === (t = W) || void 0 === t || t.end(!0, null != e ? e : ""), r && r.setState(M.CALL_STATES.ENDED), n.resolve()
                    },
                    callEndByHandledRemotely: function(e) {
                        var t;
                        $ ? (__LOG__(2)`voip:callEndByHandledRemotely ${e}`, null === (t = W) || void 0 === t || t.end(!1, e)) : __LOG__(3)`voip:callEndByHandledRemotely:called before init`
                    },
                    acceptCall: function() {
                        if ($)
                            if (E.CallCollection.activeCall) {
                                var e = E.CallCollection.activeCall;
                                Q(e.isVideo).then((function(t) {
                                    if (t && null != e) {
                                        var r;
                                        if (!e || e.getState() !== M.CALL_STATES.INCOMING_RING) return;
                                        __LOG__(2)`voip:acceptCall`, null === (r = W) || void 0 === r || r.acceptCall(!0, _.AvDevices.isVideoAvailable), e.webClientShouldHandle = !0, e.setState(M.CALL_STATES.CONNECTING), le(e.id, !1)
                                    } else q.rejectCall()
                                }))
                            } else __LOG__(3)`voip:acceptCall:call not found`;
                        else __LOG__(3)`voip:acceptCall:called before init`
                    },
                    rejectCall: function() {
                        var e;
                        if ($)
                            if (E.CallCollection.activeCall) {
                                var t = E.CallCollection.activeCall;
                                t && t.getState() === M.CALL_STATES.INCOMING_RING && (__LOG__(2)`voip:rejectCall`, null === (e = W) || void 0 === e || e.rejectCall(), t.webClientShouldHandle = !0, t.setState(M.CALL_STATES.REJECTED))
                            } else __LOG__(3)`voip:rejectCall:call not found`;
                        else __LOG__(3)`voip:rejectCall:called before init`
                    },
                    rejectCallWithoutCallCtx: function(e, t, r, n, a, i) {
                        var l;
                        null === (l = W) || void 0 === l || l.rejectCallWithoutCallCtx(e, !1, t, r, n, a, i)
                    },
                    processMissedIncomingCallMaxRetry: function(e) {
                        w.generateMissedCallLog(e.call_creator, e.t, !!e.isVideoCall, !1);
                        var t = {
                            callResult: x.default.CALL_RESULT_TYPE.CALL_REJECTED_E2E,
                            callSide: x.default.CALL_SIDE.CALLEE,
                            callTestBucket: "",
                            videoEnabled: !!e.isVideoCall,
                            callPeerPlatform: e.peer_platform,
                            callPeerAppVersion: e.peer_app_version,
                            callOfferElapsedT: e.elapsed_msec
                        };
                        null == e.peer_platform && delete t.callPeerPlatform, null == e.peer_app_version && delete t.callPeerAppVersion, null == e.elapsed_msec && delete t.callOfferElapsedT, new x.default.Call(t).commit()
                    },
                    mute: function(e) {
                        var t;
                        __LOG__(2)`voip:mute ${e.toString()}`, null === (t = W) || void 0 === t || t.mute(e)
                    },
                    videoTurnCameraOn: function() {
                        var e;
                        __LOG__(2)`voip:videoTurnCameraOn`, null === (e = W) || void 0 === e || e.videoTurnCameraOn()
                    },
                    videoTurnCameraOff: function() {
                        var e;
                        __LOG__(2)`voip:videoTurnCameraOff`, null === (e = W) || void 0 === e || e.videoTurnCameraOff()
                    },
                    videoStreamPause: function() {
                        var e;
                        __LOG__(2)`voip:videoStreamPause`, null === (e = W) || void 0 === e || e.videoStreamPause()
                    },
                    videoStreamResume: function() {
                        var e;
                        __LOG__(2)`voip:videoStreamResume`, null === (e = W) || void 0 === e || e.videoStreamResume()
                    },
                    updateAudioVideoSwitch: function() {
                        __LOG__(2)`voip:updateAudioVideoSwitch`, W && "function" == typeof W.updateAudioVideoSwitch && W.updateAudioVideoSwitch(!0)
                    },
                    videoRequestUpgrade: function() {
                        __LOG__(2)`voip:videoRequestUpgrade`, Q(!0).then((function(e) {
                            var t;
                            e && (null === (t = W) || void 0 === t || t.videoRequestUpgrade())
                        }))
                    },
                    videoAcceptUpgrade: function() {
                        __LOG__(2)`voip:videoAcceptUpgrade`, Q(!0).then((function(e) {
                            var t, r;
                            e ? null === (t = W) || void 0 === t || t.videoAcceptUpgrade(!0, _.AvDevices.isVideoAvailable) : null === (r = W) || void 0 === r || r.videoRejectUpgrade(M.VideoUpgradeRequestEndedReason.EndedByUser)
                        }))
                    },
                    videoRejectUpgrade: function(e) {
                        var t;
                        __LOG__(2)`voip:videoRejectUpgrade`, null === (t = W) || void 0 === t || t.videoRejectUpgrade(e)
                    },
                    videoCancelUpgrade: function(e) {
                        var t;
                        __LOG__(2)`voip:videoCancelUpgrade`, null === (t = W) || void 0 === t || t.videoCancelUpgrade(e)
                    },
                    updateNetworkMedium: function(e, t) {
                        W && "function" == typeof W.updateNetworkMedium && W.updateNetworkMedium(e, t)
                    },
                    resendEncRekeyRetry: function(e, t) {
                        var r;
                        null === (r = W) || void 0 === r || r.resendEncRekeyRetry({
                            peerDeviceRawJid: e,
                            retryCount: t
                        })
                    },
                    notifyDeviceIdentityChangedOrDeleted: function(e, t) {
                        var r;
                        null === (r = W) || void 0 === r || r.notifyDeviceIdentityChangedOrDeletedMD((0, y.DEVICE_JID)(e), t)
                    },
                    getNumParticipantsFromCallOffer: function(e) {
                        return A.default.send(M.RENDERER_IPC_EVENTS.REQUEST_NUM_PARTICIPANTS, e)
                    }
                };

            function z() {
                return X.apply(this, arguments)
            }

            function X() {
                return (X = (0, o.default)(l.default.mark((function e() {
                    var t, a, i, o, u, c;
                    return l.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (k.isVoiceCallEnabled()) {
                                    e.next = 4;
                                    break
                                }
                                return $ = !1, Y.send(M.RENDERER_IPC_EVENTS.ENABLE_VOIP_FEATURES, !1), e.abrupt("return", n.resolve(!1));
                            case 4:
                                if (!$) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", n.resolve(!0));
                            case 6:
                                return W = h.default.require("wavoip"), a = W, j = r(636880), __LOG__(2)`voip:init`, i = k.isVideoCallEnabled(), n.resolve(), u = k.isStatefulEnumerationEnabled(), c = k.isDeviceAgnosticVoip(), __LOG__(2)`voip:init initializing VoIP stack in MD mode`, o = a.init((0, I.assertGetMe)().toString({
                                    legacy: !0,
                                    formatFull: !0
                                }), !0, i, u, c), e.next = 18, o;
                            case 18:
                                return __LOG__(2)`voip:init initialized VoIP stack successfully`, null === (t = j) || void 0 === t || t.init(), $ = !0, q.updateNetworkMedium(M.CallNetworkMedium.CallNetworkMediumWifi, 0), Y.send(M.RENDERER_IPC_EVENTS.ENABLE_VOIP_FEATURES, $), ue(), Z(), e.abrupt("return", $);
                            case 26:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Z() {
                var e;
                null === (e = W) || void 0 === e || e.setScreenSize(1920, 1080)
            }

            function Q(e) {
                return e ? (0, T.checkForMicrophoneAndCameraAccess)() : (0, T.checkForMicrophoneAccess)()
            }

            function ee(e, t, r) {
                __LOG__(2)`voip:outgoing_signaling:${JSON.stringify(e)}:`, (0, O.sendCallSignalingMsg)(e).then(te(t, r)).catch((function() {}))
            }

            function te(e, t) {
                return function(r) {
                    var n, a, i;
                    if ((null == r ? void 0 : r.status) && r.payload) switch (r.status) {
                        case 200:
                            __LOG__(2)`voip:recv:${e}_ack:`;
                            var l = Number(null !== (n = null === (a = r.payload[1]) || void 0 === a ? void 0 : a.error) && void 0 !== n ? n : 0),
                                o = {
                                    peer_jid: t,
                                    type: e,
                                    error: l,
                                    ack: r.payload
                                };
                            null === (i = W) || void 0 === i || i.handleIncomingSignalingAck(o);
                            break;
                        default:
                            __LOG__(2)`voip:recv:accept_ack: Unknown status:${status}`
                    }
                }
            }

            function re(e, t) {
                return e.length > 5 && (0, v.isCallingToPrimarySMBLimitEnabled)() ? (__LOG__(2)`voip:${t}: removing companion device ids because callee has too many devices`, e.filter((function(e) {
                    return !e.isCompanion()
                })).map((function(e) {
                    return e.toString({
                        legacy: !0,
                        formatFull: !0
                    })
                }))) : e.map((function(e) {
                    return e.toString({
                        legacy: !0,
                        formatFull: !0
                    })
                }))
            }

            function ne() {
                null != J && (clearTimeout(J), J = null)
            }

            function ae() {
                null != H && (clearTimeout(H), H = null)
            }

            function ie(e) {
                ae(), H = setTimeout((function() {
                    H = null;
                    var t = E.CallCollection.activeCall;
                    if (t && t.id === e) {
                        var r = t.getState();
                        r === M.CALL_STATES.OUTGOING_RING || r === M.CALL_STATES.OUTGOING_CALLING ? (t.setState(M.CALL_STATES.NOT_ANSWERED), q.endCall()) : r === M.CALL_STATES.INCOMING_RING && q.endCall()
                    }
                }), 45e3)
            }

            function le(e, t) {
                ae(), H = setTimeout((function() {
                    H = null;
                    var r = E.CallCollection.activeCall;
                    r && r.id === e && r.getState() !== M.CALL_STATES.ACTIVE && (r.setState(M.CALL_STATES.FAILED), t ? q.endCall() : q.rejectCall())
                }), 3e4)
            }

            function oe(e, t, r) {
                switch (r) {
                    case M.VideoState.VideoStateUpgradeRequest:
                        ! function(e, t) {
                            ne(), J = setTimeout((function() {
                                J = null, w.isParticipantRequestingVideoUpgrade(e, t) && (t ? q.videoCancelUpgrade(M.VideoUpgradeRequestEndedReason.EndedByTimeout) : q.videoRejectUpgrade(M.VideoUpgradeRequestEndedReason.EndedByTimeout))
                            }), t ? 45e3 : 3e4)
                        }(e, t);
                        break;
                    case M.VideoState.VideoStateEnabled:
                        ne();
                        break;
                    case M.VideoState.VideoStateStopped:
                        J && (__LOG__(4, void 0, new Error, !0)`callUpgradeRequestTimer should be already cleared before video feed stopped`, SEND_LOGS("call-upgrade-timer-error"));
                        break;
                    default:
                        ne()
                }
            }

            function ue() {
                Y.send(M.RENDERER_IPC_EVENTS.ENABLE_VOIP_GROUP_FEATURES, k.isGroupCallEnabled())
            }

            function ce(e) {
                var t = e.callInfo;
                switch (__LOG__(2)`voip:event: "${e.eventStr}" data: `, __LOG__(2)`voip:event: "callInfo: `, e.event) {
                    case M.WACallEvent.CallEnding:
                        if (function(e) {
                                var t = E.CallCollection.activeCall;
                                if (t)
                                    if (e) {
                                        var r = e.call_log_info,
                                            n = Math.floor((999 + Math.max(0, r.call_duration)) / 1e3),
                                            a = 0 === r.caller_status,
                                            i = t.offerTime;
                                        if ((0, v.btmThreadsLoggingEnabled)() && !t.isGroup) {
                                            var l = (0, V.createWid)(r.initial_peer_raw_jid);
                                            (0, C.handleActivitiesForChatThreadLogging)([{
                                                activityType: "voipCall",
                                                ts: i,
                                                chatId: l,
                                                durationInSeconds: n,
                                                outgoing: a
                                            }])
                                        }
                                    } else __LOG__(3)`VoipEventCallback:eventData is null/undefined: ${t.id}`
                            }(e.eventData), e.eventData.call_id && e.eventData.call_log_info.result === M.CALL_LOG_RESULT_TYPE.MISSED) {
                            var r = w.getCallFromCallId(e.eventData.call_id);
                            if (r && !r.outgoing) {
                                var n = e.eventData.call_log_info;
                                w.generateMissedCallLog((0, V.createWid)(n.initial_peer_raw_jid), r.offerTime, n.video_enabled, n.group_call_log_count > 1)
                            }
                        }
                        break;
                    case M.WACallEvent.CallRejectReceived:
                        var a = t && w.getCallFromCallId(t.call_id);
                        a && a.setState(M.CALL_STATES.REJECTED), q.endCall();
                        break;
                    case M.WACallEvent.RejectedDecryptionFailure:
                        try {
                            var l = e.eventData,
                                o = (0, V.createWid)((0, c.default)(l.peer_raw_jid, "eventData.peer_raw_jid")),
                                d = (0, c.default)(l.call_id, "eventData.call_id"),
                                p = new Uint8Array((0, c.default)(l.registration, "eventData.registration")),
                                _ = {
                                    stanzaId: null,
                                    originalMsgId: d,
                                    ts: null,
                                    retryCount: (0, c.default)(l.retry_count, "eventData.retry_count"),
                                    regId: (0, s.convertBytesToUint)(p, 4),
                                    offline: !1,
                                    from: o,
                                    participant: null,
                                    recipient: null,
                                    keyBundle: null
                                };
                            (0, S.handleVoipRetryRequest)(_).then((function(e) {
                                var t;
                                e ? null === (t = W) || void 0 === t || t.resendOfferOnDecryptionFailureMD((0, y.DEVICE_JID)(o), d) : __LOG__(3)`voip: not sending retry offer`
                            })).catch((function() {
                                __LOG__(3)`voip: error while attempting to send retry offer`
                            }))
                        } catch (e) {
                            __LOG__(3)`voip: not retrying offer due to client-side issue`
                        }
                        break;
                    case M.WACallEvent.MediaStreamError:
                    case M.WACallEvent.AudioInitError:
                    case M.WACallEvent.NoSamplingRatesForAudioRecord:
                    case M.WACallEvent.HandleOfferFailed:
                    case M.WACallEvent.P2PTransportCreateFailed:
                    case M.WACallEvent.P2PTransportStartFailed:
                    case M.WACallEvent.MediaStreamStartError:
                    case M.WACallEvent.HandleOfferAckFailed:
                    case M.WACallEvent.HandleAcceptFailed:
                    case M.WACallEvent.HandlePreAcceptFailed:
                    case M.WACallEvent.RelayBindsFailed:
                    case M.WACallEvent.HandleAcceptReceiptFailed:
                    case M.WACallEvent.HandleAcceptAckFailed:
                    case M.WACallEvent.CallAcceptFailed:
                        var g = t && w.getCallFromCallId(t.call_id);
                        g && g.setState(M.CALL_STATES.FAILED), q.endCall();
                        break;
                    case M.WACallEvent.CallOfferNacked:
                        var T = e.eventData.errors;
                        if (!T || !T.length) {
                            __LOG__(4, void 0, new Error)`voip:callOfferNacked: with empty errors`;
                            break
                        }
                        var A = w.getCallFromCallId(null == t ? void 0 : t.call_id);
                        if (!A || !t) {
                            __LOG__(3)`voip:callOfferNackToast: call info not found for callId`;
                            break
                        }
                        var h = T.map((function(e) {
                            return (0, V.createWid)((0, c.default)(e.error_raw_jid, "i.error_raw_jid"))
                        }));
                        w.callOfferNackToast(T[0].code, h, A.isVideo, A.isGroup);
                        var R = (0, I.getMaybeMeUser)(),
                            O = t.participants.filter((function(e) {
                                return e.jid.user !== (null == R ? void 0 : R.user) && !h.some((function(t) {
                                    return t.user === e.jid.user
                                }))
                            })),
                            b = h.some((function(e) {
                                return e.user === (null == R ? void 0 : R.user)
                            })),
                            L = T.some((function(e) {
                                return 432 === e.code
                            }));
                        (0 === O.length || b || L) && (A && A.setState(M.CALL_STATES.ENDED), __LOG__(2)`voip:callOfferNacked: Ending call`, q.endCall());
                        break;
                    case M.WACallEvent.FieldstatsReady:
                        var m = e.eventData;
                        if (null == m ? void 0 : m.call_ended_stats) {
                            var k = {};
                            (0, u.default)(m.call_ended_stats, (function(e, t) {
                                var r, n = t;
                                switch (r = "string" == typeof e ? e : isNaN(e) ? null : e, t) {
                                    case "abtest_bucket":
                                        n = "call_test_bucket"
                                }
                                var a = function(e) {
                                    var t = e.split("_");
                                    if (t.length <= 1) return e;
                                    for (var r = 1; r < t.length; r += 1) t[r] = (0, f.default)(t[r]);
                                    return t.join("")
                                }(n);
                                try {
                                    "boolean" === x.default.METRICS.getEvent("Call", a).type ? k[a] = !!e : k[a] = r
                                } catch (e) {
                                    __LOG__(4, void 0, new Error)`voip:fieldstats ready: metric undefined for ${a}`
                                }
                            })), new x.default.Call(k).commit()
                        }
                        break;
                    case M.WACallEvent.CallMissed:
                        var N = e.eventData;
                        if (N) {
                            var D = !!N.is_video_call,
                                U = N.group_info.count > 1,
                                F = (Date.now() - N.time_elapsed_since_call_offer) / 1e3;
                            w.generateMissedCallLog((0, V.createUserWid)(N.peer_user_jid.user, N.peer_user_jid.server), F, D, U);
                            var j = {
                                    callPeerPlatform: M.PlatformTypeMapping[N.peer_platform],
                                    callPeerAppVersion: N.peer_app_version,
                                    callOfferElapsedT: N.time_elapsed_since_call_offer,
                                    callWakeupSource: N.call_wakeup_source,
                                    callTestBucket: N.abtest_bucket,
                                    videoEnabled: D,
                                    callResult: x.default.CALL_RESULT_TYPE.MISSED,
                                    callSide: x.default.CALL_SIDE.CALLEE
                                },
                                Y = U ? {
                                    groupCallIsLastSegment: !0,
                                    groupCallIsGroupCallInvitee: !0,
                                    numConnectedParticipants: N.group_info.count,
                                    fieldStatsRowType: x.default.FIELD_STATS_ROW_TYPE.SELF
                                } : {};
                            new x.default.Call((0, i.default)((0, i.default)({}, j), Y)).commit()
                        }
                        break;
                    case M.WACallEvent.RxTrafficStopped:
                        var K = t && w.getCallFromCallId(t.call_id);
                        K && K.setState(M.CALL_STATES.CONNECTION_LOST);
                        break;
                    case M.WACallEvent.RxTrafficStarted:
                        var $ = t && w.getCallFromCallId(t.call_id);
                        $ && $.getState() === M.CALL_STATES.CONNECTION_LOST && (H && (__LOG__(4, void 0, new Error, !0)`callOfferTimer should be already cleared before traffic restored`, SEND_LOGS("call-state-error")), $.setState(M.CALL_STATES.ACTIVE));
                        break;
                    case M.WACallEvent.RTCPByeReceived:
                    case M.WACallEvent.RxTimeout:
                    case M.WACallEvent.TxTimeout:
                        __LOG__(2)`voip:event: Timeout: end the call, set call state to ENDED`;
                        var B = t && w.getCallFromCallId(t.call_id);
                        B && B.setState(M.CALL_STATES.ENDED), q.endCall();
                        break;
                    case M.WACallEvent.SoundPortCreateFailed:
                        P.soundPortErrorModal(), q.refresh();
                        break;
                    case M.WACallEvent.VideoPortCreateFailed:
                        P.videoPortErrorModal(), q.refresh();
                        break;
                    case M.WACallEvent.CallStateChanged:
                        var J = e.eventData,
                            z = J.call_state;
                        if (!J.call_id) return;
                        var X = w.getCallFromCallId(J.call_id);
                        if (!X) return;
                        switch (z !== M.WACallState.WACallStateNone && t && (X.callInfo = w.parseCallInfo(t)), __LOG__(2)`voip:event: Call State:`, z) {
                            case M.WACallState.WACallStateNone:
                                X.setState(M.CALL_STATES.ENDED), E.CallCollection.setActiveCall(null), E.CallCollection.remove(X), __LOG__(2)`voip:call_collection: Active Call set to null due to call end:`;
                                break;
                            case M.WACallState.WACallStateCalling:
                                X.setState(M.CALL_STATES.OUTGOING_CALLING), E.CallCollection.activeCall || E.CallCollection.setActiveCall(X);
                                break;
                            case M.WACallState.WACallStatePreacceptReceived:
                                X.setState(M.CALL_STATES.OUTGOING_RING), E.CallCollection.activeCall || E.CallCollection.setActiveCall(X);
                                break;
                            case M.WACallState.WACallStateAcceptReceived:
                                X.setState(M.CALL_STATES.CONNECTING), E.CallCollection.activeCall || E.CallCollection.setActiveCall(X);
                                break;
                            case M.WACallState.WACallStateReceivedCall:
                                X.setState(M.CALL_STATES.INCOMING_RING), E.CallCollection.activeCall || E.CallCollection.setActiveCall(X);
                                break;
                            case M.WACallState.WACallStateCallActive:
                                ae(), X.setState(M.CALL_STATES.ACTIVE), E.CallCollection.activeCall || E.CallCollection.setActiveCall(X)
                        }
                        break;
                    case M.WACallEvent.GroupInfoChanged:
                        w.updateCallWithCallInfo(t);
                        break;
                    case M.WACallEvent.SelfVideoStateChanged:
                        var Z = e.eventData;
                        if (!t || !t.call_id) return;
                        w.updateCallWithCallInfo(t), oe(t.call_id, !0, Z);
                        break;
                    case M.WACallEvent.PeerVideoStateChanged:
                        var Q = e.eventData;
                        if (!t || !t.call_id) return;
                        w.updateCallWithCallInfo(t), oe(t.call_id, !1, Q);
                        break;
                    case M.WACallEvent.VideoRenderStarted:
                    case M.WACallEvent.MuteStateChanged:
                    case M.WACallEvent.VideoRenderFormatChanged:
                    case M.WACallEvent.VideoPreviewReady:
                        w.updateCallWithCallInfo(t);
                        break;
                    case M.WACallEvent.PendingCallAutoRejected:
                        break;
                    case M.WACallEvent.SyncDevices:
                        (0, G.default)(e.eventData.users);
                        break;
                    case M.WACallEvent.CallAutoConnect:
                        break;
                    default:
                        __LOG__(2)`voip:event: Unknown Event:`
                }
            }
            t.Voip = q, Y.on(M.MAIN_IPC_EVENTS.EVENT, (function(e, t) {
                return ce(t)
            })), Y.on(M.MAIN_IPC_EVENTS.SIGNALING, (function(e, t) {
                return function(e) {
                    var t, r, n = e.callId,
                        a = e.peerJid,
                        i = e.payload,
                        l = i[0],
                        o = {
                            type: l,
                            call_id: n,
                            peer_jid: a
                        },
                        u = {
                            common: o,
                            payload: i
                        },
                        c = N.TYPE_STR;
                    switch (__LOG__(2)`voip:signallingCallback: type:"${l}" payload:`, l) {
                        case c.OFFER:
                            B = setTimeout((function() {
                                B = null, (0, O.sendCallOffer)(u).then((function(e) {
                                    if (null == e ? void 0 : e.status) {
                                        var t = E.CallCollection.get(n);
                                        switch (e.status) {
                                            case 200:
                                                if (e.payload) {
                                                    var r, a, i, l = Number(null !== (r = null === (a = e.payload[1]) || void 0 === a ? void 0 : a.error) && void 0 !== r ? r : 0);
                                                    __LOG__(2)`voip:recv:offerAck:`;
                                                    var u = {
                                                        peer_jid: o.peer_jid,
                                                        type: "offer",
                                                        error: l,
                                                        ack: e.payload
                                                    };
                                                    null === (i = W) || void 0 === i || i.handleIncomingSignalingAck(u)
                                                } else __LOG__(2)`voip:recv:offer_ack: no payload`;
                                                break;
                                            case 409:
                                                __LOG__(2)`voip:recv:offer_ack: phone_busy`, t && t.setState(M.CALL_STATES.REMOTE_CALL_IN_PROGRESS);
                                                break;
                                            default:
                                                __LOG__(2)`voip:recv:offerAck: Unknown status:${status}`
                                        }
                                    }
                                })).catch((function() {}))
                            }), 500);
                            break;
                        case c.ENC_REKEY:
                            (0, O.sendEncRekey)(u).then(te(c.ENC_REKEY, a)).catch((function() {}));
                            break;
                        case c.REJECT:
                            (null === (t = i[1]) || void 0 === t ? void 0 : t.reason) === N.ENC_RETRY_RECEIPT_ATTRS.SINGLE_PARTICIPANT ? (0, O.prepareRetryReceipt)(i).then((function() {
                                ee(u, l, a)
                            })).catch((function() {
                                __LOG__(3)`voip:retry_receipt could not generate keys section`
                            })) : ee(u, l, a);
                            break;
                        case c.RECEIPT:
                            (null === (r = i[1]) || void 0 === r ? void 0 : r.type) === N.ENC_RETRY_RECEIPT_ATTRS.GROUP_CALL ? (0, O.prepareRetryReceipt)(i).then((function() {
                                ee(u, l, a)
                            })).catch((function() {
                                __LOG__(3)`voip:retry_receipt could not generate keys section`
                            })) : ee(u, l, a);
                            break;
                        default:
                            ee(u, l, a)
                    }
                }(t)
            })), Y.on(M.MAIN_IPC_EVENTS.LOGGING, (function(e, t) {
                return function(e) {
                    if (Array.isArray(e.data) && !(e.data.length < 1))
                        for (var t = 0; t < e.data.length; t++) __LOG__(2)`voip log: ${e.data[t]}`
                }(t)
            })), Y.on(M.MAIN_IPC_EVENTS.LOG_PATH, (function(e, t) {
                var r;
                null === (r = W) || void 0 === r || r.setLogPath(t)
            }))
        },
        163697: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleIncomingSignalingMessage = function(e, t) {
                var l = n.CallCollection.get(e.call_id);
                if (!l) return void __LOG__(3)`voip:voip_common_disabled: Received signaling msg type ${e.type} but could not find call for call ID`;
                switch (e.type) {
                    case a.TYPE.OFFER:
                        null != e.t && (l.offerTime = e.t), l.isVideo = !!e.isVideoCall, l.setState(i.CALL_STATES.INCOMING_RING);
                        break;
                    case a.TYPE.TERMINATE:
                        switch (l.setState(i.CALL_STATES.ENDED), t.payload[1].reason) {
                            case "timeout":
                                null == o && (o = r(394785)), o.generateMissedCallLog(e.call_creator, l.offerTime, l.isVideo, !1)
                        }
                }
            };
            var n = r(970280),
                a = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = l(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                        } n.default = e, r && r.set(e, n);
                    return n
                }(r(216996)),
                i = r(151853);

            function l(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (l = function(e) {
                    return e ? r : t
                })(e)
            }
            var o = null
        },
        236996: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = (0, a.randomHex)(16).substr(0, 64);
                return __LOG__(2)`voip:generateCallId: ${e}`, e
            };
            var a = r(880611);
            n(r(442435))
        },
        216996: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TYPE_STR = t.TYPE_NAME = t.TYPE = t.ENC_RETRY_RECEIPT_ATTRS = void 0;
            t.TYPE = {
                NONE: 0,
                OFFER: 1,
                OFFER_RECEIPT: 2,
                ACCEPT: 3,
                REJECT: 4,
                TERMINATE: 5,
                TRANSPORT: 6,
                OFFER_ACK: 7,
                OFFER_NACK: 8,
                RELAY_LATENCY: 9,
                RELAY_ELECTION: 10,
                INTERRUPTION: 11,
                MUTE: 12,
                PREACCEPT: 13,
                ACCEPT_RECEIPT: 14,
                VIDEO_STATE: 15,
                NOTIFY: 16,
                GROUP_INFO: 17,
                ENC_REKEY: 18,
                PEER_STATE: 19,
                VIDEO_STATE_ACK: 20,
                FLOW_CONTROL: 21,
                WEB_CLIENT: 22,
                ACCEPT_ACK: 23,
                GROUP_UPDATE: 24,
                OFFER_NOTICE: 25,
                MAX: 26
            };
            t.TYPE_STR = {
                OFFER: "offer",
                ACCEPT: "accept",
                ENC_REKEY: "enc_rekey",
                REJECT: "reject",
                RECEIPT: "receipt",
                OFFER_NOTICE: "offer_notice"
            };
            t.TYPE_NAME = ["NONE", "OFFER", "OFFER_RECEIPT", "ACCEPT", "REJECT", "TERMINATE", "TRANSPORT", "OFFER_ACK", "OFFER_NACK", "RELAY_LATENCY", "RELAY_ELECTION", "INTERRUPTION", "MUTE", "PREACCEPT", "ACCEPT_RECEIPT", "VIDEO_STATE", "NOTIFY", "GROUP_INFO", "ENC_REKEY", "PEER_STATE", "VIDEO_STATE_ACK", "FLOW_CONTROL", "WEB_CLIENT", "ACCEPT_ACK", "GROUP_UPDATE", "OFFER_NOTICE", "MAX"];
            t.ENC_RETRY_RECEIPT_ATTRS = {
                SINGLE_PARTICIPANT: "enc",
                GROUP_CALL: "enc_rekey_retry"
            }
        },
        478077: (e, t, r) => {
            "use strict";
            var n = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MAX_RETRY = void 0, t.maybePostMessageHighRetryCountMetric = function() {
                return d.apply(this, arguments)
            };
            var a = n(r(887757)),
                i = n(r(348926)),
                l = r(996228),
                o = r(858866),
                u = r(611222),
                c = n(r(229677)),
                s = r(874904);

            function d() {
                return (d = (0, i.default)(a.default.mark((function e(t, r) {
                    var n, i, l, d, f;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(t < 5)) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (n = new c.default.MessageHighRetryCount({
                                        retryCount: t
                                    }), null != (i = p(r.type)) && (n.messageType = i), null != (l = (0, s.getWamE2eSenderType)(r.author)) && (n.e2eSenderType = l), !(null == (d = r.chat) ? void 0 : d.isGroup())) {
                                    e.next = 14;
                                    break
                                }
                                return e.next = 11, (0, u.getGroupMetrics)(d);
                            case 11:
                                null != (null == (f = e.sent) ? void 0 : f.deviceSizeBucket) && (n.deviceSizeBucket = f.deviceSizeBucket), null != (null == f ? void 0 : f.participantCount) && f.participantCount > (0, o.getGroupSizeBypassingSampling)() && (n.weight = 0);
                            case 14:
                                n.commit();
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function p(e) {
                switch (e) {
                    case l.MESSAGE_TYPE.CHAT:
                        return c.default.MESSAGE_TYPE.INDIVIDUAL;
                    case l.MESSAGE_TYPE.GROUP:
                        return c.default.MESSAGE_TYPE.GROUP;
                    case l.MESSAGE_TYPE.PEER_BROADCAST:
                    case l.MESSAGE_TYPE.OTHER_BROADCAST:
                        return c.default.MESSAGE_TYPE.BROADCAST;
                    case l.MESSAGE_TYPE.DIRECT_PEER_STATUS:
                    case l.MESSAGE_TYPE.OTHER_STATUS:
                        return c.default.MESSAGE_TYPE.STATUS;
                    default:
                        return null
                }
            }
            t.MAX_RETRY = 5
        },
        840285: (e, t, r) => {
            "use strict";
            var n = r(263026).default,
                a = r(85473);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.checkForMicrophoneAccess = function() {
                return y("microphone")
            }, t.checkForMicrophoneAndCameraAccess = function() {
                return n.all([y("microphone"), y("camera")]).then((function(e) {
                    return e.every((function(e) {
                        return e
                    }))
                }))
            }, t.prepareForCameraAccessCheck = function() {
                return function() {
                    return g.apply(this, arguments)
                }("camera")
            };
            var i = a(r(754815)),
                l = a(r(919882)),
                o = r(330782),
                u = a(r(73380)),
                c = r(628707),
                s = r(548360),
                d = r(404186),
                p = r(785893),
                f = u.default.require("ElectronApp"),
                _ = window.Native,
                v = _.openSysPrefs,
                E = _.sysPrefGetMediaAccessStatus,
                C = _.sysPrefAskForMediaAccess;

            function y(e) {
                var t = E(e);
                return "not-determined" === t || "unknown" === t ? f.focus({
                    steal: !0
                }).then((function() {
                    return function(e) {
                        return C(e).catch((function() {
                            return !1
                        }))
                    }(e).then((function(t) {
                        return __LOG__(2)`Media access to ${e} is ${t?"granted":"denied"}`, t || T(e), t
                    }))
                })) : (__LOG__(2)`Media access to ${e} is ${t}`, "denied" === t || "restricted" === t ? (f.focus({
                    steal: !0
                }).then((function() {
                    return T(e)
                })), n.resolve(!1)) : n.resolve(!0))
            }

            function g() {
                return (g = (0, l.default)(i.default.mark((function e(t) {
                    var r;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ("not-determined" !== (r = E(t)) && "unknown" !== r) {
                                    e.next = 4;
                                    break
                                }
                                return e.next = 4, f.focus({
                                    steal: !0
                                });
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function T(e) {
                "microphone" === e ? c.ModalManager.open((0, p.jsx)(d.ConfirmPopup, {
                    title: s.fbt._("Allow WhatsApp to access your microphone?", null, {
                        hk: "4s8KQs"
                    }),
                    okText: s.fbt._("Go To Settings", null, {
                        hk: "1f0Rs6"
                    }),
                    onOK: function() {
                        v(o.SysPrefLinksType.PRIVACY_MICROPHONE), c.ModalManager.close()
                    },
                    cancelText: s.fbt._("Not Now", null, {
                        hk: "3nAclV"
                    }),
                    onCancel: function() {
                        c.ModalManager.close()
                    },
                    children: (0, p.jsx)("div", {
                        children: s.fbt._("WhatsApp needs a microphone for calls and voice messages. Allow access in your computer's settings.", null, {
                            hk: "4e9lF"
                        })
                    })
                })) : c.ModalManager.open((0, p.jsx)(d.ConfirmPopup, {
                    title: s.fbt._("Allow WhatsApp to access your camera?", null, {
                        hk: "1a6B1l"
                    }),
                    okText: s.fbt._("Go To Settings", null, {
                        hk: "1f0Rs6"
                    }),
                    onOK: function() {
                        v(o.SysPrefLinksType.PRIVACY_CAMERA), c.ModalManager.close()
                    },
                    cancelText: s.fbt._("Not Now", null, {
                        hk: "3nAclV"
                    }),
                    onCancel: function() {
                        c.ModalManager.close()
                    },
                    children: (0, p.jsx)("div", {
                        children: s.fbt._("WhatsApp needs a camera for video calls and taking photos. Allow access in your computer's settings.", null, {
                            hk: "bs1nr"
                        })
                    })
                }))
            }
        },
        330782: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SysPrefLinksType = void 0;
            var n = r(76672)({
                PRIVACY_CAMERA: 1,
                PRIVACY_MICROPHONE: 2
            });
            t.SysPrefLinksType = n
        },
        208893: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.prepareRetryReceipt = function(e) {
                return (0, r(677383).Z)(e)
            }, t.sendCallOffer = function(e) {
                return (0, r(769604).Z)(e, n.TYPE.OFFER)
            }, t.sendCallSignalingMsg = function(e) {
                return (0, r(899574).Z)(e)
            }, t.sendEncRekey = function(e) {
                return (0, r(769604).Z)(e, n.TYPE.ENC_REKEY)
            };
            var n = r(216996)
        }
    }
]);