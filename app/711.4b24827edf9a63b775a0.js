/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [711], {
        727173: (e, a, l) => {
            "use strict";
            var n = l(307914);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.JobBuilder = void 0, a.definePersistedJob = function() {
                return new o([])
            };
            var t = n(l(46292)),
                r = n(l(889372)),
                i = n(l(605816)),
                u = l(606136),
                s = l(281098),
                o = function() {
                    function e(a) {
                        (0, r.default)(this, e), this.steps = a
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
                                r = c(l.requirements, l.code, n);
                            if (n) {
                                var i = n.timePassedSeconds,
                                    o = n.appCrashed,
                                    p = c(null, function(e) {
                                        return function(a, l, n) {
                                            return Promise.resolve(e(a, l, n)).then((function(e) {
                                                return e instanceof u.InterruptJob ? e : new u.InterruptJob(e)
                                            }))
                                        }
                                    }(n.onStopRetry), n);
                                null != i && (r = d((function(e, a, l) {
                                    var n = l.jobStartTime;
                                    return (0, s.happenedWithin)(n, i)
                                }), r, p)), o && (r = d((function(e, a, l) {
                                    return !l.afterCrash
                                }), r, p))
                            }
                            return new e([].concat((0, t.default)(this.steps), [{
                                stepName: a,
                                info: r
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
                return function(n, t, r) {
                    return e(n, t, r) ? a(n, t, r) : l(n, t, r)
                }
            }

            function c(e, a, l) {
                var n = {
                    requirements: e,
                    code: a,
                    stopRetryIf: l
                };
                return function() {
                    return n
                }
            }
            a.JobBuilder = o
        },
        910711: (e, a, l) => {
            "use strict";
            var n = l(595318);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.QueryProductListCatalog = void 0;
            var t, r = n(l(887757)),
                i = n(l(348926)),
                u = l(115066),
                s = n(l(347999)),
                o = l(985044),
                d = l(780561),
                c = l(104010),
                p = l(777603),
                g = l(894995),
                y = l(98932),
                f = l(27717),
                _ = l(908112),
                m = l(336782),
                k = l(417436),
                h = n(l(33937)),
                S = l(103176),
                P = l(742351),
                v = l(95422),
                b = n(l(45593)),
                F = new d.WapParser("productListResponse", (function(e) {
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
                            }) : l.push((0, p.parseProductNode)(e))
                        }
                    })), l
                })),
                K = function() {
                    var e = (0, i.default)(r.default.mark((function e(a) {
                        var l, n, t, i, s, d, p;
                        return r.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return l = a.catalogWid, n = a.productIds, t = a.width, i = a.height, s = a.directConnectionEncryptedInfo, d = (0, o.wap)("iq", {
                                        to: o.S_WHATSAPP_NET,
                                        type: "get",
                                        smax_id: "21",
                                        xmlns: "w:biz:catalog",
                                        id: (0, o.generateId)()
                                    }, (0, o.wap)("product_list", {
                                        jid: (0, _.USER_JID)((0, v.createWid)(l))
                                    }, n.map((function(e) {
                                        return (0, o.wap)("product", null, (0, o.wap)("id", null, e))
                                    })).concat((0, b.default)([(0, o.wap)("width", null, t.toString()), (0, o.wap)("height", null, i.toString()), s ? (0, o.wap)("direct_connection_encrypted_info", null, s) : null])))), e.next = 4, (0, u.deprecatedSendIq)(d, F);
                                case 4:
                                    if ((p = e.sent).success) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new c.ServerStatusCodeError(p.errorCode);
                                case 9:
                                    return e.abrupt("return", p.result);
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
                    var e = (0, i.default)(r.default.mark((function e(a) {
                        var n, i, u, o, d, c, p, g;
                        return r.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, u = a.catalogWid, o = a.productIds, d = a.width, c = a.height, p = a.directConnectionEncryptedInfo, e.next = 4, (0, P.fetchQuery)(void 0 !== t ? t : t = l(647267), {
                                        request: {
                                            product_list: {
                                                jid: u.toString(),
                                                products: o.map((function(e) {
                                                    return {
                                                        id: e
                                                    }
                                                })),
                                                width: String(d),
                                                height: String(c),
                                                direct_connection_encrypted_info: p
                                            }
                                        }
                                    }, {
                                        eventLogger: (0, f.createCatalogEventLogger)(f.GRAPHQL_CATALOG_ENDPOINT.GET_PRODUCT_LIST)
                                    });
                                case 4:
                                    return g = e.sent, e.abrupt("return", (0, s.default)(null == g || null === (n = g.xwa_product_catalog_get_product_list) || void 0 === n || null === (i = n.product_list) || void 0 === i ? void 0 : i.products.map(y.parseProductGraphQL), "data?.xwa_product_catalog_get_product_list?.product_list?.products.map(parseProductGraphQL)"));
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), e.t0 instanceof k.GraphQLServerError && (0, h.default)(e.t0), __LOG__(3)`GraphQL: Failed fetching xwa_product_catalog_get_product_list query. Falling back to IQ.`, e.abrupt("return", K(a));
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
                L = (0, m.defineWebPersistedJob)().finalStep("sendStanza", (function(e) {
                    return ((0, g.graphQLForCatalogM1Enabled)() ? C : K)(e)
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