/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [4569], {
        39090: (e, t, n) => {
            var r = n(15365);
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
            }
        },
        78850: e => {
            e.exports = function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        15929: e => {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        46292: (e, t, n) => {
            var r = n(39090),
                i = n(78850),
                u = n(44595),
                o = n(15929);
            e.exports = function(e) {
                return r(e) || i(e) || u(e) || o()
            }
        },
        39944: (e, t, n) => {
            "use strict";
            var r = n(52108).default,
                i = n(7914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.definePersistedJob = function() {
                return new d([])
            }, t.JobBuilder = void 0;
            var u = i(n(46292)),
                o = i(n(89372)),
                s = i(n(5816)),
                a = n(18824),
                f = n(42761),
                d = function() {
                    function e(t) {
                        (0, o.default)(this, e), this.steps = t
                    }
                    return (0, s.default)(e, [{
                        key: "step",
                        value: function(e, t) {
                            return this._stepWithOptions(e, "function" == typeof t ? {
                                code: t
                            } : t)
                        }
                    }, {
                        key: "_stepWithOptions",
                        value: function(t, n) {
                            var i = n.stopRetryIf,
                                o = p(n.requirements, n.code, i);
                            if (i) {
                                var s = i.timePassedSeconds,
                                    d = i.appCrashed,
                                    l = p(null, function(e) {
                                        return function(t, n, i) {
                                            return r.resolve(e(t, n, i)).then((function(e) {
                                                return e instanceof f.InterruptJob ? e : new f.InterruptJob(e)
                                            }))
                                        }
                                    }(i.onStopRetry), i);
                                null != s && (o = c((function(e, t, n) {
                                    var r = n.jobStartTime;
                                    return (0, a.happenedWithin)(r, s)
                                }), o, l)), d && (o = c((function(e, t, n) {
                                    return !n.afterCrash
                                }), o, l))
                            }
                            return new e([].concat((0, u.default)(this.steps), [{
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

            function c(e, t, n) {
                return function(r, i, u) {
                    return e(r, i, u) ? t(r, i, u) : n(r, i, u)
                }
            }

            function p(e, t, n) {
                var r = {
                    requirements: e,
                    code: t,
                    stopRetryIf: n
                };
                return function() {
                    return r
                }
            }
            t.JobBuilder = d
        },
        10542: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defineWebPersistedJob = function() {
                return (0, r.definePersistedJob)()
            };
            var r = n(39944)
        },
        24569: (e, t, n) => {
            "use strict";
            var r = n(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = r(n(87757)),
                u = r(n(48926)),
                o = n(78363),
                s = n(34733),
                a = n(10542),
                f = r(n(39526)),
                d = n(15824),
                c = n(59175),
                p = n(8297);

            function l(e, t) {
                var n;
                return null == e || null === (n = e.maybeChild(t)) || void 0 === n ? void 0 : n.contentString()
            }
            var b = new f.default("getSignedUserInfoResponse", (function(e) {
                    e.assertTag("iq"), e.assertFromServer();
                    var t = e.maybeChild("signed_user_info");
                    return {
                        phoneNumber: l(t, "phone_number"),
                        phoneNumberSignatureExpiration: l(t, "ttl_timestamp"),
                        phoneNumberSignature: l(t, "phone_number_signature"),
                        businessDomain: l(t, "business_domain")
                    }
                })),
                v = (0, a.defineWebPersistedJob)().finalStep("sendStanza", function() {
                    var e = (0, u.default)(i.default.mark((function e(t) {
                        var n, r, u;
                        return i.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.businessJid, r = (0, o.wap)("iq", {
                                        to: o.S_WHATSAPP_NET,
                                        type: "get",
                                        xmlns: "w:biz:catalog",
                                        id: (0, o.generateId)()
                                    }, (0, o.wap)("signed_user_info", {
                                        biz_jid: (0, d.USER_JID)((0, p.createWid)(n))
                                    })), e.next = 4, (0, s.sendIq)(r, b);
                                case 4:
                                    if ((u = e.sent).success) {
                                        e.next = 7;
                                        break
                                    }
                                    throw new c.ServerStatusCodeError(u.errorCode);
                                case 7:
                                    return e.abrupt("return", u.result);
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
            t.default = v
        }
    }
]);