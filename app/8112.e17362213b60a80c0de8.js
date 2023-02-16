/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [8112], {
        727173: (e, n, t) => {
            "use strict";
            var r = t(263026).default,
                u = t(307914);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.JobBuilder = void 0, n.definePersistedJob = function() {
                return new f([])
            };
            var i = u(t(46292)),
                s = u(t(889372)),
                o = u(t(605816)),
                a = t(606136),
                d = t(281098),
                f = function() {
                    function e(n) {
                        (0, s.default)(this, e), this.steps = n
                    }
                    return (0, o.default)(e, [{
                        key: "step",
                        value: function(e, n) {
                            return this._stepWithOptions(e, "function" == typeof n ? {
                                code: n
                            } : n)
                        }
                    }, {
                        key: "_stepWithOptions",
                        value: function(n, t) {
                            var u = t.stopRetryIf,
                                s = p(t.requirements, t.code, u);
                            if (u) {
                                var o = u.timePassedSeconds,
                                    f = u.appCrashed,
                                    l = p(null, function(e) {
                                        return function(n, t, u) {
                                            return r.resolve(e(n, t, u)).then((function(e) {
                                                return e instanceof a.InterruptJob ? e : new a.InterruptJob(e)
                                            }))
                                        }
                                    }(u.onStopRetry), u);
                                null != o && (s = c((function(e, n, t) {
                                    var r = t.jobStartTime;
                                    return (0, d.happenedWithin)(r, o)
                                }), s, l)), f && (s = c((function(e, n, t) {
                                    return !t.afterCrash
                                }), s, l))
                            }
                            return new e([].concat((0, i.default)(this.steps), [{
                                stepName: n,
                                info: s
                            }]))
                        }
                    }, {
                        key: "finalStep",
                        value: function(e, n) {
                            var t = this.step(e, n);
                            return {
                                end: function() {
                                    return t.steps
                                }
                            }
                        }
                    }]), e
                }();

            function c(e, n, t) {
                return function(r, u, i) {
                    return e(r, u, i) ? n(r, u, i) : t(r, u, i)
                }
            }

            function p(e, n, t) {
                var r = {
                    requirements: e,
                    code: n,
                    stopRetryIf: t
                };
                return function() {
                    return r
                }
            }
            n.JobBuilder = f
        },
        18112: (e, n, t) => {
            "use strict";
            var r = t(595318);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.QueryGetSignedUserInfo = void 0;
            var u = r(t(887757)),
                i = r(t(348926)),
                s = t(115066),
                o = t(985044),
                a = t(780561),
                d = t(104010),
                f = t(908112),
                c = t(336782),
                p = t(95422);

            function l(e, n) {
                var t;
                return null == e || null === (t = e.maybeChild(n)) || void 0 === t ? void 0 : t.contentString()
            }
            var b = new a.WapParser("getSignedUserInfoResponse", (function(e) {
                    e.assertTag("iq"), e.assertFromServer();
                    var n = e.maybeChild("signed_user_info");
                    return {
                        phoneNumber: l(n, "phone_number"),
                        phoneNumberSignatureExpiration: l(n, "ttl_timestamp"),
                        phoneNumberSignature: l(n, "phone_number_signature"),
                        businessDomain: l(n, "business_domain")
                    }
                })),
                v = (0, c.defineWebPersistedJob)().finalStep("sendStanza", function() {
                    var e = (0, i.default)(u.default.mark((function e(n) {
                        var t, r, i;
                        return u.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.businessJid, r = (0, o.wap)("iq", {
                                        to: o.S_WHATSAPP_NET,
                                        type: "get",
                                        xmlns: "w:biz:catalog",
                                        id: (0, o.generateId)()
                                    }, (0, o.wap)("signed_user_info", {
                                        biz_jid: (0, f.USER_JID)((0, p.createWid)(t))
                                    })), e.next = 4, (0, s.deprecatedSendIq)(r, b);
                                case 4:
                                    if ((i = e.sent).success) {
                                        e.next = 7;
                                        break
                                    }
                                    throw new d.ServerStatusCodeError(i.errorCode);
                                case 7:
                                    return e.abrupt("return", i.result);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()).end();
            n.QueryGetSignedUserInfo = v
        },
        336782: (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.defineWebPersistedJob = function() {
                return (0, r.definePersistedJob)()
            };
            var r = t(727173)
        }
    }
]);