/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [5943], {
        329127: (e, t, n) => {
            var o = {
                "./af.json": [788789, 8288],
                "./ar.json": [758854, 8801],
                "./az.json": [248758, 1967],
                "./bg.json": [60624, 1234],
                "./bn.json": [393511, 677],
                "./ca.json": [498922, 4451],
                "./cs.json": [740097, 3539],
                "./da.json": [536117, 9626],
                "./de.json": [203313, 88],
                "./el.json": [824689, 3004],
                "./en.json": [790084, 7494],
                "./es.json": [996598, 4739],
                "./et.json": [857633, 9599],
                "./fa.json": [341076, 4853],
                "./fi.json": [551701, 9789],
                "./fil.json": [146387, 3565],
                "./fr.json": [512785, 7334],
                "./gu.json": [450387, 1244],
                "./he.json": [190626, 2422],
                "./hi.json": [727605, 8606],
                "./hr.json": [454047, 3853],
                "./hu.json": [792922, 1389],
                "./id.json": [975608, 4132],
                "./it.json": [554800, 5881],
                "./ja.json": [366189, 5608],
                "./kk.json": [247681, 4260],
                "./kn.json": [678930, 6700],
                "./ko.json": [728076, 7020],
                "./lt.json": [337885, 4169],
                "./lv.json": [622798, 7938],
                "./mk.json": [579265, 1592],
                "./ml.json": [607208, 4794],
                "./mr.json": [830163, 2771],
                "./ms.json": [13390, 9911],
                "./nb.json": [549057, 4046],
                "./nl.json": [223129, 7055],
                "./pa.json": [466384, 6032],
                "./pl.json": [775495, 9566],
                "./pt.json": [508897, 1992],
                "./ro.json": [864267, 8945],
                "./ru.json": [534813, 887],
                "./sk.json": [575785, 7163],
                "./sl.json": [665608, 7626],
                "./sq.json": [455915, 6098],
                "./sr.json": [895742, 2967],
                "./sv.json": [281244, 4768],
                "./sw.json": [178923, 6606],
                "./ta.json": [217574, 3721],
                "./te.json": [896564, 4771],
                "./th.json": [338728, 5955],
                "./tr.json": [938704, 8962],
                "./uk.json": [495304, 5282],
                "./ur.json": [727814, 2619],
                "./uz.json": [518192, 7654],
                "./vi.json": [822521, 5315],
                "./zh-CN.json": [859978, 4680],
                "./zh-HK.json": [217133, 7920],
                "./zh-TW.json": [937439, 3421]
            };

            function a(e) {
                if (!n.o(o, e)) return Promise.resolve().then((() => {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = o[e],
                    a = t[0];
                return n.e(t[1]).then((() => n.t(a, 3)))
            }
            a.keys = () => Object.keys(o), a.id = 329127, e.exports = a
        },
        548218: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.verifyPostcode = function(e, t) {
                return a.default.verifyAndSavePostcode(e, t)
            };
            var a = o(n(619567))
        },
        497311: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.COUNTRY_FILTER_TYPE = void 0, t.bubbleCountryOnListOfCountries = _, t.formatCountriesOfOrigin = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = v(e, !0);
                if ("" === t) return n;
                return _(n, t)
            }, t.getCountries = function() {
                return x.apply(this, arguments)
            }, t.getCountryName = function() {
                return m.apply(this, arguments)
            }, t.unshiftNotApplicableToListOfCountries = v;
            var a, i = o(n(887757)),
                r = o(n(963038)),
                l = o(n(319)),
                c = o(n(348926)),
                d = o(n(859713)),
                s = o(n(758927)),
                u = n(89478),
                f = n(972703),
                p = n(548360),
                h = (o(n(156720)), Object.freeze({
                    META_RECOGNIZED: "META_RECOGNIZED",
                    WHATSAPP_REGISTRATION: "WHATSAPP_REGISTRATION"
                }));
            t.COUNTRY_FILTER_TYPE = h;
            var g = (a = {}, (0, d.default)(a, h.META_RECOGNIZED, ["AC", "CP", "DG", "EA", "EU", "EZ", "IC", "QO", "TA", "UN", "XA", "XB"]), (0, d.default)(a, h.WHATSAPP_REGISTRATION, ["AQ", "BV", "CP", "DG", "EA", "EH", "EU", "EZ", "GS", "HM", "IC", "PN", "QO", "TA", "TF", "UM", "UN", "XA", "XB", "ZZ"]), a),
                C = {
                    countrySeparator: {
                        borderBottom: "bajl15op"
                    }
                };

            function m() {
                return (m = (0, c.default)(i.default.mark((function e(t, n) {
                    var o;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t && !g[n].includes(t.toUpperCase())) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", void 0);
                            case 2:
                                return e.next = 4, b(s.default.getLocale());
                            case 4:
                                return o = e.sent, e.abrupt("return", o[t.toUpperCase()]);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function v(e, t) {
                var n = (0, l.default)(e);
                return n.unshift([String(f.SyntheticCountryCode.NotApplicable), p.fbt._("Not Applicable", null, {
                    hk: "2k1klN"
                }), p.fbt._("Item is a service or non-physical good", null, {
                    hk: "3uDBY7"
                })].concat((0, l.default)(!0 === t ? [C.countrySeparator] : []))), n
            }

            function _(e, t, n) {
                var o = e.findIndex((function(e) {
                        return (0, r.default)(e, 1)[0] === t
                    })),
                    a = (0, l.default)(e[o]),
                    i = a[0],
                    c = a[1],
                    d = (0, l.default)(e);
                return d.splice(o, 1), d.unshift([i, c, null].concat((0, l.default)(n ? [C.countrySeparator] : []))), d
            }

            function x() {
                return (x = (0, c.default)(i.default.mark((function e(t) {
                    var n, o;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, b(s.default.getLocale());
                            case 2:
                                return n = e.sent, o = Object.keys(n).filter((function(e) {
                                    return !e.includes("@") && !g[t.filter].includes(e)
                                })).map((function(e) {
                                    return [e, n[e]]
                                })).sort((function(e, t) {
                                    var n = (0, r.default)(e, 2)[1],
                                        o = (0, r.default)(t, 2)[1];
                                    return String(n).localeCompare(String(o))
                                })), e.abrupt("return", o);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function b() {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = (0, c.default)(i.default.mark((function e(t) {
                    var o, a, r;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n.e(5211).then(n.t.bind(n, 401820, 19));
                            case 2:
                                return o = e.sent, a = o.default.includes(t) ? t : u.DEFAULT_LOCALE, e.next = 6, n(329127)(`./${a}.json`);
                            case 6:
                                return r = e.sent, e.abrupt("return", r.default);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        375415: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.uploadBizCoverPhoto = function() {
                return u.apply(this, arguments)
            };
            var a = o(n(887757)),
                i = o(n(348926)),
                r = n(264402),
                l = n(386046),
                c = n(14677),
                d = o(n(742389)),
                s = o(n(229677));

            function u() {
                return (u = (0, i.default)(a.default.mark((function e(t, n, o) {
                    var i, u, f, p, h;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, r.blobToArrayBuffer)(t);
                            case 2:
                                return i = e.sent, e.next = 5, d.default.uploadCoverPhoto({
                                    file: i,
                                    hash: n,
                                    signal: o,
                                    type: c.MEDIA_TYPES.BIZ_COVER_PHOTO,
                                    uploadOrigin: s.default.UPLOAD_ORIGIN_TYPE.UNKNOWN,
                                    isViewOnce: !1
                                });
                            case 5:
                                if (u = e.sent, f = u.fbid, p = u.ts, h = u.metaHmac, null == f || null == p || null == h) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", {
                                    id: f,
                                    ts: p,
                                    metaHmac: h
                                });
                            case 9:
                                throw new l.HttpInvalidResponseError("mmsUpload: missing fields in upload response");
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        79760: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createCatalogLink = function(e) {
                return `https://wa.me/c/${e}`
            }, t.createProductLink = function(e, t) {
                return `https://wa.me/p/${t}/${e}`
            }
        },
        964724: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getGroupCountMetricsFromChatWid = function(e) {
                if (null != e && e.isGroup()) {
                    var t = function(e) {
                        if (e.isGroup()) return n(921491).default.get(e);
                        return null
                    }(e);
                    if (null != t) return (0, o.getGroupCountMetricsFromGroupMetadata)(t)
                }
            };
            var o = n(966808)
        },
        120092: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StickerDetailsStickerPackInfo = function(e) {
                var t, n = e.name,
                    o = e.publisher,
                    h = e.theme,
                    g = e.sticker;
                (0, c.isFavoriteStickersEnabled)() && null != g && (t = l.default.get(g.filehash) ? (0, u.jsx)(a.default, {
                    onClick: function() {
                        return (0, r.removeStickerFromFavorites)(g)
                    },
                    type: "secondary",
                    children: s.fbt._("Remove From Favorites", null, {
                        hk: "3YoUkP"
                    })
                }) : (0, u.jsx)(a.default, {
                    onClick: function() {
                        return (0, r.addStickerToFavorites)(g)
                    },
                    type: "secondary",
                    children: s.fbt._("Add to Favorites", null, {
                        hk: "3x4EBo"
                    })
                }));
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsxs)(d.TextDiv, {
                        theme: "plain",
                        xstyle: [f.container, h === p.StickerStore && f.stickerStore, h === p.MediaViewer && f.mediaViewer],
                        children: [n && (0, u.jsx)(i.EmojiText, {
                            xstyle: f.name,
                            text: n
                        }), n && o && (0, u.jsx)(i.EmojiText, {
                            text: " • "
                        }), o && (0, u.jsx)(i.EmojiText, {
                            text: o
                        })]
                    }), t]
                })
            }, t.Theme = void 0;
            var a = o(n(746251)),
                i = n(990055),
                r = n(907812),
                l = o(n(164396)),
                c = n(518005),
                d = n(558288),
                s = n(548360),
                u = (o(n(156720)), n(785893)),
                f = {
                    container: {
                        color: "hp667wtd",
                        fontSize: "f8jlpxt4",
                        lineHeight: "jgi8eev7",
                        textAlign: "qfejxiq4"
                    },
                    stickerStore: {
                        marginBottom: "e2xccmyv"
                    },
                    mediaViewer: {
                        marginBottom: "r2u2pyhj"
                    },
                    name: {
                        fontSize: "enbbiyaj",
                        lineHeight: "l85iiqla",
                        color: "tl2vja3b"
                    }
                },
                p = n(76672).Mirrored(["StickerStore", "MediaViewer"]);
            t.Theme = p
        },
        675998: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteCoverPhoto = function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, a.genId)(),
                    r = (0, l.deleteCoverPhoto)(t),
                    u = new a.ActionType(d.fbt._("Removing cover photo", null, {
                        hk: "1KJSi4"
                    })),
                    f = d.fbt._("Cover photo removal failed", null, {
                        hk: "lbogl"
                    }),
                    p = r.catch((function() {
                        throw __LOG__(3)`actions:deleteCoverPhoto dropped`, new a.ActionType(f)
                    })).catch((0, o.filteredCatch)(i.ServerStatusCodeError, (function(o) {
                        if (o.status >= 400) return new a.ActionType(f, {
                            actionText: d.fbt._("Try again", null, {
                                hk: "BVffp"
                            }),
                            actionHandler: function() {
                                return e(t, n)
                            }
                        })
                    }))).then((function() {
                        return new a.ActionType(d.fbt._("Cover photo removed", null, {
                            hk: "2jTL3n"
                        }))
                    }));
                return c.ToastManager.open((0, s.jsx)(a.ActionToast, {
                    id: n,
                    initialAction: u,
                    pendingAction: p
                })), r.then((function() {}))
            }, t.setCoverPhoto = function e(t, n, u) {
                var f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, a.genId)(),
                    p = new a.ActionType(d.fbt._("Setting cover photo", null, {
                        hk: "1W6Cm8"
                    })),
                    h = d.fbt._("Cover photo set failed", null, {
                        hk: "4jlUAI"
                    }),
                    g = (0, l.sendCoverPhoto)(t, n, u).catch((function() {
                        throw __LOG__(3)`action:setCoverPhoto dropped`, new a.ActionType(h)
                    })).catch((0, o.filteredCatch)(i.ServerStatusCodeError, (function(o) {
                        if (__LOG__(3)`action:setCoverPhoto server error`, o.status >= 400) return new a.ActionType(h, {
                            actionText: d.fbt._("Try again", null, {
                                hk: "BVffp"
                            }),
                            actionHandler: function() {
                                return e(t, n, u, f)
                            }
                        })
                    }))).then((function() {
                        var e;
                        return e = (0, r.coverPhotoPrivacyMessagingEnabled)() ? d.fbt._("Your cover photo is now public", null, {
                            hk: "zDyK5"
                        }) : d.fbt._("Cover photo set", null, {
                            hk: "zswp6"
                        }), new a.ActionType(e)
                    }));
                return c.ToastManager.open((0, s.jsx)(a.ActionToast, {
                    id: f,
                    initialAction: p,
                    pendingAction: g
                })), g.then((function() {}))
            };
            var o = n(63520),
                a = n(341480),
                i = n(104010),
                r = n(894995),
                l = n(201353),
                c = n(422210),
                d = n(548360),
                s = n(785893)
        },
        885952: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.verifyPostcode = void 0;
            var o = n(548218);
            t.verifyPostcode = function(e, t) {
                return (0, o.verifyPostcode)(e, t)
            }
        },
        915725: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return h.apply(this, arguments)
            };
            var a = o(n(887757)),
                i = o(n(348926)),
                r = n(63520),
                l = n(341480),
                c = n(104010),
                d = n(202908),
                s = n(957367),
                u = n(422210),
                f = n(548360),
                p = n(785893);

            function h() {
                return (h = (0, i.default)(a.default.mark((function e(t, n, o) {
                    var h, g, C;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return h = (0, s.sendUnlinkSubgroups)({
                                    parentGroupId: t,
                                    subgroupIds: n,
                                    removeOrphanMembers: o
                                }), g = (0, i.default)(a.default.mark((function e() {
                                    var t, o, i, r;
                                    return a.default.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, h;
                                            case 3:
                                                if (!((t = e.sent).failedGroups.length > 0)) {
                                                    e.next = 10;
                                                    break
                                                }
                                                if (o = t.failedGroups[0], !(530 === o.error)) {
                                                    e.next = 10;
                                                    break
                                                }
                                                return r = null === (i = d.ChatCollection.get(o.jid)) || void 0 === i ? void 0 : i.formattedTitle, e.abrupt("return", new l.ActionType(null != r ? f.fbt._('"{group-name}" was successfully removed, but not all of its participants were removed from the community.', [f.fbt._param("group-name", r)], {
                                                    hk: "3IpDes"
                                                }) : f.fbt._("The group was successfully removed, but not all of its participants were removed from the community.", null, {
                                                    hk: "1dNLoU"
                                                })));
                                            case 10:
                                                return e.abrupt("return", new l.ActionType(f.fbt._({
                                                    "*": "Groups unlinked",
                                                    _1: "Group unlinked"
                                                }, [f.fbt._plural(n.length)], {
                                                    hk: "1t0149"
                                                })));
                                            case 13:
                                                return e.prev = 13, e.t0 = e.catch(0), __LOG__(3, !0, void 0, !0)`Subgroup unlinking failed`, SEND_LOGS("subgroup-unlinking-failed"), e.abrupt("return", new l.ActionType(f.fbt._("Subgroup could not be unlinked. Please try again.", null, {
                                                    hk: "RMQfv"
                                                })));
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 13]
                                    ])
                                })))(), C = new l.ActionType(f.fbt._({
                                    "*": "Unlinking groups",
                                    _1: "Unlinking group"
                                }, [f.fbt._plural(n.length)], {
                                    hk: "7pwnQ"
                                })), u.ToastManager.open((0, p.jsx)(l.ActionToast, {
                                    initialAction: C,
                                    pendingAction: g
                                })), e.prev = 4, e.next = 7, h;
                            case 7:
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9, e.t0 = e.catch(4), (0, r.filteredCatch)(c.ServerStatusCodeError, (function() {}))(e.t0);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [4, 9]
                    ])
                })))).apply(this, arguments)
            }
        },
        720138: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, o = e.businessProfile,
                    O = e.contact,
                    A = e.editable,
                    L = e.profilePicThumb,
                    M = e.onClick,
                    R = e.onOpenStatus,
                    N = e.onLoad,
                    D = e.hideStatusV3,
                    B = (0, y.useState)(window.innerWidth),
                    H = (0, i.default)(B, 2),
                    F = H[0],
                    W = H[1],
                    z = (0, y.useState)(null),
                    V = (0, i.default)(z, 2),
                    U = V[0],
                    G = V[1],
                    q = (0, P.useModelValues)(o, ["coverPhoto"]),
                    Y = (0, E.default)();
                (0, y.useEffect)((function() {
                    function e() {
                        W(window.innerWidth)
                    }
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []);
                var K = F > 1300 ? 152 : 122,
                    Z = (0, m.isStatusV3ProfilePhotoRingEnabled)() || !(0, m.canSeeStatusV3OnContact)() || O.statusMute || D ? null : C.StatusV3Collection.get(O.id);

                function X() {
                    Z && (f.ModalManager.openMedia((0, I.jsx)(h.default, {
                        statusV3: Z,
                        onClose: function() {
                            return f.ModalManager.closeMedia()
                        }
                    }), {
                        transition: "status-v3-modal"
                    }), null == R || R())
                }
                var Q = null;
                U && (Q = (0, I.jsx)(x.UIE, {
                    displayName: "ContextMenu",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: function() {
                        G(null)
                    },
                    children: (0, I.jsx)(b.default, {
                        contextMenu: U
                    })
                }));
                var J, $ = null,
                    ee = S.default.noStatusBorder;
                if (null != Z) {
                    var te = !(0, m.isStatusV3ProfilePhotoRingEnabled)();
                    $ = (0, I.jsx)(v.StatusV3ImageRing, {
                        statusV3: Z,
                        size: K + 24,
                        stroke: 3,
                        theme: v.RingTheme.BusinessContactInfo,
                        respectAppTheme: !0,
                        breakRing: te
                    }), ee = S.default.hasStatusBorder
                }
                J = A && null != L ? (0, I.jsx)(j.default, {
                    profilePicThumb: L,
                    size: K
                }) : (0, I.jsx)(d.DetailImage, {
                    id: O.id,
                    size: K,
                    loader: !0,
                    onLoad: N,
                    onClick: function(e) {
                        if (M)
                            if (null != Z && Z.totalCount > 0) {
                                e.stopPropagation(), e.preventDefault();
                                var t = [(0, I.jsx)(s.DropdownItem, {
                                    testid: "mi-view-photo",
                                    action: function() {
                                        M(e)
                                    },
                                    children: u.default.t(632)
                                }, "view-photo"), (0, I.jsx)(s.DropdownItem, {
                                    testid: "mi-view-status",
                                    action: X,
                                    children: k.fbt._("View status", null, {
                                        hk: "1QQMZy"
                                    })
                                }, "view-status")];
                                G({
                                    menu: t,
                                    event: e
                                })
                            } else M(e)
                    },
                    quality: d.DetailImageQuality.High
                });
                var ne, oe, ae, ie = null === (t = q.coverPhoto) || void 0 === t ? void 0 : t.url.toString();
                if (null != A && (0, l.isBizCoverPhotoEditEnabled)()) {
                    ne = (0, I.jsx)(r.default, {
                        coverPhoto: null != q.coverPhoto ? q.coverPhoto : void 0,
                        signal: Y
                    });
                    var re = (0, I.jsx)(p.PencilIcon, {
                        directional: !0,
                        color: _.SvgColorProp.TEAL
                    });
                    oe = (0, I.jsx)("div", {
                        className: (0, T.default)(w),
                        "aria-hidden": !0,
                        children: (0, I.jsx)(g.Round, {
                            inverted: !0,
                            testid: "edit_cover_photo",
                            children: re
                        })
                    })
                }
                if (null == A && null != ie && (0, l.isBizCoverPhotoViewEnabled)()) {
                    var le = k.fbt._("Business cover photo image", null, {
                            hk: "10WGS4"
                        }),
                        ce = "" !== ie ? {
                            backgroundImage: `url(${ie})`
                        } : null;
                    ae = (0, I.jsx)("div", {
                        className: S.default.coverPhotoImage,
                        style: ce,
                        "data-testid": "cover-photo-img",
                        role: "img",
                        "aria-label": le
                    })
                }
                return (0, I.jsxs)(I.Fragment, {
                    children: [(0, I.jsxs)("div", {
                        className: (0, c.cx)((n = {}, (0, a.default)(n, S.default.isEditable, A), (0, a.default)(n, S.default.coverPhoto, !0), n)),
                        children: [ae, ne, oe]
                    }), (0, I.jsxs)("div", {
                        className: S.default.avatar,
                        children: [$, (0, I.jsx)("div", {
                            className: ee,
                            children: J
                        })]
                    }), Q]
                })
            };
            var a = o(n(859713)),
                i = o(n(963038)),
                r = o(n(832131)),
                l = n(894995),
                c = n(157405),
                d = n(207826),
                s = n(116384),
                u = o(n(758927)),
                f = n(628707),
                p = n(917318),
                h = o(n(404709)),
                g = n(659696),
                C = n(297186),
                m = n(681150),
                v = n(86814),
                _ = n(401304),
                x = n(776097),
                b = o(n(728056)),
                S = o(n(894358)),
                j = o(n(402325)),
                k = n(548360),
                y = n(667294),
                T = o(n(156720)),
                P = n(948752),
                E = o(n(788413)),
                I = n(785893),
                w = {
                    position: "lhggkp7q",
                    end: "i7sa5vq0",
                    bottom: "fcd3cnzj",
                    zIndex: "jnl3jror",
                    pointerEvents: "m62443ks"
                }
        },
        156836: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getProfilePopulatedFields = r, t.logEditCoverPhoto = function() {
                new i.default.EditBusinessProfile({
                    editProfileAction: i.default.EDIT_PROFILE_ACTION.ACTION_EDIT_COVER_PHOTO_CLICK,
                    businessProfileEntryPoint: i.default.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS
                }).commit()
            }, t.logProfileFieldDiscard = function(e, t, n) {
                new i.default.EditBusinessProfile((0, a.default)({
                    editProfileAction: i.default.EDIT_PROFILE_ACTION.ACTION_PROFILE_FIELD_DISCARD,
                    businessProfileEntryPoint: i.default.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
                    editProfileActionField: e,
                    editBusinessProfileSessionId: n
                }, r(t))).commit()
            }, t.logProfileFieldOpen = function(e, t, n) {
                new i.default.EditBusinessProfile((0, a.default)({
                    editProfileAction: i.default.EDIT_PROFILE_ACTION.ACTION_PROFILE_FIELD_OPEN,
                    businessProfileEntryPoint: i.default.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
                    editProfileActionField: e,
                    editBusinessProfileSessionId: n
                }, r(t))).commit()
            }, t.logProfileFieldSave = function(e, t, n) {
                new i.default.EditBusinessProfile((0, a.default)({
                    editProfileAction: i.default.EDIT_PROFILE_ACTION.ACTION_PROFILE_FIELD_SAVE,
                    businessProfileEntryPoint: i.default.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
                    editProfileActionField: e,
                    editBusinessProfileSessionId: n
                }, r(t))).commit()
            }, t.logProfileOpen = function(e, t) {
                var n;
                new i.default.EditBusinessProfile({
                    editProfileAction: i.default.EDIT_PROFILE_ACTION.ACTION_OPEN,
                    businessProfileEntryPoint: i.default.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
                    editBusinessProfileSessionId: t,
                    hasDescription: null != e.description,
                    hasCategory: !!(e.categories && e.categories.length > 0),
                    hasHours: null != (null === (n = e.businessHours) || void 0 === n ? void 0 : n.config),
                    hasEmail: null != e.email,
                    hasAddress: null != e.address,
                    hasWebsite: null != e.website
                }).commit()
            }, t.logRemoveCoverPhoto = function() {
                new i.default.EditBusinessProfile({
                    editProfileAction: i.default.EDIT_PROFILE_ACTION.ACTION_REMOVE_COVER_PHOTO,
                    businessProfileEntryPoint: i.default.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS
                }).commit()
            };
            var a = o(n(81109)),
                i = o(n(229677));

            function r(e) {
                var t;
                return {
                    hasDescription: null != e.description,
                    hasCategory: !!(e.categories && e.categories.length > 0),
                    hasHours: null != (null === (t = e.businessHours) || void 0 === t ? void 0 : t.config),
                    hasEmail: null != e.email,
                    hasAddress: null != e.address,
                    hasWebsite: null != e.website
                }
            }
        },
        78383: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, i.jsx)(a.ShoppingCartIcon, {
                    xstyle: [r.cartIcon, "inherit-color" === e.theme && r.inheritColor]
                })
            };
            var a = n(172253),
                i = (o(n(156720)), n(785893)),
                r = {
                    cartIcon: {
                        color: "svlsagor"
                    },
                    inheritColor: {
                        color: "gtscxtjd"
                    }
                }
        },
        53315: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CartIconMenuBarItem = void 0;
            var a = o(n(78383)),
                i = n(608064),
                r = n(199479),
                l = n(179677),
                c = n(445639),
                d = n(548360),
                s = n(667294),
                u = n(785893),
                f = (0, s.forwardRef)((function(e, t) {
                    var n = e.cartIconTheme,
                        o = e.onClick,
                        f = e.cartCountText,
                        p = e.testid,
                        h = void 0 === p ? "menu-bar-cart-link" : p,
                        g = e.catalogOwnerJid,
                        C = (0, s.useContext)(c.DrawerContext);
                    return (0, u.jsx)(r.MenuBarItem, {
                        ref: t,
                        testid: h,
                        icon: (0, u.jsx)(a.default, {
                            theme: n
                        }),
                        text: f,
                        title: d.fbt._("Your cart", null, {
                            hk: "Sn66V"
                        }),
                        onClick: (0, i.getOnCartClickWithLog)(o, g, (0, l.getProductCatalogContext)(C))
                    })
                }));
            t.CartIconMenuBarItem = f, f.displayName = "CartIconMenuBarItem"
        },
        390263: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.catalog,
                    n = e.onSend,
                    o = (0, a.createCatalogLink)(t.id.user),
                    d = t.id.equals((0, r.getMaybeMeUser)()) ? `${l.fbt._("Follow this link to view our catalog on WhatsApp:",null,{hk:"1bmMoC"}).toString()} ${o}` : o;
                return (0, c.jsx)(i.default, {
                    text: d,
                    onSend: n
                })
            };
            var a = n(79760),
                i = o(n(638396)),
                r = n(228277),
                l = n(548360),
                c = n(785893)
        },
        68968: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.product,
                    n = e.onSend,
                    o = (0, a.createProductLink)(t.catalogWid.user, t.id.toString()),
                    d = (0, r.isMeAccount)(t.catalogWid) ? `${l.fbt._("Follow this link to view our item on WhatsApp:",null,{hk:"H5KuN"}).toString()} ${o}` : o;
                return (0, c.jsx)(i.default, {
                    text: d,
                    onSend: n
                })
            };
            var a = n(79760),
                i = o(n(638396)),
                r = n(228277),
                l = n(548360),
                c = n(785893)
        },
        628580: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.labels,
                    o = e.theme;
                if (!n || !(0, i.canDisplayLabel)()) return null;
                var l = "standalone" === o;
                return (0, d.jsx)("div", {
                    className: (0, r.cx)((t = {}, (0, a.default)(t, c.default.standaloneLabelContainer, l), (0, a.default)(t, c.default.labelContainer, !0), t)),
                    children: n.map((function(e, t) {
                        return (0, d.jsx)(s, {
                            labelId: e,
                            isStandalone: l
                        }, t)
                    }))
                })
            };
            var a = o(n(859713)),
                i = n(894995),
                r = n(157405),
                l = n(160126),
                c = o(n(956685)),
                d = n(785893);

            function s(e) {
                var t, n = e.labelId,
                    o = e.isStandalone;
                return (0, d.jsx)("div", {
                    className: (0, r.cx)((t = {}, (0, a.default)(t, c.default.standaloneLabelRow, o), (0, a.default)(t, c.default.labelRow, !0), t)),
                    children: (0, d.jsx)(l.Labels, {
                        labels: [n],
                        showName: !0
                    })
                })
            }
        },
        545354: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.collection,
                    n = (0, x.useState)(!1),
                    o = (0, a.default)(n, 2),
                    S = o[0],
                    j = o[1],
                    k = (0, x.useState)(!1),
                    y = (0, a.default)(k, 2),
                    T = y[0],
                    P = y[1],
                    E = (0, x.useState)(""),
                    I = (0, a.default)(E, 2),
                    w = I[0],
                    O = I[1],
                    A = function() {
                        u.ModalManager.close()
                    };
                if (T) return (0, b.jsx)(v.ConfirmPopup, {
                    title: _.fbt._("Request review", null, {
                        hk: "1Rp2pL"
                    }),
                    onOK: A,
                    children: (0, b.jsx)(g.TextDiv, {
                        children: _.fbt._("We will review the collection and if it meets our guidelines, it will be added to your catalog.", null, {
                            hk: "y5vML"
                        })
                    })
                });
                var L = w.length < 1 || S;
                return (0, b.jsx)(v.ConfirmPopup, {
                    title: _.fbt._("Request review", null, {
                        hk: "1Rp2pL"
                    }),
                    onOK: function() {
                        j(!0);
                        var e = !0;
                        p.QPL.markerStart(f.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL), (0, s.handleCollectionAppeal)(t, w).then((function() {
                            j(!1), P(!0), e = !1, p.QPL.markerEnd(f.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, r.QuickLogActionType.SUCCESS)
                        })).catch((0, i.filteredCatch)(l.ServerStatusCodeError, (function() {
                            m.ToastManager.open((0, b.jsx)(C.Toast, {
                                msg: _.fbt._("Something went wrong and your request wasn't submitted. Try again.", null, {
                                    hk: "3sAwQH"
                                }),
                                id: (0, C.genId)("catalog_collection_appeal_submission_failed")
                            })), j(!1)
                        }))).finally((function() {
                            e && p.QPL.markerEnd(f.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, r.QuickLogActionType.FAIL)
                        }))
                    },
                    onCancel: A,
                    okDisabled: L,
                    children: (0, b.jsxs)("form", {
                        children: [(0, b.jsx)(h.RichTextField, {
                            legacyImplementation: !0,
                            testid: "confirm-popup-text-input",
                            placeholder: _.fbt._("Enter reason for this request...", null, {
                                hk: "3U5nE7"
                            }),
                            onChange: function(e) {
                                O(e)
                            },
                            value: w,
                            maxLength: 1e3
                        }), (0, b.jsx)(d.ExternalLink, {
                            href: c.default.WA_COMMERCE_POLICY_URL,
                            children: _.fbt._("Learn More", null, {
                                hk: "FZuUT"
                            })
                        })]
                    })
                })
            };
            var a = o(n(963038)),
                i = n(63520),
                r = n(742649),
                l = n(104010),
                c = o(n(442435)),
                d = n(192070),
                s = n(911558),
                u = n(628707),
                f = n(754360),
                p = n(324928),
                h = n(983557),
                g = n(558288),
                C = n(236539),
                m = n(422210),
                v = n(404186),
                _ = n(548360),
                x = n(667294),
                b = n(785893)
        },
        870473: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(628707),
                a = n(404186),
                i = n(548360),
                r = n(785893),
                l = function(e) {
                    o.ModalManager.open((0, r.jsx)(a.ConfirmPopup, {
                        okText: i.fbt._("OK", null, {
                            hk: "2KEeHb"
                        }),
                        onOK: function() {
                            return o.ModalManager.close()
                        },
                        children: e
                    }))
                };
            t.default = l
        },
        832131: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.coverPhoto,
                    n = e.signal,
                    o = (0, h.useState)(!1),
                    C = (0, a.default)(o, 2),
                    m = C[0],
                    v = C[1],
                    _ = (0, h.useState)(null == t ? void 0 : t.url),
                    x = (0, a.default)(_, 2),
                    b = x[0],
                    S = x[1];
                return (0, h.useEffect)((function() {
                    (null == b ? void 0 : b.pathname) !== (null == t ? void 0 : t.url.pathname) && S(null == t ? void 0 : t.url)
                }), [t, b]), (0, g.jsx)(f.PhotoPickerLoadable, {
                    type: p.default.COVER_PHOTO,
                    pending: m,
                    readOnly: !1,
                    onImageSet: function(e, o) {
                        if (v(!0), null != o) {
                            var a = (0, c.dataURLtoBlob)(o);
                            (0, l.calculateFilehashFromBlob)(a).then((function(e) {
                                (0, u.uploadBizCoverPhoto)(a, e, n).then((function(e) {
                                    n.aborted || ((0, r.setCoverPhoto)(e.id, e.ts, e.metaHmac), (0, d.logEditCoverPhoto)())
                                })).catch((0, i.filteredCatch)(s.HttpInvalidResponseError, (function() {
                                    __LOG__(3)`BizCoverPhotoPicker: failed to upload cover photo`
                                }))).catch((function() {
                                    __LOG__(4, void 0, new Error, !0)`BizCoverPhotoPicker: unexpected error uploading cover photo`, SEND_LOGS("biz_cover_photo_upload")
                                })).finally((function() {
                                    v(!1)
                                }))
                            }))
                        } else(null == t ? void 0 : t.id) && (0, r.deleteCoverPhoto)(t.id).finally((function() {
                            v(!1), (0, d.logRemoveCoverPhoto)()
                        }))
                    },
                    attachToChat: !1,
                    startImage: null == b ? void 0 : b.toString(),
                    theme: "coverPhoto"
                })
            };
            var a = o(n(963038)),
                i = n(63520),
                r = n(675998),
                l = n(566282),
                c = n(616482),
                d = n(156836),
                s = n(386046),
                u = n(375415),
                f = n(639017),
                p = o(n(295850)),
                h = n(667294),
                g = n(785893)
        },
        692364: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, c.jsx)(i.DrawerButton, {
                    testid: "li-share-link",
                    icon: (0, c.jsx)(a.ForwardIcon, {
                        className: (0, l.default)(d)
                    }),
                    onClick: e.onClick,
                    children: r.fbt._("Send product", null, {
                        hk: "1wkzue"
                    })
                })
            };
            var a = n(720135),
                i = n(455316),
                r = n(548360),
                l = o(n(156720)),
                c = n(785893),
                d = {
                    color: "rahkaw8d"
                }
        },
        131730: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onOpenCollections,
                    n = (0, d.useState)(!1),
                    o = (0, a.default)(n, 2),
                    f = o[0],
                    p = o[1],
                    h = i.CatalogCollection.get((0, c.getMeUser)());
                return (0, s.useListener)(null == h ? void 0 : h.collections, "change", (function() {
                    p(!0)
                })), f && (0, u.jsx)(r.default, {
                    children: (0, u.jsx)(l.default, {
                        onClick: t
                    })
                })
            };
            var a = o(n(963038)),
                i = n(218953),
                r = o(n(271200)),
                l = o(n(130113)),
                c = n(228277),
                d = n(667294),
                s = n(779740),
                u = n(785893)
        },
        84358: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = new d.CoolOffNux(C, v, {
                    COOL_OFF_START_STORAGE_KEY: c.CoolOffPeriodKeys.CATALOG,
                    MAX_VIEWS_IN_DAYS: 1,
                    COOL_OFF_DURATION_IN_DAYS: 1
                });
                if (e.shouldShow()) {
                    var t = (0, g.jsx)(f.ConfirmPopup, {
                        onOK: function() {
                            e.dismiss(), l.ModalManager.close()
                        },
                        children: (0, g.jsxs)(i.FlexColumn, {
                            align: "center",
                            children: [(0, g.jsx)(r.default, {
                                xstyle: m.graphic,
                                children: (0, g.jsx)(a.CartInterstitialGraphicIcon, {})
                            }), (0, g.jsx)(s.TextHeader, {
                                theme: "popupTitle",
                                children: p.fbt._("New: Add to Cart", null, {
                                    hk: "34ysyY"
                                })
                            }), (0, g.jsx)(s.TextParagraph, {
                                color: "secondary",
                                className: (0, h.default)(m.description),
                                children: p.fbt._("Simpler for you to keep track of order inquiries, manage requests, and close sales.", null, {
                                    hk: "25ZM2y"
                                })
                            })]
                        })
                    });
                    l.ModalManager.open(t), e.show(), e.startCoolOffToday()
                }
            };
            var a = n(965293),
                i = n(208188),
                r = o(n(644178)),
                l = n(628707),
                c = n(171738),
                d = n(833674),
                s = n(558288),
                u = o(n(229677)),
                f = n(404186),
                p = n(548360),
                h = o(n(156720)),
                g = n(785893),
                C = c.NuxKeyTypes.COOL_OFF_NUX.CART_INTERSTITIAL,
                m = {
                    graphic: {
                        marginTop: "nylzjxre",
                        marginEnd: "lfum0007",
                        marginBottom: "bvhm1occ",
                        marginStart: "r6x3u63k",
                        color: "bc38n4nm"
                    },
                    description: {
                        marginTop: "opp68qpq",
                        textAlign: "qfejxiq4"
                    }
                },
                v = u.default.BANNER_TYPES.SMB_CATALOG_CART_INTERSTITIAL
        },
        130113: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = o(n(334575)),
                i = o(n(993913)),
                r = o(n(502205)),
                l = o(n(199842)),
                c = n(519509),
                d = n(218953),
                s = n(500204),
                u = o(n(441158)),
                f = n(171738),
                p = n(923992),
                h = n(833674),
                g = n(228277),
                C = o(n(229677)),
                m = n(548360),
                v = n(667294),
                _ = o(n(156720)),
                x = n(785893),
                b = {
                    color: "o0rubyzf"
                },
                S = f.NuxKeyTypes.COOL_OFF_NUX.COLLECTIONS,
                j = {
                    COOL_OFF_DURATION_IN_DAYS: 2,
                    VIEWS_BEFORE_COOL_OFF_IN_DAYS: 1,
                    CLICKS_BEFORE_COOL_OFF: 1,
                    MAX_VIEWS_IN_DAYS: 2,
                    COOL_OFF_START_STORAGE_KEY: f.CoolOffPeriodKeys.CATALOG
                };
            var k = function(e) {
                (0, r.default)(n, e);
                var t = (0, l.default)(n);

                function n() {
                    var e;
                    (0, a.default)(this, n);
                    for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++) i[r] = arguments[r];
                    return (e = t.call.apply(t, [this].concat(i)))._refContainer = (0, v.createRef)(), e.getElement = function() {
                        return e._refContainer.current
                    }, e
                }
                return (0, i.default)(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props.onClick,
                            t = new h.CoolOffNux(S, C.default.BANNER_TYPES.SMB_COLLECTION_CREATION, j),
                            n = (0, x.jsx)("span", {
                                className: (0, _.default)(b),
                                children: m.fbt._("Get started", null, {
                                    hk: "m7Zf5"
                                })
                            });
                        return (0, x.jsx)(u.default, {
                            ref: this._refContainer,
                            title: m.fbt._("Create new collection", null, {
                                hk: "19zBCQ"
                            }),
                            subtitle: m.fbt._("Group items into collections to stay organized.", null, {
                                hk: "1sDPK6"
                            }),
                            actionText: n,
                            onClick: e,
                            nuxManager: t,
                            theme: "nuxBlue"
                        })
                    }
                }], [{
                    key: "shouldShow",
                    value: function() {
                        return (0, c.getABPropConfigValue)("web_abprop_collections_nux_banner") && s.Conn.isSMB && function() {
                            var e = d.CatalogCollection.get((0, g.getMeUser)());
                            if (null == e || null == e.collections) return !1;
                            var t = e.collections.getCollectionModels(!0);
                            return e.productCollection.getProductModels(!0).some((function(e) {
                                return !e.isHidden && "REJECTED" !== e.reviewStatus
                            })) && 0 === t.length
                        }() && (0, h.shouldShowNUX)(S, j)
                    }
                }]), n
            }(p.NuxBanner);
            t.default = k, k.displayName = "CollectionsBanner"
        },
        679729: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getCatalogDrawerMenu = function(e) {
                var t = e.onCartClick,
                    n = e.cartCount,
                    o = e.catalogId,
                    i = e.canManageCatalog,
                    l = e.onSendCatalog,
                    c = e.onOpenCollections,
                    d = e.onOpenMerchantDetailsForm,
                    s = e.onOpenSettings,
                    u = e.cartIconTheme;
                return [t && null != o ? (0, C.jsx)(r.CartIconMenuBarItem, {
                    cartCountText: (0, a.isNumber)(n) && n > 0 ? n.toString() : void 0,
                    onClick: t,
                    catalogOwnerJid: o,
                    cartIconTheme: u
                }) : null, (0, C.jsx)(m, {
                    canManageCatalog: i,
                    onSendCatalog: l,
                    onOpenCollections: c,
                    onOpenMerchantDetailsForm: d,
                    onOpenSettings: s
                })]
            };
            var a = n(689121),
                i = n(894995),
                r = n(53315),
                l = n(482510),
                c = n(116384),
                d = o(n(758927)),
                s = n(199479),
                u = n(994291),
                f = o(n(319913)),
                p = n(228277),
                h = n(548360),
                g = n(667294),
                C = n(785893),
                m = (0, g.forwardRef)((function(e, t) {
                    var n = e.canManageCatalog,
                        o = e.onSendCatalog,
                        a = e.onOpenCollections,
                        r = e.onOpenMerchantDetailsForm,
                        g = e.onOpenSettings;
                    return n ? (0, C.jsx)(s.MenuBarItem, {
                        ref: t,
                        testid: "menu-bar-menu",
                        icon: (0, C.jsx)(u.MenuIcon, {}),
                        title: d.default.t(430),
                        children: (0, C.jsxs)(l.Dropdown, {
                            type: l.MenuType.DropdownMenu,
                            flipOnRTL: !0,
                            dirX: l.DirX.LEFT,
                            children: [(0, C.jsx)(c.DropdownItem, {
                                testid: "mi-foward menu-item",
                                action: o,
                                children: d.default.t(311)
                            }), a && (0, C.jsx)(c.DropdownItem, {
                                testid: "mi-collections menu-item",
                                action: a,
                                children: h.fbt._("Collections", null, {
                                    hk: "1VWu7A"
                                })
                            }), (0, i.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney)((0, p.getMeUser)()) && r && (0, C.jsx)(c.DropdownItem, {
                                testid: "merchant-details",
                                action: r,
                                children: h.fbt._("Business details", null, {
                                    hk: "m9xzp"
                                })
                            }, "merchantDetails"), (0, i.canToggleCartOnOff)() && g && (0, C.jsx)(c.DropdownItem, {
                                testid: "mi-settings menu-item",
                                action: g,
                                children: h.fbt._("Settings", null, {
                                    hk: "2RmHUB"
                                })
                            })]
                        }, "CatalogDetailHeader")
                    }) : (0, C.jsx)(s.MenuBarItem, {
                        ref: t,
                        testid: "menu-bar-catalog-link",
                        icon: (0, C.jsx)(f.default, {}),
                        title: h.fbt._("Catalog link", null, {
                            hk: "M36Dw"
                        }),
                        onClick: o
                    })
                }));
            m.displayName = "MenuItems"
        },
        597738: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onProductCatalog,
                    n = e.title,
                    o = e.subtitle,
                    a = e.animation,
                    i = e.sectionTheme,
                    l = void 0 === i ? "padding" : i,
                    s = e.shouldLog,
                    p = e.catalog,
                    h = e.onProductDetail,
                    C = e.filterProductId,
                    b = e.productsToShow,
                    P = void 0 === b ? 6 : b,
                    E = e.hideIncompleteRows,
                    I = void 0 !== E && E,
                    w = e.showProductPlaceholders,
                    O = e.seeMoreOverlay,
                    A = e.catalogEntryLabel,
                    L = e.showShopsLogo,
                    M = (0, x.useContext)(m.DrawerContext);
                (0, x.useEffect)((function() {
                    s && null != p && (0, f.logBusinessProfileCatalogView)({
                        catalogOwnerWid: p.id,
                        catalogContext: (0, u.getProductCatalogContext)(M)
                    })
                }), []);
                var R = (0, S.jsx)(k, {
                        catalogEntryLabel: A,
                        onClick: function() {
                            return t((0, u.getProductCatalogContext)(M), "ContactInfo")
                        }
                    }),
                    N = (0, S.jsx)(T, {
                        productsToShow: P,
                        catalog: p,
                        hideIncompleteRows: I,
                        filterProductId: C,
                        seeMoreOverlay: O,
                        showProductPlaceholders: w,
                        onProductThumbClick: function(e, n) {
                            return e ? t((0, u.getProductCatalogContext)(M), "ContactInfo") : function(e) {
                                s && (0, f.logProfileProductClick)({
                                    product: (0, g.unproxy)(e),
                                    catalogContext: (0, u.getProductCatalogContext)(M)
                                }), h(e)
                            }(n)
                        },
                        onProductImageClick: function() {
                            return t((0, u.getProductCatalogContext)(M), "ContactInfo")
                        }
                    }),
                    D = o ? (0, S.jsx)(d.default, {
                        xstyle: j.subtitle,
                        children: o
                    }) : null,
                    B = (0, S.jsxs)(c.FlexRow, {
                        align: "center",
                        children: [D, (0, S.jsx)(d.default, {
                            children: (0, S.jsx)(r.ChevronRightAltIcon, {
                                xstyle: j.chevron,
                                directional: !0
                            })
                        })]
                    });
                return (0, S.jsxs)(v.default, {
                    title: n || _.fbt._("Products", null, {
                        hk: "3Ky71N"
                    }),
                    titleOnClick: function() {
                        return t((0, u.getProductCatalogContext)(M), "ContactInfo")
                    },
                    subtitle: B,
                    theme: l,
                    animation: a,
                    children: [N, R, !0 === L ? (0, S.jsx)(y, {}) : null]
                })
            };
            var a = n(894995),
                i = o(n(746251)),
                r = n(519896),
                l = n(299297),
                c = n(208188),
                d = o(n(644178)),
                s = n(507759),
                u = n(179677),
                f = n(647435),
                p = n(604785),
                h = n(926464),
                g = n(378776),
                C = o(n(83938)),
                m = n(445639),
                v = o(n(849788)),
                _ = n(548360),
                x = n(667294),
                b = o(n(156720)),
                S = n(785893),
                j = {
                    addIcon: {
                        position: "g0rxnol2",
                        width: "d0st09ow",
                        height: "bbl9m3t3",
                        paddingBottom: "aus7m8kn",
                        marginTop: "tt8xd2xn",
                        marginEnd: "bugiwsl0",
                        marginBottom: "or9x5nie",
                        marginStart: "svoq16ka",
                        borderTop: "rom324v9",
                        borderEnd: "na7ur5ty",
                        borderBottom: "gjeyj30g",
                        borderStart: "bmro6pka",
                        borderTopStartRadius: "l147y7tb",
                        borderTopEndRadius: "mjscftrx",
                        borderBottomEndRadius: "fqwk616h",
                        borderBottomStartRadius: "pkud3j3x",
                        ":before": {
                            position: "oxaw94s0",
                            top: "ijeufx4s",
                            left: "a9fxutt7",
                            display: "oa3lyrek",
                            width: "slvs4faj",
                            height: "jaq0b63r",
                            content: "lij4d1x3",
                            background: "nkmjymgc",
                            transform: "k95pjfv1"
                        },
                        ":after": {
                            position: "dkvli2l0",
                            top: "qi2a0yje",
                            left: "harwy2hg",
                            display: "b0f5vxaq",
                            width: "qbfuvgfc",
                            height: "i0r7mfoh",
                            content: "k15o3o4i",
                            background: "fji5f4ri",
                            transform: "cai600lj"
                        }
                    },
                    largeGallerySpacing: {
                        width: "b8z6cu80",
                        height: "bbl9m3t3",
                        marginEnd: "jnwc1y2a",
                        marginBottom: "qrsyb3yy"
                    },
                    placeholderThumb: {
                        width: "d0st09ow",
                        height: "fujac5jc",
                        paddingBottom: "lxvt2vq0",
                        marginTop: "tt8xd2xn",
                        marginEnd: "bugiwsl0",
                        marginBottom: "or9x5nie",
                        marginStart: "svoq16ka",
                        backgroundColor: "o27ac25e",
                        borderTopStartRadius: "l147y7tb",
                        borderTopEndRadius: "mjscftrx",
                        borderBottomEndRadius: "fqwk616h",
                        borderBottomStartRadius: "pkud3j3x"
                    },
                    subtitle: {
                        marginTop: "tt8xd2xn",
                        marginEnd: "q471nw87",
                        marginBottom: "mpdn4nr2",
                        marginStart: "svoq16ka",
                        fontSize: "f8jlpxt4",
                        color: "sbs3osm6"
                    },
                    catalogEntryButton: {
                        marginTop: "iin4x6c7",
                        marginEnd: "jnwc1y2a",
                        marginBottom: "mpdn4nr2",
                        marginStart: "svoq16ka",
                        textAlign: "qfejxiq4"
                    },
                    shopsLogo: {
                        marginTop: "qt60bha0",
                        textAlign: "qfejxiq4"
                    },
                    chevron: {
                        color: "cs9t9or5"
                    }
                };

            function k(e) {
                var t = e.catalogEntryLabel,
                    n = e.onClick;
                return null == t ? null : (0, S.jsx)("div", {
                    className: (0, b.default)(j.catalogEntryButton),
                    children: (0, S.jsx)(i.default, {
                        testid: "catalog-entry-button",
                        type: "secondary",
                        onClick: n,
                        children: t
                    })
                })
            }

            function y() {
                return (0, S.jsx)("div", {
                    className: (0, b.default)(j.shopsLogo),
                    children: (0, S.jsx)(l.FbshopsIcon, {
                        displayInline: !0
                    })
                })
            }

            function T(e) {
                var t, n, o = e.productsToShow,
                    i = e.catalog,
                    r = e.hideIncompleteRows,
                    l = e.filterProductId,
                    c = e.seeMoreOverlay,
                    d = e.showProductPlaceholders,
                    u = e.onProductThumbClick,
                    f = e.onProductImageClick,
                    g = [],
                    m = o;
                if ((0, a.canSeeBizProfileV3)() && (n = "largeGallerySpacing"), null != i) {
                    t = i.productCollection;
                    var v = i.productCollection.getProductModels();
                    r && g.length > 3 && (m = Math.min(o, v.length - g.length % 3)), g = v.slice(0, m + 1).filter((function(e) {
                        return e.id.toString() !== l
                    })).map((function(e, t) {
                        var o, a, r = null === (o = e.getPreviewImage()) || void 0 === o ? void 0 : o.mediaData;
                        return r ? (c && t === m - 1 && i.productCollection.length > m - 1 && (a = _.fbt._("See more", null, {
                            hk: "450jnd"
                        })), (0, S.jsx)(p.ProductThumb, {
                            onClick: function() {
                                return u(null != a, e)
                            },
                            mediaData: r,
                            overlayContent: a,
                            theme: n
                        }, e.id.toString())) : (0, S.jsx)(S.Fragment, {})
                    })).slice(0, m)
                } else(t = new h.ProductCollection).add({
                    id: "_ph"
                });
                if (!g.length && !d) return null;
                for (var x, b = j.addIcon; d && g.length < m;) g.push((0, S.jsx)(C.default, {
                    onClick: f,
                    title: _.fbt._("Add product", null, {
                        hk: "3gdovw"
                    }),
                    xstyle: [b, "largeGallerySpacing" === n && j.largeGallerySpacing],
                    children: (0, S.jsx)(S.Fragment, {})
                }, `_ph${g.length}`)), b = j.placeholderThumb;
                return (0, a.canSeeBizProfileV3)() && (x = "space-between"), (0, S.jsx)(s.MediaGalleryView, {
                    productMedias: g,
                    mediaCollection: t,
                    justify: x
                })
            }
        },
        970468: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = o(n(390263)),
                i = n(79760),
                r = o(n(799328)),
                l = n(207826),
                c = n(628707),
                d = n(246009),
                s = n(179677),
                u = o(n(16499)),
                f = n(647435),
                p = o(n(981094)),
                h = o(n(829723)),
                g = o(n(544978)),
                C = n(445639),
                m = n(952991),
                v = o(n(863358)),
                _ = n(548360),
                x = n(667294),
                b = o(n(156720)),
                S = n(785893),
                j = {
                    paddingTop: "i5tg98hk",
                    paddingEnd: "iffbo4e8",
                    paddingBottom: "aiput80m",
                    paddingStart: "khscay3k",
                    lineHeight: "qg52vu03"
                },
                k = "catalog-link-anchor";

            function y(e, t) {
                var n, o, y = e.onBack,
                    T = e.onCancel,
                    P = e.catalog,
                    E = e.contact,
                    I = e.prompt,
                    w = e.centerDrawer,
                    O = e.onSend,
                    A = (0, x.useContext)(C.DrawerContext),
                    L = function() {
                        c.ModalManager.open((0, S.jsx)(a.default, {
                            catalog: P,
                            onSend: O
                        }), {
                            transition: "modal-flow"
                        }), (0, f.logShareCatalogViaWALinkClick)({
                            catalogOwnerWid: P.id,
                            catalogContext: (0, s.getProductCatalogContext)(A)
                        })
                    },
                    M = (0, S.jsx)(l.DetailImage, {
                        id: E.id,
                        size: 82,
                        quality: l.DetailImageQuality.High
                    });
                return w && (n = "labels", o = "center-column"), (0, S.jsxs)(h.default, {
                    ref: t,
                    theme: n,
                    children: [(0, S.jsx)(m.DrawerHeader, {
                        testid: "catalog-link-title",
                        title: _.fbt._("Catalog link", null, {
                            hk: "M36Dw"
                        }),
                        onBack: y,
                        onCancel: T,
                        type: m.DRAWER_HEADER_TYPE.SMALL
                    }), (0, S.jsxs)(g.default, {
                        theme: o,
                        children: [(0, S.jsx)("div", {
                            className: (0, b.default)(j),
                            children: I
                        }), (0, S.jsx)(r.default, {
                            image: M,
                            primary: (0, S.jsx)(d.Name, {
                                contact: E,
                                useVerifiedName: !0
                            }),
                            theme: "identity",
                            secondary: (0, S.jsx)(u.default, {
                                id: k,
                                href: (0, i.createCatalogLink)(P.id.user),
                                onClick: function(e) {
                                    e.preventDefault(), L()
                                },
                                noHandle: !0
                            })
                        }), (0, S.jsx)(v.default, {
                            onClick: L
                        }), (0, S.jsx)(p.default, {
                            elementId: k,
                            onClick: function() {
                                (0, f.logShareCatalogCopyLinkClick)({
                                    catalogOwnerWid: P.id,
                                    catalogContext: (0, s.getProductCatalogContext)(A)
                                })
                            }
                        })]
                    })]
                }, "catalog-link-drawer")
            }
            var T = (0, x.forwardRef)(y);
            t.default = T
        },
        46801: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return l.apply(this, arguments)
            };
            var a = o(n(887757)),
                i = o(n(348926)),
                r = n(125089);

            function l() {
                return (l = (0, i.default)(a.default.mark((function e(t) {
                    var n, o, i;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ((o = r.BusinessProfileCollection.get(t)) && !o.stale) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 4, r.BusinessProfileCollection.update(t);
                            case 4:
                                i = e.sent, o = Array.isArray(i) ? i[0] : i;
                            case 6:
                                return e.abrupt("return", (null === (n = o.profileOptions) || void 0 === n ? void 0 : n.cartEnabled) || !1);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        778603: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDetailDrawerMenu = function(e) {
                var t = e.contactId,
                    n = e.onSendProduct,
                    o = e.onReportProduct,
                    g = e.onProductLinkClick,
                    C = e.onProductMoreInformation,
                    m = e.onCartClick,
                    v = e.cartCount,
                    _ = e.catalogId;
                return [m && null != _ ? (0, h.jsx)(r.CartIconMenuBarItem, {
                    cartCountText: (0, a.isNumber)(v) && v > 0 ? v.toString() : void 0,
                    onClick: m,
                    catalogOwnerJid: _
                }) : null, (0, h.jsx)(s.MenuBarItem, {
                    testid: "menu-bar-product-link",
                    icon: (0, h.jsx)(f.default, {}),
                    title: p.fbt._("Product link", null, {
                        hk: "1RIlvV"
                    }),
                    onClick: g
                }, "link"), (0, h.jsx)(s.MenuBarItem, {
                    testid: "menu-bar-menu",
                    icon: (0, h.jsx)(u.MenuIcon, {}),
                    title: d.default.t(430),
                    children: (0, h.jsxs)(l.Dropdown, {
                        type: l.MenuType.DropdownMenu,
                        flipOnRTL: !0,
                        dirX: l.DirX.LEFT,
                        children: [(0, h.jsx)(c.DropdownItem, {
                            testid: "mi-send menu-item",
                            action: n,
                            children: p.fbt._("Send product", null, {
                                hk: "1wkzue"
                            })
                        }), (0, i.canSeeECommerceComplianceIndiaSoftEnforcement)(t) && (0, h.jsx)(c.DropdownItem, {
                            testid: "mi-send menu-item",
                            action: C,
                            children: p.fbt._("More information", null, {
                                hk: "2JHvi1"
                            })
                        }), (0, h.jsx)(c.DropdownItem, {
                            testid: "mi-report menu-item",
                            action: o,
                            children: p.fbt._("Report product", null, {
                                hk: "1jgCyX"
                            })
                        })]
                    }, "ProductDetailHeader")
                }, "dropdown")]
            };
            var a = n(689121),
                i = n(894995),
                r = n(53315),
                l = n(482510),
                c = n(116384),
                d = o(n(758927)),
                s = n(199479),
                u = n(994291),
                f = o(n(319913)),
                p = n(548360),
                h = n(785893)
        },
        885882: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseErrorState = function(e, t) {
                if (e instanceof a.Unmount);
                else {
                    if (!(e instanceof o.ServerStatusCodeError)) throw t("ERROR"), e;
                    "not_found" === e.status || 404 === e.status ? t("NOT_FOUND") : (t("ERROR"), __LOG__(3)`parseErrorState:Failed to fetch from server`)
                }
            };
            var o = n(104010),
                a = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = i(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var l = a ? Object.getOwnPropertyDescriptor(e, r) : null;
                            l && (l.get || l.set) ? Object.defineProperty(o, r, l) : o[r] = e[r]
                        } o.default = e, n && n.set(e, o);
                    return o
                }(n(576498));

            function i(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (i = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        587467: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.fetchState;
                switch (t) {
                    case "NONE":
                    case "SUCCESS":
                        return null;
                    case "PENDING":
                        return (0, c.jsxs)("div", {
                            className: (0, l.default)(d),
                            children: [(0, c.jsx)(a.Spinner, {
                                size: 14,
                                color: a.colorOptions.highlight
                            }), (0, c.jsx)(i.TextSpan, {
                                className: (0, l.default)(s, u),
                                theme: "small",
                                children: r.fbt._("Waiting for network", null, {
                                    hk: "3I2DtN"
                                })
                            })]
                        });
                    case "NOT_FOUND":
                    case "ERROR":
                        return (0, c.jsx)("div", {
                            className: (0, l.default)(d),
                            children: (0, c.jsx)(i.TextSpan, {
                                className: (0, l.default)(s),
                                theme: "small",
                                color: "danger",
                                children: "NOT_FOUND" === t ? r.fbt._("This product or service has been removed", null, {
                                    hk: "3mE1ld"
                                }) : r.fbt._("Something went wrong", null, {
                                    hk: "7C9hw"
                                })
                            })
                        });
                    default:
                        throw new Error(`invalid fetchState ${t}`)
                }
            };
            var a = n(96293),
                i = n(558288),
                r = n(548360),
                l = o(n(156720)),
                c = n(785893),
                d = {
                    position: "lhggkp7q",
                    zIndex: "nbczt5ty",
                    boxSizing: "cm280p3y",
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    justifyContent: "ac2vgrno",
                    width: "ln8gz9je",
                    paddingTop: "fbgy3m38",
                    paddingEnd: "ft2m32mm",
                    paddingBottom: "oq31bsqd",
                    paddingStart: "nu34rnf1",
                    backgroundColor: "ihvf49ua",
                    boxShadow: "g07l9dru",
                    opacity: "bs7a17vp",
                    transitionDelay: "kji9i36c",
                    transitionTimingFunction: "bkifpc9x"
                },
                s = {
                    marginTop: "tt8xd2xn",
                    marginEnd: "spjzgwxb",
                    marginBottom: "mpdn4nr2",
                    marginStart: "a3oefunm",
                    fontWeight: "hnx8ox4h"
                },
                u = {
                    color: "evzurl1e"
                }
        },
        319913: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, r.jsx)(a.LinkIcon, {
                    className: (0, i.default)(l.linkIcon, "inherit-color" === e.theme && l.inheritColor)
                })
            };
            var a = n(384616),
                i = o(n(156720)),
                r = n(785893),
                l = {
                    linkIcon: {
                        color: "svlsagor"
                    },
                    inheritColor: {
                        color: "gtscxtjd"
                    }
                }
        },
        16499: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.id,
                    n = e.href,
                    o = e.onClick,
                    d = e.noHandle;
                return (0, r.jsx)("span", {
                    className: (0, i.default)(l),
                    children: (0, r.jsx)(a.SelectableLink, {
                        id: t,
                        href: n,
                        className: (0, i.default)(c),
                        selectable: !0,
                        onClick: o,
                        "data-nohandle": d,
                        children: n
                    })
                })
            };
            var a = n(160967),
                i = o(n(156720)),
                r = n(785893),
                l = {
                    wordWrap: "b6f1x6w7",
                    whiteSpace: "hmy10g0s"
                },
                c = {
                    color: "e1vllz7m"
                }
        },
        328781: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onProductDetail,
                    n = e.onProductShare,
                    o = e.onCartOpen,
                    _ = e.shareLinks,
                    x = e.canManageCatalog,
                    b = (0, C.useState)(void 0),
                    S = (0, a.default)(b, 2),
                    j = S[0],
                    k = S[1],
                    y = (0, m.useModelValues)(e.catalog, ["productCollection", "afterCursor", "id", "index"]),
                    T = function(e) {
                        n && n(e)
                    };
                if (!y.productCollection || !y.productCollection.getProductModels(e.canManageCatalog).length) return null;
                return (0, v.jsx)(l.default, {
                    flatListControllers: [e.flatListController],
                    children: (0, v.jsx)(r.FlatList, {
                        flatListController: e.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: (P = void 0 !== o, y.productCollection.getProductModels(x).map((function(e) {
                            return {
                                itemKey: `${e.id.toString()}_${P.toString()}`,
                                product: e
                            }
                        }))),
                        renderItem: function(e) {
                            var n = e.product;
                            return (0, v.jsx)(g.DrawerContext.Consumer, {
                                children: function(e) {
                                    var a = (0, u.getProductCatalogContext)(e);
                                    return (0, v.jsx)(f.default, {
                                        product: n,
                                        onCartOpen: o,
                                        onClick: function() {
                                            return function(e, n) {
                                                return (0, p.logCatalogListDetailClick)({
                                                    product: (0, h.unproxy)(e),
                                                    catalogContext: n
                                                }), k(e.id.toString()), t(e)
                                            }(n, a)
                                        },
                                        onProductShare: _ ? T : null,
                                        onProductDelete: function(e) {
                                            return function(e, t) {
                                                (0, d.handleProductDelete)(y, e, t, "Catalog").then((function() {
                                                    e.id === j && (i.DrawerManager.closeDrawerMid(), k(void 0))
                                                }))
                                            }(e, a)
                                        },
                                        onProductHideShow: function(e) {
                                            return function(e, t) {
                                                (0, d.handleProductVisibilityChange)(y, e, t, "Catalog")
                                            }(e, a)
                                        },
                                        canManageCatalog: x
                                    })
                                }
                            })
                        },
                        defaultItemHeight: s.PRODUCT_LIST_ITEM_HEIGHT,
                        keyOrder: c.KeyOrder.INVERSE
                    })
                });
                var P
            };
            var a = o(n(963038)),
                i = n(875058),
                r = n(577407),
                l = o(n(877576)),
                c = n(906416),
                d = n(911558),
                s = n(902011),
                u = n(179677),
                f = o(n(991417)),
                p = n(647435),
                h = n(378776),
                g = n(445639),
                C = n(667294),
                m = n(948752),
                v = n(785893)
        },
        288983: (e, t, n) => {
            "use strict";
            var o = n(263026).default,
                a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(963038)),
                r = n(497384),
                l = n(63520),
                c = n(742649),
                d = n(281098),
                s = n(104010),
                u = n(894995),
                f = n(14391),
                p = n(125089),
                h = n(219450),
                g = n(321353),
                C = n(218953),
                m = n(939760),
                v = n(896674),
                _ = n(516053),
                x = n(628707),
                b = a(n(597738)),
                S = a(n(46801)),
                j = n(179677),
                k = n(778603),
                y = n(647435),
                T = a(n(365997)),
                P = n(872146),
                E = a(n(372568)),
                I = a(n(451685)),
                w = n(926464),
                O = n(652405),
                A = n(96293),
                L = n(378776),
                M = n(558288),
                R = n(228277),
                N = n(454964),
                D = n(404186),
                B = a(n(829723)),
                H = a(n(544978)),
                F = n(445639),
                W = n(952991),
                z = n(548360),
                V = n(667294),
                U = a(n(156720)),
                G = a(n(802418)),
                q = a(n(982669)),
                Y = n(779740),
                K = n(948752),
                Z = a(n(788413)),
                X = n(785893),
                Q = {
                    availabilityBanner: {
                        display: "p357zi0d",
                        paddingTop: "a71rq12o",
                        paddingEnd: "bcymb0na",
                        paddingBottom: "pcbmd69e",
                        paddingStart: "e8k79tju",
                        marginBottom: "mpdn4nr2",
                        lineHeight: "r5qsrrlp",
                        backgroundColor: "ronsgs3n"
                    },
                    text: {
                        marginTop: "tt8xd2xn",
                        marginEnd: "spjzgwxb",
                        marginBottom: "mpdn4nr2",
                        marginStart: "a3oefunm",
                        fontWeight: "hnx8ox4h"
                    },
                    loadingText: {
                        color: "evzurl1e"
                    },
                    loadingContainer: {
                        position: "lhggkp7q",
                        zIndex: "nbczt5ty",
                        boxSizing: "cm280p3y",
                        display: "p357zi0d",
                        alignItems: "gndfcl4n",
                        justifyContent: "ac2vgrno",
                        width: "ln8gz9je",
                        paddingTop: "fbgy3m38",
                        paddingEnd: "ft2m32mm",
                        paddingBottom: "oq31bsqd",
                        paddingStart: "nu34rnf1",
                        background: "kqm7f4gm",
                        boxShadow: "g07l9dru",
                        opacity: "bs7a17vp",
                        transitionProperty: "fx1ldmn8",
                        transitionDuration: "grkbsjmy",
                        transitionTimingFunction: "bkifpc9x"
                    },
                    shiftUp: {
                        position: "lhggkp7q",
                        zIndex: "pcpjcif5",
                        display: "p357zi0d",
                        alignItems: "gndfcl4n",
                        justifyContent: "ac2vgrno",
                        width: "ln8gz9je",
                        paddingTop: "fbgy3m38",
                        paddingEnd: "ft2m32mm",
                        paddingBottom: "oq31bsqd",
                        paddingStart: "nu34rnf1",
                        background: "kqm7f4gm",
                        boxShadow: "g07l9dru",
                        transitionProperty: "fx1ldmn8",
                        transitionDuration: "pa888v5w",
                        transitionTimingFunction: "bkifpc9x",
                        transform: "sihoqmp4"
                    },
                    body: {
                        flex: "kk3akd72",
                        paddingBottom: "s9fl9ege"
                    }
                };

            function J(e) {
                var t, n = e.productFetchState,
                    o = e.productCatalogFetchState,
                    a = e.isAvailable;
                t = "ERROR" === n ? (0, X.jsx)(M.TextSpan, {
                    className: (0, U.default)(Q.text),
                    theme: "small",
                    color: "danger",
                    children: z.fbt._("Something went wrong", null, {
                        hk: "7C9hw"
                    })
                }) : a ? [(0, X.jsx)(A.Spinner, {
                    size: 14,
                    color: A.colorOptions.highlight
                }, "DetailDrawer-loadingBar-spinner"), (0, X.jsx)(M.TextSpan, {
                    className: (0, U.default)(Q.text, Q.loadingText),
                    theme: "small",
                    children: z.fbt._("Waiting for network", null, {
                        hk: "3I2DtN"
                    })
                }, "DetailDrawer-loadingBar-msg")] : (0, X.jsx)(M.TextSpan, {
                    className: (0, U.default)(Q.text),
                    theme: "small",
                    color: "danger",
                    children: z.fbt._("This product or service has been removed", null, {
                        hk: "3mE1ld"
                    })
                });
                var i = "PENDING" === n || "PENDING" === o || !a;
                return (0, X.jsx)("div", {
                    className: (0, U.default)(i && Q.loadingContainer, !i && Q.shiftUp),
                    children: t
                })
            }

            function $(e) {
                var t = e.menu,
                    n = e.handleBack;
                return (0, X.jsx)(W.DrawerHeader, {
                    title: z.fbt._("Details", null, {
                        hk: "1hLRT1"
                    }),
                    onBack: n,
                    type: W.DRAWER_HEADER_TYPE.SMALL,
                    menu: t
                })
            }

            function ee(e, t) {
                var n, a = e.collectionId,
                    A = e.onCartClick,
                    M = e.onProductLinkClick,
                    W = e.onProductMoreInformation,
                    ee = e.onBack,
                    te = e.onProductCatalog,
                    ne = e.onProductDetail,
                    oe = e.refreshCarousel,
                    ae = e.chat,
                    ie = e.isPushed,
                    re = void 0 === ie || ie,
                    le = (0, G.default)(),
                    ce = (0, Z.default)(),
                    de = (0, V.useContext)(F.DrawerContext),
                    se = (0, K.useModelValues)(e.product, ["id", "catalogWid", "productImageCollection", "fetchedFromServer", "name", "availability", "reviewStatus"]),
                    ue = (0, V.useState)(null),
                    fe = (0, i.default)(ue, 2),
                    pe = fe[0],
                    he = fe[1],
                    ge = (0, V.useState)(!1),
                    Ce = (0, i.default)(ge, 2),
                    me = Ce[0],
                    ve = Ce[1],
                    _e = (0, V.useState)(null),
                    xe = (0, i.default)(_e, 2),
                    be = xe[0],
                    Se = xe[1],
                    je = (0, V.useState)("NONE"),
                    ke = (0, i.default)(je, 2),
                    ye = ke[0],
                    Te = ke[1],
                    Pe = (0, V.useState)("NONE"),
                    Ee = (0, i.default)(Pe, 2),
                    Ie = Ee[0],
                    we = Ee[1],
                    Oe = (0, q.default)((function() {
                        return g.CartCollection.findCart(se.catalogWid.toString())
                    }));
                (0, Y.useListener)(Oe.current, "change:cartItemCollection", le);
                var Ae = function() {
                        if (ee) return ee()
                    },
                    Le = function() {
                        var e = se.catalogWid,
                            t = se.id.toString();
                        return C.CatalogCollection.findProduct({
                            catalogWid: e,
                            productId: t,
                            productMsgMediaData: (0, L.unproxy)(se).productMsgMediaData,
                            canLogQpl: re
                        })
                    },
                    Me = function() {
                        var e = se.catalogWid,
                            t = Le(),
                            n = p.BusinessProfileCollection.find(e),
                            a = !0;
                        return o.all([n, t]).then((function(e) {
                            var t = (0, i.default)(e, 1)[0];
                            if (ce.aborted) throw new r.AbortError;
                            return a = !1, re && (0, N.qplEndProductView)(c.QuickLogActionType.SUCCESS), he(t), Te("SUCCESS"), t
                        })).then((function(e) {
                            we((function(t) {
                                if ("PENDING" === t) {
                                    if (!(0, h.hasCatalog)(e)) return "NONE";
                                    ! function() {
                                        var e = se.catalogWid;
                                        C.CatalogCollection.findCarouselCatalog(e).then((function(e) {
                                            if (!ce.aborted) {
                                                var t = Array.isArray(e) ? e[0] : e;
                                                Se(t || null), we(t ? "SUCCESS" : "NONE")
                                            }
                                        })).catch((0, l.filteredCatch)(s.ServerStatusCodeError, (function(e) {
                                            "not_found" === e.status || 404 === e.status ? (Se(null), we("NOT_FOUND")) : (Se(null), we("ERROR"), __LOG__(3)`Failed to fetch product catalog from server`)
                                        })))
                                    }()
                                }
                                return t
                            }))
                        })).catch((0, r.catchAbort)((function() {}))).catch((0, l.filteredCatch)(s.E404, (function() {
                            Ae(), x.ModalManager.open((0, X.jsx)(D.ConfirmPopup, {
                                onOK: function() {
                                    x.ModalManager.close()
                                },
                                okText: z.fbt._("OK", null, {
                                    hk: "2KEeHb"
                                }),
                                children: z.fbt._("This product or service has been removed", null, {
                                    hk: "3mE1ld"
                                })
                            })), Te("NOT_FOUND"), a = !1, (0, N.qplDropProductView)()
                        }))).catch((0, l.filteredCatch)(s.ServerStatusCodeError, (function() {
                            Te("ERROR"), __LOG__(3)`Failed to fetch product from server`
                        }))).finally((function() {
                            re && a && (0, N.qplEndProductView)(c.QuickLogActionType.FAIL)
                        }))
                    };
                (0, V.useEffect)((function() {
                    if ((0, u.commerceThreadsLoggingEnabled)() && ae && (0, m.addChatThreadLoggingActivities)([{
                            activityType: "pdpViews",
                            ts: (0, d.unixTime)(),
                            chatId: ae.id
                        }]), oe) {
                        var e = C.CatalogCollection.get(se.catalogWid);
                        (null == e ? void 0 : e.productCollection) && e.fetchedFromServer ? we("SUCCESS") : we("PENDING")
                    }
                    var t = (0, R.getMaybeMeUser)();
                    re && (0, N.qplAnnotateProductView)(!(null == t ? void 0 : t.equals(se.catalogWid)));
                    var n = se.catalogWid,
                        o = se.id.toString();
                    if (n && o) return Me(), (0, S.default)(n).then((function(e) {
                            ve(e), (0, y.logProductDetailView)({
                                product: (0, L.unproxy)(se),
                                catalogContext: (0, j.getProductCatalogContext)(de),
                                cartToggle: e,
                                collectionId: a
                            })
                        })),
                        function() {
                            var e = se.catalogWid,
                                t = se.id.toString();
                            if (e && t) {
                                var n = C.CatalogCollection.get(e),
                                    o = n && n.msgProductCollection.get(t);
                                (null == o ? void 0 : o.fetchedFromServer) && n && n.msgProductCollection.remove(o)
                            }
                        };
                    (0, N.qplDropProductView)()
                }), []);
                var Re, Ne = function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        (0, u.commerceThreadsLoggingEnabled)() && ae && (0, m.addChatThreadLoggingActivities)([{
                            activityType: e,
                            ts: (0, d.unixTime)(),
                            chatId: ae.id,
                            boolValue: t
                        }])
                    },
                    De = function() {
                        return "ERROR" !== ye && "NOT_FOUND" !== ye && !(se.reviewStatus === w.PRODUCT_REVIEW_STATUS.REJECTED)
                    },
                    Be = De(),
                    He = (0, h.hasCatalog)(pe),
                    Fe = function() {
                        Le().then((function() {
                            var e = C.CatalogCollection.get(se.catalogWid);
                            e && (e.stale = !0)
                        }))
                    };
                return De() && (Re = (0, k.getDetailDrawerMenu)({
                    onSendProduct: function() {
                        var e = se,
                            t = e.catalogWid,
                            n = C.CatalogCollection.get(t);
                        if (n) {
                            var o = n.productCollection.get(e.id);
                            v.Cmd.attachProduct({
                                product: o ? (0, L.unproxy)(o) : (0, L.unproxy)(e)
                            })
                        }
                    },
                    onReportProduct: function() {
                        x.ModalManager.open((0, X.jsx)(I.default, {
                            product: se,
                            sessionId: (0, j.getProductCatalogSessionId)(de)
                        }))
                    },
                    onProductLinkClick: function() {
                        (0, y.logProductShareLinkClick)({
                            product: se,
                            catalogContext: (0, j.getProductCatalogContext)(de)
                        }), M(se)
                    },
                    onProductMoreInformation: function() {
                        W(se)
                    },
                    onCartClick: me ? function() {
                        (0, N.qplStartCartView)("Product"), null == A || A(se.catalogWid.toString())
                    } : void 0,
                    cartCount: Oe.current.itemCount,
                    catalogId: se.catalogWid.toString(),
                    contactId: null == ae ? void 0 : ae.contact.id
                })), (0, X.jsxs)(B.default, {
                    ref: t,
                    onDrop: Ae,
                    theme: "striped",
                    children: [(0, X.jsx)($, {
                        handleBack: Ae,
                        menu: Re
                    }), (0, X.jsx)(H.default, {
                        children: (0, X.jsxs)("div", {
                            "data-testid": "product-details",
                            className: (0, U.default)(Q.body),
                            children: [(0, X.jsx)(J, {
                                productFetchState: ye,
                                productCatalogFetchState: Ie,
                                isAvailable: Be
                            }), (0, X.jsx)(E.default, {
                                product: se,
                                isAvailable: Be,
                                fetching: "PENDING" === ye
                            }), O.PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(se.availability) ? (0, X.jsxs)("div", {
                                className: (0, U.default)(Q.availabilityBanner),
                                children: [se.availability === O.ProductAvailability.OUT_OF_STOCK ? z.fbt._("This item is out of stock.", null, {
                                    hk: "4gOwiz"
                                }) : null, se.availability === O.ProductAvailability.AVAILABLE_FOR_ANOTHER_POSTCODE && (0, _.enablePostcodeInCatalog)() ? (0, X.jsx)(P.ProductPostcodeChangeBanner, {
                                    catalogWid: se.catalogWid,
                                    postcodeChangeSuccess: Fe
                                }) : null]
                            }) : null, (0, X.jsx)(T.default, {
                                product: se,
                                collectionId: a,
                                onSendChat: function() {
                                    var e = C.CatalogCollection.get(se.catalogWid);
                                    (0, f.sendProductToChat)(se, e, (0, j.getProductCatalogContext)(de)), Ne("isCtaOnPdpClicked"), (0, y.logProductMessageBusinessClick)(se, (0, j.getProductCatalogContext)(de))
                                },
                                onAddToCart: function() {
                                    Ne("isCartAddClicked")
                                },
                                isAvailable: Be,
                                hideRetailerID: null === (n = e.chat) || void 0 === n ? void 0 : n.contact.isEnterprise
                            }), He && be ? (0, X.jsx)(b.default, {
                                catalog: be,
                                onProductCatalog: function() {
                                    te && te(se.catalogWid, (0, j.getProductCatalogContext)(de))
                                },
                                onProductDetail: function(e) {
                                    if ((0, N.qplStartProductView)("Product"), ne) return ne(e)
                                },
                                filterProductId: se.id.toString(),
                                title: z.fbt._("More", null, {
                                    hk: "2A3GqV"
                                }),
                                animation: !1
                            }) : null]
                        })
                    })]
                }, "product-details-drawer")
            }
            var te = (0, V.forwardRef)(ee);
            t.default = te
        },
        365997: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.collectionId,
                    n = e.onSendChat,
                    o = e.onAddToCart,
                    i = e.isAvailable,
                    r = (0, I.useContext)(T.DrawerContext),
                    l = (0, A.useModelValues)(e.product, ["name", "url", "description", "availability", "currency", "priceAmount1000", "salePriceAmount1000", "salePriceStartDate", "salePriceEndDate", "fetchedFromServer", "retailerId", "catalogWid", "productImageCollection", "imageHash", "reviewStatus", "imageCdnUrl", "id", "maxAvailable"]),
                    c = (0, I.useState)(!1),
                    d = (0, a.default)(c, 2),
                    s = d[0],
                    p = d[1],
                    x = (0, I.useState)(!1),
                    b = (0, a.default)(x, 2),
                    E = b[0],
                    O = b[1];
                return (0, I.useEffect)((function() {
                    (0, C.default)(l.catalogWid).then((function(e) {
                        O(e)
                    }))
                }), []), (0, L.jsxs)(P.default, {
                    theme: "padding-product",
                    animation: !1,
                    children: [(0, L.jsx)(y.TextDiv, {
                        theme: "title",
                        className: (0, w.default)(N.name),
                        children: (0, L.jsx)(u.EmojiText, {
                            text: l.name,
                            selectable: !0
                        })
                    }), null != l.priceAmount1000 ? (0, L.jsx)(y.TextDiv, {
                        className: (0, w.default)(N.price),
                        color: "dark",
                        theme: "plain",
                        children: (0, L.jsx)(_.default, {
                            product: l,
                            selectable: !0,
                            direction: "inherit"
                        })
                    }) : null, (0, L.jsx)(F, {
                        product: l,
                        isAvailable: i,
                        isDescExpanded: s,
                        hideRetailerID: e.hideRetailerID,
                        onReadMore: function() {
                            p(!0)
                        },
                        onClickUrl: function(e, t) {
                            e.stopPropagation(), (0, v.logDetailLinkClick)({
                                product: (0, k.unproxy)(l),
                                catalogContext: (0, m.getProductCatalogContext)(r)
                            });
                            var n = t && h.findLink(t);
                            n && (0, f.openExternalLink)(n.url)
                        }
                    }), (0, L.jsx)(D, {
                        onSendChat: function() {
                            null == n || n()
                        },
                        isAvailable: i,
                        product: l
                    }), (0, L.jsx)(B, {
                        collectionId: t,
                        cartEnabled: E,
                        isAvailable: i,
                        product: l,
                        onClick: function(e) {
                            j.QPL.markerStart(S.QuickLogMarkerId.WHATSAPP_CART_ADD, {
                                annotations: {
                                    string: {
                                        EntryPoint: "Product"
                                    }
                                }
                            }), (0, g.addToCart)(l, (0, m.getProductCatalogContext)(r), t), null == o || o(), e.stopPropagation()
                        },
                        context: r
                    })]
                })
            };
            var a = o(n(963038)),
                i = o(n(308996)),
                r = n(894995),
                l = o(n(579043)),
                c = o(n(746251)),
                d = o(n(95340)),
                s = o(n(442435)),
                u = n(990055),
                f = n(192070),
                p = R(n(924309)),
                h = R(n(810838)),
                g = n(196665),
                C = o(n(46801)),
                m = n(179677),
                v = n(647435),
                _ = o(n(450791)),
                x = n(926464),
                b = n(652405),
                S = n(754360),
                j = n(324928),
                k = n(378776),
                y = n(558288),
                T = n(445639),
                P = o(n(849788)),
                E = n(548360),
                I = n(667294),
                w = o(n(156720)),
                O = o(n(646195)),
                A = n(948752),
                L = n(785893);

            function M(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (M = function(e) {
                    return e ? n : t
                })(e)
            }

            function R(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = M(t);
                if (n && n.has(e)) return n.get(e);
                var o = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                        r && (r.get || r.set) ? Object.defineProperty(o, i, r) : o[i] = e[i]
                    } return o.default = e, n && n.set(e, o), o
            }
            var N = {
                addToCartIconDisabled: {
                    color: "baku5n5n",
                    ":hover": {
                        color: "k3zau70k"
                    }
                },
                addToCartIcon: {
                    color: "o2v2jkg7",
                    ":hover": {
                        color: "oehg7oif"
                    }
                },
                addToCartBtnHoverIcon: {
                    color: "jk96mlgm",
                    ":hover": {
                        color: "dul83ws3"
                    }
                },
                buttonContainer: {
                    display: "p357zi0d",
                    marginBottom: "or9x5nie",
                    textAlign: "qfejxiq4"
                },
                addToCartContainer: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    justifyItems: "g3ty6e9x"
                },
                addToCartContainerWithIcon: {
                    marginTop: "kv6wexeh",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "rkx9gk34",
                    marginStart: "svoq16ka"
                },
                more: {
                    color: "o0rubyzf"
                },
                description: {
                    marginBottom: "du8bjn1j",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    wordWrap: "b6f1x6w7"
                },
                name: {
                    marginBottom: "t4zgqcuo",
                    fontWeight: "hnx8ox4h",
                    wordWrap: "b6f1x6w7"
                },
                price: {
                    marginBottom: "t4zgqcuo"
                },
                quantityControls: {
                    justifyContent: "ac2vgrno",
                    marginTop: "kmqqq083",
                    marginBottom: "mpdn4nr2"
                }
            };

            function D(e) {
                var t = e.onSendChat,
                    n = e.isAvailable,
                    o = e.product;
                if (!t || !o.fetchedFromServer || !n || o.reviewStatus !== x.PRODUCT_REVIEW_STATUS.APPROVED) return null;
                var a = E.fbt._("Message Business", null, {
                    hk: "3jgAJS"
                });
                return (0, L.jsx)("div", {
                    className: (0, w.default)(N.buttonContainer),
                    title: a,
                    children: (0, L.jsx)(c.default, {
                        testid: "product-message-business-btn",
                        onClick: t,
                        type: "secondary",
                        stretch: !0,
                        children: a
                    })
                })
            }

            function B(e) {
                var t = e.cartEnabled,
                    n = e.isAvailable,
                    o = e.product,
                    a = e.onClick,
                    s = e.context,
                    u = e.collectionId,
                    f = (0, O.default)(),
                    p = f.isHovered,
                    h = f.onMouseEnter,
                    g = f.onMouseLeave;
                if (!t || !o.fetchedFromServer || !n || o.reviewStatus !== x.PRODUCT_REVIEW_STATUS.APPROVED) return null;
                var C = (0, r.isQuantityControlsFeatureEnabled)(),
                    m = E.fbt._("Add to cart", null, {
                        hk: "2qbS08"
                    }),
                    v = b.PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(o.availability),
                    _ = null;
                _ = v ? N.addToCartIconDisabled : p ? N.addToCartBtnHoverIcon : N.addToCartIcon;
                var S = (0, l.default)(o),
                    j = C ? null : (0, L.jsx)(i.default, {
                        colorXStyle: _
                    }),
                    k = C && S > 0 ? (0, L.jsx)(d.default, {
                        product: o,
                        context: s,
                        collectionId: u || ""
                    }) : (0, L.jsx)(c.default, {
                        testid: "add-to-cart-btn",
                        onClick: a,
                        type: "secondary",
                        disabled: v,
                        stretch: !0,
                        children: (0, L.jsxs)("span", {
                            className: (0, w.default)(N.addToCartContainer, j && N.addToCartContainerWithIcon),
                            children: [j, m]
                        })
                    });
                return (0, L.jsx)("div", {
                    className: (0, w.default)(N.buttonContainer, C && N.quantityControls),
                    title: m,
                    onMouseEnter: h,
                    onMouseLeave: g,
                    children: k
                })
            }

            function H(e) {
                var t = e.isAvailable,
                    n = e.product,
                    o = e.onClick,
                    a = n.url;
                if (!n.fetchedFromServer || !a || !t) return null;
                var i = p.TrustedGroupDesc({
                    links: h.findLinks(a)
                });
                return (0, L.jsx)("div", {
                    children: (0, L.jsx)(u.EmojiText, {
                        selectable: !0,
                        formatters: i,
                        text: a,
                        onClick: function(e) {
                            return o(e, a)
                        }
                    })
                })
            }

            function F(e) {
                var t = e.product,
                    n = e.isAvailable,
                    o = e.isDescExpanded,
                    a = e.hideRetailerID,
                    i = e.onReadMore,
                    r = e.onClickUrl;
                if (!t.description && !t.url && !t.retailerId) return null;
                var l, c = !!t.description && t.description.length > s.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH;
                return t.description && (l = (0, L.jsxs)("div", {
                    children: [(0, L.jsx)(u.EmojiText, {
                        selectable: !0,
                        multiline: !0,
                        text: t.description,
                        textLimit: o ? 1 / 0 : s.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                    }), c && !o ? (0, L.jsxs)("span", {
                        className: (0, w.default)(N.more),
                        role: "button",
                        onClick: i,
                        children: [" ", E.fbt._("Read more", null, {
                            hk: "2DvSvh"
                        })]
                    }) : null]
                })), (0, L.jsxs)(y.TextDiv, {
                    theme: "plain",
                    className: (0, w.default)(N.description),
                    children: [l, (0, L.jsx)(H, {
                        isAvailable: n,
                        product: t,
                        onClick: r
                    }), t.retailerId && !a ? (0, L.jsx)("div", {
                        children: (0, L.jsx)(u.EmojiText, {
                            text: t.retailerId,
                            selectable: !0,
                            direction: "inherit"
                        })
                    }) : null]
                })
            }
        },
        495801: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = o(n(692364)),
                i = o(n(68968)),
                r = n(79760),
                l = o(n(799328)),
                c = n(896674),
                d = n(990055),
                s = n(628707),
                u = n(179677),
                f = o(n(16499)),
                p = n(647435),
                h = n(604785),
                g = n(378776),
                C = o(n(665901)),
                m = o(n(981094)),
                v = o(n(829723)),
                _ = o(n(544978)),
                x = n(445639),
                b = n(952991),
                S = o(n(863358)),
                j = n(548360),
                k = o(n(706442)),
                y = n(667294),
                T = n(785893),
                P = "product-link-anchor";

            function E(e) {
                var t = e.getProductImageCollectionHead();
                return t ? (0, T.jsx)(h.ProductThumb, {
                    className: (0, k.default)(C.default.productImage, C.default.productImageContainer),
                    mediaData: t.mediaData
                }) : (0, T.jsx)(h.ProductThumbPlaceholder, {
                    className: (0, k.default)(C.default.productThumb, C.default.productThumbContainer)
                })
            }

            function I(e, t) {
                var n, o, h, k = e.onBack,
                    I = e.onCancel,
                    w = e.product,
                    O = e.prompt,
                    A = e.centerDrawer,
                    L = e.sendProductMsg,
                    M = e.onSend,
                    R = (0, y.useContext)(x.DrawerContext),
                    N = function() {
                        s.ModalManager.open((0, T.jsx)(i.default, {
                            product: w,
                            onSend: M
                        }), {
                            transition: "modal-flow"
                        }), (0, p.logShareProductViaWALinkClick)({
                            product: w,
                            catalogContext: (0, u.getProductCatalogContext)(R)
                        })
                    },
                    D = (0, r.createProductLink)(w.catalogWid.user, w.id.toString());
                return A && (n = "labels", o = "center-column"), h = null != L ? (0, T.jsx)(a.default, {
                    onClick: function() {
                        c.Cmd.attachProduct({
                            product: (0, g.unproxy)(w),
                            onSend: M
                        })
                    }
                }) : (0, T.jsx)(S.default, {
                    onClick: N
                }), (0, T.jsxs)(v.default, {
                    ref: t,
                    theme: n,
                    children: [(0, T.jsx)(b.DrawerHeader, {
                        testid: "product-link-title",
                        title: j.fbt._("Product link", null, {
                            hk: "1RIlvV"
                        }),
                        onBack: k,
                        onCancel: I,
                        type: b.DRAWER_HEADER_TYPE.SMALL,
                        focusBackOrCancel: !0
                    }), (0, T.jsxs)(_.default, {
                        theme: o,
                        children: [(0, T.jsx)("div", {
                            className: C.default.prompt,
                            children: O
                        }), (0, T.jsx)(l.default, {
                            image: E(w),
                            primary: (0, T.jsx)(d.EmojiText, {
                                text: w.name,
                                direction: "auto"
                            }),
                            theme: "identity",
                            secondary: (0, T.jsx)(f.default, {
                                id: P,
                                href: D,
                                onClick: function(e) {
                                    e.preventDefault(), N()
                                },
                                noHandle: !0
                            })
                        }), h, (0, T.jsx)(m.default, {
                            elementId: P,
                            onClick: function() {
                                (0, p.logShareProductCopyLinkClick)({
                                    product: w,
                                    catalogContext: (0, u.getProductCatalogContext)(R)
                                })
                            }
                        })]
                    })]
                }, "product-link-drawer")
            }
            var w = (0, y.forwardRef)(I);
            t.default = w
        },
        897663: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProductListDrawer = void 0;
            var a = o(n(963038)),
                i = n(63520),
                r = n(689121),
                l = n(519509),
                c = n(104010),
                d = n(894995),
                s = n(321353),
                u = n(218953),
                f = n(53315),
                p = n(482510),
                h = n(116384),
                g = o(n(979163)),
                C = o(n(399447)),
                m = n(295769),
                v = o(n(758927)),
                _ = o(n(929380)),
                x = n(199479),
                b = n(994291),
                S = o(n(84358)),
                j = n(902011),
                k = o(n(46801)),
                y = n(179677),
                T = n(885882),
                P = o(n(587467)),
                E = o(n(319913)),
                I = o(n(328781)),
                w = n(647435),
                O = o(n(726174)),
                A = o(n(829723)),
                L = o(n(544978)),
                M = n(445639),
                R = n(952991),
                N = n(548360),
                D = n(667294),
                B = o(n(156720)),
                H = o(n(869622)),
                F = o(n(802418)),
                W = o(n(982669)),
                z = n(779740),
                V = n(948752),
                U = o(n(32594)),
                G = o(n(788413)),
                q = n(785893),
                Y = {
                    header: {
                        flex: "kk3akd72"
                    },
                    list: {
                        flex: "kk3akd72",
                        paddingBottom: "oq31bsqd",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex"
                    },
                    listMarginTop: {
                        marginTop: "dj1c3cmq"
                    }
                };

            function K(e) {
                var t, n = e.canManageCatalog,
                    o = e.onAddProduct,
                    a = e.businessProfile,
                    i = e.contact,
                    r = e.productCatalogList,
                    l = e.loadingMore;
                return n && o && (t = (0, q.jsx)(_.default, {
                    onClick: function() {
                        return o()
                    },
                    theme: "in-list",
                    testid: "add-item"
                })), (0, q.jsxs)(q.Fragment, {
                    children: [a && (0, q.jsx)("div", {
                        "data-testid": "catalog-header",
                        className: (0, B.default)(Y.header),
                        children: (0, q.jsx)(O.default, {
                            profilePicThumb: i.getProfilePicThumb(),
                            contact: i,
                            businessProfile: a
                        })
                    }), (0, q.jsxs)("div", {
                        "data-testid": "catalog-items",
                        className: (0, B.default)(Y.list, a && Y.listMarginTop),
                        children: [t, r, l && (0, q.jsx)(C.default, {})]
                    })]
                })
            }
            var Z = (0, D.forwardRef)((function(e, t) {
                var n = e.catalogId,
                    o = e.canManageCatalog,
                    C = e.setScrollOffset,
                    _ = e.onCartClick,
                    O = e.onCatalogLinkClick,
                    B = e.autoUpdate,
                    Y = void 0 !== B && B,
                    Z = e.businessProfile,
                    X = e.onAddProduct,
                    Q = e.onProductDetail,
                    J = e.onProductShare,
                    $ = e.headerType,
                    ee = e.onOpenSettings,
                    te = e.blockCartInterstitialFn,
                    ne = void 0 === te ? function() {
                        return !1
                    } : te,
                    oe = (0, G.default)(),
                    ae = (0, D.useContext)(M.DrawerContext),
                    ie = (0, F.default)(),
                    re = (0, H.default)(ie, 100),
                    le = (0, V.useModelValues)(e.contact, ["id"]),
                    ce = (0, W.default)((function() {
                        return new g.default
                    })),
                    de = function() {
                        var e = u.CatalogCollection.get(n);
                        return !e || e.stale ? null : e
                    },
                    se = (0, D.useMemo)((function() {
                        return s.CartCollection.findCart(le.id.toString())
                    }), [le.id]),
                    ue = (0, D.useState)(!1),
                    fe = (0, a.default)(ue, 2),
                    pe = fe[0],
                    he = fe[1],
                    ge = (0, D.useState)(0),
                    Ce = (0, a.default)(ge, 2),
                    me = Ce[0],
                    ve = Ce[1],
                    _e = (0, D.useState)(!1),
                    xe = (0, a.default)(_e, 2),
                    be = xe[0],
                    Se = xe[1],
                    je = (0, D.useState)(!1),
                    ke = (0, a.default)(je, 2),
                    ye = ke[0],
                    Te = ke[1],
                    Pe = (0, D.useState)(de),
                    Ee = (0, a.default)(Pe, 2),
                    Ie = Ee[0],
                    we = Ee[1],
                    Oe = (0, D.useState)((function() {
                        return se.itemCount
                    })),
                    Ae = (0, a.default)(Oe, 2),
                    Le = Ae[0],
                    Me = Ae[1],
                    Re = (0, D.useState)((function() {
                        return de() ? "SUCCESS" : "NONE"
                    })),
                    Ne = (0, a.default)(Re, 2),
                    De = Ne[0],
                    Be = Ne[1];
                (0, z.useListener)(se, "all", (function() {
                    var e = se.itemCount;
                    Le !== e && Me(e)
                }));
                var He = function() {
                        if (!be) {
                            var e = u.CatalogCollection.assertGet(n);
                            if (e.afterCursor) {
                                var t = e.productCollection.getProductModels().length;
                                he(!0), ve(t), u.CatalogCollection.update(n).then((function(e) {
                                    oe.aborted || (he(!1), (Array.isArray(e) ? e[0] : e).productCollection.getProductModels().length === me && Se(!0), t * j.PRODUCT_LIST_ITEM_HEIGHT < window.innerHeight && He())
                                })).catch((function() {
                                    he(!1), Se(!0)
                                }))
                            }
                        }
                    },
                    Fe = (0, H.default)((function() {
                        var t;
                        null === (t = e.onRemoveProduct) || void 0 === t || t.call(e), ie()
                    }), 100),
                    We = Y ? null == Ie ? void 0 : Ie.productCollection : null;
                (0, z.useListener)(We, "add", re), (0, z.useListener)(We, "remove", Fe);
                (0, D.useEffect)((function() {
                    Ie ? He() : u.CatalogCollection.find(n).then((function(e) {
                        we(e), Be("SUCCESS"), He()
                    })).catch((0, i.filteredCatch)(c.ServerStatusCodeError, (function(e) {
                        403 !== e.status && 404 !== e.status || (we(null), Be("NOT_FOUND"))
                    }))).catch((function(e) {
                        (0, T.parseErrorState)(e, (function(e) {
                            return Be(e)
                        }))
                    })), (0, k.default)(n).then((function(e) {
                        Te(e), (0, w.logCatalogListView)({
                            catalogOwnerWid: n,
                            catalogContext: (0, y.getProductCatalogContext)(ae),
                            cartToggle: e
                        }), o && ye && !ne() && (0, l.getABPropConfigValue)("web_abprop_nux_cart_interstitial") && (0, S.default)()
                    }))
                }), []);
                var ze = (0, U.default)((function(e) {
                        pe || e.scrollTop + m.SCROLL_FUDGE > e.scrollHeight - e.clientHeight && He()
                    }), 100),
                    Ve = function() {
                        null == _ || _(le.id.toString())
                    },
                    Ue = ye && _ ? Ve : void 0,
                    Ge = Ie ? (0, q.jsx)(K, {
                        canManageCatalog: o,
                        onAddProduct: X,
                        businessProfile: Z,
                        contact: le,
                        loadingMore: pe,
                        productCatalogList: (0, q.jsx)(I.default, {
                            onCartOpen: Ue,
                            onProductDetail: Q,
                            flatListController: ce.current,
                            catalog: Ie,
                            canManageCatalog: o,
                            shareLinks: o,
                            onProductShare: J
                        })
                    }) : (0, q.jsx)(P.default, {
                        fetchState: De
                    }),
                    qe = function(e) {
                        var t = e.canManageCatalog,
                            n = e.onOpenSettings,
                            o = e.headerType,
                            a = e.onCartClick,
                            i = e.catalogId,
                            l = e.handleCatalogLinkClick,
                            c = e.handleCartClick,
                            s = e.cartEnabled,
                            u = e.cartCount,
                            g = t && (0, d.canToggleCartOnOff)() ? (0, q.jsx)(x.MenuBarItem, {
                                testid: "menu-bar-menu",
                                icon: (0, q.jsx)(b.MenuIcon, {}),
                                title: v.default.t(430),
                                children: (0, q.jsxs)(p.Dropdown, {
                                    type: p.MenuType.DropdownMenu,
                                    flipOnRTL: !0,
                                    dirX: p.DirX.LEFT,
                                    children: [(0, q.jsx)(h.DropdownItem, {
                                        testid: "mi-foward menu-item",
                                        action: l,
                                        children: v.default.t(311)
                                    }), n && (0, q.jsx)(h.DropdownItem, {
                                        testid: "mi-settings menu-item",
                                        action: n,
                                        children: N.fbt._("Settings", null, {
                                            hk: "2RmHUB"
                                        })
                                    })]
                                }, "CatalogDetailHeader")
                            }) : (0, q.jsx)(x.MenuBarItem, {
                                testid: "menu-bar-catalog-link",
                                icon: (0, q.jsx)(E.default, {
                                    theme: o === R.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
                                }),
                                title: N.fbt._("Catalog link", null, {
                                    hk: "M36Dw"
                                }),
                                onClick: l
                            });
                        return [s && a ? (0, q.jsx)(f.CartIconMenuBarItem, {
                            cartIconTheme: o === R.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null,
                            cartCountText: (0, r.isNumber)(u) && u > 0 ? u.toString() : void 0,
                            onClick: c,
                            catalogOwnerJid: i.toString()
                        }) : null, g]
                    }({
                        canManageCatalog: o,
                        handleCatalogLinkClick: function() {
                            Ie && (O(Ie, le), (0, w.logCatalogShareLinkClick)({
                                catalogOwnerWid: n,
                                catalogContext: (0, y.getProductCatalogContext)(ae)
                            }))
                        },
                        onOpenSettings: ee,
                        headerType: $,
                        cartEnabled: ye,
                        onCartClick: _,
                        cartCount: Le,
                        handleCartClick: Ve,
                        catalogId: n
                    });
                return (0, q.jsxs)(A.default, {
                    ref: t,
                    theme: "products",
                    onDrop: e.onBack,
                    children: [(0, q.jsx)(R.DrawerHeader, {
                        title: N.fbt._("Catalog", null, {
                            hk: "3YVOSV"
                        }),
                        type: e.headerType || R.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onBack,
                        menu: qe,
                        focusBackOrCancel: !0
                    }), (0, q.jsx)(L.default, {
                        onScroll: function(e) {
                            var t, n;
                            e.currentTarget && ze(e.currentTarget), null == C || C(null !== (t = null === (n = e.currentTarget) || void 0 === n ? void 0 : n.scrollTop) && void 0 !== t ? t : 0)
                        },
                        flatListControllers: [ce.current],
                        scrollOffset: e.scrollOffset,
                        children: Ge
                    })]
                })
            }));
            t.ProductListDrawer = Z, Z.displayName = "ProductListDrawer"
        },
        726174: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.profilePicThumb,
                    n = e.contact,
                    o = e.businessProfile;
                return (0, s.jsxs)("div", {
                    className: c.default.header,
                    "data-testid": "product-list-header",
                    children: [(0, s.jsx)(f, {
                        profilePicThumb: t,
                        contact: n
                    }), (0, s.jsxs)("div", {
                        className: c.default.text,
                        children: [(0, s.jsx)(l.TextDiv, {
                            className: c.default.name,
                            theme: "large",
                            children: (0, s.jsx)(r.Name, {
                                contact: n,
                                selectable: !0,
                                useVerifiedName: !0
                            })
                        }), (0, s.jsx)(u, {
                            businessProfile: o
                        })]
                    })]
                })
            };
            var a = n(207826),
                i = n(990055),
                r = n(246009),
                l = n(558288),
                c = o(n(35659)),
                d = n(948752),
                s = n(785893);

            function u(e) {
                var t = (0, d.useOptionalModelValues)(e.businessProfile, ["description"]);
                return t && t.description ? (0, s.jsx)("div", {
                    className: c.default.description,
                    children: (0, s.jsx)(i.EmojiText, {
                        text: t.description,
                        direction: "auto",
                        selectable: !0,
                        titlify: !0
                    })
                }) : null
            }

            function f(e) {
                var t = (0, d.useOptionalModelValues)(e.profilePicThumb, ["imgFull"]),
                    n = (0, d.useModelValues)(e.contact, ["id", "isMe"]);
                if (!t) return null;
                var o = (0, s.jsx)(a.DefaultIcon, {
                    id: n.id
                });
                return (0, s.jsx)("div", {
                    className: c.default.photo,
                    children: (0, s.jsx)(a.DetailImageCommon, {
                        profilePicThumb: t,
                        loader: !0,
                        defaultIcon: o,
                        profilePicThumbImg: t.imgFull,
                        spinnerClassName: c.default.spinner,
                        imgClassName: c.default.img,
                        theme: "business"
                    })
                })
            }
        },
        583362: (e, t, n) => {
            "use strict";
            var o = n(263026).default,
                a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(81109)),
                r = a(n(887757)),
                l = a(n(348926)),
                c = a(n(963038)),
                d = a(n(347999)),
                s = n(218953),
                u = n(147505),
                f = n(234459),
                p = n(497311),
                h = n(378776),
                g = n(972703),
                C = a(n(829723)),
                m = a(n(544978)),
                v = n(952991),
                _ = n(548360),
                x = n(667294),
                b = a(n(156720)),
                S = n(948752),
                j = n(785893),
                k = {
                    marginBottom: "ngycyvoj"
                };

            function y(e, t) {
                var n = e.onBack,
                    a = (0, S.useModelValues)(e.product, ["id", "catalogWid"]),
                    y = (0, x.useState)({}),
                    T = (0, c.default)(y, 2),
                    P = T[0],
                    E = T[1],
                    I = (0, x.useState)(""),
                    w = (0, c.default)(I, 2),
                    O = w[0],
                    A = w[1],
                    L = (0, x.useState)(""),
                    M = (0, c.default)(L, 2),
                    R = M[0],
                    N = M[1],
                    D = (0, x.useState)(!0),
                    B = (0, c.default)(D, 2),
                    H = B[0],
                    F = B[1],
                    W = function(e) {
                        var t, n;
                        return (null === (t = e.complianceInfo) || void 0 === t ? void 0 : t.countryCodeOrigin) === String(g.SyntheticCountryCode.NotApplicable) ? o.resolve((0, j.jsxs)("div", {
                            children: [(0, j.jsx)("div", {
                                className: (0, b.default)(k),
                                children: _.fbt._("Not Applicable", null, {
                                    hk: "2k1klN"
                                })
                            }), (0, j.jsx)("div", {
                                children: _.fbt._("Item is a service or non-physical good", null, {
                                    hk: "3uDBY7"
                                })
                            })]
                        })) : (0, p.getCountryName)(null === (n = e.complianceInfo) || void 0 === n ? void 0 : n.countryCodeOrigin, p.COUNTRY_FILTER_TYPE.META_RECOGNIZED)
                    };
                (0, x.useEffect)((function() {
                    function e() {
                        return (e = (0, l.default)(r.default.mark((function e() {
                            var t, n, o, i, l, c, u, f, g, C, m, v, _, x, b, S, j, k, y;
                            return r.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, s.CatalogCollection.findProduct({
                                            catalogWid: a.catalogWid,
                                            productId: a.id.toString(),
                                            productMsgMediaData: (0, h.unproxy)(a).productMsgMediaData,
                                            shouldFetchComplianceFields: !0
                                        });
                                    case 2:
                                        if (t = s.CatalogCollection.get(a.catalogWid), !(n = (0, d.default)(t, "catalog").productCollection.get(a.id))) {
                                            e.next = 18;
                                            break
                                        }
                                        return e.next = 7, W(n);
                                    case 7:
                                        return j = e.sent, e.next = 10, (0, p.getCountryName)(null === (o = n.complianceInfo) || void 0 === o || null === (i = o.importerAddress) || void 0 === i ? void 0 : i.countryCode, p.COUNTRY_FILTER_TYPE.META_RECOGNIZED);
                                    case 10:
                                        k = e.sent, y = {
                                            importerName: (null === (l = n.complianceInfo) || void 0 === l ? void 0 : l.importerName) || "",
                                            countryCodeOrigin: (null === (c = n.complianceInfo) || void 0 === c ? void 0 : c.countryCodeOrigin) || "",
                                            importerAddress: {
                                                street1: (null === (u = n.complianceInfo) || void 0 === u || null === (f = u.importerAddress) || void 0 === f ? void 0 : f.street1) || "",
                                                street2: (null === (g = n.complianceInfo) || void 0 === g || null === (C = g.importerAddress) || void 0 === C ? void 0 : C.street2) || "",
                                                city: (null === (m = n.complianceInfo) || void 0 === m || null === (v = m.importerAddress) || void 0 === v ? void 0 : v.city) || "",
                                                region: (null === (_ = n.complianceInfo) || void 0 === _ || null === (x = _.importerAddress) || void 0 === x ? void 0 : x.region) || "",
                                                postalCode: (null === (b = n.complianceInfo) || void 0 === b || null === (S = b.importerAddress) || void 0 === S ? void 0 : S.postalCode) || ""
                                            }
                                        }, E(y), F(!1), A(j), N(k), e.next = 19;
                                        break;
                                    case 18:
                                        __LOG__(3)`Unable to fetch compliance for product: ${a.id}`;
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }! function() {
                        e.apply(this, arguments)
                    }()
                }), []);
                var z = function() {
                        if (n) return n()
                    },
                    V = P.countryCodeOrigin,
                    U = P.importerName,
                    G = P.importerAddress;
                return (0, j.jsxs)(C.default, {
                    ref: t,
                    onDrop: z,
                    theme: "striped",
                    children: [(0, j.jsx)(v.DrawerHeader, {
                        testid: "drawer-title-profile",
                        title: _.fbt._("More information", null, {
                            hk: "2JHvi1"
                        }),
                        onBack: z,
                        type: v.DRAWER_HEADER_TYPE.SMALL
                    }), (0, j.jsx)(m.default, {
                        theme: H ? "center-content" : void 0,
                        children: H ? (0, j.jsx)(f.ComplianceInfoLoading, {}) : (0, j.jsxs)(f.ComplianceInfoGroup, {
                            children: [(0, j.jsx)(f.ComplianceInfoPrimitiveField, {
                                value: O,
                                label: _.fbt._("Country of Origin", null, {
                                    hk: "2yl0F7"
                                })
                            }), V && ![u.COMPLIANCE_INFO_CODES.INDIA, g.SyntheticCountryCode.NotApplicable].includes(V) ? (0, j.jsxs)(j.Fragment, {
                                children: [(0, j.jsx)(f.ComplianceInfoPrimitiveField, {
                                    value: U,
                                    label: _.fbt._("Name of Importer", null, {
                                        hk: "3gfW35"
                                    })
                                }), (0, j.jsx)(f.ComplianceInfoStructuralField, {
                                    valuesMap: (0, i.default)({
                                        importerAddressCountryNameOrigin: R
                                    }, G),
                                    keys: ["street1", "street2", "city", "region", "postalCode", "importerAddressCountryNameOrigin"],
                                    label: _.fbt._("Address of Importer", null, {
                                        hk: "Kxo8I"
                                    })
                                })]
                            }) : null]
                        })
                    })]
                }, "product-details-drawer")
            }
            var T = (0, x.forwardRef)(y);
            t.default = T
        },
        872146: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProductPostcodeChangeBanner = function(e) {
                var t = e.catalogWid,
                    n = e.postcodeChangeSuccess,
                    o = (0, f.useState)(null),
                    c = (0, r.default)(o, 2),
                    d = c[0],
                    s = c[1],
                    u = (0, p.default)(!0),
                    h = u.value,
                    m = u.set,
                    _ = (0, g.default)();
                if ((0, f.useEffect)((function() {
                        (function() {
                            var e = (0, i.default)(a.default.mark((function e() {
                                var n;
                                return a.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, l.default.getCypher(t);
                                        case 3:
                                            if (n = e.sent, !_.aborted) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 6:
                                            s(n), e.next = 12;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(0), __LOG__(4, !0, new Error, !0)`[direct-connection] Setting cypher failed in PDP ${e.t0}`, SEND_LOGS("direct-connection-setting-cypher-failed-in-pdp");
                                        case 12:
                                            if (!_.aborted) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 14:
                                            m(!1);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 9]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }), [t, m, _]), h || null == d) return null;
                return (0, C.jsx)(v, {
                    businessDirectConnection: d,
                    catalogWid: t,
                    postcodeChangeSuccess: n
                })
            };
            var a = o(n(887757)),
                i = o(n(348926)),
                r = o(n(963038)),
                l = o(n(619567)),
                c = o(n(522656)),
                d = n(628707),
                s = o(n(959418)),
                u = n(548360),
                f = n(667294),
                p = o(n(869973)),
                h = n(948752),
                g = o(n(788413)),
                C = n(785893);

            function m(e) {
                var t = e.catalogWid,
                    n = e.postcodeChangeSuccess,
                    o = e.postcode;
                return (0, C.jsx)(c.default, {
                    onClick: function() {
                        d.ModalManager.open((0, C.jsx)(s.default, {
                            existingPostcode: o,
                            catalogId: t,
                            onCancel: function() {
                                return d.ModalManager.close()
                            },
                            onSuccess: function() {
                                d.ModalManager.close(), n()
                            }
                        }))
                    },
                    children: u.fbt._("Change", null, {
                        hk: "3d8zl4"
                    })
                })
            }

            function v(e) {
                var t = e.businessDirectConnection,
                    n = e.catalogWid,
                    o = e.postcodeChangeSuccess,
                    a = (0, h.useModelValues)(t, ["postcode"]).postcode;
                return null == a ? null : (0, C.jsxs)(C.Fragment, {
                    children: [u.fbt._("Not available in {area-postcode}.", [u.fbt._param("area-postcode", a)], {
                        hk: "4tHAo0"
                    }), " ", (0, C.jsx)(m, {
                        postcode: a,
                        catalogWid: n,
                        postcodeChangeSuccess: o
                    })]
                })
            }
        },
        372568: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.isAvailable,
                    n = e.fetching,
                    o = (0, s.useContext)(d.DrawerContext),
                    g = (0, f.useModelValues)(e.product, ["productImageCollection", "productMsgMediaData", "catalogWid", "imageCdnUrl"]),
                    C = g.lazyloadProductImageCollection().toArray();
                return (0, p.jsx)("div", {
                    className: (0, u.default)(h),
                    children: (0, p.jsx)(i.default, {
                        images: C,
                        fetching: n,
                        onClick: t ? function(e, t) {
                            (0, l.logDetailImageClick)({
                                product: (0, c.unproxy)(g),
                                catalogContext: (0, r.getProductCatalogContext)(o)
                            });
                            var n = {
                                activeProductImage: t,
                                productImageCollection: g.lazyloadProductImageCollection(),
                                getZoomNode: function() {
                                    return e
                                },
                                product: g
                            };
                            a.Cmd.productImageViewerModal(n, (0, r.getProductCatalogSessionId)(o))
                        } : null,
                        renderFallback: !t,
                        fallbackMediaData: g.productMsgMediaData
                    })
                })
            };
            var a = n(896674),
                i = o(n(854671)),
                r = n(179677),
                l = n(647435),
                c = n(378776),
                d = n(445639),
                s = n(667294),
                u = o(n(156720)),
                f = n(948752),
                p = n(785893),
                h = {
                    width: "ln8gz9je"
                }
        },
        629786: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = o(n(746251)),
                i = n(704250),
                r = n(560),
                l = n(548360),
                c = n(667294),
                d = o(n(156720)),
                s = n(785893),
                u = {
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh"
                },
                f = {
                    marginTop: "qt60bha0"
                };

            function p(e, t) {
                var n = e.onPopupCancel,
                    o = e.onReport,
                    c = l.fbt._("Report this product?", null, {
                        hk: "3IDG0p"
                    }),
                    p = (0, s.jsx)("div", {
                        children: l.fbt._("We will review the product and if it does not meet our guidelines, it will be removed.", null, {
                            hk: "2CRdfl"
                        })
                    }, "ReportProductChoicePopup-desc"),
                    h = (0, s.jsx)(a.default, {
                        testid: "popup-controls-report",
                        type: "secondary",
                        onClick: function() {
                            return o()
                        },
                        children: l.fbt._("Report Product", null, {
                            hk: "3XLjyb"
                        })
                    }, "ReportProductChoicePopup-reportBtn"),
                    g = (0, s.jsx)(a.default, {
                        type: "secondary",
                        onClick: n,
                        children: l.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        })
                    }, 0),
                    C = (0, s.jsxs)("div", {
                        className: (0, d.default)(u),
                        children: [(0, s.jsx)("div", {
                            className: (0, d.default)(f),
                            children: h
                        }), (0, s.jsx)("div", {
                            className: (0, d.default)(f),
                            children: g
                        })]
                    });
                return (0, s.jsx)(i.HotKeys, {
                    ref: t,
                    handlers: {
                        escape: n
                    },
                    children: (0, s.jsx)(r.Modal, {
                        title: c,
                        actions: C,
                        children: p
                    })
                })
            }
            var h = (0, c.forwardRef)(p);
            t.default = h
        },
        451685: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = o(n(334575)),
                i = o(n(993913)),
                r = o(n(502205)),
                l = o(n(199842)),
                c = n(742649),
                d = n(341480),
                s = n(14391),
                u = o(n(383322)),
                f = n(647435),
                p = o(n(629786)),
                h = o(n(571534)),
                g = n(754360),
                C = n(324928),
                m = n(378776),
                v = n(422210),
                _ = n(548360),
                x = n(785893),
                b = function(e) {
                    (0, r.default)(n, e);
                    var t = (0, l.default)(n);

                    function n() {
                        var e;
                        (0, a.default)(this, n);
                        for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++) i[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(i)))._submitReason = function(t) {
                            var n = e.props.product;
                            return (0, s.reportProduct)(n.catalogWid, n.id.toString(), t)
                        }, e._handleDelete = function() {
                            e.end()
                        }, e._handleTellUsMoreSubmit = function(t) {
                            C.QPL.markerStart(g.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT), e._handleShowSubmittedToast(t)
                        }, e._handleReport = function() {
                            e.push((0, x.jsx)(h.default, {
                                onTellUsMoreSubmit: e._handleTellUsMoreSubmit,
                                onCancel: e._handleCancel
                            }), "none")
                        }, e._handlePopupCancel = function() {
                            e.end()
                        }, e._handleCancel = function() {
                            e.end()
                        }, e._handleReportSubmitted = function() {
                            e.end()
                        }, e._handleShowSubmittedToast = function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, d.genId)(),
                                o = e.props,
                                a = o.product,
                                i = o.sessionId,
                                r = e._submitReason(t),
                                l = new d.ActionType(_.fbt._("Reporting product", null, {
                                    hk: "4qusYv"
                                })),
                                s = r.then((function() {
                                    return (0, f.logReportProductSuccess)({
                                        product: (0, m.unproxy)(a),
                                        catalogSessionId: i,
                                        reason: t || ""
                                    }), C.QPL.markerEnd(g.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT, c.QuickLogActionType.SUCCESS), new d.ActionType(_.fbt._("Thanks for your feedback", null, {
                                        hk: "1vRsPv"
                                    }).toString() + ". " + _.fbt._("Your report has now been submitted.", null, {
                                        hk: "40tL3T"
                                    }).toString())
                                })).catch((function() {
                                    return (0, f.logReportProductFailure)({
                                        product: (0, m.unproxy)(a),
                                        catalogSessionId: i,
                                        reason: t || ""
                                    }), C.QPL.markerEnd(g.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT, c.QuickLogActionType.FAIL), __LOG__(3)`error submitting product report`, new d.ActionType(_.fbt._("Couldn't report product", null, {
                                        hk: "11JN2U"
                                    }), {
                                        actionText: _.fbt._("Retry", null, {
                                            hk: "2jS9Tg"
                                        }),
                                        actionHandler: function() {
                                            return e._handleShowSubmittedToast(t, n)
                                        }
                                    })
                                }));
                            return v.ToastManager.open((0, x.jsx)(d.ActionToast, {
                                id: n,
                                initialAction: l,
                                pendingAction: s
                            })), e._handleReportSubmitted(), r
                        }, e
                    }
                    return (0, i.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, x.jsx)(p.default, {
                                onReport: this._handleReport,
                                onPopupCancel: this._handlePopupCancel,
                                onCancel: this._handleCancel
                            }))
                        }
                    }]), n
                }(u.default);
            t.default = b
        },
        571534: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = o(n(963038)),
                i = o(n(746251)),
                r = n(704250),
                l = n(798532),
                c = n(236539),
                d = n(422210),
                s = n(560),
                u = n(548360),
                f = n(667294),
                p = o(n(156720)),
                h = n(785893),
                g = {
                    display: "p357zi0d"
                },
                C = {
                    position: "g0rxnol2",
                    flex: "a1m9qzja"
                },
                m = {
                    display: "l7jjieqr"
                },
                v = ["NO_MATCH", "SPAM", "ILLEGAL", "SCAM", "KNOCKOFF", "OTHER"];

            function _(e, t) {
                var n = e.onCancel,
                    o = e.onTellUsMoreSubmit,
                    _ = (0, f.useState)(null),
                    b = (0, a.default)(_, 2),
                    S = b[0],
                    j = b[1],
                    k = function() {
                        null == n || n()
                    },
                    y = u.fbt._("Tell us more", null, {
                        hk: "2fZHoO"
                    }),
                    T = (0, h.jsx)("div", {
                        className: (0, p.default)(g),
                        children: (0, h.jsx)("ul", {
                            className: (0, p.default)(C),
                            children: v.map((function(e) {
                                return (0, h.jsx)("li", {
                                    children: (0, h.jsx)(l.RadioWithLabel, {
                                        name: e,
                                        value: e,
                                        label: (0, h.jsx)(x, {
                                            reason: e
                                        }),
                                        checked: S === e,
                                        onChange: function() {
                                            j(e)
                                        }
                                    })
                                }, `ReportProductReasonPopup-${e}-option`)
                            }))
                        })
                    }),
                    P = (0, h.jsx)(i.default, {
                        testid: "popup-controls-submit",
                        type: "primary",
                        onClick: function() {
                            S ? o(S) : d.ToastManager.open((0, h.jsx)(c.Toast, {
                                msg: u.fbt._("Please select a reason.", null, {
                                    hk: "3UgUaa"
                                })
                            }))
                        },
                        disabled: !S,
                        children: u.fbt._("Submit", null, {
                            hk: "3npRPm"
                        })
                    }, "ReportProductReasonPopup-submitButton"),
                    E = (0, h.jsx)(i.default, {
                        type: "secondary",
                        testid: "popup-controls-cancel",
                        onClick: k,
                        children: u.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        })
                    }, "ReportProductReasonPopup-cancelButton"),
                    I = (0, h.jsxs)("div", {
                        className: (0, p.default)(m),
                        children: [E, P]
                    });
                return (0, h.jsx)(r.HotKeys, {
                    ref: t,
                    handlers: {
                        escape: k
                    },
                    children: (0, h.jsx)(s.Modal, {
                        title: y,
                        actions: I,
                        children: T
                    })
                })
            }

            function x(e) {
                switch (e.reason) {
                    case "NO_MATCH":
                        return u.fbt._("The pictures or descriptions don't match the item", null, {
                            hk: "2ifaot"
                        });
                    case "SPAM":
                        return u.fbt._("This is spam", null, {
                            hk: "hjxQJ"
                        });
                    case "ILLEGAL":
                        return u.fbt._("This is abusive, harmful or illegal", null, {
                            hk: "3xz9jr"
                        });
                    case "SCAM":
                        return u.fbt._("This is fraud or a scam", null, {
                            hk: "2iFRd8"
                        });
                    case "KNOCKOFF":
                        return u.fbt._("This appears to be a knockoff or counterfeit item", null, {
                            hk: "UiFcs"
                        });
                    case "OTHER":
                        return u.fbt._("Other", null, {
                            hk: "1Kn4LY"
                        })
                }
            }
            var b = (0, f.forwardRef)(_);
            t.default = b
        },
        707021: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.isEditMode,
                    n = e.catalog,
                    o = e.subtitle,
                    h = e.hideIncompleteRows,
                    g = e.productsToShow,
                    C = e.businessProfile,
                    m = (0, p.jsx)(i.default, {
                        onViewShopClick: function() {
                            (0, u.logShopsManagementEvent)(f.default.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_VIEW_SHOPS_FROM_EDIT_BIZ_PROFILE)
                        },
                        onCommerceManagerClick: function() {
                            (0, u.logShopsManagementEvent)(f.default.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_COMMERCE_MANAGER_FROM_EDIT_BIZ_PROFILE)
                        },
                        onCancelClick: function() {
                            (0, u.logShopsManagementEvent)(f.default.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_CANCEL_FROM_EDIT_BIZ_PROFILE)
                        }
                    });
                return (0, p.jsx)(s.default, {
                    onProductDetail: function(e) {
                        if (t) c.ModalManager.open(m), (0, u.logShopsManagementEvent)(f.default.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_SHOPS_PRODUCT_PREVIEW_TILE, {
                            shouldLogJid: !1
                        });
                        else {
                            var n = new URL((0, a.default)(e.url, "product.url"), `https://${d.HOSTNAME.FACEBOOK}`);
                            l.default.open(String(n))
                        }
                    },
                    onProductCatalog: function() {
                        t ? (c.ModalManager.open(m), (0, u.logShopsManagementEvent)(f.default.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_MANAGE_SHOPS)) : (0, r.goToShop)(C)
                    },
                    catalog: n,
                    subtitle: o,
                    hideIncompleteRows: h,
                    productsToShow: g,
                    showShopsLogo: !0
                })
            };
            var a = o(n(347999)),
                i = o(n(179757)),
                r = n(219450),
                l = o(n(830226)),
                c = n(628707),
                d = n(426413),
                s = o(n(597738)),
                u = n(552175),
                f = o(n(229677)),
                p = n(785893)
        },
        911558: (e, t, n) => {
            "use strict";
            var o = n(263026).default,
                a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleCollectionAppeal = function() {
                return I.apply(this, arguments)
            }, t.handleCollectionDelete = function(e, t, n) {
                return new o((function(o, a) {
                    h.ModalManager.open((0, y.jsx)(j.ConfirmPopup, {
                        title: k.fbt._("Delete Collection", null, {
                            hk: "2y3JZ4"
                        }),
                        okText: k.fbt._("OK", null, {
                            hk: "2KEeHb"
                        }),
                        cancelText: k.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: function() {
                            h.ModalManager.close(),
                                function() {
                                    return E.apply(this, arguments)
                                }(e, t, n).then((function(e) {
                                    return o(e)
                                })).catch((function(e) {
                                    return a(e)
                                }))
                        },
                        onCancel: function() {
                            h.ModalManager.close(), o(!1)
                        },
                        children: (0, y.jsx)("div", {
                            children: k.fbt._("When you delete this collection, items in the collection will not be deleted.", null, {
                                hk: "192Jcv"
                            })
                        })
                    }))
                }))
            }, t.handleCollectionReorder = function() {
                return A.apply(this, arguments)
            }, t.handleCollectionSave = function(e, t, n, o, a, i) {
                var r;
                x.QPL.markerPoint(_.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_start"), r = t ? (0, v.editCollection)(t.id.toString() || "", n === t.name ? void 0 : n, !1, o.map((function(e) {
                    return e.id.toString()
                })), a.map((function(e) {
                    return e.id.toString()
                })), i.session.toString()).then((function(i) {
                    return x.QPL.markerPoint(_.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_end"), t.name = n, t.reviewStatus = i.reviewStatus, e.collections.replaceId(t.id, i.id), 0 === o.length && 0 === a.length || (t.productCollection.reset(), t.afterCursor = void 0, e.collections.reset(), e.collections.afterCursor = ""), !0
                })) : (0, v.createCollection)(n, o.map((function(e) {
                    return e.id.toString()
                })), i.session.toString()).then((function(t) {
                    return x.QPL.markerPoint(_.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_end"), (0, m.logCollectionCreated)({
                        catalogContext: i,
                        collectionId: t.id,
                        productCount: o.length
                    }), e.collections.reset(), e.collections.afterCursor = "", !0
                }));
                return r.catch((function(e) {
                    var t = function(e) {
                            S.ToastManager.open((0, y.jsx)(b.Toast, {
                                msg: e,
                                id: (0, b.genId)("catalog_save_collection_failed")
                            }))
                        },
                        n = k.fbt._("Failed to save collection", null, {
                            hk: "3Chwhp"
                        });
                    if ("not-acceptable" === e.text) return "products" === e.fieldName && "duplicate" === e.fieldReason && (n = k.fbt._("You already have a collection with this group of items. Add or delete items to make a different group.", null, {
                        hk: "1fZXaY"
                    })), "collection" === e.fieldName && "empty" === e.fieldReason && (n = k.fbt._("A collection must have at least one item in it", null, {
                        hk: "39rLHR"
                    })), t(n), !1;
                    throw __LOG__(4, !0, new Error, !0)`Failed to save collection, error: ${e}`, SEND_LOGS("Saving collection failed"), t(n), e
                }))
            }, t.handleProductDelete = function(e, t, n, a) {
                return (0, g.logDeleteProductClick)(t, 1, n), new o((function(o, i) {
                    h.ModalManager.open((0, y.jsx)(j.ConfirmPopup, {
                        title: k.fbt._("Delete Item", null, {
                            hk: "20DBg1"
                        }),
                        okText: k.fbt._("OK", null, {
                            hk: "2KEeHb"
                        }),
                        cancelText: k.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: function() {
                            h.ModalManager.close(), x.QPL.markerStart(_.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, {
                                    annotations: {
                                        string: {
                                            EntryPoint: a
                                        }
                                    }
                                }),
                                function() {
                                    return T.apply(this, arguments)
                                }(e, t, n).then((function(e) {
                                    x.QPL.markerEnd(_.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, d.QuickLogActionType.SUCCESS), o(e)
                                })).catch((function(e) {
                                    x.QPL.markerEnd(_.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, d.QuickLogActionType.FAIL), i(e)
                                }))
                        },
                        onCancel: function() {
                            h.ModalManager.close(), o(!1)
                        },
                        children: (0, y.jsx)("div", {
                            children: k.fbt._("Are you sure you want to delete this item from your catalog?", null, {
                                hk: "2WwNSA"
                            })
                        })
                    }))
                }))
            }, t.handleProductVisibilityChange = function(e, t, n, a) {
                var i = t.id.toString(),
                    r = !t.isHidden;
                r ? (0, g.logCatalogProductHideClick)(i, n) : (0, g.logCatalogProductShowClick)(i, n);
                return new o((function(o, l) {
                    var c = t.isHidden ? k.fbt._("Show item in your catalog?", null, {
                        hk: "VfDKM"
                    }) : k.fbt._("Hide item in your catalog?", null, {
                        hk: "1KmslI"
                    });
                    h.ModalManager.open((0, y.jsx)(j.ConfirmPopup, {
                        okText: k.fbt._("OK", null, {
                            hk: "2KEeHb"
                        }),
                        cancelText: k.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: function() {
                            x.QPL.markerStart(_.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, {
                                    annotations: {
                                        string: {
                                            EntryPoint: a
                                        }
                                    }
                                }), h.ModalManager.close(),
                                function() {
                                    return P.apply(this, arguments)
                                }(e, t).then((function() {
                                    x.QPL.markerEnd(_.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, d.QuickLogActionType.SUCCESS), r ? (0, g.logCatalogProductHideSuccess)(i, n) : (0, g.logCatalogProductShowSuccess)(i, n), o(!0)
                                })).catch((function(e) {
                                    x.QPL.markerEnd(_.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, d.QuickLogActionType.FAIL), r ? (0, g.logCatalogProductHideFailed)(i, n) : (0, g.logCatalogProductShowFailed)(i, n), l(e)
                                }))
                        },
                        onCancel: function() {
                            h.ModalManager.close(), r ? (0, g.logCatalogProductHideCancelled)(i, n) : (0, g.logCatalogProductShowCancelled)(i, n), o(!1)
                        },
                        children: (0, y.jsx)("div", {
                            children: c
                        })
                    }))
                }))
            };
            var i = a(n(319)),
                r = a(n(887757)),
                l = a(n(348926)),
                c = n(63520),
                d = n(742649),
                s = n(104010),
                u = n(14391),
                f = n(946753),
                p = n(386046),
                h = n(628707),
                g = n(647435),
                C = n(926464),
                m = n(338380),
                v = n(189147),
                _ = n(754360),
                x = n(324928),
                b = n(236539),
                S = n(422210),
                j = n(404186),
                k = n(548360),
                y = n(785893);

            function T() {
                return (T = (0, l.default)(r.default.mark((function e(t, n, o) {
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, u.deleteProducts)([n.id.toString()]);
                            case 3:
                                return (0, g.logDeleteProductSuccess)(n, 1, o), t.productCollection.evictImagesFromCache(n.id.toString()), t.productCollection.remove(n.id.toString()), t.collections && t.collections.forEach((function(e) {
                                    return e.productCollection.remove(n.id.toString())
                                })), e.abrupt("return", !0);
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(0), e.abrupt("return", (0, c.filteredCatch)(s.ServerStatusCodeError, (function(e) {
                                    return (0, g.logDeleteProductFailed)(n, 1, o, e.statusCode), S.ToastManager.open((0, y.jsx)(b.Toast, {
                                        msg: k.fbt._("Failed to delete product", null, {
                                            hk: "18E03X"
                                        }),
                                        id: (0, b.genId)("catalog_delete_product_failed")
                                    })), !1
                                }))(e.t0));
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 10]
                    ])
                })))).apply(this, arguments)
            }

            function P() {
                return (P = (0, l.default)(r.default.mark((function e(t, n) {
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, f.productVisibilitySet)([{
                                    productId: n.id.toString(),
                                    isHidden: !n.isHidden
                                }]);
                            case 2:
                                n.isHidden = !n.isHidden, [t.productCollection].concat((0, i.default)((t.collections || []).map((function(e) {
                                    return e.productCollection
                                })))).forEach((function(e) {
                                    var t = e.get(n.id);
                                    t && (t.isHidden = n.isHidden)
                                }));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function E() {
                return (E = (0, l.default)(r.default.mark((function e(t, n, o) {
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, v.deleteCollection)(n.id.toString(), o.session.sessionId.toString());
                            case 3:
                                return t.collections.remove(n.id.toString()), (0, m.logCollectionDeleted)({
                                    catalogContext: o,
                                    collectionId: n.id
                                }), e.abrupt("return", !0);
                            case 8:
                                return e.prev = 8, e.t0 = e.catch(0), e.abrupt("return", (0, c.filteredCatch)(s.ServerStatusCodeError, (function(e) {
                                    return __LOG__(4, !0, new Error, !0)`Failed to delete collection, error: ${e}`, SEND_LOGS("Deleteing collection failed"), S.ToastManager.open((0, y.jsx)(b.Toast, {
                                        msg: k.fbt._("Failed to delete collection", null, {
                                            hk: "S7UrR"
                                        }),
                                        id: (0, b.genId)("catalog_delete_product_failed")
                                    })), !1
                                }))(e.t0));
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 8]
                    ])
                })))).apply(this, arguments)
            }

            function I() {
                return (I = (0, l.default)(r.default.mark((function e(t, n) {
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return x.QPL.markerPoint(_.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, "datasource_start"), e.next = 3, (0, v.appealCollection)(t.id.toString(), n);
                            case 3:
                                t.set({
                                    canAppeal: !1,
                                    reviewStatus: C.PRODUCT_REVIEW_STATUS.PENDING
                                }), x.QPL.markerPoint(_.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, "datasource_end");
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var w = {
                    OUT_OF_SYNC: {
                        title: k.fbt._("Changes cannot be saved", null, {
                            hk: "2N3tQ7"
                        }),
                        description: k.fbt._("Please refresh and try again.", null, {
                            hk: "3gfRqz"
                        }),
                        okText: k.fbt._("Reload", null, {
                            hk: "3hzNTy"
                        })
                    },
                    SERVER_ERROR: {
                        title: k.fbt._("Error", null, {
                            hk: "1jfaqb"
                        }),
                        description: k.fbt._("Something went wrong. Please try again.", null, {
                            hk: "CZwf"
                        }),
                        okText: k.fbt._("OK", null, {
                            hk: "2jkNuT"
                        })
                    },
                    HTTP_NETWORK_ERROR: {
                        title: k.fbt._("No internet connection", null, {
                            hk: "4psTpe"
                        }),
                        description: k.fbt._("Check your internet connection and try again.", null, {
                            hk: "2QcT2T"
                        }),
                        okText: k.fbt._("OK", null, {
                            hk: "3si9C7"
                        })
                    }
                },
                O = function(e) {
                    return e instanceof p.HttpNetworkError ? w.HTTP_NETWORK_ERROR : e instanceof v.CollectionReorderError ? w.OUT_OF_SYNC : w.SERVER_ERROR
                };

            function A() {
                return (A = (0, l.default)(r.default.mark((function e(t, n) {
                    var a, i, l, c, d, s;
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, v.reorderCollection)(t);
                            case 3:
                                return (a = e.sent) && (0, m.logCollectionReorder)({
                                    catalogContext: n,
                                    movesCount: t.length
                                }), e.abrupt("return", a);
                            case 8:
                                return e.prev = 8, e.t0 = e.catch(0), i = e.t0 instanceof p.HttpNetworkError, l = O(e.t0), c = l.title, d = l.description, s = l.okText, e.abrupt("return", new o((function(t, n) {
                                    h.ModalManager.open((0, y.jsx)(j.ConfirmPopup, {
                                        title: c,
                                        okText: s,
                                        onOK: function() {
                                            h.ModalManager.close(), i ? n(e.t0) : t(!1)
                                        },
                                        children: (0, y.jsx)("div", {
                                            children: d
                                        })
                                    }), {
                                        blockClose: !0
                                    })
                                })));
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 8]
                    ])
                })))).apply(this, arguments)
            }
        },
        929380: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onClick,
                    n = e.testid,
                    o = void 0 === n ? "add-item" : n,
                    s = (0, l.default)(d.addItemButton, "default" === e.theme && d.themeDefault, "in-list" === e.theme && d.themeInList, "collections" === e.theme && d.themeCollections),
                    u = (0, c.jsx)(i.default, {
                        title: r.fbt._("Add new item", null, {
                            hk: "2Tc6p3"
                        }),
                        onClick: function() {},
                        xstyle: d.addIcon,
                        children: (0, c.jsx)(c.Fragment, {})
                    });
                return (0, c.jsx)(a.default, {
                    theme: "add-item",
                    image: u,
                    customImage: !0,
                    primary: e.title || r.fbt._("Add new item", null, {
                        hk: "2Tc6p3"
                    }),
                    className: s,
                    onClick: t,
                    idle: e.idle,
                    testid: o
                })
            };
            var a = o(n(799328)),
                i = o(n(83938)),
                r = n(548360),
                l = o(n(156720)),
                c = n(785893),
                d = {
                    addIcon: {
                        position: "g0rxnol2",
                        width: "o22r6p4i",
                        height: "dng4fqht",
                        borderTop: "btoh1681",
                        borderEnd: "sngpozrj",
                        borderBottom: "c2eze1zb",
                        borderStart: "bd2x2sk5",
                        borderTopStartRadius: "l147y7tb",
                        borderTopEndRadius: "mjscftrx",
                        borderBottomEndRadius: "fqwk616h",
                        borderBottomStartRadius: "pkud3j3x",
                        ":focus": {
                            borderTopStartRadius: "mmjxyicr",
                            borderTopEndRadius: "r1jx4bdh",
                            borderBottomEndRadius: "f9yclydc",
                            borderBottomStartRadius: "mtzt60z0",
                            boxShadow: "esbo3we0"
                        },
                        "::before": {
                            position: "jiaumjzp",
                            top: "iu8zqbur",
                            left: "c4kjmepz",
                            display: "chh99fau",
                            width: "ln1ej6zg",
                            height: "i0a739jv",
                            content: "ckfn5qle",
                            backgroundColor: "t4c1fkc8",
                            transform: "bsbo06yw"
                        },
                        "::after": {
                            position: "tkubpkrc",
                            top: "khfyavfg",
                            left: "nly7wueh",
                            display: "l1wvjj35",
                            width: "dbiwaw4z",
                            height: "l9a7srmz",
                            content: "lw9p9708",
                            backgroundColor: "sadoqatt",
                            transform: "n2obx7p9"
                        }
                    },
                    addItemButton: {
                        borderTop: "q4zabkcz"
                    },
                    themeDefault: {
                        paddingTop: "pxvlsfnc",
                        paddingEnd: "f9ovudaz",
                        paddingBottom: "n3bptxsn",
                        paddingStart: "gx1rr48f",
                        marginTop: "dj1c3cmq",
                        marginEnd: "jnwc1y2a",
                        marginBottom: "mpdn4nr2",
                        marginStart: "svoq16ka"
                    },
                    themeInList: {
                        paddingTop: "fbgy3m38",
                        paddingEnd: "kyc7k6mt",
                        paddingBottom: "oq31bsqd",
                        paddingStart: "f78eapp6"
                    },
                    themeCollections: {
                        paddingTop: "fbgy3m38",
                        paddingEnd: "kyc7k6mt",
                        paddingBottom: "oq31bsqd",
                        paddingStart: "f78eapp6",
                        marginBottom: "inogquss",
                        borderTop: "q4zabkcz",
                        borderBottom: "qmxv8cnq"
                    }
                }
        },
        224247: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CollectionIntegrityBanner = function(e) {
                var t = e.collection,
                    n = e.onEditCollection,
                    o = function() {
                        null == n || n(t)
                    };
                switch (t.reviewStatus) {
                    case s.PRODUCT_REVIEW_STATUS.PENDING:
                        return (0, g.jsxs)("div", {
                            className: (0, h.default)(C.pendingBanner),
                            children: [p.fbt._("This collection is being reviewed. Once it's approved, your customers will see it in your catalog.", null, {
                                hk: "47RxvH"
                            }), (0, g.jsx)("div", {
                                className: (0, h.default)(C.iconContainerPending),
                                children: (0, g.jsx)(l.InfoIcon, {})
                            })]
                        });
                    case s.PRODUCT_REVIEW_STATUS.REJECTED:
                        return (0, i.canAppealCollections)() ? (0, g.jsx)(_, {
                            collection: t,
                            onRename: o,
                            onAppeal: function() {
                                c.ModalManager.open((0, g.jsx)(a.default, {
                                    collection: t
                                }))
                            }
                        }) : (0, g.jsx)(v, {
                            onRename: o
                        });
                    default:
                        return null
                }
            }, t.getCollectionIntegrityHeight = function(e) {
                return (0, i.canAppealCollections)() && e.reviewStatus === s.PRODUCT_REVIEW_STATUS.REJECTED ? 2 * d.PRODUCT_LIST_ITEM_HEIGHT + 10 : d.PRODUCT_LIST_ITEM_HEIGHT + 10
            };
            var a = o(n(545354)),
                i = n(894995),
                r = o(n(522656)),
                l = n(67497),
                c = n(628707),
                d = n(902011),
                s = n(926464),
                u = n(362563),
                f = n(397065),
                p = n(548360),
                h = o(n(156720)),
                g = n(785893),
                C = {
                    iconContainerRejected: {
                        position: "lhggkp7q",
                        end: "h223g3sc",
                        color: "mvxzr2tb",
                        wordBreak: "cw3vfol9"
                    },
                    iconContainerRejectedWithAppeal: {
                        end: "ku3lw4j3"
                    },
                    rejectedBanner: {
                        display: "p357zi0d",
                        alignItems: "gndfcl4n",
                        height: "m9lpqg3r",
                        minHeight: "gc15jzxb",
                        paddingTop: "i5tg98hk",
                        paddingEnd: "rmnzjp8r",
                        paddingBottom: "przvwfww",
                        paddingStart: "khscay3k",
                        marginTop: "o9i7y497",
                        marginBottom: "brac1wpa",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        fontSize: "dsh4tgtl",
                        lineHeight: "erpdyial",
                        color: "e7al1772",
                        backgroundColor: "io9pg0pp"
                    },
                    rejectedBannerWithAppeal: {
                        display: "p357zi0d",
                        flexDirection: "f8m0rgwh",
                        justifyContent: "ac2vgrno",
                        height: "g4tbm4ed",
                        minHeight: "gc15jzxb",
                        paddingTop: "i5tg98hk",
                        paddingEnd: "sjajxv0r",
                        paddingBottom: "przvwfww",
                        paddingStart: "khscay3k",
                        marginTop: "o9i7y497",
                        marginBottom: "brac1wpa",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        fontSize: "dsh4tgtl",
                        lineHeight: "erpdyial",
                        color: "e7al1772",
                        backgroundColor: "io9pg0pp"
                    },
                    rejectedBannerDarkBackground: {
                        backgroundColor: "og7unhan"
                    },
                    pendingBanner: {
                        display: "p357zi0d",
                        alignItems: "gndfcl4n",
                        height: "m9lpqg3r",
                        minHeight: "gc15jzxb",
                        paddingTop: "i5tg98hk",
                        paddingEnd: "rmnzjp8r",
                        paddingBottom: "przvwfww",
                        paddingStart: "khscay3k",
                        marginTop: "o9i7y497",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        fontSize: "dsh4tgtl",
                        lineHeight: "erpdyial",
                        color: "e7al1772",
                        wordBreak: "cw3vfol9",
                        backgroundColor: "a5fn8qve"
                    },
                    iconContainerPending: {
                        position: "lhggkp7q",
                        end: "h223g3sc"
                    }
                };

            function m(e) {
                return (0, g.jsx)("div", {
                    className: (0, h.default)(C.iconContainerRejected, e.withAppeal && C.iconContainerRejectedWithAppeal),
                    children: (0, g.jsx)(l.InfoIcon, {})
                })
            }

            function v(e) {
                var t = e.onRename,
                    n = (0, f.useIsDarkTheme)();
                return (0, g.jsxs)("div", {
                    className: (0, h.default)(C.rejectedBanner, n && C.rejectedBannerDarkBackground),
                    children: [p.fbt._("This collection wasn't approved because it doesn't follow our guidelines.", null, {
                        hk: "1321OC"
                    }), (0, g.jsx)(r.default, {
                        onClick: t,
                        children: p.fbt._("Rename", null, {
                            hk: "2U6ctb"
                        })
                    }), (0, g.jsx)(m, {
                        withAppeal: !1
                    })]
                })
            }

            function _(e) {
                var t = e.collection,
                    n = e.onRename,
                    o = e.onAppeal,
                    a = (t.rejectReason || "other_violation").toLowerCase(),
                    i = (0, u.getRejectedCollectionCopy)(a, t.commerceUrl),
                    l = (0, f.useIsDarkTheme)(),
                    c = (0, g.jsx)(r.default, {
                        onClick: n,
                        children: p.fbt._("rename the collection", null, {
                            hk: "2j5eIB"
                        })
                    });
                if (t.canAppeal) {
                    var d = (0, g.jsx)(r.default, {
                            onClick: o,
                            children: p.fbt._("request another review", null, {
                                hk: "2BSEoy"
                            })
                        }),
                        s = p.fbt._("You can {rename_collection_link} or {request_another_review_link}.", [p.fbt._param("rename_collection_link", c), p.fbt._param("request_another_review_link", d)], {
                            hk: "49Nar9"
                        });
                    return (0, g.jsxs)("div", {
                        className: (0, h.default)(C.rejectedBannerWithAppeal, l && C.rejectedBannerDarkBackground),
                        children: [i.first, (0, g.jsx)("br", {}), s, (0, g.jsx)(m, {
                            withAppeal: !0
                        })]
                    })
                }
                var v = p.fbt._("You can {rename_collection_link}.", [p.fbt._param("rename_collection_link", c)], {
                    hk: "33lrOJ"
                });
                return (0, g.jsxs)("div", {
                    className: (0, h.default)(C.rejectedBannerWithAppeal, l && C.rejectedBannerDarkBackground),
                    children: [i.second, (0, g.jsx)("br", {}), v, (0, g.jsx)(m, {
                        withAppeal: !0
                    })]
                })
            }
        },
        305010: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CatalogCategoriesBanner = function(e) {
                var t = e.catalog,
                    n = (0, d.useModelValues)(t, ["id", "hasCatalogCategories"]),
                    o = n.id,
                    f = n.hasCatalogCategories;
                if ((0, c.useEffect)((function() {
                        null == f && (0, a.queryCatalogHasCategories)(o).then((function(e) {
                            t.set({
                                hasCatalogCategories: e
                            })
                        }))
                    }), [f, o, t]), !1 === f || null == f) return null;
                return (0, s.jsx)(i.TextDiv, {
                    xstyle: [u.banner, r.uiPadding.all16],
                    size: "13",
                    color: "dark",
                    children: l.fbt._("Use WhatsApp on your phone to browse product categories.", null, {
                        hk: "7z4dS"
                    })
                })
            };
            var a = n(946753),
                i = n(558288),
                r = n(71867),
                l = n(548360),
                c = n(667294),
                d = (o(n(156720)), n(948752)),
                s = n(785893),
                u = {
                    banner: {
                        backgroundColor: "se2m7z6i",
                        display: "p357zi0d",
                        alignItems: "gndfcl4n",
                        borderBottom: "daad4uqs"
                    }
                }
        },
        959418: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, o = (0, g.default)(),
                    _ = (0, h.useState)({
                        state: m.NOT_STARTED
                    }),
                    x = (0, r.default)(_, 2),
                    b = x[0],
                    S = x[1],
                    j = (0, h.useState)(e.existingPostcode),
                    k = (0, r.default)(j, 2),
                    y = k[0],
                    T = k[1],
                    P = e.existingPostcode === y,
                    E = function() {
                        var t = (0, i.default)(a.default.mark((function t() {
                            var n;
                            return a.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if ("string" == typeof y) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return S({
                                            state: m.IN_PROGRESS
                                        }), t.prev = 3, t.next = 6, (0, l.verifyPostcode)(e.catalogId, y);
                                    case 6:
                                        n = t.sent, o.aborted || S({
                                            state: m.COMPLETED,
                                            data: n
                                        }), "success" === (null == n ? void 0 : n.resultCode) && e.onSuccess(), t.next = 17;
                                        break;
                                    case 11:
                                        if (t.prev = 11, t.t0 = t.catch(3), __LOG__(4, !0, new Error, !0)`[direct-connection] Updating postcode failed ${t.t0}`, SEND_LOGS("[direct-connection] Updating postcode failed"), !o.aborted) {
                                            t.next = 16;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 16:
                                        S({
                                            state: m.FAILED
                                        });
                                    case 17:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [3, 11]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    I = (0, h.useCallback)((function() {
                        return S({
                            state: m.NOT_STARTED
                        })
                    }), []),
                    w = "unserviceable_location" === (null === (t = b.data) || void 0 === t ? void 0 : t.resultCode),
                    O = null,
                    A = p.fbt._("Enter a valid Pincode.", null, {
                        hk: "21I4U6"
                    });
                ("invalid_postcode" === (null === (n = b.data) || void 0 === n ? void 0 : n.resultCode) || "string" != typeof y || 0 === y.length || 0 !== y.search("^[0-9]{6}$")) && (O = A);
                var L = b.state === m.IN_PROGRESS,
                    M = L || null != O || P,
                    R = function() {
                        M || (w ? I() : E())
                    };
                return (0, C.jsx)(f.ConfirmPopup, {
                    onOK: R,
                    title: w ? null : p.fbt._("Change Pincode", null, {
                        hk: "3R9hJZ"
                    }),
                    okDisabled: M,
                    okSpinner: L,
                    okText: w ? p.fbt._("OK", null, {
                        hk: "ReE7S"
                    }) : p.fbt._("CONTINUE", null, {
                        hk: "3HQEmh"
                    }),
                    onCancel: w ? null : e.onCancel,
                    cancelDisabled: L,
                    children: w ? (0, C.jsx)(u.Text, {
                        as: "p",
                        testid: "catalog_postcode_change_modal__unservicable-alert",
                        children: p.fbt._("JioMart doesn't have items available in that area. You can try a different Pincode.", null, {
                            hk: "40eEp7"
                        })
                    }) : (0, C.jsxs)(C.Fragment, {
                        children: [(0, C.jsx)(u.Text, {
                            as: "p",
                            xstyle: v.infoText,
                            children: p.fbt._("To see JioMart items available in a different area, enter the area's Pincode.", null, {
                                hk: "3u35ZR"
                            })
                        }), (0, C.jsx)(s.RichTextField, {
                            legacyImplementation: !0,
                            testid: "catalog_postcode_change_modal__input",
                            onChange: function(e) {
                                I(), T(e)
                            },
                            value: y,
                            managed: !0,
                            editable: !L,
                            managedError: !0,
                            selectOnMount: !0,
                            focusOnMount: !0,
                            error: O,
                            onEnter: function() {
                                R()
                            }
                        }), (0, C.jsxs)(u.Text, {
                            as: "p",
                            theme: "muted",
                            xstyle: v.privacyText,
                            children: [p.fbt._("By continuing, you agree to share your Pincode and phone number with JioMart. Only JioMart can see your Pincode.", null, {
                                hk: "2XMhtN"
                            }), " ", (0, C.jsx)(c.ExternalLink, {
                                href: (0, d.getJioMartPostcodeChangeLearnMoreLink)(),
                                children: p.fbt._("Learn More", null, {
                                    hk: "27Rbeo"
                                })
                            })]
                        })]
                    })
                })
            };
            var a = o(n(887757)),
                i = o(n(348926)),
                r = o(n(963038)),
                l = n(885952),
                c = n(192070),
                d = n(212390),
                s = n(983557),
                u = n(558288),
                f = n(404186),
                p = n(548360),
                h = n(667294),
                g = (o(n(156720)), o(n(788413))),
                C = n(785893),
                m = n(76672).Mirrored(["NOT_STARTED", "COMPLETED", "FAILED", "IN_PROGRESS"]),
                v = {
                    infoText: {
                        fontSize: "enbbiyaj",
                        lineHeight: "erpdyial",
                        marginBottom: "t4zgqcuo"
                    },
                    privacyText: {
                        fontSize: "f8jlpxt4",
                        lineHeight: "q5jc98e4",
                        marginTop: "iy2cu22y"
                    }
                }
        },
        74929: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CatalogPostcodeMenu = function(e) {
                var t = (0, S.useModelValues)(e.businessDirectConnection, ["postcode", "postcodeLocationName", "postcodeSetByUser"]),
                    n = t.postcode,
                    o = t.postcodeLocationName,
                    P = t.postcodeSetByUser,
                    E = (0, S.useModelValues)(e.catalog, ["id", "hasCatalogCategories"]),
                    I = E.id,
                    w = E.hasCatalogCategories,
                    O = !0 === P,
                    A = (0, x.useState)(!1),
                    L = (0, i.default)(A, 2),
                    M = L[0],
                    R = L[1],
                    N = function() {
                        f.ModalManager.close(), R(!1)
                    },
                    D = function() {
                        f.ModalManager.open((0, y.jsx)(p.default, {
                            existingPostcode: null != n ? n : "",
                            catalogId: I,
                            onCancel: N,
                            onSuccess: function() {
                                N(), e.postcodeChangeSuccess()
                            }
                        })), R(!0)
                    },
                    B = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        (0, r.delayMs)(e ? h.CATALOG_POSTCODE_CHANGE_MODAL_OPEN_DELAY : 0).then(D)
                    },
                    H = (0, x.useState)(null),
                    F = (0, i.default)(H, 2),
                    W = F[0],
                    z = F[1],
                    V = (0, x.useRef)(null),
                    U = (0, x.useRef)(null),
                    G = (0, x.useCallback)((function() {
                        return z(null)
                    }), []),
                    q = (0, k.useTimeout)(G, h.CATALOG_POSTCODE_MENU_TOOLTIP_DURATION),
                    Y = (0, i.default)(q, 1)[0],
                    K = (0, x.useCallback)((function() {
                        var e = U.current ? 3 * U.current.offsetWidth / 4 : null;
                        z({
                            menu: (0, y.jsx)("div", {
                                style: "number" == typeof e ? {
                                    maxWidth: `${e}px`
                                } : null,
                                children: (0, y.jsx)(g.Text, {
                                    as: "p",
                                    children: _.fbt._("Click to change pincode to see items available in your area", null, {
                                        hk: "2p5qlf"
                                    })
                                })
                            }),
                            anchor: V.current,
                            dirY: s.DirY.TOP,
                            type: s.MenuType.Tooltip,
                            horizontal: !0,
                            tooltipColorScheme: s.TooltipColorScheme.Highlight
                        })
                    }), []),
                    Z = (0, k.useTimeout)((function() {
                        V.current ? (K(), Y()) : __LOG__(3)`[direct-connection] change postcode tooltip is not shown`
                    }), h.CATALOG_POSTCODE_MENU_TOOLTIP_DELAY),
                    X = (0, i.default)(Z, 1)[0];
                (0, x.useEffect)((function() {
                    var e, t;
                    O || ((0, d.editPostcodeByDefaultEnabled)() ? function() {
                        if ((0, v.getPostcodeAutoOpenChangePostcodeDone)()) return !1;
                        var e = (0, v.getPostcodeAutoOpenChangePostcodeCount)();
                        if ("number" == typeof e && e >= 2) return !1;
                        return !0
                    }() && (B(!0), (0, v.setPostcodeAutoOpenChangePostcodeDone)(!0), t = (0, v.getPostcodeAutoOpenChangePostcodeCount)(), (0, v.setPostcodeAutoOpenChangePostcodeCount)("number" == typeof t ? t + 1 : 1)) : function() {
                        if ((0, v.getPostcodeTooltipViewedInSession)()) return !1;
                        var e = (0, v.getPostcodeTooltipViewCount)();
                        if ("number" == typeof e && e >= 5) return !1;
                        return !0
                    }() && (e = (0, v.getPostcodeTooltipViewCount)(), (0, v.setPostcodeTooltipViewCount)("number" == typeof e ? e + 1 : 1), (0, v.setPostcodeTooltipViewedInSession)(!0), X()))
                }), []), (0, j.default)((function() {
                    M && N()
                }));
                var Q = (0, x.useState)(0),
                    J = (0, i.default)(Q, 2),
                    $ = J[0],
                    ee = J[1];
                (0, x.useEffect)((function() {
                    !0 === w && ee((function(e) {
                        return e + 1
                    }))
                }), [w]);
                var te = W ? (0, y.jsx)(C.UIE, {
                    displayName: "CatalogPostcodeTooltip",
                    popable: !0,
                    escapable: !0,
                    requestDismiss: G,
                    dismissOnWindowResize: !0,
                    children: (0, y.jsx)(m.default, {
                        tooltip: W
                    })
                }, $) : null;
                return (0, y.jsxs)("div", (0, a.default)((0, a.default)({
                    className: (0, b.default)(T.container)
                }, (0, l.accessibleClickableButtonProps)({
                    onClick: B
                })), {}, {
                    ref: U,
                    children: [(0, y.jsx)("span", {
                        className: (0, b.default)(T.svgWrapper),
                        children: (0, y.jsx)(c.BusinessAddressIcon, {})
                    }), (0, y.jsxs)(u.FlexColumn, {
                        ref: V,
                        children: [(0, y.jsx)(g.Text, {
                            as: "p",
                            xstyle: T.postcodeDescription,
                            children: _.fbt._("Deliver to {postcode-of-a-geographic-area}", [_.fbt._param("postcode-of-a-geographic-area", n)], {
                                hk: "1dDn6Y"
                            })
                        }), (0, y.jsx)(g.Text, {
                            as: "p",
                            xstyle: T.postcodeLocationName,
                            theme: "muted",
                            children: O ? o : _.fbt._("Click to change Pincode", null, {
                                hk: "37HAka"
                            })
                        }), te]
                    })]
                }))
            }, t.MAX_TIMES_POSTCODE_CHANGE_TOOLTIP_TO_SHOW = t.MAX_TIMES_POSTCODE_CHANGE_MODAL_AUTO_OPEN = void 0;
            var a = o(n(81109)),
                i = o(n(963038)),
                r = n(774260),
                l = n(973656),
                c = n(725536),
                d = n(516053),
                s = n(482510),
                u = n(208188),
                f = n(628707),
                p = o(n(959418)),
                h = n(923613),
                g = n(558288),
                C = n(776097),
                m = o(n(397550)),
                v = n(516055),
                _ = n(548360),
                x = n(667294),
                b = o(n(156720)),
                S = n(948752),
                j = o(n(309653)),
                k = n(837810),
                y = n(785893),
                T = {
                    container: {
                        display: "p357zi0d",
                        alignItems: "gndfcl4n",
                        backgroundColor: "ihvf49ua",
                        position: "cca4rwve",
                        top: "qq0sjtgm",
                        zIndex: "l355kaf8",
                        boxShadow: "i35u2c65",
                        ":hover": {
                            backgroundColor: "os03hap6"
                        }
                    },
                    svgWrapper: {
                        paddingTop: "nlnf8xo7",
                        paddingBottom: "r219jyu0",
                        paddingStart: "nntdgyy8",
                        paddingEnd: "igb3k0ri",
                        width: "i94gqilv",
                        color: "kv0r5hzt"
                    },
                    postcodeDescription: {
                        lineHeight: "erpdyial",
                        fontSize: "enbbiyaj"
                    },
                    postcodeLocationName: {
                        lineHeight: "r5qsrrlp",
                        fontSize: "f8jlpxt4"
                    }
                };
            t.MAX_TIMES_POSTCODE_CHANGE_MODAL_AUTO_OPEN = 2;
            t.MAX_TIMES_POSTCODE_CHANGE_TOOLTIP_TO_SHOW = 5
        },
        923613: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CATALOG_POSTCODE_MENU_TOOLTIP_DURATION = t.CATALOG_POSTCODE_MENU_TOOLTIP_DELAY = t.CATALOG_POSTCODE_CHANGE_MODAL_OPEN_DELAY = void 0;
            t.CATALOG_POSTCODE_CHANGE_MODAL_OPEN_DELAY = 500;
            t.CATALOG_POSTCODE_MENU_TOOLTIP_DELAY = 500;
            t.CATALOG_POSTCODE_MENU_TOOLTIP_DURATION = 3500
        },
        69622: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = o(n(887757)),
                i = o(n(348926)),
                r = o(n(963038)),
                l = n(742649),
                c = n(519509),
                d = n(705639),
                s = n(894995),
                u = o(n(619567)),
                f = n(535442),
                p = n(321353),
                h = n(218953),
                g = o(n(131730)),
                C = n(516053),
                m = o(n(979163)),
                v = o(n(399447)),
                _ = o(n(929380)),
                x = o(n(84358)),
                b = n(902011),
                S = n(679729),
                j = o(n(46801)),
                k = n(179677),
                y = n(885882),
                T = o(n(587467)),
                P = n(647435),
                E = o(n(726174)),
                I = n(305010),
                w = n(74929),
                O = o(n(914623)),
                A = n(754360),
                L = n(324928),
                M = n(454964),
                R = o(n(829723)),
                N = o(n(544978)),
                D = n(445639),
                B = n(952991),
                H = n(548360),
                F = n(667294),
                W = o(n(156720)),
                z = o(n(869622)),
                V = o(n(802418)),
                U = o(n(982669)),
                G = n(948752),
                q = o(n(32594)),
                Y = o(n(788413)),
                K = n(785893),
                Z = {
                    header: {
                        flex: "kk3akd72"
                    },
                    list: {
                        flex: "kk3akd72",
                        paddingBottom: "oq31bsqd",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex"
                    },
                    listTopMargin: {
                        marginTop: "dj1c3cmq"
                    }
                };

            function X(e) {
                var t, n, o, a, i, r = e.cartEnabled,
                    l = e.contact,
                    d = e.catalog,
                    u = e.dataSource,
                    f = e.handleCartClick,
                    p = e.onCartClick,
                    h = e.canManageCatalog,
                    C = e.businessProfile,
                    m = e.blockCartInterstitialFn,
                    b = e.onAddProduct,
                    S = e.onProductDetail,
                    j = e.onProductShare,
                    k = e.onCollectionSeeAll,
                    y = e.onEditCollection,
                    P = e.onOpenCollections,
                    A = e.catalogFlatListControllerRef,
                    L = e.catalogFetchState,
                    M = e.directConnectionPostcodeEnabled,
                    R = e.loadingDirectConnectionInfo,
                    N = e.businessDirectConnection,
                    D = e.loadingMore,
                    B = e.postcodeChangeSuccess,
                    F = r && p ? f : void 0;
                (h && b && (n = (0, K.jsx)(_.default, {
                    onClick: function() {
                        return b()
                    },
                    theme: "collections",
                    testid: "add-item"
                })), d && h && y) && (o = d.productCollection.getProductModels(!0).some((function(e) {
                    return !e.isHidden && "REJECTED" !== e.reviewStatus
                })) ? (0, K.jsx)(_.default, {
                    onClick: function() {
                        y(null)
                    },
                    theme: "collections",
                    title: H.fbt._("Add new collection", null, {
                        hk: "1DddmB"
                    }),
                    testid: "add-collection"
                }) : null);
                return d && u ? (a = (0, K.jsx)(O.default, {
                    onCartOpen: F,
                    onProductDetail: S,
                    flatListController: A.current,
                    catalog: d,
                    canManageCatalog: h,
                    shareLinks: h,
                    onProductShare: j,
                    onCollectionSeeAll: k,
                    data: u.getData(),
                    onEditCollection: y
                }), h && ((0, c.getABPropConfigValue)("web_abprop_nux_cart_interstitial") && r && !m() && (0, x.default)(), i = (0, K.jsx)(g.default, {
                    onOpenCollections: P
                }))) : a = (0, K.jsx)(T.default, {
                    fetchState: L
                }), (0, K.jsxs)(K.Fragment, {
                    children: [C && (0, K.jsxs)(K.Fragment, {
                        children: [(0, K.jsx)("div", {
                            "data-testid": "catalog-header",
                            className: (0, W.default)(Z.header),
                            children: (0, K.jsx)(E.default, {
                                profilePicThumb: l.getProfilePicThumb(),
                                contact: l,
                                businessProfile: C
                            })
                        }), d && (0, s.catalogCategoriesEnabled)() && (null === (t = C.directConnection) || void 0 === t ? void 0 : t.enabled) ? (0, K.jsx)(I.CatalogCategoriesBanner, {
                            catalog: d
                        }) : null, d && M && !R && N && (0, K.jsx)(w.CatalogPostcodeMenu, {
                            catalog: d,
                            businessDirectConnection: N,
                            postcodeChangeSuccess: B
                        })]
                    }), (0, K.jsxs)("div", {
                        "data-testid": "catalog-items",
                        className: (0, W.default)(Z.list, C && Z.listTopMargin),
                        children: [i, n, o, a, D && (0, K.jsx)(v.default, {})]
                    })]
                })
            }

            function Q(e, t) {
                var n = e.catalogId,
                    o = e.setScrollOffset,
                    c = e.onCartClick,
                    s = e.onCatalogLinkClick,
                    g = e.canManageCatalog,
                    v = e.canLogQpl,
                    _ = void 0 === v || v,
                    x = e.isPushed,
                    T = void 0 === x || x,
                    E = e.scrollOffset,
                    I = e.autoUpdate,
                    w = e.businessProfile,
                    O = e.blockCartInterstitialFn,
                    W = void 0 === O ? function() {
                        return !1
                    } : O,
                    Z = e.onAddProduct,
                    Q = e.onProductDetail,
                    J = e.onProductShare,
                    $ = e.onCollectionSeeAll,
                    ee = e.onEditCollection,
                    te = e.onOpenCollections,
                    ne = e.onRemoveProduct,
                    oe = e.onOpenSettings,
                    ae = e.onOpenMerchantDetailsForm,
                    ie = (0, F.useContext)(D.DrawerContext),
                    re = (0, C.enablePostcodeInCatalog)() && !!w && (0, f.businessSupportsPostcode)(w),
                    le = (0, Y.default)(),
                    ce = (0, V.default)(),
                    de = (0, z.default)(ce, 100),
                    se = (0, U.default)((function() {
                        return new m.default
                    })),
                    ue = (0, G.useModelValues)(e.contact, ["id"]),
                    fe = (0, F.useMemo)((function() {
                        return p.CartCollection.findCart(ue.id.toString())
                    }), [ue.id]),
                    pe = (0, F.useState)(!1),
                    he = (0, r.default)(pe, 2),
                    ge = he[0],
                    Ce = he[1],
                    me = (0, F.useState)(null),
                    ve = (0, r.default)(me, 2),
                    _e = ve[0],
                    xe = ve[1],
                    be = (0, F.useState)(fe.itemCount),
                    Se = (0, r.default)(be, 2),
                    je = Se[0],
                    ke = Se[1],
                    ye = (0, F.useState)("NONE"),
                    Te = (0, r.default)(ye, 2),
                    Pe = Te[0],
                    Ee = Te[1],
                    Ie = (0, F.useState)(null),
                    we = (0, r.default)(Ie, 2),
                    Oe = we[0],
                    Ae = we[1],
                    Le = (0, F.useState)(null),
                    Me = (0, r.default)(Le, 2),
                    Re = Me[0],
                    Ne = Me[1],
                    De = (0, F.useState)(!0),
                    Be = (0, r.default)(De, 2),
                    He = Be[0],
                    Fe = Be[1],
                    We = function() {
                        var e = (0, i.default)(a.default.mark((function e(t) {
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, null == t ? void 0 : t.loadInitialItems();
                                    case 2:
                                        Fe(!1);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ze = (0, z.default)((function() {
                        ce(), null == ne || ne()
                    }), 100),
                    Ve = (0, F.useState)(),
                    Ue = (0, r.default)(Ve, 2),
                    Ge = Ue[0],
                    qe = Ue[1],
                    Ye = (0, F.useState)(!1),
                    Ke = (0, r.default)(Ye, 2),
                    Ze = Ke[0],
                    Xe = Ke[1],
                    Qe = function() {
                        var e = _ && T,
                            t = e ? A.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW : void 0;
                        h.CatalogCollection.find(n, {
                            markerId: t
                        }).then((function(t) {
                            if (!le.aborted) {
                                var n = new d.CatalogWithCollectionsDataSource(t, g || !1, b.PRODUCT_LIST_ITEM_HEIGHT, e),
                                    o = new d.CatalogListItemScrollHelper(n);
                                xe(t), Ae(n), Ne(o), Ee("SUCCESS"), We(n).then((function() {
                                        e && L.QPL.markerEnd(A.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, l.QuickLogActionType.SUCCESS)
                                    })).catch((function() {
                                        e && L.QPL.markerEnd(A.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, l.QuickLogActionType.FAIL)
                                    })),
                                    function(e) {
                                        I && null != e && (e.productCollection.on("add", de), e.productCollection.on("remove", ze), e.collections.on("add", de), e.collections.on("remove", de))
                                    }(t), void 0 !== E && se.current.setScrollFromStart(E)
                            }
                        })).catch((function(t) {
                            e && L.QPL.markerEnd(A.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, l.QuickLogActionType.FAIL), (0, y.parseErrorState)(t, (function(e) {
                                Ee(e), Fe(!1)
                            }))
                        }))
                    },
                    Je = function() {
                        re ? (Xe(!0), u.default.getCypher(n).then((function(e) {
                            qe(e), Xe(!1), Qe()
                        }))) : Qe()
                    };
                (0, F.useEffect)((function() {
                    Je(), (0, j.default)(n).then((function(e) {
                        Ce(e), e && fe.on("change:cartItemCollection", (function() {
                            return ke(fe.itemCount)
                        })), (0, P.logCatalogListView)({
                            catalogOwnerWid: n,
                            catalogContext: (0, k.getProductCatalogContext)(ie),
                            cartToggle: e
                        })
                    }))
                }), []);
                var $e = (0, q.default)((function(e, t) {
                        null == o || o(t.scrollTop), (null == Re ? void 0 : Re.willLoadMore(t)) && Fe(!0), null == Re || Re.onScroll(e, t).then((function(e) {
                            e && Fe(!1)
                        })).catch((function(e) {
                            throw Fe(!1), e
                        }))
                    }), 100),
                    et = function() {
                        (0, M.qplStartCartView)("Catalog"), null == c || c(ue.id.toString())
                    },
                    tt = (0, S.getCatalogDrawerMenu)({
                        onSendCatalog: function() {
                            _e && (s(_e, ue), (0, P.logCatalogShareLinkClick)({
                                catalogOwnerWid: n,
                                catalogContext: (0, k.getProductCatalogContext)(ie)
                            }))
                        },
                        onCartClick: ge ? et : void 0,
                        cartCount: je,
                        catalogId: n.toString(),
                        canManageCatalog: g,
                        onOpenCollections: te,
                        onOpenMerchantDetailsForm: ae,
                        onOpenSettings: oe,
                        cartIconTheme: e.headerType === B.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
                    });
                return (0, K.jsxs)(R.default, {
                    ref: t,
                    theme: "products",
                    onDrop: e.onBack,
                    children: [(0, K.jsx)(B.DrawerHeader, {
                        title: H.fbt._("Catalog", null, {
                            hk: "3YVOSV"
                        }),
                        type: e.headerType || B.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onBack,
                        menu: tt,
                        focusBackOrCancel: !0
                    }), (0, K.jsx)(N.default, {
                        onScroll: function(e) {
                            $e(e, e.currentTarget)
                        },
                        flatListControllers: [se.current],
                        children: (0, K.jsx)(X, {
                            cartEnabled: ge,
                            contact: ue,
                            handleCartClick: et,
                            onProductDetail: Q,
                            onCartClick: c,
                            catalog: _e,
                            dataSource: Oe,
                            businessProfile: w,
                            canManageCatalog: g,
                            onAddProduct: Z,
                            onProductShare: J,
                            onCollectionSeeAll: $,
                            onOpenCollections: te,
                            onEditCollection: ee,
                            blockCartInterstitialFn: W,
                            catalogFlatListControllerRef: se,
                            catalogFetchState: Pe,
                            directConnectionPostcodeEnabled: re,
                            loadingDirectConnectionInfo: Ze,
                            businessDirectConnection: Ge,
                            loadingMore: He,
                            postcodeChangeSuccess: function() {
                                h.CatalogCollection.removeCatalog(n), xe(null), Ae(null), Ne(null), Ee("NONE"), Fe(!0), Je()
                            }
                        })
                    })]
                })
            }
            var J = (0, F.forwardRef)(Q);
            t.default = J
        },
        121891: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CollectionContentDrawer = void 0;
            var a = o(n(887757)),
                i = o(n(348926)),
                r = o(n(963038)),
                l = n(742649),
                c = n(705639),
                d = n(321353),
                s = n(218953),
                u = o(n(979163)),
                f = o(n(399447)),
                p = o(n(929380)),
                h = n(224247),
                g = n(902011),
                C = n(679729),
                m = o(n(46801)),
                v = n(179677),
                _ = n(885882),
                x = o(n(587467)),
                b = n(338380),
                S = o(n(914623)),
                j = n(754360),
                k = n(324928),
                y = n(454964),
                T = o(n(829723)),
                P = o(n(544978)),
                E = n(445639),
                I = n(952991),
                w = n(548360),
                O = n(667294),
                A = o(n(156720)),
                L = o(n(869622)),
                M = o(n(802418)),
                R = o(n(982669)),
                N = n(779740),
                D = n(948752),
                B = o(n(788413)),
                H = n(785893),
                F = {
                    flex: "kk3akd72",
                    paddingBottom: "oq31bsqd",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex"
                },
                W = {
                    paddingTop: "pxvlsfnc",
                    paddingEnd: "kyc7k6mt",
                    paddingBottom: "n3bptxsn",
                    paddingStart: "f78eapp6",
                    lineHeight: "qg52vu03"
                };

            function z(e) {
                var t = e.cartEnabled,
                    n = e.catalogFetchState,
                    o = e.collectionFlatListController,
                    a = e.loadingMore,
                    i = e.catalog,
                    r = e.dataSource,
                    l = e.canManageCatalog,
                    c = e.collection,
                    d = e.handleCartClick,
                    s = e.onProductDetail,
                    u = e.onCartClick,
                    g = e.onProductShare,
                    C = e.onEditCollection,
                    m = t && u ? d : void 0;
                if (!i || !r) return (0, H.jsx)(x.default, {
                    fetchState: n
                });
                var v = r.getData();
                if (0 === v.length && !a && l && c) return (0, H.jsx)(H.Fragment, {
                    children: (0, H.jsxs)("div", {
                        className: (0, A.default)(F),
                        children: [(0, H.jsx)(p.default, {
                            theme: "collections",
                            onClick: function() {
                                null == C || C(c)
                            },
                            testid: "add-collection"
                        }), (0, H.jsx)("div", {
                            className: (0, A.default)(W),
                            children: w.fbt._("This collection won't be visible to customers until you add at least 1 item", null, {
                                hk: "3XWBzM"
                            })
                        })]
                    })
                });
                var _ = (0, H.jsx)(S.default, {
                        onCartOpen: m,
                        onProductDetail: s,
                        flatListController: o,
                        catalog: i,
                        canManageCatalog: l,
                        shareLinks: l,
                        onProductShare: g,
                        collectionId: null == c ? void 0 : c.id.toString(),
                        data: v
                    }),
                    b = c ? (0, H.jsx)(h.CollectionIntegrityBanner, {
                        collection: c,
                        onEditCollection: C
                    }) : void 0;
                return (0, H.jsx)(H.Fragment, {
                    children: (0, H.jsxs)("div", {
                        className: (0, A.default)(F),
                        children: [b, _, a && (0, H.jsx)(f.default, {})]
                    })
                })
            }
            var V = (0, O.forwardRef)((function(e, t) {
                var n, o = e.catalogId,
                    f = e.onCartClick,
                    p = e.onCatalogLinkClick,
                    h = e.setScrollOffset,
                    x = e.canManageCatalog,
                    S = e.scrollOffset,
                    A = e.collection,
                    F = e.onProductDetail,
                    W = e.onProductShare,
                    V = e.onEditCollection,
                    U = (0, M.default)(),
                    G = (0, B.default)(),
                    q = (0, O.useContext)(E.DrawerContext),
                    Y = (0, D.useModelValues)(e.contact, ["id"]),
                    K = (0, O.useMemo)((function() {
                        return d.CartCollection.findCart(Y.id.toString())
                    }), [Y.id]),
                    Z = (0, R.default)((function() {
                        return new u.default
                    })),
                    X = (0, O.useState)(!1),
                    Q = (0, r.default)(X, 2),
                    J = Q[0],
                    $ = Q[1],
                    ee = (0, O.useState)(null),
                    te = (0, r.default)(ee, 2),
                    ne = te[0],
                    oe = te[1],
                    ae = (0, O.useState)(K.itemCount),
                    ie = (0, r.default)(ae, 2),
                    re = ie[0],
                    le = ie[1],
                    ce = (0, O.useState)("NONE"),
                    de = (0, r.default)(ce, 2),
                    se = de[0],
                    ue = de[1],
                    fe = (0, O.useState)(null),
                    pe = (0, r.default)(fe, 2),
                    he = pe[0],
                    ge = pe[1],
                    Ce = (0, O.useState)(null),
                    me = (0, r.default)(Ce, 2),
                    ve = me[0],
                    _e = me[1],
                    xe = (0, O.useState)(!0),
                    be = (0, r.default)(xe, 2),
                    Se = be[0],
                    je = be[1];
                (0, N.useListener)(null == A ? void 0 : A.productCollection, ["add", "remove"], U), (0, N.useListener)(null == ne ? void 0 : ne.productCollection, ["add", "remove"], U), (0, N.useListener)(null == ne ? void 0 : ne.collections, ["add", "remove"], U), (0, N.useListener)(A, ["change:reviewStatus", "canAppeal"], U);
                var ke = function() {
                        var e = (0, i.default)(a.default.mark((function e(t) {
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, null == t ? void 0 : t.loadInitialItems();
                                    case 2:
                                        je(!1), (0, b.logCollectionSeeAllView)({
                                            catalogOwnerJid: o.toString(),
                                            catalogContext: (0, v.getProductCatalogContext)(q),
                                            collectionId: null == t ? void 0 : t.collectionId
                                        });
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ye = function() {
                        var e = K.itemCount;
                        re !== e && le(e)
                    };
                (0, O.useEffect)((function() {
                    s.CatalogCollection.find(o).then((function(e) {
                        if (!G.aborted) {
                            oe(e), ue("SUCCESS");
                            var t = new c.SingleCollectionDataSource(e, null == A ? void 0 : A.id.toString(), x || !1, g.PRODUCT_LIST_ITEM_HEIGHT),
                                n = new c.CatalogListItemScrollHelper(t);
                            ge(t), _e(n), ke(t).then((function() {
                                k.QPL.markerEnd(j.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, l.QuickLogActionType.SUCCESS)
                            })).catch((function() {
                                k.QPL.markerEnd(j.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, l.QuickLogActionType.FAIL)
                            })), void 0 !== S && Z.current.setScrollFromStart(S)
                        }
                    })).catch((function(e) {
                        k.QPL.markerEnd(j.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, l.QuickLogActionType.FAIL), (0, _.parseErrorState)(e, (function(e) {
                            ue(e), je(!1)
                        }))
                    })), (0, m.default)(o).then((function(e) {
                        $(e), e && K.on("all", ye)
                    }))
                }), []);
                var Te = function() {
                        (0, y.qplStartCartView)("Collection"), null == f || f(Y.id.toString())
                    },
                    Pe = (0, L.default)((function(e, t) {
                        null == h || h(t.scrollTop), (null == ve ? void 0 : ve.willLoadMore(t)) && je(!0), null == ve || ve.onScroll(e, t).then((function(e) {
                            e && je(!1)
                        })).catch((function(e) {
                            throw je(!1), e
                        }))
                    }), 100),
                    Ee = (0, C.getCatalogDrawerMenu)({
                        onSendCatalog: function() {
                            ne && p(ne, Y)
                        },
                        onCartClick: J ? Te : void 0,
                        cartCount: K.itemCount,
                        catalogId: o.toString(),
                        canManageCatalog: x
                    }),
                    Ie = (null === (n = e.collection) || void 0 === n ? void 0 : n.name) || w.fbt._("All Items", null, {
                        hk: "2x8dE2"
                    });
                return (0, H.jsxs)(T.default, {
                    ref: t,
                    theme: "products",
                    onDrop: e.onBack,
                    children: [(0, H.jsx)(I.DrawerHeader, {
                        title: Ie,
                        type: e.headerType || I.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onBack,
                        menu: Ee
                    }), (0, H.jsx)(P.default, {
                        flatListControllers: [Z.current],
                        onScroll: function(e) {
                            Pe(e, e.currentTarget)
                        },
                        children: (0, H.jsx)(z, {
                            cartEnabled: J,
                            onCartClick: f,
                            handleCartClick: Te,
                            catalog: ne,
                            dataSource: he,
                            catalogFetchState: se,
                            loadingMore: Se,
                            canManageCatalog: x,
                            collection: A,
                            onProductDetail: F,
                            onProductShare: W,
                            onEditCollection: V,
                            collectionFlatListController: Z.current
                        })
                    })]
                })
            }));
            t.CollectionContentDrawer = V, V.displayName = "CollectionContentDrawer"
        },
        344735: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, o = e.collection,
                    i = e.onSeeAll,
                    h = e.allItems;
                o ? (t = o.name, n = o.id) : h && (t = s.fbt._("All Items", null, {
                    hk: "2x8dE2"
                }));
                var v = (0, f.jsx)(c.TextDiv, {
                    className: (0, u.default)(p),
                    theme: "title",
                    children: (0, f.jsx)(r.EmojiText, {
                        text: t,
                        ellipsify: !0,
                        titlify: !0
                    })
                });
                var _ = void 0;
                if (o) switch (o.reviewStatus) {
                    case l.PRODUCT_REVIEW_STATUS.REJECTED:
                        _ = (0, f.jsx)("span", {
                            className: (0, u.default)(g),
                            children: s.fbt._("rejected", null, {
                                hk: "3f3H8P"
                            })
                        })
                }
                return (0, f.jsx)(a.default, {
                    primary: v,
                    secondary: _,
                    detail: (0, f.jsx)(m, {
                        name: t,
                        onClick: function(e) {
                            ! function(e) {
                                e.preventDefault(), e.stopPropagation()
                            }(e), (0, d.qplStartCollectionViewAll)("Catalog"), i && o ? i(o) : i && i()
                        }
                    }),
                    theme: "collection-header",
                    idle: !0,
                    className: (0, u.default)(C)
                }, n)
            };
            var a = o(n(799328)),
                i = o(n(522656)),
                r = n(990055),
                l = n(926464),
                c = n(558288),
                d = n(454964),
                s = n(548360),
                u = o(n(156720)),
                f = n(785893),
                p = {
                    lineHeight: "erpdyial"
                },
                h = {
                    lineHeight: "erpdyial"
                },
                g = {
                    color: "mvxzr2tb"
                },
                C = {
                    paddingStart: "f78eapp6",
                    marginTop: "o9i7y497",
                    borderTop: "swyb62mu"
                },
                m = function(e) {
                    var t = e.name,
                        n = e.onClick;
                    return (0, f.jsx)(i.default, {
                        onClick: n,
                        className: (0, u.default)(h),
                        title: s.fbt._("Collection {collectionName}, see all", [s.fbt._param("collectionName", t)], {
                            hk: "1kqerQ"
                        }),
                        tabIndex: 0,
                        children: s.fbt._("See all", null, {
                            hk: "UPjou"
                        })
                    })
                }
        },
        362563: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getRejectedCollectionCopy = function(e, t) {
                var n;
                switch (e) {
                    case "drugs":
                        return n = c.fbt._("WhatsApp's Commerce Policy for prescription, recreational, or other types of Drugs", null, {
                            hk: "B27ED"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_drugs}", [c.fbt._param("collections_rejected_policy_drugs", s(n, t))], {
                                hk: "1ZU364"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_drugs}.", [c.fbt._param("collections_rejected_policy_drugs", s(n, t))], {
                                hk: "4pJPwW"
                            })
                        };
                    case "weapons":
                        return n = c.fbt._("WhatsApp's Commerce Policy for Weapons, ammunition, or explosives", null, {
                            hk: "1X972I"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_weapons}", [c.fbt._param("collections_rejected_policy_weapons", s(n, t))], {
                                hk: "1RUS3E"
                            }),
                            second: (0, d.jsx)(l.default, {
                                id: 188,
                                params: {
                                    collections_rejected_policy_weapons: s(n, t)
                                }
                            })
                        };
                    case "animals":
                        return n = c.fbt._("WhatsApp's Commerce Policy for Animals", null, {
                            hk: "3hxXr8"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_animals}", [c.fbt._param("collections_rejected_policy_animals", s(n, t))], {
                                hk: "3pIJQl"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_animals}.", [c.fbt._param("collections_rejected_policy_animals", s(n, t))], {
                                hk: "jmRZD"
                            })
                        };
                    case "alcohol":
                        return n = c.fbt._("WhatsApp's Commerce Policy for Alcohol", null, {
                            hk: "1G8YGL"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_alcohol}", [c.fbt._param("collections_rejected_policy_alcohol", s(n, t))], {
                                hk: "1K5gKG"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_alcohol}.", [c.fbt._param("collections_rejected_policy_alcohol", s(n, t))], {
                                hk: "1BLaYk"
                            })
                        };
                    case "gambling":
                        return n = c.fbt._("WhatsApp's Commerce Policy for Real money gambling services", null, {
                            hk: "1zQIeM"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_gambling}", [c.fbt._param("collections_rejected_policy_gambling", s(n, t))], {
                                hk: "2sjwfv"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_gambling}.", [c.fbt._param("collections_rejected_policy_gambling", s(n, t))], {
                                hk: "2N7wJa"
                            })
                        };
                    case "tobacco":
                        return n = c.fbt._("WhatsApp's Commerce Policy for Tobacco items and related paraphernalia", null, {
                            hk: "EAQLL"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_tobacco}", [c.fbt._param("collections_rejected_policy_tobacco", s(n, t))], {
                                hk: "49kjok"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_tobacco}.", [c.fbt._param("collections_rejected_policy_tobacco", s(n, t))], {
                                hk: "1hYXEJ"
                            })
                        };
                    case "overtly_sexualized_positioning":
                        return n = c.fbt._("WhatsApp's Commerce Policy for Overtly sexualized positioning", null, {
                            hk: "1oaFbX"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_overtly_sexualized_positioning}", [c.fbt._param("collections_rejected_policy_overtly_sexualized_positioning", s(n, t))], {
                                hk: "2imNEe"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_overtly_sexualized_positioning}.", [c.fbt._param("collections_rejected_policy_overtly_sexualized_positioning", s(n, t))], {
                                hk: "2Bi73E"
                            })
                        };
                    case "adult":
                        return n = c.fbt._("WhatsApp's Commerce Policy for Adult products or service", null, {
                            hk: "Wf7q5"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_adult}", [c.fbt._param("collections_rejected_policy_adult", s(n, t))], {
                                hk: "2sWh94"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_adult}.", [c.fbt._param("collections_rejected_policy_adult", s(n, t))], {
                                hk: "4Fv5xc"
                            })
                        };
                    case "supplements":
                        return n = c.fbt._("WhatsApp's Commerce Policy for Unsafe ingestible supplements", null, {
                            hk: "9a4Y2"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_supplements}", [c.fbt._param("collections_rejected_policy_supplements", s(n, t))], {
                                hk: "3m5ayk"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_supplements}.", [c.fbt._param("collections_rejected_policy_supplements", s(n, t))], {
                                hk: "4g93H8"
                            })
                        };
                    case "body_parts_fluids":
                        return n = c.fbt._("WhatsApp's Commerce Policy for Body parts and fluids", null, {
                            hk: "2EAd21"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_body_parts_fluids}", [c.fbt._param("collections_rejected_policy_body_parts_fluids", s(n, t))], {
                                hk: "1fH8mf"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_body_parts_fluids}.", [c.fbt._param("collections_rejected_policy_body_parts_fluids", s(n, t))], {
                                hk: "2HB7OE"
                            })
                        };
                    case "healthcare":
                        return n = c.fbt._("WhatsApp's Commerce Policy for Medical and healthcare products", null, {
                            hk: "3vvgOF"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_healthcare}", [c.fbt._param("collections_rejected_policy_healthcare", s(n, t))], {
                                hk: "1o5Y8p"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_healthcare}.", [c.fbt._param("collections_rejected_policy_healthcare", s(n, t))], {
                                hk: "18tOqv"
                            })
                        };
                    case "misleading":
                        return n = c.fbt._("WhatsApp's Commerce Policy for Business models, goods, items, or services that may be or are fraudulent, misleading, offensive, or deceptive, or may be or are exploitative, inappropriate, or exert undue pressure on targeted groups", null, {
                            hk: "3TyOB"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_misleading}", [c.fbt._param("collections_rejected_policy_misleading", s(n, t))], {
                                hk: "1icG7s"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_misleading}.", [c.fbt._param("collections_rejected_policy_misleading", s(n, t))], {
                                hk: "4gURah"
                            })
                        };
                    case "real_fake_currency":
                        return n = c.fbt._("WhatsApp's Commerce Policy for Real, virtual, or fake currency", null, {
                            hk: "2XnVq2"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_real_fake_currency}", [c.fbt._param("collections_rejected_policy_real_fake_currency", s(n, t))], {
                                hk: "2F8xUp"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_real_fake_currency}.", [c.fbt._param("collections_rejected_policy_real_fake_currency", s(n, t))], {
                                hk: "3mr0Qt"
                            })
                        };
                    case "digital_services_products":
                        return n = c.fbt._("WhatsApp's Commerce Policy for Digital and subscription services", null, {
                            hk: "2mvwqB"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_digital_services_products}", [c.fbt._param("collections_rejected_policy_digital_services_products", s(n, t))], {
                                hk: "W6Ct0"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_digital_services_products}.", [c.fbt._param("collections_rejected_policy_digital_services_products", s(n, t))], {
                                hk: "4gcYAt"
                            })
                        };
                    case "thrid_party_infringements":
                        return n = c.fbt._("WhatsApp's Commerce Policy for Third-Party Infringement", null, {
                            hk: "48SSD"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_thrid_party_infringements}", [c.fbt._param("collections_rejected_policy_thrid_party_infringements", s(n, t))], {
                                hk: "2S7xKD"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_thrid_party_infringements}.", [c.fbt._param("collections_rejected_policy_thrid_party_infringements", s(n, t))], {
                                hk: "1UXaIr"
                            })
                        };
                    case "unauthorized_media":
                        return n = c.fbt._("WhatsApp's Commerce Policy for Products or items that facilitate or encourage unauthorized access to digital media", null, {
                            hk: "2ldhoF"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_unauthorized_media}", [c.fbt._param("collections_rejected_policy_unauthorized_media", s(n, t))], {
                                hk: "2oPAST"
                            }),
                            second: (0, d.jsx)(l.default, {
                                id: 187,
                                params: {
                                    collections_rejected_policy_unauthorized_media: s(n, t)
                                }
                            })
                        };
                    case "illegal_products":
                        return n = c.fbt._("WhatsApp's Commerce Policy for Illegal products or services", null, {
                            hk: "c5Zjc"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_illegal_products}", [c.fbt._param("collections_rejected_policy_illegal_products", s(n, t))], {
                                hk: "41Oqb6"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_illegal_products}.", [c.fbt._param("collections_rejected_policy_illegal_products", s(n, t))], {
                                hk: "46TgAV"
                            })
                        };
                    case "hazardous_goods_and_materials":
                        return n = c.fbt._("WhatsApp's Commerce Policy for Business models, goods, items, or services that may be or are fraudulent, misleading, offensive, or deceptive, or may be or are exploitative, inappropriate, or exert undue pressure on targeted groups", null, {
                            hk: "3TyOB"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_hazardous_goods_and_materials}", [c.fbt._param("collections_rejected_policy_hazardous_goods_and_materials", s(n, t))], {
                                hk: "smMcx"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_hazardous_goods_and_materials}.", [c.fbt._param("collections_rejected_policy_hazardous_goods_and_materials", s(n, t))], {
                                hk: "SdRo5"
                            })
                        };
                    case "stolen_goods":
                        return n = c.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_stolen_goods}", [c.fbt._param("collections_rejected_policy_stolen_goods", s(n, t))], {
                                hk: "4mvVou"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_stolen_goods}.", [c.fbt._param("collections_rejected_policy_stolen_goods", s(n, t))], {
                                hk: "1Zd6PC"
                            })
                        };
                    case "human_exploitation_and_sexual_services":
                        return n = c.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_human_exploitation_and_sexual_services}", [c.fbt._param("collections_rejected_policy_human_exploitation_and_sexual_services", s(n, t))], {
                                hk: "4yXqyf"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_human_exploitation_and_sexual_services}.", [c.fbt._param("collections_rejected_policy_human_exploitation_and_sexual_services", s(n, t))], {
                                hk: "3XImZQ"
                            })
                        };
                    case "community_standards":
                        return n = c.fbt._("WhatsApp's Business Terms", null, {
                            hk: "1x5ZqO"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_community_standards}", [c.fbt._param("collections_rejected_policy_community_standards", s(n, t))], {
                                hk: "2AoLET"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_community_standards}.", [c.fbt._param("collections_rejected_policy_community_standards", s(n, t))], {
                                hk: "apmZF"
                            })
                        };
                    case "discrimination":
                        return n = c.fbt._("WhatsApp's Business Terms", null, {
                            hk: "1x5ZqO"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_discrimination}", [c.fbt._param("collections_rejected_policy_discrimination", s(n, t))], {
                                hk: "4gmrAW"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_discrimination}.", [c.fbt._param("collections_rejected_policy_discrimination", s(n, t))], {
                                hk: "3j6FXO"
                            })
                        };
                    default:
                        return n = c.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_other_violation}", [c.fbt._param("collections_rejected_policy_other_violation", s(n, t))], {
                                hk: "3AiJjt"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_other_violation}.", [c.fbt._param("collections_rejected_policy_other_violation", s(n, t))], {
                                hk: "A2Pf5"
                            })
                        }
                }
            };
            var a = o(n(522656)),
                i = o(n(442435)),
                r = n(192070),
                l = o(n(680516)),
                c = n(548360),
                d = n(785893);

            function s(e, t) {
                var n = t || i.default.WA_COMMERCE_POLICY_URL;
                return (0, d.jsx)(a.default, {
                    href: n,
                    onClick: function(e) {
                        e.preventDefault(), (0, r.openExternalLink)(n)
                    },
                    children: e
                })
            }
        },
        338380: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.logCollectionCreateClicked = function(e) {
                new c.default.CatalogBiz({
                    catalogBizAction: c.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CREATE_CLICKED,
                    catalogEntryPoint: e.entryPoint,
                    catalogSessionId: e.session.toString()
                }).commit()
            }, t.logCollectionCreated = function(e) {
                var t = e.catalogContext,
                    n = (e.collectionId, e.productCount);
                new c.default.CatalogBiz({
                    catalogBizAction: c.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CREATED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: n
                }).commit()
            }, t.logCollectionDeleted = function(e) {
                var t = e.catalogContext,
                    n = e.collectionId;
                new c.default.CatalogBiz({
                    catalogBizAction: c.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_DELETED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    collectionId: n
                }).commit()
            }, t.logCollectionItemsAssignment = function(e) {
                var t = e.catalogContext,
                    n = e.collectionId,
                    o = e.addedCount,
                    a = e.removedCount;
                o > 0 && new c.default.CatalogBiz({
                    catalogBizAction: c.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_ASSIGN_ITEMS,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: o,
                    collectionId: n
                }).commit();
                a > 0 && new c.default.CatalogBiz({
                    catalogBizAction: c.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_UNASSIGN_ITEMS,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: a,
                    collectionId: n
                }).commit()
            }, t.logCollectionMenuClicked = function(e) {
                new c.default.CatalogBiz({
                    catalogBizAction: c.default.CATALOG_BIZ_ACTION.ACTION_MENU_COLLECTIONS_CLICK,
                    catalogEntryPoint: e.entryPoint,
                    catalogSessionId: e.session.toString()
                }).commit()
            }, t.logCollectionRenamed = function(e) {
                var t = e.catalogContext,
                    n = e.collectionId;
                new c.default.CatalogBiz({
                    catalogBizAction: c.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_DELETED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    collectionId: n
                }).commit()
            }, t.logCollectionReorder = function(e) {
                var t = e.catalogContext,
                    n = e.movesCount;
                new c.default.CatalogBiz({
                    catalogBizAction: c.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CHANGE_ORDER,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: n
                }).commit()
            }, t.logCollectionSeeAllView = function(e) {
                var t = e.catalogOwnerJid,
                    n = e.catalogContext,
                    o = e.collectionId,
                    d = (0, i.getProductStatsInFetched)(t, o),
                    s = null == d ? void 0 : d.productIndex,
                    u = null == d ? void 0 : d.collectionIndex;
                (0, l.logCatalogViewOrBizEvent)((0, a.default)({
                    isOwner: (0, l.isCatalogOwner)({
                        catalogOwnerJid: t
                    }),
                    catalogBizAction: c.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_IMPRESSION,
                    productIndex: s,
                    collectionIndex: u
                }, (0, r.toDataForCatalogViewEvents)(n)))
            };
            var a = o(n(81109)),
                i = n(705639),
                r = n(179677),
                l = n(460682),
                c = o(n(229677))
        },
        914623: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onProductDetail,
                    n = e.onProductShare,
                    o = e.onCartOpen,
                    y = e.shareLinks,
                    T = e.onEditCollection,
                    P = e.onCollectionSeeAll,
                    E = e.canManageCatalog,
                    I = (0, x.default)(),
                    w = (0, j.useModelValues)(e.catalog, ["productCollection", "collections", "afterCursor", "id", "index"]),
                    O = (0, _.useContext)(v.DrawerContext),
                    A = (0, b.default)((function() {
                        return new Set
                    })),
                    L = (0, b.default)((function() {
                        return new r.default
                    })),
                    M = function(e) {
                        null == n || n(e)
                    },
                    R = function(e) {
                        (0, c.handleProductDelete)(w, e, (0, u.getProductCatalogContext)(O), "Collection")
                    },
                    N = function(e) {
                        (0, c.handleProductVisibilityChange)(w, e, (0, u.getProductCatalogContext)(O), "Collections")
                    };
                return (0, S.useListeners)(Array.from(A.current).map((function(e) {
                    return {
                        source: e,
                        eventOrEvents: ["change:reviewStatus", "canAppeal"],
                        callback: I
                    }
                }))), (0, k.jsx)(k.Fragment, {
                    children: (0, k.jsx)(i.default, {
                        flatListControllers: [L.current],
                        children: (0, k.jsx)(a.FlatList, {
                            flatListController: L.current,
                            direction: "vertical",
                            forceConsistentRenderCount: !1,
                            data: function() {
                                var t = void 0 !== o,
                                    n = e.data || [],
                                    a = [];
                                return n.forEach((function(n) {
                                    var o = n.collection,
                                        i = n.product,
                                        r = n.allItems;
                                    if (o && i) {
                                        var l = o.id;
                                        a.push({
                                            itemKey: `${l.toString()}_${i.id.toString()}_${t.toString()}`,
                                            product: i,
                                            collectionId: l
                                        })
                                    } else if (o) A.current.has(o) || A.current.add(o), a.push({
                                        itemKey: `${o.id.toString()}_${o.reviewStatus.toString()}`,
                                        collection: o
                                    }), o.reviewStatus !== h.PRODUCT_REVIEW_STATUS.PENDING && o.reviewStatus !== h.PRODUCT_REVIEW_STATUS.REJECTED || a.push({
                                        itemKey: `${o.id.toString()}_reviewBanner`,
                                        collection: o,
                                        height: (0, d.getCollectionIntegrityHeight)(o),
                                        reviewBanner: !0
                                    });
                                    else if (r) a.push({
                                        itemKey: "view_all",
                                        allItems: r
                                    });
                                    else if (i) {
                                        var c = e.collectionId || void 0;
                                        a.push({
                                            itemKey: `${i.id.toString()}_${t.toString()}`,
                                            product: i,
                                            collectionId: c
                                        })
                                    }
                                })), a
                            }(),
                            renderItem: function(e) {
                                var n = e.collection,
                                    a = e.product,
                                    i = e.allItems,
                                    r = e.reviewBanner,
                                    l = e.collectionId;
                                return n ? r ? (0, k.jsx)(d.CollectionIntegrityBanner, {
                                    collection: n,
                                    onEditCollection: T
                                }) : (0, k.jsx)(g.default, {
                                    collection: n,
                                    onSeeAll: P
                                }) : i ? (0, k.jsx)(g.default, {
                                    allItems: i,
                                    onSeeAll: P
                                }) : a ? (0, k.jsx)(f.default, {
                                    collectionId: l,
                                    product: a,
                                    onCartOpen: o,
                                    onClick: function() {
                                        return function(e, n) {
                                            return (0, m.qplStartProductView)("Collection"), (0, p.logCatalogListDetailClick)({
                                                product: (0, C.unproxy)(e),
                                                catalogContext: (0, u.getProductCatalogContext)(O)
                                            }), t(e, n)
                                        }(a, l)
                                    },
                                    onProductShare: y ? M : null,
                                    onProductDelete: R,
                                    onProductHideShow: N,
                                    theme: "product-of-collection",
                                    canManageCatalog: E
                                }) : null
                            },
                            defaultItemHeight: s.PRODUCT_LIST_ITEM_HEIGHT,
                            keyOrder: l.KeyOrder.INVERSE
                        })
                    })
                })
            };
            var a = n(577407),
                i = o(n(877576)),
                r = o(n(979163)),
                l = n(906416),
                c = n(911558),
                d = n(224247),
                s = n(902011),
                u = n(179677),
                f = o(n(991417)),
                p = n(647435),
                h = n(926464),
                g = o(n(344735)),
                C = n(378776),
                m = n(454964),
                v = n(445639),
                _ = n(667294),
                x = o(n(802418)),
                b = o(n(982669)),
                S = n(779740),
                j = n(948752),
                k = n(785893)
        },
        234459: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleGrievanceOfficerDetailsError = t.handleCustomerCareDetailsError = t.getLegalEntityDetails = t.ComplianceInfoStructuralField = t.ComplianceInfoPrimitiveField = t.ComplianceInfoLoading = t.ComplianceInfoHelpCenterBanner = t.ComplianceInfoGroup = void 0;
            var a = o(n(887757)),
                i = o(n(348926)),
                r = o(n(870473)),
                l = n(451226),
                c = n(125089),
                d = o(n(209222)),
                s = n(192070),
                u = n(208188),
                f = o(n(644178)),
                p = o(n(758927)),
                h = n(96293),
                g = n(558288),
                C = n(71867),
                m = o(n(849788)),
                v = n(548360),
                _ = o(n(156720)),
                x = n(785893),
                b = {
                    fieldLabel: {
                        display: "f804f6gw",
                        lineHeight: "gz7w46tb"
                    },
                    fieldValue: {
                        display: "f804f6gw",
                        wordBreak: "cw3vfol9",
                        whiteSpace: "c2jc77nu"
                    },
                    helpCenterBanner: {
                        fontSize: "f8jlpxt4",
                        lineHeight: "jgi8eev7"
                    },
                    displayRight: {
                        textAlign: "cb8ormfa"
                    }
                },
                S = function() {
                    return v.fbt._("Not Provided", null, {
                        hk: "43OpXI"
                    })
                };
            t.ComplianceInfoGroup = function(e) {
                var t = e.title,
                    n = e.children;
                return (0, x.jsx)(m.default, {
                    title: t,
                    xstyle: C.uiPadding.vert8,
                    children: n
                })
            };
            t.ComplianceInfoPrimitiveField = function(e) {
                var t = e.value,
                    n = e.label,
                    o = e.forceLTR;
                return (0, x.jsxs)(j, {
                    children: [(0, x.jsx)(P, {
                        value: t,
                        forceLTR: o
                    }), (0, x.jsx)(T, {
                        label: n
                    })]
                })
            };
            t.ComplianceInfoStructuralField = function(e) {
                var t = e.valuesMap,
                    n = void 0 === t ? {} : t,
                    o = e.keys,
                    a = void 0 === o ? [] : o,
                    i = e.label,
                    r = a.reduce((function(e, t) {
                        return n[t] ? e.concat(n[t]) : e
                    }), []),
                    l = r.length ? r.join(", ") : S();
                return (0, x.jsxs)(j, {
                    children: [(0, x.jsx)(P, {
                        value: l
                    }), (0, x.jsx)(T, {
                        label: i
                    })]
                })
            };
            var j = function(e) {
                var t = e.children;
                return (0, x.jsx)(d.default, {
                    multiline: !0,
                    restrictSpacing: !0,
                    children: (0, x.jsx)("div", {
                        className: (0, _.default)(C.uiPadding.vert8),
                        children: t
                    })
                })
            };
            t.ComplianceInfoLoading = function() {
                return (0, x.jsx)(u.FlexRow, {
                    align: "center",
                    justify: "center",
                    testid: "compliance-info-loading",
                    children: (0, x.jsx)(f.default, {
                        children: (0, x.jsx)(h.Spinner, {})
                    })
                })
            };
            t.ComplianceInfoHelpCenterBanner = function(e) {
                var t = e.xstyle;
                return (0, x.jsxs)("div", {
                    className: (0, _.default)(b.helpCenterBanner, t),
                    "data-testid": "compliance-help-center-banner",
                    children: [v.fbt._("Indian law requires additional information from businesses selling online.", null, {
                        hk: "1zuHU2"
                    }), " ", (0, x.jsx)(s.ExternalLink, {
                        href: "https://faq.whatsapp.com/general/account-and-profile/how-to-comply-with-the-laws-for-selling-online-in-India",
                        children: v.fbt._("Learn more", null, {
                            hk: "1JNnQ1"
                        })
                    })]
                })
            };
            var k = function(e) {
                    return (Array.isArray(e) ? e[0] : e).serialize()
                },
                y = function() {
                    var e = (0, i.default)(a.default.mark((function e(t) {
                        var n, o;
                        return a.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, c.BusinessProfileCollection.update(t, {
                                        getMerchantCompliance: !0
                                    });
                                case 2:
                                    if (n = e.sent, !(o = k(n))) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", o.legalEntityDetails || void 0);
                                case 6:
                                    __LOG__(3)`compliance: cannot fetch business details (${t.toString()})`;
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
            t.getLegalEntityDetails = y;
            var T = function(e) {
                    var t = e.label;
                    return (0, x.jsx)("div", {
                        className: (0, _.default)(b.fieldLabel),
                        "data-testid": "compliance-info-field-label",
                        children: (0, x.jsx)(g.TextSpan, {
                            theme: "muted",
                            children: t
                        })
                    })
                },
                P = function(e) {
                    var t = e.value,
                        n = e.forceLTR,
                        o = void 0 !== n && n,
                        a = p.default.isRTL();
                    return (0, x.jsx)("div", {
                        className: (0, _.default)(b.fieldValue, C.uiMargin.vert3, a && o && b.displayRight),
                        dir: o || !a ? "ltr" : "rtl",
                        "data-testid": "compliance-info-field-value",
                        children: t || S()
                    })
                };
            t.handleCustomerCareDetailsError = function(e, t, n, o) {
                (0, l.existsCustomerCareDetailsContact)(e, t, n, o) || (0, r.default)(v.fbt._("At least one phone number is required. Please provide another phone number before removing this.", null, {
                    hk: "2LGoJd"
                }))
            };
            t.handleGrievanceOfficerDetailsError = function(e, t, n, o) {
                (0, l.existsGrievanceOfficerDetailsContact)(e, t, n, o) || (0, r.default)(v.fbt._("At least one contact method is required. Please provide another contact method first before removing this.", null, {
                    hk: "NXBiy"
                }))
            }
        },
        854671: (e, t, n) => {
            "use strict";
            var o = n(739163).default,
                a = n(263026).default,
                i = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.images,
                    i = e.renderFallback,
                    b = e.fallbackMediaData,
                    j = e.fetching,
                    k = e.onClick,
                    y = (0, x.useRef)(null),
                    T = (0, x.useRef)(null),
                    P = (0, x.useRef)(null),
                    E = (0, x.useRef)(null),
                    I = (0, x.useRef)(null),
                    w = (0, x.useState)(null),
                    O = (0, l.default)(w, 2),
                    A = O[0],
                    L = O[1],
                    M = (0, x.useState)(n.filter((function(e) {
                        return e.mediaData.mediaStage === p.MEDIA_DATA_STAGE.RESOLVED
                    })).length),
                    R = (0, l.default)(M, 2),
                    N = R[0],
                    D = R[1],
                    B = (0, x.useState)(!1),
                    H = (0, l.default)(B, 2),
                    F = H[0],
                    W = H[1],
                    z = N === n.length,
                    V = function() {
                        return D((function(e) {
                            return e + 1
                        }))
                    };
                (0, x.useEffect)((function() {
                    var e = null;
                    if (!z && !i) {
                        var t, n, r = T.current;
                        if (!r) return;
                        null === (t = P.current) || void 0 === t || t.controller.abort();
                        var l = (e = new o).signal,
                            s = ((null === (n = P.current) || void 0 === n ? void 0 : n.promise) || a.resolve()).then((function() {
                                return (0, m.default)(r, {
                                    opacity: [1, 0]
                                }, {
                                    delay: 75,
                                    duration: 50
                                })
                            })),
                            u = (0, d.default)(s, l).then((function() {
                                if (l.aborted) throw new c.AbortError;
                                W(!0)
                            })).catch((0, c.catchAbort)((function() {
                                (0, m.default)(r, "stop", !0)
                            }))).finally((function() {
                                P.current = null
                            }));
                        P.current = {
                            promise: u,
                            controller: e
                        }
                    }
                    return function() {
                        var t;
                        null === (t = e) || void 0 === t || t.abort()
                    }
                }), [z, i]);
                var U, G, q, Y = function() {
                    var e;
                    return (null === (e = y.current) || void 0 === e ? void 0 : e.children) ? y.current.scrollWidth === y.current.offsetWidth ? null : 0 === y.current.scrollLeft ? "next" : y.current.scrollWidth - 1 <= y.current.scrollLeft + y.current.offsetWidth ? "prev" : "both" : null
                };
                if ((0, x.useEffect)((function() {
                        L(Y())
                    }), [z]), i && 0 === n.length) return (0, S.jsx)("div", {
                    className: v.default.carousel,
                    dir: "ltr",
                    children: (0, S.jsx)("div", {
                        className: (0, _.default)(v.default.contentContainer, v.default.slidesContainer),
                        children: b && (0, S.jsx)(f.default, {
                            altText: "",
                            mediaData: b,
                            renderFallback: !0,
                            singleSlide: !0
                        })
                    })
                });
                var K = function() {
                    E.current = null;
                    var e = Y();
                    A !== e && L(e)
                };
                if (n.length > 1) {
                    var Z = function() {
                            var e = y.current;
                            if (null != e && ("prev" === A || "both" === A)) {
                                for (var t = 0, n = e.scrollLeft + Math.floor(e.offsetWidth / 2), o = e.lastElementChild; o instanceof HTMLElement && 0 === t;) {
                                    var a = o.offsetLeft + Math.floor(o.offsetWidth / 2);
                                    a < n && (t = a - n), o = o.previousElementSibling
                                }
                                0 !== t && e.scrollBy({
                                    left: t,
                                    behavior: "smooth"
                                })
                            }
                        },
                        X = function() {
                            var e = y.current;
                            if (null != e && ("next" === A || "both" === A)) {
                                for (var t = 0, n = e.scrollLeft + Math.floor(e.offsetWidth / 2), o = e.firstElementChild; o instanceof HTMLElement && 0 === t;) {
                                    var a = o.offsetLeft + Math.floor(o.offsetWidth / 2);
                                    n < a && (t = a - n), o = o.nextElementSibling
                                }
                                0 !== t && e.scrollBy({
                                    left: t,
                                    behavior: "smooth"
                                })
                            }
                        },
                        Q = function() {
                            I.current = null;
                            var e = Y();
                            A !== e && L(e)
                        };
                    q = function() {
                        null == I.current && (I.current = requestAnimationFrame(Q))
                    }, z && null != A && (U = (0, S.jsx)(s.ChevronButton, {
                        type: s.ButtonType.Prev,
                        onClick: Z,
                        onKeyDown: Z,
                        disabled: "prev" !== A && "both" !== A,
                        theme: g.RoundTheme.Small,
                        overMedia: !0
                    }), G = (0, S.jsx)(s.ChevronButton, {
                        type: s.ButtonType.Next,
                        onClick: X,
                        onKeyDown: X,
                        disabled: "next" !== A && "both" !== A,
                        theme: g.RoundTheme.Small,
                        overMedia: !0
                    }))
                }
                var J = 1 === n.length,
                    $ = n.map((function(e, t) {
                        return (0, S.jsx)(f.default, {
                            altText: "",
                            image: e,
                            singleSlide: J,
                            mediaData: e.mediaData,
                            onClick: k,
                            onLoad: V
                        }, t)
                    })),
                    ee = z ? null : (0, S.jsx)("div", {
                        className: (0, _.default)(v.default.contentContainer, v.default.spinnerContainer),
                        children: (0, S.jsx)("div", {
                            className: v.default.spinner,
                            ref: T,
                            children: (0, S.jsx)(C.Spinner, {
                                color: "default",
                                size: 50,
                                stroke: 4
                            })
                        })
                    }),
                    te = (0, u.cx)((t = {}, (0, r.default)(t, v.default.loaded, !j && z), (0, r.default)(t, v.default.fadeIn, F), (0, r.default)(t, v.default.carousel, !0), t));
                return (0, S.jsxs)("div", {
                    className: te,
                    dir: "ltr",
                    children: [ee, (0, S.jsx)("div", {
                        ref: y,
                        className: (0, _.default)(v.default.contentContainer, v.default.slidesContainer),
                        onScroll: q,
                        children: $
                    }), U, G, (0, S.jsx)(h.default, {
                        onResize: function() {
                            null == E.current && (E.current = requestAnimationFrame(K))
                        }
                    })]
                })
            };
            var r = i(n(859713)),
                l = i(n(963038)),
                c = n(497384),
                d = i(n(704205)),
                s = n(151508),
                u = n(157405),
                f = i(n(602590)),
                p = n(966454),
                h = i(n(408452)),
                g = n(659696),
                C = n(96293),
                m = i(n(931771)),
                v = i(n(198074)),
                _ = i(n(706442)),
                x = n(667294),
                b = i(n(730523)),
                S = n(785893);
            b.default.polyfill()
        },
        602590: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(966454),
                i = o(n(142162)),
                r = n(667294),
                l = n(948752),
                c = n(785893),
                d = function(e) {
                    var t = e.mediaData,
                        n = e.altText,
                        o = e.image,
                        d = e.singleSlide,
                        s = e.renderFallback,
                        u = e.onClick,
                        f = e.onLoad,
                        p = e.forwardRef,
                        h = (0, l.useModelValues)(t, ["fullHeight", "fullWidth", "mediaStage", "renderableUrl"]),
                        g = h.fullHeight,
                        C = h.fullWidth,
                        m = h.mediaStage,
                        v = h.renderableUrl,
                        _ = (0, r.useRef)(null),
                        x = (0, r.useRef)(m === a.MEDIA_DATA_STAGE.RESOLVED);
                    (0, r.useEffect)((function() {
                        !f || x.current || s || m !== a.MEDIA_DATA_STAGE.RESOLVED || (f(), x.current = !0)
                    }), [f, s, m]);
                    var b = !!d,
                        S = C && g ? C / g : .8;
                    S < .8 && (S = .8), S > 1.91 && (S = 1.91), S > 1 && !b && (S = 1);
                    var j = {
                            width: b && S < 1 ? 100 * S + "%" : 1 !== S || d ? null : "100%"
                        },
                        k = {
                            paddingTop: `${Math.floor(100/S)}%`
                        },
                        y = {
                            cursor: "" + (u ? "pointer" : "auto")
                        };
                    return (0, c.jsx)("div", {
                        ref: p ? function(e) {
                            return p(e)
                        } : null,
                        className: i.default.slide,
                        style: j,
                        children: (0, c.jsx)("div", {
                            className: i.default.slideInnerContainer,
                            style: k,
                            children: (0, c.jsx)("img", {
                                ref: _,
                                alt: n,
                                src: v,
                                className: i.default.image,
                                style: y,
                                draggable: "false",
                                onClick: function() {
                                    u && _.current && o && u(_.current, o)
                                }
                            })
                        })
                    })
                };
            t.default = d
        },
        507759: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EmptyCanvas = C, t.MediaGalleryView = void 0;
            var a = o(n(319)),
                i = n(544607),
                r = o(n(758927)),
                l = n(821194),
                c = n(96293),
                d = n(937915),
                s = n(548360),
                u = o(n(706442)),
                f = n(667294),
                p = o(n(156720)),
                h = n(785893),
                g = {
                    canvasComponent: {
                        position: "g0rxnol2",
                        width: "d0st09ow",
                        marginEnd: "spjzgwxb",
                        marginBottom: "brac1wpa",
                        "@media (max-width: 1024px)": {
                            width: "bazijzwv"
                        },
                        "@media (max-width: 800px)": {
                            width: "n0hkwe29"
                        }
                    },
                    canvasComponentBefore: {
                        display: "srqslfex",
                        paddingTop: "h9iecx73",
                        content: "d3pjxk2u"
                    },
                    canvasEmpty: {
                        position: "g0rxnol2",
                        width: "d0st09ow",
                        height: "bbl9m3t3",
                        marginEnd: "ikc09dv3",
                        "@media (max-width: 1024px)": {
                            width: "bazijzwv"
                        },
                        "@media (max-width: 800px)": {
                            width: "n0hkwe29"
                        }
                    },
                    canvasSecondRow: {
                        display: "qibyn6m3",
                        "@media (max-width: 1024px)": {
                            display: "s9437i69"
                        },
                        "@media (max-width: 800px)": {
                            display: "g3bgiwf5"
                        }
                    },
                    canvasFirst: {
                        height: "ohuqqxaf",
                        marginTop: "tt8xd2xn",
                        marginEnd: "jnwc1y2a",
                        marginBottom: "mpdn4nr2",
                        marginStart: "svoq16ka"
                    },
                    more: {
                        display: "p357zi0d",
                        alignItems: "gndfcl4n",
                        justifyContent: "ac2vgrno",
                        paddingTop: "i5tg98hk",
                        paddingEnd: "f9ovudaz",
                        paddingBottom: "przvwfww",
                        paddingStart: "gx1rr48f"
                    },
                    container: {
                        display: "p357zi0d",
                        flexDirection: "sap93d0t",
                        flexWrap: "lkhkxwyq",
                        alignItems: "gndfcl4n",
                        justifyContent: "ac2vgrno",
                        paddingTop: "n1yiu2zv",
                        marginEnd: "ikc09dv3",
                        overflowY: "r7fjleex"
                    },
                    justifySpaceBetween: {
                        justifyContent: "o4u7okr9",
                        width: "ln8gz9je"
                    },
                    galleryEmpty: {
                        height: "ohuqqxaf",
                        paddingTop: "i5tg98hk",
                        paddingBottom: "n3bptxsn",
                        fontSize: "f8jlpxt4",
                        lineHeight: "amac7m9s",
                        color: "hcag4mye"
                    },
                    fontSmoothing: {
                        "-webkit-font-smoothing": "kh4n4d4z",
                        "-moz-osx-font-smoothing": "tt14wmjx"
                    },
                    drawer: {
                        paddingTop: "t2quo9z4",
                        paddingBottom: "hgytzyjk",
                        paddingStart: "m1h4cxg8",
                        paddingEnd: "qcdmbpik",
                        marginEnd: "jnwc1y2a",
                        overflowY: "rpvcun8f"
                    },
                    drawerBody: {
                        position: "g0rxnol2",
                        zIndex: "b9fczbqn",
                        display: "p357zi0d",
                        flexGrow: "ggj6brxn",
                        flexDirection: "f8m0rgwh",
                        overflowX: "gfz4du6o",
                        overflowY: "ag5g9lrv",
                        opacity: "bs7a17vp"
                    },
                    themeChatInfo: {
                        color: "ffxp8o2t"
                    }
                };

            function C() {
                return (0, h.jsx)("div", {
                    className: (0, p.default)(g.canvasEmpty)
                })
            }

            function m(e, t) {
                var n = e.mediaCollection,
                    o = e.fullCollection,
                    r = e.chat,
                    l = e.onScroll,
                    s = e.justify,
                    f = e.medias || e.productMedias,
                    m = "chat-info" === e.theme,
                    _ = 0 === n.length;
                if (!f) return null;
                var x = (0, p.default)(g.container, Boolean(o) && g.drawer, _ && g.galleryEmpty, _ && d.isOSMac && g.fontSmoothing, "space-between" === s && g.justifySpaceBetween, m && _ && g.themeChatInfo),
                    b = (0, a.default)(f);
                if (n.queryMediaBefore && (o || b.length < 6)) {
                    var S = (0, p.default)(g.more, g.canvasComponent, !o && b.length >= 3 && g.canvasSecondRow, 0 === n.length && g.canvasFirst);
                    b.push((0, h.jsxs)("div", {
                        className: S,
                        children: [(0, h.jsx)("span", {
                            className: (0, p.default)(g.canvasComponentBefore)
                        }), (0, h.jsx)(c.Spinner, {
                            stroke: 6,
                            size: 24
                        })]
                    }, "spinner"))
                }
                if (0 === f.length) {
                    if (o) {
                        if (n.queryMediaBefore) return (0, h.jsx)("div", {
                            className: (0, p.default)(g.drawer, g.drawerBody),
                            children: (0, h.jsx)(i.Loading, {})
                        });
                        if (!n.hasMediaBefore) return (0, h.jsx)(i.MediaMsgs, {})
                    }
                    if (m) return null;
                    n.queryMediaBefore || n.hasMediaBefore || (x = (0, u.default)(x, (0, p.default)(g.galleryEmpty, d.isOSMac && g.fontSmoothing)), b = [v(Math.max(r ? r.docCount : 0, 0), Math.max(r ? r.linkCount : 0, 0), Math.max(r ? r.productCount : 0, 0))])
                } else
                    for (var j = 0; j < 6; j++) b.push((0, h.jsx)(C, {}, "empty" + j));
                return (0, h.jsx)("div", {
                    onScroll: l,
                    "data-testid": "media-gallery",
                    className: x,
                    ref: t,
                    children: b
                })
            }

            function v(e, t, n) {
                var o = [];
                return null != e && e > 0 && o.push(r.default.t(244, {
                    count: e,
                    _plural: e
                })), null != t && t > 0 && o.push(r.default.t(395, {
                    count: t,
                    _plural: t
                })), l.ServerProps.productMediaAttachments && null != n && n > 0 && o.push(r.default.t(522, {
                    count: n,
                    _plural: n
                })), o.length > 0 ? o.join(r.default.t(253)) : l.ServerProps.productMediaAttachments ? s.fbt._("No Media, Links, Docs and Products", null, {
                    hk: "3RKA8T"
                }) : s.fbt._("No Media, Links and Docs", null, {
                    hk: "226fK3"
                })
            }
            var _ = (0, f.forwardRef)(m);
            t.MediaGalleryView = _, _.displayName = "MediaGalleryView"
        },
        725536: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BusinessAddressIcon = function(e) {
                var t, n, o = e.iconXstyle,
                    s = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, d);
                if (f) {
                    var h = f.x,
                        g = void 0 === h ? 0 : h,
                        C = f.y,
                        m = void 0 === C ? 0 : C,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    n = [g, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 24,
                    S = 24;
                null == s && null == u || (b = s, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "business-address"
                }, p), {}, {
                    children: (0, c.jsxs)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 24 24",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(o),
                        version: "1.1",
                        children: [(0, c.jsx)("title", {
                            children: "business-address"
                        }), (0, c.jsx)("desc", {
                            children: "Created with Sketch."
                        }), (0, c.jsx)("defs", {}), (0, c.jsxs)("g", {
                            stroke: "none",
                            strokeWidth: 1,
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, c.jsx)("path", {
                                d: "M12.0497571,11.9753826 C10.5804884,11.9753826 9.42411942,10.8207142 9.42411942,9.34974492 C9.42411942,7.88047615 10.5804884,6.72580776 12.0497571,6.72580776 C13.5190259,6.72580776 14.6753948,7.88047615 14.6753948,9.34974492 C14.6753948,10.8207142 13.5190259,11.9753826 12.0497571,11.9753826 M12.0497571,2 C7.95485066,2 4.70001221,5.25483845 4.70001221,9.34974492 C4.70001221,14.8101871 12.0497571,23 12.0497571,23 C12.0497571,23 19.399502,14.8101871 19.399502,9.34974492 C19.399502,5.25483845 16.1446636,2 12.0497571,2",
                                id: "Fill-1",
                                fill: "currentColor"
                            }), (0, c.jsx)("g", {
                                id: "slices"
                            })]
                        })]
                    })
                }))
            };
            var a = o(n(81109)),
                i = o(n(506479)),
                r = n(401304),
                l = o(n(156720)),
                c = n(785893),
                d = ["iconXstyle", "height", "width", "viewBox"]
        },
        141193: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BusinessCategoryIcon = function(e) {
                var t, n, o = e.iconXstyle,
                    s = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, d);
                if (f) {
                    var h = f.x,
                        g = void 0 === h ? 0 : h,
                        C = f.y,
                        m = void 0 === C ? 0 : C,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    n = [g, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 24,
                    S = 24;
                null == s && null == u || (b = s, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "business-category"
                }, p), {}, {
                    children: (0, c.jsxs)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 24 24",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(o),
                        version: "1.1",
                        children: [(0, c.jsx)("title", {
                            children: "business-category"
                        }), (0, c.jsx)("desc", {
                            children: "Created with Sketch."
                        }), (0, c.jsx)("defs", {}), (0, c.jsxs)("g", {
                            stroke: "none",
                            strokeWidth: 1,
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, c.jsx)("path", {
                                d: "M5.60860827,7.15515467 C4.78378352,7.15515467 4.06206187,6.43343302 4.06206187,5.60860827 C4.06206187,4.78378352 4.78378352,4.06206187 5.60860827,4.06206187 C6.43343302,4.06206187 7.15515467,4.78378352 7.15515467,5.60860827 C7.15515467,6.43343302 6.43343302,7.15515467 5.60860827,7.15515467 M22.0020001,11.897897 L12.7227217,2.61861856 C12.4134124,2.20620619 11.897897,2 11.2792784,2 L4.06206187,2 C2.92792784,2 2,2.92792784 2,4.06206187 L2,11.2792784 C2,11.897897 2.20620619,12.4134124 2.61861856,12.7227217 L11.897897,22.0020001 C12.3103093,22.4144125 12.8258248,22.6206187 13.3413403,22.6206187 C13.9599588,22.6206187 14.4754743,22.4144125 14.7847836,22.0020001 L22.0020001,14.7847836 C22.4144125,14.3723712 22.6206187,13.8568557 22.6206187,13.3413403 C22.6206187,12.7227217 22.4144125,12.2072063 22.0020001,11.897897",
                                id: "Page-1-Copy-2",
                                fill: "currentColor"
                            }), (0, c.jsx)("g", {
                                id: "slices",
                                transform: "translate(0.000000, -234.000000)"
                            })]
                        })]
                    })
                }))
            };
            var a = o(n(81109)),
                i = o(n(506479)),
                r = n(401304),
                l = o(n(156720)),
                c = n(785893),
                d = ["iconXstyle", "height", "width", "viewBox"]
        },
        80943: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BusinessEmailIcon = function(e) {
                var t, n, o = e.iconXstyle,
                    s = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, d);
                if (f) {
                    var h = f.x,
                        g = void 0 === h ? 0 : h,
                        C = f.y,
                        m = void 0 === C ? 0 : C,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    n = [g, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 24,
                    S = 24;
                null == s && null == u || (b = s, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "business-email"
                }, p), {}, {
                    children: (0, c.jsxs)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 24 24",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(o),
                        version: "1.1",
                        children: [(0, c.jsx)("title", {
                            children: "business-email"
                        }), (0, c.jsx)("desc", {
                            children: "Created with Sketch."
                        }), (0, c.jsx)("defs", {}), (0, c.jsxs)("g", {
                            stroke: "none",
                            strokeWidth: 1,
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, c.jsx)("path", {
                                d: "M20.9169216,8.25409863 L12.2871787,13.5717219 L3.65743574,8.25409863 L3.65743574,6.12704932 L12.2871787,11.4446726 L20.9169216,6.12704932 L20.9169216,8.25409863 Z M20.9169216,4 L3.65743574,4 C2.47084608,4 1.51078718,4.95717219 1.51078718,6.12704932 L1.5,18.8893452 C1.5,20.0592223 2.47084608,21.0163945 3.65743574,21.0163945 L20.9169216,21.0163945 C22.1035113,21.0163945 23.0743574,20.0592223 23.0743574,18.8893452 L23.0743574,6.12704932 C23.0743574,4.95717219 22.1035113,4 20.9169216,4 L20.9169216,4 Z",
                                fill: "currentColor"
                            }), (0, c.jsx)("g", {
                                id: "slices",
                                transform: "translate(0.000000, -480.000000)"
                            })]
                        })]
                    })
                }))
            };
            var a = o(n(81109)),
                i = o(n(506479)),
                r = n(401304),
                l = o(n(156720)),
                c = n(785893),
                d = ["iconXstyle", "height", "width", "viewBox"]
        },
        228855: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BusinessWebsiteIcon = function(e) {
                var t, n, o = e.iconXstyle,
                    s = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, d);
                if (f) {
                    var h = f.x,
                        g = void 0 === h ? 0 : h,
                        C = f.y,
                        m = void 0 === C ? 0 : C,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    n = [g, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 24,
                    S = 24;
                null == s && null == u || (b = s, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "business-website"
                }, p), {}, {
                    children: (0, c.jsx)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 24 24",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(o),
                        version: "1.1",
                        x: "0px",
                        y: "0px",
                        enableBackground: "new 0 0 24 24",
                        xmlSpace: "preserve",
                        children: (0, c.jsx)("path", {
                            id: "Fill-1-Copy",
                            fill: "currentColor",
                            enableBackground: "new    ",
                            d: "M18.4,17.7c-0.3-0.8-1-1.5-2-1.5h-1v-3.1 c0-0.6-0.4-1-1-1H8.2V10h2.1c0.6,0,1-0.4,1-1V6.9h2.1c1.1,0,2.1-0.9,2.1-2.1V4.4c3,1.3,5.2,4.3,5.2,7.7 C20.6,14.3,19.8,16.3,18.4,17.7L18.4,17.7z M11,20.6C6.8,20,3.4,16.4,3.4,12c0-0.7,0.1-1.3,0.2-1.9l5.2,5.2v1.1c0,1.2,1,2.2,2.2,2.2 V20.6z M12,1.5C6.2,1.5,1.5,6.2,1.5,12S6.2,22.5,12,22.5S22.5,17.8,22.5,12S17.8,1.5,12,1.5L12,1.5z"
                        })
                    })
                }))
            };
            var a = o(n(81109)),
                i = o(n(506479)),
                r = n(401304),
                l = o(n(156720)),
                c = n(785893),
                d = ["iconXstyle", "height", "width", "viewBox"]
        },
        965293: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CartInterstitialGraphicIcon = function(e) {
                var t, n, o = e.iconXstyle,
                    s = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, d);
                if (f) {
                    var h = f.x,
                        g = void 0 === h ? 0 : h,
                        C = f.y,
                        m = void 0 === C ? 0 : C,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    n = [g, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 116,
                    S = 117;
                null == s && null == u || (b = s, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "cart-interstitial-graphic"
                }, p), {}, {
                    children: (0, c.jsxs)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 117 116",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(o),
                        fill: "none",
                        children: [(0, c.jsx)("path", {
                            opacity: .15,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.7538 28.8194L1.11733 25.7279L10.7538 22.6365L13.8452 13L16.9367 22.6365L26.5732 25.7279L16.9367 28.8194L13.8453 38.4558L10.7538 28.8194Z",
                            fill: "currentColor"
                        }), (0, c.jsx)("path", {
                            opacity: .6,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M85.568 105.137L78.0729 102.733L85.568 100.329L87.9724 92.8335L90.3769 100.329L97.8719 102.733L90.3769 105.137L87.9724 112.632L85.568 105.137Z",
                            fill: "currentColor"
                        }), (0, c.jsx)("path", {
                            opacity: .38,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M18.1989 86.9097L13.3807 85.364L18.1989 83.8182L19.7447 79L21.2904 83.8182L26.1086 85.364L21.2904 86.9097L19.7447 91.7279L18.1989 86.9097Z",
                            fill: "currentColor"
                        }), (0, c.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M94.8452 58C94.8452 77.8823 78.7274 94 58.8452 94C38.9629 94 22.8452 77.8823 22.8452 58C22.8452 38.1177 38.9629 22 58.8452 22C66.1124 22 72.8767 24.1533 78.5348 27.8568C77.4618 29.6538 76.8452 31.7549 76.8452 34C76.8452 40.6274 82.2178 46 88.8452 46C90.1496 46 91.4054 45.7919 92.5812 45.407C94.0449 49.3267 94.8452 53.5699 94.8452 58ZM95 32.5H90.5V28H87.5V32.5H83V35.5H87.5V40H90.5V35.5H95V32.5ZM48.3602 70C48.3602 68.35 49.6952 67 51.3452 67C52.9952 67 54.3452 68.35 54.3452 70C54.3452 71.65 52.9952 73 51.3452 73C49.6952 73 48.3602 71.65 48.3602 70ZM42.3452 46V43H47.2502L48.6602 46H70.8452C71.6702 46 72.3452 46.675 72.3452 47.5C72.3452 47.755 72.2852 48.01 72.1652 48.22L66.7952 57.955C66.2852 58.885 65.2952 59.5 64.1702 59.5H52.9952L51.6452 61.945L51.6002 62.125C51.6002 62.335 51.7652 62.5 51.9752 62.5H69.3452V65.5H51.3452C49.6952 65.5 48.3452 64.15 48.3452 62.5C48.3452 61.975 48.4802 61.48 48.7202 61.06L50.7452 57.385L45.3452 46H42.3452ZM63.3602 70C63.3602 68.35 64.6952 67 66.3452 67C67.9952 67 69.3452 68.35 69.3452 70C69.3452 71.65 67.9952 73 66.3452 73C64.6952 73 63.3602 71.65 63.3602 70Z",
                            fill: "currentColor"
                        })]
                    })
                }))
            };
            var a = o(n(81109)),
                i = o(n(506479)),
                r = n(401304),
                l = o(n(156720)),
                c = n(785893),
                d = ["iconXstyle", "height", "width", "viewBox"]
        },
        307727: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CopyIcon = function(e) {
                var t, n, o = e.iconXstyle,
                    s = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, d);
                if (f) {
                    var h = f.x,
                        g = void 0 === h ? 0 : h,
                        C = f.y,
                        m = void 0 === C ? 0 : C,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    n = [g, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 24,
                    S = 24;
                null == s && null == u || (b = s, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "copy"
                }, p), {}, {
                    children: (0, c.jsx)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 24 24",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(o),
                        version: "1.1",
                        x: "0px",
                        y: "0px",
                        enableBackground: "new 0 0 24 24",
                        xmlSpace: "preserve",
                        children: (0, c.jsx)("path", {
                            fill: "currentColor",
                            d: "M15.5,3H5.6C4.7,3,4,3.7,4,4.6v11.5h1.6V4.7h9.9V3z M18,6.3H8.9C8,6.3,7.3,7,7.3,7.9 v11.5C7.3,20.3,8,21,8.9,21H18c0.9,0,1.6-0.7,1.6-1.6V7.9C19.6,7,18.8,6.3,18,6.3z M18,19.4H8.9V7.9H18V19.4z"
                        })
                    })
                }))
            };
            var a = o(n(81109)),
                i = o(n(506479)),
                r = n(401304),
                l = o(n(156720)),
                c = n(785893),
                d = ["iconXstyle", "height", "width", "viewBox"]
        },
        847712: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DisappearingLogoIcon = function(e) {
                var t, n, o = e.iconXstyle,
                    s = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, d);
                if (f) {
                    var h = f.x,
                        g = void 0 === h ? 0 : h,
                        C = f.y,
                        m = void 0 === C ? 0 : C,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    n = [g, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 112,
                    S = 112;
                null == s && null == u || (b = s, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "disappearing-logo"
                }, p), {}, {
                    children: (0, c.jsx)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 112 112",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(o),
                        fill: "none",
                        children: (0, c.jsxs)("g", {
                            fill: "#06cf9c",
                            children: [(0, c.jsx)("path", {
                                clipRule: "evenodd",
                                d: "m56 112c30.9279 0 56-25.0721 56-56s-25.0721-56-56-56-56 25.0721-56 56 25.0721 56 56 56zm-.0005-83.0671c-14.9485 0-27.0666 12.1181-27.0666 27.0666s12.1181 27.0667 27.0666 27.0667c.1482 0 .2961-.0012.4437-.0036 1.6607-.0267 2.9853-1.3947 2.9586-3.0554-.0268-1.6607-1.3947-2.9854-3.0555-2.9586-.1153.0018-.2309.0028-.3468.0028-11.6266 0-21.0518-9.4253-21.0518-21.0519s9.4252-21.0518 21.0518-21.0518c.1159 0 .2315.0009.3468.0028 1.6608.0267 3.0287-1.2979 3.0555-2.9586.0267-1.6608-1.2979-3.0287-2.9586-3.0555-.1476-.0023-.2955-.0035-.4437-.0035zm13.1524 3.4053c-1.4511-.8081-3.2826-.2869-4.0907 1.1642-.8082 1.4511-.2869 3.2825 1.1641 4.0907.2008.1118.3995.2268.5962.3449 1.4239.8552 3.2714.3943 4.1267-1.0296.8552-1.4238.3942-3.2713-1.0296-4.1266-.2529-.1519-.5085-.2998-.7667-.4436zm10.0653 9.7423c-.8552-1.4239-2.7027-1.8848-4.1266-1.0296-1.4238.8552-1.8848 2.7028-1.0295 4.1266.1181.1967.2331.3955.3449.5962.8081 1.4511 2.6396 1.9723 4.0907 1.1642s1.9723-2.6396 1.1642-4.0907c-.1439-.2582-.2918-.5138-.4437-.7667zm3.8454 13.4754c-.0267-1.6608-1.3947-2.9854-3.0554-2.9586-1.6607.0267-2.9853 1.3947-2.9586 3.0554.0019.1154.0028.231.0028.3468 0 .1159-.0009.2315-.0028.3468-.0267 1.6608 1.2979 3.0287 2.9586 3.0555 1.6607.0267 3.0287-1.2979 3.0554-2.9586.0024-.1476.0036-.2955.0036-.4437 0-.1481-.0012-.296-.0036-.4436zm-3.4017 13.5959c.8081-1.451.2869-3.2825-1.1642-4.0906-1.4511-.8082-3.2826-.287-4.0907 1.1641-.1118.2008-.2268.3995-.3449.5962-.8553 1.4239-.3943 3.2714 1.0295 4.1266 1.4239.8553 3.2714.3943 4.1266-1.0295.1519-.2529.2998-.5085.4437-.7668zm-9.7423 10.0654c1.4238-.8552 1.8848-2.7027 1.0296-4.1266-.8553-1.4238-2.7028-1.8848-4.1267-1.0296-.1967.1182-.3954.2332-.5962.345-1.451.8081-1.9723 2.6396-1.1641 4.0907.8081 1.4511 2.6396 1.9723 4.0907 1.1641.2582-.1438.5138-.2917.7667-.4436zm-3.2446-35.2261c.6903-.5177 1.6561-.449 2.2663.1611.6101.6101.6787 1.576.161 2.2662l-9.3605 12.4806c-1.3177 1.757-3.886 1.9395-5.4389.3866l-.4951-.495c-1.5529-1.553-1.3704-4.1213.3866-5.439z",
                                fillOpacity: .15,
                                fillRule: "evenodd"
                            }), (0, c.jsx)("path", {
                                d: "m55.9995 28.9329c-14.9485 0-27.0666 12.1181-27.0666 27.0666s12.1181 27.0667 27.0666 27.0667c.1482 0 .2961-.0012.4437-.0036 1.6607-.0267 2.9853-1.3947 2.9586-3.0554-.0268-1.6607-1.3947-2.9854-3.0555-2.9586-.1153.0018-.2309.0028-.3468.0028-11.6266 0-21.0518-9.4253-21.0518-21.0519s9.4252-21.0518 21.0518-21.0518c.1159 0 .2315.0009.3468.0028 1.6608.0267 3.0287-1.2979 3.0555-2.9586.0267-1.6607-1.2979-3.0287-2.9586-3.0555-.1476-.0023-.2955-.0035-.4437-.0035z"
                            }), (0, c.jsx)("path", {
                                d: "m69.1519 32.3382c-1.4511-.8081-3.2826-.2869-4.0907 1.1642-.8082 1.4511-.2869 3.2825 1.1641 4.0907.2008.1118.3995.2268.5962.3449 1.4239.8552 3.2714.3943 4.1266-1.0296.8553-1.4238.3943-3.2713-1.0295-4.1266-.2529-.1519-.5085-.2998-.7667-.4436z"
                            }), (0, c.jsx)("path", {
                                d: "m75.0906 41.0509c1.4239-.8552 3.2714-.3943 4.1266 1.0296.1519.2529.2998.5085.4436.7667.8082 1.4511.287 3.2826-1.1641 4.0907s-3.2826.2869-4.0907-1.1642c-.1118-.2007-.2268-.3995-.345-.5962-.8552-1.4238-.3942-3.2713 1.0296-4.1266z"
                            }), (0, c.jsx)("path", {
                                d: "m83.0626 55.5559c-.0267-1.6608-1.3947-2.9854-3.0554-2.9586-1.6607.0267-2.9854 1.3947-2.9586 3.0554.0018.1154.0028.231.0028.3468 0 .1159-.001.2315-.0028.3468-.0268 1.6608 1.2979 3.0287 2.9586 3.0555 1.6607.0267 3.0287-1.2979 3.0554-2.9586.0024-.1476.0036-.2955.0036-.4437 0-.1481-.0012-.296-.0036-.4436z"
                            }), (0, c.jsx)("path", {
                                d: "m78.4967 65.0612c1.4511.8081 1.9723 2.6396 1.1641 4.0907-.1438.2582-.2917.5138-.4436.7667-.8552 1.4238-2.7027 1.8848-4.1266 1.0295-1.4238-.8552-1.8848-2.7027-1.0296-4.1266.1182-.1967.2332-.3954.345-.5962.8081-1.451 2.6396-1.9723 4.0907-1.1641z"
                            }), (0, c.jsx)("path", {
                                d: "m69.9186 79.2172c1.4238-.8552 1.8848-2.7027 1.0295-4.1266-.8552-1.4238-2.7027-1.8848-4.1266-1.0296-.1967.1182-.3954.2332-.5962.345-1.451.8081-1.9723 2.6396-1.1641 4.0907.8081 1.4511 2.6396 1.9723 4.0907 1.1641.2582-.1438.5138-.2917.7667-.4436z"
                            }), (0, c.jsx)("path", {
                                d: "m68.9402 44.1522c-.6101-.6101-1.5759-.6788-2.2662-.1611l-12.4806 9.3605c-1.757 1.3177-1.9395 3.886-.3866 5.439l.495.495c1.553 1.5529 4.1213 1.3704 5.439-.3866l9.3605-12.4806c.5177-.6902.449-1.6561-.1611-2.2662z"
                            })]
                        })
                    })
                }))
            };
            var a = o(n(81109)),
                i = o(n(506479)),
                r = n(401304),
                l = o(n(156720)),
                c = n(785893),
                d = ["iconXstyle", "height", "width", "viewBox"]
        },
        299297: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FbshopsIcon = function(e) {
                var t, n, o = e.iconXstyle,
                    s = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, d);
                if (f) {
                    var h = f.x,
                        g = void 0 === h ? 0 : h,
                        C = f.y,
                        m = void 0 === C ? 0 : C,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    n = [g, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 12,
                    S = 120;
                null == s && null == u || (b = s, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "fbshops"
                }, p), {}, {
                    children: (0, c.jsxs)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 120 12",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(o),
                        fill: "none",
                        children: [(0, c.jsx)("path", {
                            fill: "currentColor",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M92.8438 9.10606V0.387207H93.7769V4.29277C93.9935 3.90261 94.273 3.59506 94.6155 3.37013C94.958 3.1452 95.3537 3.03272 95.8025 3.03272H95.9206C96.6018 3.03272 97.1215 3.25667 97.4798 3.70456C97.838 4.15244 98.0172 4.79242 98.0172 5.6245V9.10606H97.0841V5.76184C97.0841 5.14873 96.9719 4.68692 96.7475 4.37638C96.523 4.06584 96.1707 3.91058 95.6903 3.91058H95.5782C95.1411 3.91058 94.7681 4.0539 94.459 4.34056C94.15 4.6272 93.9226 4.98749 93.7769 5.42145V9.10606H92.8438ZM87.576 9.23744C86.8358 9.23744 86.1872 9.10009 85.6301 8.82538C85.0729 8.55068 84.6074 8.14859 84.2334 7.61908L84.9715 6.96217C85.629 7.86193 86.4972 8.31182 87.576 8.31182H87.7C88.3812 8.31182 88.8949 8.1874 89.2413 7.93858C89.5878 7.68975 89.761 7.35035 89.761 6.92038C89.761 6.62178 89.6853 6.37893 89.5337 6.19181C89.3821 6.00469 89.1873 5.8574 88.9491 5.7499C88.7109 5.64241 88.4599 5.5608 88.196 5.50506L86.6664 5.18258C86.32 5.11092 85.9814 4.99248 85.6507 4.82726C85.32 4.66204 85.0464 4.43312 84.8298 4.14049C84.6133 3.84788 84.505 3.47463 84.505 3.02078C84.505 2.53905 84.63 2.11804 84.88 1.75774C85.1301 1.39744 85.4804 1.11677 85.9313 0.915713C86.3821 0.714661 86.9106 0.614136 87.5169 0.614136H87.6468C88.9461 0.614136 89.9402 1.12174 90.6292 2.13694L89.9027 2.74011C89.5839 2.30217 89.2404 1.99263 88.8722 1.81149C88.5041 1.63034 88.0897 1.53977 87.6291 1.53977H87.5051C86.9146 1.53977 86.4372 1.66717 86.073 1.92196C85.7088 2.17676 85.5267 2.51715 85.5267 2.94314C85.5267 3.32932 85.6695 3.61795 85.9549 3.80906C86.2404 4.00015 86.6016 4.14149 87.0386 4.23306L88.515 4.54359C88.759 4.59535 89.013 4.67199 89.2769 4.77351C89.5406 4.87503 89.7867 5.01338 90.015 5.18855C90.2434 5.36373 90.4284 5.58567 90.5701 5.8544C90.7118 6.12314 90.7827 6.45059 90.7827 6.83677C90.7827 7.57728 90.5101 8.16251 89.9648 8.59248C89.4195 9.02246 88.6666 9.23744 87.7059 9.23744H87.576ZM101.265 8.83733C101.694 9.10408 102.202 9.23744 102.789 9.23744H102.907C103.494 9.23744 104.002 9.10408 104.431 8.83733C104.86 8.57059 105.192 8.20432 105.426 7.73851C105.66 7.27272 105.777 6.73923 105.777 6.13807C105.777 5.53292 105.66 4.99745 105.426 4.53165C105.192 4.06584 104.86 3.69958 104.431 3.43284C104.002 3.16609 103.494 3.03272 102.907 3.03272H102.789C102.202 3.03272 101.694 3.16609 101.265 3.43284C100.836 3.69958 100.504 4.06584 100.27 4.53165C100.036 4.99745 99.9188 5.53292 99.9188 6.13807C99.9188 6.73923 100.036 7.27272 100.27 7.73851C100.504 8.20432 100.836 8.57059 101.265 8.83733ZM102.795 8.36555H102.901C103.488 8.36555 103.952 8.16251 104.295 7.75642C104.637 7.35034 104.809 6.81088 104.809 6.13806C104.809 5.46126 104.637 4.9208 104.295 4.51671C103.952 4.11261 103.488 3.91057 102.901 3.91057H102.795C102.208 3.91057 101.744 4.11261 101.401 4.51671C101.059 4.9208 100.887 5.46126 100.887 6.13806C100.887 6.81088 101.059 7.35034 101.401 7.75642C101.744 8.16251 102.208 8.36555 102.795 8.36555ZM107.773 3.1641V11.6142H108.706V8.10279C108.927 8.48102 109.214 8.76468 109.569 8.95378C109.923 9.14289 110.313 9.23744 110.738 9.23744H110.856C111.376 9.23744 111.829 9.10607 112.214 8.8433C112.6 8.58054 112.9 8.21627 113.115 7.75046C113.33 7.28466 113.437 6.7472 113.437 6.13807C113.437 5.52496 113.33 4.98551 113.115 4.51971C112.9 4.0539 112.6 3.68962 112.214 3.42686C111.829 3.1641 111.376 3.03272 110.856 3.03272H110.738C110.301 3.03272 109.906 3.13326 109.554 3.3343C109.202 3.53535 108.919 3.83493 108.706 4.23306V3.1641H107.773ZM110.525 8.37152H110.638C111.201 8.37152 111.646 8.17644 111.975 7.78628C112.304 7.39612 112.468 6.84672 112.468 6.13806C112.468 5.42941 112.304 4.88001 111.975 4.48984C111.646 4.09968 111.201 3.90461 110.638 3.90461H110.525C110.088 3.90461 109.715 4.03399 109.406 4.29277C109.097 4.55155 108.864 4.88796 108.706 5.30201V6.96815C108.864 7.3822 109.098 7.71959 109.409 7.98037C109.72 8.24114 110.092 8.37152 110.525 8.37152ZM114.943 8.07294C115.47 8.84927 116.321 9.23744 117.494 9.23744H117.618C118.339 9.23744 118.899 9.07521 119.299 8.75075C119.698 8.42627 119.897 8.00327 119.897 7.48173C119.897 7.00797 119.751 6.63374 119.457 6.35902C119.164 6.08432 118.756 5.89124 118.232 5.77976L117.069 5.53491C116.711 5.45927 116.455 5.35875 116.301 5.23334C116.148 5.10793 116.071 4.93973 116.071 4.72872C116.071 4.458 116.196 4.246 116.446 4.09272C116.696 3.93945 117.024 3.86281 117.429 3.86281H117.535C117.882 3.86281 118.187 3.92651 118.451 4.0539C118.715 4.18131 118.945 4.38634 119.142 4.669L119.791 4.13751C119.295 3.40099 118.547 3.03272 117.547 3.03272H117.429C116.744 3.03272 116.192 3.19496 115.773 3.51943C115.353 3.8439 115.144 4.27287 115.144 4.80636C115.144 5.63843 115.707 6.16992 116.833 6.40083L117.972 6.63814C118.322 6.71641 118.573 6.82244 118.725 6.95621C118.889 7.09953 118.97 7.29063 118.97 7.5295C118.97 7.80819 118.849 8.02417 118.607 8.17744C118.365 8.33072 118.027 8.40736 117.594 8.40736H117.488C116.642 8.40736 116.01 8.10479 115.592 7.49964L114.943 8.07294Z"
                        }), (0, c.jsx)("path", {
                            fill: "currentColor",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.7972 9.18846H16.0799C16.1622 9.18846 16.209 9.1404 16.1884 9.05598C15.4415 6.36173 14.3061 3.39664 13.1708 0.872397C13.1352 0.777286 13.0408 0.719606 12.9424 0.732885H11.2714C11.1696 0.727073 11.0764 0.791175 11.043 0.889988C9.90078 3.39079 8.77119 6.35939 8.02992 9.05598C8.00707 9.1404 8.05389 9.18846 8.13613 9.18846H9.37197C9.43729 9.19366 9.49573 9.14691 9.50674 9.0806C9.67235 8.38534 9.87795 7.65493 10.1132 6.91746H14.0492C14.2844 7.65493 14.4911 8.38534 14.6614 9.0806C14.6734 9.14678 14.7319 9.19318 14.7972 9.18846ZM12.2194 2.06241C12.7082 3.1727 13.1845 4.3932 13.6139 5.61371H10.5427C10.9721 4.3932 11.4541 3.1727 11.943 2.06241H12.2194ZM6.29128 1.96269V0.848619C6.28292 0.807134 6.27132 0.779014 6.25648 0.764251C6.23422 0.742099 6.20415 0.73015 6.17315 0.730999H0.217229C0.153887 0.730999 0.102539 0.783713 0.102539 0.848619V9.07134C0.102539 9.13625 0.153887 9.18886 0.217229 9.18886H1.39052C1.45386 9.18886 1.50521 9.13625 1.50521 9.07134V5.70563H5.36113C5.42447 5.70563 5.47583 5.65301 5.47583 5.58811V4.47404C5.47583 4.40914 5.42447 4.35652 5.36113 4.35652H1.50521V2.0802H6.17659C6.23993 2.0802 6.29128 2.02758 6.29128 1.96269ZM18.4212 5.15414C18.4212 2.57591 20.1018 0.730993 22.5591 0.730993H22.7373C24.2639 0.730993 25.4445 1.51086 26.0765 2.6376C26.0948 2.66576 26.1 2.70049 26.0908 2.73284C26.0818 2.76519 26.0592 2.792 26.029 2.80638L24.9792 3.32785C24.9456 3.35012 24.9043 3.35761 24.8649 3.34862C24.8256 3.33961 24.7917 3.31487 24.7708 3.28013C24.33 2.50607 23.6678 2.09869 22.6875 2.09869H22.5093C21.0045 2.09869 19.9212 3.28594 19.9212 5.09711C19.9212 6.85938 20.9467 8.0711 22.5093 8.0711H22.691C23.6933 8.0711 24.2766 7.72888 24.7245 7.20742C24.7699 7.14495 24.8548 7.12687 24.9214 7.16551L26 7.6928C26.0337 7.70776 26.0567 7.73978 26.0603 7.77661C26.0577 7.80982 26.0451 7.84146 26.0244 7.8674C25.3624 8.83817 24.1725 9.43762 22.7153 9.43762H22.5359C19.9953 9.43529 18.4212 7.66021 18.4212 5.15414ZM35.5022 9.07149V7.95879C35.503 7.92643 35.4909 7.8951 35.4685 7.87221C35.4462 7.84934 35.4155 7.83691 35.3839 7.8379H30.4684V5.61485H34.3804C34.4437 5.61485 34.4951 5.56231 34.4951 5.49749V4.39653C34.4951 4.33171 34.4437 4.27917 34.3804 4.27917H30.4684V2.07843H35.2785C35.3417 2.07843 35.3931 2.02589 35.3931 1.96106V0.848364C35.3931 0.783542 35.3417 0.730993 35.2785 0.730993H29.1805C29.1172 0.730993 29.0659 0.783542 29.0659 0.848364V9.07149C29.0659 9.13631 29.1172 9.18885 29.1805 9.18885H35.3874C35.4507 9.18885 35.5022 9.13631 35.5022 9.07149ZM46.1468 6.8682C46.1468 8.33122 45.0333 9.18885 43.0014 9.18885H38.8377C38.7729 9.18885 38.7203 9.13632 38.7203 9.07152V0.848319C38.7203 0.783524 38.7729 0.730993 38.8377 0.730993H42.6314C44.6163 0.730993 45.6511 1.5288 45.6511 2.91908C45.6511 3.75324 45.2822 4.42434 44.2229 4.74464C45.5665 5.02504 46.1468 5.82871 46.1468 6.8682ZM42.602 2.04501H40.1567V4.31757H42.602C43.7389 4.31757 44.1994 3.93157 44.1994 3.18188C44.1994 2.43217 43.7389 2.04501 42.602 2.04501ZM44.6704 6.73796C44.6704 5.98826 44.2006 5.59523 43.0072 5.59523H40.1567V7.87014H43.0072C44.2287 7.87014 44.6704 7.49118 44.6704 6.74148V6.73796ZM53.1138 0.730993C50.5198 0.730993 48.8698 2.55963 48.8698 5.0843C48.8698 7.62413 50.5187 9.43762 53.1138 9.43762H53.29C55.884 9.43762 57.534 7.62063 57.534 5.0843C57.534 2.54798 55.884 0.730993 53.29 0.730993H53.1138ZM56.0488 5.0843C56.0488 6.88965 54.9767 8.07108 53.29 8.07108H53.1138C51.4157 8.07108 50.355 6.88848 50.355 5.0843C50.355 3.28013 51.4272 2.09868 53.1138 2.09868H53.29C54.988 2.09868 56.0488 3.27896 56.0488 5.0843ZM60.2571 5.0843C60.2571 2.55963 61.9069 0.730993 64.5005 0.730993H64.6767C67.2704 0.730993 68.9213 2.54798 68.9213 5.0843C68.9213 7.62063 67.2704 9.43762 64.6767 9.43762H64.5005C61.9069 9.43762 60.2571 7.62413 60.2571 5.0843ZM64.6767 8.07108C66.3631 8.07108 67.4351 6.88965 67.4351 5.0843C67.4351 3.27896 66.3746 2.09868 64.6767 2.09868H64.5005C62.8152 2.09868 61.7422 3.28013 61.7422 5.0843C61.7422 6.88848 62.8027 8.07108 64.5005 8.07108H64.6767ZM77.6431 9.18867H79.2185C79.3092 9.18867 79.3498 9.11715 79.2905 9.04328C78.0129 7.53073 76.6159 6.1249 75.1134 4.83959C76.481 3.6488 77.7362 2.33262 78.8627 0.907944C78.8868 0.883291 78.9016 0.850949 78.9045 0.816491C78.9045 0.768406 78.8685 0.732065 78.7965 0.732065H77.3119C77.2505 0.725018 77.1904 0.753064 77.1561 0.804758C76.2043 2.01796 75.1544 3.14945 74.0171 4.18764H73.3102V0.852836C73.3102 0.788081 73.2582 0.735583 73.194 0.735583H72.0082C71.9439 0.735583 71.8919 0.788081 71.8919 0.852836V9.0679C71.8919 9.13266 71.9439 9.18515 72.0082 9.18515H73.194C73.2582 9.18515 73.3102 9.13266 73.3102 9.0679V5.57714H74.0078C75.2511 6.66402 76.4123 7.843 77.4816 9.10425C77.5167 9.1594 77.5782 9.19156 77.6431 9.18867Z"
                        })]
                    })
                }))
            };
            var a = o(n(81109)),
                i = o(n(506479)),
                r = n(401304),
                l = o(n(156720)),
                c = n(785893),
                d = ["iconXstyle", "height", "width", "viewBox"]
        },
        49892: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HandIcon = function(e) {
                var t, n, o = e.iconXstyle,
                    s = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, d);
                if (f) {
                    var h = f.x,
                        g = void 0 === h ? 0 : h,
                        C = f.y,
                        m = void 0 === C ? 0 : C,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    n = [g, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 24,
                    S = 24;
                null == s && null == u || (b = s, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "hand"
                }, p), {}, {
                    children: (0, c.jsx)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 24 24",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(o),
                        children: (0, c.jsx)("path", {
                            d: "M11.8736 21.3346C10.9532 21.3346 10.1009 21.192 9.31667 20.9069C8.53241 20.6217 7.85185 20.2166 7.275 19.6916C6.69815 19.1666 6.24769 18.5314 5.92361 17.786C5.59954 17.0407 5.4375 16.2143 5.4375 15.3069V7.17908C5.4375 6.90686 5.53796 6.67028 5.73889 6.46936C5.93981 6.26843 6.17639 6.16797 6.44861 6.16797C6.72083 6.16797 6.95741 6.26843 7.15833 6.46936C7.35926 6.67028 7.45972 6.90686 7.45972 7.17908V11.2235C7.45972 11.3272 7.49861 11.418 7.57639 11.4957C7.65417 11.5735 7.74491 11.6124 7.84861 11.6124C7.95231 11.6124 8.04306 11.5735 8.12083 11.4957C8.19861 11.418 8.2375 11.3272 8.2375 11.2235V4.84575C8.2375 4.57352 8.33796 4.33695 8.53889 4.13602C8.73981 3.9351 8.97639 3.83464 9.24861 3.83464C9.52083 3.83464 9.75741 3.9351 9.95833 4.13602C10.1593 4.33695 10.2597 4.57352 10.2597 4.84575V11.2235C10.2597 11.3272 10.2986 11.418 10.3764 11.4957C10.4542 11.5735 10.5449 11.6124 10.6486 11.6124C10.7523 11.6124 10.8431 11.5735 10.9208 11.4957C10.9986 11.418 11.0375 11.3272 11.0375 11.2235V3.67908C11.0375 3.40686 11.138 3.17028 11.3389 2.96936C11.5398 2.76843 11.7764 2.66797 12.0486 2.66797C12.3208 2.66797 12.5574 2.76843 12.7583 2.96936C12.9593 3.17028 13.0597 3.40686 13.0597 3.67908V11.2235C13.0597 11.3272 13.0986 11.418 13.1764 11.4957C13.2542 11.5735 13.3449 11.6124 13.4486 11.6124C13.5523 11.6124 13.6431 11.5735 13.7208 11.4957C13.7986 11.418 13.8375 11.3272 13.8375 11.2235V5.23464C13.8375 4.96241 13.9347 4.72584 14.1292 4.52491C14.3236 4.32399 14.5569 4.22352 14.8292 4.22352C15.1014 4.22352 15.338 4.32399 15.5389 4.52491C15.7398 4.72584 15.8403 4.96241 15.8403 5.23464V13.4402C14.8681 13.6217 14.0806 14.0106 13.4778 14.6069C12.875 15.2032 12.5153 15.9485 12.3986 16.843C12.3856 16.9467 12.4148 17.0407 12.4861 17.1249C12.5574 17.2092 12.6514 17.2513 12.7681 17.2513C12.8718 17.2513 12.9593 17.2157 13.0306 17.1444C13.1019 17.0731 13.1505 16.9856 13.1764 16.8819C13.2801 16.13 13.5912 15.5078 14.1097 15.0152C14.6282 14.5226 15.2829 14.2245 16.0736 14.1207C16.2162 14.0948 16.3426 14.0235 16.4528 13.9069C16.563 13.7902 16.6181 13.6541 16.6181 13.4985V10.2319C16.6181 9.95964 16.712 9.72954 16.9 9.54158C17.088 9.35362 17.3181 9.25964 17.5903 9.25964C17.8625 9.25964 18.0926 9.35362 18.2806 9.54158C18.4685 9.72954 18.5625 9.95964 18.5625 10.2319V15.3069C18.5625 16.2143 18.3843 17.0407 18.0278 17.786C17.6713 18.5314 17.1884 19.1666 16.5792 19.6916C15.9699 20.2166 15.2602 20.6217 14.45 20.9069C13.6398 21.192 12.781 21.3346 11.8736 21.3346Z",
                            fill: "currentColor"
                        })
                    })
                }))
            };
            var a = o(n(81109)),
                i = o(n(506479)),
                r = n(401304),
                l = o(n(156720)),
                c = n(785893),
                d = ["iconXstyle", "height", "width", "viewBox"]
        },
        663318: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LogoInstagramColorIcon = function(e) {
                var t, n, o = e.iconXstyle,
                    s = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, d);
                if (f) {
                    var h = f.x,
                        g = void 0 === h ? 0 : h,
                        C = f.y,
                        m = void 0 === C ? 0 : C,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    n = [g, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 22,
                    S = 24;
                null == s && null == u || (b = s, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "logo-instagram-color"
                }, p), {}, {
                    children: (0, c.jsxs)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 24 22",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(o),
                        fill: "none",
                        children: [(0, c.jsx)("path", {
                            d: "M17.9287 0H8.07107C4.72349 0 2 2.72362 2 6.07121V15.9288C2 19.2765 4.72349 22 8.07107 22H17.9287C21.2765 22 24 19.2764 24 15.9288V6.07121C24.0001 2.72362 21.2765 0 17.9287 0ZM22.0482 15.9288C22.0482 18.2002 20.2002 20.0481 17.9288 20.0481H8.07107C5.79979 20.0482 3.95195 18.2002 3.95195 15.9288V6.07121C3.95195 3.79992 5.79979 1.95195 8.07107 1.95195H17.9287C20.2001 1.95195 22.0481 3.79992 22.0481 6.07121V15.9288H22.0482Z",
                            fill: "url(#paint0_linear)"
                        }), (0, c.jsx)("path", {
                            d: "M12.9998 5.06152C9.72513 5.06152 7.06104 7.72561 7.06104 11.0003C7.06104 14.2749 9.72513 16.9388 12.9998 16.9388C16.2745 16.9388 18.9386 14.2749 18.9386 11.0003C18.9386 7.72561 16.2745 5.06152 12.9998 5.06152ZM12.9998 14.8938C10.8528 14.8938 9.10593 13.1472 9.10593 11.0002C9.10593 8.85303 10.8527 7.10628 12.9998 7.10628C15.147 7.10628 16.8937 8.85303 16.8937 11.0002C16.8937 13.1472 15.1468 14.8938 12.9998 14.8938Z",
                            fill: "url(#paint1_linear)"
                        }), (0, c.jsx)("path", {
                            d: "M19.1871 3.32764C18.7931 3.32764 18.4061 3.48714 18.1278 3.76661C17.8482 4.04471 17.6875 4.43188 17.6875 4.82723C17.6875 5.22135 17.8484 5.60838 18.1278 5.88785C18.4059 6.16595 18.7931 6.32682 19.1871 6.32682C19.5824 6.32682 19.9682 6.16595 20.2477 5.88785C20.5272 5.60838 20.6867 5.22121 20.6867 4.82723C20.6867 4.43188 20.5272 4.04471 20.2477 3.76661C19.9696 3.48714 19.5824 3.32764 19.1871 3.32764Z",
                            fill: "url(#paint2_linear)"
                        }), (0, c.jsxs)("defs", {
                            children: [(0, c.jsxs)("linearGradient", {
                                id: "paint0_linear",
                                x1: 24,
                                y1: 0,
                                x2: 2,
                                y2: 22,
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, c.jsx)("stop", {
                                    stopColor: "#B630A1"
                                }), (0, c.jsx)("stop", {
                                    offset: .494792,
                                    stopColor: "#DB2F76"
                                }), (0, c.jsx)("stop", {
                                    offset: 1,
                                    stopColor: "#FBB15B"
                                })]
                            }), (0, c.jsxs)("linearGradient", {
                                id: "paint1_linear",
                                x1: 21.9999,
                                y1: 1.5,
                                x2: 3.99988,
                                y2: 19.5,
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, c.jsx)("stop", {
                                    stopColor: "#DA2E7A"
                                }), (0, c.jsx)("stop", {
                                    offset: 1,
                                    stopColor: "#F06846"
                                })]
                            }), (0, c.jsxs)("linearGradient", {
                                id: "paint2_linear",
                                x1: 20.9998,
                                y1: 3,
                                x2: 17.4998,
                                y2: 6.5,
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, c.jsx)("stop", {
                                    stopColor: "#BE3099"
                                }), (0, c.jsx)("stop", {
                                    offset: 1,
                                    stopColor: "#E1406B"
                                })]
                            })]
                        })]
                    })
                }))
            };
            var a = o(n(81109)),
                i = o(n(506479)),
                r = n(401304),
                l = o(n(156720)),
                c = n(785893),
                d = ["iconXstyle", "height", "width", "viewBox"]
        },
        212139: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TimerIcon = function(e) {
                var t, n, o = e.iconXstyle,
                    s = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, d);
                if (f) {
                    var h = f.x,
                        g = void 0 === h ? 0 : h,
                        C = f.y,
                        m = void 0 === C ? 0 : C,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    n = [g, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 19,
                    S = 18;
                null == s && null == u || (b = s, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "timer"
                }, p), {}, {
                    children: (0, c.jsx)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 18 19",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(o),
                        children: (0, c.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.00195 0.999023C8.00195 0.449023 8.45195 -0.000976562 9.00195 -0.000976562C14.072 -0.000976562 18.162 4.18902 17.992 9.28902C17.842 13.989 13.912 17.889 9.21195 17.999C4.14195 18.119 0.00195312 14.039 0.00195312 8.99902C0.00195312 6.39902 1.10195 4.06902 2.86195 2.43902C3.26195 2.06902 3.88195 2.07902 4.26195 2.45902L9.70195 7.88902C10.092 8.27902 10.092 8.90902 9.70195 9.29902C9.31195 9.68902 8.68195 9.68902 8.29195 9.29902L3.58195 4.57902C2.59195 5.77902 2.00195 7.31902 2.00195 8.99902C2.00195 12.909 5.19195 16.059 9.12195 15.999C12.972 15.939 16.142 12.589 16.002 8.73902C15.872 5.32902 13.312 2.55902 10.002 2.07902V2.99902C10.002 3.54902 9.55195 3.99902 9.00195 3.99902C8.45195 3.99902 8.00195 3.54902 8.00195 2.99902V0.999023ZM3.00195 8.99902C3.00195 8.44674 3.44967 7.99902 4.00195 7.99902C4.55424 7.99902 5.00195 8.44674 5.00195 8.99902C5.00195 9.55131 4.55424 9.99902 4.00195 9.99902C3.44967 9.99902 3.00195 9.55131 3.00195 8.99902ZM8.00195 13.999C8.00195 13.4467 8.44967 12.999 9.00195 12.999C9.55424 12.999 10.002 13.4467 10.002 13.999C10.002 14.5513 9.55424 14.999 9.00195 14.999C8.44967 14.999 8.00195 14.5513 8.00195 13.999ZM14.002 7.99902C13.4497 7.99902 13.002 8.44674 13.002 8.99902C13.002 9.55131 13.4497 9.99902 14.002 9.99902C14.5542 9.99902 15.002 9.55131 15.002 8.99902C15.002 8.44674 14.5542 7.99902 14.002 7.99902Z",
                            fill: "currentColor"
                        })
                    })
                }))
            };
            var a = o(n(81109)),
                i = o(n(506479)),
                r = n(401304),
                l = o(n(156720)),
                c = n(785893),
                d = ["iconXstyle", "height", "width", "viewBox"]
        },
        415443: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ViewOnceSenderNuxIcon = function(e) {
                var t, n, o = e.iconXstyle,
                    s = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, d);
                if (f) {
                    var h = f.x,
                        g = void 0 === h ? 0 : h,
                        C = f.y,
                        m = void 0 === C ? 0 : C,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    n = [g, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 168,
                    S = 198;
                null == s && null == u || (b = s, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "view-once-sender-nux"
                }, p), {}, {
                    children: (0, c.jsxs)("svg", {
                        viewBox: null !== (t = n) && void 0 !== t ? t : "0 0 198 168",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(o),
                        fill: "none",
                        children: [(0, c.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M182.166 57.7255C175.603 64.6681 166.307 69 156 69C139.711 69 125.949 58.1818 121.506 43.3383C112.644 40.1443 102.78 34.6399 86.1179 25.3418C84.3675 24.3651 82.5421 23.3465 80.635 22.2843C51.9895 6.3297 6.00593 19.7651 2.23678 73.9266C-0.243988 109.575 17.0718 134.232 39.9408 142.968C62.0404 151.411 110.667 158.989 162.477 140.97C190.944 131.069 198.637 111.677 196.725 89.4613C195.454 74.6999 189.899 64.4184 182.166 57.7255Z",
                            fill: "#CCEFEB"
                        }), (0, c.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M134.277 61.7099C125.603 55.1366 120 44.7226 120 33C120 29.0037 120.651 25.1594 121.853 21.5676L80.2307 15.7179C73.8904 14.8269 68.016 19.3544 67.11 25.8304L50.5682 144.067C49.6622 150.543 54.0676 156.515 60.4079 157.406L108.242 164.129C114.583 165.02 120.457 160.493 121.363 154.016L134.277 61.7099Z",
                            fill: "#42CBA5"
                        }), (0, c.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M122.943 18.7215L80.4885 12.755C73.9412 11.8348 67.8737 16.5197 66.9365 23.219L49.8245 145.531C48.8872 152.231 53.4351 158.407 59.9824 159.327L109.378 166.27C115.925 167.19 121.993 162.505 122.93 155.806L135.929 62.8902C135.129 62.3519 134.352 61.7824 133.599 61.1834L120.411 155.452C119.673 160.727 114.895 164.417 109.739 163.692L60.343 156.75C55.187 156.025 51.6056 151.161 52.3437 145.885L69.4557 23.573C70.1938 18.2974 74.9719 14.608 80.1279 15.3326L121.974 21.2137C122.266 20.3682 122.59 19.537 122.943 18.7215Z",
                            fill: "#316474"
                        }), (0, c.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M135.032 62.2669C125.93 55.7339 120 45.0594 120 33C120 27.0332 121.452 21.4055 124.021 16.4507L82.3684 10.5968C76.0897 9.71436 70.2654 14.2484 69.3594 20.7238L52.8193 138.948C51.9134 145.424 56.2689 151.388 62.5476 152.271L109.917 158.928C116.196 159.81 122.02 155.276 122.926 148.801L135.032 62.2669Z",
                            fill: "white"
                        }), (0, c.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M124.376 15.7826L80.8832 9.67008C74.3203 8.74772 68.2607 13.2841 67.3488 19.8023L50.6993 138.809C49.7874 145.327 54.3684 151.359 60.9313 152.281L110.445 159.24C117.008 160.162 123.067 155.626 123.979 149.108L136.032 62.959C135.229 62.4232 134.45 61.856 133.695 61.2591L121.454 148.753C120.736 153.886 115.964 157.458 110.796 156.732L61.2822 149.773C56.1139 149.047 52.5063 144.297 53.2245 139.164L69.874 20.1572C70.5921 15.0241 75.364 11.4517 80.5323 12.1781L123.186 18.1726C123.554 17.3594 123.951 16.5623 124.376 15.7826Z",
                            fill: "#316474"
                        }), (0, c.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M121.759 21.8546L119.225 21.5025L88.5269 17.2367L81.6788 16.2851C76.9838 15.6327 72.6359 18.9334 71.9674 23.6575L56.0988 135.806C55.4304 140.53 58.6946 144.888 63.3896 145.541L107.784 151.71C112.479 152.362 116.827 149.061 117.495 144.337L129.762 57.6491C123.708 51.2078 120 42.5372 120 33.0005C120 29.1102 120.617 25.364 121.759 21.8546Z",
                            fill: "#EEFEFA"
                        }), (0, c.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M131.411 59.2946L119.092 146.356C118.408 151.187 113.925 154.558 109.079 153.885L63.2521 147.516C58.4056 146.843 55.031 142.38 55.7146 137.549L71.9439 22.852C72.6275 18.0206 77.1105 14.6499 81.957 15.3233L122.084 20.8994C121.801 21.6938 121.545 22.501 121.316 23.32L81.6063 17.802C78.133 17.3193 74.9202 19.735 74.4302 23.1975L58.201 137.895C57.711 141.357 60.1295 144.555 63.6028 145.038L109.429 151.406C112.903 151.889 116.116 149.473 116.605 146.01L129.195 57.0327C129.901 57.8186 130.64 58.5733 131.411 59.2946Z",
                            fill: "#316474"
                        }), (0, c.jsx)("path", {
                            d: "M76.7691 93.7377C76.4214 96.1974 78.1329 98.4706 80.5929 98.8163L111.741 103.194C114.202 103.54 116.481 101.824 116.83 99.3627L119.073 83.5207C119.421 81.0608 117.709 78.787 115.249 78.4413L73.6586 72.5961C73.183 72.5293 72.895 73.106 73.2346 73.4451L76.5525 76.7581C77.9966 78.2 78.6778 80.2374 78.3919 82.2594L76.7691 93.7377Z",
                            fill: "white",
                            stroke: "#00B39B",
                            strokeWidth: 3
                        }), (0, c.jsx)("path", {
                            d: "M107.679 93.8443L87.8798 91.0618C87.0681 90.9477 86.7049 90.084 87.2785 89.5941L91.8745 85.6237C92.3348 85.2215 93.1268 85.3328 93.4584 85.8463L96.5327 90.5489L102.507 85.389C102.968 84.9869 103.76 85.0982 104.091 85.6116L108.661 92.5992C109.078 93.2283 108.491 93.9584 107.679 93.8443Z",
                            fill: "white"
                        }), (0, c.jsx)("path", {
                            d: "M96.7971 88.6689L94.5062 85.1645C93.7607 84.0152 92.0887 83.7802 91.0553 84.6795L86.4635 88.6463C85.7435 89.2636 85.5901 90.1864 85.9046 90.9467C86.205 91.6728 86.8893 92.1848 87.7059 92.2996L107.505 95.0822C108.321 95.1969 109.12 94.8933 109.609 94.2782C110.121 93.6341 110.228 92.7048 109.706 91.913C109.705 91.9118 109.705 91.9106 109.704 91.9094L105.141 84.9334C105.14 84.9321 105.14 84.9309 105.139 84.9296C104.393 83.7805 102.721 83.5456 101.688 84.4449L96.7971 88.6689Z",
                            stroke: "#42CBA5",
                            strokeOpacity: .5,
                            strokeWidth: 2.5
                        }), (0, c.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M81 22.999C80.4477 22.999 80 23.4467 80 23.999C80 24.5513 80.4477 24.999 81 24.999C81.5523 24.999 82 24.5513 82 23.999C82 23.4467 81.5523 22.999 81 22.999ZM78 23.999C78 22.3422 79.3431 20.999 81 20.999C82.6569 20.999 84 22.3422 84 23.999C84 25.6559 82.6569 26.999 81 26.999C79.3431 26.999 78 25.6559 78 23.999Z",
                            fill: "#316474"
                        }), (0, c.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M155.502 62C156.019 62 156.532 61.9866 157.043 61.9603C158.421 61.8892 159.482 60.7138 159.41 59.3349C159.339 57.956 158.164 56.8958 156.785 56.967C156.36 56.9889 155.933 57 155.502 57V62ZM155.502 8C155.933 8.00003 156.36 8.01114 156.785 8.03304C158.164 8.10415 159.339 7.044 159.41 5.66512C159.482 4.28624 158.421 3.11079 157.043 3.03968C156.532 3.01336 156.019 3.00003 155.502 3V8ZM168.898 6.21114C167.668 5.58332 166.162 6.07124 165.534 7.30096C164.906 8.53067 165.394 10.0365 166.624 10.6643C167.388 11.0543 168.128 11.4832 168.844 11.9485C170.001 12.7016 171.549 12.3739 172.303 11.2167C173.056 10.0594 172.728 8.51077 171.571 7.75771C170.71 7.19753 169.818 6.68094 168.898 6.21114ZM180.243 16.4297C179.49 15.2724 177.941 14.9447 176.784 15.6978C175.626 16.4509 175.299 17.9995 176.052 19.1568C176.517 19.8719 176.946 20.6126 177.336 21.3764C177.964 22.6061 179.47 23.094 180.699 22.4662C181.929 21.8384 182.417 20.3325 181.789 19.1028C181.319 18.1826 180.803 17.2905 180.243 16.4297ZM184.961 30.9578C184.89 29.5789 183.714 28.5188 182.335 28.5899C180.956 28.661 179.896 29.8365 179.967 31.2153C179.989 31.6406 180 32.0689 180 32.5C180 32.9311 179.989 33.3594 179.967 33.7847C179.896 35.1635 180.956 36.339 182.335 36.4101C183.714 36.4812 184.89 35.4211 184.961 34.0422C184.987 33.5312 185 33.0171 185 32.5C185 31.9829 184.987 31.4688 184.961 30.9578ZM181.789 45.8972C182.417 44.6675 181.929 43.1616 180.699 42.5338C179.47 41.906 177.964 42.3939 177.336 43.6236C176.946 44.3874 176.517 45.1281 176.052 45.8432C175.299 47.0005 175.626 48.5491 176.784 49.3022C177.941 50.0553 179.49 49.7276 180.243 48.5703C180.803 47.7095 181.319 46.8174 181.789 45.8972ZM171.571 57.2423C172.728 56.4892 173.056 54.9406 172.303 53.7833C171.549 52.6261 170.001 52.2984 168.844 53.0515C168.128 53.5168 167.388 53.9457 166.624 54.3357C165.394 54.9635 164.906 56.4693 165.534 57.699C166.162 58.9288 167.668 59.4167 168.898 58.7889C169.818 58.3191 170.71 57.8025 171.571 57.2423Z",
                            fill: "#00B39B"
                        }), (0, c.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M155.501 3C155.5 3 155.5 3 155.5 3C139.208 3 126 16.2076 126 32.5C126 48.7924 139.208 62 155.5 62C155.5 62 155.5 62 155.501 62V57C155.5 57 155.5 57 155.5 57C141.969 57 131 46.031 131 32.5C131 18.969 141.969 8 155.5 8C155.5 8 155.5 8 155.501 8V3Z",
                            fill: "#00B39B"
                        }), (0, c.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M151.57 18.499C149.875 18.499 148.501 19.8727 148.501 21.5672C148.501 23.2617 149.875 24.6354 151.57 24.6354H154.502V42.499C154.502 44.1559 155.845 45.499 157.502 45.499C159.158 45.499 160.502 44.1559 160.502 42.499V21.499C160.502 19.8422 159.158 18.499 157.502 18.499C157.49 18.499 157.479 18.4991 157.468 18.4992C157.456 18.4991 157.445 18.499 157.433 18.499H151.57Z",
                            fill: "#00B39B"
                        })]
                    })
                }))
            };
            var a = o(n(81109)),
                i = o(n(506479)),
                r = n(401304),
                l = o(n(156720)),
                c = n(785893),
                d = ["iconXstyle", "height", "width", "viewBox"]
        },
        584973: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleTooFewSubgroups = t.handleRemoveSubgroup = void 0;
            var a = o(n(887757)),
                i = o(n(348926)),
                r = o(n(81109)),
                l = o(n(963038)),
                c = n(519509),
                d = n(202908),
                s = n(877407),
                u = n(896674),
                f = n(442801),
                p = n(990055),
                h = n(208188),
                g = n(628707),
                C = n(558288),
                m = n(71867),
                v = o(n(915725)),
                _ = n(404186),
                x = n(548360),
                b = o(n(156720)),
                S = o(n(56962)),
                j = n(785893),
                k = {
                    checkboxContainer: {
                        fontSize: "f8jlpxt4",
                        lineHeight: "e4qy2s3t",
                        borderTop: "ei53l81b"
                    },
                    checkbox: {
                        display: "l7jjieqr",
                        flex: "kk3akd72",
                        verticalAlign: "kbne4t5p",
                        transitionProperty: "cr6d9hz6",
                        transitionDuration: "p4t1lx4y",
                        transitionTimingFunction: "pu4k07i0"
                    }
                },
                y = function(e) {
                    var t, n = e.removeDisclaimer,
                        o = e.removeParticipantOption,
                        a = void 0 !== o && o,
                        i = e.handleRemove,
                        r = (0, S.default)(!1),
                        c = (0, l.default)(r, 2),
                        d = c[0],
                        u = c[1],
                        f = x.fbt._("Remove group from community?", null, {
                            hk: "1kAakd"
                        });
                    if (a) {
                        var p = (0, j.jsx)("div", {
                                "data-testid": "checkbox-remove-orphan-members",
                                className: (0, b.default)(k.checkbox, m.uiMargin.end10),
                                children: (0, j.jsx)(s.CheckBox, {
                                    onChange: u,
                                    checked: d,
                                    id: "checkbox-remove-orphan-members"
                                })
                            }),
                            v = x.fbt._("Remove group participants", null, {
                                hk: "2jEii2"
                            });
                        t = (0, j.jsxs)(j.Fragment, {
                            children: [(0, j.jsx)(C.TextDiv, {
                                xstyle: m.uiPadding.bottom20,
                                theme: "muted",
                                children: n
                            }), (0, j.jsxs)(h.FlexRow, {
                                xstyle: [k.checkboxContainer, m.uiPadding.top20, m.uiMargin.end0],
                                children: [p, v]
                            })]
                        })
                    }
                    return (0, j.jsx)(_.ConfirmPopup, {
                        onOK: function() {
                            return i(d)
                        },
                        okText: x.fbt._("Remove", null, {
                            hk: "3xUR13"
                        }),
                        onCancel: function() {
                            return g.ModalManager.close()
                        },
                        title: f,
                        children: a ? t : n
                    })
                },
                T = function(e, t, n, o) {
                    var a = x.fbt._('A community must have at least 1 group. You can remove "{group_name}" after adding another group to this community.', [x.fbt._param("group_name", (0, j.jsx)(p.EmojiText, {
                            text: e
                        }))], {
                            hk: "1ci2bj"
                        }),
                        i = null != n ? x.fbt._('A community must have at least 1 group. You can remove "{group_name}" after a community admin from "{community_name}" adds another group to the community.', [x.fbt._param("group_name", (0, j.jsx)(p.EmojiText, {
                            text: e
                        })), x.fbt._param("community_name", (0, j.jsx)(p.EmojiText, {
                            text: n
                        }))], {
                            hk: "1amNJ1"
                        }) : x.fbt._('A community must have at least 1 group. You can remove "{group_name}" after a community admin adds another group to this community.', [x.fbt._param("group_name", (0, j.jsx)(p.EmojiText, {
                            text: e
                        }))], {
                            hk: "3BhBjQ"
                        });
                    g.ModalManager.open((0, j.jsx)(_.ConfirmPopup, (0, r.default)((0, r.default)({
                        testid: "min-subgroup-count-popup",
                        onOK: function() {
                            return g.ModalManager.close()
                        }
                    }, t && {
                        cancelText: x.fbt._("Add group", null, {
                            hk: "3Wkqmm"
                        }),
                        onCancel: o
                    }), {}, {
                        title: x.fbt._("Cannot remove group from community", null, {
                            hk: "3AsH6T"
                        }),
                        children: t ? a : i
                    })))
                };
            t.handleTooFewSubgroups = T;
            t.handleRemoveSubgroup = function(e) {
                var t, n = e.parentId,
                    o = e.currentSubgroupCount,
                    r = e.removedSubgroupWid,
                    l = e.removedSubgroupTitle,
                    s = e.setLoading,
                    h = e.iAmCommunityAdmin,
                    C = void 0 === h || h,
                    m = null === (t = d.ChatCollection.get(n)) || void 0 === t ? void 0 : t.formattedTitle;
                if (o <= 2 && !(0, f.noSubgroupRequirementEnabled)()) T(l, C, m, (function() {
                    g.ModalManager.close(), u.Cmd.openCommunityHomeManageGroups(n)
                }));
                else {
                    var _, b = function() {
                        var e = (0, i.default)(a.default.mark((function e() {
                            var t, o = arguments;
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = o.length > 0 && void 0 !== o[0] && o[0], g.ModalManager.close(), s(!0), e.next = 5, (0, v.default)(n, [r], t);
                                    case 5:
                                        s(!1);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    if (C && (0, c.getABPropConfigValue)("parent_group_remove_orphaned_members")) return _ = x.fbt._('You can remove the "{group_title}" group from the community. You can also remove the group and its participants who aren\'t part of other groups.', [x.fbt._param("group_title", (0, j.jsx)(p.EmojiText, {
                        text: l
                    }))], {
                        hk: "2CXAM6"
                    }), void g.ModalManager.open((0, j.jsx)(y, {
                        removeDisclaimer: _,
                        handleRemove: b,
                        removeParticipantOption: !0
                    }));
                    _ = null != m ? x.fbt._('"{group_title}" will no longer be a part of this community "{community_title}." Anyone in this group will still be able to find it from their chats to send messages and make calls.', [x.fbt._param("group_title", (0, j.jsx)(p.EmojiText, {
                        text: l
                    })), x.fbt._param("community_title", (0, j.jsx)(p.EmojiText, {
                        text: m
                    }))], {
                        hk: "p3q2"
                    }) : x.fbt._('"{group_title}" will no longer be a part of this community. Anyone in this group will still be able to find it from their chats to send messages and make calls.', [x.fbt._param("group_title", (0, j.jsx)(p.EmojiText, {
                        text: l
                    }))], {
                        hk: "1iKEHi"
                    }), g.ModalManager.open((0, j.jsx)(y, {
                        removeDisclaimer: _,
                        handleRemove: b
                    }))
                }
            }
        },
        655296: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = o(n(859713)),
                i = n(157405),
                r = o(n(967815)),
                l = o(n(743309)),
                c = n(667294),
                d = n(785893);

            function s(e, t) {
                var n, o = (0, c.useRef)(null),
                    s = (0, i.cx)((n = {}, (0, a.default)(n, l.default.hover, e.hover), (0, a.default)(n, l.default.current, e.current), (0, a.default)(n, l.default.active, e.active), (0, a.default)(n, l.default.msg, !0), n)),
                    u = function() {
                        r.default.maybeIndicateFocus(o.current, l.default.focusAnimation)
                    };
                return (0, c.useImperativeHandle)(t, (function() {
                    return {
                        indicateFocus: u
                    }
                })), (0, d.jsx)("div", {
                    "data-testid": e.testid,
                    ref: o,
                    className: s,
                    onClick: e.onClick,
                    onMouseEnter: e.onMouseEnter,
                    onMouseOver: e.onMouseOver,
                    onMouseLeave: e.onMouseLeave,
                    children: e.children
                })
            }
            var u = (0, c.forwardRef)(s);
            t.default = u
        },
        688429: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.msg,
                    o = n.kicSender;
                n.isKept && null != o && (t = (0, r.jsx)("div", {
                    className: (0, i.default)(l),
                    children: (0, a.getKeptByString)(o)
                }));
                return (0, r.jsx)(r.Fragment, {
                    children: t
                })
            };
            var a = n(61771),
                i = o(n(156720)),
                r = n(785893),
                l = {
                    fontSize: "f8jlpxt4",
                    color: "pm5hny62",
                    marginTop: "s11ka3oa",
                    marginStart: "m4o8c6m0"
                }
        },
        598393: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = o(n(963038)),
                i = o(n(347999)),
                r = n(519896),
                l = n(87330),
                c = n(909881),
                d = n(207826),
                s = n(241941),
                u = n(247211),
                f = n(990055),
                p = o(n(81724)),
                h = o(n(655296)),
                g = n(704250),
                C = o(n(758927)),
                m = o(n(688429)),
                v = n(487061),
                _ = n(937915),
                x = n(221156),
                b = n(144495),
                S = n(667294),
                j = o(n(156720)),
                k = n(779740),
                y = n(785893),
                T = {
                    title: {
                        display: "p357zi0d",
                        alignItems: "gndfcl4n",
                        marginBottom: "njub1g37",
                        fontSize: "f8jlpxt4",
                        fontWeight: "e1gr2w1z",
                        lineHeight: "tnjggqzj"
                    },
                    titleEmoji: {
                        verticalAlign: "h1r24yt8"
                    },
                    titleMain: {
                        display: "p357zi0d",
                        flexGrow: "tvf2evcx",
                        justifyContent: "fhf7t426",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        textOverflow: "lhj4utae",
                        whiteSpace: "le5p0ye3"
                    },
                    meta: {
                        flexGrow: "ggj6brxn",
                        flexShrink: "oq44ahr5",
                        marginStart: "oz0g9ue8",
                        fontSize: "dsh4tgtl",
                        lineHeight: "sb4iah7d",
                        color: "hp667wtd",
                        textAlign: "e65innqk",
                        verticalAlign: "md4apq9i"
                    },
                    chat: {
                        marginStart: "k6y3xtnu",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        textOverflow: "lhj4utae",
                        whiteSpace: "le5p0ye3"
                    },
                    divider: {
                        position: "g0rxnol2",
                        flex: "kk3akd72",
                        width: "htlq5l20",
                        "::before": {
                            position: "jiaumjzp",
                            top: "beenm9b3",
                            start: "fx6vfo4m",
                            width: "evuypb09",
                            height: "flcm9zni",
                            fontSize: "m6pf2udp",
                            lineHeight: "ndbp8nzn",
                            color: "n49nndap",
                            content: "aka0iiqh"
                        }
                    },
                    chevron: {
                        flex: "kk3akd72",
                        marginTop: "o9i7y497",
                        marginStart: "oz0g9ue8",
                        color: "fe1tuj7z"
                    },
                    dividerRTL: {
                        transform: "n4o0o7gj"
                    },
                    avatar: {
                        flex: "kk3akd72",
                        marginEnd: "claouzo6"
                    },
                    author: {
                        marginEnd: "kjemk6od"
                    }
                };

            function P(e, t) {
                var n = e.msg,
                    o = e.selectedMessages,
                    P = e.displayType,
                    E = e.currSelection,
                    I = e.activeSelection,
                    w = e.onClickMsg,
                    O = e.testid,
                    A = (0, S.useRef)(null),
                    L = (0, S.useRef)(null),
                    M = (0, S.useRef)(null),
                    R = (0, S.useState)(!1),
                    N = (0, a.default)(R, 2),
                    D = N[0],
                    B = N[1],
                    H = (0, S.useState)((function() {
                        return !!E && E.value === n
                    })),
                    F = (0, a.default)(H, 2),
                    W = F[0],
                    z = F[1],
                    V = (0, S.useState)((function() {
                        return !!I && I.value === n
                    })),
                    U = (0, a.default)(V, 2),
                    G = U[0],
                    q = U[1],
                    Y = (0, S.useState)(!1),
                    K = (0, a.default)(Y, 2),
                    Z = K[0],
                    X = K[1];
                (0, k.useListener)(E, n.id.toString(), (function(e, t) {
                    var n = "focus" === e;
                    if (n) {
                        var o = M.current;
                        o && (p.default.focus(o), t && (0, u.scrollIntoViewIfNeeded)(o))
                    }
                    z(n)
                })), (0, k.useListener)(I, n.id.toString(), (function(e, t) {
                    if ("focus" === e) {
                        var n = M.current;
                        n && (p.default.focus(n), t && (0, u.scrollIntoViewIfNeeded)(n))
                    }
                    q(!!e)
                }));
                var Q = function() {
                        return A.current
                    },
                    J = function() {
                        return (0, i.default)(M.current, "hotKeysRef.current")
                    };
                (0, S.useImperativeHandle)(t, (function() {
                    return {
                        getElement: J,
                        getWrapperRef: Q
                    }
                }));
                var $ = n.senderObj.formattedName,
                    ee = n.chat.isUser ? c.ContactCollection.assertGet(n.to).formattedName ? c.ContactCollection.assertGet(n.to).formattedName : (0, x.widToFormattedUser)(n.to) : n.chat.title(),
                    te = P === s.DISPLAY_TYPE.GALLERY ? null : (0, y.jsxs)("div", {
                        className: (0, j.default)(T.title, _.hasEmoji && T.titleEmoji),
                        children: [(0, y.jsxs)("div", {
                            className: (0, j.default)(T.titleMain),
                            children: [(0, y.jsx)("div", {
                                className: (0, j.default)(T.avatar),
                                children: (0, y.jsx)(d.DetailImage, {
                                    id: n.senderObj.id,
                                    size: 26
                                })
                            }), (0, y.jsx)(f.EmojiText, {
                                xstyle: T.author,
                                text: $,
                                direction: "auto",
                                titlify: !0
                            }), (0, y.jsx)("span", {
                                className: (0, j.default)(T.divider, C.default.isRTL() && T.dividerRTL)
                            }), (0, y.jsx)(f.EmojiText, {
                                xstyle: T.chat,
                                text: ee,
                                direction: "auto",
                                titlify: !0
                            })]
                        }), (0, y.jsx)("div", {
                            className: (0, j.default)(T.meta),
                            dir: "auto",
                            children: l.Clock.relativeStr(n.t)
                        }), (0, y.jsx)("div", {
                            className: (0, j.default)(T.chevron),
                            children: (0, y.jsx)(r.ChevronRightAltIcon, {
                                directional: !0
                            })
                        })]
                    }),
                    ne = {
                        enter: function(e) {
                            e.stopPropagation(), e.preventDefault(), null == w || w(n)
                        }
                    };
                ne[C.default.LR("right", "left")] = function() {
                    var e;
                    null === (e = A.current) || void 0 === e || e.openContextMenu()
                };
                var oe, ae = e.selectable || D && (P === s.DISPLAY_TYPE.GALLERY || P === s.DISPLAY_TYPE.GALLERY_LINKS);
                return P === s.DISPLAY_TYPE.KEPT_MSGS && (oe = (0, y.jsx)(m.default, {
                    msg: n
                })), (0, y.jsx)(g.HotKeys, {
                    ref: M,
                    handlers: ne,
                    onFocus: function() {
                        var e;
                        X(!0), null === (e = L.current) || void 0 === e || e.indicateFocus()
                    },
                    onBlur: function() {
                        X(!1)
                    },
                    children: (0, y.jsxs)(h.default, {
                        ref: L,
                        hover: D,
                        current: W && Z,
                        active: G,
                        onClick: function() {
                            return e.onClickMsg && e.onClickMsg(n, o && !o.isSelected(n))
                        },
                        onMouseEnter: D ? null : function() {
                            D || B(!0)
                        },
                        onMouseOver: D ? null : function() {
                            D || B(!0)
                        },
                        onMouseLeave: D ? function() {
                            D && B(!1)
                        } : null,
                        testid: O,
                        children: [te, (0, y.jsx)(b.Wrapper, {
                            msg: n,
                            ref: A,
                            current: W && Z,
                            displayType: P || s.DISPLAY_TYPE.STARRED_MSGS,
                            isMsgVisible: e.isMsgVisible,
                            selectable: ae,
                            selectedMessages: o,
                            onMessageSelect: e.onMessageSelect,
                            position: v.MsgPosition.END,
                            tailOverride: "left",
                            onProductClick: e.onProductClick,
                            onMessageClick: e.onMessageClick
                        }, n.id.toString()), oe]
                    })
                })
            }
            var E = (0, S.forwardRef)(P);
            t.default = E
        },
        638396: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = (0, _.useFlow)(b.Select),
                    o = (0, r.default)(n, 2),
                    S = o[0],
                    j = o[1],
                    k = (0, v.useRef)([]),
                    y = (0, v.useRef)([]),
                    T = function() {
                        var e = (0, i.default)(a.default.mark((function e(t) {
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t.isUser || !t.contact.isContactBlocked) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.next = 3, (0, l.unblockContact)(t.contact);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                if (null == j.step) return null;
                switch (j.step) {
                    case b.Select:
                        var P = function() {
                                var e = (0, i.default)(a.default.mark((function e(t, n) {
                                    return a.default.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, T(t);
                                            case 2:
                                                t.active ? d.ComposeBoxActions.paste(t, n) : (t.setComposeContents({
                                                    text: n
                                                }), c.Cmd.openChatFromUnread(t).then((function(e) {
                                                    e && d.ComposeBoxActions.focus(t)
                                                })));
                                            case 3:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            E = function() {
                                var t = (0, i.default)(a.default.mark((function t(n) {
                                    var o;
                                    return a.default.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (y.current = n, 1 !== n.length) {
                                                    t.next = 9;
                                                    break
                                                }
                                                return o = n[0], t.next = 5, P(o, e.text);
                                            case 5:
                                                j.end(), window.innerWidth <= u.LAYOUT_2COLUMNS_MAX_WIDTH && s.DrawerManager.closeDrawerRight(), t.next = 10;
                                                break;
                                            case 9:
                                                j.push(b.TextMessage);
                                            case 10:
                                                e.onSend && e.onSend();
                                            case 11:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }();
                        t = (0, x.jsx)(h.SelectModal, {
                            title: e.title || m.fbt._("Send message to", null, {
                                hk: "2kkuQs"
                            }),
                            listType: h.ListType.CHAT_SELECT_MODAL,
                            getInitialItems: function() {
                                return k.current
                            },
                            maxItems: p.ServerProps.multicastLimitGlobal,
                            onConfirm: E,
                            onCancel: function() {
                                return j.end()
                            },
                            onSelectionChanged: function(e, t, n) {
                                k.current = n
                            },
                            singleSelectionFooterType: g.FooterType.NEXT,
                            multipleSelectionFooterType: g.FooterType.NEXT
                        });
                        break;
                    case b.TextMessage:
                        t = (0, x.jsx)(C.default, {
                            defaultText: e.text,
                            title: e.title || m.fbt._("Send message to", null, {
                                hk: "2kkuQs"
                            }),
                            onSend: function(e, t) {
                                return function(e, t, n) {
                                    e.forEach(function() {
                                        var e = (0, i.default)(a.default.mark((function e(o) {
                                            return a.default.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, T(o);
                                                    case 2:
                                                        c.Cmd.once("ui_idle", (function() {
                                                            (0, f.sendTextMsgToChat)(o, t, {
                                                                linkPreview: n
                                                            })
                                                        }));
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }()), j.end()
                                }(y.current, e, t)
                            },
                            onBack: function() {
                                return j.pop()
                            }
                        })
                }
                return (0, x.jsx)(S, {
                    flow: j,
                    children: t
                })
            };
            var a = o(n(887757)),
                i = o(n(348926)),
                r = o(n(963038)),
                l = n(994356),
                c = n(896674),
                d = n(515918),
                s = n(875058),
                u = n(295769),
                f = n(626674),
                p = n(821194),
                h = n(996851),
                g = n(328534),
                C = o(n(814847)),
                m = n(548360),
                v = n(667294),
                _ = n(780857),
                x = n(785893),
                b = n(76672).Mirrored(["Select", "TextMessage"])
        },
        639835: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.testid,
                    n = e.Icon,
                    o = e.iconWidth,
                    f = e.iconHeight,
                    p = e.label,
                    h = e.disabled,
                    g = e.xstyle,
                    C = e.onClick,
                    m = function() {
                        var e = (0, c.useState)(!1),
                            t = (0, a.default)(e, 2),
                            n = t[0],
                            o = t[1],
                            i = (0, c.useCallback)((function() {
                                o(!0)
                            }), []),
                            r = (0, c.useCallback)((function() {
                                o(!1)
                            }), []);
                        return {
                            isHovered: n,
                            onMouseEnter: i,
                            onMouseLeave: r
                        }
                    }(),
                    v = m.isHovered,
                    _ = m.onMouseEnter,
                    x = m.onMouseLeave,
                    b = (0, s.jsx)(n, {
                        directional: !0,
                        color: r.SvgColorProp.TEAL,
                        width: o,
                        height: f
                    });
                return (0, s.jsxs)("div", {
                    className: (0, d.default)(u.button, h && u.disabled, g),
                    onMouseEnter: _,
                    onMouseLeave: x,
                    children: [(0, s.jsx)(i.Round, {
                        inverted: !0,
                        onClick: C,
                        disabled: h,
                        testid: t,
                        hideBackground: h || !v,
                        children: b
                    }), (0, s.jsx)(l.default, {
                        xstyle: u.label,
                        disabled: h,
                        testid: t,
                        onClick: C,
                        children: p
                    })]
                })
            };
            var a = o(n(963038)),
                i = n(659696),
                r = n(401304),
                l = o(n(83938)),
                c = n(667294),
                d = o(n(156720)),
                s = n(785893),
                u = {
                    button: {
                        textAlign: "qfejxiq4"
                    },
                    label: {
                        marginEnd: "jnwc1y2a",
                        marginBottom: "mpdn4nr2",
                        marginStart: "svoq16ka",
                        fontSize: "ovllcyds",
                        marginTop: "qt60bha0",
                        color: "jq3rn4u7"
                    },
                    disabled: {
                        opacity: "ge6flnsz"
                    }
                }
        },
        143395: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.text,
                    n = e.secondary,
                    o = e.Icon,
                    h = e.href,
                    g = e.linkedAccountType,
                    C = e.onClick,
                    m = e.rowTheme,
                    v = e.hasCoverPhoto,
                    _ = (0, u.useContext)(s.DrawerContext),
                    x = (0, l.getProductCatalogSessionId)(_);
                return (0, u.useEffect)((function() {
                    (0, a.logLinkedAccountImpression)(x, g, v)
                }), [x, g, v]), (0, f.jsx)(d.default, {
                    testid: "social-row",
                    onClick: function() {
                        if (void 0 !== h) {
                            var e = (0, c.getWebsiteLink)(h);
                            r.default.open(e), null == C || C()
                        }
                    },
                    disabled: void 0 === h,
                    xstyle: p.button,
                    children: (0, f.jsx)(i.default, {
                        image: o,
                        primary: t,
                        secondary: n,
                        theme: m,
                        idle: void 0 === h
                    })
                })
            };
            var a = n(86243),
                i = o(n(799328)),
                r = o(n(830226)),
                l = n(179677),
                c = n(221289),
                d = o(n(83938)),
                s = (o(n(229677)), n(445639)),
                u = n(667294),
                f = (o(n(156720)), n(785893)),
                p = {
                    button: {
                        width: "ln8gz9je"
                    }
                }
        },
        761649: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.showEditHint,
                    o = e.businessProfile,
                    v = e.sectionTheme,
                    _ = void 0 === v ? "no-padding" : v,
                    x = e.rowTheme,
                    b = void 0 === x ? "linked-account" : x,
                    S = (0, g.useModelValues)(o, ["fbPage", "igProfessional"]),
                    j = S.fbPage,
                    k = S.igProfessional,
                    y = (0, d.getProductCatalogSessionId)((0, h.useContext)(u.DrawerContext)),
                    T = [];
                if (null == j ? void 0 : j.displayName) {
                    var P = j.likes ? p.fbt._({
                        "*": "Facebook • {count} Likes",
                        _1: "Facebook • 1 Like"
                    }, [p.fbt._plural(j.likes, "count")], {
                        hk: "4fuveG"
                    }) : p.fbt._("Facebook", null, {
                        hk: "2PcUTa"
                    });
                    T.push((0, C.jsx)(i.default, {
                        Icon: (0, C.jsx)(l.LogoFacebookRoundIcon, {
                            iconXstyle: m.iconColor
                        }),
                        text: j.displayName,
                        secondary: P,
                        href: `https://www.facebook.com/${j.id}`,
                        rowTheme: b,
                        onClick: function() {
                            (0, a.logLinkedFbClick)(y, j.likes, !!o.coverPhoto)
                        },
                        linkedAccountType: s.default.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.FACEBOOK,
                        hasCoverPhoto: !!o.coverPhoto
                    }, "fb"))
                }
                if (null == k ? void 0 : k.handle) {
                    var E = k.followers ? p.fbt._({
                        "*": "Instagram • {count} Followers",
                        _1: "Instagram • 1 Follower"
                    }, [p.fbt._plural(k.followers, "count")], {
                        hk: "4gGhJG"
                    }) : p.fbt._("Instagram", null, {
                        hk: "4kjnWv"
                    });
                    T.push((0, C.jsx)(i.default, {
                        Icon: (0, C.jsx)(c.LogoInstagramColorIcon, {}),
                        text: `@${k.handle}`,
                        secondary: E,
                        href: `https://www.instagram.com/${k.handle}`,
                        rowTheme: b,
                        onClick: function() {
                            (0, a.logLinkedIgClick)(y, k.followers, !!o.coverPhoto)
                        },
                        linkedAccountType: s.default.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.INSTAGRAM,
                        hasCoverPhoto: !!o.coverPhoto
                    }, "ig"))
                }
                if (0 === T.length) return null;
                if (!0 === n) {
                    var I = p.fbt._("Facebook and Instagram handles can only be edited from the app on your mobile device.", null, {
                        hk: "3JNYRt"
                    });
                    t = (0, C.jsx)(r.EmojiText, {
                        direction: "inherit",
                        xstyle: m.infoText,
                        text: I.toString()
                    })
                }
                return (0, C.jsxs)(f.default, {
                    theme: _,
                    children: [T.map((function(e) {
                        return e
                    })), t]
                })
            };
            var a = n(86243),
                i = o(n(143395)),
                r = n(990055),
                l = n(761623),
                c = n(663318),
                d = n(179677),
                s = o(n(229677)),
                u = n(445639),
                f = o(n(849788)),
                p = n(548360),
                h = n(667294),
                g = (o(n(156720)), n(948752)),
                C = n(785893),
                m = {
                    infoText: {
                        fontSize: "dsh4tgtl",
                        lineHeight: "jgi8eev7",
                        color: "t35qvd06",
                        paddingStart: "nvib3uz4",
                        paddingEnd: "sjajxv0r",
                        display: "f804f6gw",
                        paddingBottom: "p9a4hubg",
                        paddingTop: "b7n2qyd4",
                        marginTop: "tt8xd2xn"
                    },
                    iconColor: {
                        color: "ekddkhd8"
                    }
                }
        },
        86243: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.logCatalogClick = function(e, t, n) {
                l({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_CATALOG_ICON,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: n
                })
            }, t.logEmailClick = function(e, t, n) {
                l({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_EMAIL,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: n
                })
            }, t.logForwardClick = function(e, t, n) {
                l({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_FORWARD,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: n
                })
            }, t.logHoursClick = function(e, t, n) {
                l({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_HOURS,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: n
                })
            }, t.logLinkedAccountImpression = function(e, t, n) {
                l({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_APP_IMPRESSION,
                    linkedAccount: t,
                    catalogSessionId: e,
                    isProfileLinked: !0,
                    hasCoverPhoto: n
                })
            }, t.logLinkedFbClick = function(e, t, n) {
                l({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_APP_LINK,
                    linkedAccount: r.default.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.FACEBOOK,
                    catalogSessionId: e,
                    bizFbSize: c(t),
                    isProfileLinked: !0,
                    hasCoverPhoto: n
                })
            }, t.logLinkedIgClick = function(e, t, n) {
                l({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_APP_LINK,
                    linkedAccount: r.default.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.INSTAGRAM,
                    catalogSessionId: e,
                    bizIgSize: c(t),
                    isProfileLinked: !0,
                    hasCoverPhoto: n
                })
            }, t.logLocationClick = function(e, t, n) {
                l({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_LOCATION,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: n
                })
            }, t.logMessageClick = function(e, t, n) {
                l({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_MESSAGE,
                    catalogSessionId: e,
                    hasCoverPhoto: n
                })
            }, t.logProfileExit = function(e, t, n, o) {
                l({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_EXIT,
                    catalogSessionId: e,
                    scrollDepth: t,
                    isProfileLinked: n,
                    hasCoverPhoto: o
                })
            }, t.logProfileImpression = function(e, t, n, o) {
                (0, i.smbBizProfileLoggingEnabled)() ? new r.default.ViewBusinessProfile({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION,
                    catalogSessionId: e,
                    profileEntryPoint: t,
                    isProfileLinked: n,
                    hasCoverPhoto: o
                }).commit(): new r.default.ViewBusinessProfile({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION,
                    catalogSessionId: e,
                    isProfileLinked: n,
                    hasCoverPhoto: o
                }).commit()
            }, t.logShopsClick = function(e, t, n) {
                l({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_SHOPS_ICON,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: n
                })
            }, t.logStatusClick = function(e, t, n) {
                l({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_STATUS,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: n
                })
            }, t.logVoiceCallClick = function(e, t, n) {
                l({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_VOICE_CALL,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: n
                })
            }, t.logWebsiteClick = function(e, t, n) {
                l({
                    viewBusinessProfileAction: r.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_WEBSITE,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: n
                })
            };
            var a = o(n(81109)),
                i = n(894995),
                r = o(n(229677));

            function l(e) {
                var t = new r.default.ViewBusinessProfile((0, a.default)((0, a.default)({}, e), {}, {
                    isProfileLinked: !!e.isProfileLinked
                }));
                t && t.commit()
            }

            function c(e) {
                return e > 1e6 ? r.default.TRUST_SIGNAL_BUCKETS.B1M : e >= 1e5 ? r.default.TRUST_SIGNAL_BUCKETS.B100K : e >= 1e4 ? r.default.TRUST_SIGNAL_BUCKETS.B10K : e >= 1e3 ? r.default.TRUST_SIGNAL_BUCKETS.B1K : e >= 501 ? r.default.TRUST_SIGNAL_BUCKETS.B501 : e >= 101 ? r.default.TRUST_SIGNAL_BUCKETS.B101 : e >= 51 ? r.default.TRUST_SIGNAL_BUCKETS.B51 : e >= 11 ? r.default.TRUST_SIGNAL_BUCKETS.B11 : e >= 2 ? r.default.TRUST_SIGNAL_BUCKETS.B2 : 1 === e ? r.default.TRUST_SIGNAL_BUCKETS.B1 : r.default.TRUST_SIGNAL_BUCKETS.B0
            }
        },
        981094: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.elementId,
                    n = e.onClick;
                if (!document.queryCommandSupported("copy")) return null;
                return (0, s.jsx)(c.DrawerButton, {
                    testid: "li-copy-link",
                    icon: (0, s.jsx)(a.CopyIcon, {
                        xstyle: u.icon
                    }),
                    onClick: function() {
                        return function(e, t) {
                            (0, i.default)(e) ? l.ToastManager.open((0, s.jsx)(r.Toast, {
                                msg: d.fbt._("Link copied to clipboard.", null, {
                                    hk: "2d44NZ"
                                })
                            })): l.ToastManager.open((0, s.jsx)(r.Toast, {
                                msg: d.fbt._("Couldn't copy to clipboard. Copy using mouse or keyboard.", null, {
                                    hk: "4aKgWx"
                                })
                            }));
                            null != t && t()
                        }(t, n)
                    },
                    children: d.fbt._("Copy link", null, {
                        hk: "2ZtjA3"
                    })
                })
            };
            var a = n(307727),
                i = o(n(364730)),
                r = n(236539),
                l = n(422210),
                c = n(455316),
                d = n(548360),
                s = (o(n(156720)), n(785893)),
                u = {
                    icon: {
                        color: "rahkaw8d"
                    }
                }
        },
        94794: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.chat,
                    n = e.fromMe,
                    o = e.onOk,
                    P = (0, j.default)(C.NUX.EPHEMERAL),
                    E = (0, r.default)(P, 2)[1],
                    I = (0, j.default)(C.NUX.KEEP_IN_CHAT),
                    w = (0, r.default)(I, 2)[1],
                    O = function() {
                        var e = (0, i.default)(a.default.mark((function e() {
                            var n;
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (E(), w(), n = new _.default.KeepInChatNux({
                                                kicNuxActionName: _.default.KIC_NUX_ACTION_NAME_TYPE.KIC_NUX_LEARN_MORE_TAP,
                                                trigger: _.default.TRIGGER_TYPE.CHAT_ENTRY
                                            }), !t) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.t0 = n, e.t1 = t.ephemeralDuration, e.next = 8, (0, l.getChatThreadID)(t.id.toJid());
                                    case 8:
                                        e.t2 = e.sent, e.t3 = {
                                            chatEphemeralityDuration: e.t1,
                                            threadId: e.t2
                                        }, e.t0.set.call(e.t0, e.t3);
                                    case 11:
                                        n.commit(), (0, d.openExternalLink)((0, s.getEphemeralFaqUrl)());
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                (0, S.useEffect)((function() {
                    (0, i.default)(a.default.mark((function e() {
                        var n;
                        return a.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = new _.default.KeepInChatNux({
                                            kicNuxActionName: _.default.KIC_NUX_ACTION_NAME_TYPE.FIRST_DM_NUX_IMPRESSION,
                                            trigger: _.default.TRIGGER_TYPE.CHAT_ENTRY
                                        }), !t) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.t0 = n, e.t1 = t.ephemeralDuration, e.next = 6, (0, l.getChatThreadID)(null == t ? void 0 : t.id.toJid());
                                case 6:
                                    e.t2 = e.sent, e.t3 = {
                                        chatEphemeralityDuration: e.t1,
                                        threadId: e.t2
                                    }, e.t0.set.call(e.t0, e.t3);
                                case 9:
                                    n.commit();
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), []);
                var A = n ? b.fbt._("Get started with disappearing messages", null, {
                    hk: "2Rjbbn"
                }) : b.fbt._("Disappearing messages are on in this chat", null, {
                    hk: "FDiRa"
                });
                return (0, k.jsxs)(x.ConfirmPopup, {
                    testid: "ephemeral-kic-nux-modal",
                    onOK: function() {
                        E(), w(), g.ModalManager.close(), o && o()
                    },
                    onCancel: O,
                    cancelText: b.fbt._("LEARN MORE", null, {
                        hk: "oivYP"
                    }),
                    children: [(0, k.jsx)(u.FlexColumn, {
                        align: "center",
                        justify: "center",
                        children: (0, k.jsx)(f.default, {
                            children: (0, k.jsx)(c.DisappearingLogoIcon, {
                                width: 112,
                                height: 112
                            })
                        })
                    }), (0, k.jsx)(m.TextHeader, {
                        xstyle: y.header,
                        children: A
                    }), (0, k.jsx)(m.TextParagraph, {
                        xstyle: y.subtitle,
                        children: b.fbt._("This increases your privacy and can improve storage on your device.", null, {
                            hk: "3xp4Fi"
                        })
                    }), (0, k.jsx)(T, {
                        Icon: v.TimerIcon,
                        size: 18,
                        children: b.fbt._("New messages disappear for everyone after the selected duration.", null, {
                            hk: "NhKeF"
                        })
                    }), (0, k.jsx)(T, {
                        Icon: h.KeepInChatIcon,
                        children: b.fbt._("Anyone can keep or unkeep messages in the chat. Group admins can limit this.", null, {
                            hk: "3rilwF"
                        })
                    }), (0, k.jsx)(T, {
                        Icon: p.HandIcon,
                        children: b.fbt._("People may find other ways to save messages.", null, {
                            hk: "3Y5a4e"
                        })
                    })]
                })
            };
            var a = o(n(887757)),
                i = o(n(348926)),
                r = o(n(963038)),
                l = n(939760),
                c = n(847712),
                d = n(192070),
                s = n(212390),
                u = n(208188),
                f = o(n(644178)),
                p = n(49892),
                h = n(947974),
                g = n(628707),
                C = n(171738),
                m = n(558288),
                v = n(212139),
                _ = o(n(229677)),
                x = n(404186),
                b = n(548360),
                S = n(667294),
                j = (o(n(156720)), o(n(505903))),
                k = n(785893),
                y = {
                    header: {
                        fontSize: "p9fp32ui",
                        fontWeight: "hnx8ox4h",
                        lineHeight: "tkq7s68q",
                        marginTop: "lxsc1wef",
                        textAlign: "qfejxiq4",
                        color: "p5g9vl8k"
                    },
                    subtitle: {
                        marginTop: "fgtikrv0",
                        fontSize: "f8jlpxt4",
                        textAlign: "qfejxiq4",
                        marginBottom: "jg9mtn4o"
                    },
                    icon: {
                        marginEnd: "gqi0zhd6",
                        color: "k06jqncy"
                    },
                    container: {
                        position: "g0rxnol2",
                        display: "p357zi0d",
                        alignItems: "gndfcl4n",
                        marginTop: "c46o30wg",
                        color: "i8b0kslj",
                        fontSize: "ovllcyds"
                    },
                    body: {
                        marginTop: "kv6wexeh",
                        fontSize: "ovllcyds",
                        color: "k06jqncy"
                    }
                };

            function T(e) {
                var t = e.Icon,
                    n = e.children,
                    o = e.size;
                return (0, k.jsxs)(m.TextDiv, {
                    xstyle: y.container,
                    children: [(0, k.jsx)(t, {
                        "aria-hidden": !0,
                        displayInline: !0,
                        width: null != o ? o : 24,
                        height: null != o ? o : 24,
                        xstyle: y.icon
                    }), (0, k.jsx)(m.TextDiv, {
                        xstyle: y.body,
                        children: (0, k.jsx)(m.TextSpan, {
                            children: n
                        })
                    })]
                })
            }
        },
        281101: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = o(n(963038)),
                i = n(377748),
                r = n(896674),
                l = n(940284),
                c = o(n(972911)),
                d = n(241941),
                s = n(544607),
                u = o(n(81724)),
                f = n(295769),
                p = n(704250),
                h = o(n(758927)),
                g = n(487061),
                C = n(154553),
                m = n(945714),
                v = n(315337),
                _ = o(n(964851)),
                x = n(96293),
                b = o(n(598393)),
                S = n(221201),
                j = o(n(904847)),
                k = o(n(829723)),
                y = o(n(544978)),
                T = n(952991),
                P = n(667294),
                E = o(n(156720)),
                I = o(n(802418)),
                w = o(n(982669)),
                O = n(779740),
                A = o(n(803827)),
                L = o(n(32594)),
                M = o(n(38619)),
                R = o(n(27791)),
                N = o(n(788413)),
                D = n(785893),
                B = {
                    display: "p357zi0d",
                    flex: "kk3akd72",
                    justifyContent: "ac2vgrno",
                    paddingTop: "a4bywxmn",
                    paddingBottom: "lzi2pvmc",
                    color: "cs9t9or5"
                },
                H = {
                    position: "lhggkp7q",
                    top: "qq0sjtgm",
                    start: "tkdu00h0",
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh",
                    width: "ln8gz9je",
                    height: "ppled2lx",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    pointerEvents: "jv8uhy2r"
                };

            function F(e, t) {
                var n = e.msgCollection,
                    o = e.chat,
                    F = void 0 === o ? null : o,
                    W = e.onClose,
                    z = e.title,
                    V = e.emptyListText,
                    U = e.footerText,
                    G = e.headerMenu,
                    q = e.descriptionSection,
                    Y = e.displayType,
                    K = e.testid,
                    Z = (0, N.default)(),
                    X = (0, R.default)(),
                    Q = (0, I.default)(),
                    J = (0, M.default)(),
                    $ = (0, w.default)((function() {
                        return new _.default([], (function(e) {
                            return e.id.toString()
                        }))
                    })),
                    ee = (0, w.default)((function() {
                        return new _.default([], (function(e) {
                            return e.id.toString()
                        }))
                    })),
                    te = (0, w.default)((function() {
                        return new Set
                    })),
                    ne = (0, P.useRef)(0),
                    oe = (0, P.useRef)({}),
                    ae = (0, P.useRef)(null),
                    ie = (0, P.useRef)(null),
                    re = function() {
                        return v.RenderCursor.create({
                            msgCollection: n,
                            type: v.RENDER_CURSOR.STARRED_DRAWER
                        }).loadAfter(n, {
                            count: l.MSG_PRELOAD_THRESHOLD
                        })
                    },
                    le = (0, P.useState)(re),
                    ce = (0, a.default)(le, 2),
                    de = ce[0],
                    se = ce[1],
                    ue = function() {
                        var e = n.toArray();
                        $.current.init(e, !0), ee.current.init(e)
                    },
                    fe = (0, A.default)((function() {
                        var e = null == F ? void 0 : F.id;
                        if (de.getEnd(n) < n.length) se(de.loadAfter(n));
                        else {
                            if (n.isSynced) return;
                            n.sync(e).then((function() {
                                Z.aborted || de.hasAfter(n) && se(de.loadAfter(n))
                            })).catch((function(e) {
                                __LOG__(2)`MsgDrawer:loadEarlierMsgs failed\n${e}`
                            }))
                        }
                    })),
                    pe = function(e) {
                        ae.current && ((e ? e.target : document.activeElement) === ae.current && ($.current.index < 0 ? $.current.setFirst(!0) : $.current.reset(!1)))
                    },
                    he = function(e) {
                        $.current.setVal(e), ee.current.setVal(e), r.Cmd.openChatAt(e.chat, (0, i.getSearchContext)(e.chat, e))
                    },
                    ge = function() {
                        var e = n.toArray(),
                            t = n.isSynced ? de.getEnd(n) : Math.min(de.getEnd(n), e.length);
                        return e = e.slice(de.getStart(n), t), ne.current = e.length, e
                    },
                    Ce = function(e) {
                        if (!e) return g.MSG_VISIBILITY.BELOW;
                        var t = ie.current;
                        if (t) {
                            var n = t.previousSibling;
                            if (n && n instanceof HTMLElement) {
                                var o = n.clientHeight,
                                    a = t.scrollTop + o,
                                    i = a + t.clientHeight,
                                    r = e.getElement();
                                return r ? r.offsetTop + r.clientHeight <= a ? g.MSG_VISIBILITY.ABOVE : r.offsetTop >= i ? g.MSG_VISIBILITY.BELOW : g.MSG_VISIBILITY.VISIBLE : g.MSG_VISIBILITY.BELOW
                            }
                        }
                    },
                    me = function(e) {
                        var t = oe.current[e.toString()];
                        if (t) {
                            var n = t.getWrapperRef();
                            return n && "function" == typeof n.getMsgComponentRef ? n.getMsgComponentRef() : void 0
                        }
                    },
                    ve = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return te.current.has(e.toString()) && (!!t || me(e))
                    },
                    _e = (0, L.default)((function() {
                        for (var e, t, o = ge(), a = new Set, i = 0, r = ne.current - 1; i < r;) {
                            var l = Math.floor((i + r) / 2),
                                c = oe.current[o[l].id.toString()];
                            Ce(c) === g.MSG_VISIBILITY.ABOVE ? i = l + 1 : r = l
                        }
                        for (var d = i; d < o.length; d++) {
                            var s = oe.current[o[d].id.toString()];
                            if (Ce(s) !== g.MSG_VISIBILITY.VISIBLE) break;
                            a.add(o[d].id.toString())
                        }
                        e = te.current, t = a, e.forEach((function(e) {
                            if (!t.has(e)) {
                                var o = n.get(e);
                                if (null == o ? void 0 : o.isGif) {
                                    var a = me(e);
                                    (null == a ? void 0 : a.getPlayCount()) && (null == a || a.pause())
                                }
                            }
                        })), te.current = a
                    }), 100),
                    xe = (0, L.default)((function(e) {
                        var t;
                        _e(), e.currentTarget && (t = e.currentTarget).scrollTop + f.SCROLL_FUDGE > t.scrollHeight - t.clientHeight && fe()
                    }), 100);
                (0, P.useEffect)((function() {
                    ue(), ae.current && u.default.focus(ae.current), !n.isSynced && n.length < l.PAGE_SIZE && J(fe), pe()
                }), []), (0, P.useEffect)((function() {
                    _e()
                })), (0, O.useListener)(window, "resize", _e), (0, O.useListener)(n, ["reset", "sync"], (function() {
                    ue(), Q()
                })), (0, O.useListener)(n, ["add", "remove"], (function() {
                    ue(), Q()
                })), (0, O.useListener)(n, "reset", (function() {
                    te.current = new Set, se(re()), fe()
                }));
                var be = n.isSynced,
                    Se = n.length;
                (0, P.useEffect)((function() {
                    !be && Se < l.PAGE_SIZE && J(fe)
                }), [fe, J, be, Se]);
                var je, ke, ye, Te, Pe = ge();
                if (ke = n.isSynced && de.getEnd(n) >= Pe.length ? null : e.msgCollection.syncPromise ? (0, D.jsx)("div", {
                        className: (0, E.default)(B),
                        title: h.default.t(399),
                        children: (0, D.jsx)(x.Spinner, {
                            stroke: 6,
                            size: 24
                        })
                    }) : (0, D.jsx)("div", {
                        className: (0, E.default)(B),
                        children: (0, D.jsx)("div", {
                            title: h.default.t(396),
                            onClick: fe,
                            children: (0, D.jsx)(m.RefreshIcon, {})
                        })
                    }), Pe.length > 0) {
                    var Ee = Pe.map((function(e) {
                        var t = e.type === C.MSG_TYPE.IMAGE || e.type === C.MSG_TYPE.VIDEO || e.type === C.MSG_TYPE.AUDIO;
                        return (0, D.jsx)(b.default, {
                            ref: function(t) {
                                ! function(e, t) {
                                    t ? oe.current[e.id.toString()] = t : delete oe.current[e.id.toString()]
                                }(e, t)
                            },
                            msg: e,
                            isMsgVisible: t ? ve : function() {},
                            currSelection: $.current,
                            activeSelection: ee.current,
                            onClickMsg: he,
                            displayType: Y || d.DISPLAY_TYPE.STARRED_MSGS
                        }, e.id.toString())
                    }));
                    je = (0, D.jsx)(j.default, {
                        transitionName: "slide",
                        children: Ee
                    }), ye = q
                } else e.msgCollection.isSynced ? je = V : (je = (0, D.jsx)(s.Loading, {}), ke = null);
                return null != U && (Te = (0, D.jsx)(c.default, {
                    theme: "md-chat-search-list",
                    children: U
                })), (0, D.jsx)(k.default, {
                    theme: "gallery",
                    ref: t,
                    testid: K,
                    children: (0, D.jsxs)(p.HotKeys, {
                        className: (0, E.default)(H),
                        handlers: {
                            down: function(e) {
                                e && (e.preventDefault(), e.stopPropagation());
                                var t = $.current.next();
                                $.current.index !== t && $.current.setNext(!0)
                            },
                            up: function(e) {
                                e && (e.stopPropagation(), e.preventDefault()), $.current.prev() > -1 && $.current.setPrev(!0)
                            }
                        },
                        onFocus: pe,
                        "data-tab": S.TAB_ORDER.CHAT_STARRED_DRAWER,
                        ref: ae,
                        children: [(0, D.jsx)(T.DrawerHeader, {
                            title: z,
                            onBack: function() {
                                W ? W() : null == X || X.requestDismiss()
                            },
                            type: T.DRAWER_HEADER_TYPE.SMALL,
                            menu: G
                        }), (0, D.jsxs)(y.default, {
                            onScroll: xe,
                            ref: ie,
                            children: [ye, je, ke, Te]
                        })]
                    })
                })
            }
            var W = (0, P.forwardRef)(F);
            t.default = W
        },
        361264: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.getZoomNode,
                    n = e.animateBorderRadius,
                    o = e.animateSquircle,
                    T = void 0 !== o && o,
                    P = (0, S.useModelValues)(e.contact, ["formattedUser", "id"]),
                    E = (0, S.useModelValues)(e.profilePicThumb, ["imgFull"]).imgFull,
                    I = (0, b.useState)(E),
                    w = (0, a.default)(I, 2),
                    O = w[0],
                    A = w[1];
                null != E && O !== E && A(E);
                var L = (0, b.useState)((function() {
                        return C.default.isPSA(e.contact.id) ? {
                            visibility: "visible",
                            transform: "translateX(0px) translateY(0px) scale(1)",
                            borderRadius: "0%",
                            transition: "transform 500ms cubic-bezier(.1,.82,.25,1),\n                  border-radius 500ms cubic-bezier(.1,.82,.25,1)"
                        } : {
                            visibility: "hidden"
                        }
                    })),
                    M = (0, a.default)(L, 2),
                    R = M[0],
                    N = M[1],
                    D = (0, b.useState)((function() {
                        return C.default.isPSA(e.contact.id) ? {
                            width: 640,
                            height: 641
                        } : null
                    })),
                    B = (0, a.default)(D, 2),
                    H = B[0],
                    F = B[1],
                    W = (0, b.useRef)(!1),
                    z = (0, b.useRef)(),
                    V = (0, b.useRef)();
                (0, b.useEffect)((function() {
                    var e = V.current;
                    V.current = null, null == e || e()
                }));
                var U, G, q = (0, j.default)((function() {
                    if (!W.current) {
                        var e;
                        if (W.current = !0, t((function(t) {
                                e = t
                            })), !e) return s.ModalManager.closeMedia();
                        var o = z.current;
                        if (o) {
                            (n || T) && (o.style.transition = (T ? "clip-path" : "border-radius") + " 500ms cubic-bezier(.1,.82,.25,1)", T ? o.style.clipPath = "var(--squircle-polygon)" : o.style.borderRadius = "50%");
                            var a = (0, i.default)(e, "start"),
                                r = o.getBoundingClientRect(),
                                l = a.getBoundingClientRect(),
                                c = l.top - r.top,
                                d = l.left - r.left,
                                u = a.clientWidth / o.clientWidth;
                            (0, h.default)(o, {
                                translateX: [d, 0],
                                translateY: [c, 0],
                                scale: [u, 1]
                            }, {
                                duration: 200,
                                easing: [.1, .82, .25, 1]
                            }).then((function() {
                                s.ModalManager.closeMedia()
                            }))
                        }
                    }
                }));
                (0, b.useEffect)((function() {
                    E || q()
                }), [E, q]), C.default.isPSA(P.id) ? (U = (0, k.jsx)(g.WaChatPsaIcon, {
                    iconXstyle: y.avatarDefaultPSALarge
                }), G = (0, k.jsx)(g.WaChatPsaIcon, {
                    iconXstyle: y.avatarDefaultPSASmall
                })) : O && (U = (0, k.jsx)(c.default, {
                    src: O,
                    hasPrivacyChecks: !0,
                    onLoad: function(e) {
                        var o = e.currentTarget;
                        F({
                            width: o.naturalWidth,
                            height: o.naturalHeight
                        }), V.current = function() {
                            return t((function(e) {
                                var t = o.getBoundingClientRect(),
                                    a = e.getBoundingClientRect(),
                                    i = a.top - t.top,
                                    r = {
                                        visibility: "hidden",
                                        transform: `translateX(${a.left-t.left}px) translateY(${i}px) scale(${e.clientWidth/o.clientWidth})`,
                                        transition: "transform 0s",
                                        borderRadius: void 0
                                    };
                                n && (r.borderRadius = "50%"), N(r), V.current = function() {
                                    var e = {
                                        transform: "translateX(0px) translateY(0px) scale(1)",
                                        transition: "transform 500ms cubic-bezier(.1,.82,.25,1)"
                                    };
                                    n && (e = {
                                        transform: "translateX(0px) translateY(0px) scale(1)",
                                        borderRadius: "0%",
                                        transition: "transform 500ms cubic-bezier(.1,.82,.25,1),\n                                       border-radius 500ms cubic-bezier(.1,.82,.25,1)"
                                    }), N(e)
                                }
                            }))
                        }
                    },
                    className: v.default.profileViewerImg
                }), G = (0, k.jsx)(l.DetailImage, {
                    id: P.id,
                    size: 40,
                    shape: T ? l.DetailImageShape.Squircle : null
                }));
                return (0, k.jsx)(p.UIE, {
                    displayName: "PhotoViewer",
                    escapable: !0,
                    requestDismiss: q,
                    children: (0, k.jsxs)("div", {
                        className: (0, x.default)("overlay", v.default.container),
                        onWheel: function(e) {
                            Math.abs(e.deltaY) > 3 && q()
                        },
                        onClick: q,
                        children: [(0, k.jsxs)("div", {
                            className: v.default.headerContainer,
                            children: [(0, k.jsx)("div", {
                                className: v.default.profileThumb,
                                children: (0, k.jsx)(r.default, {
                                    image: G,
                                    theme: "plain",
                                    primary: (0, k.jsx)(u.Name, {
                                        contact: P,
                                        selectable: !0
                                    })
                                })
                            }), (0, k.jsx)("div", {
                                className: v.default.mediaPanelTools,
                                children: (0, k.jsx)(d.MenuBar, {
                                    theme: "strong",
                                    children: (0, k.jsx)(d.MenuBarItem, {
                                        testid: "btn-close",
                                        icon: (0, k.jsx)(m.XViewerIcon, {}),
                                        title: _.fbt._("Close", null, {
                                            hk: "19Jpec"
                                        }),
                                        onClick: q
                                    })
                                }, "media-panel-header")
                            })]
                        }), (0, k.jsx)("div", {
                            className: v.default.profileContainer,
                            dir: "ltr",
                            children: (0, k.jsx)("div", {
                                className: v.default.media,
                                children: (0, k.jsx)(f.default, {
                                    type: "scaleDown",
                                    size: H,
                                    children: (0, k.jsx)("div", {
                                        className: v.default.profileViewer,
                                        ref: z,
                                        style: R,
                                        children: U
                                    })
                                })
                            })
                        })]
                    })
                })
            };
            var a = o(n(963038)),
                i = o(n(347999)),
                r = o(n(799328)),
                l = n(207826),
                c = o(n(289856)),
                d = n(199479),
                s = n(628707),
                u = n(246009),
                f = o(n(528851)),
                p = n(776097),
                h = o(n(931771)),
                g = n(962949),
                C = o(n(560911)),
                m = n(714771),
                v = o(n(67978)),
                _ = n(548360),
                x = o(n(706442)),
                b = n(667294),
                S = (o(n(156720)), n(948752)),
                j = o(n(803827)),
                k = n(785893),
                y = {
                    avatarDefaultPSASmall: {
                        borderTopStartRadius: "g9p5wyxn",
                        borderTopEndRadius: "i0tg5vk9",
                        borderBottomEndRadius: "aoogvgrq",
                        borderBottomStartRadius: "o2zu3hjb",
                        width: "qssinsw9",
                        height: "lniyxyh2"
                    },
                    avatarDefaultPSALarge: {
                        width: "tfhkdmxh",
                        height: "gw1xhhb9"
                    }
                }
        },
        402325: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.profilePicThumb,
                    n = e.size,
                    o = !t.canSet() && !t.canDelete(),
                    g = (0, f.useState)(!1),
                    C = (0, a.default)(g, 2),
                    m = C[0],
                    v = C[1],
                    _ = (0, p.default)();
                return (0, h.jsx)(d.PhotoPickerLoadable, {
                    type: s.default.PROFILE,
                    id: t.id,
                    attachToChat: !1,
                    pending: m,
                    startImage: t.imgFull,
                    readOnly: o,
                    onImageSet: function(t, n) {
                        var o, a = e.profilePicThumb;
                        v(!0), o = t && n ? (0, u.setProfilePic)(a, t, n) : (0, u.deleteProfilePic)(a), (0, l.default)(o, _).catch((0, r.filteredCatch)(c.ActionError, (function() {
                            __LOG__(3)`ProfileDrawer: failed to set/delete profile image`
                        }))).catch((0, i.catchAbort)((function() {}))).finally((function() {
                            v(!1)
                        }))
                    },
                    size: n
                })
            };
            var a = o(n(963038)),
                i = n(497384),
                r = n(63520),
                l = o(n(704205)),
                c = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                            r && (r.get || r.set) ? Object.defineProperty(o, i, r) : o[i] = e[i]
                        } o.default = e, n && n.set(e, o);
                    return o
                }(n(576498)),
                d = n(639017),
                s = o(n(295850)),
                u = n(176273),
                f = n(667294),
                p = o(n(788413)),
                h = n(785893);

            function g(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (g = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        863358: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, c.jsx)(i.DrawerButton, {
                    testid: "li-share-link",
                    icon: (0, c.jsx)(a.ForwardIcon, {
                        className: (0, l.default)(d)
                    }),
                    onClick: e.onClick,
                    children: r.fbt._("Send link via WhatsApp", null, {
                        hk: "459eKy"
                    })
                })
            };
            var a = n(720135),
                i = n(455316),
                r = n(548360),
                l = o(n(156720)),
                c = n(785893),
                d = {
                    color: "rahkaw8d"
                }
        },
        814847: (e, t, n) => {
            "use strict";
            var o = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = o(n(963038)),
                i = o(n(211430)),
                r = o(n(442435)),
                l = n(990055),
                c = n(704250),
                d = o(n(73098)),
                s = n(983557),
                u = n(659696),
                f = n(105931),
                p = n(776097),
                h = o(n(829723)),
                g = o(n(544978)),
                C = n(952991),
                m = n(560),
                v = n(667294),
                _ = o(n(156720)),
                x = n(279524),
                b = n(785893),
                S = {
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh",
                    height: "cctpw5f5",
                    paddingBottom: "bxcbqipq",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    backgroundColor: "rv6u8h8g"
                },
                j = {
                    flexGrow: "ggj6brxn",
                    paddingTop: "mw9hwy0h",
                    paddingEnd: "lk91ofgv",
                    paddingBottom: "bxcbqipq",
                    paddingStart: "s9xya5d7",
                    overflowX: "i44ccddp",
                    overflowY: "ag5g9lrv",
                    backgroundColor: "rv6u8h8g"
                },
                k = {
                    position: "g0rxnol2",
                    zIndex: "nbczt5ty",
                    height: "noboit18",
                    backgroundColor: "gulicvea"
                },
                y = {
                    position: "lhggkp7q",
                    end: "druapeav",
                    bottom: "k2umuq2k"
                },
                T = function(e, t) {
                    var n = e.defaultText,
                        o = e.title,
                        T = e.onSend,
                        P = e.onBack,
                        E = (0, v.useState)(n),
                        I = (0, a.default)(E, 2),
                        w = I[0],
                        O = I[1],
                        A = (0, x.findFirstWebLink)(w),
                        L = (0, x.useLinkPreview)(A),
                        M = L.linkPreview,
                        R = L.clearLinkPreview,
                        N = o ? (0, b.jsx)(l.EmojiText, {
                            text: o,
                            direction: "auto",
                            titlify: !0,
                            ellipsify: !0
                        }) : null,
                        D = M || {},
                        B = D.title,
                        H = D.canonicalUrl,
                        F = D.description,
                        W = D.thumbnail,
                        z = M ? (0, b.jsx)(p.UIE, {
                            displayName: "ComposeBoxLinkPreview",
                            escapable: !0,
                            requestDismiss: R,
                            children: (0, b.jsx)(i.default, {
                                onOmit: R,
                                children: (0, b.jsx)(d.default, {
                                    title: B,
                                    compose: !0,
                                    canonicalUrl: H,
                                    description: F,
                                    thumbnailJpeg: W
                                })
                            })
                        }) : null;
                    return (0, b.jsx)(m.Modal, {
                        ref: t,
                        type: m.ModalTheme.Box,
                        children: (0, b.jsxs)(h.default, {
                            children: [(0, b.jsx)(C.DrawerHeader, {
                                type: C.DRAWER_HEADER_TYPE.POPUP,
                                onBack: P,
                                children: N
                            }), (0, b.jsx)(g.default, {
                                children: (0, b.jsxs)(c.HotKeys, {
                                    className: (0, _.default)(S),
                                    children: [(0, b.jsx)("div", {
                                        className: (0, _.default)(j),
                                        children: (0, b.jsx)(s.RichTextField, {
                                            legacyImplementation: !0,
                                            testid: "text-message-modal-text-unput",
                                            value: w,
                                            maxLength: r.default.MAX_TXT_MSG_SIZE,
                                            onChange: function(e) {
                                                O(e)
                                            },
                                            supportsEmoji: !0,
                                            multiline: !0,
                                            spellCheck: !0,
                                            showRemaining: !0,
                                            focusOnMount: !0,
                                            theme: "small"
                                        })
                                    }), z]
                                })
                            }), (0, b.jsx)("div", {
                                className: (0, _.default)(k),
                                children: (0, b.jsx)("div", {
                                    className: (0, _.default)(y),
                                    children: (0, b.jsx)(u.Round, {
                                        large: !0,
                                        onClick: function() {
                                            w.length && T(w, M)
                                        },
                                        children: (0, b.jsx)(f.SendIcon, {
                                            directional: !0
                                        })
                                    })
                                })
                            })]
                        })
                    })
                },
                P = (0, v.forwardRef)(T);
            t.default = P
        },
        364730: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                window.getSelection().removeAllRanges();
                var t = document.getElementById(e),
                    n = document.createRange();
                t && n.selectNode(t), window.getSelection().addRange(n);
                try {
                    var o = document.execCommand("copy");
                    return window.getSelection().removeAllRanges(), o
                } catch (e) {
                    return !1
                }
            }
        },
        894358: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            const o = {
                coverPhoto: "_28cxP",
                isEditable: "yToza",
                avatar: "qdD7y",
                noStatusBorder: "_3t0oP",
                hasStatusBorder: "yEzM-",
                coverPhotoImage: "_21f_k"
            }
        },
        956685: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            const o = {
                labelRow: "htdK4",
                standaloneLabelRow: "DRoL5",
                labelContainer: "_3T1FS",
                standaloneLabelContainer: "_1oXnA"
            }
        },
        665901: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            const o = {
                productImage: "mA2Mt",
                productImageContainer: "_1RPqI",
                productThumb: "_1GMgL",
                productThumbContainer: "_3vt25",
                prompt: "jtHAK"
            }
        },
        35659: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            const o = {
                header: "_2v4WC",
                photo: "tbJSz",
                text: "_2hENW",
                name: "CbXK5",
                description: "_3fERT",
                spinner: "_2OegD",
                img: "_2YIih"
            }
        },
        198074: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            const o = {
                carousel: "Zk5oU",
                contentContainer: "_2WuMQ",
                slidesContainer: "_3wjDO",
                loaded: "_2mJIF",
                fadeIn: "_1L5pR",
                spinnerContainer: "_2T83U",
                spinner: "_1AH7f"
            }
        },
        142162: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            const o = {
                slide: "_1Z_Af",
                slideInnerContainer: "_1pPlm",
                image: "_3CLBm"
            }
        },
        743309: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            const o = {
                msg: "_233fJ",
                hover: "_2LaqL",
                current: "_35H7R",
                active: "N4HIH",
                focusAnimation: "_1kXzr",
                focusAnimationKeyframes: "_1jP0D"
            }
        },
        67978: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            const o = {
                mediaPanelTools: "f3Dup",
                profileThumb: "_2xUs5",
                profileContainer: "Cq6XJ",
                media: "_1_TZb",
                profileViewer: "_3OWRM",
                profileViewerImg: "_2hH_e",
                container: "_9-YHG",
                "media-viewer-animate": "_7DTuk",
                mediaViewerAnimate: "_7DTuk",
                headerContainer: "_1U_13"
            }
        }
    }
]);