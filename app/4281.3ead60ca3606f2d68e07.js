/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [4281], {
        104699: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.verifyPostcode = function(e, t) {
                return a.default.verifyAndSavePostcode(e, t)
            };
            var a = n(o(619567))
        },
        375415: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.uploadBizCoverPhoto = function() {
                return u.apply(this, arguments)
            };
            var a = n(o(887757)),
                i = n(o(348926)),
                r = o(264402),
                l = o(386046),
                c = o(14677),
                s = n(o(742389)),
                d = o(447853);

            function u() {
                return (u = (0, i.default)(a.default.mark((function e(t, o, n) {
                    var i, u, f, p, h;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, r.blobToArrayBuffer)(t);
                            case 2:
                                return i = e.sent, e.next = 5, s.default.uploadCoverPhoto({
                                    file: i,
                                    hash: o,
                                    signal: n,
                                    type: c.MEDIA_TYPES.BIZ_COVER_PHOTO,
                                    uploadOrigin: d.UPLOAD_ORIGIN_TYPE.UNKNOWN,
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
        964724: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getGroupCountMetricsFromChatWid = function(e) {
                if (null != e && e.isGroup()) {
                    var t = function(e) {
                        if (e.isGroup()) return (0, a.default)(o(921491)).get(e);
                        return null
                    }(e);
                    if (null != t) return (0, i.getGroupCountMetricsFromGroupMetadata)(t)
                }
            };
            var a = n(o(463113)),
                i = o(966808)
        },
        7942: (e, t, o) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EditBusinessProfileWamEvent = void 0;
            var n = o(644798),
                a = o(447853),
                i = n.TYPES.BOOLEAN,
                r = n.TYPES.STRING,
                l = (0, n.defineEvents)({
                    EditBusinessProfile: [1466, {
                            businessProfileEntryPoint: [10, a.BUSINESS_PROFILE_ENTRY_POINT],
                            editBusinessProfileSessionId: [2, r],
                            editProfileAction: [1, a.EDIT_PROFILE_ACTION],
                            editProfileActionField: [9, a.BUSINESS_PROFILE_FIELD],
                            hasAddress: [5, i],
                            hasCategory: [4, i],
                            hasDescription: [3, i],
                            hasEmail: [7, i],
                            hasHours: [6, i],
                            hasWebsite: [8, i]
                        },
                        [1, 1, 1], "regular"
                    ]
                });
            t.EditBusinessProfileWamEvent = l
        },
        636722: (e, t, o) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ViewBusinessProfileWamEvent = void 0;
            var n = o(644798),
                a = o(447853),
                i = n.TYPES.BOOLEAN,
                r = n.TYPES.INTEGER,
                l = n.TYPES.STRING,
                c = (0, n.defineEvents)({
                    ViewBusinessProfile: [1522, {
                            bizFbSize: [9, a.TRUST_SIGNAL_BUCKETS],
                            bizIgSize: [10, a.TRUST_SIGNAL_BUCKETS],
                            businessProfileJid: [3, l],
                            catalogSessionId: [6, l],
                            hasCoverPhoto: [12, i],
                            isProfileLinked: [11, i],
                            isSelfView: [7, i],
                            linkedAccount: [5, a.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE],
                            profileEntryPoint: [8, a.PROFILE_ENTRY_POINT],
                            scrollDepth: [4, r],
                            viewBusinessProfileAction: [1, a.VIEW_BUSINESS_PROFILE_ACTION],
                            websiteSource: [2, a.WEBSITE_SOURCE_TYPE]
                        },
                        [1, 1, 1], "regular"
                    ]
                });
            t.ViewBusinessProfileWamEvent = c
        },
        120092: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StickerDetailsStickerPackInfo = function(e) {
                var t, o = e.name,
                    n = e.publisher,
                    h = e.theme,
                    C = e.sticker;
                (0, c.isFavoriteStickersEnabled)() && null != C && (t = l.default.get(C.filehash) ? (0, u.jsx)(a.default, {
                    onClick: function() {
                        return (0, r.removeStickerFromFavorites)(C)
                    },
                    type: "secondary",
                    children: d.fbt._("Remove From Favorites", null, {
                        hk: "3YoUkP"
                    })
                }) : (0, u.jsx)(a.default, {
                    onClick: function() {
                        return (0, r.addStickerToFavorites)(C)
                    },
                    type: "secondary",
                    children: d.fbt._("Add to Favorites", null, {
                        hk: "3x4EBo"
                    })
                }));
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsxs)(s.TextDiv, {
                        theme: "plain",
                        xstyle: [f.container, h === p.StickerStore && f.stickerStore, h === p.MediaViewer && f.mediaViewer],
                        children: [o && (0, u.jsx)(i.EmojiText, {
                            xstyle: f.name,
                            text: o
                        }), o && n && (0, u.jsx)(i.EmojiText, {
                            text: " • "
                        }), n && (0, u.jsx)(i.EmojiText, {
                            text: n
                        })]
                    }), t]
                })
            }, t.Theme = void 0;
            var a = n(o(746251)),
                i = o(990055),
                r = o(907812),
                l = n(o(164396)),
                c = o(518005),
                s = o(558288),
                d = o(548360),
                u = (n(o(156720)), o(785893)),
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
                p = o(76672).Mirrored(["StickerStore", "MediaViewer"]);
            t.Theme = p
        },
        675998: (e, t, o) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteCoverPhoto = function e(t) {
                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, a.genId)(),
                    r = (0, l.deleteCoverPhoto)(t),
                    u = new a.ActionType(s.fbt._("Removing cover photo", null, {
                        hk: "1KJSi4"
                    })),
                    f = s.fbt._("Cover photo removal failed", null, {
                        hk: "lbogl"
                    }),
                    p = r.catch((function() {
                        throw __LOG__(3)`actions:deleteCoverPhoto dropped`, new a.ActionType(f)
                    })).catch((0, n.filteredCatch)(i.ServerStatusCodeError, (function(n) {
                        if (n.status >= 400) return new a.ActionType(f, {
                            actionText: s.fbt._("Try again", null, {
                                hk: "BVffp"
                            }),
                            actionHandler: function() {
                                return e(t, o)
                            }
                        })
                    }))).then((function() {
                        return new a.ActionType(s.fbt._("Cover photo removed", null, {
                            hk: "2jTL3n"
                        }))
                    }));
                return c.ToastManager.open((0, d.jsx)(a.ActionToast, {
                    id: o,
                    initialAction: u,
                    pendingAction: p
                })), r.then((function() {}))
            }, t.setCoverPhoto = function e(t, o, u) {
                var f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, a.genId)(),
                    p = new a.ActionType(s.fbt._("Setting cover photo", null, {
                        hk: "1W6Cm8"
                    })),
                    h = s.fbt._("Cover photo set failed", null, {
                        hk: "4jlUAI"
                    }),
                    C = (0, l.sendCoverPhoto)(t, o, u).catch((function() {
                        throw __LOG__(3)`action:setCoverPhoto dropped`, new a.ActionType(h)
                    })).catch((0, n.filteredCatch)(i.ServerStatusCodeError, (function(n) {
                        if (__LOG__(3)`action:setCoverPhoto server error`, n.status >= 400) return new a.ActionType(h, {
                            actionText: s.fbt._("Try again", null, {
                                hk: "BVffp"
                            }),
                            actionHandler: function() {
                                return e(t, o, u, f)
                            }
                        })
                    }))).then((function() {
                        var e;
                        return e = (0, r.coverPhotoPrivacyMessagingEnabled)() ? s.fbt._("Your cover photo is now public", null, {
                            hk: "zDyK5"
                        }) : s.fbt._("Cover photo set", null, {
                            hk: "zswp6"
                        }), new a.ActionType(e)
                    }));
                return c.ToastManager.open((0, d.jsx)(a.ActionToast, {
                    id: f,
                    initialAction: p,
                    pendingAction: C
                })), C.then((function() {}))
            };
            var n = o(63520),
                a = o(341480),
                i = o(104010),
                r = o(894995),
                l = o(201353),
                c = o(422210),
                s = o(548360),
                d = o(785893)
        },
        885952: (e, t, o) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.verifyPostcode = void 0;
            var n = o(104699);
            t.verifyPostcode = function(e, t) {
                return (0, n.verifyPostcode)(e, t)
            }
        },
        915725: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return h.apply(this, arguments)
            };
            var a = n(o(887757)),
                i = n(o(348926)),
                r = o(63520),
                l = o(341480),
                c = o(104010),
                s = o(202908),
                d = o(957367),
                u = o(422210),
                f = o(548360),
                p = o(785893);

            function h() {
                return (h = (0, i.default)(a.default.mark((function e(t, o, n) {
                    var h, C, g;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return h = (0, d.sendUnlinkSubgroups)({
                                    parentGroupId: t,
                                    subgroupIds: o,
                                    removeOrphanMembers: n
                                }), C = (0, i.default)(a.default.mark((function e() {
                                    var t, n, i, r;
                                    return a.default.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, h;
                                            case 3:
                                                if (!((t = e.sent).failedGroups.length > 0)) {
                                                    e.next = 10;
                                                    break
                                                }
                                                if (n = t.failedGroups[0], !(530 === n.error)) {
                                                    e.next = 10;
                                                    break
                                                }
                                                return r = null === (i = s.ChatCollection.get(n.jid)) || void 0 === i ? void 0 : i.formattedTitle, e.abrupt("return", new l.ActionType(null != r ? f.fbt._('"{group-name}" was successfully removed, but not all of its participants were removed from the community.', [f.fbt._param("group-name", r)], {
                                                    hk: "3IpDes"
                                                }) : f.fbt._("The group was successfully removed, but not all of its participants were removed from the community.", null, {
                                                    hk: "1dNLoU"
                                                })));
                                            case 10:
                                                return e.abrupt("return", new l.ActionType(f.fbt._({
                                                    "*": "Groups unlinked",
                                                    _1: "Group unlinked"
                                                }, [f.fbt._plural(o.length)], {
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
                                })))(), g = new l.ActionType(f.fbt._({
                                    "*": "Unlinking groups",
                                    _1: "Unlinking group"
                                }, [f.fbt._plural(o.length)], {
                                    hk: "7pwnQ"
                                })), u.ToastManager.open((0, p.jsx)(l.ActionToast, {
                                    initialAction: g,
                                    pendingAction: C
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
        720138: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, o, n = e.businessProfile,
                    w = e.contact,
                    A = e.editable,
                    L = e.profilePicThumb,
                    M = e.onClick,
                    N = e.onOpenStatus,
                    R = e.onLoad,
                    D = e.hideStatusV3,
                    B = (0, T.useState)(window.innerWidth),
                    H = (0, i.default)(B, 2),
                    W = H[0],
                    F = H[1],
                    U = (0, T.useState)(null),
                    V = (0, i.default)(U, 2),
                    z = V[0],
                    q = V[1],
                    G = (0, j.useModelValues)(n, ["coverPhoto"]),
                    Y = (0, E.default)();
                (0, T.useEffect)((function() {
                    function e() {
                        F(window.innerWidth)
                    }
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []);
                var K = W > 1300 ? 152 : 122,
                    Z = (0, v.isStatusV3ProfilePhotoRingEnabled)() || !(0, v.canSeeStatusV3OnContact)() || w.statusMute || D ? null : m.StatusV3Collection.get(w.id);

                function Q() {
                    Z && (f.ModalManager.openMedia((0, I.jsx)(C.default, {
                        statusV3: Z,
                        onClose: function() {
                            return f.ModalManager.closeMedia()
                        }
                    }), {
                        transition: "status-v3-modal"
                    }), null == N || N())
                }
                var X = null;
                z && (X = (0, I.jsx)(b.UIE, {
                    displayName: "ContextMenu",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: function() {
                        q(null)
                    },
                    children: (0, I.jsx)(S.default, {
                        contextMenu: z
                    })
                }));
                var J, $ = null,
                    ee = P.default.noStatusBorder;
                if (null != Z) {
                    var te = !(0, v.isStatusV3ProfilePhotoRingEnabled)();
                    $ = (0, I.jsx)(_.StatusV3ImageRing, {
                        statusV3: Z,
                        size: K + 24,
                        stroke: 3,
                        theme: _.RingTheme.BusinessContactInfo,
                        respectAppTheme: !0,
                        breakRing: te
                    }), ee = P.default.hasStatusBorder
                }
                J = A && null != L ? (0, I.jsx)(h.default, {
                    profilePicThumb: L,
                    size: K
                }) : (0, I.jsx)(s.DetailImage, {
                    id: w.id,
                    size: K,
                    loader: !0,
                    onLoad: R,
                    onClick: function(e) {
                        if (M)
                            if (null != Z && Z.totalCount > 0) {
                                e.stopPropagation(), e.preventDefault();
                                var t = [(0, I.jsx)(d.DropdownItem, {
                                    testid: "mi-view-photo",
                                    action: function() {
                                        M(e)
                                    },
                                    children: u.default.t(633)
                                }, "view-photo"), (0, I.jsx)(d.DropdownItem, {
                                    testid: "mi-view-status",
                                    action: Q,
                                    children: k.fbt._("View status", null, {
                                        hk: "1QQMZy"
                                    })
                                }, "view-status")];
                                q({
                                    menu: t,
                                    event: e
                                })
                            } else M(e)
                    },
                    quality: s.DetailImageQuality.High
                });
                var oe, ne, ae, ie = null === (t = G.coverPhoto) || void 0 === t ? void 0 : t.url.toString();
                if (null != A && (0, l.isBizCoverPhotoEditEnabled)()) {
                    oe = (0, I.jsx)(r.default, {
                        coverPhoto: null != G.coverPhoto ? G.coverPhoto : void 0,
                        signal: Y
                    });
                    var re = (0, I.jsx)(p.PencilIcon, {
                        directional: !0,
                        color: x.SvgColorProp.TEAL
                    });
                    ne = (0, I.jsx)("div", {
                        className: (0, y.default)(O),
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
                        className: P.default.coverPhotoImage,
                        style: ce,
                        "data-testid": "cover-photo-img",
                        role: "img",
                        "aria-label": le
                    })
                }
                return (0, I.jsxs)(I.Fragment, {
                    children: [(0, I.jsxs)("div", {
                        className: (0, c.cx)((o = {}, (0, a.default)(o, P.default.isEditable, A), (0, a.default)(o, P.default.coverPhoto, !0), o)),
                        children: [ae, oe, ne]
                    }), (0, I.jsxs)("div", {
                        className: P.default.avatar,
                        children: [$, (0, I.jsx)("div", {
                            className: ee,
                            children: J
                        })]
                    }), X]
                })
            };
            var a = n(o(859713)),
                i = n(o(963038)),
                r = n(o(832131)),
                l = o(894995),
                c = o(541585),
                s = o(207826),
                d = o(116384),
                u = n(o(758927)),
                f = o(628707),
                p = o(917318),
                h = n(o(897147)),
                C = n(o(404709)),
                g = o(659696),
                m = o(297186),
                v = o(681150),
                _ = o(86814),
                x = o(401304),
                b = o(776097),
                S = n(o(728056)),
                P = n(o(894358)),
                k = o(548360),
                T = o(667294),
                y = n(o(156720)),
                j = o(853548),
                E = n(o(672900)),
                I = o(785893),
                O = {
                    position: "lhggkp7q",
                    end: "i7sa5vq0",
                    bottom: "fcd3cnzj",
                    zIndex: "jnl3jror",
                    pointerEvents: "m62443ks"
                }
        },
        156836: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getProfilePopulatedFields = l, t.logEditCoverPhoto = function() {
                new i.EditBusinessProfileWamEvent({
                    editProfileAction: r.EDIT_PROFILE_ACTION.ACTION_EDIT_COVER_PHOTO_CLICK,
                    businessProfileEntryPoint: r.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS
                }).commit()
            }, t.logProfileFieldDiscard = function(e, t, o) {
                new i.EditBusinessProfileWamEvent((0, a.default)({
                    editProfileAction: r.EDIT_PROFILE_ACTION.ACTION_PROFILE_FIELD_DISCARD,
                    businessProfileEntryPoint: r.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
                    editProfileActionField: e,
                    editBusinessProfileSessionId: o
                }, l(t))).commit()
            }, t.logProfileFieldOpen = function(e, t, o) {
                new i.EditBusinessProfileWamEvent((0, a.default)({
                    editProfileAction: r.EDIT_PROFILE_ACTION.ACTION_PROFILE_FIELD_OPEN,
                    businessProfileEntryPoint: r.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
                    editProfileActionField: e,
                    editBusinessProfileSessionId: o
                }, l(t))).commit()
            }, t.logProfileFieldSave = function(e, t, o) {
                new i.EditBusinessProfileWamEvent((0, a.default)({
                    editProfileAction: r.EDIT_PROFILE_ACTION.ACTION_PROFILE_FIELD_SAVE,
                    businessProfileEntryPoint: r.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
                    editProfileActionField: e,
                    editBusinessProfileSessionId: o
                }, l(t))).commit()
            }, t.logProfileOpen = function(e, t) {
                var o;
                new i.EditBusinessProfileWamEvent({
                    editProfileAction: r.EDIT_PROFILE_ACTION.ACTION_OPEN,
                    businessProfileEntryPoint: r.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
                    editBusinessProfileSessionId: t,
                    hasDescription: null != e.description,
                    hasCategory: !!(e.categories && e.categories.length > 0),
                    hasHours: null != (null === (o = e.businessHours) || void 0 === o ? void 0 : o.config),
                    hasEmail: null != e.email,
                    hasAddress: null != e.address,
                    hasWebsite: null != e.website
                }).commit()
            }, t.logRemoveCoverPhoto = function() {
                new i.EditBusinessProfileWamEvent({
                    editProfileAction: r.EDIT_PROFILE_ACTION.ACTION_REMOVE_COVER_PHOTO,
                    businessProfileEntryPoint: r.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS
                }).commit()
            };
            var a = n(o(81109)),
                i = o(7942),
                r = o(447853);

            function l(e) {
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
        78383: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, i.jsx)(a.ShoppingCartIcon, {
                    xstyle: [r.cartIcon, "inherit-color" === e.theme && r.inheritColor]
                })
            };
            var a = o(172253),
                i = (n(o(156720)), o(785893)),
                r = {
                    cartIcon: {
                        color: "svlsagor"
                    },
                    inheritColor: {
                        color: "gtscxtjd"
                    }
                }
        },
        53315: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CartIconMenuBarItem = void 0;
            var a = n(o(78383)),
                i = o(608064),
                r = o(810466),
                l = o(199479),
                c = o(179677),
                s = o(548360),
                d = o(667294),
                u = o(785893),
                f = (0, d.forwardRef)((function(e, t) {
                    var o = e.cartIconTheme,
                        n = e.onClick,
                        f = e.cartCountText,
                        p = e.testid,
                        h = void 0 === p ? "menu-bar-cart-link" : p,
                        C = e.catalogOwnerJid,
                        g = (0, d.useContext)(r.DrawerContext);
                    return (0, u.jsx)(l.MenuBarItem, {
                        ref: t,
                        testid: h,
                        icon: (0, u.jsx)(a.default, {
                            theme: o
                        }),
                        text: f,
                        title: s.fbt._("Your cart", null, {
                            hk: "Sn66V"
                        }),
                        onClick: (0, i.getOnCartClickWithLog)(n, C, (0, c.getProductCatalogContext)(g))
                    })
                }));
            t.CartIconMenuBarItem = f, f.displayName = "CartIconMenuBarItem"
        },
        390263: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.catalog,
                    o = e.onSend,
                    n = (0, a.createCatalogLink)(t.id.user),
                    s = t.id.equals((0, r.getMaybeMeUser)()) ? `${l.fbt._("Follow this link to view our catalog on WhatsApp:",null,{hk:"1bmMoC"}).toString()} ${n}` : n;
                return (0, c.jsx)(i.default, {
                    text: s,
                    onSend: o
                })
            };
            var a = o(79760),
                i = n(o(638396)),
                r = o(228277),
                l = o(548360),
                c = o(785893)
        },
        68968: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.product,
                    o = e.onSend,
                    n = (0, a.createProductLink)(t.catalogWid.user, t.id.toString()),
                    s = (0, r.isMeAccount)(t.catalogWid) ? `${l.fbt._("Follow this link to view our item on WhatsApp:",null,{hk:"H5KuN"}).toString()} ${n}` : n;
                return (0, c.jsx)(i.default, {
                    text: s,
                    onSend: o
                })
            };
            var a = o(79760),
                i = n(o(638396)),
                r = o(228277),
                l = o(548360),
                c = o(785893)
        },
        628580: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, o = e.labels,
                    n = e.theme;
                if (!o || !(0, i.canDisplayLabel)()) return null;
                var l = "standalone" === n;
                return (0, s.jsx)("div", {
                    className: (0, r.cx)((t = {}, (0, a.default)(t, c.default.standaloneLabelContainer, l), (0, a.default)(t, c.default.labelContainer, !0), t)),
                    children: o.map((function(e, t) {
                        return (0, s.jsx)(d, {
                            labelId: e,
                            isStandalone: l
                        }, t)
                    }))
                })
            };
            var a = n(o(859713)),
                i = o(894995),
                r = o(541585),
                l = o(160126),
                c = n(o(956685)),
                s = o(785893);

            function d(e) {
                var t, o = e.labelId,
                    n = e.isStandalone;
                return (0, s.jsx)("div", {
                    className: (0, r.cx)((t = {}, (0, a.default)(t, c.default.standaloneLabelRow, n), (0, a.default)(t, c.default.labelRow, !0), t)),
                    children: (0, s.jsx)(l.Labels, {
                        labels: [o],
                        showName: !0
                    })
                })
            }
        },
        545354: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.collection,
                    o = (0, x.useState)(!1),
                    n = (0, a.default)(o, 2),
                    S = n[0],
                    P = n[1],
                    k = (0, x.useState)(!1),
                    T = (0, a.default)(k, 2),
                    y = T[0],
                    j = T[1],
                    E = (0, x.useState)(""),
                    I = (0, a.default)(E, 2),
                    O = I[0],
                    w = I[1],
                    A = function() {
                        f.ModalManager.close()
                    };
                if (y) return (0, b.jsx)(c.ConfirmPopup, {
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
                var L = O.length < 1 || S;
                return (0, b.jsx)(c.ConfirmPopup, {
                    title: _.fbt._("Request review", null, {
                        hk: "1Rp2pL"
                    }),
                    onOK: function() {
                        P(!0);
                        var e = !0;
                        h.QPL.markerStart(p.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL), (0, u.handleCollectionAppeal)(t, O).then((function() {
                            P(!1), j(!0), e = !1, h.QPL.markerEnd(p.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, r.QuickLogActionType.SUCCESS)
                        })).catch((0, i.filteredCatch)(l.ServerStatusCodeError, (function() {
                            v.ToastManager.open((0, b.jsx)(m.Toast, {
                                msg: _.fbt._("Something went wrong and your request wasn't submitted. Try again.", null, {
                                    hk: "3sAwQH"
                                }),
                                id: (0, m.genId)("catalog_collection_appeal_submission_failed")
                            })), P(!1)
                        }))).finally((function() {
                            e && h.QPL.markerEnd(p.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, r.QuickLogActionType.FAIL)
                        }))
                    },
                    onCancel: A,
                    okDisabled: L,
                    children: (0, b.jsxs)("form", {
                        children: [(0, b.jsx)(C.RichTextField, {
                            testid: "confirm-popup-text-input",
                            placeholder: _.fbt._("Enter reason for this request...", null, {
                                hk: "3U5nE7"
                            }),
                            onChange: function(e) {
                                var t = e.text;
                                w(t)
                            },
                            value: O,
                            maxLength: 1e3
                        }), (0, b.jsx)(d.ExternalLink, {
                            href: s.default.WA_COMMERCE_POLICY_URL,
                            children: _.fbt._("Learn More", null, {
                                hk: "FZuUT"
                            })
                        })]
                    })
                })
            };
            var a = n(o(963038)),
                i = o(63520),
                r = o(742649),
                l = o(104010),
                c = o(430888),
                s = n(o(442435)),
                d = o(192070),
                u = o(911558),
                f = o(628707),
                p = o(754360),
                h = o(324928),
                C = o(983557),
                g = o(558288),
                m = o(236539),
                v = o(422210),
                _ = o(548360),
                x = o(667294),
                b = o(785893)
        },
        870473: (e, t, o) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = o(430888),
                a = o(628707),
                i = o(548360),
                r = o(785893),
                l = function(e) {
                    a.ModalManager.open((0, r.jsx)(n.ConfirmPopup, {
                        okText: i.fbt._("OK", null, {
                            hk: "4oTrfy"
                        }),
                        onOK: function() {
                            return a.ModalManager.close()
                        },
                        children: e
                    }))
                };
            t.default = l
        },
        832131: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.coverPhoto,
                    o = e.signal,
                    n = (0, h.useState)(!1),
                    g = (0, a.default)(n, 2),
                    m = g[0],
                    v = g[1],
                    _ = (0, h.useState)(null == t ? void 0 : t.url),
                    x = (0, a.default)(_, 2),
                    b = x[0],
                    S = x[1];
                return (0, h.useEffect)((function() {
                    (null == b ? void 0 : b.pathname) !== (null == t ? void 0 : t.url.pathname) && S(null == t ? void 0 : t.url)
                }), [t, b]), (0, C.jsx)(p.PhotoPickerLoadable, {
                    type: f.PhotoPickerType.COVER_PHOTO,
                    pending: m,
                    readOnly: !1,
                    onImageSet: function(e, n) {
                        if (v(!0), null != n) {
                            var a = (0, c.dataURLtoBlob)(n);
                            (0, l.calculateFilehashFromBlob)(a).then((function(e) {
                                (0, u.uploadBizCoverPhoto)(a, e, o).then((function(e) {
                                    o.aborted || ((0, r.setCoverPhoto)(e.id, e.ts, e.metaHmac), (0, s.logEditCoverPhoto)())
                                })).catch((0, i.filteredCatch)(d.HttpInvalidResponseError, (function() {
                                    __LOG__(3)`BizCoverPhotoPicker: failed to upload cover photo`
                                }))).catch((function() {
                                    __LOG__(4, void 0, new Error, !0)`BizCoverPhotoPicker: unexpected error uploading cover photo`, SEND_LOGS("biz_cover_photo_upload")
                                })).finally((function() {
                                    v(!1)
                                }))
                            }))
                        } else(null == t ? void 0 : t.id) && (0, r.deleteCoverPhoto)(t.id).finally((function() {
                            v(!1), (0, s.logRemoveCoverPhoto)()
                        }))
                    },
                    attachToChat: !1,
                    startImage: null == b ? void 0 : b.toString(),
                    theme: f.PhotoPickerThemeType.COVER_PHOTO
                })
            };
            var a = n(o(963038)),
                i = o(63520),
                r = o(675998),
                l = o(566282),
                c = o(616482),
                s = o(156836),
                d = o(386046),
                u = o(375415),
                f = o(942518),
                p = o(639017),
                h = o(667294),
                C = o(785893)
        },
        692364: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, c.jsx)(a.DrawerButton, {
                    testid: "li-share-link",
                    icon: (0, c.jsx)(i.ForwardIcon, {
                        className: (0, l.default)(s)
                    }),
                    onClick: e.onClick,
                    children: r.fbt._("Send product", null, {
                        hk: "1wkzue"
                    })
                })
            };
            var a = o(519973),
                i = o(720135),
                r = o(548360),
                l = n(o(156720)),
                c = o(785893),
                s = {
                    color: "rahkaw8d"
                }
        },
        131730: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onOpenCollections,
                    o = (0, s.useState)(!1),
                    n = (0, a.default)(o, 2),
                    f = n[0],
                    p = n[1],
                    h = i.CatalogCollection.get((0, c.getMeUser)());
                return (0, d.useListener)(null == h ? void 0 : h.collections, "change", (function() {
                    p(!0)
                })), f && (0, u.jsx)(r.default, {
                    children: (0, u.jsx)(l.default, {
                        onClick: t
                    })
                })
            };
            var a = n(o(963038)),
                i = o(218953),
                r = n(o(271200)),
                l = n(o(130113)),
                c = o(228277),
                s = o(667294),
                d = o(494092),
                u = o(785893)
        },
        84358: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = new d.CoolOffNux(g, {
                    COOL_OFF_START_STORAGE_KEY: s.CoolOffPeriodKeys.CATALOG,
                    MAX_VIEWS_IN_DAYS: 1,
                    COOL_OFF_DURATION_IN_DAYS: 1,
                    metricField: v
                });
                if (e.shouldShow()) {
                    var t = (0, C.jsx)(i.ConfirmPopup, {
                        onOK: function() {
                            e.dismiss(), c.ModalManager.close()
                        },
                        children: (0, C.jsxs)(r.FlexColumn, {
                            align: "center",
                            children: [(0, C.jsx)(l.default, {
                                xstyle: m.graphic,
                                children: (0, C.jsx)(a.CartInterstitialGraphicIcon, {})
                            }), (0, C.jsx)(u.TextHeader, {
                                theme: "popupTitle",
                                children: p.fbt._("New: Add to Cart", null, {
                                    hk: "34ysyY"
                                })
                            }), (0, C.jsx)(u.TextParagraph, {
                                color: "secondary",
                                className: (0, h.default)(m.description),
                                children: p.fbt._("Simpler for you to keep track of order inquiries, manage requests, and close sales.", null, {
                                    hk: "25ZM2y"
                                })
                            })]
                        })
                    });
                    c.ModalManager.open(t), e.show(), e.startCoolOffToday()
                }
            };
            var a = o(965293),
                i = o(430888),
                r = o(208188),
                l = n(o(644178)),
                c = o(628707),
                s = o(171738),
                d = o(833674),
                u = o(558288),
                f = o(447853),
                p = o(548360),
                h = n(o(156720)),
                C = o(785893),
                g = s.NuxKeyTypes.COOL_OFF_NUX.CART_INTERSTITIAL,
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
                v = f.BANNER_TYPES.SMB_CATALOG_CART_INTERSTITIAL
        },
        130113: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(o(334575)),
                i = n(o(993913)),
                r = n(o(502205)),
                l = n(o(199842)),
                c = o(519509),
                s = o(218953),
                d = o(500204),
                u = n(o(441158)),
                f = o(171738),
                p = o(923992),
                h = o(833674),
                C = o(228277),
                g = o(447853),
                m = o(548360),
                v = o(667294),
                _ = n(o(156720)),
                x = o(785893),
                b = {
                    color: "o0rubyzf"
                },
                S = f.NuxKeyTypes.COOL_OFF_NUX.COLLECTIONS,
                P = {
                    COOL_OFF_DURATION_IN_DAYS: 2,
                    VIEWS_BEFORE_COOL_OFF_IN_DAYS: 1,
                    CLICKS_BEFORE_COOL_OFF: 1,
                    MAX_VIEWS_IN_DAYS: 2,
                    COOL_OFF_START_STORAGE_KEY: f.CoolOffPeriodKeys.CATALOG,
                    metricField: g.BANNER_TYPES.SMB_COLLECTION_CREATION
                };
            var k = function(e) {
                (0, r.default)(o, e);
                var t = (0, l.default)(o);

                function o() {
                    var e;
                    (0, a.default)(this, o);
                    for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return (e = t.call.apply(t, [this].concat(i)))._refContainer = (0, v.createRef)(), e.getElement = function() {
                        return e._refContainer.current
                    }, e
                }
                return (0, i.default)(o, [{
                    key: "render",
                    value: function() {
                        var e = this.props.onClick,
                            t = new h.CoolOffNux(S, P),
                            o = (0, x.jsx)("span", {
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
                            actionText: o,
                            onClick: e,
                            nuxManager: t,
                            theme: "nuxBlue"
                        })
                    }
                }], [{
                    key: "shouldShow",
                    value: function() {
                        return (0, c.getABPropConfigValue)("web_abprop_collections_nux_banner") && d.Conn.isSMB && function() {
                            var e = s.CatalogCollection.get((0, C.getMeUser)());
                            if (null == e || null == e.collections) return !1;
                            var t = e.collections.getCollectionModels(!0);
                            return e.productCollection.getProductModels(!0).some((function(e) {
                                return !e.isHidden && "REJECTED" !== e.reviewStatus
                            })) && 0 === t.length
                        }() && (0, h.shouldShowNUX)(S, P)
                    }
                }]), o
            }(p.NuxBanner);
            t.default = k, k.displayName = "CollectionsBanner"
        },
        679729: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getCatalogDrawerMenu = function(e) {
                var t = e.onCartClick,
                    o = e.cartCount,
                    n = e.catalogId,
                    i = e.canManageCatalog,
                    l = e.onSendCatalog,
                    c = e.onOpenCollections,
                    s = e.onOpenMerchantDetailsForm,
                    d = e.onOpenSettings,
                    u = e.cartIconTheme;
                return [t && null != n ? (0, g.jsx)(r.CartIconMenuBarItem, {
                    cartCountText: (0, a.isNumber)(o) && o > 0 ? o.toString() : void 0,
                    onClick: t,
                    catalogOwnerJid: n,
                    cartIconTheme: u
                }) : null, (0, g.jsx)(m, {
                    canManageCatalog: i,
                    onSendCatalog: l,
                    onOpenCollections: c,
                    onOpenMerchantDetailsForm: s,
                    onOpenSettings: d
                })]
            };
            var a = o(689121),
                i = o(894995),
                r = o(53315),
                l = o(482510),
                c = o(116384),
                s = n(o(758927)),
                d = o(199479),
                u = o(994291),
                f = n(o(319913)),
                p = o(228277),
                h = o(548360),
                C = o(667294),
                g = o(785893),
                m = (0, C.forwardRef)((function(e, t) {
                    var o = e.canManageCatalog,
                        n = e.onSendCatalog,
                        a = e.onOpenCollections,
                        r = e.onOpenMerchantDetailsForm,
                        C = e.onOpenSettings;
                    return o ? (0, g.jsx)(d.MenuBarItem, {
                        ref: t,
                        testid: "menu-bar-menu",
                        icon: (0, g.jsx)(u.MenuIcon, {}),
                        title: s.default.t(430),
                        children: (0, g.jsxs)(l.Dropdown, {
                            type: l.MenuType.DropdownMenu,
                            flipOnRTL: !0,
                            dirX: l.DirX.LEFT,
                            children: [(0, g.jsx)(c.DropdownItem, {
                                testid: "mi-foward menu-item",
                                action: n,
                                children: s.default.t(311)
                            }), a && (0, g.jsx)(c.DropdownItem, {
                                testid: "mi-collections menu-item",
                                action: a,
                                children: h.fbt._("Collections", null, {
                                    hk: "1VWu7A"
                                })
                            }), (0, i.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney)((0, p.getMeUser)()) && r && (0, g.jsx)(c.DropdownItem, {
                                testid: "merchant-details",
                                action: r,
                                children: h.fbt._("Business details", null, {
                                    hk: "m9xzp"
                                })
                            }, "merchantDetails"), C && (0, g.jsx)(c.DropdownItem, {
                                testid: "mi-settings menu-item",
                                action: C,
                                children: h.fbt._("Settings", null, {
                                    hk: "2RmHUB"
                                })
                            })]
                        }, "CatalogDetailHeader")
                    }) : (0, g.jsx)(d.MenuBarItem, {
                        ref: t,
                        testid: "menu-bar-catalog-link",
                        icon: (0, g.jsx)(f.default, {}),
                        title: h.fbt._("Catalog link", null, {
                            hk: "M36Dw"
                        }),
                        onClick: n
                    })
                }));
            m.displayName = "MenuItems"
        },
        597738: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onProductCatalog,
                    o = e.title,
                    n = e.subtitle,
                    a = e.animation,
                    i = e.sectionTheme,
                    s = void 0 === i ? "padding" : i,
                    f = e.shouldLog,
                    C = e.catalog,
                    g = e.onProductDetail,
                    v = e.filterProductId,
                    b = e.productsToShow,
                    j = void 0 === b ? 6 : b,
                    E = e.hideIncompleteRows,
                    I = void 0 !== E && E,
                    O = e.showProductPlaceholders,
                    w = e.seeMoreOverlay,
                    A = e.catalogEntryLabel,
                    L = e.showShopsLogo,
                    M = (0, x.useContext)(l.DrawerContext);
                (0, x.useEffect)((function() {
                    f && null != C && (0, h.logBusinessProfileCatalogView)({
                        catalogOwnerWid: C.id,
                        catalogContext: (0, p.getProductCatalogContext)(M)
                    })
                }), []);
                var N = (0, S.jsx)(k, {
                        catalogEntryLabel: A,
                        onClick: function() {
                            return t((0, p.getProductCatalogContext)(M), "ContactInfo")
                        }
                    }),
                    R = (0, S.jsx)(y, {
                        productsToShow: j,
                        catalog: C,
                        hideIncompleteRows: I,
                        filterProductId: v,
                        seeMoreOverlay: w,
                        showProductPlaceholders: O,
                        onProductThumbClick: function(e, o) {
                            return e ? t((0, p.getProductCatalogContext)(M), "ContactInfo") : function(e) {
                                f && (0, h.logProfileProductClick)({
                                    product: (0, m.unproxy)(e),
                                    catalogContext: (0, p.getProductCatalogContext)(M)
                                }), g(e)
                            }(o)
                        },
                        onProductImageClick: function() {
                            return t((0, p.getProductCatalogContext)(M), "ContactInfo")
                        }
                    }),
                    D = n ? (0, S.jsx)(u.default, {
                        xstyle: P.subtitle,
                        children: n
                    }) : null,
                    B = (0, S.jsxs)(d.FlexRow, {
                        align: "center",
                        children: [D, (0, S.jsx)(u.default, {
                            children: (0, S.jsx)(r.ChevronRightAltIcon, {
                                xstyle: P.chevron,
                                directional: !0
                            })
                        })]
                    });
                return (0, S.jsxs)(c.default, {
                    title: o || _.fbt._("Products", null, {
                        hk: "3Ky71N"
                    }),
                    titleOnClick: function() {
                        return t((0, p.getProductCatalogContext)(M), "ContactInfo")
                    },
                    subtitle: B,
                    theme: s,
                    animation: a,
                    children: [R, N, !0 === L ? (0, S.jsx)(T, {}) : null]
                })
            };
            var a = o(894995),
                i = n(o(746251)),
                r = o(519896),
                l = o(810466),
                c = n(o(39357)),
                s = o(299297),
                d = o(208188),
                u = n(o(644178)),
                f = o(507759),
                p = o(179677),
                h = o(647435),
                C = o(604785),
                g = o(926464),
                m = o(378776),
                v = n(o(83938)),
                _ = o(548360),
                x = o(667294),
                b = n(o(156720)),
                S = o(785893),
                P = {
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
                    o = e.onClick;
                return null == t ? null : (0, S.jsx)("div", {
                    className: (0, b.default)(P.catalogEntryButton),
                    children: (0, S.jsx)(i.default, {
                        testid: "catalog-entry-button",
                        type: "secondary",
                        onClick: o,
                        children: t
                    })
                })
            }

            function T() {
                return (0, S.jsx)("div", {
                    className: (0, b.default)(P.shopsLogo),
                    children: (0, S.jsx)(s.FbshopsIcon, {
                        displayInline: !0
                    })
                })
            }

            function y(e) {
                var t, o, n = e.productsToShow,
                    i = e.catalog,
                    r = e.hideIncompleteRows,
                    l = e.filterProductId,
                    c = e.seeMoreOverlay,
                    s = e.showProductPlaceholders,
                    d = e.onProductThumbClick,
                    u = e.onProductImageClick,
                    p = [],
                    h = n;
                if ((0, a.canSeeBizProfileV3)() && (o = "largeGallerySpacing"), null != i) {
                    t = i.productCollection;
                    var m = i.productCollection.getProductModels();
                    r && p.length > 3 && (h = Math.min(n, m.length - p.length % 3)), p = m.slice(0, h + 1).filter((function(e) {
                        return e.id.toString() !== l
                    })).map((function(e, t) {
                        var n, a, r = null === (n = e.getPreviewImage()) || void 0 === n ? void 0 : n.mediaData;
                        return r ? (c && t === h - 1 && i.productCollection.length > h - 1 && (a = _.fbt._("See more", null, {
                            hk: "450jnd"
                        })), (0, S.jsx)(C.ProductThumb, {
                            onClick: function() {
                                return d(null != a, e)
                            },
                            mediaData: r,
                            overlayContent: a,
                            theme: o
                        }, e.id.toString())) : (0, S.jsx)(S.Fragment, {})
                    })).slice(0, h)
                } else(t = new g.ProductCollection).add({
                    id: "_ph"
                });
                if (!p.length && !s) return null;
                for (var x, b = P.addIcon; s && p.length < h;) p.push((0, S.jsx)(v.default, {
                    onClick: u,
                    title: _.fbt._("Add product", null, {
                        hk: "3gdovw"
                    }),
                    xstyle: [b, "largeGallerySpacing" === o && P.largeGallerySpacing],
                    children: (0, S.jsx)(S.Fragment, {})
                }, `_ph${p.length}`)), b = P.placeholderThumb;
                return (0, a.canSeeBizProfileV3)() && (x = "space-between"), (0, S.jsx)(f.MediaGalleryView, {
                    productMedias: p,
                    mediaCollection: t,
                    justify: x
                })
            }
        },
        970468: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(o(390263)),
                i = o(79760),
                r = n(o(799328)),
                l = n(o(809139)),
                c = o(207826),
                s = n(o(237120)),
                d = n(o(686866)),
                u = o(810466),
                f = o(58985),
                p = o(628707),
                h = o(246009),
                C = o(179677),
                g = n(o(16499)),
                m = o(647435),
                v = n(o(997967)),
                _ = o(548360),
                x = o(667294),
                b = n(o(156720)),
                S = o(785893),
                P = {
                    paddingTop: "i5tg98hk",
                    paddingEnd: "iffbo4e8",
                    paddingBottom: "aiput80m",
                    paddingStart: "khscay3k",
                    lineHeight: "qg52vu03"
                },
                k = "catalog-link-anchor";

            function T(e, t) {
                var o, n, T = e.onBack,
                    y = e.onCancel,
                    j = e.catalog,
                    E = e.contact,
                    I = e.prompt,
                    O = e.centerDrawer,
                    w = e.onSend,
                    A = (0, x.useContext)(u.DrawerContext),
                    L = function() {
                        p.ModalManager.open((0, S.jsx)(a.default, {
                            catalog: j,
                            onSend: w
                        }), {
                            transition: "modal-flow"
                        }), (0, m.logShareCatalogViaWALinkClick)({
                            catalogOwnerWid: j.id,
                            catalogContext: (0, C.getProductCatalogContext)(A)
                        })
                    },
                    M = (0, S.jsx)(c.DetailImage, {
                        id: E.id,
                        size: 82,
                        quality: c.DetailImageQuality.High
                    });
                return O && (o = "labels", n = "center-column"), (0, S.jsxs)(s.default, {
                    ref: t,
                    theme: o,
                    children: [(0, S.jsx)(f.DrawerHeader, {
                        testid: "catalog-link-title",
                        title: _.fbt._("Catalog link", null, {
                            hk: "M36Dw"
                        }),
                        onBack: T,
                        onCancel: y,
                        type: f.DRAWER_HEADER_TYPE.SMALL
                    }), (0, S.jsxs)(d.default, {
                        theme: n,
                        children: [(0, S.jsx)("div", {
                            className: (0, b.default)(P),
                            children: I
                        }), (0, S.jsx)(r.default, {
                            image: M,
                            primary: (0, S.jsx)(h.Name, {
                                contact: E,
                                useVerifiedName: !0
                            }),
                            theme: "identity",
                            secondary: (0, S.jsx)(g.default, {
                                id: k,
                                href: (0, i.createCatalogLink)(j.id.user),
                                onClick: function(e) {
                                    e.preventDefault(), L()
                                },
                                noHandle: !0
                            })
                        }), (0, S.jsx)(v.default, {
                            onClick: L
                        }), (0, S.jsx)(l.default, {
                            elementId: k,
                            onClick: function() {
                                (0, m.logShareCatalogCopyLinkClick)({
                                    catalogOwnerWid: j.id,
                                    catalogContext: (0, C.getProductCatalogContext)(A)
                                })
                            }
                        })]
                    })]
                }, "catalog-link-drawer")
            }
            var y = (0, x.forwardRef)(T);
            t.default = y
        },
        46801: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return l.apply(this, arguments)
            };
            var a = n(o(887757)),
                i = n(o(348926)),
                r = o(125089);

            function l() {
                return (l = (0, i.default)(a.default.mark((function e(t) {
                    var o, n, i;
                    return a.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ((n = r.BusinessProfileCollection.get(t)) && !n.stale) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 4, r.BusinessProfileCollection.update(t);
                            case 4:
                                i = e.sent, n = Array.isArray(i) ? i[0] : i;
                            case 6:
                                return e.abrupt("return", (null === (o = n.profileOptions) || void 0 === o ? void 0 : o.cartEnabled) || !1);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        778603: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDetailDrawerMenu = function(e) {
                var t = e.contactId,
                    o = e.onSendProduct,
                    n = e.onReportProduct,
                    C = e.onProductLinkClick,
                    g = e.onProductMoreInformation,
                    m = e.onCartClick,
                    v = e.cartCount,
                    _ = e.catalogId;
                return [m && null != _ ? (0, h.jsx)(r.CartIconMenuBarItem, {
                    cartCountText: (0, a.isNumber)(v) && v > 0 ? v.toString() : void 0,
                    onClick: m,
                    catalogOwnerJid: _
                }) : null, (0, h.jsx)(d.MenuBarItem, {
                    testid: "menu-bar-product-link",
                    icon: (0, h.jsx)(f.default, {}),
                    title: p.fbt._("Product link", null, {
                        hk: "1RIlvV"
                    }),
                    onClick: C
                }, "link"), (0, h.jsx)(d.MenuBarItem, {
                    testid: "menu-bar-menu",
                    icon: (0, h.jsx)(u.MenuIcon, {}),
                    title: s.default.t(430),
                    children: (0, h.jsxs)(l.Dropdown, {
                        type: l.MenuType.DropdownMenu,
                        flipOnRTL: !0,
                        dirX: l.DirX.LEFT,
                        children: [(0, h.jsx)(c.DropdownItem, {
                            testid: "mi-send menu-item",
                            action: o,
                            children: p.fbt._("Send product", null, {
                                hk: "1wkzue"
                            })
                        }), (0, i.canSeeECommerceComplianceIndiaSoftEnforcement)(t) && (0, h.jsx)(c.DropdownItem, {
                            testid: "mi-send menu-item",
                            action: g,
                            children: p.fbt._("More information", null, {
                                hk: "2JHvi1"
                            })
                        }), (0, h.jsx)(c.DropdownItem, {
                            testid: "mi-report menu-item",
                            action: n,
                            children: p.fbt._("Report product", null, {
                                hk: "1jgCyX"
                            })
                        })]
                    }, "ProductDetailHeader")
                }, "dropdown")]
            };
            var a = o(689121),
                i = o(894995),
                r = o(53315),
                l = o(482510),
                c = o(116384),
                s = n(o(758927)),
                d = o(199479),
                u = o(994291),
                f = n(o(319913)),
                p = o(548360),
                h = o(785893)
        },
        885882: (e, t, o) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseErrorState = function(e, t) {
                if (e instanceof a.Unmount);
                else {
                    if (!(e instanceof n.ServerStatusCodeError)) throw t("ERROR"), e;
                    "not_found" === e.status || 404 === e.status ? t("NOT_FOUND") : (t("ERROR"), __LOG__(3)`parseErrorState:Failed to fetch from server`)
                }
            };
            var n = o(104010),
                a = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = i(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var l = a ? Object.getOwnPropertyDescriptor(e, r) : null;
                            l && (l.get || l.set) ? Object.defineProperty(n, r, l) : n[r] = e[r]
                        } n.default = e, o && o.set(e, n);
                    return n
                }(o(576498));

            function i(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (i = function(e) {
                    return e ? o : t
                })(e)
            }
        },
        587467: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.fetchState;
                switch (t) {
                    case "NONE":
                    case "SUCCESS":
                        return null;
                    case "PENDING":
                        return (0, s.jsxs)("div", {
                            className: (0, c.default)(d),
                            children: [(0, s.jsx)(a.Spinner, {
                                size: 14,
                                color: "highlight"
                            }), (0, s.jsx)(i.TextSpan, {
                                className: (0, c.default)(u, f),
                                theme: "small",
                                children: l.fbt._("Waiting for network", null, {
                                    hk: "3I2DtN"
                                })
                            })]
                        });
                    case "NOT_FOUND":
                    case "ERROR":
                        return (0, s.jsx)("div", {
                            className: (0, c.default)(d),
                            children: (0, s.jsx)(i.TextSpan, {
                                className: (0, c.default)(u),
                                theme: "small",
                                color: "danger",
                                children: "NOT_FOUND" === t ? l.fbt._("This product or service has been removed", null, {
                                    hk: "3mE1ld"
                                }) : l.fbt._("Something went wrong", null, {
                                    hk: "7C9hw"
                                })
                            })
                        });
                    default:
                        throw (0, r.default)(`invalid fetchState ${t}`)
                }
            };
            var a = o(96293),
                i = o(558288),
                r = n(o(580845)),
                l = o(548360),
                c = n(o(156720)),
                s = o(785893),
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
                u = {
                    marginTop: "tt8xd2xn",
                    marginEnd: "spjzgwxb",
                    marginBottom: "mpdn4nr2",
                    marginStart: "a3oefunm",
                    fontWeight: "hnx8ox4h"
                },
                f = {
                    color: "evzurl1e"
                }
        },
        319913: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, r.jsx)(a.LinkIcon, {
                    className: (0, i.default)(l.linkIcon, "inherit-color" === e.theme && l.inheritColor)
                })
            };
            var a = o(384616),
                i = n(o(156720)),
                r = o(785893),
                l = {
                    linkIcon: {
                        color: "svlsagor"
                    },
                    inheritColor: {
                        color: "gtscxtjd"
                    }
                }
        },
        16499: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.id,
                    o = e.href,
                    n = e.onClick,
                    s = e.noHandle;
                return (0, r.jsx)("span", {
                    className: (0, i.default)(l),
                    children: (0, r.jsx)(a.SelectableLink, {
                        id: t,
                        href: o,
                        className: (0, i.default)(c),
                        selectable: !0,
                        onClick: n,
                        "data-nohandle": s,
                        children: o
                    })
                })
            };
            var a = o(160967),
                i = n(o(156720)),
                r = o(785893),
                l = {
                    wordWrap: "b6f1x6w7",
                    whiteSpace: "hmy10g0s"
                },
                c = {
                    color: "e1vllz7m"
                }
        },
        328781: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onProductDetail,
                    o = e.onProductShare,
                    n = e.onCartOpen,
                    _ = e.shareLinks,
                    x = e.canManageCatalog,
                    b = (0, g.useState)(void 0),
                    S = (0, a.default)(b, 2),
                    P = S[0],
                    k = S[1],
                    T = (0, m.useModelValues)(e.catalog, ["productCollection", "afterCursor", "id", "index"]),
                    y = function(e) {
                        o && o(e)
                    };
                if (!T.productCollection || !T.productCollection.getProductModels(e.canManageCatalog).length) return null;
                return (0, v.jsx)(c.default, {
                    flatListControllers: [e.flatListController],
                    children: (0, v.jsx)(l.FlatList, {
                        flatListController: e.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: (j = void 0 !== n, T.productCollection.getProductModels(x).map((function(e) {
                            return {
                                itemKey: `${e.id.toString()}_${j.toString()}`,
                                product: e
                            }
                        }))),
                        renderItem: function(e) {
                            var o = e.product;
                            return (0, v.jsx)(i.DrawerContext.Consumer, {
                                children: function(e) {
                                    var a = (0, f.getProductCatalogContext)(e);
                                    return (0, v.jsx)(p.default, {
                                        product: o,
                                        onCartOpen: n,
                                        onClick: function() {
                                            return function(e, o) {
                                                return (0, h.logCatalogListDetailClick)({
                                                    product: (0, C.unproxy)(e),
                                                    catalogContext: o
                                                }), k(e.id.toString()), t(e)
                                            }(o, a)
                                        },
                                        onProductShare: _ ? y : null,
                                        onProductDelete: function(e) {
                                            return function(e, t) {
                                                (0, d.handleProductDelete)(T, e, t, "Catalog").then((function() {
                                                    e.id === P && (r.DrawerManager.closeDrawerMid(), k(void 0))
                                                }))
                                            }(e, a)
                                        },
                                        onProductHideShow: function(e) {
                                            return function(e, t) {
                                                (0, d.handleProductVisibilityChange)(T, e, t, "Catalog")
                                            }(e, a)
                                        },
                                        canManageCatalog: x
                                    })
                                }
                            })
                        },
                        defaultItemHeight: u.PRODUCT_LIST_ITEM_HEIGHT,
                        keyOrder: s.KeyOrder.INVERSE
                    })
                });
                var j
            };
            var a = n(o(963038)),
                i = o(810466),
                r = o(875058),
                l = o(577407),
                c = n(o(877576)),
                s = o(906416),
                d = o(911558),
                u = o(902011),
                f = o(179677),
                p = n(o(991417)),
                h = o(647435),
                C = o(378776),
                g = o(667294),
                m = o(853548),
                v = o(785893)
        },
        288983: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(o(963038)),
                i = o(497384),
                r = o(63520),
                l = o(742649),
                c = o(281098),
                s = o(104010),
                d = o(894995),
                u = o(14391),
                f = o(125089),
                p = o(219450),
                h = o(321353),
                C = o(218953),
                g = o(665912),
                m = o(896674),
                v = o(430888),
                _ = o(516053),
                x = n(o(237120)),
                b = n(o(686866)),
                S = o(810466),
                P = o(58985),
                k = o(628707),
                T = n(o(597738)),
                y = n(o(46801)),
                j = o(179677),
                E = o(778603),
                I = o(647435),
                O = n(o(365997)),
                w = o(872146),
                A = n(o(372568)),
                L = n(o(451685)),
                M = o(926464),
                N = o(652405),
                R = o(96293),
                D = o(378776),
                B = o(558288),
                H = o(228277),
                W = o(454964),
                F = o(548360),
                U = o(667294),
                V = n(o(156720)),
                z = n(o(61407)),
                q = n(o(279781)),
                G = o(494092),
                Y = o(853548),
                K = n(o(672900)),
                Z = o(785893),
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

            function X(e) {
                var t, o = e.productFetchState,
                    n = e.productCatalogFetchState,
                    a = e.isAvailable;
                t = "ERROR" === o ? (0, Z.jsx)(B.TextSpan, {
                    className: (0, V.default)(Q.text),
                    theme: "small",
                    color: "danger",
                    children: F.fbt._("Something went wrong", null, {
                        hk: "7C9hw"
                    })
                }) : a ? [(0, Z.jsx)(R.Spinner, {
                    size: 14,
                    color: "highlight"
                }, "DetailDrawer-loadingBar-spinner"), (0, Z.jsx)(B.TextSpan, {
                    className: (0, V.default)(Q.text, Q.loadingText),
                    theme: "small",
                    children: F.fbt._("Waiting for network", null, {
                        hk: "3I2DtN"
                    })
                }, "DetailDrawer-loadingBar-msg")] : (0, Z.jsx)(B.TextSpan, {
                    className: (0, V.default)(Q.text),
                    theme: "small",
                    color: "danger",
                    children: F.fbt._("This product or service has been removed", null, {
                        hk: "3mE1ld"
                    })
                });
                var i = "PENDING" === o || "PENDING" === n || !a;
                return (0, Z.jsx)("div", {
                    className: (0, V.default)(i && Q.loadingContainer, !i && Q.shiftUp),
                    children: t
                })
            }

            function J(e) {
                var t = e.menu,
                    o = e.handleBack;
                return (0, Z.jsx)(P.DrawerHeader, {
                    title: F.fbt._("Details", null, {
                        hk: "1hLRT1"
                    }),
                    onBack: o,
                    type: P.DRAWER_HEADER_TYPE.SMALL,
                    menu: t
                })
            }

            function $(e, t) {
                var o, n = e.collectionId,
                    P = e.onCartClick,
                    R = e.onProductLinkClick,
                    B = e.onProductMoreInformation,
                    $ = e.onBack,
                    ee = e.onProductCatalog,
                    te = e.onProductDetail,
                    oe = e.refreshCarousel,
                    ne = e.chat,
                    ae = e.isPushed,
                    ie = void 0 === ae || ae,
                    re = (0, z.default)(),
                    le = (0, K.default)(),
                    ce = (0, U.useContext)(S.DrawerContext),
                    se = (0, Y.useModelValues)(e.product, ["id", "catalogWid", "productImageCollection", "fetchedFromServer", "name", "availability", "reviewStatus"]),
                    de = (0, U.useState)(null),
                    ue = (0, a.default)(de, 2),
                    fe = ue[0],
                    pe = ue[1],
                    he = (0, U.useState)(!1),
                    Ce = (0, a.default)(he, 2),
                    ge = Ce[0],
                    me = Ce[1],
                    ve = (0, U.useState)(null),
                    _e = (0, a.default)(ve, 2),
                    xe = _e[0],
                    be = _e[1],
                    Se = (0, U.useState)("NONE"),
                    Pe = (0, a.default)(Se, 2),
                    ke = Pe[0],
                    Te = Pe[1],
                    ye = (0, U.useState)("NONE"),
                    je = (0, a.default)(ye, 2),
                    Ee = je[0],
                    Ie = je[1],
                    Oe = (0, q.default)((function() {
                        return h.CartCollection.findCart(se.catalogWid.toString())
                    }));
                (0, G.useListener)(Oe.current, "change:cartItemCollection", re);
                var we = function() {
                        if ($) return $()
                    },
                    Ae = function() {
                        var e = se.catalogWid,
                            t = se.id.toString();
                        return C.CatalogCollection.findProduct({
                            catalogWid: e,
                            productId: t,
                            productMsgMediaData: (0, D.unproxy)(se).productMsgMediaData,
                            canLogQpl: ie
                        })
                    },
                    Le = function() {
                        var e = se.catalogWid,
                            t = Ae(),
                            o = f.BusinessProfileCollection.find(e),
                            n = !0;
                        return Promise.all([o, t]).then((function(e) {
                            var t = (0, a.default)(e, 1)[0];
                            if (le.aborted) throw new i.AbortError;
                            return n = !1, ie && (0, W.qplEndProductView)(l.QuickLogActionType.SUCCESS), pe(t), Te("SUCCESS"), t
                        })).then((function(e) {
                            Ie((function(t) {
                                if ("PENDING" === t) {
                                    if (!(0, p.hasCatalog)(e)) return "NONE";
                                    ! function() {
                                        var e = se.catalogWid;
                                        C.CatalogCollection.findCarouselCatalog(e).then((function(e) {
                                            if (!le.aborted) {
                                                var t = Array.isArray(e) ? e[0] : e;
                                                be(t || null), Ie(t ? "SUCCESS" : "NONE")
                                            }
                                        })).catch((0, r.filteredCatch)(s.ServerStatusCodeError, (function(e) {
                                            "not_found" === e.status || 404 === e.status ? (be(null), Ie("NOT_FOUND")) : (be(null), Ie("ERROR"), __LOG__(3)`Failed to fetch product catalog from server`)
                                        })))
                                    }()
                                }
                                return t
                            }))
                        })).catch((0, i.catchAbort)((function() {}))).catch((0, r.filteredCatch)(s.E404, (function() {
                            we(), k.ModalManager.open((0, Z.jsx)(v.ConfirmPopup, {
                                onOK: function() {
                                    k.ModalManager.close()
                                },
                                okText: F.fbt._("OK", null, {
                                    hk: "4oTrfy"
                                }),
                                children: F.fbt._("This product or service has been removed", null, {
                                    hk: "3mE1ld"
                                })
                            })), Te("NOT_FOUND"), n = !1, (0, W.qplDropProductView)()
                        }))).catch((0, r.filteredCatch)(s.ServerStatusCodeError, (function() {
                            Te("ERROR"), __LOG__(3)`Failed to fetch product from server`
                        }))).finally((function() {
                            ie && n && (0, W.qplEndProductView)(l.QuickLogActionType.FAIL)
                        }))
                    };
                (0, U.useEffect)((function() {
                    if ((0, d.commerceThreadsLoggingEnabled)() && ne && (0, g.handleActivitiesForChatThreadLogging)([{
                            activityType: "pdpViews",
                            ts: (0, c.unixTime)(),
                            chatId: ne.id
                        }]), oe) {
                        var e = C.CatalogCollection.get(se.catalogWid);
                        (null == e ? void 0 : e.productCollection) && e.fetchedFromServer ? Ie("SUCCESS") : Ie("PENDING")
                    }
                    var t = (0, H.getMaybeMeUser)();
                    ie && (0, W.qplAnnotateProductView)(!(null == t ? void 0 : t.equals(se.catalogWid)));
                    var o = se.catalogWid,
                        a = se.id.toString();
                    if (o && a) return Le(), (0, y.default)(o).then((function(e) {
                            me(e), (0, I.logProductDetailView)({
                                product: (0, D.unproxy)(se),
                                catalogContext: (0, j.getProductCatalogContext)(ce),
                                cartToggle: e,
                                collectionId: n
                            })
                        })),
                        function() {
                            var e = se.catalogWid,
                                t = se.id.toString();
                            if (e && t) {
                                var o = C.CatalogCollection.get(e),
                                    n = o && o.msgProductCollection.get(t);
                                (null == n ? void 0 : n.fetchedFromServer) && o && o.msgProductCollection.remove(n)
                            }
                        };
                    (0, W.qplDropProductView)()
                }), []);
                var Me, Ne = function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        (0, d.commerceThreadsLoggingEnabled)() && ne && (0, g.handleActivitiesForChatThreadLogging)([{
                            activityType: e,
                            ts: (0, c.unixTime)(),
                            chatId: ne.id,
                            boolValue: t
                        }])
                    },
                    Re = function() {
                        return "ERROR" !== ke && "NOT_FOUND" !== ke && !(se.reviewStatus === M.PRODUCT_REVIEW_STATUS.REJECTED)
                    },
                    De = Re(),
                    Be = (0, p.hasCatalog)(fe),
                    He = function() {
                        Ae().then((function() {
                            var e = C.CatalogCollection.get(se.catalogWid);
                            e && (e.stale = !0)
                        }))
                    };
                return Re() && (Me = (0, E.getDetailDrawerMenu)({
                    onSendProduct: function() {
                        var e = se,
                            t = e.catalogWid,
                            o = C.CatalogCollection.get(t);
                        if (o) {
                            var n = o.productCollection.get(e.id);
                            m.Cmd.attachProduct({
                                product: n ? (0, D.unproxy)(n) : (0, D.unproxy)(e)
                            })
                        }
                    },
                    onReportProduct: function() {
                        k.ModalManager.open((0, Z.jsx)(L.default, {
                            product: se,
                            sessionId: (0, j.getProductCatalogSessionId)(ce)
                        }))
                    },
                    onProductLinkClick: function() {
                        (0, I.logProductShareLinkClick)({
                            product: se,
                            catalogContext: (0, j.getProductCatalogContext)(ce)
                        }), R(se)
                    },
                    onProductMoreInformation: function() {
                        B(se)
                    },
                    onCartClick: ge ? function() {
                        (0, W.qplStartCartView)("Product"), null == P || P(se.catalogWid.toString())
                    } : void 0,
                    cartCount: Oe.current.itemCount,
                    catalogId: se.catalogWid.toString(),
                    contactId: null == ne ? void 0 : ne.contact.id
                })), (0, Z.jsxs)(x.default, {
                    ref: t,
                    onDrop: we,
                    theme: "striped",
                    children: [(0, Z.jsx)(J, {
                        handleBack: we,
                        menu: Me
                    }), (0, Z.jsx)(b.default, {
                        children: (0, Z.jsxs)("div", {
                            "data-testid": "product-details",
                            className: (0, V.default)(Q.body),
                            children: [(0, Z.jsx)(X, {
                                productFetchState: ke,
                                productCatalogFetchState: Ee,
                                isAvailable: De
                            }), (0, Z.jsx)(A.default, {
                                product: se,
                                isAvailable: De,
                                fetching: "PENDING" === ke
                            }), N.PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(se.availability) ? (0, Z.jsxs)("div", {
                                className: (0, V.default)(Q.availabilityBanner),
                                children: [se.availability === N.ProductAvailability.OUT_OF_STOCK ? F.fbt._("This item is out of stock.", null, {
                                    hk: "4gOwiz"
                                }) : null, se.availability === N.ProductAvailability.AVAILABLE_FOR_ANOTHER_POSTCODE && (0, _.enablePostcodeInCatalog)() ? (0, Z.jsx)(w.ProductPostcodeChangeBanner, {
                                    catalogWid: se.catalogWid,
                                    postcodeChangeSuccess: He
                                }) : null]
                            }) : null, (0, Z.jsx)(O.default, {
                                product: se,
                                collectionId: n,
                                onSendChat: function() {
                                    var e = C.CatalogCollection.get(se.catalogWid);
                                    (0, u.sendProductToChat)(se, e, (0, j.getProductCatalogContext)(ce)), Ne("isCtaOnPdpClicked"), (0, I.logProductMessageBusinessClick)(se, (0, j.getProductCatalogContext)(ce))
                                },
                                onAddToCart: function() {
                                    Ne("isCartAddClicked")
                                },
                                isAvailable: De,
                                hideRetailerID: null === (o = e.chat) || void 0 === o ? void 0 : o.contact.isEnterprise
                            }), Be && xe ? (0, Z.jsx)(T.default, {
                                catalog: xe,
                                onProductCatalog: function() {
                                    ee && ee(se.catalogWid, (0, j.getProductCatalogContext)(ce))
                                },
                                onProductDetail: function(e) {
                                    if ((0, W.qplStartProductView)("Product"), te) return te(e)
                                },
                                filterProductId: se.id.toString(),
                                title: F.fbt._("More", null, {
                                    hk: "2A3GqV"
                                }),
                                animation: !1
                            }) : null]
                        })
                    })]
                }, "product-details-drawer")
            }
            var ee = (0, U.forwardRef)($);
            t.default = ee
        },
        365997: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.collectionId,
                    o = e.onSendChat,
                    n = e.onAddToCart,
                    i = e.isAvailable,
                    r = (0, I.useContext)(u.DrawerContext),
                    l = (0, A.useModelValues)(e.product, ["name", "url", "description", "availability", "currency", "priceAmount1000", "salePriceAmount1000", "salePriceStartDate", "salePriceEndDate", "fetchedFromServer", "retailerId", "catalogWid", "productImageCollection", "imageHash", "reviewStatus", "imageCdnUrl", "id", "maxAvailable"]),
                    c = (0, I.useState)(!1),
                    s = (0, a.default)(c, 2),
                    d = s[0],
                    C = s[1],
                    S = (0, I.useState)(!1),
                    P = (0, a.default)(S, 2),
                    E = P[0],
                    w = P[1];
                return (0, I.useEffect)((function() {
                    (0, v.default)(l.catalogWid).then((function(e) {
                        w(e)
                    }))
                }), []), (0, L.jsxs)(f.default, {
                    theme: "padding-product",
                    animation: !1,
                    children: [(0, L.jsx)(j.TextDiv, {
                        theme: "title",
                        className: (0, O.default)(R.name),
                        children: (0, L.jsx)(p.EmojiText, {
                            text: l.name,
                            selectable: !0
                        })
                    }), null != l.priceAmount1000 ? (0, L.jsx)(j.TextDiv, {
                        className: (0, O.default)(R.price),
                        color: "dark",
                        theme: "plain",
                        children: (0, L.jsx)(b.default, {
                            product: l,
                            selectable: !0,
                            direction: "inherit"
                        })
                    }) : null, (0, L.jsx)(W, {
                        product: l,
                        isAvailable: i,
                        isDescExpanded: d,
                        hideRetailerID: e.hideRetailerID,
                        onReadMore: function() {
                            C(!0)
                        },
                        onClickUrl: function(e, t) {
                            e.stopPropagation(), (0, x.logDetailLinkClick)({
                                product: (0, y.unproxy)(l),
                                catalogContext: (0, _.getProductCatalogContext)(r)
                            });
                            var o = t && g.findLink(t);
                            o && (0, h.openExternalLink)(o.url)
                        }
                    }), (0, L.jsx)(D, {
                        onSendChat: function() {
                            null == o || o()
                        },
                        isAvailable: i,
                        product: l
                    }), (0, L.jsx)(B, {
                        collectionId: t,
                        cartEnabled: E,
                        isAvailable: i,
                        product: l,
                        onClick: function(e) {
                            T.QPL.markerStart(k.QuickLogMarkerId.WHATSAPP_CART_ADD, {
                                annotations: {
                                    string: {
                                        EntryPoint: "Product"
                                    }
                                }
                            }), (0, m.addToCart)(l, (0, _.getProductCatalogContext)(r), t), null == n || n(), e.stopPropagation()
                        },
                        context: r
                    })]
                })
            };
            var a = n(o(963038)),
                i = n(o(308996)),
                r = o(894995),
                l = n(o(579043)),
                c = n(o(746251)),
                s = n(o(95340)),
                d = n(o(442435)),
                u = o(810466),
                f = n(o(39357)),
                p = o(990055),
                h = o(192070),
                C = N(o(924309)),
                g = N(o(810838)),
                m = o(196665),
                v = n(o(46801)),
                _ = o(179677),
                x = o(647435),
                b = n(o(450791)),
                S = o(926464),
                P = o(652405),
                k = o(754360),
                T = o(324928),
                y = o(378776),
                j = o(558288),
                E = o(548360),
                I = o(667294),
                O = n(o(156720)),
                w = n(o(598898)),
                A = o(853548),
                L = o(785893);

            function M(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (M = function(e) {
                    return e ? o : t
                })(e)
            }

            function N(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var o = M(t);
                if (o && o.has(e)) return o.get(e);
                var n = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                        r && (r.get || r.set) ? Object.defineProperty(n, i, r) : n[i] = e[i]
                    } return n.default = e, o && o.set(e, n), n
            }
            var R = {
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
                    o = e.isAvailable,
                    n = e.product;
                if (!t || !n.fetchedFromServer || !o || n.reviewStatus !== S.PRODUCT_REVIEW_STATUS.APPROVED) return null;
                var a = E.fbt._("Message Business", null, {
                    hk: "3jgAJS"
                });
                return (0, L.jsx)("div", {
                    className: (0, O.default)(R.buttonContainer),
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
                    o = e.isAvailable,
                    n = e.product,
                    a = e.onClick,
                    d = e.context,
                    u = e.collectionId,
                    f = (0, w.default)(),
                    p = f.isHovered,
                    h = f.onMouseEnter,
                    C = f.onMouseLeave;
                if (!t || !n.fetchedFromServer || !o || n.reviewStatus !== S.PRODUCT_REVIEW_STATUS.APPROVED) return null;
                var g = (0, r.isQuantityControlsFeatureEnabled)(),
                    m = E.fbt._("Add to cart", null, {
                        hk: "2qbS08"
                    }),
                    v = P.PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(n.availability),
                    _ = null;
                _ = v ? R.addToCartIconDisabled : p ? R.addToCartBtnHoverIcon : R.addToCartIcon;
                var x = (0, l.default)(n.id, n.catalogWid),
                    b = g ? null : (0, L.jsx)(i.default, {
                        colorXStyle: _
                    }),
                    k = g && x > 0 ? (0, L.jsx)(s.default, {
                        product: n,
                        context: d,
                        collectionId: u || ""
                    }) : (0, L.jsx)(c.default, {
                        testid: "add-to-cart-btn",
                        onClick: a,
                        type: "secondary",
                        disabled: v,
                        stretch: !0,
                        children: (0, L.jsxs)("span", {
                            className: (0, O.default)(R.addToCartContainer, b && R.addToCartContainerWithIcon),
                            children: [b, m]
                        })
                    });
                return (0, L.jsx)("div", {
                    className: (0, O.default)(R.buttonContainer, g && R.quantityControls),
                    title: m,
                    onMouseEnter: h,
                    onMouseLeave: C,
                    children: k
                })
            }

            function H(e) {
                var t = e.isAvailable,
                    o = e.product,
                    n = e.onClick,
                    a = o.url;
                if (!o.fetchedFromServer || !a || !t) return null;
                var i = C.TrustedGroupDesc({
                    links: g.findLinks(a)
                });
                return (0, L.jsx)("div", {
                    children: (0, L.jsx)(p.EmojiText, {
                        selectable: !0,
                        formatters: i,
                        text: a,
                        onClick: function(e) {
                            return n(e, a)
                        }
                    })
                })
            }

            function W(e) {
                var t = e.product,
                    o = e.isAvailable,
                    n = e.isDescExpanded,
                    a = e.hideRetailerID,
                    i = e.onReadMore,
                    r = e.onClickUrl;
                if (!t.description && !t.url && !t.retailerId) return null;
                var l, c = !!t.description && t.description.length > d.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH;
                return t.description && (l = (0, L.jsxs)("div", {
                    children: [(0, L.jsx)(p.EmojiText, {
                        selectable: !0,
                        multiline: !0,
                        text: t.description,
                        textLimit: n ? 1 / 0 : d.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                    }), c && !n ? (0, L.jsxs)("span", {
                        className: (0, O.default)(R.more),
                        role: "button",
                        onClick: i,
                        children: [" ", E.fbt._("Read more", null, {
                            hk: "2DvSvh"
                        })]
                    }) : null]
                })), (0, L.jsxs)(j.TextDiv, {
                    theme: "plain",
                    className: (0, O.default)(R.description),
                    children: [l, (0, L.jsx)(H, {
                        isAvailable: o,
                        product: t,
                        onClick: r
                    }), t.retailerId && !a ? (0, L.jsx)("div", {
                        children: (0, L.jsx)(p.EmojiText, {
                            text: t.retailerId,
                            selectable: !0,
                            direction: "inherit"
                        })
                    }) : null]
                })
            }
        },
        495801: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(o(692364)),
                i = n(o(68968)),
                r = o(79760),
                l = n(o(799328)),
                c = o(896674),
                s = n(o(809139)),
                d = n(o(237120)),
                u = n(o(686866)),
                f = o(810466),
                p = o(58985),
                h = o(990055),
                C = o(628707),
                g = o(179677),
                m = n(o(16499)),
                v = o(647435),
                _ = o(604785),
                x = n(o(997967)),
                b = o(378776),
                S = n(o(665901)),
                P = o(548360),
                k = n(o(518122)),
                T = o(667294),
                y = o(785893),
                j = "product-link-anchor";

            function E(e) {
                var t = e.getProductImageCollectionHead();
                return t ? (0, y.jsx)(_.ProductThumb, {
                    className: (0, k.default)(S.default.productImage, S.default.productImageContainer),
                    mediaData: t.mediaData
                }) : (0, y.jsx)(_.ProductThumbPlaceholder, {
                    className: (0, k.default)(S.default.productThumb, S.default.productThumbContainer)
                })
            }

            function I(e, t) {
                var o, n, _, k = e.onBack,
                    I = e.onCancel,
                    O = e.product,
                    w = e.prompt,
                    A = e.centerDrawer,
                    L = e.sendProductMsg,
                    M = e.onSend,
                    N = (0, T.useContext)(f.DrawerContext),
                    R = function() {
                        C.ModalManager.open((0, y.jsx)(i.default, {
                            product: O,
                            onSend: M
                        }), {
                            transition: "modal-flow"
                        }), (0, v.logShareProductViaWALinkClick)({
                            product: O,
                            catalogContext: (0, g.getProductCatalogContext)(N)
                        })
                    },
                    D = (0, r.createProductLink)(O.catalogWid.user, O.id.toString());
                return A && (o = "labels", n = "center-column"), _ = null != L ? (0, y.jsx)(a.default, {
                    onClick: function() {
                        c.Cmd.attachProduct({
                            product: (0, b.unproxy)(O),
                            onSend: M
                        })
                    }
                }) : (0, y.jsx)(x.default, {
                    onClick: R
                }), (0, y.jsxs)(d.default, {
                    ref: t,
                    theme: o,
                    children: [(0, y.jsx)(p.DrawerHeader, {
                        testid: "product-link-title",
                        title: P.fbt._("Product link", null, {
                            hk: "1RIlvV"
                        }),
                        onBack: k,
                        onCancel: I,
                        type: p.DRAWER_HEADER_TYPE.SMALL,
                        focusBackOrCancel: !0
                    }), (0, y.jsxs)(u.default, {
                        theme: n,
                        children: [(0, y.jsx)("div", {
                            className: S.default.prompt,
                            children: w
                        }), (0, y.jsx)(l.default, {
                            image: E(O),
                            primary: (0, y.jsx)(h.EmojiText, {
                                text: O.name,
                                direction: "auto"
                            }),
                            theme: "identity",
                            secondary: (0, y.jsx)(m.default, {
                                id: j,
                                href: D,
                                onClick: function(e) {
                                    e.preventDefault(), R()
                                },
                                noHandle: !0
                            })
                        }), _, (0, y.jsx)(s.default, {
                            elementId: j,
                            onClick: function() {
                                (0, v.logShareProductCopyLinkClick)({
                                    product: O,
                                    catalogContext: (0, g.getProductCatalogContext)(N)
                                })
                            }
                        })]
                    })]
                }, "product-link-drawer")
            }
            var O = (0, T.forwardRef)(I);
            t.default = O
        },
        897663: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProductListDrawer = void 0;
            var a = n(o(963038)),
                i = o(63520),
                r = o(689121),
                l = o(519509),
                c = o(104010),
                s = o(321353),
                d = o(218953),
                u = o(53315),
                f = o(65001),
                p = n(o(237120)),
                h = n(o(686866)),
                C = o(810466),
                g = o(58985),
                m = o(482510),
                v = o(116384),
                _ = n(o(979163)),
                x = n(o(399447)),
                b = o(295769),
                S = n(o(758927)),
                P = n(o(929380)),
                k = o(199479),
                T = o(994291),
                y = n(o(84358)),
                j = o(902011),
                E = n(o(46801)),
                I = o(179677),
                O = o(885882),
                w = n(o(587467)),
                A = n(o(319913)),
                L = n(o(328781)),
                M = o(647435),
                N = n(o(726174)),
                R = o(548360),
                D = o(667294),
                B = n(o(156720)),
                H = o(302304),
                W = n(o(273122)),
                F = n(o(61407)),
                U = n(o(279781)),
                V = o(494092),
                z = n(o(27634)),
                q = n(o(672900)),
                G = o(785893),
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
                var t, o = e.canManageCatalog,
                    n = e.onAddProduct,
                    a = e.businessProfile,
                    i = e.contact,
                    r = e.productCatalogList,
                    l = e.loadingMore;
                return o && n && (t = (0, G.jsx)(P.default, {
                    onClick: function() {
                        return n()
                    },
                    theme: "in-list",
                    testid: "add-item"
                })), (0, G.jsxs)(G.Fragment, {
                    children: [a && (0, G.jsx)("div", {
                        "data-testid": "catalog-header",
                        className: (0, B.default)(Y.header),
                        children: (0, G.jsx)(N.default, {
                            profilePicThumb: i.getProfilePicThumb(),
                            contact: i,
                            businessProfile: a
                        })
                    }), (0, G.jsxs)("div", {
                        "data-testid": "catalog-items",
                        className: (0, B.default)(Y.list, a && Y.listMarginTop),
                        children: [t, r, l && (0, G.jsx)(x.default, {})]
                    })]
                })
            }
            var Z = (0, D.forwardRef)((function(e, t) {
                var o = e.contact,
                    n = e.catalogId,
                    x = e.canManageCatalog,
                    P = e.setScrollOffset,
                    N = e.onCartClick,
                    B = e.onCatalogLinkClick,
                    Y = e.autoUpdate,
                    Z = void 0 !== Y && Y,
                    Q = e.businessProfile,
                    X = e.onAddProduct,
                    J = e.onProductDetail,
                    $ = e.onProductShare,
                    ee = e.headerType,
                    te = e.onOpenSettings,
                    oe = e.blockCartInterstitialFn,
                    ne = void 0 === oe ? function() {
                        return !1
                    } : oe,
                    ae = (0, q.default)(),
                    ie = (0, D.useContext)(C.DrawerContext),
                    re = (0, F.default)(),
                    le = (0, W.default)(re, 100),
                    ce = (0, H.useContactValues)(o.id, [f.getId]),
                    se = (0, a.default)(ce, 1)[0],
                    de = (0, U.default)((function() {
                        return new _.default
                    })),
                    ue = function() {
                        var e = d.CatalogCollection.get(n);
                        return !e || e.stale ? null : e
                    },
                    fe = (0, D.useMemo)((function() {
                        return s.CartCollection.findCart(se.toString())
                    }), [se]),
                    pe = (0, D.useState)(!1),
                    he = (0, a.default)(pe, 2),
                    Ce = he[0],
                    ge = he[1],
                    me = (0, D.useState)(0),
                    ve = (0, a.default)(me, 2),
                    _e = ve[0],
                    xe = ve[1],
                    be = (0, D.useState)(!1),
                    Se = (0, a.default)(be, 2),
                    Pe = Se[0],
                    ke = Se[1],
                    Te = (0, D.useState)(!1),
                    ye = (0, a.default)(Te, 2),
                    je = ye[0],
                    Ee = ye[1],
                    Ie = (0, D.useState)(ue),
                    Oe = (0, a.default)(Ie, 2),
                    we = Oe[0],
                    Ae = Oe[1],
                    Le = (0, D.useState)((function() {
                        return fe.itemCount
                    })),
                    Me = (0, a.default)(Le, 2),
                    Ne = Me[0],
                    Re = Me[1],
                    De = (0, D.useState)((function() {
                        return ue() ? "SUCCESS" : "NONE"
                    })),
                    Be = (0, a.default)(De, 2),
                    He = Be[0],
                    We = Be[1];
                (0, V.useListener)(fe, "all", (function() {
                    var e = fe.itemCount;
                    Ne !== e && Re(e)
                }));
                var Fe = function() {
                        if (!Pe) {
                            var e = d.CatalogCollection.assertGet(n);
                            if (e.afterCursor) {
                                var t = e.productCollection.getProductModels().length;
                                ge(!0), xe(t), d.CatalogCollection.update(n).then((function(e) {
                                    ae.aborted || (ge(!1), (Array.isArray(e) ? e[0] : e).productCollection.getProductModels().length === _e && ke(!0), t * j.PRODUCT_LIST_ITEM_HEIGHT < window.innerHeight && Fe())
                                })).catch((function() {
                                    ge(!1), ke(!0)
                                }))
                            }
                        }
                    },
                    Ue = (0, W.default)((function() {
                        var t;
                        null === (t = e.onRemoveProduct) || void 0 === t || t.call(e), re()
                    }), 100),
                    Ve = Z ? null == we ? void 0 : we.productCollection : null;
                (0, V.useListener)(Ve, "add", le), (0, V.useListener)(Ve, "remove", Ue);
                (0, D.useEffect)((function() {
                    we ? Fe() : d.CatalogCollection.find(n).then((function(e) {
                        Ae(e), We("SUCCESS"), Fe()
                    })).catch((0, i.filteredCatch)(c.ServerStatusCodeError, (function(e) {
                        403 !== e.status && 404 !== e.status || (Ae(null), We("NOT_FOUND"))
                    }))).catch((function(e) {
                        (0, O.parseErrorState)(e, (function(e) {
                            return We(e)
                        }))
                    })), (0, E.default)(n).then((function(e) {
                        Ee(e), (0, M.logCatalogListView)({
                            catalogOwnerWid: n,
                            catalogContext: (0, I.getProductCatalogContext)(ie),
                            cartToggle: e
                        }), x && je && !ne() && (0, l.getABPropConfigValue)("web_abprop_nux_cart_interstitial") && (0, y.default)()
                    }))
                }), []);
                var ze = (0, z.default)((function(e) {
                        Ce || e.scrollTop + b.SCROLL_FUDGE > e.scrollHeight - e.clientHeight && Fe()
                    }), 100),
                    qe = function() {
                        null == N || N(se.toString())
                    },
                    Ge = je && N ? qe : void 0,
                    Ye = we ? (0, G.jsx)(K, {
                        canManageCatalog: x,
                        onAddProduct: X,
                        businessProfile: Q,
                        contact: o,
                        loadingMore: Ce,
                        productCatalogList: (0, G.jsx)(L.default, {
                            onCartOpen: Ge,
                            onProductDetail: J,
                            flatListController: de.current,
                            catalog: we,
                            canManageCatalog: x,
                            shareLinks: x,
                            onProductShare: $
                        })
                    }) : (0, G.jsx)(w.default, {
                        fetchState: He
                    }),
                    Ke = function(e) {
                        var t = e.canManageCatalog,
                            o = e.onOpenSettings,
                            n = e.headerType,
                            a = e.onCartClick,
                            i = e.catalogId,
                            l = e.handleCatalogLinkClick,
                            c = e.handleCartClick,
                            s = e.cartEnabled,
                            d = e.cartCount,
                            f = t ? (0, G.jsx)(k.MenuBarItem, {
                                testid: "menu-bar-menu",
                                icon: (0, G.jsx)(T.MenuIcon, {}),
                                title: S.default.t(430),
                                children: (0, G.jsxs)(m.Dropdown, {
                                    type: m.MenuType.DropdownMenu,
                                    flipOnRTL: !0,
                                    dirX: m.DirX.LEFT,
                                    children: [(0, G.jsx)(v.DropdownItem, {
                                        testid: "mi-foward menu-item",
                                        action: l,
                                        children: S.default.t(311)
                                    }), o && (0, G.jsx)(v.DropdownItem, {
                                        testid: "mi-settings menu-item",
                                        action: o,
                                        children: R.fbt._("Settings", null, {
                                            hk: "2RmHUB"
                                        })
                                    })]
                                }, "CatalogDetailHeader")
                            }) : (0, G.jsx)(k.MenuBarItem, {
                                testid: "menu-bar-catalog-link",
                                icon: (0, G.jsx)(A.default, {
                                    theme: n === g.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
                                }),
                                title: R.fbt._("Catalog link", null, {
                                    hk: "M36Dw"
                                }),
                                onClick: l
                            });
                        return [s && a ? (0, G.jsx)(u.CartIconMenuBarItem, {
                            cartIconTheme: n === g.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null,
                            cartCountText: (0, r.isNumber)(d) && d > 0 ? d.toString() : void 0,
                            onClick: c,
                            catalogOwnerJid: i.toString()
                        }) : null, f]
                    }({
                        canManageCatalog: x,
                        handleCatalogLinkClick: function() {
                            we && (B(we, o), (0, M.logCatalogShareLinkClick)({
                                catalogOwnerWid: n,
                                catalogContext: (0, I.getProductCatalogContext)(ie)
                            }))
                        },
                        onOpenSettings: te,
                        headerType: ee,
                        cartEnabled: je,
                        onCartClick: N,
                        cartCount: Ne,
                        handleCartClick: qe,
                        catalogId: n
                    });
                return (0, G.jsxs)(p.default, {
                    ref: t,
                    theme: "products",
                    onDrop: e.onBack,
                    children: [(0, G.jsx)(g.DrawerHeader, {
                        title: R.fbt._("Catalog", null, {
                            hk: "3YVOSV"
                        }),
                        type: e.headerType || g.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onBack,
                        menu: Ke,
                        focusBackOrCancel: !0
                    }), (0, G.jsx)(h.default, {
                        onScroll: function(e) {
                            var t, o;
                            e.currentTarget && ze(e.currentTarget), null == P || P(null !== (t = null === (o = e.currentTarget) || void 0 === o ? void 0 : o.scrollTop) && void 0 !== t ? t : 0)
                        },
                        flatListControllers: [de.current],
                        scrollOffset: e.scrollOffset,
                        children: Ye
                    })]
                })
            }));
            t.ProductListDrawer = Z, Z.displayName = "ProductListDrawer"
        },
        726174: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.profilePicThumb,
                    o = e.contact,
                    n = e.businessProfile;
                return (0, p.jsxs)("div", {
                    className: d.default.header,
                    "data-testid": "product-list-header",
                    children: [(0, p.jsx)(C, {
                        profilePicThumb: t,
                        contact: o
                    }), (0, p.jsxs)("div", {
                        className: d.default.text,
                        children: [(0, p.jsx)(s.TextDiv, {
                            className: d.default.name,
                            theme: "large",
                            children: (0, p.jsx)(c.Name, {
                                contact: o,
                                selectable: !0,
                                useVerifiedName: !0
                            })
                        }), (0, p.jsx)(h, {
                            businessProfile: n
                        })]
                    })]
                })
            };
            var a = n(o(963038)),
                i = o(65001),
                r = o(207826),
                l = o(990055),
                c = o(246009),
                s = o(558288),
                d = n(o(35659)),
                u = o(302304),
                f = o(853548),
                p = o(785893);

            function h(e) {
                var t = (0, f.useOptionalModelValues)(e.businessProfile, ["description"]);
                return t && t.description ? (0, p.jsx)("div", {
                    className: d.default.description,
                    children: (0, p.jsx)(l.EmojiText, {
                        text: t.description,
                        direction: "auto",
                        selectable: !0,
                        titlify: !0
                    })
                }) : null
            }

            function C(e) {
                var t = (0, f.useOptionalModelValues)(e.profilePicThumb, ["imgFull"]),
                    o = (0, u.useContactValues)(e.contact.id, [i.getId, i.getIsMe]),
                    n = (0, a.default)(o, 2),
                    l = n[0];
                n[1];
                if (!t) return null;
                var c = (0, p.jsx)(r.DefaultIcon, {
                    id: l
                });
                return (0, p.jsx)("div", {
                    className: d.default.photo,
                    children: (0, p.jsx)(r.DetailImageCommon, {
                        profilePicThumb: t,
                        loader: !0,
                        defaultIcon: c,
                        profilePicThumbImg: t.imgFull,
                        spinnerClassName: d.default.spinner,
                        imgClassName: d.default.img,
                        theme: "business"
                    })
                })
            }
        },
        583362: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(o(81109)),
                i = n(o(887757)),
                r = n(o(348926)),
                l = n(o(963038)),
                c = n(o(347999)),
                s = o(218953),
                d = o(147505),
                u = o(234459),
                f = o(497311),
                p = n(o(237120)),
                h = n(o(686866)),
                C = o(58985),
                g = o(378776),
                m = o(972703),
                v = o(548360),
                _ = o(667294),
                x = n(o(156720)),
                b = o(853548),
                S = o(785893),
                P = {
                    marginBottom: "ngycyvoj"
                };

            function k(e, t) {
                var o = e.onBack,
                    n = (0, b.useModelValues)(e.product, ["id", "catalogWid"]),
                    k = (0, _.useState)({}),
                    T = (0, l.default)(k, 2),
                    y = T[0],
                    j = T[1],
                    E = (0, _.useState)(""),
                    I = (0, l.default)(E, 2),
                    O = I[0],
                    w = I[1],
                    A = (0, _.useState)(""),
                    L = (0, l.default)(A, 2),
                    M = L[0],
                    N = L[1],
                    R = (0, _.useState)(!0),
                    D = (0, l.default)(R, 2),
                    B = D[0],
                    H = D[1],
                    W = function(e) {
                        var t, o;
                        return (null === (t = e.complianceInfo) || void 0 === t ? void 0 : t.countryCodeOrigin) === String(m.SyntheticCountryCode.NotApplicable) ? Promise.resolve((0, S.jsxs)("div", {
                            children: [(0, S.jsx)("div", {
                                className: (0, x.default)(P),
                                children: v.fbt._("Not Applicable", null, {
                                    hk: "2k1klN"
                                })
                            }), (0, S.jsx)("div", {
                                children: v.fbt._("Item is a service or non-physical good", null, {
                                    hk: "3uDBY7"
                                })
                            })]
                        })) : (0, f.getCountryName)(null === (o = e.complianceInfo) || void 0 === o ? void 0 : o.countryCodeOrigin, f.COUNTRY_FILTER_TYPE.META_RECOGNIZED)
                    };
                (0, _.useEffect)((function() {
                    function e() {
                        return (e = (0, r.default)(i.default.mark((function e() {
                            var t, o, a, r, l, d, u, p, h, C, m, v, _, x, b, S, P, k, T;
                            return i.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, s.CatalogCollection.findProduct({
                                            catalogWid: n.catalogWid,
                                            productId: n.id.toString(),
                                            productMsgMediaData: (0, g.unproxy)(n).productMsgMediaData,
                                            shouldFetchComplianceFields: !0
                                        });
                                    case 2:
                                        if (t = s.CatalogCollection.get(n.catalogWid), !(o = (0, c.default)(t, "catalog").productCollection.get(n.id))) {
                                            e.next = 18;
                                            break
                                        }
                                        return e.next = 7, W(o);
                                    case 7:
                                        return P = e.sent, e.next = 10, (0, f.getCountryName)(null === (a = o.complianceInfo) || void 0 === a || null === (r = a.importerAddress) || void 0 === r ? void 0 : r.countryCode, f.COUNTRY_FILTER_TYPE.META_RECOGNIZED);
                                    case 10:
                                        k = e.sent, T = {
                                            importerName: (null === (l = o.complianceInfo) || void 0 === l ? void 0 : l.importerName) || "",
                                            countryCodeOrigin: (null === (d = o.complianceInfo) || void 0 === d ? void 0 : d.countryCodeOrigin) || "",
                                            importerAddress: {
                                                street1: (null === (u = o.complianceInfo) || void 0 === u || null === (p = u.importerAddress) || void 0 === p ? void 0 : p.street1) || "",
                                                street2: (null === (h = o.complianceInfo) || void 0 === h || null === (C = h.importerAddress) || void 0 === C ? void 0 : C.street2) || "",
                                                city: (null === (m = o.complianceInfo) || void 0 === m || null === (v = m.importerAddress) || void 0 === v ? void 0 : v.city) || "",
                                                region: (null === (_ = o.complianceInfo) || void 0 === _ || null === (x = _.importerAddress) || void 0 === x ? void 0 : x.region) || "",
                                                postalCode: (null === (b = o.complianceInfo) || void 0 === b || null === (S = b.importerAddress) || void 0 === S ? void 0 : S.postalCode) || ""
                                            }
                                        }, j(T), H(!1), w(P), N(k), e.next = 19;
                                        break;
                                    case 18:
                                        __LOG__(3)`Unable to fetch compliance for product: ${n.id}`;
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
                var F = function() {
                        if (o) return o()
                    },
                    U = y.countryCodeOrigin,
                    V = y.importerName,
                    z = y.importerAddress;
                return (0, S.jsxs)(p.default, {
                    ref: t,
                    onDrop: F,
                    theme: "striped",
                    children: [(0, S.jsx)(C.DrawerHeader, {
                        testid: "drawer-title-profile",
                        title: v.fbt._("More information", null, {
                            hk: "2JHvi1"
                        }),
                        onBack: F,
                        type: C.DRAWER_HEADER_TYPE.SMALL
                    }), (0, S.jsx)(h.default, {
                        theme: B ? "center-content" : void 0,
                        children: B ? (0, S.jsx)(u.ComplianceInfoLoading, {}) : (0, S.jsxs)(u.ComplianceInfoGroup, {
                            children: [(0, S.jsx)(u.ComplianceInfoPrimitiveField, {
                                value: O,
                                label: v.fbt._("Country of Origin", null, {
                                    hk: "2yl0F7"
                                })
                            }), U && ![d.COMPLIANCE_INFO_CODES.INDIA, m.SyntheticCountryCode.NotApplicable].includes(U) ? (0, S.jsxs)(S.Fragment, {
                                children: [(0, S.jsx)(u.ComplianceInfoPrimitiveField, {
                                    value: V,
                                    label: v.fbt._("Name of Importer", null, {
                                        hk: "3gfW35"
                                    })
                                }), (0, S.jsx)(u.ComplianceInfoStructuralField, {
                                    valuesMap: (0, a.default)({
                                        importerAddressCountryNameOrigin: M
                                    }, z),
                                    keys: ["street1", "street2", "city", "region", "postalCode", "importerAddressCountryNameOrigin"],
                                    label: v.fbt._("Address of Importer", null, {
                                        hk: "Kxo8I"
                                    })
                                })]
                            }) : null]
                        })
                    })]
                }, "product-details-drawer")
            }
            var T = (0, _.forwardRef)(k);
            t.default = T
        },
        872146: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProductPostcodeChangeBanner = function(e) {
                var t = e.catalogWid,
                    o = e.postcodeChangeSuccess,
                    n = (0, f.useState)(null),
                    c = (0, r.default)(n, 2),
                    s = c[0],
                    d = c[1],
                    u = (0, p.default)(!0),
                    h = u.value,
                    m = u.set,
                    _ = (0, C.default)();
                if ((0, f.useEffect)((function() {
                        (function() {
                            var e = (0, i.default)(a.default.mark((function e() {
                                var o;
                                return a.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, l.default.getCypher(t);
                                        case 3:
                                            if (o = e.sent, !_.aborted) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 6:
                                            d(o), e.next = 12;
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
                    }), [t, m, _]), h || null == s) return null;
                return (0, g.jsx)(v, {
                    businessDirectConnection: s,
                    catalogWid: t,
                    postcodeChangeSuccess: o
                })
            };
            var a = n(o(887757)),
                i = n(o(348926)),
                r = n(o(963038)),
                l = n(o(619567)),
                c = n(o(522656)),
                s = o(628707),
                d = n(o(959418)),
                u = o(548360),
                f = o(667294),
                p = n(o(639265)),
                h = o(853548),
                C = n(o(672900)),
                g = o(785893);

            function m(e) {
                var t = e.catalogWid,
                    o = e.postcodeChangeSuccess,
                    n = e.postcode;
                return (0, g.jsx)(c.default, {
                    onClick: function() {
                        s.ModalManager.open((0, g.jsx)(d.default, {
                            existingPostcode: n,
                            catalogId: t,
                            onCancel: function() {
                                return s.ModalManager.close()
                            },
                            onSuccess: function() {
                                s.ModalManager.close(), o()
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
                    o = e.catalogWid,
                    n = e.postcodeChangeSuccess,
                    a = (0, h.useModelValues)(t, ["postcode"]).postcode;
                return null == a ? null : (0, g.jsxs)(g.Fragment, {
                    children: [u.fbt._("Not available in {area-postcode}.", [u.fbt._param("area-postcode", a)], {
                        hk: "4tHAo0"
                    }), " ", (0, g.jsx)(m, {
                        postcode: a,
                        catalogWid: o,
                        postcodeChangeSuccess: n
                    })]
                })
            }
        },
        372568: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.isAvailable,
                    o = e.fetching,
                    n = (0, d.useContext)(i.DrawerContext),
                    C = (0, f.useModelValues)(e.product, ["productImageCollection", "productMsgMediaData", "catalogWid", "imageCdnUrl"]),
                    g = C.lazyloadProductImageCollection().toArray();
                return (0, p.jsx)("div", {
                    className: (0, u.default)(h),
                    children: (0, p.jsx)(r.default, {
                        images: g,
                        fetching: o,
                        onClick: t ? function(e, t) {
                            (0, c.logDetailImageClick)({
                                product: (0, s.unproxy)(C),
                                catalogContext: (0, l.getProductCatalogContext)(n)
                            });
                            var o = {
                                activeProductImage: t,
                                productImageCollection: C.lazyloadProductImageCollection(),
                                getZoomNode: function() {
                                    return e
                                },
                                product: C
                            };
                            a.Cmd.productImageViewerModal(o, (0, l.getProductCatalogSessionId)(n))
                        } : null,
                        renderFallback: !t,
                        fallbackMediaData: C.productMsgMediaData
                    })
                })
            };
            var a = o(896674),
                i = o(810466),
                r = n(o(854671)),
                l = o(179677),
                c = o(647435),
                s = o(378776),
                d = o(667294),
                u = n(o(156720)),
                f = o(853548),
                p = o(785893),
                h = {
                    width: "ln8gz9je"
                }
        },
        629786: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(o(746251)),
                i = o(704250),
                r = o(213436),
                l = o(548360),
                c = o(667294),
                s = n(o(156720)),
                d = o(785893),
                u = {
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh"
                },
                f = {
                    marginTop: "qt60bha0"
                };

            function p(e, t) {
                var o = e.onPopupCancel,
                    n = e.onReport,
                    c = l.fbt._("Report this product?", null, {
                        hk: "3IDG0p"
                    }),
                    p = (0, d.jsx)("div", {
                        children: l.fbt._("We will review the product and if it does not meet our guidelines, it will be removed.", null, {
                            hk: "2CRdfl"
                        })
                    }, "ReportProductChoicePopup-desc"),
                    h = (0, d.jsx)(a.default, {
                        testid: "popup-controls-report",
                        type: "secondary",
                        onClick: function() {
                            return n()
                        },
                        children: l.fbt._("Report Product", null, {
                            hk: "3XLjyb"
                        })
                    }, "ReportProductChoicePopup-reportBtn"),
                    C = (0, d.jsx)(a.default, {
                        type: "secondary",
                        onClick: o,
                        children: l.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        })
                    }, 0),
                    g = (0, d.jsxs)("div", {
                        className: (0, s.default)(u),
                        children: [(0, d.jsx)("div", {
                            className: (0, s.default)(f),
                            children: h
                        }), (0, d.jsx)("div", {
                            className: (0, s.default)(f),
                            children: C
                        })]
                    });
                return (0, d.jsx)(i.HotKeys, {
                    ref: t,
                    handlers: {
                        escape: o
                    },
                    children: (0, d.jsx)(r.Modal, {
                        title: c,
                        actions: g,
                        children: p
                    })
                })
            }
            var h = (0, c.forwardRef)(p);
            t.default = h
        },
        451685: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(o(334575)),
                i = n(o(993913)),
                r = n(o(502205)),
                l = n(o(199842)),
                c = o(742649),
                s = o(341480),
                d = o(14391),
                u = n(o(383322)),
                f = o(647435),
                p = n(o(629786)),
                h = n(o(571534)),
                C = o(754360),
                g = o(324928),
                m = o(378776),
                v = o(422210),
                _ = o(548360),
                x = o(785893),
                b = function(e) {
                    (0, r.default)(o, e);
                    var t = (0, l.default)(o);

                    function o() {
                        var e;
                        (0, a.default)(this, o);
                        for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(i)))._submitReason = function(t) {
                            var o = e.props.product;
                            return (0, d.reportProduct)(o.catalogWid, o.id.toString(), t)
                        }, e._handleDelete = function() {
                            e.end()
                        }, e._handleTellUsMoreSubmit = function(t) {
                            g.QPL.markerStart(C.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT), e._handleShowSubmittedToast(t)
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
                            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, s.genId)(),
                                n = e.props,
                                a = n.product,
                                i = n.sessionId,
                                r = e._submitReason(t),
                                l = new s.ActionType(_.fbt._("Reporting product", null, {
                                    hk: "4qusYv"
                                })),
                                d = r.then((function() {
                                    return (0, f.logReportProductSuccess)({
                                        product: (0, m.unproxy)(a),
                                        catalogSessionId: i,
                                        reason: t || ""
                                    }), g.QPL.markerEnd(C.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT, c.QuickLogActionType.SUCCESS), new s.ActionType(_.fbt._("Thanks for your feedback", null, {
                                        hk: "1vRsPv"
                                    }).toString() + ". " + _.fbt._("Your report has now been submitted.", null, {
                                        hk: "40tL3T"
                                    }).toString())
                                })).catch((function() {
                                    return (0, f.logReportProductFailure)({
                                        product: (0, m.unproxy)(a),
                                        catalogSessionId: i,
                                        reason: t || ""
                                    }), g.QPL.markerEnd(C.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT, c.QuickLogActionType.FAIL), __LOG__(3)`error submitting product report`, new s.ActionType(_.fbt._("Couldn't report product", null, {
                                        hk: "11JN2U"
                                    }), {
                                        actionText: _.fbt._("Retry", null, {
                                            hk: "2jS9Tg"
                                        }),
                                        actionHandler: function() {
                                            return e._handleShowSubmittedToast(t, o)
                                        }
                                    })
                                }));
                            return v.ToastManager.open((0, x.jsx)(s.ActionToast, {
                                id: o,
                                initialAction: l,
                                pendingAction: d
                            })), e._handleReportSubmitted(), r
                        }, e
                    }
                    return (0, i.default)(o, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, x.jsx)(p.default, {
                                onReport: this._handleReport,
                                onPopupCancel: this._handlePopupCancel,
                                onCancel: this._handleCancel
                            }))
                        }
                    }]), o
                }(u.default);
            t.default = b
        },
        571534: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(o(963038)),
                i = n(o(746251)),
                r = o(704250),
                l = o(213436),
                c = o(798532),
                s = o(236539),
                d = o(422210),
                u = o(548360),
                f = o(667294),
                p = n(o(156720)),
                h = o(785893),
                C = {
                    display: "p357zi0d"
                },
                g = {
                    position: "g0rxnol2",
                    flex: "a1m9qzja"
                },
                m = {
                    display: "l7jjieqr"
                },
                v = ["NO_MATCH", "SPAM", "ILLEGAL", "SCAM", "KNOCKOFF", "OTHER"];

            function _(e, t) {
                var o = e.onCancel,
                    n = e.onTellUsMoreSubmit,
                    _ = (0, f.useState)(null),
                    b = (0, a.default)(_, 2),
                    S = b[0],
                    P = b[1],
                    k = function() {
                        null == o || o()
                    },
                    T = u.fbt._("Tell us more", null, {
                        hk: "2fZHoO"
                    }),
                    y = (0, h.jsx)("div", {
                        className: (0, p.default)(C),
                        children: (0, h.jsx)("ul", {
                            className: (0, p.default)(g),
                            children: v.map((function(e) {
                                return (0, h.jsx)("li", {
                                    children: (0, h.jsx)(c.RadioWithLabel, {
                                        name: e,
                                        value: e,
                                        label: (0, h.jsx)(x, {
                                            reason: e
                                        }),
                                        checked: S === e,
                                        onChange: function() {
                                            P(e)
                                        }
                                    })
                                }, `ReportProductReasonPopup-${e}-option`)
                            }))
                        })
                    }),
                    j = (0, h.jsx)(i.default, {
                        testid: "popup-controls-submit",
                        type: "primary",
                        onClick: function() {
                            S ? n(S) : d.ToastManager.open((0, h.jsx)(s.Toast, {
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
                        children: [E, j]
                    });
                return (0, h.jsx)(r.HotKeys, {
                    ref: t,
                    handlers: {
                        escape: k
                    },
                    children: (0, h.jsx)(l.Modal, {
                        title: T,
                        actions: I,
                        children: y
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
        707021: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.isEditMode,
                    o = e.catalog,
                    n = e.subtitle,
                    h = e.hideIncompleteRows,
                    C = e.productsToShow,
                    g = e.businessProfile,
                    m = (0, p.jsx)(i.default, {
                        onViewShopClick: function() {
                            (0, u.logShopsManagementEvent)(f.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_VIEW_SHOPS_FROM_EDIT_BIZ_PROFILE)
                        },
                        onCommerceManagerClick: function() {
                            (0, u.logShopsManagementEvent)(f.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_COMMERCE_MANAGER_FROM_EDIT_BIZ_PROFILE)
                        },
                        onCancelClick: function() {
                            (0, u.logShopsManagementEvent)(f.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_CANCEL_FROM_EDIT_BIZ_PROFILE)
                        }
                    });
                return (0, p.jsx)(d.default, {
                    onProductDetail: function(e) {
                        if (t) c.ModalManager.open(m), (0, u.logShopsManagementEvent)(f.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_SHOPS_PRODUCT_PREVIEW_TILE, {
                            shouldLogJid: !1
                        });
                        else {
                            var o = new URL((0, a.default)(e.url, "product.url"), `https://${s.HOSTNAME.FACEBOOK}`);
                            l.default.open(String(o))
                        }
                    },
                    onProductCatalog: function() {
                        t ? (c.ModalManager.open(m), (0, u.logShopsManagementEvent)(f.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_MANAGE_SHOPS)) : (0, r.goToShop)(g)
                    },
                    catalog: o,
                    subtitle: n,
                    hideIncompleteRows: h,
                    productsToShow: C,
                    showShopsLogo: !0
                })
            };
            var a = n(o(347999)),
                i = n(o(179757)),
                r = o(219450),
                l = n(o(830226)),
                c = o(628707),
                s = o(426413),
                d = n(o(597738)),
                u = o(552175),
                f = o(447853),
                p = o(785893)
        },
        911558: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleCollectionAppeal = function() {
                return E.apply(this, arguments)
            }, t.handleCollectionDelete = function(e, t, o) {
                return new Promise((function(n, a) {
                    h.ModalManager.open((0, k.jsx)(f.ConfirmPopup, {
                        title: P.fbt._("Delete Collection", null, {
                            hk: "2y3JZ4"
                        }),
                        okText: P.fbt._("OK", null, {
                            hk: "4oTrfy"
                        }),
                        cancelText: P.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: function() {
                            h.ModalManager.close(),
                                function() {
                                    return j.apply(this, arguments)
                                }(e, t, o).then((function(e) {
                                    return n(e)
                                })).catch((function(e) {
                                    return a(e)
                                }))
                        },
                        onCancel: function() {
                            h.ModalManager.close(), n(!1)
                        },
                        children: (0, k.jsx)("div", {
                            children: P.fbt._("When you delete this collection, items in the collection will not be deleted.", null, {
                                hk: "192Jcv"
                            })
                        })
                    }))
                }))
            }, t.handleCollectionReorder = function() {
                return w.apply(this, arguments)
            }, t.handleCollectionSave = function(e, t, o, n, a, i) {
                var r;
                x.QPL.markerPoint(_.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_start"), r = t ? (0, v.editCollection)(t.id.toString() || "", o === t.name ? void 0 : o, !1, n.map((function(e) {
                    return e.id.toString()
                })), a.map((function(e) {
                    return e.id.toString()
                })), i.session.toString()).then((function(i) {
                    return x.QPL.markerPoint(_.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_end"), t.name = o, t.reviewStatus = i.reviewStatus, e.collections.replaceId(t.id, i.id), 0 === n.length && 0 === a.length || (t.productCollection.reset(), t.afterCursor = void 0, e.collections.reset(), e.collections.afterCursor = ""), !0
                })) : (0, v.createCollection)(o, n.map((function(e) {
                    return e.id.toString()
                })), i.session.toString()).then((function(t) {
                    return x.QPL.markerPoint(_.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_end"), (0, m.logCollectionCreated)({
                        catalogContext: i,
                        collectionId: t.id,
                        productCount: n.length
                    }), e.collections.reset(), e.collections.afterCursor = "", !0
                }));
                return r.catch((function(e) {
                    var t = function(e) {
                            S.ToastManager.open((0, k.jsx)(b.Toast, {
                                msg: e,
                                id: (0, b.genId)("catalog_save_collection_failed")
                            }))
                        },
                        o = P.fbt._("Failed to save collection", null, {
                            hk: "3Chwhp"
                        });
                    if ("not-acceptable" === e.text) return "products" === e.fieldName && "duplicate" === e.fieldReason && (o = P.fbt._("You already have a collection with this group of items. Add or delete items to make a different group.", null, {
                        hk: "1fZXaY"
                    })), "collection" === e.fieldName && "empty" === e.fieldReason && (o = P.fbt._("A collection must have at least one item in it", null, {
                        hk: "39rLHR"
                    })), t(o), !1;
                    throw __LOG__(4, !0, new Error, !0)`Failed to save collection, error: ${e}`, SEND_LOGS("Saving collection failed"), t(o), e
                }))
            }, t.handleProductDelete = function(e, t, o, n) {
                return (0, C.logDeleteProductClick)(t, 1, o), new Promise((function(a, i) {
                    h.ModalManager.open((0, k.jsx)(f.ConfirmPopup, {
                        title: P.fbt._("Delete Item", null, {
                            hk: "20DBg1"
                        }),
                        okText: P.fbt._("OK", null, {
                            hk: "4oTrfy"
                        }),
                        cancelText: P.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: function() {
                            h.ModalManager.close(), x.QPL.markerStart(_.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, {
                                    annotations: {
                                        string: {
                                            EntryPoint: n
                                        }
                                    }
                                }),
                                function() {
                                    return T.apply(this, arguments)
                                }(e, t, o).then((function(e) {
                                    x.QPL.markerEnd(_.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, c.QuickLogActionType.SUCCESS), a(e)
                                })).catch((function(e) {
                                    x.QPL.markerEnd(_.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, c.QuickLogActionType.FAIL), i(e)
                                }))
                        },
                        onCancel: function() {
                            h.ModalManager.close(), a(!1)
                        },
                        children: (0, k.jsx)("div", {
                            children: P.fbt._("Are you sure you want to delete this item from your catalog?", null, {
                                hk: "2WwNSA"
                            })
                        })
                    }))
                }))
            }, t.handleProductVisibilityChange = function(e, t, o, n) {
                var a = t.id.toString(),
                    i = !t.isHidden;
                i ? (0, C.logCatalogProductHideClick)(a, o) : (0, C.logCatalogProductShowClick)(a, o);
                return new Promise((function(r, l) {
                    var s = t.isHidden ? P.fbt._("Show item in your catalog?", null, {
                        hk: "VfDKM"
                    }) : P.fbt._("Hide item in your catalog?", null, {
                        hk: "1KmslI"
                    });
                    h.ModalManager.open((0, k.jsx)(f.ConfirmPopup, {
                        okText: P.fbt._("OK", null, {
                            hk: "4oTrfy"
                        }),
                        cancelText: P.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: function() {
                            x.QPL.markerStart(_.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, {
                                    annotations: {
                                        string: {
                                            EntryPoint: n
                                        }
                                    }
                                }), h.ModalManager.close(),
                                function() {
                                    return y.apply(this, arguments)
                                }(e, t).then((function() {
                                    x.QPL.markerEnd(_.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, c.QuickLogActionType.SUCCESS), i ? (0, C.logCatalogProductHideSuccess)(a, o) : (0, C.logCatalogProductShowSuccess)(a, o), r(!0)
                                })).catch((function(e) {
                                    x.QPL.markerEnd(_.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, c.QuickLogActionType.FAIL), i ? (0, C.logCatalogProductHideFailed)(a, o) : (0, C.logCatalogProductShowFailed)(a, o), l(e)
                                }))
                        },
                        onCancel: function() {
                            h.ModalManager.close(), i ? (0, C.logCatalogProductHideCancelled)(a, o) : (0, C.logCatalogProductShowCancelled)(a, o), r(!1)
                        },
                        children: (0, k.jsx)("div", {
                            children: s
                        })
                    }))
                }))
            };
            var a = n(o(319)),
                i = n(o(887757)),
                r = n(o(348926)),
                l = o(63520),
                c = o(742649),
                s = o(104010),
                d = o(14391),
                u = o(696800),
                f = o(430888),
                p = o(386046),
                h = o(628707),
                C = o(647435),
                g = o(926464),
                m = o(338380),
                v = o(189147),
                _ = o(754360),
                x = o(324928),
                b = o(236539),
                S = o(422210),
                P = o(548360),
                k = o(785893);

            function T() {
                return (T = (0, r.default)(i.default.mark((function e(t, o, n) {
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, d.deleteProducts)([o.id.toString()]);
                            case 3:
                                return (0, C.logDeleteProductSuccess)(o, 1, n), t.productCollection.evictImagesFromCache(o.id.toString()), t.productCollection.remove(o.id.toString()), t.collections && t.collections.forEach((function(e) {
                                    return e.productCollection.remove(o.id.toString())
                                })), e.abrupt("return", !0);
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(0), e.abrupt("return", (0, l.filteredCatch)(s.ServerStatusCodeError, (function(e) {
                                    return (0, C.logDeleteProductFailed)(o, 1, n, e.statusCode), S.ToastManager.open((0, k.jsx)(b.Toast, {
                                        msg: P.fbt._("Failed to delete product", null, {
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

            function y() {
                return (y = (0, r.default)(i.default.mark((function e(t, o) {
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, u.productVisibilitySet)([{
                                    productId: o.id.toString(),
                                    isHidden: !o.isHidden
                                }]);
                            case 2:
                                o.isHidden = !o.isHidden, [t.productCollection].concat((0, a.default)((t.collections || []).map((function(e) {
                                    return e.productCollection
                                })))).forEach((function(e) {
                                    var t = e.get(o.id);
                                    t && (t.isHidden = o.isHidden)
                                }));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function j() {
                return (j = (0, r.default)(i.default.mark((function e(t, o, n) {
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, v.deleteCollection)(o.id.toString(), n.session.sessionId.toString());
                            case 3:
                                return t.collections.remove(o.id.toString()), (0, m.logCollectionDeleted)({
                                    catalogContext: n,
                                    collectionId: o.id
                                }), e.abrupt("return", !0);
                            case 8:
                                return e.prev = 8, e.t0 = e.catch(0), e.abrupt("return", (0, l.filteredCatch)(s.ServerStatusCodeError, (function(e) {
                                    return __LOG__(4, !0, new Error, !0)`Failed to delete collection, error: ${e}`, SEND_LOGS("Deleteing collection failed"), S.ToastManager.open((0, k.jsx)(b.Toast, {
                                        msg: P.fbt._("Failed to delete collection", null, {
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

            function E() {
                return (E = (0, r.default)(i.default.mark((function e(t, o) {
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return x.QPL.markerPoint(_.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, "datasource_start"), e.next = 3, (0, v.appealCollection)(t.id.toString(), o);
                            case 3:
                                t.set({
                                    canAppeal: !1,
                                    reviewStatus: g.PRODUCT_REVIEW_STATUS.PENDING
                                }), x.QPL.markerPoint(_.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, "datasource_end");
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var I = {
                    OUT_OF_SYNC: {
                        title: P.fbt._("Changes cannot be saved", null, {
                            hk: "2N3tQ7"
                        }),
                        description: P.fbt._("Please refresh and try again.", null, {
                            hk: "3gfRqz"
                        }),
                        okText: P.fbt._("Reload", null, {
                            hk: "3hzNTy"
                        })
                    },
                    SERVER_ERROR: {
                        title: P.fbt._("Error", null, {
                            hk: "1jfaqb"
                        }),
                        description: P.fbt._("Something went wrong. Please try again.", null, {
                            hk: "CZwf"
                        }),
                        okText: P.fbt._("OK", null, {
                            hk: "2jkNuT"
                        })
                    },
                    HTTP_NETWORK_ERROR: {
                        title: P.fbt._("No internet connection", null, {
                            hk: "4psTpe"
                        }),
                        description: P.fbt._("Check your internet connection and try again.", null, {
                            hk: "2QcT2T"
                        }),
                        okText: P.fbt._("OK", null, {
                            hk: "3si9C7"
                        })
                    }
                },
                O = function(e) {
                    return e instanceof p.HttpNetworkError ? I.HTTP_NETWORK_ERROR : e instanceof v.CollectionReorderError ? I.OUT_OF_SYNC : I.SERVER_ERROR
                };

            function w() {
                return (w = (0, r.default)(i.default.mark((function e(t, o) {
                    var n, a, r, l, c, s;
                    return i.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, v.reorderCollection)(t);
                            case 3:
                                return (n = e.sent) && (0, m.logCollectionReorder)({
                                    catalogContext: o,
                                    movesCount: t.length
                                }), e.abrupt("return", n);
                            case 8:
                                return e.prev = 8, e.t0 = e.catch(0), a = e.t0 instanceof p.HttpNetworkError, r = O(e.t0), l = r.title, c = r.description, s = r.okText, e.abrupt("return", new Promise((function(t, o) {
                                    h.ModalManager.open((0, k.jsx)(f.ConfirmPopup, {
                                        title: l,
                                        okText: s,
                                        onOK: function() {
                                            h.ModalManager.close(), a ? o(e.t0) : t(!1)
                                        },
                                        children: (0, k.jsx)("div", {
                                            children: c
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
        929380: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onClick,
                    o = e.testid,
                    n = void 0 === o ? "add-item" : o,
                    d = (0, l.default)(s.addItemButton, "default" === e.theme && s.themeDefault, "in-list" === e.theme && s.themeInList, "collections" === e.theme && s.themeCollections),
                    u = (0, c.jsx)(i.default, {
                        title: r.fbt._("Add new item", null, {
                            hk: "2Tc6p3"
                        }),
                        onClick: function() {},
                        xstyle: s.addIcon,
                        children: (0, c.jsx)(c.Fragment, {})
                    });
                return (0, c.jsx)(a.default, {
                    theme: "add-item",
                    image: u,
                    customImage: !0,
                    primary: e.title || r.fbt._("Add new item", null, {
                        hk: "2Tc6p3"
                    }),
                    className: d,
                    onClick: t,
                    idle: e.idle,
                    testid: n
                })
            };
            var a = n(o(799328)),
                i = n(o(83938)),
                r = o(548360),
                l = n(o(156720)),
                c = o(785893),
                s = {
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
        224247: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CollectionIntegrityBanner = function(e) {
                var t = e.collection,
                    o = e.onEditCollection,
                    n = function() {
                        null == o || o(t)
                    };
                switch (t.reviewStatus) {
                    case d.PRODUCT_REVIEW_STATUS.PENDING:
                        return (0, C.jsxs)("div", {
                            className: (0, h.default)(g.pendingBanner),
                            children: [p.fbt._("This collection is being reviewed. Once it's approved, your customers will see it in your catalog.", null, {
                                hk: "47RxvH"
                            }), (0, C.jsx)("div", {
                                className: (0, h.default)(g.iconContainerPending),
                                children: (0, C.jsx)(l.InfoIcon, {})
                            })]
                        });
                    case d.PRODUCT_REVIEW_STATUS.REJECTED:
                        return (0, i.canAppealCollections)() ? (0, C.jsx)(_, {
                            collection: t,
                            onRename: n,
                            onAppeal: function() {
                                c.ModalManager.open((0, C.jsx)(a.default, {
                                    collection: t
                                }))
                            }
                        }) : (0, C.jsx)(v, {
                            onRename: n
                        });
                    default:
                        return null
                }
            }, t.getCollectionIntegrityHeight = function(e) {
                return (0, i.canAppealCollections)() && e.reviewStatus === d.PRODUCT_REVIEW_STATUS.REJECTED ? 2 * s.PRODUCT_LIST_ITEM_HEIGHT + 10 : s.PRODUCT_LIST_ITEM_HEIGHT + 10
            };
            var a = n(o(545354)),
                i = o(894995),
                r = n(o(522656)),
                l = o(67497),
                c = o(628707),
                s = o(902011),
                d = o(926464),
                u = o(362563),
                f = o(397065),
                p = o(548360),
                h = n(o(156720)),
                C = o(785893),
                g = {
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
                return (0, C.jsx)("div", {
                    className: (0, h.default)(g.iconContainerRejected, e.withAppeal && g.iconContainerRejectedWithAppeal),
                    children: (0, C.jsx)(l.InfoIcon, {})
                })
            }

            function v(e) {
                var t = e.onRename,
                    o = (0, f.useIsDarkTheme)();
                return (0, C.jsxs)("div", {
                    className: (0, h.default)(g.rejectedBanner, o && g.rejectedBannerDarkBackground),
                    children: [p.fbt._("This collection wasn't approved because it doesn't follow our guidelines.", null, {
                        hk: "1321OC"
                    }), (0, C.jsx)(r.default, {
                        onClick: t,
                        children: p.fbt._("Rename", null, {
                            hk: "2U6ctb"
                        })
                    }), (0, C.jsx)(m, {
                        withAppeal: !1
                    })]
                })
            }

            function _(e) {
                var t = e.collection,
                    o = e.onRename,
                    n = e.onAppeal,
                    a = (t.rejectReason || "other_violation").toLowerCase(),
                    i = (0, u.getRejectedCollectionCopy)(a, t.commerceUrl),
                    l = (0, f.useIsDarkTheme)(),
                    c = (0, C.jsx)(r.default, {
                        onClick: o,
                        children: p.fbt._("rename the collection", null, {
                            hk: "2j5eIB"
                        })
                    });
                if (t.canAppeal) {
                    var s = (0, C.jsx)(r.default, {
                            onClick: n,
                            children: p.fbt._("request another review", null, {
                                hk: "2BSEoy"
                            })
                        }),
                        d = p.fbt._("You can {rename_collection_link} or {request_another_review_link}.", [p.fbt._param("rename_collection_link", c), p.fbt._param("request_another_review_link", s)], {
                            hk: "49Nar9"
                        });
                    return (0, C.jsxs)("div", {
                        className: (0, h.default)(g.rejectedBannerWithAppeal, l && g.rejectedBannerDarkBackground),
                        children: [i.first, (0, C.jsx)("br", {}), d, (0, C.jsx)(m, {
                            withAppeal: !0
                        })]
                    })
                }
                var v = p.fbt._("You can {rename_collection_link}.", [p.fbt._param("rename_collection_link", c)], {
                    hk: "33lrOJ"
                });
                return (0, C.jsxs)("div", {
                    className: (0, h.default)(g.rejectedBannerWithAppeal, l && g.rejectedBannerDarkBackground),
                    children: [i.second, (0, C.jsx)("br", {}), v, (0, C.jsx)(m, {
                        withAppeal: !0
                    })]
                })
            }
        },
        305010: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CatalogCategoriesBanner = function(e) {
                var t = e.catalog,
                    o = (0, s.useModelValues)(t, ["id", "hasCatalogCategories"]),
                    n = o.id,
                    f = o.hasCatalogCategories;
                if ((0, c.useEffect)((function() {
                        null == f && (0, a.queryCatalogHasCategories)(n).then((function(e) {
                            t.set({
                                hasCatalogCategories: e
                            })
                        }))
                    }), [f, n, t]), !1 === f || null == f) return null;
                return (0, d.jsx)(i.TextDiv, {
                    xstyle: [u.banner, r.uiPadding.all16],
                    size: "13",
                    color: "dark",
                    children: l.fbt._("Use WhatsApp on your phone to browse product categories.", null, {
                        hk: "7z4dS"
                    })
                })
            };
            var a = o(696800),
                i = o(558288),
                r = o(71867),
                l = o(548360),
                c = o(667294),
                s = (n(o(156720)), o(853548)),
                d = o(785893),
                u = {
                    banner: {
                        backgroundColor: "se2m7z6i",
                        display: "p357zi0d",
                        alignItems: "gndfcl4n",
                        borderBottom: "daad4uqs"
                    }
                }
        },
        959418: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, o, n = (0, C.default)(),
                    _ = (0, h.useState)({
                        state: m.NOT_STARTED
                    }),
                    x = (0, r.default)(_, 2),
                    b = x[0],
                    S = x[1],
                    P = (0, h.useState)(e.existingPostcode),
                    k = (0, r.default)(P, 2),
                    T = k[0],
                    y = k[1],
                    j = e.existingPostcode === T,
                    E = function() {
                        var t = (0, i.default)(a.default.mark((function t() {
                            var o;
                            return a.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if ("string" == typeof T) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return S({
                                            state: m.IN_PROGRESS
                                        }), t.prev = 3, t.next = 6, (0, l.verifyPostcode)(e.catalogId, T);
                                    case 6:
                                        o = t.sent, n.aborted || S({
                                            state: m.COMPLETED,
                                            data: o
                                        }), "success" === (null == o ? void 0 : o.resultCode) && e.onSuccess(), t.next = 17;
                                        break;
                                    case 11:
                                        if (t.prev = 11, t.t0 = t.catch(3), __LOG__(4, !0, new Error, !0)`[direct-connection] Updating postcode failed ${t.t0}`, SEND_LOGS("[direct-connection] Updating postcode failed"), !n.aborted) {
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
                    O = "unserviceable_location" === (null === (t = b.data) || void 0 === t ? void 0 : t.resultCode),
                    w = null,
                    A = p.fbt._("Enter a valid Pincode.", null, {
                        hk: "21I4U6"
                    });
                ("invalid_postcode" === (null === (o = b.data) || void 0 === o ? void 0 : o.resultCode) || "string" != typeof T || 0 === T.length || 0 !== T.search("^[0-9]{6}$")) && (w = A);
                var L = b.state === m.IN_PROGRESS,
                    M = L || null != w || j,
                    N = function() {
                        M || (O ? I() : E())
                    };
                return (0, g.jsx)(c.ConfirmPopup, {
                    onOK: N,
                    title: O ? null : p.fbt._("Change Pincode", null, {
                        hk: "3R9hJZ"
                    }),
                    okDisabled: M,
                    okSpinner: L,
                    okText: O ? p.fbt._("OK", null, {
                        hk: "4oTrfy"
                    }) : p.fbt._("CONTINUE", null, {
                        hk: "3HQEmh"
                    }),
                    onCancel: O ? null : e.onCancel,
                    cancelDisabled: L,
                    children: O ? (0, g.jsx)(f.Text, {
                        as: "p",
                        testid: "catalog_postcode_change_modal__unservicable-alert",
                        children: p.fbt._("JioMart doesn't have items available in that area. You can try a different Pincode.", null, {
                            hk: "40eEp7"
                        })
                    }) : (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(f.Text, {
                            as: "p",
                            xstyle: v.infoText,
                            children: p.fbt._("To see JioMart items available in a different area, enter the area's Pincode.", null, {
                                hk: "3u35ZR"
                            })
                        }), (0, g.jsx)(u.RichTextField, {
                            testid: "catalog_postcode_change_modal__input",
                            onChange: function(e) {
                                var t, o = e.text;
                                return t = o, I(), void y(t)
                            },
                            value: T,
                            managed: !0,
                            editable: !L,
                            managedError: !0,
                            selectOnMount: !0,
                            focusOnMount: !0,
                            error: w,
                            onEnter: function() {
                                N()
                            }
                        }), (0, g.jsxs)(f.Text, {
                            as: "p",
                            theme: "muted",
                            xstyle: v.privacyText,
                            children: [p.fbt._("By continuing, you agree to share your Pincode and phone number with JioMart. Only JioMart can see your Pincode.", null, {
                                hk: "2XMhtN"
                            }), " ", (0, g.jsx)(s.ExternalLink, {
                                href: (0, d.getJioMartPostcodeChangeLearnMoreLink)(),
                                children: p.fbt._("Learn More", null, {
                                    hk: "27Rbeo"
                                })
                            })]
                        })]
                    })
                })
            };
            var a = n(o(887757)),
                i = n(o(348926)),
                r = n(o(963038)),
                l = o(885952),
                c = o(430888),
                s = o(192070),
                d = o(212390),
                u = o(983557),
                f = o(558288),
                p = o(548360),
                h = o(667294),
                C = (n(o(156720)), n(o(672900))),
                g = o(785893),
                m = o(76672).Mirrored(["NOT_STARTED", "COMPLETED", "FAILED", "IN_PROGRESS"]),
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
        74929: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CatalogPostcodeMenu = function(e) {
                var t = (0, S.useModelValues)(e.businessDirectConnection, ["postcode", "postcodeLocationName", "postcodeSetByUser"]),
                    o = t.postcode,
                    n = t.postcodeLocationName,
                    j = t.postcodeSetByUser,
                    E = (0, S.useModelValues)(e.catalog, ["id", "hasCatalogCategories"]),
                    I = E.id,
                    O = E.hasCatalogCategories,
                    w = !0 === j,
                    A = (0, x.useState)(!1),
                    L = (0, i.default)(A, 2),
                    M = L[0],
                    N = L[1],
                    R = function() {
                        f.ModalManager.close(), N(!1)
                    },
                    D = function() {
                        f.ModalManager.open((0, T.jsx)(p.default, {
                            existingPostcode: null != o ? o : "",
                            catalogId: I,
                            onCancel: R,
                            onSuccess: function() {
                                R(), e.postcodeChangeSuccess()
                            }
                        })), N(!0)
                    },
                    B = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        (0, r.delayMs)(e ? h.CATALOG_POSTCODE_CHANGE_MODAL_OPEN_DELAY : 0).then(D)
                    },
                    H = (0, x.useState)(null),
                    W = (0, i.default)(H, 2),
                    F = W[0],
                    U = W[1],
                    V = (0, x.useRef)(null),
                    z = (0, x.useRef)(null),
                    q = (0, x.useCallback)((function() {
                        return U(null)
                    }), []),
                    G = (0, k.useTimeout)(q, h.CATALOG_POSTCODE_MENU_TOOLTIP_DURATION),
                    Y = (0, i.default)(G, 1)[0],
                    K = (0, x.useCallback)((function() {
                        var e = z.current ? 3 * z.current.offsetWidth / 4 : null;
                        U({
                            menu: (0, T.jsx)("div", {
                                style: "number" == typeof e ? {
                                    maxWidth: `${e}px`
                                } : null,
                                children: (0, T.jsx)(C.Text, {
                                    as: "p",
                                    children: _.fbt._("Click to change pincode to see items available in your area", null, {
                                        hk: "2p5qlf"
                                    })
                                })
                            }),
                            anchor: V.current,
                            dirY: d.DirY.TOP,
                            type: d.MenuType.Tooltip,
                            horizontal: !0,
                            tooltipColorScheme: d.TooltipColorScheme.Highlight
                        })
                    }), []),
                    Z = (0, k.useTimeout)((function() {
                        V.current ? (K(), Y()) : __LOG__(3)`[direct-connection] change postcode tooltip is not shown`
                    }), h.CATALOG_POSTCODE_MENU_TOOLTIP_DELAY),
                    Q = (0, i.default)(Z, 1)[0];
                (0, x.useEffect)((function() {
                    var e, t;
                    w || ((0, s.editPostcodeByDefaultEnabled)() ? function() {
                        if ((0, v.getPostcodeAutoOpenChangePostcodeDone)()) return !1;
                        var e = (0, v.getPostcodeAutoOpenChangePostcodeCount)();
                        if ("number" == typeof e && e >= 2) return !1;
                        return !0
                    }() && (B(!0), (0, v.setPostcodeAutoOpenChangePostcodeDone)(!0), t = (0, v.getPostcodeAutoOpenChangePostcodeCount)(), (0, v.setPostcodeAutoOpenChangePostcodeCount)("number" == typeof t ? t + 1 : 1)) : function() {
                        if ((0, v.getPostcodeTooltipViewedInSession)()) return !1;
                        var e = (0, v.getPostcodeTooltipViewCount)();
                        if ("number" == typeof e && e >= 5) return !1;
                        return !0
                    }() && (e = (0, v.getPostcodeTooltipViewCount)(), (0, v.setPostcodeTooltipViewCount)("number" == typeof e ? e + 1 : 1), (0, v.setPostcodeTooltipViewedInSession)(!0), Q()))
                }), []), (0, P.default)((function() {
                    M && R()
                }));
                var X = (0, x.useState)(0),
                    J = (0, i.default)(X, 2),
                    $ = J[0],
                    ee = J[1];
                (0, x.useEffect)((function() {
                    !0 === O && ee((function(e) {
                        return e + 1
                    }))
                }), [O]);
                var te = F ? (0, T.jsx)(g.UIE, {
                    displayName: "CatalogPostcodeTooltip",
                    popable: !0,
                    escapable: !0,
                    requestDismiss: q,
                    dismissOnWindowResize: !0,
                    children: (0, T.jsx)(m.default, {
                        tooltip: F
                    })
                }, $) : null;
                return (0, T.jsxs)("div", (0, a.default)((0, a.default)({
                    className: (0, b.default)(y.container)
                }, (0, l.accessibleClickableButtonProps)({
                    onClick: B
                })), {}, {
                    ref: z,
                    children: [(0, T.jsx)("span", {
                        className: (0, b.default)(y.svgWrapper),
                        children: (0, T.jsx)(c.BusinessAddressIcon, {})
                    }), (0, T.jsxs)(u.FlexColumn, {
                        ref: V,
                        children: [(0, T.jsx)(C.Text, {
                            as: "p",
                            xstyle: y.postcodeDescription,
                            children: _.fbt._("Deliver to {postcode-of-a-geographic-area}", [_.fbt._param("postcode-of-a-geographic-area", o)], {
                                hk: "1dDn6Y"
                            })
                        }), (0, T.jsx)(C.Text, {
                            as: "p",
                            xstyle: y.postcodeLocationName,
                            theme: "muted",
                            children: w ? n : _.fbt._("Click to change Pincode", null, {
                                hk: "37HAka"
                            })
                        }), te]
                    })]
                }))
            }, t.MAX_TIMES_POSTCODE_CHANGE_TOOLTIP_TO_SHOW = t.MAX_TIMES_POSTCODE_CHANGE_MODAL_AUTO_OPEN = void 0;
            var a = n(o(81109)),
                i = n(o(963038)),
                r = o(774260),
                l = o(973656),
                c = o(725536),
                s = o(516053),
                d = o(482510),
                u = o(208188),
                f = o(628707),
                p = n(o(959418)),
                h = o(923613),
                C = o(558288),
                g = o(776097),
                m = n(o(397550)),
                v = o(516055),
                _ = o(548360),
                x = o(667294),
                b = n(o(156720)),
                S = o(853548),
                P = n(o(177012)),
                k = o(657177),
                T = o(785893),
                y = {
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
        69622: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(o(887757)),
                i = n(o(348926)),
                r = n(o(963038)),
                l = o(742649),
                c = o(519509),
                s = o(705639),
                d = o(894995),
                u = n(o(619567)),
                f = o(535442),
                p = o(321353),
                h = o(218953),
                C = n(o(131730)),
                g = o(65001),
                m = o(516053),
                v = n(o(237120)),
                _ = n(o(686866)),
                x = o(810466),
                b = o(58985),
                S = n(o(979163)),
                P = n(o(399447)),
                k = n(o(929380)),
                T = n(o(84358)),
                y = o(902011),
                j = o(679729),
                E = n(o(46801)),
                I = o(179677),
                O = o(885882),
                w = n(o(587467)),
                A = o(647435),
                L = n(o(726174)),
                M = o(305010),
                N = o(74929),
                R = n(o(914623)),
                D = o(754360),
                B = o(324928),
                H = o(454964),
                W = o(548360),
                F = o(667294),
                U = n(o(156720)),
                V = o(302304),
                z = n(o(273122)),
                q = n(o(61407)),
                G = n(o(279781)),
                Y = n(o(27634)),
                K = n(o(672900)),
                Z = o(785893),
                Q = {
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
                var t, o, n, a, i, r = e.cartEnabled,
                    l = e.contact,
                    s = e.catalog,
                    u = e.dataSource,
                    f = e.handleCartClick,
                    p = e.onCartClick,
                    h = e.canManageCatalog,
                    g = e.businessProfile,
                    m = e.blockCartInterstitialFn,
                    v = e.onAddProduct,
                    _ = e.onProductDetail,
                    x = e.onProductShare,
                    b = e.onCollectionSeeAll,
                    S = e.onEditCollection,
                    y = e.onOpenCollections,
                    j = e.catalogFlatListControllerRef,
                    E = e.catalogFetchState,
                    I = e.directConnectionPostcodeEnabled,
                    O = e.loadingDirectConnectionInfo,
                    A = e.businessDirectConnection,
                    D = e.loadingMore,
                    B = e.postcodeChangeSuccess,
                    H = r && p ? f : void 0;
                (h && v && (o = (0, Z.jsx)(k.default, {
                    onClick: function() {
                        return v()
                    },
                    theme: "collections",
                    testid: "add-item"
                })), s && h && S) && (n = s.productCollection.getProductModels(!0).some((function(e) {
                    return !e.isHidden && "REJECTED" !== e.reviewStatus
                })) ? (0, Z.jsx)(k.default, {
                    onClick: function() {
                        S(null)
                    },
                    theme: "collections",
                    title: W.fbt._("Add new collection", null, {
                        hk: "1DddmB"
                    }),
                    testid: "add-collection"
                }) : null);
                return s && u ? (a = (0, Z.jsx)(R.default, {
                    onCartOpen: H,
                    onProductDetail: _,
                    flatListController: j.current,
                    catalog: s,
                    canManageCatalog: h,
                    shareLinks: h,
                    onProductShare: x,
                    onCollectionSeeAll: b,
                    data: u.getData(),
                    onEditCollection: S
                }), h && ((0, c.getABPropConfigValue)("web_abprop_nux_cart_interstitial") && r && !m() && (0, T.default)(), i = (0, Z.jsx)(C.default, {
                    onOpenCollections: y
                }))) : a = (0, Z.jsx)(w.default, {
                    fetchState: E
                }), (0, Z.jsxs)(Z.Fragment, {
                    children: [g && (0, Z.jsxs)(Z.Fragment, {
                        children: [(0, Z.jsx)("div", {
                            "data-testid": "catalog-header",
                            className: (0, U.default)(Q.header),
                            children: (0, Z.jsx)(L.default, {
                                profilePicThumb: l.getProfilePicThumb(),
                                contact: l,
                                businessProfile: g
                            })
                        }), s && (0, d.catalogCategoriesEnabled)() && (null === (t = g.directConnection) || void 0 === t ? void 0 : t.enabled) ? (0, Z.jsx)(M.CatalogCategoriesBanner, {
                            catalog: s
                        }) : null, s && I && !O && A && (0, Z.jsx)(N.CatalogPostcodeMenu, {
                            catalog: s,
                            businessDirectConnection: A,
                            postcodeChangeSuccess: B
                        })]
                    }), (0, Z.jsxs)("div", {
                        "data-testid": "catalog-items",
                        className: (0, U.default)(Q.list, g && Q.listTopMargin),
                        children: [i, o, n, a, D && (0, Z.jsx)(P.default, {})]
                    })]
                })
            }

            function J(e, t) {
                var o = e.contact,
                    n = e.catalogId,
                    c = e.setScrollOffset,
                    d = e.onCartClick,
                    C = e.onCatalogLinkClick,
                    P = e.canManageCatalog,
                    k = e.canLogQpl,
                    T = void 0 === k || k,
                    w = e.isPushed,
                    L = void 0 === w || w,
                    M = e.scrollOffset,
                    N = e.autoUpdate,
                    R = e.businessProfile,
                    U = e.blockCartInterstitialFn,
                    Q = void 0 === U ? function() {
                        return !1
                    } : U,
                    J = e.onAddProduct,
                    $ = e.onProductDetail,
                    ee = e.onProductShare,
                    te = e.onCollectionSeeAll,
                    oe = e.onEditCollection,
                    ne = e.onOpenCollections,
                    ae = e.onRemoveProduct,
                    ie = e.onOpenSettings,
                    re = e.onOpenMerchantDetailsForm,
                    le = (0, F.useContext)(x.DrawerContext),
                    ce = (0, m.enablePostcodeInCatalog)() && !!R && (0, f.businessSupportsPostcode)(R),
                    se = (0, K.default)(),
                    de = (0, q.default)(),
                    ue = (0, z.default)(de, 100),
                    fe = (0, G.default)((function() {
                        return new S.default
                    })),
                    pe = (0, V.useContactValues)(o.id, [g.getId]),
                    he = (0, r.default)(pe, 1)[0],
                    Ce = (0, F.useMemo)((function() {
                        return p.CartCollection.findCart(he.toString())
                    }), [he]),
                    ge = (0, F.useState)(!1),
                    me = (0, r.default)(ge, 2),
                    ve = me[0],
                    _e = me[1],
                    xe = (0, F.useState)(null),
                    be = (0, r.default)(xe, 2),
                    Se = be[0],
                    Pe = be[1],
                    ke = (0, F.useState)(Ce.itemCount),
                    Te = (0, r.default)(ke, 2),
                    ye = Te[0],
                    je = Te[1],
                    Ee = (0, F.useState)("NONE"),
                    Ie = (0, r.default)(Ee, 2),
                    Oe = Ie[0],
                    we = Ie[1],
                    Ae = (0, F.useState)(null),
                    Le = (0, r.default)(Ae, 2),
                    Me = Le[0],
                    Ne = Le[1],
                    Re = (0, F.useState)(null),
                    De = (0, r.default)(Re, 2),
                    Be = De[0],
                    He = De[1],
                    We = (0, F.useState)(!0),
                    Fe = (0, r.default)(We, 2),
                    Ue = Fe[0],
                    Ve = Fe[1],
                    ze = function() {
                        var e = (0, i.default)(a.default.mark((function e(t) {
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, null == t ? void 0 : t.loadInitialItems();
                                    case 2:
                                        Ve(!1);
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
                    qe = (0, z.default)((function() {
                        de(), null == ae || ae()
                    }), 100),
                    Ge = (0, F.useState)(),
                    Ye = (0, r.default)(Ge, 2),
                    Ke = Ye[0],
                    Ze = Ye[1],
                    Qe = (0, F.useState)(!1),
                    Xe = (0, r.default)(Qe, 2),
                    Je = Xe[0],
                    $e = Xe[1],
                    et = function() {
                        var e = T && L,
                            t = e ? D.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW : void 0;
                        h.CatalogCollection.find(n, {
                            markerId: t
                        }).then((function(t) {
                            if (!se.aborted) {
                                var o = new s.CatalogWithCollectionsDataSource(t, P || !1, y.PRODUCT_LIST_ITEM_HEIGHT, e),
                                    n = new s.CatalogListItemScrollHelper(o);
                                Pe(t), Ne(o), He(n), we("SUCCESS"), ze(o).then((function() {
                                        e && B.QPL.markerEnd(D.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, l.QuickLogActionType.SUCCESS)
                                    })).catch((function() {
                                        e && B.QPL.markerEnd(D.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, l.QuickLogActionType.FAIL)
                                    })),
                                    function(e) {
                                        N && null != e && (e.productCollection.on("add", ue), e.productCollection.on("remove", qe), e.collections.on("add", ue), e.collections.on("remove", ue))
                                    }(t), void 0 !== M && fe.current.setScrollFromStart(M)
                            }
                        })).catch((function(t) {
                            e && B.QPL.markerEnd(D.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, l.QuickLogActionType.FAIL), (0, O.parseErrorState)(t, (function(e) {
                                we(e), Ve(!1)
                            }))
                        }))
                    },
                    tt = function() {
                        ce ? ($e(!0), u.default.getCypher(n).then((function(e) {
                            Ze(e), $e(!1), et()
                        }))) : et()
                    };
                (0, F.useEffect)((function() {
                    tt(), (0, E.default)(n).then((function(e) {
                        _e(e), e && Ce.on("change:cartItemCollection", (function() {
                            return je(Ce.itemCount)
                        })), (0, A.logCatalogListView)({
                            catalogOwnerWid: n,
                            catalogContext: (0, I.getProductCatalogContext)(le),
                            cartToggle: e
                        })
                    }))
                }), []);
                var ot = (0, Y.default)((function(e, t) {
                        null == c || c(t.scrollTop), (null == Be ? void 0 : Be.willLoadMore(t)) && Ve(!0), null == Be || Be.onScroll(e, t).then((function(e) {
                            e && Ve(!1)
                        })).catch((function(e) {
                            throw Ve(!1), e
                        }))
                    }), 100),
                    nt = function() {
                        (0, H.qplStartCartView)("Catalog"), null == d || d(he.toString())
                    },
                    at = (0, j.getCatalogDrawerMenu)({
                        onSendCatalog: function() {
                            Se && (C(Se, o), (0, A.logCatalogShareLinkClick)({
                                catalogOwnerWid: n,
                                catalogContext: (0, I.getProductCatalogContext)(le)
                            }))
                        },
                        onCartClick: ve ? nt : void 0,
                        cartCount: ye,
                        catalogId: n.toString(),
                        canManageCatalog: P,
                        onOpenCollections: ne,
                        onOpenMerchantDetailsForm: re,
                        onOpenSettings: ie,
                        cartIconTheme: e.headerType === b.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
                    });
                return (0, Z.jsxs)(v.default, {
                    ref: t,
                    theme: "products",
                    onDrop: e.onBack,
                    children: [(0, Z.jsx)(b.DrawerHeader, {
                        title: W.fbt._("Catalog", null, {
                            hk: "3YVOSV"
                        }),
                        type: e.headerType || b.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onBack,
                        menu: at,
                        focusBackOrCancel: !0
                    }), (0, Z.jsx)(_.default, {
                        onScroll: function(e) {
                            ot(e, e.currentTarget)
                        },
                        flatListControllers: [fe.current],
                        children: (0, Z.jsx)(X, {
                            cartEnabled: ve,
                            contact: o,
                            handleCartClick: nt,
                            onProductDetail: $,
                            onCartClick: d,
                            catalog: Se,
                            dataSource: Me,
                            businessProfile: R,
                            canManageCatalog: P,
                            onAddProduct: J,
                            onProductShare: ee,
                            onCollectionSeeAll: te,
                            onOpenCollections: ne,
                            onEditCollection: oe,
                            blockCartInterstitialFn: Q,
                            catalogFlatListControllerRef: fe,
                            catalogFetchState: Oe,
                            directConnectionPostcodeEnabled: ce,
                            loadingDirectConnectionInfo: Je,
                            businessDirectConnection: Ke,
                            loadingMore: Ue,
                            postcodeChangeSuccess: function() {
                                h.CatalogCollection.removeCatalog(n), Pe(null), Ne(null), He(null), we("NONE"), Ve(!0), tt()
                            }
                        })
                    })]
                })
            }
            var $ = (0, F.forwardRef)(J);
            t.default = $
        },
        121891: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CollectionContentDrawer = void 0;
            var a = n(o(887757)),
                i = n(o(348926)),
                r = n(o(963038)),
                l = o(742649),
                c = o(705639),
                s = o(321353),
                d = o(218953),
                u = o(65001),
                f = n(o(237120)),
                p = n(o(686866)),
                h = o(810466),
                C = o(58985),
                g = n(o(979163)),
                m = n(o(399447)),
                v = n(o(929380)),
                _ = o(224247),
                x = o(902011),
                b = o(679729),
                S = n(o(46801)),
                P = o(179677),
                k = o(885882),
                T = n(o(587467)),
                y = o(338380),
                j = n(o(914623)),
                E = o(754360),
                I = o(324928),
                O = o(454964),
                w = o(548360),
                A = o(667294),
                L = n(o(156720)),
                M = o(302304),
                N = n(o(273122)),
                R = n(o(61407)),
                D = n(o(279781)),
                B = o(494092),
                H = n(o(672900)),
                W = o(785893),
                F = {
                    flex: "kk3akd72",
                    paddingBottom: "oq31bsqd",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex"
                },
                U = {
                    paddingTop: "pxvlsfnc",
                    paddingEnd: "kyc7k6mt",
                    paddingBottom: "n3bptxsn",
                    paddingStart: "f78eapp6",
                    lineHeight: "qg52vu03"
                };

            function V(e) {
                var t = e.cartEnabled,
                    o = e.catalogFetchState,
                    n = e.collectionFlatListController,
                    a = e.loadingMore,
                    i = e.catalog,
                    r = e.dataSource,
                    l = e.canManageCatalog,
                    c = e.collection,
                    s = e.handleCartClick,
                    d = e.onProductDetail,
                    u = e.onCartClick,
                    f = e.onProductShare,
                    p = e.onEditCollection,
                    h = t && u ? s : void 0;
                if (!i || !r) return (0, W.jsx)(T.default, {
                    fetchState: o
                });
                var C = r.getData();
                if (0 === C.length && !a && l && c) return (0, W.jsx)(W.Fragment, {
                    children: (0, W.jsxs)("div", {
                        className: (0, L.default)(F),
                        children: [(0, W.jsx)(v.default, {
                            theme: "collections",
                            onClick: function() {
                                null == p || p(c)
                            },
                            testid: "add-collection"
                        }), (0, W.jsx)("div", {
                            className: (0, L.default)(U),
                            children: w.fbt._("This collection won't be visible to customers until you add at least 1 item", null, {
                                hk: "3XWBzM"
                            })
                        })]
                    })
                });
                var g = (0, W.jsx)(j.default, {
                        onCartOpen: h,
                        onProductDetail: d,
                        flatListController: n,
                        catalog: i,
                        canManageCatalog: l,
                        shareLinks: l,
                        onProductShare: f,
                        collectionId: null == c ? void 0 : c.id.toString(),
                        data: C
                    }),
                    x = c ? (0, W.jsx)(_.CollectionIntegrityBanner, {
                        collection: c,
                        onEditCollection: p
                    }) : void 0;
                return (0, W.jsx)(W.Fragment, {
                    children: (0, W.jsxs)("div", {
                        className: (0, L.default)(F),
                        children: [x, g, a && (0, W.jsx)(m.default, {})]
                    })
                })
            }
            var z = (0, A.forwardRef)((function(e, t) {
                var o, n = e.contact,
                    m = e.catalogId,
                    v = e.onCartClick,
                    _ = e.onCatalogLinkClick,
                    T = e.setScrollOffset,
                    j = e.canManageCatalog,
                    L = e.scrollOffset,
                    F = e.collection,
                    U = e.onProductDetail,
                    z = e.onProductShare,
                    q = e.onEditCollection,
                    G = (0, R.default)(),
                    Y = (0, H.default)(),
                    K = (0, A.useContext)(h.DrawerContext),
                    Z = (0, M.useContactValues)(n.id, [u.getId]),
                    Q = (0, r.default)(Z, 1)[0],
                    X = (0, A.useMemo)((function() {
                        return s.CartCollection.findCart(Q.toString())
                    }), [Q]),
                    J = (0, D.default)((function() {
                        return new g.default
                    })),
                    $ = (0, A.useState)(!1),
                    ee = (0, r.default)($, 2),
                    te = ee[0],
                    oe = ee[1],
                    ne = (0, A.useState)(null),
                    ae = (0, r.default)(ne, 2),
                    ie = ae[0],
                    re = ae[1],
                    le = (0, A.useState)(X.itemCount),
                    ce = (0, r.default)(le, 2),
                    se = ce[0],
                    de = ce[1],
                    ue = (0, A.useState)("NONE"),
                    fe = (0, r.default)(ue, 2),
                    pe = fe[0],
                    he = fe[1],
                    Ce = (0, A.useState)(null),
                    ge = (0, r.default)(Ce, 2),
                    me = ge[0],
                    ve = ge[1],
                    _e = (0, A.useState)(null),
                    xe = (0, r.default)(_e, 2),
                    be = xe[0],
                    Se = xe[1],
                    Pe = (0, A.useState)(!0),
                    ke = (0, r.default)(Pe, 2),
                    Te = ke[0],
                    ye = ke[1];
                (0, B.useListener)(null == F ? void 0 : F.productCollection, ["add", "remove"], G), (0, B.useListener)(null == ie ? void 0 : ie.productCollection, ["add", "remove"], G), (0, B.useListener)(null == ie ? void 0 : ie.collections, ["add", "remove"], G), (0, B.useListener)(F, ["change:reviewStatus", "canAppeal"], G);
                var je = function() {
                        var e = (0, i.default)(a.default.mark((function e(t) {
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, null == t ? void 0 : t.loadInitialItems();
                                    case 2:
                                        ye(!1), (0, y.logCollectionSeeAllView)({
                                            catalogOwnerJid: m.toString(),
                                            catalogContext: (0, P.getProductCatalogContext)(K),
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
                    Ee = function() {
                        var e = X.itemCount;
                        se !== e && de(e)
                    };
                (0, A.useEffect)((function() {
                    d.CatalogCollection.find(m).then((function(e) {
                        if (!Y.aborted) {
                            re(e), he("SUCCESS");
                            var t = new c.SingleCollectionDataSource(e, null == F ? void 0 : F.id.toString(), j || !1, x.PRODUCT_LIST_ITEM_HEIGHT),
                                o = new c.CatalogListItemScrollHelper(t);
                            ve(t), Se(o), je(t).then((function() {
                                I.QPL.markerEnd(E.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, l.QuickLogActionType.SUCCESS)
                            })).catch((function() {
                                I.QPL.markerEnd(E.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, l.QuickLogActionType.FAIL)
                            })), void 0 !== L && J.current.setScrollFromStart(L)
                        }
                    })).catch((function(e) {
                        I.QPL.markerEnd(E.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, l.QuickLogActionType.FAIL), (0, k.parseErrorState)(e, (function(e) {
                            he(e), ye(!1)
                        }))
                    })), (0, S.default)(m).then((function(e) {
                        oe(e), e && X.on("all", Ee)
                    }))
                }), []);
                var Ie = function() {
                        (0, O.qplStartCartView)("Collection"), null == v || v(Q.toString())
                    },
                    Oe = (0, N.default)((function(e, t) {
                        null == T || T(t.scrollTop), (null == be ? void 0 : be.willLoadMore(t)) && ye(!0), null == be || be.onScroll(e, t).then((function(e) {
                            e && ye(!1)
                        })).catch((function(e) {
                            throw ye(!1), e
                        }))
                    }), 100),
                    we = (0, b.getCatalogDrawerMenu)({
                        onSendCatalog: function() {
                            ie && _(ie, n)
                        },
                        onCartClick: te ? Ie : void 0,
                        cartCount: X.itemCount,
                        catalogId: m.toString(),
                        canManageCatalog: j
                    }),
                    Ae = (null === (o = e.collection) || void 0 === o ? void 0 : o.name) || w.fbt._("All Items", null, {
                        hk: "2x8dE2"
                    });
                return (0, W.jsxs)(f.default, {
                    ref: t,
                    theme: "products",
                    onDrop: e.onBack,
                    children: [(0, W.jsx)(C.DrawerHeader, {
                        title: Ae,
                        type: e.headerType || C.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onBack,
                        menu: we
                    }), (0, W.jsx)(p.default, {
                        flatListControllers: [J.current],
                        onScroll: function(e) {
                            Oe(e, e.currentTarget)
                        },
                        children: (0, W.jsx)(V, {
                            cartEnabled: te,
                            onCartClick: v,
                            handleCartClick: Ie,
                            catalog: ie,
                            dataSource: me,
                            catalogFetchState: pe,
                            loadingMore: Te,
                            canManageCatalog: j,
                            collection: F,
                            onProductDetail: U,
                            onProductShare: z,
                            onEditCollection: q,
                            collectionFlatListController: J.current
                        })
                    })]
                })
            }));
            t.CollectionContentDrawer = z, z.displayName = "CollectionContentDrawer"
        },
        344735: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, o, n = e.collection,
                    i = e.onSeeAll,
                    h = e.allItems;
                n ? (t = n.name, o = n.id) : h && (t = d.fbt._("All Items", null, {
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
                if (n) switch (n.reviewStatus) {
                    case l.PRODUCT_REVIEW_STATUS.REJECTED:
                        _ = (0, f.jsx)("span", {
                            className: (0, u.default)(C),
                            children: d.fbt._("rejected", null, {
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
                            }(e), (0, s.qplStartCollectionViewAll)("Catalog"), i && n ? i(n) : i && i()
                        }
                    }),
                    theme: "collection-header",
                    idle: !0,
                    className: (0, u.default)(g)
                }, o)
            };
            var a = n(o(799328)),
                i = n(o(522656)),
                r = o(990055),
                l = o(926464),
                c = o(558288),
                s = o(454964),
                d = o(548360),
                u = n(o(156720)),
                f = o(785893),
                p = {
                    lineHeight: "erpdyial"
                },
                h = {
                    lineHeight: "erpdyial"
                },
                C = {
                    color: "mvxzr2tb"
                },
                g = {
                    paddingStart: "f78eapp6",
                    marginTop: "o9i7y497",
                    borderTop: "swyb62mu"
                },
                m = function(e) {
                    var t = e.name,
                        o = e.onClick;
                    return (0, f.jsx)(i.default, {
                        onClick: o,
                        className: (0, u.default)(h),
                        title: d.fbt._("Collection {collectionName}, see all", [d.fbt._param("collectionName", t)], {
                            hk: "1kqerQ"
                        }),
                        tabIndex: 0,
                        children: d.fbt._("See all", null, {
                            hk: "UPjou"
                        })
                    })
                }
        },
        362563: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getRejectedCollectionCopy = function(e, t) {
                var o;
                switch (e) {
                    case "drugs":
                        return o = c.fbt._("WhatsApp's Commerce Policy for prescription, recreational, or other types of Drugs", null, {
                            hk: "B27ED"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_drugs}", [c.fbt._param("collections_rejected_policy_drugs", d(o, t))], {
                                hk: "1ZU364"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_drugs}.", [c.fbt._param("collections_rejected_policy_drugs", d(o, t))], {
                                hk: "4pJPwW"
                            })
                        };
                    case "weapons":
                        return o = c.fbt._("WhatsApp's Commerce Policy for Weapons, ammunition, or explosives", null, {
                            hk: "1X972I"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_weapons}", [c.fbt._param("collections_rejected_policy_weapons", d(o, t))], {
                                hk: "1RUS3E"
                            }),
                            second: (0, s.jsx)(l.default, {
                                id: 188,
                                params: {
                                    collections_rejected_policy_weapons: d(o, t)
                                }
                            })
                        };
                    case "animals":
                        return o = c.fbt._("WhatsApp's Commerce Policy for Animals", null, {
                            hk: "3hxXr8"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_animals}", [c.fbt._param("collections_rejected_policy_animals", d(o, t))], {
                                hk: "3pIJQl"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_animals}.", [c.fbt._param("collections_rejected_policy_animals", d(o, t))], {
                                hk: "jmRZD"
                            })
                        };
                    case "alcohol":
                        return o = c.fbt._("WhatsApp's Commerce Policy for Alcohol", null, {
                            hk: "1G8YGL"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_alcohol}", [c.fbt._param("collections_rejected_policy_alcohol", d(o, t))], {
                                hk: "1K5gKG"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_alcohol}.", [c.fbt._param("collections_rejected_policy_alcohol", d(o, t))], {
                                hk: "1BLaYk"
                            })
                        };
                    case "gambling":
                        return o = c.fbt._("WhatsApp's Commerce Policy for Real money gambling services", null, {
                            hk: "1zQIeM"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_gambling}", [c.fbt._param("collections_rejected_policy_gambling", d(o, t))], {
                                hk: "2sjwfv"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_gambling}.", [c.fbt._param("collections_rejected_policy_gambling", d(o, t))], {
                                hk: "2N7wJa"
                            })
                        };
                    case "tobacco":
                        return o = c.fbt._("WhatsApp's Commerce Policy for Tobacco items and related paraphernalia", null, {
                            hk: "EAQLL"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_tobacco}", [c.fbt._param("collections_rejected_policy_tobacco", d(o, t))], {
                                hk: "49kjok"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_tobacco}.", [c.fbt._param("collections_rejected_policy_tobacco", d(o, t))], {
                                hk: "1hYXEJ"
                            })
                        };
                    case "overtly_sexualized_positioning":
                        return o = c.fbt._("WhatsApp's Commerce Policy for Overtly sexualized positioning", null, {
                            hk: "1oaFbX"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_overtly_sexualized_positioning}", [c.fbt._param("collections_rejected_policy_overtly_sexualized_positioning", d(o, t))], {
                                hk: "2imNEe"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_overtly_sexualized_positioning}.", [c.fbt._param("collections_rejected_policy_overtly_sexualized_positioning", d(o, t))], {
                                hk: "2Bi73E"
                            })
                        };
                    case "adult":
                        return o = c.fbt._("WhatsApp's Commerce Policy for Adult products or service", null, {
                            hk: "Wf7q5"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_adult}", [c.fbt._param("collections_rejected_policy_adult", d(o, t))], {
                                hk: "2sWh94"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_adult}.", [c.fbt._param("collections_rejected_policy_adult", d(o, t))], {
                                hk: "4Fv5xc"
                            })
                        };
                    case "supplements":
                        return o = c.fbt._("WhatsApp's Commerce Policy for Unsafe ingestible supplements", null, {
                            hk: "9a4Y2"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_supplements}", [c.fbt._param("collections_rejected_policy_supplements", d(o, t))], {
                                hk: "3m5ayk"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_supplements}.", [c.fbt._param("collections_rejected_policy_supplements", d(o, t))], {
                                hk: "4g93H8"
                            })
                        };
                    case "body_parts_fluids":
                        return o = c.fbt._("WhatsApp's Commerce Policy for Body parts and fluids", null, {
                            hk: "2EAd21"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_body_parts_fluids}", [c.fbt._param("collections_rejected_policy_body_parts_fluids", d(o, t))], {
                                hk: "1fH8mf"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_body_parts_fluids}.", [c.fbt._param("collections_rejected_policy_body_parts_fluids", d(o, t))], {
                                hk: "2HB7OE"
                            })
                        };
                    case "healthcare":
                        return o = c.fbt._("WhatsApp's Commerce Policy for Medical and healthcare products", null, {
                            hk: "3vvgOF"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_healthcare}", [c.fbt._param("collections_rejected_policy_healthcare", d(o, t))], {
                                hk: "1o5Y8p"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_healthcare}.", [c.fbt._param("collections_rejected_policy_healthcare", d(o, t))], {
                                hk: "18tOqv"
                            })
                        };
                    case "misleading":
                        return o = c.fbt._("WhatsApp's Commerce Policy for Business models, goods, items, or services that may be or are fraudulent, misleading, offensive, or deceptive, or may be or are exploitative, inappropriate, or exert undue pressure on targeted groups", null, {
                            hk: "3TyOB"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_misleading}", [c.fbt._param("collections_rejected_policy_misleading", d(o, t))], {
                                hk: "1icG7s"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_misleading}.", [c.fbt._param("collections_rejected_policy_misleading", d(o, t))], {
                                hk: "4gURah"
                            })
                        };
                    case "real_fake_currency":
                        return o = c.fbt._("WhatsApp's Commerce Policy for Real, virtual, or fake currency", null, {
                            hk: "2XnVq2"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_real_fake_currency}", [c.fbt._param("collections_rejected_policy_real_fake_currency", d(o, t))], {
                                hk: "2F8xUp"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_real_fake_currency}.", [c.fbt._param("collections_rejected_policy_real_fake_currency", d(o, t))], {
                                hk: "3mr0Qt"
                            })
                        };
                    case "digital_services_products":
                        return o = c.fbt._("WhatsApp's Commerce Policy for Digital and subscription services", null, {
                            hk: "2mvwqB"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_digital_services_products}", [c.fbt._param("collections_rejected_policy_digital_services_products", d(o, t))], {
                                hk: "W6Ct0"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_digital_services_products}.", [c.fbt._param("collections_rejected_policy_digital_services_products", d(o, t))], {
                                hk: "4gcYAt"
                            })
                        };
                    case "thrid_party_infringements":
                        return o = c.fbt._("WhatsApp's Commerce Policy for Third-Party Infringement", null, {
                            hk: "48SSD"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_thrid_party_infringements}", [c.fbt._param("collections_rejected_policy_thrid_party_infringements", d(o, t))], {
                                hk: "2S7xKD"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_thrid_party_infringements}.", [c.fbt._param("collections_rejected_policy_thrid_party_infringements", d(o, t))], {
                                hk: "1UXaIr"
                            })
                        };
                    case "unauthorized_media":
                        return o = c.fbt._("WhatsApp's Commerce Policy for Products or items that facilitate or encourage unauthorized access to digital media", null, {
                            hk: "2ldhoF"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_unauthorized_media}", [c.fbt._param("collections_rejected_policy_unauthorized_media", d(o, t))], {
                                hk: "2oPAST"
                            }),
                            second: (0, s.jsx)(l.default, {
                                id: 187,
                                params: {
                                    collections_rejected_policy_unauthorized_media: d(o, t)
                                }
                            })
                        };
                    case "illegal_products":
                        return o = c.fbt._("WhatsApp's Commerce Policy for Illegal products or services", null, {
                            hk: "c5Zjc"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_illegal_products}", [c.fbt._param("collections_rejected_policy_illegal_products", d(o, t))], {
                                hk: "41Oqb6"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_illegal_products}.", [c.fbt._param("collections_rejected_policy_illegal_products", d(o, t))], {
                                hk: "46TgAV"
                            })
                        };
                    case "hazardous_goods_and_materials":
                        return o = c.fbt._("WhatsApp's Commerce Policy for Business models, goods, items, or services that may be or are fraudulent, misleading, offensive, or deceptive, or may be or are exploitative, inappropriate, or exert undue pressure on targeted groups", null, {
                            hk: "3TyOB"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_hazardous_goods_and_materials}", [c.fbt._param("collections_rejected_policy_hazardous_goods_and_materials", d(o, t))], {
                                hk: "smMcx"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_hazardous_goods_and_materials}.", [c.fbt._param("collections_rejected_policy_hazardous_goods_and_materials", d(o, t))], {
                                hk: "SdRo5"
                            })
                        };
                    case "stolen_goods":
                        return o = c.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_stolen_goods}", [c.fbt._param("collections_rejected_policy_stolen_goods", d(o, t))], {
                                hk: "4mvVou"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_stolen_goods}.", [c.fbt._param("collections_rejected_policy_stolen_goods", d(o, t))], {
                                hk: "1Zd6PC"
                            })
                        };
                    case "human_exploitation_and_sexual_services":
                        return o = c.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_human_exploitation_and_sexual_services}", [c.fbt._param("collections_rejected_policy_human_exploitation_and_sexual_services", d(o, t))], {
                                hk: "4yXqyf"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_human_exploitation_and_sexual_services}.", [c.fbt._param("collections_rejected_policy_human_exploitation_and_sexual_services", d(o, t))], {
                                hk: "3XImZQ"
                            })
                        };
                    case "community_standards":
                        return o = c.fbt._("WhatsApp's Business Terms", null, {
                            hk: "1x5ZqO"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_community_standards}", [c.fbt._param("collections_rejected_policy_community_standards", d(o, t))], {
                                hk: "2AoLET"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_community_standards}.", [c.fbt._param("collections_rejected_policy_community_standards", d(o, t))], {
                                hk: "apmZF"
                            })
                        };
                    case "discrimination":
                        return o = c.fbt._("WhatsApp's Business Terms", null, {
                            hk: "1x5ZqO"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_discrimination}", [c.fbt._param("collections_rejected_policy_discrimination", d(o, t))], {
                                hk: "4gmrAW"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_discrimination}.", [c.fbt._param("collections_rejected_policy_discrimination", d(o, t))], {
                                hk: "3j6FXO"
                            })
                        };
                    default:
                        return o = c.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        }), {
                            first: c.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_other_violation}", [c.fbt._param("collections_rejected_policy_other_violation", d(o, t))], {
                                hk: "3AiJjt"
                            }),
                            second: c.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_other_violation}.", [c.fbt._param("collections_rejected_policy_other_violation", d(o, t))], {
                                hk: "A2Pf5"
                            })
                        }
                }
            };
            var a = n(o(522656)),
                i = n(o(442435)),
                r = o(192070),
                l = n(o(680516)),
                c = o(548360),
                s = o(785893);

            function d(e, t) {
                var o = t || i.default.WA_COMMERCE_POLICY_URL;
                return (0, s.jsx)(a.default, {
                    href: o,
                    onClick: function(e) {
                        e.preventDefault(), (0, r.openExternalLink)(o)
                    },
                    children: e
                })
            }
        },
        338380: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.logCollectionCreateClicked = function(e) {
                new r.CatalogBizWamEvent({
                    catalogBizAction: s.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CREATE_CLICKED,
                    catalogEntryPoint: e.entryPoint,
                    catalogSessionId: e.session.toString()
                }).commit()
            }, t.logCollectionCreated = function(e) {
                var t = e.catalogContext,
                    o = (e.collectionId, e.productCount);
                new r.CatalogBizWamEvent({
                    catalogBizAction: s.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CREATED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: o
                }).commit()
            }, t.logCollectionDeleted = function(e) {
                var t = e.catalogContext,
                    o = e.collectionId;
                new r.CatalogBizWamEvent({
                    catalogBizAction: s.CATALOG_BIZ_ACTION.ACTION_COLLECTION_DELETED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    collectionId: o
                }).commit()
            }, t.logCollectionItemsAssignment = function(e) {
                var t = e.catalogContext,
                    o = e.collectionId,
                    n = e.addedCount,
                    a = e.removedCount;
                n > 0 && new r.CatalogBizWamEvent({
                    catalogBizAction: s.CATALOG_BIZ_ACTION.ACTION_COLLECTION_ASSIGN_ITEMS,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: n,
                    collectionId: o
                }).commit();
                a > 0 && new r.CatalogBizWamEvent({
                    catalogBizAction: s.CATALOG_BIZ_ACTION.ACTION_COLLECTION_UNASSIGN_ITEMS,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: a,
                    collectionId: o
                }).commit()
            }, t.logCollectionMenuClicked = function(e) {
                new r.CatalogBizWamEvent({
                    catalogBizAction: s.CATALOG_BIZ_ACTION.ACTION_MENU_COLLECTIONS_CLICK,
                    catalogEntryPoint: e.entryPoint,
                    catalogSessionId: e.session.toString()
                }).commit()
            }, t.logCollectionRenamed = function(e) {
                var t = e.catalogContext,
                    o = e.collectionId;
                new r.CatalogBizWamEvent({
                    catalogBizAction: s.CATALOG_BIZ_ACTION.ACTION_COLLECTION_DELETED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    collectionId: o
                }).commit()
            }, t.logCollectionReorder = function(e) {
                var t = e.catalogContext,
                    o = e.movesCount;
                new r.CatalogBizWamEvent({
                    catalogBizAction: s.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CHANGE_ORDER,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: o
                }).commit()
            }, t.logCollectionSeeAllView = function(e) {
                var t = e.catalogOwnerJid,
                    o = e.catalogContext,
                    n = e.collectionId,
                    r = (0, i.getProductStatsInFetched)(t, n),
                    s = null == r ? void 0 : r.productIndex,
                    d = null == r ? void 0 : r.collectionIndex;
                (0, c.logCatalogViewOrBizEvent)((0, a.default)({
                    isOwner: (0, c.isCatalogOwner)({
                        catalogOwnerJid: t
                    }),
                    productIndex: s,
                    collectionIndex: d
                }, (0, l.toDataForCatalogViewEvents)(o)))
            };
            var a = n(o(81109)),
                i = o(705639),
                r = o(834450),
                l = o(179677),
                c = o(460682),
                s = o(447853)
        },
        914623: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onProductDetail,
                    o = e.onProductShare,
                    n = e.onCartOpen,
                    T = e.shareLinks,
                    y = e.onEditCollection,
                    j = e.onCollectionSeeAll,
                    E = e.canManageCatalog,
                    I = (0, x.default)(),
                    O = (0, P.useModelValues)(e.catalog, ["productCollection", "collections", "afterCursor", "id", "index"]),
                    w = (0, _.useContext)(a.DrawerContext),
                    A = (0, b.default)((function() {
                        return new Set
                    })),
                    L = (0, b.default)((function() {
                        return new l.default
                    })),
                    M = function(e) {
                        null == o || o(e)
                    },
                    N = function(e) {
                        (0, s.handleProductDelete)(O, e, (0, f.getProductCatalogContext)(w), "Collection")
                    },
                    R = function(e) {
                        (0, s.handleProductVisibilityChange)(O, e, (0, f.getProductCatalogContext)(w), "Collections")
                    };
                return (0, S.useListeners)(Array.from(A.current).map((function(e) {
                    return {
                        source: e,
                        eventOrEvents: ["change:reviewStatus", "canAppeal"],
                        callback: I
                    }
                }))), (0, k.jsx)(k.Fragment, {
                    children: (0, k.jsx)(r.default, {
                        flatListControllers: [L.current],
                        children: (0, k.jsx)(i.FlatList, {
                            flatListController: L.current,
                            direction: "vertical",
                            forceConsistentRenderCount: !1,
                            data: function() {
                                var t = void 0 !== n,
                                    o = e.data || [],
                                    a = [];
                                return o.forEach((function(o) {
                                    var n = o.collection,
                                        i = o.product,
                                        r = o.allItems;
                                    if (n && i) {
                                        var l = n.id;
                                        a.push({
                                            itemKey: `${l.toString()}_${i.id.toString()}_${t.toString()}`,
                                            product: i,
                                            collectionId: l
                                        })
                                    } else if (n) A.current.has(n) || A.current.add(n), a.push({
                                        itemKey: `${n.id.toString()}_${n.reviewStatus.toString()}`,
                                        collection: n
                                    }), n.reviewStatus !== C.PRODUCT_REVIEW_STATUS.PENDING && n.reviewStatus !== C.PRODUCT_REVIEW_STATUS.REJECTED || a.push({
                                        itemKey: `${n.id.toString()}_reviewBanner`,
                                        collection: n,
                                        height: (0, d.getCollectionIntegrityHeight)(n),
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
                                var o = e.collection,
                                    a = e.product,
                                    i = e.allItems,
                                    r = e.reviewBanner,
                                    l = e.collectionId;
                                return o ? r ? (0, k.jsx)(d.CollectionIntegrityBanner, {
                                    collection: o,
                                    onEditCollection: y
                                }) : (0, k.jsx)(g.default, {
                                    collection: o,
                                    onSeeAll: j
                                }) : i ? (0, k.jsx)(g.default, {
                                    allItems: i,
                                    onSeeAll: j
                                }) : a ? (0, k.jsx)(p.default, {
                                    collectionId: l,
                                    product: a,
                                    onCartOpen: n,
                                    onClick: function() {
                                        return function(e, o) {
                                            return (0, v.qplStartProductView)("Collection"), (0, h.logCatalogListDetailClick)({
                                                product: (0, m.unproxy)(e),
                                                catalogContext: (0, f.getProductCatalogContext)(w)
                                            }), t(e, o)
                                        }(a, l)
                                    },
                                    onProductShare: T ? M : null,
                                    onProductDelete: N,
                                    onProductHideShow: R,
                                    theme: "product-of-collection",
                                    canManageCatalog: E
                                }) : null
                            },
                            defaultItemHeight: u.PRODUCT_LIST_ITEM_HEIGHT,
                            keyOrder: c.KeyOrder.INVERSE
                        })
                    })
                })
            };
            var a = o(810466),
                i = o(577407),
                r = n(o(877576)),
                l = n(o(979163)),
                c = o(906416),
                s = o(911558),
                d = o(224247),
                u = o(902011),
                f = o(179677),
                p = n(o(991417)),
                h = o(647435),
                C = o(926464),
                g = n(o(344735)),
                m = o(378776),
                v = o(454964),
                _ = o(667294),
                x = n(o(61407)),
                b = n(o(279781)),
                S = o(494092),
                P = o(853548),
                k = o(785893)
        },
        234459: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleGrievanceOfficerDetailsError = t.handleCustomerCareDetailsError = t.getLegalEntityDetails = t.ComplianceInfoStructuralField = t.ComplianceInfoPrimitiveField = t.ComplianceInfoLoading = t.ComplianceInfoHelpCenterBanner = t.ComplianceInfoGroup = void 0;
            var a = n(o(887757)),
                i = n(o(348926)),
                r = n(o(870473)),
                l = o(451226),
                c = o(125089),
                s = n(o(209222)),
                d = n(o(39357)),
                u = o(192070),
                f = o(208188),
                p = n(o(644178)),
                h = n(o(758927)),
                C = o(96293),
                g = o(558288),
                m = o(71867),
                v = o(548360),
                _ = n(o(156720)),
                x = o(785893),
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
                    o = e.children;
                return (0, x.jsx)(d.default, {
                    title: t,
                    xstyle: m.uiPadding.vert8,
                    children: o
                })
            };
            t.ComplianceInfoPrimitiveField = function(e) {
                var t = e.value,
                    o = e.label,
                    n = e.forceLTR;
                return (0, x.jsxs)(P, {
                    children: [(0, x.jsx)(j, {
                        value: t,
                        forceLTR: n
                    }), (0, x.jsx)(y, {
                        label: o
                    })]
                })
            };
            t.ComplianceInfoStructuralField = function(e) {
                var t = e.valuesMap,
                    o = void 0 === t ? {} : t,
                    n = e.keys,
                    a = void 0 === n ? [] : n,
                    i = e.label,
                    r = a.reduce((function(e, t) {
                        return o[t] ? e.concat(o[t]) : e
                    }), []),
                    l = r.length ? r.join(", ") : S();
                return (0, x.jsxs)(P, {
                    children: [(0, x.jsx)(j, {
                        value: l
                    }), (0, x.jsx)(y, {
                        label: i
                    })]
                })
            };
            var P = function(e) {
                var t = e.children;
                return (0, x.jsx)(s.default, {
                    multiline: !0,
                    restrictSpacing: !0,
                    children: (0, x.jsx)("div", {
                        className: (0, _.default)(m.uiPadding.vert8),
                        children: t
                    })
                })
            };
            t.ComplianceInfoLoading = function() {
                return (0, x.jsx)(f.FlexRow, {
                    align: "center",
                    justify: "center",
                    testid: "compliance-info-loading",
                    children: (0, x.jsx)(p.default, {
                        children: (0, x.jsx)(C.Spinner, {})
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
                    }), " ", (0, x.jsx)(u.ExternalLink, {
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
                T = function() {
                    var e = (0, i.default)(a.default.mark((function e(t) {
                        var o, n;
                        return a.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, c.BusinessProfileCollection.update(t, {
                                        getMerchantCompliance: !0
                                    });
                                case 2:
                                    if (o = e.sent, !(n = k(o))) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", n.legalEntityDetails || void 0);
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
            t.getLegalEntityDetails = T;
            var y = function(e) {
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
                j = function(e) {
                    var t = e.value,
                        o = e.forceLTR,
                        n = void 0 !== o && o,
                        a = h.default.isRTL();
                    return (0, x.jsx)("div", {
                        className: (0, _.default)(b.fieldValue, m.uiMargin.vert3, a && n && b.displayRight),
                        dir: n || !a ? "ltr" : "rtl",
                        "data-testid": "compliance-info-field-value",
                        children: t || S()
                    })
                };
            t.handleCustomerCareDetailsError = function(e, t, o, n) {
                (0, l.existsCustomerCareDetailsContact)(e, t, o, n) || (0, r.default)(v.fbt._("At least one phone number is required. Please provide another phone number before removing this.", null, {
                    hk: "2LGoJd"
                }))
            };
            t.handleGrievanceOfficerDetailsError = function(e, t, o, n) {
                (0, l.existsGrievanceOfficerDetailsContact)(e, t, o, n) || (0, r.default)(v.fbt._("At least one contact method is required. Please provide another contact method first before removing this.", null, {
                    hk: "NXBiy"
                }))
            }
        },
        854671: (e, t, o) => {
            "use strict";
            var n = o(739163).default,
                a = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, o = e.images,
                    a = e.renderFallback,
                    x = e.fallbackMediaData,
                    S = e.fetching,
                    P = e.onClick,
                    k = (0, _.useRef)(null),
                    T = (0, _.useRef)(null),
                    y = (0, _.useRef)(null),
                    j = (0, _.useRef)(null),
                    E = (0, _.useRef)(null),
                    I = (0, _.useState)(null),
                    O = (0, r.default)(I, 2),
                    w = O[0],
                    A = O[1],
                    L = (0, _.useState)(o.filter((function(e) {
                        return e.mediaData.mediaStage === f.MEDIA_DATA_STAGE.RESOLVED
                    })).length),
                    M = (0, r.default)(L, 2),
                    N = M[0],
                    R = M[1],
                    D = (0, _.useState)(!1),
                    B = (0, r.default)(D, 2),
                    H = B[0],
                    W = B[1],
                    F = N === o.length,
                    U = function() {
                        return R((function(e) {
                            return e + 1
                        }))
                    };
                (0, _.useEffect)((function() {
                    var e = null;
                    if (!F && !a) {
                        var t, o, i = T.current;
                        if (!i) return;
                        null === (t = y.current) || void 0 === t || t.controller.abort();
                        var r = (e = new n).signal,
                            s = ((null === (o = y.current) || void 0 === o ? void 0 : o.promise) || Promise.resolve()).then((function() {
                                return (0, g.default)(i, {
                                    opacity: [1, 0]
                                }, {
                                    delay: 75,
                                    duration: 50
                                })
                            })),
                            d = (0, c.default)(s, r).then((function() {
                                if (r.aborted) throw new l.AbortError;
                                W(!0)
                            })).catch((0, l.catchAbort)((function() {
                                (0, g.default)(i, "stop", !0)
                            }))).finally((function() {
                                y.current = null
                            }));
                        y.current = {
                            promise: d,
                            controller: e
                        }
                    }
                    return function() {
                        var t;
                        null === (t = e) || void 0 === t || t.abort()
                    }
                }), [F, a]);
                var V, z, q, G = function() {
                    var e;
                    return (null === (e = k.current) || void 0 === e ? void 0 : e.children) ? k.current.scrollWidth === k.current.offsetWidth ? null : 0 === k.current.scrollLeft ? "next" : k.current.scrollWidth - 1 <= k.current.scrollLeft + k.current.offsetWidth ? "prev" : "both" : null
                };
                if ((0, _.useEffect)((function() {
                        A(G())
                    }), [F]), a && 0 === o.length) return (0, b.jsx)("div", {
                    className: m.default.carousel,
                    dir: "ltr",
                    children: (0, b.jsx)("div", {
                        className: (0, v.default)(m.default.contentContainer, m.default.slidesContainer),
                        children: x && (0, b.jsx)(u.default, {
                            altText: "",
                            mediaData: x,
                            renderFallback: !0,
                            singleSlide: !0
                        })
                    })
                });
                var Y = function() {
                    j.current = null;
                    var e = G();
                    w !== e && A(e)
                };
                if (o.length > 1) {
                    var K = function() {
                            var e = k.current;
                            if (null != e && ("prev" === w || "both" === w)) {
                                for (var t = 0, o = e.scrollLeft + Math.floor(e.offsetWidth / 2), n = e.lastElementChild; n instanceof HTMLElement && 0 === t;) {
                                    var a = n.offsetLeft + Math.floor(n.offsetWidth / 2);
                                    a < o && (t = a - o), n = n.previousElementSibling
                                }
                                0 !== t && e.scrollBy({
                                    left: t,
                                    behavior: "smooth"
                                })
                            }
                        },
                        Z = function() {
                            var e = k.current;
                            if (null != e && ("next" === w || "both" === w)) {
                                for (var t = 0, o = e.scrollLeft + Math.floor(e.offsetWidth / 2), n = e.firstElementChild; n instanceof HTMLElement && 0 === t;) {
                                    var a = n.offsetLeft + Math.floor(n.offsetWidth / 2);
                                    o < a && (t = a - o), n = n.nextElementSibling
                                }
                                0 !== t && e.scrollBy({
                                    left: t,
                                    behavior: "smooth"
                                })
                            }
                        },
                        Q = function() {
                            E.current = null;
                            var e = G();
                            w !== e && A(e)
                        };
                    q = function() {
                        null == E.current && (E.current = window.requestAnimationFrame(Q))
                    }, F && null != w && (V = (0, b.jsx)(s.ChevronButton, {
                        type: s.ButtonType.Prev,
                        onClick: K,
                        onKeyDown: K,
                        disabled: "prev" !== w && "both" !== w,
                        theme: h.RoundTheme.Small,
                        overMedia: !0
                    }), z = (0, b.jsx)(s.ChevronButton, {
                        type: s.ButtonType.Next,
                        onClick: Z,
                        onKeyDown: Z,
                        disabled: "next" !== w && "both" !== w,
                        theme: h.RoundTheme.Small,
                        overMedia: !0
                    }))
                }
                var X = 1 === o.length,
                    J = o.map((function(e, t) {
                        return (0, b.jsx)(u.default, {
                            altText: "",
                            image: e,
                            singleSlide: X,
                            mediaData: e.mediaData,
                            onClick: P,
                            onLoad: U
                        }, t)
                    })),
                    $ = F ? null : (0, b.jsx)("div", {
                        className: (0, v.default)(m.default.contentContainer, m.default.spinnerContainer),
                        children: (0, b.jsx)("div", {
                            className: m.default.spinner,
                            ref: T,
                            children: (0, b.jsx)(C.Spinner, {
                                color: "default",
                                size: 50,
                                stroke: 4
                            })
                        })
                    }),
                    ee = (0, d.cx)((t = {}, (0, i.default)(t, m.default.loaded, !S && F), (0, i.default)(t, m.default.fadeIn, H), (0, i.default)(t, m.default.carousel, !0), t));
                return (0, b.jsxs)("div", {
                    className: ee,
                    dir: "ltr",
                    children: [$, (0, b.jsx)("div", {
                        ref: k,
                        className: (0, v.default)(m.default.contentContainer, m.default.slidesContainer),
                        onScroll: q,
                        children: J
                    }), V, z, (0, b.jsx)(p.default, {
                        onResize: function() {
                            null == j.current && (j.current = window.requestAnimationFrame(Y))
                        }
                    })]
                })
            };
            var i = a(o(859713)),
                r = a(o(963038)),
                l = o(497384),
                c = a(o(704205)),
                s = o(151508),
                d = o(541585),
                u = a(o(602590)),
                f = o(966454),
                p = a(o(408452)),
                h = o(659696),
                C = o(96293),
                g = a(o(931771)),
                m = a(o(198074)),
                v = a(o(518122)),
                _ = o(667294),
                x = a(o(730523)),
                b = o(785893);
            x.default.polyfill()
        },
        602590: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = o(966454),
                i = n(o(142162)),
                r = o(667294),
                l = o(853548),
                c = o(785893),
                s = function(e) {
                    var t = e.mediaData,
                        o = e.altText,
                        n = e.image,
                        s = e.singleSlide,
                        d = e.renderFallback,
                        u = e.onClick,
                        f = e.onLoad,
                        p = e.forwardRef,
                        h = (0, l.useModelValues)(t, ["fullHeight", "fullWidth", "mediaStage", "renderableUrl"]),
                        C = h.fullHeight,
                        g = h.fullWidth,
                        m = h.mediaStage,
                        v = h.renderableUrl,
                        _ = (0, r.useRef)(null),
                        x = (0, r.useRef)(m === a.MEDIA_DATA_STAGE.RESOLVED);
                    (0, r.useEffect)((function() {
                        !f || x.current || d || m !== a.MEDIA_DATA_STAGE.RESOLVED || (f(), x.current = !0)
                    }), [f, d, m]);
                    var b = !!s,
                        S = g && C ? g / C : .8;
                    S < .8 && (S = .8), S > 1.91 && (S = 1.91), S > 1 && !b && (S = 1);
                    var P = {
                            width: b && S < 1 ? 100 * S + "%" : 1 !== S || s ? null : "100%"
                        },
                        k = {
                            paddingTop: `${Math.floor(100/S)}%`
                        },
                        T = {
                            cursor: "" + (u ? "pointer" : "auto")
                        };
                    return (0, c.jsx)("div", {
                        ref: p ? function(e) {
                            return p(e)
                        } : null,
                        className: i.default.slide,
                        style: P,
                        children: (0, c.jsx)("div", {
                            className: i.default.slideInnerContainer,
                            style: k,
                            children: (0, c.jsx)("img", {
                                ref: _,
                                alt: o,
                                src: v,
                                className: i.default.image,
                                style: T,
                                draggable: "false",
                                onClick: function() {
                                    u && _.current && n && u(_.current, n)
                                }
                            })
                        })
                    })
                };
            t.default = s
        },
        462261: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AddAltIcon = function(e) {
                var t, o, n = e.iconXstyle,
                    d = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, s);
                if (f) {
                    var h = f.x,
                        C = void 0 === h ? 0 : h,
                        g = f.y,
                        m = void 0 === g ? 0 : g,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    o = [C, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 24,
                    S = 24;
                null == d && null == u || (b = d, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "add-alt"
                }, p), {}, {
                    children: (0, c.jsx)("svg", {
                        viewBox: null !== (t = o) && void 0 !== t ? t : "0 0 24 24",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(n),
                        version: "1.1",
                        x: "0px",
                        y: "0px",
                        enableBackground: "new 0 0 24 24",
                        xmlSpace: "preserve",
                        children: (0, c.jsx)("path", {
                            fill: "currentColor",
                            d: "M20,13.5h-6.5V20h-2.9v-6.5H4v-2.9h6.5V4h2.9v6.5H20V13.5z"
                        })
                    })
                }))
            };
            var a = n(o(81109)),
                i = n(o(506479)),
                r = o(401304),
                l = n(o(156720)),
                c = o(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        725536: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BusinessAddressIcon = function(e) {
                var t, o, n = e.iconXstyle,
                    d = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, s);
                if (f) {
                    var h = f.x,
                        C = void 0 === h ? 0 : h,
                        g = f.y,
                        m = void 0 === g ? 0 : g,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    o = [C, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 24,
                    S = 24;
                null == d && null == u || (b = d, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "business-address"
                }, p), {}, {
                    children: (0, c.jsxs)("svg", {
                        viewBox: null !== (t = o) && void 0 !== t ? t : "0 0 24 24",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(n),
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
            var a = n(o(81109)),
                i = n(o(506479)),
                r = o(401304),
                l = n(o(156720)),
                c = o(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        141193: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BusinessCategoryIcon = function(e) {
                var t, o, n = e.iconXstyle,
                    d = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, s);
                if (f) {
                    var h = f.x,
                        C = void 0 === h ? 0 : h,
                        g = f.y,
                        m = void 0 === g ? 0 : g,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    o = [C, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 24,
                    S = 24;
                null == d && null == u || (b = d, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "business-category"
                }, p), {}, {
                    children: (0, c.jsxs)("svg", {
                        viewBox: null !== (t = o) && void 0 !== t ? t : "0 0 24 24",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(n),
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
            var a = n(o(81109)),
                i = n(o(506479)),
                r = o(401304),
                l = n(o(156720)),
                c = o(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        80943: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BusinessEmailIcon = function(e) {
                var t, o, n = e.iconXstyle,
                    d = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, s);
                if (f) {
                    var h = f.x,
                        C = void 0 === h ? 0 : h,
                        g = f.y,
                        m = void 0 === g ? 0 : g,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    o = [C, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 24,
                    S = 24;
                null == d && null == u || (b = d, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "business-email"
                }, p), {}, {
                    children: (0, c.jsxs)("svg", {
                        viewBox: null !== (t = o) && void 0 !== t ? t : "0 0 24 24",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(n),
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
            var a = n(o(81109)),
                i = n(o(506479)),
                r = o(401304),
                l = n(o(156720)),
                c = o(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        228855: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BusinessWebsiteIcon = function(e) {
                var t, o, n = e.iconXstyle,
                    d = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, s);
                if (f) {
                    var h = f.x,
                        C = void 0 === h ? 0 : h,
                        g = f.y,
                        m = void 0 === g ? 0 : g,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    o = [C, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 24,
                    S = 24;
                null == d && null == u || (b = d, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "business-website"
                }, p), {}, {
                    children: (0, c.jsx)("svg", {
                        viewBox: null !== (t = o) && void 0 !== t ? t : "0 0 24 24",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(n),
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
            var a = n(o(81109)),
                i = n(o(506479)),
                r = o(401304),
                l = n(o(156720)),
                c = o(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        965293: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CartInterstitialGraphicIcon = function(e) {
                var t, o, n = e.iconXstyle,
                    d = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, s);
                if (f) {
                    var h = f.x,
                        C = void 0 === h ? 0 : h,
                        g = f.y,
                        m = void 0 === g ? 0 : g,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    o = [C, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 116,
                    S = 117;
                null == d && null == u || (b = d, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "cart-interstitial-graphic"
                }, p), {}, {
                    children: (0, c.jsxs)("svg", {
                        viewBox: null !== (t = o) && void 0 !== t ? t : "0 0 117 116",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(n),
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
            var a = n(o(81109)),
                i = n(o(506479)),
                r = o(401304),
                l = n(o(156720)),
                c = o(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        299297: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FbshopsIcon = function(e) {
                var t, o, n = e.iconXstyle,
                    d = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, s);
                if (f) {
                    var h = f.x,
                        C = void 0 === h ? 0 : h,
                        g = f.y,
                        m = void 0 === g ? 0 : g,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    o = [C, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 12,
                    S = 120;
                null == d && null == u || (b = d, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "fbshops"
                }, p), {}, {
                    children: (0, c.jsxs)("svg", {
                        viewBox: null !== (t = o) && void 0 !== t ? t : "0 0 120 12",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(n),
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
            var a = n(o(81109)),
                i = n(o(506479)),
                r = o(401304),
                l = n(o(156720)),
                c = o(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        663318: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LogoInstagramColorIcon = function(e) {
                var t, o, n = e.iconXstyle,
                    d = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, s);
                if (f) {
                    var h = f.x,
                        C = void 0 === h ? 0 : h,
                        g = f.y,
                        m = void 0 === g ? 0 : g,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    o = [C, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 22,
                    S = 24;
                null == d && null == u || (b = d, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "logo-instagram-color"
                }, p), {}, {
                    children: (0, c.jsxs)("svg", {
                        viewBox: null !== (t = o) && void 0 !== t ? t : "0 0 24 22",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(n),
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
            var a = n(o(81109)),
                i = n(o(506479)),
                r = o(401304),
                l = n(o(156720)),
                c = o(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        264860: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SecurityShieldIcon = function(e) {
                var t, o, n = e.iconXstyle,
                    d = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, s);
                if (f) {
                    var h = f.x,
                        C = void 0 === h ? 0 : h,
                        g = f.y,
                        m = void 0 === g ? 0 : g,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    o = [C, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 74,
                    S = 64;
                null == d && null == u || (b = d, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "security-shield"
                }, p), {}, {
                    children: (0, c.jsx)("svg", {
                        viewBox: null !== (t = o) && void 0 !== t ? t : "0 0 64 74",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(n),
                        version: "1.1",
                        children: (0, c.jsx)("path", {
                            d: "M0,8.22222222 C12.057971,8.22222222 22.7246377,5.48148148 32,0 C41.2753623,5.48148148 51.942029,8.22222222 64,8.22222222 L64,32.8888889 C64,52.0740741 53.3333333,65.7777778 32,74 C10.6666667,65.7777778 0,52.0740741 0,32.8888889 C0,16.4444444 0,8.22222222 0,8.22222222 Z",
                            fill: "currentColor",
                            fillRule: "nonzero"
                        })
                    })
                }))
            };
            var a = n(o(81109)),
                i = n(o(506479)),
                r = o(401304),
                l = n(o(156720)),
                c = o(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        415443: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ViewOnceSenderNuxIcon = function(e) {
                var t, o, n = e.iconXstyle,
                    d = e.height,
                    u = e.width,
                    f = e.viewBox,
                    p = (0, i.default)(e, s);
                if (f) {
                    var h = f.x,
                        C = void 0 === h ? 0 : h,
                        g = f.y,
                        m = void 0 === g ? 0 : g,
                        v = f.width,
                        _ = void 0 === v ? 0 : v,
                        x = f.height;
                    o = [C, m, _, void 0 === x ? 0 : x].join(" ")
                }
                var b = 168,
                    S = 198;
                null == d && null == u || (b = d, S = u);
                return (0, c.jsx)(r.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "view-once-sender-nux"
                }, p), {}, {
                    children: (0, c.jsxs)("svg", {
                        viewBox: null !== (t = o) && void 0 !== t ? t : "0 0 198 168",
                        height: b,
                        width: S,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, l.default)(n),
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
            var a = n(o(81109)),
                i = n(o(506479)),
                r = o(401304),
                l = n(o(156720)),
                c = o(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        584973: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleTooFewSubgroups = t.handleRemoveSubgroup = void 0;
            var a = n(o(887757)),
                i = n(o(348926)),
                r = n(o(81109)),
                l = n(o(963038)),
                c = o(202908),
                s = o(877407),
                d = o(896674),
                u = o(442801),
                f = o(430888),
                p = o(990055),
                h = o(208188),
                C = o(628707),
                g = o(558288),
                m = o(71867),
                v = n(o(915725)),
                _ = o(548360),
                x = n(o(156720)),
                b = n(o(345042)),
                S = o(785893),
                P = {
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
                k = function(e) {
                    var t, o = e.removeDisclaimer,
                        n = e.removeParticipantOption,
                        a = void 0 !== n && n,
                        i = e.handleRemove,
                        r = (0, b.default)(!1),
                        c = (0, l.default)(r, 2),
                        d = c[0],
                        u = c[1],
                        p = _.fbt._("Remove group from community?", null, {
                            hk: "1kAakd"
                        });
                    if (a) {
                        var v = (0, S.jsx)("div", {
                                "data-testid": "checkbox-remove-orphan-members",
                                className: (0, x.default)(P.checkbox, m.uiMargin.end10),
                                children: (0, S.jsx)(s.CheckBox, {
                                    onChange: u,
                                    checked: d,
                                    id: "checkbox-remove-orphan-members"
                                })
                            }),
                            k = _.fbt._("Remove group participants", null, {
                                hk: "2jEii2"
                            });
                        t = (0, S.jsxs)(S.Fragment, {
                            children: [(0, S.jsx)(g.TextDiv, {
                                xstyle: m.uiPadding.bottom20,
                                theme: "muted",
                                children: o
                            }), (0, S.jsxs)(h.FlexRow, {
                                xstyle: [P.checkboxContainer, m.uiPadding.top20, m.uiMargin.end0],
                                children: [v, k]
                            })]
                        })
                    }
                    return (0, S.jsx)(f.ConfirmPopup, {
                        onOK: function() {
                            return i(d)
                        },
                        okText: _.fbt._("Remove", null, {
                            hk: "3xUR13"
                        }),
                        onCancel: function() {
                            return C.ModalManager.close()
                        },
                        title: p,
                        children: a ? t : o
                    })
                },
                T = function(e, t, o, n) {
                    var a = _.fbt._('A community must have at least 1 group. You can remove "{group_name}" after adding another group to this community.', [_.fbt._param("group_name", (0, S.jsx)(p.EmojiText, {
                            text: e
                        }))], {
                            hk: "1ci2bj"
                        }),
                        i = null != o ? _.fbt._('A community must have at least 1 group. You can remove "{group_name}" after a community admin from "{community_name}" adds another group to the community.', [_.fbt._param("group_name", (0, S.jsx)(p.EmojiText, {
                            text: e
                        })), _.fbt._param("community_name", (0, S.jsx)(p.EmojiText, {
                            text: o
                        }))], {
                            hk: "1amNJ1"
                        }) : _.fbt._('A community must have at least 1 group. You can remove "{group_name}" after a community admin adds another group to this community.', [_.fbt._param("group_name", (0, S.jsx)(p.EmojiText, {
                            text: e
                        }))], {
                            hk: "3BhBjQ"
                        });
                    C.ModalManager.open((0, S.jsx)(f.ConfirmPopup, (0, r.default)((0, r.default)({
                        testid: "min-subgroup-count-popup",
                        onOK: function() {
                            return C.ModalManager.close()
                        }
                    }, t && {
                        cancelText: _.fbt._("Add group", null, {
                            hk: "3Wkqmm"
                        }),
                        onCancel: n
                    }), {}, {
                        title: _.fbt._("Cannot remove group from community", null, {
                            hk: "3AsH6T"
                        }),
                        children: t ? a : i
                    })))
                };
            t.handleTooFewSubgroups = T;
            t.handleRemoveSubgroup = function(e) {
                var t, o = e.parentId,
                    n = e.currentSubgroupCount,
                    r = e.removedSubgroupWid,
                    l = e.removedSubgroupTitle,
                    s = e.setLoading,
                    f = e.iAmCommunityAdmin,
                    h = void 0 === f || f,
                    g = null === (t = c.ChatCollection.get(o)) || void 0 === t ? void 0 : t.formattedTitle;
                if (n <= 2 && !(0, u.noSubgroupRequirementEnabled)()) T(l, h, g, (function() {
                    C.ModalManager.close(), d.Cmd.openCommunityHomeManageGroups(o)
                }));
                else {
                    var m, x = function() {
                        var e = (0, i.default)(a.default.mark((function e() {
                            var t, n = arguments;
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = n.length > 0 && void 0 !== n[0] && n[0], C.ModalManager.close(), s(!0), e.next = 5, (0, v.default)(o, [r], t);
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
                    if (h) return m = _.fbt._('You can remove the "{group_title}" group from the community. You can also remove the group and its participants who aren\'t part of other groups.', [_.fbt._param("group_title", (0, S.jsx)(p.EmojiText, {
                        text: l
                    }))], {
                        hk: "2CXAM6"
                    }), void C.ModalManager.open((0, S.jsx)(k, {
                        removeDisclaimer: m,
                        handleRemove: x,
                        removeParticipantOption: !0
                    }));
                    m = null != g ? _.fbt._('"{group_title}" will no longer be a part of this community "{community_title}." Anyone in this group will still be able to find it from their chats to send messages and make calls.', [_.fbt._param("group_title", (0, S.jsx)(p.EmojiText, {
                        text: l
                    })), _.fbt._param("community_title", (0, S.jsx)(p.EmojiText, {
                        text: g
                    }))], {
                        hk: "p3q2"
                    }) : _.fbt._('"{group_title}" will no longer be a part of this community. Anyone in this group will still be able to find it from their chats to send messages and make calls.', [_.fbt._param("group_title", (0, S.jsx)(p.EmojiText, {
                        text: l
                    }))], {
                        hk: "1iKEHi"
                    }), C.ModalManager.open((0, S.jsx)(k, {
                        removeDisclaimer: m,
                        handleRemove: x
                    }))
                }
            }
        },
        638396: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, o = (0, _.useFlow)(b.Select),
                    n = (0, r.default)(o, 2),
                    S = n[0],
                    P = n[1],
                    k = (0, v.useRef)([]),
                    T = (0, v.useRef)([]),
                    y = function() {
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
                if (null == P.step) return null;
                switch (P.step) {
                    case b.Select:
                        var j = function() {
                                var e = (0, i.default)(a.default.mark((function e(t, o) {
                                    return a.default.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, y(t);
                                            case 2:
                                                t.active ? s.ComposeBoxActions.paste(t, o) : (t.setComposeContents({
                                                    text: o
                                                }), c.Cmd.openChatFromUnread(t).then((function(e) {
                                                    e && s.ComposeBoxActions.focus(t)
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
                                var t = (0, i.default)(a.default.mark((function t(o) {
                                    var n;
                                    return a.default.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (T.current = o, 1 !== o.length) {
                                                    t.next = 9;
                                                    break
                                                }
                                                return n = o[0], t.next = 5, j(n, e.text);
                                            case 5:
                                                P.end(), window.innerWidth <= u.LAYOUT_2COLUMNS_MAX_WIDTH && d.DrawerManager.closeDrawerRight(), t.next = 10;
                                                break;
                                            case 9:
                                                P.push(b.TextMessage);
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
                        t = (0, x.jsx)(f.SelectModal, {
                            title: e.title || m.fbt._("Send message to", null, {
                                hk: "2kkuQs"
                            }),
                            listType: f.ListType.CHAT_SELECT_MODAL,
                            getInitialItems: function() {
                                return k.current
                            },
                            maxItems: C.MULTICAST_LIMIT_GLOBAL,
                            onConfirm: E,
                            onCancel: function() {
                                return P.end()
                            },
                            onSelectionChanged: function(e, t, o) {
                                k.current = o
                            },
                            singleSelectionFooterType: p.FooterType.NEXT,
                            multipleSelectionFooterType: p.FooterType.NEXT
                        });
                        break;
                    case b.TextMessage:
                        t = (0, x.jsx)(g.default, {
                            defaultText: e.text,
                            title: e.title || m.fbt._("Send message to", null, {
                                hk: "2kkuQs"
                            }),
                            onSend: function(e, t) {
                                return function(e, t, o) {
                                    e.forEach(function() {
                                        var e = (0, i.default)(a.default.mark((function e(n) {
                                            return a.default.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, y(n);
                                                    case 2:
                                                        c.Cmd.once("ui_idle", (function() {
                                                            (0, h.sendTextMsgToChat)(n, t, {
                                                                linkPreview: o
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
                                    }()), P.end()
                                }(T.current, e, t)
                            },
                            onBack: function() {
                                return P.pop()
                            }
                        })
                }
                return (0, x.jsx)(S, {
                    flow: P,
                    children: t
                })
            };
            var a = n(o(887757)),
                i = n(o(348926)),
                r = n(o(963038)),
                l = o(994356),
                c = o(896674),
                s = o(515918),
                d = o(875058),
                u = o(295769),
                f = o(948651),
                p = o(621783),
                h = o(626674),
                C = o(828581),
                g = n(o(525417)),
                m = o(548360),
                v = o(667294),
                _ = o(520188),
                x = o(785893),
                b = o(76672).Mirrored(["Select", "TextMessage"])
        },
        706582: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(o(887757)),
                i = n(o(348926)),
                r = n(o(963038)),
                l = n(o(347999)),
                c = n(o(746251)),
                s = o(213436),
                d = o(983557),
                u = o(821194),
                f = o(435809),
                p = o(548360),
                h = o(667294),
                C = o(853548),
                g = o(785893),
                m = function(e) {
                    var t = (0, C.useModelValues)((0, l.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["subject"]),
                        o = (0, h.useState)(t.subject),
                        n = (0, r.default)(o, 2),
                        m = n[0],
                        v = n[1],
                        _ = function() {
                            var t = (0, i.default)(a.default.mark((function t(o) {
                                return a.default.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return o.stopPropagation(), o.preventDefault(), t.prev = 2, t.next = 5, e.onOK(m, e.chat);
                                        case 5:
                                            return t.prev = 5, v(""), t.finish(5);
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [2, , 5, 8]
                                ])
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        x = m.trim().length > 0,
                        b = e.onOK ? (0, g.jsx)(c.default, {
                            testid: "popup-controls-ok",
                            type: "primary",
                            onClick: _,
                            disabled: !x,
                            children: p.fbt._("Save", null, {
                                hk: "3wTUdX"
                            })
                        }) : null,
                        S = e.onCancel ? (0, g.jsx)(c.default, {
                            testid: "popup-controls-cancel",
                            type: "secondary",
                            onClick: function(t) {
                                var o;
                                t.stopPropagation(), t.preventDefault(), null === (o = e.onCancel) || void 0 === o || o.call(e)
                            },
                            children: p.fbt._("Cancel", null, {
                                hk: "H0gNq"
                            })
                        }) : null,
                        P = (0, g.jsxs)(f.ButtonGroup, {
                            direction: "horizontal",
                            align: "end",
                            children: [S, b]
                        }),
                        k = (0, g.jsx)(d.RichTextField, {
                            testid: "text-message-modal-text-unput",
                            value: m,
                            maxLength: u.ServerProps.maxSubject,
                            onChange: function(e) {
                                var t = e.text;
                                v(t)
                            },
                            validate: function(e) {
                                return !(!e || !e.trim())
                            },
                            supportsEmoji: !0,
                            multiline: !0,
                            spellCheck: !0,
                            showRemaining: !0,
                            focusOnMount: !0,
                            theme: "small",
                            textFormatEnabled: !0,
                            editable: e.editable,
                            editRestrictionInfo: e.editRestrictionInfo
                        });
                    return (0, g.jsxs)(s.Modal, {
                        title: p.fbt._("Name Your Group", null, {
                            hk: "23gkmL"
                        }),
                        actions: P,
                        children: [e.subtext, k]
                    })
                },
                v = (0, h.forwardRef)(m);
            t.default = v
        },
        309818: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact,
                    o = e.getZoomNode,
                    n = e.animateBorderRadius,
                    I = e.animateSquircle,
                    O = void 0 !== I && I,
                    w = (0, k.useContactValues)(e.contact.id, [s.getFormattedUser, l.getId]),
                    A = (0, a.default)(w, 2),
                    L = (A[0], A[1]),
                    M = (0, T.useModelValues)(e.profilePicThumb, ["imgFull"]).imgFull,
                    N = (0, P.useState)(M),
                    R = (0, a.default)(N, 2),
                    D = R[0],
                    B = R[1];
                null != M && D !== M && B(M);
                var H = (0, P.useState)((function() {
                        return v.default.isPSA(e.contact.id) ? {
                            visibility: "visible",
                            transform: "translateX(0px) translateY(0px) scale(1)",
                            borderRadius: "0%",
                            transition: "transform 500ms cubic-bezier(.1,.82,.25,1),\n                  border-radius 500ms cubic-bezier(.1,.82,.25,1)"
                        } : {
                            visibility: "hidden"
                        }
                    })),
                    W = (0, a.default)(H, 2),
                    F = W[0],
                    U = W[1],
                    V = (0, P.useState)((function() {
                        return v.default.isPSA(e.contact.id) ? {
                            width: 640,
                            height: 641
                        } : null
                    })),
                    z = (0, a.default)(V, 2),
                    q = z[0],
                    G = z[1],
                    Y = (0, P.useRef)(!1),
                    K = (0, P.useRef)(),
                    Z = (0, P.useRef)();
                (0, P.useEffect)((function() {
                    var e = Z.current;
                    Z.current = null, null == e || e()
                }));
                var Q, X, J = (0, y.default)((function() {
                    if (!Y.current) {
                        var e;
                        if (Y.current = !0, o((function(t) {
                                e = t
                            })), !e) return f.ModalManager.closeMedia();
                        var t = K.current;
                        if (t) {
                            (n || O) && (t.style.transition = (O ? "clip-path" : "border-radius") + " 500ms cubic-bezier(.1,.82,.25,1)", O ? t.style.clipPath = "var(--squircle-polygon)" : t.style.borderRadius = "50%");
                            var a = (0, i.default)(e, "start"),
                                r = t.getBoundingClientRect(),
                                l = a.getBoundingClientRect(),
                                c = l.top - r.top,
                                s = l.left - r.left,
                                d = a.clientWidth / t.clientWidth;
                            (0, g.default)(t, {
                                translateX: [s, 0],
                                translateY: [c, 0],
                                scale: [d, 1]
                            }, {
                                duration: 200,
                                easing: [.1, .82, .25, 1]
                            }).then((function() {
                                f.ModalManager.closeMedia()
                            }))
                        }
                    }
                }));
                (0, P.useEffect)((function() {
                    M || J()
                }), [M, J]), v.default.isPSA(L) ? (Q = (0, j.jsx)(m.WaChatPsaIcon, {
                    iconXstyle: E.avatarDefaultPSALarge
                }), X = (0, j.jsx)(m.WaChatPsaIcon, {
                    iconXstyle: E.avatarDefaultPSASmall
                })) : D && (Q = (0, j.jsx)(d.default, {
                    src: D,
                    hasPrivacyChecks: !0,
                    onLoad: function(e) {
                        var t = e.currentTarget;
                        G({
                            width: t.naturalWidth,
                            height: t.naturalHeight
                        }), Z.current = function() {
                            return o((function(e) {
                                var o = t.getBoundingClientRect(),
                                    a = e.getBoundingClientRect(),
                                    i = a.top - o.top,
                                    r = {
                                        visibility: "hidden",
                                        transform: `translateX(${a.left-o.left}px) translateY(${i}px) scale(${e.clientWidth/t.clientWidth})`,
                                        transition: "transform 0s",
                                        borderRadius: void 0
                                    };
                                n && (r.borderRadius = "50%"), U(r), Z.current = function() {
                                    var e = {
                                        transform: "translateX(0px) translateY(0px) scale(1)",
                                        transition: "transform 500ms cubic-bezier(.1,.82,.25,1)"
                                    };
                                    n && (e = {
                                        transform: "translateX(0px) translateY(0px) scale(1)",
                                        borderRadius: "0%",
                                        transition: "transform 500ms cubic-bezier(.1,.82,.25,1),\n                                       border-radius 500ms cubic-bezier(.1,.82,.25,1)"
                                    }), U(e)
                                }
                            }))
                        }
                    },
                    className: x.default.profileViewerImg
                }), X = (0, j.jsx)(c.DetailImage, {
                    id: L,
                    size: 40,
                    shape: O ? c.DetailImageShape.Squircle : null
                }));
                return (0, j.jsx)(C.UIE, {
                    displayName: "PhotoViewer",
                    escapable: !0,
                    requestDismiss: J,
                    children: (0, j.jsxs)("div", {
                        className: (0, S.default)("overlay", x.default.container),
                        onWheel: function(e) {
                            Math.abs(e.deltaY) > 3 && J()
                        },
                        onClick: J,
                        children: [(0, j.jsxs)("div", {
                            className: x.default.headerContainer,
                            children: [(0, j.jsx)("div", {
                                className: x.default.profileThumb,
                                children: (0, j.jsx)(r.default, {
                                    image: X,
                                    theme: "plain",
                                    primary: (0, j.jsx)(p.Name, {
                                        contact: t,
                                        selectable: !0
                                    })
                                })
                            }), (0, j.jsx)("div", {
                                className: x.default.mediaPanelTools,
                                children: (0, j.jsx)(u.MenuBar, {
                                    theme: "strong",
                                    children: (0, j.jsx)(u.MenuBarItem, {
                                        testid: "btn-close",
                                        icon: (0, j.jsx)(_.XViewerIcon, {}),
                                        title: b.fbt._("Close", null, {
                                            hk: "19Jpec"
                                        }),
                                        onClick: J
                                    })
                                }, "media-panel-header")
                            })]
                        }), (0, j.jsx)("div", {
                            className: x.default.profileContainer,
                            dir: "ltr",
                            children: (0, j.jsx)("div", {
                                className: x.default.media,
                                children: (0, j.jsx)(h.default, {
                                    type: "scaleDown",
                                    size: q,
                                    children: (0, j.jsx)("div", {
                                        className: x.default.profileViewer,
                                        ref: K,
                                        style: F,
                                        children: Q
                                    })
                                })
                            })
                        })]
                    })
                })
            };
            var a = n(o(963038)),
                i = n(o(347999)),
                r = n(o(799328)),
                l = o(65001),
                c = o(207826),
                s = o(135275),
                d = n(o(289856)),
                u = o(199479),
                f = o(628707),
                p = o(246009),
                h = n(o(528851)),
                C = o(776097),
                g = n(o(931771)),
                m = o(962949),
                v = n(o(560911)),
                _ = o(714771),
                x = n(o(253168)),
                b = o(548360),
                S = n(o(518122)),
                P = o(667294),
                k = (n(o(156720)), o(302304)),
                T = o(853548),
                y = n(o(206827)),
                j = o(785893),
                E = {
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
        897147: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.profilePicThumb,
                    o = e.size,
                    n = !t.canSet() && !t.canDelete(),
                    C = (0, f.useState)(!1),
                    g = (0, a.default)(C, 2),
                    m = g[0],
                    v = g[1],
                    _ = (0, p.default)();
                return (0, h.jsx)(d.PhotoPickerLoadable, {
                    type: s.PhotoPickerType.PROFILE,
                    id: t.id,
                    attachToChat: !1,
                    pending: m,
                    startImage: t.imgFull,
                    readOnly: n,
                    onImageSet: function(t, o) {
                        var n, a = e.profilePicThumb;
                        v(!0), n = t && o ? (0, u.setProfilePic)(a, t, o) : (0, u.deleteProfilePic)(a), (0, l.default)(n, _).catch((0, r.filteredCatch)(c.ActionError, (function() {
                            __LOG__(3)`ProfileDrawer: failed to set/delete profile image`
                        }))).catch((0, i.catchAbort)((function() {}))).finally((function() {
                            v(!1)
                        }))
                    },
                    size: o
                })
            };
            var a = n(o(963038)),
                i = o(497384),
                r = o(63520),
                l = n(o(704205)),
                c = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = C(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, i, r) : n[i] = e[i]
                        } n.default = e, o && o.set(e, n);
                    return n
                }(o(576498)),
                s = o(942518),
                d = o(639017),
                u = o(176273),
                f = o(667294),
                p = n(o(672900)),
                h = o(785893);

            function C(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (C = function(e) {
                    return e ? o : t
                })(e)
            }
        },
        525417: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(o(963038)),
                i = n(o(211430)),
                r = n(o(442435)),
                l = n(o(237120)),
                c = n(o(686866)),
                s = o(58985),
                d = o(990055),
                u = o(704250),
                f = n(o(73098)),
                p = o(213436),
                h = o(983557),
                C = o(659696),
                g = o(105931),
                m = o(776097),
                v = o(667294),
                _ = n(o(156720)),
                x = o(263157),
                b = o(785893),
                S = {
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh",
                    height: "cctpw5f5",
                    paddingBottom: "bxcbqipq",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    backgroundColor: "rv6u8h8g"
                },
                P = {
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
                T = {
                    position: "lhggkp7q",
                    end: "druapeav",
                    bottom: "k2umuq2k"
                },
                y = function(e, t) {
                    var o = e.defaultText,
                        n = e.title,
                        y = e.onSend,
                        j = e.onBack,
                        E = (0, v.useState)(o),
                        I = (0, a.default)(E, 2),
                        O = I[0],
                        w = I[1],
                        A = (0, x.findFirstWebLink)(O),
                        L = (0, x.useLinkPreview)(A),
                        M = L.linkPreview,
                        N = L.clearLinkPreview,
                        R = n ? (0, b.jsx)(d.EmojiText, {
                            text: n,
                            direction: "auto",
                            titlify: !0,
                            ellipsify: !0
                        }) : null,
                        D = M || {},
                        B = D.title,
                        H = D.canonicalUrl,
                        W = D.description,
                        F = D.thumbnail,
                        U = M ? (0, b.jsx)(m.UIE, {
                            displayName: "ComposeBoxLinkPreview",
                            escapable: !0,
                            requestDismiss: N,
                            children: (0, b.jsx)(i.default, {
                                onOmit: N,
                                children: (0, b.jsx)(f.default, {
                                    title: B,
                                    compose: !0,
                                    canonicalUrl: H,
                                    description: W,
                                    thumbnailJpeg: F,
                                    isLoading: !1
                                })
                            })
                        }) : null;
                    return (0, b.jsx)(p.Modal, {
                        ref: t,
                        type: p.ModalTheme.Box,
                        children: (0, b.jsxs)(l.default, {
                            children: [(0, b.jsx)(s.DrawerHeader, {
                                type: s.DRAWER_HEADER_TYPE.POPUP,
                                onBack: j,
                                children: R
                            }), (0, b.jsx)(c.default, {
                                children: (0, b.jsxs)(u.HotKeys, {
                                    className: (0, _.default)(S),
                                    children: [(0, b.jsx)("div", {
                                        className: (0, _.default)(P),
                                        children: (0, b.jsx)(h.RichTextField, {
                                            testid: "text-message-modal-text-unput",
                                            value: O,
                                            maxLength: r.default.MAX_TXT_MSG_SIZE,
                                            onChange: function(e) {
                                                var t = e.text;
                                                w(t)
                                            },
                                            supportsEmoji: !0,
                                            multiline: !0,
                                            spellCheck: !0,
                                            showRemaining: !0,
                                            focusOnMount: !0,
                                            theme: "small",
                                            textFormatEnabled: !0
                                        })
                                    }), U]
                                })
                            }), (0, b.jsx)("div", {
                                className: (0, _.default)(k),
                                children: (0, b.jsx)("div", {
                                    className: (0, _.default)(T),
                                    children: (0, b.jsx)(C.Round, {
                                        large: !0,
                                        onClick: function() {
                                            O.length && y(O, M)
                                        },
                                        children: (0, b.jsx)(g.SendIcon, {
                                            directional: !0
                                        })
                                    })
                                })
                            })]
                        })
                    })
                },
                j = (0, v.forwardRef)(y);
            t.default = j
        },
        639835: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.testid,
                    o = e.Icon,
                    n = e.iconWidth,
                    f = e.iconHeight,
                    p = e.label,
                    h = e.disabled,
                    C = e.xstyle,
                    g = e.onClick,
                    m = function() {
                        var e = (0, c.useState)(!1),
                            t = (0, a.default)(e, 2),
                            o = t[0],
                            n = t[1],
                            i = (0, c.useCallback)((function() {
                                n(!0)
                            }), []),
                            r = (0, c.useCallback)((function() {
                                n(!1)
                            }), []);
                        return {
                            isHovered: o,
                            onMouseEnter: i,
                            onMouseLeave: r
                        }
                    }(),
                    v = m.isHovered,
                    _ = m.onMouseEnter,
                    x = m.onMouseLeave,
                    b = (0, d.jsx)(o, {
                        directional: !0,
                        color: r.SvgColorProp.TEAL,
                        width: n,
                        height: f
                    });
                return (0, d.jsxs)("div", {
                    className: (0, s.default)(u.button, h && u.disabled, C),
                    onMouseEnter: _,
                    onMouseLeave: x,
                    children: [(0, d.jsx)(i.Round, {
                        inverted: !0,
                        onClick: g,
                        disabled: h,
                        testid: t,
                        hideBackground: h || !v,
                        children: b
                    }), (0, d.jsx)(l.default, {
                        xstyle: u.label,
                        disabled: h,
                        testid: t,
                        onClick: g,
                        children: p
                    })]
                })
            };
            var a = n(o(963038)),
                i = o(659696),
                r = o(401304),
                l = n(o(83938)),
                c = o(667294),
                s = n(o(156720)),
                d = o(785893),
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
        143395: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.text,
                    o = e.secondary,
                    n = e.Icon,
                    h = e.href,
                    C = e.linkedAccountType,
                    g = e.onClick,
                    m = e.rowTheme,
                    v = e.hasCoverPhoto,
                    _ = (0, u.useContext)(r.DrawerContext),
                    x = (0, c.getProductCatalogSessionId)(_);
                return (0, u.useEffect)((function() {
                    (0, a.logLinkedAccountImpression)(x, C, v)
                }), [x, C, v]), (0, f.jsx)(d.default, {
                    testid: "social-row",
                    onClick: function() {
                        if (void 0 !== h) {
                            var e = (0, s.getWebsiteLink)(h);
                            l.default.open(e), null == g || g()
                        }
                    },
                    disabled: void 0 === h,
                    xstyle: p.button,
                    children: (0, f.jsx)(i.default, {
                        image: n,
                        primary: t,
                        secondary: o,
                        theme: m,
                        idle: void 0 === h
                    })
                })
            };
            var a = o(86243),
                i = n(o(799328)),
                r = o(810466),
                l = n(o(830226)),
                c = o(179677),
                s = o(823113),
                d = n(o(83938)),
                u = o(667294),
                f = (n(o(156720)), o(785893)),
                p = {
                    button: {
                        width: "ln8gz9je"
                    }
                }
        },
        761649: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, o = e.showEditHint,
                    n = e.businessProfile,
                    v = e.sectionTheme,
                    _ = void 0 === v ? "no-padding" : v,
                    x = e.rowTheme,
                    b = void 0 === x ? "linked-account" : x,
                    S = (0, C.useModelValues)(n, ["fbPage", "igProfessional"]),
                    P = S.fbPage,
                    k = S.igProfessional,
                    T = (0, u.getProductCatalogSessionId)((0, h.useContext)(r.DrawerContext)),
                    y = [];
                if (null == P ? void 0 : P.displayName) {
                    var j = P.likes ? p.fbt._({
                        "*": "Facebook • {count} Likes",
                        _1: "Facebook • 1 Like"
                    }, [p.fbt._plural(P.likes, "count")], {
                        hk: "4fuveG"
                    }) : p.fbt._("Facebook", null, {
                        hk: "2PcUTa"
                    });
                    y.push((0, g.jsx)(i.default, {
                        Icon: (0, g.jsx)(s.LogoFacebookRoundIcon, {
                            iconXstyle: m.iconColor
                        }),
                        text: P.displayName,
                        secondary: j,
                        href: `https://www.facebook.com/${P.id}`,
                        rowTheme: b,
                        onClick: function() {
                            (0, a.logLinkedFbClick)(T, P.likes, !!n.coverPhoto)
                        },
                        linkedAccountType: f.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.FACEBOOK,
                        hasCoverPhoto: !!n.coverPhoto
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
                    y.push((0, g.jsx)(i.default, {
                        Icon: (0, g.jsx)(d.LogoInstagramColorIcon, {}),
                        text: `@${k.handle}`,
                        secondary: E,
                        href: `https://www.instagram.com/${k.handle}`,
                        rowTheme: b,
                        onClick: function() {
                            (0, a.logLinkedIgClick)(T, k.followers, !!n.coverPhoto)
                        },
                        linkedAccountType: f.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.INSTAGRAM,
                        hasCoverPhoto: !!n.coverPhoto
                    }, "ig"))
                }
                if (0 === y.length) return null;
                if (!0 === o) {
                    var I = p.fbt._("Facebook and Instagram handles can only be edited from the app on your mobile device.", null, {
                        hk: "3JNYRt"
                    });
                    t = (0, g.jsx)(c.EmojiText, {
                        direction: "inherit",
                        xstyle: m.infoText,
                        text: I.toString()
                    })
                }
                return (0, g.jsxs)(l.default, {
                    theme: _,
                    children: [y.map((function(e) {
                        return e
                    })), t]
                })
            };
            var a = o(86243),
                i = n(o(143395)),
                r = o(810466),
                l = n(o(39357)),
                c = o(990055),
                s = o(761623),
                d = o(663318),
                u = o(179677),
                f = o(447853),
                p = o(548360),
                h = o(667294),
                C = (n(o(156720)), o(853548)),
                g = o(785893),
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
        86243: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.logCatalogClick = function(e, t, o) {
                c({
                    viewBusinessProfileAction: l.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_CATALOG_ICON,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                })
            }, t.logEmailClick = function(e, t, o) {
                c({
                    viewBusinessProfileAction: l.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_EMAIL,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                })
            }, t.logForwardClick = function(e, t, o) {
                c({
                    viewBusinessProfileAction: l.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_FORWARD,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                })
            }, t.logHoursClick = function(e, t, o) {
                c({
                    viewBusinessProfileAction: l.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_HOURS,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                })
            }, t.logLinkedAccountImpression = function(e, t, o) {
                c({
                    viewBusinessProfileAction: l.VIEW_BUSINESS_PROFILE_ACTION.ACTION_APP_IMPRESSION,
                    linkedAccount: t,
                    catalogSessionId: e,
                    isProfileLinked: !0,
                    hasCoverPhoto: o
                })
            }, t.logLinkedFbClick = function(e, t, o) {
                c({
                    viewBusinessProfileAction: l.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_APP_LINK,
                    linkedAccount: l.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.FACEBOOK,
                    catalogSessionId: e,
                    bizFbSize: s(t),
                    isProfileLinked: !0,
                    hasCoverPhoto: o
                })
            }, t.logLinkedIgClick = function(e, t, o) {
                c({
                    viewBusinessProfileAction: l.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_APP_LINK,
                    linkedAccount: l.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.INSTAGRAM,
                    catalogSessionId: e,
                    bizIgSize: s(t),
                    isProfileLinked: !0,
                    hasCoverPhoto: o
                })
            }, t.logLocationClick = function(e, t, o) {
                c({
                    viewBusinessProfileAction: l.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_LOCATION,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                })
            }, t.logMessageClick = function(e, t, o) {
                c({
                    viewBusinessProfileAction: l.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_MESSAGE,
                    catalogSessionId: e,
                    hasCoverPhoto: o
                })
            }, t.logProfileExit = function(e, t, o, n) {
                c({
                    viewBusinessProfileAction: l.VIEW_BUSINESS_PROFILE_ACTION.ACTION_EXIT,
                    catalogSessionId: e,
                    scrollDepth: t,
                    isProfileLinked: o,
                    hasCoverPhoto: n
                })
            }, t.logProfileImpression = function(e, t, o, n) {
                (0, i.smbBizProfileLoggingEnabled)() ? new r.ViewBusinessProfileWamEvent({
                    viewBusinessProfileAction: l.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION,
                    catalogSessionId: e,
                    profileEntryPoint: t,
                    isProfileLinked: o,
                    hasCoverPhoto: n
                }).commit(): new r.ViewBusinessProfileWamEvent({
                    viewBusinessProfileAction: l.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION,
                    catalogSessionId: e,
                    isProfileLinked: o,
                    hasCoverPhoto: n
                }).commit()
            }, t.logShopsClick = function(e, t, o) {
                c({
                    viewBusinessProfileAction: l.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_SHOPS_ICON,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                })
            }, t.logStatusClick = function(e, t, o) {
                c({
                    viewBusinessProfileAction: l.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_STATUS,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                })
            }, t.logVoiceCallClick = function(e, t, o) {
                c({
                    viewBusinessProfileAction: l.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_VOICE_CALL,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                })
            }, t.logWebsiteClick = function(e, t, o) {
                c({
                    viewBusinessProfileAction: l.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_WEBSITE,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                })
            };
            var a = n(o(81109)),
                i = o(894995),
                r = o(636722),
                l = o(447853);

            function c(e) {
                var t = new r.ViewBusinessProfileWamEvent((0, a.default)((0, a.default)({}, e), {}, {
                    isProfileLinked: !!e.isProfileLinked
                }));
                t && t.commit()
            }

            function s(e) {
                return e > 1e6 ? l.TRUST_SIGNAL_BUCKETS.B1M : e >= 1e5 ? l.TRUST_SIGNAL_BUCKETS.B100K : e >= 1e4 ? l.TRUST_SIGNAL_BUCKETS.B10K : e >= 1e3 ? l.TRUST_SIGNAL_BUCKETS.B1K : e >= 501 ? l.TRUST_SIGNAL_BUCKETS.B501 : e >= 101 ? l.TRUST_SIGNAL_BUCKETS.B101 : e >= 51 ? l.TRUST_SIGNAL_BUCKETS.B51 : e >= 11 ? l.TRUST_SIGNAL_BUCKETS.B11 : e >= 2 ? l.TRUST_SIGNAL_BUCKETS.B2 : 1 === e ? l.TRUST_SIGNAL_BUCKETS.B1 : l.TRUST_SIGNAL_BUCKETS.B0
            }
        },
        894358: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                default: () => n
            });
            const n = {
                coverPhoto: "_28cxP",
                isEditable: "yToza",
                avatar: "qdD7y",
                noStatusBorder: "_3t0oP",
                hasStatusBorder: "yEzM-",
                coverPhotoImage: "_21f_k"
            }
        },
        956685: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                default: () => n
            });
            const n = {
                labelRow: "htdK4",
                standaloneLabelRow: "DRoL5",
                labelContainer: "_3T1FS",
                standaloneLabelContainer: "_1oXnA"
            }
        },
        665901: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                default: () => n
            });
            const n = {
                productImage: "mA2Mt",
                productImageContainer: "_1RPqI",
                productThumb: "_1GMgL",
                productThumbContainer: "_3vt25",
                prompt: "jtHAK"
            }
        },
        35659: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                default: () => n
            });
            const n = {
                header: "_2v4WC",
                photo: "tbJSz",
                text: "_2hENW",
                name: "CbXK5",
                description: "_3fERT",
                spinner: "_2OegD",
                img: "_2YIih"
            }
        },
        198074: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                default: () => n
            });
            const n = {
                carousel: "Zk5oU",
                contentContainer: "_2WuMQ",
                slidesContainer: "_3wjDO",
                loaded: "_2mJIF",
                fadeIn: "_1L5pR",
                spinnerContainer: "_2T83U",
                spinner: "_1AH7f"
            }
        },
        142162: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                default: () => n
            });
            const n = {
                slide: "_1Z_Af",
                slideInnerContainer: "_1pPlm",
                image: "_3CLBm"
            }
        },
        253168: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                default: () => n
            });
            const n = {
                mediaPanelTools: "_2oUO5",
                profileThumb: "_21bjq",
                profileContainer: "_21YBx",
                media: "_2cf2X",
                profileViewer: "QIsaf",
                profileViewerImg: "_1cXba",
                container: "_3_NRW",
                "media-viewer-animate": "MqTIU",
                mediaViewerAnimate: "MqTIU",
                headerContainer: "_Qn3D"
            }
        }
    }
]);