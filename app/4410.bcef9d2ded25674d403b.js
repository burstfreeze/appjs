/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [4410], {
        39944: (e, a, l) => {
            "use strict";
            var t = l(21314).default,
                n = l(7914);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.JobBuilder = void 0, a.definePersistedJob = function() {
                return new c([])
            };
            var r = n(l(46292)),
                u = n(l(89372)),
                i = n(l(5816)),
                s = l(42761),
                o = l(79746),
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
                        value: function(a, l) {
                            var n = l.stopRetryIf,
                                u = g(l.requirements, l.code, n);
                            if (n) {
                                var i = n.timePassedSeconds,
                                    c = n.appCrashed,
                                    p = g(null, function(e) {
                                        return function(a, l, n) {
                                            return t.resolve(e(a, l, n)).then((function(e) {
                                                return e instanceof s.InterruptJob ? e : new s.InterruptJob(e)
                                            }))
                                        }
                                    }(n.onStopRetry), n);
                                null != i && (u = d((function(e, a, l) {
                                    var t = l.jobStartTime;
                                    return (0, o.happenedWithin)(t, i)
                                }), u, p)), c && (u = d((function(e, a, l) {
                                    return !l.afterCrash
                                }), u, p))
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

            function d(e, a, l) {
                return function(t, n, r) {
                    return e(t, n, r) ? a(t, n, r) : l(t, n, r)
                }
            }

            function g(e, a, l) {
                var t = {
                    requirements: e,
                    code: a,
                    stopRetryIf: l
                };
                return function() {
                    return t
                }
            }
            a.JobBuilder = c
        },
        90717: e => {
            "use strict";
            var a, l, t, n, r, u = {
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
                        selections: [l = {
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
                                    selections: [l, t = {
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
        10542: (e, a, l) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.defineWebPersistedJob = function() {
                return (0, t.definePersistedJob)()
            };
            var t = l(39944)
        },
        74410: (e, a, l) => {
            "use strict";
            var t = l(95318);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.QueryProductListCatalog = void 0;
            var n, r = t(l(63038)),
                u = t(l(87757)),
                i = t(l(48926)),
                s = l(78363),
                o = l(84470),
                c = l(62512),
                d = l(84460),
                g = t(l(272)),
                p = (t(l(8477)), t(l(16386))),
                y = l(26672),
                m = l(34733),
                _ = l(10542),
                f = l(2629),
                k = l(64951),
                P = l(30892),
                S = l(74242),
                h = l(15824),
                v = l(59175),
                C = new o.WapParser("productListResponse", (function(e) {
                    e.assertTag("iq"), e.assertFromServer();
                    var a = e.child("product_list"),
                        l = [];
                    return a.forEachChildWithTag("product", (function(e) {
                        var a = e.maybeChild("id");
                        if (a) {
                            var t = e.maybeChild("status");
                            (null == t ? void 0 : t.contentString()) === S.INVALID_PRODUCT_TOKEN ? l.push({
                                id: a.contentString(),
                                status: S.INVALID_PRODUCT_TOKEN
                            }) : l.push((0, k.parseProductNode)(e))
                        }
                    })), l
                })),
                F = function() {
                    var e = (0, i.default)(u.default.mark((function e(a) {
                        var l, t, n, r, i, o, c;
                        return u.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return l = a.catalogWid, t = a.productIds, n = a.width, r = a.height, i = a.directConnectionEncryptedInfo, o = (0, s.wap)("iq", {
                                        to: s.S_WHATSAPP_NET,
                                        type: "get",
                                        smax_id: "21",
                                        xmlns: "w:biz:catalog",
                                        id: (0, s.generateId)()
                                    }, (0, s.wap)("product_list", {
                                        jid: (0, h.USER_JID)((0, d.createWid)(l))
                                    }, t.map((function(e) {
                                        return (0, s.wap)("product", null, (0, s.wap)("id", null, e))
                                    })).concat((0, p.default)([(0, s.wap)("width", null, n.toString()), (0, s.wap)("height", null, r.toString()), i ? (0, s.wap)("direct_connection_encrypted_info", null, i) : null])))), e.next = 4, (0, m.sendIq)(o, C);
                                case 4:
                                    if ((c = e.sent).success) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new v.ServerStatusCodeError(c.errorCode);
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
                K = function() {
                    var e = (0, i.default)(u.default.mark((function e(a) {
                        var t, i, s, o, d, p, m, _, f, k, S, h, C;
                        return u.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, s = a.catalogWid, o = a.productIds, d = a.width, p = a.height, m = a.directConnectionEncryptedInfo, e.next = 4, (0, c.fetchQuery)(void 0 !== n ? n : n = l(90717), {
                                        request: {
                                            product_list: {
                                                jid: s.toString(),
                                                products: o.map((function(e) {
                                                    return {
                                                        id: e
                                                    }
                                                })),
                                                width: String(d),
                                                height: String(p),
                                                direct_connection_encrypted_info: m,
                                                locale: (0, c.getLocaleVariable)()
                                            }
                                        }
                                    }, {
                                        eventLogger: (0, y.createCatalogEventLogger)(y.GRAPHQL_CATALOG_ENDPOINT.GET_PRODUCT_LIST)
                                    });
                                case 4:
                                    return _ = e.sent, e.abrupt("return", (0, g.default)(null == _ || null === (t = _.xwa_product_catalog_get_product_list) || void 0 === t || null === (i = t.product_list) || void 0 === i ? void 0 : i.products.map(P.parseProductGraphQL), "data?.xwa_product_catalog_get_product_list?.product_list?.products.map(parseProductGraphQL)"));
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(0), S = null !== (f = null === (k = e.t0.source) || void 0 === k ? void 0 : k.errors) && void 0 !== f ? f : [], h = (0, r.default)(S, 1), C = h[0], e.t1 = null == C ? void 0 : C.code, e.next = 2498043 === e.t1 || 2498042 === e.t1 || 2498045 === e.t1 || 2498044 === e.t1 ? 14 : 2498046 === e.t1 ? 15 : 16;
                                    break;
                                case 14:
                                    throw new v.ServerStatusCodeError(400, e.t0.message);
                                case 15:
                                    throw new v.ServerStatusCodeError(421);
                                case 16:
                                    return __LOG__(3)`GraphQL: Failed fetching query xwa_product_catalog_get_product_list. Falling back to IQ.`, e.abrupt("return", F(a));
                                case 18:
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
                b = (0, _.defineWebPersistedJob)().finalStep("sendStanza", (function(e) {
                    return ((0, f.graphQLForCatalogM1Enabled)() ? K : F)(e)
                })).end();
            a.QueryProductListCatalog = b
        }
    }
]);