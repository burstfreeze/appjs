/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [1157], {
        727173: (e, t, n) => {
            "use strict";
            var r = n(307914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JobBuilder = void 0, t.definePersistedJob = function() {
                return new c([])
            };
            var i = r(n(46292)),
                o = r(n(889372)),
                u = r(n(605816)),
                s = n(606136),
                a = n(281098),
                c = function() {
                    function e(t) {
                        (0, o.default)(this, e), this.steps = t
                    }
                    return (0, u.default)(e, [{
                        key: "step",
                        value: function(e, t) {
                            return this._stepWithOptions(e, "function" == typeof t ? {
                                code: t
                            } : t)
                        }
                    }, {
                        key: "_stepWithOptions",
                        value: function(t, n) {
                            var r = n.stopRetryIf,
                                o = f(n.requirements, n.code, r);
                            if (r) {
                                var u = r.timePassedSeconds,
                                    c = r.appCrashed,
                                    p = f(null, function(e) {
                                        return function(t, n, r) {
                                            return Promise.resolve(e(t, n, r)).then((function(e) {
                                                return e instanceof s.InterruptJob ? e : new s.InterruptJob(e)
                                            }))
                                        }
                                    }(r.onStopRetry), r);
                                null != u && (o = d((function(e, t, n) {
                                    var r = n.jobStartTime;
                                    return (0, a.happenedWithin)(r, u)
                                }), o, p)), c && (o = d((function(e, t, n) {
                                    return !n.afterCrash
                                }), o, p))
                            }
                            return new e([].concat((0, i.default)(this.steps), [{
                                stepName: t,
                                info: o
                            }]))
                        }
                    }, {
                        key: "finalStep",
                        value: function(e, t) {
                            var n = this.step(e, t);
                            return {
                                end: function() {
                                    return n.steps
                                }
                            }
                        }
                    }]), e
                }();

            function d(e, t, n) {
                return function(r, i, o) {
                    return e(r, i, o) ? t(r, i, o) : n(r, i, o)
                }
            }

            function f(e, t, n) {
                var r = {
                    requirements: e,
                    code: t,
                    stopRetryIf: n
                };
                return function() {
                    return r
                }
            }
            t.JobBuilder = c
        },
        974169: (e, t, n) => {
            "use strict";
            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.VerifyPostcode = void 0;
            var i = r(n(887757)),
                o = r(n(348926)),
                u = n(115066),
                s = n(985044),
                a = n(780561),
                c = n(104010),
                d = n(908112),
                f = n(336782),
                p = n(95422),
                l = new a.WapParser("productResponse", (function(e) {
                    e.assertTag("iq"), e.assertFromServer();
                    var t = e.child("result_code"),
                        n = e.maybeChild("encrypted_location_name"),
                        r = null == n ? void 0 : n.contentString();
                    return {
                        resultCode: t.contentString(),
                        encryptedLocationName: r
                    }
                })),
                v = (0, f.defineWebPersistedJob)().finalStep("sendStanza", function() {
                    var e = (0, o.default)(i.default.mark((function e(t) {
                        var n, r, o, a;
                        return i.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.businessJid, r = t.directConnectionEncryptedInfo, o = (0, s.wap)("iq", {
                                        id: (0, s.generateId)(),
                                        xmlns: "w:biz:catalog",
                                        type: "get",
                                        to: s.S_WHATSAPP_NET,
                                        smax_id: "70"
                                    }, (0, s.wap)("verify_postcode", {
                                        biz_jid: (0, d.USER_JID)((0, p.createWid)(n))
                                    }, (0, s.wap)("direct_connection_encrypted_info", null, r))), e.next = 4, (0, u.deprecatedSendIq)(o, l);
                                case 4:
                                    if ((a = e.sent).success) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new c.ServerStatusCodeError(a.errorCode);
                                case 9:
                                    return e.abrupt("return", a.result);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()).end();
            t.VerifyPostcode = v
        },
        336782: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defineWebPersistedJob = function() {
                return (0, r.definePersistedJob)()
            };
            var r = n(727173)
        }
    }
]);