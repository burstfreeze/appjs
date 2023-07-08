/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [4582], {
        790167: (e, t, r) => {
            "use strict";
            var a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleMessageRetryRequest = function(e) {
                var t = C.default.parse(e);
                if (t.error) return __LOG__(4, void 0, new Error)`Parsing Error: ${t.error.toString()}`, Promise.reject(t.error);
                var r = t.success,
                    a = r.from,
                    o = r.participant,
                    s = r.recipient,
                    u = r.retryCount,
                    d = r.stanzaId;
                if (null == d) return __LOG__(3)`Received null stanzaID when handling message retry request`, Promise.reject((0, y.default)("Received null stanzaID when handling message retry request"));
                var v = (0, l.wap)("ack", {
                        id: (0, l.CUSTOM_STRING)(d),
                        to: (0, c.JID)(a),
                        participant: o ? (0, c.DEVICE_JID)(o) : l.DROP_ATTR,
                        class: "receipt",
                        type: "retry"
                    }),
                    g = b(a, s);
                if (!g) return Promise.resolve(v);
                return (0, p.handleMessage)(String(g), !1, (0, i.default)(n.default.mark((function e() {
                    var t, i, l, c, d, p;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, A(r);
                            case 2:
                                if (null != (t = e.sent)) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return", v);
                            case 5:
                                return i = t.originalMsgId, l = t.chat, c = t.requester, d = t.identityRowId, e.prev = 6, e.next = 9, (0, f.getMsgIfAuthorized)(i, l, c, u, d);
                            case 9:
                                if (p = e.sent) {
                                    e.next = 13;
                                    break
                                }
                                return __LOG__(3)`handleMessageRetryRequest msg retry not authorized`, e.abrupt("return", v);
                            case 13:
                                return e.next = 15, (0, S.sendRetry)(a, o, s, p, u);
                            case 15:
                                e.next = 20;
                                break;
                            case 17:
                                e.prev = 17, e.t0 = e.catch(6), __LOG__(3)`handleMessageRetryRequest error: ${e.t0}`;
                            case 20:
                                return e.abrupt("return", v);
                            case 21:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [6, 17]
                    ])
                }))))
            }, t.handleVoipRetryRequest = function() {
                return P.apply(this, arguments)
            };
            var n = a(r(887757)),
                i = a(r(348926)),
                o = r(941866),
                l = r(985044),
                s = r(846335),
                c = r(908112),
                u = r(63962),
                d = r(16410),
                p = r(625479),
                v = r(478077),
                f = r(643972),
                C = a(r(133793)),
                g = r(4775),
                S = r(806727),
                E = r(412703),
                _ = r(632171),
                T = r(228277),
                R = r(447853),
                m = r(95422),
                y = a(r(580845));

            function P() {
                return (P = (0, i.default)(n.default.mark((function e(t) {
                    var r;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, A(t);
                            case 2:
                                return r = e.sent, e.abrupt("return", null != r);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function A() {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = (0, i.default)(n.default.mark((function e(t) {
                    var r, a, l, c, p, C, S, T, m;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = t.originalMsgId, a = t.from, l = t.participant, c = t.recipient, p = t.retryCount, C = t.offline, !(p >= v.MAX_RETRY)) {
                                    e.next = 4;
                                    break
                                }
                                return __LOG__(2)`handleRetryRequest refusing retry attempt #${p}`, e.abrupt("return");
                            case 4:
                                if (S = b(a, c)) {
                                    e.next = 8;
                                    break
                                }
                                return __LOG__(3)`handleRetryRequest: no chat found for incoming retry request.`, e.abrupt("return");
                            case 8:
                                if (T = S.isUser() ? a : l) {
                                    e.next = 12;
                                    break
                                }
                                return __LOG__(3)`handleRetryRequest: no requester found for incoming retry request.`, e.abrupt("return");
                            case 12:
                                return m = T.device || 0, e.prev = 13, e.next = 16, (0, s.hasDevice)(T, m);
                            case 16:
                                if (e.sent) {
                                    e.next = 21;
                                    break
                                }
                                return __LOG__(3)`handleRetryRequest: no device ${m} found for ${T.user} for incoming retry request .`, new d.MdRetryFromUnknownDeviceWamEvent({
                                    offline: C,
                                    senderType: m === o.DEFAULT_DEVICE_ID ? R.DEVICE_TYPE.PRIMARY : R.DEVICE_TYPE.COMPANION
                                }).commit(), e.abrupt("return");
                            case 21:
                                return e.next = 23, g.sendMsgQueueMap.enqueue(S.toString(), (0, i.default)(n.default.mark((function e() {
                                    var a;
                                    return n.default.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, (0, f.updateLocalSession)(S, t);
                                            case 2:
                                                return e.next = 4, (0, u.ensureE2ESessions)([T]);
                                            case 4:
                                                return e.next = 6, (0, _.getPersistSignalProtocolStore)().getIdentityRowId((0, E.createSignalAddress)(T).toString());
                                            case 6:
                                                return a = e.sent, e.abrupt("return", {
                                                    originalMsgId: r,
                                                    chat: S,
                                                    requester: T,
                                                    identityRowId: a
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
                return e.isUser() ? (0, m.toUserWid)(e).equals((0, T.getMeUser)()) ? t || (__LOG__(3)`getActualChatId: from is a peer device, but without recipient`, null) : (0, m.toUserWid)(e) : e
            }
        },
        643972: (e, t, r) => {
            "use strict";
            var a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getMsgIfAuthorized = function() {
                return T.apply(this, arguments)
            }, t.processKeyBundle = R, t.updateLocalSession = function() {
                return y.apply(this, arguments)
            };
            var n = a(r(81109)),
                i = a(r(887757)),
                o = a(r(348926)),
                l = r(762477),
                s = r(182705),
                c = r(597528),
                u = r(384128),
                d = a(r(773467)),
                p = r(752550),
                v = r(154553),
                f = r(435520),
                C = r(617624),
                g = r(228277),
                S = r(447853),
                E = r(95422),
                _ = a(r(580845));

            function T() {
                return (T = (0, o.default)(i.default.mark((function e(t, r, a, n, o) {
                    var s, C, E, _, T, R, m, y, P, A;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return s = (0, g.getMaybeMeLidUser)(), C = (0, g.getMeUser)(), E = a.isLid() && null != s ? s : C, _ = new d.default({
                                    id: t,
                                    remote: r,
                                    fromMe: !0,
                                    participant: r.isUser() ? void 0 : E
                                }), e.next = 6, (0, f.getMessageTable)().get(String(_));
                            case 6:
                                if (T = e.sent) {
                                    e.next = 10;
                                    break
                                }
                                return __LOG__(3)`getMsgIfAuthorized: can not find msg ${_.toString()}.`, e.abrupt("return", null);
                            case 10:
                                if (null != (R = T.type === v.MSG_TYPE.REVOKED ? T.protocolMessageRowId : T.rowId)) {
                                    e.next = 14;
                                    break
                                }
                                return __LOG__(3)`getMsgIfAuthorized: msg missing rowId ${_.toString()}.`, e.abrupt("return", null);
                            case 14:
                                return e.next = 16, (0, l.isRetryEligible)(_, a, o, R);
                            case 16:
                                return m = e.sent, __LOG__(2, void 0, void 0, void 0, ["messaging"])`getMsgIfAuthorized: ${t}, ${String(a)} retry eligibility ${m}`, y = new p.Msg((0, c.messageFromDbRow)(T)), e.next = 21, y.waitForPrep();
                            case 21:
                                P = !1, A = S.RETRY_REJECT_REASON.OTHER, y.type === v.MSG_TYPE.REVOKED && (P = !0, y.type = "protocol", y.subtype = "admin" === y.subtype ? "admin_revoke" : "sender_revoke"), e.t0 = m, e.next = e.t0 === l.RetryEligibilityResult.ELIGIBLE ? 27 : e.t0 === l.RetryEligibilityResult.INELIGIBLE_ALREADY_DELIVERED ? 28 : e.t0 === l.RetryEligibilityResult.INELIGIBLE_CHANGED_IDENTITY ? 30 : 32;
                                break;
                            case 27:
                                return e.abrupt("return", y);
                            case 28:
                                return A = S.RETRY_REJECT_REASON.DOUBLE_CHECKMARK, e.abrupt("break", 34);
                            case 30:
                                return A = S.RETRY_REJECT_REASON.IDENTITY_CHANGE, e.abrupt("break", 34);
                            case 32:
                                return A = S.RETRY_REJECT_REASON.OTHER, e.abrupt("break", 34);
                            case 34:
                                return new u.E2eRetryRejectWamEvent({
                                    senderDeviceType: a.isCompanion() ? S.DEVICE_TYPE.COMPANION : S.DEVICE_TYPE.PRIMARY,
                                    messageType: y.getWamMessageType(),
                                    msgRetryCount: n,
                                    retryRevoke: P,
                                    retryRejectReason: A
                                }).commit(), e.abrupt("return", null);
                            case 36:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function R() {
                return m.apply(this, arguments)
            }

            function m() {
                return (m = (0, o.default)(i.default.mark((function e(t, r, a, o, l) {
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (null != a && t && t.key) {
                                    e.next = 3;
                                    break
                                }
                                return __LOG__(2)`processKeyBundle: skip due to missing key bundle`, e.abrupt("return", !1);
                            case 3:
                                if (!l) {
                                    e.next = 20;
                                    break
                                }
                                if (null != o) {
                                    e.next = 11;
                                    break
                                }
                                return __LOG__(2)`processKeyBundle: missing session for retry`, e.next = 8, C.Session.deleteRemoteInfo(r);
                            case 8:
                                return e.abrupt("return", !1);
                            case 11:
                                if (o === a) {
                                    e.next = 16;
                                    break
                                }
                                return __LOG__(2)`processKeyBundle: delete session because reg does not match, saved: ${o}, received: ${a}`, e.next = 15, C.Session.deleteRemoteInfo(r);
                            case 15:
                                return e.abrupt("return", !1);
                            case 16:
                                return __LOG__(2)`processKeyBundle: update local session with the retry key bundle`, e.next = 19, C.Session.createSignalSession((0, n.default)({
                                    wid: r,
                                    regId: a
                                }, t));
                            case 19:
                                return e.abrupt("return", !0);
                            case 20:
                                return __LOG__(2)`processKeyBundle: update local session with the retry key bundle`, e.next = 23, C.Session.createSignalSession((0, n.default)({
                                    wid: r,
                                    regId: a
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

            function y() {
                return (y = (0, o.default)(i.default.mark((function e(t, a) {
                    var n, o, l, c, u, d, p, v, f, S, T;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = a.from, o = a.keyBundle, l = a.offline, c = a.originalMsgId, u = a.participant, d = a.regId, p = a.retryCount, v = u || n, __LOG__(2)`updateLocalSession: retryCount: ${p}, offline: ${l.toString()}, has keyBundle: ${(!!o).toString()}`, t.isGroup() && (f = r(202908).ChatCollection.get(t)) && v && (0, s.markForgetSenderKey)(f.id, [v]), e.next = 6, C.Session.getRemoteRegId(v);
                            case 6:
                                if (S = e.sent, !(0, E.toUserWid)(v).equals((0, g.getMeUser)()) || S === d) {
                                    e.next = 9;
                                    break
                                }
                                throw (0, _.default)(`updateLocalSession: detect registration Id change remote: ${d}, local: ${String(S)} for peer device`);
                            case 9:
                                return e.next = 11, R(o, v, d, S, l);
                            case 11:
                                if (e.sent) {
                                    e.next = 17;
                                    break
                                }
                                if (null == S || S === d) {
                                    e.next = 17;
                                    break
                                }
                                return __LOG__(2)`updateLocalSession: delete session because reg does not match, saved: ${S}, received: ${d}`, e.next = 17, C.Session.deleteRemoteSession(v);
                            case 17:
                                if (p !== (T = 2)) {
                                    e.next = 22;
                                    break
                                }
                                return e.abrupt("return", C.Session.saveSessionBaseKey(v, c));
                            case 22:
                                if (!(p > T)) {
                                    e.next = 29;
                                    break
                                }
                                return e.next = 25, C.Session.hasSameBaseKey(v, c);
                            case 25:
                                if (!e.sent) {
                                    e.next = 29;
                                    break
                                }
                                return __LOG__(2)`updateLocalSession: delete local session due to same base key`, e.abrupt("return", C.Session.deleteRemoteSession(v));
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
            var a = r(780561),
                n = r(171755),
                i = r(228277),
                o = new a.WapParser("retryRequestParser", (function(e) {
                    e.assertTag("receipt"), e.assertAttr("type", "retry"), e.hasAttr("to") && e.assertAttr("to", (0, i.assertGetMe)().toJid());
                    var t = (0, n.jidWithTypeToWid)(e.attrJidWithType("from")),
                        r = e.hasAttr("participant") ? (0, n.deviceJidToDeviceWid)(e.attrDeviceJid("participant")) : null,
                        a = e.hasAttr("recipient") ? (0, n.deviceJidToUserWid)(e.attrDeviceJid("recipient")) : null,
                        o = e.child("retry"),
                        l = e.maybeChild("keys"),
                        s = null;
                    if (null != l) {
                        var c, u = l.child("skey"),
                            d = l.child("key");
                        s = {
                            identity: l.child("identity").contentBytes(32),
                            deviceIdentity: null === (c = l.maybeChild("device-identity")) || void 0 === c ? void 0 : c.contentBytes(),
                            skey: {
                                id: u.child("id").contentUint(3),
                                pubkey: u.child("value").contentBytes(32),
                                signature: u.child("signature").contentBytes(64)
                            },
                            key: {
                                id: d.child("id").contentUint(3),
                                pubkey: d.child("value").contentBytes(32)
                            }
                        }
                    }
                    return {
                        stanzaId: e.attrString("id"),
                        originalMsgId: o.attrString("id"),
                        ts: e.attrTime("t"),
                        retryCount: o.hasAttr("count") ? o.attrInt("count") : 0,
                        regId: e.child("registration").contentUint(4),
                        offline: e.hasAttr("offline"),
                        from: t,
                        participant: r,
                        recipient: a,
                        keyBundle: s
                    }
                }));
            t.default = o
        },
        754745: (e, t, r) => {
            "use strict";
            var a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RetryReason = void 0, t.getRetryReasonFromError = function(e) {
                if (e instanceof C.UnknownDeviceMessageError) return A.UnknownCompanionNoPrekey;
                if (e instanceof S.SignalDecryptionError)
                    if ((0, f.isCryptoLibraryEnabled)()) switch (e.message) {
                        case "errSignalNoSession":
                        case "errLoadSenderKeySession":
                            return A.SignalErrorNoSession;
                        case "errSignalInvalidMsg":
                            return A.SignalErrorInvalidMessage;
                        case "errSignalInvalidKey":
                            return A.SignalErrorInvalidKey;
                        case "errSignalTooManyMessagesInFuture":
                        case "errSignalGrpTooManyMessagesInFuture":
                            return A.SignalErrorFutureMessage;
                        case "errInvalidMacWithDecryptedPlaintext":
                        case "errInvalidMacInvalidCipherKey":
                        case "errInvalidMacInvalidCipherKeyNewChain":
                            return A.SignalErrorBadMac
                    } else if (e.toString().includes("No session found to decrypt message")) return A.SignalErrorNoSession
            }, t.prepareKeysForRetry = b, t.sendRetryReceipt = function() {
                return h.apply(this, arguments)
            };
            var n = a(r(887757)),
                i = a(r(963038)),
                o = a(r(348926)),
                l = r(115066),
                s = r(985044),
                c = r(366639),
                u = r(646804),
                d = r(908112),
                p = a(r(442435)),
                v = r(27531),
                f = r(18196),
                C = r(470523),
                g = r(858866),
                S = r(585987),
                E = r(883223),
                _ = r(632171),
                T = r(237723),
                R = r(429047),
                m = r(228277),
                y = r(95422),
                P = a(r(580845)),
                A = r(76672)({
                    UnknownError: 0,
                    SignalErrorNoSession: 1,
                    SignalErrorInvalidKey: 2,
                    SignalErrorInvalidKeyId: 3,
                    SignalErrorInvalidMessage: 4,
                    SignalErrorInvalidSignature: 5,
                    SignalErrorFutureMessage: 6,
                    SignalErrorBadMac: 7,
                    SignalErrorInvalidSession: 8,
                    SignalErrorInvalidMsgKey: 9,
                    BadBroadcastEphemeralSetting: 10,
                    UnknownCompanionNoPrekey: 11,
                    AdvFailure: 12,
                    StatusRevokeDelay: 13
                });

            function h() {
                return (h = (0, o.default)(n.default.mark((function e(t) {
                    var r, a, o, c, p, f, C, S, E, T, R, A, h, k, L, w, D, x, I, O;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.retryCount, a = t.to, o = t.participant, c = t.recipient, p = t.externalId, f = t.rawTs, C = t.isPeer, S = void 0 !== C && C, E = t.retryReason, e.prev = 1, T = (0, _.getSignalProtocolStore)(), e.next = 5, Promise.all([T.getLocalRegistrationId(), T.getIdentityKeyPair()]);
                            case 5:
                                if (R = e.sent, A = (0, i.default)(R, 2), h = A[0], k = A[1], null != h && null != k) {
                                    e.next = 11;
                                    break
                                }
                                throw (0, P.default)("No registration info found");
                            case 11:
                                return e.next = 13, b(r, (0, v.toCurveKeyPair)(k));
                            case 13:
                                if (L = e.sent, w = s.DROP_ATTR, D = s.DROP_ATTR, x = s.DROP_ATTR, !a.isUser()) {
                                    e.next = 31;
                                    break
                                }
                                if (I = (0, d.DEVICE_JID)(a), !(0, m.getMeUser)().equals((0, y.toUserWid)(a))) {
                                    e.next = 29;
                                    break
                                }
                                if (!S) {
                                    e.next = 24;
                                    break
                                }
                                w = (0, s.CUSTOM_STRING)("peer"), e.next = 29;
                                break;
                            case 24:
                                if (c) {
                                    e.next = 28;
                                    break
                                }
                                return e.abrupt("return", Promise.reject((0, P.default)("sendRetryReceipt: send retry to peer device without recipient")));
                            case 28:
                                D = (0, d.USER_JID)(c);
                            case 29:
                                e.next = 33;
                                break;
                            case 31:
                                I = (0, d.CHAT_JID)(a), x = o ? (0, d.DEVICE_JID)(o) : s.DROP_ATTR;
                            case 33:
                                return O = (0, s.wap)("receipt", {
                                    id: (0, s.CUSTOM_STRING)(p),
                                    to: I,
                                    participant: x,
                                    recipient: D,
                                    type: "retry",
                                    category: w
                                }, (0, s.wap)("retry", {
                                    v: "1",
                                    count: (0, s.INT)(r),
                                    id: (0, s.CUSTOM_STRING)(p),
                                    t: (0, s.CUSTOM_STRING)(f),
                                    error: (0, g.isRetryReceiptErrorCodeEnabled)() && null != E ? (0, s.INT)(E) : s.DROP_ATTR
                                }), (0, s.wap)("registration", null, (0, s.BIG_ENDIAN_CONTENT)(h)), L), e.abrupt("return", (0, l.deprecatedSendStanzaAndWaitForAck)(O, (0, u.toCoreAckTemplate)({
                                    id: p,
                                    class: "receipt",
                                    from: a,
                                    participant: o,
                                    type: "retry"
                                })));
                            case 37:
                                e.prev = 37, e.t0 = e.catch(1), __LOG__(4, void 0, new Error, !0)`error: ${e.t0}`, SEND_LOGS("sendRetryReceipt: error while creating or sending the retry message");
                            case 40:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 37]
                    ])
                })))).apply(this, arguments)
            }

            function b() {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = (0, o.default)(n.default.mark((function e(t, r) {
                    var a, o, l, s;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, L(t, r);
                            case 2:
                                if (a = e.sent, o = (0, i.default)(a, 2), l = o[0], !(s = o[1])) {
                                    e.next = 11;
                                    break
                                }
                                return e.next = 9, T.waSignalStore.markKeyAsUploaded(s.keyId);
                            case 9:
                                return e.next = 11, T.waSignalStore.markPreKeyAsDirectDistribution(s.keyId);
                            case 11:
                                return e.abrupt("return", l);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function L() {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = (0, o.default)(n.default.mark((function e(t, r) {
                    var a, o, l, u, d, v;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(t < 2)) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", Promise.resolve([null, null]));
                            case 2:
                                return e.prev = 2, e.next = 5, Promise.all([T.waSignalStore.getSignedPreKey(), T.waSignalStore.getOrGenSinglePreKey(E.generatePreKeyPair), (0, c.getADVEncodedIdentity)().then((function(e) {
                                    return (0, s.wap)("device-identity", null, e)
                                }))]);
                            case 5:
                                if (a = e.sent, o = (0, i.default)(a, 3), l = o[0], u = o[1], d = o[2], l) {
                                    e.next = 12;
                                    break
                                }
                                throw (0, P.default)("Signed pre key is not available");
                            case 12:
                                return v = (0, s.wap)("keys", null, (0, s.wap)("type", null, p.default.KEY_BUNDLE_TYPE), (0, s.wap)("identity", null, r.pubKey), (0, R.xmppPreKey)(u), (0, R.xmppSignedPreKey)(l), d), e.abrupt("return", [v, u]);
                            case 16:
                                throw e.prev = 16, e.t0 = e.catch(2), (0, P.default)("Could not create keys section for retry");
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 16]
                    ])
                })))).apply(this, arguments)
            }
            t.RetryReason = A
        },
        63122: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getFanOutListJob = function(e) {
                return (0, i.createNonPersistedJob)("getFanOutList", (function(e) {
                    return (0, n.getFanOutList)(e)
                }), {
                    priority: a.JOB_PRIORITY.SKIP
                }).waitUntilCompleted({
                    wids: e
                })
            };
            var a = r(770870),
                n = r(9401),
                i = r(464581)
        },
        806727: (e, t, r) => {
            "use strict";
            var a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendRetry = function() {
                return p.apply(this, arguments)
            };
            var n = a(r(887757)),
                i = a(r(348926)),
                o = r(115066),
                l = r(646804),
                s = r(530236),
                c = r(537949),
                u = r(928695),
                d = a(r(441143));

            function p() {
                return (p = (0, i.default)(n.default.mark((function e(t, r, a, i, p) {
                    var v, f, C, g, S, E;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (v = i.id.id, f = r || t, __LOG__(2, void 0, void 0, void 0, ["messaging"])`sendRetry: id ${v} to ${t.toString()}, requester: ${f.toString()}, count: ${p}`, (0, s.getAsMms)(i) && (C = i.isUnsentPhoneMsg() ? {
                                        type: i.type
                                    } : i.avParams()), g = (0, c.createOutgoingMessageProtobuf)(i, C || {}), S = {
                                        type: u.MsgType.Retry,
                                        retryCount: p
                                    }, !t.isUser()) {
                                    e.next = 12;
                                    break
                                }
                                return e.next = 9, (0, u.createUserDeviceMsgStanza)(t, a, i, g, S);
                            case 9:
                                E = e.sent, e.next = 16;
                                break;
                            case 12:
                                return (0, d.default)(null != r, "[messaging] sendRetry: no participant for group retry message"), e.next = 15, (0, u.createGroupDeviceMsgStanza)(t, r, i, g, S);
                            case 15:
                                E = e.sent;
                            case 16:
                                return __LOG__(2, void 0, void 0, void 0, ["messaging"])`sendRetry: sending ${v} to ${t.toString()}`, e.abrupt("return", (0, o.deprecatedSendStanzaAndWaitForAck)(E, (0, l.toCoreAckTemplate)({
                                    id: v,
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
            var a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return P.apply(this, arguments)
            };
            var n = a(r(887757)),
                i = a(r(348926)),
                o = r(115066),
                l = r(941866),
                s = r(985044),
                c = r(366639),
                u = r(947044),
                d = r(899015),
                p = r(646804),
                v = r(908112),
                f = a(r(442435)),
                C = r(63962),
                g = r(892301),
                S = y(r(617624)),
                E = r(632171),
                _ = y(r(216996)),
                T = a(r(560911)),
                R = r(95422);

            function m(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (m = function(e) {
                    return e ? r : t
                })(e)
            }

            function y(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var r = m(t);
                if (r && r.has(e)) return r.get(e);
                var a = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, i, o) : a[i] = e[i]
                    } return a.default = e, r && r.set(e, a), a
            }
            f.default.VOIP_LOG_COLOR;

            function P() {
                return (P = (0, i.default)(n.default.mark((function e(t, r) {
                    var a, i, o;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (a = t.common, i = (0, R.createWid)(a.peer_jid), !T.default.isGroupCall(i)) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", A((0, s.CUSTOM_STRING)(a.peer_jid), i, t));
                            case 4:
                                return e.prev = 4, e.next = 7, b(t, i, r);
                            case 7:
                                return o = e.sent, e.abrupt("return", A(o, i, t));
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

            function A() {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = (0, i.default)(n.default.mark((function e(t, r, a) {
                    var i, l, c, u, d;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return i = (0, v.voipXmlToWapNode)(a.payload), l = (0, s.generateId)(), c = (0, s.wap)("call", {
                                    to: t,
                                    id: l
                                }, i), e.next = 5, (0, E.getSignalProtocolStore)().flushBufferToDiskIfNotMemOnlyMode();
                            case 5:
                                return e.next = 7, (0, o.deprecatedSendStanzaAndReturnAck)(c, (0, p.toCoreAckTemplate)({
                                    id: String(l),
                                    class: "call",
                                    from: r,
                                    participant: null
                                }));
                            case 7:
                                return u = e.sent, d = (0, v.wapNodeToVoipXml)(u), e.abrupt("return", {
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

            function b() {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = (0, i.default)(n.default.mark((function e(t, r, a) {
                    var o, s, c, u, d, p, f, g, S, E, T;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (o = t.payload[2].findIndex((function(e) {
                                        return "destination" === e[0]
                                    })), !(s = t.payload[2][o])) {
                                    e.next = 26;
                                    break
                                }
                                return t.payload[0] !== _.TYPE_STR.OFFER && (__LOG__(4, void 0, new Error, !0)`Assertion failed!`, SEND_LOGS("call offer check")), c = s[2].map((function(e) {
                                    var t = e[1].jid;
                                    return (0, R.createDeviceWidFromUserAndDevice)(t.user, "c.us", t.device)
                                })), e.prev = 5, e.next = 8, (0, C.ensureE2ESessions)(c);
                            case 8:
                                e.next = 13;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(5), __LOG__(3)`voip:encryptMsgCallKey: Could not establish E2E session with all deviceWids`;
                            case 13:
                                return u = !1, d = !1, e.next = 17, Promise.all(s[2].map(function() {
                                    var e = (0, i.default)(n.default.mark((function e(r, a) {
                                        var i, o, l, s, p;
                                        return n.default.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (!L(r[2])) {
                                                        e.next = 17;
                                                        break
                                                    }
                                                    return i = I(r[2]), o = c[a], e.prev = 3, e.next = 6, O(i, o, x(t.payload[2]));
                                                case 6:
                                                    l = e.sent, s = l.encNode, p = l.shouldHaveIdentity, d = d || p, D(r[2], s), e.next = 17;
                                                    break;
                                                case 13:
                                                    e.prev = 13, e.t0 = e.catch(3), __LOG__(3)`voip:encryptMsgCallKey: Signal encryption failed for ${o.toString()}, ${e.t0}`, u = !0;
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
                                if (!u) {
                                    e.next = 22;
                                    break
                                }
                                __LOG__(3)`voip:encryptMsgCallKey: Removing all enc nodes due to encryption failure`, s[2].forEach((function(e) {
                                    return w(e)
                                })), e.next = 25;
                                break;
                            case 22:
                                if (!d) {
                                    e.next = 25;
                                    break
                                }
                                return e.next = 25, F(t.payload[2]);
                            case 25:
                                return e.abrupt("return", (0, v.USER_JID)(r));
                            case 26:
                                if (L(t.payload[2])) {
                                    e.next = 28;
                                    break
                                }
                                return e.abrupt("return", (0, v.DEVICE_JID)(r));
                            case 28:
                                return e.prev = 28, p = [r], r.isCompanion() && (f = (0, R.createDeviceWidFromUserAndDevice)(r.user, r.server, l.DEFAULT_DEVICE_ID), p.unshift(f)), e.next = 33, (0, C.ensureE2ESessions)(p);
                            case 33:
                                e.next = 38;
                                break;
                            case 35:
                                e.prev = 35, e.t1 = e.catch(28), __LOG__(3)`voip:encryptAndSendSignalingMsg: Could not establish E2E session with deviceWid`;
                            case 38:
                                return g = I(t.payload[2]), e.prev = 39, e.next = 42, O(g, r, x(t.payload[2]));
                            case 42:
                                T = e.sent, S = T.encNode, E = T.shouldHaveIdentity, e.next = 56;
                                break;
                            case 47:
                                if (e.prev = 47, e.t2 = e.catch(39), a !== _.TYPE.OFFER) {
                                    e.next = 55;
                                    break
                                }
                                S = null, E = !1, __LOG__(3)`voip:encryptAndSendSignalingMsg: Sending offer without enc`, e.next = 56;
                                break;
                            case 55:
                                throw e.t2;
                            case 56:
                                if (D(t.payload[2], S), !E) {
                                    e.next = 60;
                                    break
                                }
                                return e.next = 60, F(t.payload[2]);
                            case 60:
                                return e.abrupt("return", (0, v.DEVICE_JID)(r));
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

            function L(e) {
                return null != e && e.findIndex((function(e) {
                    return "enc" === e[0]
                })) >= 0
            }

            function w(e) {
                if (null != e) {
                    var t = e.findIndex((function(e) {
                        return "enc" === e[0]
                    }));
                    e.splice(t, 1)
                }
            }

            function D(e, t) {
                var r = e.findIndex((function(e) {
                    return "enc" === e[0]
                }));
                r >= 0 && (e[r] = t)
            }

            function x(e) {
                var t, r = e.find((function(e) {
                        return "enc" === e[0]
                    })),
                    a = null == r || null === (t = r[1]) || void 0 === t ? void 0 : t.count;
                return null != a ? a : 0
            }

            function I(e) {
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

            function O() {
                return M.apply(this, arguments)
            }

            function M() {
                return (M = (0, i.default)(n.default.mark((function e(t, r, a) {
                    var i, o, l, c;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, S.Cipher.encryptSignalProto(r, (0, g.encodeAndPad)(t));
                            case 2:
                                return i = e.sent, o = i.ciphertext, l = i.type, c = (0, s.wap)("enc", {
                                    v: (0, s.CUSTOM_STRING)(d.CIPHERTEXT_VERSION.toString()),
                                    type: (0, s.CUSTOM_STRING)(l),
                                    count: (0, s.INT)(a)
                                }, o), e.abrupt("return", {
                                    encNode: c,
                                    shouldHaveIdentity: l === u.CiphertextType.Pkmsg
                                });
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function F() {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = (0, i.default)(n.default.mark((function e(t) {
                    var r;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, c.getADVEncodedIdentity)();
                            case 2:
                                r = e.sent, t.push((0, s.wap)("device-identity", null, r));
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
            var a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return c.apply(this, arguments)
            };
            var n = a(r(887757)),
                i = a(r(348926)),
                o = r(754745),
                l = r(237723),
                s = a(r(580845));

            function c() {
                return (c = (0, i.default)(n.default.mark((function e(t) {
                    var r, a, i, c, u;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, l.waSignalStore.getRegistrationInfo();
                            case 2:
                                if (a = e.sent) {
                                    e.next = 5;
                                    break
                                }
                                throw (0, s.default)("No registration info found");
                            case 5:
                                return i = a.identityKeyPair, c = null !== (r = t[1] && parseInt(t[1].count, 10)) && void 0 !== r ? r : 0, e.next = 9, (0, o.prepareKeysForRetry)(c, i);
                            case 9:
                                return (u = e.sent) && t[2] && Array.isArray(t[2]) && t[2].push(u), e.abrupt("return", t);
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
            var a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return c.apply(this, arguments)
            };
            var n = a(r(887757)),
                i = a(r(348926)),
                o = r(846335),
                l = (a(r(463113)), r(491552)),
                s = r(95422);

            function c() {
                return (c = (0, i.default)(n.default.mark((function e(t) {
                    var r;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Promise.all(t.map(function() {
                                    var e = (0, i.default)(n.default.mark((function e(t) {
                                        var r, a, i;
                                        return n.default.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return r = t.user_raw_jid, a = t.phash, i = (0, s.createUserWid)(r), e.next = 4, (0, o.doesDeviceHashMatch)(i, a);
                                                case 4:
                                                    if (!e.sent) {
                                                        e.next = 6;
                                                        break
                                                    }
                                                    return e.abrupt("return", i);
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
                                return r = e.sent.filter(Boolean), e.next = 5, (0, l.syncDeviceListJob)(r, "voip", null);
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
            var a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return p.apply(this, arguments)
            };
            var n = a(r(887757)),
                i = a(r(348926)),
                o = r(115066),
                l = r(985044),
                s = r(646804),
                c = r(908112),
                u = r(63962),
                d = r(95422);

            function p() {
                return (p = (0, i.default)(n.default.mark((function e(t) {
                    var r, a, i, p, v, f, C, g;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.common, (a = (0, d.createWid)(r.peer_jid)).isGroupCall() ? (i = (0, c.GROUP_CALL_JID)(a), p = Promise.resolve()) : (i = (0, c.DEVICE_JID)(a), p = (0, u.ensureE2ESessions)([a])), e.next = 5, p;
                            case 5:
                                return v = (0, c.voipXmlToWapNode)(t.payload), f = (0, l.generateId)(), C = (0, l.wap)("call", {
                                    to: i,
                                    id: f
                                }, v), e.next = 10, (0, o.deprecatedSendStanzaAndReturnAck)(C, (0, s.toCoreAckTemplate)({
                                    id: String(f),
                                    class: "call",
                                    from: a,
                                    participant: null
                                }));
                            case 10:
                                return g = e.sent, e.abrupt("return", {
                                    payload: (0, c.wapNodeToVoipXml)(g),
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
            var a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateIdentityKeyPair = function() {
                return d.apply(this, arguments)
            }, t.generatePreKeyPair = function() {
                return c.apply(this, arguments)
            }, t.generateSignedKeyPair = function() {
                return u.apply(this, arguments)
            };
            var n = a(r(887757)),
                i = a(r(348926)),
                o = r(27531),
                l = r(18196),
                s = a(r(286729));

            function c() {
                return (c = (0, i.default)(n.default.mark((function e(t) {
                    var r, a, i, c, u, d, p, v;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(0, l.isCryptoLibraryEnabled)()) {
                                    e.next = 5;
                                    break
                                }
                                return r = s.default.makePreKey(t), a = r.preKeyId, i = r.privKey, c = r.pubKey, u = {
                                    privKey: i,
                                    pubKey: c
                                }, e.abrupt("return", {
                                    keyId: a,
                                    keyPair: u,
                                    isDirectDistribution: 0
                                });
                            case 5:
                                return e.next = 7, self.libsignal.KeyHelper.generatePreKey(t);
                            case 7:
                                return d = e.sent, p = d.keyId, v = d.keyPair, e.abrupt("return", {
                                    keyId: p,
                                    keyPair: (0, o.toCurveKeyPair)(v),
                                    isDirectDistribution: 0
                                });
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function u() {
                return (u = (0, i.default)(n.default.mark((function e(t, r) {
                    var a, i, c, u, d, p, v, f, C, g;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(0, l.isCryptoLibraryEnabled)()) {
                                    e.next = 5;
                                    break
                                }
                                return a = s.default.makeSignedPreKey((0, o.toCurveKeyPair)(t), r), i = a.preKeyId, c = a.privKey, u = a.pubKey, d = a.signature, p = {
                                    privKey: c,
                                    pubKey: u
                                }, e.abrupt("return", {
                                    keyId: i,
                                    keyPair: (0, o.toCurveKeyPair)(p),
                                    signature: d
                                });
                            case 5:
                                return e.next = 7, self.libsignal.KeyHelper.generateSignedPreKey(t, r);
                            case 7:
                                return v = e.sent, f = v.keyId, C = v.keyPair, g = v.signature, e.abrupt("return", {
                                    keyId: f,
                                    keyPair: (0, o.toCurveKeyPair)(C),
                                    signature: g
                                });
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function d() {
                return (d = (0, i.default)(n.default.mark((function e() {
                    var t;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(0, l.isCryptoLibraryEnabled)()) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", s.default.makeKeyPair());
                            case 2:
                                return e.next = 4, self.libsignal.KeyHelper.generateIdentityKeyPair();
                            case 4:
                                return t = e.sent, e.abrupt("return", (0, o.toCurveKeyPair)(t));
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
            var a, n = r(595318),
                i = n(r(334575)),
                o = n(r(993913)),
                l = r(648409),
                s = r(231197),
                c = r(970280),
                u = n(r(925446)),
                d = r(236539),
                p = r(422210),
                v = r(14115),
                f = r(151853),
                C = r(548360),
                g = r(785893),
                S = window.Native.ipcRenderer,
                E = function() {
                    function e() {
                        (0, i.default)(this, e)
                    }
                    return (0, o.default)(e, [{
                        key: "init",
                        value: function() {
                            a = u.default.require("AVDeviceManager"), S.on(f.MAIN_IPC_EVENTS.AV_EVENT, this._refreshDeviceList), S.on(f.MAIN_IPC_EVENTS.AV_DEVICE_CHANGE_TOAST, this._deviceChangeToast), this._refreshDeviceList()
                        }
                    }, {
                        key: "cleanup",
                        value: function() {
                            __LOG__(2, void 0, void 0, void 0, ["voip"])`av manager log: cleanup`, S.removeListener(f.MAIN_IPC_EVENTS.AV_DEVICE_CHANGE_TOAST, this._deviceChangeToast), S.removeListener(f.MAIN_IPC_EVENTS.AV_EVENT, this._refreshDeviceList), a = null
                        }
                    }, {
                        key: "_refreshDeviceList",
                        value: function() {
                            var e;
                            null === (e = a) || void 0 === e || e.getDeviceListAsync().then((function(e) {
                                s.AvDevices.refreshDeviceList(e)
                            }))
                        }
                    }, {
                        key: "_deviceChangeToast",
                        value: function(e, t) {
                            if (((0, v.isVoiceCallEnabled)() || (0, v.isVideoCallEnabled)() || (0, v.isGroupCallEnabled)()) && c.CallCollection.activeCall) {
                                var r;
                                switch (t.deviceType) {
                                    case l.AVDeviceType.AudioInput:
                                        r = C.fbt._("Microphone", null, {
                                            hk: "t3dsg"
                                        });
                                        break;
                                    case l.AVDeviceType.AudioOutput:
                                        r = C.fbt._("Audio Device", null, {
                                            hk: "3rNIUz"
                                        });
                                        break;
                                    case l.AVDeviceType.Video:
                                        r = C.fbt._("Camera", null, {
                                            hk: "49GA08"
                                        })
                                }
                                var a = C.fbt._("Using {deviceName} as your {deviceType} for your WhatsApp calls", [C.fbt._param("deviceName", t.name), C.fbt._param("deviceType", r)], {
                                    hk: "4B0NPs"
                                });
                                p.ToastManager.open((0, g.jsx)(d.Toast, {
                                    msg: a
                                }))
                            }
                        }
                    }]), e
                }();
            e.exports = new E
        },
        764582: (e, t, r) => {
            "use strict";
            var a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Voip = void 0, t.checkVoipCapability = function() {
                return Promise.resolve(!0)
            };
            var n = a(r(81109)),
                i = a(r(887757)),
                o = a(r(348926)),
                l = a(r(402525)),
                s = a(r(347999)),
                c = r(123935),
                u = r(941858),
                d = r(281098),
                p = a(r(460167)),
                v = r(231197),
                f = r(894995),
                C = r(970280),
                g = r(2288),
                S = r(665912),
                E = r(908112),
                _ = a(r(442435)),
                T = r(43401),
                R = r(790167),
                m = a(r(671313)),
                y = a(r(925446)),
                P = r(723117),
                A = r(208893),
                h = r(63122),
                b = r(729307),
                k = r(228277),
                L = r(163697),
                w = a(r(236996)),
                D = H(r(14115)),
                x = H(r(547880)),
                I = a(r(81357)),
                O = H(r(216996)),
                M = H(r(394785)),
                F = r(151853),
                N = r(644798),
                B = r(447853),
                U = a(r(560911)),
                V = r(95422);

            function G(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (G = function(e) {
                    return e ? r : t
                })(e)
            }

            function H(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var r = G(t);
                if (r && r.has(e)) return r.get(e);
                var a = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, i, o) : a[i] = e[i]
                    } return a.default = e, r && r.set(e, a), a
            }
            _.default.VOIP_LOG_COLOR;
            var W, j, K = window.Native.ipcRenderer,
                Y = new u.PromiseQueue,
                q = !1,
                z = null,
                J = null,
                $ = null,
                Q = {
                    init: function() {
                        return Y.enqueue((0, o.default)(i.default.mark((function e() {
                            return i.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, X();
                                    case 3:
                                        e.next = 10;
                                        break;
                                    case 5:
                                        e.prev = 5, e.t0 = e.catch(0), __LOG__(4, void 0, new Error, !0)`voip:init failed with: ${e.t0}`, SEND_LOGS("voip-lazy-init-error"), Q.cleanup(), q = !1;
                                    case 10:
                                        return e.abrupt("return", q);
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
                        return q
                    },
                    handleIncomingSignalingMessage: function(e, t) {
                        return (0, o.default)(i.default.mark((function r() {
                            var a, n, o, l, s, c, u, d;
                            return i.default.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (q) {
                                            r.next = 3;
                                            break
                                        }
                                        return __LOG__(3)`voip:handleIncomingSignalingMsg:called before init`, r.abrupt("return");
                                    case 3:
                                        if ((l = O.TYPE_NAME[e.type]) && __LOG__(2)`voip:handleIncomingSignalingMsg: type: "${l}" msg: `, null != (s = C.CallCollection.get(e.call_id)) || e.type === O.TYPE.TERMINATE) {
                                            r.next = 10;
                                            break
                                        }
                                        __LOG__(2)`voip:handleIncomingSignalingMsg: Received signaling message before offer`, r.next = 44;
                                        break;
                                    case 10:
                                        if (!s || s.canHandleLocally) {
                                            r.next = 15;
                                            break
                                        }
                                        return (0, L.handleIncomingSignalingMessage)(e, t), r.abrupt("return");
                                    case 15:
                                        r.t0 = e.type, r.next = r.t0 === O.TYPE.OFFER ? 18 : r.t0 === O.TYPE.OFFER_RECEIPT ? 27 : r.t0 === O.TYPE.ACCEPT_RECEIPT ? 29 : r.t0 === O.TYPE.ACCEPT ? 32 : r.t0 === O.TYPE.TERMINATE ? 34 : r.t0 === O.TYPE.ENC_REKEY ? 43 : 44;
                                        break;
                                    case 18:
                                        if (!P.MuteCollection.globalMute().isCallMuted) {
                                            r.next = 21;
                                            break
                                        }
                                        return null != s && (null != e.t && (s.offerTime = e.t), s.isVideo = !!e.isVideoCall), r.abrupt("return");
                                    case 21:
                                        return (null == s ? void 0 : s.isVideo) && (0, T.prepareForCameraAccessCheck)(), u = !e.isContact, 5, null === (c = W) || void 0 === c || c.handleIncomingSignalingOffer(t, u, 5), le(e.call_id), r.abrupt("return");
                                    case 27:
                                        return null === (a = W) || void 0 === a || a.handleIncomingSignalingReceipt(t), r.abrupt("return");
                                    case 29:
                                        return null === (n = W) || void 0 === n || n.handleIncomingSignalingReceipt(t), se(e.call_id, !1), r.abrupt("return");
                                    case 32:
                                        return se(e.call_id, !0), r.abrupt("break", 44);
                                    case 34:
                                        if (!P.MuteCollection.globalMute().isCallMuted) {
                                            r.next = 42;
                                            break
                                        }
                                        d = t.payload[1].reason, r.t1 = d, r.next = "timeout" === r.t1 ? 39 : 42;
                                        break;
                                    case 39:
                                        if (null == s) {
                                            r.next = 42;
                                            break
                                        }
                                        return r.next = 42, M.generateMissedCallLog(e.call_creator, s.offerTime, s.isVideo, !1, s.isSilenced);
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
                        q ? (__LOG__(2)`voip:cleanup`, C.CallCollection.activeCall && (this.endCall(), C.CallCollection.setActiveCall(null), __LOG__(2)`voip:call_collection: Active Call set to null due to cleanup:`), K.send(F.RENDERER_IPC_EVENTS.ENABLE_VOIP_FEATURES, !1), j && "function" == typeof j.cleanup && j.cleanup(), W && "function" == typeof W.cleanup && W.cleanup(), W = null, j = null, q = !1) : __LOG__(2)`voip:cleanup skipped: voip not initialized`
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
                        __LOG__(2)`voip:callStart: ${e.toString()} video: ${t.toString()}`, te(t).then((function(a) {
                            a && function(e, t) {
                                if (!q) return void __LOG__(3)`voip:callStart:called before init`;
                                if (t) {
                                    if (!D.isVideoCallEnabled()) return void __LOG__(3)`voip:attempted to start video call but it is not enabled`
                                }
                                if (__LOG__(2)`voip:callStart: ${e.toString()}`, U.default.isUser(e) && !e.equals((0, k.getMaybeMeUser)())) {
                                    var a = (0, w.default)();
                                    (0, h.getFanOutListJob)([e]).then((function(n) {
                                        var i, o = ne(n, "callStart"),
                                            l = e.toString({
                                                legacy: !0
                                            }),
                                            s = new Uint8Array(0),
                                            c = r(202908).ChatCollection.get(e),
                                            u = (null == c ? void 0 : c.getTcToken()) || 0;
                                        s = new Uint8Array(u), __LOG__(2)`voip === PRIVACY TOKEN = :${s.toString()} ===`, null === (i = W) || void 0 === i || i.startCall([l], [o], a, t, s)
                                    })), C.CallCollection.add({
                                        id: a,
                                        peerJid: e,
                                        offerTime: (0, d.unixTime)(),
                                        isVideo: t,
                                        webClientShouldHandle: !0,
                                        outgoing: !0,
                                        canHandleLocally: !0
                                    }), C.CallCollection.assertGet(a).setState(F.CALL_STATES.OUTGOING_CALLING), le(a), (0, b.sendTcToken)(e)
                                }
                            }(e, t)
                        }))
                    },
                    groupCallStart: function(e, t) {
                        __LOG__(2)`voip:groupCallStart: ${e.join()} video: ${t.toString()}`, te(t).then((function(r) {
                            r && function(e, t) {
                                if (!q) return void __LOG__(3)`voip:groupCallStart:called before init`;
                                if (!D.isGroupCallEnabled()) return void __LOG__(3)`voip:attempted to start group ${t?"video":"audio"} call but it is not enabled`;
                                __LOG__(2)`voip:groupCallStart: ${e.join()}`;
                                var r = (0, w.default)(),
                                    a = e.filter((function(e) {
                                        return U.default.isUser(e) && !(0, k.isMeAccount)(e)
                                    })),
                                    n = a.map((function(e) {
                                        return e.toString({
                                            legacy: !0
                                        })
                                    })),
                                    i = [],
                                    o = [
                                        []
                                    ];
                                a.forEach((function(e, t) {
                                    i.push((0, h.getFanOutListJob)([e]).then((function(e) {
                                        o[t] = ne(e, "groupCallStart")
                                    })))
                                })), Promise.all(i).then((function() {
                                    var e, a = new Uint8Array(0);
                                    null === (e = W) || void 0 === e || e.startCall(n, o, r, t, a)
                                })), C.CallCollection.add({
                                    id: r,
                                    peerJid: a[0],
                                    offerTime: (0, d.unixTime)(),
                                    isVideo: t,
                                    isGroup: !0,
                                    groupCallParticipants: a,
                                    webClientShouldHandle: !0,
                                    outgoing: !0,
                                    canHandleLocally: !0
                                }), C.CallCollection.assertGet(r).setState(F.CALL_STATES.OUTGOING_CALLING)
                            }(e, t)
                        }))
                    },
                    sendGroupCallInvite: function(e) {
                        __LOG__(2)`voip:sendGroupCallInvite: ${e.toString()}}`,
                            function(e) {
                                if (!q) return void __LOG__(3)`voip:sendInviteToGroupCall:called before init`;
                                __LOG__(2)`voip:sendInviteToGroupCall: ${e.toString()}`;
                                var t = [],
                                    r = null;
                                U.default.isUser(e) && !e.equals((0, k.getMaybeMeUser)()) && (0, h.getFanOutListJob)([e]).then((function(a) {
                                    var n;
                                    t = ne(a, "sendInviteToGroupCall"), r = e.toString({
                                        legacy: !0
                                    }), null === (n = W) || void 0 === n || n.inviteToGroupCallMD(r, t)
                                }))
                            }(e)
                    },
                    endCall: function(e) {
                        var t;
                        if (!q) return __LOG__(3)`voip:endCall:called before init`, Promise.resolve();
                        z && self.clearTimeout(z);
                        var r = C.CallCollection.activeCall;
                        return __LOG__(2)`voip:callEnd`, null === (t = W) || void 0 === t || t.end(!0, null != e ? e : ""), r && r.setState(F.CALL_STATES.ENDED), Promise.resolve()
                    },
                    callEndByHandledRemotely: function(e) {
                        var t;
                        q ? (__LOG__(2)`voip:callEndByHandledRemotely ${e}`, null === (t = W) || void 0 === t || t.end(!1, e)) : __LOG__(3)`voip:callEndByHandledRemotely:called before init`
                    },
                    acceptCall: function() {
                        if (q)
                            if (C.CallCollection.activeCall) {
                                var e = C.CallCollection.activeCall;
                                te(e.isVideo).then((function(t) {
                                    if (t && null != e) {
                                        var r;
                                        if (!e || e.getState() !== F.CALL_STATES.INCOMING_RING) return;
                                        __LOG__(2)`voip:acceptCall`, null === (r = W) || void 0 === r || r.acceptCall(!0, v.AvDevices.isVideoAvailable), e.webClientShouldHandle = !0, e.setState(F.CALL_STATES.CONNECTING), se(e.id, !1)
                                    } else Q.rejectCall()
                                }))
                            } else __LOG__(3)`voip:acceptCall:call not found`;
                        else __LOG__(3)`voip:acceptCall:called before init`
                    },
                    rejectCall: function() {
                        var e;
                        if (q)
                            if (C.CallCollection.activeCall) {
                                var t = C.CallCollection.activeCall;
                                t && t.getState() === F.CALL_STATES.INCOMING_RING && (__LOG__(2)`voip:rejectCall`, null === (e = W) || void 0 === e || e.rejectCall(), t.webClientShouldHandle = !0, t.setState(F.CALL_STATES.REJECTED))
                            } else __LOG__(3)`voip:rejectCall:call not found`;
                        else __LOG__(3)`voip:rejectCall:called before init`
                    },
                    rejectCallWithoutCallCtx: function(e, t, r, a, n, i) {
                        var o;
                        null === (o = W) || void 0 === o || o.rejectCallWithoutCallCtx(e, !1, t, r, a, n, i)
                    },
                    processMissedIncomingCallMaxRetry: function(e) {
                        M.generateMissedCallLog(e.call_creator, e.t, !!e.isVideoCall, !1, !0 === e.isSilenced);
                        var t = {
                            callResult: B.CALL_RESULT_TYPE.CALL_REJECTED_E2E,
                            callSide: B.CALL_SIDE.CALLEE,
                            callTestBucket: "",
                            videoEnabled: !!e.isVideoCall,
                            callPeerPlatform: e.peer_platform,
                            callPeerAppVersion: e.peer_app_version,
                            callOfferElapsedT: e.elapsed_msec
                        };
                        null == e.peer_platform && delete t.callPeerPlatform, null == e.peer_app_version && delete t.callPeerAppVersion, null == e.elapsed_msec && delete t.callOfferElapsedT, new g.CallWamEvent(t).commit()
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
                        __LOG__(2)`voip:videoRequestUpgrade`, te(!0).then((function(e) {
                            var t;
                            e && (null === (t = W) || void 0 === t || t.videoRequestUpgrade())
                        }))
                    },
                    videoAcceptUpgrade: function() {
                        __LOG__(2)`voip:videoAcceptUpgrade`, te(!0).then((function(e) {
                            var t, r;
                            e ? null === (t = W) || void 0 === t || t.videoAcceptUpgrade(!0, v.AvDevices.isVideoAvailable) : null === (r = W) || void 0 === r || r.videoRejectUpgrade(F.VideoUpgradeRequestEndedReason.EndedByUser)
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
                        null === (r = W) || void 0 === r || r.notifyDeviceIdentityChangedOrDeletedMD((0, E.DEVICE_JID)(e), t)
                    },
                    getNumParticipantsFromCallOffer: function(e) {
                        return m.default.send(F.RENDERER_IPC_EVENTS.REQUEST_NUM_PARTICIPANTS, e)
                    }
                };

            function X() {
                return Z.apply(this, arguments)
            }

            function Z() {
                return (Z = (0, o.default)(i.default.mark((function e() {
                    var t, a, n, o, l, s;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (D.isVoiceCallEnabled()) {
                                    e.next = 4;
                                    break
                                }
                                return q = !1, K.send(F.RENDERER_IPC_EVENTS.ENABLE_VOIP_FEATURES, !1), e.abrupt("return", Promise.resolve(!1));
                            case 4:
                                if (!q) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", Promise.resolve(!0));
                            case 6:
                                return W = y.default.require("wavoip"), a = W, j = r(636880), __LOG__(2)`voip:init`, n = D.isVideoCallEnabled(), Promise.resolve(), l = D.isStatefulEnumerationEnabled(), s = D.isDeviceAgnosticVoip(), __LOG__(2)`voip:init initializing VoIP stack in MD mode`, o = a.init((0, k.assertGetMe)().toString({
                                    legacy: !0,
                                    formatFull: !0
                                }), !0, n, l, s), e.next = 18, o;
                            case 18:
                                return __LOG__(2)`voip:init initialized VoIP stack successfully`, null === (t = j) || void 0 === t || t.init(), q = !0, Q.updateNetworkMedium(F.CallNetworkMedium.CallNetworkMediumWifi, 0), K.send(F.RENDERER_IPC_EVENTS.ENABLE_VOIP_FEATURES, q), ue(), ee(), e.abrupt("return", q);
                            case 26:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function ee() {
                var e;
                null === (e = W) || void 0 === e || e.setScreenSize(1920, 1080)
            }

            function te(e) {
                return e ? (0, T.checkForMicrophoneAndCameraAccess)() : (0, T.checkForMicrophoneAccess)()
            }

            function re(e, t, r) {
                __LOG__(2)`voip:outgoing_signaling:${JSON.stringify(e)}:`, (0, A.sendCallSignalingMsg)(e).then(ae(t, r)).catch((function() {}))
            }

            function ae(e, t) {
                return function(r) {
                    if ((null == r ? void 0 : r.status) && r.payload) switch (r.status) {
                        case 200:
                            var a, n, i;
                            __LOG__(2)`voip:recv:${e}_ack:`;
                            var o = Number(null !== (a = null === (n = r.payload[1]) || void 0 === n ? void 0 : n.error) && void 0 !== a ? a : 0),
                                l = {
                                    peer_jid: t,
                                    type: e,
                                    error: o,
                                    ack: r.payload
                                };
                            null === (i = W) || void 0 === i || i.handleIncomingSignalingAck(l);
                            break;
                        default:
                            __LOG__(2)`voip:recv:accept_ack: Unknown status:${r.status}`
                    }
                }
            }

            function ne(e, t) {
                return e.length > 5 && (0, f.isCallingToPrimarySMBLimitEnabled)() ? (__LOG__(2)`voip:${t}: removing companion device ids because callee has too many devices`, e.filter((function(e) {
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

            function ie() {
                null != J && (self.clearTimeout(J), J = null)
            }

            function oe() {
                null != $ && (self.clearTimeout($), $ = null)
            }

            function le(e) {
                oe(), $ = self.setTimeout((function() {
                    $ = null;
                    var t = C.CallCollection.activeCall;
                    if (t && t.id === e) {
                        var r = t.getState();
                        r === F.CALL_STATES.OUTGOING_RING || r === F.CALL_STATES.OUTGOING_CALLING ? (t.setState(F.CALL_STATES.NOT_ANSWERED), Q.endCall()) : r === F.CALL_STATES.INCOMING_RING && Q.endCall()
                    }
                }), 45e3)
            }

            function se(e, t) {
                oe(), $ = self.setTimeout((function() {
                    $ = null;
                    var r = C.CallCollection.activeCall;
                    r && r.id === e && r.getState() !== F.CALL_STATES.ACTIVE && (r.setState(F.CALL_STATES.FAILED), t ? Q.endCall() : Q.rejectCall())
                }), 3e4)
            }

            function ce(e, t, r) {
                switch (r) {
                    case F.VideoState.VideoStateUpgradeRequest:
                        ! function(e, t) {
                            ie(), J = self.setTimeout((function() {
                                J = null, M.isParticipantRequestingVideoUpgrade(e, t) && (t ? Q.videoCancelUpgrade(F.VideoUpgradeRequestEndedReason.EndedByTimeout) : Q.videoRejectUpgrade(F.VideoUpgradeRequestEndedReason.EndedByTimeout))
                            }), t ? 45e3 : 3e4)
                        }(e, t);
                        break;
                    case F.VideoState.VideoStateEnabled:
                        ie();
                        break;
                    case F.VideoState.VideoStateStopped:
                        J && (__LOG__(4, void 0, new Error, !0)`callUpgradeRequestTimer should be already cleared before video feed stopped`, SEND_LOGS("call-upgrade-timer-error"));
                        break;
                    default:
                        ie()
                }
            }

            function ue() {
                K.send(F.RENDERER_IPC_EVENTS.ENABLE_VOIP_GROUP_FEATURES, D.isGroupCallEnabled())
            }

            function de(e) {
                var t = e.callInfo;
                switch (__LOG__(2)`voip:event: "${e.eventStr}" data: `, __LOG__(2)`voip:event: "callInfo: `, e.event) {
                    case F.WACallEvent.CallEnding:
                        if (function(e) {
                                var t = C.CallCollection.activeCall;
                                if (t)
                                    if (e) {
                                        var r = e.call_log_info,
                                            a = Math.floor((999 + Math.max(0, r.call_duration)) / 1e3),
                                            n = 0 === r.caller_status,
                                            i = t.offerTime;
                                        if ((0, f.btmThreadsLoggingEnabled)() && !t.isGroup) {
                                            var o = (0, V.createWid)(r.initial_peer_raw_jid);
                                            (0, S.handleActivitiesForChatThreadLogging)([{
                                                activityType: "voipCall",
                                                ts: i,
                                                chatId: o,
                                                durationInSeconds: a,
                                                outgoing: n
                                            }])
                                        }
                                    } else __LOG__(3)`VoipEventCallback:eventData is null/undefined: ${t.id}`
                            }(e.eventData), e.eventData.call_id && e.eventData.call_log_info.result === F.CALL_LOG_RESULT_TYPE.MISSED) {
                            var r = M.getCallFromCallId(e.eventData.call_id);
                            if (r && !r.outgoing) {
                                var a = e.eventData.call_log_info;
                                M.generateMissedCallLog((0, V.createWid)(a.initial_peer_raw_jid), r.offerTime, a.video_enabled, a.group_call_log_count > 1, r.isSilenced)
                            }
                        }
                        break;
                    case F.WACallEvent.CallRejectReceived:
                        var i = t && M.getCallFromCallId(t.call_id);
                        i && i.setState(F.CALL_STATES.REJECTED), Q.endCall();
                        break;
                    case F.WACallEvent.RejectedDecryptionFailure:
                        try {
                            var o = e.eventData,
                                u = (0, V.createWid)((0, s.default)(o.peer_raw_jid, "eventData.peer_raw_jid")),
                                d = (0, s.default)(o.call_id, "eventData.call_id"),
                                v = new Uint8Array((0, s.default)(o.registration, "eventData.registration")),
                                _ = {
                                    stanzaId: null,
                                    originalMsgId: d,
                                    ts: null,
                                    retryCount: (0, s.default)(o.retry_count, "eventData.retry_count"),
                                    regId: (0, c.convertBytesToUint)(v, 4),
                                    offline: !1,
                                    from: u,
                                    participant: null,
                                    recipient: null,
                                    keyBundle: null
                                };
                            (0, R.handleVoipRetryRequest)(_).then((function(e) {
                                var t;
                                e ? null === (t = W) || void 0 === t || t.resendOfferOnDecryptionFailureMD((0, E.DEVICE_JID)(u), d) : __LOG__(3)`voip: not sending retry offer`
                            })).catch((function() {
                                __LOG__(3)`voip: error while attempting to send retry offer`
                            }))
                        } catch (e) {
                            __LOG__(3)`voip: not retrying offer due to client-side issue`
                        }
                        break;
                    case F.WACallEvent.MediaStreamError:
                    case F.WACallEvent.AudioInitError:
                    case F.WACallEvent.NoSamplingRatesForAudioRecord:
                    case F.WACallEvent.HandleOfferFailed:
                    case F.WACallEvent.P2PTransportCreateFailed:
                    case F.WACallEvent.P2PTransportStartFailed:
                    case F.WACallEvent.MediaStreamStartError:
                    case F.WACallEvent.HandleOfferAckFailed:
                    case F.WACallEvent.HandleAcceptFailed:
                    case F.WACallEvent.HandlePreAcceptFailed:
                    case F.WACallEvent.RelayBindsFailed:
                    case F.WACallEvent.HandleAcceptReceiptFailed:
                    case F.WACallEvent.HandleAcceptAckFailed:
                    case F.WACallEvent.CallAcceptFailed:
                        var T = t && M.getCallFromCallId(t.call_id);
                        T && T.setState(F.CALL_STATES.FAILED), Q.endCall();
                        break;
                    case F.WACallEvent.CallOfferNacked:
                        var m = e.eventData.errors;
                        if (!m || !m.length) {
                            __LOG__(4, void 0, new Error)`voip:callOfferNacked: with empty errors`;
                            break
                        }
                        var y = M.getCallFromCallId(null == t ? void 0 : t.call_id);
                        if (!y || !t) {
                            __LOG__(3)`voip:callOfferNackToast: call info not found for callId`;
                            break
                        }
                        var P = m.map((function(e) {
                            return (0, V.createWid)((0, s.default)(e.error_raw_jid, "i.error_raw_jid"))
                        }));
                        M.callOfferNackToast(m[0].code, P, y.isVideo, y.isGroup);
                        var A = (0, k.getMaybeMeUser)(),
                            h = t.participants.filter((function(e) {
                                return e.jid.user !== (null == A ? void 0 : A.user) && !P.some((function(t) {
                                    return t.user === e.jid.user
                                }))
                            })),
                            b = P.some((function(e) {
                                return e.user === (null == A ? void 0 : A.user)
                            })),
                            L = m.some((function(e) {
                                return 432 === e.code
                            }));
                        (0 === h.length || b || L) && (y && y.setState(F.CALL_STATES.ENDED), __LOG__(2)`voip:callOfferNacked: Ending call`, Q.endCall());
                        break;
                    case F.WACallEvent.FieldstatsReady:
                        var w = e.eventData;
                        if (null == w ? void 0 : w.call_ended_stats) {
                            var D = {};
                            (0, l.default)(w.call_ended_stats, (function(e, t) {
                                var r, a = t;
                                switch (r = "string" == typeof e ? e : isNaN(e) ? null : e, t) {
                                    case "abtest_bucket":
                                        a = "call_test_bucket"
                                }
                                var n = function(e) {
                                    var t = e.split("_");
                                    if (t.length <= 1) return e;
                                    for (var r = 1; r < t.length; r += 1) t[r] = (0, p.default)(t[r]);
                                    return t.join("")
                                }(a);
                                try {
                                    "boolean" === N.metrics.getEvent("Call", n).type ? D[n] = !!e : D[n] = r
                                } catch (e) {
                                    __LOG__(4, void 0, new Error)`voip:fieldstats ready: metric undefined for ${n}`
                                }
                            })), new g.CallWamEvent(D).commit()
                        }
                        break;
                    case F.WACallEvent.CallMissed:
                        var O = e.eventData;
                        if (O) {
                            var U = !!O.is_video_call,
                                G = O.group_info.count > 1,
                                H = (Date.now() - O.time_elapsed_since_call_offer) / 1e3;
                            M.generateMissedCallLog((0, V.createUserWid)(O.peer_user_jid.user, O.peer_user_jid.server), H, U, G, !1);
                            var j = {
                                    callPeerPlatform: F.PlatformTypeMapping[O.peer_platform],
                                    callPeerAppVersion: O.peer_app_version,
                                    callOfferElapsedT: O.time_elapsed_since_call_offer,
                                    callWakeupSource: O.call_wakeup_source,
                                    callTestBucket: O.abtest_bucket,
                                    videoEnabled: U,
                                    callResult: B.CALL_RESULT_TYPE.MISSED,
                                    callSide: B.CALL_SIDE.CALLEE
                                },
                                K = G ? {
                                    groupCallIsLastSegment: !0,
                                    groupCallIsGroupCallInvitee: !0,
                                    numConnectedParticipants: O.group_info.count,
                                    fieldStatsRowType: B.FIELD_STATS_ROW_TYPE.SELF
                                } : {};
                            new g.CallWamEvent((0, n.default)((0, n.default)({}, j), K)).commit()
                        }
                        break;
                    case F.WACallEvent.RxTrafficStopped:
                        var Y = t && M.getCallFromCallId(t.call_id);
                        Y && Y.setState(F.CALL_STATES.CONNECTION_LOST);
                        break;
                    case F.WACallEvent.RxTrafficStarted:
                        var q = t && M.getCallFromCallId(t.call_id);
                        q && q.getState() === F.CALL_STATES.CONNECTION_LOST && ($ && (__LOG__(4, void 0, new Error, !0)`callOfferTimer should be already cleared before traffic restored`, SEND_LOGS("call-state-error")), q.setState(F.CALL_STATES.ACTIVE));
                        break;
                    case F.WACallEvent.RTCPByeReceived:
                    case F.WACallEvent.RxTimeout:
                    case F.WACallEvent.TxTimeout:
                        __LOG__(2)`voip:event: Timeout: end the call, set call state to ENDED`;
                        var z = t && M.getCallFromCallId(t.call_id);
                        z && z.setState(F.CALL_STATES.ENDED), Q.endCall();
                        break;
                    case F.WACallEvent.SoundPortCreateFailed:
                        x.soundPortErrorModal(), Q.refresh();
                        break;
                    case F.WACallEvent.VideoPortCreateFailed:
                        x.videoPortErrorModal(), Q.refresh();
                        break;
                    case F.WACallEvent.CallStateChanged:
                        var J = e.eventData,
                            X = J.call_state;
                        if (!J.call_id) return;
                        var Z = M.getCallFromCallId(J.call_id);
                        if (!Z) return;
                        switch (X !== F.WACallState.WACallStateNone && t && (Z.callInfo = M.parseCallInfo(t)), __LOG__(2)`voip:event: Call State:`, X) {
                            case F.WACallState.WACallStateNone:
                                Z.setState(F.CALL_STATES.ENDED), C.CallCollection.setActiveCall(null), C.CallCollection.remove(Z), __LOG__(2)`voip:call_collection: Active Call set to null due to call end:`;
                                break;
                            case F.WACallState.WACallStateCalling:
                                Z.setState(F.CALL_STATES.OUTGOING_CALLING), C.CallCollection.activeCall || C.CallCollection.setActiveCall(Z);
                                break;
                            case F.WACallState.WACallStatePreacceptReceived:
                                Z.setState(F.CALL_STATES.OUTGOING_RING), C.CallCollection.activeCall || C.CallCollection.setActiveCall(Z);
                                break;
                            case F.WACallState.WACallStateAcceptReceived:
                                Z.setState(F.CALL_STATES.CONNECTING), C.CallCollection.activeCall || C.CallCollection.setActiveCall(Z);
                                break;
                            case F.WACallState.WACallStateReceivedCall:
                                Z.setState(F.CALL_STATES.INCOMING_RING), C.CallCollection.activeCall || C.CallCollection.setActiveCall(Z);
                                break;
                            case F.WACallState.WACallStateCallActive:
                                oe(), Z.setState(F.CALL_STATES.ACTIVE), C.CallCollection.activeCall || C.CallCollection.setActiveCall(Z)
                        }
                        break;
                    case F.WACallEvent.GroupInfoChanged:
                        M.updateCallWithCallInfo(t);
                        break;
                    case F.WACallEvent.SelfVideoStateChanged:
                        var ee = e.eventData;
                        if (!t || !t.call_id) return;
                        M.updateCallWithCallInfo(t), ce(t.call_id, !0, ee);
                        break;
                    case F.WACallEvent.PeerVideoStateChanged:
                        var te = e.eventData;
                        if (!t || !t.call_id) return;
                        M.updateCallWithCallInfo(t), ce(t.call_id, !1, te);
                        break;
                    case F.WACallEvent.VideoRenderStarted:
                    case F.WACallEvent.MuteStateChanged:
                    case F.WACallEvent.VideoRenderFormatChanged:
                    case F.WACallEvent.VideoPreviewReady:
                        M.updateCallWithCallInfo(t);
                        break;
                    case F.WACallEvent.PendingCallAutoRejected:
                        break;
                    case F.WACallEvent.SyncDevices:
                        (0, I.default)(e.eventData.users);
                        break;
                    case F.WACallEvent.CallAutoConnect:
                        break;
                    default:
                        __LOG__(2)`voip:event: Unknown Event:`
                }
            }
            t.Voip = Q, K.on(F.MAIN_IPC_EVENTS.EVENT, (function(e, t) {
                return de(t)
            })), K.on(F.MAIN_IPC_EVENTS.SIGNALING, (function(e, t) {
                return function(e) {
                    var t = e.callId,
                        r = e.peerJid,
                        a = e.payload,
                        n = a[0],
                        i = {
                            type: n,
                            call_id: t,
                            peer_jid: r
                        },
                        o = {
                            common: i,
                            payload: a
                        },
                        l = O.TYPE_STR;
                    switch (__LOG__(2)`voip:signallingCallback: type:"${n}" payload:`, n) {
                        case l.OFFER:
                            z = self.setTimeout((function() {
                                z = null, (0, A.sendCallOffer)(o).then((function(e) {
                                    if (null == e ? void 0 : e.status) {
                                        var r = C.CallCollection.get(t);
                                        switch (e.status) {
                                            case 200:
                                                if (e.payload) {
                                                    var a, n, o, l = Number(null !== (a = null === (n = e.payload[1]) || void 0 === n ? void 0 : n.error) && void 0 !== a ? a : 0);
                                                    __LOG__(2)`voip:recv:offerAck:`;
                                                    var s = {
                                                        peer_jid: i.peer_jid,
                                                        type: "offer",
                                                        error: l,
                                                        ack: e.payload
                                                    };
                                                    null === (o = W) || void 0 === o || o.handleIncomingSignalingAck(s)
                                                } else __LOG__(2)`voip:recv:offer_ack: no payload`;
                                                break;
                                            case 409:
                                                __LOG__(2)`voip:recv:offer_ack: phone_busy`, r && r.setState(F.CALL_STATES.REMOTE_CALL_IN_PROGRESS);
                                                break;
                                            default:
                                                __LOG__(2)`voip:recv:offerAck: Unknown status:${e.status}`
                                        }
                                    }
                                })).catch((function() {}))
                            }), 500);
                            break;
                        case l.ENC_REKEY:
                            (0, A.sendEncRekey)(o).then(ae(l.ENC_REKEY, r)).catch((function() {}));
                            break;
                        case l.REJECT:
                            var s;
                            (null === (s = a[1]) || void 0 === s ? void 0 : s.reason) === O.ENC_RETRY_RECEIPT_ATTRS.SINGLE_PARTICIPANT ? (0, A.prepareRetryReceipt)(a).then((function() {
                                re(o, n, r)
                            })).catch((function() {
                                __LOG__(3)`voip:retry_receipt could not generate keys section`
                            })) : re(o, n, r);
                            break;
                        case l.RECEIPT:
                            var c;
                            (null === (c = a[1]) || void 0 === c ? void 0 : c.type) === O.ENC_RETRY_RECEIPT_ATTRS.GROUP_CALL ? (0, A.prepareRetryReceipt)(a).then((function() {
                                re(o, n, r)
                            })).catch((function() {
                                __LOG__(3)`voip:retry_receipt could not generate keys section`
                            })) : re(o, n, r);
                            break;
                        default:
                            re(o, n, r)
                    }
                }(t)
            })), K.on(F.MAIN_IPC_EVENTS.LOGGING, (function(e, t) {
                return function(e) {
                    if (Array.isArray(e.data) && !(e.data.length < 1))
                        for (var t = 0; t < e.data.length; t++) __LOG__(2)`voip log: ${e.data[t]}`
                }(t)
            })), K.on(F.MAIN_IPC_EVENTS.LOG_PATH, (function(e, t) {
                var r;
                null === (r = W) || void 0 === r || r.setLogPath(t)
            }))
        },
        163697: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleIncomingSignalingMessage = function(e, t) {
                var o = a.CallCollection.get(e.call_id);
                if (!o) return void __LOG__(3)`voip:voip_common_disabled: Received signaling msg type ${e.type} but could not find call for call ID`;
                switch (e.type) {
                    case n.TYPE.OFFER:
                        null != e.t && (o.offerTime = e.t), o.isVideo = !!e.isVideoCall, o.setState(i.CALL_STATES.INCOMING_RING);
                        break;
                    case n.TYPE.TERMINATE:
                        switch (o.setState(i.CALL_STATES.ENDED), t.payload[1].reason) {
                            case "timeout":
                                null == l && (l = r(394785)), l.generateMissedCallLog(e.call_creator, o.offerTime, o.isVideo, !1, o.isSilenced)
                        }
                }
            };
            var a = r(970280),
                n = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = o(t);
                    if (r && r.has(e)) return r.get(e);
                    var a = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var l = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                            l && (l.get || l.set) ? Object.defineProperty(a, i, l) : a[i] = e[i]
                        } a.default = e, r && r.set(e, a);
                    return a
                }(r(216996)),
                i = r(151853);

            function o(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (o = function(e) {
                    return e ? r : t
                })(e)
            }
            var l = null
        },
        236996: (e, t, r) => {
            "use strict";
            var a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = (0, n.randomHex)(16).substr(0, 64);
                return __LOG__(2)`voip:generateCallId: ${e}`, e
            };
            var n = r(880611);
            a(r(442435))
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
        2288: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CallWamEvent = void 0;
            var a = r(644798),
                n = r(447853),
                i = a.TYPES.BOOLEAN,
                o = a.TYPES.INTEGER,
                l = a.TYPES.NUMBER,
                s = a.TYPES.STRING,
                c = a.TYPES.TIMER,
                u = (0, a.defineEvents)({
                    Call: [462, {
                            acceptAckLatencyMs: [1016, c],
                            acceptToFirstFrameDecodedTSs: [1434, c],
                            acceptedButNotConnectedTimeSpentMs: [1015, c],
                            ackToFirstFrameEncodedTSs: [1435, c],
                            activeRelayProtocol: [412, o],
                            adaptiveTcpErrorBitmap: [1428, o],
                            aflDisPrefetchFailure1x: [1186, c],
                            aflDisPrefetchFailure2x: [1187, c],
                            aflDisPrefetchFailure4x: [1188, c],
                            aflDisPrefetchFailure8x: [1189, c],
                            aflDisPrefetchFailureTotal: [1190, c],
                            aflDisPrefetchSuccess1x: [1191, c],
                            aflDisPrefetchSuccess2x: [1192, c],
                            aflDisPrefetchSuccess4x: [1193, c],
                            aflDisPrefetchSuccess8x: [1194, c],
                            aflDisPrefetchSuccessTotal: [1195, c],
                            aflNackFailure1x: [1196, c],
                            aflNackFailure2x: [1197, c],
                            aflNackFailure4x: [1198, c],
                            aflNackFailure8x: [1199, c],
                            aflNackFailureTotal: [1200, c],
                            aflNackSuccess1x: [1201, c],
                            aflNackSuccess2x: [1202, c],
                            aflNackSuccess4x: [1203, c],
                            aflNackSuccess8x: [1204, c],
                            aflNackSuccessTotal: [1205, c],
                            aflOther1x: [1206, c],
                            aflOther2x: [1207, c],
                            aflOther4x: [1208, c],
                            aflOther8x: [1209, c],
                            aflOtherTotal: [1210, c],
                            aflPureLoss1x: [1211, c],
                            aflPureLoss2x: [1212, c],
                            aflPureLoss4x: [1213, c],
                            aflPureLoss8x: [1214, c],
                            aflPureLossTotal: [1215, c],
                            allocErrorBitmap: [593, o],
                            altAfFirstPongTimeMs: [1374, c],
                            altAfPingsSent: [1375, o],
                            androidAudioRouteMismatch: [1055, i],
                            androidCamera2MinHardwareSupportLevel: [444, n.ANDROID_CAMERA2_SUPPORT_LEVEL],
                            androidCameraApi: [443, n.ANDROID_CAMERA_API],
                            androidSystemPictureInPictureT: [477, c],
                            androidTelecomTimeSpentBeforeReject: [497, c],
                            appInBackgroundDuringCall: [1109, i],
                            audStreamMixPct: [1119, l],
                            audioCalleeAcceptToDecodeT: [1565, o],
                            audioCallerOfferToDecodeT: [1566, o],
                            audioCodecDecodedFecFrames: [755, o],
                            audioCodecDecodedPlcFrames: [756, o],
                            audioCodecEncodedFecFrames: [751, o],
                            audioCodecEncodedNonVoiceFrames: [753, o],
                            audioCodecEncodedThrottledVoiceFrames: [1177, o],
                            audioCodecEncodedVoiceFrames: [752, o],
                            audioCodecReceivedFecFrames: [754, o],
                            audioDecodeErrors: [1521, o],
                            audioDeviceIssues: [860, o],
                            audioDeviceLastIssue: [861, o],
                            audioDeviceSwitchCount: [867, o],
                            audioDeviceSwitchDuration: [866, c],
                            audioEncodeErrors: [1522, o],
                            audioFrameLoss1xMs: [724, c],
                            audioFrameLoss2xMs: [725, c],
                            audioFrameLoss4xMs: [726, c],
                            audioFrameLoss8xMs: [727, c],
                            audioGetFrameUnderflowPs: [83, o],
                            audioInbandFecDecoded: [679, o],
                            audioInbandFecEncoded: [678, o],
                            audioJbResets: [1318, o],
                            audioJbResetsPartial: [1334, o],
                            audioLossPeriodCount: [722, o],
                            audioNackHbhEnabled: [1184, i],
                            audioNackReqPktsProcessed: [1271, o],
                            audioNackReqPktsRecvd: [646, o],
                            audioNackReqPktsSent: [645, o],
                            audioNackRtpRetransmitDiscardCount: [649, o],
                            audioNackRtpRetransmitFailCount: [651, o],
                            audioNackRtpRetransmitRecvdCount: [648, o],
                            audioNackRtpRetransmitReqCount: [647, o],
                            audioNackRtpRetransmitSentCount: [650, o],
                            audioNumPiggybackRxPkt: [1008, o],
                            audioNumPiggybackTxPkt: [1007, o],
                            audioPacketizeErrors: [1523, o],
                            audioParseErrors: [1524, o],
                            audioPktsNotTriggerOutOfPaused: [1283, o],
                            audioPlayCbIntervalGtDefaultCnt: [1138, o],
                            audioPlayCbLatencyGteMaxCnt: [1139, o],
                            audioPutFrameOverflowPs: [82, o],
                            audioRecCbLatencyAvg: [1036, o],
                            audioRecCbLatencyMax: [1035, o],
                            audioRecCbLatencyMin: [1034, o],
                            audioRecCbLatencyStddev: [1037, o],
                            audioRtxPktDiscarded: [677, o],
                            audioRtxPktProcessed: [676, o],
                            audioRtxPktSent: [675, o],
                            audioRxAvgFpp: [728, l],
                            audioRxPktLossPctDuringPip: [642, l],
                            audioRxUlpFecPkts: [1358, o],
                            audioStreamRecreations: [1561, o],
                            audioSwbDurationMs: [1322, c],
                            audioTarget06Ms: [1351, o],
                            audioTarget1015Ms: [1352, o],
                            audioTarget1520Ms: [1353, o],
                            audioTarget2030Ms: [1354, o],
                            audioTarget30PlusMs: [1355, o],
                            audioTarget610Ms: [1356, o],
                            audioTargetBitrateDrops: [1357, o],
                            audioTotalBytesOnNonDefCell: [450, l],
                            audioTxUlpFecPkts: [1359, o],
                            audioUlpFecRecovered: [1360, o],
                            avAvgDelta: [192, l],
                            avMaxDelta: [193, l],
                            avatarAttempted: [1412, i],
                            avatarCanceled: [1391, i],
                            avatarCanceledCount: [1392, o],
                            avatarDurationT: [1393, c],
                            avatarEnabled: [1394, i],
                            avatarEnabledCount: [1395, o],
                            avatarFailed: [1396, i],
                            avatarFailedCount: [1397, o],
                            avatarLoadingT: [1398, c],
                            aveNumPeersAutoPaused: [578, o],
                            aveTimeBwResSwitches: [994, c],
                            aveTimeBwVidRcDynCondTrue: [719, c],
                            avgClockCbT: [139, c],
                            avgCpuUtilizationPct: [1220, l],
                            avgDecodeT: [136, c],
                            avgEncRestartAndKfGenT: [1048, c],
                            avgEncRestartIntervalT: [1047, c],
                            avgEncodeT: [135, c],
                            avgEventQueuingDelay: [816, o],
                            avgLoudnessDiffNoiseFrames: [1302, l],
                            avgLoudnessDiffSpeechFrames: [1303, l],
                            avgLoudnessInputNoiseFrames: [1304, l],
                            avgLoudnessInputSpeechFrames: [1305, l],
                            avgLoudnessOutputNoiseFrames: [1306, l],
                            avgLoudnessOutputSpeechFrames: [1307, l],
                            avgPlayCbIntvT: [1152, c],
                            avgPlayCbT: [137, c],
                            avgRecordCbIntvT: [495, c],
                            avgRecordCbT: [138, c],
                            avgRecordGetFrameT: [140, c],
                            avgTargetBitrate: [141, l],
                            avgTcpConnCount: [413, o],
                            avgTcpConnLatencyInMsec: [414, c],
                            batteryDropMatched: [355, i],
                            batteryDropTriggered: [442, i],
                            batteryLowMatched: [354, i],
                            batteryLowTriggered: [441, i],
                            batteryRulesApplied: [353, i],
                            biDirRelayRebindLatencyMs: [843, c],
                            biDirRelayResetLatencyMs: [844, c],
                            boundSocketIpAddressIsInvalid: [1222, o],
                            builtinAecAvailable: [33, i],
                            builtinAecEnabled: [38, i],
                            builtinAecImplementor: [36, s],
                            builtinAecUuid: [37, s],
                            builtinAgcAvailable: [34, i],
                            builtinNsAvailable: [35, i],
                            bwaVidDisablingCandidate: [1114, i],
                            bwaVidDisablingRxCandidateDuration: [1116, c],
                            bwaVidDisablingTxCandidateDuration: [1115, c],
                            bweEvaluationScoreE2e: [1068, o],
                            bweEvaluationScoreSfuDl: [1070, o],
                            bweEvaluationScoreSfuUl: [1069, o],
                            c2DecAvgT: [302, c],
                            c2DecFrameCount: [300, o],
                            c2DecFramePlayed: [301, o],
                            c2EncAvgT: [298, c],
                            c2EncCpuOveruseCount: [299, o],
                            c2EncFrameCount: [297, o],
                            c2RxTotalBytes: [296, o],
                            c2TxTotalBytes: [295, o],
                            callAcceptFuncT: [132, c],
                            callAecMode: [39, n.AEC_MODE],
                            callAecOffset: [42, o],
                            callAecTailLength: [43, o],
                            callAgcMode: [52, n.AGC_MODE],
                            callAndrGcmFgEnabled: [268, i],
                            callAndroidAudioMode: [55, o],
                            callAndroidRecordAudioPreset: [57, o],
                            callAndroidRecordAudioSource: [56, o],
                            callAudioEngineType: [54, n.AUDIO_ENGINE_TYPE],
                            callAudioOutputRoute: [1336, n.AUDIO_OUTPUT_ROUTE],
                            callAudioRestartCount: [96, l],
                            callAudioRestartReason: [97, l],
                            callAvgAudioRxPipBitrate: [640, l],
                            callAvgRottRx: [259, c],
                            callAvgRottTx: [258, c],
                            callAvgRtt: [107, c],
                            callAvgVideoRxPipBitrate: [638, l],
                            callBatteryChangePct: [195, l],
                            callCalculatedEcOffset: [50, o],
                            callCalculatedEcOffsetStddev: [51, o],
                            callConnectionLatencyMs: [1406, c],
                            callCreatorHid: [505, s],
                            callDefNetwork: [405, n.CALL_NETWORK_MEDIUM],
                            callEcRestartCount: [99, l],
                            callEchoEnergy: [46, l],
                            callEchoLikelihood: [44, o],
                            callEchoLikelihoodBeforeEc: [47, l],
                            callEndFrameLossMs: [1142, c],
                            callEndFuncT: [130, c],
                            callEndReconnecting: [70, i],
                            callEndReconnectingBeforeCallActive: [1377, i],
                            callEndReconnectingBeforeNetworkChange: [877, i],
                            callEndReconnectingBeforeP2pFailover: [875, i],
                            callEndReconnectingBeforeRelayFailover: [869, i],
                            callEndReconnectingBeforeRelayReset: [948, i],
                            callEndReconnectingRelayPingable: [1385, i],
                            callEndReconnectingSignalingAccessible: [1386, i],
                            callEndReconnectingSoonAfterCallActive: [848, i],
                            callEndReconnectingSoonAfterNetworkChange: [878, i],
                            callEndReconnectingSoonAfterP2pFailover: [876, i],
                            callEndReconnectingSoonAfterRelayFailover: [870, i],
                            callEndReconnectingSoonAfterRelayReset: [949, i],
                            callEndTxStopped: [1517, i],
                            callEndedDuringAudFreeze: [518, i],
                            callEndedDuringVidFreeze: [517, i],
                            callEndedInterrupted: [23, i],
                            callEnterPipModeCount: [626, o],
                            callFromUi: [2, n.CALL_FROM_UI],
                            callHistEchoLikelihood: [45, l],
                            callInitRxPktLossPct3s: [1157, l],
                            callInitialRtt: [109, c],
                            callInterrupted: [22, i],
                            callLastRtt: [108, c],
                            callMaxRtt: [106, c],
                            callMessagesBufferedCount: [422, o],
                            callMinRtt: [105, c],
                            callNcTestId: [1568, s],
                            callNcTestName: [1569, s],
                            callNetwork: [76, n.CALL_NETWORK_MEDIUM],
                            callNetworkSubtype: [77, o],
                            callNsMode: [53, n.NS_MODE],
                            callOfferAckTimout: [159, l],
                            callOfferDelayT: [243, c],
                            callOfferElapsedT: [102, c],
                            callOfferFanoutCount: [588, o],
                            callOfferReceiptDelay: [134, c],
                            callP2pAvgRtt: [457, c],
                            callP2pDisabled: [18, i],
                            callP2pMinRtt: [456, c],
                            callPeerAppVersion: [15, s],
                            callPeerIpStr: [10, s],
                            callPeerIpv4: [8, o],
                            callPeerPlatform: [5, s],
                            callPeerTestBucket: [1225, s],
                            callPendingCallsAcceptedCount: [501, o],
                            callPendingCallsCount: [498, o],
                            callPendingCallsRejectedCount: [499, o],
                            callPendingCallsTerminatedCount: [500, o],
                            callPipMode10sCount: [628, o],
                            callPipMode10sT: [633, c],
                            callPipMode120sCount: [631, o],
                            callPipMode120sT: [636, c],
                            callPipMode240sCount: [632, o],
                            callPipMode240sT: [637, c],
                            callPipMode30sCount: [629, o],
                            callPipMode30sT: [634, c],
                            callPipMode60sCount: [630, o],
                            callPipMode60sT: [635, c],
                            callPipModeT: [627, c],
                            callPlaybackBufferSize: [59, o],
                            callPlaybackCallbackStopped: [25, i],
                            callPlaybackFramesPs: [93, l],
                            callPlaybackSilenceRatio: [95, l],
                            callRadioType: [231, n.RADIO_TYPE],
                            callRandomId: [529, s],
                            callRecentPlaybackFramesPs: [94, l],
                            callRecentRecordFramesPs: [29, l],
                            callReconnectingProbeState: [1492, o],
                            callReconnectingStateCount: [438, o],
                            callRecordBufferSize: [58, o],
                            callRecordCallbackStopped: [24, i],
                            callRecordFramesPs: [28, o],
                            callRecordMaxEnergyRatio: [98, l],
                            callRecordSilenceRatio: [26, o],
                            callRejectFuncT: [131, c],
                            callRelayAvgRtt: [455, c],
                            callRelayBindStatus: [16, n.CALL_RELAY_BIND_STATUS],
                            callRelayCreateT: [104, c],
                            callRelayErrorCode: [1300, o],
                            callRelayMinRtt: [454, c],
                            callRelayServer: [17, s],
                            callRelaysReceived: [1301, o],
                            callReplayerId: [1155, s],
                            callResult: [63, n.CALL_RESULT_TYPE],
                            callRingLatencyMs: [1407, c],
                            callRingingT: [103, c],
                            callRxAvgBitrate: [121, l],
                            callRxAvgBwe: [122, l],
                            callRxAvgJitter: [125, c],
                            callRxAvgLossPeriod: [128, c],
                            callRxBweCnt: [1329, o],
                            callRxMaxJitter: [124, c],
                            callRxMaxLossPeriod: [127, c],
                            callRxMinJitter: [123, c],
                            callRxMinLossPeriod: [126, c],
                            callRxPktLossPct: [120, l],
                            callRxPktLossRetransmitPct: [892, l],
                            callRxStoppedT: [100, c],
                            callSamplingRate: [30, o],
                            callSelfIpStr: [9, s],
                            callSelfIpv4: [7, o],
                            callServerNackErrorCode: [68, o],
                            callSetupErrorType: [71, n.CALL_SETUP_ERROR_TYPE],
                            callSetupT: [101, c],
                            callSide: [1, n.CALL_SIDE],
                            callSoundPortFuncT: [133, c],
                            callStartFuncT: [129, c],
                            callSwAecMode: [41, o],
                            callSwAecType: [40, n.SW_AEC_TYPE],
                            callSystemPipDurationT: [1363, c],
                            callT: [92, c],
                            callTermReason: [69, n.CALL_TERM_REASON],
                            callTestBoolean: [1324, i],
                            callTestBucket: [19, s],
                            callTestDouble: [1325, l],
                            callTestEvent: [318, o],
                            callTestInteger: [1326, n.CALL_TEST_INTEGER],
                            callTestLong: [1327, o],
                            callTestString: [1328, s],
                            callTonesDetectedInRecord: [49, o],
                            callTonesDetectedInRingback: [48, o],
                            callTransitionCount: [78, o],
                            callTransitionCountCellularToWifi: [432, o],
                            callTransitionCountWifiToCellular: [431, o],
                            callTransport: [72, n.CALL_TRANSPORT_TYPE],
                            callTransportMaxAllocRetries: [1268, o],
                            callTransportP2pToRelayFallbackCount: [80, o],
                            callTransportPeerTcpUsed: [587, i],
                            callTransportRelayToRelayFallbackCount: [79, o],
                            callTransportTcpFallbackToUdpCount: [1429, o],
                            callTransportTcpUsedCount: [1430, o],
                            callTransportTotalRxAllocBytes: [1319, l],
                            callTransportTotalTxAllocBytes: [1320, l],
                            callTransportTxAllocCnt: [1321, o],
                            callTxAvgBitrate: [112, l],
                            callTxAvgBwe: [113, l],
                            callTxAvgJitter: [116, c],
                            callTxAvgLossPeriod: [119, c],
                            callTxBweCnt: [1330, o],
                            callTxMaxJitter: [115, c],
                            callTxMaxLossPeriod: [118, c],
                            callTxMinJitter: [114, c],
                            callTxMinLossPeriod: [117, c],
                            callTxPktErrorPct: [111, l],
                            callTxPktLossPct: [110, l],
                            callTxStoppedT: [1518, c],
                            callUsedVpn: [1574, i],
                            callUserRate: [20, o],
                            callWakeupSource: [156, n.CALL_WAKEUP_SOURCE],
                            calleeAcceptToConnectedT: [1383, c],
                            calleeAcceptToDecodeT: [447, c],
                            calleeOfferToRingT: [1384, c],
                            callerInContact: [476, i],
                            callerOfferToDecodeT: [445, c],
                            callerVidRtpToDecodeT: [446, c],
                            cameraFormats: [765, o],
                            cameraIssues: [850, o],
                            cameraLastIssue: [851, o],
                            cameraOffCount: [331, o],
                            cameraPauseT: [1131, c],
                            cameraPermission: [849, i],
                            cameraPreviewMode: [322, n.CAMERA_PREVIEW_MODE],
                            cameraStartDuration: [852, c],
                            cameraStartFailureDuration: [856, c],
                            cameraStartMode: [233, n.CAMERA_START_MODE_PARAMS],
                            cameraStartToFirstFrameT: [916, c],
                            cameraStopDuration: [853, c],
                            cameraStopFailureCount: [858, o],
                            cameraSwitchCount: [855, o],
                            cameraSwitchDuration: [854, c],
                            cameraSwitchFailureDuration: [857, c],
                            captureDriverNotifyCountSs: [1437, o],
                            clampedBwe: [527, i],
                            codecSamplingRate: [624, o],
                            combinedE2eAvgRtt: [760, l],
                            combinedE2eMaxRtt: [761, l],
                            combinedE2eMinRtt: [759, l],
                            confBridgeSamplingRate: [623, o],
                            connectedToCar: [1226, i],
                            conservativeModeStopped: [974, i],
                            conservativeRampUpExploringT: [743, c],
                            conservativeRampUpHeldCount: [643, o],
                            conservativeRampUpHoldingT: [741, c],
                            conservativeRampUpRampingUpT: [742, c],
                            cpuOverUtilizationPct: [1223, l],
                            createdFromGroupCallDowngrade: [519, i],
                            criticalGroupUpdateProcessT: [1556, c],
                            croppedColumnsSs: [1438, o],
                            croppedRowsSs: [1439, o],
                            dataLimitOnAltNetworkReached: [537, i],
                            deviceBoard: [230, s],
                            deviceClass: [1269, s],
                            deviceHardware: [229, s],
                            dlOnlyHighPlrPct: [1364, l],
                            downlinkOvershootCountSs: [1440, o],
                            droppedVideoFrameOutOfPausedMs: [1284, c],
                            dtxRxByteFrameCount: [914, o],
                            dtxRxCount: [912, o],
                            dtxRxDurationT: [911, c],
                            dtxRxTotalCount: [913, o],
                            dtxRxTotalFrameCount: [1083, o],
                            dtxTxByteFrameCount: [910, o],
                            dtxTxCount: [619, o],
                            dtxTxDurationT: [618, c],
                            dtxTxTotalCount: [909, o],
                            dtxTxTotalFrameCount: [1082, o],
                            durationTSs: [1441, c],
                            echoCancellationMsPerSec: [320, o],
                            echoCancellationNumLoops: [1264, o],
                            echoCancelledFrameCount: [940, o],
                            echoEstimatedFrameCount: [941, o],
                            echoMaxConvergeFrameCount: [1265, o],
                            echoProbGte40FrmCnt: [1387, o],
                            echoProbGte50FrmCnt: [1388, o],
                            echoProbGte60FrmCnt: [1389, o],
                            echoSpeakerModeFrameCount: [987, o],
                            encoderCompStepdowns: [81, o],
                            endCallAfterConfirmation: [90, n.END_CALL_CONFIRMATION_TYPE],
                            failureToCreateAltSocket: [534, o],
                            failureToCreateTestAltSocket: [532, o],
                            fastplayMaxDurationMs: [1005, c],
                            fastplayNumFrames: [1004, o],
                            fastplayNumTriggers: [1006, o],
                            fieldStatsRowType: [328, n.FIELD_STATS_ROW_TYPE],
                            finishedDlBwe: [503, i],
                            finishedOverallBwe: [528, i],
                            finishedUlBwe: [502, i],
                            freezeAheadBweCongestionCorrPct: [1051, l],
                            freezeBweCongestionCorrPct: [1009, l],
                            gainAdjustedMicAvgPower: [1292, o],
                            gainAdjustedMicMaxPower: [1293, o],
                            gainAdjustedMicMinPower: [1294, o],
                            greaterThanLowPlrIsRandomCount: [1529, o],
                            groupAcceptNoCriticalGroupUpdate: [1013, i],
                            groupAcceptToCriticalGroupUpdateMs: [1014, c],
                            groupCallCallerParticipantCountAtCallStart: [439, o],
                            groupCallInviteCountSinceCallStart: [360, o],
                            groupCallIsFirstSegment: [1578, i],
                            groupCallIsGroupCallInvitee: [357, i],
                            groupCallIsLastSegment: [356, i],
                            groupCallNackCountSinceCallStart: [361, o],
                            groupCallReringCountSinceCallStart: [946, o],
                            groupCallReringNackCountSinceCallStart: [947, o],
                            groupCallSegmentIdx: [329, o],
                            groupCallTotalCallTSinceCallStart: [358, c],
                            groupCallTotalP3CallTSinceCallStart: [359, c],
                            groupCallVideoMaximizedCount: [592, o],
                            hasRestrictedSettingsForAudioCalls: [539, i],
                            hbhKeyInconsistencyCnt: [1427, o],
                            hbhSrtcpRxBytes: [1256, o],
                            hbhSrtcpRxRejAuthFail: [1257, o],
                            hbhSrtcpRxRejEinval: [1258, o],
                            hbhSrtcpRxRejectedPktCntFromOldRelay: [1219, o],
                            hbhSrtcpRxSuccessNackPktCnt: [1248, o],
                            hbhSrtcpRxSuccessRembPktCnt: [1249, o],
                            hbhSrtcpRxSuccessSbwaPktCnt: [1250, o],
                            hbhSrtcpRxSuccessSpPktCnt: [1251, o],
                            hbhSrtcpTxBytes: [1259, o],
                            hbhSrtcpTxNackPktCnt: [1254, o],
                            hbweHistoryBasedAvgVideoTxBitrate: [1279, o],
                            hbweHistoryBasedBweInstantRampUpDone: [1280, i],
                            hbweHistoryBasedBweUpdateCeilingDone: [1281, i],
                            hbweHistoryBasedBweUpdateCeilingForced: [1282, i],
                            highPeerBweT: [884, c],
                            hisBasedInitialTxBitrate: [342, o],
                            hisInfoCouldBeUsedForInitBwe: [339, i],
                            historyBasedBweActivated: [807, i],
                            historyBasedBweEnabled: [806, i],
                            historyBasedBweSuccess: [808, i],
                            historyBasedBweVideoTxBitrate: [809, o],
                            historyBasedMinRttAvailable: [1431, i],
                            historyBasedMinRttCongestionCount: [1432, o],
                            historyBasedMinRttDividedByRuntimeMinRtt: [1433, l],
                            imbalancedDlPlrTPct: [1350, l],
                            incomingCallUiAction: [387, n.INCOMING_CALL_UI_ACTION_TYPE],
                            initBweSource: [337, n.INIT_BWE_SOURCE],
                            initialAudioRenderDelayT: [1520, c],
                            initialEstimatedTxBitrate: [244, l],
                            invalidRelayMessageCnt: [1575, o],
                            isCallCreator: [1323, i],
                            isCallFull: [1149, i],
                            isFromCallLink: [1316, i],
                            isIpv6Capable: [91, i],
                            isLinkCreator: [1372, i],
                            isLinkJoin: [1335, i],
                            isLinkedGroupCall: [1090, i],
                            isOsMicrophoneMute: [1227, i],
                            isPendingCall: [976, i],
                            isRejoin: [927, i],
                            isRering: [945, i],
                            isScheduledCall: [1488, i],
                            isVoiceChat: [1577, i],
                            jbAvgDelay: [146, l],
                            jbAvgDelayFromDisorderDistanceHist: [1413, l],
                            jbAvgDelayFromPutHist: [1414, l],
                            jbAvgDelayUniform: [644, l],
                            jbAvgDisorderTargetSize: [1086, l],
                            jbAvgPutHistTargetSize: [1415, l],
                            jbAvgTargetSize: [1012, l],
                            jbAvgTargetSizeAddedFromDisorderDistanceHist: [1416, l],
                            jbAvgTargetSizeFromDisorderDistanceHist: [1417, l],
                            jbAvgTargetSizeFromPutHist: [1418, l],
                            jbDiscards: [150, l],
                            jbEmpties: [151, l],
                            jbEmptyPeriods1x: [997, l],
                            jbEmptyPeriods2x: [998, l],
                            jbEmptyPeriods4x: [999, l],
                            jbEmptyPeriods8x: [1e3, l],
                            jbGetFromDisorderDistanceHist: [1419, l],
                            jbGetFromPutHist: [1420, l],
                            jbGets: [152, l],
                            jbLastDelay: [149, l],
                            jbLost: [277, l],
                            jbLostEmptyDuringPip: [641, o],
                            jbLostEmptyHighPeerBwePerSec: [777, l],
                            jbLostEmptyLowPeerBwePerSec: [775, l],
                            jbLostEmptyLowToHighPeerBwePerSec: [776, l],
                            jbMaxDelay: [148, l],
                            jbMaxDelayFromDisorderDistanceHist: [1421, l],
                            jbMaxDelayFromPutHist: [1422, l],
                            jbMaxDisorderTargetSize: [1087, l],
                            jbMaxPutHistTargetSize: [1423, l],
                            jbMaxTargetSizeAddedFromDisorderDistanceHist: [1424, l],
                            jbMaxTargetSizeFromDisorderDistanceHist: [1425, l],
                            jbMaxTargetSizeFromPutHist: [1426, l],
                            jbMinDelay: [147, l],
                            jbNonSpeechDiscards: [846, l],
                            jbPuts: [153, l],
                            jbTotalEmptyPeriods: [996, l],
                            jbVoiceFrames: [1081, o],
                            joinableAfterCall: [895, i],
                            joinableDuringCall: [894, i],
                            joinableNewUi: [893, i],
                            keyFrameVqsOpenh264: [1315, l],
                            l1Locations: [986, s],
                            landscapeModeDurationT: [1510, c],
                            landscapeModeEnabled: [1516, o],
                            landscapeModeLockedDurationT: [1511, c],
                            landscapeModeLockedSwitchCount: [1512, o],
                            landscapeModePipMixedDurationT: [1513, c],
                            landscapeModeSwitchCount: [1514, o],
                            lastConnErrorStatus: [415, o],
                            libsrtpVersionUsed: [504, n.SRTP_LIBRARY_VERSION],
                            lobbyVisibleT: [1127, c],
                            logSampleRatio: [1120, o],
                            lonelyT: [1331, c],
                            longConnect: [21, i],
                            lossOfAltSocket: [535, o],
                            lossOfTestAltSocket: [533, o],
                            lowDataUsageBitrate: [157, l],
                            lowPeerBweT: [885, c],
                            lowToHighPeerBweT: [886, c],
                            malformedStanzaXpath: [452, s],
                            mathPlcRemoveHighPktLossCongCount: [1530, o],
                            maxConnectedParticipants: [1085, o],
                            maxEventQueueDepth: [558, o],
                            mediaStreamSetupT: [448, c],
                            micAvgPower: [253, o],
                            micMaxPower: [252, o],
                            micMinPower: [251, o],
                            micPermission: [859, i],
                            micStartDuration: [862, c],
                            micStartToFirstCallbackT: [931, c],
                            micStopDuration: [863, c],
                            mlPlcModelAvailableInCall: [1531, i],
                            mlPlcModelAvgDownloadTime: [1532, c],
                            mlPlcModelAvgExtractionTime: [1533, c],
                            mlPlcModelAvgInferenceInterval: [1534, o],
                            mlPlcModelAvgInferenceTime: [1535, c],
                            mlPlcModelDownloadFailureCount: [1536, o],
                            mlPlcModelInferenceFailureCount: [1537, o],
                            mlPlcModelMaxInferenceTime: [1538, c],
                            mlPlcModelMinInferenceTime: [1539, c],
                            mlPlcModelShortInferenceIntervalCount: [1540, o],
                            mlPlcRemoveHighPktLossCongCount: [1541, o],
                            mlShimAvgCreationTime: [1542, c],
                            mlShimCreationFailureCount: [1543, o],
                            multipleTxRxRelaysInUse: [838, i],
                            muteNotSupportedCount: [1169, o],
                            muteReqAlreadyMutedCount: [1170, o],
                            muteReqTimeoutsCount: [1171, o],
                            nativeSamplesPerFrame: [32, s],
                            nativeSamplingRate: [31, s],
                            netHealthAverageCount: [1498, o],
                            netHealthGoodCount: [1499, o],
                            netHealthMeasuringCount: [1500, o],
                            netHealthNonetworkCount: [1501, o],
                            netHealthPercentInAverage: [1502, l],
                            netHealthPercentInGood: [1503, l],
                            netHealthPercentInMeasuring: [1504, l],
                            netHealthPercentInNonetwork: [1505, l],
                            netHealthPercentInPoor: [1506, l],
                            netHealthPoorCount: [1507, o],
                            netHealthSlowPoorByReconnect: [1508, o],
                            netHealthSlowPoorByRxStop: [1509, o],
                            neteqAcceleratedFrames: [653, o],
                            neteqExpandedFrames: [652, o],
                            networkFailoverTriggeredCount: [1135, o],
                            networkMediumChangeLatencyMs: [995, c],
                            newEndCallSurveyVersion: [1361, o],
                            nseEnabled: [1128, i],
                            nseOfflineQueueMs: [1129, c],
                            numAsserts: [933, o],
                            numConnectedParticipants: [330, o],
                            numConnectedPeers: [1052, o],
                            numCriticalGroupUpdateDropped: [567, o],
                            numCropCaptureContentSs: [1442, o],
                            numDirPjAsserts: [985, o],
                            numInvitedParticipants: [1054, o],
                            numL1Errors: [929, o],
                            numL2Errors: [930, o],
                            numOutOfOrderCriticalGroupUpdate: [625, o],
                            numOutgoingRingingPeers: [1053, o],
                            numPeersAutoPausedOnce: [577, o],
                            numRenderSkipGreenFrame: [1029, o],
                            numResSwitch: [993, o],
                            numTransitionsToSpeech: [1113, o],
                            numVidDlAutoPause: [574, o],
                            numVidDlAutoResume: [576, o],
                            numVidDlAutoResumeRejectBadAudio: [579, o],
                            numVidRcDynCondTrue: [717, o],
                            numVidUlAutoPause: [559, o],
                            numVidUlAutoPauseFail: [560, o],
                            numVidUlAutoPauseRejectHighSendingRate: [564, o],
                            numVidUlAutoPauseRejectTooEarly: [565, o],
                            numVidUlAutoPauseUserAction: [566, o],
                            numVidUlAutoResume: [561, o],
                            numVidUlAutoResumeFail: [562, o],
                            numVidUlAutoResumeRejectAudioLqm: [563, o],
                            numberOfProcessors: [27, o],
                            offerAckLatencyMs: [1017, c],
                            oibweDlProbingTime: [805, c],
                            oibweE2eProbingTime: [802, c],
                            oibweNotFinishedWhenCallActive: [868, i],
                            oibweOibleProbingTime: [803, c],
                            oibweUlProbingTime: [804, c],
                            onMobileDataSaver: [525, i],
                            onWifiAtStart: [540, i],
                            oneSideInitRxBitrate: [507, o],
                            oneSideInitTxBitrate: [506, o],
                            oneSideMinPeerInitRxBitrate: [509, o],
                            oneSideNumRelaysGroupOffer: [1489, o],
                            oneSideRcvdPeerRxBitrate: [508, i],
                            oneSideRelayTransactionIdFirstAllocResp: [1490, o],
                            opusVersion: [287, o],
                            p2pSuccessCount: [522, o],
                            pausedRtcpCount: [1285, o],
                            pcntPoorAudLqmAfterPause: [599, l],
                            pcntPoorAudLqmBeforePause: [598, l],
                            pcntPoorVidLqmAfterPause: [597, l],
                            pcntPoorVidLqmBeforePause: [596, l],
                            pctPeersOnCellular: [1314, l],
                            peerCallNetwork: [264, n.PEER_CALL_NETWORK_MEDIUM],
                            peerCallResult: [66, n.CALL_RESULT_TYPE],
                            peerDeviceName: [1494, s],
                            peerRxForErrorRelayBytes: [1340, l],
                            peerRxForOtherRelayBytes: [1341, l],
                            peerRxForTxRelayBytes: [1342, l],
                            peerTransport: [591, n.CALL_TRANSPORT_TYPE],
                            peerVideoHeight: [191, o],
                            peerVideoWidth: [190, o],
                            peerXmppStatus: [4, n.XMPP_STATUS],
                            peersMuteSuccCount: [1172, o],
                            peersRejectedMuteReqCount: [1173, o],
                            pingsSent: [160, l],
                            pongsReceived: [161, l],
                            poolMemUsage: [510, o],
                            poolMemUsagePadding: [511, o],
                            presentEndCallConfirmation: [89, n.END_CALL_CONFIRMATION_TYPE],
                            prevCallTestBucket: [1060, s],
                            previousCallInterval: [266, c],
                            previousCallVideoEnabled: [265, i],
                            previousCallWithSamePeer: [267, i],
                            privacySilenceUnknownCaller: [1404, i],
                            privacyUnknownCaller: [1405, i],
                            probeAvgBitrate: [327, l],
                            pstnCallExists: [1228, i],
                            pushToCallOfferDelay: [158, l],
                            pytorchEdgeLibAvgLoadingTime: [1544, c],
                            pytorchEdgeLibLoadErrorCode: [1563, n.PYTORCH_EDGE_LIB_LOAD_ERROR_CODE],
                            pytorchEdgeLibLoadStatus: [1564, n.PYTORCH_EDGE_LIB_LOAD_STATUS],
                            rcMaxrtt: [155, l],
                            rcMinrtt: [154, l],
                            receivedByNse: [1130, i],
                            receiverVideoEncodedHeightSs: [1443, o],
                            receiverVideoEncodedWidthSs: [1444, o],
                            recordCircularBufferFrameCount: [84, o],
                            reflectivePortsDiff: [162, l],
                            rejectMuteReqCount: [1174, o],
                            rekeyTime: [1140, o],
                            relayBindFailureAltNetSwitchSuccess: [583, o],
                            relayBindFailureAltNetSwitchTriggered: [582, o],
                            relayBindFailureAltNetworkSwitchToCallEnd: [586, c],
                            relayBindFailureFallbackCount: [581, o],
                            relayBindFailureIpVersionSwitchToCallEnd: [585, c],
                            relayBindFailureIpVersionSwitchTriggered: [584, o],
                            relayBindTimeInMsec: [424, c],
                            relayElectionTimeInMsec: [423, c],
                            relayFallbackOnRxDataFromRelay: [481, o],
                            relayFallbackOnStopRxDataOnP2p: [482, o],
                            relayFallbackOnTransportStanzaNotification: [483, o],
                            relayPingAvgRtt: [1525, c],
                            relayPingMaxRtt: [1526, c],
                            relayPingMinRtt: [1527, c],
                            relaySwapped: [1309, o],
                            removePeerNackCount: [1378, o],
                            removePeerNotInCallCount: [1379, o],
                            removePeerNotSupportedCount: [1380, o],
                            removePeerRequestCount: [1381, o],
                            removePeerSuccessCount: [1382, o],
                            renderFreezeHighPeerBweT: [780, c],
                            renderFreezeLowPeerBweT: [778, c],
                            renderFreezeLowToHighPeerBweT: [779, c],
                            rtcpRembInVideoCnt: [1362, o],
                            rxAllocRespNoMatchingTid: [1168, o],
                            rxBytesForP2p: [1528, o],
                            rxBytesForUnknownP2p: [1408, l],
                            rxForErrorRelayBytes: [1310, l],
                            rxForOtherRelayBytes: [1311, l],
                            rxForTxRelayBytes: [1312, l],
                            rxProbeCountSuccess: [291, o],
                            rxProbeCountTotal: [290, o],
                            rxRelayRebindLatencyMs: [841, c],
                            rxRelayResetLatencyMs: [842, c],
                            rxSubOnScreenDur: [1295, c],
                            rxSubRequestSentCnt: [1370, o],
                            rxSubRequestThrottledCnt: [1296, o],
                            rxSubSwitchCnt: [1297, o],
                            rxSubVideoWaitDur: [1298, c],
                            rxSubVideoWaitDurAvg: [1366, c],
                            rxSubVideoWaitDurSum: [1367, c],
                            rxTotalBitrate: [145, l],
                            rxTotalBytes: [143, l],
                            rxTpFbBitrate: [294, l],
                            rxTrafficStartFalsePositive: [758, i],
                            sbweAbsRttOnHoldCount: [1495, o],
                            sbweAvgDowntrend: [963, l],
                            sbweAvgUptrend: [962, l],
                            sbweCeilingCongestionCount: [783, o],
                            sbweCeilingCount: [781, o],
                            sbweCeilingMissingRtcpCongestionCount: [786, o],
                            sbweCeilingNoNewDataReceivedCongestionCount: [787, o],
                            sbweCeilingPktLossCount: [782, o],
                            sbweCeilingReceiveSideCount: [1106, o],
                            sbweCeilingRttCongestionCount: [784, o],
                            sbweCeilingZeroRttCongestionCount: [785, o],
                            sbweGlobalMinRttCongestionCount: [1103, o],
                            sbweHighestRttCongestionCount: [1133, o],
                            sbweHoldCount: [961, o],
                            sbweHoldDuration: [1347, c],
                            sbweMinRttEmaCongestionCount: [1104, o],
                            sbweMinRttSlideWindowCount: [1308, o],
                            sbweRampDownCount: [960, o],
                            sbweRampDownDuration: [1348, c],
                            sbweRampUpCount: [959, o],
                            sbweRampUpDuration: [1349, c],
                            sbweRampUpPauseCount: [1134, o],
                            sbweRttSlopeCongestionCount: [1496, o],
                            sbweRttSlopeOnHoldCount: [1497, o],
                            selfMuteSuccessCount: [1175, o],
                            selfUnmuteAfterMuteReqCount: [1176, o],
                            senderBweInitBitrate: [975, o],
                            serverRecommendedRelayReceivedMs: [1339, c],
                            serverRecommendedToElectedRelayMs: [1266, c],
                            setIpVersionCount: [1376, o],
                            sfuAbnormalUplinkRttCount: [879, o],
                            sfuAvgDlPlrAtBalancedCongestion: [1096, l],
                            sfuAvgDlPlrAtHighDlCongestion: [1094, l],
                            sfuAvgDlPlrAtHighUlCongestion: [1092, l],
                            sfuAvgLqHqTargetBitrateDiff: [1002, l],
                            sfuAvgPeerRttAtBalancedCongestion: [1102, o],
                            sfuAvgPeerRttAtHighPeerCongestion: [1100, o],
                            sfuAvgPeerRttAtHighSelfCongestion: [1098, o],
                            sfuAvgSelfRttAtBalancedCongestion: [1101, o],
                            sfuAvgSelfRttAtHighPeerCongestion: [1099, o],
                            sfuAvgSelfRttAtHighSelfCongestion: [1097, o],
                            sfuAvgTargetBitrate: [673, l],
                            sfuAvgTargetBitrateHq: [943, l],
                            sfuAvgUlPlrAtBalancedCongestion: [1095, l],
                            sfuAvgUlPlrAtHighDlCongestion: [1093, l],
                            sfuAvgUlPlrAtHighUlCongestion: [1091, l],
                            sfuBalancedPktLossAtCongestion: [1075, o],
                            sfuBalancedRttAtCongestion: [1079, o],
                            sfuBwaAllParticipantDlBwUsedPct: [919, l],
                            sfuBwaAllParticipantUlBwUsedPct: [918, l],
                            sfuBwaChangeNumStreamCount: [928, o],
                            sfuBwaSelfDlBwUsedPct: [1003, l],
                            sfuBwaSelfUlBwUsedPct: [917, l],
                            sfuBwaSimulcastDisabledCntReasonBattery: [920, o],
                            sfuBwaSimulcastDisabledCntReasonNetMedium: [921, o],
                            sfuBwaVidEncHqStreamScheduledT: [926, c],
                            sfuBwaVidEncLqStreamScheduledT: [925, c],
                            sfuDownlinkAvgCombinedBwe: [662, l],
                            sfuDownlinkAvgPktLossPct: [667, l],
                            sfuDownlinkAvgRemoteBwe: [661, l],
                            sfuDownlinkAvgSenderBwe: [660, l],
                            sfuDownlinkInitCombinedBwe3s: [1158, l],
                            sfuDownlinkInitPktLossPct3s: [1159, l],
                            sfuDownlinkMaxPktLossPct: [668, l],
                            sfuDownlinkMinPktLossPct: [666, l],
                            sfuDownlinkSbweAvgDowntrend: [973, l],
                            sfuDownlinkSbweAvgUptrend: [972, l],
                            sfuDownlinkSbweCeilingCongestionCount: [797, o],
                            sfuDownlinkSbweCeilingCount: [795, o],
                            sfuDownlinkSbweCeilingMissingRtcpCongestionCount: [800, o],
                            sfuDownlinkSbweCeilingNoNewDataReceivedCongestionCount: [801, o],
                            sfuDownlinkSbweCeilingPktLossCount: [796, o],
                            sfuDownlinkSbweCeilingRttCongestionCount: [798, o],
                            sfuDownlinkSbweCeilingZeroRttCongestionCount: [799, o],
                            sfuDownlinkSbweHoldCount: [971, o],
                            sfuDownlinkSbweRampDownCount: [970, o],
                            sfuDownlinkSbweRampUpCount: [969, o],
                            sfuDownlinkSenderBweDiffStddev: [958, l],
                            sfuDownlinkSenderBweStddev: [957, l],
                            sfuFirstRxBandwidthReportTime: [1111, c],
                            sfuFirstRxParticipantReportTime: [883, c],
                            sfuFirstRxUplinkReportTime: [881, c],
                            sfuHighDlPktLossAtCongestion: [1074, o],
                            sfuHighDlRttAtCongestion: [1078, o],
                            sfuHighUlPktLossAtCongestion: [1073, o],
                            sfuHighUlRttAtCongestion: [1077, o],
                            sfuMaxTargetBitrate: [674, l],
                            sfuMaxTargetBitrateHq: [944, l],
                            sfuMinTargetBitrate: [672, l],
                            sfuMinTargetBitrateHq: [942, l],
                            sfuPeerDownlinkStddevAllCombinedBwe: [813, l],
                            sfuRxBandwidthReportCount: [1110, o],
                            sfuRxParticipantReportCount: [882, o],
                            sfuRxUplinkReportCount: [880, o],
                            sfuServerBwaBrAdjustedForParticipantChange: [1260, o],
                            sfuServerBwaBrCappedByUplink: [1261, o],
                            sfuServerBwaInvalidSimulcastResult: [1262, o],
                            sfuServerBwaLocalBwaRun: [1263, o],
                            sfuServerBwaLocalBwaTransition: [1337, o],
                            sfuServerBwaLongestSbwaMissingMs: [1338, c],
                            sfuSimulcastAvgDecSessFlipTime: [833, c],
                            sfuSimulcastAvgEncSchedEventUpdateTime: [837, c],
                            sfuSimulcastBwaCandidateCnt: [923, o],
                            sfuSimulcastBwaDownlinkBottleneckCount: [874, o],
                            sfuSimulcastBwaUplinkBottleneckCount: [873, o],
                            sfuSimulcastDecAvgKfRecvTimeSinceFlip: [952, c],
                            sfuSimulcastDecAvgNumReplayedCachedPkt: [951, l],
                            sfuSimulcastDecAvgNumSkippedCachedPkt: [950, l],
                            sfuSimulcastDecNumNoKf: [953, o],
                            sfuSimulcastDecSessFlipCount: [744, o],
                            sfuSimulcastDecSessFlipErrorBitmap: [768, o],
                            sfuSimulcastDecSessFlipErrorCount: [767, o],
                            sfuSimulcastEncErrorBitmap: [766, o],
                            sfuSimulcastEncSchedEventCount: [732, o],
                            sfuSimulcastEncSchedEventErrorCount: [735, o],
                            sfuSimulcastEncSchedEventSkipCount: [734, o],
                            sfuSimulcastEncSchedEventSuccessUpdateCount: [733, o],
                            sfuSimulcastMaxDecSessFlipTime: [832, c],
                            sfuSimulcastMaxEncSchedEventUpdateTime: [836, c],
                            sfuSimulcastMinDecSessFlipTime: [831, c],
                            sfuSimulcastMinEncSchedEventUpdateTime: [835, c],
                            sfuUplinkAvgCombinedBwe: [659, l],
                            sfuUplinkAvgPktLossPct: [664, l],
                            sfuUplinkAvgRemoteBwe: [658, l],
                            sfuUplinkAvgRtt: [670, l],
                            sfuUplinkAvgSenderBwe: [657, l],
                            sfuUplinkInitCombinedBwe3s: [1160, l],
                            sfuUplinkInitPktLossPct3s: [1161, l],
                            sfuUplinkMaxPktLossPct: [665, l],
                            sfuUplinkMaxRtt: [671, l],
                            sfuUplinkMinPktLossPct: [663, l],
                            sfuUplinkMinRtt: [669, l],
                            sfuUplinkSbweAvgDowntrend: [968, l],
                            sfuUplinkSbweAvgUptrend: [967, l],
                            sfuUplinkSbweCeilingCongestionCount: [790, o],
                            sfuUplinkSbweCeilingCount: [788, o],
                            sfuUplinkSbweCeilingMissingRtcpCongestionCount: [793, o],
                            sfuUplinkSbweCeilingNoNewDataReceivedCongestionCount: [794, o],
                            sfuUplinkSbweCeilingPktLossCount: [789, o],
                            sfuUplinkSbweCeilingRttCongestionCount: [791, o],
                            sfuUplinkSbweCeilingZeroRttCongestionCount: [792, o],
                            sfuUplinkSbweHoldCount: [966, o],
                            sfuUplinkSbweRampDownCount: [965, o],
                            sfuUplinkSbweRampUpCount: [964, o],
                            sfuUplinkSenderBweDiffStddev: [956, l],
                            sfuUplinkSenderBweStddev: [955, l],
                            simulcastAvgLqBitrateWhenHqEnabled: [1011, o],
                            simulcastReplayVideoRenderFreeze2xT: [982, c],
                            simulcastReplayVideoRenderFreeze4xT: [983, c],
                            simulcastReplayVideoRenderFreeze8xT: [984, c],
                            simulcastReplayVideoRenderFreezeT: [981, c],
                            skippedBwaCycles: [748, o],
                            skippedBweCycles: [747, o],
                            slowRenderVideoFrameOutOfPausedMs: [1286, c],
                            speakerAvgPower: [250, o],
                            speakerMaxPower: [249, o],
                            speakerMinPower: [248, o],
                            speakerStartDuration: [864, c],
                            speakerStartToFirstCallbackT: [932, c],
                            speakerStopDuration: [865, c],
                            sreRecommendedDiff: [1313, o],
                            ssReceiverStartFailCount: [1445, o],
                            ssReceiverStartRequestCount: [1446, o],
                            ssReceiverStartSuccessCount: [1447, o],
                            ssReceiverStopFailCount: [1448, o],
                            ssReceiverStopRequestCount: [1449, o],
                            ssReceiverStopSuccessCount: [1450, o],
                            ssReceiverVersion: [1451, o],
                            ssSharerStartFailCount: [1452, o],
                            ssSharerStartRequestCount: [1453, o],
                            ssSharerStartSuccessCount: [1454, o],
                            ssSharerStopFailCount: [1455, o],
                            ssSharerStopRequestCount: [1456, o],
                            ssSharerStopSuccessCount: [1457, o],
                            ssSharerVersion: [1458, o],
                            ssTimeInStaticContentType: [1459, c],
                            ssTimeInVideoContentType: [1460, c],
                            startedInitBweProbing: [900, i],
                            streamDroppedPkts: [1287, o],
                            streamPausedTimeMs: [1288, c],
                            streamTransitionsToPaused: [1289, o],
                            streamTransitionsToPausedWithoutNotif: [1290, o],
                            switchToAvatarDisplayedCount: [1399, o],
                            switchToDefTriggeredByGoodDefNet: [538, o],
                            switchToNonSfu: [750, o],
                            switchToNonSimulcast: [1057, o],
                            switchToSfu: [749, o],
                            switchToSimulcast: [1056, o],
                            symmetricNatPortGap: [257, o],
                            systemNotificationOfNetChange: [541, o],
                            tcpAvailableCount: [1557, o],
                            tcpAvailableOnUdpCount: [1558, o],
                            telecomFrameworkCallStartDelayT: [440, c],
                            timeCpuUtilizationSamplingInMs: [1224, c],
                            timeEnc1280w: [992, c],
                            timeEnc160w: [988, c],
                            timeEnc320w: [989, c],
                            timeEnc480w: [990, c],
                            timeEnc640w: [991, c],
                            timeOnNonDefNetwork: [530, c],
                            timeOnNonDefNetworkPerSegment: [531, c],
                            timeSinceLastRtpToCallEndInMsec: [715, c],
                            timeToFirstElectedRelayMs: [1267, c],
                            timeVidRcDynCondTrue: [718, c],
                            totalAqsMsgSent: [1126, o],
                            totalAudioFrameLossMs: [723, c],
                            totalBytesOnNonDefCell: [449, l],
                            totalFramesCapturedInLast10secSs: [1461, o],
                            totalFramesCapturedSs: [1462, o],
                            totalFramesRenderedInLast10secSs: [1463, o],
                            totalFramesRenderedSs: [1464, o],
                            totalTimeVidDlAutoPause: [575, c],
                            totalTimeVidUlAutoPause: [573, c],
                            trafficShaperAvgAudioQueueMs: [898, c],
                            trafficShaperAvgQueueMs: [242, c],
                            trafficShaperAvgVideoQueueMs: [899, c],
                            trafficShaperMaxDelayViolations: [240, o],
                            trafficShaperMinDelayViolations: [241, o],
                            trafficShaperOverflowCount: [237, o],
                            trafficShaperQueueEmptyCount: [238, o],
                            trafficShaperQueuedAudioPacketCount: [896, o],
                            trafficShaperQueuedPacketCount: [239, o],
                            trafficShaperQueuedVideoPacketCount: [897, o],
                            transportCurTimeInMsecAsyncWriteWaitingInQueue: [552, c],
                            transportLastSendOsError: [555, o],
                            transportNumAsyncWriteDispatched: [580, o],
                            transportNumAsyncWriteQueued: [551, o],
                            transportOvershoot10PercCount: [699, o],
                            transportOvershoot20PercCount: [700, o],
                            transportOvershoot40PercCount: [701, o],
                            transportOvershootLongestStreakS: [708, o],
                            transportOvershootSinceLast10sCount: [704, o],
                            transportOvershootSinceLast15sCount: [705, o],
                            transportOvershootSinceLast1sCount: [702, o],
                            transportOvershootSinceLast30sCount: [706, o],
                            transportOvershootSinceLast5sCount: [703, o],
                            transportOvershootStreakAvgS: [709, l],
                            transportOvershootTimeBetweenAvgS: [707, l],
                            transportRtpSendErrorRate: [557, l],
                            transportSendErrorCount: [556, o],
                            transportSnJumpDetectCount: [1153, o],
                            transportSplitterRxErrCnt: [1059, o],
                            transportSplitterTxErrCnt: [1058, o],
                            transportSrtcpRxRejectedPktCnt: [1141, o],
                            transportSrtpRxInitRejNoDupPktCnt: [1570, o],
                            transportSrtpRxMaxPktSize: [1038, o],
                            transportSrtpRxRejectedBitrate: [763, l],
                            transportSrtpRxRejectedDupPktCnt: [772, o],
                            transportSrtpRxRejectedPktCnt: [762, o],
                            transportSrtpTxFailedPktCnt: [774, o],
                            transportSrtpTxMaxPktSize: [773, o],
                            transportTotalNumSendOsError: [554, o],
                            transportTotalTimeInMsecAsyncWriteQueueToDispatch: [553, c],
                            transportUndershoot10PercCount: [710, o],
                            transportUndershoot20PercCount: [711, o],
                            transportUndershoot40PercCount: [712, o],
                            triggeredButDataLimitReached: [536, o],
                            tsLogUpload: [1112, n.TS_LOG_UPLOAD_RESULT],
                            txFailedEncCheckBytes: [1545, l],
                            txFailedEncCheckPackets: [1546, o],
                            txProbeCountSuccess: [289, o],
                            txProbeCountTotal: [288, o],
                            txRelayBindUnbindPacketsMissingMessageIntegrity: [1105, o],
                            txRelayRebindLatencyMs: [839, c],
                            txRelayResetLatencyMs: [840, c],
                            txStoppedCount: [1519, o],
                            txTotalBitrate: [144, l],
                            txTotalBytes: [142, l],
                            txTpFbBitrate: [293, l],
                            udpAvailableCount: [1559, o],
                            udpAvailableOnTcpCount: [1560, o],
                            ulOnlyHighPlrPct: [1365, l],
                            unknownRelayMessageCnt: [1576, o],
                            uplinkOvershootCountSs: [1465, o],
                            uplinkUndershootCountSs: [1466, o],
                            usedInitTxBitrate: [341, o],
                            usedIpv4Count: [1150, o],
                            usedIpv6Count: [1151, o],
                            userDescription: [87, s],
                            userProblems: [88, o],
                            userRating: [86, o],
                            v2vAudioFrameLoss1xMs: [1143, c],
                            v2vAudioFrameLoss2xMs: [1144, c],
                            v2vAudioFrameLoss4xMs: [1145, c],
                            v2vAudioFrameLoss8xMs: [1146, c],
                            v2vAudioLossPeriodCount: [1147, o],
                            v2vTotalAudioFrameLossMs: [1148, c],
                            vidAvgBurstyPktLossLength: [1121, c],
                            vidAvgRandomPktLossLength: [1122, c],
                            vidBurstyPktLossTime: [1123, c],
                            vidCorrectRetxDetectPcnt: [688, o],
                            vidFreezeTMsInSample0: [695, c],
                            vidJbDiscards: [1063, l],
                            vidJbEmpties: [1064, l],
                            vidJbGets: [1065, l],
                            vidJbLost: [1061, l],
                            vidJbPuts: [1066, l],
                            vidJbResets: [1067, l],
                            vidNumFecDroppedNoHole: [696, o],
                            vidNumFecDroppedTooBig: [697, o],
                            vidNumRandToBursty: [1124, o],
                            vidNumRetxDropped: [698, o],
                            vidNumRxRetx: [757, o],
                            vidPktRxState0: [693, s],
                            vidRandomPktLossTime: [1125, c],
                            vidRxFecRateInSample0: [694, l],
                            vidUlAutoPausedAtCallEnd: [589, i],
                            vidUlTimeSinceAutoPauseAtCallEnd: [590, c],
                            vidWrongRetxDetectPcnt: [716, o],
                            videoActiveTime: [276, c],
                            videoAheadAvSyncDiscardedFramesAvgDeltaT: [1041, c],
                            videoAheadAvSyncRenderedFramesAvgDeltaT: [1043, c],
                            videoAheadNumAvSyncDiscardFrames: [1039, o],
                            videoAveDelayLtrp: [484, c],
                            videoAvgCombPsnr: [390, l],
                            videoAvgEncKfQpSs: [1467, o],
                            videoAvgEncPFrameQpSs: [1468, o],
                            videoAvgEncodingPsnr: [410, l],
                            videoAvgScalingPsnr: [408, l],
                            videoAvgSenderBwe: [186, l],
                            videoAvgTargetBitrate: [184, l],
                            videoAvgTargetBitrateHq: [828, l],
                            videoAvgTargetBitrateHqSs: [1469, l],
                            videoAvgTargetBitrateSs: [1491, l],
                            videoAvgTotalTargetBitrateSs: [1470, l],
                            videoBehindAvSyncDiscardedFramesAvgDeltaT: [1042, c],
                            videoBehindAvSyncRenderedFramesAvgDeltaT: [1044, c],
                            videoBehindNumAvSyncDiscardFrames: [1040, o],
                            videoCaptureAvgFps: [222, o],
                            videoCaptureConverterTs: [226, c],
                            videoCaptureDupFrames: [887, o],
                            videoCaptureFrameOverwriteCount: [496, o],
                            videoCaptureHeight: [228, o],
                            videoCaptureHeightSs: [1471, o],
                            videoCaptureWidth: [227, o],
                            videoCaptureWidthSs: [1472, o],
                            videoCodecScheme: [401, o],
                            videoCodecSubType: [303, o],
                            videoCodecType: [236, o],
                            videoDecAvgBitrate: [220, o],
                            videoDecAvgConsecutiveKfVp8: [610, l],
                            videoDecAvgConsecutiveLtrpVp8: [611, l],
                            videoDecAvgFps: [207, l],
                            videoDecAvgFpsSs: [1473, l],
                            videoDecAvgFramesFromFoundLtrVp8: [612, l],
                            videoDecAvgFramesFromUnfoundLtrVp8: [613, l],
                            videoDecColorId: [205, o],
                            videoDecCrcMismatchFrames: [419, o],
                            videoDecErrorFrames: [174, o],
                            videoDecErrorFramesCodecSwitch: [714, o],
                            videoDecErrorFramesDuplicate: [713, o],
                            videoDecErrorFramesH264: [680, o],
                            videoDecErrorFramesIgnoreConsecutive: [478, o],
                            videoDecErrorFramesOutoforder: [682, o],
                            videoDecErrorFramesSpsPpsH264: [812, o],
                            videoDecErrorFramesSpsPpsMissingAfterResolutionSwitch: [810, o],
                            videoDecErrorFramesSpsPpsNotSupportedAfterResolutionSwitch: [811, o],
                            videoDecErrorFramesVp8: [681, o],
                            videoDecErrorLtrpFramesVp8: [462, o],
                            videoDecErrorLtrpFramesVp8CrcMismatch: [479, o],
                            videoDecErrorLtrpFramesVp8NoLtr: [480, o],
                            videoDecErrorLtrpFramesVp8NoLtr10: [615, o],
                            videoDecErrorLtrpFramesVp8NoLtr5: [614, o],
                            videoDecFatalErrorNum: [1084, o],
                            videoDecInputFrames: [172, o],
                            videoDecKeyframes: [175, o],
                            videoDecLatency: [223, c],
                            videoDecLatencyH264: [684, c],
                            videoDecLatencyVp8: [683, c],
                            videoDecLostPackets: [210, o],
                            videoDecLtrpFramesVp8: [461, o],
                            videoDecLtrpPoolCreateFailed: [490, i],
                            videoDecName: [204, o],
                            videoDecNumPliThrottledByAllLtrp: [915, o],
                            videoDecNumSkippedFramesVp8: [616, o],
                            videoDecNumSwitchesToAllLtrp: [617, o],
                            videoDecOutputFrames: [173, o],
                            videoDecOutputFramesInLast10secSs: [1474, o],
                            videoDecOutputFramesSs: [1475, o],
                            videoDecRestart: [206, o],
                            videoDecSkipPackets: [209, o],
                            videoDecodePausedCount: [232, o],
                            videoDowngradeCount: [273, o],
                            videoEnabled: [163, i],
                            videoEnabledAtCallStart: [270, i],
                            videoEncAllLtrpTimeInMsec: [609, c],
                            videoEncAvgBitrate: [221, o],
                            videoEncAvgConsecutiveKfVp8: [605, l],
                            videoEncAvgConsecutiveLtrpVp8: [606, l],
                            videoEncAvgFps: [216, l],
                            videoEncAvgFpsHq: [825, l],
                            videoEncAvgFramesFromFoundLtrVp8: [604, l],
                            videoEncAvgFramesFromUnfoundLtrVp8: [603, l],
                            videoEncAvgPsnrKeyFrameVp8: [465, l],
                            videoEncAvgPsnrLtrpFrameVp8: [469, l],
                            videoEncAvgPsnrPFramePrevRefVp8: [474, l],
                            videoEncAvgQpKeyFrameOpenh264: [1216, l],
                            videoEncAvgQpKeyFrameVp8: [466, l],
                            videoEncAvgQpLtrpFrameOpenh264: [1217, l],
                            videoEncAvgQpLtrpFrameVp8: [470, l],
                            videoEncAvgQpPFramePrevRefOpenh264: [1218, l],
                            videoEncAvgQpPFramePrevRefVp8: [475, l],
                            videoEncAvgSizeAllLtrpFrameVp8: [685, l],
                            videoEncAvgSizeKeyFrameVp8: [464, l],
                            videoEncAvgSizeLtrpFrameVp8: [468, l],
                            videoEncAvgSizePFramePrevRefVp8: [473, l],
                            videoEncAvgTargetFps: [215, l],
                            videoEncAvgTargetFpsHq: [827, l],
                            videoEncBitrateHqSs: [1476, l],
                            videoEncColorId: [213, o],
                            videoEncDeviationAllLtrpFrameVp8: [686, l],
                            videoEncDeviationPFramePrevRefVp8: [687, l],
                            videoEncDiscardFrame: [217, o],
                            videoEncDiscardFrameHq: [938, o],
                            videoEncDropFrames: [179, o],
                            videoEncDropFramesHq: [937, o],
                            videoEncErrorFrames: [178, o],
                            videoEncErrorFramesHq: [936, o],
                            videoEncFatalErrorNum: [1049, o],
                            videoEncInputFrames: [176, o],
                            videoEncInputFramesHq: [934, o],
                            videoEncInputFramesInLast10secSs: [1477, o],
                            videoEncInputFramesSs: [1478, o],
                            videoEncKeyframes: [180, o],
                            videoEncKeyframesHq: [939, o],
                            videoEncKeyframesSs: [1479, o],
                            videoEncKeyframesVp8: [463, o],
                            videoEncKfErrCodecSwitchT: [731, c],
                            videoEncKfIgnoreOldFrames: [729, o],
                            videoEncKfQueueEmpty: [730, o],
                            videoEncLatency: [224, c],
                            videoEncLatencyHq: [826, c],
                            videoEncLtrpFrameGenFailedVp8: [471, o],
                            videoEncLtrpFramesVp8: [467, o],
                            videoEncLtrpPoolCreateFailed: [491, i],
                            videoEncLtrpToKfFallbackVp8: [494, o],
                            videoEncModifyNum: [1050, o],
                            videoEncMsInOpenh264HighComp: [1400, c],
                            videoEncMsInOpenh264LowComp: [1401, c],
                            videoEncMsInOpenh264MediumComp: [1402, c],
                            videoEncMsInOpenh264UltrahighComp: [1403, c],
                            videoEncName: [212, o],
                            videoEncNumErrorLtrHoldFailedVp8: [600, o],
                            videoEncNumErrorLtrHoldFailedVp810: [602, o],
                            videoEncNumErrorLtrHoldFailedVp85: [601, o],
                            videoEncNumSuccessHfFallbackVp8: [622, o],
                            videoEncNumSwitchesToAllLtrp: [607, o],
                            videoEncOutputFrameSs: [1480, o],
                            videoEncOutputFrames: [177, o],
                            videoEncOutputFramesHq: [935, o],
                            videoEncPFramePrevRefVp8: [472, o],
                            videoEncRegularLtrpTimeInMsec: [608, c],
                            videoEncRestart: [214, o],
                            videoEncRestartPresetChange: [1046, o],
                            videoEncRestartResChange: [1045, o],
                            videoEncTimeOvershoot10PercH264: [363, c],
                            videoEncTimeOvershoot10PercH265: [366, c],
                            videoEncTimeOvershoot10PercVp8: [369, c],
                            videoEncTimeOvershoot10PercVp9: [372, c],
                            videoEncTimeOvershoot20PercH264: [364, c],
                            videoEncTimeOvershoot20PercH265: [367, c],
                            videoEncTimeOvershoot20PercVp8: [370, c],
                            videoEncTimeOvershoot20PercVp9: [373, c],
                            videoEncTimeOvershoot40PercH264: [365, c],
                            videoEncTimeOvershoot40PercH265: [368, c],
                            videoEncTimeOvershoot40PercVp8: [371, c],
                            videoEncTimeOvershoot40PercVp9: [374, c],
                            videoEncTimeSpentInNegative10Vp8Ms: [1019, c],
                            videoEncTimeSpentInNegative12Vp8Ms: [1018, c],
                            videoEncTimeSpentInNegative4Vp8Ms: [1022, c],
                            videoEncTimeSpentInNegative6Vp8Ms: [1021, c],
                            videoEncTimeSpentInNegative8Vp8Ms: [1020, c],
                            videoEncTimeUndershoot10PercH264: [375, c],
                            videoEncTimeUndershoot10PercH265: [378, c],
                            videoEncTimeUndershoot10PercVp8: [381, c],
                            videoEncTimeUndershoot10PercVp9: [384, c],
                            videoEncTimeUndershoot20PercH264: [376, c],
                            videoEncTimeUndershoot20PercH265: [379, c],
                            videoEncTimeUndershoot20PercVp8: [382, c],
                            videoEncTimeUndershoot20PercVp9: [385, c],
                            videoEncTimeUndershoot40PercH264: [377, c],
                            videoEncTimeUndershoot40PercH265: [380, c],
                            videoEncTimeUndershoot40PercVp8: [383, c],
                            videoEncTimeUndershoot40PercVp9: [386, c],
                            videoEncoderHeightSs: [1481, o],
                            videoEncoderWidthSs: [1482, o],
                            videoFecRecovered: [183, o],
                            videoH264Time: [334, o],
                            videoH265Time: [335, o],
                            videoHeight: [189, o],
                            videoInitRxBitrate16s: [904, l],
                            videoInitRxBitrate2s: [901, l],
                            videoInitRxBitrate4s: [902, l],
                            videoInitRxBitrate8s: [903, l],
                            videoInitialCodecScheme: [402, o],
                            videoInitialCodecType: [321, o],
                            videoLastCodecType: [404, o],
                            videoLastSenderBwe: [185, l],
                            videoMaxCombPsnr: [392, l],
                            videoMaxEncodingPsnr: [411, l],
                            videoMaxRxBitrate: [426, l],
                            videoMaxScalingPsnr: [409, l],
                            videoMaxTargetBitrate: [420, l],
                            videoMaxTargetBitrateHq: [829, l],
                            videoMaxTxBitrate: [425, l],
                            videoMaxTxBitrateHq: [824, l],
                            videoMinCombPsnr: [391, l],
                            videoMinEncodingPsnr: [407, l],
                            videoMinScalingPsnr: [406, l],
                            videoMinTargetBitrate: [421, l],
                            videoMinTargetBitrateHq: [830, l],
                            videoNackHbhEnabled: [1185, i],
                            videoNackRtpRetransmitRecvdCount: [1272, o],
                            videoNackRtpRetransmitReqCount: [1373, o],
                            videoNackSendDelay: [872, c],
                            videoNewPktsBeforeNack: [871, o],
                            videoNpsiGenFailed: [594, o],
                            videoNpsiNoNack: [595, o],
                            videoNumAvSyncDiscardFrames: [1010, o],
                            videoNumH264Frames: [332, o],
                            videoNumH265Frames: [333, o],
                            videoPeerState: [275, n.CALL_VIDEO_STATE],
                            videoPeerTriggeredPauseCount: [654, o],
                            videoQualityScore: [1270, o],
                            videoRenderAvgFps: [208, o],
                            videoRenderConverterTs: [225, c],
                            videoRenderDelayT: [196, c],
                            videoRenderDupFrames: [888, o],
                            videoRenderFreeze2xT: [304, c],
                            videoRenderFreeze4xT: [305, c],
                            videoRenderFreeze8xT: [306, c],
                            videoRenderFreezeT: [235, c],
                            videoRenderInitFreeze16sT: [908, c],
                            videoRenderInitFreeze2sT: [905, c],
                            videoRenderInitFreeze4sT: [906, c],
                            videoRenderInitFreeze8sT: [907, c],
                            videoRenderInitFreezeT: [526, c],
                            videoRenderNumFreezes: [569, o],
                            videoRenderNumSinceLastFreeze10s: [571, o],
                            videoRenderNumSinceLastFreeze30s: [572, o],
                            videoRenderNumSinceLastFreeze5s: [570, o],
                            videoRenderPauseT: [1132, c],
                            videoRenderSumTimeSinceLastFreeze: [568, c],
                            videoRetxRtcpNack: [1178, o],
                            videoRetxRtcpPli: [1179, o],
                            videoRetxRtcpRr: [1180, o],
                            videoRtcpAppRxFailed: [493, o],
                            videoRtcpAppTxFailed: [492, o],
                            videoRtcpNackProcessed: [1273, o],
                            videoRtcpNackProcessedHq: [1274, o],
                            videoRxBitrate: [169, l],
                            videoRxBitrateSs: [1483, o],
                            videoRxBweHitTxBwe: [187, i],
                            videoRxBytesRtcpApp: [489, l],
                            videoRxFecBitrate: [219, l],
                            videoRxFecFrames: [182, o],
                            videoRxKfBeforeLtrpAfterRpsi: [485, o],
                            videoRxLtrpFramesVp8: [460, o],
                            videoRxNumCodecSwitch: [721, o],
                            videoRxPackets: [201, o],
                            videoRxPktErrorPct: [171, l],
                            videoRxPktLossPct: [170, l],
                            videoRxPktRtcpApp: [487, o],
                            videoRxRtcpFir: [621, o],
                            videoRxRtcpNack: [203, o],
                            videoRxRtcpNackDropped: [1181, o],
                            videoRxRtcpNpsi: [521, o],
                            videoRxRtcpPli: [202, o],
                            videoRxRtcpPliDropped: [1182, o],
                            videoRxRtcpRpsi: [459, o],
                            videoRxRtcpRrDropped: [1183, o],
                            videoRxTotalBytes: [168, l],
                            videoSelfState: [274, n.CALL_VIDEO_STATE],
                            videoSenderBweDiffStddev: [954, l],
                            videoSenderBweStddev: [348, l],
                            videoStreamRecreations: [1562, o],
                            videoTargetBitrateReaches1000kbpsT: [351, c],
                            videoTargetBitrateReaches1500kbpsT: [435, c],
                            videoTargetBitrateReaches2000kbpsT: [436, c],
                            videoTargetBitrateReaches200kbpsT: [349, c],
                            videoTargetBitrateReaches250kbpsT: [433, c],
                            videoTargetBitrateReaches500kbpsT: [350, c],
                            videoTargetBitrateReaches750kbpsT: [434, c],
                            videoTotalBytesOnNonDefCell: [451, l],
                            videoTxBitrate: [165, l],
                            videoTxBitrateHq: [823, l],
                            videoTxBitrateSs: [1484, l],
                            videoTxBytesRtcpApp: [488, l],
                            videoTxFecBitrate: [218, l],
                            videoTxFecFrames: [181, o],
                            videoTxNumCodecSwitch: [720, o],
                            videoTxPackets: [197, o],
                            videoTxPacketsHq: [818, o],
                            videoTxPktErrorPct: [167, l],
                            videoTxPktErrorPctHq: [821, l],
                            videoTxPktLossPct: [166, l],
                            videoTxPktLossPctHq: [822, l],
                            videoTxPktRtcpApp: [486, o],
                            videoTxResendCauseKf: [1275, o],
                            videoTxResendCauseKfHq: [1276, o],
                            videoTxResendFailures: [1277, o],
                            videoTxResendFailuresHq: [1278, o],
                            videoTxResendPackets: [198, o],
                            videoTxResendPacketsHq: [819, o],
                            videoTxRtcpFirEmptyJb: [620, o],
                            videoTxRtcpNack: [200, o],
                            videoTxRtcpNpsi: [520, o],
                            videoTxRtcpPli: [199, o],
                            videoTxRtcpPliHq: [820, o],
                            videoTxRtcpRpsi: [458, o],
                            videoTxTotalBytes: [164, l],
                            videoTxTotalBytesHq: [817, l],
                            videoUpdateEncoderFailureCount: [453, o],
                            videoUpgradeCancelByTimeoutCount: [325, o],
                            videoUpgradeCancelCount: [323, o],
                            videoUpgradeCount: [272, o],
                            videoUpgradeRejectByTimeoutCount: [326, o],
                            videoUpgradeRejectCount: [324, o],
                            videoUpgradeRequestCount: [271, o],
                            videoWidth: [188, o],
                            voipParamsCompressedSize: [1136, o],
                            voipParamsUncompressedSize: [1137, o],
                            voipSettingsDictLookupFailure: [1571, o],
                            voipSettingsDictLookupSuccess: [1572, o],
                            voipSettingsDictNoLookup: [1573, o],
                            vpxLibUsed: [513, n.VPX_LIB],
                            waLongFreezeCount: [891, o],
                            waReconnectFreezeCount: [890, o],
                            waSframeAudioRxDupPktsCnt: [1547, o],
                            waSframeAudioRxErrorMissingKey: [1548, o],
                            waSframeAudioRxRejectPktsCnt: [1549, o],
                            waSframeAudioTxErrorPktCnt: [1550, o],
                            waSframeVideoHqTxErrorPktCnt: [1551, o],
                            waSframeVideoLqTxErrorPktCnt: [1552, o],
                            waSframeVideoRxDupPktsCnt: [1553, o],
                            waSframeVideoRxErrorMissingKey: [1554, o],
                            waSframeVideoRxRejectPktsCnt: [1555, o],
                            waShortFreezeCount: [889, o],
                            waVoipHistoryCallRedialStatus: [1346, n.WA_VOIP_HISTORY_CALL_REDIAL_STATUS],
                            waVoipHistoryGetVideoTxBitrateBySelfAndPeerIpStrResult: [1162, o],
                            waVoipHistoryGetVideoTxBitrateBySelfAndPeerIpStrSuccess: [1163, i],
                            waVoipHistoryGetVideoTxBitrateBySelfIpStrResult: [1164, o],
                            waVoipHistoryGetVideoTxBitrateBySelfIpStrSuccess: [1165, i],
                            waVoipHistoryIpAddressNotAvailable: [834, i],
                            waVoipHistoryIsCallParticipantRecordSaved: [1343, i],
                            waVoipHistoryIsCallRecordLoaded: [737, i],
                            waVoipHistoryIsCallRecordSaved: [738, i],
                            waVoipHistoryIsInitialized: [769, i],
                            waVoipHistoryNumOfCallParticipantRecordFound: [1344, o],
                            waVoipHistoryNumOfCallRecordFoundByMatchingSelfAndPeerIpStr: [1166, o],
                            waVoipHistoryNumOfCallRecordFoundByMatchingSelfIpStr: [1167, o],
                            waVoipHistoryNumOfCallRecordLoaded: [739, o],
                            waVoipHistorySaveCallRecordConditionCheckStatus: [770, n.WA_VOIP_HISTORY_SAVE_CALL_RECORD_CONDITION_CHECK_STATUS],
                            warpHeaderRxTotalBytes: [656, l],
                            warpHeaderTxTotalBytes: [655, l],
                            warpMiRxPktErrorCount: [1118, o],
                            warpMiTxPktErrorCount: [1117, o],
                            warpRelayChangeDetectCount: [1154, o],
                            warpRxPktErrorCount: [746, o],
                            warpTxPktErrorCount: [745, o],
                            waspKeyErrorCount: [1156, o],
                            wavFileWriteMaxLatency: [1089, c],
                            weakCellularNetConditionDetected: [429, o],
                            weakWifiNetConditionDetected: [430, o],
                            weakWifiSwitchToDefNetSuccess: [397, o],
                            weakWifiSwitchToDefNetSuccessByPeriodicalCheck: [395, o],
                            weakWifiSwitchToDefNetTriggered: [396, o],
                            weakWifiSwitchToDefNetTriggeredByPeriodicalCheck: [394, o],
                            weakWifiSwitchToNonDefNetFalsePositive: [399, o],
                            weakWifiSwitchToNonDefNetSuccess: [400, o],
                            weakWifiSwitchToNonDefNetTriggered: [398, o],
                            wifiRssiAtCallStart: [263, o],
                            wpNotifyCallFailed: [64, o],
                            wpSoftwareEcMatches: [65, i],
                            xmppStatus: [3, n.XMPP_STATUS],
                            xorCipher: [269, n.XOR_CIPHER_MODE],
                            xpopCallPeerRelayIp: [1493, s],
                            xpopRelayCount: [1409, o],
                            xpopRelayErrorBitmap: [1410, o],
                            xpopTo1popFallbackCnt: [1515, o],
                            zedFileWriteMaxLatency: [1088, c]
                        },
                        [1, 1, 1], "regular"
                    ]
                });
            t.CallWamEvent = u
        },
        384128: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.E2eRetryRejectWamEvent = void 0;
            var a = r(644798),
                n = r(447853),
                i = a.TYPES.BOOLEAN,
                o = a.TYPES.INTEGER,
                l = (0, a.defineEvents)({
                    E2eRetryReject: [3578, {
                            messageType: [1, n.MESSAGE_TYPE],
                            msgRetryCount: [2, o],
                            retryRejectReason: [3, n.RETRY_REJECT_REASON],
                            retryRevoke: [4, i],
                            senderDeviceType: [5, n.DEVICE_TYPE]
                        },
                        [1, 1, 1], "regular"
                    ]
                });
            t.E2eRetryRejectWamEvent = l
        },
        16410: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MdRetryFromUnknownDeviceWamEvent = void 0;
            var a = r(644798),
                n = r(447853),
                i = a.TYPES.BOOLEAN,
                o = (0, a.defineEvents)({
                    MdRetryFromUnknownDevice: [2178, {
                            offline: [2, i],
                            senderType: [1, n.DEVICE_TYPE]
                        },
                        [1, 1, 1], "regular"
                    ]
                });
            t.MdRetryFromUnknownDeviceWamEvent = o
        },
        639235: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MessageHighRetryCountWamEvent = void 0;
            var a = r(644798),
                n = r(447853),
                i = a.TYPES.INTEGER,
                o = (0, a.defineEvents)({
                    MessageHighRetryCount: [3132, {
                            deviceSizeBucket: [5, n.SIZE_BUCKET],
                            e2eSenderType: [3, n.E2E_SENDER_TYPE],
                            mediaType: [1, n.MEDIA_TYPE],
                            messageType: [4, n.MESSAGE_TYPE],
                            retryCount: [2, i]
                        },
                        [1, 20, 20], "regular"
                    ]
                });
            t.MessageHighRetryCountWamEvent = o
        },
        478077: (e, t, r) => {
            "use strict";
            var a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MAX_RETRY = void 0, t.maybePostMessageHighRetryCountMetric = function() {
                return u.apply(this, arguments)
            };
            var n = a(r(887757)),
                i = a(r(348926)),
                o = r(639235),
                l = r(858866),
                s = r(611222),
                c = r(874904);

            function u() {
                return (u = (0, i.default)(n.default.mark((function e(t, r) {
                    var a, i, u, d;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(t < 5)) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (a = new o.MessageHighRetryCountWamEvent({
                                        retryCount: t,
                                        messageType: (0, c.getMessageTypeFromMsgInfoType)(r.type)
                                    }), null != (i = (0, c.getWamE2eSenderType)(r.author)) && (a.e2eSenderType = i), !(null == (u = r.chat) ? void 0 : u.isGroup())) {
                                    e.next = 12;
                                    break
                                }
                                return e.next = 9, (0, s.getGroupMetrics)(u);
                            case 9:
                                null != (null == (d = e.sent) ? void 0 : d.deviceSizeBucket) && (a.deviceSizeBucket = d.deviceSizeBucket), null != (null == d ? void 0 : d.participantCount) && d.participantCount > (0, l.getGroupSizeBypassingSampling)() && (a.weight = 0);
                            case 12:
                                a.commit();
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            t.MAX_RETRY = 5
        },
        330782: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SysPrefLinksType = void 0;
            var a = r(76672)({
                PRIVACY_CAMERA: 1,
                PRIVACY_MICROPHONE: 2
            });
            t.SysPrefLinksType = a
        },
        208893: (e, t, r) => {
            "use strict";
            var a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.prepareRetryReceipt = function(e) {
                return (0, n.default)(r(677383))(e)
            }, t.sendCallOffer = function(e) {
                return (0, n.default)(r(769604))(e, i.TYPE.OFFER)
            }, t.sendCallSignalingMsg = function(e) {
                return (0, n.default)(r(899574))(e)
            }, t.sendEncRekey = function(e) {
                return (0, n.default)(r(769604))(e, i.TYPE.ENC_REKEY)
            };
            var n = a(r(463113)),
                i = r(216996)
        },
        43401: (e, t, r) => {
            "use strict";
            var a = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.checkForMicrophoneAccess = function() {
                return S("microphone")
            }, t.checkForMicrophoneAndCameraAccess = function() {
                return Promise.all([S("microphone"), S("camera")]).then((function(e) {
                    return e.every((function(e) {
                        return e
                    }))
                }))
            }, t.prepareForCameraAccessCheck = function() {
                return function() {
                    return E.apply(this, arguments)
                }("camera")
            };
            var n = a(r(887757)),
                i = a(r(348926)),
                o = r(430888),
                l = r(330782),
                s = a(r(925446)),
                c = r(628707),
                u = r(548360),
                d = r(785893),
                p = s.default.require("ElectronApp"),
                v = window.Native,
                f = v.openSysPrefs,
                C = v.sysPrefGetMediaAccessStatus,
                g = v.sysPrefAskForMediaAccess;

            function S(e) {
                var t = C(e);
                return "not-determined" === t || "unknown" === t ? p.focus({
                    steal: !0
                }).then((function() {
                    return function(e) {
                        return g(e).catch((function() {
                            return !1
                        }))
                    }(e).then((function(t) {
                        return __LOG__(2)`Media access to ${e} is ${t?"granted":"denied"}`, t || _(e), t
                    }))
                })) : (__LOG__(2)`Media access to ${e} is ${t}`, "denied" === t || "restricted" === t ? (p.focus({
                    steal: !0
                }).then((function() {
                    return _(e)
                })), Promise.resolve(!1)) : Promise.resolve(!0))
            }

            function E() {
                return (E = (0, i.default)(n.default.mark((function e(t) {
                    var r;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ("not-determined" !== (r = C(t)) && "unknown" !== r) {
                                    e.next = 4;
                                    break
                                }
                                return e.next = 4, p.focus({
                                    steal: !0
                                });
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function _(e) {
                "microphone" === e ? c.ModalManager.open((0, d.jsx)(o.ConfirmPopup, {
                    title: u.fbt._("Allow WhatsApp to access your microphone?", null, {
                        hk: "4s8KQs"
                    }),
                    okText: u.fbt._("Go To Settings", null, {
                        hk: "1f0Rs6"
                    }),
                    onOK: function() {
                        f(l.SysPrefLinksType.PRIVACY_MICROPHONE), c.ModalManager.close()
                    },
                    cancelText: u.fbt._("Not Now", null, {
                        hk: "3nAclV"
                    }),
                    onCancel: function() {
                        c.ModalManager.close()
                    },
                    children: (0, d.jsx)("div", {
                        children: u.fbt._("WhatsApp needs a microphone for calls and voice messages. Allow access in your computer's settings.", null, {
                            hk: "4e9lF"
                        })
                    })
                })) : c.ModalManager.open((0, d.jsx)(o.ConfirmPopup, {
                    title: u.fbt._("Allow WhatsApp to access your camera?", null, {
                        hk: "1a6B1l"
                    }),
                    okText: u.fbt._("Go To Settings", null, {
                        hk: "1f0Rs6"
                    }),
                    onOK: function() {
                        f(l.SysPrefLinksType.PRIVACY_CAMERA), c.ModalManager.close()
                    },
                    cancelText: u.fbt._("Not Now", null, {
                        hk: "3nAclV"
                    }),
                    onCancel: function() {
                        c.ModalManager.close()
                    },
                    children: (0, d.jsx)("div", {
                        children: u.fbt._("WhatsApp needs a camera for video calls and taking photos. Allow access in your computer's settings.", null, {
                            hk: "bs1nr"
                        })
                    })
                }))
            }
        }
    }
]);