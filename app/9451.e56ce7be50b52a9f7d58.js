/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [9451], {
        27856: function(e) {
            e.exports = function() {
                "use strict";
                var e = Object.freeze || function(e) {
                        return e
                    },
                    t = e(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                    n = e(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "audio", "canvas", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "video", "view", "vkern"]),
                    r = e(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                    o = e(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
                    a = e(["#text"]),
                    i = Object.freeze || function(e) {
                        return e
                    },
                    l = i(["accept", "action", "align", "alt", "autocomplete", "background", "bgcolor", "border", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "coords", "crossorigin", "datetime", "default", "dir", "disabled", "download", "enctype", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "integrity", "ismap", "label", "lang", "list", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "type", "usemap", "valign", "value", "width", "xmlns"]),
                    s = i(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                    u = i(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                    c = i(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                    d = Object.hasOwnProperty,
                    f = Object.setPrototypeOf,
                    p = ("undefined" != typeof Reflect && Reflect).apply;

                function m(e, t) {
                    f && f(e, null);
                    for (var n = t.length; n--;) {
                        var r = t[n];
                        if ("string" == typeof r) {
                            var o = r.toLowerCase();
                            o !== r && (Object.isFrozen(t) || (t[n] = o), r = o)
                        }
                        e[r] = !0
                    }
                    return e
                }

                function y(e) {
                    var t = {},
                        n = void 0;
                    for (n in e) p(d, e, [n]) && (t[n] = e[n]);
                    return t
                }
                p || (p = function(e, t, n) {
                    return e.apply(t, n)
                });
                var h = Object.seal || function(e) {
                        return e
                    },
                    g = h(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
                    v = h(/<%[\s\S]*|[\s\S]*%>/gm),
                    b = h(/^data-[\-\w.\u00B7-\uFFFF]/),
                    w = h(/^aria-[\-\w]+$/),
                    T = h(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                    A = h(/^(?:\w+script|data):/i),
                    x = h(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),
                    E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };

                function S(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }
                var _ = ("undefined" != typeof Reflect && Reflect).apply,
                    M = Array.prototype.slice,
                    k = Object.freeze,
                    O = function() {
                        return "undefined" == typeof window ? null : window
                    };
                _ || (_ = function(e, t, n) {
                    return e.apply(t, n)
                });
                var L = function(e, t) {
                    if ("object" !== (void 0 === e ? "undefined" : E(e)) || "function" != typeof e.createPolicy) return null;
                    var n = null,
                        r = "data-tt-policy-suffix";
                    t.currentScript && t.currentScript.hasAttribute(r) && (n = t.currentScript.getAttribute(r));
                    var o = "dompurify" + (n ? "#" + n : "");
                    try {
                        return e.createPolicy(o, {
                            createHTML: function(e) {
                                return e
                            }
                        })
                    } catch (e) {
                        return console.warn("TrustedTypes policy " + o + " could not be created."), null
                    }
                };

                function C() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O(),
                        i = function(e) {
                            return C(e)
                        };
                    if (i.version = "2.0.0", i.removed = [], !e || !e.document || 9 !== e.document.nodeType) return i.isSupported = !1, i;
                    var d = e.document,
                        f = !1,
                        p = !1,
                        h = e.document,
                        D = e.DocumentFragment,
                        R = e.HTMLTemplateElement,
                        N = e.Node,
                        P = e.NodeFilter,
                        F = e.NamedNodeMap,
                        H = void 0 === F ? e.NamedNodeMap || e.MozNamedAttrMap : F,
                        I = e.Text,
                        j = e.Comment,
                        z = e.DOMParser,
                        U = e.TrustedTypes;
                    if ("function" == typeof R) {
                        var V = h.createElement("template");
                        V.content && V.content.ownerDocument && (h = V.content.ownerDocument)
                    }
                    var q = L(U, d),
                        B = q ? q.createHTML("") : "",
                        G = h,
                        W = G.implementation,
                        Y = G.createNodeIterator,
                        $ = G.getElementsByTagName,
                        Q = G.createDocumentFragment,
                        J = d.importNode,
                        Z = {};
                    i.isSupported = W && void 0 !== W.createHTMLDocument && 9 !== h.documentMode;
                    var K = g,
                        X = v,
                        ee = b,
                        te = w,
                        ne = A,
                        re = x,
                        oe = T,
                        ae = null,
                        ie = m({}, [].concat(S(t), S(n), S(r), S(o), S(a))),
                        le = null,
                        se = m({}, [].concat(S(l), S(s), S(u), S(c))),
                        ue = null,
                        ce = null,
                        de = !0,
                        fe = !0,
                        pe = !1,
                        me = !1,
                        ye = !1,
                        he = !1,
                        ge = !1,
                        ve = !1,
                        be = !1,
                        we = !1,
                        Te = !1,
                        Ae = !1,
                        xe = !0,
                        Ee = !0,
                        Se = !1,
                        _e = {},
                        Me = m({}, ["audio", "head", "math", "script", "style", "template", "svg", "video"]),
                        ke = m({}, ["audio", "video", "img", "source", "image"]),
                        Oe = null,
                        Le = m({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]),
                        Ce = null,
                        De = h.createElement("form"),
                        Re = function(e) {
                            Ce && Ce === e || (e && "object" === (void 0 === e ? "undefined" : E(e)) || (e = {}), ae = "ALLOWED_TAGS" in e ? m({}, e.ALLOWED_TAGS) : ie, le = "ALLOWED_ATTR" in e ? m({}, e.ALLOWED_ATTR) : se, Oe = "ADD_URI_SAFE_ATTR" in e ? m({}, e.ADD_URI_SAFE_ATTR) : Le, ue = "FORBID_TAGS" in e ? m({}, e.FORBID_TAGS) : {}, ce = "FORBID_ATTR" in e ? m({}, e.FORBID_ATTR) : {}, _e = "USE_PROFILES" in e && e.USE_PROFILES, de = !1 !== e.ALLOW_ARIA_ATTR, fe = !1 !== e.ALLOW_DATA_ATTR, pe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, me = e.SAFE_FOR_JQUERY || !1, ye = e.SAFE_FOR_TEMPLATES || !1, he = e.WHOLE_DOCUMENT || !1, be = e.RETURN_DOM || !1, we = e.RETURN_DOM_FRAGMENT || !1, Te = e.RETURN_DOM_IMPORT || !1, Ae = e.RETURN_TRUSTED_TYPE || !1, ve = e.FORCE_BODY || !1, xe = !1 !== e.SANITIZE_DOM, Ee = !1 !== e.KEEP_CONTENT, Se = e.IN_PLACE || !1, oe = e.ALLOWED_URI_REGEXP || oe, ye && (fe = !1), we && (be = !0), _e && (ae = m({}, [].concat(S(a))), le = [], !0 === _e.html && (m(ae, t), m(le, l)), !0 === _e.svg && (m(ae, n), m(le, s), m(le, c)), !0 === _e.svgFilters && (m(ae, r), m(le, s), m(le, c)), !0 === _e.mathMl && (m(ae, o), m(le, u), m(le, c))), e.ADD_TAGS && (ae === ie && (ae = y(ae)), m(ae, e.ADD_TAGS)), e.ADD_ATTR && (le === se && (le = y(le)), m(le, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && m(Oe, e.ADD_URI_SAFE_ATTR), Ee && (ae["#text"] = !0), he && m(ae, ["html", "head", "body"]), ae.table && m(ae, ["tbody"]), k && k(e), Ce = e)
                        },
                        Ne = function(e) {
                            i.removed.push({
                                element: e
                            });
                            try {
                                e.parentNode.removeChild(e)
                            } catch (t) {
                                e.outerHTML = B
                            }
                        },
                        Pe = function(e, t) {
                            try {
                                i.removed.push({
                                    attribute: t.getAttributeNode(e),
                                    from: t
                                })
                            } catch (e) {
                                i.removed.push({
                                    attribute: null,
                                    from: t
                                })
                            }
                            t.removeAttribute(e)
                        },
                        Fe = function(e) {
                            var t = void 0,
                                n = void 0;
                            if (ve) e = "<remove></remove>" + e;
                            else {
                                var r = e.match(/^[\s]+/);
                                (n = r && r[0]) && (e = e.slice(n.length))
                            }
                            if (f) try {
                                t = (new z).parseFromString(e, "text/html")
                            } catch (e) {}
                            if (p && m(ue, ["title"]), !t || !t.documentElement) {
                                var o = (t = W.createHTMLDocument("")).body;
                                o.parentNode.removeChild(o.parentNode.firstElementChild), o.outerHTML = q ? q.createHTML(e) : e
                            }
                            return n && t.body.insertBefore(h.createTextNode(n), t.body.childNodes[0] || null), $.call(t, he ? "html" : "body")[0]
                        };
                    i.isSupported && (function() {
                        try {
                            Fe('<svg><p><textarea><img src="</textarea><img src=x onerror=1//">').querySelector("svg img") && (f = !0)
                        } catch (e) {}
                    }(), function() {
                        try {
                            Fe("<x/><title>&lt;/title&gt;&lt;img&gt;").querySelector("title").innerHTML.match(/<\/title/) && (p = !0)
                        } catch (e) {}
                    }());
                    var He = function(e) {
                            return Y.call(e.ownerDocument || e, e, P.SHOW_ELEMENT | P.SHOW_COMMENT | P.SHOW_TEXT, (function() {
                                return P.FILTER_ACCEPT
                            }), !1)
                        },
                        Ie = function(e) {
                            return !(e instanceof I || e instanceof j || "string" == typeof e.nodeName && "string" == typeof e.textContent && "function" == typeof e.removeChild && e.attributes instanceof H && "function" == typeof e.removeAttribute && "function" == typeof e.setAttribute)
                        },
                        je = function(e) {
                            return "object" === (void 0 === N ? "undefined" : E(N)) ? e instanceof N : e && "object" === (void 0 === e ? "undefined" : E(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
                        },
                        ze = function(e, t, n) {
                            Z[e] && Z[e].forEach((function(e) {
                                e.call(i, t, n, Ce)
                            }))
                        },
                        Ue = function(e) {
                            var t = void 0;
                            if (ze("beforeSanitizeElements", e, null), Ie(e)) return Ne(e), !0;
                            var n = e.nodeName.toLowerCase();
                            if (ze("uponSanitizeElement", e, {
                                    tagName: n,
                                    allowedTags: ae
                                }), !ae[n] || ue[n]) {
                                if (Ee && !Me[n] && "function" == typeof e.insertAdjacentHTML) try {
                                    var r = e.innerHTML;
                                    e.insertAdjacentHTML("AfterEnd", q ? q.createHTML(r) : r)
                                } catch (e) {}
                                return Ne(e), !0
                            }
                            return "noscript" === n && e.innerHTML.match(/<\/noscript/i) || "noembed" === n && e.innerHTML.match(/<\/noembed/i) ? (Ne(e), !0) : (!me || e.firstElementChild || e.content && e.content.firstElementChild || !/</g.test(e.textContent) || (i.removed.push({
                                element: e.cloneNode()
                            }), e.innerHTML ? e.innerHTML = e.innerHTML.replace(/</g, "&lt;") : e.innerHTML = e.textContent.replace(/</g, "&lt;")), ye && 3 === e.nodeType && (t = (t = (t = e.textContent).replace(K, " ")).replace(X, " "), e.textContent !== t && (i.removed.push({
                                element: e.cloneNode()
                            }), e.textContent = t)), ze("afterSanitizeElements", e, null), !1)
                        },
                        Ve = function(e, t, n) {
                            if (xe && ("id" === t || "name" === t) && (n in h || n in De)) return !1;
                            if (fe && ee.test(t));
                            else if (de && te.test(t));
                            else {
                                if (!le[t] || ce[t]) return !1;
                                if (Oe[t]);
                                else if (oe.test(n.replace(re, "")));
                                else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== n.indexOf("data:") || !ke[e])
                                    if (pe && !ne.test(n.replace(re, "")));
                                    else if (n) return !1
                            }
                            return !0
                        },
                        qe = function(e) {
                            var t = void 0,
                                n = void 0,
                                r = void 0,
                                o = void 0,
                                a = void 0;
                            ze("beforeSanitizeAttributes", e, null);
                            var l = e.attributes;
                            if (l) {
                                var s = {
                                    attrName: "",
                                    attrValue: "",
                                    keepAttr: !0,
                                    allowedAttributes: le
                                };
                                for (a = l.length; a--;) {
                                    var u = t = l[a],
                                        c = u.name,
                                        d = u.namespaceURI;
                                    if (n = t.value.trim(), r = c.toLowerCase(), s.attrName = r, s.attrValue = n, s.keepAttr = !0, ze("uponSanitizeAttribute", e, s), n = s.attrValue, "name" === r && "IMG" === e.nodeName && l.id) o = l.id, l = _(M, l, []), Pe("id", e), Pe(c, e), l.indexOf(o) > a && e.setAttribute("id", o.value);
                                    else {
                                        if ("INPUT" === e.nodeName && "type" === r && "file" === n && s.keepAttr && (le[r] || !ce[r])) continue;
                                        "id" === c && e.setAttribute(c, ""), Pe(c, e)
                                    }
                                    if (s.keepAttr) {
                                        ye && (n = (n = n.replace(K, " ")).replace(X, " "));
                                        var f = e.nodeName.toLowerCase();
                                        if (Ve(f, r, n)) try {
                                            d ? e.setAttributeNS(d, c, n) : e.setAttribute(c, n), i.removed.pop()
                                        } catch (e) {}
                                    }
                                }
                                ze("afterSanitizeAttributes", e, null)
                            }
                        },
                        Be = function e(t) {
                            var n = void 0,
                                r = He(t);
                            for (ze("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) ze("uponSanitizeShadowNode", n, null), Ue(n) || (n.content instanceof D && e(n.content), qe(n));
                            ze("afterSanitizeShadowDOM", t, null)
                        };
                    return i.sanitize = function(t, n) {
                        var r = void 0,
                            o = void 0,
                            a = void 0,
                            l = void 0,
                            s = void 0;
                        if (t || (t = "\x3c!--\x3e"), "string" != typeof t && !je(t)) {
                            if ("function" != typeof t.toString) throw new TypeError("toString is not a function");
                            if ("string" != typeof(t = t.toString())) throw new TypeError("dirty is not a string, aborting")
                        }
                        if (!i.isSupported) {
                            if ("object" === E(e.toStaticHTML) || "function" == typeof e.toStaticHTML) {
                                if ("string" == typeof t) return e.toStaticHTML(t);
                                if (je(t)) return e.toStaticHTML(t.outerHTML)
                            }
                            return t
                        }
                        if (ge || Re(n), i.removed = [], Se);
                        else if (t instanceof N) 1 === (o = (r = Fe("\x3c!--\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === o.nodeName || "HTML" === o.nodeName ? r = o : r.appendChild(o);
                        else {
                            if (!be && !ye && !he && Ae && -1 === t.indexOf("<")) return q ? q.createHTML(t) : t;
                            if (!(r = Fe(t))) return be ? null : B
                        }
                        r && ve && Ne(r.firstChild);
                        for (var u = He(Se ? t : r); a = u.nextNode();) 3 === a.nodeType && a === l || Ue(a) || (a.content instanceof D && Be(a.content), qe(a), l = a);
                        if (l = null, Se) return t;
                        if (be) {
                            if (we)
                                for (s = Q.call(r.ownerDocument); r.firstChild;) s.appendChild(r.firstChild);
                            else s = r;
                            return Te && (s = J.call(d, s, !0)), s
                        }
                        var c = he ? r.outerHTML : r.innerHTML;
                        return ye && (c = (c = c.replace(K, " ")).replace(X, " ")), q && Ae ? q.createHTML(c) : c
                    }, i.setConfig = function(e) {
                        Re(e), ge = !0
                    }, i.clearConfig = function() {
                        Ce = null, ge = !1
                    }, i.isValidAttribute = function(e, t, n) {
                        Ce || Re({});
                        var r = e.toLowerCase(),
                            o = t.toLowerCase();
                        return Ve(r, o, n)
                    }, i.addHook = function(e, t) {
                        "function" == typeof t && (Z[e] = Z[e] || [], Z[e].push(t))
                    }, i.removeHook = function(e) {
                        Z[e] && Z[e].pop()
                    }, i.removeHooks = function(e) {
                        Z[e] && (Z[e] = [])
                    }, i.removeAllHooks = function() {
                        Z = {}
                    }, i
                }
                return C()
            }()
        },
        49090: e => {
            function t(e, t) {
                e.onload = function() {
                    this.onerror = this.onload = null, t(null, e)
                }, e.onerror = function() {
                    this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e)
                }
            }

            function n(e, t) {
                e.onreadystatechange = function() {
                    "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t(null, e))
                }
            }
            e.exports = function(e, r, o) {
                var a = document.head || document.getElementsByTagName("head")[0],
                    i = document.createElement("script");
                "function" == typeof r && (o = r, r = {}), r = r || {}, o = o || function() {}, i.type = r.type || "text/javascript", i.charset = r.charset || "utf8", i.async = !("async" in r) || !!r.async, i.src = e, r.attrs && function(e, t) {
                    for (var n in t) e.setAttribute(n, t[n])
                }(i, r.attrs), r.text && (i.text = "" + r.text), ("onload" in i ? t : n)(i, o), i.onload || t(i, o), a.appendChild(i)
            }
        },
        68356: (e, t, n) => {
            "use strict";
            var r = n(60077).default,
                o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function l(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            var s = n(67294),
                u = n(45697),
                c = [],
                d = [];

            function f(e) {
                var t = e(),
                    n = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return n.promise = t.then((function(e) {
                    return n.loading = !1, n.loaded = e, e
                })).catch((function(e) {
                    throw n.loading = !1, n.error = e, e
                })), n
            }

            function p(e) {
                var t = {
                        loading: !1,
                        loaded: {},
                        error: null
                    },
                    n = [];
                try {
                    Object.keys(e).forEach((function(r) {
                        var o = f(e[r]);
                        o.loading ? t.loading = !0 : (t.loaded[r] = o.loaded, t.error = o.error), n.push(o.promise), o.promise.then((function(e) {
                            t.loaded[r] = e
                        })).catch((function(e) {
                            t.error = e
                        }))
                    }))
                } catch (e) {
                    t.error = e
                }
                return t.promise = r.all(n).then((function(e) {
                    return t.loading = !1, e
                })).catch((function(e) {
                    throw t.loading = !1, e
                })), t
            }

            function m(e, t) {
                return s.createElement((n = e) && n.__esModule ? n.default : n, t);
                var n
            }

            function y(e, t) {
                var r, f;
                if (!t.loading) throw new Error("react-loadable requires a `loading` component");
                var p = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        render: m,
                        webpack: null,
                        modules: null
                    }, t),
                    y = null;

                function h() {
                    return y || (y = e(p.loader)), y.promise
                }
                return c.push(h), "function" == typeof p.webpack && d.push((function() {
                    if (e = p.webpack, "object" === o(n.m) && e().every((function(e) {
                            return void 0 !== e && void 0 !== n.m[e]
                        }))) return h();
                    var e
                })), f = r = function(t) {
                    function n(r) {
                        a(this, n);
                        var o = i(this, t.call(this, r));
                        return o.retry = function() {
                            o.setState({
                                error: null,
                                loading: !0,
                                timedOut: !1
                            }), y = e(p.loader), o._loadModule()
                        }, h(), o.state = {
                            error: y.error,
                            pastDelay: !1,
                            timedOut: !1,
                            loading: y.loading,
                            loaded: y.loaded
                        }, o
                    }
                    return l(n, t), n.preload = function() {
                        return h()
                    }, n.prototype.componentWillMount = function() {
                        this._mounted = !0, this._loadModule()
                    }, n.prototype._loadModule = function() {
                        var e = this;
                        if (this.context.loadable && Array.isArray(p.modules) && p.modules.forEach((function(t) {
                                e.context.loadable.report(t)
                            })), y.loading) {
                            "number" == typeof p.delay && (0 === p.delay ? this.setState({
                                pastDelay: !0
                            }) : this._delay = setTimeout((function() {
                                e.setState({
                                    pastDelay: !0
                                })
                            }), p.delay)), "number" == typeof p.timeout && (this._timeout = setTimeout((function() {
                                e.setState({
                                    timedOut: !0
                                })
                            }), p.timeout));
                            var t = function() {
                                e._mounted && (e.setState({
                                    error: y.error,
                                    loaded: y.loaded,
                                    loading: y.loading
                                }), e._clearTimeouts())
                            };
                            y.promise.then((function() {
                                t()
                            })).catch((function(e) {
                                t()
                            }))
                        }
                    }, n.prototype.componentWillUnmount = function() {
                        this._mounted = !1, this._clearTimeouts()
                    }, n.prototype._clearTimeouts = function() {
                        clearTimeout(this._delay), clearTimeout(this._timeout)
                    }, n.prototype.render = function() {
                        return this.state.loading || this.state.error ? s.createElement(p.loading, {
                            isLoading: this.state.loading,
                            pastDelay: this.state.pastDelay,
                            timedOut: this.state.timedOut,
                            error: this.state.error,
                            retry: this.retry
                        }) : this.state.loaded ? p.render(this.state.loaded, this.props) : null
                    }, n
                }(s.Component), r.contextTypes = {
                    loadable: u.shape({
                        report: u.func.isRequired
                    })
                }, f
            }

            function h(e) {
                return y(f, e)
            }
            h.Map = function(e) {
                if ("function" != typeof e.render) throw new Error("LoadableMap requires a `render(loaded, props)` function");
                return y(p, e)
            };
            var g = function(e) {
                function t() {
                    return a(this, t), i(this, e.apply(this, arguments))
                }
                return l(t, e), t.prototype.getChildContext = function() {
                    return {
                        loadable: {
                            report: this.props.report
                        }
                    }
                }, t.prototype.render = function() {
                    return s.Children.only(this.props.children)
                }, t
            }(s.Component);

            function v(e) {
                for (var t = []; e.length;) {
                    var n = e.pop();
                    t.push(n())
                }
                return r.all(t).then((function() {
                    if (e.length) return v(e)
                }))
            }
            g.propTypes = {
                report: u.func.isRequired
            }, g.childContextTypes = {
                loadable: u.shape({
                    report: u.func.isRequired
                }).isRequired
            }, h.Capture = g, h.preloadAll = function() {
                return new r((function(e, t) {
                    v(c).then(e, t)
                }))
            }, h.preloadReady = function() {
                return new r((function(e, t) {
                    v(d).then(e, e)
                }))
            }, e.exports = h
        },
        33988: e => {
            "use strict";
            var t;
            /**
             * @link https://github.com/gajus/sister for the canonical source repository
             * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
             */
            t = function() {
                var e = {},
                    t = {};
                return e.on = function(e, n) {
                    var r = {
                        name: e,
                        handler: n
                    };
                    return t[e] = t[e] || [], t[e].unshift(r), r
                }, e.off = function(e) {
                    var n = t[e.name].indexOf(e); - 1 !== n && t[e.name].splice(n, 1)
                }, e.trigger = function(e, n) {
                    var r, o = t[e];
                    if (o)
                        for (r = o.length; r--;) o[r].handler(n)
                }, e
            }, e.exports = t
        },
        66006: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r, o = n(22275),
                a = (r = o) && r.__esModule ? r : {
                    default: r
                };
            t.default = {
                pauseVideo: {
                    acceptableStates: [a.default.ENDED, a.default.PAUSED],
                    stateChangeRequired: !1
                },
                playVideo: {
                    acceptableStates: [a.default.ENDED, a.default.PLAYING],
                    stateChangeRequired: !1
                },
                seekTo: {
                    acceptableStates: [a.default.ENDED, a.default.PLAYING, a.default.PAUSED],
                    stateChangeRequired: !0,
                    timeout: 3e3
                }
            }, e.exports = t.default
        },
        89125: (e, t, n) => {
            "use strict";
            var r = n(60077).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = s(n(9215)),
                a = s(n(28255)),
                i = s(n(87382)),
                l = s(n(66006));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = (0, o.default)("youtube-player"),
                c = {
                    proxyEvents: function(e) {
                        var t = {},
                            n = function(n) {
                                var r = "on" + n.slice(0, 1).toUpperCase() + n.slice(1);
                                t[r] = function(t) {
                                    u('event "%s"', r, t), e.trigger(n, t)
                                }
                            },
                            r = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (var l, s = i.default[Symbol.iterator](); !(r = (l = s.next()).done); r = !0) {
                                n(l.value)
                            }
                        } catch (e) {
                            o = !0, a = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return t
                    },
                    promisifyPlayer: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = {},
                            o = function(o) {
                                t && l.default[o] ? n[o] = function() {
                                    for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                                    return e.then((function(e) {
                                        var t = l.default[o],
                                            a = e.getPlayerState(),
                                            i = e[o].apply(e, n);
                                        return t.stateChangeRequired || Array.isArray(t.acceptableStates) && -1 === t.acceptableStates.indexOf(a) ? new r((function(n) {
                                            e.addEventListener("onStateChange", (function r() {
                                                var o = e.getPlayerState(),
                                                    a = void 0;
                                                "number" == typeof t.timeout && (a = setTimeout((function() {
                                                    e.removeEventListener("onStateChange", r), n()
                                                }), t.timeout)), Array.isArray(t.acceptableStates) && -1 !== t.acceptableStates.indexOf(o) && (e.removeEventListener("onStateChange", r), clearTimeout(a), n())
                                            }))
                                        })).then((function() {
                                            return i
                                        })) : i
                                    }))
                                } : n[o] = function() {
                                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                    return e.then((function(e) {
                                        return e[o].apply(e, n)
                                    }))
                                }
                            },
                            i = !0,
                            s = !1,
                            u = void 0;
                        try {
                            for (var c, d = a.default[Symbol.iterator](); !(i = (c = d.next()).done); i = !0) {
                                var f = c.value;
                                o(f)
                            }
                        } catch (e) {
                            s = !0, u = e
                        } finally {
                            try {
                                !i && d.return && d.return()
                            } finally {
                                if (s) throw u
                            }
                        }
                        return n
                    }
                };
            t.default = c, e.exports = t.default
        },
        22275: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = {
                BUFFERING: 3,
                ENDED: 0,
                PAUSED: 2,
                PLAYING: 1,
                UNSTARTED: -1,
                VIDEO_CUED: 5
            }, e.exports = t.default
        },
        87382: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], e.exports = t.default
        },
        28255: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], e.exports = t.default
        },
        11062: (e, t, n) => {
            "use strict";
            var r = n(60077).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                a = s(n(33988)),
                i = s(n(55900)),
                l = s(n(89125));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = void 0;
            t.default = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    s = (0, a.default)();
                if (u || (u = (0, i.default)(s)), t.events) throw new Error("Event handlers cannot be overwritten.");
                if ("string" == typeof e && !document.getElementById(e)) throw new Error('Element "' + e + '" does not exist.');
                t.events = l.default.proxyEvents(s);
                var c = new r((function(n) {
                        "object" === (void 0 === e ? "undefined" : o(e)) && e.playVideo instanceof Function ? n(e) : u.then((function(r) {
                            var o = new r.Player(e, t);
                            return s.on("ready", (function() {
                                n(o)
                            })), null
                        }))
                    })),
                    d = l.default.promisifyPlayer(c, n);
                return d.on = s.on, d.off = s.off, d
            }, e.exports = t.default
        },
        55900: (e, t, n) => {
            "use strict";
            var r = n(60077).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o, a = n(49090),
                i = (o = a) && o.__esModule ? o : {
                    default: o
                };
            t.default = function(e) {
                return new r((function(t) {
                    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) t(window.YT);
                    else {
                        var n = "http:" === window.location.protocol ? "http:" : "https:";
                        (0, i.default)(n + "//www.youtube.com/iframe_api", (function(t) {
                            t && e.trigger("error", t)
                        }));
                        var r = window.onYouTubeIframeAPIReady;
                        window.onYouTubeIframeAPIReady = function() {
                            r && r(), t(window.YT)
                        }
                    }
                }))
            }, e.exports = t.default
        },
        9215: (e, t, n) => {
            function r() {
                var e;
                try {
                    e = t.storage.debug
                } catch (e) {}
                return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
            }(t = e.exports = n(55046)).log = function() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }, t.formatArgs = function(e) {
                var n = this.useColors;
                if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return;
                var r = "color: " + this.color;
                e.splice(1, 0, r, "color: inherit");
                var o = 0,
                    a = 0;
                e[0].replace(/%[a-zA-Z%]/g, (function(e) {
                    "%%" !== e && (o++, "%c" === e && (a = o))
                })), e.splice(a, 0, r)
            }, t.save = function(e) {
                try {
                    null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                } catch (e) {}
            }, t.load = r, t.useColors = function() {
                if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
                return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                try {
                    return window.localStorage
                } catch (e) {}
            }(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }, t.enable(r())
        },
        55046: (e, t, n) => {
            var r;

            function o(e) {
                function n() {
                    if (n.enabled) {
                        var e = n,
                            o = +new Date,
                            a = o - (r || o);
                        e.diff = a, e.prev = r, e.curr = o, r = o;
                        for (var i = new Array(arguments.length), l = 0; l < i.length; l++) i[l] = arguments[l];
                        i[0] = t.coerce(i[0]), "string" != typeof i[0] && i.unshift("%O");
                        var s = 0;
                        i[0] = i[0].replace(/%([a-zA-Z%])/g, (function(n, r) {
                            if ("%%" === n) return n;
                            s++;
                            var o = t.formatters[r];
                            if ("function" == typeof o) {
                                var a = i[s];
                                n = o.call(e, a), i.splice(s, 1), s--
                            }
                            return n
                        })), t.formatArgs.call(e, i);
                        var u = n.log || t.log || console.log.bind(console);
                        u.apply(e, i)
                    }
                }
                return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = function(e) {
                    var n, r = 0;
                    for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
                    return t.colors[Math.abs(r) % t.colors.length]
                }(e), "function" == typeof t.init && t.init(n), n
            }(t = e.exports = o.debug = o.default = o).coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e
            }, t.disable = function() {
                t.enable("")
            }, t.enable = function(e) {
                t.save(e), t.names = [], t.skips = [];
                for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++) n[o] && ("-" === (e = n[o].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
            }, t.enabled = function(e) {
                var n, r;
                for (n = 0, r = t.skips.length; n < r; n++)
                    if (t.skips[n].test(e)) return !1;
                for (n = 0, r = t.names.length; n < r; n++)
                    if (t.names[n].test(e)) return !0;
                return !1
            }, t.humanize = n(14680), t.names = [], t.skips = [], t.formatters = {}
        },
        14680: e => {
            var t = 1e3,
                n = 60 * t,
                r = 60 * n,
                o = 24 * r,
                a = 365.25 * o;

            function i(e, t, n) {
                if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
            }
            e.exports = function(e, l) {
                l = l || {};
                var s, u = typeof e;
                if ("string" === u && e.length > 0) return function(e) {
                    if ((e = String(e)).length > 100) return;
                    var i = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                    if (!i) return;
                    var l = parseFloat(i[1]);
                    switch ((i[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return l * a;
                        case "days":
                        case "day":
                        case "d":
                            return l * o;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return l * r;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return l * n;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return l * t;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return l;
                        default:
                            return
                    }
                }(e);
                if ("number" === u && !1 === isNaN(e)) return l.long ? i(s = e, o, "day") || i(s, r, "hour") || i(s, n, "minute") || i(s, t, "second") || s + " ms" : function(e) {
                    if (e >= o) return Math.round(e / o) + "d";
                    if (e >= r) return Math.round(e / r) + "h";
                    if (e >= n) return Math.round(e / n) + "m";
                    if (e >= t) return Math.round(e / t) + "s";
                    return e + "ms"
                }(e);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
            }
        }
    }
]);