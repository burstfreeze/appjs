/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [4410], {
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
                return new d([])
            }, t.JobBuilder = void 0;
            var u = i(r(46292)),
                o = i(r(89372)),
                a = i(r(5816)),
                s = r(18824),
                c = r(42761),
                d = function() {
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
                                    d = i.appCrashed,
                                    l = p(null, function(e) {
                                        return function(t, r, i) {
                                            return n.resolve(e(t, r, i)).then((function(e) {
                                                return e instanceof c.InterruptJob ? e : new c.InterruptJob(e)
                                            }))
                                        }
                                    }(i.onStopRetry), i);
                                null != a && (o = f((function(e, t, r) {
                                    var n = r.jobStartTime;
                                    return (0, s.happenedWithin)(n, a)
                                }), o, l)), d && (o = f((function(e, t, r) {
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

            function f(e, t, r) {
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
        74410: (e, t, r) => {
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
                c = r(59175),
                d = n(r(39526)),
                f = n(r(64951)),
                p = r(58020),
                l = r(15824),
                h = r(8297),
                v = new d.default("productListResponse", (function(e) {
                    e.assertTag("iq"), e.assertFromServer();
                    var t = e.child("product_list"),
                        r = [];
                    return t.forEachChildWithTag("product", (function(e) {
                        var t = e.maybeChild("id");
                        if (t) {
                            var n = e.maybeChild("status");
                            (null == n ? void 0 : n.contentString()) === p.INVALID_PRODUCT_TOKEN ? r.push({
                                id: t.contentString(),
                                status: p.INVALID_PRODUCT_TOKEN
                            }) : r.push((0, f.default)(e))
                        }
                    })), r
                })),
                b = (0, s.defineWebPersistedJob)().finalStep("sendStanza", function() {
                    var e = (0, u.default)(i.default.mark((function e(t) {
                        var r, n, u, s, d, f;
                        return i.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.catalogWid, n = t.productIds, u = t.width, s = t.height, d = (0, o.wap)("iq", {
                                        to: o.S_WHATSAPP_NET,
                                        type: "get",
                                        smax_id: "21",
                                        xmlns: "w:biz:catalog",
                                        id: (0, o.generateId)()
                                    }, (0, o.wap)("product_list", {
                                        jid: (0, l.USER_JID)((0, h.createWid)(r))
                                    }, n.map((function(e) {
                                        return (0, o.wap)("product", null, (0, o.wap)("id", null, e))
                                    })).concat([(0, o.wap)("width", null, u.toString()), (0, o.wap)("height", null, s.toString())]))), e.next = 4, (0, a.sendIq)(d, v);
                                case 4:
                                    if ((f = e.sent).success) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new c.ServerStatusCodeError(f.errorCode);
                                case 9:
                                    return e.abrupt("return", f.result);
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