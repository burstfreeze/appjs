/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [711], {
        727173: (e, a, l) => {
            "use strict";
            var n = l(263026).default,
                t = l(307914);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.JobBuilder = void 0, a.definePersistedJob = function() {
                return new d([])
            };
            var r = t(l(46292)),
                u = t(l(889372)),
                i = t(l(605816)),
                s = l(606136),
                o = l(281098),
                d = function() {
                    function e(a) {
                        (0, u.default)(this, e), this.steps = a
                    }
                    return (0, i.default)(e, [{
                        key: "step",
                        value: function(e, a) {
                            return this._stepWithOptions(e, "function" == typeof a ? {
                                code: a
                            } : a)
                        }
                    }, {
                        key: "_stepWithOptions",
                        value: function(a, l) {
                            var t = l.stopRetryIf,
                                u = p(l.requirements, l.code, t);
                            if (t) {
                                var i = t.timePassedSeconds,
                                    d = t.appCrashed,
                                    g = p(null, function(e) {
                                        return function(a, l, t) {
                                            return n.resolve(e(a, l, t)).then((function(e) {
                                                return e instanceof s.InterruptJob ? e : new s.InterruptJob(e)
                                            }))
                                        }
                                    }(t.onStopRetry), t);
                                null != i && (u = c((function(e, a, l) {
                                    var n = l.jobStartTime;
                                    return (0, o.happenedWithin)(n, i)
                                }), u, g)), d && (u = c((function(e, a, l) {
                                    return !l.afterCrash
                                }), u, g))
                            }
                            return new e([].concat((0, r.default)(this.steps), [{
                                stepName: a,
                                info: u
                            }]))
                        }
                    }, {
                        key: "finalStep",
                        value: function(e, a) {
                            var l = this.step(e, a);
                            return {
                                end: function() {
                                    return l.steps
                                }
                            }
                        }
                    }]), e
                }();

            function c(e, a, l) {
                return function(n, t, r) {
                    return e(n, t, r) ? a(n, t, r) : l(n, t, r)
                }
            }

            function p(e, a, l) {
                var n = {
                    requirements: e,
                    code: a,
                    stopRetryIf: l
                };
                return function() {
                    return n
                }
            }
            a.JobBuilder = d
        },
        910711: (e, a, l) => {
            "use strict";
            var n = l(595318);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.QueryProductListCatalog = void 0;
            var t, r = n(l(887757)),
                u = n(l(348926)),
                i = l(115066),
                s = n(l(500200)),
                o = n(l(347999)),
                d = l(985044),
                c = l(780561),
                p = l(104010),
                g = l(777603),
                y = l(894995),
                f = l(98932),
                _ = l(27717),
                m = l(908112),
                k = l(336782),
                h = l(417436),
                S = l(103176),
                v = l(742351),
                P = l(95422),
                b = n(l(45593)),
                F = new c.WapParser("productListResponse", (function(e) {
                    e.assertTag("iq"), e.assertFromServer();
                    var a = e.child("product_list"),
                        l = [];
                    return a.forEachChildWithTag("product", (function(e) {
                        var a = e.maybeChild("id");
                        if (a) {
                            var n = e.maybeChild("status");
                            (null == n ? void 0 : n.contentString()) === S.INVALID_PRODUCT_TOKEN ? l.push({
                                id: a.contentString(),
                                status: S.INVALID_PRODUCT_TOKEN
                            }) : l.push((0, g.parseProductNode)(e))
                        }
                    })), l
                })),
                K = function() {
                    var e = (0, u.default)(r.default.mark((function e(a) {
                        var l, n, t, u, s, o, c;
                        return r.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return l = a.catalogWid, n = a.productIds, t = a.width, u = a.height, s = a.directConnectionEncryptedInfo, o = (0, d.wap)("iq", {
                                        to: d.S_WHATSAPP_NET,
                                        type: "get",
                                        smax_id: "21",
                                        xmlns: "w:biz:catalog",
                                        id: (0, d.generateId)()
                                    }, (0, d.wap)("product_list", {
                                        jid: (0, m.USER_JID)((0, P.createWid)(l))
                                    }, n.map((function(e) {
                                        return (0, d.wap)("product", null, (0, d.wap)("id", null, e))
                                    })).concat((0, b.default)([(0, d.wap)("width", null, t.toString()), (0, d.wap)("height", null, u.toString()), s ? (0, d.wap)("direct_connection_encrypted_info", null, s) : null])))), e.next = 4, (0, i.deprecatedSendIq)(o, F);
                                case 4:
                                    if ((c = e.sent).success) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new p.ServerStatusCodeError(c.errorCode);
                                case 9:
                                    return e.abrupt("return", c.result);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function() {
                    var e = (0, u.default)(r.default.mark((function e(a) {
                        var n, u, i, d, c, p, g, y;
                        return r.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, i = a.catalogWid, d = a.productIds, c = a.width, p = a.height, g = a.directConnectionEncryptedInfo, e.next = 4, (0, v.fetchQuery)(void 0 !== t ? t : t = l(647267), {
                                        request: {
                                            product_list: {
                                                jid: i.toString(),
                                                products: d.map((function(e) {
                                                    return {
                                                        id: e
                                                    }
                                                })),
                                                width: String(c),
                                                height: String(p),
                                                direct_connection_encrypted_info: g
                                            }
                                        }
                                    }, {
                                        eventLogger: (0, _.createCatalogEventLogger)(_.GRAPHQL_CATALOG_ENDPOINT.GET_PRODUCT_LIST)
                                    });
                                case 4:
                                    return y = e.sent, e.abrupt("return", (0, o.default)(null == y || null === (n = y.xwa_product_catalog_get_product_list) || void 0 === n || null === (u = n.product_list) || void 0 === u ? void 0 : u.products.map(f.parseProductGraphQL), "data?.xwa_product_catalog_get_product_list?.product_list?.products.map(parseProductGraphQL)"));
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), e.t0 instanceof h.GraphQLServerError && (0, s.default)(e.t0), __LOG__(3)`GraphQL: Failed fetching xwa_product_catalog_get_product_list query. Falling back to IQ.`, e.abrupt("return", K(a));
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                L = (0, k.defineWebPersistedJob)().finalStep("sendStanza", (function(e) {
                    return ((0, y.graphQLForCatalogM1Enabled)() ? C : K)(e)
                })).end();
            a.QueryProductListCatalog = L
        },
        647267: e => {
            "use strict";
            var a, l, n, t, r = {
                fragment: {
                    argumentDefinitions: a = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "request"
                    }],
                    kind: "Fragment",
                    metadata: null,
                    name: "WAWebQueryProductListCatalogJobQuery",
                    selections: t = [{
                        alias: null,
                        args: [{
                            kind: "Variable",
                            name: "request",
                            variableName: "request"
                        }],
                        concreteType: "XWAProductCatalogGetProductListResponseSuccess",
                        kind: "LinkedField",
                        name: "xwa_product_catalog_get_product_list",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "__typename",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "XWAProductCatalogGetProductListResponseSuccessProductList",
                            kind: "LinkedField",
                            name: "product_list",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "XWACatalogProduct",
                                kind: "LinkedField",
                                name: "products",
                                plural: !0,
                                selections: [l = {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "id",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "retailer_id",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "is_hidden",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "product_availability",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "max_available",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "name",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "description",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "url",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "currency",
                                    storageKey: null
                                }, n = {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "price",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "XWAProductCatalogProductStatusInfo",
                                    kind: "LinkedField",
                                    name: "status_info",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "can_appeal",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "status",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "XWAProductCatalogProductSalePrice",
                                    kind: "LinkedField",
                                    name: "sale_price",
                                    plural: !1,
                                    selections: [n, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "start_date",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "end_date",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "XWAProductCatalogProductMedia",
                                    kind: "LinkedField",
                                    name: "media",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "XWAProductCatalogProductMediaImage",
                                        kind: "LinkedField",
                                        name: "images",
                                        plural: !0,
                                        selections: [l, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "original_image_url",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "request_image_url",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "belongs_to",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "compliance_category",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "XWAProductCatalogProductComplianceInfo",
                                    kind: "LinkedField",
                                    name: "compliance_info",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "country_code_origin",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "importer_name",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWAProductCatalogProductComplianceInfoImporterAddress",
                                        kind: "LinkedField",
                                        name: "importer_address",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "street1",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "street2",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "postal_code",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "city",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "region",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "country_code",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Query",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: a,
                    kind: "Operation",
                    name: "WAWebQueryProductListCatalogJobQuery",
                    selections: t
                },
                params: {
                    id: "WAWebQueryProductListCatalogJobQuery",
                    metadata: {},
                    name: "WAWebQueryProductListCatalogJobQuery",
                    operationKind: "query",
                    text: null
                }
            };
            r.hash = "5d3b936da25c831ffeb17f59668da9c4", e.exports = r
        },
        336782: (e, a, l) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.defineWebPersistedJob = function() {
                return (0, n.definePersistedJob)()
            };
            var n = l(727173)
        }
    }
]);