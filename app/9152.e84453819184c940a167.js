/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [9152], {
        39090: (e, t, r) => {
            var n = r(15365);
            e.exports = function(e) {
                if (Array.isArray(e)) return n(e)
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
        46292: (e, t, r) => {
            var n = r(39090),
                i = r(78850),
                u = r(44595),
                o = r(15929);
            e.exports = function(e) {
                return n(e) || i(e) || u(e) || o()
            }
        },
        39944: (e, t, r) => {
            "use strict";
            var n = r(52108).default,
                i = r(7914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.definePersistedJob = function() {
                return new f([])
            }, t.JobBuilder = void 0;
            var u = i(r(46292)),
                o = i(r(89372)),
                a = i(r(5816)),
                s = r(18824),
                c = r(42761),
                f = function() {
                    function e(t) {
                        (0, o.default)(this, e), this.steps = t
                    }
                    return (0, a.default)(e, [{
                        key: "step",
                        value: function(e, t) {
                            return this._stepWithOptions(e, "function" == typeof t ? {
                                code: t
                            } : t)
                        }
                    }, {
                        key: "_stepWithOptions",
                        value: function(t, r) {
                            var i = r.stopRetryIf,
                                o = p(r.requirements, r.code, i);
                            if (i) {
                                var a = i.timePassedSeconds,
                                    f = i.appCrashed,
                                    l = p(null, function(e) {
                                        return function(t, r, i) {
                                            return n.resolve(e(t, r, i)).then((function(e) {
                                                return e instanceof c.InterruptJob ? e : new c.InterruptJob(e)
                                            }))
                                        }
                                    }(i.onStopRetry), i);
                                null != a && (o = d((function(e, t, r) {
                                    var n = r.jobStartTime;
                                    return (0, s.happenedWithin)(n, a)
                                }), o, l)), f && (o = d((function(e, t, r) {
                                    return !r.afterCrash
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
                            var r = this.step(e, t);
                            return {
                                end: function() {
                                    return r.steps
                                }
                            }
                        }
                    }]), e
                }();

            function d(e, t, r) {
                return function(n, i, u) {
                    return e(n, i, u) ? t(n, i, u) : r(n, i, u)
                }
            }

            function p(e, t, r) {
                var n = {
                    requirements: e,
                    code: t,
                    stopRetryIf: r
                };
                return function() {
                    return n
                }
            }
            t.JobBuilder = f
        },
        10542: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defineWebPersistedJob = function() {
                return (0, n.definePersistedJob)()
            };
            var n = r(39944)
        },
        69152: (e, t, r) => {
            "use strict";
            var n = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(r(87757)),
                u = n(r(48926)),
                o = r(78363),
                a = r(34733),
                s = r(10542),
                c = n(r(39526)),
                f = r(15824),
                d = r(59175),
                p = r(8297),
                l = new c.default("getPublicKeyResponse", (function(e) {
                    var t, r;
                    return e.assertTag("iq"), e.assertFromServer(), {
                        certificate: null === (t = e.maybeChild("public_key")) || void 0 === t || null === (r = t.maybeChild("pem")) || void 0 === r ? void 0 : r.contentString()
                    }
                })),
                b = (0, s.defineWebPersistedJob)().finalStep("sendStanza", function() {
                    var e = (0, u.default)(i.default.mark((function e(t) {
                        var r, n, u;
                        return i.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.businessJid, n = (0, o.wap)("iq", {
                                        to: o.S_WHATSAPP_NET,
                                        type: "get",
                                        smax_id: "52",
                                        xmlns: "w:biz:catalog",
                                        id: (0, o.generateId)()
                                    }, (0, o.wap)("public_key", {
                                        jid: (0, f.USER_JID)((0, p.createWid)(r))
                                    })), e.next = 4, (0, a.sendIq)(n, l);
                                case 4:
                                    if ((u = e.sent).success) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new d.ServerStatusCodeError(u.errorCode);
                                case 9:
                                    return e.abrupt("return", u.result);
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
            t.default = b
        }
    }
]);