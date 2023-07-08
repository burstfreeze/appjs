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
        809374: (u, e, t) => {
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
                d = t(125089),
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
        581792: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = function(u) {
                        switch (u.verifiedLevel) {
                            case a.VERIFIED_LEVEL.HIGH:
                                return u.name === u.verifiedName ? s.default.t(665, {
                                    businessName: u.verifiedName
                                }) : s.default.t(666, {
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
        436115: (u, e, t) => {
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
                    x && new F.default.BannerEvent({
                        bannerType: F.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                        bannerOperation: F.default.BANNER_OPERATIONS.SHOWN
                    }).commit()
                }), [x]);
                var B = n === a.VERIFIED_LEVEL.HIGH ? D.default.t(776, {
                    businessName: v
                }) : p.fbt._("This business uses WhatsApp Business, which allows them to add their opening hours, address, website and catalog of products or services.", null, {
                    hk: "82W5f"
                });
                return (0, m.jsxs)(E.ConfirmPopup, {
                    title: p.fbt._("About WhatsApp Business", null, {
                        hk: "3XF5gx"
                    }),
                    onOK: function() {
                        c.ModalManager.close(), x && new F.default.BannerEvent({
                            bannerType: F.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: F.default.BANNER_OPERATIONS.DISMISS
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
                        className: C.default.footerNote,
                        children: (0, m.jsxs)(f.TextSpan, {
                            theme: "muted",
                            size: "13",
                            children: [p.fbt._("If you're a business, the free WhatsApp Business app can help.", null, {
                                hk: "14W7ur"
                            }), (0, m.jsx)("br", {}), (0, m.jsx)(i.default, {
                                onClick: function(u) {
                                    u.preventDefault(), c.ModalManager.close(), new F.default.BannerEvent({
                                        bannerType: F.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                                        bannerOperation: F.default.BANNER_OPERATIONS.CLICK
                                    }).commit(), setTimeout((function() {
                                        return c.ModalManager.open((0, m.jsx)(d.SmbAppUpsellModal, {}))
                                    }), 200)
                                },
                                className: C.default.getTheAppLink,
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
                o = t(500204),
                r = t(990055),
                l = t(192070),
                s = t(212390),
                D = n(t(758927)),
                c = t(628707),
                d = t(838183),
                f = t(558288),
                F = n(t(229677)),
                C = n(t(518249)),
                E = t(404186),
                p = t(548360),
                h = t(667294),
                A = t(948752),
                m = t(785893)
        },
        838183: (u, e, t) => {
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
                        new D.default.BannerEvent({
                            bannerType: D.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: D.default.BANNER_OPERATIONS.DISMISS
                        }).commit(), l.ModalManager.close()
                    },
                    okText: d.fbt._("Close", null, {
                        hk: "19Jpec"
                    }),
                    children: [(0, f.jsx)(s.default, {}), (0, f.jsx)("p", {
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
                s = n(t(514259)),
                D = n(t(229677)),
                c = t(404186),
                d = t(548360),
                f = t(785893),
                F = "https://www.whatsapp.com/business";
            e.WHATSAPP_BUSINESS_URL = F
        },
        514259: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
                var u, e = (0, D.useRef)(null),
                    t = (0, D.useRef)(null),
                    n = (0, D.useContext)(r.ThemeContext).theme,
                    f = "dark" === n;
                return (0, D.useEffect)((function() {
                    return null != e.current && (t.current = new l.default(e.current, {
                            text: "https://www.whatsapp.com/business/download",
                            colorDark: "#122e31",
                            colorLight: "#ffffff",
                            width: o.QR_EDGE / 2,
                            height: o.QR_EDGE / 2,
                            typeNumber: 4,
                            correctLevel: l.default.CorrectLevel.H
                        })),
                        function() {
                            null != t.current && (t.current.clear(), t.current = null, e.current = null)
                        }
                }), [f]), (0, c.jsx)("div", {
                    className: s.default.wrapper,
                    children: (0, c.jsx)("div", {
                        ref: e,
                        className: (0, i.cx)((u = {}, (0, a.default)(u, s.default.codeDarkMode, f), (0, a.default)(u, s.default.code, !0), u)),
                        children: (0, c.jsx)(d, {
                            theme: n
                        })
                    })
                })
            };
            var a = n(t(859713)),
                i = t(157405),
                o = t(295769),
                r = t(397065),
                l = n(t(637360)),
                s = n(t(815120)),
                D = t(667294),
                c = t(785893);

            function d() {
                return (0, c.jsx)("div", {
                    className: s.default.codeLogo,
                    children: (0, c.jsx)("svg", {
                        width: "100%",
                        viewBox: "0 0 50 50",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, c.jsx)("path", {
                            d: "M42.6776 42.6779C37.9558 47.3997 31.6777 50.0001 24.9999 50.0001C21.0047 50.0001 17.0541 49.0389 13.5244 47.2141L0.601068 49.3339L2.72832 36.3645C0.941278 32.8647 0 28.9525 0 25.0001C0 18.3223 2.60042 12.0443 7.32229 7.32237C12.0442 2.6005 18.3221 0 24.9999 0C31.6777 0 37.9558 2.6005 42.6776 7.32237C47.3995 12.0443 50 18.3223 50 25.0001C50 31.678 47.3995 37.9558 42.6776 42.6779ZM24.9999 4.33778C13.6067 4.33778 4.33772 13.607 4.33772 25.0001C4.33772 28.4792 5.21935 31.9192 6.8868 34.9487L7.24853 35.6054L5.85915 44.0756L14.2959 42.6918L14.9565 43.0601C18.0107 44.7624 21.4837 45.6622 24.9999 45.6622C36.3932 45.6622 45.6622 36.3933 45.6622 25.0001C45.6622 13.607 36.3932 4.33778 24.9999 4.33778ZM31.1133 24.3614C32.4522 24.9804 34.1536 26.3725 34.1208 29.3117C34.0749 33.4266 31.2191 35.6542 27.2744 35.6542H19.4594H18.3042C17.5079 35.6542 16.8645 35.0053 16.8713 34.2092L17.0344 15.0573C17.041 14.2714 17.6794 13.6377 18.4652 13.6366L27.1493 13.6256C31.4651 13.6256 33.9598 16.039 33.9177 19.8134C33.8903 22.2579 32.2484 23.8355 31.1133 24.3614ZM26.766 17.4622H21.3643L21.3076 22.5361H26.7093C28.5347 22.5361 29.5672 21.5152 29.584 19.9992C29.6009 18.4831 28.5915 17.4622 26.766 17.4622ZM26.9444 26.4035H21.2643L21.2038 31.8178H26.884C28.8333 31.8178 29.7752 30.5802 29.792 29.0952C29.8085 27.6101 28.8939 26.4035 26.9444 26.4035Z",
                            fill: "currentColor"
                        })
                    })
                })
            }
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
            }), e.BaseEphemeralSettingRow = v, e.EphemeralSettingRow = function(u) {
                var e = u.chat,
                    t = u.groupMetadata,
                    n = u.onClick,
                    a = u.testid;
                if (t) return (0, h.jsx)(A, {
                    groupMetadata: t,
                    onClick: n,
                    testid: a
                });
                return (0, h.jsx)(m, {
                    chat: e,
                    onClick: n,
                    testid: a
                })
            };
            var a = t(994356),
                i = n(t(167740)),
                o = t(538431),
                r = t(242793),
                l = n(t(758927)),
                s = t(628707),
                D = t(401304),
                c = t(558288),
                d = t(61771),
                f = t(173725),
                F = t(382467),
                C = t(404186),
                E = t(548360),
                p = t(948752),
                h = t(785893);

            function A(u) {
                var e, t = u.onClick,
                    n = u.testid,
                    a = (0, p.useModelValues)(u.groupMetadata, ["ephemeralDuration", "participants"]),
                    i = function() {
                        s.ModalManager.close()
                    };
                return (0, h.jsx)(v, {
                    ephemeralDuration: null !== (e = a.ephemeralDuration) && void 0 !== e ? e : 0,
                    canChange: a.canSetEphemeralSetting(),
                    onClick: function() {
                        a.canSetEphemeralSetting() ? t() : s.ModalManager.open((0, h.jsx)(C.ConfirmPopup, {
                            onOK: i,
                            okText: E.fbt._("OK", null, {
                                hk: "2KEeHb"
                            }),
                            children: E.fbt._("Only admins can change this setting.", null, {
                                hk: "1NF1gS"
                            })
                        }))
                    },
                    testid: n
                })
            }

            function m(u) {
                var e = u.onClick,
                    t = u.testid,
                    n = (0, p.useModelValues)(u.chat, ["contact", "ephemeralDuration"]),
                    i = function() {
                        var u;
                        return null !== (u = n.ephemeralDuration) && void 0 !== u ? u : 0
                    },
                    o = function() {
                        n.contact.addPendingAction((0, a.unblockContact)(n.contact)).then((function() {
                            e(), s.ModalManager.close()
                        })).catch((function() {}))
                    },
                    r = function() {
                        s.ModalManager.close()
                    };
                return (0, h.jsx)(v, {
                    ephemeralDuration: i(),
                    canChange: !0,
                    onClick: function() {
                        n.contact.isContactBlocked ? s.ModalManager.open((0, h.jsx)(C.ConfirmPopup, {
                            onOK: o,
                            okText: E.fbt._("Unblock", null, {
                                hk: "hnS4w"
                            }),
                            onCancel: r,
                            children: i() ? E.fbt._("You can't turn off disappearing messages for this chat unless you unblock this contact.", null, {
                                hk: "o3zdA"
                            }) : E.fbt._("You can't turn on disappearing messages for this chat unless you unblock this contact.", null, {
                                hk: "1uAyoI"
                            })
                        })) : e()
                    },
                    testid: t
                })
            }

            function v(u) {
                var e, t = u.ephemeralDuration,
                    n = u.canChange,
                    a = u.onClick,
                    s = u.testid;
                e = t > 0 ? n ? (0, r.durationToLabel)(t) : (0, f.isKeepInChatVisibleUIEnabled)() ? (0, d.getDisappearingMessageExplanationStringKic)(t) : (0, F.getDisappearingMessageExplanationString)(t) : l.default.t(292);
                var C = (0, h.jsx)(c.TextSpan, {
                        theme: "title",
                        children: E.fbt._("Disappearing messages", null, {
                            hk: "384ocn"
                        })
                    }),
                    p = (0, h.jsx)(c.TextDiv, {
                        theme: "muted",
                        testid: "chat-dm-settings-item-value",
                        children: e
                    }),
                    A = (0, h.jsx)(o.DisappearingIcon, {
                        color: D.SvgColorProp.SECONDARY,
                        height: 20
                    });
                return (0, h.jsx)(i.default, {
                    side: "chevron",
                    icon: A,
                    onClick: a,
                    title: C,
                    secondaryTitle: p,
                    testid: s
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
                var y = B ? function(u, e) {
                        return M.current.filter(u, b, e)
                    } : void 0,
                    S = (u.linkMsgs, u.chat, u.filterText, u.isFilterEnabled, (0, o.default)(u, m));
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
                        filterMessages: y
                    }, S)), (0, A.jsx)(l.HistorySyncGalleryPlaceholder, {
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
                d = t(362974),
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
                    j = u.selectedMessages,
                    M = u.onMessageSelect,
                    y = u.onClickMsg,
                    S = u.testid,
                    _ = (0, B.useModelValues)(u.msg, ["body", "caption", "dir", "id", "isSentByMe", "mediaData", "type", "rtl", "senderObj", "star", "mediaData", "asRevoked", "isKept"]),
                    k = (0, g.useState)(!1),
                    P = (0, i.default)(k, 2),
                    w = P[0],
                    T = P[1],
                    I = (0, g.useState)((function() {
                        return j.isSelected(_.unsafe())
                    })),
                    N = (0, i.default)(I, 2),
                    R = N[0],
                    O = N[1];
                (0, x.useListener)(j, _.id.toString(), (function(u) {
                    R !== u && O(u)
                }));
                var L = u.selectable || w ? (0, b.jsx)(C.default, {
                        checked: R,
                        onClick: function(u) {
                            u && u.stopPropagation(), M(_.unsafe(), !R)
                        },
                        msgTheme: "gallery"
                    }) : null,
                    G = (0, D.Conversation)({
                        mentions: _.mentionMap(),
                        groupMentions: _.groupMentionMap(),
                        links: (0, E.getLinksFromMsg)(_.unsafe()),
                        phoneNumbers: (0, h.getPhoneNumbersFromMsg)(_.unsafe()),
                        selectable: true,
                        trusted: (0, p.isTrusted)(_.unsafe()),
                        fromMe: _.id.fromMe
                    }),
                    V = _.body && _.body.includes(t.url) ? _.body : _.caption,
                    H = n ? (0, b.jsx)("div", {
                        className: v.default.author,
                        children: (0, b.jsx)(F.default, {
                            msg: _,
                            contact: _.senderObj
                        })
                    }) : null,
                    U = (0, E.getSuspiciousLinks)(_.unsafe()).length > 0;
                return (0, b.jsx)(c.default, {
                    hover: w,
                    onClick: function() {
                        y(_.unsafe(), !R)
                    },
                    onMouseEnter: w ? null : function() {
                        w || T(!0)
                    },
                    onMouseOver: w ? null : function() {
                        w || T(!0)
                    },
                    onMouseLeave: w ? function() {
                        w && T(!1)
                    } : null,
                    testid: S,
                    children: (0, b.jsxs)("div", {
                        className: v.default.msg,
                        "data-testid": "link-msg",
                        children: [(0, b.jsx)(A.default, {
                            transitionName: "delay-leave",
                            children: L
                        }), (0, b.jsx)(m.MessageContainer, {
                            isSentByMe: _.isSentByMe,
                            children: (0, b.jsxs)("div", {
                                className: (0, r.cx)((e = {}, (0, a.default)(e, v.default.hasAuthor, n), (0, a.default)(e, v.default.hasSuspiciousLinks, U), (0, a.default)(e, v.default.bubble, !0), e)),
                                children: [H, (0, b.jsx)(o.SuspiciousLabel, {
                                    link: t,
                                    displayType: l.DISPLAY_TYPE.GALLERY
                                }), (0, b.jsx)(f.default, {
                                    title: t.url,
                                    isSentByMe: _.isSentByMe,
                                    canonicalUrl: t.domain,
                                    displayType: l.DISPLAY_TYPE.GALLERY,
                                    star: _.star,
                                    kept: _.isKept
                                }), (0, b.jsx)(s.EmojiText, {
                                    text: V,
                                    selectable: true,
                                    className: v.default.text,
                                    dirMismatch: _.rtl !== d.default.isRTL(),
                                    direction: _.dir,
                                    formatters: G
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
                E = t(362974),
                p = t(754333),
                h = t(915178),
                A = n(t(904847)),
                m = t(144495),
                v = n(t(38538)),
                g = t(667294),
                x = t(779740),
                B = t(948752),
                b = t(785893)
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
                    y = u.emptyText,
                    S = u.scrollOffset,
                    _ = void 0 === S ? 0 : S,
                    k = u.selectable,
                    P = u.onMessageSelect,
                    w = u.queryCollection,
                    T = u.selectedMessages,
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
                        G && w(u)
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
                    return u && (u.scrollTop = _),
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
                        selectedMessages: T,
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
                    text: y,
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
                s = t(377748),
                D = t(896674),
                c = t(241941),
                d = t(544607),
                f = a(t(399447)),
                F = t(295769),
                C = a(t(598393)),
                E = t(378776),
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
                var e = (0, h.useModelValues)(u.chat, ["id", "isGroup", "muteExpiration", "archive", "isPSA", "isNewsletter"]),
                    t = (0, h.useModelValues)(u.mute, ["isMuted"]),
                    n = (0, h.useModelValues)(u.settings, ["showArchiveV2"]),
                    m = function(u) {
                        e.isPSA ? o.Cmd.muteChatFromEntryPoint((0, d.unproxy)(e), u, 2) : o.Cmd.muteChat((0, d.unproxy)(e), u)
                    },
                    v = function() {
                        m(!1), D.ModalManager.close()
                    },
                    g = t.isMuted,
                    x = e.muteExpiration;
                if (e.archive && (0, s.archiveV2Supported)() && n.showArchiveV2) return (0, A.jsx)(r.default, {
                    children: (0, A.jsx)(C.TextSpan, {
                        theme: "muted",
                        size: "16",
                        children: p.fbt._("Archived chats are muted", null, {
                            hk: "31ZVD"
                        })
                    })
                });
                var B, b = g ? function() {
                        var u = e.isGroup ? l.default.t(206) : l.default.t(205);
                        D.ModalManager.open((0, A.jsx)(E.ConfirmPopup, {
                            onOK: v,
                            okText: l.default.t(39),
                            onCancel: function() {
                                return D.ModalManager.close()
                            },
                            cancelText: p.fbt._("Cancel", null, {
                                hk: "H0gNq"
                            }),
                            children: u
                        }))
                    } : function() {
                        m(!0)
                    },
                    j = g ? l.default.t(673) : p.fbt._("Mute notifications", null, {
                        hk: "2Fm15X"
                    });
                if (g && x && !e.isNewsletter) {
                    var M = i.Clock.untilStr(x);
                    B = (0, A.jsx)(C.TextDiv, {
                        theme: "muted",
                        children: M
                    })
                }
                var y = (0, A.jsx)(F.Switch, {
                        checked: g,
                        onChange: b
                    }),
                    S = (0, A.jsx)(C.TextSpan, {
                        theme: "title",
                        children: j
                    }),
                    _ = (0, A.jsx)(c.SettingsNotificationsIcon, {
                        color: f.SvgColorProp.SECONDARY,
                        height: 20
                    });
                return (0, A.jsx)(a.default, {
                    icon: _,
                    testid: "block-mute",
                    side: y,
                    onClick: b,
                    title: S,
                    secondaryTitle: B
                })
            };
            var a = n(t(167740)),
                i = t(87330),
                o = t(896674),
                r = n(t(209222)),
                l = n(t(758927)),
                s = t(518005),
                D = t(628707),
                c = t(59537),
                d = t(378776),
                f = t(401304),
                F = t(494594),
                C = t(558288),
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
                    w = u.onMessageSelect,
                    T = u.theme,
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
                    q = (0, _.default)(),
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
                    }(V, e, P, t, w, "chat-info" === T),
                    Z = (0, S.default)(),
                    $ = (0, y.default)((function(u) {
                        a.hasMediaBefore && Z((function() {
                            a.queryMedia({
                                chat: (0, m.unproxy)(O),
                                msg: u
                            })
                        }))
                    }), 100),
                    Q = (0, y.default)((function(u) {
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
                        theme: T
                    }), "chat-info" !== T && (0, k.jsx)(C.HistorySyncGalleryPlaceholder, {
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
                m = t(378776),
                v = t(667294),
                g = a(t(802418)),
                x = a(t(982669)),
                B = t(779740),
                b = a(t(494824)),
                j = a(t(154194)),
                M = t(948752),
                y = a(t(32594)),
                S = a(t(38619)),
                _ = a(t(788413)),
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
                D = t(378776),
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
                    S = u.theme,
                    _ = u.active,
                    k = u.imgRef,
                    P = u.containerRef,
                    w = u.onMessageSelect,
                    T = u.selected,
                    I = void 0 !== T && T,
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
                        if (!0 !== u.showTooltip || "viewerFlowTransparent" === S || !(e instanceof HTMLElement)) return null;
                        var n = e.offsetWidth;
                        return {
                            menu: (0, j.jsx)(f.default, {
                                msg: t
                            }),
                            anchor: e,
                            dirY: o.DirY.TOP,
                            dirX: o.DirX.CENTER,
                            offsetX: !0 === _ ? .5 * -n * .13 : 0,
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
                                return y.Ready;
                            case F.MEDIA_DATA_STAGE.INIT:
                                return null != t || null != n ? y.Ready : y.Loading;
                            case F.MEDIA_DATA_STAGE.REMOTE_NEED_UPLOAD:
                            case F.MEDIA_DATA_STAGE.NEED_UPLOAD:
                                return y.NeedsUpload;
                            case F.MEDIA_DATA_STAGE.FETCHING:
                            case F.MEDIA_DATA_STAGE.DECRYPTING:
                            case F.MEDIA_DATA_STAGE.PREPARING:
                            case F.MEDIA_DATA_STAGE.UPLOADING:
                            case F.MEDIA_DATA_STAGE.SENDING:
                            case F.MEDIA_DATA_STAGE.REMOTE_UPLOADING:
                            case F.MEDIA_DATA_STAGE.FINALIZING:
                            case F.MEDIA_DATA_STAGE.REUPLOADING:
                                return y.Loading;
                            case F.MEDIA_DATA_STAGE.NEED_POKE:
                                return y.NeedsPoke;
                            case F.MEDIA_DATA_STAGE.ERROR_FILE_NOT_READABLE:
                            case F.MEDIA_DATA_STAGE.ERROR_MISSING:
                            case F.MEDIA_DATA_STAGE.ERROR_TOO_LARGE:
                            case F.MEDIA_DATA_STAGE.ERROR_UNSUPPORTED:
                                return y.Error
                        }
                    }(t.mediaData);
                (!0 === n || Y && u.hoverEvent) && (Q = (0, j.jsxs)("div", {
                    className: (0, v.default)(M.mediaSelect),
                    children: [(0, j.jsx)("div", {
                        className: (0, v.default)(M.shadeTop, I && M.shadeTopSelected, au !== y.Ready && M.noPointerEvents),
                        onClick: u.onClick
                    }), (0, j.jsx)(i.default, {
                        onChange: function() {
                            w && w(t, !I)
                        },
                        hover: Y,
                        checked: I
                    })]
                }));
                var iu, ou = (0, v.default)(M.canvasComponent, "chatInfo" !== S && M.mediaGalleryThumbnail, "chatInfo" === S && M.chatInfoDrawerThumbnail, Boolean(L) && M.hideableSecondRow, ("viewerFlow" === S || "viewerFlowTransparent" === S) && M.viewerFlow, "viewerFlowTransparent" === S && M.viewerFlowTransparent, Boolean(_) && M.active),
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
                    case y.Loading:
                        iu = (0, j.jsx)(d.MediaThumbLoading, {
                            mediaType: t.mediaData.type
                        });
                        break;
                    case y.NeedsPoke:
                        iu = (0, j.jsx)(d.MediaThumbNeedsPoke, {
                            onClick: function() {
                                return du(!0)
                            }
                        });
                        break;
                    case y.Error:
                        iu = (0, j.jsx)(d.MediaThumbError, {
                            onClick: u.onClick,
                            mediaType: t.mediaData.type
                        });
                        break;
                    case y.NeedsUpload:
                    case y.Ready:
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
                y = t(76672).Mirrored(["Loading", "Ready", "Error", "NeedsPoke", "NeedsUpload"])
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
        45655: (u, e, t) => {
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
                D = t(909881),
                c = t(990055),
                d = n(t(383322)),
                f = t(894286),
                F = n(t(758927)),
                C = t(518005),
                E = t(628707),
                p = t(700980),
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
        201228: (u, e, t) => {
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
                i = n(t(408590)),
                o = n(t(786410)),
                r = t(780857),
                l = t(785893),
                s = t(76672).Mirrored(["Chats"])
        },
        55458: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(963038)),
                i = n(t(347999)),
                o = t(894995),
                r = n(t(870262)),
                l = n(t(171412)),
                s = t(800469),
                D = t(896674),
                c = n(t(762135)),
                d = t(638178),
                f = t(875058),
                F = n(t(208450)),
                C = t(180966),
                E = t(700306),
                p = n(t(411150)),
                h = t(440933),
                A = n(t(701745)),
                m = t(628707),
                v = t(171738),
                g = n(t(970468)),
                x = t(179677),
                B = t(647435),
                b = n(t(288983)),
                j = n(t(495801)),
                M = t(897663),
                y = n(t(583362)),
                S = t(336568),
                _ = n(t(69622)),
                k = t(121891),
                P = t(754360),
                w = t(324928),
                T = t(860860),
                I = t(969822),
                N = t(329387),
                R = t(942218),
                O = n(t(229677)),
                L = t(173725),
                G = n(t(148708)),
                V = t(445639),
                H = n(t(584878)),
                U = n(t(94794)),
                z = n(t(670077)),
                q = t(493462),
                Y = t(667294),
                W = t(780857),
                K = n(t(803827)),
                X = t(785893),
                Z = t(76672).Mirrored(["GroupInfo", "BroadcastInfo", "ContactInfo", "NewsletterInfo", "ProductDetail", "ProductCollection", "ProductLink", "ProductInfo", "CatalogLink", "Cart", "Catalog", "ProductList", "Starred", "Kept", "GroupSettings", "MediaGallery", "GroupInviteLink", "PendingParticipants", "Verification", "DefaultEphemerality", "Ephemeral"]),
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
                        au = (0, Y.useContext)(V.DrawerContext),
                        iu = (0, W.useFlow)(function(u) {
                            return u.isGroup ? Z.GroupInfo : u.isBroadcast ? Z.BroadcastInfo : u.isUser ? Z.ContactInfo : u.isNewsletter ? Z.NewsletterInfo : void 0
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
                        yu = ju[1],
                        Su = (0, Y.useState)(null),
                        _u = (0, a.default)(Su, 2),
                        ku = _u[0],
                        Pu = _u[1],
                        wu = (0, Y.useState)(null),
                        Tu = (0, a.default)(wu, 2),
                        Iu = Tu[0],
                        Nu = Tu[1];
                    (0, Y.useEffect)((function() {
                        t.isGroup ? (0, h.queryAndUpdateGroupMetadataById)(t.id, "interactive") : t.isUser && t.contact.isBusiness && (0, o.canSeeBizProfileV3)() && f.DrawerManager.setDrawerContext("right", (0, x.buildProductCatalogContext)(new S.ProductCatalogSession, (0, d.getMaybeBizPlatformForLogging)(t.contact.id.toString()), O.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE))
                    }), []);
                    var Ru, Ou = function(u, e) {
                            du(u), Eu(e), lu.push(Z.ProductDetail)
                        },
                        Lu = function(u, e) {
                            Bu(u), yu(e), lu.push(Z.CatalogLink)
                        },
                        Gu = function(u) {
                            var e = (0, x.getProductCatalogContext)(au);
                            (0, r.default)(u, t, e) && (Pu(u), lu.push(Z.Cart))
                        },
                        Vu = function(u) {
                            yu(u || t.contact), lu.push(Z.Verification)
                        },
                        Hu = function() {
                            (0, N.shouldShowNUX)(v.NUX.EPHEMERAL) && (0, L.isKeepInChatVisibleUIEnabled)() ? m.ModalManager.open((0, X.jsx)(U.default, {
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
                            Ru = (0, X.jsx)(F.default, {
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
                                    if ((0, s.isInviteGrowthLockedGroup)(t)) {
                                        var u, e = !!(null === (u = t.groupMetadata) || void 0 === u ? void 0 : u.participants.iAmAdmin());
                                        (0, E.openGrowthLockedModal)(e, !0)
                                    } else lu.push(Z.GroupInviteLink)
                                },
                                onPendingParticipants: function() {
                                    return lu.push(Z.PendingParticipants)
                                },
                                onEphemeral: Hu,
                                onCommunityClick: function() {
                                    var u, e = null === (u = t.groupMetadata) || void 0 === u ? void 0 : u.parentGroup;
                                    e && D.Cmd.openCommunityHome(e, !0)
                                },
                                onClose: function() {
                                    return lu.pop()
                                }
                            });
                            break;
                        case Z.BroadcastInfo:
                            Ru = (0, X.jsx)(l.default, {
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
                            Ru = (0, X.jsx)(c.default, {
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
                                    w.QPL.markerStart(P.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, {
                                        annotations: {
                                            string: {
                                                EntryPoint: e
                                            }
                                        }
                                    }), (0, B.logCarouselViewMoreClick)({
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
                        case Z.NewsletterInfo:
                            break;
                        case Z.ProductDetail:
                            Ru = (0, X.jsx)(b.default, {
                                chat: t,
                                collectionId: Cu,
                                product: (0, i.default)(cu, "product"),
                                onEnd: function() {
                                    lu.end(I.DismissReason.LIFECYCLE)
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
                            Ru = (0, X.jsx)(k.CollectionContentDrawer, {
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
                            Ru = (0, X.jsx)(j.default, {
                                product: (0, i.default)(cu, "product"),
                                onBack: function() {
                                    return lu.pop()
                                }
                            });
                            break;
                        case Z.ProductInfo:
                            Ru = (0, X.jsx)(y.default, {
                                product: (0, i.default)(cu, "product"),
                                onBack: zu
                            });
                            break;
                        case Z.CatalogLink:
                            Ru = (0, X.jsx)(g.default, {
                                catalog: (0, i.default)(xu, "catalog"),
                                contact: (0, i.default)(Mu, "contact"),
                                onBack: function() {
                                    return lu.pop()
                                }
                            });
                            break;
                        case Z.Cart:
                            var Yu = (0, x.getProductCatalogContext)(au),
                                Wu = (0, r.default)((0, i.default)(ku, "cartId"), t, Yu);
                            Ru = (0, i.default)(Wu, "cartFlow");
                            break;
                        case Z.Catalog:
                            Ru = (0, X.jsx)(_.default, {
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
                            Ru = (0, X.jsx)(M.ProductListDrawer, {
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
                            Ru = (0, X.jsx)(T.StarredDrawerLoadable, {
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
                            Ru = (0, X.jsx)(A.default, {
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
                            Ru = (0, X.jsx)(C.GroupInviteLinkDrawerLoadable, {
                                chat: t,
                                groupMetadata: t.groupMetadata,
                                onBack: function() {
                                    return lu.pop()
                                }
                            });
                            break;
                        case Z.PendingParticipants:
                            Ru = (0, X.jsx)(p.default, {
                                chat: t,
                                onBack: function() {
                                    return lu.pop()
                                }
                            });
                            break;
                        case Z.Verification:
                            Ru = (0, X.jsx)(R.VerificationDrawerLoadable, {
                                contact: (0, i.default)(Mu, "contact"),
                                onClose: function() {
                                    return lu.pop()
                                },
                                isFirstLevel: !1
                            });
                            break;
                        case Z.DefaultEphemerality:
                            Ru = (0, X.jsx)(G.default, {
                                onClose: function() {
                                    return lu.pop()
                                },
                                entryPoint: (0, i.default)(Iu, "defaultEphemeralityEntryPoint")
                            });
                            break;
                        case Z.Ephemeral:
                            var Ku = t.isGroup ? O.default.DISAPPEARING_MODE_ENTRY_POINT_TYPE.GROUP_CHAT_DISAPPEARING_MESSAGES_SETTING : O.default.DISAPPEARING_MODE_ENTRY_POINT_TYPE.INDIVIDUAL_CHAT_DISAPPEARING_MESSAGES_SETTING;
                            Ru = (0, X.jsx)(H.default, {
                                chat: t,
                                showNux: (0, N.shouldShowNUX)(v.NUX.EPHEMERAL),
                                entryPoint: O.default.EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_INFO,
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
        293134: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t = u.msg,
                    n = u.highlightedMsgIds,
                    S = (0, M.default)(),
                    _ = (0, j.default)(),
                    k = (0, m.default)(),
                    P = (0, v.default)((function() {
                        return t.type === f.MSG_TYPE.IMAGE ? new p.default.UiAction({
                            uiActionType: p.default.UI_ACTION_TYPE.IMAGE_OPEN,
                            uiActionPreloaded: t.mediaData.mediaStage === D.MEDIA_DATA_STAGE.RESOLVED
                        }) : null
                    })),
                    w = (0, v.default)((function() {
                        return (0, r.constructMediaMsgs)(t.chat, t)
                    })),
                    T = w.current.length,
                    I = (0, x.default)(T),
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
                            n instanceof HTMLElement && (a = n.clientWidth / 2 - e.clientWidth / 2), (0, C.default)(t, "stop");
                            var i = 0;
                            u && (i = 300), (0, C.default)(n, "scroll", {
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
                    eu(), tu(t) && (u = G.current) && (0, C.default)(u, {
                        opacity: [1, 0],
                        translateY: ["0%", "100%"]
                    }, {
                        duration: 300,
                        delay: 100,
                        easing: [.1, .82, .25, 1]
                    }).then((function() {
                        S.aborted || J(!1)
                    }))
                }), []), (0, A.useEffect)((function() {
                    T > (null != I ? I : 0) && eu()
                }));
                var nu = function(u) {
                        _((function() {
                            w.current.loadMoreAroundIfNeeded(u)
                        })), q(u)
                    },
                    au = function(u) {
                        if (u && u.stopPropagation(), !K) {
                            var e = z;
                            if (e) {
                                var n;
                                (n = w.current.getAfter(e)) ? nu(n): w.current.hasMediaAfter && (R.current || (R.current = w.current.queryMedia({
                                    chat: t.chat,
                                    msg: t,
                                    direction: "after"
                                }).then((function(u) {
                                    S.aborted || "number" == typeof u.length && u.length > 0 && z === t && au()
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
                                (n = w.current.getBefore(e)) ? nu(n): w.current.hasMediaBefore && (O.current || (O.current = w.current.queryMedia({
                                    chat: t.chat,
                                    msg: t,
                                    direction: "before"
                                }).then((function(u) {
                                    S.aborted || "number" == typeof u.length && u.length > 0 && z === t && iu()
                                })).catch((function() {
                                    __LOG__(3)`query media msgs error: `
                                })).finally((function() {
                                    O.current = null
                                }))))
                            }
                        }
                    },
                    ou = null;
                t.type === f.MSG_TYPE.IMAGE && (ou = function() {
                    var u, e = P.current;
                    e && (Object.assign(e, (0, E.getGroupCountMetricsFromChatWid)(null === (u = t.chat) || void 0 === u ? void 0 : u.id)), e.markUiActionT(), e.commit(), P.current = null);
                    (0, h.logUiActionShadowPrivateStatsTestEvents)()
                });
                var ru = function() {
                        d.ModalManager.closeMedia()
                    },
                    lu = (0, B.default)((function() {
                        q(null), ru()
                    })),
                    su = (null == z ? void 0 : z.isViewOnce) || (null == z ? void 0 : z.isStickerMsg);
                (0, g.useListener)(su ? z : null, "revoked", lu);
                var Du = su ? null : w.current;
                (0, g.useListener)(Du, "remove", (function(u, e, n) {
                    var a = w.current,
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
                    _((function() {
                        z && w.current.loadMoreAroundIfNeeded(z)
                    }))
                }), [z, w, _]), (0, A.useEffect)((function() {
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
                            _((function() {
                                e.queryMedia({
                                    chat: n.chat,
                                    msg: n
                                }), k()
                            }))
                        }
                        if (e.hasMediaAfter && t + l.SCROLL_FUDGE > u.scrollWidth - 2 * u.clientWidth) {
                            var a = (0, o.default)(e.last(), "mediaMsgs.last()");
                            _((function() {
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
                var du, fu = w.current,
                    Fu = fu.last(),
                    Cu = fu.hasMediaAfter || z !== Fu ? au : null,
                    Eu = fu.head();
                return fu.hasMediaBefore || z !== Eu ? iu : null, du = fu.hasMediaBefore || z !== Eu ? iu : null, (0, y.jsxs)("div", {
                    className: K ? "img-zoomed-in" : null,
                    children: [tu(z) && (0, y.jsx)(F.default, {
                        activeMsg: z,
                        mediaMsgs: w.current,
                        highlightedMsgIds: u.highlightedMsgIds,
                        onSelectThumb: nu,
                        onSetActiveThumb: function(u) {
                            L.current = u
                        },
                        onScroll: function(u) {
                            cu(u.currentTarget, w.current, u.currentTarget.scrollLeft)
                        },
                        setRefThumbsContainer: function(u) {
                            G.current = u
                        },
                        setRefThumbs: function(u) {
                            V.current = u
                        }
                    }), (0, y.jsx)(c.default, {
                        msg: z,
                        mediaData: z.mediaData,
                        onBack: ru,
                        onExitAnimation: function() {
                            var u;
                            tu(t) && (u = G.current) && (0, C.default)(u, {
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
                r = t(169145),
                l = t(295769),
                s = n(t(758927)),
                D = t(966454),
                c = n(t(900608)),
                d = t(628707),
                f = t(154553),
                F = n(t(9128)),
                C = n(t(931771)),
                E = t(964724),
                p = n(t(229677)),
                h = t(403056),
                A = t(667294),
                m = n(t(802418)),
                v = n(t(982669)),
                g = t(779740),
                x = n(t(121766)),
                B = n(t(803827)),
                b = n(t(32594)),
                j = n(t(38619)),
                M = n(t(788413)),
                y = t(785893)
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
                                return u.next = 2, Promise.all([t.e(33), t.e(5943), t.e(7791), t.e(275)]).then(t.bind(t, 568907));
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
                o = t(202908),
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
                y = t(785893),
                S = {
                    borderBottom: "qmxv8cnq",
                    backgroundColor: "s9raicp8"
                },
                _ = {
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

            function w(u, e) {
                var t = u.onClose,
                    n = function() {
                        return o.ChatCollection.filter((function(u) {
                            return u.archive && u.shouldAppearInList
                        }))
                    },
                    w = (0, M.useModelValues)(u.settings, ["showArchiveV2", "archive"]),
                    T = (0, b.default)((function() {
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
                        return (0, C.archiveV2Supported)() && w.showArchiveV2
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
                        })), (0, C.archiveV2Supported)() && w.archive.enabled || Y()
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
                    U = (0, y.jsx)("div", {
                        className: (0, B.default)(S),
                        children: (0, y.jsx)("div", {
                            className: (0, B.default)(_),
                            children: (0, y.jsx)("div", {
                                className: (0, B.default)(k),
                                children: (0, y.jsx)(p.Text, {
                                    theme: "plain",
                                    as: "p",
                                    children: w.showArchiveV2 ? K : X
                                })
                            })
                        })
                    })
                }
                z = L.length > 0 ? (0, y.jsxs)(f.HotKeys, {
                    ref: N,
                    handlers: {
                        down: function(u) {
                            u.preventDefault(), u.stopPropagation(), I.current.setNext(!0)
                        },
                        up: function(u) {
                            u.preventDefault(), u.stopPropagation(), I.current.setPrev(!0)
                        }
                    },
                    children: [U, (0, y.jsx)(D.FlatList, {
                        className: (0, B.default)(P),
                        data: L.map((function(u) {
                            return {
                                itemKey: u.id.toString(),
                                chat: u
                            }
                        })),
                        flatListController: T.current,
                        direction: "vertical",
                        renderItem: function(u) {
                            return (0, y.jsx)(v.Chat, {
                                chat: u.chat,
                                mode: v.Mode.LAST,
                                active: I.current,
                                onClick: W,
                                hideArchivedIcon: (0, C.archiveV2Supported)() && w.archive.enabled,
                                hideMuteIcon: V(),
                                hideMuteOption: V(),
                                ephemeralIcon: "chat-list"
                            })
                        }
                    })]
                }) : (0, y.jsx)(s.Archived, {});
                var Z = (0, C.archiveV2Supported)() && w.archive.enabled ? g.fbt._("Archived", null, {
                    hk: "3HjzQg"
                }) : F.default.t(136);
                return (0, y.jsxs)(h.default, {
                    ref: e,
                    theme: "archived",
                    children: [(0, y.jsx)(m.DrawerHeader, {
                        title: Z,
                        onBack: Y,
                        type: m.DRAWER_HEADER_TYPE.LARGE,
                        menu: null
                    }), (0, y.jsx)(A.default, {
                        flatListControllers: [T.current],
                        children: z
                    })]
                })
            }
            var T = (0, x.forwardRef)(w);
            e.default = T
        },
        636244: (u, e, t) => {
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
                    a = (0, h.jsx)(r.ChevronRightAltIcon, {
                        color: d.SvgColorProp.SECONDARY,
                        directional: !0
                    }),
                    o = (0, h.jsxs)(l.FlexRow, {
                        align: "center",
                        children: [(0, h.jsx)(m, {
                            chat: e
                        }), (0, h.jsx)("div", {
                            children: a
                        })]
                    });
                return (0, h.jsx)(i.ChatInfoDrawerSection, {
                    titleTestId: "section-media",
                    title: n,
                    titleOnClick: t,
                    subtitle: o,
                    xstyle: A.drawerSection,
                    children: (0, h.jsx)(D.default, {
                        chat: e,
                        mediaMsgs: e.getMediaMsgs(),
                        theme: "chat-info"
                    })
                })
            };
            var a = n(t(963038)),
                i = t(988456),
                o = t(169145),
                r = t(519896),
                l = t(208188),
                s = n(t(758927)),
                D = n(t(131157)),
                c = t(96293),
                d = t(401304),
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
                        i = t[1],
                        r = (0, p.default)(),
                        l = (0, F.useCallback)((function() {
                            (0, o.countAllMedia)(u).then((function(u) {
                                r.aborted || i(u)
                            }))
                        }), [u, r]);
                    return (0, F.useEffect)(l, [l]), (0, E.useListener)(u.getMediaMsgs(), ["add", "remove"], l), (0, E.useListener)(u.getDocMsgs(), ["add", "remove"], l), (0, E.useListener)(u.getLinkMsgs(), ["add", "remove"], l), n
                }(u.chat);
                return (0, h.jsx)("div", {
                    className: (0, C.default)(A.mediaCount),
                    children: null != e ? f.fbt._("{mediaCount}", [f.fbt._param("mediaCount", s.default.n(e))], {
                        hk: "2yA6kO"
                    }) : (0, h.jsx)(c.Spinner, {
                        size: 16,
                        stroke: 6
                    })
                })
            }
        },
        282748: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.PhoneNumberVisibilityIndicator1On1 = function(u) {
                var e = !0 === u.chat.contact.shareOwnPn;
                return (0, F.jsx)(C, {
                    phoneNumberIsShared: e,
                    handleClick: function() {
                        e ? r.ModalManager.open((0, F.jsx)(d.PostSharePhoneNumberModal, {
                            entryPoint: c.default.PNH_ENTRY_POINT_TYPE.CHAT_INFO_PN_VISIBILITY
                        })) : r.ModalManager.open((0, F.jsx)(d.SharePhoneNumberModal, {
                            entryPoint: c.default.PNH_ENTRY_POINT_TYPE.CHAT_INFO_PN_VISIBILITY
                        }))
                    }
                })
            }, e.PhoneNumberVisibilityIndicatorCag = function(u) {
                var e, t = u.chat,
                    n = Boolean(null === (e = t.groupMetadata) || void 0 === e ? void 0 : e.participants.iAmAdmin());
                return (0, F.jsx)(C, {
                    phoneNumberIsShared: n,
                    handleClick: function() {
                        var u, e = null === (u = t.groupMetadata) || void 0 === u ? void 0 : u.parentGroup;
                        e && (0, l.incrementPnhDailyCount)(e, l.PnhCagDailyMetricsType.PNH_INDICATOR_CLICKS_INFO_SCREEN), r.ModalManager.open(n ? (0, F.jsx)(a.CagPhoneNumberSharedNux, {}) : (0, F.jsx)(a.CagPhoneNumberHiddenNux, {}))
                    }
                })
            };
            var a = t(817430),
                i = n(t(167740)),
                o = t(14630),
                r = t(628707),
                l = t(288669),
                s = t(401304),
                D = t(558288),
                c = n(t(229677)),
                d = t(795746),
                f = t(548360),
                F = t(785893);

            function C(u) {
                var e = u.phoneNumberIsShared,
                    t = u.handleClick,
                    n = (0, F.jsx)(D.TextSpan, {
                        theme: "title",
                        children: f.fbt._("Phone number privacy", null, {
                            hk: "GWHMO"
                        })
                    }),
                    a = f.fbt._("Your phone number is visible in this chat. Click to learn more.", null, {
                        hk: "iXhQA"
                    }),
                    r = f.fbt._("This chat has added privacy for your phone number. Click to learn more.", null, {
                        hk: "17m1TJ"
                    });
                return (0, F.jsx)(i.default, {
                    icon: (0, F.jsx)(o.DialpadIcon, {
                        color: s.SvgColorProp.SECONDARY,
                        height: 20
                    }),
                    title: n,
                    testid: "phone_number_visibility_indicator",
                    secondaryTitle: (0, F.jsx)(D.TextDiv, {
                        theme: "muted",
                        children: e ? a : r
                    }),
                    onClick: t
                })
            }
        },
        962617: (u, e, t) => {
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
                i = t(500204),
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
                s = t(970280),
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
        171412: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(602922)),
                i = n(t(598067)),
                o = (n(t(167740)), t(988456)),
                r = n(t(636244)),
                l = t(87330),
                s = t(896674),
                D = t(356953),
                c = t(212390),
                d = n(t(979163)),
                f = n(t(758927)),
                F = t(518005),
                C = t(628707),
                E = t(469073),
                p = (t(136896), t(378776)),
                h = (t(401304), t(558288)),
                A = n(t(229677)),
                m = n(t(829723)),
                v = n(t(544978)),
                g = t(455316),
                x = t(952991),
                B = n(t(251282)),
                b = t(841726),
                j = n(t(963651)),
                M = t(548360),
                y = t(667294),
                S = n(t(156720)),
                _ = n(t(802418)),
                k = n(t(982669)),
                P = t(779740),
                w = t(948752),
                T = n(t(27791)),
                I = t(785893),
                N = {
                    flexGrow: "tvf2evcx",
                    flexShrink: "oq44ahr5",
                    flexBasis: "lb5m6g5c",
                    paddingBottom: "s9fl9ege"
                };

            function R(u, e) {
                var t, n, y = u.onClose,
                    R = u.onMediaGallery,
                    O = (0, _.default)(),
                    L = (0, T.default)(),
                    G = (0, k.default)((function() {
                        return new d.default
                    })),
                    V = (0, w.useModelValues)(u.chat, ["id", "groupMetadata"]);
                (0, P.useListener)(null === (t = V.groupMetadata) || void 0 === t ? void 0 : t.participants, ["add", "remove", "sort", "reset"], O);
                var H = null;
                R && (H = (0, I.jsx)(r.default, {
                    onMediaGallery: R,
                    chat: (0, p.unproxy)(V)
                }));
                var U, z = (0, I.jsx)(o.ChatInfoDrawerButtonsSection, {
                    children: (0, I.jsx)(g.DrawerButton, {
                        testid: "li-delete-broadcast",
                        icon: (0, I.jsx)(D.DeleteIcon, {}),
                        color: "danger",
                        theme: "chat-info",
                        onClick: function() {
                            s.Cmd.deleteOrExitChat((0, p.unproxy)(V))
                        },
                        children: f.default.t(691)
                    })
                });
                (null === (n = V.groupMetadata) || void 0 === n ? void 0 : n.creation) ? (U = l.Clock.createdStr(V.groupMetadata.creation), U = (0, I.jsx)(h.TextDiv, {
                    theme: "small",
                    children: U
                })) : U = null;
                var q, Y = null;
                return (q = (0, I.jsx)(j.default, {
                    highlightSurface: A.default.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                    onClick: function() {
                        if ((0, F.isPrivacyNarrativeV1Enabled)() && (0, E.shouldShowNewE2eInfoModal)((0, p.unproxy)(V))) {
                            var u = (0, c.getE2EFaqUrl)();
                            C.ModalManager.open((0, I.jsx)(b.E2eInfoModalV2, {
                                highlightSurface: A.default.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                                url: u
                            }))
                        } else C.ModalManager.open((0, I.jsx)(B.default, {
                            highlightSurface: A.default.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                            chatId: V.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    },
                    text: M.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "1iarlI"
                    })
                })) && (Y = (0, I.jsxs)(o.ChatInfoDrawerSection, {
                    children: [null, q]
                })), (0, I.jsxs)(m.default, {
                    ref: e,
                    theme: "striped",
                    children: [(0, I.jsxs)(x.DrawerHeader, {
                        type: x.DRAWER_HEADER_TYPE.SMALL,
                        rtlFixIfOnDarwin: !0,
                        onCancel: function() {
                            y ? y() : null == L || L.requestDismiss()
                        },
                        children: [(0, I.jsx)(h.TextDiv, {
                            theme: "title",
                            children: M.fbt._("Broadcast list info", null, {
                                hk: "3S4EgV"
                            })
                        }), U]
                    }), (0, I.jsx)(v.default, {
                        flatListControllers: [G.current],
                        children: (0, I.jsxs)("div", {
                            className: (0, S.default)(N),
                            children: [(0, I.jsx)(i.default, {
                                chat: (0, p.unproxy)(V)
                            }), H, undefined, Y, (0, I.jsx)(a.default, {
                                chat: (0, p.unproxy)(V),
                                flatListController: G.current
                            }), z]
                        })
                    })]
                }, "contact-info-modal")
            }
            var O = (0, y.forwardRef)(R);
            e.default = O
        },
        602922: (u, e, t) => {
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
                        (0, c.isMePrimary)(e.id) || (0, l.findChat)(e.id, "broadcastInfoRecipients").then((function(u) {
                            i.Cmd.openChatFromUnread(u).then((function(e) {
                                e && o.ComposeBoxActions.focus(u)
                            }))
                        }))
                    },
                    m = null !== (t = null == p ? void 0 : p.length) && void 0 !== t ? t : 0,
                    v = D.default.t(769, {
                        count: m,
                        _plural: m
                    });
                return (0, E.jsx)(a.ChatInfoDrawerListSection, {
                    title: v,
                    children: (0, E.jsx)(s.FlatList, {
                        flatListController: u.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: h,
                        renderItem: function(u) {
                            var e = u.participant,
                                t = r.ContactCollection.gadd(e.id);
                            return (0, E.jsx)(d.Contact, {
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
            var a = t(988456),
                i = t(896674),
                o = t(515918),
                r = t(909881),
                l = t(191649),
                s = t(577407),
                D = n(t(758927)),
                c = t(228277),
                d = t(622151),
                f = t(667294),
                F = n(t(802418)),
                C = t(779740),
                E = t(785893)
        },
        598067: (u, e, t) => {
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
                    }).toString() + " · " + r.default.t(769, {
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
        825965: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.contact,
                    t = (0, D.useModelValues)(e.getStatus(), ["status"]).status;
                if (r.default.isPSA(e.id)) return (0, c.jsxs)(a.ChatInfoDrawerSection, {
                    titleTestId: "section-about",
                    title: "",
                    children: [(0, c.jsxs)(o.TextSpan, {
                        theme: "title",
                        size: "16",
                        children: [s.fbt._("Hi! Welcome to this official WhatsApp chat.", null, {
                            hk: "1fpFwJ"
                        }).toString(), (0, c.jsx)("br", {}), s.fbt._("This is where you can get tips, see announcements, and hear about the newest features. Straight from us.", null, {
                            hk: "4gcJHK"
                        }).toString(), (0, c.jsx)("br", {}), s.fbt._('Official chats from WhatsApp will always have a green "verified" checkmark. And we\'ll never ask for your personal information.', null, {
                            hk: "8bwzI"
                        }).toString()]
                    }), (0, c.jsx)("br", {}), (0, c.jsx)("br", {}), (0, c.jsx)(i.ExternalLink, {
                        href: "https://whatsapp.com/",
                        xstyle: d.whatsapp_url,
                        children: "https://whatsapp.com/"
                    })]
                });
                if ("" === t) return null;
                return (0, c.jsx)(a.ChatInfoDrawerSection, {
                    titleTestId: "section-about",
                    title: s.fbt._("About", null, {
                        hk: "4qoAfH"
                    }),
                    children: (0, c.jsx)(o.TextSpan, {
                        theme: "title",
                        size: "16",
                        children: (0, c.jsx)(l.default, {
                            id: e.id
                        })
                    })
                })
            };
            var a = t(988456),
                i = t(192070),
                o = t(558288),
                r = n(t(560911)),
                l = n(t(443114)),
                s = t(548360),
                D = (n(t(156720)), t(948752)),
                c = t(785893),
                d = {
                    whatsapp_url: {
                        color: "hafg4y3t"
                    }
                }
        },
        52916: (u, e, t) => {
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
                    (0, s.findCommonGroups)(u.contact).catch((function(u) {
                        throw __LOG__(4, !0, new Error, !0)`get from participants table failed`, SEND_LOGS("get from participants table failed when finding common groups: " + u), new Error("get from participants table failed")
                    }))
                }), []);
                var A, m = (0, F.default)(e, ["add", "remove"], (function() {
                        if (!e) return [];
                        var u = e;
                        return u.length > i.INFO_DRAWER_MAX_ROWS && p && (u = u.slice(0, i.INFO_DRAWER_MAX_ROWS)), u.map((function(u) {
                            return {
                                itemKey: u.id.toString(),
                                chat: u,
                                height: 68
                            }
                        }))
                    }), [p]),
                    v = function(e, t) {
                        r.Cmd.openChatFromUnread(t).then((function(u) {
                            u && l.ComposeBoxActions.focus(t)
                        })), u.onClose()
                    };
                if (!e || 0 === e.length) return null;
                if (e.length > i.INFO_DRAWER_MAX_ROWS && p) {
                    var g = e.length - i.INFO_DRAWER_MAX_ROWS;
                    A = (0, E.jsx)(o.default, {
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
                return (0, E.jsxs)(i.ChatInfoDrawerListSection, {
                    titleTestId: "section-common-groups",
                    title: x,
                    children: [(0, E.jsx)(D.FlatList, {
                        flatListController: u.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: m,
                        renderItem: function(u) {
                            var e = u.chat;
                            return (0, E.jsx)(c.Chat, {
                                chat: e,
                                theme: "chat-info",
                                mode: c.Mode.INFO,
                                onClick: v
                            }, e.id.toString())
                        }
                    }), A]
                })
            };
            var a = n(t(963038)),
                i = t(988456),
                o = n(t(694585)),
                r = t(896674),
                l = t(515918),
                s = t(151554),
                D = t(577407),
                c = t(680058),
                d = t(548360),
                f = t(667294),
                F = n(t(554327)),
                C = t(948752),
                E = t(785893)
        },
        762135: (u, e, t) => {
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
                s = t(104010),
                D = t(894995),
                c = n(t(724030)),
                d = n(t(885691)),
                f = n(t(577482)),
                F = t(86243),
                C = t(238424),
                E = t(219450),
                p = n(t(904792)),
                h = t(218953),
                A = t(202908),
                m = t(762933),
                v = n(t(167740)),
                g = t(988456),
                x = n(t(636244)),
                B = t(282748),
                b = t(665912),
                j = t(896674),
                M = n(t(825965)),
                y = n(t(52916)),
                S = n(t(64638)),
                _ = n(t(588317)),
                k = n(t(761649)),
                P = n(t(344262)),
                w = n(t(382691)),
                T = n(t(98009)),
                I = t(638178),
                N = t(356953),
                R = t(875058),
                O = t(217332),
                L = n(t(979163)),
                G = t(947974),
                V = n(t(758927)),
                H = n(t(628580)),
                U = t(63962),
                z = t(431045),
                q = t(628707),
                Y = n(t(295418)),
                W = n(t(597738)),
                K = t(179677),
                X = t(336568),
                Z = n(t(707021)),
                $ = t(63122),
                Q = n(t(408590)),
                J = t(378776),
                uu = t(401304),
                eu = t(558288),
                tu = t(236539),
                nu = t(422210),
                au = t(228277),
                iu = t(454964),
                ou = n(t(229677)),
                ru = n(t(560911)),
                lu = t(173725),
                su = n(t(829723)),
                Du = n(t(544978)),
                cu = t(455316),
                du = t(445639),
                fu = t(952991),
                Fu = n(t(849788)),
                Cu = n(t(361264)),
                Eu = t(548360),
                pu = t(667294),
                hu = n(t(156720)),
                Au = n(t(982669)),
                mu = t(948752),
                vu = n(t(309653)),
                gu = n(t(27791)),
                xu = t(785893),
                Bu = {
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

            function bu(u) {
                var e = u.contact,
                    t = u.catalogContext,
                    n = u.onProductDetail,
                    a = u.onProductCatalog,
                    i = h.CatalogCollection.get(e.id);
                if (!i) return null;
                var o = "",
                    r = !1;
                return (0, D.canSeeBizProfileV3)() && (o = Eu.fbt._("See all", null, {
                    hk: "3dTwyT"
                }), r = !0), t.session.isAccidental() ? null : (0, E.hasShop)(e.businessProfile) ? (0, D.bannedShopsEnabled)() && (0, E.isShopBanned)(e.businessProfile) ? null : (0, xu.jsx)(Z.default, {
                    businessProfile: e.businessProfile,
                    catalog: i,
                    subtitle: o,
                    hideIncompleteRows: r
                }) : (0, xu.jsx)(W.default, {
                    onProductDetail: n,
                    onProductCatalog: a,
                    catalog: i,
                    subtitle: o,
                    hideIncompleteRows: r,
                    shouldLog: !0
                })
            }

            function ju(u, e) {
                var t = u.onVerification,
                    n = u.onClose,
                    E = u.onProductDetail,
                    W = u.onProductCatalog,
                    Z = u.canLogQpl,
                    ju = void 0 === Z || Z,
                    Mu = (0, gu.default)(),
                    yu = (0, pu.useContext)(du.DrawerContext),
                    Su = (0, mu.useModelValues)(u.contact, ["id", "formattedName", "formattedUser", "formattedShortName", "isBusiness", "isEnterprise", "isMyContact", "commonGroups", "businessProfile", "showBusinessCheckmarkAsPrimary", "showBusinessCheckmarkAsSecondary", "verifiedName", "verifiedLevel", "name", "notifyName", "labels", "phoneNumber", "businessCatalog", "isMe", "statusMute", "displayName", "shareOwnPn", "requestedPnTimestamp", "canRequestPhoneNumber", "phoneNumber", "isIAS"]),
                    _u = (0, Au.default)((function() {
                        return new L.default
                    })),
                    ku = (0, pu.useRef)(!1),
                    Pu = (0, pu.useState)(100),
                    wu = (0, i.default)(Pu, 2),
                    Tu = wu[0],
                    Iu = wu[1],
                    Nu = (0, pu.useMemo)((function() {
                        return A.ChatCollection.get(Su.id)
                    }), [Su.id]),
                    Ru = Su.isMe;
                (0, pu.useEffect)((function() {
                    if (Su.businessProfile && !Su.businessProfile.stale && Su.businessCatalog && h.CatalogCollection.findCarouselCatalog(Su.id).catch((0, o.filteredCatch)(s.ServerStatusCodeError, (function() {
                            __LOG__(3)`Failed to fetch product catalog in contact drawer from server`
                        }))), (0, $.getFanOutListJob)([Su.id, (0, au.assertGetMe)()]).then((function(u) {
                            (0, U.ensureE2ESessions)(u)
                        })), (0, K.getProductCatalogContext)(yu).session.isAccidental()) R.DrawerManager.setDrawerContext("right", (0, K.buildProductCatalogContext)(new X.ProductCatalogSession, (0, I.getMaybeBizPlatformForLogging)(Su.id.toString()), ou.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE));
                    else if (Su.isBusiness && (0, D.canSeeBizProfileV3)()) {
                        var e, t, n = Su.id === (0, au.getMaybeMeUser)(),
                            a = u.profileEntryPoint;
                        if (!n && a)(0, F.logProfileImpression)((0, K.getProductCatalogSessionId)(yu), a, !!(null === (e = Su.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked), !!(null === (t = Su.businessProfile) || void 0 === t ? void 0 : t.coverPhoto))
                    }
                    ju && Su.businessProfile && (0, z.qplEndProfileView)(r.QuickLogActionType.SUCCESS)
                }), []), (0, pu.useEffect)((function() {
                    if ((0, D.btmThreadsLoggingEnabled)()) {
                        var u, e = null === (u = (0, au.getMaybeMeUser)()) || void 0 === u ? void 0 : u.equals(Su.id);
                        (0, K.getProductCatalogContext)(yu).session.isAccidental() || e || !(null == Nu ? void 0 : Nu.id) || (0, b.handleActivitiesForChatThreadLogging)([{
                            activityType: "profileViews",
                            ts: (0, l.unixTime)(),
                            chatId: Nu.id
                        }])
                    }
                }), []), (0, vu.default)((function() {
                    var u, e;
                    (0, K.getProductCatalogContext)(yu).session.isAccidental() || Su.isBusiness && (0, D.canSeeBizProfileV3)() && (0, F.logProfileExit)((0, K.getProductCatalogSessionId)(yu), Tu, null === (u = Su.businessProfile) || void 0 === u ? void 0 : u.isProfileLinked, !!(null === (e = Su.businessProfile) || void 0 === e ? void 0 : e.coverPhoto))
                }));
                var Ou = function() {
                        n ? n() : null == Mu || Mu.requestDismiss()
                    },
                    Lu = function(u) {
                        if (ku.current || ru.default.isPSA(Su.id)) {
                            var e = u.target;
                            q.ModalManager.openMedia((0, xu.jsx)(Cu.default, {
                                contact: Su,
                                profilePicThumb: Su.getProfilePicThumb(),
                                animateBorderRadius: !0,
                                getZoomNode: function(u) {
                                    u(e)
                                }
                            }), {
                                transition: "profile-viewer",
                                uim: Mu
                            })
                        } else nu.ToastManager.open((0, xu.jsx)(tu.Toast, {
                            msg: Eu.fbt._("No profile photo", null, {
                                hk: "2bdeTO"
                            })
                        }))
                    },
                    Gu = function() {
                        ku.current = !0
                    },
                    Vu = Su.isEnterprise ? null : (0, xu.jsx)(y.default, {
                        contact: Su,
                        onClose: Ou,
                        flatListController: _u.current
                    }),
                    Hu = null;
                u.onMediaGallery && Nu && (Hu = (0, xu.jsx)(x.default, {
                    chat: Nu,
                    onMediaGallery: u.onMediaGallery
                }));
                var Uu = null,
                    zu = null;
                if (Su && Su.isBusiness && Su.businessProfile && Su.businessCatalog) {
                    var qu = (0, xu.jsx)(bu, {
                        contact: Su,
                        catalogContext: (0, K.getProductCatalogContext)(yu),
                        onProductDetail: function(u) {
                            (0, iu.qplStartProductView)("ContactInfo"), E(u)
                        },
                        onProductCatalog: W
                    });
                    (0, D.canSeeBizProfileV3)() ? zu = qu: Uu = qu
                }
                var Yu, Wu, Ku = Nu && Nu.mute.canMute() ? (0, xu.jsx)(Y.default, {
                    chat: Nu,
                    mute: Nu.mute,
                    settings: Q.default
                }) : null;
                if (u.onStarred && (Yu = (0, xu.jsx)(P.default, {
                        onStarred: u.onStarred
                    })), (0, lu.isKeepInChatReadAndUIEnabled)() && Nu && (Nu.hasKeptMsgs() || (0, m.isEphemeralSettingOn)(Nu))) {
                    var Xu = (0, xu.jsx)(eu.TextSpan, {
                            theme: "title",
                            size: "16",
                            children: Eu.fbt._("Kept Messages", null, {
                                hk: "w8m3u"
                            })
                        }),
                        Zu = (0, xu.jsx)(G.KeepInChatIcon, {
                            color: uu.SvgColorProp.SECONDARY,
                            height: 20
                        });
                    Wu = (0, xu.jsx)(g.ChatInfoDrawerSection, {
                        titleTestId: "section-kept-messages",
                        xstyle: Bu.lastSectionRow,
                        children: (0, xu.jsx)(v.default, {
                            testid: "block-kept-messages",
                            side: "chevron",
                            icon: Zu,
                            onClick: u.onKept,
                            title: Xu
                        })
                    })
                }
                var $u, Qu, Ju, ue, ee = Nu && (0, m.shouldShowEphemeralSetting)(Nu) ? (0, xu.jsx)(O.EphemeralSettingRow, {
                        onClick: u.onEphemeral,
                        chat: Nu,
                        testid: "contact-info-dm-setting-row"
                    }) : null,
                    te = ru.default.isPSA(Su.id) ? (0, xu.jsx)(T.default, {}) : (0, xu.jsx)(S.default, {
                        contact: (0, J.unproxy)(Su),
                        onVerificationClick: function() {
                            t()
                        }
                    }),
                    ne = Su.id.isLid() && null == Su.phoneNumber,
                    ae = Su.id.isLid(),
                    ie = (0, xu.jsxs)(g.ChatInfoDrawerSection, {
                        children: [Ku, ee, te, Nu && ae ? (0, xu.jsx)(B.PhoneNumberVisibilityIndicator1On1, {
                            chat: Nu
                        }) : null]
                    }),
                    oe = !Su.isBusiness,
                    re = oe || Su.isIAS ? null : (0, xu.jsx)(c.default, {
                        contact: (0, J.unproxy)(Su)
                    }),
                    le = oe ? (0, xu.jsx)(M.default, {
                        contact: (0, J.unproxy)(Su)
                    }) : null,
                    se = (0, D.canSeeBizProfileV3)() && Su.isBusiness && Su.businessProfile ? (0, xu.jsx)(p.default, {
                        contact: Su,
                        onProfilePicLoad: Gu,
                        onProfilePicClick: Lu,
                        onOpenStatus: function() {
                            var u, e;
                            (0, F.logStatusClick)((0, K.getProductCatalogSessionId)(yu), null === (u = Su.businessProfile) || void 0 === u ? void 0 : u.isProfileLinked, !!(null === (e = Su.businessProfile) || void 0 === e ? void 0 : e.coverPhoto))
                        },
                        businessProfile: Su.businessProfile,
                        onProductCatalog: W,
                        isMessageYourselfChat: Ru,
                        isPhoneNumberHidden: ne
                    }) : (0, xu.jsx)(w.default, {
                        contact: Su,
                        onDetailImageLoad: Gu,
                        onDetailImageClick: Lu,
                        isMessageYourselfChat: Ru,
                        isPhoneNumberHidden: ne
                    }),
                    De = null,
                    ce = void 0;
                Su.isBusiness && Su.businessProfile && ((0, D.canSeeBizProfileV3)() && Su.businessProfile ? (De = (0, xu.jsx)(f.default, {
                    businessProfile: Su.businessProfile
                }), $u = Su.isIAS ? null : (0, xu.jsx)(d.default, {
                    contact: Su
                }), (null !== (Ju = null === (ue = Su.labels) || void 0 === ue ? void 0 : ue.length) && void 0 !== Ju ? Ju : 0) > 0 && (Qu = (0, xu.jsx)(Fu.default, {
                    theme: "padding",
                    children: (0, xu.jsx)(H.default, {
                        labels: Su.labels,
                        theme: "standalone"
                    })
                })), ce = function(u) {
                    var e = Math.floor(100 * (1 + u.currentTarget.scrollTop / u.currentTarget.offsetHeight));
                    e > Tu && Iu(e)
                }) : Su.businessProfile && (De = (0, xu.jsx)(C.BusinessProfile, {
                    contact: Su,
                    businessProfile: Su.businessProfile
                })));
                var de, fe = {
                    title: Eu.fbt._("Contact info", null, {
                        hk: "LUJtH"
                    }),
                    type: fu.DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: !0,
                    onCancel: Ou,
                    focusBackOrCancel: !0
                };
                return Su.businessProfile && !0 === Su.businessProfile.isProfileLinked && (0, D.bizLinkedAccountsEnabled)() && (0, D.canViewBizLinkedAccounts)() && (de = (0, xu.jsx)(k.default, {
                    businessProfile: Su.businessProfile,
                    rowTheme: "linked-account-consumer"
                })), (0, xu.jsxs)(su.default, {
                    ref: e,
                    theme: "striped",
                    testid: "chat-info-drawer",
                    children: [(0, xu.jsx)(fu.DrawerHeader, (0, a.default)((0, a.default)({}, fe), {}, {
                        testid: "contact-info-header"
                    })), (0, xu.jsx)(Du.default, {
                        flatListControllers: [_u.current],
                        onScroll: ce,
                        children: (0, xu.jsxs)("section", {
                            className: (0, hu.default)(Bu.body),
                            children: [se, $u, Qu, zu, De, de, Uu, le, Hu, Yu, Wu, ie, re, undefined, !Ru && Vu, !Ru && (0, xu.jsx)(_.default, {
                                contact: Su
                            }), (0, xu.jsx)(g.ChatInfoDrawerButtonsSection, {
                                children: Nu ? (0, xu.jsx)(cu.DrawerButton, {
                                    testid: "li-delete-chat",
                                    icon: (0, xu.jsx)(N.DeleteIcon, {}),
                                    color: "danger",
                                    onClick: function() {
                                        var u = A.ChatCollection.assertGet(Su.id);
                                        j.Cmd.deleteOrExitChatFromEntryPoint(u, 12)
                                    },
                                    theme: "chat-info",
                                    children: V.default.t(221)
                                }) : null
                            })]
                        })
                    })]
                }, "contact-info-modal")
            }
            var Mu = (0, pu.forwardRef)(ju);
            e.default = Mu
        },
        64638: (u, e, t) => {
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
        588317: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = (0, x.useModelValues)(u.contact, ["id", "displayName", "isBusiness", "isContactBlocked", "isIAS", "isMyContact"]),
                    t = (0, B.jsx)(D.Name, {
                        contact: u.contact,
                        skipCheckMark: !0
                    }),
                    n = null;
                n = e.isContactBlocked ? (0, B.jsx)(A.DrawerButton, {
                    testid: "li-unblock",
                    color: "success",
                    icon: (0, B.jsx)(d.SettingsBlockedIcon, {
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
                    icon: (0, B.jsx)(d.SettingsBlockedIcon, {
                        directional: !0
                    }),
                    onClick: function() {
                        var n = function() {
                                var t = r.ChatCollection.get(e.id);
                                if (null == t ? void 0 : t.isPSA) {
                                    var n = t.msgs.last();
                                    (0, C.logChatPSARemove)(n, 1, 1)
                                }(0, a.blockContact)(u.contact, o.BlockEntryPoint.Profile), s.ModalManager.close()
                            },
                            i = (0, B.jsx)(h.ConfirmPopup, {
                                onOK: n,
                                okText: g.fbt._("Block", null, {
                                    hk: "9s17C"
                                }),
                                onCancel: function() {
                                    return s.ModalManager.close()
                                },
                                title: g.fbt._("Block {contact_name}?", [g.fbt._param("contact_name", t)], {
                                    hk: "26yDKy"
                                }),
                                children: g.fbt._("Blocked contacts will no longer be able to call you or send you messages.", null, {
                                    hk: "3ioCkx"
                                })
                            });
                        E.default.isPSA(e.id) ? i = (0, B.jsx)(m.default, {
                            onBlock: n,
                            onCancel: function() {
                                return s.ModalManager.close()
                            }
                        }) : e.isBusiness && (i = (0, B.jsx)(p.default, {
                            contact: e,
                            blockEntryPoint: o.BlockEntryPoint.Profile,
                            withReport: !1
                        })), s.ModalManager.open(i)
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
                var j = E.default.isPSA(e.id) ? null : (0, B.jsx)(A.DrawerButton, {
                    testid: "li-report-spam",
                    color: "danger",
                    icon: (0, B.jsx)(F.ThumbsDownIcon, {}),
                    onClick: function() {
                        s.ModalManager.open((0, B.jsx)(v.default, {
                            isMessage: !1,
                            isBusiness: u.contact.isBusiness,
                            isGroupChat: !1,
                            onReport: function() {
                                var e = r.ChatCollection.get(u.contact.id);
                                e && (0, c.sendReport)({
                                    chat: e,
                                    spamFlow: f.SpamFlow.AccountInfoReport
                                }), s.ModalManager.close()
                            },
                            onReportBlockClear: function() {
                                var e = r.ChatCollection.get(u.contact.id);
                                e && (0, c.sendSpamBlockClear)(e, f.SpamFlow.AccountInfoReport), s.ModalManager.close()
                            },
                            onCancel: function() {
                                return s.ModalManager.close()
                            }
                        }))
                    },
                    theme: "chat-info",
                    children: b
                });
                return (0, B.jsxs)(l.ChatInfoDrawerButtonsSection, {
                    children: [n, j]
                })
            };
            var a = t(994356),
                i = t(556088),
                o = t(354050),
                r = t(202908),
                l = t(988456),
                s = t(628707),
                D = t(246009),
                c = t(517841),
                d = t(133202),
                f = t(233565),
                F = t(949059),
                C = t(263398),
                E = n(t(560911)),
                p = n(t(520575)),
                h = t(404186),
                A = t(455316),
                m = n(t(515476)),
                v = n(t(706903)),
                g = t(548360),
                x = t(948752),
                B = t(785893)
        },
        344262: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.onStarred,
                    t = (0, D.jsx)(l.TextSpan, {
                        theme: "title",
                        size: "16",
                        children: s.fbt._("Starred messages", null, {
                            hk: "4wVbNG"
                        })
                    }),
                    n = (0, D.jsx)(o.StarIcon, {
                        color: r.SvgColorProp.SECONDARY,
                        height: 20
                    });
                return (0, D.jsx)(i.ChatInfoDrawerSection, {
                    titleTestId: "section-starred-messages",
                    children: (0, D.jsx)(a.default, {
                        testid: "block-starred-messages",
                        side: "chevron",
                        icon: n,
                        onClick: e,
                        title: t
                    })
                })
            };
            var a = n(t(167740)),
                i = t(988456),
                o = t(136896),
                r = t(401304),
                l = t(558288),
                s = t(548360),
                D = t(785893)
        },
        691075: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
                return (0, c.jsxs)(l.FlexRow, {
                    xstyle: F.container,
                    children: [(0, c.jsx)(l.FlexColumn, {
                        xstyle: [F.item],
                        children: d
                    }), (0, c.jsx)(l.FlexColumn, {
                        xstyle: [F.text, F.item],
                        children: (0, c.jsx)(s.TextSpan, {
                            children: D.fbt._("This person's phone number is not shared in this chat. {=m2}", [D.fbt._implicitParam("=m2", (0, c.jsx)(a.default, {
                                onClick: f,
                                children: D.fbt._("Learn more", null, {
                                    hk: "t6HJf"
                                })
                            }))], {
                                hk: "3CEKuh"
                            })
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
                c = (n(t(156720)), t(785893)),
                d = (0, c.jsx)(i.DialpadIcon, {
                    directional: !0
                }),
                f = function() {
                    var u = (0, r.getPhoneNumberHidingFaqUrl)();
                    (0, o.openExternalLink)(u)
                },
                F = {
                    container: {
                        alignItems: "gndfcl4n",
                        backgroundColor: "f6ipylw5",
                        borderTopStartRadius: "bbr44loe",
                        borderTopEndRadius: "ooj5yc5b",
                        borderBottomEndRadius: "m8i16etx",
                        borderBottomStartRadius: "cw0ivh8j",
                        display: "p357zi0d",
                        marginTop: "fgtikrv0",
                        marginEnd: "k1jo73ug",
                        marginBottom: "iyjcf3gk",
                        marginStart: "isfiuinm",
                        width: "c0boj6n4",
                        height: "q1n4p668",
                        maxWidth: "l2o74p5l",
                        paddingStart: "nu34rnf1",
                        paddingEnd: "ft2m32mm",
                        lineHeight: "erpdyial"
                    },
                    text: {
                        color: "pm5hny62",
                        marginTop: "m3ct2rho",
                        marginEnd: "k1jo73ug",
                        marginBottom: "ec1z5skj",
                        marginStart: "isfiuinm",
                        wordBreak: "cw3vfol9",
                        overflowWrap: "fd365im1"
                    },
                    item: {
                        marginStart: "p3lsiedt",
                        marginEnd: "q471nw87",
                        paddingTop: "qomlamqu",
                        paddingEnd: "lnjlmjd6",
                        paddingBottom: "bxcbqipq",
                        paddingStart: "mc6o24uu"
                    }
                }
        },
        382691: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t = u.contact,
                    n = u.onDetailImageLoad,
                    a = u.onDetailImageClick,
                    i = u.isMessageYourselfChat,
                    o = u.isPhoneNumberHidden,
                    D = B.fbt._("Official WhatsApp Account", null, {
                        hk: "2cEUzF"
                    });
                if (m.default.isPSA(t.id)) e = D;
                else if (t.isMyContact) e = (0, v.widToFormattedUser)(t.id);
                else {
                    var f = t.notifyName;
                    null != f && (e = `~${f}`)
                }
                return (0, j.jsxs)(g.default, {
                    theme: "padding-large",
                    children: [(0, j.jsx)("div", {
                        className: (0, b.default)(M.avatar),
                        children: (0, j.jsx)(s.DetailImage, {
                            id: t.id,
                            size: s.DetailImageSize.Large,
                            loader: !0,
                            onLoad: n,
                            onClick: a,
                            quality: s.DetailImageQuality.High
                        })
                    }), (0, j.jsxs)(c.FlexColumn, {
                        align: "center",
                        children: [(0, j.jsx)(p.TextHeader, {
                            level: "2",
                            size: "24",
                            xstyle: M.contactName,
                            children: (0, j.jsx)(F.Name, {
                                contact: t,
                                showMessageYourselfName: i,
                                selectable: !0,
                                breakWord: !0
                            })
                        }), null != e && (0, j.jsx)("div", {
                            className: (0, b.default)(M.secondaryWrapper),
                            children: (0, j.jsx)(l.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, j.jsx)(p.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: e
                                })
                            })
                        })]
                    }), o && (0, j.jsx)(r.default, {}), !i && (0, j.jsx)(S, {
                        contact: t,
                        displayRequestPnButton: o
                    }), (0, j.jsx)(d.default, {
                        labels: t.labels
                    })]
                })
            };
            var a = n(t(639835)),
                i = n(t(962617)),
                o = t(564817),
                r = n(t(691075)),
                l = t(160967),
                s = t(207826),
                D = t(403998),
                c = t(208188),
                d = n(t(628580)),
                f = t(628707),
                F = t(246009),
                C = t(962579),
                E = t(378776),
                p = t(558288),
                h = t(593438),
                A = n(t(229677)),
                m = n(t(560911)),
                v = t(221156),
                g = n(t(849788)),
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
            var y = {
                container: {
                    marginTop: "dj1c3cmq",
                    marginBottom: "inww9tbj"
                },
                button: {
                    marginStart: "nzcjdldu",
                    marginEnd: "gqi0zhd6"
                }
            };

            function S(u) {
                var e = u.contact,
                    t = u.displayRequestPnButton,
                    n = (0, i.default)((0, E.unproxy)(e));
                if (!n.isVideoCallEnabled && !n.isVoiceCallEnabled || m.default.isPSA(e.id)) return null;
                var r = B.fbt._("Request", null, {
                        hk: "1Qh451"
                    }),
                    l = B.fbt._("Requested", null, {
                        hk: "3GgAXn"
                    }),
                    s = e.canRequestPhoneNumber ? r : l;
                return (0, j.jsxs)(c.FlexRow, {
                    justify: "center",
                    xstyle: y.container,
                    children: [t && (0, j.jsx)(a.default, {
                        Icon: D.DialpadSmallIcon,
                        iconWidth: 19,
                        label: s,
                        xstyle: y.button,
                        disabled: !e.canRequestPhoneNumber,
                        onClick: function() {
                            f.ModalManager.open((0, j.jsx)(x.default, {
                                entryPoint: A.default.PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST
                            }))
                        },
                        testid: "request-phone-number-button-consumer"
                    }), (0, j.jsx)(a.default, {
                        Icon: h.VoiceCallFilledIcon,
                        iconWidth: 19,
                        label: B.fbt._("Audio", null, {
                            hk: "1b375N"
                        }),
                        testid: "contact-action voice-call-button",
                        xstyle: y.button,
                        disabled: !n.canStartVoiceCall,
                        onClick: function() {
                            (0, C.handleVoipCall)(e, !1)
                        }
                    }), (0, j.jsx)(a.default, {
                        Icon: o.ChatInfoVideoIcon,
                        label: B.fbt._("Video", null, {
                            hk: "3zMUsJ"
                        }),
                        testid: "contact-action video-call-button",
                        xstyle: y.button,
                        disabled: !n.canStartVideoCall,
                        onClick: function() {
                            (0, C.handleVoipCall)(e, !0)
                        }
                    })]
                })
            }
        },
        98009: (u, e, t) => {
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
        724030: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t = u.contact.getStatus(),
                    n = (0, c.useModelValues)(u.contact, ["id", "phoneNumber"]),
                    F = "" === (0, c.useModelValues)(t, ["status"]).status ? null : (0, d.jsx)(a.default, {
                        multiline: !0,
                        children: (0, d.jsx)(l.TextSpan, {
                            theme: "title",
                            children: (0, d.jsx)(D.default, {
                                id: n.id
                            })
                        })
                    });
                n.id.isLid() ? null != n.phoneNumber && (e = n.phoneNumber) : e = n.id;
                var C = e ? (0, d.jsx)(a.default, {
                    separator: !0,
                    children: (0, d.jsx)(o.SelectableSpan, {
                        dir: "auto",
                        selectable: !0,
                        children: (0, d.jsx)(l.TextSpan, {
                            theme: "title",
                            children: (0, s.widToFormattedUser)(e)
                        })
                    })
                }) : null;
                return (0, d.jsxs)(i.ChatInfoDrawerSection, {
                    xstyle: f.container,
                    titleTestId: "section-about-and-phone-number",
                    title: r.default.t(211),
                    children: [F, C]
                })
            };
            var a = n(t(560922)),
                i = t(988456),
                o = t(160967),
                r = n(t(758927)),
                l = t(558288),
                s = t(221156),
                D = n(t(443114)),
                c = (n(t(156720)), t(948752)),
                d = t(785893),
                f = {
                    container: {
                        paddingBottom: "przvwfww"
                    }
                }
        },
        885691: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t = u.contact;
                e = (0, i.canSeeSMBUpsell)() ? (0, F.jsx)(h, {
                    onClick: function() {
                        l.ModalManager.open((0, F.jsx)(s.default, {
                            contact: t
                        }))
                    }
                }) : (0, F.jsx)(p, {
                    onClick: function() {
                        l.ModalManager.open((0, F.jsx)(a.default, {
                            contact: t
                        }))
                    }
                });
                return (0, F.jsx)(c.default, {
                    xstyle: C.businessAccount,
                    children: e
                })
            };
            var a = n(t(581792)),
                i = t(894995),
                o = n(t(209222)),
                r = t(67497),
                l = t(628707),
                s = n(t(436115)),
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
                return (0, F.jsx)(o.default, {
                    testid: "business-title",
                    xstyle: C.businessTitleWithSMBUpsell,
                    onClick: e,
                    side: (0, F.jsx)(r.InfoIcon, {
                        xstyle: C.bannerSvgContainer,
                        iconXstyle: C.bannerSvg,
                        displayInline: !0
                    }),
                    children: E
                })
            }
        },
        62886: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t, n, O = u.contact,
                    L = u.onProductCatalog,
                    G = (0, I.useContext)(P.DrawerContext),
                    V = (0, j.getProductCatalogSessionId)(G),
                    H = (0, F.default)((0, S.unproxy)(u.contact));

                function U() {
                    return (U = (0, i.default)(a.default.mark((function u() {
                        var e;
                        return a.default.wrap((function(u) {
                            for (;;) switch (u.prev = u.next) {
                                case 0:
                                    return u.next = 2, (0, v.findChat)(O.id, "businessActions");
                                case 2:
                                    return e = u.sent, u.next = 5, p.Cmd.openChatFromUnread(e);
                                case 5:
                                    if (u.sent) {
                                        u.next = 8;
                                        break
                                    }
                                    return u.abrupt("return");
                                case 8:
                                    m.DrawerManager.closeDrawerRight(), (0, r.btmThreadsLoggingEnabled)() && h.ComposeBoxActions.addMsgSendingLogAttributes(e, {
                                        handleMultiple: function() {
                                            (0, E.handleActivitiesForChatThreadLogging)([{
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
                var z, q, Y, W = d.ChatCollection.getActive();
                if (!(null == W ? void 0 : W.id.equals(O.id))) {
                    var K, X;
                    (0, l.logMessageClick)(V, null === (K = O.businessProfile) || void 0 === K ? void 0 : K.isProfileLinked, !!(null === (X = O.businessProfile) || void 0 === X ? void 0 : X.coverPhoto)), n = (0, N.jsx)(f.default, {
                        Icon: C.ChatMsgIcon,
                        label: T.fbt._("Message", null, {
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
                H.isVoiceCallEnabled && (z = (0, N.jsx)(f.default, {
                    Icon: _.VoiceCallFilledIcon,
                    label: T.fbt._("Voice call", null, {
                        hk: "393mz4"
                    }),
                    disabled: !H.canStartVoiceCall,
                    onClick: function() {
                        var u, e;
                        (0, l.logVoiceCallClick)(V, null === (u = O.businessProfile) || void 0 === u ? void 0 : u.isProfileLinked, !!(null === (e = O.businessProfile) || void 0 === e ? void 0 : e.coverPhoto)), (0, b.handleVoipCall)(O, !1)
                    },
                    testid: "business-action voice-call"
                }));
                (null === (e = O.businessProfile) || void 0 === e || null === (t = e.profileOptions) || void 0 === t ? void 0 : t.commerceExperience) === s.COMMERCE_EXPERIENCE_TYPES.CATALOG && (q = (0, N.jsx)(f.default, {
                    Icon: c.CatalogFilledIcon,
                    label: T.fbt._("Catalog", null, {
                        hk: "3QDkTE"
                    }),
                    onClick: function() {
                        var u, e;
                        (0, l.logCatalogClick)(V, null === (u = O.businessProfile) || void 0 === u ? void 0 : u.isProfileLinked, !!(null === (e = O.businessProfile) || void 0 === e ? void 0 : e.coverPhoto)), L((0, j.getProductCatalogContext)(G), "ContactInfo")
                    },
                    testid: "business-action catalog"
                }));
                if ((0, D.hasShop)(O.businessProfile)) {
                    (0, r.bannedShopsEnabled)() && (0, D.isShopBanned)(O.businessProfile) || (Y = (0, N.jsx)(f.default, {
                        Icon: y.ShopFilledIcon,
                        label: T.fbt._("Shop", null, {
                            hk: "3KsdlE"
                        }),
                        onClick: function() {
                            var u, e;
                            (0, l.logShopsClick)(V, null === (u = O.businessProfile) || void 0 === u ? void 0 : u.isProfileLinked, !!(null === (e = O.businessProfile) || void 0 === e ? void 0 : e.coverPhoto)), (0, D.goToShop)(O.businessProfile)
                        },
                        testid: "business-action shop"
                    }))
                }
                var Z = !O.isIAS && (0, N.jsx)(f.default, {
                        Icon: x.ForwardFilledIcon,
                        label: T.fbt._("Share", null, {
                            hk: "4F3c6E"
                        }).toString(),
                        onClick: function() {
                            var u, e;
                            (0, l.logForwardClick)(V, null === (u = O.businessProfile) || void 0 === u ? void 0 : u.isProfileLinked, !!(null === (e = O.businessProfile) || void 0 === e ? void 0 : e.coverPhoto)), B.ModalManager.open((0, N.jsx)(M.SendContactsModalLoadable, {
                                contacts: [(0, S.unproxy)(O)],
                                onContactsSent: function(u) {
                                    p.Cmd.openChatFromUnread(u).then((function() {}))
                                }
                            }))
                        },
                        testid: "business-action forward"
                    }),
                    $ = T.fbt._("Request", null, {
                        hk: "1Qh451"
                    }),
                    Q = T.fbt._("Requested", null, {
                        hk: "3GgAXn"
                    }),
                    J = O.canRequestPhoneNumber ? $ : Q,
                    uu = u.displayRequestPnButton && (0, N.jsx)(f.default, {
                        Icon: A.DialpadSmallIcon,
                        iconWidth: 19,
                        label: J,
                        disabled: !O.canRequestPhoneNumber,
                        onClick: function() {
                            B.ModalManager.open((0, N.jsx)(w.default, {
                                entryPoint: k.default.PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST
                            }))
                        },
                        testid: "request-phone-number-button-business"
                    });
                return (0, N.jsxs)(g.FlexRow, {
                    xstyle: R.actionsRow,
                    justify: "evenly",
                    children: [uu, n, z, q, Y, Z]
                })
            };
            var a = n(t(887757)),
                i = n(t(348926)),
                o = t(281098),
                r = t(894995),
                l = t(86243),
                s = t(71100),
                D = t(219450),
                c = t(293625),
                d = t(202908),
                f = n(t(639835)),
                F = n(t(962617)),
                C = t(627915),
                E = t(665912),
                p = t(896674),
                h = t(515918),
                A = t(403998),
                m = t(875058),
                v = t(191649),
                g = t(208188),
                x = t(431221),
                B = t(628707),
                b = t(962579),
                j = t(179677),
                M = t(418122),
                y = t(70568),
                S = t(378776),
                _ = t(593438),
                k = n(t(229677)),
                P = t(445639),
                w = n(t(753643)),
                T = t(548360),
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
        978373: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.businessHours,
                    t = u.isProfileLinked,
                    n = u.hasCoverPhoto,
                    a = (0, c.getProductCatalogSessionId)((0, p.useContext)(C.DrawerContext)),
                    l = (0, r.getBusinessOpenState)(e),
                    s = (0, p.useState)(!0),
                    D = (0, i.default)(s, 2),
                    F = D[0],
                    v = D[1];
                if (null == e) return null;
                var g = (0, d.getBusinessHours)(e).map((function(u) {
                    var e = u.day,
                        t = u.hours,
                        n = u.first,
                        a = e,
                        i = t,
                        o = !1;
                    if (n) switch (l.status) {
                        case r.BUSINESS_OPEN_STATUS.OPEN_24H:
                            a = E.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), i = E.fbt._("Open 24 hours", null, {
                                hk: "1AlfF5"
                            }), o = !0;
                            break;
                        case r.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                            a = E.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), i = E.fbt._("Open by appointment only", null, {
                                hk: "1nxH9v"
                            }), o = !0;
                            break;
                        case r.BUSINESS_OPEN_STATUS.OPEN:
                            a = E.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), o = !0;
                            break;
                        case r.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                            i = E.fbt._("Closed", null, {
                                hk: "3IRgct"
                            })
                    }
                    return !n && F ? null : (0, h.jsx)(m, {
                        day: a,
                        dayIsOpen: o,
                        hours: i,
                        first: n,
                        collapsed: F
                    }, e)
                }));
                return (0, h.jsx)(f.default, {
                    xstyle: A.businessHours,
                    onClick: function() {
                        (0, o.logHoursClick)(a, t, !!n), v(!F)
                    },
                    testid: "business-hours-expand",
                    children: g
                })
            };
            var a = n(t(859713)),
                i = n(t(963038)),
                o = t(86243),
                r = t(219450),
                l = t(275394),
                s = t(157405),
                D = t(990055),
                c = t(179677),
                d = t(221289),
                f = n(t(83938)),
                F = n(t(480826)),
                C = t(445639),
                E = t(548360),
                p = t(667294),
                h = (n(t(156720)), t(785893)),
                A = {
                    businessHours: {
                        display: "f804f6gw",
                        width: "ln8gz9je",
                        textAlign: "ml4r5409"
                    }
                };

            function m(u) {
                if (u.first) {
                    var e, t, n = (0, h.jsx)("div", {
                        className: F.default.businessHoursChevron,
                        role: "button",
                        children: (0, h.jsx)(l.ChevronDownAltIcon, {
                            className: u.collapsed ? "" : F.default.flipSvg,
                            displayInline: !0
                        })
                    });
                    return (0, h.jsxs)("div", {
                        className: (0, s.cx)((e = {}, (0, a.default)(e, F.default.firstRow, u.first), (0, a.default)(e, F.default.businessHoursRow, !0), e)),
                        children: [(0, h.jsx)("div", {
                            className: (0, s.cx)((t = {}, (0, a.default)(t, F.default.dayIsOpen, u.dayIsOpen), (0, a.default)(t, F.default.businessHoursDay, !0), t)),
                            children: (0, h.jsx)(D.EmojiText, {
                                direction: "auto",
                                text: u.day
                            })
                        }), (0, h.jsx)("div", {
                            className: F.default.businessHoursHours,
                            children: (0, h.jsx)(D.EmojiText, {
                                direction: "auto",
                                text: u.hours
                            })
                        }), n]
                    })
                }
                return (0, h.jsxs)("div", {
                    className: F.default.businessHoursRow,
                    children: [(0, h.jsx)("div", {
                        className: F.default.businessHoursDay,
                        children: (0, h.jsx)(D.EmojiText, {
                            direction: "auto",
                            text: u.day
                        })
                    }), (0, h.jsx)("div", {
                        className: F.default.businessHoursHours,
                        children: (0, h.jsx)(D.EmojiText, {
                            direction: "auto",
                            text: u.hours
                        })
                    })]
                })
            }
        },
        577482: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t, n, v, g, x, B = u.businessProfile,
                    b = (0, h.useModelValues)(B, ["description", "address", "latitude", "longitude", "website", "email", "businessHours", "isProfileLinked", "coverPhoto"]),
                    j = b.description,
                    M = b.address,
                    y = b.latitude,
                    S = b.longitude,
                    _ = b.website,
                    k = b.email,
                    P = b.businessHours,
                    w = b.isProfileLinked,
                    T = b.coverPhoto,
                    I = (0, p.useContext)(C.DrawerContext),
                    N = (0, d.getProductCatalogSessionId)(I);
                null != j && (e = (0, A.jsx)("div", {
                    className: F.default.section,
                    children: (0, A.jsx)(s.ExpandableText, {
                        text: j,
                        textLimit: r.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                        children: function(u) {
                            var e = u.textLimit;
                            return (0, A.jsx)(l.EmojiText, {
                                className: F.default.description,
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
                    className: F.default.section,
                    children: (0, A.jsx)(a.default, {
                        businessHours: P,
                        isProfileLinked: w,
                        hasCoverPhoto: !!T
                    })
                }));
                null != M && (n = (0, A.jsx)("div", {
                    className: F.default.section,
                    children: (0, A.jsx)(l.EmojiText, {
                        selectable: !0,
                        direction: "auto",
                        text: M
                    })
                }));
                null != y && null != S && (v = (0, A.jsx)("div", {
                    style: {
                        height: 132
                    },
                    className: (0, E.default)(F.default.section, F.default.map),
                    children: (0, A.jsx)(c.default, {
                        lat: y,
                        lng: S,
                        name: M || "",
                        width: 590,
                        height: 132,
                        onClick: function() {
                            return (0, i.logLocationClick)(N, w, !!T)
                        },
                        testid: "business-info-map"
                    })
                }));
                null != k && (g = (0, A.jsx)("div", {
                    className: F.default.section,
                    children: (0, A.jsx)(D.ExternalLink, {
                        href: `mailto:${k}`,
                        onClick: function() {
                            return (0, i.logEmailClick)(N, w, !!T)
                        },
                        testid: "business-info-email",
                        children: k
                    })
                }));
                null != _ && _.length > 0 && (x = (0, A.jsx)("div", {
                    className: F.default.section,
                    children: _.map((function(u) {
                        return (0, A.jsx)("div", {
                            children: (0, A.jsx)(D.ExternalLink, {
                                href: f.default.toMaliciousSiteRedirect(u),
                                onClick: function() {
                                    return (0, i.logWebsiteClick)(N, w, !!T)
                                },
                                testid: "business-info-website",
                                children: u
                            })
                        }, u)
                    }))
                }));
                if (null == e && null == t && null == n && null == v && null == g && null == x) return null;
                return (0, A.jsxs)(o.ChatInfoDrawerSection, {
                    xstyle: m.container,
                    children: [e, t, n, v, g, x]
                })
            };
            var a = n(t(978373)),
                i = t(86243),
                o = t(988456),
                r = n(t(442435)),
                l = t(990055),
                s = t(485009),
                D = t(192070),
                c = n(t(822837)),
                d = t(179677),
                f = n(t(728650)),
                F = n(t(452674)),
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
        337649: (u, e, t) => {
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
        761591: (u, e, t) => {
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
            var a = t(219450),
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
        238424: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BusinessProfile = function(u) {
                var e, t, n, a, i, r, c, d = (0, I.useModelValues)(u.contact, ["id", "verifiedLevel", "name", "verifiedName"]),
                    F = (0, I.useModelValues)(u.businessProfile, ["description", "categories", "website", "email", "stale", "latitude", "longitude", "businessHours", "structuredAddress"]);
                (0, T.useEffect)((function() {
                    new y.default.ViewBusinessProfile({
                        viewBusinessProfileAction: y.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION
                    }).commit()
                }), []), e = (0, o.canSeeSMBUpsell)() ? (0, N.jsx)(R, {
                    contact: d
                }) : (0, N.jsx)(L, {
                    contact: d
                });
                var E = F;
                if (E.stale) t = (0, N.jsx)("div", {
                    className: S.default.contactBusinessInfoSpinner,
                    children: (0, N.jsx)(M.Spinner, {
                        size: 20,
                        stroke: 5
                    })
                });
                else {
                    var m;
                    n = (null === (m = E.categories) || void 0 === m ? void 0 : m.length) ? (0, N.jsx)(H, {
                        icon: (0, N.jsx)(l.BusinessCategoryIcon, {}),
                        children: (0, N.jsx)(p.EmojiText, {
                            selectable: !0,
                            direction: "auto",
                            text: E.categories.map((function(u) {
                                return u.localized_display_name
                            })).join(v.default.t(253))
                        })
                    }) : null, a = E.description ? (0, N.jsx)(H, {
                        icon: (0, N.jsx)(s.BusinessDescriptionIcon, {}),
                        children: (0, N.jsx)(h.ExpandableText, {
                            text: E.description,
                            textLimit: C.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                            children: function(u) {
                                var e = u.textLimit;
                                return (0, N.jsx)(p.EmojiText, {
                                    selectable: !0,
                                    direction: "auto",
                                    breakWord: !0,
                                    text: E.description,
                                    textLimit: e
                                })
                            }
                        })
                    }) : null, E.website && Array.isArray(E.website) && E.website.length && (i = E.website.map((function(u, e) {
                        var t = (0, j.getWebsiteLink)(u),
                            n = (0, N.jsx)(p.EmojiText, {
                                selectable: !0,
                                direction: "auto",
                                text: u
                            }),
                            a = (0, N.jsx)(A.ExternalLink, {
                                className: S.default.link,
                                href: t,
                                children: n
                            });
                        return (0, N.jsx)(H, {
                            icon: (0, N.jsx)(f.BusinessWebsiteIcon, {}),
                            children: a
                        }, e)
                    }))), E.businessHours && (r = (0, N.jsx)(O, {
                        businessHours: E.businessHours
                    }));
                    var g = E.email;
                    if (g) {
                        var x = (0, N.jsx)(p.EmojiText, {
                                selectable: !0,
                                direction: "auto",
                                text: g
                            }),
                            B = (0, N.jsx)(A.ExternalLink, {
                                className: S.default.link,
                                href: `mailto:${g}`,
                                children: x
                            });
                        c = (0, N.jsx)(H, {
                            icon: (0, N.jsx)(D.BusinessEmailIcon, {}),
                            dir: "auto",
                            children: B
                        })
                    }
                }
                var b, _ = void 0 !== E.latitude && void 0 !== E.longitude || E.structuredAddress;
                (t || _ || n || a || null != r || c || i) && (b = (0, N.jsx)(k.default, {
                    theme: "padding",
                    children: (0, N.jsxs)("div", {
                        className: S.default.contactBusinessInfo,
                        children: [t, (0, N.jsx)(V, {
                            contactName: d.name,
                            latitude: E.latitude,
                            longitude: E.longitude,
                            structuredAddress: E.structuredAddress
                        }), n, a, r, c, i]
                    })
                }));
                return (0, N.jsxs)(N.Fragment, {
                    children: [(0, N.jsx)(k.default, {
                        children: e
                    }), b]
                })
            };
            var a = n(t(963038)),
                i = n(t(581792)),
                o = t(894995),
                r = t(725536),
                l = t(141193),
                s = t(361648),
                D = t(80943),
                c = t(136068),
                d = t(71100),
                f = t(228855),
                F = t(275394),
                C = n(t(442435)),
                E = n(t(209222)),
                p = t(990055),
                h = t(485009),
                A = t(192070),
                m = t(67497),
                v = n(t(758927)),
                g = n(t(822837)),
                x = t(385764),
                B = t(628707),
                b = n(t(436115)),
                j = t(221289),
                M = t(96293),
                y = n(t(229677)),
                S = n(t(814060)),
                _ = t(455316),
                k = n(t(849788)),
                P = t(548360),
                w = n(t(706442)),
                T = t(667294),
                I = t(948752),
                N = t(785893);

            function R(u) {
                var e = u.contact,
                    t = e.verifiedLevel === d.VERIFIED_LEVEL.HIGH ? P.fbt._("Official business account", null, {
                        hk: "1KruJ"
                    }) : P.fbt._("Business account", null, {
                        hk: "2lzdAg"
                    });
                return (0, N.jsx)(E.default, {
                    testid: "business-title",
                    onClick: B.ModalManager.open((0, N.jsx)(b.default, {
                        contact: e
                    })),
                    side: (0, N.jsx)(m.InfoIcon, {
                        className: S.default.infoIcon,
                        displayInline: !0
                    }),
                    children: t
                })
            }

            function O(u) {
                var e = u.businessHours,
                    t = (0, T.useState)(!0),
                    n = (0, a.default)(t, 2),
                    i = n[0],
                    o = n[1],
                    r = (0, j.getBusinessHours)(e).map((function(u) {
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
                    icon: (0, N.jsx)(c.BusinessHoursIcon, {}),
                    onClick: function() {
                        return o(!i)
                    },
                    children: r
                })
            }

            function L(u) {
                var e, t = u.contact;
                switch (t.verifiedLevel) {
                    case d.VERIFIED_LEVEL.HIGH:
                        e = P.fbt._("Official business account", null, {
                            hk: "1KruJ"
                        });
                        break;
                    case d.VERIFIED_LEVEL.LOW:
                    case d.VERIFIED_LEVEL.UNKNOWN:
                        e = P.fbt._("Business account", null, {
                            hk: "2lzdAg"
                        })
                }
                return (0, N.jsx)(_.DrawerButton, {
                    testid: "business-title",
                    className: S.default.businessTitleText,
                    onClick: function() {
                        B.ModalManager.open((0, N.jsx)(i.default, {
                            contact: t
                        }))
                    },
                    children: e
                })
            }
            var G = function(u) {
                var e = u.first ? (0, N.jsx)("div", {
                    className: S.default.businessHoursChevron,
                    role: "button",
                    children: (0, N.jsx)(F.ChevronDownAltIcon, {
                        className: u.collapsed ? "" : S.default.flipSvg,
                        displayInline: !0
                    })
                }) : null;
                return (0, N.jsxs)("div", {
                    className: S.default.businessHoursRow,
                    children: [(0, N.jsx)("div", {
                        className: S.default.businessHoursDay,
                        children: (0, N.jsx)(p.EmojiText, {
                            direction: "auto",
                            text: u.day
                        })
                    }), (0, N.jsx)("div", {
                        className: S.default.businessHoursHours,
                        children: (0, N.jsx)(p.EmojiText, {
                            direction: "auto",
                            text: u.hours
                        })
                    }), e]
                })
            };
            var V = function(u) {
                    var e, t, n, a = u.contactName,
                        i = u.latitude,
                        o = u.longitude,
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
                    (null != i && null != o && (e = (0, N.jsx)("div", {
                        style: {
                            height: 150
                        },
                        className: S.default.businessMap,
                        children: (0, N.jsx)(g.default, {
                            lat: i,
                            lng: o,
                            name: s || a,
                            width: 565,
                            height: 150
                        })
                    })), s) && (n = null != i && null != o ? (0, x.getMapUrl)(i, o, s) : (0, x.getSearchUrl)(s), t = (0, N.jsx)("div", {
                        className: S.default.address,
                        children: (0, N.jsx)(A.ExternalLink, {
                            href: n,
                            children: (0, N.jsx)(p.EmojiText, {
                                selectable: !0,
                                direction: "auto",
                                text: s
                            })
                        })
                    }));
                    return t || e ? (0, N.jsxs)(H, {
                        icon: (0, N.jsx)(r.BusinessAddressIcon, {}),
                        children: [t, e]
                    }) : null
                },
                H = function(u) {
                    return (0, N.jsxs)("div", {
                        className: (0, w.default)(S.default.dataRow, u.className),
                        onClick: u.onClick,
                        children: [(0, N.jsx)("div", {
                            className: S.default.dataRowIcon,
                            children: u.icon
                        }), (0, N.jsx)("div", {
                            className: S.default.dataRowText,
                            children: u.children
                        })]
                    })
                }
        },
        904792: (u, e, t) => {
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
                    b = (0, f.jsx)(i.default, {
                        contact: t,
                        isMessageYourselfChat: m
                    });
                null != B && B.length > 0 && (e = t.isIAS ? null : (0, f.jsx)("div", {
                    className: (0, c.default)(C),
                    children: B.map((function(u) {
                        return u.localized_display_name
                    })).join(s.default.t(252))
                }));
                var j = x ? (0, f.jsx)(o.BusinessOpenHours, {
                        hours: x
                    }) : null,
                    M = t.businessProfile ? (0, f.jsx)(r.default, {
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
                        children: [b, v && (0, f.jsx)(l.default, {}), e, j, (0, f.jsx)(a.default, {
                            contact: t,
                            onProductCatalog: p,
                            displayRequestPnButton: v
                        })]
                    })]
                })
            };
            var a = n(t(62886)),
                i = n(t(337649)),
                o = t(761591),
                r = n(t(720138)),
                l = n(t(691075)),
                s = n(t(758927)),
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
        638163: (u, e, t) => {
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
                i = t(124990),
                o = t(519896),
                r = t(207826),
                l = t(990055),
                s = n(t(758927)),
                D = t(380568),
                c = t(401304),
                d = t(558288),
                f = n(t(452639)),
                F = n(t(849788)),
                C = t(548360),
                E = t(667294),
                p = t(948752),
                h = t(785893)
        },
        887119: (u, e, t) => {
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
                if (!(0, r.communitiesEnabled)() || !x || null != g || B < b) return null;
                return (0, m.jsx)(E.default, {
                    theme: "no-padding",
                    children: (0, m.jsx)(i.default, {
                        testid: "group-info-create-community-section",
                        image: (0, m.jsx)(l.CommunitySquircleIcon, {
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
                            s.DrawerManager.openDrawerLeft((0, m.jsx)(c.NewCommunityFlowLoadable, {
                                loggingSessionId: u,
                                existingGroups: [n]
                            }), {
                                focusType: D.FocusType.TABBABLE
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
                r = t(442801),
                l = t(297125),
                s = t(875058),
                D = t(756847),
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
        17992: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t = u.chat,
                    n = (0, s.useOptionalModelValues)(t.groupMetadata, ["groupType"]);
                e = (0, i.communitiesEnabled)() && (null == n ? void 0 : n.groupType) === o.GroupType.DEFAULT_ANNOUNCEMENT_GROUP ? (0, D.jsx)("div", {
                    className: (0, l.default)(c),
                    children: r.fbt._("", null, {
                        hk: "4kc4Kr"
                    })
                }) : r.fbt._("Add group description", null, {
                    hk: "BVsoQ"
                });
                return (0, D.jsx)(a.default, {
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
            var a = n(t(887201)),
                i = t(442801),
                o = t(894286),
                r = t(548360),
                l = n(t(156720)),
                s = t(948752),
                D = t(785893),
                c = {
                    color: "tviruh8d",
                    fontSize: "enbbiyaj"
                }
        },
        208450: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(45655)),
                i = t(762933),
                o = t(800469),
                r = n(t(167740)),
                l = t(988456),
                s = n(t(636244)),
                D = t(282748),
                c = t(442801),
                d = t(217332),
                f = t(212390),
                F = n(t(979163)),
                C = n(t(638163)),
                E = n(t(887119)),
                p = n(t(17992)),
                h = n(t(809520)),
                A = t(704337),
                m = n(t(863289)),
                v = n(t(911295)),
                g = t(742170),
                x = n(t(343190)),
                B = t(894286),
                b = t(947974),
                j = n(t(758927)),
                M = t(518005),
                y = t(628707),
                S = n(t(295418)),
                _ = t(469073),
                k = t(780532),
                P = t(475426),
                w = n(t(408590)),
                T = t(136896),
                I = t(378776),
                N = t(10993),
                R = t(892356),
                O = t(401304),
                L = t(558288),
                G = t(236539),
                V = t(422210),
                H = t(14115),
                U = t(966808),
                z = n(t(229677)),
                q = t(403056),
                Y = t(173725),
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
                Du = (0, G.genId)("max_participant_toast");

            function cu(u, e) {
                var t, n, cu, du = u.onVerification,
                    fu = u.onClose,
                    Fu = (0, ru.default)(),
                    Cu = (0, nu.default)(),
                    Eu = (0, ou.useModelValues)(u.chat, ["mute", "id", "pendingAction", "groupMetadata"]),
                    pu = (0, ou.useModelValues)(u.groupMetadata, ["id", "cachedDeviceCount", "cachedDeviceSizeBucket", "participants", "parentGroup", "pendingParticipants", "announce", "support", "incognito", "groupType", "restrict", "isIncognitoCag"]);
                (0, ou.useModelValues)(u.contact, ["name", "id", "pendingAction"]);
                var hu = pu.groupType === B.GroupType.DEFAULT_ANNOUNCEMENT_GROUP,
                    Au = (0, au.default)((function() {
                        return new z.default.UiAction({
                            uiActionType: hu ? z.default.UI_ACTION_TYPE.DEFAULT_SUBGROUP_INFO_OPEN : z.default.UI_ACTION_TYPE.GROUP_INFO_OPEN,
                            uiActionPreloaded: !0,
                            isLid: pu.isIncognitoCag
                        })
                    })),
                    mu = (0, au.default)((function() {
                        return new F.default
                    })),
                    vu = (0, au.default)((function() {
                        return new F.default
                    })),
                    gu = (0, eu.useRef)(null);
                (0, iu.useListener)(pu.participants, ["bulk_add", "bulk_remove", "reset", "sort", "change:isAdmin", "change:isSuperAdmin"], Cu), (0, iu.useListener)(pu.pendingParticipants, ["add", "remove", "reset"], Cu);
                var xu, Bu = function() {
                    var u, e = (0, M.getGroupSizeLimit)(pu.groupType),
                        t = null === (u = pu.getParentGroupChat()) || void 0 === u ? void 0 : u.formattedTitle;
                    if (pu.participants.length >= e) {
                        var n = j.default.t(48, {
                            max: e
                        });
                        V.ToastManager.open((0, lu.jsx)(G.Toast, {
                            msg: n,
                            id: Du
                        }))
                    } else {
                        var i = (0, lu.jsx)(a.default, {
                            chat: (0, I.unproxy)(Eu),
                            pushTransition: "none",
                            popTransition: "none",
                            communityName: t
                        });
                        y.ModalManager.open(i, {
                            transition: "modal-flow"
                        })
                    }
                };
                if ((0, eu.useEffect)((function() {
                        (0, o.isIntegritySuspendedDefaultSubgroup)(Eu) ? (0, N.openTerminatedCommunityModal)() : (0, o.isTerminatedGroupOrNotMember)(Eu) ? (0, R.openTerminatedGroupOrNotMemberModal)() : (0, o.isSuspendedGroup)(Eu) && (0, R.openSuspendedGroupModal)(!0 === (0, o.shouldIncludeEntityIdInAppealRequest)() ? pu.id.user.toString() : null)
                    }), []), (0, eu.useEffect)((function() {
                        pu.participants.ensureSorted(), pu.pendingParticipants.ensureSorted()
                    })), (0, eu.useEffect)((function() {
                        var u = Au.current;
                        if (u) {
                            var e = pu.cachedDeviceSizeBucket;
                            null != e && (u.sizeBucket = e), Object.assign(u, (0, U.getGroupCountMetricsFromGroupMetadata)((0, I.unproxy)(pu))), u.markUiActionT(), u.commit(), Au.current = void 0
                        }(0, q.logUiActionShadowPrivateStatsTestEvents)()
                    }), []), pu.canSetGroupProperty()) {
                    var bu = (0, lu.jsx)(L.TextSpan, {
                            theme: "title",
                            children: uu.fbt._("Group settings", null, {
                                hk: "3sS0Vl"
                            })
                        }),
                        ju = (0, lu.jsx)(P.SettingsIcon, {
                            color: O.SvgColorProp.SECONDARY,
                            height: 17
                        });
                    xu = (0, lu.jsx)(r.default, {
                        testid: "group-settings-row",
                        side: "chevron",
                        icon: ju,
                        onClick: u.onAdminSetting,
                        title: bu
                    })
                }
                var Mu = null;
                u.onMediaGallery && (Mu = (0, lu.jsx)(s.default, {
                    onMediaGallery: u.onMediaGallery,
                    chat: (0, I.unproxy)(Eu)
                }));
                var yu = Eu && (0, i.shouldShowEphemeralSetting)(Eu) ? (0, lu.jsx)(d.EphemeralSettingRow, {
                        onClick: u.onEphemeral,
                        chat: Eu,
                        groupMetadata: pu,
                        testid: "contact-info-dm-setting-row"
                    }) : null,
                    Su = null;
                if ((0, c.communitiesEnabled)() && Eu && pu.parentGroup && pu.participants.iAmMember()) {
                    var _u = pu.getParentGroupChat();
                    (null == _u ? void 0 : _u.groupMetadata) && (Su = (0, lu.jsx)(C.default, {
                        onClick: function() {
                            var e;
                            null === (e = u.onCommunityClick) || void 0 === e || e.call(u)
                        },
                        parentGroupMetadata: _u.groupMetadata,
                        parentGroupChat: _u
                    }))
                }
                var ku = null;
                ku = (0, lu.jsx)(J.default, {
                    highlightSurface: z.default.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
                    onClick: function() {
                        if ((0, M.isPrivacyNarrativeV1Enabled)() && (0, _.shouldShowNewE2eInfoModal)((0, I.unproxy)(Eu))) {
                            var u = (0, f.getE2EFaqUrl)();
                            y.ModalManager.open((0, lu.jsx)(Q.E2eInfoModalV2, {
                                highlightSurface: z.default.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
                                url: u
                            }))
                        } else y.ModalManager.open((0, lu.jsx)($.default, {
                            highlightSurface: z.default.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
                            chatId: Eu.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    },
                    text: (0, H.isGroupCallEnabled)() ? uu.fbt._("Messages and calls are end-to-end encrypted. Click to learn more.", null, {
                        hk: "1l9pwW"
                    }) : uu.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "2MtPh9"
                    })
                }), (0, o.isSupportGroup)(Eu) && (ku = (0, lu.jsx)(x.default, {
                    onClick: function() {
                        y.ModalManager.open((0, lu.jsx)($.default, {
                            chat: Eu,
                            chatId: Eu.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    }
                }));
                var Pu, wu = Eu.mute.canMute() ? (0, lu.jsx)(S.default, {
                        chat: Eu,
                        mute: Eu.mute,
                        settings: w.default
                    }) : null,
                    Tu = null;
                if (u.onStarred) {
                    var Iu = (0, lu.jsx)(L.TextSpan, {
                            theme: "title",
                            size: "16",
                            children: uu.fbt._("Starred messages", null, {
                                hk: "4wVbNG"
                            })
                        }),
                        Nu = (0, lu.jsx)(T.StarIcon, {
                            color: O.SvgColorProp.SECONDARY,
                            height: 20
                        });
                    Tu = (0, lu.jsx)(l.ChatInfoDrawerSection, {
                        titleTestId: "section-starred-messages",
                        children: (0, lu.jsx)(r.default, {
                            testid: "block-starred-messages",
                            side: "chevron",
                            icon: Nu,
                            onClick: u.onStarred,
                            title: Iu
                        })
                    })
                }
                if ((0, Y.isKeepInChatReadAndUIEnabled)() && (Eu.hasKeptMsgs() || (0, i.isEphemeralSettingOn)(Eu))) {
                    var Ru = (0, lu.jsx)(L.TextSpan, {
                            theme: "title",
                            size: "16",
                            children: uu.fbt._("Kept Messages", null, {
                                hk: "41CBIy"
                            })
                        }),
                        Ou = pu.restrict ? (0, lu.jsx)(L.TextDiv, {
                            theme: "muted",
                            children: uu.fbt._("Only admins can keep or unkeep messages in this group.", null, {
                                hk: "2Uhjiy"
                            })
                        }) : null,
                        Lu = (0, lu.jsx)(b.KeepInChatIcon, {
                            color: O.SvgColorProp.SECONDARY,
                            height: 20
                        });
                    Pu = (0, lu.jsx)(l.ChatInfoDrawerSection, {
                        titleTestId: "section-kept-messages",
                        xstyle: su.lastSectionRow,
                        children: (0, lu.jsx)(r.default, {
                            testid: "block-kept-messages",
                            side: "chevron",
                            icon: Lu,
                            onClick: u.onKept,
                            title: Ru,
                            secondaryTitle: Ou
                        })
                    })
                }
                var Gu = (0, k.isReactionsEnabledInCAG)(Eu) ? (0, lu.jsx)(D.PhoneNumberVisibilityIndicatorCag, {
                        chat: Eu
                    }) : null,
                    Vu = null;
                (wu || ku || yu) && (Vu = (0, lu.jsxs)(l.ChatInfoDrawerSection, {
                    xstyle: su.lastSectionRow,
                    children: [wu, yu, ku, xu, Gu]
                }));
                var Hu = (0, lu.jsx)(h.default, {
                        chat: (0, I.unproxy)(Eu)
                    }),
                    Uu = Boolean(null === (t = Eu.groupMetadata) || void 0 === t ? void 0 : t.isIncognitoCag) && !(null === (n = Eu.groupMetadata) || void 0 === n || null === (cu = n.participants) || void 0 === cu ? void 0 : cu.iAmAdmin()) ? (0, lu.jsx)(Z.default, {
                        theme: "transparent",
                        shadow: !1,
                        children: (0, lu.jsx)(L.TextParagraph, {
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
                            fu ? fu() : null == Fu || Fu.requestDismiss()
                        },
                        testid: "group-info-header"
                    }), (0, lu.jsx)(K.default, {
                        flatListControllers: [vu.current, mu.current],
                        children: (0, lu.jsxs)("section", {
                            className: (0, tu.default)(su.body),
                            "data-testid": "group-info-drawer-body",
                            children: [(0, lu.jsx)(v.default, {
                                chat: (0, I.unproxy)(Eu),
                                onAdminSetting: u.onAdminSetting,
                                onAddParticipant: Bu,
                                onClickParticipantsCount: function() {
                                    var u;
                                    null === (u = gu.current) || void 0 === u || u.scrollIntoView()
                                }
                            }), Su, (0, lu.jsx)(p.default, {
                                chat: (0, I.unproxy)(Eu),
                                showFullDescription: u.showFullGroupDescription
                            }), Mu, Tu, Pu, Vu, undefined, (0, lu.jsx)(E.default, {
                                groupMetadata: pu
                            }), (0, lu.jsx)(A.GroupInfoParticipantsSection, {
                                ref: gu,
                                chat: (0, I.unproxy)(Eu),
                                scrollToParticipantList: u.scrollToParticipantList,
                                flatListController: mu.current,
                                onAddParticipant: Bu,
                                onOpenParticipantSearch: function(u) {
                                    y.ModalManager.open((0, lu.jsx)(g.GroupParticipantsFlow, {
                                        chat: (0, I.unproxy)(Eu),
                                        onVerification: du,
                                        initialStep: u
                                    }), {
                                        transition: "modal-flow"
                                    })
                                },
                                onGroupInviteLink: u.onGroupInviteLink,
                                onPendingParticipants: u.onPendingParticipants,
                                onVerification: u.onVerification
                            }), Uu, (0, lu.jsx)(m.default, {
                                chat: (0, I.unproxy)(Eu),
                                flatListController: vu.current
                            }), Hu]
                        })
                    })]
                }, "contact-info-modal")
            }
            var du = (0, eu.forwardRef)(cu);
            e.default = du
        },
        809520: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t = u.chat,
                    n = null !== (e = (0, b.useOptionalModelValues)(t.groupMetadata, ["parentGroup", "participants"])) && void 0 !== e ? e : {},
                    a = n.participants,
                    i = n.parentGroup,
                    l = (null == a ? void 0 : a.iAmAdmin()) && (0, o.isCommunityAnnouncementGroup)(t),
                    D = (0, M.jsx)(S, {
                        chat: t
                    }),
                    c = (0, o.isTerminatedGroup)(t) ? null : (0, M.jsx)(y, {
                        chat: t,
                        showAdditionalAction: !l
                    }),
                    d = !(0, s.communitiesEnabled)() || (0, o.isCommunityAnnouncementGroup)(t) || null == i ? null : (0, M.jsx)(_, {
                        chat: t,
                        parentGroup: i
                    });
                return (0, M.jsxs)(r.ChatInfoDrawerButtonsSection, {
                    children: [d, D, c]
                })
            };
            var a = n(t(963038)),
                i = t(519509),
                o = t(800469),
                r = t(988456),
                l = t(896674),
                s = t(442801),
                D = t(584973),
                c = t(517247),
                d = n(t(921491)),
                f = t(518005),
                F = t(628707),
                C = t(517841),
                E = t(233565),
                p = t(892356),
                h = t(949059),
                A = n(t(452639)),
                m = t(455316),
                v = n(t(706903)),
                g = t(548360),
                x = t(667294),
                B = n(t(554327)),
                b = t(948752),
                j = n(t(788413)),
                M = t(785893);

            function y(u) {
                var e = u.chat,
                    t = u.showAdditionalAction;
                return (0, M.jsx)(m.DrawerButton, {
                    testid: "li-report-spam",
                    color: "danger",
                    icon: (0, M.jsx)(h.ThumbsDownIcon, {}),
                    theme: "chat-info",
                    onClick: function() {
                        F.ModalManager.open((0, M.jsx)(v.default, {
                            isMessage: !1,
                            isGroupChat: !0,
                            showAdditionalActionCheckbox: t,
                            onReport: function() {
                                (0, C.sendReport)({
                                    chat: e,
                                    spamFlow: E.SpamFlow.GroupInfoReport
                                }), F.ModalManager.close()
                            },
                            onReportExitClear: function() {
                                (0, C.sendSpamExitClear)(e, E.SpamFlow.GroupInfoReport), F.ModalManager.close()
                            },
                            onCancel: function() {
                                return F.ModalManager.close()
                            }
                        }))
                    },
                    children: g.fbt._("Report group", null, {
                        hk: "23NLqw"
                    })
                })
            }

            function S(u) {
                var e, t = (0, b.useModelValues)(u.chat, ["isReadOnly"]),
                    n = function() {
                        l.Cmd.deleteOrExitChat(u.chat)
                    };
                return t.isReadOnly ? e = g.fbt._("Delete group", null, {
                    hk: "2MKJYs"
                }) : !(0, o.isCommunityAnnouncementGroup)(t) && (0, o.isSuspendedGroup)(t) && (0, f.isGroupSuspendV2Enabled)() ? (e = g.fbt._("Exit group and delete", null, {
                    hk: "1Szubg"
                }), n = function() {
                    (0, p.openExitAndDeleteGroupModal)(u.chat)
                }) : e = g.fbt._("Exit group", null, {
                    hk: "3EOkxm"
                }), (0, M.jsx)(m.DrawerButton, {
                    testid: "li-delete-group",
                    icon: (0, M.jsx)(c.ExitIcon, {
                        directional: !0
                    }),
                    color: "danger",
                    theme: "chat-info",
                    onClick: n,
                    children: e
                })
            }

            function _(u) {
                var e = u.chat,
                    t = u.parentGroup,
                    n = (0, j.default)(),
                    o = (0, b.useModelValues)(e, ["groupMetadata", "isReadOnly", "id", "formattedTitle"]),
                    r = o.groupMetadata,
                    l = o.isReadOnly,
                    s = o.id,
                    f = o.formattedTitle,
                    F = d.default.get(t.toString()),
                    C = Boolean((0, B.default)(null == F ? void 0 : F.participants, ["bulk_add", "bulk_remove"], (function() {
                        return null == F ? void 0 : F.participants.iAmAdmin()
                    }))),
                    E = Boolean((0, B.default)(null == r ? void 0 : r.participants, ["bulk_add", "bulk_remove"], (function() {
                        return null == r ? void 0 : r.participants.iAmAdmin()
                    }))),
                    p = (0, A.default)(F),
                    h = p.joinedSubgroups,
                    v = p.unjoinedSubgroups,
                    y = p.subgroupCount,
                    S = (0, x.useState)(!1),
                    _ = (0, a.default)(S, 2),
                    k = _[0],
                    P = _[1];
                if (l || null == h || null == v || !C && (!E || !(0, i.getABPropConfigValue)("allow_subgroup_admin_to_unlink"))) return null;
                return (0, M.jsx)(m.DrawerButton, {
                    testid: "li-remove-group-from-community",
                    icon: (0, M.jsx)(c.ExitIcon, {
                        directional: !0
                    }),
                    disabled: k,
                    color: "danger",
                    theme: "chat-info",
                    onClick: function() {
                        k || n.aborted || ((0, D.handleRemoveSubgroup)({
                            parentId: t,
                            currentSubgroupCount: y,
                            removedSubgroupWid: s,
                            removedSubgroupTitle: f,
                            setLoading: P,
                            iAmCommunityAdmin: C
                        }), n.aborted)
                    },
                    children: g.fbt._("Remove from community", null, {
                        hk: "3xZmj5"
                    })
                })
            }
        },
        704337: (u, e, t) => {
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
                c = t(800469),
                d = t(988456),
                f = n(t(694585)),
                F = t(665912),
                C = t(896674),
                E = t(665122),
                p = t(515918),
                h = t(909881),
                A = t(247211),
                m = t(116384),
                v = t(633645),
                g = t(990055),
                x = t(191649),
                B = t(577407),
                b = t(742170),
                j = t(894286),
                M = n(t(758927)),
                y = t(384616),
                S = t(680294),
                _ = t(628707),
                k = t(700980),
                P = t(194056),
                w = t(793812),
                T = t(486222),
                I = n(t(454812)),
                N = t(636979),
                R = t(401304),
                O = t(136058),
                L = t(776097),
                G = n(t(728056)),
                V = t(228277),
                H = t(201860),
                U = n(t(560911)),
                z = n(t(90261)),
                q = t(404186),
                Y = t(548360),
                W = t(667294),
                K = (n(t(156720)), n(t(554327))),
                X = n(t(802418)),
                Z = t(779740),
                $ = t(948752),
                Q = t(785893),
                J = {
                    pendingParticipantsIcon: {
                        backgroundColor: "k6px2m13",
                        color: "cwwc04gk"
                    }
                };

            function uu(u) {
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
                if (!D) throw new B.UnknownDataError(e);
                var c = D.contact,
                    d = !!o && U.default.equals(c.id, o.contactId);
                return (0, Q.jsx)(z.default, {
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
            var eu = (0, W.forwardRef)((function(u, e) {
                var t, n, U, z = (0, $.useModelValues)((0, i.default)(u.chat.groupMetadata, "props.chat.groupMetadata"), ["support", "size", "id", "membershipApprovalMode", "membershipApprovalRequests", "isUnnamed"]),
                    eu = z.membershipApprovalMode,
                    nu = z.membershipApprovalRequests,
                    au = (0, i.default)(null === (t = u.chat.groupMetadata) || void 0 === t ? void 0 : t.participants, "props.chat.groupMetadata?.participants"),
                    iu = au.toArray();
                (0, E.hideCagMaskedParticipants)() && (iu = au.filter((function(u) {
                    var e = u.id;
                    return (0, V.isMeAccount)(e) || !e.isLid()
                })));
                var ou = null !== (n = null == z ? void 0 : z.size) && void 0 !== n ? n : 0,
                    ru = (null == au ? void 0 : au.iAmAdmin()) ? au.length : ou,
                    lu = (0, X.default)();
                (0, Z.useListener)(au, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", lu);
                var su = (0, W.useState)(!0),
                    Du = (0, a.default)(su, 2),
                    cu = Du[0],
                    du = Du[1],
                    fu = (0, W.useRef)(),
                    Fu = (0, W.useState)(),
                    Cu = (0, a.default)(Fu, 2),
                    Eu = Cu[0],
                    pu = Cu[1];
                (0, W.useEffect)((function() {
                    u.scrollToParticipantList && fu.current && (0, A.scrollIntoViewIfNeeded)(fu.current, !1)
                }), [u.scrollToParticipantList]), (0, W.useImperativeHandle)(e, (function() {
                    return {
                        scrollIntoView: function() {
                            var u;
                            null === (u = fu.current) || void 0 === u || u.scrollIntoView()
                        }
                    }
                }));
                var hu = (0, K.default)(nu, ["add", "remove", "reset"], (function() {
                        return nu.length
                    })),
                    Au = (0, H.useShowPastParticipants)(u.chat);
                if (z.isSuspendedOrTerminated()) return null;
                var mu, vu, gu, xu, Bu = (0, Q.jsx)(N.SearchIcon, {
                    color: R.SvgColorProp.SECONDARY
                });
                if (au.canAdd() && !z.support) {
                    var bu = (0, Q.jsx)(I.default, {
                        theme: "compact",
                        children: (0, Q.jsx)(l.AddUserIcon, {
                            directional: !0
                        })
                    });
                    mu = (0, Q.jsx)(D.default, {
                        image: bu,
                        theme: "chat-info",
                        primary: Y.fbt._("Add participant", null, {
                            hk: "48ECfz"
                        }),
                        onClick: u.onAddParticipant
                    })
                }
                if (au.iAmAdmin() && u.onGroupInviteLink && !z.support) {
                    var ju = (0, Q.jsx)(I.default, {
                        theme: "compact",
                        children: (0, Q.jsx)(y.LinkIcon, {})
                    });
                    vu = (0, Q.jsx)(D.default, {
                        image: ju,
                        theme: "chat-info",
                        primary: Y.fbt._("Invite to group via link", null, {
                            hk: "3vDtFL"
                        }),
                        onClick: u.onGroupInviteLink
                    })
                }
                if (au.iAmAdmin() && eu && hu > 0 && (0, r.getABPropConfigValue)("group_join_request_m2") && (gu = (0, Q.jsx)(D.default, {
                        image: (0, Q.jsx)(I.default, {
                            xstyle: J.pendingParticipantsIcon,
                            theme: "compact",
                            children: (0, Q.jsx)(T.PendingParticipantsIcon, {})
                        }),
                        theme: "chat-info",
                        primary: Y.fbt._("Pending participants", null, {
                            hk: "3aWcdI"
                        }),
                        primaryDetail: (0, Q.jsx)(O.Tag, {
                            round: !0,
                            children: hu
                        }),
                        onClick: u.onPendingParticipants
                    })), tu(iu) && cu) {
                    var Mu = iu.length <= 20,
                        yu = iu.length - d.INFO_DRAWER_MAX_ROWS;
                    xu = (0, Q.jsx)(f.default, {
                        numMore: yu,
                        onClick: function() {
                            Mu ? du(!1) : u.onOpenParticipantSearch(b.ParticipantsFlowStep.Participants)
                        },
                        viewAll: !Mu
                    })
                } else Au && (xu = (0, Q.jsx)(S.ListButton, {
                    onClick: function() {
                        u.onOpenParticipantSearch(b.ParticipantsFlowStep.PastParticipants)
                    },
                    testid: "row-past-participants",
                    children: Y.fbt._("View past participants", null, {
                        hk: "fYGd4"
                    })
                }));
                var Su, _u = function(u) {
                        var e = au.get(u.id);
                        return !!e && (au.canPromote(e) || au.canDemote(e) || au.canRemove(e) || au.canVerifyIdentity(e))
                    },
                    ku = function(e, t) {
                        var n = au.assertGet(t.id);
                        if (_u(t)) {
                            var a = [],
                                i = (0, c.isCommunityAnnouncementGroup)(u.chat);
                            if (au.canPromote(n)) {
                                var o;
                                if (i) {
                                    var r;
                                    o = Y.fbt._("Make admin", null, {
                                        hk: "1cHVQ6"
                                    });
                                    var l = null === (r = u.chat.groupMetadata) || void 0 === r ? void 0 : r.getParentGroupChat();
                                    a.push((0, Q.jsx)(m.DropdownItem, {
                                        testid: "mi-grp-promote-community-admin",
                                        action: function() {
                                            (0, w.openCommunityParticipantPromoteConfirmation)(l, n, au, n.contact)
                                        },
                                        children: o
                                    }, "promote"))
                                } else o = Y.fbt._("Make group admin", null, {
                                    hk: "oCC4C"
                                }), a.push((0, Q.jsx)(m.DropdownItem, {
                                    testid: "mi-grp-promote-admin",
                                    action: function() {
                                        var e = M.default.t(198, {
                                            participant: n.contact.formattedName,
                                            subject: u.chat.contact.name
                                        });
                                        _.ModalManager.open((0, Q.jsx)(q.ConfirmPopup, {
                                            onOK: function() {
                                                return e = !0, n.isAdmin || (n.contact.pendingAction++, (0, k.promoteParticipants)(u.chat, [n]).finally((function() {
                                                    n.contact.pendingAction--
                                                }))), void(e && _.ModalManager.close());
                                                var e
                                            },
                                            okText: M.default.t(423),
                                            onCancel: function() {
                                                return _.ModalManager.close()
                                            },
                                            cancelText: Y.fbt._("Cancel", null, {
                                                hk: "H0gNq"
                                            }),
                                            children: (0, Q.jsx)(g.EmojiText, {
                                                text: e
                                            })
                                        }))
                                    },
                                    children: o
                                }, "promote"))
                            }
                            if (au.canRemove(n)) {
                                var s = M.default.t(427);
                                a.push((0, Q.jsx)(m.DropdownItem, {
                                    testid: "mi-grp-remove-participant",
                                    action: function() {
                                        var e = M.default.t(199, {
                                            participant: n.contact.formattedName,
                                            subject: u.chat.contact.name
                                        });
                                        _.ModalManager.open((0, Q.jsx)(q.ConfirmPopup, {
                                            onOK: function() {
                                                return e = !0, n.contact.pendingAction++, (0, k.removeParticipants)(u.chat, [n]).finally((function() {
                                                    n.contact.pendingAction--
                                                })), void(e && _.ModalManager.close());
                                                var e
                                            },
                                            okText: M.default.t(531),
                                            onCancel: function() {
                                                return _.ModalManager.close()
                                            },
                                            cancelText: Y.fbt._("Cancel", null, {
                                                hk: "H0gNq"
                                            }),
                                            children: (0, Q.jsx)(g.EmojiText, {
                                                text: e
                                            })
                                        }))
                                    },
                                    children: s
                                }, "remove"))
                            }
                            if (au.canDemote(n)) {
                                var D = Y.fbt._("Dismiss as admin", null, {
                                    hk: "2YfmwL"
                                });
                                if (i) {
                                    var d, f = null === (d = u.chat.groupMetadata) || void 0 === d ? void 0 : d.getParentGroupChat();
                                    a.push((0, Q.jsx)(m.DropdownItem, {
                                        testid: "mi-grp-community-demote",
                                        action: function() {
                                            return (0, P.openCommunityParticipantDemoteConfirmation)(n, f)
                                        },
                                        children: D
                                    }, "demote-admin"))
                                } else a.push((0, Q.jsx)(m.DropdownItem, {
                                    testid: "mi-grp-demote",
                                    action: function() {
                                        n.isAdmin && (n.contact.pendingAction++, (0, k.demoteParticipants)(u.chat, [n]).finally((function() {
                                            n.contact.pendingAction--
                                        })))
                                    },
                                    children: D
                                }, "demote-admin"))
                            }
                            if (au.canVerifyIdentity(n)) {
                                var F = Y.fbt._("Verify Security Code", null, {
                                    hk: "1vTVgt"
                                });
                                a.push((0, Q.jsx)(m.DropdownItem, {
                                    testid: "mi-grp-verify-identify",
                                    action: function() {
                                        u.onVerification && u.onVerification(n.contact)
                                    },
                                    children: F
                                }, "verify-identity"))
                            }
                            pu({
                                contactId: t.id,
                                menu: a,
                                anchor: e.anchor,
                                event: e.event
                            })
                        }
                    },
                    Pu = function(u, e) {
                        var t = e;
                        (0, V.isMePrimary)(e.id) && e.id.isLid() && (t = h.ContactCollection.assertGet((0, V.getMeUser)())), (0, x.findChat)(t.id, "groupInfoParticipants").then((function(u) {
                            C.Cmd.openChatFromUnread(u).then((function(e) {
                                e && ((0, s.btmThreadsLoggingEnabled)() && p.ComposeBoxActions.addMsgSendingLogAttributes(u, {
                                    handleMultiple: function() {
                                        (0, F.handleActivitiesForChatThreadLogging)([{
                                            activityType: "groupMembershipReplies",
                                            ts: (0, o.unixTime)(),
                                            chatId: u.id
                                        }])
                                    }
                                }), p.ComposeBoxActions.focus(u))
                            }))
                        }))
                    },
                    wu = (0, v.elevatedPushNamesM2Enabled)(u.chat),
                    Tu = au.length ? (0, Q.jsxs)(d.ChatInfoDrawerListSection, {
                        ref: fu,
                        titleTestId: "section-participants",
                        testid: "group-info-participants-section",
                        title: Y.fbt._({
                            "*": "{number} participants",
                            _1: "1 participant"
                        }, [Y.fbt._plural((null === (U = u.chat.groupMetadata) || void 0 === U ? void 0 : U.groupType) === j.GroupType.DEFAULT_ANNOUNCEMENT_GROUP ? ru : au.length, "number")], {
                            hk: "bcYCT"
                        }),
                        titleOnClick: function() {
                            u.onOpenParticipantSearch(b.ParticipantsFlowStep.Participants)
                        },
                        subtitle: Bu,
                        children: [mu, !z.isUnnamed && vu, gu, (0, Q.jsx)(B.FlatList, {
                            flatListController: u.flatListController,
                            direction: "vertical",
                            forceConsistentRenderCount: !1,
                            data: function() {
                                var u, e = [],
                                    t = [];
                                iu.forEach((function(n) {
                                    n.contact.isMe ? u = n : n.isAdmin ? e.push(n) : t.push(n)
                                }));
                                var n = [];
                                return u && n.push(u), n = n.concat(e, t), tu(iu) && cu && (n = n.slice(0, d.INFO_DRAWER_MAX_ROWS)), n.map((function(u) {
                                    return {
                                        itemKey: u.id.toString(),
                                        id: u.id,
                                        height: 68
                                    }
                                }))
                            }(),
                            renderItem: function(u) {
                                return (0, Q.jsx)(uu, {
                                    data: u,
                                    participants: au,
                                    handleParticipantClick: Pu,
                                    menuEnabled: _u,
                                    handleParticipantMenu: ku,
                                    contextMenu: Eu,
                                    elevatedPushNamesEnabled: wu
                                })
                            }
                        }), xu]
                    }) : null;
                return Eu && (Su = (0, Q.jsx)(L.UIE, {
                    displayName: "ChatContextMenu",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: function() {
                        pu(null)
                    },
                    children: (0, Q.jsx)(G.default, {
                        contextMenu: Eu
                    })
                })), (0, Q.jsxs)(Q.Fragment, {
                    children: [Tu, Su]
                })
            }));

            function tu(u) {
                return u.length > d.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
            }
            e.GroupInfoParticipantsSection = eu, eu.displayName = "GroupInfoParticipantsSection"
        },
        863289: (u, e, t) => {
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
                var y = (0, m.useState)(B(j)),
                    S = (0, a.default)(y, 2),
                    _ = S[0],
                    k = S[1],
                    P = (0, m.useState)(),
                    w = (0, a.default)(P, 2),
                    T = w[0],
                    I = w[1];
                if ((0, m.useEffect)((function() {
                        n.queryGroupsV4PendingInvite().then((function() {
                            k(B(n.pendingParticipants))
                        }))
                    }), [n]), n.isSuspendedOrTerminated()) return (0, x.jsx)(x.Fragment, {});
                var N, R, O;
                j.length > 0 && (N = (0, x.jsx)(D.FlatList, {
                    flatListController: u.flatListController,
                    direction: "vertical",
                    forceConsistentRenderCount: !1,
                    data: (L = j.toArray(), B(j) && _ && (L = L.slice(0, o.INFO_DRAWER_MAX_ROWS)), L.map((function(u) {
                        return {
                            itemKey: u.id.toString(),
                            id: u.id,
                            height: 68
                        }
                    }))),
                    renderItem: function(u) {
                        var e = u.id,
                            t = j.get(e);
                        if (!t) throw new D.UnknownDataError(u);
                        var a = t.contact;
                        return (0, x.jsx)(p.default, {
                            contact: a,
                            participant: t,
                            contextEnabled: function() {
                                return !0
                            },
                            contextMenu: !0,
                            onContext: function(u) {
                                return e = u, i = [(0, x.jsx)(l.DropdownItem, {
                                    testid: "mi-grp-promote-admin",
                                    action: function() {
                                        d.ModalManager.open((0, x.jsx)(h.ConfirmPopup, {
                                            onOK: function() {
                                                d.ModalManager.close(), n.revokeGroupsV4AddInvite([t.id]).then((function() {
                                                    F.ToastManager.open((0, x.jsx)(f.Toast, {
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
                                                return d.ModalManager.close()
                                            },
                                            cancelText: A.fbt._("Cancel", null, {
                                                hk: "H0gNq"
                                            }),
                                            children: (0, x.jsx)(s.EmojiText, {
                                                text: c.default.t(359, {
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
                if (B(j) && _) {
                    var G = j.length - o.INFO_DRAWER_MAX_ROWS;
                    R = (0, x.jsx)(r.default, {
                        numMore: G,
                        onClick: function() {
                            k(!1)
                        }
                    })
                }
                b.iAmAdmin() && j.length > 0 && (O = (0, x.jsxs)(o.ChatInfoDrawerListSection, {
                    titleTestId: "section-participants",
                    title: c.default.t(357, {
                        number: j.length
                    }),
                    children: [N, R]
                }));
                var V;
                T && (V = (0, x.jsx)(C.UIE, {
                    displayName: "ChatContextMenu",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: function() {
                        I(null)
                    },
                    children: (0, x.jsx)(E.default, {
                        contextMenu: T
                    })
                }));
                return (0, x.jsxs)(x.Fragment, {
                    children: [O, V]
                })
            };
            var a = n(t(963038)),
                i = n(t(347999)),
                o = t(988456),
                r = n(t(694585)),
                l = t(116384),
                s = t(990055),
                D = t(577407),
                c = n(t(758927)),
                d = t(628707),
                f = t(236539),
                F = t(422210),
                C = t(776097),
                E = n(t(728056)),
                p = n(t(90261)),
                h = t(404186),
                A = t(548360),
                m = t(667294),
                v = n(t(802418)),
                g = t(779740),
                x = t(785893);

            function B(u) {
                return u.length > o.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
            }
        },
        911295: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t, n, a, i = (0, L.useModelValues)(u.chat, ["labels"]),
                    o = (0, L.useOptionalModelValues)(u.chat.groupMetadata, ["size", "creation"]),
                    r = null === (e = u.chat.groupMetadata) || void 0 === e ? void 0 : e.groupType,
                    l = null === (t = u.chat.groupMetadata) || void 0 === t ? void 0 : t.participants,
                    s = (0, R.default)();
                (0, O.useListener)(l, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", s);
                var D = null !== (n = null == l ? void 0 : l.length) && void 0 !== n ? n : 0,
                    c = null !== (a = null == o ? void 0 : o.size) && void 0 !== a ? a : 0,
                    d = (null == l ? void 0 : l.iAmAdmin()) ? D : c,
                    f = r === p.GroupType.DEFAULT_ANNOUNCEMENT_GROUP ? T.fbt._("Announcement group", null, {
                        hk: "80s42"
                    }) : T.fbt._("Group", null, {
                        hk: "DNiv2"
                    }),
                    E = T.fbt._({
                        "*": "{number} participants",
                        _1: "1 participant"
                    }, [T.fbt._plural(r === p.GroupType.DEFAULT_ANNOUNCEMENT_GROUP ? d : D, "number")], {
                        hk: "bcYCT"
                    });
                return (0, V.jsx)(w.default, {
                    theme: "padding-large",
                    children: (0, V.jsxs)(C.FlexColumn, {
                        align: "center",
                        children: [(0, V.jsx)(z, {
                            chat: u.chat,
                            xstyle: U.photo,
                            sendGroupProfilePictureLoggingEvent: function(e, t, n) {
                                var a, i, o, r = null === (a = u.chat) || void 0 === a || null === (i = a.groupMetadata) || void 0 === i ? void 0 : i.creation,
                                    s = new Date(1e3 * (null != r ? r : 0)),
                                    D = new Intl.DateTimeFormat("en", {
                                        year: "numeric"
                                    }).format(s),
                                    c = new Intl.DateTimeFormat("en", {
                                        month: "2-digit"
                                    }).format(s),
                                    f = new Intl.DateTimeFormat("en", {
                                        day: "2-digit"
                                    }).format(s),
                                    F = null != r ? `${D}-${c}-${f}` : "",
                                    C = (0, k.numberToPreciseSizeBucket)(d),
                                    E = null !== (o = null == l ? void 0 : l.iAmAdmin()) && void 0 !== o && o;
                                new _.default.GroupProfilePicture({
                                    groupCreationDs: F,
                                    groupProfileAction: e,
                                    preciseGroupSizeBucket: C,
                                    isAdmin: E,
                                    hasProfilePicture: t,
                                    profilePictureType: n
                                }).commit()
                            }
                        }), (0, V.jsx)(Y, {
                            chat: u.chat
                        }), (0, V.jsx)("div", {
                            "data-testid": "group-info-top-card-subtitle",
                            className: (0, N.default)(U.groupSecondary),
                            children: (0, V.jsx)(F.SelectableSpan, {
                                dir: "auto",
                                selectable: !0,
                                children: (0, V.jsxs)(y.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: [f, (null == o ? void 0 : o.isSuspendedOrTerminated()) ? null : (0, V.jsxs)(V.Fragment, {
                                        children: [h.default.isRTL() ? " - " : " · ", (0, V.jsx)(S.default, {
                                            onClick: u.onClickParticipantsCount,
                                            children: E
                                        })]
                                    })]
                                })
                            })
                        }), (0, V.jsx)(A.default, {
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
                c = t(519509),
                d = t(800469),
                f = t(442801),
                F = t(160967),
                C = t(208188),
                E = n(t(652486)),
                p = t(894286),
                h = n(t(758927)),
                A = n(t(628580)),
                m = function(u, e) {
                    if (!e && u && u.__esModule) return u;
                    if (null === u || "object" != typeof u && "function" != typeof u) return {
                        default: u
                    };
                    var t = H(e);
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
                v = t(628707),
                g = t(246009),
                x = t(762738),
                B = t(639017),
                b = n(t(295850)),
                j = t(176273),
                M = t(457292),
                y = t(558288),
                S = n(t(83938)),
                _ = n(t(229677)),
                k = t(874818),
                P = t(404186),
                w = n(t(849788)),
                T = t(548360),
                I = t(667294),
                N = n(t(156720)),
                R = n(t(802418)),
                O = t(779740),
                L = t(948752),
                G = n(t(788413)),
                V = t(785893);

            function H(u) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    t = new WeakMap;
                return (H = function(u) {
                    return u ? t : e
                })(u)
            }
            var U = {
                photo: {
                    marginBottom: "njub1g37"
                },
                groupSecondary: {
                    lineHeight: "a4ywakfo",
                    marginTop: "ma4rpf0l",
                    textAlign: "qfejxiq4"
                }
            };

            function z(u) {
                var e = (0, L.useModelValues)(u.chat, ["isReadOnly"]),
                    t = (0, L.useModelValues)(u.chat.contact, ["id", "profilePicThumb"]),
                    n = (0, L.useModelValues)(u.chat.contact.profilePicThumb, ["imgFull"]),
                    a = (0, L.useModelValues)((0, s.default)(u.chat.groupMetadata, "props.chat.groupMetadata"), ["groupType"]),
                    i = (0, I.useState)(!1),
                    c = (0, o.default)(i, 2),
                    F = c[0],
                    C = c[1],
                    E = (0, I.useState)(!1),
                    h = (0, o.default)(E, 2),
                    A = h[0],
                    v = h[1],
                    g = (0, G.default)(),
                    x = a.groupType === p.GroupType.DEFAULT_ANNOUNCEMENT_GROUP,
                    M = (0, f.communitiesEnabled)() && x ? b.default.DEFAULT_ANNOUNCEMENT_GROUP : b.default.GROUP,
                    y = e.isReadOnly || !n.canDelete() && !n.canSet() || (0, d.isSupportGroup)(e) || x || a.isSuspendedOrTerminated();
                return (0, V.jsx)("div", {
                    className: (0, N.default)(u.xstyle),
                    children: (0, V.jsx)(B.PhotoPickerLoadable, {
                        type: M,
                        id: t.id,
                        attachToChat: !0,
                        pending: A,
                        startImage: n.imgFull,
                        readOnly: y,
                        onImageSet: function(u, e) {
                            var t;
                            v(!0), t = u && e ? (0, j.setProfilePic)(n, u, e) : (0, j.deleteProfilePic)(n), (0, D.default)(t, g).catch((0, r.catchAbort)((function() {}))).catch((0, l.filteredCatch)(m.ActionError, (function() {
                                __LOG__(3)`GroupInfoDrawer: failed to set/delete group image`, C(!F)
                            }))).finally((function() {
                                v(!1)
                            }))
                        },
                        sendGroupProfilePictureLoggingEvent: u.sendGroupProfilePictureLoggingEvent
                    }, String(F))
                })
            }
            var q = {
                marginTop: "hymafltn",
                marginEnd: "jnwc1y2a",
                marginBottom: "ngycyvoj",
                marginStart: "svoq16ka"
            };

            function Y(u) {
                var e = (0, L.useModelValues)(u.chat.contact, ["name"]),
                    t = (0, L.useModelValues)((0, s.default)(u.chat.groupMetadata, "props.chat.groupMetadata"), ["creation", "restrict", "support", "isUnnamed", "participants"]),
                    n = (0, G.default)(),
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
                                        return t.next = 5, (0, D.default)((0, M.setGroupSubject)(u.chat, o), n).catch((0, r.catchAbort)((function() {}))).catch((function() {
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
                    }(),
                    l = function() {
                        v.ModalManager.open((0, V.jsx)(P.ConfirmPopup, {
                            onOK: function() {
                                return v.ModalManager.close()
                            },
                            okText: T.fbt._("OK", null, {
                                hk: "2KEeHb"
                            }),
                            children: T.fbt._("Only admins can edit this group's info", null, {
                                hk: "1a2ztg"
                            })
                        }))
                    };
                return t.support ? (0, V.jsx)(y.TextHeader, {
                    className: (0, N.default)(q),
                    level: "2",
                    theme: "large",
                    children: (0, V.jsx)(g.GroupName, {
                        chat: u.chat,
                        groupMetadata: t,
                        breakWord: !0
                    })
                }) : t.isUnnamed && (0, c.getABPropConfigValue)("ugr_enabled") ? (0, V.jsx)(E.default, {
                    subject: (0, x.calculateUnnamedGroupParticipantsList)(t).toLocaleString(),
                    onSave: o,
                    editable: t.canSetSubject(),
                    editRestrictionInfo: t.restrict ? l : void 0
                }) : (0, V.jsx)(E.default, {
                    subject: e.name || u.chat.formattedTitle,
                    onSave: o,
                    editable: t.canSetSubject(),
                    editRestrictionInfo: t.restrict ? l : void 0
                })
            }
        },
        20159: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(963038)),
                i = n(t(347999)),
                o = t(800469),
                r = t(896674),
                l = t(665122),
                s = t(116384),
                D = t(633645),
                c = t(191649),
                d = n(t(758927)),
                f = t(628707),
                F = t(700980),
                C = t(246009),
                E = t(194056),
                p = t(793812),
                h = t(776097),
                A = n(t(728056)),
                m = t(228277),
                v = t(201860),
                g = n(t(432515)),
                x = t(548360),
                B = t(667294),
                b = n(t(802418)),
                j = t(779740),
                M = t(785893);

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
                                e.isAdmin && (e.contact.pendingAction++, (0, F.demoteParticipants)(u, [e]).finally((function() {
                                    e.contact.pendingAction--
                                })))
                            },
                            b = function() {
                                D(null)
                            };
                        l && (t = (0, M.jsx)(h.UIE, {
                            displayName: "ChatContextMenu",
                            escapable: !0,
                            popable: !0,
                            dismissOnWindowResize: !0,
                            requestDismiss: b,
                            children: (0, M.jsx)(A.default, {
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
                                    F.push((0, M.jsx)(s.DropdownItem, {
                                        testid: "mi-grp-promote-community-admin",
                                        action: function() {
                                            (0, p.openCommunityParticipantPromoteConfirmation)(B, l, r, l.contact)
                                        },
                                        children: a
                                    }, "promote"))
                                } else a = d.default.t(423), F.push((0, M.jsx)(s.DropdownItem, {
                                    testid: "mi-grp-promote-admin",
                                    action: function() {
                                        return c(l, !1)
                                    },
                                    children: a
                                }, "promote"));
                            if (r.canRemove(l)) {
                                var b = d.default.t(427);
                                F.push((0, M.jsx)(s.DropdownItem, {
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
                                    y = x.fbt._("Dismiss as admin", null, {
                                        hk: "243sNl"
                                    });
                                if (h) {
                                    var _, k = null === (_ = u.groupMetadata) || void 0 === _ ? void 0 : _.getParentGroupChat();
                                    F.push((0, M.jsx)(s.DropdownItem, {
                                        testid: "mi-grp-community-demote",
                                        action: function() {
                                            return (0, E.openCommunityParticipantDemoteConfirmation)(l, k)
                                        },
                                        children: y
                                    }, "demote-admin"))
                                } else F.push((0, M.jsx)(s.DropdownItem, {
                                    testid: "mi-grp-demote",
                                    action: j,
                                    children: y
                                }, "demote-admin"))
                            }
                            if (r.canVerifyIdentity(l)) {
                                var P = x.fbt._("Verify Security Code", null, {
                                    hk: "1vTVgt"
                                });
                                F.push((0, M.jsx)(s.DropdownItem, {
                                    testid: "mi-grp-verify-identify",
                                    action: function() {
                                        f.ModalManager.close(), null == e || e(l.contact)
                                    },
                                    children: P
                                }, "verify-identity"))
                            }
                            if (!(0, m.isMeAccount)(l.id)) {
                                var w = x.fbt._("Message {author}", [x.fbt._param("author", (0, M.jsx)(C.Name, {
                                    contact: l.contact,
                                    useShortName: !0
                                }))], {
                                    hk: "1kM7Cg"
                                });
                                F.push((0, M.jsx)(s.DropdownItem, {
                                    action: S.bind(null, l.contact.id),
                                    children: w
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
                    _ = (0, a.default)(y, 2),
                    k = _[0],
                    P = _[1],
                    w = (0, b.default)(),
                    T = null === (t = n.groupMetadata) || void 0 === t ? void 0 : t.participants;
                (0, j.useListener)(T, ["bulk_add", "bulk_remove", "reset"], w);
                var I, N = (0, v.useShowPastParticipants)(n),
                    R = (0, l.hideCagMaskedParticipants)(),
                    O = null == T ? void 0 : T.map((function(u) {
                        return u.contact
                    }));
                return N && (I = {
                    text: x.fbt._("View past participants", null, {
                        hk: "fYGd4"
                    }),
                    onClick: c
                }), (0, M.jsxs)(M.Fragment, {
                    children: [(0, M.jsx)(g.default, {
                        ref: e,
                        title: x.fbt._("Search Participants", null, {
                            hk: "M6lxB"
                        }),
                        filter: function(u) {
                            var e = null == T ? void 0 : T.get(u.id.toString());
                            return null != e && (!R || ((0, m.isMeAccount)(e.id) || !e.id.isLid()))
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
                        onContext: P,
                        showNotifyName: !0,
                        elevatedPushNamesEnabled: (0, D.elevatedPushNamesM2Enabled)(n),
                        listenForAdminChange: !0,
                        participantCollection: (0, i.default)(T, "participants"),
                        contacts: O,
                        button: I,
                        showStatusRingAroundProfilePhoto: !0
                    }), k]
                })
            }
            var S = function(u) {
                (0, c.findChat)(u, "groupParticipantSearch").then((function(u) {
                    f.ModalManager.close(), r.Cmd.openChatFromUnread(u)
                }))
            };
            var _ = (0, B.forwardRef)(y);
            e.default = _
        },
        742170: (u, e, t) => {
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
                i = n(t(20159)),
                o = n(t(9216)),
                r = t(780857),
                l = t(785893),
                s = t(76672).Mirrored(["Participants", "PastParticipants"]);
            e.ParticipantsFlowStep = s
        },
        132471: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.participant,
                    t = u.elevatedPushNamesEnabled,
                    n = void 0 !== t && t,
                    F = (0, d.useModelValues)(e.contact, ["id", "showBusinessCheckmarkAsPrimary", "name", "pushname", "notifyName", "formattedName", "formattedPhone"]),
                    C = (0, f.jsx)(s.Name, {
                        contact: F,
                        showBusinessCheckmark: F.showBusinessCheckmarkAsPrimary,
                        showLabel: !0,
                        titlify: !0,
                        ellipsify: !0,
                        you: !0,
                        showNotifyName: n,
                        elevatedPushNamesEnabled: n
                    }),
                    E = i.Clock.pastParticipantOnDateAtTime(e.leaveTs, function(u) {
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
                    p = (0, r.pushNameCanBeUsed)(F) && n ? F.formattedPhone : null;
                return (0, f.jsx)(a.default, {
                    image: (0, f.jsx)(o.DetailImage, {
                        id: F.id
                    }),
                    primary: C,
                    secondary: E,
                    secondaryDetail: p
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
        9216: (u, e, t) => {
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
                c = n(t(132471)),
                d = n(t(758927)),
                f = t(692889),
                F = n(t(188971)),
                C = t(71867),
                E = t(228277),
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
                    c = (0, a.default)(D, 2),
                    F = c[0],
                    C = c[1],
                    A = (0, v.default)(s, ["buld_add", "bulk_remove", "reset"], (function() {
                        var u, e = d.default.accentFold(F),
                            t = (0, f.numberSearch)(e),
                            n = null !== (u = null == s ? void 0 : s.getValidRecords().filter((function(u) {
                                var n = !e || u.contact.searchMatch(e, t);
                                return (0, i.hideCagMaskedParticipants)() ? ((0, E.isMeAccount)(u.id) || !u.id.isLid()) && n : n
                            }))) && void 0 !== u ? u : [];
                        if (!n.length) return [];
                        var a = [];
                        return a.push({
                            type: x,
                            header: h.fbt._("Past participants", null, {
                                hk: "2k91Dw"
                            }),
                            itemKey: "list_header"
                        }), n.forEach((function(u, e) {
                            return a.push({
                                type: B,
                                participant: u,
                                itemKey: `${u.id.toString()}_${e}`
                            })
                        })), a.push({
                            type: b
                        }), a
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
                    emptyState: (0, g.jsx)(_, {}),
                    onSearch: C,
                    searchPlaceholder: d.default.t(545),
                    onBack: r,
                    onCancel: l
                })
            }

            function M(u) {
                var e, t = u.data,
                    n = u.elevatedPushNamesEnabled;
                switch (t.type) {
                    case x:
                        return (0, g.jsx)(F.default, {
                            header: null !== (e = t.header) && void 0 !== e ? e : "",
                            uppercase: !1
                        });
                    case B:
                        return (0, g.jsx)(c.default, {
                            participant: t.participant,
                            elevatedPushNamesEnabled: n
                        });
                    case b:
                        return (0, g.jsx)(S, {});
                    default:
                        throw new s.UnknownDataError(t)
                }
            }
            var y = {
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

            function S() {
                return (0, g.jsx)(D.FlexRow, {
                    xstyle: [y.row, y.disclaimer, C.uiPadding.horiz15],
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

            function _() {
                return (0, g.jsxs)(g.Fragment, {
                    children: [(0, g.jsx)(F.default, {
                        header: h.fbt._("Past participants", null, {
                            hk: "2k91Dw"
                        }),
                        uppercase: !1
                    }), (0, g.jsx)(D.FlexRow, {
                        xstyle: [y.row, y.empty],
                        align: "center",
                        justify: "center",
                        children: (0, g.jsx)("span", {
                            children: h.fbt._("No results found", null, {
                                hk: "1Wo2fc"
                            })
                        })
                    }), (0, g.jsx)(S, {})]
                })
            }
            var k = (0, A.forwardRef)(j);
            e.default = k
        },
        343190: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e = u.onClick,
                    t = (0, s.jsx)(r.TextSpan, {
                        theme: "title",
                        children: l.fbt._("Security", null, {
                            hk: "2BYJDI"
                        })
                    }),
                    n = (0, s.jsx)(r.TextDiv, {
                        theme: "muted",
                        children: l.fbt._("Click to learn how messages and calls are secured.", null, {
                            hk: "1UxhjE"
                        })
                    }),
                    D = (0, s.jsx)(i.LockIcon, {
                        color: o.SvgColorProp.SECONDARY,
                        height: 20
                    });
                return (0, s.jsx)(a.default, {
                    icon: D,
                    onClick: e,
                    title: t,
                    secondaryTitle: n
                })
            };
            var a = n(t(167740)),
                i = t(609318),
                o = t(401304),
                r = t(558288),
                l = t(548360),
                s = t(785893)
        },
        201860: (u, e, t) => {
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
        963651: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e;
                (0, d.useEffect)((function() {
                    (0, r.isPrivacyNarrativeV1Enabled)() && (0, l.incrementPrinaDailyCount)(u.highlightSurface, i.PrinaDailyActionType.NARRATIVE_APPEAR)
                }), []);
                var t = u.onClick,
                    n = u.text,
                    F = (0, f.jsx)(D.TextSpan, {
                        theme: "title",
                        children: null !== (e = u.title) && void 0 !== e ? e : c.fbt._("Encryption", null, {
                            hk: "a7CfR"
                        })
                    }),
                    C = (0, f.jsx)(D.TextDiv, {
                        theme: "muted",
                        children: n
                    }),
                    E = (0, f.jsx)(o.LockIcon, {
                        color: s.SvgColorProp.SECONDARY,
                        height: 20
                    });
                return (0, f.jsx)(a.default, {
                    onClick: t,
                    icon: E,
                    title: F,
                    secondaryTitle: C
                })
            };
            var a = n(t(167740)),
                i = t(531410),
                o = t(609318),
                r = t(518005),
                l = t(902848),
                s = t(401304),
                D = t(558288),
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
                r = t(939760),
                l = t(241941),
                s = t(544607),
                D = n(t(229677)),
                c = t(787118),
                d = n(t(281101)),
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
                    A = (0, c.useKicNux)(h),
                    m = (0, o.default)(A, 2),
                    v = m[0],
                    g = m[1];
                (0, F.useEffect)((function() {
                    v && g(D.default.TRIGGER_TYPE.KEPT_FOLDER_TAP_FIRST_TIME)
                }), []), (0, F.useEffect)((function() {
                    (0, i.default)(a.default.mark((function u() {
                        var e, n, i;
                        return a.default.wrap((function(u) {
                            for (;;) switch (u.prev = u.next) {
                                case 0:
                                    if (e = new D.default.DisappearingMessageKeepInChat({
                                            kicActionName: D.default.KIC_ACTION_NAME_TYPE.VIEW_KEPT_MESSAGES,
                                            kicEntryPoint: D.default.KIC_ENTRY_POINT_TYPE.CHAT_INFO,
                                            messagesInFolder: t.length,
                                            isAGroup: null == h ? void 0 : h.isGroup
                                        }), (null == h ? void 0 : h.isGroup) && e.set({
                                            isAdmin: null == h || null === (n = h.groupMetadata) || void 0 === n ? void 0 : n.participants.iAmAdmin()
                                        }), !h) {
                                        u.next = 7;
                                        break
                                    }
                                    return u.next = 5, (0, r.getChatThreadID)(null == h ? void 0 : h.id.toJid());
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
                    b = (0, E.jsx)(s.KeptMsgs, {}),
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
                return (0, E.jsx)(d.default, {
                    testid: "kept-drawer",
                    ref: e,
                    msgCollection: t,
                    onClose: n,
                    chat: h,
                    title: B,
                    emptyListText: b,
                    descriptionSection: j,
                    displayType: l.DISPLAY_TYPE.KEPT_MSGS
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
                p = t(821194),
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
                y = n(t(982669)),
                S = t(785893),
                _ = {
                    menuItem: {
                        flexGrow: "ggj6brxn",
                        flexShrink: "m0h2a7mj",
                        flexBasis: "rjo8vgbg",
                        height: "qmp0wt83",
                        fontSize: "ovllcyds",
                        color: "fdblgtiy",
                        textAlign: "qfejxiq4",
                        textTransform: "aprpv14t",
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
                w = function(u) {
                    var e = u.selected,
                        t = u.onSearch;
                    switch (e) {
                        case k.MEDIA:
                        case k.LINKS:
                        case k.DOCS:
                            return (0, S.jsx)(l.ListSearch, {
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
            var T = (0, b.forwardRef)((function(u, e) {
                var t = u.chat,
                    n = u.onProductDetail,
                    r = u.setProductsScrollOffset,
                    l = u.initialTab,
                    P = void 0 === l ? k.MEDIA : l,
                    T = u.productsScrollOffset,
                    I = void 0 === T ? 0 : T,
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
                    J = (0, y.default)((function() {
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
                                var e = (0, j.default)(_.menuItem, h.isOSMac && _.menuItemOSMac, O === u.tab && _.menuItemActive, O === u.tab && h.isOSMac && _.menuItemActiveOSMac);
                                return (0, S.jsx)("button", {
                                    "data-testid": `gallery-tab-${u.tab}`,
                                    className: e,
                                    onClick: function() {
                                        return tu(u.tab)
                                    },
                                    title: u.title,
                                    children: u.title
                                }, u.tab)
                            })),
                            t = (0, j.default)(_.menuTabsLists, p.ServerProps.productMediaAttachments ? _.fourTabs : _.threeTabs, O === k.MEDIA && _.tabMediaActive, O === k.DOCS && _.tabDocsActive, O === k.LINKS && _.tabLinksActive, O === k.PRODUCTS && _.tabProductsActive);
                        return (0, S.jsx)("div", {
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
                                u = (0, S.jsx)(d.default, {
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
                                u = (0, S.jsx)(c.default, {
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
                                u = (0, S.jsx)(s.default, {
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
                                u = (0, S.jsx)(E.default, {
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
                    ru = Y ? (0, S.jsx)(A.UIE, {
                        displayName: "MediaMultiSelect",
                        escapable: !0,
                        requestDismiss: uu,
                        children: (0, S.jsx)(F.MultiSelectBar, {
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
                return (0, S.jsxs)(v.default, {
                    ref: e,
                    theme: "gallery",
                    testid: "media-gallery-drawer",
                    children: [(0, S.jsx)(x.DrawerHeader, {
                        title: " ",
                        onBack: u.onBack,
                        rtlFixIfOnDarwin: !0,
                        type: x.DRAWER_HEADER_TYPE.MULTI_MEDIA_GALLERY
                    }), ru, nu, Q ? (0, S.jsx)(w, {
                        selected: O,
                        onSearch: $
                    }) : null, (0, S.jsx)(g.default, {
                        "data-list-scroll-container": !0,
                        children: (0, S.jsx)(m.default, {
                            transitionName: lu,
                            className: (0, j.default)(_.column),
                            children: (0, S.jsx)("div", {
                                className: (0, j.default)(_.multimediaGallery),
                                children: (0, S.jsx)("div", {
                                    className: (0, j.default)(_.column),
                                    children: iu
                                })
                            }, O)
                        })
                    })]
                })
            }));
            e.MediaGalleryDrawer = T, T.displayName = "MediaGalleryDrawer"
        },
        40912: (u, e, t) => {
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
                o = t(789999),
                r = n(t(768140)),
                l = n(t(706442)),
                s = t(948752),
                D = t(785893),
                c = function(u) {
                    u.stopPropagation()
                };

            function d(u) {
                var e = u.url,
                    t = u.msg;
                return (0, D.jsx)(o.AudioTag, {
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
        747324: (u, e, t) => {
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
                    b = (0, su.default)((function(u) {
                        (0, R.canReactToMessage)(u) && v({
                            dirY: p.DirY.BOTTOM,
                            dirX: p.DirX.CENTER,
                            type: p.MenuType.ReactionPicker,
                            menu: (0, Du.jsx)(N.ReactionsPanel, {
                                msgId: u.id.toString(),
                                onSelection: function(e) {
                                    (0, V.sendReactionToMsg)(u, e).catch((function() {})), B()
                                }
                            }),
                            flipOnRTL: !0,
                            anchor: g.current
                        })
                    }));
                (0, ru.useListener)(o.current, "animationend", (function() {
                    e()
                }));
                var M = l.displayName({
                    showShortName: !0,
                    withPushName: !0
                });
                l.isGroupMsg && (M += " @ " + l.chat.title());
                var S, _ = (0, Du.jsx)(uu.XViewerIcon, {
                    className: u.isHighlightClose ? eu.default.highlightClose : null,
                    containerRef: o
                });
                f ? S = (0, Du.jsx)(K.UIE, {
                    displayName: "MsgReaction",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: x,
                    children: (0, Du.jsx)(X.default, {
                        contextMenu: f
                    })
                }) : m && (S = (0, Du.jsx)(K.UIE, {
                    displayName: "MsgReactionPicker",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: B,
                    children: (0, Du.jsx)(X.default, {
                        contextMenu: m
                    })
                }));
                return (0, Du.jsxs)("div", {
                    className: eu.default.mediaPanelHeader,
                    children: [(0, Du.jsx)("div", {
                        className: eu.default.info,
                        children: (0, Du.jsx)(r.default, {
                            idle: !0,
                            image: (0, Du.jsx)(F.DetailImage, {
                                id: l.sender,
                                size: 40
                            }),
                            primary: (0, Du.jsx)(A.EmojiText, {
                                ellipsify: !0,
                                text: M
                            }),
                            secondary: s.Clock.relativeDateAndTimeStr(l.t),
                            theme: "media"
                        })
                    }), (0, Du.jsx)("div", {
                        className: eu.default.mediaPanelTools,
                        children: (0, Du.jsxs)(y.MenuBar, {
                            theme: "strong",
                            children: [(0, Du.jsx)(Mu, {
                                isMediaDownloadable: function() {
                                    return !l.isViewOnce && (!!D.renderableUrl || D.mediaStage === j.MEDIA_DATA_STAGE.RESOLVED)
                                },
                                msg: l,
                                msgIndexInAlbum: t,
                                onClose: i,
                                onViewOnceInfoClick: n,
                                openReactionTray: function() {
                                    if ((0, R.canReactToMessage)(l)) {
                                        var u = {
                                            dirY: p.DirY.BOTTOM,
                                            dirX: p.DirX.CENTER,
                                            type: p.MenuType.ReactionSendTray,
                                            menu: (0, Du.jsx)(U.SendReactionsTrayContainer, {
                                                msg: l,
                                                selectedCallback: function(u) {
                                                    u !== H.MORE_REACTIONS ? (0, V.sendReactionToMsg)(l, u).catch((function() {})) : setTimeout((function() {
                                                        b(l)
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
                            }), (0, Du.jsx)(y.MenuBarItem, {
                                testid: "btn-close",
                                icon: _,
                                title: iu.fbt._("Close", null, {
                                    hk: "19Jpec"
                                }),
                                onClick: u.onClose
                            })]
                        }, "media-panel-header")
                    }), S]
                })
            };
            var a = n(t(963038)),
                i = t(774260),
                o = t(222876),
                r = n(t(799328)),
                l = t(377748),
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
                x = t(734778),
                B = t(659954),
                b = n(t(758927)),
                j = t(966454),
                M = t(450062),
                y = t(199479),
                S = t(994291),
                _ = t(518005),
                k = t(628707),
                P = t(791673),
                w = t(741942),
                T = t(154553),
                I = t(122269),
                N = t(723096),
                R = t(780532),
                O = t(340888),
                L = n(t(76372)),
                G = t(975178),
                V = t(179074),
                H = t(243326),
                U = t(799904),
                z = t(517841),
                q = t(233565),
                Y = t(242826),
                W = t(378776),
                K = t(776097),
                X = n(t(728056)),
                Z = t(160962),
                $ = t(43361),
                Q = t(735537),
                J = n(t(229677)),
                uu = (t(635959), t(714771)),
                eu = n(t(183424)),
                tu = t(404186),
                nu = n(t(99921)),
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
                    children: [(0, w.canReplyMsg)(t) ? (0, Du.jsx)(pu, {
                        msg: t,
                        onClose: n
                    }) : null, (0, P.canStarMsg)(t) ? (0, Du.jsx)(gu, {
                        msg: t
                    }) : null, t.canShowKeepOrUnkeepOption() ? (0, Du.jsx)(vu, {
                        msg: t
                    }) : null, (0, R.canReactToMessage)(t) ? (0, Du.jsx)(mu, {
                        msg: t,
                        openReactionTray: a,
                        sendReactionButtonRef: i
                    }) : null, (0, Du.jsx)(hu, {
                        msg: t,
                        onClose: n
                    }), (0, P.canMsgForward)(t) ? (0, Du.jsx)(xu, {
                        msg: t
                    }) : null, (0, Du.jsx)(yu, {
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
                    }) : null, (0, P.canStarMsg)(t) ? (0, Du.jsx)(gu, {
                        msg: t
                    }) : null, t.canShowKeepOrUnkeepOption() ? (0, Du.jsx)(vu, {
                        msg: t
                    }) : null, t.isStickerMsg ? (0, Du.jsx)(hu, {
                        msg: t,
                        onClose: n
                    }) : null, (0, R.canReactToMessage)(t) ? (0, Du.jsx)(mu, {
                        msg: t,
                        openReactionTray: a,
                        sendReactionButtonRef: i
                    }) : null, (0, P.canMsgForward)(t) ? (0, Du.jsx)(xu, {
                        msg: t
                    }) : null, t.isStickerMsg ? null : (0, Du.jsx)(Au, {
                        isMediaDownloadable: e,
                        msg: t,
                        type: cu.MenuBar
                    }), (0, P.canReportMsg)(t) && (0, _.messageLevelReportingEnabled)() ? (0, Du.jsx)(yu, {
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
                        var t = (0, l.getSearchContext)(e.chat, (0, W.unproxy)(e));
                        D.Cmd.openChatAt(e.chat, t).then((function(u) {
                            u && d.ComposeBoxActions.focus(e.chat)
                        }))
                    };
                return t === cu.Dropdown ? (0, Du.jsx)(h.DropdownItem, {
                    action: a,
                    children: iu.fbt._("Go to message", null, {
                        hk: "B1anG"
                    })
                }) : (0, Du.jsx)(y.MenuBarItem, {
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
                return (0, Du.jsx)(y.MenuBarItem, {
                    icon: (0, Du.jsx)(O.ReplyIcon, {}),
                    title: iu.fbt._("Reply", null, {
                        hk: "1C7DPa"
                    }),
                    onClick: function() {
                        t(), (0, i.delayMs)(M.CLOSE_ANIMATION_DURATION).then(du.bind(null, (0, W.unproxy)(e)))
                    }
                })
            }

            function hu(u) {
                var e = u.msg,
                    t = u.onClose;
                return (0, Du.jsx)(y.MenuBarItem, {
                    icon: (0, Du.jsx)(f.DeleteIcon, {}),
                    title: iu.fbt._("Delete", null, {
                        hk: "2KhPUX"
                    }),
                    onClick: function() {
                        k.ModalManager.open((0, Du.jsx)(nu.default, {
                            chat: e.chat,
                            msgList: [(0, W.unproxy)(e)],
                            onDelete: t
                        })), G.UiRevokeActionHelper.startSession(), G.UiRevokeActionHelper.messageSelected()
                    }
                })
            }

            function Au(u) {
                var e = u.msg,
                    t = u.type,
                    n = u.isMediaDownloadable,
                    a = function(u) {
                        u.stopPropagation(), m.FileSaver.initDownload((0, W.unproxy)(e))
                    };
                return t === cu.Dropdown ? (0, Du.jsx)(h.DropdownItem, {
                    action: a,
                    disabled: !n(),
                    children: iu.fbt._("Download", null, {
                        hk: "1g5Jix"
                    })
                }) : (0, Du.jsx)(y.MenuBarItem, {
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
                return e.type === T.MSG_TYPE.STICKER ? null : (0, Du.jsx)(y.MenuBarItem, {
                    testid: "reaction-entry-point",
                    icon: (0, Du.jsx)(I.ReactionsMediaIcon, {
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
                if (a.isKept && a.canShowUnkeepOption()) e = (0, Du.jsx)(Z.UndoKeepInChatMediaIcon, {}), t = function(u) {
                    u.stopPropagation(), (0, x.runUndoKeepInChatUX)((0, W.unproxy)(a), J.default.KIC_ENTRY_POINT_TYPE.MEDIA)
                }, n = iu.fbt._("Unkeep", null, {
                    hk: "1eGZng"
                });
                else {
                    if (a.isKept || !a.canShowKeepOption()) return null;
                    e = (0, Du.jsx)(B.KeepInChatMediaIcon, {}), t = function(u) {
                        u.stopPropagation(), (0, x.runKeepInChatUX)((0, W.unproxy)(a), J.default.KIC_ENTRY_POINT_TYPE.MEDIA)
                    }, n = iu.fbt._("Keep", null, {
                        hk: "1a48ae"
                    })
                }
                return (0, Du.jsx)(y.MenuBarItem, {
                    icon: e,
                    title: n,
                    onClick: t
                }, e)
            };

            function gu(u) {
                var e, t, n, a = u.msg;
                return a.star ? (e = function(u) {
                    u.stopPropagation(), D.Cmd.sendUnstarMsgs(a.chat, [(0, W.unproxy)(a)])
                }, t = (0, Du.jsx)($.UnstarBtnIcon, {}), n = b.default.t(607)) : (e = function(u) {
                    u.stopPropagation(), D.Cmd.sendStarMsgs(a.chat, [(0, W.unproxy)(a)])
                }, t = (0, Du.jsx)(Y.StarBtnIcon, {}), n = b.default.t(585)), (0, Du.jsx)(y.MenuBarItem, {
                    icon: t,
                    title: n,
                    onClick: e
                }, n)
            }

            function xu(u) {
                var e = u.msg;
                return (0, Du.jsx)(y.MenuBarItem, {
                    icon: (0, Du.jsx)(v.ForwardIcon, {}),
                    title: b.default.t(311),
                    onClick: function(u) {
                        u.stopPropagation(), e.isUnsentMedia ? k.ModalManager.open((0, Du.jsx)(tu.ConfirmPopup, {
                            title: b.default.t(301),
                            onOK: function() {
                                return k.ModalManager.close()
                            },
                            okText: iu.fbt._("OK", null, {
                                hk: "2KEeHb"
                            }),
                            children: b.default.t(298)
                        })) : k.ModalManager.open((0, Du.jsx)(g.ForwardMessageModalLoadable, {
                            msgs: [(0, W.unproxy)(e)],
                            onClose: function() {
                                return k.ModalManager.close()
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
                        (0, L.default)(e)
                    },
                    children: iu.fbt._("Reply privately", null, {
                        hk: "1XQeK2"
                    })
                })
            }

            function bu(u) {
                var e = u.msg,
                    t = function(u) {
                        u ? (0, z.sendMessageReportBlock)(e, q.SpamFlow.MediaViewer) : (0, z.sendMessageReport)(e, q.SpamFlow.MediaViewer), k.ModalManager.close()
                    };
                return (0, Du.jsx)(h.DropdownItem, {
                    action: function() {
                        k.ModalManager.open((0, Du.jsx)(au.default, {
                            isBusiness: e.senderObj.isBusiness,
                            isGroup: e.chat.isGroup,
                            onReport: t,
                            onCancel: function() {
                                return k.ModalManager.close()
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
                        t(), (0, i.delayMs)(M.CLOSE_ANIMATION_DURATION + 250).then(D.Cmd.msgInfoDrawer.bind(D.Cmd, (0, W.unproxy)(e)))
                    },
                    children: b.default.t(435)
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
                return t.isViewOnce ? (0, Du.jsx)(Su, {
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

            function yu(u) {
                var e = u.isMediaDownloadable,
                    t = u.isAlbumMedia,
                    n = u.msg,
                    a = u.onClose,
                    i = [];
                return ((0, w.canPrivateReply)(n) || (0, w.canPrivateReplyInRestrictedGrp)(n)) && i.push((0, Du.jsx)(Bu, {
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
                }, "dropdownDownload"))), (n.isViewOnce || (0, P.canReportMsg)(n) && (0, _.messageLevelReportingEnabled)()) && i.push((0, Du.jsx)(bu, {
                    msg: n
                }, "reportSpam")), (0, Du.jsx)(y.MenuBarItem, {
                    icon: (0, Du.jsx)(S.MenuIcon, {}),
                    title: b.default.t(430),
                    children: (0, Du.jsx)(p.Dropdown, {
                        type: p.MenuType.DropdownMenu,
                        flipOnRTL: !0,
                        dirX: p.DirX.LEFT,
                        children: i
                    })
                })
            }

            function Su(u) {
                var e = u.isMediaDownloadable,
                    t = u.msg,
                    n = u.onClose,
                    a = u.onViewOnceInfoClick;
                return (0, Du.jsxs)(Du.Fragment, {
                    children: [(0, Du.jsx)(y.MenuBarItem, {
                        icon: (0, Du.jsx)(Q.ViewOnceIcon, {
                            className: eu.default.voIcon
                        }),
                        title: iu.fbt._("View once info", null, {
                            hk: "47XkZ4"
                        }),
                        onClick: a
                    }), (0, Du.jsx)(yu, {
                        isMediaDownloadable: e,
                        isAlbumMedia: !1,
                        msg: t,
                        onClose: n
                    })]
                })
            }
        },
        924135: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(977202)),
                i = t(208188),
                o = n(t(289856)),
                r = n(t(121510)),
                l = n(t(258395)),
                s = n(t(911872)),
                D = t(120092),
                c = t(976576),
                d = n(t(380812)),
                f = n(t(229677)),
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
                            sticker: new c.StickerModel({
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
                        }) : (0, h.jsx)(D.StickerDetailsStickerPackInfo, {
                            name: n.stickerPackName,
                            publisher: n.stickerPackPublisher,
                            theme: D.Theme.MediaViewer,
                            sticker: new c.StickerModel({
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
                            children: (0, h.jsx)(s.default, {
                                ref: v,
                                width: n.fullWidth,
                                height: n.fullHeight,
                                onZoomIn: u.onImgZoomIn,
                                msg: t,
                                children: (0, h.jsx)(r.default, {
                                    mediaData: n,
                                    placeholderRenderer: function() {
                                        return (0, h.jsx)(d.default, {
                                            size: 376
                                        })
                                    },
                                    downloadMedia: function() {
                                        return null == t ? void 0 : t.downloadMedia({
                                            downloadEvenIfExpensive: !1,
                                            rmrReason: f.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                                            isUserInitiated: !1
                                        })
                                    },
                                    children: function(e) {
                                        return (0, h.jsx)(o.default, {
                                            className: (0, C.default)(l.default.content),
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
        209378: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(t(963038)),
                i = n(t(465470)),
                o = n(t(842418)),
                r = n(t(758927)),
                l = t(966454),
                s = n(t(258395)),
                D = n(t(528851)),
                c = t(426413),
                d = t(511043),
                f = t(980103),
                F = n(t(668181)),
                C = t(817390),
                E = t(780532),
                p = n(t(695323)),
                h = n(t(229677)),
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
                    y = u.onLoadedData,
                    S = u.startTime,
                    _ = void 0 === S ? 0 : S,
                    k = (0, g.useModelValues)(u.mediaData, ["mediaStage", "fullWidth", "fullHeight", "isGif", "isViewOnce", "preview", "renderableUrl", "streamable"]),
                    P = (0, m.useState)(!1),
                    w = (0, a.default)(P, 2),
                    T = w[0],
                    I = w[1],
                    N = (0, m.useState)(!0),
                    R = (0, a.default)(N, 2),
                    O = R[0],
                    L = R[1],
                    G = (0, m.useRef)(),
                    V = (0, m.useMemo)((function() {
                        return (k.mediaStage === l.MEDIA_DATA_STAGE.RESOLVED || k.streamable && k.isStreamable()) && (0, A.isNonZeroNumber)(k.fullWidth) && (0, A.isNonZeroNumber)(k.fullHeight) ? function(u) {
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
                            if (u.fullWidth >= d.MIN_WIDTH) return {
                                width: u.fullWidth,
                                height: u.fullHeight
                            };
                            return {
                                width: d.MIN_WIDTH,
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
                            rmrReason: h.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
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
                    U = k.mediaStage === l.MEDIA_DATA_STAGE.RESOLVED || k.streamable && k.isStreamable();
                U = U || B.isForcingRMR();
                var z = null,
                    q = C.ReactionBubbleType.MEDIA_ITEM;
                if (B && (0, E.shouldShowReactionBubble)(B, q) && (z = (0, x.jsx)(F.default, {
                        msgIds: [B.id.toString()],
                        reactionBubbleType: q,
                        reactionBubbleVisible: O
                    })), U) {
                    var Y, W, K = r.default.t(627);
                    return !T && (null == B ? void 0 : B.interactiveAnnotations) && B.interactiveAnnotations.length > 0 && (Y = (0, x.jsx)(i.default, {
                        annotations: B.interactiveAnnotations
                    })), W = H ? (0, x.jsxs)("div", {
                        className: (0, v.default)(s.default.content),
                        ref: G,
                        "data-testid": "media-gif",
                        children: [(0, x.jsx)(p.default, {
                            src: k.renderableUrl,
                            onClick: j,
                            autoPlay: !0,
                            loop: !0,
                            onLoadedData: y,
                            children: K
                        }), Y]
                    }) : (0, x.jsx)("div", {
                        ref: G,
                        className: (0, v.default)(s.default.content),
                        onClick: j,
                        "data-testid": "media-video",
                        children: (0, x.jsx)(f.WrappedMsgVideoPlayer, {
                            msg: B,
                            mediaData: k,
                            startTime: _,
                            onClose: M,
                            onError: function() {},
                            onFullscreenToggle: function(u) {
                                I(u)
                            },
                            autoPlay: n,
                            type: c.PLAYER_TYPE.MEDIA_VIEWER,
                            overlays: Y,
                            noPip: B.isViewOnce,
                            onLoadedData: y
                        })
                    }), (0, x.jsxs)(D.default, {
                        type: "scaleDown",
                        position: "relative",
                        objectPosition: "relative",
                        size: V,
                        onObjectLoad: b,
                        children: [W, z]
                    })
                }
                return (0, x.jsxs)(D.default, {
                    type: "scaleDown",
                    position: "relative",
                    objectPosition: "relative",
                    size: {
                        width: k.fullWidth,
                        height: k.fullHeight
                    },
                    children: [(0, x.jsx)(o.default, {
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
        900608: (u, e, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(u) {
                var e, t, n, r = u.onImageLoad,
                    S = u.isAnimatingIn,
                    z = u.onImgZoomIn,
                    Y = u.onExitAnimation,
                    K = u.onBack,
                    X = (0, L.useModelValues)(u.msg, ["id", "star", "isUnsentMedia", "isViewOnce", "isStickerMsg", "chat", "caption", "interactiveAnnotations", "type", "messageSecret"]),
                    Z = (0, L.useModelValues)(u.mediaData, ["mediaStage", "type", "isGif"]),
                    $ = (0, V.default)(S),
                    Q = (0, O.useRef)(null),
                    J = (0, O.useRef)(null),
                    uu = (0, O.useRef)(null),
                    eu = (0, O.useRef)(null),
                    tu = (0, O.useRef)(),
                    nu = (0, O.useRef)(!1),
                    au = (0, O.useRef)(!1),
                    iu = (0, O.useRef)(!1),
                    ou = (0, G.default)(y.NUX.EPHEMERAL_VIEW_ONCE_RECEIVER),
                    ru = (0, i.default)(ou, 2),
                    lu = ru[0],
                    su = ru[1],
                    Du = X.isViewOnce && lu,
                    cu = (0, O.useState)((function() {
                        return Z.mediaStage === g.MEDIA_DATA_STAGE.RESOLVED && u.isAnimatingIn && u.getZoomNode ? u.getZoomNode(X.id) : null
                    })),
                    du = (0, i.default)(cu, 1)[0],
                    fu = (0, O.useState)(!1),
                    Fu = (0, i.default)(fu, 2),
                    Cu = Fu[0],
                    Eu = Fu[1],
                    pu = (0, O.useState)(!1),
                    hu = (0, i.default)(pu, 2),
                    Au = hu[0],
                    mu = hu[1],
                    vu = (0, O.useState)(!u.isAnimatingIn),
                    gu = (0, i.default)(vu, 2),
                    xu = gu[0],
                    Bu = gu[1],
                    bu = (0, O.useState)(!1),
                    ju = (0, i.default)(bu, 2),
                    Mu = ju[0],
                    yu = ju[1],
                    Su = (0, O.useState)(!1),
                    _u = (0, i.default)(Su, 2),
                    ku = _u[0],
                    Pu = _u[1],
                    wu = function() {
                        var u = (0, U.jsx)(T.default, {
                            isPhoto: Z.type === p.default.TYPE.IMAGE,
                            onOkClick: function() {
                                su(), b.ModalManager.close()
                            }
                        });
                        b.ModalManager.open(u)
                    },
                    Tu = (0, H.default)((function(u, e) {
                        if (!Au) {
                            var t = Q.current;
                            if (t) {
                                var n = t.getInsideContainer();
                                if (n && n instanceof HTMLElement) {
                                    var a = t.getOutsideContainer();
                                    if (a && a instanceof HTMLElement) {
                                        var i = t.getTranslatePosition(a, u, e),
                                            o = i.translateX,
                                            r = i.translateY;
                                        (0, w.default)(n, "stop"), (0, w.default)(n, {
                                            translateX: o,
                                            translateY: r,
                                            scale: x.ZOOM_IN_FACTOR
                                        }, {
                                            duration: 0
                                        })
                                    }
                                }
                            }
                        }
                    }));
                (0, O.useEffect)((function() {
                    return __LOG__(2)`MediaViewerModal: Opened`, Du && wu(), D.default.focus(eu.current),
                        function() {
                            __LOG__(2)`MediaViewerModal: Closed`, Tu.cancel()
                        }
                }), []);
                var Iu, Nu, Ru = function() {
                        X.isViewOnce && (0, C.canMarkPlayed)(X) && (0, C.markPlayed)(X)
                    },
                    Ou = function(u) {
                        Ru(), r && r();
                        var e = du,
                            t = u.target;
                        e && t && S && t instanceof HTMLElement && (iu.current || (iu.current = !0, function(u, e) {
                            var t, n = e.getBoundingClientRect(),
                                a = u.getBoundingClientRect(),
                                i = a.top - n.top,
                                o = a.left - n.left,
                                r = u.clientWidth / e.clientWidth;
                            i -= (e.clientHeight - u.clientHeight) / 2, o -= (e.clientWidth - u.clientWidth) / 2, (0, w.default)(e, {
                                opacity: [1, 0],
                                translateX: [0, o],
                                translateY: [0, i],
                                scale: [1, r]
                            }, {
                                duration: x.ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            });
                            var l = null === (t = uu.current) || void 0 === t ? void 0 : t.getElement();
                            l && (0, w.default)(l, {
                                opacity: [1, 0]
                            }, {
                                duration: x.ANIMATION_DURATION
                            })
                        }(e, t)))
                    },
                    Lu = function() {
                        var e;
                        if (!nu.current) {
                            nu.current = !0, (0, o.isFunction)(Y) && Y();
                            var t, n = u.getZoomNode && u.getZoomNode(X.id);
                            if (!n) return K();
                            var a, i = Z.type;
                            if ([p.default.TYPE.IMAGE, p.default.TYPE.STICKER].includes(i) && Q.current) t = Q.current.getInsideContainer(), null === (a = Q.current) || void 0 === a || a.closingMediaZoomable();
                            else if (Z.isGif && J.current) {
                                var r;
                                t = J.current.getContainerElement(), null === (r = J.current) || void 0 === r || r.closingMedia()
                            }
                            if (!t) return K();
                            var l = t,
                                s = t.getBoundingClientRect(),
                                D = n.getBoundingClientRect(),
                                c = D.top - s.top,
                                d = D.left - s.left,
                                f = n.clientWidth / l.clientWidth;
                            c -= (l.clientHeight - n.clientHeight) / 2, d -= (l.clientWidth - n.clientWidth) / 2, (0, w.default)(t, {
                                translateX: [d, 0],
                                translateY: [c, 0],
                                scale: [f, 1]
                            }, {
                                duration: x.CLOSE_ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            }).then((function() {
                                K()
                            }));
                            var F = null === (e = uu.current) || void 0 === e ? void 0 : e.getElement();
                            F && (0, w.default)(F, {
                                opacity: [0, 1]
                            }, {
                                duration: x.CLOSE_ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            })
                        }
                    },
                    Gu = function(u) {
                        var e = Q.current;
                        u && e && (au.current = e.getHeightOverflow() > 0 || e.getWidthOverflow() > 0), Eu(u), z(u)
                    },
                    Vu = function(u) {
                        u.stopPropagation(), yu(!Mu)
                    };
                switch ((0, O.useEffect)((function() {
                        S || xu || !$ || Bu(!0)
                    }), [S, xu, $]), Z.type) {
                    case p.default.TYPE.IMAGE:
                        Iu = (0, U.jsx)(h.default, {
                            msg: X,
                            mediaData: Z,
                            onLoad: Ou,
                            onImgZoomIn: Gu,
                            onAnnotationTooltipDisplay: function() {
                                mu(!0)
                            },
                            onAnnotationTooltipDismiss: function() {
                                mu(!1)
                            },
                            preventDownload: X.isViewOnce,
                            ref: Q
                        }, X.id.toString());
                        break;
                    case p.default.TYPE.STICKER:
                        Iu = (0, U.jsx)(v.default, {
                            msg: X,
                            mediaData: Z,
                            onLoad: Ou,
                            onImgZoomIn: Gu,
                            onStickerPackView: Lu,
                            stickerPackViewDelay: x.CLOSE_ANIMATION_DURATION,
                            ref: Q
                        }, X.id.toString());
                        break;
                    case p.default.TYPE.VIDEO:
                        Iu = (0, U.jsx)(B.default, {
                            autoPlay: !Du,
                            msg: X,
                            mediaData: Z,
                            onLoadedData: Z.isGif ? Ou : Ru,
                            startTime: u.startTime,
                            onClose: Lu,
                            ref: J
                        }, X.id.toString());
                        break;
                    case p.default.TYPE.AUDIO:
                        Iu = (0, U.jsx)(E.default, {
                            mediaData: Z,
                            msg: X
                        }, X.id.toString());
                        break;
                    default:
                        __LOG__(4, void 0, new Error, !0)`type: ${Z.type}`, SEND_LOGS("MediaViewerModal: unexpected media type")
                }
                var Hu = u.msgIndexInAlbum >= 0 && u.albumSize >= 0;
                if (X.caption || Hu) {
                    var Uu, zu, qu;
                    Hu && (qu = F.default.t(505, {
                        number: u.msgIndexInAlbum + 1,
                        totalNumber: u.albumSize
                    }));
                    var Yu = c.Conversation({
                            mentions: X.mentionMap(),
                            groupMentions: X.groupMentionMap(),
                            phoneNumbers: (0, M.getPhoneNumbersFromMsg)(X),
                            links: (0, j.getLinksFromMsg)(X),
                            trusted: !0,
                            fromMe: X.id.fromMe
                        }),
                        Wu = Z.type === p.default.TYPE.IMAGE && !X.isViewOnce,
                        Ku = !xu && (Z.isGif || Wu);
                    Nu = (0, U.jsxs)(U.Fragment, {
                        children: [(0, U.jsxs)("p", {
                            className: (0, l.cx)((Uu = {}, (0, a.default)(Uu, I.default.captionWrapperExpandable, !0 === tu.current), (0, a.default)(Uu, I.default.captionWrapper, !0), Uu)),
                            onClick: tu.current ? Vu : void 0,
                            title: tu.current ? N.fbt._("Read more", null, {
                                hk: "2DvSvh"
                            }) : void 0,
                            "aria-hidden": Mu || void 0,
                            children: [(0, U.jsx)(s.EmojiText, {
                                className: (0, l.cx)((zu = {}, (0, a.default)(zu, I.default.captionHidden, Ku), (0, a.default)(zu, I.default.expanded, Mu), (0, a.default)(zu, I.default.mediaCaption, !0), zu)),
                                formatters: Yu,
                                ref: function(u) {
                                    uu.current = u
                                },
                                text: X.caption || qu
                            }), tu.current && (0, U.jsx)(P.default, {
                                xstyle: [q.captionReadMoreBtn, Mu && q.captionReadMoreBtnExpanded, Cu && q.captionReadMoreBtnZoomed],
                                onClick: Vu,
                                children: (0, U.jsx)(_.TextSpan, {
                                    children: N.fbt._("Read more", null, {
                                        hk: "2DvSvh"
                                    })
                                })
                            })]
                        }), Mu && (0, U.jsx)("p", {
                            className: (0, R.default)(I.default.captionWrapper, I.default.captionWrapperExpandable, I.default.captionExpanded),
                            onClick: Vu,
                            children: (0, U.jsx)(s.EmojiText, {
                                className: (0, R.default)(I.default.mediaCaption, I.default.mediaCaptionExpanded),
                                formatters: Yu,
                                text: X.caption
                            })
                        })]
                    })
                }
                var Xu = (0, l.cx)((e = {}, (0, a.default)(e, I.default.mediaWithCaption, !!Nu), (0, a.default)(e, I.default.media, !0), e)),
                    Zu = (0, l.cx)((t = {}, (0, a.default)(t, I.default.noThumbnails, X.isViewOnce || X.isStickerMsg), (0, a.default)(t, I.default.mediaViewerAnimate, u.isAnimatingIn), (0, a.default)(t, I.default.cursorZoomOut, Cu), (0, a.default)(t, "overlay", !0), (0, a.default)(t, I.default.mediaViewer, !0), t)),
                    $u = Cu && au.current ? function(u) {
                        Tu(u.pageX, u.pageY)
                    } : null,
                    Qu = Cu ? function(u) {
                        Tu.cancel();
                        var e = Q.current;
                        e && Cu && e.onClick(u)
                    } : null,
                    Ju = Cu ? null : Lu;
                null != Ju && X.isViewOnce && (Ju = function() {
                    Pu(!0)
                });
                var ue = !X.isViewOnce && !X.isStickerMsg;
                return (0, U.jsx)(k.UIE, {
                    displayName: "MediaViewer",
                    escapable: !0,
                    requestDismiss: Lu,
                    children: (0, U.jsx)(f.HotKeys, {
                        handlers: {
                            space: function(u) {
                                if (!S) {
                                    Tu.cancel();
                                    var e = Q.current;
                                    null != e && e.onKeyboardZoom(u)
                                }
                            }
                        },
                        ref: eu,
                        children: (0, U.jsxs)("div", {
                            className: Zu,
                            "data-animate-media-viewer": !0,
                            "data-testid": "media-viewer-modal",
                            onClick: Qu,
                            onMouseMove: $u,
                            children: [(0, U.jsx)(A.default, {
                                isHighlightClose: ku,
                                msg: X,
                                mediaData: Z,
                                onClose: Lu,
                                onHightlightCloseEnd: function() {
                                    Pu(!1)
                                },
                                onViewOnceInfoClick: function() {
                                    wu()
                                },
                                msgIndexInAlbum: u.msgIndexInAlbum
                            }), (0, U.jsx)("div", {
                                className: (0, l.cx)((n = {}, (0, a.default)(n, I.default.sticker, X.isStickerMsg), (0, a.default)(n, I.default.mediaContent, !0), n)),
                                onClick: Ju,
                                children: (0, U.jsx)(W, {
                                    hasNavigationButtons: ue,
                                    onNext: u.onNext,
                                    onPrev: u.onPrev,
                                    imgZoomed: Cu,
                                    children: (0, U.jsxs)("div", {
                                        className: Xu,
                                        children: [(0, U.jsx)(m.default, {
                                            msg: X,
                                            mediaData: Z
                                        }), Iu, (0, U.jsx)(d.default.Provider, {
                                            value: X.chat.groupMetadata,
                                            children: Nu
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
                d = n(t(685636)),
                f = t(704250),
                F = n(t(758927)),
                C = t(864580),
                E = n(t(40912)),
                p = n(t(719703)),
                h = n(t(45630)),
                A = n(t(747324)),
                m = n(t(890956)),
                v = n(t(924135)),
                g = t(966454),
                x = t(450062),
                B = n(t(209378)),
                b = t(628707),
                j = t(362974),
                M = t(915178),
                y = t(171738),
                S = t(659696),
                _ = t(558288),
                k = t(776097),
                P = n(t(83938)),
                w = n(t(931771)),
                T = n(t(392332)),
                I = n(t(127196)),
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
                        className: (0, R.default)(I.default.btnMediaPrev),
                        children: (0, U.jsx)("div", {
                            onClick: u.onPrev ? null : Y,
                            children: (0, U.jsx)(r.ChevronButton, {
                                type: r.ButtonType.Prev,
                                onClick: null !== (e = u.onPrev) && void 0 !== e ? e : void 0,
                                onKeyDown: null !== (t = u.onPrev) && void 0 !== t ? t : void 0,
                                disabled: !u.onPrev || u.imgZoomed,
                                theme: S.RoundTheme.Default
                            })
                        })
                    }), u.children, u.hasNavigationButtons && (0, U.jsx)("div", {
                        className: (0, R.default)(I.default.btnMediaNext),
                        children: (0, U.jsx)("div", {
                            onClick: u.onPrev ? null : Y,
                            children: (0, U.jsx)(r.ChevronButton, {
                                type: r.ButtonType.Next,
                                onClick: null !== (n = u.onNext) && void 0 !== n ? n : void 0,
                                onKeyDown: null !== (a = u.onNext) && void 0 !== a ? a : void 0,
                                disabled: !u.onNext || u.imgZoomed,
                                theme: S.RoundTheme.Default
                            })
                        })
                    })]
                })
            }
        },
        9128: (u, e, t) => {
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
                l = n(t(308632)),
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
        392332: (u, e, t) => {
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
                            theme: "popupTitle",
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
                r = t(71867),
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
                    u.entryPoint && (0, i.logPnhRequestRevealActionHelper)(s.default.PNH_CHAT_TYPE_TYPE.CTWA, s.default.PNH_MESSAGE_CHAT_PARTY.BIZ, s.default.PNH_ACTION_TYPE.REQUEST_DIALOG_APPEAR, u.entryPoint)
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
                        e && ((0, r.sendRequestPhoneNumber)((0, l.unproxy)(e)), null != u.entryPoint && (0, i.logPnhRequestRevealActionHelper)(s.default.PNH_CHAT_TYPE_TYPE.CTWA, s.default.PNH_MESSAGE_CHAT_PARTY.BIZ, s.default.PNH_ACTION_TYPE.SEND_REQUEST, u.entryPoint)), o.ModalManager.close()
                    },
                    okText: F,
                    onCancel: function() {
                        return o.ModalManager.close()
                    },
                    cancelText: C,
                    title: t,
                    children: n
                })
            };
            var a = t(202908),
                i = t(161721),
                o = t(628707),
                r = t(149968),
                l = t(378776),
                s = n(t(229677)),
                D = t(404186),
                c = t(548360),
                d = t(667294),
                f = t(785893)
        },
        518249: (u, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                default: () => n
            });
            const n = {
                footerNote: "_3b6HV",
                getTheAppLink: "_6g94l"
            }
        },
        815120: (u, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                default: () => n
            });
            const n = {
                wrapper: "_1vFkr",
                code: "_2y6H4",
                codeDarkMode: "_2U7uZ",
                codeLogo: "DLmjr"
            }
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
        480826: (u, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                default: () => n
            });
            const n = {
                businessHoursRow: "_3sfEB",
                firstRow: "_2sBkJ",
                businessHoursDay: "_2pvvT",
                businessHoursHours: "_3kLLJ",
                dayIsOpen: "_29-HA",
                businessHoursChevron: "_2XvVc",
                flipSvg: "_3fNaY"
            }
        },
        452674: (u, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                default: () => n
            });
            const n = {
                section: "_1we7x",
                description: "_2JSHQ",
                map: "mSpzh"
            }
        },
        814060: (u, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                default: () => n
            });
            const n = {
                contactBusinessInfo: "vXoia",
                contactBusinessInfoSpinner: "_3sbaB",
                dataRow: "_2hU95",
                businessHoursRow: "_229jY",
                businessHoursDay: "_2Ue47",
                businessHoursHours: "_150zM",
                businessHoursChevron: "_1Biw6",
                flipSvg: "_2McRc",
                dataRowIcon: "XiT7h",
                dataRowText: "_1jydV",
                businessTitleText: "uxam7",
                businessMap: "_2WOiM",
                address: "_2LXal",
                link: "_3mxhI",
                infoIcon: "_3TfXM"
            }
        },
        768140: (u, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                default: () => n
            });
            const n = {
                mediaViewerPlaceholder: "_2qUle",
                imageAudio: "_1leJw",
                mediaViewerAudio: "_17zHt"
            }
        },
        308632: (u, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                default: () => n
            });
            const n = {
                thumbsContainer: "_3GUJh",
                scrollContainer: "_27n9o",
                viewerThumbs: "_1P0Vh",
                mediaThumb: "_2nI8K",
                thumbPadding: "_1s0h2"
            }
        }
    }
]);