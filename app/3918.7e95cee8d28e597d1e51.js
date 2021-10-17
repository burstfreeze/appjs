/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [3918], {
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
                o = r(78850),
                i = r(44595),
                a = r(15929);
            e.exports = function(e) {
                return n(e) || o(e) || i(e) || a()
            }
        },
        39944: (e, t, r) => {
            "use strict";
            var n = r(52108).default,
                o = r(7914);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.definePersistedJob = function() {
                return new d([])
            }, t.JobBuilder = void 0;
            var i = o(r(46292)),
                a = o(r(89372)),
                s = o(r(5816)),
                u = r(18824),
                f = r(42761),
                d = function() {
                    function e(t) {
                        (0, a.default)(this, e), this.steps = t
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
                        value: function(t, r) {
                            var o = r.stopRetryIf,
                                a = p(r.requirements, r.code, o);
                            if (o) {
                                var s = o.timePassedSeconds,
                                    d = o.appCrashed,
                                    l = p(null, function(e) {
                                        return function(t, r, o) {
                                            return n.resolve(e(t, r, o)).then((function(e) {
                                                return e instanceof f.InterruptJob ? e : new f.InterruptJob(e)
                                            }))
                                        }
                                    }(o.onStopRetry), o);
                                null != s && (a = c((function(e, t, r) {
                                    var n = r.jobStartTime;
                                    return (0, u.happenedWithin)(n, s)
                                }), a, l)), d && (a = c((function(e, t, r) {
                                    return !r.afterCrash
                                }), a, l))
                            }
                            return new e([].concat((0, i.default)(this.steps), [{
                                stepName: t,
                                info: a
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

            function c(e, t, r) {
                return function(n, o, i) {
                    return e(n, o, i) ? t(n, o, i) : r(n, o, i)
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
            t.JobBuilder = d
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
        23918: (e, t, r) => {
            "use strict";
            var n = r(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(r(87757)),
                i = n(r(48926)),
                a = r(84470),
                s = r(78363),
                u = r(73033),
                f = r(34733),
                d = r(26871),
                c = r(14729),
                p = r(90994),
                l = r(21545),
                y = r(10542),
                _ = new a.WapParser("rotateKeyResponseParser", (function(e) {
                    e.assertFromServer()
                })),
                b = (0, y.defineWebPersistedJob)().step("uploadKeys", (0, i.default)(o.default.mark((function e() {
                    var t, r, n, i, a;
                    return o.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, d.waSignalStore.getRegistrationInfo().then((function(e) {
                                    if (!e) throw new Error("No registration info is available");
                                    return d.waSignalStore.rotateSignedPreKey((0, u.toSignalCurveKeyPair)(e.identityKeyPair), c.generateSignedKeyPair)
                                }));
                            case 2:
                                return t = e.sent, __LOG__(2)`rotateKey: signedPreKey uploading`, r = (0, s.wap)("iq", {
                                    xmlns: "encrypt",
                                    type: "set",
                                    to: s.S_WHATSAPP_NET,
                                    id: (0, s.generateId)()
                                }, (0, s.wap)("rotate", null, (0, p.xmppSignedPreKey)(t))), e.next = 7, (0, f.sendIq)(r, _);
                            case 7:
                                if (!(n = e.sent).success) {
                                    e.next = 10;
                                    break
                                }
                                return e.abrupt("return", {
                                    shouldDigestKey: !1
                                });
                            case 10:
                                return i = !1, 406 === (a = n.errorCode) ? __LOG__(3)`rotateKey generated bad key` : 409 === a ? (__LOG__(3)`skey does not pass server validation`, i = !0) : a >= 500 ? __LOG__(2)`rotateKey server error ${a}, wait a day` : (__LOG__(2)`rotateKey unrecognized error ${a}`, i = !0), e.abrupt("return", {
                                    shouldDigestKey: i
                                });
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).finalStep("maybeDigestKey", (function(e) {
                    if (e.shouldDigestKey) return (0, l.digestKey)()
                })).end();
            t.default = b
        }
    }
]);