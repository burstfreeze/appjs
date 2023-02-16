/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [7205], {
        730523: u => {
            ! function() {
                "use strict";
                u.exports = {
                    polyfill: function() {
                        var u = window,
                            e = document;
                        if (!("scrollBehavior" in e.documentElement.style) || !0 === u.__forceSmoothScrollPolyfill__) {
                            var t, n = u.HTMLElement || u.Element,
                                a = {
                                    scroll: u.scroll || u.scrollTo,
                                    scrollBy: u.scrollBy,
                                    elementScroll: n.prototype.scroll || r,
                                    scrollIntoView: n.prototype.scrollIntoView
                                },
                                i = u.performance && u.performance.now ? u.performance.now.bind(u.performance) : Date.now,
                                o = (t = u.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(t) ? 1 : 0);
                            u.scroll = u.scrollTo = function() {
                                void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? F.call(u, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : u.scrollX || u.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : u.scrollY || u.pageYOffset) : a.scroll.call(u, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : u.scrollX || u.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : u.scrollY || u.pageYOffset))
                            }, u.scrollBy = function() {
                                void 0 !== arguments[0] && (l(arguments[0]) ? a.scrollBy.call(u, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : F.call(u, e.body, ~~arguments[0].left + (u.scrollX || u.pageXOffset), ~~arguments[0].top + (u.scrollY || u.pageYOffset)))
                            }, n.prototype.scroll = n.prototype.scrollTo = function() {
                                if (void 0 !== arguments[0])
                                    if (!0 !== l(arguments[0])) {
                                        var u = arguments[0].left,
                                            e = arguments[0].top;
                                        F.call(this, this, void 0 === u ? this.scrollLeft : ~~u, void 0 === e ? this.scrollTop : ~~e)
                                    } else {
                                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                        a.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                    }
                            }, n.prototype.scrollBy = function() {
                                void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
                                    left: ~~arguments[0].left + this.scrollLeft,
                                    top: ~~arguments[0].top + this.scrollTop,
                                    behavior: arguments[0].behavior
                                }) : a.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                            }, n.prototype.scrollIntoView = function() {
                                if (!0 !== l(arguments[0])) {
                                    var t = d(this),
                                        n = t.getBoundingClientRect(),
                                        i = this.getBoundingClientRect();
                                    t !== e.body ? (F.call(this, t, t.scrollLeft + i.left - n.left, t.scrollTop + i.top - n.top), "fixed" !== u.getComputedStyle(t).position && u.scrollBy({
                                        left: n.left,
                                        top: n.top,
                                        behavior: "smooth"
                                    })) : u.scrollBy({
                                        left: i.left,
                                        top: i.top,
                                        behavior: "smooth"
                                    })
                                } else a.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                            }
                        }

                        function r(u, e) {
                            this.scrollLeft = u, this.scrollTop = e
                        }

                        function l(u) {
                            if (null === u || "object" != typeof u || void 0 === u.behavior || "auto" === u.behavior || "instant" === u.behavior) return !0;
                            if ("object" == typeof u && "smooth" === u.behavior) return !1;
                            throw new TypeError("behavior member of ScrollOptions " + u.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function s(u, e) {
                            return "Y" === e ? u.clientHeight + o < u.scrollHeight : "X" === e ? u.clientWidth + o < u.scrollWidth : void 0
                        }

                        function D(e, t) {
                            var n = u.getComputedStyle(e, null)["overflow" + t];
                            return "auto" === n || "scroll" === n
                        }

                        function c(u) {
                            var e = s(u, "Y") && D(u, "Y"),
                                t = s(u, "X") && D(u, "X");
                            return e || t
                        }

                        function d(u) {
                            for (; u !== e.body && !1 === c(u);) u = u.parentNode || u.host;
                            return u
                        }

                        function f(e) {
                            var t, n, a, o, r = (i() - e.startTime) / 468;
                            o = r = r > 1 ? 1 : r, t = .5 * (1 - Math.cos(Math.PI * o)), n = e.startX + (e.x - e.startX) * t, a = e.startY + (e.y - e.startY) * t, e.method.call(e.scrollable, n, a), n === e.x && a === e.y || u.requestAnimationFrame(f.bind(u, e))
                        }

                        function F(t, n, o) {
                            var l, s, D, c, d = i();
                            t === e.body ? (l = u, s = u.scrollX || u.pageXOffset, D = u.scrollY || u.pageYOffset, c = a.scroll) : (l = t, s = t.scrollLeft, D = t.scrollTop, c = r), f({
                                scrollable: l,
                                method: c,
                                startTime: d,
                                startX: s,
                                startY: D,
                                x: n,
                                y: o
                            })
                        }
                    }
                }
            }()
        },
        653546: (u, e, t) => {
            "use strict";
            var n = t(307914);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(889372)),
                i = n(t(605816)),
                o = function() {
                    function u() {
                        (0, a.default)(this, u)
                    }
                    return (0, i.default)(u, [{
                        key: "tokenize",
                        value: function(u) {
                            var e = u.toLowerCase().normalize("NFKD").replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u17C9-\u17D3\u17DD\u1939-\u193B\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DF9\u1DFD-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD802[\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDF46-\uDF50]|\uD804[\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g, "").split(/\b/gi).map((function(u) {
                                return u.trim()
                            })).filter(Boolean).filter((function(u) {
                                return u.match(/[a-z0-9]+/i)
                            }));
                            return new Set(e)
                        }
                    }]), u
                }();
            e.default = o
        },
        34169: (u, e, t) => {
            "use strict";
            var n = t(307914);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(889372)),
                i = n(t(605816)),
                o = t(716929),
                r = /(?!(?:[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]))(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3030\u3038-\u303B\u303D\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u3297\u3299\u32D0-\u32FE\u3300-\u3357\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA490-\uA4C6\uF900-\uFA6D\uFA70-\uFAD9\uFF66-\uFF6F\uFF71-\uFF9D]|\uD81B[\uDFF0\uDFF1]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/g,
                l = /((?!(?:[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]))[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC])+|((?!(?:[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]))[\u0E01-\u0E3A\u0E40-\u0E5B])+|((?!(?:[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]))[\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF])+|((?!(?:[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]))[\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FD4\u0FD9\u0FDA])+|((?!(?:[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]))[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F])+|((?!(?:[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]))[\u1780-\u17DD\u17E0-\u17E9\u17F0-\u17F9\u19E0-\u19FF])+|((?!(?:[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]))[\u02EA\u02EB\u3105-\u312F\u31A0-\u31BF])+/g,
                s = /(?![\u0902\u094D])(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u17C9-\u17D3\u17DD\u1939-\u193B\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DF9\u1DFD-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD802[\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDF46-\uDF50]|\uD804[\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])+/g,
                D = /(?:[!-#%-\/:-@\[-`\{-~\xA1\xA7\xA8\xAB\xAC\xAF\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u200D\u2010-\u2027\u2030-\u205E\u207A-\u207E\u208A-\u208E\u2118\u2140-\u2144\u214B\u2190-\u2194\u219A\u219B\u21A0\u21A3\u21A6\u21AE\u21CE\u21CF\u21D2\u21D4\u21F4-\u22FF\u2308-\u230B\u2320\u2321\u2329\u232A\u237C\u239B-\u23B3\u23DC-\u23E1\u25B7\u25C1\u25F8-\u25FF\u266F\u2768-\u2775\u27C0-\u27FF\u2900-\u2AFF\u2B30-\u2B44\u2B47-\u2B4C\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u309B\u309C\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBC1\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE2\uFFE3\uFFE9-\uFFEC]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDEF0\uDEF1]|\uD83C[\uDFFB-\uDFFF])/g,
                c = /(^|(?:[\t\n\r -#%-\*,-\/:;\?@\[-\]_\{\}\xA0\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]))((?:[0-9A-Z\^`-z\xA8\xAA\xAF\xB2-\xB5\xB7-\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u034E\u0350-\u0357\u035D-\u0362\u0370-\u0377\u037A-\u037D\u037F\u0384-\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u05D0-\u05EA\u05EF-\u05F2\u0620-\u0652\u0657\u0658\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u06EE-\u06FC\u06FF\u0710\u0712-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u0815\u0818-\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u08E3-\u08FE\u0904-\u0939\u093C\u093D\u094D\u0950-\u0954\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC\u09BD\u09CD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A4D\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC\u0ABD\u0ACD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0AFD-\u0AFF\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C\u0B3D\u0B4D\u0B55\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BCD\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C4D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC\u0CBD\u0CCD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3D\u0D4D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E4C\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBA\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECC\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F82-\u0F84\u0F86-\u0F8C\u0FC6\u1000-\u102A\u1037\u1039\u103A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1063-\u1066\u1069-\u1070\u1075-\u1081\u1087-\u109B\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17C9-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1939-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A75-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B05-\u1B34\u1B44-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B83-\u1BA0\u1BAA\u1BAB\u1BAE-\u1BE5\u1C00-\u1C23\u1C36\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CFA\u1D00-\u1DBF\u1DC4-\u1DCF\u1DF5-\u1DF9\u1DFD-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA67C\uA67D\uA67F-\uA69D\uA6A0-\uA6F1\uA700-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA92B-\uA92E\uA930-\uA946\uA953\uA960-\uA97C\uA984-\uA9B3\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAABF-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB6B\uAB70-\uABE2\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE20-\uFE2F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3E\uFF40-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\uFFE3]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE6\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCB9\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD33\uDD34\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD73\uDD76\uDD83-\uDDB2\uDDC0-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE35\uDE36\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEE9\uDEEA\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C\uDF3D\uDF4D\uDF50\uDF5D-\uDF61\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC34\uDC42\uDC46-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC2-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDBF\uDDC0\uDDD8-\uDDDB\uDE00-\uDE2F\uDE3F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB6-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF2B\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDC39\uDC3A\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3D-\uDD3F\uDD41\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE34\uDE3A\uDE47\uDE50\uDE5C-\uDE89\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC3F\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD42\uDD44-\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD97\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6\uDD00-\uDD46\uDD48-\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])+)["'\xAB\xBB\u2018-\u201F\u2039\u203A\u2E42\u300C-\u300F\u301D-\u301F\uFE41-\uFE44\uFF02\uFF07\uFF62\uFF63]((?:[0-9A-Z\^`-z\xA8\xAA\xAF\xB2-\xB5\xB7-\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u034E\u0350-\u0357\u035D-\u0362\u0370-\u0377\u037A-\u037D\u037F\u0384-\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u05D0-\u05EA\u05EF-\u05F2\u0620-\u0652\u0657\u0658\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u06EE-\u06FC\u06FF\u0710\u0712-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u0815\u0818-\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u08E3-\u08FE\u0904-\u0939\u093C\u093D\u094D\u0950-\u0954\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC\u09BD\u09CD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A4D\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC\u0ABD\u0ACD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0AFD-\u0AFF\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C\u0B3D\u0B4D\u0B55\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BCD\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C4D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC\u0CBD\u0CCD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3D\u0D4D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E4C\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBA\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECC\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F82-\u0F84\u0F86-\u0F8C\u0FC6\u1000-\u102A\u1037\u1039\u103A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1063-\u1066\u1069-\u1070\u1075-\u1081\u1087-\u109B\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17C9-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1939-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A75-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B05-\u1B34\u1B44-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B83-\u1BA0\u1BAA\u1BAB\u1BAE-\u1BE5\u1C00-\u1C23\u1C36\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CFA\u1D00-\u1DBF\u1DC4-\u1DCF\u1DF5-\u1DF9\u1DFD-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA67C\uA67D\uA67F-\uA69D\uA6A0-\uA6F1\uA700-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA92B-\uA92E\uA930-\uA946\uA953\uA960-\uA97C\uA984-\uA9B3\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAABF-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB6B\uAB70-\uABE2\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE20-\uFE2F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3E\uFF40-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\uFFE3]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE6\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCB9\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD33\uDD34\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD73\uDD76\uDD83-\uDDB2\uDDC0-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE35\uDE36\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEE9\uDEEA\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C\uDF3D\uDF4D\uDF50\uDF5D-\uDF61\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC34\uDC42\uDC46-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC2-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDBF\uDDC0\uDDD8-\uDDDB\uDE00-\uDE2F\uDE3F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB6-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF2B\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDC39\uDC3A\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3D-\uDD3F\uDD41\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE34\uDE3A\uDE47\uDE50\uDE5C-\uDE89\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC3F\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD42\uDD44-\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD97\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6\uDD00-\uDD46\uDD48-\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])+)($|(?:[\t\n\r -#%-\*,-\/:;\?@\[-\]_\{\}\xA0\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]))/g,
                d = /(?:[\t\n\r -#%-\*,-\/:;\?@\[-\]_\{\}\xA0\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F])+/g,
                f = /(?:[\$\xA2-\xA5\u058F\u060B\u07FE\u07FF\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BF\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]|\uD807[\uDFDD-\uDFE0]|\uD838\uDEFF|\uD83B\uDCB0)+/g;

            function F(u) {
                return u.replace(c, (function(u, e, t, n) {
                    return ` ${t}${n} ${t} ${n} `
                }))
            }

            function C(u) {
                return u.split(d)
            }

            function E(u) {
                return u.replace(D, "")
            }

            function p(u) {
                return u.replace(s, "")
            }

            function h(u) {
                return u.normalize("NFC").replace(r, (function(u) {
                    return ` ${u} `
                }))
            }

            function A(u) {
                return u.normalize("NFC").replace(l, (function(u) {
                    return ` ${u} `
                }))
            }

            function m(u) {
                return u.replace(f, (function(u) {
                    return ` ${u} `
                }))
            }
            var v = function() {
                function u() {
                    (0, a.default)(this, u)
                }
                return (0, i.default)(u, [{
                    key: "tokenize",
                    value: function() {
                        var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = F(u),
                            t = m(h(A(e))),
                            n = C(t),
                            a = n.map((function(u) {
                                var e = u;
                                return (e = E(e)).length ? (e.match(r) || e.match(l) ? e = e.normalize("NFC") : (e = (e = p(o.preNFKDNormalizer.normalize(e).normalize("NFKD"))).toLocaleLowerCase("en-US"), e = o.postLowerCaseNormalizer.normalize(e)), e) : e
                            }));
                        return new Set(a.filter((function(u) {
                            return !!u && !!u.trim() && !u.match(d)
                        })))
                    }
                }]), u
            }();
            e.default = v
        },
        233794: (u, e, t) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.normalize("NFKD");
                if ((0, a.numCodepoints)(e) >= 2) return !0;
                if (n.CONTAINS_EMOJI_REGEX.test(e)) return !0;
                if (n.CONTAINS_HAN_OR_KANA_SCRIPT_REGEX.test(e)) return !0;
                return !1
            };
            var n = t(574941),
                a = t(227171)
        },
        574941: (u, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.CONTAINS_HAN_OR_KANA_SCRIPT_REGEX = e.CONTAINS_EMOJI_REGEX = void 0;
            e.CONTAINS_EMOJI_REGEX = /(?!(?:[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]))(?:[#\\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299\uFE0E\uFE0F]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])/;
            e.CONTAINS_HAN_OR_KANA_SCRIPT_REGEX = /(?:[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\u3400-\u4DBF\u4E00-\u9FFC\uF900-\uFA6D\uFA70-\uFAD9\uFF66-\uFF6F\uFF71-\uFF9D]|\uD81B[\uDFF0\uDFF1]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67]|\uD83C\uDE00|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/
        },
        930204: (u, e, t) => {
            "use strict";
            var n = t(307914);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "MultiLangTokenizer", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(e, "SimpleLatinicSentenceTokenizer", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            });
            var a = n(t(653546)),
                i = n(t(34169))
        },
        153288: (u, e, t) => {
            "use strict";
            var n = t(307914);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(537613)),
                i = n(t(889372)),
                o = n(t(605816)),
                r = function() {
                    function u(e) {
                        var t = this;
                        (0, i.default)(this, u);
                        var n = [];
                        this._toNormalizedFormMap = new Map, e.forEach((function(u) {
                            var e = (0, a.default)(u, 2),
                                i = e[0],
                                o = e[1];
                            t._toNormalizedFormMap.set(i, o), n.push(i)
                        })), this._regex = new RegExp(n.join("|"), "g")
                    }
                    return (0, o.default)(u, [{
                        key: "normalize",
                        value: function() {
                            var u = this,
                                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            return e.replace(this._regex, (function(e) {
                                var t = u._toNormalizedFormMap.get(e);
                                return null != t ? t : e
                            }))
                        }
                    }]), u
                }();
            e.default = r
        },
        716929: (u, e, t) => {
            "use strict";
            var n = t(307914);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "postLowerCaseNormalizer", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(e, "preNFKDNormalizer", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            });
            var a = n(t(316996)),
                i = n(t(787104))
        },
        787104: (u, e, t) => {
            "use strict";
            var n = t(307914);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = new(n(t(153288)).default)([
                ["ı", "i"],
                ["ة", "ه"],
                ["ـ", ""],
                ["ى", "ي"],
                ["ٱ", "ا"],
                ["ڤ", "ف"],
                ["ک", "ك"],
                ["ں", "ن"],
                ["ھ", "ه"],
                ["ۃ", "ۂ"],
                ["ی", "ي"],
                ["ے", "ي"],
                ["ە", "ه"],
                ["۰", "٠"],
                ["۱", "١"],
                ["۲", "٢"],
                ["۳", "٣"],
                ["۴", "٤"],
                ["۵", "٥"],
                ["۶", "٦"],
                ["۷", "٧"],
                ["۸", "٨"],
                ["۹", "٩"],
                ["ࢻ", "ف"],
                ["ࢼ", "ق"],
                ["ࢽ", "ن"],
                ["‌", ""],
                ["०", "0"],
                ["१", "1"],
                ["२", "2"],
                ["३", "3"],
                ["४", "4"],
                ["५", "5"],
                ["६", "6"],
                ["७", "7"],
                ["८", "8"],
                ["९", "9"],
                ["ँ", "ं"],
                ["ः", ""],
                ["़", ""],
                ["০", "0"],
                ["১", "1"],
                ["২", "2"],
                ["৩", "3"],
                ["৪", "4"],
                ["৫", "5"],
                ["৬", "6"],
                ["৭", "7"],
                ["৮", "8"],
                ["৯", "9"],
                ["੦", "0"],
                ["੧", "1"],
                ["੨", "2"],
                ["੩", "3"],
                ["੪", "4"],
                ["੫", "5"],
                ["੬", "6"],
                ["੭", "7"],
                ["੮", "8"],
                ["੯", "9"],
                ["౦", "0"],
                ["౧", "1"],
                ["౨", "2"],
                ["౩", "3"],
                ["౪", "4"],
                ["౫", "5"],
                ["౬", "6"],
                ["౭", "7"],
                ["౮", "8"],
                ["౯", "9"],
                ["૦", "0"],
                ["૧", "1"],
                ["૨", "2"],
                ["૩", "3"],
                ["૪", "4"],
                ["૫", "5"],
                ["૬", "6"],
                ["૭", "7"],
                ["૮", "8"],
                ["૯", "9"],
                ["೦", "0"],
                ["೧", "1"],
                ["೨", "2"],
                ["೩", "3"],
                ["೪", "4"],
                ["೫", "5"],
                ["೬", "6"],
                ["೭", "7"],
                ["೮", "8"],
                ["೯", "9"],
                ["൦", "0"],
                ["൧", "1"],
                ["൨", "2"],
                ["൩", "3"],
                ["൪", "4"],
                ["൫", "5"],
                ["൬", "6"],
                ["൭", "7"],
                ["൮", "8"],
                ["൯", "9"],
                ["ł", "l"]
            ]);
            e.default = a
        },
        316996: (u, e, t) => {
            "use strict";
            var n = t(307914);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = new(n(t(153288)).default)([
                ["ٵ", "ٴا"],
                ["ٶ", "ٴو"],
                ["ٷ", "ٴۇ"],
                ["ٸ", "ٴى"],
                ["अॆ", "ऄ"],
                ["अा", "आ"],
                ["र्इ", "ई"],
                ["उु", "ऊ"],
                ["एॅ", "ऍ"],
                ["एॆ", "ऎ"],
                ["एे", "ऐ"],
                ["अॉ", "ऑ"],
                ["आॅ", "ऑ"],
                ["अॊ", "ऒ"],
                ["आॆ", "ऒ"],
                ["अो", "ओ"],
                ["आे", "ओ"],
                ["अौ", "औ"],
                ["आै", "औ"],
                ["अॅ", "ॲ"],
                ["अऺ", "ॳ"],
                ["अऻ", "ॴ"],
                ["आऺ", "ॴ"],
                ["अॏ", "ॵ"],
                ["अॖ", "ॶ"],
                ["अॗ", "ॷ"],
                ["অা", "আ"],
                ["ঋৃ", "ৠ"],
                ["ঌৢ", "ৡ"],
                ["ਅਾ", "ਆ"],
                ["ੲਿ", "ਇ"],
                ["ੲੀ", "ਈ"],
                ["ੳੁ", "ਉ"],
                ["ੳੂ", "ਊ"],
                ["ੲੇ", "ਏ"],
                ["ਅੈ", "ਐ"],
                ["ੳੋ", "ਓ"],
                ["ਅੌ", "ਔ"],
                ["અા", "આ"],
                ["અૅ", "ઍ"],
                ["અે", "એ"],
                ["અૈ", "ઐ"],
                ["અૉ", "ઑ"],
                ["અો", "ઓ"],
                ["અાૅ", "ઓ"],
                ["અૌ", "ઔ"],
                ["અાૈ", "ઔ"],
                ["ૅા", "ૉ"],
                ["ଅା", "ଆ"],
                ["ଏୗ", "ଐ"],
                ["ଓୗ", "ଔ"],
                ["ஸ்ரீ", "ஶ்ரீ"],
                ["ఒౕ", "ఓ"],
                ["ఒౌ", "ఔ"],
                ["ిౕ", "ీ"],
                ["ెౕ", "ే"],
                ["ొౕ", "ో"],
                ["ಉಾ", "ಊ"],
                ["ಒೌ", "ಔ"],
                ["ಋಾ", "ೠ"],
                ["ഇൗ", "ഈ"],
                ["ഉൗ", "ഊ"],
                ["എെ", "ഐ"],
                ["ഒാ", "ഓ"],
                ["ഒൗ", "ഔ"],
                ["ണ്‍", "ൺ"],
                ["ന്‍", "ൻ"],
                ["ര്‍", "ർ"],
                ["ല്‍", "ൽ"],
                ["ള്‍", "ൾ"],
                ["අා", "ආ"],
                ["අැ", "ඇ"],
                ["අෑ", "ඈ"],
                ["උෟ", "ඌ"],
                ["ඍෘ", "ඎ"],
                ["ඏෟ", "ඐ"],
                ["එ්", "ඒ"],
                ["එෙ", "ඓ"],
                ["ඔෟ", "ඖ"]
            ]);
            e.default = a
        },
        350327: (u, e, t) => {
            "use strict";
            var n = t(307914);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u, e) {
                var t;
                if (u.size !== e.size) return !1;
                var n, o = (0, i.default)(u);
                try {
                    for (o.s(); !(n = o.n()).done;) {
                        var r = (0, a.default)(n.value, 2),
                            l = r[0],
                            s = r[1];
                        if ((t = e.get(l)) !== s || void 0 === t && !e.has(l)) return !1
                    }
                } catch (u) {
                    o.e(u)
                } finally {
                    o.f()
                }
                return !0
            };
            var a = n(t(537613)),
                i = n(t(668217))
        },
        977202: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t = u.stickerPackId,
                    n = u.onStickerPackView,
                    E = u.stickerPackViewDelay,
                    p = u.sticker,
                    h = (A = t, (0, f.useEffect)((function() {
                        A && c.StickerPackCollectionMd.fetchStickerPack(A)
                    }), [A]), (0, F.default)(c.StickerPackCollectionMd, "add remove reset", (function() {
                        return null != A ? c.StickerPackCollectionMd.get(A) : null
                    })));
                var A;
                if (t) {
                    var m = function(u) {
                        u.stopPropagation(), n && n(), null != E ? setTimeout((function() {
                            return i.Cmd.openStickerPack(t)
                        }), E + 150) : i.Cmd.openStickerPack(t)
                    };
                    (0, s.isFavoriteStickersEnabled)() ? null != p && (e = (0, C.jsxs)(l.FlexRow, {
                        children: [(0, C.jsx)(a.default, {
                            onClick: m,
                            type: "secondary",
                            children: d.fbt._("View Pack", null, {
                                hk: "tAlU3"
                            })
                        }), r.default.get(p.filehash) ? (0, C.jsx)(a.default, {
                            onClick: function() {
                                return (0, o.removeStickerFromFavorites)(p)
                            },
                            type: "secondary",
                            children: d.fbt._("Remove From Favorites", null, {
                                hk: "3YoUkP"
                            })
                        }) : (0, C.jsx)(a.default, {
                            onClick: function() {
                                return (0, o.addStickerToFavorites)(p)
                            },
                            type: "secondary",
                            children: d.fbt._("Add to Favorites", null, {
                                hk: "3x4EBo"
                            })
                        })]
                    })): e = (0, C.jsx)(a.default, {
                        onClick: m,
                        type: "secondary",
                        children: d.fbt._("View Pack", null, {
                            hk: "tAlU3"
                        })
                    })
                }
                return (0, C.jsxs)(C.Fragment, {
                    children: [(0, C.jsx)(D.StickerDetailsStickerPackInfo, {
                        name: null == h ? void 0 : h.name,
                        publisher: null == h ? void 0 : h.publisher,
                        theme: D.Theme.MediaViewer
                    }), e]
                })
            };
            var a = n(t(746251)),
                i = t(896674),
                o = t(907812),
                r = n(t(164396)),
                l = t(208188),
                s = t(518005),
                D = t(120092),
                c = t(662322),
                d = t(548360),
                f = t(667294),
                F = n(t(554327)),
                C = t(785893)
        },
        90261: (u, e, t) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.contact,
                    t = u.onClick,
                    o = u.contextMenu,
                    r = u.isPendingParticipant,
                    l = u.contextEnabled,
                    s = u.onContext,
                    D = u.theme,
                    c = u.showStatusRingAroundProfilePhoto,
                    d = u.participantCollection,
                    f = u.elevatedPushNamesEnabled,
                    F = (0, a.useModelValues)(u.participant, ["isAdmin"]);
                return (0, i.jsx)(n.Contact, {
                    contact: e,
                    admin: F.isAdmin,
                    onClick: t,
                    theme: D || "drawer-list",
                    contextEnabled: function() {
                        return null != l && l(e)
                    },
                    contextMenu: o,
                    onContext: function(u) {
                        return null == s ? void 0 : s(u, e)
                    },
                    isPendingParticipant: r,
                    showNotifyName: !0,
                    elevatedPushNamesEnabled: f,
                    waitIdle: !0,
                    showStatusRingAroundProfilePhoto: c,
                    participantCollection: d
                })
            };
            var n = t(622151),
                a = t(948752),
                i = t(785893)
        },
        968917: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.docMsgs,
                    t = u.chat,
                    n = u.isFilterEnabled,
                    E = void 0 !== n && n,
                    p = u.filterText,
                    h = (0, i.default)(u, C),
                    A = (0, f.default)(),
                    m = (0, c.default)((function() {
                        return new s.default((function(u) {
                            var e = [],
                                t = u.text;
                            null != t && e.push(t);
                            var n = u.mediaData.filename;
                            return e.push(n), e.join(" ")
                        }))
                    }));
                (0, d.useListener)(e, "add", (function(u) {
                    E && m.current.cacheMessageTokens(u)
                })), (0, d.useListener)(e, "remove", (function(u) {
                    E && m.current.removeMessageTokensFromCache(u)
                })), (0, d.useListener)(e, "reset", (function() {
                    E && m.current.clearTokensCache()
                })), (0, D.useEffect)((function() {
                    E && e.forEach((function(u) {
                        m.current.cacheMessageTokens(u)
                    }))
                }), [e, m, E]);
                var v = E ? function(u, e) {
                    return m.current.filter(u, p, e)
                } : void 0;
                return (0, F.jsxs)(F.Fragment, {
                    children: [(0, F.jsx)(l.default, (0, a.default)({
                        testid: "doc-gallery",
                        msgsCollection: e,
                        msgsCollectionUpdateEvents: ["add", "remove", "reset", "query_doc_before"],
                        queryCollection: function(u) {
                            e.hasDocBefore && A((function() {
                                e.queryDocs(t, u)
                            }))
                        },
                        getHasBefore: function() {
                            return e.hasDocBefore
                        },
                        getQueryBefore: function() {
                            return e.queryDocBefore
                        },
                        emptyText: r.default.t(497),
                        chat: t,
                        filterMessages: v
                    }, h)), (0, F.jsx)(o.HistorySyncGalleryPlaceholder, {
                        chat: t
                    })]
                })
            };
            var a = n(t(81109)),
                i = n(t(506479)),
                o = t(507281),
                r = n(t(758927)),
                l = n(t(419544)),
                s = n(t(340297)),
                D = t(667294),
                c = n(t(982669)),
                d = t(779740),
                f = n(t(38619)),
                F = t(785893),
                C = ["docMsgs", "chat", "isFilterEnabled", "filterText"]
        },
        217332: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BaseEphemeralSettingRow = m, e.EphemeralSettingRow = function(u) {
                var e = u.chat,
                    t = u.groupMetadata,
                    n = u.onClick,
                    a = u.testid;
                if (t) return (0, p.jsx)(A, {
                    groupMetadata: t,
                    onClick: n,
                    testid: a
                });
                return (0, p.jsx)(h, {
                    chat: e,
                    onClick: n,
                    testid: a
                })
            };
            var a = t(883236),
                i = t(538431),
                o = n(t(758927)),
                r = t(628707),
                l = t(401304),
                s = t(558288),
                D = t(61771),
                c = t(173725),
                d = t(382467),
                f = n(t(603249)),
                F = t(404186),
                C = t(548360),
                E = t(948752),
                p = t(785893);
            var h = function(u) {
                var e = u.onClick,
                    t = u.testid,
                    n = (0, E.useModelValues)(u.chat, ["contact", "ephemeralDuration"]),
                    i = function() {
                        var u;
                        return null !== (u = n.ephemeralDuration) && void 0 !== u ? u : 0
                    },
                    o = function() {
                        n.contact.addPendingAction((0, a.unblockContact)(n.contact)).then((function() {
                            e(), r.ModalManager.close()
                        })).catch((function() {}))
                    },
                    l = function() {
                        r.ModalManager.close()
                    };
                return (0, p.jsx)(m, {
                    ephemeralDuration: i(),
                    canChange: !0,
                    onClick: function() {
                        n.contact.isContactBlocked ? r.ModalManager.open((0, p.jsx)(F.ConfirmPopup, {
                            onOK: o,
                            okText: C.fbt._("Unblock", null, {
                                hk: "hnS4w"
                            }),
                            onCancel: l,
                            children: i() ? C.fbt._("You can't turn off disappearing messages for this chat unless you unblock this contact.", null, {
                                hk: "o3zdA"
                            }) : C.fbt._("You can't turn on disappearing messages for this chat unless you unblock this contact.", null, {
                                hk: "1uAyoI"
                            })
                        })) : e()
                    },
                    testid: t
                })
            };
            var A = function(u) {
                var e, t = u.onClick,
                    n = u.testid,
                    a = (0, E.useModelValues)(u.groupMetadata, ["ephemeralDuration", "participants"]),
                    i = function() {
                        r.ModalManager.close()
                    };
                return (0, p.jsx)(m, {
                    ephemeralDuration: null !== (e = a.ephemeralDuration) && void 0 !== e ? e : 0,
                    canChange: a.canSetEphemeralSetting(),
                    onClick: function() {
                        a.canSetEphemeralSetting() ? t() : r.ModalManager.open((0, p.jsx)(F.ConfirmPopup, {
                            onOK: i,
                            okText: C.fbt._("OK", null, {
                                hk: "2KEeHb"
                            }),
                            children: C.fbt._("Only admins can change this setting.", null, {
                                hk: "1NF1gS"
                            })
                        }))
                    },
                    testid: n
                })
            };

            function m(u) {
                var e, t = u.ephemeralDuration,
                    n = u.canChange,
                    a = u.onClick,
                    r = u.testid;
                e = t > 0 ? n ? (0, d.getDisappearingMessageDurationString)(t) : (0, c.isKeepInChatVisibleUIEnabled)() ? (0, D.getDisappearingMessageExplanationStringKic)(t) : (0, d.getDisappearingMessageExplanationString)(t) : o.default.t(292);
                var F = (0, p.jsx)(s.TextSpan, {
                        theme: "title",
                        children: C.fbt._("Disappearing messages", null, {
                            hk: "384ocn"
                        })
                    }),
                    E = (0, p.jsx)(s.TextDiv, {
                        theme: "muted",
                        testid: "chat-dm-settings-item-value",
                        children: e
                    }),
                    h = (0, p.jsx)(i.DisappearingIcon, {
                        color: l.SvgColorProp.SECONDARY,
                        height: 20
                    });
                return (0, p.jsx)(f.default, {
                    side: "chevron",
                    icon: h,
                    onClick: a,
                    title: F,
                    secondaryTitle: E,
                    testid: r
                })
            }
        },
        711050: (u, e, t) => {
            "use strict";
            var n = t(263026).default,
                a = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.linkMsgs,
                    t = u.chat,
                    a = u.selectedMessages,
                    v = u.selectable,
                    g = u.onMessageSelect,
                    x = u.isFilterEnabled,
                    B = void 0 !== x && x,
                    b = u.filterText,
                    j = (0, h.default)(),
                    M = (0, E.default)((function() {
                        return new f.default((function(u) {
                            return u.text
                        }))
                    }));
                (0, p.useListener)(e, "add", (function(u) {
                    B && M.current.cacheMessageTokens(u)
                })), (0, p.useListener)(e, "remove", (function(u) {
                    M.current.removeMessageTokensFromCache(u)
                })), (0, p.useListener)(e, "reset", (function() {
                    B && M.current.clearTokensCache()
                })), (0, C.useEffect)((function() {
                    B && e.forEach((function(u) {
                        M.current.cacheMessageTokens(u)
                    }))
                }), [e, M, B]), (0, p.useListener)(t.msgs, "add bulk_add", (function(u) {
                    if (u) {
                        var t = [],
                            a = Array.isArray(u) ? u : [u];
                        n.all(a.map((function(u) {
                            return (0, d.getLinksFromMsg)(u).length && t.push(u), n.resolve()
                        }))).then((function() {
                            t.length && e.add(t)
                        }))
                    }
                }));
                var _ = B ? function(u, e) {
                        return M.current.filter(u, b, e)
                    } : void 0,
                    y = (u.linkMsgs, u.chat, u.filterText, u.isFilterEnabled, (0, o.default)(u, m));
                return (0, A.jsxs)(A.Fragment, {
                    children: [(0, A.jsx)(c.default, (0, i.default)({
                        testid: "link-gallery",
                        msgsCollection: e,
                        msgsCollectionUpdateEvents: ["add", "remove", "reset", "query_doc_before"],
                        queryCollection: function(u) {
                            e.hasLinkBefore && j((function() {
                                e.queryLinks(t, u)
                            }))
                        },
                        getHasBefore: function() {
                            return e.hasLinkBefore
                        },
                        getQueryBefore: function() {
                            return e.queryLinkBefore
                        },
                        messageElements: function(u, e) {
                            var t = [];
                            return u.forEach((function(u) {
                                var n = !u.isSentByMe && u.isGroupMsg,
                                    i = null;
                                u.linkPreview && (i = (0, A.jsx)(F.default, {
                                    testid: "link-gallery-msg",
                                    msg: u,
                                    selectable: v,
                                    selectedMessages: a,
                                    onMessageSelect: g,
                                    displayType: r.DISPLAY_TYPE.GALLERY_LINKS,
                                    onClickMsg: e
                                }, u.id.toString())), (0, d.getGalleryLinks)(u).forEach((function(o, r) {
                                    o.href === u.matchedText && null != i || t.push((0, A.jsx)(D.default, {
                                        testid: "link-gallery-msg",
                                        msg: u.safe(),
                                        link: o,
                                        displayAuthor: n,
                                        selectable: v,
                                        selectedMessages: a,
                                        onMessageSelect: g,
                                        onClickMsg: e
                                    }, `${u.id.toString()}-${r}`))
                                })), null != i && t.push(i)
                            })), t.reverse(), t
                        },
                        emptyText: s.default.t(499),
                        chat: t,
                        filterMessages: _
                    }, y)), (0, A.jsx)(l.HistorySyncGalleryPlaceholder, {
                        chat: u.chat
                    })]
                })
            };
            var i = a(t(81109)),
                o = a(t(506479)),
                r = t(241941),
                l = t(507281),
                s = a(t(758927)),
                D = a(t(683733)),
                c = a(t(419544)),
                d = t(359018),
                f = a(t(340297)),
                F = a(t(598393)),
                C = t(667294),
                E = a(t(982669)),
                p = t(779740),
                h = a(t(38619)),
                A = t(785893),
                m = ["linkMsgs", "chat", "filterText", "isFilterEnabled"]
        },
        683733: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t = u.link,
                    n = u.displayAuthor,
                    M = u.selectedMessages,
                    _ = u.onMessageSelect,
                    y = u.onClickMsg,
                    S = u.testid,
                    k = (0, b.useModelValues)(u.msg, ["body", "caption", "dir", "id", "isSentByMe", "mediaData", "type", "rtl", "senderObj", "star", "mediaData", "asRevoked", "isKept"]),
                    P = (0, x.useState)(!1),
                    T = (0, i.default)(P, 2),
                    w = T[0],
                    I = T[1],
                    N = (0, x.useState)((function() {
                        return M.isSelected(k.unsafe())
                    })),
                    R = (0, i.default)(N, 2),
                    O = R[0],
                    L = R[1];
                (0, B.useListener)(M, k.id.toString(), (function(u) {
                    O !== u && L(u)
                }));
                var G = u.selectable || w ? (0, j.jsx)(C.default, {
                        checked: O,
                        onClick: function(u) {
                            u && u.stopPropagation(), _(k.unsafe(), !O)
                        },
                        msgTheme: "gallery"
                    }) : null,
                    V = (0, D.Conversation)({
                        mentions: k.mentionMap(),
                        links: (0, E.getLinksFromMsg)(k.unsafe()),
                        phoneNumbers: (0, h.getPhoneNumbersFromMsg)(k.unsafe()),
                        selectable: true,
                        trusted: (0, p.isTrusted)(k.unsafe()),
                        fromMe: k.id.fromMe
                    }),
                    H = k.body && k.body.includes(t.url) ? k.body : k.caption,
                    U = n ? (0, j.jsx)("div", {
                        className: v.default.author,
                        children: (0, j.jsx)(F.default, {
                            msg: k,
                            contact: k.senderObj
                        })
                    }) : null,
                    z = (0, E.getSuspiciousLinks)(k.unsafe()).length > 0;
                return (0, j.jsx)(c.default, {
                    hover: w,
                    onClick: function() {
                        y(k.unsafe(), !O)
                    },
                    onMouseEnter: w ? null : function() {
                        w || I(!0)
                    },
                    onMouseOver: w ? null : function() {
                        w || I(!0)
                    },
                    onMouseLeave: w ? function() {
                        w && I(!1)
                    } : null,
                    testid: S,
                    children: (0, j.jsxs)("div", {
                        className: v.default.msg,
                        "data-testid": "link-msg",
                        children: [(0, j.jsx)(A.default, {
                            transitionName: "delay-leave",
                            children: G
                        }), (0, j.jsx)(m.MessageContainer, {
                            isSentByMe: k.isSentByMe,
                            children: (0, j.jsxs)("div", {
                                className: (0, g.default)(v.default.bubble, (0, r.cx)((e = {}, (0, a.default)(e, v.default.hasAuthor, n), (0, a.default)(e, v.default.hasSuspiciousLinks, z), e))),
                                children: [U, (0, j.jsx)(o.SuspiciousLabel, {
                                    link: t,
                                    displayType: l.DISPLAY_TYPE.GALLERY
                                }), (0, j.jsx)(f.default, {
                                    title: t.url,
                                    isSentByMe: k.isSentByMe,
                                    canonicalUrl: t.domain,
                                    displayType: l.DISPLAY_TYPE.GALLERY,
                                    star: k.star,
                                    kept: k.isKept
                                }), (0, j.jsx)(s.EmojiText, {
                                    text: H,
                                    selectable: true,
                                    className: v.default.text,
                                    dirMismatch: k.rtl !== d.default.isRTL(),
                                    direction: k.dir,
                                    formatters: V
                                })]
                            })
                        })]
                    })
                })
            };
            var a = n(t(859713)),
                i = n(t(963038)),
                o = t(54629),
                r = t(157405),
                l = t(241941),
                s = t(990055),
                D = t(924309),
                c = n(t(655296)),
                d = n(t(758927)),
                f = n(t(73098)),
                F = n(t(530668)),
                C = n(t(796984)),
                E = t(359018),
                p = t(707073),
                h = t(819781),
                A = n(t(904847)),
                m = t(144495),
                v = n(t(38538)),
                g = n(t(706442)),
                x = t(667294),
                B = t(779740),
                b = t(948752),
                j = t(785893)
        },
        419544: (u, e, t) => {
            "use strict";
            var n = t(739163).default,
                a = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.getHasBefore,
                    t = u.getQueryBefore,
                    a = u.msgsCollection,
                    M = u.msgsCollectionUpdateEvents,
                    _ = u.emptyText,
                    y = u.scrollOffset,
                    S = void 0 === y ? 0 : y,
                    k = u.selectable,
                    P = u.onMessageSelect,
                    T = u.queryCollection,
                    w = u.selectedMessages,
                    I = u.messageElements,
                    N = u.onProductDetail,
                    R = u.setScrollOffset,
                    O = u.filterMessages,
                    L = u.testid,
                    G = e(),
                    V = t(),
                    H = (0, p.useRef)(null),
                    U = (0, B.default)(),
                    z = (0, x.default)((function(u) {
                        G && T(u)
                    }), 100),
                    q = (0, p.useState)((function() {
                        return a.toArray()
                    })),
                    Y = (0, r.default)(q, 2),
                    W = Y[0],
                    K = Y[1],
                    X = (0, x.default)((function(u) {
                        var e = u.scrollHeight - u.clientHeight - u.scrollTop;
                        G && e < F.SCROLL_FUDGE && z(a.head()), R && R(u.scrollTop)
                    }), 100);
                (0, p.useEffect)((function() {
                    G && z();
                    var u = H.current;
                    return u && (u.scrollTop = S),
                        function() {
                            X.cancel()
                        }
                }), []);
                var Z = function(u, e) {
                        var t = (0, E.unproxy)(u);
                        k && void 0 !== e ? P(t, e) : D.Cmd.openChatAt(t.chat, (0, s.getSearchContext)(t.chat, t))
                    },
                    $ = (0, p.useRef)(),
                    Q = (0, A.default)(),
                    J = (0, p.useCallback)(function() {
                        var u = (0, o.default)(i.default.mark((function u(e) {
                            var t, o, r;
                            return i.default.wrap((function(u) {
                                for (;;) switch (u.prev = u.next) {
                                    case 0:
                                        if (null === (t = $.current) || void 0 === t || t.abort(), null != e) {
                                            u.next = 5;
                                            break
                                        }
                                        return K(a.toArray()), Q(), u.abrupt("return");
                                    case 5:
                                        return $.current = new n, o = $.current.signal, u.prev = 7, u.next = 10, e(a, o);
                                    case 10:
                                        r = u.sent, o.aborted || U.aborted || (K(r), Q()), u.next = 18;
                                        break;
                                    case 14:
                                        if (u.prev = 14, u.t0 = u.catch(7), u.t0.name === l.ABORT_ERROR) {
                                            u.next = 18;
                                            break
                                        }
                                        throw u.t0;
                                    case 18:
                                    case "end":
                                        return u.stop()
                                }
                            }), u, null, [
                                [7, 14]
                            ])
                        })));
                        return function() {
                            return u.apply(this, arguments)
                        }
                    }(), [a, Q, U]);
                (0, m.useListener)(a, M, (function() {
                    return J(O)
                })), (0, p.useEffect)((function() {
                    return J(O),
                        function() {
                            var u;
                            return null === (u = $.current) || void 0 === u ? void 0 : u.abort()
                        }
                }), [J, O]);
                var uu = (0, v.default)(),
                    eu = (0, r.default)(uu, 2),
                    tu = eu[0],
                    nu = eu[1].height,
                    au = (0, g.default)(tu, H);
                (0, p.useEffect)((function() {
                    null != O && e() && !t() && null != H.current && H.current.scrollHeight < nu + F.SCROLL_FUDGE && z(a.head())
                }));
                var iu = null;
                iu = I ? I(W, Z) : W.map((function(u, e) {
                    return (0, b.jsx)(C.default, {
                        msg: u,
                        selectable: k,
                        selectedMessages: w,
                        onMessageSelect: P,
                        displayType: c.DISPLAY_TYPE.GALLERY,
                        onClickMsg: Z,
                        onProductClick: N
                    }, `${u.id.toString()}_${e}`)
                })).reverse();
                if (V) {
                    if (0 === iu.length) return (0, b.jsx)(d.Loading, {});
                    iu.push((0, b.jsx)(f.default, {}, -1))
                }
                if (0 === iu.length && !V && !G) return (0, b.jsx)(d.Empty, {
                    text: _,
                    testid: "no-elements"
                });
                return (0, b.jsx)("div", {
                    "data-testid": L,
                    ref: au,
                    onScroll: function(u) {
                        X(u.target)
                    },
                    className: (0, h.default)(j),
                    children: iu
                })
            };
            var i = a(t(887757)),
                o = a(t(348926)),
                r = a(t(963038)),
                l = t(497384),
                s = t(828420),
                D = t(896674),
                c = t(241941),
                d = t(544607),
                f = a(t(399447)),
                F = t(295769),
                C = a(t(598393)),
                E = t(121657),
                p = t(667294),
                h = a(t(156720)),
                A = a(t(802418)),
                m = t(779740),
                v = a(t(494824)),
                g = a(t(154194)),
                x = a(t(32594)),
                B = a(t(788413)),
                b = t(785893),
                j = {
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh",
                    overflowX: "gfz4du6o",
                    overflowY: "rpvcun8f",
                    flexGrow: "ggj6brxn"
                }
        },
        340297: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(963038)),
                i = n(t(887757)),
                o = n(t(543269)),
                r = n(t(348926)),
                l = n(t(334575)),
                s = n(t(993913)),
                D = t(497384),
                c = t(362981),
                d = n(t(233794)),
                f = t(930204),
                F = function() {
                    function u(e) {
                        (0, l.default)(this, u), this.getMsgText = e, this.tokenizer = new f.MultiLangTokenizer, this.msgKeyToTokens = new Map, this.newMsgsToTokenize = []
                    }
                    var e, t;
                    return (0, s.default)(u, [{
                        key: "filter",
                        value: (t = (0, r.default)(i.default.mark((function u(e, t, n) {
                            var a, r, l, s, f, F, C, E, p, h, A, m;
                            return i.default.wrap((function(u) {
                                for (;;) switch (u.prev = u.next) {
                                    case 0:
                                        if ("" !== t && null != t) {
                                            u.next = 2;
                                            break
                                        }
                                        return u.abrupt("return", e.toArray());
                                    case 2:
                                        if (0 !== (a = Array.from(this.tokenizer.tokenize(t)).filter((function(u) {
                                                return u.length > 1 || (0, d.default)(u)
                                            })).sort((function(u, e) {
                                                return e.length - u.length
                                            }))).length) {
                                            u.next = 5;
                                            break
                                        }
                                        return u.abrupt("return", e.toArray());
                                    case 5:
                                        r = 0, l = e.toArray(), s = (0, o.default)(a), u.prev = 8, s.s();
                                    case 10:
                                        if ((f = s.n()).done) {
                                            u.next = 42;
                                            break
                                        }
                                        F = f.value, C = [], E = (0, o.default)(l), u.prev = 14, E.s();
                                    case 16:
                                        if ((p = E.n()).done) {
                                            u.next = 29;
                                            break
                                        }
                                        if (h = p.value, !0 !== (null == n ? void 0 : n.aborted)) {
                                            u.next = 20;
                                            break
                                        }
                                        throw new D.AbortError;
                                    case 20:
                                        return A = h.id, null == (m = this.msgKeyToTokens.get(A)) && (m = this._getMsgTokens(h), this.msgKeyToTokens.set(h.id, m)), this._doMsgTokensIncludeTokenPrefix(m, F) && C.push(h), r += 1, u.next = 27, (0, c.asyncSleepAfterGivenLoopIteration)(r, 100, 0);
                                    case 27:
                                        u.next = 16;
                                        break;
                                    case 29:
                                        u.next = 34;
                                        break;
                                    case 31:
                                        u.prev = 31, u.t0 = u.catch(14), E.e(u.t0);
                                    case 34:
                                        return u.prev = 34, E.f(), u.finish(34);
                                    case 37:
                                        if (0 !== (l = C).length) {
                                            u.next = 40;
                                            break
                                        }
                                        return u.abrupt("break", 42);
                                    case 40:
                                        u.next = 10;
                                        break;
                                    case 42:
                                        u.next = 47;
                                        break;
                                    case 44:
                                        u.prev = 44, u.t1 = u.catch(8), s.e(u.t1);
                                    case 47:
                                        return u.prev = 47, s.f(), u.finish(47);
                                    case 50:
                                        if (this.newMsgsToTokenize = [], !0 !== (null == n ? void 0 : n.aborted)) {
                                            u.next = 53;
                                            break
                                        }
                                        throw new D.AbortError;
                                    case 53:
                                        return u.abrupt("return", l);
                                    case 54:
                                    case "end":
                                        return u.stop()
                                }
                            }), u, this, [
                                [8, 44, 47, 50],
                                [14, 31, 34, 37]
                            ])
                        }))), function() {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "cacheMessageTokens",
                        value: function(u) {
                            var e = this;
                            this.newMsgsToTokenize.push(u), 100 === this.newMsgsToTokenize.length && setTimeout((function() {
                                return e._processMsgsToTokenize()
                            }), 0)
                        }
                    }, {
                        key: "removeMessageTokensFromCache",
                        value: function(u) {
                            this.msgKeyToTokens.delete(u.id)
                        }
                    }, {
                        key: "clearTokensCache",
                        value: function() {
                            this.msgKeyToTokens.clear()
                        }
                    }, {
                        key: "_processMsgsToTokenize",
                        value: (e = (0, r.default)(i.default.mark((function u() {
                            var e, t, n, r, l, s, D, d;
                            return i.default.wrap((function(u) {
                                for (;;) switch (u.prev = u.next) {
                                    case 0:
                                        e = this.newMsgsToTokenize, this.newMsgsToTokenize = [], t = (0, o.default)(e.entries()), u.prev = 3, t.s();
                                    case 5:
                                        if ((n = t.n()).done) {
                                            u.next = 16;
                                            break
                                        }
                                        if (r = (0, a.default)(n.value, 2), l = r[0], s = r[1], D = s.id, !this.msgKeyToTokens.has(D)) {
                                            u.next = 10;
                                            break
                                        }
                                        return u.abrupt("continue", 14);
                                    case 10:
                                        return d = this._getMsgTokens(s), this.msgKeyToTokens.set(D, d), u.next = 14, (0, c.asyncSleepAfterGivenLoopIteration)(l, 100, 40);
                                    case 14:
                                        u.next = 5;
                                        break;
                                    case 16:
                                        u.next = 21;
                                        break;
                                    case 18:
                                        u.prev = 18, u.t0 = u.catch(3), t.e(u.t0);
                                    case 21:
                                        return u.prev = 21, t.f(), u.finish(21);
                                    case 24:
                                    case "end":
                                        return u.stop()
                                }
                            }), u, this, [
                                [3, 18, 21, 24]
                            ])
                        }))), function() {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "_doMsgTokensIncludeTokenPrefix",
                        value: function(u, e) {
                            var t, n = (0, o.default)(u);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    if (t.value.startsWith(e)) return !0
                                }
                            } catch (u) {
                                n.e(u)
                            } finally {
                                n.f()
                            }
                            return !1
                        }
                    }, {
                        key: "_getMsgTokens",
                        value: function(u) {
                            var e = this.getMsgText(u);
                            return null == e ? [] : Array.from(this.tokenizer.tokenize(e)).filter((function(u) {
                                return u.length > 1 || (0, d.default)(u)
                            }))
                        }
                    }]), u
                }();
            e.default = F
        },
        295418: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = (0, h.useModelValues)(u.chat, ["isGroup", "muteExpiration", "archive", "isPSA"]),
                    t = (0, h.useModelValues)(u.mute, ["isMuted"]),
                    n = (0, h.useModelValues)(u.settings, ["showArchiveV2"]),
                    m = function(u) {
                        e.isPSA ? i.Cmd.muteChatFromEntryPoint((0, c.unproxy)(e), u, 2) : i.Cmd.muteChat((0, c.unproxy)(e), u)
                    },
                    v = function() {
                        m(!1), s.ModalManager.close()
                    },
                    g = t.isMuted,
                    x = e.muteExpiration;
                if (e.archive && (0, l.archiveV2Supported)() && n.showArchiveV2) return (0, A.jsx)(o.default, {
                    children: (0, A.jsx)(F.TextSpan, {
                        theme: "muted",
                        size: "16",
                        children: p.fbt._("Archived chats are muted", null, {
                            hk: "31ZVD"
                        })
                    })
                });
                var B, b = g ? function() {
                        var u = e.isGroup ? r.default.t(206) : r.default.t(205);
                        s.ModalManager.open((0, A.jsx)(E.ConfirmPopup, {
                            onOK: v,
                            okText: r.default.t(39),
                            onCancel: function() {
                                return s.ModalManager.close()
                            },
                            cancelText: p.fbt._("Cancel", null, {
                                hk: "H0gNq"
                            }),
                            children: u
                        }))
                    } : function() {
                        m(!0)
                    },
                    j = g ? r.default.t(674) : p.fbt._("Mute notifications", null, {
                        hk: "2Fm15X"
                    });
                if (g && x) {
                    var M = a.Clock.untilStr(x);
                    B = (0, A.jsx)(F.TextDiv, {
                        theme: "muted",
                        children: M
                    })
                }
                var _ = (0, A.jsx)(f.default, {
                        checked: g,
                        onChange: b
                    }),
                    y = (0, A.jsx)(F.TextSpan, {
                        theme: "title",
                        children: j
                    }),
                    S = (0, A.jsx)(D.SettingsNotificationsIcon, {
                        color: d.SvgColorProp.SECONDARY,
                        height: 20
                    });
                return (0, A.jsx)(C.default, {
                    icon: S,
                    testid: "block-mute",
                    side: _,
                    onClick: b,
                    title: y,
                    secondaryTitle: B
                })
            };
            var a = t(87330),
                i = t(896674),
                o = n(t(209222)),
                r = n(t(758927)),
                l = t(518005),
                s = t(628707),
                D = t(59537),
                c = t(121657),
                d = t(401304),
                f = n(t(494594)),
                F = t(558288),
                C = n(t(603249)),
                E = t(404186),
                p = t(548360),
                h = t(948752),
                A = t(785893)
        },
        462487: (u, e, t) => {
            "use strict";
            var n = t(263026).default,
                a = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.productMsgs,
                    t = u.chat,
                    a = (0, o.default)(u, d),
                    f = (0, D.default)();
                return (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(l.default, (0, i.default)({
                        msgsCollection: e,
                        msgsCollectionUpdateEvents: ["add", "remove", "reset", "products_loaded"],
                        queryCollection: function(u) {
                            return f((function() {
                                e.queryProducts(t, u)
                            }))
                        },
                        getHasBefore: function() {
                            return e.hasProductBefore
                        },
                        getQueryBefore: function() {
                            return e.hasProductBefore ? n.resolve() : null
                        },
                        emptyText: s.fbt._("No products", null, {
                            hk: "8o7dB"
                        }),
                        chat: t
                    }, a)), (0, c.jsx)(r.HistorySyncGalleryPlaceholder, {
                        chat: t
                    })]
                })
            };
            var i = a(t(81109)),
                o = a(t(506479)),
                r = t(507281),
                l = a(t(419544)),
                s = t(548360),
                D = a(t(38619)),
                c = t(785893),
                d = ["productMsgs", "chat"]
        },
        596355: (u, e, t) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.msg.senderObj.formattedShortName;
                return (0, a.jsx)(n.TextSpan, {
                    children: e
                })
            };
            var n = t(558288),
                a = t(785893)
        },
        131157: (u, e, t) => {
            "use strict";
            var n = t(739163).default,
                a = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.fullCollection,
                    t = u.selectedMessages,
                    a = u.mediaMsgs,
                    P = u.selectable,
                    T = u.onMessageSelect,
                    w = u.theme,
                    I = u.isFilterEnabled,
                    N = void 0 !== I && I,
                    R = u.filterText,
                    O = (0, M.useModelValues)(u.chat, ["linkCount", "docCount", "productCount", "endOfHistoryTransferType"]),
                    L = (0, v.useState)((function() {
                        return a.toArray()
                    })),
                    G = (0, r.default)(L, 2),
                    V = G[0],
                    H = G[1],
                    U = (0, x.default)((function() {
                        return new A.default((function(u) {
                            return u.text
                        }))
                    })),
                    z = (0, v.useRef)(null),
                    q = (0, S.default)(),
                    Y = (0, v.useRef)(),
                    W = (0, g.default)(),
                    K = (0, v.useCallback)(function() {
                        var u = (0, o.default)(i.default.mark((function u(e) {
                            var t, o, r;
                            return i.default.wrap((function(u) {
                                for (;;) switch (u.prev = u.next) {
                                    case 0:
                                        if (null === (t = Y.current) || void 0 === t || t.abort(), N) {
                                            u.next = 5;
                                            break
                                        }
                                        return H(a.toArray()), W(), u.abrupt("return");
                                    case 5:
                                        return Y.current = new n, o = Y.current.signal, u.prev = 7, u.next = 10, U.current.filter(a, e, o);
                                    case 10:
                                        r = u.sent, o.aborted || q.aborted || (H(r), W()), u.next = 18;
                                        break;
                                    case 14:
                                        if (u.prev = 14, u.t0 = u.catch(7), u.t0.name === d.ABORT_ERROR) {
                                            u.next = 18;
                                            break
                                        }
                                        throw u.t0;
                                    case 18:
                                    case "end":
                                        return u.stop()
                                }
                            }), u, null, [
                                [7, 14]
                            ])
                        })));
                        return function() {
                            return u.apply(this, arguments)
                        }
                    }(), [a, U, N, W, q]);
                (0, B.useListener)(a, ["add", "remove", "reset", "query_media_before"], (function() {
                    return K(R)
                })), (0, v.useEffect)((function() {
                    return K(R),
                        function() {
                            var u;
                            return null === (u = Y.current) || void 0 === u ? void 0 : u.abort()
                        }
                }), [K, R]), (0, B.useListener)(a, "add", (function(u) {
                    N && U.current.cacheMessageTokens(u)
                })), (0, B.useListener)(a, "remove", (function(u) {
                    t && t.isSelected(u) && t.setVal(u, !1), N && U.current.removeMessageTokensFromCache(u)
                })), (0, B.useListener)(a, "reset", (function() {
                    t && t.unsetAll(), N && U.current.clearTokensCache()
                })), (0, v.useEffect)((function() {
                    N && a.forEach((function(u) {
                        U.current.cacheMessageTokens(u)
                    }))
                }), [a, U, N]);
                var X = function(u, e, t, n, a, i) {
                        var o = null,
                            r = (0, c.default)(u, (function(u) {
                                return -u.t
                            })).slice(0, !0 === e ? u.length : 6);
                        return (0, D.default)(r, (function(u, r) {
                            var D = !0 !== e ? "chatInfo" : void 0,
                                c = (0, k.jsx)(p.default, {
                                    aspectRatio: i ? 1.1 : 1,
                                    msg: u,
                                    hoverEvent: e,
                                    selectable: t,
                                    selectedMessages: n,
                                    onMessageSelect: a,
                                    theme: D,
                                    hideableSecondRow: !0 !== e && r >= 3 && r <= 5
                                }, u.id.toString());
                            if (!0 !== e) return [c];
                            var d = f.Clock.monthStr(u.t);
                            if (d !== o) {
                                o = d;
                                var F = (0, k.jsx)(E.default, {
                                    children: d
                                }, `header-${u.t}`);
                                return [].concat((0, l.default)((0, s.default)(6, (function(e) {
                                    return (0, k.jsx)(h.EmptyCanvas, {}, `padding-${u.t}-${e}`)
                                }))), [F, c])
                            }
                            return [c]
                        }))
                    }(V, e, P, t, T, "chat-info" === w),
                    Z = (0, y.default)(),
                    $ = (0, _.default)((function(u) {
                        a.hasMediaBefore && Z((function() {
                            a.queryMedia({
                                chat: (0, m.unproxy)(O),
                                msg: u
                            })
                        }))
                    }), 100),
                    Q = (0, _.default)((function(u) {
                        a.hasMediaBefore && u.scrollTop + F.SCROLL_FUDGE > u.scrollHeight - u.clientHeight && $(a.head())
                    }), 100),
                    J = (0, b.default)(),
                    uu = (0, r.default)(J, 2),
                    eu = uu[0],
                    tu = uu[1].height,
                    nu = (0, j.default)(eu, z);
                return (0, v.useEffect)((function() {
                    N && a.hasMediaBefore && !a.queryMediaBefore && null != z.current && z.current.scrollHeight < tu + F.SCROLL_FUDGE && $(a.head())
                })), (0, v.useEffect)((function() {
                    a.hasMediaBefore && $()
                }), []), (0, k.jsxs)(k.Fragment, {
                    children: [(0, k.jsx)(h.MediaGalleryView, {
                        ref: nu,
                        medias: X,
                        mediaCollection: a,
                        fullCollection: e,
                        chat: (0, m.unproxy)(O),
                        onScroll: function(u) {
                            Q(u.currentTarget)
                        },
                        theme: w
                    }), "chat-info" !== w && (0, k.jsx)(C.HistorySyncGalleryPlaceholder, {
                        chat: O
                    })]
                })
            };
            var i = a(t(887757)),
                o = a(t(348926)),
                r = a(t(963038)),
                l = a(t(319)),
                s = a(t(498913)),
                D = a(t(594654)),
                c = a(t(189734)),
                d = t(497384),
                f = t(87330),
                F = t(295769),
                C = t(507281),
                E = a(t(140243)),
                p = a(t(393051)),
                h = t(507759),
                A = a(t(340297)),
                m = t(121657),
                v = t(667294),
                g = a(t(802418)),
                x = a(t(982669)),
                B = t(779740),
                b = a(t(494824)),
                j = a(t(154194)),
                M = t(948752),
                _ = a(t(32594)),
                y = a(t(38619)),
                S = a(t(788413)),
                k = t(785893)
        },
        140243: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                return (0, o.jsx)("div", {
                    className: (0, i.default)(r.container, a.isOSMac && r.fontWeight500),
                    children: u.children
                })
            };
            var a = t(937915),
                i = n(t(156720)),
                o = t(785893),
                r = {
                    container: {
                        width: "ee0xuasv",
                        marginTop: "opp68qpq",
                        marginEnd: "jnwc1y2a",
                        marginBottom: "brac1wpa",
                        marginStart: "svoq16ka",
                        fontSize: "ovllcyds",
                        color: "mfzfak1c",
                        textTransform: "ofejerhi",
                        "@media (max-width: 1024px)": {
                            width: "ndsmr6pb"
                        },
                        "@media (max-width: 800px)": {
                            width: "btsmn2h9"
                        }
                    },
                    fontWeight500: {
                        fontWeight: "hnx8ox4h"
                    }
                }
        },
        393051: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.msg,
                    t = u.hoverEvent,
                    n = u.selectable,
                    C = u.onMessageSelect,
                    E = u.theme,
                    p = u.selectedMessages,
                    h = (0, d.useState)((function() {
                        return !(!p || !p.isSelected(e))
                    })),
                    A = (0, a.default)(h, 2),
                    m = A[0],
                    v = A[1],
                    g = (0, d.useRef)(null);
                (0, f.useListener)(p, e.id.toString(), (function(u) {
                    p && m !== u && v(u)
                }));
                var x = e.mediaData,
                    B = x.type === o.default.TYPE.IMAGE && x.renderableUrl ? function(u) {
                        u.nativeEvent.dataTransfer.setData("text/uri-list", e.mediaData.renderableUrl)
                    } : null;
                return (0, F.jsx)(r.MediaThumb, {
                    onClick: function(u) {
                        if (n && C) C(e, !m);
                        else if (x.mediaStage !== l.MEDIA_DATA_STAGE.ERROR_MISSING) {
                            var t;
                            u && u.stopPropagation();
                            var a = e.id;
                            if (x.isGif || x.type === o.default.TYPE.IMAGE) {
                                var r = g.current;
                                t = function(u) {
                                    return a.equals(u) && r ? r : null
                                }
                            }
                            i.Cmd.mediaViewerModal({
                                msg: (0, D.unproxy)(e),
                                getZoomNode: t
                            })
                        } else s.ModalManager.open((0, F.jsx)(c.default, {
                            msg: e
                        }))
                    },
                    hoverEvent: t,
                    selectable: n,
                    selected: m,
                    onMessageSelect: C,
                    onDragStart: B,
                    msg: e,
                    theme: E,
                    imgRef: function(u) {
                        g.current = u
                    },
                    aspectRatio: u.aspectRatio,
                    hideableSecondRow: u.hideableSecondRow
                })
            };
            var a = n(t(963038)),
                i = t(896674),
                o = n(t(719703)),
                r = t(21761),
                l = t(966454),
                s = t(628707),
                D = t(121657),
                c = n(t(860726)),
                d = t(667294),
                f = t(779740),
                F = t(785893)
        },
        21761: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.MediaThumb = function(u) {
                var e, t = u.msg,
                    n = u.selectable,
                    y = u.theme,
                    S = u.active,
                    k = u.imgRef,
                    P = u.containerRef,
                    T = u.onMessageSelect,
                    w = u.selected,
                    I = void 0 !== w && w,
                    N = u.onClick,
                    R = u.onDragStart,
                    O = u.preferPreview,
                    L = u.hideableSecondRow,
                    G = (0, g.default)(),
                    V = (0, m.useRef)(null),
                    H = (0, m.useRef)(null),
                    U = (0, m.useRef)(null),
                    z = (0, m.useState)(!1),
                    q = (0, a.default)(z, 2),
                    Y = q[0],
                    W = q[1],
                    K = (0, m.useState)(null),
                    X = (0, a.default)(K, 2),
                    Z = X[0],
                    $ = X[1];
                (0, B.useModelValues)(t, ["isKept", "star"]), (0, x.useListener)(t.mediaData, ["change:preview", "change:mediaStage"], G);
                (0, m.useEffect)((function() {
                    return null == k || k(V.current), null == P || P(H.current), null == t.mediaData.preview && null == t.mediaData.fullPreviewData && (t.mediaData.type !== l.default.TYPE.IMAGE && t.mediaData.type !== l.default.TYPE.VIDEO || t.downloadMedia({
                            downloadEvenIfExpensive: !1,
                            isUserInitiated: !1,
                            rmrReason: h.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER
                        })),
                        function() {
                            null == k || k(null), null == P || P(null)
                        }
                }), []), (0, m.useEffect)((function() {
                    null == k || k(V.current), null == P || P(H.current)
                }), [k, P, V, H]);
                var Q, J = function(e) {
                        if (!0 !== u.showTooltip || "viewerFlowTransparent" === y || !(e instanceof HTMLElement)) return null;
                        var n = e.offsetWidth;
                        return {
                            menu: (0, j.jsx)(f.default, {
                                msg: t
                            }),
                            anchor: e,
                            dirY: o.DirY.TOP,
                            dirX: o.DirX.CENTER,
                            offsetX: !0 === S ? .5 * -n * .13 : 0,
                            type: o.MenuType.Tooltip
                        }
                    },
                    uu = (0, b.useTimeout)((function() {
                        var u;
                        U.current && (u = U.current, $(J(u)))
                    }), 500),
                    eu = (0, a.default)(uu, 2),
                    tu = eu[0],
                    nu = eu[1],
                    au = function(u) {
                        var e = u.mediaStage,
                            t = u.preview,
                            n = u.fullPreviewData;
                        switch (e) {
                            case F.MEDIA_DATA_STAGE.RESOLVED:
                            case F.MEDIA_DATA_STAGE.PROGRESSIVE_READY:
                            case F.MEDIA_DATA_STAGE.EXISTS:
                                return _.Ready;
                            case F.MEDIA_DATA_STAGE.INIT:
                                return null != t || null != n ? _.Ready : _.Loading;
                            case F.MEDIA_DATA_STAGE.REMOTE_NEED_UPLOAD:
                            case F.MEDIA_DATA_STAGE.NEED_UPLOAD:
                                return _.NeedsUpload;
                            case F.MEDIA_DATA_STAGE.FETCHING:
                            case F.MEDIA_DATA_STAGE.DECRYPTING:
                            case F.MEDIA_DATA_STAGE.PREPARING:
                            case F.MEDIA_DATA_STAGE.UPLOADING:
                            case F.MEDIA_DATA_STAGE.SENDING:
                            case F.MEDIA_DATA_STAGE.REMOTE_UPLOADING:
                            case F.MEDIA_DATA_STAGE.FINALIZING:
                            case F.MEDIA_DATA_STAGE.REUPLOADING:
                                return _.Loading;
                            case F.MEDIA_DATA_STAGE.NEED_POKE:
                                return _.NeedsPoke;
                            case F.MEDIA_DATA_STAGE.ERROR_FILE_NOT_READABLE:
                            case F.MEDIA_DATA_STAGE.ERROR_MISSING:
                            case F.MEDIA_DATA_STAGE.ERROR_TOO_LARGE:
                            case F.MEDIA_DATA_STAGE.ERROR_UNSUPPORTED:
                                return _.Error
                        }
                    }(t.mediaData);
                (!0 === n || Y && u.hoverEvent) && (Q = (0, j.jsxs)("div", {
                    className: (0, v.default)(M.mediaSelect),
                    children: [(0, j.jsx)("div", {
                        className: (0, v.default)(M.shadeTop, I && M.shadeTopSelected, au !== _.Ready && M.noPointerEvents),
                        onClick: u.onClick
                    }), (0, j.jsx)(i.default, {
                        onChange: function() {
                            T && T(t, !I)
                        },
                        hover: Y,
                        checked: I
                    })]
                }));
                var iu, ou = (0, v.default)(M.canvasComponent, "chatInfo" !== y && M.mediaGalleryThumbnail, "chatInfo" === y && M.chatInfoDrawerThumbnail, Boolean(L) && M.hideableSecondRow, ("viewerFlow" === y || "viewerFlowTransparent" === y) && M.viewerFlow, "viewerFlowTransparent" === y && M.viewerFlowTransparent, Boolean(S) && M.active),
                    ru = Boolean((0, A.isKeepInChatReadEnabled)() && t.isKept),
                    lu = t.star ? (0, j.jsx)("div", {
                        className: (0, v.default)(M.icon),
                        children: (0, j.jsx)(C.StarIcon, {
                            width: 16,
                            height: 15
                        })
                    }) : null,
                    su = ru ? (0, j.jsx)("div", {
                        className: (0, v.default)(M.icon),
                        children: (0, j.jsx)(r.KeepInChatIcon, {
                            width: 15.64,
                            height: 14.67
                        })
                    }) : null,
                    Du = Z ? (0, j.jsx)(E.UIE, {
                        displayName: "MediaThumbTitle",
                        popable: !0,
                        escapable: !0,
                        requestDismiss: function() {
                            $(null)
                        },
                        requestRecentFocusOnUnmount: !1,
                        children: (0, j.jsx)(p.default, {
                            tooltip: Z
                        })
                    }) : null,
                    cu = {
                        paddingTop: 1 / (null !== (e = u.aspectRatio) && void 0 !== e ? e : 1) * 100 + "%"
                    },
                    du = function() {
                        var u = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        t.downloadMedia({
                            downloadEvenIfExpensive: u,
                            isUserInitiated: !1,
                            rmrReason: h.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER
                        })
                    };
                switch (au) {
                    case _.Loading:
                        iu = (0, j.jsx)(d.MediaThumbLoading, {
                            mediaType: t.mediaData.type
                        });
                        break;
                    case _.NeedsPoke:
                        iu = (0, j.jsx)(d.MediaThumbNeedsPoke, {
                            onClick: function() {
                                return du(!0)
                            }
                        });
                        break;
                    case _.Error:
                        iu = (0, j.jsx)(d.MediaThumbError, {
                            onClick: u.onClick,
                            mediaType: t.mediaData.type
                        });
                        break;
                    case _.NeedsUpload:
                    case _.Ready:
                        iu = null
                }
                return (0, j.jsxs)("div", {
                    ref: H,
                    className: ou,
                    "data-testid": "media-canvas",
                    onMouseOver: function() {
                        Y || W(!0)
                    },
                    onMouseEnter: function(u) {
                        var e;
                        Y || (u.persist(), W(!0), e = u.target, U.current = e, tu())
                    },
                    onMouseLeave: function() {
                        Y && (nu(), W(!1), $(null))
                    },
                    children: [Q, (0, j.jsxs)("div", {
                        className: (0, v.default)(M.canvasBody, I && M.canvasBodySelected),
                        children: [(0, j.jsx)(D.default, {
                            mediaData: t.mediaData
                        }), (0, j.jsx)(s.default, {
                            mediaData: t.mediaData,
                            selected: I
                        }), (0, j.jsxs)("div", {
                            className: (0, v.default)(M.iconsContainer),
                            children: [lu, su]
                        })]
                    }), (0, j.jsx)(c.default, {
                        downloadMedia: du,
                        onClick: N,
                        onDragStart: R,
                        preferPreview: O,
                        ref: V,
                        msg: t
                    }), Du, iu, (0, j.jsx)("div", {
                        style: cu
                    })]
                })
            };
            var a = n(t(963038)),
                i = n(t(934502)),
                o = t(482510),
                r = t(947974),
                l = n(t(719703)),
                s = n(t(576991)),
                D = n(t(409079)),
                c = n(t(358379)),
                d = t(231296),
                f = n(t(596355)),
                F = t(966454),
                C = t(136896),
                E = t(776097),
                p = n(t(397550)),
                h = n(t(229677)),
                A = t(173725),
                m = t(667294),
                v = n(t(156720)),
                g = n(t(802418)),
                x = t(779740),
                B = t(948752),
                b = t(837810),
                j = t(785893),
                M = {
                    noPointerEvents: {
                        pointerEvents: "m62443ks"
                    },
                    iconsContainer: {
                        display: "p357zi0d",
                        position: "lhggkp7q",
                        end: "mf2g8abl",
                        bottom: "lrw9n60e"
                    },
                    icon: {
                        color: "k17s6i4e",
                        pointerEvents: "m62443ks"
                    },
                    shadeTop: {
                        position: "lhggkp7q",
                        top: "qq0sjtgm",
                        start: "tkdu00h0",
                        width: "ln8gz9je",
                        height: "lniyxyh2",
                        cursor: "ajgl1lbb",
                        backgroundImage: "fwz54z48"
                    },
                    shadeTopSelected: {
                        display: "qibyn6m3"
                    },
                    canvasBody: {
                        position: "lhggkp7q",
                        top: "qq0sjtgm",
                        start: "tkdu00h0",
                        zIndex: "b9fczbqn",
                        boxSizing: "cm280p3y",
                        width: "ln8gz9je",
                        height: "ppled2lx",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        pointerEvents: "m62443ks",
                        borderTopColor: "rqga0wu5",
                        borderEndColor: "ayqm650w",
                        borderBottomColor: "sb46ev41",
                        borderStartColor: "q8kvkxy1",
                        borderTopStyle: "d1poss59",
                        borderEndStyle: "gyj32ejw",
                        borderBottomStyle: "cmcp1to6",
                        borderStartStyle: "eg0col54",
                        borderTopWidth: "fl2x09zf",
                        borderEndWidth: "r2wk4q3o",
                        borderBottomWidth: "nnij903c",
                        borderStartWidth: "lr2nq6lc",
                        transition: "pcik6s50",
                        backgroundImage: "oxe6ytxh"
                    },
                    canvasBodySelected: {
                        borderTopWidth: "c30xqvpq",
                        borderEndWidth: "afj3pimr",
                        borderBottomWidth: "hdjlbwd0",
                        borderStartWidth: "e6y86myk"
                    },
                    mediaGalleryThumbnail: {
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        backgroundColor: "fvb4mgxr",
                        borderTopStartRadius: "ho9ovbg7",
                        borderTopEndRadius: "tcg15ap9",
                        borderBottomEndRadius: "c5wy1lv0",
                        borderBottomStartRadius: "bqysl6j9"
                    },
                    chatInfoDrawerThumbnail: {
                        backgroundColor: "kqvcv5rh",
                        marginEnd: "bugiwsl0",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        borderTopStartRadius: "bbr44loe",
                        borderTopEndRadius: "ooj5yc5b",
                        borderBottomEndRadius: "m8i16etx",
                        borderBottomStartRadius: "cw0ivh8j"
                    },
                    mediaSelect: {
                        position: "lhggkp7q",
                        top: "qq0sjtgm",
                        zIndex: "g2bpp9au",
                        boxSizing: "cm280p3y",
                        width: "ln8gz9je",
                        paddingTop: "qomlamqu",
                        paddingStart: "mc6o24uu"
                    },
                    canvasComponent: {
                        position: "g0rxnol2",
                        width: "d0st09ow",
                        marginEnd: "ikc09dv3",
                        marginBottom: "hha4v2jc",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        "@media (max-width: 1024px)": {
                            width: "bazijzwv"
                        },
                        "@media (max-width: 800px)": {
                            width: "n0hkwe29"
                        }
                    },
                    hideableSecondRow: {
                        display: "qibyn6m3",
                        "@media (max-width: 1024px)": {
                            display: "s9437i69"
                        },
                        "@media (max-width: 800px)": {
                            display: "g3bgiwf5"
                        }
                    },
                    viewerFlow: {
                        position: "g0rxnol2",
                        boxSizing: "cm280p3y",
                        display: "p357zi0d",
                        flexGrow: "tvf2evcx",
                        flexShrink: "oq44ahr5",
                        flexBasis: "lb5m6g5c",
                        alignItems: "gndfcl4n",
                        justifyContent: "ac2vgrno",
                        width: "oxqu41e7",
                        minWidth: "bar07sny",
                        maxWidth: "ttwqun4y",
                        height: "jbydbyre",
                        marginEnd: "ikc09dv3",
                        marginBottom: "mpdn4nr2",
                        marginStart: "svoq16ka",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        cursor: "ajgl1lbb",
                        opacity: "bs7a17vp",
                        transition: "kvhexry3",
                        ":hover": {
                            outline: "pzeoqukz"
                        }
                    },
                    viewerFlowTransparent: {
                        opacity: "eu4m05gk"
                    },
                    active: {
                        borderTop: "jmaq5bi8",
                        borderEnd: "popit0kw",
                        borderBottom: "iur5tn1g",
                        borderStart: "qrr5pbl4",
                        transform: "of0uvz1c",
                        ":hover": {
                            outline: "iqk5z7se"
                        }
                    }
                },
                _ = t(76672).Mirrored(["Loading", "Ready", "Error", "NeedsPoke", "NeedsUpload"])
        },
        576991: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.selected,
                    t = u.mediaData;
                switch (t.type) {
                    case r.default.TYPE.AUDIO:
                        return (0, D.jsx)(f, {
                            duration: t.duration,
                            selected: e
                        });
                    case r.default.TYPE.VIDEO:
                        return t.isGif ? null : (0, D.jsx)(f, {
                            duration: t.duration,
                            selected: e
                        });
                    default:
                        return null
                }
            };
            var a = n(t(859713)),
                i = t(87330),
                o = t(157405),
                r = n(t(719703)),
                l = n(t(706442)),
                s = n(t(156720)),
                D = t(785893),
                c = {
                    position: "lhggkp7q",
                    bottom: "blj1rie1",
                    left: "qwwpii8a",
                    display: "p357zi0d",
                    fontSize: "lak21jic",
                    lineHeight: "bvyb7wbk",
                    color: "pp8r7oc8",
                    pointerEvents: "m62443ks"
                },
                d = {
                    "@media (min-width: 800px) and (max-width: 999px), (min-width: 1025px) and (max-width: 1180px)": {
                        display: "jyd2w1n8"
                    }
                };

            function f(u) {
                var e = u.duration,
                    t = u.selected,
                    n = i.Clock.durationStr(e);
                return n ? (0, D.jsx)("span", {
                    className: (0, l.default)((0, s.default)(c), (0, o.cx)((0, a.default)({}, (0, s.default)(d), t))),
                    children: n
                }) : null
            }
        },
        409079: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t = u.mediaData;
                if (!t) return null;
                t.type === a.default.TYPE.AUDIO ? e = (0, s.jsx)(i.MsgAudioIcon, {}) : t.type === a.default.TYPE.VIDEO && (e = t.isGif ? (0, s.jsx)(o.MsgGifIcon, {}) : (0, s.jsx)(r.MsgVideoIcon, {}));
                if (null == e) return null;
                return (0, s.jsx)("div", {
                    className: (0, l.default)(D),
                    children: e
                })
            };
            var a = n(t(719703)),
                i = t(75566),
                o = t(84701),
                r = t(124522),
                l = n(t(156720)),
                s = t(785893),
                D = {
                    position: "lhggkp7q",
                    bottom: "lrw9n60e",
                    start: "qzp46edm",
                    color: "k17s6i4e",
                    pointerEvents: "m62443ks"
                }
        },
        358379: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(81109)),
                i = n(t(719703)),
                o = n(t(93099)),
                r = t(966454),
                l = n(t(121510)),
                s = t(667294),
                D = n(t(156720)),
                c = t(785893),
                d = {
                    blur: {
                        filter: "hddtmpml"
                    },
                    mediaCanvas: {
                        backgroundPosition: "t3g6t33p",
                        backgroundSize: "qnwaluaf",
                        boxSizing: "cm280p3y",
                        cursor: "ajgl1lbb",
                        height: "ppled2lx",
                        left: "tukmaf4q",
                        position: "lhggkp7q",
                        top: "qq0sjtgm",
                        transform: "p5jrpzbl",
                        transition: "g6mp970w",
                        width: "ln8gz9je",
                        zIndex: "jnl3jror"
                    },
                    shade: {
                        background: "d9ddx5tg",
                        bottom: "jxacihee",
                        height: "jdwybkuq",
                        left: "tukmaf4q",
                        pointerEvents: "m62443ks",
                        position: "lhggkp7q",
                        width: "ln8gz9je"
                    }
                },
                f = (0, s.forwardRef)((function(u, e) {
                    var t = u.children,
                        n = u.className,
                        a = u.shade,
                        i = u.url,
                        o = u.onClick,
                        r = u.onDragStart,
                        l = !0 === a ? (0, c.jsx)("div", {
                            className: (0, D.default)(d.shade)
                        }) : null,
                        s = null != i && "" !== i ? {
                            backgroundImage: `url(${i})`
                        } : null;
                    return (0, c.jsxs)("div", {
                        className: n,
                        "data-testid": "media-canvas-img",
                        style: s,
                        onClick: o,
                        ref: e,
                        onDragStart: r,
                        draggable: null != r || null,
                        children: [t, l]
                    })
                }));
            f.displayName = "ImageNode";
            var F = (0, s.forwardRef)((function(u, e) {
                var t = u.mediaData,
                    n = u.onClick,
                    a = u.onDragStart,
                    i = u.shade,
                    r = u.shouldApplyBlur,
                    l = u.url;
                return (0, c.jsx)(f, {
                    ref: e,
                    onClick: n,
                    onDragStart: a,
                    className: (0, D.default)(d.mediaCanvas, !!r && d.blur),
                    shade: i,
                    url: t.preview instanceof o.default ? t.preview.url() : null,
                    children: null != l ? (0, c.jsx)("div", {
                        className: (0, D.default)(d.mediaCanvas),
                        style: {
                            backgroundImage: `url(${l})`
                        }
                    }) : null
                })
            }));
            F.displayName = "ImageThumb";
            var C = (0, s.forwardRef)((function(u, e) {
                var t = u.mediaData,
                    n = u.onClick,
                    a = u.onDragStart,
                    i = u.shade;
                u.shouldApplyBlur, u.url;
                return null != t.preview ? (0, c.jsx)(F, {
                    ref: e,
                    onClick: n,
                    onDragStart: a,
                    mediaData: t
                }) : (0, c.jsx)(f, {
                    ref: e,
                    onClick: n,
                    onDragStart: a,
                    className: (0, D.default)(d.mediaCanvas),
                    shade: i
                })
            }));
            C.displayName = "Placeholder";
            var E = (0, s.forwardRef)((function(u, e) {
                var t = u.downloadMedia,
                    n = u.msg,
                    s = u.onClick,
                    E = u.onDragStart,
                    p = u.preferPreview,
                    h = n.mediaData,
                    A = {
                        onClick: s,
                        onDragStart: E,
                        ref: e
                    };
                switch (h.type) {
                    case i.default.TYPE.AUDIO:
                        return (0, c.jsx)(f, (0, a.default)((0, a.default)({}, A), {}, {
                            className: `${(0,D.default)(d.mediaCanvas)} attach-media-audio-thumb`
                        }));
                    case i.default.TYPE.VIDEO:
                        var m, v = null == h.fullPreviewData,
                            g = null !== (m = h.fullPreviewData) && void 0 !== m ? m : h.preview,
                            x = h.isGif && !h.preview;
                        return (0, c.jsx)(f, (0, a.default)((0, a.default)({}, A), {}, {
                            className: `${(0,D.default)(d.mediaCanvas,v&&d.blur)} ${x?"media-video-thumb":""}`,
                            shade: !0,
                            url: g instanceof o.default ? g.url() : null
                        }));
                    case i.default.TYPE.IMAGE:
                        var B = null != h.preview && h.mediaStage === r.MEDIA_DATA_STAGE.NEED_POKE;
                        return !0 === p ? (0, c.jsx)(C, (0, a.default)((0, a.default)({}, A), {}, {
                            mediaData: h,
                            shade: n.star,
                            shouldApplyBlur: B
                        })) : (0, c.jsx)("div", {
                            className: (0, D.default)(d.mediaCanvas),
                            children: (0, c.jsx)(l.default, {
                                mediaData: h,
                                placeholderRenderer: function() {
                                    return (0, c.jsx)(C, (0, a.default)((0, a.default)({}, A), {}, {
                                        mediaData: h,
                                        shade: n.star,
                                        shouldApplyBlur: B
                                    }))
                                },
                                renderProgressively: !0,
                                downloadMedia: t,
                                children: function(u) {
                                    return (0, c.jsx)(F, (0, a.default)((0, a.default)({}, A), {}, {
                                        mediaData: h,
                                        shade: n.star,
                                        shouldApplyBlur: B,
                                        url: u
                                    }))
                                }
                            })
                        });
                    default:
                        return (0, c.jsx)(f, (0, a.default)((0, a.default)({}, A), {}, {
                            shade: n.star
                        }))
                }
            }));
            E.displayName = "MediaImageThumb";
            var p = E;
            e.default = p
        },
        231296: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.MediaThumbError = function(u) {
                return (0, l.jsx)("button", {
                    className: (0, r.default)(s.container),
                    onClick: u.onClick,
                    children: (0, l.jsx)(D, {
                        mediaType: u.mediaType
                    })
                })
            }, e.MediaThumbLoading = function(u) {
                return (0, l.jsx)("div", {
                    className: (0, r.default)(s.container),
                    children: (0, l.jsx)(D, {
                        mediaType: u.mediaType
                    })
                })
            }, e.MediaThumbNeedsPoke = function(u) {
                return (0, l.jsx)("div", {
                    className: (0, r.default)(s.container),
                    children: (0, l.jsx)(i.Download, {
                        onClick: u.onClick
                    })
                })
            };
            var a = t(21181),
                i = t(69253),
                o = t(707337),
                r = n(t(156720)),
                l = t(785893),
                s = {
                    container: {
                        position: "lhggkp7q",
                        top: "qq0sjtgm",
                        start: "tkdu00h0",
                        zIndex: "jnl3jror",
                        boxSizing: "cm280p3y",
                        display: "p357zi0d",
                        alignItems: "gndfcl4n",
                        justifyContent: "ac2vgrno",
                        width: "ln8gz9je",
                        height: "ppled2lx"
                    },
                    icon: {
                        color: "cyi0n1nm"
                    }
                };

            function D(u) {
                return "video" === u.mediaType ? (0, l.jsx)(o.VideoPlaceholderIcon, {
                    xstyle: s.icon
                }) : (0, l.jsx)(a.ImgPlaceholderIcon, {
                    xstyle: s.icon
                })
            }
        },
        222876: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BubbleIcon = function(u) {
                var e, t, n = u.iconXstyle,
                    D = u.height,
                    c = u.width,
                    d = u.viewBox,
                    f = (0, i.default)(u, s);
                if (d) {
                    var F = d.x,
                        C = void 0 === F ? 0 : F,
                        E = d.y,
                        p = void 0 === E ? 0 : E,
                        h = d.width,
                        A = void 0 === h ? 0 : h,
                        m = d.height;
                    e = [C, p, A, void 0 === m ? 0 : m].join(" ")
                }
                var v = 24,
                    g = 24;
                null == D && null == c || (v = D, g = c);
                return (0, l.jsx)(o.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "bubble"
                }, f), {}, {
                    children: (0, l.jsx)("svg", {
                        viewBox: null !== (t = e) && void 0 !== t ? t : "0 0 24 24",
                        height: v,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(n),
                        version: "1.1",
                        x: "0px",
                        y: "0px",
                        enableBackground: "new 0 0 24 24",
                        xmlSpace: "preserve",
                        children: (0, l.jsx)("path", {
                            fill: "currentColor",
                            d: "M17.1,3.6c-1.6-0.7-3.3-1.1-5.1-1.1c-5.8,0-10.4,3.7-10.4,8.3c0,2.7,1.6,5.2,4.3,6.7c0,0,0.1,0,0.1,0.1 c0.1,0.1,0.2,0.2,0.3,0.3c0.3,0.8-0.4,1.5-0.3,1.5c-0.4,0.3-0.6,0.9-0.4,1.4c0.2,0.4,0.6,0.7,1.1,0.7c0.1,0,0.1,0,0.2,0 c0,0,2.6-0.6,4.4-2.3c2,0.1,4-0.2,5.7-0.9c3.5-1.4,5.6-4.2,5.6-7.3C22.4,7.9,20.4,5.1,17.1,3.6z M16.3,16.9L16.3,16.9 c-1.6,0.7-3.5,1-5.4,0.8h-0.3l-0.2,0.2c-1,1.1-2.5,1.7-3.3,2c0.4-0.6,0.7-1.5,0.3-2.4c-0.2-0.5-0.5-0.8-0.7-0.9 c-0.1-0.1-0.2-0.1-0.3-0.2c-2.3-1.3-3.6-3.3-3.6-5.5C2.9,7,7,3.9,12,3.9c1.6,0,3.2,0.3,4.6,0.9c2.8,1.2,4.5,3.5,4.5,6 C21.1,13.4,19.3,15.7,16.3,16.9z"
                        })
                    })
                }))
            };
            var a = n(t(81109)),
                i = n(t(506479)),
                o = t(401304),
                r = n(t(156720)),
                l = t(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        564817: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ChatInfoVideoIcon = function(u) {
                var e, t, n = u.iconXstyle,
                    D = u.height,
                    c = u.width,
                    d = u.viewBox,
                    f = (0, i.default)(u, s);
                if (d) {
                    var F = d.x,
                        C = void 0 === F ? 0 : F,
                        E = d.y,
                        p = void 0 === E ? 0 : E,
                        h = d.width,
                        A = void 0 === h ? 0 : h,
                        m = d.height;
                    t = [C, p, A, void 0 === m ? 0 : m].join(" ")
                }
                var v = 13,
                    g = 21;
                null == D && null == c || (v = D, g = c);
                return (0, l.jsx)(o.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "chat-info-video"
                }, f), {}, {
                    children: (0, l.jsx)("svg", {
                        viewBox: null !== (e = t) && void 0 !== e ? e : "0 0 21 13",
                        height: v,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(n),
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.17.5c1.11 0 2.009.9 2.009 2.009v8.482c0 1.11-.9 2.009-2.01 2.009H2.01C.899 13 0 12.1 0 10.991V2.51C0 1.399.9.5 2.009.5h11.16Zm7.17 1.746a.893.893 0 0 1 .196.558v7.892a.893.893 0 0 1-1.45.697l-3.015-2.41V4.517l3.014-2.411a.893.893 0 0 1 1.255.14Z",
                            fill: "#00A884"
                        })
                    })
                }))
            };
            var a = n(t(81109)),
                i = n(t(506479)),
                o = t(401304),
                r = n(t(156720)),
                l = t(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        14630: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.DialpadIcon = function(u) {
                var e, t, n = u.iconXstyle,
                    D = u.height,
                    c = u.width,
                    d = u.viewBox,
                    f = (0, i.default)(u, s);
                if (d) {
                    var F = d.x,
                        C = void 0 === F ? 0 : F,
                        E = d.y,
                        p = void 0 === E ? 0 : E,
                        h = d.width,
                        A = void 0 === h ? 0 : h,
                        m = d.height;
                    t = [C, p, A, void 0 === m ? 0 : m].join(" ")
                }
                var v = 24,
                    g = 24;
                null == D && null == c || (v = D, g = c);
                return (0, l.jsx)(o.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "dialpad"
                }, f), {}, {
                    children: (0, l.jsx)("svg", {
                        viewBox: null !== (e = t) && void 0 !== e ? e : "0 0 24 24",
                        height: v,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(n),
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            d: "M12.2727 22.25C11.7727 22.25 11.3448 22.0721 10.9891 21.7164C10.6327 21.36 10.4545 20.9318 10.4545 20.4318C10.4545 19.9318 10.6327 19.5036 10.9891 19.1473C11.3448 18.7915 11.7727 18.6136 12.2727 18.6136C12.7727 18.6136 13.2009 18.7915 13.5573 19.1473C13.913 19.5036 14.0909 19.9318 14.0909 20.4318C14.0909 20.9318 13.913 21.36 13.5573 21.7164C13.2009 22.0721 12.7727 22.25 12.2727 22.25ZM6.81818 5.88636C6.31818 5.88636 5.8903 5.70818 5.53455 5.35182C5.17818 4.99606 5 4.56818 5 4.06818C5 3.56818 5.17818 3.14 5.53455 2.78364C5.8903 2.42788 6.31818 2.25 6.81818 2.25C7.31818 2.25 7.74606 2.42788 8.10182 2.78364C8.45818 3.14 8.63636 3.56818 8.63636 4.06818C8.63636 4.56818 8.45818 4.99606 8.10182 5.35182C7.74606 5.70818 7.31818 5.88636 6.81818 5.88636ZM6.81818 11.3409C6.31818 11.3409 5.8903 11.1627 5.53455 10.8064C5.17818 10.4506 5 10.0227 5 9.52273C5 9.02273 5.17818 8.59455 5.53455 8.23818C5.8903 7.88242 6.31818 7.70455 6.81818 7.70455C7.31818 7.70455 7.74606 7.88242 8.10182 8.23818C8.45818 8.59455 8.63636 9.02273 8.63636 9.52273C8.63636 10.0227 8.45818 10.4506 8.10182 10.8064C7.74606 11.1627 7.31818 11.3409 6.81818 11.3409ZM6.81818 16.7955C6.31818 16.7955 5.8903 16.6176 5.53455 16.2618C5.17818 15.9055 5 15.4773 5 14.9773C5 14.4773 5.17818 14.0491 5.53455 13.6927C5.8903 13.337 6.31818 13.1591 6.81818 13.1591C7.31818 13.1591 7.74606 13.337 8.10182 13.6927C8.45818 14.0491 8.63636 14.4773 8.63636 14.9773C8.63636 15.4773 8.45818 15.9055 8.10182 16.2618C7.74606 16.6176 7.31818 16.7955 6.81818 16.7955ZM17.7273 5.88636C17.2273 5.88636 16.7991 5.70818 16.4427 5.35182C16.087 4.99606 15.9091 4.56818 15.9091 4.06818C15.9091 3.56818 16.087 3.14 16.4427 2.78364C16.7991 2.42788 17.2273 2.25 17.7273 2.25C18.2273 2.25 18.6555 2.42788 19.0118 2.78364C19.3676 3.14 19.5455 3.56818 19.5455 4.06818C19.5455 4.56818 19.3676 4.99606 19.0118 5.35182C18.6555 5.70818 18.2273 5.88636 17.7273 5.88636ZM12.2727 16.7955C11.7727 16.7955 11.3448 16.6176 10.9891 16.2618C10.6327 15.9055 10.4545 15.4773 10.4545 14.9773C10.4545 14.4773 10.6327 14.0491 10.9891 13.6927C11.3448 13.337 11.7727 13.1591 12.2727 13.1591C12.7727 13.1591 13.2009 13.337 13.5573 13.6927C13.913 14.0491 14.0909 14.4773 14.0909 14.9773C14.0909 15.4773 13.913 15.9055 13.5573 16.2618C13.2009 16.6176 12.7727 16.7955 12.2727 16.7955ZM17.7273 16.7955C17.2273 16.7955 16.7991 16.6176 16.4427 16.2618C16.087 15.9055 15.9091 15.4773 15.9091 14.9773C15.9091 14.4773 16.087 14.0491 16.4427 13.6927C16.7991 13.337 17.2273 13.1591 17.7273 13.1591C18.2273 13.1591 18.6555 13.337 19.0118 13.6927C19.3676 14.0491 19.5455 14.4773 19.5455 14.9773C19.5455 15.4773 19.3676 15.9055 19.0118 16.2618C18.6555 16.6176 18.2273 16.7955 17.7273 16.7955ZM17.7273 11.3409C17.2273 11.3409 16.7991 11.1627 16.4427 10.8064C16.087 10.4506 15.9091 10.0227 15.9091 9.52273C15.9091 9.02273 16.087 8.59455 16.4427 8.23818C16.7991 7.88242 17.2273 7.70455 17.7273 7.70455C18.2273 7.70455 18.6555 7.88242 19.0118 8.23818C19.3676 8.59455 19.5455 9.02273 19.5455 9.52273C19.5455 10.0227 19.3676 10.4506 19.0118 10.8064C18.6555 11.1627 18.2273 11.3409 17.7273 11.3409ZM12.2727 11.3409C11.7727 11.3409 11.3448 11.1627 10.9891 10.8064C10.6327 10.4506 10.4545 10.0227 10.4545 9.52273C10.4545 9.02273 10.6327 8.59455 10.9891 8.23818C11.3448 7.88242 11.7727 7.70455 12.2727 7.70455C12.7727 7.70455 13.2009 7.88242 13.5573 8.23818C13.913 8.59455 14.0909 9.02273 14.0909 9.52273C14.0909 10.0227 13.913 10.4506 13.5573 10.8064C13.2009 11.1627 12.7727 11.3409 12.2727 11.3409ZM12.2727 5.88636C11.7727 5.88636 11.3448 5.70818 10.9891 5.35182C10.6327 4.99606 10.4545 4.56818 10.4545 4.06818C10.4545 3.56818 10.6327 3.14 10.9891 2.78364C11.3448 2.42788 11.7727 2.25 12.2727 2.25C12.7727 2.25 13.2009 2.42788 13.5573 2.78364C13.913 3.14 14.0909 3.56818 14.0909 4.06818C14.0909 4.56818 13.913 4.99606 13.5573 5.35182C13.2009 5.70818 12.7727 5.88636 12.2727 5.88636Z",
                            fill: "#8696A0"
                        })
                    })
                }))
            };
            var a = n(t(81109)),
                i = n(t(506479)),
                o = t(401304),
                r = n(t(156720)),
                l = t(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        431221: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ForwardFilledIcon = function(u) {
                var e, t, n = u.iconXstyle,
                    D = u.height,
                    c = u.width,
                    d = u.viewBox,
                    f = (0, i.default)(u, s);
                if (d) {
                    var F = d.x,
                        C = void 0 === F ? 0 : F,
                        E = d.y,
                        p = void 0 === E ? 0 : E,
                        h = d.width,
                        A = void 0 === h ? 0 : h,
                        m = d.height;
                    t = [C, p, A, void 0 === m ? 0 : m].join(" ")
                }
                var v = 16,
                    g = 21;
                null == D && null == c || (v = D, g = c);
                return (0, l.jsx)(o.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "forward-filled"
                }, f), {}, {
                    children: (0, l.jsx)("svg", {
                        viewBox: null !== (e = t) && void 0 !== e ? e : "0 0 21 16",
                        height: v,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(n),
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            d: "M12.778 1.31318C12.778 0.590175 13.651 0.228175 14.161 0.739175L20.206 6.79017C20.2813 6.8654 20.341 6.95472 20.3817 7.05304C20.4225 7.15136 20.4435 7.25675 20.4435 7.36317C20.4435 7.4696 20.4225 7.57499 20.3817 7.67331C20.341 7.77163 20.2813 7.86095 20.206 7.93617L14.161 13.9872C14.0476 14.1006 13.9032 14.1779 13.7459 14.2091C13.5886 14.2404 13.4256 14.2243 13.2775 14.1628C13.1294 14.1013 13.0028 13.9973 12.9139 13.8638C12.825 13.7304 12.7777 13.5735 12.778 13.4132V10.6812C7.68197 10.6812 3.94897 12.1362 1.17397 15.2922C0.927967 15.5712 0.471967 15.3342 0.571967 14.9762C2.00197 9.80317 5.49697 4.97218 12.778 3.93118V1.31318Z",
                            fill: "currentColor"
                        })
                    })
                }))
            };
            var a = n(t(81109)),
                i = n(t(506479)),
                o = t(401304),
                r = n(t(156720)),
                l = t(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        659954: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.KeepInChatMediaIcon = function(u) {
                var e, t, n = u.iconXstyle,
                    D = u.height,
                    c = u.width,
                    d = u.viewBox,
                    f = (0, i.default)(u, s);
                if (d) {
                    var F = d.x,
                        C = void 0 === F ? 0 : F,
                        E = d.y,
                        p = void 0 === E ? 0 : E,
                        h = d.width,
                        A = void 0 === h ? 0 : h,
                        m = d.height;
                    e = [C, p, A, void 0 === m ? 0 : m].join(" ")
                }
                var v = 24,
                    g = 24;
                null == D && null == c || (v = D, g = c);
                return (0, l.jsx)(o.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "keep-in-chat-media"
                }, f), {}, {
                    children: (0, l.jsx)("svg", {
                        viewBox: null !== (t = e) && void 0 !== t ? t : "0 0 24 24",
                        height: v,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(n),
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 3H17C18.1 3 19 3.9 19 5V21L12 18L5 21L5.01 5C5.01 3.9 5.9 3 7 3ZM12 16.387L17.6562 18.8531V5.27815C17.6562 4.65596 17.1472 4.1469 16.525 4.1469H7.475C6.85281 4.1469 6.34375 4.65596 6.34375 5.27815V18.8531L12 16.387Z",
                            fill: "currentColor"
                        })
                    })
                }))
            };
            var a = n(t(81109)),
                i = n(t(506479)),
                o = t(401304),
                r = n(t(156720)),
                l = t(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        609318: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LockIcon = function(u) {
                var e, t, n = u.iconXstyle,
                    D = u.height,
                    c = u.width,
                    d = u.viewBox,
                    f = (0, i.default)(u, s);
                if (d) {
                    var F = d.x,
                        C = void 0 === F ? 0 : F,
                        E = d.y,
                        p = void 0 === E ? 0 : E,
                        h = d.width,
                        A = void 0 === h ? 0 : h,
                        m = d.height;
                    t = [C, p, A, void 0 === m ? 0 : m].join(" ")
                }
                var v = 24,
                    g = 24;
                null == D && null == c || (v = D, g = c);
                return (0, l.jsx)(o.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "lock"
                }, f), {}, {
                    children: (0, l.jsx)("svg", {
                        viewBox: null !== (e = t) && void 0 !== e ? e : "0 0 24 24",
                        height: v,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(n),
                        version: "1.1",
                        x: "0px",
                        y: "0px",
                        enableBackground: "new 0 0 24 24",
                        xmlSpace: "preserve",
                        children: (0, l.jsx)("path", {
                            fill: "currentColor",
                            d: "M17.3,7.6h-0.9V5.8c0-2.5-1.9-4.4-4.4-4.4S7.6,3.3,7.6,5.8v1.8H6.7c-1,0-1.8,0.8-1.8,1.8v8.9 c0,1,0.8,1.8,1.8,1.8h10.6c1,0,1.8-0.8,1.8-1.8V9.4C19.1,8.4,18.3,7.6,17.3,7.6z M12,15.8c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S13.1,15.8,12,15.8z M14.7,7.6H9.2V5.8c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7v1.8C14.6,7.6,14.7,7.6,14.7,7.6z"
                        })
                    })
                }))
            };
            var a = n(t(81109)),
                i = n(t(506479)),
                o = t(401304),
                r = n(t(156720)),
                l = t(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        75566: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.MsgAudioIcon = function(u) {
                var e, t, n = u.iconXstyle,
                    D = u.height,
                    c = u.width,
                    d = u.viewBox,
                    f = (0, i.default)(u, s);
                if (d) {
                    var F = d.x,
                        C = void 0 === F ? 0 : F,
                        E = d.y,
                        p = void 0 === E ? 0 : E,
                        h = d.width,
                        A = void 0 === h ? 0 : h,
                        m = d.height;
                    t = [C, p, A, void 0 === m ? 0 : m].join(" ")
                }
                var v = 14,
                    g = 16;
                null == D && null == c || (v = D, g = c);
                return (0, l.jsx)(o.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "msg-audio"
                }, f), {}, {
                    children: (0, l.jsx)("svg", {
                        viewBox: null !== (e = t) && void 0 !== e ? e : "0 0 16 14",
                        height: v,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(n),
                        version: "1.1",
                        x: "0px",
                        y: "0px",
                        enableBackground: "new 0 0 16 14",
                        xmlSpace: "preserve",
                        children: (0, l.jsx)("path", {
                            fill: "currentColor",
                            d: "M8,1C5.105,1,2.789,3.316,2.789,6.211v4.053C2.789,11.247,3.542,12,4.526,12h1.737V7.368H3.947V6.211 c0-2.258,1.795-4.053,4.053-4.053s4.053,1.795,4.053,4.053v1.158H9.737V12h1.737c0.984,0,1.737-0.753,1.737-1.737V6.211 C13.211,3.316,10.895,1,8,1z"
                        })
                    })
                }))
            };
            var a = n(t(81109)),
                i = n(t(506479)),
                o = t(401304),
                r = n(t(156720)),
                l = t(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        84701: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.MsgGifIcon = function(u) {
                var e, t, n = u.iconXstyle,
                    D = u.height,
                    c = u.width,
                    d = u.viewBox,
                    f = (0, i.default)(u, s);
                if (d) {
                    var F = d.x,
                        C = void 0 === F ? 0 : F,
                        E = d.y,
                        p = void 0 === E ? 0 : E,
                        h = d.width,
                        A = void 0 === h ? 0 : h,
                        m = d.height;
                    t = [C, p, A, void 0 === m ? 0 : m].join(" ")
                }
                var v = 14,
                    g = 21;
                null == D && null == c || (v = D, g = c);
                return (0, l.jsx)(o.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "msg-gif"
                }, f), {}, {
                    children: (0, l.jsx)("svg", {
                        viewBox: null !== (e = t) && void 0 !== e ? e : "0 0 21 14",
                        height: v,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(n),
                        version: "1.1",
                        x: "0px",
                        y: "0px",
                        enableBackground: "new 0 0 21 14",
                        xmlSpace: "preserve",
                        children: (0, l.jsx)("path", {
                            fill: "currentColor",
                            d: "M17.5,1.1H3.4C2,1.1,0.8,2.3,0.8,3.7v5.8c0,1.4,1.2,2.6,2.6,2.6h14.1c1.4,0,2.6-1.2,2.6-2.6V3.7 C20.1,2.3,18.9,1.1,17.5,1.1z M9.1,7.1c0,1.6-1,2.5-2.6,2.5c-1.8,0-2.8-1.1-2.8-3s1.1-3,2.8-3c1.4,0,2.4,0.8,2.6,2H7.6 C7.4,5.1,7,4.8,6.4,4.8c-0.8,0-1.3,0.7-1.3,1.8s0.5,1.8,1.4,1.8c0.7,0,1.1-0.4,1.2-1V7.3H6.4v-1h2.7V7.1z M11.7,9.5h-1.5V3.7h1.5 V9.5z M16.9,4.9h-2.4v1.3h2.2v1.1h-2.2v2.1H13V3.7h3.9V4.9z"
                        })
                    })
                }))
            };
            var a = n(t(81109)),
                i = n(t(506479)),
                o = t(401304),
                r = n(t(156720)),
                l = t(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        122269: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ReactionsMediaIcon = function(u) {
                var e, t, n = u.iconXstyle,
                    D = u.height,
                    c = u.width,
                    d = u.viewBox,
                    f = (0, i.default)(u, s);
                if (d) {
                    var F = d.x,
                        C = void 0 === F ? 0 : F,
                        E = d.y,
                        p = void 0 === E ? 0 : E,
                        h = d.width,
                        A = void 0 === h ? 0 : h,
                        m = d.height;
                    e = [C, p, A, void 0 === m ? 0 : m].join(" ")
                }
                var v = 22,
                    g = 22;
                null == D && null == c || (v = D, g = c);
                return (0, l.jsx)(o.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "reactions-media"
                }, f), {}, {
                    children: (0, l.jsxs)("svg", {
                        viewBox: null !== (t = e) && void 0 !== t ? t : "0 0 22 22",
                        height: v,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(n),
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.7876 13.5052C17.0162 13.1059 16.9367 12.6639 16.7206 12.3619C16.5017 12.056 16.1238 11.8555 15.6936 11.8894L15.6803 11.8905L15.6671 11.8921C15.5339 11.9081 15.3879 11.9263 15.2322 11.9457L15.2304 11.946C14.0846 12.0889 12.3624 12.303 10.6257 12.303C8.9895 12.303 7.32403 12.0999 6.18881 11.961L6.18672 11.9607L6.18514 11.9605C5.97491 11.9348 5.78112 11.9111 5.61079 11.8916L5.59949 11.8903L5.58814 11.8894C4.72776 11.8215 4.05312 12.7233 4.52556 13.5374C5.71277 15.6966 7.99576 17.3739 10.6561 17.3739C13.3222 17.3739 15.6035 15.6601 16.7876 13.5052ZM15.4412 13.2298C14.3947 14.8833 12.6136 16.0739 10.6561 16.0739C8.68205 16.0739 6.89318 14.8913 5.85186 13.2295L6.04174 13.2527C7.16989 13.3907 8.90466 13.603 10.6257 13.603C12.4485 13.603 14.2399 13.3796 15.3806 13.2373L15.4412 13.2298Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            d: "M9.65 7.99998C9.65 9.10455 8.97843 9.99998 8.15 9.99998C7.32157 9.99998 6.65 9.10455 6.65 7.99998C6.65 6.89541 7.32157 5.99998 8.15 5.99998C8.97843 5.99998 9.65 6.89541 9.65 7.99998Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            d: "M13.15 9.99998C13.9784 9.99998 14.65 9.10455 14.65 7.99998C14.65 6.89541 13.9784 5.99998 13.15 5.99998C12.3216 5.99998 11.65 6.89541 11.65 7.99998C11.65 9.10455 12.3216 9.99998 13.15 9.99998Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M0 11C0 5.1336 4.78363 0.349976 10.65 0.349976C16.5164 0.349976 21.3 5.1336 21.3 11C21.3 16.8651 16.5472 21.65 10.65 21.65C4.78363 21.65 0 16.8664 0 11ZM10.65 1.64998C5.5016 1.64998 1.3 5.85157 1.3 11C1.3 16.1484 5.5016 20.35 10.65 20.35C15.8267 20.35 20 16.1496 20 11C20 5.85157 15.7984 1.64998 10.65 1.64998Z",
                            fill: "currentColor"
                        })]
                    })
                }))
            };
            var a = n(t(81109)),
                i = n(t(506479)),
                o = t(401304),
                r = n(t(156720)),
                l = t(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        340888: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ReplyIcon = function(u) {
                var e, t, n = u.iconXstyle,
                    D = u.height,
                    c = u.width,
                    d = u.viewBox,
                    f = (0, i.default)(u, s);
                if (d) {
                    var F = d.x,
                        C = void 0 === F ? 0 : F,
                        E = d.y,
                        p = void 0 === E ? 0 : E,
                        h = d.width,
                        A = void 0 === h ? 0 : h,
                        m = d.height;
                    e = [C, p, A, void 0 === m ? 0 : m].join(" ")
                }
                var v = 24,
                    g = 24;
                null == D && null == c || (v = D, g = c);
                return (0, l.jsx)(o.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "reply"
                }, f), {}, {
                    children: (0, l.jsx)("svg", {
                        viewBox: null !== (t = e) && void 0 !== t ? t : "0 0 24 24",
                        height: v,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(n),
                        version: "1.1",
                        x: "0px",
                        y: "0px",
                        xmlSpace: "preserve",
                        children: (0, l.jsx)("path", {
                            fill: "currentColor",
                            d: "M10.5,4.3V9h1.3c6.5,0,9.6,4.2,10.6,8.7c-2.5-3.1-6.2-4.9-10.2-5c-0.3,0-0.5,0-0.5,0l-1.2,0.1V14v3.2l-8.7-6.5L10.5,4.3  M10.6,2.9L10.6,2.9c-0.3,0-0.5,0.1-0.7,0.2l-10.2,7.4v0.3l10.1,7.5c0.2,0.1,0.4,0.2,0.7,0.2l0,0c0.7,0,1.2-0.5,1.2-1.2V14 c0,0,0.2,0,0.4,0c1.5,0,7.4,0.5,11,7.1l0.9-0.3c0-5.7-3-13.1-12.2-13.1V4.1l0,0C11.8,3.4,11.3,2.9,10.6,2.9L10.6,2.9z"
                        })
                    })
                }))
            };
            var a = n(t(81109)),
                i = n(t(506479)),
                o = t(401304),
                r = n(t(156720)),
                l = t(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        475426: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.SettingsIcon = function(u) {
                var e, t, n = u.iconXstyle,
                    D = u.height,
                    c = u.width,
                    d = u.viewBox,
                    f = (0, i.default)(u, s);
                if (d) {
                    var F = d.x,
                        C = void 0 === F ? 0 : F,
                        E = d.y,
                        p = void 0 === E ? 0 : E,
                        h = d.width,
                        A = void 0 === h ? 0 : h,
                        m = d.height;
                    t = [C, p, A, void 0 === m ? 0 : m].join(" ")
                }
                var v = 20,
                    g = 20;
                null == D && null == c || (v = D, g = c);
                return (0, l.jsx)(o.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "settings"
                }, f), {}, {
                    children: (0, l.jsx)("svg", {
                        viewBox: null !== (e = t) && void 0 !== e ? e : "0 0 20 20",
                        height: v,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(n),
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M17.502 10c0 .34-.03.66-.07.98l2.11 1.65c.19.15.24.42.12.64l-2 3.46c-.12.22-.38.31-.61.22l-2.49-1c-.52.39-1.08.73-1.69.98l-.38 2.65c-.03.24-.24.42-.49.42h-4c-.25 0-.46-.18-.49-.42l-.38-2.65c-.61-.25-1.17-.58-1.69-.98l-2.49 1c-.22.08-.49 0-.61-.22l-2-3.46a.505.505 0 0 1 .12-.64l2.11-1.65a7.93 7.93 0 0 1-.07-.98c0-.33.03-.66.07-.98L.462 7.37a.493.493 0 0 1-.12-.64l2-3.46c.12-.22.38-.31.61-.22l2.49 1c.52-.39 1.08-.73 1.69-.98l.38-2.65c.03-.24.24-.42.49-.42h4c.25 0 .46.18.49.42l.38 2.65c.61.25 1.17.58 1.69.98l2.49-1c.22-.08.49 0 .61.22l2 3.46c.12.22.07.49-.12.64l-2.11 1.65c.04.32.07.64.07.98zm-11 0c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5z",
                            fill: "currentColor"
                        })
                    })
                }))
            };
            var a = n(t(81109)),
                i = n(t(506479)),
                o = t(401304),
                r = n(t(156720)),
                l = t(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        160962: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.UndoKeepInChatMediaIcon = function(u) {
                var e, t, n = u.iconXstyle,
                    D = u.height,
                    c = u.width,
                    d = u.viewBox,
                    f = (0, i.default)(u, s);
                if (d) {
                    var F = d.x,
                        C = void 0 === F ? 0 : F,
                        E = d.y,
                        p = void 0 === E ? 0 : E,
                        h = d.width,
                        A = void 0 === h ? 0 : h,
                        m = d.height;
                    e = [C, p, A, void 0 === m ? 0 : m].join(" ")
                }
                var v = 24,
                    g = 24;
                null == D && null == c || (v = D, g = c);
                return (0, l.jsx)(o.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "undo-keep-in-chat-media"
                }, f), {}, {
                    children: (0, l.jsx)("svg", {
                        viewBox: null !== (t = e) && void 0 !== t ? t : "0 0 25 24",
                        height: v,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(n),
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            clipRule: "evenodd",
                            d: "m8 3h10c1.1 0 2 .9 2 2v8.8365l-1.3437-.7724v-7.78595c0-.62219-.5091-1.13125-1.1313-1.13125h-9.05c-.62219 0-1.13125.50906-1.13125 1.13125v1.28401l-1.33425-.76688.0005-.79528c0-1.1.89-2 1.99-2zm12 14.9115 3.875 2.2272.9966-1.734-22.97971-13.20787-.996634 1.73399 5.111704 2.93801-.00696 11.13117 7-3 7 3zm-1.3437-.7724-11.31255-6.5019v8.2159l5.65625-2.4661 5.6563 2.4661z",
                            fill: "currentColor",
                            fillRule: "evenodd"
                        })
                    })
                }))
            };
            var a = n(t(81109)),
                i = n(t(506479)),
                o = t(401304),
                r = n(t(156720)),
                l = t(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        593438: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.VoiceCallFilledIcon = function(u) {
                var e, t, n = u.iconXstyle,
                    D = u.height,
                    c = u.width,
                    d = u.viewBox,
                    f = (0, i.default)(u, s);
                if (d) {
                    var F = d.x,
                        C = void 0 === F ? 0 : F,
                        E = d.y,
                        p = void 0 === E ? 0 : E,
                        h = d.width,
                        A = void 0 === h ? 0 : h,
                        m = d.height;
                    t = [C, p, A, void 0 === m ? 0 : m].join(" ")
                }
                var v = 22,
                    g = 22;
                null == D && null == c || (v = D, g = c);
                return (0, l.jsx)(o.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "voice-call-filled"
                }, f), {}, {
                    children: (0, l.jsx)("svg", {
                        viewBox: null !== (e = t) && void 0 !== e ? e : "0 0 22 22",
                        height: v,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(n),
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            d: "M19.685 14.3869L16.7217 14.0486C16.0101 13.9669 15.3101 14.2119 14.8084 14.7136L12.6617 16.8602C9.36005 15.1802 6.65338 12.4852 4.97338 9.17188L7.13172 7.01355C7.63338 6.51188 7.87838 5.81188 7.79672 5.10022L7.45838 2.16022C7.31838 0.981882 6.32672 0.0952148 5.13672 0.0952148H3.11838C1.80005 0.0952148 0.703381 1.19188 0.785047 2.51022C1.40338 12.4736 9.37172 20.4302 19.3234 21.0486C20.6417 21.1302 21.7384 20.0336 21.7384 18.7152V16.6969C21.75 15.5186 20.8634 14.5269 19.685 14.3869Z",
                            fill: "currentColor"
                        })
                    })
                }))
            };
            var a = n(t(81109)),
                i = n(t(506479)),
                o = t(401304),
                r = n(t(156720)),
                l = t(785893),
                s = ["iconXstyle", "height", "width", "viewBox"]
        },
        547657: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(319)),
                i = n(t(334575)),
                o = n(t(993913)),
                r = n(t(281506)),
                l = n(t(502205)),
                s = n(t(199842)),
                D = t(97327),
                c = t(990055),
                d = n(t(383322)),
                f = t(894286),
                F = n(t(758927)),
                C = t(518005),
                E = t(628707),
                p = t(808618),
                h = t(404186),
                A = t(996851),
                m = t(328534),
                v = t(548360),
                g = t(785893),
                x = function(u) {
                    (0, l.default)(t, u);
                    var e = (0, s.default)(t);

                    function t() {
                        var u;
                        (0, i.default)(this, t);
                        for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++) o[l] = arguments[l];
                        return (u = e.call.apply(e, [this].concat(o)))._isGroupParticipant = function(e) {
                            var t;
                            return !!(null === (t = u.props.chat.groupMetadata) || void 0 === t ? void 0 : t.participants.get(e.id))
                        }, u.customSecondaryText = function(e) {
                            var t;
                            return (null === (t = u.props.chat.groupMetadata) || void 0 === t ? void 0 : t.participants.get(e)) ? v.fbt._("Already added to group", null, {
                                hk: "4hdDHF"
                            }).toString() : null
                        }, u.contactFilter = function(e) {
                            var t = u.props.chat.groupMetadata;
                            return !!D.ContactCollection.isFilteredContact(e) && (!(null == t ? void 0 : t.participants.get(e.id)) || v.fbt._("Already added to group", null, {
                                hk: "4hdDHF"
                            }).toString())
                        }, u.confirmAddParticipant = function(e) {
                            var t = u.props.chat;
                            u.push((0, g.jsx)(h.ConfirmPopup, {
                                onOK: u._handleAddParticipant.bind((0, r.default)(u), e),
                                okText: v.fbt._({
                                    "*": "Add participants",
                                    _1: "Add participant"
                                }, [v.fbt._plural(e.length)], {
                                    hk: "3kJwoC"
                                }),
                                onCancel: u._pop,
                                cancelText: v.fbt._("Cancel", null, {
                                    hk: "H0gNq"
                                }),
                                children: (0, g.jsx)(c.EmojiText, {
                                    text: u._makeNameEnumeration(e, t.contact.name)
                                })
                            }))
                        }, u._makeNameEnumeration = function(u, e) {
                            var t = u.map((function(u) {
                                return u.formattedShortName || u.shortName
                            })).reduce((function(e, t, n) {
                                return [].concat((0, a.default)(e), [t, n !== u.length - 1 && F.default.t(253) || ""])
                            }), []);
                            return F.default.t(192, {
                                participants: t.join(""),
                                subject: e
                            })
                        }, u._handleAddParticipant = function(e) {
                            (0, p.addParticipants)(u.props.chat, e).catch((function() {})), E.ModalManager.close()
                        }, u._pop = function() {
                            u.pop()
                        }, u
                    }
                    return (0, o.default)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var u, e, t, n, a = this.props,
                                i = a.chat,
                                o = a.communityName,
                                r = (null === (u = i.groupMetadata) || void 0 === u ? void 0 : u.groupType) === f.GroupType.DEFAULT_ANNOUNCEMENT_GROUP,
                                l = null;
                            null != o && (l = r ? v.fbt._('Participants will also be added to the community "{community-name}" and can join the groups in it.', [v.fbt._param("community-name", (0, g.jsx)(c.EmojiText, {
                                text: o
                            }))], {
                                hk: "3oUb4T"
                            }) : v.fbt._('Participants will also be added to the community "{community-name}" and its announcement group.', [v.fbt._param("community-name", (0, g.jsx)(c.EmojiText, {
                                text: o
                            }))], {
                                hk: "3DDBXm"
                            }));
                            var s = null !== (e = null === (t = i.groupMetadata) || void 0 === t ? void 0 : t.participants.length) && void 0 !== e ? e : 0,
                                D = (0, C.getGroupSizeLimit)(null === (n = i.groupMetadata) || void 0 === n ? void 0 : n.groupType),
                                d = v.fbt._({
                                    "*": "Can't add more than {participants_limit} participants",
                                    _1: "Can't add more than 1 participant"
                                }, [v.fbt._plural(D, "participants_limit")], {
                                    hk: "bUSnr"
                                });
                            this.push((0, g.jsx)(A.SelectModal, {
                                onConfirm: this.confirmAddParticipant,
                                filter: this.contactFilter,
                                title: v.fbt._("Add participant", null, {
                                    hk: "48ECfz"
                                }),
                                isDisabled: this._isGroupParticipant,
                                isSelected: this._isGroupParticipant,
                                customSecondaryText: this.customSecondaryText,
                                listType: A.ListType.PARTICIPANT_MANAGE_MODAL,
                                singleSelectionFooterType: m.FooterType.CONFIRM,
                                multipleSelectionFooterType: m.FooterType.CONFIRM,
                                shouldShowSelectionSummary: !1,
                                disclaimer: l,
                                maxItems: D - s,
                                maxItemsExceedErrorMsg: d
                            }))
                        }
                    }]), t
                }(d.default);
            e.default = x
        },
        838909: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t = u.onEnd,
                    n = (0, r.useFlow)(s.Chats, {
                        transitions: r.FlowTransitions.DrawerLeft,
                        onEnd: t
                    }),
                    D = (0, a.default)(n, 2),
                    c = D[0],
                    d = D[1];
                if (null == d.step) return null;
                switch (d.step) {
                    case s.Chats:
                        e = (0, l.jsx)(o.default, {
                            settings: i.default,
                            onClose: function() {
                                d.pop()
                            }
                        })
                }
                return (0, l.jsx)(c, {
                    flow: d,
                    children: e
                })
            };
            var a = n(t(963038)),
                i = n(t(124400)),
                o = n(t(786410)),
                r = t(780857),
                l = t(785893),
                s = t(76672).Mirrored(["Chats"])
        },
        73205: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(887757)),
                i = n(t(348926)),
                o = n(t(963038)),
                r = n(t(334575)),
                l = n(t(993913)),
                s = n(t(502205)),
                D = n(t(199842)),
                c = t(451226),
                d = t(913257),
                f = t(234459),
                F = n(t(383322)),
                C = n(t(829723)),
                E = n(t(544978)),
                p = t(952991),
                h = t(548360),
                A = t(667294),
                m = t(785893),
                v = function(u) {
                    (0, s.default)(t, u);
                    var e = (0, D.default)(t);

                    function t() {
                        return (0, r.default)(this, t), e.apply(this, arguments)
                    }
                    return (0, l.default)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push((0, m.jsx)(g, {
                                contactId: this.props.contactId,
                                onClose: this.pop
                            }))
                        }
                    }]), t
                }(F.default);
            e.default = v;
            var g = (0, A.forwardRef)((function(u, e) {
                var t = u.contactId,
                    n = (0, A.useState)(void 0),
                    r = (0, o.default)(n, 2),
                    l = r[0],
                    s = r[1],
                    D = (0, A.useState)(!0),
                    F = (0, o.default)(D, 2),
                    v = F[0],
                    g = F[1];
                (0, A.useEffect)((function() {
                    (function() {
                        var u = (0, i.default)(a.default.mark((function u() {
                            var e, n, i;
                            return a.default.wrap((function(u) {
                                for (;;) switch (u.prev = u.next) {
                                    case 0:
                                        return u.next = 2, d.BusinessProfileCollection.update(t, {
                                            getMerchantCompliance: !0
                                        });
                                    case 2:
                                        e = u.sent, n = Array.isArray(e) ? e[0] : e, (i = n.serialize()) ? (s(i.legalEntityDetails || void 0), g(!1)) : __LOG__(3)`compliance: cannot fetch business details (${t.toString()})`;
                                    case 6:
                                    case "end":
                                        return u.stop()
                                }
                            }), u)
                        })));
                        return function() {
                            return u.apply(this, arguments)
                        }
                    })()()
                }), []);
                var x = null != l ? l : {},
                    B = x.entityName,
                    b = x.customerCareDetails,
                    j = x.grievanceOfficerDetails,
                    M = (0, c.getEntityTypeText)(l);
                return (0, m.jsxs)(C.default, {
                    ref: e,
                    theme: "striped",
                    children: [(0, m.jsx)(p.DrawerHeader, {
                        title: h.fbt._("Business details", null, {
                            hk: "m9xzp"
                        }),
                        type: p.DRAWER_HEADER_TYPE.SMALL,
                        onCancel: u.onClose
                    }), (0, m.jsx)(E.default, {
                        theme: v ? "center-content" : void 0,
                        children: v ? (0, m.jsx)(f.ComplianceInfoLoading, {}) : (0, m.jsxs)(m.Fragment, {
                            children: [(0, m.jsxs)(f.ComplianceInfoGroup, {
                                children: [(0, m.jsx)(f.ComplianceInfoPrimitiveField, {
                                    value: B,
                                    label: h.fbt._("Legal Name of Business", null, {
                                        hk: "2s9jD"
                                    })
                                }), (0, m.jsx)(f.ComplianceInfoPrimitiveField, {
                                    value: M,
                                    label: h.fbt._("Business Type", null, {
                                        hk: "48J73B"
                                    })
                                })]
                            }), (0, m.jsxs)(f.ComplianceInfoGroup, {
                                title: h.fbt._("Customer Care Information", null, {
                                    hk: "qlYos"
                                }),
                                children: [(0, m.jsx)(f.ComplianceInfoPrimitiveField, {
                                    value: null == b ? void 0 : b.mobileNumber,
                                    label: h.fbt._("Mobile Phone Number", null, {
                                        hk: "PMTTg"
                                    }),
                                    forceLTR: !0
                                }), (0, m.jsx)(f.ComplianceInfoPrimitiveField, {
                                    value: null == b ? void 0 : b.landlineNumber,
                                    label: h.fbt._("Landline Phone Number", null, {
                                        hk: "tXYaf"
                                    }),
                                    forceLTR: !0
                                }), (0, m.jsx)(f.ComplianceInfoPrimitiveField, {
                                    value: null == b ? void 0 : b.email,
                                    label: h.fbt._("Email Address", null, {
                                        hk: "2jYxR1"
                                    })
                                })]
                            }), (0, m.jsxs)(f.ComplianceInfoGroup, {
                                title: h.fbt._("Grievance Officer Information", null, {
                                    hk: "3emd7I"
                                }),
                                children: [(0, m.jsx)(f.ComplianceInfoPrimitiveField, {
                                    value: null == j ? void 0 : j.name,
                                    label: h.fbt._("Name", null, {
                                        hk: "2vEs6r"
                                    })
                                }), (0, m.jsx)(f.ComplianceInfoPrimitiveField, {
                                    value: null == j ? void 0 : j.mobileNumber,
                                    label: h.fbt._("Mobile Phone Number", null, {
                                        hk: "3kk5I"
                                    }),
                                    forceLTR: !0
                                }), (0, m.jsx)(f.ComplianceInfoPrimitiveField, {
                                    value: null == j ? void 0 : j.landlineNumber,
                                    label: h.fbt._("Landline Phone Number", null, {
                                        hk: "4GBzF0"
                                    })
                                }), (0, m.jsx)(f.ComplianceInfoPrimitiveField, {
                                    value: null == j ? void 0 : j.email,
                                    label: h.fbt._("Email Address", null, {
                                        hk: "3SvbLl"
                                    })
                                })]
                            })]
                        })
                    })]
                }, "merchant-details-modal")
            }));
            g.displayName = "MerchantDetails"
        },
        382732: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(963038)),
                i = n(t(347999)),
                o = t(894995),
                r = n(t(710220)),
                l = t(633757),
                s = t(896674),
                D = t(86395),
                c = t(875058),
                d = t(180966),
                f = t(700306),
                F = t(628707),
                C = t(171738),
                E = n(t(970468)),
                p = t(179677),
                h = t(647435),
                A = n(t(288983)),
                m = n(t(495801)),
                v = t(897663),
                g = n(t(583362)),
                x = t(336568),
                B = n(t(69622)),
                b = t(121891),
                j = t(754360),
                M = t(324928),
                _ = t(544638),
                y = t(860860),
                S = t(969822),
                k = t(329387),
                P = t(942218),
                T = n(t(229677)),
                w = t(173725),
                I = n(t(898113)),
                N = n(t(239524)),
                R = n(t(378244)),
                O = n(t(181375)),
                L = n(t(148708)),
                G = t(445639),
                V = n(t(584878)),
                H = n(t(94794)),
                U = n(t(731291)),
                z = n(t(670077)),
                q = t(493462),
                Y = t(667294),
                W = t(780857),
                K = n(t(803827)),
                X = t(785893),
                Z = t(76672).Mirrored(["GroupInfo", "BroadcastInfo", "ContactInfo", "ProductDetail", "ProductCollection", "ProductLink", "ProductInfo", "CatalogLink", "Cart", "Catalog", "ProductList", "Starred", "Kept", "GroupSettings", "MediaGallery", "GroupInviteLink", "PendingParticipants", "Verification", "DefaultEphemerality", "Ephemeral"]),
                $ = function(u, e) {
                    var t = u.chat,
                        n = u.showFullGroupDescription,
                        $ = u.scrollToParticipantList,
                        Q = u.profileEntryPoint,
                        J = u.onEnd,
                        uu = u.displayName,
                        eu = (0, Y.useRef)(0),
                        tu = (0, K.default)((function(u) {
                            eu.current = u
                        })),
                        nu = (0, Y.useRef)(void 0),
                        au = (0, Y.useContext)(G.DrawerContext),
                        iu = (0, W.useFlow)(function(u) {
                            return u.isGroup ? Z.GroupInfo : u.isBroadcast ? Z.BroadcastInfo : u.isUser ? Z.ContactInfo : void 0
                        }(t), {
                            transitions: W.FlowTransitions.DrawerRight,
                            onEnd: J
                        }),
                        ou = (0, a.default)(iu, 2),
                        ru = ou[0],
                        lu = ou[1],
                        su = (0, Y.useState)(null),
                        Du = (0, a.default)(su, 2),
                        cu = Du[0],
                        du = Du[1],
                        fu = (0, Y.useState)(void 0),
                        Fu = (0, a.default)(fu, 2),
                        Cu = Fu[0],
                        Eu = Fu[1],
                        pu = (0, Y.useState)(null),
                        hu = (0, a.default)(pu, 2),
                        Au = hu[0],
                        mu = hu[1],
                        vu = (0, Y.useState)(null),
                        gu = (0, a.default)(vu, 2),
                        xu = gu[0],
                        Bu = gu[1],
                        bu = (0, Y.useState)(null),
                        ju = (0, a.default)(bu, 2),
                        Mu = ju[0],
                        _u = ju[1],
                        yu = (0, Y.useState)(null),
                        Su = (0, a.default)(yu, 2),
                        ku = Su[0],
                        Pu = Su[1],
                        Tu = (0, Y.useState)(null),
                        wu = (0, a.default)(Tu, 2),
                        Iu = wu[0],
                        Nu = wu[1];
                    (0, Y.useEffect)((function() {
                        t.isGroup ? (0, _.queryAndUpdateGroupMetadataById)(t.id, "interactive") : t.isUser && t.contact.isBusiness && (0, o.canSeeBizProfileV3)() && c.DrawerManager.setDrawerContext("right", (0, p.buildProductCatalogContext)(new x.ProductCatalogSession, (0, D.getMaybeBizPlatformForLogging)(t.contact.id.toString()), T.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE))
                    }), []);
                    var Ru, Ou = function(u, e) {
                            du(u), Eu(e), lu.push(Z.ProductDetail)
                        },
                        Lu = function(u, e) {
                            Bu(u), _u(e), lu.push(Z.CatalogLink)
                        },
                        Gu = function(u) {
                            var e = (0, p.getProductCatalogContext)(au);
                            (0, r.default)(u, t, e) && (Pu(u), lu.push(Z.Cart))
                        },
                        Vu = function(u) {
                            _u(u || t.contact), lu.push(Z.Verification)
                        },
                        Hu = function() {
                            (0, k.shouldShowNUX)(C.NUX.EPHEMERAL) && (0, w.isKeepInChatVisibleUIEnabled)() ? F.ModalManager.open((0, X.jsx)(H.default, {
                                chat: t,
                                fromMe: !0,
                                onOk: function() {
                                    return lu.push(Z.Ephemeral)
                                }
                            })): lu.push(Z.Ephemeral)
                        },
                        Uu = function() {
                            nu.current = void 0, eu.current = 0, lu.push(Z.MediaGallery)
                        },
                        zu = function() {
                            nu.current = q.TABS.PRODUCTS, lu.pop()
                        };
                    if (!lu.step) return null;
                    switch (lu.step) {
                        case Z.GroupInfo:
                            Ru = (0, X.jsx)(R.default, {
                                chat: t,
                                showFullGroupDescription: n,
                                scrollToParticipantList: $,
                                groupMetadata: t.groupMetadata,
                                contact: t.contact,
                                profilePicThumb: t.contact.getProfilePicThumb(),
                                onVerification: Vu,
                                onStarred: function() {
                                    return lu.push(Z.Starred)
                                },
                                onKept: function() {
                                    return lu.push(Z.Kept)
                                },
                                onMediaGallery: Uu,
                                onAdminSetting: function() {
                                    return lu.push(Z.GroupSettings)
                                },
                                onGroupInviteLink: function() {
                                    if ((0, l.isInviteGrowthLockedGroup)(t)) {
                                        var u, e = !!(null === (u = t.groupMetadata) || void 0 === u ? void 0 : u.participants.iAmAdmin());
                                        (0, f.openGrowthLockedModal)(e, !0)
                                    } else lu.push(Z.GroupInviteLink)
                                },
                                onPendingParticipants: function() {
                                    return lu.push(Z.PendingParticipants)
                                },
                                onEphemeral: Hu,
                                onCommunityClick: function() {
                                    var u, e = null === (u = t.groupMetadata) || void 0 === u ? void 0 : u.parentGroup;
                                    e && s.Cmd.openCommunityHome(e, !0)
                                },
                                onClose: function() {
                                    return lu.pop()
                                }
                            });
                            break;
                        case Z.BroadcastInfo:
                            Ru = (0, X.jsx)(I.default, {
                                chat: t,
                                contact: t.contact,
                                onStarred: function() {
                                    return lu.push(Z.Starred)
                                },
                                onMediaGallery: Uu,
                                onClose: function() {
                                    return lu.pop()
                                }
                            });
                            break;
                        case Z.ContactInfo:
                            Ru = (0, X.jsx)(N.default, {
                                contact: t.contact,
                                onVerification: Vu,
                                onStarred: function() {
                                    return lu.push(Z.Starred)
                                },
                                onKept: function() {
                                    return lu.push(Z.Kept)
                                },
                                onMediaGallery: Uu,
                                onProductCatalog: function(u, e) {
                                    var n = t.id;
                                    M.QPL.markerStart(j.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, {
                                        annotations: {
                                            string: {
                                                EntryPoint: e
                                            }
                                        }
                                    }), (0, h.logCarouselViewMoreClick)({
                                        catalogOwnerWid: n,
                                        catalogContext: u
                                    }), lu.push(Z.Catalog)
                                },
                                onProductDetail: Ou,
                                onEphemeral: Hu,
                                onClose: function() {
                                    return lu.pop()
                                },
                                profileEntryPoint: Q
                            });
                            break;
                        case Z.ProductDetail:
                            Ru = (0, X.jsx)(A.default, {
                                chat: t,
                                collectionId: Cu,
                                product: (0, i.default)(cu, "product"),
                                onEnd: function() {
                                    lu.end(S.DismissReason.LIFECYCLE)
                                },
                                onBack: zu,
                                refreshCarousel: !1,
                                onProductLinkClick: function(u) {
                                    du(u), lu.push(Z.ProductLink)
                                },
                                onProductMoreInformation: function(u) {
                                    du(u), lu.push(Z.ProductInfo)
                                },
                                onCartClick: Gu
                            });
                            break;
                        case Z.ProductCollection:
                            var qu = t.id;
                            Ru = (0, X.jsx)(b.CollectionContentDrawer, {
                                contact: t.contact,
                                onProductDetail: Ou,
                                catalogId: qu,
                                onBack: function() {
                                    return lu.pop()
                                },
                                onCatalogLinkClick: Lu,
                                onCartClick: Gu,
                                collection: (0, i.default)(Au, "collection")
                            });
                            break;
                        case Z.ProductLink:
                            Ru = (0, X.jsx)(m.default, {
                                product: (0, i.default)(cu, "product"),
                                onBack: function() {
                                    return lu.pop()
                                }
                            });
                            break;
                        case Z.ProductInfo:
                            Ru = (0, X.jsx)(g.default, {
                                product: (0, i.default)(cu, "product"),
                                onBack: zu
                            });
                            break;
                        case Z.CatalogLink:
                            Ru = (0, X.jsx)(E.default, {
                                catalog: (0, i.default)(xu, "catalog"),
                                contact: (0, i.default)(Mu, "contact"),
                                onBack: function() {
                                    return lu.pop()
                                }
                            });
                            break;
                        case Z.Cart:
                            var Yu = (0, p.getProductCatalogContext)(au),
                                Wu = (0, r.default)((0, i.default)(ku, "cartId"), t, Yu);
                            Ru = (0, i.default)(Wu, "cartFlow");
                            break;
                        case Z.Catalog:
                            Ru = (0, X.jsx)(B.default, {
                                contact: t.contact,
                                onProductDetail: Ou,
                                catalogId: t.id,
                                onBack: function() {
                                    return lu.pop()
                                },
                                businessProfile: t.contact.businessProfile,
                                onCatalogLinkClick: Lu,
                                onCartClick: Gu,
                                onCollectionSeeAll: function(u) {
                                    mu(u), lu.push(Z.ProductCollection)
                                }
                            });
                            break;
                        case Z.ProductList:
                            Ru = (0, X.jsx)(v.ProductListDrawer, {
                                contact: t.contact,
                                onProductDetail: Ou,
                                catalogId: t.id,
                                onBack: function() {
                                    return lu.pop()
                                },
                                businessProfile: t.contact.businessProfile,
                                onCatalogLinkClick: Lu,
                                onCartClick: Gu
                            });
                            break;
                        case Z.Starred:
                            Ru = (0, X.jsx)(y.StarredDrawerLoadable, {
                                chat: t,
                                starredMsgs: t.getStarredMsgs(),
                                onClose: function() {
                                    return lu.pop()
                                }
                            });
                            break;
                        case Z.Kept:
                            Ru = (0, X.jsx)(z.default, {
                                chat: t,
                                keptMsgs: t.getKeptMsgs(),
                                onClose: function() {
                                    return lu.pop()
                                }
                            });
                            break;
                        case Z.GroupSettings:
                            Ru = (0, X.jsx)(U.default, {
                                chat: t,
                                groupMetadata: t.groupMetadata,
                                onClose: function() {
                                    return lu.pop()
                                }
                            });
                            break;
                        case Z.MediaGallery:
                            Ru = (0, X.jsx)(q.MediaGalleryDrawer, {
                                chat: t,
                                onBack: function() {
                                    return lu.pop()
                                },
                                onProductDetail: Ou,
                                setProductsScrollOffset: tu,
                                initialTab: nu.current,
                                productsScrollOffset: eu.current
                            });
                            break;
                        case Z.GroupInviteLink:
                            Ru = (0, X.jsx)(d.GroupInviteLinkDrawerLoadable, {
                                chat: t,
                                groupMetadata: t.groupMetadata,
                                onBack: function() {
                                    return lu.pop()
                                }
                            });
                            break;
                        case Z.PendingParticipants:
                            Ru = (0, X.jsx)(O.default, {
                                chat: t,
                                onBack: function() {
                                    return lu.pop()
                                }
                            });
                            break;
                        case Z.Verification:
                            Ru = (0, X.jsx)(P.VerificationDrawerLoadable, {
                                contact: (0, i.default)(Mu, "contact"),
                                onClose: function() {
                                    return lu.pop()
                                },
                                isFirstLevel: !1
                            });
                            break;
                        case Z.DefaultEphemerality:
                            Ru = (0, X.jsx)(L.default, {
                                onClose: function() {
                                    return lu.pop()
                                },
                                entryPoint: (0, i.default)(Iu, "defaultEphemeralityEntryPoint")
                            });
                            break;
                        case Z.Ephemeral:
                            var Ku = t.isGroup ? T.default.DISAPPEARING_MODE_ENTRY_POINT_TYPE.GROUP_CHAT_DISAPPEARING_MESSAGES_SETTING : T.default.DISAPPEARING_MODE_ENTRY_POINT_TYPE.INDIVIDUAL_CHAT_DISAPPEARING_MESSAGES_SETTING;
                            Ru = (0, X.jsx)(V.default, {
                                chat: t,
                                showNux: (0, k.shouldShowNUX)(C.NUX.EPHEMERAL),
                                entryPoint: T.default.EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_INFO,
                                onClose: function() {
                                    return lu.pop()
                                },
                                onCloseNux: function() {
                                    return lu.push(Z.Ephemeral)
                                },
                                onDDMSettingsClick: function() {
                                    return Nu(Ku), void lu.push(Z.DefaultEphemerality)
                                }
                            })
                    }
                    return (0, X.jsx)(ru, {
                        ref: e,
                        flow: lu,
                        displayName: uu,
                        children: Ru
                    })
                },
                Q = (0, Y.forwardRef)($);
            e.default = Q
        },
        397287: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t = u.msg,
                    n = u.highlightedMsgIds,
                    y = (0, M.default)(),
                    S = (0, j.default)(),
                    k = (0, m.default)(),
                    P = (0, v.default)((function() {
                        return t.type === d.MSG_TYPE.IMAGE ? new C.default.UiAction({
                            uiActionType: C.default.UI_ACTION_TYPE.IMAGE_OPEN,
                            uiActionPreloaded: t.mediaData.mediaStage === D.MEDIA_DATA_STAGE.RESOLVED
                        }) : null
                    })),
                    T = (0, v.default)((function() {
                        return (0, r.constructMediaMsgs)(t.chat, t)
                    })),
                    w = T.current.length,
                    I = (0, x.default)(w),
                    N = (0, A.useRef)(null),
                    R = (0, A.useRef)(),
                    O = (0, A.useRef)(),
                    L = (0, A.useRef)(null),
                    G = (0, A.useRef)(null),
                    V = (0, A.useRef)(null),
                    H = (0, A.useState)(t),
                    U = (0, a.default)(H, 2),
                    z = U[0],
                    q = U[1],
                    Y = (0, A.useState)(!1),
                    W = (0, a.default)(Y, 2),
                    K = W[0],
                    X = W[1],
                    Z = (0, A.useState)(!0),
                    $ = (0, a.default)(Z, 2),
                    Q = $[0],
                    J = $[1],
                    uu = (0, x.default)(z),
                    eu = function() {
                        var u = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = G.current,
                            t = V.current,
                            n = L.current;
                        if (e && t && n) {
                            var a = 0;
                            n instanceof HTMLElement && (a = n.clientWidth / 2 - e.clientWidth / 2), (0, f.default)(t, "stop");
                            var i = 0;
                            u && (i = 300), (0, f.default)(n, "scroll", {
                                duration: i,
                                container: t,
                                offset: a,
                                axis: "x",
                                easing: [.1, .82, .25, 1]
                            })
                        }
                    },
                    tu = function(u) {
                        if (!u) return !0;
                        var e = u.isViewOnce,
                            t = u.isStickerMsg;
                        return !e && !t
                    };
                (0, A.useEffect)((function() {
                    var u;
                    eu(), tu(t) && (u = G.current) && (0, f.default)(u, {
                        opacity: [1, 0],
                        translateY: ["0%", "100%"]
                    }, {
                        duration: 300,
                        delay: 100,
                        easing: [.1, .82, .25, 1]
                    }).then((function() {
                        y.aborted || J(!1)
                    }))
                }), []), (0, A.useEffect)((function() {
                    w > (null != I ? I : 0) && eu()
                }));
                var nu = function(u) {
                        S((function() {
                            T.current.loadMoreAroundIfNeeded(u)
                        })), q(u)
                    },
                    au = function(u) {
                        if (u && u.stopPropagation(), !K) {
                            var e = z;
                            if (e) {
                                var n;
                                (n = T.current.getAfter(e)) ? nu(n): T.current.hasMediaAfter && (R.current || (R.current = T.current.queryMedia({
                                    chat: t.chat,
                                    msg: t,
                                    direction: "after"
                                }).then((function(u) {
                                    y.aborted || "number" == typeof u.length && u.length > 0 && z === t && au()
                                })).catch((function() {
                                    __LOG__(3)`query media msgs error: `
                                })).finally((function() {
                                    R.current = null
                                }))))
                            }
                        }
                    },
                    iu = function(u) {
                        if (u && u.stopPropagation(), !K) {
                            var e = z;
                            if (e) {
                                var n;
                                (n = T.current.getBefore(e)) ? nu(n): T.current.hasMediaBefore && (O.current || (O.current = T.current.queryMedia({
                                    chat: t.chat,
                                    msg: t,
                                    direction: "before"
                                }).then((function(u) {
                                    y.aborted || "number" == typeof u.length && u.length > 0 && z === t && iu()
                                })).catch((function() {
                                    __LOG__(3)`query media msgs error: `
                                })).finally((function() {
                                    O.current = null
                                }))))
                            }
                        }
                    },
                    ou = null;
                t.type === d.MSG_TYPE.IMAGE && (ou = function() {
                    var u, e = P.current;
                    e && (Object.assign(e, (0, F.getGroupCountMetricsFromChatWid)(null === (u = t.chat) || void 0 === u ? void 0 : u.id)), e.markUiActionT(), e.commit(), P.current = null);
                    (0, E.logUiActionShadowPrivateStatsTestEvents)()
                });
                var ru = function() {
                        c.ModalManager.closeMedia()
                    },
                    lu = (0, B.default)((function() {
                        q(null), ru()
                    })),
                    su = (null == z ? void 0 : z.isViewOnce) || (null == z ? void 0 : z.isStickerMsg);
                (0, g.useListener)(su ? z : null, "revoked", lu);
                var Du = su ? null : T.current;
                (0, g.useListener)(Du, "remove", (function(u, e, n) {
                    var a = T.current,
                        i = z;
                    if (a.includes(t) || null != i && null != i.id && i.id.toString() !== u.id.toString()) k();
                    else {
                        var r = n.index;
                        0 === a.length ? ru() : a.length === r ? nu((0, o.default)(a.at(r - 1), "mediaMsgs.at(index - 1)")) : nu((0, o.default)(a.at(r), "mediaMsgs.at(index)"))
                    }
                })), (0, g.useListener)(Du, "reset", (function() {
                    ru()
                })), (0, g.useListener)(Du, "query_media_after", (function() {
                    k()
                })), (0, g.useListener)(Du, "query_media_before", (function() {
                    var u = V.current;
                    u && (N.current = u.scrollWidth, u instanceof HTMLElement && k())
                })), (0, g.useListener)(window, "keydown", (function(u) {
                    if (!u.defaultPrevented) {
                        var e = s.default.isRTL();
                        u.keyCode === i.default.LEFT ? e ? au() : iu() : u.keyCode === i.default.RIGHT && (e ? iu() : au())
                    }
                })), (0, A.useEffect)((function() {
                    S((function() {
                        z && T.current.loadMoreAroundIfNeeded(z)
                    }))
                }), [z, T, S]), (0, A.useEffect)((function() {
                    if (uu !== z) eu(!0);
                    else {
                        var u = V.current;
                        if (!u || null == N.current || 0 === N.current) return;
                        u instanceof HTMLElement && (u.scrollLeft += u.scrollWidth - N.current), N.current = null
                    }
                }), [z, uu]);
                var cu = (0, b.default)((function(u, e, t) {
                    if (0 !== e.length && null != t) {
                        if (e.hasMediaBefore && t < u.clientWidth) {
                            var n = (0, o.default)(e.head(), "mediaMsgs.head()");
                            S((function() {
                                e.queryMedia({
                                    chat: n.chat,
                                    msg: n
                                }), k()
                            }))
                        }
                        if (e.hasMediaAfter && t + l.SCROLL_FUDGE > u.scrollWidth - 2 * u.clientWidth) {
                            var a = (0, o.default)(e.last(), "mediaMsgs.last()");
                            S((function() {
                                e.queryMedia({
                                    chat: a.chat,
                                    msg: a,
                                    direction: "after"
                                }), k()
                            }))
                        }
                    }
                }), 100);
                if (!z) return null;
                var du, fu = T.current,
                    Fu = fu.last(),
                    Cu = fu.hasMediaAfter || z !== Fu ? au : null,
                    Eu = fu.head();
                return fu.hasMediaBefore || z !== Eu ? iu : null, du = fu.hasMediaBefore || z !== Eu ? iu : null, (0, _.jsxs)("div", {
                    className: K ? "img-zoomed-in" : null,
                    children: [tu(z) && (0, _.jsx)(h.default, {
                        activeMsg: z,
                        mediaMsgs: T.current,
                        highlightedMsgIds: u.highlightedMsgIds,
                        onSelectThumb: nu,
                        onSetActiveThumb: function(u) {
                            L.current = u
                        },
                        onScroll: function(u) {
                            cu(u.currentTarget, T.current, u.currentTarget.scrollLeft)
                        },
                        setRefThumbsContainer: function(u) {
                            G.current = u
                        },
                        setRefThumbs: function(u) {
                            V.current = u
                        }
                    }), (0, _.jsx)(p.default, {
                        msg: z,
                        mediaData: z.mediaData,
                        onBack: ru,
                        onExitAnimation: function() {
                            var u;
                            tu(t) && (u = G.current) && (0, f.default)(u, {
                                opacity: [0, 1],
                                translateY: ["100%", "0%"]
                            }, {
                                duration: 300,
                                easing: [.1, .82, .25, 1]
                            })
                        },
                        onNext: Cu,
                        onPrev: du,
                        onImgZoomIn: function(u) {
                            X(u)
                        },
                        getZoomNode: u.getZoomNode,
                        startTime: u.startTime,
                        isAnimatingIn: Q,
                        onImageLoad: ou,
                        msgIndexInAlbum: function() {
                            var u = -1;
                            if (!n || !z) return u;
                            var e = z.id.toString();
                            if (!n.has(e)) return u;
                            var t = 0;
                            return n.forEach((function(n) {
                                n === e && (u = t), t++
                            })), u
                        }(),
                        albumSize: (null === (e = u.highlightedMsgIds) || void 0 === e ? void 0 : e.size) || 0
                    })]
                })
            };
            var a = n(t(963038)),
                i = n(t(331257)),
                o = n(t(347999)),
                r = t(151748),
                l = t(295769),
                s = n(t(758927)),
                D = t(966454),
                c = t(628707),
                d = t(154553),
                f = n(t(931771)),
                F = t(964724),
                C = n(t(229677)),
                E = t(403056),
                p = n(t(740664)),
                h = n(t(297472)),
                A = t(667294),
                m = n(t(802418)),
                v = n(t(982669)),
                g = t(779740),
                x = n(t(121766)),
                B = n(t(803827)),
                b = n(t(32594)),
                j = n(t(38619)),
                M = n(t(788413)),
                _ = t(785893)
        },
        418122: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.requireBundle = e.SendContactsModalLoadable = void 0;
            var a = n(t(887757)),
                i = n(t(348926)),
                o = n(t(544759)),
                r = n(t(679314)),
                l = t(548360),
                s = n(t(268356)),
                D = t(785893),
                c = (0, o.default)((0, i.default)(a.default.mark((function u() {
                    var e;
                    return a.default.wrap((function(u) {
                        for (;;) switch (u.prev = u.next) {
                            case 0:
                                return u.next = 2, Promise.all([t.e(2243), t.e(6345), t.e(2011), t.e(275)]).then(t.bind(t, 707541));
                            case 2:
                                return e = u.sent, u.abrupt("return", e.default);
                            case 4:
                            case "end":
                                return u.stop()
                        }
                    }), u)
                }))), "SendContactsModal");
            e.requireBundle = c;
            var d = (0, s.default)({
                loader: c,
                loading: function(u) {
                    return (0, D.jsx)(r.default, {
                        title: l.fbt._("Send contacts", null, {
                            hk: "9ZMyz"
                        }),
                        error: Boolean(u.error)
                    })
                }
            });
            e.SendContactsModalLoadable = d
        },
        786410: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(963038)),
                i = t(900390),
                o = t(797378),
                r = t(896674),
                l = t(515918),
                s = t(544607),
                D = t(577407),
                c = n(t(979163)),
                d = n(t(81724)),
                f = t(704250),
                F = n(t(758927)),
                C = t(518005),
                E = n(t(964851)),
                p = t(558288),
                h = n(t(829723)),
                A = n(t(544978)),
                m = t(952991),
                v = t(680058),
                g = t(548360),
                x = t(667294),
                B = n(t(156720)),
                b = n(t(982669)),
                j = t(779740),
                M = t(948752),
                _ = t(785893),
                y = {
                    borderBottom: "qmxv8cnq",
                    backgroundColor: "s9raicp8"
                },
                S = {
                    paddingTop: "n1yiu2zv",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "eb4rp10x",
                    paddingStart: "gx1rr48f"
                },
                k = {
                    paddingTop: "n1yiu2zv",
                    paddingEnd: "h5uqwbaf",
                    paddingBottom: "eb4rp10x",
                    paddingStart: "kjjye8e3",
                    color: "pm5hny62",
                    textAlign: "ljrqcn24"
                },
                P = {
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex"
                };

            function T(u, e) {
                var t = u.onClose,
                    n = function() {
                        return o.ChatCollection.filter((function(u) {
                            return u.archive && u.shouldAppearInList
                        }))
                    },
                    T = (0, M.useModelValues)(u.settings, ["showArchiveV2", "archive"]),
                    w = (0, b.default)((function() {
                        return new c.default
                    })),
                    I = (0, b.default)((function() {
                        return new E.default([], (function(u) {
                            return u.id.toString()
                        }))
                    })),
                    N = (0, x.useRef)(null),
                    R = (0, x.useState)(n),
                    O = (0, a.default)(R, 2),
                    L = O[0],
                    G = O[1],
                    V = function() {
                        return (0, C.archiveV2Supported)() && T.showArchiveV2
                    };
                (0, j.useListener)(o.ChatCollection, [V() ? "sort" : null, "change:archive", "add", "remove"].filter(Boolean), (function() {
                    G(n())
                }));
                var H = function(u) {
                    I.current.setVal(u, !1)
                };
                (0, j.useListener)(r.Cmd, "close_chat", (function(u) {
                    u === I.current.getVal() && I.current.unset()
                })), (0, j.useListener)(r.Cmd, "update_chatlist_selection", H);
                (0, x.useEffect)((function() {
                    if (V()) {
                        var u = n(),
                            e = new Map;
                        u.forEach((function(u) {
                            u.archiveAtMentionViewedInDrawer = !0, e.set(u.id.toString(), !0)
                        })), (0, i.updateChatArchiveDrawer)(e)
                    }
                    N.current && d.default.focus(N.current);
                    var t = o.ChatCollection.toArray().find((function(u) {
                        return u.active && u.archive
                    }));
                    t && H(t)
                }), []);
                var U, z, q, Y = function() {
                        t()
                    },
                    W = function(u, e) {
                        r.Cmd.openChatFromUnread(e).then((function(u) {
                            u && l.ComposeBoxActions.focus(e)
                        })), (0, C.archiveV2Supported)() && T.archive.enabled || Y()
                    };
                if (I.current.init(L, !0), q = o.ChatCollection.some((function(u) {
                        return u.archive
                    })), (0, C.archiveV2Supported)() && q) {
                    var K = g.fbt._("These chats stay archived when new messages are received. To change this experience, go to Settings > Chats on your phone.", null, {
                            hk: "2GTpJ"
                        }),
                        X = g.fbt._("These chats are unarchived when new messages are received. To change this experience, go to Settings > Chats on your phone.", null, {
                            hk: "2QaWm0"
                        });
                    U = (0, _.jsx)("div", {
                        className: (0, B.default)(y),
                        children: (0, _.jsx)("div", {
                            className: (0, B.default)(S),
                            children: (0, _.jsx)("div", {
                                className: (0, B.default)(k),
                                children: (0, _.jsx)(p.Text, {
                                    theme: "plain",
                                    as: "p",
                                    children: T.showArchiveV2 ? K : X
                                })
                            })
                        })
                    })
                }
                z = L.length > 0 ? (0, _.jsxs)(f.HotKeys, {
                    ref: N,
                    handlers: {
                        down: function(u) {
                            u.preventDefault(), u.stopPropagation(), I.current.setNext(!0)
                        },
                        up: function(u) {
                            u.preventDefault(), u.stopPropagation(), I.current.setPrev(!0)
                        }
                    },
                    children: [U, (0, _.jsx)(D.FlatList, {
                        className: (0, B.default)(P),
                        data: L.map((function(u) {
                            return {
                                itemKey: u.id.toString(),
                                chat: u
                            }
                        })),
                        flatListController: w.current,
                        direction: "vertical",
                        renderItem: function(u) {
                            return (0, _.jsx)(v.Chat, {
                                chat: u.chat,
                                mode: v.Mode.LAST,
                                active: I.current,
                                onClick: W,
                                hideArchivedIcon: (0, C.archiveV2Supported)() && T.archive.enabled,
                                hideMuteIcon: V(),
                                hideMuteOption: V(),
                                ephemeralIcon: "chat-list"
                            })
                        }
                    })]
                }) : (0, _.jsx)(s.Archived, {});
                var Z = (0, C.archiveV2Supported)() && T.archive.enabled ? g.fbt._("Archived", null, {
                    hk: "3HjzQg"
                }) : F.default.t(136);
                return (0, _.jsxs)(h.default, {
                    ref: e,
                    theme: "archived",
                    children: [(0, _.jsx)(m.DrawerHeader, {
                        title: Z,
                        onBack: Y,
                        type: m.DRAWER_HEADER_TYPE.LARGE,
                        menu: null
                    }), (0, _.jsx)(A.default, {
                        flatListControllers: [w.current],
                        children: z
                    })]
                })
            }
            var w = (0, x.forwardRef)(T);
            e.default = w
        },
        370373: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = function(u) {
                        switch (u.verifiedLevel) {
                            case a.VERIFIED_LEVEL.HIGH:
                                return u.name === u.verifiedName ? s.default.t(666, {
                                    businessName: u.verifiedName
                                }) : s.default.t(667, {
                                    businessName: u.verifiedName
                                });
                            case a.VERIFIED_LEVEL.LOW:
                            case a.VERIFIED_LEVEL.UNKNOWN:
                                return d.fbt._("This may be a business. WhatsApp hasn't verified their name yet.", null, {
                                    hk: "404mUL"
                                })
                        }
                    }((0, f.useModelValues)(u.contact, ["name", "verifiedLevel", "verifiedName", "formattedName"])),
                    t = (0, F.jsx)(i.default, {
                        href: (0, l.getBusinessFaqUrl)(),
                        onClick: E,
                        children: s.default.t(393)
                    });
                return (0, F.jsxs)(c.ConfirmPopup, {
                    onOK: C,
                    okText: s.default.t(507),
                    children: [(0, F.jsx)(o.EmojiText, {
                        text: e
                    }), " ", t]
                })
            };
            var a = t(71100),
                i = n(t(522656)),
                o = t(990055),
                r = t(192070),
                l = t(212390),
                s = n(t(758927)),
                D = t(628707),
                c = t(404186),
                d = t(548360),
                f = t(948752),
                F = t(785893),
                C = function() {
                    D.ModalManager.close()
                },
                E = function(u) {
                    u.preventDefault(), D.ModalManager.close("none"), setTimeout((function() {
                        return (0, r.openExternalLink)((0, l.getBusinessFaqUrl)())
                    }), 10)
                }
        },
        613454: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.contact,
                    t = (0, A.useModelValues)(e, ["verifiedLevel", "verifiedName"]),
                    n = t.verifiedLevel,
                    v = t.verifiedName,
                    g = (0, s.getBusinessFaqUrl)(),
                    x = !o.Conn.isSMB;
                (0, h.useEffect)((function() {
                    x && new f.default.BannerEvent({
                        bannerType: f.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                        bannerOperation: f.default.BANNER_OPERATIONS.SHOWN
                    }).commit()
                }), [x]);
                var B = n === a.VERIFIED_LEVEL.HIGH ? D.default.t(777, {
                    businessName: v
                }) : p.fbt._("This business uses WhatsApp Business, which allows them to add their opening hours, address, website and catalog of products or services.", null, {
                    hk: "82W5f"
                });
                return (0, m.jsxs)(E.ConfirmPopup, {
                    title: p.fbt._("About WhatsApp Business", null, {
                        hk: "3XF5gx"
                    }),
                    onOK: function() {
                        c.ModalManager.close(), x && new f.default.BannerEvent({
                            bannerType: f.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: f.default.BANNER_OPERATIONS.DISMISS
                        }).commit()
                    },
                    okText: p.fbt._("OK", null, {
                        hk: "2KEeHb"
                    }),
                    children: [(0, m.jsx)(r.EmojiText, {
                        text: B
                    }), " ", (0, m.jsx)(i.default, {
                        href: g,
                        onClick: function(u) {
                            u.preventDefault(), c.ModalManager.close(), setTimeout((function() {
                                return (0, l.openExternalLink)(g)
                            }), 10)
                        },
                        children: D.default.t(393)
                    }), x && (0, m.jsx)("div", {
                        className: F.default.footerNote,
                        children: (0, m.jsxs)(d.TextSpan, {
                            theme: "muted",
                            size: "13",
                            children: [p.fbt._("If you're a business, the free WhatsApp Business app can help.", null, {
                                hk: "14W7ur"
                            }), (0, m.jsx)("br", {}), (0, m.jsx)(i.default, {
                                onClick: function(u) {
                                    u.preventDefault(), c.ModalManager.close(), new f.default.BannerEvent({
                                        bannerType: f.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                                        bannerOperation: f.default.BANNER_OPERATIONS.CLICK
                                    }).commit(), setTimeout((function() {
                                        return c.ModalManager.open((0, m.jsx)(C.SmbAppUpsellModal, {}))
                                    }), 200)
                                },
                                className: F.default.getTheAppLink,
                                children: p.fbt._("Learn about getting the app", null, {
                                    hk: "3ncguo"
                                })
                            })]
                        })
                    })]
                })
            };
            var a = t(71100),
                i = n(t(522656)),
                o = t(944634),
                r = t(990055),
                l = t(192070),
                s = t(212390),
                D = n(t(758927)),
                c = t(628707),
                d = t(558288),
                f = n(t(229677)),
                F = n(t(585845)),
                C = t(35391),
                E = t(404186),
                p = t(548360),
                h = t(667294),
                A = t(948752),
                m = t(785893)
        },
        35391: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.SmbAppUpsellModal = function() {
                return (0, f.jsxs)(c.ConfirmPopup, {
                    title: d.fbt._("WhatsApp Business app", null, {
                        hk: "4BfvOl"
                    }),
                    onOK: function() {
                        new s.default.BannerEvent({
                            bannerType: s.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: s.default.BANNER_OPERATIONS.DISMISS
                        }).commit(), l.ModalManager.close()
                    },
                    okText: d.fbt._("Close", null, {
                        hk: "19Jpec"
                    }),
                    children: [(0, f.jsx)(D.default, {}), (0, f.jsx)("p", {
                        children: (0, f.jsx)(i.EmojiText, {
                            text: d.fbt._("If you're a business, you can benefit from switching to the free WhatsApp Business app. It has tools to connect with customers and manage messages.", null, {
                                hk: "2SAIXH"
                            })
                        })
                    }), (0, f.jsx)("br", {}), (0, f.jsxs)("p", {
                        children: [(0, f.jsx)(i.EmojiText, {
                            text: d.fbt._("Scan this code to get the WhatsApp Business App. Or, you can install it from the App Store or Google Play Store.", null, {
                                hk: "2840mD"
                            })
                        }), " ", (0, f.jsx)(a.default, {
                            href: F,
                            onClick: function(u) {
                                u.preventDefault(), l.ModalManager.close(), setTimeout((function() {
                                    return (0, o.openExternalLink)(F)
                                }), 10)
                            },
                            children: r.default.t(393)
                        })]
                    })]
                })
            }, e.WHATSAPP_BUSINESS_URL = void 0;
            var a = n(t(522656)),
                i = t(990055),
                o = t(192070),
                r = n(t(758927)),
                l = t(628707),
                s = n(t(229677)),
                D = n(t(463325)),
                c = t(404186),
                d = t(548360),
                f = t(785893),
                F = "https://www.whatsapp.com/business";
            e.WHATSAPP_BUSINESS_URL = F
        },
        463325: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
                var u = (0, c.useRef)(null),
                    e = (0, c.useRef)(null),
                    t = (0, c.useContext)(r.ThemeContext).theme,
                    n = "dark" === t;
                return (0, c.useEffect)((function() {
                    return null != u.current && (e.current = new l.default(u.current, {
                            text: "https://www.whatsapp.com/business/download",
                            colorDark: "#122e31",
                            colorLight: "#ffffff",
                            width: o.QR_EDGE / 2,
                            height: o.QR_EDGE / 2,
                            typeNumber: 4,
                            correctLevel: l.default.CorrectLevel.H
                        })),
                        function() {
                            null != e.current && (e.current.clear(), e.current = null, u.current = null)
                        }
                }), [n]), (0, d.jsx)("div", {
                    className: s.default.wrapper,
                    children: (0, d.jsx)("div", {
                        ref: u,
                        className: (0, D.default)(s.default.code, (0, i.cx)((0, a.default)({}, s.default.codeDarkMode, n))),
                        children: (0, d.jsx)(f, {
                            theme: t
                        })
                    })
                })
            };
            var a = n(t(859713)),
                i = t(157405),
                o = t(295769),
                r = t(397065),
                l = n(t(637360)),
                s = n(t(202256)),
                D = n(t(706442)),
                c = t(667294),
                d = t(785893);

            function f() {
                return (0, d.jsx)("div", {
                    className: s.default.codeLogo,
                    children: (0, d.jsx)("svg", {
                        width: "100%",
                        viewBox: "0 0 50 50",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, d.jsx)("path", {
                            d: "M42.6776 42.6779C37.9558 47.3997 31.6777 50.0001 24.9999 50.0001C21.0047 50.0001 17.0541 49.0389 13.5244 47.2141L0.601068 49.3339L2.72832 36.3645C0.941278 32.8647 0 28.9525 0 25.0001C0 18.3223 2.60042 12.0443 7.32229 7.32237C12.0442 2.6005 18.3221 0 24.9999 0C31.6777 0 37.9558 2.6005 42.6776 7.32237C47.3995 12.0443 50 18.3223 50 25.0001C50 31.678 47.3995 37.9558 42.6776 42.6779ZM24.9999 4.33778C13.6067 4.33778 4.33772 13.607 4.33772 25.0001C4.33772 28.4792 5.21935 31.9192 6.8868 34.9487L7.24853 35.6054L5.85915 44.0756L14.2959 42.6918L14.9565 43.0601C18.0107 44.7624 21.4837 45.6622 24.9999 45.6622C36.3932 45.6622 45.6622 36.3933 45.6622 25.0001C45.6622 13.607 36.3932 4.33778 24.9999 4.33778ZM31.1133 24.3614C32.4522 24.9804 34.1536 26.3725 34.1208 29.3117C34.0749 33.4266 31.2191 35.6542 27.2744 35.6542H19.4594H18.3042C17.5079 35.6542 16.8645 35.0053 16.8713 34.2092L17.0344 15.0573C17.041 14.2714 17.6794 13.6377 18.4652 13.6366L27.1493 13.6256C31.4651 13.6256 33.9598 16.039 33.9177 19.8134C33.8903 22.2579 32.2484 23.8355 31.1133 24.3614ZM26.766 17.4622H21.3643L21.3076 22.5361H26.7093C28.5347 22.5361 29.5672 21.5152 29.584 19.9992C29.6009 18.4831 28.5915 17.4622 26.766 17.4622ZM26.9444 26.4035H21.2643L21.2038 31.8178H26.884C28.8333 31.8178 29.7752 30.5802 29.792 29.0952C29.8085 27.6101 28.8939 26.4035 26.9444 26.4035Z",
                            fill: "currentColor"
                        })
                    })
                })
            }
        },
        898113: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = t(87330),
                i = t(896674),
                o = t(356953),
                r = t(212390),
                l = n(t(979163)),
                s = n(t(758927)),
                D = t(518005),
                c = t(628707),
                d = t(469073),
                f = (t(136896), t(121657)),
                F = (t(401304), t(558288)),
                C = n(t(229677)),
                E = n(t(219794)),
                p = n(t(44141)),
                h = (n(t(603249)), t(817071)),
                A = n(t(602678)),
                m = n(t(829723)),
                v = n(t(544978)),
                g = t(455316),
                x = t(952991),
                B = n(t(251282)),
                b = t(841726),
                j = n(t(963651)),
                M = t(548360),
                _ = t(667294),
                y = n(t(156720)),
                S = n(t(802418)),
                k = n(t(982669)),
                P = t(779740),
                T = t(948752),
                w = n(t(27791)),
                I = t(785893),
                N = {
                    flexGrow: "tvf2evcx",
                    flexShrink: "oq44ahr5",
                    flexBasis: "lb5m6g5c",
                    paddingBottom: "s9fl9ege"
                };

            function R(u, e) {
                var t, n, _ = u.onClose,
                    R = u.onMediaGallery,
                    O = (0, S.default)(),
                    L = (0, w.default)(),
                    G = (0, k.default)((function() {
                        return new l.default
                    })),
                    V = (0, T.useModelValues)(u.chat, ["id", "groupMetadata"]);
                (0, P.useListener)(null === (t = V.groupMetadata) || void 0 === t ? void 0 : t.participants, ["add", "remove", "sort", "reset"], O);
                var H = null;
                R && (H = (0, I.jsx)(A.default, {
                    onMediaGallery: R,
                    chat: (0, f.unproxy)(V)
                }));
                var U, z = (0, I.jsx)(h.ChatInfoDrawerButtonsSection, {
                    children: (0, I.jsx)(g.DrawerButton, {
                        testid: "li-delete-broadcast",
                        icon: (0, I.jsx)(o.DeleteIcon, {}),
                        color: "danger",
                        theme: "chat-info",
                        onClick: function() {
                            i.Cmd.deleteOrExitChat((0, f.unproxy)(V))
                        },
                        children: s.default.t(692)
                    })
                });
                (null === (n = V.groupMetadata) || void 0 === n ? void 0 : n.creation) ? (U = a.Clock.createdStr(V.groupMetadata.creation), U = (0, I.jsx)(F.TextDiv, {
                    theme: "small",
                    children: U
                })) : U = null;
                var q, Y = null;
                return (q = (0, I.jsx)(j.default, {
                    highlightSurface: C.default.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                    onClick: function() {
                        if ((0, D.isPrivacyNarrativeV1Enabled)() && (0, d.shouldShowNewE2eInfoModal)((0, f.unproxy)(V))) {
                            var u = (0, r.getE2EFaqUrl)();
                            c.ModalManager.open((0, I.jsx)(b.E2eInfoModalV2, {
                                highlightSurface: C.default.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                                url: u
                            }))
                        } else c.ModalManager.open((0, I.jsx)(B.default, {
                            highlightSurface: C.default.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                            chatId: V.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    },
                    text: M.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "1iarlI"
                    })
                })) && (Y = (0, I.jsxs)(h.ChatInfoDrawerSection, {
                    children: [null, q]
                })), (0, I.jsxs)(m.default, {
                    ref: e,
                    theme: "striped",
                    children: [(0, I.jsxs)(x.DrawerHeader, {
                        type: x.DRAWER_HEADER_TYPE.SMALL,
                        rtlFixIfOnDarwin: !0,
                        onCancel: function() {
                            _ ? _() : null == L || L.requestDismiss()
                        },
                        children: [(0, I.jsx)(F.TextDiv, {
                            theme: "title",
                            children: M.fbt._("Broadcast list info", null, {
                                hk: "3S4EgV"
                            })
                        }), U]
                    }), (0, I.jsx)(v.default, {
                        flatListControllers: [G.current],
                        children: (0, I.jsxs)("div", {
                            className: (0, y.default)(N),
                            children: [(0, I.jsx)(p.default, {
                                chat: (0, f.unproxy)(V)
                            }), H, undefined, Y, (0, I.jsx)(E.default, {
                                chat: (0, f.unproxy)(V),
                                flatListController: G.current
                            }), z]
                        })
                    })]
                }, "contact-info-modal")
            }
            var O = (0, _.forwardRef)(R);
            e.default = O
        },
        219794: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t, n = (0, F.default)(),
                    p = null === (e = u.chat.groupMetadata) || void 0 === e ? void 0 : e.participants;
                (0, C.useListener)(p, "add remove reset", n);
                var h = (0, f.useMemo)((function() {
                        return p ? p.map((function(u) {
                            return {
                                itemKey: u.id.toString(),
                                participant: u,
                                height: 68
                            }
                        })) : []
                    }), [p]),
                    A = function(u, e) {
                        (0, D.isMePrimary)(e.id) || (0, r.findChat)(e.id).then((function(u) {
                            a.Cmd.openChatFromUnread(u).then((function(e) {
                                e && i.ComposeBoxActions.focus(u)
                            }))
                        }))
                    },
                    m = null !== (t = null == p ? void 0 : p.length) && void 0 !== t ? t : 0,
                    v = s.default.t(770, {
                        count: m,
                        _plural: m
                    });
                return (0, E.jsx)(d.ChatInfoDrawerListSection, {
                    title: v,
                    children: (0, E.jsx)(l.FlatList, {
                        flatListController: u.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: h,
                        renderItem: function(u) {
                            var e = u.participant,
                                t = o.ContactCollection.gadd(e.id);
                            return (0, E.jsx)(c.Contact, {
                                contact: t,
                                theme: "chat-info",
                                admin: !!e.isAdmin,
                                onClick: A,
                                waitIdle: !0
                            }, e.id.toString())
                        }
                    })
                })
            };
            var a = t(896674),
                i = t(515918),
                o = t(97327),
                r = t(820970),
                l = t(577407),
                s = n(t(758927)),
                D = t(228277),
                c = t(622151),
                d = t(817071),
                f = t(667294),
                F = n(t(802418)),
                C = t(779740),
                E = t(785893)
        },
        44141: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t, n = null === (e = u.chat.groupMetadata) || void 0 === e ? void 0 : e.participants,
                    A = (0, C.useModelValues)(u.chat.contact, ["name"]),
                    m = (0, f.default)();
                (0, F.useListener)(n, "add remove reset", m);
                var v = null !== (t = null == n ? void 0 : n.length) && void 0 !== t ? t : 0,
                    g = c.fbt._("Broadcast List", null, {
                        hk: "46AT9o"
                    }).toString() + " · " + r.default.t(770, {
                        count: v,
                        _plural: v
                    }),
                    x = A.name ? (0, E.jsx)(l.Name, {
                        contact: u.chat.contact,
                        selectable: !0
                    }) : c.fbt._("Untitled List", null, {
                        hk: "fYALp"
                    });
                return (0, E.jsxs)(D.default, {
                    theme: "padding-large",
                    children: [(0, E.jsx)("div", {
                        className: (0, d.default)(p),
                        children: (0, E.jsx)(i.DetailImage, {
                            id: u.chat.id,
                            size: i.DetailImageSize.Large
                        })
                    }), (0, E.jsxs)(o.FlexColumn, {
                        align: "center",
                        children: [(0, E.jsx)(s.TextHeader, {
                            level: "2",
                            size: "24",
                            children: x
                        }), (0, E.jsx)("div", {
                            className: (0, d.default)(h),
                            children: (0, E.jsx)(a.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, E.jsx)(s.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: g
                                })
                            })
                        })]
                    })]
                })
            };
            var a = t(160967),
                i = t(207826),
                o = t(208188),
                r = n(t(758927)),
                l = t(246009),
                s = t(558288),
                D = n(t(849788)),
                c = t(548360),
                d = n(t(156720)),
                f = n(t(802418)),
                F = t(779740),
                C = t(948752),
                E = t(785893),
                p = {
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno",
                    marginBottom: "du8bjn1j"
                },
                h = {
                    lineHeight: "a4ywakfo",
                    marginTop: "g1eqewly"
                }
        },
        602678: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.chat,
                    t = u.onMediaGallery,
                    n = f.fbt._("Media, links and docs", null, {
                        hk: "3D4fAZ"
                    }),
                    a = (0, h.jsx)(o.ChevronRightAltIcon, {
                        color: c.SvgColorProp.SECONDARY,
                        directional: !0
                    }),
                    i = (0, h.jsxs)(r.FlexRow, {
                        align: "center",
                        children: [(0, h.jsx)(m, {
                            chat: e
                        }), (0, h.jsx)("div", {
                            children: a
                        })]
                    });
                return (0, h.jsx)(d.ChatInfoDrawerSection, {
                    titleTestId: "section-media",
                    title: n,
                    titleOnClick: t,
                    subtitle: i,
                    xstyle: A.drawerSection,
                    children: (0, h.jsx)(s.default, {
                        chat: e,
                        mediaMsgs: e.getMediaMsgs(),
                        theme: "chat-info"
                    })
                })
            };
            var a = n(t(963038)),
                i = t(151748),
                o = t(519896),
                r = t(208188),
                l = n(t(758927)),
                s = n(t(131157)),
                D = t(96293),
                c = t(401304),
                d = t(817071),
                f = t(548360),
                F = t(667294),
                C = n(t(156720)),
                E = t(779740),
                p = n(t(788413)),
                h = t(785893),
                A = {
                    mediaCount: {
                        marginEnd: "bugiwsl0",
                        fontSize: "bze30y65",
                        color: "g01nkquw"
                    },
                    drawerSection: {
                        paddingBottom: "aiput80m"
                    }
                };

            function m(u) {
                var e = function(u) {
                    var e = (0, F.useState)(null),
                        t = (0, a.default)(e, 2),
                        n = t[0],
                        o = t[1],
                        r = (0, p.default)(),
                        l = (0, F.useCallback)((function() {
                            (0, i.countAllMedia)(u).then((function(u) {
                                r.aborted || o(u)
                            }))
                        }), [u, r]);
                    return (0, F.useEffect)(l, [l]), (0, E.useListener)(u.getMediaMsgs(), ["add", "remove"], l), (0, E.useListener)(u.getDocMsgs(), ["add", "remove"], l), (0, E.useListener)(u.getLinkMsgs(), ["add", "remove"], l), n
                }(u.chat);
                return (0, h.jsx)("div", {
                    className: (0, C.default)(A.mediaCount),
                    children: null != e ? f.fbt._("{mediaCount}", [f.fbt._param("mediaCount", l.default.n(e))], {
                        hk: "2yA6kO"
                    }) : (0, h.jsx)(D.Spinner, {
                        size: 16,
                        stroke: 6
                    })
                })
            }
        },
        215627: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t = u.contact.getStatus(),
                    n = (0, c.useModelValues)(u.contact, ["id", "phoneNumber"]),
                    F = "" === (0, c.useModelValues)(t, ["status"]).status ? null : (0, d.jsx)(s.default, {
                        multiline: !0,
                        children: (0, d.jsx)(o.TextSpan, {
                            theme: "title",
                            children: (0, d.jsx)(l.default, {
                                id: n.id
                            })
                        })
                    });
                n.id.isLid() ? null != n.phoneNumber && (e = n.phoneNumber) : e = n.id;
                var C = e ? (0, d.jsx)(s.default, {
                    separator: !0,
                    children: (0, d.jsx)(a.SelectableSpan, {
                        dir: "auto",
                        selectable: !0,
                        children: (0, d.jsx)(o.TextSpan, {
                            theme: "title",
                            children: (0, r.widToFormattedUser)(e)
                        })
                    })
                }) : null;
                return (0, d.jsxs)(D.ChatInfoDrawerSection, {
                    xstyle: f.container,
                    titleTestId: "section-about-and-phone-number",
                    title: i.default.t(211),
                    children: [F, C]
                })
            };
            var a = t(160967),
                i = n(t(758927)),
                o = t(558288),
                r = t(221156),
                l = n(t(443114)),
                s = n(t(589853)),
                D = t(817071),
                c = (n(t(156720)), t(948752)),
                d = t(785893),
                f = {
                    container: {
                        paddingBottom: "przvwfww"
                    }
                }
        },
        888768: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t = u.contact;
                e = (0, a.canSeeSMBUpsell)() ? (0, F.jsx)(h, {
                    onClick: function() {
                        r.ModalManager.open((0, F.jsx)(s.default, {
                            contact: t
                        }))
                    }
                }) : (0, F.jsx)(p, {
                    onClick: function() {
                        r.ModalManager.open((0, F.jsx)(l.default, {
                            contact: t
                        }))
                    }
                });
                return (0, F.jsx)(c.default, {
                    xstyle: C.businessAccount,
                    children: e
                })
            };
            var a = t(894995),
                i = n(t(209222)),
                o = t(67497),
                r = t(628707),
                l = n(t(370373)),
                s = n(t(613454)),
                D = t(455316),
                c = n(t(849788)),
                d = t(548360),
                f = n(t(156720)),
                F = t(785893),
                C = {
                    businessAccount: {
                        borderTop: "mug5vpb7",
                        fontSize: "f8jlpxt4"
                    },
                    businessTitleText: {
                        cursor: "ajgl1lbb",
                        fontSize: "f8jlpxt4",
                        lineHeight: "hzeshm6i",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        paddingTop: "ppypbuwx",
                        backgroundColor: "sbdla0oe"
                    },
                    btnLabel: {
                        fontSize: "f8jlpxt4"
                    },
                    businessTitleWithSMBUpsell: {
                        lineHeight: "hzeshm6i"
                    },
                    bannerSvgContainer: {
                        marginTop: "b9l0eqez",
                        marginEnd: "jnwc1y2a",
                        marginBottom: "mpdn4nr2",
                        marginStart: "svoq16ka"
                    },
                    bannerSvg: {
                        color: "jq3rn4u7",
                        width: "dh5rsm73"
                    }
                },
                E = d.fbt._("This is a business account.", null, {
                    hk: "2x8QUJ"
                });

            function p(u) {
                var e = u.onClick;
                return (0, F.jsx)(D.DrawerButton, {
                    testid: "business-title",
                    xstyle: C.businessTitleText,
                    onClick: e,
                    children: (0, F.jsx)("div", {
                        className: (0, f.default)(C.btnLabel),
                        children: E
                    })
                })
            }

            function h(u) {
                var e = u.onClick;
                return (0, F.jsx)(i.default, {
                    testid: "business-title",
                    xstyle: C.businessTitleWithSMBUpsell,
                    onClick: e,
                    side: (0, F.jsx)(o.InfoIcon, {
                        xstyle: C.bannerSvgContainer,
                        iconXstyle: C.bannerSvg,
                        displayInline: !0
                    }),
                    children: E
                })
            }
        },
        73676: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t, n, O = u.contact,
                    L = u.onProductCatalog,
                    G = (0, I.useContext)(k.DrawerContext),
                    V = (0, g.getProductCatalogSessionId)(G),
                    H = (0, S.default)((0, b.unproxy)(u.contact));

                function U() {
                    return (U = (0, i.default)(a.default.mark((function u() {
                        var e;
                        return a.default.wrap((function(u) {
                            for (;;) switch (u.prev = u.next) {
                                case 0:
                                    return u.next = 2, (0, h.findChat)(O.id);
                                case 2:
                                    return e = u.sent, u.next = 5, F.Cmd.openChatFromUnread(e);
                                case 5:
                                    if (u.sent) {
                                        u.next = 8;
                                        break
                                    }
                                    return u.abrupt("return");
                                case 8:
                                    p.DrawerManager.closeDrawerRight(), (0, r.btmThreadsLoggingEnabled)() && C.ComposeBoxActions.addMsgSendingLogAttributes(e, {
                                        handleMultiple: function() {
                                            (0, f.handleActivitiesForChatThreadLogging)([{
                                                activityType: "profileReplies",
                                                ts: (0, o.unixTime)(),
                                                chatId: e.id
                                            }])
                                        }
                                    });
                                case 10:
                                case "end":
                                    return u.stop()
                            }
                        }), u)
                    })))).apply(this, arguments)
                }
                var z, q, Y, W = c.ChatCollection.getActive();
                if (!(null == W ? void 0 : W.id.equals(O.id))) {
                    var K, X;
                    (0, _.logMessageClick)(V, null === (K = O.businessProfile) || void 0 === K ? void 0 : K.isProfileLinked, !!(null === (X = O.businessProfile) || void 0 === X ? void 0 : X.coverPhoto)), n = (0, N.jsx)(y.default, {
                        Icon: d.ChatMsgIcon,
                        label: w.fbt._("Message", null, {
                            hk: "mZ5DE"
                        }),
                        onClick: function() {
                            ! function() {
                                U.apply(this, arguments)
                            }()
                        },
                        testid: "business-action chat"
                    })
                }
                H.isVoiceCallEnabled && (z = (0, N.jsx)(y.default, {
                    Icon: j.VoiceCallFilledIcon,
                    label: w.fbt._("Voice call", null, {
                        hk: "393mz4"
                    }),
                    disabled: !H.canStartVoiceCall,
                    onClick: function() {
                        var u, e;
                        (0, _.logVoiceCallClick)(V, null === (u = O.businessProfile) || void 0 === u ? void 0 : u.isProfileLinked, !!(null === (e = O.businessProfile) || void 0 === e ? void 0 : e.coverPhoto)), (0, P.handleVoipCall)(H.startVoiceCall, O, M.default.PNH_ENTRY_POINT_TYPE.AUDIO)
                    },
                    testid: "business-action voice-call"
                }));
                (null === (e = O.businessProfile) || void 0 === e || null === (t = e.profileOptions) || void 0 === t ? void 0 : t.commerceExperience) === l.COMMERCE_EXPERIENCE_TYPES.CATALOG && (q = (0, N.jsx)(y.default, {
                    Icon: D.CatalogFilledIcon,
                    label: w.fbt._("Catalog", null, {
                        hk: "3QDkTE"
                    }),
                    onClick: function() {
                        var u, e;
                        (0, _.logCatalogClick)(V, null === (u = O.businessProfile) || void 0 === u ? void 0 : u.isProfileLinked, !!(null === (e = O.businessProfile) || void 0 === e ? void 0 : e.coverPhoto)), L((0, g.getProductCatalogContext)(G), "ContactInfo")
                    },
                    testid: "business-action catalog"
                }));
                if ((0, s.hasShop)(O.businessProfile)) {
                    (0, r.bannedShopsEnabled)() && (0, s.isShopBanned)(O.businessProfile) || (Y = (0, N.jsx)(y.default, {
                        Icon: B.ShopFilledIcon,
                        label: w.fbt._("Shop", null, {
                            hk: "3KsdlE"
                        }),
                        onClick: function() {
                            var u, e;
                            (0, _.logShopsClick)(V, null === (u = O.businessProfile) || void 0 === u ? void 0 : u.isProfileLinked, !!(null === (e = O.businessProfile) || void 0 === e ? void 0 : e.coverPhoto)), (0, s.goToShop)(O.businessProfile)
                        },
                        testid: "business-action shop"
                    }))
                }
                var Z = !O.isIAS && (0, N.jsx)(y.default, {
                        Icon: m.ForwardFilledIcon,
                        label: w.fbt._("Share", null, {
                            hk: "4F3c6E"
                        }).toString(),
                        onClick: function() {
                            var u, e;
                            (0, _.logForwardClick)(V, null === (u = O.businessProfile) || void 0 === u ? void 0 : u.isProfileLinked, !!(null === (e = O.businessProfile) || void 0 === e ? void 0 : e.coverPhoto)), v.ModalManager.open((0, N.jsx)(x.SendContactsModalLoadable, {
                                contacts: [(0, b.unproxy)(O)],
                                onContactsSent: function(u) {
                                    F.Cmd.openChatFromUnread(u).then((function() {}))
                                }
                            }))
                        },
                        testid: "business-action forward"
                    }),
                    $ = w.fbt._("Request", null, {
                        hk: "1Qh451"
                    }),
                    Q = w.fbt._("Requested", null, {
                        hk: "3GgAXn"
                    }),
                    J = O.canRequestPhoneNumber ? $ : Q,
                    uu = u.displayRequestPnButton && (0, N.jsx)(y.default, {
                        Icon: E.DialpadSmallIcon,
                        iconWidth: 19,
                        label: J,
                        disabled: !O.canRequestPhoneNumber,
                        onClick: function() {
                            v.ModalManager.open((0, N.jsx)(T.default, {
                                entryPoint: M.default.PNH_ENTRY_POINT_TYPE.PN_REQUEST
                            }))
                        },
                        testid: "request-phone-number-button-business"
                    });
                return (0, N.jsxs)(A.FlexRow, {
                    xstyle: R.actionsRow,
                    justify: "evenly",
                    children: [uu, n, z, q, Y, Z]
                })
            };
            var a = n(t(887757)),
                i = n(t(348926)),
                o = t(281098),
                r = t(894995),
                l = t(71100),
                s = t(833896),
                D = t(293625),
                c = t(797378),
                d = t(627915),
                f = t(665912),
                F = t(896674),
                C = t(515918),
                E = t(403998),
                p = t(875058),
                h = t(820970),
                A = t(208188),
                m = t(431221),
                v = t(628707),
                g = t(179677),
                x = t(418122),
                B = t(70568),
                b = t(121657),
                j = t(593438),
                M = n(t(229677)),
                _ = t(973706),
                y = n(t(860226)),
                S = n(t(81778)),
                k = t(445639),
                P = t(394949),
                T = n(t(753643)),
                w = t(548360),
                I = t(667294),
                N = (n(t(156720)), t(785893)),
                R = {
                    actionsRow: {
                        marginTop: "c46o30wg",
                        marginEnd: "bsg2wrd4",
                        marginBottom: "brac1wpa",
                        marginStart: "f459d30t",
                        "@media (min-width: 1300px)": {
                            marginStart: "hfp8519b",
                            marginEnd: "acdu7ris"
                        }
                    }
                }
        },
        989822: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.businessHours,
                    t = u.isProfileLinked,
                    n = u.hasCoverPhoto,
                    a = (0, D.getProductCatalogSessionId)((0, h.useContext)(C.DrawerContext)),
                    r = (0, o.getBusinessOpenState)(e),
                    l = (0, h.useState)(!0),
                    s = (0, i.default)(l, 2),
                    f = s[0],
                    p = s[1];
                if (null == e) return null;
                var g = (0, c.getBusinessHours)(e).map((function(u) {
                    var e = u.day,
                        t = u.hours,
                        n = u.first,
                        a = e,
                        i = t,
                        l = !1;
                    if (n) switch (r.status) {
                        case o.BUSINESS_OPEN_STATUS.OPEN_24H:
                            a = E.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), i = E.fbt._("Open 24 hours", null, {
                                hk: "1AlfF5"
                            }), l = !0;
                            break;
                        case o.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                            a = E.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), i = E.fbt._("Open by appointment only", null, {
                                hk: "1nxH9v"
                            }), l = !0;
                            break;
                        case o.BUSINESS_OPEN_STATUS.OPEN:
                            a = E.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), l = !0;
                            break;
                        case o.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                            i = E.fbt._("Closed", null, {
                                hk: "3IRgct"
                            })
                    }
                    return !n && f ? null : (0, A.jsx)(v, {
                        day: a,
                        dayIsOpen: l,
                        hours: i,
                        first: n,
                        collapsed: f
                    }, e)
                }));
                return (0, A.jsx)(d.default, {
                    xstyle: m.businessHours,
                    onClick: function() {
                        (0, F.logHoursClick)(a, t, !!n), p(!f)
                    },
                    testid: "business-hours-expand",
                    children: g
                })
            };
            var a = n(t(859713)),
                i = n(t(963038)),
                o = t(833896),
                r = t(275394),
                l = t(157405),
                s = t(990055),
                D = t(179677),
                c = t(221289),
                d = n(t(83938)),
                f = n(t(449103)),
                F = t(973706),
                C = t(445639),
                E = t(548360),
                p = n(t(706442)),
                h = t(667294),
                A = (n(t(156720)), t(785893)),
                m = {
                    businessHours: {
                        display: "f804f6gw",
                        width: "ln8gz9je",
                        textAlign: "ml4r5409"
                    }
                };

            function v(u) {
                if (u.first) {
                    var e = (0, A.jsx)("div", {
                        className: f.default.businessHoursChevron,
                        role: "button",
                        children: (0, A.jsx)(r.ChevronDownAltIcon, {
                            className: u.collapsed ? "" : f.default.flipSvg,
                            displayInline: !0
                        })
                    });
                    return (0, A.jsxs)("div", {
                        className: (0, p.default)(f.default.businessHoursRow, (0, l.cx)((0, a.default)({}, f.default.firstRow, u.first))),
                        children: [(0, A.jsx)("div", {
                            className: (0, p.default)(f.default.businessHoursDay, (0, l.cx)((0, a.default)({}, f.default.dayIsOpen, u.dayIsOpen))),
                            children: (0, A.jsx)(s.EmojiText, {
                                direction: "auto",
                                text: u.day
                            })
                        }), (0, A.jsx)("div", {
                            className: f.default.businessHoursHours,
                            children: (0, A.jsx)(s.EmojiText, {
                                direction: "auto",
                                text: u.hours
                            })
                        }), e]
                    })
                }
                return (0, A.jsxs)("div", {
                    className: f.default.businessHoursRow,
                    children: [(0, A.jsx)("div", {
                        className: f.default.businessHoursDay,
                        children: (0, A.jsx)(s.EmojiText, {
                            direction: "auto",
                            text: u.day
                        })
                    }), (0, A.jsx)("div", {
                        className: f.default.businessHoursHours,
                        children: (0, A.jsx)(s.EmojiText, {
                            direction: "auto",
                            text: u.hours
                        })
                    })]
                })
            }
        },
        106485: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t, n, v, g, x, B = u.businessProfile,
                    b = (0, h.useModelValues)(B, ["description", "address", "latitude", "longitude", "website", "email", "businessHours", "isProfileLinked", "coverPhoto"]),
                    j = b.description,
                    M = b.address,
                    _ = b.latitude,
                    y = b.longitude,
                    S = b.website,
                    k = b.email,
                    P = b.businessHours,
                    T = b.isProfileLinked,
                    w = b.coverPhoto,
                    I = (0, p.useContext)(C.DrawerContext),
                    N = (0, s.getProductCatalogSessionId)(I);
                null != j && (e = (0, A.jsx)("div", {
                    className: d.default.section,
                    children: (0, A.jsx)(o.ExpandableText, {
                        text: j,
                        textLimit: a.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                        children: function(u) {
                            var e = u.textLimit;
                            return (0, A.jsx)(i.EmojiText, {
                                className: d.default.description,
                                selectable: !0,
                                direction: "auto",
                                text: j,
                                textLimit: e,
                                breakWord: !0
                            })
                        }
                    })
                }));
                null != P && (t = (0, A.jsx)("div", {
                    className: d.default.section,
                    children: (0, A.jsx)(c.default, {
                        businessHours: P,
                        isProfileLinked: T,
                        hasCoverPhoto: !!w
                    })
                }));
                null != M && (n = (0, A.jsx)("div", {
                    className: d.default.section,
                    children: (0, A.jsx)(i.EmojiText, {
                        selectable: !0,
                        direction: "auto",
                        text: M
                    })
                }));
                null != _ && null != y && (v = (0, A.jsx)("div", {
                    style: {
                        height: 132
                    },
                    className: (0, E.default)(d.default.section, d.default.map),
                    children: (0, A.jsx)(l.default, {
                        lat: _,
                        lng: y,
                        name: M || "",
                        width: 590,
                        height: 132,
                        onClick: function() {
                            return (0, f.logLocationClick)(N, T, !!w)
                        },
                        testid: "business-info-map"
                    })
                }));
                null != k && (g = (0, A.jsx)("div", {
                    className: d.default.section,
                    children: (0, A.jsx)(r.ExternalLink, {
                        href: `mailto:${k}`,
                        onClick: function() {
                            return (0, f.logEmailClick)(N, T, !!w)
                        },
                        testid: "business-info-email",
                        children: k
                    })
                }));
                null != S && S.length > 0 && (x = (0, A.jsx)("div", {
                    className: d.default.section,
                    children: S.map((function(u) {
                        return (0, A.jsx)("div", {
                            children: (0, A.jsx)(r.ExternalLink, {
                                href: D.default.toMaliciousSiteRedirect(u),
                                onClick: function() {
                                    return (0, f.logWebsiteClick)(N, T, !!w)
                                },
                                testid: "business-info-website",
                                children: u
                            })
                        }, u)
                    }))
                }));
                if (null == e && null == t && null == n && null == v && null == g && null == x) return null;
                return (0, A.jsxs)(F.ChatInfoDrawerSection, {
                    xstyle: m.container,
                    children: [e, t, n, v, g, x]
                })
            };
            var a = n(t(442435)),
                i = t(990055),
                o = t(485009),
                r = t(192070),
                l = n(t(822837)),
                s = t(179677),
                D = n(t(728650)),
                c = n(t(989822)),
                d = n(t(646311)),
                f = t(973706),
                F = t(817071),
                C = t(445639),
                E = n(t(706442)),
                p = t(667294),
                h = (n(t(156720)), t(948752)),
                A = t(785893),
                m = {
                    container: {
                        paddingTop: "i4pc7asj",
                        paddingBottom: "q1nnjopg"
                    }
                }
        },
        996980: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t, n, r, p, h = u.contact,
                    A = u.isMessageYourselfChat;
                null != (null === (e = h.businessProfile) || void 0 === e ? void 0 : e.customUrl) && (r = (0, s.jsx)("div", {
                    className: (0, l.default)(d),
                    children: (0, s.jsx)(a.EmojiText, {
                        text: null === (p = h.businessProfile) || void 0 === p ? void 0 : p.customUrl,
                        direction: "auto",
                        titlify: !0,
                        breakWord: !0,
                        inlineblock: !0
                    })
                }));
                if (h.isMe)
                    if (A) t = (0, s.jsx)(i.Name, {
                        contact: h,
                        showBusinessCheckmark: h.showBusinessCheckmarkAsPrimary,
                        showMessageYourselfName: !0,
                        useVerifiedName: !0,
                        breakWord: !0,
                        selectable: !0
                    }), n = (0, s.jsx)(i.Name, {
                        contact: h,
                        showBusinessCheckmark: h.showBusinessCheckmarkAsPrimary,
                        selectable: !0
                    });
                    else if (h.name !== h.verifiedName) {
                    var m;
                    h.showBusinessCheckmarkAsSecondary && (m = (0, s.jsx)("div", {
                        className: (0, l.default)(c),
                        children: (0, s.jsx)(o.PsaVerifiedIcon, {})
                    })), t = (0, s.jsx)(i.Name, {
                        contact: h,
                        breakWord: !0,
                        selectable: !0
                    }), n = (0, s.jsx)("div", {
                        className: (0, l.default)(d),
                        children: (0, s.jsxs)("div", {
                            className: (0, l.default)(C),
                            children: [(0, s.jsx)(a.EmojiText, {
                                text: `~${h.verifiedName}`,
                                className: (0, l.default)(F),
                                direction: "auto",
                                ellipsify: !0,
                                titlify: !0,
                                selectable: !0
                            }), m]
                        })
                    })
                } else t = (0, s.jsx)(i.Name, {
                    contact: h,
                    showBusinessCheckmark: h.showBusinessCheckmarkAsPrimary,
                    breakWord: !0,
                    selectable: !0
                });
                else t = h.isIAS ? (0, s.jsx)("span", {
                    children: (0, s.jsx)(i.Name, {
                        contact: h
                    })
                }) : (0, s.jsx)(a.EmojiText, {
                    text: h.verifiedName,
                    direction: "auto",
                    ellipsify: !0,
                    titlify: !0,
                    breakWord: !0,
                    selectable: !0
                }), n = h.isIAS ? (0, s.jsx)("div", {
                    className: (0, l.default)(d),
                    children: (0, s.jsx)(a.EmojiText, {
                        text: E,
                        direction: "auto",
                        ellipsify: !0,
                        titlify: !0,
                        breakWord: !0,
                        selectable: !0
                    })
                }) : (0, s.jsx)("div", {
                    className: (0, l.default)(d),
                    children: (0, s.jsx)(i.Name, {
                        contact: h,
                        showBusinessCheckmark: h.showBusinessCheckmarkAsPrimary,
                        selectable: !0
                    })
                });
                return (0, s.jsxs)("div", {
                    className: (0, l.default)(D),
                    children: [(0, s.jsx)("div", {
                        className: (0, l.default)(f),
                        children: t
                    }), n, r]
                })
            };
            var a = t(990055),
                i = t(246009),
                o = t(455036),
                r = t(548360),
                l = n(t(156720)),
                s = t(785893),
                D = {
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "ngycyvoj",
                    marginStart: "svoq16ka"
                },
                c = {
                    display: "ew8mgplc",
                    marginTop: "o9i7y497",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "mpdn4nr2",
                    marginStart: "k6y3xtnu"
                },
                d = {
                    color: "p6nhtbpp",
                    fontSize: "enbbiyaj",
                    lineHeight: "tkq7s68q",
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "inww9tbj",
                    marginStart: "svoq16ka"
                },
                f = {
                    fontSize: "iqrewfee",
                    fontWeight: "sy6s5v3r",
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "or9x5nie",
                    marginStart: "svoq16ka"
                },
                F = {
                    flexGrow: "tvf2evcx"
                },
                C = {
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno"
                },
                E = r.fbt._("Official WhatsApp Account", null, {
                    hk: "4oZMU1"
                })
        },
        567398: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BusinessOpenHours = function(u) {
                var e = u.hours,
                    t = function(u) {
                        switch (u.status) {
                            case a.BUSINESS_OPEN_STATUS.OPEN_24H:
                                return r.fbt._("{open} 24 hours", [r.fbt._param("open", `<span class="${(0,l.default)(c)}">${r.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`)], {
                                    hk: "1aA6f9"
                                });
                            case a.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                                return r.fbt._("{open} by appointment only", [r.fbt._param("open", `<span class="${(0,l.default)(c)}">${r.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`)], {
                                    hk: "z8CGT"
                                });
                            case a.BUSINESS_OPEN_STATUS.OPEN:
                                if (u.openUntil && u.additionalOpen && u.additionalClose) return r.fbt._("{open} until {time}, {additionalOpenTime} - {additionalCloseTime}", [r.fbt._param("open", `<span class="${(0,l.default)(c)}">${r.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`), r.fbt._param("time", f(u.openUntil)), r.fbt._param("additionalOpenTime", f(u.additionalOpen)), r.fbt._param("additionalCloseTime", f(u.additionalClose))], {
                                    hk: "2dJgLQ"
                                });
                                if (u.openUntil) return r.fbt._("{open} until {time}", [r.fbt._param("open", `<span class="${(0,l.default)(c)}">${r.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`), r.fbt._param("time", f(u.openUntil))], {
                                    hk: "3Dd8an"
                                });
                                break;
                            case a.BUSINESS_OPEN_STATUS.CLOSED:
                                return u.opensAt ? r.fbt._("{closed}, opens at {time}", [r.fbt._param("closed", `<span class="${(0,l.default)(D)}">${r.fbt._("Closed now",null,{hk:"2oDK4r"}).toString()}</span>`), r.fbt._param("time", f(u.opensAt))], {
                                    hk: "LvVmY"
                                }) : `<span class="${(0,l.default)(D)}">${r.fbt._("Closed now",null,{hk:"2oDK4r"}).toString()}</span>`;
                            case a.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                                return `<span class="${(0,l.default)(D)}">${r.fbt._("Closed today",null,{hk:"3uCCvH"}).toString()}</span>`
                        }
                        return null
                    }((0, a.getBusinessOpenState)(e));
                if (null == t) return null;
                var n = o.default.sanitize(t.toString());
                return (0, s.jsx)("div", {
                    className: (0, l.default)(d),
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                })
            };
            var a = t(833896),
                i = n(t(758927)),
                o = n(t(827856)),
                r = t(548360),
                l = n(t(156720)),
                s = t(785893),
                D = {
                    color: "mvxzr2tb"
                },
                c = {
                    color: "j5au4wul"
                },
                d = {
                    color: "sbs3osm6",
                    fontSize: "f8jlpxt4",
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "g105fvfm",
                    marginStart: "svoq16ka"
                };

            function f(u) {
                return null == u ? "" : u.toLocaleTimeString(i.default.getLocale(), {
                    hour: "numeric",
                    minute: "2-digit"
                })
            }
        },
        420251: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BusinessProfile = function(u) {
                var e, t, n, a, o, D, c, f = (0, I.useModelValues)(u.contact, ["id", "verifiedLevel", "name", "verifiedName"]),
                    C = (0, I.useModelValues)(u.businessProfile, ["description", "categories", "website", "email", "stale", "latitude", "longitude", "businessHours", "structuredAddress"]);
                (0, w.useEffect)((function() {
                    new j.default.ViewBusinessProfile({
                        viewBusinessProfileAction: j.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION
                    }).commit()
                }), []), e = (0, i.canSeeSMBUpsell)() ? (0, N.jsx)(R, {
                    contact: f
                }) : (0, N.jsx)(L, {
                    contact: f
                });
                var A = C;
                if (A.stale) t = (0, N.jsx)("div", {
                    className: M.default.contactBusinessInfoSpinner,
                    children: (0, N.jsx)(b.Spinner, {
                        size: 20,
                        stroke: 5
                    })
                });
                else {
                    var v;
                    if (n = (null === (v = A.categories) || void 0 === v ? void 0 : v.length) ? (0, N.jsx)(H, {
                            icon: (0, N.jsx)(r.BusinessCategoryIcon, {}),
                            children: (0, N.jsx)(E.EmojiText, {
                                selectable: !0,
                                direction: "auto",
                                text: A.categories.map((function(u) {
                                    return u.localized_display_name
                                })).join(m.default.t(253))
                            })
                        }) : null, a = A.description ? (0, N.jsx)(H, {
                            icon: (0, N.jsx)(l.BusinessDescriptionIcon, {}),
                            children: (0, N.jsx)(p.ExpandableText, {
                                text: A.description,
                                textLimit: F.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                                children: function(u) {
                                    var e = u.textLimit;
                                    return (0, N.jsx)(E.EmojiText, {
                                        selectable: !0,
                                        direction: "auto",
                                        breakWord: !0,
                                        text: A.description,
                                        textLimit: e
                                    })
                                }
                            })
                        }) : null, A.website && Array.isArray(A.website) && A.website.length && (o = A.website.map((function(u, e) {
                            var t = (0, B.getWebsiteLink)(u),
                                n = (0, N.jsx)(E.EmojiText, {
                                    selectable: !0,
                                    direction: "auto",
                                    text: u
                                }),
                                a = (0, N.jsx)(h.ExternalLink, {
                                    className: M.default.link,
                                    href: t,
                                    children: n
                                });
                            return (0, N.jsx)(H, {
                                icon: (0, N.jsx)(d.BusinessWebsiteIcon, {}),
                                children: a
                            }, e)
                        }))), A.businessHours && (D = (0, N.jsx)(O, {
                            businessHours: A.businessHours
                        })), A.email) {
                        var g = (0, N.jsx)(E.EmojiText, {
                                selectable: !0,
                                direction: "auto",
                                text: A.email
                            }),
                            x = (0, N.jsx)(h.ExternalLink, {
                                className: M.default.link,
                                href: `mailto:${A.email}`,
                                children: g
                            });
                        c = (0, N.jsx)(H, {
                            icon: (0, N.jsx)(s.BusinessEmailIcon, {}),
                            dir: "auto",
                            children: x
                        })
                    }
                }
                var _, y = void 0 !== A.latitude && void 0 !== A.longitude || A.structuredAddress;
                (t || y || n || a || null != D || c || o) && (_ = (0, N.jsx)(k.default, {
                    theme: "padding",
                    children: (0, N.jsxs)("div", {
                        className: M.default.contactBusinessInfo,
                        children: [t, (0, N.jsx)(V, {
                            contactName: f.name,
                            latitude: A.latitude,
                            longitude: A.longitude,
                            structuredAddress: A.structuredAddress
                        }), n, a, D, c, o]
                    })
                }));
                return (0, N.jsxs)(N.Fragment, {
                    children: [(0, N.jsx)(k.default, {
                        children: e
                    }), _]
                })
            };
            var a = n(t(963038)),
                i = t(894995),
                o = t(725536),
                r = t(141193),
                l = t(361648),
                s = t(80943),
                D = t(136068),
                c = t(71100),
                d = t(228855),
                f = t(275394),
                F = n(t(442435)),
                C = n(t(209222)),
                E = t(990055),
                p = t(485009),
                h = t(192070),
                A = t(67497),
                m = n(t(758927)),
                v = n(t(822837)),
                g = t(385764),
                x = t(628707),
                B = t(221289),
                b = t(96293),
                j = n(t(229677)),
                M = n(t(652898)),
                _ = n(t(370373)),
                y = n(t(613454)),
                S = t(455316),
                k = n(t(849788)),
                P = t(548360),
                T = n(t(706442)),
                w = t(667294),
                I = t(948752),
                N = t(785893);

            function R(u) {
                var e = u.contact,
                    t = e.verifiedLevel === c.VERIFIED_LEVEL.HIGH ? P.fbt._("Official business account", null, {
                        hk: "1KruJ"
                    }) : P.fbt._("Business account", null, {
                        hk: "2lzdAg"
                    });
                return (0, N.jsx)(C.default, {
                    testid: "business-title",
                    onClick: x.ModalManager.open((0, N.jsx)(y.default, {
                        contact: e
                    })),
                    side: (0, N.jsx)(A.InfoIcon, {
                        className: M.default.infoIcon,
                        displayInline: !0
                    }),
                    children: t
                })
            }

            function O(u) {
                var e = u.businessHours,
                    t = (0, w.useState)(!0),
                    n = (0, a.default)(t, 2),
                    i = n[0],
                    o = n[1],
                    r = (0, B.getBusinessHours)(e).map((function(u) {
                        var e = u.day,
                            t = u.hours,
                            n = u.first;
                        return !n && i ? null : (0, N.jsx)(G, {
                            day: e,
                            hours: t,
                            first: n,
                            collapsed: i
                        }, e)
                    }));
                return (0, N.jsx)(H, {
                    icon: (0, N.jsx)(D.BusinessHoursIcon, {}),
                    onClick: function() {
                        return o(!i)
                    },
                    children: r
                })
            }

            function L(u) {
                var e, t = u.contact;
                switch (t.verifiedLevel) {
                    case c.VERIFIED_LEVEL.HIGH:
                        e = P.fbt._("Official business account", null, {
                            hk: "1KruJ"
                        });
                        break;
                    case c.VERIFIED_LEVEL.LOW:
                    case c.VERIFIED_LEVEL.UNKNOWN:
                        e = P.fbt._("Business account", null, {
                            hk: "2lzdAg"
                        })
                }
                return (0, N.jsx)(S.DrawerButton, {
                    testid: "business-title",
                    className: M.default.businessTitleText,
                    onClick: function() {
                        x.ModalManager.open((0, N.jsx)(_.default, {
                            contact: t
                        }))
                    },
                    children: e
                })
            }
            var G = function(u) {
                var e = u.first ? (0, N.jsx)("div", {
                    className: M.default.businessHoursChevron,
                    role: "button",
                    children: (0, N.jsx)(f.ChevronDownAltIcon, {
                        className: u.collapsed ? "" : M.default.flipSvg,
                        displayInline: !0
                    })
                }) : null;
                return (0, N.jsxs)("div", {
                    className: M.default.businessHoursRow,
                    children: [(0, N.jsx)("div", {
                        className: M.default.businessHoursDay,
                        children: (0, N.jsx)(E.EmojiText, {
                            direction: "auto",
                            text: u.day
                        })
                    }), (0, N.jsx)("div", {
                        className: M.default.businessHoursHours,
                        children: (0, N.jsx)(E.EmojiText, {
                            direction: "auto",
                            text: u.hours
                        })
                    }), e]
                })
            };
            var V = function(u) {
                    var e, t, n, a = u.contactName,
                        i = u.latitude,
                        r = u.longitude,
                        l = u.structuredAddress,
                        s = l ? function(u) {
                            var e = u.streetAddress,
                                t = u.localizedCityName,
                                n = u.zipCode;
                            return e && t && n ? P.fbt._("{streetAddress}, {city} {zipCode}", [P.fbt._param("streetAddress", e), P.fbt._param("city", t), P.fbt._param("zipCode", n)], {
                                hk: "1McVXv"
                            }).toString() : e && t ? P.fbt._("{streetAddress}, {city}", [P.fbt._param("streetAddress", e), P.fbt._param("city", t)], {
                                hk: "1zyKhk"
                            }).toString() : e
                        }(l) : null;
                    (null != i && null != r && (e = (0, N.jsx)("div", {
                        style: {
                            height: 150
                        },
                        className: M.default.businessMap,
                        children: (0, N.jsx)(v.default, {
                            lat: i,
                            lng: r,
                            name: s || a,
                            width: 565,
                            height: 150
                        })
                    })), s) && (n = null != i && null != r ? (0, g.getMapUrl)(i, r, s) : (0, g.getSearchUrl)(s), t = (0, N.jsx)("div", {
                        className: M.default.address,
                        children: (0, N.jsx)(h.ExternalLink, {
                            href: n,
                            children: (0, N.jsx)(E.EmojiText, {
                                selectable: !0,
                                direction: "auto",
                                text: s
                            })
                        })
                    }));
                    return t || e ? (0, N.jsxs)(H, {
                        icon: (0, N.jsx)(o.BusinessAddressIcon, {}),
                        children: [t, e]
                    }) : null
                },
                H = function(u) {
                    return (0, N.jsxs)("div", {
                        className: (0, T.default)(M.default.dataRow, u.className),
                        onClick: u.onClick,
                        children: [(0, N.jsx)("div", {
                            className: M.default.dataRowIcon,
                            children: u.icon
                        }), (0, N.jsx)("div", {
                            className: M.default.dataRowText,
                            children: u.children
                        })]
                    })
                }
        },
        409098: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t = u.contact,
                    n = u.businessProfile,
                    E = u.onOpenStatus,
                    p = u.onProductCatalog,
                    h = u.onProfilePicLoad,
                    A = u.onProfilePicClick,
                    m = u.isMessageYourselfChat,
                    v = u.isPhoneNumberHidden,
                    g = (0, d.useModelValues)(n, ["businessHours", "categories"]),
                    x = g.businessHours,
                    B = g.categories,
                    b = (0, f.jsx)(r.default, {
                        contact: t,
                        isMessageYourselfChat: m
                    });
                null != B && B.length > 0 && (e = t.isIAS ? null : (0, f.jsx)("div", {
                    className: (0, c.default)(C),
                    children: B.map((function(u) {
                        return u.localized_display_name
                    })).join(i.default.t(252))
                }));
                var j = x ? (0, f.jsx)(l.BusinessOpenHours, {
                        hours: x
                    }) : null,
                    M = t.businessProfile ? (0, f.jsx)(a.default, {
                        contact: t,
                        businessProfile: t.businessProfile,
                        onClick: A,
                        onOpenStatus: E,
                        onLoad: h
                    }) : null;
                return (0, f.jsxs)(D.default, {
                    theme: "padding-no-margin",
                    children: [M, (0, f.jsxs)("div", {
                        className: (0, c.default)(F),
                        children: [b, v && (0, f.jsx)(s.default, {}), e, j, (0, f.jsx)(o.default, {
                            contact: t,
                            onProductCatalog: p,
                            displayRequestPnButton: v
                        })]
                    })]
                })
            };
            var a = n(t(720138)),
                i = n(t(758927)),
                o = n(t(73676)),
                r = n(t(996980)),
                l = t(567398),
                s = n(t(415222)),
                D = n(t(849788)),
                c = n(t(156720)),
                d = t(948752),
                f = t(785893),
                F = {
                    textAlign: "qfejxiq4"
                },
                C = {
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "brac1wpa",
                    marginStart: "svoq16ka",
                    fontSize: "f8jlpxt4",
                    color: "sbs3osm6",
                    lineHeight: "jgi8eev7"
                }
        },
        104175: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.contact;
                if ("" === (0, D.useModelValues)(e.getStatus(), ["status"]).status) return null;
                if (o.default.isPSA(e.id)) return (0, c.jsxs)(l.ChatInfoDrawerSection, {
                    titleTestId: "section-about",
                    title: "",
                    children: [(0, c.jsxs)(i.TextSpan, {
                        theme: "title",
                        size: "16",
                        children: [s.fbt._("Hi! Welcome to this official WhatsApp chat.", null, {
                            hk: "1fpFwJ"
                        }).toString(), (0, c.jsx)("br", {}), s.fbt._("This is where you can get tips, see announcements, and hear about the newest features. Straight from us.", null, {
                            hk: "4gcJHK"
                        }).toString(), (0, c.jsx)("br", {}), s.fbt._('Official chats from WhatsApp will always have a green "verified" checkmark. And we\'ll never ask for your personal information.', null, {
                            hk: "8bwzI"
                        }).toString()]
                    }), (0, c.jsx)("br", {}), (0, c.jsx)("br", {}), (0, c.jsx)(a.ExternalLink, {
                        href: "https://whatsapp.com/",
                        xstyle: d.whatsapp_url,
                        children: "https://whatsapp.com/"
                    })]
                });
                return (0, c.jsx)(l.ChatInfoDrawerSection, {
                    titleTestId: "section-about",
                    title: s.fbt._("About", null, {
                        hk: "4qoAfH"
                    }),
                    children: (0, c.jsx)(i.TextSpan, {
                        theme: "title",
                        size: "16",
                        children: (0, c.jsx)(r.default, {
                            id: e.id
                        })
                    })
                })
            };
            var a = t(192070),
                i = t(558288),
                o = n(t(560911)),
                r = n(t(443114)),
                l = t(817071),
                s = t(548360),
                D = (n(t(156720)), t(948752)),
                c = t(785893),
                d = {
                    whatsapp_url: {
                        color: "hafg4y3t"
                    }
                }
        },
        428683: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = (0, C.useModelValues)(u.contact, ["commonGroups"]).commonGroups,
                    t = (0, f.useState)(!0),
                    n = (0, a.default)(t, 2),
                    p = n[0],
                    h = n[1];
                (0, f.useEffect)((function() {
                    (0, r.findCommonGroups)(u.contact).catch((function(u) {
                        throw __LOG__(4, !0, new Error, !0)`get from participants table failed`, SEND_LOGS("get from participants table failed when finding common groups: " + u), new Error("get from participants table failed")
                    }))
                }), []);
                var A, m = (0, F.default)(e, ["add", "remove"], (function() {
                        if (!e) return [];
                        var u = e;
                        return u.length > D.INFO_DRAWER_MAX_ROWS && p && (u = u.slice(0, D.INFO_DRAWER_MAX_ROWS)), u.map((function(u) {
                            return {
                                itemKey: u.id.toString(),
                                chat: u,
                                height: 68
                            }
                        }))
                    }), [p]),
                    v = function(e, t) {
                        i.Cmd.openChatFromUnread(t).then((function(u) {
                            u && o.ComposeBoxActions.focus(t)
                        })), u.onClose()
                    };
                if (!e || 0 === e.length) return null;
                if (e.length > D.INFO_DRAWER_MAX_ROWS && p) {
                    var g = e.length - D.INFO_DRAWER_MAX_ROWS;
                    A = (0, E.jsx)(c.default, {
                        numMore: g,
                        onClick: function() {
                            h(!1)
                        }
                    })
                }
                var x = d.fbt._({
                    "*": "{number} groups in common",
                    _1: "1 group in common"
                }, [d.fbt._plural(e.length, "number")], {
                    hk: "2bl4a5"
                });
                return (0, E.jsxs)(D.ChatInfoDrawerListSection, {
                    titleTestId: "section-common-groups",
                    title: x,
                    children: [(0, E.jsx)(l.FlatList, {
                        flatListController: u.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: m,
                        renderItem: function(u) {
                            var e = u.chat;
                            return (0, E.jsx)(s.Chat, {
                                chat: e,
                                theme: "chat-info",
                                mode: s.Mode.INFO,
                                onClick: v
                            }, e.id.toString())
                        }
                    }), A]
                })
            };
            var a = n(t(963038)),
                i = t(896674),
                o = t(515918),
                r = t(302841),
                l = t(577407),
                s = t(680058),
                D = t(817071),
                c = n(t(571170)),
                d = t(548360),
                f = t(667294),
                F = n(t(554327)),
                C = t(948752),
                E = t(785893)
        },
        239524: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(81109)),
                i = n(t(963038)),
                o = t(63520),
                r = t(742649),
                l = t(281098),
                s = t(519509),
                D = t(104010),
                c = t(894995),
                d = t(833896),
                f = t(484817),
                F = t(797378),
                C = t(957217),
                E = t(665912),
                p = t(896674),
                h = t(86395),
                A = t(356953),
                m = t(875058),
                v = t(217332),
                g = n(t(979163)),
                x = t(947974),
                B = n(t(758927)),
                b = n(t(628580)),
                j = t(63962),
                M = t(431045),
                _ = t(628707),
                y = n(t(295418)),
                S = n(t(597738)),
                k = t(179677),
                P = t(336568),
                T = n(t(707021)),
                w = t(63122),
                I = n(t(124400)),
                N = t(121657),
                R = t(401304),
                O = t(558288),
                L = t(236539),
                G = t(422210),
                V = t(228277),
                H = t(454964),
                U = n(t(229677)),
                z = n(t(560911)),
                q = n(t(215627)),
                Y = n(t(888768)),
                W = n(t(106485)),
                K = t(973706),
                X = t(420251),
                Z = n(t(409098)),
                $ = n(t(104175)),
                Q = n(t(428683)),
                J = n(t(723022)),
                uu = n(t(79037)),
                eu = n(t(729014)),
                tu = n(t(980197)),
                nu = n(t(900443)),
                au = n(t(552606)),
                iu = t(173725),
                ou = n(t(603249)),
                ru = t(817071),
                lu = n(t(602678)),
                su = t(900984),
                Du = n(t(829723)),
                cu = n(t(544978)),
                du = t(455316),
                fu = t(445639),
                Fu = t(952991),
                Cu = n(t(849788)),
                Eu = n(t(361264)),
                pu = t(548360),
                hu = t(667294),
                Au = n(t(156720)),
                mu = n(t(982669)),
                vu = t(948752),
                gu = n(t(309653)),
                xu = n(t(27791)),
                Bu = t(785893),
                bu = {
                    body: {
                        flexGrow: "tvf2evcx",
                        flexShrink: "oq44ahr5",
                        flexBasis: "lb5m6g5c",
                        paddingBottom: "s9fl9ege"
                    },
                    lastSectionRow: {
                        marginBottom: "brac1wpa"
                    }
                };

            function ju(u) {
                var e = u.contact,
                    t = u.catalogContext,
                    n = u.onProductDetail,
                    a = u.onProductCatalog,
                    i = f.CatalogCollection.get(e.id);
                if (!i) return null;
                var o = "",
                    r = !1;
                return (0, c.canSeeBizProfileV3)() && (o = pu.fbt._("See all", null, {
                    hk: "3dTwyT"
                }), r = !0), t.session.isAccidental() ? null : (0, d.hasShop)(e.businessProfile) ? (0, c.bannedShopsEnabled)() && (0, d.isShopBanned)(e.businessProfile) ? null : (0, Bu.jsx)(T.default, {
                    businessProfile: e.businessProfile,
                    catalog: i,
                    subtitle: o,
                    hideIncompleteRows: r
                }) : (0, Bu.jsx)(S.default, {
                    onProductDetail: n,
                    onProductCatalog: a,
                    catalog: i,
                    subtitle: o,
                    hideIncompleteRows: r,
                    shouldLog: !0
                })
            }

            function Mu(u, e) {
                var t = u.onVerification,
                    n = u.onClose,
                    d = u.onProductDetail,
                    S = u.onProductCatalog,
                    T = u.canLogQpl,
                    Mu = void 0 === T || T,
                    _u = (0, xu.default)(),
                    yu = (0, hu.useContext)(fu.DrawerContext),
                    Su = (0, vu.useModelValues)(u.contact, ["id", "formattedName", "formattedUser", "formattedShortName", "isBusiness", "isEnterprise", "isMyContact", "commonGroups", "businessProfile", "showBusinessCheckmarkAsPrimary", "showBusinessCheckmarkAsSecondary", "verifiedName", "verifiedLevel", "name", "notifyName", "labels", "phoneNumber", "businessCatalog", "isMe", "statusMute", "displayName", "shareOwnPn", "requestedPnTimestamp", "canRequestPhoneNumber", "phoneNumber", "isIAS"]),
                    ku = (0, mu.default)((function() {
                        return new g.default
                    })),
                    Pu = (0, hu.useRef)(!1),
                    Tu = (0, hu.useState)(100),
                    wu = (0, i.default)(Tu, 2),
                    Iu = wu[0],
                    Nu = wu[1],
                    Ru = (0, hu.useMemo)((function() {
                        return F.ChatCollection.get(Su.id)
                    }), [Su.id]),
                    Ou = Su.isMe && (0, s.getABPropConfigValue)("note_to_self");
                (0, hu.useEffect)((function() {
                    if (Su.businessProfile && !Su.businessProfile.stale && Su.businessCatalog && f.CatalogCollection.findCarouselCatalog(Su.id).catch((0, o.filteredCatch)(D.ServerStatusCodeError, (function() {
                            __LOG__(3)`Failed to fetch product catalog in contact drawer from server`
                        }))), (0, w.getFanOutListJob)([Su.id, (0, V.assertGetMe)()]).then((function(u) {
                            (0, j.ensureE2ESessions)(u)
                        })), (0, k.getProductCatalogContext)(yu).session.isAccidental()) m.DrawerManager.setDrawerContext("right", (0, k.buildProductCatalogContext)(new P.ProductCatalogSession, (0, h.getMaybeBizPlatformForLogging)(Su.id.toString()), U.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE));
                    else if (Su.isBusiness && (0, c.canSeeBizProfileV3)()) {
                        var e, t, n = Su.id === (0, V.getMaybeMeUser)(),
                            a = u.profileEntryPoint;
                        if (!n && a)(0, K.logProfileImpression)((0, k.getProductCatalogSessionId)(yu), a, !!(null === (e = Su.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked), !!(null === (t = Su.businessProfile) || void 0 === t ? void 0 : t.coverPhoto))
                    }
                    Mu && Su.businessProfile && (0, M.qplEndProfileView)(r.QuickLogActionType.SUCCESS)
                }), []), (0, hu.useEffect)((function() {
                    if ((0, c.btmThreadsLoggingEnabled)()) {
                        var u, e = null === (u = (0, V.getMaybeMeUser)()) || void 0 === u ? void 0 : u.equals(Su.id);
                        (0, k.getProductCatalogContext)(yu).session.isAccidental() || e || !(null == Ru ? void 0 : Ru.id) || (0, E.handleActivitiesForChatThreadLogging)([{
                            activityType: "profileViews",
                            ts: (0, l.unixTime)(),
                            chatId: Ru.id
                        }])
                    }
                }), []), (0, gu.default)((function() {
                    var u, e;
                    (0, k.getProductCatalogContext)(yu).session.isAccidental() || Su.isBusiness && (0, c.canSeeBizProfileV3)() && (0, K.logProfileExit)((0, k.getProductCatalogSessionId)(yu), Iu, null === (u = Su.businessProfile) || void 0 === u ? void 0 : u.isProfileLinked, !!(null === (e = Su.businessProfile) || void 0 === e ? void 0 : e.coverPhoto))
                }));
                var Lu = function() {
                        n ? n() : null == _u || _u.requestDismiss()
                    },
                    Gu = function(u) {
                        if (Pu.current || z.default.isPSA(Su.id)) {
                            var e = u.target;
                            _.ModalManager.openMedia((0, Bu.jsx)(Eu.default, {
                                contact: Su,
                                profilePicThumb: Su.getProfilePicThumb(),
                                animateBorderRadius: !0,
                                getZoomNode: function(u) {
                                    u(e)
                                }
                            }), {
                                transition: "profile-viewer",
                                uim: _u
                            })
                        } else G.ToastManager.open((0, Bu.jsx)(L.Toast, {
                            msg: pu.fbt._("No profile photo", null, {
                                hk: "2bdeTO"
                            })
                        }))
                    },
                    Vu = function() {
                        Pu.current = !0
                    },
                    Hu = Su.isEnterprise ? null : (0, Bu.jsx)(Q.default, {
                        contact: Su,
                        onClose: Lu,
                        flatListController: ku.current
                    }),
                    Uu = null;
                u.onMediaGallery && Ru && (Uu = (0, Bu.jsx)(lu.default, {
                    chat: Ru,
                    onMediaGallery: u.onMediaGallery
                }));
                var zu = null,
                    qu = null;
                if (Su && Su.isBusiness && Su.businessProfile && Su.businessCatalog) {
                    var Yu = (0, Bu.jsx)(ju, {
                        contact: Su,
                        catalogContext: (0, k.getProductCatalogContext)(yu),
                        onProductDetail: function(u) {
                            (0, H.qplStartProductView)("ContactInfo"), d(u)
                        },
                        onProductCatalog: S
                    });
                    (0, c.canSeeBizProfileV3)() ? qu = Yu: zu = Yu
                }
                var Wu, Ku, Xu = Ru && Ru.mute.canMute() ? (0, Bu.jsx)(y.default, {
                    chat: Ru,
                    mute: Ru.mute,
                    settings: I.default
                }) : null;
                if (u.onStarred && (Wu = (0, Bu.jsx)(eu.default, {
                        onStarred: u.onStarred
                    })), (0, iu.isKeepInChatReadAndUIEnabled)() && Ru && (Ru.hasKeptMsgs() || (0, C.isEphemeralSettingOn)(Ru))) {
                    var Zu = (0, Bu.jsx)(O.TextSpan, {
                            theme: "title",
                            size: "16",
                            children: pu.fbt._("Kept Messages", null, {
                                hk: "w8m3u"
                            })
                        }),
                        $u = (0, Bu.jsx)(x.KeepInChatIcon, {
                            color: R.SvgColorProp.SECONDARY,
                            height: 20
                        });
                    Ku = (0, Bu.jsx)(ru.ChatInfoDrawerSection, {
                        titleTestId: "section-kept-messages",
                        xstyle: bu.lastSectionRow,
                        children: (0, Bu.jsx)(ou.default, {
                            testid: "block-kept-messages",
                            side: "chevron",
                            icon: $u,
                            onClick: u.onKept,
                            title: Zu
                        })
                    })
                }
                var Qu, Ju, ue, ee, te = Ru && (0, C.shouldShowEphemeralSetting)(Ru) ? (0, Bu.jsx)(v.EphemeralSettingRow, {
                        onClick: u.onEphemeral,
                        chat: Ru,
                        testid: "contact-info-dm-setting-row"
                    }) : null,
                    ne = z.default.isPSA(Su.id) ? (0, Bu.jsx)(nu.default, {}) : (0, Bu.jsx)(J.default, {
                        contact: (0, N.unproxy)(Su),
                        onVerificationClick: function() {
                            t()
                        }
                    }),
                    ae = Su.id.isLid() && null == Su.phoneNumber,
                    ie = Su.id.isLid(),
                    oe = (0, Bu.jsxs)(ru.ChatInfoDrawerSection, {
                        children: [Xu, te, ne, Ru && ie ? (0, Bu.jsx)(su.PhoneNumberVisibilityIndicator1On1, {
                            chat: Ru
                        }) : null]
                    }),
                    re = !Su.isBusiness,
                    le = re || Su.isIAS ? null : (0, Bu.jsx)(q.default, {
                        contact: (0, N.unproxy)(Su)
                    }),
                    se = re ? (0, Bu.jsx)($.default, {
                        contact: (0, N.unproxy)(Su)
                    }) : null,
                    De = (0, c.canSeeBizProfileV3)() && Su.isBusiness && Su.businessProfile ? (0, Bu.jsx)(Z.default, {
                        contact: Su,
                        onProfilePicLoad: Vu,
                        onProfilePicClick: Gu,
                        onOpenStatus: function() {
                            var u, e;
                            (0, K.logStatusClick)((0, k.getProductCatalogSessionId)(yu), null === (u = Su.businessProfile) || void 0 === u ? void 0 : u.isProfileLinked, !!(null === (e = Su.businessProfile) || void 0 === e ? void 0 : e.coverPhoto))
                        },
                        businessProfile: Su.businessProfile,
                        onProductCatalog: S,
                        isMessageYourselfChat: Ou,
                        isPhoneNumberHidden: ae
                    }) : (0, Bu.jsx)(tu.default, {
                        contact: Su,
                        onDetailImageLoad: Vu,
                        onDetailImageClick: Gu,
                        isMessageYourselfChat: Ou,
                        isPhoneNumberHidden: ae
                    }),
                    ce = null,
                    de = void 0;
                Su.isBusiness && Su.businessProfile && ((0, c.canSeeBizProfileV3)() && Su.businessProfile ? (ce = (0, Bu.jsx)(W.default, {
                    businessProfile: Su.businessProfile
                }), Qu = Su.isIAS ? null : (0, Bu.jsx)(Y.default, {
                    contact: Su
                }), (null !== (ue = null === (ee = Su.labels) || void 0 === ee ? void 0 : ee.length) && void 0 !== ue ? ue : 0) > 0 && (Ju = (0, Bu.jsx)(Cu.default, {
                    theme: "padding",
                    children: (0, Bu.jsx)(b.default, {
                        labels: Su.labels,
                        theme: "standalone"
                    })
                })), de = function(u) {
                    var e = Math.floor(100 * (1 + u.currentTarget.scrollTop / u.currentTarget.offsetHeight));
                    e > Iu && Nu(e)
                }) : Su.businessProfile && (ce = (0, Bu.jsx)(X.BusinessProfile, {
                    contact: Su,
                    businessProfile: Su.businessProfile
                })));
                var fe, Fe = {
                    title: pu.fbt._("Contact info", null, {
                        hk: "LUJtH"
                    }),
                    type: Fu.DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: !0,
                    onCancel: Lu,
                    focusBackOrCancel: !0
                };
                return Su.businessProfile && !0 === Su.businessProfile.isProfileLinked && (0, c.bizLinkedAccountsEnabled)() && (0, c.canViewBizLinkedAccounts)() && (fe = (0, Bu.jsx)(au.default, {
                    businessProfile: Su.businessProfile,
                    rowTheme: "linked-account-consumer"
                })), (0, Bu.jsxs)(Du.default, {
                    ref: e,
                    theme: "striped",
                    testid: "chat-info-drawer",
                    children: [(0, Bu.jsx)(Fu.DrawerHeader, (0, a.default)((0, a.default)({}, Fe), {}, {
                        testid: "contact-info-header"
                    })), (0, Bu.jsx)(cu.default, {
                        flatListControllers: [ku.current],
                        onScroll: de,
                        children: (0, Bu.jsxs)("section", {
                            className: (0, Au.default)(bu.body),
                            children: [De, Qu, Ju, qu, ce, fe, zu, se, Uu, Wu, Ku, oe, le, undefined, !Ou && Hu, !Ou && (0, Bu.jsx)(uu.default, {
                                contact: Su
                            }), (0, Bu.jsx)(ru.ChatInfoDrawerButtonsSection, {
                                children: Ru ? (0, Bu.jsx)(du.DrawerButton, {
                                    testid: "li-delete-chat",
                                    icon: (0, Bu.jsx)(A.DeleteIcon, {}),
                                    color: "danger",
                                    onClick: function() {
                                        var u = F.ChatCollection.assertGet(Su.id);
                                        p.Cmd.deleteOrExitChatFromEntryPoint(u, 12)
                                    },
                                    theme: "chat-info",
                                    children: B.default.t(221)
                                }) : null
                            })]
                        })
                    })]
                }, "contact-info-modal")
            }
            var _u = (0, hu.forwardRef)(Mu);
            e.default = _u
        },
        723022: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.onVerificationClick,
                    t = (0, f.useModelValues)(u.contact, ["id", "privacyMode"]),
                    n = function(u, e) {
                        if ((0, a.default)(e.user)) return {
                            text: d.fbt._("Click to learn how messages and calls are secured.", null, {
                                hk: "1UxhjE"
                            }),
                            title: d.fbt._("Security", null, {
                                hk: "3j3j0a"
                            }),
                            onClick: function() {
                                (0, r.default)(d.fbt._("WhatsApp secures your messages and calls with this account.", null, {
                                    hk: "18Ci1q"
                                }), (0, i.getSupportChatSafetyFaqUrl)(), d.fbt._("Learn more about chats with WhatsApp Support.", null, {
                                    hk: "1an25A"
                                }))
                            }
                        };
                        switch (u) {
                            case l.ReducedPrivacyMode.E2EE:
                                return null;
                            case l.ReducedPrivacyMode.BSP:
                                return {
                                    text: d.fbt._("This business works with other companies to manage this chat. Click to learn more.", null, {
                                        hk: "VbOOZ"
                                    }), title: d.fbt._("Security", null, {
                                        hk: "3j3j0a"
                                    }), onClick: function() {
                                        (0, r.default)((0, o.formatBspModalText)(), (0, i.getE2EEnterpriseFaqUrl)())
                                    }
                                };
                            case l.ReducedPrivacyMode.FB:
                                return {
                                    text: e.isIAS() ? d.fbt._("WhatsApp Surveys uses a secure service from Meta to manage this chat. Click to learn more.", null, {
                                        hk: "49GQ04"
                                    }) : d.fbt._("This business uses a secure service from Meta to manage this chat. Click to learn more.", null, {
                                        hk: "3wvGOC"
                                    }), title: d.fbt._("Security", null, {
                                        hk: "3j3j0a"
                                    }), onClick: function() {
                                        (0, r.default)((0, o.formatFbModalText)(e.isIAS()), (0, i.getE2EEnterpriseFaqUrl)())
                                    }
                                }
                        }
                    }((0, l.getReducedPrivacyMode)(t.privacyMode), t.id);
                if (n) return (0, F.jsx)(c.default, {
                    highlightSurface: D.default.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_CONTACT,
                    title: n.title,
                    text: n.text,
                    onClick: n.onClick
                });
                var C = (0, s.isVoiceCallEnabled)() || (0, s.isVideoCallEnabled)() ? d.fbt._("Messages and calls are end-to-end encrypted. Click to verify.", null, {
                    hk: "GtGQH"
                }) : d.fbt._("Messages are end-to-end encrypted. Click to verify.", null, {
                    hk: "1AqhWR"
                });
                return (0, F.jsx)(c.default, {
                    highlightSurface: D.default.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_CONTACT,
                    onClick: e,
                    text: C
                })
            };
            var a = n(t(535992)),
                i = t(212390),
                o = t(329369),
                r = n(t(741692)),
                l = t(358015),
                s = t(14115),
                D = n(t(229677)),
                c = n(t(963651)),
                d = t(548360),
                f = t(948752),
                F = t(785893)
        },
        79037: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = (0, x.useModelValues)(u.contact, ["id", "displayName", "isBusiness", "isContactBlocked", "isIAS", "isMyContact"]),
                    t = (0, B.jsx)(s.Name, {
                        contact: u.contact,
                        skipCheckMark: !0
                    }),
                    n = null;
                n = e.isContactBlocked ? (0, B.jsx)(A.DrawerButton, {
                    testid: "li-unblock",
                    color: "success",
                    icon: (0, B.jsx)(c.SettingsBlockedIcon, {
                        directional: !0
                    }),
                    onClick: function() {
                        return (0, i.handleUnblock)(u.contact, o.BlockEntryPoint.Profile)
                    },
                    theme: "chat-info",
                    children: g.fbt._("Unblock {contact_name}", [g.fbt._param("contact_name", t)], {
                        hk: "1fZZEx"
                    })
                }) : (0, B.jsx)(A.DrawerButton, {
                    testid: "li-block",
                    color: "danger",
                    icon: (0, B.jsx)(c.SettingsBlockedIcon, {
                        directional: !0
                    }),
                    onClick: function() {
                        var n = function() {
                                var t = r.ChatCollection.get(e.id);
                                if (null == t ? void 0 : t.isPSA) {
                                    var n = t.msgs.last();
                                    (0, F.logChatPSARemove)(n, 1, 1)
                                }(0, a.blockContact)(u.contact, o.BlockEntryPoint.Profile), l.ModalManager.close()
                            },
                            i = (0, B.jsx)(h.ConfirmPopup, {
                                onOK: n,
                                okText: g.fbt._("Block", null, {
                                    hk: "9s17C"
                                }),
                                onCancel: function() {
                                    return l.ModalManager.close()
                                },
                                title: g.fbt._("Block {contact_name}?", [g.fbt._param("contact_name", t)], {
                                    hk: "26yDKy"
                                }),
                                children: g.fbt._("Blocked contacts will no longer be able to call you or send you messages.", null, {
                                    hk: "3ioCkx"
                                })
                            });
                        C.default.isPSA(e.id) ? i = (0, B.jsx)(m.default, {
                            onBlock: n,
                            onCancel: function() {
                                return l.ModalManager.close()
                            }
                        }) : e.isBusiness && (i = (0, B.jsx)(E.default, {
                            contact: e,
                            blockEntryPoint: o.BlockEntryPoint.Profile,
                            withReport: !1
                        })), l.ModalManager.open(i)
                    },
                    theme: "chat-info",
                    children: g.fbt._("Block {contact_name}", [g.fbt._param("contact_name", t)], {
                        hk: "laDqJ"
                    })
                });
                var b = e.isIAS ? g.fbt._("Report", null, {
                    hk: "2SQkZ4"
                }) : g.fbt._("Report business", null, {
                    hk: "2Tvnn8"
                });
                e.isBusiness || (b = g.fbt._("Report {contact_name}", [g.fbt._param("contact_name", t)], {
                    hk: "3Dqyjo"
                }));
                var j = C.default.isPSA(e.id) ? null : (0, B.jsx)(A.DrawerButton, {
                    testid: "li-report-spam",
                    color: "danger",
                    icon: (0, B.jsx)(f.ThumbsDownIcon, {}),
                    onClick: function() {
                        l.ModalManager.open((0, B.jsx)(v.default, {
                            isMessage: !1,
                            isBusiness: u.contact.isBusiness,
                            isGroupChat: !1,
                            onReport: function() {
                                var e = r.ChatCollection.get(u.contact.id);
                                e && (0, D.sendReport)({
                                    chat: e,
                                    spamFlow: d.SpamFlow.AccountInfoReport
                                }), l.ModalManager.close()
                            },
                            onReportBlockClear: function() {
                                var e = r.ChatCollection.get(u.contact.id);
                                e && (0, D.sendSpamBlockClear)(e, d.SpamFlow.AccountInfoReport), l.ModalManager.close()
                            },
                            onCancel: function() {
                                return l.ModalManager.close()
                            }
                        }))
                    },
                    theme: "chat-info",
                    children: b
                });
                return (0, B.jsxs)(p.ChatInfoDrawerButtonsSection, {
                    children: [n, j]
                })
            };
            var a = t(883236),
                i = t(274735),
                o = t(354050),
                r = t(797378),
                l = t(628707),
                s = t(246009),
                D = t(219867),
                c = t(133202),
                d = t(233565),
                f = t(949059),
                F = t(263398),
                C = n(t(560911)),
                E = n(t(520575)),
                p = t(817071),
                h = t(404186),
                A = t(455316),
                m = n(t(515476)),
                v = n(t(706903)),
                g = t(548360),
                x = t(948752),
                B = t(785893)
        },
        729014: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.onStarred,
                    t = (0, D.jsx)(o.TextSpan, {
                        theme: "title",
                        size: "16",
                        children: s.fbt._("Starred messages", null, {
                            hk: "4wVbNG"
                        })
                    }),
                    n = (0, D.jsx)(a.StarIcon, {
                        color: i.SvgColorProp.SECONDARY,
                        height: 20
                    });
                return (0, D.jsx)(l.ChatInfoDrawerSection, {
                    titleTestId: "section-starred-messages",
                    children: (0, D.jsx)(r.default, {
                        testid: "block-starred-messages",
                        side: "chevron",
                        icon: n,
                        onClick: e,
                        title: t
                    })
                })
            };
            var a = t(136896),
                i = t(401304),
                o = t(558288),
                r = n(t(603249)),
                l = t(817071),
                s = t(548360),
                D = t(785893)
        },
        415222: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
                return (0, d.jsxs)(l.FlexRow, {
                    justify: "center",
                    className: (0, c.default)(C),
                    children: [f, (0, d.jsx)(s.TextSpan, {
                        className: (0, c.default)(E),
                        children: D.fbt._("This person's phone number is not shared in this chat. {=m2}", [D.fbt._implicitParam("=m2", (0, d.jsx)(a.default, {
                            onClick: F,
                            children: D.fbt._("Learn more", null, {
                                hk: "t6HJf"
                            })
                        }))], {
                            hk: "3CEKuh"
                        })
                    })]
                })
            };
            var a = n(t(522656)),
                i = t(14630),
                o = t(192070),
                r = t(212390),
                l = t(208188),
                s = t(558288),
                D = t(548360),
                c = n(t(156720)),
                d = t(785893),
                f = (0, d.jsx)(i.DialpadIcon, {
                    directional: !0
                }),
                F = function() {
                    var u = (0, r.getPhoneNumberHidingFaqUrl)();
                    (0, o.openExternalLink)(u)
                },
                C = {
                    alignItems: "gndfcl4n",
                    backgroundColor: "f6ipylw5",
                    borderTopStartRadius: "bbr44loe",
                    borderTopEndRadius: "ooj5yc5b",
                    borderBottomEndRadius: "m8i16etx",
                    borderBottomStartRadius: "cw0ivh8j",
                    display: "p357zi0d",
                    paddingTop: "fbgy3m38",
                    paddingEnd: "btzf6ewn",
                    paddingBottom: "oq31bsqd",
                    paddingStart: "nqtxkp62",
                    marginTop: "a4rz4n5c",
                    marginBottom: "inww9tbj"
                },
                E = {
                    textAlign: "qfejxiq4",
                    color: "pm5hny62",
                    marginTop: "m3ct2rho",
                    marginEnd: "k1jo73ug",
                    marginBottom: "ec1z5skj",
                    marginStart: "isfiuinm",
                    wordBreak: "cw3vfol9"
                }
        },
        980197: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t = u.contact,
                    n = u.onDetailImageLoad,
                    a = u.onDetailImageClick,
                    r = u.isMessageYourselfChat,
                    D = u.isPhoneNumberHidden,
                    d = B.fbt._("Official WhatsApp Account", null, {
                        hk: "2cEUzF"
                    });
                if (E.default.isPSA(t.id)) e = d;
                else if (t.isMyContact) e = (0, p.widToFormattedUser)(t.id);
                else {
                    var F = t.notifyName;
                    null != F && (e = `~${F}`)
                }
                return (0, j.jsxs)(v.default, {
                    theme: "padding-large",
                    children: [(0, j.jsx)("div", {
                        className: (0, b.default)(M.avatar),
                        children: (0, j.jsx)(o.DetailImage, {
                            id: t.id,
                            size: o.DetailImageSize.Large,
                            loader: !0,
                            onLoad: n,
                            onClick: a,
                            quality: o.DetailImageQuality.High
                        })
                    }), (0, j.jsxs)(l.FlexColumn, {
                        align: "center",
                        children: [(0, j.jsx)(f.TextHeader, {
                            level: "2",
                            size: "24",
                            xstyle: M.contactName,
                            children: (0, j.jsx)(c.Name, {
                                contact: t,
                                showMessageYourselfName: r,
                                selectable: !0,
                                breakWord: !0
                            })
                        }), null != e && (0, j.jsx)("div", {
                            className: (0, b.default)(M.secondaryWrapper),
                            children: (0, j.jsx)(i.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, j.jsx)(f.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: e
                                })
                            })
                        })]
                    }), D && (0, j.jsx)(l.FlexRow, {
                        align: "center",
                        children: (0, j.jsx)(h.default, {})
                    }), !r && (0, j.jsx)(y, {
                        contact: t,
                        displayRequestPnButton: D
                    }), (0, j.jsx)(s.default, {
                        labels: t.labels
                    })]
                })
            };
            var a = t(564817),
                i = t(160967),
                o = t(207826),
                r = t(403998),
                l = t(208188),
                s = n(t(628580)),
                D = t(628707),
                c = t(246009),
                d = t(121657),
                f = t(558288),
                F = t(593438),
                C = n(t(229677)),
                E = n(t(560911)),
                p = t(221156),
                h = n(t(415222)),
                A = n(t(860226)),
                m = n(t(81778)),
                v = n(t(849788)),
                g = t(394949),
                x = n(t(753643)),
                B = t(548360),
                b = n(t(156720)),
                j = t(785893),
                M = {
                    avatar: {
                        display: "p357zi0d",
                        justifyContent: "ac2vgrno",
                        marginBottom: "pz0xruzv"
                    },
                    secondaryWrapper: {
                        lineHeight: "a4ywakfo",
                        marginTop: "qt60bha0"
                    },
                    contactName: {
                        textAlign: "qfejxiq4"
                    }
                };
            var _ = {
                container: {
                    marginTop: "a4rz4n5c",
                    marginBottom: "inww9tbj"
                },
                button: {
                    marginStart: "nzcjdldu",
                    marginEnd: "gqi0zhd6"
                }
            };

            function y(u) {
                var e = u.contact,
                    t = u.displayRequestPnButton,
                    n = (0, m.default)((0, d.unproxy)(e));
                if (!n.isVideoCallEnabled && !n.isVoiceCallEnabled || E.default.isPSA(e.id)) return null;
                var i = B.fbt._("Request", null, {
                        hk: "1Qh451"
                    }),
                    o = B.fbt._("Requested", null, {
                        hk: "3GgAXn"
                    }),
                    s = e.canRequestPhoneNumber ? i : o;
                return (0, j.jsxs)(l.FlexRow, {
                    justify: "center",
                    xstyle: _.container,
                    children: [t && (0, j.jsx)(A.default, {
                        Icon: r.DialpadSmallIcon,
                        iconWidth: 19,
                        label: s,
                        xstyle: _.button,
                        disabled: !e.canRequestPhoneNumber,
                        onClick: function() {
                            D.ModalManager.open((0, j.jsx)(x.default, {
                                entryPoint: C.default.PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST
                            }))
                        },
                        testid: "request-phone-number-button-consumer"
                    }), (0, j.jsx)(A.default, {
                        Icon: F.VoiceCallFilledIcon,
                        iconWidth: 19,
                        label: B.fbt._("Audio", null, {
                            hk: "1b375N"
                        }),
                        testid: "contact-action voice-call-button",
                        xstyle: _.button,
                        disabled: !n.canStartVoiceCall,
                        onClick: function() {
                            (0, g.handleVoipCall)(n.startVoiceCall, e, C.default.PNH_ENTRY_POINT_TYPE.AUDIO)
                        }
                    }), (0, j.jsx)(A.default, {
                        Icon: a.ChatInfoVideoIcon,
                        label: B.fbt._("Video", null, {
                            hk: "3zMUsJ"
                        }),
                        testid: "contact-action video-call-button",
                        xstyle: _.button,
                        disabled: !n.canStartVideoCall,
                        onClick: function() {
                            (0, g.handleVoipCall)(n.startVideoCall, e, C.default.PNH_ENTRY_POINT_TYPE.VIDEO)
                        }
                    })]
                })
            }
        },
        900443: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
                var u = {
                    text: s.fbt._("This is an official account of WhatsApp", null, {
                        hk: "2Av1mT"
                    }),
                    title: s.fbt._("Security", null, {
                        hk: "2jDPpv"
                    }),
                    onClick: function() {
                        (0, o.default)((0, i.formatWaChatSecurityModalText)(), (0, a.getWAChatFaqUrl)())
                    }
                };
                return (0, D.jsx)(l.default, {
                    highlightSurface: r.default.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_CONTACT,
                    title: u.title,
                    text: u.text,
                    onClick: u.onClick
                })
            };
            var a = t(212390),
                i = t(329369),
                o = n(t(741692)),
                r = n(t(229677)),
                l = n(t(963651)),
                s = t(548360),
                D = t(785893)
        },
        58089: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.onClick,
                    t = u.parentGroupMetadata,
                    n = u.parentGroupChat,
                    A = (0, f.default)(t).subgroupCount,
                    m = (0, p.useModelValues)(n.contact, ["name"]).name,
                    v = (0, i.isIntegritySuspendedCommunity)(n);
                (0, E.useEffect)((function() {
                    (0, D.queryAndUpdateSubgroupsMetadata)(t.id, t.joinedSubgroups)
                }), []);
                var g = C.fbt._("Community", null, {
                    hk: "2P4Qwb"
                });
                return (0, h.jsx)(F.default, {
                    theme: "no-padding",
                    children: (0, h.jsx)(a.default, {
                        testid: "group-info-community-section",
                        image: (0, h.jsx)(r.DetailImage, {
                            id: t.id,
                            shape: r.DetailImageShape.Squircle,
                            size: 60
                        }),
                        primary: (0, h.jsx)(l.EmojiText, {
                            text: m,
                            ellipsify: !0
                        }),
                        onClick: e,
                        theme: "community-home",
                        secondary: (0, h.jsxs)(d.TextSpan, {
                            size: "16",
                            color: "secondary",
                            children: [g, v ? null : (0, h.jsxs)(h.Fragment, {
                                children: [s.default.isRTL() ? " - " : " · ", C.fbt._({
                                    "*": "{count} Groups",
                                    _1: "1 Group"
                                }, [C.fbt._plural(A, "count")], {
                                    hk: "38FdVG"
                                })]
                            })]
                        }),
                        detail: (0, h.jsx)(o.ChevronRightAltIcon, {
                            color: c.SvgColorProp.SECONDARY,
                            directional: !0
                        })
                    })
                })
            };
            var a = n(t(799328)),
                i = t(635625),
                o = t(519896),
                r = t(207826),
                l = t(990055),
                s = n(t(758927)),
                D = t(239110),
                c = t(401304),
                d = t(558288),
                f = n(t(452639)),
                F = n(t(849788)),
                C = t(548360),
                E = t(667294),
                p = t(948752),
                h = t(785893)
        },
        1666: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.groupMetadata,
                    t = (0, A.useModelValues)(e, ["id", "parentGroup"]),
                    n = t.id,
                    g = t.parentGroup,
                    x = (0, h.default)(e.participants, "change:isAdmin", (function() {
                        return e.participants.iAmAdmin()
                    })),
                    B = (0, h.default)(e.participants, ["bulk_add", "bulk_remove", "reset"], (function() {
                        return e.participants.length
                    })),
                    b = (0, a.getABPropConfigValue)("parent_group_min_participants_for_group_entry_point");
                if (!(0, D.communitiesEnabled)() || !x || null != g || B < b) return null;
                return (0, m.jsx)(E.default, {
                    theme: "no-padding",
                    children: (0, m.jsx)(i.default, {
                        testid: "group-info-create-community-section",
                        image: (0, m.jsx)(r.CommunitySquircleIcon, {
                            iconXstyle: v.communitySquircle,
                            width: 40,
                            height: 40
                        }),
                        primary: (0, m.jsx)(F.TextSpan, {
                            size: "16",
                            children: p.fbt._("Start a community", null, {
                                hk: "2hSyE2"
                            })
                        }),
                        onClick: function() {
                            var u = (0, d.default)();
                            l.DrawerManager.openDrawerLeft((0, m.jsx)(c.NewCommunityFlowLoadable, {
                                loggingSessionId: u,
                                existingGroups: [n]
                            }), {
                                focusType: s.FocusType.TABBABLE
                            }), new C.default.CommunityCreation({
                                communityCreationSessionId: u,
                                communityCreationActionTaken: C.default.COMMUNITY_CREATION_ACTION_TAKEN_TYPE.ENTER,
                                communityCreationCurrentScreen: C.default.COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.GROUP_INFO
                            }).commit()
                        },
                        theme: "community-create",
                        secondary: (0, m.jsx)(F.TextSpan, {
                            size: "14",
                            color: "secondary",
                            children: p.fbt._("Organize related groups and easily reach them at once", null, {
                                hk: "6BbTr"
                            })
                        }),
                        detail: (0, m.jsx)(o.ChevronRightAltIcon, {
                            color: f.SvgColorProp.SECONDARY,
                            directional: !0
                        })
                    })
                })
            };
            var a = t(519509),
                i = n(t(799328)),
                o = t(519896),
                r = t(297125),
                l = t(875058),
                s = t(756847),
                D = t(518005),
                c = t(150962),
                d = n(t(66262)),
                f = t(401304),
                F = t(558288),
                C = n(t(229677)),
                E = n(t(849788)),
                p = t(548360),
                h = (n(t(156720)), n(t(554327))),
                A = t(948752),
                m = t(785893),
                v = {
                    communitySquircle: {
                        color: "fsk8o631"
                    }
                }
        },
        446145: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t = u.chat,
                    n = (0, s.useOptionalModelValues)(t.groupMetadata, ["groupType"]);
                e = (0, i.communitiesEnabled)() && (null == n ? void 0 : n.groupType) === a.GroupType.DEFAULT_ANNOUNCEMENT_GROUP ? (0, D.jsx)("div", {
                    className: (0, l.default)(c),
                    children: r.fbt._("", null, {
                        hk: "4kc4Kr"
                    })
                }) : r.fbt._("Add group description", null, {
                    hk: "BVsoQ"
                });
                return (0, D.jsx)(o.default, {
                    chat: u.chat,
                    showFullDescription: u.showFullDescription,
                    editRestrictionText: r.fbt._("Only admins can edit this group's info", null, {
                        hk: "1a2ztg"
                    }),
                    testid: "group-info-drawer-description-title-input",
                    containerTestId: "group-info-drawer-description-container",
                    emptyValuePlaceholder: e
                })
            };
            var a = t(894286),
                i = t(518005),
                o = n(t(457718)),
                r = t(548360),
                l = n(t(156720)),
                s = t(948752),
                D = t(785893),
                c = {
                    color: "tviruh8d",
                    fontSize: "enbbiyaj"
                }
        },
        378244: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = t(957217),
                i = t(633757),
                o = t(665122),
                r = t(217332),
                l = t(212390),
                s = n(t(979163)),
                D = t(894286),
                c = t(947974),
                d = n(t(758927)),
                f = t(518005),
                F = t(628707),
                C = n(t(295418)),
                E = t(469073),
                p = t(652862),
                h = t(475426),
                A = n(t(124400)),
                m = t(136896),
                v = t(121657),
                g = t(10993),
                x = t(892356),
                B = t(401304),
                b = t(558288),
                j = t(236539),
                M = t(422210),
                _ = t(14115),
                y = t(966808),
                S = n(t(229677)),
                k = t(403056),
                P = n(t(58089)),
                T = n(t(1666)),
                w = n(t(446145)),
                I = n(t(646103)),
                N = t(89405),
                R = n(t(681834)),
                O = n(t(30030)),
                L = t(946899),
                G = n(t(594243)),
                V = t(173725),
                H = n(t(547657)),
                U = n(t(603249)),
                z = t(817071),
                q = n(t(602678)),
                Y = t(900984),
                W = n(t(829723)),
                K = n(t(544978)),
                X = t(952991),
                Z = n(t(849788)),
                $ = n(t(251282)),
                Q = t(841726),
                J = n(t(963651)),
                uu = t(548360),
                eu = t(667294),
                tu = n(t(156720)),
                nu = n(t(802418)),
                au = n(t(982669)),
                iu = t(779740),
                ou = t(948752),
                ru = n(t(27791)),
                lu = t(785893),
                su = {
                    body: {
                        flexShrink: "oq44ahr5",
                        flexGrow: "tvf2evcx",
                        flexBasis: "lb5m6g5c",
                        paddingBottom: "s9fl9ege"
                    },
                    announcementGroupDisclaimer: {
                        textAlign: "ljrqcn24",
                        paddingTop: "n1yiu2zv",
                        paddingBottom: "jd93c9cp",
                        paddingEnd: "bcymb0na",
                        paddingStart: "e8k79tju",
                        lineHeight: "jgi8eev7",
                        wordBreak: "cw3vfol9"
                    },
                    lastSectionRow: {
                        marginBottom: "brac1wpa"
                    }
                },
                Du = (0, j.genId)("max_participant_toast");

            function cu(u, e) {
                var t = u.onVerification,
                    n = u.onClose,
                    cu = (0, ru.default)(),
                    du = (0, nu.default)(),
                    fu = (0, ou.useModelValues)(u.chat, ["mute", "id", "pendingAction", "groupMetadata"]),
                    Fu = (0, ou.useModelValues)(u.groupMetadata, ["id", "cachedDeviceCount", "cachedDeviceSizeBucket", "participants", "parentGroup", "pendingParticipants", "announce", "support", "incognito", "groupType", "restrict", "isIncognitoCag"]);
                (0, ou.useModelValues)(u.contact, ["name", "id", "pendingAction"]);
                var Cu = Fu.groupType === D.GroupType.DEFAULT_ANNOUNCEMENT_GROUP,
                    Eu = (0, au.default)((function() {
                        return new S.default.UiAction({
                            uiActionType: Cu ? S.default.UI_ACTION_TYPE.DEFAULT_SUBGROUP_INFO_OPEN : S.default.UI_ACTION_TYPE.GROUP_INFO_OPEN,
                            uiActionPreloaded: !0,
                            isLid: Fu.isIncognitoCag
                        })
                    })),
                    pu = (0, au.default)((function() {
                        return new s.default
                    })),
                    hu = (0, au.default)((function() {
                        return new s.default
                    })),
                    Au = (0, eu.useRef)(null);
                (0, iu.useListener)(Fu.participants, ["bulk_add", "bulk_remove", "reset", "sort", "change:isAdmin", "change:isSuperAdmin"], du), (0, iu.useListener)(Fu.pendingParticipants, ["add", "remove", "reset"], du);
                var mu, vu = function() {
                    var u, e = (0, f.getGroupSizeLimit)(Fu.groupType),
                        t = null === (u = Fu.getParentGroupChat()) || void 0 === u ? void 0 : u.formattedTitle;
                    if (Fu.participants.length >= e) {
                        var n = d.default.t(48, {
                            max: e
                        });
                        M.ToastManager.open((0, lu.jsx)(j.Toast, {
                            msg: n,
                            id: Du
                        }))
                    } else {
                        var a = (0, lu.jsx)(H.default, {
                            chat: (0, v.unproxy)(fu),
                            pushTransition: "none",
                            popTransition: "none",
                            communityName: t
                        });
                        F.ModalManager.open(a, {
                            transition: "modal-flow"
                        })
                    }
                };
                if ((0, eu.useEffect)((function() {
                        (0, i.isIntegritySuspendedDefaultSubgroup)(fu) ? (0, g.openTerminatedCommunityModal)() : (0, i.isTerminatedGroupOrNotMember)(fu) ? (0, x.openTerminatedGroupOrNotMemberModal)() : (0, i.isSuspendedGroup)(fu) && (0, x.openSuspendedGroupModal)(!0 === (0, i.shouldIncludeEntityIdInAppealRequest)() ? Fu.id.user.toString() : null)
                    }), []), (0, eu.useEffect)((function() {
                        Fu.participants.ensureSorted(), Fu.pendingParticipants.ensureSorted()
                    })), (0, eu.useEffect)((function() {
                        var u = Eu.current;
                        if (u) {
                            var e = Fu.cachedDeviceSizeBucket;
                            null != e && (u.sizeBucket = e), Object.assign(u, (0, y.getGroupCountMetricsFromGroupMetadata)((0, v.unproxy)(Fu))), u.markUiActionT(), u.commit(), Eu.current = void 0
                        }(0, k.logUiActionShadowPrivateStatsTestEvents)()
                    }), []), Fu.canSetGroupProperty()) {
                    var gu = (0, lu.jsx)(b.TextSpan, {
                            theme: "title",
                            children: uu.fbt._("Group settings", null, {
                                hk: "3sS0Vl"
                            })
                        }),
                        xu = (0, lu.jsx)(h.SettingsIcon, {
                            color: B.SvgColorProp.SECONDARY,
                            height: 17
                        });
                    mu = (0, lu.jsx)(U.default, {
                        testid: "group-settings-row",
                        side: "chevron",
                        icon: xu,
                        onClick: u.onAdminSetting,
                        title: gu
                    })
                }
                var Bu = null;
                u.onMediaGallery && (Bu = (0, lu.jsx)(q.default, {
                    onMediaGallery: u.onMediaGallery,
                    chat: (0, v.unproxy)(fu)
                }));
                var bu = fu && (0, a.shouldShowEphemeralSetting)(fu) ? (0, lu.jsx)(r.EphemeralSettingRow, {
                        onClick: u.onEphemeral,
                        chat: fu,
                        groupMetadata: Fu,
                        testid: "contact-info-dm-setting-row"
                    }) : null,
                    ju = null;
                if ((0, f.communitiesEnabled)() && fu && Fu.parentGroup && Fu.participants.iAmMember()) {
                    var Mu = Fu.getParentGroupChat();
                    (null == Mu ? void 0 : Mu.groupMetadata) && (ju = (0, lu.jsx)(P.default, {
                        onClick: function() {
                            var e;
                            null === (e = u.onCommunityClick) || void 0 === e || e.call(u)
                        },
                        parentGroupMetadata: Mu.groupMetadata,
                        parentGroupChat: Mu
                    }))
                }
                var _u = null;
                _u = (0, lu.jsx)(J.default, {
                    highlightSurface: S.default.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
                    onClick: function() {
                        if ((0, f.isPrivacyNarrativeV1Enabled)() && (0, E.shouldShowNewE2eInfoModal)((0, v.unproxy)(fu))) {
                            var u = (0, l.getE2EFaqUrl)();
                            F.ModalManager.open((0, lu.jsx)(Q.E2eInfoModalV2, {
                                highlightSurface: S.default.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
                                url: u
                            }))
                        } else F.ModalManager.open((0, lu.jsx)($.default, {
                            highlightSurface: S.default.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
                            chatId: fu.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    },
                    text: (0, _.isGroupCallEnabled)() ? uu.fbt._("Messages and calls are end-to-end encrypted. Click to learn more.", null, {
                        hk: "1l9pwW"
                    }) : uu.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "2MtPh9"
                    })
                }), (0, i.isSupportGroup)(fu) && (_u = (0, lu.jsx)(G.default, {
                    onClick: function() {
                        F.ModalManager.open((0, lu.jsx)($.default, {
                            chat: fu,
                            chatId: fu.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    }
                }));
                var yu, Su = fu.mute.canMute() ? (0, lu.jsx)(C.default, {
                        chat: fu,
                        mute: fu.mute,
                        settings: A.default
                    }) : null,
                    ku = null;
                if (u.onStarred) {
                    var Pu = (0, lu.jsx)(b.TextSpan, {
                            theme: "title",
                            size: "16",
                            children: uu.fbt._("Starred messages", null, {
                                hk: "4wVbNG"
                            })
                        }),
                        Tu = (0, lu.jsx)(m.StarIcon, {
                            color: B.SvgColorProp.SECONDARY,
                            height: 20
                        });
                    ku = (0, lu.jsx)(z.ChatInfoDrawerSection, {
                        titleTestId: "section-starred-messages",
                        children: (0, lu.jsx)(U.default, {
                            testid: "block-starred-messages",
                            side: "chevron",
                            icon: Tu,
                            onClick: u.onStarred,
                            title: Pu
                        })
                    })
                }
                if ((0, V.isKeepInChatReadAndUIEnabled)() && (fu.hasKeptMsgs() || (0, a.isEphemeralSettingOn)(fu))) {
                    var wu = (0, lu.jsx)(b.TextSpan, {
                            theme: "title",
                            size: "16",
                            children: uu.fbt._("Kept Messages", null, {
                                hk: "41CBIy"
                            })
                        }),
                        Iu = Fu.restrict ? (0, lu.jsx)(b.TextDiv, {
                            theme: "muted",
                            children: uu.fbt._("Only admins can keep or unkeep messages in this group.", null, {
                                hk: "2Uhjiy"
                            })
                        }) : null,
                        Nu = (0, lu.jsx)(c.KeepInChatIcon, {
                            color: B.SvgColorProp.SECONDARY,
                            height: 20
                        });
                    yu = (0, lu.jsx)(z.ChatInfoDrawerSection, {
                        titleTestId: "section-kept-messages",
                        xstyle: su.lastSectionRow,
                        children: (0, lu.jsx)(U.default, {
                            testid: "block-kept-messages",
                            side: "chevron",
                            icon: Nu,
                            onClick: u.onKept,
                            title: wu,
                            secondaryTitle: Iu
                        })
                    })
                }
                var Ru = (0, p.isReactionsEnabledInCAG)(fu) ? (0, lu.jsx)(Y.PhoneNumberVisibilityIndicatorCag, {
                        chat: fu
                    }) : null,
                    Ou = null;
                (Su || _u || bu) && (Ou = (0, lu.jsxs)(z.ChatInfoDrawerSection, {
                    xstyle: su.lastSectionRow,
                    children: [Su, bu, _u, mu, Ru]
                }));
                var Lu = (0, lu.jsx)(I.default, {
                        chat: (0, v.unproxy)(fu)
                    }),
                    Gu = (0, o.hideCagMaskedParticipants)(fu) ? (0, lu.jsx)(Z.default, {
                        theme: "transparent",
                        shadow: !1,
                        children: (0, lu.jsx)(b.TextParagraph, {
                            xstyle: su.announcementGroupDisclaimer,
                            color: "secondary",
                            children: uu.fbt._("Only admins can see all participants in this group", null, {
                                hk: "39jP44"
                            })
                        })
                    }) : null;
                return (0, lu.jsxs)(W.default, {
                    ref: e,
                    theme: "striped",
                    testid: "chat-info-drawer",
                    children: [(0, lu.jsx)(X.DrawerHeader, {
                        title: uu.fbt._("Group info", null, {
                            hk: "2SfTUZ"
                        }),
                        type: X.DRAWER_HEADER_TYPE.SMALL,
                        rtlFixIfOnDarwin: !0,
                        onCancel: function() {
                            n ? n() : null == cu || cu.requestDismiss()
                        },
                        testid: "group-info-header"
                    }), (0, lu.jsx)(K.default, {
                        flatListControllers: [hu.current, pu.current],
                        children: (0, lu.jsxs)("section", {
                            className: (0, tu.default)(su.body),
                            "data-testid": "group-info-drawer-body",
                            children: [(0, lu.jsx)(O.default, {
                                chat: (0, v.unproxy)(fu),
                                onAdminSetting: u.onAdminSetting,
                                onAddParticipant: vu,
                                onClickParticpantsCount: function() {
                                    var u;
                                    null === (u = Au.current) || void 0 === u || u.scrollIntoView()
                                }
                            }), ju, (0, lu.jsx)(w.default, {
                                chat: (0, v.unproxy)(fu),
                                showFullDescription: u.showFullGroupDescription
                            }), Bu, ku, yu, Ou, undefined, (0, lu.jsx)(T.default, {
                                groupMetadata: Fu
                            }), (0, lu.jsx)(N.GroupInfoParticipantsSection, {
                                ref: Au,
                                chat: (0, v.unproxy)(fu),
                                scrollToParticipantList: u.scrollToParticipantList,
                                flatListController: pu.current,
                                onAddParticipant: vu,
                                onOpenParticpantSearch: function(u) {
                                    F.ModalManager.open((0, lu.jsx)(L.GroupParticipantsFlow, {
                                        chat: (0, v.unproxy)(fu),
                                        onVerification: t,
                                        initialStep: u
                                    }), {
                                        transition: "modal-flow"
                                    })
                                },
                                onGroupInviteLink: u.onGroupInviteLink,
                                onPendingParticipants: u.onPendingParticipants,
                                onVerification: u.onVerification
                            }), Gu, (0, lu.jsx)(R.default, {
                                chat: (0, v.unproxy)(fu),
                                flatListController: hu.current
                            }), Lu]
                        })
                    })]
                }, "contact-info-modal")
            }
            var du = (0, eu.forwardRef)(cu);
            e.default = du
        },
        646103: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t = u.chat,
                    n = null !== (e = (0, B.useOptionalModelValues)(t.groupMetadata, ["parentGroup", "participants"])) && void 0 !== e ? e : {},
                    a = n.participants,
                    i = n.parentGroup,
                    r = (null == a ? void 0 : a.iAmAdmin()) && (0, o.isCommunityAnnouncementGroup)(t),
                    l = (0, j.jsx)(_, {
                        chat: t
                    }),
                    s = (0, o.isTerminatedGroup)(t) ? null : (0, j.jsx)(M, {
                        chat: t,
                        showAdditionalAction: !r
                    }),
                    D = !(0, d.communitiesEnabled)() || (0, o.isCommunityAnnouncementGroup)(t) || null == i ? null : (0, j.jsx)(y, {
                        chat: t,
                        parentGroup: i
                    });
                return (0, j.jsxs)(h.ChatInfoDrawerButtonsSection, {
                    children: [D, l, s]
                })
            };
            var a = n(t(963038)),
                i = t(519509),
                o = t(633757),
                r = t(896674),
                l = t(584973),
                s = t(517247),
                D = n(t(303321)),
                c = n(t(758927)),
                d = t(518005),
                f = t(628707),
                F = t(219867),
                C = t(233565),
                E = t(949059),
                p = n(t(452639)),
                h = t(817071),
                A = t(455316),
                m = n(t(706903)),
                v = t(548360),
                g = t(667294),
                x = n(t(554327)),
                B = t(948752),
                b = n(t(788413)),
                j = t(785893);

            function M(u) {
                var e = u.chat,
                    t = u.showAdditionalAction;
                return (0, j.jsx)(A.DrawerButton, {
                    testid: "li-report-spam",
                    color: "danger",
                    icon: (0, j.jsx)(E.ThumbsDownIcon, {}),
                    theme: "chat-info",
                    onClick: function() {
                        f.ModalManager.open((0, j.jsx)(m.default, {
                            isMessage: !1,
                            isGroupChat: !0,
                            showAdditionalActionCheckbox: t,
                            onReport: function() {
                                (0, F.sendReport)({
                                    chat: e,
                                    spamFlow: C.SpamFlow.GroupInfoReport
                                }), f.ModalManager.close()
                            },
                            onReportExitClear: function() {
                                (0, F.sendSpamExitClear)(e, C.SpamFlow.GroupInfoReport), f.ModalManager.close()
                            },
                            onCancel: function() {
                                return f.ModalManager.close()
                            }
                        }))
                    },
                    children: v.fbt._("Report group", null, {
                        hk: "23NLqw"
                    })
                })
            }

            function _(u) {
                var e = (0, B.useModelValues)(u.chat, ["isReadOnly"]);
                return (0, j.jsx)(A.DrawerButton, {
                    testid: "li-delete-group",
                    icon: (0, j.jsx)(s.ExitIcon, {
                        directional: !0
                    }),
                    color: "danger",
                    theme: "chat-info",
                    onClick: function() {
                        r.Cmd.deleteOrExitChat(u.chat)
                    },
                    children: e.isReadOnly ? c.default.t(691) : v.fbt._("Exit group", null, {
                        hk: "4BkPNr"
                    })
                })
            }

            function y(u) {
                var e = u.chat,
                    t = u.parentGroup,
                    n = (0, b.default)(),
                    o = (0, B.useModelValues)(e, ["groupMetadata", "isReadOnly", "id", "formattedTitle"]),
                    r = o.groupMetadata,
                    c = o.isReadOnly,
                    d = o.id,
                    f = o.formattedTitle,
                    F = D.default.get(t.toString()),
                    C = Boolean((0, x.default)(null == F ? void 0 : F.participants, ["bulk_add", "bulk_remove"], (function() {
                        return null == F ? void 0 : F.participants.iAmAdmin()
                    }))),
                    E = Boolean((0, x.default)(null == r ? void 0 : r.participants, ["bulk_add", "bulk_remove"], (function() {
                        return null == r ? void 0 : r.participants.iAmAdmin()
                    }))),
                    h = (0, p.default)(F),
                    m = h.joinedSubgroups,
                    M = h.unjoinedSubgroups,
                    _ = h.subgroupCount,
                    y = (0, g.useState)(!1),
                    S = (0, a.default)(y, 2),
                    k = S[0],
                    P = S[1];
                if (c || null == m || null == M || !C && (!E || !(0, i.getABPropConfigValue)("allow_subgroup_admin_to_unlink"))) return null;
                return (0, j.jsx)(A.DrawerButton, {
                    testid: "li-remove-group-from-community",
                    icon: (0, j.jsx)(s.ExitIcon, {
                        directional: !0
                    }),
                    disabled: k,
                    color: "danger",
                    theme: "chat-info",
                    onClick: function() {
                        k || n.aborted || ((0, l.handleRemoveGroup)({
                            parentId: t,
                            currentSubgroupCount: _,
                            removedSubgroupWid: d,
                            removedSubgroupTitle: f,
                            setLoading: P,
                            iAmCommunityAdmin: C
                        }), n.aborted)
                    },
                    children: v.fbt._("Remove from community", null, {
                        hk: "3xZmj5"
                    })
                })
            }
        },
        89405: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.GroupInfoParticipantsSection = void 0;
            var a = n(t(963038)),
                i = n(t(347999)),
                o = t(281098),
                r = t(519509),
                l = t(109677),
                s = t(894995),
                D = n(t(799328)),
                c = t(633757),
                d = t(665912),
                f = t(896674),
                F = t(665122),
                C = t(515918),
                E = t(247211),
                p = t(116384),
                h = t(633645),
                A = t(990055),
                m = t(820970),
                v = t(577407),
                g = t(894286),
                x = n(t(758927)),
                B = t(384616),
                b = t(680294),
                j = t(628707),
                M = t(808618),
                _ = t(194056),
                y = t(793812),
                S = t(486222),
                k = n(t(454812)),
                P = t(636979),
                T = t(401304),
                w = t(136058),
                I = t(776097),
                N = n(t(728056)),
                R = t(228277),
                O = n(t(560911)),
                L = t(946899),
                G = t(140598),
                V = n(t(90261)),
                H = t(817071),
                U = n(t(571170)),
                z = t(404186),
                q = t(548360),
                Y = t(667294),
                W = (n(t(156720)), n(t(554327))),
                K = n(t(802418)),
                X = t(779740),
                Z = t(948752),
                $ = t(785893),
                Q = {
                    pendingParticipantsIcon: {
                        backgroundColor: "k6px2m13",
                        color: "cwwc04gk"
                    }
                };

            function J(u) {
                var e = u.data,
                    t = u.participants,
                    n = u.handleParticipantClick,
                    a = u.menuEnabled,
                    i = u.handleParticipantMenu,
                    o = u.contextMenu,
                    r = u.elevatedPushNamesEnabled,
                    l = void 0 !== r && r,
                    s = e.id,
                    D = t.get(s);
                if (!D) throw new v.UnknownDataError(e);
                var c = D.contact,
                    d = !!o && O.default.equals(c.id, o.contactId);
                return (0, $.jsx)(V.default, {
                    contact: c,
                    participant: D,
                    onClick: n,
                    contextEnabled: function() {
                        return a(c)
                    },
                    contextMenu: d,
                    onContext: function(u) {
                        return i(u, c)
                    },
                    theme: "chat-info",
                    showNotifyName: !0,
                    waitIdle: !0,
                    showStatusRingAroundProfilePhoto: !0,
                    participantCollection: t,
                    elevatedPushNamesEnabled: l
                }, D.id.toString())
            }
            var uu = (0, Y.forwardRef)((function(u, e) {
                var t, n, O, V = (0, Z.useModelValues)((0, i.default)(u.chat.groupMetadata, "props.chat.groupMetadata"), ["support", "size", "id", "membershipApprovalMode", "membershipApprovalRequests"]),
                    uu = V.membershipApprovalMode,
                    tu = V.membershipApprovalRequests,
                    nu = (0, i.default)(null === (t = u.chat.groupMetadata) || void 0 === t ? void 0 : t.participants, "props.chat.groupMetadata?.participants"),
                    au = nu.toArray();
                (0, F.hideCagMaskedParticipants)(u.chat) && (au = nu.filter((function(u) {
                    var e = u.id;
                    return (0, R.isMeAccount)(e) || !e.isLid()
                })));
                var iu = null !== (n = null == V ? void 0 : V.size) && void 0 !== n ? n : 0,
                    ou = (null == nu ? void 0 : nu.iAmAdmin()) ? nu.length : iu,
                    ru = (0, K.default)();
                (0, X.useListener)(nu, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", ru);
                var lu = (0, Y.useState)(!0),
                    su = (0, a.default)(lu, 2),
                    Du = su[0],
                    cu = su[1],
                    du = (0, Y.useRef)(),
                    fu = (0, Y.useState)(),
                    Fu = (0, a.default)(fu, 2),
                    Cu = Fu[0],
                    Eu = Fu[1];
                (0, Y.useEffect)((function() {
                    u.scrollToParticipantList && du.current && (0, E.scrollIntoViewIfNeeded)(du.current, !1)
                }), [u.scrollToParticipantList]), (0, Y.useImperativeHandle)(e, (function() {
                    return {
                        scrollIntoView: function() {
                            var u;
                            null === (u = du.current) || void 0 === u || u.scrollIntoView()
                        }
                    }
                }));
                var pu = (0, W.default)(tu, ["add", "remove", "reset"], (function() {
                        return tu.length
                    })),
                    hu = (0, G.useShowPastParticipants)(u.chat);
                if (V.isSuspendedOrTerminated()) return null;
                var Au, mu, vu, gu, xu = (0, $.jsx)(P.SearchIcon, {
                    color: T.SvgColorProp.SECONDARY
                });
                if (nu.canAdd() && !V.support) {
                    var Bu = (0, $.jsx)(k.default, {
                        theme: "compact",
                        children: (0, $.jsx)(l.AddUserIcon, {
                            directional: !0
                        })
                    });
                    Au = (0, $.jsx)(D.default, {
                        image: Bu,
                        theme: "chat-info",
                        primary: q.fbt._("Add participant", null, {
                            hk: "48ECfz"
                        }),
                        onClick: u.onAddParticipant
                    })
                }
                if (nu.iAmAdmin() && u.onGroupInviteLink && !V.support) {
                    var bu = (0, $.jsx)(k.default, {
                        theme: "compact",
                        children: (0, $.jsx)(B.LinkIcon, {})
                    });
                    mu = (0, $.jsx)(D.default, {
                        image: bu,
                        theme: "chat-info",
                        primary: q.fbt._("Invite to group via link", null, {
                            hk: "3vDtFL"
                        }),
                        onClick: u.onGroupInviteLink
                    })
                }
                if (nu.iAmAdmin() && uu && pu > 0 && (0, r.getABPropConfigValue)("group_join_request_m2") && (vu = (0, $.jsx)(D.default, {
                        image: (0, $.jsx)(k.default, {
                            xstyle: Q.pendingParticipantsIcon,
                            theme: "compact",
                            children: (0, $.jsx)(S.PendingParticipantsIcon, {})
                        }),
                        theme: "chat-info",
                        primary: q.fbt._("Pending participants", null, {
                            hk: "3aWcdI"
                        }),
                        primaryDetail: (0, $.jsx)(w.Tag, {
                            round: !0,
                            children: pu
                        }),
                        onClick: u.onPendingParticipants
                    })), eu(au) && Du) {
                    var ju = au.length <= 20,
                        Mu = au.length - H.INFO_DRAWER_MAX_ROWS;
                    gu = (0, $.jsx)(U.default, {
                        numMore: Mu,
                        onClick: function() {
                            ju ? cu(!1) : u.onOpenParticpantSearch(L.ParticipantsFlowStep.Participants)
                        },
                        viewAll: !ju
                    })
                } else hu && (gu = (0, $.jsx)(b.ListButton, {
                    onClick: function() {
                        u.onOpenParticpantSearch(L.ParticipantsFlowStep.PastParticipants)
                    },
                    testid: "row-past-participants",
                    children: q.fbt._("View past participants", null, {
                        hk: "fYGd4"
                    })
                }));
                var _u, yu = function(u) {
                        var e = nu.get(u.id);
                        return !!e && (nu.canPromote(e) || nu.canDemote(e) || nu.canRemove(e) || nu.canVerifyIdentity(e))
                    },
                    Su = function(e, t) {
                        var n = nu.assertGet(t.id);
                        if (yu(t)) {
                            var a = [],
                                i = (0, c.isCommunityAnnouncementGroup)(u.chat);
                            if (nu.canPromote(n)) {
                                var o;
                                if (i) {
                                    var r;
                                    o = q.fbt._("Make admin", null, {
                                        hk: "1cHVQ6"
                                    });
                                    var l = null === (r = u.chat.groupMetadata) || void 0 === r ? void 0 : r.getParentGroupChat();
                                    a.push((0, $.jsx)(p.DropdownItem, {
                                        testid: "mi-grp-promote-community-admin",
                                        action: function() {
                                            (0, y.openCommunityParticipantPromoteConfirmation)(l, n, nu, n.contact)
                                        },
                                        children: o
                                    }, "promote"))
                                } else o = q.fbt._("Make group admin", null, {
                                    hk: "oCC4C"
                                }), a.push((0, $.jsx)(p.DropdownItem, {
                                    testid: "mi-grp-promote-admin",
                                    action: function() {
                                        var e = x.default.t(198, {
                                            participant: n.contact.formattedName,
                                            subject: u.chat.contact.name
                                        });
                                        j.ModalManager.open((0, $.jsx)(z.ConfirmPopup, {
                                            onOK: function() {
                                                return e = !0, n.isAdmin || (n.contact.pendingAction++, (0, M.promoteParticipants)(u.chat, [n]).finally((function() {
                                                    n.contact.pendingAction--
                                                }))), void(e && j.ModalManager.close());
                                                var e
                                            },
                                            okText: x.default.t(423),
                                            onCancel: function() {
                                                return j.ModalManager.close()
                                            },
                                            cancelText: q.fbt._("Cancel", null, {
                                                hk: "H0gNq"
                                            }),
                                            children: (0, $.jsx)(A.EmojiText, {
                                                text: e
                                            })
                                        }))
                                    },
                                    children: o
                                }, "promote"))
                            }
                            if (nu.canRemove(n)) {
                                var s = x.default.t(427);
                                a.push((0, $.jsx)(p.DropdownItem, {
                                    testid: "mi-grp-remove-participant",
                                    action: function() {
                                        var e = x.default.t(199, {
                                            participant: n.contact.formattedName,
                                            subject: u.chat.contact.name
                                        });
                                        j.ModalManager.open((0, $.jsx)(z.ConfirmPopup, {
                                            onOK: function() {
                                                return e = !0, n.contact.pendingAction++, (0, M.removeParticipants)(u.chat, [n]).finally((function() {
                                                    n.contact.pendingAction--
                                                })), void(e && j.ModalManager.close());
                                                var e
                                            },
                                            okText: x.default.t(531),
                                            onCancel: function() {
                                                return j.ModalManager.close()
                                            },
                                            cancelText: q.fbt._("Cancel", null, {
                                                hk: "H0gNq"
                                            }),
                                            children: (0, $.jsx)(A.EmojiText, {
                                                text: e
                                            })
                                        }))
                                    },
                                    children: s
                                }, "remove"))
                            }
                            if (nu.canDemote(n)) {
                                var D = q.fbt._("Dismiss as admin", null, {
                                    hk: "2YfmwL"
                                });
                                if (i) {
                                    var d, f = null === (d = u.chat.groupMetadata) || void 0 === d ? void 0 : d.getParentGroupChat();
                                    a.push((0, $.jsx)(p.DropdownItem, {
                                        testid: "mi-grp-community-demote",
                                        action: function() {
                                            return (0, _.openCommunityParticipantDemoteConfirmation)(n, f)
                                        },
                                        children: D
                                    }, "demote-admin"))
                                } else a.push((0, $.jsx)(p.DropdownItem, {
                                    testid: "mi-grp-demote",
                                    action: function() {
                                        n.isAdmin && (n.contact.pendingAction++, (0, M.demoteParticipants)(u.chat, [n]).then((function() {
                                            n.contact.pendingAction--
                                        })))
                                    },
                                    children: D
                                }, "demote-admin"))
                            }
                            if (nu.canVerifyIdentity(n)) {
                                var F = q.fbt._("Verify Security Code", null, {
                                    hk: "1vTVgt"
                                });
                                a.push((0, $.jsx)(p.DropdownItem, {
                                    testid: "mi-grp-verify-identify",
                                    action: function() {
                                        u.onVerification && u.onVerification(n.contact)
                                    },
                                    children: F
                                }, "verify-identity"))
                            }
                            Eu({
                                contactId: t.id,
                                menu: a,
                                anchor: e.anchor,
                                event: e.event
                            })
                        }
                    },
                    ku = function(u, e) {
                        (0, R.isMePrimary)(e.id) || (0, m.findChat)(e.id).then((function(u) {
                            f.Cmd.openChatFromUnread(u).then((function(e) {
                                e && ((0, s.btmThreadsLoggingEnabled)() && C.ComposeBoxActions.addMsgSendingLogAttributes(u, {
                                    handleMultiple: function() {
                                        (0, d.handleActivitiesForChatThreadLogging)([{
                                            activityType: "groupMembershipReplies",
                                            ts: (0, o.unixTime)(),
                                            chatId: u.id
                                        }])
                                    }
                                }), C.ComposeBoxActions.focus(u))
                            }))
                        }))
                    },
                    Pu = (0, h.elevatedPushNamesM2Enabled)(u.chat),
                    Tu = nu.length ? (0, $.jsxs)(H.ChatInfoDrawerListSection, {
                        ref: du,
                        titleTestId: "section-participants",
                        testid: "group-info-participants-section",
                        title: q.fbt._({
                            "*": "{number} participants",
                            _1: "1 participant"
                        }, [q.fbt._plural((null === (O = u.chat.groupMetadata) || void 0 === O ? void 0 : O.groupType) === g.GroupType.DEFAULT_ANNOUNCEMENT_GROUP ? ou : nu.length, "number")], {
                            hk: "bcYCT"
                        }),
                        titleOnClick: function() {
                            u.onOpenParticpantSearch(L.ParticipantsFlowStep.Participants)
                        },
                        subtitle: xu,
                        children: [Au, mu, vu, (0, $.jsx)(v.FlatList, {
                            flatListController: u.flatListController,
                            direction: "vertical",
                            forceConsistentRenderCount: !1,
                            data: function() {
                                var u, e = [],
                                    t = [];
                                au.forEach((function(n) {
                                    n.contact.isMe ? u = n : n.isAdmin ? e.push(n) : t.push(n)
                                }));
                                var n = [];
                                return u && n.push(u), n = n.concat(e, t), eu(au) && Du && (n = n.slice(0, H.INFO_DRAWER_MAX_ROWS)), n.map((function(u) {
                                    return {
                                        itemKey: u.id.toString(),
                                        id: u.id,
                                        height: 68
                                    }
                                }))
                            }(),
                            renderItem: function(u) {
                                return (0, $.jsx)(J, {
                                    data: u,
                                    participants: nu,
                                    handleParticipantClick: ku,
                                    menuEnabled: yu,
                                    handleParticipantMenu: Su,
                                    contextMenu: Cu,
                                    elevatedPushNamesEnabled: Pu
                                })
                            }
                        }), gu]
                    }) : null;
                return Cu && (_u = (0, $.jsx)(I.UIE, {
                    displayName: "ChatContextMenu",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: function() {
                        Eu(null)
                    },
                    children: (0, $.jsx)(N.default, {
                        contextMenu: Cu
                    })
                })), (0, $.jsxs)($.Fragment, {
                    children: [Tu, _u]
                })
            }));

            function eu(u) {
                return u.length > H.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
            }
            e.GroupInfoParticipantsSection = uu, uu.displayName = "GroupInfoParticipantsSection"
        },
        681834: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t, n = (0, i.default)(u.chat.groupMetadata, "props.chat.groupMetadata"),
                    b = (0, i.default)(null === (e = u.chat.groupMetadata) || void 0 === e ? void 0 : e.participants, "props.chat.groupMetadata?.participants"),
                    j = (0, i.default)(null === (t = u.chat.groupMetadata) || void 0 === t ? void 0 : t.pendingParticipants, "props.chat.groupMetadata?.pendingParticipants"),
                    M = (0, v.default)();
                (0, g.useListener)(b, "change:isAdmin change:isSuperAdmin", M), (0, g.useListener)(j, "add remove reset", M);
                var _ = (0, m.useState)(B(j)),
                    y = (0, a.default)(_, 2),
                    S = y[0],
                    k = y[1],
                    P = (0, m.useState)(),
                    T = (0, a.default)(P, 2),
                    w = T[0],
                    I = T[1];
                if ((0, m.useEffect)((function() {
                        n.queryGroupsV4PendingInvite().then((function() {
                            k(B(n.pendingParticipants))
                        }))
                    }), [n]), n.isSuspendedOrTerminated()) return (0, x.jsx)(x.Fragment, {});
                var N, R, O;
                j.length > 0 && (N = (0, x.jsx)(l.FlatList, {
                    flatListController: u.flatListController,
                    direction: "vertical",
                    forceConsistentRenderCount: !1,
                    data: (L = j.toArray(), B(j) && S && (L = L.slice(0, E.INFO_DRAWER_MAX_ROWS)), L.map((function(u) {
                        return {
                            itemKey: u.id.toString(),
                            id: u.id,
                            height: 68
                        }
                    }))),
                    renderItem: function(u) {
                        var e = u.id,
                            t = j.get(e);
                        if (!t) throw new l.UnknownDataError(u);
                        var a = t.contact;
                        return (0, x.jsx)(C.default, {
                            contact: a,
                            participant: t,
                            contextEnabled: function() {
                                return !0
                            },
                            contextMenu: !0,
                            onContext: function(u) {
                                return e = u, i = [(0, x.jsx)(o.DropdownItem, {
                                    testid: "mi-grp-promote-admin",
                                    action: function() {
                                        D.ModalManager.open((0, x.jsx)(h.ConfirmPopup, {
                                            onOK: function() {
                                                D.ModalManager.close(), n.revokeGroupsV4AddInvite([t.id]).then((function() {
                                                    d.ToastManager.open((0, x.jsx)(c.Toast, {
                                                        msg: A.fbt._("Invite reset", null, {
                                                            hk: "MgErr"
                                                        })
                                                    }))
                                                }))
                                            },
                                            okText: A.fbt._("Reset link", null, {
                                                hk: "2Zb3R4"
                                            }),
                                            onCancel: function() {
                                                return D.ModalManager.close()
                                            },
                                            cancelText: A.fbt._("Cancel", null, {
                                                hk: "H0gNq"
                                            }),
                                            children: (0, x.jsx)(r.EmojiText, {
                                                text: s.default.t(359, {
                                                    participant: t.contact.formattedName
                                                })
                                            })
                                        }))
                                    },
                                    children: A.fbt._("Revoke invite", null, {
                                        hk: "4on28q"
                                    })
                                }, "promote")], void I({
                                    contactId: a.id,
                                    menu: i,
                                    anchor: e.anchor,
                                    event: e.event
                                });
                                var e, i
                            },
                            theme: "chat-info",
                            showNotifyName: !0,
                            isPendingParticipant: !0,
                            waitIdle: !0,
                            showStatusRingAroundProfilePhoto: !0
                        }, t.id.toString())
                    }
                }));
                var L;
                if (B(j) && S) {
                    var G = j.length - E.INFO_DRAWER_MAX_ROWS;
                    R = (0, x.jsx)(p.default, {
                        numMore: G,
                        onClick: function() {
                            k(!1)
                        }
                    })
                }
                b.iAmAdmin() && j.length > 0 && (O = (0, x.jsxs)(E.ChatInfoDrawerListSection, {
                    titleTestId: "section-participants",
                    title: s.default.t(357, {
                        number: j.length
                    }),
                    children: [N, R]
                }));
                var V;
                w && (V = (0, x.jsx)(f.UIE, {
                    displayName: "ChatContextMenu",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: function() {
                        I(null)
                    },
                    children: (0, x.jsx)(F.default, {
                        contextMenu: w
                    })
                }));
                return (0, x.jsxs)(x.Fragment, {
                    children: [O, V]
                })
            };
            var a = n(t(963038)),
                i = n(t(347999)),
                o = t(116384),
                r = t(990055),
                l = t(577407),
                s = n(t(758927)),
                D = t(628707),
                c = t(236539),
                d = t(422210),
                f = t(776097),
                F = n(t(728056)),
                C = n(t(90261)),
                E = t(817071),
                p = n(t(571170)),
                h = t(404186),
                A = t(548360),
                m = t(667294),
                v = n(t(802418)),
                g = t(779740),
                x = t(785893);

            function B(u) {
                return u.length > E.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
            }
        },
        30030: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t, n, a, i = (0, R.useModelValues)(u.chat, ["labels"]),
                    o = (0, R.useOptionalModelValues)(u.chat.groupMetadata, ["size", "creation"]),
                    r = null === (e = u.chat.groupMetadata) || void 0 === e ? void 0 : e.groupType,
                    l = null === (t = u.chat.groupMetadata) || void 0 === t ? void 0 : t.participants,
                    s = (0, I.default)();
                (0, N.useListener)(l, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", s);
                var D = null !== (n = null == l ? void 0 : l.length) && void 0 !== n ? n : 0,
                    c = null !== (a = null == o ? void 0 : o.size) && void 0 !== a ? a : 0,
                    p = (null == l ? void 0 : l.iAmAdmin()) ? D : c,
                    h = r === F.GroupType.DEFAULT_ANNOUNCEMENT_GROUP ? P.fbt._("Announcement group", null, {
                        hk: "80s42"
                    }) : P.fbt._("Group", null, {
                        hk: "DNiv2"
                    }),
                    A = P.fbt._({
                        "*": "{number} participants",
                        _1: "1 participant"
                    }, [P.fbt._plural(r === F.GroupType.DEFAULT_ANNOUNCEMENT_GROUP ? p : D, "number")], {
                        hk: "bcYCT"
                    });
                return (0, L.jsx)(k.default, {
                    theme: "padding-large",
                    children: (0, L.jsxs)(f.FlexColumn, {
                        align: "center",
                        children: [(0, L.jsx)(H, {
                            chat: u.chat,
                            xstyle: V.photo,
                            sendGroupProfilePictureLoggingEvent: function(e, t, n) {
                                var a, i, o, r = null === (a = u.chat) || void 0 === a || null === (i = a.groupMetadata) || void 0 === i ? void 0 : i.creation,
                                    s = new Date(1e3 * (null != r ? r : 0)),
                                    D = new Intl.DateTimeFormat("en", {
                                        year: "numeric"
                                    }).format(s),
                                    c = new Intl.DateTimeFormat("en", {
                                        month: "2-digit"
                                    }).format(s),
                                    d = new Intl.DateTimeFormat("en", {
                                        day: "2-digit"
                                    }).format(s),
                                    f = null != r ? `${D}-${c}-${d}` : "",
                                    F = (0, _.numberToPreciseSizeBucket)(p),
                                    C = null !== (o = null == l ? void 0 : l.iAmAdmin()) && void 0 !== o && o;
                                new M.default.GroupProfilePicture({
                                    groupCreationDs: f,
                                    groupProfileAction: e,
                                    preciseGroupSizeBucket: F,
                                    isAdmin: C,
                                    hasProfilePicture: t,
                                    profilePictureType: n
                                }).commit()
                            }
                        }), (0, L.jsx)(z, {
                            chat: u.chat
                        }), (0, L.jsx)("div", {
                            "data-testid": "group-info-top-card-subtitle",
                            className: (0, w.default)(V.groupSecondary),
                            children: (0, L.jsx)(d.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, L.jsxs)(b.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: [h, (null == o ? void 0 : o.isSuspendedOrTerminated()) ? null : (0, L.jsxs)(L.Fragment, {
                                        children: [C.default.isRTL() ? " - " : " · ", (0, L.jsx)(j.default, {
                                            onClick: u.onClickParticpantsCount,
                                            children: A
                                        })]
                                    })]
                                })
                            })
                        }), (0, L.jsx)(E.default, {
                            labels: i.labels
                        })]
                    })
                })
            };
            var a = n(t(887757)),
                i = n(t(348926)),
                o = n(t(963038)),
                r = t(497384),
                l = t(63520),
                s = n(t(347999)),
                D = n(t(704205)),
                c = t(633757),
                d = t(160967),
                f = t(208188),
                F = t(894286),
                C = n(t(758927)),
                E = n(t(628580)),
                p = function(u, e) {
                    if (!e && u && u.__esModule) return u;
                    if (null === u || "object" != typeof u && "function" != typeof u) return {
                        default: u
                    };
                    var t = G(e);
                    if (t && t.has(u)) return t.get(u);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in u)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(u, i)) {
                            var o = a ? Object.getOwnPropertyDescriptor(u, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = u[i]
                        } n.default = u, t && t.set(u, n);
                    return n
                }(t(576498)),
                h = t(518005),
                A = t(628707),
                m = t(246009),
                v = t(639017),
                g = n(t(295850)),
                x = t(611679),
                B = t(987588),
                b = t(558288),
                j = n(t(83938)),
                M = n(t(229677)),
                _ = t(874818),
                y = n(t(354827)),
                S = t(404186),
                k = n(t(849788)),
                P = t(548360),
                T = t(667294),
                w = n(t(156720)),
                I = n(t(802418)),
                N = t(779740),
                R = t(948752),
                O = n(t(788413)),
                L = t(785893);

            function G(u) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    t = new WeakMap;
                return (G = function(u) {
                    return u ? t : e
                })(u)
            }
            var V = {
                photo: {
                    marginBottom: "njub1g37"
                },
                groupSecondary: {
                    lineHeight: "a4ywakfo",
                    marginTop: "ma4rpf0l",
                    textAlign: "qfejxiq4"
                }
            };

            function H(u) {
                var e = (0, R.useModelValues)(u.chat, ["isReadOnly"]),
                    t = (0, R.useModelValues)(u.chat.contact, ["id", "profilePicThumb"]),
                    n = (0, R.useModelValues)(u.chat.contact.profilePicThumb, ["imgFull"]),
                    a = (0, R.useModelValues)((0, s.default)(u.chat.groupMetadata, "props.chat.groupMetadata"), ["groupType"]),
                    i = (0, T.useState)(!1),
                    d = (0, o.default)(i, 2),
                    f = d[0],
                    C = d[1],
                    E = (0, T.useState)(!1),
                    A = (0, o.default)(E, 2),
                    m = A[0],
                    B = A[1],
                    b = (0, O.default)(),
                    j = a.groupType === F.GroupType.DEFAULT_ANNOUNCEMENT_GROUP,
                    M = (0, h.communitiesEnabled)() && j ? g.default.DEFAULT_ANNOUNCEMENT_GROUP : g.default.GROUP,
                    _ = e.isReadOnly || !n.canDelete() && !n.canSet() || (0, c.isSupportGroup)(e) || j || a.isSuspendedOrTerminated();
                return (0, L.jsx)("div", {
                    className: (0, w.default)(u.xstyle),
                    children: (0, L.jsx)(v.PhotoPickerLoadable, {
                        type: M,
                        id: t.id,
                        attachToChat: !0,
                        pending: m,
                        startImage: n.imgFull,
                        readOnly: _,
                        onImageSet: function(u, e) {
                            var t;
                            B(!0), t = u && e ? (0, x.setProfilePic)(n, u, e) : (0, x.deleteProfilePic)(n), (0, D.default)(t, b).catch((0, r.catchAbort)((function() {}))).catch((0, l.filteredCatch)(p.ActionError, (function() {
                                __LOG__(3)`GroupInfoDrawer: failed to set/delete group image`, C(!f)
                            }))).finally((function() {
                                B(!1)
                            }))
                        },
                        sendGroupProfilePictureLoggingEvent: u.sendGroupProfilePictureLoggingEvent
                    }, String(f))
                })
            }
            var U = {
                marginTop: "hymafltn",
                marginEnd: "jnwc1y2a",
                marginBottom: "ngycyvoj",
                marginStart: "svoq16ka"
            };

            function z(u) {
                var e = (0, R.useModelValues)(u.chat.contact, ["name"]),
                    t = (0, R.useModelValues)((0, s.default)(u.chat.groupMetadata, "props.chat.groupMetadata"), ["creation", "restrict", "support"]),
                    n = (0, O.default)(),
                    o = function() {
                        var t = (0, i.default)(a.default.mark((function t(i) {
                            var o;
                            return a.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if ((o = i) !== e.name) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return t.next = 5, (0, D.default)((0, B.setGroupSubject)(u.chat, o), n).catch((0, r.catchAbort)((function() {}))).catch((function() {
                                            __LOG__(3)`group_info_drawer:onSetSubject failed`
                                        }));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                return t.support ? (0, L.jsx)(b.TextHeader, {
                    className: (0, w.default)(U),
                    level: "2",
                    theme: "large",
                    children: (0, L.jsx)(m.GroupName, {
                        chat: u.chat,
                        groupMetadata: t,
                        breakWord: !0
                    })
                }) : (0, L.jsx)(y.default, {
                    subject: e.name || u.chat.formattedTitle,
                    onSave: o,
                    editable: t.canSetSubject(),
                    editRestrictionInfo: t.restrict ? function() {
                        A.ModalManager.open((0, L.jsx)(S.ConfirmPopup, {
                            onOK: function() {
                                return A.ModalManager.close()
                            },
                            okText: P.fbt._("OK", null, {
                                hk: "2KEeHb"
                            }),
                            children: P.fbt._("Only admins can edit this group's info", null, {
                                hk: "1a2ztg"
                            })
                        }))
                    } : void 0
                })
            }
        },
        89877: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(963038)),
                i = n(t(347999)),
                o = t(633757),
                r = t(896674),
                l = t(665122),
                s = t(116384),
                D = t(633645),
                c = t(820970),
                d = n(t(758927)),
                f = t(628707),
                F = t(808618),
                C = t(246009),
                E = t(194056),
                p = t(793812),
                h = t(776097),
                A = n(t(728056)),
                m = t(228277),
                v = t(140598),
                g = n(t(432515)),
                x = t(548360),
                B = t(667294),
                b = n(t(554327)),
                j = n(t(802418)),
                M = t(779740),
                _ = t(785893);

            function y(u, e) {
                var t, n = u.chat,
                    r = u.onVerification,
                    c = u.onPastParticipants,
                    y = function(u, e) {
                        var t, n = (0, B.useState)(null),
                            r = (0, a.default)(n, 2),
                            l = r[0],
                            D = r[1],
                            c = function(e, t) {
                                e.isAdmin || (e.contact.pendingAction++, (0, F.promoteParticipants)(u, [e]).finally((function() {
                                    e.contact.pendingAction--
                                }))), t && f.ModalManager.close()
                            },
                            v = function(e, t) {
                                e.contact.pendingAction++, (0, F.removeParticipants)(u, [e]).finally((function() {
                                    e.contact.pendingAction--
                                })), t && f.ModalManager.close()
                            },
                            g = function(e) {
                                e.isAdmin && (e.contact.pendingAction++, (0, F.demoteParticipants)(u, [e]).then((function() {
                                    e.contact.pendingAction--
                                })))
                            },
                            b = function() {
                                D(null)
                            };
                        l && (t = (0, _.jsx)(h.UIE, {
                            displayName: "ChatContextMenu",
                            escapable: !0,
                            popable: !0,
                            dismissOnWindowResize: !0,
                            requestDismiss: b,
                            children: (0, _.jsx)(A.default, {
                                contextMenu: l
                            })
                        }));
                        return [t, function(t, n) {
                            var a, r = (0, i.default)(u.groupMetadata, "chat.groupMetadata").participants,
                                l = r.assertGet(n.id.toString()),
                                F = [],
                                h = (0, o.isCommunityAnnouncementGroup)(u);
                            if (r.canPromote(l))
                                if (h) {
                                    var A;
                                    a = x.fbt._("Make admin", null, {
                                        hk: "1cHVQ6"
                                    });
                                    var B = null === (A = u.groupMetadata) || void 0 === A ? void 0 : A.getParentGroupChat();
                                    F.push((0, _.jsx)(s.DropdownItem, {
                                        testid: "mi-grp-promote-community-admin",
                                        action: function() {
                                            (0, p.openCommunityParticipantPromoteConfirmation)(B, l, r, l.contact)
                                        },
                                        children: a
                                    }, "promote"))
                                } else a = d.default.t(423), F.push((0, _.jsx)(s.DropdownItem, {
                                    testid: "mi-grp-promote-admin",
                                    action: function() {
                                        return c(l, !1)
                                    },
                                    children: a
                                }, "promote"));
                            if (r.canRemove(l)) {
                                var b = d.default.t(427);
                                F.push((0, _.jsx)(s.DropdownItem, {
                                    testid: "mi-grp-remove-participant",
                                    action: function() {
                                        return v(l, !1)
                                    },
                                    children: b
                                }, "remove"))
                            }
                            if (r.canDemote(l)) {
                                var j = function() {
                                        return g(l)
                                    },
                                    M = x.fbt._("Dismiss as admin", null, {
                                        hk: "243sNl"
                                    });
                                if (h) {
                                    var y, k = null === (y = u.groupMetadata) || void 0 === y ? void 0 : y.getParentGroupChat();
                                    F.push((0, _.jsx)(s.DropdownItem, {
                                        testid: "mi-grp-community-demote",
                                        action: function() {
                                            return (0, E.openCommunityParticipantDemoteConfirmation)(l, k)
                                        },
                                        children: M
                                    }, "demote-admin"))
                                } else F.push((0, _.jsx)(s.DropdownItem, {
                                    testid: "mi-grp-demote",
                                    action: j,
                                    children: M
                                }, "demote-admin"))
                            }
                            if (r.canVerifyIdentity(l)) {
                                var P = x.fbt._("Verify Security Code", null, {
                                    hk: "1vTVgt"
                                });
                                F.push((0, _.jsx)(s.DropdownItem, {
                                    testid: "mi-grp-verify-identify",
                                    action: function() {
                                        f.ModalManager.close(), null == e || e(l.contact)
                                    },
                                    children: P
                                }, "verify-identity"))
                            }
                            if (!(0, m.isMeAccount)(l.id)) {
                                var T = x.fbt._("Message {author}", [x.fbt._param("author", (0, _.jsx)(C.Name, {
                                    contact: l.contact,
                                    useShortName: !0
                                }))], {
                                    hk: "1kM7Cg"
                                });
                                F.push((0, _.jsx)(s.DropdownItem, {
                                    action: S.bind(null, l.contact.id),
                                    children: T
                                }, "message author"))
                            }
                            D({
                                contactId: n.id,
                                menu: F,
                                anchor: t.anchor,
                                event: t.anchor ? void 0 : t
                            })
                        }]
                    }(n, r),
                    k = (0, a.default)(y, 2),
                    P = k[0],
                    T = k[1],
                    w = (0, j.default)(),
                    I = null === (t = n.groupMetadata) || void 0 === t ? void 0 : t.participants;
                (0, M.useListener)(I, ["bulk_add", "bulk_remove", "reset"], w);
                var N, R = (0, v.useShowPastParticipants)(n),
                    O = (0, b.default)(I, ["change:isAdmin"], (function() {
                        return (0, l.hideCagMaskedParticipants)(n)
                    })),
                    L = null == I ? void 0 : I.map((function(u) {
                        return u.contact
                    }));
                return R && (N = {
                    text: x.fbt._("View past participants", null, {
                        hk: "fYGd4"
                    }),
                    onClick: c
                }), (0, _.jsxs)(_.Fragment, {
                    children: [(0, _.jsx)(g.default, {
                        ref: e,
                        title: x.fbt._("Search Participants", null, {
                            hk: "M6lxB"
                        }),
                        filter: function(u) {
                            var e = null == I ? void 0 : I.get(u.id.toString());
                            return null != e && (!O || ((0, m.isMeAccount)(e.id) || !e.id.isLid()))
                        },
                        onCancel: function() {
                            f.ModalManager.close()
                        },
                        openContextOnClick: !0,
                        contextEnabled: function() {
                            return !1
                        },
                        contextMenu: function(u) {
                            return !(0, m.isMeAccount)(u)
                        },
                        onContext: T,
                        showNotifyName: !0,
                        elevatedPushNamesEnabled: (0, D.elevatedPushNamesM2Enabled)(n),
                        listenForAdminChange: !0,
                        participantCollection: (0, i.default)(I, "participants"),
                        contacts: L,
                        button: N,
                        showStatusRingAroundProfilePhoto: !0
                    }), P]
                })
            }
            var S = function(u) {
                (0, c.findChat)(u).then((function(u) {
                    f.ModalManager.close(), r.Cmd.openChatFromUnread(u)
                }))
            };
            var k = (0, B.forwardRef)(y);
            e.default = k
        },
        946899: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.GroupParticipantsFlow = function(u) {
                var e, t = u.chat,
                    n = u.onVerification,
                    D = u.initialStep,
                    c = (0, r.useFlow)(D),
                    d = (0, a.default)(c, 2),
                    f = d[0],
                    F = d[1];
                if (!F.step) return null;
                switch (F.step) {
                    case s.Participants:
                        e = (0, l.jsx)(i.default, {
                            chat: t,
                            onVerification: n,
                            onPastParticipants: function() {
                                return F.push(s.PastParticipants)
                            }
                        });
                        break;
                    case s.PastParticipants:
                        var C = F.stackSize() > 1,
                            E = function() {
                                return F.pop()
                            };
                        e = C ? (0, l.jsx)(o.default, {
                            chat: t,
                            onBack: E
                        }) : (0, l.jsx)(o.default, {
                            chat: t,
                            onClose: E
                        })
                }
                return (0, l.jsx)(f, {
                    flow: F,
                    children: e
                })
            }, e.ParticipantsFlowStep = void 0;
            var a = n(t(963038)),
                i = n(t(89877)),
                o = n(t(674792)),
                r = t(780857),
                l = t(785893),
                s = t(76672).Mirrored(["Participants", "PastParticipants"]);
            e.ParticipantsFlowStep = s
        },
        674792: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(963038)),
                i = t(665122),
                o = t(633645),
                r = t(192070),
                l = t(212390),
                s = t(577407),
                D = t(208188),
                c = n(t(758927)),
                d = n(t(911260)),
                f = n(t(188971)),
                F = t(726984),
                C = t(228277),
                E = n(t(886194)),
                p = n(t(406777)),
                h = t(548360),
                A = t(667294),
                m = (n(t(156720)), n(t(409213))),
                v = n(t(554327)),
                g = t(785893),
                x = "HEADER",
                B = "ROW",
                b = "DISCLAIMER";

            function j(u, e) {
                var t, n = u.chat,
                    r = u.onBack,
                    l = u.onClose,
                    s = null === (t = n.groupMetadata) || void 0 === t ? void 0 : t.pastParticipants,
                    D = (0, m.default)(),
                    f = (0, a.default)(D, 2),
                    F = f[0],
                    E = f[1],
                    A = (0, v.default)(s, ["buld_add", "bulk_remove", "reset"], (function() {
                        var u, e = c.default.accentFold(F),
                            t = (0, d.default)(e),
                            a = null !== (u = null == s ? void 0 : s.getValidRecords().filter((function(u) {
                                var a = !e || u.contact.searchMatch(e, t);
                                return (0, i.hideCagMaskedParticipants)(n) ? ((0, C.isMeAccount)(u.id) || !u.id.isLid()) && a : a
                            }))) && void 0 !== u ? u : [];
                        if (!a.length) return [];
                        var o = [];
                        return o.push({
                            type: x,
                            header: h.fbt._("Past participants", null, {
                                hk: "2k91Dw"
                            }),
                            itemKey: "list_header"
                        }), a.forEach((function(u, e) {
                            return o.push({
                                type: B,
                                participant: u,
                                itemKey: `${u.id.toString()}_${e}`
                            })
                        })), o.push({
                            type: b
                        }), o
                    }), [F]);
                return (0, g.jsx)(p.default, {
                    ref: e,
                    title: h.fbt._("Search past participants", null, {
                        hk: "1d6pYh"
                    }),
                    data: A,
                    renderItem: function(u) {
                        return (0, g.jsx)(M, {
                            data: u,
                            elevatedPushNamesEnabled: (0, o.elevatedPushNamesM2Enabled)(n)
                        })
                    },
                    emptyState: (0, g.jsx)(S, {}),
                    onSearch: E,
                    searchPlaceholder: c.default.t(545),
                    onBack: r,
                    onCancel: l
                })
            }

            function M(u) {
                var e, t = u.data,
                    n = u.elevatedPushNamesEnabled;
                switch (t.type) {
                    case x:
                        return (0, g.jsx)(f.default, {
                            header: null !== (e = t.header) && void 0 !== e ? e : "",
                            uppercase: !1
                        });
                    case B:
                        return (0, g.jsx)(E.default, {
                            participant: t.participant,
                            elevatedPushNamesEnabled: n
                        });
                    case b:
                        return (0, g.jsx)(y, {});
                    default:
                        throw new s.UnknownDataError(t)
                }
            }
            var _ = {
                row: {
                    height: "graaj7av",
                    backgroundColor: "ihvf49ua"
                },
                disclaimer: {
                    fontSize: "f8jlpxt4",
                    color: "pm5hny62"
                },
                empty: {
                    fontSize: "enbbiyaj",
                    color: "eruf1vka"
                }
            };

            function y() {
                return (0, g.jsx)(D.FlexRow, {
                    xstyle: [_.row, _.disclaimer, F.uiPadding.horiz15],
                    align: "center",
                    justify: "center",
                    children: (0, g.jsx)("span", {
                        children: h.fbt._("People who left or were removed in the last 60 days. {=m2}", [h.fbt._implicitParam("=m2", (0, g.jsx)(r.ExternalLink, {
                            href: (0, l.getHowToExitAndDeleteGroupsFaq)(),
                            children: h.fbt._("Learn More", null, {
                                hk: "44tT41"
                            })
                        }))], {
                            hk: "gdXOy"
                        })
                    })
                })
            }

            function S() {
                return (0, g.jsxs)(g.Fragment, {
                    children: [(0, g.jsx)(f.default, {
                        header: h.fbt._("Past participants", null, {
                            hk: "2k91Dw"
                        }),
                        uppercase: !1
                    }), (0, g.jsx)(D.FlexRow, {
                        xstyle: [_.row, _.empty],
                        align: "center",
                        justify: "center",
                        children: (0, g.jsx)("span", {
                            children: h.fbt._("No results found", null, {
                                hk: "1Wo2fc"
                            })
                        })
                    }), (0, g.jsx)(y, {})]
                })
            }
            var k = (0, A.forwardRef)(j);
            e.default = k
        },
        886194: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.participant,
                    t = u.elevatedPushNamesEnabled,
                    n = (0, d.useModelValues)(e.contact, ["id", "showBusinessCheckmarkAsPrimary", "name", "notifyName", "formattedPhone"]),
                    F = (0, f.jsx)(s.Name, {
                        contact: n,
                        showBusinessCheckmark: n.showBusinessCheckmarkAsPrimary,
                        showLabel: !0,
                        titlify: !0,
                        ellipsify: !0,
                        you: !0,
                        showNotifyName: t,
                        elevatedPushNamesEnabled: t
                    }),
                    C = i.Clock.pastParticipantOnDateAtTime(e.leaveTs, function(u) {
                        var e = u.id.equals((0, D.getMeUser)());
                        if (u.leaveReason === l.LeaveReason.Left) return e ? c.fbt._("Left", null, {
                            hk: "3R2igg"
                        }) : c.fbt._("Left", null, {
                            hk: "3kbdqU"
                        });
                        return e ? c.fbt._("Removed", null, {
                            hk: "4vPnHl"
                        }) : c.fbt._("Removed", null, {
                            hk: "3LiTU6"
                        })
                    }(e)),
                    E = (0, r.elevatedPushNameCanBeUsed)(t, n.name, n.notifyName) ? n.formattedPhone : null;
                return (0, f.jsx)(a.default, {
                    image: (0, f.jsx)(o.DetailImage, {
                        id: n.id
                    }),
                    primary: F,
                    secondary: C,
                    secondaryDetail: E
                })
            };
            var a = n(t(799328)),
                i = t(87330),
                o = t(207826),
                r = t(633645),
                l = t(825910),
                s = t(246009),
                D = t(228277),
                c = t(548360),
                d = t(948752),
                f = t(785893)
        },
        594243: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.onClick,
                    t = (0, s.jsx)(o.TextSpan, {
                        theme: "title",
                        children: l.fbt._("Security", null, {
                            hk: "2BYJDI"
                        })
                    }),
                    n = (0, s.jsx)(o.TextDiv, {
                        theme: "muted",
                        children: l.fbt._("Click to learn how messages and calls are secured.", null, {
                            hk: "1UxhjE"
                        })
                    }),
                    D = (0, s.jsx)(a.LockIcon, {
                        color: i.SvgColorProp.SECONDARY,
                        height: 20
                    });
                return (0, s.jsx)(r.default, {
                    icon: D,
                    onClick: e,
                    title: t,
                    secondaryTitle: n
                })
            };
            var a = t(609318),
                i = t(401304),
                o = t(558288),
                r = n(t(603249)),
                l = t(548360),
                s = t(785893)
        },
        140598: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.useShowPastParticipants = function(u) {
                var e = (0, r.useOptionalModelValues)(u.groupMetadata, ["participants", "pastParticipants", "groupType"]),
                    t = null == e ? void 0 : e.pastParticipants,
                    n = (0, o.default)(t, ["bulk_add", "bulk_remove", "reset"], (function() {
                        return Boolean(null == t ? void 0 : t.getValidRecords().length)
                    }));
                if (!(0, i.pastParticipantsScreenEnabled)() || !n) return !1;
                if ((null == e ? void 0 : e.groupType) === a.GroupType.DEFAULT_ANNOUNCEMENT_GROUP) return Boolean(null == e ? void 0 : e.participants.iAmAdmin());
                return !0
            };
            var a = t(894286),
                i = t(69573),
                o = n(t(554327)),
                r = t(948752)
        },
        900984: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.PhoneNumberVisibilityIndicator1On1 = function(u) {
                var e = !0 === u.chat.contact.shareOwnPn;
                return (0, C.jsx)(E, {
                    phoneNumberIsShared: e,
                    handleClick: function() {
                        e ? o.ModalManager.open((0, C.jsx)(f.PostSharePhoneNumberModal, {
                            entryPoint: D.default.PNH_ENTRY_POINT_TYPE.CHAT_INFO_PN_VISIBILITY
                        })) : ((0, d.logPnhRequestRevealActionHelper)(D.default.PNH_CHAT_TYPE_TYPE.CTWA, D.default.PNH_MESSAGE_CHAT_PARTY.CONSUMER, D.default.PNH_ACTION_TYPE.SHARE_PN_SHEET_APPEAR, D.default.PNH_ENTRY_POINT_TYPE.CHAT_INFO_PN_VISIBILITY), o.ModalManager.open((0, C.jsx)(f.SharePhoneNumberModal, {
                            entryPoint: D.default.PNH_ENTRY_POINT_TYPE.CHAT_INFO_PN_VISIBILITY
                        })))
                    }
                })
            }, e.PhoneNumberVisibilityIndicatorCag = function(u) {
                var e, t = u.chat,
                    n = Boolean(null === (e = t.groupMetadata) || void 0 === e ? void 0 : e.participants.iAmAdmin());
                return (0, C.jsx)(E, {
                    phoneNumberIsShared: n,
                    handleClick: function() {
                        var u, e = null === (u = t.groupMetadata) || void 0 === u ? void 0 : u.parentGroup;
                        e && (0, r.incrementPnhDailyCount)(e, r.PnhCagDailyMetricsType.PNH_INDICATOR_CLICKS_INFO_SCREEN), o.ModalManager.open(n ? (0, C.jsx)(a.CagPhoneNumberSharedNux, {}) : (0, C.jsx)(a.CagPhoneNumberHiddenNux, {}))
                    }
                })
            };
            var a = t(817430),
                i = t(14630),
                o = t(628707),
                r = t(676344),
                l = t(401304),
                s = t(558288),
                D = n(t(229677)),
                c = n(t(603249)),
                d = t(164751),
                f = t(795746),
                F = t(548360),
                C = t(785893);

            function E(u) {
                var e = u.phoneNumberIsShared,
                    t = u.handleClick,
                    n = (0, C.jsx)(s.TextSpan, {
                        theme: "title",
                        children: F.fbt._("Phone number privacy", null, {
                            hk: "GWHMO"
                        })
                    }),
                    a = F.fbt._("Your phone number is visible in this chat. Click to learn more.", null, {
                        hk: "iXhQA"
                    }),
                    o = F.fbt._("This chat has added privacy for your phone number. Click to learn more.", null, {
                        hk: "17m1TJ"
                    });
                return (0, C.jsx)(c.default, {
                    icon: (0, C.jsx)(i.DialpadIcon, {
                        color: l.SvgColorProp.SECONDARY,
                        height: 20
                    }),
                    title: n,
                    testid: "phone_number_visibility_indicator",
                    secondaryTitle: (0, C.jsx)(s.TextDiv, {
                        theme: "muted",
                        children: e ? a : o
                    }),
                    onClick: t
                })
            }
        },
        81778: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = (0, o.useState)(),
                    t = (0, a.default)(e, 2)[1],
                    n = (0, o.useState)(),
                    c = (0, a.default)(n, 2)[1];
                if ((0, r.useListener)(i.Conn, "change:isVoipInitialized", (function() {
                        t(i.Conn.isVoipInitialized)
                    })), (0, r.useListener)(s.CallCollection, "change:activeCall", (function() {
                        c(null === s.CallCollection || void 0 === s.CallCollection ? void 0 : s.CallCollection.activeCall)
                    })), u) return {
                    isVoiceCallEnabled: Boolean(null == l ? void 0 : l.isVoiceCallEnabledForContactOrChat(u)),
                    isVideoCallEnabled: Boolean(null == l ? void 0 : l.isVideoCallEnabledForContact(u)),
                    canStartVoiceCall: Boolean(!u.isMe && (null == l ? void 0 : l.canStartCall(u))),
                    canStartVideoCall: Boolean(!u.isMe && (null == l ? void 0 : l.canStartVideoCall(u))),
                    startVoiceCall: function() {
                        var e = u.id.isLid() ? u.phoneNumber : u.id;
                        (null == l ? void 0 : l.checkIfCanStartCall({
                            contact: u,
                            isVideo: !1
                        })) && e && (null === D.Voip || void 0 === D.Voip || D.Voip.callStart(e, !1))
                    },
                    startVideoCall: function() {
                        var e = u.id.isLid() ? u.phoneNumber : u.id;
                        (null == l ? void 0 : l.checkIfCanStartCall({
                            contact: u,
                            isVideo: !0
                        })) && e && (null === D.Voip || void 0 === D.Voip || D.Voip.callStart(e, !0))
                    }
                };
                return {
                    isVoiceCallEnabled: !1,
                    isVideoCallEnabled: !1,
                    canStartVoiceCall: !1,
                    canStartVideoCall: !1,
                    startVoiceCall: function() {},
                    startVideoCall: function() {}
                }
            };
            var a = n(t(963038)),
                i = t(944634),
                o = t(667294),
                r = t(779740),
                l = function(u, e) {
                    if (!e && u && u.__esModule) return u;
                    if (null === u || "object" != typeof u && "function" != typeof u) return {
                        default: u
                    };
                    var t = c(e);
                    if (t && t.has(u)) return t.get(u);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in u)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(u, i)) {
                            var o = a ? Object.getOwnPropertyDescriptor(u, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = u[i]
                        } n.default = u, t && t.set(u, n);
                    return n
                }(t(394785)),
                s = t(152602),
                D = t(764582);

            function c(u) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    t = new WeakMap;
                return (c = function(u) {
                    return u ? t : e
                })(u)
            }
        },
        963651: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e;
                (0, d.useEffect)((function() {
                    (0, o.isPrivacyNarrativeV1Enabled)() && (0, r.incrementPrinaDailyCount)(u.highlightSurface, a.PrinaDailyActionType.NARRATIVE_APPEAR)
                }), []);
                var t = u.onClick,
                    n = u.text,
                    F = (0, f.jsx)(s.TextSpan, {
                        theme: "title",
                        children: null !== (e = u.title) && void 0 !== e ? e : c.fbt._("Encryption", null, {
                            hk: "a7CfR"
                        })
                    }),
                    C = (0, f.jsx)(s.TextDiv, {
                        theme: "muted",
                        children: n
                    }),
                    E = (0, f.jsx)(i.LockIcon, {
                        color: l.SvgColorProp.SECONDARY,
                        height: 20
                    });
                return (0, f.jsx)(D.default, {
                    onClick: t,
                    icon: E,
                    title: F,
                    secondaryTitle: C
                })
            };
            var a = t(147413),
                i = t(609318),
                o = t(518005),
                r = t(895526),
                l = t(401304),
                s = t(558288),
                D = n(t(603249)),
                c = t(548360),
                d = t(667294),
                f = t(785893)
        },
        670077: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(887757)),
                i = n(t(348926)),
                o = n(t(963038)),
                r = t(241941),
                l = t(544607),
                s = n(t(229677)),
                D = t(787118),
                c = n(t(281101)),
                d = t(707872),
                f = t(548360),
                F = t(667294),
                C = n(t(156720)),
                E = t(785893),
                p = {
                    paddingTop: "s7fqlky6",
                    paddingEnd: "iffbo4e8",
                    paddingBottom: "q1tx93la",
                    paddingStart: "e8k79tju",
                    fontSize: "ovllcyds",
                    lineHeight: "durt31hz",
                    color: "amgz1mtg"
                };

            function h(u, e) {
                var t = u.keptMsgs,
                    n = u.onClose,
                    h = u.chat,
                    A = (0, D.useKicNux)(h),
                    m = (0, o.default)(A, 2),
                    v = m[0],
                    g = m[1];
                (0, F.useEffect)((function() {
                    v && g(s.default.TRIGGER_TYPE.KEPT_FOLDER_TAP_FIRST_TIME)
                }), []), (0, F.useEffect)((function() {
                    (0, i.default)(a.default.mark((function u() {
                        var e, n, i;
                        return a.default.wrap((function(u) {
                            for (;;) switch (u.prev = u.next) {
                                case 0:
                                    if (e = new s.default.DisappearingMessageKeepInChat({
                                            kicActionName: s.default.KIC_ACTION_NAME_TYPE.VIEW_KEPT_MESSAGES,
                                            kicEntryPoint: s.default.KIC_ENTRY_POINT_TYPE.CHAT_INFO,
                                            messagesInFolder: t.length,
                                            isAGroup: null == h ? void 0 : h.isGroup
                                        }), (null == h ? void 0 : h.isGroup) && e.set({
                                            isAdmin: null == h || null === (n = h.groupMetadata) || void 0 === n ? void 0 : n.participants.iAmAdmin()
                                        }), !h) {
                                        u.next = 7;
                                        break
                                    }
                                    return u.next = 5, (0, d.getChatThreadID)(null == h ? void 0 : h.id.toJid());
                                case 5:
                                    null != (i = u.sent) && e.set({
                                        threadId: i
                                    });
                                case 7:
                                    e.commit();
                                case 8:
                                case "end":
                                    return u.stop()
                            }
                        }), u)
                    })))()
                }), []);
                var x, B = f.fbt._("Kept messages", null, {
                        hk: "iGco8"
                    }),
                    b = (0, E.jsx)(l.KeptMsgs, {}),
                    j = null;
                (null == h ? void 0 : h.isGroup) ? j = (null === (x = h.groupMetadata) || void 0 === x ? void 0 : x.restrict) ? (0, E.jsx)("div", {
                    className: (0, C.default)(p),
                    children: f.fbt._("These messages are kept in the chat for everyone. Only admins can keep or unkeep messages in this group.", null, {
                        hk: "2P8fIj"
                    })
                }) : (0, E.jsx)("div", {
                    className: (0, C.default)(p),
                    children: f.fbt._("These messages are kept in the chat for everyone. Everyone can keep or unkeep a message. Group admins can limit this.", null, {
                        hk: "3VYBCh"
                    })
                }): j = (0, E.jsx)("div", {
                    className: (0, C.default)(p),
                    children: f.fbt._("These messages are kept in the chat for everyone. Everyone can keep or unkeep a message.", null, {
                        hk: "3sFKOP"
                    })
                });
                return (0, E.jsx)(c.default, {
                    testid: "kept-drawer",
                    ref: e,
                    msgCollection: t,
                    onClose: n,
                    chat: h,
                    title: B,
                    emptyListText: b,
                    descriptionSection: j,
                    displayType: r.DISPLAY_TYPE.KEPT_MSGS
                })
            }
            var A = (0, F.forwardRef)(h);
            e.default = A
        },
        493462: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TABS = e.MediaGalleryDrawer = void 0;
            var a = n(t(963038)),
                i = n(t(252628)),
                o = t(341480),
                r = n(t(203307)),
                l = t(796520),
                s = n(t(968917)),
                D = n(t(758927)),
                c = n(t(711050)),
                d = n(t(131157)),
                f = t(518005),
                F = t(164965),
                C = n(t(833677)),
                E = n(t(462487)),
                p = t(190955),
                h = t(937915),
                A = t(776097),
                m = n(t(904847)),
                v = n(t(829723)),
                g = n(t(544978)),
                x = t(952991),
                B = t(548360),
                b = t(667294),
                j = n(t(156720)),
                M = n(t(409213)),
                _ = n(t(982669)),
                y = t(785893),
                S = {
                    menuItem: {
                        flexGrow: "ggj6brxn",
                        flexShrink: "m0h2a7mj",
                        flexBasis: "rjo8vgbg",
                        height: "qmp0wt83",
                        fontSize: "ovllcyds",
                        color: "fdblgtiy",
                        textAlign: "qfejxiq4",
                        textTransform: "ofejerhi",
                        cursor: "ajgl1lbb"
                    },
                    menuItemOSMac: {
                        fontWeight: "hnx8ox4h"
                    },
                    menuItemActive: {
                        color: "qiqvuef5"
                    },
                    menuItemActiveOSMac: {
                        fontWeight: "sy6s5v3r"
                    },
                    menuTabsLists: {
                        position: "g0rxnol2",
                        zIndex: "itj3kzbg",
                        display: "p357zi0d",
                        flexGrow: "tvf2evcx",
                        flexShrink: "oq44ahr5",
                        flexBasis: "lb5m6g5c",
                        alignItems: "gndfcl4n",
                        height: "qmp0wt83",
                        backgroundColor: "hpebpoc7",
                        "::before": {
                            position: "jiaumjzp",
                            bottom: "rhdd2pe1",
                            start: "fx6vfo4m",
                            height: "i1pbklkw",
                            content: "ckfn5qle",
                            backgroundColor: "eb03v51h",
                            transitionProperty: "oiu8h712",
                            transitionDuration: "pf2k5wc9",
                            transitionTimingFunction: "i206tstk"
                        }
                    },
                    column: {
                        display: "p357zi0d",
                        flexGrow: "ggj6brxn",
                        flexShrink: "m0h2a7mj",
                        flexBasis: "rjo8vgbg",
                        flexDirection: "f8m0rgwh",
                        height: "ppled2lx"
                    },
                    multimediaGallery: {
                        position: "lhggkp7q",
                        top: "qq0sjtgm",
                        start: "tkdu00h0",
                        width: "ln8gz9je",
                        height: "ppled2lx"
                    },
                    threeTabs: {
                        "::before": {
                            width: "l0wh9vpf"
                        }
                    },
                    fourTabs: {
                        "::before": {
                            width: "b213shb5"
                        }
                    },
                    tabMediaActive: {
                        "::before": {
                            transform: "bblgmxd8"
                        }
                    },
                    tabDocsActive: {
                        "::before": {
                            transform: "nws64mye"
                        }
                    },
                    tabLinksActive: {
                        "::before": {
                            transform: "xcz0gzg4"
                        }
                    },
                    tabProductsActive: {
                        "::before": {
                            transform: "lupmkxp7"
                        }
                    }
                },
                k = t(76672)({
                    MEDIA: "media",
                    DOCS: "docs",
                    LINKS: "links",
                    PRODUCTS: "products"
                });
            e.TABS = k;
            var P = B.fbt._("Search", null, {
                    hk: "418EDN"
                }),
                T = function(u) {
                    var e = u.selected,
                        t = u.onSearch;
                    switch (e) {
                        case k.MEDIA:
                        case k.LINKS:
                        case k.DOCS:
                            return (0, y.jsx)(l.ListSearch, {
                                onSearch: t,
                                loading: !1,
                                listFilterEnabled: !1,
                                chatlistFilterEnabled: !1,
                                mode: r.default.Chatlist,
                                placeholder: P
                            });
                        default:
                            return null
                    }
                };
            var w = (0, b.forwardRef)((function(u, e) {
                var t = u.chat,
                    n = u.onProductDetail,
                    r = u.setProductsScrollOffset,
                    l = u.initialTab,
                    P = void 0 === l ? k.MEDIA : l,
                    w = u.productsScrollOffset,
                    I = void 0 === w ? 0 : w,
                    N = (0, b.useState)(P),
                    R = (0, a.default)(N, 2),
                    O = R[0],
                    L = R[1],
                    G = (0, b.useState)(null),
                    V = (0, a.default)(G, 2),
                    H = V[0],
                    U = V[1],
                    z = (0, b.useState)(!1),
                    q = (0, a.default)(z, 2),
                    Y = q[0],
                    W = q[1],
                    K = (0, M.default)(),
                    X = (0, a.default)(K, 2),
                    Z = X[0],
                    $ = X[1],
                    Q = (0, f.mediaLinksDocsFilteringEnabled)(),
                    J = (0, _.default)((function() {
                        return new C.default([], (function(u) {
                            return u.id.toString()
                        }))
                    })),
                    uu = function() {
                        Y && (J.current.unsetAll(), W(!1))
                    },
                    eu = function(u, e) {
                        Y || W(!0), J.current.setVal(u, e), 0 === J.current.getSelected().length && uu()
                    },
                    tu = (0, b.useCallback)((function(u) {
                        var e = (0, i.default)(k).indexOf(O),
                            t = (0, i.default)(k).indexOf(u);
                        e !== t && J.current.unsetAll(), L(u), U(t > e ? "right" : "left"), W(!1)
                    }), [J, O]),
                    nu = (0, b.useMemo)((function() {
                        var u = [{
                            tab: k.MEDIA,
                            title: D.default.t(416)
                        }, {
                            tab: k.DOCS,
                            title: D.default.t(243)
                        }, {
                            tab: k.LINKS,
                            title: D.default.t(394)
                        }];
                        p.ServerProps.productMediaAttachments && u.push({
                            tab: k.PRODUCTS,
                            title: B.fbt._("Products", null, {
                                hk: "3Ky71N"
                            })
                        });
                        var e = u.map((function(u) {
                                var e = (0, j.default)(S.menuItem, h.isOSMac && S.menuItemOSMac, O === u.tab && S.menuItemActive, O === u.tab && h.isOSMac && S.menuItemActiveOSMac);
                                return (0, y.jsx)("button", {
                                    "data-testid": `gallery-tab-${u.tab}`,
                                    className: e,
                                    onClick: function() {
                                        return tu(u.tab)
                                    },
                                    title: u.title,
                                    children: u.title
                                }, u.tab)
                            })),
                            t = (0, j.default)(S.menuTabsLists, p.ServerProps.productMediaAttachments ? S.fourTabs : S.threeTabs, O === k.MEDIA && S.tabMediaActive, O === k.DOCS && S.tabDocsActive, O === k.LINKS && S.tabLinksActive, O === k.PRODUCTS && S.tabProductsActive);
                        return (0, y.jsx)("div", {
                            className: t,
                            "data-active-tab": O,
                            children: e
                        })
                    }), [O, tu]),
                    au = function(u) {
                        switch (u) {
                            case k.MEDIA:
                                return F.MultiSelectBarEntryPoint.MEDIA;
                            case k.DOCS:
                                return F.MultiSelectBarEntryPoint.DOCS;
                            case k.LINKS:
                                return F.MultiSelectBarEntryPoint.LINKS;
                            case k.PRODUCTS:
                                return F.MultiSelectBarEntryPoint.PRODUCTS
                        }
                    }(O),
                    iu = function() {
                        var u;
                        switch (O) {
                            case k.MEDIA:
                                u = (0, y.jsx)(d.default, {
                                    chat: t,
                                    mediaMsgs: t.getMediaMsgs(),
                                    selectable: Y,
                                    onMessageSelect: eu,
                                    selectedMessages: J.current,
                                    fullCollection: !0,
                                    isFilterEnabled: Q,
                                    filterText: Z
                                });
                                break;
                            case k.LINKS:
                                u = (0, y.jsx)(c.default, {
                                    chat: t,
                                    linkMsgs: t.getLinkMsgs(),
                                    selectable: Y,
                                    onMessageSelect: eu,
                                    selectedMessages: J.current,
                                    isFilterEnabled: Q,
                                    filterText: Z
                                });
                                break;
                            case k.DOCS:
                                u = (0, y.jsx)(s.default, {
                                    chat: t,
                                    docMsgs: t.getDocMsgs(),
                                    selectable: Y,
                                    onMessageSelect: eu,
                                    selectedMessages: J.current,
                                    isFilterEnabled: Q,
                                    filterText: Z
                                });
                                break;
                            case k.PRODUCTS:
                                u = (0, y.jsx)(E.default, {
                                    chat: t,
                                    productMsgs: t.getProductMsgs(),
                                    selectable: Y,
                                    onMessageSelect: eu,
                                    selectedMessages: J.current,
                                    onProductDetail: n,
                                    setScrollOffset: r,
                                    scrollOffset: I
                                })
                        }
                        return u
                    }(),
                    ou = [k.MEDIA, k.DOCS].includes(O),
                    ru = Y ? (0, y.jsx)(A.UIE, {
                        displayName: "MediaMultiSelect",
                        escapable: !0,
                        requestDismiss: uu,
                        children: (0, y.jsx)(F.MultiSelectBar, {
                            chat: t,
                            noSortOnForward: !0,
                            theme: "mediaGallery",
                            toastPosition: o.ToastPosition.RIGHT,
                            downloadButton: ou,
                            selectedMessages: J.current,
                            onCancel: uu,
                            entryPoint: au
                        })
                    }) : null,
                    lu = "right" === H ? "slide-forward" : "slide-back";
                return (0, y.jsxs)(v.default, {
                    ref: e,
                    theme: "gallery",
                    testid: "media-gallery-drawer",
                    children: [(0, y.jsx)(x.DrawerHeader, {
                        title: " ",
                        onBack: u.onBack,
                        rtlFixIfOnDarwin: !0,
                        type: x.DRAWER_HEADER_TYPE.MULTI_MEDIA_GALLERY
                    }), ru, nu, Q ? (0, y.jsx)(T, {
                        selected: O,
                        onSearch: $
                    }) : null, (0, y.jsx)(g.default, {
                        "data-list-scroll-container": !0,
                        children: (0, y.jsx)(m.default, {
                            transitionName: lu,
                            className: (0, j.default)(S.column),
                            children: (0, y.jsx)("div", {
                                className: (0, j.default)(S.multimediaGallery),
                                children: (0, y.jsx)("div", {
                                    className: (0, j.default)(S.column),
                                    children: iu
                                })
                            }, O)
                        })
                    })]
                })
            }));
            e.MediaGalleryDrawer = w, w.displayName = "MediaGalleryDrawer"
        },
        232543: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = (0, s.useModelValues)(u.mediaData, ["mediaStage", "renderableUrl"]);
                return (0, D.jsx)(i.default, {
                    mediaData: e,
                    placeholderRenderer: f,
                    children: function(e) {
                        return (0, D.jsx)(d, {
                            url: e,
                            msg: u.msg
                        })
                    }
                })
            };
            var a = n(t(758927)),
                i = n(t(121510)),
                o = n(t(789999)),
                r = n(t(179741)),
                l = n(t(706442)),
                s = t(948752),
                D = t(785893),
                c = function(u) {
                    u.stopPropagation()
                };

            function d(u) {
                var e = u.url,
                    t = u.msg;
                return (0, D.jsx)(o.default, {
                    url: e,
                    className: r.default.mediaViewerAudio,
                    onClick: c,
                    autoPlay: !0,
                    msg: t,
                    controls: !0,
                    testId: "media-audio",
                    children: a.default.t(141)
                })
            }

            function f() {
                return (0, D.jsx)("div", {
                    className: (0, l.default)(r.default.imageAudio, r.default.mediaViewerPlaceholder),
                    onClick: c
                })
            }
        },
        658076: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.onHightlightCloseEnd,
                    t = u.msgIndexInAlbum,
                    n = u.onViewOnceInfoClick,
                    i = u.onClose,
                    o = (0, ou.useRef)(null),
                    l = (0, lu.useModelValues)(u.msg, ["id", "star", "isGroupMsg", "chat", "type", "isGif", "isViewOnce", "sender", "senderObj", "t", "isSentByMe", "isStickerMsg", "broadcastId", "isUnsentMedia", "isKept", "messageSecret"]),
                    D = (0, lu.useModelValues)(u.mediaData, ["filehash", "mediaStage", "renderableUrl"]),
                    c = (0, ou.useState)(null),
                    d = (0, a.default)(c, 2),
                    f = d[0],
                    C = d[1],
                    E = (0, ou.useState)(null),
                    h = (0, a.default)(E, 2),
                    m = h[0],
                    v = h[1],
                    g = (0, ou.useRef)(null),
                    x = function() {
                        C(null)
                    },
                    B = function() {
                        v(null)
                    },
                    M = (0, su.default)((function(u) {
                        (0, I.canReactToMessage)(u) && v({
                            dirY: p.DirY.BOTTOM,
                            dirX: p.DirX.CENTER,
                            type: p.MenuType.ReactionPicker,
                            menu: (0, Du.jsx)(w.ReactionsPanel, {
                                msgId: u.id.toString(),
                                onSelection: function(e) {
                                    (0, L.sendReactionToMsg)(u, e).catch((function() {})), B()
                                }
                            }),
                            flipOnRTL: !0,
                            anchor: g.current
                        })
                    }));
                (0, ru.useListener)(o.current, "animationend", (function() {
                    e()
                }));
                var _ = l.displayName({
                    showShortName: !0,
                    withPushName: !0
                });
                l.isGroupMsg && (_ += " @ " + l.chat.title());
                var y, S = (0, Du.jsx)(Q.XViewerIcon, {
                    className: u.isHighlightClose ? J.default.highlightClose : null,
                    containerRef: o
                });
                f ? y = (0, Du.jsx)(Y.UIE, {
                    displayName: "MsgReaction",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: x,
                    children: (0, Du.jsx)(W.default, {
                        contextMenu: f
                    })
                }) : m && (y = (0, Du.jsx)(Y.UIE, {
                    displayName: "MsgReactionPicker",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: B,
                    children: (0, Du.jsx)(W.default, {
                        contextMenu: m
                    })
                }));
                return (0, Du.jsxs)("div", {
                    className: J.default.mediaPanelHeader,
                    children: [(0, Du.jsx)("div", {
                        className: J.default.info,
                        children: (0, Du.jsx)(r.default, {
                            idle: !0,
                            image: (0, Du.jsx)(F.DetailImage, {
                                id: l.sender,
                                size: 40
                            }),
                            primary: (0, Du.jsx)(A.EmojiText, {
                                ellipsify: !0,
                                text: _
                            }),
                            secondary: s.Clock.relativeDateAndTimeStr(l.t),
                            theme: "media"
                        })
                    }), (0, Du.jsx)("div", {
                        className: J.default.mediaPanelTools,
                        children: (0, Du.jsxs)(j.MenuBar, {
                            theme: "strong",
                            children: [(0, Du.jsx)(Mu, {
                                isMediaDownloadable: function() {
                                    return !l.isViewOnce && (!!D.renderableUrl || D.mediaStage === b.MEDIA_DATA_STAGE.RESOLVED)
                                },
                                msg: l,
                                msgIndexInAlbum: t,
                                onClose: i,
                                onViewOnceInfoClick: n,
                                openReactionTray: function() {
                                    if ((0, I.canReactToMessage)(l)) {
                                        var u = {
                                            dirY: p.DirY.BOTTOM,
                                            dirX: p.DirX.CENTER,
                                            type: p.MenuType.ReactionSendTray,
                                            menu: (0, Du.jsx)(V.SendReactionsTrayContainer, {
                                                msg: l,
                                                selectedCallback: function(u) {
                                                    u !== G.MORE_REACTIONS ? (0, L.sendReactionToMsg)(l, u).catch((function() {})) : setTimeout((function() {
                                                        M(l)
                                                    }), 150), x()
                                                }
                                            }),
                                            flipOnRTL: !1,
                                            anchor: g.current
                                        };
                                        C(u)
                                    }
                                },
                                sendReactionButtonRef: g
                            }), (0, Du.jsx)(j.MenuBarItem, {
                                testid: "btn-close",
                                icon: S,
                                title: iu.fbt._("Close", null, {
                                    hk: "19Jpec"
                                }),
                                onClick: u.onClose
                            })]
                        }, "media-panel-header")
                    }), y]
                })
            };
            var a = n(t(963038)),
                i = t(774260),
                o = t(222876),
                r = n(t(799328)),
                l = t(828420),
                s = t(87330),
                D = t(896674),
                c = t(158020),
                d = t(515918),
                f = t(356953),
                F = t(207826),
                C = t(94767),
                E = t(875058),
                p = t(482510),
                h = t(116384),
                A = t(990055),
                m = t(709894),
                v = t(720135),
                g = t(10508),
                x = t(659954),
                B = n(t(758927)),
                b = t(966454),
                j = t(199479),
                M = t(994291),
                _ = t(518005),
                y = t(628707),
                S = t(257972),
                k = t(221314),
                P = t(154553),
                T = t(122269),
                w = t(450591),
                I = t(652862),
                N = t(340888),
                R = n(t(353897)),
                O = t(975178),
                L = t(826025),
                G = t(730719),
                V = t(799154),
                H = t(219867),
                U = t(233565),
                z = t(242826),
                q = t(121657),
                Y = t(776097),
                W = n(t(728056)),
                K = t(160962),
                X = t(43361),
                Z = t(735537),
                $ = n(t(229677)),
                Q = (t(635959), t(714771)),
                J = n(t(477375)),
                uu = t(74253),
                eu = t(404186),
                tu = n(t(99921)),
                nu = t(382383),
                au = n(t(381210)),
                iu = t(548360),
                ou = t(667294),
                ru = t(779740),
                lu = t(948752),
                su = n(t(803827)),
                Du = t(785893),
                cu = t(76672).Mirrored(["MenuBar", "Dropdown"]);

            function du(u) {
                var e = u.chat;
                e.composeQuotedMsg = u, d.ComposeBoxActions.focus(e)
            }

            function fu(u) {
                return iu.fbt._("Report {contact_name}", [iu.fbt._param("contact_name", u.displayName())], {
                    hk: "3Dqyjo"
                })
            }

            function Fu(u) {
                var e = u.isMediaDownloadable,
                    t = u.msg,
                    n = u.onClose,
                    a = u.openReactionTray,
                    i = u.sendReactionButtonRef;
                return (0, Du.jsxs)(Du.Fragment, {
                    children: [(0, k.canReplyMsg)(t) ? (0, Du.jsx)(pu, {
                        msg: t,
                        onClose: n
                    }) : null, (0, S.canStarMsg)(t) ? (0, Du.jsx)(gu, {
                        msg: t
                    }) : null, t.canShowKeepOrUnkeepOption() ? (0, Du.jsx)(vu, {
                        msg: t
                    }) : null, (0, I.canReactToMessage)(t) ? (0, Du.jsx)(mu, {
                        msg: t,
                        openReactionTray: a,
                        sendReactionButtonRef: i
                    }) : null, (0, Du.jsx)(hu, {
                        msg: t,
                        onClose: n
                    }), (0, S.canMsgForward)(t) ? (0, Du.jsx)(xu, {
                        msg: t
                    }) : null, (0, Du.jsx)(_u, {
                        isMediaDownloadable: e,
                        isAlbumMedia: !0,
                        msg: t,
                        onClose: n
                    })]
                })
            }

            function Cu(u) {
                var e = u.isMediaDownloadable,
                    t = u.msg,
                    n = u.onClose,
                    a = u.openReactionTray,
                    i = u.sendReactionButtonRef;
                return (0, Du.jsxs)(Du.Fragment, {
                    children: [t.isStickerMsg ? null : (0, Du.jsx)(Eu, {
                        msg: t,
                        type: cu.MenuBar,
                        onClose: n
                    }), t.isStickerMsg ? (0, Du.jsx)(pu, {
                        msg: t,
                        onClose: n
                    }) : null, (0, S.canStarMsg)(t) ? (0, Du.jsx)(gu, {
                        msg: t
                    }) : null, t.canShowKeepOrUnkeepOption() ? (0, Du.jsx)(vu, {
                        msg: t
                    }) : null, t.isStickerMsg ? (0, Du.jsx)(hu, {
                        msg: t,
                        onClose: n
                    }) : null, (0, I.canReactToMessage)(t) ? (0, Du.jsx)(mu, {
                        msg: t,
                        openReactionTray: a,
                        sendReactionButtonRef: i
                    }) : null, (0, S.canMsgForward)(t) ? (0, Du.jsx)(xu, {
                        msg: t
                    }) : null, t.isStickerMsg ? null : (0, Du.jsx)(Au, {
                        isMediaDownloadable: e,
                        msg: t,
                        type: cu.MenuBar
                    }), (0, S.canReportMsg)(t) && (0, _.messageLevelReportingEnabled)() ? (0, Du.jsx)(_u, {
                        isMediaDownloadable: e,
                        isAlbumMedia: !1,
                        msg: t,
                        onClose: n
                    }) : null]
                })
            }

            function Eu(u) {
                var e = u.msg,
                    t = u.type,
                    n = u.onClose,
                    a = function(u) {
                        u.stopPropagation(), n(), E.DrawerManager.existsDrawerRight((function(u) {
                            u && 2 === c.Column.column && E.DrawerManager.closeDrawerRight()
                        }));
                        var t = (0, l.getSearchContext)(e.chat, (0, q.unproxy)(e));
                        D.Cmd.openChatAt(e.chat, t).then((function(u) {
                            u && d.ComposeBoxActions.focus(e.chat)
                        }))
                    };
                return t === cu.Dropdown ? (0, Du.jsx)(h.DropdownItem, {
                    action: a,
                    children: iu.fbt._("Go to message", null, {
                        hk: "B1anG"
                    })
                }) : (0, Du.jsx)(j.MenuBarItem, {
                    icon: (0, Du.jsx)(o.BubbleIcon, {}),
                    title: iu.fbt._("Go to message", null, {
                        hk: "B1anG"
                    }),
                    onClick: a
                })
            }

            function pu(u) {
                var e = u.msg,
                    t = u.onClose;
                return (0, Du.jsx)(j.MenuBarItem, {
                    icon: (0, Du.jsx)(N.ReplyIcon, {}),
                    title: iu.fbt._("Reply", null, {
                        hk: "1C7DPa"
                    }),
                    onClick: function() {
                        t(), (0, i.delayMs)(uu.CLOSE_ANIMATION_DURATION).then(du.bind(null, (0, q.unproxy)(e)))
                    }
                })
            }

            function hu(u) {
                var e = u.msg,
                    t = u.onClose;
                return (0, Du.jsx)(j.MenuBarItem, {
                    icon: (0, Du.jsx)(f.DeleteIcon, {}),
                    title: iu.fbt._("Delete", null, {
                        hk: "2KhPUX"
                    }),
                    onClick: function() {
                        y.ModalManager.open((0, Du.jsx)(tu.default, {
                            chat: e.chat,
                            msgList: [(0, q.unproxy)(e)],
                            onDelete: t
                        })), O.UiRevokeActionHelper.startSession(), O.UiRevokeActionHelper.messageSelected()
                    }
                })
            }

            function Au(u) {
                var e = u.msg,
                    t = u.type,
                    n = u.isMediaDownloadable,
                    a = function(u) {
                        u.stopPropagation(), m.FileSaver.initDownload((0, q.unproxy)(e))
                    };
                return t === cu.Dropdown ? (0, Du.jsx)(h.DropdownItem, {
                    action: a,
                    disabled: !n(),
                    children: iu.fbt._("Download", null, {
                        hk: "1g5Jix"
                    })
                }) : (0, Du.jsx)(j.MenuBarItem, {
                    icon: (0, Du.jsx)(C.DownloadIcon, {}),
                    title: iu.fbt._("Download", null, {
                        hk: "1g5Jix"
                    }),
                    disabled: !n(),
                    onClick: a
                })
            }

            function mu(u) {
                var e = u.msg,
                    t = u.openReactionTray,
                    n = u.sendReactionButtonRef;
                return e.type === P.MSG_TYPE.STICKER ? null : (0, Du.jsx)(j.MenuBarItem, {
                    testid: "reaction-entry-point",
                    icon: (0, Du.jsx)(T.ReactionsMediaIcon, {
                        containerRef: n,
                        width: 20
                    }),
                    title: iu.fbt._("React to message", null, {
                        hk: "1MagBh"
                    }),
                    onClick: function() {
                        t()
                    }
                })
            }
            var vu = function(u) {
                var e, t, n, a = u.msg;
                if (a.isKept && a.canShowUnkeepOption()) e = (0, Du.jsx)(K.UndoKeepInChatMediaIcon, {}), t = function(u) {
                    u.stopPropagation(), (0, nu.runUndoKeepInChatUX)((0, q.unproxy)(a), $.default.KIC_ENTRY_POINT_TYPE.MEDIA)
                }, n = iu.fbt._("Unkeep", null, {
                    hk: "1eGZng"
                });
                else {
                    if (a.isKept || !a.canShowKeepOption()) return null;
                    e = (0, Du.jsx)(x.KeepInChatMediaIcon, {}), t = function(u) {
                        u.stopPropagation(), (0, nu.runKeepInChatUX)((0, q.unproxy)(a), $.default.KIC_ENTRY_POINT_TYPE.MEDIA)
                    }, n = iu.fbt._("Keep", null, {
                        hk: "1a48ae"
                    })
                }
                return (0, Du.jsx)(j.MenuBarItem, {
                    icon: e,
                    title: n,
                    onClick: t
                }, e)
            };

            function gu(u) {
                var e, t, n, a = u.msg;
                return a.star ? (e = function(u) {
                    u.stopPropagation(), D.Cmd.sendUnstarMsgs(a.chat, [(0, q.unproxy)(a)])
                }, t = (0, Du.jsx)(X.UnstarBtnIcon, {}), n = B.default.t(607)) : (e = function(u) {
                    u.stopPropagation(), D.Cmd.sendStarMsgs(a.chat, [(0, q.unproxy)(a)])
                }, t = (0, Du.jsx)(z.StarBtnIcon, {}), n = B.default.t(585)), (0, Du.jsx)(j.MenuBarItem, {
                    icon: t,
                    title: n,
                    onClick: e
                }, n)
            }

            function xu(u) {
                var e = u.msg;
                return (0, Du.jsx)(j.MenuBarItem, {
                    icon: (0, Du.jsx)(v.ForwardIcon, {}),
                    title: B.default.t(311),
                    onClick: function(u) {
                        u.stopPropagation(), e.isUnsentMedia ? y.ModalManager.open((0, Du.jsx)(eu.ConfirmPopup, {
                            title: B.default.t(301),
                            onOK: function() {
                                return y.ModalManager.close()
                            },
                            okText: iu.fbt._("OK", null, {
                                hk: "2KEeHb"
                            }),
                            children: B.default.t(298)
                        })) : y.ModalManager.open((0, Du.jsx)(g.ForwardMessageModalLoadable, {
                            msgs: [(0, q.unproxy)(e)],
                            onClose: function() {
                                return y.ModalManager.close()
                            }
                        }), {
                            transition: "modal-flow"
                        })
                    }
                })
            }

            function Bu(u) {
                var e = u.msg;
                return (0, Du.jsx)(h.DropdownItem, {
                    testid: "mi-msg-reply",
                    action: function() {
                        (0, R.default)(e)
                    },
                    children: iu.fbt._("Reply privately", null, {
                        hk: "1XQeK2"
                    })
                })
            }

            function bu(u) {
                var e = u.msg,
                    t = function(u) {
                        u ? (0, H.sendMessageReportBlock)(e, U.SpamFlow.MediaViewer) : (0, H.sendMessageReport)(e, U.SpamFlow.MediaViewer), y.ModalManager.close()
                    };
                return (0, Du.jsx)(h.DropdownItem, {
                    action: function() {
                        y.ModalManager.open((0, Du.jsx)(au.default, {
                            isBusiness: e.senderObj.isBusiness,
                            isGroup: e.chat.isGroup,
                            onReport: t,
                            onCancel: function() {
                                return y.ModalManager.close()
                            },
                            title: fu(e)
                        }))
                    },
                    children: fu(e)
                })
            }

            function ju(u) {
                var e = u.msg,
                    t = u.onClose;
                return (0, Du.jsx)(h.DropdownItem, {
                    action: function() {
                        t(), (0, i.delayMs)(uu.CLOSE_ANIMATION_DURATION + 250).then(D.Cmd.msgInfoDrawer.bind(D.Cmd, (0, q.unproxy)(e)))
                    },
                    children: B.default.t(435)
                })
            }

            function Mu(u) {
                var e = u.isMediaDownloadable,
                    t = u.msg,
                    n = u.msgIndexInAlbum,
                    a = u.onClose,
                    i = u.onViewOnceInfoClick,
                    o = u.openReactionTray,
                    r = u.sendReactionButtonRef;
                return t.isViewOnce ? (0, Du.jsx)(yu, {
                    isMediaDownloadable: e,
                    msg: t,
                    onClose: a,
                    onViewOnceInfoClick: i
                }) : n >= 0 ? (0, Du.jsx)(Fu, {
                    isMediaDownloadable: e,
                    msg: t,
                    onClose: a,
                    openReactionTray: o,
                    sendReactionButtonRef: r
                }) : (0, Du.jsx)(Cu, {
                    isMediaDownloadable: e,
                    msg: t,
                    onClose: a,
                    openReactionTray: o,
                    sendReactionButtonRef: r
                })
            }

            function _u(u) {
                var e = u.isMediaDownloadable,
                    t = u.isAlbumMedia,
                    n = u.msg,
                    a = u.onClose,
                    i = [];
                return ((0, k.canPrivateReply)(n) || (0, k.canPrivateReplyInRestrictedGrp)(n)) && i.push((0, Du.jsx)(Bu, {
                    msg: n
                }, "private_reply")), t && (n.isSentByMe && i.push((0, Du.jsx)(ju, {
                    msg: n,
                    onClose: a
                }, "dropdownMsgInfo")), i.push((0, Du.jsx)(Eu, {
                    msg: n,
                    type: cu.Dropdown,
                    onClose: a
                }, "dropdownGoToMsg"), (0, Du.jsx)(Au, {
                    isMediaDownloadable: e,
                    msg: n,
                    type: cu.Dropdown
                }, "dropdownDownload"))), (n.isViewOnce || (0, S.canReportMsg)(n) && (0, _.messageLevelReportingEnabled)()) && i.push((0, Du.jsx)(bu, {
                    msg: n
                }, "reportSpam")), (0, Du.jsx)(j.MenuBarItem, {
                    icon: (0, Du.jsx)(M.MenuIcon, {}),
                    title: B.default.t(430),
                    children: (0, Du.jsx)(p.Dropdown, {
                        type: p.MenuType.DropdownMenu,
                        flipOnRTL: !0,
                        dirX: p.DirX.LEFT,
                        children: i
                    })
                })
            }

            function yu(u) {
                var e = u.isMediaDownloadable,
                    t = u.msg,
                    n = u.onClose,
                    a = u.onViewOnceInfoClick;
                return (0, Du.jsxs)(Du.Fragment, {
                    children: [(0, Du.jsx)(j.MenuBarItem, {
                        icon: (0, Du.jsx)(Z.ViewOnceIcon, {
                            className: J.default.voIcon
                        }),
                        title: iu.fbt._("View once info", null, {
                            hk: "47XkZ4"
                        }),
                        onClick: a
                    }), (0, Du.jsx)(_u, {
                        isMediaDownloadable: e,
                        isAlbumMedia: !1,
                        msg: t,
                        onClose: n
                    })]
                })
            }
        },
        838235: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(977202)),
                i = t(208188),
                o = n(t(289856)),
                r = n(t(121510)),
                l = t(120092),
                s = t(976576),
                D = n(t(380812)),
                c = n(t(229677)),
                d = n(t(329043)),
                f = n(t(239142)),
                F = t(667294),
                C = n(t(156720)),
                E = n(t(154194)),
                p = t(948752),
                h = t(785893),
                A = {
                    container: {
                        width: "ln8gz9je",
                        height: "ppled2lx"
                    },
                    stickerContainer: {
                        maxWidth: "mx6rw3sv",
                        maxHeight: "trnfqnf9",
                        marginBottom: "r2u2pyhj",
                        zIndex: "thghmljt"
                    }
                },
                m = function(u, e) {
                    var t = u.msg,
                        n = (0, p.useModelValues)(u.mediaData, ["encFilehash", "directPath", "filehash", "mediaKey", "mediaKeyTimestamp", "mediaStage", "mimetype", "fullWidth", "fullHeight", "isFirstParty", "stickerPackId", "stickerPackName", "stickerPackPublisher"]),
                        m = (0, F.useRef)(null),
                        v = (0, E.default)(e, m),
                        g = function(u) {
                            var e;
                            null === (e = m.current) || void 0 === e || e.onClick(u)
                        },
                        x = n.isFirstParty ? (0, h.jsx)(a.default, {
                            stickerPackId: n.stickerPackId,
                            onStickerPackView: u.onStickerPackView,
                            stickerPackViewDelay: u.stickerPackViewDelay,
                            sticker: new s.StickerModel({
                                id: n.filehash,
                                mimetype: n.mimetype,
                                width: n.fullWidth,
                                height: n.fullHeight,
                                filehash: n.filehash,
                                encFilehash: n.encFilehash,
                                directPath: n.directPath,
                                mediaKey: n.mediaKey,
                                mediaKeyTimestamp: n.mediaKeyTimestamp
                            })
                        }) : (0, h.jsx)(l.StickerDetailsStickerPackInfo, {
                            name: n.stickerPackName,
                            publisher: n.stickerPackPublisher,
                            theme: l.Theme.MediaViewer,
                            sticker: new s.StickerModel({
                                id: n.filehash,
                                mimetype: n.mimetype,
                                width: n.fullWidth,
                                height: n.fullHeight,
                                filehash: n.filehash,
                                encFilehash: n.encFilehash,
                                directPath: n.directPath,
                                mediaKey: n.mediaKey,
                                mediaKeyTimestamp: n.mediaKeyTimestamp
                            })
                        });
                    return (0, h.jsxs)(i.FlexColumn, {
                        align: "center",
                        justify: "center",
                        xstyle: A.container,
                        children: [(0, h.jsx)("div", {
                            className: (0, C.default)(A.container, A.stickerContainer),
                            "data-testid": "media-sticker",
                            children: (0, h.jsx)(f.default, {
                                ref: v,
                                width: n.fullWidth,
                                height: n.fullHeight,
                                onZoomIn: u.onImgZoomIn,
                                msg: t,
                                children: (0, h.jsx)(r.default, {
                                    mediaData: n,
                                    placeholderRenderer: function() {
                                        return (0, h.jsx)(D.default, {
                                            size: 376
                                        })
                                    },
                                    downloadMedia: function() {
                                        return null == t ? void 0 : t.downloadMedia({
                                            downloadEvenIfExpensive: !1,
                                            rmrReason: c.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                                            isUserInitiated: !1
                                        })
                                    },
                                    children: function(e) {
                                        return (0, h.jsx)(o.default, {
                                            className: (0, C.default)(d.default.content),
                                            onClick: g,
                                            src: e,
                                            onLoad: u.onLoad
                                        })
                                    }
                                })
                            })
                        }), x]
                    })
                },
                v = (0, F.forwardRef)(m);
            e.default = v
        },
        343113: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(963038)),
                i = n(t(465470)),
                o = n(t(758927)),
                r = t(966454),
                l = n(t(528851)),
                s = t(426413),
                D = t(511043),
                c = t(980103),
                d = n(t(686029)),
                f = t(540751),
                F = t(652862),
                C = n(t(695323)),
                E = n(t(229677)),
                p = n(t(172783)),
                h = n(t(329043)),
                A = t(310289),
                m = t(667294),
                v = n(t(156720)),
                g = t(948752),
                x = t(785893);

            function B(u, e) {
                var t, n = u.autoPlay,
                    B = u.msg,
                    b = u.onLoad,
                    M = u.onClose,
                    _ = u.onLoadedData,
                    y = u.startTime,
                    S = void 0 === y ? 0 : y,
                    k = (0, g.useModelValues)(u.mediaData, ["mediaStage", "fullWidth", "fullHeight", "isGif", "isViewOnce", "preview", "renderableUrl", "streamable"]),
                    P = (0, m.useState)(!1),
                    T = (0, a.default)(P, 2),
                    w = T[0],
                    I = T[1],
                    N = (0, m.useState)(!0),
                    R = (0, a.default)(N, 2),
                    O = R[0],
                    L = R[1],
                    G = (0, m.useRef)(),
                    V = (0, m.useMemo)((function() {
                        return (k.mediaStage === r.MEDIA_DATA_STAGE.RESOLVED || k.streamable && k.isStreamable()) && (0, A.isNonZeroNumber)(k.fullWidth) && (0, A.isNonZeroNumber)(k.fullHeight) ? function(u) {
                            if (u.isGif) {
                                var e = 330;
                                return u.fullWidth >= e ? {
                                    width: u.fullWidth,
                                    height: u.fullHeight
                                } : {
                                    width: e,
                                    height: u.fullHeight * e / u.fullWidth
                                }
                            }
                            if (u.fullWidth >= D.MIN_WIDTH) return {
                                width: u.fullWidth,
                                height: u.fullHeight
                            };
                            return {
                                width: D.MIN_WIDTH,
                                height: u.fullHeight
                            }
                        }(k) : {
                            width: 0,
                            height: 0
                        }
                    }), [k]);
                (0, m.useEffect)((function() {
                    if (!k.isStreamable()) return B.downloadMedia({
                            downloadEvenIfExpensive: !0,
                            rmrReason: E.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                            isUserInitiated: !0
                        }),
                        function() {
                            B.mediaObject && B.cancelDownload()
                        }
                }), []);
                (0, m.useImperativeHandle)(e, (function() {
                    return {
                        getContainerElement: function() {
                            return G.current
                        },
                        closingMedia: function() {
                            L(!1)
                        }
                    }
                }));
                var H = k.isGif,
                    U = k.mediaStage === r.MEDIA_DATA_STAGE.RESOLVED || k.streamable && k.isStreamable();
                U = U || B.isForcingRMR();
                var z = null,
                    q = f.ReactionBubbleType.MEDIA_ITEM;
                if (B && (0, F.shouldShowReactionBubble)(B, q) && (z = (0, x.jsx)(d.default, {
                        msgIds: [B.id.toString()],
                        reactionBubbleType: q,
                        reactionBubbleVisible: O
                    })), U) {
                    var Y, W, K = o.default.t(627);
                    return !w && (null == B ? void 0 : B.interactiveAnnotations) && B.interactiveAnnotations.length > 0 && (Y = (0, x.jsx)(i.default, {
                        annotations: B.interactiveAnnotations
                    })), W = H ? (0, x.jsxs)("div", {
                        className: (0, v.default)(h.default.content),
                        ref: G,
                        "data-testid": "media-gif",
                        children: [(0, x.jsx)(C.default, {
                            src: k.renderableUrl,
                            onClick: j,
                            autoPlay: !0,
                            loop: !0,
                            onLoadedData: _,
                            children: K
                        }), Y]
                    }) : (0, x.jsx)("div", {
                        ref: G,
                        className: (0, v.default)(h.default.content),
                        onClick: j,
                        "data-testid": "media-video",
                        children: (0, x.jsx)(c.WrappedMsgVideoPlayer, {
                            msg: B,
                            mediaData: k,
                            startTime: S,
                            onClose: M,
                            onError: function() {},
                            onFullscreenToggle: function(u) {
                                I(u)
                            },
                            autoPlay: n,
                            type: s.PLAYER_TYPE.MEDIA_VIEWER,
                            overlays: Y,
                            noPip: B.isViewOnce,
                            onLoadedData: _
                        })
                    }), (0, x.jsxs)(l.default, {
                        type: "scaleDown",
                        position: "relative",
                        objectPosition: "relative",
                        size: V,
                        onObjectLoad: b,
                        children: [W, z]
                    })
                }
                return (0, x.jsxs)(l.default, {
                    type: "scaleDown",
                    position: "relative",
                    objectPosition: "relative",
                    size: {
                        width: k.fullWidth,
                        height: k.fullHeight
                    },
                    children: [(0, x.jsx)(p.default, {
                        altText: null !== (t = B.caption) && void 0 !== t ? t : "",
                        mediaData: k
                    }), z]
                })
            }
            var b = (0, m.forwardRef)(B);

            function j(u) {
                u.stopPropagation()
            }
            e.default = b
        },
        740664: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t = u.onImageLoad,
                    n = u.isAnimatingIn,
                    r = u.onImgZoomIn,
                    g = u.onExitAnimation,
                    z = u.onBack,
                    Y = (0, L.useModelValues)(u.msg, ["id", "star", "isUnsentMedia", "isViewOnce", "isStickerMsg", "chat", "caption", "interactiveAnnotations", "type", "messageSecret"]),
                    K = (0, L.useModelValues)(u.mediaData, ["mediaStage", "type", "isGif"]),
                    X = (0, V.default)(n),
                    Z = (0, O.useRef)(null),
                    $ = (0, O.useRef)(null),
                    Q = (0, O.useRef)(null),
                    J = (0, O.useRef)(null),
                    uu = (0, O.useRef)(),
                    eu = (0, O.useRef)(!1),
                    tu = (0, O.useRef)(!1),
                    nu = (0, O.useRef)(!1),
                    au = (0, G.default)(v.NUX.EPHEMERAL_VIEW_ONCE_RECEIVER),
                    iu = (0, i.default)(au, 2),
                    ou = iu[0],
                    ru = iu[1],
                    lu = Y.isViewOnce && ou,
                    su = (0, O.useState)((function() {
                        return K.mediaStage === p.MEDIA_DATA_STAGE.RESOLVED && u.isAnimatingIn && u.getZoomNode ? u.getZoomNode(Y.id) : null
                    })),
                    Du = (0, i.default)(su, 1)[0],
                    cu = (0, O.useState)(!1),
                    du = (0, i.default)(cu, 2),
                    fu = du[0],
                    Fu = du[1],
                    Cu = (0, O.useState)(!1),
                    Eu = (0, i.default)(Cu, 2),
                    pu = Eu[0],
                    hu = Eu[1],
                    Au = (0, O.useState)(!u.isAnimatingIn),
                    mu = (0, i.default)(Au, 2),
                    vu = mu[0],
                    gu = mu[1],
                    xu = (0, O.useState)(!1),
                    Bu = (0, i.default)(xu, 2),
                    bu = Bu[0],
                    ju = Bu[1],
                    Mu = (0, O.useState)(!1),
                    _u = (0, i.default)(Mu, 2),
                    yu = _u[0],
                    Su = _u[1],
                    ku = function() {
                        var u = (0, U.jsx)(I.default, {
                            isPhoto: K.type === E.default.TYPE.IMAGE,
                            onOkClick: function() {
                                ru(), h.ModalManager.close()
                            }
                        });
                        h.ModalManager.open(u)
                    },
                    Pu = (0, H.default)((function(u, e) {
                        if (!pu) {
                            var t = Z.current;
                            if (t) {
                                var n = t.getInsideContainer();
                                if (n && n instanceof HTMLElement) {
                                    var a = t.getOutsideContainer();
                                    if (a && a instanceof HTMLElement) {
                                        var i = t.getTranslatePosition(a, u, e),
                                            o = i.translateX,
                                            r = i.translateY;
                                        (0, j.default)(n, "stop"), (0, j.default)(n, {
                                            translateX: o,
                                            translateY: r,
                                            scale: T.ZOOM_IN_FACTOR
                                        }, {
                                            duration: 0
                                        })
                                    }
                                }
                            }
                        }
                    }));
                (0, O.useEffect)((function() {
                    return __LOG__(2)`MediaViewerModal: Opened`, lu && ku(), D.default.focus(J.current),
                        function() {
                            __LOG__(2)`MediaViewerModal: Closed`, Pu.cancel()
                        }
                }), []);
                var Tu, wu, Iu = function() {
                        Y.isViewOnce && (0, C.canMarkPlayed)(Y) && (0, C.markPlayed)(Y)
                    },
                    Nu = function(u) {
                        Iu(), t && t();
                        var e = Du,
                            a = u.target;
                        e && a && n && a instanceof HTMLElement && (nu.current || (nu.current = !0, function(u, e) {
                            var t, n = e.getBoundingClientRect(),
                                a = u.getBoundingClientRect(),
                                i = a.top - n.top,
                                o = a.left - n.left,
                                r = u.clientWidth / e.clientWidth;
                            i -= (e.clientHeight - u.clientHeight) / 2, o -= (e.clientWidth - u.clientWidth) / 2, (0, j.default)(e, {
                                opacity: [1, 0],
                                translateX: [0, o],
                                translateY: [0, i],
                                scale: [1, r]
                            }, {
                                duration: T.ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            });
                            var l = null === (t = Q.current) || void 0 === t ? void 0 : t.getElement();
                            l && (0, j.default)(l, {
                                opacity: [1, 0]
                            }, {
                                duration: T.ANIMATION_DURATION
                            })
                        }(e, a)))
                    },
                    Ru = function() {
                        var e;
                        if (!eu.current) {
                            eu.current = !0, (0, o.isFunction)(g) && g();
                            var t, n = u.getZoomNode && u.getZoomNode(Y.id);
                            if (!n) return z();
                            var a, i = K.type;
                            if ([E.default.TYPE.IMAGE, E.default.TYPE.STICKER].includes(i) && Z.current) t = Z.current.getInsideContainer(), null === (a = Z.current) || void 0 === a || a.closingMediaZoomable();
                            else if (K.isGif && $.current) {
                                var r;
                                t = $.current.getContainerElement(), null === (r = $.current) || void 0 === r || r.closingMedia()
                            }
                            if (!t) return z();
                            var l = t,
                                s = t.getBoundingClientRect(),
                                D = n.getBoundingClientRect(),
                                c = D.top - s.top,
                                d = D.left - s.left,
                                f = n.clientWidth / l.clientWidth;
                            c -= (l.clientHeight - n.clientHeight) / 2, d -= (l.clientWidth - n.clientWidth) / 2, (0, j.default)(t, {
                                translateX: [d, 0],
                                translateY: [c, 0],
                                scale: [f, 1]
                            }, {
                                duration: T.CLOSE_ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            }).then((function() {
                                z()
                            }));
                            var F = null === (e = Q.current) || void 0 === e ? void 0 : e.getElement();
                            F && (0, j.default)(F, {
                                opacity: [0, 1]
                            }, {
                                duration: T.CLOSE_ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            })
                        }
                    },
                    Ou = function(u) {
                        var e = Z.current;
                        u && e && (tu.current = e.getHeightOverflow() > 0 || e.getWidthOverflow() > 0), Fu(u), r(u)
                    },
                    Lu = function(u) {
                        u.stopPropagation(), ju(!bu)
                    };
                switch ((0, O.useEffect)((function() {
                        n || vu || !X || gu(!0)
                    }), [n, vu, X]), K.type) {
                    case E.default.TYPE.IMAGE:
                        Tu = (0, U.jsx)(_.default, {
                            msg: Y,
                            mediaData: K,
                            onLoad: Nu,
                            onImgZoomIn: Ou,
                            onAnnotationTooltipDisplay: function() {
                                hu(!0)
                            },
                            onAnnotationTooltipDismiss: function() {
                                hu(!1)
                            },
                            preventDownload: Y.isViewOnce,
                            ref: Z
                        }, Y.id.toString());
                        break;
                    case E.default.TYPE.STICKER:
                        Tu = (0, U.jsx)(k.default, {
                            msg: Y,
                            mediaData: K,
                            onLoad: Nu,
                            onImgZoomIn: Ou,
                            onStickerPackView: Ru,
                            stickerPackViewDelay: T.CLOSE_ANIMATION_DURATION,
                            ref: Z
                        }, Y.id.toString());
                        break;
                    case E.default.TYPE.VIDEO:
                        Tu = (0, U.jsx)(P.default, {
                            autoPlay: !lu,
                            msg: Y,
                            mediaData: K,
                            onLoadedData: K.isGif ? Nu : Iu,
                            startTime: u.startTime,
                            onClose: Ru,
                            ref: $
                        }, Y.id.toString());
                        break;
                    case E.default.TYPE.AUDIO:
                        Tu = (0, U.jsx)(M.default, {
                            mediaData: K,
                            msg: Y
                        }, Y.id.toString());
                        break;
                    default:
                        __LOG__(4, void 0, new Error, !0)`type: ${K.type}`, SEND_LOGS("MediaViewerModal: unexpected media type")
                }
                var Gu = u.msgIndexInAlbum >= 0 && u.albumSize >= 0;
                if (Y.caption || Gu) {
                    var Vu, Hu;
                    Gu && (Hu = F.default.t(505, {
                        number: u.msgIndexInAlbum + 1,
                        totalNumber: u.albumSize
                    }));
                    var Uu = c.Conversation({
                            mentions: Y.mentionMap(),
                            phoneNumbers: (0, m.getPhoneNumbersFromMsg)(Y),
                            links: (0, A.getLinksFromMsg)(Y),
                            trusted: !0,
                            fromMe: Y.id.fromMe
                        }),
                        zu = K.type === E.default.TYPE.IMAGE && !Y.isViewOnce,
                        qu = !vu && (K.isGif || zu);
                    wu = (0, U.jsxs)(U.Fragment, {
                        children: [(0, U.jsxs)("p", {
                            className: (0, R.default)(w.default.captionWrapper, (0, l.cx)((0, a.default)({}, w.default.captionWrapperExpandable, !0 === uu.current))),
                            onClick: uu.current ? Lu : void 0,
                            title: uu.current ? N.fbt._("Read more", null, {
                                hk: "2DvSvh"
                            }) : void 0,
                            "aria-hidden": bu || void 0,
                            children: [(0, U.jsx)(s.EmojiText, {
                                className: (0, R.default)(w.default.mediaCaption, (0, l.cx)((Vu = {}, (0, a.default)(Vu, w.default.captionHidden, qu), (0, a.default)(Vu, w.default.expanded, bu), Vu))),
                                formatters: Uu,
                                ref: function(u) {
                                    Q.current = u
                                },
                                text: Y.caption || Hu
                            }), uu.current && (0, U.jsx)(b.default, {
                                xstyle: [q.captionReadMoreBtn, bu && q.captionReadMoreBtnExpanded, fu && q.captionReadMoreBtnZoomed],
                                onClick: Lu,
                                children: (0, U.jsx)(x.TextSpan, {
                                    children: N.fbt._("Read more", null, {
                                        hk: "2DvSvh"
                                    })
                                })
                            })]
                        }), bu && (0, U.jsx)("p", {
                            className: (0, R.default)(w.default.captionWrapper, w.default.captionWrapperExpandable, w.default.captionExpanded),
                            onClick: Lu,
                            children: (0, U.jsx)(s.EmojiText, {
                                className: (0, R.default)(w.default.mediaCaption, w.default.mediaCaptionExpanded),
                                formatters: Uu,
                                text: Y.caption
                            })
                        })]
                    })
                }
                var Yu = (0, R.default)(w.default.media, (0, l.cx)((0, a.default)({}, w.default.mediaWithCaption, !!wu))),
                    Wu = (0, R.default)("overlay", w.default.mediaViewer, (0, l.cx)((e = {}, (0, a.default)(e, w.default.noThumbnails, Y.isViewOnce || Y.isStickerMsg), (0, a.default)(e, w.default.mediaViewerAnimate, u.isAnimatingIn), (0, a.default)(e, w.default.cursorZoomOut, fu), e))),
                    Ku = fu && tu.current ? function(u) {
                        Pu(u.pageX, u.pageY)
                    } : null,
                    Xu = fu ? function(u) {
                        Pu.cancel();
                        var e = Z.current;
                        e && fu && e.onClick(u)
                    } : null,
                    Zu = fu ? null : Ru;
                null != Zu && Y.isViewOnce && (Zu = function() {
                    Su(!0)
                });
                var $u = !Y.isViewOnce && !Y.isStickerMsg;
                return (0, U.jsx)(B.UIE, {
                    displayName: "MediaViewer",
                    escapable: !0,
                    requestDismiss: Ru,
                    children: (0, U.jsx)(f.HotKeys, {
                        handlers: {
                            space: function(u) {
                                if (!n) {
                                    Pu.cancel();
                                    var e = Z.current;
                                    null != e && e.onKeyboardZoom(u)
                                }
                            }
                        },
                        ref: J,
                        children: (0, U.jsxs)("div", {
                            className: Wu,
                            "data-animate-media-viewer": !0,
                            "data-testid": "media-viewer-modal",
                            onClick: Xu,
                            onMouseMove: Ku,
                            children: [(0, U.jsx)(y.default, {
                                isHighlightClose: yu,
                                msg: Y,
                                mediaData: K,
                                onClose: Ru,
                                onHightlightCloseEnd: function() {
                                    Su(!1)
                                },
                                onViewOnceInfoClick: function() {
                                    ku()
                                },
                                msgIndexInAlbum: u.msgIndexInAlbum
                            }), (0, U.jsx)("div", {
                                className: (0, R.default)(w.default.mediaContent, (0, l.cx)((0, a.default)({}, w.default.sticker, Y.isStickerMsg))),
                                onClick: Zu,
                                children: (0, U.jsx)(W, {
                                    hasNavigationButtons: $u,
                                    onNext: u.onNext,
                                    onPrev: u.onPrev,
                                    imgZoomed: fu,
                                    children: (0, U.jsxs)("div", {
                                        className: Yu,
                                        children: [(0, U.jsx)(S.default, {
                                            msg: Y,
                                            mediaData: K
                                        }), Tu, (0, U.jsx)(d.default.Provider, {
                                            value: Y.chat.groupMetadata,
                                            children: wu
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                })
            };
            var a = n(t(859713)),
                i = n(t(963038)),
                o = t(689121),
                r = t(151508),
                l = t(157405),
                s = t(990055),
                D = n(t(81724)),
                c = function(u, e) {
                    if (!e && u && u.__esModule) return u;
                    if (null === u || "object" != typeof u && "function" != typeof u) return {
                        default: u
                    };
                    var t = z(e);
                    if (t && t.has(u)) return t.get(u);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in u)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(u, i)) {
                            var o = a ? Object.getOwnPropertyDescriptor(u, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = u[i]
                        } n.default = u, t && t.set(u, n);
                    return n
                }(t(924309)),
                d = n(t(693213)),
                f = t(704250),
                F = n(t(758927)),
                C = t(223822),
                E = n(t(719703)),
                p = t(966454),
                h = t(628707),
                A = t(359018),
                m = t(819781),
                v = t(171738),
                g = t(659696),
                x = t(558288),
                B = t(776097),
                b = n(t(83938)),
                j = n(t(931771)),
                M = n(t(232543)),
                _ = n(t(357223)),
                y = n(t(658076)),
                S = n(t(922246)),
                k = n(t(838235)),
                P = n(t(343113)),
                T = t(74253),
                w = n(t(380674)),
                I = n(t(240634)),
                N = t(548360),
                R = n(t(706442)),
                O = t(667294),
                L = (n(t(156720)), t(948752)),
                G = n(t(505903)),
                V = n(t(121766)),
                H = n(t(32594)),
                U = t(785893);

            function z(u) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    t = new WeakMap;
                return (z = function(u) {
                    return u ? t : e
                })(u)
            }
            var q = {
                captionReadMoreBtn: {
                    position: "lhggkp7q",
                    end: "h223g3sc",
                    bottom: "jxacihee",
                    paddingTop: "ppypbuwx",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "przvwfww",
                    paddingStart: "nu34rnf1",
                    backgroundColor: "idmi9oma",
                    borderTopStartRadius: "ho9ovbg7",
                    borderTopEndRadius: "tcg15ap9",
                    borderBottomEndRadius: "c5wy1lv0",
                    borderBottomStartRadius: "bqysl6j9",
                    boxShadow: "a95fzlb5"
                },
                captionReadMoreBtnExpanded: {
                    visibility: "kojwoqec"
                },
                captionReadMoreBtnZoomed: {
                    visibility: "kqpkm0zi",
                    opacity: "lxctpz5v"
                }
            };

            function Y(u) {
                null == u || u.stopPropagation()
            }

            function W(u) {
                var e, t, n, a;
                return (0, U.jsxs)(U.Fragment, {
                    children: [u.hasNavigationButtons && (0, U.jsx)("div", {
                        className: (0, R.default)(w.default.btnMediaPrev),
                        children: (0, U.jsx)("div", {
                            onClick: u.onPrev ? null : Y,
                            children: (0, U.jsx)(r.ChevronButton, {
                                type: r.ButtonType.Prev,
                                onClick: null !== (e = u.onPrev) && void 0 !== e ? e : void 0,
                                onKeyDown: null !== (t = u.onPrev) && void 0 !== t ? t : void 0,
                                disabled: !u.onPrev || u.imgZoomed,
                                theme: g.RoundTheme.Default
                            })
                        })
                    }), u.children, u.hasNavigationButtons && (0, U.jsx)("div", {
                        className: (0, R.default)(w.default.btnMediaNext),
                        children: (0, U.jsx)("div", {
                            onClick: u.onPrev ? null : Y,
                            children: (0, U.jsx)(r.ChevronButton, {
                                type: r.ButtonType.Next,
                                onClick: null !== (n = u.onNext) && void 0 !== n ? n : void 0,
                                onKeyDown: null !== (a = u.onNext) && void 0 !== a ? a : void 0,
                                disabled: !u.onNext || u.imgZoomed,
                                theme: g.RoundTheme.Default
                            })
                        })
                    })]
                })
            }
        },
        297472: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.mediaMsgs,
                    t = u.onScroll,
                    n = (0, s.useRef)({}),
                    o = function() {
                        var u = new Map;
                        return e.forEach((function(e) {
                            var t = e.id.toString();
                            u.set(t, function(u) {
                                var e = n.current[u];
                                if (!e) return !1;
                                var t = e.getBoundingClientRect(),
                                    a = (t.left + t.right) / 2;
                                return !(a > -1 * window.innerWidth && a < 2 * window.innerWidth)
                            }(t))
                        })), u
                    },
                    r = (0, s.useState)(o),
                    f = (0, a.default)(r, 2),
                    F = f[0],
                    C = f[1],
                    E = (0, D.default)((function() {
                        var u = o();
                        (0, i.default)(F, u) || C(u)
                    }), 100);
                return (0, c.jsx)("div", {
                    className: l.default.thumbsContainer,
                    ref: u.setRefThumbsContainer,
                    children: (0, c.jsx)("div", {
                        className: l.default.scrollContainer,
                        dir: "ltr",
                        children: (0, c.jsx)("div", {
                            onScroll: function(u) {
                                E(), t(u)
                            },
                            className: l.default.viewerThumbs,
                            ref: u.setRefThumbs,
                            children: (0, c.jsx)(d, {
                                mediaMsgs: e,
                                highlightedMsgIds: u.highlightedMsgIds,
                                activeMsg: u.activeMsg,
                                onSetActiveThumb: u.onSetActiveThumb,
                                onSelectThumb: u.onSelectThumb,
                                msgIdToPreferPreview: F
                            })
                        })
                    })
                })
            };
            var a = n(t(963038)),
                i = n(t(350327)),
                o = t(21761),
                r = t(96293),
                l = n(t(276479)),
                s = t(667294),
                D = n(t(32594)),
                c = t(785893);

            function d(u) {
                var e = u.mediaMsgs,
                    t = u.highlightedMsgIds,
                    n = u.activeMsg,
                    a = u.onSetActiveThumb,
                    i = u.onSelectThumb,
                    D = u.msgIdToPreferPreview,
                    d = (0, s.useRef)({}),
                    f = t && t.size > 0 && t.has(n.id.toString()),
                    F = [];
                return e.forEach((function(u) {
                    if (null != u.mediaData) {
                        var e = f && t && !t.has(u.id.toString()) ? "viewerFlowTransparent" : "viewerFlow";
                        F.push((0, c.jsx)(o.MediaThumb, {
                            theme: e,
                            active: u === n,
                            msg: u,
                            containerRef: function(e) {
                                ! function(u, e) {
                                    d.current[e] = u
                                }(e, u.id.toString()), u === n && a(e)
                            },
                            onClick: function() {
                                i(u)
                            },
                            preferPreview: !!D.get(u.id.toString()),
                            showTooltip: u.isGroupMsg
                        }, `media-${u.id.id}`))
                    } else {
                        var r = n;
                        __LOG__(3, !0)`MediaViewerFlow: attempted to render a msg without mediaData: ${JSON.stringify({type:u.type,isMedia:u.isMedia,startMsgType:r.type,startMsgIsMedia:r.isMedia})}`
                    }
                })), F.push((0, c.jsx)("div", {
                    className: l.default.mediaThumb,
                    children: e.queryMediaAfter ? (0, c.jsx)(r.Spinner, {
                        stroke: 6,
                        size: 24
                    }) : null
                }, "spinner-right")), F.unshift((0, c.jsx)("div", {
                    className: l.default.mediaThumb,
                    children: e.queryMediaBefore ? (0, c.jsx)(r.Spinner, {
                        stroke: 6,
                        size: 24
                    }) : null
                }, "spinner-left")), F.push((0, c.jsx)("div", {
                    className: l.default.thumbPadding
                }, "padding-right")), F.unshift((0, c.jsx)("div", {
                    className: l.default.thumbPadding
                }, "padding-left")), (0, c.jsx)(c.Fragment, {
                    children: F
                })
            }
        },
        240634: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.onOkClick;
                return (0, F.jsx)(c.ConfirmPopup, {
                    onOK: e,
                    cancelText: l.default.t(393),
                    onCancel: function() {
                        (0, a.openExternalLink)((0, i.getViewOnceFaqUrl)())
                    },
                    children: (0, F.jsxs)(o.FlexColumn, {
                        children: [(0, F.jsx)(r.default, {
                            xstyle: C.graphic,
                            align: "center",
                            children: (0, F.jsx)(D.ViewOnceSenderNuxIcon, {
                                width: 195,
                                height: 177
                            })
                        }), (0, F.jsx)(s.TextHeader, {
                            className: (0, f.default)(C.text),
                            theme: "popup-title",
                            children: u.isPhoto ? d.fbt._("This photo is set to view once", null, {
                                hk: "2H7aHc"
                            }) : d.fbt._("This video is set to view once", null, {
                                hk: "1w8WFf"
                            })
                        }), (0, F.jsx)(s.TextParagraph, {
                            className: (0, f.default)(C.text),
                            children: u.isPhoto ? d.fbt._("For more privacy, this photo will disappear after you close it.", null, {
                                hk: "1XZPqi"
                            }) : d.fbt._("For more privacy, this video will disappear after you close it.", null, {
                                hk: "3YgUHE"
                            })
                        })]
                    })
                })
            };
            var a = t(192070),
                i = t(212390),
                o = t(208188),
                r = n(t(644178)),
                l = n(t(758927)),
                s = t(558288),
                D = t(415443),
                c = t(404186),
                d = t(548360),
                f = n(t(156720)),
                F = t(785893),
                C = {
                    text: {
                        marginBottom: "or9x5nie"
                    },
                    graphic: {
                        marginBottom: "t4zgqcuo"
                    }
                }
        },
        381210: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t, n = (0, D.useState)(!1),
                    F = (0, a.default)(n, 2),
                    C = F[0],
                    E = F[1];
                u.isBusiness ? (e = s.fbt._("This message will be forwarded to WhatsApp. This business will not be notified.", null, {
                    hk: "1N7YEc"
                }), t = s.fbt._("Block business", null, {
                    hk: "3hFIF3"
                })) : (e = s.fbt._("This message will be forwarded to WhatsApp. This contact will not be notified.", null, {
                    hk: "2qS1tP"
                }), t = s.fbt._("Block contact", null, {
                    hk: "41X9mL"
                }));
                return (0, d.jsxs)(l.ConfirmPopup, {
                    onOK: function() {
                        u.onReport(C)
                    },
                    okText: s.fbt._("Report", null, {
                        hk: "18ssTb"
                    }),
                    onCancel: u.onCancel,
                    title: u.title,
                    children: [(0, d.jsxs)("div", {
                        className: (0, c.default)(f.section, r.uiMargin.top12, r.uiMargin.end0, f.border),
                        children: [(0, d.jsx)(i.CheckBox, {
                            onChange: function() {
                                return E((function(u) {
                                    return !u
                                }))
                            },
                            checked: C,
                            id: "menu-icon-report-spam"
                        }), (0, d.jsx)(o.TextLabel, {
                            xstyle: f.checkboxLabel,
                            htmlFor: "menu-icon-report-spam",
                            children: t
                        })]
                    }), (0, d.jsx)(o.TextParagraph, {
                        xstyle: f.section,
                        color: "muted",
                        children: e
                    })]
                })
            };
            var a = n(t(963038)),
                i = t(877407),
                o = t(558288),
                r = t(726984),
                l = t(404186),
                s = t(548360),
                D = t(667294),
                c = n(t(156720)),
                d = t(785893),
                f = {
                    section: {
                        marginBottom: "t4zgqcuo"
                    },
                    checkboxLabel: {
                        marginStart: "fooq7fky"
                    },
                    border: {
                        paddingBottom: "dledyozo",
                        borderBottom: "j4zbmt6h"
                    }
                }
        },
        753643: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = a.ChatCollection.getActive();
                (0, d.useEffect)((function() {
                    u.entryPoint && (0, s.logPnhRequestRevealActionHelper)(l.default.PNH_CHAT_TYPE_TYPE.CTWA, l.default.PNH_MESSAGE_CHAT_PARTY.BIZ, l.default.PNH_ACTION_TYPE.REQUEST_DIALOG_APPEAR, u.entryPoint)
                }), [u.entryPoint]);
                var t = c.fbt._("Request phone number?", null, {
                        hk: "1BOtdo"
                    }),
                    n = c.fbt._("This person's phone number is not shared in this chat. You can request for their phone number if you'd like to save them to your contacts.", null, {
                        hk: "3SHZ6I"
                    }),
                    F = c.fbt._("Send Request", null, {
                        hk: "4tsuDY"
                    }),
                    C = c.fbt._("Cancel", null, {
                        hk: "37A1CY"
                    });
                return (0, f.jsx)(D.ConfirmPopup, {
                    onOK: function() {
                        e && ((0, o.sendRequestPhoneNumber)((0, r.unproxy)(e)), (0, s.logPnhRequestRevealActionHelper)(l.default.PNH_CHAT_TYPE_TYPE.CTWA, l.default.PNH_MESSAGE_CHAT_PARTY.BIZ, l.default.PNH_ACTION_TYPE.SEND_REQUEST, l.default.PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST)), i.ModalManager.close()
                    },
                    okText: F,
                    onCancel: function() {
                        return i.ModalManager.close()
                    },
                    cancelText: C,
                    title: t,
                    children: n
                })
            };
            var a = t(797378),
                i = t(628707),
                o = t(341978),
                r = t(121657),
                l = n(t(229677)),
                s = t(164751),
                D = t(404186),
                c = t(548360),
                d = t(667294),
                f = t(785893)
        },
        38538: (u, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                default: () => n
            });
            const n = {
                msg: "_7Upvn",
                text: "_3Q6VG",
                bubble: "_3cupO",
                author: "LldYr",
                hasSuspiciousLinks: "_1BEFs",
                hasAuthor: "_28v58",
                suspiciousLabel: "_1kBNA"
            }
        },
        585845: (u, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                default: () => n
            });
            const n = {
                footerNote: "_2v7h3",
                getTheAppLink: "f20SI"
            }
        },
        202256: (u, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                default: () => n
            });
            const n = {
                wrapper: "_3KBDs",
                code: "_2ZlC0",
                codeDarkMode: "_2LUvK",
                codeLogo: "_3TIEq"
            }
        },
        449103: (u, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                default: () => n
            });
            const n = {
                businessHoursRow: "_1yCy2",
                firstRow: "_2n4C_",
                businessHoursDay: "_3E1wD",
                businessHoursHours: "_1KuI5",
                dayIsOpen: "_3QSVU",
                businessHoursChevron: "tdvlj",
                flipSvg: "_3U46z"
            }
        },
        646311: (u, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                default: () => n
            });
            const n = {
                section: "_2piwD",
                description: "_3wQ4p",
                map: "wjX1S"
            }
        },
        652898: (u, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                default: () => n
            });
            const n = {
                contactBusinessInfo: "_-3uPc",
                contactBusinessInfoSpinner: "i0l32",
                dataRow: "_27Am0",
                businessHoursRow: "pHhe2",
                businessHoursDay: "_37D6O",
                businessHoursHours: "_1Fkkg",
                businessHoursChevron: "PfSJW",
                flipSvg: "kphWe",
                dataRowIcon: "_1utXv",
                dataRowText: "_8jzcs",
                businessTitleText: "_1_m2f",
                businessMap: "uTGlN",
                address: "_3gira",
                link: "sdA8C",
                infoIcon: "_2GuY5"
            }
        },
        179741: (u, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                default: () => n
            });
            const n = {
                mediaViewerPlaceholder: "nehFG",
                imageAudio: "_2OreO",
                mediaViewerAudio: "_1alR8"
            }
        },
        276479: (u, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                default: () => n
            });
            const n = {
                thumbsContainer: "_1XWMx",
                scrollContainer: "_1MhXb",
                viewerThumbs: "_1FS45",
                mediaThumb: "_52crR",
                thumbPadding: "_1833d"
            }
        }
    }
]);