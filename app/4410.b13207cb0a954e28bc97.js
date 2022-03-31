/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [4410], {
        39944: (e, a, n) => {
            "use strict";
            var t = n(21314).default,
                l = n(7914);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.JobBuilder = void 0, a.definePersistedJob = function() {
                return new c([])
            };
            var r = l(n(46292)),
                u = l(n(89372)),
                i = l(n(5816)),
                s = n(42761),
                o = n(79746),
                c = function() {
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
                        value: function(a, n) {
                            var l = n.stopRetryIf,
                                u = p(n.requirements, n.code, l);
                            if (l) {
                                var i = l.timePassedSeconds,
                                    c = l.appCrashed,
                                    g = p(null, function(e) {
                                        return function(a, n, l) {
                                            return t.resolve(e(a, n, l)).then((function(e) {
                                                return e instanceof s.InterruptJob ? e : new s.InterruptJob(e)
                                            }))
                                        }
                                    }(l.onStopRetry), l);
                                null != i && (u = d((function(e, a, n) {
                                    var t = n.jobStartTime;
                                    return (0, o.happenedWithin)(t, i)
                                }), u, g)), c && (u = d((function(e, a, n) {
                                    return !n.afterCrash
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
                            var n = this.step(e, a);
                            return {
                                end: function() {
                                    return n.steps
                                }
                            }
                        }
                    }]), e
                }();

            function d(e, a, n) {
                return function(t, l, r) {
                    return e(t, l, r) ? a(t, l, r) : n(t, l, r)
                }
            }

            function p(e, a, n) {
                var t = {
                    requirements: e,
                    code: a,
                    stopRetryIf: n
                };
                return function() {
                    return t
                }
            }
            a.JobBuilder = c
        },
        90717: e => {
            "use strict";
            var a, n, t, l, r, u = {
                fragment: {
                    argumentDefinitions: a = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "request"
                    }],
                    kind: "Fragment",
                    metadata: null,
                    name: "queryProductListCatalogQuery",
                    selections: r = [{
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
                        selections: [n = {
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
                                concreteType: "XWAProductCatalogGetProductListResponseSuccessProductListProduct",
                                kind: "LinkedField",
                                name: "products",
                                plural: !0,
                                selections: [{
                                    kind: "InlineFragment",
                                    selections: [n, t = {
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
                                        name: "availability",
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
                                    }, l = {
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
                                        selections: [l, {
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
                                            selections: [t, {
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
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "belongs_to",
                                            storageKey: null
                                        }],
                                        type: "XWAProductCatalogGetResponseSuccessProductCatalogProduct",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "compliance_category",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "XWAProductCatalogGetProductResponseSuccessProductCatalogProductComplianceInfo",
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
                                                concreteType: "XWAProductCatalogGetProductResponseSuccessProductCatalogProductComplianceInfoImporterAddress",
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
                                        type: "XWAProductCatalogGetProductResponseSuccessProductCatalogProduct",
                                        abstractKey: null
                                    }],
                                    type: "XWAICatalogProduct",
                                    abstractKey: "__isXWAICatalogProduct"
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
                    name: "queryProductListCatalogQuery",
                    selections: r
                },
                params: {
                    id: "queryProductListCatalogQuery",
                    metadata: {},
                    name: "queryProductListCatalogQuery",
                    operationKind: "query",
                    text: null
                }
            };
            u.hash = "2022513dc8cc1eb839cc2d3078d946a9", e.exports = u
        },
        10542: (e, a, n) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.defineWebPersistedJob = function() {
                return (0, t.definePersistedJob)()
            };
            var t = n(39944)
        },
        74410: (e, a, n) => {
            "use strict";
            var t = n(95318);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.QueryProductListCatalog = void 0;
            var l, r = t(n(87757)),
                u = t(n(48926)),
                i = t(n(90877)),
                s = n(78363),
                o = n(84470),
                c = n(73435),
                d = n(72171),
                p = n(62512),
                g = n(84460),
                y = t(n(272)),
                f = t(n(16386)),
                m = n(26672),
                _ = n(34733),
                k = n(10542),
                P = n(2629),
                S = n(64951),
                h = n(30892),
                v = n(74242),
                C = n(15824),
                K = new o.WapParser("productListResponse", (function(e) {
                    e.assertTag("iq"), e.assertFromServer();
                    var a = e.child("product_list"),
                        n = [];
                    return a.forEachChildWithTag("product", (function(e) {
                        var a = e.maybeChild("id");
                        if (a) {
                            var t = e.maybeChild("status");
                            (null == t ? void 0 : t.contentString()) === v.INVALID_PRODUCT_TOKEN ? n.push({
                                id: a.contentString(),
                                status: v.INVALID_PRODUCT_TOKEN
                            }) : n.push((0, S.parseProductNode)(e))
                        }
                    })), n
                })),
                F = function() {
                    var e = (0, u.default)(r.default.mark((function e(a) {
                        var n, t, l, u, i, o, d;
                        return r.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = a.catalogWid, t = a.productIds, l = a.width, u = a.height, i = a.directConnectionEncryptedInfo, o = (0, s.wap)("iq", {
                                        to: s.S_WHATSAPP_NET,
                                        type: "get",
                                        smax_id: "21",
                                        xmlns: "w:biz:catalog",
                                        id: (0, s.generateId)()
                                    }, (0, s.wap)("product_list", {
                                        jid: (0, C.USER_JID)((0, g.createWid)(n))
                                    }, t.map((function(e) {
                                        return (0, s.wap)("product", null, (0, s.wap)("id", null, e))
                                    })).concat((0, f.default)([(0, s.wap)("width", null, l.toString()), (0, s.wap)("height", null, u.toString()), i ? (0, s.wap)("direct_connection_encrypted_info", null, i) : null])))), e.next = 4, (0, _.sendIq)(o, K);
                                case 4:
                                    if ((d = e.sent).success) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new c.ServerStatusCodeError(d.errorCode);
                                case 9:
                                    return e.abrupt("return", d.result);
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
                b = function() {
                    var e = (0, u.default)(r.default.mark((function e(a) {
                        var t, u, s, o, c, g, f, _;
                        return r.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, s = a.catalogWid, o = a.productIds, c = a.width, g = a.height, f = a.directConnectionEncryptedInfo, e.next = 4, (0, p.fetchQuery)(void 0 !== l ? l : l = n(90717), {
                                        request: {
                                            product_list: {
                                                jid: s.toString(),
                                                products: o.map((function(e) {
                                                    return {
                                                        id: e
                                                    }
                                                })),
                                                width: String(c),
                                                height: String(g),
                                                direct_connection_encrypted_info: f
                                            }
                                        }
                                    }, {
                                        eventLogger: (0, m.createCatalogEventLogger)(m.GRAPHQL_CATALOG_ENDPOINT.GET_PRODUCT_LIST)
                                    });
                                case 4:
                                    return _ = e.sent, e.abrupt("return", (0, y.default)(null == _ || null === (t = _.xwa_product_catalog_get_product_list) || void 0 === t || null === (u = t.product_list) || void 0 === u ? void 0 : u.products.map(h.parseProductGraphQL), "data?.xwa_product_catalog_get_product_list?.product_list?.products.map(parseProductGraphQL)"));
                                case 8:
                                    if (e.prev = 8, e.t0 = e.catch(0), !(e.t0 instanceof d.GraphQLServerError)) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.abrupt("return", (0, i.default)(e.t0, (function() {
                                        return F(a)
                                    }), "xwa_product_catalog_get_product_list"));
                                case 12:
                                    return e.abrupt("return", F(a));
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
                    return ((0, P.graphQLForCatalogM1Enabled)() ? b : F)(e)
                })).end();
            a.QueryProductListCatalog = L
        }
    }
]);